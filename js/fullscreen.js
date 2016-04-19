/*
* vision : v.1.0.0
* author : luoyeshu
* github : https://github.com/luoyeshu0507/fullscreen
* time : 2016-4-19
*/

~(function(win,undefined){
    function fullscreen(conf){
        this.selfconf={
            "btnClass" : "active", //className use for the fullscreen button clicked
            "element" : document, //a dom element which will show on fullscreen
            "fullscreenBtn":null //a dom element which to switch fullscreen status
        }
        for(var key in this.selfconf){
            this.selfconf[key] = conf[key] || this.selfconf[key];
        }
        this.fullscreenBtnEvent();
        this.statusChangeEvent();
    }
    fullscreen.prototype={
        "isSupported" : document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
        "fullscreenedElement" : function(){
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        },
        "exitFullscreen" : function(){
            if(document.exitFullscreen) {
                document.exitFullscreen();
            } else if(document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if(document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else{
                this.selfconf.element.style.cssText="";
            }
        },
        "launchFullscreen" : function(){
            var element=this.selfconf.element;
            if(element.requestFullscreen) {
                element.requestFullscreen();
            } else if(element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if(element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } else if(element.msRequestFullscreen) {
                element.msRequestFullscreen();
            } else{
                element.style.cssText="position:fixed;z-index:9999;width:100%;height:100%;top:0;left:0;";
            }
        },
        "fullscreenBtnEvent" : function(){
            var self=this;
            var btn=self.selfconf.fullscreenBtn;
            var element=self.selfconf.element;
            var className=self.selfconf.btnClass;
            if(btn){
                btn.onclick=function(){
                    if(hasClass(btn,className)){
                        removeClass(btn,className);
                        self.exitFullscreen();
                    } else{
                        addClass(btn,className);
                        self.launchFullscreen(element);
                    }
                }
            }
        },
        "statusChangeEvent" : function(){
            var self=this;
            var btn=this.selfconf.fullscreenBtn;
            var element=this.selfconf.element;
            var className=this.selfconf.btnClass;
            if(self.isSupported){
                document.addEventListener("fullscreenchange", fullScreenChange);
                document.addEventListener("mozfullscreenchange", fullScreenChange);
                document.addEventListener("webkitfullscreenchange", fullScreenChange);
                document.addEventListener("msfullscreenchange", fullScreenChange);
            } else {
                document.onkeypress=function(event){
                    var key = event.which || event.keyCode;
                    if(key==27){
                        fullScreenChange();
                        element.style.cssText="";
                    }
                }
            }
            function fullScreenChange(){
                if(!self.fullscreenedElement()){
                    removeClass(btn,className);
                }
            }
        }
    }
    function hasClass(obj, cls) {
        return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }
    function addClass(obj, cls) {
        if (!hasClass(obj, cls)) obj.className += " " + cls;
    }
    function removeClass(obj, cls) {
        if (hasClass(obj, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            obj.className = obj.className.replace(reg, ' ');
        }
    }
    win.fullscreen=fullscreen;
})(window);

    
    
    