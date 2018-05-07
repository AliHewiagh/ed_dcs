(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1063,621);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,522);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,206);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,279,241);


(lib.Bitmap7copy = function() {
	this.initialize(img.Bitmap7copy);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


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
			  //_this.parent.parent.play();
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.myTxt = new cjs.Text("I think we can try using something that \nwe’ve collected previously.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 464;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-170,-22);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("EgjygC/MAqjAAAIHNFgIkWlgIaLAA");
	this.shape.setTransform(-168.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(1,1,1).p("EgjyAGHIAAsNMBHlAAAIAAMN");
	this.shape_1.setTransform(-168.2,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AGxDWMgqjAAAIAAsNMBHlAAAIAAMNI6MAAIEXFhg");
	this.shape_2.setTransform(-168.2,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn3, new cjs.Rectangle(-404,-31,468.1,119.6), null);


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
	this.myTxt = new cjs.Text("Saya rasa kita boleh menggunakan sesuatu\n yang telah kita perolehi.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 464;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-170,-22);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("EgjygC/MAqjAAAIHNFgIkWlgIaLAA");
	this.shape.setTransform(-168.2,67.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(1,1,1).p("EgjyAGHIAAsNMBHlAAAIAAMN");
	this.shape_1.setTransform(-168.2,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AGxDWMgqjAAAIAAsNMBHlAAAIAAMNI6MAAIEXFhg");
	this.shape_2.setTransform(-168.2,26.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm3, new cjs.Rectangle(-404,-31,468.1,119.6), null);


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
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIkAAQgXARgZAOAKDhQQgHAGgGAGQgnAmgrAeQAMADAKAFQAfARgBAmQAAAKgBAJIhAA8QgYA+h6AUQAPgkgKAAQgHgBg4AGQgfADgtAEQiBAMjHgQQgOAagKAJQgFAEgEADQgGAEgFABQgCAAgBAAQhUgMg5gOQg5gNgNgWQgYAGhAgvIgBAAAkgApQgBgBAAgBIAIgDQBLgEBGgDQAYAAAYgBQDigICmADQAZAAAXABQBAABA1AEQAQABAPABAIXCOQABgKABgMQACgbgEgMQgFgWgWgVQgDgDgFgEAKcAGQgVAbgaAcQgCACgCACIgSARALVhNQAJgRAJgRQAWg5gfgKQgEgBgEgBQgIALgIALQADADADADQAGAJAFANQADAJAAAMQAAAOgFASQgYAqghApAKDhQQAGACAGAHQADADADAFQAIAMAEATQADATgIATALGieQgeAoglAmAoRhFQgHAFgHAHQgCACgBABQgKALgHAOQgLAVgDAVAqRi4QA4A9A4AqQAIAGAIAGAluAZQgTgIgYgMQgygXhGgzAluAZQgKADgIAGQgHAFgHAHQgGAHgEAJQgPAbgCAYQgBAXAGAFQgXgRgWgSQgggZgggbQgZgWgXgTAkgApQACALABAKQACATgDARQgGAtgkAkQgBACgCABAkgApQgOAAgagEQgPgDgXgJAqRi4QgFgGgGgGIgKgLQgPgRgNgSQgHgCgNAFQgGADgGAHQgGAHgEAKQgHAMAKAaQAHAQAOAVQAGALANAPAqRi4QgBABAAAAQgLAIgJAKQgGAIgGAJQgLASgEATQAnAuBZBO");
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
	this.shape_10.graphics.f("#272727").s().p("ACAB9QAIgGAKgDQAXAJAPADQAZAEAOAAIAEAVQgygKgxgSgACAB9QhSgghPg5IADgDQAHgHAHgFQBFAzAyAYQAYAMATAIQgKADgIAGIAAAAgAghAkQhDguhBhAQAJgKAKgIIABgBQA5A9A4ApIAQAMQgHAFgHAHIgDADIAAAAgAilhKQgegegfgiQAGgHAHgDQANgFAHACQAMASAQARIAKALIAKAMIgBABQgKAIgJAKIAAAAg");
	this.shape_10.setTransform(-74.2,61.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("ABjCkIgBAAQgFgEAAgRIAAgHQACgYAPgaQAEgJAGgHQAGgHAIgGQgIAGgGAHQgGAHgEAJQgPAagCAYIAAAHQAAARAFAEQgXgQgWgSIg/g1IgwgpQADgWALgUQAGgNALgLQBPA4BSAfQAxATAyAKQABASgCARQgGAugkAkIgDACIgGABQgaAAg4gqgAi6hXQAEgUALgSQAGgJAGgHQBBBABDAvQgLALgGANQgLAUgDAWQhZhOgngtgAgbgeIAAAAgAjNhyQgOgVgHgQQgKgZAHgMQAEgLAGgGQAeAiAeAeQgGAHgGAJQgLASgEAUQgNgQgGgLgAifiNIAAAAg");
	this.shape_11.setTransform(-74.9,68.4);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape_20.graphics.f("#FFFFFF").s().p("ABTAvQgxgqjLikQBrA5BEAwQEBCniRAvQAOhHgxgqg");
	this.shape_20.setTransform(170.2,1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1,3,true).p("AnMlgIAAAHQggB9gGBSQgHBSABBRQAlAuBFAZQBlAbAvAPQApAMBOAmQBRAmApAOQByAlCZgaQA6gKAxgQQBCgWAzghQAMgIALgIAH5CLQgDhCgcgkQgcglhAgxQg/gxh1hHQhvhDhShOAH5CLQAAAIAAAHQAAAAABAAQgBgIAAgHgAn4AZQAIA6AOBDQAoAkBBAUQBrAVAzASQAeAKAvAZQA9AhBZAYQAZAIA1AGQA1AGB9gRQA1gIAygSQA+gXA6gpQAGgEAGgEQAJgVgDhD");
	this.shape_21.setTransform(140.6,5.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("Ag9gQQBBgWAzghQALAqgGAmQg6Aog9AXQAFgygHgmg");
	this.shape_22.setTransform(183.3,29.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D3D3D").s().p("AgLgfIAWgQQADBCgJAVIgLAIQAGgngLgog");
	this.shape_23.setTransform(190,25.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC3D42").s().p("AC4BZQhWg1hEgmIhwhEIh7hMQhNgvgvhDQAYAEgCgEICOAmQBSBNBuBDQB2BHA+AxQBAAxAcAlQAcAlADBCIAAAPIgXAPQglh3hWg1gADZBPIgCgBQAMALgKgKg");
	this.shape_24.setTransform(158.1,-3.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A92F33").s().p("AEFDCQgcgTgNgMQgMgMg3gaIkkiOQjvh1gshmQgPgiALgSIDdAAQAvBDBNAwIB6BMIBxBDQBEAmBWA2QBWA1AlB3QgzAhhCAWQgLhAgqgfgAFTAzIACAAIAFAFIgHgFg");
	this.shape_25.setTransform(145.7,-0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7E2326").s().p("AA8EdQgpgNhPgnQhOglgpgNQgwgPhkgaQhGgZglguQAAhRAGhSQAHhSAgh+IgBgGIBVAAQgKASAOAiQAtBmDuB1IElCNQA2AaANAMQAMAMAcAUQAqAeALBAQgxAQg5AKQhAALg4AAQhRAAhEgWg");
	this.shape_26.setTransform(133.6,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABGHDQAJgUALgVQCBkBCvlGQiMCNhGAnQgUg4g9h9QgwhrhohsQgwgvgLgOQieFvh/Hc");
	this.shape_27.setTransform(133.9,-68.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DC3D42").s().p("Aj8E5IAQgxQBGjQA2iRQA3iTAThMQA8B9AUA5QBGgoCNiNQiwFGiAEBIgUApg");
	this.shape_28.setTransform(148.1,-54.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A92F33").s().p("AjaGkIAYg9IEDsKQBpBsAxBqQgUBMg3CSQg2CThFDPIgQAxg");
	this.shape_29.setTransform(122.3,-65.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7E2326").s().p("AirGJQB/ncCdlvQALAOAwAwIkDMKIgYA8g");
	this.shape_30.setTransform(111.7,-68.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AACrFIhyClQgRAjg5DIQhREcifJrQAfAuAiAbQAOALAOAHQAZARAiAFQAqAHA4gKQAQgDASgFII5wc");
	this.shape_31.setTransform(141.4,-76.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AlMJnQCgprBRkcQA4jIARgiIByimQCYAjBVCCIjAgzQhoB3gYBLIgiB6QhtF7iII3Qgigbgggug");
	this.shape_32.setTransform(131.9,-78.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#424242").s().p("Ak+J1QgOgHgNgLQCIo3Bsl7IAkh6QAYhLBnh3IDAAzIBdCWQiSgThcg5QgsCdggBdIgSAuQg1CMhIDVQhGDXhOE6QgjgGgZgRgAAolpQgHAQAQgeQgFAGgEAIg");
	this.shape_33.setTransform(139.9,-70.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#585858").s().p("AleJMQBPk6BGjXQBIjVA2iMIASguQAghdAricQBcA4CRAUIBgAlIo5QcQgSAFgQADQgiAGgcAAQgTAAgRgCgAgympQADgIAFgGIgKAUIACgGg");
	this.shape_34.setTransform(149,-64.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AqNFaINpg0AI5EBQB8kCg5h5QhxjXjvgIIufAJ");
	this.shape_35.setTransform(126.5,-136.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AokgqQIOhuDLgSQDMgTBYBYQApAqAjBRIjbBlItpAzg");
	this.shape_36.setTransform(115.4,-119.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#424242").s().p("AIcCtQgjhTgpgpQhYhYjMATQjLAToOBsIgNieQHjhcCXgSQCXgSA5gDQA6gDB4AdQB1AcADE3g");
	this.shape_37.setTransform(116.3,-134.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#585858").s().p("AHeD5QgEk3h1gcQh4gdg6ADQg5ADiWASQiXASnjBbIAckxIOfgJQDvAHBxDXQA5B5h8ECg");
	this.shape_38.setTransform(125.6,-140.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1).p("ADrREQDfgcA1kFQgPh3gxk5Qgyk6hun2AnQxDQhdEzBhFiQCcIgCDI8");
	this.shape_39.setTransform(3.3,-64.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhDM5QiDo8icogQhgliBdkyQGSCFFnDjQosgUhwgYQAbDRAXB6QAYB5AJAOQAKANAkDsQAkDrA1DQQA0DNATBaIAUCGgAjOquQABAIACgIIgBAAIgCAAg");
	this.shape_40.setTransform(-7.3,-78.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#424242").s().p("AgXL4IgUiHQgThZg1jOQg1jPgkjrQgljsgJgOQgJgOgYh5QgYh6gajQQBvAYIsATIgXCnQlqAJAHB2QAJB7AUDSQAVDPBeFtQAeB2BOFbgAkTtvIADAAIgCAEIgBgEg");
	this.shape_41.setTransform(-0.4,-59.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#585858").s().p("AgqKdQhOlbgeh1QhflsgVjRQgVjSgIh6QgIh3FqgIIAOB2QBuH3AxE5QAxE5APB3Qg0EFjgAcg");
	this.shape_42.setTransform(24.8,-38.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AE9gQQlCAwk3gW");
	this.shape_43.setTransform(37.8,-101.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("Ak4GBIgPjTQBMgBDNgKQDNgKCqgNIgHDaQjgAhjaAAQhgAAhggGgAk+AaQAAgHAFhyIADg0QABACAAgMIgDhQIAAiZQBpADDeAQQDSAPBnA0IgEEyQizgQjcAXQjdAYgOAKIgIgRg");
	this.shape_44.setTransform(37.4,-138.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#424242").s().p("Ak2AoQAOgKDdgYQDcgXCzARIAFCJQiqAOjNAJQjNAKhMABgAk4iqIACAUIgDA1g");
	this.shape_45.setTransform(37.4,-138.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhTAEQBFhqCahZQjhDLgyC0QgRhSBFhqg");
	this.shape_46.setTransform(-136.4,1.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(1,1,1,3,true).p("Aj4mWQgvgXgrgFQguAcgfA3QgdA1haBFQhYBEg7CAQgdA8gQAxQgRAvgFAkQgBADAAADQgIBBAaBnQATANAgAOQgIgMgDgNQgBgCgBgDQgUg8ANhOQAGgpAQguQAGgSAHgSQBBijCRhpQA1giAshHQAshHBCgfgAqoFoQBcA7BxhbQBxhbBUglQBUgkAXACIM5ENIiHh8Qg7g5gphPQBdhMBVhRQAIgIAIgIQBchZAvhJIsbiIQg8g6iRg0");
	this.shape_47.setTransform(-92.6,-0.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AADAxQgTgPgSgJQAFgiARgwQAVASAaALQgQAtgGApIgKgJg");
	this.shape_48.setTransform(-164,12.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2A2A2A").s().p("AgPBJQgahmAIhBIACgGQASAJASAPIAKAJQgMBNATA8IACAGQAEANAIAMQgggPgTgNg");
	this.shape_49.setTransform(-164.2,25.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E2326").s().p("AiRhTQgXgChUAlQhUAkhxBaQhxBchcg7QgIgMgDgNIgCgGQgUg8ANhNQBZBlBUgxQBUgyBygyICvhPQFoCmE5BPICHB9g");
	this.shape_50.setTransform(-95.2,24.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A92F33").s().p("AhmgYIivBOQhyAzhUAyQhTAyhahmQAHgpAPguQAZALAbAEQA9ALBngzIA9ggQA6geEBiQQAGgEgcABQAygEAMACQCRAoDJAuQDKAuBfASQhVBQhdBMQApBPA7A5Qk4hRlpilg");
	this.shape_51.setTransform(-97.8,8.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DC3D42").s().p("AqWEHQgbgFgZgLIANgjQBBikCQhoQA1giAshHQAthHBBgfQCSA0A8A6IMbCIQgvBIhcBaIgRAPQhegSjKguQjKguiQgoQgMgBgzADQAdAAgHADQkBCRg6AeIg8AgQhWAqg4AAQgMAAgKgBg");
	this.shape_52.setTransform(-88.9,-15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3D3D3D").s().p("AjuDxQARgxAcg9QA7h/BYhEQBZhEAdg2QAfg2AugdQAsAFAuAXQhBAggtBGQgsBIg1AhQiQBphACjIgOAkQgZgLgXgSg");
	this.shape_53.setTransform(-141.4,-17.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("ALIjGIkyg1ItxhHIidgNQgDABgDACQgWAMgSAOQgSAQgNASQgSAagHAfQgPBHAPA4QABADAAADQARA5AQgEQIYDkFMBPQFNBODRgaIAhgE");
	this.shape_54.setTransform(-43.8,11.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#585858").s().p("ACoD2QlMhOoYjlQgQAEgRg5IgBgGQgPg4APhHQAHgfASgaQMIGlDNA3QCvAvESADIAIARIgCgRIALAAIAEBIIggAEQg0AHg7AAQi1AAj6g7gAKCBFIACABIAAAAIgCgBg");
	this.shape_55.setTransform(-43.8,14.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AKjCdQgQheANCCQn6ACmdi1Qmei1ghgFQARgOAXgMICiAKINxBHIEyA1IgMD9IgBAKIgHgqg");
	this.shape_56.setTransform(-42.2,-1.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#424242").s().p("AK/EfQkSgDivgvQjNg3sImlQANgSATgQQAgAFGeC2QGeC0H6gCQgNiBAQBdIAHAqIAAgKIAvDSIgIgLIgLAAIACARgAJyCGIABABIgBgBIgBAAIABAAgAqPkrIAFgDICdANIiigKg");
	this.shape_57.setTransform(-42,8.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("Ahrq8QjyJdieJUIgTB5AAIK9IIHvv");
	this.shape_58.setTransform(-12.6,-73.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AizLVQg6iJgZABIATh4QCepUDxpdIBrgDQgRBTgSAwIAAABQgoBngqBwQhzEvg1DOQg3DMgIAkQhCDkAGARQAGARgQBxg");
	this.shape_59.setTransform(-39,-70.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#424242").s().p("AldJeQgGgRBCjkQAJgkA2jMQA3jOBzkvQAphwAnhnIABgBQARgwARhTIDLA5IBiAIQhtCSgDAHQg7BthXC1QhSCqiGFdQheDygSDJIiFABQAQhxgGgRg");
	this.shape_60.setTransform(-18.7,-70.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#585858").s().p("AknEEQCHldBSiqQBWi1A7htQAEgHBsiSIA8CGIAgAoQBrCHAdAXIoGPvIknBCQASjJBdjyg");
	this.shape_61.setTransform(-0.6,-67.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABZAvQg1gqjZilQBvA6BJAxQEQCmiNAwQAIhIg1gqg");
	this.shape_62.setTransform(148.1,155.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH/CUQgJhCgfglQgfglhEgwQhEgyh7hHQh8hHiDh9QgBgCAAgBAn8AiQANA5AVBEQArAkBDATQBsAWA1ARQAfALAxAZQBAAgBbAZQAaAHA1AHQA2AGB7gSQA1gHAwgTQA8gXA2goQAGgEAGgFQAHgUgJhDAn8AiQApAuBIAZQBnAaAxAPQAqANBRAlQBUAnApANQB3AlCXgaQA4gKAwgQQBAgVAwgiQALgHALgIAH/CUQABAHABAIQAAgBABAAQgCgHgBgHgAnxlSIAAABQgUB+AABSQABBSAIBR");
	this.shape_63.setTransform(119.7,158.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#2A2A2A").s().p("ACrCiQg2gGgagIQhbgYg/ghQgxgZgfgKQg1gShsgVQhDgTgrgkQgVhDgNg6QApAuBHAZQBoAbAwAPQArAMBRAmQBTAlAqAOQB3AlCWgaQA5gKAwgQQAKAmAAAzQgwASg1AIQhcANg1AAQgSAAgOgCg");
	this.shape_64.setTransform(113.7,178.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7E2326").s().p("ABLEdQgqgOhTgmQhSgmgqgMQgxgPhngbQhHgZgpguQgIhRgBhSQgBhSAVh9IAAgBIBIgEIAGAhQBEB3D5B1IExCOQA5AaAOAMQANAMAeATQAtAfAQBAQgvAQg5AKQg+AKg5AAQhQAAhGgVg");
	this.shape_65.setTransform(112.7,154.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A92F33").s().p("AEcDIQgdgTgOgNQgNgMg5gZIkyiOQj4h1hFh3IgFgiID3gMIAKARQBBA5A/AyQBAAxAuAcIB3BEQBIAmBbA2QBaA0AwB3QgwAihAAVQgRhAgtgegAFeA5IACAAIAFAFIgHgFg");
	this.shape_66.setTransform(123,152.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DC3D42").s().p("AC5BiQhbg2hHgnIh2hCQgwgdg/gxQhAgxhAg6IgKgRIBmgGIAAADQCFB+B6BHQB8BGBDAxQBEAyAgAlQAfAkAJBCIABAPIgVAQQgwh3hbg1gADaBXIgDAAQANAKgKgKg");
	this.shape_67.setTransform(136.4,149.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3D3D3D").s().p("AgMggIAUgPQAJBCgHAUIgKAJQACgngOgpg");
	this.shape_68.setTransform(170.1,179.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("Ag9gQQA+gVAxgiQAPAqgDAlQg2Apg7AXQAAgzgKglg");
	this.shape_69.setTransform(163.8,183.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlhJRQAAgEABgDIBvyaIA4DcQAbBhA4BQQBvhhBwhVQALgIALgIQB8hcBYglIjdRG");
	this.shape_70.setTransform(-46.6,69.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#A92F33").s().p("Ah4nhQAbBhA4BRQBuhiBxhUQgZCDgtEaQgtEYgbDMQgDAPgdA1IgLAAIAEAAIhMAEIAGABIh4ABQAEoRA9m2g");
	this.shape_71.setTransform(-53,80.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7E2326").s().p("AhUJQIACgHIBuyaIA4DcQg8G0gEISIgVABQgrAAgogCg");
	this.shape_72.setTransform(-73.6,69.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DC3D42").s().p("AiqHnQAajLAtkaQAukZAYiDIAWgQQB7hcBXglIjbRGIABABQhTAIhoAIQAdg2ADgPg");
	this.shape_73.setTransform(-31.5,72.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Aj7BqQC+gGE5jkQiqCtiHA3QhIAdgzAAQguAAgdgXg");
	this.shape_74.setTransform(-84.3,169);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#0000FF").ss(1,1,1,3,true).p("Ag+ADQAAAAABAAAAzgBQAGgBAGAA");
	this.shape_75.setTransform(-57,128.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(1,1,1,3,true).p("AnfDmQABiMCUh2QCTh3BShjQBLhZAQgiAHKhSQgHBFgUA6Qg1AzhCAWQhCAVhxBfQhxBeiUAkQhGAQg2AGQg0AGgjgFQgDAAgDgBQg+gLhNhEQAAgeAFgvQAGAOAKAJQABACADADQApAuBOAJQAoAFAzgFQASgCAVgEQC4gfCyibQA9g7BZgiQBagiBChMgAHgmFQAQBjgmDQ");
	this.shape_76.setTransform(-80.7,165.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgrAkQACgbgCgeIgBgQQAoAFAxgFQgFAlADAjQgdADgXAAQgTAAgPgCg");
	this.shape_77.setTransform(-110.3,200.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3D3D3D").s().p("AlgChIAogFQC4gfCxibQA9g6BagjQBZgjBDhMQgHBFgVA7Qg1A0hCAVQhBAVhyBeQhwBfiUAjQhHARg1AGQgDgkAFgmg");
	this.shape_78.setTransform(-70.5,180.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DC3D42").s().p("AleEVQAahTBrh3IA/hFQA7g/EKkWIAMAAIgMAAIAPgPQAFgFgIAUIgHAPIAHgPQBXgGBdgJQAQBjgmDQQhDBLhZAjQhaAig9A7QixCbi4AfIgoAGQAFgkAMgng");
	this.shape_79.setTransform(-69,161.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A92F33").s().p("Ak6FXQgniYBdheQBeheBwiEQBuiFA+hHIABgFIBRgBIgCAGIADgGQA3gBA6gEQkLEWg6BAIg/BEQhrB3gaBTQgMAngFAkQgaACgYAAQgVAAgTgCgAFGlYIAAAAIgHAPIAHgPg");
	this.shape_80.setTransform(-83.3,162.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2A2A2A").s().p("ABCBOQg+gLhMhDQAAgfAFgvQAGAPAKAJIAEAEQApAuBNAJIACAPQABAggCAbIgGgBg");
	this.shape_81.setTransform(-121.9,196.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7E2326").s().p("Ak1EgIgFgEQgJgJgGgPQABiMCTh3QCUh2BRhiQBKhaARgiQAyACA2AAIgBAEQg9BHhwCGQhuCEhfBeQhdBdAnCZQhOgKgpgugAFElSIABAAIgBAAQACgHAEADQgDABgCADIgDAGIACgGg");
	this.shape_82.setTransform(-95.7,162.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("AjtrWIgnFBIgUKfIgLFxQAdAwAmAXQAbAPAgAEQBIAIA2gVQADgBADAAQA3gXgEgPIEhyAQAXiAgIho");
	this.shape_83.setTransform(-41,58.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#585858").s().p("AjXLNQgggDgagQQCcuNAji2QAfigAVg1IASAAIgGgBIAtgFIACADIAAgDQCPgUBJg+QANgLAOgOQAIBogWCAIkhSAQAFAPg4AXIgGACQgoAPgwAAQgTAAgUgDgAA7pXIAMgSQgIALAAgCIgEAJg");
	this.shape_84.setTransform(-37.6,58.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#424242").s().p("AjNJXIALlxQBPoiAThkQAShYA6ilQA4AhA4ABIAMAAQgVA2gfCgQgjC1ibOOQgngXgcgwgADGp8QAAACAIgMIgMASIAEgIgACiqAIACgBIAAADIgCgCg");
	this.shape_85.setTransform(-51.1,61.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AhCivIAmlBQA5A+A6AgQg5ClgTBYQgRBjhQIjg");
	this.shape_86.setTransform(-61.9,35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("AKaA1IgOkGIACi9Qg/AUg/ARQgjAJgiAJQgYAFgWAFQmKBVmDgvQgCAAgCAAQhqgNhqgXQgYB6g5DRAgzGPIAXgHQBagJBSggQAtgRApgXIAJgFAgxGJQgBADgBADIgCAA");
	this.shape_87.setTransform(41,-137.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#585858").s().p("AoNCBQBliGAxhLIA1gCQCRgGC+guQDAgvEzh6IAOEGImrD9IgJAEQgpAXgtARQhRAghbAJIgXAHIACgFIgCAFIgCAAg");
	this.shape_88.setTransform(55,-128.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#424242").s().p("AptCrQA3irANhAQCRADCGgRQCIgRDDguQDIgvCqhEIBFgRQA/gRA/gUIgBC9Qk0B6jAAuQi+AviQAFIg1ADQgxBKhmCHgAn5hKIADABIgEADIABgEg");
	this.shape_89.setTransform(44.2,-146.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AoxCCQA4jQAZh6QBpAXBqAMIAFABQGDAvGKhVIAugLQirBEjIAvQjDAuiIARQiFARiRgDQgNA/g4CsgAlvgeIgCgBQgDAHAFgGg");
	this.shape_90.setTransform(30.6,-150.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,1,1).p("AGoMfQAdh9gBhRIkw1vAnDm+IFgRnIAAAC");
	this.shape_91.setTransform(92.2,-65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AEfKyQh0gehvg9IgBgDIlfxmQBJhEA4geQA5gfA+gfQg1CvgiAvQgkAvAIAUQBvGmBaDuQBbDuApA9IB3CFg");
	this.shape_92.setTransform(76.3,-56.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#424242").s().p("AETLWQhSgEhPgUIAGAAIh3iFQgog9hbjtQhbjvhvmlQgIgVAkgvQAigvA1iuIBYgyQhHCfACgCIgSESQBtE1CkF4QBvD8CnBZQgegBgegCg");
	this.shape_93.setTransform(93.6,-57.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#585858").s().p("Ag1HLQill3htk1IASkSQgCABBHieIEHiPIEwVvQABBRgdB9QglACgmAAQinhYhuj9g");
	this.shape_94.setTransform(104.7,-64.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABxI+QAMhFA0kOQA1kVBQliQhgClg6A0Qgig0hdhvQhMhgiChWQg7gmgPgLIg6Qn");
	this.shape_95.setTransform(101,76.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#7E2326").s().p("AhBINIA6wnQAPALA6AmIglMtQgOCAgIBXg");
	this.shape_96.setTransform(76.6,72.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DC3D42").s().p("AiLHRIgKggQgPgtAKjYQAKjYAMiaQAMibgBhOQBdBvAhA0QA6g0BgikQhQFig1EUQgzEOgMBFg");
	this.shape_97.setTransform(116.1,84.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#A92F33").s().p("AiEHpQAIhXAOiAIAlssQCBBVBNBgQABBOgMCbQgMCZgKDZQgKDYAPAtIAKAgg");
	this.shape_98.setTransform(90.6,77.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("Ai4rPIhHCyQgUBZgHQ9QApAoApAVQAPAJAQAFQAcAMAjAAQAqABA0gTQAOgGAQgHIEIxrQAAAAABgB");
	this.shape_99.setTransform(107,57.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AiPKGQAHw9AVhZIBGiyQBWBbBmBBIh0g1QhICFgEBPQgUGjAJKnQgpgVgqgog");
	this.shape_100.setTransform(93.1,56.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#424242").s().p("AiuKRQgQgGgPgIQgIqnATmkQAFhPBJiFIB0A1QBEAsBOAfIA6AWIAEAFQiSADhmgpQgGDNgNBlQgTCTgRDeQgQDfAAFCQgjAAgcgMgAhEl6QgCASAIghQgEAGgCAJg");
	this.shape_101.setTransform(107.5,62.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#585858").s().p("AjCJiQAAlCAQjfQARjeATiSQANhlAGjOQBnApCRgDIgEgEQAlAMAlALIgBABIkHRrIgfANQgyATgqAAIgCgBgAiXm1QACgIAEgHQgFAWgBAAIAAgHg");
	this.shape_102.setTransform(115.8,68.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:64.2,y:178.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_4,p:{x:133.8,y:24.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.6,-205.6,245.2,411.4);


(lib.T_hand_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADokjQAKBXALBqQANB8gJAcQgKAcgeBBQgfBAgWAeQhdAlhTANQgFAAgDABQgDAAgKgBQgLgCgHgGQgIgHgBAAQgBgBgBgBABWBrQACgJAGgTQAHgVARgSQARgTAGgJQAOgUAJgdQABgDABgEQAEgMAEgRQAAgEABgDAhejKQAIBOBAAlQALAIAMAGQACApgLAhQgMAigDAgQgDAgAPAiQAHAHAIAGQAIAFAKAEQABAAABAAQALADAKABQABAAACAAQAEAAAEAAQAPgCAFgKQABgCABgDQADgKACgIQACgHABgFQAAgCAAgBQAAgBAAgBACQAlQgXAggNAPQgLANgLAKAi+DcQhHgEABgyQABgyAUgNQAUgMAbACQAaABAyAFQAxAFAKgCQACg5gTg0Qgjg3gKgjQgKgkgCgmQgDgnAMguQgBgDAAgDAgLCFQgRACgSAAQgSAAgVAAQgUgBgMABQgMABgRADQgSADgKAMQgKAMgEAOQgDAOAAALQAAALABAEQAJA2A2ABQAJAAAJAAIAvgBAAWCbQgdADgXABQgWACgIAEQgJADgIAOQgIANAAAQQgBARAEAQQADAQARAO");
	this.shape.setTransform(1.6,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7E2326").s().p("ABIEYQgLgBgHgHIgJgGIgCgCQgRgPgDgQQgDgOAAgOIAAgEQAAgRAIgNQAIgNAJgEQAIgEAWgBIA1gFQgKgDgIgGQgJgGgHgGIgjACIgngBQgUgBgLABIgdAEQgSADgKANQgKAMgEAOQgDAMAAAKIAAADIABAPQhHgFABgyQABgyAUgMQAUgNAbACQAaACAyAFQAwAEAKgCQACg4gTg1Qgig2gKgkQgKgkgCgmQgDgmAMgvIgBgGIBXgHIABAMQgJB/BVA7QgIAOgWBhQgSBIA0AwQgKgBgLgDIgCgBIACABQALADAKABIADAAIABAAQhCALgNA5QgNA5AeAGIgIABIgCAAIgLgBgABeB7QgNgdAAgbIABgKQADghAMghQAKgdAAgjIAAgLQgNgGgLgHQhAgmgIhNQAIBNBAAmQALAHANAGIAAALQAAAjgKAdQgMAhgDAhIgBAKQAAAbANAdgAgVEIQg2gBgJg1IgBgPIAAgDQAAgKADgMQAEgOAKgMQAKgNASgDIAdgEQALgBAUABIAnABIAjgCQAHAGAJAGQAIAGAKADIg1AFQgWABgIAEQgJAEgIANQgIANAAARIAAAEQAAAOADAOQADAQARAPIguAAIgSAAgACACQIAAAAg");
	this.shape_1.setTransform(-9,34.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A92F33").s().p("AgQDaIgEAAQgzgvARhIQAWhiAJgOQhVg6AJh/IgCgNIBWgGIAAANQAAAxAXBlIAGAYQAAAHgSBRQgVBWAPBCIACAIIgIAAgAAVCrIAAgDIAAgCQABgJAHgTQAHgVAQgSQARgTAHgJQANgVAJgdIADgHQAJB6hZAuIgDABIADgMgAAqCPQgKANgLAKQALgKAKgNQANgPAXggQgXAggNAPg");
	this.shape_2.setTransform(8.1,27.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC3D42").s().p("AiODkQANg5BBgLIAAAAIAIAAIgCgJQgPhBAVhWQAThSAAgHIgGgYQgYhlAAgxIAAgNIC1gOIAWDAQANB9gKAcQgJAcgfBAQgfBAgWAfQhcAkhUANQgdgGANg5gAgdB9IgFASIgCAFQgGAKgOACQAOgCAGgKIACgFIAFgSIADgBQBYgugJh6IAHgdIABgGIgBAGIgHAdIgDAHQgJAegNATQgHAKgRASQgPASgHAVQgHATgBAJIAAACIAAAEIgDAMIAAAAg");
	this.shape_3.setTransform(12.9,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgjE7QABAIAKAFQAIADAOABQAIgBAIgDQAcgLACgmQAFhUgVhgQAiiIAVhCQAAgCABgCQABAAABAAIAAAAQAlABAVAnQAIAQAQANQAqAhAyAFQAhgDAIggQAEgRgJgTQgPggghgcQgWgSgVgUQgNgNgJgRQgJgSgIgTQgNgbgPgaQgNgVgPgVAiihOQB7glAhh6QAEgRgGgQAgogqQgQgEgogMQgYgFgigNIgBAAQgCAAgCgBQgCgBgBAAAgjE7QAKgEAHgGQANgKAFgSQgIgYgJgbQgIgagLgeQgUg6gGgfQgGgfAchcAAAgiQgDAAgDgBQgDAAgCgBQgQgDgNgDAiBDlQABAAABgBQASgGAKgQQABgDACgDQAKgVgLgaQgJgXgyhLQgHgLABhwQAAgDAAgEQAAgBAAgCIAAAAAiBDlQAgA3AJAQQAEAGABABQAIAIANACQAKACARgEAj5lEQhOE6AnBGQAOAZAOAXQAVAfAUAaQAGAHAGAHQAJAKAIAIQAaAdALADQAOADAKgD");
	this.shape_4.setTransform(13.6,37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DC3D42").s().p("AgWFqQASgfgHgZIgbhkQgVhLAGhQQACgVADgUIAGABIAFABIgFgBIgGgBIgdgHIg3gOIA3AOQgbBdAFAfQAGAfAUA7IAUA3IARA0QgGARgMALQgKgHgIgMQgMgRgJgeQgMgggMgtIgahYQgOg1AZhPQgZgGgigMIAAAAIgEgBIgEgCQB8gkAgh6QAFgRgHgRQhhA9gJgVQA3hpgKhUIAGAAQAfACAlAMIAgAPIABAAIAGADQARAJANAMIAGAFQANAMALAMIAGAHQAQAUAMAVQAQAaAMAbIASAmQAIARANAMIArAnQAhAcAQAgQAJATgFAPQgIAgggAEQgFgGgDgHIgEgWQgDgNgDgHQgFgMgLgMIgXgVQgrglgdgyIgBgDQgIAoglAsIgCAAIgBADQgVBBghCKQAVBfgFBVQgDAlgaALgAiYD5QgOgFgIgIQgMgMgHgOQgYgrgvhLQgEhFANhBQAPgJApAUIAAADIAAAHQgBBwAHAKQAyBLAKAXQALAbgLAVIgDAGIgQgEg");
	this.shape_5.setTransform(17.3,32.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A92F33").s().p("AgSF1QgKgFgBgIQAKgEAHgGQgHAGgKAEQgRAEgKgCQgNgCgIgIIgFgHIgphHIACgBQASgGAKgQIADgGQAKgVgLgaQgJgXgyhLQgHgLABhwIAAgHIAAgDIAAAAIAAAAQgpgUgQAJQgNBCAFBEQAuBLAZAsQAHAOAMAMQAIAHAOAFIAQAEQgKAQgSAGIgCABQgKADgOgDQgLgDgagdIgRgSIgMgOQgUgagVgfQgHgUgCgWQgCgYAAhJQAAhHAbg3QAag3Akh+QAXhJAVgDQATgFAdgBIAVAAQAKBVg4BoQAJAWBig9QAFAQgDARQghB6h7AlIADABIAEABIABAAQAiANAYAFQgYBPANA2IAaBYQAMAsANAhQAJAdAMARQAIAMAJAHQAMgKAFgSIgQgzIgTg4QgUg6gGgfQgGgfAchdIAdAGQgEAVgBAVQgGBPATBMIAcBkQAGAZgSAfIABAMQgIADgJABQgNgBgIgDgACuAGQgQgMgIgQQgVgnglgBIAAAAQAlgsAHgoIACADQAdAyArAmIAWAUQAMAMAFANQADAHACANIAFAVQACAIAFAGQgygGgqghg");
	this.shape_6.setTransform(13,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7E2326").s().p("AguC9QgmhHBOk5IAEgSQANgvAwAzQgjB+gaA3QgaA2AABIQgBBJADAYQACAWAHAUIgdgwg");
	this.shape_7.setTransform(-10.6,24.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAcQgGhcgqg/QABgEAKAKQBBBBgKBZQgIAygaAug");
	this.shape_8.setTransform(26.8,-22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AETC4QANAOAKAQQAEAGAEAHQAEAIAEAIIgCAHIgFAWQhcClgUABQgUADgbgCQgngCgOgIQhRAJgpgHQg3gIgcgiQgXAFgagCQgZgCgUgMQgFgCgEgDQgPgKgKgOQgHgKgGgTQgGgWgMguQgNgugGhMQgFhLALg8QghhCgXhHQgOgqAHgpQAKhDArg3QAGgGAGgFQAjgjAsgUQANgGAOgFQAlgMAmgDQAagBAaADQBCAJA9AhQA9AhAdA8QAeA8gLA3QgKA4gZAjQABAHACAMQABAIABAHQBZAdA0AgQBBAogWBNQgIAbgIARQgQAggTgEQgIgCgJgCQgUgEgWgHQgZgIgagGQgGgCgFgBQgYgIgZgHQgHgCgGgCQgDgBgDgBQgOgDgJgGQAAAAgBAAQgEgDgEgEQgCgDgCgDQgEgGgBgIQgCgbAJgVQAIgVAHgKQAEgHAGgHQAFgGAHgEQAOgIAQgBQACAAACgBQAlgBAeAJQAdAIAVALQAUAKAWAMAg3hbQAdgPBBAMQAfAFAoAMQAaAHAXAIAADAuQAIgigjgjQgkglg5gSQg5gSgbAeABtCJQASAaACAlQACASgDAUQgBAEAAAEQgEAxgRBOQgDANgDAOQgBADgBADACgDSQgHALgTASQgDADgEADIAAABABHB3QgdgMgWAAQgUABgIAGQADAWgFAdQgDAOgEAQQgUBEg3BhQgDAGgEAHQgCACgBACAgIByQgWgQgxgKQgqgEgVANQgVAOgeAnQgdAoAOA7QASALAhgwIASgfQgWgEgQgB");
	this.shape_9.setTransform(12.1,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A92F33").s().p("ABfGJIADgGQAVgiALgZIATgpQAIgQAPgUQAPgVAUgDQAQgCBBAIIAIAOIAHAQIgBAHIgegFIgagCQgOAAgLAEQgXAHgaAkIgvBGQgSAXgSARIAGgbgAhmF8QAhgkAegwQAjg3AEgKQAEgJAVgNQASgKBMAVQABASgDAUIgOgEQgagHgQADQgXAFgLAIQgKAJgQAZQgPAagrAmQgeAagXAGIAIgNgAj5FwQgGgJgGgTQAmAAAjgkQAxgyAbhJIAKgFQApgBAoAKQgCAOgFAQQg5gZgTArQgTAsgeAnQgfAogoAlQgOgKgLgPgABiCdIgGgCQgNgDgJgGQgGgeANgjQARgtAkgdIgEgBIAEgBIAKAAIAAAAIAAAAQAaAAAXAGIACABIAFABQAeAJAUALIAqAVIgqgVQgUgLgegJIgFgBIgCgBQgXgGgaAAIAAAAIAAAAIgKAAIgEABIjphFQghgJgQgHQgagMgOgSQgJgKgHgSIgMgfQgIgRgSgeIgKgRIgqhfIALgLQAkgjAsgUQANgGAOgFQAkgNAmgCQAGA6AIAxQAIAxAfBDQALA/AXAWQAaAbAMAEIANAGIAxAUQAxAUBVAqQA+AfAPAPIACACQAEAFgBADQgCANhKgQQhKgQgNAVQgNAUgFAcQgGAcADALIADAIIgOgEgAhChHIABgBIABAAQAQgIAaAAIAAAAIABAAQAUAAAaAFIAAAAIACAAIABABIgBgBIgCAAIAAAAQgagFgUAAIgBAAIAAAAQgaAAgQAIIgBAAIgBABg");
	this.shape_10.setTransform(13.1,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E2326").s().p("ACYDqIAAgBIAHgGQATgSAIgLQgIALgTASIgGgCQADgUgBgRQgDglgSgaIANAEIAxAPIALACIAzAPIArALQAMAOAKAPQhAgJgQADQgUADgPAVQgQAUgHAQIgTApQgLAZgVAiIgDAGQARhOAEgxgAAHC3QAEgQADgOQADgTAAgPIgBgRQAIgHAVAAIACAAIABAAQASAAAYAJIAAAAIADABIADACIAIAGIACABQAJAFANAEIAGACQASAaADAlQhMgWgSALQgVAMgFAKQgEAKgiA3QgfAwghAjQA3hhAThDgAjhE0IgThEQgNgugGhMQgFhLALg8QghhCgXhHQgOgqAHgpQAKhDAsg4IAqBgIAKAQQASAfAIARIALAfQAHASAJAKQAOARAbAMQAPAIAiAJIDoBFQgQACgOAIQgHAFgFAGIgKANQgHAKgIAVQgHARAAAVIAAAJQABAIAEAHIAEAGIgDgCIgDgBIAAAAQgYgJgSAAIgBAAIgCAAQgVAAgIAHIABARQAAAPgDATQgngKgpABIgLAEQgaBKgxAyQgjAkgmAAIAAAAgAivDvQAPgBAWgeIACgDIABgBIAAAAIAAgBIACgBIAAAAIAAgBIABgBIASgfQgWgEgQgBQAQABAWAEIgSAfIgBABIAAABIAAAAIgCABIAAABIAAAAIgBABIgCADQgWAegPABIgBAAIAAAAQgDAAgDgCIgBAAQgFgTAAgRQABgkAUgbQAdgoAVgNIADgCQAPgIAZAAIABAAIAAAAIAQABIABAAIACAAQAxAKAVAQQgVgQgxgKIgCAAIgBAAIgQgBIAAAAIgBAAQgZAAgPAIIgDACQgVANgdAoQgUAbgBAkQAAARAFATIABAAQADACADAAIAAAAIABAAgAAcAhQABgGAAgGQABgbgegeQgjgkg5gSIgEgBIgBgBIgBAAIAAAAIAAAAIgBAAQgRgFgOAAIAAAAIgBAAQgbAAgRARIgBACIABgCQARgRAbAAIABAAIAAAAQAOAAARAFIABAAIAAAAIAAAAIABAAIABABIAEABQA5ASAjAkQAeAegBAbQAAAGgBAGgACGB9IAAAAgABqByIAAAAgABoBxIgIgGIgEgGQgEgHgBgIIAAgJQAAgVAHgRQAIgVAHgKIAKgNQAFgGAHgFQAOgIAQgCIAEACQgjAcgRAtQgNAiAGAfIgCgBgAChgag");
	this.shape_11.setTransform(9.6,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC3D42").s().p("ABRG3QgngCgOgIQhQAJgqgHQg4gIgbgiQgXAFgagCQgZgCgUgMIgJgFQAoglAegoQAegnATgrQATgsA6AZQgUBEg3BhIgHANQAXgGAegaQAqgmAQgZQAQgaALgJQAKgIAXgFQAQgDAaAHIAOAEIAGABIgHAGIAAABIABgIIgBAIQgFAxgQBOIgGAbQASgQARgYIAwhGQAZgkAYgHQAKgEAPAAIAaACIAdAFIgFAWQhcClgUABQgNACgQAAIgSgBgAAfGWIACgGIgCAGgAipF5IADgEIgDAEgADhC8IgRgEIgqgLIgzgOIgLgDIgxgPIgDgIQgCgLAFgcQAGgcANgUQANgVBJAQQBKAQADgNQABgDgEgFIgCgBQgPgQg+geQhVgqgygVIgvgUQAeAFAoAMIAxAPQBZAdA0AgQBBAogWBNQgIAbgIARQgOAdgRAAIgEgBgAArhNQgogMgegFIgNgFQgNgFgbgbQgWgWgMg/QgfhDgIgxQgIgxgFg6QAagBAaADQBDAJA8AhQA9AhAdA8QAeA8gLA3QgKA4gZAjIADATIACAPIgxgPgAgbheIAAAAg");
	this.shape_12.setTransform(18.8,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFMDeQgOAGgLAEQgSAFgNgDQgCAAgCgBQgDgBgCgBQgLgGgOgNQgYgbgKgaQgKgZgKgjQgKgkgTgdQgTgdgmgRQgFASgRALQgEADgEACQgGADgGACQgSAFgVgEQAAAAgBAAQgFgCgEgBQgkgNgigpQgSgVgKgKQgQgRgPgJQgTgKgjgMQgjgLghgxQghgwAEg9AgDlAQBCBkA1ArQBeBLApAnQBIBDAeDOQgLAHgKAFQAOAZgJAQQgwAjgbgBQgKgBgKgEQgMgFgLgKQgEgDgEgGQgMgPgTgjQAAABAAAAQACAKACARQADARgFAXQgFAWgYAHQgVAHgMgBQgCAAgBAAQgKgBgLgHQgCgBgCgBQgNgJgDgJQgEgJgOg0QgPg0gQglQgkgphJg/QgqgVgpgUQgxgagsghQgugigYg0QgQghgGgkQgFgcAGgbAghjgQAGAPAIAOQAUAoAkAiQAJAHAQAPQAEAEAEADQAJAJAGAIQAQAVADAVQABAJgDAKQAAABAAABAC0DaQgIgPgKgTQgGgKgFgJQgkhAgagWQgGgEgFgFQgMgJgMgJQgQgMgSgM");
	this.shape_13.setTransform(24.3,33);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC3D42").s().p("AAoFMQADgLACgNQAHgtgMg6QgOhQgbgtIAKAJQAaAWAkBAIALATIASAiIAAACIAEAbQADARgFAWQgEAXgZAHQgUAGgMAAIgBAAgAC2EzQgKgBgKgEQAMgNAEgIQAGgIADgNQABgJgBgKIAFACIAEABQANADASgFQAMgDANgHQgNAHgMADQAEgQgDgTQgEgUgOgiQgag/gOgaQgZgxgegdQgTgUgdgWIg1glQg8grg1gwQgIgPgGgPQAGAPAIAPQAVAoAkAhIAZAWIAIAHIAOARQAQAVADAVIgOgCQgegGgbgVQgSgOgdgeQgegggPgNIgmgbQgYgRgNgMQgigggPguQgJgcAAgbQBJgEB0AYQBDBkA0ArQBeBLApAnQBIBDAeDOIgVAMQAOAZgJAQQguAigaAAIgDAAg");
	this.shape_14.setTransform(32.3,32);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E2326").s().p("ACFE7QgNgIgEgJQgDgKgOgzQgPg1gQglQgmgohHg/IhTgrQgxgZgsghQgughgYg0QgQgigGgkQgFgcAGgbQgDgBBFgtIAHgEQASAxAfAsQAvBBBCAoIAkAVQAUANAMANQAHAIAKAOIARAYQAZAgAmAUIAJAFIgBAAIAAAAQgKADgKAAIAAAAIAAAAQgIAAgIgCIAAAAIgBAAIgBAAIgBAAIgKgDQgkgNghgoIgcggQgQgRgPgJQgTgKgjgMQgjgLghgwQgegrAAg2IABgNIgBANQAAA2AeArQAhAwAjALQAjAMATAKQAPAJAQARIAcAgQAhAoAkANQAoBLAgBaQASAwAAAhQABAYgFATIgEgDgADdDeIgSghIgLgTQgkhBgagVIgMgKIgXgSIgigYIABAAIABAAIABAAIAAAAQAIACAIAAIAAAAIAAAAQAKAAAKgDIAAAAIABAAIAMgEIAIgFIASAXIAQAVQAgAsA1BSQAUAeABAUQABAOgHAMIgEAEQgLgPgTgjgAEzDrQgKgGgOgNQgYgbgKgZQgKgagKgjQgKgkgTgcQgTgegmgRIAAgBQACgKgBgKQgCgVgQgUIgQgSQAxAiALAKQA9A0AlBTQAeBCAOBQIgFgCg");
	this.shape_15.setTransform(20.2,32.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A92F33").s().p("ABlFLQgKgBgLgHQAFgTgBgXQAAghgSgwQgfhagnhLIAIADIAiAYIAYASQAcAtAOBQQAMA6gHAtQgCAMgDALIgDAAgADLEfIgIgJIADgEQAHgMgBgPQgBgTgUgeQg1hSgggsIgQgWIgSgXQARgLAFgSQgFASgRALIgIAFIgMAFIgJgFQglgVgZggIgRgXQgKgOgIgJQgMgNgUgMIgkgVQhCgogvhBQgfgsgSgxQAfgRA1gCQAAAbAJAcQAPAuAiAgQANAMAYARIAmAbQAPANAeAgQAdAeARAOQAbAVAfAGIAOACQABAJgDAKIAAACQAmARATAdQATAdAKAkQAKAjAKAZQAKAaAYAbQAOANALAGQABAJgBAKQgDANgGAIQgFAIgLANQgMgFgLgKgAEED0IgEgBQgPhRgehCQglhTg9gzQgLgKgwgiIgIgHIgZgWQgjgigVgoQA0AxA9ArIA1AlQAdAWATAUQAeAdAZAxQAOAaAaA/QAOAiAEAUQADATgEAQQgMADgJAAIgKgBg");
	this.shape_16.setTransform(25.9,32);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgBEPQAdgHAUggQAXglABgSQAAgSgXgYQgjghhCgiIg/hiQAUg4AVg0QAUg1ABgaQABgagKgTQgKgQhJgdQgCgBgDgBABGgYQAYAEAtAsQAtAtA5gGQAXgCARgOQAIgGAEgMQAFgTAFgRQACgIgWgTQgVgUgggXQgggXgUgSQgVgSgRgQQgKgKgHgMQgPgXgMgZQgQgfgRgfQgKgQgLgQQgTgYgXgUACfFCQAxARAsANQARAFAMACQATAEAHgEQAMgGANgcQAMgbgBgdQgBgZgOgVQgOgVgYgLQgZgLgigLQgigKgZgMQgYgMgQgHQgQgHgEgPIgqiCIgGgcIgGgXACfFCQAAAAABAAQAmgfgDgSQgDgTgXglQgYgmhQg3Qgug9gUgfQgLgRgMgZQgLgXgMgfAlWkAQBOE2BTBaQAGAGA2AoQAkAbA5AqQAJAHAKAHQAEgBAEgBIBRA+IASANQAXAGAmge");
	this.shape_17.setTransform(23.9,10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A92F33").s().p("ACuFcIhdgdIABgBQAngegDgTQgEgSgXgmQgXglhPg3Qgvg9gUggQgLgQgNgaQgLgXgMgfIgUAEIAeBDIAHAOQAaAyAdAiQAHAIA5A7QAoAoARAhQgaAxgoAnIhQg9QAdgIAVggQAXglAAgRQAAgSgXgZQgjghhCghIhAhiIAphtQAVg1ABgZQABgagLgTQgJgQhJgeIgCgDIB4gpIAQAuIAZBGQAOAsASAVQAOASAnAbIAUAPIA3AqQAJAHAFAGQhJAggzgcIgFgYIAFAYIgTgLIgVgJIAgBzQANAwAOAUQATAZAsAYQArAXAxAXIAYAMQAOAIAIAJQAXAagHArQgFAZgPAeQgMgCgRgGg");
	this.shape_18.setTransform(31.7,11.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E2326").s().p("ADGFnQAOgdAGgaQAGgrgXgZQgIgJgNgIIgZgMQgxgYgqgWQgtgYgTgZQgOgUgMgxIgghzIAUAKIATAKIAHAcIApCCQAEAPAQAHIAoATQAZAMAiAKQAiALAZALQAYALAOAVQAOAVABAZQABAdgNAbQgMAcgMAGQgEACgHAAIgPgCgAAPFaIgRgNQAmgnAbgyQgRgggogpQg6g6gHgJQgdghgagzIgHgOIgehCIAUgEQAMAfALAXQANAZALARQAVAfAuA9QBPA3AXAmQAYAlADATQADASgmAfIgBAAQggAZgVAAIgIgBgAhvEDQAhgZATgmQgJgVghgRQgsgWgJgIQgIgGgJgMIgGgKIgTghIgkg0QgVgfgFgZQgFghAPglQAHgUASgnQAPgjAAgaQAAgVgIgYQgEgMgIgTQBJAdAJAQQALATgBAaQgBAagUA1IgpBsIA/BiQBCAiAkAhQAXAYgBASQAAASgXAlQgVAggdAHIgJACIgSgOgAA4AYQgtgsgXgEIgHgcQAzAcBKgfQgGgGgJgHIg3grIgTgOQgngbgOgTQgTgVgOgsIgZhGIgPgtIAZgJQAZAUATAYQALAQAKAQIAgA+QAMAZAPAXQAHAMAKAKIAlAiQAVASAgAXQAgAXAVAUQAVATgBAIIgKAkQgEAMgIAGQgRAOgXACIgMABQgyAAgogogAgTg0IAAAAg");
	this.shape_19.setTransform(32.2,10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DC3D42").s().p("AAmDYIg7guQhThahOk2IC/g1IAEgBIABADQAIATAEANQAIAXAAAWQAAAZgPAkQgSAngGATQgPAlAFAhQAFAYAUAgIAkA0IATAhIAHAKQAIAMAIAHQAJAHAsAWQAhARAJAVQgTAmghAZIhdhFgAAOkZIgFgCIAFACg");
	this.shape_20.setTransform(7.9,8.3);

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
	this.shape_26.graphics.f("#FFFFFF").s().p("AgiAAQgvhQgTgxQAQgcASgYQAQBFAPAsQAjBoBlCSQhZhlguhRg");
	this.shape_26.setTransform(-20.6,-51.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIyAjQAUgNAPgLQACgNgCgWQgDgXgZgOQgZgPgPAEQgPAEg5AYQg6AYgSAGQgTAGgmAIQglAHgJgFQgJgFgKgHQgLgGgsgFQgtgGg0AMQg1AMgYAJQgYAKgPgCQgTg8gZg+QgQgqgIgoQgFgXABgGQAIhVgWhUQgQg+gdg1Qg3gMg6AIQg9AJhBAeQgLAFgKAFQhzA9g0BBQg0BCgKAwQCMEJB1BqQB0BqBHAgQBHAgBJAZQBHAYAhAPQABAAAAAAQBdAoCKBUQADgCAEgCQALgGAHgIQASgPAHgRQABgCAAgBQAHgSgIgWQgGgQgVgUADxCTQADgBADgBQBUgGArgKQAsgKARgGQARgGATgLQAIgFAZgQQAIgGAIgFQAFgEAGgEQACgCADgBAD7EZQAFgCAGgCABHFzQAdADAeACQAaACAZABQATABAUAAQAUAAARABQAtABAQAAQAVAAAPAAQAyAAAogFQAggFApgNQAegKAjgPQAEgCAEgCQAAAAAHgFQAGgFgDgYQgDgYgYgXQgOgCgdACQgMAAgUAEQgcAGgEABQgsAHg4gHQgNgBgSgEQAHgBAIgBQBAgMAVgGQAwgPBIgpAEfEMQAYgIAYgFAIvCxQAHgEAHgEQAKgGAMgHQANgIAPgIQACgEABgEQAHgRgFgSQgFgSgPgNQgOgOgUgCQgTgDgTAGQANgJAMgI");
	this.shape_27.setTransform(30.7,-42.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E2326").s().p("ABFGpIgogJQgVgGgNgGIAlABIAlABIA9ABQAVAUAGAQQAIAWgGASIgCADQgogygwgLgAGEFdQgKgOgRgFQgOgDgTABIghAEQhGAMhHgMQgwgIgrgRIALgFIAZgJQAYgIAYgEIAfAEQA4AHAsgHIAggHQAUgEAMAAQAdgCAOACQAZAXADAYQACAYgGAFIgHAGIgIADQgCgFgEgFgAgCDHQAUgIAUgMIAPgHIAGgCQBUgGArgKQAtgKAQgGQARgGATgLIAhgVIAQgLIALgIIAFgDQATgGAUADQATADAPANQAOAOAFARQAFASgHARIgDAIIgbAQQgLgdgUgFQgNgCgaAKQhrAvhaAIQgYADgXAAQg0AAgsgOgAkJAlQgKgaglhHQgQgfgTgqQAEhsgjhqQgYhJgng+QA7gIA3AMQAdA2APA9QAWBUgIBVQgBAHAFAWQAIAoARArQAYA9ATA8QAQADAYgLQAYgKA1gMQA1gLArAFQAsAFALAHIATAMQAJAFAmgHQAlgIATgHQATgGA5gXQA5gYAPgEQAPgDAZAOQAZAOADAWQADAWgDAPIgiAXIgIgVQgGgOgKgGQgRgMgbAHQgIADgMAGIgUAMQgyAdg6ALQgwAJgxgDQgugVgrgBQgjgBhbAbQg0APgmABQgIgegOgig");
	this.shape_28.setTransform(49.5,-44.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A92F33").s().p("ADBHoQgOgTgogeQg0gkg2gbIAzADQAPAGAVAGIAnAKQAxAKAoAyQgHARgSAQQgHAHgLAGQgFgJgHgKgAFeFaIhqgMQg/gIgqgNQgfgKgZgOQAqgCAogKIgLAFQArARAvAIQBIAMBGgMIAhgDQATgCANADQARAFALAOQAEAFACAFQgjAPgeAKQgfgIgngFgABqDSQgrgFgngMQAggGAggNQBBAUBPgJQBagIBrgvQAZgKAOADQATAEALAdIgWANIgOAIIgEACQgkACgzAJIhbARQgzAIgxAAQgmAAgkgFgAlihzQgzi0hcijIAVgKQBBgeA9gIQAnA+AYBIQAjBqgEBsQATAqAQAfQAkBJALAYQAOAiAIAeQAlgBA1gPQBagbAjABQArABAvAVQAwAEAxgJQA5gMAzgdIAUgKQALgHAJgDQAbgHAQAMQALAFAGAOIAHAVIgBABIgZARIgFADIgLAIQgggKgrAGQgWADg3AOQg7AOgrAFQg4AGgwgIIglgHQgUgEgOACQgOABgSAIIgfANQhDAehIAGQg6iMhYh2g");
	this.shape_29.setTransform(40.5,-42.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DC3D42").s().p("ABlFpIAIgQIgIAQQghgPhIgYQhJgZhHggQhGggh1hqQh0hqiMkJQAKgwA0hCQAzhBBzg9QBdCjAyC0QBZB2A5CLQBJgFBCgeIAegOQASgHAPgCQAPgBAUADIAlAHQAvAIA4gGQArgFA8gOQA2gOAWgDQArgFAgAKIgQALIghAUQgTAMgQAGQgRAGgtAKQgrAKhUAGIgGACIgPAHQgUAMgVAIQgfAMggAGQAmAMArAGQBTALBcgOIBbgRQAygJAkgCQhHApgwAPQgWAGg/AMIgPACQgYAFgYAIIgZAJQgpAKgpACQAZANAfAKQAqANA/AJIBpALQAnAGAfAIQgoANghAFQgoAFgyAAIgkgBIg9AAIglgBIgmgBIgzgDIg7gFIA7AFQA1AaA1AkQAoAeAOAUQAGAJAFAKIgHAEQiKhUhdgog");
	this.shape_30.setTransform(27,-39.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAdQghg6gcg6QARg3ARgVQAIA7AoBjQAoBiAtBHQhKhOggg5g");
	this.shape_31.setTransform(-27.9,-51);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFPFoQhhjaAPjkQAKiPgth7QgwgphMgEQg9AAhCAWQgMADgKAEQh3AshGBJQhGBKgUBSQA6CEBPBeQBQBdBNCu");
	this.shape_32.setTransform(-4.2,-50.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7E2326").s().p("AA8FyQg2jCgHgmQgJgngOgsQgOgsgJgvQgEg0gQhvQgRhvgjhEQBLAEAwApQAtB7gKCPQgQDkBiDag");
	this.shape_33.setTransform(17.3,-52.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A92F33").s().p("AgrAAQgbishei7IAWgHQBDgWA9AAQAiBEARBvQARBvADA0QAKAvAOAsQAOAsAIAnQAJAmA1DCIhQAdQhBgLg/l6g");
	this.shape_34.setTransform(6.7,-51.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC3D42").s().p("Ah+B0QhQheg5iDQAThSBGhKQBGhKB2gsQBeC8AbCsQBAF6BBAKIjrASQhLithQheg");
	this.shape_35.setTransform(-11.2,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},3).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-116.4,191.2,232.9);


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


(lib.screen_color = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#333333"],[0.471,0.859],-1.7,50.7,0,-1.7,50.7,691.1).s().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-383.7,-284.9,767.4,569.8);


(lib.scan_lit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","rgba(255,255,255,0)"],[0.275,0.706],-93.5,-119.6,0,-93.5,-119.6,479.1).s().p("EgnsAVVMAYOgrgQAuhxByAWMA0rAGJUgOhApHgq1AAAQqOAAr1iVg");
	this.shape.setTransform(254.1,151.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,508.2,302.9);


(lib.repellentgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-63.2,-103.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-103.1,126,206);


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


(lib.gpsDevice1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-139.3,-119.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.3,-119.3,279,241);


(lib.gps_device = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,0,0,3).p("AmmHHQAAADABADQACACACABILlgeIBjtrIrzgWQgDAAgBADQgCADgBADgAkthiIArAEIgMCgIgvAFg");
	this.shape.setTransform(-42.9,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#868386","#373138","#868386"],[0.561,0.867,1],87.8,-241.6,0,87.8,-241.6,281.1).s().p("A0HCIQgSgSgLgWQALAVASARQAyAwBNgGMAkZgDOQA3gGAsguQAkgpAMgwIABgGIgBAGQgMAxgkApQgsAvg3AFMgkaADPIgTAAQhAAAgrgqg");
	this.shape_1.setTransform(3.3,93.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#757375","#373138","#757375"],[0.561,0.867,1],88.6,-240.5,0,88.6,-240.5,280.7).s().p("A0ACQQgygvAGhLIAAgFIAJBAIAHAOQALAWARASQAsAqBAABIATgBMAkagDPQA2gFAsgvQAkgoANgyIABgGIAAgBIAAAAIABgEIgBAGIgDAPQgMAwgjAnQgsAsg3AGMgkZADQIgVABQg/gBgrgng");
	this.shape_2.setTransform(2.6,93.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FEFAFC","#858789","#FEFAFC"],[0.561,0.867,1],77.2,-140.2,0,77.2,-140.2,276.1).s().p("A1cRSQgwgmAGhEICj+sQAHhMA4gyQA5gzBJAFMAlAACQQA0ADAeAvQAeAtgIBAIjPZgQgIA4goAnQgnAmg0AEMgkTADIIgUABQg7AAgmgfgAx+wMQgjAjgHBEIigdtQgFBAAdAhQAeAfA/gEMAjxgC/QAvgFAeggQAeggAGg1IDK44QAPh3hXgFMgkpgCFIgMAAQg4AAgiAigAwmw+MAk8ACIQAQAAgIgHQgHgIgNAAMgkKgCIIgKAAQgeAAACAPg");
	this.shape_3.setTransform(13.6,-6.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#C3BFC2","#373138","#C3BFC2"],[0.561,0.867,1],78,-143.2,0,78,-143.2,281.1).s().p("A1pRgQgSgSgLgVIgGgOIgKhAICk+6QAAAAAAAAQABgBAAAAQAAAAAAAAQgBAAAAAAIAVhJQARgjAfgbQA8g3BPAFMAlIACTQA4ADAgAzQARAXAGAfIACA9IjSZqIgBAEIAAABIgBAEIAAAAIAAABIgBAGQgMAxgjAoQgtAvg2AFMgkaADPIgQABQhCAAgtgqgAyfxTQg4AygIBNIijerQgFBEAvAnQAtAkBJgGMAkSgDIQA1gEAmgmQApgnAHg4IDQ5hQAIg/gfgtQgegwgzgCMglBgCQIgNgBQhAAAg0AugA0rQYQgeggAFhAICh9uQAGhDAjgjQAmgmBBAEMAkpACFQBWAEgPB4IjKY4QgGA0geAhQgeAfgvAGMgjxAC/IgPAAQgzAAgagcgAxhwQQgjAfgEAvIijeFQgDAsAdAdQAcAcAsgEMAjwgC8QAhgDAZgcQAbgcAEglIDN5RQAFgpgUgcQgSgcgigCMgkbgCCIgHAAQgpAAggAegAUavGMgk8gCJQgCgQAoACMAkLACIQANAAAHAIQAGAHgNAAIgCAAg");
	this.shape_4.setTransform(13.1,-4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("A0iQRQgdgdADgrICj+GQAEgvAjgfQAjghAtADMAkcACDQAhABASAdQAUAcgFAoIjNZRQgEAlgaAdQgaAbghADMgjwAC9IgJAAQgmAAgZgZgAviItILmgeIBjtqIr0gWIAAAAIgBAAIAAAAIgCABIAAAAIgBABIAAABQgCACgBAEIhTOMIBTuMQABgEACgCIAAgBIABgBIAAAAIACgBIAAAAIABAAIAAAAIL0AWIhjNqIrmAeQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAIgBgGIAAgBIAAABIABAGQABAAAAABQAAAAABAAQAAABABAAQABAAAAAAIAAAAgAt+CkIAvgEIAMihIgrgDIArADIgMChIgvAEIAQioIgQCogAt+Ckg");
	this.shape_5.setTransform(14.8,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.2,-122,330.5,244.2);


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
p.nominalBounds = new cjs.Rectangle(-46,-42.3,92,80.3);


(lib.db_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3341A8","#333333","rgba(51,51,51,0)"],[0,0.204,0.906],1,-119.3,0,2.8,-55.9,156.9).s().p("AqBM2QkclVgEnhQgDniEXlVQEYlVFsADQFqACDnFZQDmFZBdHaQBdHckYFVQkYFUmPAAQmNAAkdlUg");

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

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AjTCAIASg5IFKAtIgTA7gABcAXIA3irIBAAHIg1CtgAiugHIA5inIA7AGIgzCog");
	this.shape_5.setTransform(-1.5,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

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
	this.shape_2.graphics.f("#6B8A08").s().p("AioBMQAYgHAYgLQA/gbBHg2QAqgeBThAQA3goAvgYIAAACQhHA7gxBEQgfApgXAuQjlACiTDqQA3hoBWhbgAERihQgOgIgNgOIgLgMIgHgKQgLgSgEgRQgGgWAKgIIAAAAIAAAAQAPAgAKARQAKARARAOQARAPAIABIAAAAIAQADQgBAJgGAEQgEADgGAAQgIAAgMgGg");
	this.shape_2.setTransform(0,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAeAwQABgPgJgQQgPgcgbgUQgMgJgOgGIAAgBQALgHAUAKQATALARAXQASAWAGAWQACAKgBAHIgQgDg");
	this.shape_3.setTransform(26.4,-22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-28.3,64.1,56.6);


(lib.db_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABujiQAUgOAUgMQATgMAUgKQAMgHANgGQgCBGAGAwQAEAbAGAUQgMAFgMAHQgIAFgIAFQgyAggqAoQgEgTgLgPQgCgDgDgDQgUgXgggLQgOgFgPgCQgIgCgHAAQg5A/gtBNQglA/gcBJQgXA5gRBBIATAAIBRABIAkAAQAEgnAOggQgDgIgDgGQgFgKgGgJQgGgIgHgGQgNgLgTgCQgLgCgMACQgGAAgGACQgJACgIAEABujiQAMABAJAFQACABACABQAhAPANAoQADAIACAHQAFAXgDAZAgEBZQgHgSgJgLQgCgBgBgBQgNgRgVgIQgMgFgNgCQgIgBgJAAQgMABgLADAgEBZQgnA7geBFABggcQg4AzgsBCABujiQhIAxg6BC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("Ai8ENQARhAAXg5QAchKAlg/QALgDAMAAQAJgBAIACQgaAlgWAoQgPAagNAbIgMACQgJACgIAFQAIgFAJgCIAMgCQgeBAgUBDgAASiAIAPACQAQACAOAFQg7A7gvBFQgIgCgJABQgMAAgLADQAthMA4g/gAA/h3IAAAAgAAhh+IgPgCQA7hCBIgxQAMABAJAFIAEACIgEgCQgJgFgMgBQAUgOAUgMQgFARgKARQgIAMgKANQgOAQgxAvIgeAcQgOgFgQgCg");
	this.shape_1.setTransform(-3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("AixEfQAPg0AWgzQAGAJAFAKIAGAOQgOAfgEAogAiBDLQgFgKgGgJQAdhAApg8QAJALAHASQgnA6geBGIgGgOgAiMC4IAAAAgAg2BZQgHgSgJgLIAWggQAlgwAqgpQAwgwA5gnIAIgGIgEgWQgHg0AGguIAZgNQgCBGAGAwQAEAbAGAVIgYALIgQAKIABgSQAAgPgDgPQADAPAAAPIgBASQgyAggqAoQgEgTgLgOQALAOAEATQg3AzgtBCIAAAAgAhGA8IAAAAg");
	this.shape_2.setTransform(5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjIEZQAThDAfhAQANgbAOgaQAXgoAaglQAvhFA7g7IAdgcQAygvANgQQALgNAHgMQAKgRAFgRQATgMAUgKQgGAtAIA0IADAXIgIAGIgEgPQgOgoghgPQAhAPAOAoIAEAPQg4AmgxAwIgEgGQgUgXgggLQAgALAUAXIAEAGQgqAqglAwIgWAgIgCgDQgOgQgUgJQgNgFgMgBQAMABANAFQAUAJAOAQIACADQgpA7gcBBQgGgIgHgGQgOgLgSgDQgMgBgLABQALgBAMABQASADAOALQAHAGAGAIQgWAygPA1gADBiaIAAAAg");
	this.shape_3.setTransform(-0.8,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AC1htQgBgUgFgqQAAgBgDgXQgBgDAAgDQAAgCgBgCQgKhDgShCQgKgigKgiQBDAmBNgGQAuB/AIBzQACAUAAATQACBdgYBVQgIAdgLAcQgiBYhXA7QgOAKgQAJIAAABQhJAphmAYQgCABgBAAQhgAXh7AJIg3iQIARgCQA0gEA8gHQAVgCAYgDQACAAADAAQAZgFAagGQAdAUANAZQAHAQACARQABALABAKQABAigHAHAC1htQA4AlA1gKQAQgDAQgIACfA9QAYgyAAg6QAAgPgBgQQAAgPgBgQACfA9QANAMAOAIQAjATAogFQATgCAUgIABECpQAOAGARAPQACABABACQAYAWAJAbQADAJACAKQAGAlgQAKABECpQAkgaAcglQAQgVALgYAhcDqQAugMAxgSQAjgOAegV");
	this.shape_4.setTransform(-15.3,18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("AlCEHIARgCQA6gGAzgKIADAFQAZA2gNA1QBIgCBGgWIAAALQAAAYgGAGIgDABQhgAXh7AJgAkxEFIBwgLIhwALgAgnFYIAAgLQAggKAfgOQA9gcAygnQAqghAigpQAfglATgkQATgCAUgIQgIAdgLAcQgiBYhXA7QgOAKgQAJQAMgHgBgWIgBgSIgFgTIAFATIABASQABAWgMAHIAAABQhJAphmAYQAGgGAAgYgAgnFNIAAAAgACCE0IAAAAgAEfAZQAJgqgFhAIgBgBQAQgDAQgIQgQAIgQADQgCgSgCgyQgZANgogJQgpgJgFgPQACAVgBAAQgCgZgDgbIgBgEQgMhbgkhuQBDAmBNgGQAuB/AIBzIACAnQACBdgYBVQgUAIgTACQATgkAHgigACviqIAAgBIgDgYIgBgGIABAGIADAYIAAABg");
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

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("AkHhMQgLgVgJgXQgKgYgJgbQgIgZgKg4QA9gxBNgIQAKAnAMAgQAPAsAUAmAkHhMQACgHAEgHQAFgMAKgKQAIgIAKgHQAUgOAYgIQARgGAUAAQAJgBAJAAAinA9Qg1g8ggg6QgGgKgFgJAinA9QgBgYAKgWQADgGAEgGQARgdAkgRQADgCAEgCQAPgGARgCQgmgvgcg2ACAELQBRAbBmAQQgHgQgDgQQgBgDAAgDQgGgbAFgaQAAgGACgGQAFgdAPgXQhVgPg4gXAguCxQAAgBAAgBQgIgYAGgXQABgIADgHQAGgQAKgNQAOgTAVgMQAAAAABgBQAPgJARgEQg3gpgsg1ACAELQgJgRgDgTQAAgFAAgGQAAgVAJgWQAIgSANgPQAFgGAHgGQAKgJAMgGQhNggg/guAguCxQgIgGgIgHQg8g0gtgzACAELQhogjhGg3");
	this.shape_8.setTransform(3.2,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4C4C4C").s().p("ACSDDQg5geg2gnIgcgWQg5gtgwg0IAHgEQAPgFARgCQAsA0A3AqQgRAEgPAJIgBABIABgBQAPgJARgEQA/AuBNAgQgMAGgKAJQgHAGgFAGQAFgGAHgGQAKgJAMgGQA4AXBVAPQgPAXgFAdQhQgXhLgogAi0hiQARgFAUgBIASgBQAcA2AmAvQgRACgPAFIgHAEQgugxgkg4gAi0hiQgYgigTgkQgsAMgjAlQgIgagKg4QA9gxBNgHQAKAnAMAfQAPAsAUAmIgSABQgUABgRAFIAAAAg");
	this.shape_9.setTransform(3.2,-7.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("ACTDNIgegOQAAgVAJgWQAIgSANgOQgNAOgIASQgJAWAAAVQhGgihAgzIgagWQAGgPAKgOQAOgTAVgLQgVALgOATQgKAOgGAPQg2gwg1g9QARgeAkgQQgkAQgRAeQgug1gtg/QAIgIAKgGQAUgPAYgIQgYAIgUAPQgKAGgIAIIgcgpQgKALgCAPQgBADAAAEQgKgXgJgbQAjglAsgMQATAkAYAiQAkA4AuAzQAwAzA5AtIAcAVQA2AnA5AfQBLAnBQAYIgCALQgFAaAGAbIABAGQhOgKhNgig");
	this.shape_10.setTransform(3.1,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#747474").s().p("AByC9QgJgQgCgUIgBgLIABALQACAUAJAQQhogjhGg3IAAgCQgEgNAAgOQAAgKACgKQACgIADgHQgDAHgCAIQgCAKAAAKQAAAOAEANIAAACIgPgNQg9gzgsgyIgBgGQAAgVAKgUIAGgMQA1A+A3AvIAaAWQBAAzBFAiIAeAOQBOAiBNAKQAEARAHAPQhngPhRgcgAkKiHIgKgTQACgHAEgGQAFgMAKgLQAsA/AuA1IgGAMQgKAUAAAVIABAGQg2g8ggg8gAilhKIAAAAgAkojGQgBgEABgDQACgPALgLIAcApQgKALgFAMQgEAGgCAHQgLgVgJgXgAj/i+IAAAAg");
	this.shape_11.setTransform(4.6,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-34,61,68.1);


(lib.bgR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-531.5,-310.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-531.5,-310.5,1063,621);


(lib.T_features = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_mouth
	this.instance = new lib.T_mouth("single",0);
	this.instance.parent = this;
	this.instance.setTransform(28.3,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1));

	// T_nose
	this.instance_1 = new lib.T_nose("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.6,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},2).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// T_eye
	this.instance_2 = new lib.T_eye("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.4,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},2).wait(1).to({_off:false,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-30.7,91.3,61.5);


(lib.T_Arm_R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRi7IAkAOQgECNgQCGIgJBWQgLiEAEjzg");
	this.shape.setTransform(-17.6,29.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABbIzQAjAkAlAMQAkANAWgzQAGgJAHgXQAHgWgDgRQgEgRg1gwQg0gwgMgXIgNjFQA8ArAcAbQAcAaAYAHQAXAHAbgBQAbgBAXgXQAXgWAGgYQABgEgBgEQgBgWgMgKQgNgKgWgJQgWgMgXgSQgXgUgegqQg0g/gdgNIAAkDQADhDAMhlQAMhlgFhiQgggRgngLQg3gPhEgCQh2gEhXAsQgUAKgSALQg9AngrA0QAXBzAqBpQAIAVAJAVIBHEZIABFGQAACLACAUQADATAQAiQAPAiAVAeQAVAdAUAZQATAZAKACQALACAXgEQAWgEASgTAgtEdQAFAmAGA7QAHA9AmAqQAnAoAiAfQADADACACQABABABABAiXEXQADBkANBHQAMBIAUAYQAUAWAkA2QAQAYANARQAOASAOAIQAOAIAigRQAjgRAKgkQAJgkgVgc");
	this.shape_1.setTransform(-31.8,75.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E2326").s().p("ABWKSQgOgIgPgSQgMgRgRgYQgig2gUgWQgVgYgMhIQgMhHgEhkQAEBkAMBHQAMBIAVAYQAUAWAiA2QARAYAMARQgRATgXAEQgWAEgKgCQgLgCgTgZIgpg2QgVgegPgiQgQgigDgTQgCgUAAiLIAAlFIhHkaIgRgqQgrhpgWhzQAqg0A9gnQgDBEAQBOQALA/AfCOQAcB7ARCaQAuCdB9BjQADAJAMA4QANA4AeA1QAhA0AvAoQAuAoAkAMQgXAzgkgNQglgMgjgkIgCgCIgEgFQgjgfgngoQgngqgHg9IgLhhIALBhQAHA9AnAqQAnAoAjAfIAEAFIACACQAVAcgJAkQgKAkgiARQgYAMgOAAQgHAAgEgDg");
	this.shape_2.setTransform(-39.4,78.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("ABYJEQgvgoggg0Qgeg1gMg4QgMg4gDgJQh/higtifQgSiZgbh7QgfiOgMg/QgPhOADhEQASgLAUgKQBXgsB2AEQBFACA2APQABAwgLCCQgLCBgDATQgDASABBLQACBKAOC+QArAWALAKQALAKAZAdQAaAdAUAeQAVAdAMAMQAMAMAjAKQAjAJAjgEQgGAYgXAXQgXAWgbABQgbABgYgHQgXgGgdgbQgcgbg7grIANDFQAMAXA0AwQA1AwAEARQADARgHAWQgHAXgGAJQgjgMgvgog");
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
	this.shape_7.graphics.f("#585858").s().p("AibFPQgejZAIjWQAJjYBsiBQBsiBA0gVQA0gUAchnQhBEPgfGYIAAABIgULoQgdgJgoAEQgcACgrAIQgzi7gcjBg");
	this.shape_7.setTransform(-29.1,-19.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("Ak1F0QhOlNBdm+QBdm/A1hhQA2hhCWApQCXAqBGAeIBFCbQgLBvgQBVIgJAxIgCALIlzDVQirFQAYEaQAYEaBOGcQgOAIgNALQhilBhMlHg");
	this.shape_8.setTransform(-40.9,-43);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#424242").s().p("AkWESQgYkZCrlQIFyjVIgGAcIgEAOQgcBng0AUQg0AVhrCBQhtCCgJDWQgIDYAfDYQAbDBAzC7IgqAJQg4ANg0AgQhNmcgYkbgADQvIQAnAqAjBAIgFAxg");
	this.shape_9.setTransform(-34.1,-39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ajgg8IAAgCQASgXATgVQCtBEBTAqQBVAsBHA7QjmhnjbhAg");
	this.shape_10.setTransform(18.2,-12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGGGgQgDAcgIA2QgDARgDATQgBAFgBAGQgEATgHAZQhAAbgcgPQgdgOgJgsQgCgVACgtQADgsAHgWQAIgWAAgeQAAgegGgKQgFgLgOgLQgGgFgSgLQhBgnghgTQgygdgYgXQgkgjgHgxIkWhRQg9AGhtgUQhwgXiUgoQAAgUABgTQABgbAEgaQABgaAFgYQAWiLA/h1QAnhIA3hBQEnB8A+ApQA7AoAHAHIJ4FOQAwAjApAoQAdAbAWAjQAJAPAKAXQALAYAGAuQAHAvAFAmQAGAiAGAgQAAAEABADQACAMAAAJQABARgHAFQAFATgOALQgNAKgYAGQgYAGgtgdQgngrgHiuIhqhdIgBgBQAAABAAABQA9BZAIA+QAIA+ACAqQABAQAFAdQACAPAEASQAFAeAJAmQADASAFASQABAfgtAQQgtAPgfgNQgegNgIgVQgHgSgCgeQAAgDgBgEQgCgjgBgTQgCgUgBgHgAGwBHQACAEACADQAIAKAHAKAE3B9QBUCggCA1QgBA0gBAMQAAAGgBAI");
	this.shape_11.setTransform(51.9,35.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7E2326").s().p("AEMGVQgdgOgJgsQgCgVACgtQADgtAHgWQAIgVAAgeQAAgegGgKQgFgLgOgLIgYgQIhig6QgygcgYgXQgkgjgHgxIkWhRQg9AGhtgVQhwgXiUgoQAAgUABgTQABgbAEgaQABgaAFgYQEVBkDBgBID3BiQAxBQAYAcQAoAxAlAiQBGA9BGAbIACAOQAFAhgBA0IgCBWQAAAQgDA1QAWAkA1gJQgEAUgHAZQgpARgbAAQgOAAgKgFgAG8GGQgegNgIgVQgHgSgCgfIgBgGIgDg2QgCgUgBgHIABgOIAChBQACg0hUifIAAgBQAEgIATAKIAAAAQARAKAcAqQAcAqAaBRQAZBQAKB8QAMAEANABQAaABAkgLIABAAIAIAkQABAfgtAQQgZAIgUAAQgRAAgOgGgAJcDVQgngsgHisIhqhdIgBgBIgPgUIgEgHIgDgIQgNgUgFgLQgDgIgEgOQAIADAwAdQAwAeAkAaQAjAbA2DXQAMAIAOAFQAfALAfgBIAEAAQABARgHAFQAFATgOAKQgNALgYAGIgJABQgXAAglgYg");
	this.shape_12.setTransform(51.9,55.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A92F33").s().p("AEiHfQADg0AAgRIAChWQABg0gFghIgCgOQhGgbhGg+QglgigogxQgYgcgwhPIj4hiQjBABkVhkQAWiLA/h1QElCCB5BzQBpBAByAoIApBDQALATA+BSQA9BRBqBLIAEAEQAbAfAQA/QAPA4ALBQQAEAaADAKQAEAOAIAKIgGAkIgCALIgSABQgnAAgSgdgAHnHZQgNgBgMgEQgKh8gZhQQgahRgcgqQgcgrgRgJQAVAEATAKQAfARARAdQAKAPAIAXIAPAqQAWBGArBCQALARALANIAOBEIgBABQggAJgYAAIgGAAgAKNE8QgOgFgMgHQg2jZgjgaQgkgbgwgdQgwgdgIgDIgBgEIABAAQgVgeAiAMQAiAMA+AjQA+AiAVAXQAWAYAKBNQALBOAaAjQAbAiALgFQAKgGAJAGIABAHQACAMAAAJIgEAAIgFAAQgdAAgcgKg");
	this.shape_13.setTransform(52.5,39.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DC3D42").s().p("AFAIRQgDgKgEgaQgLhQgPg5QgQg/gbgeIgEgEQhqhMg9hRQg9hTgMgSIgphDQhygohphAQh5hzkliCQAnhIA3hAQEnB7A+ApQA7ApAHAHIJ4FNQAwAiApApQAdAcAWAjQAJAOAKAYQALAXAGAvIAMBUIAMBDQgJgGgKAFQgLAGgbgjQgagigLhOQgKhOgWgXQgVgYg+gjQg+gjgigLQgigMAVAeIgBAAIABADQAEAPADAHQAFAMANAUIADAIIAEAHIAPAUIABABQA8BZAIA+QAIA/ACApQABAQAFAeIAGAgQgLgNgLgQQgrhCgWhHIgPgpQgIgYgKgPQgRgcgfgRQgTgLgUgEIgBAAQgTgKgDAIIgBAAQBUCggCA1IgCBAIgBAPIgLBRQgHgJgFgOg");
	this.shape_14.setTransform(56.6,30.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABtELIGIDHIi2GYIh/gPQg+gMgjgFQgigEgdgMQnCiFgqjTQgqjTACjDQAAgVAAgUQACibABgQQACgWADgWQADgjAFgkQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIiYhJ");
	this.shape_15.setTransform(-26.7,-57.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#424242").s().p("ADCHAQgigFgdgMQgcgoAciRIkBh9QhbgtAGABQAFABgNgOQgOgPgyigQgihqgniWQAggHAggJQBvgeBlgyQgJDNgjDMQDpBlD4BLQgTAtgOAvQgdBlgECVQg/gLgigFg");
	this.shape_16.setTransform(-36.5,-18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#585858").s().p("AjiA4QgqjSACjDIABgpIAtgJQAnCXAiBqQAzCfANAPQANAPgFgBQgGgCBaAtIECB9QgcCSAcAoQnDiFgqjTg");
	this.shape_17.setTransform(-50.1,-14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("ADANbQAFiVAdhlQANgwAUgsQj4hLjphmQAijNAKjLQhmAxhvAeQggAIggAHIgtAJQACibABgQIAEgsIAJhHQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIGIDHIi2GYgABtELIiYhJg");
	this.shape_18.setTransform(-26.7,-57.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1,3,true).p("AD6jCQAIgSABgKQABgRgbgYQgMgJgPgLQgNgJgRgKQhUgzgeAfQghAhgQATQgPgVgRgLQgOgKgPgEQgOgDgNACQgwAHgZA0QgZA0goAoQgoAngUAsQgFALgEALIAAAAAkag9QgLAiADAjAANkOQgTAbgRAaQgFAIgFAIQgBAiAIAJQAHAIALAKQACABABACQACgCADgCIAegZQAGgDAfgUQgBgLgCgKQgCgMgEgJABCBXQAVgGAVgeIAAgBQALgRALgbQAbgoAphAQAohAAMggQAOADALAfQADAIADAMQABADAAADQAFARACAPQAEAYgBARQgCAPgNAeQAEAJADAPQABAGABAPQAAAYgBAwQgBALAAAKQgDA1gIAhQgBAFgCAGQgMAnhpAxQhjAtj9gbAEVgQQgMAWgTAhQgqBJgCAJQgcAwgjAP");
	this.shape_19.setTransform(68.4,-27.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E2326").s().p("AjlE1IgKgQIgXgmIALgCQA9AMAxAGQBaALBLgIQBXgIBJglIAigTIAagSIgDALQgMAnhpAxQg/Ach7AAQhIAAhfgKgAAwDDIgCAAQAFgEAIgEIAGgDIAXgLQANgGALgJQAMgKAKgPQAOgXADgZQAVgbATgdQAshFAZhOQADAYgBARQgBAPgOAeQAFAJADAQIABAUQgWArgdAnQgFARgJAPQgHAMgJALQgNAOgSAMQgiAVgoAAQgKAAgMgCgADZAXQgrBJgBAJQgdAwgiAPQAigPAdgwQABgJArhJQATggALgXQgLAXgTAggAgLA+IgDgCIAJgDQAzgUARgbQAPgZAJgcQBwiaAEhSQAbAYgBARQgBAKgHASQgMAggpBAIhDBpQgLAagMARQAMgRALgaIBDhpQAphAAMggQANADALAfQgiA9gUAgQgfAwggAlQgJAWgNAVIANgRIgNARIgHAKIgDABQgUAJgTADIgUADQAVgGAUgeIAAgBIAAAAIAAABQgUAegVAGIgDAAQgZAAgUgJgAAlBHIAAAAgABOAjgAhUigQgJgYgEgHQgGgJABgFQAAgEAEgEQAdgxAVg4QARALAQAVQgUAbgRAaIAHAfIACACIADAAIAvgPIAcgLIADAVIglAXIgeAZIgFAEIgDgDQgMgKgHgIQgGgIAAgZIAAgKIAKgQIgKAQIAAAKQAAAZAGAIQAHAIAMAKIADADIAFgEIAegZQgQAZg1AZQgJgJgHgTg");
	this.shape_20.setTransform(71.3,-26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A92F33").s().p("Ah+ErQgwgGg+gNIgKADQgRgdgLgaIAqgKQAuAVAhAJQAhAJAzAHQA0AGAfABQAhAAAmgDQAngEgEgBQBRgRgLhEQAJgLAHgMQAJgPAGgSQAdgmAVgsQABAYgCAxIAAAVQgDA0gIAhIgZASIgjATQhIAmhYAIQgfADghAAQgwAAg1gGgADTDeIABAAIAEgFIgFAFgABqC+QAMgHARgYQAPgZgngyIADgBIAIgKIAMgRIgNAQQANgUAKgXQAfgkAfgxQAUgfAig+IAHAUIABAGIAHAhQgYBOgtBFQgTAdgUAaQgEAagOAWQgKAPgMALQgLAJgMAGIgYAKIgGADQATgQANgIgAAiA1QAVgiALgyQA6hFAnhRQAZg0ADgnIAbAVQgEBShwCZQgJAcgPAaQgRAbg0ATQANgNAMgSgABdA+IAAAAIAAAAgAghhJIhCgaQgPgagFgSQgJgYgBgWQApg1Aag+QAPADAOAKQgVA4gdAxQgEAEAAAFQgBAEAGAKQAEAHAJAXQAHAUAJAIQA1gYAQgaIAlgXIgDgUIARgJQgMA+gdAeQgeAdgdANg");
	this.shape_21.setTransform(69.8,-28.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DC3D42").s().p("AA+EpQgggBgzgGQgzgGghgJQghgJgugVIgqAKQgOgfgIgcQgfhuAehqIABgDIAAAAQAEgLAFgLQAUgsAognQAogoAZg0QAZg0AwgHQANgCAOADQgaA+gpA1QABAWAJAYQAGASAPAbIBAAZIABABQAdgNAegeQAegeALg+IgRAJQgCgMgEgJQAEAJACAMIgbALIgwAPIgEAAIgBgCIgIgfQARgaAUgbQAQgTAhghQAegfBUAzIAeATQgDAngZA0QgoBRg5BEQgMAygVAjQgMARgNAOIgJADIAEACQAWAJAaAAIAUgDQAUgDAUgJQAnAzgQAYQgRAYgMAIQgNAHgTARQgIAEgFAEIADAAQAzAIAtgbQARgMANgOQALBFhQAQQADACgnADQghADgeAAIgIAAgAkAAuIgBgOQAAgdAJgaQgJAaAAAdIABAOgAEJD0IgFAEIgBAAIAGgEgABiisIAAAAg");
	this.shape_22.setTransform(65,-31.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhiACQhVADgJAHIAmgtQBUgBBOAKQBPAKBqAwQjFgjheADg");
	this.shape_23.setTransform(-9.8,-39.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGCkDQgpAAhAgCQgGAAgGAAQhhgEiEgPQhtgph3gMQhMgIhLAEQgTATgQAUQgCADgCADQgqA2gUBDQgcBcAABhQAABkA0BWQAEAFADAGQAyBMBPAnQAJAFAKAEQCFgCDahpQB/gVCGgpQA7gTA7gW");
	this.shape_24.setTransform(7.4,-9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E2326").s().p("AkYEzQhPgngyhMIgHgLQg0hWAAhjQAAhiAchcQAUhDAqg2QgTAxgLAzQgSBXAKBTQAKBVAoBNQAUAoAaAhQA5gFBCgNICtgnQBbgVBCgHIAOgCIAEAAQBdgJBegSQAxgKAxgMQAPAaASAaQg7AWg7ATQiGAph/AVQjaBpiFACIgTgJg");
	this.shape_25.setTransform(7.4,-6.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A92F33").s().p("Al2C3QgohNgKhWQgKhSAShXQALgzATgxIAEgGQgPBdANBiQAQB2A3BlQCxgLCjgcQCSgHCRgbQAqgHApgKQAMAcAPAbQgxAMgxAKQheAShdAJIgEAAIgOACQhCAHhbAVIitAnQhCANg5AFQgaghgUgog");
	this.shape_26.setTransform(8.2,-13.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DC3D42").s().p("AmFAFQgOhgAQhdQAQgVATgSQBLgFBMAIQB3ANBtAoQCEAQBhADIAMABQBAACApAAQgNAugBAxQgBAiAFAdQAIA/AZA8QgpAJgqAIQiSAbiRAGQijAcixAMQg3hmgQh3g");
	this.shape_27.setTransform(8.7,-20.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiJgWQAdALAuAQQAuARA1gNQA2gOAugPQAEgBADgBQABAAACgBQAzgNAkgZQAlgYgRgnQgBgGgFgIQgDgGgEgGQgKgPgPgDQgQgFhLAaQhKAagZABQhpgXAIgGQgGgMgEgKACIBdQAVgDAQgIQALgGALgSQAEgHADgHQAHgQgBgOQgBgMgIgJQgSgVgiAFAjLA1QBGAgA3APQA3ARAbgGQAbgGA7gGQAagDAUgDAkCBZIA1AbQBcAtAOAGQAHABAMACQALABAPABQAeABAggEQAfgEAcgEQAcgFAIgGQAIgGANgQQAMgRAAgS");
	this.shape_28.setTransform(93.9,45.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DC3D42").s().p("AgdBWIgZgCIgTgDQgPgGhcgtIg1gbIAAgGQAAgrAQgnQAZAPAcANQBGAhBtABQCFABBWgxQABANgHARIgIAOQgKASgMAGQgPAHgVADIgvAGQg6AGgcAGQgHABgJAAIgBAAIgDAAQgVgBgggIIgEgBIAAgBIgFgBQg2gOhHggQBHAgA2AOIAFABIAAABIAEABQAgAIAVABIADAAIABAAQAJAAAHgBQAcgGA6gGIAvgGQgBASgMARQgMAQgIAGQgJAGgcAFIg7AIQgaADgYAAIgMAAg");
	this.shape_29.setTransform(91.4,54.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7E2326").s().p("AiGAcQgkgMgfgNQAigeApgTIAJAWQgIAFBqAWQAYAABKgZQBLgaAQAEQAPAEAKAPIAHAMQhqA8hrAAQg9AAg+gTg");
	this.shape_30.setTransform(98.5,33.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A92F33").s().p("AgSBlQhtgBhGghQgdgOgZgOIAKgVQAhg8AtgoQAfANAkALQCqA2CmhgQAFAIABAGQARAnglAZQgkAXgzAOQAigGASAVQAJAKABANQhTAwiAAAIgIAAgAgPA1QAUAAAXgFIAAgBIABAAQA2gPAugPIAHgCIADAAIgDAAIgHACQguAPg2APIgBAAIAAABQgXAFgUAAIAAAAIAAAAQgcAAgagJIgBgBIhLgbIBLAbIABABQAaAJAcAAIAAAAIAAAAg");
	this.shape_31.setTransform(94.7,42);

	this.instance = new lib.gps_device("single",2);
	this.instance.parent = this;
	this.instance.setTransform(134.6,39.1,0.403,0.403,11,0,0,0.4,0.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGBBpQgXg8A4gCQBBgCAbgeQAcgdAVgcQATgcACgjQABgkgOgSQgEgDgCgCQgUgLgTAJQgSAJgZAUQgcASggAQQggAOg0gIQhZAEgrAgIjqhsQghgphSgwQhSgvhzg4QguA2gmA3QhNBxgoB6QgZBMgLBQQEEBaBBAHQBCAHAHgBIEUBHIBxA5");
	this.shape_32.setTransform(47.3,18.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC3D42").s().p("AESCJIkUhHQgIABhCgHQhBgHkDhZQAKhQAZhNQFCBtBcgIIDTA9QAqBOBkA6QgQAnAAArIAAAHg");
	this.shape_33.setTransform(29.4,35.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A92F33").s().p("ADHCCIjTg9QhdAIlBhsQAoh6BNhxQDoBYB0B1IDoBOQApBOBzAyQgsAoghA9IgKAVQhjg6gqhPg");
	this.shape_34.setTransform(35.5,19.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7E2326").s().p("ABNCFIjnhQQh1hzjohZQAmg3Aug1QBzA3BSAwQBSAwAhApIDqBrQArghBZgDQA0AIAggOQAggQAcgRQAZgVASgIQATgJAUALIAGAEQAOASgBAlQgCAigTAcQgVAbgcAeQgbAfhBACQg4ACAWA7QgoATgjAfQhzgygphNg");
	this.shape_35.setTransform(54.9,7.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABtD9IGIDHIjAGzQg3gMg0gNQgVgGgUgFQhEgTg9gUQnCiFgqjTQgqjSACjEQAAgVAAgTQACicABgQQACgVADgXQADgjAFgkQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIiYhJ");
	this.shape_36.setTransform(-26.7,-56.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#585858").s().p("AjzA4QgqjSACjDIABgpIAtgJQAnCXAiBqQAzCfANAPQANAPgFgBQgGgCBbAtQBbAtDIBUIgiC2QnDiFgqjTg");
	this.shape_37.setTransform(-48.4,-14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#424242").s().p("AEEHNQhEgSg9gUIAii1QjHhVhcgtQhbgsAGABQAFABgNgPQgOgPgyifQgihqgniXQAggHAggIQBvgfBlgxQgJDMgjDNQDpBlD4BLQgTAsgOAwQgdBlAGClIgpgLg");
	this.shape_38.setTransform(-36.5,-17.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("ADKNeQgFimAdhlQANgwAUgsQj4hLjphmQAijMAKjMQhmAxhvAfQggAIggAHIgtAJQACicABgQIAEgsIAJhHQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIGIDHIjAGzQg4gMgzgNgABtD9IiYhJg");
	this.shape_39.setTransform(-26.7,-56.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.instance},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

	// Layer 2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADVETQAmADA/AfIhKJUQg0AEg3AAQggAAgiAAQgRAAgRAAQgHAAgIAAQgNAAgOgBQg4gDhagOQg1gLgfAHQgeAHgng2Qgng1gIgiQgHgigLi/QgHiIAgkMQADgdAEggQgCgFALhKQgviZAvirQAvirA3h5QAohXAthNQBEgnBNgcQBxgnB2gGQBdBQAzBSQguFEhkExQAAABAAAAQgKA0AAAcQABAbADBuQADBUgNBagAhnFmQAMgCAQgIQAUgJAZgPQAwgeAXgIIAAAAQAYgIAfgDQAQgBApAAQAgABAcAA");
	this.shape_40.setTransform(-40.4,-69.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#585858").s().p("AAiGbQg0gLgfAHQgeAHgng2Qgmg2gIgiQgIgigLi/QgHiGAgkMIAEAAQBNAAA+gIQB0gQBUgwIgOBVQhXBXg+BsQgUAkgHAZQgIAXgCAVQBUgTAEgFQgxDsAsBwQAsBwBFAiQg5gEhagNg");
	this.shape_41.setTransform(-59.4,-21.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#424242").s().p("ACBHiIgbgBQhEgigshwQgshvAxjsQgEAFhUARQABgUAIgXQAJgYATglQA9hrBXhXIAOhVQhUAwhzAPQg/AJhNAAIgEAAIAIg9QAnAEBegRQBegRBfgfQBggeAxgdQgsB+gaCDQgtAjgmAtQgbAggWAkQgQAHgNADQANgDAQgHIgIAMQATgIAkgFQhMDVAtClQAsCmAxAQIgIABIgIgBgAAkhNIAAAAg");
	this.shape_42.setTransform(-51.6,-27.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAYOMIAiAAQgJADgIAAQgJAAgIgDgAA6OMIgiAAQgwgQgsimQgtimBMjWQgkAFgSAIIAHgMQAWgjAbghQAlgtAtgjQAaiDAsh8QgxAchfAeQhgAeheARQheARgngEQgCgFALhKQgviZAvirQAvirA3h5QAohYAthMQBEgoBNgbQBxgnB2gHQBdBRAzBSQguFDhkEyIgBABQgKA0ABAbIAECJQACBVgNBaQAmADA/AfIhJJUQg0AEg4AAIggAAIghAAgABXESQggADgXAHIgBABQgXAIgwAeQgYAPgUAJQAUgJAYgPQAwgeAXgIIABgBQAXgHAggDIA5gBIA7ABIg7gBIg5ABgAAYOMIAAAAg");
	this.shape_43.setTransform(-39.5,-69.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#0000FF").s().p("AgCMYQgsgCgigGIgwgJQgdgGgUABQgPAAgdAEIgKAAIACACIAJACIAAADQgBACgFAAIgDgBIgEgCQgEgCgDAAIgBgDIAEgCIABAAIABAAQgMgFgPgEIADAAIgOgSQgog1gNgeQgVgwgEhVQgFhVADhqQABg/AGh/QAGh+AKhEQAIgwALgXQgQBPgIBlQgEA9gEB6IgDBWQgFCVAHBKQAHBAAQAnQAQAmAnAxIAQAUQAJADAMgCIAcgEQAggEAyAKQBDANAPABQAUACAagBICsgCQAAADgDACQgDACgFAAIhfACIg6ABIgTAAgAhXDsIAFgDQAPgBARgJIAdgSQARgLAfgQQAbgNASgEQAPgDAfgCQAzgCAzAGIAFglQADgfADg+IAFhTQACgagBgMIgCglIgIhkQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQASgdARg9QAliFAbhnQAWhVAEgvQAAgLAGABQgCAxgWBWIgwC2QgaBggXAyIgCAEIABADIAIBkIACAnIgBAmIgCAvIgHBoIgHA7IgDABQAWADAXAFQAAABABAAQAAABAAAAQgBABAAAAQgBABgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQhLgNhJADQgbABgQAEQgRAFgVAKQgWALgcARIghATQgUAKgRAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAgAlMjAIgHhLQgHiBAtiPQAkhwBKiMQgHAYgNAeIgZA1QhtDkAMDEQABAUAFArQAFApABAWQABAOgIACQABgcgFgug");
	this.shape_44.setTransform(-42.2,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},5).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-146,152,292);


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
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("AmAjNQgBi+Aei9QA8gjBPgLQA6gIBGAFQDEDPBaC0QBCCDArBuQARApANAnQAEANAEAMQAoB/AABlQAAAEAAAEQgCBZg+BWQi6Dzi7jlQhdhzg3iLQhSjRhPjRQgMgdgLgdg");
	this.shape_12.setTransform(-6.6,-69.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AjUAYQhMiwAdirQDDgKD9BXQARArANAnIAJAZIklhiQAMAEhOgTQhPgTgDAxQgDAyAtBxQAtBwB4CSQB4CRCaj5QgDBZg+BWQhAA3g/AAQiTAAiNktg");
	this.shape_13.setTransform(5.1,-45.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgTINQhehzg2iLQhSjRhQjRIgXg6QgBi+Aei9QA9gjBOgLQA6gIBGAFQDEDPBbC1QBBCCArBuQj+hXjCAKQgdCpBMCxQDIGtDXi2QhfB9hhAAQhaAAhahvg");
	this.shape_14.setTransform(-9.9,-69.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#585858").s().p("AggDKQh5iSgthwQgthxADgyQADgxBPATQBPATgMgEIEkBiQAoB+AABkIAAAIQhhCdhUAAQgxAAgrg1g");
	this.shape_15.setTransform(7.8,-45.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGCgEQgLBfhRBeQheBriVgTQiVgUhugZQhIgQgegIQgQgEgFgCIgpkSIgGgoIgHgsIFAhbIBdgOIBWgK");
	this.shape_16.setTransform(-6.8,-33.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#585858").s().p("AAtERQiVgUhugZIhmgYIgVgGIgpkSIElARQDLgugKiqQDQAeA/DxQgKBfhRBeQhQBbh3AAQgVAAgXgDg");
	this.shape_17.setTransform(-6.2,-33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AjOAeIE/haIBegNQAFBMh0BEIknADg");
	this.shape_18.setTransform(-24.7,-52.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#424242").s().p("AjwBbIgGgpIEogDQBzhDgFhNIBWgKQAKCpjLAug");
	this.shape_19.setTransform(-20,-50.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACJkbIg8ABQgpARglA0AiIBCQAcBLApA2QAMAQALAMQAdAfAXAMQAOAKAOAI");
	this.shape_20.setTransform(-5.3,-40.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AkOETIAfgHIAcgLQAPgEAOgHIAbgNIgmguQg4hHgYhWQgXhXAWhXQAYhZBRg7IEcgWQgIAfACAjQACAxAVAwQAgBLBWBTQATATARANQhyBvhDAoIhjA8Ig6AnQgcASg+AHIgOABQgxAAhBgog");
	this.shape_21.setTransform(25.3,-39.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#424242").s().p("AgsEKQgYgMgcgfQAagCAbgGQAZgHAWgJQgYgngVgoQgnhNAGhWQAGhXAlhPIgFgDQgJgCgJACIABgBQAlg0AogRIA8gBQhRA7gXBZQgXBXAYBXQAWBWA5BHIAlAuIgaANQgOAHgPAEIgdALIgdAHIgcgSg");
	this.shape_22.setTransform(0,-40.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#585858").s().p("AgbC/Qgqg2gbhMICFkVQAJgDAJADIAGACQglBPgHBYQgFBVAnBOQAVAnAZAnQgYAJgYAHQgbAHgaABQgLgMgMgPg");
	this.shape_23.setTransform(-9.3,-40.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,0,0,3,true).p("AgJj3QAKAJALALQgJAMgHAPQgnBMAFBRQAFBPAOBDQAKAvAmADQARACAWgHQBKgVgBg0QAAgcAFgfQAEgYAHgcQACAYAIAVQANAmAAAtQAAAfAoACQARABAYgEQATgEAOgGACSAQQACAFADAGAiBhyQgZAwg4AEAhNjWQgXAlgbA6QgBACgBADQBTCHAUBfQAUBggkAaQglAbgvgvQgvgug2AAQgnAAgdAUAAhCeQgCgCgCgDADcCDQAAgDAAgDAEFCIQgCADgCAE");
	this.shape_24.setTransform(-56.4,-31.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0000FF").ss(1,1,1,3,true).p("AAGACQgGgCgFgB");
	this.shape_25.setTransform(-56.7,-56.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgbFEQgjAQgsAJQg2AMgrgEQgygFgxgcQgwgbgjgYQgjgXhNglQhNgkAkgpQALgMAMgJAADkzQgDgLgEgKQgagthFAJQgbADgXAKQgiAQgYAfACsj+Qg9g1haAAQgJAAgJAAQhJBnAIBbAmuiLQgFAAgGAAQhEgBAEgxQAEgyAyg/QAyg+A9gFQAzgEA8AxADDhRIgXitQCpg7CrDNQB0D1jvCUQhyBHhkAMQhIAIhAgVQgigLgggUADMgNIgJhEQBKAfAyBRABKAjQAugVgEgyQgGhDABgQQACgQAOg4ABBD5QgvgSgjg0QgJgOgJgQQgIgPgIgSAE2CaQgCADgBACQgQAXgTARQg3AzhUAIQgWACgUgDQgNgDgNgFQgPAVgUARQgZAWggAP");
	this.shape_26.setTransform(-34.4,-24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DC3D42").s().p("AAWFpQA6gzAshLQAbgrgFgiIAEgFIgEAFQgPAXgTASQg3AzhUAHQgVACgUgDQgQgMgPgYQgZgtgGgjQgIgqAQghQAIgEAIgFQAMgKAJgMQgOAGgTAEQgYAEgRAAQAAglgJhAQgKhIgBgjQAAg8ATgwQAJgWANgSQBaAAA8A1IAXCtQBKAfAyBRQgyhRhKgfIgXitQCpg6CrDMQB0D2jvCTQhyBHhlAMIAIgGgAhVAiQAqgTAAgrIgBgJQgEg2AAgVIAAgIQACgQAOg4QgOA4gCAQIAAAIQAAAVAEA2IABAJQAAArgqATgAAsgOIgJhEgAleBLQgJgOgGgUQgEgOgFgcQgNhPgCgtQgChEASg0QANgkAaglIAZghQAWgKAbgEQBGgIAaAsQgRARgPATQg1BAgGA3QgHA1AdA8QgFAfAAAcQABAzhKAVQgSAGgOAAIgHgBg");
	this.shape_27.setTransform(-18.4,-23.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7E2326").s().p("ABeE4QAhgPAZgVQAUgRAPgVQAMAEAOADQAUADAVgCQBVgHA3gzQgGAMgIALQgSAYgdAPQgvAZhHgFQgUAqgiAfQgjgLgggUgACAD5QgVghgDgxQAkA1AvASQgPAVgUARQgLgKgNgRgAC7DuIAAAAgAjPC1QgWgLgqgcQgwgeg7gHIgPgBQAdgVAnAAQA2AAAvAvQAvAuAlgbQAkgagUhfQgUhehTiJIACgFQAbg6AXglQgXAlgbA6IgCAFQgZAwg4AEQAQgLANgMQAXgXAcgsQAXgjAGgSIAEgPQADgIAEgFQAPgXAeADQAOAAAWAGIAWAVQgJAMgIAOQgnBMAFBRQAFBQAOBCQAKAvAnADQARACAWgHQBJgVgBgzQAAgcAFgfQAEgZAHgcQACAYAIAWQANAmAAAsQAAAgAoACQARAAAYgEQATgEAOgGQgJAMgMAKQgIAFgIAEIAEgHIgEAHQgOAHgOABQgPABgegEQgdgEgPADQgVADgkAWQglAWgVADQgMAggNATQgSAZgZAIQgJADgKAAQgWAAgZgOgAhABFIgEgFIAEAFgAB6AqIAAgFIAAAFgAA1g9IgFgLIAFALgACfA2IAAAAg");
	this.shape_28.setTransform(-46.6,-22.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A92F33").s().p("AChFjQAigfATgqQBHAFAwgZQAcgPASgYQAJgLAGgNQATgRAPgXQAFAhgcAsQgrBLg7AzIgHAGQgUACgUAAQgxAAgugPgAhRFlQgzgFgwgcQgxgbgjgYQgjgXhMglQhNgkAkgpQALgMAMgJIAOACQA7AHAxAeQAqAcAVALQAlATAegIQAZgIASgZQANgTALggQAWgDAlgWQAkgWAVgDQAPgDAcAEQAfAEAOgBQAPgCAOgGQgQAhAHAqQAGAjAaAtQAPAYAPAMQgNgDgMgFQgvgSgkg0QgKgOgIgQQgJgPgIgSQAIASAJAPQAIAQAKAOQADAxAVAhQANARALAJQgaAWggAPQgkAQgsAJQgmAJgiAAIgXgBgAh1AaQgPhCgEhQQgFhRAnhMQAHgPAKgMQAXgfAjgQIgaAiQgZAlgNAkQgTA0ADBEQABAtAOBPQAFAcAEAOQAGAUAJAOQgngDgKgvgABSAPQAAgsgOgmQgHgWgCgYIgBgSQAAhTBDhdQhDBdAABTIABASQgIAcgDAZQgdg8AGg1QAGg3A1hAQAQgTAQgRQAFAKAEALIARAAQgMASgJAWQgTAwAAA8QAAAjAKBIQAJBAABAkQgogCAAgfgAA7hxIAAAAgAlAiLQhEgBAEgxQAEgyAyg/QAyg+A9gFQA0gEA7AxQgVgGgPAAQgegDgPAXQgDAFgDAIIgFAPQgGASgXAjQgbAsgYAXQgMAMgQALIgKAAIgCAAg");
	this.shape_29.setTransform(-46.5,-24);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,0,0,3,true).p("AkxheQBIiZBrgsQAQgHARgEQAXgGAgAAQAXAAAbACAEygHQgzD4ktBE");
	this.shape_30.setTransform(1.3,-33.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AhZAxQBIiZBrgsIgIAKQgaAegPAcQgQAdgUBAQgZBSgEAyIgBAEg");
	this.shape_31.setTransform(-20.3,-48);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#424242").s().p("AhlBLIABgDQAEgzAahRQAUhBAQgcQAPgdAZgeIAIgJQAQgHARgEQAWgGAhAAQg9CJgXCVQgQBgABBfg");
	this.shape_32.setTransform(-12.7,-40.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#585858").s().p("AjcCpQgBhfAPhfQAXiWA9iJQAXAAAcACIElErQgzD4ktBEg");
	this.shape_33.setTransform(9.8,-33.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,0,0,3,true).p("ACMjiQAVAWASAXQAdAkAYAkQBkCXBBAsQAcASAYAQQACACACACQAOAKARAOQALAJALALQAhAfAhAsQARAWA0BNQgPAbgRAYQgeAtgjAkQiqCskQgwQgshSgUhCQgIgZgEgXQgCgMgBgLQAAgBgCgaQgBgHAAgJQgCgbgDgSQgHgkgTgsQgNgagXg7QgLABgLAAQgogBgxg1Qgxg1gBg/QgbgGgpgDQgogCgjANQgkANgbAUQgRAMgRAFQgKAEgJAAQgaABgUgcQgUgdAJgeQAIgTAWgaQAVgWAYgXQAXgTARgLACMjiQhFh0gnh/QgGgWgXgIQhKgWgLBSQhuh/gygVQg3gXhJACQg4AAglAKQglAJgNAPQgMAOgGAZQgGAUAGAVQABAEACAEQAJAZARAGQARAFAcgDQAdgDAigCQALgBAOADQAfAIAvAdQBEAqAyBMQhsgchRgOQgrgGgaAEQgYAFgdATQgRALghAWQgSAMgoAUQghAUgLAZQgGAQACARQACAJAEAJQALAbAYAIQAZAIAegLQAVgJAcgVQAegUAVgIQATgHAQAAQAJgGAUgFQAGgBAHgCQAHgBAIgBQAagCAjAGQAtAIA9AWACMjiQhQhZh1hfQgNgPgMgOAh+khQgGgBgFgCQgSgFgSgEAiggdQgXgJgZgFAAIB0QgNAEgPADQgNACgOAB");
	this.shape_34.setTransform(-58.3,-78.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC3D42").s().p("ACWGsQgshSgUhCQgHgZgEgXIgEgXIgCgbIgBgQQgBgbgDgSQgIgkgUgsQgMgagXg6IAbgDQAOgDAOgEQgOAEgOADIgbADIgVABQgogBgxg1Qgxg1gChAQAZAFAYAJQgYgJgZgFQgbgGgogDQgogCgkANQgjANgbAUQgSANgQAFQgKAEgKAAQgaABgUgdQgUgdAKgeQAHgTAXgaQAVgWAYgXQAWgTASgLQAJgGAUgFIANgDIAPgCIANAAIAAAAIABAAQASAAAWADIADABIACAAIACAAQAtAIA9AWQg9gWgtgIIgCAAIgCAAIgDgBQgWgDgSAAIgBAAIAAAAIgNAAIgPACIgNADQgUAFgJAGQgRAAgTAHQgUAIgeAUQgcAVgWAJQgeALgYgIQgYgIgMgbQgEgJgBgJQBzg+CFgWIArgGQClAkBVAgQCRA2BWBXQAaAaAkAuQAxA+ALAMQB3CBA5BCQBVBlAcBbQiECHjEAAQg2AAg8gLg");
	this.shape_35.setTransform(-63.1,-61.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A92F33").s().p("AG+ElQg4hDh4iBQgLgNgwg+QgkgsgagaQhXhYiRg2QhVgfikgkIgrAFQiFAWh0A+QgCgRAGgQQALgZAhgUQAogUASgLIAyghQAdgTAYgGQAagEArAHQBRAOBsAbQgyhMhEgqQgvgcgegIQgPgEgKABIg/AGQgdACgRgFQgRgFgJgZIgDgIQCagGCYA6QC7BIB9CSQAgAlBXB+QBIBnA3AzQAcAbA7AuQA9AxAaAXQBTBNAUBOQgfAtgjAjQgdhbhVhkgAh5kZIALADIgLgDIgkgKIAkAKg");
	this.shape_36.setTransform(-59.9,-79.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#7E2326").s().p("AHGFbQgagYg9gwQg7gvgcgaQg3g0hIhnQhXh9gggmQh9iSi7hHQiYg6iaAFQgGgVAGgVQAGgYANgOQAMgPAlgJQAlgKA4AAQBJgCA4AXQAxAUBuCAIAZAdQB1BfBQBZQAVAWASAWQAdAlAYAkQBkCXBBAsIA0AiIAFADQAOAKARAPIAVATQAhAgAhAsQARAWA0BNQgPAbgQAYQgUhOhThMgABXh2IAAAAgAhukuIgZgdQALhSBLAWQAXAIAGAWQAmB/BFB0QhQhZh1hfg");
	this.shape_37.setTransform(-53,-89.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,0,0,3,true).p("AiQFJQhah5g0iOQgziOgIiVAA7mJQB8BiBLCQQBMCQALCcQAFBIgRA4QgVBDgyAdQgWANgcAEQgcAEg3gCQg3gCgZAAQgZgBhagG");
	this.shape_38.setTransform(-13.7,-11.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#585858").s().p("ACBGJIhQgDIhzgGIhOg2Qhah5g0iPQgziNgIiWIGUinQB8BhBLCQQBMCRALCcQAFBIgRA3QgVBDgyAeQgWAMgcAEQgTADghAAIgfAAg");
	this.shape_39.setTransform(-13.7,-11.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlXicQABAAAAgBQDnhUCXg+QCYg/AjgLQAABVAIAzQAJAzAhAoQALALAnAoQAHAIAIAHQABAAABACQlVEtkwCg");
	this.shape_40.setTransform(45.3,-92);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#424242").s().p("AmACPQEKhgCLhHQCMhIDEiMIAyAzIAPAPQlJDmoCCxg");
	this.shape_41.setTransform(37.3,-83.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AlqDaIg8gwQICixFJjmIACABQlVEtkvCgQggANgfAAQgnAAgngUg");
	this.shape_42.setTransform(37.4,-76.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#585858").s().p("AlhDoIBok5IACgBQDnhUCWg+QCYg/AjgMQABBWAIAzQAIAzAhAoQjECLiMBIQiLBIkKBgg");
	this.shape_43.setTransform(35.9,-99.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1,3,true).p("AqJoGQCGhhCjhDQB9gsBJgVQBJgVBUAOQCGAkBsEUQBtEVAkCEQAYAyAWAuQAVAvASAkQAiA4AbAxQBOCOAZBXQADALACAKQAaBzhdBHQhEAzhQARQgTAEgTABQgKAAgJgBQkWggi3kmQi4kmiCjWQiCjXh0jkg");
	this.shape_44.setTransform(-12.9,-69.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#585858").s().p("AjNAkIgZgcQgRheFmilIAHABQBOCNAZBXIAFAWQAaByhdBGQhEA0hQAQg");
	this.shape_45.setTransform(28.9,-18.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#424242").s().p("AC2GHIgfgbQhFg6gpgmQg6g2gqgzQgigngegrIgOgXQAvi3F4hgQAiA4AbAxIgHAAQlnCkASBeIAYAcIDZDYQgTAEgTACIgUgBgAlamHQAHAIAIAIIgBAAQgHAAgHgQg");
	this.shape_46.setTransform(6,-32.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgCGyQi3kmiDjWQiCjXh0jlQCGhgCjhEQB9grBJgVQBIgVBWANQCFAlBsEUQBtEUAkCFIAuBgQAVAuASAlQl5BfgvC4IAPAXQAdArAiAnQArAzA6A2QApAnBFA5IAgAcQkWggi3kmgAg3gGQgIgIgHgJQAIASAHgBg");
	this.shape_47.setTransform(-21.6,-69.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlshHQAOgSAPgRQAkglAugdQBzhIBQgyQBRgxAbgQQAOgIAEgCIEpEoQhQCQhSByQgOAYgmAwQglAwhWBB");
	this.shape_48.setTransform(27.8,-79.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#585858").s().p("Aj7h6IAugnQASATAXATQBuBZCTARQBQAIBQgNQgPAXgmAwQglAwhWBBQjmiChiiag");
	this.shape_49.setTransform(22.8,-58.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#424242").s().p("AAsEWQiUgQhuhZQgXgTgSgUIguAnQgohBgShHIgFgUIAegiQAjgmAugdIDDh5IBrhBIATgLIEoEoQhQCRhRBxQgxAJgxAAQgeAAgfgEg");
	this.shape_50.setTransform(27.8,-88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:0,rotation:0,x:17.6,y:74,startPosition:0,regX:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:0.2,rotation:-116,x:102.5,y:-68.3,startPosition:1,regX:0,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance,p:{regY:0.3,rotation:106,x:-86.2,y:-45.7,startPosition:4,regX:-0.1,scaleX:1.05,scaleY:1.05}}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance,p:{regY:0.3,rotation:-113.4,x:46.8,y:-49,startPosition:7,regX:0,scaleX:1.05,scaleY:1.05}}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.instance,p:{regY:0.2,rotation:-116,x:89.4,y:-122.6,startPosition:8,regX:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.instance,p:{regY:0.2,rotation:-116,x:89.4,y:-122.6,startPosition:9,regX:0,scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-137.7,92.4,275.4);


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
p.nominalBounds = new cjs.Rectangle(-101.2,-102.2,202,203);


(lib.inventory = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// item3
	this.instance = new lib.gpsDevice1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-111.9,-84.9,0.22,0.22,-6.4,0,0,0.3,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-1.9},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(36));

	// item2
	this.instance_1 = new lib.repellentgfx("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-112.6,-165.4,0.275,0.275,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-2.9},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box
	this.instance_2 = new lib.inv_box("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110.4,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-0.4},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box
	this.instance_3 = new lib.inv_box("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-110.4,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-0.4},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box
	this.instance_4 = new lib.inv_box("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-0.4},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box
	this.instance_5 = new lib.inv_box("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-110.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-0.4},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box
	this.instance_6 = new lib.inv_box("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-110.4,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(5).to({startPosition:2},0).to({_off:true},6).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box
	this.instance_7 = new lib.inv_box("single",1);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-110.4,-168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-0.4},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

	// inv_box_bg
	this.instance_8 = new lib.inv_box_bg("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-109,0,1,1,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:1},19,cjs.Ease.get(0.5)).to({_off:true},11).wait(29).to({_off:false},0).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-220,113,522);


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
	this.instance.setTransform(141.5,-13);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.5,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-262.5,-43.6,468.1,119.1);


(lib.db_face2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:1.8,y:-5.1}).wait(4));

	// Layer 3
	this.instance = new lib.shade_lines("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.3,-56.7,2.827,2.827,0,0,0,-0.3,0.3);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance.cache(-242,-118,485,235);

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


(lib.db_face1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");
	var mask_graphics_1 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:1.8,y:-5.1}).wait(3));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-0.3,regY:0.3,scaleX:2.83,scaleY:2.83,skewY:0,x:-6.3,y:-56.7},0).to({_off:true},1).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#999999","#1E1E1E"],[0.435,0.545,0.702],-10.2,-14.8,0,-10.2,-14.8,92.2).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.instance_1 = new lib.screen_color();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1.8,-5.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,204,1)",0,0,50);
	this.instance_1.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance_1.cache(-386,-287,771,574);

	this.instance_2 = new lib.db_feature("single",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-4.1,0);
	this.instance_2.alpha = 0.898;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-10.2,-14.8,0,-10.2,-14.8,99.5).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.instance_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#333333").ss(5,1,0,3).p("EAzagnfUg1ggJegwnAIZUgKWAjCABPAwpUA7GACzA7FgCzUAFSg1SgMPgdUg");
	this.shape_2.setTransform(1.8,-5.1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-40.3,110.1,80.6);


(lib.db_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");
	var mask_graphics_4 = new cjs.Graphics().p("Eg70ArHUgBPgwpAKWgjCUAwngIZA1gAJeUAMPAdUgFSA1SQ9jBa9iAAQ9jAA9jhag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:1.8,y:-5.1}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_4,x:1.8,y:-5.1}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 3
	this.instance = new lib.shade_lines("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-6.3,-56.7,2.827,2.827,0,0,0,-0.3,0.3);
	this.instance._off = true;
	this.instance.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance.cache(-242,-118,485,235);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(4));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:0}}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:1}}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_1,p:{startPosition:4}}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#333333").ss(5,1,0,3).p("EAzagnfUg1ggJegwnAIZUgKWAjCABPAwpUA7GACzA7FgCzUAFSg1SgMPgdUg");
	this.shape_1.setTransform(1.8,-5.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

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


(lib.btnC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.gpsDevice1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-0.3,0.22,0.22,-6.4,0,0,0.3,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AlREyIAApjIKiAAIAAJjg");
	this.shape.setTransform(-1.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:-0.2,scaleX:0.22,scaleY:0.22,rotation:-6.4}}]}).to({state:[{t:this.instance,p:{regY:-0.4,scaleX:0.25,scaleY:0.25,rotation:-6.3}}]},1).to({state:[{t:this.instance,p:{regY:-0.2,scaleX:0.22,scaleY:0.22,rotation:-6.4}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.4,-29.7,66.9,59.6);


(lib.tapirhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.T_features("single",0);
	this.instance.parent = this;
	this.instance.setTransform(11.2,-10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,startPosition:1},0).to({_off:true},1).wait(5).to({_off:false,startPosition:7},0).wait(1).to({startPosition:8},0).wait(1));

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

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFipVQBuguA+guQACgCADgCQATgOAVgLQAUgKAOAHQAOAHAIASQAHARABAPQAAAHAAAIQgDA4gaBIQgbBIg2ALQgjAHghADAj3p5QATgMAVgKQAJgEAKgEQAQgFASgEQA5gLBLAFQAWABAUACQBTAGBBAJQBEAJA/AYQAbAKAZASAFipVQAYAVATAaQACACACACQAWAeAPAjQAMAaAHAbQANApAEArQAEAkABAkQAFBKAFB0QANEaDOClQh+E9lTA6QgVAEgVAFQmrgNlxi4Qgzhsg9hqQCFjkA2itQAKggAKggQAehlAehsQAVg/Afg5QANgYAPgYAFfpXQABABACABAIvp2QhPA/hPAVAj3p5QhvgxhRg5QgPgJgFAAQgagBgOANQgWASACAqQAAAWAFAWQAEAVAIAVQARAqAWAQQAVAUA8AGQAJABANABQAWgjAZggQAHgKAJgJAmgqnQAqAwBNApQAWgZAcgS");
	this.shape_6.setTransform(25.5,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7A89A7").s().p("An4IoQgzhsg9hqQCEjkA3itQACALAFALQAOAeAeAVQAMAKArAaQAkAWBWAmQBYAlA9gvQAvg9AvhOQAwhOBDhAQATgSAOACQAQAAAUAZQA1BNAMB2QAIBOgKCKQgLCWgHBTQgEAiAYD3QmqgNlxi4gAldlQQAVg/Afg5QANgYAPgYQAVgjAaggIAQgTQhNgpgqgwQgZgbgMAEQgWAFgSAWQgSAVgDAWQgFgWAAgWQgCgqAVgSQAPgNAaABQAFAAAPAJQBRA5BvAxQASgMAWgKIATgIQAQgFASgEQA5gLBKAFIAqADQguAygZA9QgPAiAJATQADAIALAIIAPANQARARAEAYQADAZgKAVQhdAThOBBQhOBCgkBcQgXACgkgCQgtgEgPAAQggABgaANQgOAHgJAJIA8jRgAjOpOQAWgZAcgSQgcASgWAZgAG8pVQBvguA+guIgPAeQgGAMgVAZQgWAZgLAIIgcAVIgaASQgTgagZgVg");
	this.shape_7.setTransform(16.4,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#545E73").s().p("ABXHIQAHhTALiWQAKiKgIhOQgMh2g1hNQgUgZgQAAQgNgCgTASQhDBAgwBOQgwBOgvA9Qg9AvhYglQhWgmgkgWQgrgagMgJQgegWgOgeQgFgLgCgLIAUhAQAJgJAOgHQAagNAggBQAPAAAtAEQAkACAXgCQAkhcBNhCQBPhBBegTQAKgVgDgZQgEgYgRgRIgPgNQgLgIgDgIQgJgTAPgiQAZg9AugyQBTAGBBAJQBEAJA+AYQAcAKAZASIAAAAIACACQAZAVATAaIAagSIAcgVQALgIAWgZQAVgZAGgMIAPgeIAFgEQATgOAUgLQAVgKANAHQAPAHAHASQAIARABAPIAAAPQgDA4gbBIQgbBIg2ALQgiAHghADQgIgbgLgaQgPgjgXgeQBQgVBPg/QhPA/hQAVIgDgEIADAEQAXAeAPAjQALAaAIAbQAMApAFArQAEAkABAkQAFBKAFB0QANEaDNClQh+E9lSA6IgrAJQgYj3AEgigAncoGQg7gGgVgUQgWgQgRgqQgIgVgEgVQADgWASgVQASgWAWgFQAMgEAZAbQAqAwBNApIgQATQgaAggVAjIgXgCgAEzouIAAAAg");
	this.shape_8.setTransform(34.8,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-79,168.7,158.1);


(lib.TAPIR_HERO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.T_shoulderPad_R("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-121.3,10,1,1,6.2,0,0,-0.1,-0.1);

	this.instance_1 = new lib.T_Arm_R("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-112.7,-1.6,1,1,-8.2,0,0,-34,-140.2);

	this.instance_2 = new lib.T_Arm_L("single",14);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-123.9,-176,1,1,0,87.2,-92.8,-14.6,-117.2);

	this.instance_3 = new lib.tapir_spacehelmet("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-29.5,-269.4,1,1,0,-0.7,179.3,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{rotation:-8.2,x:-112.7,y:-1.6,startPosition:4,regY:-140.2}},{t:this.instance,p:{rotation:6.2,x:-121.3,y:10,regX:-0.1,regY:-0.1}}]},8).to({state:[{t:this.instance_1,p:{rotation:-15.4,x:-136.5,y:2.5,startPosition:6,regY:-140.2}},{t:this.instance,p:{rotation:-1,x:-145.1,y:16.3,regX:-0.1,regY:-0.1}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{rotation:-15.4,x:-136.5,y:2.5,startPosition:6,regY:-140.2}},{t:this.instance,p:{rotation:-1,x:-145.1,y:16.3,regX:-0.1,regY:-0.1}}]},2).to({state:[{t:this.instance_1,p:{rotation:19.5,x:-135.8,y:-219.5,startPosition:4,regY:-140.1}},{t:this.instance,p:{rotation:12.2,x:-145.6,y:-208.8,regX:-0.2,regY:0.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:17.5,x:-132.2,y:1.8,startPosition:0,regY:-140.1}},{t:this.instance,p:{rotation:10.2,x:-145.4,y:10.4,regX:-0.2,regY:0.1}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	// Layer_4
	this.instance_4 = new lib.T_Arm_L("single",5);
	this.instance_4.parent = this;
	this.instance_4.setTransform(82.4,69.2,1,1,6.7,0,0,-14.8,-117.3);

	this.instance_5 = new lib.T_shoulderPad_R("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(99.8,-151.1,1,1,0,-0.7,179.3,-0.1,-0.1);

	this.instance_6 = new lib.T_Arm_R("single",5);
	this.instance_6.parent = this;
	this.instance_6.setTransform(95.8,-167.4,1,1,0,-0.7,179.3,-33.8,-140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4,p:{regX:-14.8,regY:-117.3,rotation:6.7,x:82.4,y:69.2,startPosition:5}}]},8).to({state:[{t:this.instance_4,p:{regX:0,regY:0,rotation:0,x:120.8,y:83.4,startPosition:10}}]},1).to({state:[]},1).to({state:[{t:this.instance_4,p:{regX:0,regY:0,rotation:25.4,x:88.1,y:97.8,startPosition:9}}]},2).to({state:[{t:this.instance_4,p:{regX:-14.8,regY:-117.2,rotation:-24.2,x:32.7,y:-126.9,startPosition:11}}]},1).to({state:[]},1).to({state:[{t:this.instance_6,p:{regX:-33.8,skewX:-0.7,skewY:179.3,x:95.8,y:-167.4,startPosition:5}},{t:this.instance_5,p:{skewX:-0.7,skewY:179.3,x:99.8,y:-151.1}}]},1).to({state:[{t:this.instance_6,p:{regX:-33.9,skewX:-8,skewY:172,x:93,y:-170.2,startPosition:0}},{t:this.instance_5,p:{skewX:-6.2,skewY:173.8,x:94.1,y:-162.5}}]},1).wait(1));

	// tapir body
	this.instance_7 = new lib.tapir_spacehelmet("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(15.5,-79,1,1,9.2,0,0,0.1,-0.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.T_shoulderPad_L("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-114.8,-211.4,1,0.779,0,66,-114,0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},8).to({state:[{t:this.instance_7}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({_off:false},0).wait(1).to({regY:-0.2,rotation:-0.5,x:-22.5,y:-94.4},0).to({_off:true},1).wait(2).to({_off:false},0).wait(1).to({regX:-0.1,regY:-0.3,rotation:4.2,x:-9.3,y:-302},0).wait(1).to({regX:0,regY:-0.2,rotation:2.2,x:-12.3,y:-87.5},0).to({_off:true},1).wait(2));

	// Layer_6
	this.instance_9 = new lib.T_shoulderPad_L("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(85.1,39.8,1,1,-1.3,0,0,0,-0.1);
	this.instance_9._off = true;

	this.instance_10 = new lib.T_Body("single",1);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-8.1,-98.8,1,1,0,-0.7,179.3,0,0.1);

	this.instance_11 = new lib.T_Legs("single",3);
	this.instance_11.parent = this;
	this.instance_11.setTransform(3.8,-18.4,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},8).to({state:[{t:this.instance_9}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_11},{t:this.instance_10}]},1).to({state:[{t:this.instance_11},{t:this.instance_10}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).wait(1).to({regX:0.1,rotation:-28.5,x:69.1,y:-1.4},0).to({_off:true},1).wait(2).to({_off:false,regX:0,regY:0,rotation:-30.5,x:67.8,y:-3.3},0).wait(1).to({rotation:-6.3,x:70.5,y:-189.5},0).wait(1).to({rotation:-8.3,x:71.3,y:22.1},0).to({_off:true},1).wait(2));

	// tapir head
	this.instance_12 = new lib.T_Body("single",1);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-43.4,76.6,1.004,0.978,0,13.7,8.8,0,0.1);

	this.instance_13 = new lib.T_Legs("single",1);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-50,141.7,1,1,0,0,0,16.9,-193.8);

	this.instance_14 = new lib.tapirhead("single",11);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-33.2,-254.5,1,1,-5.2,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13,p:{x:-50,y:141.7,startPosition:1}},{t:this.instance_12,p:{regX:0,skewX:13.7,skewY:8.8,x:-43.4,y:76.6,regY:0.1}}]},8).to({state:[{t:this.instance_13,p:{x:-50,y:141.7,startPosition:1}},{t:this.instance_12,p:{regX:-0.1,skewX:6.5,skewY:1.5,x:-58,y:71.4,regY:0.1}}]},1).to({state:[]},1).to({state:[{t:this.instance_13,p:{x:-50,y:141.7,startPosition:1}},{t:this.instance_12,p:{regX:-0.1,skewX:6.5,skewY:1.5,x:-58,y:71.4,regY:0.1}}]},2).to({state:[{t:this.instance_13,p:{x:-46.6,y:-32.2,startPosition:0}},{t:this.instance_12,p:{regX:0.1,skewX:8.7,skewY:3.8,x:-54.3,y:-141.6,regY:0.2}}]},1).to({state:[{t:this.instance_13,p:{x:-50,y:141.7,startPosition:1}},{t:this.instance_12,p:{regX:0,skewX:6.7,skewY:1.8,x:-51.8,y:74.2,regY:0.1}}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// Layer_9
	this.instance_15 = new lib.T_Arm_L("single",4);
	this.instance_15.parent = this;
	this.instance_15.setTransform(81.2,57.4,1.101,1.06,6.7,0,0,-14.8,-117.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({_off:false},0).wait(1).to({regY:-117.1,scaleX:1.1,rotation:-18.5,x:45.6,y:2.2},0).to({_off:true},1).wait(2).to({_off:false,regY:-117.2,rotation:-24.5,x:53.4,y:-8},0).wait(1).to({regX:-14.6,rotation:8.5,x:56.6,y:-192},0).wait(1).to({regX:-14.8,scaleX:1,scaleY:1,rotation:-11.2,x:50.5,y:7.3,startPosition:1},0).wait(1).to({regX:-14.7,regY:-117.3,rotation:0,skewX:71.2,skewY:-108.8,x:-75,y:-191.7,startPosition:12},0).wait(1).to({startPosition:12},0).wait(1));

	// tapir body
	this.instance_16 = new lib.tapirhead("single",2);
	this.instance_16.parent = this;
	this.instance_16.setTransform(17,-63.9,1,1,0,13.7,-166.3,-0.2,-0.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(8).to({_off:false},0).wait(1).to({regX:-0.3,regY:-0.2,skewX:4,skewY:-176,x:-18.4,y:-79.7,startPosition:10},0).to({_off:true},1).wait(2).to({_off:false,startPosition:2},0).wait(1).to({regX:-0.1,regY:-0.1,skewX:8.7,skewY:-171.3,x:-6.4,y:-286.9,startPosition:4},0).wait(1).to({skewX:6.7,skewY:-173.3,x:-9,y:-72.6},0).to({_off:true},1).wait(2));

	// T_Legs
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],9.6,-36.7,0,9.6,-36.7,300.2).s().p("Ax2HvIgFAAIgBAAIhRgDIgugDQingOjigtQhegUg5gdQhQgpgihHQgUgqgDgvQgBggAGgiQAIguAVgmQAPgcAVgXQArgxBGgjQArgWBZgfQgng9A2hCQAxg7BNgVQHgiBITAAQBTAABTAEQHCAQHIBpIAEABQIXBgI6C8QBfAfAxAeQBLArAdA+QARAlAAAlQAABThVBNQhpBfijAiQklA7o7gaQn8gXzKAkQhBAEhGAAIgNAAg");
	this.shape.setTransform(-51.9,350.8);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-14.8,-40.4,0,-14.8,-40.4,285.4).s().p("AyTHxQjCgEkMgiQhzgPhEgcQhhgngmhJQgmhJAZhbQAOgxAcgpQAUgeAdgZQA4g0BXgmQA1gYBugjQgsg+BGhEQA9g9BcgVQJ6iWKUAWQHAAQGwBeIADAAQHiBRHmCbQBOAaApAYQA9AkAYA0QAtBmhlBjQhXBWiIAkQj8BBkxADQj1ADk+gnQkLgggpgEQiwgPiEAOQiAANjKA3Qj+BGhKAOQi5AljcAAIg2AAg");
	this.shape_1.setTransform(-0.1,351.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},8).to({state:[]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(8).to({_off:false},0).to({_off:true},2).wait(2).to({_off:false},0).wait(2).to({_off:true},1).wait(2));

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


(lib.DigiBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_13
	this.instance = new lib.scan_lit("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-141.1,-29.2,0.556,1.752,0,94,95.5,164.2,8.3);

	this.instance_1 = new lib.scan_lit("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(105,35.9,1,1,0,0,0,164.5,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},8).to({state:[]},1).wait(2));

	// Layer_4
	this.instance_2 = new lib.db_atL("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(72.3,-106);

	this.instance_3 = new lib.db_headlight("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(19,-141.2);

	this.instance_4 = new lib.DB_glass("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(11,-94);
	this.instance_4.alpha = 0.34;

	this.instance_5 = new lib.db_headf("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(5.2,-76.8);

	this.instance_6 = new lib.db_mon("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.5,-84.5);

	this.instance_7 = new lib.db_face1("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1.5,-84.5);
	this.instance_7.filters = [new cjs.ColorFilter(0.39, 0.39, 0.39, 1, 62.22, 124.44, 124.44, 0)];
	this.instance_7.cache(-57,-42,114,85);

	this.instance_8 = new lib.db_atR("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-43.7,-104.9);

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

	this.instance_9 = new lib.db_face2("single",4);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-4,-118.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("ACeiBQAHhCALhDIlPAAQgIA3gEA4QAAAGAAAGQgCAZgBAZQgBAgAAAhQAAAOAAAOQABAxADAyQABALABALQADArAGArQASAPAWALQA3AcA8gCQAZgBAagHQAMgDAMgFQAPgGAOgIQADgCAEgCQAGgEAHgEQAUgOAQgRQgDglgBglQgBgKAAgLQgBgrABgrQAAgOABgPQACg2AFg3QgxAPgyAEQhzAMhzgpACWAJQgcAKgdAGQgWAFgWACQhxAOhvgqACWBfQgbAMgaAJQgWAHgVAFQiBAghgg5");
	this.shape_9.setTransform(-9.9,-62.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#747474").s().p("Ag7CXQgWgMgSgOQgFgsgEgrIgBgVIADACIABAAIACABIABABQA7AgBGAAIAAAAIAAAAQAmAAAqgJIAIgCIgIACQgqAJgmAAIAAAAIAAAAQhGAAg7ggIgBgBIgCgBIgBAAIgDgCQgEgxgBgxIAHACQBQAdBQAAIABAAIAAAAQAcAAAcgDQgcADgcAAIAAAAIgBAAQhQAAhQgdIgHgCIAAgeIABhBQBTgDBJAjQAiAQAQAWQANASAEAjIACARQADAnAAAnQAABAgIA/QgZAHgbABIgIAAQg2AAg0gagAhtARIAAAAg");
	this.shape_10.setTransform(-16,-54.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("ABcBNQAVgFAWgIQgWAIgVAFQAAgngDgnIgCgRQAWgDAWgFQgWAFgWADQgEgjgNgSQgQgWgigQQhKgjhSADIADgxIAAgMIA6AAQA2ABAqAIQAzAKAZAWQAJAIAGAJQAIANAEAUIAFAkIACAxIAEBaIACB2QgOAIgPAGIgYAIQAIg/AAhAgAAvifQAZAAAZgCQgZACgZAAIgBAAIAAAAQhYAAhYgeIgDgBIADABQBYAeBYAAIAAAAIABAAg");
	this.shape_11.setTransform(-13.7,-57.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4C4C4C").s().p("ABfCDQAZgJAcgMQgcAMgZAJIgEhbQAcgGAdgKQgBArABArIAAAVQACAlACAlQgQARgUAOIgNAIIgGAEIgCh1gABbAoIgDgxIgEgjQgEgUgIgNQgGgKgJgIQAygEAxgPQgFA3gCA2IgBAdQgdAKgcAGIAAAAgACUAYIAAAAgAA5hfQgZgWgygJQgrgIg3gCIg5ABQAEg5AIg3IFPAAQgLBDgHBCQgxAPgyAEIAAAAgACchyIAAAAg");
	this.shape_12.setTransform(-9.7,-64.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("ACDnYQgHAIgUgCQgNgBgOgGQgIgDgHgDQgFgDgFgCQgPgJgIgKQgLgNAGgHQACgDAEgBQAHgDANABQAGABAHACQAOADAPAHQAWALALANQAGAHABAGQABAEgCADgABKnTQgFASgFASQgxCzgHCpQgCA/ADA9QANDyBKD3IjAgYQhdmICZmQQAghWArhWQAFgKAFgJ");
	this.shape_13.setTransform(-49.2,-139.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F5D802").s().p("AhCg3QAhhVArhWIAQASQAEAFAEAEQgwCzgGCoQghBKgWBMQgQivAZiygAAgkOQgegSAAgCQAAgDgCgDQAHgDAOACIAMACIANAHQAXAQANAVQgcgFgWgOg");
	this.shape_14.setTransform(-46.3,-162.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6B8A08").s().p("AhgH5QhdmICZmQQgZCzAPCuQAWhMAghKQgCA/ADA9QANDyBKD3gAA4m5IgRgSIAKgTIADgHQgPgJgIgKQgLgNAGgHQACgDAEgBQABACAAADQAAACAfATQAWANAbAGIAVADQABAEgCADQgHAIgUgCQgNgBgOgGIgPgGIgKgFIAKAFIAPAGIgDAGIgKAkQgFgEgDgFg");
	this.shape_15.setTransform(-49.2,-139);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAUQgNgUgWgQIgNgHQAOAEAPAHQAWALALALQAGAIABAGIgVgEg");
	this.shape_16.setTransform(-39.5,-189.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AGKA5QAqhACGhnIgni2QmAiCoPAYQiqELgTGrIN1BrQAvjuAfhsg");
	this.shape_17.setTransform(-2,-118.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AhNCPQA5i8BEiBIAoC2QiFBmgqBBIAKggg");
	this.shape_18.setTransform(46.2,-130.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{x:11,y:-94}},{t:this.instance_3,p:{x:19,y:-141.2}},{t:this.instance_2}]},8).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_4,p:{x:5.5,y:-128.2}},{t:this.instance_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3,p:{x:13.5,y:-175.4}}]},1).wait(1));

	// Layer_6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACVgLQAAgBAAgBQAAgBAAgCQAAAAAAgBQADg2AGg2QABgFABgFQg0ANgxAFQgGAAgGAAQhtAGhsgnQgBAFAAAFQgCAYgCAZQgBAfgBAgQAAABAAABQAAABAAABQAAABAAABQAAAMAAAMQAAAxACAzACgiHQAHg9ALg+IlPgGQgIA4gFA4QgBABABABACVgLQgeAJgcAFQgBAAAAAAQgWAEgVACQgDABgCAAIAAAAQgBAAgBAAQhuAKhrgqACSBjQAAgrACgrQAAgMABgMACSBjQgcAMgZAIQgXAHgVAFQiBAdhfg6QABALABAKQACArAFAsQASAPAWALQA2AdA8gBQAaAAAZgHQAMgDAMgEQAPgGAPgIQADgCADgCQAHgEAGgEQAVgOAQgQQgCglgBglQAAgKAAgLg");
	this.shape_19.setTransform(-4.8,-63.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#747474").s().p("Ag+CWQgWgLgSgPQgFgsgCgrIgBgVQgDgyAAgxIABgZIACABIABAAIAEABIAAAAIAEACQBSAfBTAAIABAAIAAAAIAkgCIAAAAIACAAIACAAIABAAIABAAIAEAZIABAQQACAngBAoQgBBAgIA+QgaAHgbAAIgEAAQg4AAg1gcgAAeA3QAkgBAngIIABAAIAFgBIACAAIgCAAIgFABIgBAAQgnAIgkABIAAAAIgBAAQhLgBg9gkIgCgBIgBgBIABABIACABQA9AkBLABIABAAIAAAAgABAhJQhTAAhSgfIgEgCIAAAAIgEgBIgBAAIgCgBIAAgCIAAgCIAAgCIACg/QBSgCBJAlQAhAQAQAWQAGAKAFANIABAEIABACIgBAAIgBAAIgCAAIgCAAIAAAAIgkACIAAAAIgBAAgABrhLg");
	this.shape_20.setTransform(-11.2,-54.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("ABaBPQABgogCgnIgBgQIgEgZIAEgBIArgGIgrAGIgEABIgBgCIgBgEQgFgNgGgKQgQgWghgQQhJglhSACIADgxIABgKIAAgCQAnAAASABQA3ACAqAJQAnAIAYAPIgbABIAAAAIAAAAQhcAAhcggIgGgCIAGACQBcAgBcAAIAAAAIAAAAIAbgBIANAKQAIAIAGAJQAIANADAVIAEAjIABATIAAAEIAAACIABAZIACBaIgsAMIAsgMIAAB1IgdAOIgYAHQAIg+ABhAgACGBDIAAAAg");
	this.shape_21.setTransform(-8.9,-58.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4C4C4C").s().p("ABZCFQAagIAcgMIAAAVQAAAlACAlQgQAQgUAPIgNAIIgHADIAAh1gABXAqIgBgZIACAAQAcgGAdgJIgBAZQgCAsABAqQgcAMgaAIIgChbgABWARIAAgCIAAgDIgBgSIgEgkQgDgUgIgNQgGgKgIgIIgNgJIANgBQAxgFAzgNIgBAKQgGA2gDA2IAAABIAAACIgBACQgdAJgcAGIgCAAIAAAAgAArhmQgYgQgmgIQgrgJg3gCQgSgBgnAAQAFg4AJg3IFPAFQgMA+gHA9QgzANgxAFIgNABIAAAAg");
	this.shape_22.setTransform(-4.4,-64.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("ADxiuQgcgtglgwQgIgGgIgDQgRgGgSAGQgWAGgYAYQg0A1AYA3QATAXAQAXQAKgcAOgSQAPgUATgKQAngWA6AQgAiJgbQgngagpggQgQgDgNAAQgSAAgOAGQgeALgOAlQgbBBAwA3QAwAdAsAZQBAAkA5AbQBTAnBBAUQBRAXA5gHAiJgbQgRAFgNAIQgNAHgKAJQgtAtAaBdABWhcQAUAdAOAcQAOgNANgJQATgNASgHQBKgcA4BQQgXhGgyhPAgZAkQg2gag6glACSAlQAOgEANgDQAVgEATACQBVAHAaB6QAWhTgghjAB4gjQAUAmAGAiQAEAZgDAWQAIAHAHAHQAOANALAOQA0BHgpBSQBJgIAgg8QANgaAIgbABkBOQgUAPgNAQQgPATgGAWQgPAwAdBAAgZAkQgQAMgMAPQgLAOgHAPQgYAwAHA/ACTBUQgXgBgYgFQg8gLhBgf");
	this.shape_23.setTransform(26.4,-5.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#747474").s().p("AA8EEQgTgrAAgkQAAgRAFgQQgFAQAAARQAAAkATArQhBgThTgoQgCgOAAgOQAAguATgkQgTAkAAAuQAAAOACAOQg5gbhAgkQgKgiAAgcQABgvAcgdQAtAnA0AlIAWAPQBCAsAzANQAbAHAXgBQA9gDAegbQAdAnAAArQAAAigSAlQgNABgNAAQgxAAg/gSgADYDOQAAgrgdgnQAjgggJhCIgFgZQgJgogPgoIABAAIABAAIACgBQARgGAQAAIAAAAIABAAQAwAAAnA1IAFAHQAgBjgWBSQgah6hVgHQBVAHAaB6QgIAcgNAZQggA8hJAJQASglAAgigAktBUQgwg3AbhBQAOgkAegMQAoArAwApQgcAdgBAvQAAAcAKAiQgsgZgwgdgAC7B8IAAAAgAi+AAIAAAAgAE6gaIgFgHQgng1gwAAIgBAAIAAAAQgQAAgRAGIgCABIgBAAIgBAAQgRgugXgtQAXgMAdAAIAAAAIAAAAQAVAAAYAGQAyBPAXBHIAAAAgACQiqQgOgagQgaQAQghAegWQAIADAIAGQAlAvAcAtQgYgGgVAAIAAAAIAAAAQgdAAgXAMIAAAAg");
	this.shape_24.setTransform(26.4,-5.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4C4C4C").s().p("ABmC/QAOgQAUgOQAXAEAXABIAPAOIgPgOQADgWgEgZQAOgEANgDIABAHQAEASgBAKQAAAOgIALQgDAFgEADQgMAKgZAEIgTABQgTAAgUgEgABmC/QgPgCgPgFQgtgNgsgaQALgOAPgNQBCAgA9ALQgUAOgOAQIAAAAgAgRCRQgVgLgVgOQgggUgpghQANgHARgGQA6AnA1AZQgPANgLAOIAAAAgACbAuQAOgMANgKQARAtAJArQgNADgOAEQgGgigUgngADQBwIAAAAgAiEBDIgtglQgZgTgJgRQAOAAAQADQAoAfAnAaQgRAGgNAHIAAAAgAB5gKQAKgbAOgTQAWApAPAnQgNAKgOAMQgOgbgUgdgAC2AYIAAAAgABXg4QgZg3A0g1QAYgYAXgGQgFAEgIALIgMAPQgGAIgDAHQgJAPAAAdQAPAZAMAYQgOATgKAbQgPgWgTgYgACRg4IAAAAg");
	this.shape_25.setTransform(22.8,-14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("ABNDUQAHgWAPgTQgPATgHAWQgzgOhCgsQAIgPALgOQgLAOgIAPIgVgOQg0gmgtgmQAKgKAMgHQgMAHgKAKQgxgqgngqQAOgGARAAQAJASAZASIAtAlQAqAgAfAVQAVAOAVALQAtAZAsAOQAQAEAPADQAfAGAbgDQAZgEAMgKQAEgEADgEQAHgLABgOQAAgKgDgSIgCgHIADAAQAOgDANAAIAAAAIABAAIAIAAIACABIgCgBIgIAAIgBAAIAAAAQgNAAgOADIgDAAQgIgrgRgtQATgMASgHQgSAHgTAMQgPgngWgpQAPgUATgKQgTAKgPAUQgNgZgPgYQAAgdAJgPQADgHAHgIIALgPQAJgLAEgEQASgGARAGQgeAXgQAgQAQAaAOAbQAXAtARAuQAPAnAJAoIAFAaQAJBBgjAgQgLgOgOgNQAOANALAOQgeAbg9AEIgHAAQgUAAgYgGgADbC7IAAAAg");
	this.shape_26.setTransform(23.2,-12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1).p("AhUDMQADABAVADQAWACAVgBQAYgBAYgFQAXgGAVgIQAUgHARgMQABgBABgBQAggVAUgeQAFgIAEgJQAIgQAEgTQACgHACgHQAFghgIgfQgCgQgIgRQgZg+g1guQgDgDgDgEQgQgMgRgKQgZgOgagHQgDgBgEgBQgGgDgZABQgYABgoAbQgqAbgXAqQgUApgKApQgIAoAFAxQAEAxAYAqQAZAqA1ALg");
	this.shape_27.setTransform(-11.6,-13.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3399DB").s().p("Ag8DQIgYgEQg1gLgZgqQgYgqgEgxQgFgxAIgoQAKgpAUgpQAXgqAqgbQAogbAYgBQAZgBAGADIAHACQAaAHAZAOQARAKAQAMIAGAHQA1AuAZA+QAIARACAQQAIAfgFAhIgEAOQgEATgIAQIgJARQgUAeggAVIgCACQgRAMgUAHQgVAIgXAGQgYAFgYABIgJAAQgQAAgSgBg");
	this.shape_28.setTransform(-11.6,-13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},8).to({state:[]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

	// Layer_7
	this.instance_10 = new lib.db_handL("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(96.5,8.6,1,1,0,-13.6,166.4,-0.1,-18.1);

	this.instance_11 = new lib.db_armL("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(43.3,-39.2,1,1,-4.7,0,0,-22.6,-28.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AAVDUQgDAAgUgGQgUgFgTgJQgXgLgVgNQgUgNgQgPQgQgPgNgSQgBgBgBgBQgXgggJgkQgCgKgCgJQgCgSABgTQABgHABgIQAFghARgcQAIgPAMgNQArgyA+gZQAEgBAFgCQASgGASgDQAbgFAaADQAEABAFAAQAGAAAXAKQAXAJAeAoQAdApAIAwQAHAvgFAqQgEAqgTAtQgTAtgkAgQgkAfg1gJg");
	this.shape_29.setTransform(-30.8,-14.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#17435F").s().p("AgEBjQgWgBgMgfQgOgdACgoQADgpAQgdQARgbAUABQAWABAMAeQAOAegDApQgDAogPAcQgQAbgUAAIgBAAg");
	this.shape_30.setTransform(-21.5,-13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2875A9").s().p("AgvDTQgZgQgRgeIgKgUQgchCAJhXQALhZAqg7QAIgMAJgLQAVgWAYgGIACgFQAFAAAXAKQAXAJAeAoQAdApAIAwQAHAvgFAqQgEAqgTAtQgTAtgkAgQgcAYgmAAQgKAAgMgCgAgHhEQgQAcgDApQgCAoAOAeQAMAfAVABQAVABARgdQAPgcADgoQADgogOgfQgMgegWgBIgBAAQgVAAgPAbg");
	this.shape_31.setTransform(-23.9,-14);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhgAfQArgxA9gZIAKgDQARgGATgDQAcgFAaADIAIABIgCAFQgXAGgVAWQglADgfAHQhLAVgqAzQAIgPALgNg");
	this.shape_32.setTransform(-35.7,-29.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3399DB").s().p("AguBsQgugqgHgXIgEgTQgCgTABgSIACgPQAFghARgcQArgzBLgVQAfgIAkgDQgJALgIAMQgqA7gLBZQgJBXAcBDIAKAUQhAgWgugrg");
	this.shape_33.setTransform(-39.3,-14.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2E89C4").s().p("ABOBSQgTgGgUgJQgWgKgVgNQgUgOgQgPQgQgOgMgRIgCgDQgYgggIgkQAGAXAuAqQAvAqA/AWQASAeAZAQIgZgGg");
	this.shape_34.setTransform(-38.9,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(1,1,1).p("AiGg5QgBAAAAAAQgDAAgDAAQgUgBgSgCQgPAEgMAHQg4AegEBbQAXAfAzAPQAVAGAbACQA4ADBYgMQA7gIBKgPQA4gMBAgRIAHhZIADgzIAEgzQhkAegzANQgMAUgHASQgNAgACAaQACAwAtAhAAHhAQgLAPgJAOQgUAegEAaQgHA0AsAsAAHhAQgRADgSABQgMABgLABQgdABgcAAQgMAAgMAAAhsg5QgFAFgEAEQgYAZgLAbQgXA3AfBDAB0hTQg4ANg1AG");
	this.shape_35.setTransform(-67.5,-12.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4C4C4C").s().p("AiZArQgRgEgOgGIAJgJIgJAJQgIgEgHgFIAYAAIA5gBIAXgDIAkgDQgMAOgKAOIgSABQgiAAgUgDgAhRAtIAAAAgAg7ARQA1gHA3gLQgMASgHASQAHgSAMgSQAzgNBkgfIgEAyQh0AXgyAHQg3AIg4ACQAKgOAMgOg");
	this.shape_36.setTransform(-60.8,-20.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AhBAxQAEgcATgcQgTAcgEAcIgPgBQgngBgbgFQgTgEgQgHQALgcAZgXQgZAXgLAcQgNgGgLgIQgbgRgCgWQAMgGAPgEIAmACIAGABIABAAIACAAQAHAFAIAEQANAHASADQAUADAiAAIASAAQA3gDA4gIQAygGB0gYIgEAyQhaAbhTAMIgBgGQAAgZAMgcQgMAcAAAZIABAGQg6AIg4AAIgJAAgAA6ApIAAAAg");
	this.shape_37.setTransform(-64.7,-14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#747474").s().p("AiMBYQgSgoAAgjQAAgYAJgXQAQAHATAEQAaAGAnABIAQAAQA7ABA/gJQBUgLBagbIgGBZQhBARg4AMQgsgigDguQADAuAsAiQhKAPg7AIQglgmAAgqIABgPIgBAPQAAAqAlAmQhGAKgyAAIgXgBgAi8BQQgzgPgXgfQAEhbA4gfQACAXAaASQAMAHANAGQgJAXAAAYQAAAjASAoQgcgCgUgGgAiVgiIAAAAg");
	this.shape_38.setTransform(-67.9,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},8).to({state:[]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).wait(1));

	// Layer_8
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIZlHQgDgFgFgEQgDgEgEgDQgKgIgOgKQgOgKgSgKQgggThcggQgFgCgEgBQgkgMgtgOQhOgYhVgQQhXgLiNgGQgbgCgbAAQgIAAgIAAQhoAChhAVQgyAKggAdQgxAtgDBbQgFCHBMCtQAGAMAGANQACAMACANQAsD/BKCmQEdBRE3gWQBNhgAyhAQAvjwAjiKIAAgBQAHgbAGgXQAMgwALggQADgGACgGQAnhyAAgNQABgUgKgPQgCABgCABQgzAQguAxQhiBohHD1QgBAGgCAGQBNghAsgkQAsgiASgZQACgDADgDQAPgVAMgTAh2h5QgMBiABBSQAAAVABAUQihgXishCAEIBlQi/AdjJge");
	this.shape_39.setTransform(-2.3,-11.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhcBFQAghQAmgsQAmgsAYgSQAYgRAxgUIAIAHIAEALQg0AQgtAxQgkAXgdAsQgUAbghBDQgTAngPAaQAAgEAghSg");
	this.shape_40.setTransform(38.6,-30);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#17435F").s().p("AiJDLQBHj2BhhnQAugxAzgRIAEgBQAKAPgBATQAAANgnBzIgFALQgLAggMAvIgbApIgFAGQgSAYgrAkQgsAkhNAgIADgLg");
	this.shape_41.setTransform(38.2,-22.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F5D802").s().p("AiNBcQhZgfgQg5QgQg4Abg4IADgHQBggJB0AZQBPASCNAxIA1ARQgNAOgJALQgVAagmAnQgmAnheAEIgWAAQhRAAhOgag");
	this.shape_42.setTransform(-4.3,-43.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3399DB").s().p("AlHGrQhKimgskAQBrAuByAbQCeAlCggBQBxAABFgfIgHGSQhEAFhDAAQjuAAjfg/gAAEAvQhFgJg0gJIAAgOQAAhMALhaQgLBaAABMIAAAOQhugLhLgQQhLgPhUggQhMisAFiIQADhaAxguQAcAcApAIQAgAGAtgHIBOgMIAQgBIgDAHQgcA4AQA5QAQA5BZAfQBZAeBdgEQBdgEAmgnQAngnAVgaQAJgMANgOIAnAKQAzAMAqgBQAyAAAsgUQAWgLARgOQAOAJAKAJQgyAUgYARQgYASgmAsQgnArggBSQggBRAAAFIgTAdQgiAvgrAUQgoAVgqAAQgrAAhGgHg");
	this.shape_43.setTransform(-3.5,-8.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2875A9").s().p("AEFB0QhFAfhxAAQigABidglQhzgbhrguIgDgZQCrBCChAYIAAgpIAAApQihgYirhCIgNgZQBVAfBKAQQBLAQBvALQAzAJBGAJQBFAHArAAQAqAAApgVQAqgUAigvIATgdQAQgbASgmQAihDATgcQAdgsAlgXQhiBnhGD2IgEALQBOggAsgkQArgjATgYIAEgGIAbgpIgNAzIAAAAQgiCKgwDxQgyBAhNBfgABFB2QBfAABcgOIAFgBIgFABQhcAOhfAAIAAAAIAAAAQhiAAhmgPQBmAPBiAAIAAAAIAAAAgAnPANIAAAAgAENlEIgngKQAPgSAUgVQAlgnAlgSQBcAgAhATQARALAOAKQgQAOgXALQgsAUgxAAIgHAAQgoAAgvgLgAmqmkQgpgIgcgcQAggcAygLQBhgVBogBIAJAHQgbAZgZAzIgQABIhOAMQgXAEgUAAQgTAAgPgDg");
	this.shape_44.setTransform(-2,-11.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6B8A08").s().p("ACHBKQiMgwhPgSQh1gZhgAJQAagyAagZIABABIAHgIIA2ABQCOAHBVALQBWAPBOAYIBRAaIAIADQglARglAnQgUAVgPARIg1gRg");
	this.shape_45.setTransform(2.2,-54);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("AIZlQQgEgFgFgFQgDgDgEgDQgKgIgOgKQgOgJgSgLQghgShdgeQgEgCgEgBQglgMgtgNQhPgXhVgOQhWgJiOgEQgbgBgbAAQgIAAgIABQhoADhhAXQgxALgfAdQgxAugCBbQgCCIBPCrQAGALAHANQACANACAMQAwD/BNClQEeBME3gcQBLhhAxhBQArjxAgiLIAAAAQAHgcAGgXAIZlQQgCAAgCABQg0ASgtAxQhgBphCD3QgCAGgBAGQBMgiAsglQArgjASgZQACgDACgDQAPgWAMgTQALgwALggQACgGACgGQAlhzAAgNQAAgUgJgOgAhzh3QgKBiACBSQABAVABAUQiigVisg/AEPBgQi/AhjJgb");
	this.shape_46.setTransform(-6.8,-10.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#17435F").s().p("AiGDNQBDj3BfhpQAtgxAzgSIAEgBQAKAOgBAUQAAANglBzIgEALQgKAggMAwQgLATgPAWIgFAGQgSAZgqAkQgrAkhNAjIADgMg");
	this.shape_47.setTransform(34.1,-22.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5D802").s().p("AiLBdQhagdgRg5QgRg4Abg5IADgHQBggKB0AXQBPAQCOAvIA1AQIgVAaQgVAaglAoQgmAnhdAGIgeABQhNAAhLgYg");
	this.shape_48.setTransform(-8.9,-42.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AhbBHQAfhRAlgsQAlgtAXgSQAYgSAxgVIAIAGIAFALQg0ASgtAyQgjAXgdAsQgSAcghBEQgSAngPAaQAAgEAfhSg");
	this.shape_49.setTransform(34.3,-30.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3399DB").s().p("Ak5HOQhNilgwj+QBrArBzAZQCeAjCggEQBxgCBEggIAAGSQhUAIhSAAQjdAAjRg4gAALBMQhFgHg0gIIgBgdQAAhGAIhSQgIBSAABGIABAdQhvgJhLgPQhLgOhUgeQhQirADiIQABhaAxguQAdAbAoAHQAgAFAugHIBNgNIAQgCIgDAHQgbA4ARA6QARA4BaAdQBZAdBdgGQBdgGAmgnQAlgnAVgbIAVgbIAoAKQAzALAqgCQAygBAsgVQAWgLAQgOQAPAJAJAIQgxAVgYASQgXASgmAtQgmAsgeBSQgfBSAAAEIgTAeQghAvgqAWQgoAVgqABIgMAAQgoAAg9gGgAi/n9IgKgIIAKAIg");
	this.shape_50.setTransform(-8,-10.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2875A9").s().p("AEOBwQhFAghwACQigAEifgjQhygZhrgrIgFgZQCtA+ChAVIgCgoIACAoQihgVitg+IgMgZQBUAeBLAOQBLAPBuAJQA0AIBHAHQBFAGAqAAQArgBAngWQArgVAhgvIATgeQAPgaASgnQAghEASgdQAegsAjgXQhgBphCD2IgDAMQBMgiAsgkQArgkASgYIAFgHQAOgWAMgSIgNAyIAAAAQgfCLgrDyIh9ChgAA3B1QBlAABhgPIABAAIAKgCIAGgBIgGABIgKACIgBAAQhhAPhlAAIAAAAIAAAAQhQAAhSgKIgIgBIgHgBIAHABIAIABQBSAKBQAAIAAAAIAAAAgAnIAWIAAAAgAEOlIIgngKIAjgnQAjgnAmgTQBdAeAgASIAgAVQgRAOgVALQgsAVgyABIgKAAQgmAAgugJgAmqmdQgogGgdgbQAfgdAygMQBggXBogDIAJAHQgaAagYAzIgQACIhOANQgZAEgVAAQgRAAgOgDg");
	this.shape_51.setTransform(-6.7,-10.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#6B8A08").s().p("ACJBIQiNgvhQgQQh0gWhgAKQAYgzAagZIABAAIAGgIIA2ABQCPAEBVAJQBWAOBPAXQAtANAkAMIAJADQgmARgjAoIgjAnIg1gQg");
	this.shape_52.setTransform(-2.6,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},8).to({state:[]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).wait(1));

	// Layer_9
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(1,1,1).p("AgLh4QgKAFgKAGQg4AjguAtQgCACgCACQgPAPgMAOAACBUQgEgKgGgJQgQgbgSgRQgTgRgUgHQgmgNgtAUAACBUQgOANgNAQQgCAEgCADQhBBrhYgyQg+hLBQhiACagGQAbgJAdgGIgOhRIgKg4IgGgiQgfAHgeAJQgNAFgLADQg5AUgxAcAA2ApQgEgngMgiQgHgUgKgTQgOgagSgXACagGQgSgigJgjQgHgagCgaQgBgZACgYAACBUQAHgIAJgHQAQgPAUgNQAsgdA4gS");
	this.shape_53.setTransform(-75.9,-22.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4C4C4C").s().p("AhOBUIgGgCQgQgbgTgRQAJgJAMgIQATgOApgVIADgCQAzgaAigQIAfgNIAmgOIAOBRQgdAFgbAKQgSgigJgjQAJAjASAiQg3ASgsAdQgEgngMghQAMAhAEAnQgTANgRAPIgUgCgAiEA2QAGgIAHgIQATARAQAbQgagGgWgWgAh3AmIAAAAg");
	this.shape_54.setTransform(-68.3,-24.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#747474").s().p("AiqCxQg+hLBQhiIACgBQAagLAYAAIAAAAIAAAAQAOAAANAEIADABIABAAIgGAEQgQAMgHAJQgLANgBAPQAAAZAdAUQAYARAjAHIAFABQgtBJg2AAQgaAAgcgQgAADBBIAGABIAVADIgQAPIgLgTgAh9gZIAEgEQAugtA4gjIATgLQATAXAOAaQgzAfgzAlIgBAAIgDgBQgNgEgOAAIAAAAIAAAAQgYAAgaALIgCABQAMgOAPgPgAAAh4QAygcA5gUIAYgIQAegJAfgHIAGAiQgwAUgUALIAAgTQAAgPABgPQgBAPAAAPIAAATQgxAZgwAfQgOgagTgXgACCh/IAAAAg");
	this.shape_55.setTransform(-77.1,-22.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AhGCLQgjgIgYgRQgdgTgBgaQACgOALgOQAHgJAPgMIAHgEQAzgkAzggQAwgeAxgaQATgKAxgVIAKA4IgnAOIgeANQgHgagCgaQACAaAHAaQgjAQgzAaIgEACQgGgVgKgTQAKATAGAVQgoAVgTAOQgLAIgKAKQgSgSgUgHQAUAHASASQgHAHgGAIQAXAXAZAGIAKASQgOAOgNAPIgEAIIgFgBgABbg4IAAAAg");
	this.shape_56.setTransform(-72.3,-24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},10).wait(1));

	// Layer_10
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACKhxQgEhLAUhIIhpgCIjigEQgIArgCArQgDAmAAAmQABBJAOBIQAKA5ASA4ACcAAQgUAMgUALQgSAIgSAIQh8AviDgtACKhxQgfAPgeALQgTAGgSAFQh/Ahhng9AC4BPQgRANgQALQgPAKgPAJQiHBOiFguACcAAQALAnAQAnIABABQAeB2hfAtQgTAJgYAHQgMADgLACQhXAQhTgtQgRgogNgoACcAAQgQg4gCg5");
	this.shape_57.setTransform(-0.8,58.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#747474").s().p("AhUC/QgRgogNgoIACABQAwAQAxAAIAAAAIAAAAQBUAABVgxQhVAxhUAAIAAAAIAAAAQgxAAgwgQIgCgBQgSg4gKg4IABAAIAGABIAAAAIABAAIABABQA8ATA6AAIAAAAIAAAAQA+AAA9gVIABgBIADgBIABAAIgBAAIgDABIgBABQg9AVg+AAIAAAAIAAAAQg6AAg8gTIgBgBIgBAAIAAAAIgGgBIgBAAQgOhJgBhJIAHADIAAAAIABABQBAAjBJAAIAAAAIAAAAQApAAAsgLQAGAYAHATQAMAnAPAiQAJATALASIASAjIADAKQAFAPgCANQAAANgIAPQgFAJgLAQQgbAmgUAWQgXAEgXAAQg/AAg9ghgAgMhsQhJAAhAgjIgBgBIAAAAIgHgDQAAgmADgmQBmAlBsgIQAJAqAIAhQgsALgpAAIAAAAIAAAAg");
	this.shape_58.setTransform(-4.1,62.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("ABxDNQAMgPAEgKQAIgPABgNQABgNgFgPIAegTIgeATIgDgKIgSgjQgKgSgKgUIAlgQIglAQQgPgigMgmQgGgTgGgYIAkgLIgkALQgJgggJgrQhsAIhmgkQACgsAIgrIDiAEQAEBgAYBPIAGAVQAMAnAWAyQANAiASAoIADAGQALAcAAAPQAAAKgEANIgKAXQgPAfgOAUQgTAIgYAHIgXAFQAVgVAagng");
	this.shape_59.setTransform(-2.1,58.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#4C4C4C").s().p("AAcDKIAJgWQAFgOAAgKQgBgPgKgbIAhgZIghAZIgDgHQgSgogNgiQgVgxgMgnIgGgWQAegKAegPQACA4AQA4IgnAXIAngXQALAnAQAoIABAAQAeB2heAuQAMgUAQgfgAhGj8IBoACQgUBJAEBLQgeAPgeAKQgYhPgEhgg");
	this.shape_60.setTransform(11.2,57.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("ACIh0QgFhLAShJIhpAAIjiAAQgGArgDArQgCAmABAmQADBJAOBHQAMA5ATA4ACIh0QgfAPgeALQgSAHgSAFQh/Ajhog7AC5BKQgRAOgQALQgOAKgPAJQiFBRiGgsACcgDQALAlARAoIABAAQAgB2heAvQgTAJgYAHQgLADgMACQhWAShUgrQgRgogOgoACcgDQgUAMgUAKQgRAJgSAIQh7AyiFgsACcgDQgRg5gDg4");
	this.shape_61.setTransform(-3.6,59.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#747474").s().p("AhQC/QgRgngOgoIACABIABAAQAtAOAuAAIAAAAIAAAAQBRAABSgvIABAAIABgBIAIgEIgIAEIgBABIgBAAQhSAvhRAAIAAAAIAAAAQguAAgtgOIgBAAIgCgBQgTg4gMg4IADAAIACABIABAAIADABQA5ARA3AAIAAAAIABAAQBDAABDgaQhDAahDAAIgBAAIAAAAQg3AAg5gRIgDgBIgBAAIgCgBIgDAAQgOhIgDhJIADABIABAAQA/AkBJAAIAAAAIABAAQAoAAAsgMIAGgBIANAqQANAnAQAhQAJATALATQAQAcACAHIAEAJQAFAPgBANQgBAOgHAPQgFAJgLAQQgZAngVAVQgZAFgZAAQg9AAg7gfgAiOAAIAAAAgAgThsQhJAAg/gkIgBAAIgDgBQgBgmACgmQBnAjBsgKQAKAqAJAhIgGABQgsAMgoAAIgBAAIAAAAg");
	this.shape_62.setTransform(-6.9,63.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AB1DLQALgRAFgJQAHgPABgNQABgNgFgPIAdgTIgdATIgEgKQgCgGgQgdQgLgSgKgUQASgHASgJQgSAJgSAHQgPghgNgmIgNgqIAkgMIgkAMQgKghgJgqQhsAKhngjQACgrAHgsIDiAAQAGBgAZBPIAHAVQANAnAVAxIAhBJIADAHQALAbABAPQAAAKgEAOIgJAWQgPAfgNAUQgTAKgYAGIgXAGQAUgWAagmg");
	this.shape_63.setTransform(-5,59);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4C4C4C").s().p("AAgDJIAJgWQAFgOAAgLQgBgOgLgcIgDgGIgghKQgWgwgNgnIgGgWQAdgKAegQQAEA4AQA4QgTANgTAKQATgKATgNQAMAnARAnIAAABIggAYIAggYQAhB1hfAvQAOgUAOgfgAhKj7IBpAAQgTBJAFBLQgeAQgdAKQgZhPgHhfg");
	this.shape_64.setTransform(8.3,57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},8).to({state:[]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).wait(1));

	// Layer_11
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(1,1,1,3,true).p("AItDZQARgVAHgMQAFgaAEgWQABgHABgGQAEgfAAgYQgBg6gLg1QgGgjgLghQgqh0hThYQhVhYh1ghQhzgih6AOQhnAHhUAZQhVAYhmBKQgTAPgQASQhKBQgtBiQg0BygMB9QgCAXgDAYQgBAaAAAaQALAHALAIAItDZQgYAfgdAcQgQAQgSAQQgUAQgVANQgXAQgZAOQgnAXgvAQQghAKgiAHQgcAHgcAEQgpADgpgBQghgBgigBQgsgFgtgFQgsgIgrgHQgrgLgpgMQgpgLgogPQgkgMgigOQgigPgggQQgfgPgegRQgdgQgdgRAItDZQABAFgDARQgEARgVAfQgVAehHAyQhIAyh/AdQh+AciygYQizgZiGg/QiHg+gZgQQgYgQgLge");
	this.shape_65.setTransform(-1,107);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("Ag5BvQizgZiGg/QiHg9gZgQQgYgQgLgeIA6AhQAeARAfAPQAgAQAiAPQAiANAkAMQAoAPApALQApAMArALIBXAPIBZAKIBDACQApABApgDQAcgEAcgHQAigHAhgKQAvgQAngXQAZgOAXgPQAVgNAUgQQASgQAQgQQAdgcAYgfQABAFgDARQgEARgVAfQgVAehHAxQhIAyh/AdQhDAPhSAAQhIAAhTgLg");
	this.shape_66.setTransform(-1.8,140.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AHJCFQgLgigOgcQgYgygjgkQgogqhOA7QhPA7hQCWQgKgcBEhmQBEhlA5gVQA5gVgQgyQgQgyhbgzQhbgzh2gJQh1gKhsAWQhfAVhnAyQgfAPghASQBmhKBVgYQBUgZBogHQB5gOBzAiQB1AhBVBYQBTBYAqBzQALAhAGAjQALA2ABA6QAAAYgEAfQAAhVgXhKg");
	this.shape_67.setTransform(10.2,90.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2875A9").s().p("ABcG0IhDgCIhZgJIhXgQQgrgKgpgMQgpgMgogOQgkgMgigPQgigOgggQQgfgPgegRIg6giIgWgPQAAgaABgaQA7AzB3A6QB4A6CuAaQCsAZAwgQQAogOASgJIAGgDIAFgCQANgGASgjQARgjBDhvQBChvBHg+QBHg/A2gTQAOAdALAhQAXBKAABVIgCAMIgJAwQgHANgRAUQgYAggdAbQgQARgSAPQgUAQgVAOQgXAPgZAOQgnAXgvAQQghALgiAHQgcAGgcAEQgdADgcAAIgZgBgAjGhjQhzgZgMgsQgPgqAzhEQAyhEBUgqQBUgrBjgEQBkgFBBAaIAIAEQAbAOASAPQAWASAMAaQAMAbgFAZQgGAegdAcQgSAQgnAeQgjAegaAnQgrAkhXABIgJAAQhUAAhtgYg");
	this.shape_68.setTransform(-1.2,107);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3399DB").s().p("AhhGNQiugah3g6Qh3g6g8gzIAGgvQAMh9A0hxQAshjBKhPQARgSASgPQAhgTAfgPQBogxBfgVQBrgXB2AKQB1AKBbAzQBbAzARAyQAQAxg6AVQg5AVhEBmQhEBlALAdQBPiVBPg8QBOg8AoAqQAkAmAYAxQg3AThHA+QhGA/hDBvQhCBvgSAjQgSAjgMAGIgGACIgGADQgSAJgnAOQgTAHglAAQg7AAhqgQgAA0mSQhjAEhUArQhUAqgzBEQgzBEAPAqQAMAsB0AZQBzAaBWgCQBXgBArgkQAagnAkgeQAngeARgQQAegcAGgeQAFgZgNgbQgLgagWgSQgSgPgcgOIgIgEQg2gVhPAAIgfAAg");
	this.shape_69.setTransform(-3.5,103.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(1,1,1).p("AIvDQQAQgUAHgNQAFgaADgXQABgGABgGQADggAAgXQgCg6gMg1QgIgigLghQgsh0hUhWQhWhWh2gfQh0ggh4APQhoAJhUAaQhUAbhmBLQgRAQgQASQhJBRgrBjQgyBygKB+QgCAXgCAYQgBAaABAaQALAHALAHAIvDQQgYAggcAcQgQARgSAQQgTAQgVAOQgXAQgZAOQgnAYguARQghALgiAIQgcAHgbAEQgpAEgpAAQgiAAghgBQgtgEgtgEQgsgHgrgHQgrgKgpgLQgqgLgogOQgkgLgigOQgigOghgPQgfgPgegQQgegQgdgRAIvDQQABAGgEARQgDARgVAfQgUAfhHAzQhGAzh+AfQh+AfizgWQizgWiHg8QiIg8gZgPQgZgQgLgeIAAAA");
	this.shape_70.setTransform(-2.7,107.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("Ag1B1Qi0gViHg8QiHg7gZgQQgagQgKgdIAAgBIA6AhQAeARAgAOQAgAQAiAMQAjAOAkAMQAoAOApAKQAqAMAqAJIBYAOIBZAIIBDABQApABApgEQAcgFAbgHQAigHAhgMQAvgQAngYQAYgOAXgPQAVgOAUgRQARgPAQgRQAdgcAXggQABAFgDARQgEARgUAfQgUAfhHAyQhHA0h+AeQhKAShcAAQhBAAhJgJg");
	this.shape_71.setTransform(-3.3,140.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AHLCBQgLghgPgdQgZgxgkgkQgpgphNA8QhNA9hNCYQgMgdBDhnQBChmA5gWQA4gWgQgxQgRgyhcgxQhdgyh0gIQh2gIhrAZQhfAXhnAzQgfAPghAUQBmhMBUgaQBUgaBogJQB4gQB0AgQB2AfBWBXQBUBWAsByQALAhAIAiQAMA3ACA5QAAAYgDAgQgChVgYhKg");
	this.shape_72.setTransform(8,90);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2875A9").s().p("ABhG0IhDgBIhZgIIhYgOQgqgJgqgMQgpgKgogOQgkgMgjgOQgigNgggQQgggOgegRIg6ghIgWgOQgBgaAAgaQA9AyB4A3QB4A4CuAXQCtAXAvgSQAogOASgKIAGgDIAFgCQANgGARgjQARgkBBhwQBAhwBFg/QBGhAA2gUQAPAdALAhQAYBJACBVIgCAMIgIAxQgHAMgQAVQgXAggdAcQgQARgRAPQgUARgVAOQgXAQgYAOQgnAYgvAQQghAMgiAHQgbAHgcAFQgkADglAAIgJAAgAjKheQh0gXgNgsQgQgqAyhFQAyhEBTgsQBTgsBigGQBkgGBCAZIAIADQAbANATAQQAWARAMAaQANAagFAaQgFAegdAcQgRARgnAeQgjAfgZAnQgqAlhXADIgUAAQhQAAhmgVg");
	this.shape_73.setTransform(-2.8,107.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3399DB").s().p("AhbGQQivgXh4g4Qh4g3g8gyIAEgvQAKh+AyhyQArhjBJhRQAQgSASgPQAhgUAegPQBngzBfgXQBqgZB2AIQB2AIBcAyQBcAxARAyQARAxg5AWQg5AWhCBnQhCBmALAdQBNiXBNg9QBNg9ApApQAkAlAZAxQg2AUhGA/QhFBAhBBwQhABwgRAkQgSAjgMAGIgFACIgGADQgSAKgoAOQgUAIgsAAQg6AAhigNgAArmRQhjAGhTAsQhTAsgxBEQgyBFAQAqQANArBzAYQB0AYBWgDQBYgEApgkQAagoAjgeQAmgeARgRQAdgcAGgeQAEgagMgaQgMgagXgRQgSgQgcgNIgIgDQg0gUhLAAIgmABg");
	this.shape_74.setTransform(-5.4,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},8).to({state:[]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).wait(1));

	// Layer_12
	this.instance_12 = new lib.db_atL("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(63.7,-111.2);

	this.instance_13 = new lib.db_headlight("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(10.4,-146.4);

	this.instance_14 = new lib.DB_glass("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(2.4,-99.2);
	this.instance_14.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14,p:{y:-99.2}},{t:this.instance_13,p:{y:-146.4}},{t:this.instance_12,p:{y:-111.2}}]},7).to({state:[]},1).to({state:[{t:this.instance_14,p:{y:-100.5}},{t:this.instance_13,p:{y:-147.7}},{t:this.instance_12,p:{y:-112.5}}]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.instance_15 = new lib.db_headf("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-3.4,-82);

	this.instance_16 = new lib.db_mon("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-5.1,-89.7);

	this.instance_17 = new lib.db_face("single",5);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-7.1,-89.7);

	this.instance_18 = new lib.db_atR("single",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-52.3,-110.1);

	this.instance_19 = new lib.db_neck("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(-16.2,-43);

	this.instance_20 = new lib.db_handL("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(72.5,38.7,1,1,0,0,0,0,-18.5);

	this.instance_21 = new lib.db_armL("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(53.5,10.7);

	this.instance_22 = new lib.db_body("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-11.4,4.4);

	this.instance_23 = new lib.db_j("single",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-5.8,64.4);

	this.instance_24 = new lib.db_b("single",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-2.6,107.4);

	this.instance_25 = new lib.db_handR("single",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(-103.4,23.7,1,1,0,0,0,-0.1,-19);

	this.instance_26 = new lib.db_armR("single",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-64.4,-30.5,1,1,0,0,0,22.9,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_26,p:{regX:22.9,regY:-29,skewX:0,skewY:0,x:-64.4,y:-30.5,rotation:0,startPosition:0}},{t:this.instance_25,p:{regX:-0.1,regY:-19,skewX:0,skewY:0,x:-103.4,y:23.7}},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22,p:{y:4.4}},{t:this.instance_21,p:{regX:0,regY:0,rotation:0,x:53.5,y:10.7,mode:"synched",startPosition:0}},{t:this.instance_20,p:{rotation:0,x:72.5,y:38.7}},{t:this.instance_19,p:{y:-43}},{t:this.instance_18,p:{y:-110.1}},{t:this.instance_17,p:{y:-89.7}},{t:this.instance_16,p:{y:-89.7}},{t:this.instance_15,p:{y:-82}}]},7).to({state:[{t:this.instance_26,p:{regX:22.7,regY:-28.7,skewX:107.6,skewY:-72.4,x:-43.4,y:-45,rotation:0,startPosition:0}},{t:this.instance_25,p:{regX:0.1,regY:-18.7,skewX:84.7,skewY:-95.3,x:-106.3,y:-26.4}}]},1).to({state:[{t:this.instance_26,p:{regX:22.9,regY:-29,skewX:0,skewY:0,x:-30.3,y:-24.2,rotation:71.2,startPosition:2}},{t:this.instance_25,p:{regX:0.1,regY:-18.9,skewX:111.6,skewY:-68.4,x:-144.4,y:-31}},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22,p:{y:3.1}},{t:this.instance_21,p:{regX:-27.1,regY:-31.4,rotation:-21.5,x:26.4,y:-22,mode:"single",startPosition:2}},{t:this.instance_20,p:{rotation:-118.8,x:101.1,y:9.8}},{t:this.instance_19,p:{y:-44.3}},{t:this.instance_18,p:{y:-111.4}},{t:this.instance_17,p:{y:-91}},{t:this.instance_16,p:{y:-91}},{t:this.instance_15,p:{y:-83.3}}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.instance_27 = new lib.db_shadow("single",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(1.7,207.3);
	this.instance_27.alpha = 0.5;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(7).to({_off:false},0).wait(1).to({rotation:1,x:1.9,y:206.8},0).wait(1).to({rotation:0,x:1.7,y:207.3},0).wait(1).to({startPosition:0},0).wait(1));

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

	// Layer_5
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(122.9,482.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Let’s do it then.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 215;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(-0.6,440.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("AxVAAMAirAAA");
	this.shape.setTransform(-0.2,481.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(1,1,1).p("AxVG/IAAoTIFWAAIgJlqIDAFqIaeAAIAAIT");
	this.shape_1.setTransform(-0.2,436.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.898)").s().p("AxVG/IAAoTIFWAAIgJlqIDBFqIacAAIAAITg");
	this.shape_2.setTransform(-0.2,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_8
	this.myTxt1 = new cjs.Text("Huh? We need to answer a few questions \nto gain access to the system.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 457;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-173.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,1,1).p("EgkRAGCIAAsDMBIjAAAIAAMD");
	this.shape_3.setTransform(-172.9,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EgkRgB5MA7wAAAIGuDbIj3jbIJ8AA");
	this.shape_4.setTransform(-172.9,59.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010101").s().p("AjWhtIC3AAID2Dbg");
	this.shape_5.setTransform(-1.1,58.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("AaWGCIi4AAMg7vAAAIAAsDMBIiAAAIAAMDg");
	this.shape_6.setTransform(-172.9,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-407,-31,468.3,104.7);


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

	// Layer_5
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(440.1,449.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Relax, M-droid. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 223;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(317.6,407.1);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("ARoAAMgjPAAA");
	this.shape.setTransform(317.6,449.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AxnHTIAAoDIbXAAIHmmUIkBGUIETAAIAAID");
	this.shape_1.setTransform(317.6,402.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AxnHMIAAoDIbXAAIHmmUIkBGUIETAAIAAIDg");
	this.shape_2.setTransform(317.6,403.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_8
	this.myTxt1 = new cjs.Text("I’ve scanned everywehere but can’t seem \nto be able to detect their presence.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 475;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(152.6,-17);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAkKAGFIAAsEMhISAAAIAAME");
	this.shape_3.setTransform(153.1,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AApkfIAXAAIAAAAAApkfIAXAAIhdIYIE6oYIftAAEgkIgEfMAkxAAA");
	this.shape_4.setTransform(153,81.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AA/B2IgWAAIAWAAIAAAAIAAAAIgWAAMgkyAAAIAAsEMBISAAAIAAMEI/sAAIk6IZg");
	this.shape_5.setTransform(153.1,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-25.8,478.9,137.9);


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

	// Layer_5
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(122.9,482.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.myTxt2 = new cjs.Text("Kita jawablah sama-sama.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 305;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(-44.6,440.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("A4XAAMAwvAAA");
	this.shape.setTransform(-45.2,481.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(1,1,1).p("A4XG/IAAoTITaAAIgJlqIDAFqIaeAAIAAIT");
	this.shape_1.setTransform(-45.2,436.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.898)").s().p("A4XG/IAAoTITaAAIgJlqIDBFqIacAAIAAITg");
	this.shape_2.setTransform(-45.2,436.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Hah? Kita perlu menjawab beberapa soalan\nuntuk mengaktifkan sistem ini.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 467;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-173.5,-22);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,1,1).p("EgkRAGCIAAsDMBIjAAAIAAMD");
	this.shape_3.setTransform(-172.9,8.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EgkRgB5MA7wAAAIGuDbIj3jbIJ8AA");
	this.shape_4.setTransform(-172.9,59.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#010101").s().p("AjWhtIC3AAID2Dbg");
	this.shape_5.setTransform(-1.1,58.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.996)").s().p("AaWGCIi4AAMg7vAAAIAAsDMBIiAAAIAAMDg");
	this.shape_6.setTransform(-172.9,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409,-31,471.1,104.7);


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

	// Layer_6
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(440.1,449.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_8
	this.myTxt2 = new cjs.Text("Bawa bertenang, M-droid. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 315;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(274.5,407.1);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AYRAAMgwhAAA");
	this.shape.setTransform(275.1,449.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4QHTIAAoDMAopAAAIHmmUIkBGUIETAAIAAID");
	this.shape_1.setTransform(275.1,402.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("A4QHMIAAoDMAopAAAIHmmUIkBGUIETAAIAAIDg");
	this.shape_2.setTransform(275.1,403.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Saya sudah mengimbas seluruh tempat ini \ntetapi tak dapat juga mengesan mereka.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 475;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(152.6,-17);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAkKAGFIAAsEMhISAAAIAAME");
	this.shape_3.setTransform(153.1,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AApkfIAXAAAApkfIAXAAIAAAAIhdIYIE6oYIftAAEgkIgEfMAkxAAA");
	this.shape_4.setTransform(153,81.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AA/B2IAAAAIgWAAMgkyAAAIAAsEMBISAAAIAAMEI/sAAIk6IZgAApB2IAWAAIAAAAg");
	this.shape_5.setTransform(153.1,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.8,-25.8,478.9,137.9);


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
	this.instance.setTransform(141.5,-13);

	this.instance_1 = new lib.tEn4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.5,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.5,-43.6,471.1,104.2);


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
	this.instance.setTransform(-184.3,-40.6);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-184.3,-40.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-271.1,-66,478.9,137.4);


// stage content:
(lib.intro6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:1,a2:193,a3:322});

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
	this.frame_188 = function() {
		this.stop();
	}
	this.frame_276 = function() {
		this.stop();
		function doPlay(e){
			_this.btnClick.removeEventListener("click", doPlay);
			_this.play();
		}
		this.btnClick.addEventListener("click", doPlay);
	}
	this.frame_277 = function() {
		playSound("questionComplete");
	}
	this.frame_322 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_382 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(184).call(this.frame_188).wait(88).call(this.frame_276).wait(1).call(this.frame_277).wait(45).call(this.frame_322).wait(60).call(this.frame_382).wait(1));

	// Layer_1
	this.instance = new lib.hlBlinkStars();
	this.instance.parent = this;
	this.instance.setTransform(41.7,185.2,1,1,0,0,0,0.1,-2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(276).to({_off:false},0).to({_off:true},1).wait(106));

	// Layer_2
	this.btnClick = new lib.btnC();
	this.btnClick.name = "btnClick";
	this.btnClick.parent = this;
	this.btnClick.setTransform(45.2,188.7);
	this.btnClick._off = true;
	new cjs.ButtonHelper(this.btnClick, 0, 1, 2, false, new lib.btnC(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnClick).wait(276).to({_off:false},0).wait(1).to({scaleX:3.62,scaleY:3.62,rotation:5.2,x:412.1,y:259.7},22,cjs.Ease.cubicOut).to({scaleX:1.42,scaleY:1.42,rotation:0,x:459.1,y:311.7},22,cjs.Ease.backIn).to({_off:true},1).wait(61));

	// t
	this.instance_1 = new lib.dialogue1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(316.2,109.1);

	this.instance_2 = new lib.dialogue3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(525.7,92.8);

	this.instance_3 = new lib.dialogue4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(275.8,90.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},163).to({state:[{t:this.instance_2}]},30).to({state:[]},84).to({state:[{t:this.instance_3}]},81).wait(25));

	// inventory
	this.instance_4 = new lib.inventory("synched",0,false);
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.1,273.3,1,1,0,0,0,1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(246).to({_off:false},0).wait(30).to({mode:"single",startPosition:59},0).wait(1).to({startPosition:59},0).to({x:-56.9},17,cjs.Ease.cubicIn).to({_off:true},1).wait(88));

	// TAPIR_HERO
	this.instance_5 = new lib.TAPIR_HERO("single",15);
	this.instance_5.parent = this;
	this.instance_5.setTransform(394.2,500,0.6,0.6,0,0,180,0.1,400.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:646.2},51,cjs.Ease.get(1)).wait(74).to({skewY:0,startPosition:16},0).wait(38).to({skewY:180,startPosition:13},0).wait(30).to({startPosition:14},0).wait(84).to({regX:0,regY:401,scaleX:0.72,scaleY:0.72,x:512.6,y:509.4,startPosition:8},0).wait(45).to({startPosition:12},0).wait(36).to({startPosition:9},0).wait(25));

	// M-Droid
	this.instance_6 = new lib.DigiBot("single",8);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-31.1,139.1,0.15,0.15,0,0,0,-2.4,66.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:220.9},51,cjs.Ease.get(1)).to({regX:-2,regY:66.8,scaleX:0.3,scaleY:0.3,x:-126.6,y:255},74).wait(1).to({regX:-2.6,regY:66.1,scaleX:0.47,scaleY:0.47,skewY:180,x:-88.9,y:296.5,startPosition:9},0).to({regX:-2.5,regY:66,scaleX:0.5,scaleY:0.5,x:262,y:353.5},37,cjs.Ease.cubicOut).wait(30).to({regY:66.1,scaleX:0.6,scaleY:0.6,x:455.8,y:420.8,startPosition:7},0).wait(84).to({scaleX:0.72,scaleY:0.72,x:284.2,y:414.4},0).wait(81).to({startPosition:10},0).wait(25));

	// bg
	this.instance_7 = new lib.bgR("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(275.9,307.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:285.1},0).wait(1).to({x:294},0).wait(1).to({x:302.9},0).wait(1).to({x:311.5},0).wait(1).to({x:320},0).wait(1).to({x:328.3},0).wait(1).to({x:336.5},0).wait(1).to({x:344.5},0).wait(1).to({x:352.3},0).wait(1).to({x:359.9},0).wait(1).to({x:367.4},0).wait(1).to({x:374.7},0).wait(1).to({x:381.9},0).wait(1).to({x:388.9},0).wait(1).to({x:395.7},0).wait(1).to({x:402.3},0).wait(1).to({x:408.8},0).wait(1).to({x:415.1},0).wait(1).to({x:421.3},0).wait(1).to({x:427.2},0).wait(1).to({x:433.1},0).wait(1).to({x:438.7},0).wait(1).to({x:444.2},0).wait(1).to({x:449.5},0).wait(1).to({x:454.7},0).wait(1).to({x:459.6},0).wait(1).to({x:464.4},0).wait(1).to({x:469.1},0).wait(1).to({x:473.6},0).wait(1).to({x:477.9},0).wait(1).to({x:482},0).wait(1).to({x:486},0).wait(1).to({x:489.8},0).wait(1).to({x:493.5},0).wait(1).to({x:496.9},0).wait(1).to({x:500.3},0).wait(1).to({x:503.4},0).wait(1).to({x:506.4},0).wait(1).to({x:509.2},0).wait(1).to({x:511.8},0).wait(1).to({x:514.3},0).wait(1).to({x:516.6},0).wait(1).to({x:518.8},0).wait(1).to({x:520.7},0).wait(1).to({x:522.5},0).wait(1).to({x:524.2},0).wait(1).to({x:525.7},0).wait(1).to({x:527},0).wait(1).to({x:528.1},0).wait(1).to({x:529.1},0).wait(1).to({x:529.9},0).wait(226).to({regX:0.1,regY:0.1,scaleX:1.22,scaleY:1.22,x:366.7,y:268.5},0).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.4,294.2,1063,623.7);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#CCCCCC",
	opacity: 1.00,
	manifest: [
		{src:"images/intro6/Bitmap1.png?1522412760891", id:"Bitmap1"},
		{src:"images/intro6/Bitmap10.png?1522412760891", id:"Bitmap10"},
		{src:"images/intro6/Bitmap11.png?1522412760891", id:"Bitmap11"},
		{src:"images/intro6/Bitmap3.png?1522412760891", id:"Bitmap3"},
		{src:"images/intro6/Bitmap7copy.png?1522412760891", id:"Bitmap7copy"},
		{src:"images/intro6/Bitmap8copy.png?1522412760891", id:"Bitmap8copy"},
		{src:"images/intro6/Bitmap9.png?1522412760891", id:"Bitmap9"},
		{src:"sounds/intro.mp3?1522412760891", id:"intro"},
		{src:"sounds/questionComplete.mp3?1522412760891", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1522412760891", id:"stdClick"}
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