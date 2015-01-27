// Create the canvas
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
var iframe = document.createElement('iframe');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight - 4;
ctx.canvas.zIndex = '0';
document.body.appendChild(canvas);
/*FEED VARS*/
google.load('feeds', '1');
var feeds = [
  'http://blog.kadyszewski.com/category/technology/feed/?fsk=fulltext',
  'http://blog.kadyszewski.com/category/music/feed/?fsk=fulltext',
  'http://blog.kadyszewski.com/category/outdoors/feed/?fsk=fulltext'
];
var feed = [
];
var getlinks = /<a href="(.*?)"/g;
/*SIZER VARS*/
var spacingx = Math.round(ctx.canvas.width * 0.7);
var spacingy = Math.round(ctx.canvas.height / 3);
var size1 = Math.round(ctx.canvas.height / 25);
var size2 = Math.round(ctx.canvas.height / 30);
var size3 = Math.round(ctx.canvas.height / 35);
var size4 = Math.round(ctx.canvas.height / 40);
var size5 = Math.round(ctx.canvas.height / 45);
var size6 = Math.round(ctx.canvas.height / 50);
/*IMAGE VARS*/
var defaultReady = false;
var defaultImage = new Image();
defaultImage.onload = function () {
  defaultReady = true;
};
defaultImage.src = 'images/notes.png';
var techReady = false;
var techImage = new Image();
techImage.onload = function () {
  techReady = true;
};
techImage.src = 'images/case.png';
var musicReady = false;
var musicImage = new Image();
musicImage.onload = function () {
  musicReady = true;
};
musicImage.src = 'images/music.png';
var outdoorsReady = false;
var outdoorsImage = new Image();
outdoorsImage.onload = function () {
  outdoorsReady = true;
};
outdoorsImage.src = 'images/outdoors.png';
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  bgReady = true;
};
bgImage.src = 'images/background5.png';
var aupdReady = false;
var aupdImage = new Image();
aupdImage.onload = function () {
  aupdReady = true;
};
aupdImage.src = 'images/Arrow-Updown.png';
var abacReady = false;
var abacImage = new Image();
abacImage.onload = function () {
  abacReady = true;
};
abacImage.src = 'images/Arrow-Back.png';
var aforReady = false;
var aforImage = new Image();
aforImage.onload = function () {
  aforReady = true;
};
aforImage.src = 'images/Arrow-forward.png';
/*LOCATION VARS*/
var x = 0;
var y = 0;
var oldx = 0;
var oldy = 0;
/*STORAGE VARS*/
var titles = [
];
var descriptions = [
];
var contents = [
];
var links = [
];
var global;
var feeder = [
];
var i = 0;
var updateable = true;
var openable = true;
var image;
/*LISTENERS*/
/* Handle keyboard controls*/
var keysDown = {
};
//keyboard  down listener
addEventListener('keydown', function (e) {
  keysDown[e.keyCode] = true;
}, false);
//keyboard up listener
addEventListener('keyup', function (e) {
  delete keysDown[e.keyCode];
}, false);
function displayfeed(result)
{
  if (!result.error)
  {
    /*create item for each pulled*/
    var title = [
    ];
    var description = [
    ];
    var content = [
    ];
    var link = [
    ];
    var channels = result.xmlDocument.getElementsByTagName('channel');
    for (var j = 0; j < channels.length; j++)
    {
      /*get from xml*/
      var channel = channels[j];
      feeder.push(channel.getElementsByTagName('title') [0].firstChild.nodeValue);
    }
    var items = result.xmlDocument.getElementsByTagName('item');
    for (var j = 0; j < items.length; j++)
    {
      /*get from xml*/
      var item = items[j];
      title.push(item.getElementsByTagName('title') [0].firstChild.nodeValue);
      link.push(item.getElementsByTagName('link') [0].firstChild.nodeValue);
      var div = document.createElement('div');
      /*remove html tags*/
      div.innerHTML = item.getElementsByTagName('description') [0].firstChild.nodeValue
      description.push(div.textContent || div.innerText || '');
      /*while (match = getlinks.exec(item.getElementsByTagName('content:encoded')[0].firstChild.nodeValue)) {
					link.push(match);
				}
				div = document.createElement("div");
				div.innerHTML = item.getElementsByTagName('content:encoded')[0].firstChild.nodeValue;
				content.push(div.textContent || div.innerText || "");		*/
    }
    titles.push(title);
    descriptions.push(description);
    contents.push(content);
    links.push(link);
  } 
  else
  {
    alert('Error fetching feeds!');
  }
  ran = true
}
var render = function ()
{
  if (bgReady)
  {
    for (var w = 0; w < ctx.canvas.width; w += bgImage.width)
    {
      for (var h = 0; h < ctx.canvas.height; h += bgImage.height)
      {
        ctx.save();
        ctx.drawImage(bgImage, w, h);
        ctx.restore();
      }
    }
  }
  for (var k = 0; k < numProps(titles); k++)
  {
    for (var t = 0; t < numProps(titles[k]); t++)
    {
      ctx.save();
      ctx.globalAlpha = 1 / ((spacingx * (k + 1) - oldx) / 100) / ((spacingy * (t + 0.01) - oldy) / 100)
      if (feeder[k].indexOf('Technology') > - 1)
      {
        image = techImage;
      } 
      else if (feeder[k].indexOf('Music') > - 1)
      {
        image = musicImage;
      } 
      else if (feeder[k].indexOf('Outdoors') > - 1)
      {
        image = outdoorsImage;
      } 
      else
      {
        image = defaultImage;
      }
      ctx.drawImage(image, (spacingx * (k + 0.05) - oldx), (spacingy * (t + 0.15) - oldy));
      ctx.fillStyle = '#B8B8B8 ';
      ctx.font = 'bold ' + size1 + 'px Lato';
      ctx.fillText(titles[k][t], (spacingx * (k + 0.05) - oldx + image.width * 1.2), (spacingy * (t + 0.15) - oldy + image.height * 0.7));
      if (x == k && y == t)
      {
        ctx.save();
        ctx.globalAlpha = 1;
        ctx.font = 'bold ' + size4 + 'px Lato';
        var writer = strSplitOnLength(descriptions[k][t], Math.round(ctx.canvas.width / 15));
        for (var h = 0; h < writer.length; h++)
        {
          if (h > 0)
          {
            writer[h] = writer[h].replace('undefined', '');
          }
          ctx.fillText(writer[h], Math.round(ctx.canvas.width / 5), Math.round(ctx.canvas.height / 4 + (size4 * h)));
        }
        ctx.fillText(feeder[x], Math.round(ctx.canvas.width * 0.35) - feeder[x].length, Math.round(ctx.canvas.height * 0.9));
        ctx.fillText('From: ' + links[x][y], Math.round(ctx.canvas.width / 5), Math.round(ctx.canvas.height / 4 + (size4 * h) + size4));
        ctx.fillText('(Enter to open in new tab, must allow pop-ups)', Math.round(ctx.canvas.width / 5), Math.round(ctx.canvas.height / 4 + (size4 * h) + size4 * 2));
        ctx.restore();
      }
      ctx.restore();
    }
  }
  ctx.save();
  ctx.globalAlpha = 0.35;
  ctx.drawImage(abacImage, ctx.canvas.width - 150, ctx.canvas.height - 60);
  ctx.drawImage(aupdImage, ctx.canvas.width - 110, ctx.canvas.height - 60);
  ctx.drawImage(aforImage, ctx.canvas.width - 70, ctx.canvas.height - 60);
  ctx.restore();
}
function strSplitOnLength(data, your_desired_width)
{
  if (data.length <= 0)
  {
    return []; // return an empty array
  }
  var splitData = data.split(/([\s\n\r]+)/);
  var arr = [
  ];
  var cnt = 0;
  for (var i = 0; i < splitData.length; ++i)
  {
    if (!arr[cnt])
    {
      arr[cnt] = ''; //Instantiate array entry to empty string if null or undefined
    }
    if (your_desired_width < (splitData[i].length + arr[cnt].length))
    {
      cnt++;
    }
    arr[cnt] += splitData[i];
  }
  return arr;
}
var update = function (modifier) /*NEED TO CHANGE Y TO AN ARRAY ALLOWING EACH COLUMN TO ACT INDEPENDETLY.*/
{
  if (updateable)
  {
    /*key control*/
    if (37 in keysDown)
    {
      /* Player holding left*/
      x = x - 1;
      updateable = false;
      openable = true;
    }
    if (39 in keysDown)
    {
      /* Player holding right*/
      x = x + 1;
      updateable = false;
      openable = true;
    }
    if (38 in keysDown)
    {
      /* Player holding up*/
      y = y - 1;
      updateable = false;
      openable = true;
    }
    if (40 in keysDown)
    {
      /*Player holding down*/
      y = y + 1;
      updateable = false;
      openable = true;
    }
    if (13 in keysDown && openable)
    {
      /* Player holding enter*/
      delete keysDown[13];
      window.open(links[x][y]);
      openable = false;
    }
  }
  if (updateable == false) /*If you change this to calculate based on the remainder you should get much more consistent results idiot*/
  {
    if (oldx < (x * spacingx) - modifier)
    {
      oldx = oldx + modifier;
    } 
    else if (oldx > (x * spacingx) + modifier)
    {
      oldx = oldx - modifier;
    } 
    else if (oldy < (y * spacingy) - modifier)
    {
      oldy = oldy + modifier;
    } 
    else if (oldy > (y * spacingy) + modifier)
    {
      oldy = oldy - modifier;
    } 
    else
    {
      updateable = true;
    }
  }
}
function numProps(obj)
{
  var c = 0;
  for (var key in obj)
  {
    if (obj.hasOwnProperty(key)) ++c;
  }
  return c;
}
function rssfeedsetup()
{
  for (i = 0; i < feeds.length; i++)
  {
    feed[i] = new google.feeds.Feed(feeds[i]);
    feed[i].setNumEntries(10);
    feed[i].setResultFormat(google.feeds.Feed.XML_FORMAT);
    feed[i].load(displayfeed);
  }
}
var then = Date.now();
var main = function () {
  if (defaultReady && techReady && musicReady && outdoorsReady && aupdReady && aforReady && abacReady && bgReady)
  {
    var now = Date.now();
    var delta = Math.round(now - then); //time passed for frame adjustment.
    update(delta);
    render();
    global = requestAnimationFrame(main);
    then = now;
  }
};
function init()
{
  var element = document.getElementById('loading-image');
  element.outerHTML = '';
  delete element;
  var title = [
  ];
  var description = [
  ];
  var link = [
  ];
  title.push('Welcome');
  description.push('Use keyboard or swipe touch-screen controls to navigate. Press Enter on post to view full text content(must allow pop ups for this functionality). For the wordpress version that is less processor heavy go to blog.kadyszewski.com');
  link.push('http://blog.kadyszewski.com');
  feeder.push('Defenestration of Thought » Home');
  links.push(link);
  titles.push(title);
  descriptions.push(description);
  rssfeedsetup();
  global = requestAnimationFrame(main);
}
window.onload = function ()
{
  google.setOnLoadCallback(init());
}
