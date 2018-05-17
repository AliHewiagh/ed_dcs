(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,59);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,45);


(lib.promotion_5 = function() {
	this.initialize(img.promotion_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,284);


(lib.promotionBg01 = function() {
	this.initialize(img.promotionBg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.starfieldbg = function() {
	this.initialize(img.starfieldbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,820,620);// helper functions:

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


(lib.Symbol3copy5 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("You can download your certificate of completion now.", "italic 16px 'Quantico'", "#FFFFFF");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 483;
	this.myTxt.parent = this;
	this.myTxt.setTransform(0,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy5, new cjs.Rectangle(-243.5,-13.4,487.2,26.9), null);


(lib.Symbol3copy4 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Anda boleh muat turun sijil perakuan anda sekarang.", "italic 16px 'Quantico'", "#FFFFFF");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 500;
	this.myTxt.parent = this;
	this.myTxt.setTransform(0,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy4, new cjs.Rectangle(-252.2,-13.4,504.5,26.9), null);


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("You've been promoted to\nChief Superintendent.", "italic 19px 'Quantico'", "#FFFFFF");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 29;
	this.myTxt.lineWidth = 416;
	this.myTxt.parent = this;
	this.myTxt.setTransform(0,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy3, new cjs.Rectangle(-210.1,-30.1,420.4,60.3), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Anda telah dianugerahkan pangkat \nKetua Superintenden.", "italic 19px 'Quantico'", "#FFFFFF");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 29;
	this.myTxt.lineWidth = 416;
	this.myTxt.parent = this;
	this.myTxt.setTransform(0,-28.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2, new cjs.Rectangle(-210.1,-30.1,420.4,60.3), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Your achievement", "italic 19px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 29;
	this.myTxt.lineWidth = 200;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-94.3,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-96.3,-15.5,203.9,31.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Pencapaian anda", "italic 19px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 29;
	this.myTxt.lineWidth = 189;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-94.3,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-96.3,-15.5,192.7,31.2), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AA8BpIg8gfIg8AfIgFACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAgBAAAAIABgDIALhDIgxgwQgDgDAAgDQAAgFAHgBIBEgKIAeg+QADgFADAAQAEAAADAFIAeA+IBEAKQAHABAAAFQAAADgDADIgxAwIALBDIAAADIgBAEQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAIgGgCg");
	this.shape.setTransform(-0.1,-1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-11.7,22.5,21.4);


(lib.congratscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],-218.9,-5,-218.9,8.5).s().p("Ag7CpIAJhYIBXAAIgIBYgAgcAkIAJjMIBPAAIgiDMg");
	this.shape.setTransform(113.8,-0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],3.2,-5.6,3.2,7.9).s().p("AOMCjIAOiMIiAAAIgOCMIhCAAIAjlFIBAAAIgMCCICAAAIANiCIBBAAIgiFFgAJcCjIgShHIh6AAIggBHIhAAAICWlFIBEAAIBSFFgAHpAlIBTAAIgch1IgBAAgAEACjIAilFIBBAAIghFFgAB0CjIh2jSIgBAAIgWDSIhBAAIAilFIA8AAIB2DSIABAAIAWjSIBBAAIghFFgAjqCjIAOiMIiAAAIgOCMIhCAAIAilFIBBAAIgMCCIB/AAIAOiCIBBAAIgiFFgAoaCjIgShHIh6AAIggBHIhAAAICWlFIBEAAIBSFFgAqNAlIBTAAIgch1IgBAAgAuyCjIAckNIhYAAIAGg4IDxAAIgFA4IhZAAIgbENg");
	this.shape_1.setTransform(1.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-103,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103,-20,230,45);


(lib.congrats = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],3.3,-5.1,3.3,8.4).s().p("AdvCrIgyggIAGg+IBBAAIgDAlIBjAAIAJhPIhrAAIgzggIAPiCIA5gfIB1AAIAzAfIgHA+IhBAAIAEgmIhfAAIgIBOIBpAAIAzAeIgOCGIg5AggATPCrIgzggIAckKIA6gfICRAAIAyAfIgcEKIg5AggATgByIB7AAIAWjZIh7AAgAgvCrIgzggIAgknIBAAAIgbEKIB5AAIAckKIBBAAIgfEnIg5AggAzdCrIgzggIAckKIA6gfICCAAIA0AfIgIBDIhAAAIADgrIhtAAIgWDZIBtAAIAGg7Ig2AAIAGg3IB2AAIgOCLIg5AggA9+CrIgzggIAdkKIA5gfICRAAIAzAfIgdEKIg5AggA9sByIB7AAIAWjZIh7AAgEgi3ACrIgyggIAckKIA5gfICEAAIAyAfIgHBDIhBAAIAEgrIhtAAIgXDZIBtAAIAFgpIBBAAIgIBCIg4AggEAhzACoIAJhYIBYAAIgJBYgAazCoIh2jRIgCAAIgVDRIhBAAIAilEIA8AAIB2DSIABAAIAWjSIBBAAIgiFEgAQJCoIAjlEIBAAAIgiFEgAM+CoIAckMIhXAAIAFg4IDxAAIgHA4IhXAAIgcEMgAKTCoIgShGIh5AAIggBGIhAAAICWlEIBDAAIBSFEgAIiAqIBSAAIgch0IgBAAgADmCoIAilEIBBAAIgcEMIBvAAIgHA4gAkxCoIAckMIhXAAIAGg4IDwAAIgGA4IhXAAIgdEMgAnbCoIgShGIh5AAIggBGIhAAAICWlEIBDAAIBSFEgApMAqIBSAAIgch0IgBAAgAsrCoIg5h6IgoAAIgMB6IhBAAIAhlEICwAAIAyAgIgOCKIg5AgIA6B6gAuGgJIBkAAIAJhbIhjAAgA2ZCoIh3jRIgBAAIgWDRIhAAAIAilEIA8AAIB2DSIABAAIAWjSIBBAAIgiFEgEAiSAAjIAJjMIBQAAIgiDMg");
	this.shape.setTransform(1.5,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-238,-26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-238,-26,481,59);


(lib.btnWideBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#671D1F").s().p("ALBCkIAVkxI2WAAIgJBOIgNgNIAKhXIW7AAIgiFHgAruCkIAKh0IBAhAIARAQIhGBGIgHBeg");
	this.shape.setTransform(0.2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-6.9,-23.7,-2.9,18.2).s().p("ArbCZIAIheIBFhFIgRgRIAGgFIgrgrIAJhNIWXAAIgWExg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AsWDWIAEgjIAAAAIAQikIA2g1IgrgrIAQiEIX+AAIguGrgArUhdIAMANIArAqIgGAGIhAA/IgKB1IAPAAIWhAAIALAAIAjlII27AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AsWDWIAEgjIAAAAIAQikIA2g1IgrgrIAQiEIX+AAIguGrg");
	this.shape_3.setTransform(3.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.barBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(2).p("EArNAAeIAAg7AZ7AeIAAg7AIpAeIAAg7AooAeIAAg7A56AeIAAg7EgrMAAeIAAg7");
	this.shape.setTransform(22.5,12.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#252525").s().p("EgrYAAZIAFgxMBWsAAAIgFAxg");
	this.shape_1.setTransform(22.5,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgrZAAcIAGg3MBWsAAAIgFA3g");
	this.shape_2.setTransform(23.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4F4F4F").s().p("An9B6IAXjzIOsAAIA4CAIgmBzg");
	this.shape_3.setTransform(-253.2,-7.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F3F3F").s().p("EgoiACEIggghQgMgLgQAAIgBAAQgQAAgMALIAAAAIggAhIj9AAIhPhQIAGhDIPWAAIAmhzIAXA1QAFALAKAGQAKAHAMAAMBNiAAAIAvAwIgNCJg");
	this.shape_4.setTransform(0,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("EgozADsIgsgsIgrAsIkfAAIhphoIAklvIPrAAIBaDOMBNyAAAIBKBIIgTDBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309,-23.6,618.1,47.2);


(lib.tahniahMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bm:0,en:1});

	// timeline functions:
	this.frame_0 = function() {
		//check language and show the right language
		if (myLanguage==2){
			this.gotoAndStop("en");
		} else {
			this.stop();
		}
		var _this = this;
		function onSetEn(e){
			_this.gotoAndStop("en");
		}
		stage.addEventListener("setEn", onSetEn);
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		function onSetBm(e){
			_this.gotoAndStop("bm");
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.instance = new lib.congratscopy("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-0.7);

	this.instance_1 = new lib.congrats("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.5,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-20.7,230,45);


(lib.pencapaianTxt = function(mode,startPosition,loop) {
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
	this.instance = new lib.Symbol3();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol3copy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.3,-15.5,192.7,31.2);


(lib.msgTxtcopy = function(mode,startPosition,loop) {
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
	this.instance = new lib.Symbol3copy4();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol3copy5();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-252.2,-13.4,504.5,26.9);


(lib.msgTxt = function(mode,startPosition,loop) {
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
	this.instance = new lib.Symbol3copy2();
	this.instance.parent = this;

	this.instance_1 = new lib.Symbol3copy3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.1,-30.1,420.4,60.3);


(lib.btnHorizontal2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAPBJIgFgIIgNAIIgaAAIgXgNIAIhKIAZgNIAaAAIAMAIIAGg1IAcAAIgQCRgAgXAyIAkAAIAFg2IgjAAg");
	this.shape.setTransform(56,-2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(43.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzIgVgOIAIhJIAZgOIApAAIAWAOIgIBJIgZAOgAgTAcIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(31.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB6IAUAAIgCAXg");
	this.shape_3.setTransform(22.8,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAyIAJhMIgiAAIgIBMIgbAAIAKhjIAXAAIAEAIIAOgIIAZAAIAVANIgJBWg");
	this.shape_4.setTransform(13.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHAyIgKg+IAAAAIgYA+IgdAAIgPhjIAaAAIAJA/IAYg/IAZAAIALA/IAAAAIAWg/IAaAAIgkBjg");
	this.shape_5.setTransform(0.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAzIgXgOIAIhJIAagOIApAAIAWAOIgJBJIgYAOgAgTAcIAhAAIAGg2IghAAg");
	this.shape_6.setTransform(-13.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWANIgMBwIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_7.setTransform(-26.9,-2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhRBWQgEAAgEgDQgDgDAAgFIAAgkQAAgEADgDQAEgDAEAAIA0AAIAPAPQAGAGAIAAQAJAAAGgGIAPgPIA0AAQAFAAADADQADADAAAEIAAAkQAAAFgDADQgDADgFAAgABDA7QgDACAAADQAAADADACQACACADAAQACAAADgCQACgCAAgDQAAgDgCgCQgDgCgCAAQgDAAgCACgAAmA7QgCACAAADQAAADACACQACACADAAQADAAACgCQACgCAAgDQAAgDgCgCQgCgCgDAAQgDAAgCACgAgEAiIgygxQgDgEABgEQACgFAFAAIAdAAIAAgyQAAgCACgDQACgCADAAIAbAAQADAAACACQADADAAACIAAAyIAcAAQAFAAACAFQACAEgEAEIgyAxQgCACgDAAQgCAAgCgCg");
	this.shape_8.setTransform(-49.2,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_9.setTransform(-1.4,14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_10.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_11.setTransform(0.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_12.setTransform(0.2,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_13.setTransform(0.2,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_14.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.btnHorizontal1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAyIAHhMIggAAIgIBMIgcAAIALhjIAWAAIAEAIIAOgIIAYAAIAWANIgJBWg");
	this.shape.setTransform(63.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_1.setTransform(51.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape_2.setTransform(41.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_3.setTransform(31.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBGIAMhzIgmAAIADgYIBmAAIgCAYIgmAAIgMBzg");
	this.shape_4.setTransform(20.4,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAHg+IgTAAIADgYIASAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_5.setTransform(4.6,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_6.setTransform(-5.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_7.setTransform(-17.7,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAmBGIAKhcIgBAAIgpBcIgaAAIgWhdIgKBdIgbAAIAPiLIAlAAIAYBmIABAAIAthmIAlAAIgPCLg");
	this.shape_8.setTransform(-32.4,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhRBWQgEAAgEgDQgDgDAAgFIAAgkQAAgEADgDQAEgDAEAAIA0AAIAPAPQAGAGAIAAQAJAAAGgGIAPgPIA0AAQAFAAADADQADADAAAEIAAAkQAAAFgDADQgDADgFAAgABDA7QgDACAAADQAAADADACQACACADAAQACAAADgCQACgCAAgDQAAgDgCgCQgDgCgCAAQgDAAgCACgAAmA7QgCACAAADQAAADACACQACACADAAQADAAACgCQACgCAAgDQAAgDgCgCQgCgCgDAAQgDAAgCACgAgEAiIgygxQgDgEABgEQACgFAFAAIAdAAIAAgyQAAgCACgDQACgCADAAIAbAAQADAAACACQADADAAACIAAAyIAcAAQAFAAACAFQACAEgEAEIgyAxQgCACgDAAQgCAAgCgCg");
	this.shape_9.setTransform(-56.6,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_10.setTransform(-1.4,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_11.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_12.setTransform(0.2,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_13.setTransform(0.2,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_14.setTransform(0.2,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_15.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.mcBtnDownload = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnHorizontal1copy();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHorizontal1copy(), 3);

	this.instance_1 = new lib.btnHorizontal2copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHorizontal2copy(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-24.6,164.1,51.8);


// stage content:
(lib.end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;
	}
	this.frame_4 = function() {
		playSound("win");
	}
	this.frame_505 = function() {
		function doOpenCert(e){
			window.open('dcsCertificate.pdf', '_blank', 'fullscreen=yes');
		}
		this.btnCert.addEventListener("click", doOpenCert);
	}
	this.frame_661 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(501).call(this.frame_505).wait(156).call(this.frame_661).wait(1));

	// Layer_15
	this.instance = new lib.msgTxtcopy();
	this.instance.parent = this;
	this.instance.setTransform(400,478.2);

	this.btnCert = new lib.mcBtnDownload();
	this.btnCert.name = "btnCert";
	this.btnCert.parent = this;
	this.btnCert.setTransform(398.7,527,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnCert},{t:this.instance}]},505).wait(157));

	// Layer_7
	this.instance_1 = new lib.msgTxt();
	this.instance_1.parent = this;
	this.instance_1.setTransform(400,168.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(440).to({_off:false},0).wait(222));

	// congratulations
	this.instance_2 = new lib.tahniahMc();
	this.instance_2.parent = this;
	this.instance_2.setTransform(401.5,190.3,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(424).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,y:110.3},29,cjs.Ease.elasticOut).wait(209));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_385 = new cjs.Graphics().p("AAAAwIg4AoIAUhDIg3gpIBFgCIAWhBIAXBBIBFACIg3ApIAUBDg");
	var mask_graphics_386 = new cjs.Graphics().p("AAAAoIguAhIARg3IgugiIA5gBIASg2IATA2IA5ABIgtAiIAQA3g");
	var mask_graphics_387 = new cjs.Graphics().p("AAAAQIgRANIAGgWIgSgNIAWgBIAHgUIAIAUIAWABIgSANIAHAWg");
	var mask_graphics_388 = new cjs.Graphics().p("AgJAKIgfAAIAZgSIgJgeIAYARIAZgRIgIAeIAYASIgfAAIgKAdg");
	var mask_graphics_389 = new cjs.Graphics().p("AggAgIhjgCIBOg8IgdhfIBSA4IBTg4IgeBfIBPA8IhjACIghBfg");
	var mask_graphics_390 = new cjs.Graphics().p("Ag8A6Ii0gDICQhuIg0iuICUBoICVhoIg0CuICQBuIi0ADIg9Crg");
	var mask_graphics_391 = new cjs.Graphics().p("AhaBYIkOgGIDXilIhOkEIDfCaIDgiaIhOEEIDXClIkOAGIhbEAg");
	var mask_graphics_392 = new cjs.Graphics().p("Ah6B3IltgIIEjjgIhqlgIEuDRIEvjRIhqFgIEjDgIltAIIh7Fbg");
	var mask_graphics_393 = new cjs.Graphics().p("AibCXInPgKIFxkcIiGm/IF+EKIGBkKIiGG/IFxEcInPAKIidG3g");
	var mask_graphics_394 = new cjs.Graphics().p("Ai8C2IowgMIG/lYIiiobIHOFAIHSlAIijIbIG+FYIowAMIi9IUg");
	var mask_graphics_395 = new cjs.Graphics().p("AjbDVIqMgOIIImRIi9p1IIaF2IIfl2Ii9J1IIIGRIqMAOIjeJrg");
	var mask_graphics_396 = new cjs.Graphics().p("Aj3DwIrhgQIJLnFIjWrGIJhGmIJlmmIjVLGIJLHFIrhAQIj6K8g");
	var mask_graphics_397 = new cjs.Graphics().p("AkQEJIsrgSIKGnzIjrsNIKeHQIKjnQIjrMNIKGHzIsrASIkTMBg");
	var mask_graphics_398 = new cjs.Graphics().p("AkkEcItngTIK2oXIj9tHILQHyILVnyIj9NHIK2IXItnATIknM6g");
	var mask_graphics_399 = new cjs.Graphics().p("AkyEqIuRgUILXoyIkItvILyILIL3oLIkINvILXIyIuQAUIk2Nig");
	var mask_graphics_400 = new cjs.Graphics().p("Ak6ExIumgVILpo+IkPuEIMEIXIMJoXIkPOEILpI+IumAVIk9N2g");
	var mask_graphics_401 = new cjs.Graphics().p("Ak5EwIujgVILmo8IkOuBIMCIUIMHoUIkOOBILmI8IujAVIk8N0g");
	var mask_graphics_402 = new cjs.Graphics().p("AkuElIuFgTILNoqIkFtkILoIDILvoDIkGNkILOIqIuFATIkyNYg");
	var mask_graphics_403 = new cjs.Graphics().p("AkaESItIgSIKeoFIj0spIK2HhIK7nhIjzMpIKdIFItIASIkdMdg");
	var mask_graphics_404 = new cjs.Graphics().p("Aj6DzIrpgRIJSnJIjYrOIJnGrIJsmrIjYLOIJSHJIrpARIj9LDg");
	var mask_graphics_405 = new cjs.Graphics().p("AjNDHIplgMIHol5IixpOIH6FeIH9leIixJOIHoF5IplAMIjPJGg");
	var mask_graphics_406 = new cjs.Graphics().p("AiTCPIm4gJIFfkOIiAmnIFsD7IFsj7Ih/GnIFeEOIm3AJIiUGhg");
	var mask_graphics_407 = new cjs.Graphics().p("AhKBJIjegGICxiIIhBjWIC4CAIC4iAIhADWICxCIIjeAGIhLDSg");
	var mask_graphics_408 = new cjs.Graphics().p("AAAAdIgiAZIAMgpIghgZIAqgBIANgoIAOAoIAqABIghAZIAMApg");
	var mask_graphics_409 = new cjs.Graphics().p("AACD7IkpDMIBnlYIkcjaIFlgIIB5lTIB2FTIFlAIIkdDaIBoFYg");
	var mask_graphics_410 = new cjs.Graphics().p("AADH+IpcGgIDSq8IpCm+ILVgPID3qyIDxKyILWAPIpCG+IDSK8g");
	var mask_graphics_411 = new cjs.Graphics().p("AAEMpIu/KUIFOxWIuWrFISAgZIGHxFIGARFISAAZIuWLFIFNRWg");
	var mask_graphics_412 = new cjs.Graphics().p("AAGR/I1UOqIHb4rI0avwIZmgjIIt4TIIiYTIZmAjI0aPwIHbYrg");
	var mask_graphics_413 = new cjs.Graphics().p("AAIYCI8fTlMAJ7gg+I7R1CMAiNgAwMALoggdMALZAgdMAiNAAwI7RVCMAJ7Ag+g");
	var mask_graphics_414 = new cjs.Graphics().p("AAKe0MgkhAZGMAMugqQMgi9ga/MAr2gA9MAO6gpnMAOoApnMAr2AA9Mgi9Aa/MAMtAqQg");
	var mask_graphics_415 = new cjs.Graphics().p("EAANAmXMgtfAfQMAP1g0nMgrhghmMA2mgBMMASlgz1MASMAz1MA2mABMMgrhAhmMAP1A0ng");
	var mask_graphics_416 = new cjs.Graphics().p("EAAQAuvMg3ZAmEMATRhAFMg1Ago8MBCggBdMAWog/HMAWKA/HMBCfABdMg1AAo8MATRBAFg");
	var mask_graphics_417 = new cjs.Graphics().p("EAATA39MhCUAtkMAXEhMuMg/cgxAMBPmgBvMAbGhLkMAahBLkMBPmABvMg/cAxAMAXEBMug");
	var mask_graphics_418 = new cjs.Graphics().p("EAAWBBKMhNPA1EMAa4hZWMhJ6g5FMBctgCAMAfkhYAMAe5BYAMBctACAMhJ6A5FMAa4BZWg");
	var mask_graphics_419 = new cjs.Graphics().p("EAAYBJhMhXJA74MAeVhkzMhTYhAaMBomgCSMAjmhjSMAi4BjSMBomACSMhTYBAaMAeUBkzg");
	var mask_graphics_420 = new cjs.Graphics().p("EAAbBREMhgHBCCMAhchvKMhb8hHCMBzWgCgMAnRhtfMAmcBtfMBzWACgMhb8BHCMAhbBvKg");
	var mask_graphics_421 = new cjs.Graphics().p("EAAdBX3MhoJBHjMAkOh4eMhjnhM+MB8+gCtMAqkh2qMApqB2qMB8/ACtMhjoBM+MAkPB4eg");
	var mask_graphics_422 = new cjs.Graphics().p("EAAfBd5MhvTBMfMAmuiAwMhqfhSRMCFlgC6MAtfh+0MAsiB+0MCFlAC6MhqfBSRMAmvCAwg");
	var mask_graphics_423 = new cjs.Graphics().p("EAAgBjPMh1oBQ1MAo7iIFMhwjhW8MCNMgDFMAwEiGBMAvFCGBMCNMADFMhwjBW8MAo7CIFg");
	var mask_graphics_424 = new cjs.Graphics().p("EAAiBn6Mh7LBUpMAq2iOfMh12hbCMCT2gDOMAyViMWMAxSCMWMCT3ADOMh13BbCMAq2COfg");
	var mask_graphics_425 = new cjs.Graphics().p("EAAkBr+Mh//BX8MAshiUDMh6dhemMCZogDVMA0TiR1MAzNCR1MCZmADVMh6cBemMAsiCUDg");
	var mask_graphics_426 = new cjs.Graphics().p("EAAlBvcMiEGBavMAt9iYxMh+YhhpMCejgDcMA1+iWfMA01CWfMCejADcMh+YBhpMAt9CYxg");
	var mask_graphics_427 = new cjs.Graphics().p("EAAmByVMiHiBdIMAvJicxMiBqhkLMCiqgDjMA3ZiaaMA2OCaaMCiqADjMiBqBkLMAvJCcxg");
	var mask_graphics_428 = new cjs.Graphics().p("EAAmB0uMiKWBfDMAwIigCMiEXhmQMCmDgDnMA4iidoMA3XCdoMCmDADnMiEXBmQMAwICgCg");
	var mask_graphics_429 = new cjs.Graphics().p("EAAnB2nMiMnBgnMAw6iipMiGhhn7MCoxgDrMA5digMMA4QCgMMCowADrMiGgBn7MAw6Cipg");
	var mask_graphics_430 = new cjs.Graphics().p("EAAoB4EMiOVBhzMAxhikpMiIMhpMMCq1gDuMA6LiiKMA48CiKMCq0ADuMiIKBpMMAxhCkpg");
	var mask_graphics_431 = new cjs.Graphics().p("EAAoB5HMiPlBipMAx9imEMiJXhqHMCsUgDwMA6rijkMA5cCjkMCsUADwMiJXBqHMAx8CmEg");
	var mask_graphics_432 = new cjs.Graphics().p("EAAoB5yMiQXBjMMAyOim/MiKHhqsMCtRgDxMA6/ikfMA5wCkfMCtRADxMiKHBqsMAyOCm/g");
	var mask_graphics_433 = new cjs.Graphics().p("EAAoB6IMiQxBjcMAyYinbMiKfhq/MCtugDyMA7Kik8MA57Ck8MCtuADyMiKfBq/MAyYCnbg");
	var mask_graphics_434 = new cjs.Graphics().p("EAAoB6JMiQzBjfMAyYinfMiKihrBMCtygDyMA7Lik9MA58Ck9MCtyADyMiKiBrBMAyYCnfg");
	var mask_graphics_435 = new cjs.Graphics().p("EAAoB56MiQhBjTMAySinKMiKRhq0MCtdgDyMA7DikpMA50CkpMCtdADyMiKRBq0MAySCnKg");
	var mask_graphics_436 = new cjs.Graphics().p("EAAoB5dMiP+Bi6MAyFimhMiJvhqbMCszgDwMA61ikBMA5mCkBMCszADwMiJvBqbMAyFCmhg");
	var mask_graphics_437 = new cjs.Graphics().p("EAAnB4zMiPMBiYMAx0iloMiI/hp1MCr3gDwMA6gijIMA5TCjIMCr3ADwMiI/Bp1MAx0Clog");
	var mask_graphics_438 = new cjs.Graphics().p("EAAoB3/MiOPBhuMAxeikgMiIEhpJMCqtgDtMA6IiiDMA45CiDMCqtADtMiIEBpJMAxeCkgg");
	var mask_graphics_439 = new cjs.Graphics().p("EAAnB3DMiNIBg+MAxGijPMiHBhoUMCpYgDsMA5rigyMA4eCgyMCpYADsMiHBBoUMAxGCjPg");
	var mask_graphics_440 = new cjs.Graphics().p("EAAnB2DMiL7BgIMAwrih2MiF3hnbMCn8gDqMA5LifaMA3+CfaMCn8ADqMiF3BnbMAwrCh2g");
	var mask_graphics_441 = new cjs.Graphics().p("EAAnB0+MiKrBfSMAwPigZMiEqhmgMCmbgDnMA4rid/MA3dCd/MCmcADnMiErBmgMAwQCgZg");
	var mask_graphics_442 = new cjs.Graphics().p("EAAmBz6MiJZBeZMAvzie6MiDchljMCk5gDmMA4JiciMA2+CciMCk5ADmMiDcBljMAvzCe6g");
	var mask_graphics_443 = new cjs.Graphics().p("EAAlBy3MiIJBdiMAvYidfMiCQhkoMCjagDjMA3nibHMA2fCbHMCjaADjMiCRBkoMAvXCdfg");
	var mask_graphics_444 = new cjs.Graphics().p("EAAmBx3MiG/BcwMAu9icJMiBJhjwMCiAgDhMA3LiZzMA2ACZzMCiAADhMiBJBjwMAu9CcJg");
	var mask_graphics_445 = new cjs.Graphics().p("EAAlBw/MiF7BcAMAumia5MiAIhi/MCgvgDgMA2uiYlMA1lCYlMCgvADgMiAIBi/MAumCa5g");
	var mask_graphics_446 = new cjs.Graphics().p("EAAlBwPMiFCBbZMAuRiZ4Mh/RhiVMCfrgDeMA2XiXkMA1OCXkMCfrADeMh/SBiVMAuSCZ4g");
	var mask_graphics_447 = new cjs.Graphics().p("EAAlBvpMiEWBa7MAuCiZFMh+nhhzMCe2gDeMA2FiWyMA08CWyMCe2ADeMh+nBhzMAuCCZFg");
	var mask_graphics_448 = new cjs.Graphics().p("EAAkBvRMiD5BanMAt5iYjMh+MhhfMCeTgDdMA15iWQMA0xCWQMCeUADdMh+MBhfMAt4CYjg");
	var mask_graphics_449 = new cjs.Graphics().p("EAAlBvJMiDvBagMAt1iYYMh+DhhYMCeIgDbMA11iWGMA0sCWGMCeIADbMh+DBhYMAt1CYYg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(385).to({graphics:mask_graphics_385,x:400,y:300}).wait(1).to({graphics:mask_graphics_386,x:400,y:300}).wait(1).to({graphics:mask_graphics_387,x:400,y:300}).wait(1).to({graphics:mask_graphics_388,x:400,y:300}).wait(1).to({graphics:mask_graphics_389,x:400,y:300}).wait(1).to({graphics:mask_graphics_390,x:399.9,y:300}).wait(1).to({graphics:mask_graphics_391,x:399.9,y:300}).wait(1).to({graphics:mask_graphics_392,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_393,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_394,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_395,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_396,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_397,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_398,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_399,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_400,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_401,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_402,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_403,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_404,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_405,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_406,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_407,x:399.9,y:300}).wait(1).to({graphics:mask_graphics_408,x:400,y:300}).wait(1).to({graphics:mask_graphics_409,x:400.2,y:300}).wait(1).to({graphics:mask_graphics_410,x:400.3,y:300}).wait(1).to({graphics:mask_graphics_411,x:400.5,y:300}).wait(1).to({graphics:mask_graphics_412,x:400.7,y:300}).wait(1).to({graphics:mask_graphics_413,x:401,y:300.1}).wait(1).to({graphics:mask_graphics_414,x:401.3,y:300.1}).wait(1).to({graphics:mask_graphics_415,x:401.6,y:300.1}).wait(1).to({graphics:mask_graphics_416,x:401.9,y:300.1}).wait(1).to({graphics:mask_graphics_417,x:402.3,y:300.1}).wait(1).to({graphics:mask_graphics_418,x:402.7,y:300.1}).wait(1).to({graphics:mask_graphics_419,x:403,y:300.1}).wait(1).to({graphics:mask_graphics_420,x:403.3,y:300.1}).wait(1).to({graphics:mask_graphics_421,x:403.6,y:300.1}).wait(1).to({graphics:mask_graphics_422,x:403.8,y:300.1}).wait(1).to({graphics:mask_graphics_423,x:404.1,y:300.2}).wait(1).to({graphics:mask_graphics_424,x:404.3,y:300.2}).wait(1).to({graphics:mask_graphics_425,x:404.4,y:300.1}).wait(1).to({graphics:mask_graphics_426,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_427,x:404.7,y:300.2}).wait(1).to({graphics:mask_graphics_428,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_429,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_430,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_431,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_432,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_433,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_434,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_435,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_436,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_437,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_438,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_439,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_440,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_441,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_442,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_443,x:404.7,y:300.2}).wait(1).to({graphics:mask_graphics_444,x:404.7,y:300.2}).wait(1).to({graphics:mask_graphics_445,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_446,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_447,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_448,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_449,x:404.6,y:300.2}).wait(213));

	// award
	this.instance_3 = new lib.promotion_5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(357,208,0.811,0.811);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(385).to({_off:false},0).wait(277));

	// bg
	this.instance_4 = new lib.promotionBg01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.781,0.781);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(385).to({_off:false},0).wait(277));

	// bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(6).p("AgbAAIA3AA");
	this.shape.setTransform(147.7,306);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(6).p("AgcAAIA4AA");
	this.shape_1.setTransform(147.8,306);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0EE0E0").ss(6).p("AgcAAIA5AA");
	this.shape_2.setTransform(147.9,306);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(6).p("AgdAAIA7AA");
	this.shape_3.setTransform(147.9,306);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(6).p("AgeAAIA9AA");
	this.shape_4.setTransform(148.1,306);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#0EE0E0").ss(6).p("AgfAAIA/AA");
	this.shape_5.setTransform(148.1,306);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0EE0E0").ss(6).p("AggAAIBBAA");
	this.shape_6.setTransform(148.2,306);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0EE0E0").ss(6).p("AghAAIBDAA");
	this.shape_7.setTransform(148.3,306);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0EE0E0").ss(6).p("AgiAAIBFAA");
	this.shape_8.setTransform(148.4,306);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#0EE0E0").ss(6).p("AgjAAIBHAA");
	this.shape_9.setTransform(148.6,306);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#0EE0E0").ss(6).p("AglAAIBLAA");
	this.shape_10.setTransform(148.7,306);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0EE0E0").ss(6).p("AgmAAIBNAA");
	this.shape_11.setTransform(148.9,306);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0EE0E0").ss(6).p("AgoAAIBRAA");
	this.shape_12.setTransform(149,306);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#0EE0E0").ss(6).p("AgqAAIBVAA");
	this.shape_13.setTransform(149.2,306);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#0EE0E0").ss(6).p("AgrAAIBYAA");
	this.shape_14.setTransform(149.4,306);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#0EE0E0").ss(6).p("AguAAIBdAA");
	this.shape_15.setTransform(149.6,306);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#0EE0E0").ss(6).p("AgwAAIBhAA");
	this.shape_16.setTransform(149.9,306);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#0EE0E0").ss(6).p("AgzAAIBnAA");
	this.shape_17.setTransform(150.1,306);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#0EE0E0").ss(6).p("Ag1AAIBrAA");
	this.shape_18.setTransform(150.4,306);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0EE0E0").ss(6).p("Ag4AAIBxAA");
	this.shape_19.setTransform(150.7,306);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#0EE0E0").ss(6).p("Ag7AAIB3AA");
	this.shape_20.setTransform(151,306);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#0EE0E0").ss(6).p("Ag/AAIB/AA");
	this.shape_21.setTransform(151.3,306);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#0EE0E0").ss(6).p("AhCAAICFAA");
	this.shape_22.setTransform(151.7,306);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#0EE0E0").ss(6).p("AhGAAICNAA");
	this.shape_23.setTransform(152.1,306);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0EE0E0").ss(6).p("AhKAAICVAA");
	this.shape_24.setTransform(152.5,306);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0EE0E0").ss(6).p("AhOAAICeAA");
	this.shape_25.setTransform(152.9,306);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0EE0E0").ss(6).p("AhTAAICnAA");
	this.shape_26.setTransform(153.4,306);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0EE0E0").ss(6).p("AhYAAICxAA");
	this.shape_27.setTransform(153.8,306);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0EE0E0").ss(6).p("AhdAAIC7AA");
	this.shape_28.setTransform(154.4,306);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0EE0E0").ss(6).p("AhiAAIDFAA");
	this.shape_29.setTransform(154.9,306);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0EE0E0").ss(6).p("AhoAAIDRAA");
	this.shape_30.setTransform(155.5,306);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0EE0E0").ss(6).p("AhuAAIDdAA");
	this.shape_31.setTransform(156.1,306);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0EE0E0").ss(6).p("Ah0AAIDpAA");
	this.shape_32.setTransform(156.7,306);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0EE0E0").ss(6).p("Ah7AAID3AA");
	this.shape_33.setTransform(157.3,306);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0EE0E0").ss(6).p("AiCAAIEFAA");
	this.shape_34.setTransform(158,306);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0EE0E0").ss(6).p("AiJAAIETAA");
	this.shape_35.setTransform(158.7,306);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0EE0E0").ss(6).p("AiQAAIEhAA");
	this.shape_36.setTransform(159.5,306);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0EE0E0").ss(6).p("AiYAAIExAA");
	this.shape_37.setTransform(160.3,306);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0EE0E0").ss(6).p("AigAAIFBAA");
	this.shape_38.setTransform(161.1,306);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0EE0E0").ss(6).p("AipAAIFTAA");
	this.shape_39.setTransform(161.9,306);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0EE0E0").ss(6).p("AiyAAIFkAA");
	this.shape_40.setTransform(162.8,306);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#0EE0E0").ss(6).p("Ai7AAIF3AA");
	this.shape_41.setTransform(163.7,306);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0EE0E0").ss(6).p("AjFAAIGLAA");
	this.shape_42.setTransform(164.7,306);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0EE0E0").ss(6).p("AjPAAIGfAA");
	this.shape_43.setTransform(165.7,306);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0EE0E0").ss(6).p("AjZAAIGzAA");
	this.shape_44.setTransform(166.7,306);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#0EE0E0").ss(6).p("AjkAAIHIAA");
	this.shape_45.setTransform(167.8,306);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#0EE0E0").ss(6).p("AjvAAIHfAA");
	this.shape_46.setTransform(168.9,306);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#0EE0E0").ss(6).p("Aj6AAIH1AA");
	this.shape_47.setTransform(170.1,306);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#0EE0E0").ss(6).p("AkGAAIINAA");
	this.shape_48.setTransform(171.3,306);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#0EE0E0").ss(6).p("AkTAAIInAA");
	this.shape_49.setTransform(172.5,306);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#0EE0E0").ss(6).p("AkgAAIJAAA");
	this.shape_50.setTransform(173.8,306);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#0EE0E0").ss(6).p("AktAAIJbAA");
	this.shape_51.setTransform(175.1,306);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#0EE0E0").ss(6).p("Ak6AAIJ1AA");
	this.shape_52.setTransform(176.5,306);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#0EE0E0").ss(6).p("AlIAAIKSAA");
	this.shape_53.setTransform(177.9,306);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#0EE0E0").ss(6).p("AlXAAIKvAA");
	this.shape_54.setTransform(179.4,306);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#0EE0E0").ss(6).p("AlmAAILNAA");
	this.shape_55.setTransform(180.9,306);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#0EE0E0").ss(6).p("Al2AAILtAA");
	this.shape_56.setTransform(182.4,306);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#0EE0E0").ss(6).p("AmGAAIMNAA");
	this.shape_57.setTransform(184,306);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#0EE0E0").ss(6).p("AmWAAIMtAA");
	this.shape_58.setTransform(185.7,306);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#0EE0E0").ss(6).p("AmnAAINPAA");
	this.shape_59.setTransform(187.4,306);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#0EE0E0").ss(6).p("Am5AAINzAA");
	this.shape_60.setTransform(189.1,306);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#0EE0E0").ss(6).p("AnLAAIOXAA");
	this.shape_61.setTransform(190.9,306);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#0EE0E0").ss(6).p("AndAAIO7AA");
	this.shape_62.setTransform(192.8,306);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#0EE0E0").ss(6).p("AnwAAIPhAA");
	this.shape_63.setTransform(194.7,306);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#0EE0E0").ss(6).p("AoEAAIQJAA");
	this.shape_64.setTransform(196.6,306);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#0EE0E0").ss(6).p("AoYAAIQxAA");
	this.shape_65.setTransform(198.7,306);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#0EE0E0").ss(6).p("AotAAIRbAA");
	this.shape_66.setTransform(200.7,306);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#0EE0E0").ss(6).p("ApCAAISFAA");
	this.shape_67.setTransform(202.8,306);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#0EE0E0").ss(6).p("ApYAAISxAA");
	this.shape_68.setTransform(205,306);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#0EE0E0").ss(6).p("ApuAAITdAA");
	this.shape_69.setTransform(207.2,306);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#0EE0E0").ss(6).p("AqFAAIULAA");
	this.shape_70.setTransform(209.5,306);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#0EE0E0").ss(6).p("AqcAAIU5AA");
	this.shape_71.setTransform(211.9,306);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#0EE0E0").ss(6).p("Aq0AAIVpAA");
	this.shape_72.setTransform(214.3,306);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#0EE0E0").ss(6).p("ArNAAIWbAA");
	this.shape_73.setTransform(216.7,306);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#0EE0E0").ss(6).p("ArmAAIXNAA");
	this.shape_74.setTransform(219.3,306);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#0EE0E0").ss(6).p("AsAAAIYBAA");
	this.shape_75.setTransform(221.9,306);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#0EE0E0").ss(6).p("AsbAAIY3AA");
	this.shape_76.setTransform(224.5,306);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#0EE0E0").ss(6).p("As2AAIZtAA");
	this.shape_77.setTransform(227.2,306);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#0EE0E0").ss(6).p("AtRAAIajAA");
	this.shape_78.setTransform(230,306);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#0EE0E0").ss(6).p("AtuAAIbdAA");
	this.shape_79.setTransform(232.8,306);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#0EE0E0").ss(6).p("AuLAAIcXAA");
	this.shape_80.setTransform(235.7,306);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#0EE0E0").ss(6).p("AuoAAIdRAA");
	this.shape_81.setTransform(238.7,306);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#0EE0E0").ss(6).p("AvHAAIePAA");
	this.shape_82.setTransform(241.7,306);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#0EE0E0").ss(6).p("AvmAAIfNAA");
	this.shape_83.setTransform(244.8,306);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#0EE0E0").ss(6).p("AwFAAMAgLAAA");
	this.shape_84.setTransform(248,306);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#0EE0E0").ss(6).p("AwmAAMAhNAAA");
	this.shape_85.setTransform(251.2,306);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#0EE0E0").ss(6).p("AxHAAMAiPAAA");
	this.shape_86.setTransform(254.5,306);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#0EE0E0").ss(6).p("AxoAAMAjRAAA");
	this.shape_87.setTransform(257.9,306);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#0EE0E0").ss(6).p("AyLAAMAkXAAA");
	this.shape_88.setTransform(261.3,306);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#0EE0E0").ss(6).p("AyuAAMAldAAA");
	this.shape_89.setTransform(264.8,306);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#0EE0E0").ss(6).p("AzSAAMAmlAAA");
	this.shape_90.setTransform(268.4,306);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#0EE0E0").ss(6).p("Az2AAMAntAAA");
	this.shape_91.setTransform(272.1,306);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#0EE0E0").ss(6).p("A0bAAMAo4AAA");
	this.shape_92.setTransform(275.8,306);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#0EE0E0").ss(6).p("A1CAAMAqEAAA");
	this.shape_93.setTransform(279.6,306);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#0EE0E0").ss(6).p("A1nAAMArPAAA");
	this.shape_94.setTransform(283.3,306);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#0EE0E0").ss(6).p("A2LAAMAsXAAA");
	this.shape_95.setTransform(287,306);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#0EE0E0").ss(6).p("A2vAAMAtfAAA");
	this.shape_96.setTransform(290.6,306);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#0EE0E0").ss(6).p("A3SAAMAulAAA");
	this.shape_97.setTransform(294.1,306);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#0EE0E0").ss(6).p("A31AAMAvrAAA");
	this.shape_98.setTransform(297.5,306);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#0EE0E0").ss(6).p("A4XAAMAwvAAA");
	this.shape_99.setTransform(300.9,306);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#0EE0E0").ss(6).p("A44AAMAxxAAA");
	this.shape_100.setTransform(304.2,306);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#0EE0E0").ss(6).p("A5YAAMAyxAAA");
	this.shape_101.setTransform(307.4,306);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#0EE0E0").ss(6).p("A54AAMAzwAAA");
	this.shape_102.setTransform(310.6,306);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#0EE0E0").ss(6).p("A6XAAMA0vAAA");
	this.shape_103.setTransform(313.7,306);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#0EE0E0").ss(6).p("A61AAMA1rAAA");
	this.shape_104.setTransform(316.7,306);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#0EE0E0").ss(6).p("A7SAAMA2lAAA");
	this.shape_105.setTransform(319.7,306);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#0EE0E0").ss(6).p("A7vAAMA3fAAA");
	this.shape_106.setTransform(322.6,306);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#0EE0E0").ss(6).p("A8MAAMA4ZAAA");
	this.shape_107.setTransform(325.4,306);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#0EE0E0").ss(6).p("A8oAAMA5RAAA");
	this.shape_108.setTransform(328.2,306);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#0EE0E0").ss(6).p("A9DAAMA6HAAA");
	this.shape_109.setTransform(330.9,306);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#0EE0E0").ss(6).p("A9dAAMA67AAA");
	this.shape_110.setTransform(333.6,306);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#0EE0E0").ss(6).p("A93AAMA7vAAA");
	this.shape_111.setTransform(336.1,306);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#0EE0E0").ss(6).p("A+QAAMA8hAAA");
	this.shape_112.setTransform(338.7,306);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#0EE0E0").ss(6).p("A+pAAMA9TAAA");
	this.shape_113.setTransform(341.1,306);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#0EE0E0").ss(6).p("A/BAAMA+DAAA");
	this.shape_114.setTransform(343.5,306);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#0EE0E0").ss(6).p("A/YAAMA+xAAA");
	this.shape_115.setTransform(345.9,306);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#0EE0E0").ss(6).p("A/vAAMA/fAAA");
	this.shape_116.setTransform(348.2,306);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#0EE0E0").ss(6).p("EggGAAAMBANAAA");
	this.shape_117.setTransform(350.4,306);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#0EE0E0").ss(6).p("EggbAAAMBA3AAA");
	this.shape_118.setTransform(352.6,306);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#0EE0E0").ss(6).p("EggxAAAMBBjAAA");
	this.shape_119.setTransform(354.7,306);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#0EE0E0").ss(6).p("EghFAAAMBCLAAA");
	this.shape_120.setTransform(356.8,306);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#0EE0E0").ss(6).p("EghZAAAMBCzAAA");
	this.shape_121.setTransform(358.8,306);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#0EE0E0").ss(6).p("EghtAAAMBDbAAA");
	this.shape_122.setTransform(360.7,306);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#0EE0E0").ss(6).p("EgiAAAAMBEBAAA");
	this.shape_123.setTransform(362.6,306);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#0EE0E0").ss(6).p("EgiSAAAMBElAAA");
	this.shape_124.setTransform(364.5,306);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#0EE0E0").ss(6).p("EgikAAAMBFJAAA");
	this.shape_125.setTransform(366.3,306);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#0EE0E0").ss(6).p("Egi2AAAMBFtAAA");
	this.shape_126.setTransform(368,306);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#0EE0E0").ss(6).p("EgjHAAAMBGPAAA");
	this.shape_127.setTransform(369.7,306);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#0EE0E0").ss(6).p("EgjXAAAMBGvAAA");
	this.shape_128.setTransform(371.4,306);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#0EE0E0").ss(6).p("EgjnAAAMBHPAAA");
	this.shape_129.setTransform(373,306);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#0EE0E0").ss(6).p("Egj3AAAMBHvAAA");
	this.shape_130.setTransform(374.5,306);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#0EE0E0").ss(6).p("EgkGAAAMBINAAA");
	this.shape_131.setTransform(376,306);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#0EE0E0").ss(6).p("EgkVAAAMBIqAAA");
	this.shape_132.setTransform(377.5,306);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#0EE0E0").ss(6).p("EgkjAAAMBJHAAA");
	this.shape_133.setTransform(378.9,306);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#0EE0E0").ss(6).p("EgkwAAAMBJhAAA");
	this.shape_134.setTransform(380.3,306);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#0EE0E0").ss(6).p("Egk+AAAMBJ9AAA");
	this.shape_135.setTransform(381.6,306);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#0EE0E0").ss(6).p("EglKAAAMBKVAAA");
	this.shape_136.setTransform(382.9,306);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#0EE0E0").ss(6).p("EglXAAAMBKvAAA");
	this.shape_137.setTransform(384.1,306);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#0EE0E0").ss(6).p("EgljAAAMBLHAAA");
	this.shape_138.setTransform(385.3,306);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#0EE0E0").ss(6).p("EgluAAAMBLdAAA");
	this.shape_139.setTransform(386.5,306);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#0EE0E0").ss(6).p("Egl6AAAMBL1AAA");
	this.shape_140.setTransform(387.6,306);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#0EE0E0").ss(6).p("EgmEAAAMBMJAAA");
	this.shape_141.setTransform(388.7,306);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#0EE0E0").ss(6).p("EgmPAAAMBMfAAA");
	this.shape_142.setTransform(389.7,306);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#0EE0E0").ss(6).p("EgmZAAAMBMzAAA");
	this.shape_143.setTransform(390.7,306);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#0EE0E0").ss(6).p("EgmiAAAMBNFAAA");
	this.shape_144.setTransform(391.7,306);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#0EE0E0").ss(6).p("EgmrAAAMBNXAAA");
	this.shape_145.setTransform(392.6,306);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#0EE0E0").ss(6).p("Egm0AAAMBNpAAA");
	this.shape_146.setTransform(393.5,306);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#0EE0E0").ss(6).p("Egm9AAAMBN7AAA");
	this.shape_147.setTransform(394.3,306);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#0EE0E0").ss(6).p("EgnFAAAMBOLAAA");
	this.shape_148.setTransform(395.2,306);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#0EE0E0").ss(6).p("EgnNAAAMBObAAA");
	this.shape_149.setTransform(395.9,306);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#0EE0E0").ss(6).p("EgnUAAAMBOpAAA");
	this.shape_150.setTransform(396.7,306);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#0EE0E0").ss(6).p("EgncAAAMBO5AAA");
	this.shape_151.setTransform(397.4,306);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#0EE0E0").ss(6).p("EgniAAAMBPFAAA");
	this.shape_152.setTransform(398.1,306);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#0EE0E0").ss(6).p("EgnpAAAMBPTAAA");
	this.shape_153.setTransform(398.7,306);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#0EE0E0").ss(6).p("EgnvAAAMBPfAAA");
	this.shape_154.setTransform(399.4,306);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#0EE0E0").ss(6).p("Egn1AAAMBPrAAA");
	this.shape_155.setTransform(400,306);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#0EE0E0").ss(6).p("Egn7AAAMBP3AAA");
	this.shape_156.setTransform(400.5,306);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#0EE0E0").ss(6).p("EgoAAAAMBQBAAA");
	this.shape_157.setTransform(401.1,306);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#0EE0E0").ss(6).p("EgoFAAAMBQLAAA");
	this.shape_158.setTransform(401.6,306);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#0EE0E0").ss(6).p("EgoKAAAMBQVAAA");
	this.shape_159.setTransform(402.1,306);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#0EE0E0").ss(6).p("EgoPAAAMBQeAAA");
	this.shape_160.setTransform(402.5,306);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#0EE0E0").ss(6).p("EgoTAAAMBQnAAA");
	this.shape_161.setTransform(402.9,306);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#0EE0E0").ss(6).p("EgoXAAAMBQvAAA");
	this.shape_162.setTransform(403.3,306);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#0EE0E0").ss(6).p("EgobAAAMBQ3AAA");
	this.shape_163.setTransform(403.7,306);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#0EE0E0").ss(6).p("EgoeAAAMBQ9AAA");
	this.shape_164.setTransform(404.1,306);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#0EE0E0").ss(6).p("EgoiAAAMBRFAAA");
	this.shape_165.setTransform(404.4,306);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#0EE0E0").ss(6).p("EgolAAAMBRLAAA");
	this.shape_166.setTransform(404.7,306);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#0EE0E0").ss(6).p("EgooAAAMBRRAAA");
	this.shape_167.setTransform(405,306);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#0EE0E0").ss(6).p("EgoqAAAMBRWAAA");
	this.shape_168.setTransform(405.3,306);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#0EE0E0").ss(6).p("EgotAAAMBRbAAA");
	this.shape_169.setTransform(405.6,306);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#0EE0E0").ss(6).p("EgovAAAMBRfAAA");
	this.shape_170.setTransform(405.8,306);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#0EE0E0").ss(6).p("EgoyAAAMBRkAAA");
	this.shape_171.setTransform(406,306);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#0EE0E0").ss(6).p("Ego0AAAMBRpAAA");
	this.shape_172.setTransform(406.2,306);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#0EE0E0").ss(6).p("Ego2AAAMBRtAAA");
	this.shape_173.setTransform(406.4,306);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#0EE0E0").ss(6).p("Ego3AAAMBRvAAA");
	this.shape_174.setTransform(406.6,306);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#0EE0E0").ss(6).p("Ego5AAAMBRzAAA");
	this.shape_175.setTransform(406.7,306);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#0EE0E0").ss(6).p("Ego6AAAMBR1AAA");
	this.shape_176.setTransform(406.9,306);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#0EE0E0").ss(6).p("Ego7AAAMBR3AAA");
	this.shape_177.setTransform(407,306);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#0EE0E0").ss(6).p("Ego8AAAMBR5AAA");
	this.shape_178.setTransform(407.1,306);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#0EE0E0").ss(6).p("Ego9AAAMBR7AAA");
	this.shape_179.setTransform(407.2,306);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#0EE0E0").ss(6).p("Ego+AAAMBR9AAA");
	this.shape_180.setTransform(407.3,306);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#0EE0E0").ss(6).p("Ego/AAAMBR/AAA");
	this.shape_181.setTransform(407.4,306);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#0EE0E0").ss(6).p("EgpAAAAMBSBAAA");
	this.shape_182.setTransform(407.4,306);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#0EE0E0").ss(6).p("EgpBAAAMBSCAAA");
	this.shape_183.setTransform(407.5,306);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#0EE0E0").ss(6).p("EgpBAAAMBSDAAA");
	this.shape_184.setTransform(407.6,306);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#0EE0E0").ss(6).p("EgpCAAAMBSFAAA");
	this.shape_185.setTransform(407.6,306);
	this.shape_185._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},102).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:147.9}}]},1).to({state:[{t:this.shape_3,p:{x:148}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182,p:{x:407.4}}]},1).to({state:[{t:this.shape_182,p:{x:407.5}}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_185}]},1).wait(355));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(102).to({_off:false},0).wait(6).to({x:147.8},0).wait(2).to({_off:true},1).wait(551));
	this.timeline.addTween(cjs.Tween.get(this.shape_185).wait(299).to({_off:false},0).wait(2).to({x:407.7},0).wait(361));

	// t
	this.instance_5 = new lib.pencapaianTxt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(303.7,274.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).wait(615));

	// star
	this.instance_6 = new lib.star("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(116.6,295.7,0.045,0.047,0,0,0,1.1,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:360},21,cjs.Ease.backInOut).wait(616));

	// meter
	this.instance_7 = new lib.barBg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(400,630.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:296.1},29,cjs.Ease.cubicInOut).wait(633));

	// bg
	this.instance_8 = new lib.starfieldbg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(662));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(390,290,820,663.9);
// library properties:
lib.properties = {
	id: '134DC6FF3421C64FBDE34F1D4B89988D',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/end/Bitmap2.png?1524646109804", id:"Bitmap2"},
		{src:"images/end/Bitmap4.png?1524646109804", id:"Bitmap4"},
		{src:"images/end/promotion_5.png?1524646109804", id:"promotion_5"},
		{src:"images/end/promotionBg01.jpg?1524646109804", id:"promotionBg01"},
		{src:"images/end/starfieldbg.jpg?1524646109804", id:"starfieldbg"},
		{src:"sounds/stdClick.mp3?1524646109804", id:"stdClick"},
		{src:"sounds/win.mp3?1524646109804", id:"win"}
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
an.compositions['134DC6FF3421C64FBDE34F1D4B89988D'] = {
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