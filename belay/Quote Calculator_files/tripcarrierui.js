
var unlistedCode = "00";
var unlistedCodeCruise = "C00";

function trackTripCarrier(tripListTypeTextBox,tripListTypeDropdown)
{
	var txtUnlistedCarrier;
	var drpUnlistedCarrier;	
	
	txtUnlistedCarrier = document.getElementById(tripListTypeTextBox);
	drpUnlistedCarrier = document.getElementById(tripListTypeDropdown);
	 
	if ((txtUnlistedCarrier!= null) && (drpUnlistedCarrier != null))
	{
		if (drpUnlistedCarrier.options[drpUnlistedCarrier.selectedIndex].value == unlistedCode ||
		    drpUnlistedCarrier.options[drpUnlistedCarrier.selectedIndex].value == unlistedCodeCruise)
		{
			txtUnlistedCarrier.disabled = false;			
		}
		else
		{
			txtUnlistedCarrier.value = "";
			txtUnlistedCarrier.disabled = true;
		}
		
		if (txtUnlistedCarrier.value != "")
		{
			for(i=0; i<= drpUnlistedCarrier.options.length; i++)
			{
				if (drpUnlistedCarrier.options[i].value == unlistedCode || 
				    drpUnlistedCarrier.options[i].value == unlistedCodeCruise)
				{
					drpUnlistedCarrier.selectedIndex = i;
					break;
				}
			}
		}
	}
	
}

//Trims input text box from left (removes white spaces)
function LTrim(item)
{
  var tmp = "";
  var item_length = item.value.length;
  var item_length_minus_1 = item.value.length - 1;
  for (index = 0; index < item_length; index++)
  {
    if (item.value.charAt(index) != ' ')
    {
      tmp += item.value.charAt(index);
    }
    else
    {
      if (tmp.length > 0)
      {
        if (item.value.charAt(index+1) != ' ' && index != item_length_minus_1)
        {
          tmp += item.value.charAt(index);
        }
      }
    }
  }
  item.value = tmp;
}


function ofacPrompt(ofacValidID,promptText)
{	
	ofacValid = document.all[ofacValidID];
	if (ofacValid)
	{
		if(confirm(promptText))
		{
			ofacValid.value = '1';
		}
		else
		{
			ofacValid.value = '0';
		}
	}
}

function ValidateDestinationState(source,arguments)
{
	var drpState;
	var state;
	
	if(document.all)
	{
	    drpState = document.all['ucTripDetail:drpDestState'];	
	}
		
	if (drpState)
	{			
		if (drpState.style.display != 'none')
		{
			state = drpState.options[drpState.selectedIndex].value;	
			if (state == "")
			{
				source.errormessage = "Please select destination state/province from list";
				arguments.IsValid = false;
				return;
			}
		}
	}
}

function checkOfacDestination(destCountryList, ofacCountryList, ofacValid,drpDestStateName,txtDestStateName,txtUnlistedDestCountry)
{
	var drpDestCountry;
	var hOfacCountryList;
	var hOfacValid;
	var txtDestState;
	var drpDestState;
	var arrOfacCountry = new Array();
	var selectedCountryID;
	var txtUnlistedDestinationCountry;
	
	txtUnlistedDestinationCountry = document.purchase[txtUnlistedDestCountry];
	drpDest = document.purchase[destCountryList];
	hOfacCountryList = document.purchase[ofacCountryList];
	hOfacValid = document.purchase[ofacValid];
	txtDestState = document.purchase[txtDestStateName];
	drpDestState = document.purchase[drpDestStateName];
	selectedCountryID = 0;
	
	if (drpDest)
	{
		if ((drpDest.options[drpDest.selectedIndex].value == unlistedCode) && (txtDestState != null))
		{
			if(txtUnlistedDestinationCountry != null)
			{
					txtUnlistedDestinationCountry.disabled = false;
			}
			
			txtDestState.disabled = false;						
		}
		else
		{	
			txtDestState.disabled = true;			
		}	
		
		selectedCountryID = parseInt(drpDest.options[drpDest.selectedIndex].value);	
	}
	
	if(selectedCountryID == 1 || selectedCountryID == 2)
	{
		txtDestState.style.display='none';				
		__doPostBack("'" + destCountryList +"'",'');
	}
	else
	{
		if(drpDestState)
		{
			drpDestState.style.display = 'none';
		}
		if (txtDestState)
		{
			txtDestState.style.display = 'inline';
		}
	}
	
	if (hOfacValid)
	{
		hOfacValid.value = '0';
	}
	
	if (hOfacCountryList)
	{
		arrOfacCountry = hOfacCountryList.value.split(",");		
		for(i=0; i<arrOfacCountry.length ; i++)
		{
			if (parseInt(arrOfacCountry[i]) == selectedCountryID)
			{
				//ofac alert
				if (confirm('The Office of Foreign Asset Control (OFAC) requires all insured on the policy be licensed to travel to ' + drpDest.options[drpDest.selectedIndex].text + '\nClick OK if all insureds are licensed by OFAC. Click cancel to exit purchase'))
				{
					hOfacValid.value = '1';
					break;
				}
				else
				{
					hOfacValid.value = '0';
					alert('To purchase a policy for travel to ' + drpDest.options[drpDest.selectedIndex].text +' all insureds need to be licensed by The Office of Foreign Asset Control.  The purchaser has indicated this is not the case and therefore Travel Guard is unable to issue the policy.');
					//document.location.href='/tgi/common/error.aspx?errorID=ofacdeny';
					break;
				}
			}
		}
	}
	
	return selectedCountryID;	
}

function resetDestState()
{
	var drpDestCountry;
	var drpDestState;
	var txtDestState;
	var selCountryID;

	drpDestCountry = document.purchase['ucTripDetail:drpDestCountry'];
	drpDestState = document.purchase['ucTripDetail:drpDestState'];
	txtDestState =  document.purchase['ucTripDetail:txtDestState'];
	
	if(drpDestCountry)
	{
		selCountryID = parseInt(drpDestCountry.options[drpDestCountry.selectedIndex].value);
	}
	
	if (drpDestState != null && txtDestState != null)
	{
		
		if (selCountryID == 1 || selCountryID == 2)
		{
			drpDestState.style.display = 'inline';
			txtDestState.style.display = 'none';
		} 	
		else
		{
			drpDestState.style.display = 'none';
			txtDestState.style.display = 'inline';		
		}
	}
	
}
