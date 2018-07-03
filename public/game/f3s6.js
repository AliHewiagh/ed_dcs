(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



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
	this.myTxt = new cjs.Text("Rotate the following puzzle pieces based on the\ninstruction given. Click ‘Reset’ if you want to \nreturn a puzzle piece to its original position.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 412;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-238,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egg7AAAMBB3AAA");
	this.shape.setTransform(-40.9,65.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A/kGwIAApVIikADICkh8IAAiMMBB3AAAIAANa");
	this.shape_1.setTransform(-49.6,22.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A/oGtIAApUIilACIClh7IAAiMMBB2AAAIAANZg");
	this.shape_2.setTransform(-49.1,22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,445.5,88.9), null);


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
	this.myTxt = new cjs.Text("Putarkan kepingan susun suai berikut \nberdasarkan arahan yang diberi. Klik pada butang\n‘Semula’ sekiranya anda ingin mengembalikan\nkepingan susun suai ke posisi asal. ", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 417;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-240,-13.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EghVAAAMBCrAAA");
	this.shape.setTransform(-38.2,96.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A/+JLIAAouIilACIClh5IAAlfIAAiMMBCrAAAIAASQ");
	this.shape_1.setTransform(-46.9,37.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EggDAJJIAAouIikACICkh6IAAleIAAiMMBCrAAAIAASQg");
	this.shape_2.setTransform(-46.5,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,448.5,119.9), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


(lib.puz_YELLOW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFAD4").s().p("Ak6gwQAagwAxgHQAngFAvAOQAJACAIADIAHADQAaAJAsAdIAUAPIAAAAIBUAyQB7BJBsguQATgHAVgUIAighQgPAngWAYQgbAcgpAKQg/AOg8gWQg8gXgegPQgegRgngZIgCgCIAAAAQghgZhCgZQhEgbg7AdQg7AdgZCBQAIhpAbgwg");
	this.shape.setTransform(-108,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFAD4").s().p("ADrg3Qg7gnhEAPQhFAPghATQggAUgYALQgYALgxALQgyAMg0gYQglgTgVgWQgXgZgLglQALAQAUAPIAkAaQBZA/BkgyIBagwQAsgVAagGIAHgBIAQgCQAvgGAoAMQAwAPAbA1QAaA0AIBrQgYiFg7gog");
	this.shape_1.setTransform(106.5,21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAD4").s().p("AA7BKQhIgIg+gLQhAgMg+gJQg/gJhMgOQhNgNhbglIBLALQB8AWAkAFIBZALQA1AGA5AJQA4AJA6AEQA9AGA9ADQA6ACA7gBQA7gBA6gNQA+gMAfg1IAKgSQAJgNAAgSQACA6grAnQgyAwhGAIQhIAIhHAAIgJAAQhFAAhDgHg");
	this.shape_2.setTransform(-82.3,-98.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAD4").s().p("Ag0CxQhFgChAgYQg+gYg6geQgzgbgrgoQgpgkgVgzQgTgvgHg1QANA1AdAtQAdAvAsAeQAtAgAyAVQA3AXA6AJQA7AHA7ABQA0ADA2gGQA8ABA5gMQA4gLA1gRQA2gSAxgdQAygdAag1QAXgygPg0IgEgQQAkBEghBGQghBIhEAtQg8AqhGAXQg9AUg/AHQg8AKg7AAQgZAAgZgCg");
	this.shape_3.setTransform(-3.7,-138.5,0.765,0.624,0,-176.1,4.1,-0.6,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAD4").s().p("AkZBnQhMgFgvgMQgvgLgegWQgigYgFgoQgGgrAeg1QgkBUA/AnQA3AiCcALQBpAHB+gIQBQgFCVgQQA9gHAugIQBegOB3gbQhVAshiAYQgtAMhzASQidAbijAAQhFAAhHgFg");
	this.shape_4.setTransform(70.4,-101.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#D0B944","#FFF383"],[0.204,1],-13.2,78.4,-13.2,-123.5).s().p("AlWXBQh3g9BbioQBgizhJhCQg9g4j6gSQiogMkfA1Ij5A1QhJlsAEjAQAEi/Aag8QAag8A4gQQA5gQBDAYQBDAYBKA2QBLA1BGASQBHARAygSQAxgTAkgrQAjgrAUhfQAThfgYiEQgYiEhCg2QhEhChqAUIgBAAQgeAGghANQgrARgmAMQjAA7hUg+IgOgNQgsgggniTQgmiTCOlqQChAUESAmQEQAeCxgVQBhgMAZggQAwg9hZinQhUigC6hLQBdglBvgGQBWgKBjAbQBcAZBFAyQBHAyAPA1QASA7g6AsQhwBXANBKQALBDBdAMQCkAXCdgEQEKgHFehJQBHgOAdB8QAUBRAEC0QAECXgOB6QgHA9gIAfQgEARgkAFQhHALigg7QiyhBhoAmQh5AsgNC3QgEBAAdBCQAcBBAyAxQAzAzA6ARQBAASA4gcIBmgyQBAgbAvgFQCAgLAuClQA3DIgXDzQgYD+hcAgQgjAMkBgwQkRgzhfAMQi3AXh3A3QjBBbCFCGQCWCYiTBPQhwA7j2AHIgxABQilAAhIglg");
	this.shape_5.setTransform(-2.4,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#877D32").s().p("AlFXBQh3g9BbioQBgizhJhCQg9g4j6gSQipgMkeA1Ij9A2IgwglIACgFIgGgiQgUhfgNhfQgNhYgIhcQgHhXAFhXQAFhWAOhUQAGgmAXgfQBDhYBrArQBVAiBNAzQBRA1BeAPQBfANA7hKQA4hFARhZQAThbgchaQgbhZg+hFQhHhNhrAMQg0AGgtAXQhKAnhSAPQgoAIgogDIgggIQgSgFgPgPQgSgQgNgWQgQgdgOgfQgTgugUhAQgNgrAAg1QgMimCAkSIgBAAIABAAQCfAfEvAqQERAeCxgVQBhgMAZggQAwg9hZinQhUigC6hLQBdglBugGQBXgKBiAbQBdAaBFAxQBGAyAQA1QARA7g5AsQhxBXANBPQAGAhAcAUQAdAUApABICvAJQBqAGBPgBQDlgEFHhCIgTgrQAggFAcATQAXAQAXAiQAWAcANA4QATBRAFC0QAECXgOB6QgHA9gIAfQgEARgkAFQhIALigg7QiyhBhoAmQh4AtgNC2QgFBAAeBDQAbBAAyAxQA0AzA6ARQBAASA4gcQBcguAKgEQBAgbAugFQCBgLAtClQA4DIgYDzQgYD/hbAfQgkAMkBgwQkQgzhgAMQi2AXh4A4QjABaCECGQCXCYiUBPQhvA7j2AHIgtABQipAAhIglg");
	this.shape_6.setTransform(0.8,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,-152.8,293.7,305.7);


(lib.puz_PURPLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9CE8").s().p("AhUhvQBtggC6B9QighdhtAgQhuAfgqCnQAQjHBugfg");
	this.shape.setTransform(123.6,-53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9CE8").s().p("ACkhhQj8hHhLEsQA4llEPCAg");
	this.shape_1.setTransform(-165.8,-47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9CE8").s().p("AjQBQQGRCbALmIQAiE7jEAAQhgAAiahOg");
	this.shape_2.setTransform(-121.1,-53.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BC359D").s().p("AC2gyQiCgrh3BDQgvAagxALQg0AMgxgXQhFgigVhJQAaAjAjAZQBaBABfg5QBVg0BhgFQBigCBUAzQBYA2ALBmQg0h1h5gpg");
	this.shape_3.setTransform(144,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9CE8").s().p("Ag0DKQhwABhmgTQh3gjhEhIQg3g8gKhCQgHg0AFgaQAAAMAHAZQAGAXAGANQA2BxCIAuQBEAWBMAJQA0AGBFAAQBWgBBIgOQBTgPBSghQBqg3A0gsQA2gvALgxQAEgbAAgQQgBgZgHgSQAWAvAFAlQACA9g7A+Qg+BCh5A9QigBHicAAIgTgBg");
	this.shape_4.setTransform(27.7,-85.1,0.825,0.547,0,0,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9CE8").s().p("AEwBzQAVg6AcgzQAMgXADgUQACgPgEgWQgIglgggPQgggNgRgGQgpgOgwgIQmogIi5AWIAsgfQENgmCsAPQCtAPBKAOQBJANAfArQAPAWgPAtQgLAigiA4QgiA7gOAiQgSAuADAmQgZgoAWg5g");
	this.shape_5.setTransform(-47.2,-113.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9CE8").s().p("AiFGIIAcgEQAjgHAfgTQBig+AVicQAVibgZjTIgdizIAuCoQAtDDgECEQgFCnhBBQQgyA9hNAAQghAAglgKg");
	this.shape_6.setTransform(164.5,-92.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF9CE8").s().p("AnQC1Ig1gtQgmgggQguQgQguANgoQAehTCFg2QBpgrCLgMQBEgHBgAFIBpAIQCLANC4AvQBcAYBAAUQiAgeh1gTQh4gUiJgMQiKgNiMAVQhvAQhKAeQhBAbgbAUQgbAVgUAnQgZAvAMArQAIAdAVATQALALARAXIAaAlQAMARAFAdQgNgcgPgQg");
	this.shape_7.setTransform(111.1,-121.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#A83A9B","#E577C9"],[0.18,1],20.1,42.9,20.1,-87.3).s().p("AhdU5QgwgrgIgzQgIg0BFhmQBFhmgOhwQgOhwjVgeQjVgejUAEQjTAFjgAYQANg7AQg4QBLkNAGhzQAEhHgYhEQgZhGguguQhuhvifBNQjoBuh2hEQhzhCAPjdQAPjkCDgxQBdgiBkA1QBdAxBSA0QBRAzBhgXQBigXABkKQAAkLg/kaIE6g4QFWgUCkAXQDFAdApAxQAsA1hVCBQieDtDzA2QCfAkDhgqQCkgfBPg9QBghKhphPQg3gqgYgzQgYg1ARgyQAnh4Dug3QDtg3EgAhQEgAhA3ArIA1CGQAfCAAWCWQAhDmhGCDQhbCnjjiAQjGhvhuBiQheBTgDC+QAAA1AZA9QAZA9ApAtQBkBsBog7QByhBB1ACQCJADBXBkQBOBahKF0QgkC2ghCTQgIgViugsQjHgzk+AQQk+AQhsBZQhsBZCKCZQCKCYifBcQh/BKkBATQgZABgZAAQimAAhfhWg");
	this.shape_8.setTransform(-1.2,-3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#41153B").s().p("AhdVOQgwgqgIgzQgIg0AkgtQBkh5gOhXQgNhYh/hYQh/hYkXgRQkXgRkUAlIgLgCIgKgnIAihEQAwiUAVhUQAVhUgOhFQgOhGgVgzQgVgzg9hHQg9hJi8BgQi9Beh2hEQhzhBAPjeQAPjkCDgxQBdgiBkA1QBdAxBMATQB1AdBTgxQBTgxgQkXQgRkWgujYIEUAAQGMgLCkAYQBsAQA+AWIgPgQIArgYQA5AwgBBLQAAA0g5BWQieDuDzA2QCfAjDhgqQCkgfBPg9QBghKhphPQgwgkgYgrQgrhEgDhKIAfAAIADAUQArh0DLhJQDMhKD8AVQD8AVCkAqIAwBZQBYChATDWQATDWhVCjQhWCijjiAQjGhvhuBjQheBTgDC9QAAA2AZA8QAZA9ApAuQBkBsBog8QByhBB1ADQB0ACBQBIIAFgjQAmA3AQBOIABAHIABADQAXB6g0EEQglC6g4BeQgSgUkPgxQkRgxjiAeQjjAfhnBqQhnBrCSCUIATAUIAAgfQAfApAMA+QAbBThqA+Qh/BKkBASQgZACgZAAQimAAhfhXg");
	this.shape_9.setTransform(1.3,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.5,-145.6,367.1,291.2);


(lib.puz_GREEN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5F570").s().p("AjsB2QkKgqAGiRQAAgKAOgiQgFAYACAWQAMB1DtAlQEXAsEAhFQCug2ANhPQAFgegSghQAWAoACAVQAKBljPBAQieArilAAQhpAAhsgRg");
	this.shape.setTransform(-4.9,-64.8,0.897,0.897);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#93DB56").s().p("AGJCeQgGgpgNgnQgPgqgcggQgggkgxgHQgsgEgsAPQgzARgyATIhoAmQgzATg6ADQg8ACg1gdQg3ghggg2Qgjg5gHhEQAHAWAKAVQAeA7AxArQAsAjA1ALQBDALA/gRQAwgLAwgSIB5guQA0gVAzACQBDAGAhA4QAcArAJAzQAJAvABAxIgDgOg");
	this.shape_1.setTransform(118.2,21.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D5F570").s().p("AH8BJQANg/gcgnQgdgpi4gcQi5gbhzgFQh0gFhIgHQhHgIhBgDQhBgEiigRQDXACBwAFQBuAFDeAGQDeAFBcAbQBcAcAjAaQAjAaAGAfQAHAcgaAwQgaAxgxBAQAUgoAMg/g");
	this.shape_2.setTransform(-93.1,-100.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D5F570").s().p("ApWA8QgUgsADgaQADgbAmgaQAmgaCKgjQCJgiEGgQQEIgSFgAcQlXAThgABQhhACh7AGQh8AHizAkQiyAjgXAmQgYAkANA/QANA/ATAoQgwhAgZg6g");
	this.shape_3.setTransform(86,-101.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#93DB56").s().p("AlyAmQAWgyAlgrQAjgqAwgcQAwgbA4AHQA4AJAwAaQAuAZAuAgQAvAgAyAYQAxAXA1gNQA3gNAkgtQAggoAVgwQgHA2gSAyQgVA6g9AUQg6ASg7gPQg3gOgvgcIhkg3Qgzgbg2gRQg4gRg0AaQg1AagjAvQggApgaAtQgUAkgYAgQAUg2AYg3g");
	this.shape_4.setTransform(-116.8,23.4,0.897,0.897);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#619C47","#A9D43E"],[0.173,1],-4.1,74.9,-9.5,-78.4).s().p("AtqSiQkDgMjAhIQifg8g5iXQg5iXAPj5IAHgrQAXh6A/hhQBRh9BYgGQBfgHDBB2QBDAoA7giQAzgeAnhRQAjhKAPhcQAOhagKhFQgTh5ivgHQh/gEjlA6QhRAVhBgeQg6gaglg8Qgig4gIhEQgHhDAVg0QAZg/AOhEQARhWADhtQAChLgChRIgDhBIGCAQQCbAGCPACQBsACAYACQDKANBnA2QB7BAhNBkQhvCOAGBTQAGBXCGAdQCMAfCwgGQC1gIBogsQBagmgBg5QAAg4hZh2QhDhZAbg6QAag3BzgeQBugcCjgUQC/gYDKgEQDIgDC+AAIArBoQAgBLAPBAQAPA/ANApQAMAoAMBTQAMBUAABCQABBCgjBDQgHANgLAKQg1AwhCAVQhFAYhIgKIgYgEQgOgEgNgFQg1gXgwggQgwgfg7gDQg4gBguAgIgIAGQgtAigiAtIgKAPIgTAhQgMAXgOA4QgOA4AMBIQANBIAeA3QAfA3AxAnQAyAnAkAPQA7AYA7gQQA8gPBXgpQBXgoAygLQAygKBAAWQA/AWATBUQASBKACBUQACBVgEBJQgEBIgLBFQgLBEgMA5QgMA4gXA7QgSAvgZAiQhWA9igAmQigAmhqAIQhqAIg3AAIhCABQkyANiKhxQg2gsgFg3QgDgzAngoQCsiwh4hYQgyglhcgRImWAAQh/AUg8AuQhlBNB8CCQA+BBgMBFQgMBAhJA1QhKA1h0AcQhiAYhvAAIg2gCg");
	this.shape_5.setTransform(0,-1.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2D4521").s().p("AtUSXQkDgMjAhIQifg7g7iIQg8iHAGjIQACgrAHgoIAAgHIABAAQAWiBBChmQBRh9BYgGQBfgIDBB2QBDApA7giQAzgeAnhSQAihJAQhcQAOhbgKhEQgTh5ivgHQh/gFjlA7QhRAVhBgeQg6gaglg8Qgig4gIhEQgIhDAWg1QAZg+AOhEQARhWADhtQAChLgChRIgDhBIGCAQQCbAGCPACQBrACAZACQC3AMBmAuIAlgQQApAqANAzIADAKQAIAnglAvQhuCOAGBTQAGBXCGAdQCLAfCwgGQC2gIBogsQBagnAIg5QAJg6hFhpQhFhpAIg2QAJg1BygeQBvgcCjgVQC/gXDKgEQDFgDC8AAQAyCDAdB0QAUBRAMBCQAcCJgIBKQgJAggJAbQgjBqgnAXQhOAwhBAEQhBADg1gWQg2gWgygdQgygdg7gDQg9gBgxAmQggAZgbAeIgKAMQgnAtgLAdIgFANQgUA7AHBTQAIA6ATA3QAlBKBBAsQBrBIBNgQQBNgQB0g5QB0g5BSAbQBSAbAUBWIAGAhQAZCqgVCyQgVCzgiBdQgiBdghAsIgNANIgdAeIgBAAQhMA6h4AjQh5AkjLALQjMAMiWgcQiXgbgzgwQgygvgEgLIgFgOQgfgtgMg5IA6ghIADgFIACgBQCsiwh4hYQgigZhQgMQkAgaj0AWQhOATgrAhQhlBOB8CCQA9BBgLBEQgMBBhJA1QhKA1h0AcQhjAYhxAAIgzgCg");
	this.shape_6.setTransform(1.4,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,-120.3,319.9,240.7);


(lib.puz_BLUE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7EDFFF").s().p("AkpBtQiigVg/gvQgigYABguQACgvAjgzQgrBPBEAxQBAAuCiAVQD5AfDygUQCDgLDJg4Qh3AxhLAXQheAehKAGQhfAIhhAAQiTAAiYgTg");
	this.shape.setTransform(76.3,-89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7EDFFF").s().p("AjABjQjSgaiwhQQDCAvCjAUQD5AfEAgWQCngOBBgsQBGgtgshSQAkA0ABAuQABAtgjAXQhCAsimAOQhqAJhpAAQiUAAiSgSg");
	this.shape_1.setTransform(-86,-89.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5EA4DB").s().p("AhnCHQhyhRA5jkQgbDGByBSQBpBKCUgfQhQAahBAAQhQAAg6gog");
	this.shape_2.setTransform(142.5,-25.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5EA4DB").s().p("AizCfQCUAYBphOQByhWgbjGQA5DihyBWQg/AvhYAAQg8AAhIgVg");
	this.shape_3.setTransform(-149.4,-24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5EA4DB").s().p("ACmgoQgwhIhXgKQg+gHhKAPIh8AfQCXhAAwgEQAtgDAUAEQBeALAxBGQAyBFAABFQAABFACAQQgViEgrg+g");
	this.shape_4.setTransform(189.6,-3.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5EA4DB").s().p("AihgkQA7hVBagcQBsgXB5BmQk2iWh6F3QgIhnA+hYg");
	this.shape_5.setTransform(-194.3,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7EDFFF").s().p("AgXCXQhggBg5gLQgvgKhMgZQgcgJgagNQgPgIgigVQgrgZgegwQgfg1AXg5QgHA9AnAuQAkAqAyAZQBEAkAkAJIA2AOQAfAHAZADQAmAFBPABQBFABA0gJQAYgDAigGIA6gLQAmgIBIgaQA3gSAvgiQAwggAPg4QAKgigPgiQAjAvgYA3QgkBOhTAkQhJAhhLAWQg+ARhAAJQg1AGg0AAIgJgBg");
	this.shape_6.setTransform(-4.6,-130.5,0.84,0.78,0,180,-1.7,0.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4F6CAA","#60BDDB"],[0.188,1],-4.8,71.7,-4.8,-89.6).s().p("AyjVQQhlgYhYgfQhLgZADgEQBkiVAYkJQANiRgMimQgDgtgTgvQgYg7gogkQgdgagkgLQgzgOg0AQQhqAghhA0Qg7AghDgIQi5gVgvi6Qgvi3B8iLQCCiUCnBvQCYBkCfhLQAbgOAbgUQB6hchUleQgahugsh6IgmhkQCyA8FLAZQFLAZCugkQCvglgbhaQgKgigqg3IhShiQgngwAng5QAlg2BdgpQBfgrB0gLQB/gOB1AeQB7AgA5AfQA5AgAJAqQAIAmgeA9QgUAohBBhQhZCHD4AzQB9AZCOgCQDdAECOgRQC3gVCWhAQhwEwgBCeQgCCdAbBFQAaBFBBAiQA9AiBMAAQBOAABwgrQBvgrBDgGQBCgHBXA8QBWA7AACYQgBCZhQB+QhDBphYgHQg9gFiVhTQiEhJhoAxQhuAyg+C0QhKDVBhEEQAxCCBABXIiUAlQieAgh+AKQhoAJihAAQgrAAgngCQg8gCg9gFQhEgFhBgOIg6gOQgUgFgSgJQgTgKgPgTQgVgaABgiQABgtASggQASggAhgZQAggZANgWQANgVAFgSQAGgRgGgYQgFgZgfgaQgogggvgWQg5gcg/gOQhrgYiJAEQkNAJgfB0QgWBSBgB9QBJBfhPBIQgjAfg9AZQhaAjiSAVQhAAJhJAAQipAAjWgzg");
	this.shape_7.setTransform(-1.7,-2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E1C40").s().p("AyjVQQhlgYhYgfQhLgZADgCIgigyIBdhCQAxh9AQivQANiRgMimQgDgtgTgvQgYg7gogkQgdgagkgLQgzgOg0AQQhqAghhA0Qg7AghDgIQi5gVgvi6Qgvi3B8iLQCCiUCnBvQCYBkCfhLQAbgOAbgUQB6hchUleQgahugsh6IgmhkQCyA8FLAZQFLAZCugkQCvglgbhaQgKgigqg3IhShiIgFgIIgCgCIgOgPQgGgGgIgQIgQghIA+gnQAmgtBRgkQBfgrB0gLQB/gOB1AeQB7AgA5AfQA5AgAJAqQAIAmgeA9QgUAohBBhQhZCHD4AzQB9AZCOgCQE3AiEYhcIgHgoIBPgwIAhAwQhwEwgBCeQgCCdAbBFQAaBFBBAiQA9AiBMAAQBOAABwgrQBvgrBDgGQBCgHBXA8QBWA7AACYQgBCZhQB+QhDBphYgHQg9gFiVhTQiEhJhoAxQhuAyg+C0QhKDVBhEEQAxCCBABXIiUAlQieAgh+AKQhoAJihAAQgrAAgngCQg8gCg9gFQhEgFhBgOIg6gOQgUgFgSgJIgBgBIgCgBIgCgBQg8gggVhRIA/hFQAQgVAXgRQAggZANgWQANgVAFgSQAGgRgGgYQgFgZgfgaQgogggvgWQg5gcg/gOQhrgYiJAEQkNAJgfB0QgWBSBgB9QBJBfhPBIQgjAfg9AZQhaAjiSAVQhAAJhJAAQipAAjWgzg");
	this.shape_8.setTransform(1.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-216.8,-143.5,433.8,287.1);


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
	this.txtTime = new cjs.Text("2:00", "60px 'Quantico'", "#006666");
	this.txtTime.name = "txtTime";
	this.txtTime.textAlign = "center";
	this.txtTime.lineHeight = 88;
	this.txtTime.lineWidth = 242;
	this.txtTime.parent = this;
	this.txtTime.setTransform(-1,-23.2,0.537,0.542,0,-2.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.txtTime).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTimer, new cjs.Rectangle(-66.6,-30.6,133.3,61.3), null);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(252,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_1.setTransform(243.1,47.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(231.1,47.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_3.setTransform(223.7,47.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_4.setTransform(213.9,45.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(204.2,47.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(197.2,47.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(188.8,47.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(175.3,47.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_9.setTransform(165.6,47.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAYBAIAXhAIAMAAIgdBPg");
	this.shape_10.setTransform(154.1,47.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(142.1,47.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_12.setTransform(135.7,45.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_13.setTransform(124.9,45.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_14.setTransform(115.2,47.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_15.setTransform(107.7,47.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_16.setTransform(104.4,47.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(96,47.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(86.4,45.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_19.setTransform(72.8,45.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgWA2QgKgDgHgHIAFgKQAIAHAIADQAHADAIAAQANAAAIgNQAIgNAAgXIAAgCQgDAIgIAFQgJAFgKAAQgKAAgIgEQgIgFgEgHQgFgIAAgLQAAgKAFgJQAFgIAIgFQAIgEALAAQATAAAMAOQALAOAAAbQAAAcgMAQQgLAQgUAAQgKAAgJgEgAgTgnQgHAHAAALQAAALAHAHQAGAGAMAAQAKAAAHgGQAHgHAAgLQAAgLgHgHQgHgHgLAAQgLAAgGAHg");
	this.shape_20.setTransform(63.2,45.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgMQALgLAAgXQAAgtgrAAIgZAAg");
	this.shape_21.setTransform(48.4,45.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(33.3,47.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(23.7,47.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(14,49);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(4.7,47.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(-1.8,45.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAIQAGAHALAAQAMAAAHgHQAGgIAAgOQAAgPgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_27.setTransform(-8.3,48.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-17.6,47.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_29.setTransform(-25.4,45.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(-39.2,47.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-48.8,47.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_32.setTransform(-56.8,45.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_33.setTransform(-64,47.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(-72.5,47.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_35.setTransform(-79.9,46.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_36.setTransform(-87.3,47.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAIQAGAHALAAQAMAAAHgHQAGgIAAgOQAAgPgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_37.setTransform(-96.5,48.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_38.setTransform(-110.4,47.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_39.setTransform(-120.1,47.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_40.setTransform(-129.7,45.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_41.setTransform(380,23.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(368,23.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_43.setTransform(360.5,23.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_44.setTransform(350.8,21.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_45.setTransform(341,23.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_46.setTransform(334.1,23.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(325.6,23.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_48.setTransform(314,22.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_49.setTransform(306.6,23.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_50.setTransform(298.6,21.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_51.setTransform(291.9,21.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_52.setTransform(281.1,21.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_53.setTransform(271.4,23.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_54.setTransform(263.9,23.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_55.setTransform(260.6,23.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_56.setTransform(252.2,23.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_57.setTransform(242.6,21.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgcArQgLgPAAgcQAAgcALgPQAJgOATAAQATAAAKAOQALAPAAAcQAAAcgLAPQgKAPgTAAQgTAAgJgPgAgTgjQgGAMgBAXQABAYAGALQAHAMAMAAQANAAAHgLQAGgMABgYQgBgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_58.setTransform(229,21.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgdA5IA0hmIg8AAIAAgLIBKAAIAAAKIg0Bng");
	this.shape_59.setTransform(219.4,21.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgEAKABQAPAAAJAIQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_60.setTransform(209.8,21.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_61.setTransform(195.4,21.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(180.9,23.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(171.3,23.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_64.setTransform(161.6,25.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_65.setTransform(152.3,23.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_66.setTransform(145.8,21.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_67.setTransform(139.3,25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_68.setTransform(130,23.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_69.setTransform(122.2,21.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_70.setTransform(108.4,23.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_71.setTransform(98.8,23.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_72.setTransform(90.8,21.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_73.setTransform(83.6,23.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_74.setTransform(75.1,23.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_75.setTransform(67.7,22.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_76.setTransform(60.3,23.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_77.setTransform(51.1,25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAGg");
	this.shape_78.setTransform(40,27.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_79.setTransform(31.1,23.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_80.setTransform(19.1,23.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_81.setTransform(11.7,23.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_82.setTransform(1.9,21.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_83.setTransform(-7.8,23.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_84.setTransform(-14.8,23.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_85.setTransform(-23.2,23.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_86.setTransform(-34.9,22.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_87.setTransform(-42.2,23.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_88.setTransform(-50.3,21.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_89.setTransform(-57,21.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_90.setTransform(-67.7,21.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_91.setTransform(-77.5,23.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_92.setTransform(-84.9,23.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_93.setTransform(-88.2,23.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_94.setTransform(-96.7,23.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_95.setTransform(-106.3,21.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgcArQgLgPAAgcQAAgcALgPQAJgOATAAQATAAAKAOQALAPAAAcQAAAcgLAPQgKAPgTAAQgTAAgJgPgAgTgjQgGAMAAAXQAAAYAGALQAHAMAMAAQANAAAHgLQAGgMABgYQgBgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_96.setTransform(-119.8,21.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgWA2QgKgDgHgHIAFgKQAIAHAIADQAHADAIAAQANAAAIgNQAIgNAAgXIAAgCQgDAIgIAFQgJAFgKAAQgKAAgIgEQgIgFgEgHQgFgIAAgLQAAgKAFgJQAFgIAIgFQAIgEALAAQATAAAMAOQALAOAAAbQAAAcgMAQQgLAQgUAAQgKAAgJgEgAgTgnQgHAHAAALQAAALAHAHQAGAGAMAAQAKAAAHgGQAHgHAAgLQAAgLgHgHQgHgHgLAAQgLAAgGAHg");
	this.shape_97.setTransform(-129.5,21.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAHQgFAGgIAEQAKABAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaABIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_98.setTransform(385,-2.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_99.setTransform(370.4,-0.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_100.setTransform(360.7,-0.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_101.setTransform(351.1,1.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_102.setTransform(341.8,-0.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_103.setTransform(335.3,-2.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_104.setTransform(328.7,1.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_105.setTransform(319.4,-0.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_106.setTransform(311.6,-2.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_107.setTransform(297.9,-0.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_108.setTransform(288.2,-0.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_109.setTransform(280.2,-2.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_110.setTransform(273,-0.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_111.setTransform(264.6,-0.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_112.setTransform(257.1,-1.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_113.setTransform(249.8,-0.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_114.setTransform(240.5,1.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAFg");
	this.shape_115.setTransform(229.5,3.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_116.setTransform(220.6,-0.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_117.setTransform(208.6,-0.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_118.setTransform(201.1,-0.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_119.setTransform(191.4,-2.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_120.setTransform(181.6,-0.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_121.setTransform(174.7,-0.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_122.setTransform(166.2,-0.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_123.setTransform(152.7,-0.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_124.setTransform(143.1,-0.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_125.setTransform(131.6,-0.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_126.setTransform(119.6,-0.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_127.setTransform(113.1,-2.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_128.setTransform(102.4,-2.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_129.setTransform(92.6,-0.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_130.setTransform(85.2,-0.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_131.setTransform(81.9,-0.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_132.setTransform(73.4,-0.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_133.setTransform(63.8,-2.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgcArQgLgPAAgcQAAgcALgPQAJgOATAAQATAAAKAOQALAPAAAcQAAAcgLAPQgKAPgTAAQgTAAgJgPgAgTgjQgGAMAAAXQAAAYAGALQAHAMAMAAQANAAAHgLQAGgMABgYQgBgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_134.setTransform(50.3,-2.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AgdAyQgLgIAAgPQAAgLAGgHQAHgIALgBQgLgEgFgGQgFgIAAgJQAAgJAEgHQAGgHAIgEQAJgDAKAAQALAAAJADQAJAEAFAHQAEAHAAAJQAAAJgFAIQgGAGgKAEQAMABAFAIQAHAHAAALQAAAPgMAIQgKAIgTAAQgSAAgLgIgAgTALQgIAGAAAJQAAALAIAFQAGAFANAAQAOAAAGgFQAIgFAAgLQAAgJgIgGQgIgGgMgBQgMABgHAGgAgSgpQgGAFAAAKQAAAJAGAGQAIAGAKAAQAMAAAGgGQAHgGAAgJQAAgKgHgFQgGgGgMABQgLgBgHAGg");
	this.shape_135.setTransform(40.7,-2.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgfA5IAAgLIAZAAIAAhVIgXAOIAAgMIAdgTIAHAAIAABmIAZAAIAAALg");
	this.shape_136.setTransform(31.5,-2.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_137.setTransform(16.2,-2.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_138.setTransform(1.4,-0.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_139.setTransform(-8.3,-0.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_140.setTransform(-17.9,1.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_141.setTransform(-27.2,-0.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_142.setTransform(-33.7,-2.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_143.setTransform(-40.3,1.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_144.setTransform(-49.6,-0.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_145.setTransform(-57.4,-2.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_146.setTransform(-71.1,-0.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_147.setTransform(-80.8,-0.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_148.setTransform(-88.8,-2.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_149.setTransform(-96,-0.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_150.setTransform(-104.4,-0.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_151.setTransform(-111.9,-1.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_152.setTransform(-119.2,-0.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQASAAAJAJQALAIgBAPQABAPgLAJQgJAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_153.setTransform(-128.7,-2.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_154.setTransform(197.6,47.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_155.setTransform(182.9,47.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_156.setTransform(172.5,45.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_157.setTransform(163.9,47.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_158.setTransform(155.2,47.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_159.setTransform(148.8,45.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_160.setTransform(143.1,47.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_161.setTransform(121.6,46.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_162.setTransform(95.7,47.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_163.setTransform(87.3,47.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_164.setTransform(75,47.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_165.setTransform(33.9,47.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_166.setTransform(24.5,45.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000066").s().p("AgdArQgKgPAAgcQAAgcAKgPQALgOASAAQAUAAAKAOQAKAPAAAcQAAAcgKAPQgKAPgUAAQgSAAgLgPgAgTgjQgHAMABAXQgBAYAHALQAGAMANAAQAOAAAGgLQAHgMAAgYQAAgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_167.setTransform(10.9,45.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_168.setTransform(-28.2,47.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_169.setTransform(-40.4,47.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_170.setTransform(-48.7,47.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_171.setTransform(-81.1,47.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_172.setTransform(-88.4,46.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_173.setTransform(-103.6,46.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_174.setTransform(-110.9,47.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_175.setTransform(324.8,23.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_176.setTransform(316.4,23.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_177.setTransform(301.7,23.4);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_178.setTransform(291.3,21.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_179.setTransform(282.7,23.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_180.setTransform(274,23.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_181.setTransform(267.6,21.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_182.setTransform(261.9,23.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_183.setTransform(249.5,23.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_184.setTransform(241.3,23.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_185.setTransform(232.6,23.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_186.setTransform(208.4,23.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_187.setTransform(199,21.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000066").s().p("AgcArQgLgPAAgcQAAgcALgPQAKgOASAAQAUAAAJAOQALAPAAAcQAAAcgLAPQgJAPgUAAQgSAAgKgPgAgTgjQgGAMgBAXQABAYAGALQAHAMAMAAQANAAAHgLQAGgMAAgYQAAgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_188.setTransform(185.5,21.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000066").s().p("AgdA5IA0hmIg8AAIAAgLIBLAAIAAAKIg1Bng");
	this.shape_189.setTransform(175.9,21.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_190.setTransform(137.8,23.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_191.setTransform(131.5,21.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_192.setTransform(125.5,23.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_193.setTransform(117.2,23.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_194.setTransform(108.4,23.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQASAAAKAIQAKAJgBAPQABAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgFQAHgGAAgKQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_195.setTransform(98.9,21.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_196.setTransform(84.8,23.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_197.setTransform(62.4,22.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_198.setTransform(55.1,23.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_199.setTransform(32.5,23.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_200.setTransform(24.1,23.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_201.setTransform(9.4,23.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_202.setTransform(-1,21.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_203.setTransform(-9.6,23.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_204.setTransform(-18.3,23.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_205.setTransform(-24.7,21.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_206.setTransform(-30.4,23.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_207.setTransform(-42.8,23.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_208.setTransform(-51,23.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_209.setTransform(-59.7,23.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_210.setTransform(-75,25.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_211.setTransform(-83.9,23.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_212.setTransform(-93.3,21.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000066").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAGgMAAgYQAAgXgGgMQgGgLgOAAQgNAAgGALg");
	this.shape_213.setTransform(-106.8,21.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_214.setTransform(326,-0.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_215.setTransform(319.7,-2.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_216.setTransform(313.7,-0.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_217.setTransform(305.4,-0.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQASAAAJAJQALAIgBAPQABAPgLAJQgJAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_218.setTransform(287.1,-2.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_219.setTransform(273,-0.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_220.setTransform(265.8,-1.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_221.setTransform(250.6,-1.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_222.setTransform(243.3,-0.6);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_223.setTransform(220.7,-0.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_224.setTransform(212.3,-0.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_225.setTransform(197.6,-0.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_226.setTransform(187.2,-2.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_227.setTransform(178.6,-0.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_228.setTransform(169.9,-0.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_229.setTransform(163.5,-2.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_230.setTransform(157.8,-0.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_231.setTransform(143.5,-0.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_232.setTransform(136.3,-1.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_233.setTransform(119.6,-0.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_234.setTransform(110.4,-0.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_235.setTransform(102,-0.6);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_236.setTransform(89.7,-0.6);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_237.setTransform(81.4,-0.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_238.setTransform(72.7,-0.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_239.setTransform(48.6,-0.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000066").s().p("AgdAyQgLgIAAgPQAAgLAGgHQAHgIALgBQgKgEgGgGQgFgIAAgJQAAgJAFgHQAEgHAJgEQAJgDAKAAQALAAAJADQAJAEAFAHQAEAHABAJQgBAJgFAIQgGAGgKAEQAMABAFAIQAHAHAAALQAAAPgLAIQgMAIgSAAQgSAAgLgIgAgUALQgHAGAAAJQAAALAHAFQAIAFAMAAQANAAAIgFQAHgFAAgLQAAgJgIgGQgIgGgMgBQgLABgJAGgAgSgpQgGAFAAAKQAAAJAGAGQAIAGAKAAQAMAAAGgGQAHgGAAgJQAAgKgHgFQgGgGgMABQgLgBgHAGg");
	this.shape_240.setTransform(16,-2.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_241.setTransform(-22.9,-0.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_242.setTransform(-29.1,-2.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_243.setTransform(-35.1,-0.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000066").s().p("AghAoIAAgJIAyg8IgwAAIAAgKIA/AAIAAAJIgxA8IAzAAIAAAKg");
	this.shape_244.setTransform(-43.4,-0.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_245.setTransform(-52.3,-0.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAJQgKAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_246.setTransform(-61.7,-2.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_247.setTransform(-75.8,-0.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_248.setTransform(-98.3,-1.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_249.setTransform(-105.6,-0.6);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000066").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAJAAAOQAAAMgGAHQgGAHgLAEQAFAAADADQAEAEACAGIAPAngAgfgCIAfAAQAagBAAgVQAAgLgHgFQgGgFgNAAIgfAAg");
	this.shape_250.setTransform(-115.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_153,p:{x:-128.7,y:-2.2}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{x:-49.6,y:-0.6}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137,p:{x:16.2}},{t:this.shape_136,p:{x:31.5}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115,p:{x:229.5}},{t:this.shape_114},{t:this.shape_113,p:{x:249.8}},{t:this.shape_112,p:{x:257.1}},{t:this.shape_111},{t:this.shape_110,p:{x:273}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:319.4,y:-0.6}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:351.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:385}},{t:this.shape_97,p:{x:-129.5}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{x:-96.7,y:23.3}},{t:this.shape_93,p:{x:-88.2,y:23.3}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:-57,y:21.7}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-23.2,y:23.3}},{t:this.shape_84,p:{x:-14.8,y:23.3}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:40}},{t:this.shape_77},{t:this.shape_76,p:{x:60.3,y:23.4}},{t:this.shape_75,p:{x:67.7}},{t:this.shape_74},{t:this.shape_73,p:{x:83.6}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:130,y:23.3}},{t:this.shape_67},{t:this.shape_66,p:{x:145.8}},{t:this.shape_65},{t:this.shape_64,p:{x:161.6}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:195.4}},{t:this.shape_60,p:{x:209.8}},{t:this.shape_59},{t:this.shape_58,p:{x:229,y:21.7}},{t:this.shape_57,p:{x:242.6,y:21.6}},{t:this.shape_56,p:{x:252.2}},{t:this.shape_55,p:{x:260.6}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:291.9}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:334.1}},{t:this.shape_45,p:{x:341}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:-120.1}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:-87.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-64}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-17.6}},{t:this.shape_27},{t:this.shape_26,p:{x:-1.8}},{t:this.shape_25,p:{x:4.7,y:47.2}},{t:this.shape_24,p:{x:14}},{t:this.shape_23},{t:this.shape_22,p:{x:33.3,y:47.2}},{t:this.shape_21,p:{x:48.4}},{t:this.shape_20,p:{x:63.2}},{t:this.shape_19},{t:this.shape_18,p:{x:86.4,y:45.5}},{t:this.shape_17},{t:this.shape_16,p:{x:104.4}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:135.7}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:175.3}},{t:this.shape_7},{t:this.shape_6,p:{x:197.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:252}}]}).to({state:[{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_94,p:{x:-90.8,y:-0.6}},{t:this.shape_112,p:{x:-83.1}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_137,p:{x:-8.5}},{t:this.shape_136,p:{x:6.8}},{t:this.shape_240},{t:this.shape_58,p:{x:25.6,y:-2.2}},{t:this.shape_57,p:{x:39.2,y:-2.3}},{t:this.shape_239},{t:this.shape_101,p:{x:57.5}},{t:this.shape_110,p:{x:66}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_25,p:{x:128.8,y:-0.6}},{t:this.shape_232},{t:this.shape_231},{t:this.shape_93,p:{x:151.3,y:-0.6}},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_89,p:{x:206.5,y:-2.2}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_115,p:{x:226.8}},{t:this.shape_84,p:{x:236.3,y:-0.6}},{t:this.shape_222},{t:this.shape_221},{t:this.shape_85,p:{x:258,y:-0.6}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_113,p:{x:296.6}},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_98,p:{x:340.2}},{t:this.shape_97,p:{x:-116.5}},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_73,p:{x:-66.5}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_66,p:{x:18.3}},{t:this.shape_200},{t:this.shape_199},{t:this.shape_78,p:{x:38.6}},{t:this.shape_55,p:{x:48.1}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_56,p:{x:69.8}},{t:this.shape_75,p:{x:77.6}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_61,p:{x:151.9}},{t:this.shape_60,p:{x:166.3}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_64,p:{x:217.3}},{t:this.shape_46,p:{x:225.8}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_51,p:{x:310.6}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_45,p:{x:337.9}},{t:this.shape_22,p:{x:347.5,y:23.3}},{t:this.shape_18,p:{x:356.8,y:21.6}},{t:this.shape_33,p:{x:-117.8}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_39,p:{x:-96.1}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_153,p:{x:-67,y:45.6}},{t:this.shape_76,p:{x:-57.6,y:47.3}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_12,p:{x:-34.4}},{t:this.shape_168},{t:this.shape_21,p:{x:-13.5}},{t:this.shape_20,p:{x:1.3}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_24,p:{x:42.8}},{t:this.shape_16,p:{x:51.3}},{t:this.shape_144,p:{x:58,y:47.2}},{t:this.shape_105,p:{x:66.7,y:47.2}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_36,p:{x:104.9}},{t:this.shape_8,p:{x:114.1}},{t:this.shape_161},{t:this.shape_68,p:{x:128.8,y:47.2}},{t:this.shape_6,p:{x:136.6}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_26,p:{x:191.8}},{t:this.shape_154},{t:this.shape_28,p:{x:206}},{t:this.shape,p:{x:212.1}}]},1).wait(1));

	// outlineshade
	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#D40000").ss(4,2,0,3).p("EAsXAAAMhYtAAA");
	this.shape_251.setTransform(122.9,68.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#D40000").ss(1,2,0,3).p("EgtDAG7IAGhAIAdlIIBXhPIhIhQIAnlOMBYtAAAIhSM1IgGBA");
	this.shape_252.setTransform(127.3,23.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#D40000").ss(4,2,0,3).p("EAqpAAAMhVRAAA");
	this.shape_253.setTransform(111.9,68.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#D40000").ss(1,2,0,3).p("EgrVAG7IAGhAIAdlIIBXhPIhIhQIAnlOMBVRAAAIhSM1IgGBA");
	this.shape_254.setTransform(116.3,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_252},{t:this.shape_251}]}).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).wait(1));

	// white
	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FAFAFA").s().p("EgtCAG7IAFhAIAdlIIBXhPIhIhQIAnlOMBYtAAAIhSM1IgGBAg");
	this.shape_255.setTransform(127.3,23.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FAFAFA").s().p("EgrUAG7IAFhAIAdlIIBXhPIhIhQIAnlOMBVSAAAIhTM1IgGBAg");
	this.shape_256.setTransform(116.3,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_255}]}).to({state:[{t:this.shape_256}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-163,-21.6,579.8,91.8);


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


(lib.btnWideBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#671D1F").s().p("ALBCkIAVkxI2WAAIgJBOIgNgNIAKhXIW7AAIgiFHgAruCkIAFg9IAFg3IBAhAIARAQIhGBGIgCAhIgFA9g");
	this.shape.setTransform(0.2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-6.9,-23.7,-2.9,18.2).s().p("AoDCZIjYAAIAFg9IADghIBFhFIgRgRIAGgFIgrgrIAJhNIWXAAIgWExg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AoGDWIkQAAIAEgjIAAAAIAJhdIAHhHIA2g1IgrgrIAQiEIX+AAIguGrgArUhdIAMANIArAqIgGAGIhAA/IgEA3IgGA+IAPAAIDYAAITJAAIALAAIAjlII27AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AopDWIjtAAIAEgjIAAAAIAPiWIABgOIA2g1IgrgrIAQiEIX+AAIguGrg");
	this.shape_3.setTransform(3.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


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
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-49,-49);

	this.instance_1 = new lib.Bitmap19();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-48.6,-48.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-49,97,97);


(lib.ArrowBG3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#671D1F").s().p("ABfB1IgBABQgdAdgqAAQgoAAgegdQgdgeAAgpIAAgDQABAnAcAdQAeAdAoAAQAqAAAdgdIABgBIAqAqIAAAGgAhZhHIABgBQAuguBBAAIAAAGQhBAAguAuIgBABQgtAtgCA9QAAhBAvgvgAAXiYIAAgGIBdBGIAAAGg");
	this.shape.setTransform(-0.4,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-31.1,27.4,-39,-2.2).s().p("AhZCFQgvguAAhDIAAgFIAAgBQACg9AtgtIABgBQAuguBBAAIAAgGIAAgiIBdBGIhdBGIAAgoQgoAAgdAcIgBABQgcAcgBAnIAAADQAAAqAdAdQAeAdAoAAQAqAAAdgdIABgBIAqAqIgBABQgMAMgUALQgpAYgoAAQhBAAgvgvg");
	this.shape_1.setTransform(-0.4,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-4.7,-14.3,3.6,16.9).s().p("AhwCjIAAAAQg2g2AAhNQAAhLA2g2IABAAQAtgtA8gIIAAhCICfB4IifB3IAAg8QgGACgLAIIgLAIQgWAVAAAeQAAAgAWAWIAAAAQAWAVAeABQAXgBAbgSQAOgKAKgJIBLBLQgOASgaASQg1Alg4gBQhMAAg2g2g");
	this.shape_2.setTransform(0.1,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AhwCkIAAgBQg2g1AAhOQAAhLA2g2IABAAQAsguA9gHIAAhDICfB6IifB2IAAg9QgHACgLAJIgKAIQgWAUAAAfQAAAfAWAXIAAAAQAWAVAeAAQAWABAcgUQAOgJAJgKIBMBNQgOARgaATQg0Ajg5ABQhMAAg2g2g");
	this.shape_3.setTransform(0.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArrowBG3, new cjs.Rectangle(-16.6,-21.4,33.6,44.1), null);


(lib.ArrowBG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#671D1F").s().p("ABfB1IgBABQgdAdgqAAQgoAAgegdQgdgeAAgpIAAgDQABAnAcAdQAeAdAoAAQAqAAAdgdIABgBIAqAqIAAAGgAhZhHIABgBQAuguBBAAIAAAGQhBAAguAuIgBABQgtAtgCA9QAAhBAvgvgAAXiYIAAgGIBdBGIAAAGg");
	this.shape.setTransform(-1.4,-2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-31.1,27.4,-39,-2.2).s().p("AhZCFQgvguAAhDIAAgFIAAgBQACg9AtgtIABgBQAuguBBAAIAAgGIAAgiIBdBGIhdBGIAAgoQgoAAgdAcIgBABQgcAcgBAnIAAADQAAAqAdAdQAeAdAoAAQAqAAAdgdIABgBIAqAqIgBABQgMAMgUALQgpAYgoAAQhBAAgvgvg");
	this.shape_1.setTransform(-1.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-4.7,-14.3,3.6,16.9).s().p("AhwCjIAAAAQg2g2AAhNQAAhLA2g2IABAAQAtgtA8gIIAAhCICfB4IifB3IAAg8QgGACgLAIIgLAIQgWAVAAAeQAAAgAWAWIAAAAQAWAVAeABQAXgBAbgSQAOgKAKgJIBLBMQgPARgZASQg1Alg4AAQhMgBg2g2g");
	this.shape_2.setTransform(-0.9,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AhwCkIAAgBQg2g1AAhOQAAhLA2g2IABAAQAsguA9gHIAAhDICfB6IifB2IAAg9QgHACgLAJIgKAIQgWAUAAAfQAAAfAWAXIAAAAQAWAVAeAAQAWABAcgUQAOgJAJgKIBMBNQgOARgaATQg0Ajg5ABQhMAAg2g2g");
	this.shape_3.setTransform(0.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AAMEIQhWAAg9g9QgLgMgNgRQgZghgGgbQgNguAAggQAAg1AfgxQAOgYAOgPQAMgNARgOQAkgdAkgGIAAhgIDzC6IjZCdQALAGANAAQAQgBAUgOIAAABQALgJAIgIIASgRIB8B7IgXAYQgQASgeAVQg6AohAAAIgBAAg");
	this.shape_4.setTransform(0.9,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArrowBG2, new cjs.Rectangle(-19.5,-27.6,40.7,52.8), null);


(lib.ArrowBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-31.1,27.4,-39,-2.2).s().p("AhZCFQgvguAAhDIAAgFIAAgBQACg9AtgtIABgBQAuguBBAAIAAgGIAAgiIBdBGIhdBGIAAgoQgoAAgdAcIgBABQgcAcgBAnIAAADQAAAqAdAdQAeAdAoAAQAqAAAdgdIABgBIAqAqIgBABQgMAMgUALQgpAYgoAAQhBAAgvgvg");
	this.shape.setTransform(-1.4,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671D1F").s().p("ABfB1IgBABQgdAdgqAAQgoAAgegdQgdgeAAgpIAAgDQABAnAcAdQAeAdAoAAQAqAAAdgdIABgBIAqAqIAAAGgAhZhHIABgBQAuguBBAAIAAAGQhBAAguAuIgBABQgtAtgCA9QAAhBAvgvgAAXiYIAAgGIBdBGIAAAGg");
	this.shape_1.setTransform(-1.4,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-4.7,-14.3,3.6,16.9).s().p("AhwCjIAAAAQg2g2AAhNQAAhLA2g2IABAAQAtgtA8gIIAAhCICfB4IifB3IAAg8QgGACgLAIIgLAIQgWAVAAAeQAAAgAWAWIAAAAQAWAVAeABQAXgBAbgSQAOgKAKgJIBLBMQgPARgZASQg1Alg4AAQhMgBg2g2g");
	this.shape_2.setTransform(-0.9,-1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.498)").s().p("AhwCkIAAgBQg2g1AAhOQAAhLA2g2IABAAQAsguA9gHIAAhDICfB6IifB2IAAg9QgHACgLAJIgKAIQgWAUAAAfQAAAfAWAXIAAAAQAWAVAeAAQAWABAcgUQAOgJAJgKIBMBNQgOARgaATQg0Ajg5ABQhMAAg2g2g");
	this.shape_3.setTransform(0.3,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ArrowBG, new cjs.Rectangle(-17.6,-23.2,34.6,45.9), null);


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
	this.instance_1.setTransform(11.6,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,448.5,119.4);


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


(lib.btnHorizontal2reset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAGg+IgSAAIADgYIASAAIACgRIAbgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape.setTransform(35.3,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_1.setTransform(25.1,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrAyIADgXIAyAAIACgQIgcAAIgVgMIADgiIAZgOIA1AAIgDAXIgwAAIgCAPIAcAAIAVAMIgDAjIgZAOg");
	this.shape_2.setTransform(13.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_3.setTransform(2.9,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUBGIgYg1IgSAAIgFA1IgcAAIAOiLIBMAAIAVANIgGA8IgZANIAZA1gAgTgGIAqAAIAEgnIgqAAg");
	this.shape_4.setTransform(-9.2,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBNQgRgIgMgOIgBgDIABgCIAQgQIACgBIADACQAIAKAMAGQAMAGAMAAQAMAAAKgFQALgEAHgIQAIgIAFgKQAEgLAAgLQAAgLgEgKQgFgLgIgIQgHgHgLgFQgKgEgMAAQgKAAgKAEQgKAEgIAHIAPAPQAEAEgCAEQgCAFgFAAIgyAAQgDAAgCgDQgCgCAAgDIAAgyQAAgEAFgCQAEgCADADIAPAPQAMgLAPgHQAQgGAPAAQARAAAQAHQAQAHAMALQALAMAHAQQAHAPAAARQAAARgHAQQgHAQgLALQgMAMgQAHQgQAHgRAAQgSAAgSgJg");
	this.shape_5.setTransform(-30.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_6.setTransform(-1.4,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_7.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_8.setTransform(0.2,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_9.setTransform(0.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_10.setTransform(0.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_11.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


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


(lib.btnHorizontal1reset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape.setTransform(41.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB6IAUAAIgCAXg");
	this.shape_1.setTransform(32.7,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_2.setTransform(23.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmAyIAIhMIgdAAIgIBMIgaAAIAHhMIgdAAIgIBMIgbAAIAKhjIAXAAIAEAIIAPgIIATAAIARAKIAUgKIATAAIAWANIgJBWg");
	this.shape_3.setTransform(8.7,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_4.setTransform(-5.5,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg5IAYgNIAyAAIAWANIgDAbIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_5.setTransform(-17.6,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkBNQgRgIgMgOIgBgDIABgCIAQgQIACgBIADACQAIAKAMAGQAMAGAMAAQAMAAAKgFQALgEAHgIQAIgIAFgKQAEgLAAgLQAAgLgEgKQgFgLgIgIQgHgHgLgFQgKgEgMAAQgKAAgKAEQgKAEgIAHIAPAPQAEAEgCAEQgCAFgFAAIgyAAQgDAAgCgDQgCgCAAgDIAAgyQAAgEAFgCQAEgCADADIAPAPQAMgLAPgHQAQgGAPAAQARAAAQAHQAQAHAMALQALAMAHAQQAHAPAAARQAAARgHAQQgHAQgLALQgMAMgQAHQgQAHgRAAQgSAAgSgJg");
	this.shape_6.setTransform(-38.5,-2.2);

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


(lib.avatarMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (schoolLevel==3){
			this.gotoAndStop(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.avatarBotsX("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-48.5,97,97);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.ArrowBG("single",0);
	this.instance.parent = this;

	this.instance_1 = new lib.ArrowBG2("single",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.ArrowBG3("single",0);
	this.instance_2.parent = this;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AisDmIAAnKIFZAAIAAHKg");
	this.shape.setTransform(-0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.6,-23.2,34.6,45.9);


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


(lib.mcBtnReset = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnHorizontal1reset();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHorizontal1reset(), 3);

	this.instance_1 = new lib.btnHorizontal2reset();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHorizontal2reset(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-24.6,164.1,51.8);


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


(lib.actMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [3, 2, 4, 4];//north is 1, east is 2, south is 3, west is 4
		var _this = this;
		this.item1.rotateNum = 1;
		this.item2.rotateNum = 1;
		this.item3.rotateNum = 1;
		this.item4.rotateNum = 1;
		var isAnimating = false;
		this.selectAns = function (itemNum, rotateDirection) {
			if (isAnimating){
				return;
			}
			isAnimating = true;
			var _rotation;
			if (rotateDirection==1){
				_rotation = this["item"+itemNum].rotation + 90;
				if (this["item"+itemNum].rotateNum==4){
					this["item"+itemNum].rotateNum = 1;
				} else {
					this["item"+itemNum].rotateNum++;
				}
			} else {
				_rotation = this["item"+itemNum].rotation - 90;
				if (this["item"+itemNum].rotateNum==1){
					this["item"+itemNum].rotateNum = 4;
				} else {
					this["item"+itemNum].rotateNum--;
				}
			}
			createjs.Tween.get(this["item"+itemNum]).to({rotation:_rotation}, 500, createjs.Ease.cubicOut).call(handleComplete);
		};
		this.btn1_1.addEventListener("click", this.selectAns.bind(this, 1, 1));
		this.btn1_2.addEventListener("click", this.selectAns.bind(this, 1, -1));
		this.btn2_1.addEventListener("click", this.selectAns.bind(this, 2, 1));
		this.btn2_2.addEventListener("click", this.selectAns.bind(this, 2, -1));
		this.btn3_1.addEventListener("click", this.selectAns.bind(this, 3, 1));
		this.btn3_2.addEventListener("click", this.selectAns.bind(this, 3, -1));
		this.btn4_1.addEventListener("click", this.selectAns.bind(this, 4, 1));
		this.btn4_2.addEventListener("click", this.selectAns.bind(this, 4, -1));
		function handleComplete(e){
			isAnimating = false;
		}
		function onReset1(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item1).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item1.rotateNum = 1;
		}
		this.btnReset1.addEventListener("click", onReset1);
		function onReset2(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item2).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item2.rotateNum = 1;
		}
		this.btnReset2.addEventListener("click", onReset2);
		function onReset3(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item3).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item3.rotateNum = 1;
		}
		this.btnReset3.addEventListener("click", onReset3);
		function onReset4(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item4).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item4.rotateNum = 1;
		}
		this.btnReset4.addEventListener("click", onReset4);
		function checkAns(e){
			var myLength = cAns.length;
			var _userAns = _this.item1.rotateNum + ", " + _this.item2.rotateNum + ", " +
			_this.item3.rotateNum + ", " + _this.item4.rotateNum;
			var cScore = 1;//score starts w 1
			for (i=1; i<=myLength; i++){
				if (_this["item"+i].rotateNum==cAns[i-1]){
					cScore++;
				}
			}
			_this.parent.sendScore(_userAns, cScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnReset4 = new lib.mcBtnReset();
	this.btnReset4.name = "btnReset4";
	this.btnReset4.parent = this;
	this.btnReset4.setTransform(673.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset3 = new lib.mcBtnReset();
	this.btnReset3.name = "btnReset3";
	this.btnReset3.parent = this;
	this.btnReset3.setTransform(503.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset2 = new lib.mcBtnReset();
	this.btnReset2.name = "btnReset2";
	this.btnReset2.parent = this;
	this.btnReset2.setTransform(320.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset1 = new lib.mcBtnReset();
	this.btnReset1.name = "btnReset1";
	this.btnReset1.parent = this;
	this.btnReset1.setTransform(137.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btn4_2 = new lib.arrow();
	this.btn4_2.name = "btn4_2";
	this.btn4_2.parent = this;
	this.btn4_2.setTransform(704.4,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn4_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn4_1 = new lib.arrow();
	this.btn4_1.name = "btn4_1";
	this.btn4_1.parent = this;
	this.btn4_1.setTransform(635.8,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn4_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn3_2 = new lib.arrow();
	this.btn3_2.name = "btn3_2";
	this.btn3_2.parent = this;
	this.btn3_2.setTransform(533.2,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn3_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn3_1 = new lib.arrow();
	this.btn3_1.name = "btn3_1";
	this.btn3_1.parent = this;
	this.btn3_1.setTransform(464.6,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn3_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn2_2 = new lib.arrow();
	this.btn2_2.name = "btn2_2";
	this.btn2_2.parent = this;
	this.btn2_2.setTransform(351.6,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn2_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn2_1 = new lib.arrow();
	this.btn2_1.name = "btn2_1";
	this.btn2_1.parent = this;
	this.btn2_1.setTransform(283,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn2_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn1_2 = new lib.arrow();
	this.btn1_2.name = "btn1_2";
	this.btn1_2.parent = this;
	this.btn1_2.setTransform(171.6,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn1_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn1_1 = new lib.arrow();
	this.btn1_1.name = "btn1_1";
	this.btn1_1.parent = this;
	this.btn1_1.setTransform(103,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn1_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(400.3,541,0.85,0.85,0,0,0,0.3,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqB7IAaj0ICVAAIAmAXIgUDFIgsAYgAg1BQIBcAAIARigIhcAAg");
	this.shape.setTransform(671.2,458.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+B8IgmgXIAVjJIArgXIBjAAIAmAXIgGAyIgwAAIADgfIhSAAIgRCjIBSAAIADgfIAxAAIgGAyIgrAXg");
	this.shape_1.setTransform(500.3,458.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBB7IgOg1IhbAAIgYA1IgwAAIBxj0IAxAAIA/D0gAgVAbIA+AAIgVhXIgBAAg");
	this.shape_2.setTransform(137.3,458.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhB7IAaj0ICDAAIAmAXIgIBNIggASIAAAAIAcARIgIBVIgrAYgAgsBQIBKAAIAHg/IhKAAgAghgYIBLAAIAFg4IhKAAg");
	this.shape_3.setTransform(318.4,458.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnSubmit},{t:this.btn1_1},{t:this.btn1_2},{t:this.btn2_1},{t:this.btn2_2},{t:this.btn3_1},{t:this.btn3_2},{t:this.btn4_1},{t:this.btn4_2},{t:this.btnReset1},{t:this.btnReset2},{t:this.btnReset3},{t:this.btnReset4}]}).wait(1));

	// GREEN
	this.item1 = new lib.puz_PURPLE();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(138.5,356.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// BLUE
	this.item2 = new lib.puz_BLUE();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(320,357,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// PURPLE
	this.item3 = new lib.puz_GREEN();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(500.5,357,0.35,0.35,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// YELLOW
	this.item4 = new lib.puz_YELLOW();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(672.3,356.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item4).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3, new cjs.Rectangle(74.3,303.4,659.8,260.2), null);


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [3, 2, 4, 4];//north is 1, east is 2, south is 3, west is 4
		var _this = this;
		this.item1.rotateNum = 1;
		this.item2.rotateNum = 1;
		this.item3.rotateNum = 1;
		this.item4.rotateNum = 1;
		var isAnimating = false;
		this.selectAns = function (itemNum, rotateDirection) {
			if (isAnimating){
				return;
			}
			isAnimating = true;
			var _rotation;
			if (rotateDirection==1){
				_rotation = this["item"+itemNum].rotation + 90;
				if (this["item"+itemNum].rotateNum==4){
					this["item"+itemNum].rotateNum = 1;
				} else {
					this["item"+itemNum].rotateNum++;
				}
			} else {
				_rotation = this["item"+itemNum].rotation - 90;
				if (this["item"+itemNum].rotateNum==1){
					this["item"+itemNum].rotateNum = 4;
				} else {
					this["item"+itemNum].rotateNum--;
				}
			}
			createjs.Tween.get(this["item"+itemNum]).to({rotation:_rotation}, 500, createjs.Ease.cubicOut).call(handleComplete);
		};
		this.btn1_1.addEventListener("click", this.selectAns.bind(this, 1, 1));
		this.btn1_2.addEventListener("click", this.selectAns.bind(this, 1, -1));
		this.btn2_1.addEventListener("click", this.selectAns.bind(this, 2, 1));
		this.btn2_2.addEventListener("click", this.selectAns.bind(this, 2, -1));
		this.btn3_1.addEventListener("click", this.selectAns.bind(this, 3, 1));
		this.btn3_2.addEventListener("click", this.selectAns.bind(this, 3, -1));
		this.btn4_1.addEventListener("click", this.selectAns.bind(this, 4, 1));
		this.btn4_2.addEventListener("click", this.selectAns.bind(this, 4, -1));
		function handleComplete(e){
			isAnimating = false;
		}
		function onReset1(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item1).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item1.rotateNum = 1;
		}
		this.btnReset1.addEventListener("click", onReset1);
		function onReset2(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item2).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item2.rotateNum = 1;
		}
		this.btnReset2.addEventListener("click", onReset2);
		function onReset3(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item3).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item3.rotateNum = 1;
		}
		this.btnReset3.addEventListener("click", onReset3);
		function onReset4(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item4).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item4.rotateNum = 1;
		}
		this.btnReset4.addEventListener("click", onReset4);
		function checkAns(e){
			var myLength = cAns.length;
			var _userAns = _this.item1.rotateNum + ", " + _this.item2.rotateNum + ", " +
			_this.item3.rotateNum + ", " + _this.item4.rotateNum;
			var cScore = 1;//score starts w 1
			for (i=1; i<=myLength; i++){
				if (_this["item"+i].rotateNum==cAns[i-1]){
					cScore++;
				}
			}
			_this.parent.sendScore(_userAns, cScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnReset4 = new lib.mcBtnReset();
	this.btnReset4.name = "btnReset4";
	this.btnReset4.parent = this;
	this.btnReset4.setTransform(673.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset3 = new lib.mcBtnReset();
	this.btnReset3.name = "btnReset3";
	this.btnReset3.parent = this;
	this.btnReset3.setTransform(503.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset2 = new lib.mcBtnReset();
	this.btnReset2.name = "btnReset2";
	this.btnReset2.parent = this;
	this.btnReset2.setTransform(320.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset1 = new lib.mcBtnReset();
	this.btnReset1.name = "btnReset1";
	this.btnReset1.parent = this;
	this.btnReset1.setTransform(137.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btn4_2 = new lib.arrow();
	this.btn4_2.name = "btn4_2";
	this.btn4_2.parent = this;
	this.btn4_2.setTransform(704.4,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn4_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn4_1 = new lib.arrow();
	this.btn4_1.name = "btn4_1";
	this.btn4_1.parent = this;
	this.btn4_1.setTransform(635.8,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn4_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn3_2 = new lib.arrow();
	this.btn3_2.name = "btn3_2";
	this.btn3_2.parent = this;
	this.btn3_2.setTransform(533.2,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn3_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn3_1 = new lib.arrow();
	this.btn3_1.name = "btn3_1";
	this.btn3_1.parent = this;
	this.btn3_1.setTransform(464.6,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn3_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn2_2 = new lib.arrow();
	this.btn2_2.name = "btn2_2";
	this.btn2_2.parent = this;
	this.btn2_2.setTransform(351.6,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn2_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn2_1 = new lib.arrow();
	this.btn2_1.name = "btn2_1";
	this.btn2_1.parent = this;
	this.btn2_1.setTransform(283,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn2_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn1_2 = new lib.arrow();
	this.btn1_2.name = "btn1_2";
	this.btn1_2.parent = this;
	this.btn1_2.setTransform(171.6,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn1_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn1_1 = new lib.arrow();
	this.btn1_1.name = "btn1_1";
	this.btn1_1.parent = this;
	this.btn1_1.setTransform(103,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn1_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(400.3,541,0.85,0.85,0,0,0,0.3,0.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqB7IAaj0ICVAAIAmAXIgUDFIgsAYgAg1BQIBcAAIARigIhcAAg");
	this.shape.setTransform(671.2,458.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+B8IgmgXIAVjJIArgXIBjAAIAmAXIgGAyIgwAAIADgfIhSAAIgRCjIBSAAIADgfIAxAAIgGAyIgrAXg");
	this.shape_1.setTransform(500.3,458.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBB7IgOg1IhbAAIgYA1IgwAAIBxj0IAxAAIA/D0gAgVAbIA+AAIgVhXIgBAAg");
	this.shape_2.setTransform(137.3,458.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhB7IAaj0ICDAAIAmAXIgIBNIggASIAAAAIAcARIgIBVIgrAYgAgsBQIBKAAIAHg/IhKAAgAghgYIBLAAIAFg4IhKAAg");
	this.shape_3.setTransform(318.4,458.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.btnSubmit},{t:this.btn1_1},{t:this.btn1_2},{t:this.btn2_1},{t:this.btn2_2},{t:this.btn3_1},{t:this.btn3_2},{t:this.btn4_1},{t:this.btn4_2},{t:this.btnReset1},{t:this.btnReset2},{t:this.btnReset3},{t:this.btnReset4}]}).wait(1));

	// GREEN
	this.item1 = new lib.puz_PURPLE();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(140.1,352.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// BLUE
	this.item2 = new lib.puz_GREEN();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(320,353,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// PURPLE
	this.item3 = new lib.puz_YELLOW();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(492.5,353,0.35,0.35,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// YELLOW
	this.item4 = new lib.puz_BLUE();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(665.1,352.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item4).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2, new cjs.Rectangle(75.9,299.4,665.1,264.2), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [3, 2, 4, 4];//north is 1, east is 2, south is 3, west is 4
		var _this = this;
		this.item1.rotateNum = 1;
		this.item2.rotateNum = 1;
		this.item3.rotateNum = 1;
		this.item4.rotateNum = 1;
		var isAnimating = false;
		this.selectAns = function (itemNum, rotateDirection) {
			if (isAnimating){
				return;
			}
			isAnimating = true;
			var _rotation;
			if (rotateDirection==1){
				_rotation = this["item"+itemNum].rotation + 90;
				if (this["item"+itemNum].rotateNum==4){
					this["item"+itemNum].rotateNum = 1;
				} else {
					this["item"+itemNum].rotateNum++;
				}
			} else {
				_rotation = this["item"+itemNum].rotation - 90;
				if (this["item"+itemNum].rotateNum==1){
					this["item"+itemNum].rotateNum = 4;
				} else {
					this["item"+itemNum].rotateNum--;
				}
			}
			createjs.Tween.get(this["item"+itemNum]).to({rotation:_rotation}, 500, createjs.Ease.cubicOut).call(handleComplete);
		};
		this.btn1_1.addEventListener("click", this.selectAns.bind(this, 1, 1));
		this.btn1_2.addEventListener("click", this.selectAns.bind(this, 1, -1));
		this.btn2_1.addEventListener("click", this.selectAns.bind(this, 2, 1));
		this.btn2_2.addEventListener("click", this.selectAns.bind(this, 2, -1));
		this.btn3_1.addEventListener("click", this.selectAns.bind(this, 3, 1));
		this.btn3_2.addEventListener("click", this.selectAns.bind(this, 3, -1));
		this.btn4_1.addEventListener("click", this.selectAns.bind(this, 4, 1));
		this.btn4_2.addEventListener("click", this.selectAns.bind(this, 4, -1));
		function handleComplete(e){
			isAnimating = false;
		}
		function onReset1(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item1).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item1.rotateNum = 1;
		}
		this.btnReset1.addEventListener("click", onReset1);
		function onReset2(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item2).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item2.rotateNum = 1;
		}
		this.btnReset2.addEventListener("click", onReset2);
		function onReset3(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item3).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item3.rotateNum = 1;
		}
		this.btnReset3.addEventListener("click", onReset3);
		function onReset4(e){
			if (isAnimating){
				return;
			}
			isAnimating = true;
			createjs.Tween.get(_this.item4).to({rotation:0}, 500, createjs.Ease.cubicOut).call(handleComplete);
			_this.item4.rotateNum = 1;
		}
		this.btnReset4.addEventListener("click", onReset4);
		function checkAns(e){
			var myLength = cAns.length;
			var _userAns = _this.item1.rotateNum + ", " + _this.item2.rotateNum + ", " +
			_this.item3.rotateNum + ", " + _this.item4.rotateNum;
			var cScore = 1;//score starts w 1
			for (i=1; i<=myLength; i++){
				if (_this["item"+i].rotateNum==cAns[i-1]){
					cScore++;
				}
			}
			_this.parent.sendScore(_userAns, cScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnReset4 = new lib.mcBtnReset();
	this.btnReset4.name = "btnReset4";
	this.btnReset4.parent = this;
	this.btnReset4.setTransform(673.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset3 = new lib.mcBtnReset();
	this.btnReset3.name = "btnReset3";
	this.btnReset3.parent = this;
	this.btnReset3.setTransform(503.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset2 = new lib.mcBtnReset();
	this.btnReset2.name = "btnReset2";
	this.btnReset2.parent = this;
	this.btnReset2.setTransform(320.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btnReset1 = new lib.mcBtnReset();
	this.btnReset1.name = "btnReset1";
	this.btnReset1.parent = this;
	this.btnReset1.setTransform(137.2,498.1,0.741,0.742,0,0,0,0.4,0.8);

	this.btn4_2 = new lib.arrow();
	this.btn4_2.name = "btn4_2";
	this.btn4_2.parent = this;
	this.btn4_2.setTransform(704.4,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn4_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn4_1 = new lib.arrow();
	this.btn4_1.name = "btn4_1";
	this.btn4_1.parent = this;
	this.btn4_1.setTransform(635.8,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn4_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn3_2 = new lib.arrow();
	this.btn3_2.name = "btn3_2";
	this.btn3_2.parent = this;
	this.btn3_2.setTransform(533.2,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn3_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn3_1 = new lib.arrow();
	this.btn3_1.name = "btn3_1";
	this.btn3_1.parent = this;
	this.btn3_1.setTransform(464.6,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn3_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn2_2 = new lib.arrow();
	this.btn2_2.name = "btn2_2";
	this.btn2_2.parent = this;
	this.btn2_2.setTransform(351.6,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn2_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn2_1 = new lib.arrow();
	this.btn2_1.name = "btn2_1";
	this.btn2_1.parent = this;
	this.btn2_1.setTransform(283,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn2_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn1_2 = new lib.arrow();
	this.btn1_2.name = "btn1_2";
	this.btn1_2.parent = this;
	this.btn1_2.setTransform(171.6,458.7,0.8,0.8,0,0,180);
	new cjs.ButtonHelper(this.btn1_2, 0, 1, 2, false, new lib.arrow(), 3);

	this.btn1_1 = new lib.arrow();
	this.btn1_1.name = "btn1_1";
	this.btn1_1.parent = this;
	this.btn1_1.setTransform(103,458.7,0.8,0.8);
	new cjs.ButtonHelper(this.btn1_1, 0, 1, 2, false, new lib.arrow(), 3);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(400.3,541,0.85,0.85,0,0,0,0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnSubmit},{t:this.btn1_1},{t:this.btn1_2},{t:this.btn2_1},{t:this.btn2_2},{t:this.btn3_1},{t:this.btn3_2},{t:this.btn4_1},{t:this.btn4_2},{t:this.btnReset1},{t:this.btnReset2},{t:this.btnReset3},{t:this.btnReset4}]}).wait(1));

	// GREEN
	this.item1 = new lib.puz_GREEN();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(138.5,356.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item1).wait(1));

	// BLUE
	this.item2 = new lib.puz_BLUE();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(320,357,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item2).wait(1));

	// PURPLE
	this.item3 = new lib.puz_PURPLE();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(490.9,357,0.35,0.35,0,0,0,0,0.3);

	this.timeline.addTween(cjs.Tween.get(this.item3).wait(1));

	// YELLOW
	this.item4 = new lib.puz_YELLOW();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(672.3,356.9,0.35,0.35);

	this.timeline.addTween(cjs.Tween.get(this.item4).wait(1));

	// mark
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhqB7IAaj0ICVAAIAmAXIgUDFIgsAYgAg1BQIBcAAIARigIhcAAg");
	this.shape.setTransform(671.2,458.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+B8IgmgXIAVjJIArgXIBjAAIAmAXIgGAyIgwAAIADgfIhSAAIgRCjIBSAAIADgfIAxAAIgGAyIgrAXg");
	this.shape_1.setTransform(500.3,458.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABBB7IgOg1IhbAAIgYA1IgwAAIBxj0IAxAAIA/D0gAgVAbIA+AAIgVhXIgBAAg");
	this.shape_2.setTransform(137.3,458.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhhB7IAaj0ICDAAIAmAXIgIBNIggASIAAAAIAcARIgIBVIgrAYgAgsBQIBKAAIAHg/IhKAAgAghgYIBLAAIAFg4IhKAAg");
	this.shape_3.setTransform(318.4,458.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(78.2,303.4,655.9,260.2), null);


// stage content:
(lib.f3s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:150,q3:195,finalFb:250});

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
		var stageNum = 6;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		} else {
			if (schoolLevel==3){
				stageNum = 8;
			}
		}
		var maxQ = 2;
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		var maxQ = 3;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		this.qItem1 = [{
				"qId": "f3s6_1",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 16,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s6_2",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 16,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s6_3",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 16,
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
			this.myData.qItem.push(_this.qItem1[0]);
			this.myData.qItem.push(_this.qItem1[1]);
			this.myData.qItem.push(_this.qItem1[2]);
		} else {
			this.myData.qItem.push(_this.qItem1[randRange(0, 2)]);
		}
		function goNextQ (){
			_this.currentQ++;
			if (_this.currentQ<=_this.myData.qItem.length){
				console.log(_this.myData.qItem[_this.currentQ-1].qId.substring(5));
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(5));
			} else {
				//all done
				clearInterval(timeInterval);//stop time
				saveData();
			}
			console.log(_this.myData);
		}
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
		this.sendScore = function (_userAns, _cScore){
			if (_cScore==5){//all correct
				_this.myData.qItem[_this.currentQ-1].qResult = 1;
			} else {
				_this.myData.qItem[_this.currentQ-1].qResult = 0;
			}
			_this.myData.qItem[_this.currentQ-1].score = _cScore;
			_this.myData.qItem[_this.currentQ-1].userAns = _userAns;
			_this.myData.qItem[_this.currentQ-1].time = _this.timeGiven-_this.secRemaining;
			_this.timeGiven = _this.secRemaining;
			goNextQ();
		};
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			goNextQ();
		}
		this.addEventListener("click", doPlay);
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_109 = function() {
		playSound("questionAlert");
	}
	this.frame_144 = function() {
		this.stop();
	}
	this.frame_150 = function() {
		playSound("questionAlert");
	}
	this.frame_190 = function() {
		this.stop();
	}
	this.frame_195 = function() {
		playSound("questionAlert");
	}
	this.frame_236 = function() {
		this.stop();
	}
	this.frame_250 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_421 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(10).call(this.frame_109).wait(35).call(this.frame_144).wait(6).call(this.frame_150).wait(40).call(this.frame_190).wait(5).call(this.frame_195).wait(41).call(this.frame_236).wait(14).call(this.frame_250).wait(171).call(this.frame_421).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(318));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(318));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(59).to({startPosition:0},0).wait(318));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(651.5,157.2,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(318));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,77.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},207).wait(172));

	// avatar
	this.instance_3 = new lib.avatarMc();
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154,y:121.2},17,cjs.Ease.elasticOut).to({_off:true},207).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(250).to({graphics:null,x:0,y:0}).wait(172));

	// actMc
	this.instance_4 = new lib.actMc1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,289);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,289);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,289);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(272));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(226));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(223).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},14).wait(172));

	// q
	this.instance_7 = new lib.mcQ1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(393.4,257.1,0.05,0.05);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:284.5,y:199.6},21,cjs.Ease.elasticOut).wait(25).to({scaleX:0.05,scaleY:0.05,x:393.4,y:257.1},0).to({scaleX:1,scaleY:1,x:284.5,y:199.6},21,cjs.Ease.elasticOut).wait(25).to({scaleX:0.05,scaleY:0.05,x:393.4,y:257.1},0).to({scaleX:1,scaleY:1,x:284.5,y:199.6},21,cjs.Ease.elasticOut).to({_off:true},33).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(396));

	// BG
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(394.4,296.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({_off:true},230).wait(172));

	// bg
	this.instance_9 = new lib.Bitmap3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(422));

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
		{src:"images/f3s6/Bitmap19.png?1529743773529", id:"Bitmap19"},
		{src:"images/f3s6/Bitmap22.png?1529743773529", id:"Bitmap22"},
		{src:"images/f3s6/Bitmap3.png?1529743773529", id:"Bitmap3"},
		{src:"images/f3s6/Bitmap8.png?1529743773529", id:"Bitmap8"},
		{src:"images/f3s6/Bitmap9.png?1529743773529", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1529743773529", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1529743773529", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1529743773529", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1529743773529", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1529743773529", id:"submitAns"},
		{src:"sounds/suspense.mp3?1529743773529", id:"suspense"},
		{src:"sounds/timeout.mp3?1529743773529", id:"timeout"}
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