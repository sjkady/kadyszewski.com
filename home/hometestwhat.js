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
var iframe = document.createElement("iframe");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight - 4;
ctx.canvas.zIndex = "0";
document.body.appendChild(canvas);
/*LOAD IMAGES*/
/*think about adding themes*/
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
var outdoorsReady = false;
var outdoorsImage = new Image();
musicImage.onload = function () {
	outdoorsReady = true;
};
outdoorsImage.src = "images/outdoors.png";
var settingsReady = false;
var settingsImage = new Image();
musicImage.onload = function () {
	settingsReady = true;
};
settingsImage.src = "images/settings.png";
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
/*IMAGES END*/
/*VARIABLES*/
/*Space placed between icons*/
var spacingx = (ctx.canvas.width * 0.7);
var spacingy = (ctx.canvas.height / 4);
/*category selector*/
var menuvar = 0;
/*home locations */
var homey = 100;
var homey2 = homey + spacingy;
var homey3 = homey2 + spacingy;
var homey4 = homey3 + spacingy;
/*active category post selector*/
var homevar = 0;
var musicvar = 0;
var blogvar = 0;
var outdoorsvar = 0;
/*row y location*/
var homey = 100;
/*column x values*/
var homex = 0;
var musicx = 0;
var blogx = 0;
var outdoorsx = 0;
/*text locators*/
var blogtext = blogx + 80;
var musictext = musicx + 80;
var hometext = homex + 80;
var outdoorstext = outdoorsx + 80;
/*MISC*/
var biggie = 0;
var blogie = 0;
var musicie = 0;
var outdoorsie = 0;
var page = 0;
var defheight = 100;
var arrowx = ctx.canvas.width;
var logolift = ctx.canvas.height;
var postheight;
var createyoutube = 0;
var youtubeurl;
var element;
var re = /[a-zA-Z0-9\-\_]{11}/;
/*Lift animation */
var resumelift = ctx.canvas.height * 1.3;
var aboutlift = ctx.canvas.height * 1.3;
var homelift = ctx.canvas.height * 1.3;
var pagelift = ctx.canvas.height * 1.3;
var settingslift = ctx.canvas.height * 1.3;
var xstart = ctx.canvas.width / 4;
/*FEEDS*/
var feeds = [];
google.load("feeds", "1");
var blogfeed = "http://blog.kadyszewski.com/category/technology/feed/?fsk=fulltext";
var musicfeed = "http://blog.kadyszewski.com/category/music/feed/?fsk=fulltext";
var outdoorsfeed = "http://blog.kadyszewski.com/category/outdoors/feed/?fsk=fulltext";
/*REGEXP TO GET LINKS*/
var getlinks = /<a href="(.*?)"/g;
/*blog*/
var blogpointer;
var blogfeedlimit = 10;
var blogtitles = [];
var blogdesc = [];
var blogcont = [];
var blogspacing = [];
var blogopa = [];
var bloglinks = [];
/*music*/
var musicpointer;
var musicfeedlimit = 10;
var musictitles = [];
var musicdesc = [];
var musiccont = [];
var musicspacing = [];
var musicopa = [];
var musiclinks = [];
/*outdoors*/
var outdoorspointer;
var outdoorsfeedlimit = 10;
var outdoorstitles = [];
var outdoorsdesc = [];
var outdoorscont = [];
var outdoorsspacing = [];
var outdoorsopa = [];
var outdoorslinks = [];
/*FEEDS END*/
/*LISTENERS!*/
/* Handle touch screen controls
var touchable = 'createTouch' in document;
if(touchable) {
canvas.addEventListener( 'touchstart', onTouchStart, false );
canvas.addEventListener( 'touchmove', onTouchMove, false );
canvas.addEventListener( 'touchend', onTouchEnd, false );
}
function onTouchMove(event) {
/* Prevent the browser from doing its default thing (scroll, zoom)
event.preventDefault();
}
 */
/* NEED TO FINISH CREATING TOUCH SCREEN CONTROLS FOR WEBSITE ACCESS ON MOBILE */
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
/*LISTENERS END*/
/*VARIABLES END*/
/*Text Sizes*/
var size1 = ctx.canvas.height / 25;
var size2 = ctx.canvas.height / 30;
var size3 = ctx.canvas.height / 35;
var size4 = ctx.canvas.height / 40;
var size5 = ctx.canvas.height / 45;
var size6 = ctx.canvas.height / 50;

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
	blogpointer = new google.feeds.Feed(blogfeed); //Google Feed API method
	blogpointer.setNumEntries(blogfeedlimit); //Google Feed API method
	blogpointer.setResultFormat(google.feeds.Feed.XML_FORMAT);
	blogpointer.load(displayfeed1); //Google Feed API method
	musicpointer = new google.feeds.Feed(musicfeed); //Google Feed API method
	musicpointer.setNumEntries(musicfeedlimit); //Google Feed API method
	musicpointer.setResultFormat(google.feeds.Feed.XML_FORMAT);
	musicpointer.load(displayfeed2); //Google Feed API method
	outdoorspointer = new google.feeds.Feed(outdoorsfeed); //Google Feed API method
	outdoorspointer.setNumEntries(outdoorsfeedlimit); //Google Feed API method
	outdoorspointer.setResultFormat(google.feeds.Feed.XML_FORMAT);
	outdoorspointer.load(displayfeed3); //Google Feed API method
}

