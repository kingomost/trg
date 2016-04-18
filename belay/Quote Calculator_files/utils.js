function openwindow(url,height,width)
{
	var y = document.body.scrollHeight;
	var x = document.body.scrollWidth;
	
	if(height == null || height == 0)
	{
		height = 580;
	}
	if (width == null || width ==0)
	{
		width = 725; //changed to allow for entire text of DOC
	}	
	y = parseInt((y/2) - (height/2));
	x = parseInt((x/2) - (width/2));
	
	//window.showModalDialog(url, "", "dialogHeight:500px;dialogWidth:550px;status=0;");
	var features = "width="+width+",height="+height+",status=0,toolbar=0,resizable=1,scrollbars=1,top=" + y + ",left=" + x;
	//alert(features);
	pop = window.open(url,null,features);
	//pop.moveTo(x,y);
}

function CloseWindow()
{
	window.close();
}

function ShowPricing(packageAnchor)
{
  	var planID;
	var pCode;
	var baseURL;
	
	var height = 580;
	var width = 500;	
	
	/*
	planID = document.forms[0]['ucSelectedProduct:hPlanID'];
	pCode = document.forms[0]['ucSelectedProduct:hPCODE'];
	baseURL = document.forms[0]['ucTransaction:hBaseURL'];
	
	planID = document.forms[0]['ctl00_ctl00_purchasePathContainer_summaryContainer_ucSelectedProduct_hPlanID'];
    pCode = document.forms[0]['ctl00$ctl00$purchasePathContainer$summaryContainer$ucSelectedProduct$hPCODE'];
    baseURL = 'http://www.travelguard.com'; //get from webconfig    
	*/

    var queryStrings = getQueryStrings();
    
    // Check if a query string exists
    if(queryStrings.pcode != null) 
    {
       pCode = queryStrings.pcode;
    }
    else
    {
       pCode = queryStrings.pCode; 
    }
    
    if(queryStrings.plan != null) 
    {
       planID = queryStrings.plan;
    } 
    
    baseURL = 'http://www.travelguard.com';   
    
	openwindow(baseURL + '/tgcontent/' + pCode + '/' + planID + '/pricing.html#' + packageAnchor,height,width);
}


function getQueryStrings() 
{
//http://blog.josh420.com/archives/2007/10/get-query-string-data-on-client-side-with-javascript.aspx
    var argList = new Object();

    if(window.location != null && window.location.search.length > 1) {
        var urlParms = window.location.search.substring(1);
        var argPairs = urlParms.split('&');

        for(var i = 0; i < argPairs.length; i++) {
            var pos = argPairs[i].indexOf('=')

            if(pos == -1)
                continue;
            else {
                var argName = argPairs[i].substring(0, pos);
                var argVal = argPairs[i].substring(pos + 1);

                if(argVal.indexOf('+') != -1)
                    argVal = argVal.replace(/\+/g, ' ');

                argList[argName] = unescape(argVal);
            }              
        }
    }
    
    return argList;
}



