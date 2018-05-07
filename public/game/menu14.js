(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,346);


(lib.Bitmap24 = function() {
	this.initialize(img.Bitmap24);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,353);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,600);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,961,280);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,45);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,45);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,31);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,32);


(lib.greenplanet2 = function() {
	this.initialize(img.greenplanet2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,353,355);


(lib.pinkplanet = function() {
	this.initialize(img.pinkplanet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,376,351);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.starcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#94F4FC","#154E87"],[0,1],-0.2,0.8,0,-0.2,0.8,18.3).s().p("AgSAzIhoCiIBZisIjQBiIC7iCIjAgJIDAgIIi7iCIDdBpIAUj2IATDmIBoijIhZCsIDQhiIi7CCIDAAIIjAAJIC7CCIjehpIgUD2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.starcopy, new cjs.Rectangle(-24.6,-28,49.3,56), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DAFCFF","#406C98"],[0,1],-0.2,0.8,0,-0.2,0.8,18.3).s().p("AgSAzIg2BPIAnhZIhaAkIBFhEIjAgJIDAgIIg3hOIBZA1IAUj2IATDmIAthIIgeBRIBggcIhLA8IDAAIIjAAJIBHBKIhqgxIgUD2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-24.6,-28,49.3,56), null);


(lib.s_green = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AghAQIADgjIA/AEIgCAjg");
	this.shape.setTransform(0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#336633").s().p("AgpAAIAAAAIAMgGIBAAFIAHAIg");
	this.shape_1.setTransform(-0.1,2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF66").s().p("AgeABIgKgGIBRAFIgIAGg");
	this.shape_2.setTransform(0.2,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009933").s().p("AAhAUIADgkIAHgGIgCAygAgmgbIAKAHIgCAjIgMAGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,-2.8,8.6,5.7);


(lib.planet17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.pinkplanet();
	this.instance.parent = this;
	this.instance.setTransform(-98,-92,0.521,0.521);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98,-92,195.9,182.9);


(lib.planet16c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap24();
	this.instance.parent = this;
	this.instance.setTransform(-127,-136,0.755,0.755);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127,-136,266.6,266.6);


(lib.planet16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.greenplanet2();
	this.instance.parent = this;
	this.instance.setTransform(-139,-140,0.786,0.786);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139,-140,277.5,279);


(lib.planet14c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-140,-141,0.803,0.803);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-141,278,278);


(lib.mcTxt2En = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		var speed = 30;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("PLANET SHERJOOCK", "italic bold 28px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 42;
	this.myTxt.lineWidth = 360;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-76.8,-20);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTxt2En, new cjs.Rectangle(-78.8,-22,364.2,44.1), null);


(lib.mcTxt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		var speed = 30;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("PLANET SHERJOOK", "italic bold 28px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 42;
	this.myTxt.lineWidth = 362;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-76.8,-20);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTxt2, new cjs.Rectangle(-78.8,-22,365.8,44.1), null);


(lib.mcTxt1En = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		var speed = 30;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("NEXT", "italic bold 18px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 28;
	this.myTxt.lineWidth = 154;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-76.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTxt1En, new cjs.Rectangle(-78.8,-14.8,157.6,29.8), null);


(lib.mcTxt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		var speed = 30;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("SETERUSNYA", "italic bold 18px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 28;
	this.myTxt.lineWidth = 154;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-76.8,-12.8);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTxt1, new cjs.Rectangle(-78.8,-14.8,157.6,29.8), null);


(lib.line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAAPIAAgd");
	this.shape.setTransform(0,-9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAgwIAABh");
	this.shape_1.setTransform(0,-18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAhIIAACR");
	this.shape_2.setTransform(0,-25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAhXIAACv");
	this.shape_3.setTransform(0,-29.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAABdIAAi5");
	this.shape_4.setTransform(0,-30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAhZIAACz");
	this.shape_5.setTransform(0,-31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAhPIAACf");
	this.shape_6.setTransform(0,-32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAhAIAACB");
	this.shape_7.setTransform(0,-33.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(5,1,1).p("AAAgqIAABV");
	this.shape_8.setTransform(0,-35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:-9.6}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape,p:{y:-38.6}}]},1).to({state:[]},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-13.5,5,8);


(lib.hlCorner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(1,1,1).p("AB9pwIH0AAApwJxIAAn0");
	this.shape.setTransform(62.5,62.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(4,1,1).p("Al2F3IAArtILtAA");
	this.shape_1.setTransform(37.5,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,128,128);


(lib.flickrClick = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AW5ZZIAAg7IEwAAIAAk4IBCAAIAAFzgA8qZZIAAlzIBBAAIAAE4IExAAIAAA7gAbpznIAAk3IkwAAIAAg6IFyAAIAAFxgA8qznIAAlxIFyAAIAAA6IkxAAIAAE3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0FB6B6").s().p("AW5ZZIAAg7IEwAAIAAk4IBCAAIAAFzgA8qZZIAAlzIBBAAIAAE4IExAAIAAA7gAbpznIAAk3IkwAAIAAg6IFyAAIAAFxgA8qznIAAlxIFyAAIAAA6IkxAAIAAE3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-162.4,367.1,325);


(lib.c4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC63D").s().p("AhQgUIgBgRQABguApgDIBpgIIAQCxIiWAMg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.2,-9.4,16.4,19);


(lib.c3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC63D").s().p("AhMhRICJgLIAQCrIiJAOg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-9.3,15.4,18.6);


(lib.c2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46A1FF").s().p("AhKhTICFgKIAQCxIiFAKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-9.3,15,18.7);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#46A1FF").s().p("AhKhOICGgMIAPCoIiFANg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-9.1,15,18.2);


(lib.txtNext2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		try {
			if (myLanguage==2){
				_this.gotoAndStop(1);
			}
		} catch (e) {
			//nothing
		}
		function onSetEn(e){
			_this.gotoAndStop(1);
		}
		stage.addEventListener("setEn", onSetEn);
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.mcTxt2();
	this.instance.parent = this;
	this.instance.setTransform(0,8);

	this.instance_1 = new lib.mcTxt2En();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-14,365.8,44.1);


(lib.txtNext1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		try {
			if (myLanguage==2){
				_this.gotoAndStop(1);
			}
		} catch (e) {
			//nothing
		}
		function onSetEn(e){
			_this.gotoAndStop(1);
		}
		stage.addEventListener("setEn", onSetEn);
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.mcTxt1();
	this.instance.parent = this;

	this.instance_1 = new lib.mcTxt1En();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.8,-14.8,157.6,29.8);


(lib.galaxy_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.starcopy();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,1,1,51.8,0,0,0.1,-0.1);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(2, 2, 3)];
	this.instance.cache(-27,-30,53,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.star();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,16);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-27,-30,53,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,255,0.749)").s().p("AhmBnQgrgqAAg9QAAg8ArgqQAqgrA8AAQA9AAAqArQArAqAAA8QAAA9grAqQgqArg9AAQg8AAgqgrgABZBZQAlglAAg0QAAgzglglQglglg0AAQgzAAglAlQglAlAAAzQAAA0AlAlQAlAlAzAAQA0AAAlglg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,153,255,0.498)").s().p("AAACmQhEAAgxgwQgwgxAAhFQAAhEAwgxQAxgwBEAAQBFAAAxAwQAwAxAABEQAABFgwAxQgxAwhFAAIAAAAgAhmhmQgrAqAAA8QAAA9ArAqQAqArA8AAQA9AAAqgrQArgqAAg9QAAg8grgqQgqgrg9AAQg8AAgqArg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,153,255,0.247)").s().p("AiCCDQg3g2AAhNQAAhMA3g2QA2g3BMAAQBNAAA2A3QA3A2AABMQAABNg3A2Qg2A3hNAAQhMAAg2g3gAh1h1QgwAxAABEQAABFAwAxQAxAwBEAAQBFAAAxgwQAwgxAAhFQAAhEgwgxQgxgwhFAAIAAAAQhEAAgxAwg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399FF").s().p("AAAB+QgzAAglglQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,-46.9,90,97);


(lib.frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// s_green
	this.instance = new lib.s_green();
	this.instance.parent = this;
	this.instance.setTransform(-9.5,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(150));

	// s_green
	this.instance_1 = new lib.s_green();
	this.instance_1.parent = this;
	this.instance_1.setTransform(13.7,61.6);

	this.instance_2 = new lib.Bitmap8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},34).to({state:[{t:this.instance_1}]},20).wait(96));

	// s_green
	this.instance_3 = new lib.s_green();
	this.instance_3.parent = this;
	this.instance_3.setTransform(36,64);

	this.instance_4 = new lib.Bitmap7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(21,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_3}]},20).wait(111));

	// c4
	this.instance_5 = new lib.c4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-263.2,68.8);

	this.instance_6 = new lib.Bitmap6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-283,48);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},124).to({state:[{t:this.instance_5}]},20).wait(6));

	// c3
	this.instance_7 = new lib.c3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-247.3,85.3);

	this.instance_8 = new lib.Bitmap6();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-266,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},109).to({state:[{t:this.instance_7}]},20).wait(21));

	// c2
	this.instance_9 = new lib.c2("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-235.3,66.6);

	this.instance_10 = new lib.Bitmap5();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-254,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},94).to({state:[{t:this.instance_9}]},20).wait(36));

	// c1
	this.instance_11 = new lib.c1("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-220.3,82.9);

	this.instance_12 = new lib.Bitmap5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-239,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},79).to({state:[{t:this.instance_11}]},20).wait(51));

	// c0
	this.instance_13 = new lib.Bitmap4();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-598,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-598,-9,961,280);


