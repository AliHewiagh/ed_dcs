(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,522);


(lib.Bitmap10_1 = function() {
	this.initialize(img.Bitmap10_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,262);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,206);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1564,1786);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,639,532);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,64);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1630,299);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,824,620);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,241);


(lib.Bitmap3_1 = function() {
	this.initialize(img.Bitmap3_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,600);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,231);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1772,1226);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
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


(lib.tEn2 = function(mode,startPosition,loop) {
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
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_7
	this.myTxt = new cjs.Text("I think we have something for\nthat much needed energy.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 367;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(235.4,25.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("AbzjvI4ZAAIFNHAIpLnAI7OAA");
	this.shape.setTransform(235.4,115.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("A7yFpIAArMMA3lAAAIAALM");
	this.shape_1.setTransform(235.4,55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AgkCGI7OAAIAArMMA3lAAAIAALMI4ZAAIFNHBg");
	this.shape_2.setTransform(235.4,78.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn2, new cjs.Rectangle(50.1,18.9,370.5,122.7), null);


(lib.tBm2 = function(mode,startPosition,loop) {
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
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Saya rasa kita ada sesuatu untuk mendapatkan\ntenaga tambahan yang diperlukan.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 526;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(237.2,25.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("EAovgDvMgk0AAAIFMHAIpLnAMgoqAAA");
	this.shape.setTransform(232.1,115.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("EgouAFpIAArMMBRdAAAIAALM");
	this.shape_1.setTransform(232.1,55.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AgECGMgoqAAAIAArMMBRdAAAIAALMMgk0AAAIFMHBg");
	this.shape_2.setTransform(232.1,78.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm2, new cjs.Rectangle(-30.5,18.9,532.6,122.7), null);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIkAAQgXARgZAOAKDhQQgHAGgGAGQgnAmgrAeQAMADAKAFQAfARgBAmQAAAKgBAJIhAA8QgYA+h6AUQAPgkgKAAQgHgBg4AGQgfADgtAEQiBAMjHgQQgOAagKAJQgFAEgEADQgGAEgFABQgCAAgBAAQhUgMg5gOQg5gNgNgWQgYAGhAgvIgBAAAkgApQgBgBAAgBIAIgDQBLgEBGgDQAYAAAYgBQDigICmADQAZAAAXABQBAABA1AEQAQABAPABAIXCOQABgKABgMQACgbgEgMQgFgWgWgVQgDgDgFgEAKcAGQgVAbgaAcQgCACgCACIgSARALVhNQAJgRAJgRQAWg5gfgKQgEgBgEgBQgIALgIALQADADADADQAGAJAFANQADAJAAAMQAAAOgFASQgYAqghApAKDhQQAGACAGAHQADADADAFQAIAMAEATQADATgIATALGieQgeAoglAmAoRhFQgHAFgHAHQgCACgBABQgKALgHAOQgLAVgDAVAluAZQgTgIgYgMQgygXhGgzAqRi4QA4A9A4AqQAIAGAIAGAluAZQgKADgIAGQgHAFgHAHQgGAHgEAJQgPAbgCAYQgBAXAGAFQgXgRgWgSQgggZgggbQgZgWgXgTAkgApQACALABAKQACATgDARQgGAtgkAkQgBACgCABAkgApQgOAAgagEQgPgDgXgJAqRi4QgFgGgGgGIgKgLQgPgRgNgSQgHgCgNAFQgGADgGAHQgGAHgEAKQgHAMAKAaQAHAQAOAVQAGALANAPAqRi4QgBABAAAAQgLAIgJAKQgGAIgGAJQgLASgEATQAnAuBZBO");
	this.shape_3.setTransform(-23,70.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#707F84").ss(1,1,1,3,true).p("Aq6JmQihjDAbk3QAKh5AthsQBJiwCkiKQBQhEBYgtQCDhDCUgSQBLgKBQAEQFSAODnDsQAMAMALAMQCcCtAVDPQAiFuifEE");
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
	this.shape_10.graphics.f("#272727").s().p("ACAB9QAIgGAKgDQAXAJAPADQAZAEAOAAIAEAVQgygKgxgSgACAB9QhSgghPg5IADgDQAHgHAHgFQBFAzAyAYQAYAMATAIQgKADgIAGIAAAAgAghAkQhDguhBhAQAJgKAKgIIABgBQA5A9A4ApIAQAMQgHAFgHAHIgDADIAAAAgAilhKQgegegfgiQAGgHAHgDQANgFAHACQAMASAQARIAKALIAKAMIgBABQgKAIgJAKIAAAAg");
	this.shape_10.setTransform(-74.2,61.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ABjCkIgBAAQgFgEAAgRIAAgHQACgYAPgaQAEgJAGgHQAGgHAIgGQgIAGgGAHQgGAHgEAJQgPAagCAYIAAAHQAAARAFAEQgXgQgWgSIg/g1IgwgpQADgWALgUQAGgNALgLQBPA4BSAfQAxATAyAKQABASgCARQgGAugkAkIgDACIgGABQgaAAg4gqgAi6hXQAEgUALgSQAGgJAGgHQBBBABDAvQgLALgGANQgLAUgDAWQhZhOgngtgAgbgeIAAAAgAjNhyQgOgVgHgQQgKgZAHgMQAEgLAGgGQAeAiAeAeQgGAHgGAJQgLASgEAUQgNgQgGgLgAifiNIAAAAg");
	this.shape_11.setTransform(-74.9,68.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(127,168,183,0.298)").s().p("Ag9LXQhZggg6gxQg+g1grhWQgjhFgZhjQhDkBAbkIIAGg4QAfjeBfjEQCChDCVgSQhPEDABDoQACJGH0GWIgvgBQimgDjiAIQgYgHgUgIg");
	this.shape_12.setTransform(-30,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(108,143,156,0.298)").s().p("AB8K+QgPgDgXgJQgTgIgYgMQgxgZhGgyIgQgNQg4gpg4g9IgLgMIgKgLQihjDAbk2QAKh6AthsQBJiwCkiKQBPhEBYgtQheDEgeDdIgHA4QgaEJBBEBQAaBiAjBFQArBWA+A2QA6AxBZAgQATAIAYAGIgwACIiRAGIgIADIABADQgOAAgagEg");
	this.shape_13.setTransform(-68.3,4.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(177,234,255,0.298)").s().p("AB0LpQg1gEg/gBQn1mXgCpFQgBjoBOkDQBLgKBRAEQFRAODnDsIAXAYQCcCtAVDQQAiFtifEEIgQAWQgeAoglAmIgNAMQgnAmgrAeQgXASgZAOIgfgCg");
	this.shape_14.setTransform(12.3,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.3,-54,98.6,108);


(lib.T_shoulderPad_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABBB1QhHhkglgwIg0hIIgggsIAcgvQAnBEAuBFQAsBDBhCzQACAGgCAAQgFAAg5hOg");
	this.shape.setTransform(0.4,-18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhSluIhAg+IgZgHIinDOIAjEKIEkE/IE4BQIAmgRQgghPglhRQiNkxjSk/");
	this.shape_1.setTransform(-1.7,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E2326").s().p("AgLFkIkjk/IgkkKICnjOIAZAHIilDRIAcDtIEoFDIFGBOIgmARg");
	this.shape_2.setTransform(-1.7,-4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("AAAFaIkplDIgbjtICljRIBAA/IiKCuIAJCbIDmD6ID6AtQAlBQAgBQg");
	this.shape_3.setTransform(-0.3,-4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC3D42").s().p("AgEEMIjnj7IgJiaICKivIAAABQDSE+CNEyg");
	this.shape_4.setTransform(0.8,-9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqgkQhGhZgGgFIAcgYQA6BLApA8QAqA5BEB1QhRhahQhlg");
	this.shape_5.setTransform(-3.1,-26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAk7Ig/g4IgYgFIlAChIADE8IFWEBQDogRDXAkIAXgOIgshcQjAmHisjDg");
	this.shape_6.setTransform(-12.9,-12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E2326").s().p("Ag+FmIlWkBIgDk8IFAihIAYAFIlHClIAUElIFBD8QDxgRDYApIgXAOQjXgkjoARg");
	this.shape_7.setTransform(-12.9,-12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A92F33").s().p("Ag6FYIlAj9IgUklIFHikIA+A3IkQCQIARDSIDwC8QDLgMCwA4IAsBcQjXgpjyASg");
	this.shape_8.setTransform(-12.1,-12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DC3D42").s().p("Ag9D6Ijvi8IgSjTIERiQQCsDDDAGIQiwg4jMAMg");
	this.shape_9.setTransform(-8.4,-14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.6,-48.8,69.8,89.2);


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

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAQlcQgUABhVA6QgSALgVAYQgFAEgVAWQgVAVgYAiQgYAjgLAVQgCACgHAMQgGALgJAVQgrBdABBKQAAABAAADQAAAFACAHQALBPA2A9QAoAtA4AYQA5AXA8AEQASABASgCQAmgHAmgQQASgLAUgLQAbgRASgcQADgGACgIQAGggAGgiQAKg2APgzQAPg1ATgxQAKgcAMgaQAOgfAOgd");
	this.shape_4.setTransform(-2,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#353B48").s().p("Ai4A2QAIgVAHgMIAJgOQA9BOBUAfQBNAbAOANQggAIgfAAQhvAAhWhugAAYgzQhLgygDgbQAUgZATgKQAsBFCcBPQgQABgQAAQhHAAg6glg");
	this.shape_5.setTransform(-9.4,-9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#545E73").s().p("AgXE3Qg8gFg4gXQg5gYgngsQg2g+gLhPQBICCCWAaQCIAVAUiAQAUiGAyhuQAnhXAzg6QAOgRAfgbQAOBGAEArIAAAGIAAAFIgCAFIgcA7QgMAagLAcQgTAygOA1QgPAygKA2IgNBCIgEAOQgSAcgbARIgmAWQgmAQgnAHQgOACgPAAIgHAAg");
	this.shape_6.setTransform(-1.8,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A89A7").s().p("AhEE5QiVgahJiCQgCgHAAgFIAAgEQgBhKArhdQBuCLCWgmQgMgNhPgbQhUgeg9hNQALgVAYgjQAYgiAVgVQAVgWAFgEQADAbBMAyQBGAuBagKQibhPgthFQBUg6AVgBIgBAAIAUgGQAZgGAdAAIA0ABQAWABAvAVQAvAWAcArQgfAbgOARQgzA6gmBXQgzBsgUCHQgRBvhnAAQgQAAgUgDg");
	this.shape_7.setTransform(-2.8,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

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

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ag6gMQAugiAcgMQAegMAcAaQAKAJALAKQABACACACQADADACACQACACACACQANANANAOQgyBLjXgrQAcgaAughg");
	this.shape_7.setTransform(4.7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#353B48").s().p("AghALQgOgIgNgPQA5ALBAgQQgQAOgTAKQgNAJgMABIgIABQgMAAgOgHg");
	this.shape_8.setTransform(5.5,9.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("Ag5ANQAHADAIgEQAHgEACgHQAHAEAHACQAJACAGgFQACgDACgIIAYAGIAIABQADAAACgBQAEgCADgFIAGgOIADADIAGAFIgHANQgHAMgGABQgFABgJgEQgLgFgEgBQgIAOgEACQgLAEgPgKQgCAKgNAAIgCAAQgIAAgEgKg");
	this.shape_9.setTransform(9.2,-0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiEAvQAcgaAughQAugiAcgMQAegMAcAaIAVATIgGAOQgEAGgDACQgCABgEAAIgHgBIgYgGQgDAIgCADQgHAFgIgDQgHgBgHgEQgCAHgHAEQgHADgIgCQAFALAJgBQANAAACgKQAPAJAKgDQAGgDAIgNQAEAAAKAFQAJAFAGgCQAGgBAHgLIAGgNIAEAEIAaAbQggAwhiAAQg4AAhPgQg");
	this.shape_10.setTransform(4.7,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABwgHQhngfh4A5");
	this.shape_11.setTransform(-0.5,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABqAPQhrgFhLAVQgQAEgNAGQgCgdAIgRQAQgjAyAAQAcAAAYAHQADABADAAQAnAMAgAaQAFAEAFAFg");
	this.shape_12.setTransform(-0.7,-1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAEgQQAbAAAaAGIAGACIguAIIhPARQAQghAyAAg");
	this.shape_13.setTransform(-4.4,-3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC6666").s().p("AhOAMQASgWAbgMIAsgJQAmALAhAaIAKAKQhsgGhLAWQAFgLAIgJg");
	this.shape_14.setTransform(0.8,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#993300").s().p("AgkgOIBPgRQgaAMgRAWQgIAJgFALQgPAEgOAFQgCgcAIgSg");
	this.shape_15.setTransform(-7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:1.1,y:5}},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_1,p:{x:1.1,y:5}},{t:this.shape_11}]},1).to({state:[{t:this.shape_1,p:{x:-0.1,y:7.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

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

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAlIbQBjkTEyp7Qh/Ckh2BMQgng8h2h7Qhbhhh5hZQg2gmgSgJQiCEchDMr");
	this.shape_20.setTransform(66.6,73.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A92F33").s().p("AixFJQA4nzBflwQB5BZBcBhQgiBOgdCZQgeCagKDCQgLDDAOA3QALAvANADIkpAMg");
	this.shape_21.setTransform(51.9,77.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7E2326").s().p("AiFIVQBCsqCBkcQASAJA2AlQhfFwg3H0IgJDSg");
	this.shape_22.setTransform(35.8,75.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DC3D42").s().p("Aj2GiQgOg3ALjCQAKjCAeiaQAdiaAihOQB1B8AnA7QB2hMB/ikQkxJ7hkETIhCAaIgFABQgOgEgLgvg");
	this.shape_23.setTransform(85.3,83.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1,3,true).p("AnJlKQghB3gHBQQgHBSABBRQAoAsBLAYQBqAXAyAOQArALBQAiQBSAiAoAMQByAfCUgfQA2gLAugRQA9gWAvggQAKgHAKgHQABgBAAAAQAAgHgBgGQAAAHAAAHAn3AgQAIA5AQBDQArAjBGARQBxARA1APQAgAJAwAXQA+AdBZAUQAZAGA1ADQAGABAIAAQAIAAAJgBQA0gCBZgQQAygKAvgTQA5gYA1gnQAGgEAFgEQAGgPgBglQAAgNgBgPAH3B2QgDg9gaghQgaggg7gtQg7gthwhCQhmg7hphl");
	this.shape_24.setTransform(68.9,159);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D3D3D").s().p("AgKgdIAUgOIABAcQAAAlgFAOIgLAIQAFgkgKglg");
	this.shape_25.setTransform(118.3,176.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("Ag4gNQA8gWAvggQAKAlgFAjQg1Aog4AXQADgvgGgig");
	this.shape_26.setTransform(112.1,180.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("ABbA2IgLgKQgugmjCiZQBmA2BBAtQCaBfAAA2QAAAOgKAMQgMAMgZAJQALg6gigkg");
	this.shape_27.setTransform(99.4,154.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A2A2A").s().p("ACrCVQg0gDgZgGQhbgUg9gdQgwgXgfgJQg2gPhwgRQhGgRgrgiQgQhDgJg6QAoAtBLAYQBrAXAyAOQAqAKBQAiQBRAiApAMQBzAfCTgfQA3gLAtgRQAHAkgDAvQgwATgyAJQhZARg0ACIgQABIgPgBg");
	this.shape_28.setTransform(62.6,177.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#7E2326").s().p("ABOEQQgpgMhRgiQhQgjgrgKQgygOhqgXQhLgYgpgtQgBhRAIhRQAHhQAhh3IBRABIABAUQA+B2D2BxIEgCCQA0AXANALQALAKAbASQAoAbALA7QguARg2ALQhKAPhBAAQhCAAg5gPg");
	this.shape_29.setTransform(62.4,154.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DC3D42").s().p("AEACuQALgNAAgNQgBg2iZhfQhCgthmg2QDDCZAuAmIAKAKQgOgMgPgJQhRgwhBgjIhtg/Qgsgbg7guQg3gtg4gzIBxABQBqBlBkA7QBxBCA7AsQA7AtAaAhQAaAhADA9IAAAOIgUAOQgMgigPgcg");
	this.shape_30.setTransform(88.9,150);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A92F33").s().p("AEPCzQgbgRgLgLQgMgLg0gXIkhiCQj2hxg+h2IgBgUIESAEQA4AyA3AtQA6AvAsAbIBuA/QBBAiBRAxQAPAJAOALQAiAkgLA6QAZgIAMgNQAPAcAMAjQgvAgg9AWQgLg7gogbg");
	this.shape_31.setTransform(74.2,152.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGA0QAGgYABgbQAAgagJgdQgIgVgSgnQAiAsAbAnQAaAmAIAaQACAbgJANQgFAHgJAGIgRAIQgpAPgqAGQAugoAIgXg");
	this.shape_32.setTransform(-34.9,185.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADULhQAEhHg3hFQhRhlgBgGQgfiMgch4QBjjABPiiQDcnGBLjvQiEDYjXBOQgCgEgBgDQgfhIhShyQgxhGhShIQg7gzhLg0QhAFfg4GLQgWCZgVCeQgvCUgfB7QgPA7AAB7QgBBGABA4QATAnAfA9QAgA+AzAsQAzAtAwAPQAxAPBDAEQBDAEAzgFQBDgHA2gVQABAAABgBQA7gXAsgsQACgCACgCQAAgBAAgBQAJhNgCgrgAnrIlQADAMAEALQAtCOBgBEQBiBGB/ADQBtACBHgWQAMgEALgEQAvgTAlgdQAXgTAUgX");
	this.shape_33.setTransform(-45.1,123.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AhGgTIAXgIQAugSAkgeQAWAkAOAqIAAABIgEAEQgrAsg7AYQgNg2gWgpg");
	this.shape_34.setTransform(-31.7,208.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3D3D3D").s().p("AgVgRQAXgTATgXQADAqgKBNQgOgrgVgig");
	this.shape_35.setTransform(-26,202.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2A2A2A").s().p("AA1DNQhCgEgwgPQgxgQgzgsQgzgtgfg9IgzhjIAAh/IAHAYQAtCNBgBEQBjBGB+ACQBtACBIgVQAWAqANA1IgCABQg1AVhFAHQgcADghAAQgbAAgegCg");
	this.shape_36.setTransform(-64.8,198.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A92F33").s().p("AAdLcQgXgNhSgdQhDgYgggdQgwgsgOhQQgKg1ADheQBfADBhgcQgwgJgkgpQghgmgLgzQgKgsAEg3QADgjALhAIAcieIB4q0QBRBIAyBGQBSByAfBIQg7Cng3CrQhJDhg/DoIBhBQIiABoQAHBMBaBGIBRA5QAxAiAbAaQAeAeAXAlQglAdgvATIgXAIQgohNhGgmg");
	this.shape_37.setTransform(-52.8,121.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DC3D42").s().p("Ag8LcQgagagygjIhRg5QhbhFgHhNICBhoIhihQQBBjoBIjhQA3iqA7inIADAGQDWhOCEjYQhKDvjdHHQhOCihiC/QAcB5AeCLQABAHBRBlQA3BFgFBHQgTAXgXATQgWgmgfgdg");
	this.shape_38.setTransform(-27.4,121.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7E2326").s().p("ABgOMQh+gChihGQhghFgtiNIgHgYQAAh7APg6QAfh7AviVQAVieAWiYQA4mLBAlfQBKA0A7AzIh3KzIgcCfQgLA/gDAkQgEA3AKArQALA0AgAmQAkApAwAIQhgAdhfgEQgDBeAKA1QAOBRAwArQAgAeBCAXQBTAdAXANQBGAnAoBMQhBAUhhAAIgTAAg");
	this.shape_39.setTransform(-66.6,117.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AhqlaQApJ+AGBPQAGBOhJCKQgqBPgWA3QgQApgGAcQgMBAmtNbQhIAwgGACQhYAWhCgZQgXgJgUgOQgYgRgUgaQgUgYgQggQCDvsAfhjQABgEABgCQAbg+BFhCQgFgUgqjoQgpjnhMmbQhMmbAKkFQAKkFD2laQB0EjC7CSQBmBPB7AlQFbBmEui6Ig6DnIgNBXQDSFSCZFKQCaFKArCGQArCGAUBKQARBAiBCzQgNASivFuQhsDhipFlQgnAUgnALQg8ARg9gFQhMgGhNgqQBBncAnj/QAMhOAKg5QAqj5AfgcQAggdBBg9gAA8sCQgLAJgMAJQhHA1heAhIAWFA");
	this.shape_40.setTransform(17.6,-18.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AtJaNQCDvsAfhiIACgHQAbg+BFhBQgFgVgqjoQgpjmhMmbQhMmbAKkFQAKkFD2lbQB0EkC7CSQi3gwiahmQhBBkgMCTQgMCDAgDfIBbJpQAiDnAYBtQApC8BtCnQh9gCg0AKQgNAhgZBjQhIEeirNIQgUgZgQgggAD1Y/QBBndAnj/IAWiHQAqj4AfgdIBhhaInhqgIgWlAQBeggBIg1IgCAUQgJBCgqBDIgHAKQB4DzBhC9QBgC8BHBzQBIBzAyA4QBHBlB5ArQhkgDhjgRQghAXgeAZQgfAZgjAqIh0QbQhNgHhMgpg");
	this.shape_41.setTransform(0.9,-22.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#424242").s().p("AtnZAQgYgRgVgaQCstIBIkeQAYhjANghQA0gKB+ACQhuingoi7QgYhtgjjoIhbppQgfjfALiDQANiTBBhkQCaBmC3AwQBmBPB6AkQFbBnEui6Ig5DnQj0CokxgiQkxgjiuh4QAbJYCDLzID9DhQiEA7ikAXQgUgeglBJQhhDGjYO2QgWgJgUgOgAEgW+IBzwbQAkgqAegZQAegYAigYQBjASBkACQh5grhIhlQgyg4hHhzQhHhyhhi9Qhgi9h4jzIAHgKQAphDAJhBQAJgHAJgKIAggmIAjghQAYgYATgcIAAD4QAAAYGgMwQBLB5DPBzQgmAhg7AUQgsAQhZAQIiJAJQgpCugeCwQg6FagMFgQgvANgvAAIgbgBg");
	this.shape_42.setTransform(11.9,-5.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#585858").s().p("AuzWMQDYu2BhjGQAlhJAUAeQCkgXCEg7Ij9jfQiDr1gbpXQCuB3ExAjQExAjD0ipIgNBXQDRFSCaFKQCaFLArCGQAqCGAVBJQARBAiBCzQgNASivFuIkVJGQgnAUgnALQAMlgA6lZQAeiwApivICJgIQBZgRAsgPQA7gVAmghQjPhyhLh5QmgsxAAgYIAAj3QgTAbgYAYIgjAiIgfAlQgJAKgJAHIACgVIAYgSIgYASQhHA1heAhIAWFAQAoJ/AHBOQAGBOhJCKQgqBPgWA3QgQApgGAcQgMBAmtNbQhJAwgFACQgpAKglAAQgpAAgkgNg");
	this.shape_43.setTransform(23.7,15.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("Ahrq8QjyJdieJUIgTB5AAIK9IIHvv");
	this.shape_44.setTransform(-12.6,-73.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AizLVQg6iJgZABIATh4QCepUDxpdIBrgDQgRBTgSAwIAAABQgoBngqBwQhzEvg1DOQg3DMgIAkQhCDkAGARQAGARgQBxg");
	this.shape_45.setTransform(-39,-70.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#424242").s().p("AldJeQgGgRBCjkQAJgkA2jMQA3jOBzkvQAphwAnhnIABgBQARgwARhTIDLA5IBiAIQhtCSgDAHQg7BthXC1QhSCqiGFdQheDygSDJIiFABQAQhxgGgRg");
	this.shape_46.setTransform(-18.7,-70.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#585858").s().p("AknEEQCHldBSiqQBWi1A7htQAEgHBsiSIA8CGIAgAoQBrCHAdAXIoGPvIknBCQASjJBdjyg");
	this.shape_47.setTransform(-0.6,-67.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ABZAvQg1gqjZilQBvA6BJAxQEQCmiNAwQAIhIg1gqg");
	this.shape_48.setTransform(148.1,155.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH/CUQgJhCgfglQgfglhEgwQhEgyh7hHQh8hHiDh9QgBgCAAgBAn8AiQANA5AVBEQArAkBDATQBsAWA1ARQAfALAxAZQBAAgBbAZQAaAHA1AHQA2AGB7gSQA1gHAwgTQA8gXA2goQAGgEAGgFQAHgUgJhDAn8AiQApAuBIAZQBnAaAxAPQAqANBRAlQBUAnApANQB3AlCXgaQA4gKAwgQQBAgVAwgiQALgHALgIAH/CUQABAHABAIQAAgBABAAQgCgHgBgHgAnxlSIAAABQgUB+AABSQABBSAIBR");
	this.shape_49.setTransform(119.7,158.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#2A2A2A").s().p("ACrCiQg2gGgagIQhbgYg/ghQgxgZgfgKQg1gShsgVQhDgTgrgkQgVhDgNg6QApAuBHAZQBoAbAwAPQArAMBRAmQBTAlAqAOQB3AlCWgaQA5gKAwgQQAKAmAAAzQgwASg1AIQhcANg1AAQgSAAgOgCg");
	this.shape_50.setTransform(113.7,178.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7E2326").s().p("ABLEdQgqgOhTgmQhSgmgqgMQgxgPhngbQhHgZgpguQgIhRgBhSQgBhSAVh9IAAgBIBIgEIAGAhQBEB3D5B1IExCOQA5AaAOAMQANAMAeATQAtAfAQBAQgvAQg5AKQg+AKg5AAQhQAAhGgVg");
	this.shape_51.setTransform(112.7,154.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A92F33").s().p("AEcDIQgdgTgOgNQgNgMg5gZIkyiOQj4h1hFh3IgFgiID3gMIAKARQBBA5A/AyQBAAxAuAcIB3BEQBIAmBbA2QBaA0AwB3QgwAihAAVQgRhAgtgegAFeA5IACAAIAFAFIgHgFg");
	this.shape_52.setTransform(123,152.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#DC3D42").s().p("AC5BiQhbg2hHgnIh2hCQgwgdg/gxQhAgxhAg6IgKgRIBmgGIAAADQCFB+B6BHQB8BGBDAxQBEAyAgAlQAfAkAJBCIABAPIgVAQQgwh3hbg1gADaBXIgDAAQANAKgKgKg");
	this.shape_53.setTransform(136.4,149.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3D3D3D").s().p("AgMggIAUgPQAJBCgHAUIgKAJQACgngOgpg");
	this.shape_54.setTransform(170.1,179.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("Ag9gQQA+gVAxgiQAPAqgDAlQg2Apg7AXQAAgzgKglg");
	this.shape_55.setTransform(163.8,183.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlhJRQAAgEABgDIBvyaIA4DcQAbBhA4BQQBvhhBwhVQALgIALgIQB8hcBYglIjdRG");
	this.shape_56.setTransform(-46.6,69.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A92F33").s().p("Ah4nhQAbBhA4BRQBuhiBxhUQgZCDgtEaQgtEYgbDMQgDAPgdA1IgLAAIAEAAIhMAEIAGABIh4ABQAEoRA9m2g");
	this.shape_57.setTransform(-53,80.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7E2326").s().p("AhUJQIACgHIBuyaIA4DcQg8G0gEISIgVABQgrAAgogCg");
	this.shape_58.setTransform(-73.6,69.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DC3D42").s().p("AiqHnQAajLAtkaQAukZAYiDIAWgQQB7hcBXglIjbRGIABABQhTAIhoAIQAdg2ADgPg");
	this.shape_59.setTransform(-31.5,72.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("Aj7BqQC+gGE5jkQiqCtiHA3QhIAdgzAAQguAAgdgXg");
	this.shape_60.setTransform(-84.3,169);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#0000FF").ss(1,1,1,3,true).p("Ag+ADQAAAAABAAAAzgBQAGgBAGAA");
	this.shape_61.setTransform(-57,128.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1,3,true).p("AnfDmQABiMCUh2QCTh3BShjQBLhZAQgiAHKhSQgHBFgUA6Qg1AzhCAWQhCAVhxBfQhxBeiUAkQhGAQg2AGQg0AGgjgFQgDAAgDgBQg+gLhNhEQAAgeAFgvQAGAOAKAJQABACADADQApAuBOAJQAoAFAzgFQASgCAVgEQC4gfCyibQA9g7BZgiQBagiBChMgAHgmFQAQBjgmDQ");
	this.shape_62.setTransform(-80.7,165.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgrAkQACgbgCgeIgBgQQAoAFAxgFQgFAlADAjQgdADgXAAQgTAAgPgCg");
	this.shape_63.setTransform(-110.3,200.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#3D3D3D").s().p("AlgChIAogFQC4gfCxibQA9g6BagjQBZgjBDhMQgHBFgVA7Qg1A0hCAVQhBAVhyBeQhwBfiUAjQhHARg1AGQgDgkAFgmg");
	this.shape_64.setTransform(-70.5,180.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC3D42").s().p("AleEVQAahTBrh3IA/hFQA7g/EKkWIAMAAIgMAAIAPgPQAFgFgIAUIgHAPIAHgPQBXgGBdgJQAQBjgmDQQhDBLhZAjQhaAig9A7QixCbi4AfIgoAGQAFgkAMgng");
	this.shape_65.setTransform(-69,161.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A92F33").s().p("Ak6FXQgniYBdheQBeheBwiEQBuiFA+hHIABgFIBRgBIgCAGIADgGQA3gBA6gEQkLEWg6BAIg/BEQhrB3gaBTQgMAngFAkQgaACgYAAQgVAAgTgCgAFGlYIAAAAIgHAPIAHgPg");
	this.shape_66.setTransform(-83.3,162.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#2A2A2A").s().p("ABCBOQg+gLhMhDQAAgfAFgvQAGAPAKAJIAEAEQApAuBNAJIACAPQABAggCAbIgGgBg");
	this.shape_67.setTransform(-121.9,196.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7E2326").s().p("Ak1EgIgFgEQgJgJgGgPQABiMCTh3QCUh2BRhiQBKhaARgiQAyACA2AAIgBAEQg9BHhwCGQhuCEhfBeQhdBdAnCZQhOgKgpgugAFElSIABAAIgBAAQACgHAEADQgDABgCADIgDAGIACgGg");
	this.shape_68.setTransform(-95.7,162.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("AjtrWIgnFBIgUKfIgLFxQAdAwAmAXQAbAPAgAEQBIAIA2gVQADgBADAAQA3gXgEgPIEhyAQAXiAgIho");
	this.shape_69.setTransform(-41,58.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#585858").s().p("AjXLNQgggDgagQQCcuNAji2QAfigAVg1IASAAIgGgBIAtgFIACADIAAgDQCPgUBJg+QANgLAOgOQAIBogWCAIkhSAQAFAPg4AXIgGACQgoAPgwAAQgTAAgUgDgAA7pXIAMgSQgIALAAgCIgEAJg");
	this.shape_70.setTransform(-37.6,58.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#424242").s().p("AjNJXIALlxQBPoiAThkQAShYA6ilQA4AhA4ABIAMAAQgVA2gfCgQgjC1ibOOQgngXgcgwgADGp8QAAACAIgMIgMASIAEgIgACiqAIACgBIAAADIgCgCg");
	this.shape_71.setTransform(-51.1,61.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AhCivIAmlBQA5A+A6AgQg5ClgTBYQgRBjhQIjg");
	this.shape_72.setTransform(-61.9,35);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("AKaA1IgOkGIACi9Qg/AUg/ARQgjAJgiAJQgYAFgWAFQmKBVmDgvQgCAAgCAAQhqgNhqgXQgYB6g5DRAgzGPIAXgHQBagJBSggQAtgRApgXIAJgFAgxGJQgBADgBADIgCAA");
	this.shape_73.setTransform(41,-137.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#585858").s().p("AoNCBQBliGAxhLIA1gCQCRgGC+guQDAgvEzh6IAOEGImrD9IgJAEQgpAXgtARQhRAghbAJIgXAHIACgFIgCAFIgCAAg");
	this.shape_74.setTransform(55,-128.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#424242").s().p("AptCrQA3irANhAQCRADCGgRQCIgRDDguQDIgvCqhEIBFgRQA/gRA/gUIgBC9Qk0B6jAAuQi+AviQAFIg1ADQgxBKhmCHgAn5hKIADABIgEADIABgEg");
	this.shape_75.setTransform(44.2,-146.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AoxCCQA4jQAZh6QBpAXBqAMIAFABQGDAvGKhVIAugLQirBEjIAvQjDAuiIARQiFARiRgDQgNA/g4CsgAlvgeIgCgBQgDAHAFgGg");
	this.shape_76.setTransform(30.6,-150.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AGoMfQAdh9gBhRIkw1vAnDm+IFgRnIAAAC");
	this.shape_77.setTransform(92.2,-65);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AEfKyQh0gehvg9IgBgDIlfxmQBJhEA4geQA5gfA+gfQg1CvgiAvQgkAvAIAUQBvGmBaDuQBbDuApA9IB3CFg");
	this.shape_78.setTransform(76.3,-56.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#424242").s().p("AETLWQhSgEhPgUIAGAAIh3iFQgog9hbjtQhbjvhvmlQgIgVAkgvQAigvA1iuIBYgyQhHCfACgCIgSESQBtE1CkF4QBvD8CnBZQgegBgegCg");
	this.shape_79.setTransform(93.6,-57.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#585858").s().p("Ag1HLQill3htk1IASkSQgCABBHieIEHiPIEwVvQABBRgdB9QglACgmAAQinhYhuj9g");
	this.shape_80.setTransform(104.7,-64.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABxI+QAMhFA0kOQA1kVBQliQhgClg6A0Qgig0hdhvQhMhgiChWQg7gmgPgLIg6Qn");
	this.shape_81.setTransform(101,76.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7E2326").s().p("AhBINIA6wnQAPALA6AmIglMtQgOCAgIBXg");
	this.shape_82.setTransform(76.6,72.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#DC3D42").s().p("AiLHRIgKggQgPgtAKjYQAKjYAMiaQAMibgBhOQBdBvAhA0QA6g0BgikQhQFig1EUQgzEOgMBFg");
	this.shape_83.setTransform(116.1,84.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A92F33").s().p("AiEHpQAIhXAOiAIAlssQCBBVBNBgQABBOgMCbQgMCZgKDZQgKDYAPAtIAKAgg");
	this.shape_84.setTransform(90.6,77.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("Ai4rPIhHCyQgUBZgHQ9QApAoApAVQAPAJAQAFQAcAMAjAAQAqABA0gTQAOgGAQgHIEIxrQAAAAABgB");
	this.shape_85.setTransform(107,57.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AiPKGQAHw9AVhZIBGiyQBWBbBmBBIh0g1QhICFgEBPQgUGjAJKnQgpgVgqgog");
	this.shape_86.setTransform(93.1,56.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#424242").s().p("AiuKRQgQgGgPgIQgIqnATmkQAFhPBJiFIB0A1QBEAsBOAfIA6AWIAEAFQiSADhmgpQgGDNgNBlQgTCTgRDeQgQDfAAFCQgjAAgcgMgAhEl6QgCASAIghQgEAGgCAJg");
	this.shape_87.setTransform(107.5,62.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#585858").s().p("AjCJiQAAlCAQjfQARjeATiSQANhlAGjOQBnApCRgDIgEgEQAlAMAlALIgBABIkHRrIgfANQgyATgqAAIgCgBgAiXm1QACgIAEgHQgFAWgBAAIAAgHg");
	this.shape_88.setTransform(115.8,68.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABTAvQgxgqjLikQBrA5BEAwQEBCniRAvQAOhHgxgqg");
	this.shape_89.setTransform(170.2,1.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(1,1,1,3,true).p("AnMlgIAAAHQggB9gGBSQgHBSABBRQAlAuBFAZQBlAbAvAPQApAMBOAmQBRAmApAOQByAlCZgaQA6gKAxgQQBCgWAzghQAMgIALgIQAAAAABAAQgBgIAAgHQAAAIAAAHAH5CLQgDhCgcgkQgcglhAgxQg/gxh1hHQhvhDhShOAn4AZQAIA6AOBDQAoAkBBAUQBrAVAzASQAeAKAvAZQA9AhBZAYQAZAIA1AGQA1AGB9gRQA1gIAygSQA+gXA6gpQAGgEAGgEQAJgVgDhD");
	this.shape_90.setTransform(140.6,5.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("Ag9gQQBBgWAzghQALAqgGAmQg6Aog9AXQAFgygHgmg");
	this.shape_91.setTransform(183.3,29.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3D3D3D").s().p("AgLgfIAWgQQADBCgJAVIgLAIQAGgngLgog");
	this.shape_92.setTransform(190,25.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DC3D42").s().p("AC4BZQhWg1hEgmIhwhEIh7hMQhNgvgvhDQAYAEgCgEICOAmQBSBNBuBDQB2BHA+AxQBAAxAcAlQAcAlADBCIAAAPIgXAPQglh3hWg1gADZBPIgCgBQAMALgKgKg");
	this.shape_93.setTransform(158.1,-3.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A92F33").s().p("AEFDCQgcgTgNgMQgMgMg3gaIkkiOQjvh1gshmQgPgiALgSIDdAAQAvBDBNAwIB6BMIBxBDQBEAmBWA2QBWA1AlB3QgzAhhCAWQgLhAgqgfgAFTAzIACAAIAFAFIgHgFg");
	this.shape_94.setTransform(145.7,-0.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7E2326").s().p("AA8EdQgpgNhPgnQhOglgpgNQgwgPhkgaQhGgZglguQAAhRAGhSQAHhSAgh+IgBgGIBVAAQgKASAOAiQAtBmDuB1IElCNQA2AaANAMQAMAMAcAUQAqAeALBAQgxAQg5AKQhAALg4AAQhRAAhEgWg");
	this.shape_95.setTransform(133.6,1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABGHDQAJgUALgVQCBkBCvlGQiMCNhGAnQgUg4g9h9QgwhrhohsQgwgvgLgOQieFvh/Hc");
	this.shape_96.setTransform(133.9,-68.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DC3D42").s().p("Aj8E5IAQgxQBGjQA2iRQA3iTAThMQA8B9AUA5QBGgoCNiNQiwFGiAEBIgUApg");
	this.shape_97.setTransform(148.1,-54.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A92F33").s().p("AjaGkIAYg9IEDsKQBpBsAxBqQgUBMg3CSQg2CThFDPIgQAxg");
	this.shape_98.setTransform(122.3,-65.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#7E2326").s().p("AirGJQB/ncCdlvQALAOAwAwIkDMKIgYA8g");
	this.shape_99.setTransform(111.7,-68.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(1,1,1).p("AACrFIhyClQgRAjg5DIQhREcifJrQAfAuAiAbQAOALAOAHQAZARAiAFQAqAHA4gKQAQgDASgFII5wc");
	this.shape_100.setTransform(141.4,-76.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AlMJnQCgprBRkcQA4jIARgiIByimQCYAjBVCCIjAgzQhoB3gYBLIgiB6QhtF7iII3Qgigbgggug");
	this.shape_101.setTransform(131.9,-78.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#424242").s().p("Ak+J1QgOgHgNgLQCIo3Bsl7IAkh6QAYhLBnh3IDAAzIBdCWQiSgThcg5QgsCdggBdIgSAuQg1CMhIDVQhGDXhOE6QgjgGgZgRgAAolpQgHAQAQgeQgFAGgEAIg");
	this.shape_102.setTransform(139.9,-70.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#585858").s().p("AleJMQBPk6BGjXQBIjVA2iMIASguQAghdAricQBcA4CRAUIBgAlIo5QcQgSAFgQADQgiAGgcAAQgTAAgRgCgAgympQADgIAFgGIgKAUIACgGg");
	this.shape_103.setTransform(149,-64.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(1,1,1).p("AqNFaINpg0AI5EBQB8kCg5h5QhxjXjvgIIufAJ");
	this.shape_104.setTransform(126.5,-136.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#333333").s().p("AokgqQIOhuDLgSQDMgTBYBYQApAqAjBRIjbBlItpAzg");
	this.shape_105.setTransform(115.4,-119.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#424242").s().p("AIcCtQgjhTgpgpQhYhYjMATQjLAToOBsIgNieQHjhcCXgSQCXgSA5gDQA6gDB4AdQB1AcADE3g");
	this.shape_106.setTransform(116.3,-134.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#585858").s().p("AHeD5QgEk3h1gcQh4gdg6ADQg5ADiWASQiXASnjBbIAckxIOfgJQDvAHBxDXQA5B5h8ECg");
	this.shape_107.setTransform(125.6,-140.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(1,1,1).p("ADrREQDfgcA1kFQgPh3gxk5Qgyk6hun2AnQxDQhdEzBhFiQCcIgCDI8");
	this.shape_108.setTransform(3.3,-64.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AhDM5QiDo8icogQhgliBdkyQGSCFFnDjQosgUhwgYQAbDRAXB6QAYB5AJAOQAKANAkDsQAkDrA1DQQA0DNATBaIAUCGgAjOquQABAIACgIIgBAAIgCAAg");
	this.shape_109.setTransform(-7.3,-78.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#424242").s().p("AgXL4IgUiHQgThZg1jOQg1jPgkjrQgljsgJgOQgJgOgYh5QgYh6gajQQBvAYIsATIgXCnQlqAJAHB2QAJB7AUDSQAVDPBeFtQAeB2BOFbgAkTtvIADAAIgCAEIgBgEg");
	this.shape_110.setTransform(-0.4,-59.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#585858").s().p("AgqKdQhOlbgeh1QhflsgVjRQgVjSgIh6QgIh3FqgIIAOB2QBuH3AxE5QAxE5APB3Qg0EFjgAcg");
	this.shape_111.setTransform(24.8,-38.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(1,1,1).p("AE9gQQlCAwk3gW");
	this.shape_112.setTransform(37.8,-101.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("Ak4GBIgPjTQBMgBDNgKQDNgKCqgNIgHDaQjgAhjaAAQhgAAhggGgAk+AaQAAgHAFhyIADg0QABACAAgMIgDhQIAAiZQBpADDeAQQDSAPBnA0IgEEyQizgQjcAXQjdAYgOAKIgIgRg");
	this.shape_113.setTransform(37.4,-138.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#424242").s().p("Ak2AoQAOgKDdgYQDcgXCzARIAFCJQiqAOjNAJQjNAKhMABgAk4iqIACAUIgDA1g");
	this.shape_114.setTransform(37.4,-138.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AhTAEQBFhqCahZQjhDLgyC0QgRhSBFhqg");
	this.shape_115.setTransform(-136.4,1.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(1,1,1,3,true).p("Aj4mWQgvgXgrgFQguAcgfA3QgdA1haBFQhYBEg7CAQgdA8gQAxQgRAvgFAkQgBADAAADQgIBBAaBnQATANAgAOQgIgMgDgNQgBgCgBgDQgUg8ANhOQAGgpAQguQAGgSAHgSQBBijCRhpQA1giAshHQAshHBCgfgAqoFoQBcA7BxhbQBxhbBUglQBUgkAXACIM5ENIiHh8Qg7g5gphPQBdhMBVhRQAIgIAIgIQBchZAvhJIsbiIQg8g6iRg0");
	this.shape_116.setTransform(-92.6,-0.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AADAxQgTgPgSgJQAFgiARgwQAVASAaALQgQAtgGApIgKgJg");
	this.shape_117.setTransform(-164,12.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#2A2A2A").s().p("AgPBJQgahmAIhBIACgGQASAJASAPIAKAJQgMBNATA8IACAGQAEANAIAMQgggPgTgNg");
	this.shape_118.setTransform(-164.2,25.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#7E2326").s().p("AiRhTQgXgChUAlQhUAkhxBaQhxBchcg7QgIgMgDgNIgCgGQgUg8ANhNQBZBlBUgxQBUgyBygyICvhPQFoCmE5BPICHB9g");
	this.shape_119.setTransform(-95.2,24.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A92F33").s().p("AhmgYIivBOQhyAzhUAyQhTAyhahmQAHgpAPguQAZALAbAEQA9ALBngzIA9ggQA6geEBiQQAGgEgcABQAygEAMACQCRAoDJAuQDKAuBfASQhVBQhdBMQApBPA7A5Qk4hRlpilg");
	this.shape_120.setTransform(-97.8,8.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#DC3D42").s().p("AqWEHQgbgFgZgLIANgjQBBikCQhoQA1giAshHQAthHBBgfQCSA0A8A6IMbCIQgvBIhcBaIgRAPQhegSjKguQjKguiQgoQgMgBgzADQAdAAgHADQkBCRg6AeIg8AgQhWAqg4AAQgMAAgKgBg");
	this.shape_121.setTransform(-88.9,-15);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3D3D3D").s().p("AjuDxQARgxAcg9QA7h/BYhEQBZhEAdg2QAfg2AugdQAsAFAuAXQhBAggtBGQgsBIg1AhQiQBphACjIgOAkQgZgLgXgSg");
	this.shape_122.setTransform(-141.4,-17.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1,1,1).p("ALIjGIkyg1ItxhHIidgNQgDABgDACQgWAMgSAOQgSAQgNASQgSAagHAfQgPBHAPA4QABADAAADQARA5AQgEQIYDkFMBPQFNBODRgaIAhgE");
	this.shape_123.setTransform(-43.8,11.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#585858").s().p("ACoD2QlMhOoYjlQgQAEgRg5IgBgGQgPg4APhHQAHgfASgaQMIGlDNA3QCvAvESADIAIARIgCgRIALAAIAEBIIggAEQg0AHg7AAQi1AAj6g7gAKCBFIACABIAAAAIgCgBg");
	this.shape_124.setTransform(-43.8,14.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AKjCdQgQheANCCQn6ACmdi1Qmei1ghgFQARgOAXgMICiAKINxBHIEyA1IgMD9IgBAKIgHgqg");
	this.shape_125.setTransform(-42.2,-1.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#424242").s().p("AK/EfQkSgDivgvQjNg3sImlQANgSATgQQAgAFGeC2QGeC0H6gCQgNiBAQBdIAHAqIAAgKIAvDSIgIgLIgLAAIACARgAJyCGIABABIgBgBIgBAAIABAAgAqPkrIAFgDICdANIiigKg");
	this.shape_126.setTransform(-42,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:64.2,y:178.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_4,p:{x:133.8,y:24.5}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},2).wait(1));

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
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgjE7QABAIAKAFQAIADAOABQAIgBAIgDQAcgLACgmQAFhUgVhgQAiiIAVhCQAAgCABgCQABAAABAAIAAAAQAlABAVAnQAIAQAQANQAqAhAyAFQAhgDAIggQAEgRgJgTQgPggghgcQgWgSgVgUQgNgNgJgRQgJgSgIgTQgNgbgPgaQgNgVgPgVAiihOQB7glAhh6QAEgRgGgQAAAgiQgDAAgDgBQgDAAgCgBQgQgDgNgDAgjE7QAKgEAHgGQANgKAFgSQgIgYgJgbQgIgagLgeQgUg6gGgfQgGgfAchcQgQgEgogMQgYgFgigNIgBAAQgCAAgCgBQgCgBgBAAAiBDlQABAAABgBQASgGAKgQQABgDACgDQAKgVgLgaQgJgXgyhLQgHgLABhwQAAgDAAgEQAAgBAAgCIAAAAAiBDlQAgA3AJAQQAEAGABABQAIAIANACQAKACARgEAj5lEQhOE6AnBGQAOAZAOAXQAVAfAUAaQAGAHAGAHQAJAKAIAIQAaAdALADQAOADAKgD");
	this.shape_4.setTransform(13.6,37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC3D42").s().p("AgWFqQASgfgHgZIgbhkQgVhLAGhQQACgVADgUIAGABIAFABIgFgBIgGgBIgdgHIg3gOIA3AOQgbBdAFAfQAGAfAUA7IAUA3IARA0QgGARgMALQgKgHgIgMQgMgRgJgeQgMgggMgtIgahYQgOg1AZhPQgZgGgigMIAAAAIgEgBIgEgCQB8gkAgh6QAFgRgHgRQhhA9gJgVQA3hpgKhUIAGAAQAfACAlAMIAgAPIABAAIAGADQARAJANAMIAGAFQANAMALAMIAGAHQAQAUAMAVQAQAaAMAbIASAmQAIARANAMIArAnQAhAcAQAgQAJATgFAPQgIAgggAEQgFgGgDgHIgEgWQgDgNgDgHQgFgMgLgMIgXgVQgrglgdgyIgBgDQgIAoglAsIgCAAIgBADQgVBBghCKQAVBfgFBVQgDAlgaALgAiYD5QgOgFgIgIQgMgMgHgOQgYgrgvhLQgEhFANhBQAPgJApAUIAAADIAAAHQgBBwAHAKQAyBLAKAXQALAbgLAVIgDAGIgQgEgAhNADIAAAAg");
	this.shape_5.setTransform(17.3,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A92F33").s().p("AgSF1QgKgFgBgIQgRAEgKgCQgNgCgIgIIgFgHIgphHIACgBQASgGAKgQIADgGQAKgVgLgaQgJgXgyhLQgHgLABhwIAAgHIAAgDIAAAAIAAAAQgpgUgQAJQgNBCAFBEQAuBLAZAsQAHAOAMAMQAIAHAOAFIAQAEQgKAQgSAGIgCABQgKADgOgDQgLgDgagdIgRgSIgMgOQgUgagVgfQgHgUgCgWQgCgYAAhJQAAhHAbg3QAag3Akh+QAXhJAVgDQATgFAdgBIAVAAQAKBVg4BoQAJAWBig9QAFAQgDARQghB6h7AlIADABIAEABIABAAQAiANAYAFQgYBPANA2IAaBYQAMAsANAhQAJAdAMARQAIAMAJAHQgHAGgKAEQAKgEAHgGQAMgKAFgSIgQgzIgTg4QgUg6gGgfQgGgfAchdIAdAGQgEAVgBAVQgGBPATBMIAcBkQAGAZgSAfIABAMQgIADgJABQgNgBgIgDgAhdD7IAAAAgACuAGQgQgMgIgQQgVgnglgBIAAAAQAlgsAHgoIACADQAdAyArAmIAWAUQAMAMAFANQADAHACANIAFAVQACAIAFAGQgygGgqghg");
	this.shape_6.setTransform(13,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E2326").s().p("AguC9QgmhHBOk5IAEgSQANgvAwAzQgjB+gaA3QgaA2AABIQgBBJADAYQACAWAHAUIgdgwg");
	this.shape_7.setTransform(-10.6,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAcQgGhcgqg/QABgEAKAKQBBBBgKBZQgIAygaAug");
	this.shape_8.setTransform(26.8,-22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AETC4QANAOAKAQQAEAGAEAHQAEAIAEAIIgCAHIgFAWQhcClgUABQgUADgbgCQgngCgOgIQhRAJgpgHQg3gIgcgiQgXAFgagCQgZgCgUgMQgFgCgEgDQgPgKgKgOQgHgKgGgTQgGgWgMguQgNgugGhMQgFhLALg8QghhCgXhHQgOgqAHgpQAKhDArg3QAGgGAGgFQAjgjAsgUQANgGAOgFQAlgMAmgDQAagBAaADQBCAJA9AhQA9AhAdA8QAeA8gLA3QgKA4gZAjQABAHACAMQABAIABAHQBZAdA0AgQBBAogWBNQgIAbgIARQgQAggTgEQgIgCgJgCQgUgEgWgHQgZgIgagGQgGgCgFgBQgYgIgZgHQgHgCgGgCQgDgBgDgBQgOgDgJgGQAAAAgBAAQgEgDgEgEQgCgDgCgDQgEgGgBgIQgCgbAJgVQAIgVAHgKQAEgHAGgHQAFgGAHgEQAOgIAQgBQACAAACgBQAlgBAeAJQAdAIAVALQAUAKAWAMAADAuQAIgigjgjQgkglg5gSQg5gSgbAeAg3hbQAdgPBBAMQAfAFAoAMQAaAHAXAIACgDSQgHALgTASQgDADgEADIAAABQgEAxgRBOQgDANgDAOQgBADgBADABtCJQASAaACAlQACASgDAUQgBAEAAAEABHB3QgdgMgWAAQgUABgIAGQADAWgFAdQgDAOgEAQQgUBEg3BhQgDAGgEAHQgCACgBACAgIByQgWgQgxgKQgqgEgVANQgVAOgeAnQgdAoAOA7QASALAhgwIASgfQgWgEgQgB");
	this.shape_9.setTransform(12.1,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A92F33").s().p("ABfGJIADgGQAVgiALgZIATgpQAIgQAPgUQAPgVAUgDQAQgCBBAIIAIAOIAHAQIgBAHIgegFIgagCQgOAAgLAEQgXAHgaAkIgvBGQgSAXgSARIAGgbgAhmF8QAhgkAegwQAjg3AEgKQAEgJAVgNQASgKBMAVQABASgDAUIgOgEQgagHgQADQgXAFgLAIQgKAJgQAZQgPAagrAmQgeAagXAGIAIgNgAj5FwQgGgJgGgTQAmAAAjgkQAxgyAbhJIAKgFQApgBAoAKQgCAOgFAQQg5gZgTArQgTAsgeAnQgfAogoAlQgOgKgLgPgABiCdIgGgCQgNgDgJgGQgGgeANgjQARgtAkgdIgEgBIAEgBIAKAAIAAAAIAAAAQAaAAAXAGIACABIAFABQAeAJAUALIAqAVIgqgVQgUgLgegJIgFgBIgCgBQgXgGgaAAIAAAAIAAAAIgKAAIgEABIjphFQghgJgQgHQgagMgOgSQgJgKgHgSIgMgfQgIgRgSgeIgKgRIgqhfIALgLQAkgjAsgUQANgGAOgFQAkgNAmgCQAGA6AIAxQAIAxAfBDQALA/AXAWQAaAbAMAEIANAGIAxAUQAxAUBVAqQA+AfAPAPIACACQAEAFgBADQgCANhKgQQhKgQgNAVQgNAUgFAcQgGAcADALIADAIIgOgEgAhChHIABgBIABAAQAQgIAaAAIAAAAIABAAQAUAAAaAFIAAAAIACAAIABABIgBgBIgCAAIAAAAQgagFgUAAIgBAAIAAAAQgaAAgQAIIgBAAIgBABg");
	this.shape_10.setTransform(13.1,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E2326").s().p("ACYDqIAAgBIAHgGQATgSAIgLQgIALgTASIgGgCQADgUgBgRQgDglgSgaQASAaADAlQhMgWgSALQgVAMgFAKQgEAKgiA3QgfAwghAjQA3hhAThDQAEgQADgOQADgTAAgPIgBgRQAIgHAVAAIABAAIABAAIAEAAQARABAWAIIAAAAIADABIADACIAIAGIACABIgCgBIgIgGIgEgGQgEgHgBgIIAAgJQAAgVAHgRQAIgVAHgKIAKgNQAFgGAHgFQAOgIAQgCQgQACgOAIQgHAFgFAGIgKANQgHAKgIAVQgHARAAAVIAAAJQABAIAEAHIAEAGIgDgCIgDgBIAAAAQgWgIgRgBIgEAAIgBAAIgBAAQgVAAgIAHIABARQAAAPgDATQgngKgpABIgLAEQgaBKgxAyQgjAkgmAAIgThEQgNgugGhMQgFhLALg8QghhCgXhHQgOgqAHgpQAKhDAsg4IAqBgIAKAQQASAfAIARIALAfQAHASAJAKQAOARAbAMQAPAIAiAJIDoBFIAEACQgjAcgRAtQgNAiAGAfQAJAFANAEIAGACIANAEIAxAPIALACIAzAPIArALQAMAOAKAPQhAgJgQADQgUADgPAVQgQAUgHAQIgTApQgLAZgVAiIgDAGQARhOAEgxgAivDvQAPgBAWgeIACgDIABgBIAAAAIAAgBIACgBIAAAAIAAgBIABgBIASgfQgWgEgQgBQAQABAWAEIgSAfIgBABIAAABIAAAAIgCABIAAABIAAAAIgBABIgCADQgWAegPABIgBAAIAAAAQgDAAgDgCIgBAAQgFgTAAgRQABgkAUgbQAdgoAVgNIADgCQAPgIAZAAIABAAIAAAAIAQABIABAAIACAAQAxAKAVAQQgVgQgxgKIgCAAIgBAAIgQgBIAAAAIgBAAQgZAAgPAIIgDACQgVANgdAoQgUAbgBAkQAAARAFATIABAAQADACADAAIAAAAIABAAgAAcAhQABgGAAgGQABgbgegeQgjgkg5gSIgEgBIgBgBIgBAAIAAAAIAAAAIgBAAQgRgFgOAAIAAAAIgBAAQgbAAgRARIgBACIABgCQARgRAbAAIABAAIAAAAQAOAAARAFIABAAIAAAAIAAAAIABAAIABABIAEABQA5ASAjAkQAeAegBAbQAAAGgBAGgABgBrIAAAAgAAQBmIAAAAg");
	this.shape_11.setTransform(9.6,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC3D42").s().p("ABRG3QgngCgOgIQhQAJgqgHQg4gIgbgiQgXAFgagCQgZgCgUgMIgJgFQAoglAegoQAegnATgrQATgsA6AZQgUBEg3BhIgHANIgDAEIADgEQAXgGAegaQAqgmAQgZQAQgaALgJQAKgIAXgFQAQgDAaAHIAOAEIAGABIgHAGIAAABIABgIIgBAIQgFAxgQBOIgGAbQASgQARgYIAwhGQAZgkAYgHQAKgEAPAAIAaACIAdAFIgFAWQhcClgUABQgNACgQAAIgSgBgAAfGWIACgGIgCAGgADhC8IgRgEIgqgLIgzgOIgLgDIgxgPIgDgIQgCgLAFgcQAGgcANgUQANgVBJAQQBKAQADgNQABgDgEgFIgCgBQgPgQg+geQhVgqgygVIgvgUQAeAFAoAMIAxAPQBZAdA0AgQBBAogWBNQgIAbgIARQgOAdgRAAIgEgBgAArhNQgogMgegFIgNgFQgNgFgbgbQgWgWgMg/QgfhDgIgxQgIgxgFg6QAagBAaADQBDAJA8AhQA9AhAdA8QAeA8gLA3QgKA4gZAjIADATIACAPIgxgPgAgbheIAAAAg");
	this.shape_12.setTransform(18.8,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgBEPQAdgHAUggQAXglABgSQAAgSgXgYQgjghhCgiIg/hiQAUg4AVg0QAUg1ABgaQABgagKgTQgKgQhJgdQgCgBgDgBABGgYQAYAEAtAsQAtAtA5gGQAXgCARgOQAIgGAEgMQAFgTAFgRQACgIgWgTQgVgUgggXQgggXgUgSQgVgSgRgQQgKgKgHgMQgPgXgMgZQgQgfgRgfQgKgQgLgQQgTgYgXgUACfFCQAxARAsANQARAFAMACQATAEAHgEQAMgGANgcQAMgbgBgdQgBgZgOgVQgOgVgYgLQgZgLgigLQgigKgZgMQgYgMgQgHQgQgHgEgPIgqiCIgGgcIgGgXACfFCQAAAAABAAQAmgfgDgSQgDgTgXglQgYgmhQg3Qgug9gUgfQgLgRgMgZQgLgXgMgfAlWkAQBOE2BTBaQAGAGA2AoQAkAbA5AqQAJAHAKAHQAEgBAEgBIBRA+IASANQAXAGAmge");
	this.shape_13.setTransform(23.9,10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A92F33").s().p("ACuFcIhdgdIABgBQAngegDgTQgEgSgXgmQgXglhPg3Qgvg9gUggQgLgQgNgaQgLgXgMgfIgUAEIAeBDIAHAOQAaAyAdAiQAHAIA5A7QAoAoARAhQgaAxgoAnIhQg9QAdgIAVggQAXglAAgRQAAgSgXgZQgjghhCghIhAhiIAphtQAVg1ABgZQABgagLgTQgJgQhJgeIgCgDIB4gpIAQAuIAZBGQAOAsASAVQAOASAnAbIAUAPIA3AqQAJAHAFAGQhJAggzgcIgFgYIAFAYIgTgLIgVgJIAgBzQANAwAOAUQATAZAsAYQArAXAxAXIAYAMQAOAIAIAJQAXAagHArQgFAZgPAeQgMgCgRgGg");
	this.shape_14.setTransform(31.7,11.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E2326").s().p("ADGFnQAOgdAGgaQAGgrgXgZQgIgJgNgIIgZgMQgxgYgqgWQgtgYgTgZQgOgUgMgxIgghzIAUAKIATAKIAHAcIApCCQAEAPAQAHIAoATQAZAMAiAKQAiALAZALQAYALAOAVQAOAVABAZQABAdgNAbQgMAcgMAGQgEACgHAAIgPgCgAAPFaIgRgNQAmgnAbgyQgRgggogpQg6g6gHgJQgdghgagzIgHgOIgehCIAUgEQAMAfALAXQANAZALARQAVAfAuA9QBPA3AXAmQAYAlADATQADASgmAfIgBAAQggAZgVAAIgIgBgAhvEDQAhgZATgmQgJgVghgRQgsgWgJgIQgIgGgJgMIgGgKIgTghIgkg0QgVgfgFgZQgFghAPglQAHgUASgnQAPgjAAgaQAAgVgIgYQgEgMgIgTQBJAdAJAQQALATgBAaQgBAagUA1IgpBsIA/BiQBCAiAkAhQAXAYgBASQAAASgXAlQgVAggdAHIgJACIgSgOgAA4AYQgtgsgXgEIgHgcQAzAcBKgfQgGgGgJgHIg3grIgTgOQgngbgOgTQgTgVgOgsIgZhGIgPgtIAZgJQAZAUATAYQALAQAKAQIAgA+QAMAZAPAXQAHAMAKAKIAlAiQAVASAgAXQAgAXAVAUQAVATgBAIIgKAkQgEAMgIAGQgRAOgXACIgMABQgyAAgogogAgTg0IAAAAg");
	this.shape_15.setTransform(32.2,10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC3D42").s().p("AAmDYIg7guQhThahOk2IC/g1IAEgBIABADQAIATAEANQAIAXAAAWQAAAZgPAkQgSAngGATQgPAlAFAhQAFAYAUAgIAkA0IATAhIAHAKQAIAMAIAHQAJAHAsAWQAhARAJAVQgTAmghAZIhdhFgAAOkZIgFgCIAFACg");
	this.shape_16.setTransform(7.9,8.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEfC+QA1AOAYgyQAXgzgrgjQgkgfgngbQgkgZgfgeQgUgSgJgYQgPgogXgxQgWgxgXghQgWghgbghQgbghgXgRACjEDQAHADAHAEQAKAGAMAHQANAIAPAIQAEAAAEgBQASgCANgOQANgOAEgTQAEgTgGgSQgIgTgPgNQAPAHANAGAAUghQACAAAAABQAnA5AYAYQAYAYAHAHQAHAGAWAUQAWATAfASQAeASANAHQAGADAGADQADABACABAjvgqQABAFANAbQAMAVAMAXQAJARAKARQAKASAHAOQAWAnAIAPAhSAtQAFAEAFAEQAKAIAKAJQATARAQASAlzkqQAuCEAWA2QAWA2ANAwQANAvgDCiQAEACADACQALAGAKADQAWAHASgCQACAAACAAQATgEAOgSQALgOAHgbQAKASAIANQAZArAZAgQAUAaAgAcQAXAVAeAXQAEACADACQADACANAIQAMAIAXgNQAYgNAFgaQAFgbgNgXQgMgXgbgbQgagbgUgXQgTgXgNgQQgLgRgGgRQAFAGAFAFQApAyAQAPQAlAiBTAv");
	this.shape_17.setTransform(26.6,14.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7E2326").s().p("AgXF0IgQgKIgHgEQAEgFACgGQAHgQgEgRQgEgNgLgQIgUgbQgtg2gahEQgRgtgHguIAKAIIAUARQATARAQASQAGARAMARQANAQATAXQAUAXAaAbQAaAbAMAXQANAXgFAbQgFAagYANQgNAIgKAAQgHAAgEgDgAByEXQAUgYgGgTQgEgNgWgRQhfhEgzhKQgvhAgRhBIAdAVIAPALIABABIABAAQAnA5AXAYIAfAfIAdAaQAWATAfASIArAZIAMAGIAFACQAPANAIATQAGASgEATQgEATgNAOQgNAOgSACIgIABIgcgQgAkTDZQAYg9gQguIgMgnQgFgVgCgQIATAiIARAgIAeA2QgHAbgLAOQgOASgTAEIgEAAgADKC+IAPgRQAIgMAAgMQACgVgIgOQgHgNgQgOQgPgPgcgWQgcgXgegdQgegegWgrIgnhRQgRgmgxg2Qgwg2gLgGIAbhCQAYARAbAhQAbAhAVAhQAXAhAWAxQAXAxAPAoQAJAYAUASQAfAeAkAZQAnAbAkAfQArAjgXAzQgTAngkAAQgKAAgMgDg");
	this.shape_18.setTransform(35.1,14.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A92F33").s().p("AgsEoQgIgfgQgkIgrhhQgYg6gKgsQgHgegBgdQAWAiAeAeIgKgIQAHAvARAsQAaBEAtA2IATAcQALAPAEANQAEARgHARQgCAFgEAFQgdgXgYgVgACUD5IgOgIIAHADIhAhLIg9hGQg5hJghhLQgQgogKgnQAXAYAZAVQARBCAuA/QA0BKBfBEQAWARAEAOQAGATgUAXIgWgMgAkDDCQgKgDgLgFQAGgKAEgKQALgXAFgxQAFhAgFg6IAYAsQACAQAFAVIAMAnQAQAugYA9IgJABQgPAAgQgGgAEBCrIgcgMIgFgDIgMgGQAHgmgYgYIgvguQgXgXgmgzQgmg0gRggQgSgggRgZQgRgZgTgOQgTgOgigeQgigfgegYIghgcIB8ANQALAGAwA2QAwA3ASAlIAnBRQAWAsAeAdQAeAeAcAWQAcAWAPAPQAQAOAHAOQAIANgCAVQAAAMgIAMIgPARIgBgBg");
	this.shape_19.setTransform(29.5,16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC3D42").s().p("AgDEIQgZgggZgrIgRgfIgeg2IgSggIgSgiIgYgsQgNgbgBgFQABAFANAbQAFA6gFA/QgGAygKAWQgFALgGAJIgHgEQADiigMgvQgNgwgWg2QgXg2gtiEIDSgXIAhAbQAeAZAiAeQAiAfATANQASAOASAaQASAZARAgQASAgAmA0QAmAzAWAWIAvAvQAZAYgIAmIgrgZQgegSgWgTIgdgaIgfgfQgZgYgmg5IgCgBIACABIgBAAIgBgBIgPgLIgdgVQgagVgVgYQAIAnARAnQAgBMA6BJIA9BGIBABLQhSgvglgiQgQgPgrgyIgKgLQgQgSgTgRIgTgRQgdgegWgiQAAAcAIAfQAJArAZA6IAqBiQAPAkAJAfQgggcgUgag");
	this.shape_20.setTransform(20.1,14.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).wait(1));

	// Layer 3
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgfiFIAsAXQAdCagQBaQgUijglhog");
	this.shape_21.setTransform(20,-46.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhfFdQggi0gXhOQgJgfgIgOQgdg0gLgbQgEgLgFgOQgHgVgIgbQgOgugRhJQAZgSAZgPQB0hHBsgPQB4gSBvAzQAIAoAIBXQAHBWgFAlQgFAkAAAiQgBAPAAA5QABBHABCKIAAAAQACAPACAQ");
	this.shape_22.setTransform(-1.3,-27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E2326").s().p("AgPAuQgJgfgIgPQgcg0gLgbIgKgYQgHgVgIgcQgNgugShJQAZgRAZgPQAcBpAVA8QAKAbANAeQAXA3AjA+QAPAZAMAfQAgBTAQB6IhYAHQghi0gWhOg");
	this.shape_23.setTransform(-14.8,-23.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A92F33").s().p("AAKCLQgLgfgOgaQgkg/gXg2QgOgdgJgcQgWg7gchqQB1hHBsgPQAFBqAWBqQAMA6AMBDIAFAhQANBXABBcIgBA6IgDBJIhWAHQgQh7gghSg");
	this.shape_24.setTransform(-7.9,-27.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC3D42").s().p("Ag3EOIAAg7QAAhbgNhYIgFggQgMhDgMg6QgWhqgFhqQB4gSBtAzQAIAoAIBXQAHBWgEAlQgGAkAAAiIAABIIABDRIAAAAIAEAfIi1APIADhJg");
	this.shape_25.setTransform(12.5,-28.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgWAdQghg6gcg6QARg3ARgVQAIA7AoBjQAoBiAtBHQhKhOggg5g");
	this.shape_26.setTransform(-27.9,-51);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFPFoQhhjaAPjkQAKiPgth7QgwgphMgEQg9AAhCAWQgMADgKAEQh3AshGBJQhGBKgUBSQA6CEBPBeQBQBdBNCu");
	this.shape_27.setTransform(-4.2,-50.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E2326").s().p("AA8FyQg2jCgHgmQgJgngOgsQgOgsgJgvQgEg0gQhvQgRhvgjhEQBLAEAwApQAtB7gKCPQgQDkBiDag");
	this.shape_28.setTransform(17.3,-52.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A92F33").s().p("AgrAAQgbishei7IAWgHQBDgWA9AAQAiBEARBvQARBvADA0QAKAvAOAsQAOAsAIAnQAJAmA1DCIhQAdQhBgLg/l6g");
	this.shape_29.setTransform(6.7,-51.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DC3D42").s().p("Ah+B0QhQheg5iDQAThSBGhKQBGhKB2gsQBeC8AbCsQBAF6BBAKIjrASQhLithQheg");
	this.shape_30.setTransform(-11.2,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},6).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

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

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhcAQQABAEABADQACAJACAFQAGAOAHABQAIACAIgHQAGgGB3hOQAPgLAKgE");
	this.shape_7.setTransform(-3.1,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A89A7").s().p("Ag9BMQgHgBgGgOIgEgOQAEgdARgWQAQgXAXgTQAWgSAagHQAZgHAIAEQgiAYgJAPIgJARQAqgEAaAJQh2BOgHAGQgGAGgGAAIgDgBg");
	this.shape_8.setTransform(-4.2,-0.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgiArQgbgDgYgHQgCAAgCgBQAVgkAjgaQAHgFAGgDQAVgIAdAEQAeAEAeBIQggAHgaACQAFgWgGgRQgGgQgXgCQgWgDgJARQgIASADAZgAAgArQgPACgPgBQgGAAgGAAQgLgBgNAA");
	this.shape_9.setTransform(-0.6,3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAgAFQgHgQgXgDQgWgCgJARQgIARADAZQgbgDgXgGIgFgBQAWglAjgaIAMgHQAVgIAeAEQAdAEAdBIQgfAHgZACQAEgXgFgQg");
	this.shape_10.setTransform(-0.6,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ah0AOQAAgHAAgHQAAAAAAgBQABgLAEgLQAGgVANgPQAQgTAPgEQASgHAbAAQAZAAAaADQAMACAMACAhnA5QApgrA0gUQAJgDAFgCAhmA7QAHgEAGgDQAjgSApgKQAygFAzANAhBBUQBaASBcgf");
	this.shape_11.setTransform(1.1,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7A89A7").s().p("Ag8BLQgJgEgGgHQAjgSAogKQAzgFA0ANQgzABguASQgcAOgQABIgEABQgJAAgJgEgAhOAaIgCAAQgHgBgGgFQgFgDgEgFIAAgCQABgKAEgMQAGgUANgQQARgSAPgEQARgIAcAAQAZAAAZAEQAJAFAHAIIABAFQAAAFgCAFQgFAHgIACQgFABgJgCIgOgCQgVgEgTALQgUALgLAVQgJASgJAGQgFADgGAAIgBAAg");
	this.shape_12.setTransform(-0.4,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABzAVQhDgagegsQgdgsgcgHQgbgIghAVAgPBnQAFgXgGgQQgHgRgXgDQgXgCgIASQgIAQACAWQgOgCgNgEQgCAAgCgBQAVglAjgaQAGgFAHgDQAWgIAVAHQAWAJAQAVQAOASAMATQACACABADQgCABgDABAA6BeQgVAGgeACQgLABgLAAQgEAAgEAAQgGAAgHAAQgLgBgMAAQgMgCgMgC");
	this.shape_13.setTransform(1.9,-2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAZAeIgNgBIgWgBIgYgDQgCgXAIgPQAIgSAWADQAXACAHARQAGAQgFAXIgIAAg");
	this.shape_14.setTransform(-3,4.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIAEQgHgQgWgCQgXgDgIARQgIAQACAXIgbgGIgEgBQAVglAjgaIANgHQAVgIAVAHQAXAJAQAUQAOARAMATIADAGIgFACIgCAAQgVAHgeACIgXABQAFgXgGgRg");
	this.shape_15.setTransform(-0.6,3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABkgBQgOgPgVgVQgVgWgYgLQgBAAgBgBQgZgMghAIQgRAGgRANQgIAFgHAIAhDBKQgOgDgOgDQgCgBgCAAQAVgmAjgaQAHgDAGgDQAWgIAUAHQAXAIAQAUQAPASAMATQACADABADQgDABgCABABKBFQgVAHgfACQgLABgLAAQAEgXgFgRQgGgRgXgCQgXgDgJASQgHAQACAXAAABPQgDAAgEAAQgHAAgGgBQgLAAgNgBQgMgBgLgC");
	this.shape_16.setTransform(0.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-8.9,21.9,17.8);


(lib.T_Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
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
	this.shape_20.graphics.f("#C6B3A1").s().p("AitNVQhBgEhAgHIguhDIAnovIDxhOIlnguQi/iIh8jyIgchtIg2g9QAeAgA8A7QBBA9BwBGQBvBFDTAFIAHAAIAFAAIAIAAIB5ACIABAAIAAAAQBuAABRgGIACAAIAFAAIABAAIABAGIACAiQkgA5keg4QBRCKAnAEQDJA5DxABIAzAEQDAASBtAnIgBAAIAAAAIAAACIACAHQASBMAOBCQARBTAJBXQAPCGAJC+Ig8AOIAZgiIg9ogQg/g1hcgNQhdgOhxADIgDgbQAPgLAKgbQgKAbgPALIADAbQiRAahtA2QgvAjACA3IAAGLQANA3AlAYQCGApCeAVIAAACIglACQhDAEhBAAQg9AAg9gDgAL9kvQAIgeAGgfIgOhpIAPghQAgBNAQBDIgOAlQgjBXglBIQhfC0hwBMQCriyA7jbgABrieIgBgGIAkgDIBUgKIBdgMQBugPBPgQIACAAIAAAAIABAAIABgBIATgCImmBjIgCgigAheieIh5gCIgIAAIgFAAIgHAAQjTgFhvhFQhwhGhBg9Qg8g7geggIgDgFIA0juQFXh/GZgZIAUgCIBCgCQB7gCB6APQArAFArAIIA0AJIAKADQACAshZBDQhYBCjxAIQgOhLgRhSIgMhAIAMBAQARBSAOBLQlZALkAgwIBDFyQB7BZHaAKIBOAAQCegDCpgRQhPAQhuAPIhdAMIhUAKIgkADIgDgkIADAkIgBAAIgFAAIgCAAQhRAGhuAAIAAAAIgBAAgABqikIAAAAgAH8jcIAAAAgAAop4IAAAAg");
	this.shape_20.setTransform(11.8,-4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F1F1F1").s().p("AAINAQidgViGgpQglgYgNg3IAAmLQgCg2AvgkQBtg1CSgbQAPBwAJBwQAJBsAEBsQAFBqAABqIgBA2IABg2QAAhqgFhqQgEhsgJhsQgJhwgPhwQBwgCBcANQBdANA/A1IA9IhIgZAhQg1ANg1AJIg1AJQhdAPhgAGIgHABIAAgCgABXC+IAFASQAiC+AQD4QACgBAngDQAogEAegJQAegIABgGQAEgagCgZIgOjYIgZijQgmgGgiAAQgvAAgpALgAjcEDIASF4IB6AIQgHjZgTjaQhAAGgyAtgAghB+IAAAAgAAnBCIgygFQANgqAAhTQAAgigCgqQACAqAAAiQAABTgNAqQjzAAjIg6QgngDhSiLQEeA4Ehg5IGlhiIgSABIAfgHIAUgFIAVgKQBfgxBWixIAOBpQgGAfgJAeQg7DbiqCyQgqAegrANIgBABQhtgnjAgRgAIIjQQgjAZg6AXQg6AVhCAVQhCAVgpAHQgpAHADAKQACAJgGABQAAA/ARAYQASAZBWgQQBWgQAbgSIAhgYQAYgQAsg4QAtg6AYhRIgmAcgAgFjYQgLh2gbiiIgEgbIgDgRIgCgMIgRhgIARBgIACAMIADARIAEAbQAbCiALB2QnbgKh7hZIhDlyQEAAwFZgLQDwgHBZhDQBYhDgBgsIAxAKIAHACIBMATQAdAIAdAJQA/BrArBeIABADQAPAgAMAfIgPAhQhWCxhfAxIgVAKIgUAFIgfAHIgBABIgBAAIAAAAIgCAAQiqASidACIgnAAIgmAAgAFypoQiAASg+AIQg+AHgQAGQgBBPAwC8QA7AhCJgYQCKgaArhjQAmhvgZgzQgEgIgGggQgJgDgSAAQgqAAhaAPgAlIk2QCLAbBngdIACg7QgUiZgMggQgMgggfABQgggFhpgHIixgKIhHgEIgKABIAVCmIAXBhIgFgiQBUA6BnAPgAhWkyIAAgFQgHAEAHABgAGTjtIAAAAg");
	this.shape_21.setTransform(22.7,-2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1,3,true).p("AI0A/IAsAYICrBaICZi6QhHhQhng6QgNgHgMgHQhpBbhACFgAq8jgQgjAOgiASQhTArhPBDQCAB5CHC7IDahRIA/gXg");
	this.shape_22.setTransform(-1.4,-92.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#585858").s().p("AihBJQAtg6AthKQAWgkAmhCQBmA5BHBQIiZC7g");
	this.shape_23.setTransform(75.6,-91.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424242").s().p("AhgBlQBBiGBnhaIAZANQglBDgWAkQgtBJgtA6g");
	this.shape_24.setTransform(64.7,-96.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1,3,true).p("AJVBQIAvAVIClArIBikVQhigth1gMQgPgCgOAAQg8B8gGCUgAqjjgQgjAOgiASQhSArhQBDQCAB5CHC7IDbhRIA+gXg");
	this.shape_25.setTransform(-3.9,-92.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#585858").s().p("AiCB8QAVhYAMhVQAGgqAIhMQB1AMBhAtIhhEWg");
	this.shape_26.setTransform(73.6,-95.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#424242").s().p("AguB+QAFiUA8h8IAcACQgIBMgGAqQgMBVgVBYg");
	this.shape_27.setTransform(60.5,-97.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CACACA").ss(1,1,1,3,true).p("Aj/uBQAGAgAHAgQABAIABACIAAABQAnDGAJAwQABAGABAIQACAIABAJQACANADAOQAcCoANB7QACATACATQAAADABADQABATABARQAKCVgTBBQgJAegQAMQACAOACAOQAQB2AMB4QAKB0AGB0QAICQABCSQAAAAAAABQADAAAEAAQBigIBggQQAbgFAcgFQA4gLA3gN");
	this.shape_28.setTransform(30.3,-9.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ar3mkIAujxQE5ieGHhDQAJgCAKgBQAFgCAFAAQABgBADAAQAZgEAagCQAOgDAPgBQA4gGA5gCQAzgCA0ABQAsAAAtAEQAbACAaACQAGAAAGACQAZACAZAEQAEgBADABQAoAGAoAHQAfAFAfAGQBjBWAzC9Ar3mkIADAEQAbAeA2A2QA8A5BmBAQBpA/DKgIQDOgHCAgSQASgDATgCQArgJApgHQAygKAtgJQBwgZBTgWQABAAACAAIAAAAAIgkNQARgGAQgEQAKgDAKgEQAMgGAKgGQBkg9BYjHQAIgTAIgTQAjBRAJAzQAAAMABALQAAAZgEAPQgBBKgBBKQgCBPgQBNQgSBQgWBOQgTBGgTBGQgXBQgRBQQgQBOgEBRQgEBPgBBQQgBA2gDA3QgtAVgkANQgQAGgOADQgOjTgSiTQgMhggThaQgQhIgVhRQgBgEgBgEQAAgBAAgBIAAgBIABAAQAAgBABABQAsgRAtgjQB1hXBijNQAmhSAkhiAlyNzQA1AJA2AGQA/AHA/AEQA8ADA+ABQBBgBBDgDQASgCATgBAILNPQAfgIAggIAr3mkIgpDWQASAYARAWQAJAKAIALQCQC1BkBfQBlBgAQAGIARJeQAAASAAAUAtjixQB3EABVDHQAJATAIATQA6CGAdBmQANAoAHAkQAWBiAIB/QBFARBGAN");
	this.shape_29.setTransform(3.7,-10);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#84776B").s().p("AAzKEIABgmIgSpeQgPgFhlhgQhkhfiQi2IgRgVIgjgtIApjXIADAEIAxA6IAZBrQByDtCzCDIFaAgIjpBbIghJLIAtBIQg2gHg1gJg");
	this.shape_30.setTransform(-38.5,13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F3F3F").s().p("Am/HCQgPiMgolBIixjlQgthfg2hlIATgOQCQC1BkBfQBmBgAQAHIARJdIhDhUgAIgCiQgNhggThZQgQhIgVhRIgCgIIAAgCIAAgBIABAAIABAAQAtgRAsgjQB1hZBijNIgbCeQgxDCguCGIg0IuIgeAJQgNjTgSiTg");
	this.shape_31.setTransform(4.7,21.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2C2C2C").s().p("An7JlQgIh/gWhiQgHgkgMgpQgehlg6iGIgQgmQhWjGh3kBIBDgdIAjAtIARAWIgTAOQA2BlAtBfICxDkQAoFCAPCMIBDBUIgBAlQhGgMhFgRgAKeAXQAuiFAxjCIAbieQAnhRAjhiIgCCUQgCBPgQBNQgRBQgXBPIgmCMQgXBPgQBQQgQBOgEBRQgFBPgBBPIgDBuQguAVgkANg");
	this.shape_32.setTransform(3.5,14.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ABRDkIgFgTQBJgWBbAKIAdCxIATDrQACAcgEAcQAAAGgfALQggAJgpAFQgoAEgCACQgVkOgmjMgAjQK2IgWmPQAwgyA/gJQAWDoAKDpgACfAcQgTgaAAhDQAGgCgDgJQgDgKAqgKQAqgKBEgbQBFgbA8gbQA9gcAkgeIAqghQgZBaguBBQguBAgZATQgHAFgbAXQgcAVhaAWQgpAKgaAAQgeAAgKgNgAlWkmQhigJhRg1IAFAiIgVhhIgWimIAKgCIBDgDQBDgCBlgCQBmgCAfADQAegEANAgQAMAgAVCeIAAA+QhEAZhTAAQgpAAgtgGgAhpk4IAAAGQgHgBAHgFgACDlIQg1jDABhSQAPgJA/gNQA/gOCEgfQCGgiAhAGQAGAiAFAIQAcA1gmB7QgrBviRAlQhMAUg0AAQguAAgbgOg");
	this.shape_33.setTransform(18.6,-10.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F1F1F1").s().p("AAlOHQifgYiGgrQgkgZgOg7IgEmhQgCg6AtgnQBqg8CRgjQAQB2AMB4QAKBzAGB1QAICPABCTQgBiTgIiPQgGh1gKhzQgMh4gQh2QBxgIBfALQBgAJBEA3IBLJVIgaAmQg3AOg4ALIg4AKQhgAQhiAIIgHAAIAAgBgABrDOIAFATQAnDMAUEOQACgCApgEQApgFAfgJQAfgLABgGQAEgcgCgcIgUjrIgdixQgdgDgbAAQg6AAgyAPgAjHEkIAWGPIB6AHQgKjpgWjpQg/AKgxAygAgQCPIAAAAgAA4BLIgzgCQAMgqAAhOQAAgqgDg0QADA0AAAqQAABOgMAqQjvALjCgyQgmgDhOiJQESAqEchNIGviFIgTADQARgGAQgEIAVgHIAWgMQBjg9BYjHIASByQgGAhgIAiQg7D0ixDMQgsAjgtARIgBABQhygljFgKgAImj4QglAdg8AcQg9AchFAbQhEAagqAKQgpALADAKQACAJgGACQABBEASAYQATAZBYgVQBagWAcgVQAcgXAHgFQAZgTAthAQAuhBAZhaIgpAhgAo7kbIiHlAQEIiJFfhMQDBgoBZgMQBUgNBHgUIAKgCQAZACAZAEIAIABIBQAMQAeAFAfAGQBjBWAzC+IgQAlQhYDHhjA9IgWAMIgVAHQgQAEgRAGQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgBAAIAAAAIgCAAQixAeigAOIhOAFQgMh8gdinIgFgbIgDgSIgCgNQgIgwgnjGQAnDGAIAwIACANIADASIAFAbQAdCnAMB8QhbAEhOAAQk8AAhdhCgAk3kpQCIATBlgmIABg+QgViegNggQgNgggdAEQgggDhmACQhkAChEACIhDADIgJACIAVCmIAWBhIgFgiQBQA1BiAJgAhKk1IAAgGQgHAEAHACgAF/qkQiEAgg/AOQg+ANgQAJQgBBSA1DCQA8AgCOglQCQglAshvQAmh7gdg1QgFgIgGgiIgNgBQgqAAhwAcgAGqkPIAAAAg");
	this.shape_34.setTransform(15.4,-9.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C6B3A1").s().p("Ai/ONQg/gEg/gHIgthHIAhpMIDphcIlbgfQiziDhyjsIgahsIgwg5QAbAeA2A2QA7A5BnBAIABAAIABABIAFADQBdA0ClAAIAAAAIAAAAIAmgBIADAAQDPgHCAgSIABAGIACAkQkcBMkRgpQBOCJAlADQDCAyDvgLIAzACQDFAKByAkIAAAAIgBABIABACIACAIQAVBRAQBIQATBaAMBgQASCTAODTIg/AQIAZgmIhLpVQhEg3hfgKQhfgKhyAIIgEgcQAQgNAJgdQgJAdgQANIAEAcQiQAihqA9QguAnADA6IAEGhQANA6AlAaQCFArCfAXIAAACIglADQhDADhCABQg9gBg8gDgAL0l5QAIgiAGghIgRhyIAQgmQAjBRAIAzIACAXQAAAZgEAPQgkBigmBSQhiDNh1BXQCxjMA6j0gABLivIgBgGIAkgFQAsgJApgHIBegTQBxgZBTgWIACAAIABAAIAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIAUgDImwCFIgCgkgAkuibQilAAhdg0IgFgDIgBgBIgBAAQhnhAg7g5Qg2g2gbgeIgDgEIAujxQE5ieGHhDIAUgDIAKgCIAEgBQAYgEAZgCQAPgDAOgBQA5gGA5gCQAzgCA0ABQAsAAAtAEIA1AEIALACIgKACQhGAUhVAMQhZANjBAoIAAgBIgCgLIgNg/IANA/IACALIAAABQlfBLkHCKICGE/QB0BTHPgUIBOgFQCggOCwgeQhTAWhxAZIheATQgpAHgsAJIgkAFIgDgmIADAmQiAASjPAHIgDAAIgmABIAAAAIAAAAgABKi1IAAAAgAHlkMIAAAAgAgcsug");
	this.shape_35.setTransform(9.1,-10);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIbBAQA2ArBYAPQAFAEADgCIClAiQgrj4iFicQgRgKgnAEQgdDTg2BpgApvjEQgjAOgiASQhSAshPBDQB/B5CHC6IDbhQIA+gXg");
	this.shape_36.setTransform(-9.1,-95.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#424242").s().p("ABCC6QhWgPg3grQA3hqAbjSQA1CRAIBdQAIBegBAsIgCABQgDAAgEgDg");
	this.shape_37.setTransform(52.3,-102.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#585858").s().p("AgwCsQABgtgIheQgIhcg0iRQAngEARAKQCECcAsD4g");
	this.shape_38.setTransform(64.7,-100.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("Apim+IgfANQgLgKgPDZQAZDfCODCQBwCaCmA7QAtAQAyAJQCzAhCtgbQAwgHAwgMQDZg4CCj+Qg0AWgdAKQgZAeggAZQg1Aqg8AXQgWgPgYgOQgoABgkABQiEABhNgEQhEgDg8gGQgwgGgtgHQgjAOgqANQi0hBhhinQh4jOgBjxg");
	this.shape_39.setTransform(23.7,68.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A92F33").s().p("Ai3BgQgxgJgugQQAQgSAQgUQAXgdAlg3IBEAAQAEAAABgBQABgBAAgGQAAgFAGgQIAAgCQAGgOACgRQA+AHBCADQBNADCEgBIAGAJIAQAXIAFAIQAHANAGASQgxBKg9A6QhNAMhPAAQhgAAhkgSg");
	this.shape_40.setTransform(29.3,101.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#7E2326").s().p("AiQDVQiOjDgZjeQAPjZALAJIAfgMQAADxB5DOQBhCnCyBBQArgNAjgOQAsAHAxAFQgDARgFAPIgBACQgFAQAAAEQAAAGgCACQgBABgDAAIhFAAQgkA3gXAeQgQAUgQARQimg7hviZg");
	this.shape_41.setTransform(-11.9,66.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AhcA5QBNgoBHhFIAigiQATgTAQgLQgkA+g+A8QgkAmhzBJg");
	this.shape_42.setTransform(74,94.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DC3D42").s().p("AhvAfQgGgSgHgNIgFgGIgPgYIgGgJIBMgBQAYAOAVAOQA8gWA0gqQAggZAZgeQAegLA0gWQiCD+jZA3QgwAMgwAIQA+g7AwhLgACThdIgiAiQhIBEhMApIggA7QByhJAlglQA+g8Akg+QgQAKgTAUg");
	this.shape_43.setTransform(68.3,95.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1,3,true).p("AQtjNQAJiChBjIQh3ifjohmQgCgBgDgCQgggNghgNQiog/jbgmQgzgJg3gHQgDAAgDAAQjKgRimABQgnAAglACQkdAKiiBGQgDADgEACQibB9hCC9QgMAigLAiIAfFwIAAAAQAqGcCyD/QgQBThCCOAqgnUQArgIA3ADQBpAFCWAvQApANAlAMQAjALAfALQB0ApA7AfQBcAxBCArQAUAOAaAEQA7ALBZgjQA9gYA9gMQBDgNBDABQAeAAAcABQA7ABA0AEQAdABAaADQBhAICMApQgnC1i8DSQggAhhoBEQgGAEgHAEAuIgpQAGALAFAJQA1BZAvA6QA9BMBbBFQAtAjFGAYQAkACAmADQA6AEBCADQAOABANABQAoACAmADQAMABAMABQCfAOCLAZQANACAMACQACABABAAQB5AXC9h7QgNAaiMCaQhcBliQBgQgSAMgSALQg7Amg6AkIgRAMIjECJQixAuiPgFQlFgMitiwAqgnUQhTDFiVDmIAAAAAv6h5IgzGMQAWFFCnCrAv6h5IByBQAsltnQBqCDAbEQ");
	this.shape_44.setTransform(67.7,6.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#CACACA").ss(1,1,1,3,true).p("ACQvlQATAvARAuQBdD+ATD5QAEA7AAA4QABBEgGBBQgDBOgGBCQgWECg8BPQgJAMgJAKQgXAcgPAMAB3GEQgBAFgCAGQgIAagQAmQgBAEgCAEQgCAEgCAEQgGAPgRAWQgkAuhSBOQgRAPgSAQQgIAIgJAHQgDADgCACQgGAFgGAGIgwBeIh6DK");
	this.shape_45.setTransform(59,2.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2C2C2C").s().p("AjGFFIAzmMIAAAAIAAAAIgflwIAYhEQBCi9Cah8QBpCCAcEQQhUDFiUDlIAAAAIhyhPQArGcCxD/QgRBThACOQiniqgXlGg");
	this.shape_46.setTransform(-19.5,1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkUDhQhlgDhdgcQgpgMgngRQhHgfgegmQgqg5AHhkQAGhUAghPQBNAvBRAqQCJBGCSA1IARAIQAJAEAEAHQAHAMgFAYQgLBCgZBKIgHARQgFAJgHAGQgNAKgYAAIgJAAgACNDWQg9gBgygLQANhSAPg+QAMgwATgTQANgOAXgJIArgOQA6gPAtgSQAYgKAVgKIA0gZQAegPAYgFQAugKBWAPQBdAPApgFQgQAygkA4QgWAigwA+IglAtQgWAZgUAOQglAZg3AMQgkAIg/AFIgzAEQg3ADgkAAIgNAAg");
	this.shape_47.setTransform(94.2,7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F1F1F1").s().p("AjqHaQhKgChIgIQBThOAkguQARgWAGgPIAEgIIADgIIgDAIIgEAIQgGAPgRAWQgkAuhTBOIgSgCIg7gIQjSggg0heQBxgtCagFIApgBQBPAABlAKIAnAEIAGABQC6AUAkACQBpAFCGgRQgtAegmAbQg3AkgeASQguAagoAOQgmANgyAFQgWADgdABIgnABIhNgCgAAwC7QhggChdgLQiYgRiSgqQiIgoiCg9QgjgPgUgNQgcgTgQgXQgegqAEg0QAEgzANgeQANgeAhhTIAwiDQB/AfB6AwQCWA7CMBWQAsAdAbANQAjASAhAGQgWEDg8BOIgSAWIASgWQA8hOAWkDIAIABQAxAIA/gVIBugtIBagkIAKgEQA6gYAhgfQAdgbATgkQA8ABAzAEIA4AEQBgAICNApQgnC2i8DRQggAhhoBEQiDAbiIAHQg4AEg5AAIgpgBgAqSjCQgHBlAqA5QAeAlBHAfQAnARApAMQBeAcBkADQAfACAPgMQAHgGAFgJIAHgRQAZhJALhCQAFgYgHgMQgEgHgJgFIgRgIQiSg1iJhGQhRgqhNgwQggBQgGBUgAHCkVQgYAFgeAPIg0AZQgVAKgYAKQgtASg6APIgrAOQgXAJgNAOQgTAUgMAwQgPA+gNBRQAyALA9ABQAmAABCgEIAzgDQA/gFAkgIQA3gMAlgZQAUgOAWgYIAlgtQAwg+AWgjQAkg4AQgyQgpAFhdgPQg0gJgmAAQgYAAgSAEgAgpi5IAAAAg");
	this.shape_48.setTransform(91.4,20.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AkzidIAGgGQCihGEcgKQBBBzArB/QAlBvASB0Ikjh2Qg3A6gnBJQg3gDgrAIQgbkPhpiCg");
	this.shape_49.setTransform(18,-64.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C6B3A1").s().p("AhRMvQhrgFhogsIAvheIAMgKIAFgFIARgPIAjggIgjAgIgRAPIgFAFIgMAKIgvBeQiagBh6g5Qh6g5g1g5QApgvAlgxQAkgyAYgbIAIgCQAdgFA+gRIDLg5IBKAFIB8AHQj0gvjxhWQgegKgQgJQgYgNgOgSQgVgcgFg8QgSjNAuiuQAYhbAphLQBpAGCWAvIBOAZIBCAWQgEg5gJg4IDIBQQByAuBOAiIAGACQBAAZAiAIQA7AOAugJQA7gMAkgsQAYgdATg+QAniIAEiPQACg5gEg3QAhAMAgAOIAFADIAAAJQA5B3AdCEQAfCLgCCKQg0gDg7gCIg6gBIgDAAIgFAAIAAAAIgBAAQg6AAg7ALIgCABIgGABQg9AMg9AYQhEAagzAAIAAAAIAAAAQgNAAgMgBIgCgBIAAAAIgCAAQAGg9AAg/IAAgJIAAAJQAAA/gGA9QgagEgUgOQhCgshcgwQg7gfh0gpQB0ApA7AfQBcAwBCAsQAUAOAaAEQgDBOgFBCQghgGgkgSQgbgOgsgcQiLhWiVg7Qh6gxiAgeIgwCDQghBTgNAeQgNAdgEA0QgEAyAeAqQAQAXAcATQAUAOAjAQQCCA9CJAnQCRAqCXASQBeALBgACQBOABBMgEQCIgICDgbIgNAJIgCABIgFADIAAAAIgKAGQiUBdhpAAIgBAAIAAAAQgUAAgTgDIgDgBIgZgFQiLgYifgOQAPgMAXgcQgXAcgPAMIgYgCIhOgGIgbgBIAbABIBOAGIAYACQCfAOCLAYIAZAFIADABQATADAUAAIAAAAIABAAQBpAACUhdIAKgGIAAAAIAFgDIACgBQgNAaiMCaQhcBliQBgIgkAXIh1BKIgRAMQhAAZhWAAIgggBgAjPGoIgoABQibAFhwAtQAzBeDSAfIA7AIIASACQBJAIBKADIBLABIAoAAQAcgCAXgCQAxgFAngNQAogPAvgaQAdgRA3gkQAmgbAugeQiGARhpgFQgmgCi6gVIgGAAIgmgEQAQgmAIgaIADgLIgDALQgIAagQAmQhkgKhQAAIAAAAgAAYFpIAAAAgACqglIgHgBQAFhCADhOIACAAIAAAAIACABQAMABANAAIAAAAIAAAAQAzAABEgaQA9gYA9gMIAGgBIACgBQA7gLA6AAIABAAIAAAAIAFAAIADAAIA6ABQgUAlgdAaQghAfg6AZIgKAEIhaAjIhuAtQguAQgoAAQgOAAgNgCgACri2IAAAAgAJ5j+IAAAAg");
	this.shape_50.setTransform(71,5.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3F3F3F").s().p("AJJD2Ig4gEQADiLgfiJQgdiEg5h3IAAgKQDnBmB3CfQBBDHgJCDQiMgphggJgAnoBoIhPgZQiVguhqgGQAohIA3g6IEkB1QAJA4AEA5IhCgXg");
	this.shape_51.setTransform(92.4,-43.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#84776B").s().p("AiqO/IB7jKIh7DKQlFgMisiwQBBiOARhTQizj/gqmcIByBQIAAAAQCVjmBTjFQArgIA3ADQgoBKgYBbQgvCuASDNQAFA8AWAdQANASAYANQAQAIAeALQDxBWD0AuIh9gHIhJgFQlGgYgtgjQhbhFg9hMQgvg6g0hZIgMgUIAMAUQA0BZAvA6QA9BMBbBFQAtAjFGAYIjLA5Qg+ARgdAGIgIABQgXAcglAxQglAxgoAvQA0A5B6A5QB7A5CZACQBnArBsAGQBrAFBLgeIjECJQifApiEAAIgdAAgAIIkjQgigJhAgYQAAg5gFg6QgTj6hcj9QBcD9ATD6QAFA6AAA5IgFgCQhPgihzguIjHhRQgThzgkhwQgrh/hBhzIBMgCQClgBDMARIAFAAQA3AHA0AJQDaAmCoA/QAEA4gBA4QgECQgoCHQgTA+gXAdQglAtg6AMQgTADgUAAQgfAAgkgIg");
	this.shape_52.setTransform(46.4,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_15},{t:this.shape_14},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-116.4,191.2,232.9);


(lib.T_Arm_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AgLBHIgBgVQgFhLADgsQABgSAJgDQAEgCAFACQAFADADAFQADAHAAAPIgBBWQAAAZgDAMQgGAVgPAIQgCgIAAgNg");
	this.shape.setTransform(-9.4,-117.5,0.985,0.932,0,-1.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AgKCbQgDgCgBgCQgDgDgBgIQgGg3AAg4IADg0QACgoADgRQAEggAIgXQAEgPAIgEQAGgBAFACQAKAFgGARIgIAcQgCAHgBAYIgBApIgDAkQgDARABAJIACAWQAAALgBAPIgHBBQAAAIgEACIgEABIgCAAg");
	this.shape_1.setTransform(-75.3,-98.4,0.985,0.932,0,-1.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000FF").s().p("AiyBSQgEgGAFgFQADgEAHgEICehVQA3geAfgNQAzgUAqAAQAKAAABAFQgMAHgeAJQgxAPg6AcQghARhEAlIhZAxQgGAEgEAAIgCAAQgGAAgCgEg");
	this.shape_2.setTransform(-42.7,-173,0.985,0.932,0,-1.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("ABIBkIgIgMQgEgHgJgHIg0guQghgcgTgUQgNgOgIgLQgLgPgGgSQgGgMAFgIQAEgHAKACQAGACAHANQAVAnA2AuIAjAdQAVARANAPQAIAJACAGIABAKQAEAHABAEQAAAEgCADQgDADgEABIgDAAQgGAAgFgFg");
	this.shape_3.setTransform(-15.9,-171.7,0.985,0.932,0,-1.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0000FF").s().p("AhkCWQgBgCADgGIAIgQQAbg3ARgZQAIgNAdglQAhgsAmg2QANgTAGgNQAFgQAIgCQAEgBACADQACACgCAGQgCAFAAAIIAAANQgCAOgRAXIhhCDQgcAogUAfQgNAUgHAGQgEAEgDAAIgCAAQgDAAgCgDg");
	this.shape_4.setTransform(-15.7,-150.2,0.985,0.932,0,-1.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0000FF").s().p("AirBFQgHgHAIgJQADgDAMgFQAXgJAmgUQArgWASgIQAfgOAzgOIBUgYQAVgHALACQAJACABAGQAAAEgIAGQgaAPgrAMIhIAVQggAKg5AaQg/AdgbAKQgGACgEAAQgFAAgDgDg");
	this.shape_5.setTransform(-37.8,-132.2,0.985,0.932,0,-1.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0000FF").s().p("AjOAZQgOABgBgIQgBgGAGgDQADgBAJgCQC0gGCfgVIApgDQAXgBARAGQAGABAAAFQACAGgMACQiTAWhkAGQgsABhYABg");
	this.shape_6.setTransform(-69,-126.4,0.985,0.932,0,-1.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0000FF").s().p("AjOBfQgHgCgGgEQgGgGABgGQAAgIAKgFQAEgBANgBQAdgDA2gVIE6iCQASgIAGAKQAEAHgHAHQgEAEgKAEQgyATh+A8QhuA2hEAWQgSAGgLACIgPABIgPgBg");
	this.shape_7.setTransform(-30.2,-120.4,0.985,0.932,0,-1.1,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0000FF").s().p("AhMCrQAIghAFgNQAGgRAKgVIAlhXIAYg+QAZg9AJggQACgNAGgDQAFgCAGACQAFADADAFQADAHgCAPQgEAegSArQguB2g4BoQgGALgFAEQgFAEgFAAQgDAAgEgCg");
	this.shape_8.setTransform(0.4,-143.7,0.985,0.932,0,-1.1,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0000FF").s().p("ACHCYQgOgMgSgUIgegiQgegig2g1IhBhAQgogpgYgQQgNgIgCgJQgBgFACgFQADgFAFgCQAJgEARALQAiAYA4A1QBsBnAxA+QAXAeAFASQADAMgGAEQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgFAAgIgGg");
	this.shape_9.setTransform(-6.5,-172.5,0.985,0.932,0,-1.1,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0000FF").s().p("AjDBoQgGgEADgIQABgEAHgGQBDg9CDhAQA2gbAhgMQAygTArgDQAIAAACACQADACgBAEQAAAEgCADQgEADgJADQjDBAipB4QgHAEgFAAIgEgBg");
	this.shape_10.setTransform(-41.2,-177.4,0.985,0.932,0,-1.1,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0000FF").s().p("AjXFDQgEgBAAgIQAAgKAIgSQCdlYERkJQAGALgOAVQgTAcgeAkIg0A9Qi5DciCEGQgEAIgFAAIgBgBg");
	this.shape_11.setTransform(-76.7,-141.7,0.985,0.932,0,-1.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0000FF").s().p("Aj4AdQgJgDAAgHQAAgKATgDQCLgTBHgHQB0gLBdAEQA1ADAYAQQgFAGgQABIjsAKQiDAIhoAMIgJABIgFgBg");
	this.shape_12.setTransform(-73.1,-113.1,0.985,0.932,0,-1.1,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0000FF").s().p("AAKCyIgGgHIgCgCQgEgdgDgmIgGhQQgGhkgNhUQgCgKABgHQADgKAIAAQAHAAAFAHQADAGABAIIAEAnQANBeACAgIAGBPQADAwAFAfQADAVAAAOQgQgHgGgFg");
	this.shape_13.setTransform(-10.4,-28.7,0.985,0.932,0,-1.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0000FF").s().p("AgdFxQgEgCgCgDQgDgFAAgKQgCh/AWjYQAYj3ADhgQAAgRAFgIQAEgFAHgCQAHgBAFAFQADAEAAALQgDBogUDFQgUDMgDBhIgCA2QgCAegGAWQgCAJgEACIgEABIgDgBg");
	this.shape_14.setTransform(-10.6,-79.4,0.985,0.932,0,-1.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0000FF").s().p("AAeG6Igth7QgXhAgGgdQgFgfgBgzIgFkqQgBinAFiEQABgTAKAAQALAAABAUIAJJIQABA+AGAfQAFAbANAnIAXBAQAKAfAMAwQAHAagDANQgOgEgLgbg");
	this.shape_15.setTransform(-72.6,-46.2,0.985,0.932,0,-1.1,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0000FF").s().p("AAUHUQgEgBgCgJQgXhVgBhwQAAhFAKiDIAIhYQAEgugBgQQgBgSgGguIgijaQgHgqgHgUQgFgQAAgEQABgGADgEQADgEAFgBQAKAAAHARQASAuARBiIAaCWQAIAtABAXQACAigKBLQgTCpAJCnIACAxQABAcgCAVQgBAGgDAFQgDAEgEAAIgCgBg");
	this.shape_16.setTransform(0.7,31.2,0.985,0.932,0,-1.1,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0000FF").s().p("AlYByQgDgFAEgIQARglAnggQAagWAxgdQApgYAVgKQBZgrCAgQQBDgIApAHQAbAFApARQAvATAWAQQAfAWADAaQABAHgDAFQgDAHgHABQgHABgKgLQgdgdgmgUQgngUgqgGQgggEgyACQh1AJhpAuQhvAvhNBSQgFAFgGACIgEABQgDAAgDgDg");
	this.shape_17.setTransform(-36.7,-10,0.985,0.932,0,-1.1,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0000FF").s().p("ACcGRQgDAAgDgDQgCgCgEgKQgsiphTiWIhFh4QgphIgWgzQgqhpgGhsQAAgIACgCQAHgEAGALQAPAYAJAnQAFAWAJAtQAPA+ArBPQAYAtAzBXQANAXAjBIQAqBbASAvQAcBPAFBDQAAAGgCADQgBACgDAAIgCAAg");
	this.shape_18.setTransform(-54.1,35.4,0.985,0.932,0,-1.1,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0000FF").s().p("AAZBxQgGgBgEgJQgFgNgCgUIgDgiQgCgVgNgxQgKgogMgTQgIgNAHgFQAHgFAJANQAWAhAOA1QAPA1ADA5QABAIgCAFQgEAHgFAAIgCAAg");
	this.shape_19.setTransform(5,75.2,0.979,0.938,0,-13.7,-11.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0000FF").s().p("Ag6BEQgEgCgCgGQgBgGADgFQAEgHALgHIA+gpQAMgIAEgHQACgFABgJIABgPQACgIAFgFQAFgGAHABQAMADgBAXQgBAXgFALQgGAOgVAQQgiAdgoAPQgHADgEAAIgFgBg");
	this.shape_20.setTransform(22,117.9,0.979,0.938,0,-13.7,-11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0000FF").s().p("AA1DiQgFgBgDgJQgDgHgCgQQgEgUgHgRQgIgRgQgYIgagnQgZgrgMg8QgHgmgFhJQgEgzAHgaQACgKAGAAQAGAAACALQAHAgAFAuIAJBOQAHA4AMAbQAHASAOAXIAbAoQAhAzACAlQABATgJAJQgEAEgEAAIgDAAg");
	this.shape_21.setTransform(16.5,93.3,0.979,0.938,0,-13.7,-11.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0000FF").s().p("AANBcQhBgRhUgrQgcgOgHgOQgDgEABgFQAAgGAFgBQAEgBAGAEQAlAUBMAYQA4ATAhAGQAzAKApgIQAFgBABgDQADgEgFgGQgUgbgigVQgYgQgogTIhggrQgSgIgKADIgJACQgFAAgCgDQgDgDACgFQACgEAEgCQARgKAlAMQBAAWAkAQQA2AZAlAfQAeAZAJAYQAEANgCAJQgCAMgNAJQgLAHgPACQgTAEgVAAQgkAAgrgLg");
	this.shape_22.setTransform(-16.3,67.7,0.979,0.938,0,-13.7,-11.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0000FF").s().p("AAHAOIgfgFIgMgCQgHgCgCgFQgBgDACgFQACgEADgBQADgBAHABIBAAJQAFABADACQAEACgBAEQgBADgFADQgJAEgNAAIgLgBg");
	this.shape_23.setTransform(-7.5,148.6,0.979,0.938,0,-13.7,-11.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0000FF").s().p("AghAZQgWgLgKgYQgDgHABgGQACgIAGgBQAFAAAEAEIAGAJQAIAMAOAGQAOAFANgDIAVgHQAOgFAQgBQAHAAACACQADACABAFQAAAEgDADQgEAHgJAEIgRAGIgVAJQgKADgJAAQgOAAgPgIg");
	this.shape_24.setTransform(6.8,143.4,0.979,0.938,0,-13.7,-11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0000FF").s().p("AgLGKQgIgDgLgQQgcgrgJgwQgEgUAAgSQAAgbAIgXQAHgTANgVIAZgkQA1hPAFhJQACgbgDgbQgCgYgIg7QgHg0gBgdQgDhfAugwQAFAIgCAMIgGAVQgTA5ATB9QAUCHgRA8QgNAygsA8QgWAggHANQgPAagFAZQgGAmAPAqQALAgAUAcQAFAHAAADQABAHgEAEQgDACgEAAIgEAAg");
	this.shape_25.setTransform(-39.7,106.9,0.983,0.934,0,-6.4,-4.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#0000FF").s().p("AhaC7QgGgBgCgFQgCgEADgIQADgJAGgLQAPgeAcgsIA4haQAHgLAJgQQALgVANgvQAOguALgVQAFgKAHAAQAFAAAEAFQACAFABAFQAAAGgFAMQgFAMgEATIgGAgIgNApQgIAbgJAQQgGAKgOAUIgMAYQgIASgEAHQgHAMgOAUIgWAfIgSAfQgLAQgOAFIgFABIgFgBg");
	this.shape_26.setTransform(-25.3,128,0.983,0.934,0,-6.4,-4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#0000FF").s().p("AgFDuIgFgCQgEgDgDgHQgGgMgGgRQgGgVgDgZQgGgyAFgrQADgcALgjIASg9IALgvIAFgcQACgQgDgyQAAgQAEgHQADgFAFgBQAGgCAFADQAIAEACATQAGBigZBQIgPAsQgHAbgDAUQgDAVACAuIAEBoQABAIgCACIgDAAIgBAAg");
	this.shape_27.setTransform(-16.4,129.4,0.983,0.934,0,-6.4,-4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#0000FF").s().p("Ag8DrQgGgHAFgOQATg8AggzQAZgoAHgSQAHgUADgjQAEgugFg8QgCglgJhDQgCgIACgGQADgIAIADQAHABADAPQAMBIAFAlQAHA9gBAyQgBAjgHAbQgFAOgRAjIgfA+QgWAsgOARQgHAIgFABIgDABQgIAAgEgGg");
	this.shape_28.setTransform(-1,125.7,0.983,0.934,0,-6.4,-4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#0000FF").s().p("AgyEjQgCgcAVgrQAnhUADg7QABgXgGguQgIhKgHgsQgLhAgQgzIgIgcQgEgPABgLQADgOAIABQAIABAEAMQARAqAKAhQAgBhAMCCQAFAtgBAXQgBAcgLAjQgEAQgQAsQgJAZgHANQgKASgQAOQgJAJgJAAQgFAAgEgCg");
	this.shape_29.setTransform(13.2,112.2,0.983,0.934,0,-6.4,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},6).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRi7IAkAOQgECNgQCGIgJBWQgLiEAEjzg");
	this.shape_30.setTransform(-17.6,29.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABbIzQAjAkAlAMQAkANAWgzQAGgJAHgXQAHgWgDgRQgEgRg1gwQg0gwgMgXIgNjFQA8ArAcAbQAcAaAYAHQAXAHAbgBQAbgBAXgXQAXgWAGgYQABgEgBgEQgBgWgMgKQgNgKgWgJQgWgMgXgSQgXgUgegqQg0g/gdgNIAAkDQADhDAMhlQAMhlgFhiQgggRgngLQg3gPhEgCQh2gEhXAsQgUAKgSALQg9AngrA0QAXBzAqBpQAIAVAJAVIBHEZIABFGQAACLACAUQADATAQAiQAPAiAVAeQAVAdAUAZQATAZAKACQALACAXgEQAWgEASgTAgtEdQAFAmAGA7QAHA9AmAqQAnAoAiAfQADADACACQABABABABAiXEXQADBkANBHQAMBIAUAYQAUAWAkA2QAQAYANARQAOASAOAIQAOAIAigRQAjgRAKgkQAJgkgVgc");
	this.shape_31.setTransform(-31.8,75.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7E2326").s().p("ABWKSQgOgIgPgSQgMgRgRgYQgig2gUgWQgVgYgMhIQgMhHgEhkQAEBkAMBHQAMBIAVAYQAUAWAiA2QARAYAMARQgRATgXAEQgWAEgKgCQgLgCgTgZIgpg2QgVgegPgiQgQgigDgTQgCgUAAiLIAAlFIhHkaIgRgqQgrhpgWhzQAqg0A9gnQgDBEAQBOQALA/AfCOQAcB7ARCaQAuCdB9BjQADAJAMA4QANA4AeA1QAhA0AvAoQAuAoAkAMQgXAzgkgNQglgMgjgkIgCgCIgEgFQgjgfgngoQgngqgHg9IgLhhIALBhQAHA9AnAqQAnAoAjAfIAEAFIACACQAVAcgJAkQgKAkgiARQgYAMgOAAQgHAAgEgDg");
	this.shape_32.setTransform(-39.4,78.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A92F33").s().p("ABYJEQgvgoggg0Qgeg1gMg4QgMg4gDgJQh/higtifQgSiZgbh7QgfiOgMg/QgPhOADhEQASgLAUgKQBXgsB2AEQBFACA2APQABAwgLCCQgLCBgDATQgDASABBLQACBKAOC+QArAWALAKQALAKAZAdQAaAdAUAeQAVAdAMAMQAMAMAjAKQAjAJAjgEQgGAYgXAXQgXAWgbABQgbABgYgHQgXgGgdgbQgcgbg7grIANDFQAMAXA0AwQA1AwAEARQADARgHAWQgHAXgGAJQgjgMgvgog");
	this.shape_33.setTransform(-26.7,69.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC3D42").s().p("ABRGzQgjgKgMgMQgMgMgVgdQgTgegagdQgZgdgLgKQgLgKgrgWQgOi/gChJQgBhLADgSQADgTALiBQALiCgBgwQAnALAgARQAFBigMBlQgMBlgDBDIAAECQAdANAzBAQAeAqAXAUQAXASAWAMQAWAJANAKQAMAKABAWQABAEgBAEIgVACQgYAAgZgHg");
	this.shape_34.setTransform(-9.6,52.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADHDFIgULqQgcgJgqADQgcADgrAIQgTAEgWAFQg4AMg0AgQgNAIgNALQhjlBhMlHQhNlNBcm+QBdm/A2hhQA2hhCWApQCXAqBFAeQAnApAjBBQgCAZgDAYQgLBvgPBVQgEAagFAXQgBAGgCAFQgDAPgDAOIgEAOQhAEPggGW");
	this.shape_35.setTransform(-40.7,-43);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#BC6D07").s().p("AAKAFQgagCAHgIQAZALgFAAIgBgBg");
	this.shape_36.setTransform(74.3,100.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#585858").s().p("AibFPQgejZAIjWQAJjYBsiBQBsiBA0gVQA0gUAchnQhBEPgfGYIAAABIgULoQgdgJgoAEQgcACgrAIQgzi7gcjBg");
	this.shape_37.setTransform(-29.1,-19.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("Ak1F0QhOlNBdm+QBdm/A1hhQA2hhCWApQCXAqBGAeIBFCbQgLBvgQBVIgJAxIgCALIlzDVQirFQAYEaQAYEaBOGcQgOAIgNALQhilBhMlHg");
	this.shape_38.setTransform(-40.9,-43);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#424242").s().p("AkWESQgYkZCrlQIFyjVIgGAcIgEAOQgcBng0AUQg0AVhrCBQhtCCgJDWQgIDYAfDYQAbDBAzC7IgqAJQg4ANg0AgQhNmcgYkbgADQvIQAnAqAjBAIgFAxg");
	this.shape_39.setTransform(-34.1,-39.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIcDTQAzgNAkgZQAmgYgSgnQgBgGgEgIQgDgFgEgHQgLgPgPgDQgPgFhMAaQhKAagZABQhqgXAJgGQgqhRBBgCQBBgCAcgdQAbgfAVgbQAUgcACgjQABglgPgSQgDgDgDgBQgUgLgSAJQgSAIgaAVQgcARgfAQQghAPg0gIQhYADgsAhIjqhsQgggphSgwQhSgwhzg3QgvA1gmA4QhNBxgoB6QgZBMgKBQQEDBaBCAHQBBAHAIgCIEUBHIClBUQBcAtAPAGQAGABANACQAKABAPABQAfABAggEQAfgEAcgEQAcgFAJgGQAIgGAMgQQAMgRABgSQAVgDAPgIQAMgGAKgSQAEgHAEgHQAHgQgBgOQgBgMgIgKQgSgVgjAFgAD/DUQAeALAtARQAvARA2gNQA1gPAvgPQADgBADgBQABAAACgBAC9EgQBHAgA2APQA4ARAbgGQAcgGA6gGQAbgDAUgD");
	this.shape_40.setTransform(54.6,22.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DC3D42").s().p("AFsDrIgagCIgTgDQgOgGhcgtIimhUIkUhHQgIAChBgHQhBgHkEhZQALhQAZhNQFCBsBcgHIDTA9QA1BiCOBBQBGAiBtAAQCGACBWgyQABAOgIAQIgHAOQgLASgLAGQgQAIgVADIguAGQg7AGgbAGQgHABgKAAIAAAAIgDAAQgWAAgggJIgEgBIAAAAIgFgCQg3gPhGggQBGAgA3APIAFACIAAAAIAEABQAgAJAWAAIADAAIAAAAQAKAAAHgBQAbgGA7gGIAugGQAAASgMARQgNAQgIAGQgIAGgcAFIg7AIQgaADgZAAIgMAAgAIrCcIAAAAg");
	this.shape_41.setTransform(52,39.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A92F33").s().p("AFtEqQhtgBhGghQiOhCg0hjIjUg9QhdAIlBhsQAoh6BNhxQDoBYB1B1IDnBPQA0BiCsA2QCrA2CmhgQAFAHABAGQARAnglAZQgkAYgzAOIgDAAIgHACQguAPg2APIgBABIgBAAQgWAFgVAAIAAAAIgBAAQgbAAgagJIgBgBIhLgbIBLAbIABABQAaAJAbAAIABAAIAAAAQAVAAAWgFIABAAIABgBQA2gPAugPIAHgCIADAAQAigGASAVQAIAKABANQhTAwiAAAIgIAAg");
	this.shape_42.setTransform(56.3,22.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7E2326").s().p("ADqEHQisg2g0hiIjnhQQh1hzjohZQAmg3Aug1QBzA3BSAwQBSAwAhApIDqBrQArggBZgDQA0AIAggPQAggQAcgRQAZgVASgIQATgJAUALIAGAEQAOASgBAlQgCAigTAcQgVAbgcAeQgbAfhBACQhBACApBRQgIAGBqAXQAZgBBKgaQBLgaAQAFQAPADAKAPIAHAMQhqA9hsAAQg+AAg9gTg");
	this.shape_43.setTransform(61.6,9.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABtD9IGIDHIjAGzQg3gMg0gNQgVgGgUgFQhEgTg9gUQnCiFgqjTQgqjSACjEQAAgVAAgTQACicABgQQACgVADgXQADgjAFgkQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIiYhJ");
	this.shape_44.setTransform(-26.7,-56.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#585858").s().p("AjzA4QgqjSACjDIABgpIAtgJQAnCXAiBqQAzCfANAPQANAPgFgBQgGgCBbAtQBbAtDIBUIgiC2QnDiFgqjTg");
	this.shape_45.setTransform(-48.4,-14.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#424242").s().p("AEEHNQhEgSg9gUIAii1QjHhVhcgtQhbgsAGABQAFABgNgPQgOgPgyifQgihqgniXQAggHAggIQBvgfBlgxQgJDMgjDNQDpBlD4BLQgTAsgOAwQgdBlAGClIgpgLg");
	this.shape_46.setTransform(-36.5,-17.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("ADKNeQgFimAdhlQANgwAUgsQj4hLjphmQAijMAKjMQhmAxhvAfQggAIggAHIgtAJQACicABgQIAEgsIAJhHQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIGIDHIjAGzQg4gMgzgNgABtD9IiYhJg");
	this.shape_47.setTransform(-26.7,-56.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ajgg8IAAgCQASgXATgVQCtBEBTAqQBVAsBHA7QjmhnjbhAg");
	this.shape_48.setTransform(18.2,-12.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGGGgQgDAcgIA2QgDARgDATQgBAFgBAGQgEATgHAZQhAAbgcgPQgdgOgJgsQgCgVACgtQADgsAHgWQAIgWAAgeQAAgegGgKQgFgLgOgLQgGgFgSgLQhBgnghgTQgygdgYgXQgkgjgHgxIkWhRQg9AGhtgUQhwgXiUgoQAAgUABgTQABgbAEgaQABgaAFgYQAWiLA/h1QAnhIA3hBQEnB8A+ApQA7AoAHAHIJ4FOQAwAjApAoQAdAbAWAjQAJAPAKAXQALAYAGAuQAHAvAFAmQAGAiAGAgQAAAEABADQACAMAAAJQABARgHAFQAFATgOALQgNAKgYAGQgYAGgtgdQgngrgHiuIhqhdIgBgBQAAABAAABQA9BZAIA+QAIA+ACAqQABAQAFAdQACAPAEASQAFAeAJAmQADASAFASQABAfgtAQQgtAPgfgNQgegNgIgVQgHgSgCgeQAAgDgBgEQgCgjgBgTQgCgUgBgHgAGwBHQACAEACADQAIAKAHAKAE3B9QBUCggCA1QgBA0gBAMQAAAGgBAI");
	this.shape_49.setTransform(51.9,35.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E2326").s().p("AEMGVQgdgOgJgsQgCgVACgtQADgtAHgWQAIgVAAgeQAAgegGgKQgFgLgOgLIgYgQIhig6QgygcgYgXQgkgjgHgxIkWhRQg9AGhtgVQhwgXiUgoQAAgUABgTQABgbAEgaQABgaAFgYQEVBkDBgBID3BiQAxBQAYAcQAoAxAlAiQBGA9BGAbIACAOQAFAhgBA0IgCBWQAAAQgDA1QAWAkA1gJQgEAUgHAZQgpARgbAAQgOAAgKgFgAG8GGQgegNgIgVQgHgSgCgfIgBgGIgDg2QgCgUgBgHIABgOIAChBQACg0hUifIAAgBQAEgIATAKIAAAAQARAKAcAqQAcAqAaBRQAZBQAKB8QAMAEANABQAaABAkgLIABAAIAIAkQABAfgtAQQgZAIgUAAQgRAAgOgGgAJcDVQgngsgHisIhqhdIgBgBIgPgUIgEgHIgDgIQgNgUgFgLQgDgIgEgOQAIADAwAdQAwAeAkAaQAjAbA2DXQAMAIAOAFQAfALAfgBIAEAAQABARgHAFQAFATgOAKQgNALgYAGIgJABQgXAAglgYg");
	this.shape_50.setTransform(51.9,55.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A92F33").s().p("AEiHfQADg0AAgRIAChWQABg0gFghIgCgOQhGgbhGg+QglgigogxQgYgcgwhPIj4hiQjBABkVhkQAWiLA/h1QElCCB5BzQBpBAByAoIApBDQALATA+BSQA9BRBqBLIAEAEQAbAfAQA/QAPA4ALBQQAEAaADAKQAEAOAIAKIgGAkIgCALIgSABQgnAAgSgdgAHnHZQgNgBgMgEQgKh8gZhQQgahRgcgqQgcgrgRgJQAVAEATAKQAfARARAdQAKAPAIAXIAPAqQAWBGArBCQALARALANIAOBEIgBABQggAJgYAAIgGAAgAKNE8QgOgFgMgHQg2jZgjgaQgkgbgwgdQgwgdgIgDIgBgEIABAAQgVgeAiAMQAiAMA+AjQA+AiAVAXQAWAYAKBNQALBOAaAjQAbAiALgFQAKgGAJAGIABAHQACAMAAAJIgEAAIgFAAQgdAAgcgKg");
	this.shape_51.setTransform(52.5,39.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC3D42").s().p("AFAIRQgDgKgEgaQgLhQgPg5QgQg/gbgeIgEgEQhqhMg9hRQg9hTgMgSIgphDQhygohphAQh5hzkliCQAnhIA3hAQEnB7A+ApQA7ApAHAHIJ4FNQAwAiApApQAdAcAWAjQAJAOAKAYQALAXAGAvIAMBUIAMBDQgJgGgKAFQgLAGgbgjQgagigLhOQgKhOgWgXQgVgYg+gjQg+gjgigLQgigMAVAeIgBAAIABADQAEAPADAHQAFAMANAUIADAIIAEAHIAPAUIABABQA8BZAIA+QAIA/ACApQABAQAFAeIAGAgQgLgNgLgQQgrhCgWhHIgPgpQgIgYgKgPQgRgcgfgRQgTgLgUgEIgBAAQgTgKgDAIIgBAAQBUCggCA1IgCBAIgBAPIgLBRQgHgJgFgOg");
	this.shape_52.setTransform(56.6,30.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABtELIGIDHIi2GYIh/gPQg+gMgjgFQgigEgdgMQnCiFgqjTQgqjTACjDQAAgVAAgUQACibABgQQACgWADgWQADgjAFgkQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIiYhJ");
	this.shape_53.setTransform(-26.7,-57.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#424242").s().p("ADCHAQgigFgdgMQgcgoAciRIkBh9QhbgtAGABQAFABgNgOQgOgPgyigQgihqgniWQAggHAggJQBvgeBlgyQgJDNgjDMQDpBlD4BLQgTAtgOAvQgdBlgECVQg/gLgigFg");
	this.shape_54.setTransform(-36.5,-18);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#585858").s().p("AjiA4QgqjSACjDIABgpIAtgJQAnCXAiBqQAzCfANAPQANAPgFgBQgGgCBaAtIECB9QgcCSAcAoQnDiFgqjTg");
	this.shape_55.setTransform(-50.1,-14.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("ADANbQAFiVAdhlQANgwAUgsQj4hLjphmQAijNAKjLQhmAxhvAeQggAIggAHIgtAJQACibABgQIAEgsIAJhHQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIGIDHIi2GYgABtELIiYhJg");
	this.shape_56.setTransform(-26.7,-57.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1,3,true).p("AD6jCQAIgSABgKQABgRgbgYQgMgJgPgLQgNgJgRgKQhUgzgeAfQghAhgQATQgPgVgRgLQgOgKgPgEQgOgDgNACQgwAHgZA0QgZA0goAoQgoAngUAsQgFALgEALIAAAAAkag9QgLAiADAjAANkOQgTAbgRAaQgFAIgFAIQgBAiAIAJQAHAIALAKQACABABACQACgCADgCIAegZQAGgDAfgUQgBgLgCgKQgCgMgEgJABCBXQAVgGAVgeIAAgBQALgRALgbQAbgoAphAQAohAAMggQAOADALAfQADAIADAMQABADAAADQAFARACAPQAEAYgBARQgCAPgNAeQAEAJADAPQABAGABAPQAAAYgBAwQgBALAAAKQgDA1gIAhQgBAFgCAGQgMAnhpAxQhjAtj9gbAEVgQQgMAWgTAhQgqBJgCAJQgcAwgjAP");
	this.shape_57.setTransform(68.4,-27.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7E2326").s().p("AjlE1IgKgQIgXgmIALgCQA9AMAxAGQBaALBLgIQBXgIBJglIAigTIAagSIgDALQgMAnhpAxQg/Ach7AAQhIAAhfgKgAAwDDIgCAAQAFgEAIgEIAGgDIAXgLQANgGALgJQAMgKAKgPQAOgXADgZQAVgbATgdQAshFAZhOQADAYgBARQgBAPgOAeQAFAJADAQIABAUQgWArgdAnQgFARgJAPQgHAMgJALQgNAOgSAMQgiAVgoAAQgKAAgMgCgADZAXQgrBJgBAJQgdAwgiAPQAigPAdgwQABgJArhJQATggALgXQgLAXgTAggAgLA+IgDgCIAJgDQAzgUARgbQAPgZAJgcQBwiaAEhSQAbAYgBARQgBAKgHASQgMAggpBAIhDBpQgLAagMARIAAAAIAAABQgUAegVAGQAVgGAUgeIAAgBQAMgRALgaIBDhpQAphAAMggQANADALAfQgiA9gUAgQgfAwggAlQgJAWgNAVIANgRIgNARIgHAKIgDABQgUAJgTADIgUADIgDAAQgZAAgUgJgAhUigQgJgYgEgHQgGgJABgFQAAgEAEgEQAdgxAVg4QARALAQAVQgUAbgRAaIAHAfIACACIADAAIAvgPIAcgLIADAVIglAXIgeAZIgFAEIgDgDQgMgKgHgIQgGgIAAgZIAAgKIAKgQIgKAQIAAAKQAAAZAGAIQAHAIAMAKIADADIAFgEIAegZQgQAZg1AZQgJgJgHgTg");
	this.shape_58.setTransform(71.3,-26);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A92F33").s().p("Ah+ErQgwgGg+gNIgKADQgRgdgLgaIAqgKQAuAVAhAJQAhAJAzAHQA0AGAfABQAhAAAmgDQAngEgEgBQBRgRgLhEQAJgLAHgMQAJgPAGgSQAdgmAVgsQABAYgCAxIAAAVQgDA0gIAhIgZASIgjATQhIAmhYAIQgfADghAAQgwAAg1gGgADTDeIABAAIAEgFIgFAFgABqC+QAMgHARgYQAPgZgngyIADgBIAIgKIAMgRIgNAQQANgUAKgXQAfgkAfgxQAUgfAig+IAHAUIABAGIAHAhQgYBOgtBFQgTAdgUAaQgEAagOAWQgKAPgMALQgLAJgMAGIgYAKIgGADQATgQANgIgAAiA1QAVgiALgyQA6hFAnhRQAZg0ADgnIAbAVQgEBShwCZQgJAcgPAaQgRAbg0ATQANgNAMgSgABdA+IAAAAIAAAAgAghhJIhCgaQgPgagFgSQgJgYgBgWQApg1Aag+QAPADAOAKQgVA4gdAxQgEAEAAAFQgBAEAGAKQAEAHAJAXQAHAUAJAIQA1gYAQgaIAlgXIgDgUIARgJQgMA+gdAeQgeAdgdANg");
	this.shape_59.setTransform(69.8,-28.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#DC3D42").s().p("AA+EpQgggBgzgGQgzgGghgJQghgJgugVIgqAKQgOgfgIgcQgfhuAehqIABgDIAAAAQAEgLAFgLQAUgsAognQAogoAZg0QAZg0AwgHQANgCAOADQgaA+gpA1QABAWAJAYQAGASAPAbIBAAZIABABQAdgNAegeQAegeALg+IgRAJQgCgMgEgJQAEAJACAMIgbALIgwAPIgEAAIgBgCIgIgfQARgaAUgbQAQgTAhghQAegfBUAzIAeATQgDAngZA0QgoBRg5BEQgMAygVAjQgMARgNAOIgJADIAEACQAWAJAaAAIAUgDQAUgDAUgJQAnAzgQAYQgRAYgMAIQgNAHgTARQgIAEgFAEIADAAQAzAIAtgbQARgMANgOQALBFhQAQQADACgnADQghADgeAAIgIAAgAkAAuIgBgOQAAgdAJgaQgJAaAAAdIABAOgAEJD0IgFAEIgBAAIAGgEgABiisIAAAAg");
	this.shape_60.setTransform(65,-31.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhiACQhVADgJAHIAmgtQBUgBBOAKQBPAKBqAwQjFgjheADg");
	this.shape_61.setTransform(-9.8,-39.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGCkDQgpAAhAgCQgGAAgGAAQhhgEiEgPQhtgph3gMQhMgIhLAEQgTATgQAUQgCADgCADQgqA2gUBDQgcBcAABhQAABkA0BWQAEAFADAGQAyBMBPAnQAJAFAKAEQCFgCDahpQB/gVCGgpQA7gTA7gW");
	this.shape_62.setTransform(7.4,-9.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7E2326").s().p("AkYEzQhPgngyhMIgHgLQg0hWAAhjQAAhiAchcQAUhDAqg2QgTAxgLAzQgSBXAKBTQAKBVAoBNQAUAoAaAhQA5gFBCgNICtgnQBbgVBCgHIAOgCIAEAAQBdgJBegSQAxgKAxgMQAPAaASAaQg7AWg7ATQiGAph/AVQjaBpiFACIgTgJg");
	this.shape_63.setTransform(7.4,-6.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A92F33").s().p("Al2C3QgohNgKhWQgKhSAShXQALgzATgxIAEgGQgPBdANBiQAQB2A3BlQCxgLCjgcQCSgHCRgbQAqgHApgKQAMAcAPAbQgxAMgxAKQheAShdAJIgEAAIgOACQhCAHhbAVIitAnQhCANg5AFQgaghgUgog");
	this.shape_64.setTransform(8.2,-13.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC3D42").s().p("AmFAFQgOhgAQhdQAQgVATgSQBLgFBMAIQB3ANBtAoQCEAQBhADIAMABQBAACApAAQgNAugBAxQgBAiAFAdQAIA/AZA8QgpAJgqAIQiSAbiRAGQijAcixAMQg3hmgQh3g");
	this.shape_65.setTransform(8.7,-20.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADVETQAmADA/AfIhKJUQg0AEg3AAQggAAgiAAQgRAAgRAAQgHAAgIAAQgNAAgOgBQg4gDhagOQg1gLgfAHQgeAHgng2Qgng1gIgiQgHgigLi/QgHiIAgkMQADgdAEggQgCgFALhKQgviZAvirQAvirA3h5QAohXAthNQBEgnBNgcQBxgnB2gGQBdBQAzBSQguFEhkExQAAABAAAAQgKA0AAAcQABAbADBuQADBUgNBagAhnFmQAMgCAQgIQAUgJAZgPQAwgeAXgIIAAAAQAYgIAfgDQAQgBApAAQAgABAcAA");
	this.shape_66.setTransform(-40.4,-69.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#585858").s().p("AAiGbQg0gLgfAHQgeAHgng2Qgmg2gIgiQgIgigLi/QgHiGAgkMIAEAAQBNAAA+gIQB0gQBUgwIgOBVQhXBXg+BsQgUAkgHAZQgIAXgCAVQBUgTAEgFQgxDsAsBwQAsBwBFAiQg5gEhagNg");
	this.shape_67.setTransform(-59.4,-21.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#424242").s().p("ACBHiIgbgBQhEgigshwQgshvAxjsQgEAFhUARQABgUAIgXQAJgYATglQA9hrBXhXIAOhVQhUAwhzAPQg/AJhNAAIgEAAIAIg9QAnAEBegRQBegRBfgfQBggeAxgdQgsB+gaCDQgtAjgmAtQgbAggWAkQgQAHgNADQANgDAQgHIgIAMQATgIAkgFQhMDVAtClQAsCmAxAQIgIABIgIgBgAAkhNIAAAAg");
	this.shape_68.setTransform(-51.6,-27.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AAYOMIAiAAQgJADgIAAQgJAAgIgDgAA6OMIgiAAQgwgQgsimQgtimBMjWQgkAFgSAIIAHgMQAWgjAbghQAlgtAtgjQAaiDAsh8QgxAchfAeQhgAeheARQheARgngEQgCgFALhKQgviZAvirQAvirA3h5QAohYAthMQBEgoBNgbQBxgnB2gHQBdBRAzBSQguFDhkEyIgBABQgKA0ABAbIAECJQACBVgNBaQAmADA/AfIhJJUQg0AEg4AAIggAAIghAAgABXESQggADgXAHIgBABQgXAIgwAeQgYAPgUAJQAUgJAYgPQAwgeAXgIIABgBQAXgHAggDIA5gBIA7ABIg7gBIg5ABgAAYOMIAAAAg");
	this.shape_69.setTransform(-39.5,-69.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABxEPQAkAOAyAwIj1IkQgzgMg1gQQgfgKgggKQgPgFgRgFQgHgCgIgDQgMgDgOgGQg1gThSgoQgvgagfgDQgfgCgWg/QgVg/ADgiQACgjAvi6QAhiDBuj2QAMgbANgdQAAgFAghFQABigBfiVQBgiWBZhjQA+hHBCg8QBNgSBRgDQB5gEBzAdQBBBoAYBeQiLEni6EGQgBAAAAABQgZAvgHAbQgIAZgeBrQgXBQgnBTgAjVEBQANAAARgBQAVgEAdgHQA3gOAZgBIAAAAQAZAAAeAGQAPAEAoAMQAeAKAaAJ");
	this.shape_70.setTransform(-46.1,-73);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#585858").s().p("Ah4FtQgvgagggCQgfgDgVg/QgVg/ACgiQADgjAvi5QAhiDBuj3IADACQBKAWA9ALQB0AUBegVIgmBMQhtA5hbBVQgeAdgOAWQgOASgIAVQBVAGAFgCQh0DRAKB4QAJB4A2A1Qg0gThSgog");
	this.shape_71.setTransform(-76.1,-34.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#424242").s().p("AiHHHIgagJQg3g1gJh4QgJh4B1jSQgGADhVgHQAHgUAOgTQAPgVAegdQBbhVBsg5IAnhNQhfAVhzgUQg+gKhKgXIgDgBIAZg4QAlAPBeAMQBgALBjAAQBkgBA4gMQhQBqg/B2Qg1AUgyAgQgjAXgfAbIgYABIgHAAIAHAAIAYgBQgGAEgFAFQAVgDAjAHQiHC0gHCsQgHCsAqAdIgPgEgAg6hrIAAAAg");
	this.shape_72.setTransform(-58.5,-36.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AkDNVIg+gUIgggKQgrgeAIirQAGisCIi1QgkgHgUADQAFgFAGgEQAfgcAkgXQAxggA2gUQA/h1BPhqQg3AMhkACQhlAAhfgMQhfgLgkgQQgBgFAhhFQAAigBgiVQBgiWBZhjQA+hHBDg8QBLgSBSgDQB5gEByAdQBBBoAZBeQiMEni6EGIgBABQgZAvgHAbIglCEQgXBQgoBTQAkAOAyAwIj1IkQgzgMg1gQgAhqDsIA3AQIA3ATIg3gTIg3gQIgBAAIgCgBIgBAAIAAAAIAAAAIgDAAIgCgBIgBAAQgWgEgUAAIAAAAIAAAAIgCAAIgBAAIgBAAQgYABg4AOQgcAHgVAEQAVgEAcgHQA4gOAYgBIABAAIABAAIACAAIAAAAIAAAAQAUAAAWAEIABAAIACABIADAAIAAAAIAAAAIABAAIACABIABAAgAlhM3IAgAKQgSAAgOgKgAlhM3IAAAAg");
	this.shape_73.setTransform(-35.2,-73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).to({state:[]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-146,152,292);


(lib.Symbol12_p10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F526B").s().p("AKUI8IAAgDIAAgDIAAgDIAAgEIgBgDIAAgDIgBgDIgBgDIAAgDIAAgEQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgDIAAgEIAAgDIAAgDIgBgEIAAgDIgBgEIAAgDIABgCIgBgEIAAgEIAAgDIgBgDIABgEIAAgDIAAgDIgBgDIgBgDIABgFIgBgCIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIgBgDQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAAgFIAAgDIgBgDIAAgDIAAgDIgBgEIAAgDIAAgDIAAgEIAAgDIAAgDIgBgEIAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgEIAAgDIgBgDIAAgEIAAgDIAAgDIAAgDIAAgEIAAgDQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBIgBgEIAAgDIgBgDIAAgEIABgDIgBgDIAAgEIgBgDIAAgDIAAgEIAAgDIAAgDIAAgDIgBgEIAAgDIAAgEIgBgDIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIgBgDIAAgEIABgEIgBgCIgBgEIAAgDIgBgEIABgDIgBgDIAAgDIAAgEIAAgDIAAgDIAAgEIgBgDIAAgEIAAgCIAAgEIAAgEQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAAgDIAAgEIAAgCIAAgEIAAgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAIAAgEIAAgDIAAgDIAAgEIgBgDIAAgDQAAAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBIgBgDIAAgEIAAgDIAAgDIAAgEIAAgCIAAgEIgBgDIgBgDIABgEIAAgDIAAgDIgBgEIAAgDIAAgDIAAgEIAAgEIAAgDIgBgDIABgDIgBgEIgBgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIgBgEIgBgDIABgDIAAgDIgBgEIAAgDIgBgDIABgDIgBgEIAAgDIAAgEIAAgCIAAgEIAAgEIgBgDIAAgDIgBgEIABgDIAAgDIgBgDIAAgDIAAgEIAAgEIAAgBIAAgEIgBgDIAAgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIgBgDIAAgEIAAgDIAAgDIAAgEIgBgDIAAgDIAAgDIAAgDIAAgFIAAgDIAAgDIgBgEIgBgDIABgDIgBgDIAAgEIAAgEIAAgCIAAgDIAAgFIgBgDIAAgDIAAgDIABgDIgBgEIgBgDIAAgDIgBgEIAAgEIAAgCIAAgDIAAgEIAAgDIAAgDIAAgDIgBgEIAAgEIAAgDIAAgDIAAgEIgBgDIAAgDIAAgDIAAgEIAAgDIAAgDIgBgDIAAgEIgBgDIAAgEIAAgDIAAgDIAAgEIgBgDQAAAAABgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIAAgEIAAgEIAAgDIAAgDIAAgEIAAgDIgBgCIgBgEIAAgEIABgDIgBgDIAAgCIAAgBIAAgDQAFABAGgBIAGgCIACAAIAFAAIADgCIAAgFIgBAAIABgBIAAgBIAGAAIAJgBIAJAAIATgCIAmgFIA+gJIAcgFIAAADIAAADIABAEIAAADIAAACIAAADIAAADIAAAEIAAACIABADIAAAEIgBADIABACIABAEIAAADIAAADIAAADIAAAEIAAACIAAAEIABADIAAADIAAADIAAADIAAADIABADIAAAEIAAACIAAAEIAAACIABADIAAADIAAAEIAAADIAAADIAAADIAAADIAAADIABACQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABIAAADIAAADIABACIAAADQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIAAADIABADIAAAEIAAADIAAADIAAACIAAAEIABADIAAADIABADIgBADIAAADIAAACIABAEIAAADIAAAEIAAACIAAADIAAAEIAAACIABADIgBADIABAEIABADIAAADIABADIAAAEIgBACIABAEIAAADIAAADIABADIgBADIAAADIAAADIAAADIABADIAAADIAAADIABADIAAADIAAAEIAAACIAAADIAAAEIAAABIABAEIABADIAAADIgBADIABADIAAACIABAEIAAADIgBADIABADIAAADIAAADIAAADIAAAEIAAADIAAACIABAEIAAADIAAADQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAIABAFIAAACIAAADIAAADIABADQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIAAADIABACIAAAFIAAACIAAAEIAAADIABAEIAAADIAAACIABADQgBABAAAAQAAAAAAABQAAAAAAABQAAABABAAIAAACIAAADIAAAEIAAADIAAADIAAACIABADIABAEIAAADIAAADIgBADIABADIAAADIAAADIAAADIAAAEIAAACIABADIAAADIAAADIABAEIgBACIABAEIAAADIABADIAAACIgBAEIABADIAAADIAAADIABADIAAADIgBADIAAAEIAAACIABAEIABADIgBADIABACIAAAEIAAACIAAAEIAAADIAAADIABAEIAAADIABADIAAADIgBADIABADIAAACIABAEIAAAEIAAACIAAADIAAADIAAADIAAADIAAADIAAAEIAAADIABADQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAABAAIAAAEIAAADQgBAAAAABQAAAAAAAAQAAAAAAABQAAAAABABIAAADIAAAEIAAACIABADIgBADIAAADIABADIABADIAAADIAAAEIgBACIABADIAAADIAAAEIAAADIAAADIAAADIABADIAAACIABAEIABADIgBAEIABACIAAADIAAADIAAADIAAAEIAAACIAAAEIAAADIABAEIAAACIAAAEIAAADIAAADIABACIAAADIAAADIAAAEIAAAEQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABIABADIAAADIAAADIABADIAAAEIAAABIABAEIAAADIAAADIAAACIgBAAIAAgFIgKAFIgEABIAAACIghATQgrAYgYALQgYAMgkAUIgUAKgAm6DdIAAgCIAAgBIAAgBIABgBIAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIAAAAIAAgCIAAgBIgBgBIABgBIAAgBIAAgCIAAAAIAAgDIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIgBgBIABgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIABgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIgBgBIAAgBIAAgCIABgBIAAgBIgBgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgDIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIABgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIABgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgCIAAgBIABgBIAAgBIAAgBIgBgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIACAAIAUgFIAZgGIAAABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIAAACIAAABIAAABIAAABIAAACIgBAAIAAACIABABIAAACIAAAAIAAACIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIAAABIAAABIABABIgBACIAAACIAAACIABAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIgBACIAAAAIAAACIABABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAACIgBAAIAAACIAAAAIAAACIAAABIAAACIAAABIABABIAAABIAAABIAAACIABAAIAAACIAAABIgBABIAAABIABACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIABABIAAABIAAADIABABIAAABIAAABIAAACIAAAAIgBACIAAACIAAACIAAABIABABIAAABIAAABIAAABIABABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABABIAAABIABABIAAACIgBAAIAAACIAAABIAAABIAAABIAAACIAAABIABABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAAAIAAACIAAABIgBACIAAAAIABACIAAABIAAABIAAACIAAAAIABACIAAACIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIgXABIAAABIgJAAIgEAAIgBABIgCABIgGAAIgBABgArzDbIAAgBIAAgFIgBgBIABgDIAAgBIAAgBIgBgBIAAgEIAAgBIAAgDIgBgBIAAgBIgBgBIACgBIAAgBIACAAIAEABIAGAAIADgBIAJgBIAAACIABAAIAAABIgBABIAAABIAAABIAAACIAAAAIAAAFIABAAIAAADIgBAAIAAACIABAAIAAACIgBAEIAAACIgKAAIgJABIgEACgAidDQIAAgCIAAgBIACgBIgBgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgDIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIABgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIgBgBIABgBIAAgCIAAAAIgBgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIABgCIAAAAIAAgCIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIABgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIABgBIgBgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgCIgBAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIgBgCIABAAIAAgCIAAgBIAAAAIAAgBIAAgBIAAgEIgBgBIAAgDQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBAAAAgBIgBgCIAAgFIgDgKIADgBQAFAAAEgCIAIgBIAPgGIAggKQAMgEALgDIAAABIABACIgBABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIABABIAAABIAAACIAAABIABABIAAAAIAAABIAAACIAAAAIAAADIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABACIgBAAIAAACIAAAAIABACIAAABIAAABIAAACIAAAAIABACIAAABIAAACIAAAAIAAACIAAABIAAABIgBABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIABACIAAABIAAABIgBABIAAACIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIABABIAAACIAAACIgBABIABABIAAABIAAABIAAABIAAABIABACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIABACIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIABACIAAAAIAAACIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIABABIAAABIAAACIAAAAIAAACIABABIAAABIgBABIAAACIABABIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIABACIAAAAIAAACIAAABIAAACIAAAAIAAACIABABIAAAAIAAACIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIgBACIgBABIAAABIAAABIAAACIABAAIAAACIgCABIAAABIABABIAAABIAAABIgBAAIgCAAIgCAAIgCgCQgeADgeACIAAABIgOAAIgDAAIAAABgAleDLIAAgFIgBgBIAAAAIABgFIgBAAIAAgGIAEAAIAMgBIABAAIABABIAAACIgBAAIAAADIABABIAAACIgBABIAAAHIABAAIgMABIgFABIAAgBgADBDDIAAgBIAAgBIABgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgCIABAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAAAIgBgCIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIgBgCIAAgBIABgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIgBgCIAAgBIAAgBIAAgCIgBgBIAAgBIAAgCIABgCIAAgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIgBgBIABgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIABAAIAAgBIgBAAIAAgDIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIABgCIgBAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgCIAAAAIgBgCIAAAAIAAgCIAAgBIAAgBIAAgCIgBgBIgBgBIAAgDIAAgBIABgCIAAAAIAAgCIAAAAIgBgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIgBgBIAAgCIAAAAIAAgCIAAAAIACAAIABADIABABIACABIACAAIACgCIgBgDIgBgCIgDgGIgBgDIgCgEIADgBIAHgBIAIgCIAIgCIAUgFQAHgCAKgBIgBABIAAABIABABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIABABIAAACIAAAAIAAACIAAABIABABIAAABIAAABIAAACIgBABIAAABIAAABIAAACIAAAAIABACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIABABIgBACIAAAAIAAACIAAAAIAAACIAAABIAAABIAAACIABABIAAABIAAABIAAABIAAABIABACIgBABIAAABIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAADIAAABIAAABIAAABIAAACIAAAAIAAACIAAAAIAAACIABABIAAABIAAACIAAAAIABACIAAABIAAABIgBABIAAABIAAACIAAABIAAABIAAABIABACIAAAAIAAACIAAABIAAABIABAAIAAABIAAACIgBAAIABACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIABABIAAABIAAACIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIABACIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAACIABACIgBABIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAACIAAAAIAAADIAAAAIAAACIABAAIAAACIgBABIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIAAABIABABIAAABIAAACIgBABIABABIAAABIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAABIAAACIABAAIAAACIAAABIAAABIAAABIAAADIAAABIAAACIAAAAIAAACIABAAIAAACIAAABIAAABIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIABABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAAAIABADIABAAIAAABIACABIAAABIgCACIAAAAIAAACIAAABIAAABIACABIABAAIAAACIAAABIAAABIAAABIAAABIAAABIABABIAAABIgBACIABABIg8AEIgHABIgCAAgAlkCIIAAgDIgBAAIAAgFIAAAAIAAgFIAAAAIAAgGIgBAAIgBgBIACAAIABABIAPgBIAAACIABABIAAACIAAABIAAABIAAAEIAAAAIAAAEIAAABIAAABIgJABIAAABIgCAAIgBAAIgCABIgBAAgAtSBvIABgCIAAAAIAAgCIABAAIAAgDIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIgBgCIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIgBgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIgBgBIAAgBIABgBIAAgBIAAgCIgBgBIAAgBIAAgCIAAAAIAAgCIgBAAIAAgCIADgBIAFAAIAFgBQAFAAAEgCQAEAAAEgBQALgBAJgDQAHAAAIgDIAAACIAAABIAAABIABABIAAABIAAABIAAABIgBACIABABIAAABIAAACIAAAAIAAACIABABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABABIAAABIAAABIAAABIABACIgBAAIAAACIAAABIAAABIAAABIAAADIAAABIABABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAIAAAGQgMACgOAAIgnADIgBgBgAojBnIgBgBIAAgDIgBAAIAAgHIgBgBIAAgEIgBgBIABgBIAAgCIgBgBIgBgBIAAgDIACAAIABABIAKgCIAJAAIAAABIAAACIAAAAIAAABIAAADIAAABIAAAAIAAAFIAAABIAAABIAAADIAAABIAAAAIAAABIAAAEIABABIAAABIgBAAIgBAAIgBABIgKABIgGABgAlnBRIAAgBIgBAAIAAgCIABgDIgBgBIAAgEIgBAAIAAgEIADABIADgBIAGAAIAKgBIAAAIIABAAIgBAFIABAAIAAABIgJABIgHAAIgDAAIgCABgAtVAoIAAgBIABgBIAAgBIgBgBIgCgBIAAAAQARgFAhgGIARgEIAAABIAAABIAAABIAAABIgSAFIgTAEIgIACIgIADIgHABIgFACgAnIAUQgBAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIgBAAIAAABIgBgBIgBgBIgBgBIgBgBIAAgBIgDgBIgDgCIgDgDIgDgBIgjgTIgPgIIgJgFIAAgBIAJgCQAFAAAEgCIATgEIAlgKIA9gSIAcgIQADgCADAAIADAEIAIAJIgtA8IAAAAIgEAFIgeAJIgTAGIgDABIgBgCgAixgBIAAAAIAAAAIAAABIAAAAIgBAAIgCgCIAAgBIgBgCIgBAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgGgGIg9g8IgLgKIgHgHIgIgHIgIgIIgGgFIgCgCIgBgBIgCgBIgDgCIAAAAIABgBIAGgBIAIgBIAKgCIATgCIAlgIIA+gOIAegFIAIgDIACAAIgBgFQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQACAFADADIAKAMIAHAKQAIAJAHALIgFANIAAAAIgFAOIgCAFIAAABIAAACIABAAIAAADIAAACIAAAAIABAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIABABIAAABIAAABIAAABIAAABIgBACIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABABIAAACIAAAAIgbAIIggALIgQAHQgEAAgCACIgIACIgBAAIgCgBgAr2gTQAEAAAEgCQALgCAJgCIAkgKIA9gRIANgEIAAACIAAAAIAAACIAAAAIgBACIAAABIAAABIABACIAAAAIAAACIAAAAIABACIAAABIAAACIAAABIAAABIABABIgCABIgBABIAAABIAAACIAAABIAAACQgBAAAAAAQAAABgBAAQAAAAgBABQAAAAAAABIgCAAIgNAAIgCAAIgBAAIgBAAIgEgBIgDABIhoAHIgKABIAGgCgAobgdIAAgBIABgBIAAgCIAAAAIAAgDIAAAAIgBgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIgBgBIABgCIAAAAIAAgCIAAgBIgBgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABAAIADgBIABgBIAAgBIACAAIAAABIAEgBIACAAIAHgCIAIgCIATgEIAlgKIA6gRIAGAJQADAFAFAFIASAWIgCgBIABABIgBAAIggAIIg9ASIglALIgSAFIgIADIgJADIgEACgABSgsIAAgCIAAgDIgBAAIABgFIgBAAIAAgGIAHAFIAWAMQgJACgJAAIgHAAIgDABgAoShaIAAgBIAAgFIgBAAIABgCIAAgDIgBgBIAAgEIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIgBgBIAAAAIABAAQAAgBAAAAQABgBAAAAQAAgBgBAAQAAAAAAgBIADgBQADABACgBIAGgCIAIgBQAFAAAEgCIASgFIAlgJIAsgLIgBAKIgBABIAAAEIABABIAAABIABABIAAAEIg7AQIglAKIgSAGIgIADIgGACgAmbiGIAAAAIgBAAgACqhuIhPiIIAAgCIAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAgBIgCgCIAAgCIgBgCIAAAAIgFgIQgFgHgEgJIgJgOQAKAFALADIADgFIgTgGIgKgDQgGgNgIgLIgBgCIAAgBIgCgBIgBAAIAAgDIAAAAIgCgCIgDgDIAAgBIACAAIAFgCQADABADgBIAJAAIAJgBIAVgCIAlgFIA9gIIAfgFIAHAAIACADIAEAFQACADAEAEIAEAHIAFAJIgIANIABAAIgHANIgEAEIgCAFIABABIgDgBQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIgBAAIAAABIgDACIgDAAIgCABIgCACQgBABACAEIAHASIACADIAAAGIAAABIACgBIgHAaQgCADACACIgBABIAAABIABABIABABIACABIABAAIAHABIAKgBIAAABIAAACIAAABIgBABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAACIAAAAIAAADIABAAIAAACIAAAAIAAACIgBABIAAABIAAACIAAAAIAAACIABABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABAAIAAACIAAAAIAAACIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAIAAABIAAABIAAABIABABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIABACIAAAAIAAACIAAABIABABIAAABIgBABIAAACIAAACIAAABIAAABIAAACIgSAFIgTAFQgEAAgEADIgIACIgGABIgEADIgEgGgAoUh5IgCAAIgGABIgDAAIgBAAIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIgBgBIABAAIABgBIAAgBIABgBIAAAAIABAAIAJgCIAJgCIATgEIAlgIIA9gQIACAAIAAAIIgBAAIABABIgBABIAAABIABAAIAAADIgsAKIglAKIgTAGIgIACIgIADIgFACIgGABIgBABgAoyiUIADgKIAAgVIALgBIABgBIAAgBIABAAIACgBIAAAAIAHgCQAFAAAFgCIATgEIAlgIIAtgMIAAABIgBARIgBAAIAAAFIABAAIAAACIABAAIAAAGIggAHIgvALIgTAGQgEAAgEABIgIADQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIAAADIgBgBQAAgBAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIgBABIgBABIgHABIgGAAgAogi+QAAAAAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgKgGIgFgCQgFgEgEgBIgBAAIABgBIAJgBIATgEIAlgJIA5gNIABABIACAAIABAAIABACIASAIIACAAIACADIABAAIACAAIgCABIgsAJIgvALIgSAFIgIADIgGABgAJ5kDIgCgEIgDgDIgCgEIgDgCIgCgDIgIgHQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAFABAEgBIAJgBIAUgCIAlgEIA+gIIAfgGIAEAAIADACQgBAAAAAAQAAABAAAAQAAAAAAAAQAAAAABAAIACACIAAABIABABIACAAIAGAJIAHAFIgcADIg+AJIgmAFQgLACgJAAIgIACIgJADIgGAAIgDABIgBgBgAJikgIgBAAIgCAAIABAAIAFgJQADgEADgJIAAgEQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIAFgBIAHAAQAEgBAEABIAJgCIAUgCIAlgEIA+gJIAegFIABAAIgCAGIgEAIIgCAEIgGALIggADIg9AIIgoAGQgKACgJAAIgIADIgJABIgDABgAJhk9IgCAAIgBgCIAAgCQgDgCgBgCIgDgEIgJgLIh6iIIgNgOIgNgNIgYgbIgDgDQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBgBAAAAIgDgCIgDgDIgEgCIgBgDIAHAAIAHAAIANgDIAPAAIACgBIASgBIAlgFIA+gJIAggFIAIgBIABABIAAABIAFAHIAHAIQADAFAGAGIAHALIAVAYQATAWATAXIBCBKQAPASASARIAIAIIggAEIg9AJQgUABgUAEIgTADIgIACIgJABIgFABQgDABgDAAIgGADIAAAAIgCAAg");
	this.shape.setTransform(-24.3,-21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A890A5").s().p("Aq0JeIABgCIAAgBQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAIABgCIAAgBIAAgBIgCgCIAAgBIAAgBIAAgCIAAgBIgBgCIABgBIAAgBIAAAAIAAgDIAAAAIAAgCIAAgBIgBgCIAAgBIAAgBIAAAAIgBgDIAAgBIAAgBIAAgCIABgBIAAAAIAAgCIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgDIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIgBgBIAAAAIABgDIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIABgCIAAgBIgBgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIgCgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIgBgCIAAgBIAAgBIAAgCIgBgBIABgCIAAAAIAAgCIAAgBIgBgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIgBgCIAAAAIAAgCIAAgBIAAgCIAAAAIABgDIAAAAIgBgBIAAgCIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIgBgCIAAgBIAAgBIABgCIgBgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgDIAAAAIgBgCIAAAAIAAgCIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAgCIAAAAIgBgCIABgBIAAgBIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgCIABAAIAAgCIAAgBIgBgBIAAgBIAAgCIAAgBIAAgCIAAAAIgCgBIACAAIAAgBIACgCIABAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAIACgCIAAgBIgCgBIAAAAIgDgCIgCAAIgTAAIgCABIgEgBIgDAAIgCAAIgCAAIAAABIgBgBIgBAAIAAgBQgBgBABAAIAAgDIgBAAIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIgBgBIABgCIAAAAIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIgBAAIAAgBIAAgBIAAgCQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgCgBIAAgCIAAgBIAAgBIAAAAIAAgCIACAAIAAgCIAAgCIgCgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIgBgCIAAgBIABAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIgBAAIAAgCIAAgBIAAgCIAAgBIgBgBIAAgBIABgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIABgCIAAgBIgBgBIAAAAIAAgCIgBgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIABgCIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIgBgCIAAgBIAAgCIAAgBIgBgBIAAAAIAAgCIAAgBIAAgBIgBgBIAAgCIABgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIgBgBIAAgBIAAgCIABgBIgBAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIgCgBIAAAAIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIgBgCIAAgBIACABIABAAIANgBQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBIABABIAAABIAAADIAAAAIAAABIABABIAAABIgBABIAAACIAAABIAAABIAAABIAAABIAAAAIABACIAAABIAAACIAAABIABABIAAABIAAAAIgBACIAAABIABACIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIABADIABAAIAAACIAAABIAAABIAAAAIAAACIABAAIABABIACACIAsgDQALgBANgBIADAAIAAAAIADgBIACAAIABgBIAAgBIAAgBIAAgCIAAAAIABgCIgBgDIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIgCgBIAAgCIABgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIABgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgCIAAAAIAAgCIABAAIAAgBIAAgBIAAgCIAAAAIgBgCIAAAAIAAgBIAAgBIAAgDIgBgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgDIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIgBgCIABgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIgBgBIABgBIAAgBIAAAAIgBgCIgBgBIAAgBIAAgBIABgCIABgBIAAgFIADgCIAMgBIAJAAIBqgHIACAAIADAAIAEAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAKgBIABABIAAAAIACgCIAEgBIABAAIABgBIgBgBIgBgCIACgBIACgBIACgCIAAgBIAAgBIABgBIABAAIAAgBIAAgDIABgBIAAgBIAAgBIgBgBIABgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIABAAIAAgCIgBgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIgBgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIA5gDIAHgBIgBABIAAABIABACIAAABIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIABACIAAAAIAAACIgBABIABACIAAAAIAAABIAAABIAAACIAAABIAAACIAAABIAAABIABAAIAAACIAAAAIAAADIgBABIABACIAAABIgBAAIAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIABABIAAABIAFAAIAAACIAAABIACABIAEAAQAGACAFAFIAOAGIAlAXIABAAIAFABIADABIACABIABABQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIACACIABAAIABAAIABAAIgBACIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAABIAAABIAAACIABABIgBACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIABAAIAAACIgBABIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABABIAAACIAAAAIgBABIAAACIAAABIAAABIAAACIAAABIABABIAAAAIAAACIAAABIAAACIABABIAAABIAAABIAAABIgBABIABABIAAABIAAABIAAACIAAABIAAACIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAADIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAADIAAAAQAAAAAAABQABAAAAAAQAAAAgBABQAAAAAAAAIAAABIAAABIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIACAAIAAACIgCABIAAACIAAABIAAAAIAAACIAAACIACACIAAABIAAABIAAABIAAABIAAABIAAABIAAADIAAAAIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIABACIAAABIgBABIAAABIABACIAAAAIAAACIAAABIAAABIABABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIABABIAAABIAAAAIAAACIAAABIABACIAAAAIABACIABAAIAEAAIAAAAIAAAAIABABIAIAAIABAAIAAABIAFgBQAFABAGgBIAWgBQAEABAEgBIABgBIABgCIABgBIAAgCIgBgBIgCAAIgBgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIABgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIgBgCIABgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgCIAAAAIgBgCIAAAAIABgCIAAgBIAAgDIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgCIAAgBIABgBIAAgBIgBgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIABAAIgBgCIAAAAIAAgBIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgCIAAAAIAAgBIAAgBIAAgDIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIABgCIAAgBIAAgBIgBgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIABgBIAAgCIgBAAIAAgCIAAgBIAAgBIgBgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgCgCIAAgBIAAgCIgBgBIAAgBIAAgBIgBAAIACgBIACgDQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAABgBIAFgGIA7hPIAHgIIAGgIQAFgIAGgIIABgBIAAgBIABgDIABgCIABgBIADgBIAAABIACABIACACIAAACIACABIABACIAKAJIADADQADAGAEACIAHAIIAHAHIBAA+IABAAIAFAFIADACIACADQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABAAIABACIAAABIgBABIgFACIABABIAGAAIABAAIAAABIAAABIACABIAAAAIABABIAAAFIABABIAAABIgBAAIAAADIABAAIAAAKIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAAAIAAACIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIABABIAAABIAAABIAAACIgBACIABABIAAAAIAAABIAAACIABAAIAAACIAAABIAAABIAAACIABABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIABACIAAABIAAABIAAACIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIABABIAAABIgBABIAAACIABABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIABACIAAABIAAABIAAABIAAACIABAAIAAACIAAABIgBABIAAABIAAABIAAACIAAABIAAABIABABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIABACIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIABABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIABACIABABIABABIAAABIAAACIAEAAIAFAAIALAAIA9gEIABAAIAEgBIABAAIAAgCIAGAAIADgCIAAgBIAAgCIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIABgCIAAgBIAAgCIAAAAIAAgBIgBgBIABgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAIABgCIgBgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIgBgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIgBgBIABAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgCIAAAAIgBgCIABAAIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgCgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIgBgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIgBgDIABAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIABAAIAAgCIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgCIAAAAIAAgCIABgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIgBgCIAAAAIAAgCIAAAAIgBgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAAAIAAgCIAAgBIgBgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIgCgBIAAgCIAAgCIAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAIAGgPIBCikIAHgTIAHgQIANghIAAgEIACgCIABgFIABgDIACgDIAAgGIAAABIACAFIADAEIACADIACADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAAABIABACIALATIAHALIAJARIAJAQIALAUIAFAHIBJB8IABAAQADAIAEAFIADAEIABACIgBAAIgBAAIAAABIAAACIAAABIgBABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAADIAAAAIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAACIAAACIABAAIAAABIAAABIAAACIgBABIABACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIABABIgBABIAAABIAAACIAAABIABACIAAAAIAAACIAAAAIABACIAAACIAAAAIAAACIAAABIAAABIgBAAIAAACIAAABIAAACIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABABIgBABIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIABABIAAACIAAABIAAABIABADIAAAAIAAACIgBAAIAAACIABAAIAAACIAAAAIAAADIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIgBABIABABIAAABIAAABIAAABIAAACIABABIAAAAIAAACIAAAAIAAABIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIABABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAACIgBABIAAABIAAABIAAABIABABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIABABIgBABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAACIAAABIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAABIgBABIAAABIABABIAAACIAAABIAAABIAAABIABABIAAACIAAAAIAAACIABABIAAABIAAACIgBABIAAABIAAABIAAABIAAACIABABIAAACIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIABABIAAACIAAABIAAABIAAABIABACIAAABIABACIAAAAIABACIgBAAIABABIAAACIAAABIAAABIAAACIAAABIABAAQAAAEgBAHIADgBIAGABQADgBADABIBFgFIAAAAIAAgLIAAgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIgBgCIABgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIgCgBIAAgCIAAgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgCIgBgBIAAgCIgBgBIAAgBIAAgBIgCAAIAAgCIAAgBIAAgCIgBAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAAAIAAgDIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAAAIgBgBIAAgCIAAgBIABgBIgBgBIAAgBIAAgBIAAgCIAAgCIgBAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgDIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIABgCIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgCIAAAAIgBgCIAAAAIAAgBIAAgBIgBgCIABgBIAAgBIAAgCIAAgBIgBAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIgBgBIABgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIgBgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgCIAAgBIAAgCIgBAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIABgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIABgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIgBgBIABgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIgBgCIAAAAIAAgCIAAAAIAAgBIgBgBIAAgCIAAgCIAAgBIgBgBIAAgBIAAAAIABgCIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBAAIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCQAEgBAFABIBHgFIDsgOQAUgCAUAAIACAAIACgBIAAABIAAACIAAADIABADQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIAAAEIAAADIAAAEIAAADIAAADIAAADIABADIAAADIAAAEIAAADIABAEIAAADIABADIAAAEIgBADIABADIAAAEIABADIAAADIAAAEIAAADIAAAEIAAACIABADIgBAFIABACIAAAEIABADIAAADIgBAEIABAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAAAFIAAADIAAACIAAAFIAAADIAAAEIABACIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIABADIABACIAAAFIAAADIgBACIABAFIAAADIAAADIABADIgBADIAAAEIABADIAAADIABAEIAAADIAAAEIABADIAAACIAAAFIAAACIAAAEIABAEIAAADIAAADIAAADIAAADIAAAEIABADIAAADIAAADIAAAEIAAADIABAFIAAACQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAAADIAAADIABAEIAAADIgBADIABAEIAAACIAAAEIABADIgBADIAAADIABAEIAAADIABAEIgBADIABADIAAAEIAAACIABAEIAAADIAAAEIAAAEIAAACIACAEIgCADIAAADIACADIAAAEIAAADIAAADIAAAEIAAADIABAEIAAADIABACQgBABAAAAQAAABAAAAQAAABAAAAQAAAAABABIAAAEIAAACIAAAEIAAAEIAAADIAAADIABADIABAEIAAADIgBAEIAAADIABAEIAAAEIAAADIAAACIAAAEIAAAEIABACIAAAEIAAADIAAADIAAAEIAAADIABAEIgBADIABADIAAAEIABADIABADIgBADIAAADIAAAEIABAEIABACIgBAEIABAEIAAACIAAAEIAAADIAAAEIAAADIABADIAAAEIAAADIAAADIAAADIABADIAAAEIABADIgBADIAAAEIABADIAAADIAAAEIAAADIAAAEIABADIAAAEIAAADIAAAEIAAADIAAADIABADIAAAEIAAADIAAADIAAAEIABADIAAADIAAAEIAAADIAAADIAAAEIABADIAAADQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABIAAADIABAEIAAACIAAAEIAAADIABAEIAAACIABAEIAAADIgBADIABAEIAAADIAAAEIABADIgBADIAAAEIAAACQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIABADIgBAEIABADIAAAEIAAACIAAAEIAAADIAAADIABAEIAAADIAAAFIgBADIABADIAAAEIAAADIABADIgBADIAAADIABADIAAAEIABAEIAAADIAAADIAAADIACADIAAAEIAAACIABAEIABADIAAAEIAAACIAAAAIgRABIghACIgHAAIgDABIgCABIgCAAIgBAAIg7AFIqrApQlHAUlHAWgAqCCnIADABIALgBIAPgBIAAgBIABgBIAAAAIABAAIAAgEIABgBIABgBIAAgBIgBgBIABgEIAAgCIgBAAIAAgEIgBgBIAAgFIgBAAIAAgDIABgBIgBgBIAAgFIAAgBIAAgBIgBgBIAAAAIgBAAIgBgBIAAAAIgBAAIgBAAIgJABIgFAAIgEABIgHAAIgDAAIgCAAIAAABIAAABIgBABIgBAAIAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIgBABIAAABIgBAAIAAAEIABABIAAABIgBABIABABIAAACIAAABIAAACIABAAIgBAGIABAAIAAADIAAACIAAADIAAABIgBAAIAAABIABABIAAABIAAAAIABABIAEAAQAAAAAAAAQAAABAAAAQABAAAAgBQAAAAABAAgAj2B2IgBABIAAABIgBABIAAACIABAAIgBACIAAADIABAAIAAAEIAAACIABABIgBAEIAAADIAAABIAAABIABABIAAABIAAAAIABAAIAAACIACABIAAABIABABIAAABIAAABIAAABIABAAIACAAIABAAIABAAIAGAAIAPgBIABAAIACgCIAAgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIAAAAIAAgBIAAgCIAAgCIABgFIgBAAIAAgGIAAAAIgBAAIAAgGIAAgCIAAgDQgBABABgBIAAgBIgBAAIAAgCIgBAAIgCgBIgBgBIAAABIgBAAIgBABIAAAAIgBABIgBAAIgBgBQgGABgHAAIgDABIgBAAIAAAAIgBgBIgBAAIgCgBIgBAAIgBAAIgBAAIAAAAIgBAAgAjrBUIALgBIABAAIABAAIABgBIAAgBIABgBIABAAIAAgCIAAAAIABgBIAAgCIAAAAIAAgBIgBgBIABgFIAAgGIgBgBIAAgCIAAgBIgBAAIAAgEIABgDIgBAAIgBgBIAAgBIAAAAIgCAAIgCgBIgQABIAAAAIgCAAIgCAAIgBAAIgBABIgBABIgBAAIgBAAIgBACIAAABIAAACIACAAIAAABIgCAAIAAABIABABIAAADIgBABIAAABIABAAIAAABIgBAEIABAAIAAAFIgBAAIABABIAAABIAAACIAAACIABAAIABACIABAAIABAAIABAAIADAAIAAABIACABIABAAIACgBIACABgAm6AWIAAABIAAADIgBABIAAABIABABIAAADIgBABIABAAIAAAEIAAABIAAAAIgBAGIABAAIgBABIAAABIAAABIAAABIAAADIABAAIABACIABAAIAAAAIACABIACAAIABgBIAAgCIACAAIASAAIAEAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAAAAIABgBIAAgBIABgBIAAgDIAAgBIAAgCIAAAAIAAgCIAAgBIgBAAIAAgFIAAAAIAAgCIAAgCIAAgBIAAgFIgBAAIAAgBIgBgBIAAgFIgBAAIAAgCIAAAAIAAAAIAAAAIgCAAIgCAAIAAAAIgLAAIAAAAIgJABIAAAAIgCAAIgDABIgBAAIgBABIAAAAIAAAAIAAADIAAAAIABABIABAAIgBAAIAAABIgBAAgAj+ADIAAAAIgBABIAAABIAAABIAAAAIAAAAIABAAIAAAFIAAAAIAAAFIABAAIgBAEIABABIAAACIgBABIgBABIAAABIABABIAAABIACAAIAAABIABAAIABABIACAAIABgBIABgBIABAAIAAABIAFgBIAHABIAMAAIABgCIABAAIAAgBIABAAIAAgBIAAAAIAAgBIAAgCIgBAAIAAgCIAAAAIAAgBIAAgBIAAgEIAAgBIAAgDIgBgBIAAgEIAAgCIgBAAIABgCIgBgBIAAAAIgBAAIAAAAIgCAAIgBAAIAAAAIgKACIgGAAIgEAAIgDAAIAAAAIAAAAIgBAAIgDAAIAAAAgAHDgUIgBACIgBAAIABABIAAACIAAACIgBABIABAAIAAAFIAAABIAAACIgBADIAAAEIABAAIAAACIAAABIAAADIABABIAAABIAqgIIAMgCIABAAIABgBIABAAIACAAIAAgBIAAgBIABgBIAAgBIgBAAIAAgFIAAgBIAAgFIAAAAIAAgHIAAAAIgBgBIgBgBIgBAAIgCAAIgDgBIgGAAIAAABIgKABIgHAAQgFAAgDABIgHAAIgDAAQgBAAAAABQgBAAAAAAQAAAAAAAAQAAABgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAgADAgOIAAACIAAAAIACABIAAABIAAABIACAAIACAAIAAAAIAEAAIAIAAIAbgDIACAAIABAAIABAAIABgBIAAgBIAAAAIAAgBIAAgCIAAAAQABgBAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIgBgDIgEgCIgHgDIgHgFIgLgFIgOgGIgBgBIgBgBIgCABIgBABIgBAAIAAABIAAABIAAAEIABAAIAAACIgBAAIAAADIABABIgBAFIAAAFIABAAIAAACIgBAAIAAAEIABAAIAAACIgBAAgAGYhBIACACQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIACAAQArgDAngHIADgBQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgDIgBAAIABgCIgBgBIAAgEIgBgBIAAgBIgBAAIAAgEIAAgCIgBAAIAAgBIgBAAIgCAAIgBAAIAAgBIgBgBIgDgBIgDABIgzADIgJAAQgCABgDAAIgDABIgDAAIAAAAIgCAAIgBAAIgBgBIAAABIgCABIAAABIAAABIAAACIAAAAIAAADIgBAAIAAACIABABIAAAFIAAAAIAAAHIgCAAQAAABgBAAQAAABgBAAQAAABAAAAQAAABABAAIADACIACAAgAC7h3IAAACIgBAEIABAAIAAAFIABABIAAAFIAAAAIAAAAIAAABIAAAEIAAAAIAAABIgBAAIAAACIABAAIAAACIAAAAIACABIABAAIABAAIABABIABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIAHgBIAagCIABAAIADgBIABAAIABgBIABAAIAAgBIABgBIAAgCQAAAAgBAAQAAgBAAAAQAAAAAAABQAAAAAAAAIABgDQAAgBgBAAQAAgBAAAAQAAAAgBAAQAAAAAAgBIgFgBQgDgBgFgDIgGgEIgMgHIgNgFIgBgCIgCgBIgCABIAAACIgBAAgAKLiRIAAABIgBACIAAAKIAAABIABAAIgBABIgBAEIABABIAAAEIABAAIAAAGIAAABIAAAJIAAABIAAADIABAAIABABIAAAAIACACIAAACIABAAIABAAIADAAIABAAIACAAIACAAIAFAAIAVAAIAEgBIAAAAIABgBIABAAIABgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgEIAAgCIAAAAIAAgEIgBgBIAAgFIgBAAIABgBIAAgEIgBgBIgBAAIAAgEIAAgBIAAgFIgCgBIACgCIgCgBIAAgBIAAgBIAAgDIgBgCIABAAIAAgBIgBAAIgBgBIAAAAIgCAAIgBgBIgCAAIgCAAIgCAAIgLAAIAAABIgIABIgGAAIgCAAIgBAAIgBAAIAAABIgBAAIgBAAIgCABIgBABIAAABIACACIAAAAIABAAgAGZh2IAAAAIAFgBIBDgSIACgCIADAAIAAAAIACgBIAAAAIABgBIAAgJIgBAAIAAgBIABAAIAAgCIgBgCIAAgDIAAgBIAAgCIgCAAIAAgDIAAAAIgBgBIAAgBIADAAIABAAIABgCIABAAIAAAAIAAgBIAAgBIAAgBIgCgCIgBgBIgCAAIgHACIgFAAQgOAAgPADQgGgBgFABIgRABIgDAAIgDABIgDgBIgBAAIgCACIAAABIAAAAIgBgBIgBAAIgBAAIgBABIgBABIAAAEIAAABIAAAEIgBACIAAAKIABABIgBAFIABABIAAAFIABAAIAAAKIABAAIAAABIAAABIABABIABAAIADAAIAAgBIACABgAC7irIABAAIABABIAEgBIAIAAIAagDIACAAQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIABAAIAAgBIABAAIAAgBIAAgBIABgCIgBAAIABgDQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgEgCQgDgBgEgDQgGgCgCgDIgLgFIgOgGIAAAAIgBgBIgBgBIAAABIgCAAIAAABIgCABIAAABIABABIAAABIgBAIIABACIAAAKIABAAIgCACIAAADIABABIAAAAIgBABIAAABIABAAIAAABIABABIABAAIAAABIABAAgAGmjFIAGABIAKgBIAigDIABACIAAAAIABAAIABAAIACgCIAAAAIAAgBIABgCIABAAIAAgCIgBAAIgBgBIAAgFIAAgBIAAgDIAAgCIgBgBIgBAAIABgEIAAgBIgBgBIgBgBIAAAAIgBAAIgBAAIgCACIgyACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIAAAAIgBABIgCAAIAAgBIgCAAIgCABIgBABIAAAAIgBAAIAAAHIABABIgBAAIAAAEIABACIgBADIAAABIABABIAAADIABABIACABIABAAIADAAIABAAIABgBIABAAgAoBiOIgBgBIAAAAIgBgBIABgBIgBgBIAAgJIgBAAIAAgFIAAgBIAAgFIAAAAIAAgCIAEABIADgBIAAABIAEgBIAEAAIAAgBIAkgBIAGAAIAHgBIAMAAIACAAIAAgBIAMgBIAAABIAAAAIAEgBIAAACIAAABIAAABIgBABIAAACIABAAIAAAEIgBAAIAAABIAAABIABABIgBAEIABAAIAAAHIgBAAIgCAAIAAABIgDAAIAAAAIgEAAIAAgBIgEAAIAAABIgGAAIg5AEIAAgBIgFABIAAAAIgFABIgEAAgAn2iwIAAAAIABgBIAAgBIAAgCIAAAAIgBgDIAAgBIAAgBIAAgBIgBAAIgBgCIADAAQAVgCAWgBIAQgBIACAAIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIACACIAAAAIAAACIAAABIgNAAIgKABIgDgBIgmADIAAgCgAnljMIgBgCIAAgDQABgEgCgEIgFgTIABAAIApgDIgDALIABABIgCADIgBAOIAAADIgXACIAAABQgDgBgEABgAndj+IAJgIIAGAEIADACIAEACIACABIABACIAEABIAGACIgyAEgAFLkfQAFgTAAgIIACAAIAGAAIAAABIABAAIAKAAIAAgBIAEgBIBygGIBNgGIALgBQA3gCA2gEIArgEIAHAAIAAABIADADIACACIABACIAEADQABACADAEIAEAGIACACIgFgBIg/ADIjrAQIhGAEIgMABIAAgBQgEACgFgBQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAIAAACIgJACIgFAAgAFVlCIgDAAIAAAAIgBgEIgHgNIgCgFIADAAIACAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAHAAIACAAIAAAAIACAAIAAAAQA2gCA1gEIC2gMIBTgEIADgBIABAAIgCADQgBAFgDABIgDAFQgDADACACIAAABIgDABIgqACIhrAGIgOABIhLAGIAAAAIhzAHIgDAAIgEABIAAABgAFelkIAEgCIAHgMIBkiYIAKgRIAKgPIATgeIAAgDIACgEIACgDIABgDIADgEIABgCIABgCIAAABIAAABIABADIAEAEIADADIABACIACADQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABIAXAaIAMAOQAGAGAGAJIB5CGIAKALQACACADABIAEAEQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIhJAEIi3AMIhrAGIACgCg");
	this.shape_1.setTransform(-35.6,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#352D2A").s().p("AsaJtIgBAAIgBgBIAAgCIAAgCIABgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBgBIAAAAIAAgBIAAgBIAAgDIgCgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIABgCIAAgCIAAgBIAAAAIAAgCIgBgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIgBgCIAAgBIAAgCIgBgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgDIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIgBgBIABgCIAAAAIAAgCIgBgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAIABgBIAAAAIAAgCIgBgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgDIAAgBIAAgCIAAAAIAAgBIAAgCIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgCIAAgBIgBgBIAAAAIAAgDIAAAAIAAgCIAAgBIAAgCIAAgBIgBgBIAAgBIABgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIgBgBIAAgBIABgCIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgCIgBgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBAAAAIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIgBgCIAAgBIABgBIAAgCIAAgBIAAgCIAAAAIAAgBIgBgCIABgCIAAAAIgPAAIgDAAIgCAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAAgBIgDgBIAAgBIgCgBIgDAAIgBgBIgBgCIgBAAIgCAAIAAgBIAAgCIgBgBIgCgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgCIAAAAIABgCIAAAAIAAgCIgBgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIABAAIgBgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgCIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIgBgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIABgBIAAgBIAAgBIAAgCIgBgCIAAAAIAAgCIAAAAIgBgCIAAAAIAAgCIAAAAIAAgDIAAgBIABgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIABgCIAAgBIgBgCIAAAAIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgCIgBgBIAAgBIAAAAIAAgCIgBAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgDIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIgBgBIAAgBIABgCIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgCIABAAIAAgCIgBgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgCIAAAAIAAgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIABgCIABgBIAAgBIAAgBIgBgBIABgBIgBAAIAAgBIAAgCIABAAIACgBIgFABIgCgCIAGgBIAGgBIAGgCIAIgEIAIgBIASgFIAlgJIAMgDIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAgDIgBgLIAAgDQABgDADgBIABAAIAAgBQACAAADgCQAEAAACgCIAFgCIAJgCIAIgDIATgGIAkgKIA9gSIAOgEIAAgBIAAgCIABgBIgBgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIgDAAIgDAAIgBAAIgCAAIAAAAIgCAAIAAgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIAAgBIAAAAIAAgGIgBAAIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgEIgBgBIAAgBIAAgCIAAgDIABgEIgBgBIAAgBIABAAIAAgGIABAAIADAAIAGAAIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIgFgCIgBgFIABgFIAAgCIABgCIABAAIABAAIAHAAIANgCIgBgDIgEgVIgBgDIAAgEIgCAAIgBAAIgCAAIAAgBIgCAAIAAAAIgBAAIAAgFIABAAIAAgBIABAAIABAAIAAgCIAcgTIAEgDIADgCIACAAIAIgCIAIgBIATgGQASgFAcgGQAcgFAPgFQAOgCgCADIACACIADAAIgBABIACACIABAAIABABIAAABIADAAIAFABIABABIAGACIAHAEIAAACIADAAIABACQABAAAAAAQAAAAABABQAAAAAAABQAAAAgBABIAEABIgFABIgLADIABAAIgBASIgBAAIAAACIAAABIAAAAIAAACIABABIAAAGIAIgCIAKgCIAAgBIAGAAIAAAJIgBAAIAAAAIgBABIABAAIAAAEIgBAAIAAABIABAAIAAAKIgBAAIAAABIgBABIABAAIAAACIACAAIAAABIAAABIABAAIgBASIAAAAIAAAAIgBABIABABIAAACIAAABIAAAGIgBABIAAACIABABIACAAIABABIABAAIABACQAIAJAKAPIALAPIACABIgCAAIAAABIABgBIAAABIACAAIAFAHIAGAGIAJgLIAHgJIAHgIIAMgPIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAgDIACgBIABAAIAAgCIgBgCIADAAIACgCIAAgBIADAAIgBABIABAAIAEgBIAGgBIAIgCIAHgBIATgFIAngJQAegHAggFIAfgHIAGgBIACAAIABAAIAAABIAGABIAAgCIACABIAHAIIAHAJQAHAEADAFIAPAOIA3iJIAHgRIAIgTIAMgeIABgDIADgEIABgCIADgEIABgEIABgFIADgCIAAgCIADABQAAABAAAAQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAABQAAAAAAABQABAAAAABQAAAAABABIADgCIAFgCIAHAAIAIgCIAIgCIATgCQATgEAUgCIA+gIIAggDIACAAIAAgBIABAAIAAgBIABABIADgBIACABIgBADIAEAFIAEAEIAFAGIAGAHIAGAGIBViAQAFgJAHgJQAEgIAGgIIAUgcIACgCIADgEIACgDIADgCQACgCAAgDIAEgDQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAgBIACAAIACABIAMgBIAEgCQADABACgCIAGgBIAJgBQAEgCAEAAIAUgDIAmgFIA/gJIAggEIAEgBIAAAAIABAAIABAAIACAAIAAACIAFAEQACADAFAEQACADAEAFQAFADADAGQAGADAEAGIAVAWIApAtIBCBLQARASAQAVIAHAIIABACIgCABIAAAIIgBAAIgCAAIgBAFIgCAEIgJATIABAAIAAAGIADACIAAABIAAAAIACABIAAABIAFAGIANALIAFgBIAAAAIACAIIgCgBIgGABIADAAIAAACIAAADIAAADIAAADIAAADIABAEIgBACIABADIAAAEIABACIAAADIAAAFIAAABIAAADIAAAEIABADIAAADIAAADIAAACIAAAFIAAADIABACIAAADIAAAEIAAACIABADIAAAEIAAACIAAAEIAAADIAAADIABADIAAADIAAACIgBAEIAAADIABADIAAADIABADIAAADIAAAEIAAACIABADIAAADIAAADIAAADIAAAFIABACIAAAEIAAACIAAADIAAADIABAEIAAACIAAAEIAAADIAAADIAAACIAAAFIAAACIABADIgBAEIABACIAAAEIAAADIABACIAAAEIAAADIAAACIAAAEIABADIAAADIgBADIABADIAAADIABADIAAADIAAADIAAADIAAADIAAADIABADIAAADIAAAEIAAADIAAACIAAADIABAEIAAADIAAADIAAACIABAEIAAADIAAADIAAADIAAADIAAADIAAADIAAADIABAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAAADIAAAEIABACIAAAEIAAABIAAADIABAEIAAADIAAACIAAAEIAAADIAAACIABAEIAAADIAAACIAAAEIAAADIAAADIABADIAAADIAAADIAAAEIAAACIAAAEIAAADIABACIAAAEIAAADIABACIAAADIAAAEIABADIgBADIABADIAAADIAAADIAAAEIAAABIAAAFIAAACIAAADIABADIABAEIgBADIABACIAAAEIAAADIAAAEIAAACIAAADIAAAEIABADIAAACIAAAEIAAADIABADIAAADIABADIAAADIgBADIAAADIAAACIABAFIAAACIAAADIAAAEIAAADIABACIAAAEIAAADQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIABADIAAADIAAADIAAAEIAAACIAAADIAAADIABADIAAADIAAAEIAAACIAAAEIAAACIABAEIAAACIABAEIgBACIABAEIAAADIAAADIAAAEIAAADIAAABIABAFIAAADIABACIAAADIgBADIAAADIABAEIAAADIAAADIAAAEIAAACIAAACIAAAFIABADIABADIgBACIABAEIgBADIABAEIABACIgBAEIAAADIABACIAAADIAAAEIAAADIAAACIAAAEIAAADIAAAEIAAACIAAADIABADIAAADIABADIAAAEIgBADIABACIAAAEIAAADIAAADIAAADIABADIAAACIABAEIABADIAAACIAAAEIAAADIAAACIABAAIgBACQAAAEgBACIgCABIgBAAIgBAAIgIABIgCABIggAUIg/AhIgmATIgVAJIgJAFIgJACIgGAEIgHADIgCgBIgBADIgCABIgBAAIgBAAIgQACIggACIgIAAIgBAAIgEgCIgBAAQAAABAAgBIgCABIg6AEIqsAsIqQAoIgBgFgAsqEvIAAABIAAACIAAABIAAABIAAABIABABIAAACIAAACIgBAAIABACIAAABIAAAAIAAACIAAABIAAACIAAABIAAACIABABIAAABIAAABIAAABIgBACIABACIAAAAIAAABIAAACIABABIAAABIAAACIAAABIAAACIAAAAIAAABIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABACIAAAAIAAADIAAAAIABABIgBABIAAADIAAAAIAAACIAAABIAAABIAAABIAAABIABABIAAACIAAACIAAAAIAAABIAAACIAAABIAAABIAAADIAAAAIAAACIAAAAIAAABIAAACIAAABIAAACIAAABIABABIgBABIAAABIAAACQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAACIAAABIAAABIABACIAAAAIAAABIAAACIABACIAAAAIgBADIAAAAIAAABIAAABIAAACIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAADIAAABIAAACIABABIAAABIAAACIAAABIgBACIABABIAAACIAAAAIAAABIABACIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAACIABABIAAACIAAAAIAAACIABABIgBABIAAACIAAACIAAABIAAABIAAACIABABIAAACIAAACIAAABIABABIAAABIgBACIAAACIABABIAAABIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAAAIAAADIAAAAIAAACIAAACIAAABIAAABIABABIAAABIAAABIAAABIAAACIAAACIAAABIgBABIAAABIAAABIAAABIAAACIAAABIABACIAAAAIAAACIAAAAIABADIAAABIAAABIAAABQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABABAAIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAADIAAABIAAABIAAABIAAACIAAAAIABACIAAABIAAACIAAABIABABIAAABIAAABIAAACIAAABIgBABIAAACIAAABIAAAAIABADIAAAAIAAACIAAABIABACIAAABIAAABIAAAAIAAADIAAAAIAAACIgBABIABACIAAAAIAAACIAAABIAAACIACACIAAABIAAABIgBABQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAABIgBACIAAABQFHgWFHgUIKrgqIA6gEIACAAIABAAIADgBIADgBIAHAAIAhgDIAQgBIABAAIAAgCIgBgDIgBgEIAAgDIAAgCIgBgFIgBgCIAAgDIAAgEIAAgCIgBgFIAAgDIgBgDIAAgEIABgCIgBgEIAAgDIAAgDIgBgEIABgDIAAgEIAAgEIgBgDIgBgDIABgEIgBgDIAAgDIAAgEIgBgCIABgFIgBgCQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAIAAgDIAAgDIABgEIgBgDIgBgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIgBgEIAAgCIAAgFIAAgCIgBgDIAAgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAIAAgDIgBgEIAAgDIAAgEIAAgDIAAgDIAAgEIgBgDIAAgDIAAgEIAAgCIAAgFIgBgDIAAgCIAAgEIAAgEIAAgCIAAgFIgBgCIAAgEIAAgEIAAgDIgBgEIgBgCIAAgEIABgEIgBgCIAAgEIAAgEIAAgCIAAgEIAAgDIAAgDIgBgEIgBgCIABgEIgBgEIAAgDIAAgCIAAgFIAAgDIAAgDIgBgEIAAgDIAAgEIABgCIgBgDIgBgEIAAgDIgBgEIABgDIgBgDIAAgEIAAgDIAAgDIAAgEIAAgDIgBgDIAAgEIAAgDIAAgDIAAgDIgBgDIAAgFIAAgCIAAgFIAAgDIAAgDIgBgEIAAgDIAAgCIgBgFIAAgDIAAgCIAAgFQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBgDIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIgBgDIgBgEIAAgDIABgCIgBgFIAAgCIAAgDIAAgFIAAgCIgBgEIAAgDIAAgDIgBgEIABgDIgBgDIAAgEIgBgDIAAgDIABgEIgBgCIAAgFIAAgCIgBgEIABgEIAAgDIgBgCIAAgEIgBgCQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAIAAgDIAAgEIAAgEIAAgDIAAgDIAAgEIgBgCIgBgEIAAgEIABgCIAAgEIgBgDIgBgDIAAgFIAAgCIAAgEIAAgDIAAgCIAAgFIAAgDIgBgDIAAgEIgBgDIAAgDIABgEIgBgCIAAgDIAAgEIgBgEIABgDIAAgDIAAgEIgBgDIgBgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIgBgCIAAgDIgBgEIAAgEIABgCIgBgEIAAgEQAAAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBIAAgEIAAgDIAAgEIAAgCIAAgFIgBgCIABgEIgBgEIAAgCIAAgDIgBgEIABgDIgBgDIAAgEIAAgDIgBgEIABgDIAAgDIgBgEIAAgDIgBgDIAAgEIAAgDIAAgEIgBgDIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAIgBgEIAAgCIAAgCIgBgBIgCABIgBAAQgVAAgTACIjsAOIhHAEQgFAAgFAAIAAACIABAAIAAACIAAABIAAABIgBABIAAACIAAABIAAAAIAAACIABABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAAAAAIAAABIAAACIAAABIABABIAAAAIAAACIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIgBACIAAAAIAAACIABABIAAABIAAABIAAACIABABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIABACIAAABIAAABIgBABIAAABIABABIAAACIAAABIAAABIAAABIABABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIgBABIABABIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAABIgBACIAAAAIAAABIAAABIAAABIABACIAAABIAAACIAAAAIABABIAAABIAAACIAAABIAAACIABABIgBABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAACIABAAIAAACIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIABABIAAABIAAABIAAABIABABIAAABIAAADIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAABIAAAAIAAACIAAABIAAABIAAACIABABIAAABIAAABIAAABIgBABIABABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIABAAIAAACIAAACIAAABIgBAAIABACIAAABIAAABIAAABIABACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIABABIAAABIAAABIAAACIAAABIABABIgBABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIABAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAAAIABACIAAABIAAABIgBABIAAACIABAAIAAABIAAACIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIABABIAAABIAAABIgBABIABABIAAACIAAABIAAABIAAABIAAABIAAAAIAAADIAAAAIABACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIABAAIAAACIAAAAIAAACIABAAIABABIAAABIAAACIAAACIABABIABABIgBAAIAAACIAAAAIABACIAAACIAAABIAAABIABABIAAABIAAACIAAABIAAACIABABIAAABIgBABIAAAAIAAACIAAABIAAACIAAABIAAABIABABIAAABIAAABIAAABIAAABIABACIAAABIAAABIgBABIABACIAAAAIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAACIAAACIAAALIAAAAIhFAEQgDgBgEABIgFgBIgDABQABgGAAgFIgBAAIAAgBIAAgBIgBgBIABgBIgBgCIgBgCIABAAIgBgCIAAAAIAAgBIAAgBIgBgCIAAgCIAAgBIAAgBIAAgCIgBAAIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIABgCIAAgCIAAgBIgBgBIAAgBIAAAAIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgDIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgDIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIgBgBIAAgCIAAgCIAAAAIgBgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIgBgBIAAgBIAAgCIAAgBIAAgBIgBgBIABgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIgBAAIAAgCIABgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgCIgBgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIABAAIAAgCIAAgBIAAgCIAAAAIAAgBIgBgCIAAAAIAAgCIAAgBIgBgCIAAgBIAAgBIAAgBIABgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIABgBIAAgCIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgDIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIABgBIAAgBIAAgBIAAgBIABAAIABAAIgBgCIgEgFQgDgFgDgHIgBAAIhJh8IgFgIIgLgTIgJgRIgJgRIgHgLIgLgSIgBgCIAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAABgBIgDgCIgBgDIgDgFIgCgEIAAgBIgBAFIgBAEIgCADIAAAEIgCADIAAADIgOAiIgGAQIgHATIhBCkIgGAOQgBAAAAABQAAAAAAABQgBAAAAABQAAAAAAABIAAABIAAABIAAACIACABIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAACIAAABIABABIAAABIAAABIABABIAAABIAAACIAAAAIAAACIAAACIAAABIAAACIAAABIABABIAAABIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIABACIAAAAIAAABIAAABIABABIAAABIgBACIAAACIAAAAIABACIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAACIAAABIAAABIgBAAIAAACIABABIAAACIAAACIAAAAIAAABIABABIAAABIAAACIAAACIABABIAAABIAAABIAAABIgBAAIABADIAAAAIAAACIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIABABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIABACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIABABIAAABIAAABIAAABIABABIAAACIgBABIAAABIAAACIABAAIAAABIAAABIAAACIAAAAIAAADIAAABIAAABIAAAAIABACIAAABIAAABIgBABIABACIAAAAIAAACIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAABIAAAAIABACIAAAAIAAACIAAABIABACIAAABIAAABIAAABIgBABIAAABIAAABIAAACIAAABIABABIAAABIAAAAIAAACIAAABIAAACIAAABIABABIAAABIABABIgBACIAAAAIAAACIAAACIAAABIAAACIAAABIgBABIABABIAAABIAAABIAAACIAAABIgBABIAAABIgBABIgBABIABACIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAADIAAABIgDACIgGAAIgBABIAAAAIgEABIgBAAIg+AFIgMAAIgEAAIgEAAIgBgDIAAgBIgBgBIAAgBIgBgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgDIgBAAIAAgCIAAAAIAAgBIAAgBIgBgCIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIABAAIAAgBIgBgBIAAgBIAAgCIAAgBIAAgCIgBgBIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIABgBIgBgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgCIAAAAIAAgBIAAgCIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIgBAAIAAgCIAAgBIAAgBIgBgBIABgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAAAIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgJIgBAAIAAgDIABAAIAAgCIgBgBIAAgEIgBgBIAAAAIgCgBIgBgCIAAgBIAAAAIgGAAIgBgBIAEgCIACAAIgBgBIgBgCIAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAgBgBAAIgCgDIgDgBIgFgGIgBAAIhAg+IgHgGIgHgIQgEgDgDgFIgDgDIgKgJIgBgDIgCgBIgBgCIgCgBIgBgBIAAgBIgDABIgBABIgBABIgBADIAAABIgBACQgHAIgEAHIgHAIIgGAIIg7BQIgGAGQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgCACIgCABIABAAIAAABIAAABIABACIAAACIAAABIABABIAAABIABABIgBABIAAACIABACIAAAAIAAABIAAABIAAABIAAACIABACIAAABIAAABIAAABIAAABIABAAIAAACIgBABIAAACIAAAAIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIABACIAAABIAAABIgBABIAAABIABABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIABABIAAABIAAACIAAABIAAABIABACIgBAAIAAACIAAAAIAAACIAAABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAACIAAABIAAACIAAAAIAAACIAAABIAAADIAAAAIAAACIAAAAIAAABIAAABIAAACIABAAIAAADIAAABIAAABIAAABIABABIAAABIAAABIgBABIABACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIABACIAAAAIAAABIAAABIgBABIABACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAABIABABIACAAIABABIAAABIgBABIgBACIgBABQgEABgEAAIgXABQgFABgFgBIgFABIAAgBIgCAAIgIAAIAAgBIAAgBIgBABIgDAAIgBgBIgBgCIAAAAIgBgCIAAAAIAAgCIAAAAIAAgCIgBgBIAAgBIAAgCIAAgBIgBAAIABgCIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIgBgCIAAAAIABgBIAAgBIgBgDIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIgBAAIAAgCIAAAAIABgCIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIgBgCIAAgBIAAgCIAAAAIAAgCIAAgCIABgBIAAgBIgBAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAAAIAAgBIAAgCIABgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgDIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIgBgCIAAgBIAAgBIAAgBIABgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIAAgBIABgCIgBAAIgBAAIgBAAIgCgBQAAAAAAAAQAAABAAAAQgBAAAAgBQAAAAAAAAIgBgBIgDgBIgCgBIgFgCIgBAAIgmgWIgNgHQgFgEgHgDIgDAAIgCgBIAAgBIAAgCIgFAAIAAAAIgBgBQAAAAABgBQABAAAAAAQABAAAAAAQABgBAAAAIAAgCIABAAIAAgBIgBgCIABgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIgBgCIABgBIAAgBIAAAAIgBgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAAAIgBgCIAAgBIABgCIgGACIg5ADIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAACIABABIAAABIAAACIAAABIAAABIABABIAAACIgBAAIAAABIAAABIAAACIAAABIAAACIAAABIABABIAAAAIAAACIgBABIABACIAAABIAAABIgBABIgBACIAAABIgBAAIgBABIAAABIAAACIgBACIgCABIgCAAIABACIABABIgBABIgBABIgFABIgBACIAAAAIgBgBIgKABQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAgBABIgDAAIgDAAIgDAAIhpAHIgJAAIgNABIgCACIAAAEIgBACIgBACIAAABIAAAAIABABIABACIAAAAIAAACIgBABIABABIAAABIAAABIAAABIAAACIAAABIAAACIAAABIAAACIABAAIAAABIAAABIAAABIgBACIABACIAAABIAAABIAAAAIABACIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAABIAAABIAAABIABACIAAAAIAAACIAAAAIAAACIgBAAIAAACIAAABIAAACIABABIAAABIAAABIAAABIABABIAAABIAAACIAAABIAAABIABABIgBABIAAABIAAACIAAABIAAACIAAAAIAAACIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIAAABIAAACIABABIAAABIAAABIgBAAIAAACIABABIABABIAAABIAAACIAAABIAAABIgBABIAAABIABABIABAEIgCACIABAAIAAABIgBABIAAABIAAABIgDAAIgCACIAAAAIgDAAQgNAAgLACIgsACIgCgBIgBgBIgBAAIAAgCIgBAAIAAgCIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIgBgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIABgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIgBgBIAAgCIAAAAIAAgDIAAAAIgBgBQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAgBAAIgMABIgBAAIgCgBIAAABIABABIAAABIAAABIAAABIAAADIAAABIAAABIAAABIAAABIACABIAAACIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIABABIgBABIAAACIAAABIABAAIAAACIAAACIAAACIAAABIAAABIAAABIAAABIAAABIABABIAAABIgBACIAAACIABABIAAAAIAAABIAAACIAAAAIABACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIABAAIAAABIAAABIgBACIABAAIAAADIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIgBABIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIABACIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIABABIAAACIAAAAIABACIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIABACIAAACIgBABIAAABIABABIAAAAIAAACIAAABIAAACIABABIAAABIAAABIAAABIAAABIAAABIAAACIgBABIAAABIABACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIABABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAABIABACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAACIAAABIAAACIABAAIAAACIAAAAIAAACIAAAAIABACIAAAAIAAACIAAABIAAACIgBABIAAABIAAABIAAABIABABIAAACIAAABIAAACIABAAIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIABABIAAACIAAAAIgBACIABABIAAABIAAABIAAABIAAABIABACIAAABIABAAIAAACQgBABABAAIAAABIABAAIABABIAAgBIABAAIADAAIADAAIADABIADgBIATAAIACAAIADACIAAABIABABIAAABIgBACQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIgBAAIgCACIAAABIgCAAIACABgAJykgIAAACIAAABIABADIgBAEIAAADIABAEIAAADIAAACIAAAEIAAADIAAADIABAFIAAADQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIABADIAAADIAAADIAAADIAAAEIAAAEIAAADIABAEIABADIAAACIgBAEIAAADIABADIAAAEIAAADIAAADIAAAEIAAADIABAEIAAADIAAADIABAEIAAADIAAADIAAADIAAADIABAEIAAAEIAAACIABAEIgBADIAAADIAAAEIABACIABAFIgBADIABACIAAAFIAAADIAAADIAAADIAAADIABAEIAAADIAAADIAAAFIAAADIABADIAAAEIABACIAAAEIAAAEIAAACIAAAEIAAAEQAAAAABAAQAAABAAAAQAAAAAAABQgBAAAAAAIAAAFIABACIAAAEIAAADIAAADIAAAEIABADIAAADIAAAEIAAADIAAADIAAADIABADIAAAEIAAAEIABACIAAAFIAAABIABAEIgBADIABADIAAADIAAAEIAAADIAAADIAAAEIABADIAAAEIABADIAAADIgBADIABADIAAAEIAAAEIABADIgBADIABAEIAAACIAAAFIABADIgBADIABADIABAEIAAAEIAAADIgBADIABADIAAADIAAAEIABADIgBADIAAADIABAEIAAADIABAEQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABAAIAAADIAAADIAAAEIAAADIAAAEIAAADQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABIABAEIAAADIgBADIABADIAAADQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAABIAAADIAAAEIAAADIAAADIAAADIABAFIgBACIABAEIAAADIAAADIABAEIgBACIABAEIAAAEIAAADIABADIgBADIAAAEIABAEIAAADIABADIgBAEIABADIAAADIAAADIABADIAAAFIAAACIAAAEIAAAEIAAACIABAEIgBADIABADIABAEIAAADIAAADIAAAEIAAADIAAADIAAADIABAEQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABIAAACIAAAEIAAAEIABACIAAADIAAAEIABADIAAAEIAAADQAAAAgBABQAAAAAAABQAAAAAAAAQABABAAAAIAAAEIAAADIABADIAAADIAAAEIAAAEIAAADIABADIAAADIAAADIAAADIAAAEIAAAEIAAAEQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAIABADIAAAEIABADIAAADIgBADIABAEIgBADIABAEIAAACIAAAFIAAADIABADIAAADIAAADIgBAEIABADIABADIAAAEIABAEIgBACIAAAEIABADIAAADIAAAEIAAADIAAAEIAAADIAAADQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAABIAAADIAAADIACADIAAADIAAADIACAEIgBADIABADIAAAEIAAACIABAAIAUgKQAjgUAYgLQAYgLAsgZIAhgTIAAgCIADgBIAKgFIABAFIABAAIAAgCIAAgDIAAgDIgBgDIgBgCIAAgEIgBgCIAAgDIAAgEIAAgDQAAgBAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIAAgEIgBgDIABgDIgBgEIAAgCIAAgDIAAgDIAAgDIAAgDIgBgEIAAgDIgBgEIAAgCIABgDIAAgEIAAgDIgBgDIgBgCIABgEIgBgCIAAgFIAAgCIgBgDIAAgDIAAgDIgBgDIAAgEIAAgDIAAgCIAAgDIAAgEIAAgDIAAgDIgBgDIAAgCIABgEIgBgCIAAgDIgBgEIAAgDQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgEIAAgEQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAgBAAAAIAAgDIAAgDIAAgDIAAgEIgBgCIAAgDIAAgEIABgDIAAgCIgBgEIgBgDIAAgCIAAgEIAAgDIAAgDIAAgDIAAgCIgBgFIAAgDIAAgDIAAgEIgBgCIAAgDIgBgDIABgDIgBgDIAAgEIAAgCIAAgDIAAgEIAAgDIAAgDIAAgDIgBgDIgBgCIABgFIAAgCIgBgDIAAgDIAAgDIAAgDIAAgEIAAgCIAAgDIgBgEIAAgCIAAgDIgBgEIAAgDIAAgCIgBgEIABgDIAAgDIAAgDIgBgDIAAgEIAAgCIAAgDIAAgDIAAgEIgBgCIAAgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIgBgDIAAgCIAAgDIAAgDIAAgEIAAgEIAAgCIAAgFIgBgCIAAgCQAAgBAAgBQAAAAAAgBQAAAAAAAAQABAAAAgBIgBgDIAAgDIgBgDIAAgCIgBgEQAAgBABAAQAAgBAAAAQAAAAAAAAQgBAAAAgBIAAgDIAAgDIAAgEIAAgCIAAgCIAAgEIgBgCIAAgDIAAgEIgBgDIABgDIAAgDIgBgDIAAgCIAAgEIAAgCIAAgEIAAgDIgBgDIAAgCIgBgFIABgCIgBgDIAAgEIAAgCIAAgEIAAgDIAAgDIgBgDIAAgDIAAgDIAAgDIABgDIgBgCIgBgEIAAgDIgBgEIABgCIAAgEIgBgCIAAgEIAAgDIgBgDIABgEIgBgCIAAgCIAAgFIgBgDIABgCIgBgEIAAgCIAAgFIAAgCIAAgCIAAgEIAAgDIAAgDIgBgCIAAgFIAAgCIAAgDIAAgDIgBgDIgBgEIAAgDQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAIAAgEIAAgCIAAgDIAAgDQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBABgBIgBgBIAAgEIAAgDIAAgDIgBgDIABgDIAAgDIgBgEIAAgDIAAgCIAAgEIAAgCIAAgDIgBgEIAAgDIAAgDIAAgDIgBgDIgBgDIAAgEIAAgCIAAgEIAAgDIAAgDIAAgCIAAgFIgBgCIABgDIAAgEIgBgCIAAgDIgBgEIABgCIgBgEIAAgCIAAgDIAAgEIAAgDIAAgCIgdAEIg9AJIgmAGIgUABIgJAAIgIABIgGAAIgBABIgBABIABAAIABAFIgDACIgGAAIgBAAIgHACQgFABgGgBIABADgAm3gRIAAABIAAABIAAABIACABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAABIAAAAIAAABIABABIAAABIAAABIAAABIAAACIABABIAAABIgBABIAAACIABAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAACIAAABIgBABIAAABIABABIAAABIAAABIAAABIAAADIAAAAIAAACIAAAAIAAABIABABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAADIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAACIAAACIAAAAIAAACIAAAAIAAABIABABIAAACIAAAAIAAACIABACIAAABIAAAAIAAACIAAABIABABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIABACIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAABIAAACIAAAAIABACIAAABIgBABIAAABIAAABIABACIAAABIAAABIAAABIABABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIgBACIABAAIAAACIAAACIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAABIgBABIABABIAAABIAAABIAAACIAAACIAAABIAAABIAAABIAAADIAAAAIAAACIAAABIgBACIABAAIAAABIAAACIAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIgBABIAAACIAAAAIAAACIAAAAIACgBIAGAAIACgBIAAgBIAFAAIAJAAIAAgBIAXgBIAAgCIAAgBIAAgBIgBgBIABgBIgBAAIAAgCIAAgBIgBgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIgBgCIAAAAIABgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAAAIAAgCIAAgBIgBgCIAAgBIABgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgCIABAAIAAgCIgBgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIgBgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAAAIAAgDIAAgBIAAgBIAAgBIgBgCIAAAAIABgCIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAAAIABgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgDIABgCIgBgBIAAAAIAAgCIAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgCIgYAGIgUAGIgDAAIAAABgAiZgNIAAACIgBABIABABIAAACIAAABIAAAAIABACIAAABIAAACIAAABIABAAIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAADIABAAIAAACIAAABIAAABIAAAAIABACIgBABIAAABIAAABIABACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIABACIAAAAIAAACIAAACIAAABIAAABIgBABIAAABIAAABIABABIAAACIAAABIAAABIABABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAAAIgBADIABAAIAAABIAAABIAAABIAAABIABACIAAABIAAACIAAAAIAAACIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIABACIAAACIAAAAIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIABABIAAABIAAABIAAABIAAACIABAAIgBACIAAABIAAACIAAAAIABABIAAABIgBABIAAACIABABIAAACIAAABIAAABIAAABIAAABIABABIgBABIAAACIgBABIAAACIABgBIADgBIANAAIAAgBQAfgCAegDIABACIACAAIADAAIABAAIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgCIgBgBIAAgBIABgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgCIABgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIgBgDIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgBIgBAAIAAgBIAAAAIAAgCIgBgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIABAAIgBgDIAAAAIAAgBIAAgBIAAgBIgBgCIAAgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAQgMACgLAFIggAKIgQAFIgIACQgDACgGAAIgCABIACAKIABAFIABADQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAAAIAAADIABABIAAAEIABABIAAABIgBAAgAC9iFIAAACIAAAAIAAACIABABIAAACIAAAAIAAACIAAABIAAABIAAABIABABIAAACIACABIAAABIAAABIAAAAIgBACIAAABIAAADIABABIAAACIAAABIAAABIAAABIAAACIABABIABABIAAABIAAABIgBABIAAACIAAABIAAABIAAABIABACIAAAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIABABIgBABIAAABIAAABIAAABIAAACIABABIAAACIAAAAIABABIAAACIAAAAIAAACIAAABIABACIgBAAIAAABIAAABIAAACIAAABIAAACIAAABIAAABIABABIAAABIAAAAIAAADIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAACIABAAIAAACIAAACIgBAAIAAACIABABIAAABIAAABIAAABIABABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIABABIAAAAIAAABIAAACIgBABIABABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIABABIgBABIAAACIAAAAIAAADIABABIAAABIAAAAIAAACIABAAIAAACIAAABIAAACIAAAAIAAACIgBABIAAACIAAABIABACIAAABIAAACIAAAAIAAACIAAACIAAACIAAACIABAAIgBABIAAABIAAABIABABIAAACIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIABACIAAAAIAAACIgBAAIAAABIABACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIABACIAAABIAAACIAAAAIAAACIABABIAAABIAAABIAAACIgBABIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABAAIgBACIABABIAAABIABABIgBABIABABIAAACIgBABIABABIgBABIgBABIAAABIAAABIADAAIAHgBIA7gDIAAgBIAAgDIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIgBgBIAAgCIgBAAIgBgBIAAgBIgBgBIABgBIAAgBIABgBIAAgBIgBgCIgBgBIAAAAIgBgDIgBAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBQAAAAABAAQAAgBAAAAQAAAAAAAAQgBgBAAAAIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgBIAAgCIAAgDIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgCIgBgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAAAIAAgDIgBAAIAAgCIABgBIAAgCIgBAAIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIgBgCIAAAAIAAgCIAAgBIgBgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAgBIAAgBIgBgCIAAgCIAAAAIAAgCIAAAAIgBgBIABgBIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgCIABAAIAAgBIAAgBIgBgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgCIAAAAIAAgBIAAgBIgBgBIAAgCIAAgBIABgBIgBgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIgBgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAAAIAAgCIAAgBIgBgCIAAAAIAAgBIAAgCIAAAAIABgCIAAgCIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIgBgBIABgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIABAAQgJAAgHACIgUAGIgIABIgJACIgGABIgEABIADAEIAAADIAEAHIABABIAAADIgCACIgBAAIgCgBIgCgBIgBgDIgBAAgAtGgBIAAABIABAAIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBACIABABIAAABIAAAAIAAACIAAAAIABACIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIgBACIAAACIAAABIAAAAIABACIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAADIAAABIAAABIAAABIgBABIABABIAngDQANAAANgBIgBgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIABgBIgBgBIAAgBIAAgCIAAAAIABgCIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIgBgBIAAgCIAAgBIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIAAAAIABgCIAAAAIAAgCIAAgBIgBgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAAAIAAgBIAAgCIAAgBIAAgCIAAgBIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCQgIADgIABQgIACgLABQgEACgFgBQgEACgFAAIgFABIgFAAIgCACgAsWgWQghAGgSAGIABAAIACABIABAAIAAACIgBAAIAAABIAAABIAFgCIAGgBIAJgDIAIgCIASgEIATgFIAAgBIAAgBIgBgBIAAAAIgQADgAtTgIIgIACIAHAAIAAgBIAFAAIABgBIABgBIgGABgAm8gcQAAABABAAQAAABAAAAQAAAAABAAQAAABAAAAIACABIADgBIASgGIAfgJIAEgEIgBAAIAug+IgIgJIgEgDQgDAAgCABIgdAJIg8ARIglAKIgUAEQgEACgEAAIgJACIAAABIAJAFIAOAIIAkAUIADACIACACIAEACIACABIABABIABABIABACIABAAIAAABIAAgBgAiigwIABADIACgBIAIgDQACgCADAAIARgHIAggLIAbgIIAAAAIAAgCIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIABgDIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIgBAAIAAAAIAAgCIAAgCIAAgBIAAgBIAAgCIACgFIAFgOIgBAAIAGgNQgHgKgJgJIgHgLIgJgMQgEgDgCgFQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAgBIABAGIgBAAIgJACIgeAFIg9AOIgmAIIgTACIgJACIgJABIgFACIgBAAIAAABIACABIACABIACABIACACIAFAFIAIAJIAJAGIAHAHIALAKIA9A8IAFAGQAAAAAAABQAAAAABAAQAAAAAAABQAAAAABAAIABAAIABACIAAABIABADIACABIAAgBIgBgCIAAAAIABAAgApqhjIg9ASIglAJQgIACgMACQgDACgEAAIgGADIAJgCIBpgHIADgBIADABIACAAIABAAIABAAIAOAAIABAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAAgCIAAgBIAAgBIAAgCIACAAIABgCIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIgNAEgAoLiCIgBABIgCABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIABABIAAACIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAABIAAABIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAACIAAAAIABABIAAABIAAACIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIADgCIAKgCIAHgDIASgGIAmgKIA8gSIAggJIABAAIgBgBIACABIgRgWQgFgFgDgFIgHgJIg5ARIglAKIgTAFIgIABIgHACIgCAAIgFABIAAgBIgCAAgApniZIAAAAIAAAEIAAABIAAAGIABAAIAAAJIABAAIgBABIABABIAAAAIABABIADAAIAGgBIAAAAIAFgBIgBABIA6gDIAFAAIAAgBIAFAAIAAABIAEAAIAAAAIADAAIAAgBIACAAIABAAIAAgHIgBAAIABgFIgBgBIAAgBIAAgBIABAAIAAgDIgBAAIAAgDIABgBIAAgBIAAgBIAAgBIgEAAIgBAAIAAAAIgMAAIAAABIgBAAIgMAAIgHABIgGAAIgkABIAAABIgEABIgFABIAAgBIgCABIgEgCgAoHigIABABIABABIAAABIgBAAIAAABIABABIAAACIABAAIAAAEIAAABIAAADIAAADIAAAAIAAAEIABABIAAABIAGgCIAHgDIATgGIAlgKIA6gQIAAgEIAAgBIAAgBIgBAAIAAgFIABgBIAAgKIgrALIglAJIgTAFQgEACgEAAIgJABIgFACQgCACgDgCIgDACQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgCAAgABmkoQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAIgBACIBQCIIAEAGIAEgCIAGgBIAIgDQADgDAFAAIASgFIATgFIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIgBgCIAAAAIAAgBIAAgBIAAgCIgBgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAAAIAAgBIgBgCIAAgBIAAgBIAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgCIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgCIAAAAIAAgCIgBAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIgBgCIAAgBIABgBIAAgBIAAgCIAAgBIgKABIgHgBIgBAAIgCgBIgCgBIAAgBIAAgBIAAgBQgBgBABgEIAHgaIgCABIABgBIAAgGIgCgDIgIgSQgBgEAAgBIACgCIADgBIACAAIADgCIAAAAIACgBIAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIACAAIgBgBIACgFIAEgDIAHgOIgBAAIAJgNIgGgJIgEgHQgEgEgCgDIgDgFIgCgDIgHAAIgfAFIg+AIIglAFIgVACIgIABIgJABQgDAAgDAAIgGABIgCAAIABABIADADIABACIABAAIgBADIACAAIACABIAAABIAAACQAIALAHANIAEAGIABABIAIANQAEAKAFAGIAFAIIAAAAIACACIAAACIAAAAIABADgApaiuIABABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIgBACIAAAAIAAACIAmgEIADACIAKgCIAMAAIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIgCAAIgQABQgWAAgVACIgDAAIABACgAoGioIAAABIACgBIAFgBIAFgCIAJgDIAIgCIATgGIAlgKIArgKIAAgDIgBAAIAAgBIABAAIgBgBIABgBIAAgHIgBAAIg9APIglAIIgUAFIgIABIgJACIgCAAIAAAAIgBABIAAABIAAABIgCABIABABIAAABIAAAAIAAACIAAAAIABACIAAACIAAABIAAABIAAACIAAABIAAAAIADAAIAHgBIABAAgApdi6IgDABIAAACIAIgBIANgBIgBgBIgRAAgAoPi9IAIgDQAEgBAEAAQAJgDAKgCIAvgMIArgKQAPgEgEAIIABAAIAAgBIABgBIAAgDIgBgBIAAgBIABAAIgBgBIABAAIAAgBIg9AOIgmAJIgTAEIgJACIgKACIgDAAIAAACIAAAAIAAADIABAAIABAAgApBjAIAAgBIAWgCIABgCIABgPIACgCIgBgBIADgLIgpADIgBAAIAFASQABAEAAAFIAAACIABACIAEAAIADAAgAodjDIAGgBIABAAIACgCQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABABIABgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABIAIgEQAEgBAFAAIASgGIAwgLIAfgHIAAgFIgBAAIAAgDIAAAAIAAgFIAAAAIABgRIABgBIguAMIglAIIgTAFQgEABgFAAIgHACIgBAAIgBABIgBAAIAAABIgCABIgKABIgBAVIgCAKIADAAIADAAgApAjxIgPAJIAygDIgGgDIgEgBIgCgCIgCAAIgDgCIgDgCIgGgFIgJAJgAnskLIglAJIgTAEIgIACIgBABIABAAQADAAAFAEIAGACIAKAGQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAIAAACIAFgCIAJgDIASgEIAvgMIArgJIADgBIgCAAIgCAAIgBgDIgCAAIgTgIIAAgBIgCgBIgBAAIgCgBIg5ANgADokTIAFAAIAJgCIgBgBQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAFAAAEgBIAAABIAMgBIBGgFIDrgPIA/gEIAEABIgBgCIgEgGQgEgDAAgCIgEgEIgBgCIgCgCIgDgCIAAgBIgHAAIgsADQg2AEg3ADIgKABIhNAFIhyAGIgFABIAAABIgKAAIgBAAIAAgBIgFAAIgCAAQAAAJgFASgAJ0lJIAHAHIACADIADACIACAEIADADIADAFIABABIACgCIAHAAIAIgDIAIgCQAJAAALgCIAngFIA9gJIAdgDIgHgFIgHgJIgBAAIgCgBIAAgBIgCgCQAAAAAAAAQgBAAAAAAQAAAAABAAQAAgBAAAAIgCgBIgFAAIgeAFIg/AIIglAFIgUABIgIABQgFABgFgBQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAgADnlHIAGAOIABADIABAAIADAAIAKAAIAAgBIAEgBIADAAIBzgHIAAAAIBLgFIANgBIBsgGIAqgCIACgBIAAgBQgBgCADgDIADgGQADgBAAgEIACgEIAAAAIgDABIhTAFIi2ALQg1AFg2ACIAAAAIgCAAIAAAAIgDAAIgHAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAABIgCAAIgDAAIACAEgAKElsIgGAAIgGABQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABIAAADQgDAJgEAEIgFAJIAAABIACAAIAAAAIABABIAEAAIAJgCIAHgDQAJAAAKgCIAogGIA9gIIAhgDIAGgLIABgEIAEgIIACgGIAAAAIgfAFIg+AJIglAEIgUACIgIACIgEAAIgFAAgAGapPIgCACIgCAFIgBACIgCAEIgCAEIgBACIgTAfIgJAOIgLARIhjCYIgIAMIgDADIgCACIBrgHIC3gLIBJgFQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgEgDQgDgBgCgDIgKgLIh5iGQgGgIgGgGIgMgPIgXgaQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIgCgDIgCgDIgCgCIgEgFIgBgDIgBgBIABAAIgBABgAJ2lrIABgBIgCAAIABABgAGhpOIADACIADADIAEACQAAABAAAAQABABAAAAQAAABABAAQAAAAAAAAIADADIAYAbIAOANIANAPIB5CHIAKALIADAEQABACADACIAAACIABACIACAAIACAAIgBAAIAGgDQADAAADgBIAGAAIAIgCIAIgCIATgDQAUgEAUgBIA9gJIAggEIgHgIQgSgRgQgSIhBhKQgTgXgUgWIgUgYIgHgLQgGgFgEgGIgGgIIgFgHIgBgBIAAgBIgJABIgfAFIg+AKIglAEIgTABIgCABIgOABIgOADIgHAAIgHAAIACACgArlC0IgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgEAAIgBgBIAAAAIAAgBIgBgCIAAgBIABAAIAAgBIAAgCIAAgCIAAgEIgBAAIABgFIgBAAIAAgDIAAgBIAAgCIgBgBIABAAIAAgBIgBgBIAAgFIABAAIAAgBIABgBIAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAAAAIABAAIABgBIAAgBIAAgBIACgBIADAAIAGAAIAFgBIAEAAIAKgBIAAAAIACAAIAAAAIABABIABAAIAAAAIABABIAAACIAAABIAAAEIABABIgBACIAAADIABAAIAAAEIABABIAAAFIAAAAIAAABIAAAFIAAABIAAABIAAABIgBAAIAAAEIgBABIAAAAIgBABIAAABIgPABIgLABIgDgBgArmCTIgBABIAAABIAAACIABABIAAACIABABIAAAFIAAAAIAAABIAAACIAAACIAAABIAAAFIAAABIAAACIAEgCIAJAAIALgBIAAgBIABgFIAAgCIgBAAIAAgBIABgBIAAgDIgBAAIAAgEIgBgBIAAgBIAAgCIAAgBIACgBIAAgBIgBAAIAAgCIgJABIgEABIgGAAIgEgBIgCAAgAlQCmIgCAAIgBAAIgBAAIgBAAIAAgBIAAgBIAAgBIgBAAIAAgBIgCgBIAAgDIgBAAIgBAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgFIAAgBIAAgBIAAgEIgBgBIAAgDIABgBIgBAAIAAgCIABgBIAAgCIABgBIAAgBIABAAIAAAAIABAAIABAAIABAAIACABIAAAAIABABIAAAAIACAAIADgBQAGABAHgCIABABIABAAIABgBIAAAAIABgBIABAAIAAgBIABABIACABIAAAAIAAACIABAAIAAACQgBAAABAAIAAADIABABIAAAHIABAAIAAAAIAAAFIABAAIgBAFIAAACIAAACIAAACIAAAAIAAABIgBAAIgBABIgBAAIAAABIAAAAIgBAAIgBACIgBAAIgQABIgFAAgAlNCLIgDAAIAAAGIAAAAIAAAFIAAABIAAABIAAAEIABABIAEgBIAMgBIAAAAIAAgHIAAgBIAAgCIAAgBIAAgDIAAAAIAAgCIAAgBIgBAAIgNABgAlQBgIgDABIAAAAIgCgBIAAgCIgDAAIgBAAIgBAAIgBAAIgCgCIAAAAIAAgBIAAgCIAAgBIgBgCIABAAIAAgEIgBAAIABgEIAAgCIgBAAIAAgBIABgBIAAgCIgBgBIAAgBIABAAIAAgCIgBAAIAAgCIAAgBIABgBIAAAAIACAAIABgBIABgBIABAAIACAAIACAAIAAAAIAQgBIACABIABAAIAAAAIABABIABABIAAAAIAAACIAAAFIAAAAIABABIAAABIABABIAAAHIgBAEIABABIAAACIAAAAIAAACIgBABIAAAAIAAABIgBAAIgBABIAAABIgCABIAAAAIgBABIgLABIgCgBgAlYBGIABABIAAAFIABAAIAAAFIAAABIAAAEIABAAIAAAEIAAAAIACgBIABgBIACAAIACAAIAAAAIAJgCIAAgBIgBgBIABgEIgBAAIAAgEIABgBIgBgBIAAgCIgBAAIAAgCIgOAAIgCAAIgBAAIAAAAgAoZBCIgCgBIAAAAIgBAAIgBgBIgBAAIAAgDIAAgBIAAgCIAAgBIABgBIgBAAIABgFIAAgBIAAgBIAAgDIgBAAIABgBIAAgEIgBgBIAAgBIABgBIAAgCIAAgBIAAgEIABAAIAAgBIABAAIgBAAIgBgBIAAAAIAAgCIAAAAIAAAAIABgBIABAAIADgBIABAAIABAAIAIgBIAAgBIAMAAIAAAAIACAAIABAAIABAAIgBAAIABABIAAACIABAAIAAAEIAAABIAAABIABABIAAAEIABABIgBACIAAADIABAAIAAAEIABAAIAAABIAAACIAAABIAAACIAAABIAAACIgBABIgBABIgBABIAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABIgEAAIgSAAIgCAAIgBABIgBABIgBAAgAoaAjIACAAIAAACIAAABIAAABIAAABIAAAFIACABIAAAGIAAAAIAAADIABABIgBADIAHgBIAKgBIABgBIAAAAIACAAIAAgBIgBAAIAAgFIgBgBIAAAAIABgBIAAgCIgBgBIAAgCIABgFIgBAAIABgBIAAgCIgBgBIAAgBIAAgCIAAgBIgJAAIgJACIgCgBIgCAAgAldArIgBgCIgBAAIAAgBIgCAAIAAgBIgBgBIAAgBIABAAIABgBIAAgCIgBgBIABgFIgBAAIAAgFIAAAAIAAgEIgBAAIAAAAIgBAAIABgBIAAgBIABgBIAAAAIACgCIAAAAIACAAIABAAIAAABIABAAIADAAIAEgBIAGAAIAKgCIAAAAIABAAIABAAIAAgBIABABIABAAIABABIgBADIABAAIAAACIAAADIAAABIAAAEIABABIAAADIAAABIgBABIABAAIAAADIABAAIAAACIAAAAIAAAAIAAABIgBAAIAAABIgBAAIgBACIgMAAIgHgBIgFABIAAgBIgCAAIAAABIgBACIgCAAgAlaAXIAAAAIAAAEIABABIgBADIAAACIABABIAAABIABAAIABgBIAEAAIAGAAIAJgCIAAgBIAAAAIAAgEIAAAAIAAgIIgKAAIgGAAIgEABIgCgBgAFgAWIgBgBIAAgCIAAgBIAAgCIgBAAIAAgGIABgCIAAgDIAAgBIAAgEIgBAAIABAAIAAgDIAAgCIgBgBIABAAIABgBIABAAIAAAAIABAAIACAAIABAAIABAAIABAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAAAAAAAIAEAAIAHAAQADgBAFAAIAHAAIAKgCIAAgBIAGAAIADABIABAAIABABIACABIAAABIABAAIAAAGIgBAAIAAAEIABABIAAAGIABAAIAAABIgBABIAAAAIgBABIgBABIgCAAIAAABIgBAAIgMADIgqAIgAFjAAIABABIAAABIABABIAAACIABABIAAAEIAAAAIAAABIAAACIAAADIAAAAIACAAIATgGIAKgBIANgEIABABIAAgGIABAAIAAgBIgBgCIACAAIAAgBIgBAAIgHAAQgFABgGgBIgIABIgIAAIgFAAIgFAAIgCAAIgDAAgABnACIgEAAIAAAAIgCAAIgCAAIAAgBIgBAAIgBgBIAAAAIAAgBIAAAAIABAAIAAgDIgBAAIAAgDIABAAIAAgCIgBAAIAAgGIABgEIgBgBIAAgEIABAAIAAgBIgBAAIAAgFIgBgBIABgBIABAAIAAgBIADgBIABABIABABIAOAHIALAEIAHAFIAHADIAEADIABADQAAAAABAAQAAAAAAAAQAAABgBAAQAAABAAAAIAAAAIAAACIAAACIAAAAIAAABIgBAAIgBAAIgCAAIgBAAIgbACIgIAAgABkgZIAAABIAAADIABABIAAABIgBADIABABIAAAFIAAABIAAADIADAAIAHAAIATgBIgWgOIgIgEgAE1g0IgBAAIgCAAIgEgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABgBIACAAIAAgHIAAAAIAAgEIgBgBIAAgCIABAAIAAgEIAAAAIAAgCIAAAAIAAgBIABgBIAAgBIACABIABAAIABAAIABAAIADAAIACgBQAEAAACgCIAJABIAzgEIADgBIACABIACABIAAABIAAAAIACAAIACAAIAAABIABABIAAACIAAADIABAAIAAABIABABIAAAFIAAABIAAABIAAAAIACADQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAABIgDABQgnAHgrADIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgCgBgAE4hJIABACIAAACIAAACIAAAGIABAAQAHgBALAAIA4gHIAAgBIAAgBIAAgBIAAgBIAAgGIgBAAIgCAAIg1AEIgJAAIgHAAIAAAAIgDAAgABfhOIgBAAIgBgBIgBAAIgBAAIgCAAIAAAAIAAgCIgBAAIAAgCIABgBIAAgBIAAAAIAAgDIAAgBIAAAAIAAAAIAAgGIgBgBIAAgEIgBAAIABgFIAAgBIAAgIIABAAIAAgBIACgBIACABIABABIANAGIAMAGIAGAFQAFADADAAIAEACQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIgBACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIgBACIAAABIgBAAIgBABIAAAAIgDABIgBAAIgaABIgHABIgCABIgCgBgABfhkIACAAIgBAEIABAAIAAADIAAACIAAAEIACgBIAHAAQAKAAAJgBIgXgNIgHgEgAI2hTIgCAAIgDAAIgBAAIgCAAIgBAAIgBgBIAAgCIgCgCIgBAAIAAAAIgBAAIAAgDIgBgBIAAgKIAAgBIAAgFIgBAAIAAgFIAAgBIAAgDIABgBIgBAAIAAgCIAAgKIABgCIAAgBIgBAAIgBgBIAAgBIABgBIABgBIACAAIABgBIAAgBIABAAIABAAIACAAIAGAAIAHgBIAAgBIAMAAIACAAIACAAIABAAIACABIACAAIAAAAIABABIABAAIAAACIgBAAIABACIAAACIAAABIAAABIABABIgBADIABABIAAAEIABABIAAAFIABAAIAAABIAAADIAAABIAAAAIAAAFIABABIAAAFIABAAIAAACIgBADIABABIAAADIgBAAIAAACIABAAIAAABIgBABIgBABIAAAAIgBABIgBAAIgDABIgWABIgEAAgAIvhYIABgBIABAAIAAAAIABAAIABAAIACAAIABgBIAFAAIATgBIAAgDIAAgDIAAgHIAAgBIAAgFIgBgBIAAgBIABgBIAAAAIAAgCIAAgBIAAgEIAAAAIAAgBIAAgCIAAgDIgBgBIAAgCIABAAIAAgFIgBgBIgCABIgBAAIgCAAIgMAAIgJABIgFAAIgBAAIgBAAIgBAAIAAACIAAABIAAAFIACABIAAAEIABAAIAAAEIAAABIAAABIgBABIAAAEIABAAIAAABIAAAAIAAACIAAABIAAACIABABIAAAEIABABIgBAEIABAAIAAACIAAABIgBAAgAE1hqIgBAAIAAAAIgDAAIgBAAIgBAAIgBgBIAAgBIgBAAIAAgKIAAAAIAAgGIgBAAIABgGIgBgBIAAgKIABgBIAAgFIAAgBIAAgDIAAgBIACgBIABAAIABAAIABABIAAAAIAAgBIACgCIABAAIADABIADgBIACAAIARgCQAGgBAFABQAPgCAPgBIAFAAIAHgBIACAAIABABIABABIAAABIAAABIABABIgBAAIgBABIAAACIgCAAIgCAAIAAABIABABIAAAAIAAACIABAAIAAACIABACIAAADIABABIAAACIgBAAIAAACIABAAIAAAJIgBABIgBAAIgBABIAAAAIgDAAIgCACIhDASIgFAAgAE0iTIABAAIAAADIAAACIgBAAIABABIAAAAIAAAAIAAAHIAAABIAAACIABABIAAAFIABABIgBAEIABACIAAADIACAAIBAgRIADgBIAAgBIAAAAIAAgCIABgDIgBgBIAAgFIAAAAIAAgCIAAAAIAAgDIAAgBIAAAAIAAgBIgBAAIgEAAIgfACIgLAAIgQABIgBAAIgEAAIgEgBgABZifIgBAAIgBAAIgBAAIgBgBIgBAAIAAAAIAAgBIgBAAIAAgBIABgBIAAAAIgBgCIAAgDIABgBIAAAAIAAgKIgBgCIABgIIAAgBIgBgCIAAgBIABgBIAAgBIADAAIAAgBIABABIABABIAAAAIAOAHIALAFQACACAFACQAFADADABIAEADQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBACIABAAIgBACIAAACIAAABIgBAAIAAABIgBAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgbACIgHAAIgEABgABbi6IgBAFIABABIAAAEIABAAIAAAFIAAABIAAACIAAABIACgBIAHAAIAUgBIgYgOIgHgDgAmOi1IABAAIAAABgAFDi5IgBAAIgBABIgCAAIgDAAIAAAAIgCgBIgBgBIAAgCIgBgBIAAgBIABgEIgBgCIAAgDIABAAIgBgCIAAgGIABAAIAAAAIABgBIACgBIACAAIAAABIABAAIACgBIAAAAQAAAAABAAQAAAAAAAAQAAAAAAABQgBAAAAAAIAxgDIADgCIABAAIABAAIAAAAIABABIABABIAAABIgBAFIABAAIABAAIAAACIAAAEIAAABIAAAEIABABIABAAIAAADIgBAAIgBACIAAABIAAAAIgCABIgBAAIgCAAIAAAAIAAgBIgiACIgLABIgFgBgAE/jKIAAACIACABIAAADIAAABIAAAEIAAgBIADAAQACgBADABIALgBIAAgBIAegCIAAgCIAAAAIAAgBIAAgEIAAgBIAAgBIAAAAIgxADIgBAAIgBAAg");
	this.shape_2.setTransform(-25.7,-16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F7C87").s().p("AFIB5IAAgCIAAgDIAAAAIAAgBIAAgEIgBAAIAAgDIgBAAIAAgCIgBgBIAAgDIADAAIACAAIAFAAIAFAAIAIgBIAIgBQAGABAFgBIAHAAIABAAIAAACIgCAAIABABIAAABIgBABIAAAGIgBAAIgNADIgKACIgTAFIgCAAgABKBiIgDAAIAAgDIAAgBIAAgFIgBgBIABgDIAAgBIgBAAIAAgDIAAgCIAAAAIAIAFIAWANIgTABIgHAAgAEbArIAAgGIAAgBIAAgDIgBgCIABgBIADAAIAAAAIAHgBIAJAAIA1gDIACAAIABAAIAAAFIAAABIAAABIAAABIAAACIg4AGQgLAAgHACIgBgBgAIRAOIABAAIAAgBIAAgBIgBAAIABgFIgBgBIAAgEIgBAAIAAgCIAAgBIAAgCIAAAAIAAgBIgBAAIAAgEIABAAIAAgBIAAgCIAAgDIgBAAIAAgEIgCgCIAAgEIAAgBIAAgCIABAAIABgBIABABIAFgBIAJgBIAMAAIACAAIABAAIACgBIABABIAAAFIgBAAIAAACIABABIAAAEIAAABIAAABIAAAAIAAAEIAAABIAAACIAAAAIgBACIAAABIABAAIAAAFIAAAAIAAAHIAAADIAAADIgTABIgFAAIgBABIgCAAIgBAAIgBAAIAAAAIgBAAIgBABgAEZgNIgBgCIABgEIgBgBIAAgEIgBgCIAAgCIAAgBIAAgGIAAAAIAAgBIgBgBIABAAIAAgCIAAgCIgBgBIAAgDIAEABIAEAAIABAAIAQgBIALAAIAfgCIAEAAIABAAIAAABIAAABIAAAAIAAADIAAABIAAABIAAAAIAAAGIABAAIgBADIAAACIAAAAIAAABIgDACIhAAQIgCABgAA+g/IAAgCIAAgBIAAgEIgBgBIAAgEIgBgBIABgEIgBgBIAHAEIAYANIgUACIgHAAIgCABIAAgCgAovhUIAAgCIAAgBIAAgCIADABIAKgDIAJgCIATgDIAmgKIA9gOIAAABIgBAAIABABIgBABIAAAAIABABIAAADIgBABIAAABIgBAAQAEgHgPAEIgrAJIgvAMQgKACgJADQgEAAgEACIgIACQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAgAEjhaIAAAAIAAgEIgCgBIAAgCQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAxgDIAAABIAAABIAAAAIAAAEIAAABIAAAAIAAADIgeACIAAAAIgLABQgDgBgCABIgDAAIAAABg");
	this.shape_3.setTransform(-22.7,-27.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#708F9B").s().p("AliBQIADgBIARAAIABABIgMABIgJABgAFLhLIgBgBIgEgFIAKADIATAGIgEAFQgKgDgKgFg");
	this.shape_4.setTransform(-51.1,-43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.4,-79.4,175.4,125.2);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-815,-149.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-815,-149.5,1630,299);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.parent = this;
	this.instance.setTransform(-782,-893);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-782,-893,1564,1786);


(lib.Symbol9_p10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E4820").s().p("ADmVOIAAgBIABgBIAAgBIABgBIAAgBIABgBIAAgCIAAAAIAAgCIABgBIAAgBIABgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIABgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIABABIACAAIAAAAIABgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgCIAAgLIAAAAIAAgBIAAgBIgBAAIAAgBIABAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAAAIgCgEQgCgDAAgDIABgEIADABIAEgGIAFgFIAGgFIAEgEIADgCIAvgkIADgEIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIgBABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIABABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAIIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIABABIAAABIAAABIAAAAIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIgBACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIgBACIgBABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAAAIgFARIAAABIgrA9IgTAYIAHgSIgBAAIgDAAIgKAaIAAAAIgBABIgBABIgBAAgAD/UUIAAAAIABgBIABgCIAAgEIgCAHgAjPRAIgDAAIgzAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIABAAIASABIAWAAIALAAIAEgBIACAAIACgBIAAABIAAACIAAABIgBABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIgBACIAAABIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIgBAAgACJKVIgYAAIgHgBIgHAAIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgBIABgBIAAgBIACAAIAFABIAJAAIAWABIAIAAIAGAAIACAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIgBACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIgCgBIgCABIgDAAIgIAAgAkTJvIgCAAIgCgBIgDAAIgWgBIgFAAIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIABgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIABgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAAAIADABIADAAIAAgBIACgBIALABIAIAAIAJAAIABAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIgBABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIABABIAAABIAAABIAAACIAAAAIABACIgBAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIgFAAgAAFIMIgBgBIgCAAIgCAAIgCABIgCAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAAAIAGAAIAPAAIAPAAIALgBIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIgWAAIgLABIgDAAgADoG1IgFgCIgDgDIgDgCQAAgCgDgCIgGgEIgJgKIgKgIIgdgeIgEgFIgFgEIAFgHIARgQIAXgWIARgOIACABIAEgGIADgDIACgCQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBAAIACgDQAEAGAJAKIAtAvIAIAJIAJAIIAAAAIgQAVIAAAAIgUAPIgWATIgDgDIgLAOgAjQFwIgLAAIgWAAIAAAAIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIABgCIAAgBIgBgBIAAAAIAGAAIADAAIALABIAYAAIAEAAIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIABACIAAAAIgBAAIgBAAIAAAAIgCAAIgDABIgIgBgACaFgIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIASAAIAAgGIAMAHIAAgBIAAAAIAAgBIABgBIABABIAAABIABABIABABIACAAIADgBIABgBIABgBIACABIAGgJIAEgCIAFgGIANgLIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIgDABIADAAIgEAGIgDACIgDADIgqAkIgCgDIgQAUIAAgCgAAgFaIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIACABIAGAAIASAAIAQAAIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIgBABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIgIAAIgMABIgIAAIgDAAIgBAAIgBgBIAAABIgCAAIgCAAIgBAAIgCAAgADDDfIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIABgCIABgBIAAgBIAHgKIACgCIADgDIAMgMIAGgDIAOgOIAEgDIACAAIAEgEIABgBIAAABIABAAIAAABIABABIAHgLIAEgFIABgCIABgCIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIgCABIACAAIAAACIgEAFIgBABIgFAEIgYAWIgMAJIgDgCIgBAFIgDADIgBgEIgPATIgCACIAAgBgACNDCIgshBIAAgBIABgBIgEAAIAGgJIADgEIAGgFIABgCIALgKIAXgUIAJgFIABACIAGgKIABAAIAEgEIAAgBIABACIAWAeIADAGIAWAhIACACIgDACIgOANIgIAHIgcAZIgBAAIgBgCIgRAVgABaB2IAAgCIAAgBIgBgBIAAgBIAAgBIABgCIAAAAIAAgCIAAgBIAAgBIAAgIIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIABgCIgBgBIACgBIA5gzIAAAAIAHgHIADgDIABgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIACgEIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIgBABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIABABIAAABIABAAIAAABIAAABIABAAIgGAIIgCABIgFAFIgDABIgFAEIgCACIgDABIgEAFIgGAEIgEAFIgDACIgGAEIgHAIIgCgDIgPATgAAziEIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIACgCIACAAIAAgCIAAgBIAEgEIARgQQALgJAHgIIANgOIACgDIABAAIABAAIAAAAIAAAGIAKgPIABABIAAAAIABgFIABAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIgBABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIgCABIACAAIAAABIAAAAIgKANIAAABIgkAcIgJAJIAAgHIgQAUIAAgBgAihiTIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIABgBIALAAIAGgBIABAAIABAAIAAABIAAACIgCAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAAAIgDAAIgGAAIgCABIgEAAIgBABIgBAAIAAgBgAgcm0IABgDIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIABgBIAAgCIAAAAIAAgCIAAgBIABgBIAAgBIABgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgCgEIAAgDIgEADIAIgLIAsgpIAJgHIACAAIADgFIAVgPIAAABIgBABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIgBABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIgBACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIABABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIgFABIAEAAIgDAEIAAADIgEADIgJAHIgTASIgJAKIgEgBIAAgJIggAoQgBgDABgDgAhamyIgCAAIAAgBIAAgBIAAgCIgBAAIAAgCIABgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIACAAIAMAAIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIgBABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIgCAAIgGAAIgBABIgBAAIgBAAgAhFtsIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgEIAAgBIAAgEIABgCIAAgCIAAgCIAAgCIAAgBIgBgBQgBgDACgDIABgBIgBAAIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIABgCIAAgCIAAgCIAAgDIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIAAgDIAAgBIAAgDIAKgPIAAgBIABgBIAFgDIAIgJIAagUIAFAAIAAADIALgQIABgBIAAABIAAABIAAACIAAABIAAACIAAABIgBACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIgBABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIABACIAAABIAAACIAAABIAAACIAAABIAAACIAAABIAAABIgCACIABAAQACABABAEIgBAGIgDAIIgtAsIgFgBIAAgCIgDACIgCAAIgCADIgGAKg");
	this.shape.setTransform(4.9,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83642A").s().p("AkjVVIgGAAIgDgBIgFAAIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIABgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgCIAAgBIAAgBIgCgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIACgDIALgLIAqgvIABgBIABAAIABgBIABgBIABgBIAAgCIAAAAIAAgCIAAgBIABgBIAAgBIABgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIgBgBIgBgBIgDgBIgBAAIgBABIAAAAIAAABIgBgBIgDAAIgSAAIgFAAIgFAAIgBAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAHAAIAbAAIACAAIACgBIACgBIABAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAgBIADgEIAuhCIADgHIACgBIAAgBIABgBIABgCIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIAGABIAMAAIADAAIABAAIABABIAFAAIABgCIABAAIABgCIAAAAIABgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIABgBIAAgBIABgBIABgBIAAgCIAAAAIAAgCIgBgBIgBgBIgBgBIgBgBIAsAAIABAAIAHAAIABAAIAAACIABABIACABIACgBIABAAIABgBIAAgBIABgBIABgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIABgCIABgBIABgBIAAgBIAAgBIgBgCIAAAAIgBgCIgBgBIACgCIACABIACAAIAAAAIACAAIAIAAIAHAAIAAgCIABAAIACgBIAAgBIAAAAIAAgCIAAgBIAAgBIABgCIABgCIABgCIAAgCIAAgCIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIABgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIgBgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIABgCIABgCIAAgCIAAgCIAAgCIgBgCIgBgCIAAgCIgBgDIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIAAgCIAAgDIAAgBIAsABIAAABIAAADIAAACIAAACIAAACIAAACIAAACIAAACIgBACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIgBACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIgBABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIABAAIAAACIAAABIAAABIABABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIABACIACABIABABIAFAAIADAAIANAAIAMAAIAFAAIAGAAIAAABIgBABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIABABIAAACIABAAIAAACIAAABIgBABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIgBACIgBABIAAABIAAABIACABIAAABIAAABIAAABIABAAIAHABIAAgBIACAAIACABIACgBIABAAIAHAAIADAAIAaABIASAAIADgBIAAAAIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIABABIABACIAAAAIAAACIgBABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIABABIABABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIgBACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIABACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIgBABIAAACIAAABIABABIABABIACABIABAAIACAAIABAAIABAAIABAAIAFABIAJAAIAVAAIAAAAIAAABIgBACIgBABIAAABIAAABIAAABIAAACIAAAAIAAACIgBABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIABACIABABIABABIgBAAIAAABIAAABIAAACIABABIAAABIABABIAAABIAAABIAAABIAAACIABABIAAABIAAABIAAABIAAABIABABIAAAAIABACIABABIAAABIACABIADAHIAuBCIADAEQAAABAAAAQABAAAAAAQAAAAABAAQAAgBABAAIABAAIACABIACABIACAAIAWAAIAFAAIAHAAIgBACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIgCAAIgEAAIgFAAIgBAAIgRAAIgDAAIgBABIAAgBIAAAAIgBgBIgBAAIgDABIgBABIgBABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIgBAAQgDACABAEIADAGIAAAAIAAACQAEABADAFIADAFIABgBIABAAIAPAQIAFAFIADADQACAAADAGIAZAWIAIAGIAEAEQAEADACgBIABACIAFAGIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIgBABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIgBABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIgBABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIABABIAAABIAAABIAAABIAAACIAAAAIABACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIgBABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIgBABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIgBACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIg9gBIgKAAIgQAAIgjAAIAAABIkbAAIhIAAIgqAAIgUAAIgOABIgHAAgAjlRGIgBABIgBABIgBABIAAABIAAACIABABIABABIACABIACAAIAAACIAAABIAAACIABABIABABIACABIAEABIAAgCIACAAIABgCIABgBIAAgBIAAgBIAAgBIAAgBIAyABIAFgBIAGgBIABAAIABgBIABgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIgBgCIgBAAIgCAAIgBgBIgBgBIgDgBIgDgBIgMAAIgWAAIgQABIgFAAIgDABIgBAAIgCAAIgBABIgBABIAAACIABABIAAABIABACIAAABIABABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIgBABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIgBAAIgBAAIgBAAgACJJEIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIgBABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABABIABABIACABIADABIAMgBIAGgBIAYAAIAHAAIAEAAIACgBIACgBIACABIABAAIADAAIACgBIAAgBIAAgDIABgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIgCAAIgBAAIgBAAIAAABIAAABIAAABIgBABIAAABIgBgBIAAABIgFAAIgKAAIgVABIgJAAIgFAAIgCAAIgBgBIgBABIAAgBIAAgBIgBgCIAAgBIgBgBIgCAAIgCAAgAjgJ9IAAAAIAAACIAAABIABABIABABIABABIAFAAIABAAIABgCIABgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIgBgCIAAAAIgBgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAFAAIABAAIABgCIABgBIAAgBIAAgBIAAgBIgBgCIgBAAIgDgCIgDAAIAAABIgJAAIgJABIgIAAIgIAAIgEAAIgCABIgCABIgCAAIgBAAIAAgCIgBAAIAAgCIgDAAIgBAAIgBAAIgBABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAAAIAAABIgCAAIgCABIgBABIgBABIAAABIAAABIAAACIABAAIABACIACABIAMAAIAYAAIACgBIADAAIADAAIACAAgAAxIbIABAAIABAAIAEABIAJAAIAfAAIABgBIABgBIABgBIABgBIAAgBIAAgBIgBgBIgBgCIgBgBIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIADgBIACAAIAAgBIABgBIABgBIAAgBIgBgBIgBgBIgCgBIgFAAIgDgBIgBAAIAAABIgCgBIgNAAIgQgBIgPAAIgDAAIgDABIgBABIgBABIgBABIAAABIAAACIAAAAIABACIgBAAIAAAAIgCABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIgBABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgBABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIABAAIABACIABABIAEAAIABAAIABgBIADAAIACAAIACAAIACAAgAjKEaIgBABIAAABIAAABIAAABIABABIAAABIAAACIgBABIgBABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIgBABIAAABIAAABIAAABIAAACIAAAAIAAACIABABIAAABIAAABIAAABIAAACIABAAIABACIADAAIAAACIAAABIABABIACABIAYABIAKgBIAIgBIADAAIADAAIACgBIABABIADAAIACAAIAAgBIACgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIACAAIgEgDIgKgFQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBIgTABIgNAAIgDABIgCAAIgBgBIAAgBIgDAAIAAAAIgBAAIgCABIAAABIgBABIgBgBIAAABIgBAAIgBABgABGEUIgBACIAAABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIgBABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABABIABABIACACIAEAAIABgBIABgBIABgCIABAAIAAgBIADAAIADAAIACABIABAAIABAAIAKAAIAKABIAJAAQAEgFAJAAIABgFIgCAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIgBgCIgBgBIgDgBIAAABIgBAAIgCABIAAAAIgQAAIAAABIgTAAIgGAAIgDABIgCAAIAAAAIgCgBIAAABIgCAAIAAAAgAAjBcIAAACIAAABIAAABIABABIACABIAHAAIAGABIAEAAIADABIAJAAIAHAAIABABIAEAAIACgBIACgBIACgBIABgBIABgBIAAgCIAAAAIgBgCIgBgBIgCgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIgBgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIgBAAIAAgCIgCgBIgCgBIgCAAIgSAAIAAAAIgEAAIgCABIgCAAIgCABIgDAAIgCAAIgDABIgBABIgBAAIgCgBIAAABIAAAAIgCAAIAAABIAAABIAAACIgBABIAAABIAAABIAAABIAAABIAAABIAAACIgBABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIABABIACABIABABIACgBIABAAIABgCIABgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAAAIADAAIADAAIADAAIADAAIACAAIAEAAIASAAIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgFAAIAAABIgIAAIgEAAIgEAAIgGABIgHAAIgBABIgBAAIgBAAgAhyiDIAFAAIABAAIAGABIAGAAIAAAAIACACIAAAAIAEAAIABgBIABgBIADAAIACgBIABAAIABgBIABgBIAAgBIABgCIAAAAIAAgCIgBgBIgBgBIgBgBIgDgBIgBAAIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIABgBIAAgCIAAAAIABgCIABgBIAAgBIAAgBIgBgBIAAgCIAAAAIgBgCIAAgBIgCgBIAAgBIgBgBIgBgCIgCAAIAAAAIgCAAIgBABIgBAAIgDgBIgDAAIgYAAIgDABIgBABIgCABIAAABIAAACIAAAAIAAACIABABIABABIACABIAFABIgBAAIAAACIAAAAIAAACIgBABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIACABIABACIAFAAIABgBIABgBIABgBIABAAgAg7pAIgBAAIAAACIAAABIAAABIAAABIACABIACAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIgBABIAAABIgBABIAAABIAAACIAAAAIABACIABABIAAABIAAABIAAABIAAACIAAAAIABACIABABIABABIACABIACABIACgBIABAAIABAAIAFAAIAEAAIAIAAIABAAIAEAAIAAgBIABAAIACgCIACAAIAAgCIAAgBIgBgBIgBgBIgBgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIABgBIAAgBIAAgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIgBgBIgBgBIAAgCIAAgBIAAgBIACAAIAAgCIABgBIAAgBIgBgBIAAgBIgCgCIgDAAIgBAAIgBAAIgPAAIAAAAIgCAAIgCAAIgCABIgBgBIAAABIgFAAIgCAAIgBABgAj9DRIgDgBIgCgBIgCgBIgXAAIAAABIgGAAIASgVIAOgQIAOAAIAKAAIABAAIACgBIAAAAIABgBIACAAIgWAgIgDAKIgBgBgADqDPIgDAAIgJAAIAAgBIgCAAIgVAAIgCABIACgDIAagZIAEgDIAYgWIAEABIAGgKIACgDIAAAAIACgEIAlABIABAAIABAAIACAAIABgBIACAAIgEAGIgOANIgDACQgGACgCAEIgBAAIgPANIgNAMIgCgCIgKANIgEAEIgCACIgBAAgACDh4IgCgBIgDAAIgSAAIAAAAIgEAAIACgDIABgBIAFgDIAxgpQAGgDADgEIADgDIAEgHIAGAAIAWAAIgQAVIgCABIgCACIgFAFIgGAEIgFAFIgFADIgOAPIAAgBIgIgBIgKANIgBgBgAiyh+IgIAAIAAAAIgDAAIABgCIAEgDIACgGIAEgFIABgEIACgDIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIABABIAAABIAAABIAAABIgEAAgAAYmiIABgBIABgBIADgCIATgUIA6g1IACgCIABABIACAAIABAAIAAABIABAAIACAAIABgBIAkAAIAHAAIAEAAIABAAIAAADIgBAAIAAACIAAABIgBACIgCAAIACAAIgGAIIgBgBIgCABIgMANQgEADgDAEIgBADIgFADIgEAFIgGAGIgKAJIAAAAIAAgGIABAAIgEgBIgOAUIgCgBIgCAAIAAAAIgEAAIgFAAIgQAAIgYAAIgDAAQgGAEgEAAIgBAAgAh1mlIgogBIAAAAIAAgBIgBgCIAIgJIAHgJIAHgLIAIgMQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIAIAAIAEAAIAAABIAAAAIABACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIgDAAgAAJtZIgCAAIgGAAIgMAAIgEAAIABgEIABgDQADgCAFgFIADgDIAQgSIAUgSIADgDIAEABIAAAAIAMgSIAMAAIAYAAIgMARIgTAPIgbAYIgFgBIgOASgAhO0QIAJgMIAmgfIAHAAIAGgKIACgBIAFgGIAFgDIAEgEIABgBIAXAAIAXAAIgHAJIgUASIgBAAIgKAIIgHAFIgBADIgCABIgPANIgCAAIgCAEIgHAGIAAAAIAAAAIgDABIguAAg");
	this.shape_1.setTransform(0.2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#352D2A").s().p("AlKVeIgBgBIgBgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgCIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIgBgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIABgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIgBgDIABgDIAAAAIAAAAIAAgBIAAgCIABgBIAAAAIABAAIABAAIAWgYIADgGIAYgbIAEgGIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIgBgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIABAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIABgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAAAIgVAAIgFgBIgDAAIgCgBIAAABIgBABIgBAAIgBABIgCAAIgDgBIgBAAIgBgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIgBgBIgBgBIAAgBIABgBIABgCIACgBIABgBIABAAIABAAIACgCIAignIACABIAAgCIARAAIABAAIABgBIABAAIABAAIAOAAIAUgdIAAgBIgBgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIABAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIAAgCIABAAIAAgCIABgBIAAgBIAAgBIgBgCIAAAAIABgCIAAgBIAAgBIAAgBIABgBIABAAIABAAIAAAAIACAAIABABIABAAIADgDQAEgDAAgDIADgEIADgEIACgFIACgFIADgCIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIgBAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIABgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIABAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgBIABgBIgBgBIAAgCIAAgBIAAgBIgBgCIgCAAIgBgBIgBgBIgBgCIAAAAIgCgCIAAgBIACgBIABgBIABAAIABgBIACgCIABAAIACAAIAAgCIACAAIACgDIAFgEQADgCADgIQACgEAGgHQAJgKAGgKIABgBIgCAAIADgDIABgCIALAAIAEABIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIABgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIABAAIgBgBIAAgBIgBgCIAAAAIAAgCIAAgBIAAgBIAAgBIgBgBIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIABgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgBIABgBIABgBIABgBIAAAAIgBgBIAAgBIgBgCIAAgBIgCAAQgBgDADgFQAEgLAHgLIAJgOIABgBIAAgBIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgBIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgEIAAgCIAAgBIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgBIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgBIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgBIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgBIAAgCIAAgDIAAgCIAAgBIAAgCIABgDIAAgCIAAgCIAAgCIACgCIAAgCIgBgCIgBgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIABgDIAAgCIAAgCIAAAAIAAgBIAAgEIABgBIAAgCIABgBIACAAIABgCIAAgBIABgCIAFgGIABgBIABAAIAdgZIAcgXIAHgIIgEAAIAGgBIAAgBIAAgBIAAgBIABgCIACAAIADAAIABgBIACAAIABAAIAYAAIAAgBIAWAAIADABIABACIABABIAAABIAAgBIABAAIABAAIABACIAAABIgBACIAAACIgBABIAAACIgBABIgBABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIABACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAABIAAABIAAABIABgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIAEAAIAaAAIAHAAIAEAAIACABIABABIACAAQABAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIABACIABACIgBACIAAABIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAACIABABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAADIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAABIABACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAADIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAADIAAABIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAADIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAABIAAACIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAAAIACACIABAAIACABIACABIABgBIABgBIABAAIAjAAIAIAAIADAAIACABIACAAIACABIAAABIAAAAIAAABIgCAAIAAABIABAFIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABAAIAAgBIABAAIAAABIAAAAIAAABIAAABIAAABIABAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIABABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIgBABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAABIgBABIAAABIAAABIAAABIAFgBIACABIgCAAIAAABIAIAAIAWAAIAJgCIABABIgBAAIgEAGIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIABABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAAAIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAACIABABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAAAIAFgBIACACIgCAAIgDAGIAHALIAJANIAKAMIAYAjIACACIAEAAIAAAAIAiAAIABAAIABAAIABAAIACAAIADAAIABABIAHgBIABABIgCAAIgCADIAAACIACABIgBAAIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIACgBIABACIgCAAIgBABIAAACIAAABIAAAAIAAABIAAABIAAABIgBAAIgBAAIgBAAIgBAAIgBABIABADIgGAGIgDAFIAAgCIgBABIgEADIgFAGIgGAEIgEAFIgMAJIABABIABABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIABABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIgBABIAAABIAAAAIgBABIABABIAAgBQAAgBABAAQAAAAAAAAQAAAAABABQAAAAAAABIABAAIAGAIQANAPAPAOIAIAIIACADIAOANIAGAIQAFAFAEAEIABABIAGgBIACABIgCAAIAAACIAAAAIgBABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIABAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIgBAAIAAACIAAABIAAABIAAAAIABABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIABABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIgBABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIgBABIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIABABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAEIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIgBABIAAABIAAAAIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIABACIAAABIAAABIAAACIAAABIAAACIAAACIgBABIAAABIgBACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIABABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAABIAAABIAAACIAAABIAAACIAAACIAAAAIAAAAIABAAQACADgEAGIgIAKIgBADIAAgCIhBBcIgDACQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAIAAgBIgBAEIAAABIhCABIgOAAIgMAAIglAAIkdAAIhIgBIgoAAIgVAAIgNgBIgIAAIgFgBIgCAAIgBgCIgDAAIgCAAIAAAAIAAAAIAAACIgBABIAAABIgBABIgBABIgCgBgAkTGCIgqAvIgLAMIgCADIAAAAIAAABIAAACIAAAAIAAACIAAACIAAAAIAAABIABABIAAACIAAAAIABACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIABABIAAABIABABIAAACIABABIAAAAIAAACIABABIAAABIAAABIAAACIgBABIAAAAIAAACIAAABIgBABIAAABIAAACIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIgBABIAAABIAAABIABACIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIABABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAFAAIADABIAGAAIAHAAIAOgBIAUAAIAqAAIBIAAIEbAAIAAgBIAiAAIAQAAIAKAAIA+ABIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgCIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgBIAAgBIAAgCIgBgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIABgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIABgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIABgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIABAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIABgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAAAIAAgBIgFgGIgCgBQgCABgDgDIgFgFIgIgFIgYgXQgDgFgCAAIgDgEIgFgEIgQgRIgBAAIgBABIgCgEQgDgGgEAAIAAgCIAAAAIgDgGQgBgEADgCIABgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAAAIAAgCIABgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIABAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIABAAIACgBIADgBIAAAAIABABIABAAIAAABIAAgBIAEAAIARAAIABAAIAEAAIAFAAIACAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIABgCIgIAAIgEAAIgWAAIgCgBIgCgBIgDgBIgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQAAgBgBAAIgCgEIguhDIgEgGIgBgCIAAAAIgBgCIgBgBIAAgBIgBAAIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIgCgBIAAgBIAAgCIgBgBIAAgBIABgBIAAgBIAAAAIgCgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIgBAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIABgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIABgCIAAgBIAAAAIAAgCIABgBIAAgCIAAAAIAAgCIACgBIAAgBIAAAAIgWAAIgIAAIgFgBIgBAAIgCAAIgBAAIgCAAIAAAAIgCgBIgBgCIgBAAIAAgCIAAgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIgBgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIABgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIABgBIAAgBIAAgCIAAAAIAAgBIABgBIAAgCIAAAAIgBgCIgBgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIgBAAIgDABIgSAAIgagBIgCAAIgIAAIAAAAIgCABIgCgBIgCAAIAAACIgGgCIgBAAIAAAAIAAgCIgBAAIgBgBIAAgBIAAgBIAAgBIACgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIABgBIAAgCIAAgBIgBAAIAAgCIgBgBIAAgCIAAAAIAAgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIABgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIABgBIAAAAIgGAAIgFAAIgNAAIgNAAIgEAAIgEgBIgCgBIgCAAIAAgCIgBAAIAAgCIAAgCIAAAAIABgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgEIAAgCIAAgBIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgBIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgBIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIgBgCIAAgCIAAgCIAAgDIAAgCIABgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgBIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgBIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgCIAAgDIABgCIAAgBIAAgCIAAgDIAAgCIAAgBIABgCIAAgDIAAgCIgtAAIAAABIAAADIAAACIACACIAAACIAAACIAAACIAAACIAAACIABACIAAADIABACIABABIAAACIAAADIAAACIgBABIgBADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIABACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAACIAAADIAAACIAAABIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAABIAAACIAAADIAAACIAAABIAAACIAAACIAAAEIAAABIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAABIAAADIAAADIAAACIAAABIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIgBADIAAABIAAACIAAADIAAACIAAABIgBACIAAACIAAADIgCACIAAACIgBACIAAAAIAAACIAAACIAAAAIgBABIgBAAIgBABIAAACIgHAAIgIAAIgDAAIAAgBIgBAAIgCAAIgCACIABABIABACIAAAAIABACIAAAAIAAABIgBABIgBACIgBACIAAAAIAAACIAAABIAAAAIAAABIAAACIABABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIABABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIgBABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIABABIABABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIABABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIgBACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIgBABIAAABIAAACIAAAAIgBABIgBABIAAACIgBAAIgBAAIgCACIgCgCIgBgBIAAgBIgBAAIgHAAIgBAAIgsgBIABABIABABIABABIAAACIABACIAAAAIgBABIAAABIgBABIgBABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIABAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIgBABIgBABIgBABIgFAAIgBAAIgBAAIgDAAIgNAAIgFgBIAAABIAAACIAAABIAAACIAAAAIAAACIAAABIABAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIABABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIgBABIAAABIAAABIgBABIgBACIAAAAIgCACIgDAGIguBDIgDAEQAAAAgBABQAAAAAAAAQgBAAAAgBQAAAAgBgBIgBAAIgCABIgCABIgDABIgaAAIgHAAIAAACIAAAAIAAACIAAABIABAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIABAAIAFAAIAEAAIATAAIADAAIAAABIAAgBIABAAIABgBIABAAIADABIABABIABAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIABAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIABABIAAACIAAAAIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIABACIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIgBABIAAABIgBAAIAAACIAAACIgBAAIAAACIAAABIgCABIAAAAIgBAAIgBABgAEGRSIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIgBACIAAAAIAAABIAAABIgBABIAAABIgBACIAAACIAAAAIAAABIgBABIAAABIgBABIAAABIgBACIAAABIABAAIABgBIABgCIABAAIAJgZIAEAAIABAAIgIASIATgYIArg9IAAgBIAFgRIAAgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIABgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIABgCIAAgBIABgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIABgBIgBgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIgBgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgIIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIABgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIgBAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIgBgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIgEAEIgvAkIgDACIgEAEIgGAEIgFAGIgEAGIgDgBIgBAEQABADABADIADAEIAAAAIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIABABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAALIAAACIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIAAABIAAABIAAABIAAAAIAAACIAAAAIAAABIAAABIAAABIAAAAIAAABIAAAAIgBAAIgBAAIgBAAIAAABgADjFEIgYAWIgRARIgEAHIAEAEIAFAEIAdAfIAJAIIAJAKIAGAEQADACABACIACACIAEACIAEACIAAABIALgOIADADIAWgTIAUgPIABAAIAPgVIAAAAIgJgIIgIgKIgtguQgJgKgDgHIgCADQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgCACIgDACIgEAHIgBgCgAFLGAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAABAAIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAgACzDxIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIACABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAABIAPgUIADADIApgjIAEgDIACgCIAEgGIgCAAIACgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIgNAKIgFAHIgEACIgGAJIgCgBIAAABIgCAAIgDABIgCAAIgBgBIgBAAIAAgBIgBgBIgBABIAAABIAAAAIAAABIgLgIIgBAHIgSAAgAEVCgIgDADIgDABIgEADIgOANIgFAEIgMAMIgEADIgCACIgHAKIAAABIgBABIgBABIgBABIABABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAAAIACgCIAPgTIABAFIADgDIABgFIAEACIALgJIAZgWIAEgFIABAAIAFgFIAAgDIgCAAIACAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgCIAAAAIAAgBIAAgBIAAgBIAAAAIgBABIAAADIgFAFIgHALIAAgBIgBgCIgBAAIAAAAIgBABgAkZDNIACAAIADABIADABIAAABIAEgKIAWgfIgCAAIgBABIAAAAIgCABIgBAAIgKAAIgOAAIgOAQIgSAUIAGAAIAAAAIAWAAgADHDNIADAAIAAAAIAJAAIADAAIABABIACgCIAEgFIAKgMIABACIAOgMIAPgOIABAAQACgDAFgCIADgDIAOgMIAFgGIgCAAIgCABIgBAAIgBAAIgBAAIglgBIgCAEIAAAAIgDADIgFAJIgEAAIgYAWIgFACIgZAaIgCACIACAAIAUAAgAB8CEIgBABIAAABIAsBAIACAFIARgWIABADIABAAIAcgZIAIgHIAOgNIADgCIgCgCIgWghIgDgGIgVgeIgBgCIgBABIgEAEIAAAAIgGAJIgCgBIgJAFIgWAUIgLAKIgCACIgFAFIgDADIgHAKIgBAAIAAAAIABAAgAB1hwIgBABIAAABIgBABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIABABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIABACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAAAIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIgBAAIAAACIAAABIAAABIAAABIAAAIIAAABIAAABIAAABIAAABIgBABIAAACIAAAAIABACIAAABIAAACIAAAAIAPgTIACACIAHgHIAGgEIADgCIAFgFIAFgEIAFgFIACgBIACgCIAGgEIACgCIAGgEIABgBIAGgIIgBAAIAAgCIAAgBIgBAAIAAAAIgBgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAAAIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIgCAEQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABIgBACIgCADIgHAGIgBAAgABph6IAEAAIACABIABABIAKgOIAIABIgCADIACgBIAOgPIAFgDIAFgFIAGgEIAFgFIABgCIACgBIAQgVIgVAAIgGgBIgFAHIgCADQgEAFgFADIgxApIgFADIgBABIgCADIADAAIAAAAIASAAgACDnYIgBACIgOAPQgHAIgLAJIgRAQIgEAEIAAABIAAABIgCABIgBABIgBABIAAABIAAACIAAABIABACIABAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIABABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAABIABABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIAAABIAQgTIAAAHIAJgJIAkgcIAAgBIAKgNIAAgBIAAAAIgCAAIACgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgBAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIgBgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAABIgBAFIgBAAIgBgBIgKAOIAAgFIAAAAIgBAAgAjGiAIAEABIAAgBIAAgBIAAgBIgBgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgBIgCADIgCAEIgDAFIgCAGIgEADIgCACIADAAIAAgBIAJAAgACWi5IABgCIAEgBIgCAAIgCAAgAC8i/IAAAAIgBAAIABAAgABWnwIg6A1IgUAUIgCACIgBAAIgBACQAFAAAFgEIADgBIAYAAIARAAIAEAAIAFABIAAgBIACABIABABIAPgUIADABIAAAAIAAAGIgBABIABgBIAJgJIAHgHIAEgEIAFgDIABgDQADgEAEgDIALgNIADgBIABABIAFgIIgBAAIABAAIABgCIAAgCIABgBIAAgBIABgCIgBAAIgEAAIgIAAIgjAAIgCAAIgBAAIgBAAIAAAAIgBAAIgCAAIgBgBIgCACgAiUnTIgJAMIgGALIgIAJIgHAJIABABIAAABIAAABIAoAAIADABIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIgEAAIgIAAQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAgAgCtQIACAEIAAACIAAACIAAABIAAABIAAAAIAAACIABABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAAAIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIgBABIAAABIAAACIAAAAIAAACIgBABIgBAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIgBACQgBAEABADIAggpIAAAJIgMASIAQgQIAJgLIATgRIAJgHIAEgEIAAgDIADgDIgDAAIAEgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIgBgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgDIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIABgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgDIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgBIAAgCIABgBIAAgDIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIABgCIAAgBIgUAQIgDAFIgDAAIgJAHIgtApIgGAKIADgCgACSnqIABAAIAAgBgAh3tRIAAABIACAAIAFAAIACAAIgBAAIAAgCIAAgEIAAgCIAAgBIAAgCIgBgDgAANuPIgSASIgRASIgDACQgFAGgEACIAAACIgCAFIAFAAIANAAIAFAAIACAAIAEAAIAMgSIAGABIAbgZIATgPIAMgQIgYAAIgNAAIgLASIAAAAIgFgBgAgU0mIgIAJIgEACIgCACIAAABIgKAPIABACIAAACIAAADIABACIAAABIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIABACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAABIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIABACIAAADIAAACIAAACIgBACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAABIAAACIAAADIAAACIAAABIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAABIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAACIAAADIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAACIAAADIAAACIAAABIAAACIAAADIAAACIAAABIAAACIAAAEIAAACIAAABIAAACIAAACIAAADIAAACIAAABIAAADIAAACIAAACIAAACIgBACIAAABIACAAIgCACQgCADACADIAAABIAAAAIAAADIAAACIAAABIAAACIAAAFIAAABIAAADIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAFgKIACgDIACAAIADgDIAAACIAGABIArgsIADgHIABgGQgBgEgBgBIgBgBIABgBIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIABgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAAAIgBABIgLAQIAAgEIgFAAgABIufIADgDIABAAIgBgBgAAWuhIACgCIgCAAIAAACgAha0dIgIAMIAuAAIADgBIAAAAIAAAAIAHgHIACgDIABAAIAQgNIABgCIACgCIAHgFIAKgIIABgBIAUgRIAGgJIgWAAIgXAAIgBABIgEAEIgFACIgGAGIgBACIgHAJIgGAAgAEZUYIACgGIAAAEIgBACIgBAAgAjzRWIgCgCIAAAAIgBgCIAAgBIAAgBIAAgCIgCAAIgCgBIgBgBIgBgCIAAgBIAAgBIABgBIABgBIABgBIABAAIABAAIABAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIABgBIAAgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIAAgBIAAgBIgBgCIAAgCIgBgBIAAgBIAAgCIACAAIACAAIAAAAIAEgBIAEAAIARgBIAWAAIAMAAIADABIADABIABAAIABABIABAAIACABIABABIAAABIAAACIAAABIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIABAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIABAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBABIgBABIAAABIAAACIgCABIAAAAIgGABIgFABIgzgBIAAABIAAABIAAABIAAABIAAABIgCABIgBABIAAACIgFgBgAjtPrIAAABIAAACIAAAAIAAABIAAABIAAACIABABIAAABIAAACIAAAAIAAABIABABIAAACIAAAAIAAACIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAAAIAAACIAAAAIAAACIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAzAAIADAAIABAAIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIABgCIAAgBIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAAAIABgBIAAgBIAAgCIAAgCIgBACIgDAAIgDABIgMAAIgWAAIgSgBIgBAAgAB3KjIgDgCIgBAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIABgCIAAgBIgBgBIAAgBIAAgBIAAgBIABgBIACgCIACAAIABABIABABIAAABIABACIAAABIABAAIAAAAIACAAIACAAIAEAAIAJAAIAWAAIAKAAIAFAAIAAgBIAAABIAAgBIACgBIAAgBIAAgBIAAgBIABgBIABAAIABABIABABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIABACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAAEIgBABIgCABIgCAAIgBAAIgCgBIgCABIgCAAIgEAAIgHABIgZAAIgGABIgMAAIgCAAgAB9JPIgBAAIAAACIABABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAHAAIAHAAIAZAAIAHABIAEgBIABAAIACAAIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIgCAAIgFgBIgIAAIgXAAIgJAAIgFgBIgCAAIAAABgAjxKCIgCgBIAAgCIgBAAIAAgCIAAgBIAAAAIgDAAIgCAAIgDAAIgCABIgYAAIgNAAIgBgBIgBgCIgBAAIAAgCIAAgBIAAgCIABAAIABgBIABgBIACAAIAAgBIABAAIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIABgBIABgBIABAAIABAAIACAAIABACIABAAIAAACIAAAAIADAAIACgBIACgBIADAAIAJAAIAIAAIAJgBIAJAAIAAgBIADAAIADACIABAAIAAACIABABIAAAAIAAACIgBABIgBACIgBAAIgFAAIgBAAIAAACIAAABIABAAIAAACIAAABIABACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIABABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIgCABIAAACIgCAAIgEAAgAkZIyIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIgBABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIgBABIAAACIAAAAIAAACIAAABIAAACIAAAAIAFAAIAWABIADAAIACABIADAAIAEAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIABgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIgBAAIgJAAIgIAAIgLgBIgBABIgBABIgDAAIgDgBIAAAAgAArIbIgJAAIgDgBIgBAAIgBAAIgDAAIgCAAIgBAAIgDAAIgBABIgCAAIgEAAIAAgBIgBgCIgBAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIABAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIABgBIABAAIAAAAIAAgCIAAAAIAAgCIAAgBIAAgCIABAAIABgCIAEAAIACAAIAQAAIAQAAIANAAIABABIAAgBIACAAIADABIAEABIADAAIABACIABABIAAABIgBABIgBABIgBABIgCAAIgCABIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAACIAAABIAAABIAAABIAAABIABAAIABABIAAABIABACIAAABIAAABIgBABIAAABIgBABIgBABIggAAgAAdIQIACAAIAAABIADAAIALgBIAXAAIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIgKAAIgQAAIgPABIgGgBIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIACAAIACgBIAEAAgAjZF+IgCgBIAAgCIAAgBIAAgBIgDgBIgBgBIgBAAIgBgCIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgCIABgBIAAgBIAAgBIgBgBIAAgBIAAgBIAAgBIABgCIABgBIABAAIAAAAIABAAIAAAAIABgCIABAAIACAAIAAAAIADAAIAAAAIABABIACAAIADgBIANAAIATAAQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAIALAGIADACIgBAAIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAACIAAAAIAAABIAAABIAAABIgCABIAAACIgDAAIgCAAIgBgCIgCACIgDAAIgDAAIgIABIgLABIgYgBgAjWEfIAAAAIAAACIAAACIgBAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIABABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAACIgBABIAAAAIAWAAIALAAIAIABIADgBIACAAIAAAAIABAAIABAAIAAAAIgBgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIABAAIAAgCIAAgCIAAgBIAAgBIAAAAIAAgCIAAAAIAAgCIAAgCIAAgBIABgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIgFAAIgYAAIgLAAIgDAAIgGgBIABABgAAyFrIgBgCIgBgCIgBAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAAAIAAgBIAAgCIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAAAIAAgBIAAgBIAAgCIABAAIAAgCIAAgCIAAAAIAAgCIAAAAIAAgCIABAAIABAAIABAAIAAgBIADABIAAAAIACAAIACgBIAHAAIATAAIAAgBIAQAAIAAAAIACgCIAAAAIAAAAIADAAIABACIACACIAAAAIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIABABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIACAAIgBAGQgJAAgFAEIgIAAIgLAAIgJAAIgBgBIgBAAIgCAAIgEAAIgDAAIAAAAIAAABIgBABIgBABIgBACIgFAAgAA5EbIABABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAACIAAAAIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIACAAIABgBIACAAIACAAIAAgBIACABIABAAIACAAIAIAAIANgBIAHAAIAAAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIABAAIAAgBIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAAAIAAgBIAAgCIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgCIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgRAAIgRAAIgHAAIgCgBgAA3BkIgCgCIgGAAIgJAAIgEAAIgDAAIgGgBIgIgBIgCAAIAAgBIgBgBIAAgBIABgCIAAgBIABAAIABAAIAIAAIAGgBIADgBIAFAAIAIAAIAAAAIAEAAIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIABAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIABgBIAAgBIAAgBIAAgCIAAgBIgBAAIgSAAIgDAAIgCAAIgEAAIgCAAIgDAAIgDAAIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIACAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIgCABIAAABIgCABIAAABIgCABIgBgCIgCAAIgBgBIAAgCIgBAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIAAgBIAAgBIACgBIAAAAIAAAAIACAAIAAABIACgBIADgBIACgBIACAAIACAAIADAAIACgBIADAAIAAAAIATAAIACAAIACABIABABIABABIAAAAIABACIABABIAAABIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIABABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIABAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIACACIABABIABACIAAAAIAAACIgBABIgBAAIgCACIgCAAIgCACIgEAAgAhyiBIAAAAIgCgCIAAAAIgGAAIgGgCIgBAAIgFAAIgBAAIgBACIgBABIgCABIgEAAIgCgCIgBgCIgBAAIAAgCIAAgBIAAgBIAAAAIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIABgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIABAAIAAgCIABgBIgFgBIgCAAIgBgCIgBAAIAAgCIAAAAIAAgCIAAgCIACAAIABgCIACAAIAZAAIADAAIADAAIABAAIABAAIACAAIAAgBIACABIABABIAAABIABABIACACIAAABIABACIAAAAIAAABIABABIAAABIAAABIgBACIgBACIAAAAIAAABIgBABIAAABIAAABIAAACIAAACIAAAAIAAACIAAAAIAAABIAAABIAAACIAAACIAAAAIAAACIAAABIAAAAIAAABIAAACIAAABIAAABIAAACIAAABIAAABIABAAIAAACIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIABAAIACAAIACACIAAABIACABIAAACIAAAAIgBABIgBABIAAACIgBAAIgBAAIgCACIgEAAIAAABIgCABIgDAAgAiHi7IAAACIAAABIgBABIAAABIAAABIAAABIAAABIAAABIABACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAACIAAAAIAAABIAAABIAAACIAAAAIAAACIAAACIAAABIAAAAIAAABIAAACIAAAAIAAACIABgBIACgBIADAAIACAAIAGAAIADAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAAAIAAgBIAAgBIAAgCIACAAIABgCIAAgCIgCAAIgBAAIgGABIgLAAIgBABgAhImlIgCAAIgBgBIgBgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIgBgCIgBgBIAAgBIAAgBIAAgBIABgBIAAgBIABgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgBIAAgCIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIAAgBIAAgCIAAAAIAAgCIAAgBIAAAAIAAgCIgCAAIgCgBIgBgCIAAAAIAAgCIABgBIABgBIABAAIACAAIAEAAIAAgBIACABIACgBIACAAIACAAIAAAAIAPAAIABAAIAAAAIADAAIADABIAAACIABABIAAABIgBABIAAACIgCAAIgBABIAAABIABABIABACIABAAIAAACIAAABIAAACIAAAAIAAABIABACIAAAAIAAACIABABIAAACIAAAAIAAACIAAABIAAAAIgBACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIABABIAAABIABABIABABIgBABIgBABIgCABIgBABIAAAAIgFAAIAAAAIgIAAIgEAAIgGAAIgBAAIAAAAIgCACIgDgCgAhCo5IAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAACIAAAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAAAIAAACIAAABIAAACIAAAAIAAABIAAACIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIgBABIAAABIABABIAAABIAAACIAAABIACAAIABAAIABgBIACAAIAFAAIADAAIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAAAIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIABgBIAAgBIAAgCIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgCIAAAAIABgCIgBgBIAAgBIAAgBIAAgBIgMAAIgCAAg");
	this.shape_2.setTransform(2.3,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#708F9B").s().p("ABBCFIACAAIABAAIgDABIgBACgAg3iHIADACIgQAQg");
	this.shape_3.setTransform(10.9,-33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F6872").s().p("ADkRGIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIAAgBIAAgCIABgBIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIgBAAIAAAAgADeDeIADgFIAAABIAAABIAAAAIAAABIAAABIgBABIAAAAIAAABIAAABQAAgBAAAAQgBAAAAgBQAAAAgBAAQAAAAAAAAgAAUkmIAAABIgCABgAgUpVIAAAAIgBABgAjevxIgEAAIgCAAIAAgCIAHgMIABACIAAACIAAACIAAACIAAADIAAACIABABIgDAAgAgixFIABABIAAAAIgEADg");
	this.shape_4.setTransform(13.2,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.7,-139,68,275);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-886,-613);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-886,-613,1772,1226);


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


(lib.shade_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-240,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-116,480,231);


(lib.screen_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#333333"],[0.471,0.859],-1.7,50.7,0,-1.7,50.7,691.1).s().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.7,-284.9,767.4,569.8);


(lib.repellentgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-63.2,-103.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-103.1,126,206);


(lib.planet_stormalot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap10_1();
	this.instance.parent = this;
	this.instance.setTransform(-25,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25,-29,262,262);


(lib.lit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,255,0,0.498)").s().p("ABDApIidgGQgJAAgIgGQgIgGgCgJQgDgJADgIQADgJAHgGIAWgQQAJgHALABICcAHQAKAAAHAGQAIAGADAJQACAJgDAJQgDAJgIAFIgWAQQgIAFgJAAIgBAAgAhPgaIgWAQQgFAEgCAGQgCAFACAGQACAGAFAEQAFAEAHAAICcAGQAHAAAFgDIAWgQQAGgEACgGQACgFgCgGQgCgGgFgEQgFgEgGAAIidgHIgBAAQgGAAgGAEg");
	this.shape.setTransform(13,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,255,0,0.745)").s().p("ABDAfIidgGQgGAAgFgEQgFgEgCgGQgCgGACgFQACgGAFgEIAWgQQAGgFAHABICdAHQAGAAAFAEQAFAEACAGQACAGgCAFQgDAGgFAEIgWAQQgFADgGAAIgBAAgAhJgSIgWAQQgCACgBACQgBADABADQABADACACQADACADAAICcAGQAEAAACgBIAWgQQADgCABgCQABgDgBgDQgBgDgCgCQgDgCgDAAIicgHIgBAAQgDAAgDACg");
	this.shape_1.setTransform(13,5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.247)").s().p("ABCAzIicgGQgNAAgKgIQgKgIgEgMQgEgMAEgLQAEgMAKgIIAWgQQAMgJAOABICcAHQANAAAKAIQALAIADANQAEAMgFALQgEAMgKAIIgWAPQgLAHgMAAIgCAAgAhVgiIgWAQQgHAGgDAJQgDAIACAJQADAJAIAGQAIAGAJAAICcAGQALABAIgGIAWgQQAIgFADgJQADgJgDgJQgCgJgIgGQgHgGgKAAIidgHIgBAAQgKAAgIAGg");
	this.shape_2.setTransform(13,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,0,0.996)").s().p("ABDAVIicgGQgDAAgDgCQgCgCgBgDQgBgDABgDQABgCACgCIAWgQQADgCAEAAICcAHQADAAADACQACACABADQABADgBADQgBACgDACIgWAQQgCABgDAAIgBAAg");
	this.shape_3.setTransform(13,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,10.3);


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


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.596)").s().p("Ak0E1Qh/iBAAi0QAAizB/iBQCBh/CzAAQC0AACBB/QB/CBAACzQAAC0h/CBQiBB/i0AAQizAAiBh/gAjsjsQhjBjAACJQAACLBjBjQBjBhCJABQCLgBBjhhQBhhjABiLQgBiJhhhjQhjhjiLAAQiJAAhjBjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.396)").s().p("Al7F8QidieAAjeQAAjdCdieQCeidDdAAQDeAACeCdQCdCeAADdQAADeidCeQieCdjeAAQjdAAieidgAk0k0Qh/CBAACzQAAC0B/CBQCBB/CzAAQC0AACBh/QB/iBAAi0QAAizh/iBQiBh/i0AAQizAAiBB/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.196)").s().p("AnCHDQi6i7AAkIQAAkHC6i7QC7i6EHAAQEIAAC7C6QC6C7AAEHQAAEIi6C7Qi7C6kIAAQkHAAi7i6gAl7l7QidCeAADdQAADeCdCeQCeCdDdAAQDeAACeidQCdieAAjeQAAjdidieQieidjeAAQjdAAieCdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.796)").s().p("AjsDuQhjhjAAiLQAAiJBjhjQBjhjCJAAQCLAABjBjQBhBjABCJQgBCLhhBjQhjBhiLABQiJgBhjhhgAililQhFBFAABgQAABhBFBFQBFBFBgAAQBhAABFhFQBFhFAAhhQAAhghFhFQhFhFhhAAQhgAAhFBFg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AilCmQhFhFAAhhQAAhgBFhFQBFhFBgAAQBhAABFBFQBFBFAABgQAABhhFBFQhFBFhhAAQhgAAhFhFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-63.7,-63.7,127.5,127.5), null);


(lib.jj_p10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#352D2A").s().p("AwIAgIAAg/MAgRAAAIAAA/g");
	this.shape.setTransform(0.8,-3.3,0.56,0.56,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#352D2A").s().p("AwUAKIAAgTMAgpAAAIAAATg");
	this.shape_1.setTransform(0.7,-13,0.56,0.56,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#352D2A").s().p("AwjAFIAAgJMAhHAAAIAAAJg");
	this.shape_2.setTransform(0.3,-26,0.56,0.56,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#352D2A").s().p("Av+AKIAAgTIf9AAIAAATg");
	this.shape_3.setTransform(0.4,-33.4,0.56,0.56,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#352D2A").s().p("AguhrIAEgKIBZDdIgEAOg");
	this.shape_4.setTransform(53.2,-13.3,0.56,0.56,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#352D2A").s().p("AgshcIAEgNIBUDHIgBAMg");
	this.shape_5.setTransform(53,-26.8,0.56,0.56,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#352D2A").s().p("AguBeIBdjTIgCAXIhWDUg");
	this.shape_6.setTransform(53.1,-12.7,0.56,0.56,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#352D2A").s().p("AguBSIBdi3IgFApIhECig");
	this.shape_7.setTransform(53,-26.2,0.56,0.56,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#352D2A").s().p("AgtAUIAAgnIBbAAIAAAng");
	this.shape_8.setTransform(53,-20.5,0.56,0.56,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#352D2A").s().p("AgvAbIAAg1IBfAAIAAA1g");
	this.shape_9.setTransform(53.3,-6,0.56,0.56,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#352D2A").s().p("AgvAUIAAgnIBfAAIAAAng");
	this.shape_10.setTransform(52.8,-33,0.56,0.56,-1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#352D2A").s().p("AgBEKIAAoSIADAAIAAISg");
	this.shape_11.setTransform(55.6,-19.4,0.56,0.56,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#352D2A").s().p("AgBEKIAAoSIADAAIAAISg");
	this.shape_12.setTransform(50.5,-19.3,0.56,0.56,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#352D2A").s().p("Ag6hqIAEgLIBxDdIgFAOg");
	this.shape_13.setTransform(-50,-11.7,0.56,0.56,-1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#352D2A").s().p("Ag3hcIAEgNIBrDGIgCANg");
	this.shape_14.setTransform(-50.2,-25.3,0.56,0.56,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#352D2A").s().p("Ag6BeIB1jTIgCAXIhtDUg");
	this.shape_15.setTransform(-50.2,-11.2,0.56,0.56,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#352D2A").s().p("Ag6BRIB1i2IgGAoIhVCjg");
	this.shape_16.setTransform(-50.2,-24.6,0.56,0.56,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#352D2A").s().p("Ag5AUIAAgnIBzAAIAAAng");
	this.shape_17.setTransform(-50.2,-18.9,0.56,0.56,-1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#352D2A").s().p("Ag8AbIAAg1IB5AAIAAA1g");
	this.shape_18.setTransform(-50,-4.4,0.56,0.56,-1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#352D2A").s().p("Ag8AUIAAgnIB5AAIAAAng");
	this.shape_19.setTransform(-50.4,-31.4,0.56,0.56,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#352D2A").s().p("AgCEKIAAoTIAFAAIAAITg");
	this.shape_20.setTransform(-47,-17.8,0.56,0.56,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#352D2A").s().p("AgCEKIAAoSIAFAAIAAISg");
	this.shape_21.setTransform(-53.4,-17.7,0.56,0.56,-1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#352D2A").s().p("AhvhqIAJgLIDWDdIgJAOg");
	this.shape_22.setTransform(-38.6,-11.9,0.56,0.56,-1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#352D2A").s().p("AhphcIAIgNIDLDGIgDANg");
	this.shape_23.setTransform(-38.8,-25.5,0.56,0.56,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#352D2A").s().p("AhvBeIDfjTIgEAXIjQDUg");
	this.shape_24.setTransform(-38.9,-11.4,0.56,0.56,-1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#352D2A").s().p("AhvBRIDfi2IgLAoIijCjg");
	this.shape_25.setTransform(-38.8,-24.8,0.56,0.56,-1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#352D2A").s().p("AhsAUIAAgnIDZAAIAAAng");
	this.shape_26.setTransform(-38.8,-19.1,0.56,0.56,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#352D2A").s().p("AhyAbIAAg1IDlAAIAAA1g");
	this.shape_27.setTransform(-38.6,-4.6,0.56,0.56,-1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#352D2A").s().p("AhyAUIAAgnIDlAAIAAAng");
	this.shape_28.setTransform(-39.1,-31.6,0.56,0.56,-1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#352D2A").s().p("AgFEKIAAoTIAKAAIAAITg");
	this.shape_29.setTransform(-32.7,-18.1,0.56,0.56,-1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#352D2A").s().p("AgFEKIAAoSIALAAIAAISg");
	this.shape_30.setTransform(-44.9,-17.8,0.56,0.56,-1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#352D2A").s().p("Ah/hrIAJgKID2DdIgLAOg");
	this.shape_31.setTransform(42.1,-13.2,0.56,0.56,-1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#352D2A").s().p("Ah4hcIAJgNIDpDHIgFAMg");
	this.shape_32.setTransform(41.8,-26.7,0.56,0.56,-1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#352D2A").s().p("Ah/BeID/jTIgEAXIjuDUg");
	this.shape_33.setTransform(41.7,-12.6,0.56,0.56,-1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#352D2A").s().p("Ah/BSID/i3IgNApIi6Cig");
	this.shape_34.setTransform(41.8,-26,0.56,0.56,-1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#352D2A").s().p("Ah8AUIAAgnID5AAIAAAng");
	this.shape_35.setTransform(41.7,-20.3,0.56,0.56,-1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#352D2A").s().p("AiCAbIAAg1IEFAAIAAA1g");
	this.shape_36.setTransform(42,-5.8,0.56,0.56,-1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#352D2A").s().p("AiCAUIAAgnIEFAAIAAAng");
	this.shape_37.setTransform(41.5,-32.9,0.56,0.56,-1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#352D2A").s().p("AgFEJIAAoRIALAAIAAIRg");
	this.shape_38.setTransform(48.8,-19.3,0.56,0.56,-1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#352D2A").s().p("AgFEJIAAoSIALAAIAAISg");
	this.shape_39.setTransform(34.8,-19,0.56,0.56,-1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#352D2A").s().p("AiqhrIANgKIFIDdIgOAOg");
	this.shape_40.setTransform(23,-12.7,0.56,0.56,-1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#352D2A").s().p("AiihcIANgNIE3DHIgGAMg");
	this.shape_41.setTransform(22.8,-26.2,0.56,0.56,-1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#352D2A").s().p("AiqBeIFVjTIgGAXIk+DUg");
	this.shape_42.setTransform(22.5,-12.1,0.56,0.56,-1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#352D2A").s().p("AirBSIFXi3IgRApIj6Cig");
	this.shape_43.setTransform(22.7,-25.5,0.56,0.56,-1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#352D2A").s().p("AimAUIAAgnIFNAAIAAAng");
	this.shape_44.setTransform(22.6,-19.8,0.56,0.56,-1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#352D2A").s().p("AiuAbIAAg1IFdAAIAAA1g");
	this.shape_45.setTransform(22.9,-5.3,0.56,0.56,-1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#352D2A").s().p("AiuAUIAAgnIFeAAIAAAng");
	this.shape_46.setTransform(22.4,-32.4,0.56,0.56,-1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#352D2A").s().p("AgHEJIAAoSIAPAAIAAISg");
	this.shape_47.setTransform(32,-18.9,0.56,0.56,-1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#352D2A").s().p("AgHEJIAAoSIAPAAIAAISg");
	this.shape_48.setTransform(13.3,-18.5,0.56,0.56,-1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#352D2A").s().p("AiqhqIANgLIFIDdIgOAOg");
	this.shape_49.setTransform(1.6,-12.5,0.56,0.56,-1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#352D2A").s().p("AihhcIAMgNIE4DHIgGAMg");
	this.shape_50.setTransform(1.4,-26,0.56,0.56,-1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#352D2A").s().p("AiqBeIFVjTIgFAXIk/DUg");
	this.shape_51.setTransform(1.1,-11.9,0.56,0.56,-1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#352D2A").s().p("AiqBSIFWi3IgRApIj6Cig");
	this.shape_52.setTransform(1.4,-25.3,0.56,0.56,-1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#352D2A").s().p("AimAUIAAgnIFNAAIAAAng");
	this.shape_53.setTransform(1.2,-19.6,0.56,0.56,-1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#352D2A").s().p("AivAbIAAg1IFeAAIAAA1g");
	this.shape_54.setTransform(1.5,-5.2,0.56,0.56,-1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#352D2A").s().p("AivAVIAAgpIFfAAIAAApg");
	this.shape_55.setTransform(1,-32.2,0.56,0.56,-1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#352D2A").s().p("AgHEKIAAoSIAPAAIAAISg");
	this.shape_56.setTransform(10.6,-18.7,0.56,0.56,-1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#352D2A").s().p("AgIEJIAAoSIARAAIAAISg");
	this.shape_57.setTransform(-8.1,-18.3,0.56,0.56,-1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#352D2A").s().p("AiqhrIANgKIFIDdIgOAOg");
	this.shape_58.setTransform(-20.2,-12.3,0.56,0.56,-1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#352D2A").s().p("AihhcIAMgNIE4DHIgGAMg");
	this.shape_59.setTransform(-20.4,-25.8,0.56,0.56,-1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#352D2A").s().p("AiqBdIFVjSIgFAXIk/DUg");
	this.shape_60.setTransform(-20.7,-11.7,0.56,0.56,-1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#352D2A").s().p("AiqBSIFWi3IgSApIj6Cig");
	this.shape_61.setTransform(-20.4,-25.1,0.56,0.56,-1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#352D2A").s().p("AimAUIAAgnIFNAAIAAAng");
	this.shape_62.setTransform(-20.6,-19.4,0.56,0.56,-1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#352D2A").s().p("AivAbIAAg1IFeAAIAAA1g");
	this.shape_63.setTransform(-20.3,-4.9,0.56,0.56,-1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#352D2A").s().p("AivAUIAAgnIFfAAIAAAng");
	this.shape_64.setTransform(-20.8,-32,0.56,0.56,-1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#352D2A").s().p("AgIEJIAAoSIAQAAIAAISg");
	this.shape_65.setTransform(-11.2,-18.5,0.56,0.56,-1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#352D2A").s().p("AgIEJIAAoRIAQAAIAAIRg");
	this.shape_66.setTransform(-29.9,-18.1,0.56,0.56,-1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#352D2A").s().p("AwIAnIAAhNMAgRAAAIAABNg");
	this.shape_67.setTransform(0.5,31.9,0.56,0.56,-1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#352D2A").s().p("AwUAMIAAgXMAgpAAAIAAAXg");
	this.shape_68.setTransform(0.3,20.2,0.56,0.56,-1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#352D2A").s().p("AwjAGIAAgLMAhHAAAIAAALg");
	this.shape_69.setTransform(0,4.8,0.56,0.56,-1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#352D2A").s().p("Av+AMIAAgXIf8AAIAAAXg");
	this.shape_70.setTransform(-2.3,-0.3,0.56,0.56,-1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#352D2A").s().p("AguiAIAEgMIBZEJIgEAQg");
	this.shape_71.setTransform(52.9,20.1,0.56,0.56,-1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#352D2A").s().p("AgshuIAEgQIBUDuIgBAPg");
	this.shape_72.setTransform(52.6,3.9,0.56,0.56,-1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#352D2A").s().p("AguBwIBdj8IgBAcIhXD9g");
	this.shape_73.setTransform(52.8,20.8,0.56,0.56,-1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#352D2A").s().p("AguBiIBdjbIgFAxIhEDCg");
	this.shape_74.setTransform(52.6,4.7,0.56,0.56,-1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#352D2A").s().p("AgtAYIAAgvIBbAAIAAAvg");
	this.shape_75.setTransform(52.7,11.5,0.56,0.56,-1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#352D2A").s().p("AgvAgIAAg/IBfAAIAAA/g");
	this.shape_76.setTransform(53,28.9,0.56,0.56,-1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#352D2A").s().p("AgvAYIAAgvIBfAAIAAAvg");
	this.shape_77.setTransform(52.4,-3.5,0.56,0.56,-1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#352D2A").s().p("AgBE+IAAp7IADAAIAAJ7g");
	this.shape_78.setTransform(55.3,12.8,0.56,0.56,-1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#352D2A").s().p("AgBE+IAAp7IADAAIAAJ7g");
	this.shape_79.setTransform(50.1,13,0.56,0.56,-1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#352D2A").s().p("Ag6iAIAEgMIBxEJIgFAQg");
	this.shape_80.setTransform(-50.3,21.6,0.56,0.56,-1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#352D2A").s().p("Ag3huIAEgQIBrDuIgCAPg");
	this.shape_81.setTransform(-50.6,5.4,0.56,0.56,-1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#352D2A").s().p("Ag6BwIB1j8IgCAbIhtD+g");
	this.shape_82.setTransform(-50.5,22.3,0.56,0.56,-1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#352D2A").s().p("Ag6BiIB1jbIgGAxIhVDCg");
	this.shape_83.setTransform(-50.6,6.2,0.56,0.56,-1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#352D2A").s().p("Ag5AYIAAgvIBzAAIAAAvg");
	this.shape_84.setTransform(-50.6,13.1,0.56,0.56,-1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#352D2A").s().p("Ag8AgIAAg/IB5AAIAAA/g");
	this.shape_85.setTransform(-50.2,30.4,0.56,0.56,-1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#352D2A").s().p("Ag8AYIAAgvIB5AAIAAAvg");
	this.shape_86.setTransform(-50.8,-2,0.56,0.56,-1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#352D2A").s().p("AgCE+IAAp7IAFAAIAAJ7g");
	this.shape_87.setTransform(-47.3,14.3,0.56,0.56,-1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#352D2A").s().p("AgCE+IAAp7IAFAAIAAJ7g");
	this.shape_88.setTransform(-53.8,14.5,0.56,0.56,-1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#352D2A").s().p("AhviAIAJgMIDWEJIgJAQg");
	this.shape_89.setTransform(-38.9,21.4,0.56,0.56,-1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#352D2A").s().p("AhphuIAIgQIDLDuIgDAPg");
	this.shape_90.setTransform(-39.2,5.2,0.56,0.56,-1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#352D2A").s().p("AhvBwIDfj8IgEAbIjQD+g");
	this.shape_91.setTransform(-39.2,22.1,0.56,0.56,-1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#352D2A").s().p("AhvBiIDfjbIgLAxIiiDCg");
	this.shape_92.setTransform(-39.2,6,0.56,0.56,-1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#352D2A").s().p("AhsAYIAAgvIDZAAIAAAvg");
	this.shape_93.setTransform(-39.2,12.9,0.56,0.56,-1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#352D2A").s().p("AhyAgIAAg/IDlAAIAAA/g");
	this.shape_94.setTransform(-38.9,30.2,0.56,0.56,-1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#352D2A").s().p("AhyAYIAAgvIDlAAIAAAvg");
	this.shape_95.setTransform(-39.4,-2.2,0.56,0.56,-1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#352D2A").s().p("AgFE+IAAp7IALAAIAAJ7g");
	this.shape_96.setTransform(-33,14.1,0.56,0.56,-1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#352D2A").s().p("AgEE+IAAp7IAJAAIAAJ7g");
	this.shape_97.setTransform(-45.3,14.4,0.56,0.56,-1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#352D2A").s().p("Ah/iAIAJgMID2EJIgKAQg");
	this.shape_98.setTransform(41.7,20.2,0.56,0.56,-1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#352D2A").s().p("Ah5huIAKgQIDoDuIgDAPg");
	this.shape_99.setTransform(41.5,4,0.56,0.56,-1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#352D2A").s().p("Ah/BwID/j8IgEAcIjuD9g");
	this.shape_100.setTransform(41.4,20.9,0.56,0.56,-1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#352D2A").s().p("Ah/BiID/jbIgNAxIi6DCg");
	this.shape_101.setTransform(41.5,4.9,0.56,0.56,-1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#352D2A").s().p("Ah8AYIAAgvID5AAIAAAvg");
	this.shape_102.setTransform(41.4,11.7,0.56,0.56,-1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#352D2A").s().p("AiCAgIAAg/IEFAAIAAA/g");
	this.shape_103.setTransform(41.7,29,0.56,0.56,-1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#352D2A").s().p("AiCAYIAAgwIEFAAIAAAwg");
	this.shape_104.setTransform(41.1,-3.4,0.56,0.56,-1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#352D2A").s().p("AgFE+IAAp7IALAAIAAJ7g");
	this.shape_105.setTransform(48.4,12.9,0.56,0.56,-1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#352D2A").s().p("AgFE+IAAp7IALAAIAAJ7g");
	this.shape_106.setTransform(34.4,13.2,0.56,0.56,-1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#352D2A").s().p("AiqiAIANgMIFIEIIgOARg");
	this.shape_107.setTransform(22.7,20.7,0.56,0.56,-1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#352D2A").s().p("AiihuIANgQIE3DuIgFAPg");
	this.shape_108.setTransform(22.4,4.5,0.56,0.56,-1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#352D2A").s().p("AiqBwIFVj8IgGAbIk+D+g");
	this.shape_109.setTransform(22.2,21.4,0.56,0.56,-1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#352D2A").s().p("AiqBiIFVjbIgQAxIj6DCg");
	this.shape_110.setTransform(22.4,5.4,0.56,0.56,-1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#352D2A").s().p("AimAYIAAgvIFNAAIAAAvg");
	this.shape_111.setTransform(22.3,12.2,0.56,0.56,-1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#352D2A").s().p("AiuAgIAAg/IFdAAIAAA/g");
	this.shape_112.setTransform(22.6,29.5,0.56,0.56,-1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#352D2A").s().p("AiuAZIAAgxIFeAAIAAAxg");
	this.shape_113.setTransform(22,-2.9,0.56,0.56,-1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#352D2A").s().p("AgHE9IAAp5IAPAAIAAJ5g");
	this.shape_114.setTransform(31.6,13.4,0.56,0.56,-1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#352D2A").s().p("AgHE+IAAp7IAPAAIAAJ7g");
	this.shape_115.setTransform(12.9,13.7,0.56,0.56,-1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#352D2A").s().p("AiqiAIANgMIFIEIIgOARg");
	this.shape_116.setTransform(1.3,20.9,0.56,0.56,-1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#352D2A").s().p("AihhuIAMgQIE4DuIgGAPg");
	this.shape_117.setTransform(1,4.7,0.56,0.56,-1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#352D2A").s().p("AiqBwIFVj8IgFAcIk/D9g");
	this.shape_118.setTransform(0.8,21.6,0.56,0.56,-1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#352D2A").s().p("AiqBiIFWjbIgSAxIj5DCg");
	this.shape_119.setTransform(1,5.5,0.56,0.56,-1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#352D2A").s().p("AimAYIAAgvIFNAAIAAAvg");
	this.shape_120.setTransform(0.9,12.3,0.56,0.56,-1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#352D2A").s().p("AiuAgIAAg/IFdAAIAAA/g");
	this.shape_121.setTransform(1.2,29.6,0.56,0.56,-1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#352D2A").s().p("AiuAYIAAgvIFeAAIAAAvg");
	this.shape_122.setTransform(0.7,-2.7,0.56,0.56,-1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#352D2A").s().p("AgHE+IAAp7IAPAAIAAJ7g");
	this.shape_123.setTransform(10.3,13.5,0.56,0.56,-1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#352D2A").s().p("AgHE+IAAp7IAPAAIAAJ7g");
	this.shape_124.setTransform(-8.4,13.9,0.56,0.56,-1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#352D2A").s().p("Aiqh/IANgOIFIEKIgOARg");
	this.shape_125.setTransform(-20.5,21.1,0.56,0.56,-1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#352D2A").s().p("AiihuIANgQIE3DuIgFAPg");
	this.shape_126.setTransform(-20.8,4.9,0.56,0.56,-1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#352D2A").s().p("AiqBwIFVj8IgFAbIk/D+g");
	this.shape_127.setTransform(-21,21.8,0.56,0.56,-1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#352D2A").s().p("AirBiIFWjbIgRAxIj5DCg");
	this.shape_128.setTransform(-20.8,5.7,0.56,0.56,-1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#352D2A").s().p("AimAYIAAgvIFNAAIAAAvg");
	this.shape_129.setTransform(-20.9,12.5,0.56,0.56,-1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#352D2A").s().p("AiuAgIAAg/IFeAAIAAA/g");
	this.shape_130.setTransform(-20.6,29.9,0.56,0.56,-1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#352D2A").s().p("AivAYIAAgvIFfAAIAAAvg");
	this.shape_131.setTransform(-21.2,-2.5,0.56,0.56,-1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#352D2A").s().p("AgHE+IAAp7IAQAAIAAJ7g");
	this.shape_132.setTransform(-11.5,13.7,0.56,0.56,-1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#352D2A").s().p("AgHE9IAAp5IAPAAIAAJ5g");
	this.shape_133.setTransform(-30.2,14.1,0.56,0.56,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-35,119.3,70.1);


(lib.grid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.498)").ss(1,1,1).p("ALutRIAAhiIhjAAIhkAAIhnAAIhiAAIhpAAIhiAAIhjAAIAAn0AKLtRIAAhiIAAn4ALutRIhjAAIhkAAIhnAAIAAhiIAAn4ALuruIhjAAIAAhjALuruIAAhjAHAruIAAhjIhiAAIAAhiIAAn4AInruIAAhjIAAhiIAAn4AInruIhnAAIhiAAIhpAAIAAhjIAAhiIAAnyAInojIAAhnIhnAAIAAhkAHAojIAAhnIhiAAIhpAAIhiAAIhjAAIAAhkIAAhjIAAhiIhkAAIhmAAIhjAAIhhAAIhjAAIAAn4AInojIhnAAIhiAAIAAhnIAAhkIAAhjIhpAAIhiAAIAAhiIAAn0ALuojIAAhnIhjAAIhkAAIAAhkAKLojIAAhnIAAhkIhkAAALuojIhjAAIhkAAALuqKIAAhkACTruIAAhjIhjAAIhkAAIhmAAIAAhiIAAn0ACTruIhjAAIhkAAIhmAAIAAhjIhjAAIhhAAIAAhiIAAn2AAwojIAAhnIhkAAIhmAAIhjAAIhhAAIAAhkIAAhjIhjAAIAAhiIhiAAIhlAAIhmAAIAAn4ACTojIAAhnIAAhkACTojIhjAAIhkAAIAAhnIAAhkIAAhjIAAhiIAAn0AD1ojIAAhnIAAhkIhiAAAFeojIhpAAIhiAAAD1lcIAAhlIhiAAIhjAAIAAhiAFelcIhpAAIhiAAIhjAAIAAhlIhkAAIhmAAIhjAAIAAhiIAAhnIAAhkIAAhjIAAhiIAAn0AFelcIAAhlIhpAAIAAhiAFej6IhpAAIAAhiAFej6IAAhiACTj6IAAhiIAAhlIAAhiAAwj6IAAhiIhkAAIhmAAIAAhlIAAhiIAAhnIAAhkIhjAAIhhAAIhjAAIhiAAIAAhjIhlAAIhmAAIAAhiIhjAAIAAn4ACTj6IhjAAIhkAAIhmAAIAAhiIhjAAIAAhlIhhAAIhjAAIAAhiIAAhnIhiAAIhlAAIhmAAIAAhkIAAhjIhjAAIAAhiIhkAAIhjAAIAAn4AAwgzIAAhkIAAhjACTgzIAAhkIhjAAIhkAAIhmAAIhjAAIhhAAIAAhjIAAhiIhjAAIAAhlIhiAAIhlAAIAAhiIAAhnIAAhkIAAhjIAAhiIAAn4ACTgzIhjAAIhkAAIAAhkIAAhjIAAhiIAAhlIAAhiIhmAAIhjAAIhhAAIAAhnIhjAAIAAhkIAAhjIhiAAIAAhiIAAn4AD1gzIAAhkIhiAAIAAhjAFegzIAAhkIhpAAIAAhjIhiAAAFegzIhpAAIhiAAAFeiXIAAhjALulcIAAhlIhjAAIhkAAIAAhiAKLlcIAAhlIAAhiALulcIhjAAIhkAAIAAhlIhnAAIhiAAIAAhiALuj6IhjAAIAAhiALuj6IAAhiAHAj6IAAhiIhiAAAInj6IAAhiIhnAAIAAhlIAAhiAInj6IhnAAIhiAAAIngzIAAhkIhnAAIAAhjAHAgzIAAhkIhiAAAIngzIhnAAIhiAAALugzIAAhkIhjAAIhkAAIAAhjAKLgzIAAhkIAAhjIhkAAALugzIhjAAIhkAAALuiXIAAhjALunBIAAhiAWntRIAAhiIhiAAIhjAAIhkAAIhnAAIhiAAIhlAAIAAn2AWnruIAAhjIhiAAIAAhiIAAn4ATitRIAAhiIAAn4AVFtRIhjAAIhkAAIAAhiIAAn4AVFruIhjAAIAAhjAVFruIAAhjATiojIAAhnIAAhkIhkAAIhnAAIAAhjIAAhiIAAn4AVFojIAAhnIhjAAIhkAAIhnAAIhiAAIhlAAIAAhkIAAhjIAAhiIhiAAIAAn4AVFojIhjAAIhkAAIAAhnIAAhkIAAhjIhnAAIhiAAIAAhiIAAn4AWnojIAAhnIhiAAIAAhkAWnojIhiAAAWnruIhiAAAWnqKIAAhkAO1ruIAAhjIhlAAIhiAAAO1ruIhlAAIhiAAANQojIAAhnIhiAAAO1ojIAAhnIAAhkAO1ojIhlAAIhiAAAQXojIAAhnIAAhkIhiAAAR+ojIhnAAIhiAAAQXlcIAAhlIhiAAIhlAAIAAhiAR+lcIhnAAIhiAAIhlAAIAAhlIhiAAAR+lcIAAhlIhnAAIAAhiAR+j6IhnAAIAAhiAR+j6IAAhiAO1j6IAAhiIAAhlIAAhiANQj6IAAhiIhiAAAO1j6IhlAAIhiAAANQgzIAAhkIAAhjAO1gzIAAhkIhlAAIhiAAAO1gzIhlAAIhiAAAQXgzIAAhkIhiAAIAAhjAR+gzIAAhkIhnAAIAAhjIhiAAAR+gzIhnAAIhiAAAR+iXIAAhjAWnlcIAAhlIhiAAIhjAAIhkAAIAAhiAWnj6IAAhiIhiAAIhjAAIAAhlIAAhiAVFlcIAAhlIAAhiAVFj6IhjAAIAAhiIhkAAAVFj6IAAhiATigzIAAhkIAAhjIhkAAAVFgzIAAhkIhjAAIhkAAAVFgzIhjAAIhkAAAWngzIAAhkIhiAAIAAhjAWngzIhiAAAWnj6IhiAAAWniXIAAhjAWnnBIAAhiAWnuzIAAn2AWnCWIAAhjIhiAAIhjAAIhkAAIhnAAIhiAAIhlAAIhiAAIhjAAIhkAAIhnAAIhiAAIhpAAIhiAAIhjAAIAAhmATiCWIAAhjIAAhmAVFCWIhjAAIhkAAIAAhjIAAhmAVFCWIAAhjIAAhmAVFFhIAAhjIhjAAIAAhoAVFHDIhjAAIAAhiIAAhjIhkAAIhnAAIhiAAIhlAAIAAhoIAAhjIAAhmAVFHDIAAhiIhjAAIhkAAIAAhjIAAhoIhnAAIAAhjIAAhmAWnHDIAAhiIAAhjIAAhoIhiAAAWqHDIgDAAIhiAAAWqFhIgDAAIhiAAAWsD+IgFAAIhiAAIAAhoAO1CWIAAhjIAAhmAO1CWIhlAAIhiAAIAAhjIAAhmANQHDIAAhiIAAhjIhiAAIhjAAIhkAAIhnAAIAAhoIAAhjIAAhmAO1HDIAAhiIhlAAIhiAAIhjAAIAAhjIAAhoIhkAAIhnAAIhiAAIAAhjIAAhmAO1HDIhlAAIhiAAIAAhiIAAhjIAAhoIhjAAIAAhjIAAhmAO1FhIAAhjIAAhoAQXHDIAAhiIAAhjIAAhoIhiAAAR+HDIAAhiIhnAAIhiAAAR+HDIhnAAIhiAAAR+IoIhnAAIhiAAIhlAAIAAhlAR+KOIhnAAIAAhmIAAhlAR+KOIAAhmIAAhlAO1KOIhlAAIAAhmIhiAAIhjAAIhkAAIhnAAIhiAAIhpAAIhiAAIhjAAIAAhlIAAhiIAAhjIAAhoIAAhjIhkAAIhmAAIhjAAIhhAAIhjAAIhiAAIhlAAIhmAAIhjAAIhkAAIhjAAIhiAAIhlAAIhmAAIhjAAIgDAAAO1KOIAAhmIAAhlAO1LxIhlAAIAAhjIhiAAIhjAAIAAhmIAAhlIAAhiIhkAAIAAhjIAAhoIAAhjIAAhmAR+LxIhnAAIhiAAIAAhjAQXKOIhiAAAR+LxIAAhjAQXLxIAAhjAWqIoIgDAAIhiAAIhjAAIhkAAAWqKOIgDAAIAAhmIAAhlAVFKOIhjAAIAAhmIAAhlIhkAAAVFKOIAAhmIAAhlAVFLxIhjAAIAAhjIhkAAAWqLxIgDAAIhiAAIAAhjAWnKOIhiAAAWnLxIAAhjATiLxIhkAAAInHDIAAhiIhnAAIAAhjIhiAAIhpAAIhiAAIhjAAIhkAAIhmAAIhjAAIAAhoIhhAAIAAhjIAAhmIAAhkIhjAAIhiAAIhlAAIhmAAIAAhjIAAhiIAAhlIAAhiIAAhnIhjAAIhkAAIhjAAIhiAAIAAhkIAAhjIhlAAIAAhiIhmAAIhjAAIAAn4AHAHDIAAhiIhiAAIAAhjIAAhoIhpAAIAAhjIAAhmAInHDIhnAAIhiAAIAAhiIhpAAIAAhjIAAhoIhiAAIAAhjIAAhmALuHDIhjAAIhkAAACTCWIhjAAIhkAAIhmAAIAAhjIAAhmIAAhkIAAhjIhjAAIAAhiIhhAAIAAhlIAAhiIhjAAIhiAAIAAhnIAAhkIhlAAIhmAAIhjAAIhkAAIAAhjIhjAAIAAhiIhiAAIhlAAIAAn4ACTHDIAAhiIhjAAIhkAAIhmAAIAAhjIAAhoIhjAAIAAhjIAAhmIAAhkIAAhjIhhAAIhjAAIhiAAIAAhiIhlAAIAAhlIhmAAIhjAAIAAhiIAAhnIAAhkIAAhjIhkAAIAAhiIAAn2ACTHDIhjAAIhkAAIAAhiIAAhjIAAhoIAAhjIAAhmIhmAAIhjAAIhhAAIhjAAIAAhkIAAhjIAAhiIhiAAIAAhlIAAhiIhlAAIhmAAIhjAAIhkAAIAAhnIAAhkIhjAAIAAhjIhiAAIAAhiIAAn4ACTFhIAAhjIAAhoAD1HDIAAhiIhiAAAFeHDIhpAAIhiAAAFeKOIhpAAIAAhmIAAhlAFeKOIAAhmIAAhlACTKOIhjAAIAAhmIhkAAIhmAAIhjAAIhhAAIhjAAIhiAAIhlAAIhmAAIAAhlIAAhiIAAhjIAAhoIAAhjIAAhmIAAhkIhjAAIhkAAIhjAAIhiAAIAAhjIAAhiIAAhlIhlAAIhmAAIhjAAIAAhiIAAhnIgDAAACTKOIAAhmIAAhlACTLxIhjAAIAAhjIhkAAIhmAAIAAhmIAAhlIAAhiIhjAAIAAhjIhhAAIAAhoIhjAAIAAhjIAAhmIhiAAIAAhkIAAhjIhlAAIAAhiIhmAAIhjAAIAAhlIhkAAIhjAAIhiAAIAAhiIAAhnIhlAAIhmAAIhjAAIAAhkIgDAAAFeLxIhpAAIhiAAIAAhjAD1KOIhiAAAFeLxIAAhjAD1LxIAAhjALuKOIAAhmIAAhlAInKOIhnAAIAAhmIAAhlAInKOIAAhmIAAhlAInLxIhnAAIAAhjIhiAAALuLxIhjAAIhkAAIAAhjAKLKOIhkAAAKLLxIAAhjALuLxIAAhjAHALxIhiAAAAwWqIAAq5IhkAAIhmAAIhjAAIhhAAIAAhjIhjAAIhiAAIAAhmIAAhlIAAhiIhlAAIhmAAIhjAAIAAhjIhkAAIAAhoIAAhjIAAhmIAAhkIAAhjIhjAAIAAhiIhiAAIhlAAIhmAAIAAhlIAAhiIAAhnIAAhkIAAhjIAAhiIAAn4ACTWqIAAq5AD1WsIAAq7AInWmIAAq1AHAWmIAAq1AFeWmIAAq1ANQWoIAAq3IhiAAALuWmIAAq1AKLWmIAAq1AO1WmIAAq1AQXWmIAAq1AR+WmIAAq1ATiWmIAAq1AVFWmIAAq1AWnWoIAAq3AWnAzIAAhmAwYruIhiAAIhlAAIhmAAIhjAAIAAhjIgDAAAwYojIAAhnIAAhkAwYojIhiAAIhlAAIAAhnIAAhkIAAhjIhmAAIhjAAIAAhiAu1ojIhjAAA2oojIgDAAAzfojIhmAAIhjAAAzflcIAAhlIAAhiAzfj6IhmAAIAAhiIhjAAAzfj6IAAhiA2oj6IgDAAA2oj6IAAhiIAAhlIgDAAA2ogzIAAhkIgDAAA2ogzIgDAAA1FgzIAAhkIhjAAIAAhjAzfgzIAAhkIhmAAIAAhjIhjAAAzfgzIhmAAIhjAAAzfiXIAAhjAtRlcIhkAAIAAhlIAAhiAtRj6IhkAAIAAhiIhjAAIAAhlIAAhiAtRj6IAAhiAwYj6IhiAAIhlAAAx6gzIAAhkIhlAAAwYgzIAAhkIAAhjAwYgzIhiAAIhlAAAtRgzIAAhkIAAhjAtRgzIhkAAIhjAAAqIj6IhmAAIhjAAAqIgzIAAhkIAAhjAqIgzIhmAAIhjAAAojgzIhlAAAj9HDIAAhiIhhAAIAAhjIhjAAIAAhoIhiAAIAAhjIAAhmAleHDIAAhiIhjAAIAAhjIhiAAIAAhoIhlAAIhmAAIhjAAIAAhjIAAhmAj9HDIhhAAIhjAAIAAhiIhiAAIAAhjIhlAAIhmAAIhjAAIAAhoIhkAAIhjAAIAAhjIAAhmAg0HDIhmAAIhjAAAqICWIAAhjIAAhmAqIHDIAAhiIAAhjIAAhoAqIHDIhmAAIhjAAIAAhiIhkAAIAAhjIhjAAIhiAAIAAhoIAAhjIAAhmAnBHDIhiAAIhlAAAnBKOIAAhmIAAhlAqIKOIhmAAIAAhmIhjAAIhkAAIhjAAIhiAAIhlAAIhmAAIhjAAIAAhlIAAhiAqIKOIAAhmIAAhlAqILxIhmAAIAAhjIhjAAIhkAAIAAhmIAAhlIAAhiIhjAAIhiAAIAAhjIhlAAIhmAAIAAhoIAAhjIAAhmAnBLxIhiAAIhlAAIAAhjAojKOIhlAAAnBLxIAAhjAojLxIAAhjAg0KOIAAhmIAAhlAj9KOIhhAAIAAhmIAAhlAj9KOIAAhmIAAhlAiaKOIhjAAAiaLxIAAhjAg0LxIAAhjAj9LxIAAhjAleLxIhjAAAwYCWIhiAAIhlAAIhmAAIhjAAIgDAAAx6HDIAAhiIhlAAIhmAAIAAhjIhgAAAwYHDIAAhiIAAhjIAAhoAwYHDIhiAAIhlAAIAAhiIAAhjIAAhoIAAhjIAAhmAtRHDIhkAAIhjAAA2oCWIAAhjIAAhmA1FHDIAAhiIhjAAIAAjLAzfHDIhmAAIhjAAAzfKOIhmAAIAAhmIAAhlAzfKOIAAhmIAAhlA2oKOIAAhmAzfLxIhmAAIhjAAIAAhjA1FKOIhjAAA1FLxIAAhjAzfLxIAAhjAtRKOIAAhmIAAhlAwYKOIhiAAIAAhmIAAhlAwYKOIAAhmIAAhlAwYLxIhiAAIAAhjIhlAAAtRLxIhkAAIhjAAIAAhjAu1KOIhjAAAtRLxIAAhjAu1LxIAAhjAx6LxIhlAAA2oWnIAAq2Aj9WqIAAq5AiaWqIAAq5Ag0WqIAAq5AleWpIAAq4AnBWnIAAq2AojWnIAAq2AqIWnIAAq2AruWnIAAq2IhjAAAtRWnIAAq2Ax6WnIAAq2AwYWnIAAq2Au1WpIAAq4A1FWnIAAq2AzfWnIAAq2");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.2,-146.2,292.4,292.4);


(lib.gpsDevice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-139.3,-119.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.3,-119.3,279,241);


(lib.glowShip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(-319.5,-266);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-319.5,-266,639,532);


(lib.gem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;
	this.instance.setTransform(-10,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,0,69,64);


(lib.galaxy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3_1();
	this.instance.parent = this;
	this.instance.setTransform(-338,-250);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-338,-250,810,600);


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
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-46,-42);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-42);

	this.instance_2 = new lib.Bitmap9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-42,92,80);


(lib.Pathcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("AlbCpIgHgRQgMgiAdg1QAeg2A7gxQCUh+DKgEQDSgEAmAmQAfAghTBTQhMBLhrAeQhrAegMg1QgJglAygaQAhgPAwgIQgkAJgKAjQgJAmAxgTQAygTBBhAQA+g/hpgJQhjgIiCAnQhpAegTBOQgUBOBOAzQh1AQhvAAg");
	this.shape.setTransform(35.8,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Pathcopy, new cjs.Rectangle(0,0,71.7,33.9), null);


(lib.Path_10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("Ak1E3QAEihB6h2QBwhsCBgEQBrgEgiCXQgNA6geA9QgcA6gaAZQgxAzg0gRQg0gQAehCQAag3AlgLQASgFANAGIgVAQQgWAYgEAlQgFAwAhgLQAigMAmhIQAUgmgNgqQgMgqgkgUQgmgWgwATQg3AXg2BKQg4BNgEBHQgDBBAnAtQAmAsBAAMQBDAMBJgdQBIgbA9h6QA3hvAciTQAbiSgOhsQgPh2g7gWQh0gpixCxQidCchgDIQhYC7hcCeIgagkQBBh5BdjbQBUjIAkg7QBRiHDVhzQDah2DTgSQBlgIAMAeQAJAYgvBLIhuCuQhHB+geB4QhBD/hsCEQhRBjiDA1Qg5AXgqAAQiMAAAHjyg");
	this.shape.setTransform(55.8,55.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10copy, new cjs.Rectangle(0,0,111.7,110.6), null);


(lib.Path_9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#117F7E").s().p("AooGMQAig/AhgzIADADQBtBZCTgZQBrgTA7gzQAQgOgTgMIg1gZQhcgrAAhDQAAhdBrhbQBxhiCxgrQBXgWAdADQAaADgNAXQgIAOgoAtQgrAzgVAfQg0BQgyASQgjAMg7gQQgogLAagWQALgKAVgJIABAXQAKAUAxgPQAcgIASgUQARgVAAgTQgBgVgVgIQgZgJguAMQgyAOgwAhQgyAigXAjQgaAoATAaQAWAfBQAGQBQAHBaguQBUgqBIhKQBHhJAlhSQAnhVgLhDQgHgsgfgXQBEgUAwgKQAnBogKBqQgHBChBBcQhBBahoBaQjzDRkOA/QhxAbhXAAQhZAAg8gcg");
	this.shape.setTransform(55.3,42.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9copy, new cjs.Rectangle(0,0,110.6,84.8), null);


(lib.Path_8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("AivAgQAEgrBjgeQAygPAwgGQCmgEgSAnQgHAOgeAOQgbAOgZAFQhfAbg7AKQghAGgXAAQg0AAACgfg");
	this.shape.setTransform(17.6,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8copy, new cjs.Rectangle(0.1,0,35.2,12.7), null);


(lib.Path_7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("AzoMgQACjfA+jTQCZAeDqhKQB9gnC1hKQB1gnDqjsQDijoCSjfQBfiQhOiCQA6gEA7AAQAsAAA9ADQAGAogNAtQgNAsgjA9QgoA/gOAaQgYArAEAQQAHAVAygGQAugGBBgaIB+g4QC0hQCSgRIBogMQBkAwBjBCQiGgFi0AiQksA4kECXQkYChiADVQiUD4itCMQjVCslYBkQjGA4iTAAIgIAAg");
	this.shape.setTransform(125.7,80);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7copy, new cjs.Rectangle(0,0,251.4,160.1), null);


(lib.Path_2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("Aq8DlIAag6QBRirDThhQBNgjBmgdICfgpQCDgiEEgHQD7gGBLAXQAvAPggA+QjACqjpBmQBQg8A1g/QA4hBAHgwQAJg1hSgWQhKgViEAIQkZAQjqBgQh9AzhHBqQgzBOgSBjQgygGgygKg");
	this.shape.setTransform(70.1,24.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2copy, new cjs.Rectangle(0,0,140.2,49.1), null);


(lib.Path_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98FEF2").s().p("Ah5B0QgmhzAVhyQAQhXBfgdQAvgOAsADQA6AfASBSQAPBHgSBaQgRBVgmA8QgoA/gpAAQhQAAgqh+g");
	this.shape.setTransform(14.6,24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1copy, new cjs.Rectangle(-0.1,0,29.4,48.3), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#117F7E").s().p("A0OLNQhFjGgPjRQDxAEDEg6QDvhIDfjWQCsilBni4QBwjIBjhlQCtivEqh2QDihZDzgOQCggJCPAXQA/AzBCBCQhSC/jMCzQjZC/kvCCQiNA8jzBQQk5BohKAaQjTBNiFBNQijBfhXBzQhfB/hdDVQhCCXhFDQQhxiqhCjAgAMwvBQkIAPjfCjQjqCtg7C3QgWBEAMAvQALAqAfgCQAdgCBMgnQBMgnBJgzQC9iEgzg0Qg3g2hWAgQhSAfgPA/QgLAxAmgIQAVgEApgaQALgGAEAEQAEAEgFAKQgMAaglAQQg0AXgbgEQgmgFAQg4QASg/BchAQBfhCBcgJQAtgEAeAZQAbAXAHAnQAGAogSApQgTAsgrAeQgrAfgfAmQgeAmgEAbQgEAdAfAEQAiAFBIgeQBKgeB0hgQBvheBghsQBlh0AihPQAlhahBgQQhEgUhgAAIg4ACg");
	this.shape.setTransform(137.9,108);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0.1,275.8,215.9), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("AmCFlQh7gaCOi2QCDioD9i2QDEiNB+gPQBAgHAXAVQArALg8BbQgWAhhzCQQhhB4jLCUQjXCchyAAQgQAAgNgDgACxjsQhfAvhqBFQjWCHg7BoQgiA7AHAdQAGAaAmgEQBQgIBvhgQBfhUAVg3QAJgYgJgKQgKgLgXAHQgXAGgGgEQgFgEAIgJQAXgZAfAAQAVAAADAnQADAmAVAAQAhAABWhFQBZhHAeg4QAbgyguAAQgPAAhhAVg");
	this.shape.setTransform(44.2,35.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(-0.2,0,88.8,72), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#117F7E").s().p("AtlRGQBLiJBehBQCShlDqg3QA/gPB7gaQBqgZBFgcQBTggCMhrQCFhlCPiIQFMk5BOi3QBLiui7AMQieAJkyCHQjqBoh3CXQhIBdh4DdQhtCujJCWQjACPjTBKQh3Aqg2BjQichXiEh4QB0gSB3gpQC1g9BliJQA/hWBGjAQBLjLA5hXQBlicCyhWQFCieE+hbIEKhHQCkgsB7goQCUgxA/iSQAzhzgGipQAjBEAYA5QAHBJgMBHQgQBggzBOQgOAVhyCcQgSAYACAIQABAJAYACQASABAlgJQApgKAOgBQA5gBgSBnQguECjXECQg/BLiiCQQg1AwgOASQgSAZAYAEQAdAFBRgpQBZgtBhhMQECjKB2kBQAYg3APglIgFA6QhYEFiRC8QiwDkjzBiQkdBzlmA4QjXAigmAHQiHAbhnAoQibA+g6BuQgnBJAIBUQhdgahXgjgAAVlNQjHA0igB6QimCAhEDgQgwCgAPB1QAEAiAwgFQAtgGBCgnQCdhdBIiMQBIiMBTh2QBIhqA/g/QAngnBJhBQAugvgtgEQhEAChlAag");
	this.shape.setTransform(134.6,115.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,269.3,231), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51FEDB").s().p("AnYEIQhpgWDmieQCBhWEditQCJhZBqgJQA1gEAZANQBXAPAXA0QAVAughBDQggA/hGA8QhHA/hWAlQixBOjFAkQh4AWhcAAQg/AAgygLgADEirQhzAfg9AlQhjA7hYA+QixB/A4ASQA2ASBJgUQAxgOCzg3QC0gwApgSQA1gXAvg7QAtg5gVgtQgTgogvAAQgvAAhnAbg");
	this.shape.setTransform(50.7,27.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0.1,0,101.3,55), null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AgxAxQgUgUAAgdQAAgcAUgVQAVgUAcAAQAdAAAUAUQAVAVAAAcQAAAdgVAUQgUAVgdAAQgcAAgVgVg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("AgwAxQgUgUAAgdQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66FF33").s().p("AgvAwQgUgUAAgcQAAgbAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAbQAAAcgUAUQgUAUgcAAQgbAAgUgUg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF33").s().p("AgvAwQgTgUAAgcQAAgaATgVQAVgTAaAAQAcAAAUATQATAVAAAaQAAAcgTAUQgUATgcAAQgaAAgVgTg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#66FF33").s().p("AguAvQgTgUAAgbQAAgaATgUQAUgTAaAAQAbAAAUATQATAUAAAaQAAAbgTAUQgUATgbAAQgaAAgUgTg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66FF33").s().p("AgtAuQgTgTAAgbQAAgaATgTQATgTAaAAQAbAAATATQATATAAAaQAAAbgTATQgTATgbAAQgaAAgTgTg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#66FF33").s().p("AgsAuQgTgUAAgaQAAgaATgSQASgTAaAAQAaAAAUATQASASAAAaQAAAagSAUQgUASgaAAQgaAAgSgSg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66FF33").s().p("AgrAsQgTgSAAgaQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66FF33").s().p("AgrAsQgSgSAAgaQAAgZASgSQASgSAZAAQAaAAASASQASASAAAZQAAAagSASQgSASgaAAQgZAAgSgSg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF33").s().p("AgqArQgSgSAAgZQAAgYASgSQASgSAYAAQAZAAASASQASASAAAYQAAAZgSASQgSASgZAAQgYAAgSgSg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF33").s().p("AgpAqQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARQgRASgZAAQgYAAgRgSg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FF33").s().p("AgoApQgSgQAAgZQAAgYASgQQAQgSAYAAQAZAAAQASQASAQAAAYQAAAZgSAQQgQASgZAAQgYAAgQgSg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FF33").s().p("AgoApQgRgRAAgYQAAgXARgRQARgRAXAAQAYAAARARQARARAAAXQAAAYgRARQgRARgYAAQgXAAgRgRg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66FF33").s().p("AgtAuQgSgUAAgaQAAgZASgUQAUgSAZAAQAaAAAUASQASAUAAAZQAAAagSAUQgUASgaAAQgZAAgUgSg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FF33").s().p("AguAvQgTgTAAgcQAAgbATgTQATgTAbAAQAcAAATATQATATAAAbQAAAcgTATQgTATgcAAQgbAAgTgTg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FF33").s().p("AgvAwQgTgVAAgbQAAgaATgVQAVgTAaAAQAbAAAVATQATAVAAAaQAAAbgTAVQgVATgbAAQgaAAgVgTg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66FF33").s().p("AgwAxQgTgVAAgcQAAgbATgVQAVgTAbAAQAcAAAVATQATAVAAAbQAAAcgTAVQgVATgcAAQgbAAgVgTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,14,14);


(lib.db_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3341A8","#333333","rgba(51,51,51,0)"],[0,0.204,0.906],1.1,-116.2,0,2.8,-55.9,156.9).s().p("AqBM2QkclVgEnhQgDniEXlVQEYlVFsADQFqACDnFZQDmFZBdHaQBdHckYFVQkYFUmPAAQmNAAkdlUg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.9,-116.2,186,232.5);


(lib.db_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACmg3QgMg+gSg0Qgog+hvAEQhwAFg3A9QAUA8AJAyQABAJABAIQALA5AEAtQABAJAAAIACmg3QgbAlgkAUQgtAZg6AAQhEAHg3gqQgPgMgNgOACzA0QgHALgSAVQgIAJgLAIQgPAKgVAIQgNAFgPAEQgZAGgcAAQgtABglgKQglgKgigeQADAsgBAvQATAOAWAMQA3AcA7gCQAngCAlgOQASgIASgKQAGgEAHgFQAUgOAQgRQAAg1gEgxQgEg4gJgz");
	this.shape.setTransform(0,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("AhJA2QgWgLgSgPQAAgtgCgtIgBgQQBIgGBBATQAqANARATIAKAOQgZAGgcABIgEAAIgEAAIAAAAIgBAAQglAAgggIIgDgBQgmgKghgfQAhAfAmAKIADABQAgAIAlAAIABAAIAAAAIAEAAIAEAAQAcgBAZgGIANAZQAKAdAEAdQglAPgnABIgIABQg2AAg0gbgABagTIAAAAg");
	this.shape_1.setTransform(-1.9,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("ACGB6QAMgIAIgJQARgVAIgLQgIALgRAVQgIAJgMAIQgHgjgMgiQgFgSgHgLQAkgVAbglQAJAyAEA5QADAxABA2QgRARgTAOQgEgrgJgqgABfAPQgNgMgbgFQhmgahqgBQgIgzgVg8QA3g9BwgEQBvgFAoA+QASA1AMA9QgbAlgkAVIgIgJg");
	this.shape_2.setTransform(0,-5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("ABXBJIgMgZQAOgEAOgFQAUgIAPgKQgPAKgUAIQgOAFgOAEIgKgPQgRgTgqgMQhCgThIAGQgEgtgLg6QANAOAPAMIACACQAuAjA3AAIAAAAIABAAIARgBIABAAIADAAIAAAAQA5AAArgZQAIALAFASQALAiAIAjQAJApADArIgNAJQgRAKgSAIQgFgdgKgegAgQgzQg3AAgugjIgCgCQgPgMgNgOIgCgRQBqABBmAaQAaAGAOANIAHAIQgrAZg5AAIAAAAIgDAAIgBAAIgRABIgBAAIAAAAg");
	this.shape_3.setTransform(-0.4,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-26.6,38.5,47.6);


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

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AjTCAIASg5IFKAtIgTA7gABcAXIA3irIBAAHIg1CtgAiugHIA5inIA7AGIgzCog");
	this.shape_5.setTransform(-1.5,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AjLBpIASg5QC+gwCMBdIgTA7QhRAohEAAQhnAAhNhXgABjAAIA4irIAxA0IgmCBgAimgeIAqh9IBKgkIg0Cpg");
	this.shape_6.setTransform(-2.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

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
	this.shape_5.graphics.f("#2875A9").s().p("AEOBwQhFAghwACQigAEifgjQhygZhrgrIgFgZQCtA/ChAVIgCgpIACApQihgVitg/IgMgZQBUAeBLAOQBLAPBuAJQA0AIBHAHQBFAHAqgBQArgBAngVQArgWAhgvIATgeQAPgaASgnQAghEASgcQAegtAjgXQhgBphCD3IgDALQBMgiAsgkQArgkASgYIAFgHQAOgVAMgTIgNAyIAAABQgfCKgrDyIh9ChgAA3B2QBoAABjgRIAMgCIgMACQhjARhoAAIAAAAIAAAAQhXAAhagMQBaAMBXAAIAAAAIAAAAgAnIAWIAAAAgAEOlIIgngKIAjgnQAjgnAmgTQBdAeAgATIAgAUQgRAOgVALQgsAVgyABIgKAAQgmAAgugJgAmqmcQgogHgdgbQAfgdAygMQBggXBogDIAQAAIgGAIIgKgIIAJAIQgaAZgYAzIgQACIhOANQgZAEgVAAQgRAAgOgCg");
	this.shape_5.setTransform(0.1,-0.4);

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
	this.shape_1.graphics.f("#6B8A08").s().p("AioBMQAYgHAYgLQA/gbBHg2QAqgeBThAQA3goAvgYIAAACQhHA7gxBEQgfApgXAuQjlACiTDqQA3hoBWhbgAERihQgOgIgNgOIgLgMIgHgKQgLgSgEgRQgGgWAKgIIAAAAIAAAAQAPAgAKARQAKARARAOQARAPAIABIAAAAIAQADQgBAJgGAEQgEADgGAAQgIAAgMgGg");
	this.shape_1.setTransform(0,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeAwQABgPgJgQQgPgcgbgUQgMgJgOgGIAAgBQALgHAUAKQATALARAXQASAWAGAWQACAKgBAHIgQgDg");
	this.shape_2.setTransform(26.4,-22.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F5D802").s().p("AguAQQBchAByg4IAFgDIAHAKIALAMIgFADIAAgBQgvAYg3AnQhSA/gqAfQhIA2g/AbQgYALgYAHQBPhUBqhJgADnhNQgIgBgRgOQgRgPgKgQQgKgRgPggQAOAGAMAJQAcAUAPAdQAJAQgBAPg");
	this.shape_3.setTransform(6.3,-9.6);

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


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_12
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E0F0FF","rgba(224,240,255,0)"],[0,0.902],-2.7,4.7,0,-2.7,4.7,47.4).s().p("AhfCtQAoiaBtjpQBtjqAIgQIh1FeQgbBTgdBOQgcBPgkBdQglBegTAqQgWAugbA/QAjiGApidg");
	this.shape.setTransform(387.8,-254.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#E0F0FF","rgba(224,240,255,0)"],[0,0.902],2,5,0,2,5,47.4).s().p("ABLC3QhfiAhwjnQhzjngHgRIDHE2QAwBKAqBHQAsBIAyBXQAyBYAVApQAVAtAiA9QhUhvhgiDg");
	this.shape_1.setTransform(-175.6,88.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#E0F0FF","rgba(224,240,255,0)"],[0,0.902],-3.1,0.2,0,-3.1,0.2,27.6).s().p("AiEAUQg7gCgbgDQgcgEgpgDQBQgMBegMQBdgOCVAVQCUATALACIjWAIQgzACgwAAQgxAAg6gCg");
	this.shape_2.setTransform(-289.3,-213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000033").s().p("AEbL4QFLkmDSlqQEgnxhcluIAmAAQBbF3klH6QjMFfk7EfgAp1ICQg1gBgmgRIAAgrQAjAYA5AAQBsABCRhQIAFgEIAHgEIAHgFIAAgBQCuh2BfiiQBeijgrh1QgshwiaAAQijABi5B4IACgDIgBABIgCACQhDAsg3AxIAAAAQiDBshfCBQhHBggmBcIgnAAQAohmBPhsIAAAAQBhiECHhvQA5gyBEgtIgDACIABAAIADgDQDDh+CtAAQC2AAAyCHIAAAAQAzCChpC1QhiCqi1B6IAAAAIgFAEIgEADIAAAAIgJAGIgFACQiYBVhzAAIgEAAgAo4EoQgxgLgGgwIAAgBQgHgpAhg0IAAgBQAkg1BEgqQAGgFAIACQAHABAFAHQADAGgBAIQgCAHgHAEQg9AnggAvQgYAmADAeQAEAYAYAFQAZAFAjgMQANgFANgHIAjgUQBKgxAnhEQAPgZAGgWIAlAAQgHAfgTAiQgsBMhRA1IgBAAIglAWIABAAIgfANQghAMgaAAQgMAAgKgCgAlwoXQCNgxCFgBIAAAkQiFACiNAzg");
	this.shape_3.setTransform(70.5,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AB8BeQgegMgigRQghgQglgWQgwgbglgaQgXgPgSgOQgxgnAGgMQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAQABAlAOQAVAJAYALIgCADIgCACIgDADIgGgDQgZgKgLgBQgJgBgCAEQgFAIAkAdIAFADQAjAbA0AdQAnAYAiAPIAYAKQAlAOAIgEQAJABACgDQAFgIgkgdQgKgHgTgMIACgFIAHAFQAbASAWASQAxAmgGAMQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQgQgBgkgOg");
	this.shape_4.setTransform(31.9,-14.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AB6BeQgegMgigRQgigQgkgWQgwgbgmgZQgWgQgSgOQgxgnAGgLQADgFAJABQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgGALAxAnQASAPAWAPQAmAaAvAaQAlAWAiARQAhARAfAMQAjAOARABIgHABQgQAAgmgQgACHBPQAAAAABAAQAAAAAAAAQAAgBABAAQAAAAAAgBQAFgIgkgcIgVgQIABgEQATALAJAIQAlAcgFAIQgCADgGAAIgDAAg");
	this.shape_5.setTransform(31.3,-14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAPQgFgFABgIQABgIAHgGQAHgGAIgBQAIAAAFAFQAGAFgBAIQgBAIgHAGQgHAGgHABIgDAAQgHAAgFgFg");
	this.shape_6.setTransform(27.5,-19);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ai2BtQAQgBAkgOQAegMAigRQAhgQAlgXQAwgaAlgaQAXgPASgOQAxgogGgLQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBgBgBAAQAKgBADAFQAGALgyAnQgSAPgVAPQgmAZgwAbQglAWghARQgiAQgeANQgnAPgPAAIgHgBgAiRBMQgFgHAkgdQAKgIATgLIABAEIgVAQQgkAcAFAJIACABIgEAAQgGAAgBgDg");
	this.shape_7.setTransform(30.3,-15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AizBrQgGgLAxgnQAWgSAbgSIAHgGIACAGQgTALgKAJQgkAcAFAIQACADAJgBQAIAFAmgPIAXgKQAigPAogYQAzgdAjgbIAFgDQAkgdgFgIQgCgEgJABQgLACgZAJIgGACIgDgCIgCgDIgCgCQAYgLAWgJQAkgOAQgCQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQAGAMgxAnQgSAOgXAPQglAagwAaQglAXghAQQgiARgeAMQgkAOgQACIgEgDg");
	this.shape_8.setTransform(29.6,-15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AggBSIgGgFIAmgUIAiASQgVANgYAAQgKAAgLgGgAgxBDIgDgCIgEgEQgMgOgGgRIgDgMIgCgOQAgAaAjAUIgjATIgCgCgAArA5IgWgLQAegSAcgUQgDAQgIAOQgHANgKAKIgIgEgAgEAgQgfgSgtgeQABgJADgIQAEgMAHgJIADgEIADgEIABAAQALgMAUgIQATgHAbACQAbACARAXQASAXAAAdIAAAEQgfAUgmAWIgFADIgLgHg");
	this.shape_9.setTransform(30,-16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgfBaQgLgEgLgIIgHgFIgCgDIgBAAIgEgDIgDgEQgOgPgGgTIgDgKQgBgJAAgKQAAgLADgLQAEgTAOgPQgIAIgEANQgCAHgBAJQAsAeAfASIANAHIADgDQAngWAegTIAAgFQAAgcgSgYQgRgXgbgBQgbgCgTAGQgTAIgMAMIAAgCQAdgbAnAAQAcAAAYAPIAMAKIACACIAFAFQALAPAHAPIADAKIAAABIABAFIABAQQAAAngcAcQgbAcgnAAQgRAAgPgFgAguBKIAFAFQALAHAKgBQAYAAAWgNIghgSIgnAUgAhWAPIAEAMQAFARAMAOIAEAEIADACIACACIAjgTQgjgUgggaIACAOgAAMArIAWALIAJAEQAJgKAHgMQAIgPAEgPQgdATgeASg");
	this.shape_10.setTransform(30.9,-15.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgeAcQgJgJAFgQQAAgPANgLQAMgJAMgCQAQgDAJAMQALAJgCAQQgCAMgMAMQgNALgNAAIgHAAQgNAAgHgHg");
	this.shape_11.setTransform(-60.5,-29.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AicCYQgigkgPgrQAZAfApAZQByBCBihCQBhhCguiLQgviQieAcQgGAEgHAAQApgVAwABQBWAAA/A9QA+A+AABVQAABZg+A/Qg/A5hWAAQhXAAhAg5g");
	this.shape_12.setTransform(-52.2,-23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AhlCTQgpgZgZgfQgJgiAAgnQAAhVA6g+QAcgaAigPQAHAAAGgEQCegcAvCQQAuCLhhBCQgxAhg2AAQg0AAg5ghg");
	this.shape_13.setTransform(-56,-25.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAQQgGgFACgJQABgIAHgHQAHgGAIgCQAJAAAGAGQAGAFgBAKQgCAHgHAHQgHAHgIAAIgDABQgIAAgEgGg");
	this.shape_14.setTransform(-107.4,80.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AhcBaQgVgVgJgaQAPATAXAOQBGAoA7goQA5gngbhTQgdhWheARIgJACQAZgMAeABQAzAAAlAlQAlAjgBA0QABA2glAkQglAjgzABQg0gBgmgjg");
	this.shape_15.setTransform(-102.5,84.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("Ag9BXQgYgOgOgTQgGgUAAgXQAAgzAjgkQARgQATgJIAJgDQBdgRAdBWQAcBUg6AnQgdATggAAQggAAgjgUg");
	this.shape_16.setTransform(-104.7,83.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAcQgJgKADgOQABgOAMgNQAMgKANgCQARgBAIAKQAKAJgBAQQgCAOgMALQgMAKgOACIgFAAQgNAAgIgIg");
	this.shape_17.setTransform(-9.5,73);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AiaCWQgjgjgPgrQAYAgAoAXQB1BCBhhBQBihCgwiMQgxiPibAcIgPAEQAogUAzAAQBWAAA+A+QA9A8AABXQAABag9A8Qg+A8hWAAQhYAAg+g8g");
	this.shape_18.setTransform(-1.3,79.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AhmCSQgogXgYggQgLgiAAgmQAAhWA9g9QAbgbAggOIAPgFQCbgcAxCPQAwCMhiBCQgxAgg1AAQg1AAg7ghg");
	this.shape_19.setTransform(-5.1,77.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgMANQgEgFABgHQAAgFAGgFQAFgFAGgBQAHgBAEAFQAFAEgBAHQgBAGgGAEQgFAGgGAAIgCAAQgGAAgDgDg");
	this.shape_20.setTransform(34.7,37.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AguBBQgRgKgLgOQgFgQAAgQQAAgnAbgbQANgMAOgHIAHgBQBFgNAVBAQAWA+gsAeQgVAOgYAAQgYAAgbgPg");
	this.shape_21.setTransform(36.7,39.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AhFBDQgPgQgHgTQALAPARAKQA1AdArgdQAsgdgWg/QgVhAhFANIgHACQASgJAWAAQAnAAAcAcQAbAbAAAmQAAAogbAbQgcAbgnAAQgnAAgcgbg");
	this.shape_22.setTransform(38.4,40);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag4A1QgTgSAEgdQADgcAXgWQAYgXAdgBQAegDASATQATATgDAdQgEAcgXAVQgYAXgdACIgFAAQgbAAgQgRg");
	this.shape_23.setTransform(99.5,51.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AksEkQhFhFgehVQAuBABPAsQDkCBDAh/QC/iAhfkUQhfkVkxA3IgdAHQBQgnBhAAQCqAAB5B5QB2B3ABCqQgBCsh2B4Qh5B2iqAAQirAAh3h2g");
	this.shape_24.setTransform(115.6,64);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AjIEcQhOgsguhAQgWhAAAhJQAAiqB4h3QAzg1A+gdIAdgHQExg3BfEVQBfEUi/CAQhgA+hoAAQhpAAhzhBg");
	this.shape_25.setTransform(108.1,60.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ag4A1QgTgTAEgdQADgcAXgVQAYgXAdgBQAegDASATQAUATgEAdQgEAcgXAVQgYAXgcABIgHABQgaAAgQgRg");
	this.shape_26.setTransform(134.8,-88.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("Ap3F6QA4gFB9gxQBmgpB2g6QB0g6CChMQCmhfCChZQBMg0A/gyQCqiIgWgnQgEgGgJgDQAjgEAJAQQAWAnirCHQg+AyhNA1QiBBZinBfQiBBLh0A6Qh2A7hmAoQiJA3g2AAQgNAAgIgDgAn3EJQgRgdB9hiQAigbBBgoIAFAOQgoAcghAbQh9BjAQAcQACAEAFACIgNABQgTAAgFgJg");
	this.shape_27.setTransform(144.4,-76.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AptFxQgXgnCqiHQBMg8Bfg/IAagSIAEASIABAAIgBABQhBAngiAbQh9BjARAcQAGAMAfgEQAdAPCBgzQAogQAsgTQB0g1CLhSQC0hmB5hdIAQgNQB8higQgdQgHgMgeADQgqAFhVAiIgVAIIgKgLIgHgGIgJgJQBUgoBMgdQB9gzA4gDQAJADAEAHQAWAniqCHQg/AyhMA0QiCBaimBeQiCBMh0A6Qh2A7hmAoQh9Ayg4AEQgKgDgDgHg");
	this.shape_28.setTransform(142.1,-76.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AhsE3QgpgOgkgZIgYgTIgLgKIgCgBIgJgKIgPgPQgvg0gUhAQgFgQgDgRQgHghAAgjQAAh6BPhaQgfAlgRAyQgRAyAEAyQAFAyAGAbQAFAaAFAPQASA7AsAxIANAOIAKAJIAGAGQBkgzBthAQCDhMBshGIAAgRQgBhjg+hRQg6hMhggIQhfgHhBAZQhDAagoAoIADgEQBghgCHAAQBmAABRA2QAVAPAUATIAJAIIAQASQApAuAUA3QAGARAEARIABAEIAEARQAEAdAAAdQAACIhgBgQhgBhiJAAQg5AAgzgSgAikECQAMAJALAGQAkAXAiAAQBUABBNgwQBJgvArhPQAcgyAKg1Qi8CBjcBtg");
	this.shape_29.setTransform(146.5,-77.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgoExQgiAAgkgWQgLgGgMgJQDchtC8iCQgKA1gcAzQgrBOhJAvQhKAvhSAAIgFAAgAitDpIgKgJIgNgOQgsgwgSg7QgFgPgFgbQgGgbgFgxQgEgyARgyQARgyAfglQAFgIAHgHIADgCQAognBDgaQBBgaBfAHQBgAIA6BMQA+BSABBiIAAASQhsBGiDBLQhtBAhkAzIgGgGg");
	this.shape_30.setTransform(143.4,-78.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000033").s().p("AzwTZQjJizAWlYQAVlKDYlmQDil3FukTIAAgBIAFgEQBdhIBmhCQHnk8GuABQG5AAB8FEQB9E+kFHBQjWFwlyEYQhMA5hQAuQi7BsipAtQlABWjqg9QkPhHgcjvQggkPEkmdIABAAQCjkAEdi4QE5jMEVABQEfAABRDUQBRDNipEjQilEdk4DKQkUCzj5AUIgQACQifAHhOhcQhRhbAaifQAaifCAivIAAgBQBhiDCGhwQA5gyBEgtIgDADIABgBIADgCQDDh/CsABQC3AAAyCHIAAgBQA0CChqC2QhjCpi1B7IABAAIgGAEIgDADIgBAAIgJAGIgFABQiZBXh0gCQh5gBgohXQgnhSAxh9IAAAAQAth4CHhhQCIhkBSANQBYALAVA8IAAABQAXA4guBQQgrBLhRA1IAAABIglAVIAAAAIgfAOQguARgigHQgxgLgHgxIAAAAQgGgqAhg0IAAAAQAjg0BFgrQAGgEAIACQAHABAEAHQAEAGgCAHQgBAIgHAEQg9AmggAuQgYAmADAfQADAYAZAFQAYAFAjgNQANgFAOgHIAigUQBKgwAnhEQAkg+gQgsQgQgog/gJQhIgIh5BZIAAAAQh9BZgqBwQgqBsAfBHIAAAAQAgBCBgABQBsAACRhQIAFgEIAHgDIAHgGIAAAAQCuh2BfiiQBeikgrh0QgshwibAAQiiAAi5B4IADgCIgCAAIgCADQhCArg3AxIgBAAQiCBthfCAQh6CngZCYQgYCMBGBQIAAAAQBFBOCLgGIAPgBQDxgUEMitQEvjGCikVQCdkRhIjAQhLi9kDAAQkMABkuDEQkXC0ifD6IgBABQkaGOAcEFQAbDXD1BAQDiA6E2hTQCmgsC1hpQBOgtBKg4QFtkTDSlqQD6mvh1kxQh2ktmdAAQmlAAncE2QhlBBhbBHIgBAAIgFAEIAAAAQloEPjfFxQjTFfgVFCQgUFEC8CoQCiCQEwgUQHfghIilhQJlmNFFovQFBoriXmIQiYmDoTAAQodABpjGLQodFdk9HeQgEAGgHACQgIABgGgEQgGgEgCgHQgBgIAEgGQFBnjIjliQJumTImABQIvAACeGaQCfGVlMI9QlJI3ptGRQoqFnnoAhQgmADglAAQkLAAiXiHg");
	this.shape_31.setTransform(33.9,45.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000033").s().p("AtXCCQklnuBal7IAmgCQhbFzEgHkQDSFiFLEYIg2ACQk7kSjMlWgAFnGBIgFgBIgJgGIAAAAIgEgDIgFgEIAAAAQi1hyhiimQhpixAziEIAAABQAyiKC2gHQCtgIDDB2IABABIABAAIAAAAIABAAQBDAqA4AvQCHBrBhB+IAAABQBPBpAoBkIgnABQgmhahHhdQhfh8iDhoIAAAAQg3guhDgpIgCgDIgBAAIACACQi5hwijAHQiaAGgsByQgrB2BeCfQBfCfCuBvIAAAAIAHAFIAHADIAFAEQCRBKBsgFQA5gDAjgZIAAArQgmATg1ACIgSABQhuAAiPhKgAJej6IABABIgBgBIAAAAgAHoDtQgPgFgQgHIABAAQgTgJgSgLIgBgBQhRgxgshKQgUgigHgeIAmgBQAGAVAPAYQAnBDBKAtIAjATIAaALQAjALAZgGQAYgGAEgYQADgfgYglQgggtg9gkQgHgEgCgIQgBgHADgGQAFgGAHgCQAIgCAGAEQBEAnAkAzIAAABQAhAygHAqIAAABQgGAwgxAOQgMADgOAAQgZAAgegKgABfpGIAAgkQCFgECNAqIAAAnQiNgsiFADg");
	this.shape_32.setTransform(-64,27.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("Ai2B1QARgCAjgPQAfgOAhgSQAigSAlgYQAvgcAmgcQAWgQASgPQAxgpgGgLQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAJgCADAFQAGALgxApIgoAgQgmAbgwAdQgkAYgiARQgiASgeAOQgoARgPAAIgGAAgAiRBTQgFgIAlgeQAJgIATgMIABAEIgVARQgkAdAFAIQAAABAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgFAAQgEAAgCgCg");
	this.shape_33.setTransform(-24.8,-26.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AizByQgGgLAxgoQAWgTAbgTIAHgGIACAGQgTAMgKAIQgkAeAFAIQACADAJgBQAIADAlgQIAYgLQAigQAngaQA0gfAjgcIAFgEQAkgegFgIQgCgDgJABQgLABgZALIgGADIgDgDIgCgCIgCgCQAYgNAVgJQAlgQAQgCQABAAAAABQABAAAAAAQABAAAAABQAAAAABABQAGALgxApQgSAPgXAQQglAcgwAcQglAYghASQgiASgeAOQgkAPgQACQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_34.setTransform(-25.4,-26.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AACATQgHAAgHgGQgHgFgBgIQgBgIAGgGQAFgFAIABQAIAAAHAFQAHAGABAIQABAHgFAHQgFAFgIAAIgCgBg");
	this.shape_35.setTransform(-21,-31);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AB8BZQgegLgigPQghgPglgVQgwgZglgYQgXgNgSgOQgxgmAGgLQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAQABAkANQAWAIAYAKIgCACIgCACIgDADIgGgCQgZgJgLgBQgJAAgCAEQgFAIAkAbIAFADQAjAaAzAbQAoAWAiANIAXAKQAmAMAIgEQAJABACgFQAFgHgkgbQgKgIgTgKIACgGIAHAFQAbARAWAQQAxAmgGAMIgEACQgQgBgkgMg");
	this.shape_36.setTransform(-23.1,-27.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AB6BZQgegLgigPQghgPglgUQgwgagmgXQgVgOgSgOQgyglAGgMQADgEAKAAQgBABgBAAQAAAAgBAAQAAABAAAAQgBAAAAABQgGAMAxAlQASAOAXAOQAlAXAwAZQAlAVAhAPQAiAPAeALQAkANAQAAIgIACQgQAAglgOgACHBJIACgBQAFgJgkgbIgVgPIABgEQATALAKAHQAkAbgFAIQgCADgGAAIgDAAg");
	this.shape_37.setTransform(-23.8,-27.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AghBMQASgJAPgKIAnATIgGAFQgLAHgKAAIgFAAQgVAAgTgMgAANAyQAjgWAggbIgCAOIgDAMQgGARgMAPIgEAEIgDACIgCACIgjgRgAhDApQgIgOgDgPQAcASAeARIgWAMIgIAFQgKgKgHgNgAgLAlQgmgVgfgSIAAgFQAAgcASgYQARgYAbgDQAbgDATAGQAUAHALALIABABIADAEIADAEIABACQAHAIADAKQADAIABAJQgtAfgfAUIgLAHIgFgCg");
	this.shape_38.setTransform(-23.5,-28);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AhCBGQgcgbAAgoIABgPIABgFIAAgBIADgKQAHgQALgPIAFgFIACgCIAMgKQAYgRAcgBQAngCAdAaIAAACQgLgLgUgHQgTgGgbADQgbADgRAXQgSAYAAAdIAAAEQAeATAmAUIAFADIAMgHQAegUAtggQAAgIgDgIQgEgLgGgHQAMAOAFARQACALAAALQAAAKgBAJIgDAKQgGATgOAPIgDAFIgDADIgCAAIgDADIgGAGQgLAIgLAEQgPAGgRABIgFAAQgjAAgagZgAgYBJQAVANAYgCQAJAAALgHIAHgFIgogSQgPAKgRAJgAAWAuIAjARIACgBIADgDIAEgDQAMgPAGgSIACgMIACgNQgfAagjAWgAg6AmQAGAMALAKIAIgFIAWgMQgegQgcgTQACAQAJAOg");
	this.shape_39.setTransform(-24.4,-27.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAEAjQgNABgNgLQgMgLgCgNQgCgPALgKQAJgMAQACQAMACAMAJQANAKAAAPQAFAPgJAKQgHAIgOAAIgGAAg");
	this.shape_40.setTransform(67,-45.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AiPCeQg+g8AAhZQAAhVA+hBQA/hABWgEQAwgCApATQgHAAgGgDQiegWgvCSQguCOBhA9QBiA+ByhHQApgaAZghQgPAsgiAlQhAA9hXADIgLABQhPAAg7g0g");
	this.shape_41.setTransform(58.7,-38.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AhuCXQhhg9AuiOQAviSCeAWQAGADAHAAQAiAOAcAYQA6A8AABVQAAAngJAiQgZAhgpAaQg9Amg4AAQgxAAgugdg");
	this.shape_42.setTransform(62.5,-40.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AADAVQgIAAgHgHQgHgGgCgIQgBgJAGgGQAGgGAJAAQAIABAHAGQAHAHABAIQACAJgGAFQgFAHgJAAIgBgBg");
	this.shape_43.setTransform(113.9,63.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AhWBdQgkgiAAg2QAAgzAkglQAmgnAzgCQAegCAZALQgFAAgFgCQhdgNgdBXQgbBVA5AlQA7AkBFgqQAYgPAOgUQgIAagVAWQglAlg1ADIgFAAQgwAAgkghg");
	this.shape_44.setTransform(109,67.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AhCBbQg6glAchVQAdhXBdANQAFACAEAAQATAJARAPQAjAiAAA0QAAAXgGAUQgOAUgYAPQgmAXghAAQgeAAgbgRg");
	this.shape_45.setTransform(111.2,66);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAEAkQgOgBgMgKQgMgLgCgOQgBgQAKgJQAIgKARAAQANABAMAKQAMAMABAOQADAPgJAJQgJAKgPAAIgCAAg");
	this.shape_46.setTransform(16,59.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AhvCYQhig+AwiOQAxiRCbAVIAPAEQAgANAbAaQA9A6AABXQAAAmgLAiQgYAhgoAZQg/Amg4AAQgyAAgtgcg");
	this.shape_47.setTransform(11.6,64.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AiPCcQg9g6AAhZQAAhXA9g/QA+hABWgEQAzgCAoATIgPgEQibgWgxCRQgwCPBiA9QBhA9B1hHQAogYAYghQgPArgjAlQg+A+hYAEIgKAAQhQAAg6g2g");
	this.shape_48.setTransform(7.8,66.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AACAQQgGAAgFgFQgGgEgBgHQgBgGAFgFQAEgEAHAAQAGAAAFAFQAGAFAAAGQABAGgEAFQgDAEgHAAIgBAAg");
	this.shape_49.setTransform(-28.2,25.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgxBEQgsgcAWg/QAVhBBFAKIAHABQAOAHANALQAbAaAAAmQAAARgFAQQgLAPgRAKQgdASgZAAQgWAAgUgNg");
	this.shape_50.setTransform(-30.2,27.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AhABGQgbgaAAgoQAAgmAbgcQAcgdAngCQAWgBASAIIgHgBQhFgKgVBBQgWA/AsAcQArAbA1ggQARgKALgPQgHATgPARQgcAcgnABIgFAAQgkAAgagYg");
	this.shape_51.setTransform(-31.9,28.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAJBFQgdgBgYgWQgXgUgEgbQgDgdATgUQASgTAeABQAdAAAYAWQAXAVADAbQAEAdgTATQgSATgdAAIgBAAg");
	this.shape_52.setTransform(-93,42.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AkXEwQh4hzAAisQAAiqB4h8QB4h9CqgIQBhgEBQAkQgPgEgOgCQkxgqhfEZQheEYC/B3QC/B3DkiLQBPgvAthCQgdBXhFBHQh2B8isAHIgUABQieAAhwhrg");
	this.shape_53.setTransform(-109,55.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AjbEnQi/h3BfkYQBfkZExAqQAOACAPAEQA+AaAzAyQB4ByAACqQAABKgWBBQguBChOAvQh7BLhvAAQhhAAhZg3g");
	this.shape_54.setTransform(-101.6,51.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAIBFQgcAAgYgXQgXgTgEgcQgEgdAUgUQASgTAeABQAdABAYAVQAXAVADAbQAEAdgTAUQgRASgdAAIgDAAg");
	this.shape_55.setTransform(-128.3,-96.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AGsEzQhmgkh2g2Qh0g1iChGQimhZiChTQhMgxg/gvQiqiAAWgoQAEgHAJgDQA4ABB9AtQBMAaBUAlIgJAJIgHAHIgKALIgVgIQhVgegqgDQgegCgHAMQgQAeB8BdIAQAMQB5BYC0BfQCLBLB0AwQAsASAoAOQCBAtAdgPQAfACAGgMQARgeh9hdQgigZhBglIgBgBIABAAIAEgSIAaARQBfA8BMA4QCqCAgXAoQgDAHgKADQg4gCh9gsg");
	this.shape_56.setTransform(-135.6,-83.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AGkE1Qhmgkh2g2Qh0g1iBhGQinhZiBhSQhNgyg+gvQiriAAWgoQAJgQAjACQgJADgEAHQgWAoCqCAQA/AvBMAxQCCBTCmBZQCCBGB0A1QB2A2BmAkQB9AsA4ACQgKAEgQAAQg3AAiDgugAHTD+QAFgDACgEQAQgch9heQghgagogaIAFgOQBBAlAiAZQB9BdgRAeQgFAKgYAAIgIAAg");
	this.shape_57.setTransform(-137.9,-83.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("Ah4EIQhJgsgrhNQgcgxgKg1QC8B6DcBjQgMAKgLAGQgkAYgiACIgRAAQhLAAhFgogAgpB+QiDhGhshBIAAgSQABhiA+hUQA6hPBggMQBfgLBBAXQBDAXAoAmIADACQAHAHAFAHQAfAjARAyQARAxgEAyQgFAygGAbQgFAbgFAPQgSA8gsAyIgNAPIgKAJIgGAGQhkguhtg8g");
	this.shape_58.setTransform(-136.9,-85.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AjoDyQhghcAAiIQAAgdAEgdIAEgRIABgEQAEgRAGgRQAUg4ApgxIAQgSIAJgJQAUgTAVgQQBRg6BlgEQCIgGBgBdIADADQgogmhDgXQhBgXhfALQhgAMg6BPQg+BUgBBiIAAASQBsBBCDBGQBtA8BkAuIAGgGIAKgJIANgPQAsgyASg8QAFgPAFgbQAGgbAFgyQAEgygRgxQgRgygfgjQBPBWAAB7QAAAigHAiQgDARgFAQQgUBAgvA3IgPAQIgJAKIgCABIgLAKIgYAUQgkAbgpAPQgzAVg6ACIgQABQh+AAhahYgAjNCEQArBNBJAsQBNAtBUgFQAigCAkgYQALgGAMgKQjchji8h6QAKA1AcAxg");
	this.shape_59.setTransform(-140,-84.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000033").s().p("AMEVBQnogMoqlQQptl3lJopQlMouCfmcQCemhIvgYQImgYJuF4QIjFLFBHWQAEAGgBAHQgCAHgGAFQgGAEgIAAQgHgCgEgGQk9nRodlGQpjlxodAWQoTAXiYGJQiXGPFBIcQFFIiJlFzQIiFKHfANQEwAGCiiWQC8iwgUlEQgVlBjTlVQjflolokAIAAAAIgFgDIgBAAQhbhDhlg+QnckhmlARQmdASh2EyQh1E2D6GkQDSFhFtEEQBKA1BOAqQC1BhCmAlQE2BGDihEQD1hKAbjZQAckGkamCIgBgBQifjykXipQkui3kMALQkDALhLC/QhIDECdEJQCiEPEvC5QEMCiDxAKIAPAAQCLAABFhRIAAAAQBGhTgYiLQgZiXh6ihQhfh8iChoIgBAAQg3guhCgpIgCgDIgCAAIADACQi5hwiiAHQibAGgsByQgrB2BeCfQBfCfCuBvIAAAAIAHAFIAHADIAFAEQCRBKBsgFQBggFAghDIAAAAQAfhIgqhrQgqhuh9hTIAAgBQh5hUhIAMQg/ALgQApQgQAtAkA7QAnBDBKAtIAiATIAbALQAjALAYgGQAZgGADgYQADgfgYglQgggtg9gjQgHgEgBgIQgCgHAEgGQAEgHAHgCQAIgCAGAEQBFAoAjAyIAAABQAhAygGAqIAAABQgHAwgxAOQgiAIgugPQgQgFgPgHIAAAAQgSgJgTgLIAAgBQhRgxgrhKQguhNAXg6IAAgBQAVg8BYgQQBSgQCIBeQCHBbAtB3IAAAAQAxB6gnBVQgoBYh5AGQh0AHiZhQIgFgBIgJgGIgBAAIgDgDIgGgEIABAAQi1hyhjimQhqixA0iEIAAABQAyiKC3gHQCsgIDDB2IABABIAAAAIABAAIAAAAQBDAqA5AvQCGBrBhB+IAAABQCACpAaCeQAaCehRBfQhOBfifAAIgQgBQj5gKkUinQk4i9ilkWQipkbBRjRQBRjXEfgMQEVgNE5C/QEdCrCjD5IABAAQEkGRggEQQgcDwkPBTQjqBHlAhIQipgmi7hkQhQgrhMg2QlykIjWlnQkFm2B9lEQB8lJG5gTQGugTHnEoQBmA+BdBEIAFAEIAAABQFuEDDiFuQDYFcAVFJQAWFXjJC7QikCaktAAIgcAAgADxk3IABABIgCgBIABAAg");
	this.shape_60.setTransform(-27.4,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).wait(1));

	// Ñëîé 2
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#6E1E21").s().p("EA5FAI8InHiGIgCgBIgCgBIgHgDIgGgEIgKgJQgFgEgEgHIgDgFQgDgJgBgJIADABIABAAIHHCHQAYAGAVgMQAVgLAIgYIABgFIACgGIAAgJIAAgBQAKADAIAHIACACQAGAGAFAIIAEAKIABADIACAKIAAACIAAAJIgBAHIgBAEQgIAYgVAMQgOAHgPAAQgIAAgIgCgEg3jAISIgIgDQgWgMgIgXIiZnBIAAgCQgDgHAAgGQAAgJACgHQABgGADgGIABgBIAFgKIAEgEQAIgKANgGIAEgBIABAAQgCAIABAIQAAAHADAGIAAADICZHAQAIAXAWALIAIADQASAGASgGIgDAJIgCAGIgCADIgBACIgIAKIgCACIgEAEIgFADIgMAFQgKAEgKAAQgJAAgJgDgEg02AHgIgIgEQgWgMgHgYIh+nIIAAgBQgCgHAAgGQgBgIADgIQABgHADgFIABgDIACgDIACgCIACgBIADgGIABAAQAKgLAPgFQgCAHAAAHQAAAGACAHIAAACIB/HIQAHAYAVAMIAJAEQARAHATgGIACgBIAAAEIAAABQgCAGgEAHIgDAEIgFAHIgDADIgCACIgFAEIgFADIgNAFQgJACgIAAQgLAAgJgEgEAvIAGEIgLgCIgDgBIgDAAIgCgBIgFgDIgGgDIgDgCQgKgHgHgMIgBgCIAAgBIgBgDIgBgBIAAgBIgEgPIACAAIACABIADABIALACQAQAAAPgIQAWgMAHgXICGnGIABgFIABgGIAAgKIAAgBQAIADAHAFIACABQAJAGAGALIAEALIACAGIABAGIAAADIAAAJIgBAGIgBAFIiGHGQgIAYgVALQgOAIgOAAIgDAAgEgtrAFiIgMgHIkeieQgVgLgIgUIgyi0IhyAfIAogsIBzgfIAyC0QAIATAUAMIEeCeIANAGQAOAGANgCIAJgCIAAADQgDAJgFAHIgCAEIgIAIIgCACIgEAEIgFACQgJAGgLACIgHAAQgKAAgLgEgEAyyAEiIBllUIEcBTQAXAHAWgMQAVgNAHgWIACgFIABgGIAAgJIAAgCQAJAEAJAHIABABIAAABIAEADQAFAEADAHIAEAIIABAEIACAKIABACIgBAJIAAAGIgCAGQgHAXgWAMQgWAMgXgHIkchTIhkFUgEApNAExIgLgCIAAAAIgFgCIgCAAIgGgDIgFgDQgMgHgHgMIgBgBIAAgBIAAAAQgHgLgBgNIACABIAFABIABAAIALACQARABAPgKQAWgNAGgYIBhmSICtAqQAYAGAWgMQAVgOAFgYIABgCIABgGIAAgJIAAgCQALAEAJAIIAAABQAFAFAFAHIAGANIACAEIABAHIAAADIAAAJIgBAHIgBABQgGAYgUAOQgWAMgYgGIitgqIhiGTQgGAYgVANQgPAJgQAAIgCAAgEgnqAELIgMgGQgUgOgFgYIhamUIiuAmQgSAFgPgHQgGgCgGgEQgUgNgFgWIgBgBIgBgMQgBgIADgJQABgGADgFIADgGIABAAIACgDIADgEIABgBIACgCQAKgKAOgEQgCAGABAHQAAAGABAGIABABQAFAXAUANQAGAEAFACQAQAGARgEICvgnIBZGVQAGAYAUANIALAGQAQAGASgEIAEgBIAAAAQgCAKgGAKIgBACIgJAKIgCABIgEAEIgFADQgIAEgIACIgNABQgLAAgJgDgEAkbADqInRheIgFgBIgEgCIgDgBIgGgDIgFgDQgEgCgBgDIgGgGQgCgBgCgDIgGgLQgDgIgBgJIAEACIAFABIHRBdQAZAFATgNQAUgMAGgWIAAgEIABgCIABgJIAAgDIAAgDQAJAEAHAGIAIAIIAFAFQAFAJACAIIACAFIABAJIAAACIgBAJIgBACIgBAEQgFAWgUAMQgOAKgRAAIgNgBgEghsADCQgJgDgHgGQgUgOgEgYIhLnUIAAgHQAAgJACgIQABgGADgFIAAgBIAFgIIACgCIAEgEQALgLAOgFQgCAHAAAHIABAHIBLHUQAEAZATAOQAIAGAJADQANAEAOgCIHVhLIAJgCIAAABQgDALgIAKIgCAEIgFAFIgCACIgFAEIgFADQgJAFgLABInVBLIgKABQgJAAgIgDgEgwQgCOIAAgCQgCgGAAgHQAAgIACgIQACgGADgFIABgDQACgEADgDIADgEIADgDQAIgIAMgFQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQgCAGABAIQAAAGACAHIAAABIBZFBIgpAtgAaRB1IjugWIgGgBIgFgCIgCAAIgGgCIgHgEIgGgFIgDgCIgFgFIgGgIIAAgBIgBgBIAAgBIgBgCQgEgHgBgJIAAgCIAAgCIABAAIACABIAGACIAFABIDvAWQAXADATgQQAUgPACgZIAsnYIABgDIgBgJIAIAEIABAAIALAJIADACQAJAJAEAMIACAGIABAGIAAACIAAAKIAAACIgsHYQgDAZgTAPQgQAOgUAAIgHgBgA3bBbQgJgEgHgGQgTgPgDgYIg3nWIAAgHQAAgIACgIIADgJIABgBIAAgBIACgCIADgGIABgCIAHgHQAJgKAOgDQgCAGABAHQgBADABADIA2HXQAEAYASAPQAIAGAIADQANAFAPgCIALgCIgBAFQgCAHgEAGIgEAHIgGAHIgDACIgFAEIgFACQgKAFgLACIgJAAQgKAAgJgDgAS9BKIgHgCIgFgBIgFgBIgCAAIgGgDIgGgCIgHgFIgEgDIgHgJQgJgMgBgRIABAAIACABIAFABIAGABIAGABQAUABAVgRIGUlPIAnAzImVFOQgUARgTAAIgBAAgAwDAkQgJgEgKgHIkCjMQgSgOgEgUIgDgNQAAgHABgIIAEgLIAFgIQANgSASgFQgBAGABAHIACANQAFATARAOIEDDNQAJAHAJAFQAPAFAOgDIALgCQgCAIgEAHIgGALIgGAGIgEACIgEADIgFACQgJAFgLACIgLABQgJAAgJgEgAQDAkInbgWIgKgCIgBAAIgCAAIgFgCIgGgCIgFgEIgFgDIgGgGIgHgJQgIgLgBgNIAEAAIADABIAAAAQAFABAGAAIHaAXQAZABASgRQAOgNAEgSIABgGIAAgEIAAgFIAAgCQAJADAIAHIACACIACABIACACQAJAJAEALIABAGQACAEAAAFIAAACIAAAFIAAAEIgCAGQgDARgPAOQgRAPgXAAIgCAAgAd1gOIBGlcIEjA6QAYAFAVgOQATgNAEgWIACgDIAAgDIABgJIAAgDIAAgCQAKADAHAGIAGAHIAFAHIABABQAFAHACAIIACAGIABAIIAAACIgBAJIgBADIgBADQgEAXgTAMQgVAOgYgFIkjg6IhGFbgAtMAKQgSgPgBgZIgdnZQAAgKACgJQABgGADgFQADgGAEgFIALgLQAIgGAKgDQgCAIABAIIAcHZQACAZASAQQASARAZgCIHagcIAOgDIgBAFIgIAPIgEAGIgKAJIgGAEIgBABQgLAGgOABInaAcIgEAAQgWAAgRgPgAFRAFIjugIQgHAAgFgBIgBAAIgGgCIgGgCIgBAAIgFgEQgGgEgFgGIgFgGIgGgJIgEgNIAAgDIgBgDIAAgIQAAgHACgGQACgKAGgIIAEAIIAGAGQADAFAGAEIAFAEIABAAIAGACIAGABIAAAAIALABIDjAJQAXAAARgQQARgQABgXIAPnCIAAgDIAAgEIAAgBQAGAHAEAIQADAJACAJIAAACIAAAEIAAADIgQHaQgBAZgSAQQgRAQgYAAIgBAAgAiLgLIgJgBIgBAAIgGgCIgGgCIAAAAIgFgCIgLgHIgCgCIgBgCIgDgEQgKgOAAgXQgCgWATgTQADALAFAIIADAEIABABIACACQAEAEAGADIAFACIAFACIAHACIAAAAIAJABQAWAEAWgVIFrlWIAJAqIl/FnQgTATgUAAIgHgBgA+nhMQgIgEgIgFQgSgNgFgUIgBgGIAAgHQAAgJABgHIAEgLIACgDIAAgBIAEgGIABgBIAEgEQAKgMAPgEIgBANIABAIIABAFQAFAUASANQAHAGAJADQANAFAPgDIDpgmIAJgBIAAABQgDALgHAKIgHAJIgDABIgFAFIgEADQgJAFgLABIjqAlIgMACQgIAAgIgDgAJDiXIATmfIAAgGIAAgBIABAAIACAAIAEADIADABQAHAFAGAGQAJAJAEAMIACAFIABAIIAAACIAAAHIgTGfgAmRjtIiwALQgZACgTgQQgOgNgEgQIAAgCIgCgJQAAgLACgIQABgGADgFQADgHAGgHIAEgDQAGgHAJgEIAIgDQgCAHABAJIABAJIABACQAEARAOAMQATAQAYgBICxgLIAHB2IgpAtgEAnNgDVIgBAAIgBAAIgFgCIgCAAIgFgDIgGgCIgIgHIgCgCQgFgFgDgGIgFgJQgDgIgBgIIACAAIAEABIABAAIABABICrApIAnAzgAw5jlIBegLQAGAAAGgCQgDANgJAMIgGAGIgCACIgFAEIgFADQgKAFgMACIhfALgEgnNgD7ICugnIAFgBQgDAKgGAKIgKAMIgCABIgEAEIgFADQgHADgJACIitAngEgg3gFGIGZhBIAJgBQgDAMgHAKIgIAKIgCABIgFAEIgFADQgJAEgKACImaBBgAxamoIliApIApgtIFigpIAOB2IgpAtgAranwIEogSIAOgCQgDAOgLAMIgDAEIgDADIgJAGIgBAAQgLAHgOAAIknATg");
	this.shape_61.setTransform(-6.3,-285.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DC3D42").s().p("EA4dAIqInHiGIgBgBIgDgBQgBgKAEgMICGnGQAHgXAWgNQAVgMAXAIIFWBjIAEABIAAACIAAAJIgBAHIgCAFQgHAXgVAMQgWANgXgIIkchSIhlFTIAnAzIGNB1IAFACIAAABIAAAJIgCAHIgBAEQgIAYgVAMQgOAIgPAAQgIAAgIgDgEg27AIGIgIgDQgWgMgIgXIiZnBIAAgCQgDgHAAgGQgBgJACgHQAWgHAVAKQAWALAJAXICZHBQAEANAAALIgCAIQgJADgJAAQgJAAgJgDgEg0OAHUIgJgEQgVgMgHgYIh/nIIAAgBQgCgHAAgGQAAgHACgHIACgBIDkg/QAXgHAWANQAVAMAGAYIA6DRICSBQIApgsIhZlBIAAgCQgCgGAAgHQgBgHACgHIACAAQAXgHAWAMQAVANAGAYIB/HHQAEANgCANIgBAEIgJACQgNABgOgFIgNgHIkeieQgUgMgIgTIgyi0IhzAgIgoAsIBuGPQAFAOgEAOIgCAAQgJADgIAAQgKAAgJgEgEAugAFyIgLgCIgDgBIgCAAIgCgBQgBgLADgLICHnGQABgGADgFQAHgPARgJQAWgMAYAHIADABIAAACIAAAJIgBAGIgBAFIiGHGQgHAYgWALQgOAIgPAAIgCAAgEAomAEfIgLgCIgBAAIgFgBIgCgBQAAgKACgJIBimSIAAgBIgngyIirgqIgBAAIgBAAIgEgBIgCAAQgBgLADgKQAFgYAVgMQAVgNAYAGIHNBvQAEABADACIAAABIAAAJIgBAHIgBACQgFAYgVANQgWAMgYgFIitgqIhhGSQgGAYgWANQgOAJgRAAIgBAAgEgnDAD/IgLgGQgUgOgGgYIhZmUIivAmQgRAFgQgHQgFgCgGgEQgUgNgFgWIgBgCQgBgFAAgGQgBgHACgHIAEgBIHPhnQAYgFAVANQAVANAFAZQACAJAAAIIgBAGIAAABIgFABIiuAnIgoAtIBZGUQADANgDAMIgEABQgIACgHAAQgJAAgKgDgEAjzADYInRheIgFAAIgEgCQAAgJABgJIBenQQAGgXATgNQAWgOAXAEIFeBGIAIACIAAADIAAACIgBAJIAAADIgCADQgEAXgTAMQgVAOgYgFIkjg6IhGFcIAnAyIGXBSIAJADIAAADIAAACIgBAJIgBACIAAAEQgGAWgUAMQgOAKgRAAIgNgBgEghEAC2QgJgDgIgGQgTgOgEgZIhLnTIgBgHQAAgIACgGIAHgCIHVhLQAZgEAUAPQATAPAEAXIABAKIAAAJIgBADIgJACImZBBIgpAsIA3FfIGahCQAZgEAUAPQAUAPAEAYQACAMgCAJIgJACInVBLIgKABQgJAAgIgDgAZqBkIjvgXIgFgBIgGgCIgCAAIgBgBIAAgEIAAgGIADgMIAEgLIAFgHQAEgGAFgFIAMgIIAJgDQAFgCAGAAIAMAAICyARIAZkPIgngyImUFPQgVAQgUAAIgGgCIgGgBIgFAAIgCgBIgBAAIAAgJQABgZAXgSIICmpQATgPASgBQAMgBAKAFIABAJIgBADIgsHXQgCAZgUAPQgQAOgUAAIgGAAgA20BPQgIgEgIgGQgSgPgEgYIg2nWQgBgEABgDQgBgHACgGQAFgCAFAAIHXg2QAZgEATAQQAUAPADAZIAbDrQABAJgBAJIAAABQgGACgGABIheALIgpAsICVB2QAZATABAXIAAAOIAAADIgLACQgOADgPgGQgJgEgJgIIkDjLQgRgOgFgUIgCgNQgBgGABgHIALgCICxgVIApgsIgOh2IliApIgpAsIAwGcQABAKgBAJIgLACIgHAAQgLAAgKgDgAPbASInagVQgGAAgFgCIAAAAIgDAAIgEgBIAAgIIAWnbQABgYASgQQATgRAYABQAJABAIACIABABIAAABIAAAHIgTGfIAnAyIGeAUQAKAAAIADIAAACIAAAFIAAAEIgBAGQgEASgOANQgRAQgWAAIgEgBgAskgBQgSgQgCgZIgcnZQgBgJACgHQAGgCAHgBIFjgVQAZgBASAQQATAPABAZIAAAHIgBAJIgOACIkoASIgoAtIAVFjIFCgUIABAAIAggCIApgsIgHh3IixALQgYACgTgQQgOgNgEgQIgBgCIgBgJQgBgKACgHQAHgCAHAAIDtgOQAYgCASAQQATARABAYIAODsQABAJgBAIIgOACInaAbIgFABQgWAAgQgOgAFFgXIjjgIIgLgBIAAAAIgGgCIgGgCIgBAAIgFgDQgGgFgDgEIgGgHIgEgHIACgEIAHgHIAHgGQAKgHANgCQAFgBAHAAICzAGIAJkRIgJgpIlrFVQgWAVgWgDIgJgBIAAAAIgHgCIgFgCIgFgDQgGgCgEgEIgCgCIgBgCIgDgDQgFgJgDgLIADgDIHlnGQASgSASgBQAWgDAQAMIACABIAAAAIAHAGIAEAEIAAAAIAAAEIAAAEIgPHBQgBAYgRAQQgQAPgXAAIgBAAgA9/hZQgJgDgHgGQgSgMgFgUIgBgGIgBgHIABgOIAJgCIDqglQAYgEAUAOQATAOAEAZIABALIgBAIIAAADIgJABIjpAlIgLACQgJAAgIgEg");
	this.shape_62.setTransform(-6.2,-288.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6E1E21").s().p("Ac8DvQgMgEgLgLIgGgHQAhgHADgmQACgTgRgSIhuhtIBNAAQAVAAANgOQAOgNAAgUIAAjAQAAgPgHgMIANAAIADAAIAJABIAJADQAHAEAGAGQAOAOAAAUIAADAQAAAUgOAOQgOAOgUAAIhNAAIBtBtQASARgCATQgDAsgsADIgDABQgGAAgFgCgEAofADwQgKAAgIgDIgDgBQgHgEgHgGQgDgEgCgEIFzAAQAUAAANgOQAPgOAAgUQAAgOgIgMIAAAAIAOAAIACAAQASABANANIAHAIQAHALAAAPQAAAUgOAOQgOAOgTAAgAfzDwQgKAAgIgDQgJgEgHgHIgGgIIFzAAQAUAAAOgOQAOgOAAgUQAAgOgIgMIAOAAIADAAQAQABANALIACACIADADQALANAAASQAAAUgOAOQgOAOgUAAgAW9DvIgCgBQgMgDgJgJIgHgJQAMgDAJgKQAOgOABgUIAAlPIEgAAIA2AVIkhAAIAAFQQAAAUgOAOQgOAOgUAAIgLgBgAOfDwQgIAAgHgCIgBAAQgKgEgIgIIgGgIIFzAAQAUAAAOgOQAOgOAAgUIAAl/QAAgPgIgMIAOAAIACAAQAMABAKAGIADABIACACIAFAEQANAOAAAUIAAGAQAAAUgNAOQgPAOgTAAgAFuDvQgNgDgLgKIgGgJQAMgDAKgKQANgOAAgUIAAlPIFRAAQAUAAAOgOQAOgOAAgUQAAgPgIgMIAOAAIADAAQAPABAMAKIADADIACABQANAOAAATQgBAUgOAPQgOANgTAAIlRAAIAAFQQAAAUgOAOQgOAOgUAAQgGAAgFgBgApkDwQgVAAgOgOQgNgOAAgUIAAmAQAAgUANgOIAFgDQAMgLASAAIAFAAQgDAIAAAJIAAGAQAAAUAOAOQAOAOAUAAIF8AAQgFAJgHAIQgFAGgIAEQgJAEgLAAgAyIDwQgUAAgOgOQgOgOAAgUIAAmAQAAgUAOgOIAEgDQAMgLASAAIAGAAQgEAIAAAJIAAGAQAAAUAOAOQAOAOAVAAIF7AAQgEAJgHAIIgLAIQgLAGgMAAgA1PDiQgOgOAAgUIAAmAQAAgUAOgOIABgCQAOgMATAAIAFABQgCAHgBAJIAAGAQAAAUAOAOQANANAQABQgDAJgHAIQgIAHgIAEQgIADgLAAQgUAAgOgOgA9VDwQgTAAgPgOQgOgOAAgUIAAmAQAAgUAOgOIACgCQANgMATAAIAFABQgCAHAAAJIAAGAQAAAUANAOQAPAOATAAIF8AAQgDAJgIAIQgFAFgGADQgKAGgNAAgEgl8ADwQgTAAgOgOQgOgOAAgUIAAi/QAAgbAWgPIEdi9IAHgDIABgBIAHgDIj6ClQgXAQAAAbIAAC+QAAAUAPAOQANAOAVAAIF7AAQgDAJgHAIQgIAHgHADQgJAEgLAAgEgvBADiQgOgOAAgUIAAmAQAAgUAOgOIAEgDQANgLARAAIAFAAQgCAIAAAJIAAGAQAAAUANAOQANANAQABQgDAJgIAIQgJAKgMADIgBAAIgBABIgDAAIgIAAQgTAAgPgOgEAoZAB6IAAkfIFRAAQAUAAANgOQAPgOAAgUQAAgMgEgKIgEgFIAOAAIACAAQASABANANIAGAGIAEAHQAEAKAAALQAAAUgOAPQgOANgTAAIlSAAIAAEggAfuB6IAAkfIDwAAQAUAAAOgOQAOgOAAgUQAAgPgHgMIAMAAIAEAAQARABANANIACABQANAOAAATQAAAUgPAPQgNANgVAAIjwAAIAAEggAOZB6IAAh2IEAipIAhAAIA1AVIghAAIgTANIgBABIjrCbIAAB3gEggqgCQIgfAAIAvgfIAhAAIAAEgIgxAfgEArfAAwQgMAAgKgFQgHgEgFgGIgGgHICzAAQAUAAANgOQAPgNAAgUQAAgPgIgLIAOAAIACAAIAIABQAGABAHAEIAKAIQAOAOAAATQAAAUgOANQgOAPgTAAgAI5AwQgJAAgIgDQgJgEgIgHIgGgIICzAAQAUAAAOgOQAOgNAAgUQAAgPgIgLIAOAAIADAAQASABAMANIAEACIABACIABACQAIAMABAPQgBAUgOAOQgOAOgTAAgAmkAwQgUAAgOgPQgOgNAAgUIAAAAQAAgTAOgOIACgCIABAAIACgBQAMgLARAAIAGAAQgDAHAAAJIAAABQAAAUANANQAOAOAVAAIC7AAQgFAJgHAHIgGAGIgHAFQgKAEgKAAgEgreAAwQgUAAgPgOQgNgOAAgUIAAAAQAAgSAMgNIABgCQAPgOAUAAIAFAAQgDAHAAAJIAAABQAAAUAOANQAOAOAUAAIC7AAQgDAJgIAIQgFAGgHADQgKAFgMAAgEgpOgCQIkgAAIAxgfIEhAAIAABhIgyAfgAo1iQIAzgfIFMAAQgEAKgIAIQgFAFgHAEQgKAEgLAAgAxYiQIAygfIDrAAQgDAKgHAIQgHAGgJAEQgIADgLAAg");
	this.shape_63.setTransform(-1.3,-171.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DC3D42").s().p("EAn5ADmQgIgMAAgPIAAmAQAAgTANgPQAOgNAUAAIF0AAIADAEQAFAKAAAMQAAAUgPAOQgNAOgUAAIlRAAIAAEfIA1AWIFEAAIAAABQAIALAAAPQAAATgPAOQgNAOgUABgAfNDmQgIgMAAgPIAAmAQAAgTAOgPQAOgNAUAAIETAAQAIALAAAPQAAAUgOAOQgOAOgUAAIjxAAIAAEfIA2AWIFDAAQAIAMAAAPQAAATgOAOQgOAOgUABgAN5DmQgIgMAAgPIAAi/QAAgaAWgQIEdi9QAPgJAPAAIBSAAQAIALAAAPIAAGAQAAATgOAOQgOAOgUABgAObAPIAAB2IA2AWIEgAAIAAkfIg1gWIgiAAgAZqAvQgHgIgEgIIgEgOQgEgVAPgQQAPgQAVAAICQAAIAAhgIg2gWIkgAAIAAFQQAAATgOAOQgJAKgMAEQgHgMAAgOIAAmAQAAgTAOgPQAOgNAUAAIF0AAQAHALAAAPIAADAQAAATgOAOQgOAOgUAAIhNAAIBtBuQASARgCATQgDAmgiAIgAFLDLIAAmAQAAgTANgPQAPgNAUAAIFzAAQAIALAAAPQAAAUgOAOQgOAOgUAAIlRAAIAAFQQAAATgOAOQgJAKgMAEQgHgMAAgOgAowDdQgUAAgPgPQgNgOAAgTIAAmAQAAgKADgHIF7AAQAUAAAOANQAGAGADAHQAFAJAAAMQAAAKgDAHIlLAAIgzAgIAAEfIFRAAQAUAAAOAOQAGAGADAHQAFAJAAAMQAAAJgDAJgAxUDdQgUAAgOgPQgOgOAAgTIAAmAQAAgKADgHIEbAAQAUAAAOANQAGAGADAGQAFAKAAAMQAAAKgDAHIjrAAIgyAgIAAEfIFRAAQAUAAANAOQAGAGAEAHQAFAJAAAMQAAAJgDAJgA0bDOQgOgOAAgTIAAmAQAAgKADgHIABAAQAQABAMAMIAJAMQAFAKAAAMIAAGAQAAAJgDAJQgRgCgMgNgA8hDdQgUAAgOgPQgNgOAAgTIAAmAQAAgKACgHIABAAQAQABAMAMQAGAGADAGQAFAKAAAMIAAFQIFRAAQAUAAAOAOQAFAGAEAHQAFAJAAAMQAAAJgDAJgEglIADdQgUAAgNgPQgPgOAAgTIAAi/QAAgbAXgPID5imIACAAQAHgDAHABIBfAAQAUAAAOANIAJAMQAFAKAAAMIAAGAQAAAJgDAJgEglJAAkIAAB3IEgAAIAygfIAAkgIghAAIgvAgIgEAAgEguNADOQgOgOAAgTIAAmAQAAgKADgHIF8AAQAUAAAOANQAFAGAEAHQAFAJAAAMIAADAQAAAJgDAIIi7AAQgUAAgOgOQgOgOAAgTIAAgBQAAgJADgHICKAAIAzgfIAAhhIkhAAIgyAgIAAFPQAAAJgDAJQgQgCgNgNgEAq5AAlQgIgLAAgPIAAgCQABgRANgOQAOgOAUAAICzAAQAIAMAAAOQAAATgPAOQgNAOgUAAgAITAlQgIgLAAgPIAAgCQABgRANgOQAOgOAUAAICzAAQAIAMAAAOQAAATgOAOQgOAOgUAAgAlwAcQgUAAgOgOQgOgOAAgTIAAgBQAAgJADgHIC7AAQAUAAAOAOQAGAGADAGQAFAKAAALQAAAJgDAIg");
	this.shape_64.setTransform(-1.5,-172.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DC3D42").s().p("Eg5JAIlQgVgMgIgYIgBgEIgCgHIAAgJIAAgBIAFgCIGNh1IAngzIhllTIkcBSQgXAIgWgNQgVgMgHgXIgCgFIgBgHIAAgJIAAgCIAEgBIFWhjQAXgIAVAMQAWANAHAXICGHGQAEAMgBAKIgDABIgBABInHCGQgIADgIAAQgPAAgOgIgEA2YAIGIgCgIQAAgLAEgNICZnBQAJgXAWgLQAVgKAWAHQACAHgBAJQAAAGgDAHIAAACIiZHBQgIAXgWAMIgIADQgJADgJAAQgJAAgJgDgEAzrAHVIgCAAQgEgOAFgOIBumPIgogsIhzggIgyC0QgIATgUAMIkeCeIgNAHQgOAFgNgBIgJgCIgBgEQgCgNAEgNIB/nHQAGgYAVgNQAWgMAXAHIACAAQACAHgBAHQAAAHgCAGIAAACIhZFBIApAsICShQIA6jRQAGgYAVgMQAWgNAXAHIDkA/IACABQACAHAAAHQAAAGgCAHIAAABIh/HIQgHAYgVAMIgJAEQgJAEgKAAQgIAAgJgDgEgu+AFqQgWgLgHgYIiGnGIgBgFIgBgGIAAgJIAAgCIADgBQAYgHAWAMQARAJAHAPQADAFABAGICHHGQADALgBALIgCABIgCAAIgDABIgLACIgCAAQgPAAgOgIgEgpFAEWQgWgNgGgYIhhmSIitAqQgYAFgWgMQgVgNgFgYIgBgCIgBgHIAAgJIAAgBQADgCAEgBIHNhvQAYgGAVANQAVAMAFAYQADAKgBALIgCAAIgEABIgBAAIgBAAIirAqIgnAyIAAABIBiGSQACAJAAAKIgCABIgFABIgBAAIgLACIgBAAQgRAAgOgJgEAmiAEAIgEgBQgDgMADgNIBZmUIgogtIiugnIgFgBIAAgBIgBgGQAAgIACgJQAFgZAVgNQAVgNAYAFIHPBnIAEABQACAHgBAHQAAAGgBAFIgBACQgFAWgUANQgGAEgFACQgQAHgRgFIivgmIhZGUQgGAYgUAOIgLAGQgKADgJAAQgHAAgIgCgEgkeADPQgUgMgGgWIAAgEIgBgCIgBgJIAAgCIAAgDIAJgDIGXhSIAngyIhGlcIkjA6QgYAFgVgOQgTgMgEgXIgCgDIAAgDIgBgJIAAgCIAAgDIAIgCIFehGQAXgEAWAOQATANAGAXIBeHQQABAJAAAJIgEACIgFAAInRBeIgNABQgRAAgOgKgEAgqAC4InVhLIgJgCQgCgJACgMQAEgYAUgPQAUgPAZAEIGaBCIA3lfIgpgsImZhBIgJgCIgBgDIAAgJIABgKQAEgXATgPQAUgPAZAEIHVBLIAHACQACAGAAAIIgBAHIhLHTQgEAZgTAOQgIAGgJADQgIADgJAAIgKgBgA6TBWQgUgPgCgZIgsnXIgBgDIABgJQAKgFAMABQASABATAPIICGpQAXASABAZIAAAJIgBAAIgCABIgFAAIgGABIgGACQgUAAgVgQImUlPIgnAyIAZEPICygRIAMAAQAGAAAFACIAJADIAMAIQAFAFAEAGIAFAHIAEALIADAMIAAAGIAAAEIgBABIgCAAIgGACIgFABIjvAXIgGAAQgUAAgQgOgAWZBSIgLgCQgBgJABgKIAwmcIgpgsIligpIgOB2IApAsICxAVIALACQABAHgBAGIgCANQgFAUgRAOIkDDLQgJAIgJAEQgPAGgOgDIgLgCIAAgDIAAgOQABgXAZgTICVh2IgpgsIhegLQgGgBgGgCIAAgBQgBgJABgJIAbjrQADgZAUgPQATgQAZAEIHXA2QAFAAAFACQACAGgBAHQABADgBAEIg2HWQgEAYgSAPQgIAGgIAEQgKADgLAAIgHAAgAwFADQgOgNgEgSIgBgGIAAgEIAAgFIAAgCQAIgDAKAAIGegUIAngyIgTmfIAAgHIAAgBIABgBQAIgCAJgBQAYgBATARQASAQABAYIAWHbIAAAIIgEABIgDAAIAAAAQgFACgGAAInaAVIgEABQgWAAgRgQgAL6AMInagbIgOgCQgBgIABgJIAOjsQABgYATgRQASgQAYACIDtAOQAHAAAHACQACAHgBAKIgBAJIgBACQgEAQgOANQgTAQgYgCIixgLIgHB3IApAsIAgACIABAAIFCAUIAVljIgogtIkogSIgOgCIgBgJIAAgHQABgZATgPQASgQAZABIFjAVQAHABAGACQACAHgBAJIgcHZQgCAZgSAQQgQAOgWAAIgFgBgAlsgmQgRgQgBgYIgPnBIAAgEIAAgEIAAAAIAEgEIAHgGIAAAAIACgBQAQgMAWADQASABASASIHlHGIADADQgDALgFAJIgDADIgBACIgCACQgEAEgGACIgFADIgFACIgHACIAAAAIgJABQgWADgWgVIlrlVIgJApIAJERICzgGQAHAAAFABQANACAKAHIAHAGIAHAHIACAEIgEAHIgGAHQgDAEgGAFIgFADIgBAAIgGACIgGACIAAAAIgLABIjjAIIgBAAQgXAAgQgPgAdkhXIjpglIgJgBIAAgDIgBgIIABgLQAEgZATgOQAUgOAYAEIDqAlIAJACIABAOIgBAHIgBAGQgFAUgSAMQgHAGgJADQgIAEgJAAIgLgCg");
	this.shape_65.setTransform(6.7,-284.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6E1E21").s().p("Eg5xAI3QgVgMgIgYIgBgEIgBgHIAAgJIAAgCIACgKIABgDIAEgKQAFgIAGgGIACgCQAIgHAKgDIAAABIAAAJIACAGIABAFQAIAYAVALQAVAMAYgGIHHiHIABAAIADgBQgBAJgDAJIgDAFQgEAHgFAEIgKAJIgGAEIgHADIgCABIgCABInHCGQgIACgIAAQgPAAgOgHgEA2+AIRIgMgFIgFgDIgEgEIgCgCIgIgKIgBgCIgCgDIgCgGIgDgJQASAGASgGIAIgDQAWgLAIgXICZnAIAAgDQADgGAAgHQABgIgCgIIABAAIAEABQANAGAIAKIAEAEIAFAKIABABQADAGABAGQACAHAAAJQAAAGgDAHIAAACIiZHBQgIAXgWAMIgIADQgJADgJAAQgKAAgKgEgEA0SAHiIgNgFIgFgDIgFgEIgCgCIgDgDIgFgHIgDgEQgEgHgCgGIAAgBIAAgEIACABQATAGARgHIAJgEQAVgMAHgYIB/nIIAAgCQACgHAAgGQAAgHgCgHQAPAFAKALIABAAIADAGIACABIACACIACADIABADQADAFABAHQADAIgBAIQAAAGgCAHIAAABIh+HIQgHAYgWAMIgIAEQgJAEgLAAQgIAAgJgCgEgvmAF8QgVgLgIgYIiGnGIgBgFIgBgGIAAgJIAAgDIABgGIACgGIAEgLQAGgLAJgGIACgBQAHgFAIgDIAAABIAAAKIABAGIABAFICGHGQAHAXAWAMQAPAIAQAAIALgCIADgBIACgBIACAAIgEAPIAAABIgBABIgBADIAAABIgBACQgHAMgKAHIgDACIgGADIgFADIgCABIgDAAIgDABIgLACIgDAAQgOAAgOgIgEAtQAFmQgLgCgJgGIgFgCIgEgEIgCgCIgIgIIgCgEQgFgHgDgJIAAgDIAJACQANACAOgGIANgGIEeieQAUgMAIgTIAyi0IBzAfIAoAsIhygfIgyC0QgIAUgVALIkeCeIgMAHQgLAEgKAAIgHAAgEg08AAAIkcBTQgXAHgWgMQgWgMgHgXIgCgGIAAgGIgBgJIABgCIACgKIABgEIAEgIQADgHAFgEIAEgDIAAgBIABgBQAJgHAJgEIAAACIAAAJIABAGIACAFQAHAWAVANQAWAMAXgHIEchTIBlFUIgnAygEgptAEoQgVgNgGgYIhimTIitAqQgYAGgWgMQgUgOgGgYIgBgBIgBgHIAAgJIAAgDIABgHIACgEIAGgNQAFgHAFgFIAAgBQAJgIALgEIAAACIAAAJIABAGIABACQAFAYAVAOQAWAMAYgGICtgqIBhGSQAGAYAWANQAPAKARgBIALgCIABAAIAFgBIACgBQgBANgHALIAAAAIAAABIgBABQgHAMgMAHIgFADIgGADIgCAAIgFACIAAAAIgLACIgCAAQgQAAgPgJgEAnKAENQgIgCgIgEIgFgDIgEgEIgCgBIgJgKIgBgCQgGgKgCgKIAAAAIAEABQASAEAQgGIALgGQAUgNAGgYIBZmVICvAnQARAEAQgGQAFgCAGgEQAUgNAFgXIABgBQABgGAAgGQABgHgCgGQAOAEAKAKIACACIABABIADAEIACADIABAAIADAGQADAFABAGQADAJgBAIIgBAMIgBABQgFAWgUANQgGAEgGACQgPAHgSgFIiugmIhaGUQgFAYgUAOIgMAGQgJADgLAAIgNgBgEglGADhQgUgMgFgWIgBgEIgBgCIgBgJIAAgCIABgJIACgFQACgIAFgJIAFgFIAIgIQAHgGAJgEIAAADIAAADIABAJIABACIAAAEQAGAWAUAMQATANAZgFIHRhdIAFgBIAEgCQgBAJgDAIIgGALQgCADgCABIgGAGQgBADgEACIgFADIgGADIgDABIgEACIgFABInRBeIgNABQgRAAgOgKgEAhSADEInVhLQgLgBgJgFIgFgDIgFgEIgCgCIgFgFIgCgEQgIgKgDgLIAAgBIAJACIHVBLQAOACANgEQAJgDAIgGQATgOAEgZIBLnUIABgHQAAgHgCgHQAOAFALALIAEAEIACACIAFAIIAAABQADAFABAGQACAIAAAJIAAAHIhLHUQgEAYgUAOQgHAGgJADQgIADgJAAIgKgBgEAuPACGIBZlBIAAgBQACgHAAgGQABgIgCgGQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAQAMAFAIAIIADADIADAEQADADACAEIABADQADAFACAGQACAIAAAIQAAAHgCAGIAAACIhZFBgA67BoQgTgPgDgZIgsnYIAAgCIAAgKIAAgCIABgGIACgGQAEgMAJgJIADgCIALgJIABAAIAIgEIgBAJIABADIAsHYQACAZAUAPQATAQAXgDIDvgWIAFgBIAGgCIACgBIABAAIAAACIAAACQgBAJgEAHIgBACIAAABIgBABIAAABIgGAIIgFAFIgDACIgGAFIgHAEIgGACIgCAAIgFACIgGABIjuAWIgHABQgUAAgQgOgAXABeQgLgCgKgFIgFgCIgFgEIgDgCIgGgHIgEgHQgEgGgCgHIgBgFIALACQAPACANgFQAIgDAIgGQASgPAEgYIA2nXQABgDgBgDQABgHgCgGQAOADAJAKIAHAHIABACIADAGIACACIAAABIABABIADAJQACAIAAAIIAAAHIg3HWQgDAYgTAPQgHAGgJAEQgJADgJAAIgKAAgAzkA5ImVlOIAngzIGUFPQAVARAUgBIAGgBIAGgBIAFgBIACgBIABAAQgBARgJAMIgHAJIgEADIgHAFIgGACIgGADIgCAAIgFABIgFABIgHACIgBAAQgTAAgUgRgAPnAnQgLgCgJgFIgFgCIgEgDIgEgCIgGgGIgGgLQgEgHgCgIIALACQAOADAPgFQAJgFAJgHIEDjNQARgOAFgTIACgNQABgHgBgGQASAFANASIAFAIIAEALQABAIAAAHIgDANQgEAUgSAOIkCDMQgKAHgJAEQgJAEgJAAIgLgBgAwsAVQgPgOgDgRIgCgGIAAgEIAAgFIAAgCQAAgFACgEIABgGQAEgLAJgJIACgCIACgBIACgCQAIgHAJgDIAAACIAAAFIAAAEIABAGQAEASAOANQASARAZgBIHagXQAGAAAFgBIAAAAIADgBIAEAAQgBANgIALIgHAJIgGAGIgFADIgFAEIgGACIgFACIgCAAIgBAAIgKACInbAWIgCAAQgXAAgRgPgA/hk4IkjA6QgYAFgVgOQgTgMgEgXIgBgDIgBgDIgBgJIAAgCIABgIIACgGQACgIAFgHIABgBIAFgHIAGgHQAHgGAKgDIAAACIAAADIABAJIAAADIACADQAEAWATANQAVAOAYgFIEjg6IBGFcIgnAxgAMiAZInagcQgOgBgLgGIgBgBIgGgEIgKgJIgEgGIgIgPIgBgFIAOADIHaAcQAZACASgRQASgQACgZIAcnZQABgIgCgIQAKADAIAGIALALQAEAFADAGQADAFABAGQACAJAAAKIgdHZQgBAZgSAPQgRAPgWAAIgEAAgAl6gLQgSgQgBgZIgQnaIAAgDIAAgEIAAgCQACgJADgJQAEgIAGgHIAAABIAAAEIAAADIAPHCQABAXARAQQARAQAXAAIDjgJIALgBIAAAAIAGgBIAGgCIABAAIAFgEQAGgEADgFIAGgGIAEgIQAGAIACAKQACAGAAAHIAAAIIgBADIAAADIgEANIgGAJIgFAGQgFAGgGAEIgFAEIgBAAIgGACIgGACIgBAAQgFABgHAAIjuAIIgBAAQgYAAgRgQgABegdIl/lnIAJgqIFrFWQAWAVAWgEIAJgBIAAAAIAHgCIAFgCIAFgCQAGgDAEgEIACgCIABgBIADgEQAFgIADgLQATATgCAWQAAAXgKAOIgDAEIgBACIgCACIgLAHIgFACIAAAAIgGACIgGACIgBAAIgJABIgHABQgUAAgTgTgAeMhLIjqglQgLgBgJgFIgEgDIgFgFIgDgBIgHgJQgHgKgDgLIAAgBIAJABIDpAmQAPADANgFQAJgDAHgGQASgNAFgUIABgFIABgIIgBgNQAPAEAKAMIAEAEIABABIAEAGIAAABIACADIAEALQABAHAAAJIAAAHIgBAGQgFAUgSANQgIAFgIAEQgIADgIAAIgMgCgAp8oDIAAgHIAAgCIABgIIACgFQAEgMAJgJQAGgGAHgFIADgBIAEgDIACAAIABAAIAAABIAAAGIATGfIgnAzgAFiijIAHh2ICxALQAYABATgQQAOgMAEgRIABgCIABgJQABgJgCgHIAIADQAJAEAGAHIAEADQAGAHADAHQADAFABAGQACAIAAALIgCAJIAAACQgEAQgOANQgTAQgZgCIiwgLIgHB3gEgpQgDeICrgpIABgBIABAAIAEgBIACAAQgBAIgDAIIgFAJQgDAGgFAFIgCACIgIAHIgGACIgFADIgCAAIgFACIgBAAIgBAAIirAqgAQEjDQgMgCgKgFIgFgDIgFgEIgCgCIgGgGQgJgMgDgNQAGACAGAAIBeALIApAtgEAlJgD2QgJgCgHgDIgFgDIgEgEIgCgBIgKgMQgGgKgDgKIAFABICuAnIAoAsgAbHlaQgKgCgJgEIgFgDIgFgEIgCgBIgIgKQgHgKgDgMIAJABIGZBBIApAtgAQklfIAOh2IFiApIApAtIligpIgOB2gAHcnWQgOAAgLgHIgBAAIgJgGIgDgDIgDgEQgLgMgDgOIAOACIEoASIAoAtg");
	this.shape_66.setTransform(6.8,-281.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DC3D42").s().p("AzrDmQgUgBgOgOQgOgOAAgTIAAmAQAAgPAIgLIBSAAQAPAAAPAJIEdC9QAWAQAAAaIAAC/QAAAPgIAMgAzwiEIAAEfIEgAAIA2gWIAAh2Ij/ipIgiAAgEgk/ADmQgUgBgOgOQgOgOAAgTQAAgPAIgMIFDAAIA2gWIAAkfIjxAAQgUAAgOgOQgOgOAAgUQAAgPAIgLIETAAQAUAAAOANQAOAPAAATIAAGAQAAAPgIAMgEgtrADmQgUgBgNgOQgPgOAAgTQAAgPAIgLIAAgBIFEAAIA1gWIAAkfIlRAAQgUAAgNgOQgPgOAAgUQAAgMAFgKIADgEIF0AAQAUAAAOANQANAPAAATIAAGAQAAAPgIAMgAlmDXQgOgOAAgTIAAlQIlRAAQgUAAgOgOQgOgOAAgUQAAgPAIgLIFzAAQAUAAAPANQANAPAAATIAAGAQAAAOgHAMQgMgEgJgKgA21DXQgOgOAAgTIAAlQIkgAAIg2AWIAABgICQAAQAVAAAPAQQAPAQgEAVIgEAOQgEAIgHAIIi2C2QgigIgDgmQgCgTASgRIBthuIhNAAQgUAAgOgOQgOgOAAgTIAAjAQAAgPAHgLIF0AAQAUAAAOANQAOAPAAATIAAGAQAAAOgHAMQgMgEgJgKgEAtuADLIAAlPIgyggIkhAAIAABhIAzAfICKAAQADAHAAAJIAAABQAAATgOAOQgOAOgUAAIi7AAQgDgIAAgJIAAjAQAAgMAFgJQAEgHAFgGQAOgNAUAAIF8AAQADAHAAAKIAAGAQAAATgOAOQgNANgQACQgDgJAAgJgAfNDdQgDgJAAgJIAAmAQAAgMAFgKIAJgMQAOgNAUAAIBfAAQAHgBAHADIACAAID5CmQAXAPAAAbIAAC/QAAATgPAOQgNAPgUAAgAf4B8IAyAfIEgAAIAAh3Ij+ioIgEAAIgvggIghAAgAWmDdQgDgJAAgJQAAgMAFgJQAEgHAFgGQAOgOAUAAIFRAAIAAlQQAAgMAFgKQADgGAGgGQAMgMAQgBIABAAQACAHAAAKIAAGAQAAATgNAOQgOAPgUAAgAT8DLIAAmAQAAgMAFgKIAJgMQAMgMAQgBIABAAQADAHAAAKIAAGAQAAATgOAOQgMANgRACQgDgJAAgJgALZDdQgDgJAAgJQAAgMAFgJQAEgHAGgGQANgOAUAAIFRAAIAAkfIgyggIjrAAQgDgHAAgKQAAgMAFgKQADgGAGgGQAOgNAUAAIEbAAQADAHAAAKIAAGAQAAATgOAOQgOAPgUAAgAC2DdQgDgJAAgJQAAgMAFgJQADgHAGgGQAOgOAUAAIFRAAIAAkfIgzggIlLAAQgDgHAAgKQAAgMAFgJQADgHAGgGQAOgNAUAAIF7AAQADAHAAAKIAAGAQAAATgNAOQgPAPgUAAgArFAlQgUAAgOgOQgOgOAAgTQAAgOAIgMICzAAQAUAAAOAOQANAOABARIAAACQAAAPgIALgEgtrAAlQgUAAgNgOQgPgOAAgTQAAgOAIgMICzAAQAUAAAOAOQANAOABARIAAACQAAAPgIALgAC2AcQgDgIAAgJQAAgLAFgKQADgGAGgGQAOgOAUAAIC7AAQADAHAAAJIAAABQAAATgOAOQgOAOgUAAg");
	this.shape_67.setTransform(-1.1,-172.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6E1E21").s().p("A9JDwQgsgDgDgsQgCgTASgRIBthtIhNAAQgUAAgOgOQgOgOAAgUIAAjAQAAgUAOgOQAHgGAHgEIAIgDIAJgBIADAAIANAAQgHAMAAAPIAADAQAAAUAOANQANAOAVAAIBNAAIhuBtQgRASACATQACAmAjAHIgHAHQgLALgMAEQgFACgGAAIgDgBgEAuYADwIgCAAIgCgBIgBAAQgMgDgJgKQgIgIgDgJQAQgBANgNQANgOAAgUIAAmAQAAgJgDgIIAGAAQASAAAMALIAEADQAOAOgBAUIAAGAQABAUgOAOQgPAOgTAAIgIAAgAf7DwQgKAAgJgEQgIgDgHgHQgHgIgEgJIF8AAQAVAAANgOQAPgOAAgUIAAi+QAAgbgYgQIj5ilIAGADIACABIAHADIEdC9QAWAPAAAbIAAC/QAAAUgOAOQgOAOgTAAgAXVDwQgNAAgKgGQgGgDgFgFQgIgIgDgJIF7AAQAVAAAOgOQANgOAAgUIAAmAQAAgJgDgHIAGgBQASAAAOAMIACACQAOAOgBAUIAAGAQABAUgOAOQgPAOgTAAgAUbDtQgJgEgGgHQgIgIgDgJQAQgBANgNQANgOAAgUIAAmAQABgJgDgHIAFgBQATAAAOAMIABACQAOAOAAAUIAAGAQAAAUgOAOQgOAOgUAAQgLAAgIgDgAMIDwQgMAAgLgGIgKgIQgIgIgEgJIF7AAQAVAAAOgOQAOgOAAgUIAAmAQAAgJgEgIIAGAAQARAAANALIAEADQAOAOAAAUIAAGAQAAAUgOAOQgOAOgUAAgADkDwQgLAAgKgEQgGgEgGgGQgHgIgFgJIF8AAQAUAAAOgOQAOgOAAgUIAAmAQAAgJgDgIIAFAAQASAAANALIAEADQANAOAAAUIAAGAQAAAUgNAOQgOAOgVAAgAmaDiQgOgOAAgUIAAlQIlRAAQgTAAgOgNQgOgPgBgUQABgTANgOIABgBIACgDQANgKAPgBIADAAIAOAAQgIAMAAAPQAAAUAOAOQAOAOAUAAIFRAAIAAFPQAAAUANAOQAKAKAMADIgHAJQgKAKgNADQgFABgGAAQgUAAgOgOgA0fDwQgTAAgPgOQgOgOAAgUIAAmAQAAgUAOgOIAEgEIADgCIADgBQAKgGALgBIADAAIAOAAQgIAMAAAPIAAF/QAAAUAOAOQAOAOAUAAIFzAAIgGAIQgIAIgKAEIgBAAQgHACgIAAgA3pDiQgOgOAAgUIAAlQIkhAAIA2gVIEgAAIAAFPQABAUAOAOQAJAKAMADIgHAJQgJAJgMADIgCABIgLABQgUAAgOgOgEglzADwQgUAAgOgOQgOgOAAgUQAAgSALgNIADgDIACgCQAMgLARgBIADAAIAOAAQgJAMABAOQAAAUAOAOQAOAOATAAIF0AAIgGAIQgHAHgJAEQgIADgKAAgEgufADwQgTAAgOgOQgOgOgBgUQABgPAHgLIAHgIQANgNARgBIADAAIAOAAIAAAAQgIAMAAAOQAAAUAPAOQANAOAUAAIFzAAQgCAEgEAEQgFAGgIAEIgDABQgIADgKAAgAf6BxIAAkgIAhAAIAvAfIgfAAIAAEggAvOAZIjribIAAgBIgUgNIghAAIA1gVIAhAAIEACpIAAB2Ig2AWgEggigCQIjwAAQgVAAgOgNQgNgPAAgUQAAgTAMgOIABgBQANgNATgBIADAAIAMAAQgHAMAAAPQAAAUAOAOQAOAOAUAAIDxAAIAAEfIg2AWgEgpNgCQIlSAAQgTAAgOgNQgOgPgBgUQABgLAEgKIAEgHIAGgGQANgNARgBIADAAIAOAAIgDAFQgFAKAAAMQAAAUAPAOQANAOAUAAIFRAAIAAEfIg1AWgEAofAAwQgMAAgKgFQgGgDgGgGQgIgIgDgJIC7AAQAUAAAOgOQAOgNAAgUIAAgBQAAgJgDgHIAFAAQAUAAAOAOIACACQAMANAAASIAAAAQAAAUgOAOQgOAOgUAAgADkAwQgKAAgKgEIgHgFIgGgGQgHgHgFgJIC7AAQAUAAAPgOQAOgNAAgUIAAgBQgBgJgDgHIAGAAQARAAAMALIACABIABAAIACACQAOAOAAATIAAAAQAAAUgOANQgOAPgUAAgAr5AwQgTAAgOgOQgOgOgBgUQAAgPAJgMIABgCIABgCIAEgCQAMgNASgBIADAAIAOAAQgIALAAAPQAAAUAOANQAOAOAUAAICzAAIgGAIQgHAHgKAEQgIADgJAAgEgufAAwQgTAAgOgPQgOgNgBgUQABgTAOgOIAKgIQAGgEAHgBIAHgBIADAAIAOAAQgIALAAAPQAAAUAPANQANAOAUAAICzAAIgGAHQgFAGgHAEQgKAFgMAAgEAodgBOIAAhhIEhAAIAxAfIkgAAIAABhgANoiQQgKAAgIgDQgJgEgHgGQgHgIgEgKIDrAAIAzAfgADkiQQgLAAgKgEQgGgEgGgFQgIgIgEgKIFMAAIAzAfg");
	this.shape_68.setTransform(-1.3,-171.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).wait(1));

	// Layer_10
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#748AAF","#C0C7D9","#758BB0"],[0.075,0.471,0.902],-414.1,293.5,334.8,293.5).s().p("EA1KAJjUg1tgPsg0zAPdQh1Aih0AlIgNgiQh2lIhxlVQBjgiBjgfUA5HgSPA6MASUQBmAgBoAjQhzFXh2FJIgPApQh6gmh4gjg");
	this.shape_69.setTransform(0.2,-287.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#586985").s().p("EA0sAL6Ug1JgPTg0NAPMQirAyiqA2IgjheQh8lXh2lnQAygSAzgRQByFWB2FJIAMAhQB1gkB0giUA00gPeA1tAPtQB4AjB5AmIAPgqQB2lIBzlZIBcAfQh4Fuh+FbIgfBWQiqg3ipgwgEA+qAAEIhegeIiQgwIg6gSUg6kgSjg5eASeIg7ASIiIAtIhlAiIhLAaIGmk8UA5hgSOA6oAS2IE4EXIhKgZg");
	this.shape_70.setTransform(-0.3,-293.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C0C7D9").s().p("EA5eAMpQisg2itgxUg0hgO9gzqAO2QitAyisA3IhIAXIgihYIgihfQh8lWh4lkIgUg/IBKgaIBmgjICIgtIA6gSUA5fgSeA6jASjIA7ASICQAwIBdAfIBKAZIABABIgVA+Qh5Frh+FbIgfBVIghBYIhKgXgEA0rAJqQCqAwCpA3IAfhWQB/lbB4ltIhcgfQhogihmggUg6MgSVg5HASQQhjAfhjAhQgzARgzASQB3FmB7FXIAjBeQCqg2CrgyQaBnlaPAAQabAAarHsg");
	this.shape_71.setTransform(-0.2,-279.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#748AAF","#C0C7D9","#758BB0"],[0.075,0.471,0.902],-296.4,199.9,245.5,199.9).s().p("Egv5AFEIAAqHMBfzAAAIAAKHg");
	this.shape_72.setTransform(-1.4,-174.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#586985").s().p("Egw1AG0IAAq8IA8AAIAAKHMBfyAAAIAAqHIBAAAIAAK8gEgxygFMIDZhnMBcyAAAIDaBng");
	this.shape_73.setTransform(-1.4,-180.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C0C7D9").s().p("EgxyAGiIAAtDMBjlAAAIAANDgEgw1AFeMBhuAAAIAAq8IhAAAMhfyAAAIg8AAg");
	this.shape_74.setTransform(-1.4,-171.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1,3,true).p("EgzdAEyUAy6gTLA0BATN");
	this.shape_75.setTransform(-0.2,-305.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#748AAF","#C0C7D9","#758BB0"],[0.075,0.471,0.902],-68.9,383,238.8,-405.7).s().p("EgzdgnBUAy6gTLA0BATNUgUiA8HgevAbfUgfIgbfgUig8Jg");
	this.shape_76.setTransform(-0.2,-25.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("Eg0pgsWIBMgdUAUiA8JAfIAbfUAevgbeAUig8IIBMAdUgU0A+6gf2AaOUgf1gaOgU0g+8g");
	this.shape_77.setTransform(-0.2,11.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#992B2E","#FF474C","#9F2C2F"],[0,0.482,1],-62.8,221.7,110.2,-222.5).s().p("EgB6A3pUgjOgbLgWYhFUQgYhLAhhHQAhhHBJgeUA5BgXKA6ZAXKQBJAdAiBIQAiBHgZBLUgWYBFUgjPAbLQg2AqhEAAQhDAAg3gqgEgzegocIhMAdUAU1A+8Af1AaOUAf1gaOAU1g+6IhMgdQ6Dpn5vAAQ5uAA5cJlg");
	this.shape_78.setTransform(-0.1,-16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_73},{t:this.shape_74},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.6,-380.3,816.8,724.6);


(lib.T_features = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_mouth
	this.instance = new lib.T_mouth("single",0);
	this.instance.parent = this;
	this.instance.setTransform(28.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2).to({_off:false,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:1},0).wait(1));

	// T_nose
	this.instance_1 = new lib.T_nose("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(2).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-4.1,y:3.1,startPosition:1},0).wait(1).to({x:-13.6,y:1.8,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// T_eye
	this.instance_2 = new lib.T_eye("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.4,-21.8);

	this.instance_3 = new lib.T_eye("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.4,-21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2).to({_off:false,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-18.2,y:-30.8},0).wait(1).to({x:34.4,y:-21.8,startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-30.7,91.3,61.5);


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
	this.shape_11.graphics.f("#424242").s().p("Aj3jyQgChMAMhLICcDTIFBBXIAFADIAEACIgJgFIAAAAIAAAAIAIAjQingeicg0QADAeAbDGQAGAtA8DcIhQArQiMm0gwjIgAiQglQABAGABgJg");
	this.shape_11.setTransform(0.4,-54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("AnMmzQBIh6Bng9QBQgpBCgOQAogIAsAEQAcACAeAHQBqA/BqEFQAgBQAbBCQAGAPAGAPQANAfAMAdIAAAAQAlBaAWAzQASApAPAmQAFANAEAMQAsBmAEBrQACAjgCAlQgDAegGAbQgCAFgBAGQgSBDgtAvQgcAcglAVQg2AegzAAQhNAAhHhDQhohjhBiHIguhlQirlriNldg");
	this.shape_12.setTransform(-17,-74.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("ADBGuQhQgZg8g+QgsgvgkhKQgXgvghhZQh0k5hUjQQBWAoBZAZQByAgB0AGIAYA8IABABIgOgCQhNgEhLgNIg8gMQgngKgngLQBWC9BoC/QAnBHAcAnQAoA7AsAlQAuAmA2AVQgTBDgsAvIgcgGg");
	this.shape_13.setTransform(-0.6,-58);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("ABpJkQhphjg/iHIgvhlQirlriNldQBIh6Bng9QBQgpBDgOQAngIAsAEQAbACAfAHQBqA/BqEFIA7CSIAMAeQh0gGhzghQhYgYhVgpQBSDQB0E5QAiBZAXAvQAlBLArAvQA8A+BRAYIAbAHQgcAcglAVQg2AegzAAQhNAAhHhDg");
	this.shape_14.setTransform(-20.8,-74.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#585858").s().p("ABzEIQgsglgpg7QgbgngmhHQhpi/hWi9QAnALAmAKIA8AMQBMANBMAEIAOACIA7CNQASApAPAnIAKAZQArBlAEBqQACAkgCAkQgDAegGAbIgDALQg1gVgugmg");
	this.shape_15.setTransform(6.3,-58.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADxEqQgXADgWABQg0ABg1gMQiDgehcgWQhcgWgegIQgRgEgEgCIAAmiQCfguCJgXQAbgHA9gHQA8gIBrAP");
	this.shape_16.setTransform(-12.3,-33.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#585858").s().p("ABMDaQABgcgDgdQgPiNhchzQgyg/hDguQAcgHA8gIQA9gHBqAPQBID+gpCzIg8gEg");
	this.shape_17.setTransform(4.8,-41.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#424242").s().p("ABMEbQiDgehdgWIh6gfIgVgFIAAmjQCgguCIgWQBCAuAzA/QBdB0AOCMQADAdAAAcIA8AEQgSBMglA9IgMASQgWAEgXAAIgNAAQgtAAgugKg");
	this.shape_18.setTransform(-10.8,-33);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACJkbIg8ABQgpARglA0AiIBCQAcBLApA2QAMAQALAMQAdAfAXAMQAOAKAOAI");
	this.shape_19.setTransform(-5.3,-40.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AkOETIAfgHIAcgLQAPgEAOgHIAbgNIgmguQg4hHgYhWQgXhXAWhXQAYhZBRg7IEcgWQgIAfACAjQACAxAVAwQAgBLBWBTQATATARANQhyBvhDAoIhjA8Ig6AnQgcASg+AHIgOABQgxAAhBgog");
	this.shape_20.setTransform(25.3,-39.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424242").s().p("AgsEKQgYgMgcgfQAagCAbgGQAZgHAWgJQgYgngVgoQgnhNAGhWQAGhXAlhPIgFgDQgJgCgJACIABgBQAlg0AogRIA8gBQhRA7gXBZQgXBXAYBXQAWBWA5BHIAlAuIgaANQgOAHgPAEIgdALIgdAHIgcgSg");
	this.shape_21.setTransform(0,-40.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#585858").s().p("AgbC/Qgqg2gbhMICFkVQAJgDAJADIAGACQglBPgHBYQgFBVAnBOQAVAnAZAnQgYAJgYAHQgbAHgaABQgLgMgMgPg");
	this.shape_22.setTransform(-9.3,-40.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1,3,true).p("AjMr2QAtgMAxAAQAggBAhAGQCCAlBZEYQBYEYAaCHQAVAyASAwQATAvAPAkQAeA5AXAyQBECPATBZQACALACALQADAZgBAXQgHBUhMA4QhIA0hRARQgTAEgUACQgKgBgJAAQkbh8hklNQhjlNg0h5Qg0h6hHieQhHidAKhcQDphFBEgUg");
	this.shape_23.setTransform(3,-70.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#424242").s().p("ACIGNIgegcQhBg6gmgnQg1g3gng0QgEgFgShrQAgi5FrhdQAeA5AXAzIgHgBIkCBzQiGBlEAEmQgUAEgTACIgTgBgAlQmNQAGAJAIAHIgBAAQgHAAgGgQg");
	this.shape_24.setTransform(10.7,-32.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AhhE6QhjlMg0h6Qg0h6hHidQhHieAKhcIEthYQAtgNAxAAQAgAAAgAGQCDAkBZEZQBYEYAaCGIAnBiQASAvAQAkQlsBdggC6QASBrAEAFQAnA0A2A3QAmAnBBA6IAeAcQkdh8hilNgAisgGQgIgIgGgJQAHASAHgBg");
	this.shape_25.setTransform(-4.3,-70.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#585858").s().p("AibiLIEBhzIAHAAQBECPATBZIAEAWQADAYgBAXQgHBUhMA4QhIA0hQAQQkAklCGhlg");
	this.shape_26.setTransform(33.4,-19.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGCgEQgLBghRBdQheBsiVgUQiVgUhugZQhugZgNgEIgpkTIgGgoIgHgsIDJhLIDUgeIBWgK");
	this.shape_27.setTransform(-21.9,-47);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AjOAfIDJhKIDUgfQAFBNh0BEIknAEg");
	this.shape_28.setTransform(-39.8,-66.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#424242").s().p("AjwBaIgGgnIEogEQBzhDgFhOIBWgJQAKCpjLAug");
	this.shape_29.setTransform(-35.1,-63.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#585858").s().p("AAsERQiUgUhugZQhugZgNgEIgqkTIEmARQDKgugKiqQDRAeBADxQgLBghSBdQhPBbh3AAQgWAAgXgDg");
	this.shape_30.setTransform(-21.2,-47);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhkE2QAaixAnhCQAnhBAghpQAfhmAiiBQACBUgSBVQgPBCgsB0QgvCCgPA2QgSBDgDBDg");
	this.shape_31.setTransform(-112.8,-173.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABULxQgIADgJACQgWAEgVACQgVADgVABQgxADgwgGQimgVh2h3QABgJABgIQAWi1Akg+QAlhAAIgXQAZhCAVhHQAVhGAkiDIgSj7QADguAKgdQAPgoAMgoQAQg4AMg6QAThkAEgvQAAgBABgCQABgSAJgJQANgOAcAEQAFABAEAAQBWANgEBcQgDBdAAA5QgHAygDAtQgBAHAAAHQgCAVgBATQAABMAPAzQAPAHAQAFAAWn/QAGAAAMAAQAOABAXACQAHAAAIABQABAAABAAQATACAVADQAoAHAzAOQAuAPAMAWQAEAHARAvQAsgIAgAcQALAKAIANIAAAAQgfAygOBRQgCALgBAJQgPBghZBsIgyFlQAOA2AABDQAAA4gKBBQgIA0gOA5QgBAGgCAFQgBABgBAAQgLAEgNAEIgBAAQgVAIgWAEQgHACgHACAD+lqQANgQARgGQAKgEAKgCAAMmgQAQAAAOAAQAMABALAAQAPACAPABQAGABAHACQAGABAHABQA7AMAyATQAOAGAKAIACRj/QgbgEggADQgBAAgBAAIAAABQgFAAgDAAQgDAAgDgBQgLAQgFARQAoANAkgFIAAAAQAmgFAigZQACgHACgIADPkEQAAgCAAgCQAEgLADgLQARguAXge");
	this.shape_32.setTransform(-84.3,-202.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7E2326").s().p("AieIJQAQhgAEipIA7i9QAriFAKg7QAJgIARgSQAzg8AZhBQAXg8AKgpIACgGQAGgXALgSQAIgNAKgKQAZgWAYgEQgfAygOBRIgDAUQgOBghaBtIgxFkQANA2AABDQABA4gJBBQgJA0gOA5IgDALIgBABIgZAIIAAAAQgWAIgWAEIgOAEIgHABIgSAFQgVAEgVACQAEgVAQhggAiVldQAGgRAKgQIAHABIAHAAIABgBIgBABIgHAAIgHgBQgKAQgGARIgfgMQgPgzABhMIACgoIABgOIAeAAIABBEIABACQAAAZAFARQAHATAVAUIAGAIIACABQAWAXAYASIgTABQgcAAgegJgAi1p9IASAAIACBfIgeAAQAEgtAGgygAihoeg");
	this.shape_33.setTransform(-64,-189.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC3D42").s().p("AjWLOQhJgbg4gcQgSgIgbgPQAWi1Akg+QAlhAAIgXQAZhCAVhHQAVhGAkiDIgSj7QADguAKgdQAPgoAMgoQAQg4AMg6QAThkAEgvIABgDQABgSAJgJQANgOAcAEIAJABIARAWQAKAMAMAgQAJAhgPBfQgMBJgDBxIgBBIQABBSAIAMQAkApBUAJQBVAJAMghQANgiAFgRQACgIAAgHQhKgkglgZIAAgDIAAhYIAMADIAOACQA7AMAyATQAOAGAKAIQANgQARgGQAKgEAKgCQgKACgKAEQgRAGgNAQQgKgIgOgGQgygTg7gMIgOgCIgMgDIAAgIIgBhXIAoAFQAoAHAzAOQAuAPAMAWQAEAHARAvQAsgIAgAcQhBAagkBPQgKAWgJAcQg2CChqBSQgNAhgIAgQgIAggmBkQgnBkgSBEQgKBUgZB6QgQBNgSA5QgQADgSAAQgsAAg0gTgADYjkIAAgEIAHgWQARguAXgeQgXAegRAuIgHAWIAAAAIAAAEgABol8IAAAAg");
	this.shape_34.setTransform(-85.2,-205.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A92F33").s().p("AhzL8QimgVh1h3IABgRQAbAPASAIQA5AcBIAbQBJAbA6gLQARg5AQhNQAZh6AKhUQAUhEAlhkQAmhkAIggQAIggANggQBrhTA1iCQAKgcAJgWQAkhPBBgaQALAKAJANIgBAAQgZAEgYAWQgLAKgHANQgLASgGAXIgCAGQgKApgYA8QgZBBgzA8QgRASgJAIQgKA6grCGIg7C9QgECpgQBgQgQBggFAVIgqAEIgcABQgjAAgigEgABZirQhUgJgjgpQgJgMAAhSIAAhIQADhxANhJQAPhfgKghQgLgggKgMIgSgWQBWANgEBcQgDBdAAA5QgHAygDAtIgBAOIgDAoQgBBMAQAzIAfAMQAoANAlgFIAAAAQAmgFAhgZIACAAQgFARgNAiQgJAag2AAQgPAAgTgCgABVkBIABAAIAbgBIAZABIAHABIgHgBIgZgBIgbABIgBAAIgCgBIgGgIQgVgUgHgTQgFgRgBgZIAAgCIgBhEIAYABIAdADIgdgDIgYgBIgChfIAlADIAPABIACAAIACBXIgBAIIAABYIABADQAlAZBJAkIgEAPQghAZgmAFIAAAAQgYgSgWgXgABVkBIAAAAgAAqmhIAAAAg");
	this.shape_35.setTransform(-84.3,-202.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiKiDQgPAigQAjQiQFBhIFkIKQBNQAShgALheQAGgsADgsQAVkCgljqQAtiHAWh2QAmi8gRiUIm4gYQgsCEgUCQQgTCJAECTgAiCiaIgIAX");
	this.shape_36.setTransform(-107.8,-90.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AlWEsQBIliCQlDQBCBAAnBSQAyBtgLByQgDAUAAAMQABARAKALQAJAOAiAOIESBsQgLBegSBgg");
	this.shape_37.setTransform(-112.1,-59.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#424242").s().p("AhRHpQgigOgJgOQgJgLgCgRQAAgMADgVQALhxgzhtQgmhThDg/IAfhDQgEiUATiJQAUiQAsiEIG4AYQARCUgmC8QgWB2gtCGQAlDrgVECQgDAsgGAsIkRhsgAi3huQAJBRgXBJQAxAgAcBKQARApAcBXQASAtAhAlQA3BDBnAzIAMAHQAOh7AChuQABg4gBghQgCgwgJgoIgIghQgEgUADgPQABgOAIgSIAQgfQAmhRAChYIgVADQhRAMhRgKQhQgLhLggQgXgKgXgNQgPBdAJBTgAj2gjIAIgYg");
	this.shape_38.setTransform(-97,-100.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#585858").s().p("ACBF7Qhngzg3hDQghglgRgtQgdhXgQgpQgchJgyggQAXhKgJhRQgJhTAPhdQAXANAYAKQBKAgBRALQBQAKBRgMIAVgDQgCBYgmBRIgQAfQgIASgBAPQgCAPADAUIAIAhQAJAnACAwQABAhgBA4QgCBugOB7IgMgHg");
	this.shape_39.setTransform(-96.5,-90.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AlBGPQgQgHgPgUIgmgsIgXgaQgTgdgUgoIANgTQACgJAHgMQAGgQAPgMQAJgMAXgSQAfgeAWgMQAcgXAbgKIAWgNIAGgLQAAgIgCgDQgGgKgVALQg7AZgvAqIhJA+QgMAHgBAJQgEABABAIQgEAFAAAEIgDAFIgBABIgKgGIADgOQgCgLgGgNIgRgZQgLgSAAgDQgLgVAIgPQACgFAHgGQAMgVASgMQAOgQAJgGQAHgKAGgBIAOgMQACgFAWgPIAXgVQAlgkAvgZIAOgLQADgIgCgEQgEgIgFAAIgBgBIgDAEIgGAAIgMAFQgMAHgaALIgOAIQgDgGgLgHQgHgEgLgLIgPgNQgHgGgIgJQgGgJgEgDIgJgHIgSgMQgUgMgNgEQgBgKgHgFQgHgFgLAAQgGAAgOADQghAHgpAFQgpAEgWgEQglgHgSgXQgOgSABgTQABgXARgLQAKgGAWgCQBtgNBDgaQAtgRALgCQAjgIAYAKQALAFAMAKIATAUQA8A8BIAzIAAAGQAVAGANAGQAaAKAPAHQARAIAaAHQAMADAHADQAEAAAVAOQAMAIANADIANgCQADgGACgGQgDgJgCgBIAOgCIAigMIBfgkQAOgJATgGQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABABQAQgBATgNQAJgLARgPQAGgKAYgPQAVgUATgGIAIgHQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAQACgDAGgBQAPgMAZgEQAMgDAfgEQAogIAaADQATABAqAOQApAMAWALQBVArA4CGQAhBSAKBDIACBEIgCBUQgGAugKAgQgBgBAAAAQgBgBgBAAQAAgBAAAAQAAAAAAABIABABQgCAAgBgBQgBAAAAAAQgBAAABAAQAAAAABABQgVAAgYARQgjANgGAHQgRABgZAIIgoAGQgiADgNAEQgYgCgkADIhCgBIACAIIghgIQgJgDgMAAQgQgDgHABIgjAGIg2AEQgWABgcAHIgmAIQgVADgEAKQgEAEAAAHIiaAbIgFgHQgHAAgDACIgLAHIgLACQgOACgQgJQg2gYgugeIgFgCQAHgJAJgIQAJgKADgHQgBgHgDgEQgEgFgFACQgSAHgKAMQgQAMgSAdQgGAGAAAEIgBAMQgEALACAFQACAFAKgBQAIgCAIgKQgBgCAEgCQALALASAHIASAHIAEABQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgNAWgWATIgBgBQgPADgOAEQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgGgBgCADQgPABgLAEIgTABIgHAAg");
	this.shape_40.setTransform(-80.6,-36.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#0066FF").s().p("AlTG7QgQgJgSgSQgSgRgOgRIgSgXQgUgZgDgJQgJgNgLgZIgKgRIgLgSQgKgbANgUQAAgEAIgGIAEgIIABgBIADgFQABgEADgFQgBgIAEgBQABgJAMgIIBJg9QAvgqA8gaQAUgKAHAKQABACAAAJIgGALIgWAMQgaALgdAXQgWAMgfAeQgXASgJAMQgPALgGAQQgGANgDAJIgNATQAUAoATAcIAXAbIAmAsQAPAUAQAGQAIABASgBQALgEAPgBQADgDAFABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAQAOgFAPgCIABABQAWgUANgVQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAIgDgBIgTgHQgSgIgLgLQgEADABACQgIAJgIADQgKABgCgGQgBgEADgLIABgMQABgEAFgHQASgcAQgNQALgLARgHQAFgCAEAFQADAEABAHQgDAHgJAJQgJAIgHAJIAFACQAuAfA2AYQAQAJAOgCIAMgDIALgGQACgDAHABQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgDADgBAEQAEgCAGABICbgcQgBgGAEgEQAEgKAVgDIAmgJQAdgHAVAAIA3gEIAigGQAHgCAQADQAMABAJADIAhAHIgCgIIBCABQAkgDAYADQANgFAigDIAogFQAZgIARgBQAHgIAigNQAYgQAVgBQgBAAAAAAQAAAAAAAAQAAAAABAAQABAAACABIgBgCQAAAAAAAAQAAAAABAAQAAABABAAQABABAAABQAKggAGguIAChUIgChEQgKhEghhRQg4iGhVgrQgWgMgpgLQgqgOgTgBQgZgEgoAJQgfADgNAEQgZAEgPAMQgFABgDADQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAIgIAIQgTAGgVAUQgXAPgHAJQgRAQgJAKQgTAOgQAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgTAHgOAJIhfAkIgiALIgOACQACACADAIQgCAHgDAFIgNADQgNgEgMgHQgVgOgEAAQgHgDgMgDQgagIgRgHQgPgIgagJQgNgGgVgGIABgGQhJg0g8g8IgTgTQgMgLgLgEQgYgLgiAIQgMADgsARQhEAahtAMQgWACgKAHQgRALgBAXQAAATANARQASAXAlAHQAWAFApgEQApgFAhgIQAOgCAHAAQAKgBAHAGQAHAFABAKQANAEAUAMIASALIAJAHQAEAEAGAJQAIAJAIAGIAOANQAMAKAGAEQAMAIACAGIAPgIQAZgMAMgHIAMgFIAGABIADgEIABABQAFAAAEAHQACAFgDAIIgOAKQgvAaglAjIgXAWQgWAOgCAFIgNANQgGABgIALQgJAFgOAQQgSAMgMAUQgHAHgCAFQgIAPALAVQAAACALASIASAaQAGANABAKIgDAPIgLAIQgKACgGgHQgCgDgGgRIgSgdQgPgTAAgMQgCgJACgIQABgNAHgNQgHgGACgJQACgQARgOIAvgqIAOgPQAGgGAGgDIAegWIAFgFIAAgBQACgIAOgMIAOgMIgJgFQgIgEgFgFIgKgMIgMgJIgMgJIgFgIIgHgIIgKgGIgHgHIgVgQQgHgGgFgFQgHAEgNADIgwAIQgdAFgUABQg4ADgpgTQgXgLgRgSQgSgTgGgXQgHgYAHgZQAHgZAUgPQAOgLAYgFIAqgFQBCgIA6gTIA1gRQAfgKAYgBQAXgCAQAGQAQAFAPAOIAaAaQAbAcAqAkIBDA4IATAHIBaAfQAkAKAUAMQADACAFAEQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAQgBgIAHgEQAEgHAUgFIAagHIABAAIABAAQBAgUBAgcIBDg2QARgOAXgKQACgFAGgBQgBgBAAAAQgBAAAAAAQAAAAAAAAQABAAAAAAQgBgIAHgGQANgPAqgIIA2gMQAQgEARAAIAHAAIADAAIACAAIABAAIACAAIADAAIAGABIAKABQAeABAkAMQAeAKAtAYQAeAOASAPQAZATAeAsQBEBkAaB5IAIAuIAEAsIAAANIAAANQgDBIgUBHQgGAOgGAJQgFgEABAFQgEgBgCAEQg+AjgjAPIhBAOQgfADgKAGQgggBg4AEIgUABIgHAAIgIgBIgjABIACgEIgWgDQgngFgYAFIgeAGQgPADgJABIgNgCQgLgCgNAGIhJAQQgBAAAAgBQgBAAgBAAQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgOAHgbAIIh0AdQgXADgRAEQgNADgHADIgYgBIgVgCQgOgDgDgGQgDgEABgEIgJgFQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABIgbAhQABgBAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIgMALQgKAGgWAKQglAMg/AMQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgDAAgApHBoIgNgMQgCgEgGgCQgIgGABgCIgHgMQgGgIgIgFQgKgHgEgLQgHgLABgDIABgQQAAgDAEgPQgBgNAEgFQABgHAHgFQAGgJAFgCQAIgRAIgGQANgRAXgHQAGgFALgCQAJgDAOgCQAMgBAGACIAEAFQAEAFAAACQALAGAFAFQAAACAFAGIAGAIQAHAHACAEQAEAEACAIQgCADgCAFIgHAFQgGgBgIgHQgLgQgagTQgFgFgCABQgEgCgIADQgEAAgGADQgJAAgBADQgIABgJALIgMAMQgHAEAAAHIgFAIQgDACgGAGQgEACABAHQgBADABAEQgCAFACAEQgEACADAFQAAABAGAHIAYAeQAGAKAIADQAJAGAGAGQAJAFACANQgEAMgKAIIgHABQgGAAgGgEgAAHkAIANgFQAJgFAIgCQgQAIgLAEIgDAAg");
	this.shape_41.setTransform(-80.7,-35.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:0,rotation:0,x:17.6,y:74,startPosition:0,regX:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:0.2,rotation:-116,x:102.5,y:-68.3,startPosition:1,regX:0,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance,p:{regY:0.3,rotation:106,x:-86.2,y:-45.7,startPosition:8,regX:-0.1,scaleX:1.05,scaleY:1.05}}]},1).to({state:[]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance,p:{regY:0.3,rotation:-113.4,x:46.8,y:-49,startPosition:7,regX:0,scaleX:1.05,scaleY:1.05}}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance,p:{regY:0.3,rotation:108,x:-98,y:-56.2,startPosition:9,regX:-0.1,scaleX:0.938,scaleY:0.938}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-137.7,92.4,275.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.instance = new lib.gem("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.3,-35.8,0.899,0.899,28.6,0,0,3.7,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:26.6,regY:32.9,scaleX:1,scaleY:1,x:-0.2,y:-2},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-43.7,82,80.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path_1copy();
	this.instance.parent = this;
	this.instance.setTransform(116.2,72.9,1,1,33,0,0,14.6,24.1);
	this.instance.alpha = 0.48;

	this.instance_1 = new lib.Path_7copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(18,-85.3,1,1,33,0,0,125.7,80);
	this.instance_1.alpha = 0.602;

	this.instance_2 = new lib.CompoundPath();
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.1,6.8,1,1,33,0,0,50.7,27.4);
	this.instance_2.alpha = 0.602;

	this.instance_3 = new lib.CompoundPath_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4,50.7,1,1,33,0,0,134.6,115.4);
	this.instance_3.alpha = 0.602;

	this.instance_4 = new lib.CompoundPath_2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.2,79.5,1,1,33,0,0,44.3,35.9);
	this.instance_4.alpha = 0.602;

	this.instance_5 = new lib.Path_8copy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(16,-1.1,1,1,33,0,0,17.6,6.3);
	this.instance_5.alpha = 0.602;

	this.instance_6 = new lib.Pathcopy();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-46.4,142.3,1,1,33,0,0,35.8,17);
	this.instance_6.alpha = 0.602;

	this.instance_7 = new lib.Path_2copy();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-37.7,137.2,1,1,33,0,0,70,24.5);
	this.instance_7.alpha = 0.602;

	this.instance_8 = new lib.Path_9copy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-6.9,-141.7,1,1,33,0,0,55.3,42.4);
	this.instance_8.alpha = 0.602;

	this.instance_9 = new lib.Path_10copy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-87.1,3.5,1,1,33,0,0,55.8,55.2);
	this.instance_9.alpha = 0.602;

	this.instance_10 = new lib.CompoundPath_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-5.4,-26.1,1,1,33,0,0,137.8,108);
	this.instance_10.alpha = 0.602;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#23DA94","#1A9FDD"],[0,1],2.6,-110,0,2.6,-110,322.5).s().p("ApzXQQkih6jgjgQjfjfh7kiQh/ksAAlJQAAlIB/ksQB7khDfjgQDgjgEih6QEsh/FHAAQFJAAEsB/QEhB6DgDgQDfDgB7EhQB/EsAAFIQAAFJh/EsQh7EijfDfQjgDgkhB6QksB/lJAAQlHAAksh/g");
	this.shape.setTransform(3.7,2.5,1,1,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.7,-220.8,359.5,441.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.badge("single",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,15.7,0.421,0.421,0,0,0,-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-143.4,343.9,305.2);


(lib.spaceship_3qr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AliAUQFkmXIhlSQm9FqkrGvQjaFigfEwQjvk1FLmNg");
	this.shape.setTransform(590.4,-367.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AESpaQl4EOkqEVQkrEUgQDmQgDA0AIAyQAJA0AWAxQAlBSBGA+QAOALAPAMQGWgOFUkUQD8ndCWmNQBWjkAUh3QAOhagWgbQgFgGgGgDQgjgQhhAxQgIADgIAFQhnA1inB4g");
	this.shape_1.setTransform(602.2,-371.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3D42").s().p("ApgKVQgJgKgHgLQgIgyAEg0QAQjmEqkVQEqkUF4kOQCnh4Bog1Qi0FRjsEyQkcFwlgEvQggAcgZAPQgjAUggAAIgCAAQgkAAgZgcg");
	this.shape_2.setTransform(593.5,-380.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("AqSKIQgWgxgIg0QAGALAJAKQAbAeAkgBQAhgBAigUQAZgOAggdQFgkvEclwQDskxC0lSIAQgIQBFgJAnAZIgmBHQhHCCiUDlQkZGyi/DmQj4ElkHCyQhGg+gmhSg");
	this.shape_3.setTransform(600,-371.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABGA2QgFgdgOgSQgJgLgNgHQglgahFAJQBfgwAjAQQAHADAEAFQAXAcgPBZIgCgLg");
	this.shape_4.setTransform(666,-447.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E2326").s().p("AqBMEQEIiyD3kmQC/jlEamzQCTjlBHiCIAmhGQAMAIAJALQAOATAGAdIACAKQgUB3hWDjQiWGOj8HdQlUEUmWANIgdgWg");
	this.shape_5.setTransform(609.1,-369.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.498)").s().p("A6DNOMA0mgcLIm8MdI2fN2IDCm8I6sKkg");
	this.shape_6.setTransform(481,-334.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("EAuxgY7IG8sdMg1aAcoIqPFfImXDZMglZAjrIAABmQFmhlEMigILonCIcrxWMAvigcvg");
	this.shape_7.setTransform(307.2,-190.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AAACB9").s().p("A4NGkMA1ZgcoIm7MeMgzdAfrg");
	this.shape_8.setTransform(464.1,-288.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#3E3E44").s().p("AqsE8QEChlDoiAIMzn4QAFBdA3AgIrnHBQkNCgllBlg");
	this.shape_9.setTransform(32.1,6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#52525A").s().p("AMXwHIGXjaI3RblIs0H5QjoCAkCBlgAkjIEIchxjQAXBeAtAtI8pRVQg3gggFhdg");
	this.shape_10.setTransform(123.8,-86.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#767884").s().p("Awti9IKPlfIk/PgMAzdgfrIi2FHMgviAcvQgugtgXheI8iRkg");
	this.shape_11.setTransform(350.6,-192.9);

	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(669.7,-451.6,0.272,0.272,0,0,0,0.2,-0.2);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol1("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.2,187.5,0.242,0.295,0,-0.7,-31,1.7,-0.3);
	this.instance_1.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-172,-145,348,309);

	this.instance_2 = new lib.light();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-392.3,454.9,0.439,0.439,0,0,0,-0.1,0.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A3A40").s().p("AzjFsMAnFgjKQAGLOgHFaQu+WRwOUEg");
	this.shape_12.setTransform(90.7,12.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3A3A40").s().p("AzzERQaGuRNhv1UgIcAREgdzAimQA4rfiQqFg");
	this.shape_13.setTransform(74.7,-137.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.498)").s().p("AZBiSIidCVUgI3gGRgmtALCUAo7gOhAJGAHbg");
	this.shape_14.setTransform(30,-302.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.498)").s().p("AB2QjQBEA2BFAjQAWBnAaBmQhliKhUicgAAkN+QivmChVnlQCiCvC3BxQAlFxBJFnQhogyhbhfgAj6iRQhLohAhqWQCBFuEADhQgVHXAkHHQi8htiqjJg");
	this.shape_15.setTransform(-478.4,276.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ApDJzQFQyQM3tvQqoU+gfXbQkxlUiPnGg");
	this.shape_16.setTransform(-438.9,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.498)").s().p("AWnDvQgpoLidlCQiclCnVkgQnVkfpHBAQoSA7ndDvIh/BAQEoklGIiVQGIiUGdASQGbATFzDEQFzDEDPFqQDOFpArGHQArGFgmFsQgmFsg3EHQg3EHgdCFQB4t6gpoLg");
	this.shape_17.setTransform(-203.7,-40.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1,3,true).p("EA4bgUWQAGlagGlRQgOs0hYsDQgIhHgcg6QhXi6kZg8QhAgOhUgHEA4bgUWIBniYQABk5gHkzQgQsXhCryQgLiAg4hOQgpg6hCgfQiahIlVAOEglbgdAQDQl4K0msQKzmrWhnLQUmmkNPgIQBPgBBMADEg4gAFJQAeiRAsiRQBLj5Bzj7QBYjBBvjCQB3jNCQjNQAGgJAHgJQDak1EIkPALzJqQA4ltASltQATmCgWmCQgBgHAAgHQgDgwgEgwQgVkZhfjmQgMgdgNgdQjfnaovj1Qh7g2iAgmQjyhHkAgNQtnAuqeIsAGScqQD3osBipiQABgGABgHQADgTADgSQpGE/n6DVQz/IZshiQQuRijkiwbEgFiAupQoJDum+B8QqtC/n8hNQpChXlfmxQiimUhBogQgDgagDgaEgVSA7uQRQlMT8waQBGg6BHg8IBunxQTK27Rc58EgFiAupQE/lGDxmxQBcimBPirQANgbAMgcQqfFZo9DJQvRFYqrhJQsJhUmNpyQgGg3gFg5QhHsJB8rBIASgSEgVSA7uQiOAriMAeQmtBfmSgSQgNgFgMgFQqBkHkur2EgVSA7uQEuitDsjHQDrjIDrkJ");
	this.shape_18.setTransform(-145.5,60.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#343434").s().p("Al5MSQiimUhBofIgGgzQgGg4gFg4QhHsKB8rBQCTIMEdExQEbEwGzBWIBCAMQg0G0gfJOIgCAuIgCAqQgQFqAGGWQpChXlemxQFeGxJCBXQADDzALEDQqAkIkur2gAIzHwQsIhUmNpwQGNJwMIBUgAInUaIAAAAg");
	this.shape_19.setTransform(-452.1,275.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#CCCCCC").s().p("AIcJlQmyhXkckwQkckviUoNIATgSQEhQaORCkIgEAiIhDgLg");
	this.shape_20.setTransform(-447.9,155.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AwRDIIAEgiQMhCPT+oYIgOAnIgjAOQpID0ocBmQkmA4kGAAQi5AAipgcg");
	this.shape_21.setTransform(-283,198);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#262626").s().p("AwTVvIgZgKQgKkDgEjzIAGABIAFABQCNAUCbAAIAAAAIABAAQF+AAHQh9IASgFIAVgFQiZEWiqEOQlpBPlWAAQhAAAhAgCgAsHOFQibAAiNgUIgFgBIgGgBQgFmWAQlqIACgqIACguQAfpPA0mzQGZBDH1hfQIchmJIj1IAigOQjkJXkKJRIgNAEIgXAIIgCABQsLENpPAAIgBAAIAAAAQh9AAh2gMIAAAAIgHgBIAHABIAAAAQB2AMB9AAIAAAAIABAAQJPAAMLkNIACgBIAXgIIANgEIgXAyIhHCcQizGDjOF1IgVAFIgSAFQnQB9l+AAIgBAAIAAAAgAw6NvIAAAAgABvL+IAAAAg");
	this.shape_22.setTransform(-288.7,318.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1B1B1B").s().p("AtpQwQG+h8IIjuQjqEJjrDIQjsDHkuCtQiOAqiMAfQCpkOCakWgAnoE5IBIieIAWgyQEKpPDkpYQIyjuIXknIgCANQhiJij3IsQqhFZo7DIQI7jIKhlZIgZA3QhPCrhcCmQjyGwk/FGQoIDum+B8QDOl0CzmDgANSm4IAAAAg");
	this.shape_23.setTransform(-190.3,287.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AoYD3QH7jVJFk+IgGAlQoXEmoyDuIAPgmg");
	this.shape_24.setTransform(-125.1,150.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#060C15").s().p("AovUIQDMofBbmWIABAAICsssIgBAAQBLjoByjmQBsjaDcjLIAZA6QBfDmAVEZIAHBgIABAOQAWGCgTGBQgSFug4FtQpFE/n7DVIAahFg");
	this.shape_25.setTransform(-120.3,39.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#101F37").s().p("A4IeYQAWiwAZiWQBYoSBnlTQAbhbAdhYID3p8IgBAAIAqhZQFLqoIxpUQEMkeE5kAQCAAmB8A2QIvD0DfHbQjbDLhtDaQhyDmhLDoIAAAAIisMsIAAAAQhcGWjLIfIgaBFQvxGnrHAAQi+AAipgeg");
	this.shape_26.setTransform(-232.3,20.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#172C4E").s().p("A5dMTQAeiRAsiRQBLj6Bzj6QBYjBBvjCQB3jNCQjNIANgSQDak1EIkPQKdosNnguQEAANDyBHQk5EBkNEeQoyJUlKKoIgqBYIAAAAIj2J9QgcBXgcBbQhmFUhZIRQgZCWgWCwQuSijkhwbg");
	this.shape_27.setTransform(-344.2,14.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AAACB9").s().p("A6jD/QK0mqWgnLQUnmlNPgHQp0DIqIEOQqIEOn2EWQn0EVjoEwQjyhIkAgMQtnAuqeIsQDPl4K0msg");
	this.shape_28.setTransform(-125.1,-231.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#52525A").s().p("EgeeA1AQDrjIDskJQE/lGDxmwQBdinBPirIAZg3QD2osBjphIACgOIAGglQA4ltASltQATmCgXmCIgBgOIgGhgQgVkZhfjmIgag5QDjkfJxkrQJzkqKqpgQGol7DTkQQAbA7AJBGQBXMEAPMzQAGFSgHFaQxcZ8zJW6IhvHxIiLB2Qz9QaxQFMQEuisDrjIg");
	this.shape_29.setTransform(-32.9,66);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7E2326").s().p("AASJCQgPsyhWsDQgJhHgbg7QAwg/Amg5QA2BPAMCAQBBLxARMWQAGEzgBE5IhnCZQAGlagFlSg");
	this.shape_30.setTransform(213.9,-196.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DC3D42").s().p("AiYhvQhAgNhUgHQFUgOCaBIQBCAfApA5QglA5gxA+QhXi5kYg8g");
	this.shape_31.setTransform(180.3,-323.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#767884").s().p("A5/HnQh8g3h/gmQDokwH1kUQH2kWKIkOQKHkPJ0jIQBPAABMADQBUAHA/ANQEaA8BXC6QjSEQmpF7QqqJfpxEqQpzErjiEfQjfnbowj0g");
	this.shape_32.setTransform(10.4,-216.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_2},{t:this.instance_1}]}).to({state:[]},1).wait(1));

	// Layer_4
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AmOg7QHCiYH4iKQnTCql1DHQiRB1h+DVQATkLCKiOg");
	this.shape_33.setTransform(-619.8,-405.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1,3,true).p("Au8G+QABAAABAAQCEgPB9gsQAtgPAsgUIXmqtIA8gcQAPgWgPgQQgZgOgbgKQgvgSg3gDQgJgBgJAAQgwgBg1AJI3qGvQi6C9A3EHg");
	this.shape_34.setTransform(-580.2,-413.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7E2326").s().p("As8FPQgThDAeg7QAagyA1gjQA0giMlkvQHPivDGgQIAgAOQAKAEAHAHQAMAOgHASQgEAPgOAQI3mKuQgsATgtAQQgggXgNgvg");
	this.shape_35.setTransform(-571.7,-414.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DC3D42").s().p("ArfgGIXqmvQA1gJAwABQikAqmIB7QogCqjZBVQjZBTgcASQgtAcgcAfQg2A6gbBhQgPA2gNBmIgCAAQg3kHC6i9g");
	this.shape_36.setTransform(-589.2,-413.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A92F33").s().p("AtxEiQAbhhA2g6QAcgfAtgcQAcgSDZhTQDZhVIgiqQGIh7CjgqIATABQAdALAcALQjFAQnQCvQskEwg1AiQg0AigbAyQgeA7ATBDQAOAwAgAWQh9AsiEAPQANhmAPg2g");
	this.shape_37.setTransform(-584.7,-413.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAfAYQAHgSgMgNQgHgHgKgEIgfgOQgcgMgegKQA3ADAvARQAbALAYAOQAQAOgQAXIg8AbQAOgQAEgPg");
	this.shape_38.setTransform(-491.4,-452.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1,3,true).p("EgiRgcZIBCgXIVpnlIAugQIR7QGIcSZYIh0BsI6SYaIjACyIiEB6IhUA7MgkLhAMg");
	this.shape_39.setTransform(-429.1,-214.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AAACB9").s().p("Ayv/sIBDgzMAkcBAEIhUA7g");
	this.shape_40.setTransform(-535.2,-188.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#47474E").s().p("A1YsLIPQtHIbhaLI6SYag");
	this.shape_41.setTransform(-351.5,-178.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#64646C").s().p("AuqsoIBDg6IcSZYIh1Bsg");
	this.shape_42.setTransform(-296.9,-259.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#52525A").s().p("A0O7dIVonlIRmQvIvQNHMAQfAldIi/Cyg");
	this.shape_43.setTransform(-512.4,-222.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#767884").s().p("A0p77IBCgXMAleA+gIiEB6gEACBgj3IAugQIR7QFIhDA6g");
	this.shape_44.setTransform(-516.3,-217.6);

	this.instance_3 = new lib.light();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-484.8,-451.4,0.25,0.25,0,0,0,-0.2,0);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]}).to({state:[]},1).wait(1));

	// Layer_5
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#999999").ss(1,1,1,3,true).p("AAAAAIAAAA");
	this.shape_45.setTransform(65.8,217.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHRCjQAABDiJAvQiHAvjBAAQjAAAiIgvQiIgvAAhDQAAg9BzgtQAWgnA+guQAXgRAZgOQgCgEgDgEQgohHAWhNQAjh6BhAQQA/AKBEA1QAWARAXAWQAQAPAPARQASASALATQAYAkABAhQAqARAmAbQBHAwAcAnQCFAvAABCg");
	this.shape_46.setTransform(79.7,223);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3D3D3D").s().p("Ag0gCIgBgJQAAgMACgLIBoAmIAAAJQAAAMgBAKg");
	this.shape_47.setTransform(71.2,217.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#585858").s().p("Ag5gSIAKgEIABAAIBoAlIgCAIg");
	this.shape_48.setTransform(70.5,219.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#464646").s().p("AgGATIAAgMQAAgKACgKIABgGIAKAEQgCALAAALIAAAJIAAAAIgKAEg");
	this.shape_49.setTransform(65.3,215.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("Aj6BzQhoglAAg1QAAgSALgTQAWgnA+gvQAXgRAZgOQAYAlAqAkQB7BpB3hdQA/gygBg5QAqARAmAbQBHAxAcAnQARAYAAAUQAAA1hoAlIgOAEQhAAWhRAHQgrAEgxAAQiSAAhoglg");
	this.shape_50.setTransform(79.1,230);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AlIC7QiIgvAAhDQAAg9BzgsQgLAUAAARQAAA1BoAlQBoAlCTAAQAwAAArgEQBRgHBAgVIAOgFQBoglAAg1QAAgTgRgZQCFAvAABBQAABDiJAvQiIAvjAAAQi/AAiJgvgAhag4QgYgFgSgeQgOgYgDgdIABAAIByAqQgFARgJAMQgOASgTAAIgJgBgAiIizIgLgEQAEgTALgOQAOgRASAAIAKABQAVAEARAXIAEAHIAAABQAQAZABAfg");
	this.shape_51.setTransform(79.7,232);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AhoCMQgpgjgYglIgFgJQgohFAWhNQAjh7BhAQQA+AKBFA1QAWASAXAWQAQAOAPARQASATALASQAYAjABAiQABA4hAAyQg4Atg5AAQg/AAhCg5gAhUABQgLANgEATIgBAGQgCAKAAALIABAMQACAdAPAYQARAeAZAFQAYAFASgWQAIgMAFgQIACgIQABgKAAgMIAAgJQgBgfgPgZIAAgBIgFgHQgQgWgVgFIgKgBQgSABgOAQg");
	this.shape_52.setTransform(74.9,210.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABHDKIlGk6IBThZIGtDZg");
	this.shape_53.setTransform(51.7,193.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#52525A").s().p("AkAhwIBUhZIGsDZIi5C6g");
	this.shape_54.setTransform(51.7,193.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["rgba(0,0,0,0)","rgba(0,0,0,0.298)"],[0,1],227.6,239.7,36.1,-48.9).s().p("Eg1IAlSUgOsgt4BbYgcrQQ5BmOuHuMAAABBPg");
	this.shape_55.setTransform(4.3,322.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_55).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-678.2,-505.8,1405.5,1066.7);


(lib.smog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol12("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(343.4,232.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:380},298).wait(1).to({startPosition:0},0).to({x:343.4},302).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-471.6,83,1630,299);


(lib.map = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.grid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(188.3,59.4,4.793,4.793);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120));

	// Layer_4
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(79,-266,4.793,4.793);
	this.instance_1.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 0, -55, 13))];
	this.instance_1.cache(-182,-223,364,446);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-782.7,-1324.6,1726,2120);


(lib.laptop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("EgwigkXMBhNAAAMAAABImMhhVAAJgEguNAilMBcegAKMAAAhE/MhcXAAAg");
	this.shape.setTransform(300,-87.5,1,1,0,0,0,0.8,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},94).wait(86));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgwjgkYMBhOAAAMAAABInMhhVAAKg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:299.6,y:-87}).wait(94).to({graphics:null,x:0,y:0}).wait(86));

	// Layer_2
	this.instance = new lib.dot();
	this.instance.parent = this;
	this.instance.setTransform(161.4,-40.6,3,3,0,0,0,0.1,0.1);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({_off:true},35).wait(86));

	// map
	this.instance_1 = new lib.Symbol10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(255,-278);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).to({alpha:1},19).to({_off:true},36).wait(86));

	// planet_stormalot
	this.instance_2 = new lib.planet_stormalot("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(293.2,-84.4,1.447,1.447,0,0,0,107.4,107);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:3.58,scaleY:3.58,rotation:46.7,x:284.6,y:-73.5},58,cjs.Ease.get(1)).to({_off:true},1).wait(121));

	// galaxy
	this.instance_3 = new lib.galaxy("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(298.8,-91.6,0.917,0.917,0,0,0,67.5,50.4);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:67.3,regY:49.9,scaleX:4.82,scaleY:4.82,rotation:46.7,x:298.4,y:-91.4},58,cjs.Ease.get(1)).to({_off:true},1).wait(121));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aht+nIDbgMMgDbA9ng");
	this.shape_1.setTransform(34.5,-78.5,1,1,0,0,0,0.3,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("EgwigkXMBhNAAAMAAABImMhhVAAJg");
	this.shape_2.setTransform(299.9,-87.5,1,1,0,0,0,0.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#04202B").s().p("EgkIAC9IADhlMBILAAAIADBlgEgkDgB+IgCg+MBILAAAIAAA+IAAADg");
	this.shape_3.setTransform(296.5,174.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8A270B").s().p("EgkHACKIAAjVIADAAMBIJAADIAADSgEAkFgBLIAAg+IADBBg");
	this.shape_4.setTransform(296.6,169.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0A5572").s().p("EAwgAtNIsXgmIAAj0IgChlIAAjUIACAAIgChBMhIMAAAIAAA+IAADXIgDBlIAAD0IsXAmQifADhhhLIgCgFQhBg3gihjQgph2AHiuMAAbhKRQgYoOIEARMAtuAAlMAvRgAlQIFgRgZIOMAAbBKRQAHCugpB2QgiBjhBA3IgCAFQheBIiYAAIgKAAg");
	this.shape_5.setTransform(296.4,-67.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#052E3D").s().p("EAxJAtCQAfhqgHiTMgAdhKTQAaoLoJAJMhUDgAJQkRAClIC3Ih7iOQBIi/B+gpQB9grCFACQCFADCHAAMBYigAFQIMgMgbIQMAAdBKdQAKEOhlCFQgFAFgDAEQghAigdAYIgPAMg");
	this.shape_6.setTransform(301,-74.2,1,1,0,0,0,0.4,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjDBGQDbgpCkhfQAAgFAIAAQgDAAgDAFQjECGiCACIgeACIgdgCg");
	this.shape_7.setTransform(322.3,254.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AjCBFQDagpCkhdQAAgFAHAAQgCAAgCAFQjFCDiCAFQgdAAgdgCg");
	this.shape_8.setTransform(287,278.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjCBHQDYgpCmhfQAAgFAHAAQgCAAgCAFQjFCFiCADIg6AAg");
	this.shape_9.setTransform(248.9,305.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AjCBGQDagpCkhdQAAgFAHgCIgEAHQjFCEiDAEQgcAAgdgCg");
	this.shape_10.setTransform(212.8,330.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjCBFQDXgpCnhdQAAgFAHAAQgCAAgCAFQjFCDiDAFQgcAAgdgCg");
	this.shape_11.setTransform(169.1,361.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AjBBFQDYgpCkhdQAAgFAHAAQgCAAgDAFQjCCGiCACQgdAAgdgCg");
	this.shape_12.setTransform(382.2,256.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AjBBFQDYgpCmhdQgCgFAHAAQgCAAAAAFQjFCGiCACQgdAAgdgCg");
	this.shape_13.setTransform(349.4,279.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjCBGQDagpCkhdQAAgFAHgDIgFAIQjECDiDAFQgcAAgdgCg");
	this.shape_14.setTransform(310.7,306.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhfQAAgFAHAAQgCAAgDAFQjECGiDACIg5AAg");
	this.shape_15.setTransform(272.6,332.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AjDBHQDbgpCkhfQAAgFAIAAQgDAAgDAFQjECGiCACIg7AAg");
	this.shape_16.setTransform(228.9,362.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhfQAAgFAHAAQgCAAgCAFQjFCGiCACIg6AAg");
	this.shape_17.setTransform(456.6,257.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhgQAAgFAHAAQgCAAgCAFQjFCGiCADIgdABIgdgBg");
	this.shape_18.setTransform(421.4,281.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjDBFQDbgpCkhdQAAgFAIAAQgDAAgDAFQjECGiCACQgeAAgdgCg");
	this.shape_19.setTransform(382.6,308.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjBBHQDYgpCkhgQAAgFAHAAQgCAAgCAFQjDCGiCADIgdABIgdgBg");
	this.shape_20.setTransform(344.6,333.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AjCBGQDagpCkhdQAAgFAHgCIgEAHQjFCDiCAFQgdAAgdgCg");
	this.shape_21.setTransform(300.8,364.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhgQAAgFAHAAQgCAAgDAFQjECGiDADIgcABIgdgBg");
	this.shape_22.setTransform(27.5,250.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AjDBFQDbgpCkhdQAAgFAIAAQgDAAgDAFQjECDiCAFQgdAAgegCg");
	this.shape_23.setTransform(-7.7,273.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AjCBHQDYgpCmhfQAAgFAHAAQgCAAgCAFQjFCGiDACIg5AAg");
	this.shape_24.setTransform(-45.8,300.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AjCBGQDagpCkhdQAAgFAHgCIgFAHQjECEiDAFQgcgBgdgCg");
	this.shape_25.setTransform(-82,326.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AjCBFQDYgpCmheQAAgEAHAAQgCAAgDAEQjECFiDAEQgdAAgcgCg");
	this.shape_26.setTransform(-125.6,356.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjBBFQDYgpCkhdQAAgFAHAAQgCAAgDAFQjCCFiCADQgdAAgdgCg");
	this.shape_27.setTransform(87.5,251.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AjBBFQDYgpCnhdQgDgFAHAAQgCAAAAAFQjFCGiCACQgdAAgdgCg");
	this.shape_28.setTransform(54.7,275.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AjDBGQDbgpCkhdQAAgFAHgCIgEAHQjGCEiCAEQgdAAgdgCg");
	this.shape_29.setTransform(16,302.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhfQAAgFAHAAQgCAAgCAFQjFCGiCACIg6AAg");
	this.shape_30.setTransform(-22.2,327.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhgQAAgEAHAAQgCAAgCAEQjFCHiCACIg6AAg");
	this.shape_31.setTransform(-65.8,358.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AjCBHQDagpCkhgQAAgEAHAAQgCAAgDAEQjECHiDACIg5AAg");
	this.shape_32.setTransform(161.6,252.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AjBBGQDagpCihfQAAgFAHAAQgCAAgDAFQjCCGiCACIgdACIgdgCg");
	this.shape_33.setTransform(126.5,276.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AjCBFQDagpCkhdQAAgFAHAAQgCAAgDAFQjECGiDACQgdAAgcgCg");
	this.shape_34.setTransform(87.8,303.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AjBBHQDYgpCkhgQAAgFAHAAQgCAAgDAFQjCCGiCADIgdABIgdgBg");
	this.shape_35.setTransform(49.8,328.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AjDBGQDbgpCkhdQAAgFAHgCIgEAHQjFCEiDAEQgdAAgdgCg");
	this.shape_36.setTransform(6.1,359.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#277592").s().p("AnOJEIgChIIJcAVIAABLgAw1IsIgChDIIVATIACBGgA63IPIAAhBIIwAVIACBEgAIHESIAJgIIpJgRIAAgaIJtARIADBIIguAigAivD3IACgCIgCAAIn2gNIAAgXIIaAOIAFAAIAAAuIgpAdgAsbDkIn6gMIAAgbIIcARIAAAzIgiAYgAOLAEIAOgHIpHgTIgDggIJxARIAAAIIAABFIgzAkgADSgWIAHgCIgHAAInwgUIAAgdIIbARIADA1IguAhgAmSgwInUgPIAAgVIH7ALIAKAAIAAAsIguAegAUNkAIAAgJIpPgUIAAgdIJ/ARIAAAFIADBBIgzAkgAJKkgIn6gOIAAgcIImAOIAAAzIgpAcgAgekzInGgOIgCgaIHtAMIAKAAIAAAtIgvAigAZ7n9IAAgHIpRgTIAAggIKLARIAAACIADA8Ig6AngAOqoWIAKgHIn4gTIAAgbIIjAPIAAA1IgyAlgAFNoyImxgRIAAgYIC9AHIAMACIEKAFIACA2IgkAXg");
	this.shape_37.setTransform(285.6,321.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#1D5367").s().p("Ak3K/IAAhLIDAiCIAFgDIC0h6IADBIIl6ECgAvkKlIgDhGIAMgIIATgRIADAAIFSjsIAAAzIkiDNIgKAFIAKAAIADBIgA5JKKIgChEIAtgfIADgDIE8jdIAAA1IguAfIgDAAIjzCxIAHAAIADBDgABwFTIFWjsIADBIIlXDsgApKFCIAAgFIFYjxIAAA1IkEC1IgCACIgFADIgKAHIAKAAIAAAaIguAAIgfAUgAy+ExIAAgCIBOg2IACAAIEYjHIACAyIAAADIkhDKIAMADIAAAXIgugCIgnAbgAH8BFIFMjiIAABBIlMDngAjGAqIACAAIFKjnIACAzIj8CyIgHAEIAHAAIACAgIgygCIggAVgAsmAZIAAgHIFDjiIAAAzIj/CyIgIAEIAIAAIAAAdIgIAAIgJgCIgdACIgWAPgAN5jBIAHgFIA8gkIADgDID4itIACA8IhqBLIgCACIi/CFIgCACIgRAKgACxjZIE1jaIACA0IjvCmIgCACIACAAIAAAdIgrAAIgdAUgAmyi/IAAguIAAgHIE7jbIAAAyIj9C2IAAAcIgpgCIgTAOgATxnBIACgCIBGguIADgCIEOi6IACA6IlZDugAIbnZIE3jZIAAA1IjsCnIgDACIADAAIAAAgIgugDIgbARIgCACgAhVnqIEvjUIAAA1IjkCfIAAACIACAAIAAAbIgmAAIgkAZg");
	this.shape_38.setTransform(330.8,311.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#308CAF").s().p("Ap8KFIAAgEIEijOIApgcIAfgUIAuAAIJJARIgKAHIi1B7IgEACIjACDgAziJyIgIAAIDziwIADAAIAuggIAhgYIAngaIAuACIH2AMIAAACIlSDtIgDAAIgTARIgMAHgA9iJXIF5j4IAoADIH7ALIk8DeIgDACIgtAggAjkFpIAAgHIAFgDIACgDIEDi1IAughIAggWIAyACIJIAUIgOAHIlXDtgAtQFaIgMgCIEhjLIAAgCIAugfIAWgPIAdgCIAJACIAIAAIHvATIAAACIlXDxIgFAGgA3BFHIAAgCICdhrIADAAIDgiTIAwADIHUAOIkYDIIgCAAIhOA1IAAADgAMVBkIpxgRIAAgFID9ixIAqgdIAcgUIAsAAIJOAUIAAAJIlMDjgABSBRIobgRIAAgFID/iyIAxghIACAAIATgPIAqACIH5APIlLDngAwRA0IAAgMIFWjiIAsACIHFAPIlDDiIgKAHgASSifIp/gRIAAgCIDuinIAzglIACgBIAbgRIAuACIJRATIAAAHIj4CuIgDADIg8AkgAhajBID8i1IAkgYIAkgYIAmAAIH4ATIgJAHIk0DagAqRjSIAAgFIFZjjIApAAIGxARIk7DcIgKAHgAYKmcIqLgRIAAgDIDtinIBPg3IKoAFIAAADIkOC5IgCADIhGAugAEQnBIgCgDIDlieIBLgzIIuAHIAAACIk4DZgAhFnIIgMgCIi+gHIAAgGIEljDIHdADIkvDTg");
	this.shape_39.setTransform(302.7,307.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CC3300").s().p("AtVKLIAKgEIAAAEgAopGEIABAAIgBADgAm9FvIAKgHIAAAHgA6VFNIAFgCIAAACgAioB2IAHAAIgHADgAgxBZIAHgEIAAAEgAqgBGIAHgFIAAAFgAFBiqIACgCIAAACgAtljMIAEgFIAAAFgAKtmnIADgDIAAADgAA+m7IAAgCIADACgAnmnLIAHgFIAAAFgAaTqDIADAAIgDADgAOcqIIAFgCIgFAFg");
	this.shape_40.setTransform(323.5,307.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F1D281").s().p("AmsAdIBnhHILyAOIhqBHg");
	this.shape_41.setTransform(294.3,199);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AE2C00").s().p("AnMJBIgChIIJcAYIAABLgAwzIqIgChEIIVATIACBGgA63IPIAAhBIIyATIADBDgAILEPIAIgHIpKgRIAAgaIJuATIACBJIguAegAitD1IADgDIgDAAIn1gLIAAgZIIZAPIAFAAIAAAuIgmAcgAsZDhIn4gLIgCgbIIcARIAAAyIgiAYgAONABIAPgGIpIgUIgCgeIJwAQIAAAIIAABEIgyAkgADUgZIAHgCIgHAAInwgTIAAgdIIcARIACA1IguAggAmPgzInUgOIAAgWIH6AMIAKAAIACAsIgwAfgAUPkDIAMgGIgMgDIpPgTIAAgdIJ/ARIAAAEIADBCIgzAkgAJMkhIn6gPIAAgdIImAPIACAyIgrAdgAgck1InFgPIAAgaIHrAPIAJAAIAAAuIgtAegAZ+oAIAMgHIgMAAIpSgTIAAgfIKJARIAAACIADA8Ig6AngAOtoXIAJgIIn4gRIAAgaIIkAOIAAA1IgzAigAFPoyImvgRIgCgYIC+AFIAMACIELAFIAAA1IgkAag");
	this.shape_42.setTransform(-10.8,318.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CC3300").s().p("AtUKKIAKgFIAAAFgAooGDIACAAIgCADgAm8FtIAKgHIAAAHgA6UFLIAFgCIAAACgAimB1IAGAAIgGACgAgwBYIAHgFIAAAFgAqeBEIAGgEIAAAEgAztA2IAOgJIAAAMgAOUh7IALACIgLAHgAFCisIACgCIAAACgAtkjNIAHgGIAAAGgAUCl2IAMAAIgMAHgAKumpIADgDIAAADgABAm6IADgCIAAACgAnlnKIAHgFIAAAFgAaSqEIACAAIgCACgAOdqJIAFAAIgFACg");
	this.shape_43.setTransform(27.2,304.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6835").s().p("Ap6KEIAAgFIEkjNIAngdIAfgTIAuAAIJJARIgHAHIi1B7IgFACIjCCFgAzgJxIgHAAID1iuIADgCIArggIAigYIAmgaIAuACIH2AMIAAADIlRDuIgDAAIgfAWgA9iJZIF9j7IApACIH4AMIk8DeIgCADIguAfgAjiFnIAAgHIAFgCIACgDIEEi1IAughIAfgWIAzACIJHAUIgOAHIlXDvgAtOFZIgMgCIEhjLIAAgCIAxggIAUgOIAtAAIHwATIAAACIlYDyIgFAEgA2/FGIAAgDICdhqIADAAIDgiTIAwACIHUAPIkXDIIgDAAIhLA1IgCADgAMXBjIpxgRIAAgFID9ixIAsgdIAbgTIArAAIJPATIAAAJIlEDbgABVBQIocgRIAAgFIECiyIAugfIADgCIASgPIADAAIAnADIH5AOIlKDngAwPAzIAAgMIFXjgIAsAAIHFAPIlEDiIgJAHgASUihIp/gQIAAgDIDuimIA0giIAcgWIAuADIJRATIAAAHIj4CuIgDACIg7AkgAhYjCID8izIAkgaIAlgYIAmACIH4ARIgJAHIk1DZgAqMjTIAAgFIFYjjIApADIGvARIk7DbIgJAHgAYKmeIqJgRIAAgCIDsimIBQg4IKmAFIAAACIkOC6IgDACIhFAugAETnAIAAgCIDiiiIBMgyIIsAHIAAACIk2DcgAhDnJIgLgDIi/gEIAAgFIEnjGIHbACIktDVg");
	this.shape_44.setTransform(6.3,304.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8E2400").s().p("Ak2LAIAAhKIDDiFIAFgCIC0h7IAABIIl5EEgAvjKjIgChFIAfgWIADAAIFRjvIACAzIkkDNIgJAFIAJAAIADBIgA5IKJIgChEIAugfIACgCIE8jeIAAA1IgrAfIgDADIj1CtIAHAAIACBEgABxFUIFXjvIADBJIlXDvgApJFBIAAgFIFZjxIAAA1IkFC1IgCACIgFADIgKAHIAKAAIAAAaIguAAIgfAUgAy8EwIACgCIBLg1IADAAIEXjJIACAzIAAACIkhDLIAMACIAAAZIgugDIgmAbgAH9BEIAJgIIFEjaIAABBIlNDngAjEApIACAAIFJjmIACAyIj8CyIgHAFIAHAAIADAfIgzgDIgfAWgAslAYIAAgHIFEjiIACAzIkCCxIgHAFIAHAAIAAAdIgtAAIgUAPgAN6jCIAIgFIA7gkIADgDID4itIAAA8IhqBLIgCACIi8CFIgCACIgRAKgACzjaIE1jZIABAyIjuCnIgDACIADAAIAAAdIgrAAIgbATgAmxjrIAAgHIE8jcIAAAzIj9CyIAAAdIgngCIgDAAIgSAOIgDADgATwnCIADgCIBFguIADgDIEOi5IACA6IlYDugAIdnYIE2jbIAAA1IjsCmIgCADIACAAIAAAfIgugCIgcAVgAhRnrIEsjUIAAA1IjhCiIgCACIACAAIAAAaIgmgCIglAYg");
	this.shape_45.setTransform(34.5,308.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003333").s().p("EhFyAOGMAs5geQMBesACFMgs5AeQg");
	this.shape_46.setTransform(160.4,310.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#094962").s().p("A0xVaMg0NgBSQnlgFgJhsIAAgKQAAhLDBh0MAwAggzQGRkTF/gFMBcXACpQFIAJAkBOQADAJAAAMIACAAIAAAMQgHAzhaBEMgnWAfwQnuFlpRAOg");
	this.shape_47.setTransform(156.2,317.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#052E3D").s().p("A0eaDMg0KgBQQnxgFAAhxIgTtsQAJBtHlAEMA0NABSMAroAAlQJRgPHulkMAnWgfxQBahDAHgzIgmQDMgknAfNQnuFkpPAPg");
	this.shape_48.setTransform(156.2,375.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},94).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.3,-362.7,1033,907.9);


(lib.laptop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.lit("single",0);
	this.instance.parent = this;
	this.instance.setTransform(136.8,118.9,1,1,0,0,0,13,5.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(59));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AqJGuIAHuJIUMgOIgCPTgApknEIgHNcITQA3IACufg");
	this.shape.setTransform(146.3,57.9,1,1,0,0,0,0.2,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(59));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqGGvIAEuIIUJgQIAAPTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:146.2,y:60}).wait(1).to({graphics:null,x:0,y:0}).wait(59));

	// Layer_6
	this.instance_1 = new lib.dot();
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.5,76.9,0.5,0.5,0,0,0,0.1,0.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(59));

	// Layer_3
	this.instance_2 = new lib.map("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(144.1,70.3,0.15,0.15,0,0,180,150.3,63.4);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(59));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWmYIAtADIAAMug");
	this.shape_1.setTransform(205,62.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_2.setTransform(142.3,130.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_3.setTransform(134.9,135.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_4.setTransform(126.9,140.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_5.setTransform(119.3,145.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_6.setTransform(110.1,152.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_7.setTransform(154.7,131.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_8.setTransform(147.8,136);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_9.setTransform(139.7,141.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_10.setTransform(131.7,146.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_11.setTransform(122.5,152.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_12.setTransform(170.1,131.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_13.setTransform(162.7,136.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_14.setTransform(154.6,142);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_15.setTransform(146.6,147.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_16.setTransform(137.4,153.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_17.setTransform(81.2,128.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_18.setTransform(73.8,133.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_19.setTransform(65.8,138.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_20.setTransform(58.2,143.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_21.setTransform(49,149.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_22.setTransform(93.6,129);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_23.setTransform(86.7,133.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_24.setTransform(78.6,139.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_25.setTransform(70.6,144.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_26.setTransform(61.4,150.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_27.setTransform(109,129.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_28.setTransform(101.6,134.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_29.setTransform(93.5,139.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoAOQAtgIAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMAAg");
	this.shape_30.setTransform(85.5,144.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgoANQAtgHAigSQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIgBABQgpAagbAAIgMgBg");
	this.shape_31.setTransform(76.3,151);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#277592").s().p("AhhB2IAAgPIB8AHIAAAQgAjhBuIAAgOIBvAGIAAAPgAlmBlIAAgNIB1AHIAAAOgABrA7IACgCIh5gGIAAgFICAAGIAAAPIgJAHgAgkAyIAAAAIAAAAIhogFIAAgFIBvAFIABAAIAAAKIgIAGgAilArIhogFIAAgFIBvAGIAAAKIgHAFgAC8AFIADgCIh5gGIAAgGICBAGIAAACIAAANIgLAIgAAsgDIABgBIgBAAIhmgGIAAgGIBvAGIAAAKIgJAHgAhSgLIhhgGIAAgEIBpAFIACAAIAAAJIgKAGgAENgvIAAgCIh6gGIAAgGICFAGIAAABIAAAOIgLAHgAB7g4IhpgGIAAgGIByAGIAAAAIAAAKIgJAGgAgEg/IgtgDIgBAAIgwgCIAAgGIBlAFIACAAIAAAKIgJAGgAFbhhIAAgCIh7gHIAAgGICHAGIAAABIAAAMIgMAIgADFhqIACgBIhogGIAAgGIASABIAAAAIBfAFIAAALIgLAHgABIhyIhZgGIAAgFIAnACIACABIA3ACIAAALIgHAFg");
	this.shape_32.setTransform(134.4,144.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#308CAF").s().p("AiFCDIAAgBIA9gpIAIgGIAGgEIAKAAIB5AGIgCACIgnAYIgBABIgnAagAkFB8IgBAAIAzgjIAAAAIAKgHIAHgFIAIgFIAJABIBpAFIAAAAIhHAwIgBAAIgEADIgDABgAmKB0IBQgyIAJAAIBoAFIhCAtIgBAAIgJAHgAgwBKIAAgCIABAAIABgBIA2gkIAJgHIAGgEIALAAIB5AHIgDACIhIAvgAixBEIgCgBIA9goIAAgBIAKgGIAEgDIAHAAIABAAIACAAIBmAGIAAABIhIAwIgBABgAkxA9IAAgBIAggVIABAAIAvgdIAKAAIBhAGIg7AoIAAAAIgRAKIAAABgACjAYIiBgGIAAgBIA1gjIAJgGIAGgEIAJABIB6AGIAAACIhEArIgCACgAARARIhvgGIAAgBIA2gjIAKgGIAAAAIAFgDIAAAAIAIAAIBoAGIhFAtgAjXAGIAAgDIBIgsIAIABIABAAIAwACIAAAAIAuADIhEAsIgCACgAD0gbIiFgGIAAgBIAyghIALgHIABgBIAFgDIAKAAIB6AHIAAACIg0AiIgBABIgMAHgABfgiIhwgGIA1gkIAHgFIAHgFIAIABIBpAGIgCABIhBAsgAiGguIAAgBIBJgtIAIAAIBZAGIhCAsIgCABgAFDhOIiHgGIAAgBIAxghIARgLICNAEIAAAAIg5AmIgBAAIgOAJgABNhaIgBAAIgSgBIAAAAIAxggIAPgLIBzAEIAAABIhBAsgAgLheIgDgBIgngCIAAgBIA9gnIBjADIhAAqg");
	this.shape_33.setTransform(138,141.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC3300").s().p("AizCDIACgBIAAABgAh0BOIAAAAIAAAAgAheBKIACgCIAAACgAleA9IABgBIAAABgAgjAXIABAAIgBABgAgLASIACgBIAAABgAiMALIACgBIAAABgABCghIABgBIAAABgAizguIABgBIAAABgACPhUIABgBIAAABgAAOhbIAAAAIAAAAgAhihhIABgBIAAABgAFfh9IABAAIgBAAgADBiCIABAAIgBABg");
	this.shape_34.setTransform(142.4,141.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1D5367").s().p("AhDCRIAAgQIApgbIABAAIAlgZIAAAPIhOA1gAjRCIIAAgPIADgCIAEgCIAAAAIBHgwIAAALIg9AoIgCABIACAAIAAAPgAlQCAIAAgPIAKgGIAAAAIBDgtIAAALIgKAHIAAAAIg0AjIACAAIAAANgAAWBHIBIgwIAAAPIhIAwgAh6BAIAAgBIBIgxIAAAMIg3AkIAAABIgBAAIgCABIACAAIAAAGIgKAAIgGADgAj8A5IAAAAIAQgLIABAAIA7gnIAAAKIAAABIg9AoIACAAIAAAGIgJgBIgIAFgABpARIACgCIBEgrIAAANIhGAugAgoAIIAAAAIBFgtIAAAKIg0AjIgCABIACAAIAAAGIgLgBIgGAFgAimABIAAgBIBEgsIAAAKIg2AjIgCABIACAAIAAAGIgCAAIgCAAIgGAAIgEADgAC5gjIACgBIAMgHIABgBIA0giIAAAMIgWAPIgBAAIgoAbIAAAAIgEACgAAmgrIBBgsIAAAKIgyAiIgBAAIABAAIAAAHIgJgBIgGAEgAhYgpIAAgJIAAgCIBCgsIAAALIg1AkIAAAGIgIAAIgBAAIgEACgAEIhXIABAAIAOgJIABgBIA5glIAAAMIhJAwgAByhfIBBgsIAAAMIgyAhIAAAAIAAAAIAAAHIgJgBIgGAEIAAAAgAgOhlIA+gqIAAAKIgwAhIAAAAIAAAAIAAAFIgHAAIgHAFg");
	this.shape_35.setTransform(143.8,142.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F1D281").s().p("AhYAEIAWgNICbAGIgWANg");
	this.shape_36.setTransform(136.8,119);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8E2400").s().p("AhDCRIAAgQIApgaIABgBIAlgZIAAAQIhOA0gAjRCIIAAgPIADgBIAEgDIAAAAIBHgwIAAAKIg9AqIgCAAIACAAIAAAQgAlQCAIAAgPIAKgGIAAgBIBDgsIAAALIgKAGIAAAAIg0AjIACAAIAAAPgAAWBHIBIgwIAAAQIhIAvgAh6BAIAAgBIBIgxIAAALIg3AlIAAABIgBAAIgCACIACAAIAAAFIgKgBIgGAFgAj8A6IAAgBIAQgKIABAAIA7gpIAAALIAAABIg9AoIACAAIAAAGIgJgBIgIAFgABpAQIACgBIBEgrIAAAOIhGAtgAgoAIIAAAAIBFguIAAALIg0AiIgCACIACAAIAAAGIgLgBIgGAFgAimACIAAgCIBEgsIAAAKIg2AjIgCABIACAAIAAAGIgCAAIgCgBIgGAAIgEAEgAC5gjIACgBIAMgHIABgBIA0giIAAAMIgWAPIgBABIgoAaIAAABIgEABgAAmgrIBBgsIAAAKIgyAiIgBABIABAAIAAAFIgJAAIgGAEgAhYgpIAAgJIAAgBIBCgsIAAAKIg1AkIAAAGIgIAAIgBAAIgEACgAEIhWIABgBIAOgJIABAAIA5gmIAAAMIhJAwgAByhfIBBgsIAAALIgyAiIAAAAIAAAAIAAAHIgJAAIgGADIAAAAgAgOhlIA+gqIAAALIgwAfIAAABIAAAAIAAAFIgHAAIgHAFg");
	this.shape_37.setTransform(82.4,140.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AE2C00").s().p("AhhB2IAAgPIB8AHIAAAQgAjhBuIAAgOIBvAGIAAAPgAlmBlIAAgNIB1AHIAAAOgABrA7IACgCIh5gGIAAgFICAAGIAAAPIgJAHgAgkAyIAAAAIAAAAIhogFIAAgFIBvAFIABAAIAAAKIgIAGgAilArIhogFIAAgFIBvAGIAAAKIgHAFgAC8AFIADgCIh5gGIAAgGICBAGIAAACIAAANIgLAIgAAsgDIABgBIgBAAIhmgGIAAgGIBvAGIAAAKIgJAHgAhSgLIhhgGIAAgEIBpAFIACAAIAAAJIgKAGgAENgvIADgBIgDgBIh6gGIAAgGICFAGIAAABIAAAOIgLAHgAB7g4IhpgGIAAgGIByAGIAAAAIAAAKIgJAGgAgEg/IgtgDIgBAAIgwgCIAAgGIBlAFIACAAIAAAKIgJAGgAFbhhIACgCIgCAAIh7gHIAAgGICHAGIAAABIAAAMIgMAIgADFhqIACgBIhogGIAAgGIASABIAAAAIBfAFIAAALIgLAHgABIhyIhZgGIAAgFIAnACIACABIA3ACIAAALIgHAFg");
	this.shape_38.setTransform(73,142.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC3300").s().p("Ai0CDIADgBIAAABgAh1BOIABAAIgBAAgAheBKIACgCIAAACgAlfA9IACgBIAAABgAgkAXIACAAIgCABgAgLASIACgBIAAABgAiLALIABgBIAAABgAkGAFIADgCIAAADgAC9gVIADABIgDABgABDghIAAgBIAAABgAi0guIACgBIAAABgAEKhHIADAAIgDACgACPhUIAAgBIAAABgAAOhbIAAAAIAAAAgAhjhhIACgBIAAABgAFfh9IABAAIgBAAgADBiCIABAAIgBABg");
	this.shape_39.setTransform(81,139.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6835").s().p("AiFCDIAAgBIA8gpIAJgGIAGgEIAKAAIB5AGIgDACIgmAYIgBABIgnAagAkFB8IgCAAIA0gjIAAAAIAKgHIAHgFIAIgFIAKABIBnAFIAAAAIhGAwIgBAAIgEADIgCABgAmKB0IBQgyIAJAAIBoAFIhCAtIgBAAIgJAHgAgwBKIAAgCIABAAIAAgBIA2gkIAKgHIAGgEIALAAIB5AHIgDACIhIAvgAiwBEIgDgBIA9goIAAgBIAKgGIAFgDIAGAAIACAAIABAAIBlAGIAAABIhHAwIgBABgAkxA9IAAgBIAggVIABAAIAvgdIAKAAIBhAGIg7AoIAAAAIgRAKIAAABgACjAYIiBgGIAAgBIA1gjIAJgGIAGgEIAJABIB6AGIAAACIhEArgAARARIhvgGIAAgBIA2gjIAKgGIAAAAIAFgDIAAAAIAIAAIBoAGIhFAtgAjXAGIAAgDIBIgsIAJABIAwACIAAAAIAuADIhEAsIgCACgAD0gbIiFgGIAAgBIAyghIALgHIABgBIAFgDIAJAAIB7AHIAAACIg0AiIgBABIgMAHgABfgiIhwgGIA1gkIAHgFIAHgFIAIABIBpAGIgCABIhBAsgAiGguIAAgBIBJgtIAIAAIBZAGIhCAsIgCABgAFChOIiHgGIAAgBIAyghIARgLICNAEIAAAAIg5AmIgBAAIgOAJgABNhaIgBAAIgSgBIAAAAIAwggIAQgLIBzAEIAAABIhBAsgAgLheIgCgBIgogCIAAgBIA9gnIBiADIg/Aqg");
	this.shape_40.setTransform(76.6,139.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003333").s().p("AuhCmIJcmDITnA3IpcGDg");
	this.shape_41.setTransform(108.5,141.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#094962").s().p("AkZEVIq0ggQhkgEgCgWIAAgCQABgQAogXIKHmkQBUg3BPABITIA+QBEADAHAQIAAAFIABAAIAAACQgCALgTANIoTGZQhoBIh7AAg");
	this.shape_42.setTransform(107.6,142.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#052E3D").s().p("AkZFEIqzggQhngDAAgYIAAi2QACAXBkADIK0AhIJCAUQB7AABohIIITmZQATgNACgLIgNDVInuGSQhoBIh7AAg");
	this.shape_43.setTransform(107.6,156.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003366").s().p("AqGGvIAEuIIUJgQIAAPTg");
	this.shape_44.setTransform(146.4,60.8,1,1,0,0,0,0.2,0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#04202B").s().p("AnUAKIABgPIOoAuIAAAUgAnTgqIAAgSIOoAsIgBANg");
	this.shape_45.setTransform(145.6,113);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8A270B").s().p("Am+gDIgBAAIgdgCQgOgDACgRQABgSALABIAdACIOoAnIAAAAIAAAsg");
	this.shape_46.setTransform(143.5,112.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#0A5572").s().p("AJxJYIikgIIgBgzIAAgVIAAgsIAAgNIungtIhDgDIAACBIhRgFIgFAAQhUgFAIhbIAAujQgBgyAXgXIAHgHIAEgCQAKgIAPgEQANgDARAAIS+gOQBrgDgFBtIAGPYQABAkgIAZQgHAUgOAMIAAABQgUAPgfAAIgCAAg");
	this.shape_47.setTransform(146.4,65);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#052E3D").s().p("AKOJJQAIgYgBgkIgGvZQAFhthrAEIy+AOQgRgBgNAEQgPADgKAIIgEACIAugqIAEgEQASgQAfgCIAKAAIADAAITEgRQBsgEgFBuIAGPbQACA4gVAbIgCACIgNANIg2AqQAOgLAHgVgApLJBIAAiBIBDAEIgBASIgdgCQgLgBgBASQgCARAOADIAdACIAAAQIg+A2g");
	this.shape_48.setTransform(150.9,61.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,190.9);


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


(lib.inventory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.gem("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-113.9,-25.7,0.899,0.899,28.6,0,0,3.8,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:3.6,regY:2.5,x:-5.2},19,cjs.Ease.get(0.5)).to({_off:true},82).wait(1).to({_off:false},0).wait(17).to({regX:3.8,regY:2.4,x:-5},0).to({regY:2.3,scaleX:2,scaleY:2,rotation:76.2,x:243.1,y:-220.4},26,cjs.Ease.cubicOut).to({regX:3.7,regY:2.4,scaleX:0.9,scaleY:0.9,rotation:75.5,x:318.5,y:-31.9},23,cjs.Ease.cubicIn).to({alpha:0},11).to({_off:true},1).wait(25));

	// Layer_2
	this.instance_1 = new lib.gpsDevice1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-109.9,-84.9,0.22,0.22,-6.4,0,0,0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.9},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:0},0).to({x:-109.9},19).wait(1));

	// Layer_3
	this.instance_2 = new lib.repellentgfx("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-112.6,-165.4,0.275,0.275,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-2.9},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:0},0).to({x:-112.6},19).wait(1));

	// inv_box
	this.instance_3 = new lib.inv_box("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-110.4,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:0},0).to({x:-110.4},19).wait(1));

	// inv_box
	this.instance_4 = new lib.inv_box("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-110.4,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:0},0).to({x:-110.4},19).wait(1));

	// inv_box
	this.instance_5 = new lib.inv_box("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:0},0).to({x:-110.4},19).wait(1));

	// inv_box
	this.instance_6 = new lib.inv_box("single",2);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-110.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:2},0).to({x:-110.4},19).wait(1));

	// inv_box
	this.instance_7 = new lib.inv_box("single",1);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-110.4,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:1},0).to({x:-110.4},19).wait(1));

	// inv_box
	this.instance_8 = new lib.inv_box("single",1);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-110.4,-168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:1},0).to({x:-110.4},19).wait(1));

	// inv_box_bg
	this.instance_9 = new lib.inv_box_bg("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-109,0,1,1,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:1},19,cjs.Ease.get(0.5)).wait(166).to({startPosition:0},0).to({x:-109},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-220,113,522);


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
	this.instance = new lib.tBm2();
	this.instance.parent = this;
	this.instance.setTransform(39,-20.5);

	this.instance_1 = new lib.tEn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(39,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,-1.1,532.6,122.2);


(lib.db_face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:1.8,y:-5.1}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// Layer 3
	this.instance = new lib.shade_lines("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.3,-56.7,2.827,2.827,0,0,0,-0.3,0.3);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance.cache(-242,-118,484,235);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer 1
	this.instance_1 = new lib.db_feature("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.1,0);
	this.instance_1.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-10.2,-14.8,0,-10.2,-14.8,99.5).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.instance_2 = new lib.screen_color();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.8,-5.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,204,1)",0,0,50);
	this.instance_2.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance_2.cache(-386,-287,771,574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:2}}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:1}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:1}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:3}}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5,1,0,3).p("EAzagnfUg1ggJegwnAIZUgKWAjCABPAwpUA7GACzA7FgCzUAFSg1SgMPgdUg");
	this.shape_1.setTransform(1.8,-5.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-40.3,110.1,80.6);


(lib.db_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");
	var mask_graphics_4 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:1.8,y:-5.1}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_4,x:1.8,y:-5.1}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// Layer 3
	this.instance = new lib.shade_lines("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.3,-56.7,2.827,2.827,0,0,0,-0.3,0.3);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance.cache(-242,-118,484,235);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(5));

	// Layer 1
	this.instance_1 = new lib.db_feature("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4.1,0);
	this.instance_1.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-10.2,-14.8,0,-10.2,-14.8,99.5).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.instance_2 = new lib.screen_color();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1.8,-5.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,204,1)",0,0,50);
	this.instance_2.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance_2.cache(-386,-287,771,574);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:0}}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:1}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:4}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:5}}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5,1,0,3).p("EAzagnfUg1ggJegwnAIZUgKWAjCABPAwpUA7GACzA7FgCzUAFSg1SgMPgdUg");
	this.shape_1.setTransform(1.8,-5.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(2));

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


(lib.bg1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg/wAv1MAAAhfpMB/hAAAMAAABfpg");
	mask.setTransform(6417.1,5582.8);

	// Layer_1
	this.instance = new lib.smog("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(6481,4416,2.52,2.52,180,0,0,305.3,165.8);
	this.instance.alpha = 0.602;

	this.instance_1 = new lib.smog("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(6427.5,5508.6,3.276,3.276,0,0,0,305.4,165.8);
	this.instance_1.alpha = 0.699;

	this.instance_2 = new lib.smog("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(6651.2,5203.1,2.268,2.268,0,0,180,305.4,165.9);
	this.instance_2.alpha = 0.801;

	this.instance_3 = new lib.smog("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(5569.3,4827.9,1.764,1.764,0,0,0,305.3,165.9);
	this.instance_3.alpha = 0.801;

	this.instance_4 = new lib.jj_p10("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(6840.8,3409.3,25.2,19.85,90,0,0,0.1,-0.2);

	this.instance_5 = new lib.Symbol12_p10("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(4908.1,3861.6,25.194,25.194,4,0,0,0.4,0.3);
	this.instance_5.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_5.cache(-115,-81,179,129);

	this.instance_6 = new lib.Symbol9_p10("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(2857.5,4868.2,17.635,17.635,0,0,0,-4,137);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2A2A").s().p("EsCjBjQMFlRjGfMM6mAAAMFlQDGfg");
	this.shape.setTransform(4931.6,5300.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#583146","#874D3A","#87232C"],[0,0.6,1],-31.6,-281.2,-31.6,345).s().p("EitrAp1MAAAhTpMFbXAAAMAAABTpg");
	this.shape_1.setTransform(5816.5,4547.7);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6,this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6009,5276.8,816.3,612.1);


(lib.tapirhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.T_features("single",13);
	this.instance.parent = this;
	this.instance.setTransform(11.2,-10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFfp5QA5AxAeBFQAdBCAHBHQAEAkABAkQAFBKAFB0QANEaDOClQh+E9lTA6QgVAEgVAFQmrgNlxi4Qgzhsg9hqQCFjkA2itQAKggAKggQAehmAehrQAVg/Afg5QAgg8Arg3QAqg4BAgcQAJgEAKgEQAQgFASgEQA5gLBLAFQAWABAUACQBTAGBBAJQBEAJA/AYQAbAKAZAS");
	this.shape.setTransform(25.5,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545E73").s().p("ABXGwQAHhTALiWQAKiKgIhNQgMh3g1hOQgUgZgQAAQgNgBgTASQhDBAgwBOQgwBPgvA8Qg9AvhYgmQhWglgkgWQgrgZgMgKQgegXgOgeQgFgLgCgKIAUhBQAJgIAOgHQAagNAggBQAPgBAtAFQAkACAXgCQAkhcBNhCQBPhCBegSQAKgWgDgYQgEgZgRgQIgPgNQgLgIgDgIQgJgTAPgiQAZg+AugxQBTAGBBAJQBEAJA+AYQAcAKAZARIAAAAQA5AyAeBFQAcBCAIBHQAEAkABAkQAFBJAFB1QANEaDNClQh+E9lSA6IgrAJQgYj3AEgig");
	this.shape_1.setTransform(34.8,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A89A7").s().p("AlXIGQgyhsg+hqQCFjkA2itQACALAFALQAPAeAdAWQAMAKArAZQAkAWBXAmQBWAlA9gvQAvg9AwhOQAwhOBEhAQASgSAOACQAQAAAUAZQA1BNAMB3QAIBNgKCKQgKCWgIBTQgEAiAZD3QmsgNlwi4gAi8lyQAVg/Afg5QAgg8Arg3QAqg4A/gcIAUgIQAQgFARgEQA5gLBLAFIArADQguAygaA9QgPAiAJATQAEAIAKAIIAPANQARARAEAYQAEAZgLAVQheAThOBBQhNBCgkBcQgWACglgCQgtgEgOAAQghABgaANQgNAHgKAJIA8jRg");
	this.shape_2.setTransform(0.3,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEPAAQCBgyBFg0QACgCACgCQAUgOAUgKQAUgLAOAIQAOAHAIARQAIASABAOQAAAHAAAIQgDA5gbBHQgbBHg2ALQgzALgxACQgBAAgBAAQgBAAgUABAkMgeQgMgFgMgFQgGgDgFgCQhwgyhRg4QgPgJgFAAQgagBgPANQgVARACArQAAAWAEAVQAEAWAJAVQAQApAXAQQAVATA7AGQAkAFBOgDAH1gqQhSA/hSAVAnZhcQArAyBRAqQAIAEAJAF");
	this.shape_3.setTransform(31.2,-44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A89A7").s().p("AFFA7IAAAAQCBgzBFgyIgPAeQgGAMgVAYQgWAZgLAIIgcAVQgQAMgUAMIg7grgAknA7QhQgrgsgwQgZgbgMAEQgWAFgSAWQgSAVgDAVQgFgVAAgWQgCgqAWgSQAOgNAaABQAFAAAPAJQBRA5BxAxIAKAEIAZALIgegFIgGAHQgLAMgLAQIgGAKIgSgKg");
	this.shape_4.setTransform(25.8,-50.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545E73").s().p("AFWA1QgHgMgIgLQAUgLAQgMIAcgUQALgIAWgZQAVgaAGgLIAPgfIAFgEQATgOAVgKQAUgLAOAIQAOAHAIARQAHASABAOIAAAPQgDA5gaBHQgbBHg2ALQg0ALgwACIgCAAIgWABQAJg1gIgsgAFPAeQBSgVBSg/QhSA/hSAVgAm6BEQg8gGgVgTQgWgQgRgpQgIgVgEgWQADgVASgVQASgWAWgGQAMgDAZAaQAsAyBQAqIASAKQgQAXgPAgIgIASIAtgBIgzABQgoAAgXgDg");
	this.shape_5.setTransform(31.5,-43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},18).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-79,168.7,158.1);


(lib.TAPIR_HEROcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.T_shoulderPad_R("single",0);
	this.instance.parent = this;
	this.instance.setTransform(88.5,-177.8,1,1,0,-6,174,-0.3,-0.1);

	this.instance_1 = new lib.T_Arm_R("single",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.1,-190.4,1,1,0,-2.6,177.4,-34.2,-140.3);

	this.instance_2 = new lib.laptop("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-93,-113.4,1.2,1.2,0,-3.2,176.8,111.8,95.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_4
	this.instance_3 = new lib.T_Arm_L("single",5);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-124.2,39.9,1,1,0,-171.7,8.3,-15.1,-117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tapir body
	this.instance_4 = new lib.tapir_spacehelmet("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-33,-272.9,1,1,0,-1.2,178.8,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_6
	this.instance_5 = new lib.T_shoulderPad_L("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-122.4,-183.2,1,1,0,29,-151,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// tapir head
	this.instance_6 = new lib.T_Body("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.8,-110.6,1.004,0.978,0,-5.7,179.2,0,0.1);

	this.instance_7 = new lib.T_Legs("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-10.1,-15.6,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Layer_9
	this.instance_8 = new lib.T_Arm_L("single",4);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-125.6,-147.5,1.1,1.06,0,13.2,-166.8,-14.6,-117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// tapir body
	this.instance_9 = new lib.tapirhead("single",18);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-36.6,-258.2,1,1,-5.7,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// T_Legs
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-9.5,-36.7,0,-9.5,-36.7,300.2).s().p("AR3HvQhMABhIgGQzKgkn8AYQo7Aaklg7QijgihphfQhVhOAAhSQAAglARgmQAdg9BLgsQAxgcBfghQI6i8IXhfIAEgBQHIhpHCgRQBTgDBTAAQITAAHgCBQBNAUAxA8QA2BBgnA9QBaAgAqAWQBGAjArAwQAVAXAPAdQAVAmAIAuQAHAigCAfQgDAwgUAqQgiBHhQApQg4AdhfAUQjiAtinAOIguADQgqACgpABIACAAIgGAAg");
	this.shape.setTransform(-1.8,350.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.5,-349.8,435.5,750.1);


(lib.TAPIR_HEROcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.T_shoulderPad_R("single",0);
	this.instance.parent = this;
	this.instance.setTransform(88.5,-177.8,1,1,0,-6,174,-0.3,-0.1);

	this.instance_1 = new lib.T_Arm_R("single",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.1,-190.4,1,1,0,-2.6,177.4,-34.2,-140.3);

	this.instance_2 = new lib.laptop("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-93,-113.4,1.2,1.2,0,-3.2,176.8,111.8,95.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_4
	this.instance_3 = new lib.T_Arm_L("single",5);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-124.2,39.9,1,1,0,-171.7,8.3,-15.1,-117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tapir body
	this.instance_4 = new lib.tapir_spacehelmet("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-33,-272.9,1,1,0,-1.2,178.8,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_6
	this.instance_5 = new lib.T_shoulderPad_L("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-122.4,-183.2,1,1,0,29,-151,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// tapir head
	this.instance_6 = new lib.T_Body("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.8,-110.6,1.004,0.978,0,-5.7,179.2,0,0.1);

	this.instance_7 = new lib.T_Legs("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-10.1,-15.6,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Layer_9
	this.instance_8 = new lib.T_Arm_L("single",4);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-125.6,-147.5,1.1,1.06,0,13.2,-166.8,-14.6,-117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// tapir body
	this.instance_9 = new lib.tapirhead("single",18);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-36.6,-258.2,1,1,-5.7,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// T_Legs
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-9.5,-36.7,0,-9.5,-36.7,300.2).s().p("AR3HvQhMABhIgGQzKgkn8AYQo7Aaklg7QijgihphfQhVhOAAhSQAAglARgmQAdg9BLgsQAxgcBfghQI6i8IXhfIAEgBQHIhpHCgRQBTgDBTAAQITAAHgCBQBNAUAxA8QA2BBgnA9QBaAgAqAWQBGAjArAwQAVAXAPAdQAVAmAIAuQAHAigCAfQgDAwgUAqQgiBHhQApQg4AdhfAUQjiAtinAOIguADQgqACgpABIACAAIgGAAg");
	this.shape.setTransform(-1.8,350.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-241.5,-349.8,435.5,750.1);


(lib.TAPIR_HEROcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.T_shoulderPad_R("single",0);
	this.instance.parent = this;
	this.instance.setTransform(64.3,-1.6,1,1,0,-14,166,-0.2,-0.1);

	this.instance_1 = new lib.T_Arm_R("single",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(56.3,-13.2,1,1,0,-10.5,169.5,-34.2,-140.3);

	this.instance_2 = new lib.laptop("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-129.6,74.1,1.2,1.2,0,-3.5,176.5,111.8,95.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_4
	this.instance_3 = new lib.T_Arm_L("single",5);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-160.1,227.5,1,1,0,-172,8,-15,-117.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// tapir body
	this.instance_4 = new lib.tapir_spacehelmet("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-69.1,-79,1,1,0,-9.2,170.8,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Layer_6
	this.instance_5 = new lib.T_shoulderPad_L("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-145.2,22.2,1,1,0,21,-159,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// tapir head
	this.instance_6 = new lib.T_Body("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-10.1,76.6,1.004,0.978,0,-13.7,171.2,-0.1,0.1);

	this.instance_7 = new lib.T_Legs("single",5);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-3.7,141.7,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(1));

	// Layer_9
	this.instance_8 = new lib.T_Arm_L("single",4);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-147.5,40.1,1.101,1.06,0,13,-167,-14.7,-117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	// tapir body
	this.instance_9 = new lib.tapirhead("single",18);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-70.7,-63.9,1,1,-13.7,0,0,-0.2,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// T_Legs
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-9.5,-36.7,0,-9.5,-36.7,300.2).s().p("AR3HvQhMABhIgGQzKgkn8AYQo7Aaklg7QijgihphfQhVhOAAhSQAAglARgmQAdg9BLgsQAxgcBfghQI6i8IXhfIAEgBQHIhpHCgRQBTgDBTAAQITAAHgCBQBNAUAxA8QA2BBgnA9QBaAgAqAWQBGAjArAwQAVAXAPAdQAVAmAIAuQAHAigCAfQgDAwgUAqQgiBHhQApQg4AdhfAUQjiAtinAOIguADQgqACgpABIACAAIgGAAg");
	this.shape.setTransform(-1.8,350.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.1,-158.7,472.1,559.1);


(lib.TAPIR_HERO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.T_shoulderPad_R("single",0);
	this.instance.parent = this;
	this.instance.setTransform(88.5,-177.8,1,1,0,-6,174,-0.3,-0.1);

	this.instance_1 = new lib.T_Arm_R("single",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.1,-190.4,1,1,0,-2.6,177.4,-34.2,-140.3);

	this.instance_2 = new lib.laptop("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-93,-113.4,1.2,1.2,0,-3.2,176.8,111.8,95.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},26).wait(1));

	// Layer_4
	this.instance_3 = new lib.T_Arm_L("single",5);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-124.2,39.9,1,1,0,-171.7,8.3,-15.1,-117.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).wait(1));

	// tapir body
	this.instance_4 = new lib.tapir_spacehelmet("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-33,-272.9,1,1,0,-1.2,178.8,0.1,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).wait(1));

	// Layer_6
	this.instance_5 = new lib.T_shoulderPad_L("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-122.4,-183.2,1,1,0,29,-151,0.1,-0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(26).to({_off:false},0).wait(1));

	// tapir head
	this.instance_6 = new lib.T_Body("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.8,-110.6,1.004,0.978,0,-5.7,179.2,0,0.1);

	this.instance_7 = new lib.T_Legs("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-10.1,-15.6,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6}]},26).wait(1));

	// Layer_9
	this.instance_8 = new lib.T_Arm_L("single",4);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-125.6,-147.5,1.1,1.06,0,13.2,-166.8,-14.6,-117.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(26).to({_off:false},0).wait(1));

	// tapir body
	this.instance_9 = new lib.tapirhead("single",18);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-36.6,-258.2,1,1,-5.7,0,0,-0.2,-0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).wait(1));

	// T_Legs
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-9.5,-36.7,0,-9.5,-36.7,300.2).s().p("AR3HvQhMABhIgGQzKgkn8AYQo7Aaklg7QijgihphfQhVhOAAhSQAAglARgmQAdg9BLgsQAxgcBfghQI6i8IXhfIAEgBQHIhpHCgRQBTgDBTAAQITAAHgCBQBNAUAxA8QA2BBgnA9QBaAgAqAWQBGAjArAwQAVAXAPAdQAVAmAIAuQAHAigCAfQgDAwgUAqQgiBHhQApQg4AdhfAUQjiAtinAOIguADQgqACgpABIACAAIgGAAg");
	this.shape.setTransform(-1.8,350.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(26).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.5,-369.7,395,770.6);


(lib.gs_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.galaxy_star("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,0.5,0.5,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.3,scaleX:0.38,scaleY:0.38},0).wait(1).to({regY:-0.1,scaleX:0.5,scaleY:0.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.4,regY:-0.3,scaleX:0.26,scaleY:0.26,rotation:22,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,rotation:0,x:-0.2,y:-0.2},0).wait(1).to({regX:-0.3,regY:-0.3,scaleX:0.43,scaleY:0.43,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:-0.2,y:-0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-33.1,66,69);


(lib.DigiBotcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.db_headlight("single",0);
	this.instance.parent = this;
	this.instance.setTransform(13.5,-175.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AEdjoQASAXAGAWQACAKgBAHQgBAJgGAEQgKAIgUgLQgOgHgNgOQgGgGgFgGQgEgFgDgFQgLgSgEgSQgGgVAKgIIAAgBQALgHAUAKQAUALARAXgADxiyQhHA8gxBDQgfAqgXAtQjlADiTDqQA3hpBWhbQBPhTBphJQBdhBByg4");
	this.shape.setTransform(66.8,-140.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6B8A08").s().p("AioBMQAYgHAYgLQA/gbBHg2QAqgeBThAQA3goAvgYIAAACQhHA7gxBEQgfApgXAuQjlACiTDqQA3hoBWhbgAERihQgOgIgNgOIgLgMIgHgKQgLgSgEgRQgGgWAKgIIAAAAIAAAAQAPAgAKARQAKARARAOQARAPAIABIAAAAIAQADQgBAJgGAEQgEADgGAAQgIAAgMgGg");
	this.shape_1.setTransform(66.8,-140.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5D802").s().p("AguAQQBchAByg4IAFgDIAHAKIALAMIgFADIAAgBQgvAYg3AnQhSA/gqAfQhIA2g/AbQgYALgYAHQBPhUBqhJgADnhNQgIgBgRgOQgRgPgKgQQgKgRgPggQAOAGAMAJQAcAUAPAdQAJAQgBAPg");
	this.shape_2.setTransform(73.1,-149.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAwQABgPgJgQQgPgcgbgUQgMgJgOgGIAAgBQALgHAUAKQATALARAXQASAWAGAWQACAKgBAHIgQgDg");
	this.shape_3.setTransform(93.2,-162.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#17435F").ss(3,1,1).p("AgYhPQgeAzggAcAAphbQgjA+hLBPABXAAQgaA1gqAnABOg7Qg+BfgvAv");
	this.shape_4.setTransform(59.9,-104.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ALlkBQgBAAgBAAQjaAAiODSQgJANgJAPQhLB6g1C6QgEAOgEAPIsqhcQgqjAAIitQAFiBAhh2Qh+CAgqCWQgqCVAsBuQAFANAFAMQAIAQAIANQAnA/A7ATQE4gWEAA4QB0AZBOAQQBSAUBVAEQAUABAUAAQBlgDBaguQBOgoA1hHQAQgXAOgZQAEgJAFgJQArhYAQhxQAHgzgEgwQgDgigIghQAAgBAAAAQgHgagKgYg");
	this.shape_5.setTransform(-0.4,-111);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADBAQAQg9ABgxQAEhHgRhNIARAEQAIAgADAjQAEAwgHAyQgQBygqBYIgJASQAWhGAQg9g");
	this.shape_6.setTransform(73,-112.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2875A9").s().p("AEgFBQhVgEhSgUIjCgoQkAg4k4AVQg7gSgng/IAIgFIAQANQAJAHAIACQAKAEAKgBQALgCAHgHQAIgHABgOQABgIgBgRQgOiaAcibQgICtAqDAIMqBcIAIgeQAEAKAIAIQAUAWAcAGQAtAJBBgcQBigqBPhKQBQhKAyheQAQggAcg+QgBAzgQA9QgRA8gWBFQgOAZgQAXQg1BIhOAoQhaAuhlADQgUAAgUgCgALRlCIACAAQAKAZAHAZQhpgShiA2QhjA2hNBGQCOjSDaAAg");
	this.shape_7.setTransform(1.4,-104.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3399DB").s().p("AErFoQgcgGgUgWQgIgIgEgKQA1i6BLh6QAJgOAJgOQBNhGBjg2QBig2BpASIAAABIgRgDQARBNgEBGQgcA9gQAgQgyBfhQBKQhPBKhiAqQgxAVgmAAQgMAAgLgCgAqiD4QgIgCgJgHIgQgNIgIAFQgIgOgIgPIgKgZQgshuAqiVQAqiWB+iBQghB3gFCBQgcCaAOCbQABARgBAIQgBAOgIAHQgHAHgLACIgGAAQgHAAgHgDg");
	this.shape_8.setTransform(-1,-113.5);

	this.instance_1 = new lib.db_face2("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,-118.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AGKA5QAqhACGhnIgni2QmAiCoPAYQiqELgTGrIN1BrQAvjuAfhsg");
	this.shape_9.setTransform(-2,-118.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhNCPQA5i8BEiBIAoC2QiFBmgqBBIAKggg");
	this.shape_10.setTransform(46.2,-130.5);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(5.5,-128.2);
	this.instance_2.alpha = 0.34;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("ACeiBQAHhCALhDIlPAAQgIA3gEA4QAAAGAAAGQgCAZgBAZQgBAgAAAhQAAAOAAAOQABAxADAyQABALABALQADArAGArQASAPAWALQA3AcA8gCQAZgBAagHQAMgDAMgFQAPgGAOgIQADgCAEgCQAGgEAHgEQAUgOAQgRQgDglgBglQgBgKAAgLQgBgrABgrQAAgOABgPQACg2AFg3QgxAPgyAEQhzAMhzgpACWAJQgcAKgdAGQgWAFgWACQhxAOhvgqACWBfQgbAMgaAJQgWAHgVAFQiBAghgg5");
	this.shape_11.setTransform(-9.9,-62.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#747474").s().p("Ag7CXQgWgMgSgOQgFgsgEgrIgBgVIADACIABAAIACABIABABQA7AgBGAAIAAAAIAAAAQAmAAAqgJIAIgCIgIACQgqAJgmAAIAAAAIAAAAQhGAAg7ggIgBgBIgCgBIgBAAIgDgCQgEgxgBgxIAHACQBQAdBQAAIABAAIAAAAQAcAAAcgDQgcADgcAAIAAAAIgBAAQhQAAhQgdIgHgCIAAgeIABhBQBTgDBJAjQAiAQAQAWQANASAEAjIACARQADAnAAAnQAABAgIA/QgZAHgbABIgIAAQg2AAg0gagAhtARIAAAAg");
	this.shape_12.setTransform(-16,-54.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("ABcBNQAVgFAWgIQgWAIgVAFQAAgngDgnIgCgRQAWgDAWgFQgWAFgWADQgEgjgNgSQgQgWgigQQhKgjhSADIADgxIAAgMIA6AAQA2ABAqAIQAzAKAZAWQAJAIAGAJQAIANAEAUIAFAkIACAxIAEBaIACB2QgOAIgPAGIgYAIQAIg/AAhAgAAvifQAZAAAZgCQgZACgZAAIgBAAIAAAAQhYAAhYgeIgDgBIADABQBYAeBYAAIAAAAIABAAg");
	this.shape_13.setTransform(-13.7,-57.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("ABfCDQAZgJAcgMQgcAMgZAJIgEhbQAcgGAdgKQgBArABArIAAAVQACAlACAlQgQARgUAOIgNAIIgGAEIgCh1gABbAoIgDgxIgEgjQgEgUgIgNQgGgKgJgIQAygEAxgPQgFA3gCA2IgBAdQgdAKgcAGIAAAAgACUAYIAAAAgAA5hfQgZgWgygJQgrgIg3gCIg5ABQAEg5AIg3IFPAAQgLBDgHBCQgxAPgyAEIAAAAgACchyIAAAAg");
	this.shape_14.setTransform(-9.7,-64.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("ACDnYQgHAIgUgCQgNgBgOgGQgIgDgHgDQgFgDgFgCQgPgJgIgKQgLgNAGgHQACgDAEgBQAHgDANABQAGABAHACQAOADAPAHQAWALALANQAGAHABAGQABAEgCADgABKnTQgFASgFASQgxCzgHCpQgCA/ADA9QANDyBKD3IjAgYQhdmICZmQQAghWArhWQAFgKAFgJ");
	this.shape_15.setTransform(-49.2,-139.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5D802").s().p("AhCg3QAhhVArhWIAQASQAEAFAEAEQgwCzgGCoQghBKgWBMQgQivAZiygAAgkOQgegSAAgCQAAgDgCgDQAHgDAOACIAMACIANAHQAXAQANAVQgcgFgWgOg");
	this.shape_16.setTransform(-46.3,-162.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6B8A08").s().p("AhgH5QhdmICZmQQgZCzAPCuQAWhMAghKQgCA/ADA9QANDyBKD3gAA4m5IgRgSIAKgTIADgHQgPgJgIgKQgLgNAGgHQACgDAEgBQABACAAADQAAACAfATQAWANAbAGIAVADQABAEgCADQgHAIgUgCQgNgBgOgGIgPgGIgKgFIAKAFIAPAGIgDAGIgKAkQgFgEgDgFg");
	this.shape_17.setTransform(-49.2,-139);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAOAUQgNgUgWgQIgNgHQAOAEAPAHQAWALALALQAGAIABAGIgVgEg");
	this.shape_18.setTransform(-39.5,-189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("ADxiuQgcgtglgwQgIgGgIgDQgRgGgSAGQgWAGgYAYQg0A1AYA3QATAXAQAXQAKgcAOgSQAPgUATgKQAngWA6AQgAiJgbQgRAFgNAIQgNAHgKAJQgtAtAaBdQBAAkA5AbAiJgbQgngagpggQgQgDgNAAQgSAAgOAGQgeALgOAlQgbBBAwA3QAwAdAsAZABWhcQAUAdAOAcQAOgNANgJQATgNASgHQBKgcA4BQQgXhGgyhPAgZAkQg2gag6glACSAlQAOgEANgDQAVgEATACQBVAHAaB6QAWhTgghjAB4gjQAUAmAGAiQAEAZgDAWQAIAHAHAHQAOANALAOQA0BHgpBSQBJgIAgg8QANgaAIgbABkBOQgUAPgNAQQgPATgGAWQgPAwAdBAAgZAkQgQAMgMAPQgLAOgHAPQgYAwAHA/QBTAnBBAUQBRAXA5gHACTBUQgXgBgYgFQg8gLhBgf");
	this.shape_19.setTransform(26.4,-5.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747474").s().p("AA8EEQgTgrAAgkQAAgRAFgQQgFAQAAARQAAAkATArQhBgThTgoQgCgOAAgOQAAguATgkQBCAsAzANQAbAHAXgBQA9gDAegbQAdAnAAArQAAAigSAlQgNABgNAAQgxAAg/gSgADYDOQAAgrgdgnQAjgggJhCIgFgZQgJgogPgoIABAAIABAAIACgBQARgGAQAAIAAAAIABAAQAwAAAnA1IAFAHQAgBjgWBSQgah6hVgHQBVAHAaB6QgIAcgNAZQggA8hJAJQASglAAgigAjRCKQgKgiAAgcQABgvAcgdQAtAnA0AlIAWAPQgTAkAAAuQAAAOACAOQg5gbhAgkgAktBUQgwg3AbhBQAOgkAegMQAoArAwApQgcAdgBAvQAAAcAKAiQgsgZgwgdgAC7B8IAAAAgAhHBbIAAAAgAi+AAIAAAAgAE6gaIgFgHQgng1gwAAIgBAAIAAAAQgQAAgRAGIgCABIgBAAIgBAAQgRgugXgtQAXgMAdAAIAAAAIAAAAQAVAAAYAGQAyBPAXBHIAAAAgACQiqQgOgagQgaQAQghAegWQAIADAIAGQAlAvAcAtQgYgGgVAAIAAAAIAAAAQgdAAgXAMIAAAAg");
	this.shape_20.setTransform(26.4,-5.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4C4C4C").s().p("ABmC/QgPgCgPgFQgtgNgsgaQgVgLgVgOQgggUgpghQANgHARgGQA6AnA1AZQgPANgLAOQALgOAPgNQBCAgA9ALQgUAOgOAQQAOgQAUgOQAXAEAXABIAPAOIgPgOQADgWgEgZQAOgEANgDIABAHQAEASgBAKQAAAOgIALQgDAFgEADQgMAKgZAEIgTABQgTAAgUgEgACbAuQAOgMANgKQARAtAJArQgNADgOAEQgGgigUgngADQBwIAAAAgAixAeQgZgTgJgRQAOAAAQADQAoAfAnAaQgRAGgNAHIgtglgAB5gKQAKgbAOgTQAWApAPAnQgNAKgOAMQgOgbgUgdgAC2AYIAAAAgABXg4QgZg3A0g1QAYgYAXgGQgFAEgIALIgMAPQgGAIgDAHQgJAPAAAdQAPAZAMAYQgOATgKAbQgPgWgTgYgACRg4IAAAAg");
	this.shape_21.setTransform(22.8,-14.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("ABNDUQAHgWAPgTQgPATgHAWQgzgOhCgsQAIgPALgOQgLAOgIAPIgVgOQg0gmgtgmQAKgKAMgHQgMAHgKAKQgxgqgngqQAOgGARAAQAJASAZASIAtAlQAqAgAfAVQAVAOAVALQAtAZAsAOQAQAEAPADQAfAGAbgDQAZgEAMgKQAEgEADgEQAHgLABgOQAAgKgDgSIgCgHIADAAQAOgDANAAIAAAAIABAAIAIAAIACABIgCgBIgIAAIgBAAIAAAAQgNAAgOADIgDAAQgIgrgRgtQATgMASgHQgSAHgTAMQgPgngWgpQAPgUATgKQgTAKgPAUQgNgZgPgYQAAgdAJgPQADgHAHgIIALgPQAJgLAEgEQASgGARAGQgeAXgQAgQAQAaAOAbQAXAtARAuQAPAnAJAoIAFAaQAJBBgjAgQgLgOgOgNQAOANALAOQgeAbg9AEIgHAAQgUAAgYgGgADbC7IAAAAg");
	this.shape_22.setTransform(23.2,-12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AhUDMQADABAVADQAWACAVgBQAYgBAYgFQAXgGAVgIQAUgHARgMQABgBABgBQAggVAUgeQAFgIAEgJQAIgQAEgTQACgHACgHQAFghgIgfQgCgQgIgRQgZg+g1guQgDgDgDgEQgQgMgRgKQgZgOgagHQgDgBgEgBQgGgDgZABQgYABgoAbQgqAbgXAqQgUApgKApQgIAoAFAxQAEAxAYAqQAZAqA1ALg");
	this.shape_23.setTransform(-11.6,-13.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3399DB").s().p("Ag8DQIgYgEQg1gLgZgqQgYgqgEgxQgFgxAIgoQAKgpAUgpQAXgqAqgbQAogbAYgBQAZgBAGADIAHACQAaAHAZAOQARAKAQAMIAGAHQA1AuAZA+QAIARACAQQAIAfgFAhIgEAOQgEATgIAQIgJARQgUAeggAVIgCACQgRAMgUAHQgVAIgXAGQgYAFgYABIgJAAQgQAAgSgBg");
	this.shape_24.setTransform(-11.6,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer_7
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(1,1,1).p("AAVDUQgDAAgUgGQgUgFgTgJQgXgLgVgNQgUgNgQgPQgQgPgNgSQgBgBgBgBQgXgggJgkQgCgKgCgJQgCgSABgTQABgHABgIQAFghARgcQAIgPAMgNQArgyA+gZQAEgBAFgCQASgGASgDQAbgFAaADQAEABAFAAQAGAAAXAKQAXAJAeAoQAdApAIAwQAHAvgFAqQgEAqgTAtQgTAtgkAgQgkAfg1gJg");
	this.shape_25.setTransform(-30.8,-14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#17435F").s().p("AgEBjQgWgBgMgfQgOgdACgoQADgpAQgdQARgbAUABQAWABAMAeQAOAegDApQgDAogPAcQgQAbgUAAIgBAAg");
	this.shape_26.setTransform(-21.5,-13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2875A9").s().p("AgvDTQgZgQgRgeIgKgUQgchCAJhXQALhZAqg7QAIgMAJgLQAVgWAYgGIACgFQAFAAAXAKQAXAJAeAoQAdApAIAwQAHAvgFAqQgEAqgTAtQgTAtgkAgQgcAYgmAAQgKAAgMgCgAgHhEQgQAcgDApQgCAoAOAeQAMAfAVABQAVABARgdQAPgcADgoQADgogOgfQgMgegWgBIgBAAQgVAAgPAbg");
	this.shape_27.setTransform(-23.9,-14);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhgAfQArgxA9gZIAKgDQARgGATgDQAcgFAaADIAIABIgCAFQgXAGgVAWQglADgfAHQhLAVgqAzQAIgPALgNg");
	this.shape_28.setTransform(-35.7,-29.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3399DB").s().p("AguBsQgugqgHgXIgEgTQgCgTABgSIACgPQAFghARgcQArgzBLgVQAfgIAkgDQgJALgIAMQgqA7gLBZQgJBXAcBDIAKAUQhAgWgugrg");
	this.shape_29.setTransform(-39.3,-14.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2E89C4").s().p("ABOBSQgTgGgUgJQgWgKgVgNQgUgOgQgPQgQgOgMgRIgCgDQgYgggIgkQAGAXAuAqQAvAqA/AWQASAeAZAQIgZgGg");
	this.shape_30.setTransform(-38.9,-1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AiGg5QgBAAAAAAQgDAAgDAAQgUgBgSgCQgPAEgMAHQg4AegEBbQAXAfAzAPQAVAGAbACQA4ADBYgMQA7gIBKgPQA4gMBAgRIAHhZIADgzIAEgzQhkAegzANQgMAUgHASQgNAgACAaQACAwAtAhAAHhAQgLAPgJAOQgUAegEAaQgHA0AsAsAAHhAQgRADgSABQgMABgLABQgdABgcAAQgMAAgMAAAhsg5QgFAFgEAEQgYAZgLAbQgXA3AfBDAB0hTQg4ANg1AG");
	this.shape_31.setTransform(-67.5,-12.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#4C4C4C").s().p("AiZArQgRgEgOgGIAJgJIgJAJQgIgEgHgFIAYAAIA5gBIAXgDIAkgDQgMAOgKAOIgSABQgiAAgUgDgAhRAtIAAAAgAg7ARQA1gHA3gLQgMASgHASQAHgSAMgSQAzgNBkgfIgEAyQh0AXgyAHQg3AIg4ACQAKgOAMgOg");
	this.shape_32.setTransform(-60.8,-20.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AhBAxQAEgcATgcQgTAcgEAcIgPgBQgngBgbgFQgTgEgQgHQALgcAZgXQgZAXgLAcQgNgGgLgIQgbgRgCgWQAMgGAPgEIAmACIAGABIABAAIACAAQAHAFAIAEQANAHASADQAUADAiAAIASAAQA3gDA4gIQAygGB0gYIgEAyQhaAbhTAMIgBgGQAAgZAMgcQgMAcAAAZIABAGQg6AIg4AAIgJAAgAA6ApIAAAAg");
	this.shape_33.setTransform(-64.7,-14.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747474").s().p("AiMBYQgSgoAAgjQAAgYAJgXQAQAHATAEQAaAGAnABIAQAAQA7ABA/gJQBUgLBagbIgGBZQhBARg4AMQgsgigDguQADAuAsAiQhKAPg7AIQglgmAAgqIABgPIgBAPQAAAqAlAmQhGAKgyAAIgXgBgAi8BQQgzgPgXgfQAEhbA4gfQACAXAaASQAMAHANAGQgJAXAAAYQAAAjASAoQgcgCgUgGgAiVgiIAAAAg");
	this.shape_34.setTransform(-67.9,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).wait(1));

	// Layer_8
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AIZlQQgEgFgFgFQgDgDgEgDQgKgIgOgKQgOgJgSgLQghgShdgeQgEgCgEgBQglgMgtgNQhPgXhVgOQhWgJiOgEQgbgBgbAAQgIAAgIABQhoADhhAXQgxALgfAdQgxAugCBbQgCCIBPCrQAGALAHANQACANACAMQAwD/BNClQEeBME3gcQBLhhAxhBQArjxAgiLIAAAAQAHgcAGgXAIZlQQgCAAgCABQg0ASgtAxQhgBphCD3QgCAGgBAGQBMgiAsglQArgjASgZQACgDACgDQAPgWAMgTQALgwALggQACgGACgGQAlhzAAgNQAAgUgJgOgAhzh3QgKBiACBSQABAVABAUQiigVisg/AEPBgQi/AhjJgb");
	this.shape_35.setTransform(-6.8,-10.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#17435F").s().p("AiGDNQBDj3BfhpQAtgxAzgSIAEgBQAKAOgBAUQAAANglBzIgEALQgKAggMAwQgLATgPAWIgFAGQgSAZgqAkQgrAkhNAjIADgMg");
	this.shape_36.setTransform(34.1,-22.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F5D802").s().p("AiLBdQhagdgRg5QgRg4Abg5IADgHQBggKB0AXQBPAQCOAvIA1AQIgVAaQgVAaglAoQgmAnhdAGIgeABQhNAAhLgYg");
	this.shape_37.setTransform(-8.9,-42.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhbBHQAfhRAlgsQAlgtAXgSQAYgSAxgVIAIAGIAFALQg0ASgtAyQgjAXgdAsQgSAcghBEQgSAngPAaQAAgEAfhSg");
	this.shape_38.setTransform(34.3,-30.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3399DB").s().p("Ak5HOQhNilgwj+QBrArBzAZQCeAjCggEQBxgCBEggIAAGSQhUAIhSAAQjdAAjRg4gAALBMQhFgHg0gIIgBgdQAAhGAIhSQgIBSAABGIABAdQhvgJhLgPQhLgOhUgeQhQirADiIQABhaAxguQAdAbAoAHQAgAFAugHIBNgNIAQgCIgDAHQgbA4ARA6QARA4BaAdQBZAdBdgGQBdgGAmgnQAlgnAVgbIAVgbIAoAKQAzALAqgCQAygBAsgVQAWgLAQgOQAPAJAJAIQgxAVgYASQgXASgmAtQgmAsgeBSQgfBSAAAEIgTAeQghAvgqAWQgoAVgqABIgMAAQgoAAg9gGgAi/n9IgKgIIAKAIg");
	this.shape_39.setTransform(-8,-10.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#2875A9").s().p("AEOBwQhFAghwACQigAEifgjQhygZhrgrIgFgZQCtA+ChAVIgCgoIACAoQihgVitg+IgMgZQBUAeBLAOQBLAPBuAJQA0AIBHAHQBFAGAqAAQArgBAngWQArgVAhgvIATgeQAPgaASgnQAghEASgdQAegsAjgXQhgBphCD2IgDAMQBMgiAsgkQArgkASgYIAFgHQAOgWAMgSIgNAyIAAAAQgfCLgrDyIh9ChgAA3B1QBlAABhgPIABAAIAKgCIAGgBIgGABIgKACIgBAAQhhAPhlAAIAAAAIAAAAQhQAAhSgKIgIgBIgHgBIAHABIAIABQBSAKBQAAIAAAAIAAAAgAnIAWIAAAAgAEOlIIgngKIAjgnQAjgnAmgTQBdAeAgASIAgAVQgRAOgVALQgsAVgyABIgKAAQgmAAgugJgAmqmdQgogGgdgbQAfgdAygMQBggXBogDIAJAHQgaAagYAzIgQACIhOANQgZAEgVAAQgRAAgOgDg");
	this.shape_40.setTransform(-6.7,-10.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B8A08").s().p("ACJBIQiNgvhQgQQh0gWhgAKQAYgzAagZIABAAIAGgIIA2ABQCPAEBVAJQBWAOBPAXQAtANAkAMIAJADQgmARgjAoIgjAnIg1gQg");
	this.shape_41.setTransform(-2.6,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).wait(1));

	// Layer_9
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AgLh4QgKAFgKAGQg4AjguAtQgCACgCACQgPAPgMAOAACBUQgEgKgGgJQgQgbgSgRQgTgRgUgHQgmgNgtAUAACBUQgOANgNAQQgCAEgCADQhBBrhYgyQg+hLBQhiACagGQAbgJAdgGIgOhRIgKg4IgGgiQgfAHgeAJQgNAFgLADQg5AUgxAcAA2ApQgEgngMgiQgHgUgKgTQgOgagSgXACagGQgSgigJgjQgHgagCgaQgBgZACgYAACBUQAHgIAJgHQAQgPAUgNQAsgdA4gS");
	this.shape_42.setTransform(-75.9,-22.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4C4C4C").s().p("AhOBUIgGgCQgQgbgTgRQAJgJAMgIQATgOApgVIADgCQAzgaAigQIAfgNIAmgOIAOBRQgdAFgbAKQgSgigJgjQAJAjASAiQg3ASgsAdQgEgngMghQAMAhAEAnQgTANgRAPIgUgCgAiEA2QAGgIAHgIQATARAQAbQgagGgWgWgAh3AmIAAAAg");
	this.shape_43.setTransform(-68.3,-24.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#747474").s().p("AiqCxQg+hLBQhiIACgBQAagLAYAAIAAAAIAAAAQAOAAANAEIADABIABAAIgGAEQgQAMgHAJQgLANgBAPQAAAZAdAUQAYARAjAHIAFABQgtBJg2AAQgaAAgcgQgAADBBIAGABIAVADIgQAPIgLgTgAh9gZIAEgEQAugtA4gjIATgLQATAXAOAaQgzAfgzAlIgBAAIgDgBQgNgEgOAAIAAAAIAAAAQgYAAgaALIgCABQAMgOAPgPgAAAh4QAygcA5gUIAYgIQAegJAfgHIAGAiQgwAUgUALIAAgTQAAgPABgPQgBAPAAAPIAAATQgxAZgwAfQgOgagTgXgACCh/IAAAAg");
	this.shape_44.setTransform(-77.1,-22.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AhGCLQgjgIgYgRQgdgTgBgaQACgOALgOQAHgJAPgMIAHgEQAzgkAzggQAwgeAxgaQATgKAxgVIAKA4IgnAOIgeANQgHgagCgaQACAaAHAaQgjAQgzAaIgEACQgGgVgKgTQAKATAGAVQgoAVgTAOQgLAIgKAKQgSgSgUgHQAUAHASASQgHAHgGAIQAXAXAZAGIAKASQgOAOgNAPIgEAIIgFgBgABbg4IAAAAg");
	this.shape_45.setTransform(-72.3,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]}).wait(1));

	// Layer_10
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("ACIh0QgFhLAShJIhpAAIjiAAQgGArgDArQgCAmABAmQADBJAOBHQAMA5ATA4ACIh0QgfAPgeALQgSAHgSAFQh/Ajhog7AC5BKQgRAOgQALQgOAKgPAJQiFBRiGgsACcgDQALAlARAoIABAAQAgB2heAvQgTAJgYAHQgLADgMACQhWAShUgrQgRgogOgoACcgDQgUAMgUAKQgRAJgSAIQh7AyiFgsACcgDQgRg5gDg4");
	this.shape_46.setTransform(-3.6,59.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#747474").s().p("AhQC/QgRgngOgoIACABIABAAQAtAOAuAAIAAAAIAAAAQBRAABSgvIABAAIABgBIAIgEIgIAEIgBABIgBAAQhSAvhRAAIAAAAIAAAAQguAAgtgOIgBAAIgCgBQgTg4gMg4IADAAIACABIABAAIADABQA5ARA3AAIAAAAIABAAQBDAABDgaQhDAahDAAIgBAAIAAAAQg3AAg5gRIgDgBIgBAAIgCgBIgDAAQgOhIgDhJIADABIABAAQA/AkBJAAIAAAAIABAAQAoAAAsgMIAGgBIANAqQANAnAQAhQAJATALATQAQAcACAHIAEAJQAFAPgBANQgBAOgHAPQgFAJgLAQQgZAngVAVQgZAFgZAAQg9AAg7gfgAiOAAIAAAAgAgThsQhJAAg/gkIgBAAIgDgBQgBgmACgmQBnAjBsgKQAKAqAJAhIgGABQgsAMgoAAIgBAAIAAAAg");
	this.shape_47.setTransform(-6.9,63.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AB1DLQALgRAFgJQAHgPABgNQABgNgFgPIAdgTIgdATIgEgKQgCgGgQgdQgLgSgKgUQASgHASgJQgSAJgSAHQgPghgNgmIgNgqIAkgMIgkAMQgKghgJgqQhsAKhngjQACgrAHgsIDiAAQAGBgAZBPIAHAVQANAnAVAxIAhBJIADAHQALAbABAPQAAAKgEAOIgJAWQgPAfgNAUQgTAKgYAGIgXAGQAUgWAagmg");
	this.shape_48.setTransform(-5,59);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4C4C4C").s().p("AAgDJIAJgWQAFgOAAgLQgBgOgLgcIgDgGIgghKQgWgwgNgnIgGgWQAdgKAegQQAEA4AQA4QgTANgTAKQATgKATgNQAMAnARAnIAAABIggAYIAggYQAhB1hfAvQAOgUAOgfgAhKj7IBpAAQgTBJAFBLQgeAQgdAKQgZhPgHhfg");
	this.shape_49.setTransform(8.3,57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).wait(1));

	// Layer_11
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("AIvDQQAQgUAHgNQAFgaADgXQABgGABgGQADggAAgXQgCg6gMg1QgIgigLghQgsh0hUhWQhWhWh2gfQh0ggh4APQhoAJhUAaQhUAbhmBLQgRAQgQASQhJBRgrBjQgyBygKB+QgCAXgCAYQgBAaABAaQALAHALAHAIvDQQgYAggcAcQgQARgSAQQgTAQgVAOQgXAQgZAOQgnAYguARQghALgiAIQgcAHgbAEQgpAEgpAAQgiAAghgBQgtgEgtgEQgsgHgrgHQgrgKgpgLQgqgLgogOQgkgLgigOQgigOghgPQgfgPgegQQgegQgdgRAIvDQQABAGgEARQgDARgVAfQgUAfhHAzQhGAzh+AfQh+AfizgWQizgWiHg8QiIg8gZgPQgZgQgLgeIAAAA");
	this.shape_50.setTransform(-2.7,107.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("Ag1B1Qi0gViHg8QiHg7gZgQQgagQgKgdIAAgBIA6AhQAeARAgAOQAgAQAiAMQAjAOAkAMQAoAOApAKQAqAMAqAJIBYAOIBZAIIBDABQApABApgEQAcgFAbgHQAigHAhgMQAvgQAngYQAYgOAXgPQAVgOAUgRQARgPAQgRQAdgcAXggQABAFgDARQgEARgUAfQgUAfhHAyQhHA0h+AeQhKAShcAAQhBAAhJgJg");
	this.shape_51.setTransform(-3.3,140.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AHLCBQgLghgPgdQgZgxgkgkQgpgphNA8QhNA9hNCYQgMgdBDhnQBChmA5gWQA4gWgQgxQgRgyhcgxQhdgyh0gIQh2gIhrAZQhfAXhnAzQgfAPghAUQBmhMBUgaQBUgaBogJQB4gQB0AgQB2AfBWBXQBUBWAsByQALAhAIAiQAMA3ACA5QAAAYgDAgQgChVgYhKg");
	this.shape_52.setTransform(8,90);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#2875A9").s().p("ABhG0IhDgBIhZgIIhYgOQgqgJgqgMQgpgKgogOQgkgMgjgOQgigNgggQQgggOgegRIg6ghIgWgOQgBgaAAgaQA9AyB4A3QB4A4CuAXQCtAXAvgSQAogOASgKIAGgDIAFgCQANgGARgjQARgkBBhwQBAhwBFg/QBGhAA2gUQAPAdALAhQAYBJACBVIgCAMIgIAxQgHAMgQAVQgXAggdAcQgQARgRAPQgUARgVAOQgXAQgYAOQgnAYgvAQQghAMgiAHQgbAHgcAFQgkADglAAIgJAAgAjKheQh0gXgNgsQgQgqAyhFQAyhEBTgsQBTgsBigGQBkgGBCAZIAIADQAbANATAQQAWARAMAaQANAagFAaQgFAegdAcQgRARgnAeQgjAfgZAnQgqAlhXADIgUAAQhQAAhmgVg");
	this.shape_53.setTransform(-2.8,107.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3399DB").s().p("AhbGQQivgXh4g4Qh4g3g8gyIAEgvQAKh+AyhyQArhjBJhRQAQgSASgPQAhgUAegPQBngzBfgXQBqgZB2AIQB2AIBcAyQBcAxARAyQARAxg5AWQg5AWhCBnQhCBmALAdQBNiXBNg9QBNg9ApApQAkAlAZAxQg2AUhGA/QhFBAhBBwQhABwgRAkQgSAjgMAGIgFACIgGADQgSAKgoAOQgUAIgsAAQg6AAhigNgAArmRQhjAGhTAsQhTAsgxBEQgyBFAQAqQANArBzAYQB0AYBWgDQBYgEApgkQAagoAjgeQAmgeARgRQAdgcAGgeQAEgagMgaQgMgagXgRQgSgQgcgNIgIgDQg0gUhLAAIgmABg");
	this.shape_54.setTransform(-5.4,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).wait(1));

	// Layer 2
	this.instance_3 = new lib.db_shadow("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.7,207.3);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.9,-193.1,196.7,516.7);


(lib.DigiBotcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_12
	this.instance = new lib.db_atL("single",0);
	this.instance.parent = this;
	this.instance.setTransform(62,-121.4);

	this.instance_1 = new lib.db_headlight("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.7,-155.7);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,-109.1);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 5
	this.instance_3 = new lib.db_headf("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.1,-92.2);

	this.instance_4 = new lib.db_mon("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.8,-99);

	this.instance_5 = new lib.db_face("single",2);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-8.8,-99);

	this.instance_6 = new lib.db_atR("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-54,-120.3);

	this.instance_7 = new lib.db_neck("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-12.1,-46.4,1,1.021,0,11.7,0);

	this.instance_8 = new lib.db_handL("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(79.7,28,1,1,-23.7,0,0,0,-18.5);

	this.instance_9 = new lib.db_armL("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(57.2,2.6,1,1,-7.4);

	this.instance_10 = new lib.db_body("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-11.4,1);

	this.instance_11 = new lib.db_j("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-5.8,64.4);

	this.instance_12 = new lib.db_b("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2.6,107.4);

	this.instance_13 = new lib.db_handR("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-113.5,-0.3,1,1,17.5,0,0,-0.1,-19);

	this.instance_14 = new lib.db_armR("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-60,-40.2,1,1,17.5,0,0,22.9,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Layer 2
	this.instance_15 = new lib.db_shadow("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.7,207.3);
	this.instance_15.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.6,-174.4,253.7,497.9);


(lib.DigiBotcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.db_headlight("single",0);
	this.instance.parent = this;
	this.instance.setTransform(28,-171.8,1,1,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AEijiQASAXAFAWQACAKgBAHQgBAJgGAEQgKAIgUgLQgOgIgNgOQgFgGgFgGQgEgGgDgFQgLgSgEgRQgFgVAJgIIABgBQALgHAUALQATALARAXgAD1itQhIA6gyBDQggApgXAtQjmgBiXDnQA5hoBYhZQBQhSBqhHQBfg/Bzg2");
	this.shape.setTransform(80.6,-135.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5D802").s().p("AgtAQQBdg/Bzg2IAFgDIAHAKIAKAMIgEAEIgBgBQgvAWg3AnQhTA9grAfQhJA1g/AZQgZALgYAGQBRhSBrhHgADphIQgIgBgQgPQgRgPgJgRQgKgQgPggQAOAGAMAJQAbAVAPAdQAJAQgBAPg");
	this.shape_1.setTransform(87,-145.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeAxQABgPgJgRQgPgcgagUQgMgKgOgGIAAAAQALgIAUALQATAMARAWQARAXAGAWQABAKAAAHIgQgDg");
	this.shape_2.setTransform(107.4,-157.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6B8A08").s().p("AioBJQAYgGAYgLQA/gaBJg0QAqgeBUg+QA3gnAwgXIAAACQhIA6gyBDQggAogXAuQjmgCiXDnQA5hnBYhagAEVicQgOgIgNgOIgKgMIgHgKQgLgSgEgRQgFgWAJgIIABAAIAAAAQAOAgAKARQAKARARAPQAQAOAIACIAAAAIAQADQgBAJgGAEQgEADgGAAQgIAAgMgHg");
	this.shape_3.setTransform(80.6,-135.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#17435F").ss(3,1,1).p("AgXhPQgfAyggAbABXABQgbA0gqAnABPg5QhABdgwAuAArhaQgkA8hNBO");
	this.shape_4.setTransform(73.1,-99.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1,3,true).p("ALpjyQgBAAgBAAQjagEiSDPQgJAOgJAOQhOB5g4C5QgEAOgEAPIsphqQgmjBALitQAHiBAjh1QiAB+gsCVQgtCUApBvQAFANAGAMQAHAQAIAOQAmA/A7AUQE4gQD/A8QBzAbBOARQBSAWBUAFQAUACAUAAQBmgBBagsQBPgnA2hHQARgWAOgZQAFgJAEgIQAthYAShxQAIgygDgwQgCgjgIghQAAgBAAAAQgGgagKgYg");
	this.shape_5.setTransform(13.1,-107.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2875A9").s().p("AEZE9QhVgFhSgWIjAgsQkAg8k4AQQg7gUglg/IAIgFIAPANQAJAHAIADQAKAEAKgBQALgCAHgHQAIgHACgOQABgHgBgSQgMiaAfibQgKCuAmDAIMoBqIAJgdQAEAJAIAJQATAWAcAGQAtAKBCgbQBigoBRhJQBQhIA0hdQARggAdg9QgCAzgRA8QgSA8gXBFQgOAZgRAWQg2BHhPAnQhbAshlABIgogCgALWk+IACAAQAJAYAGAaQhogUhjA0QhkA0hOBFQCSjPDaAEg");
	this.shape_6.setTransform(14.8,-100.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3399DB").s().p("AEkFvQgdgHgTgWQgIgIgEgKQA4i5BOh5IASgbQBPhFBjg0QBjg0BpATIAAABIgRgDQAPBNgEBGQgdA9gRAfQg0BehRBJQhRBIhiApQgvAUglAAQgOAAgMgDgAqoDuQgIgCgJgHIgPgOIgIAFQgIgOgHgPIgLgZQgphvAtiUQAsiWCAh+QgjB2gHCBQgfCaAMCbQAAARgBAIQgCAOgHAHQgHAHgMABIgEABQgIAAgIgEg");
	this.shape_7.setTransform(12.6,-110.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADBAQARg8ACgyQAEhGgPhNIARADQAIAiACAiQADAwgIAyQgSBxgsBYIgJARQAYhFARg9g");
	this.shape_8.setTransform(86.4,-108);

	this.instance_1 = new lib.db_face("single",6);
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.5,-115.6,1,1,1,0,0,0,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGLA/QArg/CIhlIgli3Ql9iIoPAPQivEIgbGqINzB6QA0jsAhhsg");
	this.shape_9.setTransform(11.3,-115.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AhOCNQA8i7BHh/IAkC2QiGBlgrBAIAKghg");
	this.shape_10.setTransform(59.7,-126.5);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.2,-124.9,1,1,1,0,0,0.1,-0.1);
	this.instance_2.alpha = 0.34;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACVgLQAAgBAAgBQAAgBAAgCQAAAAAAgBQADg2AGg2QABgFABgFQg0ANgxAFQgGAAgGAAQhtAGhsgnQgBAFAAAFQgCAYgCAZQgBAfgBAgQAAABAAABQAAABAAABQAAABAAABQAAAMAAAMQAAAxACAzQABALABAKQACArAFAsQASAPAWALQA2AdA8gBQAaAAAZgHQAMgDAMgEQAPgGAPgIQADgCADgCQAHgEAGgEQAVgOAQgQQgCglgBglQAAgKAAgLQgcAMgZAIQgXAHgVAFQiBAdhfg6ACVgLQgeAJgcAFQgBAAAAAAQgWAEgVACQgDABgCAAIAAAAQgBAAgBAAQhuAKhrgqACSBjQAAgrACgrQAAgMABgMACgiHQAHg9ALg+IlPgGQgIA4gFA4QgBABABAB");
	this.shape_11.setTransform(2.9,-59.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#747474").s().p("Ag+CWQgWgLgSgPQgFgsgCgrIgBgVIACABIAAAAIAAAAIACACIACAAIABABQA8AiBIABIABAAIAAAAQAlgBApgIIAAAAIACgBIADAAQgBBAgIA+QgaAHgbAAIgEAAQg4AAg1gcgAAdA3QhIgBg8giIgBgBIgCAAIgCgCIAAAAIAAAAIgCgBQgDgyAAgxIABgZIACAAQBWAjBYAAIABAAIAAAAIAkgCIAAAAIACAAIACAAIABAAIABAAIAEAZIABAQQACAngBAoIgDAAIgCABIAAAAQgpAIglABIAAAAIgBAAgABAhJQhYAAhWgjIgCAAIAAgCIAAgCIAAgCIACg/QBSgCBJAlQAhAQAQAWQAGAKAFANIABAEIABACIgBAAIgBAAIgCAAIgCAAIAAAAIgkACIAAAAIgBAAgABrhLg");
	this.shape_12.setTransform(-3.6,-51.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("ABaBPQABgogCgnIgBgQIgEgZIAEgBIArgGIgrAGIgEABIgBgCIgBgEQgFgNgGgKQgQgWghgQQhJglhSACIADgxIABgKIACAAQBeAiBeAAIAAAAIAAAAIAbgBIANAKQAIAIAGAJQAIANADAVIAEAjIABATIAAAEIAAACIABAZIACBaIgsAMIAsgMIAAB1IgdAOIgYAHQAIg+ABhAgACGBDIAAAAgAA9ioQheAAhegiIgCAAIAAgCQAnAAASABQA3ACAqAJQAnAIAYAPIgbABIAAAAIAAAAg");
	this.shape_13.setTransform(-1.3,-54.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4C4C4C").s().p("ABZCGQAagJAcgLIAAAVQAAAlACAkQgQAQgUAOIgNAIIgHAFIAAh1gABXArIgBgZIACgBQAcgGAdgJIgBAZQgCArABAsQgcALgaAJIgChbgABWASIAAgCIAAgFIgBgSIgEgjQgDgVgIgNQgGgJgIgHIgNgLIANAAQAxgEAzgOIgBALQgGA2gDA1IAAACIAAABIgBACQgdAJgcAGIgCABIAAAAgAArhnQgYgPgmgIQgrgJg3gCQgSgBgnABQAFg5AJg4IFPAHQgMA9gHA9QgzAOgxAEIgNAAIAAAAg");
	this.shape_14.setTransform(3.2,-61.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACJnXQgHAIgUgCQgNgCgOgGQgIgDgHgDQgFgDgEgCQgPgJgIgKQgLgOAGgHQACgCAEgCQAHgDANACQAGABAHACQAOADAPAIQAWALALANQAGAHAAAGQABAEgCADgABQnTQgGASgFASQg0CygKCpQgDA/ACA8QAJDzBFD4Ii/gcQhWmJCgmNQAhhVAthWQAFgJAFgJ");
	this.shape_15.setTransform(-35.1,-136.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B8A08").s().p("AhrH2QhWmKCgmMQgdCyANCuQAXhMAhhJQgDA/ACA8QAJDzBFD5gAA9m4QgJgKgHgJIAKgTIAEgHQgPgJgIgKQgLgOAGgHQACgCAEgCQABACAAAEQAAACAeATQAWAOAbAGIAVADQABAEgCADQgHAIgUgCQgNgBgOgHIgPgGIgJgFIAJAFIAPAGIgDAHIgLAjQgEgEgEgEg");
	this.shape_16.setTransform(-35.1,-136.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AANAVQgMgVgVgQIgNgHQAOADAPAIQAVALALAMQAGAIAAAFIgVgDg");
	this.shape_17.setTransform(-24.7,-186.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F5D802").s().p("AhBg3QAihVAthWQAHAKAJAJQADAFAFAEQg0CygJCoQgiBJgYBMQgMivAcixgAAlkMQgegTAAgDQAAgDgCgCQAHgDAOACIAMADIANAHQAWAPANAXQgbgGgWgOg");
	this.shape_18.setTransform(-32,-159.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.shape_10},{t:this.shape_9},{t:this.instance_1},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_7
	this.instance_3 = new lib.db_handL("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(107.4,-77.3,1,1,0,-160.7,19.3,0,-18.3);

	this.instance_4 = new lib.db_armL("synched",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(81.4,-42.1,1,1,0,-147.2,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(1));

	// Layer_8
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIZlHQgDgFgFgEQgDgEgEgDQgKgIgOgKQgOgKgSgKQgggThcggQgFgCgEgBQgkgMgtgOQhOgYhVgQQhXgLiNgGQgbgCgbAAQgIAAgIAAQhoAChhAVQgyAKggAdQgxAtgDBbQgFCHBMCtQAGAMAGANQACAMACANQAsD/BKCmQEdBRE3gWQBNhgAyhAQAvjwAjiKIAAgBQAHgbAGgXQAMgwALggQADgGACgGQAnhyAAgNQABgUgKgPQgCABgCABQgzAQguAxQhiBohHD1QgBAGgCAGQBNghAsgkQAsgiASgZQACgDADgDQAPgVAMgTAh2h5QgMBiABBSQAAAVABAUQihgXishCAEIBlQi/AdjJge");
	this.shape_19.setTransform(5.4,-7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#17435F").s().p("AiJDLQBHj2BhhnQAugxAzgRIAEgBQAKAPgBATQAAANgnBzIgFALQgLAggMAvQgMATgPAWIgFAGQgSAYgrAkQgsAkhNAgIADgLg");
	this.shape_20.setTransform(45.9,-18.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhcBFQAghRAmgrQAmgsAYgRQAYgSAxgUIAIAGIAEALQg0ARgtAxQgkAXgdAsQgUAbghBEQgTAlgPAbQAAgEAghSg");
	this.shape_21.setTransform(46.2,-26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2875A9").s().p("AEFB0QhFAfhxAAQigABidglQhzgbhrguIgDgZQCrBCChAYIAAgpIAAApQihgYirhCIgNgZQBVAfBKAQQBLAQBvALQAzAJBGAJQBFAHArAAQAqAAApgVQAqgUAigvIATgdQAQgbASgmQAihDATgcQAdgsAlgXQhiBnhGD2IgEALQBOggAsgkQArgjATgYIAEgGQAPgWAMgTIgNAzIAAAAQgiCKgwDxQgyBAhNBfgABFB2QBfAABcgOIAFgBIgFABQhcAOhfAAIAAAAIAAAAQheAAhggOIAAAAIgKgBIAKABIAAAAQBgAOBeAAIAAAAIAAAAgAnPANIAAAAgAENlEIgngKQAPgSAUgVQAlgnAlgSQBcAgAhATQARALAOAKQgQAOgXALQgsAUgxAAIgHAAQgnAAgwgLgAmqmkQgpgIgcgcQAggcAygLQBhgVBogBIAJAHQgbAZgZAzIgQABIhOAMQgXAEgUAAQgTAAgPgDg");
	this.shape_22.setTransform(5.7,-7.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3399DB").s().p("AlHGrQhKimgskAQBrAuByAbQCeAlCggBQBxAABFgfIgHGSQhEAFhDAAQjuAAjfg/gAAEAvQhFgJg0gJIAAgOQAAhMALhaQgLBaAABMIAAAOQhugLhLgQQhLgPhUggQhMisAFiIQADhaAxguQAcAcApAIQAgAGAtgHIBOgMIAQgBIgDAHQgcA4AQA5QAQA5BZAfQBZAeBdgEQBdgEAmgnQAngnAVgaQAJgMANgOIAnAKQAzAMAqgBQAyAAAsgUQAWgLARgOQAOAJAKAJQgyAUgYARQgYASgmAsQgnArggBSQggBRAAAFIgTAdQgiAvgrAUQgoAVgqAAQgrAAhGgHg");
	this.shape_23.setTransform(4.2,-4.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5D802").s().p("AiNBcQhZgfgQg5QgQg4Abg4IADgHQBggJB0AZQBPASCNAxIA1ARQgNAOgJALQgVAagmAnQgmAnheAEIgWAAQhRAAhOgag");
	this.shape_24.setTransform(3.3,-39.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B8A08").s().p("ACHBLQiMgyhPgRQh1gZhgAKQAagzAagZIABAAIAHgIIA2ACQCOAHBVAKQBWAQBOAYIBRAbIAIACQglARglAnQgUAUgPATIg1gRg");
	this.shape_25.setTransform(9.8,-50.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).wait(1));

	// Layer_10
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACKhxQgEhLAUhIIhpgCIjigEQgIArgCArQgDAmAAAmQABBJAOBIQAKA5ASA4ACcAAQgQg4gCg5QgfAPgeALQgTAGgSAFQh/Ahhng9ACcAAQALAnAQAnIABABQgRANgQALQgPAKgPAJQiHBOiFguACcAAQgUAMgUALQgSAIgSAIQh8AviDgtAC4BPQAeB2hfAtQgTAJgYAHQgMADgLACQhXAQhTgtQgRgogNgo");
	this.shape_26.setTransform(6.8,62.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#747474").s().p("AhUC/QgRgogNgoIAGACIABAAQAuAPAuAAIAAAAIAAAAQBQAABSguIAEgBIADgCIgDACIgEABQhSAuhQAAIAAAAIAAAAQguAAgugPIgBAAIgGgCQgSg4gKg4IAEABIACAAIABAAQA9AUA7AAIAAAAIAAAAQA/AAA+gWIADgBIgDABQg+AWg/AAIAAAAIAAAAQg7AAg9gUIgBAAIgCAAIgEgBQgOhJgBhJIACABIACABIAFADIABAAQA/AiBIAAIAAAAIAAAAQAnAAArgKIADgBQAGAYAHATQAMAnAPAiQAJATALASIASAjIADAKQAFAPgCANQAAANgIAPQgFAJgLAQQgbAmgUAWQgXAEgXAAQg/AAg9ghgAgMhsQhIAAg/giIgBAAIgFgDIgCgBIgCgBQAAgmADgmQBmAlBsgIQAJAqAIAhIgDABQgrAKgnAAIAAAAIAAAAg");
	this.shape_27.setTransform(3.5,66.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("ABxDOQAMgQAEgKQAIgPABgNQABgNgFgPIAegSIgeASIgDgJIgSgkQgKgSgKgUIAkgQIgkAQQgPgigMgmQgGgTgGgXIAkgMIgkAMQgJgigJgqQhsAIhmglQACgrAIgrIDiAEQAEBgAYBPIAGAWQAMAmAVAyQAOAiASAoIADAHQALAbAAAOQAAALgEANIgKAXQgPAfgOATQgTAKgYAGIgXAFQAVgVAagmg");
	this.shape_28.setTransform(5.5,62.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4C4C4C").s().p("AAcDKIAJgWQAFgOAAgKQgBgPgKgbIAhgZQAeB2heAuQAMgUAQgfgAAcBrQgSgogNgiIAngXIgnAXQgVgxgMgnIgGgWQAegKAegPQgeAPgeAKQgYhPgEhgIBoACQgUBJAEBLQACA4AQA4QALAnAQAoIABAAIghAZIgDgHg");
	this.shape_29.setTransform(18.8,61.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	// Layer_11
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1,3,true).p("AItDZQARgVAHgMQAFgaAEgWQABgHABgGQAEgfAAgYQgBg6gLg1QgGgjgLghQgqh0hThYQhVhYh1ghQhzgih6AOQhnAHhUAZQhVAYhmBKQgTAPgQASQhKBQgtBiQg0BygMB9QgCAXgDAYQgBAaAAAaQALAHALAIAItDZQgYAfgdAcQgQAQgSAQQgUAQgVANQgXAQgZAOQgnAXgvAQQghAKgiAHQgcAHgcAEQgpADgpgBQghgBgigBQgsgFgtgFQgsgIgrgHQgrgLgpgMQgpgLgogPQgkgMgigOQgigPgggQQgfgPgegRQgdgQgdgRAItDZQABAFgDARQgEARgVAfQgVAehHAyQhIAyh/AdQh+AciygYQizgZiGg/QiHg+gZgQQgYgQgLge");
	this.shape_30.setTransform(6.7,110.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("Ag5BvQizgZiGg/QiHg9gZgQQgYgQgLgeIA6AhQAeARAfAPQAgAQAiAPQAiANAkAMQAoAPApALQApAMArALIBXAPIBZAKIBDACQApABApgDQAcgEAcgHQAigHAhgKQAvgQAngXQAZgOAXgPQAVgNAUgQQASgQAQgQQAdgcAYgfQABAFgDARQgEARgVAfQgVAehHAxQhIAyh/AdQhDAPhSAAQhIAAhTgLg");
	this.shape_31.setTransform(5.9,144.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AHJCFQgLgigOgcQgYgygjgkQgogqhOA7QhPA7hQCWQgKgcBEhmQBEhlA5gVQA5gVgQgyQgQgyhbgzQhbgzh2gJQh1gKhsAWQhfAVhnAyQgfAPghASQBmhKBVgYQBUgZBogHQB5gOBzAiQB1AhBVBYQBTBYAqBzQALAhAGAjQALA2ABA6QAAAYgEAfQAAhVgXhKg");
	this.shape_32.setTransform(17.9,93.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2875A9").s().p("ABcG0IhDgCIhZgJIhXgQQgrgKgpgMQgpgMgogOQgkgMgigPQgigOgggQQgfgPgegRIg6giIgWgPQAAgaABgaQA7AzB3A6QB4A6CuAaQCsAZAwgQQAogOASgJIAGgDIAFgCQANgGASgjQARgjBDhvQBChvBHg+QBHg/A2gTQAOAdALAhQAXBKAABVIgCAMIgJAwQgHANgRAUQgYAggdAbQgQARgSAPQgUAQgVAOQgXAPgZAOQgnAXgvAQQghALgiAHQgcAGgcAEQgdADgcAAIgZgBgAjGhjQhzgZgMgsQgPgqAzhEQAyhEBUgqQBUgrBjgEQBkgFBBAaIAIAEQAbAOASAPQAWASAMAaQAMAbgFAZQgGAegdAcQgSAQgnAeQgjAegaAnQgrAkhXABIgJAAQhUAAhtgYg");
	this.shape_33.setTransform(6.5,110.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3399DB").s().p("AhhGNQiugah3g6Qh3g6g8gzIAGgvQAMh9A0hxQAshjBKhPQARgSASgPQAhgTAfgPQBogxBfgVQBrgXB2AKQB1AKBbAzQBbAzARAyQAQAxg6AVQg5AVhEBmQhEBlALAdQBPiVBPg8QBOg8AoAqQAkAmAYAxQg3AThHA+QhGA/hDBvQhCBvgSAjQgSAjgMAGIgGACIgGADQgSAJgnAOQgTAHglAAQg7AAhqgQgAA0mSQhjAEhUArQhUAqgzBEQgzBEAPAqQAMAsB0AZQBzAaBWgCQBXgBArgkQAagnAkgeQAngeARgQQAegcAGgeQAFgZgNgbQgLgagWgSQgSgPgcgOIgIgEQg2gVhPAAIgfAAg");
	this.shape_34.setTransform(4.1,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(1));

	// Layer 5
	this.instance_5 = new lib.db_handR("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-93.3,-91.7,1,1,0,170.2,-9.8,-0.1,-18.8);

	this.instance_6 = new lib.db_armR("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-22.5,-21.5,1,1,96,0,0,22.8,-28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Layer 2
	this.instance_7 = new lib.db_shadow("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(9.5,210.5,1,1,1);
	this.instance_7.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-190.6,256.7,517.4);


(lib.DigiBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_12
	this.instance = new lib.db_atL("single",0);
	this.instance.parent = this;
	this.instance.setTransform(62,-121.4);

	this.instance_1 = new lib.db_headlight("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.7,-155.7);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.4,-109.1);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},9).to({state:[]},1).wait(1));

	// Layer 5
	this.instance_3 = new lib.db_headf("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.1,-92.2);

	this.instance_4 = new lib.db_mon("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.8,-99);

	this.instance_5 = new lib.db_face("single",2);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-8.8,-99);

	this.instance_6 = new lib.db_atR("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-54,-120.3);

	this.instance_7 = new lib.db_neck("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-12.1,-46.4,1,1.021,0,11.7,0);

	this.instance_8 = new lib.db_handL("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(79.7,28,1,1,-23.7,0,0,0,-18.5);

	this.instance_9 = new lib.db_armL("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(57.2,2.6,1,1,-7.4);

	this.instance_10 = new lib.db_body("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-11.4,1);

	this.instance_11 = new lib.db_j("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-5.8,64.4);

	this.instance_12 = new lib.db_b("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2.6,107.4);

	this.instance_13 = new lib.db_handR("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-113.5,-0.3,1,1,17.5,0,0,-0.1,-19);

	this.instance_14 = new lib.db_armR("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-60,-40.2,1,1,17.5,0,0,22.9,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},9).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_15 = new lib.db_shadow("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.7,207.3);
	this.instance_15.alpha = 0.5;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(9).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125.7,-164.2,221.5,487.7);


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


(lib.tEn3 = function(mode,startPosition,loop) {
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

	// mcCont
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(392.2,83.5,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Good job! Now let’s \nget Voldor!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 242;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(254.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("A0YKcIAAsRIS4AAIJZoZIlbIVIR7AEIAAMR");
	this.shape.setTransform(256.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("A0YAAMAoxAAA");
	this.shape_1.setTransform(256.1,79.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A0YKVIAAsQIS4AAIJZoaIlbIVIR7AFIAAMQg");
	this.shape_2.setTransform(256.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn3, new cjs.Rectangle(123.6,-54.4,293.5,161.4), null);


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

	// mcCont
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(581.5,534.3,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.myTxt2 = new cjs.Text("Our spaceship will need extra energy to bring \nus through the turbulent skies in that planet.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 532;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(296.9,463.4);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AuMhvIgCAFEgoyAKkIAAsTIIsAAIFEAAIpvopIOfIpIIGAAMA2/AAAIAAMT");
	this.shape.setTransform(296.8,464.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("EAozAAAMhRlAAA");
	this.shape_1.setTransform(296.8,532.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AikFgIAAiXICZCXgACgDJIpvooIOfIog");
	this.shape_2.setTransform(107.7,433.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EgoyAGKIAAsTIIsAAIAACXICZAAIiZiXIFEAAIEwAAIIGAAIgBAFIABgFMA2/AAAIAAMTg");
	this.shape_3.setTransform(296.8,492.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.myTxt1 = new cjs.Text("That’s it! That’s Voldor’s hideout.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 404;
	this.myTxt1.alpha = 0.99607843;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(95.7,19.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("A+2DxIAAncMA9tAAAIAAHc");
	this.shape_4.setTransform(95.8,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("Ae3joIsGAAIKFG9IxSm9MgqaAAA");
	this.shape_5.setTransform(95.8,83.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("ALkAPMgqaAAAIAAnbMA9tAAAIAAHbIsGAAIKFG+g");
	this.shape_6.setTransform(95.8,58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.1,11.2,407.6,97.3);


(lib.tBm3 = function(mode,startPosition,loop) {
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

	// Layer 4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(392.2,83.5,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Bagus! Ayuh kita pergi\ndapatkan Voldor!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 242;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(254.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("A0YKcIAAsRIS4AAIJZoZIlbIVIR7AEIAAMR");
	this.shape.setTransform(256.1,12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("A0YAAMAoxAAA");
	this.shape_1.setTransform(256.1,79.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A0YKVIAAsQIS4AAIJZoaIlbIVIR7AFIAAMQg");
	this.shape_2.setTransform(256.1,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm3, new cjs.Rectangle(123.6,-54.4,293.5,161.4), null);


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

	// Layer 4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(565.4,530.3,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.myTxt2 = new cjs.Text("Kapal angkasa kita memerlukan tenaga tambahan\nuntuk mengharungi cuaca buruk di planet itu.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 582;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(280,462.9);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("Ar8hvIgBAFEgrOAKkIAAsTINYAAICUAAIm/opIOgIpIIFAAMA3LAAAIAAMT");
	this.shape.setTransform(282.3,464.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("EArPAAAMhWdAAA");
	this.shape_1.setTransform(282.3,532.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AikFgIAAiXICZCXgAgQDJIm/ooIOfIog");
	this.shape_2.setTransform(107.7,433.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("EgrNAGKIAAsTINYAAIAACXICZAAIiZiXICTAAIHhAAIIFAAIgBAFIABgFMA3LAAAIAAMTg");
	this.shape_3.setTransform(282.3,492.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_5
	this.myTxt1 = new cjs.Text("Itu dia! Itulah tempat persembunyian Voldor.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 483;
	this.myTxt1.alpha = 0.99607843;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(98.5,19.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("EglkADxIAAncMBLJAAAIAAHc");
	this.shape_4.setTransform(98.8,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("EAllgDoIzSAAIKFG9IxSm9MgwqAAA");
	this.shape_5.setTransform(98.8,83.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("ALGAPMgwqAAAIAAnbMBLJAAAIAAHbIzSAAIKFG+g");
	this.shape_6.setTransform(98.8,58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-144.9,11.2,487,97.3);


(lib.starzRandom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.gs_motion();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.2,0.2,-90,0,0,0,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:0.5,scaleY:0.5,rotation:0,alpha:1},18).to({regY:0.1,rotation:90,alpha:0},15).wait(1));

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
	this.instance.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-88.1,293.5,161.4);


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
	this.instance.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-272.8,-22,487,96.8);


// stage content:
(lib.outro12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:1,a2:149,a3:221});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;
	}
	this.frame_1 = function() {
		var _this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a2");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_4 = function() {
		playSound("intro");
	}
	this.frame_60 = function() {
		playSound("digitalBleep");
	}
	this.frame_139 = function() {
		this.stop();
	}
	this.frame_220 = function() {
		var _this = this;
		this.stop();
		function doPlay1(e){
			_this.btnClick1.removeEventListener("click", doPlay1);
			_this.play();
		}
		this.btnClick1.addEventListener("click", doPlay1);
	}
	this.frame_221 = function() {
		var _this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_271 = function() {
		playSound("questionComplete");
	}
	this.frame_376 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(56).call(this.frame_60).wait(79).call(this.frame_139).wait(81).call(this.frame_220).wait(1).call(this.frame_221).wait(50).call(this.frame_271).wait(105).call(this.frame_376).wait(1));

	// glitter
	this.instance = new lib.hlBlinkStars();
	this.instance.parent = this;
	this.instance.setTransform(42.7,264.4,1,1,0,0,0,0.1,-2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220).to({_off:false},0).to({_off:true},1).wait(156));

	// btn
	this.btnClick1 = new lib.Symbol5();
	this.btnClick1.name = "btnClick1";
	this.btnClick1.parent = this;
	this.btnClick1.setTransform(47.2,274.5);
	this.btnClick1._off = true;
	new cjs.ButtonHelper(this.btnClick1, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnClick1).wait(220).to({_off:false},0).to({_off:true},1).wait(156));

	// t
	this.instance_1 = new lib.dialogue1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(314.3,65.4);

	this.instance_2 = new lib.dialogue2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(234.6,43.4);

	this.instance_3 = new lib.dialogue3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(428.9,520.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},94).to({state:[]},55).to({state:[{t:this.instance_2}]},15).to({state:[]},57).to({state:[{t:this.instance_3}]},132).wait(24));

	// inventory
	this.instance_4 = new lib.inventory("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.1,264.3,1,1,0,0,0,1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(149).to({_off:false},0).wait(72).to({startPosition:119},0).wait(47).to({startPosition:185},0).to({_off:true},21).wait(88));

	// laptop/smog
	this.instance_5 = new lib.laptop2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(209.6,495.9,1,1,0,0,0,111.8,95.6);

	this.instance_6 = new lib.smog();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-28,488.5,2.866,2.866,0,0,0,305.3,165.8);
	this.instance_6.alpha = 0.301;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},94).to({state:[{t:this.instance_6}]},55).to({state:[{t:this.instance_6}]},50).to({state:[{t:this.instance_6}]},21).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({_off:false},0).wait(55).to({regX:305.4,scaleX:1,scaleY:1,rotation:180,x:378.2,y:14.4,alpha:0.602},0).wait(50).to({regX:305.3,regY:165.7,scaleX:0.83,scaleY:0.83,x:629.8,y:60.8},21).wait(157));

	// smog
	this.instance_7 = new lib.smog();
	this.instance_7.parent = this;
	this.instance_7.setTransform(613.3,462.7,1.3,1.3,0,0,0,305.4,165.8);
	this.instance_7.alpha = 0.699;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(149).to({_off:false},0).wait(50).to({regX:305.6,regY:165.9,scaleX:0.72,scaleY:0.72,x:747.7,y:466.3},21).wait(157));

	// smog
	this.instance_8 = new lib.smog();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-559.9,361.7,1,1,0,0,0,305.4,165.8);
	this.instance_8.alpha = 0.602;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(149).to({_off:false},0).wait(50).to({regX:305.3,scaleX:0.55,scaleY:0.55,x:120.3,y:392.7},21).wait(157));

	// ship
	this.instance_9 = new lib.spaceship_3qr("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-352.1,110.1,0.65,0.65,0,0,180,-0.3,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(149).to({_off:false},0).wait(50).to({startPosition:0},0).to({regX:-0.1,regY:0.1,scaleX:0.36,scaleY:0.36,x:234.6,y:254.3},21).wait(157));

	// glowShip
	this.instance_10 = new lib.glowShip("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(216.5,261);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(271).to({_off:false},0).to({alpha:1},16,cjs.Ease.cubicOut).wait(51).to({startPosition:0},0).to({alpha:0},23,cjs.Ease.cubicIn).to({_off:true},1).wait(15));

	// mdroid
	this.instance_11 = new lib.DigiBotcopy("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(169.6,613.8,1.2,1.2,0,0,180,-1.8,67.5);
	this.instance_11.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_11.cache(-121,-193,261,521);

	this.instance_12 = new lib.DigiBotcopy2("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(384.6,449.2,0.5,0.5,0,0,180,-1.9,67.4);
	this.instance_12.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_12.cache(-145,-176,258,502);

	this.instance_13 = new lib.DigiBot("single",9);
	this.instance_13.parent = this;
	this.instance_13.setTransform(384.6,449.2,0.5,0.5,0,0,180,-1.9,67.4);
	this.instance_13._off = true;
	this.instance_13.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_13.cache(-128,-166,226,492);

	this.instance_14 = new lib.DigiBotcopy3("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(639.8,440.8,0.275,0.275,0,0,0,-2,67.5);
	this.instance_14.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_14.cache(-100,-195,201,521);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},94).to({state:[{t:this.instance_12}]},55).to({state:[{t:this.instance_13}]},50).to({state:[{t:this.instance_13}]},21).to({state:[{t:this.instance_14}]},1).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(199).to({_off:false},0).to({regX:-2,regY:67.5,scaleX:0.28,scaleY:0.28,x:639.8,y:440.8},21).to({_off:true},1).wait(156));

	// TAPIR_HERO
	this.instance_15 = new lib.TAPIR_HEROcopy("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(644.3,749.3,1.2,1.2,0,0,0,-0.6,403.3);
	this.instance_15.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_15.cache(-280,-161,476,563);

	this.instance_16 = new lib.TAPIR_HEROcopy2("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(570.6,516.3,0.5,0.5,0,0,0,-0.5,403.2);
	this.instance_16.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_16.cache(-243,-352,440,754);

	this.instance_17 = new lib.TAPIR_HERO("single",26);
	this.instance_17.parent = this;
	this.instance_17.setTransform(570.6,516.3,0.5,0.5,0,0,0,-0.5,403.2);
	this.instance_17._off = true;
	this.instance_17.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_17.cache(-199,-372,399,775);

	this.instance_18 = new lib.TAPIR_HEROcopy3("single",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(742.1,477.7,0.275,0.275,0,0,0,-0.4,403.3);
	this.instance_18.filters = [new cjs.ColorFilter(0.7, 0.7, 0.7, 1, 0, 0, 0, 0)];
	this.instance_18.cache(-243,-352,440,754);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},94).to({state:[{t:this.instance_16}]},55).to({state:[{t:this.instance_17}]},50).to({state:[{t:this.instance_18}]},21).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(199).to({_off:false},0).to({_off:true,regX:-0.4,regY:403.3,scaleX:0.28,scaleY:0.28,x:742.1,y:477.7,startPosition:0},21).wait(157));

	// asap
	this.instance_19 = new lib.smog();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-470.7,107.2,1.984,1.984,0,0,0,305.3,165.8);
	this.instance_19.alpha = 0.801;

	this.instance_20 = new lib.smog();
	this.instance_20.parent = this;
	this.instance_20.setTransform(946,-124.1,1.543,1.543,0,0,180,305.2,165.8);
	this.instance_20.alpha = 0.801;

	this.instance_21 = new lib.Bitmap2();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-12,-12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19}]},94).to({state:[]},55).wait(228));

	// smog
	this.instance_22 = new lib.smog();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-188,280.5,0.9,0.9,0,0,0,305.4,165.9);
	this.instance_22.alpha = 0.801;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(149).to({_off:false},0).wait(50).to({regX:305.6,regY:166,scaleX:0.5,scaleY:0.5,x:315.9,y:276},21).wait(157));

	// building bg
	this.instance_23 = new lib.smog();
	this.instance_23.parent = this;
	this.instance_23.setTransform(476.2,204.9,0.7,0.7,0,0,0,305.4,166);
	this.instance_23.alpha = 0.801;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(149).to({_off:false},0).wait(50).to({regX:305.6,regY:166.1,scaleX:0.39,scaleY:0.39,x:699.2,y:234.5},21).wait(157));

	// BG
	this.instance_24 = new lib.bg1("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-1085.4,-2174.9,1,1,0,0,0,4931.6,3107.8);

	this.instance_25 = new lib.Symbol8("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-19.2,267.4);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24}]}).to({state:[]},94).to({state:[{t:this.instance_25}]},55).to({state:[{t:this.instance_25}]},50).to({state:[{t:this.instance_25}]},21).wait(157));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(149).to({_off:false},0).wait(50).to({startPosition:0},0).to({scaleX:0.5,scaleY:0.5,x:400,y:300},21).wait(157));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(137.5,294.1,1070.8,951.3);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#666666",
	opacity: 1.00,
	manifest: [
		{src:"images/outro12/Bitmap10.png?1527789494921", id:"Bitmap10"},
		{src:"images/outro12/Bitmap10_1.png?1527789494921", id:"Bitmap10_1"},
		{src:"images/outro12/Bitmap11.png?1527789494921", id:"Bitmap11"},
		{src:"images/outro12/Bitmap12.png?1527789494921", id:"Bitmap12"},
		{src:"images/outro12/Bitmap13.png?1527789494921", id:"Bitmap13"},
		{src:"images/outro12/Bitmap14.png?1527789494921", id:"Bitmap14"},
		{src:"images/outro12/Bitmap15.png?1527789494921", id:"Bitmap15"},
		{src:"images/outro12/Bitmap2.png?1527789494921", id:"Bitmap2"},
		{src:"images/outro12/Bitmap3.png?1527789494921", id:"Bitmap3"},
		{src:"images/outro12/Bitmap3_1.png?1527789494921", id:"Bitmap3_1"},
		{src:"images/outro12/Bitmap4.png?1527789494921", id:"Bitmap4"},
		{src:"images/outro12/Bitmap5.png?1527789494921", id:"Bitmap5"},
		{src:"images/outro12/Bitmap7.png?1527789494921", id:"Bitmap7"},
		{src:"images/outro12/Bitmap8.png?1527789494921", id:"Bitmap8"},
		{src:"images/outro12/Bitmap9.png?1527789494921", id:"Bitmap9"},
		{src:"sounds/digitalBleep.mp3?1527789494921", id:"digitalBleep"},
		{src:"sounds/intro.mp3?1527789494921", id:"intro"},
		{src:"sounds/questionComplete.mp3?1527789494921", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1527789494921", id:"stdClick"}
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