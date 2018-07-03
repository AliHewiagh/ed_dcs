(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap28 = function() {
	this.initialize(img.Bitmap28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,972,722);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1202,903);


(lib.Bitmap30 = function() {
	this.initialize(img.Bitmap30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,972,722);


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


(lib.tEn1copy = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("You have received a few new emails. Have a look \nat who they are from then click the buttons on\nwhether you would open or delete them.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 417;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-233.5,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EghYAAAMBCxAAA");
	this.shape.setTransform(-37.9,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EggBAHFIAAnoIilACIClh7IAAkjMBCxAAAIAAOE");
	this.shape_1.setTransform(-46.6,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EggGAHCIAAnoIilADIClh8IAAkiMBCxAAAIAAODg");
	this.shape_2.setTransform(-46.1,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1copy, new cjs.Rectangle(-269.5,-36.6,454.5,93.1), null);


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
	this.myTxt = new cjs.Text("You are signing up on a website that friends\nsay is great. Which information do you think\nis safe to be shared when signing up?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 382;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-226.6,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/xAAMA/jAAA");
	this.shape.setTransform(-48.3,54.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A+aHFIAAnoIikACICkh7IAAkjMA/jAAAIAAOE");
	this.shape_1.setTransform(-57,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+eHCIAAnoIilADIClh8IAAkiMA/iAAAIAAODg");
	this.shape_2.setTransform(-56.5,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-36.6,426.6,93.1), null);


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


(lib.tBm1copy2 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Anda sedang mendaftar untuk menyertai laman \nweb yang hebat diperkatakan oleh rakan-rakan \nanda. Apakah maklumat yang selamat untuk\ndikongsi semasa pendaftaran laman web tersebut?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 437;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.5,-27.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EgiHAAAMBEPAAA");
	this.shape.setTransform(-33.3,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EggwAJMIAAkrIikACICkh7IAAruMBEPAAAIAASS");
	this.shape_1.setTransform(-42,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Egg0AJJIAAkrIilADIClh7IAAruMBEOAAAIAASRg");
	this.shape_2.setTransform(-41.5,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1copy2, new cjs.Rectangle(-269.5,-36.6,468.5,120.1), null);


(lib.tBm1copy = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Anda telah menerima beberapa e-mel baru.\nLihat siapa yang menghantar e-mel tersebut\nkemudian klik sama ada anda mahu\nmembuka atau memadamnya.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 382;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237.5,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A+TAAMA8nAAA");
	this.shape.setTransform(-57.7,78.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A88I9IAArYIikACICkh7IAAkjMA8nAAAIAAR0");
	this.shape_1.setTransform(-66.4,21.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9AI6IAArYIilADIClh8IAAkiMA8mAAAIAARzg");
	this.shape_2.setTransform(-65.9,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1copy, new cjs.Rectangle(-269.5,-36.6,415.5,117.1), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-486.1,-360.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.1,-360.9,972,722);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap30();
	this.instance.parent = this;
	this.instance.setTransform(-486.1,-361);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-486.1,-361,972,722);


(lib.soklanset1copy2 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape.setTransform(278.7,138.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_1.setTransform(265.8,138.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B60000").s().p("AgVA6QgIgFgGgLQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgJgGgAgSgFQgIAIAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_2.setTransform(255.5,136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_3.setTransform(245.3,138.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_4.setTransform(235.2,136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_5.setTransform(190.5,138.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_6.setTransform(182,136.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA1QAAALAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAHgHAEQgHAFgJAAQgPAAgIgJg");
	this.shape_7.setTransform(171.9,138.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_8.setTransform(161.4,136.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAIAAAMIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAIAAAMIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_9.setTransform(278.7,88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgFALAAQAJAAAIAEQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMgBgJgFgAgSgXQgHAIAAAQQgBAPAIAJQAGAIANAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_10.setTransform(265.8,88.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgOAEgJQAFgKAJgFQAJgFALAAQAJAAAHAEQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgJgFgAgSgFQgIAIAAAQQAAAPAIAKQAHAIALAAQANAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_11.setTransform(255.5,86.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgFAMAAQAJAAAHAEQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAQQAAAPAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_12.setTransform(245.3,88.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_13.setTransform(235.2,86.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgFAMAAQAJAAAHAEQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAQQAAAPAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_14.setTransform(190.5,88.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006633").s().p("AAUA/IgsgpIAAApIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_15.setTransform(182,86.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA0QAAAMAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAIgHADQgHAFgJAAQgPAAgIgJg");
	this.shape_16.setTransform(171.9,88.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_17.setTransform(161.4,86.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLAAgGAHQgGAIAAAMIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLAAgGAHQgHAIAAAMIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgFQAHgEAKAAQAKAAAHAEQAFAEADAIQAEgHAIgFQAHgEAKAAQAdAAAAAiIAAA1g");
	this.shape_18.setTransform(278.7,37.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B60000").s().p("AgWAnQgIgGgEgJQgFgKgBgOQABgMAFgKQAEgKAJgGQAJgFALgBQAJABAIAEQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMgBgJgFgAgSgXQgHAIAAAPQgBAQAIAJQAGAIANAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_19.setTransform(265.8,37.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgOAEgJQAFgJAJgGQAJgFALgBQAJABAHAEQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgJgFgAgSgFQgIAIAAAQQAAAQAIAJQAHAIALAAQANAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_20.setTransform(255.5,35.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B60000").s().p("AgWAnQgIgGgEgJQgGgKAAgOQAAgMAGgKQAEgKAJgGQAIgFAMgBQAJABAHAEQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAPQAAAQAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_21.setTransform(245.3,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_22.setTransform(235.2,36);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006633").s().p("AgWAnQgIgGgEgJQgGgKAAgOQAAgMAGgKQAEgKAJgGQAIgFAMgBQAJABAHAEQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAPQAAAQAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_23.setTransform(190.5,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006633").s().p("AAUA/IgsgpIAAApIgNAAIAAh9IANAAIAABOIAogmIASAAIgrAoIAvAtg");
	this.shape_24.setTransform(182,35.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA0QAAAMAFAFQAFAGAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgQQgFAJgHADQgHAFgJAAQgPAAgIgJg");
	this.shape_25.setTransform(171.9,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_26.setTransform(161.4,36);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJAAQgLAAgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJAAQgLAAgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_27.setTransform(278.7,-12.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B60000").s().p("AgWAnQgIgFgEgLQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgPIANAAIAABUIgNAAIAAgPQgEAIgHAEQgIAEgJABQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_28.setTransform(265.8,-12.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg3IAPAAIAAB9IgOAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgJgGgAgSgEQgIAHAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_29.setTransform(255.5,-14.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B60000").s().p("AgWAnQgIgFgEgLQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgPIAOAAIAABUIgOAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_30.setTransform(245.3,-12.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_31.setTransform(235.2,-14.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006633").s().p("AgWAnQgIgFgEgLQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgPIANAAIAABUIgNAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_32.setTransform(190.5,-12.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_33.setTransform(182,-14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg0IANAAIAAA0QAAALAFAGQAFAFAKAAQAKAAAHgIQAHgHAAgMIAAgvIAOAAIAABUIgNAAIAAgOQgFAHgHAEQgHAEgJABQgPAAgIgJg");
	this.shape_34.setTransform(171.9,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_35.setTransform(161.4,-14.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_36.setTransform(278.7,-62.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_37.setTransform(265.8,-62.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B60000").s().p("AgVA6QgIgFgGgLQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgJgGgAgSgFQgIAIAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_38.setTransform(255.5,-64.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_39.setTransform(245.3,-62.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_40.setTransform(235.2,-64.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_41.setTransform(190.5,-62.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_42.setTransform(182,-64.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA1QAAALAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAHgHAEQgHAFgJAAQgPAAgIgJg");
	this.shape_43.setTransform(171.9,-62.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_44.setTransform(161.4,-64.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBAOQgFgCgEAAQgOAAgFAJQgHAIAAAMIAAAzg");
	this.shape_45.setTransform(66.1,138.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgMQAGgKAKgHQAKgFALAAQASAAALALQAKAMAAAWIAAABIhCAAQAAASAIAJQAIAJAOAAQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_46.setTransform(57.3,138.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_47.setTransform(46.5,136.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_48.setTransform(39.2,136.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgMQAGgKAKgHQAKgFALAAQASAAALALQAKAMAAAWIAAABIhCAAQAAASAIAJQAIAJAOAAQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_49.setTransform(32.1,138.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAHQgIAIAAAOIAAAzIgPAAIAAhBQAAgOgBgMIAOAAIABAQQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_50.setTransform(21.7,138.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgFgHQgGgFgKAAQgMAAgIAHQgIAHABAOIAAA0IgQAAIAAiFIAQAAIAAA5QAEgIAIgEQAIgFAJAAQAiAAAAAjIAAA6g");
	this.shape_51.setTransform(11.2,136.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgRAqQgKgGgFgKQgFgLAAgPQAAgMAFgMQAFgKALgHQAKgFANAAQAJgBAJAEQAIADAFAFIgEALQgHgFgHgDQgGgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANAAQAHgBAGgCQAHgCAHgGIAEALQgFAGgJADQgJACgJAAQgMABgLgGg");
	this.shape_52.setTransform(1.5,138.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgvAyIAGgLQAJAHAKAEQAKAEANgBQAPAAAJgFQAIgHAAgKQAAgHgEgEQgEgEgHgDIgRgFQgOgDgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgJQAGgIALgEQAKgGAOABQANAAAMAEQALAEAIAIIgFALQgKgHgJgEQgJgEgLAAQgPAAgIAHQgJAGAAALQAAAKAIAGQAHAEAPAEQARAEAJADQAKADAGAHQAGAGAAAMQAAALgFAIQgGAIgLAFQgLAEgOABQgeAAgSgRg");
	this.shape_53.setTransform(-8.9,136.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKAAQgLAAgHAHQgGAIgBAOIAAAzIgOAAIAAg4QABgMgFgHQgEgFgLAAQgLAAgHAHQgHAIAAAOIAAAzIgOAAIAAhBQgBgOgBgMIAOAAIABAQQAFgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAkIAAA5g");
	this.shape_54.setTransform(-27.4,138.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_55.setTransform(-37.5,136.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_56.setTransform(-45.2,136.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_57.setTransform(-61.2,138.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_58.setTransform(-72.2,136.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_59.setTransform(-83.1,138.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_60.setTransform(-93.6,140.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_61.setTransform(-101.3,136.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_62.setTransform(-106.3,138.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_63.setTransform(-116,138.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_64.setTransform(-126.9,136.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_65.setTransform(-142.1,138.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_66.setTransform(-149.4,136.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_67.setTransform(-153.8,136.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgMQAGgKAKgHQAKgFALAAQASAAALALQAKAMAAAWIAAABIhCAAQAAASAIAJQAIAJAOAAQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_68.setTransform(-160.9,138.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAnBBIAAg7IhNAAIAAA7IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_69.setTransform(-172.8,136.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKAAQgMAAgGAHQgHAIABAOIAAAzIgPAAIAAg4QAAgMgEgHQgEgFgKAAQgMAAgHAHQgGAIgBAOIAAAzIgPAAIAAhBQAAgOgBgMIAPAAIAAAQQAEgIAIgFQAHgFALAAQALAAAGAFQAHAEADAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_70.setTransform(-239.6,138.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgVAqQgKgGgGgKQgGgLAAgPQAAgNAGgLQAGgLAKgGQAJgFAMAAQANAAAKAFQAKAGAFALQAFALABANQgBAPgFALQgFAKgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJAAAQQAAASAHAJQAIAJAMAAQAOAAAHgJQAHgJAAgSQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_71.setTransform(-252.8,138.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgQAqQgKgGgGgKQgGgLAAgPQAAgMAGgMQAGgKAKgHQAKgFAMAAQAKgBAIAEQAJADAGAFIgFALQgHgFgGgDQgHgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANAAQAHgBAHgCQAGgCAHgGIAFALQgGAGgJADQgJACgKAAQgMABgJgGg");
	this.shape_72.setTransform(-262.3,138.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgmAuIAAgKIA5hFIg3AAIAAgMIBJAAIAAALIg4BEIA6AAIAAAMg");
	this.shape_73.setTransform(-271.7,138.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAbBDIAAg4QgEAIgHAFQgJAEgJAAQgNAAgJgFQgIgGgFgLQgGgJAAgPQAAgOAGgLQAFgLAIgGQAKgGAMAAQAKAAAIAFQAJAFADAKIACgRIAOAAQgBALAAAOIAABpgAgUgsQgIAJAAARQAAARAIAIQAHAJANAAQAOAAAGgJQAIgIAAgRQAAgRgIgJQgGgJgOAAQgMAAgIAJg");
	this.shape_74.setTransform(-282.2,140.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_75.setTransform(-293.2,140.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgmBFQgSgJgKgSQgJgSAAgXQAAgXAKgSQAKgTASgJQASgKAVAAQAXgBARAKQARAKAJAPQAIAQAAARQAAARgFAMQgFALgJAFQgIAGgKAAQgKAAgFgFQgGgEAAgIIgBAAQgEAIgHAEQgGAFgKAAQgMAAgHgJQgIgIAAgQQAAgLAFgLQAFgLAJgGQAJgIAKABQAJAAAGAEQAHAEACAHIACgOIAMAAIgJAyIAAAGQAAAHADACQACADAGAAQAGAAAFgFQAFgEAEgIQAEgKAAgOQAAgPgHgNQgHgMgOgIQgPgIgUAAQgSAAgPAIQgPAJgJAPQgIAQAAAUQAAAVAIAOQAIAQAPAIQAPAIATAAQAPAAAMgEQALgEAGgJIAQAAQgIANgPAIQgQAHgVAAQgXABgRgLgAgMgYQgGAGgDAIQgEAIAAAJQAAALAFAGQAFAGAIAAQAIAAAHgGQAHgFADgJQAEgJAAgJQAAgLgFgEQgGgGgIAAQgIAAgHAFg");
	this.shape_76.setTransform(-307,138.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAbBDIAAg4QgEAIgHAFQgJAEgJAAQgNAAgJgFQgIgGgFgLQgGgJAAgPQAAgOAGgLQAFgLAIgGQAKgGAMAAQAKAAAIAFQAJAFADAKIADgRIANAAQgCALABAOIAABpgAgUgsQgIAJAAARQAAARAIAIQAHAJANAAQAOAAAGgJQAIgIAAgRQAAgRgIgJQgGgJgOAAQgMAAgIAJg");
	this.shape_77.setTransform(-321.1,140.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgnBCIAAgMIAtgyQAJgJAEgIQAEgIAAgJQAAgKgGgGQgGgGgLAAQgTAAgSAPIgGgLQAIgIAMgEQALgFAMAAQASAAAKAKQAKAJAAAQQAAALgFAKQgFAJgMANIgkAoIA/AAIAAANg");
	this.shape_78.setTransform(-331.8,136.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgKIADgIIgnhaIAQAAIAeBLIAghLIAOAAIgqBkQgGAPgKAHQgLAIgPACg");
	this.shape_79.setTransform(-342.2,140.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAdAuIgdgkIgcAkIgSAAIAmguIgkgtIASAAIAaAiIAbgiIASAAIgkAtIAmAug");
	this.shape_80.setTransform(-351.9,138.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgJBBIAAgTIASAAIAAATgAgDAfIgFhfIARAAIgEBfg");
	this.shape_81.setTransform(-63.2,86.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_82.setTransform(-67.4,86.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAIQgIAHAAAOIAAAzIgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_83.setTransform(-75,88.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_84.setTransform(-82.4,86.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAJQAAAMgJAIQgKAGgRAAQgWAAgNgLg");
	this.shape_85.setTransform(-89.2,88.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_86.setTransform(-100.6,86.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgFAJQgHAIAAAMIAAAzg");
	this.shape_87.setTransform(-105.5,88.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_88.setTransform(-115.2,88.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_89.setTransform(-126.1,86.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_90.setTransform(-138.2,86.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_91.setTransform(-146.2,90.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBAOQgEgCgFAAQgOAAgGAJQgGAIAAAMIAAAzg");
	this.shape_92.setTransform(-154.1,88.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_93.setTransform(-163,88.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AguBBIAAiBIAzAAQAUAAALAKQALAKAAAQQAAASgLAJQgMAJgTAAIgkAAIAAA5gAgfgEIAiAAQAPABAHgHQAHgGAAgMQAAgLgHgHQgHgFgPAAIgiAAg");
	this.shape_94.setTransform(-173.5,86.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgJIADgJIgnhZIAQAAIAeBKIAghKIAOAAIgqBjQgGAPgKAHQgLAIgPACg");
	this.shape_95.setTransform(-316.5,90.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgoIATAAIgtAqIAyAwg");
	this.shape_96.setTransform(-325.3,86.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgRAqQgKgGgFgKQgFgLAAgPQAAgNAFgLQAFgKALgHQAKgFANAAQAJgBAJAEQAIADAFAFIgEALQgHgFgHgDQgGgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANgBQAHAAAGgCQAHgCAHgGIAEALQgFAGgJACQgJADgJAAQgMABgLgGg");
	this.shape_97.setTransform(-335.1,88.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_98.setTransform(-341.9,86.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgGBBIg4iBIAPAAIAvBuIAwhuIAPAAIg5CBg");
	this.shape_99.setTransform(-350.5,86.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHA5IAAgRIAPAAIAAARgAgDAbIgEhTIAPAAIgEBTg");
	this.shape_100.setTransform(111.7,34.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_101.setTransform(105.1,36.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgjAwQAKgCAHgEQAFgFAEgJIADgHIgihOIAOAAIAaBBIAbhBIANAAIglBWQgFAOgJAHQgJAGgNACg");
	this.shape_102.setTransform(96.7,38);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgGgJABQgKAAgHAGQgHAIAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIABAOQAEgHAIgFQAHgEAIAAQAdAAAAAfIAAAyg");
	this.shape_103.setTransform(88.1,36.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_104.setTransform(78.8,36.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgGgJABQgKAAgGAGQgGAIAAALIAAAtIgLAAIAAgxQAAgLgFgFQgDgGgKABQgJAAgHAGQgFAIAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQAEgIAGgEQAHgEAIAAQAKAAAGAEQAFAEADAHQAEgGAHgFQAHgEAJAAQAbAAgBAfIAAAyg");
	this.shape_105.setTransform(67.5,36.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_106.setTransform(55.8,36.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_107.setTransform(49.8,34.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgYAeQgLgKAAgUQAAgLAFgKQAEgJAKgFQAIgGAKABQAQgBAJAKQAJAMAAARIAAACIg6AAQAAAPAHAIQAHAIAMAAQAOAAAMgKIAFAKQgGAFgIADQgIACgJAAQgRABgLgMgAgNgYQgHAFgCAMIAuAAQAAgMgGgFQgGgHgKAAQgJAAgGAHg");
	this.shape_108.setTransform(43.9,36.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgfAfIAFgKQAGAGAHACQAHACAHAAQAJAAAFgDQAEgDAAgGQAAgEgDgDQgDgDgHgCIgNgDQgKgDgGgEQgFgGAAgIQAAgKAIgHQAJgGANAAQAIAAAIACQAHADAFAFIgEAJQgLgJgNAAQgIAAgFADQgEADAAAHQAAAFADACQADADAGACIANADQALACAFAFQAGAFAAAJQAAAKgJAHQgIAFgPAAQgTAAgMgKg");
	this.shape_109.setTransform(35.9,36.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgjIAQAAIgmAlIArAqg");
	this.shape_110.setTransform(25.1,34.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_111.setTransform(15.6,36.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAWAoIgWg9IgWA9IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_112.setTransform(4.5,36.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_113.setTransform(-7.2,36.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgFA5IAAhPIALAAIAABPgAgHgpIAAgPIAPAAIAAAPg");
	this.shape_114.setTransform(-17.1,34.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgZAgQgIgHAAgQIAAgxIANAAIAAAxQAAAKAFAFQAEAGAJAAQAKAAAGgHQAHgHAAgMIAAgsIANAAIAABPIgNAAIAAgNQgEAHgGAEQgHAEgIgBQgOABgHgJg");
	this.shape_115.setTransform(-23.3,36.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgVIAMgEIAAAZIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAIAJgBIAAALQgFABgHAAQgLAAgGgGg");
	this.shape_116.setTransform(-30.5,34.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgGgJABQgKAAgHAGQgHAIAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIABAOQAEgHAIgFQAHgEAIAAQAdAAAAAfIAAAyg");
	this.shape_117.setTransform(-37.5,36.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_118.setTransform(-46.9,36.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgFQgEgGgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAzQAEgIAHgEQAIgDAHAAQAdAAAAAeIAAAzg");
	this.shape_119.setTransform(-55.7,34.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHACQAHACAHAAQAMAAAGgGQAFgGAAgMIAAgTQgDAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAIIAAgOIANAAIAABPQAAARgJAKQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIAKAAQAMAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgMAAQgKAAgHAIg");
	this.shape_120.setTransform(-65.1,37.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgGgJABQgKAAgHAGQgHAIAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIABAOQAEgHAIgFQAHgEAIAAQAdAAAAAfIAAAyg");
	this.shape_121.setTransform(-74,36.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgYAeQgLgKAAgUQAAgLAFgKQAFgJAIgFQAJgGAKABQAQgBAJAKQAJAMAAARIAAACIg6AAQABAPAGAIQAHAIANAAQAOAAAMgKIADAKQgEAFgJADQgIACgIAAQgTABgKgMgAgNgYQgGAFgCAMIAuAAQgCgMgFgFQgGgHgKAAQgJAAgGAHg");
	this.shape_122.setTransform(-82.6,36.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAtApIAAgxQAAgLgDgFQgEgGgJABQgKAAgGAGQgFAIgBALIAAAtIgLAAIAAgxQAAgLgFgFQgDgGgJABQgKAAgHAGQgFAIAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIABAOQAEgIAGgEQAHgEAIAAQAKAAAGAEQAFAEADAHQAEgGAHgFQAHgEAJAAQAaAAABAfIAAAyg");
	this.shape_123.setTransform(-93.7,36.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgGgJABQgKAAgHAGQgHAIAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIABAOQAEgHAIgFQAHgEAIAAQAdAAAAAfIAAAyg");
	this.shape_124.setTransform(-108.9,36.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_125.setTransform(-118.2,36.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgjIAQAAIgmAlIArAqg");
	this.shape_126.setTransform(-125.8,34.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_127.setTransform(-135.3,36.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_128.setTransform(-148.3,36.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgjAwQAKgCAHgEQAFgFAEgJIADgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNACg");
	this.shape_129.setTransform(-156.7,38);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgUAlQgIgGgEgJQgFgJAAgMQAAgMAFgKQAEgJAIgFQAIgGALABQAIgBAHAEQAHAFAEAHIAAgOIANAAIAABPIgNAAIAAgOQgDAHgHAFQgIADgIAAQgLAAgIgEgAgRgWQgHAJAAAOQAAAOAHAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_130.setTransform(-165.7,36.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgpAsIAFgKQAIAHAJADQAJADALAAQANAAAIgFQAHgFAAgLQAAgFgDgEQgEgDgGgCIgPgFQgNgDgIgDQgIgCgGgHQgFgGAAgKQAAgKAFgHQAFgHAKgFQAJgEALAAQAMAAAKAEQALAEAHAGIgGALQgIgHgIgEQgIgDgKAAQgMABgHAFQgIAGAAAJQAAAJAHAFQAGADANAEIAXAFQAIAEAGAFQAFAHAAAJQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_131.setTransform(-174.9,34.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMgBgGAJQgHAHAAANIAAA0IgNAAIAAg4QgBgMgEgHQgFgFgJAAQgMgBgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAPQADgIAIgFQAHgFALAAQAKAAAHAFQAGAEAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_132.setTransform(-238,37.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgWAqQgJgGgGgLQgFgLgBgOQABgNAFgLQAGgLAJgFQAKgHAMABQANgBAKAHQAKAFAFALQAGALAAANQAAAOgGALQgFALgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBARAIAJQAIAKAMgBQAOABAHgKQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_133.setTransform(-251.2,38);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgRAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgKAKgGQAKgHAMABQAKAAAIADQAJADAGAFIgFALQgHgFgGgCQgHgDgHAAQgNAAgIAJQgIAKAAAPQAAARAIAJQAIAKANgBQAHABAHgDQAGgCAHgGIAFALQgGAFgJADQgJADgJAAQgMABgLgGg");
	this.shape_134.setTransform(-260.7,38);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgIAJIAAgSIASAAIAAASg");
	this.shape_135.setTransform(-267.5,41.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_136.setTransform(-275.4,38);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRAAQgWABgNgMg");
	this.shape_137.setTransform(-285.2,38);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_138.setTransform(-294.9,39.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgmBFQgSgJgKgSQgJgSAAgXQAAgXAKgTQAKgRASgKQASgLAVABQAXAAARAJQARAKAJAQQAIAPAAARQAAARgFAMQgFALgJAFQgIAGgKgBQgKAAgFgDQgGgFAAgIIgBAAQgEAIgHAFQgGADgKAAQgMAAgHgIQgIgIAAgQQAAgLAFgLQAFgLAJgGQAJgIAKAAQAJABAGAEQAHAEACAHIACgOIAMAAIgJAyIAAAHQAAAFADADQACADAGAAQAGAAAFgFQAFgDAEgJQAEgKAAgOQAAgOgHgOQgHgMgOgIQgPgIgUAAQgSAAgPAIQgPAIgJARQgIAPAAAUQAAAVAIAPQAIAPAPAIQAPAIATAAQAPABAMgFQALgEAGgJIAQAAQgIAOgPAHQgQAIgVgBQgXAAgRgKgAgMgYQgGAGgDAIQgEAJAAAIQAAALAFAGQAFAGAIAAQAIAAAHgGQAHgFADgJQAEgJAAgJQAAgLgFgEQgGgGgIAAQgIAAgHAFg");
	this.shape_139.setTransform(-309.1,37.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgHBDIAAiFIAOAAIAACFg");
	this.shape_140.setTransform(-319.8,35.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_141.setTransform(-324.1,36.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgHAuIgmhbIAPAAIAeBLIAghLIAOAAIgnBbg");
	this.shape_142.setTransform(-331.1,38);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_143.setTransform(-340.9,38);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMABQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_144.setTransform(-351.7,36);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgJBBIAAgTIATAAIAAATgAgEAfIgEhfIASAAIgGBfg");
	this.shape_145.setTransform(13.1,-14.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_146.setTransform(7.6,-13.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_147.setTransform(-1.2,-12.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgQA/QgHgFgFgIIAAAQIgPAAIAAiEIAPAAIAAA6QAFgJAHgEQAJgGAJAAQANAAAJAHQAJAFAFALQAFAKAAAOQAAAOgFALQgFAKgJAHQgJAGgNAAQgJAAgJgFgAgUgFQgHAIgBARQABARAHAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgRgIgIQgGgJgOAAQgNAAgHAJg");
	this.shape_148.setTransform(-11.5,-14.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_149.setTransform(-23.1,-12.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgFgHgMABQgLgBgIAJQgHAGgBANIAAA1IgPAAIAAiFIAPAAIAAA5QAFgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_150.setTransform(-33.5,-14.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_151.setTransform(-44.7,-12.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgLAKgIQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_152.setTransform(-54.4,-12.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgHAPQAGgJABgGIgIAAIAAgTIASAAIAAANQgBAHgCAHQgDAGgEAGg");
	this.shape_153.setTransform(-65.8,-7.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_154.setTransform(-70,-14.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_155.setTransform(-78,-10.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_156.setTransform(-89,-12.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_157.setTransform(-99.5,-10.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAZAAIAAAMIgZAAIAAAxQAAAKADAEQAFAEAHAAIAKgBIAAAMQgFACgIAAQgMAAgHgHg");
	this.shape_158.setTransform(-113.2,-13.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_159.setTransform(-122.1,-12.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgMgBgGAJQgGAHgBANIAAA0IgOAAIAAg4QABgNgFgFQgEgHgLABQgLgBgHAJQgHAHABANIAAA0IgPAAIAAhBQgBgOgBgLIAOAAIABAQQAFgKAHgEQAHgFALAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_160.setTransform(-135.3,-12.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_161.setTransform(-149,-12.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_162.setTransform(-156.4,-14.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_163.setTransform(-163.5,-12.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgvAyIAGgMQAJAJAKADQAKAEANAAQAPgBAJgGQAIgFAAgMQAAgGgEgEQgEgEgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgEQAKgFAOgBQANAAAMAFQALAEAIAIIgFALQgKgHgJgEQgJgEgLABQgPAAgIAGQgJAHAAAKQAAALAIAEQAHAFAPAEQARAEAJADQAKADAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAEgOAAQgeAAgSgQg");
	this.shape_164.setTransform(-174.1,-14.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_165.setTransform(-332.5,-14.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_166.setTransform(-338.1,-13.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_167.setTransform(-343.3,-14.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgvAyIAGgMQAJAJAKADQAKAEANAAQAPgBAJgGQAIgFAAgMQAAgGgEgEQgEgEgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgEQAKgFAOgBQANAAAMAFQALAEAIAIIgFALQgKgHgJgEQgJgEgLABQgPAAgIAGQgJAHAAAKQAAALAIAEQAHAFAPAEQARAEAJADQAKADAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAEgOAAQgeAAgSgQg");
	this.shape_168.setTransform(-351.1,-14.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgIBBIAAgTIASAAIAAATgAgEAfIgEhfIASAAIgGBfg");
	this.shape_169.setTransform(111.4,-64.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_170.setTransform(103.8,-64.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_171.setTransform(92.8,-64.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_172.setTransform(81.9,-64.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgIAPQAIgJAAgGIgJAAIAAgTIASAAIAAANQABAHgDAGQgDAHgEAGg");
	this.shape_173.setTransform(74.3,-57.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_174.setTransform(66.7,-64.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgnBCIAAgMIAsgyQAKgJAEgIQAEgIAAgJQAAgKgGgGQgHgGgKAAQgSAAgTAPIgFgLQAHgIAMgEQAMgFALAAQASAAAKAKQAKAJAAAQQAAALgFAKQgFAJgMANIgkAoIA/AAIAAANg");
	this.shape_175.setTransform(55.8,-64.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAwBBIAAhgIgqBgIgKAAIgrhfIAABfIgOAAIAAiBIANAAIAwBvIAxhvIAMAAIAACBg");
	this.shape_176.setTransform(42.6,-64.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAjBBIgQgrQgDgIgFgDQgGgDgHABIghAAIAAA4IgPAAIAAiBIAyAAQAWAAALAKQALAJAAARQAAANgHAIQgGAJgNADQAGABAEAEQAEAEADAHIAQAsgAgjgDIAjAAQAdAAAAgYQABgNgIgFQgIgHgOAAIgjAAg");
	this.shape_177.setTransform(28.9,-64.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_178.setTransform(15.3,-64.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_179.setTransform(7.3,-60.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_180.setTransform(-3.3,-62.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_181.setTransform(-14.4,-62.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_182.setTransform(-24.9,-62.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_183.setTransform(-35.2,-62.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAJQgGAHAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAJQgHAHAAANIAAA0IgOAAIAAhBQAAgOgCgLIAOAAIABAQQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_184.setTransform(-48.2,-62.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_185.setTransform(-61.1,-62.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMAAgGAJQgGAHgBANIAAA0IgOAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAJQgHAHABANIAAA0IgPAAIAAhBQgBgOgBgLIAOAAIABAQQAFgKAHgEQAHgFALAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_186.setTransform(-74.1,-62.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgGgHgLAAQgLAAgIAJQgHAGAAANIAAA1IgQAAIAAiFIAQAAIAAA5QAEgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_187.setTransform(-92.1,-64.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_188.setTransform(-103.3,-62.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_189.setTransform(-110.6,-64.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_190.setTransform(-117.7,-62.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_191.setTransform(-126,-64);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_192.setTransform(-139.6,-62.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_193.setTransform(-150.6,-64.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_194.setTransform(-161.1,-62.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgQAAIA5iBIANAAIA4CBgAgcATIA4AAIgchBg");
	this.shape_195.setTransform(-173.1,-64.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAJQgGAHgBANIAAA0IgOAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAJQgHAHAAANIAAA0IgOAAIAAhBQgBgOgBgLIAOAAIABAQQAFgKAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_196.setTransform(-287.5,-62.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgWAqQgJgGgGgLQgFgLgBgOQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAFALABANQgBAOgFALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgHAKAAAPQAAASAHAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_197.setTransform(-300.6,-62.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgRAqQgJgGgGgLQgFgKgBgPQABgNAFgKQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAGAFIgFAMQgHgGgGgCQgHgDgHAAQgNAAgIAKQgIAIAAAQQAAARAIAJQAIAJANAAQAHAAAHgCQAGgDAHgFIAFALQgGAFgJADQgJAEgKAAQgMAAgKgGg");
	this.shape_198.setTransform(-310.1,-62.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgJAKIAAgTIASAAIAAATg");
	this.shape_199.setTransform(-317,-58.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgMAKgHQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJABgFAEQgFADAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_200.setTransform(-323.7,-62.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgMAKgHQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJABgFAEQgFADAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_201.setTransform(-332.7,-62.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_202.setTransform(-342.1,-62.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAGgEAFgKIADgJIgmhZIAPAAIAeBKIAfhKIAPAAIgrBiQgFAQgLAIQgJAGgPAEg");
	this.shape_203.setTransform(-351.9,-60.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAIQgIAIAAANIAAA0IgPAAIAAhBQAAgOgBgMIAOAAIABARQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_204.setTransform(249.4,-113);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_205.setTransform(238.3,-112.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_206.setTransform(227.9,-111);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_207.setTransform(216.4,-112.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_208.setTransform(203.4,-112.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_209.setTransform(189.7,-112.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgWBRIAAgOIAOACQAIAAAEgFQAEgGAAgMIAAh/IAOAAIAAB/QABATgIAIQgGAJgPAAIgQgBg");
	this.shape_210.setTransform(180.7,-113.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgqIATAAIgtAsIAyAvg");
	this.shape_211.setTransform(-8.1,-115);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_212.setTransform(-18.5,-112.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgTBUIAAgNIAJACQAOAAAAgTIAAhjIAPAAIAABlQAAAPgHAHQgIAHgLAAQgGAAgGgBgAAChEIAAgQIASAAIAAAQg");
	this.shape_213.setTransform(-26.8,-112.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgQA/QgIgFgDgIIAAARIgQAAIAAiFIAQAAIAAA6QADgJAIgEQAJgGAJAAQAMAAAKAHQAJAFAFALQAGAKAAAOQAAAOgGALQgFALgJAGQgKAFgMABQgJgBgJgEgAgUgFQgIAIABARQgBARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgGgJgOAAQgNAAgHAJg");
	this.shape_214.setTransform(-33,-114.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_215.setTransform(-44.1,-112.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLgBQgPABgIAGQgJAHAAALQAAAJAIAFQAHAGAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAJgLAEQgLAFgOgBQgeAAgSgQg");
	this.shape_216.setTransform(-55,-114.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_217.setTransform(-244,-112.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_218.setTransform(-254.9,-114.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_219.setTransform(-265.9,-112.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_220.setTransform(-276.3,-111);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_221.setTransform(-284.1,-114.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAIQgGAJAAALIAAA0g");
	this.shape_222.setTransform(-289,-113);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_223.setTransform(-298.7,-112.9);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAsAAQAfAAAQARQARARAAAeQAAAfgRARQgQARgfAAgAgmA1IAbAAQAZAAAMgOQANgNAAgaQAAgzgyAAIgbAAg");
	this.shape_224.setTransform(-310.4,-114.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_225.setTransform(275.3,138.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAKAEADQAEAEAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_226.setTransform(267.6,137.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_227.setTransform(260.1,138.4);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_228.setTransform(253.4,136.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_229.setTransform(246.7,138.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_230.setTransform(235.9,136.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_231.setTransform(193,138.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_232.setTransform(183.5,138.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_233.setTransform(173.8,140.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_234.setTransform(161.9,136.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_235.setTransform(275.3,88.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#B60000").s().p("AgDAyQgHgGAAgOIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAFQAEADAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_236.setTransform(267.6,86.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_237.setTransform(260.1,88.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_238.setTransform(253.4,86.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_239.setTransform(246.7,88.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_240.setTransform(235.9,86.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAIAAAMIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_241.setTransform(193,88);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_242.setTransform(183.5,88.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALAAAJAFQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAFgLABQgJgBgIgEQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAIQAHAIALAAQANAAAHgIQAHgIAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_243.setTransform(173.8,89.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_244.setTransform(161.9,86.3);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_245.setTransform(275.3,37.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#B60000").s().p("AgDAyQgHgGAAgOIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAFQAEADAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_246.setTransform(267.6,36.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_247.setTransform(260.1,37.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_248.setTransform(253.4,35.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_249.setTransform(246.7,37.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_250.setTransform(235.9,36);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLAAgHAHQgIAIAAAMIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgFQAHgEAKAAQAeAAAAAiIAAA1g");
	this.shape_251.setTransform(193,37.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#006633").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_252.setTransform(183.5,37.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgEQAHgGAKAAQALABAJAFQAJAGAEAKQAFAKAAANQAAAOgFAJQgEAJgJAGQgJAFgLABQgJgBgIgEQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAIQAHAIALAAQANAAAHgIQAHgIAAgQQAAgQgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_253.setTransform(173.8,39.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_254.setTransform(161.9,36);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_255.setTransform(275.3,-12.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAKAEADQAEAEAHAAIAJgBIAAAMQgFABgHAAQgMAAgGgHg");
	this.shape_256.setTransform(267.6,-13.7);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_257.setTransform(260.1,-12.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_258.setTransform(253.4,-14.4);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_259.setTransform(246.7,-12.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_260.setTransform(235.9,-14.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKAAQgLAAgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_261.setTransform(193,-12.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_262.setTransform(183.5,-12.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgLIANAAIABAQQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEALgJAFQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgpQgHAIAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_263.setTransform(173.8,-10.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_264.setTransform(161.9,-14.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_265.setTransform(275.3,-62.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAEQAEAEAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_266.setTransform(267.6,-64);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_267.setTransform(260.1,-62.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_268.setTransform(253.4,-64.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_269.setTransform(246.7,-62.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_270.setTransform(235.9,-64.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_271.setTransform(193,-62.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_272.setTransform(183.5,-62.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_273.setTransform(173.8,-61);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_274.setTransform(161.9,-64.5);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgFAJQgHAIAAAMIAAAzg");
	this.shape_275.setTransform(28.7,138.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgEgFgMAAQgLAAgIAHQgHAHgBAOIAAA0IgPAAIAAiFIAPAAIAAA5QAFgIAIgEQAIgFAKAAQAgAAAAAjIAAA6g");
	this.shape_276.setTransform(-26.2,136.5);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgQAqQgKgGgGgKQgGgLAAgPQAAgMAGgMQAFgKALgHQAKgFAMAAQAKgBAIAEQAJADAGAFIgFALQgHgFgGgDQgHgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANAAQAHgBAHgCQAGgCAHgGIAFALQgGAGgJADQgJACgKAAQgMABgJgGg");
	this.shape_277.setTransform(-35.9,138.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAHQgHAIAAAOIAAAzIgNAAIAAg4QgBgMgEgHQgFgFgJAAQgMAAgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQADgIAIgFQAHgFALAAQAKAAAHAFQAGAEAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_278.setTransform(-64.8,138.5);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAHQgHAIAAAOIAAAzIgNAAIAAg4QAAgMgFgHQgFgFgJAAQgMAAgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQAEgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAkIAAA5g");
	this.shape_279.setTransform(-100.9,138.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgFgLAAgPQAAgNAFgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALAAANQAAAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBASAIAJQAHAJANAAQAOAAAHgJQAHgJABgSQgBgQgHgJQgIgJgNAAQgNAAgHAJg");
	this.shape_280.setTransform(-114.1,138.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQADgJAHgFQAIgFAKAAIAJABIgBAOQgFgCgEAAQgOAAgFAJQgHAIAAAMIAAAzg");
	this.shape_281.setTransform(-122,138.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgPQAAgOAHgHQAGgHANgBQAHABAGABIAAANIgJgBQgIAAgEADQgEAEAAALIAAAMIAXAAIAAALIgXAAIAABPg");
	this.shape_282.setTransform(-129,136.5);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgIBBIAAgTIARAAIAAATgAgEAfIgEhfIARAAIgFBfg");
	this.shape_283.setTransform(-101.7,86.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgJIADgJIgnhZIAQAAIAeBKIAghKIAOAAIgqBjQgGAPgKAHQgLAIgPACg");
	this.shape_284.setTransform(-108.6,90.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_285.setTransform(-132.4,88.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_286.setTransform(-146.1,88.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgWAqQgJgGgGgKQgFgLgBgPQABgNAFgLQAGgLAJgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALAAANQAAAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBARAIAKQAIAJAMgBQAOABAHgJQAHgKAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_287.setTransform(-161.2,88.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgYA6QgOgHgHgQQgIgOAAgVQAAgUAIgOQAHgQAOgIQANgIATAAQANABAMAEQALAEAIAIIgGALQgJgHgKgEQgJgDgKAAQgWAAgMANQgLAOAAAZQAAAaAMAOQAMAOAWAAQAQAAAPgFIAAgoIggAAIAAgLIAuAAIAAA8QgIADgMADQgMACgNABQgTAAgOgJg");
	this.shape_288.setTransform(-173.3,86.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAJQgHAIAAALIAAA0g");
	this.shape_289.setTransform(9.4,37.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_290.setTransform(0.5,38);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgHAuIgnhbIAQAAIAeBLIAghLIAOAAIgnBbg");
	this.shape_291.setTransform(-9.3,38);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_292.setTransform(-19.1,38);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAJQgGAIAAALIAAA0g");
	this.shape_293.setTransform(-26.8,37.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMABQANgBAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAJQAHAKANgBQAOABAHgKQAIgJAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_294.setTransform(-35.9,38);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAHgIQAHgIANAAQAGAAAGACIAAANIgKgBQgHAAgEADQgEAFAAAKIAAAMIAXAAIAAALIgXAAIAABPg");
	this.shape_295.setTransform(-44.2,35.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_296.setTransform(-57.4,38.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMABQANgBAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAJQAHAKANgBQAOABAHgKQAIgJAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_297.setTransform(-67.8,38);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgJIAEgJIgohZIAQAAIAeBKIAfhKIAQAAIgrBjQgHAPgKAHQgKAIgPACg");
	this.shape_298.setTransform(-77.8,40.1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_299.setTransform(-90.8,36.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_300.setTransform(-99.3,37.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_301.setTransform(-109.9,38.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_302.setTransform(-120.9,38);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgEgFgMAAQgLgBgIAJQgIAGAAANIAAA1IgOAAIAAiFIAOAAIAAA5QAFgIAIgEQAIgFAKAAQAgAAAAAjIAAA6g");
	this.shape_303.setTransform(-131.3,35.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_304.setTransform(-143.6,35.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_305.setTransform(-162.4,38);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgHBBIAAiBIAOAAIAACBg");
	this.shape_306.setTransform(-177.5,36.1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgJBBIAAgTIATAAIAAATgAgEAfIgEhfIASAAIgFBfg");
	this.shape_307.setTransform(-0.4,-14.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACEIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_308.setTransform(-8.3,-14.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_309.setTransform(-18.9,-12.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAJQgGAIAAALIAAA0g");
	this.shape_310.setTransform(-41.1,-12.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgKBDIAAhOIgSAAIAAgMIASAAIAAgOQAAgPAHgHQAHgIAMAAQAHAAAGACIAAANIgJgBQgIAAgEADQgEAFAAAKIAAAMIAWAAIAAAMIgWAAIAABOg");
	this.shape_311.setTransform(-48.1,-14.4);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgIAPQAIgJAAgGIgIAAIAAgTIARAAIAAANQAAAHgCAHQgDAGgEAGg");
	this.shape_312.setTransform(-58.1,-7.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_313.setTransform(-76.6,-12.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_314.setTransform(-91.5,-12.4);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgGAJQgGAIAAALIAAA0g");
	this.shape_315.setTransform(-99.5,-12.4);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAKAMgBQAOABAHgKQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_316.setTransform(-108.6,-12.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKABQgMgBgGAJQgHAHAAANIAAA0IgNAAIAAg4QgBgNgEgFQgFgHgJABQgMgBgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_317.setTransform(-121.9,-12.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACEIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_318.setTransform(-140.4,-14.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLABgOQgBgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgIAKAAAPQAAASAIAIQAHAKANgBQAOABAHgKQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_319.setTransform(-150.8,-12.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgWAqQgJgGgGgLQgFgLgBgOQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALAAANQAAAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKABAPQgBASAIAIQAIAKAMgBQAOABAHgKQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_320.setTransform(-161.2,-12.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgYA6QgOgHgHgPQgIgPAAgVQAAgTAIgPQAHgPAOgJQANgHATgBQANAAAMAFQALAEAIAIIgGALQgJgHgKgEQgJgEgKABQgWAAgMANQgLAOAAAZQAAAbAMANQAMAOAWAAQAQAAAPgFIAAgoIggAAIAAgLIAuAAIAAA7QgIAEgMADQgMADgNgBQgTABgOgJg");
	this.shape_321.setTransform(-173.3,-14.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgHAPQAGgJABgGIgJAAIAAgTIATAAIAAANQAAAHgDAGQgCAHgGAGg");
	this.shape_322.setTransform(-3.1,-57.9);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgnBCIAAgMIAtgyQAIgJAFgIQAEgIAAgJQAAgKgGgGQgGgGgLAAQgTAAgRAPIgHgLQAJgIALgEQAMgFALAAQARAAALAKQAKAJAAAQQAAALgFAKQgFAJgLANIgkAoIA/AAIAAANg");
	this.shape_323.setTransform(-21.6,-64.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAvBBIAAhgIgqBgIgKAAIgqhfIAABfIgNAAIAAiBIAMAAIAwBvIAxhvIANAAIAACBg");
	this.shape_324.setTransform(-34.9,-64.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAjBBIgQgrQgDgIgFgDQgFgDgJABIggAAIAAA4IgPAAIAAiBIAzAAQAUAAAMAKQALAJAAARQAAANgGAIQgHAJgNADQAGABAEAEQAEAEACAHIARAsgAgjgDIAjAAQAeAAAAgYQAAgNgIgFQgHgHgPAAIgjAAg");
	this.shape_325.setTransform(-48.6,-64.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKAAAPQAAASAIAIQAHAJANAAQAOAAAHgJQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_326.setTransform(-75.9,-62.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_327.setTransform(-89.1,-62.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgGAuIgohbIAQAAIAeBLIAfhLIAQAAIgoBbg");
	this.shape_328.setTransform(-116.5,-62.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgGgFQgEgHgMAAQgLAAgIAJQgIAGAAANIAAA1IgOAAIAAiFIAOAAIAAA5QAFgIAIgFQAIgEAKAAQAgAAAAAkIAAA5g");
	this.shape_329.setTransform(-137.6,-64.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_330.setTransform(-153.1,-62.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAJAMAAQAOAAAHgJQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_331.setTransform(-163.5,-62.6);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgGBBIAAg1Ig0hMIASAAIAoBAIAphAIASAAIgzBMIAAA1g");
	this.shape_332.setTransform(-174.3,-64.5);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAIQgHAJAAALIAAA0g");
	this.shape_333.setTransform(246.8,-113);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgMAKgHQAJgIAPAAQAKAAAIAEQAJADAGAGIgFALQgNgLgPAAQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAHQgKAIgRAAQgWAAgNgMg");
	this.shape_334.setTransform(212.5,-112.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AAwBBIgOgiIhDAAIgOAiIgPAAIA4iBIANAAIA5CBgAgbATIA3AAIgchBg");
	this.shape_335.setTransform(190.7,-114.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_336.setTransform(-4.4,-114.3);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgRAqQgJgGgGgLQgFgKgBgOQABgNAFgLQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAGAGIgFALQgHgGgGgCQgHgDgHAAQgNAAgIAKQgIAIAAARQAAAQAIAJQAIAJANAAQAHAAAHgCQAGgDAHgFIAFALQgGAFgJADQgJAEgKAAQgMgBgKgFg");
	this.shape_337.setTransform(-11.8,-112.9);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_338.setTransform(-21.4,-112.9);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgPA/QgIgFgFgIIAAARIgOAAIAAiFIAOAAIAAA6QAFgJAIgEQAHgGALAAQAMAAAJAHQAJAFAFALQAGAKgBAOQABAOgGALQgFALgJAGQgJAFgMABQgLgBgHgEgAgUgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAIgKQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_339.setTransform(-35.9,-114.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAIQgGAIAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAIQgHAIAAANIAAA0IgOAAIAAhBQAAgOgCgMIAOAAIABARQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_340.setTransform(-264.2,-113);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgWAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALAAANQAAAPgGAKQgFALgKAGQgKAFgNABQgMgBgKgFgAgUgZQgIAKABAPQgBASAIAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_341.setTransform(-277.3,-112.9);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAIABIAAANQgEgBgGAAQgNAAgGAIQgGAJAAALIAAA0g");
	this.shape_342.setTransform(-285.3,-113);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAMIhAAAIAAAuIA8AAIAAAMIg8AAIAAA7g");
	this.shape_343.setTransform(-293.8,-114.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:-55}},{t:this.shape_215,p:{x:-44.1}},{t:this.shape_214},{t:this.shape_213,p:{x:-26.8}},{t:this.shape_212,p:{x:-18.5}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208,p:{x:203.4}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204,p:{x:249.4}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189,p:{x:-110.6,y:-64.7}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185,p:{x:-61.1}},{t:this.shape_184},{t:this.shape_183,p:{x:-35.2}},{t:this.shape_182},{t:this.shape_181,p:{x:-14.4}},{t:this.shape_180,p:{x:-3.3}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:66.7}},{t:this.shape_173},{t:this.shape_172,p:{x:81.9}},{t:this.shape_171,p:{x:92.8}},{t:this.shape_170,p:{x:103.8}},{t:this.shape_169,p:{x:111.4,y:-64.5}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164,p:{x:-174.1}},{t:this.shape_163,p:{x:-163.5}},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:-324.1,y:36.1}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:-341.9,y:86.4}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:-146.2,y:90.2}},{t:this.shape_90,p:{x:-138.2,y:86.4}},{t:this.shape_89},{t:this.shape_88,p:{x:-115.2}},{t:this.shape_87},{t:this.shape_86,p:{x:-100.6,y:86.4}},{t:this.shape_85},{t:this.shape_84,p:{x:-82.4,y:86.4}},{t:this.shape_83},{t:this.shape_82,p:{x:-67.4,y:86.4}},{t:this.shape_81,p:{x:-63.2,y:86.4}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-101.3,y:136.7}},{t:this.shape_60,p:{x:-93.6,y:140.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:-45.2}},{t:this.shape_55,p:{x:-37.5,y:136.7}},{t:this.shape_54},{t:this.shape_53,p:{x:-8.9}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:21.7}},{t:this.shape_49,p:{x:32.1}},{t:this.shape_48,p:{x:39.2,y:136.7}},{t:this.shape_47,p:{x:46.5}},{t:this.shape_46,p:{x:57.3}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_216,p:{x:-57.9}},{t:this.shape_215,p:{x:-47}},{t:this.shape_339},{t:this.shape_213,p:{x:-29.7}},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_204,p:{x:202.6}},{t:this.shape_334},{t:this.shape_208,p:{x:225}},{t:this.shape_212,p:{x:237.9}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_181,p:{x:-127.2}},{t:this.shape_328},{t:this.shape_185,p:{x:-106.7}},{t:this.shape_327},{t:this.shape_326},{t:this.shape_180,p:{x:-65.5}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_174,p:{x:-10.7}},{t:this.shape_322},{t:this.shape_172,p:{x:4.4}},{t:this.shape_171,p:{x:15.4}},{t:this.shape_170,p:{x:26.3}},{t:this.shape_81,p:{x:33.9,y:-64.5}},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_141,p:{x:-83.9,y:-14.2}},{t:this.shape_313},{t:this.shape_91,p:{x:-66,y:-10.4}},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_98,p:{x:-36.2,y:-14.2}},{t:this.shape_163,p:{x:-29.1}},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_90,p:{x:-152.2,y:36.1}},{t:this.shape_189,p:{x:-148,y:35.9}},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_169,p:{x:14.2,y:36.1}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_88,p:{x:-119.3}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_56,p:{x:-82.6}},{t:this.shape_86,p:{x:-74.8,y:136.7}},{t:this.shape_278},{t:this.shape_53,p:{x:-46.3}},{t:this.shape_277},{t:this.shape_276},{t:this.shape_50,p:{x:-15.7}},{t:this.shape_49,p:{x:-5.3}},{t:this.shape_84,p:{x:1.9,y:136.7}},{t:this.shape_47,p:{x:9.1}},{t:this.shape_46,p:{x:19.9}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_203},{t:this.shape_183,p:{x:-342.1}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_164,p:{x:-351.1}},{t:this.shape_82,p:{x:-343.3,y:-14.2}},{t:this.shape_166},{t:this.shape_61,p:{x:-332.5,y:-14.2}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_55,p:{x:-324.1,y:36.1}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_60,p:{x:-294.9,y:39.9}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_99},{t:this.shape_48,p:{x:-341.9,y:86.4}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).wait(1));

	// Layer 2
	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#F0E3F0").s().p("AYtTLIAAm6IbfAAIAAG6gA4ETLIAAm6MAvzAAAIAAG6gEg0LATLIAAm6IbWAAIAAG6gAYtLUIAAm6IbfAAIAAG6gA4ELUIAAm6MAvzAAAIAAG6gEg0LALUIAAm6IbWAAIAAG6gAYtDdIAAm5IbfAAIAAG5gA4EDdIAAm5MAvzAAAIAAG5gEg0LADdIAAm5IbWAAIAAG5gAYtkZIAAm7IbfAAIAAG7gA4EkZIAAm7MAvzAAAIAAG7gEg0LgEZIAAm7IbWAAIAAG7gAYtsQIAAm7IbfAAIAAG7gA4EsQIAAm7MAvzAAAIAAG7gEg0LgMQIAAm7IbWAAIAAG7g");
	this.shape_344.setTransform(-31.2,35.2);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#349FA3").s().p("AYtDeIAAm7IbfAAIAAG7gA4EDeIAAm7MAvzAAAIAAG7gEg0LADeIAAm7IbWAAIAAG7g");
	this.shape_345.setTransform(-31.2,-115.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_345},{t:this.shape_344}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.2,-137.8,668,295.8);


(lib.soklanset1copy = function(mode,startPosition,loop) {
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape.setTransform(278.7,138.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_1.setTransform(265.8,138.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B60000").s().p("AgVA6QgIgFgGgLQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgJgGgAgSgFQgIAIAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_2.setTransform(255.5,136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_3.setTransform(245.3,138.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_4.setTransform(235.2,136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_5.setTransform(190.5,138.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_6.setTransform(182,136.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA1QAAALAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAHgHAEQgHAFgJAAQgPAAgIgJg");
	this.shape_7.setTransform(171.9,138.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_8.setTransform(161.4,136.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAIAAAMIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAIAAAMIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_9.setTransform(278.7,88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgFALAAQAJAAAIAEQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMgBgJgFgAgSgXQgHAIAAAQQgBAPAIAJQAGAIANAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_10.setTransform(265.8,88.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgOAEgJQAFgKAJgFQAJgFALAAQAJAAAHAEQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgJgFgAgSgFQgIAIAAAQQAAAPAIAKQAHAIALAAQANAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_11.setTransform(255.5,86.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgFAMAAQAJAAAHAEQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAQQAAAPAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_12.setTransform(245.3,88.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_13.setTransform(235.2,86.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgFAMAAQAJAAAHAEQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAQQAAAPAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_14.setTransform(190.5,88.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006633").s().p("AAUA/IgsgpIAAApIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_15.setTransform(182,86.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA0QAAAMAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAIgHADQgHAFgJAAQgPAAgIgJg");
	this.shape_16.setTransform(171.9,88.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_17.setTransform(161.4,86.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLAAgGAHQgGAIAAAMIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLAAgGAHQgHAIAAAMIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgFQAHgEAKAAQAKAAAHAEQAFAEADAIQAEgHAIgFQAHgEAKAAQAdAAAAAiIAAA1g");
	this.shape_18.setTransform(278.7,37.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B60000").s().p("AgWAnQgIgGgEgJQgFgKgBgOQABgMAFgKQAEgKAJgGQAJgFALgBQAJABAIAEQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMgBgJgFgAgSgXQgHAIAAAPQgBAQAIAJQAGAIANAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_19.setTransform(265.8,37.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgOAEgJQAFgJAJgGQAJgFALgBQAJABAHAEQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgJgFgAgSgFQgIAIAAAQQAAAQAIAJQAHAIALAAQANAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_20.setTransform(255.5,35.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B60000").s().p("AgWAnQgIgGgEgJQgGgKAAgOQAAgMAGgKQAEgKAJgGQAIgFAMgBQAJABAHAEQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAPQAAAQAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_21.setTransform(245.3,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_22.setTransform(235.2,36);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006633").s().p("AgWAnQgIgGgEgJQgGgKAAgOQAAgMAGgKQAEgKAJgGQAIgFAMgBQAJABAHAEQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAPQAAAQAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_23.setTransform(190.5,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006633").s().p("AAUA/IgsgpIAAApIgNAAIAAh9IANAAIAABOIAogmIASAAIgrAoIAvAtg");
	this.shape_24.setTransform(182,35.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA0QAAAMAFAFQAFAGAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgQQgFAJgHADQgHAFgJAAQgPAAgIgJg");
	this.shape_25.setTransform(171.9,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_26.setTransform(161.4,36);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJAAQgLAAgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJAAQgLAAgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_27.setTransform(278.7,-12.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B60000").s().p("AgWAnQgIgFgEgLQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgPIANAAIAABUIgNAAIAAgPQgEAIgHAEQgIAEgJABQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_28.setTransform(265.8,-12.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg3IAPAAIAAB9IgOAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgJgGgAgSgEQgIAHAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_29.setTransform(255.5,-14.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B60000").s().p("AgWAnQgIgFgEgLQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgPIAOAAIAABUIgOAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_30.setTransform(245.3,-12.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_31.setTransform(235.2,-14.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006633").s().p("AgWAnQgIgFgEgLQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgPIANAAIAABUIgNAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_32.setTransform(190.5,-12.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_33.setTransform(182,-14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg0IANAAIAAA0QAAALAFAGQAFAFAKAAQAKAAAHgIQAHgHAAgMIAAgvIAOAAIAABUIgNAAIAAgOQgFAHgHAEQgHAEgJABQgPAAgIgJg");
	this.shape_34.setTransform(171.9,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_35.setTransform(161.4,-14.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_36.setTransform(278.7,-62.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_37.setTransform(265.8,-62.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B60000").s().p("AgVA6QgIgFgGgLQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgJgGgAgSgFQgIAIAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_38.setTransform(255.5,-64.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_39.setTransform(245.3,-62.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_40.setTransform(235.2,-64.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_41.setTransform(190.5,-62.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_42.setTransform(182,-64.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA1QAAALAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAHgHAEQgHAFgJAAQgPAAgIgJg");
	this.shape_43.setTransform(171.9,-62.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_44.setTransform(161.4,-64.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgJBBIAAgTIASAAIAAATgAgDAfIgFhfIARAAIgEBfg");
	this.shape_45.setTransform(67,136.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAHQgIAIAAAOIAAAzIgPAAIAAhBQAAgOgBgMIAOAAIABAQQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_46.setTransform(59.4,138.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgVAqQgLgGgFgKQgGgLABgPQgBgNAGgLQAFgLALgGQAJgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgJgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_47.setTransform(49,138.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_48.setTransform(38,136.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_49.setTransform(30.6,136.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgMQAGgKAKgHQAKgFALAAQASAAALALQAKAMAAAWIAAABIhCAAQAAASAIAJQAIAJAOAAQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_50.setTransform(23.5,138.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgFgHQgFgFgMAAQgLAAgIAHQgHAHAAAOIAAA0IgQAAIAAiFIAQAAIAAA5QAEgIAIgEQAIgFAJAAQAiAAgBAjIAAA6g");
	this.shape_51.setTransform(13.3,136.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgvAyIAGgLQAJAHAKAEQAKAEANgBQAPAAAJgFQAIgHAAgKQAAgHgEgEQgEgEgHgDIgRgFQgOgDgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgJQAGgIALgEQAKgGAOABQANAAAMAEQALAEAIAIIgFALQgKgHgJgEQgJgEgLAAQgPAAgIAHQgJAGAAALQAAAKAIAGQAHAEAPAEQARAEAJADQAKADAGAHQAGAGAAAMQAAALgFAIQgGAIgLAFQgLAEgOABQgeAAgSgRg");
	this.shape_52.setTransform(2.2,136.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgpIATAAIgtArIAyAwg");
	this.shape_53.setTransform(-12.2,136.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_54.setTransform(-20.3,138.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_55.setTransform(-30,138.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAwBBIAAhfIgqBfIgKAAIgrhfIAABfIgOAAIAAiBIANAAIAwBvIAxhvIAMAAIAACBg");
	this.shape_56.setTransform(-42.9,136.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_57.setTransform(-61.2,138.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_58.setTransform(-72.2,136.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_59.setTransform(-83.1,138.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_60.setTransform(-93.6,140.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_61.setTransform(-101.3,136.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_62.setTransform(-106.3,138.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_63.setTransform(-116,138.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_64.setTransform(-126.9,136.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_65.setTransform(-142.1,138.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_66.setTransform(-149.4,136.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_67.setTransform(-153.8,136.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgMQAGgKAKgHQAKgFALAAQASAAALALQAKAMAAAWIAAABIhCAAQAAASAIAJQAIAJAOAAQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_68.setTransform(-160.9,138.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAnBBIAAg7IhNAAIAAA7IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_69.setTransform(-172.8,136.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgLAAgHAHQgGAIgBAOIAAAzIgNAAIAAg4QAAgMgFgHQgFgFgKAAQgLAAgHAHQgHAIABAOIAAAzIgQAAIAAhBQAAgOgBgMIAOAAIACAQQAEgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAkIAAA5g");
	this.shape_70.setTransform(-230.6,138.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_71.setTransform(-243.8,138.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgRAqQgKgGgFgKQgGgLABgPQgBgMAGgMQAFgKALgHQAKgFANAAQAJgBAJAEQAIADAFAFIgEALQgHgFgHgDQgGgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANAAQAHgBAGgCQAHgCAHgGIAEALQgFAGgJADQgJACgJAAQgMABgLgGg");
	this.shape_72.setTransform(-253.3,138.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgJAJIAAgRIATAAIAAARg");
	this.shape_73.setTransform(-260.1,142.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgmAuIAAgKIA5hFIg3AAIAAgMIBJAAIAAALIg4BEIA6AAIAAAMg");
	this.shape_74.setTransform(-266.9,138.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAcBDIAAg4QgEAIgIAFQgIAEgKAAQgMAAgKgFQgJgGgEgLQgGgJAAgPQAAgOAGgLQAEgLAJgGQAKgGAMAAQAKAAAIAFQAJAFADAKIACgRIAOAAQgBALAAAOIAABpgAgUgsQgIAJAAARQAAARAHAIQAIAJANAAQAOAAAGgJQAIgIAAgRQAAgRgIgJQgGgJgOAAQgMAAgIAJg");
	this.shape_75.setTransform(-277.3,140.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_76.setTransform(-290.5,138.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgmBFQgSgJgKgSQgJgSAAgXQAAgXAKgSQAKgTASgJQASgKAVAAQAXgBARAKQARAKAJAPQAIAQAAARQAAARgFAMQgFALgJAFQgIAGgKAAQgKAAgFgFQgGgEAAgIIgBAAQgEAIgHAEQgGAFgKAAQgMAAgHgJQgIgIAAgQQAAgLAFgLQAFgLAJgGQAJgIAKABQAJAAAGAEQAHAEACAHIACgOIAMAAIgJAyIAAAGQAAAHADACQACADAGAAQAGAAAFgFQAFgEAEgIQAEgKAAgOQAAgPgHgNQgHgMgOgIQgPgIgUAAQgSAAgPAIQgPAJgJAPQgIAQAAAUQAAAVAIAOQAIAQAPAIQAPAIATAAQAPAAAMgEQALgEAGgJIAQAAQgIANgPAIQgQAHgVAAQgXABgRgLgAgMgYQgGAGgDAIQgEAIAAAJQAAALAFAGQAFAGAIAAQAIAAAHgGQAHgFADgJQAEgJAAgJQAAgLgFgEQgGgGgIAAQgIAAgHAFg");
	this.shape_77.setTransform(-307,138.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAbBDIAAg4QgEAIgHAFQgJAEgJAAQgNAAgJgFQgIgGgFgLQgGgJAAgPQAAgOAGgLQAFgLAIgGQAKgGAMAAQAKAAAIAFQAJAFADAKIADgRIANAAQgCALABAOIAABpgAgUgsQgIAJAAARQAAARAIAIQAHAJANAAQAOAAAGgJQAIgIAAgRQAAgRgIgJQgGgJgOAAQgMAAgIAJg");
	this.shape_78.setTransform(-321.1,140.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAcBDIAAg4QgFAIgIAFQgIAEgJAAQgNAAgIgFQgJgGgGgLQgFgJAAgPQAAgOAFgLQAGgLAJgGQAJgGAMAAQAKAAAIAFQAIAFAFAKIACgRIANAAQgCALAAAOIAABpgAgUgsQgIAJAAARQAAARAHAIQAIAJANAAQANAAAIgJQAHgIAAgRQAAgRgHgJQgIgJgNAAQgNAAgHAJg");
	this.shape_79.setTransform(-332.1,140.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgKIADgIIgnhaIAQAAIAeBLIAghLIAOAAIgqBkQgGAPgKAHQgLAIgPACg");
	this.shape_80.setTransform(-342.2,140.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAdAuIgdgkIgcAkIgSAAIAmguIgkgtIASAAIAaAiIAbgiIASAAIgkAtIAmAug");
	this.shape_81.setTransform(-351.9,138.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgIBBIAAgTIASAAIAAATgAgEAfIgEhfIASAAIgGBfg");
	this.shape_82.setTransform(9.1,86.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_83.setTransform(1.2,88.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBAOQgEgCgGAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_84.setTransform(-6.6,88.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_85.setTransform(-15.5,88.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_86.setTransform(-23.8,86.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgFgFgKAAQgMAAgIAIQgIAGABAOIAAA0IgPAAIAAiFIAPAAIAAA5QAEgIAIgEQAIgFAJAAQAhAAABAjIAAA6g");
	this.shape_87.setTransform(-32.1,86.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_88.setTransform(-43.3,88.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgTBUIAAgNIAJACQAOAAAAgTIAAhjIAPAAIAABlQAAAPgHAHQgIAHgLAAIgMgBgAAChEIAAgQIASAAIAAAQg");
	this.shape_89.setTransform(-51.7,88.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_90.setTransform(-57.7,88.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAJQAAAMgJAIQgKAGgRAAQgWAAgNgLg");
	this.shape_91.setTransform(-67.3,88.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAIQgHAHAAAOIAAAzIgNAAIAAg4QgBgMgEgHQgFgFgJAAQgMAAgHAIQgGAHAAAOIAAAzIgQAAIAAhBQABgOgCgLIAPAAIABAPQADgIAIgFQAHgFALAAQAKAAAHAFQAGAEAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_92.setTransform(-84.6,88.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_93.setTransform(-98.3,88.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_94.setTransform(-105.6,86.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_95.setTransform(-113.6,88.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAJQAAAMgJAIQgKAGgRAAQgWAAgNgLg");
	this.shape_96.setTransform(-123.3,88.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgIAOQAIgHAAgHIgJAAIAAgTIASAAIAAANQAAAHgCAHQgDAGgFAGg");
	this.shape_97.setTransform(-134.7,93);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgVAqQgKgGgGgKQgGgLAAgPQAAgNAGgLQAGgLAKgGQAJgFAMAAQANAAAKAFQAKAGAFALQAFALAAANQAAAPgFALQgFAKgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJgBAQQABARAHAKQAIAJAMgBQAOABAHgJQAIgKgBgRQABgQgIgJQgIgJgNAAQgMAAgIAJg");
	this.shape_98.setTransform(-142,88.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_99.setTransform(-149.4,86.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgHBDIAAiFIAOAAIAACFg");
	this.shape_100.setTransform(-153.7,86.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_101.setTransform(-160.9,88.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAnBBIAAg8IhNAAIAAA8IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_102.setTransform(-172.8,86.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_103.setTransform(-285.4,86.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAIQgHAHAAAOIAAAzIgNAAIAAg4QgBgMgEgHQgFgFgJAAQgMAAgHAIQgGAHAAAOIAAAzIgQAAIAAhBQAAgOgBgLIAPAAIABAPQADgIAIgFQAHgFALAAQAKAAAHAFQAGAEAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_104.setTransform(-295.6,88.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgmAuIAAgKIA5hFIg3AAIAAgMIBJAAIAAALIg4BEIA6AAIAAAMg");
	this.shape_105.setTransform(-308.3,88.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgPAAIA4iBIAMAAIA6CBgAgbATIA4AAIgdhCg");
	this.shape_106.setTransform(-319.7,86.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgIAJIAAgSIASAAIAAASg");
	this.shape_107.setTransform(-333.3,92);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAIQgIAHAAAOIAAAzIgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_108.setTransform(-340.8,88.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgoBBIAAiBIBRAAIAAANIhCAAIAAAtIA+AAIAAALIg+AAIAAAvIBCAAIAAANg");
	this.shape_109.setTransform(-351.1,86.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_110.setTransform(90.2,37.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_111.setTransform(79.1,38);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_112.setTransform(71.8,36.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAJQgGAIAAALIAAA0g");
	this.shape_113.setTransform(66.9,37.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_114.setTransform(60.9,36.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMABQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_115.setTransform(52.9,36);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_116.setTransform(42.3,37.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_117.setTransform(32.1,38);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRAAQgWABgNgMg");
	this.shape_118.setTransform(22.6,38);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgGAAQgNAAgGAJQgGAIAAALIAAA0g");
	this.shape_119.setTransform(15.4,37.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_120.setTransform(6.5,38);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AguBBIAAiBIAzAAQAUAAALAKQALAKAAAQQAAASgLAJQgMAJgTAAIgkAAIAAA5gAgfgEIAiAAQAPABAHgHQAHgGAAgMQAAgLgHgHQgHgFgPAAIgiAAg");
	this.shape_121.setTransform(-4,36.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_122.setTransform(-20.5,37.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_123.setTransform(-30.7,38);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgTBUIAAgNIAJACQAOAAAAgTIAAhjIAPAAIAABlQAAAPgHAHQgIAHgLAAIgMgBgAAChEIAAgQIASAAIAAAQg");
	this.shape_124.setTransform(-39,38.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgoBBIAAiBIBRAAIAAANIhCAAIAAAtIA/AAIAAALIg/AAIAAAvIBCAAIAAANg");
	this.shape_125.setTransform(-45,36.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_126.setTransform(-61.2,38);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMABQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_127.setTransform(-72.2,36);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_128.setTransform(-83.1,38);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_129.setTransform(-93.6,39.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_130.setTransform(-101.4,36.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgGAJQgGAIAAALIAAA0g");
	this.shape_131.setTransform(-106.3,37.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_132.setTransform(-116,38);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMABQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_133.setTransform(-126.9,36);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMABQANgBAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAJQAHAKANgBQAOABAHgKQAIgJAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_134.setTransform(-142.1,38);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_135.setTransform(-149.4,35.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_136.setTransform(-153.8,35.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_137.setTransform(-160.9,38);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAnBBIAAg8IhNAAIAAA8IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_138.setTransform(-172.9,36.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMgBgGAJQgHAHAAANIAAA0IgNAAIAAg4QAAgMgFgHQgFgFgJAAQgMgBgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAPQAEgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAkIAAA5g");
	this.shape_139.setTransform(-219.2,37.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMABQANgBAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJgBAQQABARAHAJQAIAKAMgBQAOABAHgKQAIgJgBgRQABgQgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_140.setTransform(-232.4,38);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgQAqQgLgGgFgLQgGgKAAgPQAAgNAGgLQAGgKAKgGQAKgHAMABQAKAAAIADQAJADAFAFIgEALQgHgFgHgCQgGgDgHAAQgNAAgIAJQgIAKAAAPQAAARAIAJQAIAKANgBQAHABAGgDQAHgCAHgGIAEALQgFAFgJADQgJADgKAAQgLABgKgGg");
	this.shape_141.setTransform(-241.9,38);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgIAJIAAgSIASAAIAAASg");
	this.shape_142.setTransform(-248.7,41.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgmAuIAAgKIA5hFIg3AAIAAgMIBJAAIAAALIg4BEIA6AAIAAAMg");
	this.shape_143.setTransform(-255.5,38);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgJIAEgJIgohZIAQAAIAeBKIAghKIAPAAIgrBjQgHAPgJAHQgLAIgPACg");
	this.shape_144.setTransform(-265.1,40.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_145.setTransform(-275.8,39.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgmBFQgSgJgKgSQgJgSAAgXQAAgXAKgTQAKgRASgKQASgLAVABQAXAAARAJQARAKAJAQQAIAPAAARQAAARgFAMQgFALgJAFQgIAGgKgBQgKAAgFgDQgGgFAAgIIgBAAQgEAIgHAFQgGADgKAAQgMAAgHgIQgIgIAAgQQAAgLAFgLQAFgLAJgGQAJgIAKAAQAJABAGAEQAHAEACAHIACgOIAMAAIgJAyIAAAHQAAAFADADQACADAGAAQAGAAAFgFQAFgDAEgJQAEgKAAgOQAAgOgHgOQgHgMgOgIQgPgIgUAAQgSAAgPAIQgPAIgJARQgIAPAAAUQAAAVAIAPQAIAPAPAIQAPAIATAAQAPABAMgFQALgEAGgJIAQAAQgIAOgPAHQgQAIgVgBQgXAAgRgKgAgMgYQgGAGgDAIQgEAJAAAIQAAALAFAGQAFAGAIAAQAIAAAHgGQAHgFADgJQAEgJAAgJQAAgLgFgEQgGgGgIAAQgIAAgHAFg");
	this.shape_146.setTransform(-289.5,37.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_147.setTransform(-303,38);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAbAAIAAAMIgbAAIAAAxQAAAKAEAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_148.setTransform(-311.3,36.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_149.setTransform(-320.1,38);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgGAuIgnhbIAPAAIAeBLIAfhLIAQAAIgoBbg");
	this.shape_150.setTransform(-330.1,38);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_151.setTransform(-337.1,36.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAIABIAAANQgEgBgGAAQgNAAgGAJQgGAIAAALIAAA0g");
	this.shape_152.setTransform(-342,37.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_153.setTransform(-351.2,39.9);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgJBBIAAgTIASAAIAAATgAgDAfIgFhfIARAAIgEBfg");
	this.shape_154.setTransform(-33.2,-14.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgoIATAAIgtArIAyAvg");
	this.shape_155.setTransform(-39.3,-14.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_156.setTransform(-50.5,-12.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_157.setTransform(-63.6,-12.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_158.setTransform(-77.3,-12.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_159.setTransform(-89.4,-14.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgRAqQgKgGgFgLQgGgKABgPQgBgNAGgKQAFgMALgFQAKgHANAAQAJABAJADQAIADAFAFIgEAMQgHgGgHgCQgGgDgHAAQgNAAgIAJQgIAKAAAPQAAARAIAJQAIAKANgBQAHABAGgDQAHgDAHgFIAEALQgFAFgJADQgJADgJABQgMAAgLgGg");
	this.shape_160.setTransform(-95.9,-12.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_161.setTransform(-106,-12.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_162.setTransform(-116.2,-12.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgPA/QgIgFgFgIIAAAQIgOAAIAAiEIAOAAIAAA6QAFgJAIgEQAHgGALAAQAMAAAJAHQAJAFAFALQAGAKgBAOQABAOgGALQgFAKgJAHQgJAGgMAAQgLAAgHgFgAgUgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAIgJQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_163.setTransform(-126.3,-14.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_164.setTransform(-142.7,-12.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgEAFgKIAEgJIgohZIAQAAIAeBKIAghKIAPAAIgrBjQgHAPgJAHQgLAHgPAEg");
	this.shape_165.setTransform(-152.6,-10.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_166.setTransform(-163.3,-12.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgvAyIAGgMQAJAJAKADQAKAEANAAQAPgBAJgGQAIgFAAgMQAAgGgEgEQgEgEgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgEQAKgFAOgBQANAAAMAFQALAEAIAIIgFALQgKgHgJgEQgJgEgLABQgPAAgIAGQgJAHAAAKQAAALAIAEQAHAFAPAEQARAEAJADQAKADAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAEgOAAQgeAAgSgQg");
	this.shape_167.setTransform(-174.1,-14.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgEAFgKIAEgJIgohZIAQAAIAeBKIAghKIAPAAIgrBjQgHAPgJAHQgLAHgPAEg");
	this.shape_168.setTransform(-306.1,-10.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_169.setTransform(-316.3,-12.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_170.setTransform(-327,-12.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_171.setTransform(-338,-12.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("Ag2BBIAAiBIAsAAQAeAAASARQAQARAAAeQAAAfgQARQgSARgeAAgAgnA1IAcAAQAYAAANgOQANgNAAgaQAAgzgyAAIgcAAg");
	this.shape_172.setTransform(-349.7,-14.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgIBBIAAgTIASAAIAAATgAgEAfIgEhfIASAAIgGBfg");
	this.shape_173.setTransform(111.4,-64.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_174.setTransform(103.8,-64.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_175.setTransform(92.8,-64.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_176.setTransform(81.9,-64.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgIAPQAIgJAAgGIgJAAIAAgTIASAAIAAANQABAHgDAGQgDAHgEAGg");
	this.shape_177.setTransform(74.3,-57.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAgfALgSQAMgRAVAAQAWAAAMARQALASAAAfQAAAhgLAQQgMASgWgBQgVABgMgSgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_178.setTransform(66.7,-64.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgWA+QgMgEgIgIIAGgLQASAPASAAQAOAAAHgGQAIgGAAgMQAAgYgdAAIgPAAIAAgMIAMAAQANAAAIgGQAIgHAAgMQAAgKgHgGQgGgFgMAAQgRAAgSAPIgGgMQAIgHALgFQAMgEALAAQARAAALAJQAKAJAAAPQAAALgFAIQgFAJgKADQALADAGAIQAGAIAAAMQAAARgLAKQgMAJgTAAQgMAAgLgEg");
	this.shape_179.setTransform(55.6,-64.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAwBBIAAhgIgqBgIgKAAIgrhfIAABfIgOAAIAAiBIANAAIAwBvIAxhvIAMAAIAACBg");
	this.shape_180.setTransform(42.6,-64.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAjBBIgQgrQgDgIgFgDQgGgDgHABIghAAIAAA4IgPAAIAAiBIAyAAQAWAAALAKQALAJAAARQAAANgHAIQgGAJgNADQAGABAEAEQAEAEADAHIAQAsgAgjgDIAjAAQAdAAAAgYQABgNgIgFQgIgHgOAAIgjAAg");
	this.shape_181.setTransform(28.9,-64.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_182.setTransform(15.3,-64.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_183.setTransform(7.3,-60.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_184.setTransform(-3.3,-62.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_185.setTransform(-14.4,-62.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_186.setTransform(-24.9,-62.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_187.setTransform(-35.2,-62.6);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAJQgGAHAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAJQgHAHAAANIAAA0IgOAAIAAhBQAAgOgCgLIAOAAIABAQQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_188.setTransform(-48.2,-62.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_189.setTransform(-61.1,-62.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMAAgGAJQgGAHgBANIAAA0IgOAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAJQgHAHABANIAAA0IgPAAIAAhBQgBgOgBgLIAOAAIABAQQAFgKAHgEQAHgFALAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_190.setTransform(-74.1,-62.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgGgHgLAAQgLAAgIAJQgHAGAAANIAAA1IgQAAIAAiFIAQAAIAAA5QAEgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_191.setTransform(-92.1,-64.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_192.setTransform(-103.3,-62.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_193.setTransform(-110.6,-64.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_194.setTransform(-117.7,-62.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_195.setTransform(-126,-64);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_196.setTransform(-139.6,-62.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_197.setTransform(-150.6,-64.6);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_198.setTransform(-161.1,-62.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgQAAIA5iBIANAAIA4CBgAgcATIA4AAIgchBg");
	this.shape_199.setTransform(-173.1,-64.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgMAAgGAJQgHAHABANIAAA0IgOAAIAAg4QgBgNgEgFQgEgHgKAAQgMAAgHAJQgGAHgBANIAAA0IgPAAIAAhBQAAgOgBgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_200.setTransform(-257.7,-62.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKAAAPQAAASAIAIQAHAJANAAQAOAAAHgJQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_201.setTransform(-270.9,-62.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgRAqQgKgGgFgLQgGgKABgPQgBgNAGgKQAFgMALgFQAKgHANAAQAJABAJADQAIADAFAFIgEAMQgHgGgHgCQgGgDgHAAQgNAAgIAKQgIAIAAAQQAAARAIAJQAIAJANAAQAHAAAGgCQAHgDAHgFIAEALQgFAFgJADQgJAEgJAAQgMAAgLgGg");
	this.shape_202.setTransform(-280.4,-62.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgIAKIAAgTIASAAIAAATg");
	this.shape_203.setTransform(-287.2,-58.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_204.setTransform(-295.1,-60.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_205.setTransform(-305.7,-62.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_206.setTransform(-313.1,-64.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_207.setTransform(-320.7,-62.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_208.setTransform(-331.4,-62.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_209.setTransform(-338.7,-64.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_210.setTransform(-348.9,-62.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAIQgIAIAAANIAAA0IgPAAIAAhBQAAgOgBgMIAOAAIABARQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_211.setTransform(249.4,-113);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_212.setTransform(238.3,-112.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_213.setTransform(227.9,-111);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_214.setTransform(216.4,-112.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_215.setTransform(203.4,-112.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_216.setTransform(189.7,-112.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgWBRIAAgOIAOACQAIAAAEgFQAEgGAAgMIAAh/IAOAAIAAB/QABATgIAIQgGAJgPAAIgQgBg");
	this.shape_217.setTransform(180.7,-113.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgqIATAAIgtAsIAyAvg");
	this.shape_218.setTransform(-8.1,-115);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_219.setTransform(-18.5,-112.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgTBUIAAgNIAJACQAOAAAAgTIAAhjIAPAAIAABlQAAAPgHAHQgIAHgLAAQgGAAgGgBgAAChEIAAgQIASAAIAAAQg");
	this.shape_220.setTransform(-26.8,-112.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgQA/QgIgFgDgIIAAARIgQAAIAAiFIAQAAIAAA6QADgJAIgEQAJgGAJAAQAMAAAKAHQAJAFAFALQAGAKAAAOQAAAOgGALQgFALgJAGQgKAFgMABQgJgBgJgEgAgUgFQgIAIABARQgBARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgGgJgOAAQgNAAgHAJg");
	this.shape_221.setTransform(-33,-114.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_222.setTransform(-44.1,-112.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLgBQgPABgIAGQgJAHAAALQAAAJAIAFQAHAGAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAJgLAEQgLAFgOgBQgeAAgSgQg");
	this.shape_223.setTransform(-55,-114.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_224.setTransform(-244,-112.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_225.setTransform(-254.9,-114.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_226.setTransform(-265.9,-112.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_227.setTransform(-276.3,-111);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_228.setTransform(-284.1,-114.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAIQgGAJAAALIAAA0g");
	this.shape_229.setTransform(-289,-113);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_230.setTransform(-298.7,-112.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAsAAQAfAAAQARQARARAAAeQAAAfgRARQgQARgfAAgAgmA1IAbAAQAZAAAMgOQANgNAAgaQAAgzgyAAIgbAAg");
	this.shape_231.setTransform(-310.4,-114.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_232.setTransform(275.3,138.4);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAKAEADQAEAEAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_233.setTransform(267.6,137.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_234.setTransform(260.1,138.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_235.setTransform(253.4,136.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_236.setTransform(246.7,138.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_237.setTransform(235.9,136.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_238.setTransform(193,138.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_239.setTransform(183.5,138.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_240.setTransform(173.8,140.2);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_241.setTransform(161.9,136.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_242.setTransform(275.3,88.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B60000").s().p("AgDAyQgHgGAAgOIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAFQAEADAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_243.setTransform(267.6,86.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_244.setTransform(260.1,88.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_245.setTransform(253.4,86.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_246.setTransform(246.7,88.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_247.setTransform(235.9,86.3);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAIAAAMIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_248.setTransform(193,88);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_249.setTransform(183.5,88.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALAAAJAFQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAFgLABQgJgBgIgEQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAIQAHAIALAAQANAAAHgIQAHgIAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_250.setTransform(173.8,89.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_251.setTransform(161.9,86.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_252.setTransform(275.3,37.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#B60000").s().p("AgDAyQgHgGAAgOIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAFQAEADAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_253.setTransform(267.6,36.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_254.setTransform(260.1,37.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_255.setTransform(253.4,35.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_256.setTransform(246.7,37.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_257.setTransform(235.9,36);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLAAgHAHQgIAIAAAMIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgFQAHgEAKAAQAeAAAAAiIAAA1g");
	this.shape_258.setTransform(193,37.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#006633").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_259.setTransform(183.5,37.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgEQAHgGAKAAQALABAJAFQAJAGAEAKQAFAKAAANQAAAOgFAJQgEAJgJAGQgJAFgLABQgJgBgIgEQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAIQAHAIALAAQANAAAHgIQAHgIAAgQQAAgQgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_260.setTransform(173.8,39.6);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_261.setTransform(161.9,36);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_262.setTransform(275.3,-12.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAKAEADQAEAEAHAAIAJgBIAAAMQgFABgHAAQgMAAgGgHg");
	this.shape_263.setTransform(267.6,-13.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_264.setTransform(260.1,-12.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_265.setTransform(253.4,-14.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_266.setTransform(246.7,-12.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_267.setTransform(235.9,-14.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKAAQgLAAgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_268.setTransform(193,-12.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_269.setTransform(183.5,-12.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgLIANAAIABAQQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEALgJAFQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgpQgHAIAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_270.setTransform(173.8,-10.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_271.setTransform(161.9,-14.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_272.setTransform(275.3,-62.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAEQAEAEAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_273.setTransform(267.6,-64);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_274.setTransform(260.1,-62.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_275.setTransform(253.4,-64.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_276.setTransform(246.7,-62.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_277.setTransform(235.9,-64.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_278.setTransform(193,-62.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_279.setTransform(183.5,-62.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_280.setTransform(173.8,-61);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_281.setTransform(161.9,-64.5);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgWAqQgJgGgGgKQgFgLgBgPQABgNAFgLQAGgLAJgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALAAANQAAAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBASAIAJQAIAJAMAAQAOAAAHgJQAHgJAAgSQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_282.setTransform(11.6,138.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgFgFgKAAQgMAAgIAHQgIAHAAAOIAAA0IgOAAIAAiFIAOAAIAAA5QAFgIAIgEQAIgFAKAAQAgAAABAjIAAA6g");
	this.shape_283.setTransform(-24.1,136.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBAOQgEgCgFAAQgOAAgGAJQgGAIAAAMIAAAzg");
	this.shape_284.setTransform(-57.7,138.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAHQgHAIAAAOIAAAzIgNAAIAAg4QAAgMgFgHQgFgFgJAAQgMAAgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQAEgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAkIAAA5g");
	this.shape_285.setTransform(-100.9,138.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgFgLAAgPQAAgNAFgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALAAANQAAAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBASAIAJQAHAJANAAQAOAAAHgJQAHgJABgSQgBgQgHgJQgIgJgNAAQgNAAgHAJg");
	this.shape_286.setTransform(-114.1,138.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQADgJAHgFQAIgFAKAAIAJABIgBAOQgFgCgEAAQgOAAgFAJQgHAIAAAMIAAAzg");
	this.shape_287.setTransform(-122,138.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgPQAAgOAHgHQAGgHANgBQAHABAGABIAAANIgJgBQgIAAgEADQgEAEAAALIAAAMIAXAAIAAALIgXAAIAABPg");
	this.shape_288.setTransform(-129,136.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_289.setTransform(3.1,88.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgVAqQgLgGgFgKQgGgLAAgPQAAgNAGgLQAFgLALgGQAJgFAMAAQANAAAKAFQAKAGAFALQAFALAAANQAAAPgFALQgFAKgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJgBAQQABARAHAKQAIAJAMgBQAOABAHgJQAIgKgBgRQABgQgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_290.setTransform(-7.4,88.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAHgFAEgJIAEgJIgohZIAQAAIAeBKIAfhKIAQAAIgsBjQgGAPgKAHQgKAIgPACg");
	this.shape_291.setTransform(-17.4,90.4);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAKQAHAJANgBQAOABAHgJQAIgKAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_292.setTransform(-32.3,88.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAbAAIAAAMIgbAAIAAAxQAAAKAEAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_293.setTransform(-40.8,86.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAHgFAEgJIADgJIgmhZIAPAAIAeBKIAghKIAOAAIgrBjQgGAPgJAHQgKAIgPACg");
	this.shape_294.setTransform(-53.5,90.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_295.setTransform(-75.1,86.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_296.setTransform(-90.8,86.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgVAqQgKgGgGgKQgFgLgBgPQABgNAFgLQAGgLAKgGQAJgFAMAAQANAAAKAFQAKAGAFALQAFALABANQgBAPgFALQgFAKgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJAAAQQAAARAHAKQAIAJAMgBQAOABAHgJQAHgKAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_297.setTransform(-101.2,88.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAKQAHAJANgBQAOABAHgJQAIgKAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_298.setTransform(-111.6,88.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAZAAIAAAMIgZAAIAAAxQAAAKADAEQAFAEAHAAIAKgBIAAAMQgFACgHAAQgNAAgHgHg");
	this.shape_299.setTransform(24.5,36.6);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_300.setTransform(-4.9,39.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgQAAIA6iBIALAAIA5CBgAgcATIA4AAIgchCg");
	this.shape_301.setTransform(-16.8,36.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgDA2QgHgIgBgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAHAAIALgBIAAAMQgGACgIAAQgMAAgHgHg");
	this.shape_302.setTransform(-41.6,36.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgHAuIgmhbIAPAAIAeBLIAfhLIAPAAIgnBbg");
	this.shape_303.setTransform(-60.4,38);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAJQgHAIAAALIAAA0g");
	this.shape_304.setTransform(-72.3,37.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKAAQgMgBgGAJQgGAHAAANIAAA0IgPAAIAAg4QAAgMgEgHQgEgFgLAAQgLgBgHAJQgGAHgBANIAAA0IgOAAIAAhBQAAgOgCgLIAOAAIABAPQAEgIAIgFQAHgFALAAQALAAAGAFQAHAEADAJQAEgIAIgFQAIgFALAAQAeAAAAAkIAAA5g");
	this.shape_305.setTransform(-100.9,37.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgFgLAAgOQAAgNAFgLQAFgLAKgFQAKgHAMABQANgBAKAHQAKAFAFALQAGALAAANQAAAOgGALQgFALgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBARAIAJQAHAKANgBQAOABAHgKQAHgJABgRQgBgQgHgJQgIgJgNAAQgNAAgHAJg");
	this.shape_306.setTransform(-114.1,38);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQADgJAHgFQAIgFAKAAIAJABIgBANQgFgBgEAAQgOAAgFAJQgHAIAAALIAAA0g");
	this.shape_307.setTransform(-122,37.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAHgIQAGgIANAAQAHAAAGACIAAANIgJgBQgIAAgEADQgEAFAAAKIAAAMIAXAAIAAALIgXAAIAABPg");
	this.shape_308.setTransform(-129,35.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_309.setTransform(-102.3,-12.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAKAMgBQAOABAHgKQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_310.setTransform(-112.7,-12.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAHgEAEgKIAEgJIgohZIAQAAIAeBKIAfhKIAQAAIgsBjQgGAPgKAHQgKAHgPAEg");
	this.shape_311.setTransform(-122.7,-10.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAZAAIAAAMIgZAAIAAAxQAAAKADAEQAFAEAHAAIAKgBIAAAMQgFACgIAAQgMAAgHgHg");
	this.shape_312.setTransform(-145.6,-13.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgFgHgMABQgLgBgIAJQgHAGgBANIAAA1IgPAAIAAiFIAPAAIAAA5QAFgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_313.setTransform(-164.9,-14.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgHBBIAAiBIAPAAIAACBg");
	this.shape_314.setTransform(-177.4,-14.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgHAPQAGgJABgGIgJAAIAAgTIATAAIAAANQAAAHgDAGQgCAHgGAGg");
	this.shape_315.setTransform(-3.1,-57.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAvBBIAAhgIgqBgIgKAAIgqhfIAABfIgNAAIAAiBIAMAAIAwBvIAxhvIANAAIAACBg");
	this.shape_316.setTransform(-34.9,-64.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAjBBIgQgrQgDgIgFgDQgFgDgJABIggAAIAAA4IgPAAIAAiBIAzAAQAUAAAMAKQALAJAAARQAAANgGAIQgHAJgNADQAGABAEAEQAEAEACAHIARAsgAgjgDIAjAAQAeAAAAgYQAAgNgIgFQgHgHgPAAIgjAAg");
	this.shape_317.setTransform(-48.6,-64.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKAAAPQAAASAIAIQAHAJANAAQAOAAAHgJQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_318.setTransform(-75.9,-62.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgGAuIgohbIAQAAIAeBLIAfhLIAQAAIgoBbg");
	this.shape_319.setTransform(-116.5,-62.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgGgFQgEgHgMAAQgLAAgIAJQgIAGAAANIAAA1IgOAAIAAiFIAOAAIAAA5QAFgIAIgFQAIgEAKAAQAgAAAAAkIAAA5g");
	this.shape_320.setTransform(-137.6,-64.7);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_321.setTransform(-153.1,-62.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAJAMAAQAOAAAHgJQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_322.setTransform(-163.5,-62.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgGBBIAAg1Ig0hMIASAAIAoBAIAphAIASAAIgzBMIAAA1g");
	this.shape_323.setTransform(-174.3,-64.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAIQgHAJAAALIAAA0g");
	this.shape_324.setTransform(246.8,-113);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgMAKgHQAJgIAPAAQAKAAAIAEQAJADAGAGIgFALQgNgLgPAAQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAHQgKAIgRAAQgWAAgNgMg");
	this.shape_325.setTransform(212.5,-112.9);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AAwBBIgOgiIhDAAIgOAiIgPAAIA4iBIANAAIA5CBgAgbATIA3AAIgchBg");
	this.shape_326.setTransform(190.7,-114.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_327.setTransform(-4.4,-114.3);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgRAqQgJgGgGgLQgFgKgBgOQABgNAFgLQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAGAGIgFALQgHgGgGgCQgHgDgHAAQgNAAgIAKQgIAIAAARQAAAQAIAJQAIAJANAAQAHAAAHgCQAGgDAHgFIAFALQgGAFgJADQgJAEgKAAQgMgBgKgFg");
	this.shape_328.setTransform(-11.8,-112.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_329.setTransform(-21.4,-112.9);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgPA/QgIgFgFgIIAAARIgOAAIAAiFIAOAAIAAA6QAFgJAIgEQAHgGALAAQAMAAAJAHQAJAFAFALQAGAKgBAOQABAOgGALQgFALgJAGQgJAFgMABQgLgBgHgEgAgUgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAIgKQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_330.setTransform(-35.9,-114.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAIQgGAIAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAIQgHAIAAANIAAA0IgOAAIAAhBQAAgOgCgMIAOAAIABARQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_331.setTransform(-264.2,-113);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgWAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALAAANQAAAPgGAKQgFALgKAGQgKAFgNABQgMgBgKgFgAgUgZQgIAKABAPQgBASAIAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_332.setTransform(-277.3,-112.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAIABIAAANQgEgBgGAAQgNAAgGAIQgGAJAAALIAAA0g");
	this.shape_333.setTransform(-285.3,-113);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAMIhAAAIAAAuIA8AAIAAAMIg8AAIAAA7g");
	this.shape_334.setTransform(-293.8,-114.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223,p:{x:-55}},{t:this.shape_222,p:{x:-44.1}},{t:this.shape_221},{t:this.shape_220,p:{x:-26.8}},{t:this.shape_219,p:{x:-18.5}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215,p:{x:203.4}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211,p:{x:249.4}},{t:this.shape_210,p:{x:-348.9}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205,p:{x:-305.7}},{t:this.shape_204,p:{x:-295.1,y:-60.7}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198,p:{x:-161.1}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187,p:{x:-35.2}},{t:this.shape_186,p:{x:-24.9}},{t:this.shape_185,p:{x:-14.4}},{t:this.shape_184,p:{x:-3.3}},{t:this.shape_183,p:{x:7.3}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179,p:{x:55.6}},{t:this.shape_178,p:{x:66.7}},{t:this.shape_177},{t:this.shape_176,p:{x:81.9}},{t:this.shape_175,p:{x:92.8}},{t:this.shape_174,p:{x:103.8}},{t:this.shape_173,p:{x:111.4,y:-64.5}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:-316.3}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165,p:{x:-152.6}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162,p:{x:-116.2}},{t:this.shape_161,p:{x:-106}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158,p:{x:-77.3}},{t:this.shape_157,p:{x:-63.6,y:-12.3}},{t:this.shape_156,p:{x:-50.5}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130,p:{x:-101.4}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126,p:{x:-61.2}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:-30.7}},{t:this.shape_122},{t:this.shape_121,p:{x:-4}},{t:this.shape_120,p:{x:6.5}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:32.1}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114,p:{x:60.9,y:36.1}},{t:this.shape_113},{t:this.shape_112,p:{x:71.8,y:36.1}},{t:this.shape_111,p:{x:79.1}},{t:this.shape_110,p:{x:90.2}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:-285.4,y:86.4}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{x:-105.6,y:86.2}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-15.5}},{t:this.shape_84},{t:this.shape_83,p:{x:1.2}},{t:this.shape_82,p:{x:9.1,y:86.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-243.8}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:-142.1}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-101.3,y:136.7}},{t:this.shape_60,p:{x:-93.6,y:140.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:-42.9}},{t:this.shape_55,p:{x:-30}},{t:this.shape_54},{t:this.shape_53,p:{x:-12.2}},{t:this.shape_52,p:{x:2.2}},{t:this.shape_51},{t:this.shape_50,p:{x:23.5}},{t:this.shape_49,p:{x:30.6}},{t:this.shape_48,p:{x:38}},{t:this.shape_47},{t:this.shape_46,p:{x:59.4}},{t:this.shape_45,p:{x:67,y:136.7}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_223,p:{x:-57.9}},{t:this.shape_222,p:{x:-47}},{t:this.shape_330},{t:this.shape_220,p:{x:-29.7}},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_211,p:{x:202.6}},{t:this.shape_325},{t:this.shape_215,p:{x:225}},{t:this.shape_219,p:{x:237.9}},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_185,p:{x:-127.2}},{t:this.shape_319},{t:this.shape_187,p:{x:-106.7}},{t:this.shape_210,p:{x:-89.1}},{t:this.shape_318},{t:this.shape_205,p:{x:-65.5}},{t:this.shape_317},{t:this.shape_316},{t:this.shape_179,p:{x:-21.9}},{t:this.shape_178,p:{x:-10.7}},{t:this.shape_315},{t:this.shape_176,p:{x:4.4}},{t:this.shape_175,p:{x:15.4}},{t:this.shape_174,p:{x:26.3}},{t:this.shape_45,p:{x:33.9,y:-64.5}},{t:this.shape_314},{t:this.shape_313},{t:this.shape_158,p:{x:-154.4}},{t:this.shape_312},{t:this.shape_162,p:{x:-137.3}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_173,p:{x:-94.8,y:-14.2}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_94,p:{x:-153.8,y:35.9}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_121,p:{x:-81.8}},{t:this.shape_304},{t:this.shape_130,p:{x:-67.4}},{t:this.shape_303},{t:this.shape_126,p:{x:-50.4}},{t:this.shape_302},{t:this.shape_123,p:{x:-33.3}},{t:this.shape_301},{t:this.shape_300},{t:this.shape_120,p:{x:5.8}},{t:this.shape_110,p:{x:16}},{t:this.shape_299},{t:this.shape_102},{t:this.shape_85,p:{x:-160.9}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_204,p:{x:-122.6,y:90.2}},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_83,p:{x:-64.1}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_71,p:{x:-142.1}},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_56,p:{x:-80.3}},{t:this.shape_55,p:{x:-67.4}},{t:this.shape_284},{t:this.shape_53,p:{x:-49.5}},{t:this.shape_52,p:{x:-35.2}},{t:this.shape_283},{t:this.shape_50,p:{x:-13.9}},{t:this.shape_49,p:{x:-6.7}},{t:this.shape_48,p:{x:0.6}},{t:this.shape_282},{t:this.shape_46,p:{x:22.1}},{t:this.shape_82,p:{x:29.6,y:136.7}},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_157,p:{x:-348.9,y:-62.6}},{t:this.shape_114,p:{x:-338.7,y:-64.5}},{t:this.shape_198,p:{x:-331.4}},{t:this.shape_186,p:{x:-320.7}},{t:this.shape_112,p:{x:-313.1,y:-64.5}},{t:this.shape_184,p:{x:-305.7}},{t:this.shape_183,p:{x:-295.1}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_172},{t:this.shape_156,p:{x:-338}},{t:this.shape_169,p:{x:-327}},{t:this.shape_161,p:{x:-316.3}},{t:this.shape_165,p:{x:-306.1}},{t:this.shape_60,p:{x:-351.2,y:39.9}},{t:this.shape_152},{t:this.shape_103,p:{x:-337.1,y:36.1}},{t:this.shape_150},{t:this.shape_111,p:{x:-320.1}},{t:this.shape_148},{t:this.shape_117,p:{x:-303}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_61,p:{x:-285.4,y:86.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_65,p:{x:-243.8}},{t:this.shape_70}]},1).wait(1));

	// Layer 2
	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#F0E3F0").s().p("AYtTLIAAm6IbfAAIAAG6gA4ETLIAAm6MAvzAAAIAAG6gEg0LATLIAAm6IbWAAIAAG6gAYtLUIAAm6IbfAAIAAG6gA4ELUIAAm6MAvzAAAIAAG6gEg0LALUIAAm6IbWAAIAAG6gAYtDdIAAm5IbfAAIAAG5gA4EDdIAAm5MAvzAAAIAAG5gEg0LADdIAAm5IbWAAIAAG5gAYtkZIAAm7IbfAAIAAG7gA4EkZIAAm7MAvzAAAIAAG7gEg0LgEZIAAm7IbWAAIAAG7gAYtsQIAAm7IbfAAIAAG7gA4EsQIAAm7MAvzAAAIAAG7gEg0LgMQIAAm7IbWAAIAAG7g");
	this.shape_335.setTransform(-31.2,35.2);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#349FA3").s().p("AYtDeIAAm7IbfAAIAAG7gA4EDeIAAm7MAvzAAAIAAG7gEg0LADeIAAm7IbWAAIAAG7g");
	this.shape_336.setTransform(-31.2,-115.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_336},{t:this.shape_335}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.2,-137.8,668,295.8);


(lib.soklanset1 = function(mode,startPosition,loop) {
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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape.setTransform(278.7,138.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_1.setTransform(265.8,138.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B60000").s().p("AgVA6QgIgFgGgLQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgJgGgAgSgFQgIAIAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_2.setTransform(255.5,136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_3.setTransform(245.3,138.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_4.setTransform(235.2,136.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_5.setTransform(190.5,138.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_6.setTransform(182,136.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA1QAAALAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAHgHAEQgHAFgJAAQgPAAgIgJg");
	this.shape_7.setTransform(171.9,138.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_8.setTransform(161.4,136.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAIAAAMIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAIAAAMIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_9.setTransform(278.7,88);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgFALAAQAJAAAIAEQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMgBgJgFgAgSgXQgHAIAAAQQgBAPAIAJQAGAIANAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_10.setTransform(265.8,88.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgOAEgJQAFgKAJgFQAJgFALAAQAJAAAHAEQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgJgFgAgSgFQgIAIAAAQQAAAPAIAKQAHAIALAAQANAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_11.setTransform(255.5,86.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgFAMAAQAJAAAHAEQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAQQAAAPAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_12.setTransform(245.3,88.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_13.setTransform(235.2,86.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgFAMAAQAJAAAHAEQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAQQAAAPAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_14.setTransform(190.5,88.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#006633").s().p("AAUA/IgsgpIAAApIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_15.setTransform(182,86.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA0QAAAMAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAIgHADQgHAFgJAAQgPAAgIgJg");
	this.shape_16.setTransform(171.9,88.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_17.setTransform(161.4,86.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLAAgGAHQgGAIAAAMIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLAAgGAHQgHAIAAAMIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgFQAHgEAKAAQAKAAAHAEQAFAEADAIQAEgHAIgFQAHgEAKAAQAdAAAAAiIAAA1g");
	this.shape_18.setTransform(278.7,37.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B60000").s().p("AgWAnQgIgGgEgJQgFgKgBgOQABgMAFgKQAEgKAJgGQAJgFALgBQAJABAIAEQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMgBgJgFgAgSgXQgHAIAAAPQgBAQAIAJQAGAIANAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_19.setTransform(265.8,37.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgOAEgJQAFgJAJgGQAJgFALgBQAJABAHAEQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgJgFgAgSgFQgIAIAAAQQAAAQAIAJQAHAIALAAQANAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_20.setTransform(255.5,35.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B60000").s().p("AgWAnQgIgGgEgJQgGgKAAgOQAAgMAGgKQAEgKAJgGQAIgFAMgBQAJABAHAEQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAPQAAAQAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_21.setTransform(245.3,37.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_22.setTransform(235.2,36);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#006633").s().p("AgWAnQgIgGgEgJQgGgKAAgOQAAgMAGgKQAEgKAJgGQAIgFAMgBQAJABAHAEQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLgBgKgFgAgSgXQgIAIABAPQAAAQAGAJQAIAIAMAAQAMAAAHgIQAHgJAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_23.setTransform(190.5,37.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#006633").s().p("AAUA/IgsgpIAAApIgNAAIAAh9IANAAIAABOIAogmIASAAIgrAoIAvAtg");
	this.shape_24.setTransform(182,35.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA0QAAAMAFAFQAFAGAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgQQgFAJgHADQgHAFgJAAQgPAAgIgJg");
	this.shape_25.setTransform(171.9,37.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_26.setTransform(161.4,36);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJAAQgLAAgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJAAQgLAAgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_27.setTransform(278.7,-12.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B60000").s().p("AgWAnQgIgFgEgLQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgPIANAAIAABUIgNAAIAAgPQgEAIgHAEQgIAEgJABQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_28.setTransform(265.8,-12.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B60000").s().p("AgVA6QgIgGgGgKQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg3IAPAAIAAB9IgOAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgJgGgAgSgEQgIAHAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_29.setTransform(255.5,-14.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B60000").s().p("AgWAnQgIgFgEgLQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgPIAOAAIAABUIgOAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_30.setTransform(245.3,-12.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_31.setTransform(235.2,-14.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#006633").s().p("AgWAnQgIgFgEgLQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgPIANAAIAABUIgNAAIAAgPQgEAIgIAEQgHAEgJABQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgIQgHgJgMAAQgMAAgHAJg");
	this.shape_32.setTransform(190.5,-12.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_33.setTransform(182,-14.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg0IANAAIAAA0QAAALAFAGQAFAFAKAAQAKAAAHgIQAHgHAAgMIAAgvIAOAAIAABUIgNAAIAAgOQgFAHgHAEQgHAEgJABQgPAAgIgJg");
	this.shape_34.setTransform(171.9,-12.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_35.setTransform(161.4,-14.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B60000").s().p("AAxAsIAAg1QAAgMgFgFQgEgGgJABQgLgBgGAIQgGAHAAANIAAAwIgNAAIAAg1QAAgMgEgFQgFgGgJABQgLgBgGAIQgHAHAAANIAAAwIgNAAIAAg9QAAgNgCgLIANAAIACAPQADgIAHgEQAHgFAKAAQAKAAAHAEQAFAEADAIQAEgHAIgEQAHgFAKAAQAdAAAAAiIAAA1g");
	this.shape_36.setTransform(278.7,-62.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgFgJgBgNQABgNAFgKQAEgLAJgFQAJgGALABQAJgBAIAFQAHAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgHAEQgIAFgJAAQgMAAgJgGgAgSgXQgHAIAAAQQgBAPAIAIQAGAJANAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_37.setTransform(265.8,-62.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B60000").s().p("AgVA6QgIgFgGgLQgEgKAAgNQAAgNAEgKQAFgKAJgFQAJgGALABQAJgBAHAFQAIAEADAIIAAg2IAPAAIAAB9IgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgJgGgAgSgFQgIAIAAAQQAAAQAIAIQAHAJALAAQANAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgNAAQgLAAgHAIg");
	this.shape_38.setTransform(255.5,-64.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B60000").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIAOAAIAABWIgOAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_39.setTransform(245.3,-62.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B60000").s().p("AgrA9IAAh5IAvAAQATAAALAJQAKAJAAAQQAAAQgKAJQgLAIgTAAIghAAIAAA2gAgdgDIAgAAQAOAAAGgGQAHgGAAgLQAAgLgHgGQgGgFgOAAIggAAg");
	this.shape_40.setTransform(235.2,-64.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#006633").s().p("AgWAnQgIgGgEgKQgGgJAAgNQAAgNAGgKQAEgLAJgFQAIgGAMABQAJgBAHAFQAIAEAEAJIAAgQIANAAIAABWIgNAAIAAgQQgEAIgIAEQgHAFgJAAQgLAAgKgGgAgSgXQgIAIABAQQAAAPAGAIQAIAJAMAAQAMAAAHgJQAHgIAAgQQAAgPgHgJQgHgIgMAAQgMAAgHAJg");
	this.shape_41.setTransform(190.5,-62.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#006633").s().p("AAUA/IgsgqIAAAqIgNAAIAAh9IANAAIAABPIAognIASAAIgrAoIAvAtg");
	this.shape_42.setTransform(182,-64.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#006633").s().p("AgcAjQgHgIAAgRIAAg1IANAAIAAA1QAAALAFAGQAFAFAKAAQAKAAAHgHQAHgIAAgMIAAgwIAOAAIAABWIgNAAIAAgPQgFAHgHAEQgHAFgJAAQgPAAgIgJg");
	this.shape_43.setTransform(171.9,-62.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#006633").s().p("AgtA9IAAh5IAxAAQASAAALAIQAKAJAAAPQAAAKgGAHQgEAHgJADQAKACAGAIQAGAHgBAMQAAAPgKAJQgKAJgUAAgAgeAxIAiAAQAOAAAHgFQAHgGAAgLQAAgWgcAAIgiAAgAgegGIAfAAQAOAAAHgFQAHgGAAgKQAAgVgcAAIgfAAg");
	this.shape_44.setTransform(161.4,-64.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgIBBIAAgTIASAAIAAATgAgEAfIgEhfIASAAIgGBfg");
	this.shape_45.setTransform(68.5,136.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAHQgIAIAAAOIAAAzIgPAAIAAhBQAAgOgBgMIAOAAIABAQQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_46.setTransform(61,138.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_47.setTransform(47.8,138.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgVAqQgKgGgGgKQgFgLgBgPQABgNAFgLQAGgLAKgGQAJgFAMAAQANAAAKAFQAKAGAFALQAFALABANQgBAPgFALQgFAKgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJAAAQQAAASAHAJQAIAJAMAAQAOAAAHgJQAHgJAAgSQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_48.setTransform(34.7,138.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgFAJQgHAIAAAMIAAAzg");
	this.shape_49.setTransform(26.8,138.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgwBBIAAiBIAzAAQAUAAALAJQALAJAAAQQAAALgFAHQgFAHgKAEQALADAGAHQAHAJAAAMQAAAQgMAKQgLAJgVAAgAghA0IAlAAQAPABAIgGQAHgGAAgLQAAgZgeABIglAAgAghgGIAiAAQAPAAAHgGQAIgGAAgLQAAgWgeAAIgiAAg");
	this.shape_50.setTransform(16.9,136.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_51.setTransform(-0.1,136.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_52.setTransform(-7.4,136.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_53.setTransform(-14.8,138.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAHQgIAIAAAOIAAAzIgPAAIAAhBQAAgOgBgMIAOAAIABAQQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_54.setTransform(-25.4,138.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_55.setTransform(-33.4,138.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAwBBIgOghIhDAAIgOAhIgPAAIA5iBIALAAIA6CBgAgcATIA5AAIgdhCg");
	this.shape_56.setTransform(-44,136.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_57.setTransform(-61.2,138.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_58.setTransform(-72.2,136.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_59.setTransform(-83.1,138.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_60.setTransform(-93.6,140.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_61.setTransform(-101.3,136.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAAOQgFgCgFAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_62.setTransform(-106.3,138.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgMAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANAAQANAAAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_63.setTransform(-116,138.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANAAAHgJQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_64.setTransform(-126.9,136.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_65.setTransform(-142.1,138.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_66.setTransform(-149.4,136.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_67.setTransform(-153.8,136.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgMQAGgKAKgHQAKgFALAAQASAAALALQAKAMAAAWIAAABIhCAAQAAASAIAJQAIAJAOAAQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_68.setTransform(-160.9,138.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAnBBIAAg7IhNAAIAAA7IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_69.setTransform(-172.8,136.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgLAAgHAHQgGAIgBAOIAAAzIgNAAIAAg4QAAgMgFgHQgFgFgKAAQgLAAgHAHQgHAIABAOIAAAzIgQAAIAAhBQAAgOgBgMIAOAAIACAQQAEgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAkIAAA5g");
	this.shape_70.setTransform(-230.6,138.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_71.setTransform(-243.8,138.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgRAqQgKgGgFgKQgGgLABgPQgBgMAGgMQAFgKALgHQAKgFANAAQAJgBAJAEQAIADAFAFIgEALQgHgFgHgDQgGgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANAAQAHgBAGgCQAHgCAHgGIAEALQgFAGgJADQgJACgJAAQgMABgLgGg");
	this.shape_72.setTransform(-253.3,138.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgJAJIAAgRIATAAIAAARg");
	this.shape_73.setTransform(-260.1,142.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgmAuIAAgKIA5hFIg3AAIAAgMIBJAAIAAALIg4BEIA6AAIAAAMg");
	this.shape_74.setTransform(-266.9,138.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAcBDIAAg4QgEAIgIAFQgIAEgKAAQgMAAgKgFQgJgGgEgLQgGgJAAgPQAAgOAGgLQAEgLAJgGQAKgGAMAAQAKAAAIAFQAJAFADAKIACgRIAOAAQgBALAAAOIAABpgAgUgsQgIAJAAARQAAARAHAIQAIAJANAAQAOAAAGgJQAIgIAAgRQAAgRgIgJQgGgJgOAAQgMAAgIAJg");
	this.shape_75.setTransform(-277.3,140.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_76.setTransform(-290.5,138.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgmBFQgSgJgKgSQgJgSAAgXQAAgXAKgSQAKgTASgJQASgKAVAAQAXgBARAKQARAKAJAPQAIAQAAARQAAARgFAMQgFALgJAFQgIAGgKAAQgKAAgFgFQgGgEAAgIIgBAAQgEAIgHAEQgGAFgKAAQgMAAgHgJQgIgIAAgQQAAgLAFgLQAFgLAJgGQAJgIAKABQAJAAAGAEQAHAEACAHIACgOIAMAAIgJAyIAAAGQAAAHADACQACADAGAAQAGAAAFgFQAFgEAEgIQAEgKAAgOQAAgPgHgNQgHgMgOgIQgPgIgUAAQgSAAgPAIQgPAJgJAPQgIAQAAAUQAAAVAIAOQAIAQAPAIQAPAIATAAQAPAAAMgEQALgEAGgJIAQAAQgIANgPAIQgQAHgVAAQgXABgRgLgAgMgYQgGAGgDAIQgEAIAAAJQAAALAFAGQAFAGAIAAQAIAAAHgGQAHgFADgJQAEgJAAgJQAAgLgFgEQgGgGgIAAQgIAAgHAFg");
	this.shape_77.setTransform(-307,138.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAbBDIAAg4QgEAIgHAFQgJAEgJAAQgNAAgJgFQgIgGgFgLQgGgJAAgPQAAgOAGgLQAFgLAIgGQAKgGAMAAQAKAAAIAFQAJAFADAKIADgRIANAAQgCALABAOIAABpgAgUgsQgIAJAAARQAAARAIAIQAHAJANAAQAOAAAGgJQAIgIAAgRQAAgRgIgJQgGgJgOAAQgMAAgIAJg");
	this.shape_78.setTransform(-321.1,140.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAcBDIAAg4QgFAIgIAFQgIAEgJAAQgNAAgIgFQgJgGgGgLQgFgJAAgPQAAgOAFgLQAGgLAJgGQAJgGAMAAQAKAAAIAFQAIAFAFAKIACgRIANAAQgCALAAAOIAABpgAgUgsQgIAJAAARQAAARAHAIQAIAJANAAQANAAAIgJQAHgIAAgRQAAgRgHgJQgIgJgNAAQgNAAgHAJg");
	this.shape_79.setTransform(-332.1,140.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgFAFgKIADgIIgnhaIAQAAIAeBLIAghLIAOAAIgqBkQgGAPgKAHQgLAIgPACg");
	this.shape_80.setTransform(-342.2,140.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAdAuIgdgkIgcAkIgSAAIAmguIgkgtIASAAIAaAiIAbgiIASAAIgkAtIAmAug");
	this.shape_81.setTransform(-351.9,138.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgFgHQgFgFgMAAQgLAAgIAIQgHAGgBAOIAAA0IgPAAIAAiFIAPAAIAAA5QAFgIAIgEQAIgFAJAAQAiAAgBAjIAAA6g");
	this.shape_82.setTransform(-43.4,86.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_83.setTransform(-54.5,88.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBAOQgEgCgGAAQgNAAgGAJQgGAIAAAMIAAAzg");
	this.shape_84.setTransform(-62.4,88.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_85.setTransform(-71.7,88.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAIQgHAHABAOIAAAzIgOAAIAAg4QgBgMgEgHQgEgFgKAAQgMAAgHAIQgGAHgBAOIAAAzIgPAAIAAhBQAAgOgBgLIAPAAIABAPQADgIAIgFQAHgFALAAQAKAAAHAFQAHAEADAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_86.setTransform(-84.9,88.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgDA2QgHgIgBgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAHAAIALgBIAAAMQgGACgIAAQgMAAgHgHg");
	this.shape_87.setTransform(-101,86.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_88.setTransform(-109.4,88.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAJQAAAMgJAIQgKAGgRAAQgWAAgNgLg");
	this.shape_89.setTransform(-119.2,88.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_90.setTransform(-129.4,88.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgoIATAAIgtAqIAyAwg");
	this.shape_91.setTransform(-138.5,86.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_92.setTransform(-150.9,86.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_93.setTransform(-155.3,86.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_94.setTransform(-162.4,88.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgwBBIAAiBIAzAAQAUAAALAJQALAJAAAQQAAAKgFAIQgFAIgKADQALACAGAJQAHAHAAANQAAARgMAJQgLAJgVAAgAghA0IAlAAQAPABAIgGQAHgGAAgLQAAgZgeAAIglAAgAghgGIAiAAQAPAAAHgGQAIgGAAgLQAAgWgeAAIgiAAg");
	this.shape_95.setTransform(-173.3,86.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAbAAIAAAMIgbAAIAAAxQAAAKAEAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_96.setTransform(-249.6,86.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_97.setTransform(-257.7,88.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLAAgIAIQgIAHAAAOIAAAzIgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_98.setTransform(-268,88.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgJAJIAAgSIATAAIAAASg");
	this.shape_99.setTransform(-275.4,92);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_100.setTransform(-280.8,86.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgPQAAgOAIgHQAFgIAOAAQAGABAGABIAAANIgKgBQgHAAgEADQgEAEAAALIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_101.setTransform(-287,86.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_102.setTransform(-292.2,86.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_103.setTransform(-300.2,90.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_104.setTransform(-310.6,90.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgXAqQgJgGgFgKQgFgLAAgPQAAgNAFgLQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAKQAIAJANgBQANABAHgJQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_105.setTransform(-322.1,88.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_106.setTransform(-332.2,88.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgEgFgMAAQgLAAgIAIQgIAGAAAOIAAA0IgOAAIAAiFIAOAAIAAA5QAFgIAIgEQAIgFAKAAQAgAAAAAjIAAA6g");
	this.shape_107.setTransform(-342.5,86.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgQAqQgLgGgFgKQgGgLAAgPQAAgNAGgLQAGgKAKgHQAKgFAMAAQAKgBAIAEQAJADAFAFIgEALQgHgFgHgDQgGgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANgBQAHAAAGgCQAHgCAHgGIAEALQgFAGgJACQgJADgKAAQgLABgKgGg");
	this.shape_108.setTransform(-352.1,88.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgIBBIAAgTIARAAIAAATgAgEAfIgEhfIARAAIgFBfg");
	this.shape_109.setTransform(-48.6,36.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgDA2QgHgIgBgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_110.setTransform(-54.1,36.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_111.setTransform(-62.4,38.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgQAqQgKgGgGgLQgFgKgBgPQABgNAFgLQAGgKAKgGQAKgHAMABQAKAAAIADQAJADAGAFIgFALQgHgFgGgCQgHgDgHAAQgNAAgIAJQgIAKAAAPQAAARAIAJQAIAKANgBQAHABAHgDQAGgCAHgGIAFALQgGAFgJADQgJADgKAAQgMABgJgGg");
	this.shape_112.setTransform(-72,38);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_113.setTransform(-81.6,38);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_114.setTransform(-92.4,39.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_115.setTransform(-103,37.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgGQAKgHALABQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAJQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_116.setTransform(-113.2,38);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_117.setTransform(-123.4,39.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_118.setTransform(-139.7,38);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMABQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgMABgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_119.setTransform(-150.6,36);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_120.setTransform(-161.2,37.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgPAAIA5iBIALAAIA6CBgAgcATIA5AAIgdhCg");
	this.shape_121.setTransform(-173.1,36.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLAAQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAPQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape_122.setTransform(-301.7,37.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgLQAFgKAJgGQAKgHAMABQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAJgIAEQgJAFgJgBQgNABgJgGgAgTgZQgIAKAAAPQAAARAHAJQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_123.setTransform(-312.7,38);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_124.setTransform(-323.4,36.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAfBBIhCg+IAAA+IgPAAIAAiBIAPAAIAAA8IA/g8IATAAIhDA/IBHBCg");
	this.shape_125.setTransform(-338.6,36.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAfBBIhCg+IAAA+IgPAAIAAiBIAPAAIAAA8IA/g8IATAAIhDA/IBHBCg");
	this.shape_126.setTransform(-350.2,36.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgIBBIAAgTIASAAIAAATgAgEAfIgEhfIASAAIgGBfg");
	this.shape_127.setTransform(111.4,-14.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAggALgRQAMgRAVAAQAWAAAMARQALARAAAgQAAAhgLAQQgMARgWAAQgVAAgMgRgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_128.setTransform(103.8,-14.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAggALgRQAMgRAVAAQAWAAAMARQALARAAAgQAAAhgLAQQgMARgWAAQgVAAgMgRgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_129.setTransform(92.8,-14.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAggALgRQAMgRAVAAQAWAAAMARQALARAAAgQAAAhgLAQQgMARgWAAQgVAAgMgRgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_130.setTransform(81.9,-14.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgIAPQAIgJAAgGIgJAAIAAgTIASAAIAAANQABAHgDAHQgDAGgEAGg");
	this.shape_131.setTransform(74.3,-7.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AghAxQgLgQAAghQAAggALgRQAMgRAVAAQAWAAAMARQALARAAAgQAAAhgLAQQgMARgWAAQgVAAgMgRgAgWgoQgHANAAAbQAAAbAHANQAHAOAPAAQAPAAAIgNQAHgOAAgbQAAgbgHgNQgHgNgQABQgPgBgHANg");
	this.shape_132.setTransform(66.7,-14.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgXA9QgLgEgIgHIAFgMQATAPASAAQANAAAIgIQAIgHAAgOQAAgNgIgHQgIgIgMABQgSgBgLAOIgLAAIAAhLIBNAAIAAANIg+AAIAAAvQALgLAQAAQAMAAAJAFQAKAGAEAIQAFAJAAAMQAAAMgFAKQgFAKgKAEQgKAFgNABQgLgBgMgEg");
	this.shape_133.setTransform(56,-14.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAwBBIAAhgIgqBgIgKAAIgrhfIAABfIgOAAIAAiBIANAAIAwBvIAxhvIAMAAIAACBg");
	this.shape_134.setTransform(42.6,-14.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAjBBIgQgrQgDgIgFgDQgGgCgHAAIghAAIAAA4IgPAAIAAiBIAyAAQAWAAALAKQALAJAAARQAAANgHAJQgGAIgNADQAGABAEAEQAEAEADAHIAQAsgAgjgDIAjAAQAdAAAAgYQABgMgIgGQgIgHgOABIgjAAg");
	this.shape_135.setTransform(28.9,-14.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_136.setTransform(15.3,-14.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_137.setTransform(7.3,-10.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_138.setTransform(-3.3,-12.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_139.setTransform(-14.4,-12.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_140.setTransform(-24.9,-12.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_141.setTransform(-35.1,-12.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgLgBgHAJQgGAHAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLABQgLgBgHAJQgHAHAAANIAAA0IgOAAIAAhBQAAgOgCgLIAOAAIABAQQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_142.setTransform(-48.2,-12.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_143.setTransform(-61.1,-12.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgMgBgGAJQgGAHgBANIAAA0IgOAAIAAg4QABgNgFgFQgEgHgLABQgLgBgHAJQgHAHABANIAAA0IgPAAIAAhBQgBgOgBgLIAOAAIABAQQAFgKAHgEQAHgFALAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_144.setTransform(-74.1,-12.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgGgHgLABQgLgBgIAJQgHAGAAANIAAA1IgQAAIAAiFIAQAAIAAA5QAEgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_145.setTransform(-92.1,-14.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_146.setTransform(-103.3,-12.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_147.setTransform(-110.6,-14.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_148.setTransform(-117.7,-12.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_149.setTransform(-126,-13.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_150.setTransform(-139.6,-12.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACEIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_151.setTransform(-150.6,-14.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_152.setTransform(-161.1,-12.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgQAAIA5iBIANAAIA4CBgAgcATIA4AAIgchCg");
	this.shape_153.setTransform(-173.1,-14.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKABQgMgBgGAJQgHAHABANIAAA0IgOAAIAAg4QgBgNgEgFQgEgHgKABQgMgBgHAJQgGAHgBANIAAA0IgPAAIAAhBQAAgOgBgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_154.setTransform(-207.8,-12.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgWAqQgJgGgGgLQgFgLgBgOQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAFALABANQgBAOgFALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgHAKAAAPQAAASAHAIQAIAKAMgBQAOABAHgKQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_155.setTransform(-221,-12.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgRAqQgJgGgGgLQgFgKgBgPQABgNAFgKQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAGAFIgFAMQgHgGgGgCQgHgDgHAAQgNAAgIAJQgIAKAAAPQAAARAIAJQAIAKANgBQAHABAHgDQAGgDAHgFIAFALQgGAFgJADQgJADgKABQgMAAgKgGg");
	this.shape_156.setTransform(-230.5,-12.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgIAJIAAgSIASAAIAAASg");
	this.shape_157.setTransform(-237.3,-8.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_158.setTransform(-241.6,-14.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_159.setTransform(-245.9,-14.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_160.setTransform(-253.8,-12.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgMgBgGAJQgHAHABANIAAA0IgPAAIAAg4QAAgNgEgFQgEgHgKABQgMgBgHAJQgGAHgBANIAAA0IgPAAIAAhBQAAgOgBgLIAPAAIAAAQQAEgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_161.setTransform(-267.1,-12.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AghA6IADgMQAIAFAIACQAIACAIAAQAOAAAGgHQAHgHAAgOIAAgVQgEAIgIAFQgIAFgKAAQgMAAgKgGQgJgFgFgLQgGgJAAgOQAAgNAGgKQAFgLAJgFQAKgGAMAAQAJAAAJAFQAIAEAEAJIAAgQIAPAAIAABaQAAAUgLALQgKAKgVAAQgUAAgPgJgAgUgtQgIAJAAAPQAAAQAIAIQAIAJAMAAQAOAAAHgJQAIgIAAgQQAAgPgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_162.setTransform(-280.8,-10.4);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgmBFQgSgJgKgSQgJgRAAgYQAAgXAKgTQAKgRASgLQASgKAVABQAXAAARAJQARAKAJAQQAIAPAAARQAAARgFAMQgFALgJAGQgIAEgKAAQgKAAgFgDQgGgFAAgIIgBAAQgEAIgHAFQgGADgKAAQgMAAgHgIQgIgIAAgPQAAgMAFgLQAFgLAJgHQAJgHAKAAQAJABAGAEQAHAEACAHIACgOIAMAAIgJAyIAAAHQAAAFADADQACADAGAAQAGAAAFgEQAFgFAEgJQAEgJAAgOQAAgPgHgNQgHgMgOgIQgPgJgUAAQgSAAgPAJQgPAIgJARQgIAPAAAUQAAAVAIAPQAIAPAPAIQAPAJATgBQAPABAMgFQALgEAGgJIAQAAQgIAOgPAHQgQAIgVAAQgXAAgRgLgAgMgYQgGAFgDAJQgEAJAAAIQAAALAFAGQAFAGAIAAQAIAAAHgGQAHgFADgJQAEgJAAgJQAAgLgFgFQgGgFgIAAQgIAAgHAFg");
	this.shape_163.setTransform(-294.6,-12.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgoA3QAMgDAHgFQAGgEAFgKIAEgJIgohZIAQAAIAeBKIAghKIAPAAIgrBjQgHAPgJAHQgLAHgPAEg");
	this.shape_164.setTransform(-307.9,-10.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQADgJAHgFQAIgFAKAAIAJABIgBANQgFgBgEAAQgOAAgFAJQgHAIAAALIAAA0g");
	this.shape_165.setTransform(-315.5,-12.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_166.setTransform(-324.3,-12.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_167.setTransform(-332.6,-13.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_168.setTransform(-339,-13.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKAAAPQAAASAIAIQAHAKANgBQAOABAHgKQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_169.setTransform(-347.3,-12.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_170.setTransform(-354.6,-14.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgQBCIAAgTIARAAIAAATgAgMAgIAAgFQAAgLAFgIQAEgIAGgJIAKgNQACgGAAgHQABgIgGgEQgFgFgJAAQgNAAgNAIIAAgOQAHgDAGgCQAHgCAGAAQAPAAAKAIQAKAIAAANQAAAHgCAGIgGAKIgJALQgIAIgEAHQgDAGgCAKIAAADg");
	this.shape_171.setTransform(-75.6,-64.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAIQgGAJAAALIAAA0g");
	this.shape_172.setTransform(-82.9,-62.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_173.setTransform(-92.6,-62.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgQA/QgHgFgEgIIAAARIgQAAIAAiFIAQAAIAAA6QAEgJAHgEQAJgGAJAAQANAAAJAHQAJAFAFALQAFAKABAOQgBAOgFALQgFAKgJAHQgJAGgNAAQgJAAgJgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgRgIgIQgGgJgOAAQgNAAgHAJg");
	this.shape_174.setTransform(-103,-64.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_175.setTransform(-114.5,-62.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgGgHgLAAQgLAAgIAJQgHAGAAANIAAA1IgQAAIAAiFIAQAAIAAA5QAEgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_176.setTransform(-125,-64.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgpIATAAIgtArIAyAvg");
	this.shape_177.setTransform(-134.3,-64.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_178.setTransform(-150.3,-62.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_179.setTransform(-160.7,-60.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAwBBIgOgiIhDAAIgOAiIgQAAIA5iBIANAAIA4CBgAgcATIA4AAIgchBg");
	this.shape_180.setTransform(-173.1,-64.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_181.setTransform(-264.6,-62.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_182.setTransform(-277.5,-62.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_183.setTransform(-284.5,-64.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgFQAKgEAOgBQANAAAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLAAQgPAAgIAGQgJAHAAALQAAAJAIAFQAHAFAPAEQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAFgOgBQgeAAgSgQg");
	this.shape_184.setTransform(-292.4,-64.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAHgEAEgKIADgJIgmhZIAPAAIAeBKIAghKIAOAAIgrBiQgGAQgJAIQgKAGgPAEg");
	this.shape_185.setTransform(-307.7,-60.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgRAqQgJgGgGgLQgFgKgBgPQABgNAFgKQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAGAFIgFAMQgHgGgGgCQgHgDgHAAQgNAAgIAKQgIAIAAAQQAAARAIAJQAIAJANAAQAHAAAHgCQAGgDAHgFIAFALQgGAFgJADQgJAEgKAAQgMAAgKgGg");
	this.shape_186.setTransform(-316.9,-62.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_187.setTransform(-327,-62.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_188.setTransform(-338,-62.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AAoBBIhNhoIAABoIgOAAIAAiBIALAAIBOBnIAAhnIAOAAIAACBg");
	this.shape_189.setTransform(-350,-64.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAIQgIAIAAANIAAA0IgPAAIAAhBQAAgOgBgMIAOAAIABARQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_190.setTransform(249.4,-113);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_191.setTransform(238.3,-112.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_192.setTransform(227.9,-111);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_193.setTransform(216.4,-112.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_194.setTransform(203.4,-112.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_195.setTransform(189.7,-112.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgWBRIAAgOIAOACQAIAAAEgFQAEgGAAgMIAAh/IAOAAIAAB/QABATgIAIQgGAJgPAAIgQgBg");
	this.shape_196.setTransform(180.7,-113.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgqIATAAIgtAsIAyAvg");
	this.shape_197.setTransform(-8.1,-115);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_198.setTransform(-18.5,-112.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgTBUIAAgNIAJACQAOAAAAgTIAAhjIAPAAIAABlQAAAPgHAHQgIAHgLAAQgGAAgGgBgAAChEIAAgQIASAAIAAAQg");
	this.shape_199.setTransform(-26.8,-112.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgQA/QgIgFgDgIIAAARIgQAAIAAiFIAQAAIAAA6QADgJAIgEQAJgGAJAAQAMAAAKAHQAJAFAFALQAGAKAAAOQAAAOgGALQgFALgJAGQgKAFgMABQgJgBgJgEgAgUgFQgIAIABARQgBARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgGgJgOAAQgNAAgHAJg");
	this.shape_200.setTransform(-33,-114.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_201.setTransform(-44.1,-112.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLgBQgPABgIAGQgJAHAAALQAAAJAIAFQAHAGAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAJgLAEQgLAFgOgBQgeAAgSgQg");
	this.shape_202.setTransform(-55,-114.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_203.setTransform(-244,-112.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_204.setTransform(-254.9,-114.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_205.setTransform(-265.9,-112.9);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_206.setTransform(-276.3,-111);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_207.setTransform(-284.1,-114.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAIQgGAJAAALIAAA0g");
	this.shape_208.setTransform(-289,-113);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_209.setTransform(-298.7,-112.9);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("Ag2BBIAAiBIAsAAQAfAAAQARQARARAAAeQAAAfgRARQgQARgfAAgAgmA1IAbAAQAZAAAMgOQANgNAAgaQAAgzgyAAIgbAAg");
	this.shape_210.setTransform(-310.4,-114.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_211.setTransform(275.3,138.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAKAEADQAEAEAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_212.setTransform(267.6,137.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_213.setTransform(260.1,138.4);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_214.setTransform(253.4,136.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_215.setTransform(246.7,138.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_216.setTransform(235.9,136.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_217.setTransform(193,138.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_218.setTransform(183.5,138.4);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_219.setTransform(173.8,140.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_220.setTransform(161.9,136.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_221.setTransform(275.3,88.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B60000").s().p("AgDAyQgHgGAAgOIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAFQAEADAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_222.setTransform(267.6,86.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_223.setTransform(260.1,88.1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_224.setTransform(253.4,86.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_225.setTransform(246.7,88.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_226.setTransform(235.9,86.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAIAAAMIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_227.setTransform(193,88);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgFALAAQARgBAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_228.setTransform(183.5,88.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALAAAJAFQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAFgLABQgJgBgIgEQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAIQAHAIALAAQANAAAHgIQAHgIAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_229.setTransform(173.8,89.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_230.setTransform(161.9,86.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_231.setTransform(275.3,37.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#B60000").s().p("AgDAyQgHgGAAgOIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAFQAEADAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_232.setTransform(267.6,36.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_233.setTransform(260.1,37.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_234.setTransform(253.4,35.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#B60000").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_235.setTransform(246.7,37.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_236.setTransform(235.9,36);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLAAgHAHQgIAIAAAMIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgFQAHgEAKAAQAeAAAAAiIAAA1g");
	this.shape_237.setTransform(193,37.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#006633").s().p("AgaAhQgMgMAAgVQAAgMAGgKQAFgKAJgGQAJgFALgBQARAAAKALQAKAMAAAUIAAABIg/AAQABARAHAIQAHAIAOAAQAPAAAMgKIAFAKQgGAGgIADQgJADgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_238.setTransform(183.5,37.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgEQAHgGAKAAQALABAJAFQAJAGAEAKQAFAKAAANQAAAOgFAJQgEAJgJAGQgJAFgLABQgJgBgIgEQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAIQAHAIALAAQANAAAHgIQAHgIAAgQQAAgQgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_239.setTransform(173.8,39.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_240.setTransform(161.9,36);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_241.setTransform(275.3,-12.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAKAEADQAEAEAHAAIAJgBIAAAMQgFABgHAAQgMAAgGgHg");
	this.shape_242.setTransform(267.6,-13.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_243.setTransform(260.1,-12.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_244.setTransform(253.4,-14.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_245.setTransform(246.7,-12.5);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_246.setTransform(235.9,-14.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKAAQgLAAgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_247.setTransform(193,-12.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARAAAKALQAKALAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJADgJABQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_248.setTransform(183.5,-12.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgLIANAAIABAQQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEALgJAFQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgpQgHAIAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAJg");
	this.shape_249.setTransform(173.8,-10.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_250.setTransform(161.9,-14.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_251.setTransform(275.3,-62.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#B60000").s().p("AgDAyQgHgHAAgNIAAgwIgRAAIAAgLIARAAIAAgWIANgFIAAAbIAZAAIAAALIgZAAIAAAuQAAAJAEAEQAEAEAHAAIAJgBIAAALQgFACgHAAQgMAAgGgHg");
	this.shape_252.setTransform(267.6,-64);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_253.setTransform(260.1,-62.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#B60000").s().p("AgGA/IAAh9IANAAIAAB9g");
	this.shape_254.setTransform(253.4,-64.7);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#B60000").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_255.setTransform(246.7,-62.8);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#B60000").s().p("AgyA9IAAh5IApAAQAcAAAQAQQAQAQAAAcQAAAdgQAQQgQAQgcAAgAgkAxIAaAAQAWAAAMgNQANgMAAgYQgBgwguAAIgaAAg");
	this.shape_256.setTransform(235.9,-64.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#006633").s().p("AAYAsIAAg1QAAgMgFgFQgFgGgKABQgLgBgHAIQgIAHAAANIAAAwIgNAAIAAg9QAAgNgBgLIAMAAIACAPQAEgIAIgEQAHgFAKAAQAeAAAAAiIAAA1g");
	this.shape_257.setTransform(193,-62.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#006633").s().p("AgaAhQgMgMAAgUQAAgNAGgKQAFgLAJgFQAJgGALABQARgBAKALQAKAMAAATIAAACIg/AAQABAQAHAJQAHAIAOAAQAPAAAMgKIAFAKQgGAFgIADQgJAEgJAAQgUAAgLgMgAgOgaQgHAGgCAMIAxAAQgBgMgGgGQgGgHgLAAQgKAAgGAHg");
	this.shape_258.setTransform(183.5,-62.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#006633").s().p("AgnA/IAAhiQAAgNgBgMIANAAIABARQAEgJAIgFQAHgEAKAAQALgBAJAGQAJAFAEALQAFAKAAAOQAAANgFAIQgEAKgJAGQgJAGgLAAQgJAAgIgFQgHgEgEgIIAAA1gAgSgqQgHAJAAAQQAAAQAHAHQAHAJALAAQANAAAHgJQAHgHAAgPQAAgRgHgIQgHgJgNAAQgLAAgHAIg");
	this.shape_259.setTransform(173.8,-61);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#006633").s().p("AgdA3QgMgIgGgOQgIgOAAgTQAAgSAIgOQAGgOAMgIQANgHAQAAQARAAANAHQAMAIAHAOQAGAOABASQgBATgGAOQgHAOgMAHQgNAIgRAAQgQAAgNgHgAgegkQgKANAAAXQAAAYAKANQALANATAAQATAAALgNQALgNAAgYQAAgXgLgNQgLgNgTAAQgTAAgLANg");
	this.shape_260.setTransform(161.9,-64.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBAOQgEgCgFAAQgOAAgGAJQgGAIAAAMIAAAzg");
	this.shape_261.setTransform(-10.6,138.5);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgHBDIAAiFIAOAAIAACFg");
	this.shape_262.setTransform(-44.8,136.5);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBAOQgEgCgFAAQgOAAgGAJQgGAIAAAMIAAAzg");
	this.shape_263.setTransform(-70.8,138.5);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKAAQgMAAgGAHQgHAIAAAOIAAAzIgNAAIAAg4QAAgMgFgHQgFgFgJAAQgMAAgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQAEgIAHgFQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAkIAAA5g");
	this.shape_264.setTransform(-100.9,138.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgFgLAAgPQAAgNAFgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALAAANQAAAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJABAQQgBASAIAJQAHAJANAAQAOAAAHgJQAHgJABgSQgBgQgHgJQgIgJgNAAQgNAAgHAJg");
	this.shape_265.setTransform(-114.1,138.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQADgJAHgFQAIgFAKAAIAJABIgBAOQgFgCgEAAQgOAAgFAJQgHAIAAAMIAAAzg");
	this.shape_266.setTransform(-122,138.5);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgPQAAgOAHgHQAGgHANgBQAHABAGABIAAANIgJgBQgIAAgEADQgEAEAAALIAAAMIAXAAIAAALIgXAAIAABPg");
	this.shape_267.setTransform(-129,136.5);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAASAIAJQAHAJANAAQAOAAAHgJQAIgJAAgSQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_268.setTransform(-243.8,138.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgWAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgLAKgGQAKgFAMAAQANAAAKAFQAKAGAFALQAGALgBANQABAPgGALQgFAKgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAKQAHAJANgBQAOABAHgJQAIgKAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_269.setTransform(-61.2,88.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgEgFgMAAQgLAAgIAIQgHAGgBAOIAAA0IgPAAIAAiFIAPAAIAAA5QAFgIAIgEQAIgFAKAAQAgAAAAAjIAAA6g");
	this.shape_270.setTransform(-71.7,86.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAJQAAAMgJAIQgKAGgRAAQgWAAgNgLg");
	this.shape_271.setTransform(-81.6,88.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AAZBDIAAg5QAAgLgGgHQgFgFgKAAQgMAAgIAIQgIAGABAOIAAA0IgPAAIAAiFIAPAAIAAA5QAEgIAIgEQAIgFAJAAQAhAAABAjIAAA6g");
	this.shape_272.setTransform(-128,86.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgRAqQgKgGgFgKQgGgLABgPQgBgNAGgLQAFgKALgHQAKgFANAAQAJgBAJAEQAIADAFAFIgEALQgHgFgHgDQgGgCgHAAQgNAAgIAJQgIAKAAAPQAAARAIAKQAIAJANgBQAHAAAGgCQAHgCAHgGIAEALQgFAGgJACQgJADgJAAQgMABgLgGg");
	this.shape_273.setTransform(-137.6,88.3);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAHgFAEgJIAEgJIgohZIAQAAIAeBKIAfhKIAQAAIgsBjQgGAPgKAHQgKAIgPACg");
	this.shape_274.setTransform(-152,90.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgLQAGgKAKgHQAKgFALAAQASgBALAMQAKAMAAAWIAAABIhCAAQAAARAIAKQAIAJAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKAAQgVAAgMgMgAgPgcQgHAHgDAMIA1AAQgBgMgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_275.setTransform(-332.2,88.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAJQgHAIAAALIAAA0g");
	this.shape_276.setTransform(-69,37.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgMAKgIQAJgHAPAAQAKAAAIACQAJAEAGAFIgFALQgNgKgPgBQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRAAQgWABgNgMg");
	this.shape_277.setTransform(-87.5,38);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMABQANgBAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNgBQgMABgKgGgAgUgZQgIAJAAAQQAAARAIAJQAHAKANgBQAOABAHgKQAIgJAAgRQAAgQgIgJQgHgJgOAAQgNAAgHAJg");
	this.shape_278.setTransform(-97.2,38);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgGAAQgNAAgGAJQgGAIAAALIAAA0g");
	this.shape_279.setTransform(-139.8,37.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgEAaIgEgyIARAAIgEAyg");
	this.shape_280.setTransform(-145.8,32.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMABQANgBAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNgBQgMABgJgGgAgUgZQgHAJgBAQQABARAHAJQAIAKAMgBQAOABAHgKQAIgJgBgRQABgQgIgJQgHgJgOAAQgMAAgIAJg");
	this.shape_281.setTransform(-163.5,38);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgGBBIAAg1Ig0hMIASAAIAoBAIAphAIASAAIgzBMIAAA1g");
	this.shape_282.setTransform(-174.3,36.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgJBBIAAgTIASAAIAAATgAgDAfIgFhfIARAAIgEBfg");
	this.shape_283.setTransform(33.9,-14.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgHAPQAGgJABgGIgJAAIAAgTIATAAIAAANQAAAHgDAHQgCAGgGAGg");
	this.shape_284.setTransform(-3.1,-7.6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AAvBBIAAhgIgqBgIgKAAIgqhfIAABfIgNAAIAAiBIAMAAIAwBvIAxhvIANAAIAACBg");
	this.shape_285.setTransform(-34.9,-14.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAjBBIgQgrQgDgIgFgDQgFgCgJAAIggAAIAAA4IgPAAIAAiBIAzAAQAUAAAMAKQALAJAAARQAAANgGAJQgHAIgNADQAGABAEAEQAEAEACAHIARAsgAgjgDIAjAAQAeAAAAgYQAAgMgIgGQgHgHgPABIgjAAg");
	this.shape_286.setTransform(-48.6,-14.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgGAuIgohbIAQAAIAeBLIAfhLIAQAAIgoBbg");
	this.shape_287.setTransform(-116.5,-12.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgGgFQgEgHgMABQgLgBgIAJQgIAGAAANIAAA1IgOAAIAAiFIAOAAIAAA5QAFgIAIgFQAIgEAKAAQAgAAAAAkIAAA5g");
	this.shape_288.setTransform(-137.6,-14.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAKAMgBQAOABAHgKQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_289.setTransform(-163.5,-12.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgGBBIAAg1Ig0hMIASAAIAoBAIAphAIASAAIgzBMIAAA1g");
	this.shape_290.setTransform(-174.3,-14.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKAAAPQAAASAIAIQAHAKANgBQAOABAHgKQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_291.setTransform(-347.3,-12.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgVAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAJAMAAQAOAAAHgJQAIgIgBgSQABgPgIgKQgIgJgNAAQgMAAgIAJg");
	this.shape_292.setTransform(-49.8,-62.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_293.setTransform(-60.8,-64.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_294.setTransform(-76,-62.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLABgOQgBgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgIAKAAAPQAAASAIAIQAHAJANAAQAOAAAHgJQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_295.setTransform(-86.5,-62.6);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgpA3QANgDAHgFQAGgEAFgKIAEgJIgnhZIAPAAIAeBKIAfhKIAQAAIgsBiQgFAQgLAIQgJAGgQAEg");
	this.shape_296.setTransform(-96.5,-60.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAIABIAAANQgEgBgGAAQgNAAgGAIQgGAJAAALIAAA0g");
	this.shape_297.setTransform(-118.8,-62.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgLABgOQgBgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgIAKAAAPQAAASAIAIQAHAJANAAQAOAAAHgJQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_298.setTransform(-143.6,-62.6);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AAZBDIAAg5QAAgMgFgFQgFgHgMAAQgLAAgIAJQgHAGgBANIAAA1IgPAAIAAiFIAPAAIAAA5QAFgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_299.setTransform(-154.1,-64.7);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAlBBIglhqIgkBqIgNAAIgtiBIAPAAIAlBsIAmhsIAKABIAlBrIAmhsIAOAAIgtCBg");
	this.shape_300.setTransform(-169.7,-64.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAaAuIgahHIgZBHIgOAAIgihbIAPAAIAaBJIAbhJIAMAAIAaBJIAbhJIAOAAIgiBbg");
	this.shape_301.setTransform(-264.6,-62.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_302.setTransform(-277.5,-62.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_303.setTransform(-327,-62.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAIQgHAJAAALIAAA0g");
	this.shape_304.setTransform(246.8,-113);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgMAKgHQAJgIAPAAQAKAAAIAEQAJADAGAGIgFALQgNgLgPAAQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAHQgKAIgRAAQgWAAgNgMg");
	this.shape_305.setTransform(212.5,-112.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AAwBBIgOgiIhDAAIgOAiIgPAAIA4iBIANAAIA5CBgAgbATIA3AAIgchBg");
	this.shape_306.setTransform(190.7,-114.8);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_307.setTransform(-4.4,-114.3);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgRAqQgJgGgGgLQgFgKgBgOQABgNAFgLQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAGAGIgFALQgHgGgGgCQgHgDgHAAQgNAAgIAKQgIAIAAARQAAAQAIAJQAIAJANAAQAHAAAHgCQAGgDAHgFIAFALQgGAFgJADQgJAEgKAAQgMgBgKgFg");
	this.shape_308.setTransform(-11.8,-112.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_309.setTransform(-21.4,-112.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgPA/QgIgFgFgIIAAARIgOAAIAAiFIAOAAIAAA6QAFgJAIgEQAHgGALAAQAMAAAJAHQAJAFAFALQAGAKgBAOQABAOgGALQgFALgJAGQgJAFgMABQgLgBgHgEgAgUgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAIgKQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_310.setTransform(-35.9,-114.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAIQgGAIAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAIQgHAIAAANIAAA0IgOAAIAAhBQAAgOgCgMIAOAAIABARQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_311.setTransform(-264.2,-113);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgWAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALAAANQAAAPgGAKQgFALgKAGQgKAFgNABQgMgBgKgFgAgUgZQgIAKABAPQgBASAIAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_312.setTransform(-277.3,-112.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAIABIAAANQgEgBgGAAQgNAAgGAIQgGAJAAALIAAA0g");
	this.shape_313.setTransform(-285.3,-113);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAMIhAAAIAAAuIA8AAIAAAMIg8AAIAAA7g");
	this.shape_314.setTransform(-293.8,-114.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202,p:{x:-55}},{t:this.shape_201,p:{x:-44.1}},{t:this.shape_200},{t:this.shape_199,p:{x:-26.8}},{t:this.shape_198,p:{x:-18.5}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194,p:{x:203.4}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190,p:{x:249.4}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187,p:{x:-327}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182,p:{x:-277.5}},{t:this.shape_181,p:{x:-264.6,y:-62.6}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175,p:{x:-114.5}},{t:this.shape_174},{t:this.shape_173,p:{x:-92.6}},{t:this.shape_172},{t:this.shape_171,p:{x:-75.6}},{t:this.shape_170},{t:this.shape_169,p:{x:-347.3}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158,p:{x:-241.6}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149,p:{x:-126}},{t:this.shape_148},{t:this.shape_147,p:{x:-110.6}},{t:this.shape_146,p:{x:-103.3}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143,p:{x:-61.1}},{t:this.shape_142},{t:this.shape_141,p:{x:-35.1}},{t:this.shape_140},{t:this.shape_139,p:{x:-14.4}},{t:this.shape_138,p:{x:-3.3}},{t:this.shape_137,p:{x:7.3,y:-10.4}},{t:this.shape_136,p:{x:15.3,y:-14.2}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133,p:{x:56}},{t:this.shape_132,p:{x:66.7}},{t:this.shape_131},{t:this.shape_130,p:{x:81.9}},{t:this.shape_129,p:{x:92.8}},{t:this.shape_128,p:{x:103.8}},{t:this.shape_127,p:{x:111.4,y:-14.2}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:-139.7}},{t:this.shape_117},{t:this.shape_116,p:{x:-113.2}},{t:this.shape_115,p:{x:-103}},{t:this.shape_114,p:{x:-92.4,y:39.9}},{t:this.shape_113,p:{x:-81.6}},{t:this.shape_112},{t:this.shape_111,p:{x:-62.4,y:38.1}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-332.2}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:-292.2,y:86.4}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:-257.7}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{x:-162.4}},{t:this.shape_93,p:{x:-155.3,y:86.2}},{t:this.shape_92,p:{x:-150.9,y:86.4}},{t:this.shape_91},{t:this.shape_90,p:{x:-129.4}},{t:this.shape_89,p:{x:-119.2}},{t:this.shape_88,p:{x:-109.4,y:88.4}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-71.7}},{t:this.shape_84},{t:this.shape_83,p:{x:-54.5}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-243.8}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:-142.1}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-101.3,y:136.7}},{t:this.shape_60,p:{x:-93.6,y:140.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:-44}},{t:this.shape_55},{t:this.shape_54,p:{x:-25.4}},{t:this.shape_53,p:{x:-14.8}},{t:this.shape_52},{t:this.shape_51,p:{x:-0.1}},{t:this.shape_50,p:{x:16.9}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:47.8}},{t:this.shape_46,p:{x:61}},{t:this.shape_45,p:{x:68.5}},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_202,p:{x:-57.9}},{t:this.shape_201,p:{x:-47}},{t:this.shape_310},{t:this.shape_199,p:{x:-29.7}},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_190,p:{x:202.6}},{t:this.shape_305},{t:this.shape_194,p:{x:225}},{t:this.shape_198,p:{x:237.9}},{t:this.shape_304},{t:this.shape_189},{t:this.shape_175,p:{x:-338}},{t:this.shape_303},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_136,p:{x:-284.5,y:-64.5}},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_173,p:{x:-128.5}},{t:this.shape_297},{t:this.shape_182,p:{x:-111.1}},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_102,p:{x:-42.3,y:-64.5}},{t:this.shape_187,p:{x:-35}},{t:this.shape_137,p:{x:-24.4,y:-60.7}},{t:this.shape_171,p:{x:-13.9}},{t:this.shape_158,p:{x:-354.6}},{t:this.shape_291},{t:this.shape_168},{t:this.shape_149,p:{x:-332.6}},{t:this.shape_143,p:{x:-324.3}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_114,p:{x:-280.8,y:-10.4}},{t:this.shape_161},{t:this.shape_146,p:{x:-253.8}},{t:this.shape_92,p:{x:-245.9,y:-14.2}},{t:this.shape_147,p:{x:-241.6}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_290},{t:this.shape_289},{t:this.shape_111,p:{x:-153.1,y:-12.2}},{t:this.shape_288},{t:this.shape_139,p:{x:-127.2}},{t:this.shape_287},{t:this.shape_141,p:{x:-106.7}},{t:this.shape_181,p:{x:-89.1,y:-12.3}},{t:this.shape_169,p:{x:-75.9}},{t:this.shape_138,p:{x:-65.4}},{t:this.shape_286},{t:this.shape_285},{t:this.shape_133,p:{x:-21.4}},{t:this.shape_132,p:{x:-10.7}},{t:this.shape_284},{t:this.shape_130,p:{x:4.5}},{t:this.shape_129,p:{x:15.4}},{t:this.shape_128,p:{x:26.3}},{t:this.shape_283},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_115,p:{x:-301.7}},{t:this.shape_282},{t:this.shape_281},{t:this.shape_88,p:{x:-153.1,y:38.1}},{t:this.shape_280},{t:this.shape_279},{t:this.shape_116,p:{x:-132.2}},{t:this.shape_118,p:{x:-117.3}},{t:this.shape_93,p:{x:-104.5,y:35.9}},{t:this.shape_278},{t:this.shape_277},{t:this.shape_113,p:{x:-77.9}},{t:this.shape_276},{t:this.shape_127,p:{x:-64.2,y:36.1}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_275},{t:this.shape_90,p:{x:-322.1}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_61,p:{x:-292.2,y:86.4}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_106,p:{x:-257.7}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_85,p:{x:-162.1}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_97,p:{x:-117.7}},{t:this.shape_83,p:{x:-107.6}},{t:this.shape_60,p:{x:-96.2,y:90.2}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_94,p:{x:-51}},{t:this.shape_89,p:{x:-41.6}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_268},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_71,p:{x:-142.1}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_56,p:{x:-81.3}},{t:this.shape_263},{t:this.shape_54,p:{x:-62.8}},{t:this.shape_65,p:{x:-52.2}},{t:this.shape_262},{t:this.shape_51,p:{x:-37.5}},{t:this.shape_50,p:{x:-20.4}},{t:this.shape_261},{t:this.shape_53,p:{x:-2.7}},{t:this.shape_47,p:{x:10.5}},{t:this.shape_46,p:{x:23.7}},{t:this.shape_45,p:{x:31.2}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211}]},1).wait(1));

	// Layer 2
	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#F0E3F0").s().p("AYtTLIAAm6IbfAAIAAG6gA4ETLIAAm6MAvzAAAIAAG6gEg0LATLIAAm6IbWAAIAAG6gAYtLUIAAm6IbfAAIAAG6gA4ELUIAAm6MAvzAAAIAAG6gEg0LALUIAAm6IbWAAIAAG6gAYtDdIAAm5IbfAAIAAG5gA4EDdIAAm5MAvzAAAIAAG5gEg0LADdIAAm5IbWAAIAAG5gAYtkZIAAm7IbfAAIAAG7gA4EkZIAAm7MAvzAAAIAAG7gEg0LgEZIAAm7IbWAAIAAG7gAYtsQIAAm7IbfAAIAAG7gA4EsQIAAm7MAvzAAAIAAG7gEg0LgMQIAAm7IbWAAIAAG7g");
	this.shape_315.setTransform(-31.2,35.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#349FA3").s().p("AYtDeIAAm7IbfAAIAAG7gA4EDeIAAm7MAvzAAAIAAG7gEg0LADeIAAm7IbWAAIAAG7g");
	this.shape_316.setTransform(-31.2,-115.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_316},{t:this.shape_315}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-365.2,-137.8,668,295.8);


(lib.soalan = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgMgGgHQgFgFgLgBQgLABgIAHQgIAIAAAOIAAAzIgPAAIAAhBQAAgOgBgMIAOAAIABAQQAFgIAIgFQAIgFAKAAQAhAAAAAkIAAA5g");
	this.shape.setTransform(43.2,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_1.setTransform(32.1,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAHgFQAIgFAKAAIAJABIgBAOQgFgCgEAAQgOAAgFAIQgHAJAAAMIAAAzg");
	this.shape_2.setTransform(24.3,23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_3.setTransform(14.6,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKgBQgLABgHAHQgGAIAAAOIAAAzIgPAAIAAg4QABgMgFgHQgEgFgLgBQgLABgHAHQgHAIAAAOIAAAzIgOAAIAAhBQAAgOgCgMIAOAAIABAQQAFgJAHgEQAIgFAKAAQALAAAGAFQAHAEADAJQAEgIAIgFQAIgFAKAAQAfAAAAAkIAAA5g");
	this.shape_4.setTransform(1.3,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_5.setTransform(-12.4,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgEQAFgDAAgHQAAgFgDgEQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgJQAAgNAKgHQAJgIAPABQAKAAAIADQAJADAGAGIgFAKQgNgLgPABQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAJQAAANgJAGQgKAIgRgBQgWAAgNgLg");
	this.shape_6.setTransform(-22.2,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_7.setTransform(-37.2,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKgBQgMABgGAHQgHAIAAAOIAAAzIgNAAIAAg4QgBgMgEgHQgFgFgJgBQgMABgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQADgJAIgEQAHgFALAAQAKAAAHAFQAGAEAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_8.setTransform(-50.4,23.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_9.setTransform(-64.1,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBoIAAhoIAOAAIAACBg");
	this.shape_10.setTransform(-76.1,21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAIAJgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_11.setTransform(423.2,253.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_12.setTransform(414.4,254.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgMgBgGAJQgHAHABANIAAA0IgOAAIAAg4QgBgNgEgFQgEgHgKABQgMgBgHAJQgGAHgBANIAAA0IgPAAIAAhBQAAgOgBgLIAPAAIABAQQADgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_13.setTransform(401.2,254.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_14.setTransform(387.4,254.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_15.setTransform(380.1,252.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_16.setTransform(373,254.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgLAKgIQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_17.setTransform(363.4,254.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgoIATAAIgtArIAyAvg");
	this.shape_18.setTransform(350.2,252.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_19.setTransform(339,254.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAJIAAg6IAPAAIAACEIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_20.setTransform(328.1,252.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_21.setTransform(320.8,252.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_22.setTransform(313,252.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_23.setTransform(252.5,253.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_24.setTransform(243.6,254.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKABQgMgBgGAJQgHAHAAANIAAA0IgNAAIAAg4QgBgNgEgFQgFgHgJABQgMgBgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_25.setTransform(230.4,254.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_26.setTransform(216.7,254.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_27.setTransform(209.3,252.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#99CC00").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_28.setTransform(202.2,254.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#99CC00").s().p("AgvAyIAGgMQAJAJAKADQAKAEANAAQAPgBAJgGQAIgFAAgMQAAgGgEgEQgEgEgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgEQAKgFAOgBQANAAAMAFQALAEAIAIIgFALQgKgHgJgEQgJgEgLABQgPAAgIAGQgJAHAAAKQAAALAIAEQAHAFAPAEQARAEAJADQAKADAGAHQAGAHAAALQAAALgFAIQgGAIgLAFQgLAEgOAAQgeAAgSgQg");
	this.shape_29.setTransform(191.6,252.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAIAJgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_30.setTransform(423.2,206.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_31.setTransform(414.4,208.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgMgBgGAJQgHAHABANIAAA0IgOAAIAAg4QgBgNgEgFQgEgHgKABQgMgBgHAJQgGAHgBANIAAA0IgPAAIAAhBQAAgOgBgLIAPAAIABAQQADgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_32.setTransform(401.2,208.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_33.setTransform(387.4,208.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_34.setTransform(380.1,206.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFF00").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_35.setTransform(373,208.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgMAKgHQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJABgFAEQgFADAAAHQAAAFADAEQADADAIACIAOADQANADAGAGQAGAGAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_36.setTransform(363.4,208.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgpIATAAIgtArIAyAvg");
	this.shape_37.setTransform(350.2,206.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_38.setTransform(339,208.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_39.setTransform(328.1,206.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_40.setTransform(320.8,206.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_41.setTransform(313,206.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_42.setTransform(252.5,206.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_43.setTransform(243.6,208.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKABQgMgBgGAJQgHAHAAANIAAA0IgNAAIAAg4QgBgNgEgFQgFgHgJABQgMgBgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_44.setTransform(230.4,208.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_45.setTransform(216.7,208.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_46.setTransform(209.3,206.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#99CC00").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_47.setTransform(202.2,208.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#99CC00").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgFQAKgEAOgBQANAAAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLAAQgPAAgIAGQgJAHAAALQAAAJAIAFQAHAFAPAEQARAEAJADQAKADAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAFgOgBQgeAAgSgQg");
	this.shape_48.setTransform(191.6,206.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAIAJgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_49.setTransform(423.2,160.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_50.setTransform(414.4,162);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMAAgGAJQgHAHABANIAAA0IgOAAIAAg4QgBgNgEgFQgEgHgKAAQgMAAgHAJQgGAHgBANIAAA0IgPAAIAAhBQAAgOgBgLIAPAAIABAQQADgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_51.setTransform(401.2,162);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_52.setTransform(387.4,162);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_53.setTransform(380.1,160);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_54.setTransform(373,162);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgFQgGgHAAgKQAAgMAKgHQAJgIAPAAQAKAAAIAEQAJADAGAGIgFALQgNgLgPAAQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAIQgKAHgRAAQgWAAgNgMg");
	this.shape_55.setTransform(363.4,162);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgpIATAAIgtArIAyAvg");
	this.shape_56.setTransform(350.2,160);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_57.setTransform(339,162);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFF00").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_58.setTransform(328.1,160);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_59.setTransform(320.8,160.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_60.setTransform(313,160.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_61.setTransform(252.5,160.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_62.setTransform(243.6,162);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgMAAgGAJQgHAHAAANIAAA0IgNAAIAAg4QgBgNgEgFQgFgHgJAAQgMAAgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_63.setTransform(230.4,162);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_64.setTransform(216.7,162);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_65.setTransform(209.3,160);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#99CC00").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_66.setTransform(202.2,162);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#99CC00").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLAAQgPAAgIAGQgJAHAAALQAAAJAIAFQAHAGAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAJgLAEQgLAFgOgBQgeAAgSgQg");
	this.shape_67.setTransform(191.6,160.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAIAJgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_68.setTransform(423.2,114.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgGQAKgFAMgBQAJABAIAFQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAJgIAEQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_69.setTransform(414.4,115.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMABgGAHQgHAIABANIAAA0IgOAAIAAg4QgBgMgEgGQgEgHgKAAQgMABgHAHQgGAIgBANIAAA0IgPAAIAAhBQAAgOgBgMIAPAAIABARQADgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_70.setTransform(401.2,115.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgGQAKgFAMgBQAJABAIAFQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAJgIAEQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_71.setTransform(387.4,115.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_72.setTransform(380.1,113.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF00").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgGQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAARAIAKQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVAAgMgNgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_73.setTransform(373,115.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgMAKgHQAJgIAPAAQAKAAAIAEQAJADAGAGIgFALQgNgLgPAAQgJAAgFADQgFAEAAAHQAAAGADADQADADAIACIAOADQANADAGAFQAGAHAAAKQAAAMgJAGQgKAIgRAAQgWAAgNgMg");
	this.shape_74.setTransform(363.4,115.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgqIATAAIgtAsIAyAvg");
	this.shape_75.setTransform(350.2,113.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgGQAKgFAMgBQAJABAIAFQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAJgIAEQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_76.setTransform(339,115.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF00").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMgBQAJABAIAFQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAJgIAEQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_77.setTransform(328.1,113.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_78.setTransform(320.8,113.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_79.setTransform(313,113.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_80.setTransform(252.5,114.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgGQAKgFAMgBQAJABAIAFQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAJgIAEQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_81.setTransform(243.6,115.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgMABgGAHQgHAIAAANIAAA0IgNAAIAAg4QgBgMgEgGQgFgHgJAAQgMABgHAHQgGAIAAANIAAA0IgQAAIAAhBQABgOgCgMIAPAAIABARQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_82.setTransform(230.4,115.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgGQAKgFAMgBQAJABAIAFQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAJgIAEQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_83.setTransform(216.7,115.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_84.setTransform(209.3,113.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#99CC00").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgGQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAARAIAKQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVAAgMgNgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_85.setTransform(202.2,115.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#99CC00").s().p("AgvAyIAGgMQAJAJAKADQAKADANAAQAPABAJgHQAIgFAAgMQAAgGgEgFQgEgEgHgCIgRgFQgOgDgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLgBQgPABgIAGQgJAHAAALQAAAKAIAEQAHAGAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAJgLAEQgLAFgOgBQgeAAgSgQg");
	this.shape_86.setTransform(191.6,113.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAQAFAAAEgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_87.setTransform(423.2,68.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_88.setTransform(414.4,69.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKgBQgMABgGAHQgHAIABAOIAAAzIgOAAIAAg4QgBgNgEgGQgEgFgKgBQgMABgHAHQgGAIgBAOIAAAzIgPAAIAAhBQAAgOgBgMIAPAAIABAQQADgJAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_89.setTransform(401.2,69.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_90.setTransform(387.4,69.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_91.setTransform(380.1,67.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFF00").s().p("AgcAjQgMgNAAgVQAAgNAFgMQAGgKAKgHQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVgBgMgMgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_92.setTransform(373,69.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgLAKgIQAJgIAPAAQAKABAIADQAJADAGAGIgFAKQgNgLgPABQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAJQAAANgJAGQgKAIgRAAQgWAAgNgMg");
	this.shape_93.setTransform(363.4,69.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgqIATAAIgtArIAyAwg");
	this.shape_94.setTransform(350.2,67.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_95.setTransform(339,69.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF00").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMgBQAJABAIAEQAIAFAEAIIAAg6IAPAAIAACGIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_96.setTransform(328.1,67.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_97.setTransform(320.8,67.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_98.setTransform(313,67.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAQAEAAAGgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_99.setTransform(252.5,68.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_100.setTransform(243.6,69.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKgBQgMABgGAHQgHAIAAAOIAAAzIgNAAIAAg4QgBgNgEgGQgFgFgJgBQgMABgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQADgJAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_101.setTransform(230.4,69.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_102.setTransform(216.7,69.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_103.setTransform(209.3,67.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#99CC00").s().p("AgcAjQgMgNAAgVQAAgNAFgMQAGgKAKgHQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVgBgMgMgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_104.setTransform(202.2,69.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#99CC00").s().p("AgvAyIAGgMQAJAJAKADQAKADANAAQAPABAJgHQAIgGAAgKQAAgHgEgFQgEgEgHgCIgRgFQgOgDgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLgBQgPABgIAGQgJAHAAALQAAAJAIAGQAHAFAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAFgOAAQgegBgSgQg");
	this.shape_105.setTransform(191.6,67.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAIAJgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_106.setTransform(423.2,21.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_107.setTransform(414.4,23.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKgBQgMABgGAHQgHAIABAOIAAAzIgOAAIAAg4QgBgMgEgHQgEgFgKgBQgMABgHAHQgGAIgBAOIAAAzIgPAAIAAhBQAAgOgBgMIAPAAIABAQQADgJAIgEQAHgFALAAQALAAAGAFQAHAEADAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_108.setTransform(401.2,23.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_109.setTransform(387.4,23.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_110.setTransform(380.1,21.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("AgcAjQgMgMAAgWQAAgNAFgMQAGgKAKgHQAKgFALAAQASAAALAMQAKAMAAAVIAAABIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_111.setTransform(373,23.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgEQAFgDAAgHQAAgFgDgEQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgJQAAgNAKgHQAJgIAPABQAKAAAIADQAJADAGAGIgFAKQgNgLgPABQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAJQAAANgJAGQgKAIgRgBQgWAAgNgLg");
	this.shape_112.setTransform(363.4,23.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgpIATAAIgtArIAyAwg");
	this.shape_113.setTransform(350.2,21.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_114.setTransform(339,23.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFF00").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMAAQAJAAAIAEQAIAFAEAJIAAg7IAPAAIAACFIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgMAAgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANgBAHgIQAIgKAAgRQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_115.setTransform(328.1,21.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_116.setTransform(320.8,21.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_117.setTransform(313,21.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_118.setTransform(252.5,21.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_119.setTransform(243.6,23.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgGQgFgFgKgBQgMABgGAHQgHAIAAAOIAAAzIgNAAIAAg4QgBgMgEgHQgFgFgJgBQgMABgHAHQgGAIAAAOIAAAzIgQAAIAAhBQABgOgCgMIAPAAIABAQQADgJAIgEQAHgFALAAQAKAAAHAFQAGAEAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAkIAAA5g");
	this.shape_120.setTransform(230.4,23.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMAAQAJAAAIAEQAIAFAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAEgJAAQgNAAgJgFgAgTgZQgIAKAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_121.setTransform(216.7,23.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_122.setTransform(209.3,21.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#99CC00").s().p("AgcAjQgMgMAAgWQAAgNAFgMQAGgKAKgHQAKgFALAAQASAAALAMQAKAMAAAVIAAABIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_123.setTransform(202.2,23.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#99CC00").s().p("AgvAyIAGgLQAJAHAKAEQAKAEANgBQAPAAAJgFQAIgHAAgKQAAgHgEgFQgEgEgHgCIgRgFQgOgDgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANAAAMAEQALAEAIAIIgFALQgKgHgJgEQgJgEgLAAQgPAAgIAHQgJAGAAALQAAAKAIAGQAHAFAPADQARAEAJACQAKAEAGAHQAGAGAAAMQAAALgFAIQgGAIgLAFQgLAFgOAAQgeAAgSgRg");
	this.shape_124.setTransform(191.6,21.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFF00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAIAAIAJgBIAAAMQgFACgHAAQgOAAgGgHg");
	this.shape_125.setTransform(423.2,-24.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_126.setTransform(414.4,-22.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF00").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMAAgGAIQgHAIABANIAAA0IgOAAIAAg4QgBgNgEgFQgEgHgKAAQgMAAgHAIQgGAIgBANIAAA0IgPAAIAAhBQAAgOgBgMIAPAAIABARQADgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_127.setTransform(401.2,-23);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_128.setTransform(387.4,-22.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF00").s().p("AgGBDIAAiFIAOAAIAACFg");
	this.shape_129.setTransform(380.1,-25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFF00").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_130.setTransform(373,-22.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFF00").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgMAKgHQAJgIAPAAQAKAAAIAEQAJADAGAGIgFALQgNgLgPAAQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAKQAAALgJAHQgKAIgRAAQgWAAgNgMg");
	this.shape_131.setTransform(363.4,-22.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFF00").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgqIATAAIgtAsIAyAvg");
	this.shape_132.setTransform(350.2,-25);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFF00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_133.setTransform(339,-22.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFF00").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_134.setTransform(328.1,-24.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFF00").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_135.setTransform(320.8,-24.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF00").s().p("AgGBBIAAh0IguAAIAAgNIBpAAIAAANIgtAAIAAB0g");
	this.shape_136.setTransform(313,-24.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#99CC00").s().p("AgDA2QgIgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAPgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKADAEQAFAEAIAAIAKgBIAAAMQgHACgHAAQgNAAgGgHg");
	this.shape_137.setTransform(252.5,-24.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_138.setTransform(243.6,-22.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#99CC00").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgMAAgGAIQgHAIAAANIAAA0IgNAAIAAg4QgBgNgEgFQgFgHgJAAQgMAAgHAIQgGAIAAANIAAA0IgQAAIAAhBQABgOgCgMIAPAAIABARQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_139.setTransform(230.4,-23);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#99CC00").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_140.setTransform(216.7,-22.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#99CC00").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_141.setTransform(209.3,-25);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#99CC00").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_142.setTransform(202.2,-22.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#99CC00").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgDgGgHQgGgHAAgMQAAgLAGgIQAGgJALgFQAKgEAOAAQANgBAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLgBQgPABgIAGQgJAHAAALQAAAJAIAFQAHAGAPADQARAEAJACQAKAEAGAGQAGAIAAALQAAALgFAIQgGAJgLAEQgLAFgOgBQgeAAgSgQg");
	this.shape_143.setTransform(191.6,-24.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAZBDIAAg5QAAgMgGgFQgEgHgMAAQgLAAgIAIQgIAHAAANIAAA1IgOAAIAAiFIAOAAIAAA5QAFgIAIgFQAIgEAKAAQAgAAAAAkIAAA5g");
	this.shape_144.setTransform(20.8,-25);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_145.setTransform(10.1,-22.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAIQgIAIAAANIAAA0IgPAAIAAhBQAAgOgBgMIAOAAIABARQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_146.setTransform(-0.5,-23);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_147.setTransform(-10.7,-22.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgqBDIAAhpQAAgOgBgLIAOAAIABARQAEgJAJgFQAIgGAKAAQAMAAAKAGQAJAGAFALQAFALAAAOQAAAPgFAJQgFALgJAGQgKAFgMAAQgKAAgIgEQgIgFgEgJIAAA5gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgRgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_148.setTransform(-21,-21);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_149.setTransform(-37.2,-22.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLAAgHAIQgGAIAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLAAQgLAAgHAIQgHAIAAANIAAA0IgOAAIAAhBQAAgOgCgMIAOAAIABARQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_150.setTransform(-50.4,-23);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_151.setTransform(-64.1,-22.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_152.setTransform(-76.1,-24.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_153.setTransform(29.7,67.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgMQAGgKAKgHQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVgBgMgMgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_154.setTransform(22.6,69.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKgBQgLABgHAHQgGAIgBAOIAAAzIgOAAIAAg4QABgNgFgGQgEgFgLgBQgLABgHAHQgHAIAAAOIAAAzIgOAAIAAhBQgBgOgBgMIAOAAIABAQQAFgJAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_155.setTransform(9.5,69.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgZAGIAAgLIAzAAIAAALg");
	this.shape_156.setTransform(-2.3,69.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgMQAGgKAKgHQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVgBgMgMgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_157.setTransform(-11.2,69.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAQAGAAAEgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_158.setTransform(-24.2,68.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_159.setTransform(-33.1,69.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKgBQgLABgHAHQgGAIgBAOIAAAzIgOAAIAAg4QABgNgFgGQgEgFgLgBQgLABgHAHQgHAIAAAOIAAAzIgOAAIAAhBQgBgOgBgMIAOAAIABAQQAFgJAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_160.setTransform(-46.3,69.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgKQgFgLAAgOQAAgNAFgMQAFgKAJgHQAKgFAMgBQAJABAIAEQAIAFAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAJAAAQQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_161.setTransform(-60,69.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_162.setTransform(-67.4,67.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAwBBIgOghIhDAAIgOAhIgQAAIA6iBIALAAIA5CBgAgcATIA4AAIgchBg");
	this.shape_163.setTransform(-76.2,67.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAZBDIAAg5QAAgLgGgGQgFgHgKAAQgMABgIAHQgIAHABANIAAA1IgPAAIAAiFIAPAAIAAA5QAEgIAIgFQAIgEAJAAQAhAAABAkIAAA5g");
	this.shape_164.setTransform(102,113.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgGQAKgFAMgBQAJABAIAFQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAJgIAEQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAAQAHAKQAIAIANABQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_165.setTransform(90.8,115.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMABgGAHQgHAIABANIAAA0IgPAAIAAg4QAAgMgEgGQgEgHgKAAQgMABgHAHQgGAIgBANIAAA0IgPAAIAAhBQAAgOgBgMIAPAAIAAARQAEgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_166.setTransform(77.6,115.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_167.setTransform(64.3,115.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAIQgHAJAAALIAAA0g");
	this.shape_168.setTransform(56.4,115.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgMgGgGQgFgHgLAAQgLABgIAHQgIAIAAANIAAA0IgPAAIAAhBQAAgOgBgMIAOAAIABARQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_169.setTransform(42.3,115.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgWAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgLAJgGQAKgFAMgBQANABAKAFQAKAGAFALQAGALAAANQAAAPgGAKQgFALgKAGQgKAFgNABQgMgBgKgFgAgUgZQgIAKABAPQgBARAIAKQAIAIAMABQAOgBAHgIQAHgKAAgRQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_170.setTransform(31.8,115.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgPQAAgNAIgIQAFgHAOAAQAGgBAGACIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_171.setTransform(23.5,113.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgGQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAARAIAKQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVAAgMgNgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_172.setTransform(15.5,115.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgHBDIAAiFIAOAAIAACFg");
	this.shape_173.setTransform(8.4,113.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgGQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAARAIAKQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVAAgMgNgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_174.setTransform(1.3,115.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIAOgGIAAAdIAZAAIAAAMIgZAAIAAAxQAAAKADAEQAFAEAHAAIAKgBIAAAMQgFACgIAAQgMAAgHgHg");
	this.shape_175.setTransform(-7,114.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQADgJAHgFQAIgFAKAAIAJABIgBANQgFgBgEAAQgOAAgFAIQgHAJAAALIAAA0g");
	this.shape_176.setTransform(-17.6,115.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgWAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgLAJgGQAKgFAMgBQANABAKAFQAKAGAFALQAGALAAANQAAAPgGAKQgFALgKAGQgKAFgNABQgMgBgKgFgAgUgZQgIAKABAPQgBARAIAKQAIAIAMABQAOgBAHgIQAHgKAAgRQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_177.setTransform(-26.7,115.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgQA/QgIgEgEgJIAAARIgPAAIAAiFIAPAAIAAA6QAEgJAIgEQAJgFAKgBQALABAKAFQAJAGAFALQAFAJAAAPQAAAOgFALQgFAKgJAHQgKAFgLABQgKgBgJgEgAgUgFQgHAIgBARQABARAHAKQAHAIANABQANAAAIgKQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_178.setTransform(-37.1,113.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgLABgHAHQgGAIAAANIAAA0IgPAAIAAg4QABgMgFgGQgEgHgLAAQgLABgHAHQgHAIAAANIAAA0IgOAAIAAhBQAAgOgCgMIAOAAIABARQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_179.setTransform(-50.9,115.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgVAqQgLgGgFgLQgGgKAAgPQAAgNAGgLQAFgLALgGQAJgFAMgBQANABAKAFQAKAGAFALQAFALAAANQAAAPgFAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKgBAPQABARAHAKQAIAIAMABQAOgBAHgIQAIgKgBgRQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_180.setTransform(-64.1,115.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AAoBBIhNhnIAABnIgOAAIAAiBIALAAIBOBnIAAhnIAOAAIAACBg");
	this.shape_181.setTransform(-76.1,113.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_182.setTransform(70.3,160.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_183.setTransform(65.1,160.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_184.setTransform(57.1,160);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_185.setTransform(47,162);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgEAAQgOAAgFAIQgHAJAAALIAAA0g");
	this.shape_186.setTransform(39.3,162);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgpIATAAIgtArIAyAvg");
	this.shape_187.setTransform(31.5,160);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AgXA+QgJgGgFgLQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAIIAAg5IAPAAIAACFIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANgBQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_188.setTransform(15.4,160);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgOQAAgNAFgLQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAEgJABQgNgBgJgFgAgTgYQgIAIAAARQAAARAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_189.setTransform(4.5,162);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgpIATAAIgtArIAyAvg");
	this.shape_190.setTransform(-4.6,160);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQADgJAHgFQAIgFAKAAIAJABIgBANQgFgBgEAAQgOAAgFAIQgHAJAAALIAAA0g");
	this.shape_191.setTransform(-17.6,162);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgWAqQgJgGgGgLQgFgKgBgPQABgNAFgLQAGgLAJgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALAAANQAAAPgGAKQgFALgKAGQgKAFgNABQgMgBgKgFgAgUgZQgIAKABAPQgBASAIAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_192.setTransform(-26.7,162);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgQA/QgIgFgEgIIAAARIgPAAIAAiFIAPAAIAAA6QAEgJAIgEQAJgGAKAAQALAAAKAHQAJAFAFALQAFAKAAAOQAAAOgFALQgFALgJAGQgKAFgLABQgKgBgJgEgAgUgFQgHAIgBARQABARAHAJQAHAJANAAQANABAIgKQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_193.setTransform(-37.1,160);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgMAAgGAJQgHAHAAANIAAA0IgNAAIAAg4QAAgNgFgFQgFgHgJAAQgMAAgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAQQAEgKAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAlIAAA4g");
	this.shape_194.setTransform(-50.9,162);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgVAqQgLgGgFgLQgGgKAAgPQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAPgFAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKgBAPQABASAHAIQAIAJAMAAQAOAAAHgJQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_195.setTransform(-64.1,162);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_196.setTransform(-76.1,160.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AAZBDIAAg5QAAgMgFgFQgGgHgKABQgMgBgIAJQgHAGAAANIAAA1IgQAAIAAiFIAQAAIAAA5QAEgIAIgFQAIgEAJAAQAiAAAAAkIAAA5g");
	this.shape_197.setTransform(32.9,206.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_198.setTransform(21.7,208.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgHBDIAAiFIAPAAIAACFg");
	this.shape_199.setTransform(14.4,206.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgVAqQgLgGgFgLQgGgLAAgOQAAgNAGgLQAFgLALgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAJAMAAQAOAAAHgJQAIgIgBgSQABgPgIgKQgHgJgOAAQgMAAgIAJg");
	this.shape_200.setTransform(7,208.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABUIAqgpIATAAIgtArIAyAvg");
	this.shape_201.setTransform(-2.2,206.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASABALALQAKANAAAUIAAACIhCAAQAAASAIAIQAIAJAOAAQAQAAAOgKIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_202.setTransform(-12.6,208.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgMAKgHQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJABgFAEQgFADAAAHQAAAFADAEQADADAIACIAOADQANADAGAGQAGAGAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_203.setTransform(-22.1,208.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_204.setTransform(-37.2,208.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKABQgMgBgGAJQgHAHAAANIAAA0IgNAAIAAg4QgBgNgEgFQgFgHgJABQgMgBgHAJQgGAHAAANIAAA0IgQAAIAAhBQABgOgCgLIAPAAIABAQQADgKAIgEQAHgFALAAQAKAAAHAEQAGAFAEAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_205.setTransform(-50.4,208.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAIIAAgPIAOAAIAABbIgOAAIAAgRQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgYQgIAIAAAQQAAASAHAIQAIAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAKg");
	this.shape_206.setTransform(-64.1,208.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AAoBBIhNhoIAABoIgOAAIAAiBIALAAIBOBnIAAhnIAOAAIAACBg");
	this.shape_207.setTransform(-76.1,206.4);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AAZBDIAAg5QAAgMgFgFQgGgHgKABQgMgBgIAJQgHAGAAANIAAA1IgQAAIAAiFIAQAAIAAA5QAEgIAIgFQAIgEAJAAQAiAAAAAkIAAA5g");
	this.shape_208.setTransform(33.3,252.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_209.setTransform(22.2,254.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgLgBgHAJQgGAHAAANIAAA0IgPAAIAAg4QABgNgFgFQgEgHgLABQgLgBgHAJQgHAHAAANIAAA0IgOAAIAAhBQAAgOgCgLIAOAAIABAQQAFgKAHgEQAIgFAKAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_210.setTransform(9,254.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgdAlQgJgJAAgSIAAg3IAPAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAIgIAAgNIAAgyIAPAAIAABaIgPAAIAAgQQgEAJgIAEQgIAEgJAAQgQAAgIgJg");
	this.shape_211.setTransform(-4.3,254.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgGAJQgGAIAAALIAAA0g");
	this.shape_212.setTransform(-12.2,254.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgDA2QgHgIAAgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQABAKAEAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_213.setTransform(-24.2,253.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_214.setTransform(-33.1,254.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKABQgLgBgHAJQgGAHgBANIAAA0IgOAAIAAg4QABgNgFgFQgEgHgLABQgLgBgHAJQgHAHAAANIAAA0IgOAAIAAhBQgBgOgBgLIAOAAIABAQQAFgKAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAlIAAA4g");
	this.shape_215.setTransform(-46.3,254.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgXAqQgJgGgFgLQgFgKAAgPQAAgNAFgKQAFgMAJgFQAKgHAMAAQAJAAAIAGQAIAEAFAJIAAgQIAOAAIAABaIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgNAAgJgGgAgTgZQgIAKAAAPQAAASAHAIQAIAKANgBQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_216.setTransform(-60,254.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgGBDIAAiFIANAAIAACFg");
	this.shape_217.setTransform(-67.4,252.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAwBBIgOgiIhDAAIgOAiIgQAAIA6iBIALAAIA5CBgAgcATIA4AAIgchCg");
	this.shape_218.setTransform(-76.2,252.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#99CC00").s().p("AgKBDIAAhOIgSAAIAAgMIASAAIAAgOQAAgPAIgHQAFgIAOAAQAGAAAGACIAAANIgKgBQgHAAgEADQgEAFAAAKIAAAMIAXAAIAAAMIgXAAIAABOg");
	this.shape_219.setTransform(211.1,252.4);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#99CC00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgOQAAgPAIgHQAFgIAOABQAGAAAGABIAAANIgKgCQgHAAgEAEQgEAFAAAJIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_220.setTransform(211.1,206.2);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#99CC00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgOQAAgOAIgIQAFgIAOABQAGAAAGABIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_221.setTransform(211.1,159.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#99CC00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgPQAAgNAIgIQAFgHAOAAQAGgBAGACIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_222.setTransform(211.1,113.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#99CC00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgPQAAgNAIgIQAFgHAOAAQAGgBAGACIAAANIgKgCQgHAAgEAFQgEAEAAAJIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_223.setTransform(211.1,67.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#99CC00").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgPQAAgNAIgIQAFgHAOgBQAGABAGABIAAANIgKgCQgHABgEAEQgEAEAAAJIAAANIAXAAIAAALIgXAAIAABPg");
	this.shape_224.setTransform(211.1,21.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#99CC00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgOQAAgOAIgIQAFgIAOABQAGAAAGABIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_225.setTransform(211.1,-25);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgcAjQgMgMAAgWQAAgNAFgMQAGgKAKgHQAKgFALAAQASAAALAMQAKAMAAAVIAAABIhCAAQAAASAIAJQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJACgKAAQgVAAgMgMgAgPgcQgHAHgDANIA1AAQgBgNgHgHQgGgHgMAAQgKAAgHAHg");
	this.shape_226.setTransform(-4,23.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgGQgEgFgKgBQgLABgHAHQgGAIgBAOIAAAzIgOAAIAAg4QABgMgFgHQgEgFgLgBQgLABgHAHQgHAIAAAOIAAAzIgOAAIAAhBQgBgOgBgMIAOAAIABAQQAFgJAHgEQAIgFAKAAQAKAAAIAFQAFAEAEAJQAEgIAIgFQAIgFAKAAQAfAAAAAkIAAA5g");
	this.shape_227.setTransform(-17,23.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AAVBDIgugsIAAAsIgPAAIAAiFIAPAAIAABTIAqgpIATAAIgtArIAyAwg");
	this.shape_228.setTransform(-50.5,21.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgQAqQgKgGgGgKQgFgLgBgOQABgNAFgMQAGgKAKgHQAKgFAMAAQAKAAAIADQAJADAGAGIgFAKQgHgFgGgDQgHgCgHAAQgNAAgIAJQgIAKAAAQQAAAQAIAKQAIAIANABQAHgBAHgCQAGgCAHgGIAFALQgGAGgJADQgJACgKAAQgMAAgJgFg");
	this.shape_229.setTransform(-60.3,23.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFF00").s().p("AgKBDIAAhOIgSAAIAAgMIASAAIAAgOQAAgPAHgHQAHgIANAAQAGAAAGACIAAANIgKgBQgHAAgEADQgEAFAAAKIAAAMIAXAAIAAAMIgXAAIAABOg");
	this.shape_230.setTransform(365.7,252.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgLQgFgLgBgOQABgNAFgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALABANQgBAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKAAAPQAAASAHAIQAIAKAMgBQAOABAHgKQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_231.setTransform(326.3,254.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFF00").s().p("AApBBIhOhoIAABoIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_232.setTransform(314.3,252.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFF00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgOQAAgPAHgHQAHgIANABQAGAAAGABIAAANIgKgCQgHAAgEAEQgEAFAAAJIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_233.setTransform(365.7,206.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgLQgFgLgBgOQABgNAFgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALABANQgBAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKAAAPQAAASAHAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_234.setTransform(326.3,208.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFF00").s().p("AApBBIhOhoIAABoIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_235.setTransform(314.3,206.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFF00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgOQAAgOAHgIQAHgIANABQAGAAAGABIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_236.setTransform(365.7,159.9);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgLQgFgKgBgPQABgNAFgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALABANQgBAPgFAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKAAAPQAAASAHAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_237.setTransform(326.3,162);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFF00").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_238.setTransform(314.3,160.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFF00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgPQAAgNAHgIQAHgHANAAQAGgBAGACIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_239.setTransform(365.7,113.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgLQgFgKgBgPQABgNAFgLQAGgLAKgGQAJgFAMgBQANABAKAFQAKAGAFALQAFALABANQgBAPgFAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKAAAPQAAARAHAKQAIAIAMABQAOgBAHgIQAHgKAAgRQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_240.setTransform(326.3,115.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFF00").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_241.setTransform(314.3,113.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFF00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgPQAAgNAHgIQAHgHANAAQAGgBAGACIAAANIgKgCQgHAAgEAFQgEAEAAAJIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_242.setTransform(365.7,67.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgKQgFgMgBgOQABgNAFgLQAGgLAKgGQAJgFAMgBQANABAKAFQAKAGAFALQAFALABANQgBAOgFAMQgFAKgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKAAAPQAAASAHAJQAIAIAMABQAOgBAHgIQAHgJAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_243.setTransform(326.3,69.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFF00").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBoIAAhoIAOAAIAACBg");
	this.shape_244.setTransform(314.3,67.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFF00").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgPQAAgNAHgIQAHgHANgBQAGABAGABIAAANIgKgCQgHABgEAEQgEAEAAAJIAAANIAXAAIAAALIgXAAIAABPg");
	this.shape_245.setTransform(365.7,21.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgKQgFgMgBgOQABgNAFgLQAGgLAKgGQAJgFAMAAQANAAAKAFQAKAGAFALQAFALABANQgBAOgFAMQgFAKgKAGQgKAFgNAAQgMAAgJgFgAgUgZQgHAJAAAQQAAASAHAJQAIAIAMABQAOgBAHgIQAHgJAAgSQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_246.setTransform(326.3,23.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFF00").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBoIAAhoIAOAAIAACBg");
	this.shape_247.setTransform(314.3,21.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFF00").s().p("AgKBEIAAhPIgSAAIAAgMIASAAIAAgOQAAgOAHgIQAHgIANABQAGAAAGABIAAANIgKgCQgHAAgEAFQgEADAAAKIAAANIAXAAIAAAMIgXAAIAABPg");
	this.shape_248.setTransform(365.7,-25);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFF00").s().p("AgVAqQgKgGgGgLQgFgKgBgPQABgNAFgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALABANQgBAPgFAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKAAAPQAAASAHAIQAIAJAMAAQAOAAAHgJQAHgIAAgSQAAgPgHgKQgIgJgNAAQgMAAgIAJg");
	this.shape_249.setTransform(326.3,-22.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFF00").s().p("AApBBIhOhnIAABnIgOAAIAAiBIAMAAIBNBnIAAhnIAOAAIAACBg");
	this.shape_250.setTransform(314.3,-24.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMAAgGAIQgHAIABANIAAA0IgPAAIAAg4QAAgNgEgFQgEgHgKAAQgMAAgHAIQgGAIgBANIAAA0IgPAAIAAhBQAAgOgBgMIAPAAIAAARQAEgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_251.setTransform(-19.1,-23);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgnBBIAAiBIBPAAIAAAMIhAAAIAAAuIA8AAIAAAMIg8AAIAAA7g");
	this.shape_252.setTransform(-77.3,-24.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgLAKgIQAJgIAPAAQAKABAIADQAJADAGAGIgFAKQgNgLgPABQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAJQAAANgJAGQgKAIgRAAQgWAAgNgMg");
	this.shape_253.setTransform(31.1,69.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIACQAIADAIAAQAKAAAGgEQAFgDAAgHQAAgGgDgDQgEgDgJgCIgOgEQgMgCgGgGQgGgGAAgKQAAgLAKgIQAJgIAPAAQAKABAIADQAJADAGAGIgFAKQgNgLgPABQgJAAgFADQgFAEAAAHQAAAFADAEQADADAIACIAOADQANADAGAFQAGAHAAAJQAAANgJAGQgKAIgRAAQgWAAgNgMg");
	this.shape_254.setTransform(22,69.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgMIAPAAIABARQADgJAHgFQAIgFAKAAIAJABIgBAOQgFgCgEAAQgOAAgFAIQgHAJAAAMIAAAzg");
	this.shape_255.setTransform(4.9,69.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMgBQAJABAIAEQAIAFAEAIIAAg6IAPAAIAACGIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_256.setTransform(-4.8,67.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgPAFgJQAFgLAJgGQAKgFAMgBQAJABAIAEQAIAFAEAIIAAg6IAPAAIAACGIgOAAIAAgRQgEAIgIAFQgJAEgJABQgMgBgKgFgAgTgFQgIAIAAARQAAARAIAJQAHAKANAAQANgBAHgIQAIgKAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_257.setTransform(-15.7,67.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_258.setTransform(-43,67.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgoBBIAAiBIBRAAIAAAMIhCAAIAAAuIA+AAIAAAMIg+AAIAAAvIBCAAIAAAMg");
	this.shape_259.setTransform(-77.2,67.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgMIAOAAIABARQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAIQgGAJAAALIAAA0g");
	this.shape_260.setTransform(91.6,115.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgPA/QgIgEgFgJIAAARIgOAAIAAiFIAOAAIAAA6QAFgJAIgEQAHgFALgBQAMABAJAFQAJAGAFALQAGAJgBAPQABAOgGALQgFAKgJAHQgJAFgMABQgLgBgHgEgAgUgFQgIAIAAARQAAARAIAKQAHAIANABQANAAAIgKQAHgJAAgRQAAgRgHgIQgIgJgNAAQgNAAgHAJg");
	this.shape_261.setTransform(72.6,113.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgMABgGAHQgHAIABANIAAA0IgPAAIAAg4QAAgMgEgGQgEgHgKAAQgMABgHAHQgGAIgBANIAAA0IgPAAIAAhBQAAgOgBgMIAPAAIAAARQAEgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAJgFAKAAQAeAAAAAlIAAA4g");
	this.shape_262.setTransform(58.7,115.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgMgGgGQgFgHgLAAQgLABgIAHQgIAIAAANIAAA0IgPAAIAAhBQAAgOgBgMIAOAAIABARQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_263.setTransform(9.5,115.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgVAqQgLgGgFgLQgGgKABgPQgBgNAGgLQAFgLALgGQAJgFAMgBQANABAKAFQAKAGAFALQAGALgBANQABAPgGAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgIAKAAAPQAAARAIAKQAHAIANABQAOgBAHgIQAIgKAAgRQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_264.setTransform(-1,115.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AAZBDIAAg5QAAgLgFgGQgFgHgMAAQgLABgIAHQgHAHgBANIAAA1IgPAAIAAiFIAPAAIAAA5QAFgIAIgFQAIgEAJAAQAiAAgBAkIAAA5g");
	this.shape_265.setTransform(-11.5,113.7);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgGQAKgFALgBQASAAALANQAKAMAAAUIAAACIhCAAQAAARAIAKQAIAIAOABQAQAAAOgLIAFALQgGAFgKAEQgJADgKAAQgVAAgMgNgAgPgcQgHAHgDANIA1AAQgBgOgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_266.setTransform(-37.5,115.8);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKAAQgLABgHAHQgGAIgBANIAAA0IgNAAIAAg4QAAgMgFgGQgFgHgKAAQgLABgHAHQgHAIABANIAAA0IgQAAIAAhBQAAgOgBgMIAOAAIACARQAEgKAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAlIAAA4g");
	this.shape_267.setTransform(-50.6,115.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgVAqQgKgGgGgLQgGgKAAgPQAAgNAGgLQAGgLAKgGQAJgFAMgBQANABAKAFQAKAGAFALQAFALAAANQAAAPgFAKQgFALgKAGQgKAFgNABQgMgBgJgFgAgUgZQgHAKgBAPQABARAHAKQAIAIAMABQAOgBAHgIQAIgKgBgRQABgPgIgKQgIgJgNAAQgMAAgIAJg");
	this.shape_268.setTransform(-63.7,115.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AAnBBIAAg7IhNAAIAAA7IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_269.setTransform(-75.9,113.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgBgLIAOAAIABAQQADgJAIgFQAHgFAKAAIAJABIgBANQgEgBgFAAQgOAAgGAIQgGAJAAALIAAA0g");
	this.shape_270.setTransform(76.8,162);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgQA/QgHgFgFgIIAAARIgPAAIAAiFIAPAAIAAA6QAFgJAHgEQAJgGAJAAQANAAAJAHQAJAFAFALQAFAKAAAOQAAAOgFALQgFALgJAGQgJAFgNABQgJgBgJgEgAgUgFQgHAIgBARQABARAHAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgRgIgIQgGgJgOAAQgNAAgHAJg");
	this.shape_271.setTransform(57.8,160);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgFgFQgEgHgKAAQgMAAgGAJQgGAHAAANIAAA0IgPAAIAAg4QAAgNgEgFQgEgHgLAAQgLAAgHAJQgGAHgBANIAAA0IgOAAIAAhBQAAgOgCgLIAPAAIAAAQQAEgKAIgEQAHgFALAAQALAAAGAEQAHAFADAJQAEgIAIgFQAIgFALAAQAeAAAAAlIAAA4g");
	this.shape_272.setTransform(44,162);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLAAQgLAAgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_273.setTransform(20.1,162);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgRAqQgKgGgFgLQgFgKAAgOQAAgNAFgLQAFgMALgFQAKgHANAAQAJABAJADQAIADAFAGIgEALQgHgGgHgCQgGgDgHAAQgNAAgIAKQgIAIAAARQAAAQAIAJQAIAJANAAQAHAAAGgCQAHgDAHgFIAEALQgFAFgJADQgJAEgJAAQgMgBgLgFg");
	this.shape_274.setTransform(-22.8,162);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgDA2QgIgIABgOIAAgzIgSAAIAAgMIASAAIAAgXIANgGIAAAdIAaAAIAAAMIgaAAIAAAxQAAAKAFAEQAEAEAHAAIAKgBIAAAMQgGACgGAAQgNAAgHgHg");
	this.shape_275.setTransform(-35.6,160.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgwIAAgQIARAAIAAAQg");
	this.shape_276.setTransform(-40.8,160.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgVQAAgNAFgLQAGgMAKgFQAKgHALAAQASABALAMQAKALAAAVIAAACIhCAAQAAASAIAIQAIAJAOAAQAQABAOgLIAFAKQgGAGgKADQgJAEgKAAQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_277.setTransform(-58.9,162);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgXA6QgOgHgHgPQgHgPAAgVQAAgTAHgQQAHgOAOgIQANgJASABQANgBALAFQAMAEAIAIIgFAMQgKgJgJgDQgJgDgLAAQgUAAgMAOQgMAOAAAYQAAAZAMAOQALAOAVABQALgBAJgDQAJgDAKgJIAFAMQgIAIgMAFQgLADgNAAQgSAAgNgIg");
	this.shape_278.setTransform(-76.6,160.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AAaAvIAAg4QAAgNgGgFQgFgHgLABQgLgBgIAJQgIAHAAANIAAA0IgPAAIAAhBQAAgOgBgLIAOAAIABAQQAFgJAIgFQAIgFAKAAQAhAAAAAlIAAA4g");
	this.shape_279.setTransform(-16.7,208.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgVAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAJAMAAQAOAAAHgJQAIgIgBgSQABgPgIgKQgIgJgNAAQgMAAgIAJg");
	this.shape_280.setTransform(-36.3,208.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgWAqQgKgGgFgLQgGgLABgOQgBgNAGgLQAFgLAKgFQAKgHAMAAQANAAAKAHQAKAFAFALQAGALgBANQABAOgGALQgFALgKAGQgKAGgNAAQgMAAgKgGgAgUgZQgIAKAAAPQAAASAIAIQAHAJANAAQAOAAAHgJQAIgIAAgSQAAgPgIgKQgHgJgOAAQgNAAgHAJg");
	this.shape_281.setTransform(-46.7,208.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AAZBDIAAg5QAAgMgGgFQgEgHgMABQgLgBgIAJQgIAGAAANIAAA1IgOAAIAAiFIAOAAIAAA5QAFgIAIgFQAIgEAKAAQAgAAAAAkIAAA5g");
	this.shape_282.setTransform(-57.2,206.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgQAqQgLgGgFgLQgGgKAAgPQAAgNAGgKQAGgMAKgFQAKgHAMAAQAKABAIADQAJADAFAFIgEAMQgHgGgHgCQgGgDgHAAQgNAAgIAKQgIAIAAAQQAAARAIAJQAIAJANAAQAHAAAGgCQAHgDAHgFIAEALQgFAFgJADQgJAEgKAAQgLAAgKgGg");
	this.shape_283.setTransform(-66.8,208.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgvAyIAGgMQAJAJAKADQAKADANABQAPAAAJgHQAIgFAAgMQAAgGgEgFQgEgDgHgDIgRgEQgOgEgKgEQgKgCgGgIQgGgHAAgMQAAgLAGgJQAGgIALgFQAKgEAOgBQANAAAMAFQALAEAIAIIgFAMQgKgIgJgEQgJgDgLAAQgPAAgIAGQgJAHAAALQAAAJAIAFQAHAFAPAEQARAEAJADQAKADAGAGQAGAIAAALQAAALgFAIQgGAIgLAFQgLAFgOgBQgeAAgSgQg");
	this.shape_284.setTransform(-77.2,206.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgLAKgIQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_285.setTransform(35.1,254.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgjAkIAFgLQAHAGAIADQAIACAIAAQAKAAAGgDQAFgEAAgHQAAgFgDgDQgEgEgJgCIgOgDQgMgDgGgFQgGgHAAgKQAAgLAKgIQAJgHAPgBQAKAAAIADQAJAEAGAFIgFAMQgNgMgPAAQgJAAgFAFQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAGQAGAGAAAKQAAALgJAIQgKAGgRABQgWAAgNgMg");
	this.shape_286.setTransform(26,254.5);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_287.setTransform(16.6,254.5);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgYAvIAAhBQAAgOgCgLIAPAAIABAQQAEgJAGgFQAIgFAKAAIAIABIAAANQgFgBgFAAQgNAAgFAJQgHAIAAALIAAA0g");
	this.shape_288.setTransform(8.9,254.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAJIAAg6IAPAAIAACEIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_289.setTransform(-0.8,252.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgXA+QgJgHgFgKQgFgLAAgOQAAgOAFgKQAFgLAJgFQAKgHAMAAQAJAAAIAGQAIAEAEAJIAAg6IAPAAIAACEIgOAAIAAgQQgEAIgIAFQgJAFgJAAQgMAAgKgGgAgTgFQgIAIAAARQAAARAIAJQAHAJANAAQANABAHgKQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgHAJg");
	this.shape_290.setTransform(-11.7,252.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgcAjQgMgMAAgXQAAgNAFgKQAGgMAKgFQAKgHALAAQASAAALAMQAKAMAAAVIAAACIhCAAQAAASAIAIQAIAKAOgBQAQAAAOgKIAFAKQgGAGgKADQgJADgKABQgVAAgMgNgAgPgcQgHAHgDAMIA1AAQgBgNgHgGQgGgHgMAAQgKAAgHAHg");
	this.shape_291.setTransform(-37.6,254.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AA0AvIAAg4QAAgNgEgFQgFgHgKABQgLgBgHAJQgGAHgBANIAAA0IgNAAIAAg4QAAgNgFgFQgFgHgKABQgLgBgHAJQgHAHABANIAAA0IgQAAIAAhBQAAgOgBgLIAOAAIACAQQAEgKAHgEQAIgFAKAAQAKAAAIAEQAFAFAEAJQAEgIAIgFQAJgFAJAAQAfAAAAAlIAAA4g");
	this.shape_292.setTransform(-50.6,254.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgVAqQgKgGgGgLQgGgLAAgOQAAgNAGgLQAGgLAKgFQAJgHAMAAQANAAAKAHQAKAFAFALQAFALAAANQAAAOgFALQgFALgKAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAKgBAPQABASAHAIQAIAKAMgBQAOABAHgKQAIgIgBgSQABgPgIgKQgIgJgNAAQgMAAgIAJg");
	this.shape_293.setTransform(-63.7,254.5);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AAnBBIAAg8IhNAAIAAA8IgPAAIAAiBIAPAAIAAA6IBNAAIAAg6IAPAAIAACBg");
	this.shape_294.setTransform(-76,252.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_218},{t:this.shape_217,p:{x:-67.4,y:252.5}},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211,p:{x:-4.3,y:254.6}},{t:this.shape_210,p:{x:9,y:254.5}},{t:this.shape_209,p:{x:22.2}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202,p:{x:-12.6}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198,p:{x:21.7}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191,p:{x:-17.6}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188,p:{x:15.4}},{t:this.shape_187},{t:this.shape_186,p:{x:39.3}},{t:this.shape_185,p:{x:47}},{t:this.shape_184,p:{x:57.1}},{t:this.shape_183,p:{x:65.1,y:160.1}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:1.3}},{t:this.shape_173,p:{x:8.4,y:113.7}},{t:this.shape_172,p:{x:15.5}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:42.3}},{t:this.shape_168},{t:this.shape_167,p:{x:64.3}},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162,p:{x:-67.4}},{t:this.shape_161,p:{x:-60}},{t:this.shape_160},{t:this.shape_159,p:{x:-33.1}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155,p:{x:9.5}},{t:this.shape_154,p:{x:22.6}},{t:this.shape_153,p:{x:29.7,y:67.5}},{t:this.shape_152},{t:this.shape_151,p:{x:-64.1,y:-22.9}},{t:this.shape_150},{t:this.shape_149,p:{x:-37.2}},{t:this.shape_148,p:{x:-21,y:-21}},{t:this.shape_147,p:{x:-10.7}},{t:this.shape_146,p:{x:-0.5}},{t:this.shape_145,p:{x:10.1}},{t:this.shape_144},{t:this.shape_143,p:{x:191.6}},{t:this.shape_142,p:{x:202.2}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131,p:{x:363.4}},{t:this.shape_130,p:{x:373}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125,p:{x:423.2}},{t:this.shape_124,p:{x:191.6}},{t:this.shape_123,p:{x:202.2}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:243.6}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112,p:{x:363.4}},{t:this.shape_111,p:{x:373}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:414.4}},{t:this.shape_106,p:{x:423.2}},{t:this.shape_105,p:{x:191.6}},{t:this.shape_104,p:{x:202.2}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:243.6}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:363.4}},{t:this.shape_92,p:{x:373}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:414.4}},{t:this.shape_87,p:{x:423.2}},{t:this.shape_86,p:{x:191.6}},{t:this.shape_85,p:{x:202.2}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:243.6}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:363.4}},{t:this.shape_73,p:{x:373}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:414.4}},{t:this.shape_68,p:{x:423.2}},{t:this.shape_67,p:{x:191.6}},{t:this.shape_66,p:{x:202.2}},{t:this.shape_65},{t:this.shape_64,p:{x:216.7,y:162}},{t:this.shape_63},{t:this.shape_62,p:{x:243.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:363.4}},{t:this.shape_54,p:{x:373}},{t:this.shape_53},{t:this.shape_52,p:{x:387.4,y:162}},{t:this.shape_51},{t:this.shape_50,p:{x:414.4}},{t:this.shape_49,p:{x:423.2}},{t:this.shape_48,p:{x:191.6}},{t:this.shape_47,p:{x:202.2}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:243.6}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:363.4}},{t:this.shape_35,p:{x:373}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:414.4}},{t:this.shape_30,p:{x:423.2}},{t:this.shape_29,p:{x:191.6}},{t:this.shape_28,p:{x:202.2}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:243.6}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:363.4}},{t:this.shape_16,p:{x:373}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:414.4}},{t:this.shape_11,p:{x:423.2}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:32.1}},{t:this.shape,p:{x:43.2}}]}).to({state:[{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_209,p:{x:-22.6}},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_217,p:{x:-28.9,y:206.2}},{t:this.shape_279},{t:this.shape_198,p:{x:-6.1}},{t:this.shape_210,p:{x:7.6,y:208.2}},{t:this.shape_202,p:{x:20.7}},{t:this.shape_278},{t:this.shape_186,p:{x:-66.5}},{t:this.shape_277},{t:this.shape_188,p:{x:-48.7}},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_151,p:{x:-13.3,y:162}},{t:this.shape_191,p:{x:-3.6}},{t:this.shape_184,p:{x:4.3}},{t:this.shape_273},{t:this.shape_211,p:{x:30.7,y:162.1}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_185,p:{x:67.9}},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_148,p:{x:-22.1,y:117.7}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_174,p:{x:19.8}},{t:this.shape_169,p:{x:34.8}},{t:this.shape_167,p:{x:45.5}},{t:this.shape_262},{t:this.shape_261},{t:this.shape_172,p:{x:82.7}},{t:this.shape_260},{t:this.shape_259},{t:this.shape_155,p:{x:-64.3}},{t:this.shape_161,p:{x:-51}},{t:this.shape_258},{t:this.shape_162,p:{x:-38.8}},{t:this.shape_159,p:{x:-26.6}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_154,p:{x:12.6}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_145,p:{x:-67.5}},{t:this.shape_153,p:{x:-60,y:-25}},{t:this.shape_173,p:{x:-55.6,y:-25}},{t:this.shape_146,p:{x:-43.4}},{t:this.shape_149,p:{x:-32.9}},{t:this.shape_251},{t:this.shape_147,p:{x:-6.1}},{t:this.shape_250},{t:this.shape_249},{t:this.shape_125,p:{x:334.6}},{t:this.shape_131,p:{x:347.2}},{t:this.shape_52,p:{x:356.9,y:-22.9}},{t:this.shape_248},{t:this.shape_130,p:{x:373.8}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_106,p:{x:334.6}},{t:this.shape_112,p:{x:347.2}},{t:this.shape_107,p:{x:356.9}},{t:this.shape_245},{t:this.shape_111,p:{x:373.8}},{t:this.shape_244},{t:this.shape_243},{t:this.shape_87,p:{x:334.6}},{t:this.shape_93,p:{x:347.2}},{t:this.shape_88,p:{x:356.9}},{t:this.shape_242},{t:this.shape_92,p:{x:373.8}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_68,p:{x:334.6}},{t:this.shape_74,p:{x:347.2}},{t:this.shape_69,p:{x:356.9}},{t:this.shape_239},{t:this.shape_73,p:{x:373.8}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_49,p:{x:334.6}},{t:this.shape_55,p:{x:347.2}},{t:this.shape_50,p:{x:356.9}},{t:this.shape_236},{t:this.shape_54,p:{x:373.8}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_30,p:{x:334.6}},{t:this.shape_36,p:{x:347.2}},{t:this.shape_31,p:{x:356.9}},{t:this.shape_233},{t:this.shape_35,p:{x:373.8}},{t:this.shape_232},{t:this.shape_231},{t:this.shape_11,p:{x:334.6}},{t:this.shape_17,p:{x:347.2}},{t:this.shape_12,p:{x:356.9}},{t:this.shape_230},{t:this.shape_16,p:{x:373.8}},{t:this.shape_10},{t:this.shape_183,p:{x:-67.1,y:21.4}},{t:this.shape_229},{t:this.shape_228},{t:this.shape,p:{x:-41.3}},{t:this.shape_1,p:{x:-30.7}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_143,p:{x:191.5}},{t:this.shape_64,p:{x:202.4,y:-22.9}},{t:this.shape_225},{t:this.shape_142,p:{x:219.3}},{t:this.shape_124,p:{x:191.5}},{t:this.shape_119,p:{x:202.4}},{t:this.shape_224},{t:this.shape_123,p:{x:219.3}},{t:this.shape_105,p:{x:191.5}},{t:this.shape_100,p:{x:202.4}},{t:this.shape_223},{t:this.shape_104,p:{x:219.3}},{t:this.shape_86,p:{x:191.5}},{t:this.shape_81,p:{x:202.4}},{t:this.shape_222},{t:this.shape_85,p:{x:219.3}},{t:this.shape_67,p:{x:191.5}},{t:this.shape_62,p:{x:202.4}},{t:this.shape_221},{t:this.shape_66,p:{x:219.3}},{t:this.shape_48,p:{x:191.5}},{t:this.shape_43,p:{x:202.4}},{t:this.shape_220},{t:this.shape_47,p:{x:219.3}},{t:this.shape_29,p:{x:191.5}},{t:this.shape_24,p:{x:202.4}},{t:this.shape_219},{t:this.shape_28,p:{x:219.3}}]},1).wait(1));

	// Layer_2
	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#150017").s().p("EgqhAY6IAAmWMBVDAAAIAAGWgEgqhARpIAAmVMBVDAAAIAAGVgEgqhAKaIAAmWMBVDAAAIAAGWgEgqhADJIAAmVMBVDAAAIAAGVgEgqhgEHIAAmWMBVDAAAIAAGWgEgqhgLXIAAmWMBVDAAAIAAGWgEgqhgSjIAAmWMBVDAAAIAAGWg");
	this.shape_295.setTransform(171.6,114.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_295).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.6,-45.3,544.4,318.8);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

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


(lib.dialogue1copy = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm1copy();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-42.8,415.5,116.6);


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
	this.instance = new lib.tBm1copy2();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-36.7);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-72.8,468.5,119.6);


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


(lib.borang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [2, 1, 2, 2, 2, 2, 2];
		var maxItem = 7;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = [0,0,0,0,0,0,0];
		selectAns = function (itemNum, optionNum) {
			this["item"+itemNum+"_1"].gotoAndStop("on");
			this["item"+itemNum+"_2"].gotoAndStop("on");
			this["item"+itemNum+"_"+optionNum].gotoAndStop("selected");
			userAns[itemNum-1] = optionNum;
			//check completion
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==maxItem){
				this.btnSubmit.mouseEnabled = true;
				this.btnSubmit.alpha = 1;
			} else {
				this.btnSubmit.mouseEnabled = false;
				this.btnSubmit.alpha = .5;
			}
		}
		this.item1_1.addEventListener("click", selectAns.bind(this, 1, 1));
		this.item1_2.addEventListener("click", selectAns.bind(this, 1, 2));
		this.item2_1.addEventListener("click", selectAns.bind(this, 2, 1));
		this.item2_2.addEventListener("click", selectAns.bind(this, 2, 2));
		this.item3_1.addEventListener("click", selectAns.bind(this, 3, 1));
		this.item3_2.addEventListener("click", selectAns.bind(this, 3, 2));
		this.item4_1.addEventListener("click", selectAns.bind(this, 4, 1));
		this.item4_2.addEventListener("click", selectAns.bind(this, 4, 2));
		this.item5_1.addEventListener("click", selectAns.bind(this, 5, 1));
		this.item5_2.addEventListener("click", selectAns.bind(this, 5, 2));
		this.item6_1.addEventListener("click", selectAns.bind(this, 6, 1));
		this.item6_2.addEventListener("click", selectAns.bind(this, 6, 2));
		this.item7_1.addEventListener("click", selectAns.bind(this, 7, 1));
		this.item7_2.addEventListener("click", selectAns.bind(this, 7, 2));
		function submitAns(e){
			var cScore = 0;
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3] + ", " +
			userAns[4] + ", " + userAns[5] + ", " + userAns[6];
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.item1_2 = new lib.btnItemRound();
	this.item1_2.name = "item1_2";
	this.item1_2.parent = this;
	this.item1_2.setTransform(520,202.5,0.688,0.688,0,0,0,0.1,0.2);

	this.item1_1 = new lib.btnItemRound();
	this.item1_1.name = "item1_1";
	this.item1_1.parent = this;
	this.item1_1.setTransform(399,202.5,0.688,0.688,0,0,0,0.1,0.2);

	this.item5_2 = new lib.btnItemRound();
	this.item5_2.name = "item5_2";
	this.item5_2.parent = this;
	this.item5_2.setTransform(520,387.7,0.688,0.688,0,0,0,0.1,0.2);

	this.item5_1 = new lib.btnItemRound();
	this.item5_1.name = "item5_1";
	this.item5_1.parent = this;
	this.item5_1.setTransform(399,387.7,0.688,0.688,0,0,0,0.1,0.2);

	this.item6_2 = new lib.btnItemRound();
	this.item6_2.name = "item6_2";
	this.item6_2.parent = this;
	this.item6_2.setTransform(520,434,0.688,0.688,0,0,0,0.1,0.2);

	this.item6_1 = new lib.btnItemRound();
	this.item6_1.name = "item6_1";
	this.item6_1.parent = this;
	this.item6_1.setTransform(399,434,0.688,0.688,0,0,0,0.1,0.2);

	this.item7_2 = new lib.btnItemRound();
	this.item7_2.name = "item7_2";
	this.item7_2.parent = this;
	this.item7_2.setTransform(520,480.3,0.688,0.688,0,0,0,0.1,0.2);

	this.item7_1 = new lib.btnItemRound();
	this.item7_1.name = "item7_1";
	this.item7_1.parent = this;
	this.item7_1.setTransform(399,480.3,0.688,0.688,0,0,0,0.1,0.2);

	this.item2_2 = new lib.btnItemRound();
	this.item2_2.name = "item2_2";
	this.item2_2.parent = this;
	this.item2_2.setTransform(520,248.8,0.688,0.688,0,0,0,0.1,0.2);

	this.item2_1 = new lib.btnItemRound();
	this.item2_1.name = "item2_1";
	this.item2_1.parent = this;
	this.item2_1.setTransform(399,248.8,0.688,0.688,0,0,0,0.1,0.2);

	this.item3_2 = new lib.btnItemRound();
	this.item3_2.name = "item3_2";
	this.item3_2.parent = this;
	this.item3_2.setTransform(520,295.1,0.688,0.688,0,0,0,0.1,0.2);

	this.item3_1 = new lib.btnItemRound();
	this.item3_1.name = "item3_1";
	this.item3_1.parent = this;
	this.item3_1.setTransform(399,295.1,0.688,0.688,0,0,0,0.1,0.2);

	this.item4_2 = new lib.btnItemRound();
	this.item4_2.name = "item4_2";
	this.item4_2.parent = this;
	this.item4_2.setTransform(520,341.4,0.688,0.688,0,0,0,0.1,0.2);

	this.item4_1 = new lib.btnItemRound();
	this.item4_1.name = "item4_1";
	this.item4_1.parent = this;
	this.item4_1.setTransform(399,341.4,0.688,0.688,0,0,0,0.1,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item4_1},{t:this.item4_2},{t:this.item3_1},{t:this.item3_2},{t:this.item2_1},{t:this.item2_2},{t:this.item7_1},{t:this.item7_2},{t:this.item6_1},{t:this.item6_2},{t:this.item5_1},{t:this.item5_2},{t:this.item1_1},{t:this.item1_2}]}).wait(1));

	// Layer_1
	this.instance = new lib.soalan();
	this.instance.parent = this;
	this.instance.setTransform(389.4,355.9,1,1,0,0,0,154.9,128.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_3
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(411,533.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(133.9,181.6,544.4,374.3);


(lib.actMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [2, 1, 2, 2, 2];
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = [0,0,0,0,0];
		selectAns = function (itemNum, optionNum) {
			this["item"+itemNum+"_1"].gotoAndStop("on");
			this["item"+itemNum+"_2"].gotoAndStop("on");
			this["item"+itemNum+"_"+optionNum].gotoAndStop("selected");
			userAns[itemNum-1] = optionNum;
			//check completion
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==maxItem){
				this.btnSubmit.mouseEnabled = true;
				this.btnSubmit.alpha = 1;
			} else {
				this.btnSubmit.mouseEnabled = false;
				this.btnSubmit.alpha = .5;
			}
		}
		this.item1_1.addEventListener("click", selectAns.bind(this, 1, 1));
		this.item1_2.addEventListener("click", selectAns.bind(this, 1, 2));
		this.item2_1.addEventListener("click", selectAns.bind(this, 2, 1));
		this.item2_2.addEventListener("click", selectAns.bind(this, 2, 2));
		this.item3_1.addEventListener("click", selectAns.bind(this, 3, 1));
		this.item3_2.addEventListener("click", selectAns.bind(this, 3, 2));
		this.item4_1.addEventListener("click", selectAns.bind(this, 4, 1));
		this.item4_2.addEventListener("click", selectAns.bind(this, 4, 2));
		this.item5_1.addEventListener("click", selectAns.bind(this, 5, 1));
		this.item5_2.addEventListener("click", selectAns.bind(this, 5, 2));
		function submitAns(e){
			var cScore = 0;
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3] + ", " + userAns[4];
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btns
	this.item5_2 = new lib.btnItemRound();
	this.item5_2.name = "item5_2";
	this.item5_2.parent = this;
	this.item5_2.setTransform(685.1,482.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item5_1 = new lib.btnItemRound();
	this.item5_1.name = "item5_1";
	this.item5_1.parent = this;
	this.item5_1.setTransform(613.1,482.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item4_2 = new lib.btnItemRound();
	this.item4_2.name = "item4_2";
	this.item4_2.parent = this;
	this.item4_2.setTransform(685.1,432.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item4_1 = new lib.btnItemRound();
	this.item4_1.name = "item4_1";
	this.item4_1.parent = this;
	this.item4_1.setTransform(613.1,432.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item3_2 = new lib.btnItemRound();
	this.item3_2.name = "item3_2";
	this.item3_2.parent = this;
	this.item3_2.setTransform(685.1,382.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item3_1 = new lib.btnItemRound();
	this.item3_1.name = "item3_1";
	this.item3_1.parent = this;
	this.item3_1.setTransform(613.1,382.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item2_2 = new lib.btnItemRound();
	this.item2_2.name = "item2_2";
	this.item2_2.parent = this;
	this.item2_2.setTransform(685.1,332.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item2_1 = new lib.btnItemRound();
	this.item2_1.name = "item2_1";
	this.item2_1.parent = this;
	this.item2_1.setTransform(613.1,332.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item1_2 = new lib.btnItemRound();
	this.item1_2.name = "item1_2";
	this.item1_2.parent = this;
	this.item1_2.setTransform(685.1,282.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item1_1 = new lib.btnItemRound();
	this.item1_1.name = "item1_1";
	this.item1_1.parent = this;
	this.item1_1.setTransform(613.1,282.6,0.516,0.516,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1_1},{t:this.item1_2},{t:this.item2_1},{t:this.item2_2},{t:this.item3_1},{t:this.item3_2},{t:this.item4_1},{t:this.item4_2},{t:this.item5_1},{t:this.item5_2}]}).wait(1));

	// t
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(666.3,530.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// q
	this.instance = new lib.soklanset1copy2();
	this.instance.parent = this;
	this.instance.setTransform(472.3,346.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3, new cjs.Rectangle(107,208.9,668,344), null);


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [2, 2, 2, 1, 2];
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = [0,0,0,0,0];
		selectAns = function (itemNum, optionNum) {
			this["item"+itemNum+"_1"].gotoAndStop("on");
			this["item"+itemNum+"_2"].gotoAndStop("on");
			this["item"+itemNum+"_"+optionNum].gotoAndStop("selected");
			userAns[itemNum-1] = optionNum;
			//check completion
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==maxItem){
				this.btnSubmit.mouseEnabled = true;
				this.btnSubmit.alpha = 1;
			} else {
				this.btnSubmit.mouseEnabled = false;
				this.btnSubmit.alpha = .5;
			}
		}
		this.item1_1.addEventListener("click", selectAns.bind(this, 1, 1));
		this.item1_2.addEventListener("click", selectAns.bind(this, 1, 2));
		this.item2_1.addEventListener("click", selectAns.bind(this, 2, 1));
		this.item2_2.addEventListener("click", selectAns.bind(this, 2, 2));
		this.item3_1.addEventListener("click", selectAns.bind(this, 3, 1));
		this.item3_2.addEventListener("click", selectAns.bind(this, 3, 2));
		this.item4_1.addEventListener("click", selectAns.bind(this, 4, 1));
		this.item4_2.addEventListener("click", selectAns.bind(this, 4, 2));
		this.item5_1.addEventListener("click", selectAns.bind(this, 5, 1));
		this.item5_2.addEventListener("click", selectAns.bind(this, 5, 2));
		function submitAns(e){
			var cScore = 0;
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3] + ", " + userAns[4];
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btns
	this.item5_2 = new lib.btnItemRound();
	this.item5_2.name = "item5_2";
	this.item5_2.parent = this;
	this.item5_2.setTransform(685.1,482.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item5_1 = new lib.btnItemRound();
	this.item5_1.name = "item5_1";
	this.item5_1.parent = this;
	this.item5_1.setTransform(613.1,482.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item4_2 = new lib.btnItemRound();
	this.item4_2.name = "item4_2";
	this.item4_2.parent = this;
	this.item4_2.setTransform(685.1,432.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item4_1 = new lib.btnItemRound();
	this.item4_1.name = "item4_1";
	this.item4_1.parent = this;
	this.item4_1.setTransform(613.1,432.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item3_2 = new lib.btnItemRound();
	this.item3_2.name = "item3_2";
	this.item3_2.parent = this;
	this.item3_2.setTransform(685.1,382.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item3_1 = new lib.btnItemRound();
	this.item3_1.name = "item3_1";
	this.item3_1.parent = this;
	this.item3_1.setTransform(613.1,382.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item2_2 = new lib.btnItemRound();
	this.item2_2.name = "item2_2";
	this.item2_2.parent = this;
	this.item2_2.setTransform(685.1,332.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item2_1 = new lib.btnItemRound();
	this.item2_1.name = "item2_1";
	this.item2_1.parent = this;
	this.item2_1.setTransform(613.1,332.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item1_2 = new lib.btnItemRound();
	this.item1_2.name = "item1_2";
	this.item1_2.parent = this;
	this.item1_2.setTransform(685.1,282.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item1_1 = new lib.btnItemRound();
	this.item1_1.name = "item1_1";
	this.item1_1.parent = this;
	this.item1_1.setTransform(613.1,282.6,0.516,0.516,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1_1},{t:this.item1_2},{t:this.item2_1},{t:this.item2_2},{t:this.item3_1},{t:this.item3_2},{t:this.item4_1},{t:this.item4_2},{t:this.item5_1},{t:this.item5_2}]}).wait(1));

	// t
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(666.3,530.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// q
	this.instance = new lib.soklanset1copy();
	this.instance.parent = this;
	this.instance.setTransform(472.3,346.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2, new cjs.Rectangle(107,208.9,668,344), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [1, 2, 2, 2, 2];
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = [0,0,0,0,0];
		selectAns = function (itemNum, optionNum) {
			this["item"+itemNum+"_1"].gotoAndStop("on");
			this["item"+itemNum+"_2"].gotoAndStop("on");
			this["item"+itemNum+"_"+optionNum].gotoAndStop("selected");
			userAns[itemNum-1] = optionNum;
			//check completion
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount==maxItem){
				this.btnSubmit.mouseEnabled = true;
				this.btnSubmit.alpha = 1;
			} else {
				this.btnSubmit.mouseEnabled = false;
				this.btnSubmit.alpha = .5;
			}
		}
		this.item1_1.addEventListener("click", selectAns.bind(this, 1, 1));
		this.item1_2.addEventListener("click", selectAns.bind(this, 1, 2));
		this.item2_1.addEventListener("click", selectAns.bind(this, 2, 1));
		this.item2_2.addEventListener("click", selectAns.bind(this, 2, 2));
		this.item3_1.addEventListener("click", selectAns.bind(this, 3, 1));
		this.item3_2.addEventListener("click", selectAns.bind(this, 3, 2));
		this.item4_1.addEventListener("click", selectAns.bind(this, 4, 1));
		this.item4_2.addEventListener("click", selectAns.bind(this, 4, 2));
		this.item5_1.addEventListener("click", selectAns.bind(this, 5, 1));
		this.item5_2.addEventListener("click", selectAns.bind(this, 5, 2));
		function submitAns(e){
			var cScore = 0;
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3] + ", " + userAns[4];
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btns
	this.item5_2 = new lib.btnItemRound();
	this.item5_2.name = "item5_2";
	this.item5_2.parent = this;
	this.item5_2.setTransform(685.1,482.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item5_1 = new lib.btnItemRound();
	this.item5_1.name = "item5_1";
	this.item5_1.parent = this;
	this.item5_1.setTransform(613.1,482.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item4_2 = new lib.btnItemRound();
	this.item4_2.name = "item4_2";
	this.item4_2.parent = this;
	this.item4_2.setTransform(685.1,432.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item4_1 = new lib.btnItemRound();
	this.item4_1.name = "item4_1";
	this.item4_1.parent = this;
	this.item4_1.setTransform(613.1,432.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item3_2 = new lib.btnItemRound();
	this.item3_2.name = "item3_2";
	this.item3_2.parent = this;
	this.item3_2.setTransform(685.1,382.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item3_1 = new lib.btnItemRound();
	this.item3_1.name = "item3_1";
	this.item3_1.parent = this;
	this.item3_1.setTransform(613.1,382.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item2_2 = new lib.btnItemRound();
	this.item2_2.name = "item2_2";
	this.item2_2.parent = this;
	this.item2_2.setTransform(685.1,332.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item2_1 = new lib.btnItemRound();
	this.item2_1.name = "item2_1";
	this.item2_1.parent = this;
	this.item2_1.setTransform(613.1,332.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item1_2 = new lib.btnItemRound();
	this.item1_2.name = "item1_2";
	this.item1_2.parent = this;
	this.item1_2.setTransform(685.1,282.6,0.516,0.516,0,0,0,0.2,0.3);

	this.item1_1 = new lib.btnItemRound();
	this.item1_1.name = "item1_1";
	this.item1_1.parent = this;
	this.item1_1.setTransform(613.1,282.6,0.516,0.516,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1_1},{t:this.item1_2},{t:this.item2_1},{t:this.item2_2},{t:this.item3_1},{t:this.item3_2},{t:this.item4_1},{t:this.item4_2},{t:this.item5_1},{t:this.item5_2}]}).wait(1));

	// t
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(666.3,530.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// q
	this.instance = new lib.soklanset1();
	this.instance.parent = this;
	this.instance.setTransform(472.3,346.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(107,208.9,668,344), null);


// stage content:
(lib.f3s12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:109,q2:159,q3:209,q4:255,finalFb:302});

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
		var stageNum = 12;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		} else {
			if (schoolLevel==3){
				stageNum = 12;
			}
		}
		var maxQ = 2;
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": [{
				"qId": "f3s12_1",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 25,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
			]
		};
		var qItem1 = [{
				"qId": "f3s12_2",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 23,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s12_3",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 23,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s12_4",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 23,
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
		} else {
			this.myData.qItem.push(qItem1[randRange(0,2)]);
		}
		function goNextQ (){
			_this.currentQ++;
			if (_this.currentQ<=_this.myData.qItem.length){
				console.log(_this.myData.qItem[_this.currentQ-1].qId.substring(6));
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(6));
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
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_113 = function() {
		playSound("questionAlert");
	}
	this.frame_152 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		playSound("questionAlert");
	}
	this.frame_203 = function() {
		this.stop();
	}
	this.frame_209 = function() {
		playSound("questionAlert");
	}
	this.frame_249 = function() {
		this.stop();
	}
	this.frame_255 = function() {
		playSound("questionAlert");
	}
	this.frame_296 = function() {
		this.stop();
	}
	this.frame_302 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_473 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(14).call(this.frame_113).wait(39).call(this.frame_152).wait(12).call(this.frame_164).wait(39).call(this.frame_203).wait(6).call(this.frame_209).wait(40).call(this.frame_249).wait(6).call(this.frame_255).wait(41).call(this.frame_296).wait(6).call(this.frame_302).wait(171).call(this.frame_473).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(109).to({_off:false},0).wait(365));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(302).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(109).to({_off:false},0).wait(365));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(429));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(597.5,167.3,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},10).wait(365));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(413.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_3 = new lib.dialogue1copy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(427.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},116).to({state:[]},143).wait(172));

	// avatar
	this.instance_4 = new lib.avatarBotsX("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.4,121.6,0.052,0.052);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:114.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},259).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(302).to({graphics:null,x:0,y:0}).wait(172));

	// actMc
	this.instance_5 = new lib.borang();
	this.instance_5.parent = this;
	this.instance_5.setTransform(412.3,727.9,1,1,0,0,0,412.3,347.9);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,609.9,1,1,0,0,0,0,-0.1);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,609.9,1,1,0,0,0,0,-0.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,609.9,1,1,0,0,0,0,-0.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(139).to({_off:false},0).to({y:347.9},13,cjs.Ease.backOut).to({_off:true},7).wait(315));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).to({y:-0.1},13,cjs.Ease.backOut).to({_off:true},6).wait(265));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(236).to({_off:false},0).to({y:-0.1},13,cjs.Ease.backOut).to({_off:true},6).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(283).to({_off:false},0).to({y:-0.1},13,cjs.Ease.backOut).to({_off:true},6).wait(172));

	// progress
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(624.6,81.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(636.9,81.5);

	var maskedShapeInstanceList = [this.prog1,this.prog2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog2},{t:this.prog1}]},99).to({state:[]},203).wait(172));

	// Layer_1
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(448));

	// Layer 2
	this.instance_9 = new lib.Symbol4("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(418.1,310.3);

	this.instance_10 = new lib.Symbol5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(418.1,310.3);

	var maskedShapeInstanceList = [this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},20).to({state:[{t:this.instance_10}]},143).to({state:[]},139).wait(172));

	// bg
	this.instance_11 = new lib.Bitmap3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(474));

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
		{src:"images/f3s12/Bitmap19.png?1529743116542", id:"Bitmap19"},
		{src:"images/f3s12/Bitmap28.png?1529743116542", id:"Bitmap28"},
		{src:"images/f3s12/Bitmap3.png?1529743116542", id:"Bitmap3"},
		{src:"images/f3s12/Bitmap30.png?1529743116542", id:"Bitmap30"},
		{src:"images/f3s12/Bitmap9.png?1529743116542", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1529743116542", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1529743116542", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1529743116542", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1529743116542", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1529743116542", id:"submitAns"},
		{src:"sounds/suspense.mp3?1529743116542", id:"suspense"},
		{src:"sounds/timeout.mp3?1529743116542", id:"timeout"}
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