(lib.focus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hlCorner
	this.instance = new lib.hlCorner("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(407.8,385.8,1,1,180,0,0,61.7,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:127.8,y:105.8},39,cjs.Ease.elasticOut).wait(1));

	// hlCorner
	this.instance_1 = new lib.hlCorner("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-407.8,385.8,1,1,0,180,0,61.7,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-127.8,y:105.8},39,cjs.Ease.elasticOut).wait(1));

	// hlCorner
	this.instance_2 = new lib.hlCorner("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(407.8,-385.7,1,1,0,0,180,61.7,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:127.8,y:-105.7},39,cjs.Ease.elasticOut).wait(1));

	// hlCorner
	this.instance_3 = new lib.hlCorner("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-407.8,-385.7,1,1,0,0,0,61.7,61.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-127.8,y:-105.7},39,cjs.Ease.elasticOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.5,-449.4,943,898.9);


(lib.burst = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.line("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-25,0,1,1,-45);

	this.instance_1 = new lib.line("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-25,0,1,1,-135);

	this.instance_2 = new lib.line("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-25,0,1,1,135);

	this.instance_3 = new lib.line("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-25,0,1,1,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},5).wait(16));

	// Layer 1
	this.instance_4 = new lib.line("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-25,0,1,1,-90);

	this.instance_5 = new lib.line("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-25,0,1,1,180);

	this.instance_6 = new lib.line("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-25,0,1,1,90);

	this.instance_7 = new lib.line("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).to({state:[]},15).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-13.5,27.1,27.1);


(lib.animPlanet17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.planet17("single",0);
	this.instance.parent = this;
	this.instance.setTransform(2.8,1.7,1,1,0,0,0,-0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.1},29).to({y:1.7},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.4,-91,195.9,182.9);


(lib.animPlanet16c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.planet16c("single",0);
	this.instance.parent = this;
	this.instance.setTransform(41,-0.8,1,1,0,0,0,40.8,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10.8},49).to({y:-0.8},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.8,-143.7,266.6,266.6);


(lib.animPlanet16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.planet16("single",0);
	this.instance.parent = this;
	this.instance.setTransform(2.8,1.7,1,1,0,0,0,-0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.1},29).to({y:1.7},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.4,-139.1,277.5,279);


(lib.animPlanet14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.planet14c("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(5.5,13.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3.6},29).to({y:13.6},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-127.4,278,278);


(lib.animBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("bleep_stutter");
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(18).call(this.frame_19).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E8E93").s().p("AhTBKIAAiTICnAAIAACTgAgMAMIAZAAIAAgXIgZAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#98B2B7").s().p("AqVJKIAAyTIUrAAIAASTgAkMDuIIZAAIAAnbIoZAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7CED1").s().p("AxHPKIAA+TMAiPAAAIAAeTgAnMGYIOZAAIAAsvIuZAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CDE1E5").s().p("A1/TeMAAAgm7MAr/AAAMAAAAm7gApWISIStAAIAAwjIytAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DCEEF2").s().p("A5PWXMAAAgstMAyfAAAMAAAAstgAqyJkIVlAAIAAzHI1lAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5F6F9").s().p("A7OYHMAAAgwNMA2dAAAMAAAAwNgArqKVIXVAAIAA0qI3VAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EAFAFD").s().p("A8PZBMAAAgyBMA4fAAAMAAAAyBgAsHKvIYPAAIAA1dI4PAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#ECFCFF").s().p("A8nZWMAAAgyrMA5PAAAMAAAAyrgAsSK4IYkAAIAA1vI4kAAg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECFCFF").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAsTK5IYnAAIAA1yI4nAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECFCFF").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAsWK7IYsAAIAA12I4sAAg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EBFCFF").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAsfLEIY/AAIAA2HI4/AAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAFBFE").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAs6LbIZ0AAIAA22I50AAg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E7FAFD").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAtxMMIbiAAIAA4YI7iAAg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E2F8FC").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAvVNlIerAAIAA7JI+rAAg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9F4F9").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgAx6P3MAj1AAAIAA/uMgj1AAAg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CBEEF4").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgA14TYMArwAAAMAAAgmvMgrwAAAg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B7E6EE").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxgA7pYeMA3SAAAMAAAgw8Mg3SAAAg");

	this.instance = new lib.flickrClick();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-7.4,16.7,14.8);


(lib.gs_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.galaxy_star("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,0.5,0.5,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.3,scaleX:0.38,scaleY:0.38},0).wait(1).to({regY:-0.1,scaleX:0.5,scaleY:0.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.4,regY:-0.3,scaleX:0.26,scaleY:0.26,rotation:22,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,rotation:0,x:-0.2,y:-0.2},0).wait(1).to({regX:-0.3,regY:-0.3,scaleX:0.43,scaleY:0.43,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:-0.2,y:-0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-33.1,66,69);


(lib.cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMAtQgFgQixiLQBtBCBmBFQAGArgLArIgYhCg");
	this.shape.setTransform(48.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhPlwIBRAhIAMAFAhPlwQAggGAbgEQBTgMAkALQAwAOCCFGIErC9QACAVAAAXQgCAogJAlQgNAvgaAqQguBKhSAqQgBAAAAAAQgGADgFADQgKAEgJAEQgtASgyAFIjrlSQhZgJgugGQgtgHgagUQgWgRgXgQQgbgUgagTQgBgBgCgBQgxgkhkgJQgYgKgNgYQgEgIgDgJQgEgIgBgIQAAgEAAgEQAAgeATgWQAGgHAIgFQAVgJAXAAQAbgBAaACQAbACAbAGQAbAFATATQAIAIALAFQAKAEAKADQAEAAAEABQAMAAAUgCQAFgBAFAAAkLloQgBgCg3goQg2gog+gtQg9gtgiAkQgjAkgEAOQgDAOgBAJQgDAjAoApQBDBGBuA3QBbAtBLBgAkLloQAYgFAWgEQAcgGAXgDQAsgHAPAAQAFABAFADQALAHALAGAiwkpIhbg/");
	this.shape_1.setTransform(3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A92F33").s().p("ACACDIiGgQQgugGgZgUIgtgiIg2gnIgCgCQgygjhkgJQgXgJgNgZIgIgRQgDgIgBgIIAlAEQAxAFAYAEQAwAKBgBIQBjBACcAQQCrCvC5CyIgBABIgLAFIgTAJQgsARgyAGgAhjh9IgJAAQhLhghagtQhug3hEhGQgogpAEgkQAtA5BTAwQAkAVBJAmQBAAkAmAhQAaAXBABLIAFAGIgEADIgLABQgQACgLAAIgEAAgAhXlWIhag/IAugJIAmAZQA0AjAdAOIhLgCgAAJmcQAggHAbgDIBTAnQgLADgdAAIgTABg");
	this.shape_2.setTransform(-5.9,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC3D42").s().p("AGPHuQi5iyiqivQicgQhjhBQhhhHgvgKQgZgEgxgFIglgEIAAgJQAAgeATgVQAGgIAIgEQAVgJAXgBQAbgBAaADQAbABAbAHQAbAEATAUQAIAIALAEQAKAFAKADIAIAAQAMABAUgDIAKgBIAEgDIgEgGQhAhLgagXQgnghhAgkQhJgmgjgVQhUgwgtg5IAEgWQAEgOAjgkQAiglA9AtIB0BWIA4ApIBbA/IBLACQgegOgzgjIgngZIAzgJQAsgGAPgBIAKAEIAWAOIBRAhIAMAEIgMgEIAUgBQAdAAAKgDIhRgnQBTgMAkAKQAwAOCCFGIErC9QACAWAAAXQgCAngJAlQgNAvgaAqQguBKhSAqIgBABg");
	this.shape_3.setTransform(3,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhNmqQAggHAbgEQBSgOAlAJQAwANCJE/AEjhtQAAABABACIEsC9QACAWgBAXQgBAngKAlQgMAvgbAqQguBKhSAqIAAABIgBAAQgFADgGACQgJAFgKAEQgsARgyAGIjolNAhNmqIBSAfIAMAEAkImdQgCgBgngOQgmgPg6AZQg5AZhCAHQhCAHgCAiQAAALAAAKQACASAHAMQABACABACQALAQASAOQAUAPA2ADQA2ADBMgTQBkAxA8BJQAEAAAFABQAIAAAXgDQAFgBAGgBAA3ByQhZgHgugFQgugFgagUQgXgQgXgQQgbgTgbgTQgBAAgCgBQgygihkgHQgYgJgOgYQgEgJgEgIQgDgIgCgIQAAgEAAgEQgBgeASgWQAGgIAJgFQAUgJAXgBQAbgCAaACQAbABAcAFQAaAEAUATQAIAIALAEQAKAFAKACAkImdQAXgGAWgFQAcgGAXgEQArgIAPAAQAGABAFACQALAHALAGAiilhIhmg8");
	this.shape_4.setTransform(1.5,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A92F33").s().p("ACTBuIgDAAQhagHgugFQgtgGgagTIguggIg2gmIgDgBQgygihkgHQgYgJgOgZIgIgRQgDgHgCgIIAlADQAyADAYAFQAwAIBiBFQBlA+CcAMIAxAvIAEAEIAEAAQCRCTCbCWIgBAAIgLAGIgTAIQgsASgyAGgAhjiMQg8hJhkgxQhMATg2gDQg2gDgUgPQgSgPgLgPIgCgEQgHgMgCgSQALAMAQAKQAUALAYADQAiAFA5gMQAbgFAOgDQAXgCATADQAZADAjAXQBOAzBEBRIgHAFQgXAEgIAAIgJgBgAivmhIAtgLQAYAJApAWQApAXASALQgwAFgTABgAALmuQAggHAbgFIBTAmQgKADgdABQgLgBgJACg");
	this.shape_5.setTransform(-7.4,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DC3D42").s().p("AGfGsQibiWiRiTIgEAAIgEgEIgxgvQicgMhlg/QhihEgwgJQgYgEgygDIglgDIAAgJQgBgeASgWQAGgIAJgEQAUgKAXgBQAbgCAaACQAbABAcAGQAaAEAUATQAIAIALAEQAKAEAKADIAJAAQAIAAAXgDIAHgGQhEhQhOgzQgjgXgZgDQgTgEgXADQgOACgbAGQg5AMgigGQgYgCgUgLQgQgKgLgMIAAgWQACgiBCgGQBCgIA5gZQA6gZAmAPIApAPIBmA8QATAAAwgFQgSgLgpgXQgpgXgYgIIAzgKQArgIAPgBQAGABAFADIAWANIBSAfQAJgCALAAQAdAAAKgDIhSgmQBSgOAlAKQAwANCJE/QACAEADgEIABAEIEsC9QACAVgBAXQgBAogKAlQgMAvgbAqQguBKhSAqIAAAAgAEPB/IAUAAIAAAAgAiUh4IALgBIgLABgAARl0IgMgEg");
	this.shape_6.setTransform(1.5,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape}]},14).wait(45));

	// Layer_2
	this.instance = new lib.burst("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-29.4,-25.3,1,1,-8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({_off:true},15).wait(30));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(3,1,1).p("AJ7AAQAAEGi7C6Qi5C7kHAAQkGAAi6i7Qi6i6AAkGQAAkGC6i6QC6i6EGAAQEHAAC5C6QC7C6AAEGg");
	this.shape_7.setTransform(6.5,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AnAHAQi5i6AAkGQAAkGC5i6QC6i6EGABQEGgBC6C6QC7C6AAEGQAAEGi7C6Qi6C6kGABQkGgBi6i6g");
	this.shape_8.setTransform(6.5,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-62.4,129.9,129.9);


(lib.btnPlanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.animBtn();
	this.instance.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7E6EE").s().p("A8qZZMAAAgyxMA5VAAAMAAAAyxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.starzRandom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//randomise position 
		this.x = Math.random()*800;
		this.y = Math.random()*600;
		this.rotation = Math.random()*350;
		this.scale = 1 - Math.random()*.4;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(53));

	// Layer_1
	this.instance = new lib.gs_motion();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.5,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},25).wait(1).to({alpha:0},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-26,54,56);


// stage content:
(lib.menu14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		playSound("menuRock2");
	}
	this.frame_94 = function() {
		playSound("bleep_stutter");
	}
	this.frame_149 = function() {
		function doPlay(e){
			setLevel(14);
			nextScreen();
		}
		this.btnCont.addEventListener("click", doPlay);
	}
	this.frame_190 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(90).call(this.frame_94).wait(55).call(this.frame_149).wait(41).call(this.frame_190).wait(1));

	// click
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(546.4,443,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(190).to({_off:false},0).wait(1));

	// cockpit
	this.instance = new lib.frame();
	this.instance.parent = this;
	this.instance.setTransform(518.1,499.6,1,1,0,0,0,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(191));

	// btn
	this.btnCont = new lib.btnPlanet();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(400.5,318.8);
	this.btnCont._off = true;
	new cjs.ButtonHelper(this.btnCont, 0, 1, 2, false, new lib.btnPlanet(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(149).to({_off:false},0).wait(42));

	// text
	this.instance_1 = new lib.txtNext2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(299,100.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).wait(42));

	// text
	this.instance_2 = new lib.txtNext1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(299,67.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).wait(56));

	// num
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AidFVIhohAIA6ooIB2hBIDyAAIBpBBIg6IoIh3BAgAijD/IEQAAIA2n8IkQAAg");
	this.shape.setTransform(175,151.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AicFVIhphAIA7ooIB1hBIDzAAIBoBBIg7IoIh2BAgAijD/IEQAAIA2n8IkRAAg");
	this.shape_1.setTransform(111.2,151.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AjXFQIAJhWICjAAIAxneIirBfIAKhhIDAhpIBNAAIg+JJICjAAIgJBWg");
	this.shape_2.setTransform(178.9,151.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AicFVIhphAIA7ooIB1hBIDzAAIBoBBIg6IoIh3BAgAijD/IEQAAIA2n8IkQAAg");
	this.shape_3.setTransform(120.3,151.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("Aj2FQIAfktIB3hAIDfAAIAXjcIjvAAIgKBXIhfAAIALhsIB1hBIDRAAIBpBBIgcEIIh2A/IjfAAIgUDBIFOAAIgIBWg");
	this.shape_4.setTransform(176.3,151.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AidFVIhohAIA6ooIB2hBIDyAAIBpBBIg7IoIh2BAgAijD/IEQAAIA2n8IkRAAg");
	this.shape_5.setTransform(114.5,151.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AiWFVIhohAIALhtIBgAAIgJBXIEDAAIAYjfIjEAAIAIhWIDEAAIAVjHIkDAAIgIBWIhhAAIAMhsIB2hBIDlAAIBoBBIgXDYIhYAwIgBACIBOAvIgZDvIh2BAg");
	this.shape_6.setTransform(175.7,151.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AidFVIhohAIA7ooIB1hBIDzAAIBoBBIg7IoIh2BAgAijD/IEQAAIA2n8IkRAAg");
	this.shape_7.setTransform(112.5,151.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AA4FQIAPibIlKAAIAIhTIF+mxIBZAAIguGwIBWAAIgJBUIhVAAIgRCbgAiXBfIAAACIDnAAIAfknIgCAAg");
	this.shape_8.setTransform(175.1,151.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AiRFSIhphAIALhsIBhAAIgJBWID8AAIAbj1IlLAAIAllYIGhAAIgJBWIlBAAIgSCsIDaAAIBpBBIgeEgIh3BAg");
	this.shape_9.setTransform(175.8,151.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AiOFVIhohAIA6ooIB1hBIDWAAIBpBBIgMBsIhgAAIAJhWIj0AAIgZDsIBJgnIChAAIBoA/IgdEOIh2BAgAiVD/ID0AAIAYjiIj0AAg");
	this.shape_10.setTransform(176.5,151.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AjHFQIFHpHIABgCIkSAAIgJBXIhhAAIATitIHkAAIgGA6IlYJlg");
	this.shape_11.setTransform(180.4,151.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AidFVIhohAIA6ooIB2hBIDyAAIBpBBIg7IoIh2BAgAijD/IEQAAIA2n8IkQAAg");
	this.shape_12.setTransform(116,151.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AiiFVIhZhAIAYjvIBZgvIABgCIhPgwIAXjYIB2hBIDfAAIBoBBIgXDYIhYAwIgBACIBPAvIgZDvIh2BAgAiZD/ID9AAIAYjfIj+AAgAh5g2ID9AAIAWjHIj+AAg");
	this.shape_13.setTransform(176,151.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AiOFVIhohAIALhtIBfAAIgJBXID0AAIAZjtIhJAoIigAAIhog/IAdkOIB1hBIDWAAIBpBBIg7IoIh2BAgAh3gbID0AAIAYjiIj0AAg");
	this.shape_14.setTransform(176.5,151.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AjWFQIAIhWICjAAIAxneIisBfIALhhIDAhpIBNAAIg9JJICjAAIgJBWg");
	this.shape_15.setTransform(115.1,151.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AjWFQIAIhWICkAAIAwneIisBfIALhhIDAhpIBNAAIg+JJICjAAIgJBWg");
	this.shape_16.setTransform(124.2,151.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AjXFQIAJhWICjAAIAxneIirBfIAKhhIDAhpIBNAAIg9JJICiAAIgIBWg");
	this.shape_17.setTransform(118.4,151.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AjWFQIAIhWICkAAIAwneIisBfIALhhIDAhpIBNAAIg9JJICjAAIgJBWg");
	this.shape_18.setTransform(119,151.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{x:111.2}},{t:this.shape}]},119).to({state:[{t:this.shape_3,p:{x:120.3}},{t:this.shape_2}]},1).to({state:[{t:this.shape_5,p:{x:114.5}},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_1,p:{x:115.1}},{t:this.shape_8}]},1).to({state:[{t:this.shape_3,p:{x:113.1}},{t:this.shape_9}]},1).to({state:[{t:this.shape_5,p:{x:114.1}},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_3,p:{x:113.1}},{t:this.shape_13}]},1).to({state:[{t:this.shape_5,p:{x:114.1}},{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{x:115.1}},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape_2}]},1).to({state:[{t:this.shape_17},{t:this.shape_4}]},1).to({state:[{t:this.shape_15,p:{x:116.4}},{t:this.shape_6}]},1).to({state:[{t:this.shape_18},{t:this.shape_8}]},2).wait(57));

	// focus
	this.instance_3 = new lib.focus("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(400,318.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({_off:false},0).wait(99));

	// planet16
	this.instance_4 = new lib.animPlanet16c();
	this.instance_4.parent = this;
	this.instance_4.setTransform(1162.9,333.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({x:400.4},89,cjs.Ease.cubicInOut).wait(83));

	// planet15
	this.instance_5 = new lib.animPlanet14();
	this.instance_5.parent = this;
	this.instance_5.setTransform(394.5,311.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({x:-405.5},89,cjs.Ease.quadInOut).to({_off:true},1).wait(82));

	// planet16
	this.instance_6 = new lib.animPlanet16();
	this.instance_6.parent = this;
	this.instance_6.setTransform(234.5,282.9,0.5,0.5,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({x:94.5},89,cjs.Ease.quadInOut).wait(83));

	// planet17
	this.instance_7 = new lib.animPlanet17copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(1154.5,342.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).to({x:780.5},89,cjs.Ease.quadInOut).wait(83));

	// stars3
	this.instance_8 = new lib.starzRandom();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(61).to({_off:false},0).wait(130));

	// stars1
	this.instance_9 = new lib.starzRandom();
	this.instance_9.parent = this;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},0).wait(115));

	// stars1
	this.instance_10 = new lib.starzRandom();
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).wait(137));

	// stars2
	this.instance_11 = new lib.starzRandom();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(27).to({_off:false},0).wait(164));

	// stars1
	this.instance_12 = new lib.starzRandom();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(38).to({_off:false},0).wait(153));

	// stars1
	this.instance_13 = new lib.starzRandom();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(191));

	// bg
	this.instance_14 = new lib.Bitmap3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(191));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(319.3,274,961,795.8);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/menu14/Bitmap23.png?1522339361568", id:"Bitmap23"},
		{src:"images/menu14/Bitmap24.png?1522339361568", id:"Bitmap24"},
		{src:"images/menu14/Bitmap3.png?1522339361568", id:"Bitmap3"},
		{src:"images/menu14/Bitmap4.png?1522339361568", id:"Bitmap4"},
		{src:"images/menu14/Bitmap5.png?1522339361568", id:"Bitmap5"},
		{src:"images/menu14/Bitmap6.png?1522339361568", id:"Bitmap6"},
		{src:"images/menu14/Bitmap7.png?1522339361568", id:"Bitmap7"},
		{src:"images/menu14/Bitmap8.png?1522339361568", id:"Bitmap8"},
		{src:"images/menu14/greenplanet2.png?1522339361568", id:"greenplanet2"},
		{src:"images/menu14/pinkplanet.png?1522339361568", id:"pinkplanet"},
		{src:"sounds/bleep_stutter.mp3?1522339361568", id:"bleep_stutter"},
		{src:"sounds/menuRock2.mp3?1522339361568", id:"menuRock2"},
		{src:"sounds/stdClick.mp3?1522339361568", id:"stdClick"}
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
an.compositions['11CABBE8EF0CC945B3CD9040447EEBC2'] = {
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