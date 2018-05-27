(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,541,393);


(lib.Bitmap14 = function() {
	this.initialize(img.Bitmap14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,78);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


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
p.nominalBounds = new cjs.Rectangle(0,0,372,262);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,295);


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


(lib.wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBF0F3").s().p("AhxErQgcgcAAgnQAAgmAcgcQAhghASgrQARgrAAgvQAAgugSgrQgRgrgighQgbgcAAgmQAAgnAbgcQAcgbAnAAQAnAAAaAbQA8A8AgBNQAgBNAABUQAABUggBOQggBNg8A8QgaAbgnAAQgnAAgbgbg");
	this.shape.setTransform(216.1,94.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EBF0F3").s().p("AixJgQgbgcAAgmQAAgnAbgcQBfhfAzh6QAyh7gBiHQAAiGgyh7Qgyh6hfhfQgcgcAAgmQAAgnAcgcQAbgbAnAAQAnAAAbAbQB5B6BBCdQBBCdAACrQAACshBCdQhBCdh4B6QgcAbgnAAQgnAAgbgbg");
	this.shape_1.setTransform(253.4,94.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EBF0F3").s().p("AjxOVQgbgbAAgnQAAgnAbgbQCdidBUjLQBTjKAAjfQAAjdhUjLQhUjLicidQgcgbAAgnQAAgnAcgbQAbgcAnAAQAnAAAbAcQC2C3BjDtQBiDtAAEDQAAEEhiDtQhiDti2C3QgcAcgnAAQgmAAgcgcg");
	this.shape_2.setTransform(290.8,94.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(201.9,0,115.9,189);


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


(lib.tEn1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Drag and drop the most suitable\nspecifications for CPU, RAM and HDD.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 342;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-224,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A8NAAMA4bAAA");
	this.shape.setTransform(-71,31.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A62EyIAAj/IilACIClh6IAAjnMA4bAAAIAAJe");
	this.shape_1.setTransform(-79.7,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A67EvIAAj/IikACICkh6IAAjmMA4bAAAIAAJdg");
	this.shape_2.setTransform(-79.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1a, new cjs.Rectangle(-269.5,-30.5,389.5,63.6), null);


(lib.tEn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Identify the network type for each of the following connections.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 305;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A5WAAMAytAAA");
	this.shape.setTransform(-89.3,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A3/FEIAAl9IilACIClh7IAAiMMAytAAAIAAKC");
	this.shape_1.setTransform(-98,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4EFCIAAl+IilADIClh8IAAiMMAytAAAIAAKDg");
	this.shape_2.setTransform(-97.5,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,344.5,67.4), null);


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


(lib.tBm1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Seret dan letakkan spesifikasi yang paling\nsesuai bagi CPU, RAM, HDD.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 374;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A8/AAMA5/AAA");
	this.shape.setTransform(-66.1,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A7oE3IAAkJIikACICkh6IAAjnMA5/AAAIAAJo");
	this.shape_1.setTransform(-74.8,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A7sE0IAAkJIilACIClh6IAAjmMA5+AAAIAAJng");
	this.shape_2.setTransform(-74.3,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1a, new cjs.Rectangle(-269.5,-30.5,406.5,64.6), null);


(lib.tBm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Kenal pasti jenis rangkaian bagi setiap \npenyambungan yang berikut.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 328;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A64AAMA1xAAA");
	this.shape.setTransform(-79.6,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A5hFEIAAl9IikACICkh7IAAiMMA1wAAAIAAKC");
	this.shape_1.setTransform(-88.3,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A5lFCIAAl+IilADIClh8IAAiMMA1wAAAIAAKDg");
	this.shape_2.setTransform(-87.8,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,364.5,67.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


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


(lib.modem = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(0,43.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,43.2,541,393);


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
					$("#dom_overlay_container").empty();
					_this.parent.onTimeEnd();
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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(227,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(220.5,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(210.8,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(201.2,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(191.9,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_5.setTransform(182.6,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_6.setTransform(173.5,-2.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_7.setTransform(161.3,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_8.setTransform(149.3,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgjAwQALgDAFgDQAGgFAFgJIADgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_9.setTransform(140.5,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(131.5,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_11.setTransform(122.6,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_12.setTransform(113.6,1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_13.setTransform(99.8,1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(89.8,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_15.setTransform(83.3,-2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_16.setTransform(78.5,-1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(71.5,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_18.setTransform(63.1,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_19.setTransform(51.5,-2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_20.setTransform(42.1,-0.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_21.setTransform(34.6,-1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(27.1,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_23.setTransform(17.9,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(4.3,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(-5.3,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(-11.8,-2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(-18.7,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_28.setTransform(-26.7,-2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(-36.6,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(-45.9,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-55.6,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_32.setTransform(-62.5,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_33.setTransform(-74.2,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_34.setTransform(-80,-2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(-86.6,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-95.6,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_37.setTransform(-102.8,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_38.setTransform(-112.6,-2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_39.setTransform(-119.2,-2.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_40.setTransform(-123,-2.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_41.setTransform(-126.8,-2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQARAAAKAJQALAIgBAPQABAPgLAJQgKAHgRAAIggAAIAAAygAgcgDIAfAAQAMAAAHgGQAGgFABgKQgBgLgGgEQgHgGgMAAIgfAAg");
	this.shape_42.setTransform(-133.5,-2.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_43.setTransform(222,-0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(210.4,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_45.setTransform(204,-2.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(188.8,-2.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(165.6,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_48.setTransform(154.4,-1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_49.setTransform(147.9,-0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(111.8,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_51.setTransform(103.4,-0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_52.setTransform(90.5,-2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_53.setTransform(82,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_54.setTransform(72.8,-0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(45,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_56.setTransform(37.6,-2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_57.setTransform(26.5,-0.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAGgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_58.setTransform(8.3,1.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_59.setTransform(-16.4,-0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-24.4,-0.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_61.setTransform(-35.9,-0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_62.setTransform(-45.8,-1.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_63.setTransform(-52.8,-0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_64.setTransform(-75.1,-0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_65.setTransform(-84.1,-2.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_66.setTransform(-91.7,-1.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_67.setTransform(-101.5,-1.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_68.setTransform(-108,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_69.setTransform(-116.4,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_70.setTransform(-128.9,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_71.setTransform(-138.2,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:-123}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:-95.6}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-62.5}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:27.1}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:51.5}},{t:this.shape_18},{t:this.shape_17,p:{x:71.5}},{t:this.shape_16,p:{x:78.5}},{t:this.shape_15,p:{x:83.3}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:113.6}},{t:this.shape_11,p:{x:122.6}},{t:this.shape_10,p:{x:131.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:191.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:220.5}},{t:this.shape,p:{x:227}}]}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_40,p:{x:-122.7}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_22,p:{x:-61.9}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_19,p:{x:-9.2}},{t:this.shape_16,p:{x:1.1}},{t:this.shape_58},{t:this.shape_12,p:{x:17.5}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_32,p:{x:53}},{t:this.shape_36,p:{x:63.9}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_10,p:{x:121}},{t:this.shape_4,p:{x:130.3}},{t:this.shape_17,p:{x:139.4}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_15,p:{x:159.2}},{t:this.shape_47},{t:this.shape_1,p:{x:174.8}},{t:this.shape_46},{t:this.shape_11,p:{x:197.7}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape,p:{x:230.7}}]},1).wait(1));

	// outlineshade
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#D40000").ss(4,2,0,3).p("EAgOAAAMgn6AAAI4hAA");
	this.shape_72.setTransform(42,18);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#D40000").ss(1,2,0,3).p("EggfADAIAJhnIBYhQIhJhPIALh6IaAAAMAmcAAAIgjGA");
	this.shape_73.setTransform(43.8,-1.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F5F5F5").s().p("AtQDAIAJhnIBXhQIhJhPIALh5IZ/AAIiBF/g");
	this.shape_74.setTransform(-79.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]}).wait(2));

	// white
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FAFAFA").s().p("EggcADAIAJhnIBXhQIhIhPIALh5MBAWAAAIgjF/g");
	this.shape_75.setTransform(43.5,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_75).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.2,-21.6,419.1,41.6);


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
	this.shape.graphics.f("#000000").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGIAKgPIAIgLQACgGAAgGQAAgHgEgEQgFgDgIAAQgLgBgLAHIAAgMIALgEIAMgCQANABAIAGQAJAHAAALQAAAHgCAEIgFAJIgIAKQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape.setTransform(132.1,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(123,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_2.setTransform(113.4,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(104.1,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_4.setTransform(94.5,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(83.3,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(75.6,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_7.setTransform(68.3,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_8.setTransform(61,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_9.setTransform(51.7,14.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(39.7,13.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(28.1,13.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_12.setTransform(20.1,11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAkgkIARAAIgnAmIAqAqg");
	this.shape_13.setTransform(7.7,11.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_14.setTransform(1,11.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_15.setTransform(-2.8,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_16.setTransform(-6.6,11.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_17.setTransform(-15.6,13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_18.setTransform(-29.7,12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_19.setTransform(-37,13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_20.setTransform(-45.1,11.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_21.setTransform(-51.8,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_22.setTransform(-56.1,13.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_23.setTransform(-63.8,13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(-72.7,11.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-83.9,11.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_26.setTransform(-89.8,13.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(-98.8,13.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(-108.1,13.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_29.setTransform(-114.6,11.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_30.setTransform(-121,11.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_31.setTransform(-133.2,13.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(-144.7,13.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_33.setTransform(-152.7,11.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_34.setTransform(-166.4,11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(-176.1,13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_36.setTransform(-184.1,11.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_37.setTransform(-194,13.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_38.setTransform(-203.3,13.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_39.setTransform(-212.9,13.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_40.setTransform(-224.3,11.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_41.setTransform(142,-7.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_42.setTransform(135.6,-12.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(125.8,-10.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_44.setTransform(116.2,-12.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_45.setTransform(106.9,-10.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_46.setTransform(98,-10.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_47.setTransform(91.2,-10.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_48.setTransform(78.5,-8.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_49.setTransform(69.2,-10.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_50.setTransform(62.7,-12.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6600").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_51.setTransform(58.9,-12.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(52,-10.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_53.setTransform(42.8,-9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_54.setTransform(28.5,-8.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_55.setTransform(19.2,-10.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(9.6,-10.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_57.setTransform(0.8,-8.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_58.setTransform(-9.6,-12.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_59.setTransform(-15.5,-10.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-24.5,-10.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_61.setTransform(-32.5,-12.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_62.setTransform(-39.2,-12.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_63.setTransform(-43.9,-12.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_64.setTransform(-48.4,-12.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_65.setTransform(-54.3,-10.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_66.setTransform(-62.6,-10.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_67.setTransform(-71.6,-9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_68.setTransform(-80.6,-10.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_69.setTransform(-90.6,-12.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_70.setTransform(-97.5,-10.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_71.setTransform(-106.3,-8.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_72.setTransform(-115.3,-10.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_73.setTransform(-124.6,-10.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_74.setTransform(-133.8,-9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_75.setTransform(-145.9,-10.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_76.setTransform(-157.2,-10.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_77.setTransform(-168.6,-10.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_78.setTransform(-184.8,-10.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_79.setTransform(-194.1,-10.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(-203.8,-10.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_81.setTransform(-210.7,-10.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_82.setTransform(-218.5,-10.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_83.setTransform(-226.3,-12.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_84.setTransform(160.4,-34.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_85.setTransform(152.7,-34.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_86.setTransform(145.4,-35.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_87.setTransform(138.1,-34.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(128.8,-32.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_89.setTransform(116.8,-34.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_90.setTransform(105.2,-34.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_91.setTransform(97.2,-36.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_92.setTransform(83.5,-34.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_93.setTransform(73.8,-34.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_94.setTransform(65.8,-36.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_95.setTransform(56,-34.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_96.setTransform(46.7,-34.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_97.setTransform(37.4,-34.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_98.setTransform(27.7,-32.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_99.setTransform(18.1,-32.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_100.setTransform(8.8,-34.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_101.setTransform(-0.2,-34.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_102.setTransform(-11.6,-34.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_103.setTransform(-27.5,-34.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_104.setTransform(-37.2,-34.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_105.setTransform(-44.6,-35.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_106.setTransform(-49.2,-36.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_107.setTransform(-53,-36.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_108.setTransform(-59.6,-34.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_109.setTransform(-68.2,-34.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_110.setTransform(-76.5,-34.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_111.setTransform(-84.3,-36.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_112.setTransform(-95.2,-36.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_113.setTransform(-101.7,-32.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_114.setTransform(-111.7,-34.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_115.setTransform(-121.3,-36.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_116.setTransform(-130.9,-34.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_117.setTransform(-140.1,-36.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_118.setTransform(-149.9,-32.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_119.setTransform(-159.2,-34.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_120.setTransform(-168.2,-34.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_121.setTransform(-179.6,-34.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_122.setTransform(-195.8,-34.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_123.setTransform(-205.4,-36.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_124.setTransform(-214.7,-34.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_125.setTransform(-225.2,-36.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgHgEgEQgFgDgIAAQgLgBgLAHIAAgMIALgEIAMgCQANABAIAGQAJAHAAALQAAAHgCAEIgFAJIgIAKQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape_126.setTransform(95.2,11.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgFAAQgMABgGgHg");
	this.shape_127.setTransform(73.7,12.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_128.setTransform(25.2,13.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_129.setTransform(6.4,13.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgjAxQALgEAFgDQAGgFAFgJIADgHIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_130.setTransform(-11.6,15.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_131.setTransform(-32.1,12.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHACAHgBQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_132.setTransform(-52,15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_133.setTransform(-70.5,13.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_134.setTransform(-92.1,11.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_135.setTransform(-108.3,13.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_136.setTransform(-119.9,13.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_137.setTransform(-126.3,11.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_138.setTransform(-141.5,11.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_139.setTransform(-164.7,13.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_140.setTransform(-229.6,13.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_141.setTransform(-238,13.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_142.setTransform(93.7,-12.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_143.setTransform(85.2,-10.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_144.setTransform(72.6,-12.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAhA5IghhcIggBcIgLAAIgnhxIANAAIAgBeIAhheIAJABIAhBdIAhheIAMAAIgnBxg");
	this.shape_145.setTransform(59,-12.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_146.setTransform(28.3,-10.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_147.setTransform(17,-11.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_148.setTransform(0.9,-10.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_149.setTransform(-20,-10.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_150.setTransform(-57.4,-11.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_151.setTransform(-64.2,-10.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FF6600").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_152.setTransform(-83.7,-10.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_153.setTransform(-95.3,-10.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_154.setTransform(-121.2,-12.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_155.setTransform(-128.8,-11.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_156.setTransform(-157.9,-12.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_157.setTransform(-169.7,-11.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_158.setTransform(-219.7,-10.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_159.setTransform(-237,-12.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_160.setTransform(95.4,-35.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_161.setTransform(88.1,-34.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_162.setTransform(55.2,-34.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_163.setTransform(46.9,-34.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_164.setTransform(28.1,-34.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_165.setTransform(18.9,-34.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_166.setTransform(10.1,-32.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_167.setTransform(-33.7,-34.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_168.setTransform(-72,-35.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_169.setTransform(-90.9,-34.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_170.setTransform(-108.5,-36.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_171.setTransform(-158.3,-34.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_172.setTransform(-167.6,-34.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_173.setTransform(-176.8,-36.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_174.setTransform(-190,-34.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_175.setTransform(-196.8,-34.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_176.setTransform(-227.8,-34.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgFA5IAAguIgthDIAPAAIAjA4IAkg4IAPAAIgtBDIAAAug");
	this.shape_177.setTransform(-237.2,-36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:-205.4}},{t:this.shape_122,p:{x:-195.8}},{t:this.shape_121},{t:this.shape_120,p:{x:-168.2}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110,p:{x:-76.5}},{t:this.shape_109,p:{x:-68.2}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-49.2}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:-0.2,y:-34.6}},{t:this.shape_100},{t:this.shape_99,p:{x:18.1}},{t:this.shape_98,p:{x:27.7}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:105.2,y:-34.6}},{t:this.shape_89},{t:this.shape_88,p:{x:128.8}},{t:this.shape_87,p:{x:138.1,y:-34.5}},{t:this.shape_86},{t:this.shape_85,p:{x:152.7,y:-34.6}},{t:this.shape_84,p:{x:160.4}},{t:this.shape_83},{t:this.shape_82,p:{x:-218.5}},{t:this.shape_81,p:{x:-210.7,y:-10.7}},{t:this.shape_80},{t:this.shape_79,p:{x:-194.1,y:-10.7}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:-157.2}},{t:this.shape_75,p:{x:-145.9,y:-10.7}},{t:this.shape_74},{t:this.shape_73,p:{x:-124.6,y:-10.6}},{t:this.shape_72,p:{x:-115.3,y:-10.7}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:-90.6,y:-12.3}},{t:this.shape_68,p:{x:-80.6}},{t:this.shape_67,p:{x:-71.6}},{t:this.shape_66,p:{x:-62.6,y:-10.7}},{t:this.shape_65,p:{x:-54.3}},{t:this.shape_64,p:{x:-48.4,y:-12.3}},{t:this.shape_63,p:{x:-43.9}},{t:this.shape_62,p:{x:-39.2}},{t:this.shape_61},{t:this.shape_60,p:{x:-24.5}},{t:this.shape_59,p:{x:-15.5}},{t:this.shape_58,p:{x:-9.6}},{t:this.shape_57},{t:this.shape_56,p:{x:9.6,y:-10.7}},{t:this.shape_55,p:{x:19.2}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:58.9}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:98}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:142}},{t:this.shape_40},{t:this.shape_39,p:{x:-212.9}},{t:this.shape_38,p:{x:-203.3}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-176.1,y:13.2}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-144.7}},{t:this.shape_31,p:{x:-133.2,y:13.2}},{t:this.shape_30},{t:this.shape_29,p:{x:-114.6,y:11.6}},{t:this.shape_28,p:{x:-108.1}},{t:this.shape_27},{t:this.shape_26,p:{x:-89.8}},{t:this.shape_25,p:{x:-83.9,y:11.6}},{t:this.shape_24,p:{x:-72.7}},{t:this.shape_23,p:{x:-63.8}},{t:this.shape_22,p:{x:-56.1}},{t:this.shape_21,p:{x:-51.8,y:11.6}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-29.7}},{t:this.shape_17,p:{x:-15.6}},{t:this.shape_16,p:{x:-6.6}},{t:this.shape_15,p:{x:-2.8}},{t:this.shape_14,p:{x:1}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:28.1}},{t:this.shape_10,p:{x:39.7}},{t:this.shape_9,p:{x:51.7}},{t:this.shape_8,p:{x:61}},{t:this.shape_7},{t:this.shape_6,p:{x:75.6}},{t:this.shape_5,p:{x:83.3}},{t:this.shape_4,p:{x:94.5,y:13.2}},{t:this.shape_3,p:{x:104.1}},{t:this.shape_2},{t:this.shape_1,p:{x:123,y:13.2}},{t:this.shape}]}).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_73,p:{x:-218.6,y:-34.5}},{t:this.shape_4,p:{x:-205.2,y:-34.6}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_106,p:{x:-152.1}},{t:this.shape_79,p:{x:-145.6,y:-34.6}},{t:this.shape_99,p:{x:-136.3}},{t:this.shape_122,p:{x:-122.5}},{t:this.shape_170},{t:this.shape_56,p:{x:-99.3,y:-34.6}},{t:this.shape_169},{t:this.shape_123,p:{x:-83.9}},{t:this.shape_168},{t:this.shape_69,p:{x:-67.2,y:-36.2}},{t:this.shape_75,p:{x:-58.3,y:-34.6}},{t:this.shape_120,p:{x:-46.9}},{t:this.shape_167},{t:this.shape_109,p:{x:-25.2}},{t:this.shape_64,p:{x:-19.2,y:-36.2}},{t:this.shape_72,p:{x:-12.7,y:-34.6}},{t:this.shape_98,p:{x:-3.4}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_84,p:{x:36.2}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_31,p:{x:66.8,y:-34.6}},{t:this.shape_88,p:{x:78.8}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_110,p:{x:102.7}},{t:this.shape_81,p:{x:110.4,y:-34.6}},{t:this.shape_159},{t:this.shape_101,p:{x:-228.1,y:-10.7}},{t:this.shape_158},{t:this.shape_1,p:{x:-211.3,y:-10.7}},{t:this.shape_87,p:{x:-201.7,y:-10.6}},{t:this.shape_68,p:{x:-193.1}},{t:this.shape_85,p:{x:-184.7,y:-10.7}},{t:this.shape_62,p:{x:-174.3}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_60,p:{x:-148.7}},{t:this.shape_65,p:{x:-139.7}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_82,p:{x:-112.2}},{t:this.shape_51,p:{x:-101.7}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_46,p:{x:-72.4}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_59,p:{x:-46.4}},{t:this.shape_67,p:{x:-37.4}},{t:this.shape_76,p:{x:-28.4}},{t:this.shape_149},{t:this.shape_58,p:{x:-14.3}},{t:this.shape_63,p:{x:-9.8}},{t:this.shape_29,p:{x:-5.1,y:-12.3}},{t:this.shape_148},{t:this.shape_35,p:{x:9.3,y:-10.7}},{t:this.shape_147},{t:this.shape_25,p:{x:21.8,y:-12.3}},{t:this.shape_146},{t:this.shape_55,p:{x:37.5}},{t:this.shape_41,p:{x:44}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_21,p:{x:79.2,y:-12.3}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_17,p:{x:-218.1}},{t:this.shape_24,p:{x:-205.9}},{t:this.shape_16,p:{x:-199.5}},{t:this.shape_38,p:{x:-193}},{t:this.shape_39,p:{x:-183.7}},{t:this.shape_18,p:{x:-175.9}},{t:this.shape_14,p:{x:-171.1}},{t:this.shape_139},{t:this.shape_28,p:{x:-155.5}},{t:this.shape_138},{t:this.shape_66,p:{x:-132.6,y:13.2}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_23,p:{x:-83.2}},{t:this.shape_15,p:{x:-77}},{t:this.shape_133},{t:this.shape_3,p:{x:-61.3}},{t:this.shape_132},{t:this.shape_26,p:{x:-43}},{t:this.shape_131},{t:this.shape_90,p:{x:-24.6,y:13.2}},{t:this.shape_130},{t:this.shape_32,p:{x:-2.8}},{t:this.shape_129},{t:this.shape_22,p:{x:14.5}},{t:this.shape_128},{t:this.shape_11,p:{x:33.5}},{t:this.shape_10,p:{x:45.1}},{t:this.shape_9,p:{x:57.1}},{t:this.shape_8,p:{x:66.4}},{t:this.shape_127},{t:this.shape_6,p:{x:81}},{t:this.shape_5,p:{x:88.7}},{t:this.shape_126}]},1).wait(1));

	// Layer_4
	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#D40000").ss(4,2,0,3).p("EAi9AAAMgrrAAAI6OAA");
	this.shape_178.setTransform(-41.6,33);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#D40000").ss(1,2,0,3).p("EgjqAG1IBCpQIBXhQIhIhQIALh6MAjuAAAMAiLAAAIhcNq");
	this.shape_179.setTransform(-37,-10.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#F5F5F5").s().p("AykG1IBBpQIBYhQIhJhQIALh5MAjuAAAIq8Npg");
	this.shape_180.setTransform(-146.4,-10.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#D40000").ss(4,2,0,3).p("AeRAAMgiSAAAI6PAA");
	this.shape_181.setTransform(-71.6,33);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#D40000").ss(1,2,0,3).p("A++G1IBCpQIBXhQIhIhQIALh6MAjuAAAIYzAAIhcNq");
	this.shape_182.setTransform(-67,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]}).to({state:[{t:this.shape_180},{t:this.shape_182},{t:this.shape_181}]},1).wait(1));

	// Layer_3
	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FAFAFA").s().p("EgjnAG1IBBpQIBYhQIhJhQIALh5MBF0AAAIhbNpg");
	this.shape_183.setTransform(-37.3,-10.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FAFAFA").s().p("A+7G1IBBpQIBYhQIhJhQIALh5MA8cAAAIhbNpg");
	this.shape_184.setTransform(-67.3,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_183}]}).to({state:[{t:this.shape_184}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.3,-55.6,459.7,90.6);


(lib.mcQ = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgHgEgEQgFgDgIAAQgLgBgLAHIAAgMIALgEIAMgCQANABAIAGQAJAHAAALQAAAHgCAEIgFAJIgIAKQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape.setTransform(123.8,11.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(114.7,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(105.1,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(95.8,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(86.1,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_5.setTransform(73.9,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_6.setTransform(64.5,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_7.setTransform(57,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(49.5,13.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_9.setTransform(40.3,13.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_10.setTransform(28,11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(21.3,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(14.4,13.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_13.setTransform(5.3,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(-2.2,13.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(-9.9,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_16.setTransform(-17.2,12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_17.setTransform(-26.5,13.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_18.setTransform(-34.2,13.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_19.setTransform(-41.5,12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_20.setTransform(-48.8,13.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_21.setTransform(-58.1,14.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(-70.1,13.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(-81.7,13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_24.setTransform(-89.7,11.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(-103.4,13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(-113.1,13.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_27.setTransform(-121.1,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(-130.9,13.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_29.setTransform(-140.1,14.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_30.setTransform(-149.7,13.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_31.setTransform(-156.7,13.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_32.setTransform(-164.5,13.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_33.setTransform(-175.9,13.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_34.setTransform(-190,12.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_35.setTransform(-197.3,13.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_36.setTransform(-205.4,11.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_37.setTransform(-212.1,11.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_38.setTransform(-216.4,13.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_39.setTransform(-224.1,13.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_40.setTransform(-233,11.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_41.setTransform(131.2,-12.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_42.setTransform(125.2,-10.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(116.3,-10.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_44.setTransform(107,-10.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_45.setTransform(100.5,-12.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_46.setTransform(94,-12.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_47.setTransform(81.9,-10.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(70.3,-10.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_49.setTransform(62.3,-12.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_50.setTransform(48.7,-12.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(38.9,-10.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_52.setTransform(30.9,-12.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_53.setTransform(21.1,-10.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_54.setTransform(11.8,-10.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_55.setTransform(2.1,-10.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AApA5IAAhTIglBTIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_56.setTransform(-9.2,-12.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_57.setTransform(-22.1,-7.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_58.setTransform(-25.8,-12.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_59.setTransform(-32.8,-8.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_60.setTransform(-42.5,-8.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_61.setTransform(-51.8,-10.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_62.setTransform(-58.3,-12.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6600").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_63.setTransform(-63.1,-11.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_64.setTransform(-75.1,-8.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_65.setTransform(-84.4,-10.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_66.setTransform(-90.9,-12.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF6600").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_67.setTransform(-94.7,-12.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_68.setTransform(-101.6,-10.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_69.setTransform(-110.8,-9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_70.setTransform(-125.1,-8.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_71.setTransform(-134.4,-10.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_72.setTransform(-144,-10.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_73.setTransform(-152.8,-8.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_74.setTransform(-163.2,-12.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_75.setTransform(-169.1,-10.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_76.setTransform(-178.1,-10.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_77.setTransform(-186.1,-12.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_78.setTransform(-192.8,-12.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_79.setTransform(-197.5,-12.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_80.setTransform(-202,-12.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_81.setTransform(-207.9,-10.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_82.setTransform(-216.2,-10.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_83.setTransform(-225.2,-9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_84.setTransform(-234.2,-10.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_85.setTransform(114.4,-36.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_86.setTransform(107.4,-34.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkAxQAMgEAGgDQAFgFAFgJIACgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_87.setTransform(98.6,-32.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_88.setTransform(89.6,-34.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_89.setTransform(80.4,-34.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_90.setTransform(71.1,-32.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_91.setTransform(59.1,-34.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_92.setTransform(47.8,-34.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_93.setTransform(36.3,-34.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_94.setTransform(20.1,-32.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_95.setTransform(10.8,-34.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_96.setTransform(1.1,-34.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAGgFAEgJIACgHIgihOIAOAAIAaBBIAbhBIANAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_97.setTransform(-7.7,-32.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_98.setTransform(-18.5,-34.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_99.setTransform(-26.3,-34.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_100.setTransform(-33.5,-35.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_101.setTransform(-40.9,-34.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(-50.1,-32.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_103.setTransform(-62.2,-34.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_104.setTransform(-73.7,-34.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_105.setTransform(-81.7,-36.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_106.setTransform(-92.6,-36.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_107.setTransform(-96.4,-36.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_108.setTransform(-102.7,-34.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_109.setTransform(-111.6,-36.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_110.setTransform(-123.7,-34.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_111.setTransform(-135,-34.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_112.setTransform(-146.5,-34.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_113.setTransform(-162.4,-34.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_114.setTransform(-168.9,-36.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_115.setTransform(-175.9,-32.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_116.setTransform(-185.2,-34.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_117.setTransform(-191.7,-36.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_118.setTransform(-202.8,-34.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_119.setTransform(-212.4,-36.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_120.setTransform(-221.7,-34.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_121.setTransform(-232.2,-36.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_122.setTransform(-73.1,15.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_123.setTransform(-123.5,12.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_124.setTransform(-172.1,13.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_125.setTransform(-183.3,12.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_126.setTransform(-207.2,11.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_127.setTransform(-229.8,11.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_128.setTransform(-237.4,12.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_129.setTransform(76.3,-10.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_130.setTransform(46.5,-10.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_131.setTransform(35,-10.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_132.setTransform(-9.8,-10.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_133.setTransform(-21.1,-11.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_134.setTransform(-51.1,-12.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_135.setTransform(-74.8,-10.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_136.setTransform(-83.1,-10.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_137.setTransform(-96.1,-12.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_138.setTransform(-104.6,-10.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_139.setTransform(-117.1,-12.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAgA5IgghcIggBcIgKAAIgphxIAOAAIAgBeIAhheIAJABIAhBdIAhheIAMAAIgnBxg");
	this.shape_140.setTransform(-130.7,-12.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_141.setTransform(-161.5,-10.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_142.setTransform(-172.7,-11.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_143.setTransform(-188.8,-10.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_144.setTransform(-199.5,-12.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_145.setTransform(-209.7,-10.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FF6600").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_146.setTransform(89.6,-35.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_147.setTransform(82.9,-34.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_148.setTransform(74.6,-34.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FF6600").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAJAAQAcAAAAAfIAAAzg");
	this.shape_149.setTransform(65.6,-36.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FF6600").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_150.setTransform(55.8,-32.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FF6600").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_151.setTransform(42.8,-36.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_152.setTransform(20.6,-36.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_153.setTransform(13,-35.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_154.setTransform(-6.2,-35.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_155.setTransform(-19.6,-34.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_156.setTransform(-48.2,-35.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_157.setTransform(-88.4,-34.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_158.setTransform(-96.7,-34.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_159.setTransform(-123.1,-32.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_160.setTransform(-132,-34.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_161.setTransform(-141.1,-36.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_162.setTransform(-155,-34.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_163.setTransform(-162.4,-35.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_164.setTransform(-172.2,-35.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_165.setTransform(-200.8,-34.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_166.setTransform(-216.6,-34.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_167.setTransform(-225.8,-34.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgFA5IAAguIgthDIAPAAIAjA4IAlg4IAOAAIgtBDIAAAug");
	this.shape_168.setTransform(-235.2,-36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108,p:{x:-102.7}},{t:this.shape_107,p:{x:-96.4,y:-36.4}},{t:this.shape_106},{t:this.shape_105,p:{x:-81.7,y:-36.4}},{t:this.shape_104,p:{x:-73.7,y:-34.6}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:-40.9}},{t:this.shape_100},{t:this.shape_99,p:{x:-26.3}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:47.8,y:-34.6}},{t:this.shape_91,p:{x:59.1}},{t:this.shape_90,p:{x:71.1}},{t:this.shape_89,p:{x:80.4,y:-34.5}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:-225.2}},{t:this.shape_82,p:{x:-216.2}},{t:this.shape_81,p:{x:-207.9}},{t:this.shape_80,p:{x:-202,y:-12.3}},{t:this.shape_79,p:{x:-197.5,y:-12.5}},{t:this.shape_78,p:{x:-192.8}},{t:this.shape_77},{t:this.shape_76,p:{x:-178.1,y:-10.7}},{t:this.shape_75,p:{x:-169.1}},{t:this.shape_74,p:{x:-163.2}},{t:this.shape_73},{t:this.shape_72,p:{x:-144}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-25.8,y:-12.3}},{t:this.shape_57,p:{x:-22.1}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:48.7,y:-12.5}},{t:this.shape_49},{t:this.shape_48,p:{x:70.3,y:-10.7}},{t:this.shape_47,p:{x:81.9}},{t:this.shape_46},{t:this.shape_45,p:{x:100.5}},{t:this.shape_44,p:{x:107,y:-10.7}},{t:this.shape_43},{t:this.shape_42,p:{x:125.2,y:-10.7}},{t:this.shape_41,p:{x:131.2}},{t:this.shape_40},{t:this.shape_39,p:{x:-224.1,y:13.2}},{t:this.shape_38},{t:this.shape_37,p:{x:-212.1,y:11.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-175.9,y:13.2}},{t:this.shape_32,p:{x:-164.5}},{t:this.shape_31,p:{x:-156.7,y:13.2}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-103.4,y:13.2}},{t:this.shape_24},{t:this.shape_23,p:{x:-81.7}},{t:this.shape_22,p:{x:-70.1}},{t:this.shape_21,p:{x:-58.1}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-34.2}},{t:this.shape_17,p:{x:-26.5}},{t:this.shape_16},{t:this.shape_15,p:{x:-9.9}},{t:this.shape_14,p:{x:-2.2}},{t:this.shape_13,p:{x:5.3,y:11.5}},{t:this.shape_12,p:{x:14.4,y:13.2}},{t:this.shape_11,p:{x:21.3,y:11.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:49.5,y:13.2}},{t:this.shape_7},{t:this.shape_6,p:{x:64.5}},{t:this.shape_5},{t:this.shape_4,p:{x:86.1,y:13.2}},{t:this.shape_3,p:{x:95.8,y:13.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:123.8}}]}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_76,p:{x:-189.3,y:-34.6}},{t:this.shape_44,p:{x:-179.7,y:-34.6}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_4,p:{x:-110.1,y:-34.6}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_91,p:{x:-76.8}},{t:this.shape_90,p:{x:-64.8}},{t:this.shape_101,p:{x:-55.5}},{t:this.shape_156},{t:this.shape_108,p:{x:-40.9}},{t:this.shape_31,p:{x:-33.2,y:-34.6}},{t:this.shape_155},{t:this.shape_80,p:{x:-10.8,y:-36.2}},{t:this.shape_154},{t:this.shape_50,p:{x:1.4,y:-36.4}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_99,p:{x:29.6}},{t:this.shape_151},{t:this.shape_58,p:{x:49.4,y:-36.2}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_81,p:{x:-236.2}},{t:this.shape_83,p:{x:-227.2}},{t:this.shape_92,p:{x:-218.2,y:-10.7}},{t:this.shape_145},{t:this.shape_78,p:{x:-204}},{t:this.shape_144},{t:this.shape_74,p:{x:-194.8}},{t:this.shape_143},{t:this.shape_72,p:{x:-180.5}},{t:this.shape_142},{t:this.shape_45,p:{x:-167.9}},{t:this.shape_141},{t:this.shape_25,p:{x:-152.3,y:-10.7}},{t:this.shape_57,p:{x:-145.7}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_41,p:{x:-110.6}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_47,p:{x:-63.2}},{t:this.shape_134},{t:this.shape_37,p:{x:-44.6,y:-12.3}},{t:this.shape_8,p:{x:-38.1,y:-10.7}},{t:this.shape_12,p:{x:-28.8,y:-10.7}},{t:this.shape_133},{t:this.shape_11,p:{x:-16.3,y:-12.3}},{t:this.shape_132},{t:this.shape_3,p:{x:-0.6,y:-10.7}},{t:this.shape_13,p:{x:13.4,y:-12.4}},{t:this.shape_82,p:{x:22.3}},{t:this.shape_107,p:{x:28.5,y:-12.5}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_33,p:{x:64.6,y:-10.7}},{t:this.shape_129},{t:this.shape_105,p:{x:86.1,y:-12.5}},{t:this.shape_39,p:{x:93.9,y:-10.7}},{t:this.shape_75,p:{x:102.2}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_32,p:{x:-220.8}},{t:this.shape_126},{t:this.shape_18,p:{x:-198.3}},{t:this.shape_42,p:{x:-190,y:13.2}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_104,p:{x:-163.7,y:13.2}},{t:this.shape_22,p:{x:-152.2}},{t:this.shape_21,p:{x:-140.1}},{t:this.shape_89,p:{x:-130.9,y:13.3}},{t:this.shape_123},{t:this.shape_15,p:{x:-116.3}},{t:this.shape_17,p:{x:-108.5}},{t:this.shape_79,p:{x:-99.3,y:11.4}},{t:this.shape_48,p:{x:-92,y:13.2}},{t:this.shape_14,p:{x:-84}},{t:this.shape_122},{t:this.shape_23,p:{x:-64.3}},{t:this.shape_6,p:{x:-55.1}},{t:this.shape,p:{x:-46.4}}]},1).wait(1));

	// Layer_4
	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#D40000").ss(4,2,0,3).p("EAgnAAAMgm+AAAI6PAA");
	this.shape_169.setTransform(-56.6,33);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#D40000").ss(1,2,0,3).p("EghUAG1IBCpQIBXhQIhIhQIALh6MAjuAAAIdfAAIhcNq");
	this.shape_170.setTransform(-52,-10.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F5F5F5").s().p("AykG1IBBpQIBYhQIhJhQIALh5MAjuAAAIq8Npg");
	this.shape_171.setTransform(-146.4,-10.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#D40000").ss(4,2,0,3).p("AeRAAMgiSAAAI6PAA");
	this.shape_172.setTransform(-71.6,33);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#D40000").ss(1,2,0,3).p("A++G1IBCpQIBXhQIhIhQIALh6MAjuAAAIYzAAIhcNq");
	this.shape_173.setTransform(-67,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169}]}).to({state:[{t:this.shape_171},{t:this.shape_173},{t:this.shape_172}]},1).wait(1));

	// Layer_3
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FAFAFA").s().p("AZ/G1IgBAAIn0AAIi9AAMgweAAAIBBpQIBYhQIhJhQIALh5MAvDAAAIC9AAIH0AAIABAAIHTAAIhbNpg");
	this.shape_174.setTransform(-52.3,-10.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FAFAFA").s().p("A+7G1IBBpQIBYhQIhJhQIALh5MA8cAAAIhbNpg");
	this.shape_175.setTransform(-67.3,-10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174}]}).to({state:[{t:this.shape_175}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-267.3,-55.6,429.7,90.6);


(lib.lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqWJOIAAgeINpAAIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8IGwAAIAAAegADWG/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWFHQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWDPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWBXQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWggQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWiYQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWkQQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWmIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWoAQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(408.5,62.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#50C900").s().p("AsBJLIAAgdIPlAAIAAg3QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA3IIKAAIAAAdgADnHCQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEAAQgEAAgDgCgADnFJQgDgCAAgEIAAg8QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA8QAAAEgDACQgDADgEABQgEgBgDgDgADnDSQgDgDAAgFIAAg7QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA7QAAAFgDADQgDACgEAAQgEAAgDgCgADnBaQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEAAQgEAAgDgCgADngeQgDgCAAgEIAAg8QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA8QAAAEgDACQgDADgEABQgEgBgDgDgADniVQgDgDAAgFIAAg7QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA7QAAAFgDADQgDACgEAAQgEAAgDgCgADnkNQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEAAQgEAAgDgCgADnmGQgDgCAAgEIAAg8QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA8QAAAEgDACQgDADgEABQgEgBgDgDgADnn+QgDgCAAgFIAAg7QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA7QAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(204.3,62.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FE6FF").s().p("ArCN9IAAziINCAAIAAgtQABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAAtIIuAAIAATigAqjNfIVIAAIAAymI1IAAgACDnHQgCgDgBgEIAAg8QABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAA8QAAAEgCADQgDADgFAAQgEAAgDgDgACDo/QgCgDgBgEIAAg8QABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAA8QAAAEgCADQgDADgFAAQgEAAgDgDgACDq3QgCgDgBgEIAAg8QABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAA8QAAAEgCADQgDADgFAAQgEAAgDgDgACDsvQgCgDgBgEIAAg8QABgEACgDQADgDAEAAQAFAAADADQACADAAAEIAAA8QAAAEgCADQgDADgFAAQgEAAgDgDg");
	this.shape_2.setTransform(59.2,90.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ApXL7IAAgeIIEAAIAAgwQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAwIKXAAIAAAegAhQJ4QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQIAQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQGIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQEQQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQCYQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQAgQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAhQhXQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQjPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQlHQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQm/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQo3QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQqvQgDgDAAgEIAAg6QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA6QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape_3.setTransform(395.3,44.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9FE6FF").s().p("AoKL2IAAgeIH+AAIAAgwQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAAwIIEAAIAAAegAgJJzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJH7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJGDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJELQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJCTQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJAbQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA7QAAAEgDADQgDADgDAAQgEAAgDgDgAgJhcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJjUQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJlMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJnEQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJo8QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJq0QgDgDAAgEIAAgwQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAAwQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_4.setTransform(176.5,45.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,1.7,486.3,178.5);


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


(lib.dArea3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag8BGIAPiLIBUAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape.setTransform(15.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag8BGIAPiLIBUAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_1.setTransform(0.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_2.setTransform(-13.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AqACpQgiAAgUgNIgBgBQgNgVAAghIAAizQAAhaBaAAITrAAQAhAAAVANIABABQANAUAAAiIAACzQAABahaAAg");
	this.shape_3.setTransform(1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ArIBhIAAizQAAhaBaAAITrAAQA3AAAVAjQgVgNggAAIzsAAQhaAAAABaIAAC0QAAAgANAVQgjgVAAg3g");
	this.shape_4.setTransform(-0.7,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Aq7DhQh9AAAAh9IAAjHQAAh9B9AAIV3AAQB9AAAAB9IAADHQAAB9h9AAg");
	this.shape_5.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(3,2,0,3).p("AK8jgQB9AAAAB9IAADHQAAB9h9AAI13AAQh9AAAAh9IAAjHQAAh9B9AAg");
	this.shape_6.setTransform(0,0,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Aq7DhQh9AAAAh9IAAjHQAAh9B9AAIV3AAQB9AAAAB9IAADHQAAB9h9AAg");
	this.shape_7.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-20.2,148.5,40.5);


(lib.dArea2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AAmBGIAKhcIgBAAIgpBcIgaAAIgWhdIgKBdIgbAAIAPiLIAlAAIAYBmIABAAIAthmIAlAAIgPCLg");
	this.shape.setTransform(14.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AAlBGIgIgeIg0AAIgNAeIgbAAIA/iLIAdAAIAjCLgAgLAQIAiAAIgMgyIgBAAg");
	this.shape_1.setTransform(-2.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AATBGIgXg1IgRAAIgGA1IgcAAIAPiLIBKAAIAWAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_2.setTransform(-15,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AqACpQgiAAgUgNIgBgBQgNgVAAghIAAizQAAhaBaAAITrAAQAhAAAVANIABABQANAUAAAiIAACzQAABahaAAg");
	this.shape_3.setTransform(1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ArIBhIAAizQAAhaBaAAITrAAQA3AAAVAjQgVgNggAAIzsAAQhaAAAABaIAAC0QAAAgANAVQgjgVAAg3g");
	this.shape_4.setTransform(-0.7,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Aq7DhQh9AAAAh9IAAjHQAAh9B9AAIV3AAQB9AAAAB9IAADHQAAB9h9AAg");
	this.shape_5.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(3,2,0,3).p("AK8jgQB9AAAAB9IAADHQAAB9h9AAI13AAQh9AAAAh9IAAjHQAAh9B9AAg");
	this.shape_6.setTransform(0,0,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Aq7DhQh9AAAAh9IAAjHQAAh9B9AAIV3AAQB9AAAAB9IAADHQAAB9h9AAg");
	this.shape_7.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-20.2,148.5,40.5);


(lib.dArea1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgmBGIgWgNIANh+IAcAAIgMBxIA0AAIAMhxIAcAAIgNB+IgZANg");
	this.shape.setTransform(13.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("Ag2BGIAOiLIBJAAIAWAOIgHA9IgYANIgtAAIgFAzgAgSgEIAoAAIAEgpIgoAAg");
	this.shape_1.setTransform(0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIABgSIAcAAIgDAcIgYAOg");
	this.shape_2.setTransform(-12.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AqACpQgiAAgUgNIgBgBQgNgVAAghIAAizQAAhaBaAAITrAAQAhAAAVANIABABQANAUAAAiIAACzQAABahaAAg");
	this.shape_3.setTransform(1.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s().p("ArIBhIAAizQAAhaBaAAITrAAQA3AAAVAjQgVgNggAAIzsAAQhaAAAABaIAAC0QAAAgANAVQgjgVAAg3g");
	this.shape_4.setTransform(-0.7,-0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("Aq7DhQh9AAAAh9IAAjHQAAh9B9AAIV3AAQB9AAAAB9IAADHQAAB9h9AAg");
	this.shape_5.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FF9900").ss(3,2,0,3).p("AK8jgQB9AAAAB9IAADHQAAB9h9AAI13AAQh9AAAAh9IAAjHQAAh9B9AAg");
	this.shape_6.setTransform(0,0,0.9,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("Aq7DhQh9AAAAh9IAAjHQAAh9B9AAIV3AAQB9AAAAB9IAADHQAAB9h9AAg");
	this.shape_7.setTransform(0,0,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.2,-20.2,148.5,40.5);


(lib.comp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,372,262);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.cloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.instance = new lib.Bitmap14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,78);


(lib.cBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-8.6,-29.6,-3.6,22.9).s().p("ApoDAIApl7IAAgEISoAAIAAADIgbF8g");
	this.shape.setTransform(-0.7,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671D1F").s().p("AJHDOIAbl8IAAgDIyoAAIAAAEIgpF7IgJAAIgIAAIArmbITWAAIgDAfIgoF8g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.1,-20.5,128.3,41.2);


(lib.btnWideBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#671D1F").s().p("ALBCkIAPjeIAGhTIhOAAI1IAAIgEAkIgOAAIAGg6IVUAAIBnAAIgLBpIgXDegAruCkIAHhbIAOAAIgOAAIADgZIBAhAIARAQIhGBGIAAADIgHBbgArWhMIAEgdIAOAAIgFAqgArShpg");
	this.shape.setTransform(0.2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-6.9,-23.7,-2.9,18.2).s().p("ArbCZIAHhcIABgCIBFhFIgRgRIAGgFIgrgrIAFgqIBJAAIAACyIheAAIBeAAIAAiyIhJAAIAEgjIVJAAIBOAAIgGBTIgQDeg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AsWDWIAEgjIAAAAIAMh7IAhAAIgIBcIAPAAIWhAAIALAAIAYjfIALhpIhnAAI1UAAIgHA6IghAAIAhAAIgDAdIAMANIArAqIgGAGIhAA/IgCAZIghAAIAEgpIA2g1IgrgrIAFgpIALhbIVxAAICNAAIgPCKIgfEhgArRh6g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AsWDWIAEgjIAAAAIAQikIARgQIBUAAIAAizIhPAAIAFghIVOAAICwAAIgJBRIglFagArxgBIAlglIgrgrIALhjIBPAAIAACzgArsi0g");
	this.shape_3.setTransform(3.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.btnup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#911EA6").s().p("AqaA8QgjAAgCgpIAAgkQABgqAkAAIU1AAQAkAAABAqIAAAkQgCApgjAAg");
	this.shape.setTransform(0,-10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#34094F").s().p("AqaAsQg1AAAAhAIAAgXQACA8AzAAIU1AAQAzAAACg8IAAAXQAABAg1AAg");
	this.shape_1.setTransform(0,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#871C9A").s().p("AqaCnQgzgBgCg8IAAjSQACg+AzAAIU1AAQAzAAACA+IAADSQgCA8gzABg");
	this.shape_2.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btndown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#911EA6").s().p("AqaA8QgjAAgCgpIAAgkQABgqAkAAIU1AAQAkAAABAqIAAAkQgCApgjAAg");
	this.shape.setTransform(0,-8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#871C9A").s().p("AqaCnQgzAAgCg9IAAgPIAAjEQACg8AzAAIU1AAQAzAAACA8IAADEIAAAPQgCA9gzAAg");
	this.shape_1.setTransform(0,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#093A4F").s().p("AqaAkQg1AAAAg/IAAgIQACA7AzAAIU1AAQAzAAACg7IAAAIQAAA/g1AAg");
	this.shape_2.setTransform(0,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-16.5,144,34.5);


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


(lib.avatarBotsX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,-48.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.4,-49,181.6,133.7);


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


(lib.dialogue1a = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm1a();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn1a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-36.8,406.5,64.1);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,364.5,66.9);


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
	this.instance_3 = new lib.Symbol1();
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


(lib.btnItem9copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(50.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(37.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(23.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BGIAHhCIAYgMIApAAIAEglIglAAIgCASIgbAAIACgcIAZgOIAvAAIAWAOIgGA4IgZAOIgpAAIgEAfIBBAAIgDAYg");
	this.shape_3.setTransform(10.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_4.setTransform(-1.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_5.setTransform(-19.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_6.setTransform(-34.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_7.setTransform(-48.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAOiLIBMAAIAVAOIgFAsIgSAKIAAAAIAQAJIgEAwIgZAOgAgYAuIAqAAIADglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(44.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(31.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(18.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBHIgTgOIAGgxIASgJIAAAAIgQgKIAFgtIAYgOIAyAAIAWAOIgFAtIgTAKIAAAAIARAJIgGAxIgYAOgAgYAvIAoAAIADgmIgoAAgAgSgOIAoAAIADggIgoAAg");
	this.shape_3.setTransform(4.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgdAuIA0AAIAJhbIg0AAg");
	this.shape_4.setTransform(-14.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_5.setTransform(-28.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_6.setTransform(-42.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgEAwIgZAOgAgYAuIAqAAIADglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(44.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(31.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(18,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBHIgWgOIANhxIAYgOIAwAAIAWAOIgDAcIgcAAIABgSIgmAAIgEAoIAPgIIAdAAIAWAOIgHA5IgYAOgAgXAvIAmAAIAEgmIgmAAg");
	this.shape_3.setTransform(4.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_4.setTransform(-14,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_5.setTransform(-28.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_6.setTransform(-42.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem8copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIARAJIgGAwIgYAOgAgZAuIAqAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(50.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(37,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(23.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_3.setTransform(10.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_4.setTransform(-3.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAPiLIBUAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_5.setTransform(-22.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_6.setTransform(-35.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_7.setTransform(-49,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem8copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAOiLIBMAAIAVAOIgEAsIgTAKIAAAAIARAJIgFAwIgZAOgAgZAuIAqAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(49.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(36.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBHIgWgOIANhxIAYgOIAwAAIAWAOIgDAcIgcAAIABgSIgmAAIgEAoIAPgIIAdAAIAWAOIgHA5IgYAOgAgXAvIAmAAIAEgmIgmAAg");
	this.shape_2.setTransform(23.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_3.setTransform(10.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag1BGIAHhCIAZgMIAqAAIADglIgkAAIgCASIgcAAIADgcIAZgOIAuAAIAVAOIgFA4IgZAOIgqAAIgDAfIBBAAIgCAYg");
	this.shape_4.setTransform(-2.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAPiLIBUAAIAWAOIgLBvIgZAOgAgdAuIA0AAIAJhbIg0AAg");
	this.shape_5.setTransform(-21.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_6.setTransform(-35.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_7.setTransform(-48.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAOiLIBMAAIAVAOIgEAsIgTAKIAAAAIARAJIgGAwIgYAOgAgZAuIAqAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(49.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(35.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(22.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BGIAHhCIAZgMIAqAAIADglIgkAAIgCASIgdAAIAEgcIAZgOIAuAAIAVAOIgFA4IgZAOIgqAAIgDAfIBBAAIgCAYg");
	this.shape_3.setTransform(9.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_4.setTransform(-3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAPiLIBUAAIAWAOIgLBvIgZAOgAgdAuIA0AAIAJhbIg0AAg");
	this.shape_5.setTransform(-21.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_6.setTransform(-34.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_7.setTransform(-47.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem7copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAOiLIBMAAIAVAOIgFAsIgSAKIAAAAIAQAJIgEAwIgZAOgAgYAuIAqAAIADglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(51.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(38.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(24.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_3.setTransform(11.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_4.setTransform(-2,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgdAuIA0AAIAJhbIg0AAg");
	this.shape_5.setTransform(-20.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_6.setTransform(-35.2,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_7.setTransform(-49.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(50.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(37.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBHIgWgOIANhxIAYgOIAwAAIAWAOIgDAcIgcAAIABgSIgmAAIgEAoIAPgIIAdAAIAWAOIgHA5IgYAOgAgXAvIAmAAIAEgmIgmAAg");
	this.shape_2.setTransform(24.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_3.setTransform(11.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BGIAHhCIAYgMIApAAIAFglIgmAAIgCASIgcAAIADgcIAZgOIAvAAIAWAOIgHA4IgYAOIgpAAIgEAfIBBAAIgDAYg");
	this.shape_4.setTransform(-1.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_5.setTransform(-20.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_6.setTransform(-34.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_7.setTransform(-48.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape.setTransform(50.4,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_1.setTransform(37.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_2.setTransform(23.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag0BGIAHhCIAYgMIApAAIAEglIglAAIgCASIgbAAIACgcIAZgOIAvAAIAWAOIgGA4IgZAOIgpAAIgEAfIBBAAIgDAYg");
	this.shape_3.setTransform(10.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_4.setTransform(-1.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_5.setTransform(-19.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_6.setTransform(-34.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_7.setTransform(-48.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBGIACgfIhBAAIACgUIBOhYIAYAAIgJBWIASAAIgDAWIgRAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape.setTransform(49.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_1.setTransform(36.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_2.setTransform(23,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_3.setTransform(8.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_4.setTransform(-10.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_5.setTransform(-23.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBHIgWgOIANhxIAYgOIAwAAIAWAOIgDAcIgcAAIABgSIgmAAIgEAoIAPgIIAdAAIAWAOIgHA5IgYAOgAgXAvIAmAAIAEgmIgmAAg");
	this.shape_6.setTransform(-36.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_7.setTransform(-49,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBGIACgfIhBAAIACgUIBOhYIAYAAIgJBWIASAAIgDAWIgRAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape.setTransform(49.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_1.setTransform(36.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_2.setTransform(23,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_3.setTransform(8.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_4.setTransform(-10.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_5.setTransform(-23.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBHIgWgOIANhxIAYgOIAwAAIAWAOIgDAcIgcAAIABgSIgmAAIgEAoIAPgIIAdAAIAWAOIgHA5IgYAOgAgXAvIAmAAIAEgmIgmAAg");
	this.shape_6.setTransform(-36.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_7.setTransform(-49,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAHBGIACgfIhBAAIACgUIBOhYIAYAAIgJBWIASAAIgDAWIgRAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape.setTransform(49.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_1.setTransform(36.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_2.setTransform(23,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBVAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_3.setTransform(8.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_4.setTransform(-10.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_5.setTransform(-23.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBHIgWgOIANhxIAYgOIAwAAIAWAOIgDAcIgcAAIABgSIgmAAIgEAoIAPgIIAdAAIAWAOIgHA5IgYAOgAgXAvIAmAAIAEgmIgmAAg");
	this.shape_6.setTransform(-36.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_7.setTransform(-49,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem5copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape.setTransform(44.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_1.setTransform(30.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_2.setTransform(17,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_3.setTransform(2.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIARAJIgGAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_4.setTransform(-16.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_5.setTransform(-29.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBHIgTgOIAGgxIASgJIAAAAIgQgKIAFgtIAYgOIAyAAIAWAOIgFAtIgTAKIAAAAIARAJIgGAxIgYAOgAgYAvIAoAAIADgmIgoAAgAgSgOIAoAAIADggIgoAAg");
	this.shape_6.setTransform(-42.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape.setTransform(44.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_1.setTransform(30.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_2.setTransform(17,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_3.setTransform(2.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIARAJIgGAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_4.setTransform(-16.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_5.setTransform(-29.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBHIgTgOIAGgxIASgJIAAAAIgQgKIAFgtIAYgOIAyAAIAWAOIgFAtIgTAKIAAAAIARAJIgGAxIgYAOgAgYAvIAoAAIADgmIgoAAgAgSgOIAoAAIADggIgoAAg");
	this.shape_6.setTransform(-42.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape.setTransform(44.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_1.setTransform(30.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_2.setTransform(17,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_3.setTransform(2.7,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIARAJIgGAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_4.setTransform(-16.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_5.setTransform(-29.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjBHIgTgOIAGgxIASgJIAAAAIgQgKIAFgtIAYgOIAyAAIAWAOIgFAtIgTAKIAAAAIARAJIgGAxIgYAOgAgYAvIAoAAIADgmIgoAAgAgSgOIAoAAIADggIgoAAg");
	this.shape_6.setTransform(-42.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBGIgXg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape.setTransform(37.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_1.setTransform(23.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_2.setTransform(9.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_3.setTransform(-9.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_4.setTransform(-23.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHBGIACgfIhBAAIACgUIBOhYIAYAAIgJBWIASAAIgDAWIgRAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape_5.setTransform(-36.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBGIgXg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape.setTransform(37.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_1.setTransform(23.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_2.setTransform(9.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIAQAJIgFAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_3.setTransform(-9.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_4.setTransform(-23.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHBGIACgfIhBAAIACgUIBOhYIAYAAIgJBWIASAAIgDAWIgRAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape_5.setTransform(-36.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVAOIgGA7IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape.setTransform(36.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgLBvIgZAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_1.setTransform(22.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BGIAOiLIBWAAIAVAOIgMBvIgYAOgAgeAuIA1AAIAJhbIg0AAg");
	this.shape_2.setTransform(8.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWAOIgFAsIgSAKIAAAAIARAJIgGAwIgYAOgAgYAuIApAAIAEglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_3.setTransform(-10.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_4.setTransform(-23.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AguBGIACgYIAgAAIAJhXIgiATIADgbIAlgUIAYAAIgMBzIAgAAIgCAYg");
	this.shape_5.setTransform(-36.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(43.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BGIAHhCIAZgMIAqAAIADglIgkAAIgCASIgcAAIADgcIAZgOIAuAAIAVAOIgFA4IgZAOIgqAAIgDAfIBBAAIgCAYg");
	this.shape_3.setTransform(4.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.2,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_5.setTransform(-16.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_6.setTransform(-34.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.8,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(43.5,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_3.setTransform(4.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.6,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_5.setTransform(-16.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_6.setTransform(-34.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-44.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(43.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjBHIgTgOIAGgxIASgJIAAAAIgQgKIAFgtIAYgOIAyAAIAWAOIgFAtIgTAKIAAAAIARAJIgGAxIgYAOgAgYAvIAoAAIADgmIgoAAgAgSgOIAoAAIADggIgoAAg");
	this.shape_3.setTransform(4.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.5,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag1BGIAHhCIAZgMIAqAAIADglIgkAAIgCASIgcAAIADgcIAZgOIAuAAIAVAOIgFA4IgZAOIgqAAIgDAfIBBAAIgCAYg");
	this.shape_5.setTransform(-16.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_6.setTransform(-34.4,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.8,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(43.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_3.setTransform(4.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.7,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAHBGIACgfIhBAAIACgUIBOhYIAYAAIgJBWIASAAIgDAWIgRAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape_5.setTransform(-16.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_6.setTransform(-34.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.8,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(43.2,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBHIgWgOIANhxIAYgOIA2AAIAWAOIgNBxIgYAOgAgaAvIAsAAIAJhdIgsAAg");
	this.shape_3.setTransform(4.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.8,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGBGIADgfIhBAAIACgUIBOhYIAZAAIgJBWIARAAIgDAWIgRAAIgDAfgAgWAQIAAABIAiAAIAEgtIAAAAg");
	this.shape_5.setTransform(-16.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_6.setTransform(-34.6,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.9,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(43.1,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag1BGIAHhCIAZgMIAqAAIADglIgkAAIgCASIgcAAIADgcIAZgOIAuAAIAVAOIgFA4IgZAOIgqAAIgDAfIBBAAIgCAYg");
	this.shape_3.setTransform(4.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.2,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_5.setTransform(-16.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBGIgWgNIADgcIAcAAIgCASIAoAAIAFgrIhAAAIAHhJIBaAAIgCAXIg+AAIgDAbIApAAIAWAOIgHA+IgZANg");
	this.shape_6.setTransform(-34.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.8,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(42.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(30.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(16.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgtBGIBBhyIAAgBIgsAAIgCASIgcAAIAFgqIBoAAIgCASIhEB5g");
	this.shape_3.setTransform(4.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.6,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGBGIAEgfIhCAAIACgUIBOhYIAZAAIgJBWIARAAIgCAWIgSAAIgDAfgAgWAQIAAABIAiAAIAEgtIAAAAg");
	this.shape_5.setTransform(-16.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBGIBBhyIAAgBIgsAAIgCASIgcAAIAFgqIBoAAIgCASIhEB5g");
	this.shape_6.setTransform(-33.5,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.1,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(42.8,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_3.setTransform(3.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-7,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAGBGIAEgfIhCAAIACgUIBOhYIAYAAIgJBWIASAAIgCAWIgSAAIgDAfgAgXAQIAAABIAjAAIAEgtIAAAAg");
	this.shape_5.setTransform(-17,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBGIBBhyIAAgBIgsAAIgCASIgcAAIAFgqIBoAAIgCASIhEB5g");
	this.shape_6.setTransform(-33.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


(lib.btnItem1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAyIACgTIAwg4IAAgBIgoAAIADgXIBMAAIgCATIgwA4IAAAAIAqAAIgDAYg");
	this.shape.setTransform(42.8,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_1.setTransform(31.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhxIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIACgaIgWAAIACgXIAzAAIgHA7IgYAOg");
	this.shape_2.setTransform(17.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGBGIAEgfIhCAAIACgUIBOhYIAYAAIgJBWIASAAIgCAWIgSAAIgDAfgAgXAQIAAABIAjAAIAFgtIgBAAg");
	this.shape_3.setTransform(3.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape_4.setTransform(-6.5,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggBHIgWgOIADgcIAcAAIgCASIApAAIAEgmIgiAAIADgXIAiAAIADggIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAxIgYAOg");
	this.shape_5.setTransform(-16.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgtBGIBBhyIAAgBIgsAAIgCASIgcAAIAFgqIBoAAIgCASIhEB5g");
	this.shape_6.setTransform(-33.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_7.setTransform(-43.5,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("ArPB0IAAjqQABg9A0AAIU1AAQAzAAACA9IAADqQAABAg1AAI01AAQg1AAAAhAg");
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-18,144,36);


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


(lib.actMc2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [3, 9, 1];
		var userAns = [0,0,0];
		var maxItem = 9;
		var maxdArea = 3;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		posList = shuffle(posList);
		for (i=1; i<=maxItem; i++){
			this["item"+i].x = initX[posList[i-1] - 1];
			this["item"+i].y = initY[posList[i-1] - 1];
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
		}
		for (i=1; i<=maxItem; i++){	
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = point.x;
				evt.currentTarget.y = point.y;
				
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
				}
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y)) {
						_this["dArea"+i].gotoAndStop(1);
					} else {
						_this["dArea"+i].gotoAndStop(0);
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
					_this["dArea"+i].gotoAndStop(0);
				}
				
				var blankNum = 0;
				
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y) && userAns[i-1]==0) {
						userAns[i-1] = evt.currentTarget.itemNum;			
						evt.currentTarget.x = _this["dArea"+i].x;
						evt.currentTarget.y = _this["dArea"+i].y;
						blankNum = i;
						break;
					}
				}
				if (blankNum==0){
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1]=0;
							break;
						}
					}
					
				}
				//console.log(userAns);
				_this.updateAll();
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxdArea; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxdArea){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=3; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxdArea*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item9 = new lib.btnItem4copy2();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(590.3,357.7);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnItem4copy2(), 3);

	this.item8 = new lib.btnItem7copy2();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(590.3,315.9);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnItem7copy2(), 3);

	this.item7 = new lib.btnItem2copy2();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(590.3,274);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnItem2copy2(), 3);

	this.item6 = new lib.btnItem1copy2();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(397.3,357.7);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnItem1copy2(), 3);

	this.item5 = new lib.btnItem5copy2();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(397.3,315.9);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnItem5copy2(), 3);

	this.item4 = new lib.btnItem8copy2();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(397.3,274);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem8copy2(), 3);

	this.item3 = new lib.btnItem3copy2();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(202.3,357.7);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3copy2(), 3);

	this.item2 = new lib.btnItem6copy2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(202.3,315.9);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem6copy2(), 3);

	this.item1 = new lib.btnItem9copy2();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(202.3,274);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem9copy2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9}]}).wait(1));

	// dArea
	this.dArea3 = new lib.dArea3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(588.4,487.5);

	this.dArea2 = new lib.dArea2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(395.2,487.5);

	this.dArea1 = new lib.dArea1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(202,487.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3}]}).wait(1));

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiQgpgoAAg6QAAgQAFgTQAKgkAagZQAZgaAjgKQATgGASAAQA6AAAoApQApApAAA4QAAA6gpAoQgoApg6AAQg4AAgpgpg");
	this.shape.setTransform(588,418.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWC/IkQjBIgDgCQglgdgDgwQgBgYAJgWQAJgWASgPQAegcAqAAIAQACQAuAHAbApIACAEICEE8QADAHgGAFQgDADgDAAQgDAAgDgCg");
	this.shape_1.setTransform(575.4,404.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnYOaQhYAAg/g7Qg/g9AAhUIAA4UQAAgjAagYQAZgZAlAAILQAAQAQAAAMAMQAMAMAAAQQAAAQAMANQALALARAAIDcAAQARAAAMgLQALgNAAgQQAAgQAMgMQAMgMAQAAIBhAAQAlAAAZAZQAaAYAAAjIAAYUQAABUg/A9Qg+A7hZAAgAoXKAQgYAYAAAjQAAAjAYAYQAZAZAiAAQAjAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgjAAQgiAAgZAZgAEzL5IAAAHIBqAAQA2ABAmgmQAmgnAAg1IAAhrIgHAAgAoSrwQgkAhgTAtQgTAuADAwQACAyAXArQAXArAoAeIABAAIABABIACABQg7B1AACEQAADnCkCkQCkCkDoAAQDnAACkikQCkikAAjnQAAjoikikQikikjnAAQhdAAhXAeIgDgGQgZgrgpgcQgpgcgygIQgOgDgUABQhUgBhAA5g");
	this.shape_2.setTransform(588.4,424.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADnMEIAvgwIgwgvIgwAuIhyhwIAwgxIgwgwIgwAwIhxhyIAxgvIgygxIgvAwIhxhyIAwgvIgxgwIgwAvIhxhyIAwgvIgxgxIgwAwIhxhxIAwgwIgxgvIgwAvIhxhxIAvgxIgwgwIgwAwIiFiFIBihiIg2g1QgCgCAAgEQAAgEACgDIBRhRQADgCADAAQAEAAACACIAfAgQAFAFAGgFIAcgcQAGgGgBgJIgLg4QgBgJAFgGIDCjBQAWgVAdgBQAdABAXAVIUpUpQAVAWAAAdQAAAfgVAVIjCDCQgFAGgJgBIgwgFQgJgBgFAGIgcAcQgDADAAAEQAAADADADIAWAWQACACAAAEQAAAEgCACIhRBQQgGAHgFgHIg3g2IhhBigAEZHNIAUATIgRARQgCACAAAFQAAADACACIBsBsQAGAGAGgGIARgRIASATIAvgvIgTgSIAcgcIASASIAugtIgSgTIAcgcIASATIAtguIgSgSIARgRQABgCAAgDQAAgEgBgCIhshsQgCgCgEAAQgDAAgDACIgQAQIgUgUIguAuIAUAUIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgALrGuQgOAOgBAUQABAVAOANQAOAOAUABQAUgBAOgOQAOgNAAgVQAAgUgOgOQgOgOgUAAQgUAAgOAOgAAgDUIAVAUIgRARQgDACAAAEQAAADADADIBrBsQACACAEAAQAEAAACgCIARgRIATASIAtgtIgSgTIAcgcIASATIAuguIgSgTIAbgcIATATIAuguIgSgTIAPgQQADgCAAgEQAAgEgDgCIhrhsQgCgCgDAAQgEAAgDACIgQAQIgUgTIgtAtIATAUIgcAcIgTgUIguAuIAUAUIgcAcIgUgUgAlmiyIAUATIgRARQgCADAAAEQAAADACACIBsBsQAGAGAGgGIARgRIATASIAugtIgTgTIAcgcIASATIAvguIgTgTIAcgbIASASIAugtIgTgTIARgQQACgDAAgDQAAgEgCgCIhshsQgDgCgDAAQgEAAgDACIgPAQIgUgUIguAvIAUATIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgApwm9IAVAVIgSAQQgDADAAADQAAAEADADIBsBrQAGAGAGgGIARgRIASATIAuguIgTgTIAcgcIATATIAuguIgTgSIAcgdIATATIAtguIgSgTIAQgPQACgDAAgDQAAgEgCgDIhshrQgCgCgDgBQgEABgCACIgRAQIgTgUIguAuIAUAUIgcAbIgUgTIguAtIAUAUIgcAcIgUgUgAnysuQgOAOAAAUQAAAUAOAPQAOANAUAAQAVAAAOgNQAOgPAAgUQAAgTgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_3.setTransform(395.2,424.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSEYQgggBgRgRQgRgRAAgfIAAnsIByAAIAAHGIBEAAIAAnGIBzAAIAAHsQAAAfgRARQgSARgfABg");
	this.shape_4.setTransform(216.6,424.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPEYIAAouIDdAAQAgAAARARQARASAAAfIAADrQAAAggRASQgRARggAAIhrAAIAAC+gAgdgMIA6AAIAAijIg6AAg");
	this.shape_5.setTransform(203,424.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhREYQgegBgRgRQgSgRABgfIAAmqQgBgfASgSQARgRAeAAICiAAQAfAAARARQASASgBAfIAACMIhxAAIAAhnIhBAAIAAFfIBBAAIAAhuIBxAAIAACUQABAfgSARQgRARgfABg");
	this.shape_6.setTransform(189.3,424.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIDOEQAAgogcgbQgbgcgnAAQgoAAgcAcQgcAbAAAoIl9AAIAAhHIhXAAIAABHIhaAAIAAhHIhYAAIAABHIhZAAIAAhHIhXAAIAABHIllAAQgSAAgOgOQgNgMAAgTIAA6tQAAgSANgOQAOgNASAAIatAAQATAAAMANQAOAOAAASIAAatQAAATgOAMQgMAOgTAAgAqdIEQAAA0AlAlQAlAmA0gBIRFAAQA0ABAlgmQAlglAAg0IAAwIQAAg0glglQglglg0AAIxFAAQg0AAglAlQglAlAAA0IAABFIA+AAQATAAANANQANANAAATIAAMlQAAASgNANQgNAOgTAAIg+AAg");
	this.shape_7.setTransform(201.9,424.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(394.5,533,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2copy2, new cjs.Rectangle(127.8,253.5,537,302), null);


(lib.actMc2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [3, 9, 1];
		var userAns = [0,0,0];
		var maxItem = 9;
		var maxdArea = 3;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		posList = shuffle(posList);
		for (i=1; i<=maxItem; i++){
			this["item"+i].x = initX[posList[i-1] - 1];
			this["item"+i].y = initY[posList[i-1] - 1];
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
		}
		for (i=1; i<=maxItem; i++){	
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = point.x;
				evt.currentTarget.y = point.y;
				
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
				}
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y)) {
						_this["dArea"+i].gotoAndStop(1);
					} else {
						_this["dArea"+i].gotoAndStop(0);
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
					_this["dArea"+i].gotoAndStop(0);
				}
				
				var blankNum = 0;
				
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y) && userAns[i-1]==0) {
						userAns[i-1] = evt.currentTarget.itemNum;			
						evt.currentTarget.x = _this["dArea"+i].x;
						evt.currentTarget.y = _this["dArea"+i].y;
						blankNum = i;
						break;
					}
				}
				if (blankNum==0){
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1]=0;
							break;
						}
					}
					
				}
				//console.log(userAns);
				_this.updateAll();
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxdArea; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxdArea){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=3; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxdArea*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item9 = new lib.btnItem4();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(590.3,357.7);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnItem4(), 3);

	this.item8 = new lib.btnItem7();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(590.3,315.9);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnItem7(), 3);

	this.item7 = new lib.btnItem2();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(590.3,274);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnItem2(), 3);

	this.item6 = new lib.btnItem1();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(397.3,357.7);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnItem1(), 3);

	this.item5 = new lib.btnItem5();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(397.3,315.9);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnItem5(), 3);

	this.item4 = new lib.btnItem8();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(397.3,274);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem8(), 3);

	this.item3 = new lib.btnItem3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(202.3,357.7);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3(), 3);

	this.item2 = new lib.btnItem6();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(202.3,315.9);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem6(), 3);

	this.item1 = new lib.btnItem9();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(202.3,274);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem9(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9}]}).wait(1));

	// dArea
	this.dArea3 = new lib.dArea3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(588.4,487.5);

	this.dArea2 = new lib.dArea2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(395.2,487.5);

	this.dArea1 = new lib.dArea1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(202,487.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3}]}).wait(1));

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiQgpgoAAg6QAAgQAFgTQAKgkAagZQAZgaAjgKQATgGASAAQA6AAAoApQApApAAA4QAAA6gpAoQgoApg6AAQg4AAgpgpg");
	this.shape.setTransform(588,418.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWC/IkQjBIgDgCQglgdgDgwQgBgYAJgWQAJgWASgPQAegcAqAAIAQACQAuAHAbApIACAEICEE8QADAHgGAFQgDADgDAAQgDAAgDgCg");
	this.shape_1.setTransform(575.4,404.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnYOaQhYAAg/g7Qg/g9AAhUIAA4UQAAgjAagYQAZgZAlAAILQAAQAQAAAMAMQAMAMAAAQQAAAQAMANQALALARAAIDcAAQARAAAMgLQALgNAAgQQAAgQAMgMQAMgMAQAAIBhAAQAlAAAZAZQAaAYAAAjIAAYUQAABUg/A9Qg+A7hZAAgAoXKAQgYAYAAAjQAAAjAYAYQAZAZAiAAQAjAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgjAAQgiAAgZAZgAEzL5IAAAHIBqAAQA2ABAmgmQAmgnAAg1IAAhrIgHAAgAoSrwQgkAhgTAtQgTAuADAwQACAyAXArQAXArAoAeIABAAIABABIACABQg7B1AACEQAADnCkCkQCkCkDoAAQDnAACkikQCkikAAjnQAAjoikikQikikjnAAQhdAAhXAeIgDgGQgZgrgpgcQgpgcgygIQgOgDgUABQhUgBhAA5g");
	this.shape_2.setTransform(588.4,424.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADnMEIAvgwIgwgvIgwAuIhyhwIAwgxIgwgwIgwAwIhxhyIAxgvIgygxIgvAwIhxhyIAwgvIgxgwIgwAvIhxhyIAwgvIgxgxIgwAwIhxhxIAwgwIgxgvIgwAvIhxhxIAvgxIgwgwIgwAwIiFiFIBihiIg2g1QgCgCAAgEQAAgEACgDIBRhRQADgCADAAQAEAAACACIAfAgQAFAFAGgFIAcgcQAGgGgBgJIgLg4QgBgJAFgGIDCjBQAWgVAdgBQAdABAXAVIUpUpQAVAWAAAdQAAAfgVAVIjCDCQgFAGgJgBIgwgFQgJgBgFAGIgcAcQgDADAAAEQAAADADADIAWAWQACACAAAEQAAAEgCACIhRBQQgGAHgFgHIg3g2IhhBigAEZHNIAUATIgRARQgCACAAAFQAAADACACIBsBsQAGAGAGgGIARgRIASATIAvgvIgTgSIAcgcIASASIAugtIgSgTIAcgcIASATIAtguIgSgSIARgRQABgCAAgDQAAgEgBgCIhshsQgCgCgEAAQgDAAgDACIgQAQIgUgUIguAuIAUAUIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgALrGuQgOAOgBAUQABAVAOANQAOAOAUABQAUgBAOgOQAOgNAAgVQAAgUgOgOQgOgOgUAAQgUAAgOAOgAAgDUIAVAUIgRARQgDACAAAEQAAADADADIBrBsQACACAEAAQAEAAACgCIARgRIATASIAtgtIgSgTIAcgcIASATIAuguIgSgTIAbgcIATATIAuguIgSgTIAPgQQADgCAAgEQAAgEgDgCIhrhsQgCgCgDAAQgEAAgDACIgQAQIgUgTIgtAtIATAUIgcAcIgTgUIguAuIAUAUIgcAcIgUgUgAlmiyIAUATIgRARQgCADAAAEQAAADACACIBsBsQAGAGAGgGIARgRIATASIAugtIgTgTIAcgcIASATIAvguIgTgTIAcgbIASASIAugtIgTgTIARgQQACgDAAgDQAAgEgCgCIhshsQgDgCgDAAQgEAAgDACIgPAQIgUgUIguAvIAUATIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgApwm9IAVAVIgSAQQgDADAAADQAAAEADADIBsBrQAGAGAGgGIARgRIASATIAuguIgTgTIAcgcIATATIAuguIgTgSIAcgdIATATIAtguIgSgTIAQgPQACgDAAgDQAAgEgCgDIhshrQgCgCgDgBQgEABgCACIgRAQIgTgUIguAuIAUAUIgcAbIgUgTIguAtIAUAUIgcAcIgUgUgAnysuQgOAOAAAUQAAAUAOAPQAOANAUAAQAVAAAOgNQAOgPAAgUQAAgTgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_3.setTransform(395.2,424.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSEYQgggBgRgRQgRgRAAgfIAAnsIByAAIAAHGIBEAAIAAnGIBzAAIAAHsQAAAfgRARQgSARgfABg");
	this.shape_4.setTransform(216.6,424.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPEYIAAouIDdAAQAgAAARARQARASAAAfIAADrQAAAggRASQgRARggAAIhrAAIAAC+gAgdgMIA6AAIAAijIg6AAg");
	this.shape_5.setTransform(203,424.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhREYQgegBgRgRQgSgRABgfIAAmqQgBgfASgSQARgRAeAAICiAAQAfAAARARQASASgBAfIAACMIhxAAIAAhnIhBAAIAAFfIBBAAIAAhuIBxAAIAACUQABAfgSARQgRARgfABg");
	this.shape_6.setTransform(189.3,424.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIDOEQAAgogcgbQgbgcgnAAQgoAAgcAcQgcAbAAAoIl9AAIAAhHIhXAAIAABHIhaAAIAAhHIhYAAIAABHIhZAAIAAhHIhXAAIAABHIllAAQgSAAgOgOQgNgMAAgTIAA6tQAAgSANgOQAOgNASAAIatAAQATAAAMANQAOAOAAASIAAatQAAATgOAMQgMAOgTAAgAqdIEQAAA0AlAlQAlAmA0gBIRFAAQA0ABAlgmQAlglAAg0IAAwIQAAg0glglQglglg0AAIxFAAQg0AAglAlQglAlAAA0IAABFIA+AAQATAAANANQANANAAATIAAMlQAAASgNANQgNAOgTAAIg+AAg");
	this.shape_7.setTransform(201.9,424.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(394.5,533,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2copy, new cjs.Rectangle(127.8,253.5,537,302), null);


(lib.actMc2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [2, 1];
		var userAns = [0,0];
		var maxBlanks = 2;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var fontSize = 16;
		var cb1 = document.getElementById("cb1");
		var cb2 = document.getElementById("cb2");
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		cb1.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb1.style.fontSize = fontSize * myScale + "px";
		$("#cb1").val(0);
		$("#cb1").change(function(){
			userAns[0] = $("#cb1").val();
			checkCompletion();
		});
		cb2.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb2.style.fontSize = fontSize * myScale + "px";
		$("#cb2").val(0);
		$("#cb2").change(function(){
			userAns[1] = $("#cb2").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
			}, 1000);
		});
		function checkCompletion(){
			var doneCount = 0;
			var myLength = userAns.length;
			for (var i=1; i<=myLength; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==myLength){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		}
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// btn
	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, W-LAN, 1, WAN, 2, LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(498.4,261.1,0.791,1.194,0,0,0,50.1,11.1);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, W-LAN, 1, WAN, 2, LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(287.4,261.1,0.791,1.194,0,0,0,50.1,11.1);

	this.instance = new lib.cBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(498.3,259.7);

	this.instance_1 = new lib.cBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.3,259.7);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(399,530.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnSubmit},{t:this.instance_1},{t:this.instance},{t:this.cb1},{t:this.cb2}]}).wait(5));

	// items
	this.instance_2 = new lib.wave("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(626.7,362.5,0.26,0.26,0,0,0,160.5,95.8);

	this.instance_3 = new lib.cloud("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(195.5,424.2,1,1,0,0,0,82.5,51.8);

	this.instance_4 = new lib.modem("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(397.8,380.6,0.26,0.26,0,0,0,235.5,191.8);

	this.instance_5 = new lib.comp("single",2);
	this.instance_5.parent = this;
	this.instance_5.setTransform(550.3,326.7,0.5,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("ApXL7IAAgeIIEAAIAAgwQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAwIKXAAIAAAegAhQJ4QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQIAQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQGIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQEQQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQCYQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQAgQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA7QAAAEgDADQgDADgEAAQgEAAgDgDgAhQhXQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQjPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQlHQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQm/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQo3QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgAhQqvQgDgDAAgEIAAg6QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA6QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(506.3,354.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FE6FF").s().p("AoKL2IAAgeIH+AAIAAgwQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAAwIIEAAIAAAegAgJJzQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJH7QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJGDQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJELQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJCTQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJAbQgDgDAAgEIAAg7QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA7QAAAEgDADQgDADgDAAQgEAAgDgDgAgJhcQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJjUQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJlMQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJnEQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJo8QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAA8QAAAEgDADQgDADgDAAQgEAAgDgDgAgJq0QgDgDAAgEIAAgwQAAgEADgDQADgDAEAAQADAAADADQADADAAAEIAAAwQAAAEgDADQgDADgDAAQgEAAgDgDg");
	this.shape_1.setTransform(287.6,354.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(113,239.1,554.5,318);


(lib.actMc2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [3, 1];
		var userAns = [0,0];
		var maxBlanks = 2;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var fontSize = 16;
		var cb1 = document.getElementById("cb1");
		var cb2 = document.getElementById("cb2");
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		cb1.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb1.style.fontSize = fontSize * myScale + "px";
		$("#cb1").val(0);
		$("#cb1").change(function(){
			userAns[0] = $("#cb1").val();
			checkCompletion();
		});
		cb2.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb2.style.fontSize = fontSize * myScale + "px";
		$("#cb2").val(0);
		$("#cb2").change(function(){
			userAns[1] = $("#cb2").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
			}, 1000);
		});
		function checkCompletion(){
			var doneCount = 0;
			var myLength = userAns.length;
			for (var i=1; i<=myLength; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==myLength){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		}
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_2
	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, WAN, 1, LAN, 2, W-LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(498.4,261.1,0.791,1.194,0,0,0,50.1,11.1);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, WAN, 1, LAN, 2, W-LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(287.4,261.1,0.791,1.194,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb1},{t:this.cb2}]}).wait(5));

	// btn
	this.instance = new lib.cBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(498.3,259.7);

	this.instance_1 = new lib.cBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(287.3,259.7);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(399,530.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnSubmit},{t:this.instance_1},{t:this.instance}]}).wait(5));

	// items
	this.instance_2 = new lib.wave("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(230.7,362.5,0.26,0.26,0,0,0,160.5,95.8);

	this.instance_3 = new lib.cloud("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(631.5,430.2,1,1,0,0,0,82.5,51.8);

	this.instance_4 = new lib.modem("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(397.8,380.6,0.26,0.26,0,0,0,235.5,191.8);

	this.instance_5 = new lib.comp("single",2);
	this.instance_5.parent = this;
	this.instance_5.setTransform(154.4,326.7,0.5,0.5);

	this.instance_6 = new lib.lines("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(332.7,399.1,1,1,0,0,0,221.6,89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(154.4,239.1,524.6,318);


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [3, 9, 1];
		var userAns = [0,0,0];
		var maxItem = 9;
		var maxdArea = 3;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		posList = shuffle(posList);
		for (i=1; i<=maxItem; i++){
			this["item"+i].x = initX[posList[i-1] - 1];
			this["item"+i].y = initY[posList[i-1] - 1];
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
		}
		for (i=1; i<=maxItem; i++){	
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = point.x;
				evt.currentTarget.y = point.y;
				
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
				}
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y)) {
						_this["dArea"+i].gotoAndStop(1);
					} else {
						_this["dArea"+i].gotoAndStop(0);
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
					_this["dArea"+i].gotoAndStop(0);
				}
				
				var blankNum = 0;
				
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y) && userAns[i-1]==0) {
						userAns[i-1] = evt.currentTarget.itemNum;			
						evt.currentTarget.x = _this["dArea"+i].x;
						evt.currentTarget.y = _this["dArea"+i].y;
						blankNum = i;
						break;
					}
				}
				if (blankNum==0){
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1]=0;
							break;
						}
					}
					
				}
				//console.log(userAns);
				_this.updateAll();
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxdArea; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxdArea){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=3; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxdArea*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item9 = new lib.btnItem4copy();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(590.3,357.7);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnItem4copy(), 3);

	this.item8 = new lib.btnItem7copy();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(590.3,315.9);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnItem7copy(), 3);

	this.item7 = new lib.btnItem2copy();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(590.3,274);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnItem2copy(), 3);

	this.item6 = new lib.btnItem1copy();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(397.3,357.7);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnItem1copy(), 3);

	this.item5 = new lib.btnItem5copy();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(397.3,315.9);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnItem5copy(), 3);

	this.item4 = new lib.btnItem8copy();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(397.3,274);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem8copy(), 3);

	this.item3 = new lib.btnItem3copy();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(202.3,357.7);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3copy(), 3);

	this.item2 = new lib.btnItem6copy();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(202.3,315.9);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem6copy(), 3);

	this.item1 = new lib.btnItem9copy();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(202.3,274);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem9copy(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9}]}).wait(1));

	// dArea
	this.dArea3 = new lib.dArea3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(588.4,487.5);

	this.dArea2 = new lib.dArea2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(395.2,487.5);

	this.dArea1 = new lib.dArea1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(202,487.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3}]}).wait(1));

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiQgpgoAAg6QAAgQAFgTQAKgkAagZQAZgaAjgKQATgGASAAQA6AAAoApQApApAAA4QAAA6gpAoQgoApg6AAQg4AAgpgpg");
	this.shape.setTransform(588,418.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWC/IkQjBIgDgCQglgdgDgwQgBgYAJgWQAJgWASgPQAegcAqAAIAQACQAuAHAbApIACAEICEE8QADAHgGAFQgDADgDAAQgDAAgDgCg");
	this.shape_1.setTransform(575.4,404.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnYOaQhYAAg/g7Qg/g9AAhUIAA4UQAAgjAagYQAZgZAlAAILQAAQAQAAAMAMQAMAMAAAQQAAAQAMANQALALARAAIDcAAQARAAAMgLQALgNAAgQQAAgQAMgMQAMgMAQAAIBhAAQAlAAAZAZQAaAYAAAjIAAYUQAABUg/A9Qg+A7hZAAgAoXKAQgYAYAAAjQAAAjAYAYQAZAZAiAAQAjAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgjAAQgiAAgZAZgAEzL5IAAAHIBqAAQA2ABAmgmQAmgnAAg1IAAhrIgHAAgAoSrwQgkAhgTAtQgTAuADAwQACAyAXArQAXArAoAeIABAAIABABIACABQg7B1AACEQAADnCkCkQCkCkDoAAQDnAACkikQCkikAAjnQAAjoikikQikikjnAAQhdAAhXAeIgDgGQgZgrgpgcQgpgcgygIQgOgDgUABQhUgBhAA5g");
	this.shape_2.setTransform(588.4,424.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADnMEIAvgwIgwgvIgwAuIhyhwIAwgxIgwgwIgwAwIhxhyIAxgvIgygxIgvAwIhxhyIAwgvIgxgwIgwAvIhxhyIAwgvIgxgxIgwAwIhxhxIAwgwIgxgvIgwAvIhxhxIAvgxIgwgwIgwAwIiFiFIBihiIg2g1QgCgCAAgEQAAgEACgDIBRhRQADgCADAAQAEAAACACIAfAgQAFAFAGgFIAcgcQAGgGgBgJIgLg4QgBgJAFgGIDCjBQAWgVAdgBQAdABAXAVIUpUpQAVAWAAAdQAAAfgVAVIjCDCQgFAGgJgBIgwgFQgJgBgFAGIgcAcQgDADAAAEQAAADADADIAWAWQACACAAAEQAAAEgCACIhRBQQgGAHgFgHIg3g2IhhBigAEZHNIAUATIgRARQgCACAAAFQAAADACACIBsBsQAGAGAGgGIARgRIASATIAvgvIgTgSIAcgcIASASIAugtIgSgTIAcgcIASATIAtguIgSgSIARgRQABgCAAgDQAAgEgBgCIhshsQgCgCgEAAQgDAAgDACIgQAQIgUgUIguAuIAUAUIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgALrGuQgOAOgBAUQABAVAOANQAOAOAUABQAUgBAOgOQAOgNAAgVQAAgUgOgOQgOgOgUAAQgUAAgOAOgAAgDUIAVAUIgRARQgDACAAAEQAAADADADIBrBsQACACAEAAQAEAAACgCIARgRIATASIAtgtIgSgTIAcgcIASATIAuguIgSgTIAbgcIATATIAuguIgSgTIAPgQQADgCAAgEQAAgEgDgCIhrhsQgCgCgDAAQgEAAgDACIgQAQIgUgTIgtAtIATAUIgcAcIgTgUIguAuIAUAUIgcAcIgUgUgAlmiyIAUATIgRARQgCADAAAEQAAADACACIBsBsQAGAGAGgGIARgRIATASIAugtIgTgTIAcgcIASATIAvguIgTgTIAcgbIASASIAugtIgTgTIARgQQACgDAAgDQAAgEgCgCIhshsQgDgCgDAAQgEAAgDACIgPAQIgUgUIguAvIAUATIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgApwm9IAVAVIgSAQQgDADAAADQAAAEADADIBsBrQAGAGAGgGIARgRIASATIAuguIgTgTIAcgcIATATIAuguIgTgSIAcgdIATATIAtguIgSgTIAQgPQACgDAAgDQAAgEgCgDIhshrQgCgCgDgBQgEABgCACIgRAQIgTgUIguAuIAUAUIgcAbIgUgTIguAtIAUAUIgcAcIgUgUgAnysuQgOAOAAAUQAAAUAOAPQAOANAUAAQAVAAAOgNQAOgPAAgUQAAgTgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_3.setTransform(395.2,424.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSEYQgggBgRgRQgRgRAAgfIAAnsIByAAIAAHGIBEAAIAAnGIBzAAIAAHsQAAAfgRARQgSARgfABg");
	this.shape_4.setTransform(216.6,424.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPEYIAAouIDdAAQAgAAARARQARASAAAfIAADrQAAAggRASQgRARggAAIhrAAIAAC+gAgdgMIA6AAIAAijIg6AAg");
	this.shape_5.setTransform(203,424.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhREYQgegBgRgRQgSgRABgfIAAmqQgBgfASgSQARgRAeAAICiAAQAfAAARARQASASgBAfIAACMIhxAAIAAhnIhBAAIAAFfIBBAAIAAhuIBxAAIAACUQABAfgSARQgRARgfABg");
	this.shape_6.setTransform(189.3,424.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIDOEQAAgogcgbQgbgcgnAAQgoAAgcAcQgcAbAAAoIl9AAIAAhHIhXAAIAABHIhaAAIAAhHIhYAAIAABHIhZAAIAAhHIhXAAIAABHIllAAQgSAAgOgOQgNgMAAgTIAA6tQAAgSANgOQAOgNASAAIatAAQATAAAMANQAOAOAAASIAAatQAAATgOAMQgMAOgTAAgAqdIEQAAA0AlAlQAlAmA0gBIRFAAQA0ABAlgmQAlglAAg0IAAwIQAAg0glglQglglg0AAIxFAAQg0AAglAlQglAlAAA0IAABFIA+AAQATAAANANQANANAAATIAAMlQAAASgNANQgNAOgTAAIg+AAg");
	this.shape_7.setTransform(201.9,424.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(394.5,533,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2, new cjs.Rectangle(127.8,253.5,537,302), null);


(lib.actMc1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [6, 2, 4];
		var userAns = [0,0,0];
		var maxItem = 9;
		var maxdArea = 3;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		posList = shuffle(posList);
		for (i=1; i<=maxItem; i++){
			this["item"+i].x = initX[posList[i-1] - 1];
			this["item"+i].y = initY[posList[i-1] - 1];
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
		}
		for (i=1; i<=maxItem; i++){	
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = point.x;
				evt.currentTarget.y = point.y;
				
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
				}
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y)) {
						_this["dArea"+i].gotoAndStop(1);
					} else {
						_this["dArea"+i].gotoAndStop(0);
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
					_this["dArea"+i].gotoAndStop(0);
				}
				
				var blankNum = 0;
				
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y) && userAns[i-1]==0) {
						userAns[i-1] = evt.currentTarget.itemNum;			
						evt.currentTarget.x = _this["dArea"+i].x;
						evt.currentTarget.y = _this["dArea"+i].y;
						blankNum = i;
						break;
					}
				}
				if (blankNum==0){
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1]=0;
							break;
						}
					}
					
				}
				//console.log(userAns);
				_this.updateAll();
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxdArea; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxdArea){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=3; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxdArea*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item9 = new lib.btnItem4copy2();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(590.3,357.7);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnItem4copy2(), 3);

	this.item8 = new lib.btnItem7copy2();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(590.3,315.9);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnItem7copy2(), 3);

	this.item7 = new lib.btnItem2copy2();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(590.3,274);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnItem2copy2(), 3);

	this.item6 = new lib.btnItem1copy2();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(397.3,357.7);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnItem1copy2(), 3);

	this.item5 = new lib.btnItem5copy2();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(397.3,315.9);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnItem5copy2(), 3);

	this.item4 = new lib.btnItem8copy2();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(397.3,274);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem8copy2(), 3);

	this.item3 = new lib.btnItem3copy2();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(202.3,357.7);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3copy2(), 3);

	this.item2 = new lib.btnItem6copy2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(202.3,315.9);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem6copy2(), 3);

	this.item1 = new lib.btnItem9copy2();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(202.3,274);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem9copy2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9}]}).wait(1));

	// dArea
	this.dArea3 = new lib.dArea3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(588.4,487.5);

	this.dArea2 = new lib.dArea2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(395.2,487.5);

	this.dArea1 = new lib.dArea1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(202,487.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3}]}).wait(1));

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiQgpgoAAg6QAAgQAFgTQAKgkAagZQAZgaAjgKQATgGASAAQA6AAAoApQApApAAA4QAAA6gpAoQgoApg6AAQg4AAgpgpg");
	this.shape.setTransform(588,418.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWC/IkQjBIgDgCQglgdgDgwQgBgYAJgWQAJgWASgPQAegcAqAAIAQACQAuAHAbApIACAEICEE8QADAHgGAFQgDADgDAAQgDAAgDgCg");
	this.shape_1.setTransform(575.4,404.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnYOaQhYAAg/g7Qg/g9AAhUIAA4UQAAgjAagYQAZgZAlAAILQAAQAQAAAMAMQAMAMAAAQQAAAQAMANQALALARAAIDcAAQARAAAMgLQALgNAAgQQAAgQAMgMQAMgMAQAAIBhAAQAlAAAZAZQAaAYAAAjIAAYUQAABUg/A9Qg+A7hZAAgAoXKAQgYAYAAAjQAAAjAYAYQAZAZAiAAQAjAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgjAAQgiAAgZAZgAEzL5IAAAHIBqAAQA2ABAmgmQAmgnAAg1IAAhrIgHAAgAoSrwQgkAhgTAtQgTAuADAwQACAyAXArQAXArAoAeIABAAIABABIACABQg7B1AACEQAADnCkCkQCkCkDoAAQDnAACkikQCkikAAjnQAAjoikikQikikjnAAQhdAAhXAeIgDgGQgZgrgpgcQgpgcgygIQgOgDgUABQhUgBhAA5g");
	this.shape_2.setTransform(588.4,424.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADnMEIAvgwIgwgvIgwAuIhyhwIAwgxIgwgwIgwAwIhxhyIAxgvIgygxIgvAwIhxhyIAwgvIgxgwIgwAvIhxhyIAwgvIgxgxIgwAwIhxhxIAwgwIgxgvIgwAvIhxhxIAvgxIgwgwIgwAwIiFiFIBihiIg2g1QgCgCAAgEQAAgEACgDIBRhRQADgCADAAQAEAAACACIAfAgQAFAFAGgFIAcgcQAGgGgBgJIgLg4QgBgJAFgGIDCjBQAWgVAdgBQAdABAXAVIUpUpQAVAWAAAdQAAAfgVAVIjCDCQgFAGgJgBIgwgFQgJgBgFAGIgcAcQgDADAAAEQAAADADADIAWAWQACACAAAEQAAAEgCACIhRBQQgGAHgFgHIg3g2IhhBigAEZHNIAUATIgRARQgCACAAAFQAAADACACIBsBsQAGAGAGgGIARgRIASATIAvgvIgTgSIAcgcIASASIAugtIgSgTIAcgcIASATIAtguIgSgSIARgRQABgCAAgDQAAgEgBgCIhshsQgCgCgEAAQgDAAgDACIgQAQIgUgUIguAuIAUAUIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgALrGuQgOAOgBAUQABAVAOANQAOAOAUABQAUgBAOgOQAOgNAAgVQAAgUgOgOQgOgOgUAAQgUAAgOAOgAAgDUIAVAUIgRARQgDACAAAEQAAADADADIBrBsQACACAEAAQAEAAACgCIARgRIATASIAtgtIgSgTIAcgcIASATIAuguIgSgTIAbgcIATATIAuguIgSgTIAPgQQADgCAAgEQAAgEgDgCIhrhsQgCgCgDAAQgEAAgDACIgQAQIgUgTIgtAtIATAUIgcAcIgTgUIguAuIAUAUIgcAcIgUgUgAlmiyIAUATIgRARQgCADAAAEQAAADACACIBsBsQAGAGAGgGIARgRIATASIAugtIgTgTIAcgcIASATIAvguIgTgTIAcgbIASASIAugtIgTgTIARgQQACgDAAgDQAAgEgCgCIhshsQgDgCgDAAQgEAAgDACIgPAQIgUgUIguAvIAUATIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgApwm9IAVAVIgSAQQgDADAAADQAAAEADADIBsBrQAGAGAGgGIARgRIASATIAuguIgTgTIAcgcIATATIAuguIgTgSIAcgdIATATIAtguIgSgTIAQgPQACgDAAgDQAAgEgCgDIhshrQgCgCgDgBQgEABgCACIgRAQIgTgUIguAuIAUAUIgcAbIgUgTIguAtIAUAUIgcAcIgUgUgAnysuQgOAOAAAUQAAAUAOAPQAOANAUAAQAVAAAOgNQAOgPAAgUQAAgTgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_3.setTransform(395.2,424.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSEYQgggBgRgRQgRgRAAgfIAAnsIByAAIAAHGIBEAAIAAnGIBzAAIAAHsQAAAfgRARQgSARgfABg");
	this.shape_4.setTransform(216.6,424.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPEYIAAouIDdAAQAgAAARARQARASAAAfIAADrQAAAggRASQgRARggAAIhrAAIAAC+gAgdgMIA6AAIAAijIg6AAg");
	this.shape_5.setTransform(203,424.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhREYQgegBgRgRQgSgRABgfIAAmqQgBgfASgSQARgRAeAAICiAAQAfAAARARQASASgBAfIAACMIhxAAIAAhnIhBAAIAAFfIBBAAIAAhuIBxAAIAACUQABAfgSARQgRARgfABg");
	this.shape_6.setTransform(189.3,424.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIDOEQAAgogcgbQgbgcgnAAQgoAAgcAcQgcAbAAAoIl9AAIAAhHIhXAAIAABHIhaAAIAAhHIhYAAIAABHIhZAAIAAhHIhXAAIAABHIllAAQgSAAgOgOQgNgMAAgTIAA6tQAAgSANgOQAOgNASAAIatAAQATAAAMANQAOAOAAASIAAatQAAATgOAMQgMAOgTAAgAqdIEQAAA0AlAlQAlAmA0gBIRFAAQA0ABAlgmQAlglAAg0IAAwIQAAg0glglQglglg0AAIxFAAQg0AAglAlQglAlAAA0IAABFIA+AAQATAAANANQANANAAATIAAMlQAAASgNANQgNAOgTAAIg+AAg");
	this.shape_7.setTransform(201.9,424.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(394.5,533,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1copy2, new cjs.Rectangle(127.8,253.5,537,302), null);


(lib.actMc1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [6, 2, 4];
		var userAns = [0,0,0];
		var maxItem = 9;
		var maxdArea = 3;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		posList = shuffle(posList);
		for (i=1; i<=maxItem; i++){
			this["item"+i].x = initX[posList[i-1] - 1];
			this["item"+i].y = initY[posList[i-1] - 1];
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
		}
		for (i=1; i<=maxItem; i++){	
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = point.x;
				evt.currentTarget.y = point.y;
				
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
				}
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y)) {
						_this["dArea"+i].gotoAndStop(1);
					} else {
						_this["dArea"+i].gotoAndStop(0);
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
					_this["dArea"+i].gotoAndStop(0);
				}
				
				var blankNum = 0;
				
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y) && userAns[i-1]==0) {
						userAns[i-1] = evt.currentTarget.itemNum;			
						evt.currentTarget.x = _this["dArea"+i].x;
						evt.currentTarget.y = _this["dArea"+i].y;
						blankNum = i;
						break;
					}
				}
				if (blankNum==0){
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1]=0;
							break;
						}
					}
					
				}
				//console.log(userAns);
				_this.updateAll();
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxdArea; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxdArea){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=3; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxdArea*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item9 = new lib.btnItem4copy();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(590.3,357.7);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnItem4copy(), 3);

	this.item8 = new lib.btnItem7copy();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(590.3,315.9);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnItem7copy(), 3);

	this.item7 = new lib.btnItem2copy();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(590.3,274);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnItem2copy(), 3);

	this.item6 = new lib.btnItem1copy();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(397.3,357.7);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnItem1copy(), 3);

	this.item5 = new lib.btnItem5copy();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(397.3,315.9);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnItem5copy(), 3);

	this.item4 = new lib.btnItem8copy();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(397.3,274);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem8copy(), 3);

	this.item3 = new lib.btnItem3copy();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(202.3,357.7);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3copy(), 3);

	this.item2 = new lib.btnItem6copy();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(202.3,315.9);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem6copy(), 3);

	this.item1 = new lib.btnItem9copy();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(202.3,274);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem9copy(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9}]}).wait(1));

	// dArea
	this.dArea3 = new lib.dArea3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(588.4,487.5);

	this.dArea2 = new lib.dArea2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(395.2,487.5);

	this.dArea1 = new lib.dArea1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(202,487.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3}]}).wait(1));

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiQgpgoAAg6QAAgQAFgTQAKgkAagZQAZgaAjgKQATgGASAAQA6AAAoApQApApAAA4QAAA6gpAoQgoApg6AAQg4AAgpgpg");
	this.shape.setTransform(588,418.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWC/IkQjBIgDgCQglgdgDgwQgBgYAJgWQAJgWASgPQAegcAqAAIAQACQAuAHAbApIACAEICEE8QADAHgGAFQgDADgDAAQgDAAgDgCg");
	this.shape_1.setTransform(575.4,404.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnYOaQhYAAg/g7Qg/g9AAhUIAA4UQAAgjAagYQAZgZAlAAILQAAQAQAAAMAMQAMAMAAAQQAAAQAMANQALALARAAIDcAAQARAAAMgLQALgNAAgQQAAgQAMgMQAMgMAQAAIBhAAQAlAAAZAZQAaAYAAAjIAAYUQAABUg/A9Qg+A7hZAAgAoXKAQgYAYAAAjQAAAjAYAYQAZAZAiAAQAjAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgjAAQgiAAgZAZgAEzL5IAAAHIBqAAQA2ABAmgmQAmgnAAg1IAAhrIgHAAgAoSrwQgkAhgTAtQgTAuADAwQACAyAXArQAXArAoAeIABAAIABABIACABQg7B1AACEQAADnCkCkQCkCkDoAAQDnAACkikQCkikAAjnQAAjoikikQikikjnAAQhdAAhXAeIgDgGQgZgrgpgcQgpgcgygIQgOgDgUABQhUgBhAA5g");
	this.shape_2.setTransform(588.4,424.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADnMEIAvgwIgwgvIgwAuIhyhwIAwgxIgwgwIgwAwIhxhyIAxgvIgygxIgvAwIhxhyIAwgvIgxgwIgwAvIhxhyIAwgvIgxgxIgwAwIhxhxIAwgwIgxgvIgwAvIhxhxIAvgxIgwgwIgwAwIiFiFIBihiIg2g1QgCgCAAgEQAAgEACgDIBRhRQADgCADAAQAEAAACACIAfAgQAFAFAGgFIAcgcQAGgGgBgJIgLg4QgBgJAFgGIDCjBQAWgVAdgBQAdABAXAVIUpUpQAVAWAAAdQAAAfgVAVIjCDCQgFAGgJgBIgwgFQgJgBgFAGIgcAcQgDADAAAEQAAADADADIAWAWQACACAAAEQAAAEgCACIhRBQQgGAHgFgHIg3g2IhhBigAEZHNIAUATIgRARQgCACAAAFQAAADACACIBsBsQAGAGAGgGIARgRIASATIAvgvIgTgSIAcgcIASASIAugtIgSgTIAcgcIASATIAtguIgSgSIARgRQABgCAAgDQAAgEgBgCIhshsQgCgCgEAAQgDAAgDACIgQAQIgUgUIguAuIAUAUIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgALrGuQgOAOgBAUQABAVAOANQAOAOAUABQAUgBAOgOQAOgNAAgVQAAgUgOgOQgOgOgUAAQgUAAgOAOgAAgDUIAVAUIgRARQgDACAAAEQAAADADADIBrBsQACACAEAAQAEAAACgCIARgRIATASIAtgtIgSgTIAcgcIASATIAuguIgSgTIAbgcIATATIAuguIgSgTIAPgQQADgCAAgEQAAgEgDgCIhrhsQgCgCgDAAQgEAAgDACIgQAQIgUgTIgtAtIATAUIgcAcIgTgUIguAuIAUAUIgcAcIgUgUgAlmiyIAUATIgRARQgCADAAAEQAAADACACIBsBsQAGAGAGgGIARgRIATASIAugtIgTgTIAcgcIASATIAvguIgTgTIAcgbIASASIAugtIgTgTIARgQQACgDAAgDQAAgEgCgCIhshsQgDgCgDAAQgEAAgDACIgPAQIgUgUIguAvIAUATIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgApwm9IAVAVIgSAQQgDADAAADQAAAEADADIBsBrQAGAGAGgGIARgRIASATIAuguIgTgTIAcgcIATATIAuguIgTgSIAcgdIATATIAtguIgSgTIAQgPQACgDAAgDQAAgEgCgDIhshrQgCgCgDgBQgEABgCACIgRAQIgTgUIguAuIAUAUIgcAbIgUgTIguAtIAUAUIgcAcIgUgUgAnysuQgOAOAAAUQAAAUAOAPQAOANAUAAQAVAAAOgNQAOgPAAgUQAAgTgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_3.setTransform(395.2,424.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSEYQgggBgRgRQgRgRAAgfIAAnsIByAAIAAHGIBEAAIAAnGIBzAAIAAHsQAAAfgRARQgSARgfABg");
	this.shape_4.setTransform(216.6,424.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPEYIAAouIDdAAQAgAAARARQARASAAAfIAADrQAAAggRASQgRARggAAIhrAAIAAC+gAgdgMIA6AAIAAijIg6AAg");
	this.shape_5.setTransform(203,424.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhREYQgegBgRgRQgSgRABgfIAAmqQgBgfASgSQARgRAeAAICiAAQAfAAARARQASASgBAfIAACMIhxAAIAAhnIhBAAIAAFfIBBAAIAAhuIBxAAIAACUQABAfgSARQgRARgfABg");
	this.shape_6.setTransform(189.3,424.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIDOEQAAgogcgbQgbgcgnAAQgoAAgcAcQgcAbAAAoIl9AAIAAhHIhXAAIAABHIhaAAIAAhHIhYAAIAABHIhZAAIAAhHIhXAAIAABHIllAAQgSAAgOgOQgNgMAAgTIAA6tQAAgSANgOQAOgNASAAIatAAQATAAAMANQAOAOAAASIAAatQAAATgOAMQgMAOgTAAgAqdIEQAAA0AlAlQAlAmA0gBIRFAAQA0ABAlgmQAlglAAg0IAAwIQAAg0glglQglglg0AAIxFAAQg0AAglAlQglAlAAA0IAABFIA+AAQATAAANANQANANAAATIAAMlQAAASgNANQgNAOgTAAIg+AAg");
	this.shape_7.setTransform(201.9,424.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(394.5,533,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1copy, new cjs.Rectangle(127.8,253.5,537,302), null);


(lib.actMc1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [3, 1, 2];
		var userAns = [0,0,0];
		var maxBlanks = 3;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var fontSize = 16;
		var cb1 = document.getElementById("cb1");
		var cb2 = document.getElementById("cb2");
		var cb3 = document.getElementById("cb3");
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		cb1.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb1.style.fontSize = fontSize * myScale + "px";
		$("#cb1").val(0);
		$("#cb1").change(function(){
			userAns[0] = $("#cb1").val();
			checkCompletion();
		});
		cb2.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb2.style.fontSize = fontSize * myScale + "px";
		$("#cb2").val(0);
		$("#cb2").change(function(){
			userAns[1] = $("#cb2").val();
			checkCompletion();
		});
		cb3.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb3.style.fontSize = fontSize * myScale + "px";
		$("#cb3").val(0);
		$("#cb3").change(function(){
			userAns[2] = $("#cb3").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
				cb3.style.fontSize = fontSize * myScale + "px";
			}, 1000);
		});
		function checkCompletion(){
			var doneCount = 0;
			var myLength = userAns.length;
			for (var i=1; i<=myLength; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==myLength){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		}
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_2
	this.cb3 = new lib.an_ComboBox({'id': 'cb3', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, W-LAN, 1, LAN, 2, WAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb3.setTransform(619.4,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, W-LAN, 1, LAN, 2, WAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(438.4,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, W-LAN, 1, LAN, 2, WAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(235.4,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb1},{t:this.cb2},{t:this.cb3}]}).wait(5));

	// btn
	this.instance = new lib.cBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(619.3,249.7);

	this.instance_1 = new lib.cBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(438.3,249.7);

	this.instance_2 = new lib.cBg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(235.3,249.7);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(399,530.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnSubmit},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(5));

	// items
	this.cb1_1 = new lib.an_ComboBox({'id': 'cb1_1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, W-LAN, 1, LAN, 2, WAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1_1.setTransform(235.4,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.instance_3 = new lib.comp("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(682.7,448,0.25,0.25,0,0,0,164,136.8);

	this.instance_4 = new lib.comp("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(542.7,448,0.25,0.25,0,0,0,164.2,136.8);

	this.instance_5 = new lib.cloud("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(157.8,383.3,1,1,0,0,0,82.5,51.8);

	this.instance_6 = new lib.modem("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(338.3,340.1,0.26,0.26,0,0,0,235.5,191.8);

	this.instance_7 = new lib.comp("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(682.7,332.1,0.25,0.25,0,0,0,164,136.6);

	this.instance_8 = new lib.comp("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(542.7,332.1,0.25,0.25,0,0,0,164.2,136.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AqWJOIAAgeINpAAIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8IGwAAIAAAegADWG/QgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWFHQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWDPQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWBXQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWggQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWiYQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWkQQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWmIQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDgADWoAQgDgDAAgEIAAg8QAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAA8QAAAEgDADQgDADgEAAQgEAAgDgDg");
	this.shape.setTransform(213.6,330.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#50C900").s().p("AsBJLIAAgdIIKAAIAAg3QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA3IPlAAIAAAdgAj0HCQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEAAQgEAAgDgCgAj0FJQgDgCAAgEIAAg8QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA8QAAAEgDACQgDADgEABQgEgBgDgDgAj0DRQgDgCAAgFIAAg7QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA7QAAAFgDACQgDADgEAAQgEAAgDgDgAj0BaQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEAAQgEAAgDgCgAj0geQgDgCAAgEIAAg8QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA8QAAAEgDACQgDADgEABQgEgBgDgDgAj0iWQgDgCAAgFIAAg7QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA7QAAAFgDACQgDADgEAAQgEAAgDgDgAj0kNQgDgDAAgEIAAg9QAAgEADgDQADgCAEgBQAEABADACQADADAAAEIAAA9QAAAEgDADQgDACgEAAQgEAAgDgCgAj0mGQgDgCAAgEIAAg8QAAgFADgDQADgCAEAAQAEAAADACQADADAAAFIAAA8QAAAEgDACQgDADgEABQgEgBgDgDgAj0n+QgDgCAAgFIAAg7QAAgFADgCQADgDAEgBQAEABADADQADACAAAFIAAA7QAAAFgDACQgDADgEAAQgEAAgDgDg");
	this.shape_1.setTransform(461.3,331);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9FE6FF").s().p("ArCN9IAAziINCAAIAAgtQABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAAtIIuAAIAATigAqjNfIVHAAIAAymI1HAAgACEnHQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgACEo/QgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgACEq3QgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDgACEsvQgDgDgBgEIAAg8QABgEADgDQACgDAEAAQAFAAACADQADADAAAEIAAA8QAAAEgDADQgCADgFAAQgEAAgCgDg");
	this.shape_2.setTransform(605.2,359.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.cb1_1}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.3,229.1,659.4,328);


(lib.actMc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [1, 3, 2];
		var userAns = [0,0,0];
		var maxBlanks = 3;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var fontSize = 16;
		var cb1 = document.getElementById("cb1");
		var cb2 = document.getElementById("cb2");
		var cb3 = document.getElementById("cb3");
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		cb1.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb1.style.fontSize = fontSize * myScale + "px";
		$("#cb1").val(0);
		$("#cb1").change(function(){
			userAns[0] = $("#cb1").val();
			checkCompletion();
		});
		cb2.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb2.style.fontSize = fontSize * myScale + "px";
		$("#cb2").val(0);
		$("#cb2").change(function(){
			userAns[1] = $("#cb2").val();
			checkCompletion();
		});
		cb3.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb3.style.fontSize = fontSize * myScale + "px";
		$("#cb3").val(0);
		$("#cb3").change(function(){
			userAns[2] = $("#cb3").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
				cb3.style.fontSize = fontSize * myScale + "px";
			}, 1000);
		});
		function checkCompletion(){
			var doneCount = 0;
			var myLength = userAns.length;
			for (var i=1; i<=myLength; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==myLength){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		}
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_2
	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, LAN, 1, WAN, 2, W-LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(355.9,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, LAN, 1, WAN, 2, W-LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(200.4,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.cb3 = new lib.an_ComboBox({'id': 'cb3', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, Pilih, 0, LAN, 1, WAN, 2, W-LAN, 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb3.setTransform(558.4,251.1,0.791,1.194,0,0,0,50.1,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb3},{t:this.cb1},{t:this.cb2}]}).wait(5));

	// btn
	this.instance = new lib.cBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(558.3,249.7);

	this.instance_1 = new lib.cBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(355.8,249.7);

	this.instance_2 = new lib.cBg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(200.3,249.7);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(399,530.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnSubmit},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(5));

	// items
	this.instance_3 = new lib.comp("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(264.7,448,0.25,0.25,0,0,0,164,136.8);

	this.instance_4 = new lib.comp("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(124.7,448,0.25,0.25,0,0,0,164.2,136.8);

	this.instance_5 = new lib.cloud("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(678.5,388.2,1,1,0,0,0,82.5,51.8);

	this.instance_6 = new lib.modem("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(444.3,340.1,0.26,0.26,0,0,0,235.5,191.8);

	this.instance_7 = new lib.comp("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(264.7,332.1,0.25,0.25,0,0,0,164,136.6);

	this.instance_8 = new lib.comp("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(124.7,332.1,0.25,0.25,0,0,0,164.2,136.6);

	this.instance_9 = new lib.lines("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(349.7,358.1,1,1,0,0,0,221.6,89.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.7,229.1,642.3,328);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [6, 2, 4];
		var userAns = [0,0,0];
		var maxItem = 9;
		var maxdArea = 3;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		posList = shuffle(posList);
		for (i=1; i<=maxItem; i++){
			this["item"+i].x = initX[posList[i-1] - 1];
			this["item"+i].y = initY[posList[i-1] - 1];
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
		}
		for (i=1; i<=maxItem; i++){	
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(evt.currentTarget, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				evt.currentTarget.x = point.x;
				evt.currentTarget.y = point.y;
				
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
				}
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y)) {
						_this["dArea"+i].gotoAndStop(1);
					} else {
						_this["dArea"+i].gotoAndStop(0);
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				for (i=1; i<=maxdArea; i++){
					this["p"+i] = _this["dArea"+i].globalToLocal(stage.mouseX, stage.mouseY);
					_this["dArea"+i].gotoAndStop(0);
				}
				
				var blankNum = 0;
				
				for (i=1; i<=maxdArea; i++){
					if (_this["dArea"+i].hitTest(this["p"+i].x, this["p"+i].y) && userAns[i-1]==0) {
						userAns[i-1] = evt.currentTarget.itemNum;			
						evt.currentTarget.x = _this["dArea"+i].x;
						evt.currentTarget.y = _this["dArea"+i].y;
						blankNum = i;
						break;
					}
				}
				if (blankNum==0){
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1]=0;
							break;
						}
					}
					
				}
				//console.log(userAns);
				_this.updateAll();
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxdArea; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxdArea){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			for (var i=1; i<=3; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxdArea*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// items
	this.item9 = new lib.btnItem4();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(590.3,357.7);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnItem4(), 3);

	this.item8 = new lib.btnItem7();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(590.3,315.9);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnItem7(), 3);

	this.item7 = new lib.btnItem2();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(590.3,274);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnItem2(), 3);

	this.item6 = new lib.btnItem1();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(397.3,357.7);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnItem1(), 3);

	this.item5 = new lib.btnItem5();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(397.3,315.9);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnItem5(), 3);

	this.item4 = new lib.btnItem8();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(397.3,274);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem8(), 3);

	this.item3 = new lib.btnItem3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(202.3,357.7);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3(), 3);

	this.item2 = new lib.btnItem6();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(202.3,315.9);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem6(), 3);

	this.item1 = new lib.btnItem9();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(202.3,274);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem9(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9}]}).wait(1));

	// dArea
	this.dArea3 = new lib.dArea3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(588.4,487.5);

	this.dArea2 = new lib.dArea2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(395.2,487.5);

	this.dArea1 = new lib.dArea1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(202,487.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3}]}).wait(1));

	// icons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhhBiQgpgoAAg6QAAgQAFgTQAKgkAagZQAZgaAjgKQATgGASAAQA6AAAoApQApApAAA4QAAA6gpAoQgoApg6AAQg4AAgpgpg");
	this.shape.setTransform(588,418.1,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACWC/IkQjBIgDgCQglgdgDgwQgBgYAJgWQAJgWASgPQAegcAqAAIAQACQAuAHAbApIACAEICEE8QADAHgGAFQgDADgDAAQgDAAgDgCg");
	this.shape_1.setTransform(575.4,404.5,0.4,0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnYOaQhYAAg/g7Qg/g9AAhUIAA4UQAAgjAagYQAZgZAlAAILQAAQAQAAAMAMQAMAMAAAQQAAAQAMANQALALARAAIDcAAQARAAAMgLQALgNAAgQQAAgQAMgMQAMgMAQAAIBhAAQAlAAAZAZQAaAYAAAjIAAYUQAABUg/A9Qg+A7hZAAgAoXKAQgYAYAAAjQAAAjAYAYQAZAZAiAAQAjAAAZgZQAYgYAAgjQAAgjgYgYQgZgZgjAAQgiAAgZAZgAEzL5IAAAHIBqAAQA2ABAmgmQAmgnAAg1IAAhrIgHAAgAoSrwQgkAhgTAtQgTAuADAwQACAyAXArQAXArAoAeIABAAIABABIACABQg7B1AACEQAADnCkCkQCkCkDoAAQDnAACkikQCkikAAjnQAAjoikikQikikjnAAQhdAAhXAeIgDgGQgZgrgpgcQgpgcgygIQgOgDgUABQhUgBhAA5g");
	this.shape_2.setTransform(588.4,424.7,0.4,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADnMEIAvgwIgwgvIgwAuIhyhwIAwgxIgwgwIgwAwIhxhyIAxgvIgygxIgvAwIhxhyIAwgvIgxgwIgwAvIhxhyIAwgvIgxgxIgwAwIhxhxIAwgwIgxgvIgwAvIhxhxIAvgxIgwgwIgwAwIiFiFIBihiIg2g1QgCgCAAgEQAAgEACgDIBRhRQADgCADAAQAEAAACACIAfAgQAFAFAGgFIAcgcQAGgGgBgJIgLg4QgBgJAFgGIDCjBQAWgVAdgBQAdABAXAVIUpUpQAVAWAAAdQAAAfgVAVIjCDCQgFAGgJgBIgwgFQgJgBgFAGIgcAcQgDADAAAEQAAADADADIAWAWQACACAAAEQAAAEgCACIhRBQQgGAHgFgHIg3g2IhhBigAEZHNIAUATIgRARQgCACAAAFQAAADACACIBsBsQAGAGAGgGIARgRIASATIAvgvIgTgSIAcgcIASASIAugtIgSgTIAcgcIASATIAtguIgSgSIARgRQABgCAAgDQAAgEgBgCIhshsQgCgCgEAAQgDAAgDACIgQAQIgUgUIguAuIAUAUIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgALrGuQgOAOgBAUQABAVAOANQAOAOAUABQAUgBAOgOQAOgNAAgVQAAgUgOgOQgOgOgUAAQgUAAgOAOgAAgDUIAVAUIgRARQgDACAAAEQAAADADADIBrBsQACACAEAAQAEAAACgCIARgRIATASIAtgtIgSgTIAcgcIASATIAuguIgSgTIAbgcIATATIAuguIgSgTIAPgQQADgCAAgEQAAgEgDgCIhrhsQgCgCgDAAQgEAAgDACIgQAQIgUgTIgtAtIATAUIgcAcIgTgUIguAuIAUAUIgcAcIgUgUgAlmiyIAUATIgRARQgCADAAAEQAAADACACIBsBsQAGAGAGgGIARgRIATASIAugtIgTgTIAcgcIASATIAvguIgTgTIAcgbIASASIAugtIgTgTIARgQQACgDAAgDQAAgEgCgCIhshsQgDgCgDAAQgEAAgDACIgPAQIgUgUIguAvIAUATIgcAcIgUgUIguAuIAUAUIgcAbIgUgTgApwm9IAVAVIgSAQQgDADAAADQAAAEADADIBsBrQAGAGAGgGIARgRIASATIAuguIgTgTIAcgcIATATIAuguIgTgSIAcgdIATATIAtguIgSgTIAQgPQACgDAAgDQAAgEgCgDIhshrQgCgCgDgBQgEABgCACIgRAQIgTgUIguAuIAUAUIgcAbIgUgTIguAtIAUAUIgcAcIgUgUgAnysuQgOAOAAAUQAAAUAOAPQAOANAUAAQAVAAAOgNQAOgPAAgUQAAgTgOgPQgOgOgVAAQgUAAgOAOg");
	this.shape_3.setTransform(395.2,424.7,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSEYQgggBgRgRQgRgRAAgfIAAnsIByAAIAAHGIBEAAIAAnGIBzAAIAAHsQAAAfgRARQgSARgfABg");
	this.shape_4.setTransform(216.6,424.2,0.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPEYIAAouIDdAAQAgAAARARQARASAAAfIAADrQAAAggRASQgRARggAAIhrAAIAAC+gAgdgMIA6AAIAAijIg6AAg");
	this.shape_5.setTransform(203,424.2,0.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhREYQgegBgRgRQgSgRABgfIAAmqQgBgfASgSQARgRAeAAICiAAQAfAAARARQASASgBAfIAACMIhxAAIAAhnIhBAAIAAFfIBBAAIAAhuIBxAAIAACUQABAfgSARQgRARgfABg");
	this.shape_6.setTransform(189.3,424.2,0.4,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AIDOEQAAgogcgbQgbgcgnAAQgoAAgcAcQgcAbAAAoIl9AAIAAhHIhXAAIAABHIhaAAIAAhHIhYAAIAABHIhZAAIAAhHIhXAAIAABHIllAAQgSAAgOgOQgNgMAAgTIAA6tQAAgSANgOQAOgNASAAIatAAQATAAAMANQAOAOAAASIAAatQAAATgOAMQgMAOgTAAgAqdIEQAAA0AlAlQAlAmA0gBIRFAAQA0ABAlgmQAlglAAg0IAAwIQAAg0glglQglglg0AAIxFAAQg0AAglAlQglAlAAA0IAABFIA+AAQATAAANANQANANAAATIAAMlQAAASgNANQgNAOgTAAIg+AAg");
	this.shape_7.setTransform(201.9,424.6,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(394.5,533,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(127.8,253.5,537,302), null);


(lib.mcTimesUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		playSound("timeout");
	}
	this.frame_86 = function() {
		this.stop();
		function doNext(e){
			nextScreen();
		}
		this.addEventListener("click", doNext);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(85).call(this.frame_86).wait(1));

	// Layer_5
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(497.4,447.9,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(86).to({_off:false},0).wait(1));

	// anim
	this.instance = new lib.timesUpAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(86));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.996)").s().p("AhyCMQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgKQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAPAAQAAgpAQgfQARggAagQQgagQgRgfQgQgfAAgpIgPAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgKQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIDlAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAKQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgPAAQAAApgQAfQgRAfgZAQQAZAQARAgQAQAfAAApIAPAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAKQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAhKhQQAGATAJAPQAJAOALAJQAMAKALAFQAEAAABADQACADAAACQAAADgCADQgBADgEAAQgVAJgRAWIBsAAQgQgWgWgJQgDAAgBgDQgCgDAAgDQAAgCACgDQABgDADAAQAMgFAMgKQALgJAJgOQAJgPAGgTQAFgSAAgVIifAAQAAAVAFASg");
	this.shape.setTransform(-73.5,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EhBvAyxMAAAhlhMCDgAAAMAAABlhg");
	this.shape_1.setTransform(402.9,308.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,78.7,24,28);


// stage content:
(lib.f5d1q7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:149,q3:194,q4:239,q5:286,q6:329,q7:374,q8:419,q9:464,q10:507,finalFb:550});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed=18;
	}
	this.frame_4 = function() {
		playSound("mdroid_talk");
	}
	this.frame_43 = function() {
		playSound("suspense",-1);
	}
	this.frame_99 = function() {
		this.stop();
		var _this = this;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		var maxQ = 4;
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		this.currentQ = 0;
		this.myData = {
			"qNum": 18,
			"userId": cUserId,
			"time": _this.timeTaken,
			"score": _this.cScore,
			"qItem": []
		};
		var qItem1 = [{
				"qId": "f5d1q7_1",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d1q7_2",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		var qItem2 = [{
				"qId": "f5d1q7_3",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d1q7_4",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		var qItem3 = [{
				"qId": "f5d1q7_5",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d1q7_6",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d1q7_7",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		var qItem4 = [{
				"qId": "f5d1q7_8",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d1q7_9",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d1q7_10",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		if (typeof debugMode === "undefined") {
			debugMode = true;
		}
		debugMode = true;
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(qItem1[0]);
			this.myData.qItem.push(qItem1[1]);
			this.myData.qItem.push(qItem2[0]);
			this.myData.qItem.push(qItem2[1]);
			this.myData.qItem.push(qItem3[0]);
			this.myData.qItem.push(qItem3[1]);
			this.myData.qItem.push(qItem3[2]);
			this.myData.qItem.push(qItem4[0]);
			this.myData.qItem.push(qItem4[1]);
			this.myData.qItem.push(qItem4[2]);
		} else {
			this.myData.qItem.push(qItem1[randRange(0,1)]);
			this.myData.qItem.push(qItem2[randRange(0,1)]);
			this.myData.qItem.push(qItem3[randRange(0,2)]);
			this.myData.qItem.push(qItem4[randRange(0,2)]);
		}
		function goNextQ (){
			_this.currentQ++;
			if (_this.currentQ<=_this.myData.qItem.length){
				console.log(_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				_this.gotoAndPlay("q"+_this.currentQ);
				if (_this.currentQ<=maxQ){
					_this["prog"+_this.currentQ].gotoAndStop("on");
				}
			} else {
				//all questions done
				clearInterval(timeInterval);//stop time
				_this.myData.time = _this.timeGiven - _this.secRemaining;
				//console.log(_this.myData.time);
				_this.myData.score = Math.round(_this.cScore/_this.myData.qItem.length*10)/10;//average
				saveData();
			}
			console.log(_this.myData);
		}
		_this.onTimeEnd = function (){
			_this.myData.time = _this.timeGiven;
			saveData();
		};
		function saveData(){
			if (cUserId == ""){//not online
				_this.gotoAndPlay("finalFb");
			} else {
				//call save data here
				_this.gotoAndPlay("finalFb");
			}
		}
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			goNextQ();
		}
		this.addEventListener("click", doPlay);
		this.sendScore = function (_cScore){
			if (_cScore==5){//all correct
				_this.myData.qItem[_this.currentQ-1].qResult = 1;
			} else {
				_this.myData.qItem[_this.currentQ-1].qResult = 0;
			}
			_this.cScore += _cScore;
			goNextQ();
		};
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_104 = function() {
		playSound("questionAlert");
	}
	this.frame_144 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		playSound("questionAlert");
	}
	this.frame_189 = function() {
		this.stop();
		cScore = 0;
		_this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.play();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_194 = function() {
		playSound("questionAlert");
	}
	this.frame_234 = function() {
		this.stop();
	}
	this.frame_239 = function() {
		playSound("questionAlert");
	}
	this.frame_279 = function() {
		this.stop();
	}
	this.frame_287 = function() {
		playSound("questionAlert");
	}
	this.frame_322 = function() {
		this.stop();
	}
	this.frame_330 = function() {
		playSound("questionAlert");
	}
	this.frame_365 = function() {
		this.stop();
	}
	this.frame_375 = function() {
		playSound("questionAlert");
	}
	this.frame_410 = function() {
		this.stop();
	}
	this.frame_420 = function() {
		playSound("questionAlert");
	}
	this.frame_455 = function() {
		this.stop();
	}
	this.frame_465 = function() {
		playSound("questionAlert");
	}
	this.frame_500 = function() {
		this.stop();
	}
	this.frame_508 = function() {
		playSound("questionAlert");
	}
	this.frame_543 = function() {
		this.stop();
	}
	this.frame_550 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_721 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(40).call(this.frame_144).wait(5).call(this.frame_149).wait(40).call(this.frame_189).wait(5).call(this.frame_194).wait(40).call(this.frame_234).wait(5).call(this.frame_239).wait(40).call(this.frame_279).wait(8).call(this.frame_287).wait(35).call(this.frame_322).wait(8).call(this.frame_330).wait(35).call(this.frame_365).wait(10).call(this.frame_375).wait(35).call(this.frame_410).wait(10).call(this.frame_420).wait(35).call(this.frame_455).wait(10).call(this.frame_465).wait(35).call(this.frame_500).wait(8).call(this.frame_508).wait(35).call(this.frame_543).wait(7).call(this.frame_550).wait(171).call(this.frame_721).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(618));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(550).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(618));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(677));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(590.5,156.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(618));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_3 = new lib.dialogue1a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(444.9,123.4,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},243).to({state:[]},264).wait(172));

	// avatar
	this.instance_4 = new lib.avatarBotsX("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.4,121.6,0.052,0.052);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},507).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(550).to({graphics:null,x:0,y:0}).wait(172));

	// actMc
	this.instance_5 = new lib.actMc1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,310);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc1_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,310);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc2_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,310);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc2_2();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,310);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,390);
	this.instance_9._off = true;

	this.instance_10 = new lib.actMc1copy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,390);
	this.instance_10._off = true;

	this.instance_11 = new lib.actMc1copy2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,390);
	this.instance_11._off = true;

	this.instance_12 = new lib.actMc2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,390);
	this.instance_12._off = true;

	this.instance_13 = new lib.actMc2copy();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,390);
	this.instance_13._off = true;

	this.instance_14 = new lib.actMc2copy2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,390);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(130).to({_off:false},0).to({y:0},14,cjs.Ease.cubicOut).to({_off:true},5).wait(573));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(175).to({_off:false},0).to({y:0},14,cjs.Ease.cubicOut).to({_off:true},5).wait(528));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(219).to({_off:false},0).to({y:0},15,cjs.Ease.cubicOut).to({_off:true},5).wait(483));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(264).to({_off:false},0).to({y:0},15,cjs.Ease.cubicOut).to({_off:true},7).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(309).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},1).wait(399));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(352).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},1).wait(356));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(397).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},1).wait(311));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(442).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},1).wait(266));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(487).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},1).wait(221));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(530).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},7).wait(172));

	// q
	this.instance_15 = new lib.mcQ7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(398.5,203,0.05,0.05);
	this.instance_15._off = true;

	this.instance_16 = new lib.mcQ();
	this.instance_16.parent = this;
	this.instance_16.setTransform(585,191.6,0.1,0.1);
	this.instance_16._off = true;

	this.instance_17 = new lib.mcQ2();
	this.instance_17.parent = this;
	this.instance_17.setTransform(585,191.6,0.1,0.1);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_15,this.instance_16,this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:377.3,y:197},21,cjs.Ease.elasticOut).wait(24).to({scaleX:0.05,scaleY:0.05,x:398.5,y:203},0).to({scaleX:1,scaleY:1,x:377.3},21,cjs.Ease.elasticOut).wait(24).to({scaleX:0.05,scaleY:0.05,x:398.5},0).to({scaleX:1,scaleY:1,x:377.3},21,cjs.Ease.elasticOut).wait(24).to({scaleX:0.05,scaleY:0.05,x:398.5},0).to({scaleX:1,scaleY:1,x:377.3},21,cjs.Ease.elasticOut).to({_off:true},26).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(287).to({_off:false},0).to({scaleX:1,scaleY:1,x:463.1,y:213.1},21,cjs.Ease.elasticOut).to({_off:true},15).wait(7).to({_off:false,scaleX:0.1,scaleY:0.1,x:585,y:191.6},0).to({scaleX:1,scaleY:1,x:463.1,y:213.1},21,cjs.Ease.elasticOut).to({_off:true},15).wait(9).to({_off:false,scaleX:0.1,scaleY:0.1,x:585,y:191.6},0).to({scaleX:1,scaleY:1,x:463.1,y:213.1},21,cjs.Ease.elasticOut).to({_off:true},15).wait(311));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(420).to({_off:false},0).to({scaleX:1,scaleY:1,x:463.1,y:213.1},21,cjs.Ease.elasticOut).to({_off:true},15).wait(9).to({_off:false,scaleX:0.1,scaleY:0.1,x:585,y:191.6},0).to({scaleX:1,scaleY:1,x:463.1,y:213.1},21,cjs.Ease.elasticOut).to({_off:true},15).wait(7).to({_off:false,scaleX:0.1,scaleY:0.1,x:585,y:191.6},0).to({scaleX:1,scaleY:1,x:463.1,y:213.1},21,cjs.Ease.elasticOut).to({_off:true},21).wait(172));

	// progress
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(594.3,78.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(607.3,78.5);

	this.prog3 = new lib.progress();
	this.prog3.name = "prog3";
	this.prog3.parent = this;
	this.prog3.setTransform(619.6,78.5);

	this.prog4 = new lib.progress();
	this.prog4.name = "prog4";
	this.prog4.parent = this;
	this.prog4.setTransform(631.9,78.5);

	var maskedShapeInstanceList = [this.prog1,this.prog2,this.prog3,this.prog4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog4},{t:this.prog3},{t:this.prog2},{t:this.prog1}]},99).to({state:[]},451).wait(172));

	// Flash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C5E5E5").s().p("Eg6gAAoIAAhPMB1BAAAIAABPg");
	this.shape.setTransform(407.5,397.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5E5E5").s().p("Eg6gAAqIAAhUMB1BAAAIAABUg");
	this.shape_1.setTransform(407.5,397.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C5E5E5").s().p("Eg6gAAxIAAhhMB1BAAAIAABhg");
	this.shape_2.setTransform(407.5,397.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5E5E5").s().p("Eg6gAA+IAAh7MB1BAAAIAAB7g");
	this.shape_3.setTransform(407.5,396.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C5E5E5").s().p("Eg6gABTIAAilMB1BAAAIAAClg");
	this.shape_4.setTransform(407.5,396.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C5E5E5").s().p("Eg6gAByIAAjjMB1BAAAIAADjg");
	this.shape_5.setTransform(407.5,395);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C5E5E5").s().p("Eg6gACdIAAk5MB1BAAAIAAE5g");
	this.shape_6.setTransform(407.5,393.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C5E5E5").s().p("Eg6gADXIAAmtMB1BAAAIAAGtg");
	this.shape_7.setTransform(407.5,391.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C5E5E5").s().p("Eg6gAEhIAApBMB1BAAAIAAJBg");
	this.shape_8.setTransform(407.5,388.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C5E5E5").s().p("Eg6gAF+IAAr7MB1BAAAIAAL7g");
	this.shape_9.setTransform(407.5,385.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C5E5E5").s().p("Eg6gAHvIAAvdMB1BAAAIAAPdg");
	this.shape_10.setTransform(407.5,381);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C5E5E5").s().p("Eg6gAJ3IAAztMB1BAAAIAATtg");
	this.shape_11.setTransform(407.5,376);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C5E5E5").s().p("Eg6gAMXIAA4tMB1BAAAIAAYtg");
	this.shape_12.setTransform(407.5,370.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C5E5E5").s().p("Eg6gAPSIAA+jMB1BAAAIAAejg");
	this.shape_13.setTransform(407.5,363.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C5E5E5").s().p("Eg6gASqMAAAglTMB1BAAAMAAAAlTg");
	this.shape_14.setTransform(407.5,355.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C5E5E5").s().p("Eg6gAWhMAAAgtBMB1BAAAMAAAAtBg");
	this.shape_15.setTransform(407.5,346.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C5E5E5").s().p("Eg6gAa4MAAAg1vMB1BAAAMAAAA1vg");
	this.shape_16.setTransform(407.5,336.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C5E5E5").s().p("Eg6gAfyMAAAg/jMB1BAAAMAAAA/jg");
	this.shape_17.setTransform(407.5,324.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C5E5E5").s().p("Eg6gAlRMAAAhKhMB1BAAAMAAABKhg");
	this.shape_18.setTransform(407.5,311.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C5E5E5").s().p("Eg6gArYMAAAhWuMB1BAAAMAAABWug");
	this.shape_19.setTransform(407.5,297.6);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(696));

	// bg
	this.instance_18 = new lib.Symbol2("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(394.4,296.6);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(20).to({_off:false},0).to({_off:true},530).wait(172));

	// bg
	this.instance_19 = new lib.Bitmap3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(722));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(203,65,1202,903);
// library properties:
lib.properties = {
	id: '97C298EB0FE8B14591D54AA479C6ADCF',
	width: 800,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/f3d1q8/Bitmap11.png?1527354436925", id:"Bitmap11"},
		{src:"images/f3d1q8/Bitmap14.png?1527354436925", id:"Bitmap14"},
		{src:"images/f3d1q8/Bitmap21.png?1527354436925", id:"Bitmap21"},
		{src:"images/f3d1q8/Bitmap22.png?1527354436925", id:"Bitmap22"},
		{src:"images/f3d1q8/Bitmap3.png?1527354436925", id:"Bitmap3"},
		{src:"images/f3d1q8/Bitmap4.png?1527354436925", id:"Bitmap4"},
		{src:"images/f3d1q8/Bitmap7.png?1527354436925", id:"Bitmap7"},
		{src:"images/f3d1q8/Bitmap9.png?1527354436925", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1527354436925", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1527354436925", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1527354436925", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1527354436925", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1527354436925", id:"submitAns"},
		{src:"sounds/suspense.mp3?1527354436925", id:"suspense"},
		{src:"sounds/timeout.mp3?1527354436925", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1527354436925", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1527354436925", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1527354436925", id:"an.ComboBox"}
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
an.compositions['97C298EB0FE8B14591D54AA479C6ADCF'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;