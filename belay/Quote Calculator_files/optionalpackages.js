/*
function selectCoverage(dl,cl,p)
{	
	var lc = document.purchase[dl];
	var covl = document.purchase[cl];
	var selCov = lc.value;
	
	if(lc != null && covl != null)
	{
		lc.options.length = 0;
		
		ar = covl.value.split(",");
		
		for(i=0; i<ar.length ; i++)
		{
			lc.options[i] = new Option(CommaFormatted(ar[i]),ar[i]);
			if(ar[i] == selCov)
			{
				lc.options[i].selected = true;
			}
		}
	}	
	
	resetPremium(p);
}
*/

function resetPremium(p,s)
{
	var pl = document.all[p];
	if(pl != null)
	{	
		if(!s)
		{
			s= 'Click Get Quote';
		}
		pl.innerHTML = s;
	}	
}


function CommaFormatted(amount)
{
	var delimiter = ","; // replace comma if desired
	var a = amount.split('.',2);
	
	if (a.length > 1)
		var d = a[1];
	else
		d = '';
			
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3)
	{
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	
	return '$' + amount;
}


// end of function CommaFormatted()
function getTableId(obj) { //modify parent table's class to change background color for optional coverages
	var tblObj=obj;
	while (tblObj && !/table/i.test(tblObj.nodeName)) { //find parent table
	  tblObj = tblObj.parentNode;
	}
	if (tblObj != null) { //check if obj is valid
		var parentTable = document.getElementById(tblObj.id); //give me parent table's id
		if (obj.checked==true){
			parentTable.className = "optionalPackageChecked";
		}else {
			parentTable.className = "optionalPackageUnChecked";
		}
	}
} 

function ShowContent(contentlinkid,packageid,planid,langcode,regcode,packagetype,productSystem,brand)
{
	var height = 200;
	var width = 500;
	
	var url = '/tgi2/proc/contentlink.aspx?fr=1&plan='+planid +'&pkg=' + packageid + '&lnk=' + contentlinkid + '&rg=' + regcode + '&lg=' + langcode + '&pky=' + packagetype + '&ps=' + productSystem+ '&br=' + brand;

	openwindow(url,height,width);	
}

function goBackCheck()
{
   if (history.length == 0)
     window.close();
   else
     history.go(-1);
}
