(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,309,352);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
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


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,341,299);


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
	this.myTxt = new cjs.Text("Master the basic knowledge of programming \nby answering these questions.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 389;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-229.7,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EggBAAAMBADAAA");
	this.shape.setTransform(-46.6,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A+qFEIAAl9IilACIClh7IAAiMMBADAAAIAAKC");
	this.shape_1.setTransform(-55.3,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+vFCIAAl+IikADICkh8IAAiMMBADAAAIAAKDg");
	this.shape_2.setTransform(-54.9,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,430.5,67.4), null);


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
	this.myTxt = new cjs.Text("Kuasai asas ilmu pengaturcaraan dengan\nmenjawab soalan-soalan ini.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 360;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-229.7,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A9rAAMA7XAAA");
	this.shape.setTransform(-61.6,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A8UFEIAAl9IilACIClh7IAAiMMA7XAAAIAAKC");
	this.shape_1.setTransform(-70.3,11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A8ZFCIAAl+IikADICkh8IAAiMMA7XAAAIAAKDg");
	this.shape_2.setTransform(-69.9,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,401.5,67.4), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-128.1,-174.6,0.918,0.918);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.1,-174.6,313,274.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-154.3,-175.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-154.3,-175.9,309,352), null);


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
					//$( "#dom_overlay_container" ).empty();
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


