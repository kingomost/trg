﻿/* SiteCatalyst code version: H.23.6.
Copyright 1996-2010 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */
/************************ ADDITIONAL FEATURES ************************
Plugins
*/

var s = s_gi(s_account)

/************************** CONFIG SECTION **************************/
/* Site Specific Config*/
if (typeof s_c_linkInternalFilters != 'undefined' && s_c_linkInternalFilters) { s.linkInternalFilters = s_c_linkInternalFilters; } else { s.linkInternalFilters = "javascript:,." }
if (typeof s_c_currencyCode != 'undefined' && s_c_currencyCode) { s.currencyCode = s_c_currencyCode; } else { s.currencyCode = "USD" }
if (typeof s_c_cookieDomainPeriods != 'undefined' && s_c_cookieDomainPeriods) s.cookieDomainPeriods = s_c_cookieDomainPeriods;
if (typeof s_c_charSet != 'undefined' && s_c_charSet) s.charSet = s_c_charSet;
if (typeof s_c_scYear != 'undefined' && s_c_scYear) { s.scYear = s_c_scYear; } else {
    s.scDate = new Date();
    s.scYear = s.scDate.getFullYear();
}
if (typeof s_c_scTimeZone != 'undefined' && s_c_scTimeZone) { s.scTimeZone = s_c_scTimeZone; } else { s.scTimeZone = "-5" }
if (typeof s_c_busUnit != 'undefined' && s_c_busUnit) { s.prop29 = s_c_busUnit; } else { s.prop29 = "no business unit:" + location.href }
if (typeof s_c_partnerSites != 'undefined' && s_c_partnerSites) { s.partnerSites = s_c_partnerSites; } else { s.partnerSites = "" }
if (typeof s_c_defaultPage != 'undefined' && s_c_defaultPage) { s.defaultPage = s_c_defaultPage; } else { s.defaultPage = "noDefaultPage" }
/* Link Tracking Config */
s.trackDownloadLinks = true
s.trackExternalLinks = true
s.trackInlineStats = true
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,asf,asx,bmp,eps,flv,gif,jpeg,mpeg,mp4,png,swv,swz,txt,vob,wma,xml,xslt,rtf,dot,mpp,swf"
if (typeof s_c_addDLFileTypes != 'undefined' && s_c_addDLFileTypes) { s.linkDownloadFileTypes = s.linkDownloadFileTypes + ',' + s_c_addDLFileTypes }
s.linkLeaveQueryString = false
s.linkTrackVars = "prop12,prop13,prop14,prop15"
s.linkTrackEvents = "None"
/* Plugin Config */
s.usePlugins = true
s.ActionDepthTest = true

/* Page Name Plugin Config */
s.siteID = ""            // leftmost value in pagename
s.queryVarsList = ""     // query parameters to keep
s.pathExcludeDelim = ";" // portion of the path to exclude
s.pathConcatDelim = ":"   // page name component separator
s.pathExcludeList = ""   // elements to exclude from the path

/* Form Analysis Config */
if (typeof s_c_formList != 'undefined' && s_c_formList) s.formList = s_c_formList
s.trackFormList = true //whitelist
s.trackPageName = false
s.useCommerce = false
s.varUsed = "prop6"
s.eventList = "" //Abandon,Success,Error


