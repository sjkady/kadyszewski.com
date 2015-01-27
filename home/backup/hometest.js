/*
Created By: John Kadyszewski
if you want to use this code please give credit and link back to kadyszewski.com.
thank you.
 */
/*changelog*/
/*
--maded resume scalar(need to apply to the rest of the site)
--DOUBLE CHECK SCALARS.
 */

// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight - 4;
ctx.canvas.zIndex = "0";
document.body.appendChild(canvas);

/*LOAD IMAGES*/
var aupdReady = false;
var aupdImage = new Image();
aupdImage.onload = function () {
	aupdReady = true;
};
aupdImage.src = "images/Arrow-Updown.png";

var abacReady = false;
var abacImage = new Image();
abacImage.onload = function () {
	abacReady = true;
};
abacImage.src = "images/Arrow-Back.png";

var aforReady = false;
var aforImage = new Image();
aforImage.onload = function () {
	aforReady = true;
};
aforImage.src = "images/Arrow-forward.png";
// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "images/background.png";

//resume background
var bg2Ready = false;
var bg2Image = new Image();
bg2Image.onload = function () {
	bg2Ready = true;
};
bg2Image.src = "images/background3.png";

var logoReady = false;
var logoImage = new Image();
logoImage.onload = function () {
	logoReady = true;
};
logoImage.src = "images/logo.png";

//resume background
var bg3Ready = false;
var bg3Image = new Image();
bg3Image.onload = function () {
	bg3Ready = true;
};
bg3Image.src = "images/background2.png";

var bg4Ready = false;
var bg4Image = new Image();
bg4Image.onload = function () {
	bg4Ready = true;
};
bg4Image.src = "images/background5.png";

var homevaready = false;
var homeImage = new Image();
homeImage.onload = function () {
	homevaready = true;
};
homeImage.src = "images/home.png";

var musicReady = false;
var musicImage = new Image();
musicImage.onload = function () {
	musicReady = true;
};
musicImage.src = "images/music.png";

var arrowReady = false;
var arrowImage = new Image();
arrowImage.onload = function () {
	arrowReady = true;
};
arrowImage.src = "images/redarrow.png";

var notesReady = false;
var notesImage = new Image();
notesImage.onload = function () {
	notesReady = true;
};
notesImage.src = "images/notes.png";

var resumeReady = false;
var resumeImage = new Image();
resumeImage.onload = function () {
	resumeReady = true;
};
resumeImage.src = "images/resume.png";

var blogReady = false;
var blogImage = new Image();
blogImage.onload = function () {
	blogReady = true;
};
blogImage.src = "images/case.png";

var newsReady = false;
var newsImage = new Image();
newsImage.onload = function () {
	newsReady = true;
};
newsImage.src = "images/news.png";

/*variables*/
var spacingx = (ctx.canvas.width / 4);
var spacingy = (ctx.canvas.height / 4);
var menuvar = 0;
var defheight = 100;
var arrowx = ctx.canvas.width;
var logolift = ctx.canvas.height;
var homevar = 0;
var homex = 0;
var homey = 100;
var homey2 = homey + spacingy;
var homey3 = homey2 + spacingy;
var musicvar = 0;
var musicy = 100;
var musicy2 = musicy + spacingy;
var musicy3 = musicy2 + spacingy;
var musicy4 = musicy3 + spacingy;
var musicy5 = musicy4 + spacingy;
var musicy6 = musicy5 + spacingy;
var blogvar = 0;
var blogy = 100;
var blogy2 = blogy + spacingy;
var blogy3 = blogy2 + spacingy;
var blogy4 = blogy3 + spacingy;
var blogy5 = blogy4 + spacingy;
var blogy6 = blogy5 + spacingy;
var musicx = 0;
var notesx = 0;
var blogx = 0;
var biggie = 0;
var page = 0;
var resumelift = ctx.canvas.height * 1.3;
var noteslift = ctx.canvas.height * 1.3;
var homelift = ctx.canvas.height * 1.3;
var pagelift= ctx.canvas.height * 1.3;
var bloglift = ctx.canvas.width;
var bloglift2 = ctx.canvas.width;
var bloglift3 = ctx.canvas.width;
var bloglift4 = ctx.canvas.width;
var bloglift5 = ctx.canvas.width;
var bloglift6 = ctx.canvas.width;
var xstart = ctx.canvas.width / 5;
/*Sizes*/
var size1 = ctx.canvas.height / 20;
var size2 = ctx.canvas.height / 25;
var size3 = ctx.canvas.height / 30;
var size4 = ctx.canvas.height / 35;
/* Handle keyboard controls*/
var keysDown = {};

