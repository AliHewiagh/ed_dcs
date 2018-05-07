(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,325,304);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,522);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,413,430);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,542,542);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,401,386);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,357,342);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1644,1046);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,395);


(lib.Bitmap18 = function() {
	this.initialize(img.Bitmap18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,378,346);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,408);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,328);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,390,408);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,832,640);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,328);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1415,516);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,442);


(lib.Bitmap5_1 = function() {
	this.initialize(img.Bitmap5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,957,438);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,320);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1001,629);


(lib.Bitmap7copy = function() {
	this.initialize(img.Bitmap7copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,742,690);


(lib.Bitmap8copy = function() {
	this.initialize(img.Bitmap8copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);// helper functions:

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


(lib.tEn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.mcCont.visible = false;
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
			  //_this.mcCont.visible = true;
			 // _this.parent.parent.play();
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Do you think we have something that might help?", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 275;
	this.myTxt.parent = this;
	this.myTxt.setTransform(63.9,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,1,1).p("A3liiMAksAAAIFyFFIi2lFIHjAA");
	this.shape.setTransform(65.4,67.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,1,1).p("A3lGGIAAsLMAvLAAAIAAML");
	this.shape_1.setTransform(65.4,12.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("ANHDkMgksAAAIAAsMMAvLAAAIAAMMInjAAIC2FFg");
	this.shape_2.setTransform(65.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn3, new cjs.Rectangle(-87.6,-27.4,306,113.5), null);


(lib.tBm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.mcCont.visible = false;
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
			  //_this.mcCont.visible = true;
			  //_this.parent.parent.play();
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Kita ada sesuatu yang boleh membantu?", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 235;
	this.myTxt.parent = this;
	this.myTxt.setTransform(92.4,-19.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(1,1,1).p("AzXGGIAAsLMAmvAAAIAAML");
	this.shape.setTransform(92.4,12.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(4,1,1).p("AzXiiIcQAAIFyFFIi2lFIHjAA");
	this.shape_1.setTransform(92.4,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AI5DkI8QAAIAAsMMAmvAAAIAAMMInjAAIC2FFg");
	this.shape_2.setTransform(92.4,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm3, new cjs.Rectangle(-33.6,-27.4,252.1,113.5), null);


(lib.tapir_spacehelmet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("Ag+BEQArgiAug0QAwg0AQgZQgJAhgWAdQgYAegZAYQgnApgyAcIgMAGg");
	this.shape.setTransform(41.5,66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.698)").s().p("AkcmaQEOBRB6CJQB6CGAnCuQATBWgDDRQjXo9lij4g");
	this.shape_1.setTransform(21.8,-26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai6gKIFTgEQA+AIg0AJIgYAHQhNAFg8AAQiMAAgwgZg");
	this.shape_2.setTransform(-0.7,79.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIkAAQgXARgZAOAKDhQQgHAGgGAGQgnAmgrAeQAMADAKAFQAfARgBAmQAAAKgBAJIhAA8QgYA+h6AUQAPgkgKAAQgHgBg4AGQgfADgtAEQiBAMjHgQQgOAagKAJQgFAEgEADQgGAEgFABQgCAAgBAAQhUgMg5gOQg5gNgNgWQgYAGhAgvIgBAAAkgApQgBgBAAgBIAIgDQBLgEBGgDQAYAAAYgBQDigICmADQAZAAAXABQBAABA1AEQAQABAPABAIXCOQABgKABgMQACgbgEgMQgFgWgWgVQgDgDgFgEAKcAGQgVAbgaAcQgCACgCACIgSARALVhNQAJgRAJgRQAWg5gfgKQgEgBgEgBQgIALgIALQADADADADQAGAJAFANQADAJAAAMQAAAOgFASQgYAqghApAKDhQQAGACAGAHQADADADAFQAIAMAEATQADATgIATALGieQgeAoglAmAluAZQgTgIgYgMQgygXhGgzAqRi4QA4A9A4AqQAIAGAIAGQgHAFgHAHQgCACgBABQgKALgHAOQgLAVgDAVAluAZQgKADgIAGQgHAFgHAHQgGAHgEAJQgPAbgCAYQgBAXAGAFQgXgRgWgSQgggZgggbQgZgWgXgTAkgApQACALABAKQACATgDARQgGAtgkAkQgBACgCABAkgApQgOAAgagEQgPgDgXgJAqRi4QgFgGgGgGIgKgLQgPgRgNgSQgHgCgNAFQgGADgGAHQgGAHgEAKQgHAMAKAaQAHAQAOAVQAGALANAPAqRi4QgBABAAAAQgLAIgJAKQgGAIgGAJQgLASgEATQAnAuBZBO");
	this.shape_3.setTransform(-23,70.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#707F84").ss(1,1,1,3,true).p("Aq6JmQihjDAbk3QAclAEIjfQBQhEBYgtQCDhDCUgSQBLgKBQAEQFSAODnDsQCyC2AWDeQAiFuifEE");
	this.shape_4.setTransform(-21,-11.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AhdCLQACgbgDgMQgFgXgWgUQAigNAbgSQATgMAPgOQAagYAYgdQAggkAegsIARgaQAfAKgVA4IgTAjQAFgSAAgPQAAgLgCgJQgFgOgGgIQAGAIAFAOQACAJAAALQAAAPgFASQgYApggApQAGgNAAgNIgCgLQgDgUgIgMIgHgIIAHAIQAIAMADAUIACALQAAANgGANQgWAcgYAbIgEAEIgTASIACgUIAAgDQAAgkgfgQQAfAQAAAkIAAADIgCAUIhAA7IACgVgAgfBlIAAAAg");
	this.shape_5.setTransform(40.1,68.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#404040").s().p("Ah0BmQAZgOAXgRQAMADAKAFQgKgFgMgDQArgfAmgmIANgLQAGADAGAGQgGgGgGgDQAlgmAegoIAGAHIgGgHIAQgVIAIABIgSAbQgeArgfAlQgZAcgZAYQgQAPgSAMQgcASgiANIgIgIg");
	this.shape_6.setTransform(38.7,63.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FF9900","#FFFF66","#FF9900","#000000"],[0,0.494,1,1],0,17.4,0,0,17.4,42).s().p("AiTAeIhugIIALgFIAJgHQAKgJAOgZQDIAQCAgMIBMgHQA4gGAHABQAKAAgPAjQggAEghAHQggAHhjAIQg1AEg2AAQgvAAgugDg");
	this.shape_7.setTransform(-9,92.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A9A9A9").s().p("AmKAPIgDgTIgBgDIAIgDICRgGIAwgCQDigICmADIAwABQBAACA1AEIAfACIAIAHQhOAchvgBQi+gCkuAHIgMAAQgyAAgygKg");
	this.shape_8.setTransform(-12.1,75.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("AjfBmQhUgMg5gNQg5gOgNgWIADgCQAkglAGgsQADgRgCgTQA4ALA4gBQEvgHC9ACQBvABBPgdQAVAUAFAXQAEAMgCAaIgCAVQgYA/h6AUQAPglgKAAQgHgBg4AGIhMAHQiBAMjHgQQgOAagKAJIgJAHIgLAGIgDgBg");
	this.shape_9.setTransform(-12.7,84.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("ABjCkIgBAAQgFgEAAgRIAAgHQACgYAPgaQAEgJAGgHQAGgHAIgGQgIAGgGAHQgGAHgEAJQgPAagCAYIAAAHQAAARAFAEQgXgQgWgSIg/g1IgwgpQADgWALgUQAGgNALgLQBPA4BSAfQAxATAyAKQABASgCARQgGAugkAkIgDACIgGABQgaAAg4gqgAi6hXQAEgUALgSQAGgJAGgHQBBBABDAvQgLALgGANQgLAUgDAWQhZhOgngtgAgbgeIAAAAgAjNhyQgOgVgHgQQgKgZAHgMQAEgLAGgGQAeAiAeAeQgGAHgGAJQgLASgEAUQgNgQgGgLgAifiNIAAAAg");
	this.shape_10.setTransform(-74.9,68.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#272727").s().p("ACAB9QAIgGAKgDQAXAJAPADQAZAEAOAAIAEAVQgygKgxgSgACAB9QhSgghPg5IADgDQAHgHAHgFQgHAFgHAHIgDADQhDguhBhAQAJgKAKgIIABgBQA5A9A4ApIAQAMQBFAzAyAYQAYAMATAIQgKADgIAGIAAAAgAilhKQgegegfgiQAGgHAHgDQANgFAHACQAMASAQARIAKALIAKAMIgBABQgKAIgJAKIAAAAg");
	this.shape_11.setTransform(-74.2,61.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(127,168,183,0.298)").s().p("Ag9LXQhZggg6gxQg+g1grhWQgjhFgZhjQhDkBAbkIQAZj9BrjdQCChDCVgSQkTOPK7I4IgvgBQimgDjiAIQgYgHgUgIg");
	this.shape_12.setTransform(-30,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(108,143,156,0.298)").s().p("AB8K+QgPgDgXgJQgTgIgYgMQgxgZhGgyIgQgNQg4gpg4g9IgLgMIgKgLQihjDAbk2QAclCEIjeQBPhEBYgtQhpDdgaD8QgaEJBBEBQAaBiAjBFQArBWA+A2QA6AxBZAgQATAIAYAGIgwACIiRAGIgIADIABADQgOAAgagEg");
	this.shape_13.setTransform(-68.3,4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(177,234,255,0.298)").s().p("AB0LpQg1gEg/gBQq9o4ETuPQBLgKBRAEQFRAODnDsQCyC2AWDfQAiFtifEEIgQAWQgeAoglAmIgNAMQgnAmgrAeQgXASgZAOIgfgCg");
	this.shape_14.setTransform(12.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.6,-76.5,169.4,172.7);


(lib.T_shoulderPad_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOBIQAWgYBfkKIAXAMQhEC7gqBrIjFCDg");
	this.shape.setTransform(19.5,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AjojGQANghANgfQB5hxCEhiQAngdAogbQATAMATAOQABAAABABQCtB5CGCcQAGAHAEAaQgiDcg2CzQhZBPhRA/QiaB3h/A5IgKABImMAEQgXgJAEgMQAahRAahRQBckTBpkOg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#671D1F").s().p("AjPgFIGegIIABAXImLAFQgXgKADgKg");
	this.shape_2.setTransform(-27.5,51.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E2326").s().p("AkSFfQBqgwB9haQBnhMB0hoQA1ivAkjpQAHAIADAZQgiDcg2CyQhYBQhRA+QiaB4h/A5IgKABIgBgZg");
	this.shape_3.setTransform(20.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A92F33").s().p("AkJFNIACAAQBOgoBHgrQBZg1BLg5IBtk/QhphqhuhiIgWgTQAUgxAXgyQCsB6CGCbQgkDog1CwQh1BohmBMQh9BahrAwQgChTAGhWg");
	this.shape_4.setTransform(20.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC3D42").s().p("AgYlvIAWATQBuBiBpBqIhuE/QhMA5hYA1QhGArhPAoIgCAAQAZlWCjmJg");
	this.shape_5.setTransform(14.8,-3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C2363A").s().p("AkUGLQBckTBpkOQCkiZCRhcIAvAoQijGJgZFXQiQAPiKAAIhTgBg");
	this.shape_6.setTransform(-15.3,-4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#982A2E").s().p("AkPFlQCyAGC7gUQgGBWACBTImdAIIA0ijgAgwj7QB4hyCFhhQAogdAngcIAmAaIACABQgXAygTAxIgvgoQiRBdikCZIAahAg");
	this.shape_7.setTransform(-15.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-54,98.6,108);


(lib.T_shoulderPad_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABECBIhxijIg3hPIghgwIAbg0QApBLAwBLQAvBKBmDFQADAGgCAAQgGAAg7hVg");
	this.shape.setTransform(1.4,-16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhhmRIhDhFIgZgIIigDiIAtElIEuFdIE7BZIAlgTQgjhXgohYQiXlPjdle");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3D42").s().p("AABEmIjvkTIgOiqICEi/IABABQDcFdCXFPg");
	this.shape_2.setTransform(2.3,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("AAIF9Ik0ljIgjkGICdjkIBDBEIiEDAIAOCrIDvERID7AyQAoBYAjBXg");
	this.shape_3.setTransform(1.4,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E2326").s().p("AgCGGIkuleIgtkkICgjiIAZAIIidDlIAjEGIE0FiIFIBVIglATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-48.8,72.1,97.7);


(lib.T_nose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABOkWQgcALgfAPQgNAGgMAHQgJAEgoAYQgCABgCACQgqAYg1AxQgTARgRASQhIBPgsBlQgBAEgBADQgKAsBSA2QAEACAEADQBNAuBiAbQBTAUAogEQApgFAOgcQAAgBAAgBQAAgDACgBQA4imB/hxAjrA6QAQAAAUADQAVACAWAEQA8AMBBAdQBHAfAsAm");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353B48").s().p("AgfA+QhHgSg8AOQARgSASgRQAsgKA8AYQAkAPAkAeIhQgUgAAtgzQg3gIgRAHQAngYAJgEQAqAAArAXQArAYAOAbQg1gjhBgKg");
	this.shape_1.setTransform(-2.8,-15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#545E73").s().p("AhWDQQhigbhNgvIgFgIQgQghALgdQALgZAdgPQAUgJAWgDIARgCQAPAAAtAEQAkACAXgCQAqhUAWgYIAVgXQAMgNAPgNQBHg7BUgVQAmA1AZBLQh/Bxg4CmQgBAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAAACQgOAdgpAEIgQABQgnAAhEgQgAhAA1QBHAfAsAlQgsglhHgfQhBgdg8gMQA8AMBBAdg");
	this.shape_2.setTransform(3.3,5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A89A7").s().p("AjMDmQhTg2ALgsIACgIQArhlBJhOQA8gOBGASIBRAUQglgegjgPQg8gYgsAKQA1gxAqgZIAFgCQARgHA3AIQBBAKA1AjQgOgbgrgYQgrgXgqAAIAZgNQAggPAbgMQARAEAQAFQBSAaA2BNQhUAUhGA8QgPAMgNANIgVAWQgXAYgqBVQgVADglgDQgtgEgOABIgRABQgXgFgVgCQgTgCgQAAQAQAAATACQAVACAXAFQgXAEgTAIQgeAPgKAaQgLAcAPAhIAFAJIgHgFgAh8BwIAAAAg");
	this.shape_3.setTransform(-3.2,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-28.9,64,57.9);


(lib.T_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AB0ggQgdAogxAPQgpANgsgFQgigDgigL");
	this.shape.setTransform(0,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#353B48").s().p("AgeAJQgWgGgFgDQgFgFAXABQAYABAXgEIAmgFQANgCAAAHQAAAHgKAFQgJAGgZACIgLAAQgRAAgRgEg");
	this.shape_1.setTransform(1.1,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AA3gRQgaAPgdAEQgcAEgYgBQgYAAgXgEQgDAAgbgFQAJAOAJAMQACACABABQARAVAaAMQAPAIAQABQAMACALgBQAdgBAagJQAagJAVgTQAVgUAKgYQAGgNABgOQACgNgCgNQgwAkgaAOg");
	this.shape_2.setTransform(1.4,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#353B48").s().p("AgaAJQgTgHgEgDQgEgFAUACQAUABAUgEIAhgFQALgBAAAHQgBAGgIAFQgIAGgVACIgJAAQgPAAgPgEg");
	this.shape_3.setTransform(3.4,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#993300").s().p("AAAAMQgagMgRgUQAeAHAfgBIAbgCQgLAEgFALQgFAKAGAMQgQgCgOgHg");
	this.shape_4.setTransform(-5.1,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC6666").s().p("AhPA2QgHgMAGgLQAFgMAKgEQAbgDAbgJQA1gRAqgoQgCAOgFANQgKAZgWATQgUASgaAJQgZAKgeAAIgLABIgMgBg");
	this.shape_5.setTransform(6,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhsAsIgDgDQgJgMgJgPIAeAGQAXADAYABQAYABAcgFQAdgEAagPQAagOAwgkQACAOgCANQgpAng3ASQgaAJgaADIgbACIgJABQgbAAgagGg");
	this.shape_6.setTransform(1.4,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.5,-7.3,25.1,13.7);


(lib.T_Legs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABTAvQgxgqjLilQBrA6BEAxQEBCmiRAwQAOhIgxgqg");
	this.shape.setTransform(100.6,155.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIdKfQgDhCgcglQgcglg/gxQg/gyh2hHQh1hHh5h9QAAhFAFkeQAHkfATlzQhBC7gvBCQgqgrhthXQhZhLiNg1Qg+gWgRgIIB2QsQggB+gHBSQgGBSAABSQAIA5APBEQAoAkBBATQBqAWAzARQAfALAuAZQA9AgBZAZQAZAHA1AHQA2AGB8gSQA1gHAzgTQA9gXA6goQAHgEAGgFQAIgUgDhDAnUItQAlAuBGAZQBkAaAwAPQApANBOAlQBQAnAoANQB0AlCZgaQA5gKAxgQQBCgVA0giQALgHALgIAIdKfQAAAHAAAIQABgBAAAAQAAgHgBgHg");
	this.shape_1.setTransform(67.4,106.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D3D3D").s().p("AgLggIAWgPQADBCgJAUIgLAJQAGgngLgpg");
	this.shape_2.setTransform(120.4,179.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("Ag9gQQBBgVAzgiQALAqgGAlQg6Apg9AXQAFgzgHglg");
	this.shape_3.setTransform(113.7,183.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2A2A").s().p("ACaCiQg1gGgZgIQhZgYg9ghQgvgZgegKQgzgShrgVQhBgTgogkQgOhDgIg6QAlAuBFAZQBlAbAvAPQApAMBOAmQBQAlApAOQBzAlCZgaQA6gKAxgQQAHAmgFAzQgyASg1AIQhdANg1AAQgSAAgOgCg");
	this.shape_4.setTransform(64.2,178.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A92F33").s().p("AFALGQgcgTgMgMQgNgMg2gaIkliOQjuh1g6h4QgHhhgJibIhisuQCNA1BZBLQAPBNANCcQAOCcAaDZQAaDYAVApQAVAoADAGQA7A6A7AxQA6AyAtAcIBxBDQBEAoBWA1QBWA1AmB3Qg0AihCAVQgLhAgqgfgAGOI3IADAAIAEAFIgHgFg");
	this.shape_5.setTransform(70.2,101.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7E2326").s().p("ABhMxQgpgOhQgmQhOgmgpgMQgvgPhlgbQhFgZglguQgBhSAHhSQAGhSAgh9Ih2wtQARAIA/AXIBhMuQAJCbAIBhQA5B3DuB1IElCPQA3AaAMAMQANAMAcATQAqAfALBAQgxAQg6AKQg/ALg5AAQhQAAhEgWg");
	this.shape_6.setTransform(60.3,101.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DC3D42").s().p("ADxJbQhWg1hEgoIhwhDQgtgcg7gyQg7gxg7g6QgDgGgWgoQgUgpgbjYQgajZgNicQgNicgPhNQBsBXAqArQAwhCBCi7QgTFzgHEfQgGEeAABFQB6B9B0BHQB1BHBAAxQA/AyAcAlQAcAkADBCIAAAQIgWAPQgmh3hWg1gAETJQIgDAAQAMAKgJgKg");
	this.shape_7.setTransform(82.8,98.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjoBqQC9gGEUjkQiOCth+A3QhDAdgzAAQguAAghgXg");
	this.shape_8.setTransform(-80.3,169);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("An+MtQgWiMCAh3QCBh3BChjQBChiAGggIA0yaIBEDcQAfBhA8BQQBqhhBshVQALgIAKgIQB4hcBWglIinRGQAgBjgEDRAn+MtQAIAOALAJQACACADADQAxAuBPAJQApAFAygFQASgCAUgEQCzgfCZibQAzg7BUgiQBUgjA2hMQAEBFgLA7QgsAzg/AWQg+AVhiBfQhiBeiNAkQhEAQg1AGQgzAGgkgFQgDAAgDgBQhAgLhYhEQgFgegCgvg");
	this.shape_9.setTransform(-70.2,107.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgkAkQgCgbgHgeIgEgQQApAFAwgFQABAlAJAjQgcADgXAAQgTAAgQgCg");
	this.shape_10.setTransform(-101,200.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3D3D3D").s().p("AlCChIAngFQCzgfCYibQA0g6BUgjQBTgjA3hMQAEBFgLA7QgtA0g+AVQg+AVhiBeQhhBfiPAjQhEARg0AGQgJgkgBgmg");
	this.shape_11.setTransform(-64.7,180.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2A2A").s().p("ABMBOQhAgLhXhDQgEgfgDgvQAJAPALAJIAEAEQAxAuBPAJIAEAPQAHAgACAbIgHgBg");
	this.shape_12.setTransform(-113,196.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A92F33").s().p("Ak0M6QhAiZBPhdQBOheBaiFQBaiGAxhHQgVoTAnm4QAfBhA8BRQBqhiBthUQgSCCggEaQgfEagQDLQgDARgWBBQALglgGAIQjoEjgyBCIg0BEQhYB4gMBTQgGAmABAkQgaADgYAAQgVAAgTgCgABeCVQACgJAFgBIgDAAQgDAAgBAKg");
	this.shape_13.setTransform(-75.1,114.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E2326").s().p("Aj/NvIgEgFQgLgIgJgPQgViMCAh3QCAh3BBhiQBChjAGggIA1yaIBEDcQgoG4AWITQgyBHhaCFQhZCGhOBeQhPBdBACYQhQgJgxgugAEbD4QgFAAgCAKQABgOAGAEg");
	this.shape_14.setTransform(-93.3,103.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DC3D42").s().p("AmCM5QANhTBXh4IA1hEQAyhCDnkjQAGgIgLAlQAWhBADgRQAQjLAgkaQAgkaARiCIAVgRQB4hcBWgkIinRFQAgBjgEDRQg2BMhUAjQhUAjgyA6QiaCcizAfIgmAFQgBgkAFgmg");
	this.shape_15.setTransform(-57.9,107.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ABMtZIB7QRIgnDFQgGBdCrQ1QAvAeArALQAQAEAQACQAeAFAhgJQApgKAvggQAOgJAOgLIBGyjQA2h4AOhOIgt6NIgDiSQg7AVg8ARQggAKghAJQgWAFgWAGQl9BbmKgvQgDAAgCAAQhvgOhxgYQiCOZhdOAIgYFJIANKgIAHFxQAfAwAnAXQAcAPAgAEQBIAIA2gVQADgBADAAQA3gXgFgPIDpyBQAQiBgOhpID2wxABMtZQBYgMBOgjQAqgTAngYQAIgGAIgEAA2tRIAWgIAA2tRIgCABQgBAGgBAFAA4tWQgBACgBADQgCAGgCAG");
	this.shape_16.setTransform(0.2,-36.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AG5YdQirw1AGhdIAnjFIh7wRQBYgMBOgjQAqgTAngYQgfAzgqAoQgxAtgfARQAfGgAtDtQAtDsAdA+IBdCKIh/gYQgwCVAIBQQAyGlB3KfQgrgLgvgegAqHIuIAYlJQBduACDuZQBwAYBvAOIAFAAQGKAvF9hbIAsgLQijBHjCAzQjBAyiIAUQiHAUiXgBQgYCZggC/IAAACIglDVQg4FFgMDDQgLDCgJBTQgGA8ATELQg8DEgPBiQgOBkg1IjgAkQ19IgCAAQgDAHAFgHg");
	this.shape_17.setTransform(-11.4,-38.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#585858").s().p("AqSZCQgggEgcgPQBwuPAHh1QAGhVAfhHQAJgTAKgTQAaguAngpQgJi9AUlXQATlYAri6QAqi6AehtQAdhsAghsQAAgUCegrIFBhZQClgtEuhrIAtaNQgOBOg2B4IhGSjIgcAUQgvAggpAKQg1k/gVjhQgUjhgGiWQgEhngcjNQBrAPCNgoQiYhihAkAQhdl3gxk0IBGkGIgQAKQgmAYgrATQhOAjhXAMIgXAIIACgFIgCAFIgBABIgDALIj1QxQAOBpgRCBIjpSBQAGAPg3AXIgGABQgnAPgwAAQgTAAgUgCgAnAEcIALgSQgIAMAAgCIgDAIgAFPHYQAAgIADgIIgCAWIgBgGgAAIuaIAAAAg");
	this.shape_18.setTransform(4.7,-29.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("ArXY8IgHlxQA1ojAOhkQAPhiA8jFQgTkLAGg7QAIhTAMjCQAMjEA4lEIAkjWIAAgBQAhjAAYiYQCWABCIgUQCIgUDBgzQDCgyCjhIIBBgSQA8gRA6gWIAECTQkuBqikAuIlCBYQieAsAAAUQggBsgdBsQgeBtgqC6QgqC6gUFYQgUFXAJC9QgnApgaAuQgKASgJAUQgfBHgGBUQgHB2hvOOQgogWgfgwgAHOZJQgPgCgQgEQh3qggymkQgJhQAxiVIB/AXIheiJQgdg/gsjrQgtjtgfmgQAfgRAwguQArgnAfg0IAPgKIhFEGQAwE1BdF3QBAEACYBhQiMAohrgOQAcDNADBnQAGCWAUDhQAWDhA0E/QgWAGgUAAQgLAAgLgCgAGNIsQAAASACgjQgCAJAAAIgAmAFnQABADAHgMIgLASIADgJgAl32AIADAAIgDADIAAgDg");
	this.shape_19.setTransform(-1.4,-38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-205.6,245.2,411.4);


(lib.T_hand_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADokjQAKBXALBqQANB8gJAcQgKAcgeBBQgfBAgWAeQhdAlhTANQgFAAgDABQgDAAgKgBQgLgCgHgGQgIgHgBAAQgBgBgBgBABWBrQACgJAGgTQAHgVARgSQARgTAGgJQAOgUAJgdQABgDABgEQAEgMAEgRQAAgEABgDAhejKQAIBOBAAlQALAIAMAGQACApgLAhQgMAigDAgQgDAgAPAiQAHAHAIAGQAIAFAKAEQABAAABAAQALADAKABQABAAACAAQAEAAAEAAQAPgCAFgKQABgCABgDQADgKACgIQACgHABgFQAAgCAAgBQAAgBAAgBACQAlQgXAggNAPQgLANgLAKAi+DcQhHgEABgyQABgyAUgNQAUgMAbACQAaABAyAFQAxAFAKgCQACg5gTg0Qgjg3gKgjQgKgkgCgmQgDgnAMguQgBgDAAgDAgLCFQgRACgSAAQgSAAgVAAQgUgBgMABQgMABgRADQgSADgKAMQgKAMgEAOQgDAOAAALQAAALABAEQAJA2A2ABQAJAAAJAAIAvgBAAWCbQgdADgXABQgWACgIAEQgJADgIAOQgIANAAAQQgBARAEAQQADAQARAO");
	this.shape.setTransform(1.6,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E2326").s().p("ABIEYQgLgBgHgHIgJgGIgCgCQgRgPgDgQQgDgOAAgOIAAgEQAAgRAIgNQAIgNAJgEQAIgEAWgBIA1gFIg1AFQgWABgIAEQgJAEgIANQgIANAAARIAAAEQAAAOADAOQADAQARAPIguAAIgSAAQg2gBgJg1IgBgPIAAgDQAAgKADgMQAEgOAKgMQAKgNASgDIAdgEQALgBAUABIAnABIAjgCIgjACIgngBQgUgBgLABIgdAEQgSADgKANQgKAMgEAOQgDAMAAAKIAAADIABAPQhHgFABgyQABgyAUgMQAUgNAbACQAaACAyAFQAwAEAKgCQACg4gTg1Qgig2gKgkQgKgkgCgmQgDgmAMgvIgBgGIBXgHIABAMQgJB/BVA7QgIAOgWBhQgSBIA0AwQgKgBgLgDIgCgBQgKgDgIgGQgJgGgHgGQgNgdAAgbIABgKQADghAMghQAKgdAAgjIAAgLQgNgGgLgHQhAgmgIhNQAIBNBAAmQALAHANAGIAAALQAAAjgKAdQgMAhgDAhIgBAKQAAAbANAdQAHAGAJAGQAIAGAKADIACABQALADAKABIADAAIABAAQhCALgNA5QgNA5AeAGIgIABIgCAAIgLgBg");
	this.shape_1.setTransform(-9,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A92F33").s().p("AgQDaIgEAAQgzgvARhIQAWhiAJgOQhVg6AJh/IgCgNIBWgGIAAANQAAAxAXBlIAGAYQAAAHgSBRQgVBWAPBCIACAIIgIAAgAAVCrIAAgDIAAgCQABgJAHgTQAHgVAQgSQARgTAHgJQANgVAJgdIADgHQAJB6hZAuIgDABIADgMgAAqCPQgKANgLAKQALgKAKgNQANgPAXggQgXAggNAPg");
	this.shape_2.setTransform(8.1,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC3D42").s().p("AiODkQANg5BBgLIAAAAIAIAAIgCgJQgPhBAVhWQAThSAAgHIgGgYQgYhlAAgxIAAgNIC1gOIAWDAQANB9gKAcQgJAcgfBAQgfBAgWAfQhcAkhUANQgdgGANg5gAgdB9IgFASIgCAFQgGAKgOACQAOgCAGgKIACgFIAFgSIADgBQBYgugJh6IAHgdIABgGIgBAGIgHAdIgDAHQgJAegNATQgHAKgRASQgPASgHAVQgHATgBAJIAAACIAAAEIgDAMIAAAAg");
	this.shape_3.setTransform(12.9,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgmE7QAAAIAKAFQAIADAPABQAIgBAIgDQAbgLAMgiQgEhYgWhgQAiiIAVhCQABgCAAgCQABAAABAAQAAAAABAAQAlABAUAnQAJAQAPANQAqAhAzAFQAJABAJAAQAFgIAIgPQAKgQAGgaQABgDABgCQgBgBgCgCQgRgVglggQgngigOgPQgOgPgVguQgUgugUgeQgHgKgIgKAimhOQB8glAgh6QAFgRgHgQAgmE7QAJgEAIgGQAMgKAGgSQgIgYgJgbQgJgagLgeQgUg6gGgfQgFgfAbhcAgEgiQgDAAgCgBQgDAAgDgBQgPgDgOgDQgQgEgngMQgZgFgigNIAAAAQgCAAgCgBQgCAAgCgBAiEDlQAAAAABgBQASgGAKgQQACgCABgEQALgVgLgaQgKgXgyhLQgHgLABhwQAAgDAAgEQABgBgBgCIAAAAAiEDlQAfA3AKAQQAEAGAAABQAJAIAMACQALACARgEAj9lEQhNE6AmBGQAOAZAPAXQAUAfAUAaQAGAIAGAGQAJAKAIAIQAbAdALADQANADALgD");
	this.shape_4.setTransform(14.1,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC3D42").s().p("AgaFrQASgggGgYIgchlQgUhLAGhQQABgVAEgUIAFABIAGABIgGgBIgFgBIgdgHIg4gOQgYgFgigNIgBAAIgEgBIgDgCQB7gkAhh6QAEgRgGgQQhhA9gKgWQA4hpgKhUIAGAAQAfACAlANIAhAOIAAAAIAGAEQAQAIANAMIAHAGQANALALAMIAGAHIAOAUQAUAeAVAuQAVAtAOAQQANAPAoAiQAlAgARAVIACADIgBAFQgHAYgJAQIgNAZIgTgBQgEgGgDgIIgFgVQgCgOgDgGQgFgNgMgMIgWgUQgrgmgdgyIgCgDQgHAoglAsIgCAAIgBADQgVBBghCKQAUBgAEBXQgLAjgbAKgAhLFNQgMgRgJgeQgNgggMgsIgahZQgNg1AYhPIA4AOQgcBdAGAgQAGAfAUA6IATA4IARAzQgFASgNAKQgJgHgIgMgAibD5QgOgFgIgHQgMgNgHgOQgZgrguhLQgFhEANhCQAQgJApAUIAAADIAAAHQgBBwAHALQAyBKAJAYQALAagKAVIgDAGIgQgEg");
	this.shape_5.setTransform(17.7,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A92F33").s().p("AgSF0QgKgEgBgIQAKgEAHgGQgHAGgKAEQgRAEgKgCQgNgCgIgIIgFgHIgphHIACgBQARgGAKgQIAEgGQAKgVgLgaQgJgXgyhLQgHgLABhwIAAgHIAAgDIAAAAIADABIAEABIABAAQAiANAYAFQgYBPANA2IAaBYQAMAsANAhQAJAdAMARQAIAMAJAHQAMgKAFgSIgQgzIgTg4QgUg6gGgfQgGgfAchdIAdAGQgEAVgBAVQgGBPATBLIAbBlQAHAYgSAgIABALQgIADgJACQgNgBgIgEgAiTESQgLgDgagdIgRgSIgMgOQgUgagVggQgHgTgCgWQgCgYAAhJQAAhHAbg3QAag3Akh+QAXhJAVgDQATgFAdgBIAVAAQAKBUg4BpQAJAWBig9QAFAQgDARQghB6h7AlIAAAAQgqgUgPAJQgNBCAFBEQAuBLAZAsQAHAOAMAMQAIAHAOAFIAPAEQgKAQgRAGIgCABQgFACgGAAIgNgCgACuAGQgQgMgIgQQgVgnglgBIgBAAQAmgsAHgoIACADQAdAyArAmIAWAUQAMAMAFANQADAHACANIAFAVQACAIAFAGQgygGgqghg");
	this.shape_6.setTransform(13.1,33.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E2326").s().p("AguC9QgmhHBOk5IAEgSQANgvAwAzQgjB+gaA3QgaA2AABIQgBBJADAYQACAWAHATQgOgWgPgZg");
	this.shape_7.setTransform(-10.5,24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABciJQATAIAPANQACACACACQAMALAJAOQAMAUATALQAXANAggBQA8gBAQgaQAIgNAAgPQAAgDAAgDQgBgLgGgMQAAgBAAAAQgDABgxgXQgcgNgVgVQgTgRgOgXQgQgYgNgRQgQgTgLgKQgXgUg/gZAibi7QA6A0BNALQAvACAxgOQAIgCAIABQAHBbASBKQAHAjAIAeQAEAOADANQACAJADAJQAFAUAGASQARA6AFAVQABACAAAEQAAAMgLAJQgNAIgOAFQgBABgBAAQgQAAgMgGQgCAAgBgBQgFgDgFgDQgSgPgTgeQgFgJgFgJQgMgXgJgZQgBgBABgBQgJgYgHgTQgEgLgCgIIgIgZQgDgHgCgIQgDgHgCgGQgGgQgDgOQgCgFgDgJQAAAAAAgBQgCgHgEgKQAAAAAAgBQgDABgDABQgNABgNACQgNAAgNABQgGAAgFAAQgMAAgMAAQAAgBgBABQgIgBgJAAQgMgBgLgBQgFgBgFAAQgDAAgCAAQgIgBgIgBQgFgBgEAAQgIgBgGgBAAjgUQgGABgGABQgYAEgBABQgIABgJACQgEABgDAAQgDABgCAAAilgFQgBAaAEAcQAAABAAABIAAAAQAFBCgJAaIAAABQgJAagOAaQgPAagNAVQgNAWgWAFQgXAAgRgQQgDgCgDgDQgPgNgEgPQgDgJAAgIQgBgKAHgUQACgGADgIQAHgRAMgYQARgigChaQgShTgDgKQgDgKgJhFQgJhGANglQANgmAFgDAiYBtQgBgCAAgCQAAgBAAgBQgFgUgCgUQgCgGAAgGAiYBtQAAAFACAKIABAEIgBgFQgBgKAAgCQgBgBAAgBgAgZAKQAIBIAGAsQAEAjAEARQAFArALAdQAGAXACATQAAADABADQgBAUgVAOQgSAKgRgBIgBAAQgGgCgEgBQgHgCgFgCQgBAAgBgBQgOgGgGgGQgJgLgVgyQgQgjgQhCQgCgJgCgKQgBgEgBgDQAAgDgBgCIAAAA");
	this.shape_8.setTransform(18.1,36.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E2326").s().p("AAZE/QgJgKgUgyQgQgkgQhCIgEgSIgCgIIgBgEIAAgBIgBgEIgCgNIAAgBIgBgEIgBgCQgEgVgDgUIgBgLIAAgBIgBgCQgDgcAAgaIAYACIABACQAJBEAQBFIAIAgQATBTAcBSQgOgFgGgHgADVEfIgKgGQgTgPgSgeIgLgSQgLgXgJgZIgBgCIgPgrIgHgTIgJgZIgEgPIgFgNQgGgQgEgOIgEgOIAAAAIgGgSIAAAAIAFgBIAHgCIARgDQArBpAVAYQgHAHgCAHQgCAFABAEIASA0QAPArAZA5IgCgCgAjWDKQgBgKAHgUIAFgNQAHgRAMgZQARgigDhaIgUhdQgDgKgJhFQgKhGAOglQANgmAFgDIBKgDQgcBGgJBLQgKBUAIBKQAHBIgFAeIgGAlIgEAQIg7BbQgCgIAAgJg");
	this.shape_9.setTransform(7.5,36.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DC3D42").s().p("AgxFUIgBAAQgWg8AAhBQgBgsgGgqQgEgZgGgYQgKgqgPgpIALAAIAagBIAagDIAGgCIgGACIgaADIgaABIgLAAIgYAAIgBAAIgRgBIgXgCIgKgBIgFAAIgQgCIgJgBQgGhoAFgkQAIg1AYgvQAZgwAngkIBugFQAwAfAtAqIAuAwIACACQAdAdAXARQA/AwA6gHQAGAMABALIAAAGQAAAPgIANQgQAag8ABQggABgXgNQgTgLgMgUQgJgOgMgLIgEgEQgPgNgTgIIgBAAIgFAAIAAAAIgBAAIgIABIgBAAQgpAMgoAAIAAAAIAAAAIgMAAIgDAAQhNgLg6g0QA6A0BNALIADAAIAMAAIAAAAIAAAAQAoAAApgMIABAAIAIgBIABAAIAAAAIAFAAIABAAQAHBbASBKIAPBBIAHAbQACAJADAJIALAmIAWBPIABAGQAAAMgLAJQgNAJgOAEIgKgVQghhFgCgTIgBgtIgBgJQgBgTgJgQQgLgTgOgjQgPgjgUgaIAMgCIgMACIgZAFIgRADIgHABIgFABIAAABIAGARQAIBJAGArQAEAjAEARQAGArALAdQAGAXABATIABAGQgBAUgUAOQgRAJgPAAIgEAAgAkyD9QAwg4AUguIAIgVQAQgygFhYIAAgCIAJABIAQACIAFAAIAKABQAAAaADAcIAAACIAAAAQAFBCgJAaIAAABQgJAagOAaIgcAvQgNAWgWAFIgBAAQgWAAgRgQgAkRCBQABgBABgBQAAAAAAAAQAAABgBABQAAABgBADIgCAEIACgIgAjbgKIAAAAg");
	this.shape_10.setTransform(19.5,36.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A92F33").s().p("AgsFSIgMgEIgCgBQgbhSgVhUIgIgfQgQhFgJhEIgBgCIARABIABAAIAYAAQAPApAKAqQAGAYAEAZQAGAqABAsQAABBAWA8IgKgDgABwEiQgag5gPgqIgSg0QgBgEACgGQACgGAHgHQgVgZgqhoIAZgFQAUAaAPAjQAOAjALATQAJAQABATIABAJIABAtQACATAhBFIAKAVIgCABIgCAAQgOAAgMgGgAkoD5QgOgNgFgPIA6hbIAEgQIAHgmQAEgdgHhIQgHhKAKhUQAIhMAchGIBmgEQgnAkgZAwQgYAvgIA1QgFAkAGBoIAAACQAFBYgQAyIgIAVQgUAugwA4IgGgFgAkBCCQgBADgBACQAAACAAABQAAAAAAgBQABgBABgCIACgGIgCACgAjLgJIgOgCIAOACgADDipQgXgRgdgdIgCgCIgugwQgtgqgxgfIAngCQA/AZAXAUQALAKAQATQANARAQAYQAOAXATARQAVAVAcANQAxAXADgBIAAABIgOABQg0AAg3gqg");
	this.shape_11.setTransform(17.9,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfiFIAsAXQAdCagQBaQgUijglhog");
	this.shape_12.setTransform(20,-46.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhfFdQggi0gXhOQgJgfgIgOQgdg0gLgbQgEgLgFgOQgHgVgIgbQgOgugRhJQAZgSAZgPQB0hHBsgPQB4gSBvAzQAIAoAIBXQAHBWgFAlQgFAkAAAiQgBAPAAA5QABBHABCKIAAAAQACAPACAQ");
	this.shape_13.setTransform(-1.3,-27.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7E2326").s().p("AgPAuQgJgfgIgPQgcg0gLgbIgKgYQgHgVgIgcQgNgugShJQAZgRAZgPQAcBpAVA8QAKAbANAeQAXA3AjA+QAPAZAMAfQAgBTAQB6IhYAHQghi0gWhOg");
	this.shape_14.setTransform(-14.8,-23.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A92F33").s().p("AAKCLQgLgfgOgaQgkg/gXg2QgOgdgJgcQgWg7gchqQB1hHBsgPQAFBqAWBqQAMA6AMBDIAFAhQANBXABBcIgBA6IgDBJIhWAHQgQh7gghSg");
	this.shape_15.setTransform(-7.9,-27.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC3D42").s().p("Ag3EOIAAg7QAAhbgNhYIgFggQgMhDgMg6QgWhqgFhqQB4gSBtAzQAIAoAIBXQAHBWgEAlQgGAkAAAiIAABIIABDRIAAAAIAEAfIi1APIADhJg");
	this.shape_16.setTransform(12.5,-28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.6,-63.7,57.3,127.4);


(lib.T_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABkgBQgOgPgVgVQgVgWgYgLQgBAAgBgBQgZgMghAIQgRAGgRANQgIAFgHAIAgsBNQgbgDgYgGQgCgBgCAAQAVgmAjgaQAHgDAGgDQAWgIAUAHQAXAIAQAUQAPASAMATQACADABADQgDABgCABABKBFQgVAHgfACQAFgXgGgQQgGgRgWgDQgXgCgJASQgIARADAZAAWBOQgPABgOAAQgHAAgGgBQgLAAgNgB");
	this.shape.setTransform(0.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AACAeIgMgBIgXgBQgEgZAJgQQAIgSAWACQAXADAHARQAGAPgFAXIgXABIgIAAg");
	this.shape_1.setTransform(-0.7,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfAEQgHgQgXgCQgWgDgIARQgJASAEAZQgcgDgXgHIgEgBQAVgkAjgaIANgIQAVgIAVAHQAXAJAQAVQAOARAMATIADAFIgFACIgCABQgVAGgeACQAFgWgGgRg");
	this.shape_2.setTransform(-0.6,3.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7A89A7").s().p("ABXBKIAFgCIgDgGQgMgTgOgSQgQgUgXgJQgVgGgVAHIgNAHQgjAagVAmIAEABIgFAAQgKguAGgbQAFgbAEgFIAGgGQAHgIAHgFQARgNARgGQAhgIAZAMIACABQgMAHgNAPQgNAPgCAQQASgHAdASQAdAQAOAYQAPAXgBAGQgBADgEACIgCABIgBAAg");
	this.shape_3.setTransform(-0.8,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhWg7QA6BpBzAO");
	this.shape_4.setTransform(4.2,1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545E73").s().p("AhWg7QBuAGA/BxQhzgOg6hpg");
	this.shape_5.setTransform(4.2,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABzAVQhDgagegsQgdgsgcgHQgbgIghAVAg7BmQgcgDgXgHQgCAAgCgBQAVglAjgaQAGgFAHgDQAWgIAVAHQAWAJAQAVQAOASAMATQACACABADQgCABgDABAA6BeQgVAGgeACQAFgWgGgRQgGgRgXgCQgXgDgIASQgJASAEAZAAHBmQgOACgQgBQgGAAgHAAQgLgBgMAA");
	this.shape_6.setTransform(1.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-8.9,21.9,17.8);


(lib.T_Arm_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRi7IAkAOQgECNgQCGIgJBWQgLiEAEjzg");
	this.shape.setTransform(-17.6,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABbIzQAjAkAlAMQAkANAWgzQAGgJAHgXQAHgWgDgRQgEgRg1gwQg0gwgMgXIgCitQAuAYAgAdQAiAcAqAMQAqAMAKgFQALgEAVgiQASgbACgUQABgEgBgEQgBgWgMgKQgNgKgWgJQgWgMgXgSQgXgUgegqQg0g/gdgNIAAkDQADhDAMhlQAMhlgFhiQgggRgngLQg3gPhEgCQh2gEhXAsQgUAKgSALQg9AngrA0QAXBzAqBpQAIAVAJAVIBHEZIABFGQAACLACAUQADATAQAiQAPAiAVAeQAVAdAUAZQATAZAKACQALACAXgEQAWgEASgTAgtEdQAFAmAGA7QAHA9AmAqQAnAoAiAfQADADACACQABABABABAiXEXQADBkANBHQAMBIAUAYQAUAWAkA2QAQAYANARQAOASAOAIQAOAIAigRQAjgRAKgkQAJgkgVgc");
	this.shape_1.setTransform(-31.8,75.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E2326").s().p("ABWKSQgOgIgPgSQgMgRgRgYQgig2gUgWQgVgYgMhIQgMhHgEhkQAEBkAMBHQAMBIAVAYQAUAWAiA2QARAYAMARQgRATgXAEQgWAEgKgCQgLgCgTgZIgpg2QgVgegPgiQgQgigDgTQgCgUAAiLIAAlFIhHkaIgRgqQgrhpgWhzQAqg0A9gnQgDBEAQBOQALA/AfCOQAcB7ARCaQAJAOAGDrQCIAEAUADQADAJAMA4QANA4AeA1QAhA0AvAoQAuAoAkAMQgXAzgkgNQglgMgjgkIgCgCIgEgFQgjgfgngoQgngqgHg9IgLhhIALBhQAHA9AnAqQAnAoAjAfIAEAFIACACQAVAcgJAkQgKAkgiARQgYAMgOAAQgHAAgEgDg");
	this.shape_2.setTransform(-39.4,78.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("ABYJEQgvgoggg0Qgeg1gMg4QgMg4gDgJQgVgDiIgEQgHjsgIgOQgSiZgbh7QgfiOgMg/QgPhOADhEQASgLAUgKQBXgsB2AEQBFACA2APQABAwgLCCQgLCBgDATQgDASABBLQACBKAOC+QArAWALAKQALAKAZAdQAaAdAUAeQAVAdAMAMQAMAMAjAKQAjAJAjgEQgCAUgSAbQgVAigLAEQgKAFgqgMQgqgMgigcQgggdgugYIACCtQAMAXA0AwQA1AwAEARQADARgHAWQgHAXgGAJQgjgMgvgog");
	this.shape_3.setTransform(-26.7,69.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC3D42").s().p("ABRGzQgjgKgMgMQgMgMgVgdQgTgegagdQgZgdgLgKQgLgKgrgWQgOi/gChJQgBhLADgSQADgTALiBQALiCgBgwQAnALAgARQAFBigMBlQgMBlgDBDIAAECQAdANAzBAQAeAqAXAUQAXASAWAMQAWAJANAKQAMAKABAWQABAEgBAEIgVACQgYAAgZgHg");
	this.shape_4.setTransform(-9.6,52.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADHDFIgULqQgcgJgqADQgcADgrAIQgTAEgWAFQg4AMg0AgQgNAIgNALQhjlBhMlHQhNlNBcm+QBdm/A2hhQA2hhCWApQCXAqBFAeQAnApAjBBQgCAZgDAYQgLBvgPBVQgEAagFAXQgBAGgCAFQgDAPgDAOIgEAOQhAEPggGW");
	this.shape_5.setTransform(-40.7,-43);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BC6D07").s().p("AAKAFQgagCAHgIQAZALgFAAIgBgBg");
	this.shape_6.setTransform(74.3,100.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#585858").s().p("AiYFPQghjtAEjtIABgmQAKgDAKgBQAagDAaALIgEgEIApALQBaimBGiQQBCiHAchnQhBEPgfGYIAAABIgULoQgdgJgoAEQgcACgrAIQgzi7gcjBg");
	this.shape_7.setTransform(-29.4,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ak1F0QhOlNBdm+QBdm/A1hhQA2hhCWApQCXAqBGAeIBFCbQgLBvgQBVIgJAxIgCALIlzDVQjBH4gCAcICWMMQgOAIgNALQhilBhMlHg");
	this.shape_8.setTransform(-40.9,-43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AkwC8QACgcDBn3IFzjVIgHAcIgDAOQgcBnhCCHQhGCQhaClIgpgLIAEAFQgZgMgbADQgKABgKADIgBAnQgEDtAhDtQAcDBAzC7IgqAJQg4ANg0AggADnvIQAmAqAkBAIgFAxg");
	this.shape_9.setTransform(-36.3,-39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIahPQAlglAUgnQAUgogjgZQgEgFgIgEQgFgDgHgEQgQgHgPAEQgQAEg0A8QgzA8gVANQhnAhAEgJQhNgyA3giQA3giAJgoQAJgoAEgjQADghgQggQgRgggWgIQgEgBgDAAQgXABgLARQgMAQgMAfQgPAdgTAeQgVAcgxATQhLAwgVAyIkAAZQgygTheAAQhfgBh/AKQgOBGgFBCQgJCIAaB+QARBOAfBLQEOg1A8gaQA8gbAGgFIEShOIC6gKQBmgIAPgCQAGgCAMgFQAJgEAOgHQAbgPAagTQAYgTAXgSQAWgSAEgJQAEgKADgUQACgUgJgQQAQgNAKgOQAHgLAAgVQAAgIgBgIQgCgSgHgLQgHgKgNgFQgagIgbAVgAEkBAQAfgFAwgIQAxgJAogmQAmgnAhgkQADgDACgDQABAAABgCAERCjQBNgHA3gPQA4gOAVgSQAVgTAwgjQAVgPAQgN");
	this.shape_10.setTransform(70.2,-52.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC3D42").s().p("ApiBeQFNhDBMg0IDVg2QBgA7CbgOQBNgIBgg2QB0hBAxhWQAHALACASIABAPQAAAWgHALQgJAOgRAOQAJAQgCAUQgDAUgDAJQgFAKgWASIgvAkQgaATgbAOIgXAMIgSAHQgPAChmAHIi6ALIkSBOQgGAFg8AbQg8AakOA1QgfhLgRhPgAIdhyQgwAigVAUQgUASg5AOQg2APhNAHQBNgHA2gPQA5gOAUgSQAVgUAwgiIAlgcIglAcg");
	this.shape_11.setTransform(71.2,-35.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A92F33").s().p("ApkgOQD2goCfAqIDwgwQBeA7CwgoQCvgnBfinQAIAFAEAFQAjAZgUAoQgUAnglAlIgCACIgFAGIhHBLQgoAmgxAIIhPAOIBPgOQAxgIAogmIBHhLIAFgGIACgCQAbgWAaAJQANAEAHALQgxBWh1BAQhfA2hNAIQicAOhfg7IjVA2QhMA1lNBDQgah9AJiIg");
	this.shape_12.setTransform(69.7,-50.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7E2326").s().p("ApQDSQAFhDANhGQCAgKBfABQBeAAAxATIEBgZQAUgyBLgvQAygTAUgcQAUgeAPgdQAMgfAMgQQALgRAWgBIAIABQAVAIASAgQAQAggDAhQgEAjgJAoQgJAng3AiQg3AiBNAyQgFAJBoghQAUgNA0g8QA0g7AQgEQAOgEARAHIAMAHQhfCliwAoQiwAnheg7IjvAwQiggqj1Apg");
	this.shape_13.setTransform(67.8,-73.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABuBnQCHgSC9ATIAGA6IAKBXIAlFTQoZCXjWhBQjWhCgHkVQgDiEAJiJQAHhoAOhsQAHgyAIgyQAwkvCShJQCShIAqAGQBkANBYAxQAnApAjBBgAiJDJQADgDAEgDQAxgpBIgYQA0gSBDgJ");
	this.shape_14.setTransform(-26,-73.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("ACpDGQiNgPiPgqQAxgpBHgYQhHAYgxApIgBgBIAoisIhlAoIkfAAQAHhoAOhsIESCiIDShDIgoC4IAEABQDdAuDlgOIAKBWQhWALhSAAQhBAAg/gHg");
	this.shape_15.setTransform(-27.5,-68);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#585858").s().p("AkIE9QjWhCgHkVQgDiDAJiJIEfAAIBlgpIgoCtIABABQCPAqCNAPQCNAPCbgTIAlFTQl3BpjZAAQheAAhBgTgAiJibIAHgGIgHAGg");
	this.shape_16.setTransform(-26,-37.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AAAGKQA0gSBDgJQhDAJg0ASIgEgBIAni5IjSBDIkRiiIAOhkQAwkuCShJQCShIAqAGQBkANBYAwQAnAqAjBAIhbJ0QCHgSC9ATIAGA6Qg1AEg2AAQiuAAiogkg");
	this.shape_17.setTransform(-26.9,-99.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-146,152,292);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-416,-320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416,-320,832,640);


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


(lib.sprkdown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-177.6,-168.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.6,-168.9,357,342);


(lib.sparkup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-201.9,-190.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.9,-190.7,401,386);


(lib.spaceship = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap5_1();
	this.instance.parent = this;
	this.instance.setTransform(-476.2,-230.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-476.2,-230.1,957,438);


(lib.shadow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],1.7,-12.8,0,1.7,-12.8,229.3).s().p("AZtIiI4ngRQs4gKpfh3Qpfh3oJkKQoJkINKiXQNJiXTvAGQTtAFNHCgQNICgjwGDQjrF7rXAAIgdAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.9,-54.6,537.8,109.3);


(lib.shade_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape.setTransform(0,92.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_1.setTransform(0,108.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_2.setTransform(0,113.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_3.setTransform(0,-114.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_4.setTransform(0,-109.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_5.setTransform(0,-54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_6.setTransform(0,-59.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_7.setTransform(0,-64.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_8.setTransform(0,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_9.setTransform(0,5.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_10.setTransform(0,-4.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_11.setTransform(0,79.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_12.setTransform(0,74.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_13.setTransform(0,69.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_14.setTransform(0,49.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_15.setTransform(0,54.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_16.setTransform(0,59.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_17.setTransform(0,64.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_18.setTransform(0,44.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_19.setTransform(0,39.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_20.setTransform(0,34.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_21.setTransform(0,29.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_22.setTransform(0,-44.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_23.setTransform(0,-39.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_24.setTransform(0,-34.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_25.setTransform(0,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.2,-116,480.5,230.8);


(lib.sack_of_candy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(196.8,-206,0.999,0.999,0,4.5,-175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.7,-234.3,393.5,468.7);


(lib.p3m_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#693244").ss(1,1,1,3,true).p("ANsPQIEEAAIAYAAIAIAAQgHgKgHgJQgFgHgFgHQgFgGgEgFQgSgVgTgUIAAAAQhthxjGhWQgMgFgMgFQgqgSg7gQIgBAAQgOgEgPgEQglgKgqgJQgcgGgdgFQgEgBgEgBQgCAAgCgBQgIgBgHgBQi0gfjagEQghgBgjAAQAeizABinIAAgOQAAgCAAgBQAAgCAAgCIAAgBQAAgfgBgdQgGiVgfiKQgZhzgrhrQgCgHgDgGQgVgzgZgwQgKgWgMgVQgGgLgGgKQAAgBAAAAQgLgSgVgiQgEgHgEgGQhQiAiAh/QgIgIgIgIQhzhuiPhiInsByQCEB4BuB1QAJAKAJAKQHZICApHRQAFA3gBA4QgBAYgCAYQgaFdkXFBIVvAAIANAAIEWAAIAZAAIABAAIAAgBQgHgGgGgHQgIgIgJgIQgwgtg5gnQgtgfgygbQhdgyhvgnQgegKgfgKQgkgLgkgJQgcgIgcgGQgMgDgMgDQgBAAgBAAQghgIgjgHQgQgDgQgDQg4gKg6gIQgSgDgSgCQgRgDgSgCQAAAAAAgB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E57932").s().p("AgGAFIAAgJIANAJg");
	this.shape_1.setTransform(70.1,108.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2F351").s().p("AChEbIgBgBIADABIgCAAgAiikWIAAgEIABAEIgBAAg");
	this.shape_2.setTransform(20.1,48.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DEAB03").s().p("AFAM7IAEAAIAAAAIgEAAgAFPGWIADAAIAHABgAlUstIgEgNIAIANIgCABIgCgBg");
	this.shape_3.setTransform(15.1,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F77A7A").s().p("AHwNMQichihigyQhigyhFgZQhGgZALAAQg/gSg7gpIgUgOIACAAQAVAKADgEIA4AOQAkAJAjALIA9AUQBvAnBdAyQAyAbAtAfQA5AnAwAtIARAQIANANIgBABgAKfLaIgPgMQiGhqgUgSIhPg2IgSgMIgUgOIgUgPQABAAhCgwQgHgGgPgJIAYAKQDGBWBtBxIAAAAQATAUASAVIAJALIAKAOIAOATgAAGF6IgGgCIgDAAQkNgegwgCIhVgBQgMgDAAgKIACgEIACgCQDaAEC0AfIAPACIADABIAIACQAdAFAcAGQgBAKgOAAQgWAAgZgHgAnGgEIgKgcQgUg7gKieQgFhPgLg8IgKgnQgdhqgZhKIgEgMQgLgYgeg7Igbg3QgKgUAAgFQgJgMgNgxQAAABABAAQAAABABAAQAAAAABgBQABAAAAgBIAgA0IABABIAMAWIAWAqQAZAxAVAzIAFAMQArBrAZB0QAfCJAGCWIABA8IAAABIAAAEIAAADIAAAPQAAASgDAAIgBgBg");
	this.shape_4.setTransform(48.9,24.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E03C3C").s().p("AHrPSIgOgKQgKgIh0gSQgqgGgzgFIAAAAQlbgsjQgVQkZgcgeAPQh6AMC2iPQAfgzggg0Qgig1AahwQAahwgOgcQgGgOACgoQABgnAJg+IACgPQAWiOgziGQgziGgbhUQgbhWgxiDQgyiDitibQDohABdg8QCBCABPB/IAEANQANAxAJAMQAAAEAKAVIAbA3QAfA6AKAZIAEALQAZBLAdBpIAKAoQAMA8AEBPQAKCdAUA6IAKAdQAEADAAgVQgBCngdCzIBDABIgCACIgBAEQgBAKAMADIBVABQAwACENAeIAKACQAYAGAWABQAOAAACgKQApAJAlAKIAeAHIAAAAQA8ARApARQAPAKAHAGQBCAwgBAAIAUAPIAUANIASANIBPA2QAUASCGBqIAQAMIgZAAQhrhIihg2IgVgHIgYgIQhegdiEgeIhHgPQh0gZiNgYIhvgUIg2AHQgbAEAAAMIABAEIAAABIAjAEIAkAGQA6AIA3AKIAhAGQAiAGAhAJIAUAOQA7AoBAATQgLAABGAZQBFAYBiAzQBiAyCcBigAARLCQAAAGAPAOQATASAbAAQALAAAPgJQAOgKAAgHQABgTgzgLQgOgCgKAAQgbAAAAAUgAGeIhQgoABAAAiIADASQAFAKAKAEQAKAEAPAAQAjAAAAgUQAAgEgLgKQAEgDAFgIQAFgIAAgDQAAgIgKgEQgIgDgPAAIgIAAgAlqjrQgLAHgXB7QAAAFACAYQACAZANAmIAIAZQAhgoAGgRQACgHgBgcQgSiRgLgKIgBgBIgBABgAoBq3QgDAKAAAIQAAAgA3CpQA4CrAVAbIAJgDQAJgZAEgPQADgRAAgUQABhFg2h/IgUgqQgqhbgkgZQABAFgEAMg");
	this.shape_5.setTransform(21.7,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AF2F2F").s().p("AqpRCQEYlBAaldIACgwQACg4gFg4QgpnQnaoBIgSgVQhuh1iEh4IHshyQCQBiByBvIAQAPQhdA8joBAQCtCbAxCDQAxCDAcBWQAbBUAzCGQAzCGgWCOIgCAPQgJA+gCAnQgCAoAHAOQAOAcgaBwQgaBwAhA1QAhA0gfAzQi2CPB6gMQAdgPEaAcQDPAVFcAsIgEAAIAEAAQAzAFAqAGQB0ASAKAIIAAAKgAg6P9QALAEAOACIgjgJIAKADgAN8PQQgtgfgygbQhdgyhvgnIg9gUQgkgLgkgKIg4gNIgYgGIgDgBIABABQghgJgjgGIgggGQg4gKg6gIIgkgGIgjgEIAAgBIgBgEQAAgMAbgEIA2gHIBvAUQCOAYB0AZIBHAPQCEAeBeAdIAYAIIAVAHQChA2BrBIgAEINGQgOgOAAgGQAAgbAzAJQAyALAAATQAAAHgOAKQgPAJgMAAQgaAAgUgSgAJxLUQgKgEgFgKIgEgSQAAgiApgBQAVgBAKAEQAKAEAAAIQAAADgFAIQgFAIgEADQALAKAAAEQAAAUgjAAQgPAAgKgEgAiTBiQgMgmgCgZQgCgYAAgFQAXh6ALgHQAAAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAQAKAKATCQQAAAcgBAHQgGARgiApIgIgagAjklsQg3ipAAggQAAgIADgKQADgMAAgFQAkAZAqBbIAUAqQA1B/AABFQAAAUgEARQgDAPgJAZIgJADQgVgbg4irg");
	this.shape_6.setTransform(-1.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.8,-109.9,235.6,219.9);


(lib.p3m_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#693244").ss(1,1,1,3,true).p("AhQt/QDCAbCwBdQABAAABABQG3DoE8KGQALgLALgKQAQgOAQgNQAigcAigUQAEgDAFgCQAMgHANgGQAxgZAygMQDvg3D+D/QA1A2A3BFQAIAKAJALQAEAGAFAHQgHgDgGgDQhLgfhFgPQgPgDgOgCQhHgMhAAGQCDA6BbChQALAVAMAYQAaA3AhBfQAAACAAABQACAEABAFQgFgEgGgEQinh0i8gqAA/oUQDGBZCzDBQArAtAqA0QARAVARAXQAuA8AtBEQAJALAJAMIAAAAQANAVA5BgQABADACAEQAbAvAbAzQATAlAUAmQioALhvAzIgBABQgEABgEACQgeAPgaARQicBqAADXQAYgPAYgOQAJgGAJgGQBwhCBqgoQAkgOAjgLQACgBACAAQEShTDtBbQAZAKAaAMQAOAHANAHQARAIAQAKQARAKASALQCHBXB6CWAhRt/Qq4heuxLpQk+DbCtCHQBxBuCxhcQAlgcBKhZQACgCADgCQAZgYAZgXQE+kpEhiOQAOgHAPgGQBXgpBUgaQCNgtCGgFQBHgCBFAIQArAFArAKQASAEASAFQA1APA0AVQAKAEAKAFAZBM/QgBgIgBgJQgRhwgphYQgfhEgtg2QAiAEAiAHQAIACAIACAZJOKQgBgIAAgHQgBgBABgBQgEg3gCgCIgBAA");
	this.shape.setTransform(-10.3,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81C240").s().p("AgshJIARAYIABAAIBEB0IADAGQgthMgshGg");
	this.shape_1.setTransform(59.2,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2F351").s().p("AgCgcIAAAAQACADADA2QgCgdgDgcg");
	this.shape_2.setTransform(150.1,86);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CB3737").s().p("AgKAIQAAgJATgIIACARIgVACIAAgCg");
	this.shape_3.setTransform(129.6,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFB00").s().p("AACgIIABAAIgFARg");
	this.shape_4.setTransform(-6.8,-84.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DEAB03").s().p("ANMODIABAAIABABIAAACIgCgDgAMSH1IABgCIAAACgArAocQAGAAADgGIgEAIIgFgCgAtMuFIACAAIgCANIgBAEg");
	this.shape_5.setTransform(65.9,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#669933").s().p("AgJgIQgWgggOgXQAtA8AuBDQghgqgWgeg");
	this.shape_6.setTransform(50.1,-4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AF2F2F").s().p("ATDKPIgggSIgcgNQgZgMgagKQjthbkRBSIgEACQgkAKgjAOQALgZA2gjQBQg2BcgDQC/gYCqBdIAFACQAqAXAgAaIAZAWQAUATAJAOIgjgWgAWeIAQgigHgigFQhNhdh1g1IgIgEIgKgEIgFgCQAAg2CYBcQA6AjAvAlQAvAmAAANQAAAFgDAEIgBABIgPgDgAK7EQQgbgzgbgvIgDgHIhFh0IgBgBIgRgXQguhDgug9QgUgjAAgUQAAg6AsAmQAaAXAiAwQAfAwAkBDIAGALIABAAQAUAjAnA8QAnA9AOAeQAOAegEgHQgEgHALAbQAMAcgHgBIgQAFQgHACgGAAQgPAAgMgMgAZvEFQhGgMhBAGQhPgjhfADIgYABIgCgTQAhgPBLADQBSgHBdAcQBUAYAAATQAAAGgDAEIgdgGgA5JgxQBIhQgBALIAIgLQACgNCQh9QCQh+BHg0QBGg0Ccg8QCbg8A+gSIABgBIAbgHQBeglCyAEIB1AQIAlAJIABAAQBVAVBKAnQBaAvgGANQgDAFgGAAIgUgIQg0gWg1gOIglgJQgqgKgsgFQhFgJhHADQiGAFiMAsQhVAbhXAoIgcAOQkiCOk+EpIgyAuIgEAEQhLBZglAcQgYhXBYhigAFrkDQgIgJgHgLIgZgwQAAghA0ApQA0ApAAAZQAAAJgCAEQgDAGgKAAQgZAAgYgZg");
	this.shape_7.setTransform(-0.8,-0.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F77A7A").s().p("AK9N7QgMgLgUg+QgUg+gEgXQgEgVgVgzQgTgvAAgHQAAgiAWAhQAVAhAVBAIAPA8IAJAmIABABQADAMACAEIAAAAQAEAcACAeIAAABIABAQIgBgCgAoHJdQAIgwAsg7QAOgTAOgPQAfgjAhgUIATgLIAIgDQAHgDgRAPIgJAJIgBAAQgaAZgfAlQgoAwgOAfQgIAQgPA6QgLAmgPAUIgHAIQAJgrAHgxgAPmKMIABgCQgKgLgbg1QglhIgGgJIgthCQgkg1AAgIQAAgrBRB4IAbAqQAbA3AgBgIABACIADAJIgLgHgAPxEjIACgFIjMjBQAAggBRBPQA2A2A2BEIARAWIAKAMIgOgFgACkBNIgCgGIABgBIAfgcQAagQAFAMIABAHQgjAlgRAAQgHAAgDgFgADsAnIgDgCIgBgBIgBgIQAIgPAZgOIAJgGIAYgMIABAAQAygYAxgKQAAgCAsAAIAJAAQAMAFAAAHQAAAEgDABIgRAAQgrAEhOAeQgJAEggAVQgdATgIAAIgHgBgAnlptQhzhTgrgZIgGgEQhTg4gwgXQgqgUgzgOIAFgSQAyANAuASIABAAQBNAdBCAnQBkA7CxClIgCAHQgWgJhuhOgAvZtkIgTgEQgTgEACgIQACgIAeAAIAAABQA/AKA5AQIgEATQgzgOg9gIg");
	this.shape_8.setTransform(80.3,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E03C3C").s().p("AVMKdQgKgOgTgTIgZgWQghgagpgXIgFgCQirhdi+AYQhcADhQA2Qg2AjgMAZQhqAphwBCIgSALIgwAeQAAjYCchpQAagSAegOIAIgEIABAAQBvgzCogLIgnhMQARARAWgHIARgFQAGABgLgcQgMgbAEAHQAEAHgOgeQgOgegmg9Qgng8gVgjIAAAAIgGgLQglhDgfgwQghgwgagXQgsgmAAA6QAAAUAUAjIgigrQgqg0grguQizjAjGhZIADgIQAHgNhZgvQhKgnhWgVIAAAAIglgJIh1gQQizgEhdAlIgbAHIgBABQg/ASibA8QicA8hGA0QhGA0iQB+QiRB9gBANIgIALQAAgLhIBQQhYBiAZBXQiyBchxhuQitiGE/jbQOxrpK4BeIgCAQQgeAAgCAIQgCAIATAEIATAEQA9AIAyAOQA0AOApAUQAwAXBUA4IAGAEQAqAZB0BTQBtBOAWAJIADgHQiyilhjg7QhDgnhNgdIAAAAQgvgSgxgNIgBgBQg5gQg+gKIgBgBIABgEIACgMQDCAaCwBdIACABQG3DpE8KFIAWgUIAAABIABAGQADAFAIAAQAQAAAkglIgBgHQgFgMgaAQQAigbAigVIAJgFQAMgGANgGQAxgaAygLQDvg3D+D/QhShPAAAgIDNDBIgCAFQhLgghFgOQADgEAAgGQAAgThVgYQhcgchTAHQhKgDghAPQgUAJAAAKIAAACIAWgCIAYgBQBegDBQAjQCDA6BbCiIAXAsIgcgqQhQh4AAArQAAAIAjA1IAuBCQAFAJAlBIQAbA1AKALIgBACQinh1i8gqIABgBQADgEAAgFQAAgNgwgmQguglg6gjQiYhcAAA2IAFACIAJAEIAJAEQB0A1BNBdQAtA2AfBEQApBZARBwIACARQgCgEgDgMIAAgBIgJgmIgQg8QgVhAgVghQgVghAAAiQAAAHATAvQAUAzAEAVQAEAXAVA+QAUA+ALALIAAABQh6iWiHhXgAIzGZIgHADIgTALQghAUggAjQgOAPgNATQgtA7gHAwQgIAxgJArIAHgIQAQgUAKgmQAQg6AHgQQAPgfAogwQAeglAbgZIAAAAIAKgJQAOgNgDAAIgCABgASiAGIgJAGQgZAPgJAPIACAIIAAABIAEACIAGABQAIAAAdgTQAhgWAJgEQBOgdAqgEIARAAQAEgBAAgEQAAgHgMgFIgJAAQgsAAAAACQgyAKgyAYIAAAAIgYALgAGplPIAYAwQAIALAIAJQAXAZAZAAQAKAAAEgGQACgEAAgJQAAgZg0gpQgdgWgNAAQgKAAAAAOg");
	this.shape_9.setTransform(-10.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#693244").ss(1,1,1,3,true).p("AVILQQAcAKAdAKQAPAFALAFQAPAHALAGQAMAIAcAiQAaAeA8A/QAYAZArAvQgBgdgGgfQgEgYgUhMQgIgbgJgiQgJgigOgiQgYg7gmg9QgZgogegoQgjgvhJggQiUhCktgJQh5kPiaj+QickAi2jsQjGkBj2jOQjujFklhrQkvhtlBAjQhJAIg6AUQgFACgFACQjCBIgNDYQgVFJDHEEQCICwDRDJQAdAcAfAdQAdgcAbgYQBbhUBdhCQAbgTAcgSQgdgXgbgXQlmkxh3k+QACgBACgBQDNhKF2CiQF4CjEiFZQEhFaCVD/QCPD3AVCFQABAGABAFQgbAxgaAxQgdA3gbA4Qg1BtAFB1QAAANABAMQACAXAIAWQAOAlASAjQAGAMAHAMQAgA4AlA1QAMATAOASQAbAlAbAlQgQh/AAhYQAAgbACgWQAFgwAQgVQAXhDBbgiQAQADAmAYQAdASAqAfQBhBGAbAoQAYAmANAfQABACABACQAIAVALAmIBJDuQATA/AIAkQABAEAAAEQARgpAOgrQAYhLAPhNQALg3AEg0QAFhLgKhIQgGgqgLgoQAmARAjAXQA7AnAyA4QBiBtAeCFQAAABAAABQACgHADgRQACgPAEhaQAAgTABgWQAEhtgZhwQgFgTgFgUQgPg0gxhEQgagkgkgpQghglgpgpQgRgSgTgSQgggegjggAQtLeQADAEADAEQApA3AdA6QAaA3AQA6");
	this.shape_10.setTransform(-174.9,65.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AF2F2F").s().p("AP6X8QgIgkgTg/IhJjuQgLgmgIgVIgBgEQgNgfgZgmQgagohhhGQgrgfgdgSIgbhgIAbBgQgmgYgQgDQhaAigYBDQgQAVgFAwQgCAWAAAbQAABYAQB/Ig2hKIgaglQgDhDALg6QAFgUAKgiQALgiARgvQAfhWAHgyQBRgBA6AFIArAGQBjAQBCAuQBMA4AuBrQAMAeALAkQATA9ANBOQARBrAKBpQgOArgQApIgCgIgAVwVBQgeiFhihtQgyg4g7gnQgjgXgmgRQgPg6gbg3Qgdg6gpg3QCOBJBvB5QAXAaAWAcQBWBsAxB4QgEBagCAPIgEAYIgBgCgAXKOCQg8g/gageQgcgigMgIQgLgGgPgHIgagKIg5gUQghglgpgpIgkgkQAmAHAZAFQBYAUA/AhIAMAHQBWAxBFBTQAUBMAEAYQAGAfACAdIhEhIgAHGjWQlKo0lUkXQlVkXlhhiQlhhikeAhIAKgEQA6gUBJgIQFBgjEvBtQElBrDuDFQD3DODFEBQC2DsCcEAQCaD+B5EPIgCABQgfAAk9oegAzRj1QBMhLBYhBQAmgcAogZQiHh0hQhTQjajhhcjpQA2gLA3AIIgEACQB3E+FmExIA4AuIg3AlQhdBChbBUIg4A0Ig8g5g");
	this.shape_11.setTransform(-164.4,65.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E03C3C").s().p("AR4T2QgOhOgSg8QgLglgNgeQgthrhMg4QhCguhkgQIgrgGIhllkIhgAcQgViGiPj2QiVkAkhlZQkilal4ijQl2iijOBLQg2gIg2AKQBcDpDaDhQBQBUCHBzQgoAZgmAcQhZBBhLBLQjRjJiIiwQjIkEAWlJQANjYDChIQEeghFhBiQFhBiFVEXQFUEXFKI0QFJI0AUgXQEuAKCTBBQAHAiAWAjQAQAYAaAbIAuAvIAdAdQAuAsAiAnQAOAjAJAhIAQA+QhEhUhXgxIgLgHQg/ghhZgUQgYgFgngHIAlAkQgFAHgDAJQgEAQAEAQQAHAVAgAbQA3AvAkAnQAPAQAMAPQAkAvAYA2QAaBwgEBtIgBApQgyh4hVhsQgWgcgYgaQhuh4iOhKIgGgIIAGAIQApA3AcA7QgXgIgJAMQgIAKAIAZQAfBSAdBdQATA9ARBCQgDA1gLA2QgPBNgZBLQgJhogRhsgATpJ4IhCg+IBCA+gAg1pBQGFGoD0IIQgGifhfixQg7hviNi+QhThvgvg0QhPhVhPguQgSgLgQgCIgGAAIgEAAgA1QorQAEATALARQANAWATAPQAMAKAJgFQACgCABgFQABgFgCgEIgDgIIgFgIIgDgNQgCgJgEgEQgDgFgOgIIgNgGQgGgBgLAAIgGAAgA4Y0mQgMAOgIAXQgdBPgCBQQgBBPAbBsQAbBsAzBZQAzBZBEAqQgPgSg/h+QhOidgIhyQgJhyAKg1QAHghASg+QAEgRABgJQACgPgGgKIgqgDQAWACgPASgAHORdIgOgYQgKg3gBgwIAAgRQABgqAHgzQARhoAdg8IAOgaQAIgQACgMQAEgOgCgPQgDgKgFgJQAagxAcgwIgCgLIBggcIBlFkQg5gFhRABQgHAyggBWQgRAwgKAiQgLAhgEAUQgMA6ADBDQgkg1ggg4g");
	this.shape_12.setTransform(-176.5,62.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F77A7A").s().p("ASqSCQgdhdgfhSQgIgZAIgKQAKgMAXAHQAaA3AQA6QALAoAGAqQAKBHgFBMQgShCgTg9gAGnQ2QgIgWgCgXIgBgYQgFh2A1htQAbg3Adg3QAFAIACALQACAPgEAOQgCAMgIAPIgNAbQgeA8gRBnQgHA0gBApIAAASQABAwALA2QgSgigOgmgAWpOrQgMgPgPgRQgjgng4gvQgggbgGgUQgFgQAFgQQACgJAFgHQApApAhAlQAkAoAaAkQAyBFAOA0IAKAnQgZg3gkgugAX2KpIgegcIgugvQgagbgPgYQgWgjgHgjQBJAhAjAvQAeAoAZAoQAmA9AYA7QgigngtgtgAguoIIAJAAQARACARAMQBPAuBPBVQAvA0BTBuQCNC/A7BuQBfCxAGCgQj0oJmEmogA0amoQgUgPgNgWQgKgRgEgUQAPAAAHACIANAGQAOAIAEAFQADAEACAIIAEAOIAEAIIADAIQACADgBAGQgBAFgCACQgDACgDAAQgGAAgIgHgA3dqoQgzhZgbhsQgahtABhPQABhPAdhQQAIgWAMgPQAPgRgVgCIApACQAGALgBAPQgBAJgFARQgSA+gGAgQgLA2AJByQAIByBPCdQA+B9APATQhEgqgzhZg");
	this.shape_13.setTransform(-177.1,56.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-204.2,-91.7,387.9,183.3);


(lib.p2_mg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-161.6,-178);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.6,-178,436,320);


(lib.p2_fg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-342.2,-363.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-342.2,-363.8,742,690);


(lib.p2_FG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-571.3,-272.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-571.3,-272.8,1415,516);


(lib.p2_BG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-443.2,-285.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-443.2,-285.7,1001,629);


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


(lib.inv_box_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(-56,-220);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56,-220,113,522);


(lib.inv_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap7copy();
	this.instance.parent = this;
	this.instance.setTransform(-46,-42);

	this.instance_1 = new lib.Bitmap8copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-42);

	this.instance_2 = new lib.Bitmap9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-42,92,80);


(lib.db_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3341A8","#333333","rgba(51,51,51,0)"],[0,0.204,0.906],0.9,-122.4,0,2.8,-55.9,156.9).s().p("AqBM2QkclVgEnhQgDniEXlVQEYlVFsADQFqACDnFZQDmFZBdHaQBdHckYFVQkYFUmPAAQmNAAkdlUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-116.2,186,232.5);


(lib.db_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACmhUQgMg+gSg0QgrBCh1gIQhbgMhDgmQAUA8AJAyQABAJABAIQALA6AEAsQABAJAAAIACmhUQgbAlgkAVQgtAZg6AAQhEAGg3gqQgPgMgNgOACzAXQgHALgSAVQgIAJgLAIQgPAKgVAIQgNAFgPAEQgZAGgcAAQgtABglgKQglgKgigeQADAsgBAvQATAOAWAMQA3AcA7gCQAngCAlgOQASgIASgKQAGgEAHgFQAUgOAQgRQAAg1gEgxQgEg4gJgz");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AhJA2QgWgLgSgPQAAgtgCgtIgBgQQBIgGBBATQAqANARATIAKAOQgZAGgcABIgEAAIgEAAIAAAAIgBAAQglAAgggIIgDgBQgmgKghgfQAhAfAmAKIADABQAgAIAlAAIABAAIAAAAIAEAAIAEAAQAcgBAZgGIANAZQAKAdAEAdQglAPgnABIgIABQg2AAg0gbgABagTIAAAAg");
	this.shape_1.setTransform(-1.9,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("ACGBdQAMgIAIgJQARgVAIgLQgIALgRAVQgIAJgMAIQgHgjgMgiQgFgSgHgKQAkgVAbgmQAJAzAEA4QADAxABA2QgRARgTAOQgEgrgJgqgABfgNQgNgMgbgGQhmgahqgBQgIgzgVg8QBDAnBbAMQB1AIArhDQASA1AMA9QgbAmgkAVIgIgJg");
	this.shape_2.setTransform(0,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ABXBJIgMgZQAOgEAOgFQAUgIAPgKQgPAKgUAIQgOAFgOAEIgKgPQgRgTgqgMQhCgThIAGQgEgtgLg6QANAOAPAMIACACQAuAjA3AAIAAAAIABAAIARgBIABAAIADAAIAAAAQA5AAArgZQAIALAFASQALAiAIAjQAJApADArIgNAJQgRAKgSAIQgFgdgKgegAgQgzQg3AAgugjIgCgCQgPgMgNgOIgCgRQBqABBmAaQAaAGAOANIAHAIQgrAZg5AAIAAAAIgDAAIgBAAIgRABIgBAAIAAAAg");
	this.shape_3.setTransform(-0.4,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-20.9,38.5,41.8);


(lib.db_mon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGLA5QAphACGhnIgni2QmAiCoPAYQiqELgTGrIN1BrQAvjuAghsg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhNCPQA5i9BEiAIAoC2QiFBmgqBBIAKggg");
	this.shape_1.setTransform(48.2,-11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58,-41.3,116,82.6);


(lib.db_j = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACNh9QgNgpgMgvQgHAIgJAHQgPAKgbANQhcAohFAAQgsAAgngPQgQgGgNgHQAQBIAWBEQAJAcAJAYQALAfAKAVACNh9QALAkANAfQAJAVAJASQgEARgGAPQgPAlgfAbQgrAng5AIQg4AIgqgOQgPgFgNgGQgXgLgQgPACNh9QgUAugnAiQgvAqg7AJQg8AKg8gXQgSgHgPgJAC3gTQALAWANATQAnCNiPAoQhkAdhegxQgTglgchB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AgdBNQgwgHgpgYQgMgHgHgKQgEgFgBgFQANAGAPAFIABAAQAZAJAgAAIABAAIAAAAQATAAAUgDQA4gJAsglQAegcAQglQgQAlgeAcQgsAlg4AJQgUADgTAAIAAAAIgBAAQggAAgZgJIgBAAQgPgFgNgGQgBgGABgFQAEgNASgDQAIgCAUACQA0AFAzgRQAygQApgiQAMgJAGAAQAFAAAFAEQADADADAHQAQAfgQAiQgHAOgLANQgOAbgiAMQglAOgiAAQgOAAgOgDgAiOATIAAAAg");
	this.shape_1.setTransform(4.4,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("Ah3BqQgTgmgchAQAQAOAXAMQABAFAEAFQAHAKANAHQAoAYAxAHQAvAIAzgTQAigMAPgbQALgNAGgPQAQghgQgfQgCgHgEgDQgEgEgGAAQgFAAgMAJQgpAigzAQQgyAQg0gFQgVgCgIACQgRADgEAOQgCAFABAGQgXgMgQgOQgKgVgLgeQA3AWBPgDQBOgCAkgZIAogbQASgTASgjQAJAVAJATQgEARgGAPQAGgPAEgRQALAXANATQAnCMiPAoQglALgkAAQg9AAg8gfg");
	this.shape_2.setTransform(2.8,7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AiFBwIgTg2QAPAKASAHIADABIAFABIABABQAlANAmABIABAAIAAAAQARAAARgDQA8gLAwgqQAmgiAUgsQAMAjANAeQgSAjgTATIgoAbQgjAZhPACIgQAAQhFAAgwgTgAgjBcQgmgBglgNIgBgBIgFgBIgDgBQgSgHgPgKQgWhDgPhIQANAIAPAGQAnAOAsAAQBFAABcgoQAbgMAPgLQAKgHAGgHQAMAvANApQgUAsgmAiQgwAqg8ALQgRADgRAAIAAAAIgBAAgACmgqIAAAAg");
	this.shape_3.setTransform(-2.5,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-22.3,45.1,44.8);


(lib.db_headlight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAihwQhKgLhEAfQgWAKgQATQgGAGgFAHQgFAIgDAIQgHAOAAARQAAAPAFAQQAAABAAAAQAFAPAIANQAIAOAJANQARAYAbAHQAdAEAdgHQAbgHAagKQAIgDAIgDQBDgbBEgbQAHgVgGgUQgLgggXgXQgcgbgmgPQgPgEgQgEQgDgBgCAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B8A08").s().p("AhdBZQgbgHgRgYIgRgbQgIgNgFgPIAAgBQgFgPAAgQQAAgRAHgOQADgIAFgIIALgNQAAAWADAXQABANAFANQAFAMAJAJIAJAJQARAQAXAEQAcADAegGIALgCQAWgFAXgIQAZgIAYgJIApgPIAogOQAGAVgHAUIiHA2IgQAGQgaAKgbAHQgRAEgSAAQgLAAgMgBg");
	this.shape_1.setTransform(0,2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5D802").s().p("Ag/BWQgXgDgSgQIgIgJQgJgKgFgNQgFgMgCgNQgCgWgBgXQAQgSAWgLQBEgfBKALIAGABQAgAVAiAgQAPAMAFAOQAEANgQAOQhLAogsASIgLACQgTAEgTAAIgTgBg");
	this.shape_2.setTransform(-1,-2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAgAZQAQgOgFgNQgFgOgPgNQghgggggVIAfAJQAlAPAcAbQAXAWALAgIgoANIgpAQQgXAKgZAIQgXAHgXAFQAtgRBKgog");
	this.shape_3.setTransform(8.2,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1,3,true).p("Ah/ALQgCgUAFgUQAHgbAPgWQAQgXAWgKQAJgDAIgDQAegGARABQASgBAeAGQAIADAJADQAWAKAQAXQAPAWAHAbQAFAUgCAUQgKAUgPATQgPATgTAQQgTAQgQAJQgQAJgOAEQgBAAgDAAQgCAAgBAAQgOgEgQgJQgQgJgTgQQgTgQgPgTQgPgTgKgUg");
	this.shape_4.setTransform(-8.7,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6B8A08").s().p("AgDBMQgOgDgQgJQgQgJgTgQQgTgQgPgTQgPgSgKgUQgBgWAEgUIAVATIAUAUIAaAYQALALAMAHIAGADQAPAKANABQAPgBAOgKIAGgDQAMgHAMgLIAZgYIAVgUIATgTQAGAUgDAWQgJAUgPASQgPATgTAQQgTAQgQAJQgQAJgNADIgFABIgDgBg");
	this.shape_5.setTransform(-8.7,3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F5D802").s().p("AgcBUIgGgEQgXgXglgyQgIgPAEgNQADgNAKgKQAUgcASgQQAdgGASABQASgBAeAGQASAQAVAcQAJAKADANQAEANgIAPQglAygXAXIgGAEQgOAJgPABQgNgBgPgJg");
	this.shape_6.setTransform(-8.7,-3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABfALQAIgOgEgNQgDgNgJgLQgVgbgSgRIAQAGQAXAKAQAXQAPAWAGAaIgTASIgVAVIgZAYQgMAKgMAIQAXgXAlgygAg5BCIgagYIgUgVIgVgSQAHgaAPgWQAQgXAWgKIARgGQgSARgUAbQgKALgDANQgEANAIAOQAlAyAXAXQgMgIgLgKg");
	this.shape_7.setTransform(-8.7,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.098)").s().p("AhIAcQhBhIALgXID+AAQABArhEA+QggAegeAAQgkAAgjgog");
	this.shape_8.setTransform(-8.8,7);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-12.6,36.6,25.3);


(lib.db_headf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#17435F").ss(3,1,1).p("ABOg7Qg+BfgvAvABXAAQgaA0gqAnAAphbQgjA9hLBQAgYhPQgeAzggAc");
	this.shape.setTransform(60.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ALlkBQgBAAgBAAQjaAAiODSQgJANgJAPQhLB6g1C6QgEAOgEAPIsqhcQgqjAAIitQAFiBAhh2Qh+CAgqCWQgqCVAsBuQAFANAFAMQAIAQAIANQAnA/A7ATQE4gWEAA4QB0AZBOAQQBSAUBVAEQAUABAUAAQBlgDBaguQBOgoA1hHQAQgXAOgZQAEgJAFgJQArhYAQhxQAHgzgEgwQgDgigIghQAAgBAAAAQgHgagKgYg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADBAQAQg8ABgzQAEhGgRhNIARADQAIAiADAiQAEAwgHAzQgQBwgqBZIgJARQAWhFAQg9g");
	this.shape_2.setTransform(73.4,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2875A9").s().p("AEgFBQhVgEhSgUIjCgoQkAg4k4AVQg7gSgng/IAIgFIAQANQAJAHAIACQAKAEAKgBQALgCAHgHQAIgHABgOQABgIgBgRQgOiaAcibQgICtAqDAIMqBcIAIgeQAEAKAIAIQAUAWAcAGQAtAJBBgcQBigqBPhKQBQhKAyheQAQggAcg+QgBAzgQA9QgRA8gWBFQgOAZgQAXQg1BIhOAoQhaAuhlADQgUAAgUgCgALRlCIACAAQAKAZAHAZQhpgShiA2QhjA2hNBGQCOjSDaAAg");
	this.shape_3.setTransform(1.8,6.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399DB").s().p("AErFoQgcgGgUgWQgIgIgEgKQA1i6BLh6QAJgOAJgOQBNhGBjg2QBig2BpASIAAABIgRgDQARBNgEBGQgcA9gQAgQgyBfhQBKQhPBKhiAqQgxAVgmAAQgMAAgLgCgAqiD4QgIgCgJgHIgQgNIgIAFQgIgOgIgPIgKgZQgshuAqiVQAqiWB+iBQghB3gFCBQgcCaAOCbQABARgBAIQgBAOgIAHQgHAHgLACIgGAAQgHAAgHgDg");
	this.shape_4.setTransform(-0.6,-2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-39.7,156.1,79.5);


(lib.db_handR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AjUApQAAgEAEgVQADgUAHgTQAJgYALgWQALgVAOgSQANgRARgOQABgBABgCQAegaAjgLQAJgEAJgCQATgEATAAQAGAAAIAAQAhACAeAPQAPAGAPAKQA1AmAfA8QABAEACAFQAIARAFATQAHAaAAAaQAAAEAAAFQABAGgIAYQgIAXglAhQgmAhgvANQgvALgqgBQgqAAgvgPQgugPgjghQgighAEg1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17435F").s().p("AhDAnQgegOgCgVQgBgVAfgPQAcgQAogCQApgBAdAOQAdAOACAVQABAUgeAQQgdAQgpABIgHAAQgjAAgagMg");
	this.shape_1.setTransform(0,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E89C4").s().p("AhJBWQADgVAIgUQAIgXALgWQALgUAPgSQAMgSAQgOIACgCQAegaAjgMQgWAJgmAxQglAygQBCQgdAUgNAbIAEgZg");
	this.shape_2.setTransform(-13.5,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA/BtQgJgXgYgTQgFgkgLgeQgbhJg3glQAQAGAOAKQA1AmAeA7IAEAJQAIARAFASQAHAbgBAbIAAAIg");
	this.shape_3.setTransform(14.5,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2875A9").s().p("AgMB4QgqgBgvgPQgugPgjggQgighAEg1QANgaAdgUIATgMQA/giBYACQBaACA+AkQANAHALAJQAYATAJAXIAFABQABAHgIAWQgIAYglAhQgmAhgvAMQgrALgnAAIgHAAgAgBgbQgoACgcAQQgeAOABAWQABAVAeAOQAdANAngBQAqgBAdgQQAdgQgBgVQgBgUgdgOQgcgNgmAAIgFAAg");
	this.shape_4.setTransform(0,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399DB").s().p("ACWBSQg+glhZgCQhZgBg/AiIgUALQAQhCAmgxQAmgyAWgIIATgGQASgEAUAAIAOAAQAhACAeAPQA2AlAcBJQALAeAFAkQgLgIgMgHg");
	this.shape_5.setTransform(0.2,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-20,44.8,40.1);


(lib.db_handL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADOBcQABgEACgVQACgVgCgVQgCgZgFgXQgGgXgJgVQgIgUgMgSQgBgBgBgCQgWghgegUQgIgGgJgEQgRgJgSgFQgHgCgIgCQgggGggAGQgQACgRAGQg9AXgtAyQgDAEgDAEQgMAOgKARQgOAYgGAaQgBAEgBAEQgDAGACAYQABAYAcAqQAcAqAqAYQAqAXAqALQAoAKAxgDQAwgCAqgXQAqgXAKg0g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E89C4").s().p("AheBZIACgIQAHgZAOgZQAJgQAMgPIAGgHQAsgxA+gYQAQgFARgDQg/AXgtA/QgSAagOAhQgdAMgOAUg");
	this.shape_1.setTransform(-11.3,-10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#17435F").s().p("AgNAxQgogMgYgXQgXgWAGgUQAGgUAggGQAhgGAmAMQAnAMAXAXQAZAWgHAUQgGAUghAGQgKACgKAAQgYAAgZgIg");
	this.shape_2.setTransform(-1.4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2875A9").s().p("AgXB3QgqgKgqgYQgqgYgcgpQgcgpgBgZQgCgYADgHIAFAAQAPgTAcgNQAMgFAOgEQBGgTBWAWQBXAVA0AxIAPAQQAXAbAGAcQgKA1gqAXQgqAWgwADIgTAAQgmAAgggIgAhEggQggAGgGAUQgGATAXAXQAYAXAoAMQAmAMAfgGQAhgGAGgUQAHgUgZgXQgXgWgngMQgZgIgXAAQgMAAgLACg");
	this.shape_3.setTransform(-0.2,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBHQAChEgXg5QgYg6gTgOQAfAUAVAhIACAEQAMARAIAUQAJAVAFAWQAGAYACAZQABAVgCAVIgDAZQgGgdgWgbg");
	this.shape_4.setTransform(16.2,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399DB").s().p("ACZBiQg0gxhXgVQhWgWhGATQgOAEgMAFQAOghATgZQAuhAA+gXQAggGAgAHIAPADQASAGARAIIARAKQATAOAYA6QAYA5gDBEIgPgQg");
	this.shape_5.setTransform(0.9,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-20.3,44,40.6);


(lib.DB_glass = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AKphQQgQgogYgmQgmg7g7g1Qg3gxhJgsQjJh4jogDQjqgEieBWQhrA7hEBFQghAigYAjQglCsgCCQQAAABAAAAQgCChAqB/IMpBZQCgpDFgAMg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D9D9D").s().p("AksENQg5gIjQgmQgEgvAAgwQgBhGAJhEQBthrCMhDQCRhGCcgRQCagTCcAiQCRAfB/BJQiAA6g+A5QhEA+hZBeQhaBdhGAdQhGAehmAHQgYABgaAAQhCAAhMgKg");
	this.shape_1.setTransform(-5.5,-10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A4A4A").s().p("AqAElQgqiAACigIAUAAIgUgBQACiQAlisQAYgjAhgiQgWBPgKBRQgIBEAABHQABAwAEAuQAJBrAfBnQFPACFFBYQBgjmCCiLQBPhVBeg3QBPgtBSgVQAYAlAQAoQlggLigJDg");
	this.shape_2.setTransform(0,10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1E1E1").s().p("AokAZQBEhEBrg7QCehWDpAEQDpADDJB4QBJAsA3AwIgcAMQh+hIiSgfQibgiiaATQidARiQBFQiMBDhuBrQAKhRAWhPg");
	this.shape_3.setTransform(-3.6,-30.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D6D6D").s().p("ApOD+QgehngKhrQDQAmA5AIQBrAOBVgFQBmgHBHgeQBFgdBahcQBZheBEg/QA+g5CAg6IAcgMQA6A1AnA7QhTAVhPAuQheA2hPBVQiCCMhfDlQlFhXlQgDg");
	this.shape_4.setTransform(1,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3,1,1,3,true).p("AG4lWIgFgOQnLkCmeEFQgkBagOBiQgPBtAEBuQAEByAaBuQAQBFAZBEQHNCOGxiSQBRnQhrkhg");
	this.shape_5.setTransform(-3,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9D9D9D").s().p("AgDDWQiFgBh7gZQh6gahTgmQgDg4AAg6QgBhUAHhTQBehyCqB3QCqB3CDgxQCEgxBTg3QBTg3A8BUQAHBTgBBUQAAA6gEA4QhrAvhyAWQhwAViBAAIgFAAg");
	this.shape_6.setTransform(-2.8,-7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4A4A4A").s().p("AmsFdQgZhDgQhFQgahugEhxQgEhwAPhtQAOhiAkhZQgUB2gBAVQgHBTAABVQAAA6AEA3QAPCWAtBrQHkBnFfhrQAZh8AIiBQADg3ABg6QAAhVgHhTQgCghgFgcQgGgogKgbQBrEghRHQQjbBKjjAAQjcAAjkhGg");
	this.shape_7.setTransform(-3,4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1E1E1").s().p("AjFBfQiqh2heByQACgWATh1QGfkFHLECIAFAOQAJAcAHAnQAEAbADAiQg8hVhTA4QhTA3iEAxQgmAOgqAAQhkAAh5hVg");
	this.shape_8.setTransform(-2.8,-32.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D6D6D").s().p("AmTBnQgthqgQiWQBTAmB6AaQB7AZCFABQCEAABygVQBygWBrgvQgHCBgZB7QizA3jWAAQjMAAjugzg");
	this.shape_9.setTransform(-2.8,19.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.1,-49.7,138.2,99.5);


(lib.db_feature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag6C1QhKgKgdhLIAFgWQBeBMCNg0IgCAaQg2A6g+AAIgTgBgABJAQIA4irIBAAHIg1CtgAjAgOIA4inIA8AGIg0Cog");
	this.shape.setTransform(0.4,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AhMC5QgPgFgFgcQgEgdAKgkQAJgkASgWQARgWAPAFQAPAEAFAcQAEAcgKAkQgJAkgSAXQgOASgOAAIgEAAgABXhKIAahOIBBAHIgZBQgAixhrIAahNIA9AHIgYBOg");
	this.shape_1.setTransform(0.2,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0000").s().p("AADgqQgFh8A8gCQA8gCAeBUQCDgzAaBEQAaBFhxA1QhxA3g1A+QgqhagHh6gAkpgTQgehXAtgVQAtgVAXA8QBGhHAmAhQAlAhghBCQghBBgqBMQhagvgehWg");
	this.shape_2.setTransform(2.2,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AifhZIAJgfQB5BkC9gvIgCAgQhiCJhQASIgMABQhJAAg2jSg");
	this.shape_3.setTransform(-4.8,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("AjHADIAJgfQB6BjC8guIgCAfQhhCLhQASIgMABQhKAAg2jTgABkhNIAjhrIBBAHIghBsgAikhuIAjhnIA8AHIggBog");
	this.shape_4.setTransform(-0.9,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-19.4,38.6,36.5);


(lib.db_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIZlQQgEgFgFgFQgDgDgEgDQgKgIgOgKQgOgJgSgLQghgShdgeQgEgCgEgBQglgMgtgNQhPgXhVgOQhWgJiOgEQgbgBgbAAQgIAAgIABQhoADhhAXQgxALgfAdQgxAugCBbQgCCIBPCrQAGALAHANQACANACAMQAwD/BNClQEeBME3gcQBLhhAxhBQArjxAgiLIAAAAQAHgcAGgXQALgwALggQACgGACgGQAlhzAAgNQAAgUgJgOQgCAAgCABQg0ASgtAxQhgBphCD3QgCAGgBAGQBMgiAsglQArgjASgZQACgDACgDQAPgWAMgTAhzh3QgKBiACBSQABAVABAUQiigVisg/AEPBgQi/AhjJgb");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17435F").s().p("AiGDNQBDj3BfhpQAtgyAzgRIAEgCQAKAPgBAUQAAANglBzIgEALQgKAhgMAvQgLATgPAWIgFAGQgSAZgqAkQgrAkhNAiIADgLg");
	this.shape_1.setTransform(40.8,-12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhbBGQAfhRAlgsQAlgsAXgSQAYgSAxgVIAIAGIAFAMQg0ARgtAxQgjAYgdAtQgSAbghBEQgSAngPAaQAAgEAfhTg");
	this.shape_2.setTransform(41,-19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D802").s().p("AiLBdQhagdgRg5QgRg4Abg5IADgHQBggKB0AXQBPAQCOAvIA1AQIgVAaQgVAaglAoQgmAnhdAGIgeABQhNAAhLgYg");
	this.shape_3.setTransform(-2.2,-32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399DB").s().p("Ak5HOQhNilgwj+QBrArBzAZQCeAjCggEQBxgCBEggIAAGSQhUAIhSAAQjdAAjRg4gAALBMQhFgHg0gIIgBgdQAAhGAIhSQgIBSAABGIABAdQhvgJhLgPQhLgOhUgeQhQirADiIQABhaAxguQAdAbAoAHQAgAFAugHIBNgNIAQgCIgDAHQgbA4ARA6QARA4BaAdQBZAdBdgGQBdgGAmgnQAlgnAVgbIAVgbIAoAKQAzALAqgCQAygBAsgVQAWgLAQgOQAPAJAJAIQgxAVgYASQgXASgmAtQgmAsgeBSQgfBSAAAEIgTAeQghAvgqAWQgoAVgqABIgMAAQgoAAg9gGgAi/n9IgKgIIAKAIg");
	this.shape_4.setTransform(-1.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2875A9").s().p("AEOBwQhFAghwACQigAEifgjQhygZhrgrIgFgaQCtBAChAUIgCgoIACAoQihgUithAIgMgYQBUAeBLAOQBLAOBuAKQA0AIBHAHQBFAGAqgBQArgBAngUQArgWAhgvIATgeQAPgaASgnQAghEASgcQAegtAjgYQhgBqhCD2IgDAMQBMgiAsgkQArgkASgZIAFgGQAOgWAMgSIgNAyIAAAAQgfCLgrDyIh9ChgAA3B1QBoAABjgQIAMgCIgMACQhjAQhoAAIAAAAIAAAAQhXAAhagMQBaAMBXAAIAAAAIAAAAgAnIAVIAAAAgAEOlJIgngJIAjgnQAjgoAmgSQBdAeAgATIAgAUQgRAOgVALQgsAVgyABIgKAAQgmAAgugKgAmqmcQgogIgdgaQAfgdAygMQBggXBogDIAJAHQgaAZgYA0IgQABIhOAOQgZAEgVAAQgRAAgOgCg");
	this.shape_5.setTransform(0.1,-0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6B8A08").s().p("ACJBIQiNgvhQgQQh0gWhgAKQAYgzAagZIABAAIAGgIIA2ABQCPAEBVAJQBWAOBPAXQAtANAkAMIAJADQgmARgjAoIgjAnIg1gQg");
	this.shape_6.setTransform(4.2,-43);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.6,-52.8,111.2,105.6);


(lib.db_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIvDQQAQgUAHgNQAFgaADgWQABgHABgGQADgfAAgYQgCg6gMg1QgHgigMghQgsh0hUhWQhWhWh2gfQh0ggh4APQhoAJhUAbQhUAahlBLQgSAQgQASQhJBRgrBjQgyBygKB+QgCAXgCAYQgBAaABAaQALAHALAHAIvDQQABAGgDARQgEARgUAfQgVAfhGAzQhHAzh+AfQh+AfiygWQi0gWiHg8QiIg8gZgPQgZgQgLgeAIvDQQgYAggcAcQgQARgSAQQgTAQgVAOQgXAQgZAOQgnAYguARQghALgiAIQgcAHgbAEQgpAEgpAAQgiAAghgBQgtgEgtgEQgsgHgrgHQgrgKgpgLQgqgLgogOQgkgLgigOQgigOghgPQgfgPgegQQgegQgdgR");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag1B2QizgWiIg8QiHg7gZgQQgZgPgLgeIA6AgQAeARAgAOQAgAQAiAMQAjAOAkAMQAoAOApAKQAqAMAqAJIBYAOIBZAIIBDABQApABApgEQAcgFAbgHQAigHAhgMQAvgQAngYQAYgOAXgPQAVgOAUgRQARgPAQgRQAdgcAXggQABAFgDARQgEARgUAfQgUAfhHAzQhHAzh+AfQhKARhcAAQhBAAhJgIg");
	this.shape_1.setTransform(-0.7,33.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AHKCBQgLghgOgdQgZgxgkgkQgpgphNA8QhOA9hNCYQgLgdBChnQBDhmA4gWQA5gWgRgxQgRgyhcgxQhcgyh0gHQh2gIhsAYQhfAXhmAzQgfAQghATQBmhMBUgaQBTgaBpgJQB4gQB0AgQB1AfBWBXQBVBWAsByQALAhAIAjQAMA2ABA5QABAYgEAgQgChVgYhKg");
	this.shape_2.setTransform(10.7,-17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2875A9").s().p("ABhG0IhDgBIhZgIIhYgOQgqgJgqgMQgpgKgogOQgkgMgjgOQgigNgggQQgggOgegRIg6ggIgWgPQgBgaAAgaQA9AyB4A4QB4A3CuAXQCtAXAwgRQAngPASgKIAGgDIAFgCQANgGARgjQARgkBBhwQBAhwBGg/QBFhAA3gUQAOAdALAhQAYBJACBVIgBAMIgJAxQgHAMgQAVQgXAggdAcQgQARgRAPQgUARgVAOQgXAQgYAOQgnAYgvAQQghAMgiAHQgbAHgcAFQgkADglAAIgJAAgAjKheQh0gXgNgsQgQgqAyhEQAyhFBTgsQBTgsBjgGQBjgGBCAZIAIADQAbANATAQQAWARAMAaQANAagFAaQgFAegdAcQgRARgnAeQgjAfgZAnQgqAlhXADIgUAAQhQAAhmgVg");
	this.shape_3.setTransform(-0.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3399DB").s().p("AhbGQQivgXh4g4Qh4g4g8gxIAEgvQAKh+AyhyQArhjBJhRQAQgSASgQQAhgTAegPQBng0BfgWQBqgZB2AIQB2AIBcAxQBcAyARAxQARAyg5AWQg5AVhCBoQhCBmALAcQBNiWBNg9QBNg9ApApQAkAlAZAxQg2AUhGA/QhFBAhBBwQhABwgRAjQgSAkgMAGIgFACIgGADQgSAKgoAOQgUAIgsAAQg6AAhigNgAArmRQhjAGhTAsQhTArgxBFQgyBFAQAqQAMArB0AYQB0AXBWgDQBXgDAqgkQAagoAjgfQAmgeARgQQAdgdAGgeQAEgZgMgbQgMgZgXgSQgSgPgcgNIgIgEQg0gUhJAAIgoACg");
	this.shape_4.setTransform(-2.7,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.4,-47.1,120.9,94.2);


(lib.db_atR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACDnYQgHAIgUgCQgNgBgOgGQgIgDgHgDQgFgDgFgCQgPgJgIgKQgLgNAGgHQACgDAEgBQAHgDANABQAGABAHACQAOADAPAHQAWALALANQAGAHABAGQABAEgCADgABKnTQgFASgFASQgxCzgHCpQgCA/ADA9QANDyBKD3IjAgYQhdmICZmQQAghWArhWQAFgKAFgJ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B8A08").s().p("AhgH5QhdmICZmQQgZCzAPCuQAWhMAghKQgCA/ADA9QANDyBKD3gAA4m5IgRgSIAKgTIADgHQgPgJgIgKQgLgNAGgHQACgDAEgBQABACAAADQAAACAfATQAWANAbAGIAVADQABAEgCADQgHAIgUgCQgNgBgOgGIgPgGIgKgFIAKAFIAPAGIgDAGIgKAkQgFgEgDgFg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOAVQgNgWgWgOIgNgHQAOACAPAIQAWAKALANQAGAHABAFIgVgCg");
	this.shape_2.setTransform(9.7,-50.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D802").s().p("AhCg2QAhhXArhWIAQATQAEAFAEADQgwC0gGCoQghBKgWBNQgQivAZiygAAgkNQgegTAAgDQAAgDgCgBQAHgDAOABIAMADIANAHQAXAOANAXQgcgGgWgNg");
	this.shape_3.setTransform(2.9,-23.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,-54,28.5,108.1);


(lib.db_atL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEdjoQASAXAGAWQACAKgBAHQgBAJgGAEQgKAIgUgLQgOgHgNgOQgGgGgFgGQgEgFgDgFQgLgSgEgSQgGgVAKgIIAAgBQALgHAUAKQAUALARAXgADxiyQhHA8gxBDQgfAqgXAtQjlADiTDqQA3hpBWhbQBPhTBphJQBdhBByg4");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D802").s().p("AguAQQBchAByg4IAFgDIAHAKIALAMIgFADIAAgBQgvAYg3AnQhSA/gqAfQhIA2g/AbQgYALgYAHQBPhUBqhJgADnhNQgIgBgRgOQgRgPgKgQQgKgRgPggQAOAGAMAJQAcAUAPAdQAJAQgBAPg");
	this.shape_1.setTransform(6.3,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeAwQABgPgJgQQgPgcgbgUQgMgJgOgGIAAgBQALgHAUAKQATALARAXQASAWAGAWQACAKgBAHIgQgDg");
	this.shape_2.setTransform(26.4,-22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B8A08").s().p("AioBMQAYgHAYgLQA/gbBHg2QAqgeBThAQA3goAvgYIAAACQhHA7gxBEQgfApgXAuQjlACiTDqQA3hoBWhbgAERihQgOgIgNgOIgLgMIgHgKQgLgSgEgRQgGgWAKgIIAAAAIAAAAQAPAgAKARQAKARARAOQARAPAIABIAAAAIAQADQgBAJgGAEQgEADgGAAQgIAAgMgGg");
	this.shape_3.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-28.3,64.1,56.6);


(lib.db_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABujiQAUgOAUgMQATgMAUgKQAMgHANgGQgCBGAGAwQAEAbAGAUQgMAFgMAHQgIAFgIAFQgyAggqAoQgEgTgLgPQgCgDgDgDQgUgXgggLQgOgFgPgCQgIgCgHAAQg5A/gtBNQglA/gcBJQgXA5gRBBIATAAIBRABIAkAAQAEgnAOggQgDgIgDgGQgFgKgGgJQgGgIgHgGQgNgLgTgCQgLgCgMACQgGAAgGACQgJACgIAEABujiQAMABAJAFQACABACABQAhAPANAoQADAIACAHQAFAXgDAZAgEBZQgHgSgJgLQgCgBgBgBQgNgRgVgIQgMgFgNgCQgIgBgJAAQgMABgLADAgEBZQgnA7geBFABujiQhIAxg6BCABggcQg4AzgsBC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("Ai8ENQARhAAXg5QAIgFAJgCIAMgCQgeBAgUBDgAhTALQALgDAMAAQAJgBAIACQgaAlgWAoQgPAagNAbIgMACQgJACgIAFQAchKAlg/gAASiAQA7hCBIgxQAMABAJAFIAEACIgEgCQgJgFgMgBQAUgOAUgMQgFARgKARQgIAMgKANQgOAQgxAvIgeAcQgOgFgQgCIgPgCIAPACQAQACAOAFQg7A7gvBFQgIgCgJABQgMAAgLADQAthMA4g/gAA/h3IAAAAg");
	this.shape_1.setTransform(-3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("AixEfQAPg0AWgzQAGAJAFAKIAGAOQgOAfgEAogAiBDLQgFgKgGgJQAdhAApg8QAJALAHASQgnA6geBGIgGgOgAiMC4IAAAAgAg2BZQgHgSgJgLIAWggQAlgwAqgpQAwgwA5gnIAIgGIgEgWQgHg0AGguIAZgNQgCBGAGAwQAEAbAGAVIgYALIgQAKIABgSQAAgPgDgPQADAPAAAPIgBASQgyAggqAoQgEgTgLgOQALAOAEATQg3AzgtBCIAAAAgAhGA8IAAAAg");
	this.shape_2.setTransform(5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjIEZQAThDAfhAQANgbAOgaQAXgoAaglQAvhFA7g7IAdgcQAygvANgQQALgNAHgMQAKgRAFgRQATgMAUgKQgGAtAIA0IADAXIgIAGIgEgPQgOgoghgPQAhAPAOAoIAEAPQg4AmgxAwIgEgGQgUgXgggLQAgALAUAXIAEAGQgqAqglAwIgWAgIgCgDQgOgQgUgJQgNgFgMgBQAMABANAFQAUAJAOAQIACADQgpA7gcBBQgGgIgHgGQgOgLgSgDQgMgBgLABQALgBAMABQASADAOALQAHAGAGAIQgWAygPA1gADBiaIAAAAg");
	this.shape_3.setTransform(-0.8,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AC1htQgBgUgFgqQAAgBgDgXQgBgDAAgDQAAgCgBgCQgKhDgShCQgKgigKgiQBDAmBNgGQAuB/AIBzQACAUAAATQACBdgYBVAC1htQA4AlA1gKQAQgDAQgIACfA9QAYgyAAg6QAAgPgBgQQAAgPgBgQACfA9QANAMAOAIQAjATAogFQATgCAUgIQgIAdgLAcQgiBYhXA7QgOAKgQAJIAAABQhJAphmAYAhcDqQAdAUANAZQAHAQACARQABALABAKQABAigHAHQgCABgBAAQhgAXh7AJIg3iQIARgCQA0gEA8gHQAVgCAYgDQACAAADAAQAZgFAagGQAugMAxgSQAjgOAegVQAOAGARAPQACABABACQAYAWAJAbQADAJACAKQAGAlgQAKABECpQAkgaAcglQAQgVALgY");
	this.shape_4.setTransform(-15.3,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AlCEHIARgCQA6gGAzgKIADAFQAZA2gNA1QBIgCBGgWIAAALQAAAYgGAGIgDABQhgAXh7AJgAkxEFIBwgLIhwALgAgnFYIAAgLQAggKAfgOQA9gcAygnIAFATIABASQABAWgMAHIAAABQhJAphmAYQAGgGAAgYgAgnFNIAAAAgACCE0QAMgHgBgWIgBgSIgFgTQAqghAigpQAfglATgkQATgkAHgiQAJgqgFhAIgBgBQAQgDAQgIQACBdgYBVQgUAIgTACQATgCAUgIQgIAdgLAcQgiBYhXA7QgOAKgQAJIAAAAgACHDyIAAAAgAEsBVIAAAAgAEihSQgCgSgCgyQgZANgogJQgpgJgFgPQACAVgBAAQgCgZgDgbIgBgEQgMhbgkhuQBDAmBNgGQAuB/AIBzIACAnQgQAIgQADgACviqIAAgBIgDgYIgBgGIABAGIADAYIAAABg");
	this.shape_5.setTransform(-15.3,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#747474").s().p("AiKCzQgTgJgRgdIAzgLQAcAUANAaQgWAGgQAAQgKAAgIgDgAhSCwIAAAAgAh7CCQAtgMAygSQAigOAfgVQAOAGARAPQgRgPgOgGQAjgaAdglQAPgUALgYQANAMAPAIQgPgIgNgMQAYgyAAg7IAAgeQAJAMAHASQALAhgEAjQgEAegPAfQgQAdgYAfQgXAagYAWQhAA4hPAfIgHADQgNgagcgUg");
	this.shape_6.setTransform(-12.1,28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AjyCdIAtgEIAFgBQARAdATAJQAUAIAlgLIAHgDQBQgfA+g4QAZgWAWgaQAZgfAPgdQAPgfAFgeQAEgjgMghQgGgSgKgMIgBgfIAEACIABABQApAZAoABIAAAAIAAAAQALAAALgCIABgBIABABQAFBAgJArQgHAigTAjIgQABIAAAAIgBAAQgfAAgbgOQAbAOAfAAIABAAIAAAAIAQgBQgTAkgfAlQgiApgqAhQgJgbgYgWIgDgDIADADQAYAWAJAbQgyAng8AcQggAOggAKIgCgVQgCgRgHgPQAHAPACARIACAVQhGAWhIACQANg1gZg2gADUACIAAAAgAB/ixIABgbIgBgmQAAAAgBgVIAGA+IABAfIgGgHgADaisQgogBgpgZIgBgBIgEgCIgGg+QAEAPAqAJQAoAKAZgOQACAyACASIgBABQgLACgLAAIAAAAIAAAAgAB+kHIAAAAg");
	this.shape_7.setTransform(-10.4,27.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABAlLQAEgYAEgZQALg8AGg9QABAAAAABQAlAWAqAKQAiAJAhgBQgHBUgOBSAAFhkQAfhjAVhlQABgEABgEQACgLADgMQAqAdAyAIQAHABAGAAQAYACAWgDAAFhkQAeAPAbAIQAIACAIACQAKACAKABQAHAAAHABQAbAAAagGAg9BRQABAAAAAAQAjgGAgAGQAFABAFACQADAAADABQARAEAQAIQAQAIAPALQAFAEAFAEQAQgoAOgoQAVg6ARg9QAfhsAThvAg9BRQAYg5AVg6QAMghAJghAibEVQAOgBANABQATABASAEQAIACAHACQARAFAPAIQACAAABABQAYAMATASQA1hkAqhqAibEVQgRAfgSAeQAAABgBABQgGAKgFAKQgRAagQAaQAvAQArAdQACABACACQAeAYAMASQAXgiAVgkQAfgyAag0AibEVQA0hfAqhl");
	this.shape_8.setTransform(-8.8,35.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#747474").s().p("AiRFAIABgCIAjg9IARAAIAAAAIABAAIAEAAIAFAAQATABASAEIgCADQgaAhgcAPQgRAIgSAAIgJgBgAgtEGIAAAAgAhSEBIgFAAIgEAAIgBAAIAAAAIgRAAQA0hfAqhkIABgBIACAAQAPgDAPAAIABAAIAAAAQARAAARAEQgRgEgRAAIAAAAIgBAAQgPAAgPADIgCAAIgBABQAXg6AVg6IAWhCQAdAPAcAIQgcgIgdgPQAfhjAVhlQAfATAJAeQAFARgDAXQgCAPgIAaQgMAtgPAwIgBADQgWBHgdBNIgDAIIgBACQgVA4gPAiQgYA2gcApIgJANQgSgEgTgBg");
	this.shape_9.setTransform(-13.4,37.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4C").s().p("AiNHMIgEgDQgrgdgvgQIAhg0QAxAMAsAXIAGADQAhgwAdgyQAYAMATASQgaA0gfAyQgVAkgXAiQgMgSgegYgAACFKQgTgSgYgMQA3hhAqhqIANgiQAZhBAShDQAfhwANhxIAGg4QgTgBgWgFQgWgHgbgRQALg8AGg9IABABQAlAWAqAKQAiAJAhgBQgHBUgOBSIgBAAIgbACIAAAAIAAAAIgSgBIgNgBIANABIASABIAAAAIAAAAIAbgCIABAAQgTBvgfBtIgDAAIAAAAIgFABQgTAEgUAAIAAAAIAAAAIgDAAIAAAAIgCAAIgBAAIABAAIACAAIAAAAIADAAIAAAAIAAAAQAUAAATgEIAFgBIAAAAIADAAQgRA8gVA6QgOAogQAoIgKgIQgPgLgQgIQAQAIAPALIAKAIQgqBqg1BkIAAAAgAgpEsIAAAAgABhB8IAAAAg");
	this.shape_10.setTransform(-8.8,35.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AhYGCQgtgXgxgMIAMgTQAXACAVgKQAcgOAagiIACgDIAJgNQAcgoAZg2QAOgjAVg3IABgDIADgIQAdhMAWhIIABgDQAPgwAMgtQAIgZACgPQADgXgFgSQgJgdgfgUIACgHIAEgXIAJgxQAaAQAXAHQAVAGAUAAIgGA4QgygIgrgcQArAcAyAIQgOBygeBvIgOgBIgUgDIgQgEIAQAEIAUADIAOABQgTBDgYBBIgOAiQgPgHgRgEIgGgCIgKgCIAKACIAGACQARAEAPAHQgqBqg2BhIgDgBQgQgIgQgFIgPgEIAPAEQAQAFAQAIIADABQgdAzghAvIgGgDgACxkvIAAAAg");
	this.shape_11.setTransform(-10.9,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-29.8,47.6,59.6);


(lib.db_armL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABKiiQgYgDgWAJQgHADgGADQgeAQgTAjQgCADgCAEQgHAOgDARQgsgog1ggAC3gjQgBAAgBAAQgXgJgYAEQgIABgIADQgPAFgOAJQgUANgNAUQAAAAgBABQgKAPgFAQQgng5gxgvAC3gjQgGgIgGgIQgxg/gwgwQg5g5g4gjQgJgGgKgGQgUgMgWgKQgXgMgagKQgZgKgjgJQglAegwBlQAmAMAfANQArASAlAWAEHCQQgQgKgTgEQgGgBgFAAQgWgBgWAIQgTAHgPAMQgHAFgGAHQgJAJgHAMQgchQgqhBAEHCQQAWBSAKBnQgPgHgQgFQgDgBgDAAQgbgHgaADQgGAAgGABQgdAEgYANQgLhVgTg5AEHCQQgdhqgzhJAg6kKQgGACgHADQgNAFgKAJQgJAHgHAKQgQATgIAXQgHASgCATQgBAJgBAJ");
	this.shape.setTransform(-0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("ACgC8QgbhQgqhBQgng5gygvQgsgog0ggIABgSQADgTAGgSQA2AoAuAxIgEAHQgHAOgDARQADgRAHgOIAEgHQAxAzAqA7IgBABQgKAPgFAQQAFgQAKgPIABgBIAUAdQAjA4AcA7IgNAMQgJAJgIAMQAIgMAJgJIANgMQAjBNATBRQgdAEgYANQgLhVgUg5gAC+CbIAAAAgABrALIAAAAgAAQhjIAAAAgAiuitQgfgNgmgMQAwhlAlgeQAiAJAaAKQgoAggOArQAkAWAgAZQgGASgDATIgBASQglgWgrgSgAhUi8IAAAAg");
	this.shape_1.setTransform(-5.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADkE5QgbgIgaADIgMACQgThRgjhNQAPgNATgGIABgBIAGgCQAPgEAOAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAQgOAAgPAEIgGACIgBABQgTAGgPANQgbg7gkg4IgUgdQANgUAUgNQAOgJAPgGQgPAGgOAJQgUANgNAUQgpg8gxgzQgvgwg1goQAIgXAQgTQAHgKAJgHQgJAHgHAKQgQATgIAXQghgagkgVQAPgrAnggQAaAKAXALIgHAAQgPACgMAKIAoAeQA8AwAyAxQgfAQgTAiQATgiAfgQQA5A4AtA5IAVAcQAvBDAfBHIAMAfQAdBPAGBOIgGgBgAgOiZIAAAAg");
	this.shape_2.setTransform(2.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#747474").s().p("AC4EpQgGhOgdhPIgMgfQgfhHgvhDIgVgbQgsg5g6g5Qgygxg8gwQAKgJANgFQAHgDAGgCIATAMQA5AjA5A5IgLgBIAAAAIgBAAQgPAAgPAGIgDABIgBAAIgNAGIANgGIABAAIADgBQAPgGAPAAIABAAIAAAAIALABQAvAwAxA/IAMAQIgCAAIgCgBIAAAAIAAAAQgPgFgOAAIgBAAIAAAAIgNABIAAAAIgCAAIAAAAQgIABgIADQAIgDAIgBIAAAAIACAAIAAAAIANgBIAAAAIABAAQAOAAAPAFIAAAAIAAAAIACABIACAAQAzBJAdBqQgQgKgTgEIgLgBIALABQATAEAQAKQAWBSAKBnQgPgHgQgFgAjWkpQAMgKAPgBIAHAAQAWAKAUAMQgGACgHADQgNAFgKAJIgogeg");
	this.shape_3.setTransform(7.8,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACfjmQgbgZgjgXQhUg2hZgmQg+gbhBgUQgagHgegIAAkiIQAKgUARgRQAGgHAIgGQALgJANgIQAUgNAXgKQAHgDAIgBAAkiIQgcgbgmgYQg1ghgzgYQACgbAJgaQAHgUAMgSQACgEACgDQALgQANgMAD9A/QgRgRgUgLQgXgMgagFQgYgEgbADQgEAAgFACAD9A/QAAgCAAgCQABgEABgEQAFggAAgbQAAiChlhcAA4DgQADgFACgGQAbhOAOhEQAFgZAAgXQAAgKgBgJQgHhLg/g9AC+EZQgLgMgMgJQgXgSgdgHQgOgEgQgCQgMgCgMgCQgCAAgDgBAC+EZQgCAFgCAGQgTAvgYAxQgLAWgMAXQgLgIgNgGQgDgCgEgCQgygWgygHQAMgbALgaQAKgVAIgVQAPgiALghAC+EZQAshwAThqAiGj0QgNgGgNgGQgSgIgSgHQgjgJgPgC");
	this.shape_4.setTransform(3.3,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("ABkGjIgHgEQgxgWgzgHIAYg1QATAEAQAFQApAMAfASQAbg3AUg5QAMAJALAMIgEALQgTAvgXAxIgXAtQgMgIgNgGgACrEEQAYhGAPhKQAJgvABgiIAAgBQACgrgKgkQgThHhPhOIgJgJQhahVhvg2QALgQAOgMQBYAmBUA2QAjAXAbAZIgPAEQgXAKgUANQAUgNAXgKIAPgEQBlBcAACCQAAAbgFAgIgBAIIgBAEQgRgRgUgLQAUALARARQgTBqgsBwQgLgMgMgJgACrEEIAAAAgAjxkaQgPgBgFgqQgGgnAMhEIA4APQBBAUA/AbQgOAMgLAQIgHgEQgygYg0gQIgBAMQgFA2ATAxQgjgJgOgCg");
	this.shape_5.setTransform(2.9,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAuFdQgQgFgUgEIASgpIAKADQARAFAPgIQAWgLASgoIADgGQAag8ANg1QAOg1AAgVIgBgdQAaAEAXANQgCAhgIAvQgPBKgYBGQgXgRgdgIQAdAIAXARQgUA6gbA3QgggTgogMgAClAaQgLhYhHhRIgWgXIAOgMIAYgRIgYARIgOAMQg1gzhag4QgYgQgTgBQAHgTAMgTIAEgHIgEAHQgMATgHATQgKAAgJAEQgQAKgCAXIAAAEIgkgOQgTgxAFg3IABgMQA0ARAyAYIAHADQBvA3BaBVIAJAIQBPBOATBIQAKAkgCArIAAABQgXgNgagEgAClAaIAAAAg");
	this.shape_6.setTransform(3.5,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747474").s().p("AAkEoIgJgEQAOgiAMghIAFABIAYAEQAPABAPAEIgDAHQgSAogWALQgKAEgKAAQgGAAgHgBgABwDrIAAAAgABSDmIgYgEIgFgBIAEgLQAchOANhEQAFgZAAgXIgBgTQgHhLg/g9QAKgUARgSQgRASgKAUQgcgbgmgYQg1ghgygYQABgcAKgZQgKAZgBAcIgbgMIABgEQACgYAQgJQAIgFALABQASAAAYAQQBaA4A1AzIAWAXQBHBSALBXIACAeQAAAUgOA1QgOA1gZA8QgPgEgPgBgABxASIgKACIAKgCIAUgBIAAAAIAAAAQAQAAAOACQgOgCgQAAIAAAAIAAAAIgUABIAAAAg");
	this.shape_7.setTransform(3.6,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-34,61,68.1);


(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(-822.8,-525.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-822.8,-525.2,1644,1046);


(lib.bbb_hologram = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// robot10-1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-229,-112);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},2).wait(28));

	// robot10-2
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-84,-192);

	this.instance_2 = new lib.Bitmap3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-107.7,-192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229,-192,488,384);


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.8,-354.4,847.9,709);


(lib.T_features = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_mouth
	this.instance = new lib.T_mouth("single",0);
	this.instance.parent = this;
	this.instance.setTransform(17.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:15.5,y:19.5,startPosition:1},0).to({_off:true},1).wait(1).to({_off:false,x:28.3,y:20.2},0).wait(1));

	// T_nose
	this.instance_1 = new lib.T_nose("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(1).to({_off:false,x:-13.6,y:1.8},0).wait(1));

	// T_eye
	this.instance_2 = new lib.T_eye("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.6,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(1).to({_off:false,x:34.4,y:-21.8,startPosition:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-31.5,91.3,61.5);


(lib.T_Arm_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T_hand_L("single",0);
	this.instance.parent = this;
	this.instance.setTransform(17.6,74);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACkqMQAaA3AxCkQATA+AWBgIAAAAQAEARAEASQA4EhAmEmQAlEcgDEgQgBAlAAAlQhIgTg7gEQgbgBgZACQg+AEgzAZQgJAEgJAFQgBABgBABQjuugkUqPQgBi+Aei8QA9gjBOgLQA6gJBGAFQBVA2A6BGQBbCBAxBjg");
	this.shape.setTransform(-3.6,-36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#585858").s().p("ACAJ5QgbgBgZACQg/iigoipQg6jvgJjxIBhAMQhNjGg5iEQg5iDgDgdQCdAzCmAfQA4EiAnElQAlEcgEEfIAABLQhJgTg7gEgAkDonIACgCIgCAFIAAgDg");
	this.shape_1.setTransform(12,-2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AlbpAQgBi+Aei8QA9gjBOgLQA6gJBGAFQBUA2A7BGQBbCBAxBjQAaA3AxCkQATA+AWBgIlChXIibjTQgMBLACBMICHIrICtNoIgCACQjuugkUqPg");
	this.shape_2.setTransform(-10.4,-36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#424242").s().p("AhwhSIiHosQgChMAMhLICcDTIFBBXIAAAAIAAAAIAFADIAEACIgJgFIAIAjQingeicg0QADAeA5CDQA4CDBNDHIhigNQAKDxA5DwQApCpBAChQg+AEgzAZIgSAKgAiQmxQABAGABgJg");
	this.shape_3.setTransform(0.4,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ak8iCQATgCA+gUQA+gTAqgQQDnhUCXg/QCYg+AjgMQABBVAIAzQAIAzAhAoQALAMAnAoQAHAHAIAHQABABABABQluFDleCpQhGAnhBgLQgpgYgwgtQg1g0g8hWQgdgzgbgx");
	this.shape_4.setTransform(37.3,-34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AknEEQgrgYgvgtQg1g0g9hWIg3hjIBGhIQAeBYAMAEICBCeICAAcQFbiUGHkSIACACQluFDleCpQg3Afg0AAQgOAAgNgDg");
	this.shape_5.setTransform(37.3,-19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#424242").s().p("AlbDZIiCigQgLgEgehWIBVhOQAzCRB7BaQCignDJhYQDKhaCTiXIAzA0IAPAPQmIERlaCVg");
	this.shape_6.setTransform(40.7,-28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#585858").s().p("Am6A+IBShRQATgCA+gTQA+gUAqgQQDmhUCYg/QCYg+AjgMQAABVAJAzQAIAzAgAoQiTCWjKBaQjJBZihAnQh8hagyiSg");
	this.shape_7.setTransform(41.7,-45.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhbIzQijm1htkCQgBi+Aei9QA9gjBOgLQA6gIBGAFQBUA1A7BGQBbCCAxBjQAaA2AxCjQATA/AWBfIAAABQAEAQAEASQAMBCAMBC");
	this.shape_8.setTransform(-8.8,-80.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#585858").s().p("AhtgRQgbjHgDgeQCcA0CnAeIAYCEQgLBEgSBbQgSBchkALIhnARQg9jcgGgsgAjPiNIABgDIgBAFIAAgCg");
	this.shape_9.setTransform(6.8,-43.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhLIEQijm1htkCQgBi+Aei9QA9gjBOgLQA6gIBGAFQBUA1A7BGQBbCCAxBjQAaA2AxCkQATA+AWBfIlChXIibjRQgMBLACBMQAwDGCLG1g");
	this.shape_10.setTransform(-10.4,-75.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#424242").s().p("Aj3jyQgChMAMhLICcDTIFBBXIAAAAIAAAAIAFADIAEACIgJgFIAIAjQingeicg0QADAeAbDGQAGAtA8DcIhQArQiMm0gwjIgAiQglQABAGABgJg");
	this.shape_11.setTransform(0.4,-54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("AkjhEQAPgNApgzQAogyAcglQA6hPAyhGAFrleQgiFWjSEWQglBHg8AbQgvADhBgLQhJgOhhgnQg1gbgxgZ");
	this.shape_12.setTransform(71.6,-57.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("Aj0EBQgLADhKg5IAdhvQB6BeCZAHQBxh5BFiJQBFiKAthyIA7AIQhbFKilD6Ih5Avg");
	this.shape_13.setTransform(70.2,-62.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AhaFiQhJgOhhgmIhmg1IAThjQBJA4AMgCIDEA9IB6gvQCkj5BblLIAwAHQgiFWjSEWQglBGg8AcIgUAAQgoAAg0gJg");
	this.shape_14.setTransform(71.6,-57.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#585858").s().p("AkdCcIAXhxQAPgNApgyQAogyAcglIBtiVIE7ADQgtByhFCKQhFCJhxB5QiZgHh6heg");
	this.shape_15.setTransform(68.7,-69);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEpIMQjoiGiUiNQiUiNh+hzQhXipg6i2QAmg7BBgtQAvgiBBgbQBjAJBVAkQCLBKBYBCQAwAlB3B7QAsAuA/BKIAkAvAGvgPQAGAHAVAbQAEAGApA1");
	this.shape_16.setTransform(5.7,-84.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("Ah3ACQhPhUgzg8QgkhCgYhJID7CfQB7gHCtgrQAmgJAKgHIgDgEIAbAjQhmBKjSAdQAOASAdApQASAZAoAiQAoAhCpB3IhbBCQjSiQh+iIgAhBgGQABABABABQAAAAAAAAQAAgBAAgBQgBgBgBgCg");
	this.shape_17.setTransform(20.5,-67);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#585858").s().p("AhHAjQgpgigRgXQgdgrgPgSQDSgdBmhKIAtA7QAQAyATA/IAMAqQAZBZhUA5IgjANQioh3goghgAjsgjIAAgDIACAFIgCgCg");
	this.shape_18.setTransform(37.6,-64.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgwD5QiUiNh+hzQhXipg6i2QAmg7BAgtQAwgiBBgbQBjAJBVAkQCLBKBYBCQAwAlB2B7QAsAuBABKIAjAvQgKAHglAIQiuArh7AHIj6ieQAXBJAkBBQAzA8BOBVQB/CIDSCQIhDBBQjoiGiUiNg");
	this.shape_19.setTransform(2.2,-84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:0,rotation:0,x:17.6,y:74,startPosition:0}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:0.2,rotation:-116,x:102.5,y:-68.3,startPosition:1}}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance,p:{regY:0.4,rotation:-154.4,x:103.8,y:-123.8,startPosition:2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-137.7,92.4,275.4);


(lib.sprks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.sparkup("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:23},90).wait(1));

	// sprkdown
	this.instance_1 = new lib.sprkdown("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-41.5,x:0,y:0},90).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.9,-190.7,401,386);


(lib.orbs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-207.1,-214.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(179));

	// Layer 2
	this.instance_1 = new lib.sprks("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2.5,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(179));

	// orbback
	this.instance_2 = new lib.Bitmap13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-269.4,-269.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(179));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.4,-269.4,542,542);


(lib.monster_planet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.p3m_arm("single",0);
	this.instance.parent = this;
	this.instance.setTransform(273,1.9,1,1,135.8,0,0,-168.2,-12.8);

	this.instance_1 = new lib.p3m_arm("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-254.7,-39.3,1,1,0,-114.8,65.2,-168.2,-12.8);

	this.instance_2 = new lib.sack_of_candy("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.3,51.1,1,1,-3.9,0,0,33.9,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},2).to({state:[]},1).wait(3));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AAA081").ss(1,1,1,3,true).p("AlVP3QAYAjAaAkQB0BEBrAYQAGABAGABQBTARBQgJQAbgEAagGQAcgHAcgKQA2gUA0giQB3hOBChhQBWh+gFigQgwgngtgoQhWhPhGhRQgMgOgLgNQhlh7hCiCQggg/gXhAIAAAAQgphugRhzQgaizAei/QACgJABgKQAGgfAGgfIAAgBQABgDABgCQAwjVBzjjQANgZAOgaQAAgBABAAQAEgJAEgHQgKAFgKAFQjqB7ioCxQgVAXgVAXQhuB9hPCXQgBACgBACQAAAAAAABQAAABgBABQhXCogzDIQgyDJAADAQABATAAASQAAAGAAAHQAEBpATBmQA0EdCrEHg");
	this.shape.setTransform(-42.6,-370.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEgmSQAZgHAXgFQABgBACAAQABAAABABQABgBABAAQADgBADgBIABAAIABgBQAEgBACgBIAAgBIArgBIAAgBQACAAABAAQBegFA9ApQAlAYAZAqQBHBzg5CDQgQAmgbAmIAAABQgCABgBADAokAtQgeAVgWAVQgEADgDADQgDAEgDADQgCACgCACQgjAygFAbQAAACAAABQgFAhAOAiQAPAjAgAfQBAA8CDAqQAIAEAIAC");
	this.shape_1.setTransform(-21.9,-273.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EEC855").s().p("AgIASIAAgjIARAjg");
	this.shape_2.setTransform(-100.5,-347.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EED078").s().p("AAWE1IgYhAIADgCIAAABQAXBAAgA+IgEACIgeg/gAg3lfIAGgUIgDAUg");
	this.shape_3.setTransform(-33.3,-394.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EFEDE8").s().p("AB/KxQgwgcgghgQgdhXALgUQAEgHAFgBQAOgGASApIABAEIAAAAIAZBBIAeA/QAbA4gGALIgFAGQgCADgEAAQgEAAgFgEgAgtE4QgphbAOAPQAPANgFhTQgEhUAShYQARhXAlhRQAnhRgHA6IAAADIgCAFIAAABIgMA+IgGATIgOAvQgYB4ADCHQAEAnAHA4QAIAoAHAUQAIAUADAMQADAMgOAEIgCAAQgNAAgnhWgAjjlaIAqguQCpixDph7IALAHIgbAzQgbAXgrAdIhvBKQgcAXhjBXQhGA1goAAIgKgBg");
	this.shape_4.setTransform(-40.7,-418.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEDEB3").s().p("AgJACIATgJIgJAPIAAABg");
	this.shape_5.setTransform(-17.9,-488.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EEE0B5").s().p("AgxO8Qh4hGibkiQgnhKhGiQIgSglQAAjAAxjJQAzjIBXioIABgCIABgBIABgEQBPiXBuh9QAqAIBNg8QBjhXAegXIBvhKQAqgdAcgXQh0DjgvDVIgBgDQAIg6goBRQgmBRgRBXQgSBZAEBUQAFBTgPgNQgOgPApBbQAqBZANgEQAOgEgDgMQgCgMgJgTQgHgUgIgoQgIg4gEgnQgDiHAZh5IAOgvIADAAQgdC/AZCzQARByApBvIgEABIAAAAIgBgEQgSgpgNAGQgGABgDAHQgMAUAeBXQAfBgAwAcQAKAGAFgFIAFgGQAHgLgcg4IAEgCQBDCCBkB7IgIBFQgVB6glBBQgNAWgZAhQguA5gxAnQhcBKhZAAQg+AAg7gkgAi1hwQgMACgKAQQgJAPgIAjIgDATQgLBCAfASQATALALgLIAIgNIgNhyQAKgsgMAAIgBAAgAhLn5QgaAIgUAiQgTAigqBxQgrByAlAVQAKAFAIABQAIAAAJgEIALgMQAFgIARhXQAShcAMgeQAnhhgVAAIgDAAg");
	this.shape_6.setTransform(-56.2,-383.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AF2F2F").s().p("AjSDaIgQgGQiDgrhAg7QgggggPgiQgOgiAFggIAAgDQAFgbAjgzIAEgDIAGgHIAHgHQAWgUAegVIAyBHQB0BEBrAYIAMACQBTAQBQgJQAbgEAagFQAcgHAcgKQA2gUA0ghQB3hOBChiQgYBPg2BOQgUAbgXAcQg0A9hKA/QhaBNhPAoQguAXgtANQhbgDhcgYg");
	this.shape_7.setTransform(-39.9,-252.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3C394").s().p("Ag4OHIgMgCQhrgYh0hEIgyhHQirkHg0kdQgThmgEhoIAAgNIARAAQBGCPAoBKQCaEiB5BGQCTBWCbh8QAxgnAtg5QAaghANgWQAlhBAVh6IAIhFIAXAbQBGBRBWBPQAtAoAwAnQAFCghWB+QhCBhh3BOQg0Aig2AUQgcAKgcAHQgaAGgbAEQgdADgdAAQgzAAg2gLgAlTlcQgfgSALhDIADgTQAIgjAJgPQAJgQANgCQANgBgKAtIANBzIgIANQgGAFgHAAQgIAAgJgFgAkypHQgJgBgJgFQglgVAqhyQAqhxAUgiQAUgiAagIQAagGgpBnQgMAegTBcQgQBXgFAIIgMAMQgHAEgIAAIgBAAg");
	this.shape_8.setTransform(-42.6,-342.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#582938").s().p("AgBABIADgBIgCABIAAAAg");
	this.shape_9.setTransform(13.3,-315.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E03C3C").s().p("AmxG2QAugMAugXQBQgoBahNQBKg/A0g+QAXgcATgbQA2hOAXhOQBWh+gEigQgxgngtgoIAwgNIADAAIACAAIADgBIAGgCIABAAIABAAIAFgDIAAAAIArgCIAAAAIAEgBQBdgFA9ApQAlAZAZApQBHBzg4CDQgQAmgbAoIAAAAIgEAEIgDAEIgNAPIgGAGIgBACIgBABQloGhmIAAIgTAAg");
	this.shape_10.setTransform(0.7,-271.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CB3737").s().p("AAzDtIABgBIABgCIAGgGIANgQIADgDIAEgEIAAgBQAbgnAQgmQA4iChHhzQgZgqglgYQg8gphdAFIgEAAIAAABIgrABIAAABIgFACIACgCIgEADIgGACIgDABIgCgBIgDABQgBgBADgJQAEgOBKgGQBJgGBMA0QBNAzAYA+QAZA+gCAyQgCAygXAsQgXAsgRARQg8A5gEAAQgBAAAEgFg");
	this.shape_11.setTransform(29.4,-293.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFQlqQAagEAYgCQACgBABABQABAAABAAQABgBACABQADgBACgBIABAAIABAAQAEAAACgCIAAAAIAsAEIAAAAQACAAABAAQBdAGA4AxQAiAcATAtQA4B7hJB5QgUAkggAkIAAABQgCABgCACAokgWQghAQgZARQgDADgEADQgDACgEAEQgCABgCACQgqAugIAaQgBABAAACQgJAgAKAkQALAjAcAjQA3BEB9A7QAIAEAHAD");
	this.shape_12.setTransform(-21.2,-302.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#AAA081").ss(1,1,1,3,true).p("AmWOvQATAmAWAnQBqBSBnAmQAGABAGACQBRAbBQABQAagBAbgCQAdgDAdgHQA4gOA4gaQCAg/BNhYQBlhyAQigQgrgsgoguQhLhZg7hYQgKgQgKgPQhUiGgyiKQgYhCgOhBIAAgBQgbhygDh1QgDi0A2i6QADgJADgKQAJgeAKgeIAAAAQABgDACgDQBKjNCPjSQAQgYARgYQAAAAABgBQAFgIAFgHQgLAEgKAEQj4Bci+CbQgXAUgXAUQh9BvhhCMQgBABgBACQgBAAAAABQAAABgBABQhsCchLDAQhLDCgYC+QgCASgCASQgBAGgBAHQgJBoAGBpQAQEhCJEag");
	this.shape_13.setTransform(-35.5,-398.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AF2F2F").s().p("Aj7CuIgQgIQh8g7g4hDQgcgjgKgjQgKgkAJggIAAgDQAJgaApguIAFgDIAGgGIAIgGQAZgSAggQQATAmAWAnQBqBSBnAmIAMAEQBRAZBQABIA1gCQAdgDAdgHQA4gNA4gbQCAg/BNhYQghBMhABGQgWAZgbAZQg7A1hSA2QhiBBhUAdQgwASgvAGQhagOhYgjg");
	this.shape_14.setTransform(-40.1,-282.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEC855").s().p("AgIARIAFgjIALAlg");
	this.shape_15.setTransform(-90.1,-385.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EED078").s().p("AgEE1IgQhDIAEgBIAAAAQAOBDAXBCIgEABQgJgegMgkgAABlkIAJgSIgGATg");
	this.shape_16.setTransform(-18.5,-424);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EEE0B5").s().p("AiiOTQhvhVh0kzQgfhOgziYIgNgnQAYi/BLjAQBLjBBsicIABgCIABAAIACgEQBhiMB8huQAoANBWgyQBthKAggSIB3g8QAugYAegTQiPDThKDNIAAgDQAOg4gwBLQgxBLgbBUQgeBXgGBTQgFBUgNgQQgNgQAeBfQAdBeAOgCQAPgDgCgMQgBgMgFgUQgFgVgEgpQAAg4ABgnQAOiGAoh2IAUgsIADABQg2C5ADC1QADBzAbBzIgEABIgBgBIAAgEQgNgqgOAEQgFABgFAGQgOASASBaQAUBjAsAiQAJAHAGgEIAFgFQAIgKgUg8IAEgBQAyCKBUCGIgRBDQgjB3guA7QgPAVgeAdQgzAzg3AhQhUA0hMAAQhMAAhEg0gAi3iTQgLAPgMAhIgFATQgUBBAdAUQARANANgJIAJgLIACh0QAQgrgOAAQgNAAgLAOgAgEoaQgbAEgYAgQgYAfg4BrQg4BrAiAaQAJAHAIABQAJACAIgEIAOgKQAFgIAbhUQAehZAQgbQAzhfgXAAIgBAAg");
	this.shape_17.setTransform(-42.1,-413);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3C394").s().p("AiQOCIgMgEQhngmhqhSQgWgngTgmQiJkagQkhQgGhoAJhnIACgOIARADQAzCXAfBOQB0EzBvBVQCIBoCohoQA3ghAzgzQAegdAPgVQAug7Ajh3IARhDIAUAeQA7BZBLBZQAoAtArAtQgQCfhlBzQhNBYiAA/Qg4Aag4ANQgdAHgdAEIg1ACQhQAAhRgbgAkMl8QgdgVAUhBIAFgTQAMghALgPQALgOANAAQAOAAgQArIgCB0IgJAMQgFAEgGAAQgIAAgLgIgAjOphQgIgBgJgHQgigaA4hrQA4hrAYgfQAYggAbgEQAagDg1BiQgQAbgeBZQgbBUgFAIIgOAKQgGADgFAAIgGgBg");
	this.shape_18.setTransform(-35.5,-374.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E03C3C").s().p("AnWGKQAvgHAxgRQBUgeBihBQBSg1A7g3QAbgZAWgYQA/hHAhhKQBlhyAQigQgrgsgoguIAygGIADAAIACAAQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAABIAGgCIABABIABgBIAGgBIAAgBIArAEIAAAAIAEAAQBdAGA3AxQAiAdATAsQA4B7hIB7QgVAigfAkIAAABIgEADIgEADIgPAOIgHAGIgBABIgBABQlqFGlZAAQg4AAg2gIg");
	this.shape_19.setTransform(-0.4,-299.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CB3737").s().p("AAID1IABgBIABgCIAHgFIAPgOIAEgDIAEgEIAAAAQAfgkAVgkQBIh7g4h6QgTgsgigdQg3gwhcgHIgEAAIAAABIgrgEIAAAAIgGACIACgCIgEACIgGABQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAIgCgBIgDAAQgCgBAFgIQAGgOBJAEQBJADBFA9QBGA8AQBBQARBAgIAyQgIAygdAoQgcApgTAPQhCAwgEAAQgCAAAFgEg");
	this.shape_20.setTransform(33.5,-316.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EFEDE8").s().p("AgZKmQgrgigUhjQgShbAOgSQAFgGAEgBQAPgEAMArIABAEIAAAAIARBEQAMAjAKAfQATA7gHAKIgFAGQgCABgDAAQgEAAgHgEgAiUEaQgehfANAQQANAPAFhTQAGhTAehWQAbhVAwhKQAwhMgOA4IAAADQgCADAAADIAAAAIgTA8IgJATIgVAsQgoB0gNCGQgBAnAAA5QAEApAEAVQAGAUABAMQACANgPACIgBAAQgOAAgchcgAj2mKIAvgoQC+ibD3hcIAKAIIgiAwQgeATgtAXIh4A8QgeAThtBJQhEAogoAAQgKAAgIgDg");
	this.shape_21.setTransform(-15,-447);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EEDEB3").s().p("AgKAAIAVgHIgLAOIAAABg");
	this.shape_22.setTransform(9.8,-515.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:13.3,y:-315.1}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_9,p:{x:18.9,y:-339.5}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[]},1).wait(3));

	// Layer_4
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A05523").ss(1,1,1,3,true).p("AkwgoQgBABAAADIgCAHQgCAEgBAEQgqCJggB9QAAABAAAAQiNImA4EzQBUk1Cjj8QAcgsAggrIAAAAQABgDACgCQABABABACQABADABADQADAGADAHQAFAMAEALQAOAiAOAiQAHAQAHARQCjGZBaFcQAIAfAHAeQADANADANQABgDABgCQAdhAAVhCQAAgCABgCQAJggAJghQA4jpgqj+QgKg9gQg9QgBgDAAgCQgHgbgIgbQgBgEgBgEQgBgDgBgCQgBgEgBgDQABABABACQAIAJAHAKQAIALAIAKQAKAPAKAPQAdArAaAwQABACABACQA7BsAqCBQAHAXAHAXQAQA3AOA6QAAgCABgDQAAgBAAAAQAAgEABgDQAAgIABgHQAEggADgfIAAgBQAFhIAAhIQAAjmg+jgQgBgCgKgkQgDgHgCgJQgCgGgCgGQgEgLgDgLQgMgkgNgiQgQgpgRgoQgwhwhBhuQgFgJgEgIQgGgIgFgJQgBgCgCgDQgegxghgyQgBgBgBgBQgCgDgCgDQBFAgBAAhQCnBXCEBZQA3AlAxAnQkUoakWlqQjbkgjeixQh7hih6g/QgngUgmgRQAMAcALAdQA7CaAhClQAeCYAJChQAKDMgZDaQgCAPgCAQQgnE5hwFYQCJhZBahjQBVhfAqhnIAAAAQAAgBABAAQACgHADgHQABgCABgBgAkqgyQABgBABAAIAAAAQgBABgBAAQgDADgDAGQAAAAAAABQACgFAEgFg");
	this.shape_23.setTransform(299.1,-51.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E57932").s().p("AGeQpIgPg9QhalcikmZIgNggIgchFIgKgWIgFgOIgDgGIgBgDIgEAFIAAABQggAqgcAsQiiD8hUE2Qg3k0CMolIAAgBQAgh9AriKIACgIIACgHIABgEIgCADIgFAPIAAAAIAAAAQgrBphVBeQhZBjiKBYQBwlXAok6IADgfQAZjagKjLQBzCLBPCoQBgDOAdDeIA3jIQBrE0gNFAQBEhBAkhcQBGJKAgJJIgBAEIgHgagAg8mBIAGgJIACgBIAAgBIgCACIgGAIIAAABIAAAAgAg8mBIAAAAgAg8mCIAGgIIgGAJIAAgBg");
	this.shape_24.setTransform(274.7,-16.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFB00").s().p("AHNTzIAAgBIABgHIAAAMIgBgEgADTLYQANAUACAiIgPg2gADRLQIgCgFIgCgHIACADIAPATIgNgKgAifJ7IACgDIAJAXIgLgUgAIrDYQkBnZlCkpQgcBmANBrQjzkekFkHQghilg7iaIgXg5QAmAQAnAUQB6BAB7BiQDeCwDbEgQEWFqEUIaQgxgng3glg");
	this.shape_25.setTransform(299.9,-67.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEAB03").s().p("AA+BKQgkBdhDBBQANlBhrkzIg3DIQgdjehhjPQhPinhziLQgIihgeiYQEFEHDyEeQgNhrAchmQFCEpEBHaQiEhainhXQhAghhFggIAFAGIABACQAhAyAfAxIADAFIAKARIAKARQBABvAxBwQARAnAPApIAZBGIAIAWIADAMIAFAQIALAmQA+DgABDmQAABIgGBIIAAABIgGA/IgCAPIgBAHIAAABIgBAFQgNg6gQg3IgPguQgqiBg6hsIgCgEQgagwgdgrIgVgeIgPgVIgPgTIgDgDIACAHIACAFIACAIIAPA2IAAAFIACAAQAPA9AKA9QAqD+g4DpIgSBBIgBAEQgVBCgcBAQghpIhGpLgABzBkIAKABIgMgCgAhbqlIAAAAIgBAAg");
	this.shape_26.setTransform(300.4,-32.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A05523").ss(1,1,1,3,true).p("AkwgpQgBACAAACIgCAIQgCADgBAEQgqCJggB+QAAABAAAAQiNImA4EzQBUk2Cjj7QAcgtAggqIAAAAQABgDACgCQABABABACQABADABADQADAGADAHQAFALAEAMQAOAiAOAiQAHAQAHARQCjGZBaFcQAIAfAHAeQADANADANQABgDABgCQAdhBAVhBQAAgCABgCQAJggAJghQA4jpgqj/QgKg8gQg9QgBgDAAgCQgHgbgIgbQgBgEgBgEQgBgDgBgCQgBgEgBgDQABABABACQAIAJAHAKQAIALAIAKQAKAPAKAPQAdArAaAwQABABABADQA7BrAqCCQAHAXAHAXQAQA3AOA6QAAgCABgDQAAgBAAAAQAAgEABgDQAAgIABgHQAEggADgfIAAgBQAFhIAAhIQAAjmg+jgQgBgCgKgkQgDgHgCgKQgCgFgCgGQgEgLgDgMQgMgjgNgjQgQgogRgoQgwhxhBhuQgFgIgEgIQgGgJgFgIQgBgDgCgCQgegyghgxQgBgBgBgBQgCgEgCgDQBFAhBAAhQCnBWCEBZQA3AmAxAmQkUoZkWlqQjbkgjeixQh7hih6g/QgngUgmgRQAMAcALAdQA7CaAhClQAeCYAJChQAKDLgZDaQgCAPgCAQQgnE5hwFZQCJhZBahkQBVheAqhnIAAgBQAAAAABAAQACgHADgHQABgCABgCgAkqgyQABgBABgBIAAABQgBAAgBABQgDADgDAFQAAABAAAAQACgEAEgFg");
	this.shape_27.setTransform(307.4,-39.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E57932").s().p("AGeQpIgPg9QhalcikmZIgNggIgchFIgKgWIgGgOIgCgGIgBgDIgEAFIAAABQgfAqgdAsQiiD8hUE2Qg3k0CMolIAAgBQAgh9AqiKIADgIIACgHIACgEIgDADIgFAPIAAAAIAAAAQgrBphUBeQhaBjiKBYQBwlXAnk6IAEgfQAZjagKjLQBzCLBPCoQBgDOAdDeIA3jIQBrE0gNFAQBEhBAkhcQBGJKAgJJIgCAEIgGgagAg7mBQACgEADgFIACgBIAAgBIgCACQgDADgCAFIAAABIAAAAgAg7mBIAAAAgAg7mCQACgFADgDQgDAFgCAEIAAgBg");
	this.shape_28.setTransform(283,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26,p:{x:300.4,y:-32.7}},{t:this.shape_25,p:{x:299.9,y:-67.7}},{t:this.shape_24},{t:this.shape_23}]}).to({state:[{t:this.shape_26,p:{x:300.4,y:-32.7}},{t:this.shape_25,p:{x:299.9,y:-67.7}},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_25,p:{x:308.2,y:-56}},{t:this.shape_26,p:{x:308.7,y:-21}},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[]},1).wait(3));

	// Layer 3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAxQhegDhDgQQhEgQACgUQAAgVBDgMQBFgMBcADQBeADBDAQQBDAQgBAUQAAAVhEAMQg2AKhIAAIgigBg");
	this.shape_29.setTransform(-145.8,-105.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1,3,true).p("AtMCBQCrjkCPgNQAdgDAcAHQAmAJAkAZQCSBmEmD3QAOAMAQANQBQBDBcBOQHEGACWk1AqWnwQAfgdAhgYQGgkwITIpQCOCUCXDRQAiAuAhAyQAOAUAOAU");
	this.shape_30.setTransform(-134.9,-147.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF498F").s().p("AEAEVQg3gViOiVQg0g3gng1QgmgzAAgMQAAgWALgLQAHgHALgDQAigIAaAdIAxA1QAWAYAdAjQAcAkBHBQQA7BCAOAYQAFAIANAdQAMAcgFAAQgGAAg2gUgAjdi+QhUhAgKgfQgKggBeA8QBfA7AYAXQAYAWAAAOQAAAHgDADQgDADgHAAQgkAAhUhAg");
	this.shape_31.setTransform(-93.8,-155);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CB3B72").s().p("AD6GHIisiRIgegZQAHgZBQAqICEBPQBGAvATAKQBgAxBhAAQA3AABDgZQA8gXAYgYQATgUAJgmQAIggAHAAQAFAAADAEIAEgCQA+CGgTBFQhDCKh/AAQieAAj7jVgAs7jrQApiBBjiOIAggsQAggdAggYQAHADAAANIguA4Qg1BBgeBAQgKAUgQBAQgQBFAAAcQAAAgALALIAWAAIA1gHQAzgGAYAAQAxAAAYAEQAIgBAOAFQAgAKABALQgcgHgdADQiOANisDkQgsiQA2img");
	this.shape_32.setTransform(-135.7,-142);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0417E").s().p("AFJIGQgTgKhGgvIiEhPQhQgqgHAZQkmj3iRhnQgkgYgngJQgBgLgggKQgOgFgIABQgYgEgxAAQgYAAgzAGIg1AHIgWAAQgLgLAAggQAAgcAQhFQAQhAAKgUQAehAA1hBIAug4QAAgNgHgDQGhkwISIpQCPCUCXDRQAhAuAiAyIAbAoQAoBEAaA4IgEACQgDgEgFAAQgHAAgIAgQgJAmgTAUQgYAYg8AXQhDAZg3AAQhhAAhggxgAFehcQgLADgHAHQgLALAAAVQAAANAmAyQAoA2A0A3QCOCVA3AUQA2AUAGABQAFAAgMgdQgNgcgFgIQgOgYg7hDQhHhQgcgkQgdgkgWgXIgxg1QgVgWgZAAQgIAAgHACgABMkPQAKAfBUBBQBUBAAkAAQAHAAADgDQADgEAAgHQAAgOgYgWQgYgWhfg8Qg+gmgQAAQgJAAADAKg");
	this.shape_33.setTransform(-133,-156.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#7B233F").ss(1,1,1,3,true).p("ArfCEQgGhJBAgiQAUgKAKgDQAEgCAFgBQAIgEAIgDQIajxKnEQQAEACAFACQADABAEABQABAAABABQAHAAAGABQBxAOgDBYQg4AJg2AHQrtBqoRhyQgqgJgpgKgApTi+QACgKACgJ");
	this.shape_34.setTransform(-139.3,-79.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1,3,true).p("ApRCjQA8kLCbiqQAHgIAIgIQAjglAoggQALgIALgIQAagUAcgRILEGHQBZDDAjDTQACANACAOQAAAAABABApwF2QAIhmAThbAB3BbQAABCAcAvQAbAuAmAAQAnAAAbguQAcgvAAhCQAAhCgcguQgNgXgRgMQgQgLgUAAQgRAAgOAJIgBAAQgLAHgKAMQgGAIgGAKQgcAuAABCg");
	this.shape_35.setTransform(-139.1,-116.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7E0000").s().p("AgLAYIAAgXQAAguALAAQAMAAAAAuIAAAYQgBAVgLAAQgJAAgCgWg");
	this.shape_36.setTransform(-117.5,-107.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAWIAAgKQAAgMAEgHQAKgNAKgHIABAAQAYgKAAAcQAAAJgOAPQgOAQgIAAQgLAAgCgJg");
	this.shape_37.setTransform(-121.1,-120);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D40000").s().p("AhBBxQgbgvAAhCQAAhBAbgvQAGgKAHgIQgFAJAAAMIAAAKQADAIALAAQAIAAAOgPQAPgQAAgJQAAgcgZAKQAPgJAQAAQATAAARALQAQAMAOAXQAbAvAABBQAABCgbAvQgcAugmAAQgmAAgbgugAADgsQgLABAAAtIAAAXQACAWAJAAQALAAABgVIAAgYQAAgugMAAIAAAAg");
	this.shape_38.setTransform(-117.9,-107.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#873E55").s().p("AqMBmQgqgJgpgKQgGhJBAghQAUgKAKgDIAJgDIAQgHQIajyKnERIAJAEIAHACIACABIANABQBxANgDBYIhuAQQlpAzk1AAQlNAAkTg7g");
	this.shape_39.setTransform(-139.3,-74.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CB3737").s().p("AADgDIACAAIgHAGIgCABIAHgHg");
	this.shape_40.setTransform(-190.3,-138.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC66").s().p("AJjGcIgCAAIgHgDIgJgEQqnkRoaDyQAIhmAThbIAEgSQA8kLCbiqIAPgQQAjglAoggIAWgQQAagUAcgRILEGHQBZDDAjDTIAEAbIABABIgOgBgACfgnQgGAIgGAKQgcAuAABCQAABCAcAvQAbAuAmAAQAnAAAbguQAcgvAAhCQAAhCgcguQgNgXgRgMQgQgLgUAAQgRAAgOAJIgBAAQgLAHgKAMg");
	this.shape_41.setTransform(-139.1,-116.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AF2F2F").s().p("AjPFIQABgXAKhuIADgcIAAgFQAMhbAghIQAlhWAeg4QAdg4AYgYIgCAAIA4g4QAUgUATgQIACgCQAxgqAngTQA3gaAAAXIAAABIgWAQQgoAggjAlIgPAQQiaCqg8ELIgEASQgTBbgIBmIgPAHIgKADQgKAEgUAJQgFgqABgWg");
	this.shape_42.setTransform(-186.7,-116.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#7B233F").ss(1,1,1,3,true).p("AKbnxIgEABQgfgdgggXQj4i1kfB5QgYAKgYAMQgNAGgMAHQlRC4mHJGANNCBQgxhBgvgwQgNgOgMgKQi0ioiQBmQiOBjkaDtQglAegmAhQhEA5hLA/QmyFxickPQgGgLgGgN");
	this.shape_43.setTransform(95.4,-147.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF498F").s().p("Ah9G5Ig/AAQg2gDgXg5QgIgUgDgWQgEgUAAgVQAAgVABgHQAEgUAWgxQgBAIAHgOQAFgOALBDQAMBHADAIIAGAIQAJAOAYARQA0AnAYAWQgBAIgCACQgDAEgPAAIgDAAgAiNBGQgIgDgCgDQgEgEAAgKQAAgoDEjYQCui/A0grQAIADAGAJQgyA5gwBKIhQCAQhfCbhuBUg");
	this.shape_44.setTransform(40.5,-129.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#CB3B72").s().p("At6FvIgMgYIASgFIAAAAQAEAXAIAUQAXA4A2AEIA/AAIACAAQAPAAADgEQACgDACgHQgYgWg0gnQgYgRgKgOQAnADAwAVQA4AYAeAAQArAABSgvQAngWAogdIBAgwQAvgiArgXQBog2BlgpIhLA/IiPB5Qj6DUieABQh0AAhChzgAKzigIgZgZIgCgIIABgEQACgDAJAAIATAKQASAKAZAAQAhAAAMgvIAGgwQAAgYgRhTIgShSQAAgJADgDIAKgEIACgBQEDFTjxBgQgxhCgvgwg");
	this.shape_45.setTransform(101.2,-129.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E0417E").s().p("AqiJIQgvgUgngEIgGgIQgDgIgMhHQgLhDgFAOQgHAOABgIQgWAygEATQgBAIAAAUQAAAWAEATIgBAAIgSAEQAEi3BpiPQGHpGFRi4IAYgNQAYgMAYgKQEgh5D3C1QAgAXAfAdIAFgBQBeBrBBBWIgCABIgKAEQgCACAAAJIARBSQARBTAAAYIgFAwQgNAughAAQgZAAgSgKIgTgKQgJAAgBAEIgCADIACAJQi0iniQBmQiNBjkbDtQhkAphpA2QgqAWgwAjIg/AvQgpAdgnAXQhRAvgsAAQgeAAg4gZgAn8ATQjFDYAAAoQAAAKAEAEQACAEAIACIAnAAQBvhVBfiaIBQh/QAwhLAyg5QgGgJgIgDQg0AsiuC+gALeA4QgIgHgDgJIAaAZQgIgEgHgFg");
	this.shape_46.setTransform(95.5,-152.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAAxQhegDhDgQQhEgQACgUQAAgVBDgMQBFgMBcADQBeADBDAQQBDAQgBAUQAAAVhEAMQg2AKhIAAIgigBg");
	this.shape_47.setTransform(106.8,-108.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#7B233F").ss(1,1,1,3,true).p("ALgBTQAGhQhNggQgDgCgEgBQgJgEgKgDQgDgCgDgBQgFgCgFgCQlaicmUA6QgaADgZAFQjJAjjXBWQgEACgFACQgDABgEABQgBAAgBABQgCAAgBAAQgFAAgFABQhxANADBYQA4AJA2AHQLtBqIRhyQAqgJApgKg");
	this.shape_48.setTransform(98.8,-74.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1,3,true).p("AJxF7QgBgDAAgCQgBgQgCgQQgrm4j8jkQgbgYgdgWQgLgIgLgIQgSgMgSgMIrDGHQhfDQgiDhIAAABAh3BcQAABCgbAuQgVAjgaAJQgJADgKAAQgmAAgcgvQgbguAAhCQAAhDAbguQAOgXARgLQAQgMATAAQAFAAAFABQAJABAIAFQABAAABABIAAAAQAUAKARAcQAbAuAABDg");
	this.shape_49.setTransform(99.7,-116.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#873E55").s().p("ApxBuIhugQQgDhYBxgNIAKgBIADAAIACgBIAHgCIAJgEQDXhWDJgjIAzgIQGUg6FaCcIAKAEIAGADIATAHIAHADQBNAggGBQQgpAKgqAJQkTA7lNAAQk1AAlpgzg");
	this.shape_50.setTransform(98.8,-74.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E2E2E2").s().p("AgBAAIAAAAIADAAIgDAAg");
	this.shape_51.setTransform(37.4,-75.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#7E0000").s().p("AgLAoIgDgJQAAgQAEgdQAGglAGgHQAIAEAFAHIAABeQgFAJgIACQgIgIgFgKg");
	this.shape_52.setTransform(77.8,-107.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgJAHIgQgTQAAgLAGgCQAJABAIAEIACABIAAAAIAAABQAaASAAAOQAAAMgNAAQgGAAgQgTg");
	this.shape_53.setTransform(81.4,-120.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D40000").s().p("AhBBxQgbgvAAhCQAAhBAbgvQAOgXARgMQAQgLASAAIAKABQgGACAAALIAQAUQARATAGAAQANAAAAgMQAAgOgagTIgBgBQAUALARAcQAbAvAABBQAABCgbAvQgVAjgaAIQgJADgKAAQglAAgcgugAgPgMQgFAdAAAQIADAJQAFAKAKAIQAHgCAFgJIAAheQgFgHgHgEQgHAGgGAmg");
	this.shape_54.setTransform(78.4,-107.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC66").s().p("ApwGcQAjjhBejQILDmHIAkAYIAXAQQAcAWAcAYQD7DkAsG4IACAgIgJABQlaicmUA6IgzAIQjKAjjWBWIgJAEIgHACIgCABgAj3g3QgRALgNAXQgcAuAABDQAABCAcAuQAbAvAmAAQAKAAAJgDQAagJAVgjQAbguAAhCQAAhDgbguQgQgcgVgKIAAAAIgCgBQgIgFgJgBIgKgBQgSAAgRAMg");
	this.shape_55.setTransform(99.7,-116.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AF2F2F").s().p("ADAGJIgTgHIgGgDIAAgFIgDggQgsm4j6jkQgbgYgdgWIgWgQQAIgPAoAGQAYAEAgAUQAnAaA0AzQAUAUAaAgQAZAfAoBWQAoBVAWA8QAVA9AOA7QAOA7AABKIAABCQgCArgIAMIgHgDg");
	this.shape_56.setTransform(145.4,-117.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AM2BiIgOgBIgVgHIgOgEQgIgDgCgHQAFgDAJABIAOACQANAEAOABQALABADADQADACABAEQABAEgDACIgGABIgGAAgAjDBJQgLgCgTgLIAHgFIALgMQARgPAlgJIA3gLIAMgBQAIABAGADQALAJgCALQgBAFgGAGQgFAGgFACQgFADgKACIgrAKIgcAHQgKACgIAAIgLgBgAPsAaQgJgCgBgGQgBgFAGgEIAKgEQAVgGAZgWQAIgHAEAAQAJAAACAKQACAHgGAIQgDAFgIAFQgQAMgLAFQgLAGgLAAIgKgCgA1jAJQgdgHgQgQIgGgHIgGgIQgDgEgBgGIgCgIIAAgKIACgQQACgLADgEQAEgJAIAAQAJgCAGAJQADAFABAIIACAMIABAKQACALAPAIIALAHIAIAIIAGAJIAEAIIACAGQAAAFgDACQgDACgEAAIgQgCgAwCgGQgJgCgEgEIgHgKQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgDADgCQAMgLADgBQAGgDALAAIARgBIAQgEIANAAQAFgBAJgFIANgHIAKgCIAIgFQAJgDAJAHQAHAHAAAKIgCAIQgFAIgJAFQgFADgKAEIgMAHIgMAEQgIACgIABIgLABIgIACQgEACgIAAQgNgBgNgCgAWHgQIgCgGQgBgDACgEIADgIIAEgSIACgNQACgIAHAAQAAAAAAAAQAAABAAAAQABAAAAAAQABAAAAAAQAFAAACAEIACAIIgBAPIgCAGIAAAFIgDAHQgJAQgOAFQACgCgBgFg");
	this.shape_57.setTransform(-20,85);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E5E5E5").s().p("ANvBxQiwgOAfgdQAKgKAOgGQAYADAkAAQBMABA4gOQBFgRAsgoQAMgKAUgXIAAgBQAYgBAgAIQBKAQBbgfQBQgcAigJQAKATgHAaQgEAWgUAfQgGAPgJALQgyAYhYAWQieAmiNAAQgoAAgmgDgAwYA4QhJgHgvgIQhAgMgzgTQg8gXgsgmQgdgYgTgcQAegYBhAcQBvAgBPAEQBPADAsgEQAsgEAdggIAFgGQBEADBYAUQCBAjBAAOQCFAdCIgCQBLgCBLgKQBnAIAPARQAUAXgTASQgSAShpAPQhHAJg/AHQmGgClzgmg");
	this.shape_58.setTransform(-20.4,85.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D0D0D0").s().p("AooB4QhrAAh0gDQh1gEh2gGQhvgFhwgKQiug4gggpQghgrAYgkQADgFAFgDQATAcAdAYQAsAmA8AXQAzATBAAMQAvAIBJAHQFzAmGGACIg+AGQhWAHhjAAIgNAAgAMtBEQgkAAgYgDQAZgMAkABQA2ACBHgYQBGgZAggaQASgQAfgBIAAABQgUAXgMAKQgsAohFARQg0ANhGAAIgKAAgAV8ARQAUgfAEgWQAHgagKgTIAIgDQAegIgFBCQgDAlhCAgQAJgLAGgPgAo9gXQhAgOiBgjQhYgUhEgDQAdgbAyADQA4ACBcAlQBcAkB1ANQB8ALB9AGQAuACAlAEQhLAJhLACIgSAAQh/AAh8gag");
	this.shape_59.setTransform(-19.9,84);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EFEDE8").s().p("APXHpQgsgEiAgSQhegNgwgCQg5gDgSgDQgqgHgYgWQAXgJAUgDQAagFA2ABQBMADC/ATQCpARBhgBQA7AAAqgKQAsgKAWgUIAMgKQAHgFAGAAQAHAAAHAFQAFAFADAHQADANgIAQQgSAjg6ARQg/AShhAAQhMAAhigLgAWtCWQgIgCgPgQIgYgZQgKgMgMgZQgOgcgHgLQgKgOgCgGQgBgJgCgEIgFgKQgCgCgCgOIgDgaQgCgQAFgHQADgFAGgCQAGgBAFACQAFADAEAFQAJALADAKIAIATIAFAGIAFAIIACAMQABADAHAIQAGAJAHAMIALAWQANAZARAUQAIAJADAFQACAEAEAPQADANgDAHQgDAGgIACIgHABQgEAAgEgCgAQIBIQgPgDgYgXQAPgNAVgMQAQgHATgIQAZgHAKgLQAGgGAFgJIAIgRQALgXANgGQAJgEAKACQAKAEADAIQADAHgFAPQgOApgNAQQgUAZgzAXQgWAIgOAAIgGAAgAJuBIQgJgCgHgEQgIgGgCgIQgFgRAYgXIAWgUQAagbATgGQAOgEANAEQAPAEAGAMQAJAQgLATQgHANgSAOQgZASgXAJQgSAIgMAAIgDAAgAA+AiQgSgDgWgWQgQgPgcghQgagegGgTQgEgMAEgHQAFgLAPADQAJABAMAKQAUAPAaAXIAtAqQAYAUgDAPQgBAMgMAHQgIAFgJAAIgHgBgAmKgVQgQgJgQgOQgTgRgOgQQgOgOgCgKQgCgIACgHQADgHAGgEQALgGASALQAJAFAkAhQAaAYAWAFQASACAIADQAHADAFAFQAFAFAAAHQAAAMgLAFQgJAFgNAAIgEAAQgeAAgagNgAvtiFQgJgOgBgFQgCgOALgEQANgHAPAYQAqBABBAnQAOAIAGAGQAKAKgCAMQhjgig/hVgA2ggdQgDgBgDgHQgEgNgBgJQgBgLgCgHIgIgMQgIgNgBgWQgBgZgBgMIgFggQgCgPAAgeQAAhJAGgjQAGgkAQgyQAJgdAJgNQAPgWAXgEQAHAhgKAvIgLAmIgKAmQgFAbgDBAQgBAjACANIAEAYQADAOAAAKIgEAmIAEArQACAagJAOQgEAIgGAAIgDgBg");
	this.shape_60.setTransform(-33.4,41.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1,3,true).p("AZIBpQAEgcAEgeQAqmFjciNQjdiNmXCHQmYCGnfgFQnggFmPihQk0h9ikBOQgxAXgkAoQieCyBIGEQAFAZAFAYQAkAoAkAYQBGAvBBgYQBsgoBbjpQAWApAXAhQBlCSB9gLQB1gLCKiXQATAaASAUQDGDiDij+QBkCpB7ACQB9ADCVikQA+CZBXAUQBnAYCKifQC0E7DqknQAZgfAZglQBcDZBcA9QAzAiAygOQBUgXBUiaQgyFUi5BYQgnASguAOQi+A4kzgXQh6gKh4gFQj/gMj1AIQloAKmqAOQmqANi1hVQiqhRhLlZ");
	this.shape_61.setTransform(-22.1,33.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D3C394").s().p("A1RITQiqhRhKlZQAkAoAjAYQBYFrI9gWQIGgVN4BeQj/gMj2AIIsRAYQg6ABg2AAQlTAAidhJgAWQEaQBUgXBUiaQgyFUi6BYQgnASgtAOQDThfg7i8gAWOEWQBHgyASjNQARjNhPiFQhQiGi1gbQi2gbjhBWQjhBWnzAgQnzAgnujCQlBh+i8AOQClhOE0B9QGPChHgAFQHfAFGXiGQGYiHDcCNQDcCNgqGFIgHA6QhUCahUAXIgCgEgARBA0QAYgfAaglQBcDZBcA9IgNABQiBAAhcjTgA12DAQBrgoBcjpQAVApAXAhQh4DIhsAAIgPgBgAEdgGQiWCkh8gDQDshcA1k0QAhFEBlBYQhYgUg9iZgAugCAQB1gLCKiXQASAaATAUQiHB7hrAAQgaAAgYgHg");
	this.shape_62.setTransform(-20.5,33.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EEE0B5").s().p("ANFJHQh6gKh4gFQt4heoFAVQo+AXhXlsQAvAfAsABIAAAAIABAAQAVAAAVgIIABAAIgBAAQgVAIgVAAIgBAAIAAAAQgsgBgvgfQgkgXgkgpIgKgwQhImECeiyQAkgpAxgXQC7gOFCB/QHtDCHzggQH0ghDhhWQDhhWC1AcQC2AbBPCFQBQCGgSDMQgRDOhHAyIABAEQA8C8jUBeQiGAojAAAQhRAAhagHgAWyEQQAOAAAOgEQgOAEgOAAIgBAAIAAAAQgkgBgkgXQAkAXAkABIAAAAIABAAgAR/AmQBhDdCJgLQhcg+hcjYQgZAlgZAfgAOqC0QBhAABtiFIAFgGIACgDIgCADIgFAGQhtCFhhAAIAAAAIgBAAQhqAAhdihIgBgCIgJALIgBAAIgBACIgCABQhwB8hYABIAAAAIAAAAQgOAAgOgDQhlhZghlDQg1E0jsBcQB9ACCVikQA+CZBXAVQAOADAOAAIAAAAIAAAAQBYgBBwh8IACgBIABgCIABAAIAJgLIABACQBdChBqAAIABAAIAAAAgA04CyQBzAPCBjXIABACIAAABIACABIABACIAEAGIAAAAQBbB8BsAAIABAAIAAAAIASgBIgSABIAAAAIgBAAQhsAAhbh8IAAAAIgEgGIgBgCIgCgBIAAgBIgBgCQgXghgWgpQhbDqhsAogABJCNQh7gDhkioQh4CFhvABIgBAAIAAAAQhhAAhchnIgDgCQgSgWgTgZQiKCWh1ALQB9AlCniXIADACQBcBnBhAAIAAAAIABAAQBvAAB4iGQBkCoB7ADg");
	this.shape_63.setTransform(-26.7,34.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#E0E0E0").ss(1,1,1,3,true).p("AQFBXIAAACIAAAFQgBAHgBAIQgBAMgBANQAAABAAABQgCAUAAAQQACAkARAQQALAKARACQArADABhCQAAgOgCgRQgBgHgBgHQgBgJgBgJQAAgCAAgBQAAgBAAgBQgBgHAAgGQgEheAohoQAVg1A3gHQAGgBAHAAQACAAADAAQAEAAAEAAQABAAABAAQBLACAkhDQAlhEAGijQACgsgFgTQgFgYgQAQQgBABAAAAQgGAHgIAOQgKAQgNAbQAAAAAAABQgFAJgEALQhOCwijBQQgiAOgNArQgIAcAAApQABBMgGBKA02ldIgCAAIAAgBQgEgCgDgCA00lbQgCgBAAgBA1CljQgbgMgNANQgoAoBJBfQABABABABQAQAXAOAYQArBLAKBXQAMByB+gBQAEAAAEAAQAeAAAdADQBZAJBSAjQBfAoAeBvQACAJACAIIAAADQABADAAADQACAJABAJQAPBoAuA2QAAAAABABIAAAAQABACACABQARATAWANQAWABARgEQA3gPgGhSQgCgTAAgSQAAgDAAgDQAAgFAAgEQAAgRADgOQAFgpATgWQATgYBOgJQAFAAAFgBQAFAAAGgBQAYgCAeAAQAdgBAiAAQDJADAThUQAShTjcAXQgFABgFAAQgOACgPABQgDAAgDAAQgBAAAAAAQgDAAgDAAQjKAJjzhRQj9hUiaiyQhWhjg1gjIgCgBA1CljIADABQgCAAgBgBg");
	this.shape_64.setTransform(-16.6,103.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#CBCBCB").s().p("AgjCJIAAABIAAAGIAAgHgAjlA/IAAgDIgDgNIgBgEQAEgKATAbIgSAJIgBgGgADLiDIgBAAQgUgHAKgCIAGAAIABAAIAGAAIAdgCIgEASIgbgHg");
	this.shape_65.setTransform(-70,130);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CCCCCC").s().p("AG8ExIALgBIgGACIgFgBgAnGkxIACABIAAABIgCgCg");
	this.shape_66.setTransform(-104.6,99.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgzYLQgkgQgNgBIAAgMQALgBAnAKQApAJAJAAQBhAABFgLQBEgLA9AAQAiAAAIAIIACAGIhdATQhgAPhXAAQhEAAgugPgAoPXzQhegSgrARIhrgBQhsgCgDgDIh8gEQAAABgBABQAAAAAAABQgBAAAAAAQAAAAgBAAQgDABAAgNQAAgMACgCIACABIBGACQBAACAEACIDUgCIAPgCQAZgDAygDIAAgEICMACIAEAEQADAFABADQgYAfgwAAQgQAAgTgEgA5MXKQAlgnAvgOQAhgLAxAAIACAGQgJALgjAKQgvANgJAEIAHAJQAEAGABADQgEAGgIAEQg+gCgGgGgAMAW5IgFgHIAVgRQASgLAbgIQgMgDgpgIIgrgHQgOgDhjgGQhegGgDgDQAAgDAGgGIAGgHQCoADBgASQAqAIAmAPIACgBQACABAAAMQAAAIgrAQQgqAQgPAAQgNAAgCgBgAz1U9IABgBIAAgCIAKgEQA1gbAFgBQAsgMCggKIAEAEQADAFABADQgRAPg7ADQhQAEggAIIgoALQgbAHgMAAQgMAAgCgDgACuUqQgDgBAAgNQAAgKAYgRQAfgVAFgGQgQgJgzAFQgtAEgagaIhOAAIgwANQghAHgNAAQgMAAgCgDIABgDQAvgbAMgCQAkgJBuAEQBbADAlANQADAAAXAQQgMATgUAUQgcAbgeAOIgCACIgBAAgAUsBZIgBgZQAAgPAMgRQALgRABAjQAAAWAMAPQAMAQAAAEQAAALgQAAQgaAAgFgdgAUviNIAAg+QAEhLAAgkQABg0APgbQAGgKAFABQAFAAAAALIgGBQQgGBWAAAXQAAAOAQBgQAAAKgCgDQAAAEgKAAQgXAAgFg8gAl6qHQgOgKAAgFIABgGIABgDQAHAAATAGQATAGAGAAQAFAAAGgFQAFgFAFAAQAKAAABACIACADQABACAAAGQAAAJgMAHQgKAHgIAAQgZAAgTgOgAU6uxQgLgNAAgDQAAgRASAGIAaALQAMAAABAMQAAAHgIAGQgHAGgGAAQgLAAgOgPgACTvMQAAgFAHgIQAIgLADgGQgugLAAgQIABgJQAuAIALAFQAOAGAAARQAAAhggAIIgMgLgAi8vuQhHgKgdgGQhOgPAAgUQAAgUAaAIQAPAFAeAPIBvARIBKABQANAAAAAMQAAAFgDADQgEAEgGABgAoMw0QgQgMAAgFIABgJQAMgDAjAOQAeAMAKAIQgFAKgPAAQgeAAgWgPgAUvxOIgBgOQAAgsAQABQAQAAAAAiQAAAkgRAAQgLAAgDgNgAtRzuQg3gygpgxQgngvAAgPQAAggAXAaQANAPAgAuQALAQAdAbQAiAfAJAMQAUAYBRA8QALAJA/ATQA3ARAAAKQAAAEgDAEQgEAFgGAAQhWAAiTiEgAUvzaQAAgNADgWQAEgYADgHIAPgeQAIgOALACQAJADAAAKQAAAFgOAXQgOAdAAAmIACAWQAAADgCAEQgEAFgGAAQgPAAAAgigAXk2bQgDgEAAgDQAAgEAWgXQAZgcAJgOIALgRIAKgQQAJgSALABQALAAAAAMQAAALgoA1QgpA3gOAAQgHAAgDgFgAxM2zIAAgYQAAg/ASAoQASAoAAAVQAAAKgBgDIgDADQgEACgGAAQgSAAgEgag");
	this.shape_67.setTransform(-45.5,220.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D0D0D0").s().p("AjFYrQALgJAogMQAmgMAJgJIAGgKIAAgCQgggDgsgQQgtgQgHgLQBSABApAQQAlAPAAAXQAAANgjAVQgjATgWAAQgkAAgIgIgAmvYRQgGgGAAgGQAEgFAKgCQANgEAhgDIANgIQAHgGAAgNQAAgVgugKQhGgQgEgCIAAgMQAwAJA8AGQAkAIAAAmQAAAZgDAGQgHAOgiAKgAwFXMQgIgIAAgRQAAgZBQgOQBHgOAPAFIACAGQgRAMgqAJQgwAKgTAJIgOAGIAsAGQAAAEAEAFIAEAJIACAFQgBAFgNAAQgtAAgPgNgAzDXLQgCgEAAgUQAAgcBHgVQBFgVASAOIACAGIg/AWQg2ASgTAKQACACANAGQAMAFADADIAEALQgBAFgNAAQgaAAgQgIgARGCtQAAgFgMgfIgMghQAAgoAaAuQAVAmAEAOIABAGIAAACQgGAhgOAIQgIgGAAgggAROASIgEgEIAAibQAAgZgIg2QgFglgCgWQgGgNgFgdIgGg0QAAgwAUA8QAKAfAKAoQAAAJgCAGIAOAmIAEAMIACBDIACAYIAAALIgFCJIgCADQgDACgGAAQgGAAgCgBgAqPn4QgWgNgRgTIgDgDIgBgBQgug2gPhoIgDgSIASgJQATAbAPAmQAOAlAVAmQALAVARATQATAXAUhiIAMgfQAUg1AHAMIADAFQgDAOAAARIAAAJIAAAGIACAlQAGBSg3APQgNADgQAAIgKAAgAqoojIgBAGQAAAFAOAKQATAOAZAAQAIAAAKgHQAMgHAAgJQAAgGgBgCIgCgDQgBgCgKAAQgFAAgFAFQgGAFgFAAQgGAAgTgGQgTgGgHAAIgBADgAnVsUQgBgJAOgHQAOgIA1gKIBegCQAsAAA+gfQA/gfhYgKQg5gHgggGIAEgTIAKgBQDcgXgSBTQgTBUjJgDQgiAAgdABQgeAAgYACIgLABIgKABIgJABQgPAAAAgGgAipuMQAAAQAuALQgDAGgIALQgHAIAAAFIAMALQAggIAAghQAAgRgOgGQgLgFgugIgAQuspQgRgCgLgKQgRgQgCgkQAAgQACgUIAAgCIACgZIACgPIAAgFIAAgCIAAgDIALArQAEAPAUApQARgUAFgMQAFgMAFgUIAFgXQAAgDAGgBIABANIgBAEIABABIACASIACAOIACAfQgBA/gnAAIgEAAgAQOtIQAAADALANQAOAPALAAQAGAAAHgGQAIgGAAgHQgBgMgMAAIgagLIgJgBQgJAAAAAMgAxiusIgHgCIgBACQh+ABgMhzQgKhXgrhLQgOgYgQgXIgCgCQhJhfAogoQANgNAbAMIAAAAIADABIAHAEIAAABIACAAIACACIgDALQgDALAAAHQAAAYAMAdIAYA4QAIATAVAjIAjA4QALATALAlQAMAmAIAPQAUAnA9AaQA3AYAAABQAAAGgDADQgdgDgeAAgA1t1SIAAAYQAEAaASAAQAGAAAEgCIADgDQABADAAgKQAAgVgSgoQgHgPgEAAQgHAAAAAmgATEzGQAJgLAbgNQAagMAJgKQALgNAKgTQAJgUAJgZQAJgZACgNIAHguQAFggADgtQAAgeAEgSIACgEQAIgOAGgHIABgBQAQgQAFAYQAFATgCAsQgGCjglBEQgkBDhLgCIAAAAIgKAAIgFAAIgNABQgHgBAIgJg");
	this.shape_68.setTransform(-16.6,208.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E5E5E5").s().p("ADZZsQg4gCgDgDQjOAEhCgRQgYgGgSgMQgSgNgNgIIAAgDQAAgEAIgFQipADgbADIkAAAQgOgDhnAFIhzAGIh4AAQhZgDg5gTIiKgCQiLgDgDgDQiegKg1gPQgfgJAAgQQAAhPF0gbQgcgDgMgIQgMgHAAgRQAAgZCFgeQBIgPB3gVIHcACIAEgBIADACQBBgFB7gVIDpgpIDPgEQB7gHBWAaQBLAWAAAbQAAAYhMAeIhlAjIFjABQCDAEBiAQQBxASAgACQA4AqAZAXQB0gBBQALQBbANAAAVQAAANgFAKIgLAQIkGAlQjKAcj0ARIiYADQiZADgHACIg3gBgAhjYRIAAAMQANABAkAQQAuAPBEAAQBXAABggPIBdgTIgCgGQgIgIgiAAQg9AAhEALQhFALhiAAQgIAAgpgJQgjgJgMAAIgDAAgAoOYWQBLAOAggpQgBgDgDgFIgEgEIiMgCIAAAEQgyADgZADIgPACIjUACQgEgChAgCIhGgCIgCgBQgCACAAAMQAAANADgBQABAAAAAAQAAAAABAAQAAgBAAAAQABgBAAgBIB8AEQADADBsACIBrABQAVgIAhAAQAjAAAwAJgA33W4QgvAOglAnQAGAGA+ACQAIgEAEgGQgBgDgEgGIgHgJQAJgEAvgNQAjgKAJgLIgCgGQgxAAghALgAISWEQgGAGAAADQADADBeAGQBjAGAOADIArAHQApAIAMADQgbAIgSALIgVARIAFAHQACABANAAQAPAAAqgQQArgQAAgIQAAgMgCgBIgCABQgmgPgqgIQhggSiogDIgGAHgAB4WMQAsAQAgADIAAACIgGAKQgJAJgmAMQgoAMgLAJQAIAIAkAAQAWAAAjgTQAjgVAAgNQAAgXglgPQgpgQhSgBQAHALAtAQgAi7VVQAEACBGAQQAuAKAAAVQAAANgHAGIgNAIQghADgNAEQgKACgEAFQAAAGAGAGIA2ACQAigKAHgOQADgGAAgZQAAgmgkgIQg8gGgwgJgAqbU2QhQAOAAAZQAAARAIAIQAPANAtAAQANAAABgFIgCgFIgEgJQgEgFAAgEIgsgGIAOgGQATgJAwgKQAqgJARgMIgCgGQgEgBgIAAQgWAAg0AKgAtcUsQhHAVAAAcQAAAUACAEQAQAIAaAAQANAAABgFIgEgLQgDgDgMgFQgNgGgCgCQATgKA2gSIA/gWIgCgGQgHgFgQAAQgXAAgpAMgACSVrIgBADIAQgIIgPAFgA0XVZIAkAGIgBABQACADAMAAQAMAAAbgHIAogLQAggIBQgEQA7gDARgPQgBgDgDgFIgEgEQigAKgsAMQgFABg1AbIgCgJIgsAJgADoUJQgFAGgfAVQgYARAAAKQAAANADABQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQAegOAcgbQAUgUAMgTQgXgQgDAAQglgNhbgDQhugEgkAJQgMACgvAbIgBADQACADAMAAQANAAAhgHIAwgNIBOAAQAaAaAtgEIAfgCQAZAAALAGgAVPC3QgSgUgUglQgVglAUghQAVgiAGgeQgegPgIg1QgEgXABgdIACgaQAGh2ANheQAZi9AgBtQAPAWAJBlIgOgmQACgGAAgJQgKgogKgfQgUg8AAAwIAGA0QAFAdAGANQACAWAFAlQAIA2AAAZIAACcIAEAEQACABAGAAQAGAAADgCIACgDIAFiKIAAgLQAEBMAAA0QAAAVgIAbQgLAogWACQAIAJAIARQANAdADAXQgEgOgVgmQgagtAAAnIAMAhQAMAfAAAFQAAAgAIAGQAOgIAGghIAAAHQAAAVgEAJQgJAUgfAuQAEAHgBAAQgCAAgKgLgAU4BDQgMARAAAPIABAZQAFAdAaAAQAQAAAAgLQAAgEgMgQQgMgPAAgWQgBgXgFAAQgDAAgDAFgAVElmQgPAbgBA0QAAAkgEBLIAAA+QAFA8AXAAQAKAAAAgEQACADAAgKQgQhgAAgOQAAgXAGhWIAGhQQAAgLgFAAIAAAAQgFAAgGAJgAllp3QgRgTgLgVQgVgmgOglQgPgmgTgbQgTgagEAJQgehvhfgoQhSgjhZgJQADgDAAgGQAAgBg3gYQg9gagUgnQgIgPgMgmQgLglgLgTIgjg4QgVgjgIgTIgYg4QgMgdAAgYQAAgHADgLIADgLIAAgBQA1AjBWBjQCaCyD9BVQDzBRDKgJQgKACAUAHIABAAIAbAHQAfAGA5AHQBYAKg/AfQg+AfgrAAIheACQg1AKgOAIQgOAHABAJQAAAHAYgCQhOAJgTAYQgTAWgFApIgDgFQgHgMgUA1IgMAfQgRBPgPAAQgEAAgDgEgAltv+QAAAUBOAPQAdAGBHAKIBOAAQAGgBAEgEQADgDAAgFQAAgMgNAAIhKgBIhvgRQgegPgPgFQgIgCgFAAQgNAAAAAOgAoawrIgBAJQAAAFAQAMQAWAPAeAAQAPAAAFgKQgKgIgegMQgcgLgNAAIgGAAgAvX1sQAAAPAnAvQApAxA3AyQCTCEBWAAQAGAAAEgFQADgEAAgEQAAgKg3gRQg/gTgLgJQhRg8gUgYQgJgMgigfQgdgbgLgQQgggugNgPQgLgLgFAAQgHAAAAARgAUyvsIgLgrQAGhKgBhNQAAgpAIgcQANgrAigOQCjhQBOiwIAJgUIAAgBQANgbAKgQIgCAEQgEASAAAeQgDAtgFAgIgHAuQgCANgJAZQgJAZgJAUQgKATgLANQgJAKgaAMQgbANgJALQgIAJAHABQg3AHgVA1QgoBoAEBfQgGABAAADIgFAXQgFAUgFAMQgFAMgRAUQgUgpgEgPgAUvw5IABAOQADANALAAQARAAAAgkQAAgigQAAIgBAAQgPAAAAArgAVJ0XIgPAeQgDAHgEAYQgDAWAAANQAAAiAPAAQAGAAAEgFQACgEAAgDIgCgWQAAgmAOgdQAOgXAAgFQAAgKgJgDIgDAAQgJAAgHAMgAYv3lIgKAQIgLARQgJAOgZAcQgWAXAAAEQAAADADAEQADAFAHAAQAOAAApg3QAog1AAgLQAAgMgLAAIAAAAQgLAAgJARgAV2wCIAAACIgBACIABgEgAX/0TIgIAAIAKAAIAAAAIgCAAgAwg3PIAAAAIADABIgDgBg");
	this.shape_69.setTransform(-45.6,217.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1,3,true).p("AXfjeQhOBUhBAjQg2AegugFQgggEgcgVQgEgCgDgDQgCgCgBgBQgDgCgCgDQgCgCgCgCIgDgCQhIhOgmjVQj5D+iujiQjDDZj6jVQgwApgtAaQgOAHgOAHQgKAEgJAEQgaAKgZAFQgDABgCAAIgBAAQgHACgJABQhCAHg9gfQg+geg4hDQgwA3g1AZQgJAEgXAIQgCAAgCABQgCAAgDABQAAAAAAABIgBAAQhDAPhLgdQgDgBgCgBQgwgTgyglQgNgJgMgKQhwBchhAAQgCAAgBAAQgBAAAAAAQgPAAgOgDQgFgBgGgBAU/DoQgHgKgHgKQhUh7hFAJQgGAAgGACQgJADgIAFQgBAAAAAAQgEACgDACQgmAbghBJQgLAZgLAeIAAAAAQWENQgDAFgCAIQgBAEgCAGIAAABQAAAAAAABQgCAEgBAEQgIAZgHAdQgGAVgFAWQh8hVh9AYQg3AKg4AfQhhg5hiApQgfANggAXQgkgegjgTQgKgFgJgDQhYgohWAgQg6AVg5A3Qg1gqgxgSQhVgfhFArQgIAEgHAGQgXARgVAZQgdgWgcgNQgPgJgPgFQhVgghPAeQgnAOglAcQhdg8hmAYQgbAFgcANQgLgbgLgYQgEgIgBgDQgEgIgBgDQgBAAAAgCIgBgCQgVgpgTgiQgIgNgHgKQgUgegSgVQgDgEgDgCIAAgBQgZgagXgKQgEgCgCgBQgIgDgHgBQgDAAgCAAQg+gGg1BrQgYAvgWBHAuckvQhUgThIhbQgjDchFBaQhUBtiGhRQgWgNgXgSQgEgEgFgDQgDgDgEgDQgTgQgUgU");
	this.shape_70.setTransform(-20.2,50.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#EFEDE8").s().p("AjhG1IgBgHQAAgUAUgOQAFgFAJgEQAegNAtgBQArgBAfALQAjANAAATQAAAFgFAEQgEADgEAAQgHAAgWgOQgXgOgNAAQhKAAgbAWIgNAOQgGAHgIAAQgIAAgDgFgAHtGrIgBgHQAAgPAUgHQASgHAmAAQBNAAAAAbQAAADgDAEQgDAFgHAAIgTgIQgSgIgdAAQgYAAgPAJQgPAJgIAAQgJAAgCgFgAoRGrQgBgDAAgEQAAgSAcgKQAdgKA5gBQAwgBAcAGQAPAGAPAIQAHAGgBAIQAAANgMAAIghgLQgggMgfAAQggAAgmAOQggAOgEAAQgHAAgEgFgAqwGpQgggHgRACQgkADgMgDQgHgDAAgHQAAgKATgEQATgDAmACQBMAEAAAVQAAAMgRAAIgfgHgAERGeQg4gNgVAAQgXAAgDAFQgFAEgDAAIgHgBIgCABQgJAAgCgGIgBgGQAAgcAmgLQAggJAzAGQAxAFAjAPIARAIQAWAMAAANQAAAEgDAEIAAABIgDAEQgDAFgHAAQgoAAg4gNgAOMGIQgXgIgWAAQgbAAgOAEIgSAEQgIAAgDgGIgBgGQAAgMATgEQAUgFAlACQBNADAAAXQgBAHgFADQgEADgEAAgAQwGFQgCgDAAgDIAAgGQAHgdAIgZIADgFIAAgDIABgBIAAgBIACgKIAFgNIAAgBIABgBIAFgFQgEgJAPgCQAOgCAAANQAAADgCAEIAAAAQgBAEgTAyIgDAdQgEAWgPAAQgIAAgDgGgAuDFYIgJgOQgPgkgIgKQgnhBAAgKQAAgVAHgMIABAAIAFAGQASAVAUAeIAPAXQATAiAVAqIABABIABADIAFAKIADAIIACADQgEAFgNAAQgQAAgOgSgAteFQIgBgDIABACIAAABIAAAAgAtfFNIAAAAgAvDCwIAAgBIABABgAzrhBIgBgFIgBgDIAAgBIABgBIgBgDIAFgIIAEgEIgBgEIApg+QAphAAAg9QAAgGgGghIgHggIABgFIgFgNQAAgUAOAKQACABADAEQAFgBAHAHQATAQALAiQAFAMABAUIAAAiQAAArgVA8QgjBdg/AAQgOAAgFgIgASZkfIgZhuQAAgIACgOQAKgKASAcQAWAfAUA3QAIANAPAxQAPAvAAAHIgBAGIABABQAAANgMAAQgpAAgghsgAG8kcQgFgDABgHQAAgJADgBQAFgBAgAAQAUAAAxgPQAhgLAAAOQAAAIghAPQggAPgVAAQgqAAgKgFgAMskwQgNgEABgJQgBgDADgEQADgFAHAAIAuAEQAWAAA6gOQAigIAAASQAAAHggALQgkAMgkAAQgoAAgQgFgAvSl+IgLgnQAAgnAmAlQAlAlAAAcQABAQgVAAQgcAAgQgog");
	this.shape_71.setTransform(-25.2,48.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D3C394").s().p("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");
	this.shape_72.setTransform(-21.1,54.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EEE0B5").s().p("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");
	this.shape_73.setTransform(-22.3,51.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#601919").ss(1,1,1,3,true).p("A2KBAQLCl1IWFQQBMAxBKA/QB3hkCFg/QH4jzKzER");
	this.shape_74.setTransform(-20,56.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EE3E3E").s().p("ABGAyQAAgUAzgrQA3guAjgBIABACQACADAAAFQAAADglAbQgzAlgsAsgAiQAKQhFguAAgCIABgJQCKA3ANAlIgCAJIgCACQgCABgGAAQgCAAhFgvg");
	this.shape_75.setTransform(-21.7,64.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E73C3C").s().p("AgDgEIADgBIAAgBQAEABAAAMg");
	this.shape_76.setTransform(31.7,94.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AF2E2E").s().p("AuuC1Qi6hZh7h5QgKnlRDDgQBMAwBKBAQB3hlCFhAQNMhFCxGGQhsBsiiBTQl0C+pGADIgWAAQo3AAl+i1gAIMA+IgDABIAIAMQAAgMgEgBgABwj4QgzArAAAUIAMALQAsgsAzgmQAlgbAAgCQAAgGgCgCIgBgDQgkABg2AvgAjekSQAAACBFAvQBFAvACAAQAGAAACgBIACgCIACgJQgNgliKg4g");
	this.shape_77.setTransform(-20.8,88);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A32A2A").s().p("ADghmQH4jzKzESIgFAPQgzCZh2B5QixmFtMBFgA2KgNQLCl2IWFRQxDjgAKHkQhlhlg6h6g");
	this.shape_78.setTransform(-20,64);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1,3,true).p("A1zpyQD5hoJnBYQJmBYJChRQJChSC/BeQC+Bdi6IqQhiEklVCuQl0C+pGADQpGAEmFi5Qlmirh8kmQjqovD7hog");
	this.shape_79.setTransform(-22,55.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#9A1515").s().p("AgQCjQgSAJgvhAQgyhDgIgRQgOgTgdg5Qgdg5AZgaQAYgbAngEQAYgDAYAIQAOAFAPAIQAmAXgBARQAAARgFADQgEACgJAJQgJAJgFARQgFAQARAQQASAPAZgGQAQgEAKgHQAGgEADgGQAFgHAAgIQAAgNgOgOIgIgHIgRgPIgBAAIAAgBQgBgBABABQALgZAQgQIAGgGQAWgTAtgFQAZgDATAIQAPAHAMAOQAZAggVAzQgUAzgvBYQglBDgmAQQgMAFgMAAQgmAAgBgGg");
	this.shape_80.setTransform(-26.5,42.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#801212").s().p("AuiH2Qlmirh8kmQjqovD7hoQD5hoJnBYQJmBYJChRQJChSC/BeQC+Bdi6IqQhiEklVCuQl0C+pGADIgVAAQo4AAl+i1gAgVAeQAMAAALgEQAmgQAlhDQAvhYAUgzQAVg0gZgfQgMgPgPgGQgTgIgZADQgtAFgWASIgFAHQgQAQgLAYQgBAAABABIAAAAIABAAIARAPIAIAHQANAOAAAOQAAAIgFAHQgDAFgFAFQgKAHgQAEQgaAGgSgQQgRgPAFgRQAFgRAJgIQAJgJAEgDQAFgCAAgRQABgSgmgWQgPgJgOgEQgYgIgYADQgnAEgYAaQgZAaAdA6QAdA5AOATQAIARAyBDQAvA/ASgIQABAFAnAAg");
	this.shape_81.setTransform(-22,55.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#E0E0E0").ss(1,1,1,3,true).p("AQFBXIAAACIAAAFQgBAHgBAIQgBAMgBANQAAABAAABQgCAUAAAQQACAkARAQQALAKARACQArADABhCQAAgOgCgRQgBgHgBgHQgBgJgBgJQAAgCAAgBQAAgBAAgBQgBgHAAgGQgEheAohoQAVg1A3gHQAGgBAHAAQACAAADAAQAEAAAEAAQABAAABAAQBLACAkhDQAlhEAGijQACgsgFgTQgFgYgQAQQgBABAAAAQgGAHgIAOQgKAQgNAbQAAAAAAABQgFAJgEALQhOCwijBQQgiAOgNArQgIAcAAApQABBMgGBKA02ldIgCAAIAAgBQgEgCgDgCQgCAAgBgBIAAAAIADABA00lbQgCgBAAgBA1CljQgbgMgNANQgoAoBJBfQABABABABQAQAXAOAYQArBLAKBXQAMByB+gBQAEAAAEAAQAeAAAdADQBZAJBSAjQBfAoAeBvQACAJACAIIAAADQABADAAADQACAJABAJQAPBoAuA2QAAAAABABIAAAAQABACACABQARATAWANQAWABARgEQA3gPgGhSQgCgTAAgSQAAgDAAgDQAAgFAAgEQAAgRADgOQAFgpATgWQATgYBOgJQAFAAAFgBQAFAAAGgBQAYgCAeAAQAdgBAiAAQDJADAThUQAShTjcAXQgFABgFAAQgOACgPABQgDAAgDAAQgBAAAAAAQgDAAgDAAQjKAJjzhRQj9hUiaiyQhWhjg1gjIgCgB");
	this.shape_82.setTransform(-17.8,89.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#CBCBCB").s().p("AgjCKIAAAAIAAAGIAAgGgAjlA/IAAgEIgDgLIgBgGQAEgJATAaIgSAJIgBgFgADLiCIgBgBQgUgGAKgDIAGAAIABAAIAGAAIAdgCIgEASIgbgGg");
	this.shape_83.setTransform(-71.2,115.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CCCCCC").s().p("AG8ExIALgBIgHACIgEgBgAnGkxIACABIAAABIgCgCg");
	this.shape_84.setTransform(-105.8,84.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("A0hapQAigqAugSQAggMAxgEIACAGQgJALghANQgvAQgIAFIAIAIQAEAGABADQgDAGgIAFIghABQgfAAgEgEgArJaUQgBgMACgCIACABIBGgEQBAgCAEACIDTgRIAPgDQAZgFAxgGIAAgEICMgIIAEAEIAFAIQgeArhMgJQhegLgqAUIhrAGQhsAFgDgCIh8AFQAAABAAAAQgBABAAAAQgBAAAAABQAAAAgBAAIAAAAQgDAAAAgMgAD3Z9QglgNgNAAIAAgMQALgCAnAHQApAGAJAAQBigHBEgQQBDgQA9gEQAigCAJAHIACAGIhcAZQheAWhXAGIgoABQgrAAghgIgAvVYEIAAgBIABgCIAJgFQAzgeAFgCQAsgOCegWIAEAEIAFAIQgQAQg7AHQhPAKgfAKIgoAOQgaAIgMABIgFAAQgIAAgBgCgAQkXyQgCgEgEgCIATgTQASgMAagKQgMgDgpgEIgrgEQgPgDhjABQheABgDgDQAAgDAFgHIAGgGQCogJBgALQArAFAnANIACgCQACABABAMQAAAIgqATQgpATgOABIgJABIgGgBgAHFV/QgBgKAXgSQAegYAEgGQgRgIgyAIQgtAHgbgXIhOAFIgxAQQggAKgMABQgNABgBgDIAAgDQAtgfAMgDQAkgMBvgDQBagDAmAKQADAAAYAPQgKATgTAVQgbAegcAQQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgDgBgBgNgAQsg4IgBgaQAAgPAMgQQALgRABAjQAAAVAMAQQAMAPAAAEQAAAMgQAAQgaAAgFgdgAQvkgIAAg9QAEhLAAgkQABg0APgbQAGgKAFAAQAFABAAALIgGBPQgGBXAAAXQAAAOAQBfQAAAKgCgCQAAAEgKAAQgXAAgFg9gAp6sZQgOgLAAgEIABgGIABgDQAHAAATAGQATAGAGAAQAFAAAGgFQAFgFAFAAQAKAAABACIACACQABACAAAGQAAAJgMAIQgKAHgIAAQgZAAgTgOgAQ6xEQgLgMAAgEQAAgRASAHIAaAKQAMAAABANQAAAHgIAGQgHAFgGAAQgLAAgOgPgAhsxeQAAgGAHgIQAIgKADgGQgugMAAgPIABgJQAuAHALAFQAOAHAAARQAAAgggAJIgMgLgAm8yBQhHgJgdgGQhOgQAAgTQAAgVAaAJQAPAFAeAOIBvASIBKAAQANAAAAANQAAAEgDAEQgEAEgGAAgAsMzHQgQgLAAgFIABgJQAMgEAjAOQAeANAKAIQgFAKgPAAQgeAAgWgQgAQvzhIgBgOQAAgrAQAAQAQABAAAiQAAAjgRAAQgLAAgDgNgAxR2BQg3gygpgxQgngvAAgOQAAggAXAaQANAPAgAuQALAQAdAbQAiAfAJALQAUAYBRA9QALAIA/AUQA3ARAAAJQAAAFgDAEQgEAEgGAAQhWAAiTiEgAQv1tQAAgMADgXQAEgXADgHIAPgeQAIgPALADQAJACAAAKQAAAGgOAXQgOAdAAAlIACAWQAAAEgCAEQgEAFgGAAQgPAAAAgjgATk4uQgDgEAAgDQAAgDAWgYQAZgbAJgOIALgRIAKgRQAJgRALAAQALABAAAMQAAAKgoA2QgpA3gOAAQgHAAgDgGgA1M5FIAAgYQAAg/ASAoQASAoAAAUQAAAKgBgCIgDACQgEADgGAAQgSAAgEgag");
	this.shape_85.setTransform(-21.1,220.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E5E5E5").s().p("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");
	this.shape_86.setTransform(-8.9,215.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D0D0D0").s().p("AFfaqQAKgKAngPQAlgPAJgJIAFgKIAAgCQghgBgtgNQgugNgHgKQBSgGAqAOQAmAMABAXQABANgiAXQghAWgVACIgRAAQgWAAgGgFgABtaVQADgGAKgDQANgEAhgGQAIgFAEgEQAHgHgBgMQgCgWgugGQhHgKgEgCIgBgMQAwAFA9ACQAkAFACAmQACAZgCAGQgGAPghAMIg2ACQgHgFAAgGgAqiaRQgCgEgCgUQgCgcBFgaQBDgZAUAMIACAGIg9AaQg1AWgSAMQACACANAEQANAEADADIAFALQgBAFgNABIgLAAQgTAAgMgFgAnlaEQgIgHgBgQQgCgZBOgUQBGgTAQAEIACAGQgQANgqAMQguANgTALIgNAGIAsADQABAEADAFIAGAJIABAFQAAAFgNAAIgSABQgeAAgNgKgARGAxQAAgFgMgfIgMggQAAgoAaAuQAVAlAEAOIABAGIAAACQgGAhgOAIQgIgGAAgggAROhpIgEgEIAAicQAAgZgIg2QgFglgCgWQgGgNgFgdIgGg0QAAgwAUA8QAKAfAKAoQAAAJgCAGIAOAmIAEAMIACBDIACAYIAAALIgFCKIgCADQgDACgGAAQgGAAgCgBgAqPp0QgWgNgRgTIgDgDIgBgBQgug2gPhoIgDgSIASgJQATAbAPAmQAOAlAVAmQALAVARATQATAXAUhiIAMgfQAUg1AHAMIADAFQgDAOAAARIAAAJIAAAGIACAlQAGBSg3APQgNADgQAAIgKAAgAqoqfIgBAGQAAAFAOAKQATAOAZAAQAIAAAKgHQAMgHAAgJQAAgGgBgCIgCgDQgBgCgKAAQgFAAgFAFQgGAFgFAAQgGAAgTgGQgTgGgHAAIgBADgAnVuQQgBgJAOgHQAOgIA1gKIBegCQAsAAA+gfQA/gfhYgKQg5gHgggGIAEgTIAKgBQDcgXgSBTQgTBUjJgDQgiAAgdABQgeAAgYACIgLABIgKABIgJABQgPAAAAgGgAipwIQAAAQAuALQgDAGgIALQgHAIAAAFIAMALQAggIAAghQAAgRgOgGQgLgFgugIgAQuulQgRgCgLgKQgRgQgCgkQAAgQACgUIAAgCIACgZIACgPIAAgFIAAgCIAAgDIALArQAEAPAUApQARgUAFgMQAFgMAFgUIAFgXQAAgDAGgBIABANIgBAEIABABIACASIACAOIACAfQgBA/gnAAIgEAAgAQOvEQAAADALANQAOAPALAAQAGAAAHgGQAIgGAAgHQgBgMgMAAIgagLIgJgCQgJAAAAANgAxiwoIgHgCIgBACQh+ABgMhzQgKhXgrhLQgOgYgQgXIgCgCQhJhfAogoQANgNAbAMIAAAAIADABIAHAEIAAABIACAAIACACIgDALQgDALAAAHQAAAYAMAdIAYA4QAIATAVAjIAjA4QALATALAlQAMAmAIAPQAUAnA9AaQA3AYAAABQAAAGgDADQgdgDgeAAgA1t3OIAAAYQAEAaASAAQAGAAAEgCIADgDQABADAAgKQAAgVgSgoQgHgPgEAAQgHAAAAAmgATE1CQAJgLAbgNQAagMAJgKQALgNAKgTQAJgUAJgZQAJgZACgNIAHguQAFggADgtQAAgeAEgSIACgEQAIgOAGgHIABgBQAQgQAFAYQAFATgCAsQgGCjglBEQgkBDhLgCIAAAAIgKAAIgFAAIgNABQgHgBAIgJg");
	this.shape_87.setTransform(-17.8,206.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1,3,true).p("AXfjeQhOBUhBAjQg2AegugFQgggEgcgVQgEgCgDgDQgCgCgBgBQgDgCgCgDQgCgCgCgCIgDgCQhIhOgmjVQj5D+iujiQjDDZj6jVQgwApgtAaQgOAHgOAHQgKAEgJAEQgaAKgZAFQgDABgCAAIgBAAQgHACgJABQhCAHg9gfQg+geg4hDQgwA3g1AZQgJAEgXAIQgCAAgCABQgCAAgDABQAAAAAAABIgBAAQhDAPhLgdQgDgBgCgBQgwgTgyglQgNgJgMgKQhwBchhAAQgCAAgBAAQgBAAAAAAQgPAAgOgDQgFgBgGgBAU/DoQgHgKgHgKQhUh7hFAJQgGABgGABQgJADgIAFQgBABAAAAQgEABgDADQgmAaghBJQgLAZgLAeIAAABAQWENQgDAFgCAIQgBAEgCAGIAAABQAAABAAAAQgCAEgBAEQgIAZgHAdQgGAVgFAWQh8hVh9AYQg3AKg4AfQhhg5hiApQgfANggAXQgkgegjgSQgKgFgJgEQhYgohWAgQg6AWg5A2Qg1gqgxgRQhVgghFArQgIAEgHAGQgXARgVAZQgdgWgcgNQgPgIgPgGQhVgghPAeQgnAOglAdQhdg9hmAYQgbAFgcANQgLgbgLgYQgEgIgBgDQgEgIgBgDQgBAAAAgCIgBgBQgVgqgTgiQgIgMgHgLQgUgegSgVQgDgDgDgDIAAgBQgZgZgXgLQgEgCgCgBQgIgCgHgCQgDAAgCAAQg+gGg1BrQgYAvgWBHAuckvQhUgThIhbQgjDchFBaQhUBtiGhRQgWgNgXgSQgEgEgFgDQgDgDgEgDQgTgQgUgU");
	this.shape_88.setTransform(-21.4,36.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EFEDE8").s().p("AjhG1IgBgHQAAgUAUgOQAFgFAJgEQAegNAtgBQArgBAgALQAhANABATQgBAFgEAEQgDADgFAAQgHAAgWgOQgXgOgNAAQhLAAgaAWIgOAOQgFAHgHAAQgKAAgCgFgAHtGrIgBgHQAAgPATgHQAUgHAmAAQBLAAAAAbQABADgDAEQgDAFgHAAIgSgIQgTgIgeAAQgWAAgQAJQgPAJgHAAQgKAAgCgFgAoQGrQgCgDAAgEQAAgSAdgKQAcgKA4gBQAxgBAcAGQAPAGAPAIQAHAGAAAIQAAANgNAAIgggLQghgMgeAAQgiAAglAOQggAOgEAAQgIAAgCgFgAqwGpQgggHgRACQgjADgNgDQgIgDAAgHQABgKATgEQATgDAmACQBMAEAAAVQAAAMgSAAIgegHgAERGeQg4gNgWAAQgVAAgFAFQgEAEgDAAIgHgBIgCABQgJAAgDgGIgBgGQABgcAlgLQAigJAzAGQAvAFAkAPIARAIQAWAMgBANQAAAEgCAEIAAABIgCAEQgEAFgGAAQgpAAg4gNgAOMGIQgXgIgWAAQgaAAgPAEIgRAEQgJAAgDgGIgBgGQAAgMAUgEQASgFAmACQBNADAAAXQAAAHgGADQgEADgEAAgAQwGFQgCgDgBgDIABgGQAHgdAIgZIACgFIABgDIABgBIAAgBIADgKIAEgNIAAgBIAAgBIAGgFQgEgJAOgCQAPgCAAANQAAADgCAEIAAAAQAAAEgVAyIgCAdQgDAWgPAAQgKAAgCgGgAuDFYIgJgOQgPgkgIgKQgnhBAAgKQAAgVAHgMIABAAIAFAGQASAVAUAeIAPAXQATAiAVAqIABABIABADIAFAKIADAIIACADQgEAFgNAAQgQAAgOgSgAteFQIgBgDIABACIAAABIAAAAgAtfFNIAAAAgAvDCwIAAgBIABABgAzrhBIgBgFIgBgDIAAgBIAAgBIAAgDIAFgIIADgEIgBgEIAqg+QAphAAAg9QAAgGgGghIgHggIABgFIgGgNQAAgUAPAKQACABAEAEQAEgBAHAHQATAQALAiQAFAMABAUIAAAiQAAArgVA8QgjBdg+AAQgQAAgEgIgASYkfIgYhuQAAgIADgOQAJgKASAcQAWAfAVA3QAHANAPAxQAPAvAAAHIgBAGIABABQAAANgNAAQgoAAghhsgAG8kcQgFgDAAgHQABgJAEgBQAEgBAhAAQASAAAygPQAhgLAAAOQAAAIggAPQgiAPgUAAQgqAAgKgFgAMtkwQgOgEAAgJQAAgDADgEQADgFAHAAIAuAEQAXAAA5gOQAigIAAASQAAAHggALQgkAMgkAAQgoAAgPgFgAvSl+IgKgnQAAgnAlAlQAlAlAAAcQAAAQgTAAQgcAAgRgog");
	this.shape_89.setTransform(-26.4,34);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D3C394").s().p("ArzI8IgSgFIgHgBIgIgCQgMAAgjgUIgIgEIgwgVIgngRQi7hZh7h7QAXhHAYgvQA1hrA+AGIAEABIAMADIADABIAGACIACAFIAIAgQAIAoAKAYQAJAYAeAnIAlAvIANAQQAoA2ALBHQAHAuASASQAFAFAWALQAVACBgAZQBfAaANgCQALgCCCAlQAFgCBgATQBgASBPgRICHAEIABAAIBKgCQBfALCfgNIARgCIAAAAIAVgCQCGgNBvgRQBvgRAsgUQBigtAYgHQAugPAJAUIBngrQBdgzAMhYIAOiKQAHhAAfgnIAGgEIABgBIAPgGIADgBQAFgCAGgBQBFgIBVB6IANAUQh4CyjsB4Ig8AdIgiAPIgBAAQguATgwARIghALQk3BkmlACIgXAAQm8AAlJhvgAKKIHIgCgLQAAgGAEgJIAEgLIgJgSQgJgRAAgJQAAgMAKgSQAMgWANAAQARAAAEAXIAFAfQAGAQAMAOQAGAIAAARQAAALgJAJQgNAOgaAAQgTAAgGgKgABRHgIgFgkQAAgLAUgnQAWgqAIAhIAIApQAFAgAAAOQAAARgDAJQgFASgRAAQgXAAgKgkgAqPHOIgEgTQAAgsAbgVQAHgFAFAAQAQACAAA5QAAAxgaAAQgSAAgHgTgAT1h2QghgDgbgVIgHgGIgEgDIgFgEIgEgEIgCgDQgIgJADgDQADgDAlASQAkASASgBQATgCArgRQAqgSAUghQATghARgnQARgoACgVQACgWgBgYQgBgYgOgeQgTgpglghQhshgjdAAQguAEg5ACIh7ACQgSADg6AIIg7AHIggABIlIAdIg1ACIgaACQhNAGgRgUQgMgOAAgIIgEgGIADAAQABABAAAAQAAAAABAAQAAAAABAAQAAAAAAgBIAXAAIAFAAIBagDQCXgGCUgRIAsgGIAwgGQJChSC/BeQCGBCg1EoQhOBUhAAjQgvAZgoAAIgNgBgAJ2pLIgQAAQgNABAdgBgA2niZIgIgGQgTgQgTgTQgYhYgGhHIgCgiQgEi4CGg3QAwgVA/gMQAegHAigEIAlgFQADADAAAEQAAALgvAXIgVAKQhCAfgQAJQiWBUAAByQAAA3AcBKQAbBJAAAKQAAAZgNADIgJgHgAiElQQg9geg4hEQgwA3g1AZIghAMIgCgJQgCgCAAgEIAbgeQAegmARgrQAEgLAIgnQAJgsAAgRIgCgOIgDgOIABgIIAOACQBiAIB7AHIAEAAIAPABQADABgGACQgSAHgnAVQgqAWgJANQgFAIgFAYQgFAWAAANQAABAA8AiQAuAZA7AAQAdAAAXgKQAKgEAsgEQAPgCgCAFIgBACIgcAOIgTAIQgaALgZAFQAZgFAagLIgIAEQgTAJgYADIgFABIAAAAIgQACIgZACQg1AAgygZgAT8lmIgDgZIAAgNQgNANgKAAQgVAAgEgkIAAglQAAgWAFgtQAJglAKAAQAHABAQASQAAAKAZAhQA9BTAAAYQAAASgIAOQgMAagfAAQgYAAgHgZgAtrlRIgBAAQgOgBgOgCQgEgCgHAAQAkgPAWgKQAtgVAigpQAJgKAKgcQAKgcAAgQQAAhOiLgcIhfgUQgsgNAAgXIAAgJIAVAAQDKABERAnIABABIAKAAIAZAEIAAAAIgBADQgOABgdAGQg7ALgQA8QgIAfgCAfQAAAwAyAiIAiAXQAQAMAAALQAAAEgDAEQgDAFgFAAIgEgBIAEABIgCAAIgCgBQgwgUgzglIgYgSQhwBchiAAIgDAAgAEYngIgFgUQAAgzAOAEQAFABAGAHQAZAdAAAcQAAALgBACQgDAJgNAAQgTAAgJgUgAnqntQANgaALgKQALgKAIgPQAIgPADARQACARAJATQAJAUgFAKQgEALgdAAQgbAAgJgSgAz8oJIgEgXQAAgRALgcQALgbAMgCQAEgBAFACQASANARAZQATAcAAASQAAAKgKAJQgPAOgbAAQgfAAgKgVg");
	this.shape_90.setTransform(-22.3,40.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EEE0B5").s().p("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");
	this.shape_91.setTransform(-23.5,37);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EE3E3E").s().p("ABGAyQAAgUAzgqQA2gvAkgBIACADQABABAAAHQAAACglAbQgzAkgsAtgAiQAKQhFguAAgCIABgJQCKA3ANAlIgCAJIgCABQgCACgGAAQgCAAhFgvg");
	this.shape_92.setTransform(-22.9,49.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_81,p:{x:-22,y:55.9}},{t:this.shape_80,p:{x:-26.5,y:42.1}},{t:this.shape_79,p:{x:-22,y:55.9}},{t:this.shape_78,p:{x:-20,y:64}},{t:this.shape_77,p:{x:-20.8,y:88}},{t:this.shape_76,p:{x:31.7,y:94.9}},{t:this.shape_75},{t:this.shape_74,p:{x:-20,y:56.2}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_81,p:{x:-23.2,y:41.2}},{t:this.shape_80,p:{x:-27.7,y:27.4}},{t:this.shape_79,p:{x:-23.2,y:41.2}},{t:this.shape_78,p:{x:-21.2,y:49.3}},{t:this.shape_77,p:{x:-22,y:73.3}},{t:this.shape_76,p:{x:30.5,y:80.2}},{t:this.shape_92},{t:this.shape_74,p:{x:-21.2,y:41.5}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[]},1).wait(3));

	// Layer_5
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABGBPQgIgJgIgIQhwh8gMCNgACWBKQgPgTgOgRQgBgBgBgBQgIgKgIgJQjCjYg6ER");
	this.shape_93.setTransform(-54.4,-51.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#741F1F").s().p("AhFAmQALiOBxB8IAPASg");
	this.shape_94.setTransform(-54.5,-47.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E03C3C").s().p("AA2A+Qhwh8gMCNIhPgFQA6kRDCDYIAQATIACACIAdAkIhQAFIgQgRg");
	this.shape_95.setTransform(-54.4,-51.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#CB3737").s().p("AhvAPQgkgQAAgQQAAgMAJABQAEgFAMAAIBIAHIBpAAIAQgFQANgDAfAAQAYABAGAFQAEADgCAEQAAADgCADIAAABQAAAQgvAQQgxAQg5AAQg9ABgqgUg");
	this.shape_96.setTransform(-55.2,-38.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhFBPQCAiXAMCXgAiVBKQDrkxBAEx");
	this.shape_97.setTransform(8.2,-51.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E03C3C").s().p("AhFBPIhQgFQDrkxBAExIhPAFQgMiXiACXg");
	this.shape_98.setTransform(8.2,-51.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#741F1F").s().p("AhGAmQCAiXANCXg");
	this.shape_99.setTransform(8.3,-47.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#CB3737").s().p("Ag9ApQgpgJgSgVQgQgPABgVIAAgBIAAgBQAAgFADgDQADgEAGAAIAwAJQAwAIAyAAQAaAAA2gNIAMgCQASgIADANIAAADIAAABIAAABQAAALg1AaQgvAZgYAGg");
	this.shape_100.setTransform(7.7,-38.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgEAHIgEgEIAFgDIAGgDIABgCIACgBIADAGIAAAAIgGAGIgBABg");
	this.shape_101.setTransform(-545.9,94.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#7B233F").ss(1,1,1,3,true).p("ArfBTQgEgxAcggQANgOAVgLQAUgKAKgDQAEgCAFgBQAIgEAIgDQIajyKnERQAEACAFACQADABAEABQABAAABABQAHAAAGABQBxANgDBYQg4AJg2AHQrtBqoRhyQgqgJgpgKg");
	this.shape_102.setTransform(-145.3,-104.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#873E55").s().p("AqMBmQgqgJgpgKQgEgxAcggQANgOAVgLQAUgKAKgDIAJgDIAQgHQIajyKnERIAJAEIAHACIACABIANABQBxANgDBYIhuAQQlpAzk1AAQlNAAkTg7g");
	this.shape_103.setTransform(-145.3,-104.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF498F").s().p("ACWCrQgugxhhhaQhghZAJgMQAXgfAzA2QAyA1BEA+QBDA+AIAsQADAVgIAAQgJAAgXgZgAifiTQgjglAJgIQAJgIAVALQAUALAhA1QgGAFgHAAQgSAAgagbg");
	this.shape_104.setTransform(-93.2,-208.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1,1,1,3,true).p("AN+JyQgRA1g7AfQg8AfhzhAQhzhAhVhMQgSgQgUgTQhLhHhphsQiFiKjOiXQgGgFgHgEQjIiKjMBBQjTBCiBD9QhdoeE0kDQAfgdAhgYQAZgSAZgQQGBj3EmFeQE5F0AzA+QA0A/BvB4QAqAsAkAlQA8A9AtAm");
	this.shape_105.setTransform(-141.5,-207.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#CB3B72").s().p("AJyJyQhzhAhVhMIgmgjQJAENjvpLQA8A9AtAmIACABQCDBxhWDlQgRA1g7AfQgTAKgZAAQg1AAhOgrgAqhpFQAfgdAhgYQAZgSAZgQQi2DhgED2QF2iNDjE5QjIiLjMBBQjTBDiBD8QhdoeE0kDg");
	this.shape_106.setTransform(-139.8,-202.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E0417E").s().p("AFrI5QhLhHhphsQiFiKjNiXIgNgJQjjk4l3CNQAFj2C1jhQGCj3ElFeIFtGyQAzA+BwB5QApAsAlAlQCkGSjcAAQhkAAi2hUg");
	this.shape_107.setTransform(-137.4,-214.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAAAxQhegDhDgQQhEgQACgUQAAgVBDgMQBFgMBcADQBeADBDAQQBDAQgBAUQAAAVhEAMQg2AKhIAAIgigBg");
	this.shape_108.setTransform(-132.1,-143.8,1,1,0,30,-150);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABdAAQAABCgbAvQgbAugnAAQglAAgcguQgbgvAAhCQAAhBAbgvQAOgXAQgMQARgLASAAQARAAAPAJIAAAAQAMAHAJAMQAHAIAGAKQAbAvAABBg");
	this.shape_109.setTransform(-107.7,-128.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7E0000").s().p("AgLAYIAAgXQAAguALAAQAMABAAAtIAAAXQgBAWgLAAQgJAAgCgWg");
	this.shape_110.setTransform(-108,-128.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgKAPQgOgPAAgJQAAgcAYAKIAAAAQALAHAKANQAEAHAAAMIAAAKQgCAJgLAAQgIAAgOgQg");
	this.shape_111.setTransform(-104.5,-140.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D40000").s().p("AhBBxQgbgvAAhCQAAhBAbgvQAOgXAQgMQARgLASAAQARAAAPAJQgZgKAAAcQAAAJAPAQQAOAPAIAAQALAAADgIIAAgKQAAgMgFgJQAHAIAGAKQAbAvAABBQAABCgbAvQgbAugnAAQglAAgcgugAgOACIAAAYQABAVALAAQAJAAACgWIAAgXQAAgtgLgBIgBAAQgLAAAAAug");
	this.shape_112.setTransform(-107.7,-128.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ap1H1QApqfHAlxIK9HkQBhE+gnEV");
	this.shape_113.setTransform(-144.6,-159.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC66").s().p("AJeIbIgCgBIgHgCIgJgEQqnkRoaDyQApqgHAlwIK9HjQBhE+gnEWIgNgBg");
	this.shape_114.setTransform(-144.6,-159.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CB3737").s().p("AADgDIACAAIgHAGIgCABIAHgHg");
	this.shape_115.setTransform(-196.3,-168.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AF2F2F").s().p("AEhogQm/FwgpKgIgQAHIgJADQgKAEgUAJQgVALgNAPQBntoHajZgAhZhZIAIgHIgCAAQgLALAFgEg");
	this.shape_116.setTransform(-187.6,-158.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#7B233F").ss(1,1,1,3,true).p("ApngJIAAABQgFAAgFABQhxANADBYQA4AJA2AHQLtBqIRhyQAqgJApgKQAGhQhNggQgDgCgEgBQgJgEgKgDQgDgCgDgBQgFgCgFgCQlaicmUA6QgaADgZAFQjJAjjXBWQgEACgFACQgDABgEABQgBAAgEAAg");
	this.shape_117.setTransform(85.2,-111);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#873E55").s().p("ApxBuIhugQQgDhYBxgNIAKgBIAAgBIAFAAIAHgCIAJgEQDXhWDJgjIAzgIQGUg6FaCcIAKAEIAGADIATAHIAHADQBNAggGBQQgpAKgqAJQkTA7lNAAQk1AAlpgzg");
	this.shape_118.setTransform(85.2,-111);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FF498F").s().p("AjqFtQhBgegZiqQAfg3ATBIQAUBJArBGQAeAwgYAAQgKAAgTgIgAhkBRQhFgOCQhoQCPhpBgiMQBeiNAPBQQAPBRhRBiQhQBhhpBQQhYBGhAAAQgKAAgKgCg");
	this.shape_119.setTransform(14.6,-190.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#7B233F").ss(1,1,1,3,true).p("ALLqaQhEgihCgUQitg1irAjQjsAwi0D8Qi0D7jTDyQjTDyiUgQAOiAKQg6hniUgWQgmgGgkgCQhrgHhYAaQh1AjheBcQhfBdhTBvQhSBvhTBWQhMBOivCIQgTAPgTAPQhvBViUgBQiegBhKhu");
	this.shape_120.setTransform(78,-212.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#FF0000").ss(1,1,1,3,true).p("ABjFWQgCgDgBgDQBhkhk3mE");
	this.shape_121.setTransform(161.4,-244.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#CB3B72").s().p("Ap1LhQifgBhKhuQhShpgahOQDxEjGNhvIgnAeQhtBUiSAAIgDAAgALmiCQgmgGgkgCQCThmA/BJQhEkyjUkHQBDAVBDAhQE5GFhiEhQg6hoiTgWg");
	this.shape_122.setTransform(76.3,-210.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E0417E").s().p("AuVH1Qgqh8Bkg2QCUAQDTjyQDTjyC0j7QC0j8DsgwQCrgjCtA1QDUEHBDExQg/hIiTBlQhrgHhYAaQh1AjheBcQhfBdhTBvQhTBvhSBWQhMBOivCIQhtAfhiAAQkAAAiujSg");
	this.shape_123.setTransform(71,-216.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAAAxQhegDhDgQQhEgQACgUQAAgVBDgMQBFgMBcADQBeADBDAQQBDAQgBAUQAAAVhEAMQg2AKhIAAIgigBg");
	this.shape_124.setTransform(87.7,-152.2,1,1,-23);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABdAAQAABCgbAvQgVAjgaAIQgJADgKAAQglAAgcguQgbgvAAhCQAAhBAbgvQAOgXARgMQAQgLASAAQAFAAAFABQAJABAIAEQABABABAAIAAAAQAUALARAcQAbAvAABBg");
	this.shape_125.setTransform(62.9,-137.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7E0000").s().p("AgLAoIgDgIQAAgRAEgdQAGgmAGgFQAIADAFAIIAABdQgFAJgIADQgIgJgFgKg");
	this.shape_126.setTransform(62.3,-137.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgJAHIgQgTQAAgLAGgCQAJABAIAEIACABIAAAAIAAABQAaASAAAOQAAAMgNAAQgGAAgQgTg");
	this.shape_127.setTransform(65.9,-150.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D40000").s().p("AhBBxQgbgvAAhCQAAhBAbgvQAOgXARgMQAQgLASAAIAKABQgGACAAALIAQAUQARATAGAAQANAAAAgMQAAgOgagTIgBgBQAUALARAcQAbAvAABBQAABCgbAvQgVAjgaAIQgJADgKAAQglAAgcgugAgPgMQgFAdAAAQIADAJQAFAKAKAIQAHgCAFgJIAAheQgFgHgHgEQgHAGgGAmg");
	this.shape_128.setTransform(62.9,-137.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(1,1,1,3,true).p("AJxHmQgWtwoHh8IpqIDQhOEEgMEG");
	this.shape_129.setTransform(86.1,-163.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AF2F2F").s().p("AEWH6IgTgHIgGgDQgWtwoGh8QJiAkgmPVIgHgDg");
	this.shape_130.setTransform(123.2,-164.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCC66").s().p("ApwIHQAMkGBOkEIJqoDQIHB8AWNwIgKgEQlaicmUA6Ig0AIQjJAjjWBWIgJAEIgHACIgGAAg");
	this.shape_131.setTransform(86.1,-163.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101,p:{x:-545.9,y:94.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]}).to({state:[{t:this.shape_101,p:{x:-40.1,y:98}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},2).to({state:[]},1).wait(3));

	// Layer_6
	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F77A7A").s().p("APQE9Qi/jzAAgXQAAgSACgBIADACQAcADBTA/IAEADIAwAnQA6AwA9A7QBVBTA0BCQASAVAOAVQA5BQAAAyQAAAeguAYQhNg2jHj9gAF+g0QkBjhjmhTQjnhUiZgeQiXgdnigLIgQgBQgHADhogCQhogCB8gjIBPgUIAbgHIABAAIAFgBIgFAAIAHgBQBxgaBxgLQC+gRC9AaQDoAhCVAtQAyAOAoARQBRAhBUAvIA+AlQA1AgA1AmQCrB6AYAcQARAVAVAeIAAABIARAYIAqBBQAtBbAEApQABANgLAAQgnAAjMiwg");
	this.shape_132.setTransform(99.5,-262.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#693244").ss(1,1,1,3,true).p("EApYAAAQAAAFABAiIACBkQADCJAGEPQADBkAABYQgBA0AAAxQgDCFgKBnQgaEUhSDRQgPAlgQAkQgBAAAAABQAAAAgBABQAAABAAABQgiBGgpBBQhJBzhiBjQgJAIgJAJQgQAQgSAPQlQEwpgCjQgBAAgBABQgcAHgcAHQgCABgCAAQgbAHgbAHIgBAAQAAAAAAAAIgBAAIAAAAIgBAAQobCApnAAQqXAAn2h5QldhTkHiNQgBAAgBgBQgNgHgNgHQgCgBgBAAQgsgZgpgaQgBAAgBgBQgXgPgXgPQhOg3gpgiQg6gvgzgzQlJlJhloyQgEgUgDgVQgDgOgCgOQghjbgIkmQgDhuAAm7QAAh7AKh4QA9rdGupFIAAAAIAAAAQAIgLAIgKIAQgVQBviQCGiGQAWgWAXgWQFLk9GDi0QAAgBABAAQAggPAhgOIABAAQCFg6CNgpQAAAAAAAAIABAAQFqhrGXgBQABAAACAAQBzAABwAJQO6BJK4K4QGcGcDBH1QCsG8ABIDIAAABQAAACAAACg");
	this.shape_133.setTransform(8,-69.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B15757").s().p("AgOgFIgFgdQARASAWAZIgbAaIgHgog");
	this.shape_134.setTransform(-251.9,40.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F74343").s().p("AgEgPIAAgBIABAAIAIAhg");
	this.shape_135.setTransform(-69.6,-322.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#90465D").s().p("AAAgOIAAgGIAAAAIAAgDIABAvIgBgmg");
	this.shape_136.setTransform(272.8,-68.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#AF2F2F").s().p("AyUaZQldhTkHiNIgCgBIgagNIgDgCQgsgZgpgZIgCgBIgugfIgIgKQgkgaAsAkQhOg3gpghQg6gwgzgyQlJlKhloxIAcgaQgXgagRgSQghjbgIklQgDhuAAm6QAAh9AKh4QBwNkEbK/QAcBGAeBGQgdAIgfgDIAeAzQAYAoAZAlQBPB1BTBXQBGBIBhBLQBHA3BuBKQCcBmBUAtQFUC6GCAvQBbAMBwAGQBJAECEADQF+AKC/gHQE/gMD5g4QENg8FZiYQB8g4BQgsQBtg8BRg/QDKidCgkWQA7hlBJihQA1h0A8iRIBupkQgdA1gzA6QgaAehFBGIg7A7QguAxgiAQQALgTALgdIASg0IAVg2IAWg3QAHgUALg0QAfiQA/mCQA+l9gmoKQCsG8ABIDIAAAAIgIAsIAJABIACBjIAJGYQADBkAABYIgBBlQgDCEgKBoQgaEThSDSQgPAkgQAkIgBABIgBACIAAABQgiBGgpBBQhJB0hiBiIgSASIgiAfQlQEvpgCjIgCABIg4APIgEABIg2ANIgBAAIgBAAIAAAAIgBAAQobCApnAAQqXAAn2h5gAALZ8IgCACQAgAAAUgDIgyABgAieZ7IAAAAIgFAAIAFAAg");
	this.shape_137.setTransform(8,14.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CB3737").s().p("AOUTzIABAAIgBAAgAjcTcIAzgBQgVADgfABgAmKTbIAEAAIAAAAIgEAAgEgltABWIACAAIgFAMgAfTrIIACgDIgCAMIAAgJgEAlogTGIAIgsIAAAGIABAng");
	this.shape_138.setTransform(31.2,56.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E03C3C").s().p("EgD/AoIQiDgEhKgDQhwgGhagMQmCgvlVi6QhUguichlQhuhKhHg3QhhhLhFhIQhUhXhOh1QgaglgYgoIgegzQAgADAcgJQgdhFgdhHQkbq/hwtjQA9rdGupEIABAAIAAgBIAPgVIAQgVQBviPCGiGIAtgsQFLk+GDi0IABAAIBCgdIAAgBQCFg5CNgpIAKAhIgJgiQFrhrGVAAIADAAQB0AABwAIQO6BJK5K5QGbGbDCH2QAmIJg/F9Qg/GCgeCQQgMA0gHAUIgWA2IgVA3IgRA0QgMAdgKATQAhgRAugwIA8g7QBEhGAageQAzg6Adg1IhuJkQg8CSg0B0QhKCgg6BmQihEVjKCeQhRA/htA7QhQAsh8A4QlZCYkMA9Qj6A4k+AMQhPAChwAAQieAAjhgFgEghfAWhIAFgLIgCAAgEAjkAJ3IAAAIIACgMIgCAEg");
	this.shape_139.setTransform(3.9,-77.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]}).to({state:[{t:this.shape_139},{t:this.shape_137},{t:this.shape_138},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[]},1).wait(3));

	// Layer_12
	this.instance_3 = new lib.p3m_arm("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(215.5,-190.9,1,1,0,0,0,-168.3,-12.6);

	this.instance_4 = new lib.p3m_arm("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-216.8,-196.2,1,1,0,0,180,-168.3,-12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},2).wait(4));

	// Layer_7
	this.instance_5 = new lib.p3m_leg("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-139,159.4,1,1,0,-0.2,179.8,-92.8,-104.2);

	this.instance_6 = new lib.p3m_leg("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(164.2,159.6,1,1,0,0,0,-92.8,-104.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},3).wait(3));

	// Layer_8
	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#A05523").ss(1,1,1,3,true).p("AiHuQQChjDChiMQAMgLANgLQCbiECahSQACgBADgBQgCABAGgDIABgBQAPgIAPgHQAFgDAGgDQADgBADgBQAUgKAUgJQgEAPgDAPQgCAHgBAHQgCAIgCAIQgBAFgBAGQhxH4gPHQQgbNGEhLIQmTg+izn1QiLFugVGLQgEA6gBA7QAAATAAATQAAAOAAANQABArACAqQAAAEAAADQgDgDgCgEQgsg8gihEQgEgIgEgIQgBgBAAgBQgLgWgJgWQgGgPgGgQIAAAAQAAgBAAAAQgPgmgLgoQg3i+ALjmQAEhKAKhOIAAAAQAGgwAJgyQAFgdAGgdQAQhPAWhSQACgKADgJQABgDAAgCQgBABgBACQgZAdgXAdQgCACgCACQiCCihmCqQggA0gdA2QghA+geA+QgBACgBADQgHAOgGAOQgUAsgSAsQgCisAWisQAEglAGgkQAOhbAVhbQAtjDBLjBIAAgBQAshvA2hwIAAAAQANgdAPgdQAkhIAohHQAHgMAGgLQggAFgfAIQgSAEgRAGQh1AkhwBSQh0BThvCDQBJiBBIh2QAEgHAEgGQARgcASgbIAAgBQCukWCtjaQABgBABgBQAcgkAdgi");
	this.shape_140.setTransform(-291,-41.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E57932").s().p("AkXPwQgsg9gihDIgIgRIgBgCQgLgVgJgWIgMgfIAAAAIAAgBQgPgmgLgoQg3i+ALjnQAEhJAKhOIAAgBQAGgvAJgyIALg5QAQhPAWhTIAFgTIABgFIgCAEIgwA5IgEAFQBajICTiqQAJB0AUD3QA8knC0lMQA2hhBWiJQgbNHEhLHQmTg+iyn0QiLFtgWGLQgEA5gBA8IAAAmIAAAbQABAqACArg");
	this.shape_141.setTransform(-264.4,9.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#DEAB03").s().p("AoAO+QBPkwCHkZIAxCTQBznODimbQAABbAnBWQCzoTEDn7IgDAQIgDALQhwH4gPHRQhXCIg1BhQi1FMg8EnQgVj4gIh0QiSCrhbDHQiCCihlCqQggA0gdA3QgiA9gdA/IgCAEQAXiBAhiAg");
	this.shape_142.setTransform(-287.1,-69.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFB00").s().p("AAuX0IAEAAIAAAHIgEgHgAn2LLQAFglAGgkQANhbAWhbQAsjDBLjBIAAgBQAshvA2hwIAAAAIAcg6QAkhIAphHIAMgXQgfAFggAIIgjAKQh1AkhwBSQh0BThvCDQBJiBBJh2IAHgNIAjg3IAAgBQCvkWCtjaIABgCIA5hGIAFgGIABgBQCijDCgiMIAZgWQCbiECahSIAFgCQAAAAAAAAQAAAAAAAAQABAAABgBQABAAABgBIABgBIAegPIALgGIAGgCIAogTIgHAeIgDAOQkEH7izITQgmhWAAhcQjiGdhzHNIgyiTQiGEYhQExQggB/gYCCIgNAcQgUAsgSAsQgCisAWisgAnYkhIAAAAIAAgBg");
	this.shape_143.setTransform(-296.9,-41.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E57932").s().p("AkXPwQgsg8gihEIgIgQIgBgDQgLgVgJgWIgMgfIAAgBIAAgBQgPgmgLgoQg3i9ALjmQAEhLAKhNIAAAAQAGgxAJgxIALg5QAQhPAWhSIAFgUIABgEIgCADIgwA6IgEAEQBajHCTisQAJB1AUD3QA8knC0lLQA2hiBWiJQgbNGEhLHQmTg9iyn1QiLFugWGKQgEA7gBA6IAAAnIAAAbQABAqACArg");
	this.shape_144.setTransform(-260.9,21.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#DEAB03").s().p("AoAO+QBPkxCHkYIAxCTQBznODimcQAABcAnBWQCzoTEDn7IgDAQIgDAMQhwH3gPHQQhXCJg1BhQi1FMg8EnQgVj3gIh1QiSCrhbDIQiCChhlCqQggA0gdA2QgiA+gdA+IgCAFQAXiBAhiAg");
	this.shape_145.setTransform(-283.6,-57);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFB00").s().p("AAuX0IAEAAIAAAHIgEgHgAn2LLQAEglAHgkQANhbAWhbQAsjDBLjBIAAgBQAshvA2hwIAAAAIAcg6QAkhIAohHIAOgXQggAFggAIIgjAKQh1AkhwBSQh0BThvCDQBJiBBIh2IAIgNIAjg3IAAgBQCvkWCtjaIABgCIA5hGIAFgGIABgBQChjDCiiMIAYgWQCbiECahSIAFgCQAAAAAAAAQAAAAAAAAQABAAABgBQABAAABgBIABgBIAegPIALgGIAGgCIAogTIgHAeIgDAOQkEH7iyITQgnhWAAhcQjiGdhzHNIgyiTQiGEYhQExQggB/gYCCIgNAcQgUAsgSAsQgCisAWisgAnYkhIAAAAIAAgBg");
	this.shape_146.setTransform(-293.4,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:-291,y:-41.9}}]}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{x:-291,y:-41.9}}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_140,p:{x:-287.5,y:-29.8}}]},1).to({state:[]},1).wait(3));

	// Layer 2
	this.instance_7 = new lib.shadow1("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(36.2,408,1.797,1.262,0,0,-2,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-568.7,-490.2,1136.1,965.4);


(lib.ipf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.badge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,15.7,0.421,0.421,0,0,0,-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-143.4,343.9,305.2);


(lib.inventory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item1
	this.instance = new lib.sack_of_candy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-113.2,-168.4,0.15,0.15,0,0,0,17.7,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},19).wait(47));

	// inv_box
	this.instance_1 = new lib.inv_box("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110.4,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},19).wait(40).to({_off:false,x:-0.4},0).wait(7));

	// inv_box
	this.instance_2 = new lib.inv_box("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110.4,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},19).wait(40).to({_off:false,x:-0.4},0).wait(7));

	// inv_box
	this.instance_3 = new lib.inv_box("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},19).wait(40).to({_off:false,x:-0.4},0).wait(7));

	// inv_box
	this.instance_4 = new lib.inv_box("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-110.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},19).wait(40).to({_off:false,x:-0.4},0).wait(7));

	// inv_box
	this.instance_5 = new lib.inv_box("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-110.4,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},19).wait(40).to({_off:false,x:-0.4},0).wait(7));

	// inv_box
	this.instance_6 = new lib.inv_box("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-110.4,-168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},19).wait(40).to({_off:false,x:-0.4,startPosition:2},0).wait(3).to({startPosition:1},0).wait(4));

	// inv_box_bg
	this.instance_7 = new lib.inv_box_bg("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-109,0,1,1,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},19).wait(40).to({_off:false,x:1},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-220,113,522);


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


(lib.dialogue3 = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(15.4,-47.4,252.1,113);


(lib.db_face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// Layer 3
	this.instance = new lib.shade_lines("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,-7.9,0.356,0.353,0,0,6.6,-0.4,0.5);
	this.instance.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance.cache(-242,-118,485,235);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#999999","#1E1E1E"],[0.435,0.545,0.702],-10.2,-14.8,0,-10.2,-14.8,92.2).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-40.3,110.1,80.6);


(lib.db_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.db_feature("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.1,0);
	this.instance.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-10.2,-14.8,0,-10.2,-14.8,99.5).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:0}}]}).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:3}}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-40.3,110.1,80.6);


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


(lib.btnCandy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.sack_of_candy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2.2,-1.1,0.15,0.15,0,0,0,17.7,-7.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AkfEyIAApjII/AAIAAJjg");
	this.shape.setTransform(-1.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:17.7,regY:-7.4,scaleX:0.15,scaleY:0.15}}]}).to({state:[{t:this.instance,p:{regX:17.5,regY:-7.2,scaleX:0.18,scaleY:0.18}}]},1).to({state:[{t:this.instance,p:{regX:17.7,regY:-7.4,scaleX:0.15,scaleY:0.15}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.9,-35.1,59,70.3);


(lib.tapirhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiZgMQCBgyBEg0QACgCADgCQATgOAVgKQAUgLAOAIQAOAHAIARQAIASAAAOQAAAHAAAIQgDA5gaBHQgbBHg2ALQgzALgwACQgBAAgBAAQgCAAgUABABNg2QhRA/hSAV");
	this.shape.setTransform(73.7,-43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A89A7").s().p("AhiAdIAAAAQCAgxBFg0IgPAfQgGAMgVAZQgWAYgLAIIgbAVQgQAMgUALIg7grg");
	this.shape_1.setTransform(68.2,-47.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#545E73").s().p("AhsA1QgHgMgIgLQAUgLAQgMIAcgUQALgIAWgZQAVgaAFgLIAPgfIAFgEQATgOAVgKQAUgLAOAIQAOAHAIARQAHASABAOIAAAPQgDA5gaBHQgbBHg2ALQgzALgwACIgCAAIgWABQAJg1gIgsgAhzAeQBSgVBRg/QhRA/hSAVg");
	this.shape_2.setTransform(76.6,-43.4);

	this.instance = new lib.T_features("single",0);
	this.instance.parent = this;
	this.instance.setTransform(11.2,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{startPosition:0,x:11.2,y:-10}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance,p:{startPosition:1,x:11.2,y:-10}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance,p:{startPosition:3,x:-1.5,y:-10.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFfp5QA5AxAeBFQAdBCAHBHQAEAkABAkQAFBKAFB0QANEaDOClQh+E9lTA6QgVAEgVAFQmrgNlxi4Qgzhsg9hqQCFjkA2itQAKggAKggQAehmAehrQAVg/Afg5QAgg8Arg3QAqg4BAgcQAJgEAKgEQAQgFASgEQA5gLBLAFQAWABAUACQAoADAkAEQAIAAAHABQAeADAbAEQBEAJA/AYQAbAKAZAS");
	this.shape_3.setTransform(25.5,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A89A7").s().p("AlXIGQgyhsg+hqQCFjkA2itQACALAFALQAPAeAdAWQAMAKArAZQAkAWBXAmQBWAlA9gvQAvg9AwhOQAwhOBEhAQASgSAOACQAQAAAUAZQA1BNAMB3QAIBNgKCKQgKCWgIBTQgEAiAZD3QmsgNlwi4gAi8lyQAVg/Afg5QAgg8Arg3QAqg4A/gcIAUgIQAQgFARgEQA5gLBLAFIArADIBNAHQgaABgmAfQglAggjA8QgkA7heBXQhdBWhUCYQAOAIgbgBQgtgEgOAAQghABgaANQgNAHgKAJIA8jRg");
	this.shape_4.setTransform(0.3,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545E73").s().p("ABXGsQAHhTALiWQAKiJgIhOQgMh2g1hOQgUgZgQAAQgNgCgTATQhDA/gwBOQgwBPgvA9Qg9AuhYglQhWglgkgXQgrgZgMgKQgegWgOgeQgFgLgCgLIAUhAQAJgJAOgHQAagNAgAAQAPgBAtAEQAbACgPgJQBUiXBfhXQBehWAjg8QAkg8AlgfQAlggAZgBIAOABIA6AIQBEAIA+AYQAcALAZARIAAAAQA5AyAeBFQAcBCAIBHQAEAkABAjQAFBKAFB0QANEaDNCmQh+E8lSA6IgrAJQgYj3AEgig");
	this.shape_5.setTransform(34.8,18.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACaAIQgMgFgMgEQgFgCgFgDQhxgxhQg5QgPgJgFAAQgagBgPANQgVARACArQAAAWAEAVQAEAVAJAVQAQAqAXAQQAVATA7AGQAjAFBOgDAgyg1QArAyBQApQAIAFAJAF");
	this.shape_6.setTransform(-11.1,-48.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#545E73").s().p("AAJBhQg7gGgUgUQgXgQgRgqQgIgUgEgVQAEgWARgVQASgWAXgFQAMgEAYAbQArAxBRAqIARAKQgQAYgPAgIgIARIAtAAIgyABQgpAAgXgDg");
	this.shape_7.setTransform(-13.7,-46.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A89A7").s().p("ABJBLQhQgqgrgxQgZgagMADQgXAGgRAWQgSAUgEAVQgEgVAAgVQgCgrAVgRQAPgNAaABQAFAAAPAJQBQA5BxAwIAKAFIAYAKIgegEIgGAHQgKAMgLAPIgHAKIgRgKg");
	this.shape_8.setTransform(-11.1,-52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.2,-61.7,144.5,151.8);


(lib.T_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ipf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(61,-48.6,0.096,0.096,-6,0,0,1.6,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiDgmQAuAqASAFIBXgVIBngbQAJAWAAALQiCAihNANg");
	this.shape.setTransform(62.8,70.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AjGiaQAZgiAcgYQAWAAAWAAQAIAAAIAAQCZgCCZgVQA0gHAzgJIA2AsIDSgzQBDC+gnC6QiLA1iLAgQgmAJgnAIQhIAOhIAIQiHARh7AAQg6gBg2gFQjQgRikhMQgNixAWiNQDOASDUgOg");
	this.shape_1.setTransform(17.4,89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3D42").s().p("AikicIgog7QA0gHAzgJIA2AsIDRgzQBDC9gnC6QiLA1iKAhQgmAJgnAHg");
	this.shape_2.setTransform(60,87.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7E2326").s().p("ABwDmQjPgRikhLQgNiyAWiNQDOASDTgNQAZgjAcgYIAsAAIgoBUIAAGDQg6gBg2gFg");
	this.shape_3.setTransform(-19.2,91.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A92F33").s().p("AjID3IAAmDIAohTIAQgBQCYgCCagUIAnA7IAAGLQhIAOhIAIQiDARh3AAIgHAAg");
	this.shape_4.setTransform(23.4,90.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CACACA").ss(1,1,1,3,true).p("AjttTQAHAgAGAgQABAIABACIAAABQAlDDAIAvQABAGABAGQACAJABAIQACAOACANQAbCiALB2QACASABASQABADAAADQABARABARQAICNgUA8QgKAbgQALQACANACAOQAPBvAJBxQAJBrAFBtQAGCEgCCGQAAABAAABQAEgBADAAQBggHBcgOQAagEAbgFQA1gKA1gM");
	this.shape_5.setTransform(35.2,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ar+nNIA0juQFWh/GZgZQAKgBAKgBQAFAAAFAAQACAAADAAQAZgBAagBQB7gCB6APQAsAFArAIQAaAEAaAFQAFABAFACQAZAEAYAGQAEABADABQAmAJAmAKQAdAIAdAJQA/BrArBeQABABAAABQAPAhAMAfQAgBNAQBDQgHASgHATQALA3ABA5QABAXgCAWQgcBng5C0QgVBGgRA4QgZBXgLA0QgSBTgFB8QgGB7gBAfQgrATgiALQgOAFgNADQgJi+gPiGQgJhXgRhTQgOhCgShMQgBgDgBgEQAAgBAAgBIAAAAIABAAQAAgBABAAQArgNAqgeQBwhMBfi0QAlhIAjhXAr+nNIADAFQAeAgA8A7QBBA9BvBGQBwBFDTAFQDTAFCCgJQASgCASgBQAsgFAogFQAxgGAsgGQBtgPBQgQQABAAABAAIAAAAAI9jdQAQgEAPgDQAKgCAKgDQALgFAKgFQBfgxBWixQAIgQAHgRAlhM7QA4AJA4AGQBAAHBBAEQB9AGCAgHQATgBASgBAIVMdQAegHAegHAr+nNIgvDUQAVAZATAYQAKALAJALQCdC7BsBiQBrBiARAGIAOJFQgBARgBASAt4jgQCGEHBdDIQAJATAJATQA9CEAgBjQANAoAIAiQAXBfAHB6QBJARBJAL");
	this.shape_6.setTransform(5.7,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#84776B").s().p("AA6J9IABgkIgOpEQgRgGhqhhQhshiidi9IgSgVIgpgxIAvjUIADAEIA2A+IAcBtQB8DyC+CJIFnAuIjxBNIgnIuIAuBEQg4gGg3gJg");
	this.shape_7.setTransform(-35.4,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F3F3F").s().p("AmyGVQgPiGgok2Ii+joQgyhhg8hoIAWgNQCdC9BsBiQBrBiARAGIAOJDIhGhQgAIsCZQgJhYgRhRQgOhCgShMIgCgHIAAgCIAAAAIABAAIABgBQArgNAqgeQBwhMBfi2IgLB9IhwE3Ig7H1QgPAGgNACQgJi9gPiGg");
	this.shape_8.setTransform(7,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2C2C2C").s().p("AnyIjQgIh6gXhfQgIgjgNgnQgfhjg+iFIgSglQhdjIiFkHIBLgZIAoAwIASAWIgWANQA9BoAxBhIC+DmQApE4AOCGIBGBQIgBAkQhJgMhJgQgAKoAUIBwk3IALh8QAmhHAihYQAMA3ABA6QAAAXgBAWQgdBng4C1IgmB9QgZBXgMAzQgRBUgGB7IgHCbQgqASgiALg");
	this.shape_9.setTransform(5.7,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABaDJIgFgTQBIgRBYANIAZCjIAPDYQABAZgEAZQgBAGgeAJQgeAJgoADQgnAEgCABQgPj4gji+gAjMJ0IgSl4QAzgtA/gHQAUDbAGDZgACqARQgSgXABhAQAFgBgCgJQgCgKAogHQApgHBCgVQBCgVA6gWQA6gWAjgZIAngcQgZBRgtA5QgsA5gXAQIgiAYQgbAShWAQQgiAGgXAAQgkAAgKgPgACTk+Qgwi7ABhPQAQgGA+gHQA+gICAgTQCAgUAgAJQAFAgAEAIQAaAzgnBvQgqBjiLAZQg6AKgsAAQg8AAgigTgAlKk9QhngQhUg5IAFAhIgXhhIgVilIAKgBIBHADICxALQBqAHAfAFQAfgBAMAgQAMAgAUCZIgCA7Qg1APg/AAQg7AAhDgNgAhYk+IAAAFQgGgBAGgEg");
	this.shape_10.setTransform(22.9,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C6B3A1").s().p("AitNVQhBgEhAgHIguhDIAnovIDxhOIlnguQi/iIh8jyIgchtIg2g9QAeAgA8A7QBBA9BwBGQBvBFDTAFIAHAAIAFAAIAIAAIB5ACIABAAIAAAAQBuAABRgGIACAAIAFAAIABAAIABAGIACAiQkgA5keg4QBRCKAnAEQDJA5DxABIAzAEQDAASBtAnIgBAAIAAAAIAAACIACAHQASBMAOBCQARBTAJBXQAPCGAJC+Ig8AOIAZgiIg9ogQg/g1hcgNQhdgOhxADIgDgbQAPgLAKgbQgKAbgPALIADAbQiRAahtA2QgvAjACA3IAAGLQANA3AlAYQCGApCeAVIAAACIglACQhDAEhBAAQg9AAg9gDgAL9kvQAIgeAGgfIgOhpIAPghQAgBNAQBDIgOAlQgjBXglBIQhfC0hwBMQCriyA7jbgABrieIgBgGIAkgDIBUgKIBdgMQBugPBPgQIACAAIAAAAIABAAIABgBIATgCImmBjIgCgigAheieIh5gCIgIAAIgFAAIgHAAQjTgFhvhFQhwhGhBg9Qg8g7geggIgDgFIA0juQFXh/GZgZIAUgCIAJAAIAFAAIA0gCQB7gCB6APQArAFArAIIA0AJIAKADIgJACQhEALhTAEQhZADjEATIAAgBIgCgKIgMhAIAMBAIACAKIAAABQlsAokcBvICPFIQB7BZHaAKIBOAAQCegDCpgRQhPAQhuAPIhdAMIhUAKIgkADIgDgkIADAkIgBAAIgFAAIgCAAQhRAGhuAAIAAAAIgBAAgABqikIAAAAgAH8jcIAAAAgAALsKg");
	this.shape_11.setTransform(11.8,-4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1F1F1").s().p("AAvNAQiegViGgpQglgYgNg3IAAmLQgCg2AvgkQBtg1CRgbQAPBwAKBwQAIBsAFBsQAFBqAABqIAAA2IAAg2QAAhqgFhqQgFhsgIhsQgKhwgPhwQBxgCBdANQBcANA/A1IA9IhIgZAhQg0ANg2AJIg1AJQhdAPhgAGIgGABIAAgCgAB9C+IAFASQAjC+APD4QACgBAngDQAogEAegJQAegIABgGQAEgagBgZIgPjYIgZijQglgGgjAAQguAAgqALgAi2EDIASF4IB6AIQgGjZgUjaQg/AGgzAtgAAEB+IAAAAgABNBCIgzgFQAOgqAAhTQAAgigCgqQACAqAAAiQAABTgOAqQjxAAjJg6QgngDhRiLQEeA4Egg5IGmhiIgTABIAggHIATgFIAWgKQBegxBWixIAOBpQgGAfgIAeQg7DbirCyQgqAegrANIgBABQhtgnjAgRgAIujQQgjAZg6AXQg6AVhCAVQhCAVgpAHQgoAHACAKQACAJgFABQgBA/ASAYQARAZBWgQQBWgQAbgSIAigYQAXgQAsg4QAtg6AZhRIgnAcgAAgjYQgLh2gZiiIgFgbIgDgRIgCgMQgHgugmjEQAmDEAHAuIACAMIADARIAFAbQAZCiALB2QnagKh7hZIiPlIQEchvFtgoQDDgSBZgEQBTgDBEgMIAJgCIAyAKIAHACIBMATQAdAIAcAJQA/BrArBeIABADQAPAgAMAfIgPAhQhWCxheAxIgWAKIgTAFIggAHIgBABIgBAAIAAAAIgCAAQipASieACIgnAAIgnAAgAGYpoQiAASg+AIQg+AHgQAGQgBBPAwC8QA7AhCJgYQCLgaAqhjQAnhvgagzQgEgIgFggQgKgDgSAAQgqAAhaAPgAkik2QCLAbBngdIACg7QgUiZgMggQgMgggeABQgggFhqgHIixgKIhHgEIgKABIAVCmIAXBhIgFgiQBUA6BnAPgAgwkyIAAgFQgGAEAGABgAG5jtIAAAAg");
	this.shape_12.setTransform(18.9,-2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("AI6BhIAwAPIC5A3IBzjUQhVhBhxglQgNgFgOgDQgwCHhLB1gAqujgQgjAOgiASQhSArhQBDQCAB5CHC7IDbhRIA+gXg");
	this.shape_13.setTransform(-2.8,-92.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3F3F3F").s().p("AjwhiQBQhDBSgrQB7CaCSCJIAyAuIjbBQQiGi6iAh5g");
	this.shape_14.setTransform(-70.5,-91.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("ABOCLQiQiJh8iaQAigSAjgOIE4FaIg+AXIgzgug");
	this.shape_15.setTransform(-59.3,-96.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#585858").s().p("AiVBmQAlgkAghNQAghPAChDQBvAmBVBBIhzDTg");
	this.shape_16.setTransform(74,-91.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#424242").s().p("AhKB4QBKh3AwiGIAbAIQgCBDgfBOQghBOgjAkg");
	this.shape_17.setTransform(61.7,-95.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CACACA").ss(1,1,1,3,true).p("AjttTQAHAgAGAgQARBSANBLQAJAxAIAvQABAGABAGQACAJABAIQACAOACANQAbCiALB2QACASABASQABADAAADQABARABARQAICNgUA8QgKAbgQALQACANACAOQAPBvAJBxQAJBrAFBtQAGCEgCCGQAAABAAABQAEgBADAAQBggHBcgOQAagEAbgFQA1gKA1gM");
	this.shape_18.setTransform(35.2,-4.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ar+nNIA0juQFWh/GZgZQAKgBAKgBQAhgBAhgBQB7gCB6APQAsAFArAIQAaAEAaAFQAFABAFACQAZAEAYAGQAEABADABQAmAJAmAKQAdAIAdAJQA/BrArBeQABABAAABQAPAhAMAfQAgBNAQBDQgHASgHATQALA3ABA5QABAXgCAWQgcBng5C0QgVBGgRA4QgZBXgLA0QgSBTgFB8QgGB7gBAfQgrATgiALQgOAFgNADQgJi+gPiGQgJhXgRhTQgOhCgShMQgBgDgBgEQAAgBAAgBIAAAAIABAAQAAgBABAAQArgNAqgeQBwhMBfi0QAlhIAjhXAr+nNIADAFQAeAgA8A7QBBA9BvBGQBwBFDTAFQDTAFCCgJQASgCASgBQAsgFAogFQAxgGAsgGQBtgPBQgQQABAAABAAIAAAAAI9jdQAQgEAPgDQAKgCAKgDQALgFAKgFQBfgxBWixQAIgQAHgRAlhM7QA4AJA4AGQBAAHBBAEQB9AGCAgHQATgBASgBAIVMdQAegHAegHAr+nNIgvDUQAVAZATAYQAKALAJALQCdC7BsBiQBrBiARAGIAOJFQgBARgBASAt4jgQCGEHBdDIQAJATAJATQA9CEAgBjQANAoAIAiQAXBfAHB6QBJARBJAL");
	this.shape_19.setTransform(5.7,-4.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2C2C2C").s().p("AnyLgQgIh6gXhfQgIgjgNgnQgfhjg+iFIgSgmQhdjHiFkHIBjmHIBLhVIg1DvIguDUIAoAwIASAWIgWANQA9BoAxBhIC+DmQApE4AOCGIBGBQIgBAkQhJgMhJgQgAKoDRIBwk3IALh8QAmhHAihYQAMA3ABA6QAAAXgBAWQgdBng4C0IgmB9QgZBYgMAzQgRBUgGB7IgHCbQgqASgiALg");
	this.shape_20.setTransform(5.7,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C6B3A1").s().p("AitNVQhBgEhAgHIguhDIAnovIDxhOIlnguQi/iIh8jyIgchtIg2g9QAeAgA8A7QBBA9BwBGQBvBFDTAFIAHAAIAFAAIAIAAIB5ACIABAAIAAAAQBuAABRgGIACAAIAFAAIABAAIABAGIACAiQkgA5keg4QBRCKAnAEQDJA5DxABIAzAEQDAASBtAnIgBAAIAAAAIAAACIACAHQASBMAOBCQARBTAJBXQAPCGAJC+Ig8AOIAZgiIg9ogQg/g1hcgNQhdgOhxADIgDgbQAPgLAKgbQgKAbgPALIADAbQiRAahtA2QgvAjACA3IAAGLQANA3AlAYQCGApCeAVIAAACIglACQhDAEhBAAQg9AAg9gDgAL9kvQAIgeAGgfIgOhpIAPghQAgBNAQBDIgOAlQgjBXglBIQhfC0hwBMQCriyA7jbgABrieIgBgGIAkgDIBUgKIBdgMQBugPBPgQIACAAIAAAAIABAAIABgBIATgCImmBjIgCgigAheieIh5gCIgIAAIgFAAIgHAAQjTgFhvhFQhwhGhBg9Qg8g7geggIgDgFIA0juQFXh/GZgZIAUgCIBCgCQB7gCB6APQArAFArAIIA0AJIAKADQACAshZBDQhYBCjxAIQgOhLgRhSIgMhAIAMBAQARBSAOBLQlZALkAgwIBDFyQB7BZHaAKIBOAAQCegDCpgRQhPAQhuAPIhdAMIhUAKIgkADIgDgkIADAkIgBAAIgFAAIgCAAQhRAGhuAAIAAAAIgBAAgABqikIAAAAgAH8jcIAAAAgAAop4IAAAAg");
	this.shape_21.setTransform(11.8,-4.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F1F1F1").s().p("AAINAQidgViGgpQglgYgNg3IAAmLQgCg2AvgkQBtg1CSgbQAPBwAJBwQAJBsAEBsQAFBqAABqIgBA2IABg2QAAhqgFhqQgEhsgJhsQgJhwgPhwQBwgCBcANQBdANA/A1IA9IhIgZAhQg1ANg1AJIg1AJQhdAPhgAGIgHABIAAgCgABXC+IAFASQAiC+AQD4QACgBAngDQAogEAegJQAegIABgGQAEgagCgZIgOjYIgZijQgmgGgiAAQgvAAgpALgAjcEDIASF4IB6AIQgHjZgTjaQhAAGgyAtgAghB+IAAAAgAAnBCIgygFQANgqAAhTQAAgigCgqQACAqAAAiQAABTgNAqQjzAAjIg6QgngDhSiLQEeA4Ehg5IGlhiIgSABIAfgHIAUgFIAVgKQBfgxBWixIAOBpQgGAfgJAeQg7DbiqCyQgqAegrANIgBABQhtgnjAgRgAIIjQQgjAZg6AXQg6AVhCAVQhCAVgpAHQgpAHADAKQACAJgGABQAAA/ARAYQASAZBWgQQBWgQAbgSIAhgYQAYgQAsg4QAtg6AYhRIgmAcgAgFjYQgLh2gbiiIgEgbIgDgRIgCgMIgRhgIARBgIACAMIADARIAEAbQAbCiALB2QnbgKh7hZIhDlyQEAAwFZgLQDwgHBZhDQBYhDgBgsIAxAKIAHACIBMATQAdAIAdAJQA/BrArBeIABADQAPAgAMAfIgPAhQhWCxhfAxIgVAKIgUAFIgfAHIgBABIgBAAIAAAAIgCAAQiqASidACIgnAAIgmAAgAFypoQiAASg+AIQg+AHgQAGQgBBPAwC8QA7AhCJgYQCKgaArhjQAmhvgZgzQgEgIgGggQgJgDgSAAQgqAAhaAPgAlIk2QCLAbBngdIACg7QgUiZgMggQgMgggfABQgggFhpgHIixgKIhHgEIgKABIAVCmIAXBhIgFgiQBUA6BnAPgAhWkyIAAgFQgHAEAHABgAGTjtIAAAAg");
	this.shape_22.setTransform(22.7,-2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1,3,true).p("AI0A/IAsAYICrBaICZi6QhHhQhng6QgNgHgMgHQhpBbhACFgAq8jgQgjAOgiASQhTArhPBDQCAB5CHC7IDahRIA/gXg");
	this.shape_23.setTransform(-1.4,-92.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#585858").s().p("AihBJQAtg6AthKQAWgkAmhCQBmA5BHBQIiZC7g");
	this.shape_24.setTransform(75.6,-91.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AhgBlQBBiGBnhaIAZANQglBDgWAkQgtBJgtA6g");
	this.shape_25.setTransform(64.7,-96.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:1.6,regY:0.1,scaleX:0.096,rotation:-6,skewX:0,skewY:0,x:61,y:-48.6}}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_15},{t:this.shape_14},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_10},{t:this.shape_20},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:2.5,regY:-0.6,scaleX:0.097,rotation:0,skewX:-9,skewY:179.4,x:-19,y:-48.7}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-116.4,191.2,232.9);


(lib.gs_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.galaxy_star("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,0.5,0.5,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.3,scaleX:0.38,scaleY:0.38},0).wait(1).to({regY:-0.1,scaleX:0.5,scaleY:0.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.4,regY:-0.3,scaleX:0.26,scaleY:0.26,rotation:22,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,rotation:0,x:-0.2,y:-0.2},0).wait(1).to({regX:-0.3,regY:-0.3,scaleX:0.43,scaleY:0.43,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:-0.2,y:-0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-33.1,66,69);


(lib.DigiBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17435F").s().p("AizDbIAmh6IB9AZIgnB6gAhgAoIAWhcIBXgbIAqAJIAXhKIhbgTIgSA6IhcgSIAdhcIBZgcIB5AZIBAA6IgtCNIhZAbIgvgIIgXA2g");
	this.shape.setTransform(3.6,-124.2);

	this.instance = new lib.db_atL("single",0);
	this.instance.parent = this;
	this.instance.setTransform(79.9,-138.6);

	this.instance_1 = new lib.db_headlight("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(26.6,-173.8);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(18.6,-126.6);
	this.instance_2.alpha = 0.34;

	this.instance_3 = new lib.db_headf("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.8,-109.3);

	this.instance_4 = new lib.db_mon("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(11.1,-117.1);

	this.instance_5 = new lib.db_face1("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.2,-117.1);
	this.instance_5.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance_5.cache(-57,-42,114,85);

	this.instance_6 = new lib.db_atR("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-36,-137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]},3).to({state:[]},1).wait(3));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACVgLQAAgBAAgBQAAgBAAgCQAAAAAAgBQADg2AGg2QABgFABgFQg0ANgxAFQgGAAgGAAQhtAGhsgnQgBAFAAAFQgCAYgCAZQgBAfgBAgQAAABAAABQAAABAAABQAAABAAABQAAAMAAAMQAAAxACAzQABALABAKQACArAFAsQASAPAWALQA2AdA8gBQAaAAAZgHQAMgDAMgEQAPgGAPgIQADgCADgCQAHgEAGgEQAVgOAQgQQgCglgBglQAAgKAAgLQgcAMgZAIQgXAHgVAFQiBAdhfg6ACVgLQgeAJgcAFQgBAAAAAAQgWAEgVACQgDABgCAAIAAAAQgBAAgBAAQhuAKhrgqACSBjQAAgrACgrQAAgMABgMACgiHQAHg9ALg+IlPgGQgIA4gFA4QgBABABAB");
	this.shape_1.setTransform(2.9,-59.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#747474").s().p("Ag+CWQgWgLgSgPQgFgsgCgrIgBgVIACABIAAAAIAAAAIACACIACAAIABABQA8AiBIABIABAAIAAAAQAlgBApgIIAAAAIACgBIADAAQgBBAgIA+QgaAHgbAAIgEAAQg4AAg1gcgAAdA3QhIgBg8giIgBgBIgCAAIgCgCIAAAAIAAAAIgCgBQgDgyAAgxIABgZIAAgCIAAgCIAAgCIACg/QBSgCBJAlQAhAQAQAWQAGAKAFANIABAEIABACIAEAZIABAQQACAngBAoIgDAAIgCABIAAAAQgpAIglABIAAAAIgBAAgABBhJIAkgCIAAAAIACAAIACAAIABAAIABAAIgBAAIgBAAIgCAAIgCAAIAAAAIgkACIAAAAIgBAAQhYAAhWgjIgCAAIACAAQBWAjBYAAIABAAIAAAAg");
	this.shape_2.setTransform(-3.6,-51.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ABaBPQABgogCgnIgBgQIgEgZIAEgBIArgGIgrAGIgEABIgBgCIgBgEQgFgNgGgKQgQgWghgQQhJglhSACIADgxIABgKIACAAQBeAiBeAAIAAAAIAAAAIAbgBIANAKQAIAIAGAJQAIANADAVIAEAjIABATIAAAEIAAACIABAZIACBaIgsAMIAsgMIAAB1IgdAOIgYAHQAIg+ABhAgACGBDIAAAAgAA9ioQheAAhegiIgCAAIAAgCQAnAAASABQA3ACAqAJQAnAIAYAPIgbABIAAAAIAAAAg");
	this.shape_3.setTransform(-1.3,-54.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("ABZCGIgChbIgBgZIACgBQAcgGAdgJIgBAZQgCArABAsQgcALgaAJQAagJAcgLIAAAVQAAAlACAkQgQAQgUAOIgNAIIgHAFIAAh1gABWAQIAAgFIgBgSIgEgjQgDgVgIgNQgGgJgIgHIgNgLIANAAQAxgEAzgOIgBALQgGA2gDA1IAAACIAAABIgBACQgdAJgcAGIgCABIAAgCgAgTh+QgrgJg3gCQgSgBgnABQAFg5AJg4IFPAHQgMA9gHA9QgzAOgxAEIgNAAQgYgPgmgIg");
	this.shape_4.setTransform(3.2,-61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},3).to({state:[]},1).wait(3));

	// Layer_7
	this.instance_7 = new lib.db_handL("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(107.4,-77.3,1,1,0,-160.7,19.3,0,-18.3);

	this.instance_8 = new lib.db_armL("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(81.4,-42.1,1,1,0,-147.2,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7}]},3).to({state:[]},1).wait(3));

	// Layer_8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIZlHQgDgFgFgEQgDgEgEgDQgKgIgOgKQgOgKgSgKQgggThcggQgFgCgEgBQgkgMgtgOQhOgYhVgQQhXgLiNgGQgbgCgbAAQgIAAgIAAQhoAChhAVQgyAKggAdQgxAtgDBbQgFCHBMCtQAGAMAGANQACAMACANQAsD/BKCmQEdBRE3gWQBNhgAyhAQAvjwAjiKIAAgBQAHgbAGgXQAMgwALggQADgGACgGQAnhyAAgNQABgUgKgPQgCABgCABQgzAQguAxQhiBohHD1QgBAGgCAGQBNghAsgkQAsgiASgZQACgDADgDQAPgVAMgTAh2h5QgMBiABBSQAAAVABAUQihgXishCAEIBlQi/AdjJge");
	this.shape_5.setTransform(5.4,-7.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#17435F").s().p("AiJDLQBHj2BhhnQAugxAzgRIAEgBQAKAPgBATQAAANgnBzIgFALQgLAggMAvQgMATgPAWIgFAGQgSAYgrAkQgsAkhNAgIADgLg");
	this.shape_6.setTransform(45.9,-18.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhcBFQAghRAmgrQAmgsAYgRQAYgSAxgUIAIAGIAEALQg0ARgtAxQgkAXgdAsQgUAbghBEQgTAlgPAbQAAgEAghSg");
	this.shape_7.setTransform(46.2,-26.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2875A9").s().p("AEFB0QhFAfhxAAQigABidglQhzgbhrguIgDgZQCrBCChAYIAAgpIAAApQihgYirhCIgNgZQBVAfBKAQQBLAQBvALQAzAJBGAJQBFAHArAAQAqAAApgVQAqgUAigvIATgdQAQgbASgmQAihDATgcQAdgsAlgXQhiBnhGD2IgEALQBOggAsgkQArgjATgYIAEgGQAPgWAMgTIgNAzIAAAAQgiCKgwDxQgyBAhNBfgABFB2QBfAABcgOIAFgBIgFABQhcAOhfAAIAAAAIAAAAQheAAhggOIAAAAIgKgBIAKABIAAAAQBgAOBeAAIAAAAIAAAAgAnPANIAAAAgAENlEIgngKQAPgSAUgVQAlgnAlgSQBcAgAhATQARALAOAKQgQAOgXALQgsAUgxAAIgHAAQgnAAgwgLgAmqmkQgpgIgcgcQAggcAygLQBhgVBogBIAJAHQgbAZgZAzIgQABIhOAMQgXAEgUAAQgTAAgPgDg");
	this.shape_8.setTransform(5.7,-7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3399DB").s().p("AlHGrQhKimgskAQBrAuByAbQCeAlCggBQBxAABFgfIgHGSQhEAFhDAAQjuAAjfg/gAAEAvQhFgJg0gJIAAgOQAAhMALhaQgLBaAABMIAAAOQhugLhLgQQhLgPhUggQhMisAFiIQADhaAxguQAcAcApAIQAgAGAtgHIBOgMIAQgBIgDAHQgcA4AQA5QAQA5BZAfQBZAeBdgEQBdgEAmgnQAngnAVgaQAJgMANgOIAnAKQAzAMAqgBQAyAAAsgUQAWgLARgOQAOAJAKAJQgyAUgYARQgYASgmAsQgnArggBSQggBRAAAFIgTAdQgiAvgrAUQgoAVgqAAQgrAAhGgHg");
	this.shape_9.setTransform(4.2,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F5D802").s().p("AiNBcQhZgfgQg5QgQg4Abg4IADgHQBggJB0AZQBPASCNAxIA1ARQgNAOgJALQgVAagmAnQgmAnheAEIgWAAQhRAAhOgag");
	this.shape_10.setTransform(3.3,-39.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6B8A08").s().p("ACHBLQiMgyhPgRQh1gZhgAKQAagzAagZIABAAIAHgIIA2ACQCOAHBVAKQBWAQBOAYIBRAbIAIACQglARglAnQgUAUgPATIg1gRg");
	this.shape_11.setTransform(9.8,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).to({state:[]},1).wait(3));

	// Layer_10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACKhxQgEhLAUhIIhpgCIjigEQgIArgCArQgDAmAAAmQABBJAOBIQAKA5ASA4ACcAAQgQg4gCg5QgfAPgeALQgTAGgSAFQh/Ahhng9ACcAAQALAnAQAnIABABQgRANgQALQgPAKgPAJQiHBOiFguACcAAQgUAMgUALQgSAIgSAIQh8AviDgtAC4BPQAeB2hfAtQgTAJgYAHQgMADgLACQhXAQhTgtQgRgogNgo");
	this.shape_12.setTransform(6.8,62.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#747474").s().p("AhUC/QgRgogNgoIAGACIABAAQAuAPAuAAIAAAAIAAAAQBQAABSguIAEgBIADgCIgDACIgEABQhSAuhQAAIAAAAIAAAAQguAAgugPIgBAAIgGgCQgSg4gKg4IAEABIACAAIABAAQA9AUA7AAIAAAAIAAAAQA/AAA+gWIADgBIgDABQg+AWg/AAIAAAAIAAAAQg7AAg9gUIgBAAIgCAAIgEgBQgOhJgBhJIACABIACABIAFADIABAAQA/AiBIAAIAAAAIAAAAQAnAAArgKIADgBQAGAYAHATQAMAnAPAiQAJATALASIASAjIADAKQAFAPgCANQAAANgIAPQgFAJgLAQQgbAmgUAWQgXAEgXAAQg/AAg9ghgAgMhsQhIAAg/giIgBAAIgFgDIgCgBIgCgBQAAgmADgmQBmAlBsgIQAJAqAIAhIgDABQgrAKgnAAIAAAAIAAAAg");
	this.shape_13.setTransform(3.5,66.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("ABxDOQAMgQAEgKQAIgPABgNQABgNgFgPIAegSIgeASIgDgJIgSgkQgKgSgKgUIAkgQIgkAQQgPgigMgmQgGgTgGgXIAkgMIgkAMQgJgigJgqQhsAIhmglQACgrAIgrIDiAEQAEBgAYBPIAGAWQAMAmAVAyQAOAiASAoIADAHQALAbAAAOQAAALgEANIgKAXQgPAfgOATQgTAKgYAGIgXAFQAVgVAagmg");
	this.shape_14.setTransform(5.5,62.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4C4C4C").s().p("AAcDKIAJgWQAFgOAAgKQgBgPgKgbIAhgZQAeB2heAuQAMgUAQgfgAAcBrQgSgogNgiIAngXIgnAXQgVgxgMgnIgGgWQAegKAegPQgeAPgeAKQgYhPgEhgIBoACQgUBJAEBLQACA4AQA4QALAnAQAoIABAAIghAZIgDgHg");
	this.shape_15.setTransform(18.8,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},3).to({state:[]},1).wait(3));

	// Layer_11
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("AItDZQARgVAHgMQAFgaAEgWQABgHABgGQAEgfAAgYQgBg6gLg1QgGgjgLghQgqh0hThYQhVhYh1ghQhzgih6AOQhnAHhUAZQhVAYhmBKQgTAPgQASQhKBQgtBiQg0BygMB9QgCAXgDAYQgBAaAAAaQALAHALAIAItDZQABAFgDARQgEARgVAfQgVAehHAyQhIAyh/AdQh+AciygYQizgZiGg/QiHg+gZgQQgYgQgLgeAItDZQgYAfgdAcQgQAQgSAQQgUAQgVANQgXAQgZAOQgnAXgvAQQghAKgiAHQgcAHgcAEQgpADgpgBQghgBgigBQgsgFgtgFQgsgIgrgHQgrgLgpgMQgpgLgogPQgkgMgigOQgigPgggQQgfgPgegRQgdgQgdgR");
	this.shape_16.setTransform(6.7,110.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ag5BvQizgZiGg/QiHg9gZgQQgYgQgLgeIA6AhQAeARAfAPQAgAQAiAPQAiANAkAMQAoAPApALQApAMArALIBXAPIBZAKIBDACQApABApgDQAcgEAcgHQAigHAhgKQAvgQAngXQAZgOAXgPQAVgNAUgQQASgQAQgQQAdgcAYgfQABAFgDARQgEARgVAfQgVAehHAxQhIAyh/AdQhDAPhSAAQhIAAhTgLg");
	this.shape_17.setTransform(5.9,144.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AHJCFQgLgigOgcQgYgygjgkQgogqhOA7QhPA7hQCWQgKgcBEhmQBEhlA5gVQA5gVgQgyQgQgyhbgzQhbgzh2gJQh1gKhsAWQhfAVhnAyQgfAPghASQBmhKBVgYQBUgZBogHQB5gOBzAiQB1AhBVBYQBTBYAqBzQALAhAGAjQALA2ABA6QAAAYgEAfQAAhVgXhKg");
	this.shape_18.setTransform(17.9,93.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2875A9").s().p("ABcG0IhDgCIhZgJIhXgQQgrgKgpgMQgpgMgogOQgkgMgigPQgigOgggQQgfgPgegRIg6giIgWgPQAAgaABgaQA7AzB3A6QB4A6CuAaQCsAZAwgQQAogOASgJIAGgDIAFgCQANgGASgjQARgjBDhvQBChvBHg+QBHg/A2gTQAOAdALAhQAXBKAABVIgCAMIgJAwQgHANgRAUQgYAggdAbQgQARgSAPQgUAQgVAOQgXAPgZAOQgnAXgvAQQghALgiAHQgcAGgcAEQgdADgcAAIgZgBgAjGhjQhzgZgMgsQgPgqAzhEQAyhEBUgqQBUgrBjgEQBkgFBBAaIAIAEQAbAOASAPQAWASAMAaQAMAbgFAZQgGAegdAcQgSAQgnAeQgjAegaAnQgrAkhXABIgJAAQhUAAhtgYg");
	this.shape_19.setTransform(6.5,110.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3399DB").s().p("AhhGNQiugah3g6Qh3g6g8gzIAGgvQAMh9A0hxQAshjBKhPQARgSASgPQAhgTAfgPQBogxBfgVQBrgXB2AKQB1AKBbAzQBbAzARAyQAQAxg6AVQg5AVhEBmQhEBlALAdQBPiVBPg8QBOg8AoAqQAkAmAYAxQg3AThHA+QhGA/hDBvQhCBvgSAjQgSAjgMAGIgGACIgGADQgSAJgnAOQgTAHglAAQg7AAhqgQgAA0mSQhjAEhUArQhUAqgzBEQgzBEAPAqQAMAsB0AZQBzAaBWgCQBXgBArgkQAagnAkgeQAngeARgQQAegcAGgeQAFgZgNgbQgLgagWgSQgSgPgcgOIgIgEQg2gVhPAAIgfAAg");
	this.shape_20.setTransform(4.1,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},3).to({state:[]},1).wait(3));

	// Layer_12
	this.instance_9 = new lib.db_atL("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(63.7,-111.2);

	this.instance_10 = new lib.db_headlight("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(10.4,-146.4);

	this.instance_11 = new lib.DB_glass("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(2.4,-99.2);
	this.instance_11.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{x:2.4,y:-99.2}},{t:this.instance_10,p:{x:10.4,y:-146.4}},{t:this.instance_9,p:{x:63.7,y:-111.2}}]}).to({state:[{t:this.instance_11,p:{x:0.7,y:-109.4}},{t:this.instance_10,p:{x:8.7,y:-156.6}},{t:this.instance_9,p:{x:62,y:-121.4}}]},1).to({state:[]},1).wait(5));

	// Layer 5
	this.instance_12 = new lib.db_headf("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-3.4,-82);

	this.instance_13 = new lib.db_mon("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-5.1,-89.7);

	this.instance_14 = new lib.db_face("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-7.1,-89.7);

	this.instance_15 = new lib.db_atR("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-52.3,-110.1);

	this.instance_16 = new lib.db_neck("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-16.2,-43);

	this.instance_17 = new lib.db_handL("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(72.5,38.7,1,1,0,0,0,0,-18.5);

	this.instance_18 = new lib.db_armL("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(53.5,10.7);

	this.instance_19 = new lib.db_body("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-11.4,4.4);

	this.instance_20 = new lib.db_j("single",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-5.8,64.4);

	this.instance_21 = new lib.db_b("single",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-2.6,107.4);

	this.instance_22 = new lib.db_handR("single",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-103.4,23.7,1,1,0,0,0,-0.1,-19);

	this.instance_23 = new lib.db_armR("single",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-64.4,-30.5,1,1,0,0,0,22.9,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{regX:22.9,regY:-29,rotation:0,x:-64.4,y:-30.5,startPosition:0}},{t:this.instance_22,p:{regX:-0.1,regY:-19,skewX:0,skewY:0,x:-103.4,y:23.7}},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19,p:{y:4.4}},{t:this.instance_18,p:{rotation:0,x:53.5,y:10.7}},{t:this.instance_17,p:{rotation:0,x:72.5,y:38.7}},{t:this.instance_16,p:{y:-43}},{t:this.instance_15,p:{x:-52.3,y:-110.1}},{t:this.instance_14,p:{x:-7.1,y:-89.7}},{t:this.instance_13,p:{x:-5.1,y:-89.7}},{t:this.instance_12,p:{x:-3.4,y:-82}}]}).to({state:[{t:this.instance_23,p:{regX:22.8,regY:-28.8,rotation:96,x:-40.3,y:-18.5,startPosition:2}},{t:this.instance_22,p:{regX:0,regY:-18.8,skewX:140.2,skewY:-39.8,x:-142.7,y:-72.2}},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19,p:{y:1}},{t:this.instance_18,p:{rotation:-7.4,x:57.2,y:2.6}},{t:this.instance_17,p:{rotation:-23.7,x:79.7,y:28}},{t:this.instance_16,p:{y:-46.4}},{t:this.instance_15,p:{x:-54,y:-120.3}},{t:this.instance_14,p:{x:-8.8,y:-99.9}},{t:this.instance_13,p:{x:-6.8,y:-99.9}},{t:this.instance_12,p:{x:-5.1,y:-92.2}}]},1).to({state:[]},1).to({state:[{t:this.instance_23,p:{regX:22.8,regY:-28.8,rotation:96,x:-22.5,y:-21.5,startPosition:1}},{t:this.instance_22,p:{regX:-0.1,regY:-18.8,skewX:170.2,skewY:-9.8,x:-93.3,y:-91.7}}]},1).to({state:[]},1).wait(3));

	// Layer 2
	this.instance_24 = new lib.db_shadow("single",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(1.7,207.3);
	this.instance_24.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,rotation:1,x:9.5,y:210.5},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.7,-164.2,221.5,487.7);


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


(lib.tEn5 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(541.8,443.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.myTxt2 = new cjs.Text("Try answering this question.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 338;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(367.1,399.6);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4pAAMAxTAAA");
	this.shape.setTransform(365.5,440.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AYqGVIAAoJI5KAAIkOkTIBSETI1NAAIAAIJ");
	this.shape_1.setTransform(365.5,400.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A4pGPIAAoJIVNAAIhSkUIEOEUIZKAAIAAIJg");
	this.shape_2.setTransform(365.5,400.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Well done! You made it. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 307;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-23,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4hEFIAAoEMAxDAAAIAAIE");
	this.shape_3.setTransform(-22.9,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4hiaMAonAAAIEOESIhSkSIFgAA");
	this.shape_4.setTransform(-22.9,41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AQGB5MgonAAAIAAoDMAxDAAAIAAIDIlgAAIBSESg");
	this.shape_5.setTransform(-22.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.9,-27,318,85.6);


(lib.tEn4 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(277.1,33.3,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("All’s clear. Now let’s figure out what’s on this thing.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 337;
	this.myTxt.parent = this;
	this.myTxt.setTransform(96,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Aa2ifI4lAKI1XAAIkOESIBSkSIkzAA");
	this.shape.setTransform(96.5,42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Aa2GOIAAsgI4lAKI9GAAIAAMg");
	this.shape_1.setTransform(96.5,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A2CEMIkzAAIAAsgIdGAAIYlgKIAAMgI4lAKI1XAAIkOETg");
	this.shape_2.setTransform(96.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn4, new cjs.Rectangle(-77.3,-54.9,379.3,115), null);


(lib.tEn1 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(179.7,474.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.myTxt2 = new cjs.Text("He doesn't look like\nhe likes us.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 247;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(33.5,403.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AWKAAMgsTAAA");
	this.shape.setTransform(34.5,475.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A33GhIAAs7MAsUAAAIAAFJIDSg6IjSDEIAAFo");
	this.shape_1.setTransform(45.4,433.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A3yGeIAAs7MAsTAAAIAAFJIDSg5IjSDDIAAFog");
	this.shape_2.setTransform(45,433.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Hi!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 79;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(51.7,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Am5hsIG0AAIGFDCIjKjCIEEAA");
	this.shape_3.setTransform(52.4,30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AG6EFIAAoDItzAAIAAID");
	this.shape_4.setTransform(52.4,-6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AgFCgIm0AAIAAoCINyAAIAAICIkDAAIDKDEg");
	this.shape_5.setTransform(52.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.2,-33,92.3,76.5);


(lib.tBm5 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(541.8,443.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Cubalah jawab soalan ini.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 282;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(380.1,399.6);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2TAAMAsnAAA");
	this.shape.setTransform(380.5,440.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AWUGVIAAoJI5KAAIkOkTIBSETIwhAAIAAIJ");
	this.shape_1.setTransform(380.5,400.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A2TGPIAAoJIQhAAIhSkUIEOEUIZKAAIAAIJg");
	this.shape_2.setTransform(380.5,400.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Bagus! Dah datang pun anda.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 339;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-22.3,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4hEFIAAoEMAxDAAAIAAIE");
	this.shape_3.setTransform(-22.9,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4hiaMAonAAAIEOESIhSkSIFgAA");
	this.shape_4.setTransform(-22.9,41);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AQGB5MgonAAAIAAoDMAxDAAAIAAIDIlgAAIBSESg");
	this.shape_5.setTransform(-22.9,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.5,-27,342.6,85.6);


(lib.tBm4 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(277.1,33.3,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Beres! Sekarang, mari kita lihat\napa yang ada di sini.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 338;
	this.myTxt.parent = this;
	this.myTxt.setTransform(95.7,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Aa2ifI4lAKI1XAAIkOESIBSkSIkzAA");
	this.shape.setTransform(96.5,42.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Aa2GOIAAsgI4lAKI9GAAIAAMg");
	this.shape_1.setTransform(96.5,-13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A2CEMIkzAAIAAsgIdGAAIYlgKIAAMgI4lAKI1XAAIkOETg");
	this.shape_2.setTransform(96.5,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm4, new cjs.Rectangle(-77.3,-54.9,379.3,115), null);


(lib.tBm1 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(185.7,474.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Dia tak kelihatan seperti\nyang dia sukakan kita.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 274;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(35.1,401.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AWKAAMgsTAAA");
	this.shape.setTransform(34.5,475.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A33GhIAAs7MAsUAAAIAAFJIDSg6IjSDEIAAFo");
	this.shape_1.setTransform(45.4,433.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A3yGeIAAs7MAsTAAAIAAFJIDSg5IjSDDIAAFog");
	this.shape_2.setTransform(45,433.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Hai!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 78;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(61.3,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Am5hcIG0AAIF7CkIjAikIEEAA");
	this.shape_3.setTransform(61.4,35.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AG6EFIAAoEItzAAIAAIE");
	this.shape_4.setTransform(61.4,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AgFCvIm0AAIAAoCINyAAIAAICIkDAAIDAClg");
	this.shape_5.setTransform(61.4,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.2,-26,92.3,73.3);


(lib.TAPIR_HERO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tapir_spacehelmet("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-26.2,-277,1,1,0,-6.7,173.3,0.1,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1).to({regX:0,regY:0,skewX:0,skewY:0,x:-5.4,y:-293.2},0).wait(1).to({regX:-0.1,regY:-0.1,rotation:-1.3,x:-11.6,y:-291.2},0).wait(1).to({regX:0,regY:0,rotation:0,skewX:-2.7,skewY:177.3,x:-27.9,y:-292},0).wait(1).to({skewX:0,skewY:0,x:-5.4,y:-293.2},0).to({_off:true},1).wait(2));

	// Layer_4
	this.instance_1 = new lib.T_shoulderPad_L("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-101.4,-155.2,1,1,0,-6.7,173.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(1).to({skewX:0,skewY:0,x:83.7,y:-181.3},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-19.4,x:79.3,y:-201.3},0).wait(1).to({regX:0,regY:0,rotation:0,skewX:-2.7,skewY:177.3,x:-111.6,y:-176},0).wait(1).to({regY:-0.1,rotation:-9.1,skewX:0,skewY:0,x:82.7,y:-190.3},0).to({_off:true},1).wait(2));

	// tapir body
	this.instance_2 = new lib.T_shoulderPad_R("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.3,-175.8,1,1,0,-6.7,173.3);

	this.instance_3 = new lib.T_Body("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(15.6,-112.5,1,1,0,-6.7,173.3,-0.1,0.2);

	this.instance_4 = new lib.T_Arm_R("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(111.7,-191.6,1,1,0,-6.7,173.3,-33.8,-140);

	this.instance_5 = new lib.T_Legs("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.8,-18.4,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{skewY:180,x:3.8}},{t:this.instance_4,p:{skewX:-6.7,skewY:173.3,x:111.7,y:-191.6,regY:-140,rotation:0,startPosition:0}},{t:this.instance_3,p:{regX:-0.1,skewX:-6.7,skewY:173.3,x:15.6,y:-112.5,rotation:0,regY:0.2,startPosition:1}},{t:this.instance_2,p:{skewX:-6.7,skewY:173.3,x:117.3,y:-175.8,regX:0,regY:0,rotation:0}}]},2).to({state:[{t:this.instance_5,p:{skewY:0,x:-3.8}},{t:this.instance_4,p:{skewX:0,skewY:0,x:-132.2,y:-192.4,regY:-140,rotation:0,startPosition:0}},{t:this.instance_3,p:{regX:0,skewX:0,skewY:0,x:-27.5,y:-125.1,rotation:0,regY:0.2,startPosition:1}},{t:this.instance_2,p:{skewX:0,skewY:0,x:-136,y:-176.1,regX:0,regY:0,rotation:0}}]},1).to({state:[{t:this.instance_5,p:{skewY:0,x:-3.8}},{t:this.instance_4,p:{skewX:0,skewY:0,x:-136.3,y:-188.9,regY:-140.1,rotation:-1.5,startPosition:0}},{t:this.instance_3,p:{regX:0,skewX:0,skewY:0,x:-29.9,y:-122.6,rotation:-1.3,regY:0.2,startPosition:1}},{t:this.instance_2,p:{skewX:0,skewY:0,x:-139.7,y:-172.5,regX:-0.1,regY:-0.1,rotation:-1.5}}]},1).to({state:[{t:this.instance_5,p:{skewY:180,x:-17.8}},{t:this.instance_4,p:{skewX:-2.7,skewY:177.3,x:103.6,y:-197.4,regY:-140,rotation:0,startPosition:0}},{t:this.instance_3,p:{regX:-0.1,skewX:-2.7,skewY:177.3,x:2.2,y:-125.2,rotation:0,regY:0.1,startPosition:0}},{t:this.instance_2,p:{skewX:-2.7,skewY:177.3,x:108.1,y:-181.2,regX:0,regY:0,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{skewX:0,skewY:0,x:-126.5,y:-203.9,regY:-140.1,rotation:7,startPosition:1}},{t:this.instance_2,p:{skewX:0,skewY:0,x:-134.4,y:-187.9,regX:-0.1,regY:0,rotation:8.2}}]},1).to({state:[]},1).wait(2));

	// T_Body
	this.instance_6 = new lib.T_Body("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-27.5,-125.1,1,1,0,0,0,0,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({_off:true},1).wait(2));

	// T_Legs
	this.instance_7 = new lib.T_Legs("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.8,-18.4,1,1,0,0,0,16.9,-193.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_6
	this.instance_8 = new lib.T_Arm_L("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-88.3,-160,1,1,0,-6.7,173.3,-14.8,-117.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).wait(1).to({regY:-117.2,skewX:0,skewY:0,x:70.2,y:-184.3},0).wait(1).to({regY:-117.3,rotation:-1.3,x:60.9,y:-195.1,startPosition:2},0).wait(1).to({rotation:0,skewX:-2.7,skewY:177.3,x:-98.1,y:-179.7,startPosition:1},0).wait(1).to({rotation:-3,skewX:0,skewY:0,x:69.2,y:-188.4},0).to({_off:true},1).wait(2));

	// tapir head
	this.instance_9 = new lib.tapirhead("single",2);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-28.3,-261.8,1,1,-11.2,0,0,-0.1,0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).wait(1).to({rotation:0,skewX:4.5,skewY:-175.5,x:-1.4,y:-278.5,startPosition:0},0).wait(1).to({regY:0,skewX:3.2,skewY:-176.8,x:-7.2,y:-276.5,startPosition:1},0).wait(1).to({rotation:-7.2,skewX:0,skewY:0,x:-31.1,y:-277.2,startPosition:2},0).wait(1).to({regY:0.1,rotation:0,skewX:4.5,skewY:-175.5,x:-1.4,y:-278.5,startPosition:1},0).to({_off:true},1).wait(2));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],14.8,-40.4,0,14.8,-40.4,285.4).s().p("ALJHMQhKgOj+hGQjKg3iAgNQiEgOiwAPQgpAEkLAgQk+Anj1gDQkxgDj8hBQiIgkhXhWQhlhjAthmQAYg0A9gkQApgYBOgaQHmibHihRIADAAQGwheHAgQQKUgWJ6CWQBcAVA9A9QBGBEgsA+QBuAjA1AYQBXAmA4A0QAdAZAUAeQAcApAOAxQAZBbgmBJQgmBJhhAnQhEAchzAPQkMAijCAEIg2AAQjcAAi5glg");
	this.shape.setTransform(0,351.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).to({_off:true},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-369.7,395,770.6);


(lib.starzRandom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gs_motion();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.2,0.2,-90,0,0,0,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:0.5,scaleY:0.5,rotation:0,alpha:1},18,cjs.Ease.quadOut).to({regY:0.1,rotation:90,alpha:0},15,cjs.Ease.cubicIn).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-21.4,46,46);


(lib.hlBlinkStars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.starzRandom("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-8.9,-26.2,0.8,0.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({_off:false},0).to({_off:true},51).wait(12));

	// Layer_10
	this.instance_1 = new lib.starzRandom("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(12.4,6.1,0.8,0.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({_off:true},51).wait(1));

	// Layer_9
	this.instance_2 = new lib.starzRandom("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.1,-11.4,0.8,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({_off:true},51).wait(17));

	// Layer_8
	this.instance_3 = new lib.starzRandom("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.9,20.6,0.8,0.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({_off:true},51).wait(21));

	// Layer_7
	this.instance_4 = new lib.starzRandom("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(15.9,-28.9,0.8,0.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({_off:true},51).wait(23));

	// Layer_6
	this.instance_5 = new lib.starzRandom("synched",0,false);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-15.9,-4.7,1,1,0,0,0,0,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(13).to({_off:false},0).to({_off:true},51).wait(29));

	// Layer_5
	this.instance_6 = new lib.starzRandom("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(2.6,-0.7,0.7,0.7,0,0,0,0.1,-0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({_off:true},51).wait(33));

	// Layer_4
	this.instance_7 = new lib.starzRandom("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(19.6,-10.7,0.8,0.8);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true},51).wait(36));

	// Layer_3
	this.instance_8 = new lib.starzRandom("synched",0,false);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-8.3,11.3,1.2,1.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({_off:false},0).to({_off:true},51).wait(38));

	// Layer_2
	this.instance_9 = new lib.starzRandom("synched",0,false);
	this.instance_9.parent = this;
	this.instance_9.setTransform(19.5,11.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({_off:true},50).wait(35));

	// Layer_1
	this.instance_10 = new lib.starzRandom("synched",0,false);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-10.3,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},51).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-42.1,48,47);


(lib.dialogue5 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm5();
	this.instance.parent = this;
	this.instance.setTransform(-80.1,-20.5);

	this.instance_1 = new lib.tEn5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.2,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.6,-47,342.5,85.1);


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
p.nominalBounds = new cjs.Rectangle(-157.4,-74.9,379.3,114.5);


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
p.nominalBounds = new cjs.Rectangle(64.2,-46,92.3,72.8);


// stage content:
(lib.intro2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:4,a2:101,a3:217,a4:387});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;
	}
	this.frame_4 = function() {
		_this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a2");
		}
		this.addEventListener("click", doPlay);
		playSound("intro");
	}
	this.frame_55 = function() {
		playSound("monsterGrowl");
	}
	this.frame_95 = function() {
		this.stop();
	}
	this.frame_166 = function() {
		this.stop();
		function doPlay(e){
			_this.btnClick.removeEventListener("click", doPlay);
			_this.play();
		}
		this.btnClick.addEventListener("click", doPlay);
	}
	this.frame_167 = function() {
		playSound("questionComplete");
	}
	this.frame_217 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a4");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_218 = function() {
		playSound("monsterGrowl");
	}
	this.frame_360 = function() {
		this.stop();
	}
	this.frame_387 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_445 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(51).call(this.frame_55).wait(40).call(this.frame_95).wait(71).call(this.frame_166).wait(1).call(this.frame_167).wait(50).call(this.frame_217).wait(1).call(this.frame_218).wait(142).call(this.frame_360).wait(27).call(this.frame_387).wait(58).call(this.frame_445).wait(1));

	// blink
	this.instance = new lib.hlBlinkStars();
	this.instance.parent = this;
	this.instance.setTransform(41.7,106.2,1,1,0,0,0,0.1,-2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(166).to({_off:false},0).to({_off:true},1).wait(279));

	// btn
	this.btnClick = new lib.btnCandy();
	this.btnClick.name = "btnClick";
	this.btnClick.parent = this;
	this.btnClick.setTransform(43.6,106.2);
	new cjs.ButtonHelper(this.btnClick, 0, 1, 2, false, new lib.btnCandy(), 3);

	this.instance_1 = new lib.sack_of_candy("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(45.8,105.1,0.15,0.15,0,0,0,17.7,-7.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnClick}]},166).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},24).to({state:[{t:this.instance_1}]},25).to({state:[]},1).wait(229));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).to({regX:17.9,regY:-6.9,scaleX:0.6,scaleY:0.6,rotation:8.7,x:434.9,y:293.3},24,cjs.Ease.cubicOut).to({regX:17.7,regY:-6.7,scaleX:0.22,scaleY:0.22,x:266.3,y:324.2},25,cjs.Ease.backOut).to({_off:true},1).wait(229));

	// inventory
	this.instance_2 = new lib.inventory("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(48.1,273.3,1,1,0,0,0,1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).wait(19).to({startPosition:59},0).wait(1).to({startPosition:60},0).to({x:-55.9,startPosition:65},17,cjs.Ease.cubicIn).to({_off:true},1).wait(261));

	// t
	this.instance_3 = new lib.dialogue1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(348.6,107.7);

	this.instance_4 = new lib.dialogue3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(206.6,108.7);

	this.instance_5 = new lib.dialogue4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(504.9,119.1);

	this.instance_6 = new lib.dialogue5();
	this.instance_6.parent = this;
	this.instance_6.setTransform(278.8,105.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},65).to({state:[{t:this.instance_4}]},36).to({state:[]},115).to({state:[{t:this.instance_5}]},142).to({state:[]},3).to({state:[{t:this.instance_6}]},26).wait(59));

	// sky
	this.instance_7 = new lib.DigiBot("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(685.9,500.9,0.585,0.585,0,0,0,-2.5,65.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.bbb_hologram("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(368.4,282.4,0.81,0.81,0,0,0,0.1,0.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55).to({_off:false},0).wait(30).to({startPosition:1},0).wait(16).to({startPosition:0},0).wait(46).to({startPosition:3},0).to({_off:true},70).wait(141).to({_off:false,regX:-2.4,regY:65.6,scaleX:0.91,scaleY:0.91,x:575.4,y:608,startPosition:0},0).to({_off:true},3).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(361).to({_off:false},0).to({scaleX:0.85,scaleY:0.85,alpha:1},12,cjs.Ease.get(0.5)).to({regX:0,regY:0,scaleX:0.81,scaleY:0.81,x:368.3,y:282.3},14,cjs.Ease.get(0.5)).wait(29).to({startPosition:1},0).wait(30));

	// fg
	this.instance_9 = new lib.p2_FG("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(242.3,497.4);

	this.instance_10 = new lib.p2_fg2("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-155,137.4,0.9,0.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:360.3},45,cjs.Ease.get(0.5)).to({_off:true},10).wait(391));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(55).to({_off:false},0).wait(162).to({scaleX:1.8,scaleY:1.8,x:-285.7,y:-168.3},0).wait(96).to({startPosition:0},0).to({regX:-0.1,regY:0.1,scaleX:1.98,scaleY:1.98,x:-303.1,y:-188.1},18,cjs.Ease.cubicOut).to({_off:true},27).wait(3).to({_off:false,scaleX:2.81,scaleY:2.81,x:-1901.5,y:64.6},0).wait(85));

	// spaceship
	this.instance_11 = new lib.Bitmap17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(322.2,-17.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(260).to({_off:false},0).to({_off:true},10).wait(11).to({_off:false,scaleX:0.84,scaleY:0.84,x:158.8,y:-113.4},0).to({_off:true},10).wait(11).to({_off:false,x:-57.4,y:-230.6},0).to({_off:true},11).wait(133));

	// spaceship
	this.instance_12 = new lib.spaceship("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(59.2,217.9);

	this.instance_13 = new lib.monster_planet3("single",1);
	this.instance_13.parent = this;
	this.instance_13.setTransform(238.1,364.7,0.225,0.225,0,-4.5,175.5,-0.7,0.5);
	this.instance_13.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-571,-492,1140,969);

	this.instance_14 = new lib.Bitmap20();
	this.instance_14.parent = this;
	this.instance_14.setTransform(286.9,79);

	this.instance_15 = new lib.Bitmap19();
	this.instance_15.parent = this;
	this.instance_15.setTransform(286.9,79);

	this.instance_16 = new lib.Bitmap18();
	this.instance_16.parent = this;
	this.instance_16.setTransform(215,-68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12}]},45).to({state:[{t:this.instance_13,p:{startPosition:1}}]},10).to({state:[{t:this.instance_13,p:{startPosition:0}}]},46).to({state:[{t:this.instance_13,p:{startPosition:2}}]},115).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},5).to({state:[]},38).to({state:[{t:this.instance_16,p:{scaleX:1,scaleY:1,x:215,y:-68.4}}]},10).to({state:[]},11).to({state:[{t:this.instance_16,p:{scaleX:0.86,scaleY:0.86,x:27.3,y:-161}}]},10).to({state:[]},11).wait(144));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:114.2},45,cjs.Ease.get(0.5)).to({_off:true},10).wait(391));

	// orb
	this.instance_17 = new lib.orbs("synched",0,false);
	this.instance_17.parent = this;
	this.instance_17.setTransform(123.1,398.6,0.18,0.18,-6,0,0,0.5,0.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(55).to({_off:false},0).wait(162).to({scaleX:0.36,scaleY:0.36,x:270.5,y:354.1,startPosition:115},0).wait(96).to({startPosition:178},0).to({regX:0.6,regY:0.5,scaleX:0.4,scaleY:0.4,x:308.7,y:386.2},18,cjs.Ease.cubicOut).wait(27).to({regX:0,regY:-0.4,scaleX:0.25,scaleY:0.25,rotation:-2.8,x:460.7,y:205.4,startPosition:0},0).wait(3).to({regX:0.2,regY:-0.3,scaleX:1.2,scaleY:1.2,x:399.6,y:298.6,mode:"independent"},0).wait(85));

	// mg
	this.instance_18 = new lib.p2_mg("single",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(703.8,241.8);

	this.instance_19 = new lib.TAPIR_HERO("single",3);
	this.instance_19.parent = this;
	this.instance_19.setTransform(715.6,300.7,0.585,0.585,0,0,180,-272.9,5.2);
	this.instance_19._off = true;

	this.instance_20 = new lib.T_Arm_L("single",1);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-265.8,390.4,4.999,4.999,-2.8,0,0,-14.8,-117.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[{t:this.instance_18}]},45).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_19}]},10).to({state:[{t:this.instance_19}]},20).to({state:[{t:this.instance_19}]},16).to({state:[{t:this.instance_19}]},115).to({state:[]},1).to({state:[{t:this.instance_19}]},141).to({state:[{t:this.instance_20}]},3).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({x:740.8},45,cjs.Ease.get(0.5)).to({_off:true},10).wait(391));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(55).to({_off:false},0).wait(10).to({startPosition:4},0).wait(20).to({startPosition:3},0).wait(16).to({x:685.6,startPosition:5},0).wait(115).to({regX:0.1,regY:400.8,skewY:0,x:538.2,y:531.9,startPosition:2},0).to({_off:true},1).wait(141).to({_off:false,regY:400.9,scaleX:0.91,scaleY:0.91,x:282.9,y:763.9,startPosition:6},0).to({_off:true},3).wait(85));

	// ground
	this.instance_21 = new lib.p2_BG("single",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(276.5,278.9);

	this.instance_22 = new lib.bg2("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(558.6,355.1);

	this.instance_23 = new lib.Symbol2("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(404,304);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_21}]},45).to({state:[{t:this.instance_22,p:{x:558.6,y:355.1}}]},10).to({state:[{t:this.instance_23}]},162).to({state:[{t:this.instance_23}]},96).to({state:[{t:this.instance_23}]},18).to({state:[{t:this.instance_22,p:{x:567.6,y:302.1}}]},27).to({state:[{t:this.instance_23}]},3).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({x:327.9},45,cjs.Ease.get(0.5)).to({_off:true},10).wait(391));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(217).to({_off:false},0).wait(96).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1,x:455.5,y:331},18,cjs.Ease.cubicOut).to({_off:true},27).wait(3).to({_off:false,scaleX:1,scaleY:1,x:404,y:304},0).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,287.8,1503.1,752.8);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/intro2/Bitmap1.png?1521214765762", id:"Bitmap1"},
		{src:"images/intro2/Bitmap10.png?1521214765762", id:"Bitmap10"},
		{src:"images/intro2/Bitmap12.png?1521214765762", id:"Bitmap12"},
		{src:"images/intro2/Bitmap13.png?1521214765762", id:"Bitmap13"},
		{src:"images/intro2/Bitmap14.png?1521214765762", id:"Bitmap14"},
		{src:"images/intro2/Bitmap15.png?1521214765762", id:"Bitmap15"},
		{src:"images/intro2/Bitmap16.png?1521214765762", id:"Bitmap16"},
		{src:"images/intro2/Bitmap17.png?1521214765762", id:"Bitmap17"},
		{src:"images/intro2/Bitmap18.png?1521214765762", id:"Bitmap18"},
		{src:"images/intro2/Bitmap19.png?1521214765762", id:"Bitmap19"},
		{src:"images/intro2/Bitmap2.png?1521214765762", id:"Bitmap2"},
		{src:"images/intro2/Bitmap20.png?1521214765762", id:"Bitmap20"},
		{src:"images/intro2/Bitmap21.png?1521214765762", id:"Bitmap21"},
		{src:"images/intro2/Bitmap3.png?1521214765762", id:"Bitmap3"},
		{src:"images/intro2/Bitmap4.png?1521214765762", id:"Bitmap4"},
		{src:"images/intro2/Bitmap5.png?1521214765762", id:"Bitmap5"},
		{src:"images/intro2/Bitmap5_1.png?1521214765762", id:"Bitmap5_1"},
		{src:"images/intro2/Bitmap6.png?1521214765762", id:"Bitmap6"},
		{src:"images/intro2/Bitmap7.png?1521214765762", id:"Bitmap7"},
		{src:"images/intro2/Bitmap7copy.png?1521214765762", id:"Bitmap7copy"},
		{src:"images/intro2/Bitmap8.png?1521214765762", id:"Bitmap8"},
		{src:"images/intro2/Bitmap8copy.png?1521214765762", id:"Bitmap8copy"},
		{src:"images/intro2/Bitmap9.png?1521214765762", id:"Bitmap9"},
		{src:"sounds/intro.mp3?1521214765762", id:"intro"},
		{src:"sounds/monsterGrowl.mp3?1521214765762", id:"monsterGrowl"},
		{src:"sounds/questionComplete.mp3?1521214765762", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1521214765762", id:"stdClick"}
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