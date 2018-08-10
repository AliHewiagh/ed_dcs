(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,331);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,331);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,331);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,331);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,331,331);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,481,59);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,550);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,45);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1900,737);


(lib.promotionBg01 = function() {
	this.initialize(img.promotionBg01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.tapirfriendly = function() {
	this.initialize(img.tapirfriendly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,340);// helper functions:

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


(lib.Symbol4 = function(mode,startPosition,loop) {
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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgMAMIACgXIAXAAIgCAXg");
	this.shape.setTransform(81.1,16.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AghA5IABgPIAsAAIACgaIgMAHIgVAAIgSgLIAGg5IAUgLIAWAAIAKAIIAMgIIAFAAIgLBmIgUALgAgVAJIAkAAIAFgyIgkAAg");
	this.shape_1.setTransform(74,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AAPApIAHhCIglAAIgGBCIgQAAIAJhRIALAAIAEAIIAMgIIAVAAIARALIgGBGg");
	this.shape_2.setTransform(64.5,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_3.setTransform(55.3,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgZAoIAIhPIALAAIADAGIAMgGIASAAIgCAOIgdAAIgGBBg");
	this.shape_4.setTransform(48,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_5.setTransform(39.9,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAPA7IgVgiIgOAPIgBATIgQAAIAMh1IAQAAIgIBNIAAAAIAkgoIATAAIgjAjIAfAtg");
	this.shape_6.setTransform(31.4,12.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgQApIgSgLIAGg7IAUgLIAZAAIASALIgEAjIgvAAIgCAUIAvAAIgCAPgAgOgHIAfAAIACgSIggAAg");
	this.shape_7.setTransform(22.3,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AggAoIABgOIAsAAIACgTIgZAAIgSgKIADgZIATgLIAnAAIgBAOIgqAAIgCASIAZAAIASAKIgDAaIgUALg");
	this.shape_8.setTransform(13.5,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_9.setTransform(0.6,14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAQA7IgDgHIgMAHIgXAAIgRgLIAGg7IAUgLIAXAAIAKAHIAFgrIAPAAIgMB1gAgYAtIAmAAIAGg1IgmAAg");
	this.shape_10.setTransform(-8.6,12.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AAPApIAHhCIglAAIgGBCIgQAAIAJhRIALAAIAEAIIAMgIIAVAAIARALIgGBGg");
	this.shape_11.setTransform(-18.3,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_12.setTransform(-27.5,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AAAA7IgQgLIALhqIAOAAIgKBmIATAAIgCAPg");
	this.shape_13.setTransform(-38.6,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_14.setTransform(-45.9,14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AABAzIgQgKIAFg3IgOAAIABgOIAPAAIABgNIAQgJIgDAWIATAAIgBAOIgTAAIgFAzIATAAIgCAOg");
	this.shape_15.setTransform(-53.6,12.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgNA7IAIhQIAOAAIgIBQgAgEgoIACgSIAQAAIgCASg");
	this.shape_16.setTransform(-58.9,12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AghA5IABgPIAsAAIACgaIgMAHIgVAAIgSgLIAGg5IAUgLIAWAAIAKAIIAMgIIAFAAIgLBmIgUALgAgVAJIAkAAIAFgyIgkAAg");
	this.shape_17.setTransform(-65.8,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgNA7IAIhQIAOAAIgIBQgAgEgoIACgSIAQAAIgCASg");
	this.shape_18.setTransform(-72.3,12.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AAQA7IgDgHIgMAHIgXAAIgRgLIAGg7IAUgLIAXAAIAKAHIAFgrIAPAAIgMB1gAgYAtIAmAAIAGg1IgmAAg");
	this.shape_19.setTransform(-79.1,12.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_20.setTransform(47.6,-10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAPApIAGhDIgkAAIgGBDIgPAAIAIhQIAMAAIACAHIANgHIAVAAIARAKIgHBGg");
	this.shape_21.setTransform(38.2,-10.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_22.setTransform(29,-10.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgPAoIgRgLIAGg5IATgLIAoAAIgBAOIgsAAIgEAzIArAAIgBAOg");
	this.shape_23.setTransform(20.5,-10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAPApIAHhDIglAAIgGBDIgPAAIAIhQIALAAIAEAHIAMgHIAVAAIARAKIgGBGg");
	this.shape_24.setTransform(11.4,-10.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgQApIgSgLIAGg7IAUgKIAZAAIASAKIgEAjIgvAAIgCAUIAvAAIgCAPgAgOgHIAfAAIACgTIggAAg");
	this.shape_25.setTransform(2.3,-10.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAAA7IgRgLIALhpIAPAAIgJBlIARAAIgBAPg");
	this.shape_26.setTransform(-4.4,-12.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AAPApIAHhDIglAAIgGBDIgQAAIAJhQIALAAIAEAHIAMgHIAVAAIARAKIgGBGg");
	this.shape_27.setTransform(-16,-10.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_28.setTransform(-25.2,-10.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AAPA7IgVgiIgOAPIgBATIgQAAIAMh0IAQAAIgIBLIAAAAIAkgnIATAAIgjAjIAfAtg");
	this.shape_29.setTransform(-33.7,-12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AABAzIgQgKIAFg3IgOAAIABgOIAPAAIABgNIAQgJIgDAWIATAAIgBAOIgTAAIgFAzIATAAIgCAOg");
	this.shape_30.setTransform(-41.5,-12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_31.setTransform(-49.5,-10.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgnA4IAMhvIALAAIADAHIAMgHIAYAAIARAKIgGA8IgUAKIgXAAIgLgHIgEAmgAgTALIAlAAIAGg1IgmAAg");
	this.shape_32.setTransform(-59.1,-9.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_33.setTransform(-68.2,-10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AguA4IALhvIBBAAIARALIgJBZIgUALgAgdAqIAzAAIAJhSIgzAAg");
	this.shape_34.setTransform(-78.4,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AAJAoIgKg8IAAAAIgYA8IgSAAIgMhPIAPAAIAIA+IABAAIAYg+IAPAAIALA+IABAAIAVg+IAPAAIgcBPg");
	this.shape_35.setTransform(43.6,14);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgTApIgRgLIAGg7IAUgLIAeAAIARALIgGA7IgUALgAgVAbIAkAAIAGg1IgkAAg");
	this.shape_36.setTransform(32.5,14);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AAPApIAHhCIglAAIgGBCIgPAAIAIhRIALAAIAEAIIAMgIIAVAAIARALIgGBGg");
	this.shape_37.setTransform(23.1,14);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgLA7IgKgHIgMAHIgFAAIANh1IAPAAIgEArIAMgHIAXAAIASALIgHA7IgUALgAgVAtIAmAAIAGg1IgmAAg");
	this.shape_38.setTransform(-27.4,12.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AARAoIgCgHIgNAHIgVAAIgSgKIAIhGIAPAAIgHBCIAkAAIAHhCIAPAAIgIBQg");
	this.shape_39.setTransform(-31.3,-10.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgTApIgRgLIAGg7IAUgLIAeAAIARALIgGA7IgUALgAgVAbIAkAAIAGg1IgkAAg");
	this.shape_40.setTransform(-40.7,-10.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AggA4IASgkIgXhLIAPAAIARA4IAcg4IAPAAIg3Bvg");
	this.shape_41.setTransform(-49.2,-9.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgaA5IgRgLIAJhbIAUgLIApAAIASALIgDASIgPAAIABgPIguAAIgJBVIAuAAIADgcIgTAAIACgPIAiAAIgEAuIgUALg");
	this.shape_42.setTransform(-78.5,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-41.5}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:2.3}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-8.6}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:22.3}},{t:this.shape_6},{t:this.shape_5,p:{x:39.9}},{t:this.shape_4,p:{x:48,y:14}},{t:this.shape_3,p:{x:55.3}},{t:this.shape_2},{t:this.shape_1,p:{x:74}},{t:this.shape,p:{x:81.1}}]}).to({state:[{t:this.shape_42},{t:this.shape_25,p:{x:-68.9}},{t:this.shape_30,p:{x:-61}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_4,p:{x:-23.2,y:-10.8}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_5,p:{x:-45.9}},{t:this.shape_13},{t:this.shape_38},{t:this.shape_3,p:{x:-18}},{t:this.shape_10,p:{x:-8.4}},{t:this.shape_1,p:{x:0.8}},{t:this.shape_7,p:{x:9.9}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape,p:{x:51.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-25.8,173.1,51.7);


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
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 483;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-241.5,-11.4);

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
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 483;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-241.5,-11.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy4, new cjs.Rectangle(-243.5,-13.4,487.2,26.9), null);


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//this.mcCont.visible = false;
		var _this = this;
		var myStr = "You've been awarded the \n";
		var myRank = Math.round(this.parent.parent.myOverallScore);
		if (myRank==5){
			myStr += "Stars of Grand Neo.";
		} else if (myRank==4){
			myStr += "Stars of Neo.";
		} else if (myRank==3){
			myStr += "Stars of Moffious.";
		} else if (myRank==2){
			myStr += "Stars of Meduka.";
		} else {
			myStr += "Star of Newton.";
		}
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
	this.myTxt = new cjs.Text("You've been awarded the\nStar of Newton.", "italic 19px 'Quantico'", "#FFFFFF");
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
		var myStr = "Anda telah dianugerahkan \n";
		var myRank = Math.round(this.parent.parent.myOverallScore);
		if (myRank==5){
			myStr += "Stars of Grand Neo.";
		} else if (myRank==4){
			myStr += "Stars of Neo.";
		} else if (myRank==3){
			myStr += "Stars of Moffious.";
		} else if (myRank==2){
			myStr += "Stars of Meduka.";
		} else {
			myStr += "Star of Newton.";
		}
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
	this.myTxt = new cjs.Text("Anda telah dianugerahkan\nBintang Newt.", "italic 19px 'Quantico'", "#FFFFFF");
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


(lib.mcBadges = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(Math.round(this.parent.myOverallScore));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_1
	this.instance = new lib._1();
	this.instance.parent = this;
	this.instance.setTransform(-114.9,-114.9,0.695,0.695);

	this.instance_1 = new lib._2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115,-115,0.695,0.695);

	this.instance_2 = new lib._3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-115,-115,0.695,0.695);

	this.instance_3 = new lib._4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-115,-115,0.695,0.695);

	this.instance_4 = new lib._5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-115,-115,0.695,0.695);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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


(lib.btnWideBgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-45.1,-23.7,-41.1,18.2).s().p("AL8CZIg5AAIt1AAIgjAAIuDAAIAHheIBGhFIgRgRIAGgFIgrgrIAJhNINjAAIAjAAIN1AAIA5AAIFdAAIgVExg");
	this.shape.setTransform(-1.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-43.7,-21.4,-43.7,18.1).s().p("AL5DWIg5AAIt2AAIgjAAIu7AAIAFgjIAAAAIAPikIA2g1IgqgrIAPiEIOMAAIAjAAIN2AAIA5AAIGcAAIguGrgAxRhdIAMANIArAqIgGAGIhAA/IgKB1IAOAAIODAAIAjAAIN2AAIA5AAIFHAAIAMAAIAjlIIl2AAIg5AAIt2AAIgjAAItuAAg");
	this.shape_1.setTransform(-0.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#671D1F").s().p("AQ+CkIAWkxIldAAIg5AAIt2AAIgjAAItjAAIgJBOIgMgNIAKhXINuAAIAjAAIN2AAIA5AAIF2AAIgjFHgAxsCkIAKh0IBAhAIARAQIhFBGIgIBeg");
	this.shape_2.setTransform(-0.7,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("ALWDWIg5AAIt2AAIgjAAIuYAAIAFgjIAAAAIAPikIA2g1IgqgrIAPiEINpAAIAjAAIN2AAIA5AAIG/AAIguGrg");
	this.shape_3.setTransform(2.6,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-21.4,238,48.6);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#252525").s().p("EgrYAAZIAFgxMBWsAAAIgFAxg");
	this.shape.setTransform(22.5,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("EgrZAAcIAGg3MBWsAAAIgFA3g");
	this.shape_1.setTransform(23.1,8.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F4F4F").s().p("An9B6IAXjzIOsAAIA4CAIgmBzg");
	this.shape_2.setTransform(-253.2,-7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F3F3F").s().p("EgoiACEIggghQgMgLgQAAIgBAAQgQAAgMALIAAAAIggAhIj9AAIhPhQIAGhDIPWAAIAmhzIAXA1QAFALAKAGQAKAHAMAAMBNiAAAIAvAwIgNCJg");
	this.shape_3.setTransform(0,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("EgozADsIgsgsIgrAsIkfAAIhphoIAklvIPrAAIBaDOMBNyAAAIBKBIIgTDBg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309,-23.6,618.1,47.2);


(lib.barAchieve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(6).p("Eg1GAAAMBqNAAA");
	this.shape.setTransform(-339.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.barAchieve, new cjs.Rectangle(-682.7,-3,685.7,6), null);


(lib.bannerDigital = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-950,-369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-950,-369,1900,737);


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
p.nominalBounds = new cjs.Rectangle(-243.5,-13.4,487.2,26.9);


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


(lib.btnHorizontal1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape.setTransform(76,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBGIADgXIAxAAIADgbIgOAIIgaAAIgWgOIAHhGIAZgNIAZAAIANAIIAQgIIANAAIgOB+IgYANgAgUAEIAjAAIAFgyIgjAAg");
	this.shape_1.setTransform(64.4,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBJIgEgIIgOAIIgaAAIgWgNIAJhKIAZgNIAZAAIANAIIAGg1IAbAAIgPCRgAgXAyIAjAAIAGg2IgjAAg");
	this.shape_2.setTransform(52.5,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_3.setTransform(40.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBJIgNgIIgPAIIgNAAIAPiRIAbAAIgFA1IAOgIIAaAAIAWANIgIBKIgZANgAgTAyIAjAAIAGg2IgjAAg");
	this.shape_4.setTransform(28.2,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_5.setTransform(11.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AANBJIAJhMIgjAAIgJBMIgbAAIAPiRIAcAAIgGA1IAOgIIAbAAIAVAOIgJBWg");
	this.shape_6.setTransform(-0.4,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAGg+IgSAAIADgYIASAAIACgRIAbgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_7.setTransform(-10.5,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_8.setTransform(-24.3,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_9.setTransform(-34.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhyIAYgNIA4AAIAWANIgDAdIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_10.setTransform(-46.6,-2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AglBOQgRgIgNgMQgNgNgHgSQgIgSAAgTIAAg5QAAgIAFgFQAFgFAIAAICbAAQAIAAAFAFQAFAFAAAIIAAA5QAAATgIASQgHASgNANQgNAMgRAIQgTAIgTAAQgSAAgTgIgAg1ggQgEAEAAAFQAAAGAEAEIAtAqQADAEAFAAQAGAAAEgEIAtgqQADgEAAgGQAAgFgDgEQgEgEgFAAQgGAAgEAEIgkAiIgjgiQgEgEgFAAQgFAAgEAEg");
	this.shape_11.setTransform(-68.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ARQAAItNAAI1SAA");
	this.shape_12.setTransform(-2.2,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFF00").ss(1,2,0,3).p("AxgCkIgOAAIAKh0IBGhFIg3g3IAKhXMAi5AAAIgiFHIgMAA");
	this.shape_13.setTransform(-0.5,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,153,0,0.6)").s().p("AxvDMQgMAAgJgIQgGgHgCgIIgCgDQgEgIABgIIALh8QAAgLAJgIIAugtIgggfQgFgFgDgHQgCgHABgGIALhfQABgLAIgHQAJgIALAAMAjEAAAQAIAAAIAEQAHAFAEAIQADAHAAAJIgkFSIgBAGIAAAAQAAANgJAJQgJAIgMAAgAxZi4QgFADgBAGIgKBeIAAAHQABADADADIArAqIg5A4QgEAEAAAFIgLB8QgBAEACAEIAEAEQAAAGAEAEQAEAEAGAAMAi+AAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgBgEQgDgEgDgCQgEgCgEAAMgjEAAAQgFAAgEAEgAxXCBIAHhNIBEhEQAEgEAAgGQAAgHgEgEIg0gzIAHg8MAiRAAAIgdEVgAwwheIAuAuQAJAJAAANQAAAMgIAJIhBBAIgFA3MAh0AAAIAbj3Mgh0AAAg");
	this.shape_14.setTransform(-0.5,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,153,0,0.4)").s().p("AxvDbQgSAAgNgNQgJgIgDgKIgBgDQgGgMABgNIALh7QABgRAMgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQABgRANgMQANgLARAAMAjEAAAQANAAALAHQALAGAFAMQAGAMgBANIgkFRIgBAHQgBASgMAMQgOANgSAAgAxkjDQgIAHgBALIgLBfQgBAGACAHQADAHAFAFIAgAfIgvAtQgIAIAAALIgLB8QgBAIAEAIIACADQACAIAGAHQAJAIAMAAMAi+AAAQAMAAAJgIQAJgJAAgNIAAAAIABgGIAklSQAAgJgDgHQgEgIgHgFQgIgEgIAAMgjEAAAQgLAAgJAIgAxHByIAFg3IBBhAQAIgJAAgMQAAgNgJgJIguguIAEgnMAh0AAAIgbD3gAwhhjIAqApQANANAAATQAAASgNANIg9A8IgCAiMAhWAAAIAXjZMghVAAAg");
	this.shape_15.setTransform(-0.5,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,153,0,0.2)").s().p("AxvDqQgZAAgRgRQgLgLgEgNIgBgCQgHgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgFgNACgOIALheQACgXARgPQARgPAXAAMAjEAAAQARAAAPAJQAOAJAIAQQAHAPgBARIgkFSIgBAIQgCAWgQAQQgRARgZAAgAxujPQgNAMgBARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgMALgBARIgLB7QgBANAGAMIABADQADAKAJAIQANANASAAMAi+AAAQASAAAOgNQAMgMABgSIABgHIAklRQABgNgGgMQgFgMgLgGQgLgHgNAAMgjEAAAQgRAAgNALgAw2BjIACgiIA9g8QANgNAAgSQAAgTgNgNIgqgpIADgTMAhVAAAIgXDZgAvthFQASASAAAZQAAAYgRARIhFBFMAhDAAAIAUi7Mgg1AAAg");
	this.shape_16.setTransform(-0.5,-1.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,153,0,0.8)").s().p("AxvC9QgFAAgFgEQgEgEAAgGIgEgEQgBgEAAgEIALh8QAAgFAFgEIA4g4IgrgqQgDgDAAgDIgBgHIAKheQABgGAFgDQAEgEAGAAMAjDAAAQAEAAAEACQADACADAEQABAEAAAEIgjFSIgCAFIAAADQAAAGgFAFQgEAEgGAAgAxAhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgGBNMAiRAAAIAdkVMgiRAAAg");
	this.shape_17.setTransform(-0.5,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBgcopy("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-21.4,238,48.6);


(lib.btnHorizontal1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape.setTransform(95.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAyIAJhMIgiAAIgIBMIgbAAIAKhjIAXAAIAEAIIAOgIIAZAAIAVANIgJBWg");
	this.shape_1.setTransform(83.5,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(71.7,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAyIgWgOIAHhHIAZgOIA1AAIgCAXIgxAAIgGA1IAxAAIgCAXg");
	this.shape_3.setTransform(60.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMAyIAIhMIghAAIgIBMIgbAAIALhjIAWAAIAEAIIAOgIIAZAAIAVANIgJBWg");
	this.shape_4.setTransform(49.4,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_5.setTransform(37.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB6IAUAAIgCAXg");
	this.shape_6.setTransform(29.2,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAyIAIhMIghAAIgJBMIgbAAIAKhjIAXAAIAEAIIAOgIIAZAAIAVANIgJBWg");
	this.shape_7.setTransform(14.4,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_8.setTransform(2.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAOBJIgVgjIgNANIgCAWIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoArIAkA4g");
	this.shape_9.setTransform(-8.4,-2.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_10.setTransform(-18.5,-1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_11.setTransform(-28.9,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzBGIAPiLIAWAAIAEAIIAOgIIAbAAIAVANIgIBKIgYANIgZAAIgOgIIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape_12.setTransform(-41.2,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_13.setTransform(-52.9,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVANIgLBwIgZAOgAgdAuIA0AAIAJhbIg0AAg");
	this.shape_14.setTransform(-65.9,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AglBOQgRgIgNgMQgNgNgIgSQgHgSAAgTIAAg5QAAgIAFgFQAGgFAGAAICdAAQAHAAAFAFQAFAFAAAIIAAA5QAAATgIASQgHASgNANQgMAMgTAIQgSAIgTAAQgTAAgSgIgAg2ggQgDAEAAAFQAAAGAEAEIAtAqQADAEAFAAQAFAAAEgEIAtgqQAFgEAAgGQAAgFgFgEQgDgEgGAAQgFAAgEAEIgkAiIgjgiQgEgEgFAAQgGAAgEAEg");
	this.shape_15.setTransform(-88.5,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ARQAAItNAAI1SAA");
	this.shape_16.setTransform(-2.2,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFF00").ss(1,2,0,3).p("AxgCkIgOAAIAKh0IBGhFIg3g3IAKhXMAi5AAAIgiFHIgMAA");
	this.shape_17.setTransform(-0.5,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,153,0,0.6)").s().p("AxvDMQgMAAgJgIQgGgHgCgIIgCgDQgEgIABgIIALh8QAAgLAJgIIAugtIgggfQgFgFgDgHQgCgHABgGIALhfQABgLAIgHQAJgIALAAMAjEAAAQAIAAAIAEQAHAFAEAIQADAHAAAJIgkFSIgBAGIAAAAQAAANgJAJQgJAIgMAAgAxZi4QgFADgBAGIgKBeIAAAHQABADADADIArAqIg5A4QgEAEAAAFIgLB8QgBAEACAEIAEAEQAAAGAEAEQAEAEAGAAMAi+AAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgBgEQgDgEgDgCQgEgCgEAAMgjEAAAQgFAAgEAEgAxXCBIAHhNIBEhEQAEgEAAgGQAAgHgEgEIg0gzIAHg8MAiRAAAIgdEVgAwwheIAuAuQAJAJAAANQAAAMgIAJIhBBAIgFA3MAh0AAAIAbj3Mgh0AAAg");
	this.shape_18.setTransform(-0.5,-1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,153,0,0.4)").s().p("AxvDbQgSAAgNgNQgJgIgDgKIgBgDQgGgMABgNIALh7QABgRAMgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQABgRANgMQANgLARAAMAjEAAAQANAAALAHQALAGAFAMQAGAMgBANIgkFRIgBAHQgBASgMAMQgOANgSAAgAxkjDQgIAHgBALIgLBfQgBAGACAHQADAHAFAFIAgAfIgvAtQgIAIAAALIgLB8QgBAIAEAIIACADQACAIAGAHQAJAIAMAAMAi+AAAQAMAAAJgIQAJgJAAgNIAAAAIABgGIAklSQAAgJgDgHQgEgIgHgFQgIgEgIAAMgjEAAAQgLAAgJAIgAxHByIAFg3IBBhAQAIgJAAgMQAAgNgJgJIguguIAEgnMAh0AAAIgbD3gAwhhjIAqApQANANAAATQAAASgNANIg9A8IgCAiMAhWAAAIAXjZMghVAAAg");
	this.shape_19.setTransform(-0.5,-1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,153,0,0.2)").s().p("AxvDqQgZAAgRgRQgLgLgEgNIgBgCQgHgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgFgNACgOIALheQACgXARgPQARgPAXAAMAjEAAAQARAAAPAJQAOAJAIAQQAHAPgBARIgkFSIgBAIQgCAWgQAQQgRARgZAAgAxujPQgNAMgBARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgMALgBARIgLB7QgBANAGAMIABADQADAKAJAIQANANASAAMAi+AAAQASAAAOgNQAMgMABgSIABgHIAklRQABgNgGgMQgFgMgLgGQgLgHgNAAMgjEAAAQgRAAgNALgAw2BjIACgiIA9g8QANgNAAgSQAAgTgNgNIgqgpIADgTMAhVAAAIgXDZgAvthFQASASAAAZQAAAYgRARIhFBFMAhDAAAIAUi7Mgg1AAAg");
	this.shape_20.setTransform(-0.5,-1.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,153,0,0.8)").s().p("AxvC9QgFAAgFgEQgEgEAAgGIgEgEQgBgEAAgEIALh8QAAgFAFgEIA4g4IgrgqQgDgDAAgDIgBgHIAKheQABgGAFgDQAEgEAGAAMAjDAAAQAEAAAEACQADACADAEQABAEAAAEIgjFSIgCAFIAAADQAAAGgFAFQgEAEgGAAgAxAhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgGBNMAiRAAAIAdkVMgiRAAAg");
	this.shape_21.setTransform(-0.5,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBgcopy("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.1,-21.4,238,48.6);


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


(lib.mcBtnClaimBadge = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnHorizontal1copy2();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHorizontal1copy2(), 3);

	this.instance_1 = new lib.btnHorizontal1copy3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHorizontal1copy3(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-24.6,240.4,51.8);


(lib.mcDigitalBadge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.myRank = Math.round(this.parent.myOverallScore);
		if (this.myRank>=3){
			this.gotoAndStop(1);
		} else {
			this.gotoAndStop(2);
		}
	}
	this.frame_1 = function() {
		var _this = this;
		function doOpenBadge(e){
			window.open("https://hero.mydigitalmaker.com/dcs/reg/"+cUserIc+"/"+_this.myRank, "_blank");
		}
		this.btnClaim.addEventListener("click", doOpenBadge);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgQApIgSgLIAGg7IAUgKIAZAAIASAKIgEAjIgvAAIgCAUIAvAAIgCAPgAgOgHIAfAAIACgTIggAAg");
	this.shape.setTransform(-436.8,-232.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AghA4IABgNIAsAAIACgbIgMAHIgVAAIgSgLIAGg5IAUgKIAWAAIAKAHIAMgHIAFAAIgLBlIgUAKgAgVAJIAkAAIAFgzIgkAAg");
	this.shape_1.setTransform(-445.8,-230.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAQA7IgDgHIgMAHIgXAAIgRgLIAGg7IAUgLIAXAAIAKAHIAFgrIAPAAIgMB1gAgYAtIAmAAIAGg1IgmAAg");
	this.shape_2.setTransform(-455.1,-234.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_3.setTransform(-464.6,-232.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgqA4IALhvIA5AAIARALIgDAjIgPAIIAAABIANAGIgEAnIgUALgAgZAqIArAAIAEgkIgrAAgAgUgIIArAAIAEghIgrAAg");
	this.shape_4.setTransform(-474.4,-233.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAAA7IgQgLIAKhpIAPAAIgJBlIASAAIgCAPg");
	this.shape_5.setTransform(-482.1,-234.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAYApIgLgHIgMAHIgUAAIgRgLIAGg7IAUgLIAUAAIALAHIAMgHIAEAAIgJBRgAgUAbIAiAAIAGg1IgjAAg");
	this.shape_6.setTransform(-489.4,-232.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AABAzIgQgKIAFg3IgOAAIABgOIAPAAIABgNIAQgJIgDAWIATAAIgBAOIgTAAIgFAzIATAAIgCAOg");
	this.shape_7.setTransform(-497.1,-233.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgNA7IAIhPIAOAAIgIBPgAgEgoIACgRIAQAAIgCARg");
	this.shape_8.setTransform(-502.4,-234.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AghA4IABgNIAsAAIACgbIgMAHIgVAAIgSgLIAGg5IAUgKIAWAAIAKAHIAMgHIAFAAIgLBlIgUAKgAgVAJIAkAAIAFgzIgkAAg");
	this.shape_9.setTransform(-509.3,-230.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgNA7IAIhPIAOAAIgIBPgAgEgoIACgRIAQAAIgCARg");
	this.shape_10.setTransform(-515.8,-234.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AAQA7IgDgHIgMAHIgXAAIgRgLIAGg7IAUgLIAXAAIAKAHIAFgrIAPAAIgMB1gAgYAtIAmAAIAGg1IgmAAg");
	this.shape_11.setTransform(-522.6,-234.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#0EE0E0").ss(2).p("ANwAAI7fAA");
	this.shape_12.setTransform(-501.7,-105.4);

	this.btnClaim = new lib.mcBtnClaimBadge();
	this.btnClaim.name = "btnClaim";
	this.btnClaim.parent = this;
	this.btnClaim.setTransform(286.1,23.3,0.85,0.85,0,0,0,0.2,0.6);

	this.instance = new lib.tapirfriendly();
	this.instance.parent = this;
	this.instance.setTransform(70,-169,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.btnClaim}]},1).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.3,-29.5);

	this.instance_2 = new lib.bannerDigital("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-92.5,0.2,0.283,0.283);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).wait(1));

	// Layer_4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0EE0E0").s().p("EhAGAPGIAA+LMCANAAAIAAeLg");
	this.shape_13.setTransform(4.5,28.2);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-590.7,-247.3,178,143);


// stage content:
(lib.end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;
	}
	this.frame_1 = function() {
		_this = this;
		this.myOverallScore;
		var cData = $.get("/api/get/score/"+cUserId, function (data) {
					if(data.status == 100){
						//success api call
						_this.myOverallScore = data.score;
						console.log(_this.myOverallScore);
					}else{
						//failed
					}
		});
	}
	this.frame_4 = function() {
		playSound("win");
	}
	this.frame_102 = function() {
		var minX = 146;
		var maxX = 698;
		var destX = (maxX - minX)/5*this.myOverallScore + minX;
		createjs.Tween.get(this.scoreBar)
		  .to({ x: destX }, 2000, createjs.Ease.getPowInOut(4));
	}
	this.frame_505 = function() {
		var imgData = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsHCAkIBwsJCQkMCwsNEBoREA8PECAXGBMaJiIoKCYiJSQqMD0zKi05LiQlNUg1OT9BREVEKTNLUEpCTz1DREH/2wBDAQsMDBAOEB8RER9BLCUsQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUH/wgARCATZBtoDAREAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAMEAQIFBgcI/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/2gAMAwEAAhADEAAAAPrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSvlWtn1sukAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAr2pYrcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaoxLeJAAAAFa2ekxcpqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKd8pYtPW4AAAAAAAAAAAAAAA423LF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';
		function doOpenCert(){	
			var doc = new jsPDF({
			  orientation: 'landscape',
			  unit: 'mm',
			  format: [297, 210]
			});
			doc.addImage(imgData, 'JPEG', 0, 0, 297, 210);
			doc.setFont("helvetica");
			doc.setFontSize(18);
			doc.setFontType('bolditalic');
			doc.text(cUserName.toUpperCase(), 99, 97, 'center');
			doc.setFontSize(14);
			//console.log(cUserIc);
			doc.text(cUserIc.toString(), 99, 110, 'center');
			doc.text("PENYERTAAN DI PERINGKAT KEBANGSAAN", 99, 130, 'center');
			doc.save(cUserName+' DCS Cert.pdf');
		}
		this.btnCert.addEventListener("click", doOpenCert);
	}
	this.frame_653 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(98).call(this.frame_102).wait(403).call(this.frame_505).wait(148).call(this.frame_653).wait(1));

	// digitalBadge
	this.instance = new lib.mcDigitalBadge();
	this.instance.parent = this;
	this.instance.setTransform(395.9,845.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(522).to({_off:false},0).to({y:482.8},17,cjs.Ease.cubicOut).wait(115));

	// btndowload
	this.btnCert = new lib.mcBtnDownload();
	this.btnCert.name = "btnCert";
	this.btnCert.parent = this;
	this.btnCert.setTransform(376.4,304,0.85,0.85,0,0,0,0.2,0.6);
	this.btnCert._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnCert).wait(505).to({_off:false},0).wait(149));

	// t
	this.instance_1 = new lib.msgTxtcopy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(556.4,256.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(505).to({_off:false},0).wait(149));

	// t
	this.instance_2 = new lib.msgTxt();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,168.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(440).to({_off:false},0).wait(214));

	// congratulations
	this.instance_3 = new lib.tahniahMc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(401.5,190.3,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(424).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:360,y:110.3},29,cjs.Ease.elasticOut).wait(201));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(385).to({graphics:mask_graphics_385,x:400,y:300}).wait(1).to({graphics:mask_graphics_386,x:400,y:300}).wait(1).to({graphics:mask_graphics_387,x:400,y:300}).wait(1).to({graphics:mask_graphics_388,x:400,y:300}).wait(1).to({graphics:mask_graphics_389,x:400,y:300}).wait(1).to({graphics:mask_graphics_390,x:399.9,y:300}).wait(1).to({graphics:mask_graphics_391,x:399.9,y:300}).wait(1).to({graphics:mask_graphics_392,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_393,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_394,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_395,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_396,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_397,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_398,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_399,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_400,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_401,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_402,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_403,x:399.6,y:300}).wait(1).to({graphics:mask_graphics_404,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_405,x:399.7,y:300}).wait(1).to({graphics:mask_graphics_406,x:399.8,y:300}).wait(1).to({graphics:mask_graphics_407,x:399.9,y:300}).wait(1).to({graphics:mask_graphics_408,x:400,y:300}).wait(1).to({graphics:mask_graphics_409,x:400.2,y:300}).wait(1).to({graphics:mask_graphics_410,x:400.3,y:300}).wait(1).to({graphics:mask_graphics_411,x:400.5,y:300}).wait(1).to({graphics:mask_graphics_412,x:400.7,y:300}).wait(1).to({graphics:mask_graphics_413,x:401,y:300.1}).wait(1).to({graphics:mask_graphics_414,x:401.3,y:300.1}).wait(1).to({graphics:mask_graphics_415,x:401.6,y:300.1}).wait(1).to({graphics:mask_graphics_416,x:401.9,y:300.1}).wait(1).to({graphics:mask_graphics_417,x:402.3,y:300.1}).wait(1).to({graphics:mask_graphics_418,x:402.7,y:300.1}).wait(1).to({graphics:mask_graphics_419,x:403,y:300.1}).wait(1).to({graphics:mask_graphics_420,x:403.3,y:300.1}).wait(1).to({graphics:mask_graphics_421,x:403.6,y:300.1}).wait(1).to({graphics:mask_graphics_422,x:403.8,y:300.1}).wait(1).to({graphics:mask_graphics_423,x:404.1,y:300.2}).wait(1).to({graphics:mask_graphics_424,x:404.3,y:300.2}).wait(1).to({graphics:mask_graphics_425,x:404.4,y:300.1}).wait(1).to({graphics:mask_graphics_426,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_427,x:404.7,y:300.2}).wait(1).to({graphics:mask_graphics_428,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_429,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_430,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_431,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_432,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_433,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_434,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_435,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_436,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_437,x:405,y:300.2}).wait(1).to({graphics:mask_graphics_438,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_439,x:404.9,y:300.2}).wait(1).to({graphics:mask_graphics_440,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_441,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_442,x:404.8,y:300.2}).wait(1).to({graphics:mask_graphics_443,x:404.7,y:300.2}).wait(1).to({graphics:mask_graphics_444,x:404.7,y:300.2}).wait(1).to({graphics:mask_graphics_445,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_446,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_447,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_448,x:404.6,y:300.2}).wait(1).to({graphics:mask_graphics_449,x:404.6,y:300.2}).wait(205));

	// award
	this.mcBadges = new lib.mcBadges();
	this.mcBadges.name = "mcBadges";
	this.mcBadges.parent = this;
	this.mcBadges.setTransform(400,327);
	this.mcBadges._off = true;

	var maskedShapeInstanceList = [this.mcBadges];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mcBadges).wait(385).to({_off:false},0).wait(106).to({x:176,y:255},14,cjs.Ease.cubicOut).wait(149));

	// bg
	this.instance_4 = new lib.promotionBg01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,0,0.781,0.781);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(385).to({_off:false},0).wait(269));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_29 = new cjs.Graphics().p("EgrMABVIAAipMBWZAAAIAACpg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(29).to({graphics:mask_1_graphics_29,x:422.4,y:306.5}).wait(396).to({graphics:null,x:0,y:0}).wait(229));

	// bar
	this.scoreBar = new lib.barAchieve();
	this.scoreBar.name = "scoreBar";
	this.scoreBar.parent = this;
	this.scoreBar.setTransform(146,306);
	this.scoreBar._off = true;

	var maskedShapeInstanceList = [this.scoreBar];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.scoreBar).wait(29).to({_off:false},0).to({_off:true},396).wait(229));

	// t
	this.instance_5 = new lib.pencapaianTxt();
	this.instance_5.parent = this;
	this.instance_5.setTransform(303.7,274.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({_off:true},378).wait(229));

	// star
	this.instance_6 = new lib.star("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(116.6,295.7,0.045,0.047,0,0,0,1.1,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(25).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,rotation:360},21,cjs.Ease.backInOut).to({_off:true},379).wait(229));

	// bar
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(2).p("EArIAAeIAAg7AonAeIAAg7AIoAeIAAg7AZ4AeIAAg7EgrHAAeIAAg7A53AeIAAg7");
	this.shape.setTransform(422.5,309);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29).to({_off:false},0).to({_off:true},396).wait(229));

	// meter
	this.instance_7 = new lib.barBg("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(400,630.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:296.1},29,cjs.Ease.cubicInOut).to({_off:true},396).wait(229));

	// bg
	this.instance_8 = new lib.Bitmap22();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-160,-1,1.095,1.095);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},425).wait(229));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240,299,1120.8,654.9);
// library properties:
lib.properties = {
	id: '134DC6FF3421C64FBDE34F1D4B89988D',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/end/_1.png?1530179712610", id:"_1"},
		{src:"images/end/_2.png?1530179712610", id:"_2"},
		{src:"images/end/_3.png?1530179712610", id:"_3"},
		{src:"images/end/_4.png?1530179712610", id:"_4"},
		{src:"images/end/_5.png?1530179712610", id:"_5"},
		{src:"images/end/Bitmap2.png?1530179712610", id:"Bitmap2"},
		{src:"images/end/Bitmap22.png?1530179712610", id:"Bitmap22"},
		{src:"images/end/Bitmap4.png?1530179712610", id:"Bitmap4"},
		{src:"images/end/Bitmap5.png?1530179712610", id:"Bitmap5"},
		{src:"images/end/promotionBg01.jpg?1530179712610", id:"promotionBg01"},
		{src:"images/end/tapirfriendly.png?1530179712610", id:"tapirfriendly"},
		{src:"sounds/stdClick.mp3?1530179712610", id:"stdClick"},
		{src:"sounds/questionComplete.mp3", id:"win"}
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