var _dictionary = new Dictionary();
var _cnt = 0;

function Dictionary() 
{
  this.Add = Add;
  this.Lookup = Lookup;
  this.Delete = Delete;
  this.Keys = new Array();
}
function Lookup(key) 
{
  return(this[key]);
}
function Add() 
{
  for (c=0; c < Add.arguments.length; c+=2) 
  {
    // Add the property
    this[Add.arguments[c]+_cnt++] = Add.arguments[c+1];
    // And add it to the keys array
    this.Keys[this.Keys.length] = Add.arguments[c];
  }
}
function Delete() 
{
  for (c=0; c < Delete.arguments.length; c++) 
  {
    this[Delete.arguments[c]] = null;
  }
  // Adjust the keys
  var keys = new Array()
  for (var i=0; i<this.Keys.length; i++)
  {
    if(this[this.Keys[i]] != null)
      keys[keys.length] = this.Keys[i];
  }
  this.Keys = keys;
}
//Dynamic Call
function TrackingOptionCheck(checked,optional,price)
{   
  if(checked)
      _dictionary.Add(optional,price);
  else
     _dictionary.Delete(optional);
}