//keyboard  down listener
addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);
//keyboard up listener
addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);
//load feeds from any blogfeed
google.load("feeds", "1");
var blogfeed = "http://kadyszewski.com/blog/feed/";
var redditfeed = "http://www.reddit.com/.rss";
var feedlimit = 5;
var blogtitles = new Array();
var blogdesc = new Array();
var reddittitles = new Array();
var redditdesc = new Array();

function strSplitOnLength(data, your_desired_width) {
	if (data.length <= 0)
		return []; // return an empty array

	var splitData = data.split(/([\s\n\r]+)/);
	var arr = [];
	var cnt = 0;
	for (var i = 0; i < splitData.length; ++i) {
		if (!arr[cnt])
			arr[cnt] = ''; //Instantiate array entry to empty string if null or undefined

		if (your_desired_width < (splitData[i].length + arr[cnt].length))
			cnt++;

		arr[cnt] += splitData[i];
	}

	return arr;
}
//crate feed reader for set up
function rssfeedsetup() {
	var blogpointer = new google.feeds.Feed(blogfeed); //Google Feed API method
	blogpointer.setNumEntries(feedlimit); //Google Feed API method
	blogpointer.setResultFormat(google.feeds.Feed.XML_FORMAT);
	blogpointer.load(displayfeed1); //Google Feed API method
	var redditpointer = new google.feeds.Feed(redditfeed); //Google Feed API method
	redditpointer.setNumEntries(feedlimit); //Google Feed API method
	redditpointer.setResultFormat(google.feeds.Feed.XML_FORMAT);
	redditpointer.load(displayfeed2); //Google Feed API method
}

function displayfeed1(result) {
	if (!result.error) {
		/*create item for each pulled*/
		var items = result.xmlDocument.getElementsByTagName('item');
		for (var i = 0; i < items.length; i++) {
			/*get from xml*/
			var item = items[i];
			blogtitles[i] = item.getElementsByTagName('title')[0].firstChild.nodeValue;
			blogdesc[i] = item.getElementsByTagName('content:encoded')[0].firstChild.nodeValue;
			/*remove html tags*/
			var div = document.createElement("div");
			div.innerHTML = blogdesc[i];
			blogdesc[i] = div.textContent || div.innerText || "";
		}
	} else {
		alert("Error fetching feeds!");
	}
}

function displayfeed2(result) {
	if (!result.error) {
		var items = result.xmlDocument.getElementsByTagName('item');
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			//reddittitles[i]=item.getElementsByTagName('title')[0].firstChild.nodeValue;
			//		redditdesc[i]=item.getElementsByTagName('description')[0].firstChild.nodeValue;
			var div = document.createElement("div");
			div.innerHTML = redditdesc[i];
			redditdesc[i] = div.textContent || div.innerText || "";
		}
	} else {
		alert("Error fetching feeds!");
	}
}

