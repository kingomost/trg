 //var s_account = "";
//CUSTOM METRICS js
var hbxBrandType;
var hbxStoreType;
var tmpStoreBrand;

var scOpts = "";

var scStoreSite;
var scStoreCountry;
var scStoreArc;
var scStoreBrand;

scStoreSite = this.STORESITE;
scStoreCountry = this.STORECOUNTRY;
hbxBrandType = scStoreCountry;

scStoreArc = this.STOREARC; 
tmpStoreBrand = this.STOREBRAND;
scStoreBrand = tmpStoreBrand.toLowerCase();

function GetStoreType()
{
    switch(scStoreBrand) 
    {
        case "tgdirect":
	        hbxStoreType = "us_direct";
	        break;
        case "tgdirect2":
	        hbxStoreType = "us_direct";
	        break;
	    case "employee":
	        hbxStoreType = "us_direct";
	        break;
        case "agentlink":
	        hbxStoreType = "us_agent";
	        break;
        case "affiliate":
	        hbxStoreType = "us_affiliate";
	        break;
        case "ready2travel":
	        hbxStoreType = "us_direct";
	        break;
        case "directca":
	        hbxStoreType = "ca_direct";
	        break;
        case "agentlinkca":
	        hbxStoreType = "ca_agent";
	        break;
		case "agentconsumerca":
			hbxStoreType = "ca_affiliate";
			break;
			//CA Future Use
        case "caaffiliate":
	        hbxStoreType = "ca_affiliate";
	        break;
        default: //US/CA Wholesale sites
            if (scStoreCountry === "usa")
            {
	           hbxStoreType = "us_partner";
	        }
	        else if(scStoreCountry === "canada")
	        {
	           hbxStoreType = "ca_partner";
	        }
	        break;
    }
} 

function setOpts(purchase)  
{
    if (!(typeof purchase === 'undefined' || typeof _dictionary === 'undefined')) {
        var keys = _dictionary.Keys
        for (var i = 0; i < keys.length; i++) {
            scOpts += ",;" + 'oc-' + keys[i];
            if (purchase === 'purchase') {
                scOpts += ";1;" + _dictionary[keys[i] + eval(i)]
            }
            //alert((keys[i]+": "+_dictionary.Lookup(keys[i])));
        }
    }
}
function setDecimalPoints(pointslIn)
{
    var pointsOut;
    var locOfDec = "";
    var temp;
    locOfDec = pointslIn.indexOf('.');
       
    if (pointslIn.substring(locOfDec+1).length !== 2)
    {   
      if (locOfDec === -1)
         return pointsOut = pointslIn + ".00";
         
      switch (pointslIn.substring(locOfDec+1).length)
      {
        case 0:
           return pointsOut = pointslIn + "00";        
        case 1:
           return pointsOut = pointslIn + "0"; 
        default:
        {
           var whole = pointslIn.substring(locOfDec,0);
           var dec = pointslIn.substring(locOfDec+1,locOfDec+3);  
           return pointsOut = whole + "." + dec;
        }
      } 
    }
    else
    {
      return pointsOut = pointslIn;
    }
}