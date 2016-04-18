window.acquireinsigh = window.acquireinsigh || {};

window.acquireinsigh = function () {
    var self = this;
    self.siteCode = undefined;
    self.domain = undefined;
    self.cuidname = "_uid";
    self.protocol = self.protocol = window.location.protocol;
    self.getUrl = function (site) {
        self.siteCode = site;
        self.domain = window.location.host ? window.location.host : window.location.hostname;
        if (!self.domain) self.domain = document.hostname;
        if (!self.protocol) self.protocol = "http;";
        var cuid = self.getCookie(self.cuidname);
        if (!cuid) {
            var guid = self.guid();
            var exp = new Date();
            exp.setTime(exp.getTime() + 4 * 60 * 60 * 1000);
            self.setCookie(self.cuidname, guid, exp);
            cuid = self.getCookie(self.cuidname);
        }
        var pixelUrl = self.protocol + "//acquireinsight.net/pixel/param?sc=" + self.siteCode + "&_uid=" + cuid;
        return pixelUrl;
    };
    self.setPixel = function(site, data) {
        var q = self.toQuery(data);
        var url = self.getUrl(site) + (q.length > 0 ? "&" + q : "");
        try {
            var img = document.createElement("img");
            img.src = url;
            img.style.display = "none";
            document.body.appendChild(img);
        } catch (err) {
            document.body.innerHTML += "<img src='" + url + "' style='display:none' />";
        }
    };
    self.guid = function () {
        var fp8 = function (s) {
            var p = (Math.random().toString(16) + "000000000").substr(2, 8);
            return s ? "" + p.substr(4, 4) + "" + p.substr(0, 4) : p;
        };
        //return fp8() + fp8(true) + fp8(true) + fp8();
        return (fp8(true) + fp8(true)).toUpperCase();
    };
    self.getCookie = function (n) {
        var s = document.cookie.indexOf(n + "=");
        var len = s + n.length + 1;
        if ((!s) && (n !== document.cookie.substring(0, n.length))) return null;
        if (s === -1) return null;
        var end = document.cookie.indexOf(";", len);
        if (end === -1) end = document.cookie.length;
        return decodeURI(document.cookie.substring(len, end));
    };
    self.setCookie = function (name, value, expires, path, domain, secure) {
        var cookieString = name + "=" + encodeURI(value) +
        ((expires) ? ";expires=" + expires.toGMTString() : "") +
        ((path) ? ";path=" + path : "") +
        ((domain) ? ";domain=" + domain : "") +
        ((secure) ? ";secure" : "");
        document.cookie = cookieString;
    };
    self.toQuery = function(j) {
        try {
            if (j === "undefined" || j == null) return "";
            var q = "";
            for (var k in j) {
                if (j.hasOwnProperty(k)) {
                    q += (encodeURI(String(k)) + "=" + encodeURI(String(j[k])) + "&");
                }
            }
            return q.length > 1 ? q.substr(0, q.length - 1) : "";
        } catch (err) {
            return "";
        }
    };

    return {
        url: self.getUrl,
        pixel: self.setPixel
    };
}();
