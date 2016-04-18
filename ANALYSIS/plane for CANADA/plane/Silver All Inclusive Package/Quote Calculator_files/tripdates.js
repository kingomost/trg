var departureDate;
var depositDate;
        
function OnDepartureDateChanged(s,e)
{
    departureDate = s.get_selectedDate();        
}
function OnReturnDateShowing(s,e)
{
    s.set_selectedDate(departureDate);        
}

var dDate = new Date();
var rDate = new Date();
var cdwDays;
var ONEDAY = 1000*60*60*24;  

function getDeptDate(TextBox1, TextBox2)
{
  //Create the new dates
  splitDate(TextBox1.value,TextBox2.value);
  //Calculator number of CDW Days
  //calcDays();
  //Set the days on screen
  if (cdwDays >= 0)
    {
      //CdwDays() is only dynamically created for CDW
      if (typeof(CdwDays) !== "undefined")
        CdwDays();
    }
}

function splitDate(dept,ret)
{
  var d = new Array;
  var r = new Array;
  
  d = dept.split("/");
  r = ret.split("/");
  
  dDate = new Date(d[2], d[0]-1, d[1]);
  rDate = new Date(r[2], r[0]-1, r[1]);
  //Calculator number of CDW Days
  calcDays();  
}

function calcDays()
{
  //Calculate difference btw the two dates, and convert to days
  cdwDays = Math.round( (rDate.getTime()-dDate.getTime())/(ONEDAY))+1;
}