function displayfeed1(result) {
	if (!result.error) {
		/*create item for each pulled*/
		var items = result.xmlDocument.getElementsByTagName('item');
		blogfeedlimit = items.length;
		for (var i = 0; i < items.length; i++) {
			/*get from xml*/
			var item = items[i];
			blogtitles[i] = item.getElementsByTagName('title')[0].firstChild.nodeValue;
			blogdesc[i] = item.getElementsByTagName('description')[0].firstChild.nodeValue;
			var div = document.createElement("div");
			/*remove html tags*/
			div.innerHTML = blogdesc[i];
			blogdesc[i] = div.textContent || div.innerText || "";
			blogcont[i] = item.getElementsByTagName('content:encoded')[0].firstChild.nodeValue;
			while (match = getlinks.exec(blogcont[i])) {
				bloglinks[i] = match;
			}
			div = document.createElement("div");
			/*remove html tags*/
			div.innerHTML = blogcont[i];
			blogcont[i] = div.textContent || div.innerText || "";
		}
	} else {
		alert("Error fetching feeds!");
	}
}

function displayfeed2(result) {
	if (!result.error) {
		var items = result.xmlDocument.getElementsByTagName('item');
		musicfeedlimit = items.length;
		for (var i = 0; i < items.length; i++) {
			var item = items[i];
			musictitles[i] = item.getElementsByTagName('title')[0].firstChild.nodeValue;
			musicdesc[i] = item.getElementsByTagName('description')[0].firstChild.nodeValue;
			var div = document.createElement("div");
			/*remove html tags*/
			div.innerHTML = musicdesc[i];
			musicdesc[i] = div.textContent || div.innerText || "";
			musiccont[i] = item.getElementsByTagName('content:encoded')[0].firstChild.nodeValue;
			while (match = getlinks.exec(musiccont[i])) {
				musiclinks[i] = match;
			}
			div = document.createElement("div");
			/*remove html tags*/
			div.innerHTML = musiccont[i];
			musiccont[i] = div.textContent || div.innerText || "";
		}
	} else {
		alert("Error fetching feeds!");
	}
}

