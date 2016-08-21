# fullscreen.js
A js plugin which let you fullscreen a DOM Element on your browsers.

Here is a [demo](http://luoyeshu.com/demo/fullscreen/)

##  How to use?
```javascript
var full=new fullscreen({
	btnClass:"active", //the className which shold be toggled on the button after you click to fullscreen some DOM or not;
	element:document.getElementById("full"),//the dom element you want to view on fullscreen
	fullscreenBtn:document.getElementById("btn")//the dom element you will click to do this
});

// now you can fullscreen a DOM element like this.
full.launchFullscreen();
```

## API list
| api                 |    description                   |
| :------------------ | --------------------------------:|
| launchFullscreen()  |           fullscreen the DOM     |
| exitFullscreen()    |           exit full screen       |
| fullscreenedElement |           the dom element which is displaying on full screen |

## browser supported
Almost any browser is supported even ie7 8 9.
