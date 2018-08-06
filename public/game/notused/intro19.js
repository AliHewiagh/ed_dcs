(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,65);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,113,522);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,206);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1616,656);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,630);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,867,651);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,825,622);


(lib.Bitmap8_1 = function() {
	this.initialize(img.Bitmap8_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,620,225);


(lib.Bitmap9_1 = function() {
	this.initialize(img.Bitmap9_1);
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
		this.stop();
		//this.mcCont.visible = false;
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
			 // _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt2 = new cjs.Text("I think here’s where we \ninsert the key.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 296;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(203.9,7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AWdF0IAAriMgs5AAAIAALi");
	this.shape.setTransform(204.9,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("AWdnnI5PAAIuaOsIIQusItgAA");
	this.shape_1.setTransform(204.9,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("Ao8hlItgAAIAAriMAs5AAAIAALiI5PAAIuaOtg");
	this.shape_2.setTransform(204.9,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn3, new cjs.Rectangle(53.8,-1,300.2,174.5), null);


(lib.tBm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		//this.mcCont.visible = false;
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
			  //_this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt2 = new cjs.Text("Saya rasa di sinilah tempat\nkita masukkan kunci.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 333;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(229.2,7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AaXF0IAAriMg0tAAAIAALi");
	this.shape.setTransform(229.9,36.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("AaXnnMghDAAAIuaOsIIQusItgAA");
	this.shape_1.setTransform(229.9,122.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("As2hlItgAAIAAriMA0tAAAIAALiMghDAAAIuaOtg");
	this.shape_2.setTransform(229.9,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm3, new cjs.Rectangle(59.3,-1,341.4,174.5), null);


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
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ag6AnQgOgDgNgDQgCgBgCAAQAVglAjgaQAGgEAHgDQAVgIAVAHQAXAJAQAUQAOARAMATQACADABADQgCABgDABAAJAsQAFgXgGgRQgHgQgWgCQgXgDgIARQgIAQACAXAAJAsQgEAAgEAAQgFAAgHgBQgLAAgMgBQgMgBgMgCABTAiQgVAHgeACQgMABgLAA");
	this.shape_16.setTransform(-0.6,3.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABfAnQgOgPgVgWQgVgUgYgLQgBgBgBAAQgZgMghAHQgRAGgRANQgIAGgHAH");
	this.shape_17.setTransform(0.9,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_16}]},1).wait(1));

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
	this.shape_50.graphics.f("#C6B3A1").s().p("AhRMvQhrgFhogsIAvheIAMgKIAFgFIARgPIAjggIgjAgIgRAPIgFAFIgMAKIgvBeQiagBh6g5Qh6g5g1g5QApgvAlgxQAkgyAYgbIAIgCQAdgFA+gRIDLg5IBKAFIB8AHQj0gvjxhWQgegKgQgJQgYgNgOgSQgVgcgFg8QgSjNAuiuQAYhbAphLQBpAGCWAvIBOAZIBCAWQgEg5gJg4IDIBQQByAuBOAiIAGACIAAAJQAAA/gGA9QgagEgUgOQhCgshcgwQg7gfh0gpQB0ApA7AfQBcAwBCAsQAUAOAaAEQgDBOgFBCQAFhCADhOIACAAIAAAAIACABQAMABANAAIAAAAIAAAAQAzAABEgaQA9gYA9gMIAGgBIACgBQA7gLA6AAIABAAIAAAAIAFAAIADAAIA6ABQgUAlgdAaQghAfg6AZIgKAEIhaAjIhuAtQg/AVgygHIgHgBQghgGgkgSQgbgOgsgcQiLhWiVg7Qh6gxiAgeIgwCDQghBTgNAeQgNAdgEA0QgEAyAeAqQAQAXAcATQAUAOAjAQQCCA9CJAnQCRAqCXASQgXAcgPAMQAPgMAXgcQBeALBgACQBOABBMgEQCIgICDgbIgNAJIgCABIgFADIAAAAIgKAGQiUBdhpAAIgBAAIAAAAQgUAAgTgDIgDgBIgZgFQiLgYifgOIgYgCIhOgGIgbgBIAbABIBOAGIAYACQCfAOCLAYIAZAFIADABQATADAUAAIAAAAIABAAQBpAACUhdIAKgGIAAAAIAFgDIACgBQgNAaiMCaQhcBliQBgIgkAXIh1BKIgRAMQhAAZhWAAIgggBgAjPGoIgoABQibAFhwAtQAzBeDSAfIA7AIIASACQBJAIBKADIBLABIAoAAQAcgCAXgCQAxgFAngNQAogPAvgaQAdgRA3gkQAmgbAugeQiGARhpgFQgmgCi6gVIgGAAIgmgEQAQgmAIgaIADgLIgDALQgIAagQAmQhkgKhQAAIAAAAgAA+FBIAAAAgADIi0QgNAAgMgBIgCgBIAAAAIgCAAQAGg9AAg/IAAgJQBAAZAiAIQA7AOAugJQA7gMAkgsQAYgdATg+QAniIAEiPQACg5gEg3QAhAMAgAOIAFADIAAAJQA5B3AdCEQAfCLgCCKQg0gDg7gCIg6gBIgDAAIgFAAIAAAAIgBAAQg6AAg7ALIgCABIgGABQg9AMg9AYQhEAagzAAIAAAAIAAAAgACri2IAAAAgACxk7IAAAAg");
	this.shape_50.setTransform(71,5.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3F3F3F").s().p("AJJD2Ig4gEQADiLgfiJQgdiEg5h3IAAgKQDnBmB3CfQBBDHgJCDQiMgphggJgAnoBoIhPgZQiVguhqgGQAohIA3g6IEkB1QAJA4AEA5IhCgXg");
	this.shape_51.setTransform(92.4,-43.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#84776B").s().p("AiqO/IB7jKIh7DKQlFgMisiwQBBiOARhTQizj/gqmcIByBQIAAAAQCVjmBTjFQArgIA3ADQgoBKgYBbQgvCuASDNQAFA8AWAdQANASAYANQAQAIAeALQDxBWD0AuIh9gHIhJgFQlGgYgtgjQhbhFg9hMQgvg6g0hZIgMgUIAMAUQA0BZAvA6QA9BMBbBFQAtAjFGAYIjLA5Qg+ARgdAGIgIABQgXAcglAxQglAxgoAvQA0A5B6A5QB7A5CZACQBnArBsAGQBrAFBLgeIjECJQifApiEAAIgdAAgAIIkjQgigJhAgYIgFgCQhPgihzguIjHhRQgThzgkhwQgrh/hBhzIBMgCQClgBDMARQBcD9ATD6QAFA6AAA5QAAg5gFg6QgTj6hcj9IAFAAQA3AHA0AJQDaAmCoA/QAEA4gBA4QgECQgoCHQgTA+gXAdQglAtg6AMQgTADgUAAQgfAAgkgIgAEyuuIAAAAg");
	this.shape_52.setTransform(46.4,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_15},{t:this.shape_14},{t:this.shape_25},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_15},{t:this.shape_14},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-116.4,191.2,232.9);


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
	this.shape_28.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADVETQAmADA/AfIhKJUQg0AEg3AAQggAAgiAAQgRAAgRAAQgHAAgIAAQgNAAgOgBQg4gDhagOQg1gLgfAHQgeAHgng2Qgng1gIgiQgHgigLi/QgHiIAgkMQADgdAEggQgCgFALhKQgviZAvirQAvirA3h5QAohXAthNQBEgnBNgcQBxgnB2gGQBdBQAzBSQguFEhkExQAAABAAAAQgKA0AAAcQABAbADBuQADBUgNBagAhnFmQAMgCAQgIQAUgJAZgPQAwgeAXgIIAAAAQAYgIAfgDQAQgBApAAQAgABAcAA");
	this.shape_28.setTransform(-40.4,-69.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#585858").s().p("AAiGbQg0gLgfAHQgeAHgng2Qgmg2gIgiQgIgigLi/QgHiGAgkMIAEAAQBNAAA+gIQB0gQBUgwIgOBVQhXBXg+BsQgUAkgHAZQgIAXgCAVQBUgTAEgFQgxDsAsBwQAsBwBFAiQg5gEhagNg");
	this.shape_29.setTransform(-59.4,-21.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#424242").s().p("ACBHiIgbgBQhEgigshwQgshvAxjsQgEAFhUARQABgUAIgXQAJgYATglQA9hrBXhXIAOhVQhUAwhzAPQg/AJhNAAIgEAAIAIg9QAnAEBegRQBegRBfgfQBggeAxgdQgsB+gaCDQgtAjgmAtQgbAggWAkQgQAHgNADQANgDAQgHIgIAMQATgIAkgFQhMDVAtClQAsCmAxAQIgIABIgIgBgAAkhNIAAAAg");
	this.shape_30.setTransform(-51.6,-27.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAYOMIAiAAQgJADgIAAQgJAAgIgDgAA6OMIgiAAQgwgQgsimQgtimBMjWQgkAFgSAIIAHgMQAWgjAbghQAlgtAtgjQAaiDAsh8QgxAchfAeQhgAeheARQheARgngEQgCgFALhKQgviZAvirQAvirA3h5QAohYAthMQBEgoBNgbQBxgnB2gHQBdBRAzBSQguFDhkEyIgBABQgKA0ABAbIAECJQACBVgNBaQAmADA/AfIhJJUQg0AEg4AAIggAAIghAAgABXESQggADgXAHIgBABQgXAIgwAeQgYAPgUAJQAUgJAYgPQAwgeAXgIIABgBQAXgHAggDIA5gBIA7ABIg7gBIg5ABgAAYOMIAAAAg");
	this.shape_31.setTransform(-39.5,-69.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAjHCIgeCUQhPB4gjAiQgiAjgyhHQgyhIBIhiQBJhhgdhQQhTiNAgidQgWiahoiYQhoiZg+jUQAegwAhgmQBchrBxgiQCug0DgB4QA8DmgWDGQgYDYAkCuICUDcIBNDzQgWA3g+ARAApGlIgGAdQAbB8gSA6QgRA6gHA7QgFAlAaAZQAPAPAaAKQBEAcAWhMQAEgQAGgRQAFAmAdANQAMAGAQACQA2AFATg1QATg1Azh3AEXDiQBXCqAVDFIAAABADFGFQAwBhgHCFQgkBJgUA/");
	this.shape_32.setTransform(-20.9,64.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#7E2326").s().p("ADBKvQAHg7ASg6QARg6gah8IAFgcIgFAcIgeCUQhQB4gjAjQgjAigxhHQgyhIBIhhQBIhigchPQhTiOAhidQgXiZhniZQhoiZg/jUQAegwAigmQAdBNAnBLQBMCRBnB8QASA4AwBsQAUAuAGARQAMAkAEAdQADAbADA1QAFAnARA0QASAyAQAfQAXArAkAfIA0DXQAEAVgBAGQgBAKgNAUQg1BZgRBhQgZgYAEgmg");
	this.shape_33.setTransform(-38.3,70.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DC3D42").s().p("ABuM9QgQgCgNgGQAJggATgqQAkhOAEgnQAEgngNgwQgJgggXg0IiJlDQgMgOgLgUQgphOgMh9QgHiQgMg3QgLg0gihEQhgjFhHjDQCug1DgB5QA8DmgWDGQgYDYAkCuICUDcIBNDzQgWA2g/ASIABgBQgVjGhXipQBXCpAVDGIgBABQgyB2gTA2QgRAwguAAIgKAAg");
	this.shape_34.setTransform(-7.5,62.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A92F33").s().p("ACQM9QgagLgPgPQAQhhA2hYQAMgVABgKQABgGgDgVIg1jXQgjgfgXgrQgRgfgRgyQgSg0gFgnQgCg2gEgbQgDgcgMgkQgGgRgTguQgxhsgRg3Qhph9hLiRQgnhLgehNQBchrBxgiQBHDEBfDFQAiBDALA1QAMA2AHCQQAMB9ApBOQALAUAMAPICKFDQAXA0AJAfQANAxgEAnQgEAmgkBPQgTApgIAhQgdgOgFglQAUg/AkhKIABgjQAAhvgqhUQAqBUAABvIgBAjQgkBKgUA/IgKAgQgQA4gpAAQgPAAgSgHg");
	this.shape_35.setTransform(-27.1,65.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ai1LMIiIlnQgriJARiYQgIlfAskoICOgeIHuhqQAAAqgBApQgIGQgWFpQAsCwAGCVQAAAHAAAIQACBCgGA8g");
	this.shape_36.setTransform(-42.9,-59.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#424242").s().p("AB3IIQiKgti/BPQhHi0gEjGQgEiJA+oMIHvhqIgCBTQhgBUgzAnQg+AvhHAsQhHAsg5AUQheGUBeEzQEQglCcCGIAAAOQhCgnhlghg");
	this.shape_37.setTransform(-36.8,-71.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#585858").s().p("Ai+G+QhekzBemTQA5gVBIgsQBGgrA+gwQAzgmBghUQgHGPgXFpQAsCxAGCUQiciGkQAlg");
	this.shape_38.setTransform(-32,-68.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("Ak9EwQgriJARiZQgIleAskoICOgeQg+INADCJQAFDFBHC0QC+hOCKAsQBmAhBCAoQACBCgGA8IoNB5g");
	this.shape_39.setTransform(-42.9,-54);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABxEPQAkAOAyAwIj1IkQgzgMg1gQQgfgKgggKQgPgFgRgFQgHgCgIgDQgMgDgOgGQg1gThSgoQgvgagfgDQgfgCgWg/QgVg/ADgiQACgjAvi6QAhiDBuj2QAMgbANgdQAAgFAghFQABigBfiVQBgiWBZhjQA+hHBCg8QBNgSBRgDQB5gEBzAdQBBBoAYBeQiLEni6EGQgBAAAAABQgZAvgHAbQgIAZgeBrQgXBQgnBTgAjVEBQANAAARgBQAVgEAdgHQA3gOAZgBIAAAAQAZAAAeAGQAPAEAoAMQAeAKAaAJ");
	this.shape_40.setTransform(-46.1,-73);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#585858").s().p("Ah4FtQgvgagggCQgfgDgVg/QgVg/ACgiQADgjAvi5QAhiDBuj3IADACQBKAWA9ALQB0AUBegVIgmBMQhtA5hbBVQgeAdgOAWQgOASgIAVQBVAGAFgCQh0DRAKB4QAJB4A2A1Qg0gThSgog");
	this.shape_41.setTransform(-76.1,-34.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#424242").s().p("AiHHHIgagJQg3g1gJh4QgJh4B1jSQgGADhVgHQAHgUAOgTQAPgVAegdQBbhVBsg5IAnhNQhfAVhzgUQg+gKhKgXIgDgBIAZg4QAlAPBeAMQBgALBjAAQBkgBA4gMQhQBqg/B2Qg1AUgyAgQgjAXgfAbIgYABIgHAAIAHAAIAYgBQgGAEgFAFQAVgDAjAHQiHC0gHCsQgHCsAqAdIgPgEgAg6hrIAAAAg");
	this.shape_42.setTransform(-58.5,-36.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AkDNVIg+gUIgggKQgrgeAIirQAGisCIi1QgkgHgUADQAFgFAGgEQAfgcAkgXQAxggA2gUQA/h1BPhqQg3AMhkACQhlAAhfgMQhfgLgkgQQgBgFAhhFQAAigBgiVQBgiWBZhjQA+hHBDg8QBLgSBSgDQB5gEByAdQBBBoAZBeQiMEni6EGIgBABQgZAvgHAbIglCEQgXBQgoBTQAkAOAyAwIj1IkQgzgMg1gQgAhqDsIA3AQIA3ATIg3gTIg3gQIgBAAIgCgBIgBAAIAAAAIAAAAIgDAAIgCgBIgBAAQgWgEgUAAIAAAAIAAAAIgCAAIgBAAIgBAAQgYABg4AOQgcAHgVAEQAVgEAcgHQA4gOAYgBIABAAIABAAIACAAIAAAAIAAAAQAUAAAWAEIABAAIACABIADAAIAAAAIAAAAIABAAIACABIABAAgAlhM3IAgAKQgSAAgOgKgAlhM3IAAAAg");
	this.shape_43.setTransform(-35.2,-73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-146,152,292);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-808.2,-328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-808.2,-328,1616,656);


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


(lib.shirnk_ray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AhLBnQgLgDAHgNIBeitQAJgRAPAAIAnABQASALg1BdQg1BegZAIg");
	this.shape.setTransform(55.4,167.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C69E00").s().p("AhLBnQAZgIA1heQA1hdgSgLIAVABQAdgBgUAcIhbCgQgJASgWABg");
	this.shape_1.setTransform(59.4,167.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3300").s().p("AhLBnQgLgDAHgNIBeitQAJgSAPAAIAnACQASALg1BdQg1BegZAJg");
	this.shape_2.setTransform(69,143.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B92500").s().p("AhLBoQAZgJA1heQA1hdgSgLIAVABQAdAAgUAcIhbCeQgJATgWABg");
	this.shape_3.setTransform(73,143.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AtnRqQDfgPD8mfIi/FSQhUBnh2AAQgnAAgrgLgAJUxlQBkgfCwAfQh3BRhtBzQDVjskFAog");
	this.shape_4.setTransform(115.8,115.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006DDB").s().p("AhLBnQAZgIA1heQA1hdgSgLIAVAAQAdAAgUAcIhbCfQgJATgWABg");
	this.shape_5.setTransform(86.7,120.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399FF").s().p("AhLBnQgLgDAHgNIBeitQAJgRAPAAIAnABQASALg1BdQg1BegZAIg");
	this.shape_6.setTransform(82.7,120.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAighQgWAxgtASQAZgqAqgZg");
	this.shape_7.setTransform(141.3,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003366").s().p("ACZACQArhfAAhtIgBgNIgBgEIADABQAFACABAFIAAABQAEALABAHIAAAKIABAaQAAA/gZBBQgGASgIAQIgHANQgnBRhOBRQgNAOgRAMQgOAKgMACIgGABQB1hoA0hygAimg4QAuhZBZhBQAAAIgEAIIgBABQhMBEgnBIQg3BfANBgIgEAHIAAAAQgEAIgFAHQgIh4Awhgg");
	this.shape_8.setTransform(122.7,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0054A7").s().p("AAUDgQgNABgHgQIAAAAQgGgOAGgTIABAAIADgIQBghSAphXQAmhTgKhfIABgCQAGgNAMgLIADgCQAQgJAQAAQAFAAAFACIAAAEIABANQAABtgrBfQg0Byh2BogAjYC2QgMgDgDgQQgCgLAAgKIAAgIQAHhfArhTIAJgQQAmhEBDhAQACAAAGgJIAUgPQALgIAMAAIADAAQAPABAFAKIACAIQhZBBgtBZQgwBgAHB4QgHAHgLAFQgKAHgKAAQgFAAgFgCg");
	this.shape_9.setTransform(118.9,57.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#009966").s().p("AhDCjQgsgFgFg4QgGg0AhhCIAHgNQAdg3AsgmQAvgpApAAQAPAAALAHQAeBHgqBYIgDAHQgtBbheA/IgGAAIgMgBg");
	this.shape_10.setTransform(118.4,56.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#113100").s().p("AAvAGIADgGQAqhZgehGQAUAKAHAdQAMAwgcBEIgEAHQgcBBgzAvQgtApglAEQBeg/Athbg");
	this.shape_11.setTransform(122.7,56.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC3333").s().p("AhbA7QgMgVAWggQAVgfAqgYQAqgZAmgCIADAAQBXAjiZBuQgUAHgTABIgIAAQggAAgLgSgAhPAWQAugSAWgxQgrAZgZAqg");
	this.shape_12.setTransform(145.9,9.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D96464").s().p("AAIhIQAkgCALAUQAMAVgVAgQgWAfgpAYQgWANgUAGQCZhuhWgjg");
	this.shape_13.setTransform(151.7,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("ApzSNIl/gFQgYgDgGgMIgCgDIAAgBQgCgGACgIIMn3vQA7i1BLiLQB1jaCbhyIBZgcQFqhsD4ATQBfAHBPAaQgpAZgpAfQguAiguAqQh9Byh+CqQhxCYhxDEIgNAWIgIAOItNWQQgwBDhjACIgHAAg");
	this.shape_14.setTransform(104.4,116.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4B4B4B").s().p("AvVSaQg5gIgHhVIABADQAHAMAYADIF/AFIAHAAQBjgCAvhDINN2QIAIgOIANgWQByjEBxiYQB9iqB9hyQAugqAugiQApgfApgZQAEAcACAcQAKDnjACFQjACEh0ERQhWDGnoLAIiRDQQh+CyiSDMQgxA2hOAAg");
	this.shape_15.setTransform(104.7,122.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,209.4,240.9);


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


(lib.key = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94610C").s().p("ADNEMImNAkIjkiEIgki3ICEkQIBfhGIAnAiIhaBEIiAD7IAkCUIDABoIGZglIBOBJIBwhHIAmAiIicBngADlC4Ii+AMIlRk5IAuhsIBahFIAQAOIhdBBIgnBgIFCEsIC+gMIBSBFIBJgvIAKAJIhUA2gAlQCCIgdiEIAyhkIFDEtIiuAVgAlegBIAdB1ICfBYICHgSIkdkGg");
	this.shape.setTransform(55.9,48.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1AE3F").s().p("AKcJHIieBvInVmhIAQgKIBmhFIhjhTIgDABIhuBNIhUhMIAVgNIBbg9IhbhLIAAAAIhrBKIiJh6ImLAcIkbitIguj1ICWlKIAAAAIBrhLIBIA/IhfBGIiEEQIAkC4IDkCEIGOgkIBgBXICchoISBP4IhRBEgAkojzImaAlIjAhoIgkiUICAj8IBahDIAcAYIhaBFIguBsIFSE6IC+gMIBWBGIBUg2IAUARIhwBHgAt7nNIAdCFICqBaICvgVIlEkugAkjkhIi+AMIlDktIAnhgIBdhBIAAgBIApAlIC6ClIAMAMIAwApIA+A3IAEAFICuCXIAEACIACADIADACIhJAvgAtPlWIgdh2IAmhLIEdEHIiHASg");
	this.shape_1.setTransform(108.5,94.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6770E").s().p("ALCHYIACigIFRElIgNCJgABRCmIABiSIAAgOIHVGhIAACWgAhhAKIAAiFIAAgeIBUBLIAAChgABiiaIACgBIBjBTIhlBEgAlAi1ImKAgIkcidIgujGIAAjuIAuD2IEcCtIGKgcICKB6IgBCmgAhLkwIBZBNIhZA8g");
	this.shape_2.setTransform(104.5,121.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DA8E10").s().p("AI+GCIBRhDIgUCKIhKBDgABQDMICdhvIgCChIibBkgAnkkpIBwhMIAACWIgQALIAAAOIhgBAgAqNnAIBrhLIAAABIAACIIgWAOIAAAeIhWA8g");
	this.shape_3.setTransform(151.6,143.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94610C").s().p("AD6EtIBnhDIgkgjIAIh+Ig4AzIhZhYIBchVIgthVIh2BnIhZhVIB1hnIh8g5IkfgRIhWA4IgkgfIBwg/IA0ACQB9AFB/ALIDIBWIiLBzIAZAYICNh4IBPCjIhaBOIAcAbIBXhIIgUDOIBCA7IhxBPgADcETIBIgzIoOncIhSA3IgMgLIBfg/IImHxIhWA7g");
	this.shape_4.setTransform(74.9,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6770E").s().p("Au6rmIAAipIBJBAIAkAfIAhAdIAMALIIZHZIALAKIASAQIABAAIAiAfISBP5IgTCNg");
	this.shape_5.setTransform(123.4,97);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1AE3F").s().p("AjriSIBwhQIhCg7IAUjPIhWBKIgdgcIBahPIhOiiIiOB3IgZgYICLhzIjIhWQh/gLh+gFIg0gCIhwBAIhJhBICKg5IF8AKID9BsIAAABIB9D5IgKDNIGMFoIhaA+IBbBQIK6JmIhJAygAkPiyIgSgQIBWg7IonnyIhfBAIgggdIBWg5IEgARIB8A5Ih0BoIBYBVIB2hoIAtBVIhcBXIBZBXIA4gzIgIB+IAkAjIhnBEgAtFqlIBSg2IIPHcIhIAzg");
	this.shape_6.setTransform(127,87);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DA8E10").s().p("AFCFMIBJgyIgVCBIhIA/gAmKmbIBag+IABCOg");
	this.shape_7.setTransform(186.6,140.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E89711").s().p("AhOB0IhdlSIDZBMIB/EzIhiA+g");
	this.shape_8.setTransform(46.7,133.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6760E").s().p("AlHBuIGpknIDmBVImdEeg");
	this.shape_9.setTransform(74.8,48.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#925F0B").s().p("AlggRIHGgxID7BGIgBABInaA+g");
	this.shape_10.setTransform(119.8,31.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#94610C").s().p("Am8ESIBqmaIFAjqIGAgyIBPCaIgtAhIg8hzIlIAqIkcDHIhnFjIA2CBIg+AsgAkFDCIBLkAIDNiQIBiC0IgdAUIgBgCIhUiPIiaBrIg/DYIAqBkIgsAfg");
	this.shape_11.setTransform(115.8,97.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B6770E").s().p("AAAAAIABAAIgBAAg");
	this.shape_12.setTransform(155.1,32.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DA8E10").s().p("Ai3DcIB+oDIDxBMIiVIDg");
	this.shape_13.setTransform(47.8,89.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1AE3F").s().p("ApVEXICVoDIGekgIHag+ICeEyIhqBNIhPibImBAzIk/DqIhqGZIA9CUIiHBngAlIE3IBnlkIEcjGIFIgqIA8BzIkbDNIhiizIjNCQIhLEBIAtBtIhpBKgAinDrIA/jaICahqIBUCOIABADIjvChIAFBjIgaATg");
	this.shape_14.setTransform(111.1,91.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.5,223.6,194.7);


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

	this.instance_1 = new lib.Bitmap8_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-46,-42);

	this.instance_2 = new lib.Bitmap9_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-46,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-42,92,80);


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


(lib.Symbol = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-36.4,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,-31,74,65);


(lib.Freezantium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#D5DCE0","#EDF6FF","#C5CED7","#455E8C"],[0,0.384,0.6,0.882],1.5,-0.3,0,1.5,-0.3,20.7).s().p("Ag1CvQgbgEgbgMQh4hRCWj8IABAEIDtCsQgsA/g5A2QglAkgyASIgCABQgJACgJgBIgBAAIgCAAIgDAAg");
	this.shape.setTransform(145.4,242.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#455E8C","#D5DCE0","#EDF6FF","#C5CED7","#455E8C"],[0.243,0.416,0.51,0.6,0.749],-7,9.3,7.1,-9.5).s().p("AhfgJIgCgEIguiVID2DIIAoB8IgBABg");
	this.shape_1.setTransform(147.3,226.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#30486B").s().p("AhMEJQhxhkCekcIglijIB1AtIAuCUQiVD8B3BRQAbANAbAEIAFAAQhWARhLAGQgTgHgUgMg");
	this.shape_2.setTransform(128.1,233.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#82BDD7","#28406B"],[0,1],32.2,31.4,0,32.2,31.4,102.7).s().p("AEWGyQgegFg7gSQgggJgrgPQgEgFgGgEQhUhpgMi2Qmxi/gJgHQhHg2AmhNQAjhcA8hvIMvE5IAmCjQieEdBwBjQAUANAUAGQgtAEgpAAQg7AAg0gIg");
	this.shape_3.setTransform(76.8,218.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E76168").s().p("AlBCaQimjQD6mAICLAyQg9BvgiBcQgmBNBGA2QAKAGGwDAQANC2BTBpQAGADAFAGQjihPnjjPg");
	this.shape_4.setTransform(49.5,213.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83A1AF").s().p("AkdGSQCGoCFJm/IBsEPQjxFZiZH3g");
	this.shape_5.setTransform(113.5,155.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A1C5D6").s().p("AiPAyQAFiZCcjZIB+DRQiiCqgREGg");
	this.shape_6.setTransform(145.7,94.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#22334D").s().p("An3JiQHLruBypGIGyB1QgzAVgoA1QgnA1ggBPQghBOACA6QABArALAGQh4ARi9F7Qi7F9AwCgg");
	this.shape_7.setTransform(74.9,115.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#677F8A").s().p("AlTGyQgxigC8l7QC9l9B3gRQAFABADgBIDqAvQlKG/iFIBg");
	this.shape_8.setTransform(96.3,144.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#809DAA").s().p("Ai7CsQgDABgFgBQgKgGgCgrQgCg6AhhNQAghOAog2QAng0AzgWIDeBCQidDZgFCag");
	this.shape_9.setTransform(126.7,77.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#381719").s().p("Aj3AUQkaiLhzisICXAiINcEIIEWEdg");
	this.shape_10.setTransform(140.1,67.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#455E8C","#D5DCE0","#EDF6FF","#C5CED7","#455E8C"],[0.243,0.416,0.51,0.6,0.749],11.9,-8.9,-9.2,9.5).s().p("Aizh8ICAgdIDmEGIhgAtg");
	this.shape_11.setTransform(214.6,87);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#D5DCE0","#EDF6FF","#C5CED7","#455E8C"],[0,0.384,0.6,0.882],6.2,0.4,0,6.2,0.4,26.9).s().p("AiMgrIAnhLQBZidBfBZIABACQBcBug5C7IgdBqg");
	this.shape_12.setTransform(223.5,76);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#21324A").s().p("AAwBzIkVkcIDGA9IEFEWg");
	this.shape_13.setTransform(199.8,85.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E76168").s().p("ApHC5QBIjvBehMQBehJBsgPIKQCcIB3AhQANAEALAHQh5gsh3CTIoRiCQhpgQg9BRIhQDIg");
	this.shape_14.setTransform(133.9,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AA1BTQgLgGgMgFIh3ggQAmgkAogoQgIg3BAgIIAYAFQAKACAIADQgOAMgFAUQgEAUAHARIAJAQQAHAJACAHQADAMgFAbQgCAcgEAVIgcgRg");
	this.shape_15.setTransform(187,9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#93E02E").s().p("AgoA6QAEgVADgcQAFgagEgMQgCgIgGgJIgJgQQgIgRAFgUQAEgUAPgMQALAFAJAHQAhAZACA3IAhCrQgygsgtgeg");
	this.shape_16.setTransform(199.1,13.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#82BDD7","#28406B"],[0,1],50.7,-5.3,0,50.7,-5.3,116.9).s().p("AqUACIBQjHQA9hSBpAQIISCDQB2iUB5AsIAbARQAvAdAyAtQBTBKBjB2QhehYhnCoIgtBSIjbA6g");
	this.shape_17.setTransform(156.8,41.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#30486B").s().p("AAzFnIDbg5IAthSQBnipBeBYQArAyAuA7QhghZhaCdIgnBLIh/AdgApRlYIgGgCIEXhJIIFBcQhBAIAJA3QgoApgmAkg");
	this.shape_18.setTransform(171.7,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.7,-9.5,226.9,272.1);


(lib.T_features = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_mouth
	this.instance = new lib.T_mouth("single",1);
	this.instance.parent = this;
	this.instance.setTransform(28.3,20.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:1},0).wait(1));

	// T_nose
	this.instance_1 = new lib.T_nose("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-13.6,1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-4.1,y:3.1,startPosition:1},0).wait(1).to({x:-13.6,y:1.8,startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// T_eye
	this.instance_2 = new lib.T_eye("single",5);
	this.instance_2.parent = this;
	this.instance_2.setTransform(34.4,-21.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.T_eye("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(34.4,-21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:5},0).wait(1).to({x:-18.2,y:-30.8,startPosition:0},0).wait(1).to({x:34.4,y:-21.8,startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1));

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
	this.shape_40.graphics.f("#FFFFFF").s().p("AiHAVQBSgHBFgUQAtgPAXgEQAegDAWAIQgXACgeALIhCAVQgtANgtAAQgfAAgfgGg");
	this.shape_40.setTransform(-139.5,-73.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(1,1,1,3,true).p("AA+iVQgGABgFADQgWALgVAMQgXAOgYAQQgQAMgnAfQgNAKgPANQgiAagXAZQgOAPgKAOQgEAGgEAGQgHANgCAOQgFAhAbAlQAZAhAdAZAFUimQhMgVhDgaQhCgagkgTQgkgUhFg4QhGg4ghgQQghgRhQAaQhEAXhZALQgQACgMAFQgUAIgKAQQgCADgBACQgLAUABAdQABALACAMQAQAaAXAWQAYAVAhABQAhABAugFQAmgEA2gPQBQA6BBA6AhegxQgEgGgEgFQg1g5hDAXQgdALgaAVQgNAMgHALQgaApAuAsQAOAOArAhAB7AOQgCABgCABQgDACgCABQgBAAAAAAQgBABAAAAQhFAmguAfQg2AkgoAmQgFAFgFAFQgEAFgFAEQgSAVgKASQgMAvA1A8QA2A7AvAWQA0AQA8grQAVgSAWgbQAnAOAtAKQAuAKA9gKQA9gKAyggACNDjQgNAIgNANQgCACgBABIgpA3ABwD7QA4ARgPBF");
	this.shape_41.setTransform(-113.1,-36.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7E2326").s().p("AgYFWQgvgWg2g8Qg1g7AMgvQgdgagYghQgcglAFghQgrgggOgOQgugsAagpQAUANAYAEQAjAGAsgNQAcgJAsgWIAIAKIgcAXQgiAbgXAZQgNAPgKAPIgIAMQgIAMgCANQACgNAIgMIAIgMIANATQAUAeAMANQATATApAbIgJAJIgKAKQgRAUgLATQALgTARgUIAKgKQAfAeAlAbQAWARANAAQAIAAAKgGIAQgLIA9gtQAZgTAVgHQAVgHBYAWQBYAXBcgVQAwgMAXgIIgBAdIgBAEQgIBBghBBQgyAgg9AKQg9AKgugJQgtgKgngPQADgOAAgNQAAgtgsgNIADgDQANgOANgHQgNAHgNAOIgDADIgpA2IApg2QAsANAAAtQAAANgDAOQgWAbgVATQgsAfgoAAQgNAAgPgEgABaC4IAAAAgABlg0IAJgCIgNAEIAEgCgAjNkUQg3APgmAEQguAFghgBQghAAgXgWQgYgVgQgaIgCgXIA0AfQAYAPAsgCQAsgCBpgZQBnBQBaA6QgYAPgXAQQhCg6hPg7g");
	this.shape_42.setTransform(-110.9,-30);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A92F33").s().p("Ag8ERQglgbgfgeIAJgKQApgmA1gkQAugfBFgmIABgBIABAAIAFgDIANgDIgJABIgEACIgFADIgBAAIgBABQhFAmguAfQg1AkgpAmQgpgbgTgTQgMgMgUgeIgNgVQAKgOANgPQAYAYAaATQAbATATABQAQAAAVgNQB9hJAjAHIAIABQANgBgBAHIAaAFQAdABBGAVQBGAVCZgfQASAmgCBVQgXAIgwAMQhcAUhYgWQhYgWgVAHQgVAHgZATIg9AtIgQALQgKAGgIAAQgNgBgWgQgAAWBBIABAAIgCABIgVACIAWgDgAkTAVQgYgFgUgNQAHgKANgMQAagVAdgKQBDgYA1A5QgsAWgcAJQgdAJgaAAQgNAAgLgCgAjOjZQhpAYgsACQgsADgYgPIg0ggQgCgdALgUIADgFQABAFAPALIAwAgQAhAWBhgYQBhgYA6AbQA7AaB+BNIgfAfQgGABgFADQgWALgUAMQhag6hnhQg");
	this.shape_43.setTransform(-110.9,-41);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DC3D42").s().p("AiVDnQgagTgYgYQAYgZAhgbIAdgXQAngfAQgLQAXgRAYgOQAUgMAWgLQAFgDAGgBIAggeQh/hMg6gbQg7gbhhAYQhgAYgigWIgwggQgOgLgCgEQALgRATgIQgTAIgLARQgDgMAhgNQANgFAPgCQBZgLBFgXQBPgaAhARQAhARBGA4QBFA4AkATQAkATBDAaQBCAaBNAWQBNBLBAB7QiYAfhGgUQhGgWgegBIgagFQACgHgOABIgIAAQgjgIh8BJQgVANgRAAQgTAAgbgUgAAYC5IgWADIAVgCIACgBIAAAAIgBAAg");
	this.shape_44.setTransform(-111.1,-53.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgOAUIAmgjQAqgnAygcIAeAHQg8Arg5AxIgUATQghAKgiAPQggALghAGIgWAEg");
	this.shape_45.setTransform(-62.9,-63.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgPllQgMAGgMAHQhOAug9BJQhUAihOAgQgjAOghAOQgRAHgRAHIBAHfQCBgJDagnQCQABBrgTQBrgSAlgUQBThegFh9QgEh8hChoQgHgMgIgLQhBhahogjQhkgihnAOg");
	this.shape_46.setTransform(-47.6,-38.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DC3D42").s().p("AjdC1IgLgeQg2iMgUgcICjhCQA9hIBOguQBvgUBcBJQBcBIAQBlQh0A/g8AGQgLABgkgNQgSAVhRApQhTAphEAQQgVAFgOAAQgdAAAJgZg");
	this.shape_47.setTransform(-51.1,-52.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A92F33").s().p("AjVERQgOgGgLgQQgIgJgLgUQgig/hpjNIBEgcQAUAcA2CLIALAeQgOAlBFgQQBEgRBTgpQBRgpASgVQAkANALgBQA8gFB0g/QgQhlhchJQhchJhvAUIAYgNQBngOBkAiQBnAjBCBaQAZBNACBIQABBVgfBHQgnAQgTAHQgrAPglAFQgrAFgngLQgqgMgdgbQgHAZgZARQgVAPgeAIQgPADgpAEQgjADgTAGIgxAQQgOAEgMAAQgMAAgJgEg");
	this.shape_48.setTransform(-48.9,-47.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7E2326").s().p("Am6jAIAigNQBpDNAhA+QALAUAIAJQALAQAOAGQATAJAcgJIAxgQQATgGAjgDQApgEAPgDQAegIAVgPQAZgRAHgZQAdAcAqALQAnALArgFQAlgEArgQQATgGAogQQAfhHgChVQgBhIgahNIAPAWQBCBoAEB9QAFB8hTBeQglAUhrASQhrATiQgBQjaAoiBAJg");
	this.shape_49.setTransform(-47.6,-31.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:0,rotation:0,x:17.6,y:74,startPosition:0,regX:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:0.2,rotation:-116,x:102.5,y:-68.3,startPosition:1,regX:0,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance,p:{regY:0.3,rotation:106,x:-86.2,y:-45.7,startPosition:8,regX:-0.1,scaleX:1.05,scaleY:1.05}}]},1).to({state:[]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance,p:{regY:0.3,rotation:-113.4,x:46.8,y:-49,startPosition:7,regX:0,scaleX:1.05,scaleY:1.05}}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance,p:{regY:0.3,rotation:108,x:-98,y:-56.2,startPosition:9,regX:-0.1,scaleX:0.938,scaleY:0.938}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-137.7,92.4,275.4);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.key("single",2);
	this.instance.parent = this;
	this.instance.setTransform(-35.2,-14.7,0.25,0.25,-13.6,0,0,3.5,3.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AkeEyIAApjII+AAIAAJjg");
	this.shape.setTransform(-4.8,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:3.4,scaleX:0.25,scaleY:0.25,rotation:-13.6,x:-35.2,y:-14.7}}]}).to({state:[{t:this.instance,p:{regY:3.2,scaleX:0.35,scaleY:0.35,rotation:-13.5,x:-51.2,y:-16.7}}]},1).to({state:[{t:this.instance,p:{regY:3.4,scaleX:0.25,scaleY:0.25,rotation:-13.6,x:-35.2,y:-14.7}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-19.8,58,37.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.key("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-31.2,-17.6,0.25,0.25,-13.6,0,0,3.5,3.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AkfEyIAApjII/AAIAAJjg");
	this.shape.setTransform(-1.8,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regY:3.4,scaleX:0.25,scaleY:0.25,rotation:-13.6,x:-31.2,y:-17.6}}]}).to({state:[{t:this.instance,p:{regY:3.2,scaleX:0.35,scaleY:0.35,rotation:-13.5,x:-44.2,y:-26.6}}]},1).to({state:[{t:this.instance,p:{regY:3.4,scaleX:0.25,scaleY:0.25,rotation:-13.6,x:-31.2,y:-17.6}}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-18,60.5,35.2);


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

	// Layer_5
	this.instance = new lib.key("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-143.4,68.2,0.25,0.25,-13.6,0,0,3.5,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-33.2},19,cjs.Ease.quadOut).to({_off:true},6).wait(54).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:165.7,y:-197.5},25,cjs.Ease.cubicOut).to({regX:3.9,scaleX:0.36,scaleY:0.36,x:381.8,y:-99.6},25,cjs.Ease.cubicIn).wait(5).to({regX:3.3,regY:4,scaleX:0.25,scaleY:0.25,rotation:0,skewX:-124.9,skewY:55.1,x:434.3,y:-63.4,startPosition:3},0).to({_off:true},44).wait(22));

	// Layer_7
	this.instance_1 = new lib.key("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-143.4,153.7,0.25,0.25,-13.6,0,0,3.5,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-33.2},19,cjs.Ease.quadOut).to({_off:true},6).wait(54).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:164.8,y:-196.7},25,cjs.Ease.cubicOut).to({regX:3.9,scaleX:0.36,scaleY:0.36,x:381.2,y:-99},25,cjs.Ease.cubicIn).to({_off:true},5).wait(66));

	// Layer_9
	this.instance_2 = new lib.Freezantium("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-87.1,-32.2,0.23,0.23,0,-6,174,3.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:23.1},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:0},0).to({x:-86.9},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// Layer_8
	this.instance_3 = new lib.shirnk_ray("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-89,-114.8,0.23,0.23,0,-6,174,3.6,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:19.3},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:0},0).to({x:-90.7},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// Layer_3
	this.instance_4 = new lib.repellentgfx("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-112.6,-165.4,0.275,0.275,0,0,0,0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-2.9},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:0},0).to({x:-112.6},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box
	this.instance_5 = new lib.inv_box("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-110.4,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-0.4},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:0},0).to({x:-110.4},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box
	this.instance_6 = new lib.inv_box("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-110.4,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-0.4},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false,startPosition:2},0).to({_off:true},1).wait(39).to({_off:false,startPosition:0},0).wait(60).to({startPosition:0},0).to({x:-110.4},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box
	this.instance_7 = new lib.inv_box("single",1);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:-0.4},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false,startPosition:2},0).to({_off:true},1).wait(39).to({_off:false,startPosition:0},0).wait(60).to({startPosition:0},0).to({x:-110.4},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box
	this.instance_8 = new lib.inv_box("single",1);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-110.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:-0.4},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:1},0).to({x:-110.4},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box
	this.instance_9 = new lib.inv_box("single",1);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-110.4,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-0.4},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:1},0).to({x:-110.4},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box
	this.instance_10 = new lib.inv_box("single",1);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-110.4,-168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:-0.4},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:1},0).to({x:-110.4},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

	// inv_box_bg
	this.instance_11 = new lib.inv_box_bg("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-109,0,1,1,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:1},19,cjs.Ease.quadOut).to({_off:true},6).wait(14).to({_off:false},0).to({_off:true},1).wait(39).to({_off:false},0).wait(60).to({startPosition:0},0).to({x:-109},19,cjs.Ease.quadIn).to({_off:true},20).wait(22));

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
	this.instance.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-34.2,341.3,174);


(lib.db_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.db_feature("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.1,0);
	this.instance.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-10.2,-14.8,0,-10.2,-14.8,99.5).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:0}}]}).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:1}}]},1).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:4}}]},2).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:5}}]},1).wait(1));

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


(lib.mark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.8,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:3.3},30).to({y:-0.5},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.2,-31.5,74,65);


(lib.tapirhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.T_features("single",1);
	this.instance.parent = this;
	this.instance.setTransform(11.2,-10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false,startPosition:8},0).to({_off:true},1).wait(14));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.3,-79,168.7,158.1);


(lib.TAPIR_HERO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.tapir_spacehelmet("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-5.4,-293.2);

	this.instance_1 = new lib.T_Arm_L("single",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(200.2,-223.9,0.865,0.986,0,39.3,46.3,20.9,-42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:0,regY:0,rotation:0,x:-5.4,y:-293.2}}]}).to({state:[]},1).to({state:[{t:this.instance,p:{regX:-1.7,regY:-3,rotation:-2.2,x:36,y:-265.2}},{t:this.instance_1}]},2).to({state:[]},1).to({state:[{t:this.instance,p:{regX:-1.7,regY:-3,rotation:-2.2,x:36,y:-265.2}}]},28).to({state:[]},1).wait(87));

	// Layer_4
	this.instance_2 = new lib.T_shoulderPad_L("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(83.7,-181.3);

	this.instance_3 = new lib.T_shoulderPad_R("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-83.5,-161.2,1,1,14.1,0,0,-0.1,0);

	this.instance_4 = new lib.T_Arm_R("single",5);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-71.2,-177.5,1,1,14.1,0,0,-33.9,-140.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},2).to({state:[]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},28).to({state:[]},1).wait(87));

	// tapir body
	this.instance_5 = new lib.T_shoulderPad_R("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-136,-176.1);

	this.instance_6 = new lib.T_Body("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-27.5,-125.1,1,1,0,0,0,0,0.2);

	this.instance_7 = new lib.T_Arm_R("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-132.2,-192.4,1,1,0,0,0,-33.8,-140);

	this.instance_8 = new lib.T_Legs("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-3.8,-18.4,1,1,0,0,0,16.9,-193.8);

	this.instance_9 = new lib.T_shoulderPad_L("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(124.8,-186,1.013,0.993,0,-39.1,-39.3,0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{startPosition:0}},{t:this.instance_7},{t:this.instance_6,p:{rotation:0,x:-27.5,y:-125.1,startPosition:0}},{t:this.instance_5}]}).to({state:[]},1).to({state:[{t:this.instance_8,p:{startPosition:2}},{t:this.instance_6,p:{rotation:5.7,x:15.7,y:-90.3,startPosition:3}}]},2).to({state:[]},1).to({state:[{t:this.instance_8,p:{startPosition:2}},{t:this.instance_6,p:{rotation:5.7,x:15.7,y:-90.3,startPosition:3}},{t:this.instance_9}]},28).to({state:[]},1).wait(87));

	// Layer_6
	this.instance_10 = new lib.T_Arm_L("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(70.2,-184.3,1,1,0,0,0,-14.8,-117.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(119));

	// tapir head
	this.instance_11 = new lib.tapirhead("single",2);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.4,-278.5,1,1,0,4.5,-175.5,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(2).to({_off:false,regX:-0.3,regY:0,skewX:4.7,skewY:-175.3,x:44.8,y:-243.4,startPosition:4},0).to({_off:true},1).wait(28).to({_off:false,startPosition:2},0).to({_off:true},1).wait(87));

	// Layer_9
	this.instance_12 = new lib.T_shoulderPad_L("single",1);
	this.instance_12.parent = this;
	this.instance_12.setTransform(77.4,-171.9,1.001,1,0,-88.4,-85.5,-43.2,-44.2);

	this.instance_13 = new lib.T_Arm_L("single",11);
	this.instance_13.parent = this;
	this.instance_13.setTransform(83.7,-168.2,0.999,0.999,0,83.7,84.7,-130.3,-12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},3).to({state:[]},1).to({state:[{t:this.instance_13}]},28).to({state:[]},1).wait(87));

	// tapir body
	this.instance_14 = new lib.T_Arm_L("single",9);
	this.instance_14.parent = this;
	this.instance_14.setTransform(106.4,-167.1,1,0.965,0,-99.3,-99.2,-14.8,-117);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).to({_off:true},1).wait(116));

	// T_Legs
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-14.8,-40.4,0,-14.8,-40.4,285.4).s().p("AyTHxQjCgEkMgiQhzgPhEgcQhhgngmhJQgmhJAZhbQAOgxAcgpQAUgeAdgZQA4g0BXgmQA1gYBugjQgsg+BGhEQA9g9BcgVQJ6iWKUAWQHAAQGwBeIADAAQHiBRHmCbQBOAaApAYQA9AkAYA0QAtBmhlBjQhXBWiIAkQj8BBkxADQj1ADk+gnQkLgggpgEQiwgPiEAOQiAANjKA3Qj+BGhKAOQi5AljcAAIg2AAg");
	this.shape.setTransform(-0.1,351.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},1).wait(87));

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

	// Layer_12
	this.instance = new lib.db_atL("single",0);
	this.instance.parent = this;
	this.instance.setTransform(62,-121.4);

	this.instance_1 = new lib.db_headlight("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(8.7,-156.6);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.7,-109.4);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{x:0.7,y:-109.4}},{t:this.instance_1,p:{y:-156.6}},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:0.4,y:-109.1}},{t:this.instance_1,p:{y:-155.7}},{t:this.instance}]},7).to({state:[]},1).wait(4));

	// Layer 5
	this.instance_3 = new lib.db_headf("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-5.1,-92.2);

	this.instance_4 = new lib.db_mon("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.8,-99.9);

	this.instance_5 = new lib.db_face("single",2);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-8.8,-99.9);

	this.instance_6 = new lib.db_atR("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-54,-120.3);

	this.instance_7 = new lib.db_neck("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-16.2,-46.4);

	this.instance_8 = new lib.db_handL("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(79.7,28,1,1,-23.7,0,0,0,-18.5);

	this.instance_9 = new lib.db_armL("synched",0);
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
	this.instance_13.setTransform(-142.7,-72.2,1,1,0,140.2,-39.8,0,-18.8);

	this.instance_14 = new lib.db_armR("single",2);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-40.3,-18.5,1,1,96,0,0,22.8,-28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14,p:{regX:22.8,regY:-28.8,rotation:96,x:-40.3,y:-18.5,startPosition:2}},{t:this.instance_13,p:{regX:0,regY:-18.8,rotation:0,skewX:140.2,skewY:-39.8,x:-142.7,y:-72.2}},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{mode:"synched"}},{t:this.instance_8},{t:this.instance_7,p:{scaleY:1,skewX:0,x:-16.2}},{t:this.instance_6},{t:this.instance_5,p:{y:-99.9}},{t:this.instance_4,p:{y:-99.9}},{t:this.instance_3}]},1).to({state:[]},1).to({state:[{t:this.instance_14,p:{regX:22.9,regY:-28.9,rotation:17.5,x:-60,y:-40.2,startPosition:0}},{t:this.instance_13,p:{regX:-0.1,regY:-19,rotation:17.5,skewX:0,skewY:0,x:-113.5,y:-0.3}},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{mode:"single"}},{t:this.instance_8},{t:this.instance_7,p:{scaleY:1.021,skewX:11.7,x:-12.1}},{t:this.instance_6},{t:this.instance_5,p:{y:-99}},{t:this.instance_4,p:{y:-99}},{t:this.instance_3}]},7).to({state:[]},1).wait(4));

	// Layer 2
	this.instance_15 = new lib.db_shadow("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.7,207.3);
	this.instance_15.alpha = 0.5;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(4));

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
	this.mcCont.setTransform(253.4,115.1,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("We need to answer a few \nquestions to gain access.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 320;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(91,50.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AZRF3IAAroMgyhAAAIAALo");
	this.shape.setTransform(91.5,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("A5Qj8IQPAAIiqHXIHmnXIdWAA");
	this.shape_1.setTransform(91.5,142.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("ApBCIIwPAAIAArnMAyhAAAIAALnI9WAAInmHYg");
	this.shape_2.setTransform(91.5,103.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn4, new cjs.Rectangle(-72.2,41.8,350.5,128), null);


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
	this.mcCont.setTransform(505,325.8,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.myTxt2 = new cjs.Text("We’ll find out soon.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 258;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(376.8,286.2);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AYxDyIAAnSMgmCAAAIAACCIrViMILVFtIAABv");
	this.shape.setTransform(335.3,300.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("AzAAAIX2AAIBiAAIMpAA");
	this.shape_1.setTransform(372.1,325.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AMCDvIhhAAI33AAIAAhwIrVlsILVCLIAAiCMAmCAAAIAAHTg");
	this.shape_2.setTransform(335.8,301.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.myTxt1 = new cjs.Text("Is that where Mabusa hid the sun?", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 416;
	this.myTxt1.alpha = 0.99607843;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(192,43.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("Ad6DXIAAmoMg7zAAAIAAGo");
	this.shape_3.setTransform(190.2,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("A95nwMAgJAAAIkEO6IJvu6IV/AA");
	this.shape_4.setTransform(190.2,130.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("ACQkHMggJAAAIAAmrMA7zAAAIAAGrI1/AAIpvO6g");
	this.shape_5.setTransform(190.2,107.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,37.5,420.3,145);


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

	// Layer 4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(253.4,115.1,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Kita perlu menjawab beberapa \nsoalan untuk membuka pintu.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 363;
	this.myTxt.alpha = 0.99607843;
	this.myTxt.parent = this;
	this.myTxt.setTransform(71.5,50.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AcZF3IAAroMg4xAAAIAALo");
	this.shape.setTransform(71.5,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("A8YjYIWfAAIiWGRIHSmRIdWAA");
	this.shape_1.setTransform(71.5,138.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("Al5CrI2fAAIAArnMA4xAAAIAALnI9WAAInSGSg");
	this.shape_2.setTransform(71.5,100.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm4, new cjs.Rectangle(-112.2,41.8,390.5,120.8), null);


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
	this.mcCont.setTransform(475,362.8,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_1
	this.myTxt2 = new cjs.Text("Kita akan tahu \ntak lama lagi.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 214;
	this.myTxt2.alpha = 0.99607843;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(358.8,293.2);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("AWfFqIAArCMghdAAAIAACCIrViMILVFtIAAFf");
	this.shape.setTransform(320.7,322.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("AwuAAIUnAAIDhAAIJVAA");
	this.shape_1.setTransform(357.5,359.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ANEFnIjhAAI0mAAIAAlgIrWlsILWCLIAAiCMAhdAAAIAALDg");
	this.shape_2.setTransform(321.2,323.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_5
	this.myTxt1 = new cjs.Text("Mungkinkah Mabusa telah \nmenyembunyikan Matahari di sana?", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 420;
	this.myTxt1.alpha = 0.99607843;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(170.2,15.8);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(14,224,224,0.996)").ss(1,0,0,3).p("Egg+AFfIAAq4MA5cAAAIBJAAIHYAAIAAK4");
	this.shape_3.setTransform(167.9,46);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(14,224,224,0.996)").ss(4,0,0,3).p("Egg+gHwMAmtAAAIkFO6IJwu6IVlAA");
	this.shape_4.setTransform(167.9,130.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("AFviAMgmtAAAIAAq5MA5cAAAIBJAAIHYAAIAAK5I1lAAIpwO6g");
	this.shape_5.setTransform(167.9,94);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.1,10.5,427.2,172);


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
	this.instance.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.instance_1 = new lib.tEn4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.6,1.9,1,1,0,0,0,133.5,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.1,8.6,390.5,120.3);


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
	this.instance.setTransform(48.1,1.9,1,1,0,0,0,133.5,35.6);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.1,1.9,1,1,0,0,0,133.5,35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.6,-22.7,427.2,171.5);


// stage content:
(lib.intro19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:1,a2:184,a3:339});

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
	this.frame_179 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		var _this = this;
		this.stop();
		function doPlay1(e){
			_this.btnClick1.removeEventListener("click", doPlay1);
			_this.play();
		}
		this.btnClick1.addEventListener("click", doPlay1);
		
		function doPlay2(e){
			_this.btnClick2.removeEventListener("click", doPlay2);
			_this.play();
		}
		this.btnClick2.addEventListener("click", doPlay2);
	}
	this.frame_240 = function() {
		playSound("questionComplete");
	}
	this.frame_339 = function() {
		var _this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_359 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(175).call(this.frame_179).wait(60).call(this.frame_239).wait(1).call(this.frame_240).wait(99).call(this.frame_339).wait(20).call(this.frame_359).wait(1));

	// t
	this.instance = new lib.dialogue1();
	this.instance.parent = this;
	this.instance.setTransform(190.6,84.4);

	this.instance_1 = new lib.dialogue3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(269.6,391.9);

	this.instance_2 = new lib.dialogue4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(425.3,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},119).to({state:[{t:this.instance_1}]},65).to({state:[]},116).to({state:[{t:this.instance_2}]},39).wait(21));

	// Layer_1
	this.instance_3 = new lib.hlBlinkStars();
	this.instance_3.parent = this;
	this.instance_3.setTransform(42.7,438.2,1,1,0,0,0,0.1,-2.5);

	this.instance_4 = new lib.hlBlinkStars();
	this.instance_4.parent = this;
	this.instance_4.setTransform(42.7,356.2,1,1,0,0,0,0.1,-2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},239).to({state:[]},1).wait(120));

	// Question
	this.btnClick2 = new lib.Symbol11();
	this.btnClick2.name = "btnClick2";
	this.btnClick2.parent = this;
	this.btnClick2.setTransform(46.4,440.8,1,1,0,0,0,-2.9,0);
	new cjs.ButtonHelper(this.btnClick2, 0, 1, 2, false, new lib.Symbol11(), 3);

	this.btnClick1 = new lib.Symbol10();
	this.btnClick1.name = "btnClick1";
	this.btnClick1.parent = this;
	this.btnClick1.setTransform(45.3,358.2);
	new cjs.ButtonHelper(this.btnClick1, 0, 1, 2, false, new lib.Symbol10(), 3);

	this.instance_5 = new lib.mark("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(473.9,225.8,0.551,0.598,0,16.3,21.3,-0.2,3);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnClick1},{t:this.btnClick2}]},239).to({state:[]},1).to({state:[{t:this.instance_5}]},60).to({state:[{t:this.instance_5}]},20).to({state:[{t:this.instance_5}]},19).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300).to({_off:false},0).to({regX:-0.1,scaleX:3.5,scaleY:3.8,x:474.1,y:225.5,alpha:1,startPosition:20},20,cjs.Ease.elasticOut).wait(19).to({scaleX:1.65,scaleY:1.8,x:592.7,y:304.3,mode:"independent"},0).wait(21));

	// inventory
	this.instance_6 = new lib.inventory("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(48.1,273.3,1,1,0,0,0,1,0);

	this.instance_7 = new lib.key("single",3);
	this.instance_7.parent = this;
	this.instance_7.setTransform(599.3,295.4,0.1,0.1,0,-124.9,55.1,3.6,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{mode:"synched",startPosition:0,loop:false}}]},214).to({state:[{t:this.instance_6,p:{mode:"single",startPosition:39,loop:undefined}}]},25).to({state:[{t:this.instance_6,p:{mode:"synched",startPosition:79,loop:false}}]},1).to({state:[{t:this.instance_7}]},99).wait(21));

	// Spaceship
	this.instance_8 = new lib.Bitmap9();
	this.instance_8.parent = this;
	this.instance_8.setTransform(90.1,345.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(339).to({_off:false},0).wait(21));

	// TAPIR_HERO
	this.instance_9 = new lib.TAPIR_HERO("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(113.9,568.9,0.45,0.45,0,0,0,-0.2,405.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).wait(45).to({startPosition:3},0).to({_off:true},20).wait(155).to({_off:false,regX:-0.1,regY:405.4,x:250,y:522.1,startPosition:32},0).wait(21));

	// Digi-Bot
	this.instance_10 = new lib.DigiBot("single",1);
	this.instance_10.parent = this;
	this.instance_10.setTransform(74.9,461,0.4,0.4,0,0,180,-2.3,68.8);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(119).to({_off:false},0).to({x:224.9},30).to({_off:true},35).wait(155).to({_off:false,regX:-2.2,regY:68.9,scaleX:0.45,scaleY:0.45,x:370.7,y:494.7,startPosition:9},0).wait(21));

	// bg
	this.instance_11 = new lib.Symbol3("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(784.2,304.1);

	this.instance_12 = new lib.Bitmap5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-9.9,-10);

	this.instance_13 = new lib.Bitmap6();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-28.1,-28.1);

	this.instance_14 = new lib.Bitmap8();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_11}]},29).to({state:[{t:this.instance_11}]},60).to({state:[{t:this.instance_12}]},30).to({state:[{t:this.instance_13}]},65).to({state:[{t:this.instance_14}]},155).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(29).to({startPosition:0},0).to({x:64.2},60,cjs.Ease.get(1)).to({_off:true},30).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(376,276.1,1616,656);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/intro19/Bitmap1.png?1527798641877", id:"Bitmap1"},
		{src:"images/intro19/Bitmap10.png?1527798641877", id:"Bitmap10"},
		{src:"images/intro19/Bitmap11.png?1527798641877", id:"Bitmap11"},
		{src:"images/intro19/Bitmap2.png?1527798641877", id:"Bitmap2"},
		{src:"images/intro19/Bitmap5.png?1527798641877", id:"Bitmap5"},
		{src:"images/intro19/Bitmap6.png?1527798641877", id:"Bitmap6"},
		{src:"images/intro19/Bitmap7.png?1527798641877", id:"Bitmap7"},
		{src:"images/intro19/Bitmap8.png?1527798641877", id:"Bitmap8"},
		{src:"images/intro19/Bitmap8_1.png?1527798641877", id:"Bitmap8_1"},
		{src:"images/intro19/Bitmap9.png?1527798641877", id:"Bitmap9"},
		{src:"images/intro19/Bitmap9_1.png?1527798641877", id:"Bitmap9_1"},
		{src:"sounds/intro.mp3?1527798641877", id:"intro"},
		{src:"sounds/questionComplete.mp3?1527798641877", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1527798641877", id:"stdClick"}
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