/* Update menu objects in response to keys*/
var update = function (modifier) {

	/*ESC key on page*/
	if (27 in keysDown) 
	{
		page = 0;
		pagelift=pagelift= ctx.canvas.height * 1.3;
	}
	/*  Pagelift */
	/*CONTROLS ALTERNATIVE BACKGROUND*/
		if(page==1)
		{
			if(pagelift>0)
			{
				pagelift=pagelift-modifier*5;
			}
		}
	
	if(page==0)
	{
		/*Enter key on page*/
		if (menuvar == -2) {
			if (13 in keysDown) 
			{
				page = 1;
			}
		}
		/*lest right key control*/
		if (37 in keysDown) { /* Player holding left*/
			if ((menuvar < 0) && ((biggie < (homex + modifier)) && biggie > homex - modifier)) {
				menuvar = menuvar + 1;
			}
		}
		if (39 in keysDown) { /* Player holding right*/
			if ((menuvar > -3) && (biggie < (homex + modifier) && biggie > homex - modifier)) {
				menuvar = menuvar - 1;
			}
		}
		/*left right key control*/

		/*blog key control*/
		if (menuvar == -3) {
			if (38 in keysDown) { /* Player holding up*/
				if ((blogvar < 0) && (blogie < (blogy + modifier) && blogie > blogy - modifier)) {
					blogvar = blogvar + 1;
				}
			}
			if (40 in keysDown) { /*Player holding down*/
				if ((blogvar > -5) && (blogie < (blogy + modifier) && blogie > blogy - modifier)) {
					blogvar = blogvar - 1;
				}
			}
		}
		/*blog key control end*/

		/*music key control*/
		if (menuvar == -1) {
			if (38 in keysDown) { /* Player holding up*/
				if ((musicvar < 0) && (musicie < (musicy + modifier) && musicie > musicy - modifier)) {
					musicvar = musicvar + 1;
				}
			}
			if (40 in keysDown) { /*Player holding down*/
				if ((musicvar > -5) && (musicie < (musicy + modifier) && musicie > musicy - modifier)) {
					musicvar = musicvar - 1;
				}
			}
		}
		/*music key control end*/

		/*home key control*/
		if (menuvar == 0) {
			if (38 in keysDown) { /* Player holding up*/
				if ((homevar < 0) && (homie < (homey + modifier) && homie > homey - modifier)) {
					homevar = homevar + 1;
				}
			}
			if (40 in keysDown) { /*Player holding down*/
				if ((homevar > -2) && (homie < (homey + modifier) && homie > homey - modifier)) {
					homevar = homevar - 1;
				}
			}
		}
		/*home key control end*/

		/*set icon spacing*/
		/*ONLY CHANGE IF ADD NEW ICONS*/
		biggie = (menuvar * spacingx + 100);/*NEED TO ALLOCATE CORRECT SPACING FOR 100*/
		homie = (homevar * spacingy + 100);
		musicie = (musicvar * spacingy + 100);
		blogie = (blogvar * spacingy + 100);
		if (biggie < homex) {
			homex = homex - modifier;
		}
		if (biggie > homex) {
			homex = homex + modifier;
		}
		musicx = homex + spacingx;
		notesx = musicx + spacingx;
		blogx = notesx + spacingx;
		if (menuvar == -3) {
			if (blogie < blogy) {
				blogy = blogy - modifier;
			}
			if (blogie > blogy) {
				blogy = blogy + modifier;
			}
			blogy2 = blogy + spacingy;
			blogy3 = blogy2 + spacingy;
			blogy4 = blogy3 + spacingy;
			blogy5 = blogy4 + spacingy;
			blogy6 = blogy5 + spacingy;
		}
		if (menuvar == -1) {
			if (musicie < musicy) {
				musicy = musicy - modifier;
			}
			if (musicie > musicy) {
				musicy = musicy + modifier;
			}
			musicy2 = musicy + spacingy;
			musicy3 = musicy2 + spacingy;
			musicy4 = musicy3 + spacingy;
			musicy5 = musicy4 + spacingy;
			musicy6 = musicy5 + spacingy;
		}
		if (menuvar == 0) {
			if (homie < homey) {
				homey = homey - modifier;
			}
			if (homie > homey) {
				homey = homey + modifier;
			}
			homey2 = homey + spacingy;
			homey3 = homey2 + spacingy;
		}
		/*end icon spacing*/

		/*home ****DISPLAY RED ARRAY AND KADYSZEWSKI LOGO*/
		if (menuvar == 0 && homevar == 0) {
			if (arrowx > ctx.canvas.width -130) {
				arrowx = arrowx - modifier;
			}
			if (arrowx < ctx.canvas.width -130) {
				arrowx = arrowx + modifier;
			}
			if (logolift > ctx.canvas.height * (5 / 8)) {
				logolift = logolift - modifier * 1.5;
			}
			if (logolift < ctx.canvas.height * (5 / 8)) {
				logolift = logolift + modifier * 1.5;
			}
		}
		if (menuvar != 0 || homevar != 0) {
			if (arrowx < ctx.canvas.width + 10) {
				arrowx = arrowx + modifier;
			}
			if (arrowx > ctx.canvas.width + 10) {
				arrowx = arrowx - modifier;
			}
			if (logolift < ctx.canvas.height + 70) {
				logolift = logolift + modifier * 2;
			}
			if (logolift > ctx.canvas.height + 70) {
				logolift = logolift - modifier * 2;
			}
		}
		/*home end*/

		/*resume ***SIMPLE TEXT DISPLAY****/
		if (menuvar == 0 && homevar == -2) {
			if (resumelift > ctx.canvas.height / 8) {
				resumelift = resumelift - modifier * 2;
			}
		}
		if (menuvar == 1 || menuvar == -1) {
			if (homevar == -2) {
				if (resumelift < ctx.canvas.height * 1.3) {
					resumelift = resumelift + modifier * 2;
				}
			}
		}
		if (homevar == -1 || homevar == -3) {
			if (resumelift < ctx.canvas.height * 1.3) {
				resumelift = resumelift + modifier * 2;
			}
		}
		/*resume end*/

		/*about me  ***SIMPLE TEXT DISPLAY****/
		if (menuvar == 0 && homevar == -1) {
			if (noteslift > ctx.canvas.height / 8) {
				noteslift = noteslift - modifier * 2;
			}
		}
		if (menuvar == 1 || menuvar == -1) {
			if (homevar == -1) {
				if (noteslift < ctx.canvas.height * 1.3) {
					noteslift = noteslift + modifier * 2;
				}
			}
		}
		if (homevar == 0 || homevar == -2) {
			if (noteslift < ctx.canvas.height * 1.3) {
				noteslift = noteslift + modifier * 2;
			}
		}
		/*about me end*/	
		if (13 in keysDown) { /* Player holding enter*/
			if (menuvar == 0) {}
			if (menuvar == 1) {}
		}
	}
};

