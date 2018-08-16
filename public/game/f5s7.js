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
	this.myTxt = new cjs.Text("Can you identify the data type for each of the \ncolumns in the table below?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 375;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-233.5,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/RAAMA+jAAA");
	this.shape.setTransform(-51.4,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A96FEIAAmqIilACIClh7IAAhfMA+jAAAIAAKC");
	this.shape_1.setTransform(-60.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9/FCIAAmrIikADICkh7IAAhgMA+jAAAIAAKDg");
	this.shape_2.setTransform(-59.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-31,420.3,67.4), null);


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
	this.myTxt = new cjs.Text("Bolehkah anda mengenal pasti jenis data bagi setiap \nlajur dalam jadual di bawah?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 438;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-226.7,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EgkbAAAMBI3AAA");
	this.shape.setTransform(-18.4,34.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EgjEAFEIAAmqIilACIClh7IAAhfMBI3AAAIAAKC");
	this.shape_1.setTransform(-27.1,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EgjJAFCIAAmrIikADICkh7IAAhgMBI3AAAIAAKDg");
	this.shape_2.setTransform(-26.7,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-31,486.3,67.4), null);


(lib.q3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape.setTransform(-154.7,76.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_1.setTransform(-160.2,76.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVBCIgtgrIAAArIgPAAIAAiDIAPAAIAABSIApgoIATAAIgtAqIAxAvg");
	this.shape_2.setTransform(-167,76.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_3.setTransform(-178.1,78.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKAEQAKADAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgFQgEgEgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgMQAAgLAFgIQAGgIALgFQAKgEANAAQAOAAALADQAMAFAIAIIgGALQgJgIgJgDQgKgEgLAAQgOAAgIAGQgJAHAAALQAAAJAIAGQAHAFAPADIAaAGQAJAEAGAHQAHAGAAAMQAAAKgGAJQgGAHgLAFQgKAFgPAAQgdgBgSgQg");
	this.shape_4.setTransform(-188.8,76.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_5.setTransform(-204.8,78.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAzAuIAAg3QAAgNgEgFQgFgGgJAAQgMAAgHAIQgGAHAAAOIAAAyIgNAAIAAg3QAAgMgFgGQgFgGgJAAQgMAAgGAIQgHAHAAAOIAAAyIgPAAIAAhAQABgOgCgLIAOAAIACAQQADgJAHgFQAIgEAKAAQALAAAHAEQAFAEADAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_6.setTransform(-217.9,78.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_7.setTransform(-227.9,76.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgvBAIAAh/IAzAAQATAAALAIQAKAKAAAQQAAAKgEAHQgGAHgKAEQAMACAFAIQAHAIAAAMQAAARgMAJQgKAJgVAAgAggA0IAkAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIgkAAgAgggHIAhAAQAOABAIgGQAHgGAAgLQAAgWgdAAIghAAg");
	this.shape_8.setTransform(-235.9,76.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_9.setTransform(-173.9,48.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_10.setTransform(-181.8,50.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA0AuIAAg3QgBgNgEgFQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAg3QABgMgFgGQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgPAAIAAhAQAAgOgBgLIAOAAIACAQQADgJAIgFQAHgEAKAAQALAAAHAEQAGAEADAJQAEgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_11.setTransform(-194.7,50.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWApQgKgGgEgKQgGgLAAgOQAAgNAGgLQAEgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgMAAgIAJg");
	this.shape_12.setTransform(-207.7,50.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAfBAIhCg9IAAA9IgOAAIAAh/IAOAAIAAA7IA+g7IATAAIhBA+IBFBBg");
	this.shape_13.setTransform(-217.6,48.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgDA1QgHgIAAgNIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAxQAAAJAEAEQAEAFAIAAQAFAAAFgCIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_14.setTransform(-166.4,21.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgHBAIAAhZIAOAAIAABZgAgIgvIAAgRIARAAIAAARg");
	this.shape_15.setTransform(-171.6,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_16.setTransform(-176.4,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWApQgJgGgGgKQgFgLAAgOQAAgNAFgLQAGgKAJgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_17.setTransform(-185.4,22.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_18.setTransform(-195.4,22.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDA1QgHgIAAgNIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAxQAAAJAEAEQAEAFAIAAQAFAAAFgCIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_19.setTransform(-203.6,21.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_20.setTransform(-211.5,22.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgNAAIAAh/IALAAIAwBtIAwhtIAMAAIAAB/g");
	this.shape_21.setTransform(-224.1,20.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_22.setTransform(-168.1,-7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgHBAIAAhZIAOAAIAABZgAgIgvIAAgQIARAAIAAAQg");
	this.shape_23.setTransform(-175.3,-7.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgVApQgLgGgEgKQgGgLAAgOQAAgNAGgLQAEgKALgGQAJgGAMAAQAMAAALAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgLAGgMAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_24.setTransform(-182.6,-5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_25.setTransform(-190.4,-5.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_26.setTransform(-199.2,-5.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgDA1QgHgIAAgOIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_27.setTransform(-207.4,-6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_28.setTransform(-214.9,-5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAvBAIgOghIhBAAIgPAhIgPAAIA4h/IAMAAIA5B/gAgbATIA3AAIgchBg");
	this.shape_29.setTransform(-225.9,-7.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_30.setTransform(-177.5,-38.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAyAvIAAg3QgBgMgEgFQgEgFgIgBQgLAAgGAIQgGAHAAAMIAAAzIgSAAIAAg3QAAgMgDgFQgFgFgJgBQgKAAgGAIQgGAHAAAMIAAAzIgSAAIAAhBQAAgOgBgLIAQAAIACAPQAEgIAHgFQAIgFAKAAQATAAAHASQAEgIAIgEQAIgFAKgBQAeAAABAlIAAA4g");
	this.shape_31.setTransform(-190.7,-38.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_32.setTransform(-204.4,-38.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAmBAIhIhgIAABgIgSAAIAAh/IAPAAIBIBgIAAhgIASAAIAAB/g");
	this.shape_33.setTransform(-216.4,-40.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_34.setTransform(214,78.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_35.setTransform(204.5,78.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_36.setTransform(197.9,76.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_37.setTransform(190.1,78.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgmBAIAAh/IBNAAIAAANIg/AAIAAArIA8AAIAAAMIg8AAIAAA7g");
	this.shape_38.setTransform(180.4,76.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_39.setTransform(210.7,50.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_40.setTransform(200.6,50.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_41.setTransform(192.8,50.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGBAIAAhyIgtAAIAAgNIBnAAIAAANIgtAAIAAByg");
	this.shape_42.setTransform(183.5,48.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_43.setTransform(210.7,22.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_44.setTransform(200.6,22.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_45.setTransform(192.8,22.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgGBAIAAhzIgtAAIAAgMIBnAAIAAAMIgtAAIAABzg");
	this.shape_46.setTransform(183.5,20.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_47.setTransform(210.7,-5.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_48.setTransform(200.6,-5.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_49.setTransform(192.8,-5.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgGBAIAAhyIgtAAIAAgNIBnAAIAAANIgtAAIAAByg");
	this.shape_50.setTransform(183.5,-7.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkAjIAGgMQAOAKARABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAJADQAIADAGAGIgFANQgNgLgPAAQgIAAgFAEQgEADAAAGQAAAEADAEQADACAGACIAPAEQANACAGAGQAGAGAAAKQAAAMgKAHQgJAHgSAAQgWAAgOgMg");
	this.shape_51.setTransform(214.6,-38.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_52.setTransform(204.8,-38.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_53.setTransform(197.4,-40.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_54.setTransform(189.8,-38.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgnBAIAAh/IASAAIAABvIA+AAIAAAQg");
	this.shape_55.setTransform(180.2,-40.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVABQAWgBAMARQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_56.setTransform(83.8,76.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAQASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAPIgKAAIAAhKIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMgBQgLAAgMgDg");
	this.shape_57.setTransform(73.2,76.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_58.setTransform(65.5,81.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAMBAIAAgcIg6AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_59.setTransform(58.2,76.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_60.setTransform(47,76.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_61.setTransform(83.8,48.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AghBAIA7hyIhEAAIAAgNIBVAAIAAALIg8B0g");
	this.shape_62.setTransform(73,48.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_63.setTransform(65.5,53.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgnBBIAAgLIAsgyQAJgJAFgIQAEgIgBgIQABgLgHgGQgFgFgLAAQgSAAgTAOIgFgLQAHgHAMgEQAMgFALAAQARAAAKAJQALAJAAAQQgBALgFAKQgEAJgMANIgkAnIA/AAIAAANg");
	this.shape_64.setTransform(58.1,48.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgUAGgQQAGgQALgHQALgJAOAAQALAAALAEQAKAFAIAIIgFAKQgJgHgIgDQgJgEgIAAQgQAAgJAOQgJAPAAAaIAAADQAEgJAJgHQAKgFALgBQALABAJAEQAKAGAFAIQAFAKAAALQAAAMgGAJQgFAKgJAFQgKAGgMAAQgWgBgMgQgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgIAAgNQAAgMgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_65.setTransform(47.3,48.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgQAVAAQAWAAAMAQQALARAAAfQAAAggLAQQgMARgWAAQgVAAgMgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_66.setTransform(83.8,20.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAKgEQAJgEAMAAQAMAAALAEQAJAEAFAIQAGAHAAALQAAAKgGAIQgHAIgLADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHABAKQgBAMAJAGQAIAGAOAAQAPAAAIgGQAJgGAAgMQgBgKgIgHQgJgGgOgCQgNACgJAGgAgUguQgHAGAAALQgBAKAJAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_67.setTransform(73,20.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_68.setTransform(65.5,26);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgnBBIAAgLIAsgyQAJgJAFgIQAEgIgBgIQABgLgHgGQgFgFgLAAQgSAAgTAOIgFgLQAHgHAMgEQAMgFALAAQARAAAKAJQALAJAAAQQgBALgFAKQgEAJgMANIgkAnIA/AAIAAANg");
	this.shape_69.setTransform(58.1,20.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgZA+QgLgFgIgIIAGgLQAJAIAIADQAJAEAIAAQAQAAAJgPQAJgOAAgaIAAgDQgEAKgKAGQgJAFgLABQgMAAgJgGQgJgFgFgIQgFgKAAgMQAAgMAFgIQAGgKAJgGQAJgEAMAAQAXAAAMAPQANARAAAdQAAAhgNARQgNASgXAAQgLAAgKgDgAgWgsQgHAHAAANQAAANAHAIQAIAHAMAAQAMAAAIgHQAIgIAAgNQAAgMgIgIQgIgIgMAAQgMAAgIAIg");
	this.shape_70.setTransform(47.2,20.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAggALgQQAMgRAVAAQAWAAAMARQALAQAAAgQAAAggLARQgMARgWAAQgVAAgMgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_71.setTransform(83.8,-7.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_72.setTransform(72.8,-7.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_73.setTransform(65.5,-1.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgnBBIAAgLIAsgyQAJgJAFgIQAEgIgBgIQABgLgHgGQgFgFgLAAQgSAAgTAOIgFgLQAHgHAMgEQAMgFALAAQARAAAKAJQALAJAAAQQgBALgFAKQgEAJgMANIgkAnIA/AAIAAANg");
	this.shape_74.setTransform(58.1,-7.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghBAIA7hyIhEAAIAAgNIBVAAIAAALIg8B0g");
	this.shape_75.setTransform(47.2,-7.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAWBCIAAg3QAAgLgEgFQgFgGgKAAQgLAAgHAHQgGAHAAAMIAAAzIgSAAIAAiDIASAAIAAA4QAEgIAIgFQAIgEAJAAQAgAAAAAkIAAA4g");
	this.shape_76.setTransform(92.3,-40.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_77.setTransform(81.2,-38.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AATBCIgqgrIAAArIgSAAIAAiDIASAAIAABSIAngoIAWAAIgqAqIAuAvg");
	this.shape_78.setTransform(72,-40.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgBgLIARAAIABAQQADgJAHgEQAIgFAJgBIAJACIAAAQQgGgCgFAAQgNABgFAHQgGAIAAALIAAAyg");
	this.shape_79.setTransform(63.7,-38.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_80.setTransform(54,-38.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAtBAIAAhXIgmBXIgMAAIgnhXIABBXIgRAAIAAh/IAPAAIAtBpIAvhpIAOAAIAAB/g");
	this.shape_81.setTransform(41.1,-40.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAQASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAPIgKAAIAAhKIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMgBQgLAAgMgDg");
	this.shape_82.setTransform(-54.5,76.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_83.setTransform(-65.8,76.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_84.setTransform(-76.6,76.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIATAAIAAAMIgTAAIAAAcgAgeAYIArAAIAAg+g");
	this.shape_85.setTransform(-54.6,48.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_86.setTransform(-65.8,48.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_87.setTransform(-76.6,48.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_88.setTransform(-54.7,20.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIATAAIAAAMIgTAAIAAAcgAgeAYIArAAIAAg+g");
	this.shape_89.setTransform(-65.4,20.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_90.setTransform(-76.6,20.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgOIAhgVIAIAAIAAByIAcAAIAAANg");
	this.shape_91.setTransform(-54.3,-7.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_92.setTransform(-65.8,-7.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_93.setTransform(-76.6,-7.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("Ag2BAIAAh/IAtAAQAeAAARARQARAQAAAeQAAAfgRAQQgRARgeAAgAgkAwIAaAAQAuAAAAgwQAAgvguAAIgaAAg");
	this.shape_94.setTransform(-62.9,-40.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_95.setTransform(-72.4,-40.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgKBAIAAhsIgrAAIAAgTIBqAAIAAATIgpAAIAABsg");
	this.shape_96.setTransform(83.8,-74.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgXA6QgOgIgHgPQgIgPAAgUQAAgTAIgPQAHgOAOgIQAOgJASAAQANAAAMAEQALAFAIAHIgIARQgJgHgIgDQgJgEgJAAQgSAAgKAMQgKANAAAVQAAAXAKAMQAKAMASAAQAJAAAJgDQAIgDAJgHIAIARQgIAHgLAEQgMAEgNAAQgSAAgOgIg");
	this.shape_97.setTransform(72.1,-74.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgKBAIAAh/IAVAAIAAB/g");
	this.shape_98.setTransform(63.3,-74.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgbAuIAAhAIgBgaIAUAAIACAQQAEgIAGgFQAIgEAIgBQAGABADABIAAAVQgFgDgHAAQgLAAgGAGQgFAIAAAKIAAAwg");
	this.shape_99.setTransform(52.8,-73.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgKBCIAAhaIAVAAIAABagAgLgrIAAgWIAXAAIAAAWg");
	this.shape_100.setTransform(46.4,-75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAUBCIAAg3QAAgKgEgEQgFgFgIAAQgJAAgHAGQgGAGAAALIAAAzIgXAAIAAiDIAXAAIAAA2QAFgHAHgEQAHgEAJAAQAhAAABAkIAAA4g");
	this.shape_101.setTransform(38.7,-75.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AARBCIgngqIAAAqIgWAAIAAiDIAWAAIAABQIAlgmIAbAAIgpAqIAsAvg");
	this.shape_102.setTransform(29,-75.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAsBAIgMgeIg+AAIgNAeIgXAAIA5h/IASAAIA7B/gAgWAQIAtAAIgXg2g");
	this.shape_103.setTransform(16.6,-74.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAUAuIAAg2QAAgKgEgFQgEgFgJAAQgJAAgGAHQgHAGABALIAAAyIgXAAIAAhAIgBgaIAVAAIACAPQAEgIAIgEQAHgFAKAAQAhAAAAAlIAAA3g");
	this.shape_104.setTransform(-0.6,-73.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgZApQgKgFgFgLQgFgLAAgOQAAgNAFgLQAGgKAJgGQAJgGALAAQAJAAAIAEQAIAEAEAIIAAgOIAWAAIAABaIgWAAIAAgPQgEAIgIAEQgIAEgJAAQgLAAgJgGgAgQgVQgGAIAAANQAAAOAGAIQAHAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_105.setTransform(-11.8,-73);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AglAkIAGgQQAOALASAAQAIAAAFgDQAEgDAAgFQAAgEgDgCQgDgDgHgBIgPgEQgYgFAAgTQAAgJAEgGQAFgGAIgEQAJgDAKAAQAKAAAJACQAJADAHAGIgHAPQgOgKgOAAQgHAAgEADQgFADAAAFQAAAEADACQADADAGABIAOAEQAOADAGAFQAGAHAAAKQAAAMgKAIQgKAHgRAAQgYAAgOgLg");
	this.shape_106.setTransform(-21.7,-73);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgpAJIAAg2IAXAAIAAA2QAAAKAEAEQAEAFAIAAQAJAAAGgGQAGgHAAgLIAAgxIAXAAIAABaIgWAAIAAgOQgFAHgHAEQgHAEgIAAQgiAAAAglg");
	this.shape_107.setTransform(-31.6,-72.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgFA0QgJgIAAgRIAAgoIgRAAIAAgRIARAAIAAgWIAWgIIAAAeIAYAAIAAARIgYAAIAAAnQAAAQAPAAIAJgBIAAASQgGACgIAAQgQAAgHgJg");
	this.shape_108.setTransform(-40.4,-74.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgpAJIAAg2IAXAAIAAA2QAAAKAEAEQAEAFAIAAQAJAAAGgGQAGgHAAgLIAAgxIAXAAIAABaIgWAAIAAgOQgFAHgHAEQgHAEgIAAQgiAAAAglg");
	this.shape_109.setTransform(-49.1,-72.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgtBCIAAhnIgBgaIAWAAIABAQQAEgJAIgFQAIgEAJAAQAMAAAKAGQAIAGAFAKQAFAMABAOQgBAOgFAKQgFAKgIAFQgKAHgMgBQgJAAgHgEQgIgEgEgIIAAA2gAgQgoQgGAIAAAPQAAANAGAHQAGAIALAAQALAAAGgIQAGgGAAgOQAAgOgGgJQgGgHgLAAQgLgBgGAIg");
	this.shape_110.setTransform(-59.8,-71.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgcAjQgNgNAAgWQAAgNAFgLQAGgKAKgGQAKgGAMAAQATAAALAMQAKAMAAAVIAAACIg9AAQABAPAGAHQAHAHAMAAQAPAAAMgKIAHAQQgHAFgJADQgJADgKAAQgVAAgNgMgAgLgZQgGAFgBAKIApAAQgBgKgFgFQgFgFgJAAQgIAAgGAFg");
	this.shape_111.setTransform(-70.5,-73);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAbBAIg7g8IAAA8IgXAAIAAh/IAXAAIAAA5IA5g5IAbAAIg8A+IBABBg");
	this.shape_112.setTransform(-80.4,-74.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E0912F").s().p("EgorAChIAAlBMBRXAAAIAAFBg");
	this.shape_113.setTransform(0,-76.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FCE3A8").s().p("AUuI9IAAx5IT+AAIAAR5gAAQI9IAAx5IT+AAIAAR5gA0NI9IAAx5IT+AAIAAR5gEgorAI9IAAx5IT+AAIAAR5g");
	this.shape_114.setTransform(0,34.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFC133").s().p("AUuCbIAAk1IT+AAIAAE1gAAQCbIAAk1IT+AAIAAE1gA0NCbIAAk1IT+AAIAAE1gEgorACbIAAk1IT+AAIAAE1g");
	this.shape_115.setTransform(0,-41.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgoA2QANgDAGgEQAHgFAEgKIAEgIIgnhZIAQAAIAdBKIAfhKIAPAAIgqBiQgGAPgKAIQgKAHgPADg");
	this.shape_116.setTransform(-158.4,80.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAlBAIglhoIgjBoIgNAAIgth/IAPAAIAlBqIAkhqIALAAIAkBqIAlhqIAPAAIgtB/g");
	this.shape_117.setTransform(-183.9,76.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgoA2QANgDAGgEQAHgFAEgKIAEgIIgnhZIAQAAIAdBKIAfhKIAPAAIgqBiQgGAPgKAIQgKAHgPADg");
	this.shape_118.setTransform(-203.4,80.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_119.setTransform(-223.9,76.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IAMAAIAwBtIAwhtIANAAIAAB/g");
	this.shape_120.setTransform(-233.7,76.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWA6QgOgJgHgPQgIgOABgUQgBgUAIgOQAHgPAOgHQANgJARAAQAOAAALAEQAKAFAIAIIgFALQgJgIgJgDQgJgEgLAAQgUAAgLAOQgMANAAAZQAAAZAMAOQALANAUAAQALAAAJgDQAJgDAJgIIAFALQgIAJgKADQgLAEgOABQgRgBgNgHg");
	this.shape_121.setTransform(-218.4,48.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgGBAIAAhZIANAAIAABZgAgIgvIAAgRIARAAIAAARg");
	this.shape_122.setTransform(-176.5,20.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_123.setTransform(-181.3,22.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_124.setTransform(-229,20.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgVApQgLgGgEgKQgGgLAAgOQAAgNAGgLQAEgKALgGQAJgGAMAAQAMAAALAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgLAGgMAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_125.setTransform(-182.6,-5.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_126.setTransform(197.9,76.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_127.setTransform(210.7,-5.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_128.setTransform(-177.2,-38.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAyAvIAAg3QAAgMgFgFQgEgFgIgBQgLAAgGAIQgGAHAAAMIAAAzIgSAAIAAg3QAAgMgDgFQgFgFgJgBQgKAAgGAIQgGAHAAAMIAAAzIgSAAIAAhBQAAgOgBgLIARAAIABAPQAEgIAHgFQAHgFALAAQATAAAHASQAEgIAIgEQAIgFAKgBQAfAAAAAlIAAA4g");
	this.shape_129.setTransform(-190.2,-38.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAmBAIhIhgIAABgIgSAAIAAh/IAPAAIBIBgIAAhgIARAAIAAB/g");
	this.shape_130.setTransform(-215.8,-40.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgkAjIAFgMQAOAKASABQAJAAAGgEQAEgDAAgGQAAgEgDgDQgDgDgJgCIgNgDQgNgDgFgFQgHgHAAgJQAAgNAKgHQAJgIAQAAQAJAAAJADQAJADAGAGIgGANQgMgLgPAAQgIAAgEAEQgGADABAGQAAAEACAEQAEACAGACIAOAEQANACAHAGQAGAGAAAKQAAAMgKAHQgJAHgRAAQgXAAgOgMg");
	this.shape_131.setTransform(212.7,-38.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgkAjIAGgMQAOAKARABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgIgCIgPgDQgMgDgGgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAJADQAIADAGAGIgFANQgNgLgPAAQgIAAgFAEQgEADAAAGQAAAEADAEQADACAGACIAPAEQANACAGAGQAGAGAAAKQAAAMgKAHQgJAHgSAAQgWAAgOgMg");
	this.shape_132.setTransform(203.8,-38.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgvBAIAAh/IA0AAQAUAAAMAJQALALAAAQQAAASgLAJQgMAJgUAAIgiAAIAAA3gAgdgFIAgAAQANAAAHgFQAHgGAAgLQAAgKgHgGQgHgFgNAAIggAAg");
	this.shape_133.setTransform(182.8,-40.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgGAAQgLABgGAHQgGAIAAALIAAAyg");
	this.shape_134.setTransform(74.4,-38.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgNBDIAAhJIgRAAIAAgRIARAAIAAgJQgBgQAJgJQAHgJAPAAQAJAAAGADIAAARIgJgBQgPAAAAAQIAAAIIAUAAIAAARIgUAAIAABJg");
	this.shape_135.setTransform(42.1,-75.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgXApQgLgFgFgLQgGgLAAgOQAAgOAGgKQAFgLALgGQAKgFANAAQAOAAAKAFQALAGAFALQAGAKAAAOQAAAOgGALQgFALgLAFQgKAGgOAAQgNAAgKgGgAgQgVQgGAHAAAOQAAAPAGAHQAGAIAKAAQAMAAAGgIQAGgHAAgPQAAgOgHgHQgGgIgLAAQgKAAgGAIg");
	this.shape_136.setTransform(33.6,-73);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgFA0QgJgIABgRIAAgoIgSAAIAAgRIASAAIAAgWIAVgIIAAAeIAYAAIAAARIgYAAIAAAnQAAAQAPAAIAJgBIAAASQgGACgJAAQgPAAgHgJg");
	this.shape_137.setTransform(19.8,-74.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_138.setTransform(14.1,-75.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AAcBAIgQgrQgCgFgFgDQgEgCgHgBIgXAAIAAA2IgXAAIAAh/IA2AAQAWAAALAKQALAJAAASQAAANgGAIQgHAJgMADQALACAFAOIAQApgAgdgHIAdAAQAMAAAGgEQAGgFAAgKQAAgJgGgGQgGgEgMAAIgdAAg");
	this.shape_139.setTransform(-23.7,-74.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_140.setTransform(-37.7,-75.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgZApQgJgFgGgLQgFgLAAgOQAAgNAFgLQAFgKAKgGQAJgGAMAAQAJAAAHAEQAIAEAEAIIAAgOIAWAAIAABaIgWAAIAAgPQgEAIgIAEQgHAEgJAAQgNAAgIgGgAgQgVQgGAIAAANQAAAOAGAIQAHAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_141.setTransform(-45.9,-73);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AAUAuIAAg2QABgKgFgFQgEgFgJAAQgJAAgGAHQgGAGAAALIAAAyIgXAAIAAhAIgBgaIAVAAIACAPQAEgIAIgEQAHgFAKAAQAhAAAAAlIAAA3g");
	this.shape_142.setTransform(-56.6,-73.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IBTAAIAAATIg8AAIAAAjIA4AAIAAARIg4AAIAAA4g");
	this.shape_143.setTransform(-71.5,-74.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-70.5}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:-31.6}},{t:this.shape_106,p:{x:-21.7}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:46.4}},{t:this.shape_99},{t:this.shape_98,p:{x:63.3}},{t:this.shape_97,p:{x:72.1}},{t:this.shape_96,p:{x:83.8}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:41.1}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:72}},{t:this.shape_77,p:{x:81.2}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{y:-5.5}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{y:22.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:210.7,y:50.2}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:197.9}},{t:this.shape_35},{t:this.shape_34,p:{x:214,y:78.1}},{t:this.shape_33},{t:this.shape_32,p:{x:-204.4}},{t:this.shape_31},{t:this.shape_30,p:{x:-177.5}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-199.2,y:-5.5}},{t:this.shape_25},{t:this.shape_24,p:{x:-182.6,y:-5.5}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-211.5}},{t:this.shape_19,p:{x:-203.6}},{t:this.shape_18,p:{x:-195.4}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:-166.4}},{t:this.shape_13},{t:this.shape_12,p:{x:-207.7}},{t:this.shape_11,p:{x:-194.7}},{t:this.shape_10,p:{x:-181.8}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-204.8}},{t:this.shape_4},{t:this.shape_3,p:{x:-178.1}},{t:this.shape_2,p:{x:-167}},{t:this.shape_1,p:{x:-160.2,y:76.8}},{t:this.shape}]}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_143},{t:this.shape_100,p:{x:-64.4}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_111,p:{x:-12.8}},{t:this.shape_106,p:{x:-3.5}},{t:this.shape_107,p:{x:6.4}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_98,p:{x:53}},{t:this.shape_97,p:{x:61.8}},{t:this.shape_96,p:{x:73.4}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_81,p:{x:51.8}},{t:this.shape_77,p:{x:64.7}},{t:this.shape_134},{t:this.shape_78,p:{x:82.8}},{t:this.shape_133},{t:this.shape_32,p:{x:193.6}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_30,p:{x:-203.9}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_127},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_47,p:{y:22.4}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_43,p:{y:50.2}},{t:this.shape_38},{t:this.shape_5,p:{x:190.1}},{t:this.shape_126},{t:this.shape_35},{t:this.shape_39,p:{x:214,y:78.1}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_34,p:{x:-199.2,y:-5.5}},{t:this.shape_25},{t:this.shape_125},{t:this.shape_23},{t:this.shape_22},{t:this.shape_124},{t:this.shape_26,p:{x:-216.4,y:22.4}},{t:this.shape_19,p:{x:-208.5}},{t:this.shape_20,p:{x:-200.3}},{t:this.shape_24,p:{x:-190.3,y:22.4}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_14,p:{x:-171.3}},{t:this.shape_18,p:{x:-163.1}},{t:this.shape_121},{t:this.shape_12,p:{x:-207.2}},{t:this.shape_11,p:{x:-194.2}},{t:this.shape_10,p:{x:-181.4}},{t:this.shape_1,p:{x:-173.5,y:48.9}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_36,p:{x:-219.6}},{t:this.shape_2,p:{x:-212}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_3,p:{x:-168.8}},{t:this.shape_116}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.4,-92.1,520.8,184.4);


(lib.q2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape.setTransform(-178.2,76.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAzAuIAAg3QABgNgFgFQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgOAAIAAg3QAAgMgEgGQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAhAQAAgOgCgLIAOAAIABAQQAEgJAHgFQAIgEAKAAQALAAAGAEQAHAEACAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_1.setTransform(-188.3,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_2.setTransform(-201.4,78.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBAIAAh/IAyAAQAUAAALAIQALAKAAAQQAAAKgGAHQgFAHgJAEQAKACAHAIQAGAIAAAMQAAARgMAJQgKAJgVAAgAghA0IAlAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIglAAgAghgHIAiAAQAPABAGgGQAIgGAAgLQAAgWgdAAIgiAAg");
	this.shape_3.setTransform(-212.4,76.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgHAHgBANIAAAzIgOAAIAAhAQAAgOgCgLIAPAAIABAQQAEgJAIgFQAIgEAKAAQAgAAAAAjIAAA4g");
	this.shape_4.setTransform(-172.1,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_5.setTransform(-182.6,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_6.setTransform(-191,48.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgBgMIANAAIACASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAJAGAGALQAEAKAAAOQAAAOgEAKQgFAKgKAGQgIAGgNAAQgKAAgHgFQgIgEgEgJIAAA4gAgTgsQgIAJABARQgBARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAJg");
	this.shape_7.setTransform(-199.2,52.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_8.setTransform(-209.7,50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAoBAIhNhmIAABmIgNAAIAAh/IALAAIBMBmIAAhmIAOAAIAAB/g");
	this.shape_9.setTransform(-221.4,48.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYBCIAAg4QAAgLgFgGQgFgGgKAAQgMAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_10.setTransform(-174.4,20.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAVBCIgtgrIAAArIgPAAIAAiDIAPAAIAABSIAqgoIASAAIgsAqIAwAvg");
	this.shape_11.setTransform(-183.5,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgGBAIAAhZIANAAIAABZgAgIgvIAAgRIARAAIAAARg");
	this.shape_12.setTransform(-191,20.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_13.setTransform(-195.8,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_14.setTransform(-205.4,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgNAAIAAh/IALAAIAwBtIAwhtIAMAAIAAB/g");
	this.shape_15.setTransform(-218.1,20.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAYBCIAAg4QAAgLgFgGQgFgGgKAAQgMAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_16.setTransform(-173,-7.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_17.setTransform(-183.9,-5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_18.setTransform(-191.7,-5.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAYBCIAAg4QAAgLgFgGQgFgGgKAAQgMAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_19.setTransform(-200.8,-7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_20.setTransform(-211.3,-5.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgtBAIAAgLIBIhnIhIAAIAAgNIBZAAIAAAKIhIBoIBKAAIAAANg");
	this.shape_21.setTransform(-221.8,-7.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_22.setTransform(210.7,78.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_23.setTransform(200.6,78.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_24.setTransform(192.8,78.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGBAIAAhyIgtAAIAAgNIBnAAIAAANIgtAAIAAByg");
	this.shape_25.setTransform(183.5,76.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_26.setTransform(214,50.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_27.setTransform(204.5,50.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_28.setTransform(197.9,48.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_29.setTransform(190.1,50.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgmBAIAAh/IBNAAIAAANIg/AAIAAArIA8AAIAAAMIg8AAIAAA7g");
	this.shape_30.setTransform(180.4,48.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_31.setTransform(210.7,22.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_32.setTransform(200.6,22.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_33.setTransform(192.8,22.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgGBAIAAhzIgtAAIAAgMIBnAAIAAAMIgtAAIAABzg");
	this.shape_34.setTransform(183.5,20.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_35.setTransform(214,-5.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_36.setTransform(204.5,-5.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_37.setTransform(197.9,-7.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_38.setTransform(190.1,-5.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgmBAIAAh/IBNAAIAAANIg/AAIAAAsIA8AAIAAALIg8AAIAAA7g");
	this.shape_39.setTransform(180.4,-7.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVABQAWgBAMARQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_40.setTransform(83.8,76.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgPIAhgUIAIAAIAAByIAcAAIAAANg");
	this.shape_41.setTransform(73.4,76.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_42.setTransform(65.5,81.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgnBBIAAgLIAsgyQAJgJAFgIQAEgIgBgIQABgLgHgGQgFgFgLAAQgSAAgTAOIgFgLQAHgHAMgEQAMgFALAAQARAAAKAJQALAJAAAQQgBALgFAKQgEAJgMANIgkAnIA/AAIAAANg");
	this.shape_43.setTransform(58.1,76.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAQASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAPIgKAAIAAhKIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMgBQgLAAgMgDg");
	this.shape_44.setTransform(47.5,76.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_45.setTransform(83.8,48.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_46.setTransform(72.8,48.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_47.setTransform(65.5,53.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgLQASAPASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAOIgKAAIAAhJIBMAAIAAAMIg9AAIAAAtQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMgBQgLAAgMgDg");
	this.shape_48.setTransform(58.3,48.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgnBBIAAgLIAsgyQAJgJAFgIQADgIABgIQAAgLgHgGQgFgFgLAAQgSAAgTAOIgFgLQAHgHAMgEQAMgFALAAQARAAAKAJQALAJAAAQQgBALgFAKQgEAJgMANIgkAnIA/AAIAAANg");
	this.shape_49.setTransform(47.3,48.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgQAVAAQAWAAAMAQQALARAAAfQAAAggLAQQgMARgWAAQgVAAgMgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_50.setTransform(83.8,20.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgVAGgPQAGgQALgIQALgHAOAAQALAAALADQAKAFAIAHIgFAMQgJgIgIgEQgJgDgIAAQgQAAgJAPQgJAPAAAZIAAACQAEgIAJgGQAKgHALAAQALAAAJAGQAKAFAFAIQAFAJAAAMQAAAMgGAKQgFAJgJAFQgKAFgMAAQgWAAgMgQgAgRAEQgIAIAAANQAAAMAIAIQAIAIAMAAQAMAAAHgIQAIgHAAgNQAAgOgIgHQgHgHgNAAQgLAAgIAHg");
	this.shape_51.setTransform(73,20.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_52.setTransform(65.5,26);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgZA+QgLgFgIgIIAGgLQAJAIAIADQAJAEAIAAQAQAAAJgPQAJgOAAgaIAAgDQgEAKgKAGQgJAFgLABQgMAAgJgGQgJgFgFgIQgFgKAAgMQAAgMAFgIQAGgKAJgGQAJgEAMAAQAXAAAMAPQANARAAAdQAAAhgNARQgNASgXAAQgLAAgKgDgAgWgsQgHAHAAANQAAANAHAIQAIAHAMAAQAMAAAIgHQAIgIAAgNQAAgMgIgIQgIgIgMAAQgMAAgIAIg");
	this.shape_53.setTransform(58,20.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAJgEQALgEALAAQANAAAJAEQAKAEAFAIQAGAHAAALQAAAKgGAIQgHAIgLADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHAAAKQAAAMAJAGQAIAGAOAAQAPAAAIgGQAJgGgBgMQAAgKgJgHQgIgGgOgCQgNACgJAGgAgUguQgHAGAAALQgBAKAJAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_54.setTransform(47.2,20.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAKgEQAJgEAMAAQAMAAALAEQAJAEAFAIQAGAHAAALQAAAKgGAIQgHAIgLADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHABAKQgBAMAJAGQAIAGAOAAQAPAAAIgGQAJgGAAgMQgBgKgIgHQgJgGgOgCQgNACgJAGgAgUguQgHAGAAALQgBAKAJAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_55.setTransform(83.8,-7.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgUAGgQQAGgPALgJQALgIAOAAQALAAALAFQAKADAIAJIgFAKQgJgHgIgDQgJgEgIAAQgQAAgJAOQgJAPAAAaIAAACQAEgIAJgHQAKgFALAAQALAAAJAEQAKAGAFAIQAFAKAAALQAAAMgGAJQgFAKgJAFQgKAGgMAAQgWAAgMgRgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgIAAgNQAAgMgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_56.setTransform(73,-7.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_57.setTransform(65.5,-1.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgnBBIAAgLIAsgyQAJgJAFgIQAEgIgBgIQABgLgHgGQgFgFgLAAQgSAAgTAOIgFgLQAHgHAMgEQAMgFALAAQARAAAKAJQALAJAAAQQgBALgFAKQgEAJgMANIgkAnIA/AAIAAANg");
	this.shape_58.setTransform(58.1,-7.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_59.setTransform(47,-7.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVABQAWgBALARQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgWgnQgHANAAAaQAAAbAHANQAIANAOAAQAQAAAGgNQAIgNAAgbQAAgagIgNQgGgNgQAAQgOAAgIANg");
	this.shape_60.setTransform(-54.8,76.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_61.setTransform(-65.8,76.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_62.setTransform(-76.3,76.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggA4QgNgJAAgRQAAgLAHgJQAIgIALgDQgLgDgGgIQgGgIAAgKQAAgLAFgHQAGgIAJgEQALgEALAAQAMAAAKAEQAKAEAGAIQAFAHAAALQAAAKgGAIQgGAIgLADQAMADAHAIQAHAJAAALQAAARgNAJQgMAJgVAAQgUAAgMgJgAgWAMQgJAHAAAKQAAAMAJAGQAIAGAOAAQAPAAAIgGQAIgGAAgMQABgKgKgHQgIgGgOgCQgNACgJAGgAgUguQgIAGAAALQABAKAHAGQAIAHAMABQANgBAIgHQAHgGABgKQAAgLgIgGQgHgGgOAAQgNAAgHAGg");
	this.shape_63.setTransform(-54.8,48.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_64.setTransform(-65.5,48.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_65.setTransform(-76.3,48.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgjBAIAAgMIAdAAIAAhhIgbARIAAgPIAhgUIAIAAIAABzIAcAAIAAAMg");
	this.shape_66.setTransform(-54.3,20.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_67.setTransform(-65.5,20.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_68.setTransform(-76.3,20.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgRAVAAQAWAAALARQAMAQAAAgQAAAggMARQgLARgWAAQgVAAgLgRgAgWgnQgHAMAAAbQAAAbAHANQAIANAOAAQAQAAAGgNQAIgNAAgbQAAgbgIgMQgGgNgQAAQgOAAgIANg");
	this.shape_69.setTransform(-54.8,-7.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_70.setTransform(-65.5,-7.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_71.setTransform(-76.3,-7.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_72.setTransform(-177.5,-38.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAyAvIAAg3QgBgMgEgFQgEgFgIgBQgLAAgGAIQgGAHAAAMIAAAzIgSAAIAAg3QAAgMgDgFQgFgFgJgBQgKAAgGAIQgGAHAAAMIAAAzIgSAAIAAhBQAAgOgBgLIAQAAIACAPQAEgIAHgFQAIgFAKAAQATAAAHASQAEgIAIgEQAIgFAKgBQAeAAABAlIAAA4g");
	this.shape_73.setTransform(-190.7,-38.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_74.setTransform(-204.4,-38.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAmBAIhIhgIAABgIgSAAIAAh/IAPAAIBIBgIAAhgIASAAIAAB/g");
	this.shape_75.setTransform(-216.4,-40.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgkAjIAGgMQAOAKARABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAJADQAIADAGAGIgFANQgNgLgPAAQgIAAgFAEQgEADAAAGQAAAEADAEQADACAGACIAPAEQANACAGAGQAGAGAAAKQAAAMgKAHQgJAHgSAAQgWAAgOgMg");
	this.shape_76.setTransform(214.6,-38.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_77.setTransform(204.8,-38.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_78.setTransform(197.4,-40.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_79.setTransform(189.8,-38.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgnBAIAAh/IASAAIAABvIA+AAIAAAQg");
	this.shape_80.setTransform(180.2,-40.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWBCIAAg3QAAgLgEgFQgFgGgKAAQgLAAgHAHQgGAHAAAMIAAAzIgSAAIAAiDIASAAIAAA4QAEgIAIgFQAIgEAJAAQAgAAAAAkIAAA4g");
	this.shape_81.setTransform(92.3,-40.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_82.setTransform(81.2,-38.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AATBCIgqgrIAAArIgSAAIAAiDIASAAIAABSIAngoIAWAAIgqAqIAuAvg");
	this.shape_83.setTransform(72,-40.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgBgLIARAAIABAQQADgJAHgEQAIgFAJgBIAJACIAAAQQgGgCgFAAQgNABgFAHQgGAIAAALIAAAyg");
	this.shape_84.setTransform(63.7,-38.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_85.setTransform(54,-38.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAtBAIAAhXIgmBXIgMAAIgnhXIABBXIgRAAIAAh/IAPAAIAtBpIAvhpIAOAAIAAB/g");
	this.shape_86.setTransform(41.1,-40.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("Ag2BAIAAh/IAtAAQAeAAARARQARAQAAAeQAAAfgRAQQgRARgeAAgAgkAwIAaAAQAuAAAAgwQAAgvguAAIgaAAg");
	this.shape_87.setTransform(-62.9,-40.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_88.setTransform(-72.4,-40.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgKBAIAAhsIgrAAIAAgTIBqAAIAAATIgpAAIAABsg");
	this.shape_89.setTransform(83.8,-74.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgXA6QgOgIgHgPQgIgPAAgUQAAgTAIgPQAHgOAOgIQAOgJASAAQANAAAMAEQALAFAIAHIgIARQgJgHgIgDQgJgEgJAAQgSAAgKAMQgKANAAAVQAAAXAKAMQAKAMASAAQAJAAAJgDQAIgDAJgHIAIARQgIAHgLAEQgMAEgNAAQgSAAgOgIg");
	this.shape_90.setTransform(72.1,-74.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgKBAIAAh/IAVAAIAAB/g");
	this.shape_91.setTransform(63.3,-74.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgbAuIAAhAIgBgaIAUAAIACAQQAEgIAGgFQAIgEAIgBQAGABADABIAAAVQgFgDgHAAQgLAAgGAGQgFAIAAAKIAAAwg");
	this.shape_92.setTransform(52.8,-73.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKBCIAAhaIAVAAIAABagAgLgrIAAgWIAXAAIAAAWg");
	this.shape_93.setTransform(46.4,-75);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAUBCIAAg3QAAgKgEgEQgFgFgIAAQgJAAgHAGQgGAGAAALIAAAzIgXAAIAAiDIAXAAIAAA2QAFgHAHgEQAHgEAJAAQAhAAABAkIAAA4g");
	this.shape_94.setTransform(38.7,-75.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AARBCIgngqIAAAqIgWAAIAAiDIAWAAIAABQIAlgmIAbAAIgpAqIAsAvg");
	this.shape_95.setTransform(29,-75.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AAsBAIgMgeIg+AAIgNAeIgXAAIA5h/IASAAIA7B/gAgWAQIAtAAIgXg2g");
	this.shape_96.setTransform(16.6,-74.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAUAuIAAg2QAAgKgEgFQgEgFgJAAQgJAAgGAHQgHAGABALIAAAyIgXAAIAAhAIgBgaIAVAAIACAPQAEgIAIgEQAHgFAKAAQAhAAAAAlIAAA3g");
	this.shape_97.setTransform(-0.6,-73.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgZApQgKgFgFgLQgFgLAAgOQAAgNAFgLQAGgKAJgGQAJgGALAAQAJAAAIAEQAIAEAEAIIAAgOIAWAAIAABaIgWAAIAAgPQgEAIgIAEQgIAEgJAAQgLAAgJgGgAgQgVQgGAIAAANQAAAOAGAIQAHAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_98.setTransform(-11.8,-73);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AglAkIAGgQQAOALASAAQAIAAAFgDQAEgDAAgFQAAgEgDgCQgDgDgHgBIgPgEQgYgFAAgTQAAgJAEgGQAFgGAIgEQAJgDAKAAQAKAAAJACQAJADAHAGIgHAPQgOgKgOAAQgHAAgEADQgFADAAAFQAAAEADACQADADAGABIAOAEQAOADAGAFQAGAHAAAKQAAAMgKAIQgKAHgRAAQgYAAgOgLg");
	this.shape_99.setTransform(-21.7,-73);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgpAJIAAg2IAXAAIAAA2QAAAKAEAEQAEAFAIAAQAJAAAGgGQAGgHAAgLIAAgxIAXAAIAABaIgWAAIAAgOQgFAHgHAEQgHAEgIAAQgiAAAAglg");
	this.shape_100.setTransform(-31.6,-72.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgFA0QgJgIAAgRIAAgoIgRAAIAAgRIARAAIAAgWIAWgIIAAAeIAYAAIAAARIgYAAIAAAnQAAAQAPAAIAJgBIAAASQgGACgIAAQgQAAgHgJg");
	this.shape_101.setTransform(-40.4,-74.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgpAJIAAg2IAXAAIAAA2QAAAKAEAEQAEAFAIAAQAJAAAGgGQAGgHAAgLIAAgxIAXAAIAABaIgWAAIAAgOQgFAHgHAEQgHAEgIAAQgiAAAAglg");
	this.shape_102.setTransform(-49.1,-72.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgtBCIAAhnIgBgaIAWAAIABAQQAEgJAIgFQAIgEAJAAQAMAAAKAGQAIAGAFAKQAFAMABAOQgBAOgFAKQgFAKgIAFQgKAHgMgBQgJAAgHgEQgIgEgEgIIAAA2gAgQgoQgGAIAAAPQAAANAGAHQAGAIALAAQALAAAGgIQAGgGAAgOQAAgOgGgJQgGgHgLAAQgLgBgGAIg");
	this.shape_103.setTransform(-59.8,-71.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgcAjQgNgNAAgWQAAgNAFgLQAGgKAKgGQAKgGAMAAQATAAALAMQAKAMAAAVIAAACIg9AAQABAPAGAHQAHAHAMAAQAPAAAMgKIAHAQQgHAFgJADQgJADgKAAQgVAAgNgMgAgLgZQgGAFgBAKIApAAQgBgKgFgFQgFgFgJAAQgIAAgGAFg");
	this.shape_104.setTransform(-70.5,-73);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAbBAIg7g8IAAA8IgXAAIAAh/IAXAAIAAA5IA5g5IAbAAIg8A+IBABBg");
	this.shape_105.setTransform(-80.4,-74.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E0912F").s().p("EgorAChIAAlBMBRXAAAIAAFBg");
	this.shape_106.setTransform(0,-76.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FCE3A8").s().p("AUuI9IAAx5IT+AAIAAR5gAAQI9IAAx5IT+AAIAAR5gA0NI9IAAx5IT+AAIAAR5gEgorAI9IAAx5IT+AAIAAR5g");
	this.shape_107.setTransform(0,34.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFC133").s().p("AUuCbIAAk1IT+AAIAAE1gAAQCbIAAk1IT+AAIAAE1gA0NCbIAAk1IT+AAIAAE1gEgorACbIAAk1IT+AAIAAE1g");
	this.shape_108.setTransform(0,-41.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_109.setTransform(-194.6,78.1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgoBAIAAh/IBQAAIAAAMIhBAAIAAAsIA+AAIAAAMIg+AAIAAAvIBBAAIAAAMg");
	this.shape_110.setTransform(-214.2,76.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAIgFQAJgEAJAAQAhAAAAAjIAAA4g");
	this.shape_111.setTransform(-177,50.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_112.setTransform(-195.9,48.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQADgKAJgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKgBAOQABAOgGAKQgEAKgJAGQgKAGgMAAQgKAAgIgFQgHgEgFgJIAAA4gAgTgsQgHAJgBARQABARAHAIQAHAJAMAAQAOAAAHgJQAIgIgBgRQABgQgIgJQgIgKgNAAQgMAAgHAJg");
	this.shape_113.setTransform(-204.1,52.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_114.setTransform(-188.3,22.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAJgFQAHgEAKAAQAhAAAAAjIAAA4g");
	this.shape_115.setTransform(-196,-5.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgFBAIg4h/IAPAAIAuBsIAvhsIAPAAIg3B/g");
	this.shape_116.setTransform(-217.3,-7.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_117.setTransform(204.5,50.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_118.setTransform(210.7,22.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_119.setTransform(214,-5.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_120.setTransform(204.5,-5.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_121.setTransform(-177.2,-38.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAyAvIAAg3QAAgMgFgFQgEgFgIgBQgLAAgGAIQgGAHAAAMIAAAzIgSAAIAAg3QAAgMgDgFQgFgFgJgBQgKAAgGAIQgGAHAAAMIAAAzIgSAAIAAhBQAAgOgBgLIARAAIABAPQAEgIAHgFQAHgFALAAQATAAAHASQAEgIAIgEQAIgFAKgBQAfAAAAAlIAAA4g");
	this.shape_122.setTransform(-190.2,-38.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAmBAIhIhgIAABgIgSAAIAAh/IAPAAIBIBgIAAhgIARAAIAAB/g");
	this.shape_123.setTransform(-215.8,-40.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgkAjIAFgMQAOAKASABQAJAAAGgEQAEgDAAgGQAAgEgDgDQgDgDgJgCIgNgDQgNgDgFgFQgHgHAAgJQAAgNAKgHQAJgIAQAAQAJAAAJADQAJADAGAGIgGANQgMgLgPAAQgIAAgEAEQgGADABAGQAAAEACAEQAEACAGACIAOAEQANACAHAGQAGAGAAAKQAAAMgKAHQgJAHgRAAQgXAAgOgMg");
	this.shape_124.setTransform(212.7,-38.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgkAjIAGgMQAOAKARABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgIgCIgPgDQgMgDgGgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAJADQAIADAGAGIgFANQgNgLgPAAQgIAAgFAEQgEADAAAGQAAAEADAEQADACAGACIAPAEQANACAGAGQAGAGAAAKQAAAMgKAHQgJAHgSAAQgWAAgOgMg");
	this.shape_125.setTransform(203.8,-38.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgvBAIAAh/IA0AAQAUAAAMAJQALALAAAQQAAASgLAJQgMAJgUAAIgiAAIAAA3gAgdgFIAgAAQANAAAHgFQAHgGAAgLQAAgKgHgGQgHgFgNAAIggAAg");
	this.shape_126.setTransform(182.8,-40.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgGAAQgLABgGAHQgGAIAAALIAAAyg");
	this.shape_127.setTransform(74.4,-38.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgNBDIAAhJIgRAAIAAgRIARAAIAAgJQgBgQAJgJQAHgJAPAAQAJAAAGADIAAARIgJgBQgPAAAAAQIAAAIIAUAAIAAARIgUAAIAABJg");
	this.shape_128.setTransform(42.1,-75.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgXApQgLgFgFgLQgGgLAAgOQAAgOAGgKQAFgLALgGQAKgFANAAQAOAAAKAFQALAGAFALQAGAKAAAOQAAAOgGALQgFALgLAFQgKAGgOAAQgNAAgKgGgAgQgVQgGAHAAAOQAAAPAGAHQAGAIAKAAQAMAAAGgIQAGgHAAgPQAAgOgHgHQgGgIgLAAQgKAAgGAIg");
	this.shape_129.setTransform(33.6,-73);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgFA0QgJgIABgRIAAgoIgSAAIAAgRIASAAIAAgWIAVgIIAAAeIAYAAIAAARIgYAAIAAAnQAAAQAPAAIAJgBIAAASQgGACgJAAQgPAAgHgJg");
	this.shape_130.setTransform(19.8,-74.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_131.setTransform(14.1,-75.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAcBAIgQgrQgCgFgFgDQgEgCgHgBIgXAAIAAA2IgXAAIAAh/IA2AAQAWAAALAKQALAJAAASQAAANgGAIQgHAJgMADQALACAFAOIAQApgAgdgHIAdAAQAMAAAGgEQAGgFAAgKQAAgJgGgGQgGgEgMAAIgdAAg");
	this.shape_132.setTransform(-23.7,-74.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_133.setTransform(-37.7,-75.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgZApQgJgFgGgLQgFgLAAgOQAAgNAFgLQAFgKAKgGQAJgGAMAAQAJAAAHAEQAIAEAEAIIAAgOIAWAAIAABaIgWAAIAAgPQgEAIgIAEQgHAEgJAAQgNAAgIgGgAgQgVQgGAIAAANQAAAOAGAIQAHAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_134.setTransform(-45.9,-73);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AAUAuIAAg2QABgKgFgFQgEgFgJAAQgJAAgGAHQgGAGAAALIAAAyIgXAAIAAhAIgBgaIAVAAIACAPQAEgIAIgEQAHgFAKAAQAhAAAAAlIAAA3g");
	this.shape_135.setTransform(-56.6,-73.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IBTAAIAAATIg8AAIAAAjIA4AAIAAARIg4AAIAAA4g");
	this.shape_136.setTransform(-71.5,-74.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:-70.5}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-31.6}},{t:this.shape_99,p:{x:-21.7}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:46.4}},{t:this.shape_92},{t:this.shape_91,p:{x:63.3}},{t:this.shape_90,p:{x:72.1}},{t:this.shape_89,p:{x:83.8}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{x:41.1}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:72}},{t:this.shape_82,p:{x:81.2}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:-204.4}},{t:this.shape_73},{t:this.shape_72,p:{x:-177.5}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:204.5}},{t:this.shape_35,p:{y:-5.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{y:22.4}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:204.5,y:50.2}},{t:this.shape_26,p:{x:214,y:50.2}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{y:78.2}},{t:this.shape_22,p:{x:210.7,y:78.1}},{t:this.shape_21},{t:this.shape_20,p:{x:-211.3,y:-5.4}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-183.9,y:-5.5}},{t:this.shape_16},{t:this.shape_15,p:{x:-218.1}},{t:this.shape_14,p:{x:-205.4,y:22.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-174.4,y:20.3}},{t:this.shape_9,p:{x:-221.4}},{t:this.shape_8,p:{x:-209.7}},{t:this.shape_7},{t:this.shape_6,p:{x:-191,y:48.9}},{t:this.shape_5,p:{x:-182.6,y:50.3}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:-201.4,y:78.2}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_136},{t:this.shape_93,p:{x:-64.4}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_104,p:{x:-12.8}},{t:this.shape_99,p:{x:-3.5}},{t:this.shape_100,p:{x:6.4}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_91,p:{x:53}},{t:this.shape_90,p:{x:61.8}},{t:this.shape_89,p:{x:73.4}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{x:51.8}},{t:this.shape_82,p:{x:64.7}},{t:this.shape_127},{t:this.shape_83,p:{x:82.8}},{t:this.shape_126},{t:this.shape_74,p:{x:193.6}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_72,p:{x:-203.9}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_120},{t:this.shape_119},{t:this.shape_34},{t:this.shape_33},{t:this.shape_23,p:{y:22.5}},{t:this.shape_118},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_117},{t:this.shape_35,p:{y:50.2}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_20,p:{x:200.6,y:78.2}},{t:this.shape_31,p:{y:78.1}},{t:this.shape_116},{t:this.shape_26,p:{x:-206.1,y:-5.5}},{t:this.shape_115},{t:this.shape_5,p:{x:-185.5,y:-5.4}},{t:this.shape_36,p:{x:-175.9}},{t:this.shape_15,p:{x:-210.6}},{t:this.shape_17,p:{x:-197.8,y:22.4}},{t:this.shape_114},{t:this.shape_27,p:{x:-181.2,y:22.4}},{t:this.shape_9,p:{x:-226.3}},{t:this.shape_22,p:{x:-214.6,y:50.2}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_2,p:{x:-187.5,y:50.3}},{t:this.shape_111},{t:this.shape_8,p:{x:-166.8}},{t:this.shape_110},{t:this.shape_14,p:{x:-204.1,y:78.1}},{t:this.shape_109},{t:this.shape_6,p:{x:-188.9,y:76.8}},{t:this.shape_10,p:{x:-180.4,y:76.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.4,-92.1,520.8,184.4);


(lib.q1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape.setTransform(-142.1,80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgHAHAAANIAAAzIgPAAIAAhAQAAgOgCgLIAPAAIABAQQAEgJAIgFQAJgEAJAAQAgAAABAjIAAA4g");
	this.shape_1.setTransform(-152.6,78.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_2.setTransform(-160,76.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_3.setTransform(-166.7,78.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_4.setTransform(-176.8,78.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVBCIgtgrIAAArIgPAAIAAiDIAPAAIAABSIApgoIATAAIgtAqIAxAvg");
	this.shape_5.setTransform(-190.4,76.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_6.setTransform(-201.1,78.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_7.setTransform(-208.4,76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAYBCIAAg4QAAgLgFgGQgFgGgKAAQgMAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_8.setTransform(-215.8,76.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_9.setTransform(-224.9,76.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_10.setTransform(-236,78.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_11.setTransform(-248.8,76.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_12.setTransform(-140.9,50.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_13.setTransform(-150.2,50.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_14.setTransform(-159.9,50.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIArgoIASAAIgsAqIAwAvg");
	this.shape_15.setTransform(-168.4,48.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQANAAAHgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgVAAQgTAAgQgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_16.setTransform(-179.1,52.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgHAHgBANIAAAzIgOAAIAAhAQAAgOgCgLIAPAAIABAQQAEgJAIgFQAIgEAKAAQAgAAAAAjIAAA4g");
	this.shape_17.setTransform(-189.2,50.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_18.setTransform(-199.7,50.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_19.setTransform(-212,48.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAJAAAQQAAARAHAJQAIAJAMAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_20.setTransform(-219.8,50.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_21.setTransform(-229.7,48.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgWApQgKgGgEgKQgGgLAAgOQAAgNAGgLQAEgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAHgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgMAAgIAJg");
	this.shape_22.setTransform(-240.1,50.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAjBAIgQgqQgDgIgFgEQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAIQgHAIgMAEQAFAAAEAEQAEAFADAHIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_23.setTransform(-250.7,48.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAJgFQAHgEAKAAQAhAAAAAjIAAA4g");
	this.shape_24.setTransform(-146.1,22.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_25.setTransform(-157,22.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAaAtIgahFIgZBFIgOAAIghhZIAPAAIAZBIIAbhIIAMAAIAaBIIAahIIAOAAIghBZg");
	this.shape_26.setTransform(-169.9,22.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_27.setTransform(-183.4,22.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_28.setTransform(-193.1,22.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_29.setTransform(-203.2,22.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_30.setTransform(-212.1,20.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQANAAAHgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgVAAQgTAAgQgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_31.setTransform(-223.2,24.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAIgFQAJgEAJAAQAhAAAAAjIAAA4g");
	this.shape_32.setTransform(-233.7,22.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAvBAIgOghIhBAAIgPAhIgPAAIA4h/IAMAAIA5B/gAgbATIA3AAIgchBg");
	this.shape_33.setTransform(-245.5,20.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_34.setTransform(-177.5,-5.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGBAIAAhZIANAAIAABZgAgIgvIAAgQIARAAIAAAQg");
	this.shape_35.setTransform(-183.5,-7.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKAAAOQAAAOgGAKQgFAKgIAGQgJAGgNAAQgJAAgJgFQgHgEgEgJIAAA4gAgTgsQgHAJAAARQAAARAHAIQAHAJAMAAQAOAAAHgJQAHgIAAgRQAAgQgHgJQgIgKgNAAQgMAAgHAJg");
	this.shape_36.setTransform(-190.8,-3.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_37.setTransform(-202.1,-5.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgGBAIAAhyIgtAAIAAgNIBnAAIAAANIgtAAIAAByg");
	this.shape_38.setTransform(-212.7,-7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_39.setTransform(-177.5,-38.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAyAvIAAg3QgBgMgEgFQgEgFgIgBQgLAAgGAIQgGAHAAAMIAAAzIgSAAIAAg3QAAgMgDgFQgFgFgJgBQgKAAgGAIQgGAHAAAMIAAAzIgSAAIAAhBQAAgOgBgLIAQAAIACAPQAEgIAHgFQAIgFAKAAQATAAAHASQAEgIAIgEQAIgFAKgBQAeAAABAlIAAA4g");
	this.shape_40.setTransform(-190.7,-38.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_41.setTransform(-204.4,-38.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAmBAIhIhgIAABgIgSAAIAAh/IAPAAIBIBgIAAhgIASAAIAAB/g");
	this.shape_42.setTransform(-216.4,-40.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_43.setTransform(214,78.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_44.setTransform(204.5,78.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_45.setTransform(197.9,76.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_46.setTransform(190.1,78.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgmBAIAAh/IBNAAIAAANIg/AAIAAArIA8AAIAAAMIg8AAIAAA7g");
	this.shape_47.setTransform(180.4,76.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_48.setTransform(210.7,50.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_49.setTransform(200.6,50.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_50.setTransform(192.8,50.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGBAIAAhyIgtAAIAAgNIBnAAIAAANIgtAAIAAByg");
	this.shape_51.setTransform(183.5,48.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_52.setTransform(210.7,22.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_53.setTransform(200.6,22.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_54.setTransform(192.8,22.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgGBAIAAhzIgtAAIAAgMIBnAAIAAAMIgtAAIAABzg");
	this.shape_55.setTransform(183.5,20.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_56.setTransform(210.7,-5.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_57.setTransform(200.6,-5.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_58.setTransform(192.8,-5.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgGBAIAAhyIgtAAIAAgNIBnAAIAAANIgtAAIAAByg");
	this.shape_59.setTransform(183.5,-7.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgkAjIAGgMQAOAKARABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgJgCIgOgDQgMgDgGgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAJADQAIADAGAGIgFANQgNgLgPAAQgIAAgFAEQgEADAAAGQAAAEADAEQADACAGACIAPAEQANACAGAGQAGAGAAAKQAAAMgKAHQgJAHgSAAQgWAAgOgMg");
	this.shape_60.setTransform(214.6,-38.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_61.setTransform(204.8,-38.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_62.setTransform(197.4,-40.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_63.setTransform(189.8,-38.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgnBAIAAh/IASAAIAABvIA+AAIAAAQg");
	this.shape_64.setTransform(180.2,-40.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVABQAWgBAMARQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_65.setTransform(83.8,76.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAMBAIAAgcIg5AAIAAgLIA8hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_66.setTransform(73.1,76.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_67.setTransform(65.5,81.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AAMBAIAAgcIg6AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_68.setTransform(58.2,76.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAMBAIAAgcIg6AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_69.setTransform(47.4,76.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_70.setTransform(83.8,48.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgUAGgQQAGgQALgHQALgJAOAAQALAAALAEQAKAFAIAIIgFAKQgJgHgIgDQgJgEgIAAQgQAAgJAOQgJAPAAAaIAAADQAEgJAJgHQAKgFALgBQALABAJAEQAKAGAFAIQAFAKAAALQAAAMgGAJQgFAKgJAFQgKAGgMAAQgWgBgMgQgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgIAAgNQAAgMgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_71.setTransform(73,48.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_72.setTransform(65.5,53.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AghBAIA7hyIhEAAIAAgNIBVAAIAAALIg8B0g");
	this.shape_73.setTransform(58,48.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgUAGgQQAGgQALgHQALgJAOAAQALAAALAEQAKAFAIAIIgFAKQgJgHgIgDQgJgEgIAAQgQAAgJAOQgJAPAAAaIAAADQAEgJAJgHQAKgFALgBQALABAJAEQAKAGAFAIQAFAKAAALQAAAMgGAJQgFAKgJAFQgKAGgMAAQgWgBgMgQgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgIAAgNQAAgMgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_74.setTransform(47.3,48.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgQAVAAQAWAAAMAQQALARAAAfQAAAggLAQQgMARgWAAQgVAAgMgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_75.setTransform(83.8,20.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAKgEQAJgEAMAAQAMAAALAEQAJAEAFAIQAGAHAAALQAAAKgGAIQgHAIgLADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHABAKQgBAMAJAGQAIAGAOAAQAPAAAIgGQAJgGAAgMQgBgKgIgHQgJgGgOgCQgNACgJAGgAgUguQgHAGAAALQgBAKAJAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_76.setTransform(73,20.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_77.setTransform(65.5,26);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgVAGgPQAGgQALgIQALgHAOAAQALAAALADQAKAFAIAHIgFAMQgJgIgIgEQgJgDgIAAQgQAAgJAPQgJAPAAAZIAAACQAEgIAJgGQAKgHALAAQALAAAJAGQAKAFAFAIQAFAJAAAMQAAAMgGAKQgFAJgJAFQgKAFgMAAQgWAAgMgQgAgRAEQgIAIAAANQAAAMAIAIQAIAIAMAAQAMAAAHgIQAIgHAAgNQAAgOgIgHQgHgHgNAAQgLAAgIAHg");
	this.shape_78.setTransform(58.1,20.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AghBAIA7hzIhEAAIAAgMIBVAAIAAALIg8B0g");
	this.shape_79.setTransform(47.2,20.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAggALgQQAMgRAVAAQAWAAAMARQALAQAAAgQAAAggLARQgMARgWAAQgVAAgMgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_80.setTransform(83.8,-7.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAKgEQAJgEAMAAQAMAAALAEQAJAEAFAIQAGAHAAALQAAAKgGAIQgHAIgLADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHABAKQgBAMAJAGQAIAGAOAAQAPAAAIgGQAJgGAAgMQgBgKgIgHQgJgGgOgCQgNACgJAGgAgUguQgHAGAAALQgBAKAJAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_81.setTransform(73,-7.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_82.setTransform(65.5,-1.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAJgEQALgEALAAQANAAAJAEQAKAEAFAIQAGAHAAALQAAAKgGAIQgHAIgLADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHAAAKQAAAMAJAGQAIAGAOAAQAPAAAIgGQAJgGgBgMQAAgKgJgHQgIgGgOgCQgNACgJAGgAgUguQgHAGAAALQgBAKAJAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_83.setTransform(58,-7.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgZA9QgLgEgIgHIAGgLQAJAHAIAEQAJADAIAAQAQAAAJgOQAJgPAAgaIAAgCQgEAJgKAGQgJAFgLAAQgMABgJgGQgJgFgFgIQgFgJAAgMQAAgMAFgKQAGgJAJgFQAJgGAMAAQAXABAMAQQANAQAAAdQAAAggNATQgNASgXAAQgLAAgKgFgAgWgtQgHAJAAANQAAAMAHAIQAIAHAMAAQAMAAAIgHQAIgIAAgMQAAgOgIgHQgIgIgMAAQgMAAgIAHg");
	this.shape_84.setTransform(47.2,-7.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAWBCIAAg3QAAgLgEgFQgFgGgKAAQgLAAgHAHQgGAHAAAMIAAAzIgSAAIAAiDIASAAIAAA4QAEgIAIgFQAIgEAJAAQAgAAAAAkIAAA4g");
	this.shape_85.setTransform(92.3,-40.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_86.setTransform(81.2,-38.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AATBCIgqgrIAAArIgSAAIAAiDIASAAIAABSIAngoIAWAAIgqAqIAuAvg");
	this.shape_87.setTransform(72,-40.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgBgLIARAAIABAQQADgJAHgEQAIgFAJgBIAJACIAAAQQgGgCgFAAQgNABgFAHQgGAIAAALIAAAyg");
	this.shape_88.setTransform(63.7,-38.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_89.setTransform(54,-38.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAtBAIAAhXIgmBXIgMAAIgnhXIABBXIgRAAIAAh/IAPAAIAtBpIAvhpIAOAAIAAB/g");
	this.shape_90.setTransform(41.1,-40.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAQASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAPIgKAAIAAhKIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMgBQgLAAgMgDg");
	this.shape_91.setTransform(-54.5,76.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgPIAhgUIAIAAIAAByIAcAAIAAANg");
	this.shape_92.setTransform(-65.1,76.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgPIAhgUIAIAAIAAByIAcAAIAAANg");
	this.shape_93.setTransform(-75.9,76.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIATAAIAAAMIgTAAIAAAcgAgeAYIArAAIAAg+g");
	this.shape_94.setTransform(-54.6,48.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgPIAhgUIAIAAIAAByIAcAAIAAANg");
	this.shape_95.setTransform(-65.1,48.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgPIAhgUIAIAAIAAByIAcAAIAAANg");
	this.shape_96.setTransform(-75.9,48.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_97.setTransform(-55,20.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgjBAIAAgMIAdAAIAAhhIgbARIAAgPIAhgUIAIAAIAABzIAcAAIAAAMg");
	this.shape_98.setTransform(-65.1,20.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgjBAIAAgMIAdAAIAAhhIgbARIAAgPIAhgUIAIAAIAABzIAcAAIAAAMg");
	this.shape_99.setTransform(-75.9,20.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgmBBIAAgLIAsgyQAIgJAEgIQAFgIAAgIQgBgLgGgGQgGgFgKAAQgTAAgSAOIgFgLQAHgHAMgEQALgFAMAAQARAAAKAJQAKAJAAAQQAAALgEAKQgGAJgLANIgjAnIA+AAIAAANg");
	this.shape_100.setTransform(-54.7,-7.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgOIAhgVIAIAAIAAByIAcAAIAAANg");
	this.shape_101.setTransform(-65.1,-7.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgOIAhgVIAIAAIAAByIAcAAIAAANg");
	this.shape_102.setTransform(-75.9,-7.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("Ag2BAIAAh/IAtAAQAeAAARARQARAQAAAeQAAAfgRAQQgRARgeAAgAgkAwIAaAAQAuAAAAgwQAAgvguAAIgaAAg");
	this.shape_103.setTransform(-62.9,-40.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgIBAIAAh/IARAAIAAB/g");
	this.shape_104.setTransform(-72.4,-40.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgKBAIAAhsIgrAAIAAgTIBqAAIAAATIgpAAIAABsg");
	this.shape_105.setTransform(83.8,-74.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgXA6QgOgIgHgPQgIgPAAgUQAAgTAIgPQAHgOAOgIQAOgJASAAQANAAAMAEQALAFAIAHIgIARQgJgHgIgDQgJgEgJAAQgSAAgKAMQgKANAAAVQAAAXAKAMQAKAMASAAQAJAAAJgDQAIgDAJgHIAIARQgIAHgLAEQgMAEgNAAQgSAAgOgIg");
	this.shape_106.setTransform(72.1,-74.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgKBAIAAh/IAVAAIAAB/g");
	this.shape_107.setTransform(63.3,-74.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgbAuIAAhAIgBgaIAUAAIACAQQAEgIAGgFQAIgEAIgBQAGABADABIAAAVQgFgDgHAAQgLAAgGAGQgFAIAAAKIAAAwg");
	this.shape_108.setTransform(52.8,-73.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgKBCIAAhaIAVAAIAABagAgLgrIAAgWIAXAAIAAAWg");
	this.shape_109.setTransform(46.4,-75);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAUBCIAAg3QAAgKgEgEQgFgFgIAAQgJAAgHAGQgGAGAAALIAAAzIgXAAIAAiDIAXAAIAAA2QAFgHAHgEQAHgEAJAAQAhAAABAkIAAA4g");
	this.shape_110.setTransform(38.7,-75.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AARBCIgngqIAAAqIgWAAIAAiDIAWAAIAABQIAlgmIAbAAIgpAqIAsAvg");
	this.shape_111.setTransform(29,-75.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAsBAIgMgeIg+AAIgNAeIgXAAIA5h/IASAAIA7B/gAgWAQIAtAAIgXg2g");
	this.shape_112.setTransform(16.6,-74.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAUAuIAAg2QAAgKgEgFQgEgFgJAAQgJAAgGAHQgHAGABALIAAAyIgXAAIAAhAIgBgaIAVAAIACAPQAEgIAIgEQAHgFAKAAQAhAAAAAlIAAA3g");
	this.shape_113.setTransform(-0.6,-73.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgZApQgKgFgFgLQgFgLAAgOQAAgNAFgLQAGgKAJgGQAJgGALAAQAJAAAIAEQAIAEAEAIIAAgOIAWAAIAABaIgWAAIAAgPQgEAIgIAEQgIAEgJAAQgLAAgJgGgAgQgVQgGAIAAANQAAAOAGAIQAHAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_114.setTransform(-11.8,-73);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AglAkIAGgQQAOALASAAQAIAAAFgDQAEgDAAgFQAAgEgDgCQgDgDgHgBIgPgEQgYgFAAgTQAAgJAEgGQAFgGAIgEQAJgDAKAAQAKAAAJACQAJADAHAGIgHAPQgOgKgOAAQgHAAgEADQgFADAAAFQAAAEADACQADADAGABIAOAEQAOADAGAFQAGAHAAAKQAAAMgKAIQgKAHgRAAQgYAAgOgLg");
	this.shape_115.setTransform(-21.7,-73);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgpAJIAAg2IAXAAIAAA2QAAAKAEAEQAEAFAIAAQAJAAAGgGQAGgHAAgLIAAgxIAXAAIAABaIgWAAIAAgOQgFAHgHAEQgHAEgIAAQgiAAAAglg");
	this.shape_116.setTransform(-31.6,-72.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgFA0QgJgIAAgRIAAgoIgRAAIAAgRIARAAIAAgWIAWgIIAAAeIAYAAIAAARIgYAAIAAAnQAAAQAPAAIAJgBIAAASQgGACgIAAQgQAAgHgJg");
	this.shape_117.setTransform(-40.4,-74.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgpAJIAAg2IAXAAIAAA2QAAAKAEAEQAEAFAIAAQAJAAAGgGQAGgHAAgLIAAgxIAXAAIAABaIgWAAIAAgOQgFAHgHAEQgHAEgIAAQgiAAAAglg");
	this.shape_118.setTransform(-49.1,-72.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgtBCIAAhnIgBgaIAWAAIABAQQAEgJAIgFQAIgEAJAAQAMAAAKAGQAIAGAFAKQAFAMABAOQgBAOgFAKQgFAKgIAFQgKAHgMgBQgJAAgHgEQgIgEgEgIIAAA2gAgQgoQgGAIAAAPQAAANAGAHQAGAIALAAQALAAAGgIQAGgGAAgOQAAgOgGgJQgGgHgLAAQgLgBgGAIg");
	this.shape_119.setTransform(-59.8,-71.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgcAjQgNgNAAgWQAAgNAFgLQAGgKAKgGQAKgGAMAAQATAAALAMQAKAMAAAVIAAACIg9AAQABAPAGAHQAHAHAMAAQAPAAAMgKIAHAQQgHAFgJADQgJADgKAAQgVAAgNgMgAgLgZQgGAFgBAKIApAAQgBgKgFgFQgFgFgJAAQgIAAgGAFg");
	this.shape_120.setTransform(-70.5,-73);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AAbBAIg7g8IAAA8IgXAAIAAh/IAXAAIAAA5IA5g5IAbAAIg8A+IBABBg");
	this.shape_121.setTransform(-80.4,-74.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E0912F").s().p("EgorAChIAAlBMBRXAAAIAAFBg");
	this.shape_122.setTransform(0,-76.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCE3A8").s().p("AUuI9IAAx5IT+AAIAAR5gAAQI9IAAx5IT+AAIAAR5gA0NI9IAAx5IT+AAIAAR5gEgorAI9IAAx5IT+AAIAAR5g");
	this.shape_123.setTransform(0,34.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFC133").s().p("AUuCbIAAk1IT+AAIAAE1gAAQCbIAAk1IT+AAIAAE1gA0NCbIAAk1IT+AAIAAE1gEgorACbIAAk1IT+AAIAAE1g");
	this.shape_124.setTransform(0,-41.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAJgFQAIgEAJAAQAhAAgBAjIAAA4g");
	this.shape_125.setTransform(-181.7,78.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_126.setTransform(-158.7,50.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_127.setTransform(-187.6,50.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgRApQgJgGgGgKQgFgLAAgOQAAgNAFgKQAGgLAKgGQAKgGAMAAQAJAAAJADQAIADAGAGIgFALQgGgGgHgCQgGgDgHAAQgNAAgIAKQgIAJAAAPQAAARAIAJQAIAJANAAQAHAAAGgDQAHgCAGgGIAFALQgGAGgIADQgJADgJAAQgMAAgLgGg");
	this.shape_128.setTransform(-210.2,50.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgBgMIANAAIACASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAJAGAGALQAEAKAAAOQAAAOgEAKQgGAKgJAGQgIAGgNAAQgJAAgIgFQgIgEgFgJIAAA4gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAJg");
	this.shape_129.setTransform(-230.8,52.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKAEQAKADAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgFQgEgEgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgMQAAgLAFgIQAGgIALgFQAKgEANgBQAOAAALAEQAMAFAIAIIgGALQgJgIgJgDQgKgEgLAAQgOAAgIAGQgJAHAAALQAAAJAIAGQAHAFAPADIAaAGQAJAEAGAHQAHAGAAAMQAAAKgGAJQgGAHgLAFQgKAFgPAAQgdgBgSgQg");
	this.shape_130.setTransform(-242,48.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgDA1QgHgIAAgNIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAxQAAAJAEAEQAEAFAIAAQAFAAAFgCIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_131.setTransform(-159.1,21.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgVApQgKgGgGgKQgFgLAAgOQAAgNAFgLQAGgKAKgGQAJgGAMAAQAMAAALAGQAJAGAGAKQAFALAAANQAAAOgFALQgGAKgJAGQgLAGgMAAQgMAAgJgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_132.setTransform(-199,22.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_133.setTransform(-206.8,22.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgDA1QgHgIAAgNIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAxQAAAJAEAEQAEAFAIAAQAFAAAFgCIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_134.setTransform(-213.9,21.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAvBAIgOghIhBAAIgPAhIgPAAIA4h/IAMAAIA5B/gAgbATIA3AAIgchBg");
	this.shape_135.setTransform(-232.5,20.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_136.setTransform(-178.5,-5.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQADgKAJgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAFAKABAOQgBAOgFAKQgFAKgIAGQgJAGgNAAQgJAAgJgFQgHgEgEgJIAAA4gAgTgsQgHAJAAARQAAARAHAIQAHAJANAAQANAAAHgJQAHgIAAgRQAAgQgHgJQgIgKgMAAQgNAAgHAJg");
	this.shape_137.setTransform(-191.8,-3.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_138.setTransform(-177.2,-38.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAyAvIAAg3QAAgMgFgFQgEgFgIgBQgLAAgGAIQgGAHAAAMIAAAzIgSAAIAAg3QAAgMgDgFQgFgFgJgBQgKAAgGAIQgGAHAAAMIAAAzIgSAAIAAhBQAAgOgBgLIARAAIABAPQAEgIAHgFQAHgFALAAQATAAAHASQAEgIAIgEQAIgFAKgBQAfAAAAAlIAAA4g");
	this.shape_139.setTransform(-190.2,-38.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAmBAIhIhgIAABgIgSAAIAAh/IAPAAIBIBgIAAhgIARAAIAAB/g");
	this.shape_140.setTransform(-215.8,-40.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_141.setTransform(210.7,22.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_142.setTransform(210.7,-5.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgkAjIAFgMQAOAKASABQAJAAAGgEQAEgDAAgGQAAgEgDgDQgDgDgJgCIgNgDQgNgDgFgFQgHgHAAgJQAAgNAKgHQAJgIAQAAQAJAAAJADQAJADAGAGIgGANQgMgLgPAAQgIAAgEAEQgGADABAGQAAAEACAEQAEACAGACIAOAEQANACAHAGQAGAGAAAKQAAAMgKAHQgJAHgRAAQgXAAgOgMg");
	this.shape_143.setTransform(212.7,-38.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgkAjIAGgMQAOAKARABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgIgCIgPgDQgMgDgGgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAJADQAIADAGAGIgFANQgNgLgPAAQgIAAgFAEQgEADAAAGQAAAEADAEQADACAGACIAPAEQANACAGAGQAGAGAAAKQAAAMgKAHQgJAHgSAAQgWAAgOgMg");
	this.shape_144.setTransform(203.8,-38.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgvBAIAAh/IA0AAQAUAAAMAJQALALAAAQQAAASgLAJQgMAJgUAAIgiAAIAAA3gAgdgFIAgAAQANAAAHgFQAHgGAAgLQAAgKgHgGQgHgFgNAAIggAAg");
	this.shape_145.setTransform(182.8,-40.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgGAAQgLABgGAHQgGAIAAALIAAAyg");
	this.shape_146.setTransform(74.4,-38.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgNBDIAAhJIgRAAIAAgRIARAAIAAgJQgBgQAJgJQAHgJAPAAQAJAAAGADIAAARIgJgBQgPAAAAAQIAAAIIAUAAIAAARIgUAAIAABJg");
	this.shape_147.setTransform(42.1,-75.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgXApQgLgFgFgLQgGgLAAgOQAAgOAGgKQAFgLALgGQAKgFANAAQAOAAAKAFQALAGAFALQAGAKAAAOQAAAOgGALQgFALgLAFQgKAGgOAAQgNAAgKgGgAgQgVQgGAHAAAOQAAAPAGAHQAGAIAKAAQAMAAAGgIQAGgHAAgPQAAgOgHgHQgGgIgLAAQgKAAgGAIg");
	this.shape_148.setTransform(33.6,-73);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgFA0QgJgIABgRIAAgoIgSAAIAAgRIASAAIAAgWIAVgIIAAAeIAYAAIAAARIgYAAIAAAnQAAAQAPAAIAJgBIAAASQgGACgJAAQgPAAgHgJg");
	this.shape_149.setTransform(19.8,-74.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_150.setTransform(14.1,-75.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAcBAIgQgrQgCgFgFgDQgEgCgHgBIgXAAIAAA2IgXAAIAAh/IA2AAQAWAAALAKQALAJAAASQAAANgGAIQgHAJgMADQALACAFAOIAQApgAgdgHIAdAAQAMAAAGgEQAGgFAAgKQAAgJgGgGQgGgEgMAAIgdAAg");
	this.shape_151.setTransform(-23.7,-74.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgKBCIAAiDIAVAAIAACDg");
	this.shape_152.setTransform(-37.7,-75.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgZApQgJgFgGgLQgFgLAAgOQAAgNAFgLQAFgKAKgGQAJgGAMAAQAJAAAHAEQAIAEAEAIIAAgOIAWAAIAABaIgWAAIAAgPQgEAIgIAEQgHAEgJAAQgNAAgIgGgAgQgVQgGAIAAANQAAAOAGAIQAHAIAKAAQALAAAGgIQAGgIAAgOQAAgNgGgIQgGgIgLAAQgKAAgHAIg");
	this.shape_153.setTransform(-45.9,-73);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAUAuIAAg2QABgKgFgFQgEgFgJAAQgJAAgGAHQgGAGAAALIAAAyIgXAAIAAhAIgBgaIAVAAIACAPQAEgIAIgEQAHgFAKAAQAhAAAAAlIAAA3g");
	this.shape_154.setTransform(-56.6,-73.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgpBAIAAh/IBTAAIAAATIg8AAIAAAjIA4AAIAAARIg4AAIAAA4g");
	this.shape_155.setTransform(-71.5,-74.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:-70.5}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:-31.6}},{t:this.shape_115,p:{x:-21.7}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:46.4}},{t:this.shape_108},{t:this.shape_107,p:{x:63.3}},{t:this.shape_106,p:{x:72.1}},{t:this.shape_105,p:{x:83.8}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:41.1}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:72}},{t:this.shape_86,p:{x:81.2}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{y:-5.5}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:210.7,y:22.4}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:210.7}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:214}},{t:this.shape_42},{t:this.shape_41,p:{x:-204.4}},{t:this.shape_40},{t:this.shape_39,p:{x:-177.5}},{t:this.shape_38,p:{x:-212.7}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-183.5}},{t:this.shape_34},{t:this.shape_33,p:{x:-245.5,y:20.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-240.1}},{t:this.shape_21,p:{x:-229.7}},{t:this.shape_20},{t:this.shape_19,p:{x:-212}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:-159.9,y:50.2}},{t:this.shape_13,p:{x:-150.2,y:50.2}},{t:this.shape_12,p:{x:-140.9,y:50.2}},{t:this.shape_11},{t:this.shape_10,p:{x:-236,y:78.1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-208.4}},{t:this.shape_6,p:{x:-201.1,y:78.2}},{t:this.shape_5},{t:this.shape_4,p:{x:-176.8,y:78.1}},{t:this.shape_3,p:{x:-166.7,y:78.1}},{t:this.shape_2,p:{x:-160}},{t:this.shape_1,p:{x:-152.6,y:78.1}},{t:this.shape}]}).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_155},{t:this.shape_109,p:{x:-64.4}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_120,p:{x:-12.8}},{t:this.shape_115,p:{x:-3.5}},{t:this.shape_116,p:{x:6.4}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_107,p:{x:53}},{t:this.shape_106,p:{x:61.8}},{t:this.shape_105,p:{x:73.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:51.8}},{t:this.shape_86,p:{x:64.7}},{t:this.shape_146},{t:this.shape_87,p:{x:82.8}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_145},{t:this.shape_41,p:{x:193.6}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_142},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_141},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_56,p:{y:50.2}},{t:this.shape_47},{t:this.shape_14,p:{x:190.1,y:78.1}},{t:this.shape_45},{t:this.shape_13,p:{x:204.5,y:78.1}},{t:this.shape_52,p:{x:214,y:78.1}},{t:this.shape_140},{t:this.shape_39,p:{x:-203.9}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_38,p:{x:-213.7}},{t:this.shape_12,p:{x:-203.1,y:-5.5}},{t:this.shape_137},{t:this.shape_35,p:{x:-184.5}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_3,p:{x:-221.5,y:22.4}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_1,p:{x:-188.6,y:22.3}},{t:this.shape_10,p:{x:-178.2,y:22.4}},{t:this.shape_6,p:{x:-167.3,y:22.5}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_4,p:{x:-220.5,y:50.2}},{t:this.shape_128},{t:this.shape_48,p:{x:-201}},{t:this.shape_127},{t:this.shape_22,p:{x:-179.8}},{t:this.shape_21,p:{x:-169}},{t:this.shape_126},{t:this.shape_19,p:{x:-150.5}},{t:this.shape_33,p:{x:-211.9,y:76.3}},{t:this.shape_7,p:{x:-203.2}},{t:this.shape_2,p:{x:-198.9}},{t:this.shape_43,p:{x:-191.8}},{t:this.shape_125}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-260.4,-92.1,520.8,184.4);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(233,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_1.setTransform(229.3,-2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_2.setTransform(222.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_3.setTransform(215.2,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(208.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_5.setTransform(199.3,-2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(184.9,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(175.6,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_8.setTransform(166,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgjAwQALgCAFgFQAGgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_9.setTransform(157.2,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_10.setTransform(146.3,-0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_11.setTransform(138.3,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_12.setTransform(130.8,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(124.8,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_14.setTransform(118.4,-2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(107.2,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(97.6,-2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(88,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_18.setTransform(78.8,1.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_19.setTransform(67.8,-2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(61.5,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_21.setTransform(52.6,-2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(42.5,-0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_23.setTransform(36.1,-2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_24.setTransform(25.3,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_25.setTransform(15.3,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(8.9,-1.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_27.setTransform(4.1,-1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-3,-0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_29.setTransform(-11.4,-0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(-24.2,-0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-33.9,-0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_32.setTransform(-41.9,-2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_33.setTransform(-50.1,-2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_34.setTransform(-60,-0.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_35.setTransform(-67.4,-1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-74.5,-0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_37.setTransform(-80.7,-2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_38.setTransform(-91.6,-0.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_39.setTransform(-101.2,-0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_40.setTransform(-110.8,-2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_41.setTransform(-122.5,-1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(-129.5,-0.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_43.setTransform(-136.3,-0.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-144,-0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_45.setTransform(-153.3,-1.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_46.setTransform(168.4,-0.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_47.setTransform(156.8,-0.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(143.8,-0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_49.setTransform(135.4,-0.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_50.setTransform(117.7,-0.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_51.setTransform(88.7,-0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_52.setTransform(80.4,-0.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_53.setTransform(58.7,-2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_54.setTransform(51.1,-1.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(39.6,-0.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_56.setTransform(32.2,-1.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_57.setTransform(21.2,-0.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_58.setTransform(0.3,-2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_59.setTransform(-35.7,-2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_60.setTransform(-43.3,-1.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(-64.4,-0.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_62.setTransform(-71.4,-0.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(-79.8,-2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_64.setTransform(-93.6,-2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_65.setTransform(-143,-0.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAOAAAbQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgsgrAAIgZAAg");
	this.shape_66.setTransform(-152.2,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:-136.3}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-80.7}},{t:this.shape_36,p:{x:-74.5}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-24.2}},{t:this.shape_29,p:{x:-11.4}},{t:this.shape_28,p:{x:-3}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:36.1}},{t:this.shape_22,p:{x:42.5}},{t:this.shape_21},{t:this.shape_20,p:{x:61.5}},{t:this.shape_19},{t:this.shape_18,p:{x:78.8}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:118.4}},{t:this.shape_13,p:{x:124.8}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:146.3}},{t:this.shape_9},{t:this.shape_8,p:{x:166}},{t:this.shape_7,p:{x:175.6}},{t:this.shape_6,p:{x:184.9}},{t:this.shape_5},{t:this.shape_4,p:{x:208.2}},{t:this.shape_3,p:{x:215.2}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:233}}]}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_22,p:{x:-136}},{t:this.shape_6,p:{x:-126.4}},{t:this.shape_8,p:{x:-112.6}},{t:this.shape_30,p:{x:-102.9}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_18,p:{x:-54.9}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_36,p:{x:-26.7}},{t:this.shape_37,p:{x:-16.3}},{t:this.shape_13,p:{x:-9.8}},{t:this.shape_58},{t:this.shape_28,p:{x:9.2}},{t:this.shape_14,p:{x:15.4}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_20,p:{x:67.7}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_43,p:{x:96.7}},{t:this.shape_10,p:{x:102.5}},{t:this.shape_4,p:{x:109.3}},{t:this.shape_50},{t:this.shape_3,p:{x:124.2}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_23,p:{x:150.3}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_7,p:{x:180.1}},{t:this.shape_29,p:{x:188.7}},{t:this.shape,p:{x:194.6}}]},1).wait(1));

	// outlineshade
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#D40000").ss(4,2,0,3).p("EAiEAAAMgj1AAAIgtAAI9DAAIiiAA");
	this.shape_67.setTransform(33.4,16.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#D40000").ss(1,2,0,3).p("EgibAC0IAPhnIBpg/IhghJIALh5MAgvAAAMAjlAAAIgxFp");
	this.shape_68.setTransform(35.9,-1.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F5F5F5").s().p("AO7C1I9BgBIiiAAIAQhnIBog/IhghIIALh6MAguAAAIhBFpg");
	this.shape_69.setTransform(-78,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]}).wait(2));

	// white
	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAFAFA").s().p("A/5C0IiiAAIAPhnIBpg/IhghIIALh6MBEUAAAIgxFpg");
	this.shape_70.setTransform(35.9,-1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_70).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.5,-20.7,444,39.3);


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


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


(lib.dArea3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbA+QgNgEgJgHIAIgRQAJAHAKADQALADALAAQANAAAHgEQAIgFAAgIQAAgIgHgEQgHgDgOgEQgYgFgLgHQgLgJAAgPQAAgMAGgJQAGgIALgFQALgGAOAAQAOAAAMAEQAMAFAIAHIgIARQgRgOgVAAQgLAAgIAFQgHAFAAAJQAAAIAHAEQAGAEAOADQARAEAKAEQAKAEAFAHQAFAGAAALQAAALgGAJQgGAJgLAEQgMAFgPAAQgOAAgNgEg");
	this.shape.setTransform(0,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#777777"],[0,1],0,20,0,-20).s().p("Aq7CvQgdAAgRgLQgdgSAAguIAAjHQAAhLBLAAIV3AAQAuAAASAcQALASAAAdIAADHQAABLhLAAg");
	this.shape_1.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Aq7DXQhzAAAAhzIAAjHQAAhzBzAAIV3AAQBzAAAABzIAADHQAABzhzAAg");
	this.shape_2.setTransform(0,0,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AoSCjQhYAAAAhXIAAiXQAAhXBYAAIQlAAQBXAAABBXIAACXQgBBXhXAAg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-16.9,123.7,33.3);


(lib.dArea3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBAIgQgrQgCgFgFgDQgEgDgHABIgXAAIAAA1IgXAAIAAh/IA2AAQAWAAALAKQALAJAAASQAAAMgGAJQgHAJgMADQALADAFANIAQApgAgdgGIAdAAQAMgBAGgEQAGgFAAgKQAAgKgGgFQgGgEgMAAIgdAAg");
	this.shape.setTransform(0.4,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#777777"],[0,1],0,20,0,-20).s().p("Aq7CvQgdAAgRgLQgdgSAAguIAAjHQAAhLBLAAIV3AAQAuAAASAcQALASAAAdIAADHQAABLhLAAg");
	this.shape_1.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Aq7DXQhzAAAAhzIAAjHQAAhzBzAAIV3AAQBzAAAABzIAADHQAABzhzAAg");
	this.shape_2.setTransform(0,0,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AoSCjQhYAAAAhXIAAiXQAAhXBYAAIQlAAQBXAAABBXIAACXQgBBXhXAAg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-16.9,123.7,33.3);


(lib.dArea3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATBDQgIgIgGgKIgFAAQgSAAgNgIQgOgIgIgPQgHgOAAgTQAAgUAHgPQAIgPANgIQAOgIASAAQATAAAOAIQANAIAIAPQAHAPAAAUQAAAUgJAQQgJAQgQAHQAEAHAGAGIAOANIgQAMQgJgGgHgJgAgbgyQgKAMAAAXQAAAVAKANQAKAMARAAQASAAAKgMQAKgNAAgVQAAgXgKgMQgKgNgSAAQgRAAgKANg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#777777"],[0,1],0,20,0,-20).s().p("Aq7CvQgdAAgRgLQgdgSAAguIAAjHQAAhLBLAAIV3AAQAuAAASAcQALASAAAdIAADHQAABLhLAAg");
	this.shape_1.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Aq7DXQhzAAAAhzIAAjHQAAhzBzAAIV3AAQBzAAAABzIAADHQAABzhzAAg");
	this.shape_2.setTransform(0,0,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AoSCjQhYAAAAhXIAAiXQAAhXBYAAIQlAAQBXAAABBXIAACXQgBBXhXAAg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-16.9,123.7,33.3);


(lib.dArea3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBAIAAh/IA3AAQAVAAALAKQAMAKgBARQABARgMAKQgLAJgVABIggAAIAAA1gAgagGIAdAAQANAAAFgGQAHgFgBgIQABgLgHgEQgFgFgNAAIgdAAg");
	this.shape.setTransform(0.4,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#333333","#777777"],[0,1],0,20,0,-20).s().p("Aq7CvQgdAAgRgLQgdgSAAguIAAjHQAAhLBLAAIV3AAQAuAAASAcQALASAAAdIAADHQAABLhLAAg");
	this.shape_1.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Aq7DXQhzAAAAhzIAAjHQAAhzBzAAIV3AAQBzAAAABzIAADHQAABzhzAAg");
	this.shape_2.setTransform(0,0,0.759,0.759);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AoSCjQhYAAAAhXIAAiXQAAhXBYAAIQlAAQBXAAABBXIAACXQgBBXhXAAg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-16.9,123.7,33.3);


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


(lib.btnBase = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("Aq7A+QgUABgNgIQgRgMAAgeIAAgYQAAgzAyAAIV3AAQAeABANAQQAHANAAAVIAAAYQAAAxgyAAg");
	this.shape.setTransform(0,-8.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#002254","#397498"],[0,1],40.8,51.5,-40.7,-51.5).s().p("Aq7CvQgdAAgRgLQgdgSAAguIAAjHQAAhLBLAAIV3AAQAuAAASAcQALASAAAdIAADHQAABLhLAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().rr(-80,-20,160,40,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-20,160,40);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-37.3,486.3,66.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAMAyIAJhMIgiAAIgIBMIgbAAIAKhkIAXAAIAEAJIAOgJIAZAAIAVAOIgJBWg");
	this.shape.setTransform(33.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhKIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(22.1,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_2.setTransform(10.4,1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_3.setTransform(1.8,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAzIgWgOIAJhKIAZgNIApAAIAWANIgIBKIgZAOgAgTAbIAhAAIAGg2IghAAg");
	this.shape_4.setTransform(-7.7,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAzIgVgOIAIhKIAYgNIAqAAIAWANIgIBKIgZAOgAgTAbIAiAAIAFg2IghAAg");
	this.shape_5.setTransform(-19.6,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BGIAOiLIBMAAIAVAOIgEAsIgTAKIAAAAIAQAJIgEAwIgZAOgAgZAuIArAAIADglIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_6.setTransform(-32.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnBase("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.875)").s().p("AoSCnQhbAAAAhbIAAiXQAAhbBbAAIQlAAQBbAAAABbIAACXQAABbhbAAgApphLIAACXQAABXBXAAIQlAAQBXAAAAhXIAAiXQAAhXhXAAIwlAAQhXAAAABXgAoSCMQhBAAAAhAIAAiXQAAhABBAAIQlAAQBBAAAABAIAACXQAABAhBAAgApPhLIAACXQAAA9A9AAIQlAAQA9AAAAg9IAAiXQAAg9g9AAIwlAAQg9AAAAA9g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.749)").s().p("AoSCqQhfAAAAheIAAiXQAAheBfAAIQlAAQBfAAAABeIAACXQAABehfAAgApthLIAACXQAABbBbAAIQlAAQBbAAAAhbIAAiXQAAhbhbAAIwlAAQhbAAAABbgAoSCJQg9AAAAg9IAAiXQAAg9A9AAIQlAAQA9AAAAA9IAACXQAAA9g9AAgApLhLIAACXQAAA5A5AAIQlAAQA5AAAAg5IAAiXQAAg5g5AAIwlAAQg5AAAAA5g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.624)").s().p("AoSCvQhjAAAAhjIAAiXQAAhjBjAAIQlAAQBjAAAABjIAACXQAABjhjAAgApxhLIAACXQAABeBfAAIQlAAQBfAAAAheIAAiXQAAhehfAAIwlAAQhfAAAABegAoSCFQg5AAAAg5IAAiXQAAg5A5AAIQlAAQA5AAAAA5IAACXQAAA5g5AAgApHhLIAACXQAAA1A1AAIQlAAQA1AAAAg1IAAiXQAAg1g1AAIwlAAQg1AAAAA1g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.498)").s().p("AoSCyQhnAAAAhmIAAiXQAAhmBnAAIQlAAQBnAAAABmIAACXQAABmhnAAgAp1hLIAACXQAABjBjAAIQlAAQBjAAAAhjIAAiXQAAhjhjAAIwlAAQhjAAAABjgAoSCBQg1AAAAg1IAAiXQAAg1A1AAIQlAAQA1AAAAA1IAACXQAAA1g1AAgApEhLIAACXQAAAxAyAAIQlAAQAyAAgBgxIAAiXQABgxgyAAIwlAAQgyAAAAAxg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.373)").s().p("AoSC2QhqAAAAhqIAAiXQAAhqBqAAIQlAAQBqAAAABqIAACXQAABqhqAAgAp5hLIAACXQAABmBnAAIQlAAQBnAAAAhmIAAiXQAAhmhnAAIwlAAQhnAAAABmgAoSB9QgyAAAAgxIAAiXQAAgxAyAAIQlAAQAyAAgBAxIAACXQABAxgyAAgApAhLIAACXQABAuAtgBIQlAAQAtABABguIAAiXQgBgugtAAIwlAAQgtAAgBAug");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.247)").s().p("AoSC6QhuAAAAhuIAAiXQAAhuBuAAIQlAAQBuAAAABuIAACXQAABuhuAAgAp8hLIAACXQAABqBqAAIQlAAQBqAAAAhqIAAiXQAAhqhqAAIwlAAQhqAAAABqgAoSB5QgtABgBguIAAiXQABguAtAAIQlAAQAtAAABAuIAACXQgBAugtgBgAo8hLIAACXQAAAqAqAAIQlAAQAqAAAAgqIAAiXQAAgqgqAAIwlAAQgqAAAAAqg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.122)").s().p("AoSC+QhyAAAAhyIAAiXQAAhyByAAIQlAAQByAAAAByIAACXQAAByhyAAgAqAhLIAACXQAABuBuAAIQlAAQBuAAAAhuIAAiXQAAhuhuAAIwlAAQhuAAAABugAoSB2QgqAAAAgqIAAiXQAAgqAqAAIQlAAQAqAAAAAqIAACXQAAAqgqAAgAo4hLIAACXQAAAmAmAAIQlAAQAmAAAAgmIAAiXQAAgmgmAAIwlAAQgmAAAAAmg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AoSCjQhXAAAAhXIAAiXQAAhXBXAAIQlAAQBXAAAABXIAACXQAABXhXAAgApThLIAACXQAABABBAAIQlAAQBBAAAAhAIAAiXQAAhAhBAAIwlAAQhBAAAABAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-16.3,121.4,32.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape.setTransform(28.9,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_1.setTransform(20.2,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBJIgOgIIgPAIIgNAAIAPiSIAcAAIgGA2IAOgJIAbAAIAVAOIgIBKIgYANgAgUAyIAkAAIAFg2IgjAAg");
	this.shape_2.setTransform(10.6,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBkg");
	this.shape_3.setTransform(-1.3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAzIgXgOIAIhKIAZgNIAqAAIAVANIgIBKIgYAOgAgTAbIAhAAIAGg2IghAAg");
	this.shape_4.setTransform(-13.3,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag8BGIAPiLIBUAAIAWAOIgMBvIgYAOgAgeAuIA0AAIAKhbIg0AAg");
	this.shape_5.setTransform(-26.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnBase("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.875)").s().p("AoSCnQhbAAAAhbIAAiXQAAhbBbAAIQlAAQBbAAAABbIAACXQAABbhbAAgApphLIAACXQAABXBXAAIQlAAQBXAAAAhXIAAiXQAAhXhXAAIwlAAQhXAAAABXgAoSCMQhBAAAAhAIAAiXQAAhABBAAIQlAAQBBAAAABAIAACXQAABAhBAAgApPhLIAACXQAAA9A9AAIQlAAQA9AAAAg9IAAiXQAAg9g9AAIwlAAQg9AAAAA9g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.749)").s().p("AoSCqQhfAAAAheIAAiXQAAheBfAAIQlAAQBfAAAABeIAACXQAABehfAAgApthLIAACXQAABbBbAAIQlAAQBbAAAAhbIAAiXQAAhbhbAAIwlAAQhbAAAABbgAoSCJQg9AAAAg9IAAiXQAAg9A9AAIQlAAQA9AAAAA9IAACXQAAA9g9AAgApLhLIAACXQAAA5A5AAIQlAAQA5AAAAg5IAAiXQAAg5g5AAIwlAAQg5AAAAA5g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.624)").s().p("AoSCvQhjAAAAhjIAAiXQAAhjBjAAIQlAAQBjAAAABjIAACXQAABjhjAAgApxhLIAACXQAABeBfAAIQlAAQBfAAAAheIAAiXQAAhehfAAIwlAAQhfAAAABegAoSCFQg5AAAAg5IAAiXQAAg5A5AAIQlAAQA5AAAAA5IAACXQAAA5g5AAgApHhLIAACXQAAA1A1AAIQlAAQA1AAAAg1IAAiXQAAg1g1AAIwlAAQg1AAAAA1g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.498)").s().p("AoSCyQhnAAAAhmIAAiXQAAhmBnAAIQlAAQBnAAAABmIAACXQAABmhnAAgAp1hLIAACXQAABjBjAAIQlAAQBjAAAAhjIAAiXQAAhjhjAAIwlAAQhjAAAABjgAoSCBQg1AAAAg1IAAiXQAAg1A1AAIQlAAQA1AAAAA1IAACXQAAA1g1AAgApEhLIAACXQAAAxAyAAIQlAAQAyAAgBgxIAAiXQABgxgyAAIwlAAQgyAAAAAxg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.373)").s().p("AoSC2QhqAAAAhqIAAiXQAAhqBqAAIQlAAQBqAAAABqIAACXQAABqhqAAgAp5hLIAACXQAABmBnAAIQlAAQBnAAAAhmIAAiXQAAhmhnAAIwlAAQhnAAAABmgAoSB9QgyAAAAgxIAAiXQAAgxAyAAIQlAAQAyAAgBAxIAACXQABAxgyAAgApAhLIAACXQABAuAtgBIQlAAQAtABABguIAAiXQgBgugtAAIwlAAQgtAAgBAug");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.247)").s().p("AoSC6QhuAAAAhuIAAiXQAAhuBuAAIQlAAQBuAAAABuIAACXQAABuhuAAgAp8hLIAACXQAABqBqAAIQlAAQBqAAAAhqIAAiXQAAhqhqAAIwlAAQhqAAAABqgAoSB5QgtABgBguIAAiXQABguAtAAIQlAAQAtAAABAuIAACXQgBAugtgBgAo8hLIAACXQAAAqAqAAIQlAAQAqAAAAgqIAAiXQAAgqgqAAIwlAAQgqAAAAAqg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.122)").s().p("AoSC+QhyAAAAhyIAAiXQAAhyByAAIQlAAQByAAAAByIAACXQAAByhyAAgAqAhLIAACXQAABuBuAAIQlAAQBuAAAAhuIAAiXQAAhuhuAAIwlAAQhuAAAABugAoSB2QgqAAAAgqIAAiXQAAgqAqAAIQlAAQAqAAAAAqIAACXQAAAqgqAAgAo4hLIAACXQAAAmAmAAIQlAAQAmAAAAgmIAAiXQAAgmgmAAIwlAAQgmAAAAAmg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AoSCjQhXAAAAhXIAAiXQAAhXBXAAIQlAAQBXAAAABXIAACXQAABXhXAAgApThLIAACXQAABABBAAIQlAAQBBAAAAhAIAAiXQAAhAhBAAIwlAAQhBAAAABAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-16.3,121.4,32.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape.setTransform(31.7,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_1.setTransform(21.5,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqBHIADgYIAxAAIADgcIgOAJIgaAAIgWgOIAHhGIAZgOIAaAAIAMAJIAQgJIANAAIgNB/IgZAOgAgUAEIAjAAIAFgyIgjAAg");
	this.shape_2.setTransform(9.9,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_3.setTransform(-1.9,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAHg+IgTAAIADgYIASAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_4.setTransform(-11.7,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAMAyIAIhMIghAAIgIBMIgbAAIALhkIAWAAIAEAJIAOgJIAZAAIAVAOIgJBWg");
	this.shape_5.setTransform(-22.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBGIAOiLIAbAAIgOCLg");
	this.shape_6.setTransform(-31,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnBase("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.875)").s().p("AoSCnQhbAAAAhbIAAiXQAAhbBbAAIQlAAQBbAAAABbIAACXQAABbhbAAgApphLIAACXQAABXBXAAIQlAAQBXAAAAhXIAAiXQAAhXhXAAIwlAAQhXAAAABXgAoSCMQhBAAAAhAIAAiXQAAhABBAAIQlAAQBBAAAABAIAACXQAABAhBAAgApPhLIAACXQAAA9A9AAIQlAAQA9AAAAg9IAAiXQAAg9g9AAIwlAAQg9AAAAA9g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.749)").s().p("AoSCqQhfAAAAheIAAiXQAAheBfAAIQlAAQBfAAAABeIAACXQAABehfAAgApthLIAACXQAABbBbAAIQlAAQBbAAAAhbIAAiXQAAhbhbAAIwlAAQhbAAAABbgAoSCJQg9AAAAg9IAAiXQAAg9A9AAIQlAAQA9AAAAA9IAACXQAAA9g9AAgApLhLIAACXQAAA5A5AAIQlAAQA5AAAAg5IAAiXQAAg5g5AAIwlAAQg5AAAAA5g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.624)").s().p("AoSCvQhjAAAAhjIAAiXQAAhjBjAAIQlAAQBjAAAABjIAACXQAABjhjAAgApxhLIAACXQAABeBfAAIQlAAQBfAAAAheIAAiXQAAhehfAAIwlAAQhfAAAABegAoSCFQg5AAAAg5IAAiXQAAg5A5AAIQlAAQA5AAAAA5IAACXQAAA5g5AAgApHhLIAACXQAAA1A1AAIQlAAQA1AAAAg1IAAiXQAAg1g1AAIwlAAQg1AAAAA1g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.498)").s().p("AoSCyQhnAAAAhmIAAiXQAAhmBnAAIQlAAQBnAAAABmIAACXQAABmhnAAgAp1hLIAACXQAABjBjAAIQlAAQBjAAAAhjIAAiXQAAhjhjAAIwlAAQhjAAAABjgAoSCBQg1AAAAg1IAAiXQAAg1A1AAIQlAAQA1AAAAA1IAACXQAAA1g1AAgApEhLIAACXQAAAxAyAAIQlAAQAyAAgBgxIAAiXQABgxgyAAIwlAAQgyAAAAAxg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.373)").s().p("AoSC2QhqAAAAhqIAAiXQAAhqBqAAIQlAAQBqAAAABqIAACXQAABqhqAAgAp5hLIAACXQAABmBnAAIQlAAQBnAAAAhmIAAiXQAAhmhnAAIwlAAQhnAAAABmgAoSB9QgyAAAAgxIAAiXQAAgxAyAAIQlAAQAyAAgBAxIAACXQABAxgyAAgApAhLIAACXQABAuAtgBIQlAAQAtABABguIAAiXQgBgugtAAIwlAAQgtAAgBAug");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.247)").s().p("AoSC6QhuAAAAhuIAAiXQAAhuBuAAIQlAAQBuAAAABuIAACXQAABuhuAAgAp8hLIAACXQAABqBqAAIQlAAQBqAAAAhqIAAiXQAAhqhqAAIwlAAQhqAAAABqgAoSB5QgtABgBguIAAiXQABguAtAAIQlAAQAtAAABAuIAACXQgBAugtgBgAo8hLIAACXQAAAqAqAAIQlAAQAqAAAAgqIAAiXQAAgqgqAAIwlAAQgqAAAAAqg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.122)").s().p("AoSC+QhyAAAAhyIAAiXQAAhyByAAIQlAAQByAAAAByIAACXQAAByhyAAgAqAhLIAACXQAABuBuAAIQlAAQBuAAAAhuIAAiXQAAhuhuAAIwlAAQhuAAAABugAoSB2QgqAAAAgqIAAiXQAAgqAqAAIQlAAQAqAAAAAqIAACXQAAAqgqAAgAo4hLIAACXQAAAmAmAAIQlAAQAmAAAAgmIAAiXQAAgmgmAAIwlAAQgmAAAAAmg");

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF9900").s().p("AoSCjQhXAAAAhXIAAiXQAAhXBXAAIQlAAQBXAAAABXIAACXQAABXhXAAgApThLIAACXQAABABBAAIQlAAQBBAAAAhAIAAiXQAAhAhBAAIwlAAQhBAAAABAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-16.3,121.4,32.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgqBHIADgYIAxAAIADgcIgOAJIgaAAIgWgOIAHhGIAZgOIAZAAIANAJIAQgJIANAAIgOB/IgYAOgAgUAEIAjAAIAFgyIgjAAg");
	this.shape.setTransform(24.4,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAMAyIAIhMIggAAIgIBMIgcAAIALhkIAWAAIAEAJIAOgJIAYAAIAWAOIgJBWg");
	this.shape_1.setTransform(12.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_2.setTransform(3.7,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape_3.setTransform(-3,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_4.setTransform(-11.7,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg4IAYgOIAyAAIAWAOIgDAaIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_5.setTransform(-22.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnBase("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.759,0.759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

	// Layer_3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.875)").s().p("AoSCnQhbAAAAhbIAAiXQAAhbBbAAIQlAAQBbAAAABbIAACXQAABbhbAAgApphLIAACXQAABXBXAAIQlAAQBXAAAAhXIAAiXQAAhXhXAAIwlAAQhXAAAABXgAoSCMQhBAAAAhAIAAiXQAAhABBAAIQlAAQBBAAAABAIAACXQAABAhBAAgApPhLIAACXQAAA9A9AAIQlAAQA9AAAAg9IAAiXQAAg9g9AAIwlAAQg9AAAAA9g");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.749)").s().p("AoSCqQhfAAAAheIAAiXQAAheBfAAIQlAAQBfAAAABeIAACXQAABehfAAgApthLIAACXQAABbBbAAIQlAAQBbAAAAhbIAAiXQAAhbhbAAIwlAAQhbAAAABbgAoSCJQg9AAAAg9IAAiXQAAg9A9AAIQlAAQA9AAAAA9IAACXQAAA9g9AAgApLhLIAACXQAAA5A5AAIQlAAQA5AAAAg5IAAiXQAAg5g5AAIwlAAQg5AAAAA5g");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.624)").s().p("AoSCvQhjAAAAhjIAAiXQAAhjBjAAIQlAAQBjAAAABjIAACXQAABjhjAAgApxhLIAACXQAABeBfAAIQlAAQBfAAAAheIAAiXQAAhehfAAIwlAAQhfAAAABegAoSCFQg5AAAAg5IAAiXQAAg5A5AAIQlAAQA5AAAAA5IAACXQAAA5g5AAgApHhLIAACXQAAA1A1AAIQlAAQA1AAAAg1IAAiXQAAg1g1AAIwlAAQg1AAAAA1g");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.498)").s().p("AoSCyQhnAAAAhmIAAiXQAAhmBnAAIQlAAQBnAAAABmIAACXQAABmhnAAgAp1hLIAACXQAABjBjAAIQlAAQBjAAAAhjIAAiXQAAhjhjAAIwlAAQhjAAAABjgAoSCBQg1AAAAg1IAAiXQAAg1A1AAIQlAAQA1AAAAA1IAACXQAAA1g1AAgApEhLIAACXQAAAxAyAAIQlAAQAyAAgBgxIAAiXQABgxgyAAIwlAAQgyAAAAAxg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.373)").s().p("AoSC2QhqAAAAhqIAAiXQAAhqBqAAIQlAAQBqAAAABqIAACXQAABqhqAAgAp5hLIAACXQAABmBnAAIQlAAQBnAAAAhmIAAiXQAAhmhnAAIwlAAQhnAAAABmgAoSB9QgyAAAAgxIAAiXQAAgxAyAAIQlAAQAyAAgBAxIAACXQABAxgyAAgApAhLIAACXQABAuAtgBIQlAAQAtABABguIAAiXQgBgugtAAIwlAAQgtAAgBAug");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.247)").s().p("AoSC6QhuAAAAhuIAAiXQAAhuBuAAIQlAAQBuAAAABuIAACXQAABuhuAAgAp8hLIAACXQAABqBqAAIQlAAQBqAAAAhqIAAiXQAAhqhqAAIwlAAQhqAAAABqgAoSB5QgtABgBguIAAiXQABguAtAAIQlAAQAtAAABAuIAACXQgBAugtgBgAo8hLIAACXQAAAqAqAAIQlAAQAqAAAAgqIAAiXQAAgqgqAAIwlAAQgqAAAAAqg");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.122)").s().p("AoSC+QhyAAAAhyIAAiXQAAhyByAAIQlAAQByAAAAByIAACXQAAByhyAAgAqAhLIAACXQAABuBuAAIQlAAQBuAAAAhuIAAiXQAAhuhuAAIwlAAQhuAAAABugAoSB2QgqAAAAgqIAAiXQAAgqAqAAIQlAAQAqAAAAAqIAACXQAAAqgqAAgAo4hLIAACXQAAAmAmAAIQlAAQAmAAAAgmIAAiXQAAgmgmAAIwlAAQgmAAAAAmg");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF9900").s().p("AoSCjQhXAAAAhXIAAiXQAAhXBXAAIQlAAQBXAAAABXIAACXQAABXhXAAgApThLIAACXQAABABBAAIQlAAQBBAAAAhAIAAiXQAAhAhBAAIwlAAQhBAAAABAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.6,-16.3,121.4,32.6);


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


(lib.actMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var maxItem = 4;
		var maxBlanks = 4;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.cAns = 1;
		this.item2.cAns = 2;
		this.item3.cAns = 3;
		this.item4.cAns = 4;
		this.item1.ansStr = "string";
		this.item2.ansStr = "integer";
		this.item3.ansStr = "double";
		this.item4.ansStr = "boolean";
		this.dArea1.items = 0;
		this.dArea2.items = 0;
		this.dArea3.items = 0;
		this.dArea4.items = 0;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].userAns = 0;
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
				_this.setChildIndex(this, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				this.x = point.x;
				this.y = point.y;
				
				var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
				var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
				var p3 = _this.dArea3.globalToLocal(stage.mouseX, stage.mouseY);
				var p4 = _this.dArea4.globalToLocal(stage.mouseX, stage.mouseY);
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
				if (_this.dArea3.hitTest(p3.x, p3.y)) {
					_this.dArea3.gotoAndStop(1);
				} else {
					_this.dArea3.gotoAndStop(0);
				}
				if (_this.dArea4.hitTest(p4.x, p4.y)) {
					_this.dArea4.gotoAndStop(1);
				} else {
					_this.dArea4.gotoAndStop(0);
				}
				if (this.userAns!=0){
					for (i=1; i<=maxBlanks; i++){
						if (_this["dArea"+i].items==this.itemNum){
							_this["dArea"+i].items = 0;
							break;
						}
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
				var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
				var p3 = _this.dArea3.globalToLocal(stage.mouseX, stage.mouseY);
				var p4 = _this.dArea4.globalToLocal(stage.mouseX, stage.mouseY);
				
				if (_this.dArea1.hitTest(p1.x, p1.y)) {
					if (_this.dArea1.items==0){
						this.userAns = 1;
						_this.dArea1.items = this.itemNum;
						this.x = _this.dArea1.x;
						this.y = _this.dArea1.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea2.hitTest(p2.x, p2.y)) {
					if (_this.dArea2.items==0){
						this.userAns = 2;
						_this.dArea2.items = this.itemNum;
						this.x = _this.dArea2.x;
						this.y = _this.dArea2.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea3.hitTest(p3.x, p3.y)) {
					if (_this.dArea3.items==0){
						this.userAns = 3;
						_this.dArea3.items = this.itemNum;
						this.x = _this.dArea3.x;
						this.y = _this.dArea3.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea4.hitTest(p4.x, p4.y)) {
					if (_this.dArea4.items==0){
						this.userAns = 4;
						_this.dArea4.items = this.itemNum;
						this.x = _this.dArea4.x;
						this.y = _this.dArea4.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else {
					this.userAns = 0;
					this.x = this.initX;
					this.y = this.initY;
				}
				_this.updateAll();
				_this.dArea1.gotoAndStop(0);
				_this.dArea2.gotoAndStop(0);
				_this.dArea3.gotoAndStop(0);
				_this.dArea4.gotoAndStop(0);
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxItem){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = _this["item"+_this.dArea1.items].ansStr + ", " + 
			_this["item"+_this.dArea2.items].ansStr + ", " + 
			_this["item"+_this.dArea3.items].ansStr + ", " + 
			_this["item"+_this.dArea4.items].ansStr;
			for (i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns==_this["item"+i].cAns){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
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

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(400.9,519.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item4 = new lib.btnItem4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(687.6,375.3);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem4(), 3);

	this.item3 = new lib.btnItem3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(687.6,288.6);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3(), 3);

	this.item2 = new lib.btnItem2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(687.6,418.6);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem2(), 3);

	this.item1 = new lib.btnItem1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(687.6,331.9);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// dArea
	this.dArea4 = new lib.dArea3_4();
	this.dArea4.name = "dArea4";
	this.dArea4.parent = this;
	this.dArea4.setTransform(539.5,463.8);

	this.dArea3 = new lib.dArea3_3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(408.4,463.8);

	this.dArea2 = new lib.dArea3_2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(277.4,463.8);

	this.dArea1 = new lib.dArea3_1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(146.4,463.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3},{t:this.dArea4}]}).wait(1));

	// q
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(342.9,352.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3, new cjs.Rectangle(82.5,260.7,669.6,281.4), null);


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var maxItem = 4;
		var maxBlanks = 4;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.cAns = 1;
		this.item2.cAns = 2;
		this.item3.cAns = 3;
		this.item4.cAns = 4;
		this.item1.ansStr = "string";
		this.item2.ansStr = "integer";
		this.item3.ansStr = "double";
		this.item4.ansStr = "boolean";
		this.dArea1.items = 0;
		this.dArea2.items = 0;
		this.dArea3.items = 0;
		this.dArea4.items = 0;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].userAns = 0;
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
				_this.setChildIndex(this, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				this.x = point.x;
				this.y = point.y;
				
				var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
				var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
				var p3 = _this.dArea3.globalToLocal(stage.mouseX, stage.mouseY);
				var p4 = _this.dArea4.globalToLocal(stage.mouseX, stage.mouseY);
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
				if (_this.dArea3.hitTest(p3.x, p3.y)) {
					_this.dArea3.gotoAndStop(1);
				} else {
					_this.dArea3.gotoAndStop(0);
				}
				if (_this.dArea4.hitTest(p4.x, p4.y)) {
					_this.dArea4.gotoAndStop(1);
				} else {
					_this.dArea4.gotoAndStop(0);
				}
				if (this.userAns!=0){
					for (i=1; i<=maxBlanks; i++){
						if (_this["dArea"+i].items==this.itemNum){
							_this["dArea"+i].items = 0;
							break;
						}
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
				var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
				var p3 = _this.dArea3.globalToLocal(stage.mouseX, stage.mouseY);
				var p4 = _this.dArea4.globalToLocal(stage.mouseX, stage.mouseY);
		
				if (_this.dArea1.hitTest(p1.x, p1.y)) {
					if (_this.dArea1.items==0){
						this.userAns = 1;
						_this.dArea1.items = this.itemNum;
						this.x = _this.dArea1.x;
						this.y = _this.dArea1.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea2.hitTest(p2.x, p2.y)) {
					if (_this.dArea2.items==0){
						this.userAns = 2;
						_this.dArea2.items = this.itemNum;
						this.x = _this.dArea2.x;
						this.y = _this.dArea2.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea3.hitTest(p3.x, p3.y)) {
					if (_this.dArea3.items==0){
						this.userAns = 3;
						_this.dArea3.items = this.itemNum;
						this.x = _this.dArea3.x;
						this.y = _this.dArea3.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea4.hitTest(p4.x, p4.y)) {
					if (_this.dArea4.items==0){
						this.userAns = 4;
						_this.dArea4.items = this.itemNum;
						this.x = _this.dArea4.x;
						this.y = _this.dArea4.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else {
					this.userAns = 0;
					this.x = this.initX;
					this.y = this.initY;
				}
				_this.updateAll();
				_this.dArea1.gotoAndStop(0);
				_this.dArea2.gotoAndStop(0);
				_this.dArea3.gotoAndStop(0);
				_this.dArea4.gotoAndStop(0);
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxItem){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = _this["item"+_this.dArea1.items].ansStr + ", " + 
			_this["item"+_this.dArea2.items].ansStr + ", " + 
			_this["item"+_this.dArea3.items].ansStr + ", " + 
			_this["item"+_this.dArea4.items].ansStr;
			for (i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns==_this["item"+i].cAns){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
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

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(400.9,519.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item4 = new lib.btnItem4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(687.6,375.3);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem4(), 3);

	this.item3 = new lib.btnItem3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(687.6,288.6);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3(), 3);

	this.item2 = new lib.btnItem2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(687.6,418.6);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem2(), 3);

	this.item1 = new lib.btnItem1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(687.6,331.9);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// dArea
	this.dArea4 = new lib.dArea3_4();
	this.dArea4.name = "dArea4";
	this.dArea4.parent = this;
	this.dArea4.setTransform(539.5,463.8);

	this.dArea3 = new lib.dArea3_3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(408.4,463.8);

	this.dArea2 = new lib.dArea3_2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(277.4,463.8);

	this.dArea1 = new lib.dArea3_1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(146.4,463.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3},{t:this.dArea4}]}).wait(1));

	// q
	this.instance = new lib.q2();
	this.instance.parent = this;
	this.instance.setTransform(342.9,352.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2, new cjs.Rectangle(82.5,260.7,669.6,281.4), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var maxItem = 4;
		var maxBlanks = 4;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.cAns = 1;
		this.item2.cAns = 2;
		this.item3.cAns = 3;
		this.item4.cAns = 4;
		this.item1.ansStr = "string";
		this.item2.ansStr = "integer";
		this.item3.ansStr = "double";
		this.item4.ansStr = "boolean";
		this.dArea1.items = 0;
		this.dArea2.items = 0;
		this.dArea3.items = 0;
		this.dArea4.items = 0;
		
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].userAns = 0;
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
				_this.setChildIndex(this, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				this.x = point.x;
				this.y = point.y;
				
				var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
				var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
				var p3 = _this.dArea3.globalToLocal(stage.mouseX, stage.mouseY);
				var p4 = _this.dArea4.globalToLocal(stage.mouseX, stage.mouseY);
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
				if (_this.dArea3.hitTest(p3.x, p3.y)) {
					_this.dArea3.gotoAndStop(1);
				} else {
					_this.dArea3.gotoAndStop(0);
				}
				if (_this.dArea4.hitTest(p4.x, p4.y)) {
					_this.dArea4.gotoAndStop(1);
				} else {
					_this.dArea4.gotoAndStop(0);
				}
				if (this.userAns!=0){
					for (i=1; i<=maxBlanks; i++){
						if (_this["dArea"+i].items==this.itemNum){
							_this["dArea"+i].items = 0;
							break;
						}
					}
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea1.globalToLocal(stage.mouseX, stage.mouseY);
				var p2 = _this.dArea2.globalToLocal(stage.mouseX, stage.mouseY);
				var p3 = _this.dArea3.globalToLocal(stage.mouseX, stage.mouseY);
				var p4 = _this.dArea4.globalToLocal(stage.mouseX, stage.mouseY);
		
				if (_this.dArea1.hitTest(p1.x, p1.y)) {
					if (_this.dArea1.items==0){
						this.userAns = 1;
						_this.dArea1.items = this.itemNum;
						this.x = _this.dArea1.x;
						this.y = _this.dArea1.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea2.hitTest(p2.x, p2.y)) {
					if (_this.dArea2.items==0){
						this.userAns = 2;
						_this.dArea2.items = this.itemNum;
						this.x = _this.dArea2.x;
						this.y = _this.dArea2.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea3.hitTest(p3.x, p3.y)) {
					if (_this.dArea3.items==0){
						this.userAns = 3;
						_this.dArea3.items = this.itemNum;
						this.x = _this.dArea3.x;
						this.y = _this.dArea3.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else if (_this.dArea4.hitTest(p4.x, p4.y)) {
					if (_this.dArea4.items==0){
						this.userAns = 4;
						_this.dArea4.items = this.itemNum;
						this.x = _this.dArea4.x;
						this.y = _this.dArea4.y;
					} else {
						//no more blanks
						this.userAns = 0;
						this.x = this.initX;
						this.y = this.initY;
					}
				} else {
					this.userAns = 0;
					this.x = this.initX;
					this.y = this.initY;
				}
				_this.updateAll();
				_this.dArea1.gotoAndStop(0);
				_this.dArea2.gotoAndStop(0);
				_this.dArea3.gotoAndStop(0);
				_this.dArea4.gotoAndStop(0);
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns!=0){
					doneCount++;
				}
			}
			//check buttons
			if (doneCount==maxItem){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = _this["item"+_this.dArea1.items].ansStr + ", " + 
			_this["item"+_this.dArea2.items].ansStr + ", " + 
			_this["item"+_this.dArea3.items].ansStr + ", " + 
			_this["item"+_this.dArea4.items].ansStr;
			for (i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns==_this["item"+i].cAns){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
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

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(400.9,519.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item4 = new lib.btnItem4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(687.6,375.3);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnItem4(), 3);

	this.item3 = new lib.btnItem3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(687.6,288.6);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnItem3(), 3);

	this.item2 = new lib.btnItem2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(687.6,418.6);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnItem2(), 3);

	this.item1 = new lib.btnItem1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(687.6,331.9);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnItem1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// dArea
	this.dArea4 = new lib.dArea3_4();
	this.dArea4.name = "dArea4";
	this.dArea4.parent = this;
	this.dArea4.setTransform(539.5,463.8);

	this.dArea3 = new lib.dArea3_3();
	this.dArea3.name = "dArea3";
	this.dArea3.parent = this;
	this.dArea3.setTransform(408.4,463.8);

	this.dArea2 = new lib.dArea3_2();
	this.dArea2.name = "dArea2";
	this.dArea2.parent = this;
	this.dArea2.setTransform(277.4,463.8);

	this.dArea1 = new lib.dArea3_1();
	this.dArea1.name = "dArea1";
	this.dArea1.parent = this;
	this.dArea1.setTransform(146.4,463.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.dArea1},{t:this.dArea2},{t:this.dArea3},{t:this.dArea4}]}).wait(1));

	// q
	this.instance = new lib.q1();
	this.instance.parent = this;
	this.instance.setTransform(342.9,352.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(82.5,260.7,669.6,281.4), null);


// stage content:
(lib.f5s7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:154,q3:203,finalFb:259});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed=18;
	}
	this.frame_4 = function() {
		playSound("mdroid_talk");
	}
	this.frame_43 = function() {
		//playSound("suspense",-1);
	}
	this.frame_99 = function() {
		this.stop();
		var _this = this;
		var stageNum = 7;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		var qItem1 = [{
				"qId": "f5s7_1",
				"qDomain": 1,
				"qParam": 2,
				"qSkill": 7,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s7_2",
				"qDomain": 1,
				"qParam": 2,
				"qSkill": 7,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s7_3",
				"qDomain": 1,
				"qParam": 2,
				"qSkill": 7,
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
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(5));
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
											nextScreen();
										} else {
											alert("Oppss... something went wrong. Please refresh your browser and try again.");
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
	this.frame_104 = function() {
		playSound("questionAlert");
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_154 = function() {
		playSound("questionAlert");
	}
	this.frame_198 = function() {
		this.stop();
	}
	this.frame_203 = function() {
		playSound("questionAlert");
	}
	this.frame_248 = function() {
		this.stop();
	}
	this.frame_259 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_421 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(45).call(this.frame_149).wait(5).call(this.frame_154).wait(44).call(this.frame_198).wait(5).call(this.frame_203).wait(45).call(this.frame_248).wait(11).call(this.frame_259).wait(162).call(this.frame_421).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(259).to({_off:false},0).wait(163));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,65.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(318));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,118.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:67.8},16,cjs.Ease.cubicOut).wait(377));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(675,170.5,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(318));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(436.3,135.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},216).wait(163));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:139.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},216).wait(163));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(259).to({graphics:null,x:0,y:0}).wait(163));

	// q
	this.instance_4 = new lib.mcQ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(413.9,190,0.05,0.05);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({scaleX:1,scaleY:1,x:380.3,y:200.5},18,cjs.Ease.backOut).to({_off:true},27).wait(4).to({_off:false,scaleX:0.05,scaleY:0.05,x:413.9,y:190},0).to({scaleX:1,scaleY:1,x:380.3,y:200.5},18,cjs.Ease.backOut).to({_off:true},27).wait(5).to({_off:false,scaleX:0.05,scaleY:0.05,x:413.9,y:190},0).to({scaleX:1,scaleY:1,x:380.3,y:200.5},18,cjs.Ease.backOut).to({_off:true},33).wait(163));

	// actMc
	this.instance_5 = new lib.actMc1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,351);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,351);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,351);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(135).to({_off:false},0).to({y:0},14,cjs.Ease.backOut).to({_off:true},5).wait(268));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).to({y:0},14,cjs.Ease.backOut).to({_off:true},5).wait(219));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(234).to({_off:false},0).to({y:0},14,cjs.Ease.backOut).to({_off:true},11).wait(163));

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

	// qBg
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(394.4,296.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({_off:true},239).wait(163));

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
		{src:"images/f5s7/Bitmap22.png", id:"Bitmap22"},
		{src:"images/f5s7/Bitmap3.png", id:"Bitmap3"},
		{src:"images/f5s7/Bitmap8.png", id:"Bitmap8"},
		{src:"images/f5s7/Bitmap9.png", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3", id:"questionComplete"},
		{src:"sounds/stdClick.mp3", id:"stdClick"},
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