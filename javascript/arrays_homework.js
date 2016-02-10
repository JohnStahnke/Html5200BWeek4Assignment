
var myThumbDiv = document.getElementById("thumbs");
var myShoppingCartDiv = document.getElementById("shopping_cart");
//variables IN functions (function scope), can see global variables)
var imageListA = [];

//Oil color art
var imageListB = [];
//Water color art
var imageListC = [];
//Shopping Cart
var purchased = [];
var drawingCount = 25;
var oilCount = 8;
var watercolorCount = 10;
function buildDrawingList()
{
	var i = 0;

	for(;i < drawingCount; i++)
	{
		imageListA[i] = "images/drawing/thumbs/artwork_" + (i+1) + ".jpg";
	}
	i = 0;
	for(;i < oilCount; i++)
	{
		imageListB[i] = "images/oil/thumbs/artwork_" + (i+1) + ".jpg";
	}
	i = 0;
	for(;i < watercolorCount; i++)
	{
		imageListC[i] = "images/watercolor/thumbs/artwork_" + (i+1) + ".jpg";
	}
	
}

//create the buildThumbnail function
function buildThumbnails()
{
	//hook onto the thumbs div
	//var thumbsDiv = document.getElementById("thumbs");
	
	//create an output variable
	var output = "";
	var shoppingcartoutput = "";
	//first part: counter (we set up 0 to start counting the loop)
	//second part: condition, (the loop will keep looping as long as the condition is true)
	//third part: incrementor - adds one to the counter AFTER the code is executed in the brackets
	output += '<div class="thumbs_block">  ';
	for(var i=0; i < imageListA.length; i++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListA[i] + '" />';
	}
	output += '</div>';
	output += '<div class="thumbs_block">  ';
	for(var j=0; j < imageListB.length; j++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListB[j] + '" />';
	}
	output += '</div>';
	output += '<div class="thumbs_block">  ';
	for(var k=0; k < imageListC.length; k++)
	{
		//concatenation assignment operator..
		output += '<img src="' + imageListC[k] + '" />';
	}
	output += '</div>';
	myThumbDiv.innerHTML = output;
	
}

window.onload = function()
{
	buildDrawingList();
	buildThumbnails();//use or "fire off" this function
	//or invoke the function
};

//Get thumb div, attach a click event to the div. with id="thumbs"
myThumbDiv.addEventListener("click", onImageClick, false);

//the function handler
function onImageClick(evt)
{
	// I used this below because I could not see how to just get /images.... text.
	// var path = evt.target.currentSrc;
	// var cutPath = path.substring(path.indexOf('images'));
	//purchased[sizeArray] = cutPath;
	
	// I got the below from assignment video to get path of image.
	var onlyPath = evt.target.getAttribute("src");
	var selectedImage = "";
	var imageIndex = "";
	//I wanted to be able so select all images in the display
	//Seems the assignment you can only select from array ListA.
	if(onlyPath.indexOf("drawing") != -1)
	{
		//imageListA
		imageIndex = imageListA.indexOf(onlyPath);
		selectedImage = imageListA.splice(imageIndex, 1);
	}
	else if(onlyPath.indexOf("oil") != -1)
	{
		//imageListB
		imageIndex = imageListB.indexOf(onlyPath);
		selectedImage = imageListB.splice(imageIndex, 1);
	}
	else if(onlyPath.indexOf("watercolor") != -1)
	{
		//imageListC
		imageIndex = imageListC.indexOf(onlyPath);
		selectedImage = imageListC.splice(imageIndex, 1);
	}
	
	purchased.push(selectedImage);
	
	updateShoppingCart();
	buildThumbnails();
	
	//My code.
	//I used the below to get the latest index
	// var sizeArray = purchased.length;

	//Need to remove display, add to new list then remove from list.
	//Below would remove image from display
	// evt.target.setAttribute("style", "display:none;");
	
	//I did not understand how to strip out the path
	// purchased[sizeArray] = onlyPath;
	// myShoppingCartDiv.innerHTML += '<img src="' + purchased[sizeArray] + '">';

}
function updateShoppingCart()
{
	var output = "";
	for(var i = 0; i < purchased.length; i++)
	{
		output += '<img src="' + purchased[i] + '" width="70" height="50" />';
	}
	myShoppingCartDiv.innerHTML = output;
}

