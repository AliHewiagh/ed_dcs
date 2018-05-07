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


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,206);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,636);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,636);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,828,636);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,328);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,397,328);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,80);


(lib.outro3bg1 = function() {
	this.initialize(img.outro3bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,652);


(lib.outrobgdooropen = function() {
	this.initialize(img.outrobgdooropen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1120,776);// helper functions:

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


(lib.tEn7 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Thanks!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 166;
	this.myTxt.parent = this;
	this.myTxt.setTransform(198,-44.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AtaAAIa1AA");
	this.shape.setTransform(198.5,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("ANbGIIAAnuIsTAAIBSkTIkNETIrnAAIAAHu");
	this.shape_1.setTransform(198.5,-42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AtaGBIAAnuILnAAIENkTIhSETIMTAAIAAHug");
	this.shape_2.setTransform(198.5,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn7, new cjs.Rectangle(110.5,-81.3,175.9,80.4), null);


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

	// Layer_1
	this.myTxt = new cjs.Text("We left our next clue at a very colourful place. \nSee you there!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 505;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-38.7,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EAnPgDFMgrHAAAICRFnIlNlnMggaAAA");
	this.shape.setTransform(-38.9,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAnPAGTIAAsgMhOdAAAIAAMg");
	this.shape_1.setTransform(-38.9,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Am0DcMggaAAAIAAsgMBOdAAAIAAMgMgrHAAAICRFog");
	this.shape_2.setTransform(-38.9,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn3, new cjs.Rectangle(-293.4,-54,509.4,122.6), null);


(lib.tBm7 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Terima kasih!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 166;
	this.myTxt.parent = this;
	this.myTxt.setTransform(198,-44.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AtaAAIa1AA");
	this.shape.setTransform(198.5,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("ANbGIIAAnuIsTAAIBSkTIkNETIrnAAIAAHu");
	this.shape_1.setTransform(198.5,-42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AtaGBIAAnuILnAAIENkTIhSETIMTAAIAAHug");
	this.shape_2.setTransform(198.5,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm7, new cjs.Rectangle(110.5,-81.3,175.9,80.4), null);


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
	this.myTxt = new cjs.Text("Kami dah tinggalkan klu yang berikutnya di tempat yang berwarna-warni. Jumpa di sana!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 534;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-20.1,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EAqNgDFMgxDAAAICRFnIlNlnMggaAAA");
	this.shape.setTransform(-19.9,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAqNAGTIAAsgMhUZAAAIAAMg");
	this.shape_1.setTransform(-19.9,-13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ApyDcMggaAAAIAAsgMBUZAAAIAAMgMgxDAAAICRFog");
	this.shape_2.setTransform(-19.9,5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm3, new cjs.Rectangle(-292,-54,544.3,122.6), null);


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
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIkAAQgXARgZAOAKDhQQgHAGgGAGQgnAmgrAeQAMADAKAFQAfARgBAmQAAAKgBAJIhAA8QgYA+h6AUQAPgkgKAAQgHgBg4AGQgfADgtAEQiBAMjHgQQgOAagKAJQgFAEgEADQgGAEgFABQgCAAgBAAQhUgMg5gOQg5gNgNgWQgYAGhAgvIgBAAAkgApQgBgBAAgBIAIgDQBLgEBGgDQAYAAAYgBQDigICmADQAZAAAXABQBAABA1AEQAQABAPABAIXCOQABgKABgMQACgbgEgMQgFgWgWgVQgDgDgFgEAKcAGQgVAbgaAcQgCACgCACIgSARALVhNQAJgRAJgRQAWg5gfgKQgEgBgEgBQgIALgIALQADADADADQAGAJAFANQADAJAAAMQAAAOgFASQgYAqghApAKDhQQAGACAGAHQADADADAFQAIAMAEATQADATgIATALGieQgeAoglAmAqRi4QA4A9A4AqQAIAGAIAGAluAZQgTgIgYgMQgygXhGgzQgHAFgHAHQgCACgBABQgKALgHAOQgLAVgDAVAluAZQgKADgIAGQgHAFgHAHQgGAHgEAJQgPAbgCAYQgBAXAGAFQgXgRgWgSQgggZgggbQgZgWgXgTAkgApQACALABAKQACATgDARQgGAtgkAkQgBACgCABAkgApQgOAAgagEQgPgDgXgJAqRi4QgFgGgGgGIgKgLQgPgRgNgSQgHgCgNAFQgGADgGAHQgGAHgEAKQgHAMAKAaQAHAQAOAVQAGALANAPAqRi4QgBABAAAAQgLAIgJAKQgGAIgGAJQgLASgEATQAnAuBZBO");
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


(lib.T_nose_2 = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:64.2,y:178.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_4,p:{x:133.8,y:24.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).wait(1));

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
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("AENgyQgEASgDAGQgEAJgPANQgBABgBABQg5AWg3AnQgEAEgFADQgDACgDADQhAgfAAgbQAAgaALgUQALgVAXgOQAQgKASgKQAKgFAkgZQACgBABgBQAhgbgFhtQASAUAOASQARAUALAQQAcAngFAOQgNAkgHArgAgOAUQACgRgPgVQgOgVgVgPQgUgOgcAPQgSAQgQAOQAGgfgcgUQgcgUgOACQgPABgSATQgRATgKAQQgCAEgCAEQgGAKgDAFQgEAIgDAKQgBAEABAGQAAAFACAGQABACABACQACAGAEAHQAHAOAQANQAIAFAJAFQAIAFAIAEQAAgBAAAAQAAgHABgIQAAgEACgGQAHgPAWgZQASgUAcgZAgOAUQAAAAgBAAQgeAJgtBHQgGAKgGAJQgMAUgIAMQgBABgBABQgCADgBADQgCAEgCADQgEAJgDAJQgBADAAACQABAEACAFQAGAOAYAUQAlAfATgHQACgBACgBQAJgFAKgJQALgJANgPQAAAAABgBQAEgFAEgGQAYgeASgvQATgvgeghQgfghgUAGgAiDCmQgFAEgKAAQgBAAgBAAQgEAAgGgCQgFgCgGgDQgXgNgQgWQgJgMgDgPQAAgDgBgCQAAgEgBgE");
	this.shape_8.setTransform(10.1,36.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7E2326").s().p("AANDdIAHgLQAZgvALg1QgOgWgZgSQgLgKgIABQgJACgIALQgbAfgZAgIgUAdIgXAfIABgEQADgKAEgJQgFAFgKgBIgCAAQAFgMAJgSQAIgRAOgUQAOgUAPgbQAQgcAHgHQAIgIgIgPQgIgNgbgNIgLAEQgSAHgPAOIgPAPIgEAEIgBAAIgEAEIgLANQgZAbgTAeIgDAGIgBgIIAAAAIAAgBIAAgFIABgKQAAgEACgFQAHgQAWgYQASgUAcgZQgcAZgSAUQgWAYgHAQQgCAFAAAEIgBAKIAAAFIAAABIAAAAIgQgIIABgGQABgLALgUQAKgTAagbQAZgZgEgFQgVglgQgBQgQAAgNAPQgNAPgPAUIgBAAIgZAkQgBgGABgEQADgMAEgGIAJgQIAEgIQAKgPARgTQASgTAPgCQAOgBAcATQAcAUgGAgIAigfQAcgPAVAPQAUAOAOAWQAOAVgCAQIgBAAQgdAKgsBGIgNATIgUAgIgCACIgDAHIgEAGIAEgGIADgHIACgCIAUggIANgTQAshGAdgKIABAAQAVgGAfAhQAeAhgTAvQgSAvgYAeIgJALIgBABQgNAPgKAKIAPgcgABLAVQAAgaALgUQALgUAXgPIAigUQAKgFAkgYIADgDQAhgbgFhtIAgAmIABASQACApgOAfQgDAKgPATIgKALIgSAPIgdAYQgkAcgHAgQgEAXANAbIACAGIgGAEQhAgfAAgbg");
	this.shape_9.setTransform(7.6,36);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A92F33").s().p("AAACWIAGgWQADgNgDgKQgFgNgOgNQgFgFgEAAQgGAAgEAGQggAegfAjIgeAkQgCgFAAgEIAWggIAVgcQAZghAbgfQAIgLAIgCQAKgBAJAKQAZASAPAWQgLA1gZAvIgHAMIgPAbQgLAJgIAEgAiSCWQADgPALgSIAohFQAegzgWgLQgWgLAAAIQhCAsgRAaIgTAeIgBgEIADgGQATgfAYgbIALgNIAHgCIgBgBIAEgEIAPgPQAPgPASgGIALgFQAbANAIAPQAHAOgHAHQgHAIgQAbQgQAbgNAUQgOAUgJASQgJARgEANIgKgDgAjzA0IADgJQAQgoAWgiQgBgIgFgFQgGgEgHABQgGAAgKAHQgMALgUAdIgFAHIgDgJIAaglIAAAAQAPgTAOgPQANgPAQAAQAPAAAWAlQAEAFgaAbQgZAZgLAUQgKATgCALIAAAGIgRgKgACBAsQgNgcAFgWQAGggAkgdIAegYIARgPIALgKQAPgUADgKQAOgfgCgoIgBgSQAQAUAMAQIgFAVQgMA4gYAbIgNANQgMAMgUAPQgjAagHAaQgGAYgDAVIgKAHIgCgFg");
	this.shape_10.setTransform(8.9,38.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC3D42").s().p("AhrDDQgZgUgGgOIAegkQAegjAhgdQAEgGAGAAQAEAAAFAFQAPANAFANQADAKgDAMIgHAXIgiBWIgEACQgEABgFAAQgSAAgdgZgAiqB+QgXgNgQgWQgJgNgDgOIATgeQARgbBCgrQgBgJAXALQAWALgeAzIgoBGQgLASgDAPIgLgFgAkXAFIgHgMIgBgEIAFgHQAUgeAMgLQAKgIAGAAQAHgBAGAFQAFAFABAHQgWAjgQAoIgDAIQgQgNgHgOgACJgXQAHgaAjgZQAUgQAMgMIANgMQAYgcAMg4IAFgVQAbAngEAOQgNAkgHArQgEASgDAGQgFAJgOANIgCACQg6AXg2AmQADgUAGgZgAiggUIABAAIABAAIgHADg");
	this.shape_11.setTransform(10.2,40.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},7).wait(1));

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

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgiAAQgvhQgTgxQAQgcASgYQAQBFAPAsQAjBoBlCSQhZhlguhRg");
	this.shape_17.setTransform(-20.6,-51.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIyAjQAUgNAPgLQACgNgCgWQgDgXgZgOQgZgPgPAEQgPAEg5AYQg6AYgSAGQgTAGgmAIQglAHgJgFQgJgFgKgHQgLgGgsgFQgtgGg0AMQg1AMgYAJQgYAKgPgCQgTg8gZg+QgQgqgIgoQgFgXABgGQAIhVgWhUQgQg+gdg1Qg3gMg6AIQg9AJhBAeQgLAFgKAFQhzA9g0BBQg0BCgKAwQCMEJB1BqQB0BqBHAgQBHAgBJAZQBHAYAhAPQABAAAAAAQBdAoCKBUQADgCAEgCQALgGAHgIQASgPAHgRQABgCAAgBQAHgSgIgWQgGgQgVgUADxCTQADgBADgBQBUgGArgKQAsgKARgGQARgGATgLQAIgFAZgQQAIgGAIgFQAFgEAGgEQACgCADgBAD7EZQAFgCAGgCABHFzQAdADAeACQAaACAZABQATABAUAAQAUAAARABQAtABAQAAQAVAAAPAAQAyAAAogFQAggFApgNQAegKAjgPQAEgCAEgCQAAAAAHgFQAGgFgDgYQgDgYgYgXQgOgCgdACQgMAAgUAEQgcAGgEABQgsAHg4gHQgNgBgSgEQAHgBAIgBQBAgMAVgGQAwgPBIgpAEfEMQAYgIAYgFAIvCxQAHgEAHgEQAKgGAMgHQANgIAPgIQACgEABgEQAHgRgFgSQgFgSgPgNQgOgOgUgCQgTgDgTAGQANgJAMgI");
	this.shape_18.setTransform(30.7,-42.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7E2326").s().p("ABFGpIgogJQgVgGgNgGIAlABIAlABIA9ABQAVAUAGAQQAIAWgGASIgCADQgogygwgLgAGEFdQgKgOgRgFQgOgDgTABIghAEQhGAMhHgMQgwgIgrgRIALgFIAZgJQAYgIAYgEIAfAEQA4AHAsgHIAggHQAUgEAMAAQAdgCAOACQAZAXADAYQACAYgGAFIgHAGIgIADQgCgFgEgFgAgCDHQAUgIAUgMIAPgHIAGgCQBUgGArgKQAtgKAQgGQARgGATgLIAhgVIAQgLIALgIIAFgDQATgGAUADQATADAPANQAOAOAFARQAFASgHARIgDAIIgbAQQgLgdgUgFQgNgCgaAKQhrAvhaAIQgYADgXAAQg0AAgsgOgAkJAlQgKgaglhHQgQgfgTgqQAEhsgjhqQgYhJgng+QA7gIA3AMQAdA2APA9QAWBUgIBVQgBAHAFAWQAIAoARArQAYA9ATA8QAQADAYgLQAYgKA1gMQA1gLArAFQAsAFALAHIATAMQAJAFAmgHQAlgIATgHQATgGA5gXQA5gYAPgEQAPgDAZAOQAZAOADAWQADAWgDAPIgiAXIgIgVQgGgOgKgGQgRgMgbAHQgIADgMAGIgUAMQgyAdg6ALQgwAJgxgDQgugVgrgBQgjgBhbAbQg0APgmABQgIgegOgig");
	this.shape_19.setTransform(49.5,-44.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A92F33").s().p("ADBHoQgOgTgogeQg0gkg2gbIAzADQAPAGAVAGIAnAKQAxAKAoAyQgHARgSAQQgHAHgLAGQgFgJgHgKgAFeFaIhqgMQg/gIgqgNQgfgKgZgOQAqgCAogKIgLAFQArARAvAIQBIAMBGgMIAhgDQATgCANADQARAFALAOQAEAFACAFQgjAPgeAKQgfgIgngFgABqDSQgrgFgngMQAggGAggNQBBAUBPgJQBagIBrgvQAZgKAOADQATAEALAdIgWANIgOAIIgEACQgkACgzAJIhbARQgzAIgxAAQgmAAgkgFgAlihzQgzi0hcijIAVgKQBBgeA9gIQAnA+AYBIQAjBqgEBsQATAqAQAfQAkBJALAYQAOAiAIAeQAlgBA1gPQBagbAjABQArABAvAVQAwAEAxgJQA5gMAzgdIAUgKQALgHAJgDQAbgHAQAMQALAFAGAOIAHAVIgBABIgZARIgFADIgLAIQgggKgrAGQgWADg3AOQg7AOgrAFQg4AGgwgIIglgHQgUgEgOACQgOABgSAIIgfANQhDAehIAGQg6iMhYh2g");
	this.shape_20.setTransform(40.5,-42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC3D42").s().p("ABlFpIAIgQIgIAQQghgPhIgYQhJgZhHggQhGggh1hqQh0hqiMkJQAKgwA0hCQAzhBBzg9QBdCjAyC0QBZB2A5CLQBJgFBCgeIAegOQASgHAPgCQAPgBAUADIAlAHQAvAIA4gGQArgFA8gOQA2gOAWgDQArgFAgAKIgQALIghAUQgTAMgQAGQgRAGgtAKQgrAKhUAGIgGACIgPAHQgUAMgVAIQgfAMggAGQAmAMArAGQBTALBcgOIBbgRQAygJAkgCQhHApgwAPQgWAGg/AMIgPACQgYAFgYAIIgZAJQgpAKgpACQAZANAfAKQAqANA/AJIBpALQAnAGAfAIQgoANghAFQgoAFgyAAIgkgBIg9AAIglgBIgmgBIgzgDIg7gFIA7AFQA1AaA1AkQAoAeAOAUQAGAJAFAKIgHAEQiKhUhdgog");
	this.shape_21.setTransform(27,-39.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACJkkQAeAmAnAtQA4B4gMA9QgCAKgDAIQgBADgCADQgkBCjwDnQiJh2hNihQgQjXA6hbACCgqQgGgCgGgCQhUghgzgaQgfgQgSgRQgSgRgQgpQgCgFgCgFQgCgGgCgFQgEgRgEgQ");
	this.shape_22.setTransform(10,32.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E2326").s().p("AjyASQgRjXA6hbIBQgIIAKAyIAIAhIAEALIAEAKQAQApASARQATARAfAQQAyAaBUAhIANAEIBvAmQgjBCjxDnQiIh2hNihg");
	this.shape_23.setTransform(9.5,31.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A92F33").s().p("ABFBwIgMgFQhTggg0gaQgfgQgSgRQgTgRgPgpIgEgKIgFgLIgHghIgLgyIAIAAQApgFAsAEQAEAgABAdQAAAkAIAOQAHAKAMAKIAWAPIDmB/QgCAJgDAIIgDAHIhwgmg");
	this.shape_24.setTransform(16.2,16.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC3D42").s().p("AhYAJIgXgOQgMgJgHgLQgIgOAAgkQgBgdgDgfQA+gEBsANQAeAmAnAsQA4B4gMA9IjliAg");
	this.shape_25.setTransform(20.9,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).to({state:[]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},2).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},3).to({state:[]},1).wait(1));

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
	this.shape_10.graphics.f().s("#0000FF").ss(1,1,1,3,true).p("AABgEQgBAEAAAF");
	this.shape_10.setTransform(12,-145.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("AITqXQghB/gpB8QgyCXg/CTQgTAugVAuQgqBdgvBcQh/D3ibDhQg2AphegCQgugBg3gLQgNgDgMgDQi+g4gCkjQgBjTCBgBQAdgBAjAKQAoAMAwAYIAVhvIAXh1IBHltIKgjdIAAgB");
	this.shape_11.setTransform(-41.3,-79);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#424242").s().p("AkcG8IgZgGIgLgaQgjhTgMiMQgNiYAHidQAdAAAjAKQgHAeAAAlQABAjAKBDQANBeALA2QARBRAZA+QAXA7AhAvQgugBg3gLgAixkwQBBADA7gGQBqgIBdgkQBlgmBKhCQAGAVAMAZQASAnATAnIgoBcQgQhEgahCQgaAHgeAWIgzAoQhAAyhhAdQgZAIggAHQhbAVhOAEg");
	this.shape_12.setTransform(-44.5,-57.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AoVE+QgBjTCBgBQgHCeANCXQAMCMAjBUIALAaQi+g4gCkjgAjRhNIBHltIKgjdIgDAJIADgJIAAgBIgDAKQgsCQgeBrQgyCXg/CTQgTgmgSgoQgMgZgGgVQhKBChlAnQhdAjhqAJQgpAEgsAAIgngBgAIWqXIAAAAg");
	this.shape_13.setTransform(-41.3,-79.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#585858").s().p("AjBGfQghgwgXg6QgZg+gRhRQgLg2gNheQgKhDgBgjQAAglAIgeQAnALAwAYIAVhuQBOgFBbgUQAhgIAYgHQBhgdBAgyIAzgoQAegWAagHQAaBBARBEQgrBegvBcQh+D2icDiQgzAmhXAAIgKAAg");
	this.shape_14.setTransform(-43.5,-53.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ajgg8IAAgCQASgXATgVQCtBEBTAqQBVAsBHA7QjmhnjbhAg");
	this.shape_15.setTransform(18.2,-12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGGGgQgDAcgIA2QgDARgDATQgBAFgBAGQgEATgHAZQhAAbgcgPQgdgOgJgsQgCgVACgtQADgsAHgWQAIgWAAgeQAAgegGgKQgFgLgOgLQgGgFgSgLQhBgnghgTQgygdgYgXQgkgjgHgxIkWhRQg9AGhtgUQhwgXiUgoQAAgUABgTQABgbAEgaQABgaAFgYQAWiLA/h1QAnhIA3hBQEnB8A+ApQA7AoAHAHIJ4FOQAwAjApAoQAdAbAWAjQAJAPAKAXQALAYAGAuQAHAvAFAmQAGAiAGAgQAAAEABADQACAMAAAJQABARgHAFQAFATgOALQgNAKgYAGQgYAGgtgdQgngrgHiuIhqhdIgBgBQAAABAAABQA9BZAIA+QAIA+ACAqQABAQAFAdQACAPAEASQAFAeAJAmQADASAFASQABAfgtAQQgtAPgfgNQgegNgIgVQgHgSgCgeQAAgDgBgEQgCgjgBgTQgCgUgBgHgAGwBHQACAEACADQAIAKAHAKAE3B9QBUCggCA1QgBA0gBAMQAAAGgBAI");
	this.shape_16.setTransform(51.9,35.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7E2326").s().p("AEMGVQgdgOgJgsQgCgVACgtQADgtAHgWQAIgVAAgeQAAgegGgKQgFgLgOgLIgYgQIhig6QgygcgYgXQgkgjgHgxIkWhRQg9AGhtgVQhwgXiUgoQAAgUABgTQABgbAEgaQABgaAFgYQEVBkDBgBID3BiQAxBQAYAcQAoAxAlAiQBGA9BGAbIACAOQAFAhgBA0IgCBWQAAAQgDA1QAWAkA1gJQgEAUgHAZQgpARgbAAQgOAAgKgFgAG8GGQgegNgIgVQgHgSgCgfIgBgGIgDg2QgCgUgBgHIABgOIAChBQACg0hUifIAAgBQAEgIATAKIAAAAQARAKAcAqQAcAqAaBRQAZBQAKB8QAMAEANABQAaABAkgLIABAAIAIAkQABAfgtAQQgZAIgUAAQgRAAgOgGgAJcDVQgngsgHisIhqhdIgBgBIgPgUIgEgHIgDgIQgNgUgFgLQgDgIgEgOQAIADAwAdQAwAeAkAaQAjAbA2DXQAMAIAOAFQAfALAfgBIAEAAQABARgHAFQAFATgOAKQgNALgYAGIgJABQgXAAglgYg");
	this.shape_17.setTransform(51.9,55.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A92F33").s().p("AEiHfQADg0AAgRIAChWQABg0gFghIgCgOQhGgbhGg+QglgigogxQgYgcgwhPIj4hiQjBABkVhkQAWiLA/h1QElCCB5BzQBpBAByAoIApBDQALATA+BSQA9BRBqBLIAEAEQAbAfAQA/QAPA4ALBQQAEAaADAKQAEAOAIAKIgGAkIgCALIgSABQgnAAgSgdgAHnHZQgNgBgMgEQgKh8gZhQQgahRgcgqQgcgrgRgJQAVAEATAKQAfARARAdQAKAPAIAXIAPAqQAWBGArBCQALARALANIAOBEIgBABQggAJgYAAIgGAAgAKNE8QgOgFgMgHQg2jZgjgaQgkgbgwgdQgwgdgIgDIgBgEIABAAQgVgeAiAMQAiAMA+AjQA+AiAVAXQAWAYAKBNQALBOAaAjQAbAiALgFQAKgGAJAGIABAHQACAMAAAJIgEAAIgFAAQgdAAgcgKg");
	this.shape_18.setTransform(52.5,39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DC3D42").s().p("AFAIRQgDgKgEgaQgLhQgPg5QgQg/gbgeIgEgEQhqhMg9hRQg9hTgMgSIgphDQhygohphAQh5hzkliCQAnhIA3hAQEnB7A+ApQA7ApAHAHIJ4FNQAwAiApApQAdAcAWAjQAJAOAKAYQALAXAGAvIAMBUIAMBDQgJgGgKAFQgLAGgbgjQgagigLhOQgKhOgWgXQgVgYg+gjQg+gjgigLQgigMAVAeIgBAAIABADQAEAPADAHQAFAMANAUIADAIIAEAHIAPAUIABABQA8BZAIA+QAIA/ACApQABAQAFAeIAGAgQgLgNgLgQQgrhCgWhHIgPgpQgIgYgKgPQgRgcgfgRQgTgLgUgEIgBAAQgTgKgDAIIgBAAQBUCggCA1IgCBAIgBAPIgLBRQgHgJgFgOg");
	this.shape_19.setTransform(56.6,30.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABtELIGIDHIi2GYIh/gPQg+gMgjgFQgigEgdgMQnCiFgqjTQgqjTACjDQAAgVAAgUQACibABgQQACgWADgWQADgjAFgkQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIiYhJ");
	this.shape_20.setTransform(-26.7,-57.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#424242").s().p("ADCHAQgigFgdgMQgcgoAciRIkBh9QhbgtAGABQAFABgNgOQgOgPgyigQgihqgniWQAggHAggJQBvgeBlgyQgJDNgjDMQDpBlD4BLQgTAtgOAvQgdBlgECVQg/gLgigFg");
	this.shape_21.setTransform(-36.5,-18);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#585858").s().p("AjiA4QgqjSACjDIABgpIAtgJQAnCXAiBqQAzCfANAPQANAPgFgBQgGgCBaAtIECB9QgcCSAcAoQnDiFgqjTg");
	this.shape_22.setTransform(-50.1,-14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("ADANbQAFiVAdhlQANgwAUgsQj4hLjphmQAijNAKjLQhmAxhvAeQggAIggAHIgtAJQACibABgQIAEgsIAJhHQA0miBih1QBih1CXApQCWAqBFAeQAnApAjBBIgxFOIgEAOQhAEPASFMIGIDHIi2GYgABtELIiYhJg");
	this.shape_23.setTransform(-26.7,-57.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1,3,true).p("AD6jCQAIgSABgKQABgRgbgYQgMgJgPgLQgNgJgRgKQhUgzgeAfQghAhgQATQgPgVgRgLQgOgKgPgEQgOgDgNACQgwAHgZA0QgZA0goAoQgoAngUAsQgFALgEALIAAAAAkag9QgLAiADAjAANkOQgTAbgRAaQgFAIgFAIQgBAiAIAJQAHAIALAKQACABABACQACgCADgCIAegZQAGgDAfgUQgBgLgCgKQgCgMgEgJABCBXQAVgGAVgeIAAgBQALgRALgbQAbgoAphAQAohAAMggQAOADALAfQADAIADAMQABADAAADQAFARACAPQAEAYgBARQgCAPgNAeQAEAJADAPQABAGABAPQAAAYgBAwQgBALAAAKQgDA1gIAhQgBAFgCAGQgMAnhpAxQhjAtj9gbAEVgQQgMAWgTAhQgqBJgCAJQgcAwgjAP");
	this.shape_24.setTransform(68.4,-27.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#7E2326").s().p("AjlE1IgKgQIgXgmIALgCQA9AMAxAGQBaALBLgIQBXgIBJglIAigTIAagSIgDALQgMAnhpAxQg/Ach7AAQhIAAhfgKgAAwDDIgCAAQAFgEAIgEIAGgDIAXgLQANgGALgJQAMgKAKgPQAOgXADgZQAVgbATgdQAshFAZhOQADAYgBARQgBAPgOAeQAFAJADAQIABAUQgWArgdAnQgFARgJAPQgHAMgJALQgNAOgSAMQgiAVgoAAQgKAAgMgCgADZAXQgrBJgBAJQgdAwgiAPQAigPAdgwQABgJArhJQATggALgXQgLAXgTAggAgLA+IgDgCIAJgDQAzgUARgbQAPgZAJgcQBwiaAEhSQAbAYgBARQgBAKgHASQgMAggpBAIhDBpQgLAagMARQAMgRALgaIBDhpQAphAAMggQANADALAfQgiA9gUAgQgfAwggAlQgJAWgNAVIANgRIgNARIgHAKIgDABQgUAJgTADIgUADQAVgGAUgeIAAgBIAAAAIAAABQgUAegVAGIgDAAQgZAAgUgJgAAlBHIAAAAgABOAjgAhUigQgJgYgEgHQgGgJABgFQAAgEAEgEQAdgxAVg4QARALAQAVQgUAbgRAaIAHAfIACACIADAAIAvgPIAcgLIADAVIglAXIgeAZIgFAEIgDgDQgMgKgHgIQgGgIAAgZIAAgKIAKgQIgKAQIAAAKQAAAZAGAIQAHAIAMAKIADADIAFgEIAegZQgQAZg1AZQgJgJgHgTg");
	this.shape_25.setTransform(71.3,-26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A92F33").s().p("Ah+ErQgwgGg+gNIgKADQgRgdgLgaIAqgKQAuAVAhAJQAhAJAzAHQA0AGAfABQAhAAAmgDQAngEgEgBQBRgRgLhEQAJgLAHgMQAJgPAGgSQAdgmAVgsQABAYgCAxIAAAVQgDA0gIAhIgZASIgjATQhIAmhYAIQgfADghAAQgwAAg1gGgADTDeIABAAIAEgFIgFAFgABqC+QAMgHARgYQAPgZgngyIADgBIAIgKIAMgRIgNAQQANgUAKgXQAfgkAfgxQAUgfAig+IAHAUIABAGIAHAhQgYBOgtBFQgTAdgUAaQgEAagOAWQgKAPgMALQgLAJgMAGIgYAKIgGADQATgQANgIgAAiA1QAVgiALgyQA6hFAnhRQAZg0ADgnIAbAVQgEBShwCZQgJAcgPAaQgRAbg0ATQANgNAMgSgABdA+IAAAAIAAAAgAghhJIhCgaQgPgagFgSQgJgYgBgWQApg1Aag+QAPADAOAKQgVA4gdAxQgEAEAAAFQgBAEAGAKQAEAHAJAXQAHAUAJAIQA1gYAQgaIAlgXIgDgUIARgJQgMA+gdAeQgeAdgdANg");
	this.shape_26.setTransform(69.8,-28.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#DC3D42").s().p("AA+EpQgggBgzgGQgzgGghgJQghgJgugVIgqAKQgOgfgIgcQgfhuAehqIABgDIAAAAQAEgLAFgLQAUgsAognQAogoAZg0QAZg0AwgHQANgCAOADQgaA+gpA1QABAWAJAYQAGASAPAbIBAAZIABABQAdgNAegeQAegeALg+IgRAJQgCgMgEgJQAEAJACAMIgbALIgwAPIgEAAIgBgCIgIgfQARgaAUgbQAQgTAhghQAegfBUAzIAeATQgDAngZA0QgoBRg5BEQgMAygVAjQgMARgNAOIgJADIAEACQAWAJAaAAIAUgDQAUgDAUgJQAnAzgQAYQgRAYgMAIQgNAHgTARQgIAEgFAEIADAAQAzAIAtgbQARgMANgOQALBFhQAQQADACgnADQghADgeAAIgIAAgAkAAuIgBgOQAAgdAJgaQgJAaAAAdIABAOgAEJD0IgFAEIgBAAIAGgEgABiisIAAAAg");
	this.shape_27.setTransform(65,-31.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhiACQhVADgJAHIAmgtQBUgBBOAKQBPAKBqAwQjFgjheADg");
	this.shape_28.setTransform(-9.8,-39.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGCkDQgpAAhAgCQgGAAgGAAQhhgEiEgPQhtgph3gMQhMgIhLAEQgTATgQAUQgCADgCADQgqA2gUBDQgcBcAABhQAABkA0BWQAEAFADAGQAyBMBPAnQAJAFAKAEQCFgCDahpQB/gVCGgpQA7gTA7gW");
	this.shape_29.setTransform(7.4,-9.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#7E2326").s().p("AkYEzQhPgngyhMIgHgLQg0hWAAhjQAAhiAchcQAUhDAqg2QgTAxgLAzQgSBXAKBTQAKBVAoBNQAUAoAaAhQA5gFBCgNICtgnQBbgVBCgHIAOgCIAEAAQBdgJBegSQAxgKAxgMQAPAaASAaQg7AWg7ATQiGAph/AVQjaBpiFACIgTgJg");
	this.shape_30.setTransform(7.4,-6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A92F33").s().p("Al2C3QgohNgKhWQgKhSAShXQALgzATgxIAEgGQgPBdANBiQAQB2A3BlQCxgLCjgcQCSgHCRgbQAqgHApgKQAMAcAPAbQgxAMgxAKQheAShdAJIgEAAIgOACQhCAHhbAVIitAnQhCANg5AFQgaghgUgog");
	this.shape_31.setTransform(8.2,-13.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DC3D42").s().p("AmFAFQgOhgAQhdQAQgVATgSQBLgFBMAIQB3ANBtAoQCEAQBhADIAMABQBAACApAAQgNAugBAxQgBAiAFAdQAIA/AZA8QgpAJgqAIQiSAbiRAGQijAcixAMQg3hmgQh3g");
	this.shape_32.setTransform(8.7,-20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

	// Layer 2
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADVETQAmADA/AfIhKJUQg0AEg3AAQggAAgiAAQgRAAgRAAQgHAAgIAAQgNAAgOgBQg4gDhagOQg1gLgfAHQgeAHgng2Qgng1gIgiQgHgigLi/QgHiIAgkMQADgdAEggQgCgFALhKQgviZAvirQAvirA3h5QAohXAthNQBEgnBNgcQBxgnB2gGQBdBQAzBSQguFEhkExQAAABAAAAQgKA0AAAcQABAbADBuQADBUgNBagAhnFmQAMgCAQgIQAUgJAZgPQAwgeAXgIIAAAAQAYgIAfgDQAQgBApAAQAgABAcAA");
	this.shape_33.setTransform(-40.4,-69.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#585858").s().p("AAiGbQg0gLgfAHQgeAHgng2Qgmg2gIgiQgIgigLi/QgHiGAgkMIAEAAQBNAAA+gIQB0gQBUgwIgOBVQhXBXg+BsQgUAkgHAZQgIAXgCAVQBUgTAEgFQgxDsAsBwQAsBwBFAiQg5gEhagNg");
	this.shape_34.setTransform(-59.4,-21.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#424242").s().p("ACBHiIgbgBQhEgigshwQgshvAxjsQgEAFhUARQABgUAIgXQAJgYATglQA9hrBXhXIAOhVQhUAwhzAPQg/AJhNAAIgEAAIAIg9QAnAEBegRQBegRBfgfQBggeAxgdQgsB+gaCDQgtAjgmAtQgbAggWAkQgQAHgNADQANgDAQgHIgIAMQATgIAkgFQhMDVAtClQAsCmAxAQIgIABIgIgBgAAkhNIAAAAg");
	this.shape_35.setTransform(-51.6,-27.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AAYOMIAiAAQgJADgIAAQgJAAgIgDgAA6OMIgiAAQgwgQgsimQgtimBMjWQgkAFgSAIIAHgMQAWgjAbghQAlgtAtgjQAaiDAsh8QgxAchfAeQhgAeheARQheARgngEQgCgFALhKQgviZAvirQAvirA3h5QAohYAthMQBEgoBNgbQBxgnB2gHQBdBRAzBSQguFDhkEyIgBABQgKA0ABAbIAECJQACBVgNBaQAmADA/AfIhJJUQg0AEg4AAIggAAIghAAgABXESQggADgXAHIgBABQgXAIgwAeQgYAPgUAJQAUgJAYgPQAwgeAXgIIABgBQAXgHAggDIA5gBIA7ABIg7gBIg5ABgAAYOMIAAAAg");
	this.shape_36.setTransform(-39.5,-69.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AgCMYQgsgCgigGIgwgJQgdgGgUABQgPAAgdAEIgKAAIACACIAJACIAAADQgBACgFAAIgDgBIgEgCQgEgCgDAAIgBgDIAEgCIABAAIABAAQgMgFgPgEIADAAIgOgSQgog1gNgeQgVgwgEhVQgFhVADhqQABg/AGh/QAGh+AKhEQAIgwALgXQgQBPgIBlQgEA9gEB6IgDBWQgFCVAHBKQAHBAAQAnQAQAmAnAxIAQAUQAJADAMgCIAcgEQAggEAyAKQBDANAPABQAUACAagBICsgCQAAADgDACQgDACgFAAIhfACIg6ABIgTAAgAhXDsIAFgDQAPgBARgJIAdgSQARgLAfgQQAbgNASgEQAPgDAfgCQAzgCAzAGIAFglQADgfADg+IAFhTQACgagBgMIgCglIgIhkQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQASgdARg9QAliFAbhnQAWhVAEgvQAAgLAGABQgCAxgWBWIgwC2QgaBggXAyIgCAEIABADIAIBkIACAnIgBAmIgCAvIgHBoIgHA7IgDABQAWADAXAFQAAABABAAQAAABAAAAQgBABAAAAQgBABgBAAQAAABgBAAQgBAAAAAAQgBAAgBAAQAAAAgBgBQhLgNhJADQgbABgQAEQgRAFgVAKQgWALgcARIghATQgUAKgRAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAgAlMjAIgHhLQgHiBAtiPQAkhwBKiMQgHAYgNAeIgZA1QhtDkAMDEQABAUAFArQAFApABAWQABAOgIACQABgcgFgug");
	this.shape_37.setTransform(-42.2,-57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-146,152,292);


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


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],1.7,-10.6,0,1.7,-10.6,229.3).s().p("AZtHDI4ngOQs4gJpfhiQpfhjoJjbQoJjaNKh8QNJh8TvAEQTtAFNHCEQNICEjwE+QjrE6rYAAIgcAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.9,-45,537.8,90.2);


(lib.repellentgfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-63.2,-103.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.2,-103.1,126,206);


(lib.repellent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.8)").s().p("AhqgkQBgAEBnAZQAOAXgBAVQhcg0h4gVg");
	this.shape.setTransform(60,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CC66").s().p("AA8BTIATiYIBHAMQAKAkAAAlQAAAkgKAlQgsgBgugFgAgMBLIATiZIAKABIA3AHIgSCZIhCgIgAhCBCIAViVIAuAFIgTCYIgwgIgAhwA6IAZiQIAkACIgUCWIgpgIgAifAwQAKhQAog4IASABIgaCQIgqgJg");
	this.shape_1.setTransform(55.4,36);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D58A1").s().p("ABABaIgGAAIhGgJIgGgBIg0gIIgFgBIgrgIIgGgBIgsgKQAJhXAqg+IATACIAFABIAnADIAFAAIAxAGIAFAAIALABIA8AHIAGABIBNANQAKApAAAnQAAAogJApQgwgDgwgFg");
	this.shape_2.setTransform(56,36.2,1,1,0,0,0,0.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AAAA4IgBAAIgGgCQgHgEgGgLQgJgQAAgXQAAgNADgLQACgIAEgGQAFgLAIgEIAHgCIAAAAIAAAAQANABAIAQQAEAGACAIQADALAAANQAAAXgJAQQgIAQgMABg");
	this.shape_3.setTransform(106.9,32);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B7B7B").s().p("AAABtIgDAAQgGgBgFgCQgPgIgMgVQgRggAAgtQAAgaAGgWQAEgPAHgNQALgVAPgHQAGgDAHgBIACAAIABAAQAXABARAfQAIANAEAPQAGAWAAAaQAAAtgSAgQgPAegXACg");
	this.shape_4.setTransform(106.3,32);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#585858").s().p("AAPBtIgBAAQgXAAgRggQgRggAAgtQAAgaAGgWQAEgPAHgNQAQgdAVgCIAhgBQgHAAgHAEQgOAHgMAUQgFANgFAQQgFAWAAAaQAAAtAPAfQAMAWAPAHQAGADAGAAIgZABIgDAAg");
	this.shape_5.setTransform(101.7,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003399").s().p("AAHFAQizgjiog+Qg3gtASgqIAAgBQAUgtAgg4QDRkPDfhTQAlAGAhAKQBuAqAzBYIACADQAhA7AHBOQAHBNgSBhIgDAOQgeCnk8AAIgNgBg");
	this.shape_6.setTransform(39.1,35.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#002776").s().p("AASElQFIAEAfipIADgPQAShhgHhMQgHhPghg6IgCgEQgzhYhugqQCBAlA7BdIABAEQATAeALAkIABAGIACAHIADAMIABACQAEAVACAXQAHBMgSBhQgTBkguB3QingIifgfgAmlCfQA1hSA2hGQggA4gUAtIAAABQgSAqA3AtQgvgRgtgUg");
	this.shape_7.setTransform(38,37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00339A").s().p("AiqB5QAShhgHhNQgCgWgEgVIAJArQAQBYgHBWQgHBUgcBQQgPAkByAKQhNAHhLACQAuh4AThjgAAylTIA6AAQBaAwAmBYQhMhchugsg");
	this.shape_8.setTransform(96,37.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003DBA").s().p("AhSEhQAchQAHhUQAHhWgQhXIgJgsIgBgCIgDgMIgCgHIgBgGQgLgkgTgeIgBgEQg7hdiBglQghgJglgHIH/AAQBuAsBMBcIAEAKIABAEQAWA7gBBOQgBBNgYBgQgUBQgkBcQiGAbiDAMQhxgKAPglg");
	this.shape_9.setTransform(86,36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AhBieIBdgIQgLCeAxCvQh2iYgNitg");
	this.shape_10.setTransform(95.2,82.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AhXieIAsgEQAMCtB3CYQiXifgYiig");
	this.shape_11.setTransform(93,82.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(192,240,240,0.498)").s().p("AgFAKQgDgCgCgFQgBgEACgFQADgEAEgBQAEgBADADQAEADACAFQABAEgDAEQgCAEgEABIgCAAQgDAAgDgCg");
	this.shape_12.setTransform(68.9,136.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(192,240,240,0.498)").s().p("AgGANQgFgDgCgHQgBgFADgGQADgFAFgBQAFgCAFAEQAFADACAHQABAFgDAGQgCAFgGACIgDAAQgDAAgEgDg");
	this.shape_13.setTransform(79.4,139);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(192,240,240,0.498)").s().p("AgTAfQgNgIgDgPQgEgOAIgNQAIgNAPgDQAOgEANAIQAOAIADAPQAEAOgJANQgIAOgPADIgIABQgKAAgJgGg");
	this.shape_14.setTransform(89.6,133.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(192,240,240,0.498)").s().p("AgFAJQgDgCgBgEQgBgEACgEQACgDAFgBQADgBAEACQADACABAFQABADgCAEQgCAEgEABIgDAAQgCAAgDgCg");
	this.shape_15.setTransform(50.7,138.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(192,240,240,0.498)").s().p("AgLATQgIgFgCgIQgCgIAFgIQAFgHAJgDQAIgCAIAFQAJAFACAIQACAIgGAHQgFAIgJACIgGABQgFAAgFgDg");
	this.shape_16.setTransform(22.9,134.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(192,240,240,0.498)").s().p("AgFAKQgDgCgCgFQgBgEACgFQADgEAEgBQAEgBADADQAEADACAFQABAEgDAEQgCAEgEABIgCAAQgDAAgDgCg");
	this.shape_17.setTransform(31.6,148);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(192,240,240,0.498)").s().p("AgGANQgFgDgCgHQgBgFADgGQADgFAFgBQAFgCAFAEQAFADACAHQABAFgDAGQgCAFgGACIgDAAQgDAAgEgDg");
	this.shape_18.setTransform(24.1,143.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(192,240,240,0.498)").s().p("AgJASQgHgFgCgIQgCgIAEgHQAFgIAHgCQAIgBAGAFQAHAFACAIQACAIgEAHQgEAHgIACIgEAAQgFAAgFgDg");
	this.shape_19.setTransform(44.4,144.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(192,240,240,0.498)").s().p("AgTAfQgNgIgDgPQgEgOAIgNQAIgNAPgDQAOgEANAIQAOAIADAPQAEAOgJANQgIAOgPADIgIABQgKAAgJgGg");
	this.shape_20.setTransform(34.3,138.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,140,208,0.498)").s().p("AgxG7IgfgCIgFgBQgygFgygKQi3gli9hoQgPlxA5j0QAMgzAPguQE+CcFJg7QCmgeCphVQA2C2AKERQACA4ABA8QAABMgDBTQg9AohCAdQgaAMgbAKQi2BEi4AAQgeAAgfgCg");
	this.shape_21.setTransform(57.7,164.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0.298)").s().p("AnqgLIACgIQFshtFSAlQCLAPCIAnIACAJQipBUilAeQhbAQhYAAQjtAAjnhxg");
	this.shape_22.setTransform(58,123.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,204,255,0.298)").s().p("AhRLMIgFgBQgygFgygKQi3gli5hnIgFAAQgftGFJjBQAXgOAZgKIACgBQAagLAdgHQCTgngUimICJADQgRCmB9AnQAjALAgATIAQAKQA1AiApA5QC6D8gWKxIAFACQhCAmhCAdQjQBajSAAQguAAgvgEg");
	this.shape_23.setTransform(57.9,137.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,255,255,0.8)").s().p("AhVLMIAAAAQg1gFg0gLQhqgVhrgsQhNgghOgrIABAAQggtGFJjBQAXgOAagKQAbgMAdgHQCUgngUimIAYAAIAAADIAAAKQAACwivA9QiSA0hPCxQhwD3ATHuQALAQANAQQAcAgApAbQBvBJDPAfQBXANBqAGQgyAFgxAAQgvAAgvgEgAHqIbQA/h0ADjHQAJCagGC6IgBgBQhCAmhCAdIgSAIQAxgmAhg9gAiPHOQAogMAYgYQAbgbAHgqQAYiPAGiSQACDBAWBeQAVBXBgAXQgugDgugBQg5gBg6AEIAAAAQgvACguAGIAfgKgAEWniIAHABIAQAKQA0AiAqA5QAvBAAiBdQhSiXh0hsgAgjkmQCHAyCGgaIAjgIQA5gQA5gdQhJAshFATIgJACQguALgsAAQhcAAhVgvg");
	this.shape_24.setTransform(57.6,137.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,102,102,0.298)").s().p("ACvJcQg0gFg1gLQi2gli4hnQggtGFIjBQAXgOAagKQCZAgA8EYQAyDrgQGZIgHEDIgRAAQgwAAgxgEg");
	this.shape_25.setTransform(31.6,148.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(51,51,51,0.298)").s().p("AhVB9Qg0gFg1gKQi3gli4hnQD0hSDogOQA6gDA5ABQEOADD/BjQhDAlhCAdQjQBajSAAQguAAgvgFg");
	this.shape_26.setTransform(57.7,196.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(204,204,204,0.298)").s().p("AjMGlQg6gBg6AEQAOmfBFjoQBGjyCAguQAngPAtAFIAQAKQA1AiApA5QC6D8gWKzQj+hikNgEg");
	this.shape_27.setTransform(81.6,141.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(1,1,1,0.8)").s().p("AgaH7IAOxAIAngWIgPS2QgZgbgNhFg");
	this.shape_28.setTransform(60.9,116.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.2,3.2,126.5,206.3);


(lib.pw_door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4D82B").s().p("AgMAbIAAg1IAZAAIAAA1g");
	this.shape.setTransform(-13,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4D82B").s().p("AgMAZIAAgxIAZAAIAAAxg");
	this.shape_1.setTransform(-13,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4D82B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_2.setTransform(-13,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C4D82B").s().p("AgMAUIAAgnIAZAAIAAAng");
	this.shape_3.setTransform(-13,-0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4D82B").s().p("AgMASIAAgjIAZAAIAAAjg");
	this.shape_4.setTransform(-13,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C4D82B").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_5.setTransform(-13,-1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C4D82B").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_6.setTransform(-13,-1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C4D82B").s().p("AgMALIAAgVIAZAAIAAAVg");
	this.shape_7.setTransform(-13,-1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4D82B").s().p("AgMAIIAAgPIAZAAIAAAPg");
	this.shape_8.setTransform(-13,-2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C4D82B").s().p("AgMAGIAAgLIAZAAIAAALg");
	this.shape_9.setTransform(-13,-2.3);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C4D82B").s().p("AgMAHIAAgNIAZAAIAAANg");
	this.shape_10.setTransform(-13,-2.1);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C4D82B").s().p("AgMAJIAAgRIAZAAIAAARg");
	this.shape_11.setTransform(-13,-2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4D82B").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_12.setTransform(-13,-1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4D82B").s().p("AgMAPIAAgcIAZAAIAAAcg");
	this.shape_13.setTransform(-13,-1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4D82B").s().p("AgMAQIAAgfIAZAAIAAAfg");
	this.shape_14.setTransform(-13,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4D82B").s().p("AgMARIAAghIAZAAIAAAhg");
	this.shape_15.setTransform(-13,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4D82B").s().p("AgMATIAAgkIAZAAIAAAkg");
	this.shape_16.setTransform(-13,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C4D82B").s().p("AgMAWIAAgqIAZAAIAAAqg");
	this.shape_17.setTransform(-13,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4D82B").s().p("AgMAXIAAgtIAZAAIAAAtg");
	this.shape_18.setTransform(-13,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C4D82B").s().p("AgMAYIAAgvIAZAAIAAAvg");
	this.shape_19.setTransform(-13,-0.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C4D82B").s().p("AgMAaIAAgzIAZAAIAAAzg");
	this.shape_20.setTransform(-13,-0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C4D82B").s().p("AgMAVIAAgpIAZAAIAAApg");
	this.shape_21.setTransform(-13,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#C4D82B").s().p("AgMANIAAgaIAZAAIAAAag");
	this.shape_22.setTransform(-13,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C4D82B").s().p("AgMAMIAAgXIAZAAIAAAXg");
	this.shape_23.setTransform(-13,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#C4D82B").s().p("AgMAIIAAgQIAZAAIAAAQg");
	this.shape_24.setTransform(-13,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#C4D82B").s().p("AgMAGIAAgKIAZAAIAAAKg");
	this.shape_25.setTransform(-13,2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C4D82B").s().p("AgMAFIAAgJIAZAAIAAAJg");
	this.shape_26.setTransform(-13,2.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C4D82B").s().p("AgMAEIAAgHIAZAAIAAAHg");
	this.shape_27.setTransform(-13,2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C4D82B").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_28.setTransform(-13,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1,p:{y:-0.4}}]},1).to({state:[{t:this.shape_2,p:{y:-0.7}}]},1).to({state:[{t:this.shape_3,p:{y:-0.9}}]},1).to({state:[{t:this.shape_4,p:{y:-1.1}}]},1).to({state:[{t:this.shape_5,p:{y:-1.4}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:-1.8}}]},1).to({state:[{t:this.shape_8,p:{y:-2.1}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{y:-1.9}}]},1).to({state:[{t:this.shape_7,p:{y:-1.7}}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14,p:{y:-1.3}}]},1).to({state:[{t:this.shape_15,p:{y:-1.2}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_3,p:{y:-0.9}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18,p:{y:-0.6}}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_1,p:{y:-0.3}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_1,p:{y:0.1}}]},1).to({state:[{t:this.shape_18,p:{y:0.2}}]},1).to({state:[{t:this.shape_2,p:{y:0.3}}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_3,p:{y:0.6}}]},1).to({state:[{t:this.shape_4,p:{y:0.7}}]},1).to({state:[{t:this.shape_15,p:{y:0.8}}]},1).to({state:[{t:this.shape_14,p:{y:1}}]},1).to({state:[{t:this.shape_5,p:{y:1.1}}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_7,p:{y:1.5}}]},1).to({state:[{t:this.shape_12,p:{y:1.6}}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_8,p:{y:1.7}}]},1).to({state:[{t:this.shape_8,p:{y:1.8}}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27,p:{y:2.2}}]},1).to({state:[{t:this.shape_27,p:{y:2.2}}]},1).to({state:[{t:this.shape_27,p:{y:2.3}}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(9).to({_off:false},0).to({_off:true},1).wait(35).to({_off:false,y:1.9},0).wait(1).to({y:2},0).wait(1).to({_off:true},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(10).to({_off:false},0).to({_off:true},1).wait(31).to({_off:false,y:1.8},0).wait(1).to({y:1.9},0).wait(1).to({_off:true},1).wait(11));

	// Layer 3
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C4D82B").s().p("AgdANIAAgZIA7ABIAAAYg");
	this.shape_29.setTransform(-7.2,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#C4D82B").s().p("AgbANIAAgZIA3ABIAAAYg");
	this.shape_30.setTransform(-7.4,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#C4D82B").s().p("AgZANIAAgZIAzABIAAAYg");
	this.shape_31.setTransform(-7.5,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C4D82B").s().p("AgXANIAAgZIAvABIAAAYg");
	this.shape_32.setTransform(-7.7,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C4D82B").s().p("AgWANIAAgZIAsABIAAAYg");
	this.shape_33.setTransform(-7.9,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C4D82B").s().p("AgUANIAAgZIApABIAAAYg");
	this.shape_34.setTransform(-8.1,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C4D82B").s().p("AgSANIAAgZIAlABIAAAYg");
	this.shape_35.setTransform(-8.2,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C4D82B").s().p("AgQANIAAgZIAhABIAAAYg");
	this.shape_36.setTransform(-8.4,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C4D82B").s().p("AgOANIAAgZIAdABIAAAYg");
	this.shape_37.setTransform(-8.6,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#C4D82B").s().p("AgNANIAAgZIAaABIAAAYg");
	this.shape_38.setTransform(-8.8,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C4D82B").s().p("AgLANIAAgZIAXABIAAAYg");
	this.shape_39.setTransform(-9,-0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C4D82B").s().p("AgJANIAAgZIATABIAAAYg");
	this.shape_40.setTransform(-9.1,-0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C4D82B").s().p("AgHANIAAgZIAPABIAAAYg");
	this.shape_41.setTransform(-9.3,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C4D82B").s().p("AgGANIAAgZIANABIAAAYg");
	this.shape_42.setTransform(-9.5,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C4D82B").s().p("AgEANIAAgZIAJAAIAAAZg");
	this.shape_43.setTransform(-9.7,-0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C4D82B").s().p("AgKANIAAgZIAVABIAAAYg");
	this.shape_44.setTransform(-9,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C4D82B").s().p("AgMANIAAgZIAZABIAAAYg");
	this.shape_45.setTransform(-8.8,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C4D82B").s().p("AgPANIAAgZIAfABIAAAYg");
	this.shape_46.setTransform(-8.5,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#C4D82B").s().p("AgRANIAAgZIAjABIAAAYg");
	this.shape_47.setTransform(-8.3,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C4D82B").s().p("AgTANIAAgZIAnABIAAAYg");
	this.shape_48.setTransform(-8.2,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C4D82B").s().p("AgWANIAAgZIAtABIAAAYg");
	this.shape_49.setTransform(-7.8,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C4D82B").s().p("AgYANIAAgZIAxABIAAAYg");
	this.shape_50.setTransform(-7.7,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C4D82B").s().p("AgcANIAAgZIA5ABIAAAYg");
	this.shape_51.setTransform(-7.3,-0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C4D82B").s().p("AgbANIAAgZIA2ABIAAAYg");
	this.shape_52.setTransform(-7.4,-0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C4D82B").s().p("AgaANIAAgZIA0ABIAAAYg");
	this.shape_53.setTransform(-7.5,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C4D82B").s().p("AgVANIAAgZIArABIAAAYg");
	this.shape_54.setTransform(-8,-0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C4D82B").s().p("AgQANIAAgZIAhAAIAAAZg");
	this.shape_55.setTransform(-8.4,-0.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C4D82B").s().p("AgPANIAAgZIAfAAIAAAZg");
	this.shape_56.setTransform(-8.5,-0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C4D82B").s().p("AgOANIAAgZIAdAAIAAAZg");
	this.shape_57.setTransform(-8.6,-0.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C4D82B").s().p("AgNANIAAgZIAbAAIAAAZg");
	this.shape_58.setTransform(-8.7,-0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C4D82B").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_59.setTransform(-8.8,-0.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C4D82B").s().p("AgLANIAAgZIAXAAIAAAZg");
	this.shape_60.setTransform(-8.9,-0.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#C4D82B").s().p("AgKANIAAgZIAVAAIAAAZg");
	this.shape_61.setTransform(-9,-0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#C4D82B").s().p("AgJANIAAgZIATAAIAAAZg");
	this.shape_62.setTransform(-9.1,-0.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C4D82B").s().p("AgIANIAAgZIARAAIAAAZg");
	this.shape_63.setTransform(-9.2,-0.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C4D82B").s().p("AgIANIAAgZIAQAAIAAAZg");
	this.shape_64.setTransform(-9.3,-0.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C4D82B").s().p("AgHANIAAgZIAPAAIAAAZg");
	this.shape_65.setTransform(-9.4,-0.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C4D82B").s().p("AgGANIAAgZIANAAIAAAZg");
	this.shape_66.setTransform(-9.5,-0.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C4D82B").s().p("AgFANIAAgZIAKAAIAAAZg");
	this.shape_67.setTransform(-9.6,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29}]}).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31,p:{x:-7.5}}]},1).to({state:[{t:this.shape_32,p:{x:-7.7}}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34,p:{x:-8.1}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37,p:{x:-8.6}}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40,p:{x:-9.1}}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40,p:{x:-9.2}}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_37,p:{x:-8.7}}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48,p:{x:-8.2}}]},1).to({state:[{t:this.shape_34,p:{x:-8}}]},1).to({state:[{t:this.shape_49,p:{x:-7.8}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_31,p:{x:-7.5}}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_31,p:{x:-7.6}}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_32,p:{x:-7.8}}]},1).to({state:[{t:this.shape_49,p:{x:-7.9}}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_34,p:{x:-8.1}}]},1).to({state:[{t:this.shape_48,p:{x:-8.1}}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C4D82B").s().p("AgVAWIAAgrIArAAIAAArg");
	this.shape_68.setTransform(0.5,-0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C4D82B").s().p("AgVAVIAAgqIArAAIAAAqg");
	this.shape_69.setTransform(0.5,-0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#C4D82B").s().p("AgVAVIAAgpIArAAIAAApg");
	this.shape_70.setTransform(0.5,-0.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#C4D82B").s().p("AgVAUIAAgnIArAAIAAAng");
	this.shape_71.setTransform(0.5,-0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#C4D82B").s().p("AgVATIAAglIArAAIAAAlg");
	this.shape_72.setTransform(0.5,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#C4D82B").s().p("AgVASIAAgjIArAAIAAAjg");
	this.shape_73.setTransform(0.5,-0.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C4D82B").s().p("AgVARIAAghIArAAIAAAhg");
	this.shape_74.setTransform(0.5,-0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C4D82B").s().p("AgVAQIAAgfIArAAIAAAfg");
	this.shape_75.setTransform(0.5,-0.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C4D82B").s().p("AgVAPIAAgdIArAAIAAAdg");
	this.shape_76.setTransform(0.5,-1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#C4D82B").s().p("AgVAOIAAgbIArAAIAAAbg");
	this.shape_77.setTransform(0.5,-1.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#C4D82B").s().p("AgVANIAAgZIArAAIAAAZg");
	this.shape_78.setTransform(0.5,-1.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#C4D82B").s().p("AgVAMIAAgXIArAAIAAAXg");
	this.shape_79.setTransform(0.5,-1.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#C4D82B").s().p("AgVALIAAgVIArAAIAAAVg");
	this.shape_80.setTransform(0.5,-1.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C4D82B").s().p("AgVAKIAAgTIArAAIAAATg");
	this.shape_81.setTransform(0.5,-1.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C4D82B").s().p("AgVAJIAAgRIArAAIAAARg");
	this.shape_82.setTransform(0.5,-1.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#C4D82B").s().p("AgVAIIAAgPIArAAIAAAPg");
	this.shape_83.setTransform(0.5,-1.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#C4D82B").s().p("AgVAHIAAgNIArAAIAAANg");
	this.shape_84.setTransform(0.5,-1.8);
	this.shape_84._off = true;

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#C4D82B").s().p("AgVANIAAgaIArAAIAAAag");
	this.shape_85.setTransform(0.5,-1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C4D82B").s().p("AgVAOIAAgcIArAAIAAAcg");
	this.shape_86.setTransform(0.5,-1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C4D82B").s().p("AgVARIAAgiIArAAIAAAig");
	this.shape_87.setTransform(0.5,-0.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C4D82B").s().p("AgVAFIAAgJIArAAIAAAJg");
	this.shape_88.setTransform(0.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68}]}).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(18).to({_off:false},0).wait(2).to({_off:true},1).wait(32).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer 6
	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C4D82B").s().p("AgMAdIAAg5IAZAAIAAA5g");
	this.shape_89.setTransform(5.3,0);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C4D82B").s().p("AgMAaIAAg0IAZAAIAAA0g");
	this.shape_90.setTransform(5.3,0.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C4D82B").s().p("AgMAYIAAgvIAZAAIAAAvg");
	this.shape_91.setTransform(5.3,0.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C4D82B").s().p("AgMAVIAAgpIAZAAIAAApg");
	this.shape_92.setTransform(5.3,0.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C4D82B").s().p("AgMASIAAgjIAZAAIAAAjg");
	this.shape_93.setTransform(5.3,1.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#C4D82B").s().p("AgMAPIAAgdIAZAAIAAAdg");
	this.shape_94.setTransform(5.3,1.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#C4D82B").s().p("AgMAMIAAgYIAZAAIAAAYg");
	this.shape_95.setTransform(5.3,1.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C4D82B").s().p("AgMAKIAAgTIAZAAIAAATg");
	this.shape_96.setTransform(5.3,1.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C4D82B").s().p("AgMAHIAAgNIAZAAIAAANg");
	this.shape_97.setTransform(5.3,2.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#C4D82B").s().p("AgMAEIAAgHIAZAAIAAAHg");
	this.shape_98.setTransform(5.3,2.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#C4D82B").s().p("AgMAFIAAgIIAZAAIAAAIg");
	this.shape_99.setTransform(5.3,2.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C4D82B").s().p("AgMAFIAAgJIAZAAIAAAJg");
	this.shape_100.setTransform(5.3,1.2);
	this.shape_100._off = true;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C4D82B").s().p("AgMAGIAAgLIAZAAIAAALg");
	this.shape_101.setTransform(5.3,-1.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C4D82B").s().p("AgMAFIAAgKIAZAAIAAAKg");
	this.shape_102.setTransform(5.3,-2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C4D82B").s().p("AgMAJIAAgRIAZAAIAAARg");
	this.shape_103.setTransform(5.3,-2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C4D82B").s().p("AgMALIAAgVIAZAAIAAAVg");
	this.shape_104.setTransform(5.3,-1.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#C4D82B").s().p("AgMAMIAAgXIAZAAIAAAXg");
	this.shape_105.setTransform(5.3,-1.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C4D82B").s().p("AgMANIAAgaIAZAAIAAAag");
	this.shape_106.setTransform(5.3,-1.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C4D82B").s().p("AgMARIAAghIAZAAIAAAhg");
	this.shape_107.setTransform(5.3,-1.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C4D82B").s().p("AgMAUIAAgnIAZAAIAAAng");
	this.shape_108.setTransform(5.3,-1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C4D82B").s().p("AgMAWIAAgrIAZAAIAAArg");
	this.shape_109.setTransform(5.3,-0.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C4D82B").s().p("AgMAXIAAgtIAZAAIAAAtg");
	this.shape_110.setTransform(5.3,-0.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#C4D82B").s().p("AgMAZIAAgxIAZAAIAAAxg");
	this.shape_111.setTransform(5.3,-0.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C4D82B").s().p("AgMAaIAAgzIAZAAIAAAzg");
	this.shape_112.setTransform(5.3,-0.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C4D82B").s().p("AgMAcIAAg3IAZAAIAAA3g");
	this.shape_113.setTransform(5.3,-0.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C4D82B").s().p("AgMAbIAAg2IAZAAIAAA2g");
	this.shape_114.setTransform(5.3,0.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C4D82B").s().p("AgMATIAAglIAZAAIAAAlg");
	this.shape_115.setTransform(5.3,1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C4D82B").s().p("AgMANIAAgZIAZAAIAAAZg");
	this.shape_116.setTransform(5.3,1.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C4D82B").s().p("AgMAIIAAgPIAZAAIAAAPg");
	this.shape_117.setTransform(5.3,2.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C4D82B").s().p("AgMAEIAAgIIAZAAIAAAIg");
	this.shape_118.setTransform(5.3,2.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C4D82B").s().p("AgMADIAAgFIAZAAIAAAFg");
	this.shape_119.setTransform(5.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89}]}).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93,p:{y:1.1}}]},1).to({state:[{t:this.shape_94,p:{y:1.4}}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97,p:{y:2.2}}]},1).to({state:[{t:this.shape_98,p:{y:2.5}}]},1).to({state:[{t:this.shape_99,p:{y:2.2}}]},1).to({state:[{t:this.shape_98,p:{y:1.8}}]},1).to({state:[{t:this.shape_99,p:{y:1.5}}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101,p:{y:-1.4}}]},1).to({state:[{t:this.shape_101,p:{y:-1.7}}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_101,p:{y:-2.4}}]},1).to({state:[{t:this.shape_97,p:{y:-2.2}}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104,p:{y:-1.9}}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_94,p:{y:-1.4}}]},1).to({state:[{t:this.shape_107,p:{y:-1.3}}]},1).to({state:[{t:this.shape_93,p:{y:-1.1}}]},1).to({state:[{t:this.shape_108,p:{y:-1}}]},1).to({state:[{t:this.shape_109,p:{y:-0.8}}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112,p:{y:-0.3}}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_112,p:{y:0.3}}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_109,p:{y:0.7}}]},1).to({state:[{t:this.shape_108,p:{y:0.9}}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_107,p:{y:1.2}}]},1).to({state:[{t:this.shape_94,p:{y:1.4}}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_104,p:{y:1.8}}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_101,p:{y:2.3}}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(13).to({_off:false},0).wait(1).to({y:0.9},0).wait(1).to({y:0.5},0).wait(1).to({y:0.2},0).wait(1).to({y:-0.1},0).wait(1).to({y:-0.4},0).wait(1).to({y:-0.8},0).wait(1).to({y:-1.1},0).to({_off:true},1).wait(35));

	// Layer 5
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C4D82B").s().p("AgdAMIAAgXIA7AAIAAAXg");
	this.shape_120.setTransform(11.3,-0.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C4D82B").s().p("AgcAMIAAgXIA5AAIAAAXg");
	this.shape_121.setTransform(11.2,-0.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C4D82B").s().p("AgaAMIAAgXIA1AAIAAAXg");
	this.shape_122.setTransform(11,-0.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C4D82B").s().p("AgYAMIAAgXIAxAAIAAAXg");
	this.shape_123.setTransform(10.8,-0.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C4D82B").s().p("AgWAMIAAgXIAtAAIAAAXg");
	this.shape_124.setTransform(10.6,-0.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C4D82B").s().p("AgVAMIAAgXIAqAAIAAAXg");
	this.shape_125.setTransform(10.5,-0.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C4D82B").s().p("AgTAMIAAgXIAnAAIAAAXg");
	this.shape_126.setTransform(10.3,-0.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C4D82B").s().p("AgRAMIAAgXIAjAAIAAAXg");
	this.shape_127.setTransform(10.1,-0.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C4D82B").s().p("AgQAMIAAgXIAhAAIAAAXg");
	this.shape_128.setTransform(10,-0.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C4D82B").s().p("AgOAMIAAgXIAdAAIAAAXg");
	this.shape_129.setTransform(9.8,-0.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C4D82B").s().p("AgMAMIAAgXIAZAAIAAAXg");
	this.shape_130.setTransform(9.6,-0.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C4D82B").s().p("AgKAMIAAgXIAVAAIAAAXg");
	this.shape_131.setTransform(9.4,-0.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C4D82B").s().p("AgJAMIAAgXIASAAIAAAXg");
	this.shape_132.setTransform(9.3,-0.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C4D82B").s().p("AgHAMIAAgXIAPAAIAAAXg");
	this.shape_133.setTransform(9.1,-0.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C4D82B").s().p("AgFAMIAAgXIALAAIAAAXg");
	this.shape_134.setTransform(8.9,-0.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C4D82B").s().p("AgIAMIAAgXIARAAIAAAXg");
	this.shape_135.setTransform(9.2,-0.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#C4D82B").s().p("AgNAMIAAgXIAbAAIAAAXg");
	this.shape_136.setTransform(9.7,-0.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C4D82B").s().p("AgPAMIAAgXIAfAAIAAAXg");
	this.shape_137.setTransform(9.9,-0.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C4D82B").s().p("AgSAMIAAgXIAlAAIAAAXg");
	this.shape_138.setTransform(10.2,-0.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#C4D82B").s().p("AgUAMIAAgXIApAAIAAAXg");
	this.shape_139.setTransform(10.4,-0.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C4D82B").s().p("AgVAMIAAgXIArAAIAAAXg");
	this.shape_140.setTransform(10.5,-0.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C4D82B").s().p("AgXAMIAAgXIAvAAIAAAXg");
	this.shape_141.setTransform(10.7,-0.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#C4D82B").s().p("AgZAMIAAgXIAzAAIAAAXg");
	this.shape_142.setTransform(10.9,-0.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#C4D82B").s().p("AgbAMIAAgXIA3AAIAAAXg");
	this.shape_143.setTransform(11.6,-0.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#C4D82B").s().p("AgWAMIAAgXIAsAAIAAAXg");
	this.shape_144.setTransform(12.1,-0.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C4D82B").s().p("AgKAMIAAgXIAUAAIAAAXg");
	this.shape_145.setTransform(13.3,-0.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C4D82B").s().p("AgGAMIAAgXIANAAIAAAXg");
	this.shape_146.setTransform(13.6,-0.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C4D82B").s().p("AgEAMIAAgXIAJAAIAAAXg");
	this.shape_147.setTransform(13.9,-0.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#C4D82B").s().p("AgDAMIAAgXIAHAAIAAAXg");
	this.shape_148.setTransform(14,-0.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C4D82B").s().p("AgCAMIAAgXIAFAAIAAAXg");
	this.shape_149.setTransform(14.1,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120}]}).to({state:[{t:this.shape_121,p:{x:11.2}}]},1).to({state:[{t:this.shape_122,p:{x:11}}]},1).to({state:[{t:this.shape_123,p:{x:10.8}}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126,p:{x:10.3}}]},1).to({state:[{t:this.shape_127,p:{x:10.1}}]},1).to({state:[{t:this.shape_128,p:{x:10}}]},1).to({state:[{t:this.shape_129,p:{x:9.8}}]},1).to({state:[{t:this.shape_130,p:{x:9.6}}]},1).to({state:[{t:this.shape_131,p:{x:9.4}}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133,p:{x:9.1}}]},1).to({state:[{t:this.shape_134,p:{x:8.9}}]},1).to({state:[{t:this.shape_133,p:{x:9.1}}]},1).to({state:[{t:this.shape_135,p:{x:9.2}}]},1).to({state:[{t:this.shape_131,p:{x:9.4}}]},1).to({state:[{t:this.shape_130,p:{x:9.6}}]},1).to({state:[{t:this.shape_136,p:{x:9.7}}]},1).to({state:[{t:this.shape_137,p:{x:9.9}}]},1).to({state:[{t:this.shape_128,p:{x:10}}]},1).to({state:[{t:this.shape_138,p:{x:10.2}}]},1).to({state:[{t:this.shape_139,p:{x:10.4}}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141,p:{x:10.7}}]},1).to({state:[{t:this.shape_142,p:{x:10.9}}]},1).to({state:[{t:this.shape_122,p:{x:11}}]},1).to({state:[{t:this.shape_121,p:{x:11.2}}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121,p:{x:11.4}}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_122,p:{x:11.7}}]},1).to({state:[{t:this.shape_142,p:{x:11.8}}]},1).to({state:[{t:this.shape_123,p:{x:11.9}}]},1).to({state:[{t:this.shape_141,p:{x:12}}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_139,p:{x:12.2}}]},1).to({state:[{t:this.shape_126,p:{x:12.3}}]},1).to({state:[{t:this.shape_138,p:{x:12.4}}]},1).to({state:[{t:this.shape_127,p:{x:12.5}}]},1).to({state:[{t:this.shape_128,p:{x:12.7}}]},1).to({state:[{t:this.shape_137,p:{x:12.8}}]},1).to({state:[{t:this.shape_129,p:{x:12.9}}]},1).to({state:[{t:this.shape_136,p:{x:13}}]},1).to({state:[{t:this.shape_130,p:{x:13.1}}]},1).to({state:[{t:this.shape_131,p:{x:13.2}}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_135,p:{x:13.4}}]},1).to({state:[{t:this.shape_133,p:{x:13.5}}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_134,p:{x:13.8}}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-2.9,28.7,5.9);


(lib.m4_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,51,102,0.498)").s().p("AgHBWQhDgJgtgeQgsgfADgjQAEgkAygTQAxgUBCAJQBCAIAtAfQAtAfgEAjQgEAkgxATQgkANgsAAQgRAAgSgCg");
	this.shape.setTransform(54.6,-14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,51,102,0.498)").s().p("AhnBMQgzgSgFgkQgGgiArggQArgfBCgJQBCgKAzATQAzASAFAjQAGAjgrAgQgrAfhCAKQgVADgUAAQgpAAgjgNg");
	this.shape_1.setTransform(-54.7,-15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC0033").s().p("AhHhWQAYAnAqARQAhgMAVgnQDbA0CXBdQj8hWitA5QiwgkjsBXQCkh5C3gzg");
	this.shape_2.setTransform(-1.6,-9.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhEADQAEglCFAWQhQAhgiAAQgYAAABgSg");
	this.shape_3.setTransform(21.7,-3.1,1,1,0,0,0,7.3,-1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD002B").s().p("AmiASQD3iIDJAWQDKAWC7BGQiDBRj1AUQgpADgnAAQjJAAi0hSg");
	this.shape_4.setTransform(-1.6,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHAXQgJgkCYgVQhcBFgiAAQgNAAgEgMg");
	this.shape_5.setTransform(17.1,15.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AD002B").s().p("AnbhuQD2CEDvgJQDvgJDjiJQi3D+khAMIgZABQkQAAi2j0g");
	this.shape_6.setTransform(-1.6,10.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0033").s().p("AhQhWQAaAnAwARQAmgMAYgnQD4A0CsBdQkfhWjEA5QjIgkkMBXQC6h5DRgzg");
	this.shape_7.setTransform(-1.6,-9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6699").s().p("AlIAYQE2jgFbDMQisBaiuAAQiaAAidhGg");
	this.shape_8.setTransform(-0.8,8.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#330000").s().p("AAECTQkhAAi+iwQC6h7EbAGQE2AACsBeQi3DHkgAAIgBAAg");
	this.shape_9.setTransform(-1.6,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(204,51,102,0.498)").s().p("AgFBWQgygJgggeQghgfACgjQADgkAlgTQAkgUAxAJQAxAIAhAfQAhAfgDAjQgDAkgkATQgbANggAAQgNAAgNgCg");
	this.shape_10.setTransform(49.3,-17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhCAZQgIgjCNgaQhXBJgfAAQgMAAgDgMg");
	this.shape_11.setTransform(22.4,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6699").s().p("AkKAhQDkiqExCJQhkA0h5AIQgXACgXAAQhuAAicgdg");
	this.shape_12.setTransform(-1.7,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD002B").s().p("Am7hdQBcAyB0AUQC/AjB5gIQB5gHBlg2QA7gfBWg7QhBEFkzAfQgfADgeAAQkJAAi9jxg");
	this.shape_13.setTransform(-4.8,8.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC0033").s().p("AmlBMQBrhOB9grQB/gqA3gEQAuArAtAIQAigNADgmQAqAIApAKQCdAxA/AzIAUALQjHhBikAxQiIgXmEBdg");
	this.shape_14.setTransform(-4.8,-9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#330000").s().p("Am7ALQGEhdCIAYQCkgyDHBCQhWA6g7AfQkyiIjkCqQh0gUhcgyg");
	this.shape_15.setTransform(-4.8,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhAAEQADglB+ATQhNAjgfAAQgWAAABgRg");
	this.shape_16.setTransform(22.5,-3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AD002B").s().p("AATBaQhvgHlehMQFrh5ClAxQCDg6DiBKQh/BYhdAdQhKAXhXAAIgrgBg");
	this.shape_17.setTransform(-4.5,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC0033").s().p("AgJhcQBHA1AVgDQAVgEAUgvQCuAoCRBbQjihJiDA5QilgxlrB5QC6iPD3grg");
	this.shape_18.setTransform(-4.5,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:-54.7,y:-15}},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1,p:{x:-54.7,y:-15}},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_1,p:{x:-55.5,y:-13.5}},{t:this.shape_10}]},1).to({state:[{t:this.shape_1,p:{x:-55.5,y:-13.5}},{t:this.shape_10},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.7,-23.8,141.5,31.5);


(lib.m4_legR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AkMn2QADBvAFBkQARFhAZDoQAEAjAFAgQAkEQA9AJQA7AIBTkJQAMgmAMgsQBjlbB5nfIojh3QACBIADBEg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B77C01").s().p("AhwKCQg9gJgkkQIgJhDQgZjogRlhQgFhkgDhvIgFiMIIjB3Qh5HfhjFbIgYBSQhQECg7AAIgDgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-65.2,56.8,130.5);


(lib.m4_legL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADzk3QgUC0gUCTQgWCcgVB6QgtD7gyBGQgFAIgGAGQgMALgMACQhDAJhMlcQhMlbhYnfIIrh3QgRCqgQCVQgBAGgBAGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3A501").s().p("AhmhDIgUhnQCKghBrhgQgWCcgVB6QgtD6gxBHQgvijgpjMg");
	this.shape_1.setTransform(8,31.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B77C01").s().p("AhxEvQhMlbhYnfIIrh3IghE/IgCAMQgUC0gUCTQhrBgiKAgIAUBoQAoDNAvCiQgFAIgGAGQgMALgMACIgDABQhCAAhKlUg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-65.2,57.6,130.5);


(lib.m4_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("EgPeAgHQAAgFAAgFQgcrMgOt0QgNtzCusYQBcmlC8jOQBxh7CTguQBFgVBNgEQH/geDlGVQDQFxBkJ8QAJA8AJA/QACAOACAQQBeLHAoOEQAZJLgSF3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBC34").s().p("AoGYFQhb6xBFrhQg6iDAFieQBMBCBVAlQhVhnBHlCQCVDoDnBbQhgiOAJjJQD1D6FMBpIARB7IAEAeQBfLIAnODQAaJMgTF2g");
	this.shape_1.setTransform(44,51.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CD8B01").s().p("AkyekIgBgKQgcrMgNtzQgOtzCusZQBcmlC8jNIALKhIArGnIgjG3IDvAyQiPCQi4AdQiRRoA+QBg");
	this.shape_2.setTransform(-68.3,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3A501").s().p("EgMZAgHQg/wBCTxpQC4gcCOiQIjvgzIAkm2IgrmnIgMqiQBxh8CTgtQBFgVBNgFQH/gdDlGVQDQFxBkJ8QlMhpj1j7QgJDKBgCNQjohaiTjoQhIFCBWBnQhWglhLhDQgFCeA6CDQhFLhBbayg");
	this.shape_3.setTransform(5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-206.4,208.8,412.9);


(lib.m4_hat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcgtIAigCQAUAmADA6QgdhLgcgTg");
	this.shape.setTransform(5.1,63.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AvBmnQgHBOgHBOQgFAtgDAtQgSDjgLDoQgDA2gBA3QgKENAAERQAAAyAAAyQAAAAAAABQmBFCjOFPQITigIfhoQQkjLRNAMQmalPljiZIAAgBQgUgwgUgxQhljvhfjYQgWgygVgwQhuj2hojWQgUgqgUgpQiqlZiWj+QgUgjgUggQhmimhch6Qk1mZkTCnQhQAvhLBfQgoAxgmA+QgEAEgCAFQhUCHhECZQgWA0gUA0QhhD5g2EkQAAABAAABQgKA5gIA7QgkDjgKD7QgTBJBBAMQBBAMAFhEQA7iTBHh6QAUgjAVggQBBhmBMhUQAWgYAXgXQAPgQARgQQADgkAFgjQAIhSAKhSQAAgBAAgBQAHg6AHg6QAJhJALhJQAEgjAGgiQAKhJALhIAu5nuQh6jPAxj+QAHgnALgpQAGgWAIgXQALgiAOgiQAOgjARgj");
	this.shape_1.setTransform(8.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3E3E").s().p("AhNgcQAfgSAqgIQAVgFAYgCIASACIATB0IgIADIiJACg");
	this.shape_2.setTransform(2.7,64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA0000").s().p("AhMBJIgUhxQA4gdA9gCQAXgCAYADQgYACgVAFQgqAIgfASIAKBaICJgCIgdAIIgcAGQguAIgxAAIgVAAg");
	this.shape_3.setTransform(0,64.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#402020").s().p("Aj3SPQGlj2GlhPIAUByQm8BMmiDrIAAhkgAjpIEQGhj0G4geIATBqQnTAfmeD2IAFhtgAqChfQAJg7AKg5QAwGOCvhwQgVAggUAjQgUAFgSAAQh8AAgnjygAjEghQFQjuF7gXIASBRQmOAXlXD2QADgtAFgsgAnYryQAUg0AWg0QgVIbDsCiIgsAvQj3iRAinzgAj4rRQAIgnALgpQAGgWAIgXQAGDFBDBrIgOB0Qg4hOgkjZgAhxr1QDJiWD1gTIAbBFQj9AWjmCTIAKhFgAkWx6IAFgJQAng+AogxQgqDaAuCGQgPAigKAiQgIAXgGAWQg0iDADjWg");
	this.shape_4.setTransform(-69.2,-23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660000").s().p("AjBPyIgBgBQGijrG8hMQA9ACA4gKIABAFQh6AyhKBSQj7EWgzEqQoeBooTCgQDOlPGClCgAi4FvQGdj2HTgfQAkDZAiD2Qg+ACg4AdQmlBPmlD2QAAkRAKkNgAiXjJQFYj3GNgXQAtDQAqD4Qm4AdmhD0QAKjoATjjgApMDSQhBgMAThJQAKj7AkjjQAsEXCcgpQhHB6g7CTQgFA6gvAAQgJAAgJgCgAo6nVIABgCQA2kkBgj5QgiHzD3CRQhMBUhBBmQgmAZggAAQhzAAgmk4gAiBm/IghAgQjriiAUobQBDiZBViHQgDDWA0CDQgLApgIAnQgNBJAABEQAACsBXCUQAHhSALhSIAAgCIAOh0QAJhJAKhJQDmiTD9gWQBSDjBNFQQl7AXlQDuIAOicgAiBm/IAIhHIgIBHgAjQtGQAAhEANhJQAkDZA4BOIAAACQgLBSgHBSQhXiUAAisgAhnqsIAAAAgAiixQQAKgiAPgiQguiGAqjaQBLhfBPgvQCIAJCoE/QAjBEAiBWQj1ATjJCWIAWiRIgWCRIgKBFQgKBJgJBJQhDhrgGjFgAiJyUQAOgjARgjQgRAjgOAjgAhGuyIAAAAg");
	this.shape_5.setTransform(-74.5,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AqBPXQBLhSB5gyIAAgFIAcgGIAdgIIAIgDQGWgoGsBaIAAABQFjCZGaFPQxOgMwjDLQAykqD7kWgAlsLFIgjADIgSgCQgYgDgXACQgij2gljZQFqgZGHBqQBeDYBlDvQmEhrmFAigAopCMQgrj3gtjQQEfgRE7BlQBnDWBuD2QlyhyllAZgAqTmMQhMlQhSjjQDKgRDYA/QCXD+CpFZQkshjkYARgAtMwEQgjhWgihEQiok/iJgJQEUinE0GZQBcB6BmCmQjXg/i9APg");
	this.shape_6.setTransform(48.6,-13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C2E2E").s().p("Ai4OJIgTh0IAjgEQGFgiGEBsIAoBhQmrhamWAngAlTFCIgShqQFkgZFzByIArBiQmHhplpAYgAm9jvIgShRQEXgREsBkIAoBTQk6hmkfARgAputyIgahGQC9gPDXA/IApBEQjYg/jLARg");
	this.shape_7.setTransform(29,-20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHCnQgMgCgGgIQgCgGgBgEQAAgJADgJQANgiAEgQQAch6hEh7QBfBQABB6QABAqgLAtIgEAMQgLAegXACIgHAAg");
	this.shape_8.setTransform(-111.5,49);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAYFYQACAAACAAQBXgHBEgsQAsgbAlgrQBchtgMiOQgLiPhthcQhuhciOAMQiOALhdBtQhcBtAMCOQAFA7AVAyQAeBIBBA2QAoAjAuAUQBKAhBWgHg");
	this.shape_9.setTransform(-135.8,48.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA0000").s().p("AhtEUQgtgVgpgiQhAg2gehIQgKgggDgkQgLh9BShgQBRhgB+gKQB9gLBgBSQBfBRALB+QAKB9hQBgQghAlgmAZQgyAfg9AKIgcABQhFAAg/gbg");
	this.shape_10.setTransform(-138.6,52.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF3E3E").s().p("AAYFZQA8gKAygfQAngZAgglQBRhggLh+QgKh9hfhRQhghSh9ALQh+AKhSBgQhRBgAKB9QADAkAKAgQgVgzgFg7QgMiNBchtQBdhtCOgMQCOgMBuBcQBtBdALCOQAMCPhcBsQglArgsAcQhEArhXAIIgEAAg");
	this.shape_11.setTransform(-135.8,48.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.4,-170.1,342.9,340.2);


(lib.m4_hair = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGbBlQAAgCABgCQABABABAAQFKCmFUA6IgJgHIloj4QD6BhDxAQQh+g/h8hWQhXg8hWhHQjRiujrhhQjqhhkrBFQkYABjECYQjECYheCuQhGCAhjBOQgkAdgoAWQBugdBjgwQB6g9BphZQgDA7gRAzQgeBbhJBJQCuhJBwh7QAZgbAVgdQAKAXAIAXQAoB5gfB1QDBhxBOinQACgEABgDQACADACADQB5C4DhBoQAIADAHADQhDi8BXiQQCMCZDQBcQAHADAHADQhyh0Akh+");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE4AC").s().p("AnmDBQiQiTAEimQBfgMBQABQhXCOBDC8IgPgGgAhnBwQiuiHg0iCIDFgQIgfAnIgCgBIgBADIgBAFQgkB9ByB1IgOgHgAhGiuQDggRDggHQB8BWB+BAQjxgQj6hiIFoD4QljhwjUiUg");
	this.shape_1.setTransform(57.8,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC957").s().p("AjCCKIgEgGIgDAHQhOCnjBBxQAfh1goh5QgIgXgKgXQgVAdgZAbQhwB7iuBJQBJhJAehbQARgzADg7QhpBZh6A9QhjAwhuAdQAogWAkgdQBjhOBGiAQBeiuDEiYQDEiYEYgBQEqhFDrBhQDrBhDRCuQBWBHBWA8QjfAHjhAQQDVCUFiBxIAKAHQlVg6lKimIAfgnIjFARQA0CCCuCIQjPhciMiZQhRAAhfALQgDCoCPCTQjghoh5i4g");
	this.shape_2.setTransform(-6.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.5,-43.9,243.1,87.8);


(lib.m4_eye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah7AGQB8gdB7AYQhNAJhKAAQgwAAgwgEg");
	this.shape.setTransform(-46.8,11.9,1,1,0,0,0,0.1,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah6gCQB6gVB7AgQgiACgiAAQhXAAhagNg");
	this.shape_1.setTransform(46.3,10.6,1,1,0,0,0,-0.1,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AD6C07").s().p("ADjB8QkAkrj6BmQDQi2FOFLQAdAhgVAUQgKAJgJAAQgNAAgMgOg");
	this.shape_2.setTransform(-39.8,-12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AESBwQmhmAhhFPQhCACgoghQAzALAzgBIAEgeQg9gMgNgrQAwAZAiADQAGgQAHgOQgxgVAHghQATAXAoAHQAwg7BkAMQCnATCeC9QAeARAtAJIgZABQgcAAgTgHg");
	this.shape_3.setTransform(-42.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(56,56,56,0.447)").s().p("Ag6hMQhtgdhZCeQBglOGiGAQjQiXhsgcg");
	this.shape_4.setTransform(-41.2,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgmBMQgUgegDgsQgCgrAPggQAQgeAagCQAYgBAUAdQAVAfACArQAFAsgSAfQgPAggaACIgBAAQgZAAgTgeg");
	this.shape_5.setTransform(-38.1,10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#77DDFF").s().p("AgdB+QgegkgKhGQgKhFATgwQAVg3AyAGQAPALANAWQAeAwAEBCQAFBDgVAxIgFAJQgCAFgCACQgTAOgSAAQgUAAgUgVg");
	this.shape_6.setTransform(-37.2,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#33CCFF").s().p("AgnB2QgdgugFhDQgEhDAVgxQAXgxAigCQATgBARAMQgxgGgWA3QgTAwAKBFQAKBGAfAkQAiAnAqggQgUAigdABIgDAAQghAAgcgtg");
	this.shape_7.setTransform(-39.9,10.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASC4QjRgHhBjRQBglMGiGMQgdCYjDAAIgQAAg");
	this.shape_8.setTransform(-41.2,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AD6C07").s().p("AkPCAQgWgVAdggQFSlJDPC4Qj6hokBEoQgNAPgNAAQgJAAgKgJg");
	this.shape_9.setTransform(38.5,-11.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlbB1QAvgKAegQQChi8CmgSQBtgMAuBEQAwAAAagYQAAAkg6APQAFANAEAPQAkABA4gWQgVAphAAMIADAQQAyABAygKQgnAghCgDQhdlPmmF+QgUAHgcAAIgagBg");
	this.shape_10.setTransform(42.9,1.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(56,56,56,0.447)").s().p("AECA3QhPiWiGAjQiGAiioCAQGml+BdFPg");
	this.shape_11.setTransform(41.3,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AglBHQgUgbgEgpQgDgoAPgeQAPgeAagBQAYgBAVAbQAUAcAFApQADAogPAeQgPAegaACIgDAAQgWAAgVgcg");
	this.shape_12.setTransform(37.9,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#77DDFF").s().p("AgbB2QgfghgLhBQgMhBAUgtQAUg0AyAFQAQALAOAUQAdAsAFA+QAGA/gVAuIgEAJQgCAEgCADQgUANgRAAQgVAAgTgUg");
	this.shape_13.setTransform(39.2,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33CCFF").s().p("AgmBwQgegsgGg/QgFg+AWguQAVguAkgDQASAAARAKQgxgFgVA0QgTAtALBBQALBBAfAhQAiAlArgeQgUAfgeABIgDABQgiAAgbgpg");
	this.shape_14.setTransform(36.6,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AkBAhQGcmMBnFPQhSDGjOALIgcABQi1AAgSiVg");
	this.shape_15.setTransform(41.3,9.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AESCVQmhoAhhG+QhCADgogsQAzAPAzgBIAEgoQg9gRgNg5QAwAhAiAFQAGgWAHgTQgxgbAHgsQATAeAoAJQAwhOBkAQQCnAaCeD7QAeAWAtANQgNACgMAAQgcAAgTgKg");
	this.shape_16.setTransform(-42.9,-2.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(56,56,56,0.447)").s().p("Ag6hlQhtgmhZDSQBgm+GiIAQjQjJhsglg");
	this.shape_17.setTransform(-41.2,-1.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmBRQgUgggDgvQgCguAPgiQAQghAagCQAYAAAUAfQAVAgACAvQAFAvgSAhQgPAigaACIgCABQgYAAgTghg");
	this.shape_18.setTransform(-38.1,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77DDFF").s().p("AgdCHQgegngKhKQgKhKATg0QAVg7AyAHQAPALANAYQAeAzAEBHQAFBIgVA0IgFAKQgCAFgCADQgTAPgSAAQgUAAgUgXg");
	this.shape_19.setTransform(-37.2,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33CCFF").s().p("AgnB/QgdgygFhIQgEhIAVg0QAXg1AigCQATgBARANQgxgHgWA7QgTA0AKBKQAKBLAfAmQAiArAqgjQgUAkgdABIgDABQghAAgcgwg");
	this.shape_20.setTransform(-39.9,10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkAgZQBgm/GiH/QgbDEjTAAQjQAAhEkEg");
	this.shape_21.setTransform(-41.2,8.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AlbCbQAvgMAegWQChj6CmgZQBtgQAuBcQAwgBAagfQAAAvg6AUQAFARAEAUQAkACA4geQgVA3hAARIADAUQAyACAygOQgnArhCgDQhdm/mmH8QgTAKgcAAQgMAAgPgCg");
	this.shape_22.setTransform(42.9,-2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(56,56,56,0.447)").s().p("AECBKQhPjIiGAuQiGAtioCrQGmn9BdG/g");
	this.shape_23.setTransform(41.3,-0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AglBSQgUgggEgvQgDgtAPgiQAPgiAagCQAYgBAVAeQAUAhAFAvQADAugPAiQgPAigaACIgDAAQgWAAgVgfg");
	this.shape_24.setTransform(37.9,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#77DDFF").s().p("AgbCHQgfglgLhMQgMhKAUg0QAUg6AyAFQAQAMAOAYQAdAxAFBIQAGBIgVA1IgEAJQgCAGgCADQgUAPgRAAQgVAAgTgXg");
	this.shape_25.setTransform(39.2,8.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33CCFF").s().p("AgmCAQgegzgGhHQgFhIAWg0QAVg1AkgCQASgCARANQgxgGgVA7QgTA0ALBKQALBLAfAlQAiAqArgiQgUAkgeABIgDABQghAAgcgvg");
	this.shape_26.setTransform(36.6,9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWDrQjSgCgZjFQGmn8BdHAQhHEDjPAAIgCAAg");
	this.shape_27.setTransform(41.3,9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ah7AGQB9gdB6AYQhNAJhKAAQgwAAgwgEg");
	this.shape_28.setTransform(-38.9,6.9,1,1,0,0,0,0.1,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhdgBQBdgTBeAcQgaACgZAAQhCAAhGgLg");
	this.shape_29.setTransform(55.5,0,1,1,0,0,0,-0.2,0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmBFQgUgbgDgoQgCgnAPgdQAQgcAagCQAYAAAUAaQAVAcACAnQAFAogSAcQgPAdgaACIgCABQgYAAgTgcg");
	this.shape_30.setTransform(-30.2,7.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#77DDFF").s().p("AgdBzQgeghgKg/QgKg/ATgsQAVgyAyAFQAPAKANAVQAeArAEA8QAFA9gVAsIgFAJQgCAEgCACQgTANgSAAQgVAAgTgTg");
	this.shape_31.setTransform(-29.3,7.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33CCFF").s().p("AgnBsQgdgrgFg9QgEg8AVgtQAXgtAigBQATgBARALQgxgGgWAyQgTAsAKA/QAKA/AfAhQAiAkAqgdQgUAegdABIgDAAQghAAgcgog");
	this.shape_32.setTransform(-31.9,8.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AD6C07").s().p("AjzBzQgUgTAagcQEwkpC6CmQjhhdjnEKQgMANgLAAQgJAAgIgIg");
	this.shape_33.setTransform(40,-16.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ak4CMQArgMAagTQCRjhCWgWQBhgPAqBTQArgBAYgcQAAAqg1ATQAFAPADARQAhACAzgaQgUAxg5APIACASQAtACAugMQgkAmg7gDQhUmSl7HJQgSAJgaAAQgLAAgMgBg");
	this.shape_34.setTransform(42.9,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(56,56,56,0.447)").s().p("ADoBDQhHi0h5ApQh4ApiXCZQF7nKBUGTg");
	this.shape_35.setTransform(41.5,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjBCQgTgagEgmQgDgkAOgbQAPgcAYgBQAXgBAUAZQATAaAFAlQADAlgPAcQgOAbgZACIgDAAQgVAAgTgZg");
	this.shape_36.setTransform(49.9,0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#77DDFF").s().p("AgaBtQgdgfgKg8QgLg7ASgqQAUgvAuAEQAPAKANATQAcAoAFA5QAGA6gUArIgEAHQgCAFgCACQgSAMgRAAQgTAAgTgSg");
	this.shape_37.setTransform(51.2,0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#33CCFF").s().p("AgkBnQgcgpgGg5QgFg5AVgrQAUgqAigCQARgBAQAKQgugFgUAwQgSApALA8QAKA8AdAeQAhAiAogcQgTAdgcABIgDAAQggAAgaglg");
	this.shape_38.setTransform(48.7,0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTDTQi+gCgWixQF7nJBUGTQhADpi6AAIgBAAg");
	this.shape_39.setTransform(41.5,8.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ah7AGQB9gbB6AWQhOAIhJAAQgwAAgwgDg");
	this.shape_40.setTransform(-38.9,8.3,1,1,0,0,0,0.1,0.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhdgBQBdgSBeAbQgZABgZAAQhDAAhGgKg");
	this.shape_41.setTransform(55.5,2,1,1,0,0,0,-0.2,0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AESCJQmhnYhhGcQhCADgogpQAzANAzAAIAEglQg9gPgNg2QAwAfAiAFQAGgVAHgRQgxgZAHgpQATAcAoAIQAwhHBkAOQCnAYCeDoQAeAUAtAMQgNABgMAAQgcAAgTgJg");
	this.shape_42.setTransform(-42.9,-0.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(56,56,56,0.447)").s().p("Ag6hdQhtgjhZDCQBgmbGiHXQjQi5hsgig");
	this.shape_43.setTransform(-41.2,0.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgmA/QgUgZgDgkQgCgkAPgbQAQgaAagBQAYgBAUAZQAVAZACAlQAFAkgSAaQgPAbgaACIgCAAQgYAAgTgag");
	this.shape_44.setTransform(-30.2,9.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#33CCFF").s().p("AgnBkQgdgogFg4QgEg4AVgpQAXgpAigCQATAAARAKQgxgFgWAuQgTAoAKA6QAKA6AfAfQAiAhAqgbQgUAcgdABIgDAAQghAAgcglg");
	this.shape_45.setTransform(-31.9,9.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#77DDFF").s().p("AgdBqQgegfgKg6QgKg6ATgoQAVguAyAFQAPAJANATQAeAoAEA3QAFA4gVApIgFAIQgCAEgCACQgTAMgSAAQgVAAgTgSg");
	this.shape_46.setTransform(-29.3,9.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AALC8QjTgOg4irQBgmbGiHXQgfB+ixAAIgngBg");
	this.shape_47.setTransform(-41.2,6.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ak4CBQArgKAagSQCRjQCWgUQBhgOAqBNQArgBAYgaQAAAng1ARQAFAOADAQQAhACAzgZQgUAug5ANIACARQAtACAugLQgkAjg7gCQhUl0l7GmQgSAIgaAAIgXgBg");
	this.shape_48.setTransform(42.9,0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(56,56,56,0.447)").s().p("ADoA+QhHimh5AlQh4AmiXCNQF7mmBUF0g");
	this.shape_49.setTransform(41.5,1.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgjA9QgTgYgEgjQgDghAOgZQAPgaAYgBQAXgBAUAXQATAZAFAiQADAigPAZQgOAZgZACIgDAAQgVAAgTgXg");
	this.shape_50.setTransform(49.9,2.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#33CCFF").s().p("AgkBfQgcgmgGg1QgFg0AVgnQAUgnAigCQARgBAQAJQgugEgUAsQgSAmALA3QAKA3AdAcQAhAfAogZQgTAagcABIgDAAQggAAgagig");
	this.shape_51.setTransform(48.7,2.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#77DDFF").s().p("AgaBkQgdgcgKg3QgLg3ASgmQAUgsAuAEQAPAJANARQAcAlAFA1QAGA2gUAnIgEAHQgCAEgCACQgSALgRAAQgTAAgTgRg");
	this.shape_52.setTransform(51.2,2.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AjnA1QF7mmBUFzQhBCfi7AKIgbABQikAAgUh3g");
	this.shape_53.setTransform(41.5,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:38.5,y:-11.4}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:-39.8,y:-12.1}},{t:this.shape_1,p:{y:10.6}},{t:this.shape,p:{y:11.9}}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_9,p:{x:39.5,y:-16.4}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_2,p:{x:-40.3,y:-17.6}},{t:this.shape_1,p:{y:10.1}},{t:this.shape,p:{y:11.4}}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:40,y:-16.2}},{t:this.shape_21},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_17},{t:this.shape_16},{t:this.shape_2,p:{x:-40.3,y:-17.6}},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_33,p:{x:39.8,y:-13.2}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_2,p:{x:-40.5,y:-14.6}},{t:this.shape_41},{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-25.9,155.1,53.7);


(lib.m4_dress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGAeQgMgDgLgLQgLgKgDgLQgDgNAHgHQAHgHAOADQANACALALQALAKADAMQADANgHAHQgFAFgJAAIgIgBg");
	this.shape.setTransform(0.5,-40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B18E00").s().p("AhSBGQghgiAAgwQAAgwAhgjIALgJQgSApAQAsQATA0A7AJQA7AEAqgmIALgKQgEApgeAfQgiAjgxAAQgvAAgjgjg");
	this.shape_1.setTransform(-3.5,-32.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AgMBWQg8gJgSg1QgQgrARgpQAfgZApAAQAwAAAiAiQAiAjAAAvIAAAKIgLALQgmAigyAAIgMAAg");
	this.shape_2.setTransform(-1.7,-36.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("APkC2Igqr8QgFijgEjLQgEjKAki+Qk8C4kMD4QgqAmgpAnQgHAHgHAIAPkC2QADAlgDAAQl6AzmAASQgfABggABQiGAFiGABQgFAAgEAAQnUADnxhWIhjNeQFOCoFxA5QCiAXCiAJQGaAjGRhfQEKg9DtiIgAloraQgagYgagYQk7kcmwirQCWF7hSFwIAUK7AE2s/QmFCTlNhe");
	this.shape_3.setTransform(0,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("ABhTjQlwg5lOioIBjteIAFABIAMACIACABIAGABIAFAAIAIACIAFABQHJBLGwAAIABAAIAAAAIAfAAIAJAAIgBAhIgBAEIgSHAIgaInQiigJiigXgAGqD3QmwAAnJhLIgFgBIgIgCIgFAAIgGgBIgCgBIgMgCIgFgBIgUq7QBSlwiWl7QGwCrE6EcIA0AwQCZCTCTC/IAZAhIBLBqIAAADQAJA0gWAgQgSAbglANQgkANg1ABQgDAvgBArQgIDLAXBzIgfAAIAAAAIgBAAg");
	this.shape_4.setTransform(-56.5,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#440000").s().p("AgIDLQiUi/iZiTIgzgvQFMBeGFiTIgOAPQi5C4h8DmIgWAqIgYghg");
	this.shape_5.setTransform(-5.1,-64.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#990000").s().p("AqRU0IAaonIATnAIAAgEIABghIgIAAQgXhzAHjLQABgrADgvQA1gBAkgNQAmgNARgbQAWgggIg0IgBgDIhKhqIAWgqQB9jnC4i4IAPgPIBShNQEMj4E7i4QgjC+AEDKQAEDLAFCjIAqL8IABAaQAAALgCAAQl5Azl/ASIg/ACQiHAFiHABQCHgBCHgFIA/gCQF/gSF5gzQACAAAAgLIgBgaICvN9QjuCIkJA9QklBFksAAQhtAAhugJg");
	this.shape_6.setTransform(51.4,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAIAeQgMgCgMgLQgLgJgEgLQgEgNAHgHQAHgIAOACQANACALAJQAMAKAEAMQADANgGAHQgGAGgLAAIgFAAg");
	this.shape_7.setTransform(42.9,-49);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B18E00").s().p("AhOBJQgjgggCgvQgDgxAgglQAEgGAFgDQgPAqATArQAVAyA7AFQA7AAAogpIAKgLQgBApgdAiQggAkgwAEIgJAAQgqAAghgdg");
	this.shape_8.setTransform(39.4,-40.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AhZAeQgTgqAPgqQAegcApgDQAwgDAjAgQAkAgADAwIAAAKIgKALQgoApg6AAQg8gEgVg0g");
	this.shape_9.setTransform(41,-44.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1,3,true).p("AKeugQgHAHg8BzAKeugQh+A6h6AfQj1A+jgguQkajilYhtQj+hSkLAMQGIGaknDuIgKMfIgCARIhmM1QFTDAFyA5QHjBMGAgsQD5gPDMhPQDMhOC+iFIiAtwQjfDsooAmQqfAXrrjWAQ8CZIAAgGIhZsUQAvmCiOlGQhTDNh8C4QgLASgMASAAGsLQgagXgbgV");
	this.shape_10.setTransform(3.6,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660000").s().p("AhyTcQlxg5lUjAIBns0QKhDAJkAAIAAAAIAAAAQA8AAA7gCIAFAAIABAAIAIAAQAOgiACATQAAABgQAOQASBxACDXIAjJHQiNAQibAAQkKAAkxgwgAI1FvQpkAAqhjAIACgSIAJsfQEnjumImaQELgMD+BSQFXBtEbDiIA2AsQChCHCcC1IAbAfIBQBkIABAEQALAzgUAhIgBABQgQAcgkAPQgjAPg1AFQAAAvABArQADCoAYFdIgIAAIgBAAIgFAAQg7ACg8AAIAAAAIAAAAgAK6FtIAAAAgALIClIABAgIAAAFIAAAVQgDg6ACAAg");
	this.shape_11.setTransform(-35.3,0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#440000").s().p("AAMDZQibi1ihiGIg2gsQDhAuDzg+QB6gfB/g6QgHAHg8BzQg8ByhXB3QhWB4gFgCQgFgBgKAXIgbgfg");
	this.shape_12.setTransform(34.7,-73.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#990000").s().p("AmgL7QgDjXgShxQIngmDfjsQjfDsonAmQARgOAAgBQgCgUgPAjQgXldgDioQgCgrABgvQA0gFAkgPQAkgQAQgbIAAgBQAVghgMgzIAAgEIhQhkQAJgWAGABQAFABBWh4QBWh4A8hyQA8hzAHgHIAXgkQB7i4BTjNQCOFGgvGCIBZMUIAAAGICANwQi+CFjMBOQjLBPj5APgAmlEkIgBgUIABgFIgBggQgCAAADA5g");
	this.shape_13.setTransform(78.3,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-140.4,236.3,270.3);


(lib.m4_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AE1sMQoxEziHJPQgzDSgNCUQgFAtAAAoQgBAxAFAmQAMBtA+ATQAJAEAKABQBhgBBgkZQBdkSBHhzQBEhxBQhqQCJiMCug4");
	this.shape.setTransform(2.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CD8B01").s().p("AD6otIADDiQhRBphEByQhHByhcESQhhEZhgABQB7szF7kog");
	this.shape_1.setTransform(-7.9,22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A97301").s().p("AmUMIQg+gTgMhtQgGgnACgwQAAgoAEguQAOiTAyjSQCIpOIwkzQCQBHAjA5QAjA4gUBOQgTBNgaCHQivA4iICMIgDjiQl7Eoh7MzQgKgBgJgDg");
	this.shape_2.setTransform(5.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AtWKEQgyDSgOCUQgEAtAAAoQgCAxAGAmQAMBtA+ATQAJAEAKABQBQAfAvizQAvizBAjBQA/jCDim/QDim+IYnXQCwiRDEh1QAogZApgYQACgGABgGQAKgugWgoQgjhBh1guQh1guiyBBQizBBkKEtQkJEtiLDZQiLDZheDGQhdDHg/CfQg0CVgZBug");
	this.shape_3.setTransform(-21.7,60.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CD8B01").s().p("AqTSZQAAhGAHhHQAilWCpnCQCqnBFSmkQFUmjDRiJQAEAEADAEQBQB+hBCSQoZHXjgG+QjiG/hADCQg/DBgvCzQgoCZhAAAQgMAAgMgFg");
	this.shape_4.setTransform(-38.3,73.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A97301").s().p("AtMUYQg+gTgMhtQgGgmACgxQAAgoAEgtQAOiUAyjSQAZhuA0iVQA/ifBdjHQBejGCLjZQCLjZEJktQEKksCzhCQCyhBB1AuQB1AuAjBBQAWAogKAuIgDAMIhRAxQjEB1iwCRQBBiShRh+QgCgEgEgEQjSCJlSGjQlUGkipHBQiqHCgiFWQgHBHABBGQgKgBgJgEg");
	this.shape_5.setTransform(-21.7,60.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.9,-79,97.7,158.1);


(lib.m4_armL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AmPsbQBdAzBSA5QHIFABzH0QAzDTANCTQAFAuAAAnQABAxgFAnQgMBtg+ATQgJADgKABQhhgBhgkYQhdkThGhzQhFhxhQhpQgcgcgZgYQhmhehKgZ");
	this.shape.setTransform(-7.8,99.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEBC34").s().p("AlLmjQABihAWihQHIFABzH0QAyDSAOCUQAEAtAAAoQACAxgGAmQgMBtg+ATQgJAEgKABQh7szm6lWg");
	this.shape_1.setTransform(0.6,105.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3A501").s().p("AC8IDQhdkThHhzQhEhxhQhpQgcgcgZgYQhmhehKgZQgbiIAAhYQAAgbADgWQAOh+AaiEQBdAzBSA5QgVChgBCiQG6FVB7MzQhhgBhgkYg");
	this.shape_2.setTransform(-14,99.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AmADFQGAgaDHqTQBBkdBbgZQAHgBAHAAQAEAAADABQBMAJAKCOQAAAXABAcQgEB1gkC5QjOOqqnCc");
	this.shape_3.setTransform(4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEBC34").s().p("AkmE+QF/gZDIqTQBBkdBagZQgcPstbFdg");
	this.shape_4.setTransform(-5,-12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3A501").s().p("AmwMZQg+hpgDiEQNbldAcvtQAIgBAHAAIAGABQBNAJAJCOIABAzQgDB1glC5QjNOqqnCcIgGgHg");
	this.shape_5.setTransform(0.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("AptwvIIsFiQFHDrDtEhQDsEgBfE3QA4DWANCTQAFAuAAAnQABAxgFAnQgMBtg+ATQgJADgKABQhhgBhfkVQhekWhIiDQhIiEhhiBQiVi1jvi/Qjwi+orlt");
	this.shape_6.setTransform(-56.6,72.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEBC34").s().p("AqmtBQD1gQCPgtQFHDrDsEhQDtEhBeE2QA4DWAOCTQAEAuAAAnQACAxgGAmQgMBug+ASQgJAEgKABQiixPxJpxg");
	this.shape_7.setTransform(-34.1,89.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F3A501").s().p("AKYMaQhfkVhIiEQhIiDhhiBQiUi1jvi/Qjwi/orlsQBukeCsARIIsFjQiPAtj1AQQRJJxCiRPQhggBhfkWg");
	this.shape_8.setTransform(-61.5,72.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.1,19.2,86.9,161.3);


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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.8,347.9,0,-20.8,347.9,1208.7).s().p("EgR8A1gUglhgCcgcFgM2UgimgP1AAAgWZQAAjnA7jeQEtx3c+tRQCFg+CJg4UAhWgOAAt+AAAUArdAABAgKAMfQEEBkD3ByQViJ2IJMaQE7HhABIcUAAAAWZginAP1UgcRAM8gl0ACXQofAjo+AAQpOAAougkg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.8,348.3,0,-20.8,348.3,1175.4).s().p("EgR9A1jUglkgCbgcGgM3UgipgP3AAAgWaQAAjoA6jeQEux5dBtRQCFg+CJg5UAhXgN/AuCAAAUArggABAgNAMhQEDBkD4ByQVkJ3IJMbQE8HiAAIcUAAAAWagipAP3UgcSAM8gl4ACZQofAho/AAQpPAAougkg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,348.7,0,-20.9,348.7,1142).s().p("EgR+A1nUglngCbgcJgM4UgiqgP4AAAgWcQAAjoA6jeQEux6dCtTQCGg9CJg5UAhagOBAuFAAAUArjAAAAgPAMgQEEBmD4BxQVmJ4IJMcQE8HiAAIdUAABAWcgisAP4UgcUAM9gl6ACYQohAio/AAQpQAAougkg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,349.1,0,-20.9,349.1,1108.7).s().p("EgSAA1rUglpgCcgcLgM5UgisgP4AAAgWeQgBjpA7jdQEux8dEtTQCGg+CJg5UAhdgOCAuIAAAUArnAAAAgQAMiQEFBkD4BzQVnJ5IKMcQE8HiAAIeUAABAWegiuAP4UgcWAM/gl+ACYQogAipAAAQpQAAowgkg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,349.5,0,-20.9,349.5,1075.4).s().p("EgSBA1vUglsgCcgcMgM6UgiwgP5AAAgWgQAAjoA6jfQEvx8dHtWQCGg8CJg6UAhfgODAuLAAAUArqAAAAgTAMjQEEBkD5ByQVoJ6ILMdQE9HkAAIeUAAAAWggiwAP5UgcZAM/gl/ACZQoiAipAAAQpRAAowgkg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,349.8,0,-20.9,349.8,1042).s().p("EgSDA1zUgltgCdgcPgM6UgiygP7AAAgWhQAAjpA6jeQEvx+dJtWQCGg+CJg5UAhhgOEAuPAAAUArtAAAAgVAMkQEFBlD5ByQVpJ7IMMdQE9HkAAIfUAABAWhgizAP7UgcbANAgmCACYQoiAjpBAAQpRAAoygkg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,350.2,0,-21,350.2,1008.7).s().p("EgSEA12UglwgCcgcRgM8Ugi1gP7AAAgWjQAAjpA7jfQEvx/dLtXQCGg9CKg5UAhjgOFAuSAAAUArwAAAAgYAMkQEEBlD5ByQVsJ7INMfQE9HlAAIfUAAAAWjgi2AP7UgccANCgmFACYQoiAjpCgBQpSABoyglg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,350.6,0,-21,350.6,975.3).s().p("EgSFA16Ugl0gCcgcSgM9Ugi3gP9AAAgWkQAAjpA6jfQEwyBdNtXQCGg+CJg6UAhmgOFAuWgABUAr0AAAAgYAMmQEGBlD5BzQVuJ7INMgQE9HkAAIhUAAAAWkgi4AP9UgceANCgmHACZQokAipCABQpSAAozglg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,351,0,-21,351,942).s().p("EgSGA19Ugl2gCbgcVgM+Ugi6gP+AAAgWmQAAjpA8jgQEvyBdPtaQCHg8CJg6UAhogOHAuZAAAUAr3AAAAgbAMmQEGBlD6ByQVuJ9IOMhQE9HlABIhUgABAWmgi5AP+UgchANDgmKACYQokAjpDAAQpTAAozglg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,351.4,0,-21,351.4,908.7).s().p("EgSHA2CUgl6gCdgcWgM+Ugi8gQAAAAgWnQAAjqA7jfQEwyDdRtaQCHg+CKg5UAhqgOIAucAAAUAr6AAAAgeAMnQEGBmD5ByQVxJ+IOMhQE+HmAAIhUAAAAWngi9AQAUgciANEgmNACZQokAipEAAQpUAAozgkg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,351,0,-21,351,938.7).s().p("EgSGA1+Ugl3gCcgcVgM+Ugi5gP+AAAgWmQAAjpA6jgQEwyCdPtZQCGg9CKg6UAhpgOGAuZAAAUAr2AAAAgdAMlQEFBmD6ByQVvJ9INMhQE/HlgBIhUAABAWmgi7AP+UgchANDgmKACZQokAjpDgBQpUAAoygkg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,350.7,0,-21,350.7,968.7).s().p("EgSFA17Ugl0gCdgcTgM9Ugi4gP8AAAgWlQAAjpA7jfQEvyCdOtXQCGg+CKg5UAhmgOGAuWAAAUAr0AAAAgaAMmQEFBlD6ByQVtJ8INMgQE+HkAAIhUAAAAWlgi4AP8UgcfANDgmIACYQojAjpDAAQpTAAoygkg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-21,350.3,0,-21,350.3,998.7).s().p("EgSEA14UglygCdgcRgM8Ugi1gP8AAAgWjQAAjpA6jfQEvyAdMtWQCGg+CJg5UAhlgOGAuTAAAUArxAABAgYAMkQEFBlD6BzQVrJ7IMMfQE/HkgBIgUAAAAWjgi1AP8UgcdANBgmHACaQoiAhpCABQpSgBoygjg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,350,0,-20.9,350,1028.7).s().p("EgSDA10UglvgCcgcPgM7Ugi0gP8AAAgWhQAAjpA7jeQEvx/dKtWQCGg9CIg6UAhjgOEAuQAAAUArvAAAAgVAMjQEFBmD5ByQVrJ7ILMeQE+HkAAIfUAAAAWhgi0AP8UgcbANBgmEACYQohAipCAAQpSAAoxgkg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,349.6,0,-20.9,349.6,1058.7).s().p("EgSCA1wUgltgCbgcNgM7UgixgP6AAAgWgQAAjpA6jeQEvx+dItVQCFg9CKg5UAhggOEAuNAAAUArrAAAAgUAMjQEFBlD5ByQVpJ6ILMeQE9HjAAIfUAAAAWggixAP6UgcaANAgmBACYQohAjpBAAQpRAAoxglg");

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,349.3,0,-20.9,349.3,1088.7).s().p("EgSBA1tUglqgCcgcMgM5UgivgP5AAAgWfQABjoA6jfQEux8dGtUQCFg9CKg6UAhdgOCAuLAAAUAroAAAAgSAMiQEFBlD5ByQVnJ6ILMcQE9HjAAIeUAAAAWfgivAP5UgcZAM/gl+ACYQohAjpAgBQpQABoxglg");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,349,0,-20.9,349,1118.7).s().p("EgSAA1qUglogCbgcJgM6UgitgP4AAAgWdQAAjpA6jdQEvx8dEtTQCFg9CJg5UAhcgOCAuHAAAUArmAAAAgQAMhQEEBlD4ByQVnJ5IKMcQE8HjAAIdUAAAAWdgitAP4UgcWAM/gl8ACXQogAjpAAAQpQAAowgkg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.9,348.6,0,-20.9,348.6,1148.7).s().p("EgR+A1nUglmgCcgcIgM4UgirgP3AABgWcQgBjoA7jeQEtx5dDtUQCFg8CJg6UAhagOAAuEgABUArjAAAAgNAMhQEEBlD5BxQVlJ5IJMbQE8HiAAIdUAAAAWcgiqAP3UgcVAM+gl5ACYQogAho/ABQpPgBovgjg");

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(204,204,204,0.498)","rgba(255,255,255,0.098)"],[0,1],-20.8,348.3,0,-20.8,348.3,1178.7).s().p("EgR9A1jUgljgCbgcHgM3UgiogP3AAAgWaQAAjoA6jeQEux4dAtSQCFg9CJg5UAhYgOAAuBAAAUArhAAAAgLAMgQEDBkD4ByQVkJ3IJMbQE8HiAAIcUAAAAWagipAP3UgcSAM9gl3ACXQofAio/AAQpOAAovgkg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-756,-345.9,1512.1,691.9);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(0,9,34,0)","#000922","#00021A","#000018"],[0,0.843,0.843,0.898,1],-31,14.7,29.9,-19.5).s().p("Aj3BZQhxgTAAggIAAiPQABAWBwANQBlAMCSAAQCTAABlgMQBwgNABgWIAACPQAAAghxATQhlARiTAAQiSAAhlgRg");
	this.shape.setTransform(36.1,10.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0)","rgba(0,1,11,0)","#00010B","#000612","#000E1D","#001A2E","#002944","#003C5F","#004065","#00395C","#002443","#001430","#000922","rgba(0,9,34,0)","rgba(0,0,0,0)"],[0,0.675,0.675,0.686,0.698,0.706,0.71,0.718,0.718,0.729,0.761,0.8,0.843,0.843,1],-31,14.7,29.9,-19.5).s().p("Aj3BZQhxgTAAggIAAiPQABAWBwANQBlAMCSAAQCTAABlgMQBwgNABgWIAACPQAAAghxATQhlARiTAAQiSAAhlgRg");
	this.shape_1.setTransform(36.1,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,0,0,0)","rgba(0,1,2,0)","#000102","#000609","#000D14","#001825","#00263B","#003856","#003856","#002034","#000915","#000009","#00010B","rgba(0,1,11,0)","rgba(0,0,0,0)"],[0,0.467,0.467,0.494,0.514,0.529,0.541,0.553,0.553,0.584,0.616,0.635,0.675,0.675,1],-31,14.7,29.9,-19.5).s().p("Aj3BZQhxgTAAggIAAiPQABAWBwANQBlAMCSAAQCTAABlgMQBwgNABgWIAACPQAAAghxATQhlARiTAAQiSAAhlgRg");
	this.shape_2.setTransform(36.1,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#000000","#000102","#000509","#000C14","#001625","#00223B","#003257","#004476","#004C84","#000000","#000000","#000000","#000102","rgba(0,1,2,0)","rgba(0,0,0,0)"],[0,0.035,0.051,0.059,0.067,0.075,0.078,0.086,0.086,0.141,0.357,0.392,0.467,0.467,1],-31,14.7,29.9,-19.5).s().p("Aj3BZQhxgTAAggIAAiPQABAWBwANQBlAMCSAAQCTAABlgMQBwgNABgWIAACPQAAAghxATQhlARiTAAQiSAAhlgRg");
	this.shape_3.setTransform(36.1,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0.1,72.2,21.2), null);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-42,92,80);


(lib.db_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#3341A8","#333333","rgba(51,51,51,0)"],[0,0.204,0.906],1,-120.5,0,2.8,-55.9,156.9).s().p("AqBM2QkclVgEnhQgDniEXlVQEYlVFsADQFqACDnFZQDmFZBdHaQBdHckYFVQkYFUmPAAQmNAAkdlUg");

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

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
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABKiiQgYgDgWAJQgHADgGADQgeAQgTAjQgCADgCAEQgHAOgDARQgsgog1ggAC3gjQgGgIgGgIQgxg/gwgwQg5g5g4gjQgJgGgKgGQgGACgHADQgNAFgKAJQgJAHgHAKQgQATgIAXQgHASgCATQgBAJgBAJAC3gjQgBAAgBAAQgXgJgYAEQgIABgIADQgPAFgOAJQgUANgNAUQAAAAgBABQgKAPgFAQQgng5gxgvAEHCQQgQgKgTgEQgGgBgFAAQgWgBgWAIQgTAHgPAMQgHAFgGAHQgJAJgHAMQgchQgqhBAEHCQQAWBSAKBnQgPgHgQgFQgDgBgDAAQgbgHgaADQgGAAgGABQgdAEgYANQgLhVgTg5AEHCQQgdhqgzhJAg6kKQgUgMgWgKQgXgMgagKQgZgKgjgJQglAegwBlQAmAMAfANQArASAlAW");
	this.shape.setTransform(-0.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("ACgC8QgbhQgqhBQgng5gygvQgsgog0ggIABgSQADgTAGgSQA2AoAuAxIgEAHQgHAOgDARQADgRAHgOIAEgHQAxAzAqA7IgBABQgKAPgFAQQAFgQAKgPIABgBIAUAdQAjA4AcA7IgNAMQgJAJgIAMQAIgMAJgJIANgMQAjBNATBRQgdAEgYANQgLhVgUg5gAC+CbIAAAAgABrALIAAAAgAAQhjIAAAAgAiuitQgfgNgmgMQAwhlAlgeQAiAJAaAKQgoAggOArQAkAWAgAZQgGASgDATIgBASQglgWgrgSgAhUi8IAAAAg");
	this.shape_1.setTransform(-5.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADkE5QgbgIgaADIgMACQgThRgjhNQAPgNATgGIABgBIAGgCQAPgEAOAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAQgOAAgPAEIgGACIgBABQgTAGgPANQgbg7gkg4IgUgdQgpg8gxgzQgvgwg1goQAIgXAQgTQAHgKAJgHQgJAHgHAKQgQATgIAXQghgagkgVQAPgrAnggQAaAKAXALIgHAAQgPACgMAKIAoAeQA8AwAyAxQgfAQgTAiQATgiAfgQQA5A4AtA5QgPAGgOAJQgUANgNAUQANgUAUgNQAOgJAPgGIAVAcQAvBDAfBHIAMAfQAdBPAGBOIgGgBgABYgoIAAAAgAgOiZIAAAAg");
	this.shape_2.setTransform(2.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#747474").s().p("AC4EpQgGhOgdhPIgMgfQgfhHgvhDIgVgbQgsg5g6g5Qgygxg8gwQAKgJANgFQAHgDAGgCIATAMQA5AjA5A5IgLgBIAAAAIgBAAQgPAAgPAGIgDABIgBAAIgNAGIANgGIABAAIADgBQAPgGAPAAIABAAIAAAAIALABQAvAwAxA/IAMAQIgCAAIgCgBIAAAAIAAAAQgPgFgOAAIgBAAIAAAAIgNABIAAAAIgCAAIAAAAQgIABgIADQAIgDAIgBIAAAAIACAAIAAAAIANgBIAAAAIABAAQAOAAAPAFIAAAAIAAAAIACABIACAAQAzBJAdBqQgQgKgTgEIgLgBIALABQATAEAQAKQAWBSAKBnQgPgHgQgFgAgFi2IAAAAgAiukLIgogeQAMgKAPgBIAHAAQAWAKAUAMQgGACgHADQgNAFgKAJIAAAAg");
	this.shape_3.setTransform(7.8,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAkiIQAKgUARgRQAGgHAIgGQALgJANgIQAUgNAXgKQAHgDAIgBQgbgZgjgXQhUg2hZgmAAkiIQgcgbgmgYQg1ghgzgYQACgbAJgaQAHgUAMgSQACgEACgDQALgQANgMQg+gbhBgUQgagHgegIAD9A/QAAgCAAgCQABgEABgEQAFggAAgbQAAiChlhcAD9A/QgRgRgUgLQgXgMgagFQgYgEgbADQgEAAgFACQAAgKgBgJQgHhLg/g9AA4DgQADgFACgGQAbhOAOhEQAFgZAAgXAC+EZQgLgMgMgJQgXgSgdgHQgOgEgQgCQgMgCgMgCQgCAAgDgBAC+EZQgCAFgCAGQgTAvgYAxQgLAWgMAXQgLgIgNgGQgDgCgEgCQgygWgygHQAMgbALgaQAKgVAIgVQAPgiALghAC+EZQAshwAThqAiGj0QgNgGgNgGQgSgIgSgHQgjgJgPgC");
	this.shape_4.setTransform(3.3,5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4C4C4C").s().p("ABkGjIgHgEQgxgWgzgHIAYg1QATAEAQAFQApAMAfASQAbg3AUg5QAMAJALAMIgEALQgTAvgXAxIgXAtQgMgIgNgGgACrEEQAYhGAPhKQAJgvABgiIAAgBQACgrgKgkQgThHhPhOIgJgJQhahVhvg2IgHgEQgygYg0gQIgBAMQgFA2ATAxQgjgJgOgCQgPgBgFgqQgGgnAMhEIA4APQBBAUA/AbQgOAMgLAQQALgQAOgMQBYAmBUA2QAjAXAbAZIgPAEQgXAKgUANQAUgNAXgKIAPgEQBlBcAACCQAAAbgFAgIgBAIIgBAEQgRgRgUgLQAUALARARQgTBqgsBwQgLgMgMgJgACrEEIAAAAgAEBA/IAAAAgACjjmIAAAAg");
	this.shape_5.setTransform(2.9,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAuFdQgQgFgUgEIASgpIAKADQARAFAPgIQAWgLASgoIADgGQAag8ANg1QAOg1AAgVIgBgdQAaAEAXANQgCAhgIAvQgPBKgYBGQgXgRgdgIQAdAIAXARQgUA6gbA3QgggTgogMgAClAaQgLhYhHhRIgWgXQg1gzhag4QgYgQgTgBQAHgTAMgTIAEgHIgEAHQgMATgHATQgKAAgJAEQgQAKgCAXIAAAEIgkgOQgTgxAFg3IABgMQA0ARAyAYIAHADQBvA3BaBVIgYARIgOAMIAOgMIAYgRIAJAIQBPBOATBIQAKAkgCArIAAABQgXgNgagEgAClAaIAAAAgABjjDIAAAAg");
	this.shape_6.setTransform(3.5,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#747474").s().p("AAkEoIgJgEQAOgiAMghIAFABIAYAEQAPABAPAEIgDAHQgSAogWALQgKAEgKAAQgGAAgHgBgABwDrIAAAAgABSDmIgYgEIgFgBIAEgLQAchOANhEQAFgZAAgXIgBgTQgHhLg/g9QAKgUARgSIAWAXQBHBSALBXIACAeQAAAUgOA1QgOA1gZA8QgPgEgPgBgABxASIgKACIAKgCIAUgBIAAAAIAAAAQAQAAAOACQgOgCgQAAIAAAAIAAAAIgUABIAAAAgAgii6Qg1ghgygYQABgcAKgZQASAAAYAQQBaA4A1AzQgRASgKAUQgcgbgmgYgAA7itIAAAAgAikj/IABgEQACgYAQgJQAIgFALABQgKAZgBAcIgbgMgAh+koIAAAAg");
	this.shape_7.setTransform(3.6,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.7,-34,61,68.1);


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


(lib.translator_device = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#782400").s().p("AgpG2QgkgRgSgOIgDm9QAbAOAdAHQAsANAsAEIA3HVQhWgEg4gbgAgRgxQgvgMgVgJIgNgGIAAgvIAUAKQA3AYA8ADIAFAvQgigDgZgHgAgykWQgXgFgagLIgBiuQArAQA1AKIAUCuQgggCgigIg");
	this.shape.setTransform(-25.1,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4D00").s().p("AgRALQBlgKApgWIAAG+QggAXgfAKgAgmhAQBogJA5giIAAAwQhDAfhTAFgAh8maQCkgKBTglIgECzQhRAZhwAFg");
	this.shape_1.setTransform(22.9,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFDC03","rgba(255,255,153,0)"],[0,1],0.4,1.3,0,0.4,1.3,33.7).s().p("AiMAVQg6gIAAgNQAAgLA6gJQA6gJBSAAQBSAAA7AJQA6AJAAALQAAANg6AIQg7AJhSAAQhSAAg6gJg");
	this.shape_2.setTransform(0.2,-51.7,1.058,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#001A81").s().p("AgFA+IAAiOQAAAGALAHIAACUQgLgIAAgLg");
	this.shape_3.setTransform(-35.5,-21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#001A81").s().p("AgGhDQAMgGABgIIAACPQAAALgNAJg");
	this.shape_4.setTransform(35.4,-21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_5.setTransform(-18,-54.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_6.setTransform(-28.8,-52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_7.setTransform(-22.7,-49.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_8.setTransform(3.4,-55.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_9.setTransform(-3.3,-47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_10.setTransform(18,-48.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_11.setTransform(28.8,-51.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF9A00").s().p("AgVAAQAAgCAVAAQAWAAAAACQAAADgWAAQgVAAAAgDg");
	this.shape_12.setTransform(22.7,-54);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(0,0,0,0)","rgba(104,21,0,0)","#681500","#651300","#6C1900","#7F2800","#9F4200","#B35200","#B33800"],[0,0.624,0.624,0.725,0.761,0.812,0.871,0.906,1],0,16.7,0,-20.1).s().p("AjxAgQhlgPAAgTQAAgSBlgNQBkgOCNAAQCOAABkAOQBlANAAASQAAAThlAPQhnAQiLAAQiKAAhngQg");
	this.shape_13.setTransform(0,-51.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#D85E00","#D14500","#D44F00","#DC6700","#E27900","#E68400","#E78700","#D14500","#BD3C00","#9D2D00","#852200","#731900","#681500","rgba(104,21,0,0)","rgba(0,0,0,0)"],[0,0.086,0.09,0.11,0.129,0.153,0.176,0.271,0.31,0.384,0.459,0.541,0.624,0.624,1],0,16.7,0,-20.1).s().p("AjxAgQhlgPAAgTQAAgSBlgNQBkgOCNAAQCOAABkAOQBlANAAASQAAAThlAPQhnAQiLAAQiKAAhngQg");
	this.shape_14.setTransform(0,-51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(0,0,0,0)","rgba(0,9,34,0)","#000922","#00021A","#000018"],[0,0.843,0.843,0.898,1],-26.1,14.5,26.2,-14.9).s().p("AjvAhQhogPAAgTQABgUBjgNQBjgOCQAAQCRAABjAOQBjANABAUQAAAThoAPQhnAQiJAAQiIAAhngQgAjxghQhkAOAAASQAAARBhAPQBnAQCNAAQCNAABngQQBhgPAAgRQAAgShjgOQhngNiLAAQiLAAhmANg");
	this.shape_15.setTransform(0,-51.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(0,0,0,0)","rgba(0,1,11,0)","#00010B","#000612","#000E1D","#001A2E","#002944","#003C5F","#004065","#00395C","#002443","#001430","#000922","rgba(0,9,34,0)","rgba(0,0,0,0)"],[0,0.675,0.675,0.686,0.698,0.706,0.71,0.718,0.718,0.729,0.761,0.8,0.843,0.843,1],-26.1,14.5,26.2,-14.9).s().p("AjvAhQhogPAAgTQABgUBjgNQBjgOCQAAQCRAABjAOQBjANABAUQAAAThoAPQhnAQiJAAQiIAAhngQgAjxghQhkAOAAASQAAARBhAPQBnAQCNAAQCNAABngQQBhgPAAgRQAAgShjgOQhngNiLAAQiLAAhmANg");
	this.shape_16.setTransform(0,-51.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(0,0,0,0)","rgba(0,1,2,0)","#000102","#000609","#000D14","#001825","#00263B","#003856","#003856","#002034","#000915","#000009","#00010B","rgba(0,1,11,0)","rgba(0,0,0,0)"],[0,0.467,0.467,0.494,0.514,0.529,0.541,0.553,0.553,0.584,0.616,0.635,0.675,0.675,1],-26.1,14.5,26.2,-14.9).s().p("AjvAhQhogPAAgTQABgUBjgNQBjgOCQAAQCRAABjAOQBjANABAUQAAAThoAPQhnAQiJAAQiIAAhngQgAjxghQhkAOAAASQAAARBhAPQBnAQCNAAQCNAABngQQBhgPAAgRQAAgShjgOQhngNiLAAQiLAAhmANg");
	this.shape_17.setTransform(0,-51.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#000000","#000102","#000509","#000C14","#001625","#00223B","#003257","#004476","#004C84","#000000","#000000","#000000","#000102","rgba(0,1,2,0)","rgba(0,0,0,0)"],[0,0.035,0.051,0.059,0.067,0.075,0.078,0.086,0.086,0.141,0.357,0.392,0.467,0.467,1],-26.1,14.5,26.2,-14.9).s().p("AjvAhQhogPAAgTQABgUBjgNQBjgOCQAAQCRAABjAOQBjANABAUQAAAThoAPQhnAQiJAAQiIAAhngQgAjxghQhkAOAAASQAAARBhAPQBnAQCNAAQCNAABngQQBhgPAAgRQAAgShjgOQhngNiLAAQiLAAhmANg");
	this.shape_18.setTransform(0,-51.5);

	this.instance = new lib.Path_2();
	this.instance.parent = this;
	this.instance.setTransform(0,-19.4,1,1,0,0,0,36.1,10.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E68400").s().p("AjxAgQhlgPAAgTQAAgSBlgNQBkgOCNAAQCOAABkAOQBlANAAASQAAAThlAPQhnAQiLAAQiKAAhngQg");
	this.shape_19.setTransform(0,-51.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E68400").s().p("AjyAhQhlgQAAgSQAAgUBlgNQBkgNCOAAQCPAABlANQBkANAAAUQAAAShkAQQhpAQiLAAQiKAAhogQg");
	this.shape_20.setTransform(0,-51.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E68400").s().p("Aj0AhQhlgQAAgTQAAgTBlgOQBmgNCOAAQCQAABlANQBlAOAAATQAAAThlAQQhpAQiMAAQiLAAhpgQg");
	this.shape_21.setTransform(0,-51.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E68400").s().p("Aj1AhQhmgRAAgSQAAgTBmgOQBmgNCPAAQCQAABmANQBmAOAAATQAAAShmARQhqAQiMAAQiLAAhqgQg");
	this.shape_22.setTransform(0,-50.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E68400").s().p("Aj2AhQhmgQAAgTQAAgUBmgNQBmgOCQAAQCRAABmAOQBmANAAAUQAAAThmAQQhqARiNAAQiLAAhrgRg");
	this.shape_23.setTransform(0,-50.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E68400").s().p("Aj3AhQhngQAAgTQAAgUBngNQBngOCQAAQCRAABnAOQBnANAAAUQAAAThnAQQhrARiNAAQiMAAhrgRg");
	this.shape_24.setTransform(0,-50.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E68400").s().p("Aj4AhQhogRAAgTQAAgTBogOQBngOCRAAQCSAABnAOQBnAOABATQgBAThnARQhsASiNAAQiNAAhrgSg");
	this.shape_25.setTransform(0,-50.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E68400").s().p("Aj5AhQhogQAAgUQAAgTBogOQBngOCSAAQCTAABoAOQBnAOAAATQAAAUhnAQQhtASiOAAQiNAAhsgSg");
	this.shape_26.setTransform(0,-50.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E68400").s().p("Aj6AhQhpgRAAgUQAAgTBpgOQBogOCSABQCUgBBoAOQBoAOAAATQAAAUhoARQhtATiPgBQiNABhtgTg");
	this.shape_27.setTransform(0,-50);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E68400").s().p("Aj8AhQhogRAAgTQAAgUBogOQBpgOCTAAQCUAABpAOQBoAOAAAUQAAAThoARQhuATiPAAQiOAAhugTg");
	this.shape_28.setTransform(0,-49.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E68400").s().p("Aj9AiQhpgSAAgTQAAgUBpgPQBpgNCUAAQCUAABqANQBpAPAAAUQAAAThpASQhvASiPAAQiOAAhvgSg");
	this.shape_29.setTransform(0,-49.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E68400").s().p("Aj+AiQhqgSAAgUQAAgUBqgOQBqgOCUAAQCWAABpAOQBqAOAAAUQAAAUhqASQhvATiQAAQiPAAhvgTg");
	this.shape_30.setTransform(0,-49.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#000079","#00C9FF","#000079","#009FFF","#00489F"],[0,0.145,0.757,0.894,1],-36,0,36.1,0).s().p("Aj3BYQhxgSAAgfIAAiPQABAaBwAPQBlAOCSAAQCTAABlgOQBwgPABgaIAACPQAAAfhxASQhlARiTAAQiSAAhlgRg");
	this.shape_31.setTransform(0,-19.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["rgba(0,0,0,0)","rgba(0,155,202,0)","#009BCA","#0063AD","#00218A","#000079","#00489F"],[0,0.663,0.663,0.733,0.808,0.843,1],-36,0,36.1,0).s().p("Aj3BWQhxgQAAgaIAAiOQABAYBwAPQBlANCSAAQCSAABmgOQBwgOABgYIAACOQAAAahxAQQhlANiTAAQiSAAhlgNg");
	this.shape_32.setTransform(0,-20.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#000079","#000C7F","#004BA0","#0082BD","#00AFD5","#00D2E7","#00EBF4","#00FAFC","#00FFFF","#00F8FB","#00E5F1","#00C6E1","#009BCA","rgba(0,155,202,0)","rgba(0,0,0,0)"],[0,0.012,0.086,0.157,0.224,0.29,0.353,0.408,0.455,0.49,0.537,0.596,0.663,0.663,1],-36,0,36.1,0).s().p("Aj3BWQhxgQAAgaIAAiOQABAYBwAPQBlANCSAAQCSAABmgOQBwgOABgYIAACOQAAAahxAQQhlANiTAAQiSAAhlgNg");
	this.shape_33.setTransform(0,-20.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["rgba(0,0,0,0)","rgba(0,155,202,0)","#009BCA","#0063AD","#00218A","#000079","#00489F"],[0,0.663,0.663,0.733,0.808,0.843,1],-36,0,36.1,0).s().p("Aj3BZQhxgTAAghIAAiOQABAVBwANQBlAMCSAAQCTAABlgMQBwgNABgVIAACOQAAAhhxATQhlARiTAAQiSAAhlgRg");
	this.shape_34.setTransform(0,-19);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#000079","#000C7F","#004BA0","#0082BD","#00AFD5","#00D2E7","#00EBF4","#00FAFC","#00FFFF","#00F8FB","#00E5F1","#00C6E1","#009BCA","rgba(0,155,202,0)","rgba(0,0,0,0)"],[0,0.012,0.086,0.157,0.224,0.29,0.353,0.408,0.455,0.49,0.537,0.596,0.663,0.663,1],-36,0,36.1,0).s().p("Aj3BZQhxgTAAghIAAiOQABAVBwANQBlAMCSAAQCTAABlgMQBwgNABgVIAACOQAAAhhxATQhlARiTAAQiSAAhlgRg");
	this.shape_35.setTransform(0,-19);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AD3400").s().p("Aj2DuQhxgSAAgeIAAmaQAAgPBxgKQBlgICRAAQCSAABlAIQBxAKAAAPIAAGaQAAAehxASQhlAQiSAAQiRAAhlgQg");
	this.shape_36.setTransform(0,-27.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#C5661F","#CD7B1D","#742D19","#692819","rgba(105,40,25,0)","rgba(0,0,0,0)"],[0,0.125,0.525,0.616,0.616,1],-35.9,0,36,0).s().p("Aj2DuQhxgSAAgeIAAmaQAAgPBxgKQBlgICRAAQCSAABlAIQBxAKAAAPIAAGaQAAAehxASQhlAQiSAAQiRAAhlgQg");
	this.shape_37.setTransform(0,-27.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AD3400").s().p("Aj3D6QhxgcAAgwIAAnAQABAbBwARQBlAPCSAAQCTAABlgPQBwgRABgbIAAHAQAAAwhxAcQhlAZiTAAQiSAAhlgZg");
	this.shape_38.setTransform(0,21.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFpDDQAAAwhxAcQhlAZiTAAQiSAAhlgZQhxgcAAgwIAAnWIAKgUQAAAZBuAOQBjAOCNAAQCPAABigOQBugOAAgZIAKAUg");
	this.shape_39.setTransform(0,21.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#330000").s().p("Aj3EPQhxgcAAgxIAAnVIAKgUQAAAZBuAOQBjAOCNAAQCPAABigOQBugOAAgZIAKAUIAAHVQAAAxhxAcQhlAZiTAAQiSAAhlgZg");
	this.shape_40.setTransform(0,21.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["rgba(0,0,0,0)","rgba(159,35,0,0)","#9F2300","#7F1D00","#671900","#551600","#4A1400","#471300","#4E1500","#611A00","#812300","#A02C00","#9E2B00","rgba(158,43,0,0)","rgba(0,0,0,0)"],[0,0.463,0.463,0.502,0.541,0.584,0.627,0.678,0.71,0.753,0.804,0.847,0.922,0.922,1],-36,0,36.1,0).s().p("Aj3EPQhxgcAAgxIAAnVIAKgUQAAAZBuAOQBjAOCNAAQCPAABigOQBugOAAgZIAKAUIAAHVQAAAxhxAcQhlAZiTAAQiSAAhlgZg");
	this.shape_41.setTransform(0,21.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#651300","#6C1600","#7F1F00","#9F2E00","#CB4200","#D14500","#DD5A00","#EC7200","#F78400","#FD8F00","#FF9200","#A42400","#9F2300","rgba(159,35,0,0)","rgba(0,0,0,0)"],[0,0.012,0.027,0.047,0.067,0.071,0.086,0.114,0.141,0.169,0.204,0.459,0.463,0.463,1],-36,0,36.1,0).s().p("Aj3EPQhxgcAAgxIAAnVIAKgUQAAAZBuAOQBjAOCNAAQCPAABigOQBugOAAgZIAKAUIAAHVQAAAxhxAcQhlAZiTAAQiSAAhlgZg");
	this.shape_42.setTransform(0,21.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#08112D").s().p("AjyBIQhlgeAAgqQAAgpBlgeQBkgeCOAAQCPAABlAeQBkAeAAApQAAAqhkAeQhlAeiPAAQiNAAhlgeg");
	this.shape_43.setTransform(0.1,43.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AjpBaQhhglAAg1QAAg0BhglQBhglCIAAQCJAABhAlQBhAlAAA0QAAA1hhAlQhhAliJAAQiIAAhhglg");
	this.shape_44.setTransform(0.1,43.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.instance},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,-56.3,74.2,112.7);


(lib.T_features_F = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_mouth
	this.instance = new lib.T_mouth("single",1);
	this.instance.parent = this;
	this.instance.setTransform(15.5,19.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1));

	// T_nose
	this.instance_1 = new lib.T_nose("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-16.1,2.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1));

	// T_eye
	this.instance_2 = new lib.T_eye("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(21.6,-22.6);

	this.instance_3 = new lib.T_eye("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-27.6,-26.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-31.5,91.3,61.5);


(lib.T_features_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_mouth
	this.instance = new lib.T_mouth("single",0);
	this.instance.parent = this;
	this.instance.setTransform(17.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:15.5,y:19.5,startPosition:1},0).to({_off:true},1).wait(1).to({_off:false,x:28.3,y:20.2},0).wait(1));

	// T_nose
	this.instance_1 = new lib.T_nose_2("single",0);
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
	this.shape_11.graphics.f("#424242").s().p("Aj3jyQgChMAMhLICcDTIFBBXIAFADIAEACIgJgFIAAAAIAAAAIAIAjQingeicg0QADAeAbDGQAGAtA8DcIhQArQiMm0gwjIgAiQglQABAGABgJg");
	this.shape_11.setTransform(0.4,-54);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ai0DIQhnkUhliCQgBi+Aei8QA8gjBPgLQA6gJBGAFQDEDQBaC0QBCCCArBuQARApANAoQAEAMAEANQAoB+AABlQABBwheBrQheBriVgTQgxgHgzhrQgehBg/ieQgKgbgLgdQgHgUgIgVg");
	this.shape_12.setTransform(-6.6,-69.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#424242").s().p("AjiDQIgVg4IBRgBQB0hEgvhWQhChyhjheIHnB0QARAqANAoIAIAYIlHhYQAsAfATAtQApCnjLAug");
	this.shape_13.setTransform(1.6,-60.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AiNGNQhnkUhliBQgBi+Aei9QA8gjBPgLQA6gIBGAFQDEDPBaC1QBCCBArBuInnh0QBjBeBBBxQAwBYhzBEIhRABIgQgqg");
	this.shape_14.setTransform(-10.5,-89.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#585858").s().p("AhGE2QgygHgzhrQgehBg/idIA/AEQDLgugpioQgTgtgsgfIFHBZQAoB+AABkQABBwheBrQhPBbh2AAQgWAAgXgDg");
	this.shape_15.setTransform(5.4,-37.1);

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
	this.shape_20.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhCKGQi4mUhxnJQgBi+Aei9QA9gjBOgLQA6gIBGAFQBUA1A7BGQBbCCAxBjQAaA2AxCkQATA/AWBeIAAABQAEAQAEASQAMBCAMBC");
	this.shape_20.setTransform(-8.8,-72.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AlbjXQgBi+Aei9QA9gjBOgLQA6gIBGAFQBUA1A7BGQBbCCAxBjQAaA2AxCkQATA/AWBeIlChWIibjSQgMBLACBMQAwDGCLG1IhiBIQi4mUhxnJg");
	this.shape_21.setTransform(-10.4,-72.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#424242").s().p("Aj3jyQgChMAMhLICcDTIFBBXIAAAAIAAAAIAFADIAEACIgJgFIAIAjQingeicg0QADAeAbDGQAGAtA8DcIhQArQiMm0gwjIgAiQglQABAGABgJg");
	this.shape_22.setTransform(0.4,-54);

	this.instance_1 = new lib.repellent("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.8,-64.9,0.5,0.5,6.1,0,0,59,206.9);

	this.instance_2 = new lib.T_hand_L("single",8);
	this.instance_2.parent = this;
	this.instance_2.setTransform(72.8,-88,1,1,-135.9,0,0,0,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlJAZQAigzAmgpQAmgpBphqQBohqBmhnQBnhnAYgVQAmBNAeAqQAdArAvAVQAPAGA1ATQAKAEAKACQABAAABABQi8HCjyExQgIAKgHAKQh6Cxizh6Qg2glgugvQgdgfgego");
	this.shape_23.setTransform(29.3,-42.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#585858").s().p("AlZDCQAigzAmgqQAmgoBohpIDPjRQBnhnAYgVQAmBMAdAqQAeArAuAVQhDDHiOCpQiOCohqAmQiQgQhaipg");
	this.shape_24.setTransform(30.9,-59.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#424242").s().p("AjNF6Qhdgbh4jXIA6h/QBaCqCQAPQBqglCOioQCOipBDjHIBEAYIAUAHQjkGXkREvQgIAShAAAQgWAAgdgCg");
	this.shape_25.setTransform(32.4,-40.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AklGHQg2glgvgvQgcgfgegoIBBi/QB4DXBdAbQBwAJALgZQESkuDjmZIADABQi8HCjyExIgPAUQhIBphcAAQhAAAhJgyg");
	this.shape_26.setTransform(29.3,-31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:0,rotation:0,x:17.6,y:74,startPosition:0,regX:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance,p:{regY:0.2,rotation:-116,x:102.5,y:-68.3,startPosition:1,regX:0,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance,p:{regY:0.3,rotation:106,x:-86.2,y:-45.7,startPosition:4,regX:-0.1,scaleX:1.05,scaleY:1.05}}]},1).to({state:[]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_9},{t:this.shape_20}]},3).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_2},{t:this.instance_1},{t:this.instance,p:{regY:0.3,rotation:-135.9,x:72.8,y:-88,startPosition:9,regX:0,scaleX:1,scaleY:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-137.7,92.4,275.4);


(lib.monster4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// m4_armR
	this.instance = new lib.m4_armR("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-82.7,44.6,1,1,-112.5,0,0,53.9,-77.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({x:-92.3,y:51.8},0).to({_off:true},1).wait(1).to({_off:false,x:-82.7,y:44.6},0).wait(68));

	// device
	this.instance_1 = new lib.translator_device("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(213,91.9,2,2,4.2,0,0,0.4,0.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({x:203.4,y:99.1},0).to({_off:true},1).wait(1).to({_off:false,x:213,y:91.9},0).wait(68));

	// m4_dress
	this.instance_2 = new lib.m4_dress("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(35.5,158.9,1,1,0,0,0,-2.1,24.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:37.6,y:154.7},0).wait(1).to({startPosition:1},0).wait(1).to({x:43.1,y:164.8},0).wait(1).to({rotation:-2.2,x:49,y:158.8},0).wait(1).to({x:41.8,y:161.2},0).wait(1).to({rotation:0,x:37.6,y:154.7},0).wait(1).to({rotation:-2.2,x:49,y:158.8},0).wait(68));

	// m4_mouth
	this.instance_3 = new lib.m4_mouth("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(29.2,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-1.2,x:27.5,y:4.2,startPosition:1},0).wait(1).to({rotation:-4.9,x:65.4,y:1.1,startPosition:2},0).wait(1).to({regY:0.1,rotation:-4.6,x:69.3,y:3.1,startPosition:3},0).wait(1).to({regY:0.2,rotation:-6.9,x:68.5,y:-3.7,startPosition:2},0).wait(1).to({regX:0.1,rotation:-5.6,x:62.5,y:3.9,startPosition:3},0).wait(1).to({regX:0,regY:0,rotation:-4.9,x:65.4,y:1.1,startPosition:2},0).wait(1).to({regY:0.2,rotation:-6.9,x:68.5,y:-3.7},0).wait(68));

	// m4_hat
	this.instance_4 = new lib.m4_hat("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(23.5,-206.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-1.2,x:16.8,y:-226},0).wait(1).to({regY:-0.1,rotation:-7.7,x:-3.1,y:-225.7},0).wait(1).to({regX:0.1,rotation:-7.4,x:2.1,y:-224},0).wait(1).to({rotation:-9.6,x:-7.4,y:-228.1},0).wait(1).to({regX:0,rotation:-8.4,x:-8.8,y:-222},0).wait(1).to({rotation:-7.7,x:-3.1,y:-225.7},0).wait(1).to({regX:0.1,rotation:-9.6,x:-7.4,y:-228.1},0).wait(68));

	// m4_hair
	this.instance_5 = new lib.m4_hair("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(39,-84.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.1,regY:-0.1,rotation:-1.2,x:35,y:-106.8},0).wait(1).to({rotation:-4.9,x:32.2,y:-107.8},0).wait(1).to({regY:-0.3,rotation:-4.6,x:36.7,y:-106.1},0).wait(1).to({regX:0.2,rotation:-6.9,x:31.7,y:-111.6},0).wait(1).to({regX:0.3,regY:-0.4,rotation:-5.6,x:27.9,y:-104.8},0).wait(1).to({regX:0.1,regY:-0.1,rotation:-4.9,x:32.2,y:-107.8},0).wait(1).to({regX:0.2,regY:-0.3,rotation:-6.9,x:31.7,y:-111.6},0).wait(68));

	// m4_eye
	this.instance_6 = new lib.m4_eye("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(28.2,-32.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0.1,regY:-0.1,rotation:-1.2,x:25.3,y:-53.8,startPosition:1},0).wait(1).to({rotation:-4.9,x:56.4,y:-56.3,startPosition:2},0).wait(1).to({regY:-0.2,rotation:-4.6,x:60.7,y:-54.4,startPosition:3},0).wait(1).to({rotation:-6.9,x:57.6,y:-60.9,startPosition:2},0).wait(1).to({rotation:-5.6,x:52.7,y:-53.4,startPosition:3},0).wait(1).to({regY:-0.1,rotation:-4.9,x:56.4,y:-56.3,startPosition:2},0).wait(1).to({regY:-0.2,rotation:-6.9,x:57.6,y:-60.9},0).wait(68));

	// m4_armR
	this.instance_7 = new lib.m4_armR("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-70.4,16.7,1,1,-6.7,0,0,31.1,-75.9);

	this.instance_8 = new lib.m4_armL("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(163.8,80.1,1,1,-53.9,0,0,-51.4,60.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8,p:{x:163.8,y:80.1}}]},1).to({state:[{t:this.instance_8,p:{x:154.2,y:87.3}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8,p:{x:163.8,y:80.1}}]},1).wait(68));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0,regY:0,rotation:0,x:-99.4,y:88.5},0).wait(1).to({regX:53.9,regY:-77.4,x:-42.6,y:8.2},0).wait(1).to({rotation:-3.5,x:-38.4,y:17.7},0).to({_off:true},1).wait(2).to({_off:false,rotation:0,skewX:162.8,skewY:-17.2,x:-42.6,y:56.4},0).to({_off:true},1).wait(68));

	// m4_head
	this.instance_9 = new lib.m4_head("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(33.9,8.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:-1.2,x:31.8,y:-13.1},0).wait(1).to({regX:0.1,regY:0.1,rotation:-4.9,x:35.1,y:-14},0).wait(1).to({regY:-0.1,rotation:-4.6,x:39.1,y:-12.3},0).wait(1).to({rotation:-6.9,x:37.7,y:-18},0).wait(1).to({regX:0.2,rotation:-5.6,x:31.9,y:-11},0).wait(1).to({regX:0.1,regY:0.1,rotation:-4.9,x:35.1,y:-14},0).wait(1).to({regY:-0.1,rotation:-6.9,x:37.7,y:-18},0).wait(68));

	// m4_armL
	this.instance_10 = new lib.m4_armL("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(120.2,45.2,1,1,5.9,0,0,-51.5,60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:60.7,rotation:0,x:116.5,y:41.1,startPosition:1},0).wait(1).to({x:110,y:42.2},0).wait(1).to({y:36.9,startPosition:0},0).wait(1).to({regX:-51.4,regY:60.6,rotation:-2.2,x:111,y:39.9},0).wait(1).to({x:103.8,y:42.3},0).wait(1).to({regX:-51.5,regY:60.7,rotation:0,x:110,y:42.2,startPosition:1},0).wait(1).to({regX:-51.4,regY:60.6,rotation:-2.2,x:111,y:39.9,startPosition:0},0).wait(68));

	// m4_legL
	this.instance_11 = new lib.m4_legL("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(97.7,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).wait(1).to({x:94.2,y:252},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:1,skewX:3.7,x:99},0).wait(1).to({regX:0.1,scaleY:1,skewX:0.6,x:95.1},0).wait(1).to({regX:0,skewX:0,x:94.2},0).wait(1).to({scaleY:1,skewX:3.7,x:99},0).wait(68));

	// m4_legR
	this.instance_12 = new lib.m4_legR("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-13.8,262.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).wait(1).to({x:-0.9},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:1,skewX:3.7,x:3.3},0).wait(1).to({regX:-0.1,scaleY:1,skewX:0.6,x:-0.2},0).wait(1).to({regX:0,skewX:0,x:-0.9},0).wait(1).to({scaleY:1,skewX:3.7,x:3.3},0).wait(68));

	// shadow
	this.instance_13 = new lib.shadow("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(26.8,329.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.1,-376.3,537.9,750.9);


(lib.ipf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.badge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,15.7,0.421,0.421,0,0,0,-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-143.4,343.9,305.2);


(lib.handClose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.m4_armR("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-552.1,-123.9,4.222,3.23,-112.5,0,0,53.8,-77.5);

	this.instance_1 = new lib.repellent("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(294,276.7,2.445,2.445,13.2,0,0,58.9,207.1);

	this.instance_2 = new lib.m4_armL("single",2);
	this.instance_2.parent = this;
	this.instance_2.setTransform(169,-8.9,3.282,2.696,-8.3,0,0,-51.4,60.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-528.1,-233.9,1073.8,522.7);


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

	// item1
	this.instance = new lib.repellentgfx("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(385,-77,0.433,0.433,0,0,180,0.1,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,skewX:6.5,skewY:186.5,x:376,y:-6.5},26,cjs.Ease.cubicOut).to({regX:0.2,scaleX:0.28,scaleY:0.28,skewX:0,skewY:180,x:-3.9,y:-164.9},23,cjs.Ease.cubicIn).wait(1).to({skewY:0,x:-2.9,y:-165.4},0).wait(5));

	// inv_box
	this.instance_1 = new lib.inv_box("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-110.4,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(56));

	// inv_box
	this.instance_2 = new lib.inv_box("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-110.4,172.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(56));

	// inv_box
	this.instance_3 = new lib.inv_box("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-110.4,87.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(56));

	// inv_box
	this.instance_4 = new lib.inv_box("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-110.4,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(56));

	// inv_box
	this.instance_5 = new lib.inv_box("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-110.4,-83.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(56));

	// inv_box
	this.instance_6 = new lib.inv_box("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-110.4,-168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:-0.4},19,cjs.Ease.get(0.5)).wait(50).to({startPosition:1},0).wait(6));

	// inv_box_bg
	this.instance_7 = new lib.inv_box_bg("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-109,0,1,1,0,0,0,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:1},19,cjs.Ease.get(0.5)).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166,-220,113,522);


(lib.dialogue7 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm7();
	this.instance.parent = this;
	this.instance.setTransform(-92.1,-20.5);

	this.instance_1 = new lib.tEn7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.4,-25.2,1,1,0,0,0,4.7,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(18.4,-101.8,175.9,80.4);


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
	this.instance.setTransform(-80.1,-20.5);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.2,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-372.1,-74,544.3,122.1);


(lib.db_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.db_feature("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-4.1,0);
	this.instance.alpha = 0.898;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-10.2,-14.8,0,-10.2,-14.8,99.5).s().p("AolEoQATmrCqkLQIPgYF/CCQhFCAg5C8IgKAhQgfBsgwDug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:0}}]}).to({state:[]},1).to({state:[{t:this.shape},{t:this.instance,p:{startPosition:1}}]},1).to({state:[]},1).wait(2));

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


(lib.tapirhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AiZgMQCBgyBEg0QACgCADgCQATgOAVgKQAUgLAOAIQAOAHAIARQAIASAAAOQAAAHAAAIQgDA5gaBHQgbBHg2ALQgzALgwACQgBAAgBAAQgCAAgUABABNg2QhRBAhSAU");
	this.shape.setTransform(73.7,-43.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#545E73").s().p("AhsA1QgHgMgIgLQAUgLAQgMIAcgUQALgIAWgZQAVgaAFgLIAPgfIAFgEQATgOAVgKQAUgLAOAIQAOAHAIARQAHASABAOIAAAPQgDA5gaBHQgbBHg2ALQgzALgwACIgCAAIgWABQAJg1gIgsgAhzAeQBSgUBRhAQhRBAhSAUg");
	this.shape_1.setTransform(76.6,-43.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A89A7").s().p("AhiAdIAAAAQCAgxBFg0IgPAfQgGAMgVAZQgWAYgLAIIgbAVQgQAMgUALIg7grg");
	this.shape_2.setTransform(68.2,-47.6);

	this.instance = new lib.T_features_2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(11.2,-10);

	this.instance_1 = new lib.T_features_F("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(31.3,-6.5,1,1,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{startPosition:0}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.instance,p:{startPosition:1}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},2).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFfp5QA5AxAeBFQAdBCAHBHQAEAkACAkQAEBKAGB0QAMEaDOClQh+E9lTA6QgVAEgVAFQmrgNlxi4Qgzhsg9hqQCFjkA2itQAKggAKggQAehlAehsQAVg/Afg5QAgg8Arg3QAqg4BAgcQAJgEALgEQAPgFASgEQA5gLBLAFQAWABAUACQAoADAlAEQAHAAAHABQAeADAbAEQBEAJA/AYQAbAKAZAS");
	this.shape_3.setTransform(25.5,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A89A7").s().p("AlXIGQgzhsg9hqQCFjkA2itQACALAFALQAPAeAdAWQAMAKArAZQAkAWBXAmQBWAlA9gvQAvg9AwhOQAwhOBEhAQASgSAOACQAQAAAUAZQA1BNAMB3QAIBNgKCKQgKCWgIBTQgEAiAZD3QmsgNlwi4gAi8lyQAVg/Afg5QAgg8Arg3QAqg4A/gcIAUgIQAPgFASgEQA5gLBLAFIArADIBNAHQgaABgmAgQglAfgjA8QgkA7heBXQhdBXhUCXQAOAJgbgCQgtgEgOAAQghABgaANQgOAHgJAJIA8jRg");
	this.shape_4.setTransform(0.3,17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#545E73").s().p("ABXGsQAHhTALiWQAKiJgIhOQgMh2g1hOQgUgZgQAAQgNgCgTATQhDA/gwBOQgwBPgvA9Qg9AuhYglQhWglgkgXQgrgZgMgKQgegWgOgeQgFgLgCgLIAUhAQAJgJAOgHQAagNAgAAQAPgBAtAEQAbACgPgJQBUiXBfhWQBehXAjg8QAjg8AmgfQAmggAZgBIANABIA6AIQBEAIA+AYQAcALAZARIAAAAQA5AyAeBFQAcBCAIBHIAFBIIAKC9QANEaDNCmQh+E8lSA6IgrAJQgYj3AEgig");
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

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#545E73").s().p("AgiGsQAIhTAKiWQAKiJgIhOQgCgVgDgVQg8BShlBdQirgHhdgVQh0iQCii6QChi5AThsQAUhsAbgeQAcgfAagBIAOABIA5AIQBDAIA/AYQAbALAZARIAAAAQA6AyAdBFQAdBCAHBHIAGBIIAKC9QAMEaDOCmQh+E8lTA6IgpAJQgZj3AEgig");
	this.shape_9.setTransform(47,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7A89A7").s().p("AlXIGQgzhsg9hqQCFjkA2itIAUhAIA8jRQAVg/Afg5QAgg8Arg3QAqg4A/gcIAUgIQAPgFASgEQA5gLBLAFIArADIBNAHQgaABgcAfQgbAegUBsQgTBrihC6QihC5BzCRQBdAVCrAHQBlhdA8hSQADAUACAWQAIBNgKCKQgKCWgIBTQgEAiAZD3QmsgNlwi4g");
	this.shape_10.setTransform(0.3,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("Aieg2QCJgVBOgkQABgBADgCQAWgJAXgGQAWgGAMAKQAMAKAEATQAEASgDAPQgBAHgCAIQgPA1gpBBQgqBAg3gBQg0gBgwgIQgBgBgBABQgBgBgUgDABLguQhdAuhUAB");
	this.shape_11.setTransform(74.5,-37.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7A89A7").s().p("AhrABIAAAAQCIgUBPgkIgWAbQgHAKgbATQgbAUgNAFIgfAOQgSAJgWAHIgwg3g");
	this.shape_12.setTransform(69.4,-43.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#545E73").s().p("AgQCFQg1gBgwgIIgCAAIgVgEQAUgzABgsQgDgNgGgMQAWgGASgJIAggOQANgFAbgUQAZgUAIgKIAWgbIAEgDQAWgJAXgGQAWgGAMAKQAMAKAEATQAEASgDAPIgDAPQgPA1gpBBQgpA/g1AAIgCAAgAh4ABQBUgBBdguQhdAuhUABg");
	this.shape_13.setTransform(76.3,-37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_10},{t:this.shape_9},{t:this.shape_3}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-61.7,143.6,151.8);


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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:1.6,regY:0.1,scaleX:0.096,rotation:-6,skewX:0,skewY:0,x:61,y:-48.6}}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_15},{t:this.shape_14},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:2.5,regY:-0.6,scaleX:0.097,rotation:0,skewX:-9,skewY:179.4,x:-19,y:-48.7}}]},1).to({state:[]},1).wait(1));

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

	// Layer_12
	this.instance = new lib.db_atL("single",0);
	this.instance.parent = this;
	this.instance.setTransform(63.7,-111.2);

	this.instance_1 = new lib.db_headlight("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(10.4,-146.4);

	this.instance_2 = new lib.DB_glass("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(2.4,-99.2);
	this.instance_2.alpha = 0.34;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(6));

	// Layer 5
	this.instance_3 = new lib.db_headf("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-3.4,-82);

	this.instance_4 = new lib.db_mon("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-5.1,-89.7);

	this.instance_5 = new lib.db_face("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-7.1,-89.7);

	this.instance_6 = new lib.db_atR("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-52.3,-110.1);

	this.instance_7 = new lib.db_neck("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-16.2,-43);

	this.instance_8 = new lib.db_handL("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(72.5,38.7,1,1,0,0,0,0,-18.5);

	this.instance_9 = new lib.db_armL("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(53.5,10.7);

	this.instance_10 = new lib.db_body("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-11.4,4.4);

	this.instance_11 = new lib.db_j("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-5.8,64.4);

	this.instance_12 = new lib.db_b("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-2.6,107.4);

	this.instance_13 = new lib.db_handR("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-103.4,23.7,1,1,0,0,0,-0.1,-19);

	this.instance_14 = new lib.db_armR("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-64.4,-30.5,1,1,0,0,0,22.9,-29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},1).wait(6));

	// Layer 2
	this.instance_15 = new lib.db_shadow("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.7,207.3);
	this.instance_15.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},1).wait(6));

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


(lib.tEn8 = function(mode,startPosition,loop) {
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

	// Layer_5
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(77.6,36.6,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_6
	this.myTxt = new cjs.Text("Things are getting more\n exciting. Let’s go!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 279;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-72.8,-19);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2JiOMAjEAAAIIZEFIkJkFICZAA");
	this.shape.setTransform(-64.4,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AU3F+IgBr2MgpsAAAIAAL2");
	this.shape_1.setTransform(-72.7,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("ANWD4MgjEAAAIAAr1MApsAAAIACL1IiZAAIEIEGg");
	this.shape_2.setTransform(-67.1,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn8, new cjs.Rectangle(-214,-27.3,316.5,107.9), null);


(lib.tEn6 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(438.3,8.8,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("This is for you. Sprinkle this magic potion and you’ll be invisible for 1 hour.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 779;
	this.myTxt.parent = this;
	this.myTxt.setTransform(72.3,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EA7YAAAMh2vAAA");
	this.shape.setTransform(71.6,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Eg7XAGIIAAnuIJUAAIhRkTIEOETMBqeAAAIAAHu");
	this.shape_1.setTransform(71.6,-45.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg7WAGBIAAnuIJTAAIhSkTIEOETMBqeAAAIAAHug");
	this.shape_2.setTransform(71.6,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn6, new cjs.Rectangle(-319.2,-84.3,783.1,116.6), null);


(lib.tEn5 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(461.9,-24.2,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Thanks for unlocking my home. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 361;
	this.myTxt.parent = this;
	this.myTxt.setTransform(261.5,-44.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Acfn6I9LAAIlTPLICXvLI42AA");
	this.shape.setTransform(262.1,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AcfD6IAAnuMg49AAAIAAHu");
	this.shape_1.setTransform(262.1,-29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjojtI42AAIAAnwMA49AAAIAAHwI9LAAIlUPLg");
	this.shape_2.setTransform(262.1,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn5, new cjs.Rectangle(77.8,-54.9,409,154), null);


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

	// Layer_7
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(381.6,524.6,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Anyway, you still \nhaven’t caught us. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 237;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(249.3,471.1);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.898)").ss(4,0,0,3).p("AScAAMgk3AAA");
	this.shape.setTransform(248.1,539.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.898)").ss(1,0,0,3).p("AycSdIABr/IQ2AAIHd4qIk4YqIRcAAIAAL/");
	this.shape_1.setTransform(248.1,421.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AybSVIAAr/IQ3AAIHc4qIk4YqIRcAAIAAL/g");
	this.shape_2.setTransform(248.1,421.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_4
	this.myTxt1 = new cjs.Text("I didn’t think you can get past that.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 395;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(173.6,21.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,1,1).p("AfQjDI+NAAIBYGIIkTmII9XAA");
	this.shape_3.setTransform(174.1,80.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,1,1).p("AfQD4IAAnuMg+fAAAIAAHu");
	this.shape_4.setTransform(174.1,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("Ah4AzI9XAAIAAnuMA+fAAAIAAHuI+NAAIBYGJg");
	this.shape_5.setTransform(174.1,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,10.6,404.1,91.8);


(lib.tBm8 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(77.6,36.6,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Makin mencabar \nmisi ini. Ayuh!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 215;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-47.5,-19);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Ax5iOIajAAIIZEFIkJkFICZAA");
	this.shape.setTransform(-37.1,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AQnF+IgBr2MghLAAAIAAL2");
	this.shape_1.setTransform(-45.5,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.996)").s().p("AJFD4I6iAAIAAr1MAhLAAAIABL1IiZAAIEIEGg");
	this.shape_2.setTransform(-39.9,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm8, new cjs.Rectangle(-157,-26.8,259.5,107.4), null);


(lib.tBm6 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(385.5,-5.3,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Ambil ini. Renjis air ajaib ini dan awak akan ghaib selama 1 jam.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 674;
	this.myTxt.parent = this;
	this.myTxt.setTransform(31.8,-47.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EA1SAAAMhqjAAA");
	this.shape.setTransform(32.7,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EA1SAGIIAAnuMheTAAAIkOkTIBSETIpUAAIAAHu");
	this.shape_1.setTransform(32.7,-45.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Eg1RAGBIAAnuIJUAAIhSkTIEOETMBeTAAAIAAHug");
	this.shape_2.setTransform(32.7,-44.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm6, new cjs.Rectangle(-310.3,-84.3,720.7,102.4), null);


(lib.tBm5 = function(mode,startPosition,loop) {
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
	this.mcCont.setTransform(461.9,-24.2,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Terima kasih kerana membuka kunci pintu saya. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 485;
	this.myTxt.parent = this;
	this.myTxt.setTransform(198.1,-44.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EAmcgH6I9NAAIlTPLICXvLMgsuAAA");
	this.shape.setTransform(198.5,46.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EAmcAD6IAAnuMhM3AAAIAAHu");
	this.shape_1.setTransform(198.5,-29.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGTjtMgsuAAAIAAnwMBM3AAAIAAHwI9NAAIlTPLg");
	this.shape_2.setTransform(198.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm5, new cjs.Rectangle(-49.5,-54.9,536.3,154), null);


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
	this.mcCont.setTransform(459.5,524.6,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.myTxt2 = new cjs.Text("Apapun, awak masih belum\n dapat tangkap kami.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 310;
	this.myTxt2.alpha = 0.89803922;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(290.9,471.1);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.898)").ss(4,0,0,3).p("AZIAAMgyPAAA");
	this.shape.setTransform(290.9,539.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.898)").ss(1,0,0,3).p("A5HSdIABr/IQ2AAIHd4qIk4YqIezAAIAAL/");
	this.shape_1.setTransform(290.9,421.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5HSVIABr/IQ2AAIHd4qIk3YqIeyAAIAAL/g");
	this.shape_2.setTransform(290.9,421.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Tak sangka awak boleh melepasi cabaran tadi.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 501;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(174.3,21.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,1,1).p("EAmrgDDMgloAAAIBYGIIkTmIMgkyAAA");
	this.shape_3.setTransform(174.1,80.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,1,1).p("EAmrAD4IAAnuMhNVAAAIAAHu");
	this.shape_4.setTransform(174.1,36.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.996)").s().p("Ah4AzMgkyAAAIAAnuMBNVAAAIAAHuMgloAAAIBYGJg");
	this.shape_5.setTransform(174.1,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,10.6,504.7,91.8);


(lib.TAPIR_HERO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// T_shoulderPad_R
	this.instance = new lib.T_shoulderPad_R("single",0);
	this.instance.parent = this;
	this.instance.setTransform(67.7,10,1,1,0,-6.2,173.8,-0.1,-0.1);

	this.instance_1 = new lib.T_Arm_R("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.1,-1.6,1,1,0,8.2,-171.8,-34,-140.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{regX:-34,regY:-140.2,skewX:8.2,skewY:-171.8,x:59.1,startPosition:4,y:-1.6}},{t:this.instance,p:{regX:-0.1,skewX:-6.2,skewY:173.8,x:67.7,y:10,regY:-0.1}}]},12).to({state:[{t:this.instance_1,p:{regX:-34.1,regY:-140.1,skewX:-4.3,skewY:175.7,x:71.5,startPosition:0,y:-1.6}},{t:this.instance,p:{regX:-0.2,skewX:-3.8,skewY:176.2,x:79.6,y:10.4,regY:-0.1}}]},1).to({state:[{t:this.instance_1,p:{regX:-34.2,regY:-140,skewX:-5.3,skewY:174.7,x:89,startPosition:5,y:4.6}},{t:this.instance,p:{regX:-0.3,skewX:-4.7,skewY:175.3,x:99.4,y:14.9,regY:0}}]},1).wait(1));

	// T_Arm_R
	this.instance_2 = new lib.T_Arm_L("single",5);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-136,69.2,1,1,0,-6.7,173.3,-14.8,-117.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(1).to({regY:-117.2,skewX:9.2,skewY:189.2,x:-114.2,y:10.9,startPosition:10},0).wait(1).to({skewX:14.4,skewY:194.4,x:-97.1,y:0},0).wait(1));

	// translator_device
	this.instance_3 = new lib.tapir_spacehelmet("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-65.2,-84.9,1,1,0,-7,173,0.1,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).wait(1).to({skewX:-4.5,skewY:175.5,x:-53.2,y:-90.9},0).wait(1).to({skewX:0.7,skewY:180.7,x:-27,y:-95.8},0).wait(1));

	// Layer_2
	this.instance_4 = new lib.T_shoulderPad_L("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-138.8,39.8,1,1,0,1.3,-178.7,0,-0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(12).to({_off:false},0).wait(1).to({skewX:13.2,skewY:-166.8,x:-135.3,y:19.4},0).wait(1).to({regX:0.1,skewX:18.5,skewY:-161.5,x:-118.9,y:6.5},0).wait(1));

	// Layer_4
	this.instance_5 = new lib.T_Body("single",1);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-10.1,76.6,1.004,0.978,0,-13.7,171.2,-0.1,0.1);

	this.instance_6 = new lib.T_Legs("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-3.7,141.7,1,1,0,0,180,16.9,-193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5,p:{regX:-0.1,skewX:-13.7,skewY:171.2,x:-10.1,y:76.6,regY:0.1}}]},12).to({state:[{t:this.instance_6},{t:this.instance_5,p:{regX:0.1,skewX:-11.2,skewY:173.7,x:-6.1,y:74.4,regY:0.1}}]},1).to({state:[{t:this.instance_6},{t:this.instance_5,p:{regX:-0.1,skewX:-6,skewY:178.9,x:4.9,y:73.1,regY:0.2}}]},1).wait(1));

	// tapir body
	this.instance_7 = new lib.T_Arm_L("single",9);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-114.2,10.9,1,1,0,9.2,-170.8,-14.8,-117.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).wait(1).to({skewX:14.4,skewY:-165.6,x:-97.1,y:0},0).wait(1));

	// T_Body
	this.instance_8 = new lib.T_Arm_L("single",4);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-134.9,57.4,1.101,1.06,0,-6.7,173.3,-14.8,-117.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({_off:false},0).to({_off:true},1).wait(2));

	// T_Legs
	this.instance_9 = new lib.tapirhead("single",5);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-68.8,-69.7,1,1,-5.3,0,0,-0.3,-0.1);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({_off:false},0).wait(1).to({rotation:-2.8,x:-55,y:-75.1,startPosition:6},0).wait(1).to({regX:-0.4,regY:-0.3,rotation:-3.5,x:-33.9,y:-80.5,startPosition:9},0).wait(1));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.498)","rgba(0,0,0,0)"],[0.463,1],-14.5,-34,0,-14.5,-34,285.4).s().p("AxdF/Ig1AAQjDgDkMgaQhzgMhEgVQhggegmg5QgYgiAAgmQAAgaALgcQANgmAcgfQAVgYAcgTQA4gnBYgeQA1gSBugbQgsgwBFg1QA9guBcgRQIohlI7AAQBVAABXADQG/AMGwBIIAEABQHhA+HnB4QBOAUAoASQA+AbAXApQAOAXAAAYQAAA2hGA1QhXBDiHAbQj9AykwADQj2ACk9geQkLgZgqgDQiwgLiEAKQiAAKjKArQj+A2hJALQi6AdjcgBIAAAAg");
	this.shape.setTransform(-0.1,362.4);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12).to({_off:false},0).wait(3));

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


(lib.dialogue8 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm8();
	this.instance.parent = this;
	this.instance.setTransform(-80.1,-20.5);

	this.instance_1 = new lib.tEn8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80.2,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-237.1,-46.8,259.5,106.9);


(lib.dialogue6 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm6();
	this.instance.parent = this;
	this.instance.setTransform(-92.1,-20.5);

	this.instance_1 = new lib.tEn6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.4,-25.2,1,1,0,0,0,4.7,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.4,-104.8,720.7,102.4);


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
	this.instance.setTransform(-92.1,-20.5);

	this.instance_1 = new lib.tEn5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-87.4,-25.2,1,1,0,0,0,4.7,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.6,-74.9,536.3,153.5);


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
p.nominalBounds = new cjs.Rectangle(-29,-9.4,504.7,91.3);


// stage content:
(lib.outro3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:1,a2:125,a3:139,a4:324,a5:361});

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
	this.frame_5 = function() {
		playSound("intro");
	}
	this.frame_119 = function() {
		this.stop();
	}
	this.frame_125 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a3");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_134 = function() {
		this.stop();
	}
	this.frame_139 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a4");
		}
		this.addEventListener("click", doPlay);
		playSound("digitalUnlock");
	}
	this.frame_208 = function() {
		playSound("doorOpen");
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_324 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a5");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_351 = function() {
		this.stop();
	}
	this.frame_361 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_431 = function() {
		playSound("questionComplete");
	}
	this.frame_527 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(4).call(this.frame_5).wait(114).call(this.frame_119).wait(6).call(this.frame_125).wait(9).call(this.frame_134).wait(5).call(this.frame_139).wait(69).call(this.frame_208).wait(106).call(this.frame_314).wait(10).call(this.frame_324).wait(27).call(this.frame_351).wait(10).call(this.frame_361).wait(70).call(this.frame_431).wait(96).call(this.frame_527).wait(1));

	// t
	this.instance = new lib.dialogue1();
	this.instance.parent = this;
	this.instance.setTransform(53.1,57.1,1,1,0,0,0,5.7,0);

	this.instance_1 = new lib.dialogue3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(408,113.4);

	this.instance_2 = new lib.dialogue5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(179.6,111,1,1,0,0,0,4.7,-1.9);

	this.instance_3 = new lib.dialogue6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(421.6,143.4,1,1,0,0,0,4.7,-1.9);

	this.instance_4 = new lib.dialogue7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(317.9,596.9,1,1,0,0,0,4.7,-1.9);

	this.instance_5 = new lib.dialogue8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(426.8,91.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},49).to({state:[{t:this.instance_1}]},76).to({state:[]},14).to({state:[{t:this.instance_2}]},160).to({state:[{t:this.instance_3}]},25).to({state:[{t:this.instance_4}]},37).to({state:[{t:this.instance_5}]},151).wait(16));

	// hl
	this.instance_6 = new lib.hlBlinkStars("synched",0,false);
	this.instance_6.parent = this;
	this.instance_6.setTransform(41.5,104.9,1,1,0,0,0,0.1,-2.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(431).to({_off:false},0).to({_off:true},81).wait(16));

	// inventory_box
	this.instance_7 = new lib.inventory("synched",0,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(48.1,273.3,1,1,0,0,0,1,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(361).to({_off:false},0).wait(167));

	// bit byte bot
	this.instance_8 = new lib.bbb_hologram("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(348.2,388.7,0.109,0.109,0,0,0,15.2,192);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({regX:15.1,regY:192.1,scaleX:0.65,scaleY:0.65,y:363.1,alpha:0.699},10,cjs.Ease.get(0.5)).to({regX:15,regY:192,scaleX:0.6,scaleY:0.6,alpha:1},10,cjs.Ease.get(0.5)).wait(60).to({startPosition:1},0).to({_off:true},30).wait(389));

	// light
	this.instance_9 = new lib.light();
	this.instance_9.parent = this;
	this.instance_9.setTransform(344.4,25.6,0.341,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},139).wait(389));

	// device
	this.instance_10 = new lib.translator_device("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(341.5,464.6,1.576,1.576,0,0,0,-0.6,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},139).wait(389));

	// tapir
	this.instance_11 = new lib.TAPIR_HERO("single",12);
	this.instance_11.parent = this;
	this.instance_11.setTransform(542.2,788.9,0.849,0.848,0,0,0,-175.6,623);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},139).wait(160).to({_off:false,regX:-175.5,regY:623.1,scaleX:0.72,scaleY:0.72,x:516.3,y:661.2},0).to({_off:true},25).wait(37).to({_off:false,regX:-175.3,regY:623.2,scaleX:0.88,scaleY:0.88,x:467.3,y:741.8,startPosition:13},0).wait(151).to({regY:623.3,scaleX:1.35,scaleY:1.35,x:338.5,y:1140.4,startPosition:14},0).wait(16));

	// alien
	this.instance_12 = new lib.monster4("single",3);
	this.instance_12.parent = this;
	this.instance_12.setTransform(134.2,609,0.485,0.485,0,0,0,32.5,374.1);

	this.instance_13 = new lib.handClose("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-476.2,212.7,0.846,0.846,4.2,0,0,-0.1,0.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{regX:32.5,regY:374.1,scaleX:0.485,scaleY:0.485,x:134.2,y:609,startPosition:3}}]}).to({state:[]},139).to({state:[{t:this.instance_12,p:{regX:32.9,regY:374.8,scaleX:0.42,scaleY:0.42,x:260.4,y:512.6,startPosition:6}}]},160).to({state:[{t:this.instance_13}]},25).to({state:[{t:this.instance_13}]},26).to({state:[{t:this.instance_12,p:{regX:33,regY:374.9,scaleX:0.508,scaleY:0.508,x:157.6,y:561.9,startPosition:3}}]},11).to({state:[]},151).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(324).to({_off:false},0).to({regX:-0.3,regY:0.2,rotation:0,x:41.5,y:326.5},26,cjs.Ease.cubicOut).to({_off:true},11).wait(167));

	// md
	this.instance_14 = new lib.DigiBot("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(482.9,676,0.849,0.849,0,0,0,-14.8,323.7);

	this.instance_15 = new lib.pw_door("synched",0,false);
	this.instance_15.parent = this;
	this.instance_15.setTransform(545.2,303.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{regX:-14.8,regY:323.7,scaleX:0.849,scaleY:0.849,x:482.9,y:676,skewY:0}}]}).to({state:[{t:this.instance_15}]},139).to({state:[]},69).to({state:[{t:this.instance_14,p:{regX:-14.7,regY:323.9,scaleX:0.724,scaleY:0.724,x:469.3,y:593.2,skewY:0}}]},91).to({state:[]},25).to({state:[{t:this.instance_14,p:{regX:-14.6,regY:323.9,scaleX:0.876,scaleY:0.876,x:349,y:659.4,skewY:180}}]},37).to({state:[{t:this.instance_14,p:{regX:-14.7,regY:324,scaleX:1.348,scaleY:1.348,x:156.6,y:1013.6,skewY:180}}]},151).wait(16));

	// BG
	this.instance_16 = new lib.outro3bg1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-40,-68,1.205,1.205);

	this.instance_17 = new lib.Bitmap12();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-11.9,-15.9);

	this.instance_18 = new lib.Bitmap13();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-11.9,-15.9);

	this.instance_19 = new lib.Bitmap14();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-11.9,-15.9);

	this.instance_20 = new lib.outrobgdooropen();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-39.6,-54.7,0.862,0.862);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{scaleX:1.205,scaleY:1.205,x:-40,y:-68}}]}).to({state:[{t:this.instance_17}]},139).to({state:[{t:this.instance_18}]},69).to({state:[{t:this.instance_19}]},20).to({state:[{t:this.instance_20,p:{scaleX:0.862,scaleY:0.862,x:-39.6,y:-54.7}}]},71).to({state:[{t:this.instance_16,p:{scaleX:6.201,scaleY:6.201,x:-2124,y:-2080}}]},25).to({state:[{t:this.instance_20,p:{scaleX:1.025,scaleY:1.025,x:-198.1,y:-116.9}}]},37).to({state:[{t:this.instance_16,p:{scaleX:1.928,scaleY:1.928,x:-693.7,y:-185.9}}]},151).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(360,-55.8,1016.8,1073.3);
// library properties:
lib.properties = {
	id: '11CABBE8EF0CC945B3CD9040447EEBC2',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/outro3/Bitmap1.png?1521356081031", id:"Bitmap1"},
		{src:"images/outro3/Bitmap10.png?1521356081031", id:"Bitmap10"},
		{src:"images/outro3/Bitmap11.png?1521356081032", id:"Bitmap11"},
		{src:"images/outro3/Bitmap12.png?1521356081032", id:"Bitmap12"},
		{src:"images/outro3/Bitmap13.png?1521356081032", id:"Bitmap13"},
		{src:"images/outro3/Bitmap14.png?1521356081032", id:"Bitmap14"},
		{src:"images/outro3/Bitmap2.png?1521356081032", id:"Bitmap2"},
		{src:"images/outro3/Bitmap3.png?1521356081032", id:"Bitmap3"},
		{src:"images/outro3/Bitmap7.png?1521356081032", id:"Bitmap7"},
		{src:"images/outro3/Bitmap8.png?1521356081032", id:"Bitmap8"},
		{src:"images/outro3/outro3bg1.png?1521356081032", id:"outro3bg1"},
		{src:"images/outro3/outrobgdooropen.png?1521356081032", id:"outrobgdooropen"},
		{src:"sounds/digitalUnlock.mp3?1521356081032", id:"digitalUnlock"},
		{src:"sounds/doorOpen.mp3?1521356081032", id:"doorOpen"},
		{src:"sounds/intro.mp3?1521356081032", id:"intro"},
		{src:"sounds/questionComplete.mp3?1521356081032", id:"questionComplete"}
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