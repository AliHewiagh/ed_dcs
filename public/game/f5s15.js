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
p.nominalBounds = new cjs.Rectangle(0,0,140,79);


(lib.Integratedcircuit = function() {
	this.initialize(img.Integratedcircuit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,272);// helper functions:

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
	this.myTxt = new cjs.Text("Identify the output from the following flow chart.", "italic bold 16px 'Quantico'", "#0EE0E0");
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

}).prototype = getMCSymbolPrototype(lib.tEn1copy, new cjs.Rectangle(-269.5,-21.5,436.1,42), null);


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
	this.myTxt = new cjs.Text("Your friend has sent you \nthis image.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 227;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-217,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2QAAMAshAAA");
	this.shape.setTransform(-109.1,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A05FOIAAmRIilACIClh7IAAiMMAshAAAIAAKW");
	this.shape_1.setTransform(-117.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A0+FMIAAmSIikADICkh8IAAiMMAshAAAIAAKXg");
	this.shape_2.setTransform(-117.4,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,304.9,69.4), null);


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

}).prototype = getMCSymbolPrototype(lib.tBm1copy, new cjs.Rectangle(-269.5,-21.5,431.8,42), null);


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
	this.myTxt = new cjs.Text("Rakan anda telah menghantar\nimej ini kepada anda.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 261;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2QAAMAshAAA");
	this.shape.setTransform(-109.1,45.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A05FOIAAmRIilACIClh7IAAiMMAshAAAIAAKW");
	this.shape_1.setTransform(-117.8,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A0+FMIAAmSIikADICkh8IAAiMMAshAAAIAAKXg");
	this.shape_2.setTransform(-117.4,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,304.9,69.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Integratedcircuit();
	this.instance.parent = this;
	this.instance.setTransform(-173.3,-115.5,0.85,0.85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D40000").ss(1,0,0,3).p("A8WTkMAAAgnCMA4tAAAMAAAAnC");
	this.shape.setTransform(0,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D40000").ss(4,0,0,3).p("AcXAAMg4tAAA");
	this.shape_1.setTransform(0,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.4,-125.9,367,253);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


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
	this.txtTime = new cjs.Text("5:00", "60px 'Quantico'", "#006666");
	this.txtTime.name = "txtTime";
	this.txtTime.textAlign = "center";
	this.txtTime.lineHeight = 88;
	this.txtTime.lineWidth = 242;
	this.txtTime.parent = this;
	this.txtTime.setTransform(-1,-23.2,0.537,0.542,0,-2.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.txtTime).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTimer, new cjs.Rectangle(-66.6,-30.6,133.3,61.3), null);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgEAAgHQAAgGgEgEQgFgEgIgBQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAHQAJAIAAAKQAAAGgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(105.7,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(99.8,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_2.setTransform(93.1,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(86.6,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(75.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(66.8,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(57.7,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(48.5,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_8.setTransform(39.3,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_9.setTransform(27.3,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(15.7,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_11.setTransform(7.7,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(-3.2,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_13.setTransform(-9.1,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(-18.1,2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(-27.4,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_16.setTransform(-36.7,0.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_17.setTransform(-44.1,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_18.setTransform(-55.5,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_19.setTransform(-65.3,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_20.setTransform(-73.3,-1.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(-83.1,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_22.setTransform(-92.3,2.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_23.setTransform(-103.2,-1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_24.setTransform(145.9,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_25.setTransform(70.1,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_26.setTransform(45.4,-1.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_27.setTransform(37.8,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(20.9,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(-1.8,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_30.setTransform(-13.1,-0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_31.setTransform(-19.6,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_32.setTransform(-45.1,-1.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-56.2,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_34.setTransform(-65.2,-1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_35.setTransform(-72.8,-0.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-83.8,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_37.setTransform(-98.6,-0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-106.3,0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_39.setTransform(-115.5,-1.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAgA5IgghdIgfBdIgLAAIgphxIAOAAIAgBeIAhheIAJABIAhBdIAgheIAOAAIgpBxg");
	this.shape_40.setTransform(-129.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-44.1}},{t:this.shape_16,p:{x:-36.7}},{t:this.shape_15,p:{x:-27.4}},{t:this.shape_14},{t:this.shape_13,p:{x:-9.1}},{t:this.shape_12,p:{x:-3.2}},{t:this.shape_11},{t:this.shape_10,p:{x:15.7}},{t:this.shape_9,p:{x:27.3}},{t:this.shape_8,p:{x:39.3}},{t:this.shape_7,p:{x:48.5}},{t:this.shape_6,p:{x:57.7}},{t:this.shape_5,p:{x:66.8}},{t:this.shape_4,p:{x:75.8}},{t:this.shape_3,p:{x:86.6}},{t:this.shape_2,p:{x:93.1}},{t:this.shape_1,p:{x:99.8}},{t:this.shape,p:{x:105.7}}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_12,p:{x:-89.6}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_16,p:{x:-37.7}},{t:this.shape_15,p:{x:-28.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_3,p:{x:-8.3}},{t:this.shape_29},{t:this.shape_6,p:{x:7.4}},{t:this.shape_28},{t:this.shape_17,p:{x:28.1}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_1,p:{x:51.9}},{t:this.shape_13,p:{x:57.7}},{t:this.shape_25},{t:this.shape_10,p:{x:78.4}},{t:this.shape_9,p:{x:90}},{t:this.shape_8,p:{x:102}},{t:this.shape_7,p:{x:111.2}},{t:this.shape_4,p:{x:120.4}},{t:this.shape_5,p:{x:129.5}},{t:this.shape_2,p:{x:138.5}},{t:this.shape_24},{t:this.shape,p:{x:152.9}}]},1).wait(1));

	// outlineshade
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#D40000").ss(4,2,0,3).p("AZjAAI9jAAI1iAA");
	this.shape_41.setTransform(7.8,18);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#D40000").ss(1,2,0,3).p("A50DAIAJhnIBYhQIhJhPIALh6IWMAAIc6AAIgjGA");
	this.shape_42.setTransform(9.6,-1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F5F5F5").s().p("ArWDAIAJhnIBXhQIhIhPIALh5IWKAAIhMF/g");
	this.shape_43.setTransform(-83,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).wait(2));

	// white
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FAFAFA").s().p("A50DAIAJhnIBYhQIhJhPIALh5MAzGAAAIgjF/g");
	this.shape_44.setTransform(9.6,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,333.7,41.6);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgEAAgHQAAgGgEgEQgFgEgIgBQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAHQAJAIAAAKQAAAGgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(225.5,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_1.setTransform(216.8,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(209.9,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_3.setTransform(203.4,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_4.setTransform(194.9,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(186.2,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(179.2,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_7.setTransform(172.4,-1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(165.7,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_9.setTransform(156.7,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_10.setTransform(143.6,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(136.7,0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(127,2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(117.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_14.setTransform(108.3,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(98.9,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(90.5,0.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_17.setTransform(80.5,-1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(73.9,0.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_19.setTransform(67.4,-1.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(56.5,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(47.6,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(38.5,0.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(29.3,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_24.setTransform(20.1,2.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_25.setTransform(8,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(-3.5,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_27.setTransform(-11.5,-1.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(-25.3,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(-34.9,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_30.setTransform(-42.9,-1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-52.8,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_32.setTransform(-64.4,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_33.setTransform(-76.4,0.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_34.setTransform(-85.7,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-94.7,0.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_36.setTransform(-106.1,0.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(-122.3,0.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_38.setTransform(-131.9,-1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-141.2,0.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_40.setTransform(-150.9,0.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_41.setTransform(-164.3,-1.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(-174,0.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_43.setTransform(-182,-1.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_44.setTransform(-191.5,-1.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_45.setTransform(-200.5,0.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_46.setTransform(-206.8,-1.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(-213.3,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAHQgFAGgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaABIghAAgAgdgGIAeAAQANAAAGgEQAHgFAAgLQAAgTgaAAIgeAAg");
	this.shape_48.setTransform(-223.1,-1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAHgEAIAAQAcAAABAfIAAAzg");
	this.shape_49.setTransform(142.4,-1.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_50.setTransform(111,0.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_51.setTransform(68.2,-0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_52.setTransform(-7.7,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_53.setTransform(-32.4,-1.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_54.setTransform(-40,-0.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_55.setTransform(-48.8,-1.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_56.setTransform(-52.6,-1.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_57.setTransform(-67.9,0.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_58.setTransform(-89.4,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_59.setTransform(-102.1,0.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_60.setTransform(-115.5,0.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(-124.7,0.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgjAwQALgDAFgDQAGgFAFgJIADgHIgjhOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_62.setTransform(-133.5,2.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_63.setTransform(-166.3,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47,p:{x:-213.3}},{t:this.shape_46,p:{x:-206.8}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-52.8}},{t:this.shape_30},{t:this.shape_29,p:{x:-34.9}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-3.5}},{t:this.shape_25,p:{x:8}},{t:this.shape_24,p:{x:20.1}},{t:this.shape_23,p:{x:29.3}},{t:this.shape_22,p:{x:38.5}},{t:this.shape_21},{t:this.shape_20,p:{x:56.5}},{t:this.shape_19},{t:this.shape_18,p:{x:73.9}},{t:this.shape_17},{t:this.shape_16,p:{x:90.5}},{t:this.shape_15,p:{x:98.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:136.7}},{t:this.shape_10,p:{x:143.6}},{t:this.shape_9,p:{x:156.7}},{t:this.shape_8,p:{x:165.7}},{t:this.shape_7},{t:this.shape_6,p:{x:179.2}},{t:this.shape_5,p:{x:186.2}},{t:this.shape_4,p:{x:194.9}},{t:this.shape_3},{t:this.shape_2,p:{x:209.9}},{t:this.shape_1,p:{x:216.8}},{t:this.shape,p:{x:225.5}}]}).to({state:[{t:this.shape_63},{t:this.shape_31,p:{x:-156.4}},{t:this.shape_22,p:{x:-146.7}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_46,p:{x:-95.2}},{t:this.shape_58},{t:this.shape_47,p:{x:-80.8}},{t:this.shape_57},{t:this.shape_11,p:{x:-59.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_10,p:{x:-25.8}},{t:this.shape_16,p:{x:-20}},{t:this.shape_52},{t:this.shape_26,p:{x:0.7}},{t:this.shape_25,p:{x:12.2}},{t:this.shape_24,p:{x:24.3}},{t:this.shape_23,p:{x:33.5}},{t:this.shape_20,p:{x:42.7}},{t:this.shape_15,p:{x:51.8}},{t:this.shape_18,p:{x:60.7}},{t:this.shape_51},{t:this.shape_29,p:{x:79.8}},{t:this.shape_9,p:{x:96}},{t:this.shape_8,p:{x:105}},{t:this.shape_50},{t:this.shape_6,p:{x:118.2}},{t:this.shape_5,p:{x:125.2}},{t:this.shape_4,p:{x:133.9}},{t:this.shape_49},{t:this.shape_2,p:{x:148.9}},{t:this.shape_1,p:{x:155.8}},{t:this.shape,p:{x:164.5}}]},1).wait(1));

	// outlineshade
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#D40000").ss(4,2,0,3).p("EAmNAAAMg23AAAI1iAA");
	this.shape_64.setTransform(-1.7,18);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#D40000").ss(1,2,0,3).p("EgmeADAIAJhnIBYhQIhJhPIALh6IWMAAMA2OAAAIgjGA");
	this.shape_65.setTransform(0,-1.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F5F5F5").s().p("ArWDAIAJhnIBXhQIhIhPIALh5IWKAAIhMF/g");
	this.shape_66.setTransform(-173.5,-1.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#D40000").ss(4,2,0,3).p("Ac/AAMgkbAAAI1iAA");
	this.shape_67.setTransform(-1.7,18);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#D40000").ss(1,2,0,3).p("A9QDAIAJhnIBYhQIhJhPIALh6IWMAAMAjyAAAIgjGA");
	this.shape_68.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66,p:{x:-173.5}},{t:this.shape_65},{t:this.shape_64}]}).to({state:[{t:this.shape_66,p:{x:-114.5}},{t:this.shape_68},{t:this.shape_67}]},1).wait(1));

	// white
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FAFAFA").s().p("EgmeADAIAJhnIBYhQIhJhPIALh5MBMaAAAIgjF/g");
	this.shape_69.setTransform(0,-1.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAFAFA").s().p("A9QDAIAJhnIBYhQIhJhPIALh5MA5+AAAIgjF/g");
	this.shape_70.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_69}]}).to({state:[{t:this.shape_70}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-248.2,-21.6,495.7,41.6);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgEAAgHQAAgGgEgEQgFgEgIgBQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAHQAJAIAAAKQAAAGgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(99.3,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(93.4,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_2.setTransform(86.7,0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(80.2,-1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(69.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(60.4,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(51.3,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(42.1,0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_8.setTransform(32.9,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_9.setTransform(20.9,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(9.3,0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_11.setTransform(1.3,-1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(-12.7,0.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_13.setTransform(-24.4,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(-36.4,0.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(-45.7,0.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_16.setTransform(-59.1,-1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_17.setTransform(-68.9,0.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_18.setTransform(-76.9,-1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(-86.7,0.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_20.setTransform(-95.9,2.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_21.setTransform(-106.8,-1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_22.setTransform(127.8,-0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_23.setTransform(52,0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_24.setTransform(39.6,0.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_25.setTransform(19.7,-0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_26.setTransform(10,-1.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(2.8,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-10.3,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_29.setTransform(-56.2,0.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(-65.2,-1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_31.setTransform(-72.8,-0.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_32.setTransform(-83.8,0.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_33.setTransform(-98.6,-0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_34.setTransform(-115.5,-1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AAgA5IgghdIgfBdIgLAAIgphxIAOAAIAgBeIAhheIAJABIAhBdIAgheIAOAAIgpBxg");
	this.shape_35.setTransform(-129.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-68.9}},{t:this.shape_16,p:{x:-59.1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-24.4}},{t:this.shape_12,p:{x:-12.7}},{t:this.shape_11},{t:this.shape_10,p:{x:9.3}},{t:this.shape_9,p:{x:20.9}},{t:this.shape_8,p:{x:32.9}},{t:this.shape_7,p:{x:42.1}},{t:this.shape_6,p:{x:51.3}},{t:this.shape_5,p:{x:60.4}},{t:this.shape_4,p:{x:69.4}},{t:this.shape_3,p:{x:80.2}},{t:this.shape_2,p:{x:86.7}},{t:this.shape_1,p:{x:93.4}},{t:this.shape,p:{x:99.3}}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_12,p:{x:-106.3}},{t:this.shape_33},{t:this.shape_3,p:{x:-89.6}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_6,p:{x:-43.1}},{t:this.shape_17,p:{x:-33.8}},{t:this.shape_13,p:{x:-21.8}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_16,p:{x:27.3}},{t:this.shape_1,p:{x:33.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_10,p:{x:60.3}},{t:this.shape_9,p:{x:71.9}},{t:this.shape_8,p:{x:83.9}},{t:this.shape_7,p:{x:93.1}},{t:this.shape_4,p:{x:102.3}},{t:this.shape_5,p:{x:111.4}},{t:this.shape_2,p:{x:120.4}},{t:this.shape_22},{t:this.shape,p:{x:134.8}}]},1).wait(1));

	// outlineshade
	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#D40000").ss(4,2,0,3).p("AX/AAI6bAAI1iAA");
	this.shape_36.setTransform(-2.2,18);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#D40000").ss(1,2,0,3).p("A4QDAIAJhnIBYhQIhJhPIALh6IWMAAIZyAAIgjGA");
	this.shape_37.setTransform(-0.4,-1.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F5F5F5").s().p("ArWDAIAJhnIBXhQIhIhPIALh5IWKAAIhMF/g");
	this.shape_38.setTransform(-83,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]}).wait(2));

	// white
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAFAFA").s().p("ACuDAIl9AAIjaAAIxnAAIAJhnIBYhQIhJhPIALh5IREAAIDaAAIF9AAIVjAAIgjF/g");
	this.shape_39.setTransform(-0.4,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,313.7,41.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(235.6,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_1.setTransform(231.9,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_2.setTransform(224.9,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_3.setTransform(217.5,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(212.9,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(205.9,41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_6.setTransform(199.4,37.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(192.5,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_8.setTransform(180.8,38.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(173.1,39.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(161.4,39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_11.setTransform(149.8,39.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_12.setTransform(143.3,37.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_13.setTransform(138,37.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(128.1,39.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(116.5,39.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(100.6,39.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_17.setTransform(90.9,39.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_18.setTransform(82.9,37.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_19.setTransform(75.2,38.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(67.5,39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_21.setTransform(58.3,41);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(48.3,39.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_23.setTransform(38.7,37.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(29.4,39.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(20.4,39.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_26.setTransform(9,39.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(165.4,15.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(155.7,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(146.1,13.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(132.6,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(123,15.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(113.8,17.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_33.setTransform(101.7,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_34.setTransform(92.9,13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_35.setTransform(86.7,17.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_36.setTransform(77.7,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_37.setTransform(68.8,15.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_38.setTransform(57.3,15.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_39.setTransform(42.7,13.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_40.setTransform(33.3,15.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_41.setTransform(25.8,14.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_42.setTransform(18.3,15.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgVAAgMgMg");
	this.shape_43.setTransform(7.9,13.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(73.1,39.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_45.setTransform(61.9,38.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_46.setTransform(33.1,39.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(25.1,39.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_48.setTransform(17.8,37.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_49.setTransform(202.9,13.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(196,15.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_51.setTransform(188.5,14.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(176.9,17.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_53.setTransform(170.5,13.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(163.5,13.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_55.setTransform(141.8,15.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_56.setTransform(127,13.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_57.setTransform(122.7,15.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_58.setTransform(116.4,14.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_59.setTransform(109.3,15.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_60.setTransform(102.6,15.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_61.setTransform(89.9,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_62.setTransform(57.9,15.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_63.setTransform(51.1,15.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_64.setTransform(43.1,15.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_65.setTransform(28.9,15.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_66.setTransform(16.2,15.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_67.setTransform(6.8,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:25.8}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:68.8}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:92.9}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:165.4}},{t:this.shape_26},{t:this.shape_25,p:{x:20.4,y:39.3}},{t:this.shape_24,p:{x:29.4}},{t:this.shape_23},{t:this.shape_22,p:{x:48.3}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:100.6}},{t:this.shape_15},{t:this.shape_14,p:{x:128.1,y:39.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:161.4}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:199.4}},{t:this.shape_5},{t:this.shape_4,p:{x:212.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:235.6}}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_41,p:{x:35.7}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_14,p:{x:71,y:15.4}},{t:this.shape_27,p:{x:80.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_37,p:{x:133.2}},{t:this.shape_55},{t:this.shape_25,p:{x:150.4,y:15.4}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_34,p:{x:183.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_6,p:{x:3.9}},{t:this.shape_24,p:{x:10.4}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_10,p:{x:42.5}},{t:this.shape_22,p:{x:54.1}},{t:this.shape_45},{t:this.shape_4,p:{x:66.7}},{t:this.shape_44},{t:this.shape_16,p:{x:82.3}},{t:this.shape,p:{x:88.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,241,49.8);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(174.8,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_1.setTransform(170.6,39.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_2.setTransform(162.9,39.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_3.setTransform(155.6,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_4.setTransform(148.3,39.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_5.setTransform(139,41);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(127,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(115.4,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_8.setTransform(107.4,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgYA3QgHgFgFgJQgEgJAAgLQAAgOAFgJQAEgKAJgGQAJgFALAAQAIAAAIAEQAGAEAEAIIAEgzIANAAIgJB0IgNAAIABgNQgEAHgHAEQgHADgIAAQgKAAgIgEgAgUgDQgGAIAAAPQgBAOAHAHQAGAIAMAAQAKAAAIgJQAGgKABgPQAAgOgHgGQgGgHgLAAQgMAAgHAJg");
	this.shape_9.setTransform(93.7,37.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYApIAEg5IAAgQIAAgGIANAAIAAANQADgHAHgEQAHgEAIAAIAHABIgBALIgIgBQgMAAgFAIQgHAHAAAKIgEAtg");
	this.shape_10.setTransform(86.5,39.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgWAlQgIgFgEgIQgEgJAAgMQAAgMAEgKQAFgKAJgGQAIgGALAAQAJAAAHAFQAHAEAEAIIABgPIANAAIgHBQIgMAAIABgNQgEAHgIADQgGAEgIAAQgLAAgHgFgAgTgVQgGAJAAAPQAAANAGAIQAGAHAMAAQALAAAHgJQAHgJAAgPQAAgOgHgHQgFgHgMAAQgLAAgIAJg");
	this.shape_11.setTransform(78.1,39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgJQgFgIAAgMQAAgMAFgKQAFgLAJgFQAIgGALAAQALAAAJAFQAIAFAFAJQAEAJAAALQAAANgFAKQgFAKgIAFQgJAGgLAAQgLAAgJgFgAgRgVQgHAKAAAOQAAAOAGAHQAHAHALAAQAMAAAGgJQAHgJAAgPQAAgNgGgIQgHgHgLAAQgLAAgHAJg");
	this.shape_12.setTransform(68.8,39.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOA3QgHgEgEgHIgBAOIgMAAIAJh0IAMAAIgDAxQADgHAIgDQAHgEAHAAQALAAAHAFQAIAEAEAJQAFAIAAAMQAAANgFAKQgFAKgIAGQgJAFgMAAQgIAAgHgEgAgQgDQgHAIABAQQAAANAFAIQAHAHALAAQAMAAAGgJQAIgJgBgQQAAgOgGgGQgHgHgLAAQgLAAgHAJg");
	this.shape_13.setTransform(59.6,37.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgZApIAFg5IABgQIAAgGIALAAIAAANQAFgHAFgEQAIgEAIAAIAHABIgBALIgIgBQgMAAgFAIQgGAHgBAKIgDAtg");
	this.shape_14.setTransform(52.4,39.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAlQgIgFgFgJQgEgIgBgMQABgMAEgKQAFgKAKgGQAIgGALAAQAPAAAKAJQAIAJABARIgBAGIg6AAIAAADQAAAOAGAHQAHAHAMAAQAPAAALgJIADAJQgEAFgJADQgJADgIAAQgLAAgJgFgAgMgZQgHAGgDAMIAvAAQAAgMgFgGQgGgGgKAAQgJAAgHAGg");
	this.shape_15.setTransform(44.6,39.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AATA7IAEgyIAAgDQABgSgTAAQgJAAgIAHQgGAGgBAMIgEAuIgMAAIAJh1IAMAAIgDAxQADgGAIgEQAGgEAJAAQANAAAHAHQAIAIAAAMIAAAFIgFAyg");
	this.shape_16.setTransform(35.4,37.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAwQgGgGAAgLIAAgDIADgsIgPAAIABgLIAPAAIACgVIAMgEIgCAZIAXAAIgBALIgXAAIgCArIAAACQAAAHACADQADADAHABQAEAAAEgCIgBALQgEABgHABQgJgBgGgFg");
	this.shape_17.setTransform(28.2,38.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgJQgFgIAAgMQAAgMAFgKQAFgLAJgFQAIgGALAAQALAAAJAFQAIAFAFAJQAEAJAAALQAAANgFAKQgFAKgIAFQgJAGgLAAQgLAAgJgFgAgRgVQgHAKAAAOQAAAOAGAHQAHAHALAAQAMAAAGgJQAHgJAAgPQAAgNgGgIQgHgHgLAAQgLAAgHAJg");
	this.shape_18.setTransform(20.6,39.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AArApIAEgwIAAgFQAAgJgEgEQgEgEgIAAQgKAAgGAGQgGAHgBAMIgEAtIgMAAIAEgwIAAgFQAAgJgEgEQgEgEgHAAQgLAAgFAGQgHAHgBAMIgDAtIgNAAIAFg5IAAgPIAAgHIAMAAIAAANQAIgPASAAQASAAAFAPQAEgHAHgEQAHgEAKAAQAMAAAHAHQAGAHAAANIAAAFIgEAxg");
	this.shape_19.setTransform(9,39.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_20.setTransform(212.2,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(200.2,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_22.setTransform(193.8,13.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(186.8,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_24.setTransform(177.2,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(163.4,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFAAADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_26.setTransform(156,14.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(148.2,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(138.6,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(124.8,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_30.setTransform(113.3,15.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(101.3,15.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_32.setTransform(92.2,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_33.setTransform(80.1,15.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(68.8,15.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_35.setTransform(57.3,15.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_36.setTransform(42.7,13.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_37.setTransform(33.3,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_38.setTransform(25.8,14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(18.3,15.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgVAAgMgMg");
	this.shape_40.setTransform(7.9,13.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_41.setTransform(187.8,38.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_42.setTransform(139.3,39.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_43.setTransform(125.9,39.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_44.setTransform(114.4,37.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(107.2,39.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(93.4,37.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_47.setTransform(86.4,39.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_48.setTransform(78,39.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_49.setTransform(68.8,39.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_50.setTransform(52.3,39.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_51.setTransform(35.5,37.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_52.setTransform(27.9,38.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(20.6,39.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_54.setTransform(174.7,15.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_55.setTransform(165.7,13.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_56.setTransform(158.1,14.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_57.setTransform(140,13.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_58.setTransform(133.4,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_59.setTransform(121.2,13.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_60.setTransform(112.4,15.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_61.setTransform(96.2,15.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_62.setTransform(88.7,14.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_63.setTransform(81,15.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_64.setTransform(71.4,13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_65.setTransform(58.4,17.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_66.setTransform(51.7,15.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_67.setTransform(45.9,15.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_68.setTransform(37.5,15.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_69.setTransform(29.1,15.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(16.2,15.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_71.setTransform(6.8,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39,p:{x:18.3}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:68.8,y:15.4}},{t:this.shape_33},{t:this.shape_32,p:{x:92.2,y:13.6}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:156}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:212.2,y:15.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:115.4}},{t:this.shape_6,p:{x:127}},{t:this.shape_5,p:{x:139}},{t:this.shape_4,p:{x:148.3}},{t:this.shape_3},{t:this.shape_2,p:{x:162.9}},{t:this.shape_1,p:{x:170.6}},{t:this.shape}]}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_26,p:{x:125.8}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_39,p:{x:146.5}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_20,p:{x:9,y:39.2}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_34,p:{x:44.5,y:39.3}},{t:this.shape_50},{t:this.shape_32,p:{x:59.7,y:37.5}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_7,p:{x:147.6}},{t:this.shape_6,p:{x:159.2}},{t:this.shape_5,p:{x:171.2}},{t:this.shape_4,p:{x:180.5}},{t:this.shape_41},{t:this.shape_2,p:{x:195.1}},{t:this.shape_1,p:{x:202.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,227,49.8);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(193.4,42.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_1.setTransform(188.1,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(181.4,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(177.1,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_4.setTransform(170.8,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_5.setTransform(164.7,37.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(155.5,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_7.setTransform(149.3,37.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(143,39.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_9.setTransform(131.6,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(123.8,39.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_11.setTransform(116.9,39.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(108.4,39.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAwQAMgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_13.setTransform(99.6,41.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_14.setTransform(91.3,39.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_15.setTransform(85.5,37.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(74.7,39.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(65,39.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(55.4,37.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(41.6,39.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_20.setTransform(33,39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(24.1,39.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_22.setTransform(14.9,39.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_23.setTransform(6.8,37.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_24.setTransform(243.3,15.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_25.setTransform(234.9,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_26.setTransform(226.9,13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_27.setTransform(217.4,15.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(208.1,15.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_29.setTransform(199.1,15.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_30.setTransform(187.7,15.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_31.setTransform(171.8,15.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(162.1,15.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(152.5,13.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_34.setTransform(139,15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(129.4,15.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_36.setTransform(121.4,13.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFAAADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_37.setTransform(113.7,14.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_38.setTransform(105.9,15.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_39.setTransform(96.7,15.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_40.setTransform(87,17.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_41.setTransform(77.7,15.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(68.8,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_43.setTransform(57.3,15.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_44.setTransform(42.7,13.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_45.setTransform(33.3,15.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_46.setTransform(25.8,14.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(18.3,15.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgVAAgMgMg");
	this.shape_48.setTransform(7.9,13.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_49.setTransform(102.3,41);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(76.7,37.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_51.setTransform(27.6,39.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_52.setTransform(16,39.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_53.setTransform(6.8,41);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_54.setTransform(233,13.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_55.setTransform(217.7,15.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_56.setTransform(201.1,14.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_57.setTransform(194.6,15.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_58.setTransform(179.9,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_59.setTransform(160.4,13.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_60.setTransform(151.9,15.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_61.setTransform(140.3,13.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_62.setTransform(131.5,15.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_63.setTransform(120.5,15.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_64.setTransform(107.3,13.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_65.setTransform(75.4,17.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_66.setTransform(68.3,13.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_67.setTransform(63.8,13.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_68.setTransform(60,13.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_69.setTransform(53.5,17.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(29.4,15.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_71.setTransform(16.1,15.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_72.setTransform(6.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:25.8}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:105.9}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:162.1}},{t:this.shape_31,p:{x:171.8}},{t:this.shape_30,p:{x:187.7}},{t:this.shape_29,p:{x:199.1}},{t:this.shape_28,p:{x:208.1,y:15.3}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:33}},{t:this.shape_19,p:{x:41.6}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:74.7}},{t:this.shape_15,p:{x:85.5,y:37.6}},{t:this.shape_14,p:{x:91.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:116.9,y:39.2}},{t:this.shape_10,p:{x:123.8}},{t:this.shape_9},{t:this.shape_8,p:{x:143,y:39.3}},{t:this.shape_7,p:{x:149.3}},{t:this.shape_6,p:{x:155.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:177.1}},{t:this.shape_2,p:{x:181.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_30,p:{x:41.4}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_38,p:{x:88.4}},{t:this.shape_31,p:{x:98}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_46,p:{x:144.9}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_29,p:{x:173.6}},{t:this.shape_58},{t:this.shape_8,p:{x:186.1,y:15.4}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_11,p:{x:207.4,y:15.3}},{t:this.shape_15,p:{x:211.7,y:13.7}},{t:this.shape_55},{t:this.shape_32,p:{x:226}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_6,p:{x:38.9}},{t:this.shape_3,p:{x:46.6}},{t:this.shape_10,p:{x:57.8}},{t:this.shape_28,p:{x:67.4,y:39.2}},{t:this.shape_50},{t:this.shape_20,p:{x:89.9}},{t:this.shape_2,p:{x:95.8}},{t:this.shape_49},{t:this.shape_16,p:{x:112}},{t:this.shape_19,p:{x:121.3}},{t:this.shape_7,p:{x:128.2}},{t:this.shape_14,p:{x:134}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,249,49.8);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(181.4,90.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_1.setTransform(176.1,85.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(169.4,85.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(162.8,87);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(153.6,87.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(146.6,87);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_6.setTransform(140.3,85.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_7.setTransform(134.2,85.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(125,87.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_9.setTransform(118.8,85.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(112.5,87.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_11.setTransform(101.6,87);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(93.1,87.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_13.setTransform(85.7,85.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_14.setTransform(81.1,85.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_15.setTransform(77.3,85.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(66.1,87.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(56.8,87);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_18.setTransform(50.3,85.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_19.setTransform(43.9,85.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_20.setTransform(31.7,87);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(20.4,87.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(9,87);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_23.setTransform(227.2,63.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(215.2,63.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_25.setTransform(208.7,61.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(201.8,63.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_27.setTransform(192.2,61.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_28.setTransform(180.5,62);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(172.8,63.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_30.setTransform(163.7,61.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(156.7,61.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_32.setTransform(152.9,61.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_33.setTransform(148.6,63.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(140.9,63.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_35.setTransform(133.6,62);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(121.6,64.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_37.setTransform(112.3,63.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_38.setTransform(102.7,63.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_39.setTransform(93.9,65.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_40.setTransform(80.7,63.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_41.setTransform(71,63.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(61.4,64.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_43.setTransform(52.1,63.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_44.setTransform(45.6,61.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_45.setTransform(39.6,63.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(30.7,63.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_47.setTransform(23.7,63.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_48.setTransform(16,63.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_49.setTransform(7.1,61.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(191.4,41);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_51.setTransform(182.1,39.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(172.5,39.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_53.setTransform(163.7,41.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_54.setTransform(151.8,37.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_55.setTransform(145.1,37.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_56.setTransform(138.4,39.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_57.setTransform(129.2,39.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_58.setTransform(122.3,39.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_59.setTransform(116,38.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_60.setTransform(109.8,37.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_61.setTransform(100.7,39.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_62.setTransform(94.4,37.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_63.setTransform(88.2,39.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_64.setTransform(74.9,39.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_65.setTransform(65.9,39.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_66.setTransform(56.8,39.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_67.setTransform(47.6,39.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_68.setTransform(38.4,41);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_69.setTransform(26.4,39.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(14.8,39.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_71.setTransform(6.8,37.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_72.setTransform(213,13.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_73.setTransform(203.1,15.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgJAGgNADg");
	this.shape_74.setTransform(194.3,17.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_75.setTransform(185.3,15.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_76.setTransform(175.7,15.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_77.setTransform(166.6,13.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_78.setTransform(152.6,15.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_79.setTransform(142.9,15.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_80.setTransform(134.9,13.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_81.setTransform(128.2,13.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_82.setTransform(123.4,14.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_83.setTransform(116,15.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_84.setTransform(106.3,15.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_85.setTransform(96.7,17.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_86.setTransform(87,17.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_87.setTransform(77.7,15.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_88.setTransform(68.8,15.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_89.setTransform(57.3,15.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_90.setTransform(42.7,13.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_91.setTransform(33.3,15.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_92.setTransform(25.8,14.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_93.setTransform(18.3,15.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgVAAgMgMg");
	this.shape_94.setTransform(7.9,13.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_95.setTransform(200.3,85.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_96.setTransform(189.1,87.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_97.setTransform(180.7,87.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_98.setTransform(163.2,87.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_99.setTransform(151.1,87.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgFgGg");
	this.shape_100.setTransform(116,85.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_101.setTransform(109.5,87.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(51.8,85.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_103.setTransform(35,87.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_104.setTransform(4.6,85.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_105.setTransform(240.3,61.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_106.setTransform(214.4,63.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_107.setTransform(174.3,61.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgFAoIgihPIANAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_108.setTransform(152.1,63.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_109.setTransform(133.6,61.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_110.setTransform(112,63.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_111.setTransform(97.3,63.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_112.setTransform(71.2,61.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_113.setTransform(42.5,61.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_114.setTransform(29.5,63.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_115.setTransform(8.8,63.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_116.setTransform(211.4,37.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_117.setTransform(202.9,39.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_118.setTransform(190.4,37.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_119.setTransform(178.7,39.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_120.setTransform(163.5,39.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_121.setTransform(156.7,38.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_122.setTransform(122,39.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_123.setTransform(89.2,39.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_124.setTransform(80.9,39.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_125.setTransform(68.8,39.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_126.setTransform(46.9,39.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_127.setTransform(33.7,38.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_128.setTransform(27.2,39.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_129.setTransform(18.7,39.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_130.setTransform(12.5,37.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_131.setTransform(6.2,39.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_132.setTransform(190.1,15.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_133.setTransform(175.1,15.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_134.setTransform(159.7,15.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_135.setTransform(150.5,17.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_136.setTransform(141.2,15.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_137.setTransform(132.8,15.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_138.setTransform(120.4,17.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_139.setTransform(74.6,15.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_140.setTransform(66.5,15.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_141.setTransform(44.3,17.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_142.setTransform(35,15.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_143.setTransform(28.3,15.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_144.setTransform(16.1,15.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_145.setTransform(6.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:68.8,y:15.4}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:123.4}},{t:this.shape_81,p:{x:128.2,y:13.7}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:14.8,y:39.3}},{t:this.shape_69},{t:this.shape_68,p:{x:38.4}},{t:this.shape_67,p:{x:47.6,y:39.3}},{t:this.shape_66},{t:this.shape_65,p:{x:65.9,y:39.3}},{t:this.shape_64},{t:this.shape_63,p:{x:88.2,y:39.3}},{t:this.shape_62},{t:this.shape_61,p:{x:100.7,y:39.3}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:122.3,y:39.2}},{t:this.shape_57,p:{x:129.2,y:39.3}},{t:this.shape_56,p:{x:138.4,y:39.2}},{t:this.shape_55,p:{x:145.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:182.1}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:16}},{t:this.shape_47,p:{x:23.7,y:63.1}},{t:this.shape_46},{t:this.shape_45,p:{x:39.6}},{t:this.shape_44,p:{x:45.6}},{t:this.shape_43,p:{x:52.1,y:63.1}},{t:this.shape_42},{t:this.shape_41,p:{x:71,y:63.2}},{t:this.shape_40,p:{x:80.7,y:63.1}},{t:this.shape_39},{t:this.shape_38,p:{x:102.7,y:63.2}},{t:this.shape_37,p:{x:112.3}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:140.9}},{t:this.shape_33,p:{x:148.6}},{t:this.shape_32,p:{x:152.9,y:61.4}},{t:this.shape_31,p:{x:156.7,y:61.5}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:180.5}},{t:this.shape_27},{t:this.shape_26,p:{x:201.8,y:63.2}},{t:this.shape_25,p:{x:208.7,y:61.4}},{t:this.shape_24,p:{x:215.2}},{t:this.shape_23},{t:this.shape_22,p:{x:9,y:87}},{t:this.shape_21,p:{x:20.4,y:87.1}},{t:this.shape_20,p:{x:31.7,y:87}},{t:this.shape_19,p:{x:43.9}},{t:this.shape_18,p:{x:50.3}},{t:this.shape_17,p:{x:56.8}},{t:this.shape_16},{t:this.shape_15,p:{x:77.3,y:85.3}},{t:this.shape_14,p:{x:81.1}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:101.6}},{t:this.shape_10,p:{x:112.5}},{t:this.shape_9,p:{x:118.8}},{t:this.shape_8,p:{x:125}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:146.6}},{t:this.shape_4,p:{x:153.6}},{t:this.shape_3,p:{x:162.8}},{t:this.shape_2,p:{x:169.4}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_32,p:{x:50.9,y:13.6}},{t:this.shape_38,p:{x:57.3,y:15.4}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_22,p:{x:90.1,y:15.3}},{t:this.shape_26,p:{x:101.8,y:15.4}},{t:this.shape_56,p:{x:111.4,y:15.3}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_58,p:{x:168.1,y:15.3}},{t:this.shape_133},{t:this.shape_82,p:{x:182.8}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_47,p:{x:40,y:39.2}},{t:this.shape_126},{t:this.shape_51,p:{x:56.1}},{t:this.shape_81,p:{x:62.8,y:37.6}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_20,p:{x:100.8,y:39.2}},{t:this.shape_68,p:{x:112.8}},{t:this.shape_122},{t:this.shape_43,p:{x:131.2,y:39.2}},{t:this.shape_88,p:{x:140.3,y:39.3}},{t:this.shape_40,p:{x:149.3,y:39.2}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_55,p:{x:196.9}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_70,p:{x:20.3,y:63.2}},{t:this.shape_114},{t:this.shape_15,p:{x:36.1,y:61.4}},{t:this.shape_113},{t:this.shape_67,p:{x:56.3,y:63.2}},{t:this.shape_28,p:{x:63.6}},{t:this.shape_112},{t:this.shape_65,p:{x:80.2,y:63.2}},{t:this.shape_33,p:{x:88}},{t:this.shape_111},{t:this.shape_44,p:{x:106.2}},{t:this.shape_110},{t:this.shape_63,p:{x:120.4,y:63.2}},{t:this.shape_109},{t:this.shape_24,p:{x:142.8}},{t:this.shape_108},{t:this.shape_61,p:{x:160.7,y:63.2}},{t:this.shape_107},{t:this.shape_48,p:{x:183.2}},{t:this.shape_34,p:{x:191.9}},{t:this.shape_37,p:{x:200.9}},{t:this.shape_106},{t:this.shape_45,p:{x:223}},{t:this.shape_21,p:{x:231.4,y:63.2}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_57,p:{x:12,y:87.1}},{t:this.shape_19,p:{x:25.9}},{t:this.shape_103},{t:this.shape_31,p:{x:41.6,y:85.4}},{t:this.shape_25,p:{x:45.4,y:85.3}},{t:this.shape_102},{t:this.shape_41,p:{x:65.6,y:87.1}},{t:this.shape_17,p:{x:75.3}},{t:this.shape_10,p:{x:88.6}},{t:this.shape_9,p:{x:94.8}},{t:this.shape_8,p:{x:101.1}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_11,p:{x:122.3}},{t:this.shape_4,p:{x:129.3}},{t:this.shape_3,p:{x:138.5}},{t:this.shape_18,p:{x:145.1}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_14,p:{x:168.9}},{t:this.shape_5,p:{x:174.2}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_2,p:{x:195.7}},{t:this.shape_95}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,242.1,97.6);


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
	this.shape.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape.setTransform(39.5,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(29.6,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(20,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(13.6,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_4.setTransform(6.8,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(18.4,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBaIAAhaIANAAIAABxg");
	this.shape_6.setTransform(7.8,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.1,25.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape.setTransform(16.3,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA5IAAguIgthDIAPAAIAjA4IAlg4IAOAAIgtBDIAAAug");
	this.shape_1.setTransform(6.9,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_2.setTransform(24.2,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_3.setTransform(15.9,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAkg4IAQAAIgtBDIAAAug");
	this.shape_4.setTransform(6.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,23.5,25.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape.setTransform(49.1,15.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(39.9,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_2.setTransform(31.1,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(25,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(18.3,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgVAAgMgMg");
	this.shape_5.setTransform(7.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.1,25.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape.setTransform(113.9,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(104.2,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(94.6,15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(85.4,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(76.1,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(67.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(61.4,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(53.7,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_8.setTransform(44.8,13.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_9.setTransform(33.1,15.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(24.7,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_11.setTransform(17.2,14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(12.6,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiA5IAAhxIANAAIAABmIA4AAIAAALg");
	this.shape_13.setTransform(6.9,13.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_14.setTransform(124.1,14.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_15.setTransform(104.6,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_16.setTransform(92.8,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_17.setTransform(87.1,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_18.setTransform(73.7,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_19.setTransform(57.6,14.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(49.8,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(34.4,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgFACgHgBQgLAAgGgGg");
	this.shape_22.setTransform(18.2,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_23.setTransform(10.8,15.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_24.setTransform(4.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12,p:{x:12.6}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:33.1}},{t:this.shape_8},{t:this.shape_7,p:{x:53.7}},{t:this.shape_6,p:{x:61.4}},{t:this.shape_5},{t:this.shape_4,p:{x:76.1}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:113.9}}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_7,p:{x:25.5}},{t:this.shape_21},{t:this.shape_9,p:{x:42.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_4,p:{x:64.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_6,p:{x:98.1}},{t:this.shape_15},{t:this.shape,p:{x:113}},{t:this.shape_12,p:{x:119.5}},{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120.7,25.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape.setTransform(74.3,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(66.3,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_2.setTransform(58.8,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_3.setTransform(52.1,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(46.3,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(40.3,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(31.7,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_7.setTransform(22,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_8.setTransform(15.1,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_9.setTransform(6.8,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_10.setTransform(57.8,14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(21,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{x:6.8}},{t:this.shape_8,p:{x:15.1}},{t:this.shape_7},{t:this.shape_6,p:{x:31.7}},{t:this.shape_5,p:{x:40.3}},{t:this.shape_4,p:{x:46.3}},{t:this.shape_3,p:{x:52.1}},{t:this.shape_2},{t:this.shape_1,p:{x:66.3}},{t:this.shape,p:{x:74.3}}]}).to({state:[{t:this.shape_9,p:{x:5.8}},{t:this.shape_8,p:{x:14.1}},{t:this.shape_11},{t:this.shape_6,p:{x:30.7}},{t:this.shape_5,p:{x:39.3}},{t:this.shape_4,p:{x:45.3}},{t:this.shape_3,p:{x:51.1}},{t:this.shape_10},{t:this.shape_1,p:{x:65.3}},{t:this.shape,p:{x:73.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,78.9,25.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape.setTransform(77.3,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_1.setTransform(65.7,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_2.setTransform(57.6,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(47.8,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_4.setTransform(39,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_5.setTransform(26,13.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_6.setTransform(16.3,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_7.setTransform(6.8,13.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(96.2,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_9.setTransform(87.3,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_10.setTransform(77.6,15.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgFgGg");
	this.shape_11.setTransform(70.1,14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_12.setTransform(26.9,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFA5IgxhxIANAAIApBhIAqhhIANAAIgxBxg");
	this.shape_13.setTransform(7.6,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{x:16.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:47.8}},{t:this.shape_2},{t:this.shape_1,p:{x:65.7}},{t:this.shape,p:{x:77.3}}]}).to({state:[{t:this.shape_13},{t:this.shape_3,p:{x:17.7}},{t:this.shape_12},{t:this.shape_6,p:{x:35.3}},{t:this.shape_1,p:{x:44.5}},{t:this.shape,p:{x:56.1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,86.6,25.9);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgvA/IAGg7IAWgMIAlAAIAEggIghAAIgCAQIgZAAIACgaIAXgMIApAAIAUAMIgFAzIgXANIglAAIgDAcIA6AAIgCAVg");
	this.shape.setTransform(122.5,65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqA/IACgVIAdAAIAIhPIgeARIACgYIAigSIAWAAIgMBoIAeAAIgDAVg");
	this.shape_1.setTransform(111.5,65.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBNIAPAAIgCAUIgPAAIgDAcgAgUAPIAfAAIAEgog");
	this.shape_2.setTransform(-33.4,65.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgpA/IABgVIAdAAIAIhPIgeARIACgYIAigSIAVAAIgLBoIAdAAIgCAVg");
	this.shape_3.setTransform(-44.1,65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIACgaIAaAAIgCAQIAiAAIAEgkIgOAIIgaAAIgTgNIAGg0IAWgMIArAAIATAMIgLBnIgWAMgAgQgHIAiAAIAEgiIgiAAg");
	this.shape_4.setTransform(-102.6,65.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpA/IABgVIAdAAIAIhPIgeARIACgYIAigSIAVAAIgLBoIAdAAIgCAVg");
	this.shape_5.setTransform(-113.7,65.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoA/IA6hnIAAgBIgnAAIgCARIgZAAIAEgmIBdAAIgBAQIg+Btg");
	this.shape_6.setTransform(31,32.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcBAIgTgMIALhnIAWgMIArAAIATAMIgDAaIgZAAIACgRIgiAAIgEAlIANgIIAaAAIAUANIgGA0IgWAMgAgVArIAiAAIAEgjIgjAAg");
	this.shape_7.setTransform(-38.3,32.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcA/IgUgMIADgaIAZAAIgCARIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAYIAlAAIATANIgGA3IgWAMg");
	this.shape_8.setTransform(-107.9,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfBAIgTgMIALhnIAWgMIAwAAIAUAMIgLBnIgWAMgAgYArIAoAAIAJhVIgoAAg");
	this.shape_9.setTransform(123.3,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_10.setTransform(111.2,0.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCARIAlAAIAEgiIgfAAIADgVIAeAAIADgeIglAAIgBARIgaAAIADgaIAWgMIAuAAIAUAMIgFApIgQAJIgBAAIAPAIIgEAtIgXAMg");
	this.shape_11.setTransform(-32.4,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBAIgUgNIADgaIAZAAIgCARIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAZIAlAAIATAMIgGA3IgWANg");
	this.shape_12.setTransform(-44.3,0.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpA/IACgVIAcAAIAIhOIgeAQIADgYIAhgSIAVAAIgKBoIAcAAIgCAVg");
	this.shape_13.setTransform(-102.7,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpA/IACgVIAcAAIAJhOIgfAQIADgYIAhgSIAVAAIgKBoIAcAAIgCAVg");
	this.shape_14.setTransform(-113.1,0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcA/IgUgLIADgaIAZAAIgCAQIAkAAIAEgmIg5AAIAHhDIBRAAIgDAWIg3AAIgDAYIAlAAIATAMIgGA5IgWALg");
	this.shape_15.setTransform(30.4,-31.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgoA/IA6hnIAAAAIgnAAIgCAQIgZAAIAEgmIBdAAIgBAQIg+Btg");
	this.shape_16.setTransform(-32.5,-31.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgpA/IABgWIAdAAIAIhOIgeARIACgXIAigTIAVAAIgLBnIAdAAIgCAWg");
	this.shape_17.setTransform(-44,-31.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgdBAIgUgMIADgaIAZAAIgCAQIAlAAIAEgiIgfAAIADgUIAeAAIADgdIglAAIgBAQIgaAAIADgaIAWgMIAuAAIAUAMIgFAoIgQAJIgBABIAPAIIgEAtIgXAMg");
	this.shape_18.setTransform(-102.1,-31.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAGA/IADgcIg7AAIACgSIBGhPIAWAAIgIBMIAPAAIgCAVIgPAAIgDAcgAgUAOIAfAAIAEgng");
	this.shape_19.setTransform(-114.2,-31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AghAmIABgPIAkgqIAAAAIgeAAIACgSIA6AAIgCAPIgkAqIAAAAIAfAAIgBASg");
	this.shape_20.setTransform(30.1,-62.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiA0IASgjIgWhFIAVAAIAOAsIAVgsIAVAAIg1Bog");
	this.shape_21.setTransform(-38.2,-60.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAJAmIAGg5IgYAAIgGA5IgVAAIAIhLIARAAIADAGIAKgGIASAAIARAKIgHBBg");
	this.shape_22.setTransform(145.3,-62.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgLAGIgSAAIgQgKIAGg3IASgKIASAAIAJAGIAMgGIAKAAIgIBLgAgOAVIAYAAIAEgpIgYAAg");
	this.shape_23.setTransform(136.5,-62.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgaAmIAHhLIARAAIADAGIALgGIAPAAIgCASIgZAAIgFA5g");
	this.shape_24.setTransform(129.3,-62.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AATAmIgKgGIgKAGIgSAAIgRgKIAGg3IASgKIASAAIAKAGIALgGIAKAAIgIBLgAgPAVIAZAAIAEgpIgYAAg");
	this.shape_25.setTransform(121.4,-62.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgLAGIgSAAIgQgKIAHhBIAUAAIgFA5IAYAAIAGg5IAVAAIgIBLg");
	this.shape_26.setTransform(112.4,-62.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgBA3IgQgKIAKhjIATAAIgJBbIAPAAIgBASg");
	this.shape_27.setTransform(105.7,-64.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgRAmIgQgKIAFg3IATgKIAaAAIARAKIgEAjIgoAAIgCAMIApAAIgCASgAgJgHIAUAAIACgMIgVAAg");
	this.shape_28.setTransform(98.8,-62.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AARA1IgcgqIgMANIgDAdIgVAAIALhpIAVAAIgFAwIArgwIAZAAIguAyIAoA3g");
	this.shape_29.setTransform(89.9,-63.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAMAmIgMgXIgSAXIgWAAIAfgmIgXglIAXAAIALAWIARgWIAWAAIgeAlIAXAmg");
	this.shape_30.setTransform(-108.2,-62.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_31.setTransform(139.3,-63.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_32.setTransform(131.5,-62.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgmA1IALhpIARAAIADAGIAKgGIAUAAIAQAKIgGA3IgSAKIgTAAIgKgGIgEAkgAgNAGIAaAAIAFgoIgaAAg");
	this.shape_33.setTransform(122.2,-61);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAAyIgRgKIAFgvIgNAAIABgRIAOAAIABgNIAVgMIgCAZIAQAAIgCARIgQAAIgEAnIAQAAIgCASg");
	this.shape_34.setTransform(114.8,-63.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAMAmIgDgGIgKAGIgSAAIgRgKIAHhBIAVAAIgHA5IAZAAIAHg5IAUAAIgIBLg");
	this.shape_35.setTransform(107,-62.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgcA1IgRgKIAKhVIASgKIAuAAIAQAKIgJBVIgSAKgAgXAjIAoAAIAHhFIgnAAg");
	this.shape_36.setTransform(97.3,-64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_30},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#AA4400").s().p("AFnCbIAAk1IKcAAIAAE1gAlICbIAAk1IKbAAIAAE1gAwCCbIAAkDQAAgyAyAAIJ0AAIAAE1g");
	this.shape_37.setTransform(-40.2,-63.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AILJ7IAAk3IQEAAIAAEFQAAAygyAAgAtUJ7IAAk3IKcAAIAAE3gA3cJ7QgyAAAAgyIAAkFIKmAAIAAE3gAikEwIAAksIKbAAIAAEsgAtUEwIAAksIKcAAIAAEsgA4OEwIAAksIKmAAIAAEsgAILgPIAAkrIQEAAIAAErgAtUgPIAAkrIKcAAIAAErgA4OgPIAAkrIKmAAIAAErgAiklOIAAksIKbAAIAAEsgAtUlOIAAksIKcAAIAAEsgA4OlOIAAksIKmAAIAAEsg");
	this.shape_38.setTransform(12.2,17.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AIBMgIgKAAIqbAAIgKAAIgKAAIAAk4IqcAAIAAE4IgUAAIAAk4IqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAkrIqmAAIAAgUIKmAAIAAk2IAUAAIAAE2IKcAAIAAk2IAUAAIAAE2IKbAAIAAk2IAUAAIAAE2IQEAAIAAFTIwEAAIAAErIQEAAIAAFTIwEAAIAAE4gAikHUIKbAAIAAkrIqbAAgAtUHUIKcAAIAAkrIqcAAgAtUCVIKcAAIAAkrIqcAAgAikiqIKbAAIAAkrIqbAAgAtUiqIKcAAIAAkrIqcAAg");
	this.shape_39.setTransform(12.2,1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AoBCbIAAk1IPRAAQAyAAAAAyIAAEDg");
	this.shape_40.setTransform(115.9,-63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.9,-79,310.2,159.9);


(lib.rec = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAkIACgaIAaAAIgCAagAgMgIIAEgcIAZAAIgDAcg");
	this.shape.setTransform(14.7,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgeAjIABgOIAhgmIgbAAIABgRIA1AAIgBANIghAoIAdAAIgCAQg");
	this.shape_1.setTransform(8.6,16.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAAuIgPgJIAEgrIgNAAIACgRIANAAIACgMIATgKIgDAWIAPAAIgBARIgPAAIgFAkIAQAAIgBAQg");
	this.shape_2.setTransform(-1.1,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_3.setTransform(-8.5,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_4.setTransform(-14.4,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAlIADgbIAZAAIgDAbgAgMgIIADgbIAaAAIgDAbg");
	this.shape_5.setTransform(15.2,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggAxIARghIgUhAIATAAIANApIAUgpIATAAIgwBhg");
	this.shape_6.setTransform(9.1,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgQAAIgDAkIAPAAIgCARg");
	this.shape_7.setTransform(-1.6,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_8.setTransform(-9,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_9.setTransform(-14.9,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAlIADgbIAZAAIgDAbgAgLgIIACgbIAaAAIgDAbg");
	this.shape_10.setTransform(15.1,-13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAMAjIgMgVIgRAVIgVAAIAdgjIgUgiIAUAAIALAUIAQgUIAVAAIgdAiIAWAjg");
	this.shape_11.setTransform(8.6,-13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgNAAIACgQIANAAIACgMIASgMIgCAYIAPAAIgBAQIgPAAIgFAkIAQAAIgBARg");
	this.shape_12.setTransform(-1.6,-14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAJAjIAFg1IgWAAIgGA1IgTAAIAHhFIAQAAIADAFIAJgFIARAAIAPAJIgGA8g");
	this.shape_13.setTransform(-9,-13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAzIAHhFIASAAIgHBFgAgGgfIACgTIATAAIgCATg");
	this.shape_14.setTransform(-14.9,-15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXAxIgQgJIAJhQIARgJIAlAAIAQAJIgJBQIgRAJgAgSAhIAeAAIAHhBIgeAAg");
	this.shape_15.setTransform(16.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAxIABgRIAXAAIAHg8IgYANIABgTIAagOIARAAIgIBQIAWAAIgCARg");
	this.shape_16.setTransform(7.5,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAYIACgRIBIAAIgCARgAgigGIABgRIBIAAIgCARg");
	this.shape_17.setTransform(-5.1,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgeAjIABgNIAhgoIgbAAIABgQIA1AAIgBANIghAoIAdAAIgCAQg");
	this.shape_18.setTransform(-17,1.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AggAxIABgRIAXAAIAGg8IgXANIACgTIAagOIAQAAIgIBQIAWAAIgCARg");
	this.shape_19.setTransform(15.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAAAOIgPATIgOgKIARgSIgWgFIAIgRIAUAIIABgXIARAAIgDAXIAWgIIAEARIgXAFIANASIgQAKg");
	this.shape_20.setTransform(7.1,-1.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgmAYIABgRIBJAAIgDARgAgigGIABgRIBIAAIgCARg");
	this.shape_21.setTransform(-12.9,1.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgeAjIABgNIAhgoIgbAAIABgQIA1AAIgBANIghAoIAdAAIgCAQg");
	this.shape_22.setTransform(-24.8,1.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AggAxIACgRIAWAAIAGg8IgYANIADgTIAagOIAQAAIgJBQIAXAAIgBARg");
	this.shape_23.setTransform(15.1,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgMAlIACgbIgbAAIADgSIAbAAIADgbIARAAIgCAbIAbAAIgDASIgbAAIgDAbg");
	this.shape_24.setTransform(6.8,1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmAYIACgRIBIAAIgCARgAgjgGIACgRIBIAAIgCARg");
	this.shape_25.setTransform(-12.6,1.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXBBIACgOIAQAAIAJhlIgOAAIACgOIAQAAIAPAJIgLBuIgRAKg");
	this.shape_26.setTransform(70,1.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgHBBIgPgKIALhuIARgJIARAAIgBAOIgQAAIgKBlIAPAAIgBAOg");
	this.shape_27.setTransform(58.5,1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgBAzIgPgKIAJhbIATAAIgJBVIAOAAIgCAQg");
	this.shape_28.setTransform(45.1,-0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIACgLIATgLIgDAWIAPAAIgBARIgQAAIgEAkIAQAAIgBARg");
	this.shape_29.setTransform(39.7,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAjIAHhFIAQAAIACAFIAKgFIAOAAIgBAQIgYAAIgFA1g");
	this.shape_30.setTransform(21.7,1.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjAxIAKhhIAQAAIADAFIAJgFIASAAIAQAJIgGA0IgRAJIgSAAIgJgGIgDAhgAgMAGIAZAAIADgmIgXAAg");
	this.shape_31.setTransform(14.1,2.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgOANIADgZIAaAAIgDAZg");
	this.shape_32.setTransform(7.2,3.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAAvIgQgKIAGgrIgOAAIACgRIANAAIABgLIATgLIgCAWIAQAAIgCARIgPAAIgFAkIAQAAIgCARg");
	this.shape_33.setTransform(1.9,0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AALAjIgDgFIgJAFIgRAAIgPgJIAGg8IATAAIgGA1IAXAAIAGg1IATAAIgHBFg");
	this.shape_34.setTransform(-5.4,1.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAjIgPgJIAGgzIARgJIAdAAIAPAJIgGAzIgRAJgAgNAUIAXAAIAEgnIgXAAg");
	this.shape_35.setTransform(-13.8,1.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOANIADgZIAZAAIgCAZg");
	this.shape_36.setTransform(-20.8,3.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAbAjIAGg1IgVAAIgFA1IgTAAIAFg1IgTAAIgHA1IgTAAIAIhFIAQAAIACAFIALgFIAOAAIAKAHIAPgHIANAAIAQAJIgHA8g");
	this.shape_37.setTransform(-29.3,1.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQAjIgPgJIAGgzIARgJIAZAAIAPAJIgEAgIgmAAIgBAMIAmAAIgCAQgAgIgGIASAAIACgMIgTAAg");
	this.shape_38.setTransform(-39.2,1.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAvIgPgKIAEgrIgMAAIABgRIANAAIABgLIAUgLIgDAWIAPAAIgBARIgQAAIgDAkIAPAAIgCARg");
	this.shape_39.setTransform(-46,0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_40.setTransform(-53,1.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeAjIACgQIAjAAIABgLIgTAAIgPgJIADgXIARgKIAlAAIgCAQIgiAAIgBAKIATAAIAPAJIgCAYIgSAKg");
	this.shape_41.setTransform(-68.3,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-9}},{t:this.shape_7},{t:this.shape_6,p:{x:9.1}},{t:this.shape_5},{t:this.shape_4,p:{x:-14.4,y:14.8}},{t:this.shape_3,p:{x:-8.5,y:16.4}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18,p:{x:-17}},{t:this.shape_17,p:{x:-5.1}},{t:this.shape_16},{t:this.shape_15,p:{x:16.3}}]},1).to({state:[{t:this.shape_22,p:{x:-24.8}},{t:this.shape_21},{t:this.shape_18,p:{x:-1.2}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_15,p:{x:24.2}}]},1).to({state:[{t:this.shape_22,p:{x:-24.5}},{t:this.shape_25},{t:this.shape_18,p:{x:-0.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_15,p:{x:23.9}}]},1).to({state:[{t:this.shape_18,p:{x:-12.9}},{t:this.shape_17,p:{x:-1}},{t:this.shape_15,p:{x:12.3}}]},1).to({state:[{t:this.shape_41},{t:this.shape_6,p:{x:-60.2}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_4,p:{x:26.4,y:-0.2}},{t:this.shape_8,p:{x:32.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_3,p:{x:51.3,y:1.3}},{t:this.shape_27},{t:this.shape_18,p:{x:64.1}},{t:this.shape_26}]},1).wait(1));

	// Layer 1
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,30.3,0,-30.3).s().p("AkFEPIAAodIILAAIAAIdg");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,13.5,0,-13.4).s().p("AlRB5IAAjxIKjAAIAADxg");

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#FF8C00","#FFD510"],[0,1],0,13.5,0,-13.4).s().p("As1B5IAAjxIZrAAIAADxg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},4).wait(1));

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
	this.instance = new lib.rec("single",5);
	this.instance.parent = this;
	this.instance.setTransform(-1.8,121.2,1,1,0,0,0,0.1,0.2);

	this.instance_1 = new lib.rec("single",4);
	this.instance_1.parent = this;
	this.instance_1.setTransform(164.9,51,1,1,0,0,0,0.1,0.2);

	this.instance_2 = new lib.rec("single",2);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36.4,51,1,1,0,0,0,0.1,0.2);

	this.instance_3 = new lib.rec("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1.9,-103.7,1,1,0,0,0,0.1,0.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape.setTransform(164.2,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_1.setTransform(157,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgJBXgAgNAeIAUAAIAEggIgVAAg");
	this.shape_2.setTransform(150,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgFA7gAgFgaIACgRIAQAAIgCARg");
	this.shape_3.setTransform(144.6,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAqIAIhEIgXAAIACgPIA9AAIgCAPIgWAAIgHBEg");
	this.shape_4.setTransform(139.8,-1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_5.setTransform(65.3,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAgIABAAIATggIASAAIgfAwIgEAjg");
	this.shape_6.setTransform(58.5,-1.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_7.setTransform(-30.8,-2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_8.setTransform(-38,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAJAsIgCgFIgIAFIgQAAIgOgIIAFgsIAQgIIAOAAIAIAFIAEggIAPAAIgJBXgAgNAeIAVAAIADggIgVAAg");
	this.shape_9.setTransform(-45,-2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAQAAIgGA7gAgFgaIABgRIARAAIgBARg");
	this.shape_10.setTransform(-50.4,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAqIAIhEIgXAAIACgPIA9AAIgBAPIgYAAIgHBEg");
	this.shape_11.setTransform(-55.2,-1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAfIgIgGIgIAGIgOAAIgOgIIAFgsIAPgIIAOAAIAHAEIAKgEIAIAAIgHA8gAgLAQIATAAIADggIgTAAg");
	this.shape_12.setTransform(-132.2,-0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIAOAgIAAAAIATggIASAAIggAwIgDAjg");
	this.shape_13.setTransform(-139,-1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAIAsIgMgVIgHAIIgCANIgQAAIAJhXIAQAAIgFAzIAAAAIAUgXIATAAIgYAaIAVAhg");
	this.shape_14.setTransform(59.7,-50.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAFIAKgFIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_15.setTransform(52.5,-48.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAJAsIgDgFIgIAFIgPAAIgOgIIAGgsIAOgIIAPAAIAIAFIADggIAQAAIgIBXgAgNAeIAUAAIAEggIgVAAg");
	this.shape_16.setTransform(45.5,-50.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMAsIAGg7IAPAAIgGA7gAgFgaIACgRIAQAAIgCARg");
	this.shape_17.setTransform(40.1,-50.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPAqIAHhFIgXAAIACgOIA9AAIgCAOIgWAAIgHBFg");
	this.shape_18.setTransform(35.3,-49.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPAeIgIgEIgIAEIgOAAIgOgIIAFgsIAPgIIAOAAIAHAFIAKgFIAIAAIgHA8gAgLARIATAAIADghIgTAAg");
	this.shape_19.setTransform(-38.7,-48.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgVgvIASAAIANAfIABAAIATgfIASAAIgfAvIgEAkg");
	this.shape_20.setTransform(-45.4,-49.9);

	this.instance_4 = new lib.bujur("single",4);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1.6,166,1,1,0,0,0,0.2,0.1);

	this.instance_5 = new lib.dia("single",1);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-93.8,5.8);

	this.instance_6 = new lib.dia("single",2);
	this.instance_6.parent = this;
	this.instance_6.setTransform(102.2,5.7);

	this.instance_7 = new lib.rec("single",3);
	this.instance_7.parent = this;
	this.instance_7.setTransform(45.9,51,1,1,0,0,0,0.1,0.2);

	this.instance_8 = new lib.dia("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2,-42);

	this.instance_9 = new lib.rec("single",4);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-152.4,51,1,1,0,0,0,0.1,0.2);

	this.instance_10 = new lib.bujur("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-1.8,-158.7,1,1,0,0,0,0.2,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AiSVaICCAAIg+A8gAiSO4ICBAAIg+A8gAXuCmICCAAIg+A8gAFKCmICCAAIg+A8gAntCmICCAAIg+A8gA5vCmICCAAIg+A8gAN8luICCAAIg+A8gAwtluICCAAIg+A8gAiVr7ICCAAIg+A8gAiV2VICCAAIg+A8g");
	this.shape_21.setTransform(6.3,3.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(2,1,1).p("AhT4qIAAQ3IQQAAIAAHdIJzAAIAAKeIpzAAAvrgWIAAndIOYAAAvrgWIJBAAIAAKeIpBAAIAACSIOYAAIAAMRAvrKIIpEAAIAAqeIJEAAAhTMaIQQAAIAAiSAO9gWIo0AAIAAKeII0AA");
	this.shape_22.setTransform(6.5,8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPAfIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLAQIAUAAIADggIgUAAg");
	this.shape_23.setTransform(148.4,-0.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA1IAAAAIAGg1IARAAIgJBTg");
	this.shape_24.setTransform(140.5,-1.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgIIACgUIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAHIgCAWIgPAIg");
	this.shape_25.setTransform(66.2,-0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_26.setTransform(59.6,-0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIANAgIABAAIATggIASAAIgfAwIgEAjg");
	this.shape_27.setTransform(53,-1.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgPAfIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLAQIAUAAIADggIgUAAg");
	this.shape_28.setTransform(-46.6,-0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAPAqIgeg2IgBAAIgFA2IgRAAIAJhTIAPAAIAeA1IABAAIAFg1IARAAIgJBTg");
	this.shape_29.setTransform(-54.5,-1.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgIIACgUIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAHIgCAWIgPAIg");
	this.shape_30.setTransform(-131.3,-0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_31.setTransform(-137.9,-0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgQAqIADgkIgWgvIATAAIAOAgIAAAAIATggIATAAIghAwIgDAjg");
	this.shape_32.setTransform(-144.5,-1.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgPAeIgNgIIAFgsIAPgIIAYAAIANAIIgFAsIgOAIgAgLARIAUAAIADghIgUAAg");
	this.shape_33.setTransform(43.9,-48.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAOAqIgdg2IAAAAIgGA2IgRAAIAJhTIAQAAIAdA2IAAAAIAGg2IARAAIgJBTg");
	this.shape_34.setTransform(36,-49.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAeIABgOIAeAAIABgJIgQAAIgNgHIACgVIAPgIIAfAAIgBAOIgdAAIgBAIIAQAAIANAIIgCAVIgPAIg");
	this.shape_35.setTransform(-37.8,-48.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNAeIgNgIIAEgrIAPgIIAVAAIANAIIgDAbIggAAIgBAKIAgAAIgBAOgAgHgFIAQAAIABgKIgQAAg");
	this.shape_36.setTransform(-44.4,-48.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgQAqIAEgkIgXgvIATAAIANAfIABAAIATgfIASAAIgfAvIgEAkg");
	this.shape_37.setTransform(-50.9,-49.9);

	this.instance_11 = new lib.bujurEn("single",4);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-1.6,166,1,1,0,0,0,0.2,0.1);

	this.instance_12 = new lib.bujurEn("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-1.8,-158.7,1,1,0,0,0,0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.instance_10},{t:this.instance_9,p:{startPosition:4}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.instance_12},{t:this.instance_9,p:{startPosition:1}},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_11},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

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


(lib.dialogue3a = function(mode,startPosition,loop) {
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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,431.8,41.5);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,304.8,68.9);


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
		_this.parent.onTimeEnd();
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
	this.instance = new lib.schedulbox1();
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


(lib.actMc1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
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
			_this.parent.userAns_q1[2] = userAns;
			var _userAns = _this.parent.userAns_q1[0] + ", " + _this.parent.userAns_q1[1] + ", " + _this.parent.userAns_q1[2];
			if (userAns==cAns){
				//correct
				_this.parent.cScore_q1++;
			}
			//scale the score
			var scaledScore = Math.round(_this.parent.cScore_q1/3*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(482.6,466.5);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(482.6,397.1);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(482.6,326.8);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(482.6,214.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// input
	this.instance = new lib.Mc3op4();
	this.instance.parent = this;
	this.instance.setTransform(621.6,465.4,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc3op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(626.4,204.5,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc3op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(621.6,397.1,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc3op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(626.4,315.8,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(559.1,527.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_3, new cjs.Rectangle(459.4,191.2,304.5,362.5), null);


(lib.actMc1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
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
			_this.parent.userAns_q1[1] = userAns;
			if (userAns==cAns){
				//correct
				_this.parent.cScore_q1++;
			}
			_this.parent.gotoAndPlay("q1_3");
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(544.6,415.8);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(544.6,348.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2}]}).wait(1));

	// input
	this.instance = new lib.Mc2op1();
	this.instance.parent = this;
	this.instance.setTransform(688.4,348.5,1,1,0,0,0,111.5,13);

	this.instance_1 = new lib.Mc2op2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(688.4,414.8,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// article
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(586.7,524.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_2, new cjs.Rectangle(507.4,325.2,161.7,225.5), null);


(lib.actMc1_1 = function(mode,startPosition,loop) {
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
			_this.parent.userAns_q1[0] = userAns;
			if (userAns==cAns){
				//correct
				_this.parent.cScore_q1++;
			}
			_this.parent.gotoAndPlay("q1_2");
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(520.6,456.3);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(520.6,402.3);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(520.6,348.4);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(520.6,294.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// item
	this.instance = new lib.Mc1op1d();
	this.instance.parent = this;
	this.instance.setTransform(656.6,468.2,1,1,0,0,0,106.7,24.9);

	this.instance_1 = new lib.Mc1op1a();
	this.instance_1.parent = this;
	this.instance_1.setTransform(661.4,294.5,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc1op1c();
	this.instance_2.parent = this;
	this.instance_2.setTransform(656.6,414.3,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc1op1b();
	this.instance_3.parent = this;
	this.instance_3.setTransform(661.4,348.4,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(566.7,524.1,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_1, new cjs.Rectangle(487.4,271.2,183.2,279.5), null);


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


// stage content:
(lib.f5s15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q1_2:145,q1_3:186,q2:228,q3:270,q4:311,finalFb:361});

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
		var stageNum = 15;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		this.timeGiven = 300;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		var maxQ = 2;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": [{
				"qId": "f5s15_1",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 8,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
			]
		};
		var qItem1 = [{
				"qId": "f5s15_2",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s15_3",
				"qDomain": 1,
				"qParam": 3,
				"qSkill": 13,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s15_4",
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
		} else {
			this.myData.qItem.push(qItem1[randRange(0,2)]);
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
		this.cScore_q1 = 0;
		this.userAns_q1 = [];
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
	this.frame_228 = function() {
		playSound("questionAlert");
	}
	this.frame_263 = function() {
		this.stop();
	}
	this.frame_270 = function() {
		playSound("questionAlert");
	}
	this.frame_305 = function() {
		this.stop();
	}
	this.frame_311 = function() {
		playSound("questionAlert");
	}
	this.frame_346 = function() {
		this.stop();
	}
	this.frame_361 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_532 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(35).call(this.frame_139).wait(6).call(this.frame_145).wait(35).call(this.frame_180).wait(6).call(this.frame_186).wait(35).call(this.frame_221).wait(7).call(this.frame_228).wait(35).call(this.frame_263).wait(7).call(this.frame_270).wait(35).call(this.frame_305).wait(6).call(this.frame_311).wait(35).call(this.frame_346).wait(15).call(this.frame_361).wait(171).call(this.frame_532).wait(521));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(257).to({_off:true},172).wait(520));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(361).to({_off:false},0).to({_off:true},172).wait(520));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,75.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(257).to({_off:true},172).wait(520));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:77.8},16,cjs.Ease.cubicOut).wait(316).to({startPosition:0},0).to({_off:true},172).wait(520));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(498.8,156.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(949));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_3 = new lib.dialogue3a();
	this.instance_3.parent = this;
	this.instance_3.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},185).to({state:[]},133).to({state:[]},172).wait(520));

	// avatar
	this.instance_4 = new lib.avatarBotsX("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.4,121.6,0.052,0.052);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},318).wait(692));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(361).to({graphics:null,x:0,y:0}).wait(692));

	// actMc
	this.instance_5 = new lib.actMc1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,310);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc1_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,350);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc1_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,310);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc_4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(340,0);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(340,0);
	this.instance_9._off = true;

	this.instance_10 = new lib.actMc_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(340,0);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(126).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(908));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(167).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(867));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},7).wait(825));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(245).to({_off:false},0).to({x:0},13,cjs.Ease.backOut).to({_off:true},12).wait(783));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(287).to({_off:false},0).to({x:0},13,cjs.Ease.backOut).to({_off:true},6).wait(747));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(328).to({_off:false},0).to({x:0},13,cjs.Ease.backOut).to({_off:true},12).wait(700));

	// q
	this.instance_11 = new lib.mcQ7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(430.5,208,0.05,0.05);
	this.instance_11._off = true;

	this.instance_12 = new lib.mcQ8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(427.5,213,0.05,0.05);
	this.instance_12._off = true;

	this.instance_13 = new lib.mcQ9();
	this.instance_13.parent = this;
	this.instance_13.setTransform(266.5,220,0.05,0.05);
	this.instance_13._off = true;

	this.instance_14 = new lib.flowchart();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-230.8,351.2,1,1,0,0,0,0.5,0.1);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_11,this.instance_12,this.instance_13,this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({_off:false},0).to({scaleX:1,scaleY:1,x:427.3,y:213},21,cjs.Ease.elasticOut).to({_off:true},20).wait(908));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(145).to({_off:false},0).to({scaleX:1,scaleY:1,x:426.3,y:216},21,cjs.Ease.elasticOut).to({_off:true},20).wait(867));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(186).to({_off:false},0).to({scaleX:1,scaleY:1,x:261.3,y:215.7},21,cjs.Ease.elasticOut).to({_off:true},21).wait(825));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(228).to({_off:false},0).to({x:241.7},17,cjs.Ease.backOut).wait(25).to({x:-230.8},0).to({x:241.7},17,cjs.Ease.backOut).to({_off:true},19).wait(5).to({_off:false,x:-230.8},0).to({x:241.7},17,cjs.Ease.backOut).to({_off:true},25).wait(700));

	// Layer_2
	this.instance_15 = new lib.Symbol3("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(271,376.8,0.1,0.1,0,0,0,0.5,0);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(67).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:272,y:396.8},19,cjs.Ease.elasticOut).to({_off:true},142).wait(825));

	// progress
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(613,76.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(625.1,76.5);

	var maskedShapeInstanceList = [this.prog1,this.prog2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog2},{t:this.prog1}]},99).to({state:[]},262).to({state:[]},172).wait(520));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).to({state:[]},507).wait(520));

	// bg
	this.instance_16 = new lib.Symbol2("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(394.4,296.6);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(20).to({_off:false},0).to({_off:true},341).wait(692));

	// bg
	this.instance_17 = new lib.Bitmap3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},533).wait(520));

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
		{src:"images/f5s15/Bitmap21.png", id:"Bitmap21"},
		{src:"images/f5s15/Bitmap22.png", id:"Bitmap22"},
		{src:"images/f5s15/Bitmap3.png", id:"Bitmap3"},
		{src:"images/f5s15/Bitmap9.png", id:"Bitmap9"},
		{src:"images/f5s15/Integratedcircuit.jpg", id:"Integratedcircuit"},
		{src:"sounds/mdroid_talk.mp3", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3", id:"questionAlert"},
		{src:"sounds/questionComplete.mp", id:"questionComplete"},
		{src:"sounds/stdClick.mp3", id:"stdClick"},
		{src:"sounds/submitAns.mp3", id:"submitAns"},
		{src:"sounds/suspense.mp3", id:"suspense"},
		{src:"sounds/timeout.mp3", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1529741297802", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"}
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