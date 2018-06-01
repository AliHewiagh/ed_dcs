(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,242,532);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,431,616);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,533,621);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,336,472);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,652);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,305);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,305);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,342);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,362);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,276,395);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,342,475);


(lib.intro3_1 = function() {
	this.initialize(img.intro3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,832,756);// helper functions:

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


(lib.pan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.intro3_1();
	this.instance.parent = this;
	this.instance.setTransform(-416,-378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416,-378,832,756);


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


(lib.cursor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABMAtQgFgQixiLQBtBCBmBFQAGArgLArIgYhCg");
	this.shape.setTransform(48.8,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhPlwQAggGAbgEQBTgMAkALQAwAOCCFGIErC9QACAVAAAXQgCAogJAlQgNAvgaAqQguBKhSAqQgBAAAAAAQgGADgFADQgKAEgJAEQgtASgyAFIjrlSQhZgJgugGQgtgHgagUQgWgRgXgQQgbgUgagTQgBgBgCgBQgxgkhkgJQgYgKgNgYQgEgIgDgJQgEgIgBgIQAAgEAAgEQAAgeATgWQAGgHAIgFQAVgJAXAAQAbgBAaACQAbACAbAGQAbAFATATQAIAIALAFQAKAEAKADQAEAAAEABQAMAAAUgCQAFgBAFAAAhPlwIBRAhIAMAFAkLloQgBgCg3goQg2gog+gtQg9gtgiAkQgjAkgEAOQgDAOgBAJQgDAjAoApQBDBGBuA3QBbAtBLBgAkLloQAYgFAWgEQAcgGAXgDQAsgHAPAAQAFABAFADQALAHALAGAiwkpIhbg/");
	this.shape_1.setTransform(3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A92F33").s().p("ACACDIiGgQQgugGgZgUIgtgiIg2gnIgCgCQgygjhkgJQgXgJgNgZIgIgRQgDgIgBgIIAlAEQAxAFAYAEQAwAKBgBIQBjBACcAQQCrCvC5CyIgBABIgLAFIgTAJQgsARgyAGgAhjh9IgJAAQhLhghagtQhug3hEhGQgogpAEgkQAtA5BTAwQAkAVBJAmQBAAkAmAhQAaAXBABLIAFAGIgEADIgLABQgQACgLAAIgEAAgAhXlWIhag/IAugJIAmAZQA0AjAdAOIhLgCgAAJmcQAggHAbgDIBTAnQgLADgdAAIgTABg");
	this.shape_2.setTransform(-5.9,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC3D42").s().p("AGPHuQi5iyiqivQicgQhjhBQhhhHgvgKQgZgEgxgFIglgEIAAgJQAAgeATgVQAGgIAIgEQAVgJAXgBQAbgBAaADQAbABAbAHQAbAEATAUQAIAIALAEQAKAFAKADIAIAAQAMABAUgDIAKgBIAEgDIgEgGQhAhLgagXQgnghhAgkQhJgmgjgVQhUgwgtg5IAEgWQAEgOAjgkQAiglA9AtIB0BWIA4ApIBbA/IBLACQgegOgzgjIgngZIAzgJQAsgGAPgBIAKAEIAWAOIBRAhIAUgBQAdAAAKgDIhRgnQBTgMAkAKQAwAOCCFGIErC9QACAWAAAXQgCAngJAlQgNAvgaAqQguBKhSAqIgBABgAAOk4IgMgEg");
	this.shape_3.setTransform(3,-1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhNmqIBSAfIAMAEAEjhtQAAABABACIEsC9QACAWgBAXQgBAngKAlQgMAvgbAqQguBKhSAqIAAABIgBAAQgFADgGACQgJAFgKAEQgsARgyAGIjolNAhNmqQAggHAbgEQBSgOAlAJQAwANCJE/AkImdQgCgBgngOQgmgPg6AZQg5AZhCAHQhCAHgCAiQAAALAAAKQACASAHAMQABACABACQALAQASAOQAUAPA2ADQA2ADBMgTQBkAxA8BJQAEAAAFABQAIAAAXgDQAFgBAGgBAA3ByQhZgHgugFQgugFgagUQgXgQgXgQQgbgTgbgTQgBAAgCgBQgygihkgHQgYgJgOgYQgEgJgEgIQgDgIgCgIQAAgEAAgEQgBgeASgWQAGgIAJgFQAUgJAXgBQAbgCAaACQAbABAcAFQAaAEAUATQAIAIALAEQAKAFAKACAkImdQAXgGAWgFQAcgGAXgEQArgIAPAAQAGABAFACQALAHALAGAiilhIhmg8");
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


(lib.tEn4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(163.3,149.2,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.myTxt2 = new cjs.Text("Of course, that’s why \nwe’re here.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 279;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(29.3,64.9);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AUrAAMgpVAAA");
	this.shape.setTransform(28,137.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A3DGcIAAsyMApWAAAIAAFqIEnCwIkfgZASTBrIAAEx");
	this.shape_1.setTransform(43.2,96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2+GZIAAsxMApVAAAIAAFpIEoCxIkfgZIgJAAIAAEwg");
	this.shape_2.setTransform(42.8,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("The door can only be unlocked if I answer\nthis question. Can you help?", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 478;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-41.1,-44.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EAmIgJnIs4AGMgopAAEIi2ScIgGycIzyAA");
	this.shape_3.setTransform(-41.3,87.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAmIAGJIAAsWMhMPAAAIAAMg");
	this.shape_4.setTransform(-41.3,-13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AyVi9IzyAAIAAshMBMPAAAIAAMXIs4AGMgopAAEIi2Scg");
	this.shape_5.setTransform(-41.3,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.3,-54,492,205.3);


(lib.tEn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_5
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(479,462.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Those two robots again!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 313;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(320.3,428.4);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AWKAAMgsTAAA");
	this.shape.setTransform(324.5,468.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A2JGIIAAnuISEAAIENkTIhRETIXTAAIAAHu");
	this.shape_1.setTransform(324.5,429.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2JGBIAAnuISEAAIENkTIhRETIXTAAIAAHug");
	this.shape_2.setTransform(324.5,430.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_8
	this.myTxt1 = new cjs.Text("Two robots changed the password\n to unlock the door of my home.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 440;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(170.2,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,1,1).p("AcrGGIAAsLMg5VAAAIAAML");
	this.shape_3.setTransform(173.7,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,1,1).p("AcrmVMghWAAAIjzMrIA3srI1DAA");
	this.shape_4.setTransform(173.7,92.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhBmVIC7AAIjzMrg");
	this.shape_5.setTransform(131.6,92.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("AkrGGIi8AAI1DAAIAAsLMA5VAAAIAAMLg");
	this.shape_6.setTransform(173.7,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.9,-27.4,444.1,162.2);


(lib.tEn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(123,24.3,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Help!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 87;
	this.myTxt.parent = this;
	this.myTxt.setTransform(60.9,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AmgiyIGbAAIFxFEIi2lEIDrAA");
	this.shape.setTransform(61.4,44.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AGhEFIAAoEItBAAIAAIE");
	this.shape_1.setTransform(61.4,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgFBfImaAAIAAoCIM/AAIAAICIjqAAIC2FFg");
	this.shape_2.setTransform(61.4,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(15.5,-26,132.4,90.4), null);


(lib.tBm4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(163.3,149.2,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.myTxt2 = new cjs.Text("Sudah tentu. Itulah \ntujuan kami ke sini.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 302;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(16.8,64.9);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AWKAAMgsTAAA");
	this.shape.setTransform(18.5,137.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4iGcIAAsyMAsUAAAIAAFqIEnCwIkfgZATyBrIAAEx");
	this.shape_1.setTransform(33.7,96.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4dGZIAAsxMAsTAAAIAAFpIEoCxIkfgZIgJAAIAAEwg");
	this.shape_2.setTransform(33.3,96.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Pintu hanya boleh dibuka jika saya\n menjawab soalan ini. Boleh awak bantu?", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 472;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-41.4,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAmIAGJIAAsWMhMPAAAIAAMg");
	this.shape_3.setTransform(-41.3,-13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EAmIgJnIshAGIgXAAMghBAADIgLABQgMAAgMgBAZnphIgXAAAnxpeIgjAAInFABIi2ScIgGycIzyAA");
	this.shape_4.setTransform(-41.3,87.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AyVi9IzyAAIAAshMBMPAAAIAAMXIshAGIgXAAMghBAADIgjAAInFABIi2ScgAZQjBIAXAAIAAAAgAZnjBg");
	this.shape_5.setTransform(-41.3,46.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.3,-54,492,205.3);


(lib.tBm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(479,462.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.myTxt2 = new cjs.Text("Kerja dua robot itu lagi!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 277;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(324.8,428.4);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AWKAAMgsTAAA");
	this.shape.setTransform(324.5,468.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A2JGIIAAnuISEAAIENkTIhRETIXTAAIAAHu");
	this.shape_1.setTransform(324.5,429.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2JGBIAAnuISEAAIENkTIhRETIXTAAIAAHug");
	this.shape_2.setTransform(324.5,430.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Dua buah robot telah menukar \nkata laluan pintu rumah saya.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 341;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(154.9,-17.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,1,1).p("AZ2GGIAAsLMgzrAAAIAAML");
	this.shape_3.setTransform(155.6,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,1,1).p("AZ2mVI7rAAIjzMrIA3srI1EAA");
	this.shape_4.setTransform(155.6,92.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhBmVIC7AAIjzMrg");
	this.shape_5.setTransform(131.6,92.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("Ah1GGIi8AAI1EAAIAAsLMAzrAAAIAAMLg");
	this.shape_6.setTransform(155.6,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.4,-27.4,344.7,162.2);


(lib.tBm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(123,24.3,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Tolong!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 111;
	this.myTxt.parent = this;
	this.myTxt.setTransform(48.4,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AIjEFIAAoEIxFAAIAAIE");
	this.shape.setTransform(48.3,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AoiiyIKfAAIFyFEIi2lEIDqAA");
	this.shape_1.setTransform(48.3,44.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AB9BfIqfAAIAAoCIRFAAIAAICIjqAAIC2FFg");
	this.shape_2.setTransform(48.3,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-9.2,-26,157.1,90.4), null);


(lib.dialogue4 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm4();
	this.instance.parent = this;
	this.instance.setTransform(-80.1,-20.5);

	this.instance_1 = new lib.tEn4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.2,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-367.4,-74,492,204.8);


(lib.dialogue2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm3();
	this.instance.parent = this;
	this.instance.setTransform(49,-20.5);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.6,-47.4,344.7,161.7);


(lib.dialogue1 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm1();
	this.instance.parent = this;
	this.instance.setTransform(49,-20.5);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.8,-46,157.1,89.9);


// stage content:
(lib.intro3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:1,a2:74,a3:104});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;
	}
	this.frame_1 = function() {
		_this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a2");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_4 = function() {
		playSound("intro");
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_74 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a3");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_99 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_172 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(65).call(this.frame_69).wait(5).call(this.frame_74).wait(25).call(this.frame_99).wait(5).call(this.frame_104).wait(68).call(this.frame_172).wait(1));

	// t
	this.instance = new lib.dialogue1();
	this.instance.parent = this;
	this.instance.setTransform(139.9,95.6);

	this.instance_1 = new lib.dialogue2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.3,114.1,1,1,0,0,0,5.7,0);

	this.instance_2 = new lib.dialogue4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(382.4,119.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance_1}]},15).to({state:[{t:this.instance_2}]},30).wait(69));

	// Layer_2
	this.instance_3 = new lib.pan("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(400.1,260.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:325.1},59).to({_off:true},15).wait(99));

	// tapir
	this.instance_4 = new lib.Bitmap8();
	this.instance_4.parent = this;
	this.instance_4.setTransform(476.9,111);

	this.instance_5 = new lib.Bitmap11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(440.8,104.3);

	this.instance_6 = new lib.Bitmap12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(338.5,98.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},74).to({state:[{t:this.instance_5}]},30).to({state:[{t:this.instance_6}]},59).wait(10));

	// alien
	this.instance_7 = new lib.Bitmap4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(32.3,222);

	this.instance_8 = new lib.Bitmap5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(32.3,222.5);

	this.instance_9 = new lib.Bitmap9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-33.8,256.7);

	this.instance_10 = new lib.Bitmap13();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-33.8,259.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},74).to({state:[{t:this.instance_8}]},16).to({state:[{t:this.instance_9}]},14).to({state:[{t:this.instance_10}]},59).wait(10));

	// md
	this.instance_11 = new lib.Bitmap6();
	this.instance_11.parent = this;
	this.instance_11.setTransform(359.4,254);

	this.instance_12 = new lib.Bitmap7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(336.7,235.5);

	this.instance_13 = new lib.Bitmap10();
	this.instance_13.parent = this;
	this.instance_13.setTransform(256.4,327.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},74).to({state:[{t:this.instance_12}]},16).to({state:[{t:this.instance_13}]},14).wait(69));

	// BG
	this.instance_14 = new lib.Bitmap3();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-19.9,-19.9);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(74).to({_off:false},0).wait(30).to({scaleX:1.55,scaleY:1.55,x:-111.8,y:-170},0).wait(69));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(384.1,182.1,832,756);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/intro3/Bitmap10.png?1527765916757", id:"Bitmap10"},
		{src:"images/intro3/Bitmap11.png?1527765916757", id:"Bitmap11"},
		{src:"images/intro3/Bitmap12.png?1527765916757", id:"Bitmap12"},
		{src:"images/intro3/Bitmap13.png?1527765916757", id:"Bitmap13"},
		{src:"images/intro3/Bitmap3.png?1527765916757", id:"Bitmap3"},
		{src:"images/intro3/Bitmap4.png?1527765916757", id:"Bitmap4"},
		{src:"images/intro3/Bitmap5.png?1527765916757", id:"Bitmap5"},
		{src:"images/intro3/Bitmap6.png?1527765916757", id:"Bitmap6"},
		{src:"images/intro3/Bitmap7.png?1527765916757", id:"Bitmap7"},
		{src:"images/intro3/Bitmap8.png?1527765916757", id:"Bitmap8"},
		{src:"images/intro3/Bitmap9.png?1527765916757", id:"Bitmap9"},
		{src:"images/intro3/intro3_1.jpg?1527765916757", id:"intro3_1"},
		{src:"sounds/intro.mp3?1527765916757", id:"intro"}
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