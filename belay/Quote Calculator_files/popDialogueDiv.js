var popDialogueDiv = document.getElementById('popDialogueShadow'); //make global for close function
var popDialogueArrow = document.getElementById('dialogueArrow'); //make global for findPos function
var hrefLocation; //make global for findPos function
window.onresize = moveWindow; //move popup if resized

function moveWindow() { //check to see if moving is needed first
    if (popDialogueDiv != null && popDialogueDiv.style.display == 'block') {
        findPos(hrefLocation);
        }   
}
function PopDialogue(DialogueIframeUrl, href, DialogueTitle) //ShowPane (iframe link to show, referring link [cannot be areamap, has to be called from onClick] )
{

	popDialogueDiv = document.getElementById('popDialogueShadow'); //common popDialogue div
	popDialogueArrow = document.getElementById('dialogueArrow'); //arrow to show
	popDialogueTitle = document.getElementById('dialogueArrow'); //arrow to show

	arrowTopOffset = 7;
	arrowBottomOffset = -1;

	popDialogueDiv.style.display = 'block'; //show popup win
	//document.getElementById('dialogueIframeWindow').src = DialogueIframeUrl;
	if (document.getElementById('dialogueIframeWindow').contentWindow)
        document.getElementById('dialogueIframeWindow').contentWindow.document.location.replace(DialogueIframeUrl); // this removes the browser history
    else
        document.getElementById('dialogueIframeWindow').src = DialogueIframeUrl; // this removes the browser history

	if(DialogueTitle==null){DialogueTitle=''};
	document.getElementById('dialogueTitle').innerHTML= DialogueTitle;

	findPos(href); //position the popup... need to show it first to determine its height/width
	return false; // this removes the browser history
}

function findPos(href)// find place to draw popdialogue
{
	popDialogueArrow.style.display = 'block';	//show popup arrow
    hrefLocation = href;
	var curleft = curtop = 0;

	var linkWidth = href.offsetWidth;	

	if (href.offsetParent) { //get refering link's position top/left from page's top
		curleft = href.offsetLeft
		curtop = href.offsetTop
		while (href = href.offsetParent) {
			curleft += href.offsetLeft
			curtop += href.offsetTop
		}
		curleft -= 8;	//positioning fix
	}
	var xoffSet = -40;	//drop popup -25px left
	var yoffSet = 20;	//drop popup 25px below
	arrowIndent = 30;	//draw the arrow 35px right of the start of the link
	dialoguePadding = 10;
	windowHeight = 0;
	windowWidth = 0;
	if (document.documentElement.innerWidth){ //Mac Safari doesn't understand clientWidth properly and winIE doesn't understand innerHeight
		windowWidth = document.documentElement.innerWidth;
	}
	else {
		//windowWidth = document.body.clientWidth;
		windowWidth =document.documentElement.clientWidth;
	}

	if (window.innerHeight){ //Mac Safari doesn't understand clientheight properly and winIE doesn't understand innerHeight
		windowHeight = window.innerHeight;
	}
	else {
		//windowHeight = document.body.clientHeight;
		windowHeight = document.documentElement.clientHeight;
	}
//*************************************************
	var numAttemps = 4;
	var i=1;
	var foundPos="false";
if (foundPos !="true") {//forward
	do {
		var offSetTry = Math.abs(xoffSet)*i;
		var pos =  curleft + (xoffSet*2) + offSetTry;
		var arrPos = (arrowIndent+dialoguePadding+(linkWidth/2))-(offSetTry+xoffSet);
		if(widthPlacement(pos,arrPos)) {
			i=numAttemps;
			foundPos="true";
		}
		
	i++;
	}
	while (i<numAttemps);
}
if (foundPos !="true") {//backward
	var i=1;
	do {
		var offSetTry = xoffSet*i;
		var pos = curleft-(popDialogueDiv.offsetWidth-(linkWidth-(xoffSet*2)))+(offSetTry+xoffSet);
		var arrPos = popDialogueDiv.offsetWidth - (arrowIndent+dialoguePadding+(linkWidth/2));
		if(widthPlacement(pos,arrPos)) {
			i=numAttemps;
			foundPos="true";
		}
	
	i++;
	}
	while (i<(numAttemps));
}
if (foundPos !="true") {//just center to screen width
	var pos = (windowWidth - popDialogueDiv.offsetWidth)/2;
	var arrPos = popDialogueDiv.offsetWidth /2;
	widthPlacement(pos,arrPos);
	popDialogueArrow.style.display = 'none'; //hide arrow since its centered
	foundPos="true";
}
//
//Calculate height Position
//
	if ((curtop-document.body.scrollTop+popDialogueDiv.offsetHeight+yoffSet) > windowHeight) { //not enough room to show below link so show above
		popDialogueDiv.style.top = curtop - popDialogueDiv.offsetHeight - 2 +'px';
		popDialogueArrow.className = 'arrowDown';
		popDialogueArrow.style.top =  popDialogueDiv.offsetHeight - arrowTopOffset + 'px'; //set arrow position
	}
	else {
		popDialogueDiv.style.top = curtop + yoffSet +'px'; // show link  below
		popDialogueArrow.className = 'arrowUp';
		popDialogueArrow.style.top = arrowBottomOffset + 'px'; //set arrow position
	}

    toggleSelect('block',popDialogueDiv.style.left,popDialogueDiv.style.top,popDialogueDiv.offsetWidth,popDialogueDiv.offsetHeight);
}

function toggleSelect(displayIframe,x,y,w,h){// IE5&6 shows select items OVER popDialogue, fixed in IE7
if (parseFloat(navigator.appVersion.split("MSIE")[1]) < 7) { //select box showing error in IE5&6
    var IEselectBoxFix = document.getElementById('IEselectBoxFix');
    IEselectBoxFix.style.left=x;
    IEselectBoxFix.style.top=y;
    IEselectBoxFix.style.display=displayIframe;
    IEselectBoxFix.width=w;
    IEselectBoxFix.height=h;
}
} 
function widthPlacement(pos, theArrowPos){
	if (pos > (document.body.scrollLeft + dialoguePadding) && (pos + popDialogueDiv.offsetWidth) < (document.body.scrollLeft + windowWidth)) { //show to right of link
		popDialogueDiv.style.left = pos+'px';
		popDialogueArrow.style.left = theArrowPos+'px'; //set arrow position
		return true
	}else {
		return false
	}
}
function PopDialogueClose() {
    toggleSelect('none',popDialogueDiv.style.left,popDialogueDiv.style.top,popDialogueDiv.offsetWidth,popDialogueDiv.offsetHeight);
	popDialogueDiv.style.display = 'none'; //hide popup win
	popDialogueArrow.style.display = 'none'; //hide popup win
}