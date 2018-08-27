(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,275);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,31);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,20);


(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,275);


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
p.nominalBounds = new cjs.Rectangle(0,0,221,206);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,29);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,23);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,30);


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
	this.shape.setTransform(37.1,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_1.setTransform(29.6,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALA7IgCgHIgLAHIgWAAIgRgLIAGg7IAUgLIAUAAIALAHIAEgrIAWAAIgNB1gAgSAoIAbAAIAGgrIgdAAg");
	this.shape_2.setTransform(20.2,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAKAoIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAIIAMgIIATAAIARALIgHBFg");
	this.shape_3.setTransform(10.3,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_4.setTransform(0.9,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRA6IAJhPIAVAAIgIBPgAgIgjIADgXIAWAAIgCAXg");
	this.shape_5.setTransform(-10.1,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgiAoIACgSIAoAAIACgNIgWAAIgSgKIADgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIARAJIgCAdIgUALg");
	this.shape_6.setTransform(-17.1,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgRA6IAJhPIAVAAIgJBPgAgIgjIADgXIAXAAIgDAXg");
	this.shape_7.setTransform(-23.4,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAfAoIAGg9IgYAAIgGA9IgUAAIAGg9IgYAAIgGA9IgWAAIAJhQIASAAIACAIIANgIIAPAAIANAJIAQgJIAPAAIASALIgIBFg");
	this.shape_8.setTransform(-32.8,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAKAoIAGg8IgaAAIgGA8IgWAAIAIhQIASAAIADAHIAMgHIATAAIARAMIgHBEg");
	this.shape_9.setTransform(51.3,-10.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_10.setTransform(41.9,-10.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALA6IgRgcIgKALIgBARIgWAAIAMh0IAWAAIgHBEIAbgeIAZAAIggAiIAdAsg");
	this.shape_11.setTransform(33.1,-12.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiAoIACgSIApAAIAAgNIgVAAIgRgKIACgcIAUgKIAqAAIgCATIgnAAIgBALIAWAAIASAKIgEAdIgTAKg");
	this.shape_12.setTransform(23.8,-10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AANApIgDgHIgLAHIgUAAIgRgMIAHhEIAWAAIgHA8IAbAAIAGg8IAWAAIgIBQg");
	this.shape_13.setTransform(14.8,-10.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIABAHIAMgHIARAAIgCATIgbAAIgGA8g");
	this.shape_14.setTransform(7.2,-10.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgSAoIgRgKIAGg6IAUgMIAcAAIASAMIgFAlIgsAAIgBANIAsAAIgCASgAgJgHIAVAAIABgNIgVAAg");
	this.shape_15.setTransform(-1,-10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAA1IgSgKIAGgyIgPAAIACgTIAPAAIABgNIAXgNIgEAaIASAAIgCATIgSAAIgEAqIASAAIgCASg");
	this.shape_16.setTransform(-8.8,-12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AALA6IAHg8IgdAAIgGA8IgWAAIAMh0IAWAAIgFArIAMgHIAUAAIASAMIgHBEg");
	this.shape_17.setTransform(-21.5,-12.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AANApIgDgHIgLAHIgUAAIgRgMIAHhEIAWAAIgHA8IAbAAIAGg8IAWAAIgIBQg");
	this.shape_18.setTransform(-31,-10.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkA4IATgmIgXhJIAWAAIAPAvIAWgvIAWAAIg3Bvg");
	this.shape_19.setTransform(-39.7,-9.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAeA4IgHgYIgoAAIgMAYIgVAAIAyhvIAXAAIAcBvgAATAMIgKgnIAAAAIgSAnIAcAAg");
	this.shape_20.setTransform(-50.3,-12.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_21.setTransform(46.5,14.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgiAoIACgSIAoAAIABgNIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIASAJIgDAdIgUALg");
	this.shape_22.setTransform(32.7,14.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgiAoIACgSIApAAIAAgNIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgnAAIgBALIAWAAIASAJIgEAdIgTALg");
	this.shape_23.setTransform(23.9,14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgQA6IAIhPIAVAAIgJBPgAgHgjIACgXIAWAAIgCAXg");
	this.shape_24.setTransform(17.6,12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAeAoIAHg9IgXAAIgHA9IgVAAIAGg9IgWAAIgHA9IgWAAIAIhQIASAAIAEAIIAMgIIAPAAIANAJIAQgJIAQAAIARALIgHBFg");
	this.shape_25.setTransform(8.2,14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSAoIgSgKIAHg7IATgLIAdAAIARALIgEAmIgsAAIAAANIArAAIgCASgAgKgHIAWAAIACgOIgWAAg");
	this.shape_26.setTransform(-7.3,14.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AALA6IAGg9IgcAAIgGA9IgWAAIAMh0IAWAAIgFAsIAMgIIAVAAIARALIgHBFg");
	this.shape_27.setTransform(-16.7,12.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAA1IgRgLIAEgxIgOAAIACgTIAPAAIABgOIAWgMIgDAaIASAAIgBATIgSAAIgFAqIASAAIgCASg");
	this.shape_28.setTransform(-24.8,12.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AALA6IAGg9IgcAAIgGA9IgWAAIAMh0IAWAAIgFAsIAMgIIAVAAIARALIgHBFg");
	this.shape_29.setTransform(-37.4,12.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAA1IgRgLIAEgxIgOAAIACgTIAPAAIABgOIAWgMIgDAaIASAAIgBATIgSAAIgFAqIASAAIgCASg");
	this.shape_30.setTransform(-45.5,12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgRA6IAJhPIAVAAIgIBPgAgIgjIADgXIAWAAIgCAXg");
	this.shape_31.setTransform(-51.1,12.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAGAoIgIgxIAAAAIgUAxIgWAAIgMhPIAUAAIAHAyIAUgyIATAAIAJAyIASgyIAUAAIgcBPg");
	this.shape_32.setTransform(-59.4,14.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_33.setTransform(31.1,-10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAAA1IgSgKIAFgyIgOAAIACgTIAOAAIACgNIAXgNIgDAaIARAAIgCATIgSAAIgEAqIASAAIgCASg");
	this.shape_34.setTransform(18.9,-12.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgSAoIgSgKIAHg6IATgMIAdAAIASAMIgFAlIgsAAIgBANIAsAAIgCASgAgKgHIAWAAIABgNIgVAAg");
	this.shape_35.setTransform(10.8,-10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgiA4IADgSIAnAAIACgXIgLAHIgVAAIgRgLIAGg3IAUgMIAUAAIAKAHIAMgHIALAAIgLBmIgUAKgAgRADIAcAAIAFgnIgcAAg");
	this.shape_36.setTransform(1.5,-9.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgiAoIACgSIApAAIABgNIgWAAIgSgKIADgcIAUgKIAqAAIgCATIgmAAIgCALIAWAAIARAKIgCAdIgUAKg");
	this.shape_37.setTransform(-12,-10.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgMAZIACgxIAXAAIgJAxg");
	this.shape_38.setTransform(-17.9,-16);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAAA1IgRgKIAEgyIgOAAIACgTIAOAAIACgNIAWgNIgCAaIARAAIgBATIgSAAIgFAqIASAAIgCASg");
	this.shape_39.setTransform(-24.1,-12.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgeA4IAMhvIAVAAIgJBcIAlAAIgCATg");
	this.shape_40.setTransform(-40.5,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:51.3}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:-10.1}},{t:this.shape_4},{t:this.shape_3,p:{x:10.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:37.1}}]}).to({state:[{t:this.shape_40},{t:this.shape_15,p:{x:-32.2}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_9,p:{x:40.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_5,p:{x:39.7}},{t:this.shape_21},{t:this.shape_3,p:{x:55.9}},{t:this.shape,p:{x:63.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.7,-25.8,115.5,51.8);


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
	this.shape_2.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
	this.shape_2.setTransform(113.1,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0DDFDF").s().p("AA1BiIANiAIAAAAIg5CAIglAAIgfiCIAAAAIgOCCIglAAIAUjDIA0AAIAiCPIAAAAIBAiPIAzAAIgUDDg");
	this.shape_3.setTransform(92.2,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
	this.shape_4.setTransform(69.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0DDFDF").s().p("AglBiIAQiiIg0AAIADghICQAAIgDAhIg1AAIgRCig");
	this.shape_5.setTransform(53.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0DDFDF").s().p("AAcBiIAJhUIhMAAIgJBUIgnAAIAVjDIAnAAIgIBOIBMAAIAIhOIAnAAIgVDDg");
	this.shape_6.setTransform(27.5,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
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
	this.shape_11.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
	this.shape_11.setTransform(-77.5,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0DDFDF").s().p("AgvBjIgegTIAEglIAoAAIgDAXIA7AAIAGgxIhAAAIgfgSIAJhPIAigTIBGAAIAfATIgEAmIgnAAIACgXIg5AAIgEAvIA+AAIAfASIgIBQIgiATg");
	this.shape_12.setTransform(-95.2,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
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
	this.myTxt = new cjs.Text("You found treasures of gold, diamonds, silvers, artefacts and weapons. You can carry up to 20 kg \nof treasure into the Spaceship.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 419;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237.3,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egg7AAAMA2NAAAILqAA");
	this.shape.setTransform(-40.8,65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A/kGyIAAmsIAAhHIAAgeIilACIClh7IAAjUMAsPAAAIJ9AAILrAAIAANe");
	this.shape_1.setTransform(-49.5,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AWkGwMg2NAAAIAAmtIAAhHIAAgeIikADICkh7IAAjVMAsQAAAIJ9AAILqAAIAANfg");
	this.shape_2.setTransform(-49.1,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,453.5,89.4), null);


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
	this.shape.setTransform(68.6,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA7IgLgHIgLAHIgLAAIAMh1IAWAAIgFArIAMgHIAVAAIARALIgGA7IgUALgAgQAoIAdAAIAEgrIgbAAg");
	this.shape_1.setTransform(60.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_2.setTransform(51.4,14.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAGAoIgIgxIAAAAIgUAxIgWAAIgMhPIAUAAIAHAyIAUgyIATAAIAJAyIASgyIAUAAIgcBPg");
	this.shape_3.setTransform(40.9,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_4.setTransform(29.6,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBLIACgTIAQAAIAJhdIAWAAIgLBlIgTALgAABgzIADgXIAXAAIgCAXg");
	this.shape_5.setTransform(21.8,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAKAoIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAIIAMgIIATAAIARALIgHBFg");
	this.shape_6.setTransform(15.4,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgSAoIgSgKIAHg7IATgLIAdAAIARALIgEAmIgsAAIAAANIArAAIgCASgAgKgHIAWAAIACgOIgWAAg");
	this.shape_7.setTransform(6.2,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeAoIAHg9IgYAAIgGA9IgVAAIAHg9IgYAAIgGA9IgWAAIAIhQIASAAIADAIIANgIIAPAAIANAJIAQgJIAPAAIASALIgHBFg");
	this.shape_8.setTransform(-5.2,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgRA6IAJhPIAVAAIgIBPgAgIgjIADgXIAWAAIgCAXg");
	this.shape_9.setTransform(-18.2,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_10.setTransform(-25.4,14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAoIACgSIApAAIAAgNIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgnAAIgBALIAWAAIASAJIgEAdIgTALg");
	this.shape_11.setTransform(-34.7,14.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgSAoIgSgKIAHg7IATgLIAdAAIARALIgEAmIgrAAIgBANIArAAIgCASgAgKgHIAWAAIACgOIgWAAg");
	this.shape_12.setTransform(-43.5,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBA6IgRgKIAKhqIAVAAIgKBiIAQAAIgBASg");
	this.shape_13.setTransform(-50.4,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSAoIgSgKIAHg7IATgLIAdAAIARALIgEAmIgrAAIgBANIArAAIgCASgAgKgHIAWAAIACgOIgWAAg");
	this.shape_14.setTransform(-57.8,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAoIACgSIAoAAIABgNIgVAAIgRgKIACgbIAUgLIAqAAIgCATIgmAAIgCALIAWAAIASAJIgDAdIgUALg");
	this.shape_15.setTransform(-66.8,14.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AALA6IAHg8IgcAAIgHA8IgWAAIAMh0IAWAAIgEArIALgHIAUAAIASAMIgHBEg");
	this.shape_16.setTransform(40.9,-12.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_17.setTransform(31.4,-10.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AALA7IgCgHIgLAHIgWAAIgRgLIAGg7IAUgLIAUAAIALAHIAEgrIAWAAIgNB1gAgSAoIAbAAIAGgrIgdAAg");
	this.shape_18.setTransform(22,-12.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AANApIgDgHIgLAHIgUAAIgRgMIAHhEIAWAAIgHA8IAbAAIAGg8IAWAAIgIBQg");
	this.shape_19.setTransform(12.2,-10.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgiAoIACgSIAoAAIABgNIgVAAIgRgKIACgcIAUgKIAqAAIgCATIgmAAIgCALIAWAAIASAKIgDAdIgUAKg");
	this.shape_20.setTransform(3,-10.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAUApIgKgHIgLAHIgUAAIgRgLIAGg7IAUgLIASAAIALAHIAMgHIAKAAIgIBRgAgQAWIAbAAIAEgrIgaAAg");
	this.shape_21.setTransform(-10.2,-10.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AALA7IgCgHIgMAHIgVAAIgRgLIAHg7IATgLIAUAAIAKAHIAFgrIAWAAIgNB1gAgSAoIAcAAIAEgrIgcAAg");
	this.shape_22.setTransform(-19.6,-12.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAKAoIAGg8IgaAAIgGA8IgWAAIAIhQIASAAIADAHIAMgHIATAAIARAMIgHBEg");
	this.shape_23.setTransform(-29.5,-10.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAdA4IgFgYIgqAAIgKAYIgXAAIAzhvIAXAAIAdBvgAASAMIgJgnIgBAAIgRAnIAbAAg");
	this.shape_24.setTransform(-40,-12.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AghA5IACgTIAnAAIACgXIgLAHIgVAAIgRgKIAGg5IAUgLIATAAIALAIIAMgIIALAAIgLBmIgUALgAgRAEIAdAAIAEgpIgcAAg");
	this.shape_25.setTransform(32.3,15.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIABAGIAMgGIARAAIgCATIgbAAIgGA8g");
	this.shape_26.setTransform(10.4,14.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgSAoIgRgKIAGg7IAUgLIAcAAIARALIgEAmIgrAAIgCANIAsAAIgCASgAgJgHIAVAAIABgOIgVAAg");
	this.shape_27.setTransform(2.2,14.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAKAoIAGg9IgaAAIgGA9IgWAAIAIhQIASAAIADAIIAMgIIATAAIARALIgHBFg");
	this.shape_28.setTransform(-28.2,14.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSAoIgRgKIAGg6IAUgMIAcAAIARAMIgEAlIgrAAIgCANIAsAAIgCASgAgJgHIAVAAIABgNIgVAAg");
	this.shape_29.setTransform(41.4,-10.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_30.setTransform(22.6,-10.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AALA7IgDgHIgKAHIgWAAIgRgLIAGg7IAUgLIAUAAIALAHIAEgrIAWAAIgNB1gAgSAoIAbAAIAGgrIgcAAg");
	this.shape_31.setTransform(13.2,-12.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSAoIgSgKIAHg6IATgMIAdAAIARAMIgEAlIgsAAIAAANIArAAIgCASgAgKgHIAWAAIACgNIgWAAg");
	this.shape_32.setTransform(-0.5,-10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAoIAJhPIASAAIABAHIANgHIAQAAIgCATIgbAAIgGA8g");
	this.shape_33.setTransform(-7.9,-10.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgMAZIACgxIAXAAIgJAxg");
	this.shape_34.setTransform(-13.2,-16);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgUApIgSgLIAHg7IATgLIAhAAIASALIgHA7IgTALgAgPAWIAaAAIAFgrIgaAAg");
	this.shape_35.setTransform(-30.4,-10.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgWA4IAFgwIgdg/IAYAAIATAqIAagqIAYAAIgqBAIgFAvg");
	this.shape_36.setTransform(-39.4,-12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23,p:{x:-29.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:12.2}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-66.8}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-18.2}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:15.4}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:40.9}},{t:this.shape_2,p:{x:51.4}},{t:this.shape_1},{t:this.shape,p:{x:68.6}}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_19,p:{x:-20.8}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_23,p:{x:32}},{t:this.shape_29},{t:this.shape_2,p:{x:-37.6}},{t:this.shape_28},{t:this.shape_15,p:{x:-19.1}},{t:this.shape_3,p:{x:-8.1}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_9,p:{x:15.8}},{t:this.shape_6,p:{x:22.6}},{t:this.shape_25},{t:this.shape,p:{x:39.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.6,-25.8,147.2,51.8);


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
	this.shape_2.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
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
	this.shape_6.graphics.f("#0DDFDF").s().p("AA0BiIgLgqIhIAAIgTAqIgnAAIBZjDIApAAIAxDDgAAhAWIgRhGIgBAAIgfBGIAxAAg");
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
	this.myTxt = new cjs.Text("Anda telah menjumpai harta karun berupa emas, \nberlian, perak, artifak dan senjata. Anda boleh memuatkan \nsehingga 20 kg harta karun ke dalam kapal angkasa.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 482;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235.6,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("EgnIAAAMBORAAA");
	this.shape.setTransform(-1.2,65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EglxAGyIAAoRIikACICkh7IAAjUMBOQAAAIAANe");
	this.shape_1.setTransform(-9.9,22.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Egl1AGwIAAoSIilADIClh7IAAjVMBOQAAAIAANfg");
	this.shape_2.setTransform(-9.4,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,520.8,89.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-512,-274.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,-274.9,1024,550);


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
	this.shape.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape.setTransform(97.9,160.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_1.setTransform(87.1,160.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_2.setTransform(76.3,160.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgUAGgQQAGgPALgJQALgHAOgBQALAAALAFQAKADAIAIIgFALQgJgHgIgEQgJgDgIAAQgQAAgJAOQgJAPAAAaIAAACQAEgJAJgGQAKgFALAAQALAAAJAEQAKAGAFAIQAFAKAAALQAAAMgGAKQgFAJgJAFQgKAFgMABQgWAAgMgRgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgIAAgNQAAgNgIgHQgHgHgNAAQgLAAgIAHg");
	this.shape_3.setTransform(60.9,160.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBuIAwhuIANAAIAAB/g");
	this.shape_4.setTransform(47.8,160.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjBAIgQgqQgDgJgFgCQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAJQgHAHgMAEQAFAAAEAFQAEADADAIIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_5.setTransform(34.3,160.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_6.setTransform(-53.5,164.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_7.setTransform(-62.5,160.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAJgEQAKgEAMAAQANAAAJAEQAKAEAFAIQAGAHAAALQAAAKgGAIQgGAIgMADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHAAAKQAAAMAJAGQAIAGAOAAQAPAAAIgGQAJgGgBgMQAAgKgJgHQgIgGgOgCQgNACgJAGgAgUguQgIAGABALQAAAKAIAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_8.setTransform(-78,160.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_9.setTransform(-173.9,162.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDA1QgHgHAAgOIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAwQAAALAEAEQAEADAIAAQAFAAAFgBIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_10.setTransform(-182.3,161.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_11.setTransform(-191,162.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAOAAIAABlQAAAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_12.setTransform(-199.4,162.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAJgFQAHgEAKAAQAhAAgBAjIAAA4g");
	this.shape_13.setTransform(-205.8,162.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_14.setTransform(-215.9,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKADQAKAEAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgEQgEgFgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgMQAAgKAFgJQAGgIALgFQAKgEANgBQAOAAALAFQAMADAIAIIgGAMQgJgIgJgEQgKgDgLAAQgOAAgIAGQgJAHAAALQAAAJAIAGQAHAEAPAEIAaAHQAJACAGAIQAHAGAAAMQAAAKgGAJQgGAHgLAFQgKAEgPABQgdAAgSgRg");
	this.shape_15.setTransform(-226.4,160.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_16.setTransform(-179.5,120.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_17.setTransform(-190.6,122.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAIgHQAFgIANAAIAMACIAAANIgJgCQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_18.setTransform(-198.7,120.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_19.setTransform(-203.8,120.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_20.setTransform(-209.3,120.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_21.setTransform(-214.9,122.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvBAIgOghIhBAAIgPAhIgPAAIA4h/IAMAAIA5B/gAgbATIA3AAIgchBg");
	this.shape_22.setTransform(-225.4,120.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_23.setTransform(-187.8,79.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_24.setTransform(-198.9,82);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAuIAAhAQABgOgCgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_25.setTransform(-206.7,81.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_26.setTransform(-215.4,82);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AguBAIAAh/IAzAAQATAAALAJQALAKAAARQAAARgLAJQgLAJgTAAIgkAAIAAA4gAgfgDIAiAAQAOgBAIgFQAHgHAAgLQAAgMgHgGQgIgGgOAAIgiAAg");
	this.shape_27.setTransform(-225.7,80.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAIgFQAJgEAJAAQAhAAAAAjIAAA4g");
	this.shape_28.setTransform(-178.8,41.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_29.setTransform(-189.7,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBAIAAhZIANAAIAABZgAgIgvIAAgRIARAAIAAARg");
	this.shape_30.setTransform(-197,39.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_31.setTransform(-201.3,39.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_32.setTransform(-206.1,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_33.setTransform(-214.8,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgvBAIAAh/IAyAAQAUAAALAJQALAIAAAQQAAAKgGAIQgFAHgJAEQAKACAGAIQAHAIAAAMQAAARgLAJQgMAJgUAAgAghA0IAlAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIglAAgAghgHIAiAAQAPAAAGgFQAIgGAAgLQAAgWgdAAIgiAAg");
	this.shape_34.setTransform(-225.6,39.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_35.setTransform(-190.4,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_36.setTransform(-200.5,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAzAuIAAg3QABgNgFgFQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgOAAIAAg3QAAgMgEgGQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAhAQAAgOgCgLIAOAAIABAQQAEgJAHgFQAIgEAKAAQALAAAGAEQAHAEACAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_37.setTransform(-213.5,1.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgoBAIAAh/IBQAAIAAAMIhBAAIAAAtIA+AAIAAALIg+AAIAAAvIBBAAIAAAMg");
	this.shape_38.setTransform(-226.3,-0.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAXAvIAAg3QAAgMgFgFQgEgFgKgBQgLAAgHAIQgGAHgBAMIAAAzIgSAAIAAhBQAAgOgBgLIARAAIACAPQADgIAJgFQAIgFAJAAQAhAAAAAlIAAA4g");
	this.shape_39.setTransform(-175.6,-38.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_40.setTransform(-186.2,-38.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgGAAQgLABgGAHQgGAIAAALIAAAyg");
	this.shape_41.setTransform(-194.2,-38.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_42.setTransform(-203.9,-38.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAdBAIg+g9IAAA9IgTAAIAAh/IATAAIAAA6IA7g6IAYAAIhBA+IBDBBg");
	this.shape_43.setTransform(-214,-40.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_44.setTransform(-231.3,-38.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgSAAIAAgOIASAAIAAgXIARgGIAAAdIAaAAIAAAOIgaAAIAAAsQAAAJAEAEQAFAEAHAAQAFAAAEgBIAAAPQgFABgJAAQgNAAgHgHg");
	this.shape_45.setTransform(-239.9,-40);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAIgFAJgBIAIACIAAAQQgEgCgHAAQgMABgFAHQgGAIAAALIAAAyg");
	this.shape_46.setTransform(-245.9,-38.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_47.setTransform(-255.6,-38.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAkBAIAAg5IhHAAIAAA5IgSAAIAAh/IASAAIAAA3IBHAAIAAg3IASAAIAAB/g");
	this.shape_48.setTransform(-267.7,-40.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABALAQQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_49.setTransform(97.9,120.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABALAQQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_50.setTransform(87.1,120.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABAMAQQALARAAAfQAAAggLARQgMARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_51.setTransform(76.3,120.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAQASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAOIgKAAIAAhJIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMAAQgLAAgMgEg");
	this.shape_52.setTransform(61.1,120.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_53.setTransform(47.8,120.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAjBAIgQgqQgDgIgFgEQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAIQgHAIgMAEQAFAAAEAEQAEAFADAHIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_54.setTransform(34.3,120.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAALAQQAMAQAAAgQAAAggMAQQgLASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_55.setTransform(97.9,80.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAALAQQAMAQAAAgQAAAggMAQQgLASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_56.setTransform(87.1,80.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAAMAQQALAQAAAgQAAAggLAQQgMASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_57.setTransform(76.3,80.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_58.setTransform(60.6,80.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_59.setTransform(47.8,80.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAjBAIgQgrQgDgIgFgDQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAASQAAAMgGAIQgHAIgMAEQAFABAEADQAEAEADAHIAQAsgAgjgDIAjAAQAdAAAAgYQAAgMgHgGQgIgGgOAAIgjAAg");
	this.shape_60.setTransform(34.3,80.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAALAQQAMARAAAfQAAAggMAQQgLARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_61.setTransform(97.9,39.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAALAQQAMARAAAfQAAAggMAQQgLARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_62.setTransform(87.1,39.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAAMAQQALARAAAfQAAAggLAQQgMARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_63.setTransform(76.3,39.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAMBAIAAgcIg5AAIAAgLIA8hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_64.setTransform(61,39.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_65.setTransform(47.8,39.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAjBAIgQgrQgDgHgFgDQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAASQAAAMgGAIQgHAIgMAEQAFABAEAEQAEAEADAGIAQAsgAgjgDIAjAAQAdAAAAgYQAAgMgHgGQgIgGgOAAIgjAAg");
	this.shape_66.setTransform(34.3,39.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_67.setTransform(97.9,-0.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_68.setTransform(87.1,-0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_69.setTransform(76.3,-0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AghBAIA7hyIhEAAIAAgNIBVAAIAAALIg8B0g");
	this.shape_70.setTransform(60.8,-0.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBuIAwhuIANAAIAAB/g");
	this.shape_71.setTransform(47.8,-0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAjBAIgQgrQgDgIgFgCQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAJQgHAHgMAEQAFAAAEAFQAEADADAIIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_72.setTransform(34.3,-0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAXAvIAAg3QAAgMgFgFQgEgFgKgBQgLAAgHAIQgGAHgBAMIAAAzIgRAAIAAhBQgBgOgBgLIARAAIACAPQADgIAJgFQAIgFAJAAQAhAAAAAlIAAA4g");
	this.shape_73.setTransform(108.4,-38.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_74.setTransform(97.3,-38.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_75.setTransform(89.9,-40.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_76.setTransform(81.9,-38.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_77.setTransform(71.4,-38.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgXBPIAAgPIANABQAJAAADgFQADgEAAgMIAAh8IATAAIAAB8QAAATgHAJQgIAJgQAAIgQgCg");
	this.shape_78.setTransform(62.3,-38.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIBBIAAhZIARAAIAABZgAgKgtIAAgTIAVAAIAAATg");
	this.shape_79.setTransform(52.9,-40.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_80.setTransform(45,-38.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_81.setTransform(37.6,-40.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgIBBIAAhZIARAAIAABZgAgKgtIAAgTIAVAAIAAATg");
	this.shape_82.setTransform(33.1,-40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAnBAIhJhgIAABgIgSAAIAAh/IAOAAIBJBgIAAhgIARAAIAAB/g");
	this.shape_83.setTransform(24.1,-40.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_84.setTransform(-48.1,124.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_85.setTransform(-57.1,120.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgQAVgBQAWABAMAQQALARAAAfQAAAggLARQgMARgWAAQgVgBgMgQgAgWgnQgHANAAAaQAAAbAHANQAIANAOAAQAPAAAHgNQAIgNAAgbQAAgagIgNQgHgNgPAAQgOAAgIANg");
	this.shape_86.setTransform(-72.6,120.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgjBAIAAgMIAdAAIAAhhIgbARIAAgPIAhgUIAIAAIAABzIAcAAIAAAMg");
	this.shape_87.setTransform(-82.9,120.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_88.setTransform(-53.5,83.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_89.setTransform(-62.5,79.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIAsAAIAAg+g");
	this.shape_90.setTransform(-77.8,80.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_91.setTransform(-53.5,43.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_92.setTransform(-62.5,39.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_93.setTransform(-78.2,39.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_94.setTransform(-53.5,3.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_95.setTransform(-62.5,-0.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgXA9QgLgEgIgIIAGgMQASAPASAAQANABAHgJQAIgHAAgNQAAgNgIgHQgHgHgNAAQgRAAgLANIgKAAIAAhKIBMAAIAAAMIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAGAFAHQAFAKAAAMQAAAMgGAJQgFAJgKAGQgKAEgMAAQgLAAgMgDg");
	this.shape_96.setTransform(-77.7,-0.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgSAAIAAgOIASAAIAAgXIARgGIAAAdIAZAAIAAAOIgZAAIAAAsQAAAJAFAEQADAEAIAAQAEAAAFgBIAAAPQgFABgJAAQgOAAgGgHg");
	this.shape_97.setTransform(-45.8,-40);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_98.setTransform(-54.7,-38.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgBgLIARAAIABAQQAEgJAGgEQAIgFAJgBIAJACIAAAQQgFgCgGAAQgMABgGAHQgGAIAAALIAAAyg");
	this.shape_99.setTransform(-62.7,-38.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_100.setTransform(-71.5,-38.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgwBAIAAh/IA0AAQAUAAALAJQALAIAAARQAAAJgFAIQgFAIgKADQALACAGAIQAGAIAAAMQAAAQgLAKQgLAJgVAAgAgeAxIAiAAQAOAAAHgFQAGgFAAgLQAAgLgGgGQgHgEgOAAIgiAAgAgegIIAfAAQAbABAAgVQAAgUgbAAIgfAAg");
	this.shape_101.setTransform(-82.4,-40.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAPASABQANAAAHgJQAIgHAAgNQAAgNgIgIQgHgGgNAAQgRAAgLANIgKAAIAAhJIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAGAFAHQAFAKAAAMQAAAMgGAJQgFAJgKAGQgKAEgMAAQgLAAgMgDg");
	this.shape_102.setTransform(61.1,160.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgMgRgAgWgnQgHAMAAAbQAAAbAHANQAIANAOAAQAPAAAHgNQAIgNAAgbQAAgbgIgMQgHgNgPAAQgOAAgIANg");
	this.shape_103.setTransform(-72.6,160.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgOIAhgVIAIAAIAAByIAcAAIAAANg");
	this.shape_104.setTransform(-82.9,160.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgVAGgPQAGgPALgJQALgHAOgBQALAAALAFQAKAEAIAHIgFALQgJgHgIgEQgJgDgIAAQgQAAgJAOQgJAPAAAaIAAACQAEgJAJgGQAKgFALAAQALAAAJAEQAKAGAFAIQAFAJAAAMQAAAMgGAKQgFAJgJAFQgKAFgMABQgWAAgMgRgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgHAAgOQAAgNgIgHQgHgHgNAAQgLAAgIAHg");
	this.shape_105.setTransform(60.9,-0.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAJgFQAHgEAKAAQAhAAAAAjIAAA4g");
	this.shape_106.setTransform(-165,162.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_107.setTransform(-175.3,162.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQADgKAJgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKgBAOQABAOgGAKQgEAKgJAGQgKAGgMAAQgKAAgIgFQgHgEgFgJIAAA4gAgTgsQgHAJgBARQABARAHAIQAHAJAMAAQAOAAAHgJQAIgIgBgRQABgQgIgJQgIgKgNAAQgMAAgHAJg");
	this.shape_108.setTransform(-185.7,164.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAkBAIgkhoIgjBoIgNAAIgth/IAPAAIAkBqIAlhqIALAAIAlBqIAlhqIAOAAIgtB/g");
	this.shape_109.setTransform(-221.9,160.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_110.setTransform(-159.7,122.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgRApQgJgGgFgKQgGgLAAgOQAAgNAGgKQAFgLAKgGQAKgGAMAAQAJAAAJADQAIADAGAGIgFALQgGgGgHgCQgGgDgHAAQgNAAgIAKQgIAJAAAPQAAARAIAJQAIAJANAAQAHAAAGgDQAHgCAGgGIAFALQgFAGgKADQgIADgKAAQgMAAgKgGg");
	this.shape_111.setTransform(-174.7,122.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgJBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAGgHQAHgIANAAIALACIAAANIgJgCQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_112.setTransform(-193.2,120.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_113.setTransform(-209.2,120.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_114.setTransform(-214.9,122.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_115.setTransform(-181.8,82);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAKAAIAIABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_116.setTransform(-188.9,81.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGAtIgnhZIAQAAIAdBJIAfhJIAPAAIgnBZg");
	this.shape_117.setTransform(-207.3,82);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_118.setTransform(-218.5,80.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKAEQAKADAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgFQgEgEgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgLQAAgLAFgJQAGgIALgFQAKgFANABQAOAAALADQAMAFAIAIIgGALQgJgIgJgDQgKgEgLAAQgOAAgIAHQgJAGAAALQAAAKAIAEQAHAGAPADIAaAGQAJADAGAHQAHAHAAALQAAALgGAIQgGAJgLAEQgKAFgPgBQgdAAgSgQg");
	this.shape_119.setTransform(-226.3,80.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_120.setTransform(-151.5,41.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_121.setTransform(-161.6,39.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAJAAAQQAAARAHAJQAIAJAMAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_122.setTransform(-182.4,41.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Ag1BAIAAh/IArAAQAeAAARARQARAQAAAeQAAAfgRAQQgRARgeAAgAgmA0IAbAAQAYAAANgOQAMgNAAgZQAAgygxgBIgbAAg");
	this.shape_123.setTransform(-225,39.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_124.setTransform(-199.1,-0.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_125.setTransform(-206.4,-0.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgWApQgKgGgFgKQgFgLAAgOQAAgNAFgLQAFgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_126.setTransform(-213.6,1.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgXA6QgOgIgIgPQgHgPAAgUQAAgTAHgPQAIgPAOgIQANgHARgBQAOAAALAFQAMAEAHAHIgFAMQgKgIgJgEQgIgDgMAAQgUAAgMANQgMAOAAAZQABAaAMANQALAOAWAAQAQAAAPgFIAAgnIggAAIAAgLIAtAAIAAA7QgIADgMADQgMACgNABQgRAAgOgIg");
	this.shape_127.setTransform(-225.5,-0.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgkAjIAFgMQAOAKASABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgJgCIgNgDQgNgDgFgFQgHgHAAgJQAAgNAKgHQAJgIAQAAQAJAAAJADQAJADAGAGIgGANQgMgLgPAAQgIAAgFAEQgEADAAAGQAAAEACAEQADACAHACIAOAEQANACAHAGQAGAGAAAKQAAAMgKAHQgJAHgRAAQgXAAgOgMg");
	this.shape_128.setTransform(-185.2,-38.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgkAjIAGgMQANAKASABQAJAAAGgEQAEgDAAgGQAAgEgDgDQgEgDgHgCIgPgDQgLgDgHgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAIADQAJADAGAGIgGANQgNgLgOAAQgIAAgEAEQgFADgBAGQAAAEAEAEQADACAGACIAOAEQAOACAGAGQAGAGAAAKQAAAMgKAHQgKAHgRAAQgWAAgOgMg");
	this.shape_129.setTransform(-221.2,-38.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_130.setTransform(-241.5,-38.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIASAAIABAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgFAAQgMABgGAHQgGAIAAALIAAAyg");
	this.shape_131.setTransform(-249.2,-38.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgIBAIAAhvIgsAAIAAgQIBpAAIAAAQIgsAAIAABvg");
	this.shape_132.setTransform(-258.7,-40.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_133.setTransform(104,-38.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgHAtIgnhZIATAAIAbBFIAdhFIASAAIgnBZg");
	this.shape_134.setTransform(68.4,-38.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_135.setTransform(53.8,-38.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgbA+QgMgEgJgIIAHgOQAJAIAKADQAKAEAMAAQAOAAAIgGQAIgGAAgKQAAgHgHgFQgIgEgPgEQgPgDgKgEQgJgEgGgHQgGgHAAgLQAAgLAGgIQAGgJALgFQALgFANABQAOAAAMADQALAFAIAIIgGANQgJgHgKgEQgJgEgLAAQgMABgIAFQgIAHAAAKQAAAIAHAEQAHAFAOADQAQAEAKADQAKAEAGAHQAGAHAAAKQAAALgGAJQgGAJgLAEQgLAFgPgBQgOAAgNgDg");
	this.shape_136.setTransform(27.8,-40.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgRAAIAAgOIARAAIAAgXIASgGIAAAdIAYAAIAAAOIgYAAIAAAsQAAAJADAEQAEAEAHAAQAGAAAEgBIAAAPQgGABgHAAQgOAAgHgHg");
	this.shape_137.setTransform(-37.7,-40);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAWBCIAAg3QAAgLgEgFQgFgGgKAAQgLAAgHAHQgGAHAAAMIAAAzIgSAAIAAiDIASAAIAAA4QAEgIAIgFQAIgEAJAAQAgAAAAAkIAAA4g");
	this.shape_138.setTransform(-46.1,-40.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgiA5IADgNQAIAEAJACQAHACAIAAQAZAAAAgZIAAgVQgDAJgJAEQgIAFgJAAQgMAAgJgGQgKgFgFgLQgEgJgBgNQABgNAEgLQAFgKAKgGQAJgFAMgBQAJAAAIAFQAJAFADAHIAAgOIASAAIAABYQAAAVgLAKQgLAKgUAAQgVABgPgKgAgSgqQgHAHAAAPQAAAOAHAHQAHAIALAAQAMAAAIgIQAGgHAAgOQAAgPgGgHQgIgJgMAAQgLAAgHAJg");
	this.shape_139.setTransform(-57.2,-36.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_140.setTransform(-71.8,-38.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAjBAIgjhiIgiBiIgPAAIgth/IATAAIAiBkIAkhkIAMAAIAjBlIAjhlIASAAIgtB/g");
	this.shape_141.setTransform(-86.8,-40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100,p:{x:-71.5}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{y:39.9}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{y:80.2}},{t:this.shape_89,p:{y:79.9}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-57.1,y:120.2}},{t:this.shape_84,p:{x:-48.1}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:37.6}},{t:this.shape_80},{t:this.shape_79,p:{x:52.9}},{t:this.shape_78},{t:this.shape_77,p:{x:71.4}},{t:this.shape_76},{t:this.shape_75,p:{x:89.9}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{y:-0.3}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64,p:{y:39.9}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{y:80.1}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:61.1}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-255.6}},{t:this.shape_46,p:{x:-245.9}},{t:this.shape_45},{t:this.shape_44,p:{x:-231.3}},{t:this.shape_43},{t:this.shape_42,p:{x:-203.9}},{t:this.shape_41},{t:this.shape_40,p:{x:-186.2}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-213.5,y:1.4}},{t:this.shape_36},{t:this.shape_35,p:{x:-190.4,y:1.5}},{t:this.shape_34},{t:this.shape_33,p:{x:-214.8,y:41.7}},{t:this.shape_32},{t:this.shape_31,p:{x:-201.3,y:39.7}},{t:this.shape_30,p:{x:-197}},{t:this.shape_29},{t:this.shape_28,p:{x:-178.8}},{t:this.shape_27},{t:this.shape_26,p:{x:-215.4,y:82}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-187.8}},{t:this.shape_22,p:{x:-225.4}},{t:this.shape_21},{t:this.shape_20,p:{x:-209.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-190.6,y:122.2}},{t:this.shape_16,p:{x:-179.5}},{t:this.shape_15},{t:this.shape_14,p:{x:-215.9}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-191,y:162.5}},{t:this.shape_10},{t:this.shape_9,p:{x:-173.9}},{t:this.shape_8,p:{y:160.6}},{t:this.shape_7,p:{x:-62.5}},{t:this.shape_6,p:{x:-53.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_79,p:{x:-64.7}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_47,p:{x:38.7}},{t:this.shape_81,p:{x:46.7}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_44,p:{x:78.4}},{t:this.shape_75,p:{x:86.4}},{t:this.shape_77,p:{x:93.8}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_42,p:{x:-231.4}},{t:this.shape_129},{t:this.shape_40,p:{x:-211.5}},{t:this.shape_46,p:{x:-202.2}},{t:this.shape_100,p:{x:-194.5}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_30,p:{x:-216.3}},{t:this.shape_17,p:{x:-209.1,y:41.7}},{t:this.shape_37,p:{x:-195.5,y:41.7}},{t:this.shape_122},{t:this.shape_28,p:{x:-172.1}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_31,p:{x:-214.3,y:79.9}},{t:this.shape_117},{t:this.shape_33,p:{x:-197.6,y:82}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_22,p:{x:-225.3}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_26,p:{x:-201,y:122.2}},{t:this.shape_112},{t:this.shape_11,p:{x:-185,y:122.2}},{t:this.shape_111},{t:this.shape_20,p:{x:-167.4}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_14,p:{x:-207}},{t:this.shape_9,p:{x:-197}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_35,p:{x:-155.2,y:162.5}},{t:this.shape_8,p:{y:-0.4}},{t:this.shape_89,p:{y:-0.6}},{t:this.shape_94},{t:this.shape_90,p:{y:39.9}},{t:this.shape_85,p:{x:-62.5,y:39.7}},{t:this.shape_91},{t:this.shape_93,p:{y:80.1}},{t:this.shape_23,p:{x:-62.5}},{t:this.shape_88},{t:this.shape_52,p:{x:-77.7}},{t:this.shape_16,p:{x:-62.5}},{t:this.shape_84,p:{x:-53.5}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_105},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_58,p:{y:39.9}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_64,p:{y:80.2}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_70,p:{y:120.4}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_104},{t:this.shape_103},{t:this.shape_7,p:{x:-57.1}},{t:this.shape_6,p:{x:-48.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_102},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FCE3A8").s().p("AOPQAIAA//IT+AAIAAf/gAmOQAIAA//IT9AAIAAf/gEgiMAQAIAA//IbeAAIAAf/g");
	this.shape_142.setTransform(-89.5,79.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFC133").s().p("AOPCbIAAk1IT+AAIAAE1gAmOCbIAAk1IT9AAIAAE1gEgiMACbIAAk1IbeAAIAAE1g");
	this.shape_143.setTransform(-89.5,-41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143},{t:this.shape_142}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.4,-56.8,437.8,239.1);


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
	this.shape.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape.setTransform(97.9,160.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_1.setTransform(87.1,160.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_2.setTransform(76.3,160.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAPASABQANAAAHgJQAIgHAAgNQAAgNgIgIQgHgGgNAAQgRAAgLANIgKAAIAAhJIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAGAFAHQAFAKAAAMQAAAMgGAJQgFAJgKAGQgKAEgMAAQgLAAgMgDg");
	this.shape_3.setTransform(61.1,160.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBuIAwhuIANAAIAAB/g");
	this.shape_4.setTransform(47.8,160.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjBAIgQgqQgDgJgFgCQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAJQgHAHgMAEQAFAAAEAFQAEADADAIIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_5.setTransform(34.3,160.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_6.setTransform(-48.1,164.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_7.setTransform(-57.1,160.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgMgRgAgWgnQgHAMAAAbQAAAbAHANQAIANAOAAQAPAAAHgNQAIgNAAgbQAAgbgIgMQgHgNgPAAQgOAAgIANg");
	this.shape_8.setTransform(-72.6,160.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgOIAhgVIAIAAIAAByIAcAAIAAANg");
	this.shape_9.setTransform(-82.9,160.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_10.setTransform(-173.9,162.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgDA1QgHgHAAgOIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAwQAAALAEAEQAEADAIAAQAFAAAFgBIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_11.setTransform(-182.3,161.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_12.setTransform(-191,162.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAOAAIAABlQAAAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_13.setTransform(-199.4,162.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAJgFQAHgEAKAAQAhAAgBAjIAAA4g");
	this.shape_14.setTransform(-205.8,162.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_15.setTransform(-215.9,162.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKADQAKAEAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgEQgEgFgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgMQAAgKAFgJQAGgIALgFQAKgEANgBQAOAAALAFQAMADAIAIIgGAMQgJgIgJgEQgKgDgLAAQgOAAgIAGQgJAHAAALQAAAJAIAGQAHAEAPAEIAaAHQAJACAGAIQAHAGAAAMQAAAKgGAJQgGAHgLAFQgKAEgPABQgdAAgSgRg");
	this.shape_16.setTransform(-226.4,160.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_17.setTransform(-179.5,120.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_18.setTransform(-190.6,122.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAIgHQAFgIANAAIAMACIAAANIgJgCQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_19.setTransform(-198.7,120.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_20.setTransform(-203.8,120.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_21.setTransform(-209.3,120.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_22.setTransform(-214.9,122.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAvBAIgOghIhBAAIgPAhIgPAAIA4h/IAMAAIA5B/gAgbATIA3AAIgchBg");
	this.shape_23.setTransform(-225.4,120.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_24.setTransform(-187.8,79.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_25.setTransform(-198.9,82);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAuIAAhAQABgOgCgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_26.setTransform(-206.7,81.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_27.setTransform(-215.4,82);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AguBAIAAh/IAzAAQATAAALAJQALAKAAARQAAARgLAJQgLAJgTAAIgkAAIAAA4gAgfgDIAiAAQAOgBAIgFQAHgHAAgLQAAgMgHgGQgIgGgOAAIgiAAg");
	this.shape_28.setTransform(-225.7,80.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAIgFQAJgEAJAAQAhAAAAAjIAAA4g");
	this.shape_29.setTransform(-178.8,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_30.setTransform(-189.7,41.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBAIAAhZIANAAIAABZgAgIgvIAAgRIARAAIAAARg");
	this.shape_31.setTransform(-197,39.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_32.setTransform(-201.3,39.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_33.setTransform(-206.1,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_34.setTransform(-214.8,41.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgvBAIAAh/IAyAAQAUAAALAJQALAIAAAQQAAAKgGAIQgFAHgJAEQAKACAGAIQAHAIAAAMQAAARgLAJQgMAJgUAAgAghA0IAlAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIglAAgAghgHIAiAAQAPAAAGgFQAIgGAAgLQAAgWgdAAIgiAAg");
	this.shape_35.setTransform(-225.6,39.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_36.setTransform(-190.4,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_37.setTransform(-200.5,1.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAzAuIAAg3QABgNgFgFQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgOAAIAAg3QAAgMgEgGQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAhAQAAgOgCgLIAOAAIABAQQAEgJAHgFQAIgEAKAAQALAAAGAEQAHAEACAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_38.setTransform(-213.5,1.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgoBAIAAh/IBQAAIAAAMIhBAAIAAAtIA+AAIAAALIg+AAIAAAvIBBAAIAAAMg");
	this.shape_39.setTransform(-226.3,-0.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAXAvIAAg3QAAgMgFgFQgEgFgKgBQgLAAgHAIQgGAHgBAMIAAAzIgSAAIAAhBQAAgOgBgLIARAAIACAPQADgIAJgFQAIgFAJAAQAhAAAAAlIAAA4g");
	this.shape_40.setTransform(-175.6,-38.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_41.setTransform(-186.2,-38.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgGAAQgLABgGAHQgGAIAAALIAAAyg");
	this.shape_42.setTransform(-194.2,-38.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_43.setTransform(-203.9,-38.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAdBAIg+g9IAAA9IgTAAIAAh/IATAAIAAA6IA7g6IAYAAIhBA+IBDBBg");
	this.shape_44.setTransform(-214,-40.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_45.setTransform(-231.3,-38.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgSAAIAAgOIASAAIAAgXIARgGIAAAdIAaAAIAAAOIgaAAIAAAsQAAAJAEAEQAFAEAHAAQAFAAAEgBIAAAPQgFABgJAAQgNAAgHgHg");
	this.shape_46.setTransform(-239.9,-40);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAIgFAJgBIAIACIAAAQQgEgCgHAAQgMABgFAHQgGAIAAALIAAAyg");
	this.shape_47.setTransform(-245.9,-38.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_48.setTransform(-255.6,-38.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAkBAIAAg5IhHAAIAAA5IgSAAIAAh/IASAAIAAA3IBHAAIAAg3IASAAIAAB/g");
	this.shape_49.setTransform(-267.7,-40.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABALAQQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_50.setTransform(97.9,120.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABALAQQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_51.setTransform(87.1,120.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABAMAQQALARAAAfQAAAggLARQgMARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_52.setTransform(76.3,120.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AghBAIA7hyIhEAAIAAgNIBVAAIAAALIg8B0g");
	this.shape_53.setTransform(60.8,120.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_54.setTransform(47.8,120.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAjBAIgQgqQgDgIgFgEQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAIQgHAIgMAEQAFAAAEAEQAEAFADAHIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_55.setTransform(34.3,120.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAALAQQAMAQAAAgQAAAggMAQQgLASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_56.setTransform(97.9,80.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAALAQQAMAQAAAgQAAAggMAQQgLASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_57.setTransform(87.1,80.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAAMAQQALAQAAAgQAAAggLAQQgMASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_58.setTransform(76.3,80.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAMBAIAAgcIg5AAIAAgLIA8hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_59.setTransform(61,80.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_60.setTransform(47.8,80.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAjBAIgQgrQgDgIgFgDQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAASQAAAMgGAIQgHAIgMAEQAFABAEADQAEAEADAHIAQAsgAgjgDIAjAAQAdAAAAgYQAAgMgHgGQgIgGgOAAIgjAAg");
	this.shape_61.setTransform(34.3,80.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAALAQQAMARAAAfQAAAggMAQQgLARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_62.setTransform(97.9,39.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAALAQQAMARAAAfQAAAggMAQQgLARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_63.setTransform(87.1,39.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAAMAQQALARAAAfQAAAggLAQQgMARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_64.setTransform(76.3,39.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_65.setTransform(60.6,39.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_66.setTransform(47.8,39.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAjBAIgQgrQgDgHgFgDQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAASQAAAMgGAIQgHAIgMAEQAFABAEAEQAEAEADAGIAQAsgAgjgDIAjAAQAdAAAAgYQAAgMgHgGQgIgGgOAAIgjAAg");
	this.shape_67.setTransform(34.3,39.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_68.setTransform(97.9,-0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_69.setTransform(87.1,-0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_70.setTransform(76.3,-0.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgVAGgPQAGgPALgJQALgHAOgBQALAAALAFQAKAEAIAHIgFALQgJgHgIgEQgJgDgIAAQgQAAgJAOQgJAPAAAaIAAACQAEgJAJgGQAKgFALAAQALAAAJAEQAKAGAFAIQAFAJAAAMQAAAMgGAKQgFAJgJAFQgKAFgMABQgWAAgMgRgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgHAAgOQAAgNgIgHQgHgHgNAAQgLAAgIAHg");
	this.shape_71.setTransform(60.9,-0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBuIAwhuIANAAIAAB/g");
	this.shape_72.setTransform(47.8,-0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAjBAIgQgrQgDgIgFgCQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAJQgHAHgMAEQAFAAAEAFQAEADADAIIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_73.setTransform(34.3,-0.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAXAvIAAg3QAAgMgFgFQgEgFgKgBQgLAAgHAIQgGAHgBAMIAAAzIgRAAIAAhBQgBgOgBgLIARAAIACAPQADgIAJgFQAIgFAJAAQAhAAAAAlIAAA4g");
	this.shape_74.setTransform(108.4,-38.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_75.setTransform(97.3,-38.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_76.setTransform(89.9,-40.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_77.setTransform(81.9,-38.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_78.setTransform(71.4,-38.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgXBPIAAgPIANABQAJAAADgFQADgEAAgMIAAh8IATAAIAAB8QAAATgHAJQgIAJgQAAIgQgCg");
	this.shape_79.setTransform(62.3,-38.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgIBBIAAhZIARAAIAABZgAgKgtIAAgTIAVAAIAAATg");
	this.shape_80.setTransform(52.9,-40.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_81.setTransform(45,-38.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_82.setTransform(37.6,-40.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgIBBIAAhZIARAAIAABZgAgKgtIAAgTIAVAAIAAATg");
	this.shape_83.setTransform(33.1,-40.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAnBAIhJhgIAABgIgSAAIAAh/IAOAAIBJBgIAAhgIARAAIAAB/g");
	this.shape_84.setTransform(24.1,-40.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_85.setTransform(-53.5,124.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_86.setTransform(-62.5,120.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXA9QgLgFgIgHIAGgMQASAQASAAQANgBAHgHQAIgIAAgNQAAgNgIgIQgHgGgNgBQgRAAgLAOIgKAAIAAhJIBMAAIAAALIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMAAQgLAAgMgEg");
	this.shape_87.setTransform(-77.7,120.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_88.setTransform(-53.5,83.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_89.setTransform(-62.5,79.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_90.setTransform(-78.2,80.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_91.setTransform(-53.5,43.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_92.setTransform(-62.5,39.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIAsAAIAAg+g");
	this.shape_93.setTransform(-77.8,39.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_94.setTransform(-53.5,3.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_95.setTransform(-62.5,-0.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAJgEQAKgEAMAAQANAAAJAEQAKAEAFAIQAGAHAAALQAAAKgGAIQgGAIgMADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHAAAKQAAAMAJAGQAIAGAOAAQAPAAAIgGQAJgGgBgMQAAgKgJgHQgIgGgOgCQgNACgJAGgAgUguQgIAGABALQAAAKAIAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_96.setTransform(-78,-0.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgSAAIAAgOIASAAIAAgXIARgGIAAAdIAZAAIAAAOIgZAAIAAAsQAAAJAFAEQADAEAIAAQAEAAAFgBIAAAPQgFABgJAAQgOAAgGgHg");
	this.shape_97.setTransform(-45.8,-40);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_98.setTransform(-54.7,-38.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgBgLIARAAIABAQQAEgJAGgEQAIgFAJgBIAJACIAAAQQgFgCgGAAQgMABgGAHQgGAIAAALIAAAyg");
	this.shape_99.setTransform(-62.7,-38.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_100.setTransform(-71.5,-38.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgwBAIAAh/IA0AAQAUAAALAJQALAIAAARQAAAJgFAIQgFAIgKADQALACAGAIQAGAIAAAMQAAAQgLAKQgLAJgVAAgAgeAxIAiAAQAOAAAHgFQAGgFAAgLQAAgLgGgGQgHgEgOAAIgiAAgAgegIIAfAAQAbABAAgVQAAgUgbAAIgfAAg");
	this.shape_101.setTransform(-82.4,-40.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAJgFQAHgEAKAAQAhAAAAAjIAAA4g");
	this.shape_102.setTransform(-165,162.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_103.setTransform(-175.3,162.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQADgKAJgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKgBAOQABAOgGAKQgEAKgJAGQgKAGgMAAQgKAAgIgFQgHgEgFgJIAAA4gAgTgsQgHAJgBARQABARAHAIQAHAJAMAAQAOAAAHgJQAIgIgBgRQABgQgIgJQgIgKgNAAQgMAAgHAJg");
	this.shape_104.setTransform(-185.7,164.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAkBAIgkhoIgjBoIgNAAIgth/IAPAAIAkBqIAlhqIALAAIAlBqIAlhqIAOAAIgtB/g");
	this.shape_105.setTransform(-221.9,160.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_106.setTransform(-159.7,122.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgRApQgJgGgFgKQgGgLAAgOQAAgNAGgKQAFgLAKgGQAKgGAMAAQAJAAAJADQAIADAGAGIgFALQgGgGgHgCQgGgDgHAAQgNAAgIAKQgIAJAAAPQAAARAIAJQAIAJANAAQAHAAAGgDQAHgCAGgGIAFALQgFAGgKADQgIADgKAAQgMAAgKgGg");
	this.shape_107.setTransform(-174.7,122.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgJBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAGgHQAHgIANAAIALACIAAANIgJgCQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_108.setTransform(-193.2,120.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_109.setTransform(-209.2,120.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_110.setTransform(-214.9,122.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_111.setTransform(-181.8,82);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAKAAIAIABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_112.setTransform(-188.9,81.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgGAtIgnhZIAQAAIAdBJIAfhJIAPAAIgnBZg");
	this.shape_113.setTransform(-207.3,82);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_114.setTransform(-218.5,80.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKAEQAKADAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgFQgEgEgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgLQAAgLAFgJQAGgIALgFQAKgFANABQAOAAALADQAMAFAIAIIgGALQgJgIgJgDQgKgEgLAAQgOAAgIAHQgJAGAAALQAAAKAIAEQAHAGAPADIAaAGQAJADAGAHQAHAHAAALQAAALgGAIQgGAJgLAEQgKAFgPgBQgdAAgSgQg");
	this.shape_115.setTransform(-226.3,80.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_116.setTransform(-151.5,41.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_117.setTransform(-161.6,39.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAJAAAQQAAARAHAJQAIAJAMAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_118.setTransform(-182.4,41.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ag1BAIAAh/IArAAQAeAAARARQARAQAAAeQAAAfgRAQQgRARgeAAgAgmA0IAbAAQAYAAANgOQAMgNAAgZQAAgygxgBIgbAAg");
	this.shape_119.setTransform(-225,39.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_120.setTransform(-199.1,-0.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_121.setTransform(-206.4,-0.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWApQgKgGgFgKQgFgLAAgOQAAgNAFgLQAFgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_122.setTransform(-213.6,1.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXA6QgOgIgIgPQgHgPAAgUQAAgTAHgPQAIgPAOgIQANgHARgBQAOAAALAFQAMAEAHAHIgFAMQgKgIgJgEQgIgDgMAAQgUAAgMANQgMAOAAAZQABAaAMANQALAOAWAAQAQAAAPgFIAAgnIggAAIAAgLIAtAAIAAA7QgIADgMADQgMACgNABQgRAAgOgIg");
	this.shape_123.setTransform(-225.5,-0.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgkAjIAFgMQAOAKASABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgJgCIgNgDQgNgDgFgFQgHgHAAgJQAAgNAKgHQAJgIAQAAQAJAAAJADQAJADAGAGIgGANQgMgLgPAAQgIAAgFAEQgEADAAAGQAAAEACAEQADACAHACIAOAEQANACAHAGQAGAGAAAKQAAAMgKAHQgJAHgRAAQgXAAgOgMg");
	this.shape_124.setTransform(-185.2,-38.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgkAjIAGgMQANAKASABQAJAAAGgEQAEgDAAgGQAAgEgDgDQgEgDgHgCIgPgDQgLgDgHgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAIADQAJADAGAGIgGANQgNgLgOAAQgIAAgEAEQgFADgBAGQAAAEAEAEQADACAGACIAOAEQAOACAGAGQAGAGAAAKQAAAMgKAHQgKAHgRAAQgWAAgOgMg");
	this.shape_125.setTransform(-221.2,-38.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_126.setTransform(-241.5,-38.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIASAAIABAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgFAAQgMABgGAHQgGAIAAALIAAAyg");
	this.shape_127.setTransform(-249.2,-38.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgIBAIAAhvIgsAAIAAgQIBpAAIAAAQIgsAAIAABvg");
	this.shape_128.setTransform(-258.7,-40.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_129.setTransform(104,-38.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgHAtIgnhZIATAAIAbBFIAdhFIASAAIgnBZg");
	this.shape_130.setTransform(68.4,-38.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_131.setTransform(53.8,-38.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgbA+QgMgEgJgIIAHgOQAJAIAKADQAKAEAMAAQAOAAAIgGQAIgGAAgKQAAgHgHgFQgIgEgPgEQgPgDgKgEQgJgEgGgHQgGgHAAgLQAAgLAGgIQAGgJALgFQALgFANABQAOAAAMADQALAFAIAIIgGANQgJgHgKgEQgJgEgLAAQgMABgIAFQgIAHAAAKQAAAIAHAEQAHAFAOADQAQAEAKADQAKAEAGAHQAGAHAAAKQAAALgGAJQgGAJgLAEQgLAFgPgBQgOAAgNgDg");
	this.shape_132.setTransform(27.8,-40.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgRAAIAAgOIARAAIAAgXIASgGIAAAdIAYAAIAAAOIgYAAIAAAsQAAAJADAEQAEAEAHAAQAGAAAEgBIAAAPQgGABgHAAQgOAAgHgHg");
	this.shape_133.setTransform(-37.7,-40);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAWBCIAAg3QAAgLgEgFQgFgGgKAAQgLAAgHAHQgGAHAAAMIAAAzIgSAAIAAiDIASAAIAAA4QAEgIAIgFQAIgEAJAAQAgAAAAAkIAAA4g");
	this.shape_134.setTransform(-46.1,-40.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgiA5IADgNQAIAEAJACQAHACAIAAQAZAAAAgZIAAgVQgDAJgJAEQgIAFgJAAQgMAAgJgGQgKgFgFgLQgEgJgBgNQABgNAEgLQAFgKAKgGQAJgFAMgBQAJAAAIAFQAJAFADAHIAAgOIASAAIAABYQAAAVgLAKQgLAKgUAAQgVABgPgKgAgSgqQgHAHAAAPQAAAOAHAHQAHAIALAAQAMAAAIgIQAGgHAAgOQAAgPgGgHQgIgJgMAAQgLAAgHAJg");
	this.shape_135.setTransform(-57.2,-36.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_136.setTransform(-71.8,-38.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAjBAIgjhiIgiBiIgPAAIgth/IATAAIAiBkIAkhkIAMAAIAjBlIAjhlIASAAIgtB/g");
	this.shape_137.setTransform(-86.8,-40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100,p:{x:-71.5}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{y:79.9}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{y:120.2}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:37.6}},{t:this.shape_81},{t:this.shape_80,p:{x:52.9}},{t:this.shape_79},{t:this.shape_78,p:{x:71.4}},{t:this.shape_77},{t:this.shape_76,p:{x:89.9}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:-255.6}},{t:this.shape_47,p:{x:-245.9}},{t:this.shape_46},{t:this.shape_45,p:{x:-231.3}},{t:this.shape_44},{t:this.shape_43,p:{x:-203.9}},{t:this.shape_42},{t:this.shape_41,p:{x:-186.2}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-213.5,y:1.4}},{t:this.shape_37},{t:this.shape_36,p:{x:-190.4,y:1.5}},{t:this.shape_35},{t:this.shape_34,p:{x:-214.8,y:41.7}},{t:this.shape_33},{t:this.shape_32,p:{x:-201.3,y:39.7}},{t:this.shape_31,p:{x:-197}},{t:this.shape_30},{t:this.shape_29,p:{x:-178.8}},{t:this.shape_28},{t:this.shape_27,p:{x:-215.4,y:82}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-187.8}},{t:this.shape_23,p:{x:-225.4}},{t:this.shape_22},{t:this.shape_21,p:{x:-209.3}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-190.6,y:122.2}},{t:this.shape_17,p:{x:-179.5}},{t:this.shape_16},{t:this.shape_15,p:{x:-215.9}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-191,y:162.5}},{t:this.shape_11},{t:this.shape_10,p:{x:-173.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_80,p:{x:-64.7}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_48,p:{x:38.7}},{t:this.shape_82,p:{x:46.7}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_45,p:{x:78.4}},{t:this.shape_76,p:{x:86.4}},{t:this.shape_78,p:{x:93.8}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_43,p:{x:-231.4}},{t:this.shape_125},{t:this.shape_41,p:{x:-211.5}},{t:this.shape_47,p:{x:-202.2}},{t:this.shape_100,p:{x:-194.5}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_31,p:{x:-216.3}},{t:this.shape_18,p:{x:-209.1,y:41.7}},{t:this.shape_38,p:{x:-195.5,y:41.7}},{t:this.shape_118},{t:this.shape_29,p:{x:-172.1}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_32,p:{x:-214.3,y:79.9}},{t:this.shape_113},{t:this.shape_34,p:{x:-197.6,y:82}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_23,p:{x:-225.3}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_27,p:{x:-201,y:122.2}},{t:this.shape_108},{t:this.shape_12,p:{x:-185,y:122.2}},{t:this.shape_107},{t:this.shape_21,p:{x:-167.4}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_15,p:{x:-207}},{t:this.shape_10,p:{x:-197}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_36,p:{x:-155.2,y:162.5}},{t:this.shape_96},{t:this.shape_89,p:{y:-0.6}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_86,p:{y:39.7}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_24,p:{x:-62.5}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_17,p:{x:-62.5}},{t:this.shape_85},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FCE3A8").s().p("AOPQAIAA//IT+AAIAAf/gAmOQAIAA//IT9AAIAAf/gEgiMAQAIAA//IbeAAIAAf/g");
	this.shape_138.setTransform(-89.5,79.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFC133").s().p("AOPCbIAAk1IT+AAIAAE1gAmOCbIAAk1IT9AAIAAE1gEgiMACbIAAk1IbeAAIAAE1g");
	this.shape_139.setTransform(-89.5,-41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.4,-56.8,437.8,239.1);


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
	this.shape.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape.setTransform(97.9,160.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_1.setTransform(87.1,160.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgLgRgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_2.setTransform(76.3,160.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgfAxQgNgQAAgeQAAgUAGgQQAGgPALgJQALgHAOgBQALAAALAFQAKADAIAIIgFALQgJgHgIgEQgJgDgIAAQgQAAgJAOQgJAPAAAaIAAACQAEgJAJgGQAKgFALAAQALAAAJAEQAKAGAFAIQAFAKAAALQAAAMgGAKQgFAJgJAFQgKAFgMABQgWAAgMgRgAgRAEQgIAIAAAMQAAANAIAIQAIAIAMAAQAMAAAHgIQAIgIAAgNQAAgNgIgHQgHgHgNAAQgLAAgIAHg");
	this.shape_3.setTransform(60.9,160.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBuIAwhuIANAAIAAB/g");
	this.shape_4.setTransform(47.8,160.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjBAIgQgqQgDgJgFgCQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAJQgHAHgMAEQAFAAAEAFQAEADADAIIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_5.setTransform(34.3,160.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_6.setTransform(-53.5,164.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_7.setTransform(-62.5,160.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghA4QgMgJAAgRQAAgLAHgJQAIgIAMgDQgMgDgGgIQgGgIAAgKQAAgLAGgHQAFgIAJgEQAKgEAMAAQANAAAJAEQAKAEAFAIQAGAHAAALQAAAKgGAIQgGAIgMADQANADAHAIQAHAJAAALQAAARgMAJQgNAJgVAAQgUAAgNgJgAgWAMQgJAHAAAKQAAAMAJAGQAIAGAOAAQAPAAAIgGQAJgGgBgMQAAgKgJgHQgIgGgOgCQgNACgJAGgAgUguQgIAGABALQAAAKAIAGQAHAHAMABQANgBAHgHQAJgGgBgKQAAgLgHgGQgIgGgNAAQgMAAgIAGg");
	this.shape_8.setTransform(-78,160.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_9.setTransform(-173.9,162.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDA1QgHgHAAgOIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAwQAAALAEAEQAEADAIAAQAFAAAFgBIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_10.setTransform(-182.3,161.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_11.setTransform(-191,162.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAOAAIAABlQAAAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_12.setTransform(-199.4,162.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAJgFQAHgEAKAAQAhAAgBAjIAAA4g");
	this.shape_13.setTransform(-205.8,162.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_14.setTransform(-215.9,162.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKADQAKAEAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgEQgEgFgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgMQAAgKAFgJQAGgIALgFQAKgEANgBQAOAAALAFQAMADAIAIIgGAMQgJgIgJgEQgKgDgLAAQgOAAgIAGQgJAHAAALQAAAJAIAGQAHAEAPAEIAaAHQAJACAGAIQAHAGAAAMQAAAKgGAJQgGAHgLAFQgKAEgPABQgdAAgSgRg");
	this.shape_15.setTransform(-226.4,160.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_16.setTransform(-179.5,120.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_17.setTransform(-190.6,122.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAIgHQAFgIANAAIAMACIAAANIgJgCQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_18.setTransform(-198.7,120.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_19.setTransform(-203.8,120.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_20.setTransform(-209.3,120.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_21.setTransform(-214.9,122.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvBAIgOghIhBAAIgPAhIgPAAIA4h/IAMAAIA5B/gAgbATIA3AAIgchBg");
	this.shape_22.setTransform(-225.4,120.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_23.setTransform(-187.8,79.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_24.setTransform(-198.9,82);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAuIAAhAQABgOgCgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_25.setTransform(-206.7,81.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_26.setTransform(-215.4,82);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AguBAIAAh/IAzAAQATAAALAJQALAKAAARQAAARgLAJQgLAJgTAAIgkAAIAAA4gAgfgDIAiAAQAOgBAIgFQAHgHAAgLQAAgMgHgGQgIgGgOAAIgiAAg");
	this.shape_27.setTransform(-225.7,80.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAIgFQAJgEAJAAQAhAAAAAjIAAA4g");
	this.shape_28.setTransform(-178.8,41.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_29.setTransform(-189.7,41.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGBAIAAhZIANAAIAABZgAgIgvIAAgRIARAAIAAARg");
	this.shape_30.setTransform(-197,39.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_31.setTransform(-201.3,39.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_32.setTransform(-206.1,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_33.setTransform(-214.8,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgvBAIAAh/IAyAAQAUAAALAJQALAIAAAQQAAAKgGAIQgFAHgJAEQAKACAGAIQAHAIAAAMQAAARgLAJQgMAJgUAAgAghA0IAlAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIglAAgAghgHIAiAAQAPAAAGgFQAIgGAAgLQAAgWgdAAIgiAAg");
	this.shape_34.setTransform(-225.6,39.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_35.setTransform(-190.4,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_36.setTransform(-200.5,1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAzAuIAAg3QABgNgFgFQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgOAAIAAg3QAAgMgEgGQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAhAQAAgOgCgLIAOAAIABAQQAEgJAHgFQAIgEAKAAQALAAAGAEQAHAEACAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_37.setTransform(-213.5,1.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgoBAIAAh/IBQAAIAAAMIhBAAIAAAtIA+AAIAAALIg+AAIAAAvIBBAAIAAAMg");
	this.shape_38.setTransform(-226.3,-0.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAXAvIAAg3QAAgMgFgFQgEgFgKgBQgLAAgHAIQgGAHgBAMIAAAzIgSAAIAAhBQAAgOgBgLIARAAIACAPQADgIAJgFQAIgFAJAAQAhAAAAAlIAAA4g");
	this.shape_39.setTransform(-175.6,-38.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_40.setTransform(-186.2,-38.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgGAAQgLABgGAHQgGAIAAALIAAAyg");
	this.shape_41.setTransform(-194.2,-38.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_42.setTransform(-203.9,-38.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAdBAIg+g9IAAA9IgTAAIAAh/IATAAIAAA6IA7g6IAYAAIhBA+IBDBBg");
	this.shape_43.setTransform(-214,-40.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_44.setTransform(-231.3,-38.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgSAAIAAgOIASAAIAAgXIARgGIAAAdIAaAAIAAAOIgaAAIAAAsQAAAJAEAEQAFAEAHAAQAFAAAEgBIAAAPQgFABgJAAQgNAAgHgHg");
	this.shape_45.setTransform(-239.9,-40);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIARAAIACAQQADgJAHgEQAIgFAJgBIAIACIAAAQQgEgCgHAAQgMABgFAHQgGAIAAALIAAAyg");
	this.shape_46.setTransform(-245.9,-38.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_47.setTransform(-255.6,-38.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAkBAIAAg5IhHAAIAAA5IgSAAIAAh/IASAAIAAA3IBHAAIAAg3IASAAIAAB/g");
	this.shape_48.setTransform(-267.7,-40.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABALAQQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_49.setTransform(97.9,120.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABALAQQAMARAAAfQAAAggMARQgLARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_50.setTransform(87.1,120.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVgBQAWABAMAQQALARAAAfQAAAggLARQgMARgWAAQgVgBgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_51.setTransform(76.3,120.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAMBAIAAgcIg5AAIAAgLIA8hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_52.setTransform(61,120.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_53.setTransform(47.8,120.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAjBAIgQgqQgDgIgFgEQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAIQgHAIgMAEQAFAAAEAEQAEAFADAHIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_54.setTransform(34.3,120.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAALAQQAMAQAAAgQAAAggMAQQgLASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_55.setTransform(97.9,80.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAALAQQAMAQAAAgQAAAggMAQQgLASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_56.setTransform(87.1,80.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAggAMgQQALgQAVAAQAWAAAMAQQALAQAAAgQAAAggLAQQgMASgWgBQgVAAgLgQgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_57.setTransform(76.3,80.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_58.setTransform(60.6,80.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqhdIAABdIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_59.setTransform(47.8,80.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAjBAIgQgrQgDgIgFgDQgFgCgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAASQAAAMgGAIQgHAIgMAEQAFABAEADQAEAEADAHIAQAsgAgjgDIAjAAQAdAAAAgYQAAgMgHgGQgIgGgOAAIgjAAg");
	this.shape_60.setTransform(34.3,80.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAALAQQAMARAAAfQAAAggMAQQgLARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_61.setTransform(97.9,39.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAALAQQAMARAAAfQAAAggMAQQgLARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_62.setTransform(87.1,39.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgQAVAAQAWAAAMAQQALARAAAfQAAAggLAQQgMARgWAAQgVAAgLgQgAgVgnQgIAMAAAbQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgbgHgMQgIgNgPAAQgPAAgGANg");
	this.shape_63.setTransform(76.3,39.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AghBAIA7hzIhEAAIAAgMIBVAAIAAALIg8B0g");
	this.shape_64.setTransform(60.8,39.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBtIAwhtIANAAIAAB/g");
	this.shape_65.setTransform(47.8,39.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAjBAIgQgrQgDgHgFgDQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAASQAAAMgGAIQgHAIgMAEQAFABAEAEQAEAEADAGIAQAsgAgjgDIAjAAQAdAAAAgYQAAgMgHgGQgIgGgOAAIgjAAg");
	this.shape_66.setTransform(34.3,39.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_67.setTransform(97.9,-0.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAALARQAMARAAAfQAAAggMARQgLAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_68.setTransform(87.1,-0.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AggAxQgMgRAAggQAAgfAMgRQALgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgLgRgAgVgnQgIANAAAaQAAAbAIANQAGANAPAAQAPAAAIgNQAHgNAAgbQAAgagHgNQgIgNgPAAQgPAAgGANg");
	this.shape_69.setTransform(76.3,-0.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgXA9QgLgEgIgIIAGgMQASAPASAAQANABAHgJQAIgHAAgNQAAgNgIgHQgHgHgNAAQgRAAgLANIgKAAIAAhKIBMAAIAAAMIg9AAIAAAuQAKgKAQAAQAMAAAJAFQAJAGAFAHQAFAKAAAMQAAAMgGAJQgFAJgKAGQgKAEgMAAQgLAAgMgDg");
	this.shape_70.setTransform(61.1,-0.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAvBAIAAheIgqBeIgJAAIgqheIAABeIgOAAIAAh/IANAAIAvBuIAwhuIANAAIAAB/g");
	this.shape_71.setTransform(47.8,-0.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAjBAIgQgrQgDgIgFgCQgFgDgJAAIggAAIAAA4IgOAAIAAh/IAyAAQAUAAALAJQALAJAAARQAAANgGAJQgHAHgMAEQAFAAAEAFQAEADADAIIAQArgAgjgDIAjAAQAdAAAAgZQAAgLgHgGQgIgGgOAAIgjAAg");
	this.shape_72.setTransform(34.3,-0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAXAvIAAg3QAAgMgFgFQgEgFgKgBQgLAAgHAIQgGAHgBAMIAAAzIgRAAIAAhBQgBgOgBgLIARAAIACAPQADgIAJgFQAIgFAJAAQAhAAAAAlIAAA4g");
	this.shape_73.setTransform(108.4,-38.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_74.setTransform(97.3,-38.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_75.setTransform(89.9,-40.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_76.setTransform(81.9,-38.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgnAKIAAg3IATAAIAAA3QAAALAEAFQAFAFAJAAQAKAAAHgHQAHgHAAgMIAAgyIASAAIAABaIgSAAIAAgPQgEAIgIAEQgHAEgJAAQghAAAAgkg");
	this.shape_77.setTransform(71.4,-38.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgXBPIAAgPIANABQAJAAADgFQADgEAAgMIAAh8IATAAIAAB8QAAATgHAJQgIAJgQAAIgQgCg");
	this.shape_78.setTransform(62.3,-38.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgIBBIAAhZIARAAIAABZgAgKgtIAAgTIAVAAIAAATg");
	this.shape_79.setTransform(52.9,-40.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_80.setTransform(45,-38.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgIBCIAAiDIARAAIAACDg");
	this.shape_81.setTransform(37.6,-40.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgIBBIAAhZIARAAIAABZgAgKgtIAAgTIAVAAIAAATg");
	this.shape_82.setTransform(33.1,-40.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAnBAIhJhgIAABgIgSAAIAAh/IAOAAIBJBgIAAhgIARAAIAAB/g");
	this.shape_83.setTransform(24.1,-40.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_84.setTransform(-53.5,124.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_85.setTransform(-62.5,120.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgWA9QgMgEgIgHIAGgMQASAPASAAQAOAAAHgGQAHgGAAgMQAAgYgcAAIgPAAIAAgLIAMAAQANAAAHgGQAIgHAAgLQAAgLgGgFQgGgGgMAAQgRAAgSAPIgGgLQAIgIALgEQALgEAMAAQARAAAKAIQALAJAAAPQAAALgGAIQgFAJgKADQAMADAGAHQAGAIAAANQAAAQgMAKQgLAJgUAAQgLAAgLgEg");
	this.shape_86.setTransform(-78.2,120.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_87.setTransform(-53.5,83.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_88.setTransform(-62.5,79.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgfAYIAsAAIAAg+g");
	this.shape_89.setTransform(-77.8,80.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_90.setTransform(-53.5,43.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_91.setTransform(-62.5,39.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgXA8QgLgDgIgIIAGgLQASAPASgBQANABAHgJQAIgHAAgNQAAgNgIgHQgHgIgNABQgRgBgLAPIgKAAIAAhLIBMAAIAAANIg9AAIAAAuQAKgLAQAAQAMAAAJAFQAJAFAFAJQAFAIAAAMQAAANgGAJQgFAKgKAEQgKAFgMABQgLgBgMgEg");
	this.shape_92.setTransform(-77.7,40);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AghA5IADgMIAQAHQAIACAIAAQAOAAAGgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgLAKgUAAQgUAAgPgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIAMAAQANAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgNAAQgMAAgHAJg");
	this.shape_93.setTransform(-48.1,3.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIAqgoIATAAIgtAqIAxAvg");
	this.shape_94.setTransform(-57.1,-0.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AghAxQgLgRAAggQAAgfALgRQAMgRAVAAQAWAAAMARQALARAAAfQAAAggLARQgMAQgWABQgVAAgMgRgAgWgnQgHANAAAaQAAAbAHANQAIANAOAAQAPAAAHgNQAIgNAAgbQAAgagIgNQgHgNgPAAQgOAAgIANg");
	this.shape_95.setTransform(-72.6,-0.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgjBAIAAgNIAdAAIAAhgIgbARIAAgOIAhgVIAIAAIAAByIAcAAIAAANg");
	this.shape_96.setTransform(-82.9,-0.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgSAAIAAgOIASAAIAAgXIARgGIAAAdIAZAAIAAAOIgZAAIAAAsQAAAJAFAEQADAEAIAAQAEAAAFgBIAAAPQgFABgJAAQgOAAgGgHg");
	this.shape_97.setTransform(-45.8,-40);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAqQgJgHgFgKQgFgKAAgPQAAgMAFgLQAFgLAJgGQAJgGAMAAQAJAAAIAEQAIAFAEAIIAAgPIASAAIAABaIgSAAIAAgQQgEAJgIAEQgIAEgJAAQgMAAgJgFgAgSgXQgHAJAAAOQAAAQAHAJQAHAIALAAQANAAAGgIQAHgJAAgQQAAgOgHgJQgGgJgNAAQgLABgHAIg");
	this.shape_98.setTransform(-54.7,-38.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgBgLIARAAIABAQQAEgJAGgEQAIgFAJgBIAJACIAAAQQgFgCgGAAQgMABgGAHQgGAIAAALIAAAyg");
	this.shape_99.setTransform(-62.7,-38.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_100.setTransform(-71.5,-38.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgwBAIAAh/IA0AAQAUAAALAJQALAIAAARQAAAJgFAIQgFAIgKADQALACAGAIQAGAIAAAMQAAAQgLAKQgLAJgVAAgAgeAxIAiAAQAOAAAHgFQAGgFAAgLQAAgLgGgGQgHgEgOAAIgiAAgAgegIIAfAAQAbABAAgVQAAgUgbAAIgfAAg");
	this.shape_101.setTransform(-82.4,-40.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgKAAQgMAAgIAIQgIAHABANIAAAzIgPAAIAAhAQAAgOgBgLIANAAIACAQQAEgJAJgFQAHgEAKAAQAhAAAAAjIAAA4g");
	this.shape_102.setTransform(-165,162.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_103.setTransform(-175.3,162.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQADgKAJgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKgBAOQABAOgGAKQgEAKgJAGQgKAGgMAAQgKAAgIgFQgHgEgFgJIAAA4gAgTgsQgHAJgBARQABARAHAIQAHAJAMAAQAOAAAHgJQAIgIgBgRQABgQgIgJQgIgKgNAAQgMAAgHAJg");
	this.shape_104.setTransform(-185.7,164.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAkBAIgkhoIgjBoIgNAAIgth/IAPAAIAkBqIAlhqIALAAIAlBqIAlhqIAOAAIgtB/g");
	this.shape_105.setTransform(-221.9,160.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_106.setTransform(-159.7,122.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgRApQgJgGgFgKQgGgLAAgOQAAgNAGgKQAFgLAKgGQAKgGAMAAQAJAAAJADQAIADAGAGIgFALQgGgGgHgCQgGgDgHAAQgNAAgIAKQgIAJAAAPQAAARAIAJQAIAJANAAQAHAAAGgDQAHgCAGgGIAFALQgFAGgKADQgIADgKAAQgMAAgKgGg");
	this.shape_107.setTransform(-174.7,122.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgJBDIAAhPIgSAAIAAgLIASAAIAAgOQAAgOAGgHQAHgIANAAIALACIAAANIgJgCQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAALIgWAAIAABPg");
	this.shape_108.setTransform(-193.2,120.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_109.setTransform(-209.2,120.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_110.setTransform(-214.9,122.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_111.setTransform(-181.8,82);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAKAAIAIABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_112.setTransform(-188.9,81.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgGAtIgnhZIAQAAIAdBJIAfhJIAPAAIgnBZg");
	this.shape_113.setTransform(-207.3,82);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_114.setTransform(-218.5,80.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgvAxIAGgLQAJAIAKAEQAKADAMAAQAQAAAIgGQAJgGAAgLQAAgGgEgFQgEgEgHgCIgSgFQgNgDgKgEQgJgDgGgHQgGgHAAgLQAAgLAFgJQAGgIALgFQAKgFANABQAOAAALADQAMAFAIAIIgGALQgJgIgJgDQgKgEgLAAQgOAAgIAHQgJAGAAALQAAAKAIAEQAHAGAPADIAaAGQAJADAGAHQAHAHAAALQAAALgGAIQgGAJgLAEQgKAFgPgBQgdAAgSgQg");
	this.shape_115.setTransform(-226.3,80.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgHQAJgIAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_116.setTransform(-151.5,41.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_117.setTransform(-161.6,39.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgVApQgLgGgFgKQgFgLAAgOQAAgNAFgLQAFgKALgGQAJgGAMAAQANAAAKAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgKAGgNAAQgMAAgJgGgAgUgZQgHAJAAAQQAAARAHAJQAIAJAMAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_118.setTransform(-182.4,41.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ag1BAIAAh/IArAAQAeAAARARQARAQAAAeQAAAfgRAQQgRARgeAAgAgmA0IAbAAQAYAAANgOQAMgNAAgZQAAgygxgBIgbAAg");
	this.shape_119.setTransform(-225,39.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_120.setTransform(-199.1,-0.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_121.setTransform(-206.4,-0.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgWApQgKgGgFgKQgFgLAAgOQAAgNAFgLQAFgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_122.setTransform(-213.6,1.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgXA6QgOgIgIgPQgHgPAAgUQAAgTAHgPQAIgPAOgIQANgHARgBQAOAAALAFQAMAEAHAHIgFAMQgKgIgJgEQgIgDgMAAQgUAAgMANQgMAOAAAZQABAaAMANQALAOAWAAQAQAAAPgFIAAgnIggAAIAAgLIAtAAIAAA7QgIADgMADQgMACgNABQgRAAgOgIg");
	this.shape_123.setTransform(-225.5,-0.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgkAjIAFgMQAOAKASABQAKAAAEgEQAFgDAAgGQAAgEgDgDQgDgDgJgCIgNgDQgNgDgFgFQgHgHAAgJQAAgNAKgHQAJgIAQAAQAJAAAJADQAJADAGAGIgGANQgMgLgPAAQgIAAgFAEQgEADAAAGQAAAEACAEQADACAHACIAOAEQANACAHAGQAGAGAAAKQAAAMgKAHQgJAHgRAAQgXAAgOgMg");
	this.shape_124.setTransform(-185.2,-38.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgkAjIAGgMQANAKASABQAJAAAGgEQAEgDAAgGQAAgEgDgDQgEgDgHgCIgPgDQgLgDgHgFQgGgHAAgJQAAgNAKgHQAKgIAPAAQAKAAAIADQAJADAGAGIgGANQgNgLgOAAQgIAAgEAEQgFADgBAGQAAAEAEAEQADACAGACIAOAEQAOACAGAGQAGAGAAAKQAAAMgKAHQgKAHgRAAQgWAAgOgMg");
	this.shape_125.setTransform(-221.2,-38.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_126.setTransform(-241.5,-38.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgZAvIAAhBQAAgOgCgLIASAAIABAQQADgJAHgEQAHgFAKgBIAIACIAAAQQgFgCgFAAQgMABgGAHQgGAIAAALIAAAyg");
	this.shape_127.setTransform(-249.2,-38.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgIBAIAAhvIgsAAIAAgQIBpAAIAAAQIgsAAIAABvg");
	this.shape_128.setTransform(-258.7,-40.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_129.setTransform(104,-38.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgHAtIgnhZIATAAIAbBFIAdhFIASAAIgnBZg");
	this.shape_130.setTransform(68.4,-38.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_131.setTransform(53.8,-38.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgbA+QgMgEgJgIIAHgOQAJAIAKADQAKAEAMAAQAOAAAIgGQAIgGAAgKQAAgHgHgFQgIgEgPgEQgPgDgKgEQgJgEgGgHQgGgHAAgLQAAgLAGgIQAGgJALgFQALgFANABQAOAAAMADQALAFAIAIIgGANQgJgHgKgEQgJgEgLAAQgMABgIAFQgIAHAAAKQAAAIAHAEQAHAFAOADQAQAEAKADQAKAEAGAHQAGAHAAAKQAAALgGAJQgGAJgLAEQgLAFgPgBQgOAAgNgDg");
	this.shape_132.setTransform(27.8,-40.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgEA1QgIgIAAgPIAAguIgRAAIAAgOIARAAIAAgXIASgGIAAAdIAYAAIAAAOIgYAAIAAAsQAAAJADAEQAEAEAHAAQAGAAAEgBIAAAPQgGABgHAAQgOAAgHgHg");
	this.shape_133.setTransform(-37.7,-40);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAWBCIAAg3QAAgLgEgFQgFgGgKAAQgLAAgHAHQgGAHAAAMIAAAzIgSAAIAAiDIASAAIAAA4QAEgIAIgFQAIgEAJAAQAgAAAAAkIAAA4g");
	this.shape_134.setTransform(-46.1,-40.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgiA5IADgNQAIAEAJACQAHACAIAAQAZAAAAgZIAAgVQgDAJgJAEQgIAFgJAAQgMAAgJgGQgKgFgFgLQgEgJgBgNQABgNAEgLQAFgKAKgGQAJgFAMgBQAJAAAIAFQAJAFADAHIAAgOIASAAIAABYQAAAVgLAKQgLAKgUAAQgVABgPgKgAgSgqQgHAHAAAPQAAAOAHAHQAHAIALAAQAMAAAIgIQAGgHAAgOQAAgPgGgHQgIgJgMAAQgLAAgHAJg");
	this.shape_135.setTransform(-57.2,-36.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgcAjQgMgMAAgXQAAgMAFgLQAGgLAKgGQAJgGAMAAQASAAALAMQAKAMAAAVIAAACIg/AAQABAgAbAAQAPAAANgKIAGAMQgGAGgKADQgJADgKAAQgUAAgNgMgAgNgbQgHAHgCALIAvAAQgBgLgGgHQgGgFgKgBQgJABgGAFg");
	this.shape_136.setTransform(-71.8,-38.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAjBAIgjhiIgiBiIgPAAIgth/IATAAIAiBkIAkhkIAMAAIAjBlIAjhlIASAAIgtB/g");
	this.shape_137.setTransform(-86.8,-40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100,p:{x:-71.5}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:-62.5,y:79.9}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{y:120.2}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:37.6}},{t:this.shape_80},{t:this.shape_79,p:{x:52.9}},{t:this.shape_78},{t:this.shape_77,p:{x:71.4}},{t:this.shape_76},{t:this.shape_75,p:{x:89.9}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-255.6}},{t:this.shape_46,p:{x:-245.9}},{t:this.shape_45},{t:this.shape_44,p:{x:-231.3}},{t:this.shape_43},{t:this.shape_42,p:{x:-203.9}},{t:this.shape_41},{t:this.shape_40,p:{x:-186.2}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-213.5,y:1.4}},{t:this.shape_36},{t:this.shape_35,p:{x:-190.4,y:1.5}},{t:this.shape_34},{t:this.shape_33,p:{x:-214.8,y:41.7}},{t:this.shape_32},{t:this.shape_31,p:{x:-201.3,y:39.7}},{t:this.shape_30,p:{x:-197}},{t:this.shape_29},{t:this.shape_28,p:{x:-178.8}},{t:this.shape_27},{t:this.shape_26,p:{x:-215.4,y:82}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-187.8}},{t:this.shape_22,p:{x:-225.4}},{t:this.shape_21},{t:this.shape_20,p:{x:-209.3}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-190.6,y:122.2}},{t:this.shape_16,p:{x:-179.5}},{t:this.shape_15},{t:this.shape_14,p:{x:-215.9}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-191,y:162.5}},{t:this.shape_10},{t:this.shape_9,p:{x:-173.9}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_79,p:{x:-64.7}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_96},{t:this.shape_95},{t:this.shape_88,p:{x:-57.1,y:-0.6}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_85,p:{y:39.7}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_23,p:{x:-62.5}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_16,p:{x:-62.5}},{t:this.shape_84},{t:this.shape_132},{t:this.shape_47,p:{x:38.7}},{t:this.shape_81,p:{x:46.7}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_44,p:{x:78.4}},{t:this.shape_75,p:{x:86.4}},{t:this.shape_77,p:{x:93.8}},{t:this.shape_129},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_42,p:{x:-231.4}},{t:this.shape_125},{t:this.shape_40,p:{x:-211.5}},{t:this.shape_46,p:{x:-202.2}},{t:this.shape_100,p:{x:-194.5}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_30,p:{x:-216.3}},{t:this.shape_17,p:{x:-209.1,y:41.7}},{t:this.shape_37,p:{x:-195.5,y:41.7}},{t:this.shape_118},{t:this.shape_28,p:{x:-172.1}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_31,p:{x:-214.3,y:79.9}},{t:this.shape_113},{t:this.shape_33,p:{x:-197.6,y:82}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_22,p:{x:-225.3}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_26,p:{x:-201,y:122.2}},{t:this.shape_108},{t:this.shape_11,p:{x:-185,y:122.2}},{t:this.shape_107},{t:this.shape_20,p:{x:-167.4}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_14,p:{x:-207}},{t:this.shape_9,p:{x:-197}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_35,p:{x:-155.2,y:162.5}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FCE3A8").s().p("AOPQAIAA//IT+AAIAAf/gAmOQAIAA//IT9AAIAAf/gEgiMAQAIAA//IbeAAIAAf/g");
	this.shape_138.setTransform(-89.5,79.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFC133").s().p("AOPCbIAAk1IT+AAIAAE1gAmOCbIAAk1IT9AAIAAE1gEgiMACbIAAk1IbeAAIAAE1g");
	this.shape_139.setTransform(-89.5,-41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_139},{t:this.shape_138}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-308.4,-56.8,437.8,239.1);


(lib.posMarker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.posMarker, null, null);


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
	this.shape.setTransform(263.9,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(257.4,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_2.setTransform(248.1,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(241.1,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_4.setTransform(232.7,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_5.setTransform(224.7,21.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_6.setTransform(210.6,23.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgFACgHAAQgLAAgGgHg");
	this.shape_7.setTransform(203.2,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_8.setTransform(198.1,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(189.6,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_10.setTransform(180.4,21.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(169.6,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_12.setTransform(164.8,22.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(157.8,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_14.setTransform(148.8,25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(132.5,23.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_16.setTransform(120.5,23.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_17.setTransform(114.1,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_18.setTransform(107.1,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(97.5,21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(84.4,23.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_21.setTransform(76.6,21.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_22.setTransform(62.6,23.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_23.setTransform(55.1,22.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_24.setTransform(50,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(41.6,23.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_26.setTransform(32.4,21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_27.setTransform(20.6,22.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(13.5,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_29.setTransform(6.8,23.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_30.setTransform(-1,23.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAIAHIgGAKQgIgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_31.setTransform(-10.3,21.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAbIAAgDQAAgLADgGQAEgHAGgIIAIgLQACgGAAgFQAAgHgEgFQgFgDgIAAQgLAAgLAGIAAgMIALgEIAMgBQANAAAIAGQAJAIAAAKQAAAGgCAGIgFAJIgIAJQgHAGgDAHQgDAGgBAIIAAACg");
	this.shape_32.setTransform(-22.6,21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-31.4,23.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(-41,23.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_35.setTransform(-47.5,21.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_36.setTransform(-54.4,23.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_37.setTransform(-63.6,23.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_38.setTransform(-71.1,23.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-76.8,23.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(-85.7,23.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_41.setTransform(-94.7,25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_42.setTransform(-105.8,21.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(-112.7,23.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_44.setTransform(-119.2,21.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_45.setTransform(-123,21.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(-129.6,23.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(319.2,-0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_48.setTransform(309.6,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_49.setTransform(301.6,-2.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_50.setTransform(289.7,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgGAEgIAAQgOAAgIgIg");
	this.shape_51.setTransform(278.1,-0.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_52.setTransform(266.4,-0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_53.setTransform(257.5,-2.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_54.setTransform(251.6,-0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_55.setTransform(244.2,-2.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_56.setTransform(234.4,-0.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_57.setTransform(222.7,-0.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_58.setTransform(211.4,-0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_59.setTransform(200,-0.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AASA7IgognIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_60.setTransform(185.4,-2.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_61.setTransform(175.9,-0.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_62.setTransform(168.4,-1.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_63.setTransform(161,-0.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_64.setTransform(151.7,-0.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_65.setTransform(141,-2.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_66.setTransform(137.2,-2.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_67.setTransform(130.8,-2.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_68.setTransform(118.6,-0.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_69.setTransform(106.6,-0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_70.setTransform(93.8,-0.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_71.setTransform(85.3,-0.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_72.setTransform(78.3,-0.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_73.setTransform(69.8,-0.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_74.setTransform(60.6,-2.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_75.setTransform(46.7,-0.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_76.setTransform(37.1,-2.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_77.setTransform(27.8,-0.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_78.setTransform(18.1,-0.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_79.setTransform(4.3,1.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_80.setTransform(-5,-0.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_81.setTransform(-14.7,-0.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_82.setTransform(-23.5,1.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_83.setTransform(-37,-0.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_84.setTransform(-44.4,-1.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_85.setTransform(-49.5,-0.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_86.setTransform(-58,-0.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_87.setTransform(-67.2,-2.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_88.setTransform(-80.7,-2.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_89.setTransform(-90.5,-0.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_90.setTransform(-98.5,-2.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_91.setTransform(-108.3,-0.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_92.setTransform(-117.5,1.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_93.setTransform(-128.4,-2.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_94.setTransform(173.2,22.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_95.setTransform(140.7,23.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_96.setTransform(113.3,23.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_97.setTransform(95.7,23.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgFAAQgMAAgGgHg");
	this.shape_98.setTransform(73.7,22.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_99.setTransform(53.5,21.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_100.setTransform(45.9,22.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_101.setTransform(34.4,23.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgFAAQgMAAgGgHg");
	this.shape_102.setTransform(26.9,22.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_103.setTransform(2.8,23.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_104.setTransform(-28.9,23.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_105.setTransform(-59.8,22.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_106.setTransform(-71,23.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_107.setTransform(-80,21.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_108.setTransform(-99.6,25.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgMQALgLAAgXQAAgsgrAAIgZAAg");
	this.shape_109.setTransform(-125.4,21.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgGQAAgHgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape_110.setTransform(314.8,-2.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_111.setTransform(306.4,-0.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_112.setTransform(297.4,-0.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_113.setTransform(275.2,-0.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_114.setTransform(262.4,-0.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_115.setTransform(240.6,-0.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_116.setTransform(228.1,-0.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_117.setTransform(200.3,-0.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_118.setTransform(191.9,-0.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_119.setTransform(162,-0.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_120.setTransform(125.3,-0.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_121.setTransform(117.9,-1.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_122.setTransform(106.6,-0.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_123.setTransform(98.8,-2.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_124.setTransform(81.5,-1.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_125.setTransform(70,-0.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_126.setTransform(60.8,-0.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgjAwQALgDAGgDQAFgFAFgJIACgHIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_127.setTransform(52,1.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_128.setTransform(16.3,-0.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_129.setTransform(-1.7,-0.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_130.setTransform(-13.8,-0.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_131.setTransform(-22.1,-0.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_132.setTransform(-36.9,-0.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_133.setTransform(-45.5,-0.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_134.setTransform(-54.5,-0.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_135.setTransform(-63.4,-0.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_136.setTransform(-70.1,-0.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_137.setTransform(-76.4,-1.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_138.setTransform(-88,-2.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_139.setTransform(-96.5,-0.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AAgA5IgghdIggBdIgKAAIgphxIAOAAIAgBeIAhheIAJABIAhBdIAhheIAMAAIgnBxg");
	this.shape_140.setTransform(-122.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:-90.5,y:-0.6}},{t:this.shape_88,p:{x:-80.7,y:-2.4}},{t:this.shape_87,p:{x:-67.2}},{t:this.shape_86},{t:this.shape_85,p:{x:-49.5}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:18.1,y:-0.6}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:46.7}},{t:this.shape_74,p:{x:60.6}},{t:this.shape_73},{t:this.shape_72,p:{x:78.3,y:-0.6}},{t:this.shape_71,p:{x:85.3,y:-0.5}},{t:this.shape_70,p:{x:93.8,y:-0.6}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:141}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:168.4}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:211.4,y:-0.6}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:251.6,y:-0.6}},{t:this.shape_53,p:{x:257.5}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:289.7}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:-123,y:21.7}},{t:this.shape_44,p:{x:-119.2,y:21.5}},{t:this.shape_43,p:{x:-112.7,y:23.3}},{t:this.shape_42,p:{x:-105.8,y:21.7}},{t:this.shape_41},{t:this.shape_40,p:{x:-85.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-1}},{t:this.shape_29,p:{x:6.8}},{t:this.shape_28,p:{x:13.5}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:50}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:84.4}},{t:this.shape_19,p:{x:97.5,y:21.6}},{t:this.shape_18},{t:this.shape_17,p:{x:114.1,y:21.5}},{t:this.shape_16},{t:this.shape_15,p:{x:132.5,y:23.3}},{t:this.shape_14},{t:this.shape_13,p:{x:157.8}},{t:this.shape_12,p:{x:164.8}},{t:this.shape_11,p:{x:169.6}},{t:this.shape_10,p:{x:180.4,y:21.5}},{t:this.shape_9,p:{x:189.6,y:23.3}},{t:this.shape_8,p:{x:198.1}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:232.7,y:23.3}},{t:this.shape_3,p:{x:241.1}},{t:this.shape_2,p:{x:248.1,y:23.4}},{t:this.shape_1,p:{x:257.4}},{t:this.shape,p:{x:263.9}}]}).to({state:[{t:this.shape_140},{t:this.shape_87,p:{x:-109}},{t:this.shape_53,p:{x:-102.5}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_85,p:{x:-28.8}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_74,p:{x:7.1}},{t:this.shape_128},{t:this.shape_2,p:{x:25.5,y:-0.5}},{t:this.shape_65,p:{x:32}},{t:this.shape_19,p:{x:38.5,y:-2.3}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_75,p:{x:89}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_50,p:{x:141.1}},{t:this.shape_9,p:{x:152.7,y:-0.6}},{t:this.shape_119},{t:this.shape_45,p:{x:168.2,y:-2.2}},{t:this.shape_15,p:{x:177.1,y:-0.6}},{t:this.shape_42,p:{x:186.1,y:-2.2}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_62,p:{x:211.5}},{t:this.shape_10,p:{x:219.1,y:-2.4}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_43,p:{x:249.2,y:-0.6}},{t:this.shape_44,p:{x:256.1,y:-2.4}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_4,p:{x:284,y:-0.6}},{t:this.shape_17,p:{x:290.9,y:-2.4}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_72,p:{x:-116.2,y:23.3}},{t:this.shape_78,p:{x:-109.2,y:23.3}},{t:this.shape_108},{t:this.shape_12,p:{x:-87.6}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_29,p:{x:-53.5}},{t:this.shape_58,p:{x:-46.7,y:23.3}},{t:this.shape_89,p:{x:-37.8,y:23.3}},{t:this.shape_104},{t:this.shape_71,p:{x:-20.2,y:23.4}},{t:this.shape_24,p:{x:-12.2}},{t:this.shape_40,p:{x:-5.4}},{t:this.shape_103},{t:this.shape_11,p:{x:13}},{t:this.shape_1,p:{x:19.5}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_30,p:{x:62.5}},{t:this.shape_98},{t:this.shape_8,p:{x:80}},{t:this.shape_28,p:{x:86.8}},{t:this.shape_97},{t:this.shape_70,p:{x:104.6,y:23.3}},{t:this.shape_96},{t:this.shape_3,p:{x:121.3}},{t:this.shape_20,p:{x:128.1}},{t:this.shape_95},{t:this.shape_88,p:{x:149.2,y:21.5}},{t:this.shape_13,p:{x:158.2}},{t:this.shape_54,p:{x:166.5,y:23.3}},{t:this.shape_94},{t:this.shape,p:{x:177.9}}]},1).wait(1));

	// outlineshade
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#D40000").ss(4,2,0,3).p("EAmuAAAMguoAAAI+zAA");
	this.shape_141.setTransform(89.1,42);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#D40000").ss(1,2,0,3).p("EgnNAE4IAnlWIBXhQIhIhQIALh6IdyAAMAvoAAAIhBJw");
	this.shape_142.setTransform(92.3,10.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F5F5F5").s().p("AvYE4IAmlWIBYhQIhIhQIALh5IdxAAIAAJvg");
	this.shape_143.setTransform(-60.1,10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]}).wait(2));

	// white
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FAFAFA").s().p("AoYE4I+zAAIAnlWIBYhQIhJhQIALh5IdyAAMAvkAAAIhBJvg");
	this.shape_144.setTransform(92.1,10.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_144).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.7,-21.6,505.2,65.6);


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


(lib.Gfx_Weapon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap11();
	this.instance.parent = this;
	this.instance.setTransform(-29.2,-9.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.2,-9.9,58,20);


(lib.Gfx_Silver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-19.1,-14.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gfx_Silver, new cjs.Rectangle(-19.1,-14.9,38,30), null);


(lib.Gfx_Gold = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-20.3,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.3,-14.5,41,29);


(lib.Gfx_Diamond = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-16.5,-11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Gfx_Diamond, new cjs.Rectangle(-16.5,-11,33,23), null);


(lib.Gfx_Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_4
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-114.1,-99.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_3
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-137.5,-137.5);

	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-137.5,-137.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.5,-137.5,275,275);


(lib.Gfx_Artefact = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap10();
	this.instance.parent = this;
	this.instance.setTransform(-22.2,-15.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-15.3,44,31);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,520.8,88.9);


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
	this.instance_3 = new lib.Symbol1_1();
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
	this.frame_89 = function() {
		this.stop();
		this.parent.onTimeEnd();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(88).call(this.frame_89).wait(1));

	// anim
	this.instance = new lib.timesUpAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(89));

	// black
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,0,0,0.996)").s().p("AhyCMQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAAgKQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAPAAQAAgpAQgfQARggAagQQgagQgRgfQgQgfAAgpIgPAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgKQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIDlAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAKQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgPAAQAAApgQAfQgRAfgZAQQAZAQARAgQAQAfAAApIAPAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAAKQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAhKhQQAGATAJAPQAJAOALAJQAMAKALAFQAEAAABADQACADAAACQAAADgCADQgBADgEAAQgVAJgRAWIBsAAQgQgWgWgJQgDAAgBgDQgCgDAAgDQAAgCACgDQABgDADAAQAMgFAMgKQALgJAJgOQAJgPAGgTQAFgSAAgVIifAAQAAAVAFASg");
	this.shape.setTransform(-73.5,92.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.698)").s().p("EhBvAyxMAAAhlhMCDgAAAMAAABlhg");
	this.shape_1.setTransform(402.9,308.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(89));

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


(lib.actMc1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var maxItem = 5;
		//var maxBlanks = 5;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.cAns = true;
		this.item2.cAns = true;
		this.item3.cAns = true;
		this.item4.cAns = false;
		this.item5.cAns = true;
		this.item1.ansStr="gold";
		this.item2.ansStr="diamond";
		this.item3.ansStr="silver";
		this.item4.ansStr="artefact";
		this.item5.ansStr="weapon";	
				
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].userAns = false;
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
			this["item"+i].cursor = "pointer";
		}
		for (i=1; i<=maxItem; i++){
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(this, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				this.x = point.x;
				this.y = point.y;
						
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					_this.dArea.gotoAndStop(1);
				} else {
					_this.dArea.gotoAndStop(0);
				}
				this.userAns=false;
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					this.x = _this["pos"+this.itemNum].x;
					this.y = _this["pos"+this.itemNum].y;
					this.userAns = true;
				} else {
					this.userAns = false;
					this.x = this.initX;
					this.y = this.initY;
					
				}
				_this.updateAll();
				_this.dArea.gotoAndStop(0);
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
			if (doneCount>0){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = "";
			for (i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns){
					_userAns += _this["item"+i].ansStr;
				}
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
	this.btnSubmit.setTransform(400.9,538.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// item
	this.item5 = new lib.Gfx_Weapon();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(117.2,485);

	this.item4 = new lib.Gfx_Artefact();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(117.2,445.7);

	this.item3 = new lib.Gfx_Silver();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(117.2,401.4);

	this.item2 = new lib.Gfx_Diamond();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(117.2,362.5,1,1,0,0,0,0,1.2);

	this.item1 = new lib.Gfx_Gold();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(117.2,321.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5}]}).wait(1));

	// pos
	this.pos3 = new lib.posMarker();
	this.pos3.name = "pos3";
	this.pos3.parent = this;
	this.pos3.setTransform(588.9,433.4);

	this.pos5 = new lib.posMarker();
	this.pos5.name = "pos5";
	this.pos5.parent = this;
	this.pos5.setTransform(611.9,407);

	this.pos2 = new lib.posMarker();
	this.pos2.name = "pos2";
	this.pos2.parent = this;
	this.pos2.setTransform(681.9,413);

	this.pos4 = new lib.posMarker();
	this.pos4.name = "pos4";
	this.pos4.parent = this;
	this.pos4.setTransform(649.9,435.2);

	this.pos1 = new lib.posMarker();
	this.pos1.name = "pos1";
	this.pos1.parent = this;
	this.pos1.setTransform(703.4,434.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos1},{t:this.pos4},{t:this.pos2},{t:this.pos5},{t:this.pos3}]}).wait(1));

	// dArea
	this.dArea = new lib.Gfx_Box();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(645.1,383.3);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(386.3,321.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_3, new cjs.Rectangle(77.9,245.8,704.7,315.2), null);


(lib.actMc1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var maxItem = 5;
		//var maxBlanks = 5;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.cAns = true;
		this.item2.cAns = true;
		this.item3.cAns = true;
		this.item4.cAns = true;
		this.item5.cAns = false;
		this.item1.ansStr="gold";
		this.item2.ansStr="diamond";
		this.item3.ansStr="silver";
		this.item4.ansStr="artefact";
		this.item5.ansStr="weapon";	
				
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].userAns = false;
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
			this["item"+i].cursor = "pointer";
		}
		for (i=1; i<=maxItem; i++){
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(this, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				this.x = point.x;
				this.y = point.y;
						
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					_this.dArea.gotoAndStop(1);
				} else {
					_this.dArea.gotoAndStop(0);
				}
				this.userAns=false;
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					this.x = _this["pos"+this.itemNum].x;
					this.y = _this["pos"+this.itemNum].y;
					this.userAns = true;
				} else {
					this.userAns = false;
					this.x = this.initX;
					this.y = this.initY;
					
				}
				_this.updateAll();
				_this.dArea.gotoAndStop(0);
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
			if (doneCount>0){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = "";
			for (i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns){
					_userAns += _this["item"+i].ansStr;
				}
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
	this.btnSubmit.setTransform(400.9,538.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// item
	this.item5 = new lib.Gfx_Weapon();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(117.2,485);

	this.item4 = new lib.Gfx_Artefact();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(117.2,445.7);

	this.item3 = new lib.Gfx_Silver();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(117.2,401.4);

	this.item2 = new lib.Gfx_Diamond();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(117.2,362.5,1,1,0,0,0,0,1.2);

	this.item1 = new lib.Gfx_Gold();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(117.2,321.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5}]}).wait(1));

	// pos
	this.pos3 = new lib.posMarker();
	this.pos3.name = "pos3";
	this.pos3.parent = this;
	this.pos3.setTransform(588.9,433.4);

	this.pos5 = new lib.posMarker();
	this.pos5.name = "pos5";
	this.pos5.parent = this;
	this.pos5.setTransform(611.9,407);

	this.pos2 = new lib.posMarker();
	this.pos2.name = "pos2";
	this.pos2.parent = this;
	this.pos2.setTransform(681.9,413);

	this.pos4 = new lib.posMarker();
	this.pos4.name = "pos4";
	this.pos4.parent = this;
	this.pos4.setTransform(649.9,435.2);

	this.pos1 = new lib.posMarker();
	this.pos1.name = "pos1";
	this.pos1.parent = this;
	this.pos1.setTransform(703.4,434.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos1},{t:this.pos4},{t:this.pos2},{t:this.pos5},{t:this.pos3}]}).wait(1));

	// dArea
	this.dArea = new lib.Gfx_Box();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(645.1,383.3);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

	// article
	this.instance = new lib.q2();
	this.instance.parent = this;
	this.instance.setTransform(386.3,321.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_2, new cjs.Rectangle(77.9,245.8,704.7,315.2), null);


(lib.actMc1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var maxItem = 5;
		//var maxBlanks = 5;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.cAns = false;
		this.item2.cAns = true;
		this.item3.cAns = true;
		this.item4.cAns = true;
		this.item5.cAns = true;
		this.item1.ansStr="gold";
		this.item2.ansStr="diamond";
		this.item3.ansStr="silver";
		this.item4.ansStr="artefact";
		this.item5.ansStr="weapon";	
				
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			this["item"+i].userAns = false;
			this["item"+i].initX = this["item"+i].x;
			this["item"+i].initY = this["item"+i].y;
			this["item"+i].cursor = "pointer";
		}
		for (i=1; i<=maxItem; i++){
			_this["item"+i].on("pressmove", function(evt) {
				_this.setChildIndex(this, _this.numChildren-1);
				/* Drag takes the actual position of the mouse pointer  */ 
				var point = stage.globalToLocal(evt.stageX, evt.stageY);
				this.x = point.x;
				this.y = point.y;
						
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					_this.dArea.gotoAndStop(1);
				} else {
					_this.dArea.gotoAndStop(0);
				}
				this.userAns=false;
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					this.x = _this["pos"+this.itemNum].x;
					this.y = _this["pos"+this.itemNum].y;
					this.userAns = true;
				} else {
					this.userAns = false;
					this.x = this.initX;
					this.y = this.initY;
					
				}
				_this.updateAll();
				_this.dArea.gotoAndStop(0);
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
			if (doneCount>0){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = "";
			for (i=1; i<=maxItem; i++){
				if (_this["item"+i].userAns){
					_userAns += _this["item"+i].ansStr + " ";
				}
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
	this.btnSubmit.setTransform(400.9,538.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// item
	this.item5 = new lib.Gfx_Weapon();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(117.2,485);

	this.item4 = new lib.Gfx_Artefact();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(117.2,445.7);

	this.item3 = new lib.Gfx_Silver();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(117.2,401.4);

	this.item2 = new lib.Gfx_Diamond();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(117.2,362.5,1,1,0,0,0,0,1.2);

	this.item1 = new lib.Gfx_Gold();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(117.2,321.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5}]}).wait(1));

	// pos
	this.pos3 = new lib.posMarker();
	this.pos3.name = "pos3";
	this.pos3.parent = this;
	this.pos3.setTransform(588.9,433.4);

	this.pos5 = new lib.posMarker();
	this.pos5.name = "pos5";
	this.pos5.parent = this;
	this.pos5.setTransform(611.9,407);

	this.pos2 = new lib.posMarker();
	this.pos2.name = "pos2";
	this.pos2.parent = this;
	this.pos2.setTransform(681.9,413);

	this.pos4 = new lib.posMarker();
	this.pos4.name = "pos4";
	this.pos4.parent = this;
	this.pos4.setTransform(649.9,435.2);

	this.pos1 = new lib.posMarker();
	this.pos1.name = "pos1";
	this.pos1.parent = this;
	this.pos1.setTransform(703.4,434.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pos1},{t:this.pos4},{t:this.pos2},{t:this.pos5},{t:this.pos3}]}).wait(1));

	// dArea
	this.dArea = new lib.Gfx_Box();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(645.1,383.3);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

	// article
	this.instance = new lib.q1();
	this.instance.parent = this;
	this.instance.setTransform(386.3,321.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_1, new cjs.Rectangle(77.9,245.8,704.7,315.2), null);


// stage content:
(lib.y6s8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:74,q2:118,q3:159,finalFb:200});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed=18;
	}
	this.frame_4 = function() {
		playSound("mdroid_talk");
	}
	this.frame_69 = function() {
		this.stop();
		var _this = this;
		var stageNum = 8;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		//var maxQ = 2;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		//this.qList1 = [0, 1, 2, 3, 4, 5];
		var qItem1 = [{
						"qId": "y6s8_1",
						"qDomain": 2,
						"qParam": 4,
						"qSkill": 17,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s8_2",
						"qDomain": 2,
						"qParam": 4,
						"qSkill": 17,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s8_3",
						"qDomain": 2,
						"qParam": 4,
						"qSkill": 17,
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
			//shuffle and take only what we need
			this.myData.qItem.push(qItem1[randRange(0, 2)]);
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
	this.frame_74 = function() {
		playSound("questionAlert");
	}
	this.frame_112 = function() {
		this.stop();
	}
	this.frame_118 = function() {
		playSound("questionAlert");
	}
	this.frame_153 = function() {
		this.stop();
	}
	this.frame_159 = function() {
		playSound("questionAlert");
	}
	this.frame_194 = function() {
		this.stop();
	}
	this.frame_200 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_371 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(5).call(this.frame_74).wait(38).call(this.frame_112).wait(6).call(this.frame_118).wait(35).call(this.frame_153).wait(6).call(this.frame_159).wait(35).call(this.frame_194).wait(6).call(this.frame_200).wait(171).call(this.frame_371).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(74).to({_off:false},0).wait(298));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(698.2,78.4);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(74).to({_off:false},0).wait(298));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:684.4,y:80.3},16,cjs.Ease.cubicOut).wait(327));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(711.4,192.4,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(69).to({_off:false},0).to({_off:true},5).wait(298));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(444.3,115.9,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},157).wait(172));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(145.4,124.4,0.05,0.05);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1},17,cjs.Ease.elasticOut).to({_off:true},157).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(200).to({graphics:null,x:0,y:0}).wait(172));

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

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(254));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(140).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(172));

	// q
	this.instance_7 = new lib.mcQ7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(415.5,218.5,0.05,0.05);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({scaleX:1,scaleY:1,x:366.3,y:205.5},21,cjs.Ease.elasticOut).wait(23).to({scaleX:0.05,scaleY:0.05,x:415.5,y:218.5},0).to({scaleX:1,scaleY:1,x:366.3,y:205.5},21,cjs.Ease.elasticOut).wait(20).to({scaleX:0.05,scaleY:0.05,x:415.5,y:218.5},0).to({scaleX:1,scaleY:1,x:366.3,y:205.5},21,cjs.Ease.elasticOut).to({_off:true},20).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(346));

	// bg
	this.instance_8 = new lib.Symbol2("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(394.4,296.6);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).to({_off:true},180).wait(172));

	// bg
	this.instance_9 = new lib.Bitmap3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(372));

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
		{src:"images/y6s8/Bitmap1.png?1534936380474", id:"Bitmap1"},
		{src:"images/y6s8/Bitmap10.png?1534936380474", id:"Bitmap10"},
		{src:"images/y6s8/Bitmap11.png?1534936380474", id:"Bitmap11"},
		{src:"images/y6s8/Bitmap19.png?1534936380474", id:"Bitmap19"},
		{src:"images/y6s8/Bitmap2.png?1534936380474", id:"Bitmap2"},
		{src:"images/y6s8/Bitmap22.png?1534936380474", id:"Bitmap22"},
		{src:"images/y6s8/Bitmap3.png?1534936380474", id:"Bitmap3"},
		{src:"images/y6s8/Bitmap4.png?1534936380474", id:"Bitmap4"},
		{src:"images/y6s8/Bitmap5.png?1534936380474", id:"Bitmap5"},
		{src:"images/y6s8/Bitmap6.png?1534936380474", id:"Bitmap6"},
		{src:"images/y6s8/Bitmap7.png?1534936380474", id:"Bitmap7"},
		{src:"images/y6s8/Bitmap9.png?1534936380474", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1534936380474", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1534936380474", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1534936380474", id:"questionComplete"},
		{src:"sounds/submitAns.mp3?1534936380474", id:"submitAns"},
		{src:"sounds/timeout.mp3?1534936380474", id:"timeout"}
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