function displayfeed3(result) {
	if (!result.error) {
		/*create item for each pulled*/
		var items = result.xmlDocument.getElementsByTagName('item');
		outdoorsfeedlimit = items.length;
		for (var i = 0; i < items.length; i++) {
			/*get from xml*/
			var item = items[i];
			outdoorstitles[i] = item.getElementsByTagName('title')[0].firstChild.nodeValue;
			outdoorsdesc[i] = item.getElementsByTagName('description')[0].firstChild.nodeValue;
			var div = document.createElement("div");
			/*remove html tags*/
			div.innerHTML = outdoorsdesc[i];
			outdoorsdesc[i] = div.textContent || div.innerText || "";
			outdoorscont[i] = item.getElementsByTagName('content:encoded')[0].firstChild.nodeValue;
			while (match = getlinks.exec(outdoorscont[i])) {
				outdoorslinks[i] = match;
			}
			div = document.createElement("div");
			/*remove html tags*/
			div.innerHTML = outdoorscont[i];
			outdoorscont[i] = div.textContent || div.innerText || "";
		}
	} else {
		alert("Error fetching feeds!");
	}
}
/* Update menu objects in response to keys*/
var update = function (modifier) {
	/*ESC key on page*/
	if (27 in keysDown) {
		var iframes = document.getElementsByTagName('iframe');
		for (var i = 0; i < iframes.length; i++) {
			iframes[i].parentNode.removeChild(iframes[i]);
		}
		page = 0;
		pagelift = pagelift = ctx.canvas.height * 1.3;
	}
	/*  Pagelift */
	/*CONTROLS ALTERNATIVE BACKGROUND*/
	if (page == 1) {
		if (pagelift > 0) {
			pagelift = pagelift - modifier;
		}
		/*blog key control*/
		if (38 in keysDown) {
			/* Player holding up*/
			postheight = postheight - modifier * 0.15;
		}
		if (40 in keysDown) {
			/*Player holding down*/
			postheight = postheight + modifier * 0.15;
		}
	}
	if (page == 0) {
		/* Enter key on page*/
		if (menuvar == -1 || menuvar == -2 || menuvar == -3) {
			if (musicvar > -(musicfeedlimit) && blogvar > -(blogfeedlimit) && outdoorsvar > -(outdoorsfeedlimit)) {
				if (13 in keysDown) {
					postheight = 0;
					page = 1;
					createyoutube = 1;
				}
			}
		}
		/*lest right key control*/
		if (37 in keysDown) {
			/* Player holding left*/
			if ((menuvar < 0) && (biggie < homex + (modifier * 2) && biggie > homex - (modifier * 2))) {
				menuvar = menuvar + 1;
			}
		}
		if (39 in keysDown) {
			/* Player holding right*/
			if ((menuvar > -3) && (biggie < homex + modifier && biggie > homex - (modifier * 2))) {
				menuvar = menuvar - 1;
			}
		}
		/*left right key control*/
		/*blog key control*/
		if (menuvar == -2) {
			if (38 in keysDown) {
				/* Player holding up*/
				if ((blogvar < 0) && (blogie < blogspacing[0] + modifier && blogie > blogspacing[0] - modifier)) {
					blogvar = blogvar + 1;
				}
			}
			if (40 in keysDown) {
				/*Player holding down*/
				if ((blogvar > -(blogfeedlimit)) && (blogie < blogspacing[0] + modifier && blogie > blogspacing[0] - modifier)) {
					blogvar = blogvar - 1;
				}
			}
		}
		/*blog key control end*/
		/*music key control*/
		if (menuvar == -1) {
			if (38 in keysDown) {
				/* Player holding up*/
				if ((musicvar < 0) && (musicie < musicspacing[0] + modifier && musicie > musicspacing[0] - modifier)) {
					musicvar = musicvar + 1;
				}
			}
			if (40 in keysDown) {
				/*Player holding down*/
				if ((musicvar > -(musicfeedlimit)) && (musicie < musicspacing[0] + modifier && musicie > musicspacing[0] - modifier)) {
					musicvar = musicvar - 1;
				}
			}
		}
		/*music key control end*/
		/*outdoors key control*/
		if (menuvar == -3) {
			if (38 in keysDown) {
				/* Player holding up*/
				if ((outdoorsvar < 0) && (outdoorsie < outdoorsspacing[0] + modifier && outdoorsie > outdoorsspacing[0] - modifier)) {
					outdoorsvar = outdoorsvar + 1;
				}
			}
			if (40 in keysDown) {
				/*Player holding down*/
				if ((outdoorsvar > -(outdoorsfeedlimit)) && (outdoorsie < outdoorsspacing[0] + modifier && outdoorsie > outdoorsspacing[0] - modifier)) {
					outdoorsvar = outdoorsvar - 1;
				}
			}
		}
		/*outdoors key control end*/
		/*home key control*/
		if (menuvar == 0) {
			if (38 in keysDown) {
				/* Player holding up*/
				if ((homevar < 0) && (homie < homey + modifier && homie > homey - modifier)) {
					homevar = homevar + 1;
				}
			}
			if (40 in keysDown) {
				/*Player holding down*/
				if ((homevar > -3) && (homie < homey + modifier && homie > homey - modifier)) {
					homevar = homevar - 1;
				}
			}
		}
		/*home key control end*/
		/*set icon spacing*/
		/*ONLY CHANGE IF ADD NEW ICONS*/
		biggie = (menuvar * spacingx + 100);
		/*NEED TO ALLOCATE CORRECT SPACING FOR 100*/
		homie = (homevar * spacingy + 100);
		blogie = (blogvar * spacingy + 100);
		musicie = (musicvar * spacingy + 100);
		outdoorsie = (outdoorsvar * spacingy + 100);
		if (biggie < homex) {
			homex = homex - modifier * 2;
		}
		if (biggie > homex) {
			homex = homex + modifier * 2;
		}
		musicx = homex + spacingx;
		blogx = musicx + spacingx;
		outdoorsx = blogx + spacingx;
		if (outdoorsie < outdoorsspacing[0]) {
			outdoorsspacing[0] = outdoorsspacing[0] - modifier;
		}
		if (outdoorsie > outdoorsspacing[0]) {
			outdoorsspacing[0] = outdoorsspacing[0] + modifier;
		}
		for (var i = 1; i <= outdoorsfeedlimit; i++) {
			outdoorsspacing[i] = outdoorsspacing[i - 1] + spacingy;
		}
		if (blogie < blogspacing[0]) {
			blogspacing[0] = blogspacing[0] - modifier;
		}
		if (blogie > blogspacing[0]) {
			blogspacing[0] = blogspacing[0] + modifier;
		}
		for (var i = 1; i <= blogfeedlimit; i++) {
			blogspacing[i] = blogspacing[i - 1] + spacingy;
		}
		if (musicie < musicspacing[0]) {
			musicspacing[0] = musicspacing[0] - modifier;
		}
		if (musicie > musicspacing[0]) {
			musicspacing[0] = musicspacing[0] + modifier;
		}
		for (var i = 1; i <= musicfeedlimit; i++) {
			musicspacing[i] = musicspacing[i - 1] + spacingy;
		}
		if (homie < homey) {
			homey = homey - modifier * 0.6;
		}
		if (homie > homey) {
			homey = homey + modifier * 0.6;
		}
		homey2 = homey + spacingy;
		homey3 = homey2 + spacingy;
		homey4 = homey3 + spacingy;
		/*end icon spacing*/
		/*home ****DISPLAY RED ARRAY AND KADYSZEWSKI LOGO*/
		if (menuvar == 0 && homevar == 0) {
			if (arrowx > ctx.canvas.width - 170) {
				arrowx = arrowx - modifier;
			}
			if (arrowx < ctx.canvas.width - 140) {
				arrowx = arrowx + modifier;
			}
			/*
			if (logolift > ctx.canvas.height * (5 / 8)) {
			logolift = logolift - modifier * 1.5;
			}
			if (logolift < ctx.canvas.height * (5 / 8)) {
			logolift = ctx.canvas.height * (5 / 8);
			}
			 */
		}
		if (menuvar != 0 || homevar != 0) {
			if (arrowx < ctx.canvas.width + 10) {
				arrowx = arrowx + modifier;
			}
			if (arrowx > ctx.canvas.width + 40) {
				arrowx = arrowx - modifier;
			}
			/*
			if (logolift < ctx.canvas.height + 70) {
			logolift = logolift + modifier * 2;
			}
			 */
		}
		/*home end*/
		/*resume ***SIMPLE TEXT DISPLAY****/
		if (menuvar == 0 && homevar == -2) {
			if (resumelift > ctx.canvas.height / 4) {
				resumelift = resumelift - modifier * 2;
			}
			if (resumelift < ctx.canvas.height / 4) {
				/*removed all jitters*/
				resumelift = ctx.canvas.height / 4;
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
			if (aboutlift > ctx.canvas.height / 4) {
				aboutlift = aboutlift - modifier * 2;
			}
			if (aboutlift < ctx.canvas.height / 4) {
				aboutlift = ctx.canvas.height / 4
			}
		}
		if (menuvar == -1) {
			if (homevar == -1) {
				if (aboutlift < ctx.canvas.height * 1.3) {
					aboutlift = aboutlift + modifier * 2;
				}
			}
		}
		if (homevar == 0 || homevar == -2) {
			if (aboutlift < ctx.canvas.height * 1.3) {
				aboutlift = aboutlift + modifier * 2;
			}
		}
		/*about me end*/
		/*Home  ***SIMPLE TEXT DISPLAY****/
		if (menuvar == 0 && homevar == 0) {
			if (homelift > ctx.canvas.height / 4) {
				homelift = homelift - modifier * 2;
			}
			if (homelift < ctx.canvas.height / 4) {
				homelift = ctx.canvas.height / 4
			}
		}
		if (menuvar == 0) {
			if (homevar == -1) {
				if (homelift < ctx.canvas.height * 1.3) {
					homelift = homelift + modifier * 2;
				}
			}
		}
		if (menuvar == -1) {
			if (homelift < ctx.canvas.height * 1.3) {
				homelift = homelift + modifier * 2;
			}
		}
		/*Home end*/
		/*Settings  ***SIMPLE TEXT DISPLAY****/
		if (menuvar == 0 && homevar == -3) {
			if (settingslift > ctx.canvas.height / 4) {
				settingslift = settingslift - modifier * 2;
			}
			if (settingslift < ctx.canvas.height / 4) {
				settingslift = ctx.canvas.height / 4
			}
		}
		if (menuvar == 0) {
			if (homevar == -2) {
				if (settingslift < ctx.canvas.height * 1.3) {
					settingslift = settingslift + modifier * 2;
				}
			}
			if (homevar == -4) {
				if (settingslift < ctx.canvas.height * 1.3) {
					settingslift = settingslift + modifier * 2;
				}
			}
		}
		if (menuvar == -1) {
			if (settingslift < ctx.canvas.height * 1.3) {
				settingslift = settingslift + modifier * 2;
			}
		}
		/*Settings end*/
		if (13 in keysDown) {
			/* Player holding enter*/
			if (menuvar == 0) {}
			if (menuvar == 1) {}
		}
	}
};
// Draw all things to the screen
var render = function () {
	if (page == 1) //overlay separate background for alternative display
	{
		if (bg4Ready) {
			for (var w = 0; w < ctx.canvas.width; w += bg4Image.width) {
				for (var h = 0; h < ctx.canvas.height * 10; h += bg4Image.height) {
					ctx.drawImage(bg4Image, w, h + pagelift);
				}
			}
		}
		if (menuvar == -2) {
			if (blogvar != blogfeedlimit) {
				ctx.fillStyle = "#B8B8B8 ";
				ctx.save();
				ctx.font = "bold 30px Lato";
				ctx.fillText(blogtitles[Math.abs(blogvar)].replace("undefined", ""), xstart, postheight + (pagelift + ctx.canvas.height / 4));
				var splitter = strSplitOnLength(blogcont[Math.abs(blogvar)], ctx.canvas.width / 15);
				for (var i = 0; i < splitter.length; i++) {
					if (i > 0) {
						splitter[i] = splitter[i].replace("undefined", "");
					}
					ctx.font = "bold " + size6 + "px Lato";
					ctx.fillText(splitter[i], xstart, postheight + (pagelift + ctx.canvas.height / 4) + (size6 * i) + 30);
				}
				youtubeurl = bloglinks[Math.abs(blogvar)][1].replace("undefined", "")
					.match(re);
				if (createyoutube == 1) {
					createyoutube = 0;
					iframe.style.position = "fixed";
					iframe.style.left = xstart + "px";
					iframe.style.top = postheight + (pagelift + ctx.canvas.height / 4) + (size6 * splitter.length) + 30 + (size6) + "px";
					iframe.style.width = ctx.canvas.width / 2 + "px";
					iframe.style.height = ctx.canvas.height / 4 + "px";
					iframe.style.zIndex = 999;
					iframe.setAttribute("src", "https://www.youtube.com/embed/" + youtubeurl + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
					document.body.appendChild(iframe);
					iframe.setAttribute("id", "youtube");
				}
				iframe.style.left = xstart + "px";
				iframe.style.top = postheight + (pagelift + ctx.canvas.height / 4) + (size6 * splitter.length) + 30 + (size6) + "px";
				ctx.restore();
			}
		}
		if (menuvar == -1) {
			if (musicvar != musicfeedlimit) {
				ctx.fillStyle = "#B8B8B8 ";
				ctx.save
				ctx.font = "bold 30px Lato";
				ctx.fillText(musictitles[Math.abs(musicvar)].replace("undefined", ""), xstart, postheight + (pagelift + ctx.canvas.height / 4));
				var splitter = strSplitOnLength(musiccont[Math.abs(musicvar)], ctx.canvas.width / 15);
				for (var i = 0; i < splitter.length; i++) {
					if (i > 0) {
						splitter[i] = splitter[i].replace("undefined", "");
					}
					ctx.font = "bold " + size6 + "px Lato";
					ctx.fillText(splitter[i], xstart, postheight + (pagelift + ctx.canvas.height / 4) + (size6 * i) + 30);
				}
				youtubeurl = musiclinks[Math.abs(musicvar)][1].replace("undefined", "")
					.match(re);
				if (createyoutube == 1) {
					createyoutube = 0;
					iframe.style.position = "fixed";
					iframe.style.left = xstart + "px";
					iframe.style.top = postheight + (pagelift + ctx.canvas.height / 4) + (size6 * splitter.length) + 30 + (size6) + "px";
					iframe.style.width = ctx.canvas.width / 2 + "px";
					iframe.style.height = ctx.canvas.height / 4 + "px";
					iframe.style.zIndex = 999;
					iframe.setAttribute("src", "https://www.youtube.com/embed/" + youtubeurl + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
					document.body.appendChild(iframe);
					iframe.setAttribute("id", "youtube");
				}
				iframe.style.left = xstart + "px";
				iframe.style.top = postheight + (pagelift + ctx.canvas.height / 4) + (size6 * splitter.length) + 30 + (size6) + "px";
				ctx.restore();
			}
		}
		if (menuvar == -3) {
			if (outdoorsvar != outdoorsfeedlimit) {
				ctx.fillStyle = "#B8B8B8 ";
				ctx.save();
				ctx.font = "bold 30px Lato";
				ctx.fillText(outdoorstitles[Math.abs(outdoorsvar)].replace("undefined", ""), xstart, postheight + (pagelift + ctx.canvas.height / 4));
				var splitter = strSplitOnLength(outdoorscont[Math.abs(outdoorsvar)], ctx.canvas.width / 15);
				for (var i = 0; i < splitter.length; i++) {
					if (i > 0) {
						splitter[i] = splitter[i].replace("undefined", "");
					}
					ctx.font = "bold " + size6 + "px Lato";
					ctx.fillText(splitter[i], xstart, postheight + (pagelift + ctx.canvas.height / 4) + (size6 * i) + 30);
				}
				youtubeurl = outdoorslinks[Math.abs(outdoorsvar)][1].replace("undefined", "")
					.match(re);
				if (createyoutube == 1) {
					createyoutube = 0;
					iframe.style.position = "fixed";
					iframe.style.left = xstart + "px";
					iframe.style.top = postheight + (pagelift + ctx.canvas.height / 4) + (size6 * splitter.length) + 30 + (size6) + "px";
					iframe.style.width = ctx.canvas.width / 2 + "px";
					iframe.style.height = ctx.canvas.height / 4 + "px";
					iframe.style.zIndex = 999;
					iframe.setAttribute("src", "https://www.youtube.com/embed/" + youtubeurl + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
					document.body.appendChild(iframe);
					iframe.setAttribute("id", "youtube");
				}
				iframe.style.left = xstart + "px";
				iframe.style.top = postheight + (pagelift + ctx.canvas.height / 4) + (size6 * splitter.length) + 30 + (size6) + "px";
				ctx.restore();
				ctx.restore();
			}
		}
	} else {
		/*Draw the background*/
		if (bg4Ready) {
			for (var w = 0; w < ctx.canvas.width; w += bg4Image.width) {
				for (var h = 0; h < ctx.canvas.height; h += bg4Image.height) {
					ctx.drawImage(bg4Image, w, h);
				}
			}
		}
		blogtext = blogx + 80;
		musictext = musicx + 80;
		hometext = homex + 80;
		outdoorstext = outdoorsx + 80;
		/*blog*/
		for (var i = 0; i <= blogfeedlimit; i++) {
			if (i == blogfeedlimit) {
				blogopa[i] = 1.0 / (blogx / 100) / (blogspacing[i] / 100);
				ctx.fillStyle = "#B8B8B8 ";
				ctx.font = "bold 30px Lato";
				ctx.save();
				ctx.globalAlpha = blogopa[i];
				ctx.drawImage(blogImage, blogx, blogspacing[i]);
				ctx.fillText("No More Technology Posts", blogtext, blogspacing[i] + 40);
				ctx.restore();
			} else {
				blogopa[i] = 1.0 / (blogx / 100) / (blogspacing[i] / 100);
				ctx.fillStyle = "#B8B8B8 ";
				ctx.font = "bold 30px Lato";
				ctx.save();
				ctx.globalAlpha = blogopa[i];
				ctx.drawImage(blogImage, blogx, blogspacing[i]);
				ctx.fillText(blogtitles[i], blogtext, blogspacing[i] + 40);
				ctx.restore();
			}
		}
		/*music*/
		for (var i = 0; i <= musicfeedlimit; i++) {
			if (i == musicfeedlimit) {
				musicopa[i] = 1.0 / (musicx / 100) / (musicspacing[i] / 100);
				ctx.fillStyle = "#B8B8B8 ";
				ctx.font = "bold 30px Lato";
				ctx.save();
				ctx.globalAlpha = musicopa[i];
				ctx.drawImage(musicImage, musicx, musicspacing[i]);
				ctx.fillText("No More Music Posts", musictext, musicspacing[i] + 40);
				ctx.restore();
			} else {
				musicopa[i] = 1.0 / (musicx / 100) / (musicspacing[i] / 100);
				ctx.fillStyle = "#B8B8B8 ";
				ctx.font = "bold 30px Lato";
				ctx.save();
				ctx.globalAlpha = musicopa[i];
				ctx.drawImage(musicImage, musicx, musicspacing[i]);
				ctx.fillText(musictitles[i], musictext, musicspacing[i] + 40);
				ctx.restore();
			}
		}
		/*outdoors*/
		for (var i = 0; i <= outdoorsfeedlimit; i++) {
			if (i == outdoorsfeedlimit) {
				outdoorsopa[i] = 1.0 / (outdoorsx / 100) / (outdoorsspacing[i] / 100);
				ctx.fillStyle = "#B8B8B8 ";
				ctx.font = "bold 30px Lato";
				ctx.save();
				ctx.globalAlpha = outdoorsopa[i];
				ctx.drawImage(outdoorsImage, outdoorsx, outdoorsspacing[i]);
				ctx.fillText("No More Outdoors Posts", outdoorstext, outdoorsspacing[i] + 40);
				ctx.restore();
			} else {
				outdoorsopa[i] = 1.0 / (outdoorsx / 100) / (outdoorsspacing[i] / 100);
				ctx.fillStyle = "#B8B8B8 ";
				ctx.font = "bold 30px Lato";
				ctx.save();
				ctx.globalAlpha = outdoorsopa[i];
				ctx.drawImage(outdoorsImage, outdoorsx, outdoorsspacing[i]);
				ctx.fillText(outdoorstitles[i], outdoorstext, outdoorsspacing[i] + 40);
				ctx.restore();
			}
		}
		/*home*/
		ctx.save();
		ctx.globalAlpha = 1.0 / (homex / 100) / (homey / 100);
		ctx.drawImage(homeImage, homex, homey);
		ctx.fillText("Home", hometext, homey + 40);
		ctx.restore();
		ctx.save();
		ctx.globalAlpha = 1.0 / (homex / 100) / (homey2 / 100);
		ctx.drawImage(notesImage, homex, homey2);
		ctx.fillText("About", hometext, homey2 + 40);
		ctx.restore();
		ctx.save();
		ctx.globalAlpha = 1.0 / (homex / 100) / (homey3 / 100);
		ctx.drawImage(resumeImage, homex, homey3);
		ctx.fillText("Resume", hometext, homey3 + 40);
		ctx.restore();
		ctx.save();
		ctx.globalAlpha = 1.0 / (homex / 100) / (homey4 / 100);
		ctx.drawImage(settingsImage, homex, homey4);
		ctx.fillText("Settings", hometext, homey4 + 40);
		ctx.restore();
		/*HOME TEXT*/
		if ((menuvar == 0 || menuvar == -1) && (homevar == -1 || homevar == 0)) {
			text = homelift;
			ctx.fillStyle = "#B8B8B8 ";
			ctx.font = "bold " + size1 + "px Lato";
			ctx.fillText("HOME", xstart, text);
			text += size1;
			ctx.font = "bold " + size2 + "px Lato";
			ctx.fillText("Kadyszewski.com BETA", xstart, text);
			text += size2
			ctx.font = "bold " + size2 + "px Lato";
			ctx.fillText("Use keyboard or swipe touch-screen controls to navigate", xstart, text);
			text += size2;
			ctx.fillText("Press Enter on post to view full text content", xstart, text);
			text += size2;
			ctx.font = "bold " + size4 + "px Lato";
			ctx.fillText("For the wordpress version that is less processor heavy go to", xstart, text);
			text += size4;
			ctx.fillText("blog.kadyszewski.com", xstart, text);
			text += size4;
		}
		/*ABOUT TEXT*/
		if ((menuvar == 0 || menuvar == -1 || menuvar == 1) && (homevar == -1 || homevar == 0 || homevar == -2)) {
			/*backround for text better just overlayed
			if (bg3Ready) {
			for (var w = 0; w < ctx.canvas.width-(ctx.canvas.width/2); w += bg3Image.width){
			for (var h = 0; h < ctx.canvas.height/2; h  += bg3Image.height){
			ctx.drawImage(bg3Image, w+ctx.canvas.width/4, h+aboutlift);
			}
			}
			}*/
			text = aboutlift;
			ctx.fillStyle = "#B8B8B8 ";
			ctx.font = "bold " + size1 + "px Lato";
			ctx.fillText("ABOUT", xstart, text);
			text += size1;
			ctx.font = "bold " + size2 + "px Lato";
			ctx.fillText("Kadyszewski.com BETA", xstart, text);
			text += size2
			ctx.font = "bold " + size2 + "px Lato";
			ctx.fillText("Simple.Interface.Design", xstart, text);
			text += size2;
			ctx.font = "bold " + size4 + "px Lato";
			ctx.fillText("This is the personal homepage and website of John Kadyszewski.", xstart, text);
			text += size4;
			ctx.fillText("It was developed in an HTML5 canvas element and links out to", xstart, text);
			text += size4;
			ctx.fillText("my projects as well as my blog posts and the latest", xstart, text);
			text += size4;
			ctx.fillText("google news.", xstart, text);
		}
		/*RESUME TEXT*/
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
			ctx.font = "bold " + size1 + "px Lato";
			ctx.fillText("RESUME", xstart, text);
			text += size1;
			ctx.font = "bold " + size3 + "px Lato";
			ctx.fillText("John Kadyszewski", xstart, text);
			text += size3;
			ctx.fillText("john@kadyszewski.com", xstart, text);
			text += size3;
			ctx.font = "bold " + size3 + "px Lato";
			ctx.fillText("Education", xstart, text);
			text += size2
			ctx.font = "bold " + size4 + "px Lato";
			ctx.fillText("University of Mary Washington <> Fredericksburg, VA <> 2010-2014", xstart, text);
			text += size4;
			ctx.fillText("Major: Computer Science", xstart, text);
			text += size4;
			ctx.font = "bold " + size3 + "px Lato";
			ctx.fillText("Experience", xstart, text);
			text += size3;
			ctx.font = "bold " + size4 + "px Lato";
			ctx.fillText("UMW EAS Department Aide(2011-Present) <> Fredericksburg, VA", xstart, text);
			text += size4;
			ctx.font = "bold " + size5 + "px Lato";
			ctx.fillText("I'm currently contracted part-time at the university of Mary Washington for Enterprise", xstart, text);
			text += size5
			ctx.fillText("Application Services Department where I perform several duties. My job tasks include", xstart, text);
			text += size5
			ctx.fillText("development, maintenance and analysis of databases and reports, web development and graphic design. ", xstart, text);
			text += size5
			ctx.fillText("and graphic design.", xstart, text);
			text += size5
			ctx.font = "bold " + size4 + "px Lato";
			ctx.fillText("Chinese Food Delivery (2011-2013) <> McLean, VA", xstart, text);
			text += size4;
			ctx.font = "bold " + size5 + "px Lato";
			ctx.fillText("I Worked as a delivery driver for wok and roll Chinese restaurant in McLean, VA ", xstart, text);
			text += size5;
			ctx.fillText("Delivered Chinese food in rush hour Northern VA traffic has helped me develop", xstart, text);
			text += size5;
			ctx.fillText("good patience and driving skills", xstart, text);
			text += size3;
			ctx.font = "bold " + size3 + "px Lato";
			ctx.fillText("Technology Supported", xstart, text);
			text += size4
			ctx.font = "bold " + size5 + "px Lato";
			ctx.fillText(">Java", xstart, text);
			text += size5;
			ctx.fillText(">SQL", xstart, text);
			text += size5;
			ctx.fillText(">Web Development(HTML, CSS, JavaScript, J Query, PHP)", xstart, text);
			text += size5;
			ctx.fillText(">C++ ", xstart, text);
			text += size5;
			ctx.fillText(">Python ", xstart, text);
			text += size5;
			ctx.fillText(">3D Graphics with OpenGL ", xstart, text);
			text += size5;
			ctx.fillText(">Microsoft office ", xstart, text);
			text += size5;
			ctx.fillText(">Image editing with GIMP or Photoshop ", xstart, text);
		}
		/*SETTINGS TEXT*/
		if ((menuvar == 0 || menuvar == -1) && (homevar == -4 || homevar == -3 || homevar == -5)) {
			text = settingslift;
			ctx.fillStyle = "#B8B8B8 ";
			ctx.font = "bold " + size1 + "px Lato";
			ctx.fillText("SETTINGS", xstart, text);
			text += size1;
			ctx.font = "bold " + size2 + "px Lato";
			ctx.fillText("Change Display and Style Settings", xstart, text);
			text += size2
			ctx.font = "bold " + size2 + "px Lato";
			ctx.fillText("Allows the user to change things such as background and icons.", xstart, text);
			text += size2;
		}
		/*DISPLAY TECH FEED DISCRIPTION*/
		if (menuvar == -2) {
			if (blogvar > -(blogfeedlimit)) {
				ctx.save();
				ctx.fillStyle = "#B8B8B8 ";
				ctx.globalAlpha = blogopa[blogvar];
				ctx.font = "bold +" + size6 + "px Lato";
				if (blogvar < 1) {
					var blogger = strSplitOnLength(blogdesc[Math.abs(blogvar)], ctx.canvas.width / 15);
					for (var i = 0; i < blogger.length; i++) {
						if (i > 0) {
							blogger[i] = blogger[i].replace("undefined", "");
						}
						ctx.fillText(blogger[i], xstart, ctx.canvas.height / 4 + (size6 * i));
					}
				}
				ctx.fillText("PRESS ENTER FOR MORE", xstart, ctx.canvas.height / 4 + (size6 * blogger.length) + size6);
				ctx.restore();
			}
		}
		/*DISPLAY MUSIC FEED DISCRIPTION*/
		if (menuvar == -1) {
			if (musicvar > -(musicfeedlimit)) {
				ctx.save();
				ctx.fillStyle = "#B8B8B8 ";
				ctx.globalAlpha = musicopa[musicvar];
				ctx.font = "bold +" + size6 + "px Lato";
				if (musicvar < 1) {
					var musicer = strSplitOnLength(musicdesc[Math.abs(musicvar)], ctx.canvas.width / 15);
					for (var i = 0; i < musicer.length; i++) {
						if (i > 0) {
							musicer[i] = musicer[i].replace("undefined", "");
						}
						ctx.fillText(musicer[i], xstart, ctx.canvas.height / 4 + (size6 * i));
					}
				}
				ctx.fillText("PRESS ENTER FOR MORE", xstart, ctx.canvas.height / 4 + (size6 * musicer.length) + size6);
				ctx.restore();
			}
		}
		/*DISPLAY OUTDOORS FEED DISCRIPTION*/
		if (menuvar == -3) {
			if (outdoorsvar > -(outdoorsfeedlimit)) {
				ctx.save();
				ctx.fillStyle = "#B8B8B8 ";
				ctx.globalAlpha = outdoorsopa[outdoorsvar];
				ctx.font = "bold +" + size6 + "px Lato";
				if (outdoorsvar < 1) {
					var outdoorser = strSplitOnLength(outdoorsdesc[Math.abs(outdoorsvar)], ctx.canvas.width / 15);
					for (var i = 0; i < outdoorser.length; i++) {
						if (i > 0) {
							outdoorser[i] = outdoorser[i].replace("undefined", "");
						}
						ctx.fillText(outdoorser[i], xstart, ctx.canvas.height / 4 + (size6 * i));
					}
				}
				ctx.fillText("PRESS ENTER FOR MORE", xstart, ctx.canvas.height / 4 + (size6 * outdoorser.length) + size6);
				ctx.restore();
			}
		}
		/*logo*/
		/*
		ctx.save();
		ctx.drawImage(logoImage, xstart, logolift);
		ctx.restore();
		 */
		/*redarrow*/
		ctx.save();
		ctx.drawImage(arrowImage, arrowx, ctx.canvas.height - 250);
		ctx.restore();
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
	requestAnimationFrame(main);
	then = now;
};
var then = Date.now();
var animater; //store the animation so it doesn't reallocate the variable

var start = function () {
	element = document.getElementById("loading-image");
	element.outerHTML = "";
	delete element;
	requestAnimationFrame(main);
};

window.onload = function () {
	rssfeedsetup();
	/*Set up new spacing elements*/
	blogspacing[0] = 100;
	for (var i = 1; i <= blogfeedlimit; i++) {
		blogspacing[i] = blogspacing[i - 1] + spacingy;
	}
	musicspacing[0] = 100;
	for (var i = 1; i <= musicfeedlimit; i++) {
		musicspacing[i] = musicspacing[i - 1] + spacingy;
	}
	outdoorsspacing[0] = 100;
	for (var i = 1; i <= outdoorsfeedlimit; i++) {
		outdoorsspacing[i] = outdoorsspacing[i - 1] + spacingy;
	}
	setTimeout(start, 0); //timeout to make sure all the images load on time
}

                            