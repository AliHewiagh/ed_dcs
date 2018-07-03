(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



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


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
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
	this.myTxt = new cjs.Text("Identify the output from the following flowchart.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 404;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.8,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EggGAAAMBANAAA");
	this.shape.setTransform(-46.1,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A+vDGIAAiBIilACIClh6IAAiNMBANAAAIAAGG");
	this.shape_1.setTransform(-54.8,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+0DDIAAiBIilACIClh6IAAiMMBANAAAIAAGFg");
	this.shape_2.setTransform(-54.3,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,436.1,42), null);


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
	this.myTxt = new cjs.Text("Kenal pasti output untuk carta alir yang berikut.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 396;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235.3,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EggIAAAMBARAAA");
	this.shape.setTransform(-46,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A+xDGIAAiBIikACICkh6IAAiNMBARAAAIAAGG");
	this.shape_1.setTransform(-54.7,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A+1DDIAAiBIilACIClh6IAAiMMBAQAAAIAAGFg");
	this.shape_2.setTransform(-54.2,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,431.8,42), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


(lib.schedulbox3 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape.setTransform(-44.9,108.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_1.setTransform(-56,109.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA1IgRgKIADgWIAVAAIgCAOIAeAAIADggIgvAAIAFg3IBEAAIgCASIguAAIgDAUIAfAAIAQAKIgFAvIgSAKg");
	this.shape_2.setTransform(-69.1,106.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgjA1IADgSIAXAAIAHhBIgZANIACgTIAcgQIASAAIgJBXIAXAAIgCASg");
	this.shape_3.setTransform(-78.4,106.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAnIACgdIAcAAIgDAdgAgMgJIADgdIAbAAIgDAdg");
	this.shape_4.setTransform(-85.6,108.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXA1IgRgKIADgWIAVAAIgCAOIAeAAIADggIgvAAIAFg3IBEAAIgCASIguAAIgDAUIAfAAIAQAKIgFAvIgSAKg");
	this.shape_5.setTransform(-93.3,106.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcAmIAHg5IgWAAIgGA5IgUAAIAGg5IgVAAIgHA5IgUAAIAIhLIARAAIADAGIALgGIAPAAIALAIIAQgIIANAAIARAKIgHBBg");
	this.shape_6.setTransform(-44.9,76.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_7.setTransform(-56.1,77.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXA1IgRgKIADgWIAVAAIgCAOIAeAAIADggIgvAAIAFg3IBEAAIgCASIguAAIgDAUIAfAAIAQAKIgFAvIgSAKg");
	this.shape_8.setTransform(-69.1,75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAFA0IACgWIgxAAIACgPIA6hDIASAAIgGBBIANAAIgCARIgNAAIgDAWgAgRAMIAAABIAaAAIADghg");
	this.shape_9.setTransform(-79.1,75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAnIACgdIAcAAIgDAdgAgMgKIADgcIAbAAIgDAcg");
	this.shape_10.setTransform(-86.5,76.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnA0IAFgxIATgJIAfAAIADgcIgcAAIgBAOIgVAAIACgVIASgLIAjAAIAQALIgEAqIgTAKIgfAAIgCAXIAwAAIgBASg");
	this.shape_11.setTransform(-94.1,75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAcAmIAGg5IgVAAIgGA5IgUAAIAGg5IgVAAIgHA5IgUAAIAIhLIARAAIACAGIAMgGIAPAAIALAIIAPgIIAPAAIAQAKIgHBBg");
	this.shape_12.setTransform(-44.8,44.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IATgKIARAAIAKAGIALgGIAKAAIgIBLgAgPAUIAZAAIAFgnIgZAAg");
	this.shape_13.setTransform(-55.6,44.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA1IgRgKIAKhVIASgKIAoAAIARAKIgJBVIgTAKgAgTAjIAgAAIAHhFIggAAg");
	this.shape_14.setTransform(-69,43.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA1IgRgKIAKhVIASgKIAoAAIARAKIgJBVIgTAKgAgTAjIAhAAIAGhFIggAAg");
	this.shape_15.setTransform(-79.1,43.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAnIACgcIAcAAIgDAcgAgMgKIADgcIAbAAIgDAcg");
	this.shape_16.setTransform(-87.2,44.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXA1IgQgKIACgVIAVAAIgBANIAcAAIADgeIgLAHIgVAAIgRgLIAFgrIASgKIAkAAIAQAKIgJBVIgSAKgAgNgGIAcAAIADgcIgcAAg");
	this.shape_17.setTransform(-94.8,43.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAcAmIAHg5IgWAAIgGA5IgUAAIAGg5IgVAAIgGA5IgVAAIAHhLIARAAIAEAGIALgGIAPAAIALAIIAQgIIANAAIARAKIgHBBg");
	this.shape_18.setTransform(-46.9,12.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_19.setTransform(-58.1,14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXA1IgRgKIADgWIAVAAIgCAOIAeAAIADggIgvAAIAFg3IBEAAIgCASIguAAIgDAUIAfAAIAQAKIgFAvIgSAKg");
	this.shape_20.setTransform(-71.1,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiA1IACgSIAYAAIAGhBIgZAOIACgUIAcgPIASAAIgJBWIAYAAIgDASg");
	this.shape_21.setTransform(-80.4,11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAnIACgcIAcAAIgDAcgAgMgJIADgdIAbAAIgDAdg");
	this.shape_22.setTransform(-87.7,12.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiA1IAxhWIAAAAIghAAIgBANIgVAAIADgfIBOAAIgCANIgzBbg");
	this.shape_23.setTransform(-94.6,11.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_24.setTransform(93.6,-20.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IATgKIARAAIAKAGIALgGIAKAAIgIBLgAgPAUIAZAAIAFgnIgZAAg");
	this.shape_25.setTransform(84.8,-20.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAlIAHhJIASAAIABAGIALgGIAQAAIgCARIgZAAIgGA4g");
	this.shape_26.setTransform(77.6,-20.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IATgKIARAAIAJAGIAMgGIAKAAIgIBLgAgOAUIAYAAIAEgnIgYAAg");
	this.shape_27.setTransform(69.7,-20.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_28.setTransform(60.7,-20.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIAUAAIgKBbIAPAAIgCASg");
	this.shape_29.setTransform(54,-22.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAGg3IASgKIAbAAIAQAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIABgMIgTAAg");
	this.shape_30.setTransform(47.1,-20.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfA1IACgSIAkAAIADgVIgLAGIgTAAIgRgKIAGg0IASgKIATAAIAKAGIAMgGIAKAAIgKBfIgTAKgAgPADIAaAAIAEglIgaAAg");
	this.shape_31.setTransform(38.4,-19.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_32.setTransform(29.2,-20.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAGg3IASgKIAbAAIAQAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIABgMIgTAAg");
	this.shape_33.setTransform(20.6,-20.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgpA0IALhnIA3AAIAQAKIgEAuIgTAJIghAAIgEAmgAgOgDIAfAAIADgeIgeAAg");
	this.shape_34.setTransform(11.9,-22.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAUIAYAAIAEgnIgYAAg");
	this.shape_35.setTransform(-54.8,-20.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggAlIACgRIAmAAIABgMIgVAAIgQgIIADgbIASgJIAoAAIgCARIgkAAIgCAKIAVAAIAQAJIgDAbIgSAKg");
	this.shape_36.setTransform(-63.5,-20.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IATgKIARAAIAKAGIALgGIAKAAIgIBLgAgPAUIAZAAIAFgnIgZAAg");
	this.shape_37.setTransform(-71.9,-20.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA0IAIhEIgBAAIgeBEIgTAAIgRhFIgHBFIgVAAIALhnIAcAAIASBLIAihLIAcAAIgLBng");
	this.shape_38.setTransform(-83,-22.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape_39.setTransform(-44.9,12.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_40.setTransform(-69.2,11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZA1IgRgKIAKhVIASgKIAoAAIARAKIgJBVIgTAKgAgTAjIAgAAIAHhFIggAAg");
	this.shape_41.setTransform(-79.3,11.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgXA1IgQgKIAJhVIASgKIAkAAIAQAKIgCAVIgVAAIABgNIgcAAIgDAeIALgGIAVAAIARAKIgFArIgSAKgAgRAjIAcAAIADgcIgcAAg");
	this.shape_42.setTransform(-95,11.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_43.setTransform(74.7,-21.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_44.setTransform(66.9,-20.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_45.setTransform(57.6,-19.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_46.setTransform(50.2,-21.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAUAAIgGA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_47.setTransform(42.4,-20.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgcA1IgRgKIAKhVIASgKIAuAAIAQAKIgJBVIgSAKgAgWAjIAmAAIAIhFIgnAAg");
	this.shape_48.setTransform(32.7,-22.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAcAmIAHg5IgWAAIgGA5IgUAAIAGg5IgVAAIgHA5IgUAAIAIhLIAQAAIAEAGIALgGIAPAAIALAIIAQgIIANAAIARAKIgHBBg");
	this.shape_49.setTransform(-68,-20.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgPA3IAHhKIAUAAIgIBKgAgHghIACgVIAVAAIgCAVg");
	this.shape_50.setTransform(-76.3,-22.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgTA0IAJhVIgdAAIACgSIBNAAIgCASIgdAAIgJBVg");
	this.shape_51.setTransform(-82.3,-22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:47.1}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-87.7}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-58.1}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_30,p:{x:-57.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_22,p:{x:-87.4}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_19,p:{x:-56}},{t:this.shape_39},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#AA4400").s().p("AmmCgIAAkNQAAgyAyAAIMbAAIAAE/g");
	this.shape_52.setTransform(-69.3,-20.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("Al0KAQgyAAAAgyIAAzNINNAAIAAT/g");
	this.shape_53.setTransform(-69.3,59.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AtUKAIAAz/IapAAIAATNQAAAygyAAg");
	this.shape_54.setTransform(58.3,59.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AtUCgIAAk/IZ3AAQAyAAAAAyIAAENg");
	this.shape_55.setTransform(58.3,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_52},{t:this.shape_53}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-36.3,255.2,159.9);


(lib.schedulbox2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAcAmIAGg5IgVAAIgGA5IgUAAIAGg5IgVAAIgHA5IgUAAIAIhLIARAAIACAGIAMgGIAPAAIALAIIAPgIIAPAAIAQAKIgHBBg");
	this.shape.setTransform(-44.8,107.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_1.setTransform(-56,109.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXA1IgRgKIADgWIAVAAIgCAOIAeAAIADggIgvAAIAFg3IBEAAIgCASIguAAIgDAUIAfAAIAQAKIgFAvIgSAKg");
	this.shape_2.setTransform(-69,106.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAFA1IACgYIgxAAIACgPIA6hBIASAAIgGA/IANAAIgCARIgNAAIgDAYgAgRAMIAAAAIAaAAIADghg");
	this.shape_3.setTransform(-79,106.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAnIACgcIAcAAIgDAcgAgMgJIADgdIAbAAIgDAdg");
	this.shape_4.setTransform(-86.4,107.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghA1IAwhWIAAAAIghAAIgBANIgVAAIADgfIBOAAIgCANIgzBbg");
	this.shape_5.setTransform(-93.4,106.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdAmIAGg5IgWAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIAEAGIALgGIAOAAIANAIIAPgIIANAAIARAKIgHBBg");
	this.shape_6.setTransform(-44.8,76.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgPAVIAZAAIAEgpIgYAAg");
	this.shape_7.setTransform(-55.6,76.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAiAAIAHhFIghAAg");
	this.shape_8.setTransform(-68.9,74.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_9.setTransform(-79.1,74.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRAnIACgdIAcAAIgDAdgAgMgJIADgdIAbAAIgDAdg");
	this.shape_10.setTransform(-87.1,76);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiA1IAxhWIAAgBIghAAIgBAOIgVAAIADggIBOAAIgCAOIgyBbg");
	this.shape_11.setTransform(-94.1,74.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape_12.setTransform(-44.9,44.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_13.setTransform(-56,45.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_14.setTransform(-69.2,42.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYA1IgQgKIACgVIAVAAIgCANIAfAAIADgcIgZAAIACgRIAZAAIADgYIgfAAIgCANIgUAAIACgVIASgKIAmAAIAQAKIgDAiIgOAHIAAABIAMAGIgEAlIgSAKg");
	this.shape_15.setTransform(-79.2,42.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRAnIACgdIAcAAIgDAdgAgMgJIADgdIAbAAIgDAdg");
	this.shape_16.setTransform(-87.1,44.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXA1IgQgKIAJhVIASgKIAkAAIAQAKIgCAVIgVAAIABgNIgcAAIgDAeIALgGIAVAAIARAKIgFArIgSAKgAgRAjIAcAAIADgcIgcAAg");
	this.shape_17.setTransform(-94.7,42.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAPAAIAQAKIgHBBg");
	this.shape_18.setTransform(-45,12.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_19.setTransform(-56.1,14.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_20.setTransform(-69.3,11.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYA1IgQgKIACgVIAVAAIgCANIAfAAIADgcIgZAAIACgRIAZAAIADgYIgfAAIgBANIgVAAIACgVIASgKIAmAAIAQAKIgDAiIgOAHIAAABIAMAGIgEAlIgSAKg");
	this.shape_21.setTransform(-79.3,11.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgRAnIACgcIAcAAIgDAcgAgMgKIADgcIAbAAIgDAcg");
	this.shape_22.setTransform(-87.2,12.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYA1IgRgKIADgVIAVAAIgBANIAeAAIADgcIgZAAIACgRIAZAAIACgYIgeAAIgBANIgWAAIADgVIASgKIAmAAIARAKIgEAiIgOAHIAAABIAMAGIgDAlIgTAKg");
	this.shape_23.setTransform(-94.9,11.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_24.setTransform(93.7,-20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAVIAYAAIAEgpIgYAAg");
	this.shape_25.setTransform(84.8,-20.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAlIAIhKIAQAAIADAHIALgHIAPAAIgCASIgZAAIgGA4g");
	this.shape_26.setTransform(77.6,-20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IATgKIARAAIAKAGIALgGIAKAAIgIBLgAgPAVIAZAAIAFgpIgZAAg");
	this.shape_27.setTransform(69.7,-20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_28.setTransform(60.8,-20.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIATAAIgJBbIAPAAIgBASg");
	this.shape_29.setTransform(54.1,-22.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgpAAIgBAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_30.setTransform(47.2,-20.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfA1IACgSIAkAAIACgVIgJAGIgUAAIgRgKIAGg0IATgKIATAAIAJAGIALgGIAKAAIgKBfIgSAKgAgPADIAaAAIAEglIgaAAg");
	this.shape_31.setTransform(38.4,-19);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_32.setTransform(29.3,-20.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgpAAIgBAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_33.setTransform(20.6,-20.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgoA0IALhnIA2AAIARAKIgGAtIgSAKIgiAAIgDAmgAgNgDIAdAAIADgeIgdAAg");
	this.shape_34.setTransform(12,-21.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAVIAYAAIAEgpIgYAAg");
	this.shape_35.setTransform(-53.4,-20.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AggAlIACgRIAmAAIABgMIgVAAIgQgJIADgaIASgKIAoAAIgCASIgkAAIgCAKIAVAAIAQAJIgDAbIgSAKg");
	this.shape_36.setTransform(-62.1,-20.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IATgKIARAAIAKAGIALgGIAKAAIgIBLgAgPAVIAZAAIAFgpIgZAAg");
	this.shape_37.setTransform(-70.6,-20.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAcA0IAIhEIgBAAIgeBEIgTAAIgRhEIgHBEIgVAAIALhnIAcAAIASBLIAihLIAcAAIgLBng");
	this.shape_38.setTransform(-81.6,-21.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_39.setTransform(74.7,-21.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_40.setTransform(66.9,-20.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_41.setTransform(57.6,-19);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_42.setTransform(50.2,-21.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAVAAIgGA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_43.setTransform(42.4,-20.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcA1IgQgKIAJhVIASgKIAuAAIARAKIgJBVIgTAKgAgXAjIAoAAIAGhFIgmAAg");
	this.shape_44.setTransform(32.7,-22);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAGg3IASgKIAbAAIAQAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIABgMIgTAAg");
	this.shape_45.setTransform(-55.9,-20.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAcAmIAHg5IgWAAIgGA5IgUAAIAGg5IgVAAIgHA5IgUAAIAIhLIAQAAIAEAGIALgGIAPAAIALAIIAQgIIANAAIARAKIgHBBg");
	this.shape_46.setTransform(-66.6,-20.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgPA3IAHhKIAUAAIgIBKgAgHghIACgVIAVAAIgCAVg");
	this.shape_47.setTransform(-74.9,-22.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgTA0IAJhVIgdAAIACgSIBNAAIgCASIgdAAIgJBVg");
	this.shape_48.setTransform(-80.9,-21.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AA4400").s().p("AmmCgIAAkNQAAgyAyAAIMbAAIAAE/g");
	this.shape_49.setTransform(-69.3,-20.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6600").s().p("Al0KAQgyAAAAgyIAAzNINNAAIAAT/g");
	this.shape_50.setTransform(-69.3,59.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AtUKAIAAz/IapAAIAATNQAAAygyAAg");
	this.shape_51.setTransform(58.3,59.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AtUCgIAAk/IZ3AAQAyAAAAAyIAAENg");
	this.shape_52.setTransform(58.3,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_49},{t:this.shape_50}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-36.3,255.2,159.9);


(lib.schedulbox1copy2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYAqIAnAAIAJhTIgnAAg");
	this.shape.setTransform(123.1,65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEggIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXANIglAAIgDAcIA6AAIgCAVg");
	this.shape_1.setTransform(111.2,65.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgqA/IACgVIAdAAIAIhPIgeARIACgYIAigSIAVAAIgLBoIAdAAIgCAVg");
	this.shape_2.setTransform(-32.6,65.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEggIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXANIglAAIgDAcIA6AAIgCAVg");
	this.shape_3.setTransform(-43.6,65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIACgaIAaAAIgCAQIAiAAIAEgkIgOAIIgaAAIgTgNIAGg0IAWgMIArAAIATAMIgLBnIgWAMgAgQgHIAiAAIAEgiIgiAAg");
	this.shape_4.setTransform(-101.9,65.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCAQIAlAAIAEgiIgfAAIADgUIAeAAIADgdIglAAIgBAQIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAIIgBABIAPAIIgEAtIgXAMg");
	this.shape_5.setTransform(-113.6,65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA/IgUgMIADgaIAZAAIgCARIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAYIAlAAIATANIgGA3IgWAMg");
	this.shape_6.setTransform(35.6,32.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqA/IADgWIAcAAIAJhNIgfAQIADgXIAhgTIAWAAIgLBnIAdAAIgDAWg");
	this.shape_7.setTransform(24.5,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgLIAlAAIAEgiIghAAIgCARIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXAMIglAAIgDAcIA6AAIgCAWg");
	this.shape_8.setTransform(-38.3,32.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBAIgRgMIAEgtIARgIIAAAAIgPgJIAFgpIAWgMIAsAAIAUAMIgEApIgRAJIAAAAIAPAIIgFAtIgWAMgAgWArIAkAAIADgiIgkAAgAgQgMIAkAAIADgeIgkAAg");
	this.shape_9.setTransform(-107.8,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYArIAnAAIAJhVIgnAAg");
	this.shape_10.setTransform(123.1,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEghIghAAIgCARIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXAMIglAAIgDAdIA6AAIgCAVg");
	this.shape_11.setTransform(111.2,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYArIAoAAIAJhVIgoAAg");
	this.shape_12.setTransform(-32.5,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBNIAPAAIgCAUIgPAAIgDAcgAgUAPIAfAAIAEgog");
	this.shape_13.setTransform(-44.7,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_14.setTransform(-101.9,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_15.setTransform(-113.8,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgpA/IABgWIAdAAIAIhOIgeARIACgXIAigTIAVAAIgLBnIAdAAIgCAWg");
	this.shape_16.setTransform(36.1,-31.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgLIAlAAIAEghIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFA0IgXALIglAAIgDAcIA6AAIgCAWg");
	this.shape_17.setTransform(25.2,-31.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIACgaIAaAAIgCAQIAiAAIAEgkIgOAHIgaAAIgTgLIAGg1IAWgMIArAAIATAMIgLBnIgWAMgAgQgHIAiAAIAEgiIgiAAg");
	this.shape_18.setTransform(-33.1,-31.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpA/IACgWIAcAAIAIhOIgeARIADgXIAhgTIAVAAIgKBnIAcAAIgCAWg");
	this.shape_19.setTransform(-44.2,-31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIALhnIAWgMIArAAIATAMIgDAaIgZAAIACgQIgiAAIgEAkIANgIIAaAAIAUAMIgGA1IgWAMgAgVAqIAiAAIAEgiIgjAAg");
	this.shape_20.setTransform(-101.9,-31.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCAQIAlAAIAEgiIgfAAIADgUIAeAAIADgdIglAAIgBAQIgaAAIADgaIAWgMIAuAAIAUAMIgFAoIgQAJIgBABIAPAIIgEAtIgXAMg");
	this.shape_21.setTransform(-113.6,-31.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AghAmIABgPIAkgqIAAAAIgeAAIACgSIA6AAIgCAPIgkAqIAAAAIAfAAIgBASg");
	this.shape_22.setTransform(30.1,-62.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiA0IASgjIgWhFIAVAAIAOAsIAVgsIAVAAIg1Bog");
	this.shape_23.setTransform(-38.2,-60.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_24.setTransform(145.3,-62.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAVIAYAAIAEgpIgYAAg");
	this.shape_25.setTransform(136.5,-62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAmIAHhLIARAAIADAGIALgGIAPAAIgCASIgZAAIgFA5g");
	this.shape_26.setTransform(129.3,-62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IASgKIASAAIAKAGIALgGIAKAAIgIBLgAgPAVIAZAAIAEgpIgYAAg");
	this.shape_27.setTransform(121.4,-62.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_28.setTransform(112.4,-62.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIATAAIgJBbIAPAAIgBASg");
	this.shape_29.setTransform(105.7,-64.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_30.setTransform(98.8,-62.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AARA1IgcgqIgMANIgDAdIgVAAIALhpIAVAAIgFAwIArgwIAZAAIguAyIAoA3g");
	this.shape_31.setTransform(89.9,-63.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAMAmIgMgXIgSAXIgWAAIAfgmIgXglIAXAAIALAWIARgWIAWAAIgeAlIAXAmg");
	this.shape_32.setTransform(-108.2,-62.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_33.setTransform(139.3,-63.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_34.setTransform(131.5,-62.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_35.setTransform(122.2,-61);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_36.setTransform(114.8,-63.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_37.setTransform(107,-62.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgcA1IgRgKIAKhVIASgKIAuAAIAQAKIgJBVIgSAKgAgXAjIAoAAIAHhFIgnAAg");
	this.shape_38.setTransform(97.3,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AA4400").s().p("AFnCbIAAk1IKcAAIAAE1gAlICbIAAk1IKbAAIAAE1gAwCCbIAAkDQAAgyAyAAIJ0AAIAAE1g");
	this.shape_39.setTransform(-40.2,-63.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AILJ7IAAk3IQEAAIAAEFQAAAygyAAgAtUJ7IAAk3IKcAAIAAE3gA3cJ7QgyAAAAgyIAAkFIKmAAIAAE3gAikEwIAAksIKbAAIAAEsgAtUEwIAAksIKcAAIAAEsgA4OEwIAAksIKmAAIAAEsgAILgPIAAkrIQEAAIAAErgAtUgPIAAkrIKcAAIAAErgA4OgPIAAkrIKmAAIAAErgAiklOIAAksIKbAAIAAEsgAtUlOIAAksIKcAAIAAEsgA4OlOIAAksIKmAAIAAEsg");
	this.shape_40.setTransform(12.2,17.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AIBMgIgKAAIqbAAIgKAAIgKAAIAAk4IqcAAIAAE4IgUAAIAAk4IqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAk2IAUAAIAAE2IKcAAIAAk2IAUAAIAAE2IKbAAIAAk2IAUAAIAAE2IQEAAIAAFTIwEAAIAAErIQEAAIAAFTIwEAAIAAE4gAikHUIKbAAIAAkrIqbAAgAtUHUIKcAAIAAkrIqcAAgAtUCVIKcAAIAAkrIqcAAgAikiqIKbAAIAAkrIqbAAgAtUiqIKcAAIAAkrIqcAAg");
	this.shape_41.setTransform(12.2,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AoBCbIAAk1IPRAAQAyAAAAAyIAAEDg");
	this.shape_42.setTransform(115.9,-63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-79,310.2,159.9);


(lib.schedulbox1copy = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYAqIAoAAIAJhTIgoAAg");
	this.shape.setTransform(123.3,65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCAQIAlAAIAEgiIgfAAIADgUIAeAAIADgdIglAAIgBAQIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAIIgBABIAPAIIgEAtIgXAMg");
	this.shape_1.setTransform(111.2,65.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBAIgQgMIAFgtIAQgIIABgBIgQgIIAFgpIAWgMIAsAAIAUAMIgEApIgRAIIAAABIAPAIIgFAtIgWAMgAgWAqIAkAAIAEgiIgkAAgAgQgMIAkAAIADgdIgkAAg");
	this.shape_2.setTransform(-32.5,65.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEggIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXANIglAAIgDAcIA6AAIgCAVg");
	this.shape_3.setTransform(-44.2,65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEggIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXANIglAAIgDAcIA6AAIgCAVg");
	this.shape_4.setTransform(-102.7,65.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqA/IADgVIAcAAIAJhPIgfARIADgYIAhgSIAWAAIgLBoIAdAAIgDAVg");
	this.shape_5.setTransform(-113.7,65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIACgaIAaAAIgCARIAiAAIAEglIgOAHIgaAAIgTgMIAGg0IAWgMIArAAIATAMIgLBnIgWAMgAgQgHIAiAAIAEgjIgiAAg");
	this.shape_6.setTransform(30.5,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYArIAoAAIAJhVIgoAAg");
	this.shape_7.setTransform(-32.5,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgLIAlAAIAEgiIghAAIgCARIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXAMIglAAIgDAcIA6AAIgCAWg");
	this.shape_8.setTransform(-44.4,32.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBAIgRgMIAEgtIARgIIAAAAIgPgJIAFgpIAWgMIAsAAIAUAMIgEApIgRAJIAAAAIAPAIIgFAtIgWAMgAgWArIAkAAIADgiIgkAAgAgQgMIAkAAIADgeIgkAAg");
	this.shape_9.setTransform(-107.8,32.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYArIAnAAIAJhVIgnAAg");
	this.shape_10.setTransform(123.1,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEghIghAAIgCARIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXAMIglAAIgDAdIA6AAIgCAVg");
	this.shape_11.setTransform(111.2,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_12.setTransform(-32.6,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBNIAPAAIgCAUIgPAAIgDAcgAgUAPIAfAAIAEgog");
	this.shape_13.setTransform(-44.6,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_14.setTransform(-102.6,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgqA/IACgVIAdAAIAJhOIgfAQIACgYIAigSIAWAAIgMBoIAeAAIgDAVg");
	this.shape_15.setTransform(-113.9,0.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBMIAPAAIgCAVIgPAAIgDAcgAgUAOIAfAAIAEgng");
	this.shape_16.setTransform(30.1,-31.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIALhnIAWgMIArAAIATAMIgDAaIgZAAIACgQIgiAAIgEAkIANgIIAaAAIAUAMIgGA1IgWAMgAgVAqIAiAAIAEgiIgjAAg");
	this.shape_17.setTransform(-33.1,-31.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgpA/IACgWIAcAAIAIhOIgeARIADgXIAhgTIAVAAIgKBnIAcAAIgCAWg");
	this.shape_18.setTransform(-44.2,-31.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgLIAlAAIAEghIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFA0IgXALIglAAIgDAcIA6AAIgCAWg");
	this.shape_19.setTransform(-102.1,-31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgLIAlAAIAEghIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFA0IgXALIglAAIgDAcIA6AAIgCAWg");
	this.shape_20.setTransform(-113.6,-31.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AghAmIABgPIAkgqIAAAAIgeAAIACgSIA6AAIgCAPIgkAqIAAAAIAfAAIgBASg");
	this.shape_21.setTransform(30.1,-62.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiA0IASgjIgWhFIAVAAIAOAsIAVgsIAVAAIg1Bog");
	this.shape_22.setTransform(-38.2,-60.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_23.setTransform(145.3,-62.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAVIAYAAIAEgpIgYAAg");
	this.shape_24.setTransform(136.5,-62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAmIAHhLIARAAIADAGIALgGIAPAAIgCASIgZAAIgFA5g");
	this.shape_25.setTransform(129.3,-62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IASgKIASAAIAKAGIALgGIAKAAIgIBLgAgPAVIAZAAIAEgpIgYAAg");
	this.shape_26.setTransform(121.4,-62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_27.setTransform(112.4,-62.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIATAAIgJBbIAPAAIgBASg");
	this.shape_28.setTransform(105.7,-64.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_29.setTransform(98.8,-62.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AARA1IgcgqIgMANIgDAdIgVAAIALhpIAVAAIgFAwIArgwIAZAAIguAyIAoA3g");
	this.shape_30.setTransform(89.9,-63.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAMAmIgMgXIgSAXIgWAAIAfgmIgXglIAXAAIALAWIARgWIAWAAIgeAlIAXAmg");
	this.shape_31.setTransform(-108.2,-62.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_32.setTransform(139.3,-63.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_33.setTransform(131.5,-62.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_34.setTransform(122.2,-61);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_35.setTransform(114.8,-63.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_36.setTransform(107,-62.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcA1IgRgKIAKhVIASgKIAuAAIAQAKIgJBVIgSAKgAgXAjIAoAAIAHhFIgnAAg");
	this.shape_37.setTransform(97.3,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AA4400").s().p("AFnCbIAAk1IKcAAIAAE1gAlICbIAAk1IKbAAIAAE1gAwCCbIAAkDQAAgyAyAAIJ0AAIAAE1g");
	this.shape_38.setTransform(-40.2,-63.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AILJ7IAAk3IQEAAIAAEFQAAAygyAAgAtUJ7IAAk3IKcAAIAAE3gA3cJ7QgyAAAAgyIAAkFIKmAAIAAE3gAikEwIAAksIKbAAIAAEsgAtUEwIAAksIKcAAIAAEsgA4OEwIAAksIKmAAIAAEsgAILgPIAAkrIQEAAIAAErgAtUgPIAAkrIKcAAIAAErgA4OgPIAAkrIKmAAIAAErgAiklOIAAksIKbAAIAAEsgAtUlOIAAksIKcAAIAAEsgA4OlOIAAksIKmAAIAAEsg");
	this.shape_39.setTransform(12.2,17.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AIBMgIgKAAIqbAAIgKAAIgKAAIAAk4IqcAAIAAE4IgUAAIAAk4IqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAk2IAUAAIAAE2IKcAAIAAk2IAUAAIAAE2IKbAAIAAk2IAUAAIAAE2IQEAAIAAFTIwEAAIAAErIQEAAIAAFTIwEAAIAAE4gAikHUIKbAAIAAkrIqbAAgAtUHUIKcAAIAAkrIqcAAgAtUCVIKcAAIAAkrIqcAAgAikiqIKbAAIAAkrIqbAAgAtUiqIKcAAIAAkrIqcAAg");
	this.shape_40.setTransform(12.2,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AoBCbIAAk1IPRAAQAyAAAAAyIAAEDg");
	this.shape_41.setTransform(115.9,-63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-79,310.2,159.9);


(lib.schedulbox1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape.setTransform(-40.8,108.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_1.setTransform(-52,110);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_2.setTransform(-65.1,107);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA1IgQgKIACgVIAVAAIgCANIAfAAIADgcIgZAAIACgRIAZAAIADgYIgfAAIgCANIgUAAIACgVIASgKIAmAAIAQAKIgDAiIgOAHIAAABIAMAGIgEAlIgSAKg");
	this.shape_3.setTransform(-75.1,107);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgRAnIACgdIAcAAIgDAdgAgMgJIADgdIAbAAIgDAdg");
	this.shape_4.setTransform(-83.1,108.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA1IAFgyIATgJIAfAAIADgcIgcAAIgBAOIgVAAIACgWIASgKIAjAAIAQAKIgEArIgTAKIgfAAIgCAYIAwAAIgBASg");
	this.shape_5.setTransform(-90.7,107.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjA1IACgSIAYAAIAIhBIgaANIACgTIAbgQIASAAIgJBXIAYAAIgBASg");
	this.shape_6.setTransform(-99.8,107.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape_7.setTransform(-40.8,76.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAUIAYAAIAEgnIgYAAg");
	this.shape_8.setTransform(-51.6,76.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAiAAIAHhFIghAAg");
	this.shape_9.setTransform(-65,75.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYA1IgQgKIACgVIAVAAIgCANIAfAAIADgcIgZAAIACgRIAZAAIACgYIgeAAIgBANIgWAAIADgVIASgKIAmAAIARAKIgEAiIgOAHIAAABIAMAGIgDAlIgTAKg");
	this.shape_10.setTransform(-75,75.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAnIACgdIAcAAIgDAdgAgMgKIADgcIAbAAIgDAcg");
	this.shape_11.setTransform(-82.9,76.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgXA1IgQgKIAJhVIASgKIAkAAIAQAKIgCAVIgVAAIABgNIgcAAIgDAeIALgGIAVAAIARAKIgFArIgSAKgAgRAjIAcAAIADgcIgcAAg");
	this.shape_12.setTransform(-90.5,75.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape_13.setTransform(-40.8,45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_14.setTransform(-52,46.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_15.setTransform(-65.1,43.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYA1IgQgKIACgVIAVAAIgCANIAfAAIADgcIgZAAIACgRIAZAAIADgYIgfAAIgCANIgUAAIACgVIASgKIAmAAIAQAKIgDAiIgOAHIAAABIAMAGIgEAlIgSAKg");
	this.shape_16.setTransform(-75.1,43.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRAnIACgcIAcAAIgDAcgAgMgKIADgcIAbAAIgDAcg");
	this.shape_17.setTransform(-83.1,44.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiA0IAxhVIAAAAIghAAIgBANIgVAAIADgfIBOAAIgCANIgyBag");
	this.shape_18.setTransform(-90,43.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape_19.setTransform(-40.8,13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_20.setTransform(-52,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZA1IgQgKIAJhVIASgKIAoAAIAQAKIgJBVIgSAKgAgUAjIAhAAIAIhFIghAAg");
	this.shape_21.setTransform(-65.1,11.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYA1IgQgKIACgVIAVAAIgCANIAfAAIADgcIgZAAIACgRIAZAAIADgYIgfAAIgCANIgUAAIACgVIASgKIAmAAIAQAKIgDAiIgOAHIAAABIAMAGIgEAlIgSAKg");
	this.shape_22.setTransform(-75.1,11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgRAnIACgcIAcAAIgDAcgAgMgKIADgcIAbAAIgDAcg");
	this.shape_23.setTransform(-83.1,13.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAFA0IACgWIgxAAIACgQIA6hBIASAAIgGBAIANAAIgCARIgNAAIgDAWgAgRAMIAAABIAaAAIADgig");
	this.shape_24.setTransform(-90.9,11.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_25.setTransform(85.4,-19.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAUIAYAAIAEgnIgYAAg");
	this.shape_26.setTransform(76.5,-19.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaAlIAHhJIARAAIADAGIALgGIAPAAIgCARIgZAAIgFA4g");
	this.shape_27.setTransform(69.3,-19.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgPAUIAZAAIAEgnIgYAAg");
	this.shape_28.setTransform(61.4,-19.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgTAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_29.setTransform(52.5,-19.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIATAAIgJBbIAPAAIgBASg");
	this.shape_30.setTransform(45.8,-21);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_31.setTransform(38.9,-19.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARA0IgcgoIgMAMIgDAcIgVAAIALhnIAVAAIgFAvIArgvIAZAAIguAwIAoA3g");
	this.shape_32.setTransform(29.9,-20.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IATgKIARAAIAJAGIAMgGIAKAAIgIBLgAgOAUIAYAAIAFgnIgZAAg");
	this.shape_33.setTransform(-54.2,-19.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggAlIACgRIAmAAIABgMIgVAAIgQgIIADgbIASgJIAoAAIgCARIgkAAIgCAKIAVAAIAQAJIgDAbIgSAKg");
	this.shape_34.setTransform(-62.9,-19.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgPAUIAZAAIAEgnIgYAAg");
	this.shape_35.setTransform(-71.3,-19.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAcA0IAIhEIAAAAIggBEIgTAAIgQhFIgHBFIgVAAIALhnIAcAAIATBLIAhhLIAcAAIgLBng");
	this.shape_36.setTransform(-82.4,-20.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_37.setTransform(79.2,-20.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_38.setTransform(71.4,-19.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_39.setTransform(62.1,-17.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_40.setTransform(54.7,-20.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAVAAIgGA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_41.setTransform(46.9,-19.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgcA1IgQgKIAJhVIASgKIAuAAIARAKIgJBVIgTAKgAgXAjIAoAAIAGhFIgmAAg");
	this.shape_42.setTransform(37.2,-20.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgpAAIgBAMIApAAIgCASgAgJgHIAUAAIACgMIgUAAg");
	this.shape_43.setTransform(-56.7,-19.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAdAmIAFg5IgVAAIgGA5IgUAAIAGg5IgWAAIgFA5IgVAAIAHhLIARAAIADAGIAMgGIAOAAIANAIIAOgIIAOAAIARAKIgHBBg");
	this.shape_44.setTransform(-67.4,-19.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgPA3IAHhKIAUAAIgIBKgAgHghIACgVIAVAAIgCAVg");
	this.shape_45.setTransform(-75.7,-21);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUA0IAJhVIgcAAIACgSIBNAAIgCASIgcAAIgJBVg");
	this.shape_46.setTransform(-81.7,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AA4400").s().p("AmmCgIAAkNQAAgyAyAAIMbAAIAAE/g");
	this.shape_47.setTransform(-69.3,-20.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("Al0KAQgyAAAAgyIAAzNINNAAIAAT/g");
	this.shape_48.setTransform(-69.3,59.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AtPKAIAAz/IafAAIAATNQAAAygyAAg");
	this.shape_49.setTransform(57.8,59.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AtPCgIAAk/IZtAAQAyAAAAAyIAAENg");
	this.shape_50.setTransform(57.8,-20.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AtUKAIAAz/IapAAIAATNQAAAygyAAg");
	this.shape_51.setTransform(58.3,59.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AtUCgIAAk/IZ3AAQAyAAAAAyIAAENg");
	this.shape_52.setTransform(58.3,-20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_47},{t:this.shape_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-36.3,254.2,159.9);


(lib.recsengetEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape.setTransform(46.5,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgGA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_1.setTransform(36.6,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_2.setTransform(28.8,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIABgLIAUgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_3.setTransform(23.8,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_4.setTransform(13,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAzIAFg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgFIATAAIAPAJIgGA8g");
	this.shape_5.setTransform(4.8,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIACgLIATgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_6.setTransform(-2.2,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_7.setTransform(-12.5,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAjIgPgKIAGgxIARgKIAkAAIgBAQIgiAAIgEAlIAhAAIgBAQg");
	this.shape_8.setTransform(-20.1,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_9.setTransform(-27.9,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAKgFIASAAIAPAJIgGA8g");
	this.shape_10.setTransform(-36.1,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgYAxIgQgJIAJhQIARgJIAnAAIAPAJIgCAVIgTAAIABgNIggAAIgHBBIAgAAIABgNIAUAAIgCAUIgSAJg");
	this.shape_11.setTransform(-44.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FF8C00","#FFD510"],[0,1],6.4,9.7,0.6,-10.5).s().p("AGoBrIu9AAIhkAAIBujVIBkAAIO9AAIBkAAIhuDVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-63.4,-12,126.8,24.1);


(lib.recsenget = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGgzIARgJIAQAAIAKAFIAKgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape.setTransform(39.4,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_1.setTransform(31.3,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_2.setTransform(23.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgGA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_3.setTransform(13.2,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_4.setTransform(0.1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAJAFIALgFIAKAAIgIBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_5.setTransform(-8.2,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_6.setTransform(-18.5,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_7.setTransform(-28.4,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAxIgPgJIACgTIAUAAIgBAMIAdAAIACgYIgfAAIgPgJIAEgoIARgJIAjAAIAPAJIgCAUIgUAAIACgMIgcAAIgDAYIAfAAIAQAIIgFAoIgRAJg");
	this.shape_8.setTransform(-36.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF8C00","#FFD510"],[0,1],1.4,9.7,-4.4,-10.5).s().p("AozBrIBujVIP5AAIhuDVg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.4,-12,112.8,24.1);


(lib.recEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBVIAOAAIgCAQg");
	this.shape.setTransform(21.3,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_1.setTransform(14.6,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_2.setTransform(6.3,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAKAzIAFg2IgYAAIgGA2IgTAAIALhlIATAAIgEAlIAKgFIASAAIAPAJIgGA8g");
	this.shape_3.setTransform(-2.1,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAjIgPgKIAFgxIARgKIAlAAIgCAQIghAAIgEAlIAiAAIgCAQg");
	this.shape_4.setTransform(-9.7,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAxIgPgJIACgTIAUAAIgBAMIAdAAIACgYIgfAAIgPgJIAEgoIARgJIAjAAIAPAJIgCAUIgUAAIACgMIgcAAIgDAYIAfAAIAQAIIgFAoIgRAJg");
	this.shape_5.setTransform(-18,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_6.setTransform(34.9,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_7.setTransform(26.2,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_8.setTransform(17.9,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_9.setTransform(2.8,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgcAxIABgQIAiAAIACgUIgJAGIgSAAIgQgJIAGgxIARgJIARAAIAJAFIALgFIAJAAIgJBYIgRAJgAgOADIAYAAIAEgjIgYAAg");
	this.shape_10.setTransform(-4.5,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgxBhg");
	this.shape_11.setTransform(-12.3,2.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgHBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_12.setTransform(-20.6,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgmAxIAKhhIA0AAIAPAKIgFAqIgSAJIgeAAIgEAkgAgMgCIAbAAIADgdIgcAAg");
	this.shape_13.setTransform(-33.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:14.6}},{t:this.shape,p:{x:21.3}}]}).to({state:[{t:this.shape_13},{t:this.shape,p:{x:-26.9}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_1,p:{x:9.5}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,22.4,0,-22.3).s().p("AovDIIAAmPIRfAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-20,112,40);


(lib.rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AALA7IAHg9IgcAAIgHA9IgWAAIAMh0IAWAAIgEArIALgHIAUAAIASAKIgHBGg");
	this.shape.setTransform(26.1,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_1.setTransform(16.6,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgBA7IgSgLIALhpIAWAAIgKBhIAQAAIgDATg");
	this.shape_2.setTransform(9.4,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_3.setTransform(1.8,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AALA7IgRgdIgKALIgBASIgWAAIAMh0IAWAAIgHBDIAbgeIAZAAIggAiIAdAtg");
	this.shape_4.setTransform(-7,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSApIgSgLIAHg7IATgKIAdAAIARAKIgEAlIgsAAIAAAOIArAAIgCATgAgKgHIAWAAIACgNIgWAAg");
	this.shape_5.setTransform(-16.3,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaA5IgRgLIACgVIAWAAIgBAMIAhAAIADgbIgkAAIgRgKIAFgtIATgLIAoAAIASALIgDAVIgWAAIABgMIggAAIgDAaIAkAAIARAKIgFAuIgTALg");
	this.shape_6.setTransform(-26,-0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_7.setTransform(31.8,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgQAAIgPgJIAFg0IARgJIAQAAIAJAFIALgFIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_8.setTransform(23.6,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_9.setTransform(15.1,6.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_10.setTransform(9.2,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAkIgKgGIgKAGIgQAAIgPgJIAFg0IARgJIAQAAIAJAFIALgFIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_11.setTransform(2.9,6.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIADAFIAKgFIAOAAIALAHIANgHIAOAAIAQAJIgHA8g");
	this.shape_12.setTransform(-7.3,6.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBARIgYAAIgFA0g");
	this.shape_13.setTransform(-15.8,6.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_14.setTransform(-23,6.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIATAAIAOAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAZAAIADgmIgYAAg");
	this.shape_15.setTransform(-31.3,7.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_16.setTransform(18.6,-8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFg0IARgJIAQAAIAJAGIALgGIAJAAIgIBGgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_17.setTransform(10.4,-8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgGA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_18.setTransform(0.1,-8.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGg0IARgJIAQAAIAKAGIAKgGIAKAAIgIBGgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_19.setTransform(-9.9,-8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgSAxIAIhQIgaAAIABgRIBIAAIgCARIgaAAIgJBQg");
	this.shape_20.setTransform(-17.6,-10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,22.4,0,-22.3).s().p("AovDIIAAmPIRfAAIAAGPg");

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-20,112,40);


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


(lib.schedulbox1_1 = function(mode,startPosition,loop) {
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
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEggIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXANIglAAIgDAcIA6AAIgCAVg");
	this.shape_53.setTransform(122.5,65.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgqA/IACgVIAdAAIAIhPIgeARIACgYIAigSIAWAAIgMBoIAeAAIgDAVg");
	this.shape_54.setTransform(111.5,65.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBNIAPAAIgCAUIgPAAIgDAcgAgUAPIAfAAIAEgog");
	this.shape_55.setTransform(-33.4,65.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgpA/IABgVIAdAAIAIhPIgeARIACgYIAigSIAVAAIgLBoIAdAAIgCAVg");
	this.shape_56.setTransform(-44.1,65.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIACgaIAaAAIgCAQIAiAAIAEgkIgOAIIgaAAIgTgNIAGg0IAWgMIArAAIATAMIgLBnIgWAMgAgQgHIAiAAIAEgiIgiAAg");
	this.shape_57.setTransform(-102.6,65.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgpA/IABgVIAdAAIAIhPIgeARIACgYIAigSIAVAAIgLBoIAdAAIgCAVg");
	this.shape_58.setTransform(-113.7,65.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgoA/IA6hnIAAgBIgnAAIgCARIgZAAIAEgmIBdAAIgBAQIg+Btg");
	this.shape_59.setTransform(31,32.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIALhnIAWgMIArAAIATAMIgDAaIgZAAIACgRIgiAAIgEAlIANgIIAaAAIAUANIgGA0IgWAMgAgVArIAiAAIAEgjIgjAAg");
	this.shape_60.setTransform(-38.3,32.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgcA/IgUgMIADgaIAZAAIgCARIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAYIAlAAIATANIgGA3IgWAMg");
	this.shape_61.setTransform(-107.9,32.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYArIAoAAIAJhVIgoAAg");
	this.shape_62.setTransform(123.3,0.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_63.setTransform(111.2,0.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_64.setTransform(-32.4,0.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgcBAIgUgNIADgaIAZAAIgCARIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAZIAlAAIATAMIgGA3IgWANg");
	this.shape_65.setTransform(-44.3,0.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgpA/IACgVIAcAAIAIhOIgeAQIADgYIAhgSIAVAAIgKBoIAcAAIgCAVg");
	this.shape_66.setTransform(-102.7,0.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgpA/IACgVIAcAAIAJhOIgfAQIADgYIAhgSIAVAAIgKBoIAcAAIgCAVg");
	this.shape_67.setTransform(-113.1,0.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgcA/IgUgLIADgaIAZAAIgCAQIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAYIAlAAIATAMIgGA5IgWALg");
	this.shape_68.setTransform(30.4,-31.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgoA/IA6hnIAAAAIgnAAIgCAQIgZAAIAEgmIBdAAIgBAQIg+Btg");
	this.shape_69.setTransform(-32.5,-31.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgpA/IABgWIAdAAIAIhOIgeARIACgXIAigTIAVAAIgLBnIAdAAIgCAWg");
	this.shape_70.setTransform(-44,-31.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCAQIAlAAIAEgiIgfAAIADgUIAeAAIADgdIglAAIgBAQIgaAAIADgaIAWgMIAuAAIAUAMIgFAoIgQAJIgBABIAPAIIgEAtIgXAMg");
	this.shape_71.setTransform(-102.1,-31.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBMIAPAAIgCAVIgPAAIgDAcgAgUAOIAfAAIAEgng");
	this.shape_72.setTransform(-114.2,-31.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AghAmIABgPIAkgqIAAAAIgeAAIACgSIA6AAIgCAPIgkAqIAAAAIAfAAIgBASg");
	this.shape_73.setTransform(30.1,-62.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgiA0IASgjIgWhFIAVAAIAOAsIAVgsIAVAAIg1Bog");
	this.shape_74.setTransform(-38.2,-60.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_75.setTransform(145.3,-62.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAVIAYAAIAEgpIgYAAg");
	this.shape_76.setTransform(136.5,-62.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgaAmIAHhLIARAAIADAGIALgGIAPAAIgCASIgZAAIgFA5g");
	this.shape_77.setTransform(129.3,-62.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IASgKIASAAIAKAGIALgGIAKAAIgIBLgAgPAVIAZAAIAEgpIgYAAg");
	this.shape_78.setTransform(121.4,-62.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_79.setTransform(112.4,-62.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIATAAIgJBbIAPAAIgBASg");
	this.shape_80.setTransform(105.7,-64.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_81.setTransform(98.8,-62.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AARA1IgcgqIgMANIgDAdIgVAAIALhpIAVAAIgFAwIArgwIAZAAIguAyIAoA3g");
	this.shape_82.setTransform(89.9,-63.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAMAmIgMgXIgSAXIgWAAIAfgmIgXglIAXAAIALAWIARgWIAWAAIgeAlIAXAmg");
	this.shape_83.setTransform(-108.2,-62.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_84.setTransform(139.3,-63.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_85.setTransform(131.5,-62.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_86.setTransform(122.2,-61);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_87.setTransform(114.8,-63.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_88.setTransform(107,-62.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgcA1IgRgKIAKhVIASgKIAuAAIAQAKIgJBVIgSAKgAgXAjIAoAAIAHhFIgnAAg");
	this.shape_89.setTransform(97.3,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_83},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).wait(1));

	// Layer 1
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#AA4400").s().p("AFnCbIAAk1IKcAAIAAE1gAlICbIAAk1IKbAAIAAE1gAwCCbIAAkDQAAgyAyAAIJ0AAIAAE1g");
	this.shape_90.setTransform(-40.2,-63.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF6600").s().p("AILJ7IAAk3IQEAAIAAEFQAAAygyAAgAtUJ7IAAk3IKcAAIAAE3gA3cJ7QgyAAAAgyIAAkFIKmAAIAAE3gAikEwIAAksIKbAAIAAEsgAtUEwIAAksIKcAAIAAEsgA4OEwIAAksIKmAAIAAEsgAILgPIAAkrIQEAAIAAErgAtUgPIAAkrIKcAAIAAErgA4OgPIAAkrIKmAAIAAErgAiklOIAAksIKbAAIAAEsgAtUlOIAAksIKcAAIAAEsgA4OlOIAAksIKmAAIAAEsg");
	this.shape_91.setTransform(12.2,17.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AIBMgIgKAAIqbAAIgKAAIgKAAIAAk4IqcAAIAAE4IgUAAIAAk4IqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAk2IAUAAIAAE2IKcAAIAAk2IAUAAIAAE2IKbAAIAAk2IAUAAIAAE2IQEAAIAAFTIwEAAIAAErIQEAAIAAFTIwEAAIAAE4gAikHUIKbAAIAAkrIqbAAgAtUHUIKcAAIAAkrIqcAAgAtUCVIKcAAIAAkrIqcAAgAikiqIKbAAIAAkrIqbAAgAtUiqIKcAAIAAkrIqcAAg");
	this.shape_92.setTransform(12.2,1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#666666").s().p("AoBCbIAAk1IPRAAQAyAAAAAyIAAEDg");
	this.shape_93.setTransform(115.9,-63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-79,310.2,159.9);


(lib.rec_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAkIACgaIAaAAIgCAagAgMgIIAEgcIAZAAIgDAcg");
	this.shape_22.setTransform(14.7,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgeAjIABgOIAhgmIgbAAIABgRIA1AAIgBANIghAoIAdAAIgCAQg");
	this.shape_23.setTransform(8.6,16.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgNAAIACgRIANAAIACgMIATgKIgDAWIAPAAIgBARIgPAAIgFAkIAQAAIgBAQg");
	this.shape_24.setTransform(-1.1,15.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_25.setTransform(-8.5,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_26.setTransform(-14.4,14.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAlIADgbIAZAAIgDAbgAgMgIIADgbIAaAAIgDAbg");
	this.shape_27.setTransform(15.2,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_28.setTransform(9.1,2.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgQAAIgDAkIAPAAIgCARg");
	this.shape_29.setTransform(-1.6,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_30.setTransform(-9,1.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_31.setTransform(-14.9,-0.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgQAlIADgbIAZAAIgDAbgAgLgIIACgbIAaAAIgDAbg");
	this.shape_32.setTransform(15.1,-13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAMAjIgMgVIgRAVIgVAAIAdgjIgUgiIAUAAIALAUIAQgUIAVAAIgdAiIAWAjg");
	this.shape_33.setTransform(8.6,-13.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgNAAIACgQIANAAIACgMIASgMIgCAYIAPAAIgBAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_34.setTransform(-1.6,-14.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_35.setTransform(-9,-13.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_36.setTransform(-14.9,-15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAxIgQgJIAJhQIARgJIAlAAIAQAJIgJBQIgRAJgAgSAhIAeAAIAHhBIgeAAg");
	this.shape_37.setTransform(16.3,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AggAxIABgRIAXAAIAHg8IgYANIABgTIAagOIARAAIgIBQIAWAAIgCARg");
	this.shape_38.setTransform(7.5,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgmAYIACgRIBIAAIgCARgAgigGIABgRIBIAAIgCARg");
	this.shape_39.setTransform(-5.1,1.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAjIABgNIAhgoIgbAAIABgQIA1AAIgBANIghAoIAdAAIgCAQg");
	this.shape_40.setTransform(-17,1.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggAxIABgRIAXAAIAGg8IgXANIACgTIAagOIAQAAIgIBQIAWAAIgCARg");
	this.shape_41.setTransform(15.4,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAAAOIgPATIgOgKIARgSIgWgFIAIgRIAUAIIABgXIARAAIgDAXIAWgIIAEARIgXAFIANASIgQAKg");
	this.shape_42.setTransform(7.1,-1.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgmAYIABgRIBJAAIgDARgAgigGIABgRIBIAAIgCARg");
	this.shape_43.setTransform(-12.9,1.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeAjIABgNIAhgoIgbAAIABgQIA1AAIgBANIghAoIAdAAIgCAQg");
	this.shape_44.setTransform(-24.8,1.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AggAxIACgRIAWAAIAGg8IgYANIADgTIAagOIAQAAIgJBQIAXAAIgBARg");
	this.shape_45.setTransform(15.1,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgMAlIACgbIgbAAIADgSIAbAAIADgbIARAAIgCAbIAbAAIgDASIgbAAIgDAbg");
	this.shape_46.setTransform(6.8,1.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgmAYIACgRIBIAAIgCARgAgjgGIACgRIBIAAIgCARg");
	this.shape_47.setTransform(-12.6,1.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXBBIACgOIAQAAIAJhlIgOAAIACgOIAQAAIAPAJIgLBuIgRAKg");
	this.shape_48.setTransform(70,1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgHBBIgPgKIALhuIARgJIARAAIgBAOIgQAAIgKBlIAPAAIgBAOg");
	this.shape_49.setTransform(58.5,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBVIAOAAIgCAQg");
	this.shape_50.setTransform(45.1,-0.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIACgLIATgLIgDAWIAPAAIgBARIgQAAIgEAkIAQAAIgBARg");
	this.shape_51.setTransform(39.7,0.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_52.setTransform(21.7,1.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIADAFIAJgFIASAAIAQAJIgGA0IgRAJIgSAAIgJgGIgDAhgAgMAGIAZAAIADgmIgXAAg");
	this.shape_53.setTransform(14.1,2.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgOANIADgZIAaAAIgDAZg");
	this.shape_54.setTransform(7.2,3.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgCARg");
	this.shape_55.setTransform(1.9,0.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_56.setTransform(-5.4,1.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_57.setTransform(-13.8,1.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOANIADgZIAZAAIgCAZg");
	this.shape_58.setTransform(-20.8,3.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_59.setTransform(-29.3,1.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_60.setTransform(-39.2,1.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIABgLIAUgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_61.setTransform(-46,0.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_62.setTransform(-53,1.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_63.setTransform(-68.3,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-9}},{t:this.shape_29},{t:this.shape_28,p:{x:9.1}},{t:this.shape_27},{t:this.shape_26,p:{x:-14.4,y:14.8}},{t:this.shape_25,p:{x:-8.5,y:16.4}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_40,p:{x:-17}},{t:this.shape_39,p:{x:-5.1}},{t:this.shape_38},{t:this.shape_37,p:{x:16.3}}]},1).to({state:[{t:this.shape_44,p:{x:-24.8}},{t:this.shape_43},{t:this.shape_40,p:{x:-1.2}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_37,p:{x:24.2}}]},1).to({state:[{t:this.shape_44,p:{x:-24.5}},{t:this.shape_47},{t:this.shape_40,p:{x:-0.9}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_37,p:{x:23.9}}]},1).to({state:[{t:this.shape_40,p:{x:-12.9}},{t:this.shape_39,p:{x:-1}},{t:this.shape_37,p:{x:12.3}}]},1).to({state:[{t:this.shape_63},{t:this.shape_28,p:{x:-60.2}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_26,p:{x:26.4,y:-0.2}},{t:this.shape_30,p:{x:32.3}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_25,p:{x:51.3,y:1.3}},{t:this.shape_49},{t:this.shape_40,p:{x:64.1}},{t:this.shape_48}]},1).wait(1));

	// Layer 1
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,30.3,0,-30.3).s().p("AkFEPIAAodIILAAIAAIdg");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,13.5,0,-13.4).s().p("AlRB5IAAjxIKjAAIAADxg");

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,13.5,0,-13.4).s().p("As1B5IAAjxIZrAAIAADxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64}]}).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.2,-27.1,52.4,54.2);


(lib.dia = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgxBhg");
	this.shape.setTransform(9.1,2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAKIACgTIBLgZIgCATIgzAPIAvAQIgCATg");
	this.shape_1.setTransform(0.2,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMAjIgMgVIgRAVIgVAAIAdgjIgUgiIAUAAIALAUIAQgUIAVAAIgdAiIAWAjg");
	this.shape_2.setTransform(-8.1,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXAxIgQgJIAJhQIARgJIAlAAIAQAJIgJBQIgRAJgAgSAhIAeAAIAHhBIgeAAg");
	this.shape_3.setTransform(12.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AggAxIACgRIAWAAIAHg8IgZANIACgTIAagOIARAAIgJBQIAXAAIgBARg");
	this.shape_4.setTransform(4.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAxIABgRIAXAAIAGg8IgXANIACgTIAagOIAQAAIgIBQIAWAAIgCARg");
	this.shape_5.setTransform(4.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkAQIAygQIgvgPIACgTIBGAZIgDATIhKAZg");
	this.shape_6.setTransform(-4.5,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAxIAQghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_7.setTransform(-12.7,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{x:-8.1}},{t:this.shape_1,p:{x:0.2}},{t:this.shape}]}).to({state:[{t:this.shape_2,p:{x:-13.1}},{t:this.shape_1,p:{x:-4.7}},{t:this.shape_4},{t:this.shape_3,p:{x:12.9}}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_3,p:{x:13}}]},1).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FF8C00","#FFD510"],[0,1],4.5,21.5,4.5,-21.5).s().p("Al6AAIF6jTIF7DTIl7DTg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.9,-21.1,75.8,42.3);


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

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAKAzIgDgFIgJAFIgTAAIgPgJIAGg0IARgJIARAAIAJAGIAEglIAUAAIgLBlgAgQAjIAYAAIAEgmIgYAAg");
	this.shape_5.setTransform(8.6,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_6.setTransform(-0.1,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiAxIAKhhIA7AAIgCARIgnAAIgCAWIAeAAIgCAQIgdAAIgDAZIAmAAIgCARg");
	this.shape_7.setTransform(-7.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},3).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#099292","#10FFFF"],[0,1],0,15.9,0,-15.9).s().p("AjKBsQhVgsAAhAQAAg+BVguQBTgsB3AAQB4AABTAsQBVAuAAA+QAABAhVAsQhTAth4AAQh3AAhTgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape_8).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-15.3,57.6,30.6);


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

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_4.setTransform(15.5,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_5.setTransform(10.5,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgFIATAAIAPAJIgHA8g");
	this.shape_6.setTransform(4,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_7.setTransform(-3.7,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAaAxIgGgVIgjAAIgKAVIgTAAIAshhIAUAAIAZBhgAgIALIAYAAIgIgjg");
	this.shape_8.setTransform(-13,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},3).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#099292","#10FFFF"],[0,1],0,15.9,0,-15.9).s().p("AjKBsQhVgsAAhAQAAg+BVguQBTgsB3AAQB4AABTAsQBVAuAAA+QAABAhVAsQhTAth4AAQh3AAhTgtg");

	this.timeline.addTween(cjs.Tween.get(this.shape_9).to({_off:true},1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-15.3,57.6,30.6);


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


(lib.diaEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape.setTransform(10.8,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIADAFIAJgFIATAAIAPAJIgGA0IgRAJIgRAAIgKgGIgDAhgAgMAGIAZAAIADgmIgXAAg");
	this.shape_1.setTransform(0.5,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFAxIACgVIguAAIACgPIA2g9IARAAIgGA7IAMAAIgCARIgMAAIgCAVgAgPALIAAAAIAYAAIADgeIgBAAg");
	this.shape_2.setTransform(-11.8,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_3.setTransform(18.9,-6.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAGIAKgGIAOAAIgBAQIgYAAIgFA1g");
	this.shape_4.setTransform(12.4,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSAjIgPgJIAGg0IARgJIAdAAIAPAJIgGA0IgRAJgAgNATIAXAAIAEgmIgXAAg");
	this.shape_5.setTransform(5,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAzIAGg1IgNAAIABgQIANAAIADgXIAQgJIASAAIgBAQIgQAAIgCAQIAQAAIgCAQIgPAAIgGA1g");
	this.shape_6.setTransform(-1.6,-7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_7.setTransform(-8.9,-6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgmAxIAKhhIA0AAIAPAJIgDAfIgNAHIAAAAIALAGIgDAiIgRAKgAgRAgIAdAAIADgZIgdAAgAgNgJIAdAAIADgWIgdAAg");
	this.shape_8.setTransform(-17.4,-7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_9.setTransform(14.9,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIASAAIAPAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAYAAIAFgmIgZAAg");
	this.shape_10.setTransform(4.6,10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglAxIAFguIARgJIAeAAIACgZIgaAAIgBANIgTAAIABgVIASgJIAgAAIAPAJIgEAoIgRAKIgdAAIgDAVIAuAAIgCARg");
	this.shape_11.setTransform(-7.5,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAxIACgRIAWAAIAHg8IgZANIACgTIAagOIARAAIgJBQIAXAAIgBARg");
	this.shape_12.setTransform(-16,7.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_13.setTransform(10.8,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIACAFIAKgFIASAAIAPAJIgFA0IgRAJIgSAAIgJgGIgEAhgAgMAGIAYAAIAFgmIgZAAg");
	this.shape_14.setTransform(0.4,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAxIAthQIgfAAIgBANIgTAAIADgeIBIAAIgBANIgwBUg");
	this.shape_15.setTransform(-11.1,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).wait(1));

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#FF8C00","#FFD510"],[0,1],6.9,28.5,6.9,-28.3).s().p("Ao9AAII9kWII+EWIo+EXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-28,114.8,55.9);


(lib.dia_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgVAAIgFA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_9.setTransform(10.8,8.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIADAFIAJgFIATAAIAPAJIgGA0IgRAJIgRAAIgKgGIgDAhgAgMAGIAZAAIADgmIgXAAg");
	this.shape_10.setTransform(0.5,10.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAFAxIACgVIguAAIACgPIA2g9IARAAIgGA7IAMAAIgCARIgMAAIgCAVgAgPALIAAAAIAYAAIADgeIgBAAg");
	this.shape_11.setTransform(-11.8,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgGA1IgSAAIAGg1IgUAAIgGA1IgTAAIAHhFIAQAAIADAFIAKgFIANAAIAMAHIANgHIAOAAIAPAJIgGA8g");
	this.shape_12.setTransform(23.5,-6.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_13.setTransform(13.4,-6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBUIAOAAIgCARg");
	this.shape_14.setTransform(7.1,-7.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_15.setTransform(0.7,-6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFAzIgJgFIgLAFIgJAAIALhlIATAAIgEAlIAKgGIASAAIAPAJIgFA0IgSAJgAgOAjIAZAAIAEgmIgYAAg");
	this.shape_16.setTransform(-7.5,-7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_17.setTransform(-15.7,-6.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAxIgPgJIACgTIAUAAIgBAMIAdAAIACgYIgfAAIgPgJIAEgoIARgJIAjAAIAPAJIgCATIgUAAIACgLIgcAAIgDAYIAfAAIAQAIIgFAoIgRAJg");
	this.shape_18.setTransform(-24.1,-7.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_19.setTransform(14.9,8.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkAxIALhhIAQAAIACAFIAKgFIASAAIAPAJIgFA0IgRAJIgRAAIgKgGIgEAhgAgMAGIAYAAIAFgmIgZAAg");
	this.shape_20.setTransform(4.6,10.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglAxIAFguIARgJIAeAAIACgZIgaAAIgBANIgTAAIABgVIASgJIAgAAIAPAJIgEAoIgRAKIgdAAIgDAVIAuAAIgCARg");
	this.shape_21.setTransform(-7.5,7.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AggAxIACgRIAWAAIAHg8IgZANIACgTIAagOIARAAIgJBQIAXAAIgBARg");
	this.shape_22.setTransform(-16,7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_23.setTransform(10.8,8.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIACAFIAKgFIASAAIAPAJIgFA0IgRAJIgSAAIgJgGIgEAhgAgMAGIAYAAIAFgmIgZAAg");
	this.shape_24.setTransform(0.4,10.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgfAxIAthQIgfAAIgBANIgTAAIADgeIBIAAIgBANIgwBUg");
	this.shape_25.setTransform(-11.1,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FF8C00","#FFD510"],[0,1],6.9,28.5,6.9,-28.3).s().p("Ao9AAII9kWII+EWIo+EXg");

	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-28,114.8,55.9);


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



(lib.bujurEn_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAAAvIgQgKIAFgrIgMAAIABgRIANAAIABgLIAUgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_9.setTransform(15.1,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_10.setTransform(9.4,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASAjIgKgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAJAFIALgFIAKAAIgIBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_11.setTransform(2.1,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgBARg");
	this.shape_12.setTransform(-5,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgXAxIgPgJIACgTIAUAAIgBAMIAdAAIACgYIgfAAIgPgJIAEgoIARgJIAjAAIAPAJIgCAUIgUAAIACgMIgcAAIgDAYIAfAAIAQAIIgFAoIgRAJg");
	this.shape_13.setTransform(-12.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_14.setTransform(15.3,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_15.setTransform(7.7,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgPgJIAGgzIARgJIAQAAIAKAFIAKgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_16.setTransform(-0.2,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBVIAOAAIgCAQg");
	this.shape_17.setTransform(-6.5,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAxIgQgJIAJhQIARgJIAnAAIAPAJIgCAVIgUAAIACgNIggAAIgHBBIAgAAIACgNIATAAIgCAUIgRAJg");
	this.shape_18.setTransform(-13.5,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAKAzIgPgYIgJAJIgBAPIgTAAIAKhlIAUAAIgHA7IABAAIAXgbIAWAAIgcAeIAZAng");
	this.shape_19.setTransform(12.2,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_20.setTransform(-1.9,1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AglAxIAJhhIA0AAIAOAKIgEAqIgSAJIgfAAIgDAkgAgMgCIAbAAIADgdIgcAAg");
	this.shape_21.setTransform(-10.2,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_22.setTransform(17.6,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_23.setTransform(1.9,1.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_24.setTransform(-6.5,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAOAxIAEgqIglAAIgFAqIgTAAIAKhhIAUAAIgFAnIAmAAIAFgnIATAAIgKBhg");
	this.shape_25.setTransform(-15.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:9.4}},{t:this.shape_9}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:15.3}}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_10,p:{x:5.4}},{t:this.shape_19}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_14,p:{x:9.8}},{t:this.shape_22}]},1).wait(1));

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#099292","#10FFFF"],[0,1],0,15.9,0,-15.9).s().p("AjKBsQhVgsAAhAQAAg+BVguQBTgsB3AAQB4AABTAsQBVAuAAA+QAABAhVAsQhTAth4AAQh3AAhTgtg");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,16.6,0,-16.5).s().p("AjTBxQhYguAAhDQAAhBBYgvQBYguB7AAQB9AABXAuQBYAvAABBQAABDhYAuQhXAuh9AAQh7AAhYgug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-15.3,57.6,30.6);


(lib.bujur_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgSAAIgPgJIAGgzIARgJIAQAAIAKAFIAKgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_10.setTransform(13.3,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgBAzIgPgKIAKhbIASAAIgJBVIAOAAIgCAQg");
	this.shape_11.setTransform(7,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_12.setTransform(0.3,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAbAxIAGhAIgdBAIgRAAIgQhBIAAAAIgHBBIgTAAIAKhhIAaAAIARBHIABAAIAfhHIAaAAIgKBhg");
	this.shape_13.setTransform(-10,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_14.setTransform(15.6,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAKAFIAKgFIAKAAIgJBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_15.setTransform(7.7,1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_16.setTransform(-5.1,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAQAxIgbgmIgKALIgEAbIgTAAIAKhhIATAAIgEAsIAAAAIApgsIAXAAIgsAuIAmAzg");
	this.shape_17.setTransform(-13.3,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_18.setTransform(18.6,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AARAjIgJgFIgJAFIgRAAIgQgJIAGgzIARgJIAQAAIAKAFIAKgFIAKAAIgIBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_19.setTransform(10.4,1.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgUAAIgGA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_20.setTransform(0.2,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AARAjIgJgFIgKAFIgRAAIgOgJIAFgzIARgJIAQAAIAJAFIALgFIAJAAIgIBFgAgOAUIAXAAIAEgnIgXAAg");
	this.shape_21.setTransform(-9.9,1.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAxIAIhQIgaAAIABgRIBIAAIgCARIgaAAIgJBQg");
	this.shape_22.setTransform(-17.5,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAJAzIAGg2IgYAAIgGA2IgTAAIAKhlIAUAAIgEAlIAJgFIATAAIAPAJIgHA8g");
	this.shape_23.setTransform(19.3,-0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASAjIgKgFIgKAFIgQAAIgPgJIAFgzIARgJIAQAAIAJAFIALgFIAKAAIgIBFgAgOAUIAXAAIAEgnIgWAAg");
	this.shape_24.setTransform(11,1.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAbAjIAFg1IgUAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIADAFIAKgFIAOAAIALAHIANgHIAOAAIAQAJIgHA8g");
	this.shape_25.setTransform(0.8,1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AANAxIgQglIgMAAIgEAlIgTAAIAKhhIA0AAIAPAKIgEAoIgRAKIARAlgAgNgEIAdAAIADgbIgdAAg");
	this.shape_26.setTransform(-18.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12,p:{x:0.3}},{t:this.shape_11,p:{x:7}},{t:this.shape_10}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_11,p:{x:1.4}},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_26},{t:this.shape_12,p:{x:-9.3}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#099292","#10FFFF"],[0,1],0,15.9,0,-15.9).s().p("AjKBsQhVgsAAhAQAAg+BVguQBTgsB3AAQB4AABTAsQBVAuAAA+QAABAhVAsQhTAth4AAQh3AAhTgtg");

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,16.6,0,-16.5).s().p("AjTBxQhYguAAhDQAAhBBYgvQBYguB7AAQB9AABXAuQBYAvAABBQAABDhYAuQhXAuh9AAQh7AAhYgug");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-15.3,57.6,30.6);


(lib.btnWideBg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#671D1F").s().p("ALBCkIAVkxI2WAAIgJBOIgNgNIAKhXIW7AAIgiFHgAruCkIAKh0IBAhAIARAQIhGBGIgHBeg");
	this.shape_4.setTransform(0.2,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-6.9,-23.7,-2.9,18.2).s().p("ArbCZIAIheIBFhFIgRgRIAGgFIgrgrIAJhNIWXAAIgWExg");
	this.shape_5.setTransform(-0.4,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AsWDWIAEgjIAAAAIAQikIA2g1IgrgrIAQiEIX+AAIguGrgArUhdIAMANIArAqIgGAGIhAA/IgKB1IAPAAIWhAAIALAAIAjlII27AAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.2)").s().p("AsWDWIAEgjIAAAAIAQikIA2g1IgrgrIAQiEIX+AAIguGrg");
	this.shape_7.setTransform(3.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

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
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-48.6,-48.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

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


(lib.flowchart = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape.setTransform(197.8,101.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_1.setTransform(190.7,102.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIARAAIgKBXgAgNAeIAUAAIAEggIgVAAg");
	this.shape_2.setTransform(183.6,101.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgGA7gAgFgaIACgRIAQAAIgCARg");
	this.shape_3.setTransform(178.3,101.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPAqIAHhFIgXAAIACgOIA9AAIgCAOIgWAAIgHBFg");
	this.shape_4.setTransform(173.5,101.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_5.setTransform(57.3,102.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAfIABAAIATgfIATAAIghAvIgDAkg");
	this.shape_6.setTransform(50.5,101.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_7.setTransform(-37.1,101.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_8.setTransform(-44.2,102.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgJBXgAgNAeIAUAAIAEggIgVAAg");
	this.shape_9.setTransform(-51.3,101.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgGA7gAgFgaIACgRIAQAAIgCARg");
	this.shape_10.setTransform(-56.6,101.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgPAqIAHhFIgXAAIACgOIA9AAIgCAOIgWAAIgHBFg");
	this.shape_11.setTransform(-61.4,101.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_12.setTransform(-180.4,102.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIAOAfIAAAAIATgfIASAAIggAvIgDAkg");
	this.shape_13.setTransform(-187.1,101.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_14.setTransform(79.7,-68.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPAeIgIgFIgIAFIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLAQIATAAIADgfIgTAAg");
	this.shape_15.setTransform(72.5,-67.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgJBXgAgNAeIAVAAIADggIgVAAg");
	this.shape_16.setTransform(65.5,-68.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgFA7gAgFgaIACgRIAQAAIgBARg");
	this.shape_17.setTransform(60.1,-68.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAqIAIhFIgXAAIACgOIA9AAIgCAOIgWAAIgIBFg");
	this.shape_18.setTransform(55.3,-68.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPAeIgIgFIgIAFIgOAAIgOgIIAFgsIAPgIIAOAAIAHAGIAKgGIAIAAIgHA8gAgLAQIATAAIADgfIgTAAg");
	this.shape_19.setTransform(-63.7,-67.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAfIABAAIATgfIATAAIghAvIgDAkg");
	this.shape_20.setTransform(-70.4,-68.6);

	this.instance = new lib.bujur_1("single",3);
	this.instance.parent = this;
	this.instance.setTransform(33.8,148.9,1,1,0,0,0,0.2,0.1);

	this.instance_1 = new lib.bujur_1("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-45.7,147.9,1,1,0,0,0,0.2,0.1);

	this.instance_2 = new lib.bujur_1("single",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-191.2,147.4,1,1,0,0,0,0.1,0.1);

	this.instance_3 = new lib.dia_1("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-118.9,109);

	this.instance_4 = new lib.dia_1("single",2);
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.9,109);

	this.instance_5 = new lib.recsenget("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(117,49.2,1,1,0,0,0,0.1,0.1);

	this.instance_6 = new lib.recsenget("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-118.8,49.2,1,1,0,0,0,0.1,0.1);

	this.instance_7 = new lib.rec("single",1);
	this.instance_7.parent = this;
	this.instance_7.setTransform(117,-6.1,1,1,0,0,0,0.1,0.1);

	this.instance_8 = new lib.dia_1("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-1.9,-59.7);

	this.instance_9 = new lib.rec("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-118.9,-6.1,1,1,0,0,0,0.1,0.1);

	this.instance_10 = new lib.recsenget("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.8,-113.3,1,1,0,0,0,0.1,0.1);

	this.instance_11 = new lib.bujur_1("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.7,-156.8,1,1,0,0,0,0.2,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ADTTRICBAAIg+A8gApNTRICCAAIg+A8gA/3TRICCAAIg+A8gAQQL3ICCAAIg+A8gA0oLqICCAAIg+A8gAQQFCICCAAIg+A7gA0oFCICCAAIg+A7gAd2F9IBEg7IA+A7gAQQmwICCAAIg+A7gA0omwICCAAIg+A7gAiTuLICCAAIg+A8gAiT0MICCAAIg+A7g");
	this.shape_21.setTransform(6.2,-6.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhTouISmAAIAADpIAAWwINlAAIAA2wItlAAAEVXiIAAl3IM+AAAzlRrIAA6ZISSAAAhT34IAAPKAzlRrILaAAIAAE7A+3X5IAAmOILSAA");
	this.shape_22.setTransform(6.5,-4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAeIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLARIAUAAIADghIgUAAg");
	this.shape_23.setTransform(182.1,102.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA2IAAAAIAGg2IARAAIgJBTg");
	this.shape_24.setTransform(174.2,101.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgHIACgVIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAIIgCAVIgPAIg");
	this.shape_25.setTransform(62.7,102.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_26.setTransform(56.1,102.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAfIABAAIATgfIASAAIgfAvIgEAkg");
	this.shape_27.setTransform(49.5,101.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAeIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLARIAUAAIADghIgUAAg");
	this.shape_28.setTransform(-52.8,102.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA2IAAAAIAGg2IARAAIgJBTg");
	this.shape_29.setTransform(-60.7,101.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgHIACgVIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAIIgCAVIgPAIg");
	this.shape_30.setTransform(-173.2,102.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_31.setTransform(-179.8,102.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgWgvIATAAIAOAfIAAAAIATgfIATAAIghAvIgDAkg");
	this.shape_32.setTransform(-186.3,101.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAfIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLAQIAUAAIADggIgUAAg");
	this.shape_33.setTransform(63.9,-66.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAPAAIAeA1IABAAIAFg1IARAAIgJBTg");
	this.shape_34.setTransform(56,-68.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgIIACgUIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAHIgCAWIgPAIg");
	this.shape_35.setTransform(-55.3,-66.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_36.setTransform(-61.9,-66.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgWgvIATAAIAOAgIAAAAIATggIATAAIghAwIgDAjg");
	this.shape_37.setTransform(-68.4,-68.1);

	this.instance_12 = new lib.bujurEn_1("single",3);
	this.instance_12.parent = this;
	this.instance_12.setTransform(33.8,148.9,1,1,0,0,0,0.2,0.1);

	this.instance_13 = new lib.bujurEn_1("single",2);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-45.7,147.9,1,1,0,0,0,0.2,0.1);

	this.instance_14 = new lib.bujurEn_1("single",1);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-191.2,147.4,1,1,0,0,0,0.1,0.1);

	this.instance_15 = new lib.diaEn("single",1);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-118.9,109);

	this.instance_16 = new lib.diaEn("single",2);
	this.instance_16.parent = this;
	this.instance_16.setTransform(116.9,109);

	this.instance_17 = new lib.recsengetEn("single",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(117,49.2,1,1,0,0,0,0.1,0.1);

	this.instance_18 = new lib.recsengetEn("single",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(-118.8,49.2,1,1,0,0,0,0.1,0.1);

	this.instance_19 = new lib.recEn("single",1);
	this.instance_19.parent = this;
	this.instance_19.setTransform(117,-6.1,1,1,0,0,0,0.1,0.1);

	this.instance_20 = new lib.diaEn("single",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(-1.9,-59.7);

	this.instance_21 = new lib.recEn("single",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(-118.9,-6.1,1,1,0,0,0,0.1,0.1);

	this.instance_22 = new lib.recsengetEn("single",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-1.8,-113.3,1,1,0,0,0,0.1,0.1);

	this.instance_23 = new lib.bujurEn_1("single",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(-1.7,-156.8,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-221.3,-172.2,431.6,337);


(lib.flowchart_1 = function(mode,startPosition,loop) {
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
	this.instance_24 = new lib.rec_1("single",5);
	this.instance_24.parent = this;
	this.instance_24.setTransform(-1.8,121.2,1,1,0,0,0,0.1,0.2);

	this.instance_25 = new lib.rec_1("single",4);
	this.instance_25.parent = this;
	this.instance_25.setTransform(164.9,51,1,1,0,0,0,0.1,0.2);

	this.instance_26 = new lib.rec_1("single",2);
	this.instance_26.parent = this;
	this.instance_26.setTransform(-36.4,51,1,1,0,0,0,0.1,0.2);

	this.instance_27 = new lib.rec_1("single",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(-1.9,-103.7,1,1,0,0,0,0.1,0.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_38.setTransform(164.2,-2.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_39.setTransform(157,-0.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgJBXgAgNAeIAUAAIAEggIgVAAg");
	this.shape_40.setTransform(150,-2.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgFA7gAgFgaIACgRIAQAAIgCARg");
	this.shape_41.setTransform(144.6,-2.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgQAqIAIhEIgXAAIACgPIA9AAIgCAPIgWAAIgHBEg");
	this.shape_42.setTransform(139.8,-1.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_43.setTransform(65.3,-0.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAgIABAAIATggIASAAIgfAwIgEAjg");
	this.shape_44.setTransform(58.5,-1.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_45.setTransform(-30.8,-2.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_46.setTransform(-38,-0.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAJAsIgCgFIgIAFIgQAAIgOgIIAFgsIAQgIIAOAAIAIAFIAEggIAPAAIgJBXgAgNAeIAVAAIADggIgVAAg");
	this.shape_47.setTransform(-45,-2.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAQAAIgGA7gAgFgaIABgRIARAAIgBARg");
	this.shape_48.setTransform(-50.4,-2.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgQAqIAIhEIgXAAIACgPIA9AAIgBAPIgYAAIgHBEg");
	this.shape_49.setTransform(-55.2,-1.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_50.setTransform(-132.2,-0.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIAOAgIAAAAIATggIASAAIggAwIgDAjg");
	this.shape_51.setTransform(-139,-1.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_52.setTransform(59.7,-50.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAFIAKgFIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_53.setTransform(52.5,-48.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgIBXgAgNAeIAUAAIAEggIgVAAg");
	this.shape_54.setTransform(45.5,-50.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgGA7gAgFgaIACgRIAQAAIgCARg");
	this.shape_55.setTransform(40.1,-50.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgPAqIAHhFIgXAAIACgOIA9AAIgCAOIgWAAIgHBFg");
	this.shape_56.setTransform(35.3,-49.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAFIAKgFIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_57.setTransform(-38.7,-48.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAfIABAAIATgfIASAAIgfAvIgEAkg");
	this.shape_58.setTransform(-45.4,-49.9);

	this.instance_28 = new lib.bujur("single",4);
	this.instance_28.parent = this;
	this.instance_28.setTransform(-1.6,166,1,1,0,0,0,0.2,0.1);

	this.instance_29 = new lib.dia("single",1);
	this.instance_29.parent = this;
	this.instance_29.setTransform(-93.8,5.8);

	this.instance_30 = new lib.dia("single",2);
	this.instance_30.parent = this;
	this.instance_30.setTransform(102.2,5.7);

	this.instance_31 = new lib.rec_1("single",3);
	this.instance_31.parent = this;
	this.instance_31.setTransform(45.9,51,1,1,0,0,0,0.1,0.2);

	this.instance_32 = new lib.dia("single",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(-2,-42);

	this.instance_33 = new lib.rec_1("single",4);
	this.instance_33.parent = this;
	this.instance_33.setTransform(-152.4,51,1,1,0,0,0,0.1,0.2);

	this.instance_34 = new lib.bujur("single",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(-1.8,-158.7,1,1,0,0,0,0.2,0.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AiSVaICCAAIg+A8gAiSO4ICBAAIg+A8gAXuCmICCAAIg+A8gAFKCmICCAAIg+A8gAntCmICCAAIg+A8gA5vCmICCAAIg+A8gAN8luICCAAIg+A8gAwtluICCAAIg+A8gAiVr7ICCAAIg+A8gAiV2VICCAAIg+A8g");
	this.shape_59.setTransform(6.3,3.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhT4qIAAQ3IQQAAIAAHdIJzAAIAAKeIpzAAAvrgWIAAndIOYAAAvrgWIJBAAIAAKeIpBAAIAACSIOYAAIAAMRAvrKIIpEAAIAAqeIJEAAAhTMaIQQAAIAAiSAO9gWIo0AAIAAKeII0AA");
	this.shape_60.setTransform(6.5,8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgPAfIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLAQIAUAAIADggIgUAAg");
	this.shape_61.setTransform(148.4,-0.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA1IAAAAIAGg1IARAAIgJBTg");
	this.shape_62.setTransform(140.5,-1.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgIIACgUIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAHIgCAWIgPAIg");
	this.shape_63.setTransform(66.2,-0.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_64.setTransform(59.6,-0.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIANAgIABAAIATggIASAAIgfAwIgEAjg");
	this.shape_65.setTransform(53,-1.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgPAfIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLAQIAUAAIADggIgUAAg");
	this.shape_66.setTransform(-46.6,-0.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAPAqIgeg2IgBAAIgFA2IgRAAIAJhTIAPAAIAeA1IABAAIAFg1IARAAIgJBTg");
	this.shape_67.setTransform(-54.5,-1.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgIIACgUIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAHIgCAWIgPAIg");
	this.shape_68.setTransform(-131.3,-0.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_69.setTransform(-137.9,-0.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgWgvIATAAIAOAgIAAAAIATggIATAAIghAwIgDAjg");
	this.shape_70.setTransform(-144.5,-1.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgPAeIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLARIAUAAIADghIgUAAg");
	this.shape_71.setTransform(43.9,-48.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA2IAAAAIAGg2IARAAIgJBTg");
	this.shape_72.setTransform(36,-49.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgHIACgVIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAIIgCAVIgPAIg");
	this.shape_73.setTransform(-37.8,-48.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_74.setTransform(-44.4,-48.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIANAfIABAAIATgfIASAAIgfAvIgEAkg");
	this.shape_75.setTransform(-50.9,-49.9);

	this.instance_35 = new lib.bujurEn("single",4);
	this.instance_35.parent = this;
	this.instance_35.setTransform(-1.6,166,1,1,0,0,0,0.2,0.1);

	this.instance_36 = new lib.bujurEn("single",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(-1.8,-158.7,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.instance_34},{t:this.instance_33,p:{startPosition:4}},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.instance_36},{t:this.instance_33,p:{startPosition:1}},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_35},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.3,-174.1,405,355.4);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,431.8,41.5);


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


(lib.btnHorizontal2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAHg+IgTAAIADgYIASAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_13.setTransform(40.4,-1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgVBJIALhjIAaAAIgKBjgAgJgtIACgbIAdAAIgDAbg");
	this.shape_14.setTransform(33.3,-2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAIhMIgdAAIgIBMIgbAAIAKhjIAXAAIAEAIIAPgIIATAAIARAKIAUgKIATAAIAWANIgJBWg");
	this.shape_15.setTransform(21.6,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIBJIgNgIIgPAIIgNAAIAPiRIAbAAIgFA1IAOgIIAaAAIAWANIgIBKIgZANgAgUAyIAkAAIAGg2IgjAAg");
	this.shape_16.setTransform(7,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_17.setTransform(-4.9,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AghBHIgWgOIADgaIAcAAIgBAQIAqAAIADgjIgtAAIgVgMIAGg5IAYgNIAyAAIAWANIgDAbIgcAAIABgQIgoAAIgDAhIAtAAIAVANIgGA5IgYAOg");
	this.shape_18.setTransform(-17.3,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkBYIgTgTQgCgCAAgDQAAgCACgDIA7g7Ig7g6QgCgCAAgEQAAgCACgCIATgTQACgCADAAQADAAACACIBSBTQACACAAACQAAADgCACIhSBTQgCACgDAAQgDAAgCgCg");
	this.shape_19.setTransform(-37.2,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(4));

	// Layer_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_20.setTransform(-1.4,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_21.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_22.setTransform(0.2,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_23.setTransform(0.2,-1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_24.setTransform(0.2,-1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_25.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.btnWideBg_1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.btnHorizontal1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape_13.setTransform(40.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_14.setTransform(29.7,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAHg+IgTAAIACgYIATAAIABgRIAdgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_15.setTransform(19.6,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAMAyIAIhMIggAAIgIBMIgcAAIALhjIAWAAIAEAIIAOgIIAYAAIAWANIgJBWg");
	this.shape_16.setTransform(9.1,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_17.setTransform(-2.7,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_18.setTransform(-15.8,-2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkBYIgTgTQgCgCAAgDQAAgCACgDIA7g7Ig7g6QgCgCAAgEQAAgCACgCIATgTQACgCADAAQADAAACACIBSBTQACACAAACQAAADgCACIhSBTQgCACgDAAQgDAAgCgCg");
	this.shape_19.setTransform(-36.5,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]}).wait(4));

	// Layer_2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_20.setTransform(-1.4,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_21.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_22.setTransform(0.2,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_23.setTransform(0.2,-1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_24.setTransform(0.2,-1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_25.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance_1 = new lib.btnWideBg_1("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

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
	this.instance = new lib.btnHorizontal1_1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHorizontal1_1(), 3);

	this.instance_1 = new lib.btnHorizontal2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHorizontal2_1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-24.6,164.1,51.8);


(lib.mcBtnCont_1 = function(mode,startPosition,loop) {
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
	this.instance_2 = new lib.btnHorizontal1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.btnHorizontal1(), 3);

	this.instance_3 = new lib.btnHorizontal2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.btnHorizontal2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.4,-24.6,164.1,51.8);


(lib.actMc_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var cAns = ["15", "3", "0", "2"];
		
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		var fontSize = 18;
		var maxBlanks = 4;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "3");
			this["txtAns"+i].setAttribute("autocomplete", "false");
		}
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				for (i=1; i<=maxBlanks; i++){
					this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
				}
			}, 1000);
		});
		var digitsOnly = /[1234567890]/g;
		for (i=1; i<=maxBlanks; i++){
			this["txtAns"+i].onkeypress = function (e){
				return restrictCharacters(this,event, digitsOnly);
			};
		}
		function restrictCharacters(myfield, e, restrictionType) {
		    if (!e) var e = window.event
		    if (e.keyCode) code = e.keyCode;
		    else if (e.which) code = e.which;
		    var character = String.fromCharCode(code);
		    // if they pressed esc... remove focus from field...
		    if (code==27) { this.blur(); return false; }
		    // ignore if they are press other keys
		    // strange because code: 39 is the down key AND ' key...
		    // and DEL also equals .
		    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
		        if (character.match(restrictionType) || character=="-") {
		            return true;
		        } else {
		            return false;
		        }
		    }
		}
		for (i=1; i<=maxBlanks; i++){
			this["txtAns"+i].onkeyup = function (e){
				_this.updateAll();
			};
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value!=""){
					doneCount++;
				}
			}
			if (doneCount==maxBlanks){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function checkAns(e){
			var cScore = 0;
			var _userAns = _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// t
	this.txtAns4 = new lib.an_TextInput({'id': 'txtAns4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns4.setTransform(619.8,443.6,0.663,1.33,0,0,0,50.1,11.2);

	this.txtAns3 = new lib.an_TextInput({'id': 'txtAns3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns3.setTransform(705.8,411.1,1.01,1.33,0,0,0,50,11.1);

	this.txtAns2 = new lib.an_TextInput({'id': 'txtAns2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns2.setTransform(619.8,379.1,0.663,1.33,0,0,0,50.1,11.2);

	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(705.8,347.1,1.01,1.33,0,0,0,50,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4}]}).wait(5));

	// schedulbox1
	this.instance = new lib.schedulbox1_1();
	this.instance.parent = this;
	this.instance.setTransform(590.8,378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// btnCont
	this.btnSubmit = new lib.mcBtnCont_1();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(601.7,494.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(447.9,299,310.2,218);


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


(lib.actMc_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var cAns = ["31", "2", "0", "10"];
		
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		var fontSize = 18;
		var maxBlanks = 4;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "3");
			this["txtAns"+i].setAttribute("autocomplete", "false");
		}
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				for (i=1; i<=maxBlanks; i++){
					this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
				}
			}, 1000);
		});
		var digitsOnly = /[1234567890]/g;
		for (i=1; i<=maxBlanks; i++){
			this["txtAns"+i].onkeypress = function (e){
				return restrictCharacters(this,event, digitsOnly);
			};
		}
		function restrictCharacters(myfield, e, restrictionType) {
		    if (!e) var e = window.event
		    if (e.keyCode) code = e.keyCode;
		    else if (e.which) code = e.which;
		    var character = String.fromCharCode(code);
		    // if they pressed esc... remove focus from field...
		    if (code==27) { this.blur(); return false; }
		    // ignore if they are press other keys
		    // strange because code: 39 is the down key AND ' key...
		    // and DEL also equals .
		    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
		        if (character.match(restrictionType) || character=="-") {
		            return true;
		        } else {
		            return false;
		        }
		    }
		}
		for (i=1; i<=maxBlanks; i++){
			this["txtAns"+i].onkeyup = function (e){
				_this.updateAll();
			};
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value!=""){
					doneCount++;
				}
			}
			if (doneCount==maxBlanks){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function checkAns(e){
			var cScore = 0;
			var _userAns = _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_3
	this.txtAns4 = new lib.an_TextInput({'id': 'txtAns4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns4.setTransform(619.8,443.6,0.663,1.33,0,0,0,50.1,11.2);

	this.txtAns3 = new lib.an_TextInput({'id': 'txtAns3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns3.setTransform(705.8,411.1,1.01,1.33,0,0,0,50,11.1);

	this.txtAns2 = new lib.an_TextInput({'id': 'txtAns2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns2.setTransform(619.8,379.1,0.663,1.33,0,0,0,50.1,11.2);

	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(705.8,347.1,1.01,1.33,0,0,0,50,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4}]}).wait(5));

	// schedulbox1
	this.instance = new lib.schedulbox1copy2();
	this.instance.parent = this;
	this.instance.setTransform(590.8,378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// btnCont
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(601.7,494.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(447.9,299,310.2,218);


(lib.actMc_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var cAns = ["14", "2", "0", "3"];
		
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		
		var fontSize = 18;
		var maxBlanks = 4;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "3");
			this["txtAns"+i].setAttribute("autocomplete", "false");
		}
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				for (i=1; i<=maxBlanks; i++){
					this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
				}
			}, 1000);
		});
		var digitsOnly = /[1234567890]/g;
		for (i=1; i<=maxBlanks; i++){
			this["txtAns"+i].onkeypress = function (e){
				return restrictCharacters(this,event, digitsOnly);
			};
		}
		function restrictCharacters(myfield, e, restrictionType) {
		    if (!e) var e = window.event
		    if (e.keyCode) code = e.keyCode;
		    else if (e.which) code = e.which;
		    var character = String.fromCharCode(code);
		    // if they pressed esc... remove focus from field...
		    if (code==27) { this.blur(); return false; }
		    // ignore if they are press other keys
		    // strange because code: 39 is the down key AND ' key...
		    // and DEL also equals .
		    if (!e.ctrlKey && code!=9 && code!=8 && code!=36 && code!=37 && code!=38 && (code!=39 || (code==39 && character=="'")) && code!=40) {
		        if (character.match(restrictionType) || character=="-") {
		            return true;
		        } else {
		            return false;
		        }
		    }
		}
		for (i=1; i<=maxBlanks; i++){
			this["txtAns"+i].onkeyup = function (e){
				_this.updateAll();
			};
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value!=""){
					doneCount++;
				}
			}
			if (doneCount==maxBlanks){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function checkAns(e){
			var cScore = 0;
			var _userAns = _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// Layer_3
	this.txtAns4 = new lib.an_TextInput({'id': 'txtAns4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns4.setTransform(619.8,443.6,0.663,1.33,0,0,0,50.1,11.2);

	this.txtAns3 = new lib.an_TextInput({'id': 'txtAns3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns3.setTransform(705.8,411.1,1.01,1.33,0,0,0,50,11.1);

	this.txtAns2 = new lib.an_TextInput({'id': 'txtAns2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns2.setTransform(619.8,379.1,0.663,1.33,0,0,0,50.1,11.2);

	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(705.8,347.1,1.01,1.33,0,0,0,50,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4}]}).wait(5));

	// schedulbox1
	this.instance = new lib.schedulbox1copy();
	this.instance.parent = this;
	this.instance.setTransform(590.8,378);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// btnCont
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(601.7,494.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(447.9,299,310.2,218);


(lib.actMc_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [4, 1, 2, 3];
		var userAns = [0,0,0,0];
		var maxBlanks = 4;
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
		cb4.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb4.style.fontSize = fontSize * myScale + "px";
		$("#cb4").val(0);
		$("#cb4").change(function(){
			userAns[3] = $("#cb4").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
				cb3.style.fontSize = fontSize * myScale + "px";
				cb4.style.fontSize = fontSize * myScale + "px";
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
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3];
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
				$('select option:contains("Kelas")').text('Class');
				$('select option:contains("Taman")').not('select option:contains("permainan")').text('Park');
				$('select option:contains("Rumah")').text('Home');
				$('select option:contains("Taman permainan")').text('Playground');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
				$('select option:contains("Kelas")').text('Class');
				$('select option:contains("Taman")').not('select option:contains("permainan")').text('Park');
				$('select option:contains("Rumah")').text('Home');
				$('select option:contains("Taman permainan")').text('Playground');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
				$('select option:contains("Class")').text('Kelas');
				$('select option:contains("Park")').text('Taman');
				$('select option:contains("Home")').text('Rumah');
				$('select option:contains("Playground")').text('Taman permainan');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// input
	this.cb4 = new lib.an_ComboBox({'id': 'cb4', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb4.setTransform(670,452.1,1.616,1.275,0,0,0,50.1,11.2);

	this.cb3 = new lib.an_ComboBox({'id': 'cb3', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb3.setTransform(670,420.8,1.616,1.275,0,0,0,50.1,11.2);

	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(670,389.5,1.616,1.275,0,0,0,50.1,11.2);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(670,358.2,1.616,1.275,0,0,0,50.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb1},{t:this.cb2},{t:this.cb3},{t:this.cb4}]}).wait(5));

	// Layer_2
	this.instance = new lib.schedulbox3();
	this.instance.parent = this;
	this.instance.setTransform(612,345.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer_1
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(623.7,508.2,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500.4,309.1,255.2,221.7);


(lib.actMc_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [2, 3, 1, 4];
		var userAns = [0,0,0,0];
		var maxBlanks = 4;
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
		cb4.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb4.style.fontSize = fontSize * myScale + "px";
		$("#cb4").val(0);
		$("#cb4").change(function(){
			userAns[3] = $("#cb4").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
				cb3.style.fontSize = fontSize * myScale + "px";
				cb4.style.fontSize = fontSize * myScale + "px";
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
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3];
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
				$('select option:contains("Kelas")').text('Class');
				$('select option:contains("Taman")').not('select option:contains("permainan")').text('Park');
				$('select option:contains("Rumah")').text('Home');
				$('select option:contains("Taman permainan")').text('Playground');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
				$('select option:contains("Kelas")').text('Class');
				$('select option:contains("Taman")').not('select option:contains("permainan")').text('Park');
				$('select option:contains("Rumah")').text('Home');
				$('select option:contains("Taman permainan")').text('Playground');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
				$('select option:contains("Class")').text('Kelas');
				$('select option:contains("Park")').text('Taman');
				$('select option:contains("Home")').text('Rumah');
				$('select option:contains("Playground")').text('Taman permainan');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// input
	this.cb4 = new lib.an_ComboBox({'id': 'cb4', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb4.setTransform(670,452.1,1.616,1.275,0,0,0,50.1,11.2);

	this.cb3 = new lib.an_ComboBox({'id': 'cb3', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb3.setTransform(670,420.8,1.616,1.275,0,0,0,50.1,11.2);

	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(670,389.5,1.616,1.275,0,0,0,50.1,11.2);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(670,358.2,1.616,1.275,0,0,0,50.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb1},{t:this.cb2},{t:this.cb3},{t:this.cb4}]}).wait(5));

	// Layer_2
	this.instance = new lib.schedulbox2();
	this.instance.parent = this;
	this.instance.setTransform(612,345.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer_1
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(623.7,508.2,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500.4,309.1,255.2,221.7);


(lib.actMc_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var cAns = [3, 4, 1, 2];
		var userAns = [0,0,0,0];
		var maxBlanks = 4;
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
		cb4.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		cb4.style.fontSize = fontSize * myScale + "px";
		$("#cb4").val(0);
		$("#cb4").change(function(){
			userAns[3] = $("#cb4").val();
			checkCompletion();
		});
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				cb1.style.fontSize = fontSize * myScale + "px";
				cb2.style.fontSize = fontSize * myScale + "px";
				cb3.style.fontSize = fontSize * myScale + "px";
				cb4.style.fontSize = fontSize * myScale + "px";
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
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3];
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]==cAns[i-1]){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
		//language
		try {
			if (myLanguage==2){
				$('select option:contains("Pilih")').text('Choose');
				$('select option:contains("Kelas")').text('Class');
				$('select option:contains("Taman")').not('select option:contains("permainan")').text('Park');
				$('select option:contains("Rumah")').text('Home');
				$('select option:contains("Taman permainan")').text('Playground');
			}
		} catch (e) {
			//nothing
		}
		
		function onSetEn(e){
			$('select option:contains("Pilih")').text('Choose');
			$('select option:contains("Kelas")').text('Class');
			$('select option:contains("Taman")').not('select option:contains("permainan")').text('Park');
			$('select option:contains("Rumah")').text('Home');
			$('select option:contains("Taman permainan")').text('Playground');
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			$('select option:contains("Choose")').text('Pilih');
				$('select option:contains("Class")').text('Kelas');
				$('select option:contains("Park")').text('Taman');
				$('select option:contains("Home")').text('Rumah');
				$('select option:contains("Playground")').text('Taman permainan');
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// input
	this.cb4 = new lib.an_ComboBox({'id': 'cb4', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb4.setTransform(670,452.1,1.616,1.275,0,0,0,50.1,11.2);

	this.cb3 = new lib.an_ComboBox({'id': 'cb3', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb3.setTransform(670,420.8,1.616,1.275,0,0,0,50.1,11.2);

	this.cb2 = new lib.an_ComboBox({'id': 'cb2', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb2.setTransform(670,389.5,1.616,1.275,0,0,0,50.1,11.2);

	this.cb1 = new lib.an_ComboBox({'id': 'cb1', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 5, Pilih, 0, Kelas, 1, Taman, 2, Rumah, 3, Taman permainan, 4', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.cb1.setTransform(670,358.2,1.616,1.275,0,0,0,50.1,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cb1},{t:this.cb2},{t:this.cb3},{t:this.cb4}]}).wait(5));

	// Layer_2
	this.instance = new lib.schedulbox1();
	this.instance.parent = this;
	this.instance.setTransform(612,345.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

	// Layer_1
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(623.7,508.2,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(500.4,309.1,254.2,221.7);


// stage content:
(lib.f3s14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:146,q3:183,q4:221,q5:263,q6:304,finalFb:346});

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
		var stageNum = 14;
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
			"qItem": []
		};
		var qItem1 = [{
				"qId": "f3s14_1",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s14_2",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s14_3",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		var qItem2 = [{
				"qId": "f3s14_4",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s14_5",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f3s14_6",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
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
			this.myData.qItem.push(qItem2[0]);
			this.myData.qItem.push(qItem2[1]);
			this.myData.qItem.push(qItem2[2]);
		} else {
			this.myData.qItem.push(qItem1[randRange(0,2)]);
			this.myData.qItem.push(qItem2[randRange(0,2)]);
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
	this.frame_109 = function() {
		playSound("questionAlert");
	}
	this.frame_141 = function() {
		this.stop();
	}
	this.frame_146 = function() {
		playSound("questionAlert");
	}
	this.frame_178 = function() {
		this.stop();
	}
	this.frame_183 = function() {
		playSound("questionAlert");
	}
	this.frame_215 = function() {
		this.stop();
	}
	this.frame_221 = function() {
		playSound("questionAlert");
	}
	this.frame_256 = function() {
		this.stop();
	}
	this.frame_263 = function() {
		playSound("questionAlert");
	}
	this.frame_298 = function() {
		this.stop();
	}
	this.frame_304 = function() {
		playSound("questionAlert");
	}
	this.frame_339 = function() {
		this.stop();
	}
	this.frame_346 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_521 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(10).call(this.frame_109).wait(32).call(this.frame_141).wait(5).call(this.frame_146).wait(32).call(this.frame_178).wait(5).call(this.frame_183).wait(32).call(this.frame_215).wait(6).call(this.frame_221).wait(35).call(this.frame_256).wait(7).call(this.frame_263).wait(35).call(this.frame_298).wait(6).call(this.frame_304).wait(35).call(this.frame_339).wait(7).call(this.frame_346).wait(175).call(this.frame_521).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(418));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(346).to({_off:false},0).wait(176));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(418));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(477));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(638.5,142.2,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(418));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},303).wait(176));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},303).wait(176));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(346).to({graphics:null,x:0,y:0}).wait(176));

	// actMc
	this.instance_4 = new lib.actMc_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(300,0);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(300,0);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(300,0);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc_4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(340,0);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc_5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(340,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc_6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(340,0);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(127).to({_off:false},0).to({x:0},14,cjs.Ease.backOut).to({_off:true},5).wait(376));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(164).to({_off:false},0).to({x:0},14,cjs.Ease.backOut).to({_off:true},5).wait(339));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(201).to({_off:false},0).to({x:0},14,cjs.Ease.backOut).to({_off:true},6).wait(301));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(238).to({_off:false},0).to({x:0},13,cjs.Ease.backOut).to({_off:true},12).wait(259));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(280).to({_off:false},0).to({x:0},13,cjs.Ease.backOut).to({_off:true},6).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(321).to({_off:false},0).to({x:0},13,cjs.Ease.backOut).to({_off:true},12).wait(176));

	// q
	this.instance_10 = new lib.flowchart();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-183.3,375,1,1,0,0,0,0.5,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.flowchart_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-230.8,351.2,1,1,0,0,0,0.5,0.1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(109).to({_off:false},0).to({x:283.7},17,cjs.Ease.backOut).wait(20).to({x:-183.3},0).to({x:283.7},17,cjs.Ease.backOut).wait(20).to({x:-183.3},0).to({x:283.7},17,cjs.Ease.backOut).to({_off:true},21).wait(301));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(221).to({_off:false},0).to({x:241.7},17,cjs.Ease.backOut).wait(25).to({x:-230.8},0).to({x:241.7},17,cjs.Ease.backOut).to({_off:true},19).wait(5).to({_off:false,x:-230.8},0).to({x:241.7},17,cjs.Ease.backOut).to({_off:true},25).wait(176));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog2},{t:this.prog1}]},99).to({state:[]},247).wait(176));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(496));

	// bg
	this.instance_12 = new lib.Symbol2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(394.4,296.6);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({_off:true},326).wait(176));

	// bg
	this.instance_13 = new lib.Bitmap3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(522));

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
		{src:"images/f3s14/Bitmap21.png?1529742870524", id:"Bitmap21"},
		{src:"images/f3s14/Bitmap22.png?1529742870524", id:"Bitmap22"},
		{src:"images/f3s14/Bitmap3.png?1529742870524", id:"Bitmap3"},
		{src:"images/f3s14/Bitmap9.png?1529742870524", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1529742870524", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1529742870524", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1529742870524", id:"questionComplete"},
		{src:"sounds/submitAns.mp3?1529742870524", id:"submitAns"},
		{src:"sounds/suspense.mp3?1529742870524", id:"suspense"},
		{src:"sounds/timeout.mp3?1529742870524", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1529742870524", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1529742870524", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1529742870524", id:"an.TextInput"},
		{src:"components/ui/src/combobox.js?1529742870524", id:"an.ComboBox"}
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