(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.avatar3 = function() {
	this.initialize(img.avatar3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap15 = function() {
	this.initialize(img.Bitmap15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap16 = function() {
	this.initialize(img.Bitmap16);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap17 = function() {
	this.initialize(img.Bitmap17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,550);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1202,903);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,155,204);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,79);// helper functions:

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


(lib.tTImesUp2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAPIADgdIAeAAIgDAdg");
	this.shape.setTransform(37.1,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_1.setTransform(29.6,14);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA7IgCgHIgLAHIgWAAIgRgLIAGg7IAUgLIAUAAIALAHIAEgrIAWAAIgNB1gAgSAoIAbAAIAGgrIgdAAg");
	this.shape_2.setTransform(20.2,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKApIAGg+IgaAAIgGA+IgWAAIAIhRIASAAIADAIIAMgIIATAAIARALIgHBGg");
	this.shape_3.setTransform(10.3,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_4.setTransform(0.9,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA7IAJhQIAVAAIgIBQgAgIgkIADgWIAWAAIgCAWg");
	this.shape_5.setTransform(-10.1,12.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAoIACgTIAoAAIACgMIgWAAIgSgKIADgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIARAJIgCAdIgUALg");
	this.shape_6.setTransform(-17.1,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRA7IAJhQIAVAAIgJBQgAgIgkIADgWIAXAAIgDAWg");
	this.shape_7.setTransform(-23.4,12.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfApIAGg+IgYAAIgGA+IgUAAIAGg+IgYAAIgGA+IgWAAIAJhRIASAAIACAIIANgIIAPAAIANAKIAQgKIAPAAIASALIgIBGg");
	this.shape_8.setTransform(-32.8,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKApIAGg+IgaAAIgGA+IgWAAIAIhQIASAAIADAHIAMgHIATAAIARAKIgHBGg");
	this.shape_9.setTransform(51.3,-10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_10.setTransform(41.9,-10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALA7IgRgdIgKALIgBASIgWAAIAMh0IAWAAIgHBEIAbggIAZAAIggAjIAdAtg");
	this.shape_11.setTransform(33.1,-12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAoIACgTIApAAIAAgMIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgnAAIgBALIAWAAIASAJIgEAdIgTALg");
	this.shape_12.setTransform(23.8,-10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANAoIgDgHIgLAHIgUAAIgRgKIAHhGIAWAAIgHA+IAbAAIAGg+IAWAAIgIBQg");
	this.shape_13.setTransform(14.8,-10.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIABAGIAMgGIARAAIgCATIgbAAIgGA8g");
	this.shape_14.setTransform(7.2,-10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSApIgRgLIAGg7IAUgKIAcAAIASAKIgFAlIgsAAIgBAOIAsAAIgCATgAgJgHIAVAAIABgOIgVAAg");
	this.shape_15.setTransform(-1,-10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA1IgSgLIAGgxIgPAAIACgTIAPAAIABgOIAXgMIgEAaIASAAIgCATIgSAAIgEApIASAAIgCATg");
	this.shape_16.setTransform(-8.8,-12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALA7IAHg+IgdAAIgGA+IgWAAIAMh0IAWAAIgFArIAMgHIAUAAIASAKIgHBGg");
	this.shape_17.setTransform(-21.5,-12.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANAoIgDgHIgLAHIgUAAIgRgKIAHhGIAWAAIgHA+IAbAAIAGg+IAWAAIgIBQg");
	this.shape_18.setTransform(-31,-10.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA4IATglIgXhKIAWAAIAPAvIAWgvIAWAAIg3Bvg");
	this.shape_19.setTransform(-39.7,-9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeA4IgHgYIgoAAIgMAYIgVAAIAyhvIAXAAIAcBvgAgJANIAcAAIgKgoIAAAAg");
	this.shape_20.setTransform(-50.3,-12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_21.setTransform(46.5,14);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAoIACgTIAoAAIABgMIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIASAJIgDAdIgUALg");
	this.shape_22.setTransform(32.7,14);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgQA7IAIhQIAVAAIgJBQgAgHgkIACgWIAWAAIgCAWg");
	this.shape_23.setTransform(17.6,12.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeApIAHg+IgXAAIgHA+IgVAAIAGg+IgWAAIgHA+IgWAAIAIhRIASAAIAEAIIAMgIIAPAAIANAKIAQgKIAQAAIARALIgHBGg");
	this.shape_24.setTransform(8.2,14);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg7IATgLIAdAAIARALIgEAlIgsAAIAAAOIArAAIgCATgAgKgHIAWAAIACgOIgWAAg");
	this.shape_25.setTransform(-7.3,14);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AALA7IAGg+IgcAAIgGA+IgWAAIAMh1IAWAAIgFAsIAMgIIAVAAIARALIgHBGg");
	this.shape_26.setTransform(-16.7,12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAA1IgRgLIAEgxIgOAAIACgTIAPAAIABgOIAWgMIgDAaIASAAIgBATIgSAAIgFApIASAAIgCATg");
	this.shape_27.setTransform(-24.8,12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AALA7IAGg+IgcAAIgGA+IgWAAIAMh1IAWAAIgFAsIAMgIIAVAAIARALIgHBGg");
	this.shape_28.setTransform(-37.4,12.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAA1IgRgLIAEgxIgOAAIACgTIAPAAIABgOIAWgMIgDAaIASAAIgBATIgSAAIgFApIASAAIgCATg");
	this.shape_29.setTransform(-45.5,12.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRA7IAJhQIAVAAIgIBQgAgIgkIADgWIAWAAIgCAWg");
	this.shape_30.setTransform(-51.1,12.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAGAoIgIgxIAAAAIgUAxIgWAAIgMhPIAUAAIAHAyIAUgyIATAAIAJAyIASgyIAUAAIgcBPg");
	this.shape_31.setTransform(-59.4,14);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_32.setTransform(31.1,-10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAA1IgSgLIAFgxIgOAAIACgTIAOAAIACgOIAXgMIgDAaIARAAIgCATIgSAAIgEApIASAAIgCATg");
	this.shape_33.setTransform(18.9,-12.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg7IATgKIAdAAIASAKIgFAlIgsAAIgBAOIAsAAIgCATgAgKgHIAWAAIABgOIgVAAg");
	this.shape_34.setTransform(10.8,-10.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgiA4IADgSIAnAAIACgWIgLAGIgVAAIgRgLIAGg4IAUgKIAUAAIAKAHIAMgHIALAAIgLBlIgUAKgAgRAEIAcAAIAFgpIgcAAg");
	this.shape_35.setTransform(1.5,-9.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiAoIACgTIApAAIABgMIgWAAIgSgKIADgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIARAJIgCAdIgUALg");
	this.shape_36.setTransform(-12,-10.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgMAZIACgxIAXAAIgJAxg");
	this.shape_37.setTransform(-17.9,-16);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAAA1IgRgLIAEgxIgOAAIACgTIAOAAIACgOIAWgMIgCAaIARAAIgBATIgSAAIgFApIASAAIgCATg");
	this.shape_38.setTransform(-24.1,-12.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgeA4IAMhvIAVAAIgJBcIAlAAIgCATg");
	this.shape_39.setTransform(-40.5,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:23.8,y:-10.8}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:51.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-10.1}},{t:this.shape_4},{t:this.shape_3,p:{x:10.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:37.1}}]}).to({state:[{t:this.shape_39},{t:this.shape_15,p:{x:-32.2}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_9,p:{x:40.5}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_12,p:{x:23.9,y:14}},{t:this.shape_22},{t:this.shape_5,p:{x:39.7}},{t:this.shape_21},{t:this.shape_3,p:{x:55.9}},{t:this.shape,p:{x:63.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-25.8,115.5,51.7);


(lib.tTimesUp = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#0DDFDF").s().p("AgjBmIAFg1IA0AAIgEA1gAgQAWIAFh7IAvAAIgUB7g");
	this.shape.setTransform(144.7,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0DDFDF").s().p("AglBiIAQiiIg0AAIADghICQAAIgDAhIg1AAIgRCig");
	this.shape_1.setTransform(132.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_2.setTransform(113.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0DDFDF").s().p("AA1BiIANiAIAAAAIg5CAIglAAIgfiCIAAAAIgOCCIglAAIAUjDIA0AAIAiCPIAAAAIBAiPIAzAAIgUDDg");
	this.shape_3.setTransform(92.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_4.setTransform(69.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0DDFDF").s().p("AglBiIAQiiIg0AAIADghICQAAIgDAhIg1AAIgRCig");
	this.shape_5.setTransform(53.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0DDFDF").s().p("AAcBiIAJhUIhMAAIgJBUIgnAAIAVjDIAnAAIgIBOIBMAAIAIhOIAnAAIgVDDg");
	this.shape_6.setTransform(27.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_7.setTransform(7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0DDFDF").s().p("AhVBiIAVjDIB3AAIAeATIgQCdIgiATgAgqBBIBJAAIAOiBIhKAAg");
	this.shape_8.setTransform(-11.5,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0DDFDF").s().p("Ag2BjIgfgTIATiyIAnAAIgRCgIBKAAIAQigIAoAAIgTCyIgjATg");
	this.shape_9.setTransform(-31.3,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0DDFDF").s().p("AgvBjIgegTIAEglIAoAAIgDAXIA7AAIAGgxIhAAAIgfgSIAJhPIAigTIBHAAIAeATIgEAmIgoAAIADgXIg5AAIgEAvIA/AAIAeASIgIBQIgiATg");
	this.shape_10.setTransform(-50.7,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_11.setTransform(-77.5,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0DDFDF").s().p("AgvBjIgegTIAEglIAoAAIgDAXIA7AAIAGgxIhAAAIgfgSIAJhPIAigTIBGAAIAfATIgEAmIgnAAIACgXIg5AAIgEAvIA+AAIAfASIgIBQIgiATg");
	this.shape_12.setTransform(-95.2,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_13.setTransform(-114.6,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0DDFDF").s().p("AA1BiIAOiAIgBAAIg6CAIgkAAIgeiCIgBAAIgOCCIgmAAIAVjDIA0AAIAiCPIABAAIA+iPIA1AAIgVDDg");
	this.shape_14.setTransform(-135.5,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0DDFDF").s().p("AgjBmIAGg1IA0AAIgGA1gAgRAWIAGh7IAvAAIgUB7g");
	this.shape_15.setTransform(65,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0DDFDF").s().p("AhMBiIAUjDIBnAAIAeATIgJBWIgjATIg/AAIgHBHgAgagFIA5AAIAGg7Ig5AAg");
	this.shape_16.setTransform(51.3,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0DDFDF").s().p("AhEBiIAVjDIB0AAIgEAhIhNAAIgEAtIA8AAIgEAhIg8AAIgFAzIBNAAIgEAhg");
	this.shape_17.setTransform(-10.5,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0DDFDF").s().p("AA1BiIAOiAIgBAAIg6CAIgkAAIgeiCIgBAAIgOCCIglAAIAUjDIA0AAIAiCPIABAAIA/iPIA0AAIgVDDg");
	this.shape_18.setTransform(-31.2,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0DDFDF").s().p("AgdBiIAVjDIAmAAIgVDDg");
	this.shape_19.setTransform(-48.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-95.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-31.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:132.3}},{t:this.shape}]}).to({state:[{t:this.shape_1,p:{x:-59.6}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_12,p:{x:5.6}},{t:this.shape_9,p:{x:32.3}},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.1,-22,302.3,44.1);


(lib.timerBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap9();
	this.instance.parent = this;
	this.instance.setTransform(-70,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-39,140,79);


(lib.tEn1 = function(mode,startPosition,loop) {
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
			 // _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.myTxt = new cjs.Text("You are in charge of your school's computer lab. \nDo you think the following is correct or wrong?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 409;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-228,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egh+AAAMBD9AAA");
	this.shape.setTransform(-34.1,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EggnAFEIAAi/IilACIClh7IAAlKMBD9AAAIAAKC");
	this.shape_1.setTransform(-42.8,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EggsAFBIAAi/IikADICkh7IAAlKMBD9AAAIAAKBg");
	this.shape_2.setTransform(-42.4,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-30.5,454.9,67.2), null);


(lib.tCongrats2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgQAPIADgdIAeAAIgDAdg");
	this.shape.setTransform(68.6,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA7IgLgHIgLAHIgLAAIAMh1IAWAAIgFArIAMgHIAVAAIARALIgGA7IgUALgAgQAoIAdAAIAEgrIgbAAg");
	this.shape_1.setTransform(60.9,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_2.setTransform(51.4,14);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGAoIgIgxIAAAAIgUAxIgWAAIgMhPIAUAAIAHAyIAUgyIATAAIAJAyIASgyIAUAAIgcBPg");
	this.shape_3.setTransform(40.9,14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_4.setTransform(29.6,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBLIACgTIAQAAIAJhdIAWAAIgLBlIgTALgAABg0IADgWIAXAAIgCAWg");
	this.shape_5.setTransform(21.8,13.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKApIAGg+IgaAAIgGA+IgWAAIAIhRIASAAIADAIIAMgIIATAAIARALIgHBGg");
	this.shape_6.setTransform(15.4,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg7IATgLIAdAAIARALIgEAlIgsAAIAAAOIArAAIgCATgAgKgHIAWAAIACgOIgWAAg");
	this.shape_7.setTransform(6.2,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeApIAHg+IgYAAIgGA+IgVAAIAHg+IgYAAIgGA+IgWAAIAIhRIASAAIADAIIANgIIAPAAIANAKIAQgKIAPAAIASALIgHBGg");
	this.shape_8.setTransform(-5.2,14);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA7IAJhQIAVAAIgIBQgAgIgkIADgWIAWAAIgCAWg");
	this.shape_9.setTransform(-18.2,12.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_10.setTransform(-25.4,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAoIACgTIApAAIAAgMIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgnAAIgBALIAWAAIASAJIgEAdIgTALg");
	this.shape_11.setTransform(-34.7,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg7IATgLIAdAAIARALIgEAlIgrAAIgBAOIArAAIgCATgAgKgHIAWAAIACgOIgWAAg");
	this.shape_12.setTransform(-43.5,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBA7IgRgLIAKhqIAVAAIgKBiIAQAAIgBATg");
	this.shape_13.setTransform(-50.4,12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg7IATgLIAdAAIARALIgEAlIgrAAIgBAOIArAAIgCATgAgKgHIAWAAIACgOIgWAAg");
	this.shape_14.setTransform(-57.8,14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAoIACgTIAoAAIABgMIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIASAJIgDAdIgUALg");
	this.shape_15.setTransform(-66.8,14);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALA7IAHg+IgcAAIgHA+IgWAAIAMh0IAWAAIgEArIALgHIAUAAIASAKIgHBGg");
	this.shape_16.setTransform(40.9,-12.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_17.setTransform(31.4,-10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALA7IgCgHIgLAHIgWAAIgRgLIAGg7IAUgLIAUAAIALAHIAEgrIAWAAIgNB1gAgSAoIAbAAIAGgrIgdAAg");
	this.shape_18.setTransform(22,-12.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANAoIgDgHIgLAHIgUAAIgRgKIAHhGIAWAAIgHA+IAbAAIAGg+IAWAAIgIBQg");
	this.shape_19.setTransform(12.2,-10.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAoIACgTIAoAAIABgMIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIASAJIgDAdIgUALg");
	this.shape_20.setTransform(3,-10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_21.setTransform(-10.2,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALA7IgCgHIgMAHIgVAAIgRgLIAHg7IATgLIAUAAIAKAHIAFgrIAWAAIgNB1gAgSAoIAcAAIAEgrIgcAAg");
	this.shape_22.setTransform(-19.6,-12.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKApIAGg+IgaAAIgGA+IgWAAIAIhQIASAAIADAHIAMgHIATAAIARAKIgHBGg");
	this.shape_23.setTransform(-29.5,-10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdA4IgFgYIgqAAIgKAYIgXAAIAzhvIAXAAIAdBvgAgJANIAbAAIgJgoIgBAAg");
	this.shape_24.setTransform(-40,-12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghA5IACgTIAnAAIACgWIgLAGIgVAAIgRgKIAGg5IAUgLIATAAIALAIIAMgIIALAAIgLBmIgUALgAgRAEIAdAAIAEgpIgcAAg");
	this.shape_25.setTransform(32.3,15.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIABAGIAMgGIARAAIgCATIgbAAIgGA8g");
	this.shape_26.setTransform(10.4,14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSApIgRgLIAGg7IAUgLIAcAAIARALIgEAlIgrAAIgCAOIAsAAIgCATgAgJgHIAVAAIABgOIgVAAg");
	this.shape_27.setTransform(2.2,14);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAKApIAGg+IgaAAIgGA+IgWAAIAIhRIASAAIADAIIAMgIIATAAIARALIgHBGg");
	this.shape_28.setTransform(-28.2,14);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSApIgRgLIAGg7IAUgKIAcAAIARAKIgEAlIgrAAIgCAOIAsAAIgCATgAgJgHIAVAAIABgOIgVAAg");
	this.shape_29.setTransform(41.4,-10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_30.setTransform(22.6,-10.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AALA7IgDgHIgKAHIgWAAIgRgLIAGg7IAUgLIAUAAIALAHIAEgrIAWAAIgNB1gAgSAoIAbAAIAGgrIgcAAg");
	this.shape_31.setTransform(13.2,-12.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg7IATgKIAdAAIARAKIgEAlIgsAAIAAAOIArAAIgCATgAgKgHIAWAAIACgOIgWAAg");
	this.shape_32.setTransform(-0.5,-10.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIABAGIANgGIAQAAIgCATIgbAAIgGA8g");
	this.shape_33.setTransform(-7.9,-10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAZIACgxIAXAAIgJAxg");
	this.shape_34.setTransform(-13.2,-16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_35.setTransform(-30.4,-10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWA4IAFgwIgdg/IAYAAIATAqIAagqIAYAAIgqA/IgFAwg");
	this.shape_36.setTransform(-39.4,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23,p:{x:-29.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:12.2}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-66.8}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-18.2}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:15.4}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:40.9}},{t:this.shape_2,p:{x:51.4}},{t:this.shape_1},{t:this.shape,p:{x:68.6}}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_19,p:{x:-20.8}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_23,p:{x:32}},{t:this.shape_29},{t:this.shape_2,p:{x:-37.6}},{t:this.shape_28},{t:this.shape_15,p:{x:-19.1}},{t:this.shape_3,p:{x:-8.1}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_9,p:{x:15.8}},{t:this.shape_6,p:{x:22.6}},{t:this.shape_25},{t:this.shape,p:{x:39.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-25.8,147.2,51.7);


(lib.tCongrats = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#0DDFDF").s().p("AgjBmIAFg1IA0AAIgEA1gAgQAWIAFh7IAvAAIgUB7g");
	this.shape.setTransform(62.8,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0DDFDF").s().p("AAcBiIAJhUIhMAAIgJBUIgnAAIAVjDIAnAAIgIBOIBMAAIAIhOIAnAAIgVDDg");
	this.shape_1.setTransform(47.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_2.setTransform(26.8,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0DDFDF").s().p("AgdBiIAVjDIAmAAIgVDDg");
	this.shape_3.setTransform(14.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0DDFDF").s().p("AAhBiIhGh+IgBAAIgNB+IgmAAIAUjDIAkAAIBHB+IAAAAIANh+IAoAAIgUDDg");
	this.shape_4.setTransform(-0.7,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0DDFDF").s().p("AAcBiIAJhUIhMAAIgJBUIgnAAIAVjDIAnAAIgIBOIBMAAIAIhOIAnAAIgVDDg");
	this.shape_5.setTransform(-21.3,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAgQAWIAxAAIgRhGIgBAAg");
	this.shape_6.setTransform(-41.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0DDFDF").s().p("AglBiIAQiiIg0AAIADghICQAAIgDAhIg1AAIgRCig");
	this.shape_7.setTransform(-57.3,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0DDFDF").s().p("AgjBmIAFg1IA1AAIgGA1gAgRAWIAGh7IAvAAIgUB7g");
	this.shape_8.setTransform(134.9,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0DDFDF").s().p("AgvBjIgegTIAEglIAoAAIgDAXIA7AAIAGgxIhAAAIgfgSIAJhPIAigTIBGAAIAfATIgEAmIgnAAIACgXIg5AAIgEAvIA+AAIAfASIgIBQIgiATg");
	this.shape_9.setTransform(120.4,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0DDFDF").s().p("AAhBiIhGh+IgBAAIgMB+IgnAAIAUjDIAlAAIBGB+IAAAAIANh+IAoAAIgVDDg");
	this.shape_10.setTransform(100.9,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0DDFDF").s().p("Ag1BjIgfgTIARigIAjgTIBWAAIAfATIgRCgIgjATgAgrBCIBJAAIAOiDIhJAAg");
	this.shape_11.setTransform(80.5,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0DDFDF").s().p("Ag2BiIAVjDIAmAAIgQCiIBCAAIgEAhg");
	this.shape_12.setTransform(20.2,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0DDFDF").s().p("Ag2BjIgfgTIATiyIAnAAIgRCgIBKAAIAQigIAoAAIgTCyIgjATg");
	this.shape_13.setTransform(3.5,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0DDFDF").s().p("AglBiIAQiiIg0AAIADghICQAAIgDAhIg1AAIgRCig");
	this.shape_14.setTransform(-13.7,-0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0DDFDF").s().p("AAbBiIgihKIgYAAIgHBKIgoAAIAVjDIBpAAIAfATIgJBTIgjATIAjBKgAgcgJIA8AAIAFg3Ig6AAg");
	this.shape_15.setTransform(-50.7,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0DDFDF").s().p("AgxBjIgfgTIASigIAigTIBOAAIAfATIgEApIgoAAIADgaIhBAAIgOCDIBBAAIAEgkIgfAAIACghIBIAAIgJBTIgjATg");
	this.shape_16.setTransform(-69.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0DDFDF").s().p("AAiBiIhHh+IAAAAIgOB+IgnAAIAVjDIAkAAIBGB+IABAAIAOh+IAmAAIgUDDg");
	this.shape_17.setTransform(-88.9,-0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0DDFDF").s().p("Ag1BjIgfgTIARigIAjgTIBWAAIAfATIgRCgIgjATgAgrBCIBJAAIAOiDIhJAAg");
	this.shape_18.setTransform(-109.4,-0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0DDFDF").s().p("AgxBjIgfgTIARigIAjgTIBOAAIAfATIgFApIgnAAIADgaIhBAAIgOCDIBBAAIACgZIAoAAIgFAnIgiATg");
	this.shape_19.setTransform(-128.7,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:-57.3}},{t:this.shape_6,p:{x:-41.8}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:14.1}},{t:this.shape_2,p:{x:26.8}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_6,p:{x:-32.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_2,p:{x:35.5}},{t:this.shape_7,p:{x:54.7}},{t:this.shape_3,p:{x:66.1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-22,138.5,44.1);


(lib.tBm1 = function(mode,startPosition,loop) {
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
			 // _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Anda sedang bertugas di makmal komputer sekolah\nanda. Adakah tindakan yang berikut betul atau salah?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 449;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egj2AAAMBHtAAA");
	this.shape.setTransform(-22.1,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EgifAFEIAAi/IilACIClh7IAAlKMBHtAAAIAAKC");
	this.shape_1.setTransform(-30.8,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgikAFBIAAi/IikADICkh7IAAlKMBHtAAAIAAKBg");
	this.shape_2.setTransform(-30.4,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-30.5,483.5,67.2), null);


(lib.Symbol20copy = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWBKIAAg9QAAgMgEgFQgFgFgKgBQgKAAgHAIQgHAGAAAMIAAA6IgZAAIAAiTIAZAAIAAA9QAFgIAJgEQAIgFAKAAQAkAAAAApIAAA+g");
	this.shape.setTransform(32.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAuQgKgGgGgMQgFgMAAgQQAAgOAFgMQAGgMAKgHQALgHANABQAKgBAJAFQAIAFAEAIIAAgPIAZAAIAABkIgZAAIAAgQQgEAIgIAFQgJAFgKgBQgOAAgKgGgAgSgXQgHAJAAAOQAAAQAHAIQAHAJAMAAQAMAAAHgJQAHgIgBgQQABgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_1.setTransform(20.3,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLBKIAAiTIAXAAIAACTg");
	this.shape_2.setTransform(11.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAuQgLgGgFgMQgGgMAAgQQAAgOAGgMQAFgMALgHQAKgHANABQAKgBAIAFQAJAFAFAIIAAgPIAYAAIAABkIgYAAIAAgQQgFAIgJAFQgIAFgKgBQgOAAgJgGgAgSgXQgHAJAAAOQAAAQAHAIQAHAJAMAAQAMAAAHgJQAGgIABgQQgBgPgGgIQgHgJgMAAQgMAAgHAJg");
	this.shape_3.setTransform(2.7,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBFQgPgFgKgIIAJgTQALAIALAEQALADANAAQAOAAAIgFQAJgFAAgJQAAgJgIgEQgHgEgRgEQgagGgNgIQgMgJAAgSQAAgMAHgKQAHgKAMgFQANgGAPAAQAPAAAOAFQANAEAJAIIgJASQgTgPgXAAQgNAAgIAGQgIAGAAAKQAAAIAHAEQAIAFAQAEQASAEALAEQALAEAGAIQAGAIAAAMQAAANgHAJQgHAJgMAGQgNAFgRAAQgQAAgOgEg");
	this.shape_4.setTransform(-9.7,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBKQgUgLgLgUQgMgUAAgXQAAgWAMgUQALgUAUgLQAUgMAWAAQAXAAAUAMQAUALALAUQAMAUAAAWQAAAXgMAUQgLAUgUALQgUAMgXAAQgWAAgUgMgAgbhBQgNAGgJAJQgKAKgGANQgFANAAAOQAAAOAFAOQAGANAKAJQAJAKANAGQANAFAOAAQAOAAAOgFQANgGAJgKQAKgJAGgNQAFgOAAgOQAAgOgFgNQgGgNgKgKQgJgJgNgGQgOgGgOAAQgOAAgNAGgAAfAtQgDgBgBgDQgDgJgHgFQgIgGgJAAQgIAAgIAGQgIAFgCAJQgBADgDABQgCACgDgBQgDgBgBgDQgCgCABgDQAEgOAMgIQALgIANAAQAOAAALAIQAMAIAEAOQABADgCACQgBADgDABIgCAAIgDgBgAASgSQgEgEAAgGQAAgGAEgEQAFgEAGAAQAFAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgFAAQgGAAgFgFgAgmgSQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_5.setTransform(-30.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBAIAFgTQARAKASAAQAbAAAAgbIAAgUQgEAIgKAFQgIAFgLAAQgMAAgLgGQgKgGgGgMQgFgKgBgPQABgPAFgLQAGgMAKgGQALgGAMAAQALAAAIAEQAKAFAEAIIAAgPIAZAAIAABhQAAAYgOAMQgMAMgZAAQgXAAgSgKgAgSguQgHAJAAAOQAAAOAHAJQAHAHAMAAQAMAAAHgHQAHgJAAgOQAAgOgHgJQgHgIgMAAQgMAAgHAIg");
	this.shape_6.setTransform(38.1,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAXA0IAAg8QAAgMgFgGQgEgFgKAAQgKAAgHAHQgHAIAAAMIAAA4IgZAAIAAhIQAAgQgCgMIAYAAIABAQQAGgJAJgFQAHgFAMAAQAkAAAAAqIAAA9g");
	this.shape_7.setTransform(26.1,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAuQgMgGgGgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOABQAPgBAMAHQAMAGAGAMQAGAMAAAPQAAAQgGAMQgGAMgMAGQgMAGgPAAQgOAAgMgGgAgSgXQgHAIAAAPQAAARAHAHQAGAJAMAAQANAAAGgJQAHgHAAgRQAAgPgHgIQgGgJgNAAQgLAAgHAJg");
	this.shape_8.setTransform(14.2,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfA0IAAhIQAAgQgBgMIAXAAIADASQADgKAIgFQAIgGAKAAQAGAAAEACIAAAXQgHgDgGAAQgNAAgHAIQgFAHAAAMIAAA2g");
	this.shape_9.setTransform(5,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAkBHIgkhlIgjBlIgVAAIgyiNIAaAAIAjBpIAlhpIASAAIAkBqIAkhqIAZAAIgyCNg");
	this.shape_10.setTransform(-10.7,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:-30.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{x:-36}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D20000").s().p("AhLBMQgfgfgBgtQABgsAfgfQAfggAsABQAtgBAfAgQAfAfABAsQgBAtgfAfQgfAggtAAQgsAAgfggg");
	this.shape_11.setTransform(-30.6,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D20000").s().p("AhLBMQgggfAAgtQAAgsAggfQAfggAsABQAtgBAfAgQAgAfgBAsQABAtggAfQgfAggtAAQgsAAgfggg");
	this.shape_12.setTransform(-36.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-15.7,104,31.5);


(lib.Symbol20 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgLBKIAAiTIAYAAIAACTg");
	this.shape.setTransform(33.5,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAKIAAg8IAZAAIAAA8QAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgMIAAg3IAZAAIAABkIgYAAIAAgQQgFAJgIAEQgIAEgJAAQglAAAAgpg");
	this.shape_1.setTransform(24.9,3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA6QgJgKAAgSIAAgtIgUAAIAAgTIAUAAIAAgYIAYgJIAAAhIAaAAIAAATIgaAAIAAAsQAAASAQAAQAFAAAFgCIAAAUQgGADgKAAQgQAAgJgKg");
	this.shape_2.setTransform(15,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAnQgOgOAAgZQAAgOAGgMQAHgMAKgHQAMgHANABQAVAAAMANQAMAOAAAXIAAADIhEAAQAAAQAHAHQAIAJANgBQARABAOgLIAHARQgHAGgLADQgKAEgLgBQgYABgOgOgAgMgcQgHAGgCALIAuAAQgBgLgGgGQgFgGgLABQgIAAgGAFg");
	this.shape_3.setTransform(5.9,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag4BHIAAiNIA+AAQAWAAAMAKQANAKAAARQAAALgGAJQgGAIgKAEQAMACAHAJQAHAJAAANQAAATgNAKQgNAKgXAAgAgfAzIAkAAQAOAAAGgFQAHgFAAgLQAAgLgHgFQgGgFgOAAIgkAAgAgfgKIAhAAQAaAAAAgUQAAgKgGgFQgHgFgNAAIghAAg");
	this.shape_4.setTransform(-6.2,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBKQgUgLgLgUQgMgUAAgXQAAgWAMgUQALgUAUgLQAUgMAWAAQAXAAAUAMQAUALALAUQAMAUAAAWQAAAXgMAUQgLAUgUALQgUAMgXAAQgWAAgUgMgAgbhBQgNAGgJAJQgKAKgGANQgFANAAAOQAAAOAFAOQAGANAKAJQAJAKANAGQANAFAOAAQAOAAAOgFQANgGAJgKQAKgJAGgNQAFgOAAgOQAAgOgFgNQgGgNgKgKQgJgJgNgGQgOgGgOAAQgOAAgNAGgAgYAqQgMgJgEgNQgBgDACgDQABgCADgBQADgBACABQADACABADQACAIAIAGQAIAGAIAAQAJAAAIgGQAHgGADgIQABgDADgCQACgBADABQADABABACQACADgBADQgEANgMAJQgLAIgOAAQgNAAgLgIgAASgSQgEgEAAgGQAAgGAEgEQAFgEAGAAQAFAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgFAAQgGAAgFgFgAgmgSQgEgEAAgGQAAgGAEgEQAFgEAFAAQAGAAAFAEQAEAEAAAGQAAAGgEAEQgFAFgGAAQgFAAgFgFg");
	this.shape_5.setTransform(-27.5,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA6QgJgKAAgSIAAgtIgTAAIAAgTIATAAIAAgYIAYgJIAAAhIAbAAIAAATIgbAAIAAAsQAAASARAAQAEAAAGgCIAAAUQgHADgKAAQgRAAgIgKg");
	this.shape_6.setTransform(42.3,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAuQgLgGgHgMQgGgLAAgRQAAgOAHgMQAGgMAMgHQAMgHAPABQAKAAALADQAKADAGAGIgHASQgHgFgHgDQgHgDgHAAQgNAAgHAJQgIAIAAAPQAAAQAIAIQAHAJANAAQAHAAAHgDQAHgCAHgGIAHASQgHAGgKADQgKAEgLgBQgPAAgMgGg");
	this.shape_7.setTransform(33.8,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggAnQgOgOAAgZQAAgOAGgMQAHgMALgHQALgHANABQAVAAAMANQAMAOAAAXIAAADIhEAAQAAAQAIAHQAHAJANgBQARABAOgLIAHARQgHAGgLADQgKAEgLgBQgXABgPgOgAgMgcQgHAGgCALIAuAAQgBgLgGgGQgFgGgLABQgIAAgGAFg");
	this.shape_8.setTransform(23.1,3.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfA0IAAhIQAAgQgBgMIAYAAIABASQAEgKAHgFQAJgGAKAAQAGAAAEACIAAAXQgGgDgIAAQgMAAgHAIQgFAHgBAMIAAA2g");
	this.shape_9.setTransform(14.3,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfA0IAAhIQABgQgCgMIAYAAIACASQADgKAHgFQAJgGAKAAQAGAAAEACIAAAXQgHgDgGAAQgNAAgHAIQgFAHAAAMIAAA2g");
	this.shape_10.setTransform(6.4,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAuQgMgGgGgMQgGgMAAgQQAAgPAGgMQAGgMAMgGQAMgHAOABQAPgBAMAHQAMAGAGAMQAGAMAAAPQAAAQgGAMQgGAMgMAGQgMAGgPAAQgOAAgMgGgAgSgXQgHAIAAAPQAAARAHAHQAGAJAMAAQANAAAGgJQAHgHAAgRQAAgPgHgIQgGgJgNAAQgLAAgHAJg");
	this.shape_11.setTransform(-4,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZBAQgQgJgIgRQgJgQAAgWQAAgVAJgRQAIgQAQgKQAPgIAVAAQAOAAANAFQAMAEAIAIIgIASQgKgHgJgDQgJgEgLAAQgTAAgMANQgLANAAAZQAAAZALANQALAOAUAAQALAAAJgDQAJgEAKgIIAIATQgIAIgMAFQgNAEgOAAQgVAAgPgJg");
	this.shape_12.setTransform(-16.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{x:-27.5}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5,p:{x:-37.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#669933").s().p("AhLBMQgggfAAgtQAAgsAggfQAfggAsABQAtgBAfAgQAgAfgBAsQABAtggAfQgfAggtAAQgsAAgfggg");
	this.shape_13.setTransform(-27.6,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#669933").s().p("AhLBMQgfgfgBgtQABgsAfgfQAgggArABQAtgBAfAgQAfAfAAAsQAAAtgfAfQgfAggtAAQgrAAggggg");
	this.shape_14.setTransform(-37.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-15.7,104,31.5);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1 copy
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-78,-102);

	this.instance_1 = new lib.Bitmap19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78,-102);

	this.instance_2 = new lib.Bitmap6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-78,-102);

	this.instance_3 = new lib.Bitmap7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-78,-102);

	this.instance_4 = new lib.Bitmap21();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-78,-102);

	this.instance_5 = new lib.Bitmap11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-78,-102);

	this.instance_6 = new lib.Bitmap12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-78,-102);

	this.instance_7 = new lib.Bitmap13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-78,-102);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFBC00").s().p("AjtEQIAAofIHaAAIAAIfg");
	this.shape.setTransform(1.2,19.2);

	this.instance_8 = new lib.Bitmap14();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-78,-102);

	this.instance_9 = new lib.Bitmap15();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-78,-102);

	this.instance_10 = new lib.Bitmap16();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-78,-102);

	this.instance_11 = new lib.Bitmap17();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-78,-102);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8},{t:this.shape}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-102,155,204);


(lib.progress = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{off:0,on:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,0,0,3).p("AAoAAQAAARgLALQgMAMgRAAQgQAAgMgMQgLgLAAgRQAAgQALgMQAMgLAQAAQARAAAMALQALAMAAAQg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcAcQgLgMAAgQQAAgQALgMQANgLAPAAQAQAAANALQALAMAAAQQAAAQgLAMQgNAMgQAAQgPAAgNgMg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,10,10);


(lib.mcTimer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		function initClock(myDuration) {
			_this.parent.secRemaining = myDuration;
			
			function updateClock() {
				var myMin = Math.floor(_this.parent.secRemaining/60);
				var mySec = _this.parent.secRemaining%60;
				var txtMin;
				var txtSec;
				txtMin = myMin;
				if (mySec>=10){
					txtSec = mySec;
				} else {
					txtSec = "0"+mySec;
				}
				_this.txtTime.text = txtMin + ":" + txtSec;
		
				if (_this.parent.secRemaining <= 0) {
					clearInterval(timeInterval);
					//$("#dom_overlay_container").empty();
					//_this.parent.onTimeEnd();
					_this.parent.mcTimesUp.play();
				} else {
					_this.parent.secRemaining--;
				}
		  }
		  updateClock();
		  timeInterval = setInterval(updateClock, 1000);
		}
		initClock(this.parent.timeGiven);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// t
	this.txtTime = new cjs.Text("4:00", "60px 'Quantico'", "#006666");
	this.txtTime.name = "txtTime";
	this.txtTime.textAlign = "center";
	this.txtTime.lineHeight = 88;
	this.txtTime.lineWidth = 242;
	this.txtTime.parent = this;
	this.txtTime.setTransform(-1,-23.2,0.537,0.542,0,-2.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.txtTime).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTimer, new cjs.Rectangle(-66.6,-30.6,133.3,61.3), null);


(lib.mcQ12 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(211.1,-21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(206.9,-24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_2.setTransform(199.1,-24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_3.setTransform(191.9,-25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_4.setTransform(184.5,-24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_5.setTransform(175.3,-22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(163.2,-24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(151.7,-24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_8.setTransform(143.7,-26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_9.setTransform(132.8,-26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(125.8,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_11.setTransform(114.2,-24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_12.setTransform(103.8,-26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(93.9,-24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_14.setTransform(82.3,-24.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(64,-24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(52,-24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_17.setTransform(45.6,-26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_18.setTransform(38.6,-24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(29,-26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_20.setTransform(18.4,-26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(11.4,-26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_22.setTransform(0.8,-26.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgJIAEgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_23.setTransform(-5.4,-22.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(-14.4,-24.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_25.setTransform(-23.6,-24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(-32.8,-26.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(-46.8,-24.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(-56.4,-24.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_29.setTransform(-64.4,-26.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_30.setTransform(-71.1,-26.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-78.1,-22.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(-87.8,-22.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-97.1,-24.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_34.setTransform(-103.6,-26.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(-110.2,-24.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-119.2,-24.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAqA5IAAhTIglBTIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_37.setTransform(-130.3,-26.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_38.setTransform(208.3,-26.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_39.setTransform(198.2,-24.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_40.setTransform(168.2,-25.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_41.setTransform(151.6,-22.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_42.setTransform(119.7,-24.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_43.setTransform(98,-26.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_44.setTransform(90.4,-25.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_45.setTransform(61.1,-26.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_46.setTransform(51.9,-24.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(42.7,-24.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_48.setTransform(25.1,-26.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_49.setTransform(-7.2,-22.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_50.setTransform(-16.8,-24.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_51.setTransform(-30,-24.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_52.setTransform(-53,-24.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_53.setTransform(-59.5,-26.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(-66,-24.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_55.setTransform(-74.8,-24.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_56.setTransform(-87.6,-24.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_57.setTransform(-96.6,-26.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_58.setTransform(-104.2,-25.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_59.setTransform(-116.2,-22.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_60.setTransform(-145.7,-24.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_61.setTransform(-153.7,-24.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_62.setTransform(-163.2,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36,p:{x:-119.2,y:-24.5}},{t:this.shape_35,p:{x:-110.2}},{t:this.shape_34},{t:this.shape_33,p:{x:-97.1}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-46.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-14.4}},{t:this.shape_23},{t:this.shape_22,p:{x:0.8}},{t:this.shape_21},{t:this.shape_20,p:{x:18.4}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:45.6,y:-26.3}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:93.9,y:-24.5}},{t:this.shape_12},{t:this.shape_11,p:{x:114.2}},{t:this.shape_10},{t:this.shape_9,p:{x:132.8,y:-26.3}},{t:this.shape_8},{t:this.shape_7,p:{x:151.7,y:-24.5}},{t:this.shape_6,p:{x:163.2}},{t:this.shape_5},{t:this.shape_4,p:{x:184.5,y:-24.4}},{t:this.shape_3},{t:this.shape_2,p:{x:199.1,y:-24.5}},{t:this.shape_1,p:{x:206.9}},{t:this.shape,p:{x:211.1}}]}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_35,p:{x:-138.7}},{t:this.shape_22,p:{x:-132}},{t:this.shape_33,p:{x:-125.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_11,p:{x:-41.4}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_13,p:{x:6.2,y:-24.6}},{t:this.shape_27,p:{x:15.8}},{t:this.shape_48},{t:this.shape_17,p:{x:36.3,y:-26.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_20,p:{x:72.3}},{t:this.shape_24,p:{x:78.8}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_36,p:{x:107,y:-24.6}},{t:this.shape_42},{t:this.shape_7,p:{x:128,y:-24.6}},{t:this.shape_6,p:{x:139.6}},{t:this.shape_41},{t:this.shape_4,p:{x:160.9,y:-24.5}},{t:this.shape_40},{t:this.shape_2,p:{x:175.5,y:-24.6}},{t:this.shape_1,p:{x:183.2}},{t:this.shape_9,p:{x:191.7,y:-26.4}},{t:this.shape_39},{t:this.shape_38},{t:this.shape,p:{x:214.6}}]},1).wait(1));

	// Layer_4
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_63.setTransform(27.2,8.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_64.setTransform(31.9,-22.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_65.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]}).wait(2));

	// Layer_3
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_66.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_66).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ11 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(259.9,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(255.7,-23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_2.setTransform(248,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_3.setTransform(240.7,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_4.setTransform(233.4,-23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_5.setTransform(224.1,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(212.1,-23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(200.5,-23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_8.setTransform(192.5,-25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(178.8,-23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(169.1,-23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_11.setTransform(161.1,-25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(151.3,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_13.setTransform(142,-23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_14.setTransform(132.7,-23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(123,-21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(113.4,-21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(104.1,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_18.setTransform(95.1,-23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_19.setTransform(83.7,-23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_20.setTransform(69.1,-25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_21.setTransform(59.6,-23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_22.setTransform(52.1,-24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_23.setTransform(44.7,-23.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_24.setTransform(35.4,-23.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(21.6,-23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(12,-25.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(2.7,-23.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(-7,-23.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_29.setTransform(-20.5,-23.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_30.setTransform(-30.1,-23.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_31.setTransform(-37.1,-23.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_32.setTransform(-42.4,-25.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_33.setTransform(-46.2,-25.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_34.setTransform(-50,-25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(-57,-21.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_36.setTransform(-70.4,-23.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_37.setTransform(-80.1,-21.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-89.7,-21.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-99,-23.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_40.setTransform(-108.3,-23.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_41.setTransform(-115.8,-24.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_42.setTransform(-127.4,-23.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(-137.1,-23.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_44.setTransform(-146.7,-25.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_45.setTransform(-157.8,-23.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(-166.3,-23.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_47.setTransform(-175.4,-25.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_48.setTransform(-185.5,-23.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAGAGQAFAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_49.setTransform(-195,-25.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_50.setTransform(206.3,-24.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_51.setTransform(189.7,-21.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_52.setTransform(157.8,-23.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_53.setTransform(136.1,-25.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_54.setTransform(128.5,-24.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(117.3,-23.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_56.setTransform(108.9,-23.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_57.setTransform(86.9,-23.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_58.setTransform(79.5,-24.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_59.setTransform(45.3,-24.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(18.7,-23.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_61.setTransform(9.9,-21.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_62.setTransform(-0.9,-23.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(-8.9,-23.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_64.setTransform(-16.3,-25.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_65.setTransform(-26,-24.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_66.setTransform(-37.5,-23.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_67.setTransform(-49,-23.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_68.setTransform(-84.2,-23.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_69.setTransform(-95.8,-24.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_70.setTransform(-112.2,-23.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_71.setTransform(-123.3,-24.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_72.setTransform(-140.2,-21.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(-153.7,-23.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgagBIghAAgAgdgFIAeAAQANAAAGgGQAHgFAAgJQAAgUgaAAIgeAAg");
	this.shape_74.setTransform(-163.3,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48,p:{x:-185.5,y:-23.5}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-157.8}},{t:this.shape_44,p:{x:-146.7}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-50}},{t:this.shape_33},{t:this.shape_32,p:{x:-42.4}},{t:this.shape_31,p:{x:-37.1}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:35.4,y:-23.4}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:59.6,y:-23.4}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:95.1,y:-23.5}},{t:this.shape_17,p:{x:104.1}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:132.7,y:-23.4}},{t:this.shape_13,p:{x:142}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:178.8}},{t:this.shape_8},{t:this.shape_7,p:{x:200.5,y:-23.5}},{t:this.shape_6,p:{x:212.1}},{t:this.shape_5},{t:this.shape_4,p:{x:233.4,y:-23.4}},{t:this.shape_3},{t:this.shape_2,p:{x:248,y:-23.5}},{t:this.shape_1,p:{x:255.7}},{t:this.shape,p:{x:259.9}}]}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_48,p:{x:-131,y:-23.6}},{t:this.shape_71},{t:this.shape_34,p:{x:-118.5}},{t:this.shape_70},{t:this.shape_17,p:{x:-103.3}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_13,p:{x:-74.5}},{t:this.shape_44,p:{x:-65.2}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_32,p:{x:-30.6}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_24,p:{x:27.9,y:-23.5}},{t:this.shape_45,p:{x:36}},{t:this.shape_59},{t:this.shape_21,p:{x:52.8,y:-23.5}},{t:this.shape_31,p:{x:60.8}},{t:this.shape_9,p:{x:67.8}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_14,p:{x:100.3,y:-23.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_18,p:{x:145.1,y:-23.6}},{t:this.shape_52},{t:this.shape_7,p:{x:166.1,y:-23.6}},{t:this.shape_6,p:{x:177.7}},{t:this.shape_51},{t:this.shape_4,p:{x:199,y:-23.5}},{t:this.shape_50},{t:this.shape_2,p:{x:213.6,y:-23.6}},{t:this.shape_1,p:{x:221.3}},{t:this.shape,p:{x:225.5}}]},1).wait(1));

	// Layer_4
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_75.setTransform(27.2,8.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_76.setTransform(31.9,-22.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_77.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]}).wait(2));

	// Layer_3
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_78.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_78).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ10 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(209.3,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_1.setTransform(202.9,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_2.setTransform(196.4,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(192.1,-23.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(184.3,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_5.setTransform(175.3,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(163.8,-23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(155.3,-23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(146,-23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_9.setTransform(137.1,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(128.2,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWAFIAAgKIAtAAIAAAKg");
	this.shape_11.setTransform(119.7,-23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_12.setTransform(113.9,-23.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(105.4,-23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_14.setTransform(96.1,-23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(87.2,-23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_16.setTransform(78.3,-25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(64,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_18.setTransform(54.4,-25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(45.1,-23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(35.4,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_21.setTransform(24.8,-25.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_22.setTransform(21,-25.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(14,-23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_24.setTransform(4.8,-23.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_25.setTransform(-3.6,-23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(-12,-23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_27.setTransform(-19.8,-25.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_28.setTransform(-32.3,-25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(-42.1,-23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_30.setTransform(-49.6,-24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_31.setTransform(-56.6,-23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_32.setTransform(-64.8,-23.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-73.6,-23.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(-82.6,-23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_35.setTransform(-94,-23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_36.setTransform(-109.9,-23.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_37.setTransform(-119.6,-23.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-129.2,-21.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-138.5,-23.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_40.setTransform(-148.2,-23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgTBHIAAgMIAMABQAHABADgFQAEgEAAgMIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgBg");
	this.shape_41.setTransform(-156.1,-23.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_42.setTransform(157.1,-23.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_43.setTransform(149.7,-24.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_44.setTransform(137.7,-25.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgjAxQALgDAGgFQAFgEAFgIIACgIIgihOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_45.setTransform(98,-21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_46.setTransform(91.8,-25.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_47.setTransform(53.2,-23.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(44,-23.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkAxQAMgDAGgFQAFgEAFgIIACgIIghhOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_49.setTransform(35.2,-21.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_50.setTransform(22.7,-23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_51.setTransform(14.7,-23.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_52.setTransform(0.2,-25.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_53.setTransform(-15.7,-23.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_54.setTransform(-27.4,-24.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_55.setTransform(-53.7,-21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_56.setTransform(-65.7,-24.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_57.setTransform(-73,-23.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_58.setTransform(-95.7,-23.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAOAAAbQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgMQALgLAAgXQAAgsgrgBIgZAAg");
	this.shape_59.setTransform(-106.1,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-73.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-12,y:-23.5}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:21,y:-25.3}},{t:this.shape_21,p:{x:24.8}},{t:this.shape_20},{t:this.shape_19,p:{x:45.1}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:87.2,y:-23.5}},{t:this.shape_14,p:{x:96.1}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:137.1,y:-23.5}},{t:this.shape_8,p:{x:146}},{t:this.shape_7,p:{x:155.3,y:-23.5}},{t:this.shape_6,p:{x:163.8}},{t:this.shape_5},{t:this.shape_4,p:{x:184.3,y:-23.5}},{t:this.shape_3,p:{x:192.1}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:209.3}}]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_33,p:{x:-82.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_6,p:{x:-45.6}},{t:this.shape_21,p:{x:-41.3}},{t:this.shape_19,p:{x:-34.8}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_14,p:{x:-6.4}},{t:this.shape_52},{t:this.shape_26,p:{x:6.5,y:-23.6}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_3,p:{x:65.4}},{t:this.shape_15,p:{x:72.2,y:-23.6}},{t:this.shape_7,p:{x:81.1,y:-23.6}},{t:this.shape_22,p:{x:88,y:-25.4}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_8,p:{x:111}},{t:this.shape_9,p:{x:120.1,y:-23.6}},{t:this.shape_4,p:{x:128.8,y:-23.6}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape,p:{x:163.5}}]},1).wait(1));

	// Layer_4
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_60.setTransform(27.2,8.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_61.setTransform(31.9,-22.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_62.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]}).wait(2));

	// Layer_3
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_63.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_63).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ9 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(290.8,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(287.1,-25.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(282.8,-23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_3.setTransform(275,-23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_4.setTransform(267.8,-24.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_5.setTransform(260,-23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(250.9,-25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(236.9,-23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_8.setTransform(227.3,-23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_9.setTransform(218.7,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_10.setTransform(212.9,-25.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_11.setTransform(206.4,-25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(196.3,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_13.setTransform(187.1,-25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(178.1,-23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_15.setTransform(170.3,-25.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_16.setTransform(156.6,-25.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(146.9,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_18.setTransform(140.4,-25.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(134.2,-23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_20.setTransform(126.9,-24.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(119.9,-23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(111.5,-23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAHgEAIAAQAcAAABAfIAAAzg");
	this.shape_23.setTransform(98.7,-25.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(89,-23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_25.setTransform(79.8,-21.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_26.setTransform(67.7,-23.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_27.setTransform(55.7,-23.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_28.setTransform(47.1,-23.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(33.9,-21.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(24.6,-23.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(15.4,-23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_32.setTransform(8,-24.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_33.setTransform(-6,-23.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(-18,-23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_35.setTransform(-24.5,-25.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(-31.4,-23.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_37.setTransform(-41,-25.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(-54.1,-23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_39.setTransform(-61.9,-25.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_40.setTransform(-75,-23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_41.setTransform(-83.5,-23.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_42.setTransform(-91.6,-25.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_43.setTransform(-98.3,-25.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_44.setTransform(-103.1,-24.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_45.setTransform(-110.1,-23.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_46.setTransform(-117.4,-24.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(-129.4,-21.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_48.setTransform(-138.7,-23.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_49.setTransform(-148.3,-23.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_50.setTransform(-157.5,-23.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(-166.7,-25.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_52.setTransform(-178.8,-23.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(-190.1,-23.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_54.setTransform(-201.3,-25.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgjAxQALgEAGgEQAFgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBYQgFANgJAGQgJAHgNACg");
	this.shape_55.setTransform(234.2,-20.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_56.setTransform(212.6,-23.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_57.setTransform(207,-23.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_58.setTransform(190.1,-24.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_59.setTransform(178.1,-24.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_60.setTransform(159.2,-23.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_61.setTransform(151.9,-22.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_62.setTransform(142.7,-22.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(119.5,-22.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_64.setTransform(112.6,-22.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_65.setTransform(82.8,-24.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_66.setTransform(71,-23.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgjAxQALgEAGgEQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_67.setTransform(34.3,-20.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_68.setTransform(25,-22.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_69.setTransform(13.5,-22.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_70.setTransform(-28.6,-22.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_71.setTransform(-37.8,-22.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_72.setTransform(-73.9,-24.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_73.setTransform(-81.5,-23.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_74.setTransform(-93.5,-20.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_75.setTransform(-118.2,-22.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_76.setTransform(-129.7,-22.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_77.setTransform(-136.7,-22.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_78.setTransform(-144.7,-24.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_79.setTransform(-154.3,-24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:15.4,y:-23.5}},{t:this.shape_30,p:{x:24.6,y:-23.6}},{t:this.shape_29},{t:this.shape_28,p:{x:47.1,y:-23.5}},{t:this.shape_27},{t:this.shape_26,p:{x:67.7,y:-23.6}},{t:this.shape_25},{t:this.shape_24,p:{x:89,y:-23.5}},{t:this.shape_23},{t:this.shape_22,p:{x:111.5,y:-23.5}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:134.2,y:-23.5}},{t:this.shape_18},{t:this.shape_17,p:{x:146.9,y:-23.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:178.1,y:-23.5}},{t:this.shape_13},{t:this.shape_12,p:{x:196.3,y:-23.5}},{t:this.shape_11},{t:this.shape_10,p:{x:212.9,y:-25.2}},{t:this.shape_9,p:{x:218.7,y:-23.5}},{t:this.shape_8,p:{x:227.3,y:-23.5}},{t:this.shape_7,p:{x:236.9,y:-23.6}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:275,y:-23.5}},{t:this.shape_2,p:{x:282.8,y:-23.6}},{t:this.shape_1,p:{x:287.1,y:-25.2}},{t:this.shape,p:{x:290.8,y:-20.3}}]}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_10,p:{x:-109.3,y:-24.2}},{t:this.shape_30,p:{x:-102.8,y:-22.6}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_19,p:{x:-64.9,y:-22.6}},{t:this.shape_26,p:{x:-49.4,y:-22.6}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_28,p:{x:-20,y:-22.6}},{t:this.shape_14,p:{x:-11.6,y:-22.6}},{t:this.shape_12,p:{x:1.5,y:-22.6}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_8,p:{x:47.3,y:-22.6}},{t:this.shape_22,p:{x:56.2,y:-22.6}},{t:this.shape_1,p:{x:66.4,y:-24.2}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_17,p:{x:92,y:-22.6}},{t:this.shape_9,p:{x:100.9,y:-22.6}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_7,p:{x:129.2,y:-22.6}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_31,p:{x:170.9,y:-22.6}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_24,p:{x:199.2,y:-22.6}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_3,p:{x:219.8,y:-22.6}},{t:this.shape_2,p:{x:227.6,y:-22.6}},{t:this.shape_55},{t:this.shape,p:{x:240.3,y:-19.3}}]},1).wait(1));

	// Layer_4
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_80.setTransform(27.2,8.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_81.setTransform(31.9,-22.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_82.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]}).wait(2));

	// Layer_3
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_83.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_83).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ8 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(180.9,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(174.3,-23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_2.setTransform(164.7,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_3.setTransform(156.7,-25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(146.8,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(137.5,-23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_6.setTransform(128.3,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(118.6,-21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(112.1,-25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(105.2,-25.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_10.setTransform(93,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(83.1,-23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(73.5,-25.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_13.setTransform(67.1,-25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_14.setTransform(62.3,-24.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(50.3,-21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(41,-23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(31.3,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_18.setTransform(22.5,-21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_19.setTransform(11.7,-23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(3.9,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_21.setTransform(-3.3,-24.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_22.setTransform(-10.7,-23.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_23.setTransform(-19.9,-21.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_24.setTransform(-32,-23.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(-43.5,-23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_26.setTransform(-51.5,-25.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_27.setTransform(-65.2,-21.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_28.setTransform(-74.8,-23.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_29.setTransform(-82.3,-24.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_30.setTransform(-89.6,-23.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_31.setTransform(-99,-23.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_32.setTransform(-107.9,-23.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_33.setTransform(-119.1,-25.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_34.setTransform(195.9,-23.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_35.setTransform(158.3,-24.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_36.setTransform(113.3,-23.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_37.setTransform(101.7,-24.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_38.setTransform(84.7,-25.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_39.setTransform(77.1,-24.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_40.setTransform(66.2,-23.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_41.setTransform(59.9,-23.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(52.1,-23.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_43.setTransform(44.9,-24.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_44.setTransform(37.5,-23.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_45.setTransform(28.3,-21.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(4.7,-23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_47.setTransform(-3.7,-23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_48.setTransform(-16.6,-21.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_49.setTransform(-26.2,-23.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_50.setTransform(-33.6,-24.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_51.setTransform(-48.6,-23.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_52.setTransform(-56.9,-23.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_53.setTransform(-91.3,-23.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(-102.9,-23.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_55.setTransform(-112.5,-25.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_56.setTransform(-124.1,-24.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_57.setTransform(-140.7,-25.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_58.setTransform(-150.4,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32,p:{x:-107.9,y:-23.5}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-74.8,y:-23.4}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-43.5,y:-23.5}},{t:this.shape_24,p:{x:-32}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:3.9,y:-23.5}},{t:this.shape_19,p:{x:11.7}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:41}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:83.1,y:-23.5}},{t:this.shape_10,p:{x:93,y:-25.3}},{t:this.shape_9,p:{x:105.2}},{t:this.shape_8,p:{x:112.1}},{t:this.shape_7},{t:this.shape_6,p:{x:128.3,y:-23.4}},{t:this.shape_5,p:{x:137.5}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:174.3}},{t:this.shape,p:{x:180.9}}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_28,p:{x:-131.5,y:-23.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_16,p:{x:-79.8}},{t:this.shape_9,p:{x:-66.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_10,p:{x:-39.8,y:-25.4}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_24,p:{x:16.2}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_11,p:{x:93.9,y:-23.6}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_19,p:{x:121.8}},{t:this.shape_32,p:{x:128.5,y:-23.6}},{t:this.shape_5,p:{x:141.7}},{t:this.shape_25,p:{x:151,y:-23.6}},{t:this.shape_35},{t:this.shape_8,p:{x:167.3}},{t:this.shape_1,p:{x:173.8}},{t:this.shape_6,p:{x:187.3,y:-23.5}},{t:this.shape_34},{t:this.shape_20,p:{x:204.3,y:-23.6}},{t:this.shape,p:{x:210.4}}]},1).wait(1));

	// Layer_4
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_59.setTransform(27.2,8.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_60.setTransform(31.9,-22.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_61.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]}).wait(2));

	// Layer_3
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_62.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ7 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(249,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_1.setTransform(245.3,-25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(241.5,-25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(234.6,-23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_4.setTransform(227.2,-25.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(215.7,-23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_6.setTransform(206,-23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_7.setTransform(198,-25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_8.setTransform(188.6,-25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(178.8,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_10.setTransform(169.2,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_11.setTransform(159.9,-23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(153.4,-25.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_13.setTransform(144.4,-23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(133.1,-23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(121.7,-23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(105.4,-21.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(96.1,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(86.5,-23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_19.setTransform(76.9,-25.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(68,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_21.setTransform(59.6,-23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(46.4,-23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_23.setTransform(37.8,-23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(28.9,-23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_25.setTransform(17.2,-23.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(5.9,-23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_27.setTransform(-2.5,-23.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(-15.6,-23.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_29.setTransform(-24.9,-23.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_30.setTransform(-33.9,-23.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_31.setTransform(-42.9,-21.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_32.setTransform(-56.7,-23.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_33.setTransform(-65.1,-23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_34.setTransform(-74.2,-23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_35.setTransform(-85.9,-23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-97.2,-23.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_37.setTransform(-106.2,-21.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_38.setTransform(-118.2,-24.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_39.setTransform(-125.6,-23.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_40.setTransform(-134.7,-25.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_41.setTransform(-144.8,-23.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_42.setTransform(-153.2,-23.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_43.setTransform(-162,-23.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-171,-23.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_45.setTransform(-182.1,-25.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_46.setTransform(168.1,-25.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(147.7,-21.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkAxQAMgDAFgFQAGgEAEgIIADgIIghhOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_48.setTransform(125.7,-21.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_49.setTransform(116.8,-21.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(107.3,-23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_51.setTransform(84.9,-25.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_52.setTransform(81.1,-25.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_53.setTransform(76.3,-24.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_54.setTransform(50.9,-25.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_55.setTransform(47.1,-25.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_56.setTransform(28.9,-23.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_57.setTransform(4.8,-23.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_58.setTransform(-1.4,-25.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_59.setTransform(-5.7,-23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-14.1,-25.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_61.setTransform(-27.4,-25.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_62.setTransform(-60.4,-25.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_63.setTransform(-68,-24.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_64.setTransform(-80,-21.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_65.setTransform(-89.2,-23.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_66.setTransform(-95.7,-25.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_67.setTransform(-102.3,-21.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_68.setTransform(-122.4,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-65.1,y:-23.5}},{t:this.shape_32,p:{x:-56.7,y:-23.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:5.9,y:-23.5}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:37.8,y:-23.5}},{t:this.shape_22},{t:this.shape_21,p:{x:59.6,y:-23.5}},{t:this.shape_20,p:{x:68,y:-23.5}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:133.1,y:-23.5}},{t:this.shape_13,p:{x:144.4}},{t:this.shape_12,p:{x:153.4}},{t:this.shape_11,p:{x:159.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:188.6,y:-25.3}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:215.7}},{t:this.shape_4,p:{x:227.2}},{t:this.shape_3},{t:this.shape_2,p:{x:241.5}},{t:this.shape_1,p:{x:245.3,y:-25.3}},{t:this.shape,p:{x:249}}]}).to({state:[{t:this.shape_68},{t:this.shape_11,p:{x:-112}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_32,p:{x:-51.2,y:-23.5}},{t:this.shape_13,p:{x:-39.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_26,p:{x:13.4,y:-23.6}},{t:this.shape_56},{t:this.shape_8,p:{x:40.5,y:-25.4}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_20,p:{x:57.1,y:-23.6}},{t:this.shape_23,p:{x:69.6,y:-23.6}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_1,p:{x:88.7,y:-25.4}},{t:this.shape_33,p:{x:98.9,y:-23.6}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_12,p:{x:131.9}},{t:this.shape_5,p:{x:138.4}},{t:this.shape_47},{t:this.shape_4,p:{x:159.6}},{t:this.shape_2,p:{x:164.3}},{t:this.shape_46},{t:this.shape_14,p:{x:174.3,y:-23.6}},{t:this.shape_21,p:{x:182.6,y:-23.6}},{t:this.shape,p:{x:188.4}}]},1).wait(1));

	// Layer_4
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_69.setTransform(27.2,8.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_70.setTransform(31.9,-22.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_71.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).wait(2));

	// Layer_3
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_72.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ6 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(195.4,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(191.2,-23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(185.9,-25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_3.setTransform(181.1,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(174.1,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_5.setTransform(165.1,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_6.setTransform(153,-24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_7.setTransform(145.7,-23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(136.5,-25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(129.6,-25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_10.setTransform(125.3,-23.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(112.6,-23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(104,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(95.1,-23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_14.setTransform(83.4,-23.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(72.1,-23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(63.7,-23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_17.setTransform(53.2,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_18.setTransform(45.5,-23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_19.setTransform(38.2,-24.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_20.setTransform(30.9,-23.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_21.setTransform(21.6,-21.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(9.6,-23.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(-2,-23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_24.setTransform(-10,-25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(-23.7,-23.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_26.setTransform(-33.4,-23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_27.setTransform(-41.4,-25.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(-51.2,-23.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_29.setTransform(-60.5,-23.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_30.setTransform(-69.8,-23.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-79.5,-21.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(-89.1,-21.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-98.4,-23.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(-107.4,-23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_35.setTransform(-118.5,-25.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_36.setTransform(152.6,-24.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_37.setTransform(122.4,-25.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_38.setTransform(103.8,-23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_39.setTransform(94.6,-25.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_40.setTransform(87,-24.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_41.setTransform(75,-21.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_42.setTransform(46.8,-23.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(37.2,-25.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_44.setTransform(26,-23.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgFABgHAAQgLABgGgHg");
	this.shape_45.setTransform(11,-24.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_46.setTransform(-5.6,-21.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(-29.2,-23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_48.setTransform(-37.5,-23.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_49.setTransform(-59.2,-25.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_50.setTransform(-66.8,-24.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(-78.8,-21.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_52.setTransform(-110.3,-25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-98.4}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:-60.5}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-23.7}},{t:this.shape_24},{t:this.shape_23,p:{x:-2,y:-23.5}},{t:this.shape_22,p:{x:9.6}},{t:this.shape_21},{t:this.shape_20,p:{x:30.9,y:-23.4}},{t:this.shape_19},{t:this.shape_18,p:{x:45.5,y:-23.5}},{t:this.shape_17,p:{x:53.2}},{t:this.shape_16,p:{x:63.7,y:-23.5}},{t:this.shape_15,p:{x:72.1,y:-23.5}},{t:this.shape_14,p:{x:83.4}},{t:this.shape_13},{t:this.shape_12,p:{x:104,y:-23.5}},{t:this.shape_11},{t:this.shape_10,p:{x:125.3}},{t:this.shape_9,p:{x:129.6}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:174.1,y:-23.5}},{t:this.shape_3},{t:this.shape_2,p:{x:185.9}},{t:this.shape_1,p:{x:191.2}},{t:this.shape,p:{x:195.4}}]}).to({state:[{t:this.shape_52},{t:this.shape_16,p:{x:-100.5,y:-23.6}},{t:this.shape_9,p:{x:-94.6}},{t:this.shape_33,p:{x:-88.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_18,p:{x:-50.2,y:-23.6}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_22,p:{x:-17.6}},{t:this.shape_46},{t:this.shape_20,p:{x:3.7,y:-23.5}},{t:this.shape_45},{t:this.shape_15,p:{x:18.3,y:-23.6}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_17,p:{x:54.9}},{t:this.shape_2,p:{x:59.2}},{t:this.shape_29,p:{x:65.7}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_25,p:{x:113.1}},{t:this.shape_37},{t:this.shape_4,p:{x:131.8,y:-23.6}},{t:this.shape_10,p:{x:139.5}},{t:this.shape_12,p:{x:145.8,y:-23.6}},{t:this.shape_36},{t:this.shape_23,p:{x:160,y:-23.6}},{t:this.shape_1,p:{x:168}},{t:this.shape_14,p:{x:177.4}},{t:this.shape,p:{x:186.3}}]},1).wait(1));

	// Layer_4
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_53.setTransform(27.2,8.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_54.setTransform(31.9,-22.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_55.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(2));

	// Layer_3
	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_56.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ5 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(154.7,-9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(148.2,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(143.9,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_3.setTransform(137.1,-11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_4.setTransform(128.2,-9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(115.4,-9.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_6.setTransform(105.7,-9.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_7.setTransform(98.8,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(90.3,-9.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_9.setTransform(81.1,-7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_10.setTransform(71.1,-9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_11.setTransform(61.9,-7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(48,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(38.4,-9.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(28.7,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(19.4,-9.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(10.5,-9.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(1.1,-11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_18.setTransform(-11.7,-9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_19.setTransform(-20.7,-9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_20.setTransform(-27.6,-9.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_21.setTransform(-36.1,-9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_22.setTransform(-45.3,-7.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_23.setTransform(-54.6,-9.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_24.setTransform(-63,-9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(-75.8,-9.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(-85.5,-9.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_27.setTransform(-92.9,-10.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(-100.7,-9.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_29.setTransform(-109.9,-11.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_30.setTransform(-116.5,-11.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_31.setTransform(-120.3,-11.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(-127.3,-7.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-136.6,-9.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(-145.5,-9.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_35.setTransform(-154.5,-7.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_36.setTransform(152.6,-33.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_37.setTransform(143,-33.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_38.setTransform(135,-35.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_39.setTransform(128.3,-35.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_40.setTransform(123.5,-34.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_41.setTransform(116.7,-33.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(107.8,-33.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_43.setTransform(98.6,-31.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_44.setTransform(84.7,-33.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(75,-33.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(65.4,-35.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_47.setTransform(53.2,-35.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(43.4,-33.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_49.setTransform(33.7,-31.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_50.setTransform(24.8,-33.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_51.setTransform(17.6,-34.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(5.9,-33.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_53.setTransform(-3.7,-33.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(-13.3,-33.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_55.setTransform(-22.9,-35.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(-32.5,-33.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_57.setTransform(-41.4,-33.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_58.setTransform(-49.2,-35.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_59.setTransform(-65.3,-33.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-77.3,-33.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_61.setTransform(-83.8,-35.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_62.setTransform(-90.7,-33.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_63.setTransform(-100.3,-35.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_64.setTransform(-112.5,-35.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_65.setTransform(-122,-33.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_66.setTransform(-131.6,-35.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_67.setTransform(-140.8,-33.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAOAAAbQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgsgrAAIgZAAg");
	this.shape_68.setTransform(-151.2,-35.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_69.setTransform(184.6,-24.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_70.setTransform(169.7,-26.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgJAGgNADg");
	this.shape_71.setTransform(150.7,-22.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_72.setTransform(130.6,-25.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(91.7,-24.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_74.setTransform(77.8,-24.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_75.setTransform(51.1,-24.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_76.setTransform(43.7,-25.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_77.setTransform(23.2,-24.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_78.setTransform(-3.9,-24.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_79.setTransform(-12.9,-26.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_80.setTransform(-20.5,-25.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_81.setTransform(-32.1,-26.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_82.setTransform(-39.7,-25.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_83.setTransform(-53.1,-24.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_84.setTransform(-67.2,-25.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_85.setTransform(-74.5,-26.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_86.setTransform(-84.3,-22.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_87.setTransform(-124.4,-25.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_88.setTransform(-129,-26.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAHAHIgFAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_89.setTransform(-135.9,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67,p:{x:-140.8,y:-33.4}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:-65.3,y:-33.6}},{t:this.shape_58},{t:this.shape_57,p:{x:-41.4,y:-33.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:24.8,y:-33.5}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:128.3,y:-35.2}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-145.5,y:-9.6}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-120.3,y:-11.4}},{t:this.shape_30,p:{x:-116.5,y:-11.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-54.6,y:-9.6}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-27.6,y:-9.7}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:10.5,y:-9.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:71.1,y:-9.6}},{t:this.shape_9,p:{x:81.1,y:-7.9}},{t:this.shape_8},{t:this.shape_7,p:{x:98.8,y:-9.7}},{t:this.shape_6},{t:this.shape_5,p:{x:115.4,y:-9.7}},{t:this.shape_4,p:{x:128.2,y:-9.6}},{t:this.shape_3},{t:this.shape_2,p:{x:143.9,y:-9.7}},{t:this.shape_1,p:{x:148.2,y:-11.3}},{t:this.shape,p:{x:154.7,y:-9.7}}]}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_67,p:{x:-112.7,y:-24.5}},{t:this.shape_9,p:{x:-103.1,y:-22.9}},{t:this.shape_20,p:{x:-95.1,y:-24.6}},{t:this.shape_39,p:{x:-90.8,y:-26.2}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_30,p:{x:-44.3,y:-26.2}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_59,p:{x:11.6,y:-24.6}},{t:this.shape_77},{t:this.shape_5,p:{x:32.4,y:-24.6}},{t:this.shape_1,p:{x:39.1,y:-26.2}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_7,p:{x:59.1,y:-24.6}},{t:this.shape_4,p:{x:69.6,y:-24.6}},{t:this.shape_74},{t:this.shape_2,p:{x:85,y:-24.6}},{t:this.shape_73},{t:this.shape_57,p:{x:100.4,y:-24.6}},{t:this.shape,p:{x:109.4,y:-24.6}},{t:this.shape_10,p:{x:122.9,y:-24.6}},{t:this.shape_72},{t:this.shape_50,p:{x:142.1,y:-24.6}},{t:this.shape_71},{t:this.shape_34,p:{x:159.3,y:-24.6}},{t:this.shape_70},{t:this.shape_23,p:{x:176,y:-24.6}},{t:this.shape_69},{t:this.shape_16,p:{x:193.2,y:-24.6}},{t:this.shape_31,p:{x:199.4,y:-26.4}}]},1).wait(1));

	// Layer_4
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_90.setTransform(27.2,8.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_91.setTransform(31.9,-22.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_92.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]}).wait(2));

	// Layer_3
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_93.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_93).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(202.2,-21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(198,-24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_2.setTransform(190.2,-24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_3.setTransform(183,-25.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_4.setTransform(175.6,-24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_5.setTransform(166.4,-22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(154.3,-24.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(142.8,-24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_8.setTransform(134.8,-26.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_9.setTransform(123.9,-26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(116.9,-24.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_11.setTransform(105.3,-24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_12.setTransform(94.9,-26.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(85,-24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_14.setTransform(73.4,-24.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(55.1,-24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_16.setTransform(43.1,-24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_17.setTransform(36.7,-26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_18.setTransform(29.7,-24.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(20.1,-26.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_20.setTransform(9.5,-26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(2.5,-26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(-13.3,-24.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_23.setTransform(-24.9,-24.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(-34.3,-24.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-40.8,-26.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_26.setTransform(-49.8,-24.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(-65.7,-24.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(-75.3,-24.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(-84.9,-26.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(-98.4,-24.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_31.setTransform(-108.1,-24.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_32.setTransform(-116.1,-26.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_33.setTransform(-125.9,-24.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAqA5IAAhTIgmBTIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_34.setTransform(-137.3,-26.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(168.9,-26.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_36.setTransform(152.4,-26.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_37.setTransform(128.9,-25.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_38.setTransform(112.3,-22.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_39.setTransform(80.3,-24.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(67.7,-24.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_41.setTransform(58.7,-26.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_42.setTransform(51.1,-25.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(21.7,-22.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_44.setTransform(-15.5,-26.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_45.setTransform(-19.8,-24.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(-51.3,-24.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(-61,-24.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_48.setTransform(-74.8,-22.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_49.setTransform(-84.1,-24.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_50.setTransform(-90.6,-26.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_51.setTransform(-95.4,-25.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(-103.2,-24.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAKIg3AAIAAApIA6AAIAAALg");
	this.shape_53.setTransform(-112.1,-26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-98.4}},{t:this.shape_29,p:{x:-84.9}},{t:this.shape_28},{t:this.shape_27,p:{x:-65.7}},{t:this.shape_26},{t:this.shape_25,p:{x:-40.8}},{t:this.shape_24,p:{x:-34.3}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:2.5}},{t:this.shape_20,p:{x:9.5}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:85,y:-24.5}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:134.8,y:-26.3}},{t:this.shape_7,p:{x:142.8,y:-24.5}},{t:this.shape_6,p:{x:154.3}},{t:this.shape_5},{t:this.shape_4,p:{x:175.6,y:-24.4}},{t:this.shape_3},{t:this.shape_2,p:{x:190.2,y:-24.5}},{t:this.shape_1,p:{x:198}},{t:this.shape,p:{x:202.2}}]}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_21,p:{x:-42}},{t:this.shape_29,p:{x:-28.2}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_30,p:{x:-9}},{t:this.shape_8,p:{x:0.6,y:-26.4}},{t:this.shape_25,p:{x:5.9}},{t:this.shape_27,p:{x:12.4}},{t:this.shape_43},{t:this.shape_20,p:{x:32.9}},{t:this.shape_24,p:{x:39.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_7,p:{x:88.7,y:-24.6}},{t:this.shape_6,p:{x:100.2}},{t:this.shape_38},{t:this.shape_4,p:{x:121.5,y:-24.5}},{t:this.shape_37},{t:this.shape_2,p:{x:136.1,y:-24.6}},{t:this.shape_1,p:{x:143.9}},{t:this.shape_36},{t:this.shape_13,p:{x:158.8,y:-24.6}},{t:this.shape_35},{t:this.shape,p:{x:175.3}}]},1).wait(1));

	// Layer_4
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_54.setTransform(27.2,8.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_55.setTransform(31.9,-22.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_56.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).wait(2));

	// Layer_3
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_57.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(186.1,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_1.setTransform(179.6,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(172.6,-23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_3.setTransform(164.6,-23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(154.9,-21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(141.4,-23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(131.7,-23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_7.setTransform(124.8,-23.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(116.3,-23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(107,-23.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(98.1,-23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_11.setTransform(89.2,-25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_12.setTransform(79.8,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASA7IgognIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_13.setTransform(72,-25.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(57.9,-23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_15.setTransform(48.7,-21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(39,-23.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(29.4,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_18.setTransform(21.9,-24.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(10.3,-23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(0.6,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_21.setTransform(-5.8,-25.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(-11.8,-23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_23.setTransform(-17.6,-25.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_24.setTransform(-21.9,-23.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(-29.6,-23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_26.setTransform(-38.6,-21.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(-52.9,-21.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(-62.2,-23.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(-71.8,-23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_30.setTransform(-80.4,-23.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(-89.4,-23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_32.setTransform(-101,-23.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-112.3,-23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_34.setTransform(-123.5,-25.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(204,-23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_36.setTransform(142.8,-21.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_37.setTransform(129.6,-23.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_38.setTransform(123.8,-29.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_39.setTransform(102.8,-25.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_40.setTransform(94.3,-23.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_41.setTransform(69,-24.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAHgEAIAAQAcAAABAfIAAAzg");
	this.shape_42.setTransform(48.8,-25.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_43.setTransform(41.2,-24.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_44.setTransform(31.4,-24.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(14.8,-23.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_46.setTransform(5.6,-25.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_47.setTransform(-2,-24.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_48.setTransform(-6.6,-25.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_49.setTransform(-15.4,-23.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_50.setTransform(-30.9,-23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_51.setTransform(-57.6,-23.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_52.setTransform(-67.5,-24.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_53.setTransform(-73,-25.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(-80.2,-23.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_55.setTransform(-88.8,-23.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(-102,-21.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_57.setTransform(-117.8,-25.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_58.setTransform(-121.6,-25.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_59.setTransform(-125.4,-25.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_60.setTransform(-132.3,-23.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_61.setTransform(-139.8,-24.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_62.setTransform(-146.5,-23.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_63.setTransform(-161.9,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33,p:{x:-112.3,y:-23.5}},{t:this.shape_32,p:{x:-101}},{t:this.shape_31},{t:this.shape_30,p:{x:-80.4,y:-23.5}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-29.6,y:-23.5}},{t:this.shape_24,p:{x:-21.9}},{t:this.shape_23,p:{x:-17.6}},{t:this.shape_22,p:{x:-11.8,y:-23.5}},{t:this.shape_21,p:{x:-5.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:29.4,y:-23.5}},{t:this.shape_16,p:{x:39}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:79.8,y:-23.5}},{t:this.shape_11},{t:this.shape_10,p:{x:98.1,y:-23.5}},{t:this.shape_9,p:{x:107}},{t:this.shape_8},{t:this.shape_7,p:{x:124.8}},{t:this.shape_6,p:{x:131.7,y:-23.5}},{t:this.shape_5,p:{x:141.4}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:172.6}},{t:this.shape_1,p:{x:179.6,y:-23.4}},{t:this.shape,p:{x:186.1}}]}).to({state:[{t:this.shape_63},{t:this.shape_16,p:{x:-155.2}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_9,p:{x:-111.3}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_6,p:{x:-46.1,y:-23.6}},{t:this.shape_24,p:{x:-37.7}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_1,p:{x:24,y:-23.5}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_33,p:{x:57.8,y:-23.6}},{t:this.shape_41},{t:this.shape_25,p:{x:76.3,y:-23.6}},{t:this.shape_17,p:{x:85.2,y:-23.6}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_12,p:{x:111.8,y:-23.6}},{t:this.shape_7,p:{x:119.6}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_10,p:{x:151.8,y:-23.6}},{t:this.shape_2,p:{x:159.5}},{t:this.shape_32,p:{x:168.9}},{t:this.shape_23,p:{x:177.9}},{t:this.shape_30,p:{x:183.7,y:-23.6}},{t:this.shape_22,p:{x:191.6,y:-23.6}},{t:this.shape_21,p:{x:197.6}},{t:this.shape_35},{t:this.shape_5,p:{x:213.2}},{t:this.shape,p:{x:219.8}}]},1).wait(1));

	// Layer_4
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_64.setTransform(27.2,8.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_65.setTransform(31.9,-22.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_66.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(2));

	// Layer_3
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_67.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_67).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(279.5,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_1.setTransform(273,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(266,-23.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_3.setTransform(258,-23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(248.3,-21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(234.8,-23.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(225.1,-23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_7.setTransform(217.1,-25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_8.setTransform(205.2,-23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_9.setTransform(193.6,-23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_10.setTransform(187.1,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_11.setTransform(181.8,-25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_12.setTransform(171.9,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_13.setTransform(160.3,-23.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(149,-23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(137.5,-23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgaBBIApiAIALAAIgoCAg");
	this.shape_16.setTransform(128.3,-25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(121.3,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_18.setTransform(111.6,-23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_19.setTransform(104.7,-23.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(96.2,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(86.9,-23.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(78,-23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_23.setTransform(69.1,-25.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_24.setTransform(59.7,-23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_25.setTransform(51.9,-25.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(37.8,-23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_27.setTransform(28.6,-21.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(18.9,-23.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(9.3,-23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_30.setTransform(1.8,-24.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_31.setTransform(-7.5,-23.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_32.setTransform(-15.2,-23.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_33.setTransform(-22.5,-24.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_34.setTransform(-29.8,-23.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_35.setTransform(-39.1,-21.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_36.setTransform(-51.1,-23.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(-62.7,-23.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_38.setTransform(-70.7,-25.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-84.4,-23.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_40.setTransform(-94.1,-23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_41.setTransform(-103.3,-21.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(-113.3,-23.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_43.setTransform(-120.7,-24.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-127.8,-23.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_45.setTransform(-135,-24.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_46.setTransform(-144.3,-23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(-152.8,-23.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_48.setTransform(-160.8,-25.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_49.setTransform(-170.2,-23.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_50.setTransform(-179.6,-23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_51.setTransform(-188.5,-23.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_52.setTransform(-199.7,-25.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_53.setTransform(274.7,-25.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_54.setTransform(266.2,-23.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_55.setTransform(240.9,-24.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_56.setTransform(220.7,-25.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_57.setTransform(213.1,-24.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_58.setTransform(201.1,-21.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_59.setTransform(185.3,-25.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_60.setTransform(151.6,-25.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_61.setTransform(137.7,-25.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgaBAIAoiAIAMAAIgoCAg");
	this.shape_62.setTransform(133.6,-25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(117.3,-23.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_64.setTransform(110.9,-25.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_65.setTransform(104.9,-23.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_66.setTransform(97,-23.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_67.setTransform(91.2,-25.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_68.setTransform(56.1,-21.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgFAAQgMABgGgHg");
	this.shape_69.setTransform(44,-24.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(27.5,-23.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_71.setTransform(18.3,-25.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_72.setTransform(10.7,-24.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_73.setTransform(6.1,-25.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_74.setTransform(-2.8,-23.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_75.setTransform(-18,-23.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_76.setTransform(-27,-21.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_77.setTransform(-42.8,-25.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_78.setTransform(-47.6,-24.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_79.setTransform(-53.2,-24.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_80.setTransform(-68.6,-23.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_81.setTransform(-94.1,-24.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_82.setTransform(-110.7,-21.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_83.setTransform(-134.3,-23.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_84.setTransform(-142.7,-23.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_85.setTransform(-156.1,-21.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_86.setTransform(-171.9,-25.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_87.setTransform(-178.9,-21.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(-197.8,-23.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_89.setTransform(-207,-25.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_90.setTransform(-217.1,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51,p:{x:-188.5,y:-23.5}},{t:this.shape_50,p:{x:-179.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-144.3}},{t:this.shape_45},{t:this.shape_44,p:{x:-127.8,y:-23.5}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:-84.4}},{t:this.shape_38},{t:this.shape_37,p:{x:-62.7,y:-23.5}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-15.2,y:-23.5}},{t:this.shape_31,p:{x:-7.5}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:18.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:59.7,y:-23.5}},{t:this.shape_23},{t:this.shape_22,p:{x:78,y:-23.5}},{t:this.shape_21,p:{x:86.9}},{t:this.shape_20},{t:this.shape_19,p:{x:104.7}},{t:this.shape_18},{t:this.shape_17,p:{x:121.3}},{t:this.shape_16},{t:this.shape_15,p:{x:137.5}},{t:this.shape_14,p:{x:149,y:-23.5}},{t:this.shape_13,p:{x:160.3}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:193.6,y:-23.4}},{t:this.shape_8,p:{x:205.2}},{t:this.shape_7},{t:this.shape_6,p:{x:225.1,y:-23.5}},{t:this.shape_5,p:{x:234.8}},{t:this.shape_4},{t:this.shape_3,p:{x:258,y:-23.4}},{t:this.shape_2,p:{x:266}},{t:this.shape_1},{t:this.shape,p:{x:279.5}}]}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_50,p:{x:-188.2}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_39,p:{x:-165.4}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_15,p:{x:-122.8}},{t:this.shape_82},{t:this.shape_9,p:{x:-101.5,y:-23.5}},{t:this.shape_81},{t:this.shape_51,p:{x:-86.9,y:-23.6}},{t:this.shape_46,p:{x:-79.1}},{t:this.shape_80},{t:this.shape_44,p:{x:-60.2,y:-23.6}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_28,p:{x:-36.3}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_3,p:{x:36.7,y:-23.5}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_32,p:{x:65.1,y:-23.6}},{t:this.shape_31,p:{x:72.8}},{t:this.shape_13,p:{x:82.2}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_21,p:{x:126.5}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_17,p:{x:144.2}},{t:this.shape_60},{t:this.shape_37,p:{x:158.9,y:-23.6}},{t:this.shape_19,p:{x:166.9}},{t:this.shape_8,p:{x:176.3}},{t:this.shape_59},{t:this.shape_5,p:{x:191.8}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_24,p:{x:229.7,y:-23.6}},{t:this.shape_55},{t:this.shape_22,p:{x:248.2,y:-23.6}},{t:this.shape_6,p:{x:257.1,y:-23.6}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_14,p:{x:283.7,y:-23.6}},{t:this.shape_2,p:{x:291.5}},{t:this.shape,p:{x:295.7}}]},1).wait(1));

	// Layer_4
	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_91.setTransform(27.2,8.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_92.setTransform(31.9,-22.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_93.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]}).wait(2));

	// Layer_3
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_94.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


(lib.mcQ1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(201.4,-20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(194.8,-23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(185.2,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_3.setTransform(176.6,-23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(167.6,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(158,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_6.setTransform(148.8,-23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_7.setTransform(141.3,-24.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(129.6,-23.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(120,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_10.setTransform(112,-25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_11.setTransform(102.5,-21.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(92.5,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_13.setTransform(86.1,-25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_14.setTransform(79.9,-21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(70.9,-23.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(62,-23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_17.setTransform(50.5,-23.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_18.setTransform(37.5,-25.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(30.5,-21.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(20.9,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_21.setTransform(11.8,-25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(-1.5,-23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_23.setTransform(-10.1,-23.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_24.setTransform(-18.1,-25.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-24.8,-25.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_26.setTransform(-29.6,-24.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_27.setTransform(-36.7,-23.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_28.setTransform(-43.9,-24.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_29.setTransform(-54.3,-25.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_30.setTransform(-61,-25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_31.setTransform(-64.8,-25.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(-71.7,-23.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(-80.8,-25.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_34.setTransform(-95.1,-23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_35.setTransform(-106.6,-23.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(-118.6,-23.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAHQgFAGgIAEQAKABAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaABIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_37.setTransform(-128.4,-25.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_38.setTransform(272.9,-24.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_39.setTransform(223.6,-21.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_40.setTransform(194.3,-23.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_41.setTransform(157.8,-25.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_42.setTransform(149,-23.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_43.setTransform(136.6,-23.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_44.setTransform(125.4,-25.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(114,-23.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_46.setTransform(106.5,-24.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(94.6,-25.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_48.setTransform(78.9,-23.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_49.setTransform(67.1,-23.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAZA7IAAgxQgEAHgHAEQgHAEgIAAQgLAAgJgFQgHgFgFgJQgFgJABgNQgBgMAFgJQAFgKAHgFQAJgGALABQAIgBAHAFQAIAEADAJIACgPIALAAIAAAWIAABcgAgRgmQgHAIAAAOQAAAPAHAIQAGAHALABQAMgBAGgHQAHgIAAgPQAAgPgHgHQgGgJgMABQgLgBgGAJg");
	this.shape_50.setTransform(57.5,-21.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_51.setTransform(48.5,-23.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_52.setTransform(41.8,-23.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(29.8,-23.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_54.setTransform(23.1,-23.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_55.setTransform(1.2,-23.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_56.setTransform(-8,-23.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgjAxQALgDAGgFQAFgEAFgIIACgIIgihOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_57.setTransform(-16.8,-21.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_58.setTransform(-29.3,-23.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_59.setTransform(-38.2,-23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_60.setTransform(-51.3,-23.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_61.setTransform(-59.7,-23.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_62.setTransform(-68.3,-23.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(-77.5,-23.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_64.setTransform(-89.1,-23.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_65.setTransform(-104.6,-23.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_66.setTransform(-113.6,-25.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_67.setTransform(-121.2,-24.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_68.setTransform(-132.5,-23.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_69.setTransform(-143.9,-23.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(-155.5,-23.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_71.setTransform(-164.7,-25.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_72.setTransform(-178.7,-21.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_73.setTransform(-188,-23.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_74.setTransform(-194.5,-25.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_75.setTransform(-198.8,-23.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgagBIghAAgAgdgFIAeAAQANAAAGgGQAHgFAAgJQAAgUgaAAIgeAAg");
	this.shape_76.setTransform(-207.4,-25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-61}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-36.7,y:-23.5}},{t:this.shape_26},{t:this.shape_25,p:{x:-24.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-1.5,y:-23.5}},{t:this.shape_21},{t:this.shape_20,p:{x:20.9,y:-23.5}},{t:this.shape_19},{t:this.shape_18,p:{x:37.5}},{t:this.shape_17,p:{x:50.5}},{t:this.shape_16,p:{x:62,y:-23.5}},{t:this.shape_15,p:{x:70.9}},{t:this.shape_14},{t:this.shape_13,p:{x:86.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:129.6}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:167.6,y:-23.5}},{t:this.shape_3,p:{x:176.6,y:-23.5}},{t:this.shape_2},{t:this.shape_1,p:{x:194.8}},{t:this.shape,p:{x:201.4}}]}).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_4,p:{x:14.6,y:-23.6}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_30,p:{x:73.6}},{t:this.shape_48},{t:this.shape_27,p:{x:85.7,y:-23.6}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_25,p:{x:130.1}},{t:this.shape_43},{t:this.shape_18,p:{x:143.2}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_20,p:{x:171.2,y:-23.6}},{t:this.shape_15,p:{x:180.8}},{t:this.shape_40},{t:this.shape_22,p:{x:203.3,y:-23.6}},{t:this.shape_3,p:{x:211.2,y:-23.6}},{t:this.shape_13,p:{x:217.2}},{t:this.shape_39},{t:this.shape_8,p:{x:233.3}},{t:this.shape_17,p:{x:245}},{t:this.shape_16,p:{x:256.5,y:-23.6}},{t:this.shape_1,p:{x:265.4}},{t:this.shape_38},{t:this.shape,p:{x:277.6}}]},1).wait(1));

	// Layer_4
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#D40000").ss(4,2,0,3).p("EAtQAABMg3XAAAMgjIgAB");
	this.shape_77.setTransform(27.2,8.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#D40000").ss(1,2,0,3).p("Egt+AE7IArl1IBpg/IhghJIALh6MAjvAAAMA3PAAAIheJ4");
	this.shape_78.setTransform(31.9,-22.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F5F5F5").s().p("AyWE7IArl0IBpg/IhghKIALh5MAjuAAAIhmJ3g");
	this.shape_79.setTransform(-144.9,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]}).wait(2));

	// Layer_3
	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FAFAFA").s().p("Egt+AE7IArl0IBpg/IhghKIALh5MBa+AAAIheJ3g");
	this.shape_80.setTransform(31.9,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_80).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-264.4,-55.7,591.8,66.4);


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


(lib.instru = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(178.8,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(175.1,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(168.1,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_3.setTransform(158.9,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_4.setTransform(150.3,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(142,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(133.6,2.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAEAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(120.4,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(111.1,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(101.5,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAGgFAEgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_10.setTransform(92.7,4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_11.setTransform(80.8,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(70.9,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_13.setTransform(63.5,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(56.4,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_15.setTransform(47.4,4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_16.setTransform(36.4,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(29.4,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_18.setTransform(18.3,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_19.setTransform(9.8,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(0.7,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_21.setTransform(-11.4,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_22.setTransform(-23.4,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAEAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_23.setTransform(-33.1,4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(-46.6,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_25.setTransform(-56.2,2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_26.setTransform(-64.2,0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_27.setTransform(-72.5,0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(-82.3,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_29.setTransform(-89.8,1.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_30.setTransform(-96.8,2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_31.setTransform(-103.1,0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(-113.9,2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_33.setTransform(-123.6,2.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_34.setTransform(-133.2,0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_35.setTransform(-144.8,1.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-151.9,2.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_37.setTransform(-158.6,2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(-166.4,2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_39.setTransform(-175.7,0.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_40.setTransform(160,2.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_41.setTransform(151.2,2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_42.setTransform(142.1,0.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_43.setTransform(122.2,0.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_44.setTransform(115.8,0.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_45.setTransform(87.1,2.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_46.setTransform(57,0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_47.setTransform(49.4,1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(37.9,2.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_49.setTransform(30.4,1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(13.8,2.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(0,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_52.setTransform(-23.8,2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_53.setTransform(-45.4,0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(-74.1,2.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_55.setTransform(-122.3,2.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_56.setTransform(-152.7,2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAOAAAbQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgMQALgLAAgXQAAgsgrgBIgZAAg");
	this.shape_57.setTransform(-161.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-158.6}},{t:this.shape_36},{t:this.shape_35,p:{x:-144.8}},{t:this.shape_34,p:{x:-133.2}},{t:this.shape_33,p:{x:-123.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-96.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-46.6}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:9.8}},{t:this.shape_18,p:{x:18.3}},{t:this.shape_17,p:{x:29.4}},{t:this.shape_16},{t:this.shape_15,p:{x:47.4}},{t:this.shape_14,p:{x:56.4}},{t:this.shape_13,p:{x:63.5}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:101.5}},{t:this.shape_8,p:{x:111.1}},{t:this.shape_7,p:{x:120.4}},{t:this.shape_6},{t:this.shape_5,p:{x:142}},{t:this.shape_4,p:{x:150.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:175.1}},{t:this.shape,p:{x:178.8}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_33,p:{x:-145.7}},{t:this.shape_7,p:{x:-136.1}},{t:this.shape_55},{t:this.shape_24,p:{x:-112.6}},{t:this.shape_17,p:{x:-103.3}},{t:this.shape_34,p:{x:-89.5}},{t:this.shape_37,p:{x:-81.1}},{t:this.shape_54},{t:this.shape_15,p:{x:-64.6}},{t:this.shape_35,p:{x:-53}},{t:this.shape_53},{t:this.shape_30,p:{x:-36.4}},{t:this.shape_52},{t:this.shape_9,p:{x:-15.4}},{t:this.shape_18,p:{x:-7}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_8,p:{x:23}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_14,p:{x:66}},{t:this.shape_4,p:{x:78.4}},{t:this.shape_45},{t:this.shape_1,p:{x:93.6}},{t:this.shape_13,p:{x:98.2}},{t:this.shape_19,p:{x:105.7}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_5,p:{x:128.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape,p:{x:166.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.7,-12.9,365.5,25.9);


(lib.iconTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.996)").s().p("Ai6DlQgEAAgDgDQgCgCAAgDIAAgRQAAgDACgDQADgCAEAAIAYAAQAAhDAbgzQAcgzAogbQgogagcgzQgbgzAAhDIgYAAQgEAAgDgCQgCgDAAgDIAAgQQAAgEACgCQADgDAEAAIF2AAQADAAADADQACACAAAEIAAAQQAAADgCADQgDACgDAAIgYAAQAABDgbAzQgbAzgqAaQAqAbAbAzQAbAzAABDIAYAAQADAAADACQACADAAADIAAARQAAADgCACQgDADgDAAgAh5iCQAKAfAOAWQAPAXASAQQATAQATAIQAFABACAFQAEAEAAAEQAAAFgEAEQgCAFgFACQgjANgbAkICxAAQgagkgkgNQgFgCgCgFQgEgEAAgFQAAgEAEgEQACgFAFgBQATgIAUgQQARgQAPgXQAPgWAJgfQAJgfAAgiIkFAAQAAAiAJAfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,153,0,0.2)").s().p("Aj5EbQgcgcACgiIAAgRQAAgkAagaIAGgGIAGgEQAJgyAWgpIABAAQALgWAOgTQgOgSgLgVIgBgBQgWgpgJgxIgMgLQgagaAAgkIAAgQQAAglAagaQAagaAlAAIF2AAQAsAAAYAhQAUAYAAAgIAAAQQAAAggUAYQgIAKgKAHQgIAxgXApIAAAAQgLAWgOASQAOATALAWIAAAAQAWApAJAxQAHAEAFAHQAaAaAAAkIAAARQACAegWAZQgZAfgrACIl2AAIgBAAQgkAAgagagAjrkMQgUAUAAAdIAAAQQAAAcAUAUQAIAIAJAFQAHAzAXAqIAAAAQAPAcASAVQgSAWgPAcIAAAAQgXArgHAzQgGADgGAEIgFAFQgUAUAAAcIAAARQgBAaAVAWQAUAUAdAAIF2AAQAfgBATgVIgCACQAVgWgBgaIAAgRQAAgcgUgUQgHgIgJgFQgIgzgWgqIAAABQgPgdgSgWQASgVAPgcIAAAAQAWgrAIgzQAKgFAIgIIgCABQAUgUAAgcIAAgQQAAgbgSgUQgTgWgfAAIl2AAIgBAAQgcAAgUAUgAAAhaIACABIgCgBQAHgDAGgGIAAAAQAIgHAGgJIg1AAQAHAJAHAHIABABQAGAFAFADIAAAAQgLAEgJAGIgEgDIgBgBQgMgKgKgPIAAAAQgHgMgFgOIB3AAQgFAOgHALIgBABQgJAPgMAKIAAABIgFADQgJgGgMgEg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,153,0,0.4)").s().p("AjrENQgVgWABgaIAAgRQAAgcAUgUIAFgFQAGgEAGgDQAHgzAXgrIAAAAQAPgcASgWQgSgVgPgcIAAAAQgXgqgHgzQgJgFgIgIQgUgUAAgcIAAgQQAAgdAUgUQAUgUAdAAIF2AAQAfAAATAWQASAUAAAbIAAAQQAAAcgUAUIACgBQgIAIgKAFQgIAzgWArIAAAAQgPAcgSAVQASAWAPAdIAAgBQAWAqAIAzQAJAFAHAIQAUAUAAAcIAAARQABAagVAWIACgCQgTAVgfABIl2AAIgBAAQgcAAgUgUgAjdj+QgOAPAAAUIAAAQQAAAUAOAOQAJAJAMAEQAGA1AYAtQASAiAYAYQgYAZgSAjQgYAsgGA2QgKADgIAGIgDADQgOAOAAAUIAAARQgBASAPAQQAPAOAUAAIF2AAQAXgBAOgRQAMgOgBgQIAAgRQAAgUgOgOQgIgJgMgDQgHg3gXgrIAAAAQgSgjgYgZQAYgYASgjIAAABQAXgtAHg2QANgEAKgLQALgNAAgSIAAgQQAAgSgLgNQgNgSgYAAIl2AAIgBAAQgUAAgOAOgAgFAZIAEgGIABgEIADAEIADAGgAAAhEIAHgDQAHgDAHgGIAFgDIAAgBQAMgKAJgPIABgBQAHgLAFgOIh3AAQAFAOAHAMIAAgBQAKAQAMAKIABABIAEADQAHAGAHADIAGADQgKAFgJAIQgJgFgJgIIgBAAQgOgNgMgSQgLgSgHgZIgDgNICsAAIgDANQgIAZgLASIgBABQgLASgNAMIgBAAQgJAIgKAFQgJgIgLgFg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0.8)").s().p("AjPDxQgJgJABgLIAAgRQAAgMAIgIIACgBQAIgGALgBIAEAAQAEg8AZgvIAAAAQAXgqAegbQgegagXgqIAAAAQgZgvgEg8IgEAAQgMAAgJgIQgIgIAAgMIAAgQQAAgMAIgIQAJgJAMAAIF2AAQANAAAIAKIgBgBQAIAIAAAMIAAAQQAAAMgIAIIABgCQgIAKgNAAIgFAAQgEA8gZAvQgWAqgfAaQAfAbAWAqQAZAvAEA8IAFAAQANAAAHAIQAIAIAAAMIAAARQABALgJAJIABgCQgIAJgNABIl2AAIgBAAQgLAAgJgIgAgBATIgEAGQgGAGgIADIAAAAQgLAFgJAGIBQAAQgKgGgLgFIAAAAQgIgDgGgGIgDgGIgDgDIgBADgAgzg2IAAABQAPANAQAGIAAABIABAAIAHADIAAAAIAAAAQAHAEAEAIIABAEIADgFQAEgHAGgEIABAAIAGgDIABAAIAAgBQAQgGAPgNIAAgBQAQgNANgVIAAAAQAOgUAIgcQAFgTACgUIjbAAQACAUAGATQAIAcANAUIAAAAQANAVAQANg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,0,0.6)").s().p("AjdD/QgPgQABgSIAAgRQAAgUAOgOIADgDQAIgGAKgDQAGg2AYgsQASgjAYgZQgYgYgSgiQgYgtgGg1QgMgEgJgJQgOgOAAgUIAAgQQAAgUAOgPQAPgOAUAAIF2AAQAYAAANASQALANAAASIAAAQQAAASgLANQgKALgNAEQgHA2gXAtIAAgBQgSAjgYAYQAYAZASAjIAAAAQAXArAHA3QAMADAIAJQAOAOAAAUIAAARQABAQgMAOQgOARgXABIl2AAIgBAAQgUAAgOgOgAjNC3IgCABQgIAIAAAMIAAARQgBALAJAIQAJAJAMAAIF2AAQANgBAIgJIgBABQAJgIgBgLIAAgRQAAgMgIgIQgHgIgNAAIgFAAQgEg8gZgvQgWgqgfgbQAfgaAWgqQAZgvAEg8IAFAAQANAAAIgKIgBACQAIgIAAgMIAAgQQAAgMgIgIIABABQgIgKgNAAIl2AAQgMAAgJAJQgIAIAAAMIAAAQQAAAMAIAIQAJAIAMAAIAEAAQAEA8AZAvIAAAAQAXAqAeAaQgeAbgXAqIAAAAQgZAvgEA8IgEAAQgLABgIAGgAgoAtQAKgGALgFIAAAAQAIgDAGgGIALAAQAGAGAIADIAAAAQALAFAKAGgAgMgeIADgEIgDAEIAAAAgAALgiIACAEIAAAAgAAAgtQAGgEAHgDIABAAIABAAIAAgBIAFgCQAKgFAJgIIABAAQANgMALgSIABgBQALgSAIgZIADgNIisAAIADANQAHAZALASQAMASAOANIABAAQAJAIAJAFIAGADQAIACAFAFQgHAGgGAJIgGgDIgBAAIAAgBQgQgGgPgNIAAgBQgQgNgNgVIAAAAQgNgUgIgcQgGgTgCgUIDbAAQgCAUgFATQgIAcgOAUIAAAAQgNAVgQANIAAABQgPANgQAGIAAABIgBAAIgHADQgFgJgIgGg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.6,-30.8,55.2,61.8);


(lib.iconLike = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(247,255,253,0.996)").s().p("ABJE6QgkAAgkgIQgigJgvgQQgrgPgJAAIhsAAQgVAAgOgOQgOgPAAgUIAAjwQAAgUAOgPQAOgOAVAAIBmAAQAOgJAngxQAWgdASgUQAJgJAFgXQAEgXAHgZQAHgZAQgPQAOgOAUAAQAfAAAaAMQAZAMANAaQAOAaAAAsQgBAkgSAlIBDAAQAnAAAdAdQAcAcAAAnQAAAhgSAcQADAMAAAOQABAdgQAZQACAIAAAJQAAAmgXAdQAAA0ggAfQggAeg2AAgAiQDZIAMAAIAMABIAMADIAPAEIANAEIANAFIALAEQBPAcAyAAIAtAAQBJAAAAg/QAAgKgCgMQALgFAHgOQAGgOAAgOQAAgOgGgMQATgTABgaQAAgJgEgMQgDgMgHgGQAMgBAJgRQAIgQAAgNQAAgUgOgOQgQgPgSAAIiGAAQABgWARgmQATgmAAgXQAAglgMgRQgMgSgkAAQgKAKgFAWQgFAWgGAZQgIAZgOARQgIAIgVAaIgJALIgLAQIgOAQIgOARIgPANQgIAHgIADQgGAEgHAAIgMAAgAjqCwQgGAHAAAKQAAAKAGAHQAIAHAJAAQALAAAGgHQAIgHAAgKQAAgKgIgHQgGgHgLAAQgJAAgIAHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(13,223,223,0.498)").s().p("AB5F2IgwAAQgsAAgpgKIAAAAQgmgJgygSIAAAAIgggLIhsAAQgtAAgggfIgBgCQgfggAAgsIAAjwQAAgsAfggIABgCQAggfAtAAIBPAAIAcgjIAAAAQAYgfAUgWIABAAQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgBAAQAGgaAHgbQAMgqAcgaIAAABQAgggArABQAtAAAlASIABAAQArAVAWArIABABQATAkAAA9IAAANQA5AEAqArIAAgBQAuAvAAA/QAAAlgPAhIABARQAAAigOAgIAAAFQAAAwgYAmQgFBDgtApIAAgBQgvAvhPAAIgBAAgAgHFZIAAAAQAnAJApAAIAwAAQBHAAAqgpIABAAQAoglAEg+QAXgkAAgsIAAgJQAOgeAAggIgCgUQAQgfAAgkQAAg3gogoIAAgBQgpgog4AAIgKAAQADgRgBgQQABg3gSghIgBAAQgTgmglgSIAAAAQgigQgoAAQgkAAgZAZIAAAAQgYAWgKAlQgIAagFAYIgDANIAAAAQgUAVgXAeIAAAAQgYAfgMAMIhXAAQglAAgaAaIgBABQgZAaAAAkIAADwQAAAkAZAbIABABQAaAZAlAAIBsAAIAnANIAAAAQAxARAlAJgABJDiQgrgBhEgXIgBAAIAAAAIgPgGIgKgDIgHgDIgJgCIAAgBIgTgFIgFgBIAAirIACgBIABgBQAMgFAMgKIAAAAIAQgOIABgBQAHgHAJgLIAAgBIABgBIANgQIACgCIALgOIABgBIAEgGIADgEQASgXAHgIIABgBQAWgXAKgjIAIgdIAAALQgBAQgOAcIAAAAQgXAxACAcQAAARALAMQAMALAQAAICFAAQAEABACACIABAAQACADAAADQgBAFgCAGQgJADgGAHQgLAMABAQQAAAPALAMIAAABIgBgBIACAKQAAAJgHAHQgKAKgCANQgCANAHAMQACADAAAEQgBAFgCAFIAAABIAAABQgMAFgGAMQgGAMACANIACAPQgDAXgeAAgAAAg/IgCACIgJAMIgDAEIgOAQIgBABIgBABQgIAMgIAHIgCACIgQANIAAAAQgKAJgKAGIAACPIAKADIABABIAGACIALAEIAIACIAQAGQBAAWApABIAtAAQAKAAADgDIgBgLQgDgUAJgSQAGgMALgIQgIgRADgSQADgUAOgOIABgCIAAgBQgMgQAAgUQgBgWANgQIhqAAQgYAAgSgRQgPgQgCgVIgBADg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(13,223,223,0.247)").s().p("AB5GKIgwAAQguAAgsgLIAAAAQgmgJgzgSIAAAAQgXgHgDgDIhsAAQg1AAglglIgDgCQgkgmAAg0IAAjwQAAg0AkgmIADgCQAlglA1AAIBGAAIAVgbIAAAAQAVgbASgUQAFgaAIgcQANgwAggdIABAAQAmglAyABQAyAAApATIABABQAxAYAZAxIAAABQAWAmABBAQA0AJAoAoIAAABQA0A0AABHQAAAngPAjIAAANQABAkgOAhIAAACQAAAzgYAqQgHBHgxAsIAAAAQg0A0hYAAIgBAAgAgMFsIAAAAQApAKAsAAIAwAAQBQAAAvgvIAAABQAtgpAFhDQAYgmAAgwIAAgFQAOggAAgiIgBgRQAPghAAglQAAg/gugvIAAABQgqgrg5gEIAAgNQAAg9gTgkIgBgBQgWgrgrgVIgBAAQglgSgtAAQgrgBggAgIAAgBQgcAagMAqQgHAbgGAaIABAAQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABAAIgBAAQgUAWgYAfIAAAAIgcAjIhPAAQgtAAggAfIgBACQgfAgAAAsIAADwQAAAsAfAgIABACQAgAfAtAAIBsAAIAgALIAAAAQAyASAmAJgABJDOQgpgBhAgWIgQgGIgIgCIgLgEIgGgCIgBgBIgKgDIAAiPQAKgGAKgJIAAAAIAQgNIACgCQAIgHAIgMIABgBIABgBIAOgQIADgEIAJgMIACgCIABgDQACAVAPAQQASARAYAAIBqAAQgNAQABAWQAAAUAMAQIAAABIgBACQgOAOgDAUQgDASAIARQgLAIgGAMQgJASADAUIABALQgDADgKAAgAgMgRQgLAOgJAIIgCACIgQAPIAAAAIgOALIAAB2IABAAIAPAFIAHACIAQAGQA8AVAmABIAkAAQgBgVAKgUQAEgKAHgHQgEgQADgQQADgUALgPQgIgQgBgSQAAgLACgJIhLAAQghAAgXgWIgIgKIgIAIg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(13,223,223,0.749)").s().p("AgHFZIAAAAQglgJgxgSIAAAAIgngMIhsAAQglAAgagZIgBgBQgZgbAAgkIAAjwQAAgkAZgbIABAAQAagaAlAAIBXAAQAMgMAYgfIAAAAQAXgeAUgVIAAAAIADgNQAFgYAIgaQAKglAYgXIAAABQAZgZAkAAQAoAAAiAPIAAABQAlASATAmIABAAQASAhgBA3QABAQgDARIAKAAQA4AAApAoIAAABQAoAoAAA3QAAAkgQAfIACAUQAAAggOAeIAAAJQAAAsgXAkQgEA+goAlIgBAAQgqAphHAAIgwAAIgBAAQgoAAgngJgAgDFFQAlAJAnAAIAwAAQA/AAAlgkQAkghACg5QAXghAAgpIgBgNQAPgbgBgfQAAgMgCgLQARgeAAgiQAAgvgigiIAAAAQgjgjgwAAIgkAAQAJgbAAgaQAAgygQgdIAAAAQgQgggggPIAAAAQgdgOgkAAQgcAAgUATIABAAQgVATgIAfQgIAagEAYIAAgBQgDAQgFAGIgBABQgTAUgWAeQgeAmgNAMIhgAAQgdAAgUAUIgBAAQgTAVAAAcIAADwQAAAcATAVIABAAQAUAUAdAAIBsAAQAHABAnANIAAAAQAwAQAjAJgABJD2QgvgBhKgZIAAAAIgBgBIgLgEIgMgEIgEgBIgKgDIgBgBIgRgFIgMgCIgBAAIgHgBIAAjKQAHgBAHgEIAAAAQAKgEAKgJIAAAAIAPgNIABgBIAQgSIANgQIABgBIALgPIABgBIAGgIIACgCQATgZAHgIIABgBQASgTAJgeQAHgaAEgXQACgKAEgGQAPACAGAHIAAAAQAJAOAAAdQgBATgQAiIAAAAQgUArAAAZQAAAJAGAFQAGAGAIAAICFAAQALABAJAIIAAAAQAJAJAAALQAAAJgGANIAAgBIgEAGQgIABgFAGQgGAGAAAIQABAIAFAGQADADACAGIAAgBQACAJAAAHQAAARgNANQgFAFgBAHQgBAGAEAGQAEAIgBAJQAAAJgEAKIAAAAQgEAHgFADQgGADgDAGQgDAGABAHQACAJAAAJQgBArg0AAgAhlAIIgBABIgCABIAACrIAFABIATAFIAAABIAJACIAHADIAKADIAPAGIAAAAIABAAQBEAXArABIAtAAQAeAAADgXIgCgPQgCgNAGgMQAGgMAMgFIAAgBIAAgBQACgFABgFQAAgEgCgDQgHgMACgNQACgOAKgJQAHgHAAgJIgCgKIABABIAAgBQgLgMAAgPQgBgQALgMQAGgHAJgDQACgGABgFQAAgDgCgDIgBAAQgCgCgEgBIiFAAQgQAAgMgLQgLgMAAgRQgCgcAXgxIAAAAQAOgcABgQIAAgLIgIAdQgKAjgWAXIgBABQgHAIgSAXIgDAEIgEAGIgBABIgLAOIgCACIgNAQIgBABIAAAAQgJAMgHAHIgBABIgQAOIAAAAQgMAKgMAFg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0DDFDF").s().p("AgDFFQgjgJgwgQIAAAAQgngNgHgBIhsAAQgdAAgUgUIgBAAQgTgVAAgcIAAjwQAAgcATgVIABAAQAUgUAdAAIBgAAQANgMAegmQAWgeATgUIABgBQAFgGADgQIAAABQAEgYAIgaQAIgfAVgTIgBAAQAUgTAcAAQAkAAAdAOIAAAAQAgAPAQAgIAAAAQAQAdAAAyQAAAagJAbIAkAAQAwAAAjAjIAAAAQAiAiAAAvQAAAigRAeQACALAAAMQABAfgPAbIABANQAAApgXAhQgCA5gkAhQglAkg/AAIgwAAIgBAAQgmAAglgJgAApjlQgEAXgHAaQgJAegSATIgBABQgHAIgTAZIgCACIgGAIIgBABIgLAPIgBABIgNAQIgQASIgBABIgPANIAAAAQgKAJgKAEIAAAAQgHAEgHABIAADKIAHABIABAAIAMACIARAFIABABIAKADIAEABIAMAEIALAEIABABIAAAAQBKAZAvABIAtAAQA0AAABgrQAAgJgCgJQgBgHADgGQADgGAGgDQAFgDAEgHIAAAAQAEgKAAgJQABgJgEgIQgEgGABgGQABgHAFgFQANgNAAgRQAAgHgCgJIAAABQgCgGgDgDQgFgGgBgIQAAgIAGgGQAFgGAIgBIAEgGIAAABQAGgNAAgJQAAgLgJgJIAAAAQgJgIgLgBIiFAAQgIAAgGgGQgGgFAAgJQAAgZAUgrIAAAAQAQgiABgTQAAgdgJgOIAAAAQgGgHgPgCQgEAGgCAKgAjbC/IgBACIABADIACABIADgBIACgDIgBgCIgBgBIgDgBIgCACg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37,-39.4,74,78.9);


(lib.hackerbelt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhnAFQB8C7BJEQQAjgCAigCQA1gEA0gGQCYgSCCgoQA/gUA5gYQCqhJB6h2Qi4j5hPjJQhQjJhvAlQhAAWh3ASQhaAOh6AMQkbAdiOgSQiNgShMARQgfAGgMAMQgSASAUAdQgEAAgFAAQgOABgOABQgdAAgdABQiHACiAgDQgeCKgDCAQB0AZC+ANQAnADAqACAhnAFQhUh8hqhXQhUhFhigtQgwADgvABApfk6IAhE1QB3AGCPACQAcAAAbABQBKABBQAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhSCXIghk1IAcgBQAlAgArAxIAdAjIALANIAwA2IALALIARATIAKAKQAVAZAOATQANAWANAeQiQgDh2gGgAijCSQgZiTAPibIA6gCIAhE1IhRgFgAhzieg");
	this.shape_1.setTransform(-49.2,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#28434C").s().p("ACKgsQhUh8hphXQhUhFhigtIhfAEQgUgdARgSQAugFAhAQQG/DlCQIpQADAYgGAJQhJkQh9i6g");
	this.shape_2.setTransform(-24.2,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B3333").s().p("AETCiIg3gBQgMgegOgVQgNgUgWgYIgJgLIgRgTIgLgLIgwg1IgLgOIgegjQgqgxglgfIAJgBIBegEQBiAtBUBFQBqBWBUB9IiagBgAmsBtQADh/AeiKQB/AECHgDQgOCbAZCTQi/gNhzgZg");
	this.shape_3.setTransform(-53.3,-15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#507282").s().p("AAACeQgVhFgshMQgfg0g4hQQhJhrhlhnQgVgWgTgOQGHACBEgQQBDgQBXgHQAsAYAzBoQAyBpg0CxQg0CxjWDaIhKj1g");
	this.shape_4.setTransform(8.5,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A5B68").s().p("AhgGvQiQoqnAjkQgggRguAFQAMgMAfgGQBMgRCNASQCOASEbgdQB6gMBagOQB3gSA/gWQBwglBPDJQBPDJC4D5Qh5B2iqBJQg5AYhAAUQiBAoiZASQgzAGg0AEIhFAEQAGgKgDgXgAm0kkQBlBnBJBrQA5BQAfA0QArBMAVBFIBLD1QDWjaA0ixQA0ixgzhpQgyhogsgYQhXAHhDAQQhEAQmHgCQASAOAVAWg");
	this.shape_5.setTransform(19.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.1,-47.4,194.3,94.8);


(lib.hacker_neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AItk4QhWkaiIjUIg/AJItVB7IglKzAItk4QgoAigpAfQodGaopiSAJwguQgdiMgmh+AJwguQAHAjAHAjQAnCHhtCcQgwBEhNBIQj7DsjZBJQjaBIiWgyQiVgyhpikIANj1AJwguQgtAkgsAgQrGISnLjhIAQk2");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D3D3F").s().p("AlgMOQiWgyhpilIANj1QCJBDCfAAIAAAAIAAAAQFvAAHnlmIAJgGIAFgEIADgCIACgCIgCACIgDACIgFAEIgJAGQnnFmlvAAIAAAAIAAAAQifAAiJhDIARk2IAGACIADABQCMAkCLAAIAAAAIABAAQGTgBGQksIABgCQAkCHAXCGQAYCTAJCSQgwBFhMBIQj8DsjZBIQiBArhpAAQhJAAg8gUgAkhAzQiLAAiMgkIgDgBIgGgCIAkqyINVh7QBlDNBFDgQATA8APA8IgBACQmQEsmTABIgBAAIAAAAg");
	this.shape_1.setTransform(-4,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4F").s().p("ABLEMQAsghAtgkIAOBHQAnCHhtCcQgJiTgYiSgAAQgBQApgfAogiQAmB9AdCMQgtAkgsAhQgXiIgkiFgAAQgBQgQg9gRg8QhGjghkjNIA/gJQCHDUBWEaQgoAigpAfIAAAAg");
	this.shape_2.setTransform(46,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.8,-81.6,131.6,163.3);


(lib.hacker_leg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGSAIDhi4QBehNB9AQQjaCcifB9QhaB5hLErQgJjlBrjjgABsiQQAGi0ASjTQATjUhXlbQAOgEAsgTQCxG7hVEyQgZBjgEBnQgNCNAbBoQAbBpAPAVQhMAngYAAQgmjSAFiygAiYz4IgEgHIgJgZQgKgZgBgOQgBgEACgDQACgFAEADQAIAZAIASIAIATQAEANgDAJQgEAAgEgEgAm+1kQgEgDACgKQAEgTAPgmQALgaAHgNIAFgJIAEgLQADgJAIgRQAIgRADgKQABgFADgCQACgBADACQADACABADQABAEgDAHIgKAcQgUAzgIASIgEAJIgEAPIgGAMIgHAXQgCAKgDADQgDADgDABIgDABIgEgCgAja3SIADhoQAAgNAHAAQAGAAACAMQACAUgBAmIABA6QABATgBAGQgCAOgKAHQgJgRABgog");
	this.shape.setTransform(119.8,115.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.2)").s().p("AoONmQgFgbgDgbQgMiABEhQQAogvBNgjIBUghQAfgMBIggQBHggCLh6QBohcAkg1IgDgoQgYk3gRhxQgRhxgDgnIgBgMQgDg4ANgsQAUhDA7g6QAogoBTg4QBkhDAggZQAagWAWgXQACAjgBApQgDDEg+BfIARJlIAXAVIAABJQgRgPAPAbQBICDgOGHQgDBRgMAXQoOCbn1AGQgMgigHghgAC9B/IADgIIgCgGQgBAAAAAOg");
	this.shape_1.setTransform(-71.9,170.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(56,56,56,0.749)").s().p("AkfO5Qg1gGAHg8QhwiHAriwQArixCTgsQBBgTA/gDQCsh2DOiQQARgMAagNIghnOIgTADQhIiNgfi3Qgei4AagoQBHAnBGAWIBWJYQATClgSCzQABAOgoApQgnAphnBZIiBBuQgaAWgSAFQiPAqg5A/QgsAwgRBKQgOA/AGBNQAEAxARBaIAEAaIALBAQg1gEg1gFg");
	this.shape_2.setTransform(-128.1,167.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ag4lgQhIiOgfi3Qgei3AagoQGcDjGmliQA4A+gDDEQgDDEg+BfIANJxQASBSAHAMQBICDgOGHQgDBRgMAXQrFDRqUg+Qg1gGAHg8QhwiIAriwQAriwCTgsQBBgUA/gCQBTgEBRAZQBJAWAuAfQAsAdAUAnQAmBOASA+QASA+AaAKQAbAJCPgpQCPgqBWgdQBVgdgDg1QgDg0gKhaQgKhaAugPQAtgPAdgNQAdgOBFghAg4o2IgXAAIAXDWIATgEIAgHKQjZCZjMCLAg4o2IATDSADRloQgOADgOADIgZjUIjUAAAiPHUIGGlYIgmnkQEAg2DChAALzL7QrYD9q+hE");
	this.shape_3.setTransform(-93.9,161.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ag4lgQhIiOgfi3Qgei3AagoQGcDjGmliQA4A+gDDEQgDDEg+BfQjCBAkAA2QgOADgOADIgZjUIjUAAIATDSAg4o2IgXAAIAXDWIATgEIAgHKQACgBACAAQgBADgfASQi9CFjMCLQBTgEBRAZQBJAWAuAfQAsAdAUAnQAmBOASA+QASA+AaAKQAbAJCPgpQCPgqBWgdQBVgdgDg1QgDg0gKhaQgKhaAugPQAtgPAdgNQAdgOBFghQBICDgOGHQgDBRgMAXQrFDRqUg+Qg1gGAHg8QhwiIAriwQAriwCTgsQBBgUA/gCAKTneIANJxIAEAQQAGAzAPAbALzL7QrYD9q+hEAD3B8ImGFY");
	this.shape_4.setTransform(-93.9,161.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E1B1B").s().p("AqcB2Qg1gGAHg8QK/BELXj8QgDBSgMAWQoiChoEAAQibAAiYgPg");
	this.shape_5.setTransform(-90,251.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#482445").s().p("Aj/JkQgbgKgRg+QgSg+gmhNQgUgngsgeIGGlXQgIgcAKADIgnnMQD/g1DChAIAMJxIAFAPQAGAzAOAcIhhAuQgeANgtAQQgtAPAKBZQAKBaADA1QADA0hWAeQhWAdiNApQh2AignAAQgJAAgFgCg");
	this.shape_6.setTransform(-66.2,175.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#351E3B").s().p("AitHRQhRgZhTADQDMiLC8iEQAfgTABgCIgEABIggnKIgTjSIDVAAIAZDTIAcgGIAoHLQgLgCAJAbImGFZQgugghJgVg");
	this.shape_7.setTransform(-102.8,156.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2C1931").s().p("AgUhqIAWAAIATDRIgTAEg");
	this.shape_8.setTransform(-99.7,115.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#532748").s().p("AqjPVQhwiIAriwQAriwCTgsQBBgUA/gCQBTgEBRAZQBJAWAuAfQAsAdAUAnQAmBOASA+QASA+AaAKQAbAJCPgpQCPgqBWgdQBVgdgDg1QgDg0gKhaQgKhaAugPQAtgPAdgNIBigvQBICDgOGHQo+DHotAAQiWAAiVgOgAifqEQgei3AagoQGcDjGmliQA4A+gDDEQgDDEg+BfQjCBAkAA2IgcAGIgZjUIjUAAIgXAAIAXDWQhIiOgfi3g");
	this.shape_9.setTransform(-93.9,158.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABEElIhKAHQgpgLgohKQguhXgQh7QgQh6AXhXQARg/AegRIBLgOQABAAABAAQAGgCAGAAQAwAAAuBXQAvBXAQB7QAEAiACAgIgIAFQAAAcAAAWIAIAFQgDAtgKAmQgUBNgpAJQgGABgGAAQgBAAgCAAIAPgBACVB2IjviaIgMABQAAgBAAAAQgDgkAAghIAMgEID6Cs");
	this.shape_10.setTransform(153.9,171.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhXDXQguhYgQh7QgQh6AXhWQARhAAegRIBLgOQgnALgUBLQgNAugBA5IgMAFQAAAgADAkIAAABIAMgBIAEAhQAQB6AuBYQAsBUAwACIhKAHQgpgLgohJgABEEkIAPgBIgMABIgDAAgAhphpIAMgFID6CsIgIAFg");
	this.shape_11.setTransform(153.9,171.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCCCCC").s().p("AgxDSQguhXgRh7IgDghIDuCbIjuibIgMABIAAgBQgEgkABggID+CtIgBAyIAIAFQgCAtgLAmQgUBMgoAKIgPABQgvgCgthVgAh2hpQABg6AMguQAUhKAngLIACAAIAMgCQAxAAAuBXQAuBXAQB6QAFAiABAgg");
	this.shape_12.setTransform(156.4,171.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#333333").ss(1,1,1,3,true).p("Aj6keIAlAAIDTAAIAzAAIBTjaIEOAAQADAeAFAaQAYCdBBA9QAlAkAzADQAaACAegGIAuABIAbGIIoQEyIgxAAImuAAIjTAAIjVAAQAFi6AzhrQAzhsCahw");
	this.shape_13.setTransform(96,225.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#686868").s().p("Aj5GMQAYi/BZiOQA/hkBfhNIgZjnIAqgyIDTAAIgrAyIAaDnQhgBNg/BkQhYCOgYC/g");
	this.shape_14.setTransform(70.7,236);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CCCCCC").s().p("AkfHdQgBhRANhRQAUh5AwhwQAWgwAGgPQANgjACgfQAAgUgHgmQgHgoAAgTQgBhKBOhrQAwhCALgTQAPgXAKgXQAYCdBBA9QgmA3imC2IDkidIAogaIAYgOQAaACAdgHIAuACIAbGHIoPEzg");
	this.shape_15.setTransform(138.8,227.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("Am3H5QAYi/BaiOQA/hmBghLIgbjoIAsgxIA0AAIBSjZIEOAAIAHA3QgKAWgPAYQgLATgwBCQhOBrABBJQAAAUAHAoQAHAmAAAUQgCAegNAkQgGAPgWAwQgwBwgUB5QgMBRABBRgAFgjmQAlAkAzADIgYAPIgoAaIjlCcQCni2Amg2g");
	this.shape_16.setTransform(110.8,225.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#464747").s().p("Aj6GMQAFi7AzhrQAzhqCZhyIDMkVIAlAAIgrAyIAaDnQhgBNg/BkQhYCOgYC/g");
	this.shape_17.setTransform(49.5,236);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAzC9IASgHICRkrIhEhHIjPALIg5ADIgyACIgXARIgWBAICCEYIANAAIA2AAg");
	this.shape_18.setTransform(67.3,-32.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ACACAC").s().p("AhjgCIDPgLIgSAQIjFALg");
	this.shape_19.setTransform(71.1,-49.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7E7E7E").s().p("AhDB/IB9kOIAXgJIiQEqIgRAIg");
	this.shape_20.setTransform(80.6,-28.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#686868").s().p("AAiCuIh5lYIA9gDIByFbg");
	this.shape_21.setTransform(56.9,-30.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#464747").s().p("AA6CtIiAkYIAVhAIB4FYg");
	this.shape_22.setTransform(53.1,-30.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AhFiaIDGgLIA+BAIh+EOgAinilIAzgDIgOARIg8ADg");
	this.shape_23.setTransform(67.2,-32.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CCCCCC").s().p("AARCvIhylbIA9gCICGFCIgNAbg");
	this.shape_24.setTransform(64,-30.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E4E4E4").s().p("ABXgXIASgRIBEBHIgYAJgAiegaIA4gDIgJARIg9ADg");
	this.shape_25.setTransform(71.4,-46.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlPhRIAjgVQBpAtCcgGQAVgBAVgCQBUgHBEgYQBSgcA7g0IAogBIAAD9QhPBBhuAZQg3AMhAACQgcAAgcAAQiUgBhWgfg");
	this.shape_26.setTransform(68.3,-32.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E1E1E1").s().p("AhZAjQBRgdA7gzIAngBQhIA7hOAig");
	this.shape_27.setTransform(92.8,-45.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#464747").s().p("AhQBjIhIjlQCIAzCfgGIAKDYQiUgBhVgfg");
	this.shape_28.setTransform(50,-27.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CCCCCC").s().p("AAmhNIgBAAQhVAlhfAIIgrADIgBgbIAsgDQBTgHBEgXIAdAMQBPgiBIg8IAAD9QhOBChuAYg");
	this.shape_29.setTransform(83,-33.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AAvCNIgLjYIAqgCQBfgIBWglIABAAIgmD5Qg3AMg/ACIgzAAIgGAAgAkDh3IAigVQBpAtCbgGIABAaIghABQiMAAh6gtgAAkhLg");
	this.shape_30.setTransform(60.7,-28.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1,3,true).p("AivNdQhYigghg6QgyhZgGhYQgGhXgBhxQgBhyhnjWQhmjWAIjHQAHjIBImCIFEhEIDlgwIAcBQIAzCYIAJADIDwBbQABADACADQDGHohVEzQhWE0B+ETQhCAPgjAtQgeAkgJA4QgLBIAXBpIi9AAIguAAIikmiIgnAEIgxAGIh3ANIgwAFIgBAAIAxBzAivHTIAABNIAAArIAAESIAAE9ICogDIEbhx");
	this.shape_31.setTransform(91.8,84.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C6C6C6").s().p("AiNlAIC3FmQAegBAfAAIgJA0IAwB4IkbBwg");
	this.shape_32.setTransform(105.2,169.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A9A9A9").s().p("Ah8iHIAAhTIApgFICiGhIAuAAIgFAdQgfgBgeABg");
	this.shape_33.setTransform(103.5,151.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7B7B7B").s().p("AhTgcIB2gNIAxgGIAABTIinAMg");
	this.shape_34.setTransform(82.6,134.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#2B2D2D").s().p("AgYg2IABAAIAvgFIAABMIAAArg");
	this.shape_35.setTransform(71.8,137.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#CCCCCC").s().p("ABaN6QgkhygPg+QgThGgLg9QgGgmgDgkQgIhJgChwIgDi6QgCg1gEg0QADjThFjCQgDgoAJggQADgNAGgOQAYg2BBg0QAygpA1gUQDHHphWEyQhWE0B+ETQhCAQgjAsQgsgBgoBbgAkIp9QgHgZgBgKQgEgUAEgPQAFgQATgbQApg/AbhMIA0CXIAJAEQgTAvgQAhQgpBRgyA2QgEg7gPg7g");
	this.shape_36.setTransform(120.1,63.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AjZNdIAAkSIAAgrICngMIAAKDIinACgAC7M2IjEl6IgpAEIgxAGQglhRgEiPQgFiPhbi3Qhai4gTjAQgTjAADg7QADg8AKg6QBTgZBbgyQBagzAegkQAfglA4iIIAbBPQgbBMgoA/QgTAbgFAQQgEAPAEAUQABAKAHAZQAPA7AEA8QAxg2AphRQAQghATgwIDwBbIACAGQg1ATgyApQhCA0gYA2QgGAOgDAOQgJAfADAoQBFDCgDDUQAEA0ACA1IADC5QACBxAIBJQAEAjAGAmQALA+ATBFQAPA+AkByIAAAAQAAAVACAiQACAhANA3g");
	this.shape_37.setTransform(96,84.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#686868").s().p("AD3P7IguAAIikmhIDGF6IChADQgNg3gCghQgCgigBgVQAphaAsABQgeAkgJA4QgLBIAXBogAj8HEQgNhvgVg7QgVg7g2hyQg2hwgRhCQgkiSAHi9QAEhyAdjgQB5gSBuhFIAwiOIDlgvQg5CIgdAlQgeAkhbAzQhaAyhUAZQgJA6gEA8QgDA7ATDAQATDABbC3QBbC4AECPQAFCPAlBRIh3ANIgwAFQgUhEgOhug");
	this.shape_38.setTransform(91.3,68.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#464747").s().p("AA8MJQgyhZgGhYQgFhXgBhxQgBhyhnjWQhmjWAIjHQAHjIBImCIFDhDIgwCNQhuBFh4ASQgdDggEByQgHC9AkCTQARBBA2BwQA1ByAVA8QAVA7ANBuQAOBuAUBEIgBAAIAxBzIAAESIh5jag");
	this.shape_39.setTransform(56.1,71.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAygdIBpjZIg8AAIj5EKIAADj");
	this.shape_40.setTransform(66,199.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#464747").s().p("AiaD1IAAjjID5kKIA8AAIhqDZQgUEYiRAAQgSAAgUgEg");
	this.shape_41.setTransform(66,199.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFXjLIhwkBIloGSIj0DDIh1DpIHsBbIHpgoIgSiWg");
	this.shape_42.setTransform(111.2,166.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#2B2D2D").s().p("AnqFyIB1jpID0jDIFomSIBwEBICCHaIASCWInpAog");
	this.shape_43.setTransform(111.2,166.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhMtnQgxGthFE4QhGE3hWBgQgCAEgDADQhPBdA9B1QA+B4A1BxQA0BxArCFQArCGAQDVQAQDVknDBQkbC3j/i4QgMgJgNgKQkKjUgYlPQgXlQBjmoQgJg0gFg/QgopBGT2+ICogFIWngwQArDMAwCsQAQA5ARA2QA3CzA/CKQCLEyAuGTQAGAwADAtQAHD3haDlQgGAPgGAOQg3BngTB0QgCAMgBAMImmBIIhQANQmjmIhLwiQhQgUhEgYQiHguhYg4QgdgSgXgTQgBgBgBgBQgQgMgNgO");
	this.shape_44.setTransform(-10.8,-93.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E1B1B").s().p("AqIbAQkKjTgYlQQgYlQBkmoQgKg0gEg/QgppBGT29ICpgGQgMEkhQEYQggBshZD0QhTDigiCBQgrCigcDPQgSCEgWDzIgDAdQgVD3gFB7QgKDfATCxQAaEMBfEAQAcBLAhBIIgYgTgAFxskQhQgVhFgXQiHguhXg4QgcgSgXgUIgDgCIADACIgEgCIABAAQFaAUEmAdQgKFnBGFkQBGFjCRFJQApBeArBQIhPANQmjmIhMwhg");
	this.shape_45.setTransform(-40.5,-96);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#282626").s().p("Auoa9QghhIgbhLQhgkAgakNQgSiwAJjfQAFh8AWj2IACgdQAWjzASiEQAcjPAsiiQAiiBBSjiQBaj0AfhtQBQkXAMkkIWngwQAqDMAwCsQiGB8ijBbQh0BAh8ArQAfAiASAuQAUAwAHBDIAHB3QANEgBCEcQBBEaBzEKQAdBGAoAMQAlALAjgfQAfgbAOgsQAIgaAMg3QANgvAXgaQAbCcgmCZQBUgqBGg/QAhgeAcggQg3BngTB0IgDAYImmBIQgshQgpheQiQlJhGljQhGlkAJlnQklgdlbgUQgPgMgNgOQANAOAPAMIAAAAIADACQAXATAcASQBYA4CIAuQgxGthFE4QhGE3hWBgIgGAHQhOBdA9B1QA+B4A1BxQA0BxArCFQArCGAQDVQAQDVknDBQiNBbiHAAQiHAAiAhcgArnaAIgOANIAWgLIAOADQAAgDgYgDIACABgAw2L8QgRClAYCCQAPBSAkBjQAUA2A0B6QAuBoAqA2QAtA6A1AYQD7AsBBhxQBAhyAWg4QAVg4AHhxQAGhygch3Qgch4g1ivQg1ivhxiMQANg3AhhCQAMgaAQgcIBhioQBbisAojtQAbiiAMkQQiwiSi2iVQgYgUgQgIQgYgMgVAEQgZAFgTAcQgMASgMAjQhzFhgmElQgnElgQBoQgRBoALBCQAFAdAPBEQARBSAhCJQg/AAg0gkQgmDAgKBpgAlwv0IAAAAg");
	this.shape_46.setTransform(-9.4,-93.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#353030").s().p("AstYJIgDAAQAZADgBADIgNgDIgXALIAPgOgAtAYCQg1gYgtg6Qgqg2guhoQg0h6gUg2QglhjgPhSQgXiCAQilQALhpAljAQA1AkA+gBQggiJgShRQgOhEgFgeQgLhBARhoQAQhoAmklQAmklBzlhQANgjAMgSQASgcAagFQAVgEAYAMQAQAIAYAUQC2CVCvCSQgMEQgbCiQgoDthbCtIhgCnQgQAcgNAaQggBCgOA3QByCMA1CvQA1CvAcB3QAcB4gHBxQgGBygVA4QgWA4hBByQguBSiPAAQg4AAhGgNgAsYH7Qg1AUgkAjQgLALgJALQgqA2gMBTQghDmCCCeIApAoQBZBfB4A0QAGgEADgGQBUiKgbjGQgEjJhhi4QgjhEg+AAQgYAAgcAKgArFsiQgrBogOA4QgNA5gDBKQgCAqABBcIAHHJQACAeAEAPQAGAZAQAKQC2i4BElMQAkivgWh7QgPhZgvhSQgrhMhJhAQgFA+gqBlgANZAjQgXAagNAvQgMA3gIAaQgPAsgfAbQgjAfglgLQgogMgdhGQhykJhCkbQhBkcgNkgIgHh3QgIhDgTgwQgSgugfgiQB8grB0hAQCihbCHh8QAQA5ARA2IjOCKQgjAZgLASQgSAaADAoQADAbAOAqQB3F5BGGLQAKA+AIAeQANAyAXAjQAaAoArAVQAuAWAqgMQAkgKAegjQAVgZAXgsQAcgyAZg1QAHD4hbDkIgLAdQgdAgggAeQhHA/hTAqQAliZgaicg");
	this.shape_47.setTransform(-2.3,-82);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3F3B3B").s().p("AuSTJIgpgoQiCieAhjmQAMhTArg2QAJgLAKgLQAkgjA1gUQBkglAyBfQBhC4AEDJQAaDFhTCLQgEAGgGAEQh4g0hZhfgAtjDJQgEgPgBgeIgInJQgBhcACgqQADhKAOg5QANg4ArhoQAqhlAGg+QBIBAAsBMQAuBSAPBZQAWB7gkCvQhDFLi3C5QgPgKgHgZgAMogtQgqgVgbgoQgWgjgOgyQgIgegKg+QhFmLh3l5QgPgqgCgbQgEgoASgaQALgSAjgZIDPiKQA3CyA/CLQCLEyAuGTQAGAwADAtQgZA1gbAyQgYAsgVAZQgeAjgjAKQgPAEgQAAQgcAAgegOg");
	this.shape_48.setTransform(7.3,-89.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1,3,true).p("AggFmQATglANglQAMgnAIgmQAIgpACgpQACgogEgnQgFglgJgjQgMgrgSgrQgOgggTggQgTgggXggQgUgbgYgcQgRgUgSgTIBahCIAWgRQANAQANAQQAcAhAXAjQAYAgAUAiQAZArAUAqQAVAvAOAvQAPAvAHAvQAHA1gBA0QgBAygJAyQgKA0gSA1QgQArgVArIgxgXg");
	this.shape_49.setTransform(105.9,-38.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgDFpQARglANglQANgnAIgmQAJgpACgpQABgogEgnQgEglgKgjQgLgrgTgrQgOgggSggQgTgggYggQgUgbgXgbIgkgoIBahCQE1G3i1Fkg");
	this.shape_50.setTransform(103,-39.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AACGLQC1lkk0m3IAWgQIAaAeQAcAiAYAjQAYAgATAiQAZAqAUArQAVAvAOAuQAPAwAHAvQAHA0gBA1QgBAygJAyQgKA0gSA0QgQArgVAsg");
	this.shape_51.setTransform(110.4,-38.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.5,-276.5,341.1,553.1);


(lib.hacker_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ag5iaQAdCLBXCq");
	this.shape.setTransform(41.8,-1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFC1C2").s().p("Ag2jCQAeCLBWCrIhVBPQg4jWAZivg");
	this.shape_1.setTransform(41.4,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#009900").ss(1,1,1).p("AgFhoIALDS");
	this.shape_2.setTransform(68.9,-22.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#009900").s().p("AhKA6IAXgLIABATIgXALgAgqArIAOgHIACASIgPAIgAgQAbIANgIIABAWIgNAHgAAKAOIAlgSIABAUIglATgAhOAAIAKgGIABAbIgKAGgAg7gHIARgIIABAYIgRAIgAA6gHIAUgJIABAQIgUAKgAgfgWIAbgNIABAZIgbANgAADggIAegPIABASIgfAPgAAyg/IAagOIABAaIgaAOg");
	this.shape_3.setTransform(56.8,-20.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACljIIgigRIguASQi6BEg6ApQgVAPgEALQgBABAAAAQgNAoAqAEQgCgMAJgMQAEgFAHgGQAGgFAIgFQABgBABAAQAPgKAWgJQAUgJAYgJQA9gaBagjQACAAACgBQAQgEALAMQgCgEgCgEQgDgFgBgDIAggNIAAgHgACNicQAKgEAHgDQAFgDAEgCQAFgDAEgEQADgDACgDQgBgIgPgDACNicIAAgBQAAAAAAABACNicIAAAAQACAEAAAHIAJDEQABAGgBAFIAVgQIAAgKACFisQgGgJgGgDIAsgQACYA+QgBAcgRALIjnB0IAAAAQgeACgFgYIgYjWACYAzQAJgGAHgFQACgCADgCQAJgIAEgIQADgHAAgGIgIi8");
	this.shape_4.setTransform(58.1,-20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#264C00").s().p("AggCKIgYjWQgCgMAJgMQAEgFAHgGIAOgKIACgBQAPgKAVgJIArgSQhrAzAHAhIAVDWQAHAQARAFIAAAAIgDAAQgbAAgEgWg");
	this.shape_5.setTransform(48.1,-14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#336600").s().p("Ah+CqIgVjWQgHghBtgzQA9gaBagiIAEgCQAQgEALAMIAAgBIAAABIAAAAIAAAAQACAFAAAGIAJDEIAAALQgBAcgRALIjnB1QgSgFgHgRg");
	this.shape_6.setTransform(58.5,-17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("ACgBxIAQgLIAFgEIAAAKIgVAQIAAgLgACXhTQAAgHgCgEIARgHIAKDLIgQALgAixgBIAkATQgJAMACAMQgqgEANgngACNhuIAggNIABAAIgdAVIgEgIg");
	this.shape_7.setTransform(57.3,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0F0F0").s().p("AChhMIAFgGIAIC8QABAGgDAHgAiuAIQA6goC6hEIAvgSIAhARIgsAQQAHADAFAJIAEAIIAEAIQgLgMgQAEIgDABQhaAjg+AaIgrARQgWAJgPAKgACXhWIAAAAIAAgHQAPADAAAIIgFAGIgJAHQAHgMgIgFgACmhSIAAAAg");
	this.shape_8.setTransform(59.6,-30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("ACehTIAIgEIAKgHIAKDCQgEAIgJAJIgFAEgAi5ARIAAgCQAEgLAWgOIAlAYIgCABIgOALQgHAFgEAGgACMhNIABABIgEgHIAdgVQAIAFgIAMIgIAEIgRAHIgBgBgAB5hoIAsgQIAAAIIAAAIIggANQgGgKgGgDg");
	this.shape_9.setTransform(58.1,-28.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag6AAQATgKAdgBQAQAAA1AIQgdAKgbAEIgLABQgXAAgbgMg");
	this.shape_10.setTransform(-11.3,-12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADdBjQixjliPAlQhAARg5BG");
	this.shape_11.setTransform(-4.8,-33.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A39899").s().p("AhFh1QA5hGA/gRQgLArAaBLIAOAkIgEAAQhfAVgHDqQhLiqAgiYg");
	this.shape_12.setTransform(-19.9,-22.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CFC1C2").s().p("ABzCsQiijOhgARIgOgkQgahLAMgrQCPglCwDlIAcCcQgOgJgvAEg");
	this.shape_13.setTransform(2.5,-25.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AjXB+QAHjpBggVIAEgBQBggRCiDOQAvgEANAJQAHAEgBAHQgDAXgvAIQh1AYiGAAQg/AAhDgFgAhnhZQhOAGgTDEQCzALCqgcQigiwhPgJIgIAAIgFAAg");
	this.shape_14.setTransform(-1,-14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag8BSQgYgiAAgwQAAgvAYgiQAZgiAjAAQAjAAAZAiQAZAiAAAvQAAAwgZAiQgZAigjAAQgjAAgZgig");
	this.shape_15.setTransform(-3,-15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBD5D").s().p("Ai2BvQAYjaBOgGQBOgGC5DRQh7AYiIAAQg0AAg2gDg");
	this.shape_16.setTransform(-3.5,-14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHRKXQA2hJAvj6QAuj6AAhdQgIhlgqhGQAJgTAGgTQAchRgIhJQAAgCgBgCQAAgCAAgBQgLhOgwgZQgPgHgPgBQhPiiiqhKQgagLgcgKQhtgkhxAEQhSAEhVAYQgXAHgXAJQjiBRhjDRQhlDXBUD2QBeBUCSBGQDqHZCXBeIAnjVQAagJAagHQCZgoCYAJgAH7nkQgpgCguArQhCA9g6CJQgIASgHATAA0LnQAIAFAIAEQASAJARAEQAVAEAWADQBnALBigmQAggNAfgRQACgCADgBQAWgNATgYQAFgGAEgGAoAjFQBkA3AQCI");
	this.shape_17.setTransform(5.4,-4.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CCCCCC").s().p("Agwh3IA3gFIAqDbQgfARgeANg");
	this.shape_18.setTransform(41.4,57.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AhzCKQgWgDgVgEQgRgEgSgJIAkjUIAogLQBTgUBTgIIAkD0QhMAdhNAAQgYAAgXgCgABpiKQAigBAjAAIAUC0QgTAYgWANIgFADg");
	this.shape_19.setTransform(31.6,58.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AjOB/IAnjVIA0gPQCYgoCYAIIARCzIgJAMIgUi0QgjAAgiACIg4AEQhTAIhSAVIgpAKIgkDUIgQgIg");
	this.shape_20.setTransform(31.3,56.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A39899").s().p("AlNCxQiShGhehUQhUj2BljXQBjjRDihRIAugQQAQAdAOAdQgiABgoAPQgvASgbAcQgbAbAIAVQAIAUAmACQAmABAvgSQApgQAbgXQArB6gBCGIhpBbQAUA4ApBKIEIB6QgZBUg/AVQBKDJASDcIg0AQIgnDWQiXhfjqnZgAmMgFQgQiIhkg3QBkA3AQCIgAmaoIQgOAEgMAKQgLAJgBAKQgCAJAKADQAKAFAOgEQAPgEALgKQAMgKABgIQABgKgKgEQgFgCgGAAQgGAAgHACgAFCCoQgGgbAChfQADhfgLhNQgKhOAGgZQAFgaAYgMQAYgLAcgMIDRhSIAAADIABAEQAIBJgcBRQgGATgJATQAqBGAIBlIi1BYQgeAOgSANQgTANgGAfQgHAfACAuQgVgagKgog");
	this.shape_21.setTransform(5.4,-4.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9E8A8C").s().p("AlYCTQgKgDABgJQABgKALgJQAMgKAPgEQANgEALAEQAKAEgCAKQgBAIgLAKQgMAKgOAEIgMACQgHAAgFgDgAA0BHQgHgCABgGQABgHAIgGQAIgGAJgDQAKgCAGACQAHADgBAGQgBAGgIAGQgIAHgJADIgIABQgFAAgDgCgAi1BEQgmgCgIgUQgIgVAbgaQAcgcAugSQApgPAigBIALAAQAmACAIAUQAHAVgaAaIgHAGQgaAYgqAPQgrARgkAAIgGAAgADcg8Qg6gGgmgaQgigXgNgiQBxgEBuAkQAcAKAaALQgFAVghAKQgYAIghAAQgSAAgVgDg");
	this.shape_22.setTransform(-4.1,-67.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CFC1C2").s().p("ADrIbQiYgJiXAoQgTjdhKjJQBAgVAYhUIkJh5QgphKgUg5IBphaQABiHgrh6IAHgGQAbgbgIgUQgIgVgmgCIgMAAQgNgdgRgcQBVgZBTgDQANAhAiAXQAmAaA6AHQA6AGAlgLQAhgLAFgVQCpBLBPChQAQABAPAIQAvAYALBOIjRBTQgcALgYAMQgXAMgGAZQgGAaALBNQAKBMgCBgQgDBgAHAaQAKAoAVAaQgDguAHgfQAHgfASgNQATgNAdgOIC2hZQgBBeguD6QguD6g2BJgADPmEQhCA9g6CJIgPAmIAPgmQA6iJBCg9QAsgoAmgBIABAAIABAAIADAAIgDAAIgBAAIgBAAQgmABgsAoIAAAAgAjroOQgJACgIAHQgIAGgBAHQgBAFAHADQAGADAKgDQAJgCAIgHQAIgHABgFQABgHgHgCIgHgCIgJACg");
	this.shape_23.setTransform(26.7,-10.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1,3,true).p("AApAEIhQgnIgBATIAAA0");
	this.shape_24.setTransform(67,-42.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CCCCCC").s().p("AgggZIBBAbIhBAYg");
	this.shape_25.setTransform(66.2,-41.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0F0F0").s().p("AgogEIAAgTIBRAoIgQAGg");
	this.shape_26.setTransform(67,-43.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-77.7,132.7,156.9);


(lib.hacker_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AMUxIIA6APIDIAzQAmAnAgA0AMUxIIhCkfIgkAAQj/B/g8BdQg8Bch+GQIkRFeAMUxIIogGpIg7AAASQBrQhBBYg+A1QgbAXgYAcQg8BFgtBlQgYA2gTA/QhHDkhLGhQgnARgnAOQkVBnkXAQQjpANjsgwQh9gah+grQhrnHh1o3QlRnRgRl6IFiisIBug1IB4g7ATVjdQiYETiWBoQhiA+hgAaQhIAThHAAQjeAAnCiDQgHgCgHgCIhcAAIhqAAIAAmxIAAgSIhsksQgajlgohuQgohvhrhsIgtAAIAAEzAmKptIgrAAIjXj7AtyD/Qgvn7Avn8");
	this.shape.setTransform(-3.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AhiAJIAAgRIDFAAIAAARg");
	this.shape_1.setTransform(-22.1,-31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#7B282C","#FF545C","#FD545C","#F9525A","#822A2E"],[0,0.318,0.565,0.78,1],-11.9,1.2,11.5,1.2).s().p("AAGDZIhoAAIAAmxIDFAAIAAGxg");
	this.shape_2.setTransform(-22.1,-8.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#351E3B").s().p("AhqAcIAAkyQBoB0AnB2QApB2AdDNg");
	this.shape_3.setTransform(-57.9,-90.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20353C").s().p("AiwlPIFhisQgvH7AvH8QlQnSgRl5g");
	this.shape_4.setTransform(-109.3,-25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#507282").s().p("AkBGlIjmwVIBdAAIANADQHCCEDfAAQBHAABHgUQAYAzAeAwQhrDtgsEEQgjDTAJDRQkUBnkWAQg");
	this.shape_5.setTransform(27.3,75.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#464747").s().p("AiXClQgDgzAMguQA4i7B2hIIAAADIB4AAQiXETiWBpIgCgbg");
	this.shape_6.setTransform(105.1,-3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A5B68").s().p("AoBSzQgxidgokjQgsk/gkiHQgThJg0iaQgyiSgUhQQgyjDgIj8QgFiAAIjmIB4g6IDXD7IArAAIBsEsIAAASIAAGyIBqAAIDmQVIANDNQgyACgzAAQi4AAi5glgAIaK8QArkGBsjtQgegwgYgzQhIAUhHAAQjeAAnCiCIgOgEIAAmyIAAgSIERleIA7AAIIgmpIA6AOQgZAagVAhQglA6gsBwQg3CLgUAoQgwBhg9A2IhRA/QgvAlgRAmQgRAhAAAwQgBAdAIA4QAKBJASArQAaA9AvAXQAUAJA4AJQAyAHAXAQQAXARARAhQAIAPARAwQAUA4AaA2QBggaBig9QAKBOAtA+Qg8BFgtBlQgYA2gTBAQhHDkhLGhQgnAQgnAPQgJjRAjjSg");
	this.shape_7.setTransform(7.3,14.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#482445").s().p("An5F9QgejNgoh3Qgph1hnh0IAsAAQBrBsAoBuQAoBuAaDlgAFWh6QAmhFETi9IBCEfIohGoQB/mAAnhFg");
	this.shape_8.setTransform(3.5,-100.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E2C51").s().p("AkLFkQB9mPA8hdQA8hcD/h/IAkAAQkSC9gmBFQgnBFh/GAg");
	this.shape_9.setTransform(42.1,-102.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#28434C").s().p("As+R6QhqnIh2o2Qgvn7Avn9IBug1QgHDlAECAQAJD9AyDDQAUBPAxCSQA0CaAUBJQAkCHAsFAQAoEiAwCdQh9gZh+grgAL7AbQCXhoCXkUIANAAIhSFJQhABYg/A1QgaAWgZAcQgtg+gKhOgAILACQgRgugHgPQgRgigYgQQgXgQgygIQg4gJgUgJQgvgWgZg9QgSgrgLhKQgHg4AAgdQABgvAQgiQASglAugmIBRg+QA+g2AwhhQATgoA3iMQAshwAlg5QAWghAZgaIDHAzQAnAoAfAzIAALMQh2BHg4C8QgMAuADAyIACAbQhhA9hhAaQgag3gUg5gAL7AbIAAAAg");
	this.shape_10.setTransform(13.8,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-139.4,249.7,278.8);


(lib.hacker_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACO1nQiRHcgmHaQgnHYisGiQitGghwH6QAuACArABQEPAHCrgaQChgXBJg1QCsl/gCkbQgCkbAwizQAviyAvme");
	this.shape.setTransform(0,-46.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#507282").s().p("AjOH1QgNgSALgoQBMlABpkmQA6h4AlhCQA6hkBIg8QAoDOg7DoQg0DJh8DSQg4BfgyA2QgYAZgdAJQgKADgIAAQgVAAgLgRg");
	this.shape_1.setTransform(-3.2,32.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A5B68").s().p("AmURMQDgpWCYpsQB3noBKnvQAMAoAkBIQAkBHBJBaQBKBbAJAPQg4Gah5DDQBogVBFhCQgUFPhdFIQhdFGifEoQiHAVjIAAIhpgCgABQCQQglBCg6B4QhpEnhMFAQgLAoANASQAQAXAigJQAdgJAYgZQAyg2A4hfQB8jSA0jKQA7jogojNQhIA7g6Bkg");
	this.shape_2.setTransform(-4.4,-17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#28434C").s().p("AoZVkQBwn6CtmgQCsmiAnnYQAmnaCRncIArA7QChDnBeEOQBBC5AhDNQgvGegvCyQgwCzACEbQACEbisF/QhJA0ihAYQCekoBdlGQBdlIAUlQQhFBChoAUQB5jBA4maQgKgQhJhaQhKhagjhHQgkhIgNgoQhJHvh3HnQiZJtjfJWIhagDg");
	this.shape_3.setTransform(0,-46.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAjBUQBQBxBgAgQBgAhAYgiQAYgigPgZQgQgYhohGQhphFg5haQgXh1A0hnQAuhbg5irAhVB7QBNDfBNBNQBOBMA6gsQALgIAFgLQAWgthQhXQg3g7gmhOQgTgngQgsQgKgdgIggAgcmjQAeB1gWBDQgLAegWAVQhHBAASAtQASAsANBRQAHAvgRAaQgIAMgNAHQgGADgIACQAAAAgBABQgOAEgLgCQgmgHgOhGQgShbgggmQgggmAmjpAlEmyQg6FgBoDzQBoD1BJBfQBIBeBEgoQAQgJAHgMQAbgohBhHQhShdgwi8");
	this.shape_4.setTransform(-6.5,127.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CFC1C2").s().p("AgHGEQgZgCgUgPQgggYgVg6QgOgogdh+QgShLgUgyQAMACANgEIACAAIAOgGIgOAGQAGgtgKg/IgTh+QgDgtANgWQANgZAxgZQAhgRARgPQgLAegWAUQhGBBASAsQASAsAMBSQAIAwgSAaQgHALgNAHQAwC8BTBcQBABIgbAoQgMAGgOAAIgEAAgACHEdIgVgOQgdgUgOgLQgXgTgOgUQgTgagVg3QgQgngGgUQgJghAFgcQACgLAFgEQAKgGANAHIAaAYIAHAFQAmBOA2A7QBRBXgWAtQgKAJgNAAQgMgBgMgHg");
	this.shape_5.setTransform(-2.5,143);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A39899").s().p("AhlH1QhJhfhoj1QhojzA6lgIGQiEQA5CrguBbQg0BnAXB1QA5BaBpBFQBoBGAQAYQAPAZgYAiQgYAihgghQhggghQhxQAQAsATAnIgHgFIgbgYQgNgHgJAFQgGAFgCAMQgEAbAJAiQAFATAQAoQAWA3ATAaQAPATAXATQANALAdAVIAVAOQANAGALABQANAAAKgJQgFALgLAIQg6AshOhMQhNhNhNjfQARgagHgvQgNhRgSgsQgSgtBHhAQAWgVALgeQAKgdAAgmQAAgygShDQASBDAAAyQAAAmgKAdQgSAPghASQgwAZgOAYQgNAXADAtIATB8QAKA/gGAtIgBABQgOAEgLgCQgmgHgOhGQgShbgggmQgPgSAAg7QAAhFAVh9QgVB9AABFQAAA7APASQAgAmASBbQAOBGAmAHQAUAyARBLQAdB/APAnQAUA6AgAZQAUAPAZABQARABANgHQgHAMgQAJQgVAMgTAAQgyAAgyhCgAAjBUQgKgdgIggQAIAgAKAdg");
	this.shape_6.setTransform(-6.5,127.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.8,-185.5,109.6,371);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-275,1024,550);


(lib.dArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7E6CD7").s().p("AqIPyQhzgIgBiLIAA69QABiKBzgJIURAAQBzAJABCKIAAa9QgBCLhzAIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(10,1,1).p("Ar8teQABiKBzgJIURAAQBzAJABCKIAAa+QgBCKhzAII0RAAQhzgIgBiKg");
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.5,-101,153,202);


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


(lib.btnD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsGP8IAA/3IYNAAIAAf3g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AsGP8IAA/3IYNAAIAAf3g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-102,155,204);


(lib.blinkLoading = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(14,224,224,0.996)").ss(3,1,0,3).p("Ag7AAIB3AA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(13,159,159,0.996)").ss(3,1,0,3).p("Ag7AAIB3AA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-1.5,15,3);


(lib.Symbol22copy11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",11);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy11, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",10);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy10, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",9);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy9, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol15("single",8);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy8, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",7);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy7, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",6);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy6, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",5);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy5, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy4, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",3);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy3, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy2, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22copy, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.btnD();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnD(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol15("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-77.5,-102,155,204), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.blinkLoading();
	this.instance.parent = this;
	this.instance.setTransform(0,24.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.898)").s().p("AinEjIiokjICokiIFPAAICoEiIioEjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-33.6,-29.1,67.3,58.3), null);


(lib.hacker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.hacker_head("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-7.8,-381.5,1,1,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_1 = new lib.hackerbelt("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-30.2,-76.1,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

	// Layer_5
	this.instance_2 = new lib.hacker_body("single",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-8.9,-227.7,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1));

	// Layer_6
	this.instance_3 = new lib.hacker_leg("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-28,184.1,1,1,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgFAOQgGgCgBgGQgCgGACgEQABgCACgDIAJgFIAAADQAEgCADADQADACADAGIABAFIgCAEQgDAFgFACIgFABIgEgBg");
	this.shape.setTransform(-145.7,143.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3}]}).to({state:[]},1).wait(1));

	// Layer_7
	this.instance_4 = new lib.hacker_armR("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(123,-90.9,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1));

	// Layer_8
	this.instance_5 = new lib.hacker_neck("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16,-325.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.5,-464.1,376.4,924.7);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_1 = new lib.blinkLoading();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.898)").s().p("AinEjIiokjICokiIFPAAICoEiIioEjg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(-33.6,-29.1,67.3,58.3), null);


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
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-36.8,483.5,66.7);


(lib.congratsAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.iconLike("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.9,-87.2,0.101,0.101);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1},27,cjs.Ease.elasticOut).wait(48));

	// Layer_1
	this.instance_1 = new lib.tCongrats2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,35.2,0.155,0.155);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,y:73.2},14,cjs.Ease.cubicOut).wait(70));

	// Layer_3
	this.instance_2 = new lib.tCongrats();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,113.7,0.227,0.227);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,y:-9.8},20,cjs.Ease.elasticOut).wait(71));

	// Layer_2
	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.4,422.2,4.075,4.075,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:5.05,scaleY:5.05,y:1.4},24,cjs.Ease.cubicOut).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.7,302.4,274,237.4);


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


(lib.btnHorizontal2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAHg+IgTAAIADgYIASAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape.setTransform(40.4,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgtIACgbIAdAAIgDAbg");
	this.shape_1.setTransform(33.3,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAIhMIgdAAIgIBMIgbAAIAKhjIAXAAIAEAIIAPgIIATAAIARAKIAUgKIATAAIAWANIgJBWg");
	this.shape_2.setTransform(21.6,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIBJIgNgIIgPAIIgNAAIAPiRIAbAAIgFA1IAOgIIAaAAIAWANIgIBKIgZANgAgUAyIAkAAIAGg2IgjAAg");
	this.shape_3.setTransform(7,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_4.setTransform(-4.9,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg5IAYgNIAyAAIAWANIgDAbIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_5.setTransform(-17.3,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBYIgTgTQgCgCAAgDQAAgCACgDIA7g7Ig7g6QgCgCAAgEQAAgCACgCIATgTQACgCADAAQADAAACACIBSBTQACACAAACQAAADgCACIhSBTQgCACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(-37.2,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_7.setTransform(-1.4,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_8.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_9.setTransform(0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_10.setTransform(0.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_11.setTransform(0.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_12.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.btnHorizontal1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape.setTransform(40.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(29.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAHg+IgTAAIACgYIATAAIABgRIAdgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_2.setTransform(19.6,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAMAyIAIhMIggAAIgIBMIgcAAIALhjIAWAAIAEAIIAOgIIAYAAIAWANIgJBWg");
	this.shape_3.setTransform(9.1,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_4.setTransform(-2.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_5.setTransform(-15.8,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBYIgTgTQgCgCAAgDQAAgCACgDIA7g7Ig7g6QgCgCAAgEQAAgCACgCIATgTQACgCADAAQADAAACACIBSBTQACACAAACQAAADgCACIhSBTQgCACgDAAQgDAAgCgCg");
	this.shape_6.setTransform(-36.5,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_7.setTransform(-1.4,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_8.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_9.setTransform(0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_10.setTransform(0.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_11.setTransform(0.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_12.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.avatarBots = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-55,110,110);


(lib.timesUpAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.iconTime("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(7.9,-87.2,0.101,0.101);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1},27,cjs.Ease.elasticOut).wait(48));

	// Layer_1
	this.instance_1 = new lib.tTImesUp2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,35.2,0.155,0.155);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({scaleX:1,scaleY:1,y:73.2},14,cjs.Ease.cubicOut).wait(70));

	// Layer_3
	this.instance_2 = new lib.tTimesUp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,113.7,0.227,0.227);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,y:-9.8},20,cjs.Ease.elasticOut).wait(71));

	// Layer_2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1.4,422.2,4.075,4.075,0,0,0,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:5.05,scaleY:5.05,y:1.4},24,cjs.Ease.cubicOut).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.7,302.4,274,237.4);


(lib.mcTimesUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});
	var _this = this;
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		function onClick(){
			return;
		}
		this.addEventListener("click", onClick);
		playSound("timeout");
	}
	this.frame_150 = function() {
		this.stop();
		//nextScreen();
		this.parent.onTimeEnd();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(149).call(this.frame_150).wait(1));

	// anim
	this.instance = new lib.timesUpAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(150));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.996)").s().p("AhyCMQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgKQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAPAAQAAgpAQgfQARggAagQQgagQgRgfQgQgfAAgpIgPAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgKQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIDlAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAKQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgPAAQAAApgQAfQgRAfgZAQQAZAQARAgQAQAfAAApIAPAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAKQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAhKhQQAGATAJAPQAJAOALAJQAMAKALAFQAEAAABADQACADAAACQAAADgCADQgBADgEAAQgVAJgRAWIBsAAQgQgWgWgJQgDAAgBgDQgCgDAAgDQAAgCACgDQABgDADAAQAMgFAMgKQALgJAJgOQAJgPAGgTQAFgSAAgVIifAAQAAAVAFASg");
	this.shape.setTransform(-73.5,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EhBvAyxMAAAhlhMCDgAAAMAAABlhg");
	this.shape_1.setTransform(402.9,308.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(150));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,78.7,24,28);


(lib.mcBtnCont = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnHorizontal1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHorizontal1(), 3);

	this.instance_1 = new lib.btnHorizontal2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHorizontal2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-24.6,164.1,51.8);


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


(lib.avatarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (typeof cUserId === "undefined") {
			//
		} else if (schoolLevel==2 || schoolLevel==3) {
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-48.5,-48.5);

	this.instance_1 = new lib.avatarBots();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.5,0.853,0.853);

	this.instance_2 = new lib.avatar3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-49,-49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-48.5,181.6,133.7);


(lib.actMc12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy11();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc12, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 1;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy10();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc11, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 1;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy9();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc10, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy8();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc9, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 1;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy7();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc8, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy6();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc7, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy5();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc6, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 1;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy4();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc5, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy3();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc4, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy2();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22copy();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2, new cjs.Rectangle(146.6,157,509,401.2), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var cAns = 2;
		var _this = this;
		var maxdArea = 2;
		var initX = this.item.x;
		var initY = this.item.y;
		var userAns = 0;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		this.item.on("pressmove", function(evt) {
			_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
			var point = stage.globalToLocal(evt.stageX, evt.stageY);
			evt.currentTarget.x = point.x;
			evt.currentTarget.y = point.y;
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			
			if (_this.dArea1.hitTest(p1.x, p1.y)) {
				_this.dArea1.gotoAndStop(1);
			} else {
				_this.dArea1.gotoAndStop(0);
			}
			if (_this.dArea2.hitTest(p2.x, p2.y)) {
				_this.dArea2.gotoAndStop(1);
			} else {
				_this.dArea2.gotoAndStop(0);
			}
			stage.update();
		});
		this.item.on("pressup", function(evt) {
			var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
			var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
			_this.dArea1.gotoAndStop(0);
			_this.dArea2.gotoAndStop(0);
			if (_this.item.hitTest(p1.x, p1.x)){
				userAns = 1;
				evt.currentTarget.x = _this.dArea1.x;
				evt.currentTarget.y = _this.dArea1.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else if (_this.item.hitTest(p2.x, p2.x)){
				userAns = 2;
				evt.currentTarget.x = _this.dArea2.x;
				evt.currentTarget.y = _this.dArea2.y;
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				userAns = 0;
				evt.currentTarget.x = initX;
				evt.currentTarget.y = initY;
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		});
		function submitAns(){
			if (userAns==cAns){
				_this.parent.storeCorrect(userAns);
			} else {
				_this.parent.storeWrong(userAns);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(393,535.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item = new lib.Symbol22();
	this.item.name = "item";
	this.item.parent = this;
	this.item.setTransform(399.5,298.5);

	this.timeline.addTween(cjs.Tween.get(this.item).wait(1));

	// dArea
	this.instance = new lib.Symbol20copy();
	this.instance.parent = this;
	this.instance.setTransform(579.1,416.9);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(579.1,298.5);

	this.instance_1 = new lib.Symbol20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(223.1,416.9);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(223.1,298.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.instance_1},{t:this.dArea2},{t:this.instance}]}).wait(1));

	// instr
	this.instance_2 = new lib.instru();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(146.6,157,509,401.2), null);


// stage content:
(lib.y6s2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:150,q3:196,q4:237,q5:278,q6:319,q7:359,q8:399,q9:439,q10:479,q11:519,q12:559,finalFb:610});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;//text typewriter effect about 60fps
	}
	this.frame_4 = function() {
		playSound("mdroid_talk");
	}
	this.frame_44 = function() {
		//playSound("suspense",-1);
	}
	this.frame_99 = function() {
		this.stop();
		var _this = this;
		var stageNum = 2;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		} else if (schoolLevel==2){
			stageNum = 15;
		} else if (schoolLevel==3){
			stageNum = 16;
		}
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		var maxQ = 6;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		this.qList1 = [0,1,2,3];
		var qItem1 = [{
				"qId": "y6s2_1",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 19,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_2",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 19,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_3",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 19,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_4",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 19,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		this.qList2 = [0,1,2,3];
		var qItem2 = [{
				"qId": "y6s2_5",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 24,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_6",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 24,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_7",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 24,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_8",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 24,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		this.qList3 = [0,1];
		var qItem3 = [{
				"qId": "y6s2_9",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 20,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_10",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 20,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		this.qList4 = [0,1];
		var qItem4 = [{
				"qId": "y6s2_11",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 21,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "y6s2_12",
				"qDomain": 3,
				"qParam": 5,
				"qSkill": 21,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		if (typeof debugMode === "undefined") {
			debugMode = false;
		}
		//debugMode = true;
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(qItem1[0]);
			this.myData.qItem.push(qItem1[1]);
			this.myData.qItem.push(qItem1[2]);
			this.myData.qItem.push(qItem1[3]);
			this.myData.qItem.push(qItem2[0]);
			this.myData.qItem.push(qItem2[1]);
			this.myData.qItem.push(qItem2[2]);
			this.myData.qItem.push(qItem2[3]);
			this.myData.qItem.push(qItem3[0]);
			this.myData.qItem.push(qItem3[1]);
			this.myData.qItem.push(qItem4[0]);
			this.myData.qItem.push(qItem4[1]);
		} else {
			//shuffle and take only what we need
			this.qList1 = shuffle(this.qList1);
			this.qList2 = shuffle(this.qList2);
			this.qList3 = shuffle(this.qList3);
			this.qList4 = shuffle(this.qList4);
			this.myData.qItem.push(qItem1[this.qList1[0]]);
			this.myData.qItem.push(qItem1[this.qList1[1]]);
			this.myData.qItem.push(qItem2[this.qList2[0]]);
			this.myData.qItem.push(qItem2[this.qList2[1]]);
			this.myData.qItem.push(qItem3[this.qList3[0]]);
			this.myData.qItem.push(qItem4[this.qList4[0]]);
		}
		/*
		console.log(this.qList1);
		console.log(this.qList2);
		console.log(this.qList3);
		console.log(this.qList4);*/
		var qLength1 = this.qList1.length;
		var qLength2 = this.qList2.length;
		var qLength3 = this.qList3.length;
		var qLength4 = this.qList4.length;
		
		function shuffle(array) {
			//randomise order
			var currentIndex = array.length, temporaryValue, randomIndex;
			// While there remain elements to shuffle...
			while (0 !== currentIndex) {
				// Pick a remaining element...
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				// And swap it with the current element.
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
		  return array;
		}
		function goNextQ (){
			_this.currentQ++;
			if (_this.currentQ<=_this.myData.qItem.length){
				console.log(_this.myData.qItem[_this.currentQ-1].qId.substring(5));
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(5));
				if (_this.currentQ<=maxQ){
					_this["prog"+_this.currentQ].gotoAndStop("on");
				}
			} else {
				//all questions done
				clearInterval(timeInterval);//stop time
				saveData();
			}
			console.log(_this.myData);
		}
		var isTimeOut = false;
		this.onTimeEnd = function (){
			_this.myData.qItem[_this.currentQ-1].time = _this.timeGiven;
			isTimeOut = true;
			saveData();
		};
		var saveAttempt=0;
		function saveData(){
			if (cUserId == ""){//not online
				_this.gotoAndPlay("finalFb");
			} else {
				_this.mouseChildren=false;
				saveAttempt++;
				//save data here
				var cData = $.post("/api/record/update/", _this.myData, function(data) {
				})
				.done(function(data) {
					console.log("set score: "+data.message);
					if (data.message=="success" && !isTimeOut){
						_this.gotoAndPlay("finalFb");
					} else if (data.message=="success"){
						//nothing
						nextScreen();
					} else {
						console.log("Error encountered when writing to database.");
					}
				})
				.fail(function() {
					if (saveAttempt<=3){
						alert("Oppss... something went wrong. We'll try saving your data again.");
						saveData();
					} else {
						alert("Hmmm... we've tried 3 times and it's just NOT working. Please refresh your browser and try again.");
					}
				});
			}
		}
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			goNextQ();
		}
		this.addEventListener("click", doPlay);
		this.storeCorrect = function (_userAns){
			_this.myData.qItem[_this.currentQ-1].qResult = 1;
			_this.myData.qItem[_this.currentQ-1].score = 5;
			_this.myData.qItem[_this.currentQ-1].userAns = _userAns;
			_this.myData.qItem[_this.currentQ-1].time = _this.timeGiven-_this.secRemaining;
			_this.timeGiven = _this.secRemaining;
			goNextQ();
		};
		this.storeWrong = function (_userAns){
			_this.myData.qItem[_this.currentQ-1].qResult = 0;
			_this.myData.qItem[_this.currentQ-1].score = 1;
			_this.myData.qItem[_this.currentQ-1].userAns = _userAns;
			_this.myData.qItem[_this.currentQ-1].time = _this.timeGiven-_this.secRemaining;
			goNextQ();
		};
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_109 = function() {
		playSound("questionAlert");
	}
	this.frame_145 = function() {
		this.stop();
	}
	this.frame_150 = function() {
		playSound("questionAlert");
	}
	this.frame_186 = function() {
		this.stop();
	}
	this.frame_196 = function() {
		playSound("questionAlert");
	}
	this.frame_232 = function() {
		this.stop();
	}
	this.frame_237 = function() {
		playSound("questionAlert");
	}
	this.frame_273 = function() {
		this.stop();
	}
	this.frame_278 = function() {
		playSound("questionAlert");
	}
	this.frame_314 = function() {
		this.stop();
	}
	this.frame_319 = function() {
		playSound("questionAlert");
	}
	this.frame_354 = function() {
		this.stop();
	}
	this.frame_359 = function() {
		playSound("questionAlert");
	}
	this.frame_394 = function() {
		this.stop();
	}
	this.frame_399 = function() {
		playSound("questionAlert");
	}
	this.frame_434 = function() {
		this.stop();
	}
	this.frame_439 = function() {
		playSound("questionAlert");
	}
	this.frame_474 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		playSound("questionAlert");
	}
	this.frame_514 = function() {
		this.stop();
	}
	this.frame_519 = function() {
		playSound("questionAlert");
	}
	this.frame_554 = function() {
		this.stop();
	}
	this.frame_559 = function() {
		playSound("questionAlert");
	}
	this.frame_595 = function() {
		this.stop();
	}
	this.frame_610 = function() {
		clearInterval(timeInterval);//stop time
		playSound("questionComplete");
	}
	this.frame_774 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(40).call(this.frame_44).wait(55).call(this.frame_99).wait(10).call(this.frame_109).wait(36).call(this.frame_145).wait(5).call(this.frame_150).wait(36).call(this.frame_186).wait(10).call(this.frame_196).wait(36).call(this.frame_232).wait(5).call(this.frame_237).wait(36).call(this.frame_273).wait(5).call(this.frame_278).wait(36).call(this.frame_314).wait(5).call(this.frame_319).wait(35).call(this.frame_354).wait(5).call(this.frame_359).wait(35).call(this.frame_394).wait(5).call(this.frame_399).wait(35).call(this.frame_434).wait(5).call(this.frame_439).wait(35).call(this.frame_474).wait(5).call(this.frame_479).wait(35).call(this.frame_514).wait(5).call(this.frame_519).wait(35).call(this.frame_554).wait(5).call(this.frame_559).wait(36).call(this.frame_595).wait(15).call(this.frame_610).wait(164).call(this.frame_774).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).to({_off:true},506).wait(165));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(697.4,57.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).to({_off:true},506).wait(165));

	// timerBg
	this.instance = new lib.timerBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(761.4,136.7,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:683.6,y:59.8},17,cjs.Ease.cubicOut).to({_off:true},564).wait(165));

	// actMc
	this.instance_1 = new lib.actMc1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(520,0);
	this.instance_1._off = true;

	this.instance_2 = new lib.actMc2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(520,0);
	this.instance_2._off = true;

	this.instance_3 = new lib.actMc3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(520,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.actMc4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(520,0);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(520,0);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(520,0);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(520,0);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(520,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(520,0);
	this.instance_9._off = true;

	this.instance_10 = new lib.actMc10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(520,0);
	this.instance_10._off = true;

	this.instance_11 = new lib.actMc11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(520,0);
	this.instance_11._off = true;

	this.instance_12 = new lib.actMc12();
	this.instance_12.parent = this;
	this.instance_12.setTransform(520,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(130).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(625));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(171).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(584));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(217).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(538));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(258).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(497));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(299).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(456));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(339).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(416));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(379).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(376));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(419).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(336));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(459).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(296));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(499).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(539).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},5).wait(216));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(580).to({_off:false},0).to({x:0},15,cjs.Ease.backOut).to({_off:true},15).wait(165));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(676.9,157.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(671));

	// ss
	this.instance_13 = new lib.dialogue1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(444.9,123.4,1,1,0,0,0,-0.6,0.8);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(43).to({_off:false},0).to({_off:true},567).wait(165));

	// avatar
	this.instance_14 = new lib.avatarMc();
	this.instance_14.parent = this;
	this.instance_14.setTransform(146,114.6,0.052,0.052);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:145.5,y:114.2},17,cjs.Ease.elasticOut).to({_off:true},567).wait(165));

	// q
	this.instance_15 = new lib.mcQ1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(400,519.6,0.009,0.009);
	this.instance_15._off = true;

	this.instance_16 = new lib.mcQ2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(400,519.6,0.009,0.009);
	this.instance_16._off = true;

	this.instance_17 = new lib.mcQ3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(400,519.6,0.009,0.009);
	this.instance_17._off = true;

	this.instance_18 = new lib.mcQ4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(400,519.6,0.009,0.009);
	this.instance_18._off = true;

	this.instance_19 = new lib.mcQ5();
	this.instance_19.parent = this;
	this.instance_19.setTransform(400,519.6,0.009,0.009);
	this.instance_19._off = true;

	this.instance_20 = new lib.mcQ6();
	this.instance_20.parent = this;
	this.instance_20.setTransform(400,519.6,0.009,0.009);
	this.instance_20._off = true;

	this.instance_21 = new lib.mcQ7();
	this.instance_21.parent = this;
	this.instance_21.setTransform(400,519.6,0.009,0.009);
	this.instance_21._off = true;

	this.instance_22 = new lib.mcQ8();
	this.instance_22.parent = this;
	this.instance_22.setTransform(400,519.6,0.009,0.009);
	this.instance_22._off = true;

	this.instance_23 = new lib.mcQ9();
	this.instance_23.parent = this;
	this.instance_23.setTransform(400,519.6,0.009,0.009);
	this.instance_23._off = true;

	this.instance_24 = new lib.mcQ10();
	this.instance_24.parent = this;
	this.instance_24.setTransform(400,519.6,0.009,0.009);
	this.instance_24._off = true;

	this.instance_25 = new lib.mcQ11();
	this.instance_25.parent = this;
	this.instance_25.setTransform(400,519.6,0.009,0.009);
	this.instance_25._off = true;

	this.instance_26 = new lib.mcQ12();
	this.instance_26.parent = this;
	this.instance_26.setTransform(400,519.6,0.009,0.009);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(109).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},21).wait(625));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(150).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},26).wait(579));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(196).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},21).wait(538));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(237).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},21).wait(497));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(278).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},21).wait(456));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(319).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},20).wait(416));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(359).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},20).wait(376));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(399).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},20).wait(336));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(439).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},20).wait(296));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(479).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},20).wait(256));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(519).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},21).wait(215));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(560).to({_off:false},0).to({scaleX:1,scaleY:1,x:368.8,y:496.6},20,cjs.Ease.backOut).to({_off:true},30).wait(165));

	// progress
	this.prog6 = new lib.progress();
	this.prog6.name = "prog6";
	this.prog6.parent = this;
	this.prog6.setTransform(619.3,61.5);

	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(557.8,61.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(570.1,61.5);

	this.prog3 = new lib.progress();
	this.prog3.name = "prog3";
	this.prog3.parent = this;
	this.prog3.setTransform(582.4,61.5);

	this.prog4 = new lib.progress();
	this.prog4.name = "prog4";
	this.prog4.parent = this;
	this.prog4.setTransform(594.7,61.5);

	this.prog5 = new lib.progress();
	this.prog5.name = "prog5";
	this.prog5.parent = this;
	this.prog5.setTransform(607,61.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog5},{t:this.prog4},{t:this.prog3},{t:this.prog2},{t:this.prog1},{t:this.prog6}]},99).to({state:[]},511).wait(165));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");
	mask.setTransform(407.2,295.9);

	// t
	this.instance_27 = new lib.congratsAnim("synched",0,false);
	this.instance_27.parent = this;
	this.instance_27.setTransform(400,300);
	this.instance_27._off = true;

	var maskedShapeInstanceList = [this.instance_27];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(610).to({_off:false},0).wait(165));

	// flash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5E5").s().p("Eg6gArYMAAAhWuMB1BAAAMAAABWug");
	this.shape.setTransform(407.5,397.6,1,0.014);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5E5E5").s().p("Eg6gAAoIAAhPMB1BAAAIAABPg");
	this.shape_1.setTransform(407.5,397.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5E5E5").s().p("Eg6gAAqIAAhUMB1BAAAIAABUg");
	this.shape_2.setTransform(407.5,397.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5E5E5").s().p("Eg6gAAxIAAhhMB1BAAAIAABhg");
	this.shape_3.setTransform(407.5,397.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5E5E5").s().p("Eg6gAA+IAAh7MB1BAAAIAAB7g");
	this.shape_4.setTransform(407.5,396.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C5E5E5").s().p("Eg6gABTIAAilMB1BAAAIAAClg");
	this.shape_5.setTransform(407.5,396.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C5E5E5").s().p("Eg6gAByIAAjjMB1BAAAIAADjg");
	this.shape_6.setTransform(407.5,395);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5E5E5").s().p("Eg6gACdIAAk5MB1BAAAIAAE5g");
	this.shape_7.setTransform(407.5,393.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5E5E5").s().p("Eg6gADXIAAmtMB1BAAAIAAGtg");
	this.shape_8.setTransform(407.5,391.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C5E5E5").s().p("Eg6gAEhIAApBMB1BAAAIAAJBg");
	this.shape_9.setTransform(407.5,388.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C5E5E5").s().p("Eg6gAF+IAAr7MB1BAAAIAAL7g");
	this.shape_10.setTransform(407.5,385.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C5E5E5").s().p("Eg6gAHvIAAvdMB1BAAAIAAPdg");
	this.shape_11.setTransform(407.5,381);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C5E5E5").s().p("Eg6gAJ3IAAztMB1BAAAIAATtg");
	this.shape_12.setTransform(407.5,376);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C5E5E5").s().p("Eg6gAMXIAA4tMB1BAAAIAAYtg");
	this.shape_13.setTransform(407.5,370.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C5E5E5").s().p("Eg6gAPSIAA+jMB1BAAAIAAejg");
	this.shape_14.setTransform(407.5,363.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C5E5E5").s().p("Eg6gASqMAAAglTMB1BAAAMAAAAlTg");
	this.shape_15.setTransform(407.5,355.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C5E5E5").s().p("Eg6gAWhMAAAgtBMB1BAAAMAAAAtBg");
	this.shape_16.setTransform(407.5,346.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5E5E5").s().p("Eg6gAa4MAAAg1vMB1BAAAMAAAA1vg");
	this.shape_17.setTransform(407.5,336.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C5E5E5").s().p("Eg6gAfyMAAAg/jMB1BAAAMAAAA/jg");
	this.shape_18.setTransform(407.5,324.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C5E5E5").s().p("Eg6gAlRMAAAhKhMB1BAAAMAAABKhg");
	this.shape_19.setTransform(407.5,311.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleY:0.014,y:397.6}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4,p:{y:396.9}}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{y:391.3}}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12,p:{y:376}}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16,p:{y:346.4}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape,p:{scaleY:1,y:297.6}}]},1).to({state:[{t:this.shape_16,p:{y:224.4}}]},1).to({state:[{t:this.shape_12,p:{y:180.1}}]},1).to({state:[{t:this.shape_8,p:{y:157.3}}]},1).to({state:[{t:this.shape_4,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{scaleY:0.014,y:147.6}}]},1).to({state:[]},1).wait(749));

	// sit
	this.instance_28 = new lib.Symbol2("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(351.4,296.6);
	this.instance_28._off = true;

	var maskedShapeInstanceList = [this.instance_28];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(20).to({_off:false},0).to({_off:true},590).wait(165));

	// bg
	this.instance_29 = new lib.Bitmap3();
	this.instance_29.parent = this;
	this.instance_29.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(775));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203,65,1202,903);
// library properties:
lib.properties = {
	id: '6177E91A890DB6448AFB18F3AC99DAC5',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/y6s2/avatar3.png", id:"avatar3"},
		{src:"images/y6s2/Bitmap11.png", id:"Bitmap11"},
		{src:"images/y6s2/Bitmap12.png", id:"Bitmap12"},
		{src:"images/y6s2/Bitmap13.png", id:"Bitmap13"},
		{src:"images/y6s2/Bitmap14.png", id:"Bitmap14"},
		{src:"images/y6s2/Bitmap15.png", id:"Bitmap15"},
		{src:"images/y6s2/Bitmap16.png", id:"Bitmap16"},
		{src:"images/y6s2/Bitmap17.png", id:"Bitmap17"},
		{src:"images/y6s2/Bitmap19.png", id:"Bitmap19"},
		{src:"images/y6s2/Bitmap21.png", id:"Bitmap21"},
		{src:"images/y6s2/Bitmap22.png", id:"Bitmap22"},
		{src:"images/y6s2/Bitmap3.png", id:"Bitmap3"},
		{src:"images/y6s2/Bitmap4.png", id:"Bitmap4"},
		{src:"images/y6s2/Bitmap6.png", id:"Bitmap6"},
		{src:"images/y6s2/Bitmap7.png", id:"Bitmap7"},
		{src:"images/y6s2/Bitmap8.png", id:"Bitmap8"},
		{src:"images/y6s2/Bitmap9.png", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3", id:"questionComplete"},
		{src:"sounds/submitAns.mp3", id:"submitAns"},
		{src:"sounds/timeout.mp3", id:"timeout"}
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
an.compositions['6177E91A890DB6448AFB18F3AC99DAC5'] = {
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