(lib.mcQ14 = function(mode,startPosition,loop) {
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

	// outlineshade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(-11,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_1.setTransform(-16.8,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_2.setTransform(-25.4,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(-32.4,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(-37.7,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_5.setTransform(-43.8,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_6.setTransform(-50,21.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_7.setTransform(-54.8,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(-62.2,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(-71.9,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(-85.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(-95,23.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(-101.5,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_13.setTransform(-107.4,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_14.setTransform(-113.2,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_15.setTransform(-117.5,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(-125.3,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_17.setTransform(-134.3,25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(326.3,1.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(317,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(307.3,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_21.setTransform(298.7,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_22.setTransform(289.8,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_23.setTransform(278.1,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_24.setTransform(266.8,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_25.setTransform(255.4,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(239.2,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(229.6,-2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(220.3,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_29.setTransform(210.6,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_30.setTransform(196.8,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_31.setTransform(188.8,-2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_32.setTransform(182.1,-2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_33.setTransform(177.3,-0.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_34.setTransform(168.2,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_35.setTransform(159.6,-0.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_36.setTransform(152.6,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_37.setTransform(147.3,-2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_38.setTransform(141.2,-0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_39.setTransform(130.8,-2.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_40.setTransform(126,-1.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_41.setTransform(121.4,-2.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_42.setTransform(116.1,-2.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(106.2,1.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_44.setTransform(96.9,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_45.setTransform(87.2,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAgBgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_46.setTransform(79.8,-0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_47.setTransform(77,-2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(70,-2.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_49.setTransform(56.6,-2.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_50.setTransform(47.6,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_51.setTransform(41.3,-2.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_52.setTransform(34.8,-0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgFAIg");
	this.shape_53.setTransform(25.7,-2.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_54.setTransform(13,-2.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_55.setTransform(3.2,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(-6.4,-2.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_57.setTransform(-12.9,-2.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_58.setTransform(-17.7,-1.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_59.setTransform(-29.6,-0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_60.setTransform(-39.2,-2.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_61.setTransform(-48.5,-0.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_62.setTransform(-58.2,-0.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_63.setTransform(-69.3,-0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_64.setTransform(-77.1,-0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_65.setTransform(-84.3,-1.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_66.setTransform(-91.7,-0.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_67.setTransform(-100.9,1.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_68.setTransform(-113,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_69.setTransform(-124.5,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA2g1IASAAIg7A4IA9A5g");
	this.shape_70.setTransform(-133.4,-2.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_71.setTransform(299.4,10.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_72.setTransform(289.6,9.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_73.setTransform(284.1,8.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_74.setTransform(229.1,10.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFACgGgBQgLAAgFgGg");
	this.shape_75.setTransform(218.2,9.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_76.setTransform(190.4,8.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_77.setTransform(186.6,8.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_78.setTransform(172.2,9.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_79.setTransform(139.6,10.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgjAxQALgEAGgDQAFgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_80.setTransform(121.6,12.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_81.setTransform(110.3,8.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_82.setTransform(87.1,10.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_83.setTransform(42.8,9.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_84.setTransform(35.5,10.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_85.setTransform(26.2,12.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_86.setTransform(2.6,10.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_87.setTransform(-5.7,10.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(-19.1,10.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_89.setTransform(-30.7,9.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_90.setTransform(-47.2,12.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_91.setTransform(-58.9,9.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_92.setTransform(-66.2,10.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_93.setTransform(-102.8,10.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_94.setTransform(-125,10.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAkg4IAQAAIgtBDIAAAug");
	this.shape_95.setTransform(-134.4,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69,p:{x:-124.5,y:-0.6}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63,p:{x:-69.3,y:-0.6}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:34.8,y:-0.6}},{t:this.shape_51},{t:this.shape_50,p:{x:47.6,y:-0.6}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:152.6,y:-0.6}},{t:this.shape_35,p:{x:159.6,y:-0.5}},{t:this.shape_34,p:{x:168.2,y:-0.6}},{t:this.shape_33},{t:this.shape_32,p:{x:182.1,y:-2.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:210.6,y:-0.6}},{t:this.shape_28,p:{x:220.3,y:-0.6}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:266.8,y:-0.6}},{t:this.shape_23,p:{x:278.1,y:-0.6}},{t:this.shape_22,p:{x:289.8,y:-0.6}},{t:this.shape_21,p:{x:298.7,y:-0.6}},{t:this.shape_20},{t:this.shape_19,p:{x:317,y:-0.6}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-125.3,y:23.3}},{t:this.shape_15,p:{x:-117.5,y:23.3}},{t:this.shape_14,p:{x:-113.2,y:21.7}},{t:this.shape_13,p:{x:-107.4,y:23.3}},{t:this.shape_12,p:{x:-101.5,y:21.7}},{t:this.shape_11,p:{x:-95,y:23.3}},{t:this.shape_10,p:{x:-85.4,y:23.3}},{t:this.shape_9,p:{x:-71.9,y:23.3}},{t:this.shape_8,p:{x:-62.2,y:23.3}},{t:this.shape_7},{t:this.shape_6,p:{x:-50,y:21.7}},{t:this.shape_5,p:{x:-43.8,y:23.4}},{t:this.shape_4,p:{x:-37.7,y:21.7}},{t:this.shape_3,p:{x:-32.4,y:23.3}},{t:this.shape_2,p:{x:-25.4,y:23.4}},{t:this.shape_1,p:{x:-16.8,y:23.3}},{t:this.shape,p:{x:-11,y:26.6}}]}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_35,p:{x:-115.8,y:10.5}},{t:this.shape_93},{t:this.shape_29,p:{x:-94.5,y:10.4}},{t:this.shape_28,p:{x:-84.8,y:10.4}},{t:this.shape_19,p:{x:-75.5,y:10.4}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_50,p:{x:-37.8,y:10.4}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_23,p:{x:14.2,y:10.4}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_24,p:{x:50.1,y:10.4}},{t:this.shape_63,p:{x:57.8,y:10.4}},{t:this.shape_5,p:{x:68.7,y:10.5}},{t:this.shape_32,p:{x:74.8,y:8.8}},{t:this.shape_36,p:{x:80.1,y:10.4}},{t:this.shape_82},{t:this.shape_34,p:{x:95.7,y:10.4}},{t:this.shape_14,p:{x:105.8,y:8.8}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_69,p:{x:130.4,y:10.4}},{t:this.shape_79},{t:this.shape_12,p:{x:150.3,y:8.8}},{t:this.shape_10,p:{x:156.8,y:10.4}},{t:this.shape_21,p:{x:165.5,y:10.4}},{t:this.shape_78},{t:this.shape_9,p:{x:179.7,y:10.4}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_11,p:{x:201.1,y:10.4}},{t:this.shape_8,p:{x:210.7,y:10.4}},{t:this.shape_75},{t:this.shape_6,p:{x:223,y:8.8}},{t:this.shape_74},{t:this.shape_4,p:{x:235.3,y:8.8}},{t:this.shape_15,p:{x:240.6,y:10.4}},{t:this.shape_2,p:{x:247.6,y:10.5}},{t:this.shape_13,p:{x:256.1,y:10.4}},{t:this.shape_1,p:{x:268.3,y:10.4}},{t:this.shape_52,p:{x:276.9,y:10.4}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_22,p:{x:310.9,y:10.4}},{t:this.shape_3,p:{x:319.4,y:10.4}},{t:this.shape_16,p:{x:326.1,y:10.4}},{t:this.shape,p:{x:332.3,y:13.7}}]},1).wait(1));

	// white
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#D40000").ss(4,2,0,3).p("EAmrAAAMgknAAAMgouAAA");
	this.shape_96.setTransform(91.6,42.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#D40000").ss(1,2,0,3).p("EgpAAE5IABgCIAPkJIBThLIhKhQIAMjOMAowAAAMAkmAAAIgmJyEApBAE3IgBAF");
	this.shape_97.setTransform(106.6,11.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F5F5F5").s().p("A0qE5IAQkIIBThLIhKhQIAMjOMAowAAAIgnJxg");
	this.shape_98.setTransform(-23.6,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]}).wait(2));

	// white
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FAFAFA").s().p("Egm8AE5IAJkEIBYhPIhJhQIAAgCIADgEQABgDAEhjIADhiMBNWAAAIgmJxg");
	this.shape_99.setTransform(93.6,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.8,-21.6,527.9,65.8);


(lib.mcQ13 = function(mode,startPosition,loop) {
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

	// outlineshade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgEAAgHQAAgGgEgFQgFgDgIAAQgLgBgLAHIAAgMIALgEIAMgCQANABAIAGQAJAIAAAKQAAAHgCAEIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(-17.4,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_1.setTransform(-26.5,24.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(-36.1,23.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(-45.4,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(-55.1,24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(-66.2,24.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(-74,24.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_7.setTransform(-81.2,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_8.setTransform(-88.6,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(-97.8,26.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(-109.9,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(-121.4,24.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_12.setTransform(-129.4,23);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_13.setTransform(331.4,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(324.4,2.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(315.1,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_16.setTransform(305.8,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(296.2,-0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(286.9,0.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_19.setTransform(280.4,-0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_20.setTransform(276.6,-0.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(270.3,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(258.9,0.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_23.setTransform(244.3,-0.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_24.setTransform(234.8,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_25.setTransform(227.3,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(219.9,0.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_27.setTransform(210.6,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_28.setTransform(198.4,-0.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_29.setTransform(191.7,-0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(184.7,0.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_31.setTransform(175.6,-0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(161.3,2.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(152,0.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_34.setTransform(142.3,0.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgjAxQALgDAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBYQgFANgJAGQgJAHgNACg");
	this.shape_35.setTransform(133.5,2.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(120,0.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_37.setTransform(113.1,0.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(104.6,0.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_39.setTransform(96.3,0.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_40.setTransform(83.3,-0.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_41.setTransform(73.6,0.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_42.setTransform(65.6,-0.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_43.setTransform(55.7,0.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_44.setTransform(46.4,0.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(36.8,0.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_46.setTransform(25.1,0.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(8.9,2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_48.setTransform(-0.4,0.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_49.setTransform(-10.1,0.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBYQgFANgJAGQgJAHgNACg");
	this.shape_50.setTransform(-18.9,2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_51.setTransform(-30.2,-0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_52.setTransform(-37.6,1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_53.setTransform(-45.6,-0.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_54.setTransform(-52.3,-0.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_55.setTransform(-56.6,0.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_56.setTransform(-64.4,0.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_57.setTransform(-73.3,-0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_58.setTransform(-87.6,0.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_59.setTransform(-94.5,0.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-103,0.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_61.setTransform(-110.4,-0.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(-117.9,0.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AAqA5IgMgdIg7AAIgMAdIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_63.setTransform(-128.4,-0.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAbIAAgDQAAgKADgIQAEgGAGgIIAIgMQACgEAAgGQAAgIgEgDQgFgFgIAAQgLABgLAGIAAgMIALgEQAGgCAGABQANgBAIAIQAJAGAAAMQAAAGgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAACg");
	this.shape_64.setTransform(333.2,9.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_65.setTransform(311.7,9.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_66.setTransform(295.1,12.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_67.setTransform(235.2,10.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_68.setTransform(226.4,12.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_69.setTransform(215.1,9.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_70.setTransform(208.6,10.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_71.setTransform(192.9,9.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_72.setTransform(185.6,10.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_73.setTransform(170.6,12.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_74.setTransform(156.8,10.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_75.setTransform(149.4,9.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIghhPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_76.setTransform(138.2,12.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_77.setTransform(128.9,10.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_78.setTransform(117.4,11);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_79.setTransform(101.2,9.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(92.1,10.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_81.setTransform(82.9,10.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_82.setTransform(73.3,12.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_83.setTransform(46.7,10.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_84.setTransform(29.7,12.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_85.setTransform(5,11);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_86.setTransform(-6.5,10.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_87.setTransform(-13,9.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_88.setTransform(-16.8,9.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_89.setTransform(-23.3,10.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_90.setTransform(-30.6,9.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_91.setTransform(-58.4,9.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_92.setTransform(-68.1,9.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_93.setTransform(-75.3,10.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_94.setTransform(-88.7,9.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_95.setTransform(-97.2,10.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_96.setTransform(-109.7,9.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AAhA5IghhcIggBcIgLAAIgnhxIANAAIAgBeIAhheIAJABIAhBdIAhheIAMAAIgnBxg");
	this.shape_97.setTransform(-123.3,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-87.6,y:0.9}},{t:this.shape_57},{t:this.shape_56,p:{x:-64.4,y:0.9}},{t:this.shape_55,p:{x:-56.6,y:0.9}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:83.3,y:-0.9}},{t:this.shape_39,p:{x:96.3,y:0.9}},{t:this.shape_38},{t:this.shape_37,p:{x:113.1,y:0.9}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:191.7,y:-0.7}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:270.3,y:0.9}},{t:this.shape_20},{t:this.shape_19,p:{x:280.4,y:-0.7}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:305.8,y:1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:331.4,y:-0.7}},{t:this.shape_12},{t:this.shape_11,p:{x:-121.4,y:24.8}},{t:this.shape_10,p:{x:-109.9,y:24.8}},{t:this.shape_9},{t:this.shape_8,p:{x:-88.6,y:24.9}},{t:this.shape_7},{t:this.shape_6,p:{x:-74,y:24.8}},{t:this.shape_5,p:{x:-66.2,y:24.8}},{t:this.shape_4},{t:this.shape_3,p:{x:-45.4,y:24.8}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_29,p:{x:-103.2,y:9.3}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_40,p:{x:-50.8,y:9.1}},{t:this.shape_56,p:{x:-41.8,y:10.9}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_19,p:{x:13.9,y:9.3}},{t:this.shape_3,p:{x:20.4,y:10.9}},{t:this.shape_84},{t:this.shape_13,p:{x:40.9,y:9.3}},{t:this.shape_83},{t:this.shape_58,p:{x:59.5,y:10.9}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_55,p:{x:178.6,y:10.9}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_21,p:{x:200.1,y:10.9}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_16,p:{x:244.4,y:11}},{t:this.shape_37,p:{x:252.5,y:10.9}},{t:this.shape_39,p:{x:263.2,y:10.9}},{t:this.shape_11,p:{x:271.5,y:10.9}},{t:this.shape_10,p:{x:283.1,y:10.9}},{t:this.shape_66},{t:this.shape_8,p:{x:304.4,y:11}},{t:this.shape_65},{t:this.shape_6,p:{x:319,y:10.9}},{t:this.shape_5,p:{x:326.7,y:10.9}},{t:this.shape_64}]},1).wait(1));

	// white
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#D40000").ss(4,2,0,3).p("EAokAAAIgDAAMgpIAAAMgn8AAA");
	this.shape_98.setTransform(103.7,42.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#D40000").ss(1,2,0,3).p("Ego1AE5IABgCIAPkJIBThLIhKhQIAMjOMAoIAAAMAo+AAAIgmJyIgBAF");
	this.shape_99.setTransform(105.5,11.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F5F5F5").s().p("A0VE5IAPkIIBThLIhJhQIAMjOMAoGAAAIgwJxg");
	this.shape_100.setTransform(-25.6,10.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]}).wait(2));

	// white
	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FAFAFA").s().p("EAkFAE5IoYAAIwrAAIjpAAIh8AAIzTAAIhVAAI5mAAIAFg7IABAAQABhSgBADIAAgHIgBAAIABgGIADhtIBXhPIhIhQIAAgCIACgEIACgJIAAgKIACgOIABgWIgChLIgCgEIAIhCIZlAAIAzAAISrAAIAoAAIB8AAIB0AAIB1AAIQrAAIIYAAIEtAAIgGCYIgNFCIgEABIgGBbIgGA7g");
	this.shape_101.setTransform(105.3,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_101).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.8,-21.6,525.8,65.8);


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

	// outlineshade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(312,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_1.setTransform(306.1,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_2.setTransform(298,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_3.setTransform(289.9,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_4.setTransform(281.8,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_5.setTransform(273.7,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_6.setTransform(265.6,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_7.setTransform(257.5,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_8.setTransform(249.4,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_9.setTransform(241.3,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_10.setTransform(233.2,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(219.9,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(211.3,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(202.4,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_14.setTransform(195,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(181.1,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_16.setTransform(169.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_17.setTransform(162.7,-2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_18.setTransform(155.7,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(146.1,-2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(132.6,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(123,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_22.setTransform(115,-2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(105.1,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(95.8,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_25.setTransform(86.6,-0.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(76.9,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_27.setTransform(70.4,-2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(63.5,-2.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(49.7,-2.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_30.setTransform(40.5,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_31.setTransform(32.5,-2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(23.1,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_33.setTransform(13.5,-2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_34.setTransform(4.3,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-4.6,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-13,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_37.setTransform(-21.6,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_38.setTransform(-35.5,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_39.setTransform(-45.1,-0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(-54.7,-2.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_41.setTransform(-65.9,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_42.setTransform(-71.2,-2.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_43.setTransform(-75,-2.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_44.setTransform(-81.9,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(-95.7,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_46.setTransform(-103.2,-1.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_47.setTransform(-108.3,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(-116.7,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_49.setTransform(-126.7,-2.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(265.7,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_51.setTransform(256.5,-2.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_52.setTransform(152.9,3.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(113.4,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_54.setTransform(96.4,-0.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(83.3,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_56.setTransform(56.4,-0.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_57.setTransform(38.1,-2.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_58.setTransform(19.9,-0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_59.setTransform(11.5,-0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_60.setTransform(3,1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_61.setTransform(-41.8,-1.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_62.setTransform(-55.4,-0.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_63.setTransform(-64.6,-2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_64.setTransform(-73.1,-0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_65.setTransform(-88.3,-0.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_66.setTransform(-99.9,-0.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgiA5IAAhxIBFAAIAAALIg4AAIAAAnIA1AAIAAALIg1AAIAAA0g");
	this.shape_67.setTransform(-112.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:-81.9}},{t:this.shape_43,p:{x:-75}},{t:this.shape_42},{t:this.shape_41,p:{x:-65.9}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-21.6}},{t:this.shape_36,p:{x:-13}},{t:this.shape_35,p:{x:-4.6}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:23.1}},{t:this.shape_31},{t:this.shape_30,p:{x:40.5}},{t:this.shape_29,p:{x:49.7}},{t:this.shape_28,p:{x:63.5}},{t:this.shape_27,p:{x:70.4}},{t:this.shape_26},{t:this.shape_25,p:{x:86.6}},{t:this.shape_24,p:{x:95.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:132.6}},{t:this.shape_19,p:{x:146.1}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:211.3}},{t:this.shape_11},{t:this.shape_10,p:{x:233.2}},{t:this.shape_9,p:{x:241.3}},{t:this.shape_8,p:{x:249.4}},{t:this.shape_7,p:{x:257.5}},{t:this.shape_6,p:{x:265.6}},{t:this.shape_5,p:{x:273.7}},{t:this.shape_4,p:{x:281.8}},{t:this.shape_3,p:{x:289.9}},{t:this.shape_2,p:{x:298}},{t:this.shape_1,p:{x:306.1}},{t:this.shape,p:{x:312}}]}).to({state:[{t:this.shape_67},{t:this.shape_43,p:{x:-106.3}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_41,p:{x:-46.9}},{t:this.shape_61},{t:this.shape_44,p:{x:-30.2}},{t:this.shape_24,p:{x:-20.5}},{t:this.shape_28,p:{x:-11.2}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_25,p:{x:28.9}},{t:this.shape_57},{t:this.shape_32,p:{x:47.7}},{t:this.shape_56},{t:this.shape_30,p:{x:64.7}},{t:this.shape_29,p:{x:73.9}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_36,p:{x:105}},{t:this.shape_53},{t:this.shape_19,p:{x:122.3}},{t:this.shape_27,p:{x:133.4}},{t:this.shape_20,p:{x:139.9}},{t:this.shape_52},{t:this.shape_10,p:{x:161}},{t:this.shape_9,p:{x:169.1}},{t:this.shape_8,p:{x:177.2}},{t:this.shape_7,p:{x:185.3}},{t:this.shape_6,p:{x:193.4}},{t:this.shape_5,p:{x:201.5}},{t:this.shape_4,p:{x:209.6}},{t:this.shape_3,p:{x:217.7}},{t:this.shape_2,p:{x:225.8}},{t:this.shape_1,p:{x:233.9}},{t:this.shape_37,p:{x:247.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_12,p:{x:274.6}},{t:this.shape_35,p:{x:283}},{t:this.shape,p:{x:289.2}}]},1).wait(1));

	// white
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#D40000").ss(4,2,0,3).p("EAl5AAAMgs3AAAI+6AA");
	this.shape_68.setTransform(86.8,18);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D40000").ss(1,2,0,3).p("EgmKADAIAJhnIBYhQIhJhPIALh6IfkAAMAm6AAAIFUAA");
	this.shape_69.setTransform(88.6,-1.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F5F5F5").s().p("AwCDAIAJhnIBXhQIhIhPIALh5IfiAAIhMF/g");
	this.shape_70.setTransform(-53,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]}).wait(2));

	// white
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FAFAFA").s().p("AcQDAMgnbAAAIl+AAIjaAAIxnAAIAJhnIBYhQIhJhPIALh5IREAAIDaAAIF+AAMAn+AAAIJYAAIgjF/g");
	this.shape_71.setTransform(88.6,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_71).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,491.6,41.6);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(395.4,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_1.setTransform(389,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(379.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(369.6,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(360.3,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(351.4,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(344.6,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_7.setTransform(333,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_8.setTransform(324,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_9.setTransform(317.1,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(308.6,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(294.8,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(286.2,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(277.3,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_14.setTransform(268.1,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_15.setTransform(258.3,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_16.setTransform(249.2,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_17.setTransform(235.3,-2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(226,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_19.setTransform(218.6,-1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(211.1,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(201.9,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_22.setTransform(193.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgWAFIAAgKIAtAAIAAAKg");
	this.shape_23.setTransform(186,-0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_24.setTransform(178,-2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(168.7,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_26.setTransform(161.2,-1.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(153.8,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(144.6,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_29.setTransform(136.2,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(123.3,-2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(113.5,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(107.1,-2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(100.1,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_34.setTransform(90.5,-2.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_35.setTransform(80.9,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(67.1,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_37.setTransform(58.3,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_38.setTransform(49,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgTBHIAAgMIAMABQAHABADgFQAEgEAAgMIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgBg");
	this.shape_39.setTransform(41.1,-0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_40.setTransform(30.3,-0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_41.setTransform(20.6,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(11,-2.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgEAoIAAgjIgiAAIAAgJIAiAAIAAgiIAJAAIAAAiIAjAAIAAAJIgjAAIAAAjg");
	this.shape_43.setTransform(-2.5,-1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgEAoIAAgjIgjAAIAAgJIAjAAIAAgiIAJAAIAAAiIAjAAIAAAJIgjAAIAAAjg");
	this.shape_44.setTransform(-12.1,-1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_45.setTransform(-22.3,-2.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAFg");
	this.shape_46.setTransform(-34,3.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_47.setTransform(-41.2,-2.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgGA5IAAhxIAMAAIAABxg");
	this.shape_48.setTransform(-48.8,-2.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAHAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAFAGQAGAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_49.setTransform(-55.8,-2.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_50.setTransform(-66.7,-2.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAHQgFAGgIAEQAKABAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaABIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_51.setTransform(-77.8,-2.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_52.setTransform(-89.6,-2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_53.setTransform(-96.5,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_54.setTransform(-105.7,-0.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_55.setTransform(-114.4,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_56.setTransform(-120.2,-2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgFA5IgyhxIAOAAIApBhIAqhhIANAAIgxBxg");
	this.shape_57.setTransform(-127.6,-2.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_58.setTransform(344.8,1.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_59.setTransform(335.2,-0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_60.setTransform(326,-0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_61.setTransform(316.3,1.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_62.setTransform(282.9,-2.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_63.setTransform(276.6,-0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_64.setTransform(259.4,-0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_65.setTransform(253.2,-2.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_66.setTransform(237.5,-0.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_67.setTransform(210.6,-2.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_68.setTransform(182.3,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_69.setTransform(176.1,-2.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_70.setTransform(169.5,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_71.setTransform(157.5,-0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_72.setTransform(136.6,-0.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(128,-0.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_74.setTransform(115.1,-0.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_75.setTransform(77.3,-0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_76.setTransform(49,-2.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_77.setTransform(-29.8,-2.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAIAHIgGAKQgIgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_78.setTransform(-36.8,-2.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_79.setTransform(-70.6,-2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_80.setTransform(-77.5,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57,p:{x:-127.6}},{t:this.shape_56,p:{x:-120.2}},{t:this.shape_55,p:{x:-114.4}},{t:this.shape_54,p:{x:-105.7}},{t:this.shape_53,p:{x:-96.5}},{t:this.shape_52,p:{x:-89.6}},{t:this.shape_51,p:{x:-77.8}},{t:this.shape_50,p:{x:-66.7}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-41.2}},{t:this.shape_46,p:{x:-34}},{t:this.shape_45,p:{x:-22.3}},{t:this.shape_44,p:{x:-12.1}},{t:this.shape_43,p:{x:-2.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:41.1}},{t:this.shape_38},{t:this.shape_37,p:{x:58.3}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:107.1}},{t:this.shape_31,p:{x:113.5}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:186}},{t:this.shape_22},{t:this.shape_21,p:{x:201.9}},{t:this.shape_20,p:{x:211.1}},{t:this.shape_19},{t:this.shape_18,p:{x:226}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:277.3}},{t:this.shape_12,p:{x:286.2}},{t:this.shape_11,p:{x:294.8}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:324}},{t:this.shape_7,p:{x:333}},{t:this.shape_6,p:{x:344.6}},{t:this.shape_5,p:{x:351.4}},{t:this.shape_4,p:{x:360.3}},{t:this.shape_3},{t:this.shape_2,p:{x:379.2}},{t:this.shape_1},{t:this.shape,p:{x:395.4}}]}).to({state:[{t:this.shape_57,p:{x:-108.6}},{t:this.shape_56,p:{x:-101.2}},{t:this.shape_55,p:{x:-95.4}},{t:this.shape_54,p:{x:-86.7}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_51,p:{x:-58.8}},{t:this.shape_50,p:{x:-47.7}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_47,p:{x:-22.2}},{t:this.shape_46,p:{x:-15}},{t:this.shape_45,p:{x:-3.3}},{t:this.shape_44,p:{x:6.9}},{t:this.shape_43,p:{x:16.5}},{t:this.shape_53,p:{x:30}},{t:this.shape_20,p:{x:39.7}},{t:this.shape_76},{t:this.shape_39,p:{x:60.1}},{t:this.shape_13,p:{x:68}},{t:this.shape_75},{t:this.shape_11,p:{x:86.1}},{t:this.shape_8,p:{x:99.9}},{t:this.shape_6,p:{x:108.4}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_31,p:{x:145.5}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_12,p:{x:190.6}},{t:this.shape_21,p:{x:203.4}},{t:this.shape_67},{t:this.shape_52,p:{x:219.5}},{t:this.shape_18,p:{x:225.9}},{t:this.shape_66},{t:this.shape_23,p:{x:247.8}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_37,p:{x:268}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_32,p:{x:290.9}},{t:this.shape_2,p:{x:297.3}},{t:this.shape_4,p:{x:307}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_5,p:{x:354.2}},{t:this.shape_7,p:{x:362.5}},{t:this.shape,p:{x:368.3}}]},1).wait(1));

	// outlineshade
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#D40000").ss(4,2,0,3).p("EAsnAAAMg6TAAAI+6AA");
	this.shape_81.setTransform(129.8,18);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#D40000").ss(1,2,0,3).p("Egs4ADAIAJhnIBYhQIhJhPIALh6IfkAAMA5qAAAIgjGA");
	this.shape_82.setTransform(131.6,-1.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F5F5F5").s().p("AwCDAIAJhnIBXhQIhIhPIALh5IfiAAIhMF/g");
	this.shape_83.setTransform(-53,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]}).wait(2));

	// white
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FAFAFA").s().p("Ax2DAIAAl/MA+sAAAIgjF/gEgs1ADAIAJhnIBXhQIhIhPIALh5IUdAAIAAF/g");
	this.shape_84.setTransform(131.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_84).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,577.7,41.6);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(300.9,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIAKAAQAJATAFARQADARAAASQAAASgDASQgFASgJARg");
	this.shape_1.setTransform(296,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgVAAgMgMg");
	this.shape_2.setTransform(288.2,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQASAAAJAJQAKAIAAAPQAAAPgKAJQgJAHgSAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgFQAGgGABgKQgBgLgGgEQgHgGgMAAIgeAAg");
	this.shape_3.setTransform(277.5,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_4.setTransform(266.6,16.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_5.setTransform(259.1,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(247,18.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(240.5,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_8.setTransform(234.6,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_9.setTransform(226.3,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(214.9,18.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(201.8,16.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_12.setTransform(197,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_13.setTransform(192.4,16.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_14.setTransform(186.3,18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_15.setTransform(180.1,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFABQgMgBgFgGg");
	this.shape_16.setTransform(175.3,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_17.setTransform(169.2,16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_18.setTransform(159.3,18.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_19.setTransform(145.9,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgFABgFABQgMgBgFgGg");
	this.shape_20.setTransform(138.4,17.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(130.7,18.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(122.1,18.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_23.setTransform(108.9,18.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(99.3,16.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(89.7,18.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_26.setTransform(80.5,20);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_27.setTransform(71.2,18.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_28.setTransform(63.4,16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_29.setTransform(51,16.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_30.setTransform(41.5,18.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_31.setTransform(34,18.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_32.setTransform(28.5,18.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_33.setTransform(21.5,18.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(13.7,18.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_35.setTransform(2.3,18.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_36.setTransform(-13.6,18.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_37.setTransform(-23.3,18.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_38.setTransform(-32.9,18.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGABQgMgBgFgGg");
	this.shape_39.setTransform(-40.3,17.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(-48.1,18.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgkAwQAMgCAFgEQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_41.setTransform(-56.9,20.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_42.setTransform(-65.9,18.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_43.setTransform(-74.8,18.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_44.setTransform(-83.8,20);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_45.setTransform(-97.6,20);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_46.setTransform(-107.6,18.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_47.setTransform(-114.1,16.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_48.setTransform(-118.9,17.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_49.setTransform(-125.9,18.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_50.setTransform(-134.3,18.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_51.setTransform(270.6,-5.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_52.setTransform(260.9,-5.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_53.setTransform(251.3,-7.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_54.setTransform(238.5,-1.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_55.setTransform(230.4,-1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_56.setTransform(222.3,-1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_57.setTransform(214.2,-1.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_58.setTransform(206.1,-1.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_59.setTransform(198,-1.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_60.setTransform(189.9,-1.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_61.setTransform(181.8,-1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_62.setTransform(173.7,-1.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_63.setTransform(165.6,-1.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_64.setTransform(157.5,-1.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_65.setTransform(142.2,-5.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_66.setTransform(130.2,-5.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_67.setTransform(123.7,-7.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_68.setTransform(116.8,-5.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_69.setTransform(107.2,-7.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_70.setTransform(94.4,-5.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_71.setTransform(88.6,-7.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_72.setTransform(84.8,-7.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_73.setTransform(78.2,-5.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_74.setTransform(70.7,-6.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_75.setTransform(66.1,-7.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_76.setTransform(59.2,-7.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_77.setTransform(45.7,-5.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_78.setTransform(39.2,-7.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_79.setTransform(33.2,-5.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_80.setTransform(25,-5.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_81.setTransform(13.5,-5.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_82.setTransform(-2.7,-5.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_83.setTransform(-11.3,-5.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_84.setTransform(-20.2,-5.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_85.setTransform(-29.4,-7.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_86.setTransform(-39.2,-5.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_87.setTransform(-48.3,-7.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_88.setTransform(-62.3,-5.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_89.setTransform(-71.9,-5.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_90.setTransform(-81.5,-5.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_91.setTransform(-89,-6.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_92.setTransform(-96.7,-5.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgjAxQALgDAGgFQAFgEAFgIIACgIIgihOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_93.setTransform(-105.5,-3.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_94.setTransform(-114.5,-5.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_95.setTransform(-123.5,-5.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQARAAALAIQAJAJABAPQgBAPgJAIQgLAIgRAAIgfAAIAAAygAgbgDIAeAAQANAAAGgGQAGgFAAgKQAAgLgGgFQgGgFgNAAIgeAAg");
	this.shape_96.setTransform(-132.7,-7.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgOBHQAJgTADgSQADgRAAgRQAAgQgDgSQgDgQgJgVIALAAQAJATAFARQADARAAASQAAASgDASQgFASgJARg");
	this.shape_97.setTransform(258.4,18.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_98.setTransform(250.6,16.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQARAAALAJQAJAIABAPQgBAPgJAJQgLAHgRAAIgfAAIAAAygAgbgDIAeAAQANAAAGgFQAGgGAAgKQAAgLgGgEQgGgGgNAAIgeAAg");
	this.shape_99.setTransform(239.9,16.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgjAwQALgCAGgEQAFgFAFgJIADgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_100.setTransform(209.9,20.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_101.setTransform(174.6,18.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(165.4,18.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_103.setTransform(130.2,16.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_104.setTransform(121.7,18.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_105.setTransform(71.3,18.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_106.setTransform(63.9,17.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_107.setTransform(31.7,16.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_108.setTransform(18,18.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_109.setTransform(7.5,17.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFABQgMgBgFgGg");
	this.shape_110.setTransform(-38.9,17.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_111.setTransform(-73.6,16.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_112.setTransform(-82.1,18.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_113.setTransform(-113.7,16.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_114.setTransform(164.7,-6.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_115.setTransform(155.8,-5.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_116.setTransform(145.4,-5.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_117.setTransform(129.9,-5.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_118.setTransform(123.2,-5.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_119.setTransform(101.6,-5.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_120.setTransform(92.2,-3.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_121.setTransform(82.6,-5.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_122.setTransform(63.7,-3.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_123.setTransform(38.3,-7.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_124.setTransform(27.8,-5.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_125.setTransform(-2.8,-5.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_126.setTransform(-12,-5.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_127.setTransform(-39.5,-5.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_128.setTransform(-70.4,-5.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_129.setTransform(-79.4,-5.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_130.setTransform(-102.1,-5.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_131.setTransform(-109.4,-6.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_132.setTransform(-117.1,-5.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_133.setTransform(-124.6,-6.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAIAHIgGAKQgIgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_134.setTransform(-132.2,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95,p:{x:-123.5}},{t:this.shape_94,p:{x:-114.5}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:-89}},{t:this.shape_90},{t:this.shape_89,p:{x:-71.9}},{t:this.shape_88,p:{x:-62.3}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-29.4}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:13.5}},{t:this.shape_80,p:{x:25,y:-5.6}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:45.7}},{t:this.shape_76},{t:this.shape_75,p:{x:66.1}},{t:this.shape_74,p:{x:70.7}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:88.6}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:142.2}},{t:this.shape_64,p:{x:157.5}},{t:this.shape_63,p:{x:165.6}},{t:this.shape_62,p:{x:173.7}},{t:this.shape_61,p:{x:181.8}},{t:this.shape_60,p:{x:189.9}},{t:this.shape_59,p:{x:198}},{t:this.shape_58,p:{x:206.1}},{t:this.shape_57,p:{x:214.2}},{t:this.shape_56,p:{x:222.3}},{t:this.shape_55,p:{x:230.4}},{t:this.shape_54,p:{x:238.5}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:270.6}},{t:this.shape_50,p:{x:-134.3,y:18.3}},{t:this.shape_49,p:{x:-125.9}},{t:this.shape_48},{t:this.shape_47,p:{x:-114.1,y:16.7}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:-74.8}},{t:this.shape_42,p:{x:-65.9}},{t:this.shape_41},{t:this.shape_40,p:{x:-48.1}},{t:this.shape_39,p:{x:-40.3}},{t:this.shape_38,p:{x:-32.9,y:18.3}},{t:this.shape_37,p:{x:-23.3}},{t:this.shape_36,p:{x:-13.6}},{t:this.shape_35,p:{x:2.3}},{t:this.shape_34,p:{x:13.7}},{t:this.shape_33,p:{x:21.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:71.2}},{t:this.shape_26},{t:this.shape_25,p:{x:89.7}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:122.1}},{t:this.shape_21,p:{x:130.7}},{t:this.shape_20},{t:this.shape_19,p:{x:145.9,y:18.4}},{t:this.shape_18,p:{x:159.3}},{t:this.shape_17},{t:this.shape_16,p:{x:175.3}},{t:this.shape_15,p:{x:180.1,y:16.7}},{t:this.shape_14,p:{x:186.3}},{t:this.shape_13,p:{x:192.4}},{t:this.shape_12,p:{x:197}},{t:this.shape_11,p:{x:201.8}},{t:this.shape_10,p:{x:214.9}},{t:this.shape_9,p:{x:226.3}},{t:this.shape_8,p:{x:234.6}},{t:this.shape_7,p:{x:240.5}},{t:this.shape_6,p:{x:247}},{t:this.shape_5,p:{x:259.1}},{t:this.shape_4,p:{x:266.6}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:300.9}}]}).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_81,p:{x:-90.8}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_91,p:{x:-63}},{t:this.shape_50,p:{x:-56.2,y:-5.6}},{t:this.shape_75,p:{x:-46}},{t:this.shape_127},{t:this.shape_65,p:{x:-23.6}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_85,p:{x:5.7}},{t:this.shape_71,p:{x:12.2}},{t:this.shape_94,p:{x:18.7}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_89,p:{x:44.7}},{t:this.shape_88,p:{x:54.4}},{t:this.shape_122},{t:this.shape_19,p:{x:73.4,y:-5.5}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_38,p:{x:114.7,y:-5.6}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_47,p:{x:160.1,y:-7.2}},{t:this.shape_114},{t:this.shape_74,p:{x:170.3}},{t:this.shape_95,p:{x:177.5}},{t:this.shape_77,p:{x:186.5}},{t:this.shape_15,p:{x:197.3,y:-7.2}},{t:this.shape_51,p:{x:203.8}},{t:this.shape_64,p:{x:216.8}},{t:this.shape_63,p:{x:224.9}},{t:this.shape_62,p:{x:233}},{t:this.shape_61,p:{x:241.1}},{t:this.shape_60,p:{x:249.2}},{t:this.shape_59,p:{x:257.3}},{t:this.shape_58,p:{x:265.4}},{t:this.shape_57,p:{x:273.5}},{t:this.shape_56,p:{x:281.6}},{t:this.shape_55,p:{x:289.7}},{t:this.shape_54,p:{x:297.8}},{t:this.shape_40,p:{x:-132.7}},{t:this.shape_42,p:{x:-123}},{t:this.shape_113},{t:this.shape_80,p:{x:-100.1,y:18.3}},{t:this.shape_37,p:{x:-91.2}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_22,p:{x:-60.8}},{t:this.shape_12,p:{x:-54.1}},{t:this.shape_25,p:{x:-46.6}},{t:this.shape_110},{t:this.shape_49,p:{x:-31.6}},{t:this.shape_35,p:{x:-20.3}},{t:this.shape_43,p:{x:-8.9}},{t:this.shape_36,p:{x:0.1}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_34,p:{x:24.8}},{t:this.shape_107},{t:this.shape_27,p:{x:38.9}},{t:this.shape_33,p:{x:46.6}},{t:this.shape_8,p:{x:52.9}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_21,p:{x:84.7}},{t:this.shape_10,p:{x:100.9}},{t:this.shape_18,p:{x:112.5}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_13,p:{x:136.7}},{t:this.shape_6,p:{x:143.2}},{t:this.shape_9,p:{x:152.3}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_39,p:{x:181.1}},{t:this.shape_11,p:{x:185.9}},{t:this.shape_14,p:{x:192}},{t:this.shape_7,p:{x:198.2}},{t:this.shape_16,p:{x:202.8}},{t:this.shape_100},{t:this.shape_5,p:{x:221.5}},{t:this.shape_4,p:{x:229}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape,p:{x:263.3}}]},1).wait(1));

	// outlineshade
	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#D40000").ss(4,2,0,3).p("EAl4AAAMgjMAAAMgojAAA");
	this.shape_135.setTransform(79.3,37);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#D40000").ss(1,2,0,3).p("EgmUAE4IAVjfIBXhQIhIhPIAXjyMApMAAAMAiiAAAIg7Jw");
	this.shape_136.setTransform(82.2,5.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F5F5F5").s().p("A1DE5IAVjgIBXhQIhIhPIAXjyMApMAAAIhkJxg");
	this.shape_137.setTransform(-28.3,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]}).wait(2));

	// white
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FAFAFA").s().p("EgmRAE5IAUjgIBYhQIhIhPIAWjyMBLpAAAIg6Jxg");
	this.shape_138.setTransform(82,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_138).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165.1,-26.6,493.7,65.6);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(106.3,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_1.setTransform(100.4,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_2.setTransform(92.3,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_3.setTransform(84.2,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_4.setTransform(76.1,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_5.setTransform(68,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_6.setTransform(59.9,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_7.setTransform(51.8,3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_8.setTransform(43.7,3.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_9.setTransform(35.6,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_10.setTransform(27.5,3.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_11.setTransform(19.4,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_12.setTransform(6.5,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(-3.2,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_14.setTransform(-9.7,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_15.setTransform(-16.6,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_16.setTransform(-23.1,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(-33.9,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_18.setTransform(-40.4,-2.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_19.setTransform(-46.4,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(-54.6,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_21.setTransform(-66.1,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(-82.3,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_23.setTransform(-90.9,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(-99.8,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_25.setTransform(-109,-2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(-118.8,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAHQgFAGgIAEQAKABAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaABIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_27.setTransform(-128.6,-2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(-11.9,1.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_29.setTransform(-30.7,-0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(-40.4,1.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_31.setTransform(-65.8,-2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_32.setTransform(-76.3,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-85.4,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_34.setTransform(-98.4,-2.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_35.setTransform(-106.9,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AApA5IAAhUIgkBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_36.setTransform(-127.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26,p:{x:-118.8}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-82.3}},{t:this.shape_21},{t:this.shape_20,p:{x:-54.6}},{t:this.shape_19,p:{x:-46.4}},{t:this.shape_18,p:{x:-40.4}},{t:this.shape_17,p:{x:-33.9}},{t:this.shape_16,p:{x:-23.1}},{t:this.shape_15,p:{x:-16.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:27.5}},{t:this.shape_9,p:{x:35.6}},{t:this.shape_8,p:{x:43.7}},{t:this.shape_7,p:{x:51.8}},{t:this.shape_6,p:{x:59.9}},{t:this.shape_5,p:{x:68}},{t:this.shape_4,p:{x:76.1}},{t:this.shape_3,p:{x:84.2}},{t:this.shape_2,p:{x:92.3}},{t:this.shape_1,p:{x:100.4}},{t:this.shape,p:{x:106.3}}]}).to({state:[{t:this.shape_36},{t:this.shape_26,p:{x:-116.1}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_18,p:{x:-91.9}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_15,p:{x:-59.4}},{t:this.shape_17,p:{x:-49.7}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_22,p:{x:-21.5}},{t:this.shape_28},{t:this.shape_20,p:{x:-2.5}},{t:this.shape_16,p:{x:8}},{t:this.shape_19,p:{x:13.8}},{t:this.shape_10,p:{x:26.1}},{t:this.shape_9,p:{x:34.2}},{t:this.shape_8,p:{x:42.3}},{t:this.shape_7,p:{x:50.4}},{t:this.shape_6,p:{x:58.5}},{t:this.shape_5,p:{x:66.6}},{t:this.shape_4,p:{x:74.7}},{t:this.shape_3,p:{x:82.8}},{t:this.shape_2,p:{x:90.9}},{t:this.shape_1,p:{x:99}},{t:this.shape,p:{x:104.8}}]},1).wait(1));

	// outlineshade
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#D40000").ss(4,2,0,3).p("AWiAAI6kAAIyfAA");
	this.shape_37.setTransform(-11.5,18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#D40000").ss(1,2,0,3).p("A2zDAIAJhnIBYhQIhJhPIALh6ISoAAIabAAIgjGA");
	this.shape_38.setTransform(-9.7,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F5F5F5").s().p("AplDAIAJhnIBYhQIhIhPIALh5ISmAAIgsF/g");
	this.shape_39.setTransform(-94.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(2));

	// white
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FAFAFA").s().p("A2zDAIAJhnIBYhQIhIhPIALh5MAtCAAAIgjF/g");
	this.shape_40.setTransform(-9.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,295,41.6);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(290.2,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(286,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_2.setTransform(278.3,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_3.setTransform(271,22.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_4.setTransform(263.7,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_5.setTransform(254.4,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(242.4,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(230.8,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_8.setTransform(222.8,21.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(209.1,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(199.4,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(189.8,25.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(180.5,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(171.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(162.1,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_15.setTransform(151.5,21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(145.5,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(136.6,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_18.setTransform(128.6,21.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_19.setTransform(121.9,21.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(115.2,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_21.setTransform(106,23.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(94.3,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(82.7,23.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_24.setTransform(74.7,21.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_25.setTransform(67.5,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(59.8,23.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_27.setTransform(50.9,21.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(36.6,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_29.setTransform(30.1,21.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_30.setTransform(24.2,23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_31.setTransform(15.6,23.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(6.3,23.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(-3.4,23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_34.setTransform(-15,23.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(-30.9,23.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_36.setTransform(-40.6,23.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_37.setTransform(-48.6,21.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_38.setTransform(-55.8,23.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_39.setTransform(-64.2,23.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_40.setTransform(-73.5,23.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_41.setTransform(-82.5,23.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_42.setTransform(-91.4,21.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_43.setTransform(-103.5,23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-114.8,23.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_45.setTransform(-126.3,23.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(215.2,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(205.9,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(196.3,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_49.setTransform(187.5,1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(174,-2.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_51.setTransform(164.8,-0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_52.setTransform(156.8,-2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_53.setTransform(143.1,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_54.setTransform(133.4,-0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(123.8,-2.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_56.setTransform(113.2,-2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_57.setTransform(106.7,-0.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_58.setTransform(97.6,-2.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_59.setTransform(85.4,-0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_60.setTransform(76.6,-2.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_61.setTransform(70.6,-0.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAFg");
	this.shape_62.setTransform(60.6,3.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_63.setTransform(54.1,-0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_64.setTransform(44.4,-0.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_65.setTransform(34.8,-0.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_66.setTransform(27.4,-1.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_67.setTransform(19.6,-0.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_68.setTransform(11.6,-2.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_69.setTransform(4.4,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_70.setTransform(-3.3,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_71.setTransform(-12.3,1.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_72.setTransform(-26.2,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_73.setTransform(-35.9,-0.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_74.setTransform(-42.3,-2.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_75.setTransform(-48.9,-0.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_76.setTransform(-58.1,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_77.setTransform(-70.2,-0.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_78.setTransform(-81.8,-0.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_79.setTransform(-89.8,-2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_80.setTransform(-103.5,-0.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_81.setTransform(-111,-1.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_82.setTransform(-118.7,-0.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAHAHIgFAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_83.setTransform(-128.2,-2.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_84.setTransform(80.8,22.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_85.setTransform(32.2,23.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_86.setTransform(19.3,21.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_87.setTransform(11.7,22.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_88.setTransform(-1.8,23.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_89.setTransform(-24.5,22.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_90.setTransform(-40.6,23.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_91.setTransform(-108.2,23.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_92.setTransform(-128.5,22.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_93.setTransform(266.9,-0.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_94.setTransform(243.6,-0.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_95.setTransform(234.4,-2.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_96.setTransform(218.5,-0.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_97.setTransform(200.5,-2.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_98.setTransform(178.1,-1.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_99.setTransform(161.2,-2.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_100.setTransform(153.6,-1.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_101.setTransform(125,-2.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(115.8,-0.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_103.setTransform(107.5,-0.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_104.setTransform(75.2,-0.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_105.setTransform(62.4,-0.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_106.setTransform(56.6,-2.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_107.setTransform(50.1,-0.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgkAwQAMgDAGgDQAFgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_108.setTransform(17.6,1.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_109.setTransform(9.3,-0.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_110.setTransform(-6.5,-0.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_111.setTransform(-30.4,-0.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_112.setTransform(-41.9,-0.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_113.setTransform(-55.9,-2.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_114.setTransform(-63.1,-0.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_115.setTransform(-95.3,-0.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_116.setTransform(-125.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:-48.9,y:-0.5}},{t:this.shape_74,p:{x:-42.3}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-12.3}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:19.6}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:60.6}},{t:this.shape_61,p:{x:70.6}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57,p:{x:106.7}},{t:this.shape_56},{t:this.shape_55,p:{x:123.8}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:164.8,y:-0.6}},{t:this.shape_50,p:{x:174}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:215.2}},{t:this.shape_45,p:{x:-126.3,y:23.3}},{t:this.shape_44},{t:this.shape_43,p:{x:-103.5,y:23.3}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-55.8,y:23.3}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-15}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:15.6,y:23.4}},{t:this.shape_30,p:{x:24.2,y:23.3}},{t:this.shape_29},{t:this.shape_28,p:{x:36.6}},{t:this.shape_27,p:{x:50.9,y:21.6}},{t:this.shape_26,p:{x:59.8,y:23.3}},{t:this.shape_25,p:{x:67.5,y:23.3}},{t:this.shape_24},{t:this.shape_23,p:{x:82.7}},{t:this.shape_22,p:{x:94.3}},{t:this.shape_21,p:{x:106}},{t:this.shape_20,p:{x:115.2,y:23.3}},{t:this.shape_19,p:{x:121.9}},{t:this.shape_18},{t:this.shape_17,p:{x:136.6,y:23.3}},{t:this.shape_16,p:{x:145.5}},{t:this.shape_15,p:{x:151.5}},{t:this.shape_14},{t:this.shape_13,p:{x:171.5}},{t:this.shape_12,p:{x:180.5,y:23.3}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:209.1}},{t:this.shape_8},{t:this.shape_7,p:{x:230.8}},{t:this.shape_6,p:{x:242.4}},{t:this.shape_5,p:{x:254.4}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:278.3}},{t:this.shape_1,p:{x:286}},{t:this.shape,p:{x:290.2}}]}).to({state:[{t:this.shape_116},{t:this.shape_46,p:{x:-110.7}},{t:this.shape_38,p:{x:-102.2,y:-0.6}},{t:this.shape_115},{t:this.shape_31,p:{x:-86.1,y:-0.5}},{t:this.shape_71,p:{x:-76.5}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_25,p:{x:-22.4,y:-0.6}},{t:this.shape_50,p:{x:-15.5}},{t:this.shape_110},{t:this.shape_62,p:{x:-0.7}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_45,p:{x:28.8,y:-0.6}},{t:this.shape_27,p:{x:41,y:-2.3}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_20,p:{x:84.8,y:-0.6}},{t:this.shape_55,p:{x:94.1}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_26,p:{x:134.4,y:-0.6}},{t:this.shape_61,p:{x:142.6}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_67,p:{x:170.4}},{t:this.shape_98},{t:this.shape_17,p:{x:189.8,y:-0.6}},{t:this.shape_74,p:{x:196.7}},{t:this.shape_97},{t:this.shape_57,p:{x:207}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_43,p:{x:255.2,y:-0.6}},{t:this.shape_93},{t:this.shape_12,p:{x:276.5,y:-0.6}},{t:this.shape_30,p:{x:285.2,y:-0.6}},{t:this.shape_92},{t:this.shape_51,p:{x:-121.1,y:23.3}},{t:this.shape_91},{t:this.shape_23,p:{x:-99.8}},{t:this.shape_34,p:{x:-88.3}},{t:this.shape_22,p:{x:-74.2}},{t:this.shape_21,p:{x:-62.5}},{t:this.shape_9,p:{x:-53.3}},{t:this.shape_19,p:{x:-46.6}},{t:this.shape_90},{t:this.shape_28,p:{x:-32.3}},{t:this.shape_89},{t:this.shape_13,p:{x:-17.3}},{t:this.shape_88},{t:this.shape_15,p:{x:7.1}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_7,p:{x:40.6}},{t:this.shape_6,p:{x:52.1}},{t:this.shape_5,p:{x:64.2}},{t:this.shape_75,p:{x:73.4,y:23.4}},{t:this.shape_84},{t:this.shape_2,p:{x:88}},{t:this.shape_1,p:{x:95.8}},{t:this.shape_16,p:{x:102.1}},{t:this.shape,p:{x:107.9}}]},1).wait(1));

	// outlineshade
	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#D40000").ss(4,2,0,3).p("EAk9AAAI0bAAIsJAAIknAAIo/AAIizAAI48AA");
	this.shape_117.setTransform(78.3,42.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#D40000").ss(1,2,0,3).p("EglaAE7IAGhDIAQinIBYhQIhJhPIAXjsIZlAAIBmAAIJ7AAIDrAAIL2AAIVRAAIg7J1");
	this.shape_118.setTransform(81.3,11);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F5F5F5").s().p("AItE7IizAAI46AAIAFhDIAQinIBYhQIhIhPIAWjsIZkAAIBnAAIJ7AAIhUJ1g");
	this.shape_119.setTransform(-36.4,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]}).wait(2));

	// white
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FAFAFA").s().p("AQHE7IsKAAItmAAI7uAAIAGhDIAQinIBXhQIhIhPIARiyIAAAAIAGg6IbLAAINmAAIL1AAIVNAAIgFA6IgDBWIgFAAIgjGiIgFAAIgHBDg");
	this.shape_120.setTransform(81.1,11);

	this.timeline.addTween(cjs.Tween.get(this.shape_120).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.1,-21.6,482,66.1);


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
	this.shape.setTransform(16.3,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_1.setTransform(10.5,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_2.setTransform(2.4,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_3.setTransform(-5.7,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_4.setTransform(-13.8,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_5.setTransform(-21.9,27.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_6.setTransform(-30,27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_7.setTransform(-38.1,27.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_8.setTransform(-46.2,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_9.setTransform(-54.3,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgmAEIAAgHIBNAAIAAAHg");
	this.shape_10.setTransform(-62.4,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(-72.6,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(-78.5,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(-87.5,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(-94.4,23.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(-102.2,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(-111.3,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(-120.2,23.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(-129.7,25.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(235.8,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(226.2,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(216.6,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_22.setTransform(209.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_23.setTransform(201.2,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_24.setTransform(192.8,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_25.setTransform(186.3,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_26.setTransform(178.3,-0.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_27.setTransform(170.8,-1.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(163,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(153.4,1.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(144.1,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_31.setTransform(135.1,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_32.setTransform(126.1,1.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(111.9,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_34.setTransform(103.3,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(94.4,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_36.setTransform(85.2,-2.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(75.4,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(66.3,-2.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_39.setTransform(52.4,-2.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_40.setTransform(42.7,-0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_41.setTransform(36.2,-2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_42.setTransform(29.3,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(19.7,-2.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(10.1,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_45.setTransform(-3.4,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_46.setTransform(-13.1,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(-22.4,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_48.setTransform(-31.6,-0.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_49.setTransform(-40.9,1.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_50.setTransform(-52.9,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_51.setTransform(-61.8,-2.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_52.setTransform(-68.3,-2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(-82.3,-0.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_54.setTransform(-90.9,-0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(-99.8,-0.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_56.setTransform(-109,-2.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_57.setTransform(-118.8,-0.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAHQgFAGgIAEQAKABAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaABIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_58.setTransform(-128.6,-2.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_59.setTransform(63.3,23.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_60.setTransform(52.1,22.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_61.setTransform(44.3,23.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_62.setTransform(-112.8,22.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_63.setTransform(-122.5,21.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_64.setTransform(-129.7,23.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_65.setTransform(229.8,-0.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_66.setTransform(191.9,1.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_67.setTransform(166.5,-2.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_68.setTransform(155.3,1.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_69.setTransform(116.4,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_70.setTransform(89,1.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_71.setTransform(79.8,-0.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_72.setTransform(51.3,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_73.setTransform(42.3,-2.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_74.setTransform(34.7,-1.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_75.setTransform(18,-2.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_76.setTransform(7.5,-0.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_77.setTransform(-1.9,1.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_78.setTransform(-20.7,-0.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_79.setTransform(-30.4,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_80.setTransform(-55.8,-2.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgjAwQALgDAGgDQAGgFAEgJIACgHIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_81.setTransform(-66.2,1.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_82.setTransform(-72.3,-2.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_83.setTransform(-78.8,-2.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_84.setTransform(-90.9,-0.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_85.setTransform(-102.2,-0.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_86.setTransform(-128.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-90.9}},{t:this.shape_53,p:{x:-82.3}},{t:this.shape_52},{t:this.shape_51,p:{x:-61.8}},{t:this.shape_50,p:{x:-52.9}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-22.4}},{t:this.shape_46},{t:this.shape_45,p:{x:-3.4}},{t:this.shape_44,p:{x:10.1}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:85.2,y:-2.4}},{t:this.shape_35},{t:this.shape_34,p:{x:103.3}},{t:this.shape_33},{t:this.shape_32,p:{x:126.1}},{t:this.shape_31,p:{x:135.1,y:-0.6}},{t:this.shape_30,p:{x:144.1}},{t:this.shape_29,p:{x:153.4}},{t:this.shape_28,p:{x:163}},{t:this.shape_27},{t:this.shape_26,p:{x:178.3}},{t:this.shape_25,p:{x:186.3}},{t:this.shape_24},{t:this.shape_23,p:{x:201.2}},{t:this.shape_22,p:{x:209.6}},{t:this.shape_21,p:{x:216.6}},{t:this.shape_20},{t:this.shape_19,p:{x:235.8,y:-0.6}},{t:this.shape_18,p:{x:-129.7}},{t:this.shape_17,p:{x:-120.2}},{t:this.shape_16,p:{x:-111.3}},{t:this.shape_15,p:{x:-102.2}},{t:this.shape_14,p:{x:-94.4}},{t:this.shape_13},{t:this.shape_12,p:{x:-78.5,y:23.3}},{t:this.shape_11,p:{x:-72.6}},{t:this.shape_10,p:{x:-62.4}},{t:this.shape_9,p:{x:-54.3}},{t:this.shape_8,p:{x:-46.2}},{t:this.shape_7,p:{x:-38.1}},{t:this.shape_6,p:{x:-30}},{t:this.shape_5,p:{x:-21.9}},{t:this.shape_4,p:{x:-13.8}},{t:this.shape_3,p:{x:-5.7}},{t:this.shape_2,p:{x:2.4}},{t:this.shape_1,p:{x:10.5}},{t:this.shape,p:{x:16.3}}]}).to({state:[{t:this.shape_86},{t:this.shape_54,p:{x:-118.6}},{t:this.shape_34,p:{x:-110.6}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_28,p:{x:-49.4}},{t:this.shape_47,p:{x:-39.7}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_53,p:{x:-11.5}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_12,p:{x:23.8,y:-0.6}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_32,p:{x:64.8}},{t:this.shape_25,p:{x:72.9}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_22,p:{x:97.5}},{t:this.shape_23,p:{x:104.4}},{t:this.shape_69},{t:this.shape_50,p:{x:130.5}},{t:this.shape_51,p:{x:139.5}},{t:this.shape_45,p:{x:146}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_21,p:{x:172.9}},{t:this.shape_30,p:{x:182.6}},{t:this.shape_66},{t:this.shape_26,p:{x:201.6}},{t:this.shape_44,p:{x:210.8}},{t:this.shape_29,p:{x:220.4}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_36,p:{x:-105.2,y:21.5}},{t:this.shape_31,p:{x:-96.2,y:23.3}},{t:this.shape_10,p:{x:-83.6}},{t:this.shape_9,p:{x:-75.5}},{t:this.shape_8,p:{x:-67.4}},{t:this.shape_7,p:{x:-59.3}},{t:this.shape_6,p:{x:-51.2}},{t:this.shape_5,p:{x:-43.1}},{t:this.shape_4,p:{x:-35}},{t:this.shape_3,p:{x:-26.9}},{t:this.shape_2,p:{x:-18.8}},{t:this.shape_1,p:{x:-10.7}},{t:this.shape_18,p:{x:2.1}},{t:this.shape_17,p:{x:11.6}},{t:this.shape_19,p:{x:20.5,y:23.3}},{t:this.shape_15,p:{x:29.6}},{t:this.shape_14,p:{x:37.4}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_11,p:{x:56.9}},{t:this.shape_59},{t:this.shape_16,p:{x:72.5}},{t:this.shape,p:{x:79.1}}]},1).wait(1));

	// outlineshade
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#D40000").ss(4,2,0,3).p("Af4AAI8KAAMgjlAAA");
	this.shape_87.setTransform(45.3,42);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#D40000").ss(1,2,0,3).p("EggYAE4IAnlWIBYhQIhJhQIALh6MAkPAAAIbhAAIhBJw");
	this.shape_88.setTransform(48.6,10.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F5F5F5").s().p("AynE4IAnlWIBXhQIhIhQIALh5MAkOAAAIhqJvg");
	this.shape_89.setTransform(-39.5,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]}).wait(2));

	// white
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FAFAFA").s().p("EggYAE4IAnlWIBYhQIhJhQIALh5MA/wAAAIhBJvg");
	this.shape_90.setTransform(48.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_90).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.7,-21.6,417.7,65.6);


(lib.Mc7op4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape.setTransform(173.7,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(164.8,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFAAADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_2.setTransform(157.3,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(149.6,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(138.9,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(132,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(118.5,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_7.setTransform(108.8,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(99.6,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(89.6,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_10.setTransform(78.1,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(66.1,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_12.setTransform(58.7,15.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(48.5,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_14.setTransform(39.3,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(27.6,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(16.3,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_17.setTransform(7,13.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_18.setTransform(104.8,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(95.9,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_20.setTransform(86.8,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(76.7,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(63.6,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAdAAgBAfIAAAzg");
	this.shape_23.setTransform(54.6,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgFACgHgBQgLAAgGgGg");
	this.shape_24.setTransform(47,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_25.setTransform(37.3,13.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(30.1,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_27.setTransform(19.5,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_28.setTransform(15.7,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_29.setTransform(7.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16,p:{x:16.3}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_16,p:{x:113.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,25.9);


(lib.Mc7op3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape.setTransform(287.1,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(277.8,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(271.3,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_3.setTransform(266.5,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(259,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(250.1,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(241.1,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_7.setTransform(230,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(226.2,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(219.3,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_10.setTransform(211.9,13.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_11.setTransform(200.4,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(190.7,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_13.setTransform(183.8,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(175.3,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(165.7,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(156.4,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(146.8,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_18.setTransform(138.2,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(125.3,15.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_20.setTransform(115.7,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(106.4,15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_22.setTransform(99.9,13.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_23.setTransform(96.1,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_24.setTransform(89.1,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_25.setTransform(80.5,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_26.setTransform(69.5,14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(61.8,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_28.setTransform(52.6,15.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_29.setTransform(43.4,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_30.setTransform(31.3,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_31.setTransform(20,15.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_32.setTransform(8.8,13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_33.setTransform(135.6,14.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_34.setTransform(111,14.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(97.9,15.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(57.1,17.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_37.setTransform(47.5,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_38.setTransform(35.2,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_39.setTransform(26.6,15.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgaAAIghAAgAgdgFIAeAAQANgBAGgFQAHgEAAgLQAAgTgaAAIgeAAg");
	this.shape_40.setTransform(7.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:31.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:138.2}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:183.8}},{t:this.shape_12,p:{x:190.7}},{t:this.shape_11},{t:this.shape_10,p:{x:211.9}},{t:this.shape_9,p:{x:219.3}},{t:this.shape_8,p:{x:226.2}},{t:this.shape_7,p:{x:230}},{t:this.shape_6,p:{x:241.1}},{t:this.shape_5,p:{x:250.1}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:271.3}},{t:this.shape_1,p:{x:277.8}},{t:this.shape}]}).to({state:[{t:this.shape_40},{t:this.shape_12,p:{x:17.5}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_8,p:{x:67.8}},{t:this.shape_30,p:{x:76.7}},{t:this.shape_6,p:{x:88.7}},{t:this.shape_35},{t:this.shape_13,p:{x:105.9}},{t:this.shape_34},{t:this.shape_9,p:{x:118.5}},{t:this.shape_1,p:{x:128.1}},{t:this.shape_33},{t:this.shape_10,p:{x:145.3}},{t:this.shape_2,p:{x:150}},{t:this.shape_7,p:{x:153.8}},{t:this.shape_5,p:{x:160}},{t:this.shape_18,p:{x:168.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,294.4,25.9);


(lib.Mc7op2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape.setTransform(185.2,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_1.setTransform(176.6,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(169.6,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(164.3,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_4.setTransform(158.2,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_5.setTransform(152,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_6.setTransform(147.2,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(139.8,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(130.1,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(116.6,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(107,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(100.5,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(94.6,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_13.setTransform(88.8,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(84.5,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(76.7,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(67.7,17.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(53.5,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(44.2,15.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(34.5,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_20.setTransform(25.9,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(17,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_22.setTransform(7.6,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_23.setTransform(153.4,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_24.setTransform(143.5,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_25.setTransform(138,13.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(130.8,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_27.setTransform(101.5,15.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_28.setTransform(83.1,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_29.setTransform(72.1,14.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(55,15.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_31.setTransform(44.4,13.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(40.6,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_33.setTransform(4.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:25.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:76.7}},{t:this.shape_14,p:{x:84.5}},{t:this.shape_13},{t:this.shape_12,p:{x:94.6}},{t:this.shape_11},{t:this.shape_10,p:{x:107}},{t:this.shape_9,p:{x:116.6}},{t:this.shape_8,p:{x:130.1}},{t:this.shape_7,p:{x:139.8}},{t:this.shape_6,p:{x:147.2}},{t:this.shape_5,p:{x:152}},{t:this.shape_4},{t:this.shape_3,p:{x:164.3}},{t:this.shape_2,p:{x:169.6}},{t:this.shape_1},{t:this.shape,p:{x:185.2}}]}).to({state:[{t:this.shape_33},{t:this.shape_9,p:{x:10.8}},{t:this.shape_20,p:{x:19.4}},{t:this.shape_6,p:{x:26.2}},{t:this.shape_10,p:{x:33.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_7,p:{x:64.7}},{t:this.shape_29},{t:this.shape_5,p:{x:76.9}},{t:this.shape_28},{t:this.shape_3,p:{x:89.2}},{t:this.shape_14,p:{x:94.5}},{t:this.shape_27},{t:this.shape_12,p:{x:110.1}},{t:this.shape,p:{x:122.2}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_8,p:{x:164.9}},{t:this.shape_2,p:{x:173.3}},{t:this.shape_15,p:{x:180.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.4,25.9);


(lib.Mc7op1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape.setTransform(274,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_1.setTransform(265.4,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_2.setTransform(256.4,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_3.setTransform(247.2,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_4.setTransform(239.2,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(225.4,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(215.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_7.setTransform(207.8,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_8.setTransform(197.9,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRBKIAAgMIAIACQAMAAABgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_9.setTransform(190.5,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(184.8,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(175.6,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_12.setTransform(169.2,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(158,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_14.setTransform(148.7,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_15.setTransform(139.4,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(129.8,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(120.5,15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_18.setTransform(114,13.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_19.setTransform(110.2,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(103.9,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(94.9,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(81,15.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(71.4,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_24.setTransform(63.4,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(53.5,17.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(44.2,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(34.5,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_28.setTransform(25.9,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(17,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_30.setTransform(7.6,13.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_31.setTransform(209.1,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_32.setTransform(193.7,14.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_33.setTransform(187.2,15.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_34.setTransform(171.5,14.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(164.2,15.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_36.setTransform(157.2,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_37.setTransform(135.7,15.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_38.setTransform(119.3,15.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_39.setTransform(76.1,15.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_40.setTransform(68.6,14.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_41.setTransform(45.7,14.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_42.setTransform(41.1,13.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_43.setTransform(20.7,15.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_44.setTransform(14.2,13.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgpA5IAAhxIAtAAQARAAAKAJQAKAIAAAPQAAAPgKAIQgKAIgRAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgGQAGgFABgKQgBgLgGgEQgHgGgMAAIgeAAg");
	this.shape_45.setTransform(7.4,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:34.5}},{t:this.shape_26},{t:this.shape_25,p:{x:53.5}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:94.9}},{t:this.shape_20,p:{x:103.9}},{t:this.shape_19},{t:this.shape_18,p:{x:114}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:158}},{t:this.shape_12},{t:this.shape_11,p:{x:175.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:225.4}},{t:this.shape_4},{t:this.shape_3,p:{x:247.2}},{t:this.shape_2},{t:this.shape_1,p:{x:265.4}},{t:this.shape}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_25,p:{x:29.9}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_18,p:{x:54.7}},{t:this.shape_5,p:{x:61.2}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_27,p:{x:89.4}},{t:this.shape_1,p:{x:102.6}},{t:this.shape_3,p:{x:111.2}},{t:this.shape_38},{t:this.shape_13,p:{x:126.2}},{t:this.shape_37},{t:this.shape_21,p:{x:149.2}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_20,p:{x:178.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_11,p:{x:201.1}},{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,281.2,25.9);


(lib.Mc6op4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(70.4,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(60.7,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(54.3,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_3.setTransform(49.5,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_4.setTransform(43.9,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(34.2,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(24.9,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(16,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(7,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_9.setTransform(27,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_10.setTransform(20.2,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgFACgHgBQgLAAgGgGg");
	this.shape_11.setTransform(4.7,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:16}},{t:this.shape_6},{t:this.shape_5,p:{x:34.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:54.3}},{t:this.shape_1},{t:this.shape,p:{x:70.4}}]}).to({state:[{t:this.shape_11},{t:this.shape_7,p:{x:12}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_2,p:{x:31.8}},{t:this.shape,p:{x:38.3}},{t:this.shape_5,p:{x:47.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.3,25.9);


(lib.Mc6op3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(89.2,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(79.6,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(70,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(60.8,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_4.setTransform(52.8,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(43.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(34.2,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(24.9,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(16,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(7,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_10.setTransform(30.6,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_11.setTransform(6.1,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:34.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:60.8}},{t:this.shape_2,p:{x:70}},{t:this.shape_1},{t:this.shape,p:{x:89.2}}]}).to({state:[{t:this.shape_11},{t:this.shape_3,p:{x:14.5}},{t:this.shape_2,p:{x:23.6}},{t:this.shape_10},{t:this.shape,p:{x:37.1}},{t:this.shape_6,p:{x:46.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.2,25.9);


(lib.Mc6op2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape.setTransform(85.9,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_1.setTransform(76.4,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_2.setTransform(68.9,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(61.5,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(52.5,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_5.setTransform(43.6,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(29.3,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_7.setTransform(21.3,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(12.2,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_9.setTransform(5.4,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(36.6,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(30.2,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(24.2,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(6.6,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:52.5}},{t:this.shape_3,p:{x:61.5}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_13},{t:this.shape_4,p:{x:16}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:46.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.5,25.9);


(lib.Mc6op1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape.setTransform(53.8,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(48,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_2.setTransform(42.1,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(36.3,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_4.setTransform(32.5,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(25.5,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(16.2,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(6.6,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_8.setTransform(38.5,17.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_9.setTransform(32.3,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(25.4,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(6.4,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:16.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:42.1}},{t:this.shape_1,p:{x:48}},{t:this.shape,p:{x:53.8}}]}).to({state:[{t:this.shape_11},{t:this.shape_6,p:{x:16.1}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2,p:{x:46.6}},{t:this.shape_1,p:{x:52.6}},{t:this.shape,p:{x:58.4}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.1,25.9);


(lib.Mc5op2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape.setTransform(39.7,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(29.9,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_2.setTransform(23.5,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(16.5,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_4.setTransform(7,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(36.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(28.3,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_7.setTransform(22.5,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(15.6,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiA5IAAhxIBFAAIAAALIg4AAIAAAoIA1AAIAAAKIg1AAIAAA0g");
	this.shape_9.setTransform(6.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.5,25.9);


(lib.Mc5op1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape.setTransform(38.4,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_1.setTransform(31.8,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_2.setTransform(24.3,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_3.setTransform(17.3,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgaAAIghAAgAgdgFIAeAAQANgBAGgFQAHgEAAgLQAAgTgaAAIgeAAg");
	this.shape_4.setTransform(7.7,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_5.setTransform(21.9,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(14.9,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_7.setTransform(6.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:17.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_3,p:{x:30.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,42.5,25.9);


(lib.Mc4op4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(131.5,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(121.9,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_2.setTransform(112.6,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_3.setTransform(103.3,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(94.1,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_5.setTransform(82,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_6.setTransform(73.2,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_7.setTransform(66.6,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_8.setTransform(52.7,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_9.setTransform(44.1,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_10.setTransform(35.1,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_11.setTransform(25.9,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(16.2,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_13.setTransform(7.1,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(141.6,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(132.2,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(122.6,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(103.7,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(84.7,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_19.setTransform(78.3,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAGgFAEgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_20.setTransform(67.9,17.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_21.setTransform(61.8,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(31.9,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_23.setTransform(15.5,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(6.6,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:7.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:44.1}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:82}},{t:this.shape_4},{t:this.shape_3,p:{x:103.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:131.5}}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_9,p:{x:23.5}},{t:this.shape_22},{t:this.shape_5,p:{x:43.2}},{t:this.shape_13,p:{x:55.3}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape,p:{x:94.4}},{t:this.shape_17},{t:this.shape_3,p:{x:113.4}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,138.5,25.9);


(lib.Mc4op3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape.setTransform(73.3,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(69,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(60.5,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(51.2,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(44.7,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_5.setTransform(38.3,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(24,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(14.8,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_8.setTransform(6.8,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_9.setTransform(83.9,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(74.5,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_11.setTransform(57,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_12.setTransform(44.4,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(29.3,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_14.setTransform(7.1,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:14.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:51.2}},{t:this.shape_2},{t:this.shape_1,p:{x:69}},{t:this.shape,p:{x:73.3}}]}).to({state:[{t:this.shape_14},{t:this.shape,p:{x:13.5}},{t:this.shape_3,p:{x:20}},{t:this.shape_13},{t:this.shape_1,p:{x:37.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_7,p:{x:65.3}},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77.4,25.9);


(lib.Mc4op2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape.setTransform(75.5,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_1.setTransform(67.9,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_2.setTransform(60.9,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_3.setTransform(50,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgaAAIghAAgAgdgFIAeAAQANgBAGgFQAHgEAAgLQAAgTgaAAIgeAAg");
	this.shape_4.setTransform(38.9,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(24,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(14.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_7.setTransform(6.8,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(84.9,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_9.setTransform(75.5,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_10.setTransform(58,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAHAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAFAGQAGAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_11.setTransform(29.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:14.8}},{t:this.shape_5},{t:this.shape_4,p:{x:38.9}},{t:this.shape_3,p:{x:50}},{t:this.shape_2},{t:this.shape_1,p:{x:67.9}},{t:this.shape,p:{x:75.5}}]}).to({state:[{t:this.shape_4,p:{x:7.7}},{t:this.shape_3,p:{x:18.8}},{t:this.shape_11},{t:this.shape_1,p:{x:36.7}},{t:this.shape,p:{x:44.3}},{t:this.shape_10},{t:this.shape_6,p:{x:66.4}},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.1,25.9);


(lib.Mc4op1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape.setTransform(72.1,13.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_1.setTransform(67.9,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_2.setTransform(60.5,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAHAHIgFAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAGAGQAFAGAAAKQABAKgGAHQgFAHgJAEQgKAEgNAAQgaAAgPgOg");
	this.shape_3.setTransform(50,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_4.setTransform(39.1,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(24,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(14.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_7.setTransform(6.8,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(78,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(68.6,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_10.setTransform(51.1,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIAMAAIAABxg");
	this.shape_11.setTransform(40.7,13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_12.setTransform(36.6,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAsIAFgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAKAEAHAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_13.setTransform(18.6,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:14.8}},{t:this.shape_5},{t:this.shape_4,p:{x:39.1}},{t:this.shape_3},{t:this.shape_2,p:{x:60.5}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:7.7}},{t:this.shape_13},{t:this.shape_2,p:{x:29.1}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_6,p:{x:59.5}},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.4,25.9);


(lib.Mc3op4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape.setTransform(172.7,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(163.4,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(153.7,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_3.setTransform(144.5,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_4.setTransform(137.4,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(129.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(120.3,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(111.4,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_8.setTransform(103,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_9.setTransform(90.8,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(81.9,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_11.setTransform(74.9,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(66.5,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_13.setTransform(52.7,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_14.setTransform(44.1,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_15.setTransform(35.1,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_16.setTransform(25.9,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_17.setTransform(16.2,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_18.setTransform(7.1,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(160.3,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(150.7,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_21.setTransform(141.5,15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(131.8,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_23.setTransform(106.4,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_24.setTransform(98.4,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_25.setTransform(83.5,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(74.9,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_27.setTransform(68.7,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(58.2,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(48.8,17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_30.setTransform(24.5,15.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_31.setTransform(15.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:52.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:111.4}},{t:this.shape_6},{t:this.shape_5,p:{x:129.7}},{t:this.shape_4,p:{x:137.4}},{t:this.shape_3},{t:this.shape_2,p:{x:153.7}},{t:this.shape_1,p:{x:163.4}},{t:this.shape,p:{x:172.7}}]}).to({state:[{t:this.shape_2,p:{x:6.6}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_4,p:{x:32.2}},{t:this.shape_13,p:{x:39.2}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_7,p:{x:92.1}},{t:this.shape_24},{t:this.shape_23},{t:this.shape,p:{x:112.8}},{t:this.shape_1,p:{x:122.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_5,p:{x:169.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.9,25.9);


(lib.Mc3op3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape.setTransform(262.6,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(255.6,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(246,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(236.7,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(230.2,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_5.setTransform(225.4,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(214.4,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(205.5,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_8.setTransform(198.5,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(190.1,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(176.6,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(166.9,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(157.3,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_13.setTransform(150.4,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(141.9,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_15.setTransform(133.6,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_16.setTransform(127.1,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_17.setTransform(119,15.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgFgGg");
	this.shape_18.setTransform(111.5,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(103.8,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(94.1,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(84.8,15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(75.9,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(66.9,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_24.setTransform(52.7,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_25.setTransform(44.1,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(35.1,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_27.setTransform(25.9,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_28.setTransform(16.2,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_29.setTransform(7.1,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_30.setTransform(217.8,15.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(189.1,15.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(182.7,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_33.setTransform(146.7,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_34.setTransform(132.6,15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(105.2,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(96,15.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_37.setTransform(70,13.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(63.7,15.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_39.setTransform(55.1,15.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(46.5,15.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_41.setTransform(40.3,13.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(19.7,17.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_43.setTransform(6.7,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:25.9}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:52.7}},{t:this.shape_23,p:{x:66.9}},{t:this.shape_22,p:{x:75.9}},{t:this.shape_21},{t:this.shape_20,p:{x:94.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:150.4}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:176.6}},{t:this.shape_9,p:{x:190.1}},{t:this.shape_8,p:{x:198.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:230.2}},{t:this.shape_3,p:{x:236.7}},{t:this.shape_2,p:{x:246}},{t:this.shape_1,p:{x:255.6}},{t:this.shape,p:{x:262.6}}]}).to({state:[{t:this.shape_43},{t:this.shape_4,p:{x:13.3}},{t:this.shape_42},{t:this.shape_27,p:{x:29.5}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_23,p:{x:81}},{t:this.shape_13,p:{x:89.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_8,p:{x:113.7}},{t:this.shape_24,p:{x:120.6}},{t:this.shape_34},{t:this.shape_33},{t:this.shape,p:{x:155.7}},{t:this.shape_10,p:{x:162.2}},{t:this.shape_20,p:{x:171.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_3,p:{x:198.8}},{t:this.shape_2,p:{x:208.1}},{t:this.shape_30},{t:this.shape_9,p:{x:227}},{t:this.shape_1,p:{x:236.6}},{t:this.shape_22,p:{x:246}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,266.7,25.9);


(lib.Mc3op2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape.setTransform(270.4,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(260.7,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(251.1,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(241.8,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(232.8,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(226.1,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(214.4,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(205.5,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_8.setTransform(198.5,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(190.1,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(176.6,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(166.9,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(157.3,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_13.setTransform(150.4,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(141.9,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_15.setTransform(133.6,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_16.setTransform(127.1,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_17.setTransform(119,15.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgFgGg");
	this.shape_18.setTransform(111.5,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(103.8,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(94.1,17.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(84.8,15.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(75.9,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(66.9,17.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_24.setTransform(52.7,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_25.setTransform(44.1,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(35.1,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_27.setTransform(25.9,13.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_28.setTransform(16.2,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_29.setTransform(7.1,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_30.setTransform(212.3,15.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(202.6,17.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_32.setTransform(177.2,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(166,17.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_34.setTransform(150.2,13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_35.setTransform(141.2,15.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_36.setTransform(127.2,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_37.setTransform(115.2,15.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(99.7,17.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_39.setTransform(90.6,15.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_40.setTransform(64.5,13.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_41.setTransform(49.7,15.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(41.1,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_43.setTransform(34.8,13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_44.setTransform(21.8,15.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(10.2,15.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_46.setTransform(3.8,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:66.9}},{t:this.shape_22,p:{x:75.9}},{t:this.shape_21},{t:this.shape_20,p:{x:94.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:176.6}},{t:this.shape_9,p:{x:190.1}},{t:this.shape_8,p:{x:198.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:226.1}},{t:this.shape_4,p:{x:232.8}},{t:this.shape_3,p:{x:241.8}},{t:this.shape_2},{t:this.shape_1,p:{x:260.7}},{t:this.shape}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_22,p:{x:58.3}},{t:this.shape_40},{t:this.shape_23,p:{x:75.6}},{t:this.shape_8,p:{x:83.6}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_5,p:{x:108.2}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_10,p:{x:156.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_9,p:{x:183.7}},{t:this.shape_3,p:{x:193.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_1,p:{x:221.5}},{t:this.shape_20,p:{x:231.1}},{t:this.shape_4,p:{x:240.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,277.3,25.9);


(lib.Mc3op1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape.setTransform(113,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(106.1,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(99.1,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_3.setTransform(91.1,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_4.setTransform(83.6,14.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(75.8,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(66.5,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_7.setTransform(52.7,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_8.setTransform(44.1,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_9.setTransform(35.1,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_10.setTransform(25.9,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(16.2,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_12.setTransform(7.1,13.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(124.3,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(114.9,17.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_15.setTransform(105.3,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_16.setTransform(96.1,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(86.4,17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_18.setTransform(67.4,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_19.setTransform(61,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(46,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_21.setTransform(31,15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_22.setTransform(23.5,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_23.setTransform(6.5,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:52.7}},{t:this.shape_6,p:{x:66.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:99.1}},{t:this.shape_1},{t:this.shape,p:{x:113}}]}).to({state:[{t:this.shape_23},{t:this.shape_7,p:{x:15.8}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_2,p:{x:39.1}},{t:this.shape_20},{t:this.shape,p:{x:53}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_6,p:{x:77.1}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,117.1,25.9);


(lib.Mc2op4 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(177.9,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(168.2,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(158.6,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(151.7,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(143.2,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_5.setTransform(134.9,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(128.4,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_7.setTransform(120.3,15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_8.setTransform(112.8,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(105.1,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(95.4,17.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_11.setTransform(86.1,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_12.setTransform(77.2,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(68.2,17.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_14.setTransform(54,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_15.setTransform(45.4,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(36.4,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_17.setTransform(27.2,13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_18.setTransform(17.5,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgaAAIghAAgAgdgFIAeAAQANgBAGgFQAHgEAAgLQAAgTgaAAIgeAAg");
	this.shape_19.setTransform(7.7,13.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(153.7,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(134.8,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(115.9,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_23.setTransform(109.4,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(98.2,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(82.4,13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_26.setTransform(73.4,15.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_27.setTransform(59.4,15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(31.9,17.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(22.8,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_30.setTransform(7.6,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:77.2}},{t:this.shape_11,p:{x:86.1}},{t:this.shape_10,p:{x:95.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:120.3}},{t:this.shape_6,p:{x:128.4}},{t:this.shape_5},{t:this.shape_4,p:{x:143.2}},{t:this.shape_3,p:{x:151.7}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:177.9}}]}).to({state:[{t:this.shape_30},{t:this.shape_6,p:{x:15.8}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_3,p:{x:40.4}},{t:this.shape_4,p:{x:47.4}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_11,p:{x:88.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape,p:{x:125.5}},{t:this.shape_21},{t:this.shape_7,p:{x:144.5}},{t:this.shape_20},{t:this.shape_10,p:{x:163.3}},{t:this.shape_12,p:{x:172.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,184.8,25.9);


(lib.Mc2op3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape.setTransform(109,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_1.setTransform(103,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_2.setTransform(94.1,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(87.1,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(79.4,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(70.4,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(60.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_7.setTransform(45,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(33.7,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_9.setTransform(26.4,14.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_10.setTransform(19.7,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(13.9,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_12.setTransform(7,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_13.setTransform(107.8,14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgkAxQAMgEAGgDQAFgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_14.setTransform(92.9,17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(71.4,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(62.1,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgFgBQgMAAgGgGg");
	this.shape_17.setTransform(50.8,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(43,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgbAzQgLgHgGgNQgHgNAAgSQAAgRAGgNQAHgNALgHQAMgHAPAAQAQAAAMAHQALAHAHANQAGANAAARQAAASgGANQgHANgLAHQgMAHgQAAQgPAAgMgHgAgbgiQgKAMAAAWQAAAWAKAMQAKANARAAQASAAAKgNQAKgMAAgWQAAgWgKgMQgKgMgSAAQgRAAgKAMg");
	this.shape_19.setTransform(8.2,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:19.7}},{t:this.shape_9},{t:this.shape_8,p:{x:33.7}},{t:this.shape_7,p:{x:45}},{t:this.shape_6},{t:this.shape_5,p:{x:70.4}},{t:this.shape_4,p:{x:79.4}},{t:this.shape_3,p:{x:87.1}},{t:this.shape_2},{t:this.shape_1,p:{x:103}},{t:this.shape,p:{x:109}}]}).to({state:[{t:this.shape_19},{t:this.shape_5,p:{x:19.3}},{t:this.shape_8,p:{x:28.3}},{t:this.shape_3,p:{x:36.1}},{t:this.shape_18},{t:this.shape_17},{t:this.shape,p:{x:55.6}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_10,p:{x:84.6}},{t:this.shape_14},{t:this.shape_1,p:{x:101}},{t:this.shape_13},{t:this.shape_4,p:{x:115}},{t:this.shape_7,p:{x:126.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,113.1,25.9);


(lib.Mc2op2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape.setTransform(75.2,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(70.9,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(62.4,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(53.1,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(46.6,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNA3QgHgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAHgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_5.setTransform(40.2,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(25.9,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(16.7,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcA5Ig7g2IAAA2IgMAAIAAhxIAMAAIAAA1IA3g1IARAAIg6A3IA+A6g");
	this.shape_8.setTransform(7.9,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_9.setTransform(85,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_10.setTransform(75.6,13.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_11.setTransform(58.1,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgjAxQALgEAFgDQAGgFAFgJIADgHIgjhOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_12.setTransform(45.6,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgaAAIghAAgAgdgFIAeAAQANgBAGgFQAHgEAAgLQAAgTgaAAIgeAAg");
	this.shape_13.setTransform(7.5,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7,p:{x:16.7}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:53.1}},{t:this.shape_2,p:{x:62.4}},{t:this.shape_1,p:{x:70.9}},{t:this.shape,p:{x:75.2}}]}).to({state:[{t:this.shape_13},{t:this.shape,p:{x:14.7}},{t:this.shape_3,p:{x:21.2}},{t:this.shape_2,p:{x:30.5}},{t:this.shape_1,p:{x:38.9}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_7,p:{x:66.5}},{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,79.3,25.9);


(lib.Mc2op1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape.setTransform(124.3,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_1.setTransform(116.5,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgFgGg");
	this.shape_2.setTransform(109.3,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_3.setTransform(101.9,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(92.7,17.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_5.setTransform(80.6,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(69.1,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_7.setTransform(61.1,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_8.setTransform(45,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_9.setTransform(33.7,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_10.setTransform(26.4,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_11.setTransform(19.7,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(13.9,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_13.setTransform(7,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_14.setTransform(106.3,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgjhOIAOAAIAaBBIAchBIANAAIgmBWQgFAOgJAHQgJAGgNADg");
	this.shape_15.setTransform(91.4,17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(83.1,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_17.setTransform(57.6,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_18.setTransform(50.2,15.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_19.setTransform(7.4,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:19.7}},{t:this.shape_10},{t:this.shape_9,p:{x:33.7}},{t:this.shape_8,p:{x:45}},{t:this.shape_7},{t:this.shape_6,p:{x:69.1}},{t:this.shape_5,p:{x:80.6}},{t:this.shape_4,p:{x:92.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:116.5}},{t:this.shape,p:{x:124.3}}]}).to({state:[{t:this.shape_19},{t:this.shape_6,p:{x:17.4}},{t:this.shape_8,p:{x:28.9}},{t:this.shape_4,p:{x:41}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_9,p:{x:64.8}},{t:this.shape,p:{x:72.6}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_11,p:{x:99.5}},{t:this.shape_14},{t:this.shape_1,p:{x:113.5}},{t:this.shape_5,p:{x:124.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,128.9,25.9);


(lib.Mc1op1d = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape.setTransform(63.6,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(55.9,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(46.7,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_3.setTransform(34.6,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(23.3,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(14.6,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_6.setTransform(6.8,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_7.setTransform(32.7,13.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_8.setTransform(25.1,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_9.setTransform(20,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(12,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_11.setTransform(4.6,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.7,25.9);


(lib.Mc1op1c = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape.setTransform(42.6,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(32.9,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(26.5,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_3.setTransform(21.7,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(14.6,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_5.setTransform(6.8,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(31.1,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_7.setTransform(24.2,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_8.setTransform(12.3,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgFACgHgBQgLAAgGgGg");
	this.shape_9.setTransform(4.7,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:26.5}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_2,p:{x:18.9}},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.8,25.9);


(lib.Mc1op1b = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape.setTransform(42.4,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_1.setTransform(33.2,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(23.5,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_3.setTransform(14.6,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_4.setTransform(6.8,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_5.setTransform(48.6,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(39.3,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(30.1,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_8.setTransform(21.8,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_9.setTransform(4.9,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3,p:{x:14.6}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_3,p:{x:13.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,25.9);


(lib.Mc1op1a = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape.setTransform(59.9,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_1.setTransform(48.3,15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(36.3,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_3.setTransform(28.8,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_4.setTransform(23.7,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(16,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(7,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_7.setTransform(27.7,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_8.setTransform(20.9,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(9.3,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_10.setTransform(4.6,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:23.7}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_4,p:{x:14.6}},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.2,25.9);


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
	this.shape_4.graphics.f("rgba(255,153,0,0.6)").s().p("AjdD/QgPgQABgSIAAgRQAAgUAOgOIADgDQAIgGAKgDQAGg2AYgsQASgjAYgZQgYgYgSgiQgYgtgGg1QgMgEgJgJQgOgOAAgUIAAgQQAAgUAOgPQAPgOAUAAIF2AAQAYAAANASQALANAAASIAAAQQAAASgLANQgKALgNAEQgHA2gXAtIAAgBQgSAjgYAYQAYAZASAjIAAAAQAXArAHA3QAMADAIAJQAOAOAAAUIAAARQABAQgMAOQgOARgXABIl2AAIgBAAQgUAAgOgOgAjNC3IgCABQgIAIAAAMIAAARQgBALAJAIQAJAJAMAAIF2AAQANgBAIgJIgBABQAJgIgBgLIAAgRQAAgMgIgIQgHgIgNAAIgFAAQgEg8gZgvQgWgqgfgbQAfgaAWgqQAZgvAEg8IAFAAQANAAAIgKIgBACQAIgIAAgMIAAgQQAAgMgIgIIABABQgIgKgNAAIl2AAQgMAAgJAJQgIAIAAAMIAAAQQAAAMAIAIQAJAIAMAAIAEAAQAEA8AZAvIAAAAQAXAqAeAaQgeAbgXAqIAAAAQgZAvgEA8IgEAAQgLABgIAGgAgoAtQAKgGALgFIAAAAQAIgDAGgGIALAAQAGAGAIADIAAAAQALAFAKAGgAgMgeIADgEIgDAEIAAAAgAALgiIACAEQgFgJgIgGQgHAGgGAJIgGgDIgBAAIAAgBQgQgGgPgNIAAgBQgQgNgNgVIAAAAQgNgUgIgcQgGgTgCgUIDbAAQgCAUgFATQgIAcgOAUIAAAAQgNAVgQANIAAABQgPANgQAGIAAABIgBAAIgHADIAAAAgAhSiOQAHAZALASQAMASAOANIABAAQAJAIAJAFIAGADQAIACAFAFQAGgEAHgDIABAAIABAAIAAgBIAFgCQAKgFAJgIIABAAQANgMALgSIABgBQALgSAIgZIADgNIisAAIADANg");

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


(lib.btnRoundBg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AhKBFQgogHgDgmQgEgkAhgdQAggdAxgEQAxgFAkAXQAlAYAEAkQADAlgeARQgeARgxABIgMAAQgpAAgigHg");
	this.shape.setTransform(-0.4,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#347B34","#95B434","#FFFF00"],[0,0.51,1],-4.2,-16.5,-4.2,14.1).s().p("Ah0B1QgwgwAAhFQAAhEAwgwQAwgwBEAAQBFAAAwAwQAwAwAABEQAABFgwAwQgwAwhFAAQhEAAgwgwg");
	this.shape_1.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCF8E3").s().p("Ah4B4QgxgxAAhHQAAhFAxgzQAzgxBFAAQBHAAAxAxQAyAzAABFQAABHgyAxQgxAyhHAAQhFAAgzgyg");
	this.shape_2.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFF00","rgba(0,153,0,0)"],[0.584,1],0,0,0,0,0,30.1).s().p("AjODPQhVhVgBh6QABh5BVhVQBVhVB5gBQB6ABBVBVQBVBVABB5QgBB6hVBVQhVBVh6ABQh5gBhVhVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AiVCWQg/g+ABhYQgBhXA/g+QA+g/BXABQBYgBA+A/QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_7
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("AikCkQhEhEAAhgQAAhfBEhEQBFhEBfgBQBgABBEBEQBEBEAABfQAABghEBEQhEBFhgAAQhfAAhFhFg");
	this.shape_5.setTransform(0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-29.2,58.5,58.5);


(lib.btnRoundBg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AhKBFQgogHgDgmQgEgkAhgdQAggdAxgEQAxgFAkAXQAlAYAEAkQADAlgeARQgeARgxABIgMAAQgpAAgigHg");
	this.shape.setTransform(-0.4,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC00","#FFFF00"],[0,0.51,1],-4.2,-16.5,-4.2,14.1).s().p("Ah0B1QgwgwAAhFQAAhEAwgwQAwgwBEAAQBFAAAwAwQAwAwAABEQAABFgwAwQgwAwhFAAQhEAAgwgwg");
	this.shape_1.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FCF8E3").s().p("Ah4B4QgxgxAAhHQAAhFAxgzQAzgxBFAAQBHAAAxAxQAyAzAABFQAABHgyAxQgxAyhHAAQhFAAgzgyg");
	this.shape_2.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FF9900","rgba(220,61,66,0)"],[0.584,1],0,0,0,0,0,30.1).s().p("AjODPQhVhVgBh6QABh5BVhVQBVhVB5gBQB6ABBVBVQBVBVABB5QgBB6hVBVQhVBVh6ABQh5gBhVhVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AiVCWQg/g+ABhYQgBhXA/g+QA+g/BXABQBYgBA+A/QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.298)").s().p("AikCkQhEhEAAhgQAAhfBEhEQBFhEBfgBQBgABBEBEQBEBEAABfQAABghEBEQhEBFhgAAQhfAAhFhFg");
	this.shape_5.setTransform(0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-29.2,58.5,58.5);


(lib.btnRoundBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AhKBFQgogHgDgmQgEgkAhgdQAggdAxgEQAxgFAkAXQAlAYAEAkQADAlgeARQgeARgxABIgMAAQgpAAgigHg");
	this.shape.setTransform(-0.4,-9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-4.2,-16.5,-4.2,14.1).s().p("Ah0B1QgwgwAAhFQAAhEAwgwQAwgwBEAAQBFAAAwAwQAwAwAABEQAABFgwAwQgwAwhFAAQhEAAgwgwg");
	this.shape_1.setTransform(-0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#671D1F").s().p("Ah4B4QgxgxAAhHQAAhFAxgzQAzgxBFAAQBHAAAxAxQAyAzAABFQAABHgyAxQgxAyhHAAQhFAAgzgyg");
	this.shape_2.setTransform(0,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AiVCWQg/g+ABhYQgBhXA/g+QA+g/BXABQBYgBA+A/QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AikCkQhEhEAAhgQAAhfBEhEQBFhEBfgBQBgABBEBEQBEBEAABfQAABghEBEQhEBFhgAAQhfAAhFhFg");
	this.shape_4.setTransform(0.3,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-22.7,46.5,46.5);


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
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,-48.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(1));

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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,401.5,66.9);


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


(lib.btnRound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.btnRoundBg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.5);

	this.instance_1 = new lib.btnRoundBg2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-0.5);

	this.instance_2 = new lib.btnRoundBg3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.2,-23.2,46.5,46.5);


(lib.btnItemRound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,selected:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnRound();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnRound(), 3);

	this.instance_1 = new lib.btnRoundBg3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.7,58.5,58.5);


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


(lib.mcTimesUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

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
		nextScreen();
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


(lib.actMc1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 2;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(480.2,373.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(480.2,318.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2}]}).wait(1));

	// input
	this.instance = new lib.Mc5op1();
	this.instance.parent = this;
	this.instance.setTransform(624,318.1,1,1,0,0,0,111.5,13);

	this.instance_1 = new lib.Mc5op2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(624,372.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(536.1,450.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_8, new cjs.Rectangle(456.8,294.8,161.7,181.8), null);


(lib.actMc1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 4;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(379.2,456.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(379.2,401.4);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(379.2,346.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(379.2,291.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc7op4();
	this.instance.parent = this;
	this.instance.setTransform(516.2,465.5,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc7op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(521,291.1,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc7op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(516.2,411.3,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc7op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(521,345.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(498.1,523.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_7, new cjs.Rectangle(356,267.8,347.8,281.8), null);


(lib.actMc1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 4;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(480.2,449.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(480.2,394.4);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(480.2,339.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(480.2,284.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc6op4();
	this.instance.parent = this;
	this.instance.setTransform(619.2,458.5,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc6op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(624,284.1,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc6op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(619.2,404.3,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc6op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(624,338.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(528.1,523.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_6, new cjs.Rectangle(448.8,260.8,161.7,288.8), null);


(lib.actMc1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 2;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(480.2,373.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(480.2,318.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2}]}).wait(1));

	// input
	this.instance = new lib.Mc5op1();
	this.instance.parent = this;
	this.instance.setTransform(624,318.1,1,1,0,0,0,111.5,13);

	this.instance_1 = new lib.Mc5op2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(624,372.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(536.1,450.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_5, new cjs.Rectangle(456.8,294.8,161.7,181.8), null);


(lib.actMc1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 4;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(459.2,450.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(459.2,395.4);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(459.2,340.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(459.2,285.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc4op4();
	this.instance.parent = this;
	this.instance.setTransform(598.2,459.5,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc4op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(603,285.1,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc4op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(598.2,405.3,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc4op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(603,339.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(502.1,523.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_4, new cjs.Rectangle(422.8,261.8,207.2,287.8), null);


(lib.actMc1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 4;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(410.2,450.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(410.2,395.4);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(410.2,340.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(410.2,285.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc3op4();
	this.instance.parent = this;
	this.instance.setTransform(549.2,459.5,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc3op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(554,285.1,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc3op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(549.2,405.3,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc3op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(554,339.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(468.1,513.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_3, new cjs.Rectangle(387,261.8,332.8,277.8), null);


(lib.actMc1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 4;
		var maxItem = 4;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(450.2,451.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(450.2,396.4);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(450.2,341.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(450.2,286.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc2op4();
	this.instance.parent = this;
	this.instance.setTransform(589.2,460.5,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc2op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(594,286.1,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc2op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(589.2,406.3,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc2op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(594,340.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(493.1,527.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_2, new cjs.Rectangle(413.8,262.8,253.5,290.8), null);


(lib.actMc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 4;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnSubmit.mouseEnabled = true;
			this.btnSubmit.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(5);
			} else {
				//wrong
				_this.parent.sendScore(1);
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(472.2,455.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(472.2,403.7);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(472.2,351.9);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(472.2,300.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc1op1d();
	this.instance.parent = this;
	this.instance.setTransform(611.2,464.4,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc1op1a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(616,300.1,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc1op1c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(611.2,413.6,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc1op1b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(616,350.9,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(540.1,520.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_1, new cjs.Rectangle(449,276.8,173.5,269.8), null);


// stage content:
(lib.f5d1q5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:145,q3:186,q4:227,q5:268,q6:309,q7:351,q8:392,finalFb:438});

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
		var stageNum = 13;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		var maxQ = 4;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		this.qList1 = [0, 1, 2, 3, 4, 5];
		var qItem1 = [{
				"qId": "f5d1q5_1",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5d1q5_2",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5d1q5_3",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5d1q5_4",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5d1q5_5",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5d1q5_6",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		var qItem2 = [{
				"qId": "f5d1q5_7",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 32,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5d1q5_8",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 32,
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
			this.myData.qItem.push(qItem1[4]);
			this.myData.qItem.push(qItem1[5]);
			this.myData.qItem.push(qItem2[0]);
			this.myData.qItem.push(qItem2[1]);
		} else {
			//shuffle and take only what we need
			this.qList1 = shuffle(this.qList1);
			this.myData.qItem.push(qItem1[this.qList1[0]]);
			this.myData.qItem.push(qItem1[this.qList1[1]]);
			this.myData.qItem.push(qItem1[this.qList1[2]]);
			this.myData.qItem.push(qItem2[randRange(0,1)]);
		}
		
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
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(7));
			} else {
				//all questions done
				clearInterval(timeInterval);//stop time
				saveData();
			}
			console.log(_this.myData);
		}
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			goNextQ();
		}
		this.addEventListener("click", doPlay);
		var isTimeOut = false;
		_this.onTimeEnd = function (){
			_this.myData.qItem[_this.currentQ-1].time = _this.timeGiven;
			isTimeOut = true;
			saveData();
		};
		function saveData(){
			if (cUserId == ""){//not online
				_this.gotoAndPlay("finalFb");
			} else {
				//save data here
				var cData = $.post("/api/record/update/", 
								_this.myData,
									function(data){
										console.log("set score"+data.message);
										if (data.message=="success" && !isTimeOut){
											_this.gotoAndPlay("finalFb");
										} else if (data.message=="success"){
											//nothing
										} else {
											console.log("error");
										}
									});
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
			_this.myData.qItem[_this.currentQ-1].score = _cScore;
			_this.myData.qItem[_this.currentQ-1].time = _this.timeGiven-_this.secRemaining;
			_this.timeGiven = _this.secRemaining;
			goNextQ();
		};
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_104 = function() {
		playSound("questionAlert");
	}
	this.frame_139 = function() {
		this.stop();
	}
	this.frame_145 = function() {
		playSound("questionAlert");
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_186 = function() {
		playSound("questionAlert");
	}
	this.frame_221 = function() {
		this.stop();
	}
	this.frame_227 = function() {
		playSound("questionAlert");
	}
	this.frame_262 = function() {
		this.stop();
	}
	this.frame_268 = function() {
		playSound("questionAlert");
	}
	this.frame_303 = function() {
		this.stop();
	}
	this.frame_309 = function() {
		playSound("questionAlert");
	}
	this.frame_344 = function() {
		this.stop();
	}
	this.frame_351 = function() {
		playSound("questionAlert");
	}
	this.frame_386 = function() {
		this.stop();
	}
	this.frame_392 = function() {
		playSound("questionAlert");
	}
	this.frame_427 = function() {
		this.stop();
	}
	this.frame_438 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_609 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(35).call(this.frame_139).wait(6).call(this.frame_145).wait(35).call(this.frame_180).wait(6).call(this.frame_186).wait(35).call(this.frame_221).wait(6).call(this.frame_227).wait(35).call(this.frame_262).wait(6).call(this.frame_268).wait(35).call(this.frame_303).wait(6).call(this.frame_309).wait(35).call(this.frame_344).wait(7).call(this.frame_351).wait(35).call(this.frame_386).wait(6).call(this.frame_392).wait(35).call(this.frame_427).wait(11).call(this.frame_438).wait(171).call(this.frame_609).wait(290));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(334).to({_off:true},172).wait(289));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(438).to({_off:false},0).to({_off:true},172).wait(289));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,75.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(334).to({_off:true},172).wait(289));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:77.8},16,cjs.Ease.cubicOut).wait(393).to({startPosition:0},0).to({_off:true},172).wait(289));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(608.9,161.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(795));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},395).wait(461));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",2);
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},395).wait(461));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(438).to({graphics:null,x:0,y:0}).wait(461));

	// actMc
	this.instance_4 = new lib.actMc1_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,310);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc1_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,350);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc1_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,310);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc1_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,330);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc1_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,330);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc1_6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,330);
	this.instance_9._off = true;

	this.instance_10 = new lib.actMc1_7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,330);
	this.instance_10._off = true;

	this.instance_11 = new lib.actMc1_8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,330);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(754));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(167).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(713));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(208).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(672));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(249).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(631));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(290).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(590));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(331).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},7).wait(548));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(373).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(507));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(414).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},11).wait(461));

	// q
	this.instance_12 = new lib.mcQ7();
	this.instance_12.parent = this;
	this.instance_12.setTransform(537.5,223,0.05,0.05);
	this.instance_12._off = true;

	this.instance_13 = new lib.mcQ8();
	this.instance_13.parent = this;
	this.instance_13.setTransform(494.4,203.8,0.05,0.05);
	this.instance_13._off = true;

	this.instance_14 = new lib.mcQ9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(521.5,203.8,0.05,0.05);
	this.instance_14._off = true;

	this.instance_15 = new lib.mcQ10();
	this.instance_15.parent = this;
	this.instance_15.setTransform(472.4,203.8,0.05,0.05);
	this.instance_15._off = true;

	this.instance_16 = new lib.mcQ11();
	this.instance_16.parent = this;
	this.instance_16.setTransform(395.1,203.8,0.05,0.05);
	this.instance_16._off = true;

	this.instance_17 = new lib.mcQ12();
	this.instance_17.parent = this;
	this.instance_17.setTransform(395.1,203.8,0.05,0.05);
	this.instance_17._off = true;

	this.instance_18 = new lib.mcQ13();
	this.instance_18.parent = this;
	this.instance_18.setTransform(395.1,203.8,0.05,0.05);
	this.instance_18._off = true;

	this.instance_19 = new lib.mcQ14();
	this.instance_19.parent = this;
	this.instance_19.setTransform(500.1,203.8,0.05,0.05);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.instance_17,this.instance_18,this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:466.3,y:204},21,cjs.Ease.elasticOut).to({_off:true},20).wait(754));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(145).to({_off:false},0).to({scaleX:1,scaleY:1,x:407.7,y:193.8},21,cjs.Ease.elasticOut).to({_off:true},20).wait(713));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(186).to({_off:false},0).to({scaleX:1,scaleY:1,x:539.2,y:213.8},21,cjs.Ease.elasticOut).to({_off:true},20).wait(672));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(227).to({_off:false},0).to({scaleX:1,scaleY:1,x:370.1,y:198.8},21,cjs.Ease.elasticOut).to({_off:true},20).wait(631));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(268).to({_off:false},0).to({scaleX:1,scaleY:1,x:306.2,y:214.6},21,cjs.Ease.elasticOut).to({_off:true},20).wait(590));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(309).to({_off:false},0).to({scaleX:1,scaleY:1,x:388.6,y:210.8},21,cjs.Ease.elasticOut).to({_off:true},21).wait(548));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(351).to({_off:false},0).to({scaleX:1,scaleY:1,x:366.6,y:200.8},21,cjs.Ease.elasticOut).to({_off:true},20).wait(507));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(392).to({_off:false},0).to({scaleX:1,scaleY:1,x:366.6,y:200.8},21,cjs.Ease.elasticOut).to({_off:true},25).wait(461));

	// progress
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(593,76.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(605.1,76.5);

	this.prog3 = new lib.progress();
	this.prog3.name = "prog3";
	this.prog3.parent = this;
	this.prog3.setTransform(617.3,76.5);

	this.prog4 = new lib.progress();
	this.prog4.name = "prog4";
	this.prog4.parent = this;
	this.prog4.setTransform(629.4,76.5);

	var maskedShapeInstanceList = [this.prog1,this.prog2,this.prog3,this.prog4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog4},{t:this.prog3},{t:this.prog2},{t:this.prog1}]},99).to({state:[]},339).to({state:[]},172).wait(289));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).to({state:[]},584).wait(289));

	// gfx
	this.instance_20 = new lib.Symbol3();
	this.instance_20.parent = this;
	this.instance_20.setTransform(188.2,429.9);

	this.instance_21 = new lib.Symbol3copy2("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(189.2,439.5);

	var maskedShapeInstanceList = [this.instance_20,this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_20}]},20).to({state:[{t:this.instance_21}]},331).to({state:[]},87).wait(461));

	// bg
	this.instance_22 = new lib.Symbol2("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(394.4,296.6);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(20).to({_off:false},0).to({_off:true},418).wait(461));

	// bg
	this.instance_23 = new lib.Bitmap3();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).to({_off:true},610).wait(289));

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
		{src:"images/f5d1q5/Bitmap1.png?1527949026592", id:"Bitmap1"},
		{src:"images/f5d1q5/Bitmap19.png?1527949026592", id:"Bitmap19"},
		{src:"images/f5d1q5/Bitmap22.png?1527949026592", id:"Bitmap22"},
		{src:"images/f5d1q5/Bitmap3.png?1527949026592", id:"Bitmap3"},
		{src:"images/f5d1q5/Bitmap5.png?1527949026592", id:"Bitmap5"},
		{src:"images/f5d1q5/Bitmap9.png?1527949026592", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1527949026592", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1527949026592", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1527949026592", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1527949026592", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1527949026592", id:"submitAns"},
		{src:"sounds/suspense.mp3?1527949026592", id:"suspense"},
		{src:"sounds/timeout.mp3?1527949026592", id:"timeout"}
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;