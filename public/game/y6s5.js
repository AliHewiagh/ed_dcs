(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,88);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,76);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,85);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,167);


(lib.Bitmap29 = function() {
	this.initialize(img.Bitmap29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,149);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1202,903);


(lib.Bitmap30 = function() {
	this.initialize(img.Bitmap30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,167);


(lib.Bitmap31 = function() {
	this.initialize(img.Bitmap31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,149);


(lib.Bitmap32 = function() {
	this.initialize(img.Bitmap32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,159,182);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,167);


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,149);


(lib.Bitmap35 = function() {
	this.initialize(img.Bitmap35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,167);


(lib.Bitmap36 = function() {
	this.initialize(img.Bitmap36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,149);


(lib.Bitmap37 = function() {
	this.initialize(img.Bitmap37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,88);


(lib.Bitmap38 = function() {
	this.initialize(img.Bitmap38);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,86);


(lib.Bitmap39 = function() {
	this.initialize(img.Bitmap39);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,77);


(lib.Bitmap40 = function() {
	this.initialize(img.Bitmap40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,86);


(lib.Bitmap41 = function() {
	this.initialize(img.Bitmap41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,88);


(lib.Bitmap42 = function() {
	this.initialize(img.Bitmap42);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,77);


(lib.Bitmap43 = function() {
	this.initialize(img.Bitmap43);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,93);


(lib.Bitmap44 = function() {
	this.initialize(img.Bitmap44);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,74);


(lib.Bitmap45 = function() {
	this.initialize(img.Bitmap45);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,86);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,140,79);


(lib.Bitmap22_1 = function() {
	this.initialize(img.Bitmap22_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,550);// helper functions:

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
	this.myTxt = new cjs.Text("The three pictures below show the\nweight differences of several planets.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 320;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.2,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A5xAAMAzjAAA");
	this.shape.setTransform(-86.7,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4aFLIAAjpIikADICkh7IAAkvMAziAAAIAAKQ");
	this.shape_1.setTransform(-95.4,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4eFIIAAjoIilACIClh6IAAkvMAziAAAIAAKPg");
	this.shape_2.setTransform(-94.9,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-37.8,352.5,68.7), null);


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
	this.myTxt = new cjs.Text("Tiga gambar di bawah menunjukkan\nperbezaan berat beberapa jenis planet.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 324;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.2,-30.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A5xAAMAzjAAA");
	this.shape.setTransform(-86.7,28.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4aFLIAAjpIikADICkh7IAAkvMAziAAAIAAKQ");
	this.shape_1.setTransform(-95.4,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A4eFIIAAjoIilACIClh6IAAkvMAziAAAIAAKPg");
	this.shape_2.setTransform(-94.9,-4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-37.8,356.5,68.7), null);


(lib.picture_planet_weight4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// planet1
	this.instance = new lib.Bitmap43();
	this.instance.parent = this;
	this.instance.setTransform(-86,-48);

	this.instance_1 = new lib.Bitmap44();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-29);

	this.instance_2 = new lib.Bitmap45();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-48,164,93);


(lib.picture_planet_weight3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// planet1
	this.instance = new lib.Bitmap40();
	this.instance.parent = this;
	this.instance.setTransform(-88,-41);

	this.instance_1 = new lib.Bitmap41();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-86,-43);

	this.instance_2 = new lib.Bitmap42();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-41,165,86);


(lib.picture_planet_weight2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// planet1
	this.instance = new lib.Bitmap37();
	this.instance.parent = this;
	this.instance.setTransform(-86,-42);

	this.instance_1 = new lib.Bitmap38();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-41);

	this.instance_2 = new lib.Bitmap39();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-88,-32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-42,164,88);


(lib.picture_planet_weight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// planet1
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-88,-40);

	this.instance_1 = new lib.Bitmap22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-88,-30);

	this.instance_2 = new lib.Bitmap21();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-86,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-40,165,85);


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


(lib.mcQcopy = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AgOA6IAAgRIAPAAIAAARgAgKAbIAAgDQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLABgLAGIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAGgCAEIgFAJIgIAKQgHAHgDAGQgDAGgBAIIAAACg");
	this.shape.setTransform(261.1,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(252.3,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(242.7,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(233,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(223.7,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_5.setTransform(217.2,2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(212.9,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(200.2,5.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(190.9,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(184.4,2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_10.setTransform(180.6,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(173.7,3.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_12.setTransform(164.5,5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(150.2,5.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_14.setTransform(140.9,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(131.3,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkAwQAMgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_16.setTransform(122.5,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_17.setTransform(109.4,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(99.6,3.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_19.setTransform(91.6,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(81.8,3.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(72.5,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(62.8,3.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_23.setTransform(51.2,3.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_24.setTransform(37.1,2.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(30.1,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(21,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(11.3,3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_28.setTransform(4.9,2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_29.setTransform(-1.7,5.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_30.setTransform(-12.7,8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-19.6,3.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(-29.2,2.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(-38.5,3.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_34.setTransform(-48.1,3.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(-61.6,3.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_36.setTransform(-71.3,3.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_37.setTransform(-77.7,2.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_38.setTransform(-82.5,2.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_39.setTransform(-90.3,3.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_40.setTransform(-99.5,2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_41.setTransform(-106.6,3.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(-114.3,3.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_43.setTransform(-125.8,3.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-137.1,3.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_45.setTransform(-146.1,5.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(-160,3.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_47.setTransform(-169.6,3.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_48.setTransform(-177.6,2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_49.setTransform(-184.8,3.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(-193.3,3.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_51.setTransform(-201.9,3.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(-210.8,3.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(-220.4,2.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_54.setTransform(-227.4,3.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(-235.1,3.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAHQgFAGgIAEQAKABAFAIQAGAHAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaAAIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_56.setTransform(-244.7,2.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_57.setTransform(172.8,2.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_58.setTransform(165.5,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_59.setTransform(118.4,2.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_60.setTransform(107.4,3.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgFgGg");
	this.shape_61.setTransform(92.6,2.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_62.setTransform(66.8,3.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_63.setTransform(60.4,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_64.setTransform(40,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_65.setTransform(31.5,3.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_66.setTransform(19,2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_67.setTransform(7.3,3.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_68.setTransform(-21.5,3.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_69.setTransform(-27.9,2.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_70.setTransform(-32.7,2.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_71.setTransform(-49.3,3.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_72.setTransform(-72.1,3.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_73.setTransform(-80.5,2.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_74.setTransform(-90.2,3.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_75.setTransform(-109.4,3.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_76.setTransform(-118.6,3.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAGgEAEgIIACgIIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_77.setTransform(-127.4,5.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_78.setTransform(-149.8,3.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_79.setTransform(-163.6,2.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_80.setTransform(-172.5,3.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_81.setTransform(-180.9,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56,p:{x:-244.7}},{t:this.shape_55,p:{x:-235.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:-201.9}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:-137.1}},{t:this.shape_43},{t:this.shape_42,p:{x:-114.3}},{t:this.shape_41,p:{x:-106.6}},{t:this.shape_40,p:{x:-99.5}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-77.7}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-48.1}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-12.7}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:30.1}},{t:this.shape_24,p:{x:37.1}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:99.6}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:164.5}},{t:this.shape_11},{t:this.shape_10,p:{x:180.6}},{t:this.shape_9,p:{x:184.4}},{t:this.shape_8,p:{x:190.9}},{t:this.shape_7},{t:this.shape_6,p:{x:212.9}},{t:this.shape_5,p:{x:217.2}},{t:this.shape_4,p:{x:223.7}},{t:this.shape_3,p:{x:233}},{t:this.shape_2},{t:this.shape_1,p:{x:252.3}},{t:this.shape,p:{x:261.1}}]}).to({state:[{t:this.shape_56,p:{x:-199.6}},{t:this.shape_18,p:{x:-189.8}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_8,p:{x:-140.6}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_41,p:{x:-101.3}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_55,p:{x:-63.7}},{t:this.shape_6,p:{x:-55.9}},{t:this.shape_71},{t:this.shape_34,p:{x:-40.5}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_4,p:{x:-12.3}},{t:this.shape_30,p:{x:-5.7}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_37,p:{x:25.5}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_12,p:{x:53.8}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_1,p:{x:76.5}},{t:this.shape_44,p:{x:85.6}},{t:this.shape_61},{t:this.shape_9,p:{x:101.6}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_40,p:{x:126}},{t:this.shape_42,p:{x:135}},{t:this.shape_10,p:{x:145.4}},{t:this.shape_5,p:{x:149.2}},{t:this.shape_3,p:{x:155.7}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_25,p:{x:180.1}},{t:this.shape_51,p:{x:188.3}},{t:this.shape_24,p:{x:195.1}},{t:this.shape,p:{x:202}}]},1).wait(1));

	// Layer_4
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#D40000").ss(4,2,0,3).p("EAqJAAAMg9hAAAI2wAA");
	this.shape_82.setTransform(3.6,18.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#D40000").ss(1,2,0,3).p("EgqWACbIAKhpIA/g5Ig0g7IAIhYIbLAAMA5FAAAIgcE1");
	this.shape_83.setTransform(5,3.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F5F5F5").s().p("AtzCbIAKhpIA/g5Ig0g7IAIhYIbKAAIk4E1g");
	this.shape_84.setTransform(-177.7,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]}).wait(2));

	// Layer_3
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FAFAFA").s().p("EgqWACbIAKhpIA/g5Ig0g7IAIhYMBUQAAAIgcE1g");
	this.shape_85.setTransform(5,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_85).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.1,-13.4,545.3,34.1);


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
	this.shape.graphics.f("#000000").s().p("AgOA6IAAgRIAPAAIAAARgAgKAbIAAgDQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLABgLAGIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAGgCAEIgFAJIgIAKQgHAHgDAGQgDAGgBAIIAAACg");
	this.shape.setTransform(250,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_1.setTransform(243.1,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_2.setTransform(235.3,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(228.4,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(220.6,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_5.setTransform(211.7,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(197.4,5.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(188.1,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(181.6,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_9.setTransform(177.8,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(170.8,3.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_11.setTransform(161.6,5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(147.4,5.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_13.setTransform(138.1,3.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(128.4,3.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_15.setTransform(119.6,5.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_16.setTransform(106.5,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_17.setTransform(96.8,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_18.setTransform(88.8,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(78.9,3.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(69.6,3.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(60,3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(48.3,3.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_23.setTransform(34.3,2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_24.setTransform(27.2,3.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(18.1,3.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_26.setTransform(8.5,3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_27.setTransform(2,2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_28.setTransform(-4.5,5.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_29.setTransform(-15.6,8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_30.setTransform(-22.4,3.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_31.setTransform(-32,2.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(-41.3,3.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(-51,3.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_34.setTransform(-64.5,3.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(-74.1,3.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_36.setTransform(-80.6,2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_37.setTransform(-85.4,2.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_38.setTransform(-93.1,3.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_39.setTransform(-102.3,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_40.setTransform(-109.4,3.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_41.setTransform(-117.2,3.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_42.setTransform(-128.6,3.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_43.setTransform(-139.9,3.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_44.setTransform(-148.9,5.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_45.setTransform(-162.8,3.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(-172.5,3.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_47.setTransform(-180.5,2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_48.setTransform(-187.7,3.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_49.setTransform(-196.1,3.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_50.setTransform(-204.7,3.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_51.setTransform(-213.7,3.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_52.setTransform(-223.3,2.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_53.setTransform(-230.2,3.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_54.setTransform(-238,3.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAHQgFAGgIAEQAKABAFAIQAGAHAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaAAIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_55.setTransform(-247.6,2.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_56.setTransform(171.5,3.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_57.setTransform(162.2,3.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_58.setTransform(122.1,2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_59.setTransform(103.5,3.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_60.setTransform(56.5,2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_61.setTransform(36.1,2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_62.setTransform(27.6,3.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_63.setTransform(21.6,2.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_64.setTransform(15.1,2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_65.setTransform(3.4,3.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_66.setTransform(-25.4,3.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_67.setTransform(-31.8,2.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_68.setTransform(-36.6,2.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_69.setTransform(-53.2,3.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_70.setTransform(-76,3.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_71.setTransform(-84.4,2.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_72.setTransform(-94.1,3.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_73.setTransform(-113.3,3.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_74.setTransform(-122.5,3.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgjAwQALgCAFgFQAGgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_75.setTransform(-131.3,5.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_76.setTransform(-153.7,3.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_77.setTransform(-176.4,3.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_78.setTransform(-184.8,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55,p:{x:-247.6}},{t:this.shape_54,p:{x:-238}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:-204.7}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:-139.9}},{t:this.shape_42},{t:this.shape_41,p:{x:-117.2}},{t:this.shape_40,p:{x:-109.4}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-85.4}},{t:this.shape_36,p:{x:-80.6}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-51}},{t:this.shape_32},{t:this.shape_31,p:{x:-32}},{t:this.shape_30},{t:this.shape_29,p:{x:-15.6}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:8.5}},{t:this.shape_25},{t:this.shape_24,p:{x:27.2}},{t:this.shape_23,p:{x:34.3}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:69.6}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:106.5}},{t:this.shape_15},{t:this.shape_14,p:{x:128.4}},{t:this.shape_13,p:{x:138.1}},{t:this.shape_12},{t:this.shape_11,p:{x:161.6}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:181.6}},{t:this.shape_7,p:{x:188.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:220.6}},{t:this.shape_3,p:{x:228.4}},{t:this.shape_2},{t:this.shape_1,p:{x:243.1}},{t:this.shape,p:{x:250}}]}).to({state:[{t:this.shape_55,p:{x:-203.5}},{t:this.shape_33,p:{x:-193.7}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_31,p:{x:-167.5}},{t:this.shape_76},{t:this.shape_20,p:{x:-144.5}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_40,p:{x:-105.2}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_54,p:{x:-67.6}},{t:this.shape_3,p:{x:-59.8}},{t:this.shape_69},{t:this.shape_14,p:{x:-44.4}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_13,p:{x:-16.2}},{t:this.shape_29,p:{x:-9.6}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_11,p:{x:49.9}},{t:this.shape_60},{t:this.shape_26,p:{x:62.9}},{t:this.shape_7,p:{x:72.6}},{t:this.shape_43,p:{x:81.7}},{t:this.shape_23,p:{x:88.7}},{t:this.shape_36,p:{x:97.7}},{t:this.shape_59},{t:this.shape_1,p:{x:114.5}},{t:this.shape_58},{t:this.shape_41,p:{x:131.1}},{t:this.shape_16,p:{x:144.3}},{t:this.shape_24,p:{x:153.3}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_8,p:{x:177.7}},{t:this.shape_4,p:{x:183.9}},{t:this.shape_50,p:{x:192.2}},{t:this.shape_37,p:{x:198.9}},{t:this.shape,p:{x:205.9}}]},1).wait(1));

	// Layer_4
	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#D40000").ss(4,2,0,3).p("EApDAAAMg7VAAAI2wAA");
	this.shape_79.setTransform(-3.4,18.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#D40000").ss(1,2,0,3).p("EgpQACbIAKhpIA/g5Ig0g7IAIhYIbLAAMA25AAAIgcE1");
	this.shape_80.setTransform(-2,3.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F5F5F5").s().p("AtzCbIAKhpIA/g5Ig0g7IAIhYIbKAAIk4E1g");
	this.shape_81.setTransform(-177.7,3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]}).wait(2));

	// Layer_3
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FAFAFA").s().p("EgpQACbIAKhpIA/g5Ig0g7IAIhYMBSEAAAIgcE1g");
	this.shape_82.setTransform(-2,3.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.1,-13.4,531.3,34.1);


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


(lib.btnItem4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-80,-91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_3
	this.instance_1 = new lib.Bitmap35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-72,-84);

	this.instance_2 = new lib.Bitmap36();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-84,144,167);


(lib.btnItem3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-80,-91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_3
	this.instance_1 = new lib.Bitmap33();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-72,-84);

	this.instance_2 = new lib.Bitmap34();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-84,144,167);


(lib.btnItem2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-80,-91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_3
	this.instance_1 = new lib.Bitmap30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-72,-84);

	this.instance_2 = new lib.Bitmap31();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-84,144,167);


(lib.btnItem1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-80,-91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Layer_3
	this.instance_1 = new lib.Bitmap27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-72,-84);

	this.instance_2 = new lib.Bitmap29();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-72,-65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-84,144,167);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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


(lib.itemPlanet4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{on:0,selected:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.btnItem4();
	this.instance.parent = this;
	this.instance.setTransform(1.5,10.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnItem4(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC332").s().p("AAyAvQgOgDgagJQhDgWhCg/QAeAcBKANQApAIBKAGQAVACAFALQADAGgCAHQgCAHgFAEQgIAHgRACIgJAAQgPAAgRgEg");
	this.shape.setTransform(-24.4,57.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC332").s().p("AgdDMQgohzAZiBQAYh/BKhVQg5BEgNB7QgMBuAaBqIAKAxQAFAcgFAVQgXgIgOgpg");
	this.shape_1.setTransform(-46.2,10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A24400").s().p("Ag1AIQALg7AoggQAMgLANgEQAsAtgLBIQgMBPhMABQgigdANg+g");
	this.shape_2.setTransform(41.2,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E54A08").s().p("AgQBsQgbgBgRgPQgigdANg+QALg7AoggQANgLANgEQAhgLAbAhQAZAfAEAvQAEAwgXAgQgZAigvAAIgKgBg");
	this.shape_3.setTransform(44,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBA3F").s().p("AgRBzQgdgBgTgQQglgfANhCQANg+ArgjQAOgLAOgFQAlgLAdAjQAbAhAFAyQAFAzgaAiQgbAkgzAAIgLgBg");
	this.shape_4.setTransform(44.4,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A24400").s().p("AgyAFQAFgVAfgJQAdgJAXALQAKAEADAEQgKAdgkAMQgJAEgJAAQgYAAgNgZg");
	this.shape_5.setTransform(4,63.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E54A08").s().p("AgRAsQgXgEgLgaQgGgOADgJQAFgWAfgJQAdgIAYAKQAJAFAEAEQANANgJATQgIASgVANQgQALgPAAIgJgBg");
	this.shape_6.setTransform(4.4,64.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBA3F").s().p("AgSAwQgYgFgMgcQgGgNACgMQAGgYAhgJQAegJAaALQAHADAHAHQAOAOgKAUQgIAUgWAOQgSALgQAAIgJAAg");
	this.shape_7.setTransform(4.9,64.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A24400").s().p("AglAuQgMgXAUgfQAUgeAcgJQAIgEAKABQAOAjgWAkQgRAegaAAQgLAAgMgFg");
	this.shape_8.setTransform(21.9,25.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E54A08").s().p("AgdA3QgPgIgGgLQgMgYAUgeQAUgfAcgJQAIgDAKABQAVABAHAYQAHAXgIAaQgIAcgUAMQgMAIgMAAQgNAAgPgHg");
	this.shape_9.setTransform(23.2,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFBA3F").s().p("AgfA6QgRgIgGgNQgNgZAWghQAVggAegJQALgDAIAAQAXACAIAaQAIAYgIAcQgJAegWANQgMAIgNAAQgPAAgQgIg");
	this.shape_10.setTransform(23.7,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A24400").s().p("AgeAQQgIghANgbQAFgKAGgEQAhANAMApQAMAsgoATQgYgHgJgkg");
	this.shape_11.setTransform(33,-10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E54A08").s().p("AgNA+QgZgHgIgkQgIghANgbQAFgKAFgEQAQgOAVALQAUAKAOAYQAOAYgFAXQgFAageALQgJAEgHAAQgGAAgFgCg");
	this.shape_12.setTransform(34.7,-10.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBA3F").s().p("AgOBDQgbgIgJgmQgJgkAOgcQAFgKAHgGQARgPAXAMQAWALAOAZQAQAagFAYQgGAcghAMQgLAEgIAAQgFAAgFgBg");
	this.shape_13.setTransform(34.7,-11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A24400").s().p("AgRAhQgKgNAJgUQAIgVAQgIQAEgDAGgBQAMAUgJAYQgIAXgUAAIgIgBg");
	this.shape_14.setTransform(47,31.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E54A08").s().p("AgMAlQgJgCgFgHQgKgNAJgUQAIgVARgIQADgDAGgBQANgBAHAOQAHANgCAQQgEAjgaAAQgGAAgIgCg");
	this.shape_15.setTransform(47.9,31.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFBA3F").s().p("AgMAnQgLgDgFgHQgLgNAJgWQAKgWARgJQAEgCAHgBQAOgBAIAOQAHAOgCARQgEAlgdAAQgGAAgIgCg");
	this.shape_16.setTransform(48.1,31.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#724400").s().p("AgwArQgKgcAcgeQAbgeAggFQAJgCALACQAKAogeAlQgVAZgYAAQgPAAgRgJg");
	this.shape_17.setTransform(32.6,47.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E54A08").s().p("AgpA2QgPgKgFgPQgKgcAcgeQAbgeAggFQAJgCALACQAXAFAFAcQAEAagOAbQgOAegYAKQgKAEgKAAQgSAAgTgMg");
	this.shape_18.setTransform(33.9,48.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFBA3F").s().p("AgsA5QgQgLgGgQQgKgeAeggQAcggAjgFQANgCAIACQAaAGAFAeQAEAcgOAdQgPAggaALQgKAEgLAAQgTAAgWgOg");
	this.shape_19.setTransform(34.5,48.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E54A08").s().p("AgeAhQg2gnAZgzQAhgLApAiQAoAfAKAmQADANgBALQgLACgLAAQglAAgmgcg");
	this.shape_20.setTransform(-32.6,40.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF7608").s().p("AgUA/QgmgSgQgcQgSggAWgjQALgSAQgEQAhgLAoAiQAoAfAKAmQAEANgCALQgDAbgiAEIgMABQgaAAgbgNg");
	this.shape_21.setTransform(-34.1,42);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFBA3F").s().p("AgWBEQgogSgRgeQgTgiAYgnQALgSASgHQAjgLArAjQArAiAKApQADAPgBAKQgFAegjAFIgOABQgbAAgdgOg");
	this.shape_22.setTransform(-33.6,42.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E54A08").s().p("AgvA6QgKgpAegqQAfguAsAUQAJAbgbAjQgZAiggAKQgIADgHAAIgFAAg");
	this.shape_23.setTransform(-6.1,2.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF7608").s().p("AgiBGQgXgCgEgcQgEgaANgeQANggAXgOQAbgQAeARQAPAIAFAOQAJAcgbAjQgZAiggAKQgIACgHAAIgFAAg");
	this.shape_24.setTransform(-7.4,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFEC32").s().p("AgkBLQgZgDgFgeQgFgcAOggQAOgiAZgOQAcgRAhASQARAKAFAPQALAdgdAlQgbAlgjAKQgJACgHAAIgFAAg");
	this.shape_25.setTransform(-7.9,1.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E54A08").s().p("Ag6BHQgMgyAkg0QAng5A2AZQAMAhghAsQggAqgoAMQgKADgIAAIgGAAg");
	this.shape_26.setTransform(-13.1,-16.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF7608").s().p("AgqBXQgcgDgGgjQgFggAQgkQARgoAdgRQAhgUAlAVQASAKAGASQAMAhghAsQggAqgoAMQgKADgIAAIgGAAg");
	this.shape_27.setTransform(-14.7,-18.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFEC32").s().p("AgtBcQgegDgHglQgGgiARgoQASgqAfgSQAjgVAoAXQAVALAGATQAOAkgkAuQgiAtgqANQgLADgJAAIgHgBg");
	this.shape_28.setTransform(-15.3,-17.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CD3D00").s().p("AguBAQgPgnACgnQADhhBRgNQAoAegFBOQgGBKgmAtQgNAPgMAHQgXgVgOgog");
	this.shape_29.setTransform(-28.2,6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF7608").s().p("AguBuQgfgigKg4QgLg7AVgqQAZgxA7gEQAdgCAVAQQAoAegGBOQgFBKgnAtQgMAPgOAHQgMAGgKAAQgXAAgWgZg");
	this.shape_30.setTransform(-31.3,5.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFEC32").s().p("AgzB1QghgkgLg8QgMg/AXgtQAbg0BAgDQAggCAXAQQArAhgGBTQgFBOgqAvQgNAPgQAJQgNAGgMAAQgZAAgYgag");
	this.shape_31.setTransform(-31.7,6.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF7608").s().p("AiuIOQgvgIgjgcQBCAYBJgHQAkgEAOgRQAXgZgbgfQgVgXgggMQgNgFhMgIQgwgFgfgmQgIgKgOgMIgZgUQhzhegkiIQgkiHA0iMQgcB5ARBnQAXCGBZBEQBeBJCAglQBwghBQhGQBXhKAkhoQAph5gQh0QgSiFhbhJQhIg5gVgBQBTABBOAaQBNAZBCAvQBIAzA0BHQA0BHAcBUIAIA/QAKBngeBvQgcBsg8BbQg2BShQAxQhXA0hagFIg1gGQgfgCgUAEQgNACgUAIIgfAMQgcAJgdAAQgQAAgRgDg");
	this.shape_32.setTransform(3.8,15.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFC332").s().p("AgTFUQgTgKgGgRIgEgUQgCgMgEgGQgHgMgQgCQgOgCgNAGQgLAFgOAPIgXAYQgdAZgegWQhLg3gLiFQgLh1AnhaQAjhTBHhCQBFg/BXgiQBNgeBTAYQBXAZAjBLQAdA9gEBaQgHB0g5BrQg5BrhfBFQgmAdgdADIgHAAQgPAAgOgHg");
	this.shape_33.setTransform(-14.9,1.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFA43F").s().p("AmAGAQififAAjhQAAjhCfifQCfifDhAAIAHABQBVABBPAaQBNAZBCAvQBIAzA0BHQA0BHAcBUQAaBRAABVQAABYgbBUQgbBQgzBFQhLBnhyA7Qh1A9iFAAQjhAAifigg");
	this.shape_34.setTransform(1.5,17.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E9E9E9").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_35.setTransform(1.5,17.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#858585").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_36.setTransform(1.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-80.7,159,182);


(lib.itemPlanet3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.btnItem3();
	this.instance.parent = this;
	this.instance.setTransform(1.5,10.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnItem3(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F6600").s().p("AgcAMIgCgDQgBgEAGgDQAKgEAKgBIAkgPQADAMgNAKQgKALgOADIgHABQgLAAgHgHg");
	this.shape.setTransform(-13.6,40.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6F6600").s().p("AggAJQgJgBgCgEQABgFAGgEQAGgEAGACIgDgEIASAGIAQAFQAVAFAOgJQACADgBAEQgBAEgEACQgDACgMABIg3gDg");
	this.shape_1.setTransform(-18.3,42.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6F6600").s().p("AhEAMIArgPQAbgLAPACQAHABAOAGIAiANQgKAEgQgDQgTgGgJgBQgMgCgTADQgeADgcAIIADgCg");
	this.shape_2.setTransform(24.4,28.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6F6600").s().p("AgKAiQgFAAgFgEQgFgEABgFIADgFIAbgkIgGgNQAKAGAFAEQAHAHADALQACAKgEAJQgFAKgJAFQgIAFgIAAIgDAAg");
	this.shape_3.setTransform(41.7,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6F6600").s().p("AgPAFIgCgEIACgEQAMgPANgKIgEACQACgHAHABQAIAigSAfg");
	this.shape_4.setTransform(46.5,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6F6600").s().p("AgEAUQgIgDgDgHQgCgGAEgHQADgHAHgCIACgCQABgFAFAAQAGgBADAEQAFAHgDAMQgDALgFAEQgEACgEAAIgEAAg");
	this.shape_5.setTransform(39,33.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6F6600").s().p("AgFANIgEgGQgCgDgDgBIgJAAQgGAAgCgDQgDgDAEgEQAEgEAGgBIAWgDIAAgFIABACQADADADAAIAMAAQAGABAEAFQADAFgBAEQgBAPgOAEIgIACQgJAAgGgIg");
	this.shape_6.setTransform(35.1,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6F6600").s().p("AAAAdQgFgCgBgFIABgIQAAgGgBgCQgDgEgLABQgKAAAAgEQgBgCADgEQATgbAZAHQAaAGgSAhQgHANgHADQgDACgDAAIgEgBg");
	this.shape_7.setTransform(42.7,29.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6F6600").s().p("AgoAnQgKgHADgXIADADIACgEQAXgbAhgRQATgKAKAJQAJAIgGANQgCAGgLALQgfAfgTAIQgHACgFAAQgGAAgFgDg");
	this.shape_8.setTransform(11.6,51.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6F6600").s().p("AhRBHQgGgUgFgJIgTgYQgMgPgBgKQgCgcAVgZQAWgZAaAFQAhAGAxAVIBQAiQAKADAFAFQAHAHgCAGIgPACIgPABQgPADgQAOIgZAaQggAkgcgGIgOgCQgEAAgFACIgJADIgJABQgNAAgGgLg");
	this.shape_9.setTransform(0,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6F6600").s().p("Ag1AHQAogQAegNQgEgGACgHIAHAJQAMgKAPACQAJABAIAGQAHAGAEAIQgPgLgIAAQgEABgJAFQg4Aeg8AYQgFgQAbgNg");
	this.shape_10.setTransform(10.4,29);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6F6600").s().p("AgEAfQgEgCgMgNQgLgLgJACQABgLAHgKQAIgKALgEIANABQgJgEgHACQAHgFAEABIALAGIgGAAQAIADALAHQAQANAEAHQADAHgBAHQAAAIgGAEQgFAEgMABIgHAAQgLAAgEgDg");
	this.shape_11.setTransform(19.8,24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6F6600").s().p("AhHCxQgHgCgDgDQgEgFgFgQQgFgQgIgGQgDgDgOgDQgLgDgEgGQgEgHAbgqIAhg1QAcg6AMg7QANg+AhgQQAagNAXAUQAKAJAXAjQAkA0AJA/QAJBAgVA6QgMAjgUATQgcAbgwADIgKAAQgiAAgpgMg");
	this.shape_12.setTransform(34.8,8.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00664F").s().p("AB2BkQgCgOgHgLIgJgNQgGgHAAgGIAAgMQAAgIgEgDIgFgDQgEgEADgIQAIgTgVgQIgDgBQgVgKgJgGQgTgMgOgBQgNgBgEgDIgKgKQgGgGgFAGIgDAFQgDAEgHABIgNgBQgHgBgGACQgHADAAAFIAAAHQAAAGgGAGIgLAKQgPANgKASQAKghARgIQALgGgCgFIgCgDQgCgEADgIQAJgOAagBQAJgBgBgFIgBgDQgBgEAEgEQAEgDAFgBQAHgCAPgUQALgPAPAGQAIADAHAHQAbAbAQAuQADAJANAZQAKATACAOQABAEgCALQgCAJACAFQACADAHAHQALALAAASQABAQgHAQQAFgMgCgOg");
	this.shape_13.setTransform(39.3,-8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#AABA3B").s().p("AAMAJQABgXgMgEQgFgBgGAFQgHAGgEAAQgMgBAKgRQAKgOAJgGQAHgFAJABQAJABAFAHQAEAIgEAQIgPBFg");
	this.shape_14.setTransform(-37.3,-13);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AABA3B").s().p("AgKANQgDgEACgJQADgPANABQANACgHANQgCAEgIAGQgEAEgEAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAg");
	this.shape_15.setTransform(-39.1,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#AABA3B").s().p("AACAuQgOgHgFgjQgFgiALgNQAGgHAHAGQAFAEADAJQAKAaAAAeQAAALgEAFQgCAEgEABIgFABIgDgBg");
	this.shape_16.setTransform(-36.6,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D2CE24").s().p("AlaCOQAAjsCoioQCnioDtAAQA+AAA7ANQhNgLhBAHQhBAHg1AaQgnAUgQAPQgSAdgBAAQgoAFgfAfQgeAggEApQAAgVgJgSQgFgLgJgFQgTgJgiAeQgQAPgaAfQhLBbgbB2QgcB4AeBxQAHAgATAFQAIACAVgGQASgFAIAGQgRgEgRAMQgQALgGASQgJAcALAuQAFAVAKAaQhOiFAAicg");
	this.shape_17.setTransform(-21.1,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00D9FF").s().p("ABBAGQgfgOgWgFQgbgIgsAFIhJAJIAFgCQAngOBNgIQAPgBA+AFQBGAFgEAJQgCAGgOAGQgNAHAEAJIAHAIQAFAFgCAEIg0gag");
	this.shape_18.setTransform(3.3,-35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#929626").s().p("AAABFQgMgEgJgOQgDgFgLgXIgbgpQgSgbAGgTIAGgGQAkgBAkAXQAfATAcAgQAOARgBAMQgBATgiANIgUAGIgJABQgHAAgFgCg");
	this.shape_19.setTransform(26.6,-26.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#797400").s().p("AAABGQgMgEgJgPIgOgbIgbgpQgRgcAFgTIAGgGQAlgBAjAXQAfATAcAgQAOASgBALQgBATgiANQgTAHgMAAQgGAAgEgBg");
	this.shape_20.setTransform(27.4,-24);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#614D00").s().p("AjcBxQADgPALgMQARgUAQgHQAOgGAcgCQAVgBATgGQAQgGAXgMQBiguAxgZQBWgtArg0QhFBdhrAoQgoANgIAFQgKAFgOAKIgYAQQglAYgtAJIggAGQgTADgMAHQgPAIgIAPQgJAQAGAPQgGgOAFgQg");
	this.shape_21.setTransform(-8.1,30.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#614D00").s().p("AAzAzQgJAAgHgGQgIgGgQgSQgNgQgLgGIgZgNQgQgIgHgKQgMgRAcgBQAVgBARAFQAZAIAUAVQAUAUAGAbQADAJgDAFQgDAHgJAAIgBAAg");
	this.shape_22.setTransform(-19.2,52.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#614D00").s().p("AAUCKQgogIgjgXQgQgLgigvQgcglgegHIghgFQgTgEgMgHQgIgEgCgGQgEgKAKgIQAHgFAMgDQA2gNA5geIAqggQAagVAUAEQABAAAIAPQAHAPACACQAMAQAfATIAPAKQAmAcA5AOIAcAGQAQAEAKAGQANAGAIAMQAIAOgDANQgDATgfAUIgxAgQgdAQgZAHQgXAGgXAAQgSAAgRgDg");
	this.shape_23.setTransform(-2.9,46.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#614D00").s().p("ABfEmQgIgPAKghQAKghgHgQQgLgYgZgRQgYgPgbgDQgegEgrAIIhKARQgsAKgpABQgWABgIgJQgIgKAJgOQAHgLAOgKQA6gpAggbQAxgnAhglQAkgoATg7QARhFAOgnQAZhEAngJQAPgDAQAFQATAGAVASQBFA5APBtQAJBHgNB6QgNB3g6BNQgUAagSALQgKAGgIAAQgPAAgJgTg");
	this.shape_24.setTransform(25.2,18.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#593B00").s().p("ABrCHQgSgEgGgMQgEgIAEgOIAGgXQADg2g1gKQgYgEhGAHQgwALgbAEQgyAJgXgSQgUgPgFgKQgIgVAigTQALgFApgQQBagjAxgNQBOgXBBABQAvABAWASQAfAZgBA8QgCArgPAvQgJAdgTAWQgWAZgbAEIgJABQgKAAgLgDg");
	this.shape_25.setTransform(22.9,35.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#959F13").s().p("AhzA3QgSgKgBgLQgDgTAjgJQAugKAWgYIAUglQAPgbAOAFQAFACAHAIQAdAkAqAZQAUAMAHAGQANANgDAQQgCAIgHAIQgkAqhKAAQhEAAg/gig");
	this.shape_26.setTransform(-29.6,21.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00FFFD").s().p("AAHAtIgBgEQABgNgDgOIgCgEQgCgDgEAFQgBACAAAFQgGABgDgGQgIgNAIgcQAIgcANARQALAPABAXQABAPgGAYIgCAFIgDACIgCgBg");
	this.shape_27.setTransform(-2.8,-14.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AABA3B").s().p("AgMAFQgLgQASgDQAFgBAIAFQAMAGgEAIQgBADgDACQgGAGgFAAQgHAAgGgKg");
	this.shape_28.setTransform(-43,4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AABA3B").s().p("AASCBQgcgXgRALIgNAMQgHAHgGAAQgagBACg1QABgmAKgdQARg1AvhHQAQgZAPgKQgIAFgGANIgKAWIgNAaIgOAaQgUApgJAwIgEAQQgBAKABAGQACAMALgBQAFAAANgEQAMgCALAKQAHAHAKAPQAVAgAVgHQARgGADgeQAEAmgSAKQgFACgGAAQgOAAgVgQg");
	this.shape_29.setTransform(-42.3,-2.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BDCA68").s().p("AgUBBQgJgFgEgIQgIgOACgXQADgdAdgjQAfgnAOAuQAEAMgEAXQgFAcgPAbQgKAQgKADIgGABQgGAAgGgDg");
	this.shape_30.setTransform(-25.6,-17.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#959F13").s().p("AgNBDQgJgEgGgIQgJgNAAgXQAAgdAZgmQAbgpATAsQAFANgCAVQgDAggMAZQgHARgLAEQgEACgDAAQgFAAgFgCg");
	this.shape_31.setTransform(-23.8,-17.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#AABA3B").s().p("AgSCfQgOgMgOgUIgSgsQgMgfgLAGQgEACgGgCQgFgCgDgFQgEgGgCgOQgGgxABgbQABgrAQggQAQghAggNQAlgPATAjIAEAIIAGAHQAKALAhgHQAggGAJAMQAHAKgFAZQgKAyAOAvIAIAYQAEAOAAAKQACAYgPAVQgPAUgXAIIgSAGQgJADgHAGQgDADgCAJQgCAIgGACQgFADgGAAQgLAAgPgNg");
	this.shape_32.setTransform(-18.6,-10.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#736900").s().p("AgjCoQgKgEgNgPQgiglgHgQQgPgfAQghQAIgPAagcQAYgbAHgTQADgHADgMIAFgTQAGgUAXglQAGgJAEgDQAUgQAjAeQgSAcAAAjQAAAjATAbQAIAMAHACQAFABAFgCQAGgCABgFQAJAjgUAlQgTAkgkAMIgUAHQgLAFgFAIQgDAFgBASQgBAPgGAFQgGAHgJAAQgFAAgHgDg");
	this.shape_33.setTransform(-12.2,-6.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#959F13").s().p("Ag3CkQgHgBgFgFQgIgHgGgPQgTg0AMg4QAJgmAcgxQATghAJgOQASgaARgOQAfgYAWAKQAWAKgIAoQgIAiABAmQAAAmAIAgQAKApABAIQAFAcgHAUQgGAUgPAHQgKAFgPgDIgagJQgigNgQAPIgKAKQgDADgGAAIgDAAg");
	this.shape_34.setTransform(-41.9,-2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#736900").s().p("Ag3CjQgHgBgFgEQgJgIgFgPQgTg1AMg3QAIgiAdg1QAZgsAWgZQAogwAaAUQANAKgCAhIgGAwQAAAzAMAvIAMAwQAFAcgHAVQgHAUgOAHQgLAFgPgDIgZgJQgjgOgPAPIgKALQgEADgFAAIgDgBg");
	this.shape_35.setTransform(-39.2,-1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#AABA3B").s().p("AgwBZQgOgBgDgLQAAgEADgMQAEgOgDgOQgDgPgKgLQgMgKgFgGQgKgMAFgLQAFgKAOgBIAWADQAqAJAlgOQAEgBAggaQAbgUAHAFQAIAGgFASQgOAwgiAmQghAmgrAWQgMAGgIAAIgBAAg");
	this.shape_36.setTransform(10.9,12.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00FFFD").s().p("ABlCaQAKgRADgYQAEgrgMgnQgBgEgCgCQgDgCgEABQgEACgCADQgBAEAAAKQgMAGgBgXIgBgcQgCgNgEgKQgHgNgGATQgIAfgEAwQgDAqADAfIgHg5QgGgygJgaQgEgGgDgCQgFgDgGAFQgFAEgBAGIgEANQgDAHgEADQgDgNgFgeQgEgcgFgOQgUg2gsgRIAWAGQAMADAIAHIAOATQAIAOAGABQAaAGgSgmQgRglgQgLQghgVgyABQAggCAVAEQAgAFAbASQAWAQAJAfQADAHAAAbQABAXALAEQAUAFgCgXIgGghQgBgHACgCQADgFAHACQAGACAFAFQAdAgATAoQAUAqAEApQADAjgPAnQgQAogaAOQAOgJAJgSg");
	this.shape_37.setTransform(5.3,-14);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00FFFD").s().p("ABECWIg6gsQgzglgZgZQgVgXgXgmIgkhDQgLgUADgcQAEgfAWgHQAIgDAJAEIAGAFIARAeQAUAhAnAJIgxgIQgBAUAJAWQAGAOAPAYQAVAhALAPQASAaATASQAwAvA3ADQAEAAAEgCQAEgDgCgDQANANAHAMQAKAagcAGIgKABQgYAAghgWg");
	this.shape_38.setTransform(-33.2,48.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAD4").s().p("AhDBZQASgLgCgRQgCgJABgEQABgRAbgJIAmgPQAkgXAShIIgKAyQgGAagUARQgWAWAAAEQABAFAVASQAHAJACAIQACAFAAALQgXgjgRgEQgPgEgJAKIgSAYQgNALgLAAIgEAAg");
	this.shape_39.setTransform(-7.3,2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00D9FF").s().p("AArDhQBBgsAWgpQAQgegsgGQhEgEgigEQg6gGghgZQg4grgPh1QgNhjAkhcIgFBYQgBAyAFAmQAJA6AZAvQAiA/AvABQALAAAJgGQARgKgCgRQgCgJABgFQABgPAbgKIAogOQAkgZARhIIgJAyQgHAagTATQgXAWAAADQABAEAVATQAIAIACAJQABAFABAKQABAIADAHQAEALAVAIQAXAJAFAJQAMAVggAfQhbBVhzAvQBFglAlgZg");
	this.shape_40.setTransform(-13.6,5.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00D9FF").s().p("AgQATQgcgQAAgTQACgaAhAUQAQAKAcAVQAKAIgBAGQgBAIgOABIgBAAQgUAAgYgNg");
	this.shape_41.setTransform(-11.7,68.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00D9FF").s().p("ABECWIg6gsQgzglgZgZQgVgXgXgmIgkhDQgLgUADgcQAEgfAWgHQAIgDAJAEIAGAFIADACQAWAVAeAKQAdAKAdgDIASgCQAlgGAKAAQglAUgMARQgQAUAEAhQACAfAQAVQAMARAXAUIAoAgQAmAgAKAcQAKAagcAGIgKABQgYAAghgWg");
	this.shape_42.setTransform(-33.2,48.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8D8913").s().p("Ah4EPIgdgNQgRgJgMgCQgQgEgPAEQgQAFgIANQg0iRAliUQAnibB5hYQAmgcABAqQAAAWgJArQgJBUASBCQARA5AmAsQApAuA2APQAbAHA3ACQA3ACAaAHQgWAggqAaQgZAQg2AXQhLAhguAKQgbAFgZAAQglAAgfgMg");
	this.shape_43.setTransform(-26.9,5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00D9FF").s().p("AACBFQgMAAgJgXQgNgegDgWQgDgWAGgSQAIgWAVAAQAiABAFAoQADAdgMAmIgDAKQgHATgOAAIgBAAg");
	this.shape_44.setTransform(-3.7,-14.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00D9FF").s().p("ABdC/QgrgKgTgiQgNgZABgmQABgRAJgyQAPhXgogkQgUgRgggCQgPgBgqAEQggAEgbALQgzAUgDAKQAMgnAfgcQAdgaAogNQA6gSBCANQBBANAtAlQAsAjAYA0QAYA0gBA4QAAAkgMAgQgNAigXAYQgYALgaAAQgOAAgOgDg");
	this.shape_45.setTransform(-3.3,-13.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AAD4").s().p("AAuDLQgrgKgSgiQgNgZABgmQABgRAJgyQAPhXgogkQgVgSgigCQgagBgkAIQgeAGgLgMQgHgIAEgNQADgLAKgKIAGgFQAagXAmgMQA6gSBCANQBBANAtAlQAsAjAYA1QAYA0gBA3QgBAtgSAmQgTApgjAVIgBABIgHAEQgZALgZAAQgOAAgOgDg");
	this.shape_46.setTransform(1.4,-14.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#797400").s().p("AAQDVQgOgBgFgFQgLgJABgUQADgYAAgLQgBgegfgWQgQgLgpgOIgzgMQgegIgSgKQglgWAOgbQAKgUAmgZICFhXQBAgpAjgNQA+gXAyASQAZAKAMASQAKANADAbQAJA9gLA9QgKA8gdA2QgcAzgoAfQgqAfgsAAIgKAAg");
	this.shape_47.setTransform(26.1,35.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#593B00").s().p("AAIBYQg+gJg4g4QgpgognhHQAdAWAoALQAXAGA0AHQAzAHBAgJQAngFBLgSQASA5gUAdQgNATgnARIgpARQgYAKgQADQgPAEgNAAIgMgBg");
	this.shape_48.setTransform(2,55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#818400").s().p("AjFHsQgpgRgSgWQgHgHgJgQIgPgXQgLgPgTgNIgkgXQgXgPgMgKQgRgQgIgRQgKgUAGgVQAEgXASgKQAOgHAhgDQAegCAQgLIArghQAZgRAXgKQCDg6AXgMQBTgvApg+QAng9AQhDQARhHgNhDQgLg+gcg5QgigygKgVQgPgmA+AOQA9AOA5AoQA2AlAqA1QAjArAWAxQAzBrAHB4QAIB3gnBvQgWA8giA+QglBCgiAiQhVBbiBAaQgtAJgqAAQhRAAhMgfg");
	this.shape_49.setTransform(11.2,17.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#959124").s().p("AkgHvQiDhMhLiCQhOiFAAicQAAjsCoioQCoioDsAAQA+AAA7ANQBzAZBfBEQBwBPBAB5QBCB9AACNQAABegdBXQgcBVg2BIQhQBth3A+Qh7BAiMAAQibAAiFhOg");
	this.shape_50.setTransform(1.5,17.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E9E9E9").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_51.setTransform(1.5,17.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#858585").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_52.setTransform(1.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-80.7,159.7,182.1);


(lib.itemPlanet2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.btnItem2();
	this.instance.parent = this;
	this.instance.setTransform(1.5,10.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnItem2(), 3);

	this.instance_1 = new lib.Bitmap31();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.5,-54.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D94800").s().p("AAtFDQgUgOgVgTIgUgTQhPhNgrhlQgthnAAhzQAAhiAhhaQAPgsAWgnIgNAgQgYBAgJBIQgRCKApB9QAnB3BUBfQBUBgBwA0QhJgahCgwg");
	this.shape.setTransform(-35.6,29.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F75200").s().p("AgPAVQgHgFgBgIQgCgIAFgFIAAADQAAgNANgGQAMgHAKAIQAKAHgBANQgBAOgKAHQgHAEgHABQgIAAgGgFg");
	this.shape_1.setTransform(-4.5,-5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F75200").s().p("AAMBNQgRgDgHgOQgCgFgCgMQgBgMgCgFQgDgJgegYQgWgSALgWQAHgPAYgJQAXgJAQAEQATADARASQAaAdgBApQgBAngZARQgKAHgMAAIgIgBg");
	this.shape_2.setTransform(-5.3,-18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D94800").s().p("AggCuIAmhfQAZg6AMglQASg1gDgkQgCgYgKgUQgKgWgSgNQgYgRgjABQgdABghANQhSAgg3BFQBHibCXg3QBKgbA9ANQBGAOAmBDQAcAzgXBAQgNAkgtBEQgbAoguA0IhOBXQhABLgXBGQAEg/AehOg");
	this.shape_3.setTransform(-17.8,0.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BD2300").s().p("AgFAGQgCgDADgHQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQADAEgCAEQgBAEgEACIgCAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAg");
	this.shape_4.setTransform(-23.1,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D94800").s().p("AgJAcQgPgEADgPQACgLAKgMQAOgQAJACQAJADgBANQgBAKgFAJQgFAMgEADQgGAHgGAAIgEgBg");
	this.shape_5.setTransform(-25.2,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BD2300").s().p("Ag9AoQgDgeAegcQAYgXAfgPQALgFAJAAQALgBAFAHQADAEABAHQAEARgHASQgHAQgNAOQgWAWggANQgOAGgKAAQgTAAgCgWg");
	this.shape_6.setTransform(-30.8,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BD2300").s().p("AhNBzQguhpABhxQAAhiAghaQgJAkgDA/QgEBWAIA8QALBPAiA5QARAdASgCQAWgCAHglQAQhJgGhGQgCgXgMgHQgMgHgNALQgIAHgHAQQgTAtgBAvQgGg2AMg3QALg3AagwQAWgpAcgEQAPgCAPAIQAOAIAJAOQANAWACAnQACAygPBYQgRBfgBApQgCBbAwAkQgmgJgVgiQgIgNgFgFQgHgJgKACQgIACgDALQgDAJACALQAFAlAQAhQhOhNgqhkg");
	this.shape_7.setTransform(-41.6,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D94800").s().p("AgBAJQgEAAgCgEQgCgDACgDQACgEAEAAIAAgBQADgCAFABQAFAHgHAGQgCADgDAAIgBAAg");
	this.shape_8.setTransform(28.3,28);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D94800").s().p("AgRArQgMgPAJgpQAIgtAWAGQAOAEABAXQAAALgFAVQgGAdgHALQgFAHgFAAQgGAAgIgLg");
	this.shape_9.setTransform(31.9,22.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD2300").s().p("AhOCjQgKgDgCgTQgHg1AehOQARgsARgdQAYgoAcgXQASgRAMgJQAXgRALAIQAKAHAAAQQAAAPgHAeQgmCMhjBpQgMAMgJAAIgGgBg");
	this.shape_10.setTransform(20.3,28.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B02000").s().p("Ag3CjQgHgFAAgDQgBgFAFgEIAbgVIAbgTQAigZgGgZQgRACgWAJIgoARQgyAVg4AAQg4ABgzgTQgVgPgVgSIAzASQAdALAWADQA3AIA5gWQA1gUArgoQBFg/A0iAQgQA8gHBCQgFAsAQASQALAMASADQASACARgHQAXgKAbghQBAhPAYhUQgKBGghA9QghA/g0ArQgaAVglAUQgZAOgrAUQgOAHgIAJQgJALAGAKQAGALAWgBQBtgEBag/Qg5BDhWANQgXADgXAAQg/AAg5gZg");
	this.shape_11.setTransform(-4.1,53.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D94800").s().p("AhJD9QATgYAmg1QA6hWAihiQAihgAIhkQABgMgFgmQgFgrAAgUQAjBeAABmIgBAPQgZBpgtBUQhSCdiGBOQAhgUAlgtg");
	this.shape_12.setTransform(42.6,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BD2300").s().p("AhFGtQBFg7AshNQATgiATg8QAWhGAFg5QANich6AoQgRAGgYAWQgKAJgaAaQglAogZAqQgdAxgGApQALhYAthNQAOgYAfgpQAggsANgWQAohEAMhlQAJhMgrhFQgog9hCgkIBIAkQAtAYAcAaQAlAgAUAsQAKAWAVBGQAKAiASACQABABAAAAQABAAABAAQAAAAABAAQAAAAABgBQAUgCAFghQAEgggJggQgIgbgQgXQBPBqAACJQgBB1g6CPQggBPgdA1QglBGgsAyQgxA6g+AjQhDAmhGAGQBVgdBGg7g");
	this.shape_13.setTransform(25.4,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BD2300").s().p("AjwHAQAxgJAygYQA3gcAbgjQAZgiAGhHQAIhjADgOQANgzAlg6QAKgRA9hRQArg7AUguQAbg9gBg3QgDg/gugvQgwgxg5ALQAsgZA2AUQA0ASAbAuQAZArAAA3QAAAzgUAzQgPAqgfAyIg7BVQgjAzgTAlQgaAzgJAuQgGAigFA6QgHAxgaAmQgaAlgiAYQglAZgpAIQgbAFgRAAQgYAAgRgJg");
	this.shape_14.setTransform(-0.7,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BD2300").s().p("AgYGjQgagDgPgJQgbgSgIgsQgIgtARhPQANg/Ajh3QAkh4AMg8QAHgfgBgSQAAgcgNgRQgMgOgTgGQgSgFgTAEQggAGghAeQhsBggXDUQgCidA4h5QBHicCVg2QBMgcA9ANQBGAPAlBDQAcAzgWA/QgNAkguBFQgaAoguA0IhPBXQhABLgXBFQgJAcgCAbQgDAeAJAYQAKAcAXAKQARAIAVgFQAUgFAQgPQAWgUAVgwQAchHAPg7QgFAWgHA7QgHA0gIAdQgMArgaAeQgeAjgmAHQgJACgMAAIgTgBg");
	this.shape_15.setTransform(-20.6,11.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3D0B00").s().p("AgJAJQgEgFAGgKQAAgBABgBQAAgBABAAQAAAAABAAQAAgBABABQACgCADAAQAEAAACACQAFAFgCAHQgDAHgGACIgDAAQgEAAgEgDg");
	this.shape_16.setTransform(-22.6,-5.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D0B00").s().p("AgJAcQgPgDADgQQACgLAKgLQANgRAKACQAJADgBANQgBAKgEAJQgFALgFAFQgGAGgFAAIgFgBg");
	this.shape_17.setTransform(-24.3,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3D0B00").s().p("Ag9ApQgDgeAegcQAYgYAggPQAZgMALAOIAEALQADARgHASQgHAQgNANQgWAWggAOQgOAGgKAAQgTAAgCgWg");
	this.shape_18.setTransform(-29.9,-3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3D0B00").s().p("AgJBsIAIhmQgBADgIgCQgBgKAGg3IAGg0IALAEIgFAbIgDBAIAEA2IgIBIg");
	this.shape_19.setTransform(-46.1,19.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3D0B00").s().p("AhOByQgshogBhxQAAhiAihaQgKAlgCA+QgFBVAIA9QAMBOAhA6QARAdATgDQAUgBAIglQAQhJgHhGQgBgYgLgGQgHgDgGABQgHABgFAFQgJAHgHARQgTAsgBAvQgFg2ALg3QALg3AbgwQAVgpAcgEQAPgCAPAIQAOAJAJAOQANAVACAnQACAygQBYQgQBfgBAqQgCBaAxAlQgngKgVgjIgMgSQgJgIgIACQgRAEADAdQAGAlARAiQhPhOgrhlg");
	this.shape_20.setTransform(-40.7,28.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3D0B00").s().p("AgHAFQgCgEACgCQACgEAEAAIAAgBQAEgDAEACQACADAAAEQgBAEgDACQgCADgEAAQgEgBgCgDg");
	this.shape_21.setTransform(29.3,28.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3D0B00").s().p("AgRAsQgMgQAJgqQAIgsAWAGQAOAEABAXQAAALgFAWQgGAegHAJQgFAHgEAAQgHAAgIgKg");
	this.shape_22.setTransform(32.8,22.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3D0B00").s().p("AhOCkQgJgFgDgSQgHg1AehOQAlhhAxgnQASgRAMgJQAXgRALAIQAKAGAAARQAAAQgHAdQgmCNhjBnQgNANgJAAIgFAAg");
	this.shape_23.setTransform(19,28);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3D0B00").s().p("AgvCtQgJgEAAgEQgBgEAGgFIAagWIAagUQAigbgGgYQgSACgVAKIgoASQgyAXg6ADQg4ACg1gRQgTgMgZgUIA0ARQAfAJAXACQA3AHA6gYQA0gWAqgrQBEhCAxiDQgNA8gGBFQgDAtARAQQAKAMAUACQARACARgHQAYgMAagiQA/hTAVhVQgJBIgeA+QggBBgzAtQgaAXglAWQgXANgsAXQgPAHgHAKQgJAMAHAKQAGAKAWgCQBvgHBYhDQg4BHhWAPQgdAFgcAAQg6AAg1gWg");
	this.shape_24.setTransform(-2.9,52.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3D0B00").s().p("AhJEJQAWgcAjg1QA5haAjhmQAihnAIhnQAAgNgEgnQgFgtAAgVQAjBjAABqIAAAQQgbBvgsBXQhRCliHBRQAhgVAlgvg");
	this.shape_25.setTransform(41.5,28.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3D0B00").s().p("AAWAdQg3gvgagIIAPgMIAfANQAiAQAOAMQAPANAHANQADAGAAAFg");
	this.shape_26.setTransform(18,-32.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3D0B00").s().p("AhEGtQBFg7AshNQATgiATg8QAWhGAFg4QANidh6AoQgSAGgXAWQgJAIgbAcQgLAMgNAUIgVAjQgXAlgJApQgHgQADgXQADgPAIgZQAPgqAng3QA8hWAEgHQAqhGALhkQAJhMgshFQgng9hCgkIBIAkQAtAZAcAZQAlAgAUAsQALAYATBEQALAiASACIAFAAQAQgBAGgVQACgHADgcQACglgOgdQgLgPABgJQAAgCAFgHQAGgIABAEQA8BugFCSQgECCg0CAQgfBOgeA3QglBFgsAzQgyA5g9AjQhDAmhGAGQBVgdBGg7g");
	this.shape_27.setTransform(23.6,16.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3D0B00").s().p("AjwHAQAxgJAxgYQA4gcAbgjQAZghAFhIQAJhjADgOQANgzAkg6IBHhiQArg7AUgtQAcg9gCg4QgDg+gtgvQgwgxg5AKQAsgZA2AUQA0ASAaAuQAaArAAA3QAAAzgUAzQgPAqggAyIg6BWQgjAzgUAkQgZAzgJAuQgGAigFA6QgIAxgaAnQgZAkgiAYQglAZgpAIQgbAFgRAAQgYAAgRgJg");
	this.shape_28.setTransform(0.3,13.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#3D0B00").s().p("AgZGjQgbgDgNgJQgbgRgIgtQgHgsAPhPQANhAAjh2QAlh5ALg7QAHggAAgSQgBgcgNgRQgLgOgTgFQgTgGgTAEQgeAGgiAeQhsBhgYDUQgBinA+h9QBHiRCPg0QBMgcA9ANQBGAPAlBDQAcAzgXA/QgMAjguBGQgaAoguA0IhPBXQhbBqgIBdQgCAeAJAYQAKAcAWAKQARAIAWgFQAUgFAQgOQAWgVAUgwQAKgZAJgqIAQhFIAJACQgGA/gMBDQgJA2gbApQghAvguAJQgLACgLAAIgTgBg");
	this.shape_29.setTransform(-19.6,12.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#961C00").s().p("AiFGXQgfgLgQgjQgOgeAAgnQAAhwBQiEIBtiWQBCheAJhHQAFgygUghQgNgWgYgOQgWgNgZAAQAlgPArAFQArAGAiAXQApAdARAqQAMAfgDAjQgEAigSAiQgnBGheCDQhcCDgnBGQgQAcgDAXQgDAeASAQQALAKASAAQAQAAAPgIQAMgHANgNIATgZQgLAigHAQQgNAbgQASQgTAUgZAKQgPAFgOAAQgLAAgLgEg");
	this.shape_30.setTransform(-9.1,10.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#861900").s().p("AivIOIgLgDQhIgahCgwQgVgOgVgTIgVgTQhPhNgrhlQgthoAAhzQAAhhAhhaQAPgsAXgnQBIiBB/hMQCDhPCZAAQCwAACPBlQCMBjA9CgQAjBdAABlIgBAPQgFDMiICYQiICWjIAdQgoAFglAAQhZAAhWgdg");
	this.shape_31.setTransform(1.5,17.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E9E9E9").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_32.setTransform(1.5,17.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#858585").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_33.setTransform(1.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-80.7,159.7,182.1);


(lib.itemPlanet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.btnItem1();
	this.instance.parent = this;
	this.instance.setTransform(1.5,10.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnItem1(), 3);

	this.instance_1 = new lib.Bitmap29();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70.5,-54.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D932C6").s().p("AhVBWQgSgIgJgMQgLgRAJgPQAGgKAPgEIAcgEQAkgFAlgeIA8g7QAIgIAHgDQAlgNgBAoQgBAigQAcIgDAFQglAwgsAXQgfARgfAAQgVAAgUgHg");
	this.shape.setTransform(-15.7,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D932C6").s().p("AAHAcQgMgCgWgQQgNgJACgHQABgEAGgEQAMgKAPgDIgCAAQAWAEAJAGQAIAFAEAIQAEAHgCAIQgDAJgKAFQgHADgHAAIgFAAg");
	this.shape_1.setTransform(13.5,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D932C6").s().p("AASAxQgVgIgMACIgNADQgHABgEgDQgFgDgBgHIgCgNQgCgGgLgOQgTgYAUgSQASgQAbAGQARAEAWAPQAVAPAMAQQAMAOABAPQABAUgTAFIgIABQgLAAgQgFg");
	this.shape_2.setTransform(23.2,-21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FC53E9").s().p("AiJCRQgMgJgCgPQgEgWATggQATgjAfgmQARgWApgvQA8hIBKgEQAigCAJANQAKANgQAiQgIASgRAWIgfAkQgLANgQAEQgRACgIgKQgjgvgrAjQgbAUgnA+QgSAcgDASQgCANAFAMQAFANAKAGIgHABQgJAAgJgIg");
	this.shape_3.setTransform(-29.9,-7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D932C6").s().p("AiGDCQgRgBgNgOQgMgNgDgSQgEgcASgoQAyhwBRhKQAtgrAsgXQBCglAiAcQATAPAFAcQAEAYgGAcQgJAkgXApQgOAYghAsQgWAegPAPQgYAVgZAEQgHACgVAAQgSAAgKAEQgPAFgdAdQgaAZgTAAIgBAAg");
	this.shape_4.setTransform(-28.9,-8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B500A1").s().p("AiSDeQgagKgMgXQgMgWACgbQAAgOAEgMQBUhxBrhZIBLg/QApgmATglQAQAEAOAMQAMAMAIAQQALAagBAqQgCBdgtBTQgtBUhLA1QgbATgQgIQgLgKgHgDQgNgHgTALIghAUQgMAGgMAAQgMAAgNgFg");
	this.shape_5.setTransform(-28.5,-4.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D932C6").s().p("AgUAOQgIgEgEgIQgEgIADgHIgCgCQAdgIAaALQASAIgCAKQgCAMgVABIgHAAQgQAAgKgFg");
	this.shape_6.setTransform(-7.6,-27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#45003E").s().p("ABCFcQgXgIgHgUQgFgQAGgUQADgMAMgYQAdg8AJglQAShKgwgKQgKgCgPAGQhEAZhoBzQhkBthIAXQAxgRBShiQBThlAJg0QAGgjgLgtQgHgcAAgNQgBgWALgOQALgMAYgGQAkgIAFgDQAcgNAOgkQAMgfgEgmQAZgDAqAJQAiACANgjQAIgUACgbQABgQgBghQAAAIAeAdIAlAnQAfAtATA0QAsB4gSBlQgKA9gXA6QgcBGglAvQgtA4g1AQQgKADgKAAQgMAAgLgFg");
	this.shape_7.setTransform(26.9,22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C400AE").s().p("AgeAjQgpgrgBgiQgDhQA/A1IAxAwQAcAaAIACQgiAHgNAZQgHAOAEAPQADAQANAHQgkgTghglg");
	this.shape_8.setTransform(-34.4,52.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C400AE").s().p("AgGAcQgMgCgGgKQgFgJAFgLQAFgLALgCIAGgGQAEgHAKADQAJAEAEAJQAEAKgDAKQgDAMgJAGQgHAFgHAAIgGgBg");
	this.shape_9.setTransform(8.7,-13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C400AE").s().p("AgXAgQgNgDgGgJQgIgKAGgMQAGgNAMABIABgDQAUgKAXgEQAKgBAIACQAKADABAIQACAJgLAKQgWAXgQAHQgHADgIAAIgIgBg");
	this.shape_10.setTransform(8.9,-29.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5E0054").s().p("AlFHTQgygTgXgZQglgpAVgoQAUgmAygHQBUgMBBg6QA8g2AfhTQAIgWAEguQAGg6ADgPQAQhWBFgJIAagCQAQAAAJgDQAXgHAKgYQAKgYgKgWIgRgdQgIgRAIgLQAGgIAPAAQAHAAASAFQAzANAygWQAKgFAEgGQAEgFABgLQAEgwgQgtQgNglgdgrQBwBPA/B5QBCB8AACPQAABcgdBYQgcBVg1BIQh0B9i1AuQhQAUhNAAQhfAAhYgfg");
	this.shape_11.setTransform(16.6,23.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C400AE").s().p("AghA+QgTgFgOgPQgOgPAAgTQAAgiA2ggIACgFQAJgEALACQAKACAIAGQALAIARAXIAfArQAIALAAAHQABAWgnAFIgnAEIgGAAQgRAAgOgEg");
	this.shape_12.setTransform(14.4,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C400AE").s().p("AA8BkQgKAAgPgGIgYgLQgLgEgUgCIghgEQgRgDgNgJQgQgJgEgPQgDgKADgYQgDgrAAgUQAAgjAggDQAYgDAyAcQAqAYAZAWQAmAhACAkQABAWgOASQgOASgTAAIgBAAg");
	this.shape_13.setTransform(24.3,-18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C400AE").s().p("AhTFoIgYghQgOgTgQgFQgIgCgPAAQgSABgFgBQgxgIgUhRQgYhmAThpQAThnA6hYQBBhjBag5QBshGBgAgQAgALAWATQAaAWAGAcQAEASgFAYQgEAOgKAbQgUA4gJAgQgNAxABApQABAeARBTQAOBGgGAqQgIAzglAuQggAogxAfQgyAggzAEIgOABQgwAAgdgfg");
	this.shape_14.setTransform(-22.4,9.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5E0054").s().p("AhlGAQgpgGgbgZQgGgFgBgHQgCgKAQgMQBehGA7iaQASgxAZhUQAehkAKgeQANglAEgRQAJgfACgZQAFhEgRgnQAYACAVAOQAVAOAKAVQAPAegFAjQgEAZgRAlQgSAmACA4QABAmANBMQANBNABAnQAEBYg3BLQg4BMhUAXQgaAHgaAAQgMAAgNgCg");
	this.shape_15.setTransform(-12.1,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8F007F").s().p("AmUGVQioioAAjtQAAjtCoinQCoioDsAAQBbAABWAcQBTAbBHAzQBwBPBAB4QBCB9AACOQAABcgdBZQgcBUg1BJQhQBth3A+Qh8BAiMAAQjsAAioiog");
	this.shape_16.setTransform(1.5,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF15EC").s().p("AgDAfQgOgCgIgOQgIgOAFgMQAEgKAIgBIAEgFQAMgGAOAHQAOAIACAOQADANgLAMQgKAKgMAAIgDAAg");
	this.shape_17.setTransform(-45.2,70.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF15EC").s().p("AgCAfQgOgCgJgNQgIgOAFgNQAEgJAIgBIAEgGQAMgGAOAHQAOAIACAOQADANgLAMQgKAKgMAAIgCAAg");
	this.shape_18.setTransform(-26.5,-40.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF15EC").s().p("AgBASQgIgBgFgIQgFgIADgHQADgGAEAAIACgEQAHgDAIAEQAIAFACAIQABAHgGAHQgGAGgHAAIgBAAg");
	this.shape_19.setTransform(43.1,73.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF15EC").s().p("AAAAMQgGAAgDgGQgEgGACgEQACgEADAAIACgDQAEgCAGADQAGADAAAGQABAEgEAFQgEAEgFAAIAAAAg");
	this.shape_20.setTransform(-36.7,70.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF15EC").s().p("AgBAMQgFAAgEgGQgDgFACgFQACgEADAAIABgCQAFgDAFADQAGADABAGQABAEgEAFQgEAEgFAAIgBAAg");
	this.shape_21.setTransform(-32.9,-37.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF15EC").s().p("AgBAMQgFAAgEgGQgDgFACgFQACgEADAAIABgCQAFgDAFADQAGADABAGQABAEgEAFQgEAEgFAAIgBAAg");
	this.shape_22.setTransform(53.8,72.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF15EC").s().p("AgUA5QgegKAFgmQADgdAUgVQAWgYAbAKQAOAFAEASQAHAcgXAmQgPAZgUAAQgHAAgHgCg");
	this.shape_23.setTransform(50,66.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E9E9E9").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_24.setTransform(1.5,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#858585").s().p("Ap8LNQhUAAAAhTIAAzzQAAhTBUAAIT5AAQBUAAAABTIAATzQAABThUAAg");
	this.shape_25.setTransform(1.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-80.7,159,182);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-44.1,356.5,68.2);


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
	this.frame_150 = function() {
		this.stop();
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


(lib.answer4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		maxItem = 4;
		var _this = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				_this.parent.sendScore(userAns, 1);
			}
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(-1.3,60.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// item
	this.item4 = new lib.itemPlanet4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(184.7,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item3 = new lib.itemPlanet3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(60.9,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item2 = new lib.itemPlanet2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(-62.8,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item1 = new lib.itemPlanet1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(-186.6,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer4, new cjs.Rectangle(-228.8,-74.6,457.6,157.7), null);


(lib.answer3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		maxItem = 4;
		var _this = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				_this.parent.sendScore(userAns, 1);
			}
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(-1.3,60.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// item
	this.item4 = new lib.itemPlanet4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(184.7,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item3 = new lib.itemPlanet3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(60.9,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item2 = new lib.itemPlanet2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(-62.8,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item1 = new lib.itemPlanet1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(-186.6,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer3, new cjs.Rectangle(-228.8,-74.6,457.6,157.7), null);


(lib.answer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 4;
		maxItem = 4;
		var _this = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				_this.parent.sendScore(userAns, 1);
			}
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(-1.3,60.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// item
	this.item4 = new lib.itemPlanet4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(184.7,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item3 = new lib.itemPlanet3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(60.9,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item2 = new lib.itemPlanet2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(-62.8,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item1 = new lib.itemPlanet1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(-186.6,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer2, new cjs.Rectangle(-228.8,-74.6,457.6,157.7), null);


(lib.answer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
		maxItem = 4;
		var _this = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			userAns = itemNum;
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				_this.parent.sendScore(userAns, 1);
			}
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(-1.3,60.5,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// item
	this.item4 = new lib.itemPlanet4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(184.7,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item3 = new lib.itemPlanet3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(60.9,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item2 = new lib.itemPlanet2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(-62.8,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.item1 = new lib.itemPlanet1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(-186.6,-30.5,0.6,0.6,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.answer1, new cjs.Rectangle(-228.8,-74.6,457.6,157.7), null);


// stage content:
(lib.y6s5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:147,q3:189,q4:230,finalFb:291});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed=18;
	}
	this.frame_4 = function() {
		playSound("mdroid_talk");
	}
	this.frame_100 = function() {
		this.stop();
		var _this = this;
		var stageNum = 5;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		//var maxQ = 3;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		//this.qList1 = [0, 1, 2, 3];
		var qItem1 = [{
						"qId": "y6s5_1",
						"qDomain": 2,
						"qParam": 4,
						"qSkill": 17,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s5_2",
						"qDomain": 2,
						"qParam": 4,
						"qSkill": 17,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s5_3",
						"qDomain": 2,
						"qParam": 4,
						"qSkill": 17,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s5_4",
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
		//debugMode = false;
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(qItem1[0]);
			this.myData.qItem.push(qItem1[1]);
			this.myData.qItem.push(qItem1[2]);
			this.myData.qItem.push(qItem1[3]);
		} else {
			//shuffle and take only what we need
			this.myData.qItem.push(qItem1[randRange(0, 3)]);
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
	this.frame_106 = function() {
		playSound("questionAlert");
	}
	this.frame_137 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		playSound("questionAlert");
	}
	this.frame_180 = function() {
		this.stop();
	}
	this.frame_191 = function() {
		playSound("questionAlert");
	}
	this.frame_222 = function() {
		this.stop();
	}
	this.frame_232 = function() {
		playSound("questionAlert");
	}
	this.frame_263 = function() {
		this.stop();
	}
	this.frame_291 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_460 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(96).call(this.frame_100).wait(6).call(this.frame_106).wait(31).call(this.frame_137).wait(12).call(this.frame_149).wait(31).call(this.frame_180).wait(11).call(this.frame_191).wait(31).call(this.frame_222).wait(10).call(this.frame_232).wait(31).call(this.frame_263).wait(28).call(this.frame_291).wait(169).call(this.frame_460).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(357));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(291).to({_off:false},0).wait(170));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(698.1,78.6);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(357));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(761.4,136.7,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:684.3,y:80.5},16,cjs.Ease.cubicOut).wait(416));

	// actMc
	this.instance_2 = new lib.answer1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(396.7,685.5);
	this.instance_2._off = true;

	this.instance_3 = new lib.answer2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(396.7,685.5);
	this.instance_3._off = true;

	this.instance_4 = new lib.answer3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(396.7,685.5);
	this.instance_4._off = true;

	this.instance_5 = new lib.answer4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(396.7,461.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},126).to({state:[{t:this.instance_2}]},11).to({state:[]},10).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_3}]},11).to({state:[]},1).to({state:[{t:this.instance_4}]},30).to({state:[{t:this.instance_4}]},11).to({state:[]},1).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_5}]},11).to({state:[]},1).wait(197));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(126).to({_off:false},0).to({y:461.5},11,cjs.Ease.cubicOut).to({_off:true},10).wait(314));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(169).to({_off:false},0).to({y:461.5},11,cjs.Ease.cubicOut).to({_off:true},1).wait(71).to({_off:false,y:685.5},0).to({_off:true,y:461.5},11,cjs.Ease.cubicOut).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(211).to({_off:false},0).to({y:461.5},11,cjs.Ease.cubicOut).to({_off:true},1).wait(238));

	// Layer 4
	this.instance_6 = new lib.picture_planet_weight("single",2);
	this.instance_6.parent = this;
	this.instance_6.setTransform(648.4,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_6._off = true;

	this.instance_7 = new lib.picture_planet_weight2("single",2);
	this.instance_7.parent = this;
	this.instance_7.setTransform(648.4,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_7._off = true;

	this.instance_8 = new lib.picture_planet_weight3("single",2);
	this.instance_8.parent = this;
	this.instance_8.setTransform(648.4,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_8._off = true;

	this.instance_9 = new lib.picture_planet_weight4("single",2);
	this.instance_9.parent = this;
	this.instance_9.setTransform(648.4,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(112).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},22).wait(314));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(155).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},13).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(197).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},13).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(238).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},13).wait(197));

	// actMc
	this.instance_10 = new lib.picture_planet_weight("single",1);
	this.instance_10.parent = this;
	this.instance_10.setTransform(413.9,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_10._off = true;

	this.instance_11 = new lib.picture_planet_weight2("single",1);
	this.instance_11.parent = this;
	this.instance_11.setTransform(413.9,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_11._off = true;

	this.instance_12 = new lib.picture_planet_weight3("single",1);
	this.instance_12.parent = this;
	this.instance_12.setTransform(413.9,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_12._off = true;

	this.instance_13 = new lib.picture_planet_weight4("single",1);
	this.instance_13.parent = this;
	this.instance_13.setTransform(413.9,279.6,0.2,0.2,0,0,0,0,0.3);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(109).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},25).wait(314));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(152).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},16).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(194).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},16).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(235).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},16).wait(197));

	// actMc
	this.instance_14 = new lib.picture_planet_weight("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(180.7,278.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_14._off = true;

	this.instance_15 = new lib.picture_planet_weight2("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(180.7,278.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_15._off = true;

	this.instance_16 = new lib.picture_planet_weight3("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(180.7,278.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_16._off = true;

	this.instance_17 = new lib.picture_planet_weight4("single",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(180.7,278.4,0.2,0.2,0,0,0,0.3,0.3);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(106).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},28).wait(314));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(149).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},19).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(191).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},19).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(232).to({_off:false},0).to({regX:0,regY:0,scaleX:1,scaleY:1},13,cjs.Ease.backOut).to({_off:true},19).wait(197));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(583.8,144.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(100).to({_off:false},0).to({_off:true},4).wait(357));

	// ss
	this.instance_18 = new lib.dialogue1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(444.9,123.4,1,1,0,0,0,-0.6,0.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(43).to({_off:false},0).to({_off:true},248).wait(170));

	// avatar
	this.instance_19 = new lib.avatarBotsX("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(146,124.6,0.052,0.052);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,y:124.7},17,cjs.Ease.elasticOut).to({_off:true},248).wait(170));

	// q
	this.instance_20 = new lib.mcQ();
	this.instance_20.parent = this;
	this.instance_20.setTransform(450,194.6,0.1,0.1);
	this.instance_20._off = true;

	this.instance_21 = new lib.mcQcopy();
	this.instance_21.parent = this;
	this.instance_21.setTransform(450,194.6,0.1,0.1);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(106).to({_off:false},0).to({scaleX:1,scaleY:1,x:460.4,y:172.2},18,cjs.Ease.elasticOut).to({_off:true},23).wait(44).to({_off:false,scaleX:0.1,scaleY:0.1,x:450,y:194.6},0).to({scaleX:1,scaleY:1,x:460.4,y:172.2},18,cjs.Ease.elasticOut).to({_off:true},14).wait(238));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(149).to({_off:false},0).to({scaleX:1,scaleY:1,x:460.4,y:172.2},18,cjs.Ease.elasticOut).to({_off:true},14).wait(51).to({_off:false,scaleX:0.1,scaleY:0.1,x:450,y:194.6},0).to({scaleX:1,scaleY:1,x:460.4,y:172.2},18,cjs.Ease.elasticOut).to({_off:true},14).wait(197));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(291).to({graphics:null,x:0,y:0}).wait(170));

	// flash
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(435));

	// Layer 1
	this.instance_22 = new lib.Bitmap22_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(-112,22);
	this.instance_22._off = true;

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(20).to({_off:false},0).to({_off:true},271).wait(170));

	// bg
	this.instance_23 = new lib.Bitmap3();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(461));

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
		{src:"images/y6s5/Bitmap21.png?1534389321365", id:"Bitmap21"},
		{src:"images/y6s5/Bitmap22.png?1534389321365", id:"Bitmap22"},
		{src:"images/y6s5/Bitmap23.png?1534389321365", id:"Bitmap23"},
		{src:"images/y6s5/Bitmap27.png?1534389321365", id:"Bitmap27"},
		{src:"images/y6s5/Bitmap29.png?1534389321365", id:"Bitmap29"},
		{src:"images/y6s5/Bitmap3.png?1534389321365", id:"Bitmap3"},
		{src:"images/y6s5/Bitmap30.png?1534389321365", id:"Bitmap30"},
		{src:"images/y6s5/Bitmap31.png?1534389321365", id:"Bitmap31"},
		{src:"images/y6s5/Bitmap32.png?1534389321365", id:"Bitmap32"},
		{src:"images/y6s5/Bitmap33.png?1534389321365", id:"Bitmap33"},
		{src:"images/y6s5/Bitmap34.png?1534389321365", id:"Bitmap34"},
		{src:"images/y6s5/Bitmap35.png?1534389321365", id:"Bitmap35"},
		{src:"images/y6s5/Bitmap36.png?1534389321365", id:"Bitmap36"},
		{src:"images/y6s5/Bitmap37.png?1534389321365", id:"Bitmap37"},
		{src:"images/y6s5/Bitmap38.png?1534389321365", id:"Bitmap38"},
		{src:"images/y6s5/Bitmap39.png?1534389321365", id:"Bitmap39"},
		{src:"images/y6s5/Bitmap40.png?1534389321365", id:"Bitmap40"},
		{src:"images/y6s5/Bitmap41.png?1534389321365", id:"Bitmap41"},
		{src:"images/y6s5/Bitmap42.png?1534389321365", id:"Bitmap42"},
		{src:"images/y6s5/Bitmap43.png?1534389321365", id:"Bitmap43"},
		{src:"images/y6s5/Bitmap44.png?1534389321365", id:"Bitmap44"},
		{src:"images/y6s5/Bitmap45.png?1534389321365", id:"Bitmap45"},
		{src:"images/y6s5/Bitmap8.png?1534389321365", id:"Bitmap8"},
		{src:"images/y6s5/Bitmap9.png?1534389321365", id:"Bitmap9"},
		{src:"images/y6s5/Bitmap22_1.png?1534389321365", id:"Bitmap22_1"},
		{src:"sounds/mdroid_talk.mp3?1534389321366", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1534389321366", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1534389321366", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1534389321366", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1534389321366", id:"submitAns"},
		{src:"sounds/timeout.mp3?1534389321366", id:"timeout"}
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