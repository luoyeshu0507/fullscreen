# fullscreen.js
a js which let you to fullscreen DOM Element on browser.

here is [demo](http://luoyeshu.com/demo/fullscreen/)

##  How to use?
```javascript
var full=new fullscreen({
	btnClass:"active", //the className which shold be toggled on the button after you click to fullscreen some DOM or not;
	element:document.getElementById("full"),//the dom element you want to view on fullscreen
	fullscreenBtn:document.getElementById("btn")//the dom element you will click to do this
});
```

## API
| api                 |    description                   |
| :------------------ | --------------------------------:|
| launchFullscreen()  |           fullscreen the DOM     |
| exitFullscreen()    |           exit full screen       |
| fullscreenedElement |           the dom element which is displaying on full screen |

## browser supported
Almost any browser is supported even ie6 7 8.
