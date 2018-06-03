(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



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


(lib.tEn4 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Can you identify the symbols of a flowchart?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 385;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-236,-10.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A+5AAMA9zAAA");
	this.shape.setTransform(-53.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A9iDGIAAihIilADIClh7IAAhtMA9zAAAIAAGG");
	this.shape_1.setTransform(-62.5,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9nDEIAAihIilACIClh6IAAhuMA90AAAIAAGHg");
	this.shape_2.setTransform(-62,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn4, new cjs.Rectangle(-269.5,-18.4,420.5,42.1), null);


(lib.tEn3 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("You are feeling hungry. Arrange the flowchart \nto make a butter cake.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 394;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/mAAMA/NAAA");
	this.shape.setTransform(-49.3,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A+PEqIAAkFIilADIClh7IAAjRMA/NAAAIAAJO");
	this.shape_1.setTransform(-58,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+UEoIAAkFIikACICkh6IAAjSMA/NAAAIAAJPg");
	this.shape_2.setTransform(-57.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn3, new cjs.Rectangle(-269.5,-28.4,428.5,62.1), null);


(lib.tEn2 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("You are feeling hungry. Arrange the flowchart\nto make some omelette.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 390;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-240.3,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/KAAMA+VAAA");
	this.shape.setTransform(-52.2,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A9zEyIAAkVIikACICkh6IAAjRMA+VAAAIAAJe");
	this.shape_1.setTransform(-60.9,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A93EvIAAkUIilACIClh6IAAjSMA+UAAAIAAJeg");
	this.shape_2.setTransform(-60.4,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn2, new cjs.Rectangle(-269.5,-28.4,421.5,63.7), null);


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
	this.myTxt = new cjs.Text("It’s raining and this is a perfect time for a \ncup of hot chocolate. Arrange the flowchart \nto make a cup of hot chocolate.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 387;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-225.3,-20.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EggjAADMBBHgAF");
	this.shape.setTransform(-43.2,62.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A/MHHIAAo+IilADIClh7IAAjSMBBHAAAIAAOB");
	this.shape_1.setTransform(-51.9,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A/Rh5IilACIClh7IAAjRMBBIAAAIAAOAMhBIAAHg");
	this.shape_2.setTransform(-51.4,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-28.4,436.7,93.4), null);


(lib.tEn0 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Answer the following questions.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 283;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-227.3,-18.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A3qAAMAvVAAA");
	this.shape.setTransform(-100.2,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A2TDhIAAhyIikACICkh6IAAjSMAvUAAAIAAG8");
	this.shape_1.setTransform(-108.9,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2XDeIAAhyIilACIClh6IAAjRMAvUAAAIAAG7g");
	this.shape_2.setTransform(-108.4,-5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn0, new cjs.Rectangle(-269.5,-28.4,327.5,47.4), null);


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


(lib.tBm4 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Bolehkah anda kenal pasti simbol-simbol \ndalam carta alir?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 356;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-238.7,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A8AAAMA4BAAA");
	this.shape.setTransform(-72.3,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A6pEqIAAkFIilADIClh7IAAjRMA4BAAAIAAJO");
	this.shape_1.setTransform(-81,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A6uEoIAAkFIikACICkh6IAAjSMA4BAAAIAAJPg");
	this.shape_2.setTransform(-80.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm4, new cjs.Rectangle(-269.5,-28.4,388.5,62.1), null);


(lib.tBm3 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Anda berasa lapar. Susun carta \nalir untuk membuat kek mentega.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 293;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-234.7,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A38AAMAv5AAA");
	this.shape.setTransform(-98.3,31.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A2lEqIAAkFIilADIClh7IAAjRMAv5AAAIAAJO");
	this.shape_1.setTransform(-107,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2qEoIAAkFIikACICkh6IAAjSMAv5AAAIAAJPg");
	this.shape_2.setTransform(-106.6,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm3, new cjs.Rectangle(-269.5,-28.4,329.5,62.1), null);


(lib.tBm2 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Anda berasa lapar. Susun carta \nalir untuk membuat telur dadar.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 298;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-231.3,-22.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4BAAMAwDAAA");
	this.shape.setTransform(-97.8,33.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A2qEyIAAkVIilACIClh6IAAjRMAwDAAAIAAJe");
	this.shape_1.setTransform(-106.5,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2vEvIAAkUIikACICkh6IAAjSMAwDAAAIAAJeg");
	this.shape_2.setTransform(-106.1,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm2, new cjs.Rectangle(-269.5,-28.4,338.5,63.7), null);


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
	this.myTxt = new cjs.Text("Hari sedang hujan dan masa ini sangat sesuai\nuntuk secawan coklat panas. Susun carta alir\nuntuk membuat secawan coklat panas.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 390;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-231.7,-20.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/1AAMA/rAAA");
	this.shape.setTransform(-47.8,63);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A+eHHIAAo+IilADIClh7IAAjSMA/rAAAIAAOI");
	this.shape_1.setTransform(-56.5,17.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+jHEIAAo9IilACIClh7IAAjRMA/rAAAIAAOHg");
	this.shape_2.setTransform(-56,17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-28.4,429.5,93.4), null);


(lib.tBm0 = function(mode,startPosition,loop) {
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
	this.myTxt = new cjs.Text("Jawab soalan-soalan yang berikut.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 296;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-236.7,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4XAAMAwvAAA");
	this.shape.setTransform(-95.6,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A3ADhIAAhyIilACIClh6IAAjSMAwvAAAIAAG8");
	this.shape_1.setTransform(-104.3,-5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A3FDeIAAhyIikACICkh6IAAjRMAwvAAAIAAG7g");
	this.shape_2.setTransform(-103.9,-5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm0, new cjs.Rectangle(-269.5,-28.4,331.9,47.4), null);


(lib.tAns5 = function(mode,startPosition,loop) {
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
		try {
			if (myLanguage==1){
				_this.gotoAndStop(0);
			}
		} catch (e) {
			_this.gotoAndStop(0);
		}
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(233.8,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(227.2,13.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(217.6,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_3.setTransform(209.6,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_4.setTransform(202.9,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_5.setTransform(199.1,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_6.setTransform(193.7,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(183.9,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_8.setTransform(172.4,13.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(163.5,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(156.6,11.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(142.7,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(133.4,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_13.setTransform(123.8,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660066").s().p("AgjAwQALgCAGgEQAFgFAFgJIACgHIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_14.setTransform(115,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_15.setTransform(103.1,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_16.setTransform(93.6,13.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_17.setTransform(86.1,12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(78.7,13.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(69.7,13.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgFAIg");
	this.shape_20.setTransform(60.8,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(46.5,13.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_22.setTransform(39.6,13.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(31.1,13.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_24.setTransform(23.7,12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(16.2,13.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(6.6,13.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(316.1,-8.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(306.5,-8.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(296.8,-6.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(287.5,-8.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_31.setTransform(278.3,-8.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_32.setTransform(269.1,-10.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_33.setTransform(259.4,-8.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_34.setTransform(250.2,-10.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(236.5,-8.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(226.9,-8.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_37.setTransform(218.9,-10.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_38.setTransform(210.6,-10.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_39.setTransform(201.2,-8.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#660066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIANAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_40.setTransform(193.7,-8.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_41.setTransform(188,-8.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_42.setTransform(178.8,-8.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_43.setTransform(169.4,-8.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(160.5,-8.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#660066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_45.setTransform(149,-8.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#660066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(132.8,-6.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(123.5,-8.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_48.setTransform(113.8,-8.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#660066").s().p("AgkAwQAMgCAFgFQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_49.setTransform(105,-6.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#660066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(91.5,-6.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_51.setTransform(82.2,-8.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_52.setTransform(72.9,-8.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#660066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_53.setTransform(63.8,-10.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_54.setTransform(54.1,-8.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#660066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_55.setTransform(44.8,-10.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#660066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(35,-6.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_57.setTransform(25.7,-8.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_58.setTransform(16.8,-8.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#660066").s().p("AgoA5IAAhxIAsAAQASAAAKAIQAKAJgBAPQABAPgKAJQgKAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgFQAHgGAAgKQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_59.setTransform(7.6,-10.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_60.setTransform(258.3,13.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#660066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_61.setTransform(241.1,15.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#660066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_62.setTransform(221.9,11.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_63.setTransform(213.1,13.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#660066").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_64.setTransform(192.1,13.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#660066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_65.setTransform(181.1,12.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_66.setTransform(173.4,13.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#660066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_67.setTransform(165.9,12.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_68.setTransform(141.1,13.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_69.setTransform(132.9,13.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#660066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_70.setTransform(118.1,15.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_71.setTransform(108.8,13.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_72.setTransform(102,13.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(90.1,13.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#660066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_74.setTransform(81.1,11.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#660066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_75.setTransform(73.5,12.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_76.setTransform(52.9,13.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_77.setTransform(44.2,13.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_78.setTransform(16,13.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_79.setTransform(259.4,-8.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(250.9,-6.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#660066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_81.setTransform(237.5,-10.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_82.setTransform(228.7,-8.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_83.setTransform(210.9,-8.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_84.setTransform(204.4,-10.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_85.setTransform(199.6,-9.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_86.setTransform(179.2,-8.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_87.setTransform(172.4,-8.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_88.setTransform(160.8,-8.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#660066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_89.setTransform(149.9,-8.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_90.setTransform(138.4,-8.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#660066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_91.setTransform(129.2,-10.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_92.setTransform(120.4,-8.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_93.setTransform(109.4,-9.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_94.setTransform(101.7,-8.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#660066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_95.setTransform(92.5,-10.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_96.setTransform(84.9,-9.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_97.setTransform(75.6,-8.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_98.setTransform(67.6,-8.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_99.setTransform(60.1,-9.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#660066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_100.setTransform(53.6,-8.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_101.setTransform(45.2,-8.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(17.5,-8.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#660066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_103.setTransform(7.6,-10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59},{t:this.shape_58,p:{x:16.8,y:-8.5}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:63.8,y:-10.3}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:160.5,y:-8.5}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:316.1}},{t:this.shape_26},{t:this.shape_25,p:{x:16.2,y:13.3}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:39.6}},{t:this.shape_21,p:{x:46.5,y:13.4}},{t:this.shape_20},{t:this.shape_19,p:{x:69.7}},{t:this.shape_18,p:{x:78.7,y:13.3}},{t:this.shape_17,p:{x:86.1}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:133.4}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:163.5,y:11.7}},{t:this.shape_8,p:{x:172.4}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:199.1}},{t:this.shape_4,p:{x:202.9,y:11.6}},{t:this.shape_3},{t:this.shape_2,p:{x:217.6}},{t:this.shape_1,p:{x:227.2}},{t:this.shape}]}).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_27,p:{x:26.7}},{t:this.shape_25,p:{x:36.1,y:-8.6}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_4,p:{x:185.4,y:-10.3}},{t:this.shape_21,p:{x:191.9,y:-8.5}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_18,p:{x:220.1,y:-8.6}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_9,p:{x:244,y:-10.2}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_53,p:{x:7.1,y:11.6}},{t:this.shape_78},{t:this.shape_17,p:{x:23}},{t:this.shape_8,p:{x:32.9}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_12,p:{x:61.8}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_22,p:{x:126.1}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_58,p:{x:149.5,y:13.4}},{t:this.shape_1,p:{x:158.5}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_5,p:{x:185.9}},{t:this.shape_64},{t:this.shape_44,p:{x:200.7,y:13.4}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_2,p:{x:231.1}},{t:this.shape_61},{t:this.shape_19,p:{x:250.1}},{t:this.shape_60}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-23.9,323,47.8);


(lib.tAns4 = function(mode,startPosition,loop) {
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
		try {
			if (myLanguage==1){
				_this.gotoAndStop(0);
			}
		} catch (e) {
			_this.gotoAndStop(0);
		}
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(214.4,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(204.7,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_2.setTransform(196.1,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_3.setTransform(187.6,2.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_4.setTransform(180.1,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_5.setTransform(172.7,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_6.setTransform(163.5,4.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(154.2,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_8.setTransform(146.4,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_9.setTransform(132.7,2.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_10.setTransform(125.2,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_11.setTransform(117.5,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(108.9,2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_13.setTransform(96,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(86.4,2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_15.setTransform(78.4,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_16.setTransform(70.1,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_17.setTransform(60.7,2.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_18.setTransform(53.2,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(47.5,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_20.setTransform(38.3,2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(28.9,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(20,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_23.setTransform(8.8,0.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(133,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(126.5,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(114.8,0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_27.setTransform(109.1,2.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(91.2,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_29.setTransform(41.4,2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#660066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_30.setTransform(33,2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(27,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(20.1,0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660066").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_33.setTransform(4.1,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22,p:{x:20}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:96}},{t:this.shape_12,p:{x:108.9}},{t:this.shape_11,p:{x:117.5}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:154.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:180.1}},{t:this.shape_3},{t:this.shape_2,p:{x:196.1}},{t:this.shape_1},{t:this.shape,p:{x:214.4}}]}).to({state:[{t:this.shape_33},{t:this.shape_13,p:{x:10.8}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_4,p:{x:49.1}},{t:this.shape_22,p:{x:56.4}},{t:this.shape_12,p:{x:64.6}},{t:this.shape_11,p:{x:77.4}},{t:this.shape_28},{t:this.shape_7,p:{x:100.6}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_2,p:{x:120.6}},{t:this.shape_25},{t:this.shape_24},{t:this.shape,p:{x:142.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12.9,323,25.9);


(lib.tAns3 = function(mode,startPosition,loop) {
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
		try {
			if (myLanguage==1){
				_this.gotoAndStop(0);
			}
		} catch (e) {
			_this.gotoAndStop(0);
		}
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape.setTransform(186.7,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_1.setTransform(178.4,2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_2.setTransform(170,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(161.5,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_4.setTransform(154.6,2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_5.setTransform(146.5,4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_6.setTransform(132.7,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_7.setTransform(125.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_8.setTransform(117.5,2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_9.setTransform(108.9,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(96,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(86.4,2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_12.setTransform(78.4,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_13.setTransform(70.1,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_14.setTransform(60.7,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_15.setTransform(53.2,2.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(47.5,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_17.setTransform(38.3,2.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(28.9,2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(20,2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660066").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_20.setTransform(8.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_21.setTransform(132.1,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(94.2,2.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgFgHg");
	this.shape_23.setTransform(74.6,1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_24.setTransform(49.8,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(41.6,2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_26.setTransform(34.8,2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_27.setTransform(26.8,4.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(17.5,2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660066").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLAEQAFAAADADQAEAEACAGIAPAngAgfgDIAfAAQAaABAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_29.setTransform(7.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19,p:{x:20}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:96}},{t:this.shape_9,p:{x:108.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:146.5}},{t:this.shape_4,p:{x:154.6}},{t:this.shape_3,p:{x:161.5}},{t:this.shape_2,p:{x:170}},{t:this.shape_1,p:{x:178.4}},{t:this.shape,p:{x:186.7}}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_19,p:{x:58.2}},{t:this.shape_10,p:{x:67.2}},{t:this.shape_23},{t:this.shape_9,p:{x:81.4}},{t:this.shape_22},{t:this.shape_5,p:{x:108.4}},{t:this.shape_4,p:{x:116.5}},{t:this.shape_3,p:{x:123.4}},{t:this.shape_21},{t:this.shape_1,p:{x:140.3}},{t:this.shape_2,p:{x:148.5}},{t:this.shape,p:{x:156.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12.9,323,25.9);


(lib.tAns2 = function(mode,startPosition,loop) {
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
		try {
			if (myLanguage==1){
				_this.gotoAndStop(0);
			}
		} catch (e) {
			_this.gotoAndStop(0);
		}
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape.setTransform(230.6,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_1.setTransform(223.2,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_2.setTransform(214,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_3.setTransform(206.1,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_4.setTransform(198.8,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(189.6,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_6.setTransform(176.2,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_7.setTransform(166.5,2.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_8.setTransform(159.1,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(151.3,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_10.setTransform(139.7,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_11.setTransform(132.3,2.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_12.setTransform(123.1,4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_13.setTransform(113.4,2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_14.setTransform(106.9,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(96,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(86.4,2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_17.setTransform(78.4,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_18.setTransform(70.1,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_19.setTransform(60.7,2.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_20.setTransform(53.2,2.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(47.5,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_22.setTransform(38.3,2.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_23.setTransform(28.9,2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_24.setTransform(20,2.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660066").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_25.setTransform(8.8,0.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_26.setTransform(196.2,1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_27.setTransform(188.8,2.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_28.setTransform(171.7,1.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_29.setTransform(144,2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_30.setTransform(136,2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_31.setTransform(124.4,1.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_32.setTransform(81.4,2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgFgHg");
	this.shape_33.setTransform(74.6,1.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_34.setTransform(49.8,2.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(41.6,2.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_36.setTransform(34.8,2.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_37.setTransform(26.8,4.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(17.5,2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#660066").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLAEQAFAAADADQAEAEACAGIAPAngAgfgDIAfAAQAaABAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_39.setTransform(7.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24,p:{x:20}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:96}},{t:this.shape_14,p:{x:106.9}},{t:this.shape_13,p:{x:113.4}},{t:this.shape_12,p:{x:123.1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:176.2}},{t:this.shape_5,p:{x:189.6}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:214}},{t:this.shape_1,p:{x:223.2}},{t:this.shape}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_24,p:{x:58.2}},{t:this.shape_15,p:{x:67.2}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_14,p:{x:91.6}},{t:this.shape_13,p:{x:98.1}},{t:this.shape_12,p:{x:107.8}},{t:this.shape_6,p:{x:117}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_5,p:{x:155.2}},{t:this.shape_1,p:{x:164.4}},{t:this.shape_28},{t:this.shape_2,p:{x:179.6}},{t:this.shape_27},{t:this.shape_26}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12.9,323,25.9);


(lib.tAns1 = function(mode,startPosition,loop) {
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
		try {
			if (myLanguage==1){
				_this.gotoAndStop(0);
			}
		} catch (e) {
			_this.gotoAndStop(0);
		}
		function onSetBm(e){
			_this.gotoAndStop(0);
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(90.3,13.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(80.7,13.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(73.7,13.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(68.4,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_4.setTransform(61.9,11.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_5.setTransform(53.7,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(43.9,13.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(34.2,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(24.9,13.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_9.setTransform(16,13.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_10.setTransform(7,15.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_11.setTransform(249.6,-8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(239.9,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_13.setTransform(232.5,-9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(224.7,-8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(211.2,-8.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_16.setTransform(201.6,-8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#660066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(192,-8.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#660066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_18.setTransform(185.5,-10.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_19.setTransform(179,-8.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#660066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_20.setTransform(167.3,-8.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_21.setTransform(157.9,-8.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(150.2,-8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(141.2,-6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#660066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_24.setTransform(128.6,-10.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(121.9,-10.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_26.setTransform(117.1,-9.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#660066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_27.setTransform(112.5,-10.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_28.setTransform(107.7,-9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_29.setTransform(96,-8.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#660066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(86.4,-8.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_31.setTransform(78.4,-10.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_32.setTransform(70.1,-10.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#660066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_33.setTransform(60.7,-8.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#660066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_34.setTransform(53.2,-8.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(47.5,-8.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#660066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_36.setTransform(38.3,-8.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#660066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_37.setTransform(28.9,-8.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(20,-8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#660066").s().p("AAqA5IAAhTIglBTIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_39.setTransform(8.8,-10.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_40.setTransform(227.8,1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_41.setTransform(207.4,2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_42.setTransform(198.2,4.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#660066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_43.setTransform(184,0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#660066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(146.8,2.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#660066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_45.setTransform(135.1,1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_46.setTransform(114.1,1.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_47.setTransform(107.4,2.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_48.setTransform(81.4,2.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#660066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgFgHg");
	this.shape_49.setTransform(74.6,1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#660066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_50.setTransform(49.8,2.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#660066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_51.setTransform(34.8,2.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#660066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_52.setTransform(26.8,4.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#660066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(17.5,2.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#660066").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLAEQAFAAADADQAEAEACAGIAPAngAgfgDIAfAAQAaABAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_54.setTransform(7.9,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38,p:{x:20,y:-8.5}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:150.2,y:-8.5}},{t:this.shape_21,p:{x:157.9,y:-8.6}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:211.2,y:-8.6}},{t:this.shape_14,p:{x:224.7,y:-8.5}},{t:this.shape_13},{t:this.shape_12,p:{x:239.9,y:-8.5}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:16,y:13.4}},{t:this.shape_8,p:{x:24.9,y:13.3}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:68.4,y:11.7}},{t:this.shape_2,p:{x:73.7,y:13.3}},{t:this.shape_1},{t:this.shape,p:{x:90.3,y:13.3}}]}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_38,p:{x:41.6,y:2.4}},{t:this.shape_50},{t:this.shape_22,p:{x:58.2,y:2.4}},{t:this.shape_15,p:{x:67.2,y:2.4}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_14,p:{x:94.2,y:2.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_12,p:{x:121.6,y:2.4}},{t:this.shape_21,p:{x:130,y:2.4}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_2,p:{x:154.8,y:2.4}},{t:this.shape_9,p:{x:165.7,y:2.4}},{t:this.shape_8,p:{x:174.7,y:2.4}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_3,p:{x:213.9,y:0.8}},{t:this.shape,p:{x:220.4,y:2.4}},{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-23.9,323,47.8);


(lib.recEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape.setTransform(32.1,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_1.setTransform(25,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgQAAIgDAkIAPAAIgCARg");
	this.shape_2.setTransform(18.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgHBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_3.setTransform(10.9,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHAsIARgsIARAAIAHAsIABAAIAPgsIASAAIgZBFg");
	this.shape_4.setTransform(1.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBVIAOAAIgCAQg");
	this.shape_5.setTransform(-9.8,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_6.setTransform(-14.1,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_7.setTransform(-20.5,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAxIAKhhIA0AAIAPAKIgDAeIgNAHIAAABIALAGIgDAhIgRAKgAgRAgIAdAAIADgZIgdAAgAgNgJIAdAAIADgWIgdAAg");
	this.shape_8.setTransform(-29.2,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_9.setTransform(50.4,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_10.setTransform(40.4,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAjIgPgKIAFgxIARgKIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_11.setTransform(19.1,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_12.setTransform(7.6,7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_13.setTransform(-1.1,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_14.setTransform(-9.3,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_15.setTransform(-19.7,8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_16.setTransform(-27,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_17.setTransform(-35.4,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_18.setTransform(-43.9,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAZIgSAKg");
	this.shape_19.setTransform(-52,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPAbIAFg1IAaAAIgBALIgTAqg");
	this.shape_20.setTransform(61.4,-2.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_21.setTransform(56.5,-6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_22.setTransform(49.4,-6.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_23.setTransform(41.4,-7.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHArIARgrIARAAIAHArIABAAIAPgrIASAAIgZBFg");
	this.shape_24.setTransform(32,-6.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_25.setTransform(22,-6.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIACAFIAKgFIASAAIAQAJIgGA0IgRAJIgSAAIgJgGIgEAhgAgMAGIAYAAIAFgmIgZAAg");
	this.shape_26.setTransform(13.5,-4.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_27.setTransform(1.7,-6.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_28.setTransform(-6.8,-6.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOAjIgPgKIAFgyIARgJIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_29.setTransform(-14.3,-6.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_30.setTransform(-22.3,-6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOAjIgPgKIAGgyIAQgJIAlAAIgCAQIghAAIgEAkIAhAAIgBARg");
	this.shape_31.setTransform(-29.9,-6.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_32.setTransform(-41.3,-7.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_33.setTransform(-49.8,-7.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAaAxIgGgVIgjAAIgKAVIgTAAIAshhIAUAAIAZBhgAgIALIAYAAIgIgig");
	this.shape_34.setTransform(-59.3,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:25,y:1.3}},{t:this.shape,p:{x:32.1,y:1.4}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape,p:{x:25.7,y:8.9}},{t:this.shape_1,p:{x:32.2,y:8.9}},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(3));

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,15,0,-14.9).s().p("AnzCGIAAkLIPnAAIAAELg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,20.9,0,-20.9).s().p("ArUC7IAAl1IWpAAIAAF1g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-13.4,183.1,26.8);


(lib.rec3_3 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape.setTransform(23.3,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_1.setTransform(15.1,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_2.setTransform(6.7,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_3.setTransform(-1.7,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_4.setTransform(-10.3,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_5.setTransform(-16.2,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIATAAIAOAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAZAAIADgmIgYAAg");
	this.shape_6.setTransform(-22.8,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgIIADgZIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAaIgSAJg");
	this.shape_7.setTransform(33.2,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgHBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_8.setTransform(25.3,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgMAAIABgQIANAAIACgNIATgLIgDAYIAPAAIgBAQIgPAAIgFAkIAQAAIgBAQg");
	this.shape_9.setTransform(18.2,0.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_10.setTransform(11,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_11.setTransform(1.3,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_12.setTransform(-4.9,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_13.setTransform(-16.5,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_14.setTransform(-24.7,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_15.setTransform(-32.1,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_16.setTransform(32.2,-13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgRAAIgOgJIAFg0IARgJIAQAAIAJAFIALgFIAJAAIgHBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_17.setTransform(24,-13.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_18.setTransform(16.2,-15.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgSAAIgQgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_19.setTransform(7.9,-12.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_20.setTransform(-0.7,-13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgRAAIgOgJIAFg0IARgJIAQAAIAJAFIALgFIAJAAIgHBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_21.setTransform(-8.9,-13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_22.setTransform(-17.1,-15.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_23.setTransform(-23.4,-15.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAOAxIAFgqIgmAAIgEAqIgUAAIAKhhIATAAIgDAnIAlAAIAEgnIAUAAIgLBhg");
	this.shape_24.setTransform(-30.5,-15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgQIANAAIACgMIATgMIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_25.setTransform(23.4,15.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_26.setTransform(16.2,16.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_27.setTransform(9.8,14.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIADAFIAJgFIASAAIAQAJIgGA0IgRAJIgSAAIgJgGIgDAhgAgMAGIAYAAIAFgmIgYAAg");
	this.shape_28.setTransform(2.9,17.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgHBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_29.setTransform(-8.9,16.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_30.setTransform(-29.3,16.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_31.setTransform(25,1.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_32.setTransform(9.2,1.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgOAjIgPgJIAFgzIASgJIAkAAIgBAQIgiAAIgEAkIAhAAIgBARg");
	this.shape_33.setTransform(1.6,1.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_34.setTransform(-9.8,1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJAzIAGg1IgYAAIgGA1IgTAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_35.setTransform(-18,-0.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgMAAIABgQIANAAIACgNIATgLIgDAYIAPAAIgBAQIgQAAIgEAkIAQAAIgBAQg");
	this.shape_36.setTransform(-25.1,0.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_37.setTransform(15.5,-13.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQAjIgShFIATAAIALAtIAUgtIAUAAIgiBFg");
	this.shape_38.setTransform(8.2,-13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBARIgYAAIgFA0g");
	this.shape_39.setTransform(1.5,-13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_40.setTransform(-5.6,-13.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAyIgPgJIACgTIAUAAIgBALIAdAAIACgZIgfAAIgPgIIAEgnIARgJIAjAAIAPAJIgCATIgUAAIACgMIgcAAIgDAXIAfAAIAQAJIgFApIgRAJg");
	this.shape_41.setTransform(-14.1,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:-24.7,y:1.4}},{t:this.shape_13,p:{x:-16.5}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:23.3}}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_13,p:{x:17.5}},{t:this.shape_31},{t:this.shape_30},{t:this.shape,p:{x:-21}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_14,p:{x:30.2,y:16.4}}]},1).wait(1));

	// Layer 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,30.2,0,-30.2).s().p("An1EPIAAodIPrAAIAAIdg");

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(2));

	// Layer_4
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


(lib.rec2_3 = function(mode,startPosition,loop) {
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape.setTransform(34.8,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_1.setTransform(26.8,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQAjIgShFIATAAIALAtIAUgtIAUAAIgiBFg");
	this.shape_2.setTransform(19.5,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_3.setTransform(11.1,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_4.setTransform(-2.7,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_5.setTransform(-12.7,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBUIAOAAIgCARg");
	this.shape_6.setTransform(-19.1,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_7.setTransform(-25.7,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_8.setTransform(-33.9,14.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_9.setTransform(31.7,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_10.setTransform(25.5,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_11.setTransform(13.2,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_12.setTransform(5,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_13.setTransform(-3.5,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_14.setTransform(-11.8,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_15.setTransform(-20,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_16.setTransform(-28.5,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_17.setTransform(26.7,-13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAkIgKgGIgJAGIgRAAIgQgJIAGg0IARgJIAQAAIAKAFIAKgFIAKAAIgJBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_18.setTransform(18.5,-13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_19.setTransform(10.8,-15.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_20.setTransform(3.1,-15.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AARAkIgJgGIgJAGIgSAAIgPgJIAGg0IARgJIAQAAIAKAFIAKgFIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_21.setTransform(-5.2,-13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAAAuIgQgJIAFgrIgMAAIABgRIANAAIABgMIAUgKIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCAQg");
	this.shape_22.setTransform(-12.3,-14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_23.setTransform(-19.4,-13.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAxIAKhhIASAAIgHBQIAgAAIgBARg");
	this.shape_24.setTransform(-26.7,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,30.2,0,-30.2).s().p("AodEPIAAodIQ7AAIAAIdg");

	this.timeline.addTween(cjs.Tween.get(this.shape_25).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.2,-27,108.4,54.2);


(lib.rec2_2 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape.setTransform(60.6,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgHBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_1.setTransform(52.3,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_2.setTransform(44.6,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_3.setTransform(36.2,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_4.setTransform(30.3,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_5.setTransform(22.1,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_6.setTransform(8.2,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_7.setTransform(0,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_8.setTransform(-7.7,7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKAzIAFg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAKgGIASAAIAPAJIgGA9g");
	this.shape_9.setTransform(-16.2,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_10.setTransform(-24.5,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAzIgKgFIgKAFIgJAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgGA0IgRAJgAgOAjIAZAAIAEgmIgYAAg");
	this.shape_11.setTransform(-33,7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_12.setTransform(-43.2,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_13.setTransform(-53.2,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgMIATgMIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_14.setTransform(-60.3,7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_15.setTransform(61.7,-6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_16.setTransform(53.5,-6.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_17.setTransform(45.3,-7.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_18.setTransform(35.4,-7.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_19.setTransform(31.1,-7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_20.setTransform(24.5,-6.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_21.setTransform(16.1,-6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_22.setTransform(8.4,-7.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_23.setTransform(-3.7,-6.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_24.setTransform(-11.9,-6.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_25.setTransform(-19.7,-7.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgJIADgYIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAZIgSAKg");
	this.shape_26.setTransform(-27.8,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_27.setTransform(-35.6,-6.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_28.setTransform(-44.1,-6.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_29.setTransform(-52.3,-6.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmAxIAKhhIAzAAIAQAJIgFArIgSAJIgeAAIgEAkgAgNgDIAcAAIADgcIgcAAg");
	this.shape_30.setTransform(-60.6,-7.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBUIAOAAIgCARg");
	this.shape_31.setTransform(35.5,7.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_32.setTransform(24.8,8.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_33.setTransform(4.6,7.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgJBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_34.setTransform(-4,8.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_35.setTransform(-15.9,7.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgJBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_36.setTransform(-32.8,8.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_37.setTransform(46.3,-6.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIATAAIAOAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAZAAIADgmIgYAAg");
	this.shape_38.setTransform(37.6,-4.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_39.setTransform(25.8,-4.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgfAxIAQghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_40.setTransform(5.7,-4.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_41.setTransform(-1.1,-6.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSAzIAGg1IgNAAIABgQIANAAIADgXIAQgJIASAAIgBAQIgQAAIgCAQIAQAAIgCAQIgPAAIgGA1g");
	this.shape_42.setTransform(-6.7,-7.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAAvIgQgKIAFgrIgMAAIABgQIANAAIABgNIAUgLIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_43.setTransform(-28.5,-7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_44.setTransform(-35.8,-6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_45.setTransform(-44,-6.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAOAxIAEgqIglAAIgEAqIgUAAIAKhhIAUAAIgFAnIAmAAIAEgnIAUAAIgLBhg");
	this.shape_46.setTransform(-52.8,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-11.9}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:35.4}},{t:this.shape_17,p:{x:45.3,y:-7.7}},{t:this.shape_16},{t:this.shape_15,p:{x:61.7}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:8.2,y:8.9}},{t:this.shape_5},{t:this.shape_4,p:{x:30.3}},{t:this.shape_3,p:{x:36.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_24,p:{x:-17.8}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_18,p:{x:11.3}},{t:this.shape_15,p:{x:17.2}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_6,p:{x:54.5,y:-6.2}},{t:this.shape_36},{t:this.shape_3,p:{x:-24.6}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_17,p:{x:13,y:7.3}},{t:this.shape_32},{t:this.shape_4,p:{x:31.2}},{t:this.shape_31}]},1).wait(1));

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,21.9,0,-21.9).s().p("ArHDEIAAmHIWPAAIAAGHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.3,-19.6,156.6,39.2);


(lib.rec2_1 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape.setTransform(49.9,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_1.setTransform(41.6,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_2.setTransform(33.9,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIAQgJIASAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_3.setTransform(25.5,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_4.setTransform(17,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_5.setTransform(8.8,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIADAFIAKgFIAOAAIALAHIANgHIAOAAIAQAJIgHA8g");
	this.shape_6.setTransform(-1.5,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_7.setTransform(-17.1,8.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_8.setTransform(-27.1,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBUIAOAAIgCARg");
	this.shape_9.setTransform(-33.5,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_10.setTransform(-40.1,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_11.setTransform(-48.3,7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_12.setTransform(45.6,-7.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_13.setTransform(39.4,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_14.setTransform(28.8,-6.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_15.setTransform(21.4,-6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBUIAOAAIgCARg");
	this.shape_16.setTransform(15.1,-7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_17.setTransform(8.7,-6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgNIATgLIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgCARg");
	this.shape_18.setTransform(1.9,-7.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_19.setTransform(-9.1,-6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_20.setTransform(-17.4,-6.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAjIgPgKIAFgyIARgJIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_21.setTransform(-25,-6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_22.setTransform(-32.9,-6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAPAxIgagmIgKALIgDAbIgUAAIAKhhIAUAAIgFAsIAAAAIApgsIAXAAIgrAuIAlAzg");
	this.shape_23.setTransform(-41.5,-7.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHArIARgrIARAAIAHArIABAAIAPgrIASAAIgZBFg");
	this.shape_24.setTransform(20.8,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_25.setTransform(10.9,8.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgFAzIgKgFIgKAFIgJAAIAKhlIAUAAIgEAlIAKgGIASAAIAPAJIgFA0IgSAJgAgOAjIAZAAIAEgmIgYAAg");
	this.shape_26.setTransform(2.5,7.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgJIADgYIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAZIgSAKg");
	this.shape_27.setTransform(30.3,-6.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_28.setTransform(13.9,-4.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgNIATgLIgCAYIAQAAIgCAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_29.setTransform(-4.8,-7.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgHBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_30.setTransform(-12,-6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_31.setTransform(-20.2,-6.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgmAxIAKhhIA0AAIAPAJIgDAfIgNAHIAAAAIALAGIgDAiIgRAKgAgRAgIAdAAIADgZIgdAAgAgNgJIAdAAIADgWIgdAAg");
	this.shape_32.setTransform(-28.7,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:8.7}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:45.6,y:-7.7}},{t:this.shape_11},{t:this.shape_10,p:{x:-40.1}},{t:this.shape_9,p:{x:-33.5}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:17}},{t:this.shape_3,p:{x:25.5,y:10.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_17,p:{x:5.7}},{t:this.shape_28},{t:this.shape_3,p:{x:22.4,y:-4.8}},{t:this.shape_27},{t:this.shape_12,p:{x:-27.5,y:7.3}},{t:this.shape_4,p:{x:-21.6}},{t:this.shape_10,p:{x:-9.5}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_9,p:{x:28.3}}]},1).wait(1));

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,21.9,0,-21.9).s().p("AozDEIAAmHIRnAAIAAGHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(2));

	// Layer_4
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


(lib.rec1_3 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape.setTransform(27.3,21.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_1.setTransform(18.9,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_2.setTransform(11.2,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgTAAIgPgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_3.setTransform(2.9,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_4.setTransform(-5.7,22.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAKAFIAKgFIAKAAIgJBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_5.setTransform(-13.9,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAPAJIgGA8g");
	this.shape_6.setTransform(-24.1,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgGA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_7.setTransform(46.5,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_8.setTransform(36.4,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_9.setTransform(30.1,6.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_10.setTransform(23.5,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_11.setTransform(15.2,6.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_12.setTransform(3,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_13.setTransform(-5.4,9.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_14.setTransform(-13.6,7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAvIgQgKIAFgrIgMAAIABgQIANAAIABgMIAUgMIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_15.setTransform(-20.4,6.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_16.setTransform(-27.8,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_17.setTransform(-35.9,7.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_18.setTransform(-45.8,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_19.setTransform(26.8,-7.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_20.setTransform(18.6,-7.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_21.setTransform(10.4,-8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_22.setTransform(-0.3,-7.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_23.setTransform(-7.6,-7.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgBAzIgPgJIAKhcIASAAIgJBUIAOAAIgCARg");
	this.shape_24.setTransform(-13.9,-8.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_25.setTransform(-20.4,-7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAAAuIgQgJIAFgrIgMAAIABgQIANAAIABgNIAUgLIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCAQg");
	this.shape_26.setTransform(-27.2,-8.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgPAbIAGg1IAZAAIgBALIgTAqg");
	this.shape_27.setTransform(46.5,-18.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_28.setTransform(40.1,-20.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_29.setTransform(31.5,-22.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_30.setTransform(23.3,-22.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIATAAIAOAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAZAAIADgmIgYAAg");
	this.shape_31.setTransform(14.7,-20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_32.setTransform(6.7,-22.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAAuIgQgJIAGgrIgOAAIACgRIANAAIACgMIASgKIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgBAQg");
	this.shape_33.setTransform(-0.1,-23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_34.setTransform(-11.1,-22.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AASAkIgKgGIgJAGIgRAAIgQgJIAGg0IARgJIAQAAIAKAFIAKgFIAKAAIgIBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_35.setTransform(-19.4,-22.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAjIgPgJIAFgzIARgJIAlAAIgCARIghAAIgEAkIAiAAIgCAQg");
	this.shape_36.setTransform(-27,-22.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AARAkIgJgGIgJAGIgSAAIgPgJIAGg0IARgJIAQAAIAKAFIAKgFIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_37.setTransform(-34.9,-22.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAQAxIgbgmIgKAMIgEAaIgTAAIAKhhIATAAIgEAsIAAAAIApgsIAXAAIgsAuIAmAzg");
	this.shape_38.setTransform(-43.5,-23.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBUIAOAAIgCARg");
	this.shape_39.setTransform(28.3,14.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHArIARgrIARAAIAHArIABAAIAPgrIASAAIgZBFg");
	this.shape_40.setTransform(20.8,16.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_41.setTransform(10.9,16.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgFAzIgKgFIgKAFIgJAAIAKhlIAUAAIgEAlIAKgGIASAAIAPAJIgFA0IgSAJgAgOAjIAZAAIAEgmIgYAAg");
	this.shape_42.setTransform(2.5,14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_43.setTransform(-27.5,14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAAuIgQgJIAGgrIgOAAIACgQIANAAIABgNIATgLIgCAYIAQAAIgCAQIgPAAIgEAkIAPAAIgCAQg");
	this.shape_44.setTransform(37.5,0.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgMAAIABgQIANAAIACgNIATgLIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCAQg");
	this.shape_45.setTransform(31.5,0.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAzIgJgFIgLAFIgJAAIALhlIATAAIgEAlIAKgGIASAAIAPAJIgFA0IgRAJgAgNAjIAYAAIAEgmIgYAAg");
	this.shape_46.setTransform(15.8,-0.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgJBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_47.setTransform(-13,1.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgIIADgZIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAaIgSAJg");
	this.shape_48.setTransform(-24.8,1.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIASgJIARAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_49.setTransform(-41.1,2.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgPAbIAFg1IAaAAIgBALIgTAqg");
	this.shape_50.setTransform(51.4,-10.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBARIgYAAIgFA0g");
	this.shape_51.setTransform(46.6,-13.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgSAkIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEglIgXAAg");
	this.shape_52.setTransform(30.8,-13.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgBAzIgPgJIAJhcIATAAIgJBVIAOAAIgCAQg");
	this.shape_53.setTransform(24.6,-15.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgSAzIAGg0IgNAAIABgRIANAAIADgXIAQgJIASAAIgBAQIgQAAIgCAQIAQAAIgCARIgPAAIgGA0g");
	this.shape_54.setTransform(19.6,-15.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_55.setTransform(1.3,-15.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgNAAIACgRIANAAIACgMIASgKIgCAWIAPAAIgBARIgPAAIgFAkIAQAAIgBAQg");
	this.shape_56.setTransform(-25,-14.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AARAkIgJgGIgJAGIgSAAIgPgJIAGg0IARgJIAQAAIAKAFIAKgFIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_57.setTransform(-32.2,-13.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgmAxIAKhhIA0AAIAPAKIgDAeIgNAHIAAAAIALAHIgDAiIgRAJgAgRAgIAdAAIADgZIgdAAgAgNgJIAdAAIADgWIgdAAg");
	this.shape_58.setTransform(-48.9,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37,p:{x:-34.9,y:-22.2}},{t:this.shape_36,p:{x:-27,y:-22.2}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:6.7,y:-22.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-20.4,y:-7.2}},{t:this.shape_24},{t:this.shape_23,p:{x:-7.6,y:-7.1}},{t:this.shape_22,p:{x:-0.3,y:-7.1}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-35.9,y:7.9}},{t:this.shape_16,p:{x:-27.8,y:7.9}},{t:this.shape_15},{t:this.shape_14,p:{x:-13.6,y:7.9}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:15.2,y:6.3}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:36.4,y:7.9}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:-5.7,y:22.9}},{t:this.shape_3,p:{x:2.9,y:24.3}},{t:this.shape_2},{t:this.shape_1,p:{x:18.9,y:23}},{t:this.shape}]}).to({state:[{t:this.shape_58},{t:this.shape_32,p:{x:-40.4,y:-13.7}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_36,p:{x:-14.7,y:-13.6}},{t:this.shape_37,p:{x:-7,y:-13.6}},{t:this.shape_55},{t:this.shape_25,p:{x:8.7,y:-13.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_23,p:{x:39.2,y:-13.6}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_17,p:{x:-49.4,y:1.4}},{t:this.shape_49},{t:this.shape_3,p:{x:-32.7,y:2.8}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_16,p:{x:-4.8,y:1.4}},{t:this.shape_11,p:{x:3.9,y:-0.2}},{t:this.shape_46},{t:this.shape_1,p:{x:24.2,y:1.4}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_14,p:{x:44.3,y:1.4}},{t:this.shape_22,p:{x:51.5,y:1.4}},{t:this.shape_43},{t:this.shape_4,p:{x:-21.6,y:16.4}},{t:this.shape_8,p:{x:-9.5,y:16.5}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).wait(1));

	// Layer 1
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,33.1,0,-33).s().p("ApKEoIAApPISVAAIAAJPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(2));

	// Layer_4
	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-35.6,123,69.2);


(lib.rec1_1 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape.setTransform(40,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_1.setTransform(32.6,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBVIAOAAIgCAQg");
	this.shape_2.setTransform(26.3,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_3.setTransform(19.9,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIACgLIATgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_4.setTransform(13.1,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIAQgJIASAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_5.setTransform(2.1,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_6.setTransform(-6.4,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_7.setTransform(-14.5,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_8.setTransform(-21,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_9.setTransform(-28.4,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAxIgPgJIAIhQIARgJIAnAAIAPAJIgCAVIgTAAIABgNIggAAIgHBBIAgAAIACgSIgPAAIAAgQIAkAAIgEApIgSAJg");
	this.shape_10.setTransform(-37,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_11.setTransform(25,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_12.setTransform(17.1,2.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_13.setTransform(8.6,2.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgxBhg");
	this.shape_14.setTransform(-10.7,2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiAxIAKhhIA7AAIgCARIgnAAIgDAWIAfAAIgBAQIgfAAIgEAqg");
	this.shape_15.setTransform(-23.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:19.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:40}}]}).to({state:[{t:this.shape_15},{t:this.shape,p:{x:-17.4}},{t:this.shape_14},{t:this.shape_3,p:{x:0.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,13.5,0,-13.4).s().p("An1B5IAAjxIPrAAIAADxg");

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(2));

	// Layer_4
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


(lib.rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape.setTransform(41.6,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_1.setTransform(36.6,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAKAFIAKgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_2.setTransform(30.3,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_3.setTransform(18.2,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAKAFIAKgFIAKAAIgJBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_4.setTransform(10,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_5.setTransform(2.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_6.setTransform(-5.9,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFgzIARgJIAQAAIAJAFIALgFIAKAAIgIBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_7.setTransform(-13.7,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_8.setTransform(-22.2,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGgzIARgJIAQAAIAKAFIAKgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_9.setTransform(-30.4,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AglAxIAKhhIAzAAIAOAKIgEAqIgRAJIggAAIgDAkgAgNgCIAcAAIADgdIgbAAg");
	this.shape_10.setTransform(-38.7,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_11.setTransform(40.1,8.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_12.setTransform(0.6,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_13.setTransform(-7.6,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_14.setTransform(-19.8,8.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_15.setTransform(-26.2,7.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_16.setTransform(-32.8,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgSAAIgQgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_17.setTransform(-41.2,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgPAbIAFg1IAaAAIgBALIgTAqg");
	this.shape_18.setTransform(69.3,-2.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_19.setTransform(62.8,-6.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_20.setTransform(55.2,-7.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_21.setTransform(46.8,-6.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_22.setTransform(39.1,-7.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_23.setTransform(27.8,-7.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_24.setTransform(19.4,-6.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgFAzIgKgFIgKAFIgJAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgGA0IgQAJgAgNAjIAYAAIAEgmIgYAAg");
	this.shape_25.setTransform(11,-7.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_26.setTransform(4.2,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_27.setTransform(-2.9,-6.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgJIADgYIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAZIgSAKg");
	this.shape_28.setTransform(-10.8,-6.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_29.setTransform(-22.4,-7.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_30.setTransform(-30.7,-6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgFAzIgJgFIgLAFIgJAAIALhlIATAAIgEAlIAKgGIASAAIAPAJIgFA0IgRAJgAgNAjIAYAAIAEgmIgYAAg");
	this.shape_31.setTransform(-39.2,-7.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_32.setTransform(-49.4,-6.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_33.setTransform(-59.5,-6.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAxIAIhQIgaAAIABgRIBIAAIgCARIgaAAIgJBQg");
	this.shape_34.setTransform(-67.1,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:2.2,y:-0.2}},{t:this.shape_4},{t:this.shape_3,p:{x:18.2,y:1.3}},{t:this.shape_2},{t:this.shape_1,p:{x:36.6,y:-0.2}},{t:this.shape,p:{x:41.6,y:1.4}}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{x:8.8,y:8.9}},{t:this.shape_5,p:{x:20.9,y:7.3}},{t:this.shape,p:{x:27.6,y:8.9}},{t:this.shape_1,p:{x:32.4,y:7.3}},{t:this.shape_11}]},1).to({state:[]},1).wait(3));

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,15,0,-14.9).s().p("An7CGIAAkLIP3AAIAAELg");

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,21.9,0,-21.9).s().p("AsXDEIAAmHIYvAAIAAGHg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.2,-19.6,100.4,39.2);


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


(lib.jadualflowchart = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKApIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAGIAMgGIATAAIARALIgHBFg");
	this.shape.setTransform(235.5,-102.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_1.setTransform(226.1,-102);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghA4IACgSIAnAAIACgWIgLAGIgVAAIgRgLIAGg3IATgLIAUAAIALAGIAMgGIALAAIgLBlIgUAKgAgQADIAcAAIAEgnIgcAAg");
	this.shape_2.setTransform(216.6,-100.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKApIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAGIAMgGIATAAIARALIgHBFg");
	this.shape_3.setTransform(206.8,-102.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_4.setTransform(197.4,-102);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIACAHIALgHIARAAIgCATIgbAAIgGA8g");
	this.shape_5.setTransform(189.8,-102);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSApIgRgLIAGg6IAUgLIAcAAIASALIgFAkIgsAAIgBAOIAsAAIgCATgAgJgHIAVAAIABgNIgVAAg");
	this.shape_6.setTransform(181.6,-102.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAKApIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAGIAMgGIATAAIARALIgHBFg");
	this.shape_7.setTransform(172.2,-102.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSApIgRgLIAGg6IATgLIAdAAIASALIgFAkIgsAAIgBAOIAsAAIgCATgAgKgHIAWAAIABgNIgVAAg");
	this.shape_8.setTransform(163,-102.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrA4IAMhvIA6AAIARALIgFAwIgUAMIgkAAIgEAogAgOgDIAfAAIAEghIggAAg");
	this.shape_9.setTransform(153.8,-103.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRA7IAJhPIAVAAIgIBPgAgIgkIADgVIAWAAIgCAVg");
	this.shape_10.setTransform(-38.4,-103.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAoIACgTIAoAAIACgMIgWAAIgSgKIADgcIAUgKIAqAAIgCATIgmAAIgCALIAWAAIARAKIgCAdIgUAKg");
	this.shape_11.setTransform(-45.4,-102);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiA4IADgSIAnAAIACgWIgLAGIgVAAIgRgLIAGg3IATgLIAVAAIAKAGIAMgGIALAAIgLBlIgUAKgAgRADIAcAAIAFgnIgcAAg");
	this.shape_12.setTransform(-54.5,-100.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAKApIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAGIAMgGIATAAIARALIgHBFg");
	this.shape_13.setTransform(-64.2,-102.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AANApIgDgHIgLAHIgUAAIgRgMIAHhEIAWAAIgHA9IAbAAIAGg9IAWAAIgIBQg");
	this.shape_14.setTransform(-73.6,-102);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnA4IAMhvIBDAAIgCATIgtAAIgDAaIAkAAIgCASIgkAAIgFAwg");
	this.shape_15.setTransform(-82.1,-103.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgBA7IgSgLIALhpIAWAAIgKBhIAQAAIgDATg");
	this.shape_16.setTransform(-171.1,-103.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_17.setTransform(-178.7,-102);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGA7IgKgHIgNAHIgKAAIAMh1IAWAAIgEArIALgHIAUAAIASALIgGA7IgUALgAgPAoIAbAAIAGgrIgdAAg");
	this.shape_18.setTransform(-188.3,-103.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAfApIAGg9IgXAAIgHA9IgUAAIAFg9IgWAAIgHA9IgWAAIAJhQIASAAIADAGIAMgGIAPAAIANAJIAQgJIAPAAIASALIgIBFg");
	this.shape_19.setTransform(-200,-102.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgRA7IAJhPIAVAAIgJBPgAgIgkIADgVIAXAAIgDAVg");
	this.shape_20.setTransform(-208.8,-103.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgaA5IgSgLIADgVIAWAAIgBAMIAhAAIADgbIgkAAIgRgKIAFgtIAUgLIAnAAIARALIgCAVIgWAAIABgMIggAAIgCAaIAjAAIASAKIgGAuIgTALg");
	this.shape_21.setTransform(-216.5,-103.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAA1IgRgKIAEgyIgOAAIACgTIAPAAIABgNIAWgNIgDAaIASAAIgBATIgSAAIgFApIASAAIgCATg");
	this.shape_22.setTransform(211.9,-103.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgpA4IAMhvIASAAIADAGIAMgGIAUAAIASALIgGA6IgUAMIgUAAIgLgHIgEAlgAgOAHIAcAAIAFgrIgcAAg");
	this.shape_23.setTransform(203.2,-100.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgRA7IAJhPIAVAAIgIBPgAgIgkIADgVIAWAAIgCAVg");
	this.shape_24.setTransform(196.6,-103.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAoIAIhPIASAAIACAHIANgHIAQAAIgCATIgbAAIgGA8g");
	this.shape_25.setTransform(191.2,-102);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgQAoIgSgKIAHg7IATgKIArAAIgCATIgnAAIgEApIAmAAIgCATg");
	this.shape_26.setTransform(183.6,-102);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgiAoIACgTIAoAAIABgMIgVAAIgRgKIACgcIAUgKIAqAAIgCATIgnAAIgBALIAWAAIASAKIgEAdIgTAKg");
	this.shape_27.setTransform(174.8,-102);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSApIgSgLIAHg6IATgLIAdAAIARALIgEAkIgsAAIAAAOIArAAIgCATgAgKgHIAWAAIACgNIgWAAg");
	this.shape_28.setTransform(166,-102.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgwA4IAMhvIBDAAIASALIgKBaIgTAKgAgXAlIApAAIAHhJIgpAAg");
	this.shape_29.setTransform(155.8,-103.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_30.setTransform(-42.8,-102);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRA7IAJhPIAVAAIgIBPgAgIgkIADgVIAWAAIgCAVg");
	this.shape_31.setTransform(-49.6,-103.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAA1IgRgKIAEgyIgOAAIACgTIAPAAIABgNIAWgNIgDAaIASAAIgBATIgSAAIgFApIASAAIgCATg");
	this.shape_32.setTransform(-55.4,-103.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQAoIgRgKIAFg7IAVgKIApAAIgCATIgmAAIgFApIAnAAIgCATg");
	this.shape_33.setTransform(-62.9,-102);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgBA7IgSgLIALhpIAWAAIgKBhIAPAAIgCATg");
	this.shape_34.setTransform(-169,-103.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_35.setTransform(-176.6,-102);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgGA7IgKgHIgNAHIgKAAIAMh1IAWAAIgFArIAMgHIAUAAIASALIgGA7IgUALgAgPAoIAcAAIAEgrIgcAAg");
	this.shape_36.setTransform(-186.3,-103.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAeApIAHg9IgXAAIgHA9IgVAAIAGg9IgWAAIgHA9IgWAAIAIhQIASAAIAEAGIAMgGIAPAAIANAJIAQgJIAQAAIARALIgHBFg");
	this.shape_37.setTransform(-197.9,-102.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgkA4IATgmIgXhJIAWAAIAPAvIAWgvIAWAAIg3Bvg");
	this.shape_38.setTransform(-208.7,-100.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgaA5IgRgLIACgVIAWAAIgBAMIAhAAIADgbIgkAAIgRgKIAFgtIATgLIAoAAIASALIgDAVIgWAAIABgMIggAAIgDAaIAkAAIARAKIgFAuIgTALg");
	this.shape_39.setTransform(-218.6,-103.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-178.7}},{t:this.shape_16},{t:this.shape_15,p:{x:-82.1}},{t:this.shape_14,p:{x:-73.6}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-38.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:172.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:206.8}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:235.5}}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_15,p:{x:-89.9}},{t:this.shape_14,p:{x:-81.4}},{t:this.shape_7,p:{x:-72}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_3,p:{x:-33.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_10,p:{x:217.7}},{t:this.shape_17,p:{x:224.5}},{t:this.shape,p:{x:234}}]},1).wait(1));

	// Layer 3
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ag8hIIB5BIIh5BJg");
	this.shape_40.setTransform(-163.4,-55.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(2,1,1).p("AE+AAIp8AA");
	this.shape_41.setTransform(-201.4,-55.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FF8C00","#FFD510"],[0,1],5.4,19.8,5.4,-19.7).s().p("AnCAAIHCjBIHDDBInDDDg");
	this.shape_42.setTransform(-195.3,-0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,15.7,0,-15.6).s().p("Am5CZIAAkxINzAAIAAExg");
	this.shape_43.setTransform(-195.3,109.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FF8C00","#FFD510"],[0,1],5.3,19.4,-5.1,-19.3).s().p("AnmCZIBbkxINyAAIhbExg");
	this.shape_44.setTransform(-195.3,164.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#FF8C00","#FFD510"],[0,1],72.2,18.1,72.2,-18).s().p("AkmB3Qh6gxgBhFQABhFB6gxQB6gyCsAAQCtAAB6AyQB7AxAABFQAABFh7AxQh6AxitAAQisAAh6gxg");
	this.shape_45.setTransform(-195.3,54.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]}).wait(2));

	// Layer 1
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(3,0,0,3).p("AAA4wIAAGAMAAAArh");
	this.shape_46.setTransform(19.2,35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3,0,0,3).p("EAwqgNDMhQTAAAIxAAAEAwqANEMhQTAAAIxAAAEAwqAEWMhQTAAAIxAAAEAwqgEWMhQTAAAIxAAA");
	this.shape_47.setTransform(56.3,54.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#005EA1").s().p("AncVxQhkAAAAhkMAAAgp9ISBAAMAAAArhg");
	this.shape_48.setTransform(-197.5,54.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00406D").s().p("ApADAIAAkbQAAhkBkAAIQdAAIAAF/g");
	this.shape_49.setTransform(-197.5,-104.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("EgnoADAIAAl/MBNtAAAQBlAAAABkIAAEbg");
	this.shape_50.setTransform(114,-104.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("EgnoAVxMAAAgrhMBPSAAAMAAAAp9QAABkhlAAg");
	this.shape_51.setTransform(114,54.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.6,-124.9,625.8,320);


(lib.item03 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAZIgSAKg");
	this.shape.setTransform(17.1,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_1.setTransform(9.2,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_2.setTransform(0.7,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_3.setTransform(-7.5,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIASAAIAPAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAYAAIAFgmIgZAAg");
	this.shape_4.setTransform(-16.1,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIACgNIASgLIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_5.setTransform(46.7,-7.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_6.setTransform(39.4,-6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_7.setTransform(33.1,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_8.setTransform(27.1,-7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_9.setTransform(18.7,-6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAjIgPgKIAFgyIARgJIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_10.setTransform(11.1,-6.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_11.setTransform(1.9,-7.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgNIATgLIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_12.setTransform(-3.2,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_13.setTransform(-10.4,-6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_14.setTransform(-20.7,-6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_15.setTransform(-30.1,-7.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_16.setTransform(-36.1,-7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AARAxIgjg/IAAAAIgHA/IgTAAIAKhhIASAAIAjA+IAAAAIAHg+IATAAIgKBhg");
	this.shape_17.setTransform(-43.4,-7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_18.setTransform(29.6,8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIACgMIASgMIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_19.setTransform(22.8,7.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_20.setTransform(2.5,8.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAjIgPgKIAGgxIARgKIAkAAIgBAQIgiAAIgEAkIAhAAIgBARg");
	this.shape_21.setTransform(-5,8.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_22.setTransform(-13,8.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_23.setTransform(-21.4,7.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOAjIgPgKIAFgxIASgKIAkAAIgBAQIgiAAIgEAkIAhAAIgBARg");
	this.shape_24.setTransform(-29,8.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgQIANAAIABgNIAUgLIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_25.setTransform(41.8,-7.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAKgGIASAAIAPAJIgGA9g");
	this.shape_26.setTransform(26,-7.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_27.setTransform(14.2,-6.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_28.setTransform(6,-7.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgxBhg");
	this.shape_29.setTransform(-11.3,-4.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_30.setTransform(-19.7,-6.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgXBBIACgRIAOAAIAIhQIATAAIgJBXIgRAKgAABgtIACgTIAVAAIgCATg");
	this.shape_31.setTransform(-26.5,-6.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghAxIAKhhIA5AAIgCARIglAAIgDAWIAeAAIgCAQIgeAAIgDAZIAnAAIgCARg");
	this.shape_32.setTransform(-39.6,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:18.7}},{t:this.shape_8},{t:this.shape_7,p:{x:33.1,y:-7.7}},{t:this.shape_6},{t:this.shape_5,p:{x:46.7}},{t:this.shape_4},{t:this.shape_3,p:{x:-7.5}},{t:this.shape_2,p:{x:0.7,y:8.9}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_32},{t:this.shape_2,p:{x:-32.1,y:-6.2}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_5,p:{x:-1}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_9,p:{x:34.4}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_7,p:{x:9.2,y:7.3}},{t:this.shape_3,p:{x:15.6}},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

	// Layer 1
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,24,0,-23.9).s().p("AmcCjQishEAAhfQAAheCshEQCqhDDyAAQDzAACqBDQCsBEAABeQAABfisBEQiqBEjzgBQjyABiqhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(2));

	// Layer_4
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-32,126.7,64);


(lib.item02 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAzIADgbIAZAAIgCAbgAgRALIAAgTIARgKIAIAAIACgPIgTAAIgBAMIgTAAIABgUIASgJIAZAAIAQAJIgEAfIgRAJIgKAAIgBAMg");
	this.shape.setTransform(31.7,6.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_1.setTransform(22.8,6.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_2.setTransform(16.8,6.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_3.setTransform(10.6,6.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_4.setTransform(4.3,6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_5.setTransform(-1.9,6.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_6.setTransform(-10.6,7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_7.setTransform(-18.6,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgHA1IgSAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAQAJIgHA8g");
	this.shape_8.setTransform(-28.6,7.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAJAzIAGg1IgYAAIgGA1IgTAAIALhlIATAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_9.setTransform(28.2,-8.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgJBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_10.setTransform(19.9,-7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_11.setTransform(11.6,-8.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_12.setTransform(3,-7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgIIADgZIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAaIgSAJg");
	this.shape_13.setTransform(-5.1,-7.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_14.setTransform(-15,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_15.setTransform(-20,-8.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAaAxIgGgVIgjAAIgKAVIgTAAIAshhIAUAAIAZBhgAgIALIAYAAIgIgig");
	this.shape_16.setTransform(-27.3,-8.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbAzIADgaIAZAAIgBAagAgRAKIAAgSIARgKIAIAAIACgQIgSAAIgCANIgTAAIACgUIARgJIAZAAIAPAJIgDAfIgRAKIgKAAIgBAKg");
	this.shape_17.setTransform(39.7,2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgBAzIgPgJIAJhcIATAAIgJBVIAOAAIgCAQg");
	this.shape_18.setTransform(18.1,2.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAkIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEglIgXAAg");
	this.shape_19.setTransform(8.4,3.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgFAzIgJgFIgLAFIgJAAIALhlIATAAIgEAlIAKgGIASAAIAPAJIgFA0IgRAJgAgNAjIAYAAIAEgmIgYAAg");
	this.shape_20.setTransform(0.5,2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBARIgYAAIgFA0g");
	this.shape_21.setTransform(-8.9,3.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_22.setTransform(-15.6,3.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAuIgQgJIAGgrIgOAAIACgRIANAAIABgMIATgKIgCAWIAQAAIgCARIgQAAIgDAkIAPAAIgCAQg");
	this.shape_23.setTransform(-21.9,2.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AARAkIgJgGIgJAGIgSAAIgPgJIAGg0IARgJIAQAAIAKAFIAKgFIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_24.setTransform(-28.6,3.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHAsIARgsIARAAIAHAsIABAAIAPgsIASAAIgZBFg");
	this.shape_25.setTransform(-37.4,3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_26.setTransform(20.7,-11.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgFIATAAIAPAJIgHA8g");
	this.shape_27.setTransform(13,-12.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAAuIgQgJIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgQAAIgDAkIAPAAIgCAQg");
	this.shape_28.setTransform(6.5,-12.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCARIgiAAIgBAJIATAAIAPAJIgCAYIgSAKg");
	this.shape_29.setTransform(-3.2,-11.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgQAAIgPgJIAFg0IARgJIAQAAIAJAFIALgFIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_30.setTransform(-10.6,-11.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAOAxIAFgqIgmAAIgEAqIgUAAIAKhhIATAAIgDAnIAlAAIAEgnIAUAAIgLBhg");
	this.shape_31.setTransform(-19.2,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-18.6,y:7.9}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:10.6,y:6.3}},{t:this.shape_2,p:{x:16.8,y:6.3}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_2,p:{x:14.3,y:2.3}},{t:this.shape_18},{t:this.shape_7,p:{x:23.6,y:3.9}},{t:this.shape_3,p:{x:31.5,y:2.3}},{t:this.shape_17}]},1).wait(1));

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FF8C00","#FFD510"],[0,1],7.1,28.8,7.1,-28.6).s().p("ApOAAIJOkaIJPEaIpPEbg");
	this.shape_32.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(2));

	// Layer_4
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


(lib.item01 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape.setTransform(37.8,7.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_1.setTransform(29.6,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_2.setTransform(23.1,8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_3.setTransform(16,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAjIgPgKIAFgxIARgKIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_4.setTransform(8.6,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgGA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_5.setTransform(-4.8,8.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_6.setTransform(-14.9,8.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_7.setTransform(-21.2,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgJBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_8.setTransform(-27.8,8.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_9.setTransform(-36.1,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_10.setTransform(37.6,-6.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_11.setTransform(30.2,-7.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_12.setTransform(19.8,-6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_13.setTransform(14.8,-7.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_14.setTransform(8.5,-6.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_15.setTransform(-3.6,-4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_16.setTransform(-12.1,-6.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOATIAXAAIAEgmIgXAAg");
	this.shape_17.setTransform(-20.3,-6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_18.setTransform(-28.7,-6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAxIAIhQIgaAAIABgRIBIAAIgCARIgaAAIgJBQg");
	this.shape_19.setTransform(-36.3,-7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIACgMIASgMIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_20.setTransform(20.2,7.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgNAAIABgQIANAAIABgMIAUgMIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_21.setTransform(14.2,7.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_22.setTransform(-12.4,8.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgMIATgMIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_23.setTransform(-19.4,7.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgNIATgLIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_24.setTransform(20.7,-7.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHArIARgrIARAAIAHArIABAAIAPgrIASAAIgZBFg");
	this.shape_25.setTransform(4.2,-6.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_26.setTransform(-7.8,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_27.setTransform(-23.5,-6.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgmAxIALhhIAyAAIAPAJIgEArIgRAJIggAAIgDAkgAgNgDIAcAAIADgcIgbAAg");
	this.shape_28.setTransform(-31.7,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18,p:{x:-28.7}},{t:this.shape_17},{t:this.shape_16,p:{x:-12.1,y:-6.2}},{t:this.shape_15},{t:this.shape_14,p:{x:8.5}},{t:this.shape_13,p:{x:14.8,y:-7.7}},{t:this.shape_12,p:{x:19.8}},{t:this.shape_11},{t:this.shape_10,p:{x:37.6}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-21.2}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:16}},{t:this.shape_2},{t:this.shape_1,p:{x:29.6}},{t:this.shape,p:{x:37.8}}]}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_18,p:{x:-15.1}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_14,p:{x:13.4}},{t:this.shape_24},{t:this.shape_10,p:{x:27.5}},{t:this.shape_12,p:{x:34.6}},{t:this.shape_13,p:{x:-32.7,y:7.3}},{t:this.shape_16,p:{x:-26.8,y:8.9}},{t:this.shape_23},{t:this.shape_22},{t:this.shape,p:{x:-0.3}},{t:this.shape_3,p:{x:7.1}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_7,p:{x:25.6}},{t:this.shape_1,p:{x:31.6}}]},1).wait(1));

	// Layer 1
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,21.9,0,-21.9).s().p("An1DEIAAmHIPrAAIAAGHg");

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(2));

	// Layer_4
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


(lib.dia1_3 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAzIADgaIAZAAIgCAagAgRAKIAAgSIARgKIAIAAIACgQIgTAAIgBANIgTAAIACgUIARgJIAZAAIAQAJIgEAfIgRAKIgKAAIgBAKg");
	this.shape.setTransform(41.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAkIgKgGIgJAGIgRAAIgQgJIAGg0IARgJIAQAAIAKAFIAKgFIAKAAIgIBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_1.setTransform(32.8,12.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfAxIAQghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_2.setTransform(25.1,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_3.setTransform(16.7,12.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAzIAFg1IgYAAIgGA1IgTAAIAKhlIAUAAIgEAlIAKgFIASAAIAPAJIgGA8g");
	this.shape_4.setTransform(8.3,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_5.setTransform(0,12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_6.setTransform(-8.5,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_7.setTransform(-16.5,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIACAFIAKgFIASAAIAQAJIgGA0IgRAJIgSAAIgJgGIgDAhgAgMAGIAYAAIAFgmIgYAAg");
	this.shape_8.setTransform(-24.9,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_9.setTransform(-32.9,12.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgIIADgZIARgJIAlAAIgCARIgiAAIgBAJIATAAIAPAJIgCAZIgSAJg");
	this.shape_10.setTransform(-40.7,12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBARIgYAAIgFA0g");
	this.shape_11.setTransform(59.3,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgQAAIgPgJIAFg0IARgJIAQAAIAJAFIALgFIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_12.setTransform(52,-2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_13.setTransform(44.2,-3.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AARAkIgJgGIgKAGIgRAAIgOgJIAFg0IARgJIAQAAIAJAFIALgFIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_14.setTransform(35.9,-2.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAzIgKgFIgKAFIgJAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgGA0IgRAJgAgOAjIAZAAIAEgmIgYAAg");
	this.shape_15.setTransform(27.4,-3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_16.setTransform(21.4,-3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_17.setTransform(15.2,-3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgFIATAAIAPAJIgHA8g");
	this.shape_18.setTransform(2.9,-3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAkIgKgGIgJAGIgRAAIgQgJIAGg0IARgJIAQAAIAKAFIAKgFIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_19.setTransform(-5.4,-2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_20.setTransform(-13.7,-3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_21.setTransform(-22.3,-2.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCARIgiAAIgBAJIATAAIAPAJIgCAYIgSAKg");
	this.shape_22.setTransform(-30.4,-2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_23.setTransform(-41.3,-3.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_24.setTransform(-49.4,-2.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_25.setTransform(-56.9,-3.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAKAzIAFg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAKgGIASAAIAPAJIgHA9g");
	this.shape_26.setTransform(21.5,-18.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgHBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_27.setTransform(13.2,-17.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_28.setTransform(5.4,-18.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_29.setTransform(-2.9,-17.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_30.setTransform(-11.1,-18.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAaAxIgGgVIgjAAIgKAVIgTAAIAshhIAUAAIAZBhgAgIALIAYAAIgIgjg");
	this.shape_31.setTransform(-20.7,-18.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgbAzIADgbIAZAAIgCAbgAgRALIAAgTIARgKIAIAAIACgPIgTAAIgBAMIgTAAIACgUIARgJIAZAAIAQAJIgEAfIgRAJIgKAAIgBAMg");
	this.shape_32.setTransform(37.1,6.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_33.setTransform(12.6,6.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_34.setTransform(4.3,7.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgFAzIgJgFIgLAFIgJAAIALhlIATAAIgEAlIAJgGIATAAIAPAJIgFA0IgRAJgAgNAjIAYAAIAEgmIgYAAg");
	this.shape_35.setTransform(-4.2,6.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_36.setTransform(-14.2,6.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_37.setTransform(-18.8,6.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAFAjIgHgrIAAAAIgRArIgUAAIgKhFIARAAIAHArIARgrIARAAIAHArIABAAIAPgrIASAAIgZBFg");
	this.shape_38.setTransform(-34.2,7.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_39.setTransform(25.4,-8.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOATIAXAAIAEglIgWAAg");
	this.shape_40.setTransform(17.1,-7.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAjIgPgJIAFgzIARgJIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_41.setTransform(9.4,-7.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_42.setTransform(-2,-7.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAJAzIAGg1IgYAAIgGA1IgTAAIAKhlIAUAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_43.setTransform(-10.2,-8.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAAAuIgQgJIAGgrIgOAAIACgQIANAAIACgNIASgLIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBAQg");
	this.shape_44.setTransform(-17.2,-8.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgIIADgZIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAaIgSAJg");
	this.shape_45.setTransform(-27.9,-7.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAxIAKhhIATAAIgKBhg");
	this.shape_46.setTransform(-33.7,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-49.4,y:-2.2}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:15.2,y:-3.7}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-32.9,y:12.9}},{t:this.shape_8},{t:this.shape_7,p:{x:-16.5,y:12.9}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_24,p:{x:32.8,y:-7.2}},{t:this.shape_38},{t:this.shape_9,p:{x:-25.2,y:7.9}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_7,p:{x:20,y:7.9}},{t:this.shape_17,p:{x:28.4,y:6.3}},{t:this.shape_32}]},1).wait(1));

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#FF8C00","#FFD510"],[0,1],10.9,37,10.9,-36.7).s().p("AuTAAIOTlqIOUFqIuUFrg");

	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-36.3,183.3,72.6);


(lib.dia1_1 = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAzIADgaIAaAAIgDAagAgRAKIAAgSIARgJIAIAAIACgRIgTAAIgBANIgUAAIACgUIASgJIAZAAIAQAJIgEAfIgRAKIgKAAIgCAKg");
	this.shape.setTransform(22.9,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_1.setTransform(14.7,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgRAAIgOgJIAFg0IARgJIAQAAIAJAFIALgFIAJAAIgHBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_2.setTransform(6.4,10.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCARIgiAAIgBAJIATAAIAPAJIgCAYIgSAKg");
	this.shape_3.setTransform(-1.7,10.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAkIgKgGIgJAGIgRAAIgQgJIAGg0IARgJIAQAAIAJAFIALgFIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_4.setTransform(-9.6,10.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_5.setTransform(-19.8,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAJgGIATAAIAPAJIgHA9g");
	this.shape_6.setTransform(35.8,-5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgJBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_7.setTransform(27.5,-4.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_8.setTransform(19.3,-5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_9.setTransform(10.7,-4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAZIgSAKg");
	this.shape_10.setTransform(2.6,-4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_11.setTransform(-7.4,-4.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_12.setTransform(-14.7,-4.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_13.setTransform(-21,-5.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_14.setTransform(-27.5,-4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSAxIAIhQIgaAAIABgRIBIAAIgCARIgaAAIgJBQg");
	this.shape_15.setTransform(-34.8,-5.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbAzIADgbIAZAAIgBAbgAgRALIAAgTIARgKIAIAAIACgPIgSAAIgCAMIgTAAIACgUIARgJIAZAAIAPAJIgDAfIgRAJIgKAAIgBAMg");
	this.shape_16.setTransform(24.8,6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_17.setTransform(0.3,6.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_18.setTransform(-8.1,7.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_19.setTransform(-16.4,7.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAjIgPgKIAFgyIARgJIAlAAIgCAQIghAAIgEAkIAiAAIgCARg");
	this.shape_20.setTransform(-24,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_21.setTransform(25.3,-7.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_22.setTransform(18.8,-7.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOATIAXAAIAEglIgXAAg");
	this.shape_23.setTransform(11.5,-7.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgeAjIACgRIAjAAIABgKIgTAAIgPgIIADgZIARgJIAlAAIgCAQIgiAAIgBAKIATAAIAPAIIgCAaIgSAJg");
	this.shape_24.setTransform(-0.3,-7.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_25.setTransform(-8.2,-5.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAxIACgQIAiAAIACgUIgJAGIgTAAIgPgJIAFgxIARgJIASAAIAJAFIALgFIAJAAIgJBYIgSAJgAgOADIAZAAIADgjIgYAAg");
	this.shape_26.setTransform(-16.6,-5.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiAxIAKhhIA7AAIgCARIgnAAIgCAWIAeAAIgCAQIgdAAIgEAZIAnAAIgCARg");
	this.shape_27.setTransform(-24.3,-8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14,p:{x:-27.5,y:-4.2}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:19.3,y:-5.7}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_14,p:{x:7.8,y:7.9}},{t:this.shape_8,p:{x:16.2,y:6.3}},{t:this.shape_16}]},1).wait(1));

	// Layer 1
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FF8C00","#FFD510"],[0,1],7.1,28.8,7.1,-28.6).s().p("ApOAAIJOkaIJPEaIpPEbg");
	this.shape_28.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(2));

	// Layer_4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


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
	this.shape.graphics.f("#999999").s().p("As7EwIAApfIZ3AAIAAJfg");
	this.shape.setTransform(-0.1,0.1,0.725,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("As7EwIAApfIZ3AAIAAJfg");
	this.shape_1.setTransform(-0.1,0,0.739,1.05,0,0,0,-0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC00").ss(4,1,1).p("Apkk+ITJAAIAAJ9IzJAAg");
	this.shape_2.setTransform(-0.1,0.1,1,1,0,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:-0.1,y:0.1}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:0,y:0}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.2,-31.9,122.5,63.8);


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



(lib.circleEN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape.setTransform(46.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAuIgQgJIAGgrIgOAAIACgRIANAAIABgMIATgKIgCAWIAQAAIgCARIgPAAIgEAkIAPAAIgCAQg");
	this.shape_1.setTransform(39.8,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgMAAIABgRIANAAIACgMIATgKIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCAQg");
	this.shape_2.setTransform(33.8,-1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_3.setTransform(26.7,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgBAzIgPgJIAKhcIASAAIgJBVIAOAAIgCAQg");
	this.shape_4.setTransform(20.6,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_5.setTransform(14.2,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAPAJIgGA8g");
	this.shape_6.setTransform(4.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgSAkIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEglIgXAAg");
	this.shape_7.setTransform(-5.9,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgfAxIAQghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_8.setTransform(-17.2,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSAkIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEglIgXAAg");
	this.shape_9.setTransform(-25.6,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXBBIACgQIAOAAIAIhRIATAAIgJBYIgRAJgAABgtIACgTIAVAAIgCATg");
	this.shape_10.setTransform(-32.4,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_11.setTransform(-38,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiAxIAKhhIA7AAIgCARIgnAAIgCAWIAeAAIgCAQIgdAAIgEAZIAnAAIgCARg");
	this.shape_12.setTransform(-45.5,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,24,0,-23.9).s().p("AmcCjQishEAAhfQAAheCshEQCqhDDyAAQDzAACqBDQCsBEAABeQAABfisBEQiqBEjzgBQjyABiqhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-23,126.7,46.1);


(lib.circleBM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape.setTransform(17.5,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_1.setTransform(10.2,8.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_2.setTransform(2,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGg0IARgJIAQAAIAKAGIAKgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_3.setTransform(-6.6,8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_4.setTransform(-14.8,7.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_5.setTransform(42.2,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_6.setTransform(34.8,-6.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBUIAOAAIgCARg");
	this.shape_7.setTransform(28.5,-7.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_8.setTransform(22.1,-6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgQIANAAIABgNIATgLIgCAYIAQAAIgCAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_9.setTransform(15.3,-7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_10.setTransform(6.7,-7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAvIgQgKIAFgrIgMAAIABgQIANAAIABgNIAUgLIgDAYIAPAAIgBAQIgQAAIgDAkIAPAAIgCARg");
	this.shape_11.setTransform(1.6,-7.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFg0IARgJIAQAAIAJAGIALgGIAKAAIgIBGgAgOATIAXAAIAEgmIgWAAg");
	this.shape_12.setTransform(-5.6,-6.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIADAFIAKgFIAOAAIALAHIANgHIAOAAIAQAJIgHA8g");
	this.shape_13.setTransform(-15.9,-6.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAKAzIgPgZIgJAKIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_14.setTransform(-25.3,-7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_15.setTransform(-31.3,-7.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AARAxIgjg/IAAAAIgHA/IgTAAIAKhhIASAAIAjA+IAAAAIAHg+IATAAIgKBhg");
	this.shape_16.setTransform(-38.6,-7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,24,0,-23.9).s().p("AmcCjQishEAAhfQAAheCshEQCqhDDyAAQDzAACqBDQCsBEAABeQAABfisBEQiqBEjzgBQjyABiqhEg");

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.3,-23,126.7,46.1);


(lib.bujurEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIACgLIASgLIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgBARg");
	this.shape.setTransform(15.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_1.setTransform(9.5,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_2.setTransform(2.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIACgLIATgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_3.setTransform(-4.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAxIgPgJIACgTIAUAAIgBAMIAdAAIACgYIgfAAIgPgJIAEgoIARgJIAjAAIAPAJIgCAUIgUAAIACgMIgcAAIgDAYIAfAAIAQAIIgFAoIgRAJg");
	this.shape_4.setTransform(-12.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,14.9,0,-14.8).s().p("Ai9BlQhPgqAAg7QAAg6BPgqQBPgqBuAAQBvAABPAqQBPAqAAA6QAAA7hPAqQhPAqhvAAQhuAAhPgqg");

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.9,-14.3,53.8,28.6);


(lib.bujurcopy = function(mode,startPosition,loop) {
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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape.setTransform(36.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_1.setTransform(28.4,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_2.setTransform(21,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_3.setTransform(11.3,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIACgLIASgLIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgBARg");
	this.shape_4.setTransform(6.3,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_5.setTransform(-1,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_6.setTransform(-11.2,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_7.setTransform(-20.7,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_8.setTransform(-26.7,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AARAxIgjg/IAAAAIgHA/IgTAAIAKhhIASAAIAjA/IAAAAIAHg/IATAAIgKBhg");
	this.shape_9.setTransform(-34,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGgzIARgJIAQAAIAKAFIAKgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_10.setTransform(29.1,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAjIgPgKIAGgxIAQgKIAlAAIgCAQIghAAIgEAlIAiAAIgCAQg");
	this.shape_11.setTransform(21.4,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_12.setTransform(10,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKAzIAFg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAKgFIASAAIAPAJIgGA8g");
	this.shape_13.setTransform(1.8,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgQAAIgDAkIAPAAIgCARg");
	this.shape_14.setTransform(-5.2,0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAxIAQghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_15.setTransform(-15.5,2.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_16.setTransform(-23.9,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXBBIACgQIAOAAIAIhRIATAAIgJBXIgRAKgAABgtIACgTIAVAAIgCATg");
	this.shape_17.setTransform(-30.7,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_18.setTransform(-36.3,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgiAxIAKhhIA7AAIgDARIgmAAIgCAWIAeAAIgCAQIgdAAIgEAZIAnAAIgCARg");
	this.shape_19.setTransform(-43.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:28.4}},{t:this.shape,p:{x:36.6}}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape,p:{x:37.4}},{t:this.shape_1,p:{x:44.8}}]},1).wait(1));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,14.7,0,-14.7).s().p("AmQBkQingqAAg6QAAg5CngqQCmgpDqAAQDrAACmApQCnAqAAA5QAAA6inAqQimApjrAAQjqAAimgpg");

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(2));

	// Layer_4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


(lib.bujur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgHBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape.setTransform(13.2,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBVIAOAAIgCAQg");
	this.shape_1.setTransform(6.8,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_2.setTransform(0.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbAxIAGhAIgdBAIgRAAIgQhBIAAAAIgHBBIgTAAIAKhhIAaAAIARBHIABAAIAfhHIAaAAIgKBhg");
	this.shape_3.setTransform(-10.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(6));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,15.8,0,-15.7).s().p("AjJBqQhUgrABg/QgBg+BUgsQBUgsB1AAQB2AABUAsQBUAsgBA+QABA/hUArQhUAth2AAQh1AAhUgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.5,-15.1,57.1,30.2);


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
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(-49,-49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,-49,97,97);


(lib.arrowcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggADIBBhLIAACRg");
	this.shape.setTransform(-34.9,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AEjDSIAAmjIpFAA");
	this.shape_1.setTransform(-30.6,10.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64.4);


(lib.arrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AggADIBBhLIAACRg");
	this.shape.setTransform(-34.9,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AE1CgIAAk/IppAA");
	this.shape_1.setTransform(-28.8,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64.4);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.bujur("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.2,0.1,1,1,0,0,0,0.2,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIABgLIAUgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape.setTransform(15.2,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_1.setTransform(9.5,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgPgJIAFgzIARgJIAQAAIAKAFIAKgFIAJAAIgHBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_2.setTransform(2.2,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgCARg");
	this.shape_3.setTransform(-4.9,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXAxIgPgJIACgTIAUAAIgBAMIAdAAIACgYIgfAAIgPgJIAEgoIARgJIAjAAIAPAJIgCAUIgUAAIACgMIgcAAIgDAYIAfAAIAQAIIgFAoIgRAJg");
	this.shape_4.setTransform(-12.5,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,15.8,0,-15.7).s().p("AjJBqQhUgrABg/QgBg+BUgsQBUgsB1AAQB2AABUAsQBUAsgBA+QABA/hUArQhUAth2AAQh1AAhUgtg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.498)").s().p("ApmFAIAAp/ITNAAIAAJ/g");

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.5,-32,123,64);


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


(lib.mcAns = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// Layer_1
	this.instance = new lib.tAns1();
	this.instance.parent = this;
	this.instance.setTransform(161.5,0,1,1,0,0,0,161.5,0);

	this.instance_1 = new lib.tAns2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(161.5,0,1,1,0,0,0,161.5,0);

	this.instance_2 = new lib.tAns3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.5,0,1,1,0,0,0,161.5,0);

	this.instance_3 = new lib.tAns4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(161.5,0,1,1,0,0,0,161.5,0);

	this.instance_4 = new lib.tAns5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(161.5,0,1,1,0,0,0,161.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-34.7,388.5,61.6);


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
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-34.7,329.5,61.6);


(lib.dialogue2 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm2();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-34.7,338.5,63.2);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-34.7,429.5,92.9);


(lib.dialogue0 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm0();
	this.instance.parent = this;
	this.instance.setTransform(11.6,-6.7);

	this.instance_1 = new lib.tEn0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.6,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.9,-34.7,331.9,46.9);


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


(lib.Chart02 = function(mode,startPosition,loop) {
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
	this.instance = new lib.rec2_2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(20,-47.1,1,1,0,0,0,0.1,0.3);

	this.instance_1 = new lib.circleBM("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-71.7,155.4,1,1,0,0,0,0.3,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape.setTransform(116.6,91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_1.setTransform(109.4,92.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgJBXgAgNAeIAVAAIADggIgVAAg");
	this.shape_2.setTransform(102.4,91.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgFA7gAgFgaIACgRIAQAAIgBARg");
	this.shape_3.setTransform(97,91);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAqIAIhEIgXAAIACgPIA9AAIgCAPIgWAAIgIBEg");
	this.shape_4.setTransform(92.2,91.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgHIAOAAIAHAEIAKgEIAIAAIgHA7gAgLARIATAAIADghIgTAAg");
	this.shape_5.setTransform(-54,93.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgWgvIATAAIAOAfIAAAAIATgfIATAAIghAvIgDAkg");
	this.shape_6.setTransform(-60.8,92.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AulU2ICBAAIg9A7gAgPL2ICBAAIg+A8gANqFNIA8hEIAACCgAgPguICBAAIg+A7gAgPpVICBAAIg+A7gAgP1wICBAAIg+A7g");
	this.shape_7.setTransform(14.7,-18.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ah0SPISBAAIAAtRIooAAAh05PMAAAAreAwMZQIAAnBIOYAA");
	this.shape_8.setTransform(31.6,-16.6);

	this.instance_2 = new lib.circleEN("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-71.7,155.4,1,1,0,0,0,0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance,p:{startPosition:0}}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{startPosition:1}},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.2,-179.2,271.6,357.4);


(lib.Chart01 = function(mode,startPosition,loop) {
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
	this.instance = new lib.rec("single",2);
	this.instance.parent = this;
	this.instance.setTransform(-64.3,105.1,1,1,0,0,0,0,0.3);

	this.instance_1 = new lib.rec("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.1,-19.1);

	this.instance_2 = new lib.bujur("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.3,-148.9,1,1,0,0,0,0.2,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape.setTransform(126.8,37.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgHIAOAAIAHAEIAKgEIAIAAIgHA7gAgLARIATAAIADghIgTAAg");
	this.shape_1.setTransform(119.6,38.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAsIgCgFIgIAFIgQAAIgNgIIAEgsIAQgIIAOAAIAIAFIAEggIAQAAIgJBXgAgNAeIAVAAIADggIgVAAg");
	this.shape_2.setTransform(112.6,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAQAAIgHA7gAgFgaIABgRIARAAIgBARg");
	this.shape_3.setTransform(107.2,37.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAqIAIhEIgXAAIACgPIA9AAIgBAPIgYAAIgHBEg");
	this.shape_4.setTransform(102.4,37.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLARIATAAIADggIgTAAg");
	this.shape_5.setTransform(-45.8,39.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIAOAfIAAAAIATgfIASAAIggAvIgDAkg");
	this.shape_6.setTransform(-52.6,38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AoLT0ICBAAIg+A7gAoKJiICBAAIg+A7gAGLAAICBAAIg+A7gAGLn+ICBAAIg+A8gAGL0uICBAAIg+A7g");
	this.shape_7.setTransform(-18.1,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ah0GIISBAAIAAlqAh04DIAAeLAwMYEIAAx8IOYAA");
	this.shape_8.setTransform(39.8,10.1);

	this.instance_3 = new lib.recEn("single",2);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-64.3,105.1,1,1,0,0,0,0,0.3);

	this.instance_4 = new lib.recEn("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(28.1,-19.1);

	this.instance_5 = new lib.bujurEn("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(28.3,-148.9,1,1,0,0,0,0.2,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPAeIgNgIIAFgsIAPgHIAYAAIANAHIgFAsIgOAIgAgLARIAUAAIADghIgUAAg");
	this.shape_9.setTransform(114,38.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA2IAAAAIAGg2IARAAIgJBTg");
	this.shape_10.setTransform(106.1,37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgKIgQAAIgNgGIACgVIAPgIIAfAAIgBAOIgdAAIgBAJIAQAAIANAHIgCAVIgPAIg");
	this.shape_11.setTransform(-43.4,39.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_12.setTransform(-50,39.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAfIABAAIATgfIATAAIghAvIgDAkg");
	this.shape_13.setTransform(-56.6,38.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.5,-164.1,288.1,329.2);


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


(lib.AMC04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [5, 4, 1, 3, 2];
		var userAns = [0,0,0,0,0];
		var maxBlanks = 5;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var fontSize = 16;
		var cb1 = document.getElementById("cb1");
		var cb2 = document.getElementById("cb2");
		var cb3 = document.getElementById("cb3");
		var cb4 = document.getElementById("cb4");
		var cb5 = document.getElementById("cb5");
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		cb1.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb1.style.fontSize = fontSize * myScale + "px";
		$("#cb1").val(0);
		$("#cb1").change(function(){
			userAns[0] = $("#cb1").val();
			_this.mcAns1.gotoAndStop(userAns[0]);
			checkCompletion();
		});
		cb2.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb2.style.fontSize = fontSize * myScale + "px";
		$("#cb2").val(0);
		$("#cb2").change(function(){
			userAns[1] = $("#cb2").val();
			_this.mcAns2.gotoAndStop(userAns[1]);
			checkCompletion();
		});
		cb3.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb3.style.fontSize = fontSize * myScale + "px";
		$("#cb3").val(0);
		$("#cb3").change(function(){
			userAns[2] = $("#cb3").val();
			_this.mcAns3.gotoAndStop(userAns[2]);
			checkCompletion();
		});
		cb4.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb4.style.fontSize = fontSize * myScale + "px";
		$("#cb4").val(0);
		$("#cb4").change(function(){
			userAns[3] = $("#cb4").val();
			_this.mcAns4.gotoAndStop(userAns[3]);
			checkCompletion();
		});
		cb5.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb5.style.fontSize = fontSize * myScale + "px";
		$("#cb5").val(0);
		$("#cb5").change(function(){
			userAns[4] = $("#cb5").val();
			_this.mcAns5.gotoAndStop(userAns[4]);
			checkCompletion();
		});
		//txtAns.style.textAlign = "center";
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
				cb3.style.fontSize = fontSize * myScale + "px";
				cb4.style.fontSize = fontSize * myScale + "px";
				cb5.style.fontSize = fontSize * myScale + "px";
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
				$('select option:contains("Bermula/Akhir")').text('Start/End');
				$('select option:contains("Keputusan")').text('Decision');
				$('select option:contains("Langkah")').text('Process');
				$('select option:contains("Anak panah")').text('Arrow');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
			$('select option:contains("Bermula/Akhir")').text('Start/End');
			$('select option:contains("Keputusan")').text('Decision');
			$('select option:contains("Langkah")').text('Process');
			$('select option:contains("Anak panah")').text('Arrow');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
			$('select option:contains("Start/End")').text('Bermula/Akhir');
			$('select option:contains("Decision")').text('Keputusan');
			$('select option:contains("Process")').text('Langkah');
			$('select option:contains("Arrow")').text('Anak panah');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// btnCont
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(426.1,533.1,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

	// controllers
	this.mcAns5 = new lib.mcAns();
	this.mcAns5.name = "mcAns5";
	this.mcAns5.parent = this;
	this.mcAns5.setTransform(552.5,476.1,1,1,0,0,0,161.5,0);

	this.mcAns4 = new lib.mcAns();
	this.mcAns4.name = "mcAns4";
	this.mcAns4.parent = this;
	this.mcAns4.setTransform(552.5,419,1,1,0,0,0,161.5,0);

	this.mcAns3 = new lib.mcAns();
	this.mcAns3.name = "mcAns3";
	this.mcAns3.parent = this;
	this.mcAns3.setTransform(552.5,363.4,1,1,0,0,0,161.5,0);

	this.mcAns2 = new lib.mcAns();
	this.mcAns2.name = "mcAns2";
	this.mcAns2.parent = this;
	this.mcAns2.setTransform(552.5,307.7,1,1,0,0,0,161.5,0);

	this.mcAns1 = new lib.mcAns();
	this.mcAns1.name = "mcAns1";
	this.mcAns1.parent = this;
	this.mcAns1.setTransform(552.5,250.5,1,1,0,0,0,161.5,0);

	this.cb5 = new lib.an_ComboBox({'id': 'cb5', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 6, Pilih, 0, Bermula/Akhir, 1, Input/Output, 2, Langkah, 3, Keputusan, 4, Anak panah, 5', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb5.setTransform(297.5,476.2,1.47,1.545,0,0,0,50,11.1);

	this.cb4 = new lib.an_ComboBox({'id': 'cb4', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 6, Pilih, 0, Bermula/Akhir, 1, Input/Output, 2, Langkah, 3, Keputusan, 4, Anak panah, 5', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb4.setTransform(297.5,419.2,1.47,1.545,0,0,0,50,11.1);

	this.cb3 = new lib.an_ComboBox({'id': 'cb3', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 6, Pilih, 0, Bermula/Akhir, 1, Input/Output, 2, Langkah, 3, Keputusan, 4, Anak panah, 5', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb3.setTransform(297.5,363.5,1.47,1.545,0,0,0,50,11.1);

	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 6, Pilih, 0, Bermula/Akhir, 1, Input/Output, 2, Langkah, 3, Keputusan, 4, Anak panah, 5', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(297.5,307.9,1.47,1.545,0,0,0,50,11.1);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 6, Pilih, 0, Bermula/Akhir, 1, Input/Output, 2, Langkah, 3, Keputusan, 4, Anak panah, 5', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(297.5,252.2,1.47,1.545,0,0,0,50,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb1},{t:this.cb2},{t:this.cb3},{t:this.cb4},{t:this.cb5},{t:this.mcAns1},{t:this.mcAns2},{t:this.mcAns3},{t:this.mcAns4},{t:this.mcAns5}]}).wait(5));

	// q
	this.instance = new lib.jadualflowchart();
	this.instance.parent = this;
	this.instance.setTransform(357.9,309.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(101.3,184.1,625.8,371.6);


(lib.AMC03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [2, 4, 1, 3];
		var userAns = [0,0,0,0];
		var maxItem = 4;
		var maxdArea = 4;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].cursor = "pointer";
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4];
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
				} else {
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1] = 0;
							break;
						}
					}
					userAns[blankNum-1] = evt.currentTarget.itemNum;			
					evt.currentTarget.x = _this["dArea"+blankNum].x;
					evt.currentTarget.y = _this["dArea"+blankNum].y;
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
			var myLength = cAns.length;
			var cScore = 1;//score starts w 1
			for (i=1; i<=myLength; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			console.log(cScore);
			_this.parent.sendScore(cScore);
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

	// btnCont
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(682.2,522.1,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// item
	this.item4 = new lib.arrowcopy();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(170.5,458.6,1,1,0,0,0,0,0.5);

	this.item1 = new lib.rec3_3();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(170.6,244.3,1,1,0,0,0,0.1,0.2);

	this.item2 = new lib.rec1_3();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(170.6,317.4,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item1},{t:this.item4}]}).wait(1));

	// dArea
	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(461.3,231.4);

	this.dArea4 = new lib.dArea();
	this.dArea4.name = "dArea4";
	this.dArea4.parent = this;
	this.dArea4.setTransform(340.9,526.5);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(578.3,330.1);

	this.dArea3 = new lib.dArea();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(340.9,446.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea3},{t:this.dArea2},{t:this.dArea4},{t:this.dArea1}]}).wait(1));

	// flowchart
	this.instance = new lib.rec2_3("single",0);
	this.instance.parent = this;
	this.instance.setTransform(461.3,314.3,1,1,0,0,0,0.1,0.2);

	this.instance_1 = new lib.dia1_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(461.3,397.1,1,1,0,0,0,0.2,0.3);

	this.item3 = new lib.bujurcopy();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(170.7,388.8,1,1,0,0,0,0.2,0.3);

	this.instance_2 = new lib.bujur("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(461.5,166.9,1,1,0,0,0,0.2,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape.setTransform(568.9,386.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgJIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA9gAgLAQIATAAIADgfIgTAAg");
	this.shape_1.setTransform(561.8,387.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAsIgCgFIgIAFIgQAAIgOgIIAGgsIAPgIIAOAAIAIAFIAEggIAPAAIgJBXgAgNAeIAVAAIADggIgVAAg");
	this.shape_2.setTransform(554.7,386.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgFA7gAgFgaIACgRIAQAAIgBARg");
	this.shape_3.setTransform(549.4,386.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAqIAIhFIgXAAIACgOIA9AAIgCAOIgWAAIgIBFg");
	this.shape_4.setTransform(544.6,386.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgJIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA9gAgLAQIATAAIADgfIgTAAg");
	this.shape_5.setTransform(374.3,387.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIANAfIABAAIATgfIASAAIgfAvIgEAkg");
	this.shape_6.setTransform(367.6,386.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AqWWlICCAAIg+A8gAqVKWICBAAIg+A8gAIVB5ICCAAIg+A8gAIVqyICCAAIg+A7gAIV3fICCAAIg+A7g");
	this.shape_7.setTransform(401.1,339.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("AyWbrIAA01ISrAAISCAAIAAlrAAV7qMAAAAig");
	this.shape_8.setTransform(459.2,353.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.item3},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.AMC03, new cjs.Rectangle(109,151.7,643.2,406.7), null);


(lib.AMC02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [4, 3, 2, 1];
		var userAns = [0,0,0,0];
		var maxItem = 4;
		var maxdArea = 4;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].cursor = "pointer";
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4];
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
				} else {
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1] = 0;
							break;
						}
					}
					userAns[blankNum-1] = evt.currentTarget.itemNum;			
					evt.currentTarget.x = _this["dArea"+blankNum].x;
					evt.currentTarget.y = _this["dArea"+blankNum].y;
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
			var myLength = cAns.length;
			var cScore = 1;//score starts w 1
			for (i=1; i<=myLength; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			console.log(cScore);
			_this.parent.sendScore(cScore);
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

	// btnCont
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(680.2,521.1,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// item
	this.item4 = new lib.Symbol2_1();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(184.2,458.1);

	this.item2 = new lib.rec1_1();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(184.3,319.9,1,1,0,0,0,0.1,0.1);

	this.item1 = new lib.dia1_1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(184.2,250.7);

	this.item3 = new lib.rec2_1();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(184.3,389.3,1,1,0,0,0,0.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item3},{t:this.item1},{t:this.item2},{t:this.item4}]}).wait(1));

	// dArea
	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(459,187.1);

	this.dArea4 = new lib.dArea();
	this.dArea4.name = "dArea4";
	this.dArea4.parent = this;
	this.dArea4.setTransform(459,480);

	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(459,264.8);

	this.dArea3 = new lib.dArea();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(459,400.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea3},{t:this.dArea2},{t:this.dArea4},{t:this.dArea1}]}).wait(1));

	// flowchart
	this.instance = new lib.Chart02();
	this.instance.parent = this;
	this.instance.setTransform(439.9,379.5,1,1,0,0,0,0.5,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AMC02, new cjs.Rectangle(122.7,155.2,627.6,403), null);


(lib.AMC01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [1, 4, 2, 3];
		var userAns = [0,0,0,0];
		var maxItem = 4;
		var maxdArea = 4;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].cursor = "pointer";
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4];
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
				} else {
					for (i=1; i<=maxdArea; i++){
						if (userAns[i-1]==evt.currentTarget.itemNum){
							userAns[i-1] = 0;
							break;
						}
					}
					userAns[blankNum-1] = evt.currentTarget.itemNum;			
					evt.currentTarget.x = _this["dArea"+blankNum].x;
					evt.currentTarget.y = _this["dArea"+blankNum].y;
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
			var myLength = cAns.length;
			var cScore = 1;//score starts w 1
			for (i=1; i<=myLength; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			console.log(cScore);
			_this.parent.sendScore(cScore);
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

	// btnCont
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(681.2,523.1,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// item
	this.item3 = new lib.item03();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(176.2,396.3,1,1,0,0,0,0.1,0.1);

	this.item4 = new lib.arrow();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(176.1,466.6,1,1,0,0,0,0,0.5);

	this.item1 = new lib.item01();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(176.2,256.5,1,1,0,0,0,0.1,0.1);

	this.item2 = new lib.item02();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(176.1,326.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item1},{t:this.item4},{t:this.item3}]}).wait(1));

	// dArea
	this.dArea2 = new lib.dArea();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(573.7,332.1);

	this.dArea4 = new lib.dArea();
	this.dArea4.name = "dArea4";
	this.dArea4.parent = this;
	this.dArea4.setTransform(368.3,522.3);

	this.dArea1 = new lib.dArea();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(460.3,261.8);

	this.dArea3 = new lib.dArea();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(460.3,397.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea3},{t:this.dArea1},{t:this.dArea4},{t:this.dArea2}]}).wait(1));

	// flowchart
	this.instance = new lib.Chart01();
	this.instance.parent = this;
	this.instance.setTransform(432.7,349.3,1,1,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.AMC01, new cjs.Rectangle(112.8,184.7,638.4,369.5), null);


// stage content:
(lib.f3d1q3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q2:104,q3:154,q4:200,q1:247,finalFb:299});

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
		var stageNum = 5;
		if (typeof cUserId === "undefined") {
			cUserId = "";
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
				"qId": "f3d1q3_1",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			}]
		};
		var qItem1 = [{
				"qId": "f3d1q3_2",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3d1q3_3",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3d1q3_4",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 31,
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
				console.log(_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				if (_this.currentQ<=maxQ){
					_this["prog"+_this.currentQ].gotoAndStop("on");
				}
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
		
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			goNextQ();
		}
		this.addEventListener("click", doPlay);
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_104 = function() {
		playSound("questionAlert");
	}
	this.frame_148 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		playSound("questionAlert");
	}
	this.frame_194 = function() {
		this.stop();
	}
	this.frame_200 = function() {
		playSound("questionAlert");
	}
	this.frame_241 = function() {
		this.stop();
	}
	this.frame_247 = function() {
		playSound("questionAlert");
	}
	this.frame_289 = function() {
		this.stop();
	}
	this.frame_299 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_470 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(44).call(this.frame_148).wait(6).call(this.frame_154).wait(40).call(this.frame_194).wait(6).call(this.frame_200).wait(41).call(this.frame_241).wait(6).call(this.frame_247).wait(42).call(this.frame_289).wait(10).call(this.frame_299).wait(171).call(this.frame_470).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(367));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(367));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(426));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(534.5,129.8,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(367));

	// ss
	this.instance_2 = new lib.dialogue0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(443.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_3 = new lib.dialogue1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(443.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_4 = new lib.dialogue2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_5 = new lib.dialogue3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(443.3,122.4,1,1,0,0,0,-0.6,0.8);

	this.instance_6 = new lib.dialogue4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(443.3,122.4,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},61).to({state:[{t:this.instance_4}]},50).to({state:[{t:this.instance_5}]},46).to({state:[{t:this.instance_6}]},47).to({state:[]},52).wait(172));

	// avatar
	this.instance_7 = new lib.avatarBotsX("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(154.4,121.6,0.052,0.052);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:144.5,y:127.8},17,cjs.Ease.elasticOut).to({_off:true},256).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");
	mask.setTransform(407.2,295.9);

	// actMC
	this.instance_8 = new lib.AMC01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,390);
	this.instance_8._off = true;

	this.instance_9 = new lib.AMC02();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,420);
	this.instance_9._off = true;

	this.instance_10 = new lib.AMC03();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,420);
	this.instance_10._off = true;

	this.instance_11 = new lib.AMC04();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,400);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_8,this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(104).to({_off:false},0).to({y:0},15,cjs.Ease.backOut).to({_off:true},35).wait(317));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(154).to({_off:false},0).to({y:0},15,cjs.Ease.backOut).to({_off:true},31).wait(271));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(200).to({_off:false},0).to({y:0},15,cjs.Ease.backOut).to({_off:true},32).wait(224));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(247).to({_off:false},0).to({y:0},15,cjs.Ease.backOut).to({_off:true},37).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(445));

	// Layer_1
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(613.2,65.4);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(625.5,65.4);

	var maskedShapeInstanceList = [this.prog1,this.prog2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog2},{t:this.prog1}]},99).wait(372));

	// bg
	this.instance_12 = new lib.Symbol2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(394.4,296.6);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({_off:true},279).wait(172));

	// bg
	this.instance_13 = new lib.Bitmap3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(471));

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
		{src:"images/f3d1q3/Bitmap22.png?1527924154512", id:"Bitmap22"},
		{src:"images/f3d1q3/Bitmap3.png?1527924154512", id:"Bitmap3"},
		{src:"images/f3d1q3/Bitmap8.png?1527924154512", id:"Bitmap8"},
		{src:"images/f3d1q3/Bitmap9.png?1527924154512", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1527924154512", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1527924154512", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1527924154512", id:"questionComplete"},
		{src:"sounds/submitAns.mp3?1527924154512", id:"submitAns"},
		{src:"sounds/suspense.mp3?1527924154512", id:"suspense"},
		{src:"sounds/timeout.mp3?1527924154512", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1527924154512", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1527924154512", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1527924154512", id:"an.ComboBox"}
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