function s_doPlugins(s) {
    /* Add calls to plugins here */

    /* Set pageName */
    if (!s.pageType && !s.pageName)
        s.pageName = s.getPageName();

    if (!s.channel) s.channel = s.channelExtract(":", 1, s.pageName, 1);
    if (!s.prop2) s.prop2 = s.channelExtract(":", 2, s.pageName, 1);
    if (!s.prop3) s.prop3 = s.channelExtract(":", 3, s.pageName, 1);
    if (!s.prop8) s.prop8 = s.channelExtract(":", 8, s.pageName, 1);

    /* Copy prop8 to hier1 */
    if (s.prop8 && !s.hier1) s.hier1 = "D=c8";

    /* External tracking codes */
    if (!s.campaign) {
        s.tempCamp = s.getQueryParam('cmpid')
    } else (s.tempCamp = s.campaign)

    if (s.tempCamp) {
        if (typeof s_c_attType != 'undefined' && s_c_attType) {
            s.attType = s.getQueryParam(s_c_attType); s.tempCampDD = s.tempCamp + s.attType;
        } else { s.tempCampDD = s.tempCamp }
    }
    s.tempCampDD = s.getValOnce(s.tempCampDD, 'gvo_s_campaign', 0)
    if (s.tempCampDD) {
        s.campaign = s.tempCamp
        if (s.attType) { s.eVar36 = s.attType } else { s.eVar36 = "n/a" }
    }



    /* Internal tracking codes */

    if (!s.eVar17) {
        s.tempIntCamp = s.getQueryParam('intcmp')
    } else (s.tempIntCamp = s.eVar17)

    if (s.tempIntCamp) {
        if (typeof s_c_intAttType != 'undefined' && s_c_intAttType) {
            s.intAttType = s.getQueryParam(s_c_intAttType); s.tempIntCampDD = s.tempIntCamp + s.intAttType;
        } else { s.tempIntCampDD = s.tempIntCamp }
    }
    s.tempIntCampDD = s.getValOnce(s.tempIntCampDD, 'gvo_s_eVar17', 0)
    if (s.tempIntCampDD) {
        s.eVar17 = s.tempIntCamp
        if (s.intAttType) { s.eVar37 = s.intAttType } else { s.eVar37 = "n/a" }
    }



    /* Site Search */
    s_searchPage = s.getPreviousValue(s.pageName, 'gpv_pageName', '');
    if (s.prop16) {
        /* s.prop16=s.prop16.toLowerCase(); */
        s.eVar16 = s.prop16;
        var t_search = s.getValOnce(s.eVar16, 'evar16', 0);
        if (t_search) {
            s.events = s.apl(s.events, "event1", ",", 2);
            s.prop18 = s_searchPage;
        }
    }

    /* Secondary Site Search */
    if (s.prop71) {
        /* s.prop71=s.prop71.toLowerCase(); */
        s.eVar71 = s.prop71;
        var t_search = s.getValOnce(s.eVar71, 'evar71', 0);
        if (t_search) {
            s.events = s.apl(s.events, "event14", ",", 2);
            s.prop73 = s_searchPage;
        }
    }

    /* Visit Depth of 3 */
    if (s.ActionDepthTest) {
        s.pdvalue = s.getActionDepth("s_depth");
        if (s.pdvalue == 3) s.events = s.apl(s.events, 'event3', ',', 2);
        s.ActionDepthTest = false;
    }

    /* Timeparting EST */
    s.prop22 = s.getTimeParting('h', s.scTimeZone, s.scYear); // Set hour
    s.eVar22 = "D=c22"
    s.prop23 = s.getTimeParting('d', s.scTimeZone, s.scYear); // Set day
    s.eVar23 = "D=c23"

    /* New Or Repeat Visitor */
    s.prop74 = s.getNewRepeat(30, 's_getNewRepeat');
    s.eVar74 = s.prop74;

    /* Visitor Type */
    if (!s.manageVisitorType) {
        s.prop19 = s.eVar19 = s.getAndPersistValue(s.prop19, 's_pers_prop19', 1825);
        if (!s.prop19)
            s.prop19 = s.eVar19 = "anon";
    }
    /* Visitor Type Pathing*/
    if (s.pageName && s.prop19) s.prop20 = s.prop19 + ":" + s.pageName;

    /* User ID*/
    if (!s.manageUserID) {
        s.prop21 = s.eVar21 = s.getAndPersistValue(s.prop21, 's_pers_prop21', 1825);
        if (!s.prop21)
            s.prop21 = s.eVar21 = "anon";
    }
    /*Site Tools*/
    if (s.prop26) {
        s.eVar26 = "D=c26";
        s.events = s.apl(s.events, 'event12', ',', 2)
    }
    /*Self Service Transactions */
    if (s.prop27) {
        s.eVar27 = "D=c27";
        s.events = s.apl(s.events, 'event13', ',', 2)
    }

    /* Copy props to eVars*/
    if (s.pageName && !s.eVar18) s.eVar18 = "D=pageName";
    if (s.prop28 && !s.eVar28) s.eVar28 = "D=c28";
    if (s.prop29 && !s.eVar29) s.eVar29 = s.prop29;
    if (s.prop30 && !s.eVar30) s.eVar30 = "D=c30";
    if (s.prop31 && !s.eVar31) s.eVar31 = s.prop31;
    if (s.prop32 && !s.eVar32) s.eVar32 = "D=c32";
    if (s.prop33 && !s.eVar33) s.eVar33 = "D=c33";

    /*setupLinkTrack 2.0 */
    s.hbx_lt = "auto" // manual, auto
    s.setupLinkTrack("prop12,prop13,prop14,prop15", "SC_LINKS");

    /* Advanced partner exits */
    s.parturl = s.linkHandler(s.partnerSites, 'e')
    if (s.parturl) {
        s.eVar25 = s.parturl;
        s.events = s.apl(s.events, "event10", ",", 2);
        s.linkTrackVars = "prop12,prop13,prop14,prop15,eVar25,events";
        s.linkTrackEvents = "event10";
    }

    /* Enhanced download tracking */
    s.dlurl = s.downloadLinkHandler();
    if (s.dlurl) {
        s.eVar24 = s.prop24 = s.dlurl.substring(s.dlurl.lastIndexOf("/") + 1, s.dlurl.length);
        if (s.pageName) s.prop25 = s.pageName;
        s.events = s.apl(s.events, "event9", ",", 2);
        s.linkTrackVars = "prop12,prop13,prop14,prop15,eVar24,prop24,prop25,events"
        s.linkTrackEvents = "event9"
    }

    /* Mailto Clicks */
    s.mailtourl = s.linkHandler('mailto:', 'o')
    if (s.mailtourl) {
        s.eVar13 = s.mailtourl
        s.events = s.apl(s.events, "event8", ",", 2)
        s.linkTrackVars = "prop12,prop13,prop14,prop15,eVar13,events"
        s.linkTrackEvents = "event8"
    }

    /* Form Analysis  */
    s.setupFormAnalysis();

    s.socialPlatforms('eVar52');
    s.prop4 = "CEBWA:2.0.3"
}
s.doPlugins = s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */


/* Configure Modules and Plugins */

s.loadModule("Media")
s.Media.autoTrack = false
s.Media.trackWhilePlaying = true
s.Media.trackVars = "None"
s.Media.trackEvents = "None"

/*
* Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
*/
s.getNewRepeat = new Function("d", "cn", ""
+ "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+ "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+ "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+ "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+ "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
* Plugin: Form Analysis 2.1 (Success, Error, Abandonment)
*/
s.setupFormAnalysis = new Function(""
+ "var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
+ "wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+ "tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+ ",'','')}");
s.sendFormEvent = new Function("t", "pn", "fn", "en", ""
+ "var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+ "s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s.faol = new Function("e", ""
+ "var s=s_c_il[" + s._in + "],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
+ "event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
+ "th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
+ ";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
+ "if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
+ "No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+ "s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
+ "mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
+ "g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
+ "=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"
+ ".wd.onunload;s.wd.onunload=s.fasl;}return r;");
s.faos = new Function("e", ""
+ "var s=s_c_il[" + s._in + "],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
+ "u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+ "e;");
s.fasl = new Function("e", ""
+ "var s=s_c_il[" + s._in + "],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"
+ "eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+ "name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+ "'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
+ "='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+ "!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
+ "ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
+ "ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
+ "e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
+ ",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
+ ".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
+ "vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object"
+ "();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us"
+ "ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
s.fam = new Function("e", ""
+ "var s=s_c_il[" + s._in + "],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"
+ "tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+ "form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+ "which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+ "N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+ "AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+ "n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+ "){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+ "1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
+ "_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+ "d(e);");
s.ee = new Function("e", "n", ""
+ "return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s.fage = new Function("e", "a", ""
+ "var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");
/*
* Plugin: getQueryParam 2.3
*/
s.getQueryParam = new Function("p", "d", "u", ""
+ "var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+ "on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+ ".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t){t=t.indexOf('#')>-"
+ "1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substring(i="
+ "=p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", ""
+ "var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+ "=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", ""
+ "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+ "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+ "epa(v)}return ''");
/*
* Plugin: getValOnce 0.2 - get a value once per session or number of days
*/
s.getValOnce = new Function("v", "c", "e", ""
+ "var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+ ")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
* Plugin: getPageName v2.1 - parse URL and return
*/
s.getPageName = new Function("u", ""
+ "var s=this,v=u?u:''+s.wd.location,x=v.indexOf(':'),y=v.indexOf('/',"
+ "x+4),z=v.indexOf('?'),c=s.pathConcatDelim,e=s.pathExcludeDelim,g=s."
+ "queryVarsList,d=s.siteID,n=d?d:'',q=z<0?'':v.substring(z+1),p=v.sub"
+ "string(y+1,q?z:v.length);z=p.indexOf('#');p=z<0?p:s.fl(p,z);x=e?p.i"
+ "ndexOf(e):-1;p=x<0?p:s.fl(p,x);p+=!p||p.charAt(p.length-1)=='/'?s.d"
+ "efaultPage:'';y=c?c:'/';while(p){x=p.indexOf('/');x=x<0?p.length:x;"
+ "z=s.fl(p,x);if(!s.pt(s.pathExcludeList,',','p_c',z))n+=n?y+z:z;p=p."
+ "substring(x+1)}y=c?c:'?';while(g){x=g.indexOf(',');x=x<0?g.length:x"
+ ";z=s.fl(g,x);z=s.pt(q,'&','p_c',z);if(z){n+=n?y+z:z;y=c?c:'&'}g=g.s"
+ "ubstring(x+1)}return n");
/*                                                                                        
* Plugin: channelExtract : 1.0 - returns site section based on delimiter 
*/
s.channelExtract = new Function("d", "p", "u", "pv", ""
+ "var s=this,v='';u=u?u:(s.pageURL?s.pageURL:s.wd.location);if(u=='f'"
+ ")u=s.gtfs().location;u=u+'';li=u.lastIndexOf(d);if(li>0){u=u.substr"
+ "ing(0,li);var i,n,a=s.split(u,d),al=a.length;if(al<p){if(pv==1) p=a"
+ "l;else return '';}for(i=0;i<p;i++){n=a[i];v=v+n+d;}return v}return "
+ "'';");
/*
* Plugin: Visit Depth
*/
s.getActionDepth = new Function("c", ""
+ "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);"
+ "if(!s.c_r(c)){v=1}if(s.c_r(c)){v=s.c_r(c);v++}"
+ "if(!s.c_w(c,v,t)){s.c_w(c,v,0)}return v;");
/*
* Plugin: getAndPersistValue 0.3 - get a value on every page
*/
s.getAndPersistValue = new Function("v", "c", "e", ""
+ "var s=this,a=new Date;e=e?e:0;a.setTime(a.getTime()+e*86400000);if("
+ "v)s.c_w(c,v,e?a:0);return s.c_r(c);");
/*
* Plugin: setupLinkTrack 2.0 - return links for HBX-based link 
*         tracking in SiteCatalyst (requires s.split and s.apl)
*/
s.setupLinkTrack = new Function("vl", "c", ""
+ "var s=this;var l=s.d.links,cv,cva,vla,h,i,l,t,b,o,y,n,oc,d='';cv=s."
+ "c_r(c);if(vl&&cv!=''){cva=s.split(cv,'^^');vla=s.split(vl,',');for("
+ "x in vla)s._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}s.c_w(c,'',0);if(!s.e"
+ "o&&!s.lnk)return '';o=s.eo?s.eo:s.lnk;y=s.ot(o);n=s.oid(o);if(s.eo&"
+ "&o==s.eo){while(o&&!n&&y!='BODY'){o=o.parentElement?o.parentElement"
+ ":o.parentNode;if(!o)return '';y=s.ot(o);n=s.oid(o);}for(i=0;i<4;i++"
+ ")if(o.tagName)if(o.tagName.toLowerCase()!='a')if(o.tagName.toLowerC"
+ "ase()!='area')o=o.parentElement;}b=s._LN(o);o.lid=b[0];o.lpos=b[1];"
+ "if(s.hbx_lt&&s.hbx_lt!='manual'){if((o.tagName&&s._TL(o.tagName)=='"
+ "area')){if(!s._IL(o.lid)){if(o.parentNode){if(o.parentNode.name)o.l"
+ "id=o.parentNode.name;else o.lid=o.parentNode.id}}if(!s._IL(o.lpos))"
+ "o.lpos=o.coords}else{if(s._IL(o.lid)<1)o.lid=s._LS(o.lid=o.text?o.t"
+ "ext:o.innerText?o.innerText:'');if(!s._IL(o.lid)||s._II(s._TL(o.lid"
+ "),'<img')>-1){h=''+o.innerHTML;bu=s._TL(h);i=s._II(bu,'<img');if(bu"
+ "&&i>-1){eval(\"__f=/ src\s*=\s*[\'\\\"]?([^\'\\\" ]+)[\'\\\"]?/i\")"
+ ";__f.exec(h);if(RegExp.$1)h=RegExp.$1}o.lid=h}}}h=o.href?o.href:'';"
+ "i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l"
+ "=s.linkName?s.linkName:s._hbxln(h);t=s.linkType?s.linkType.toLowerC"
+ "ase():s.lt(h);oc=o.onclick?''+o.onclick:'';cv=s.pageName+'^^'+o.lid"
+ "+'^^'+s.pageName+' | '+(o.lid=o.lid?o.lid:'no &lid')+'^^'+o.lpos;if"
+ "(t&&(h||l)){cva=s.split(cv,'^^');vla=s.split(vl,',');for(x in vla)s"
+ "._hbxm(vla[x])?s[vla[x]]=cva[x]:'';}else if(!t&&oc.indexOf('.tl(')<"
+ "0){s.c_w(c,cv,0);}else return ''");
s._IL = new Function("a", "var s=this;return a!='undefined'?a.length:0");
s._II = new Function("a", "b", "c", "var s=this;return a.indexOf(b,c?c:0)"
);
s._IS = new Function("a", "b", "c", ""
+ "var s=this;return b>s._IL(a)?'':a.substring(b,c!=null?c:s._IL(a))");
s._LN = new Function("a", "b", "c", "d", ""
+ "var s=this;b=a.href;b+=a.name?a.name:'';c=s._LVP(b,'lid');d=s._LVP("
+ "b,'lpos');r"
+ "eturn[c,d]");
s._LVP = new Function("a", "b", "c", "d", "e", ""
+ "var s=this;c=s._II(a,'&'+b+'=');c=c<0?s._II(a,'?'+b+'='):c;if(c>-1)"
+ "{d=s._II(a,'&',c+s._IL(b)+2);e=s._IS(a,c+s._IL(b)+2,d>-1?d:s._IL(a)"
+ ");return e}return ''");
s._LS = new Function("a", ""
+ "var s=this,b,c=100,d,e,f,g;b=(s._IL(a)>c)?escape(s._IS(a,0,c)):esca"
+ "pe(a);b=s._LSP(b,'%0A','%20');b=s._LSP(b,'%0D','%20');b=s._LSP(b,'%"
+ "09','%20');c=s._IP(b,'%20');d=s._NA();e=0;for(f=0;f<s._IL(c);f++){g"
+ "=s._RP(c[f],'%20','');if(s._IL(g)>0){d[e++]=g}}b=d.join('%20');retu"
+ "rn unescape(b)");
s._LSP = new Function("a", "b", "c", "d", "var s=this;d=s._IP(a,b);return d"
+ ".join(c)");
s._IP = new Function("a", "b", "var s=this;return a.split(b)");
s._RP = new Function("a", "b", "c", "d", ""
+ "var s=this;d=s._II(a,b);if(d>-1){a=s._RP(s._IS(a,0,d)+','+s._IS(a,d"
+ "+s._IL(b),s._IL(a)),b,c)}return a");
s._TL = new Function("a", "var s=this;return a.toLowerCase()");
s._NA = new Function("a", "var s=this;return new Array(a?a:0)");
s._hbxm = new Function("m", "var s=this;return (''+m).indexOf('{')<0");
s._hbxln = new Function("h", "var s=this,n=s.linkNames;if(n)return s.pt("
+ "n,',','lnf',h);return ''");
/*
* Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
*/
s.getTimeParting = new Function("t", "z", "y", ""
+ "dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+ "dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+ "if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+ ");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+ "+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+ "if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+ "ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+ ");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+ "iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+ "sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+ "days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+ "0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+ "ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+ ":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+ "estring}if(t=='d'){return daystring};if(t=='w'){return en"
+ "dstring}}};"
);
/*
* Plugin: linkHandler 0.5 - identify and report custom links
*/
s.linkHandler = new Function("p", "t", ""
+ "var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+ "ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+ "substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+ "e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s.p_gn = new Function("t", "h", ""
+ "var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+ "t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+ "return 0;");
/*
* Plugin: downloadLinkHandler 0.5 - identify and report download links
*/
s.downloadLinkHandler = new Function("p", ""
+ "var s=this,h=s.p_gh(),n='linkDownloadFileTypes',i,t;if(!h||(s.linkT"
+ "ype&&(h||s.linkName)))return '';i=h.indexOf('?');t=s[n];s[n]=p?p:t;"
+ "if(s.lt(h)=='d')s.linkType='d';else h='';s[n]=t;return h;");
/*
* Plugin: getPreviousValue_v1.0 - return previous value of designated
*   variable (requires split utility)
*/
s.getPreviousValue = new Function("v", "c", "el", ""
+ "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+ "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+ "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+ ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+ "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
* Utility Function: p_c
*/
s.p_c = new Function("v", "c", ""
+ "var x=v.indexOf('=');return c.toLowerCase()==v.substring(0,x<0?v.le"
+ "ngth:x).toLowerCase()?v:0");
/*
* Utility Function: p_gh
*/
s.p_gh = new Function(""
+ "var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+ "o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+ "o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+ "ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
/*
* Utility Function: split v1.5 - split a string (JS 1.0 compatible)
*/
s.split = new Function("l", "d", ""
+ "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+ "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
* Plugin Utility: apl v1.1
*/
s.apl = new Function("L", "v", "d", "u", ""
+ "var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+ "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+ "e()));}}if(!m)L=L?L+d+v:v;return L");
/*
* Function - read combined cookies v 0.3
*/
if (!s.__ccucr) {
    s.c_rr = s.c_r; s.__ccucr = true;
    s.c_r = new Function("k", ""
+ "var s=this,d=new Date,v=s.c_rr(k),c=s.c_rr('s_pers'),i,m,e;if(v)ret"
+ "urn v;k=s.ape(k);i=c.indexOf(' '+k+'=');c=i<0?s.c_rr('s_sess'):c;i="
+ "c.indexOf(' '+k+'=');m=i<0?i:c.indexOf('|',i);e=i<0?i:c.indexOf(';'"
+ ",i);m=m>0?m:e;v=i<0?'':s.epa(c.substring(i+2+k.length,m<0?c.length:"
+ "m));if(m>0&&m!=e)if(parseInt(c.substring(m+1,e<0?c.length:e))<d.get"
+ "Time()){d.setTime(d.getTime()-60000);s.c_w(s.epa(k),'',d);v='';}ret"
+ "urn v;");
}
/*
* Function - write combined cookies v 0.3
*/
if (!s.__ccucw) {
    s.c_wr = s.c_w; s.__ccucw = true;
    s.c_w = new Function("k", "v", "e", ""
+ "this.new2 = true;"
+ "var s=this,d=new Date,ht=0,pn='s_pers',sn='s_sess',pc=0,sc=0,pv,sv,"
+ "c,i,t;d.setTime(d.getTime()-60000);if(s.c_rr(k)) s.c_wr(k,'',d);k=s"
+ ".ape(k);pv=s.c_rr(pn);i=pv.indexOf(' '+k+'=');if(i>-1){pv=pv.substr"
+ "ing(0,i)+pv.substring(pv.indexOf(';',i)+1);pc=1;}sv=s.c_rr(sn);i=sv"
+ ".indexOf(' '+k+'=');if(i>-1){sv=sv.substring(0,i)+sv.substring(sv.i"
+ "ndexOf(';',i)+1);sc=1;}d=new Date;if(e){if(e.getTime()>d.getTime())"
+ "{pv+=' '+k+'='+s.ape(v)+'|'+e.getTime()+';';pc=1;}}else{sv+=' '+k+'"
+ "='+s.ape(v)+';';sc=1;}if(sc) s.c_wr(sn,sv,0);if(pc){t=pv;while(t&&t"
+ ".indexOf(';')!=-1){var t1=parseInt(t.substring(t.indexOf('|')+1,t.i"
+ "ndexOf(';')));t=t.substring(t.indexOf(';')+1);ht=ht<t1?t1:ht;}d.set"
+ "Time(ht);s.c_wr(pn,pv,d);}return v==s.c_r(s.epa(k));");
}

/*
* Plugin: socialPlatforms v1.0
*/
s.socialPlatforms = new Function("a", ""
+ "var s=this,g,K,D,E,F;g=s.referrer?s.referrer:document.referrer;g=g."
+ "toLowerCase();K=s.split(s.socPlatList,'|');for(i=0;i<K.length;i++){"
+ "D=s.split(K[i],'>');if(g.indexOf(D[0])!=-1){if(a){s[a]=D[1];}}}");

s.socPlatList = "facebook.com>Facebook|twitter.com>Twitter|t.co/>Twitter|youtube.com>Youtube|clipmarks.com>Clipmarks|dailymotion.com>Dailymotion|delicious.com>Delicious|digg.com>Digg|diigo.com>Diigo|flickr.com>Flickr|flixster.com>Flixster|fotolog.com>Fotolog|friendfeed.com>FriendFeed|google.com/buzz>Google Buzz|buzz.googleapis.com>Google Buzz|plus.google.com>Google+|hulu.com>Hulu|identi.ca>identi.ca|ilike.com>iLike|intensedebate.com>IntenseDebate|myspace.com>MySpace|newsgator.com>Newsgator|photobucket.com>Photobucket|plurk.com>Plurk|slideshare.net>SlideShare|smugmug.com>SmugMug|stumbleupon.com>StumbleUpon|tumblr.com>Tumblr|vimeo.com>Vimeo|wordpress.com>WordPress|xanga.com>Xanga|metacafe.com>Metacafe|";

/*  
* socialAuthors v1.3
*/
s.socialAuthors = new Function("", ""
+ "var s=this,g,tco;g=s.referrer?s.referrer:document.referrer;if(g.ind"
+ "exOf('t.co/')!=-1){s.tco=escape(s.split(g,'/')[3]);s.Integrate.add("
+ "'SocialAuthor');s.Integrate.SocialAuthor.tEvar='eVar53';s.Integrate"
+ ".SocialAuthor.get('search.twitter.com/search.json?var=[VAR]&"
+ "callback=s.twitterSearch&q=http%3A%2F%2Ft.co%2F'+s.tco);s.Integrate"
+ ".SocialAuthor.delay();s.Integrate.SocialAuthor.setVars=function(s,p"
+ "){s[p.tEvar]=s.user;}}");
s.twitterSearch = new Function("obj", ""
+ "var s=this,txt,txtRT,txtEnd,txtAuthor;txt=obj.results[0].text;txtRT"
+ "=txt.indexOf('RT @');if(txtRT!=-1){txtEnd=txt.indexOf(' ',txtRT+4);"
+ "txtAuthor=txt.substring(txtRT+4,txtEnd);s.user=txtAuthor.replace(':"
+ "','');}else{s.user=obj.results[0].from_user;}s.Integrate.SocialAuth"
+ "or.ready();");

s.maxDelay = '1000'; //max time to wait for 3rd party api response in milliseconds
s.loadModule("Integrate")
s.Integrate.onLoad = function (s, m) {

    s.socialAuthors();
};

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "cebwa"
s.trackingServer = "cebwa.d2.sc.omtrdc.net"
s.visitorMigrationKey = "4C5CBD83"
s.visitorMigrationServer = "cebwa.122.2o7.net"

/****************************** MODULES *****************************/
/* Module: Integrate */
s.m_Integrate_c = "var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p"
+ ".get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m."
+ "l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=func"
+ "tion(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000"
+ "000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s."
+ "'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z)u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y}}}return u};m.get=function(u,v){var p"
+ "=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p."
+ "_d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=func"
+ "tion(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integ"
+ "rate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;"
+ "if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)";
s.m_i("Integrate");

/* Module: Media */
s.m_Media_c = "var m=s.m_i('Media');m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',"
+ "x;n=m.cn(n);l=parseInt(l);if(!l)l=1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.p=m.cn(p);i.a=a;i.t=0"
+ ";i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;m.l[n]=i}};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o){var m=this,i;i=m.e(n,1,o);i.m=new Function('var m"
+ "=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.mt=setTimeout(i.m,5000)}}');i.m()};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){va"
+ "r m=this;if (m.trackWhilePlaying) {m.e(n,4,-1)}};m.e=function(n,x,o){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),ti=m.trackSeconds,tp=m.trackMilestones,z=new Array,j,d='--**--',t=1,b,"
+ "v=m.trackVars,e=m.trackEvents,pe='media',pev3,w=new Object,vo=new Object;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){w.name=n;w.length=i.l;w.playerName=i.p;if(i.to<0)w.event=\"OPEN\";else w.event=(x="
+ "=1?\"PLAY\":(x==2?\"STOP\":(x==3?\"MONITOR\":\"CLOSE\")));w.openTime=new Date();w.openTime.setTime(i.s*1000);if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {b=\"Media.\"+name;pev3 = m.s.ape(i.n)+d+i.l+d+m.s.a"
+ "pe(i.p)+d;if(x){if(o<0&&i.lt>0){o=(ts-i.lt)+i.lo;o=o<i.l?o:i.l-1}o=Math.floor(o);if(x>=2&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo;}if(x<=2){i.e+=(x==1?'S':'E')+o;i.lx=x;}else if(i.lx!=1)m.e(n,1,o);i.lt=ts"
+ ";i.lo=o;pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e+(x!=2?(m.trackWhilePlaying?'L':'E')+o:'');if(m.trackWhilePlaying){b=0;pe='m_o';if(x!=4){w.offset=o;w.percent=((w.offset+1)/w"
+ ".length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}if(i.to<0)pe='m_s';else if(x==4)pe='m_i';else{t=0;v=e='None';ti=ti?parseInt(ti):0;z=tp?"
+ "m.s.sp(tp,','):0;if(ti&&i.ts>=ti)t=1;else if(z){if(o<i.to)i.to=o;else{for(j=0;j<z.length;j++){ti=z[j]?parseInt(z[j]):0;if(ti&&((i.to+1)/i.l<ti/100)&&((o+1)/i.l>=ti/100)){t=1;j=z.length}}}}}}}else{m"
+ ".e(n,2,-1);if(m.trackWhilePlaying){w.offset=i.lo;w.percent=((w.offset+1)/w.length)*100;w.percent=w.percent>100?100:Math.floor(w.percent);w.timePlayed=i.t;if(m.monitor)m.monitor(m.s,w)}m.l[n]=0;if(i"
+ ".e){pev3+=i.t+d+i.s+d+(m.trackWhilePlaying&&i.to>=0?'L'+i.to:'')+i.e;if(m.trackWhilePlaying){v=e='None';pe='m_o'}else{t=0;m.s.fbr(b)}}else t=0;b=0}if(t){vo.linkTrackVars=v;vo.linkTrackEvents=e;vo.p"
+ "e=pe;vo.pev3=pev3;m.s.t(vo,b);if(m.trackWhilePlaying){i.ts=0;i.to=o;i.e=''}}}}return i};m.ae=function(n,l,p,x,o,b){if(n&&p){var m=this;if(!m.l||!m.l[n])m.open(n,l,p,b);m.e(n,x,o)}};m.a=function(o,t"
+ "){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',"
+ "f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=n"
+ "ew Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catc"
+ "h(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){"
+ "p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n="
+ "=8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='tex"
+ "t/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='Qui"
+ "ckTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l"
+ "=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n>0&&"
+ "o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='"
+ "RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!="
+ "o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,o);o.'+f7+'=0}o."
+ "'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+"
+ "'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.i"
+ "sie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false)";
s.m_i("Media");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '', s_objectID; function s_gi(un, pg, ss) {
    var c = "s.version='H.23.6';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(m,\"\\n\",\"\\\\n\"),\""
+ "\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}return y};s.fl=function(x,l){retur"
+ "n x?(''+x).substring(0,l):x};s.co=function(o){if(!o)return o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.indexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for(var p=0;p"
+ "<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',i,c=s.charSet,n,l,e,y='';c=c?c.toU"
+ "pperCase():'';if(x){x=''+x;if(s.em==3)x=encodeURIComponent(x);else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h"
+ ".substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=escape(''+x);x=s.rep(x,'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('"
+ "%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x)"
+ "{var s=this;if(x){x=s.rep(''+x,'+',' ');return s.em==3?decodeURIComponent(x):unescape(x)}return x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substri"
+ "ng(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a"
+ "=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var"
+ " s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=unde"
+ "fined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';"
+ "s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?pa"
+ "rseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.a"
+ "pe(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd"
+ "(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie"
+ "=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s."
+ "_in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if("
+ "x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return "
+ "r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfs"
+ "oe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=thi"
+ "s,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet"
+ "('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=fun"
+ "ction(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Obje"
+ "ct,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p"
+ "=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl"
+ "(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window"
+ ".s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im."
+ "s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;if"
+ "(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im.src=rs;if((!ta||ta=='_self'||ta=='_top'||(s.wd.na"
+ "me&&ta==s.wd.name))&&rs.indexOf('&pe=')>=0){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg"
+ "=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s"
+ "=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCas"
+ "e();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l"
+ "=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.su"
+ "bstring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f"
+ "){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v) {if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>="
+ "0)){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.in"
+ "dexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(s"
+ "v){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';e"
+ "lse if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}}if(qs"
+ "!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType"
+ "){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;"
+ "if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&"
+ "e){v=e;e=''}if(v&&(!fv||fv.indexOf(k)>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g'"
+ ";v=s.fl(v,255)}else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSec"
+ "ure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v"
+ "='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else"
+ " if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=="
+ "'javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='"
+ "plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';e"
+ "lse if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteL"
+ "ightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list"
+ "')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var"
+ " qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf("
+ "t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackD"
+ "ownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.substring(0,1)!='#'&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''"
+ "};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true');s.bc=new Function('e','var s=s_c_il['+s._in+'],f,tcf;if"
+ "(s.d&&s.d.all&&s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;tcf=new Function(\"s\",\"var e;try{if(s.eo&&(s.eo.tagName||s.eo.parentElement||s.eo.parentNode))s.t()}catch(e){}\");t"
+ "cf(s);s.eo=0');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.proto"
+ "col.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}"
+ "return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=="
+ "'BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.hr"
+ "ef&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t="
+ "='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s"
+ ".rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+"
+ "q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a)"
+ "{var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q)"
+ "{var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototy"
+ "pe[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c"
+ "_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if"
+ "((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s"
+ ".b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEventListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorS"
+ "ampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)retu"
+ "rn 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if"
+ "(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.l"
+ "ocation.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;s."
+ "un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl="
+ "new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e',"
+ "'_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l"
+ "[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(!c)c=s.wd[\"s_\"+g+\"_c\"];"
+ "if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_"
+ "m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||"
+ "x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t"
+ "+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i"
+ "]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n"
+ "&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\")"
+ ";if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i"
+ "=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=tr"
+ "ue;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'"
+ "+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i"
+ "<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;f"
+ "or(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\""
+ "d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this"
+ ",d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.track=s.t=function(vo){var s=this,trk=1,tm=new"
+ " Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+19"
+ "00:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;s.gl(s.vl_g);s.uns();s.m_ll();if(!"
+ "s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDat"
+ "e){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return "
+ "i');i=tcf(o);if(i&&i.next)j='1.7'}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth"
+ ";bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeig"
+ "ht;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var "
+ "e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexO"
+ "f(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}i"
+ "f(vo){s.vob(vb);s.voa(vo)}if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_refer"
+ "rer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElem"
+ "ent?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n"
+ ")ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');"
+ "q+='&pe='+s.pe+(h?'&pev1='+s.ape(h):'')+(l?'&pev2='+s.ape(l):'');}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}"
+ "if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.samp"
+ "led)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}el"
+ "se s.dl(vo);if(vo)s.voa(vb,1);s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trac"
+ "kLink=s.tl=function(o,t,n,vo){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy"
+ "=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){for(i=0;i<s.va_g.length;i++){x=s.va_"
+ "g[i];if(t[x])s[x]=t[x]}if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.onLoad)t.onLoad(s);if(t.tq)for(i"
+ "=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByT"
+ "agName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('O"
+ "pera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));"
+ "else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3"
+ ";else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='dynamicVariablePrefix,visitorID,vmk,visit"
+ "orMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,currencyCode';s.va_l=s.sp(s.vl_l,',');s."
+ "vl_mr=s.vl_m='charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,"
+ "transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retr"
+ "ieveLightData';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2"
+ "=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_"
+ "g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountLis"
+ "t,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNam"
+ "es,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){s_gi(\"_\","
+ "1,1).co(o)};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
w = window, l = w.s_c_il, n = navigator, u = n.userAgent, v = n.appVersion, e = v.indexOf('MSIE '), m = u.indexOf('Netscape6/'), a, i, x, s; if (un) { un = un.toLowerCase(); if (l) for (i = 0; i < l.length; i++) { s = l[i]; x = s._c; if ((!x || x == 's_c' || x == 's_l') && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) { if (s.sa) s.sa(un); if (x == 's_c') return s } else s = 0 } } w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst"
+ "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    w.s_d = new Function("x", "var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d"
+ "=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn("
+ "x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x");
    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+ "a");
    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+ "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+ "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c = s_d(c); if (e > 0) { a = parseInt(i = v.substring(e + 5)); if (a > 3) a = parseFloat(i) } else if (m > 0) a = parseFloat(u.substring(m + 10)); else a = parseFloat(v); if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c); if (!s) { s = new Object; if (!w.s_c_in) { w.s_c_il = new Array; w.s_c_in = 0 } s._il = w.s_c_il; s._in = w.s_c_in; s._il[s._in] = s; w.s_c_in++; } s._c = 's_c'; (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss); return s
}