// Draw all things to the screen
var render = function () {
	if(page == 1)//overlay separate background for alternative display
	{
		if (bg3Ready) {
			for (var w = 0; w < ctx.canvas.width; w += bg3Image.width) {
				for (var h = 0; h < ctx.canvas.height; h += bg3Image.height) {
					ctx.drawImage(bg3Image, w, h+pagelift);
				}
			}
		}	
	}
	else
	{
	/*Draw the background*/
	if (bg4Ready) {
		for (var w = 0; w < ctx.canvas.width; w += bg4Image.width) {
			for (var h = 0; h < ctx.canvas.height; h += bg4Image.height) {
				ctx.drawImage(bg4Image, w, h);
			}
		}
	}
	/*opacities x*/
	var musicxr = musicx / 100;
	var homexr = homex / 100;
	var notesxr = notesx / 100;
	var blogxr = blogx / 100;

	/*opacities y*/
	var musicyr = (musicy / 100);
	var musicy2r = (musicy2 / 100);
	var musicy3r = (musicy3 / 100);
	var musicy4r = (musicy4 / 100);
	var musicy5r = (musicy5 / 100);
	var musicy6r = (musicy6 / 100);
	var homeyr = (homey / 100);
	var homey2r = (homey2 / 100);
	var homey3r = (homey3 / 100);
	var blogyr = (blogy / 100);
	var blogy2r = (blogy2 / 100);
	var blogy3r = (blogy3 / 100);
	var blogy4r = (blogy4 / 100);
	var blogy5r = (blogy5 / 100);
	var blogy6r = (blogy6 / 100);
	
	/*opacities final*/
	var blogo=1.0 / blogxr / blogyr;
	var blogo2=1.0 / blogxr / blogy2r;
	var blogo3=1.0 / blogxr / blogy3r;
	var blogo4=1.0 / blogxr / blogy4r;
	var blogo5=1.0 / blogxr / blogy5r;
	var blogo6=1.0 / blogxr / blogy6r;
	var musico=1.0 / musicxr / musicyr;
	var musico2=1.0 / musicxr / musicy2r;
	var musico3=1.0 / musicxr / musicy3r;
	var musico4=1.0 / musicxr / musicy4r;
	var musico5=1.0 / musicxr / musicy5r;
	var musico6=1.0 / musicxr / musicy6r;
	
	/*text locators*/
	var blogtext = blogx+110;
	var musictext = musicx+110;
	var hometext = homex+110;

	/*blog*/
	ctx.fillStyle = "#B8B8B8 ";
	ctx.font = "bold 30px Rockwell";
	ctx.save();
	ctx.globalAlpha = blogo;
	ctx.drawImage(blogImage, blogx, blogy);
	ctx.fillText(blogtitles[0], blogtext, blogy + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = blogo2;
	ctx.drawImage(blogImage, blogx, blogy2);
	ctx.fillText(blogtitles[1], blogtext, blogy2 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = blogo3;
	ctx.drawImage(blogImage, blogx, blogy3);
	ctx.fillText(blogtitles[2], blogtext, blogy3 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = blogo4;
	ctx.drawImage(blogImage, blogx, blogy4)
	ctx.fillText(blogtitles[3], blogtext, blogy4 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = blogo5;
	ctx.drawImage(blogImage, blogx, blogy5);
	ctx.fillText(blogtitles[4], blogx + 110, blogy5 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = blogo6;
	ctx.drawImage(blogImage, blogx, blogy6);
	ctx.fillText("Go to blog homepage", blogx + 110, blogy6 + 55);
	ctx.restore();

	/*notes*/
	ctx.save();
	ctx.fillStyle = "#B8B8B8 ";
	ctx.font = "bold 30px Rockwell";
	ctx.globalAlpha = 1.0 / notesxr;
	ctx.drawImage(notesImage, notesx, defheight);
	ctx.fillText("page", notesx + 110, defheight + 55);
	ctx.restore();

	/*music*/
	ctx.save();
	ctx.fillStyle = "#B8B8B8 ";
	ctx.font = "bold 30px Rockwell";
	ctx.globalAlpha = musico;
	ctx.drawImage(musicImage, musicx, musicy);
	ctx.fillText("coming soon", musictext, musicy + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = musico2;
	ctx.drawImage(musicImage, musicx, musicy2);
	ctx.fillText("coming soon", musictext, musicy2 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = musico3;
	ctx.drawImage(musicImage, musicx, musicy3);
	ctx.fillText("coming soon", musictext, musicy3 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = musico4;
	ctx.drawImage(musicImage, musicx, musicy4);
	ctx.fillText("coming soon", musictext, musicy4 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = musico5;
	ctx.drawImage(musicImage, musicx, musicy5);
	ctx.fillText("coming soon", musictext, musicy5 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = musico6;
	ctx.drawImage(musicImage, musicx, musicy6);
	ctx.fillText("coming soon", musictext, musicy6 + 55);
	ctx.restore();

	/*home*/
	ctx.save();
	ctx.globalAlpha = 1.0 / homexr / homeyr;
	ctx.drawImage(homeImage, homex, homey);
	ctx.fillText("Home", hometext, homey + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = 1.0 / homexr / homey2r;
	ctx.drawImage(notesImage, homex, homey2);
	ctx.fillText("About", hometext, homey2 + 55);
	ctx.restore();
	ctx.save();
	ctx.globalAlpha = 1.0 / homexr / homey3r;
	ctx.drawImage(resumeImage, homex, homey3);
	ctx.fillText("Resume", hometext, homey3 + 55);
	ctx.restore();
	
	/*logo*/
	ctx.save();
	ctx.drawImage(logoImage, xstart, logolift);
	ctx.restore();
	
	/*redarrow*/
	ctx.save();
	ctx.drawImage(arrowImage, arrowx, ctx.canvas.height-250);
	ctx.restore();
	

	if ((menuvar == 0 || menuvar == -1 || menuvar == 1) && (homevar == -1 || homevar == 0 || homevar == -2)) {
		/*backround for text better just overlayed
		if (bg3Ready) {
		for (var w = 0; w < ctx.canvas.width-(ctx.canvas.width/2); w += bg3Image.width){
		for (var h = 0; h < ctx.canvas.height/2; h  += bg3Image.height){
		ctx.drawImage(bg3Image, w+ctx.canvas.width/4, h+noteslift);
		}
		}
		}
		 */
		text = noteslift;
		ctx.fillStyle = "#B8B8B8 ";
		ctx.font = "bold " + size1 + "px Rockwell";
		ctx.fillText("ABOUT", xstart, text);
		text += size1;

		ctx.font = "bold " + size2 + "px Rockwell";
		ctx.fillText("Kadyszewski.com", xstart, text);
		text += size2

		ctx.font = "bold " + size2 + "px Rockwell";
		ctx.fillText("Simple.Interface.Design", xstart, text);
		text += size2;

		ctx.font = "bold " + size4 + "px Rockwell";
		ctx.fillText("This is the personal homepage and website of John Kadyszewski.", xstart, text);
		text += size4;
		ctx.fillText("It was developed in an HTML5 canvas element and links out to", xstart, text);
		text += size4;
		ctx.fillText("my projects as well as my blog posts and the latest", xstart, text);
		text += size4;
		ctx.fillText("google news.", xstart, text);
	}
	if (menuvar == -3) {
		if (blogvar > -5) {
			ctx.fillStyle = "#B8B8B8 ";
			ctx.font = "bold +" + size4 + "px Rockwell";
			if (blogvar < 1) {
				var blogger = strSplitOnLength(blogdesc[Math.abs(blogvar)], ctx.canvas.width / 17);
				for (var i = 0; i < blogger.length; i++) {
					if (i > 0) {
						blogger[i] = blogger[i].replace("undefined", "");
					}
					ctx.fillText(blogger[i], xstart, ctx.canvas.height / 4 + (size4 * i));
				}
			}
		}
	}
	//place on the way
	if ((menuvar == 0 || menuvar == -1 || menuvar == 1) && (homevar == -1 || homevar == -3 || homevar == -2)) {
		/*background but better overlayed
		if (bg2Ready) {
		for (var w = 0; w < ctx.canvas.width-(ctx.canvas.width/2); w += bg2Image.width){
		for (var h = 0; h < ctx.canvas.height/2; h  += bg2Image.height){
		ctx.drawImage(bg2Image, w+ctx.canvas.width/4, h+resumelift);
		}
		}
		}
		 */
		text = resumelift;
		ctx.fillStyle = "#B8B8B8 ";
		ctx.font = "bold " + size1 + "px Rockwell";
		ctx.fillText("RESUME",  xstart, text);
		text += size1;

		ctx.font = "bold " + size2 + "px Rockwell";
		ctx.fillText("John Kadyszewski", xstart, text);
		text += size2;

		ctx.font = "bold " + size3 + "px Rockwell";
		ctx.fillText("Email for phone number", xstart, text);
		text += size3;

		ctx.fillText("sjkady@gmail.com", xstart, text);
		text += size2;

		ctx.font = "bold " + size2 + "px Rockwell";
		ctx.fillText("Education", xstart, text);
		text += size2

		ctx.font = "bold " + size3 + "px Rockwell";
		ctx.fillText("University of Mary Washington <> Fredericksburg, VA <> 2010-Present", xstart , text);
		text += size3;

		ctx.fillText("Major: Computer Science", xstart , text);
		text += size3;

		ctx.font = "bold " + size2 + "px Rockwell";
		ctx.fillText("Experience", xstart , text);
		text += size2;

		ctx.font = "bold " + size3 + "px Rockwell";
		ctx.fillText("UMW EAS Department Aide(2011-Present) <> Fredericksburg, VA", xstart , text);
		text += size3;

		ctx.font = "bold " + size4+ "px Rockwell";
		ctx.fillText("I currently work part-time at the university of Mary Washington for Enterprise", xstart , text);
		text += size4
		ctx.fillText("Application Services Department where I perform several duties. My main job is", xstart , text);
		text += size4
		ctx.fillText("development and maintenance of SQL reports for the school but I also have been ", xstart , text);
		text += size4
		ctx.fillText("involved in projects of web development for computers and mobile, graphic design,", xstart , text);
		text += size4
		ctx.fillText("and Visio markups.", xstart , text);
		text += size4

		ctx.font = "bold " + size3 + "px Rockwell";
		ctx.fillText("Chinese Food Delivery (2011-2013) <> McLean, VA", xstart , text);
		text += size3;

		ctx.font = "bold " + size4+ "px Rockwell";
		ctx.fillText("Worked as a delivery driver for wok and roll Chinese restaurant in McLean, VA ", xstart , text);
		text += size4;
		ctx.fillText("Delivered Chinese food in rush hour Northern VA traffic has helped me develop", xstart , text);
		text += size4;
		ctx.fillText("good patience and driving skills", xstart , text);
		text += size2;

		ctx.font = "bold " + size2 + "px Rockwell";
		ctx.fillText("Technology", xstart , text);
		text += size2;

		ctx.font = "bold " + size4+ "px Rockwell";
		ctx.fillText(">Java", xstart , text);
		text += size4;
		ctx.fillText(">SQL", xstart , text);
		text += size4;
		ctx.fillText(">Web Development(HTML, CSS, JavaScript, J Query, PHP)", xstart , text);
		text += size4;
		ctx.fillText(">C++ ", xstart , text);
		text += size4;
		ctx.fillText(">Python ", xstart , text);
		text += size4;
		ctx.fillText(">3D Graphics with OpenGL ", xstart , text);
		text += size4;
		ctx.fillText(">Microsoft office ", xstart , text);
		text += size4;
		ctx.fillText(">Image editing with GIMP or Photoshop ", xstart , text);
	}
	ctx.save();
	ctx.globalAlpha = 1.0;
	ctx.drawImage(abacImage, ctx.canvas.width - 150, ctx.canvas.height - 60);
	ctx.drawImage(aupdImage, ctx.canvas.width - 110, ctx.canvas.height - 60);
	ctx.drawImage(aforImage, ctx.canvas.width - 70, ctx.canvas.height - 60);
	ctx.restore();
	}
};
var main = function () {
	var now = Date.now();
	var delta = now - then; //time passed for frame adjustment.
	update(delta);
	render();
	then = now;
};
var then = Date.now();
var animater;//store the animation so it doesn't reallocate the variable
var start = function () {
	var element = document.getElementById("loading-image");
	element.outerHTML = "";
	delete element;
	animater = setInterval(main, 55);
};
window.onload = function () {
	rssfeedsetup();
	setTimeout(start, 1250);//timeout to make sure all the images load on time
}
