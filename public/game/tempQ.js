(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,813,616);


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai9FeIASi2IC1AAIgSC2gAh7BKIAFiHIB2hAIA6AAIAMhtIiGAAIgKBXIiGAAIAOiKIB3hBICzAAIBpBBIgWDUIh2A/IhFAAIgRBUg");
	this.shape.setTransform(5.9,-1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-70.6,60.8,141.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.16,scaleY:1.16},29,cjs.Ease.cubicOut).to({scaleX:1,scaleY:1},30,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.4,-70.6,60.8,141.3);


// stage content:
(lib.tempQ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_144 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(144).call(this.frame_144).wait(1));

	// Layer_1
	this.instance = new lib.Symbol1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(145));

	// Layer_3
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(145));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(394,292,813,616);
// library properties:
lib.properties = {
	id: '14AD4E5BD360424D9833FD8D9B96713F',
	width: 800,
	height: 600,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/tempQ/Bitmap1.png?1522210894607", id:"Bitmap1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['14AD4E5BD360424D9833FD8D9B96713F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;