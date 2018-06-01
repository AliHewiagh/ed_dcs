(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2941,632);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,340);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


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

	// Layer_4
	this.myTxt = new cjs.Text("Move the astronaut to the gleaming block.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 386;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/BAAMA+DAAA");
	this.shape.setTransform(-53,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A9qC4IAAhmIilACIClh6IAAiMMA+DAAAIAAFq");
	this.shape_1.setTransform(-61.7,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9vC2IAAhnIilADIClh7IAAiMMA+EAAAIAAFrg");
	this.shape_2.setTransform(-61.2,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,422,39.4), null);


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
	this.myTxt = new cjs.Text("Gerakkan angkasawan ke blok yang bersinar.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 386;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A/BAAMA+DAAA");
	this.shape.setTransform(-53,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A9qC4IAAhmIilACIClh6IAAiMMA+DAAAIAAFq");
	this.shape_1.setTransform(-61.7,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A9vC2IAAhnIilADIClh7IAAiMMA+EAAAIAAFrg");
	this.shape_2.setTransform(-61.2,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,422,39.4), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAbIAAgDQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgGgEgFQgFgDgIAAQgLAAgLAGIAAgMIALgEIAMgBQANAAAIAGQAJAIAAAKQAAAGgCAGIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAACg");
	this.shape.setTransform(-36.2,48.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(-45.3,50.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(-51.8,48.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(-58.7,48.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(-67.6,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(-76,50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(-82.3,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-90.1,50.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_8.setTransform(-99,48.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_9.setTransform(-112.9,48.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(-122.6,50.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(-132.2,48.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_12.setTransform(-141.4,50.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_13.setTransform(-151,48.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_14.setTransform(21.7,29.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_15.setTransform(14.8,26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkAwQAMgCAFgFQAGgEAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_16.setTransform(6,28.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(-3,26.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_18.setTransform(-11.6,26.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_19.setTransform(-20.2,26.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_20.setTransform(-27.2,26.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(-34.9,26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_22.setTransform(-42.2,25.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_23.setTransform(-49.2,26.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_24.setTransform(-57.6,26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(-70.8,28.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(-80.1,26.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(-89.8,26.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgjAwQALgCAGgFQAGgEAEgJIACgHIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_28.setTransform(-98.6,28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_29.setTransform(-108.9,24.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_30.setTransform(-113.7,25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(-118.3,24.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_32.setTransform(-124.5,26.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_33.setTransform(-130.6,24.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_34.setTransform(-135.4,25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_35.setTransform(-141.6,24.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(-151.4,26.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_37.setTransform(149.4,2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_38.setTransform(137.4,2.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_39.setTransform(131,0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(124,2.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_41.setTransform(114.4,0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_42.setTransform(100.9,2.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_43.setTransform(91.3,2.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_44.setTransform(83.3,0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(73.4,0.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(64.3,2.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_47.setTransform(56.3,0.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_48.setTransform(47.1,2.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_49.setTransform(40.4,2.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_50.setTransform(35.1,0.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(28.1,0.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(14.6,2.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_53.setTransform(5,2.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_54.setTransform(-3,0.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(-12.9,2.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_56.setTransform(-26.3,0.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_57.setTransform(-36,2.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_58.setTransform(-44,0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_59.setTransform(-51.2,2.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-59.7,2.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_61.setTransform(-71.3,2.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(-87.2,2.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_63.setTransform(-96.9,2.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_64.setTransform(-106.5,0.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_65.setTransform(-120.3,2.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_66.setTransform(-128.9,2.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_67.setTransform(-137.8,2.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_68.setTransform(-149.2,0.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_69.setTransform(8.8,-18.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_70.setTransform(4.6,-21.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_71.setTransform(-0.7,-23.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_72.setTransform(-7.2,-23.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_73.setTransform(-15.4,-23.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_74.setTransform(-25.2,-21.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_75.setTransform(-32.2,-21.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_76.setTransform(-39.9,-21.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_77.setTransform(-48.8,-23.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_78.setTransform(-62.7,-23.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_79.setTransform(-72.5,-21.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_80.setTransform(-78.9,-23.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_81.setTransform(-85.2,-21.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_82.setTransform(-92.4,-22.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_83.setTransform(-101.2,-23.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_84.setTransform(-108.2,-21.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_85.setTransform(-114.6,-23.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_86.setTransform(-118.9,-21.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_87.setTransform(-126.9,-21.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_88.setTransform(-134.4,-22.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_89.setTransform(-141.7,-21.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_90.setTransform(-151.2,-23.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_91.setTransform(-42.5,52.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_92.setTransform(-51.8,48.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_93.setTransform(-107.3,52.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAqA5IgMgdIg7AAIgMAdIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_94.setTransform(-136.1,48.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_95.setTransform(-49.6,25.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_96.setTransform(-56.1,26.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_97.setTransform(-103.7,26.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_98.setTransform(-121.7,24.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_99.setTransform(-132,26.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_100.setTransform(-139.4,24.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_101.setTransform(122.5,1.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(60,2.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_103.setTransform(51.6,2.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_104.setTransform(15.6,0.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_105.setTransform(0.6,0.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_106.setTransform(-12,2.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_107.setTransform(-110.1,2.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_108.setTransform(-137.2,0.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_109.setTransform(18.7,-23.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_110.setTransform(9.8,-21.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgMAAQgKAAgHAIg");
	this.shape_111.setTransform(0.4,-23.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_112.setTransform(-17.8,-21.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_113.setTransform(-48.6,-23.3);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_114.setTransform(-72.8,-23.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_115.setTransform(-85.1,-21.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_116.setTransform(-107.4,-22.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_117.setTransform(-118.6,-21.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_118.setTransform(-127.6,-23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90,p:{x:-151.2}},{t:this.shape_89,p:{x:-141.7}},{t:this.shape_88,p:{x:-134.4}},{t:this.shape_87,p:{x:-126.9,y:-21.5}},{t:this.shape_86},{t:this.shape_85,p:{x:-114.6,y:-23.1}},{t:this.shape_84,p:{x:-108.2}},{t:this.shape_83,p:{x:-101.2}},{t:this.shape_82},{t:this.shape_81,p:{x:-85.2,y:-21.5}},{t:this.shape_80,p:{x:-78.9,y:-23.3}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:-39.9,y:-21.5}},{t:this.shape_75,p:{x:-32.2}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-0.7,y:-23.1}},{t:this.shape_70,p:{x:4.6,y:-21.5}},{t:this.shape_69,p:{x:8.8}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-71.3}},{t:this.shape_60},{t:this.shape_59,p:{x:-51.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-12.9}},{t:this.shape_54},{t:this.shape_53,p:{x:5,y:2.4}},{t:this.shape_52,p:{x:14.6,y:2.4}},{t:this.shape_51,p:{x:28.1}},{t:this.shape_50,p:{x:35.1}},{t:this.shape_49,p:{x:40.4}},{t:this.shape_48,p:{x:47.1}},{t:this.shape_47},{t:this.shape_46,p:{x:64.3,y:2.4}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:100.9}},{t:this.shape_41},{t:this.shape_40,p:{x:124,y:2.4}},{t:this.shape_39,p:{x:131,y:0.6}},{t:this.shape_38,p:{x:137.4}},{t:this.shape_37,p:{x:149.4}},{t:this.shape_36},{t:this.shape_35,p:{x:-141.6,y:24.5}},{t:this.shape_34},{t:this.shape_33,p:{x:-130.6}},{t:this.shape_32,p:{x:-124.5}},{t:this.shape_31,p:{x:-118.3}},{t:this.shape_30},{t:this.shape_29,p:{x:-108.9}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-80.1,y:26.3}},{t:this.shape_25,p:{x:-70.8}},{t:this.shape_24,p:{x:-57.6,y:26.3}},{t:this.shape_23,p:{x:-49.2,y:26.3}},{t:this.shape_22,p:{x:-42.2}},{t:this.shape_21,p:{x:-34.9}},{t:this.shape_20,p:{x:-27.2,y:26.3}},{t:this.shape_19,p:{x:-20.2,y:26.4}},{t:this.shape_18,p:{x:-11.6,y:26.3}},{t:this.shape_17,p:{x:-3}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:21.7}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-132.2,y:48.5}},{t:this.shape_10,p:{x:-122.6,y:50.2}},{t:this.shape_9,p:{x:-112.9,y:48.4}},{t:this.shape_8},{t:this.shape_7,p:{x:-90.1}},{t:this.shape_6,p:{x:-82.3}},{t:this.shape_5,p:{x:-76,y:50.2}},{t:this.shape_4,p:{x:-67.6}},{t:this.shape_3,p:{x:-58.7,y:48.5}},{t:this.shape_2,p:{x:-51.8,y:48.6}},{t:this.shape_1},{t:this.shape,p:{x:-36.2}}]}).to({state:[{t:this.shape_90,p:{x:-137.2}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_89,p:{x:-99.9}},{t:this.shape_88,p:{x:-92.5}},{t:this.shape_115},{t:this.shape_75,p:{x:-77.1}},{t:this.shape_114},{t:this.shape_84,p:{x:-66.3}},{t:this.shape_83,p:{x:-59.4}},{t:this.shape_113},{t:this.shape_10,p:{x:-39.4,y:-21.5}},{t:this.shape_24,p:{x:-30.4,y:-21.5}},{t:this.shape_112},{t:this.shape_52,p:{x:-8.9,y:-21.5}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_69,p:{x:25.6}},{t:this.shape_108},{t:this.shape_85,p:{x:-130.4,y:0.8}},{t:this.shape_61,p:{x:-121.6}},{t:this.shape_107},{t:this.shape_55,p:{x:-97}},{t:this.shape_42,p:{x:-87.4}},{t:this.shape_51,p:{x:-78.1}},{t:this.shape_37,p:{x:-61.9}},{t:this.shape_38,p:{x:-50.2}},{t:this.shape_70,p:{x:-41.8,y:2.4}},{t:this.shape_35,p:{x:-34.6,y:0.6}},{t:this.shape_18,p:{x:-27.2,y:2.4}},{t:this.shape_106},{t:this.shape_71,p:{x:-3.2,y:0.8}},{t:this.shape_105},{t:this.shape_80,p:{x:4.4,y:0.6}},{t:this.shape_104},{t:this.shape_81,p:{x:24.5,y:2.4}},{t:this.shape_59,p:{x:36.4}},{t:this.shape_76,p:{x:43.2,y:2.4}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_49,p:{x:68}},{t:this.shape_3,p:{x:74.9,y:0.7}},{t:this.shape_48,p:{x:84.3}},{t:this.shape_11,p:{x:93.2,y:0.7}},{t:this.shape_50,p:{x:104.4}},{t:this.shape_26,p:{x:110.9,y:2.4}},{t:this.shape_101},{t:this.shape_9,p:{x:130.1,y:0.6}},{t:this.shape_23,p:{x:139.1,y:2.4}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_39,p:{x:-125.5,y:24.5}},{t:this.shape_98},{t:this.shape_87,p:{x:-115.3,y:26.3}},{t:this.shape_97},{t:this.shape_33,p:{x:-94.9}},{t:this.shape_17,p:{x:-88.4}},{t:this.shape_25,p:{x:-79.1}},{t:this.shape_53,p:{x:-65.2,y:26.3}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_31,p:{x:-44.8}},{t:this.shape_32,p:{x:-38.6}},{t:this.shape_29,p:{x:-32.5}},{t:this.shape_22,p:{x:-27.9}},{t:this.shape_2,p:{x:-23.1,y:24.7}},{t:this.shape_21,p:{x:-16.8}},{t:this.shape_5,p:{x:-8.6,y:26.3}},{t:this.shape_14,p:{x:-2.7}},{t:this.shape_94},{t:this.shape_20,p:{x:-126.8,y:50.2}},{t:this.shape_7,p:{x:-120.1}},{t:this.shape_93},{t:this.shape_46,p:{x:-98.5,y:50.2}},{t:this.shape_19,p:{x:-89.3,y:50.3}},{t:this.shape_6,p:{x:-77}},{t:this.shape_4,p:{x:-70.3}},{t:this.shape_40,p:{x:-61.4,y:50.2}},{t:this.shape_92},{t:this.shape_91},{t:this.shape,p:{x:-34.2}}]},1).wait(1));

	// Layer_1
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EgfWAgjMAFIg8nIBXhQIhIhQIALh5MAnjAAAIRoAAMgFKBBA");
	this.shape_119.setTransform(-13.7,162.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("EgfWAggMAFIg8mIBXhQIhIhQIALh5MAnjAAAIRoAAMgFKBA/g");
	this.shape_120.setTransform(-13.7,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,-46.1,403.4,418.1);


(lib.Symbol3 = function(mode,startPosition,loop) {
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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(62.3,77.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(58.6,72.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_2.setTransform(51.9,74.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(45.4,72.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_4.setTransform(37.4,72.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(30.5,74.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_6.setTransform(24,72.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_7.setTransform(19.7,74.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(11.7,74.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_9.setTransform(4.3,73);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_10.setTransform(-3.1,74.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_11.setTransform(-10.6,73);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(-22.2,74.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(-31.9,74.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_14.setTransform(-39.9,72.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_15.setTransform(-47.6,73);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_16.setTransform(-55.3,74.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_17.setTransform(-67,74.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(-79,74.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(-88.3,74.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(-97.2,74.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_21.setTransform(-108.7,74.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(-124.9,74.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(-134.5,72.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(-143.8,74.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_25.setTransform(-153.4,74.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(147.6,50.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_27.setTransform(140.2,50.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(134.2,50.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAJAAQAcAAAAAfIAAAzg");
	this.shape_29.setTransform(125,48.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_30.setTransform(115.3,50.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_31.setTransform(106.7,50.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_32.setTransform(95.1,48.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_33.setTransform(88.4,48.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_34.setTransform(81.5,50.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_35.setTransform(72.4,48.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(63,50.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_37.setTransform(54.6,50.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_38.setTransform(44.6,48.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_39.setTransform(38,50.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_40.setTransform(29.4,50.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_41.setTransform(20.8,50.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_42.setTransform(12,52.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_43.setTransform(3,50.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-6,50.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_45.setTransform(-17.4,50.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(-33.3,50.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(-43,50.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_48.setTransform(-51,48.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_49.setTransform(-60.8,50.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_50.setTransform(-74.3,50.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_51.setTransform(-84,50.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_52.setTransform(-90.9,50.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_53.setTransform(-96.2,48.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_54.setTransform(-102.2,50.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_55.setTransform(-109.5,48.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(-119.4,50.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_57.setTransform(-126.8,49.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_58.setTransform(-134.3,50.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_59.setTransform(-143.2,50.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgpA5IAAhxIAtAAQARAAAKAIQALAJgBAPQABAPgLAIQgKAIgRAAIggAAIAAAygAgcgDIAfAAQAMAAAHgGQAGgFABgKQgBgLgGgFQgHgFgMAAIgfAAg");
	this.shape_60.setTransform(-152.4,48.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_61.setTransform(-39.1,29.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(-45.7,26.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_63.setTransform(-55.3,26.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_64.setTransform(-61.8,24.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_65.setTransform(-68.7,26.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_66.setTransform(-76.2,26.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_67.setTransform(-79.5,26.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_68.setTransform(-87.2,26.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_69.setTransform(-96.1,24.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_70.setTransform(-107.3,24.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_71.setTransform(-114.2,26.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_72.setTransform(-120.7,24.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_73.setTransform(-125,26.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_74.setTransform(-133,26.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_75.setTransform(-140.4,25.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_76.setTransform(-147.8,26.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_77.setTransform(-155.3,25.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_78.setTransform(160.7,2.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_79.setTransform(152.1,2.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(143.2,2.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_81.setTransform(131.5,2.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_82.setTransform(120.2,2.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_83.setTransform(111.8,2.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_84.setTransform(99,2.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_85.setTransform(89.3,2.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_86.setTransform(81.3,0.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_87.setTransform(71.5,0.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(62.3,2.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_89.setTransform(54.3,0.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_90.setTransform(45.2,2.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_91.setTransform(38.4,2.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_92.setTransform(33.1,0.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_93.setTransform(26.2,0.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_94.setTransform(14,0.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_95.setTransform(4.1,2.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_96.setTransform(-5.5,0.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_97.setTransform(-11.9,0.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_98.setTransform(-16.7,1.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_99.setTransform(-28.7,2.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_100.setTransform(-37.3,2.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_101.setTransform(-46.2,2.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_102.setTransform(-57.9,2.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_103.setTransform(-73.8,2.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_104.setTransform(-83.4,2.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_105.setTransform(-93,0.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_106.setTransform(-106.4,0.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_107.setTransform(-116.2,2.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_108.setTransform(-124.2,0.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_109.setTransform(-131.4,2.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_110.setTransform(-139.8,2.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AApA5IAAhUIglBUIgIAAIglhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_111.setTransform(-151.2,0.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_112.setTransform(124.1,-18.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_113.setTransform(120.4,-23.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_114.setTransform(115.6,-22.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_115.setTransform(111,-23.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_116.setTransform(107.2,-23.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_117.setTransform(101,-21.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_118.setTransform(93.7,-22.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_119.setTransform(82.1,-21.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_120.setTransform(72.4,-21.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_121.setTransform(62.8,-19.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_122.setTransform(53.5,-21.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_123.setTransform(44.5,-21.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_124.setTransform(35.1,-23.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_125.setTransform(23.5,-22.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_126.setTransform(16.1,-21.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_127.setTransform(8.1,-23.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_128.setTransform(1.4,-23.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_129.setTransform(-2.9,-21.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_130.setTransform(-10.7,-21.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_131.setTransform(-19.6,-23.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_132.setTransform(-33.9,-19.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_133.setTransform(-43.2,-21.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_134.setTransform(-52.9,-21.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgjAwQALgCAGgFQAGgEAEgIIACgIIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_135.setTransform(-61.7,-19.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_136.setTransform(-72,-23.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_137.setTransform(-79,-21.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_138.setTransform(-85.4,-23.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_139.setTransform(-89.7,-21.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_140.setTransform(-97.7,-21.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_141.setTransform(-105.2,-22.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_142.setTransform(-112.5,-21.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_143.setTransform(-120,-22.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_144.setTransform(-128.8,-23.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_145.setTransform(-133.6,-22.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_146.setTransform(-141,-21.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_147.setTransform(-149,-23.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgGA5IAAhxIAMAAIAABxg");
	this.shape_148.setTransform(-155.9,-23.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_149.setTransform(-68.6,72.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_150.setTransform(-130.4,73);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_151.setTransform(-145.3,73);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_152.setTransform(113.7,48.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_153.setTransform(106.1,49.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_154.setTransform(86.7,50.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_155.setTransform(-0.7,48.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_156.setTransform(-17.1,50.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_157.setTransform(-31.2,49.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_158.setTransform(-133.6,48.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_159.setTransform(-143.2,48.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_160.setTransform(-102.6,25.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_161.setTransform(-117.4,25.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_162.setTransform(-137.7,24.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_163.setTransform(-145.3,25.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgdAzIADgLQAHAEAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_164.setTransform(138.9,4.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_165.setTransform(101.1,0.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_166.setTransform(45.7,2.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_167.setTransform(20,1.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_168.setTransform(12.7,2.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_169.setTransform(-9.7,2.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_170.setTransform(-38,2.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_171.setTransform(-63.1,1.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_172.setTransform(-106.8,2.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_173.setTransform(-114.2,0.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_174.setTransform(-141.2,0.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_175.setTransform(89.5,-19.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_176.setTransform(78.5,-22.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_177.setTransform(62.1,-21.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_178.setTransform(31.7,-23.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_179.setTransform(3.3,-21.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_180.setTransform(-4.7,-21.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_181.setTransform(-19.5,-21.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_182.setTransform(-37.9,-21.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_183.setTransform(-50.3,-23.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_184.setTransform(-57.9,-22.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_185.setTransform(-69.4,-23.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_186.setTransform(-97.6,-21.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_187.setTransform(-104.6,-21.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_188.setTransform(-112.6,-23.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_189.setTransform(-120.2,-22.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_190.setTransform(-131.7,-21.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQANAAAKADQAJAEAHAHIgEAKQgJgHgIgDQgHgDgLAAQgSAAgKAMQgKAMAAAWQAAAXAKAMQAKAMAUAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgKACQgLACgMAAQgQAAgMgHg");
	this.shape_191.setTransform(-142.3,-23.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146,p:{x:-141,y:-21.4}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:-105.2}},{t:this.shape_140,p:{x:-97.7,y:-21.5}},{t:this.shape_139,p:{x:-89.7,y:-21.5}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{x:-72}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:-33.9}},{t:this.shape_131},{t:this.shape_130,p:{x:-10.7,y:-21.5}},{t:this.shape_129,p:{x:-2.9,y:-21.5}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126,p:{x:16.1,y:-21.4}},{t:this.shape_125},{t:this.shape_124,p:{x:35.1,y:-23.2}},{t:this.shape_123,p:{x:44.5,y:-21.5}},{t:this.shape_122},{t:this.shape_121,p:{x:62.8}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:93.7}},{t:this.shape_117,p:{x:101,y:-21.5}},{t:this.shape_116,p:{x:107.2}},{t:this.shape_115,p:{x:111}},{t:this.shape_114},{t:this.shape_113,p:{x:120.4}},{t:this.shape_112,p:{x:124.1}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109,p:{x:-131.4}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:-83.4}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-37.3,y:2.4}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:-11.9,y:0.8}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:26.2}},{t:this.shape_92,p:{x:33.1,y:0.8}},{t:this.shape_91,p:{x:38.4}},{t:this.shape_90,p:{x:45.2,y:2.4}},{t:this.shape_89},{t:this.shape_88,p:{x:62.3,y:2.4}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83,p:{x:111.8,y:2.4}},{t:this.shape_82,p:{x:120.2,y:2.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:152.1,y:2.4}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:-147.8,y:26.4}},{t:this.shape_75},{t:this.shape_74,p:{x:-133,y:26.3}},{t:this.shape_73,p:{x:-125,y:26.3}},{t:this.shape_72,p:{x:-120.7,y:24.7}},{t:this.shape_71},{t:this.shape_70,p:{x:-107.3,y:24.5}},{t:this.shape_69},{t:this.shape_68,p:{x:-87.2,y:26.3}},{t:this.shape_67,p:{x:-79.5}},{t:this.shape_66},{t:this.shape_65,p:{x:-68.7,y:26.3}},{t:this.shape_64,p:{x:-61.8,y:24.5}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:-39.1}},{t:this.shape_60},{t:this.shape_59,p:{x:-143.2}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:-102.2}},{t:this.shape_53,p:{x:-96.2,y:48.6}},{t:this.shape_52,p:{x:-90.9}},{t:this.shape_51},{t:this.shape_50,p:{x:-74.3,y:50.2}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-33.3,y:50.2}},{t:this.shape_45,p:{x:-17.4,y:50.2}},{t:this.shape_44,p:{x:-6}},{t:this.shape_43,p:{x:3,y:50.2}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:29.4}},{t:this.shape_39,p:{x:38,y:50.3}},{t:this.shape_38,p:{x:44.6,y:48.4}},{t:this.shape_37,p:{x:54.6}},{t:this.shape_36,p:{x:63}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:88.4,y:48.6}},{t:this.shape_32},{t:this.shape_31,p:{x:106.7,y:50.2}},{t:this.shape_30,p:{x:115.3}},{t:this.shape_29},{t:this.shape_28,p:{x:134.2,y:50.2}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:-143.8,y:74.1}},{t:this.shape_23,p:{x:-134.5,y:72.4}},{t:this.shape_22},{t:this.shape_21,p:{x:-108.7,y:74.1}},{t:this.shape_20,p:{x:-97.2}},{t:this.shape_19,p:{x:-88.3,y:74.1}},{t:this.shape_18},{t:this.shape_17,p:{x:-67,y:74.1}},{t:this.shape_16,p:{x:-55.3,y:74.1}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-31.9}},{t:this.shape_12,p:{x:-22.2,y:74.1}},{t:this.shape_11},{t:this.shape_10,p:{x:-3.1,y:74.2}},{t:this.shape_9},{t:this.shape_8,p:{x:11.7}},{t:this.shape_7,p:{x:19.7}},{t:this.shape_6,p:{x:24,y:72.5}},{t:this.shape_5,p:{x:30.5,y:74.1}},{t:this.shape_4,p:{x:37.4,y:72.3}},{t:this.shape_3,p:{x:45.4,y:72.5}},{t:this.shape_2,p:{x:51.9}},{t:this.shape_1,p:{x:58.6}},{t:this.shape,p:{x:62.3}}]}).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_39,p:{x:-88.4,y:-21.4}},{t:this.shape_132,p:{x:-79.2}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_115,p:{x:-43.7}},{t:this.shape_182},{t:this.shape_141,p:{x:-27}},{t:this.shape_181},{t:this.shape_118,p:{x:-12.1}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_113,p:{x:7.6}},{t:this.shape_65,p:{x:14.1,y:-21.5}},{t:this.shape_136,p:{x:21}},{t:this.shape_178},{t:this.shape_97,p:{x:38.6,y:-23.1}},{t:this.shape_116,p:{x:42.4}},{t:this.shape_92,p:{x:46.2,y:-23.1}},{t:this.shape_121,p:{x:52.7}},{t:this.shape_177},{t:this.shape_50,p:{x:71.1,y:-21.5}},{t:this.shape_176},{t:this.shape_64,p:{x:83.3,y:-23.3}},{t:this.shape_175},{t:this.shape_112,p:{x:95.5}},{t:this.shape_174},{t:this.shape_5,p:{x:-129.8,y:2.4}},{t:this.shape_139,p:{x:-121.4,y:2.4}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_16,p:{x:-94,y:2.4}},{t:this.shape_46,p:{x:-84.4,y:2.4}},{t:this.shape_93,p:{x:-75.1}},{t:this.shape_171},{t:this.shape_72,p:{x:-58.3,y:0.8}},{t:this.shape_45,p:{x:-49.5,y:2.4}},{t:this.shape_170},{t:this.shape_104,p:{x:-24.9}},{t:this.shape_129,p:{x:-16.5,y:2.4}},{t:this.shape_169},{t:this.shape_43,p:{x:3.4,y:2.4}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_109,p:{x:30.5}},{t:this.shape_130,p:{x:37.3,y:2.4}},{t:this.shape_166},{t:this.shape_140,p:{x:54.1,y:2.4}},{t:this.shape_91,p:{x:62.1}},{t:this.shape_23,p:{x:69,y:0.7}},{t:this.shape_123,p:{x:78.4,y:2.4}},{t:this.shape_124,p:{x:87.3,y:0.7}},{t:this.shape_165},{t:this.shape_76,p:{x:110.8,y:2.5}},{t:this.shape_73,p:{x:118.8,y:2.4}},{t:this.shape_53,p:{x:123.1,y:0.8}},{t:this.shape_24,p:{x:129.6,y:2.4}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_117,p:{x:-128.7,y:26.3}},{t:this.shape_161},{t:this.shape_146,p:{x:-109.9,y:26.4}},{t:this.shape_160},{t:this.shape_88,p:{x:-95.1,y:26.3}},{t:this.shape_67,p:{x:-87.1}},{t:this.shape_33,p:{x:-82.8,y:24.7}},{t:this.shape_28,p:{x:-76.4,y:26.3}},{t:this.shape_4,p:{x:-69.4,y:24.5}},{t:this.shape_61,p:{x:-65.7}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_90,p:{x:-124.6,y:50.2}},{t:this.shape_30,p:{x:-111.5}},{t:this.shape_100,p:{x:-102.6,y:50.2}},{t:this.shape_83,p:{x:-94.6,y:50.2}},{t:this.shape_82,p:{x:-86.2,y:50.2}},{t:this.shape_79,p:{x:-78,y:50.2}},{t:this.shape_54,p:{x:-70}},{t:this.shape_21,p:{x:-59,y:50.2}},{t:this.shape_68,p:{x:-47.6,y:50.2}},{t:this.shape_19,p:{x:-38.6,y:50.2}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_6,p:{x:-8.3,y:48.6}},{t:this.shape_70,p:{x:-4.5,y:48.4}},{t:this.shape_155},{t:this.shape_52,p:{x:8.8}},{t:this.shape_59,p:{x:15.6}},{t:this.shape_40,p:{x:23.8}},{t:this.shape_10,p:{x:32.5,y:50.3}},{t:this.shape_17,p:{x:44.1,y:50.2}},{t:this.shape_44,p:{x:55.5}},{t:this.shape_74,p:{x:68.6,y:50.2}},{t:this.shape_12,p:{x:77.8,y:50.2}},{t:this.shape_154},{t:this.shape_36,p:{x:94.8}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_3,p:{x:120.2,y:48.6}},{t:this.shape_37,p:{x:126}},{t:this.shape_151},{t:this.shape_126,p:{x:-137.8,y:74.2}},{t:this.shape_150},{t:this.shape_8,p:{x:-123}},{t:this.shape_7,p:{x:-115}},{t:this.shape_1,p:{x:-110.7}},{t:this.shape_13,p:{x:-104.2}},{t:this.shape_38,p:{x:-97.3,y:72.3}},{t:this.shape_20,p:{x:-86.8}},{t:this.shape_2,p:{x:-77.9}},{t:this.shape_149},{t:this.shape_31,p:{x:-59.6,y:74.1}},{t:this.shape,p:{x:-53.8}}]},1).wait(1));

	// Layer_1
	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("EgfWAgjMAFIg8nIBXhQIhIhQIALh5MAnjAAAIRoAAMgFKBBA");
	this.shape_192.setTransform(-13.7,162.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("EgfWAggMAFIg8mIBXhQIhIhQIALh5MAnjAAAIRoAAMgFKBA/g");
	this.shape_193.setTransform(-13.7,163);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215.3,-46.1,403.4,418.1);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1043.1,-312.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1043.1,-312.2,2941,632);


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

	// t
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(1.8,-203.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(-7.9,-203.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(-17.5,-203.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(-26.8,-203.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_4.setTransform(-36.4,-203.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(-45,-203.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_6.setTransform(-52.4,-204.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(-62.2,-203.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_8.setTransform(-68.7,-204.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_9.setTransform(-73,-203.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(-80.7,-203.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_11.setTransform(-89.7,-201.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(-103.6,-203.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(-113.3,-203.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(-122.9,-201.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(-132.2,-203.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(-141.9,-203.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_17.setTransform(-148.3,-204.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_18.setTransform(-152.1,-204.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgagBIghAAgAgdgFIAeAAQANAAAGgGQAHgFAAgJQAAgUgaAAIgeAAg");
	this.shape_19.setTransform(-159.3,-204.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_20.setTransform(-36.3,-204.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_21.setTransform(-53,-203);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(-62.2,-203.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_23.setTransform(-70.5,-203.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_24.setTransform(-90.4,-204.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_25.setTransform(-97.8,-203);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_26.setTransform(-106.2,-203.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_27.setTransform(-114.6,-203.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_28.setTransform(-123.3,-203.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAJIg3AAIAAAqIA6AAIAAALg");
	this.shape_29.setTransform(-131.9,-204.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-80.7}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:1.8}}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_10,p:{x:-83.2}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape,p:{x:-43.7}},{t:this.shape_20}]},1).wait(1));

	// outlineshade
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#D40000").ss(4,2,0,3).p("AUEAAIm4AAMghPAAA");
	this.shape_30.setTransform(-61.6,-186.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D40000").ss(1,2,0,3).p("A0PC2IAIhuIBQhJIhGhOIAGhnMAhPAAAIG4AAIgZFs");
	this.shape_31.setTransform(-60.4,-204.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#660066").s().p("AjnC3IAYltIG3AAIgYFtg");
	this.shape_32.setTransform(45.9,-204.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(2));

	// white
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5F5F5").s().p("A0PC3IAIhvIBQhJIhGhNIAGhoMAoHAAAIgZFtg");
	this.shape_33.setTransform(-60.4,-204.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192,-224.1,262.2,39.6);


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
					$("#blocklyDiv").empty();
					_this.parent.onTimeEnd();
					_this.parent.mcTimesUp.play();
				} else {
					_this.parent.secRemaining--;
				}
		  }
		  updateClock();
		  timeInterval = setInterval(updateClock, 1000);
		}
		function doStartTimer(){
			initClock(_this.parent.timeGiven);
		}
		this.stage.addEventListener("startClocking", doStartTimer);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// t
	this.txtTime = new cjs.Text("10:00", "60px 'Quantico'", "#006666");
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


(lib.instrPanel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D40000").ss(1,2,0,3).p("Eg3fAixMAFvhBIIBYhQIhJhQIALh6MAndAAAMBBYAAAMgFxBFi");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5F5F5").s().p("EgWyAiyMAFvhBJIBYhQIhJhQIALh6MAncAAAMgVUBFjg");
	this.shape_1.setTransform(-209.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgrVAiyMAVThFjMBBYAAAMgFxBFjg");
	this.shape_2.setTransform(77.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eg3eAiyMAFvhBJIBXhQIhJhQIAMh6MBo0AAAMgFxBFjg");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-356.2,-223.6,712.5,447.3);


(lib.instr5 = function(mode,startPosition,loop) {
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

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D40000").s().p("AgUATIAEglIAlAAIgEAlg");
	this.shape.setTransform(85.9,46.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape_1.setTransform(78.8,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(68.3,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D40000").s().p("AANAyIAIhMIgiAAIgIBMIgbAAIAKhkIAXAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_3.setTransform(56.3,43.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_4.setTransform(47.8,41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D40000").s().p("AgrAyIADgYIAyAAIACgPIgcAAIgVgMIADgjIAZgNIA1AAIgDAXIgwAAIgCAOIAcAAIAVANIgDAjIgZAOg");
	this.shape_5.setTransform(39.1,43.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D40000").s().p("AgjAyIAKhjIAXAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape_6.setTransform(30.1,43.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_7.setTransform(19.9,43.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D40000").s().p("AgHBKIgOgIIgPAIIgNAAIAPiTIAcAAIgGA1IAOgIIAbAAIAVAOIgIBKIgZAOgAgUAyIAkAAIAGg2IgjAAg");
	this.shape_8.setTransform(8.1,41.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D40000").s().p("AgqBHIADgYIAxAAIADgcIgOAIIgaAAIgWgNIAHhGIAZgOIAaAAIAMAIIAQgIIANAAIgOB/IgYAOgAgUAEIAjAAIAFgyIgjAAg");
	this.shape_9.setTransform(-9,45.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D40000").s().p("AAMAyIAIhMIghAAIgHBMIgcAAIALhkIAWAAIAEAIIAOgIIAYAAIAWAOIgJBWg");
	this.shape_10.setTransform(-21.2,43.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_11.setTransform(-33,43.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D40000").s().p("AgtBGIAXgvIgdhcIAcAAIASA7IAAAAIAdg7IAbAAIhFCLg");
	this.shape_12.setTransform(-43.9,45.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D40000").s().p("AAOBJIgVgjIgNAOIgCAVIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoAsIAkA3g");
	this.shape_13.setTransform(-60.1,41.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D40000").s().p("AgaAzIgVgNIAHhLIAZgNIAqAAIAVANIgIBLIgYANgAgTAbIAiAAIAFg2IghAAg");
	this.shape_14.setTransform(-72,43.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_15.setTransform(-81,41.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D40000").s().p("AgIBKIgNgIIgPAIIgNAAIAPiTIAbAAIgFA1IAOgIIAaAAIAWAOIgIBKIgZAOgAgUAyIAkAAIAGg2IgjAAg");
	this.shape_16.setTransform(-90.6,41.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_17.setTransform(-107.5,43.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D40000").s().p("AAOBJIgVgjIgNAOIgCAVIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoAsIAkA3g");
	this.shape_18.setTransform(-118.1,41.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_19.setTransform(-131.9,41.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_20.setTransform(-141,43.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D40000").s().p("AgzBHIAPiNIAWAAIAEAIIAOgIIAbAAIAVAOIgIBKIgYAOIgZAAIgOgIIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape_21.setTransform(-153.3,45.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D40000").s().p("AAmAyIAIhMIgdAAIgIBMIgaAAIAIhMIgeAAIgIBMIgbAAIALhkIAWAAIAEAIIAPgIIATAAIARALIAUgLIATAAIAWAOIgKBWg");
	this.shape_22.setTransform(-167.6,43.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_23.setTransform(-182,43.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D40000").s().p("AgrAyIADgYIAyAAIACgPIgcAAIgVgMIADgjIAZgNIA1AAIgDAXIgwAAIgCAOIAcAAIAVANIgDAjIgZAOg");
	this.shape_24.setTransform(-193.6,43.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D40000").s().p("AAOBJIgVgjIgNAOIgCAVIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoAsIAkA3g");
	this.shape_25.setTransform(-209.1,41.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_26.setTransform(-221,43.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D40000").s().p("AgBBCIgVgNIAGg+IgSAAIADgYIASAAIACgRIAbgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_27.setTransform(-231.1,41.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D40000").s().p("AANAyIAIhMIgiAAIgIBMIgbAAIAKhkIAXAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_28.setTransform(-241.6,43.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_29.setTransform(-253.4,43.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D40000").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAIhMIgdAAIgIBMIgbAAIAKhkIAXAAIAEAIIAPgIIATAAIARALIAUgLIATAAIAWAOIgJBWg");
	this.shape_30.setTransform(287.6,12.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_31.setTransform(273.2,13);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D40000").s().p("AAmAyIAIhMIgdAAIgIBMIgaAAIAIhMIgeAAIgHBMIgcAAIALhkIAWAAIAEAIIAPgIIATAAIARALIAUgLIATAAIAWAOIgKBWg");
	this.shape_32.setTransform(258.6,12.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_33.setTransform(247.5,10.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D40000").s().p("AAMAyIAIhMIghAAIgIBMIgbAAIALhkIAWAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_34.setTransform(238.4,12.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_35.setTransform(229.9,10.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D40000").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAIhMIgdAAIgIBMIgbAAIAKhkIAXAAIAEAIIAPgIIAUAAIAQALIAUgLIATAAIAWAOIgJBWg");
	this.shape_36.setTransform(218.2,12.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D40000").s().p("AgqBHIADgYIAxAAIADgcIgOAIIgaAAIgWgNIAHhGIAZgOIAZAAIANAIIAQgIIANAAIgOB/IgYAOgAgUAEIAjAAIAFgyIgjAAg");
	this.shape_37.setTransform(198.5,14.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D40000").s().p("AAMAyIAIhMIggAAIgIBMIgcAAIALhkIAWAAIAEAIIAOgIIAYAAIAWAOIgJBWg");
	this.shape_38.setTransform(186.4,12.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_39.setTransform(177.9,10.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_40.setTransform(171.7,10.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_41.setTransform(162.3,13);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D40000").s().p("AgzBHIAPiNIAWAAIAEAIIAOgIIAbAAIAVAOIgIBKIgYAOIgZAAIgOgIIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape_42.setTransform(149.9,14.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D40000").s().p("AgpBHIACgYIAxAAIADgcIgOAIIgaAAIgWgNIAIhGIAYgOIAZAAIAOAIIAPgIIANAAIgOB/IgYAOgAgUAEIAjAAIAFgyIgjAAg");
	this.shape_43.setTransform(133,14.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D40000").s().p("AANAyIAIhMIghAAIgIBMIgcAAIALhkIAWAAIAEAIIAOgIIAYAAIAWAOIgJBWg");
	this.shape_44.setTransform(120.9,12.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_45.setTransform(109.1,13);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D40000").s().p("AgtBGIAXgvIgdhcIAcAAIASA7IAAAAIAdg7IAcAAIhGCLg");
	this.shape_46.setTransform(98.2,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D40000").s().p("AAMAyIAIhMIghAAIgHBMIgcAAIALhkIAWAAIAEAIIAOgIIAYAAIAWAOIgJBWg");
	this.shape_47.setTransform(81,12.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_48.setTransform(69.2,13);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#D40000").s().p("AAOBJIAIhNIgjAAIgIBNIgcAAIAPiRIAcAAIgGA1IAOgIIAbAAIAVANIgJBXg");
	this.shape_49.setTransform(57.1,10.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_50.setTransform(45.2,13);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D40000").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape_51.setTransform(35.6,13);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_52.setTransform(25.1,13);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D40000").s().p("AAMAyIAIhMIghAAIgIBMIgbAAIAKhkIAXAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_53.setTransform(7.9,12.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_54.setTransform(-3.9,13);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D40000").s().p("AgqBHIADgYIAxAAIADgcIgOAIIgaAAIgWgNIAHhGIAagOIAZAAIAMAIIAQgIIANAAIgNB/IgZAOgAgVAEIAjAAIAGgyIgjAAg");
	this.shape_55.setTransform(-15.9,14.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D40000").s().p("AAMAyIAIhMIghAAIgIBMIgbAAIALhkIAWAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_56.setTransform(-28,12.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_57.setTransform(-39.8,13);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_58.setTransform(-48.8,10.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_59.setTransform(-55,10.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D40000").s().p("AgHBKIgOgIIgPAIIgNAAIAPiTIAcAAIgGA1IAOgIIAbAAIAVAOIgIBKIgYAOgAgUAyIAkAAIAFg2IgjAAg");
	this.shape_60.setTransform(-64.2,10.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D40000").s().p("AANAyIAIhMIgiAAIgIBMIgbAAIAKhkIAXAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_61.setTransform(-81.4,12.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_62.setTransform(-93.2,13);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D40000").s().p("AAOBJIgVgkIgNAPIgCAVIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoAsIAkA3g");
	this.shape_63.setTransform(-104.2,10.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_64.setTransform(-116.1,13);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D40000").s().p("AAMAyIAJhMIgiAAIgIBMIgbAAIAKhkIAXAAIAEAIIAOgIIAZAAIAVAOIgJBWg");
	this.shape_65.setTransform(-128.1,12.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_66.setTransform(-139.9,13);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D40000").s().p("AgqBHIADgYIAyAAIACgcIgOAIIgaAAIgWgNIAHhGIAagOIAZAAIAMAIIAQgIIANAAIgNB/IgZAOgAgVAEIAjAAIAGgyIgjAAg");
	this.shape_67.setTransform(-151.9,14.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_68.setTransform(-169.1,13);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D40000").s().p("AgHBKIgOgIIgPAIIgNAAIAPiTIAcAAIgGA1IAOgIIAbAAIAVAOIgIBKIgYAOgAgUAyIAkAAIAFg2IgjAAg");
	this.shape_69.setTransform(-181.2,10.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_70.setTransform(-193.1,13);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D40000").s().p("AgjBHIgWgNIANhyIAYgOIA4AAIAWAOIgDAcIgcAAIABgSIguAAIgJBdIAuAAIABgSIAcAAIgDAdIgYANg");
	this.shape_71.setTransform(-205.6,11);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#D40000").s().p("AgVAyIgVgOIAHhIIAZgNIA1AAIgCAXIgxAAIgFA0IAwAAIgDAYg");
	this.shape_72.setTransform(-33.4,43.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D40000").s().p("AgZAzIgXgNIAIhLIAZgNIAqAAIAVANIgIBLIgYANgAgTAbIAhAAIAGg2IghAAg");
	this.shape_73.setTransform(-44.8,43.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D40000").s().p("AgIBKIgNgIIgPAIIgNAAIAPiTIAbAAIgFA1IAOgIIAaAAIAWAOIgIBKIgZAOgAgTAyIAjAAIAFg2IgjAAg");
	this.shape_74.setTransform(-63.4,41.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D40000").s().p("AgpBHIACgYIAyAAIACgcIgOAIIgaAAIgWgNIAIhGIAZgOIAYAAIAOAIIAPgIIANAAIgNB/IgZAOgAgVAEIAjAAIAGgyIgjAAg");
	this.shape_75.setTransform(-80.5,45.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D40000").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAJhMIgdAAIgIBMIgcAAIALhkIAWAAIAEAIIAPgIIAUAAIAQALIAUgLIATAAIAWAOIgKBWg");
	this.shape_76.setTransform(-112.9,43.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D40000").s().p("AANBJIAJhNIgjAAIgJBNIgbAAIAPiRIAcAAIgGA1IAOgIIAbAAIAVANIgJBXg");
	this.shape_77.setTransform(-185.8,41.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D40000").s().p("AANBJIAIhNIgjAAIgIBNIgbAAIAPiRIAcAAIgGA1IAOgIIAbAAIAVANIgJBXg");
	this.shape_78.setTransform(-211.7,41.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D40000").s().p("AgUAyIgWgOIAHhIIAZgNIA1AAIgCAXIgxAAIgFA0IAwAAIgCAYg");
	this.shape_79.setTransform(-222.6,43.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_80.setTransform(-245.6,43.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D40000").s().p("AgjAyIAKhjIAXAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape_81.setTransform(-254.8,43.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D40000").s().p("AgaAzIgVgNIAIhLIAZgNIApAAIAWANIgIBLIgZANgAgTAbIAiAAIAFg2IghAAg");
	this.shape_82.setTransform(205.5,13);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D40000").s().p("AgBBCIgVgNIAHg+IgTAAIACgYIATAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_83.setTransform(195.4,11.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#D40000").s().p("AAOBKIgEgIIgOAIIgaAAIgVgOIAIhKIAZgOIAZAAIAMAIIAHg1IAbAAIgPCTgAgXAyIAjAAIAGg2IgjAAg");
	this.shape_84.setTransform(169.1,10.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D40000").s().p("AgZAzIgXgNIAIhLIAZgNIAqAAIAVANIgIBLIgYANgAgTAbIAhAAIAGg2IghAAg");
	this.shape_85.setTransform(98.9,13);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D40000").s().p("AgVAyIgVgOIAIhIIAYgNIA1AAIgDAXIgwAAIgGA0IAxAAIgDAYg");
	this.shape_86.setTransform(88.1,13);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D40000").s().p("AgaBJIAIhMIgTAAIADgXIASAAIAEghIAXgNIAaAAIgCAXIgWAAIgDAXIAXAAIgCAXIgXAAIgIBMg");
	this.shape_87.setTransform(74,10.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D40000").s().p("AgaAzIgVgNIAIhLIAZgNIApAAIAWANIgIBLIgZANgAgTAbIAiAAIAFg2IghAAg");
	this.shape_88.setTransform(63.3,13);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D40000").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape_89.setTransform(48.5,13);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_90.setTransform(38.3,12.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D40000").s().p("AgIBKIgNgIIgPAIIgNAAIAPiTIAbAAIgFA1IAOgIIAaAAIAWAOIgIBKIgYAOgAgTAyIAjAAIAFg2IgjAAg");
	this.shape_91.setTransform(26.5,10.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#D40000").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAIhMIgcAAIgJBMIgbAAIAKhkIAXAAIAEAIIAPgIIAUAAIAQALIAUgLIATAAIAWAOIgJBWg");
	this.shape_92.setTransform(12,12.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#D40000").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_93.setTransform(-29.6,11.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_94.setTransform(-62.6,12.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_95.setTransform(-85.6,12.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#D40000").s().p("AAOBJIAIhNIgjAAIgIBNIgcAAIAPiRIAbAAIgFA1IAOgIIAaAAIAWANIgJBXg");
	this.shape_96.setTransform(-97.4,10.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D40000").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_97.setTransform(-107.5,11.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D40000").s().p("AgXAyIgVgNIAHhJIAZgOIAkAAIAVAOIgFAuIg2AAIgCARIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_98.setTransform(-122.8,12.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#D40000").s().p("AgrAyIADgYIAyAAIACgPIgcAAIgVgMIADgjIAZgNIA1AAIgDAXIgwAAIgCAOIAcAAIAVANIgDAjIgZAOg");
	this.shape_99.setTransform(-134,13);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#D40000").s().p("AgZAzIgXgNIAIhLIAagNIApAAIAWANIgJBLIgYANgAgTAbIAhAAIAGg2IghAAg");
	this.shape_100.setTransform(-162.4,13);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D40000").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIABgRIAdgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_101.setTransform(-172.5,11.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D40000").s().p("AguBGIAYgvIgchcIAbAAIASA7IAAAAIAdg7IAbAAIhGCLg");
	this.shape_102.setTransform(-187.1,15);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D40000").s().p("AgaBGIAMhzIgmAAIACgYIBnAAIgCAYIgmAAIgMBzg");
	this.shape_103.setTransform(-206.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:-128.1}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-48.8}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:171.7,y:10.7}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:258.6}},{t:this.shape_31},{t:this.shape_30,p:{x:287.6}},{t:this.shape_29,p:{x:-253.4,y:43.6}},{t:this.shape_28},{t:this.shape_27,p:{x:-231.1}},{t:this.shape_26,p:{x:-221,y:43.6}},{t:this.shape_25},{t:this.shape_24,p:{x:-193.6,y:43.6}},{t:this.shape_23,p:{x:-182,y:43.6}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-141,y:43.6}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-107.5}},{t:this.shape_16},{t:this.shape_15,p:{x:-81}},{t:this.shape_14},{t:this.shape_13,p:{x:-60.1}},{t:this.shape_12},{t:this.shape_11,p:{x:-33}},{t:this.shape_10,p:{x:-21.2,y:43.5}},{t:this.shape_9,p:{x:-9}},{t:this.shape_8},{t:this.shape_7,p:{x:19.9}},{t:this.shape_6,p:{x:30.1,y:43.6}},{t:this.shape_5,p:{x:39.1,y:43.6}},{t:this.shape_4,p:{x:47.8}},{t:this.shape_3,p:{x:56.3}},{t:this.shape_2,p:{x:68.3}},{t:this.shape_1},{t:this.shape,p:{x:85.9}}]}).to({state:[{t:this.shape_103},{t:this.shape_6,p:{x:-196.7,y:13}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_29,p:{x:-145.3,y:13}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_58,p:{x:-71.2}},{t:this.shape_94},{t:this.shape_23,p:{x:-50.9,y:13}},{t:this.shape_24,p:{x:-39.7,y:13}},{t:this.shape_93},{t:this.shape_10,p:{x:-14.4,y:12.9}},{t:this.shape_26,p:{x:-2.4,y:13}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_30,p:{x:113.3}},{t:this.shape_32,p:{x:130.4}},{t:this.shape_20,p:{x:144.9,y:13}},{t:this.shape_65,p:{x:156.7}},{t:this.shape_84},{t:this.shape_5,p:{x:180.2,y:13}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_11,p:{x:-233.9}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_27,p:{x:-195.9}},{t:this.shape_77},{t:this.shape_17,p:{x:-174.1}},{t:this.shape_9,p:{x:-157.1}},{t:this.shape_40,p:{x:-147.6,y:41.3}},{t:this.shape_7,p:{x:-138.9}},{t:this.shape_2,p:{x:-127.3}},{t:this.shape_76},{t:this.shape_4,p:{x:-101.2}},{t:this.shape_3,p:{x:-92.7}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_15,p:{x:-53.7}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_13,p:{x:-22.5}},{t:this.shape,p:{x:-14}}]},1).wait(1));

	// t
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_104.setTransform(-44,301.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_105.setTransform(-50.5,298.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_106.setTransform(-60.2,298.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_107.setTransform(-69.4,296.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_108.setTransform(-79.1,298.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_109.setTransform(-86.1,298.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_110.setTransform(-94.5,298.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_111.setTransform(-108.3,298.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_112.setTransform(-117.5,298.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_113.setTransform(-129.2,298.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_114.setTransform(-140.5,298.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_115.setTransform(-148.9,298.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_116.setTransform(-161.8,298.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_117.setTransform(-171.4,298.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_118.setTransform(-179.4,296.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAIALAAQAMAAAHgIQAGgHAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_119.setTransform(-188.9,300);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_120.setTransform(-195.7,296.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_121.setTransform(-202.7,298.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_122.setTransform(-212,298.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_123.setTransform(-220.9,298.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_124.setTransform(-232.4,298.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_125.setTransform(-8.9,272.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_126.setTransform(-18.7,274.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_127.setTransform(-25.1,272.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_128.setTransform(-31.4,274.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_129.setTransform(-38.6,273.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_130.setTransform(-45.7,274.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_131.setTransform(-54.1,274.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_132.setTransform(-64,269.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_133.setTransform(-70.8,274.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_134.setTransform(-80.1,274.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_135.setTransform(-89.7,274.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_136.setTransform(-98.3,274.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_137.setTransform(-105.7,272.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_138.setTransform(-115.5,274.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgiA5IAAhxIANAAIAABmIA4AAIAAALg");
	this.shape_139.setTransform(-123.9,272.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_140.setTransform(-130.6,269.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_141.setTransform(-141.6,276.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_142.setTransform(-150.9,274.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_143.setTransform(-160.6,274.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_144.setTransform(-168,273.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_145.setTransform(-175.4,274.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_146.setTransform(-184.5,272.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_147.setTransform(-198.5,274.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_148.setTransform(-208.2,274.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_149.setTransform(-216.2,272.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_150.setTransform(-225.3,274.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_151.setTransform(-234.5,272.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_152.setTransform(-5.1,253.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_153.setTransform(-8.8,248.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_154.setTransform(-13.1,250.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_155.setTransform(-18.4,248.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_156.setTransform(-23.7,248.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_157.setTransform(-37.4,250.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_158.setTransform(-47,250.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_159.setTransform(-54.5,249.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_160.setTransform(-62.2,250.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_161.setTransform(-75.7,250.4);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_162.setTransform(-85.4,250.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_163.setTransform(-94.7,250.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_164.setTransform(-104.3,250.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_165.setTransform(-112.3,248.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_166.setTransform(-125.7,250.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_167.setTransform(-133.5,248.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_168.setTransform(-147.2,250.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_169.setTransform(-156.9,250.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_170.setTransform(-168.4,250.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_171.setTransform(-180.4,250.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_172.setTransform(-189,250.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_173.setTransform(-197.9,250.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_174.setTransform(-205.9,248.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_175.setTransform(-215.8,252.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_176.setTransform(-225.1,250.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_177.setTransform(-234.8,250.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_178.setTransform(35.9,226.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_179.setTransform(26.3,226.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_180.setTransform(18.3,224.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_181.setTransform(11.1,226.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_182.setTransform(2.6,226.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgFIAAAZIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_183.setTransform(-4.8,225.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_184.setTransform(-12.2,226.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_185.setTransform(-23.9,226.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_186.setTransform(-35.2,226.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_187.setTransform(-46.6,226.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_188.setTransform(-61.2,224.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_189.setTransform(-70.7,226.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgFIAAAZIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_190.setTransform(-78.2,225.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_191.setTransform(-85.6,226.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_192.setTransform(-94.9,226.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_193.setTransform(-108.4,226.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#006699").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_194.setTransform(-115.4,226.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_195.setTransform(-123.5,226.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#006699").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_196.setTransform(-132.9,225);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_197.setTransform(-146.7,226.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_198.setTransform(-156.3,226.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_199.setTransform(-165.5,224.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_200.setTransform(-175.3,226.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_201.setTransform(-182.2,226.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_202.setTransform(-190.7,226.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_203.setTransform(-204.5,226.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_204.setTransform(-213.8,226.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_205.setTransform(-223,226.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQANAAAKADQAJAEAHAHIgEAKQgJgHgIgDQgHgDgLAAQgSAAgKAMQgKAMAAAWQAAAXAKAMQAKAMAUAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgKACQgLACgMAAQgQAAgMgHg");
	this.shape_206.setTransform(-233.6,225);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_207.setTransform(-25.5,205.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_208.setTransform(-32.1,202.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_209.setTransform(-41.7,202.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_210.setTransform(-53.2,202.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_211.setTransform(-65.2,202.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_212.setTransform(-73.8,202.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_213.setTransform(-82.8,202.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_214.setTransform(-90.8,200.9);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_215.setTransform(-100.7,204.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_216.setTransform(-110,202.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_217.setTransform(-119.6,202.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_218.setTransform(-133.1,202.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_219.setTransform(-142.8,202.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_220.setTransform(-150.8,200.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_221.setTransform(-159,200.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_222.setTransform(-168.9,202.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_223.setTransform(-175.8,202.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_224.setTransform(-183.6,202.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_225.setTransform(-193,204.4);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_226.setTransform(-202.7,204.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_227.setTransform(-212,202.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_228.setTransform(-220.9,202.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_229.setTransform(-232.4,202.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_230.setTransform(-28.1,177);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_231.setTransform(-37.6,178.9);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_232.setTransform(-45.1,177.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_233.setTransform(-52.5,178.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_234.setTransform(-61.8,178.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_235.setTransform(-74.9,178.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#006699").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_236.setTransform(-83.5,178.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_237.setTransform(-92.4,178.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#006699").s().p("AApA5IAAhTIglBTIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_238.setTransform(-103.7,177.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_239.setTransform(-119.5,178.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_240.setTransform(-129.1,178.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_241.setTransform(-138.3,177);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_242.setTransform(-148.1,178.8);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_243.setTransform(-155,178.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_244.setTransform(-163.5,178.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_245.setTransform(-177,178.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_246.setTransform(-186.6,178.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_247.setTransform(-194.6,177);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_248.setTransform(-204.5,178.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_249.setTransform(-213.8,178.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_250.setTransform(-223,178.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQANAAAKADQAJAEAHAHIgEAKQgJgHgIgDQgHgDgLAAQgSAAgKAMQgKAMAAAWQAAAXAKAMQAKAMAUAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgKACQgLACgMAAQgQAAgMgHg");
	this.shape_251.setTransform(-233.6,177.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_252.setTransform(-61.9,158.1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_253.setTransform(-66.6,153.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_254.setTransform(-74.4,154.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_255.setTransform(-83.6,156.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_256.setTransform(-95.6,154.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_257.setTransform(-107.2,154.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_258.setTransform(-113.6,153.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_259.setTransform(-119.9,154.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_260.setTransform(-131.3,154.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_261.setTransform(-147.2,154.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_262.setTransform(-156.9,154.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_263.setTransform(-168.4,154.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_264.setTransform(-180.4,154.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_265.setTransform(-189,154.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_266.setTransform(-197.9,154.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_267.setTransform(-205.9,153.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_268.setTransform(-215.8,156.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_269.setTransform(-225.1,154.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_270.setTransform(-234.8,154.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_271.setTransform(-29.9,129.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_272.setTransform(-39.4,131.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_273.setTransform(-46.9,129.8);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_274.setTransform(-54.3,130.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_275.setTransform(-63.6,131.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_276.setTransform(-77,132.7);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_277.setTransform(-89.1,130.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#006699").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_278.setTransform(-100.7,131.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#006699").s().p("AgTBGIAAgLIAMABQAHAAADgEQAEgEAAgMIAAhvIANAAIAABwQAAAQgGAIQgGAHgNAAIgOgCg");
	this.shape_279.setTransform(-108.7,130.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_280.setTransform(-119.5,130.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_281.setTransform(-129.1,131);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_282.setTransform(-138.3,129.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_283.setTransform(-148.1,131);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_284.setTransform(-155,130.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_285.setTransform(-163.5,131);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_286.setTransform(-177,130.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_287.setTransform(-186.6,131);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_288.setTransform(-194.6,129.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_289.setTransform(-204.5,131);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_290.setTransform(-213.8,130.9);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_291.setTransform(-223,131.1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQANAAAKADQAJAEAHAHIgEAKQgJgHgIgDQgHgDgLAAQgSAAgKAMQgKAMAAAWQAAAXAKAMQAKAMAUAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgKACQgLACgMAAQgQAAgMgHg");
	this.shape_292.setTransform(-233.6,129.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_293.setTransform(-130.5,110.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_294.setTransform(-137.4,108.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_295.setTransform(-146.7,107);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_296.setTransform(-156.3,107.1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_297.setTransform(-162.8,105.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_298.setTransform(-169.3,107.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_299.setTransform(-176.3,107);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_300.setTransform(-184.1,107.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_301.setTransform(-193,105.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_302.setTransform(-207.3,108.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_303.setTransform(-216.6,107);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_304.setTransform(-226.3,107.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_305.setTransform(-235.1,109);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_306.setTransform(47.8,81.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_307.setTransform(38.1,83.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_308.setTransform(30.1,81.4);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_309.setTransform(20.2,84.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_310.setTransform(10.9,83.1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_311.setTransform(1.2,83.2);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_312.setTransform(-5.2,81.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_313.setTransform(-14.8,81.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_314.setTransform(-24.2,83.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_315.setTransform(-31.7,82);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_316.setTransform(-39.2,83.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_317.setTransform(-48.4,83.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#006699").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_318.setTransform(-60.1,82);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#006699").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_319.setTransform(-67.9,83.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_320.setTransform(-76.8,83.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAIALAAQAMAAAHgIQAGgHAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_321.setTransform(-85.8,84.9);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_322.setTransform(-95.1,83.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgCQgFgDgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLADQAFABADAEQAEADACAHIAPAmgAgfgDIAfAAQAaABAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_323.setTransform(-104.7,81.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_324.setTransform(-119.5,83.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_325.setTransform(-129.1,83.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_326.setTransform(-138.3,81.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_327.setTransform(-148.1,83.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_328.setTransform(-155,83.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_329.setTransform(-163.5,83.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_330.setTransform(-177,83.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_331.setTransform(-186.6,83.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_332.setTransform(-194.6,81.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_333.setTransform(-204.5,83.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_334.setTransform(-213.8,83.1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_335.setTransform(-223,83.3);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQANAAAKADQAJAEAHAHIgEAKQgJgHgIgDQgHgDgLAAQgSAAgKAMQgKAMAAAWQAAAXAKAMQAKAMAUAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgKACQgLACgMAAQgQAAgMgHg");
	this.shape_336.setTransform(-233.6,81.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_337.setTransform(-247.9,277.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgUA2QgKgEgHgHIAFgKQAQANAQABQAMgBAGgGQAHgHAAgMQAAgLgHgHQgGgGgMAAQgPAAgKANIgJAAIAAhDIBEAAIAAALIg3AAIAAApQAKgJANAAQALAAAIAEQAIAFAFAIQAEAHAAALQAAALgFAIQgEAIgKAFQgIAEgLAAQgKAAgKgDg");
	this.shape_338.setTransform(-254.3,272.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_339.setTransform(-247.9,229.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AALA5IAAgZIgzAAIAAgKIA1hOIALAAIAABNIARAAIAAALIgRAAIAAAZgAgbAVIAmAAIAAg3g");
	this.shape_340.setTransform(-254.4,225);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_341.setTransform(-247.9,182);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgKQAAgWgaAAIgMAAIAAgKIAKAAQALAAAHgFQAHgFAAgLQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgGAJgEQALgEAKAAQAPAAAJAHQAKAJgBANQAAAJgEAIQgFAHgJAEQALABAEAIQAGAGAAALQAAAPgKAIQgKAJgRAAQgLAAgKgDg");
	this.shape_342.setTransform(-254.7,177.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_343.setTransform(-247.9,134.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgiA6IAAgLIAngrQAIgJAEgGQADgIAAgHQAAgKgFgEQgGgGgJABQgQgBgQANIgFgKQAHgGAKgEQAKgEAKABQAPgBAJAJQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAAMg");
	this.shape_344.setTransform(-254.5,129.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_345.setTransform(-247.9,86.4);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhWIgXAQIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_346.setTransform(-254.1,81.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_347.setTransform(-142.8,282.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_348.setTransform(-207.4,284.4);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_349.setTransform(-229,282.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_350.setTransform(-236.6,283.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_351.setTransform(16.7,258.7);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_352.setTransform(-1.2,262.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgkAxQAMgEAFgEQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgJAHgNACg");
	this.shape_353.setTransform(-10.4,262.4);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_354.setTransform(-17.6,259.3);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_355.setTransform(-37.4,260.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_356.setTransform(-55.9,258.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_357.setTransform(-78.7,260.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgkAxQAMgEAFgEQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_358.setTransform(-87.5,262.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_359.setTransform(-113.3,259.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_360.setTransform(-118.8,258.6);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_361.setTransform(-137,255.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_362.setTransform(-150.4,259.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_363.setTransform(-166.1,260.5);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_364.setTransform(-183.2,260.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAJIg3AAIAAAqIA6AAIAAALg");
	this.shape_365.setTransform(-191.9,258.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_366.setTransform(-198.7,255.4);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_367.setTransform(-216.7,260.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_368.setTransform(-226.5,258.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_369.setTransform(-233.8,258.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_370.setTransform(5.3,234.8);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_371.setTransform(-50.9,236.6);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_372.setTransform(-59.2,236.6);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#006699").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_373.setTransform(-96.8,235);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_374.setTransform(-119.1,234.8);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_375.setTransform(-126.7,235.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAFg");
	this.shape_376.setTransform(-165.6,240.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_377.setTransform(-170.3,235.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_378.setTransform(-205.8,236.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_379.setTransform(-24.2,211.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_380.setTransform(-33.9,210.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_381.setTransform(-41.1,212.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_382.setTransform(-63.8,212.7);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_383.setTransform(-75,211.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_384.setTransform(-90.2,211.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_385.setTransform(-112.9,211);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_386.setTransform(-125.2,212.7);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_387.setTransform(-147.3,210.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_388.setTransform(-154.9,211.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_389.setTransform(-166.1,212.7);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_390.setTransform(-203.7,210.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_391.setTransform(-212.2,212.7);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_392.setTransform(-225.1,212.7);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_393.setTransform(-126.5,187);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_394.setTransform(-182.7,188.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_395.setTransform(-191.1,188.8);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#006699").s().p("AApA5IAAhTIglBTIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_396.setTransform(-232.5,187.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_397.setTransform(30.1,164.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_398.setTransform(21.1,163.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_399.setTransform(13.5,163.7);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_400.setTransform(2.3,164.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_401.setTransform(-25.4,169.1);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_402.setTransform(-31.5,164.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_403.setTransform(-40.1,164.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_404.setTransform(-49,164.9);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_405.setTransform(-74.7,163.7);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_406.setTransform(-110.2,164.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_407.setTransform(-123.4,163.7);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_408.setTransform(-152.2,164.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_409.setTransform(-161.2,163.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_410.setTransform(-168.8,163.7);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_411.setTransform(-180.1,164.9);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_412.setTransform(-209.4,164.8);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_413.setTransform(-225.1,164.9);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_414.setTransform(-234.5,163.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_415.setTransform(-128.3,139.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_416.setTransform(-158.9,140.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_417.setTransform(-173,140.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_418.setTransform(-184.5,141);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_419.setTransform(-192.9,141);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_420.setTransform(-205.8,142.7);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#006699").s().p("AgTBGIAAgLIAMABQAHABADgFQAEgEAAgMIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgCg");
	this.shape_421.setTransform(-237.5,140.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_422.setTransform(26.4,117.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_423.setTransform(17.4,115.3);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_424.setTransform(9.8,115.9);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_425.setTransform(-1.4,117.1);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_426.setTransform(-29.1,121.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_427.setTransform(-47.6,117);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_428.setTransform(-66.7,117.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_429.setTransform(-74.7,115.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_430.setTransform(-110.2,117.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_431.setTransform(-123.4,115.9);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_432.setTransform(-130.2,117.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_433.setTransform(-139.1,117.1);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_434.setTransform(-152.2,117.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_435.setTransform(-161.2,115.3);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_436.setTransform(-168.8,115.9);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_437.setTransform(-180.1,117.1);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_438.setTransform(-209.4,117);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_439.setTransform(-225.1,117.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_440.setTransform(-234.5,115.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_441.setTransform(61.9,93.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_442.setTransform(53.4,94.9);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_443.setTransform(44.1,93.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_444.setTransform(36.8,92);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_445.setTransform(30.1,93.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_446.setTransform(17.6,93.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIANAAIgjBPg");
	this.shape_447.setTransform(9,93.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_448.setTransform(2.9,91.5);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_449.setTransform(-1.9,92);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_450.setTransform(-6.5,91.5);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_451.setTransform(-18.4,93.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_452.setTransform(-27.4,94.9);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_453.setTransform(-36.7,93.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_454.setTransform(-61.4,93.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_455.setTransform(-68.8,91.3);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_456.setTransform(-80.6,91.4);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_457.setTransform(-111.2,93.1);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_458.setTransform(-125.3,93.1);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_459.setTransform(-136.8,93.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_460.setTransform(-145.2,93.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#006699").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_461.setTransform(-156.4,92);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#006699").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_462.setTransform(-164.1,93.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_463.setTransform(-182,94.9);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgCQgFgDgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLADQAFABADAEQAEADACAHIAPAmgAgfgDIAfAAQAaAAAAgVQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_464.setTransform(-200.9,91.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_465.setTransform(-215.3,93.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_466.setTransform(-223.7,93.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#000000").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_467.setTransform(-233.5,91.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgUA2QgKgEgHgGIAFgKQAQAMAQAAQAMABAGgHQAHgHAAgLQAAgMgHgHQgGgGgMAAQgPAAgKAMIgJAAIAAhBIBEAAIAAALIg3AAIAAAoQAKgJANAAQALAAAIAFQAIAEAFAHQAEAIAAALQAAALgFAIQgEAIgKAFQgIAFgLAAQgKAAgKgEg");
	this.shape_468.setTransform(-254.3,258.9);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AALA5IAAgZIgzAAIAAgJIA1hPIALAAIAABOIARAAIAAAKIgRAAIAAAZgAgbAWIAmAAIAAg3g");
	this.shape_469.setTransform(-254.4,211.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgLQAAgUgaAAIgMAAIAAgKIAKAAQALAAAHgGQAHgFAAgLQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgGAJgFQALgDAKAAQAPAAAJAIQAKAHgBAOQAAAJgEAIQgFAHgJADQALACAEAHQAGAIAAAKQAAAPgKAJQgKAIgRAAQgLAAgKgEg");
	this.shape_470.setTransform(-254.7,163.3);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgiA5IAAgJIAngtQAIgIAEgHQADgHAAgHQAAgJgFgGQgGgEgJAAQgQAAgQAMIgFgJQAHgHAKgEQAKgEAKAAQAPABAJAHQAKAJAAANQAAAKgFAJQgEAIgLALIgfAkIA3AAIAAAKg");
	this.shape_471.setTransform(-254.5,115.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_346,p:{y:81.6}},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343,p:{y:134.2}},{t:this.shape_342},{t:this.shape_341,p:{y:182}},{t:this.shape_340},{t:this.shape_339,p:{y:229.8}},{t:this.shape_338},{t:this.shape_337,p:{y:277.6}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322,p:{x:-95.1,y:83.2}},{t:this.shape_321},{t:this.shape_320,p:{x:-76.8,y:83.2}},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312,p:{x:-5.2,y:81.4}},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300,p:{x:-184.1,y:107.1}},{t:this.shape_299},{t:this.shape_298,p:{x:-169.3,y:107.2}},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293,p:{x:-130.5,y:110.3}},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284,p:{x:-155,y:130.9}},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278,p:{x:-100.7,y:131.1}},{t:this.shape_277,p:{x:-89.1,y:130.9}},{t:this.shape_276},{t:this.shape_275,p:{x:-63.6,y:131.1}},{t:this.shape_274},{t:this.shape_273,p:{x:-46.9,y:129.8}},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265,p:{x:-189,y:154.9}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260,p:{x:-131.3,y:154.8}},{t:this.shape_259,p:{x:-119.9,y:154.9}},{t:this.shape_258},{t:this.shape_257,p:{x:-107.2,y:154.9}},{t:this.shape_256,p:{x:-95.6,y:154.8}},{t:this.shape_255,p:{x:-83.6,y:156.6}},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252,p:{x:-61.9,y:158.1}},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243,p:{x:-155,y:178.7}},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237,p:{x:-92.4,y:178.8}},{t:this.shape_236,p:{x:-83.5,y:178.8}},{t:this.shape_235,p:{x:-74.9,y:178.8}},{t:this.shape_234,p:{x:-61.8,y:178.9}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231,p:{x:-37.6,y:178.9}},{t:this.shape_230},{t:this.shape_229,p:{x:-232.4,y:202.6}},{t:this.shape_228,p:{x:-220.9,y:202.7}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224,p:{x:-183.6,y:202.7}},{t:this.shape_223,p:{x:-175.8,y:202.6}},{t:this.shape_222,p:{x:-168.9,y:202.7}},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219,p:{x:-142.8,y:202.7}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212,p:{x:-73.8,y:202.7}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207,p:{x:-25.5,y:205.9}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201,p:{x:-182.2,y:226.5}},{t:this.shape_200,p:{x:-175.3,y:226.6}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195,p:{x:-123.5,y:226.7}},{t:this.shape_194,p:{x:-115.4,y:226.5}},{t:this.shape_193,p:{x:-108.4,y:226.5}},{t:this.shape_192,p:{x:-94.9,y:226.7}},{t:this.shape_191,p:{x:-85.6,y:226.5}},{t:this.shape_190},{t:this.shape_189,p:{x:-70.7,y:226.7}},{t:this.shape_188},{t:this.shape_187,p:{x:-46.6,y:226.5}},{t:this.shape_186,p:{x:-35.2,y:226.6}},{t:this.shape_185,p:{x:-23.9,y:226.5}},{t:this.shape_184,p:{x:-12.2,y:226.7}},{t:this.shape_183},{t:this.shape_182,p:{x:2.6,y:226.6}},{t:this.shape_181,p:{x:11.1,y:226.5}},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178,p:{x:35.9,y:226.5}},{t:this.shape_177},{t:this.shape_176,p:{x:-225.1,y:250.4}},{t:this.shape_175,p:{x:-215.8,y:252.2}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172,p:{x:-189,y:250.5}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168,p:{x:-147.2,y:250.4}},{t:this.shape_167},{t:this.shape_166,p:{x:-125.7,y:250.5}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163,p:{x:-94.7,y:250.4}},{t:this.shape_162,p:{x:-85.4,y:250.5}},{t:this.shape_161,p:{x:-75.7,y:250.4}},{t:this.shape_160,p:{x:-62.2,y:250.5}},{t:this.shape_159},{t:this.shape_158,p:{x:-47,y:250.5}},{t:this.shape_157,p:{x:-37.4,y:250.6}},{t:this.shape_156,p:{x:-23.7,y:248.7}},{t:this.shape_155,p:{x:-18.4,y:248.8}},{t:this.shape_154,p:{x:-13.1,y:250.4}},{t:this.shape_153,p:{x:-8.8,y:248.8}},{t:this.shape_152,p:{x:-5.1,y:253.7}},{t:this.shape_151,p:{y:272.8}},{t:this.shape_150,p:{x:-225.3,y:274.4}},{t:this.shape_149,p:{x:-216.2,y:272.6}},{t:this.shape_148},{t:this.shape_147,p:{x:-198.5,y:274.3}},{t:this.shape_146},{t:this.shape_145,p:{x:-175.4,y:274.5}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:-150.9,y:274.3}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:-115.5,y:274.4}},{t:this.shape_137},{t:this.shape_136,p:{x:-98.3,y:274.4}},{t:this.shape_135,p:{x:-89.7,y:274.4}},{t:this.shape_134,p:{x:-80.1,y:274.3}},{t:this.shape_133,p:{x:-70.8,y:274.4}},{t:this.shape_132},{t:this.shape_131,p:{x:-54.1,y:274.4}},{t:this.shape_130,p:{x:-45.7,y:274.4}},{t:this.shape_129,p:{x:-38.6,y:273.2}},{t:this.shape_128,p:{x:-31.4,y:274.4}},{t:this.shape_127,p:{x:-25.1,y:272.6}},{t:this.shape_126,p:{x:-18.7,y:274.4}},{t:this.shape_125,p:{x:-8.9,y:272.6}},{t:this.shape_124,p:{x:-232.4,y:298.2}},{t:this.shape_123,p:{x:-220.9,y:298.3}},{t:this.shape_122,p:{x:-212,y:298.2}},{t:this.shape_121,p:{x:-202.7,y:298.3}},{t:this.shape_120,p:{x:-195.7,y:296.6}},{t:this.shape_119},{t:this.shape_118,p:{x:-179.4,y:296.5}},{t:this.shape_117,p:{x:-171.4,y:298.3}},{t:this.shape_116,p:{x:-161.8,y:298.2}},{t:this.shape_115,p:{x:-148.9,y:298.3}},{t:this.shape_114,p:{x:-140.5,y:298.3}},{t:this.shape_113,p:{x:-129.2,y:298.2}},{t:this.shape_112},{t:this.shape_111,p:{x:-108.3,y:298.3}},{t:this.shape_110,p:{x:-94.5,y:298.3}},{t:this.shape_109,p:{x:-86.1,y:298.2}},{t:this.shape_108,p:{x:-79.1,y:298.3}},{t:this.shape_107},{t:this.shape_106,p:{x:-60.2,y:298.3}},{t:this.shape_105,p:{x:-50.5,y:298.2}},{t:this.shape_104,p:{x:-44,y:301.5}}]}).to({state:[{t:this.shape_346,p:{y:91.6}},{t:this.shape_343,p:{y:96.4}},{t:this.shape_471},{t:this.shape_341,p:{y:120.3}},{t:this.shape_470},{t:this.shape_339,p:{y:168.1}},{t:this.shape_469},{t:this.shape_337,p:{y:215.9}},{t:this.shape_468},{t:this.shape_293,p:{x:-247.9,y:263.7}},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_322,p:{x:-191.3,y:93.2}},{t:this.shape_463},{t:this.shape_320,p:{x:-173,y:93.2}},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_222,p:{x:-99.6,y:93.2}},{t:this.shape_191,p:{x:-89.9,y:93.1}},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_284,p:{x:-53.4,y:93.1}},{t:this.shape_243,p:{x:-43.4,y:93.1}},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_273,p:{x:-11.3,y:92}},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_135,p:{x:-197.7,y:117.1}},{t:this.shape_156,p:{x:-187.9,y:115.3}},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_223,p:{x:-117.1,y:117}},{t:this.shape_430},{t:this.shape_178,p:{x:-101,y:117}},{t:this.shape_162,p:{x:-91.7,y:117.1}},{t:this.shape_298,p:{x:-82,y:117.2}},{t:this.shape_429},{t:this.shape_428},{t:this.shape_231,p:{x:-59.2,y:117.2}},{t:this.shape_427},{t:this.shape_255,p:{x:-35.5,y:118.8}},{t:this.shape_426},{t:this.shape_192,p:{x:-18.4,y:117.2}},{t:this.shape_265,p:{x:-9.8,y:117.1}},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_278,p:{x:-229.5,y:141.1}},{t:this.shape_277,p:{x:-217.9,y:140.9}},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_219,p:{x:-147.3,y:141}},{t:this.shape_176,p:{x:-137.6,y:140.9}},{t:this.shape_415},{t:this.shape_252,p:{x:-121.5,y:144.2}},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_121,p:{x:-197.7,y:164.9}},{t:this.shape_118,p:{x:-187.9,y:163.1}},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_182,p:{x:-139.1,y:164.9}},{t:this.shape_212,p:{x:-130.2,y:164.9}},{t:this.shape_407},{t:this.shape_201,p:{x:-117.1,y:164.8}},{t:this.shape_406},{t:this.shape_168,p:{x:-101,y:164.8}},{t:this.shape_138,p:{x:-91.7,y:164.9}},{t:this.shape_275,p:{x:-82,y:165}},{t:this.shape_405},{t:this.shape_260,p:{x:-60.6,y:164.8}},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_189,p:{x:-14.7,y:165}},{t:this.shape_172,p:{x:-6.1,y:164.9}},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_237,p:{x:-221.2,y:188.8}},{t:this.shape_236,p:{x:-212.3,y:188.8}},{t:this.shape_235,p:{x:-203.7,y:188.8}},{t:this.shape_395},{t:this.shape_394},{t:this.shape_256,p:{x:-171.2,y:188.7}},{t:this.shape_229,p:{x:-157.1,y:188.7}},{t:this.shape_200,p:{x:-145.5,y:188.8}},{t:this.shape_163,p:{x:-135.8,y:188.7}},{t:this.shape_393},{t:this.shape_207,p:{x:-119.7,y:192}},{t:this.shape_151,p:{y:211.1}},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_160,p:{x:-194.5,y:212.7}},{t:this.shape_161,p:{x:-184.9,y:212.6}},{t:this.shape_175,p:{x:-175.6,y:214.4}},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_300,p:{x:-138.3,y:212.7}},{t:this.shape_386},{t:this.shape_181,p:{x:-117.2,y:212.6}},{t:this.shape_385},{t:this.shape_259,p:{x:-106.6,y:212.7}},{t:this.shape_147,p:{x:-97.7,y:212.6}},{t:this.shape_384},{t:this.shape_117,p:{x:-82.8,y:212.7}},{t:this.shape_383},{t:this.shape_155,p:{x:-70.2,y:211}},{t:this.shape_382},{t:this.shape_142,p:{x:-54.6,y:212.6}},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_125,p:{x:-16.6,y:210.9}},{t:this.shape_228,p:{x:-7.6,y:212.7}},{t:this.shape_111,p:{x:-234.8,y:236.6}},{t:this.shape_136,p:{x:-225.8,y:236.6}},{t:this.shape_129,p:{x:-219.1,y:235.4}},{t:this.shape_154,p:{x:-212.8,y:236.5}},{t:this.shape_378},{t:this.shape_134,p:{x:-196.6,y:236.5}},{t:this.shape_158,p:{x:-187.3,y:236.6}},{t:this.shape_184,p:{x:-177.7,y:236.7}},{t:this.shape_377},{t:this.shape_376},{t:this.shape_234,p:{x:-154.9,y:236.7}},{t:this.shape_131,p:{x:-146.4,y:236.6}},{t:this.shape_224,p:{x:-138,y:236.6}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_186,p:{x:-110.1,y:236.6}},{t:this.shape_373},{t:this.shape_195,p:{x:-87.3,y:236.7}},{t:this.shape_194,p:{x:-79.3,y:236.5}},{t:this.shape_193,p:{x:-72.3,y:236.5}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_187,p:{x:-39.3,y:236.5}},{t:this.shape_185,p:{x:-25.3,y:236.5}},{t:this.shape_133,p:{x:-13.6,y:236.6}},{t:this.shape_122,p:{x:-4,y:236.5}},{t:this.shape_370},{t:this.shape_152,p:{x:12.2,y:239.8}},{t:this.shape_369},{t:this.shape_368},{t:this.shape_153,p:{x:-222.7,y:258.8}},{t:this.shape_367},{t:this.shape_149,p:{x:-208.1,y:258.7}},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_166,p:{x:-174.6,y:260.5}},{t:this.shape_363},{t:this.shape_145,p:{x:-157.7,y:260.6}},{t:this.shape_362},{t:this.shape_150,p:{x:-143.1,y:260.5}},{t:this.shape_361},{t:this.shape_110,p:{x:-126.5,y:260.5}},{t:this.shape_360},{t:this.shape_359},{t:this.shape_130,p:{x:-106.1,y:260.5}},{t:this.shape_109,p:{x:-98.3,y:260.4}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_157,p:{x:-69.5,y:260.6}},{t:this.shape_356},{t:this.shape_108,p:{x:-46.7,y:260.5}},{t:this.shape_355},{t:this.shape_128,p:{x:-28.8,y:260.5}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_123,p:{x:7.8,y:260.5}},{t:this.shape_351},{t:this.shape_120,p:{x:27.8,y:258.8}},{t:this.shape_116,p:{x:34.3,y:260.4}},{t:this.shape_106,p:{x:47.8,y:260.5}},{t:this.shape_312,p:{x:54.8,y:258.7}},{t:this.shape_127,p:{x:58.6,y:258.7}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_114,p:{x:-220,y:284.4}},{t:this.shape_348},{t:this.shape_257,p:{x:-199,y:284.4}},{t:this.shape_124,p:{x:-187.5,y:284.3}},{t:this.shape_113,p:{x:-173.4,y:284.3}},{t:this.shape_126,p:{x:-161.8,y:284.4}},{t:this.shape_105,p:{x:-152.1,y:284.3}},{t:this.shape_347},{t:this.shape_115,p:{x:-133.9,y:284.4}},{t:this.shape_104,p:{x:-128,y:287.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.9,-5.3,583,314.1);


(lib.instr4 = function(mode,startPosition,loop) {
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

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D40000").s().p("AAGBGIADgfIhBAAIACgUIBOhYIAZAAIgJBWIARAAIgDAWIgRAAIgDAfgAgWAQIAAABIAiAAIAEgtIAAAAg");
	this.shape.setTransform(-119.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_1.setTransform(-134.2,0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhKIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(-143.6,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_3.setTransform(-152.2,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D40000").s().p("AgjAyIAKhjIAXAAIADAIIAPgIIAUAAIgCAXIgiAAIgHBMg");
	this.shape_4.setTransform(-159,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D40000").s().p("AgZAzIgXgOIAIhKIAagNIApAAIAVANIgIBKIgYAOgAgTAbIAhAAIAGg2IghAAg");
	this.shape_5.setTransform(-169.5,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D40000").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_6.setTransform(-179.6,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40000").s().p("AAQAyIgEgHIgOAHIgYAAIgWgNIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBkg");
	this.shape_7.setTransform(-190,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D40000").s().p("AgaBGIAMhzIgmAAIACgYIBnAAIgDAYIglAAIgMBzg");
	this.shape_8.setTransform(-200.8,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_9.setTransform(37.3,323.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(30.8,319.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(21.1,320);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_12.setTransform(11.9,318.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(2.2,320);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(-4.8,319.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(-13.2,320);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_16.setTransform(-27,320);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_17.setTransform(-36.2,320.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_18.setTransform(-47.9,319.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(-59.2,320);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_20.setTransform(-67.6,320);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(-80.5,319.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(-90.1,320);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_23.setTransform(-98.1,318.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALAAQAMAAAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(-107.6,321.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-114.4,318.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(-121.4,320);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(-130.7,319.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-139.6,320);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_29.setTransform(-151.1,319.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(-166.9,318.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-176.6,320);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(-183.1,318.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-189.3,320);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_34.setTransform(-196.6,318.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-203.6,320);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-212,320);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_37.setTransform(-221.9,314.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(-228,320);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_39.setTransform(-235.3,318.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_40.setTransform(-242.6,320.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_41.setTransform(-251,320);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(-259.5,320);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_43.setTransform(-268.1,320);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAnIA3AAIAAAKIg3AAIAAAqIA6AAIAAALg");
	this.shape_44.setTransform(-276.8,318.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_45.setTransform(-283.6,314.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(67.4,297.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(58.1,296);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(48.4,296.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_49.setTransform(41,294.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_50.setTransform(33.6,296.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(24.5,294.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(10.5,296);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_53.setTransform(0.8,296.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_54.setTransform(-7.2,294.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(-16.3,296.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_56.setTransform(-25.5,294.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_57.setTransform(-36.4,299.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_58.setTransform(-43,296);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_59.setTransform(-52.6,296.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_60.setTransform(-61.8,294.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_61.setTransform(-71.6,296.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_62.setTransform(-78.5,296);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_63.setTransform(-87,296.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_64.setTransform(-100.5,296);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_65.setTransform(-110.1,296.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_66.setTransform(-118.1,294.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAIQAGAHALAAQAMAAAHgHQAGgIAAgOQAAgPgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_67.setTransform(-127.6,297.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_68.setTransform(-134.4,294.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_69.setTransform(-141.4,296.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_70.setTransform(-148.8,294.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_71.setTransform(-160.5,296);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_72.setTransform(-170.1,296.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_73.setTransform(-179.7,294.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_74.setTransform(-193.2,296);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_75.setTransform(-202.9,296.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_76.setTransform(-214.4,296.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_77.setTransform(-226.4,296.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_78.setTransform(-235,296.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_79.setTransform(-243.9,296.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_80.setTransform(-251.9,294.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_81.setTransform(-261.8,297.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_82.setTransform(-271.1,296);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_83.setTransform(-280.8,296.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_84.setTransform(6.1,270.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_85.setTransform(-3,272.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_86.setTransform(-9.2,270.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_87.setTransform(-15.7,272.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_88.setTransform(-26.4,270.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_89.setTransform(-32.9,272.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_90.setTransform(-39.4,270.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_91.setTransform(-46.4,272.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_92.setTransform(-52.8,270.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_93.setTransform(-56.6,270.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_94.setTransform(-63.6,270.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_95.setTransform(-77,272.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_96.setTransform(-83.5,270.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_97.setTransform(-87.8,272.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_98.setTransform(-95.5,272.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_99.setTransform(-104.5,273.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_100.setTransform(-118.8,273.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_101.setTransform(-128.1,272.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_102.setTransform(-137.7,272.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgkAxQAMgEAFgEQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAHQgIAGgOACg");
	this.shape_103.setTransform(-146.5,274.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_104.setTransform(-159.6,270.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_105.setTransform(-169.4,272.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_106.setTransform(-177.4,270.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_107.setTransform(-187.3,273.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_108.setTransform(-196.6,272.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_109.setTransform(-206.2,272.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_110.setTransform(-212.7,270.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_111.setTransform(-223.9,273.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_112.setTransform(-233.2,272.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_113.setTransform(-242.8,272.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_114.setTransform(-251.2,272.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_115.setTransform(-260,272.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_116.setTransform(-269.7,272.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAfA5IgOgmQgDgHgEgCQgFgDgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLADQAFABADAEQAEADACAHIAPAmgAgfgDIAfAAQAaABAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_117.setTransform(-279.5,270.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_118.setTransform(-277.8,249.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#006699").s().p("AgXBHIAAgJIAIAAQAFgBADgDQADgDAAgGIAAggQAAgHADgEQADgFAFgBQgFAAgDgEQgDgFAAgHIAAgfQAAgHgDgDQgDgDgFAAIgIAAIAAgLIAJAAQALAAAFAHQAGAFAAALIAAAeQAAAHACADQADADAGACIAFABIAAAFIgFABQgGABgDADQgCAEAAAHIAAAfQAAALgGAFQgFAFgLAAg");
	this.shape_119.setTransform(-282.8,248.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_120.setTransform(-218.5,225.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#006699").s().p("AgNBIQAIgVADgRQADgRAAgRQAAgQgDgRQgDgRgIgUIALAAQAIASAEARQAFARAAASQAAASgFASQgEARgIATg");
	this.shape_121.setTransform(-223.4,224.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#006699").s().p("AAEBIQgJgTgEgRQgFgSAAgSQAAgSAFgRQAEgRAJgSIALAAQgJAUgEARQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_122.setTransform(-227.3,224.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_123.setTransform(-235,226.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_124.setTransform(-247.1,224.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_125.setTransform(-258.7,224.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#006699").s().p("AgTBHIAAgMIAMACQAHgBADgEQAEgEAAgMIAAhvIANAAIAABwQAAAQgGAHQgGAIgNAAIgOgBg");
	this.shape_126.setTransform(-266.7,224.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#006699").s().p("AAOBHQgLAAgEgFQgGgGAAgKIAAgfQAAgHgDgDQgCgEgGgBIgFgBIAAgFIAFgBQAGgCACgDQADgDAAgHIAAgeQAAgLAGgFQAFgHAKAAIAKAAIAAALIgJAAQgEAAgDADQgDADAAAHIAAAfQAAAHgEAEQgCAFgFAAQAFABACAFQAEAEAAAHIAAAfQAAAHADADQADADAEABIAJAAIAAAJg");
	this.shape_127.setTransform(-199.6,200.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIALAAQAIASAEASQAFARAAASQAAASgFASQgEASgIARg");
	this.shape_128.setTransform(-205.8,200.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#006699").s().p("AgdAxQgLgHAAgPQAAgKAGgIQAHgHALgCQgKgDgGgHQgFgIAAgJQAAgJAFgHQAEgHAJgDQAJgEAKAAQALAAAJAEQAJADAEAHQAFAHABAJQgBAJgFAIQgGAHgKADQAMACAFAHQAHAIAAAKQAAAPgLAHQgMAJgSAAQgSAAgLgJgAgUALQgHAGAAAJQAAALAHAFQAIAFAMAAQANAAAIgFQAHgFAAgLQAAgJgIgGQgIgGgMgBQgLABgJAGgAgSgpQgGAGAAAJQAAAJAGAGQAIAGAKAAQAMAAAGgGQAHgGAAgJQAAgJgHgGQgGgGgMABQgLgBgHAGg");
	this.shape_129.setTransform(-212.6,198.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#006699").s().p("AgfA5IAAgLIAZAAIAAhWIgXAPIAAgMIAdgTIAHAAIAABmIAZAAIAAALg");
	this.shape_130.setTransform(-221.8,198.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_131.setTransform(-228.9,200.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#006699").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_132.setTransform(-234.9,199.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#006699").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_133.setTransform(-242.7,200.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_134.setTransform(-251.6,200.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_135.setTransform(-260.6,202.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_136.setTransform(-269.9,200.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgCQgFgDgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAJAAAOQAAAMgGAHQgGAHgLADQAFABADAEQAEADACAGIAPAngAgfgCIAfAAQAagBAAgVQAAgLgHgFQgGgFgNAAIgfAAg");
	this.shape_137.setTransform(-279.5,198.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_138.setTransform(-230,176.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_139.setTransform(-236.4,174.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_140.setTransform(-245.7,176.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_141.setTransform(-253.2,175.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_142.setTransform(-260.6,176.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_143.setTransform(-269.8,176.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_144.setTransform(-279.8,175);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_145.setTransform(54.6,155.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_146.setTransform(48.1,154.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_147.setTransform(38.1,152.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_148.setTransform(30.1,150.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_149.setTransform(20.3,152.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_150.setTransform(10.7,150.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_151.setTransform(-3.2,154.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_152.setTransform(-12.5,152.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_153.setTransform(-21.7,152.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_154.setTransform(-28.7,152.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_155.setTransform(-36.8,152.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_156.setTransform(-44.8,150.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_157.setTransform(-58.9,152.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_158.setTransform(-68.5,150.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_159.setTransform(-77.8,152.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_160.setTransform(-87.4,152.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_161.setTransform(-94.9,151.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_162.setTransform(-108.9,152.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_163.setTransform(-120.9,152.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_164.setTransform(-127.3,150.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_165.setTransform(-134.3,152.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_166.setTransform(-143.9,150.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_167.setTransform(-157,152.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_168.setTransform(-164.8,150.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_169.setTransform(-178.5,152.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_170.setTransform(-188.2,152.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_171.setTransform(-196.2,150.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_172.setTransform(-205.6,154.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_173.setTransform(-212.5,151);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_174.setTransform(-219.4,152.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_175.setTransform(-226.9,151.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_176.setTransform(-231.5,151);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_177.setTransform(-238.4,150.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_178.setTransform(-251.8,154.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_179.setTransform(-263.9,152.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_180.setTransform(-275.5,152.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#006699").s().p("AgTBGIAAgLIAMABQAHABADgFQAEgEAAgMIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgCg");
	this.shape_181.setTransform(-283.5,152.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_182.setTransform(89.9,128.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_183.setTransform(80.2,128.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_184.setTransform(72.8,127.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_185.setTransform(65,128.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_186.setTransform(51.5,128.7);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#006699").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_187.setTransform(44.5,128.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#006699").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_188.setTransform(36.5,128.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#006699").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_189.setTransform(27,127.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#006699").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_190.setTransform(16.1,133);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_191.setTransform(10,128.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#006699").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIANAAIgjBPg");
	this.shape_192.setTransform(1.4,128.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_193.setTransform(-7.5,128.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#006699").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_194.setTransform(-18.8,127.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_195.setTransform(-31.7,127.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_196.setTransform(-36.5,127.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_197.setTransform(-41.6,128.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_198.setTransform(-49.4,128.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_199.setTransform(-58.4,130.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_200.setTransform(-67.7,128.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_201.setTransform(-76.1,128.8);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_202.setTransform(-86.1,127.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgdAzIADgKQAHAEAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_203.setTransform(-93.1,130.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_204.setTransform(-102.4,128.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_205.setTransform(-112,128.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_206.setTransform(-118.5,127);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_207.setTransform(-125,128.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_208.setTransform(-131.5,127.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_209.setTransform(-138.5,127);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_210.setTransform(-151.9,128.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_211.setTransform(-158.4,127);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_212.setTransform(-162.7,128.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_213.setTransform(-170.4,128.8);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_214.setTransform(-179.4,130.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgdAzIADgKQAHAEAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_215.setTransform(-193.7,130.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_216.setTransform(-203,128.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_217.setTransform(-212.6,128.8);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAGgFAEgJIACgHIgihOIAOAAIAaBBIAbhBIANAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_218.setTransform(-221.4,130.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_219.setTransform(-234.6,128.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_220.setTransform(-244.3,128.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_221.setTransform(-253.5,127);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_222.setTransform(-263.2,128.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_223.setTransform(-270.2,128.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_224.setTransform(-279.5,127.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgRIAPAAIAAAMQAAAHgCAGQgCAFgEAFgAgHgfIAAgRIAPAAIAAARg");
	this.shape_225.setTransform(-109.6,106);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#006699").s().p("AgXBIIAAgKIAIAAQAFAAADgEQADgDAAgHIAAgfQAAgHADgFQADgEAFgBQgFAAgDgFQgDgDAAgIIAAgfQAAgGgDgEQgDgDgFAAIgIAAIAAgKIAJAAQALgBAFAHQAGAFAAAKIAAAfQAAAHACAEQADADAGABIAFABIAAAFIgFABQgGACgDADQgCADAAAHIAAAfQAAAKgGAGQgFAFgLABg");
	this.shape_226.setTransform(-114.6,104.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_227.setTransform(-119,108.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_228.setTransform(-122.7,108.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_229.setTransform(-126.4,108.1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_230.setTransform(-130.1,108.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_231.setTransform(-133.8,108.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#006699").s().p("AAOBIQgLgBgEgFQgGgGAAgKIAAgfQAAgHgDgDQgCgDgGgCIgFgBIAAgFIAFgBQAGgBACgDQADgEAAgHIAAgfQAAgKAGgFQAFgHAKABIAKAAIAAAKIgJAAQgEAAgDADQgDAEAAAGIAAAfQAAAIgEADQgCAFgFAAQAFABACAEQAEAFAAAHIAAAfQAAAHADADQADAEAEAAIAJAAIAAAKg");
	this.shape_232.setTransform(-138.1,104.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#006699").s().p("AgOBIQAJgVAEgRQACgRAAgRQAAgQgCgRQgEgSgJgTIAMAAQAIARAEASQAFASAAARQAAATgFARQgEARgIATg");
	this.shape_233.setTransform(-144.4,104.7);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#006699").s().p("AgdAxQgLgHAAgPQAAgLAGgHQAHgHALgCQgLgEgFgHQgFgGAAgKQAAgJAEgHQAGgGAIgEQAJgEAKAAQALAAAJAEQAIAEAGAGQAEAHAAAJQAAAKgFAGQgGAHgKAEQALACAHAHQAGAHAAALQAAAPgMAHQgKAJgTAAQgSAAgLgJgAgTALQgIAFAAAKQAAAKAIAGQAGAFANAAQAOAAAGgFQAIgGAAgKQAAgKgIgFQgIgGgMgBQgMABgHAGgAgSgpQgGAGAAAJQAAAJAGAGQAIAFAKABQALgBAHgFQAHgGAAgJQAAgJgHgGQgGgGgMAAQgLAAgHAGg");
	this.shape_234.setTransform(-151.1,103.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#006699").s().p("AgfA5IAAgLIAZAAIAAhWIgXAQIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_235.setTransform(-160.3,103.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#006699").s().p("AAEBIQgJgTgEgRQgFgRAAgTQAAgRAFgSQAEgSAJgRIALAAQgJATgEASQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_236.setTransform(-167.5,104.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#006699").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_237.setTransform(-173.5,103.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#006699").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_238.setTransform(-181.2,104.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_239.setTransform(-190.1,104.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_240.setTransform(-199.1,106.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_241.setTransform(-208.4,104.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgCQgFgDgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAHQgGAHgLADQAFABADAEQAEADACAHIAPAmgAgfgDIAfAAQAaAAAAgVQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_242.setTransform(-218,103.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_243.setTransform(-230,105);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_244.setTransform(-236.4,103.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_245.setTransform(-245.7,104.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_246.setTransform(-253.2,103.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_247.setTransform(-260.6,104.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_248.setTransform(-269.8,104.9);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_249.setTransform(-279.8,103.3);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_250.setTransform(116,84.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#006699").s().p("AAZA6IAAgwQgEAHgHAEQgHAEgIAAQgLAAgJgFQgHgFgFgKQgFgIABgNQgBgMAFgJQAFgKAHgFQAJgGALAAQAIAAAHAFQAIAFADAHIACgOIALAAIgBAWIAABbgAgRgnQgHAJAAAOQAAAPAHAIQAGAHALAAQAMAAAGgHQAHgIAAgPQAAgOgHgJQgGgHgMAAQgLAAgGAHg");
	this.shape_251.setTransform(109.2,82.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_252.setTransform(95.8,79.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_253.setTransform(86.7,81);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_254.setTransform(80.5,79.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_255.setTransform(74,81);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_256.setTransform(63.3,79.3);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_257.setTransform(59.5,79.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_258.setTransform(55.7,79.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_259.setTransform(50.4,79.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_260.setTransform(40.5,81);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAXhAIAMAAIgdBPg");
	this.shape_261.setTransform(29,81);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_262.setTransform(20.2,79.3);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_263.setTransform(13.2,79.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_264.setTransform(-0.3,80.9);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_265.setTransform(-9.9,81);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_266.setTransform(-19.6,82.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_267.setTransform(-28.9,80.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_268.setTransform(-38.5,81);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_269.setTransform(-45,79.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_270.setTransform(-51.5,81.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_271.setTransform(-65,79.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_272.setTransform(-74.7,81);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_273.setTransform(-81.2,79.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_274.setTransform(-90.2,80.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_275.setTransform(-101.8,81.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_276.setTransform(-109.3,81.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_277.setTransform(-119.4,81);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_278.setTransform(-128.7,80.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_279.setTransform(-138.4,81);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_280.setTransform(-150,80.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_281.setTransform(-163.1,79.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_282.setTransform(-170,79.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAGgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_283.setTransform(-180.7,82.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#006699").s().p("AgXBHIAAgKIAIAAQAFAAADgDQADgEAAgFIAAggQAAgHADgEQADgEAFgCQgFAAgDgEQgDgFAAgHIAAgfQAAgGgDgEQgDgDgFAAIgIAAIAAgLIAJAAQALABAFAFQAGAGAAALIAAAeQAAAHACADQADAEAGABIAFABIAAAFIgFABQgGABgDADQgCAEAAAHIAAAfQAAALgGAFQgFAGgLgBg");
	this.shape_284.setTransform(-185.7,80.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_285.setTransform(-190.1,84.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_286.setTransform(-193.8,84.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_287.setTransform(-197.5,84.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_288.setTransform(-201.2,84.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#006699").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_289.setTransform(-204.9,84.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#006699").s().p("AAOBHQgLABgEgGQgGgFAAgLIAAgfQAAgHgDgDQgCgDgGgCIgFgBIAAgFIAFgBQAGgBACgEQADgDAAgHIAAgeQAAgLAGgGQAFgFAKgBIAKAAIAAALIgJAAQgEAAgDADQgDAEAAAGIAAAfQAAAHgEAFQgCAEgFAAQAFACACAEQAEAEAAAHIAAAgQAAAFADAEQADADAEAAIAJAAIAAAKg");
	this.shape_290.setTransform(-209.2,80.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#006699").s().p("AgOBHQAJgTADgSQADgRAAgRQAAgQgDgSQgDgQgJgVIALAAQAJASAFASQADARAAASQAAASgDASQgFASgJARg");
	this.shape_291.setTransform(-215.4,80.8);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#006699").s().p("AAYA6IAAgwQgDAHgHAEQgHAEgJAAQgKAAgJgFQgIgFgEgKQgEgIgBgNQABgMAEgJQAEgKAIgFQAJgGAKAAQAJAAAHAFQAHAFAEAHIABgOIANAAIgBAWIAABbgAgSgnQgGAJAAAOQAAAPAGAIQAHAHALAAQALAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgLAAQgLAAgHAHg");
	this.shape_292.setTransform(-222.4,82.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_293.setTransform(-228.9,80.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#006699").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_294.setTransform(-234.9,79.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#006699").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_295.setTransform(-242.7,81);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_296.setTransform(-251.6,81);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_297.setTransform(-260.6,82.7);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_298.setTransform(-269.9,81);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAJAAAOQAAAMgGAHQgGAHgLAEQAFAAADADQAEAEACAGIAPAngAgfgCIAfAAQAagBAAgVQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_299.setTransform(-279.5,79.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_300.setTransform(26.8,55.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_301.setTransform(17,57.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_302.setTransform(10.6,55.3);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_303.setTransform(3.6,57.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_304.setTransform(-2.8,55.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_305.setTransform(-14,58.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_306.setTransform(-23.3,57);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_307.setTransform(-33,57.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_308.setTransform(-39.4,55.3);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_309.setTransform(-46,57.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_310.setTransform(-53,57);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_311.setTransform(-60.7,57.1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_312.setTransform(-69.6,55.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_313.setTransform(-84,58.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_314.setTransform(-93.3,57);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_315.setTransform(-102.9,57.1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgjAxQALgEAGgEQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBYQgFANgJAHQgJAGgNACg");
	this.shape_316.setTransform(-111.7,59);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_317.setTransform(-124.8,55.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_318.setTransform(-134.6,57.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_319.setTransform(-142.6,55.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_320.setTransform(-152.5,58.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_321.setTransform(-161.8,57);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_322.setTransform(-171.4,57.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_323.setTransform(-177.9,55.3);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_324.setTransform(-187.4,55.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_325.setTransform(-196.9,57.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_326.setTransform(-204.4,55.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_327.setTransform(-211.8,57);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_328.setTransform(-221.1,57.2);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_329.setTransform(-234.6,57);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_330.setTransform(-244.3,57.1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_331.setTransform(-253.5,55.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_332.setTransform(-263.2,57.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_333.setTransform(-270.2,57);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAqA5IgMgdIg7AAIgMAdIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_334.setTransform(-279.5,55.5);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_335.setTransform(89.8,36.4);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#006699").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_336.setTransform(85.1,32);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#006699").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_337.setTransform(77.4,33.2);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_338.setTransform(68.5,33.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#006699").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_339.setTransform(59.5,34.9);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_340.setTransform(50.2,33.2);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAJAAAOQAAAMgGAHQgGAHgLAEQAFAAADADQAEAEACAGIAPAngAgfgCIAfAAQAagBAAgVQAAgLgHgFQgGgFgNAAIgfAAg");
	this.shape_341.setTransform(40.6,31.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_342.setTransform(25.8,33.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_343.setTransform(16.1,33.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_344.setTransform(8.1,31.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_345.setTransform(-1.7,33.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_346.setTransform(-11,33.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_347.setTransform(-20.3,33.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_348.setTransform(-30,34.9);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_349.setTransform(-39.6,34.9);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_350.setTransform(-48.9,33.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_351.setTransform(-57.9,33.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_352.setTransform(-69.3,33.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_353.setTransform(-85.2,33.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_354.setTransform(-94.9,33.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_355.setTransform(-104.5,34.9);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_356.setTransform(-113.8,33.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_357.setTransform(-122.8,33.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_358.setTransform(-132.2,31.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_359.setTransform(-145.7,33.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_360.setTransform(-155.3,33.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_361.setTransform(-164.5,31.4);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_362.setTransform(-174.3,33.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_363.setTransform(-181.2,33.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_364.setTransform(-189.7,33.2);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_365.setTransform(-203.2,33.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_366.setTransform(-212.8,33.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_367.setTransform(-220.8,31.4);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_368.setTransform(-229.7,33.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_369.setTransform(-238.6,33.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_370.setTransform(-246.6,31.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_371.setTransform(-256.5,34.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_372.setTransform(-265.8,33.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_373.setTransform(-272.3,31.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAJAAAOQAAAMgGAHQgGAHgLAEQAFAAADADQAEAEACAGIAPAngAgfgCIAfAAQAagBAAgVQAAgLgHgFQgGgFgNAAIgfAAg");
	this.shape_374.setTransform(-279.5,31.6);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_375.setTransform(-293.9,275.4);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AALA5IAAgZIgzAAIAAgKIA1hOIALAAIAABNIARAAIAAALIgRAAIAAAZgAgbAVIAmAAIAAg2g");
	this.shape_376.setTransform(-300.4,270.6);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_377.setTransform(-293.9,132);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQANAAAFgFQAHgGAAgLQAAgUgaAAIgMAAIAAgKIAKAAQAMAAAGgGQAHgGAAgKQAAgJgGgFQgFgFgKAAQgPAAgQANIgGgKQAHgGAKgFQALgDAKAAQAPAAAJAIQAJAHAAAOQAAAJgEAIQgGAHgIADQALADAEAGQAGAIAAAKQAAAPgLAJQgJAIgSAAQgJAAgLgEg");
	this.shape_378.setTransform(-300.7,127.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_379.setTransform(-293.9,60.3);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgEAKABQAPAAAJAIQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_380.setTransform(-300.5,55.4);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_381.setTransform(-293.9,36.4);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhVIgXAOIAAgMIAdgTIAHAAIAABmIAZAAIAAALg");
	this.shape_382.setTransform(-300.1,31.6);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_383.setTransform(-157.3,328.8);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgkA7IAAhcQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_384.setTransform(-225.9,331.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_385.setTransform(-235.1,331.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_386.setTransform(-242.3,328.8);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_387.setTransform(-262.1,330);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_388.setTransform(37.9,308);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_389.setTransform(12,304.9);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_390.setTransform(6.5,304.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_391.setTransform(-11.7,301);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_392.setTransform(-25,304.9);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAKIg3AAIAAApIA6AAIAAALg");
	this.shape_393.setTransform(-66.5,304.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_394.setTransform(-73.3,301);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_395.setTransform(-91.3,306.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_396.setTransform(-199.4,306.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_397.setTransform(-228.7,304.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgJAGgNADg");
	this.shape_398.setTransform(-275.5,308);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_399.setTransform(-282.6,304.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_400.setTransform(60.8,280.4);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_401.setTransform(30.2,281);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_402.setTransform(-18.6,281);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_403.setTransform(-64,281);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBYQgFANgJAGQgJAHgNACg");
	this.shape_404.setTransform(-75.1,284.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_405.setTransform(-83.9,280.4);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_406.setTransform(-132,281);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_407.setTransform(-152.1,280.4);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_408.setTransform(-173.4,281);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_409.setTransform(-192.9,283.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_410.setTransform(-209.5,281);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_411.setTransform(-237.7,280.4);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_412.setTransform(-245.3,281);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgpA5IAAhxIAtAAQARAAAKAIQALAJgBAPQABAPgLAJQgKAHgRAAIggAAIAAAygAgcgDIAfAAQAMAAAHgFQAGgGABgKQgBgKgGgGQgHgFgMAAIgfAAg");
	this.shape_413.setTransform(-279.8,280.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#006699").s().p("AgXBHIAAgKIAIAAQAFAAADgDQADgEAAgFIAAggQAAgHADgEQADgEAFgCQgFAAgDgEQgDgFAAgHIAAgfQAAgGgDgEQgDgDgFAAIgIAAIAAgLIAJAAQALABAFAGQAGAFAAALIAAAeQAAAHACADQADAEAGABIAFABIAAAFIgFABQgGABgDADQgCAEAAAHIAAAfQAAALgGAFQgFAGgLgBg");
	this.shape_414.setTransform(-282.8,258.1);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgRIAPAAIAAAMQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_415.setTransform(-218.5,235.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#006699").s().p("AgNBIQAIgVADgRQADgRAAgRQAAgQgDgRQgDgRgIgUIALAAQAIARAEASQAFASAAARQAAATgFARQgEASgIASg");
	this.shape_416.setTransform(-223.4,234.2);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#006699").s().p("AAEBIQgJgSgEgSQgFgRAAgTQAAgRAFgSQAEgSAJgRIALAAQgJAUgEARQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_417.setTransform(-227.3,234.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_418.setTransform(-235,236.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#006699").s().p("AgTBGIAAgLIAMACQAHgBADgEQAEgEAAgMIAAhvIANAAIAABwQAAAQgGAHQgGAIgNAAIgOgCg");
	this.shape_419.setTransform(-266.7,234.3);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#006699").s().p("AAOBHQgLAAgEgFQgGgFAAgLIAAgfQAAgHgDgDQgCgEgGgBIgFgBIAAgFIAFgBQAGgCACgDQADgDAAgHIAAgeQAAgLAGgFQAFgHAKAAIAKAAIAAALIgJAAQgEAAgDADQgDADAAAHIAAAfQAAAHgEAFQgCAEgFAAQAFABACAFQAEAEAAAHIAAAgQAAAGADADQADADAEAAIAJAAIAAAKg");
	this.shape_420.setTransform(-199.6,210.3);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIALAAQAIATAEARQAFARAAASQAAASgFASQgEASgIARg");
	this.shape_421.setTransform(-205.8,210.3);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#006699").s().p("AgdAyQgLgIAAgPQAAgLAGgHQAHgIALgBQgKgEgGgGQgFgIAAgJQAAgJAFgHQAEgHAJgEQAJgDAKAAQALAAAJADQAJAEAEAHQAFAHABAJQgBAJgFAIQgGAGgKAEQAMABAFAIQAHAHAAALQAAAPgLAIQgMAIgSAAQgSAAgLgIgAgUALQgHAGAAAJQAAALAHAFQAIAFAMAAQANAAAIgFQAHgFAAgLQAAgJgIgGQgIgGgMgBQgLABgJAGgAgSgpQgGAFAAAKQAAAJAGAGQAIAGAKAAQAMAAAGgGQAHgGAAgJQAAgKgHgFQgGgGgMABQgLgBgHAGg");
	this.shape_422.setTransform(-212.6,208.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#006699").s().p("AgfA5IAAgLIAZAAIAAhVIgXAOIAAgMIAdgTIAHAAIAABmIAZAAIAAALg");
	this.shape_423.setTransform(-221.8,208.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_424.setTransform(-228.9,210.3);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#006699").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_425.setTransform(-234.9,209.3);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_426.setTransform(-267.7,188.3);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAJIg3AAIAAAqIA6AAIAAALg");
	this.shape_427.setTransform(-280.3,185);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#006699").s().p("AgTBGIAAgLIAMABQAHABADgFQAEgFAAgLIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgCg");
	this.shape_428.setTransform(-96.6,162.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#006699").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_429.setTransform(-123.7,166.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#006699").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_430.setTransform(-137.3,162.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#006699").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_431.setTransform(-145.3,162.8);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#006699").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_432.setTransform(-154.8,161.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#006699").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_433.setTransform(-165.7,166.9);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#006699").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_434.setTransform(-180.4,162.7);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_435.setTransform(-189.3,162.7);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#006699").s().p("AAqA5IAAhTIglBTIgIAAIgmhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_436.setTransform(-200.6,161.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_437.setTransform(-281.2,162.7);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_438.setTransform(108.9,137);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_439.setTransform(101.3,137.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_440.setTransform(63.7,140.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_441.setTransform(54.5,140.7);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_442.setTransform(47.3,137.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_443.setTransform(38.5,143);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_444.setTransform(32.7,138.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_445.setTransform(25.9,137.6);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_446.setTransform(2.4,138.8);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_447.setTransform(-21.6,137);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAGgFAEgJIACgHIgihOIAOAAIAaBBIAbhBIANAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_448.setTransform(-35.1,140.7);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_449.setTransform(-62,138.8);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_450.setTransform(-83.7,137);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_451.setTransform(-91.3,137.6);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_452.setTransform(-102.5,138.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_453.setTransform(-124.3,138.8);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_454.setTransform(-139.7,137.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_455.setTransform(-147.8,139.9);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#006699").s().p("AgXBHIAAgKIAIAAQAFABADgEQADgEAAgFIAAggQAAgHADgFQADgDAFgCQgFAAgDgEQgDgEAAgIIAAgfQAAgHgDgDQgDgDgFAAIgIAAIAAgKIAJAAQALAAAFAFQAGAGAAAKIAAAfQAAAHACAEQADACAGACIAFABIAAAFIgFABQgGACgDACQgCAEAAAHIAAAfQAAAKgGAGQgFAGgLgBg");
	this.shape_456.setTransform(-152.8,138.6);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#006699").s().p("AAOBHQgLABgEgGQgGgGAAgKIAAgfQAAgHgDgDQgCgDgGgCIgFgBIAAgFIAFgBQAGgCACgCQADgEAAgHIAAgfQAAgKAGgGQAFgFAKAAIAKAAIAAAKIgJAAQgEAAgDADQgDADAAAHIAAAfQAAAIgEAEQgCAEgFAAQAFACACADQAEAFAAAHIAAAgQAAAFADAEQADAEAEgBIAJAAIAAAKg");
	this.shape_457.setTransform(-168.9,138.6);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#006699").s().p("AgOBHQAJgTAEgSQACgRAAgRQAAgQgCgRQgEgSgJgTIALAAQAJASAEARQAEASAAARQAAASgEASQgEARgJASg");
	this.shape_458.setTransform(-175.2,138.6);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#006699").s().p("AgdAyQgLgJAAgOQAAgLAGgHQAHgIALgCQgKgCgGgIQgFgHAAgJQAAgJAEgHQAFgGAJgFQAJgDAKAAQALAAAJADQAIAFAGAGQAEAHAAAJQABAJgHAHQgFAIgJACQAKACAHAIQAGAHAAALQAAAOgMAJQgKAIgTAAQgRAAgMgIgAgTALQgIAGAAAJQAAALAIAFQAGAFANAAQAOAAAGgFQAIgFAAgLQAAgJgIgGQgIgGgMgBQgMABgHAGgAgRgpQgHAGAAAJQAAAJAHAGQAGAGALABQALgBAIgGQAGgGAAgJQAAgJgGgGQgHgFgMgBQgLABgGAFg");
	this.shape_459.setTransform(-181.9,137.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#006699").s().p("AgfA5IAAgLIAZAAIAAhVIgXAPIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_460.setTransform(-191.1,137.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#006699").s().p("AAEBHQgJgSgEgRQgFgSAAgSQAAgRAFgSQAEgRAJgSIALAAQgJATgEASQgCARAAAQQAAARACARQAEASAIATg");
	this.shape_461.setTransform(-198.3,138.6);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#006699").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_462.setTransform(-204.3,137.6);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#006699").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_463.setTransform(-212,138.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#006699").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAQQAAALgGAIQgGAGgLAEQAFAAADADQAEAEACAGIAPAngAgfgCIAfAAQAaAAAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_464.setTransform(-248.8,137.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_465.setTransform(-267.7,140.5);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAKIg3AAIAAApIA6AAIAAALg");
	this.shape_466.setTransform(-280.3,137.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#006699").s().p("AAYA7IAAgxQgDAHgHAEQgHAEgJAAQgKAAgJgFQgHgFgFgKQgFgIAAgMQAAgNAFgKQAFgJAHgFQAJgFAKgBQAJABAHAEQAIAEADAJIACgQIAMAAIgBAXIAABcgAgRgnQgHAJAAAPQAAAPAHAGQAGAJALgBQAMABAGgJQAHgHgBgOQABgPgHgJQgGgHgMgBQgLABgGAHg");
	this.shape_467.setTransform(36.1,116.6);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#000000").s().p("AgjAwQALgCAFgFQAGgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_468.setTransform(23.1,116.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_469.setTransform(14.3,113.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_470.setTransform(0,113.1);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_471.setTransform(-8.9,114.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_472.setTransform(-16.2,113.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_473.setTransform(-32.6,114.9);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_474.setTransform(-41,114.9);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_475.setTransform(-49.2,114.9);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#000000").s().p("AgkA7IAAhcQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_476.setTransform(-64,116.6);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_477.setTransform(-73.3,114.9);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_478.setTransform(-91.7,114.9);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_479.setTransform(-117.6,114.9);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_480.setTransform(-128.8,113.7);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_481.setTransform(-145.3,114.9);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#000000").s().p("AgkA7IAAhcQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_482.setTransform(-154.3,116.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_483.setTransform(-163.6,114.9);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_484.setTransform(-180.7,113);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_485.setTransform(-187.9,114.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_486.setTransform(-206.8,114.9);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_487.setTransform(-215.7,113.1);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_488.setTransform(-227.9,114.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_489.setTransform(-262,114.9);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_490.setTransform(-271,113.1);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#000000").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_491.setTransform(-280.5,113.3);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_492.setTransform(-201.6,89.2);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_493.setTransform(-210.5,91);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_494.setTransform(-217.7,89.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_495.setTransform(-234.4,91);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_496.setTransform(-252.7,91);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_497.setTransform(-271.4,91);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAHgEAJAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgJAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_498.setTransform(-280.3,89.2);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_499.setTransform(77.4,67.1);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_500.setTransform(69,67.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_501.setTransform(57.8,65.9);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_502.setTransform(40.9,65.3);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_503.setTransform(33.3,65.9);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_504.setTransform(22.3,67.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAIAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgIgMAAQgLAAgGAIg");
	this.shape_505.setTransform(13.8,68.8);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_506.setTransform(4.5,67.1);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_507.setTransform(-2.8,65.9);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_508.setTransform(-9.5,67.1);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_509.setTransform(-28,67.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_510.setTransform(-35.4,65.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_511.setTransform(-47.2,65.3);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_512.setTransform(-56.1,67.1);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_513.setTransform(-64.5,67.1);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_514.setTransform(-85.9,67.1);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#006699").s().p("AAZA7IAAgxQgEAHgHAEQgHAEgIAAQgLAAgJgFQgHgFgFgKQgFgIABgMQgBgNAFgKQAFgJAHgFQAJgFALAAQAIAAAHAEQAIAEADAJIACgQIALAAIgBAXIAABcgAgRgnQgHAJAAAPQAAAPAHAGQAGAJALgBQAMABAGgJQAHgHAAgOQAAgQgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_515.setTransform(-141.4,68.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#006699").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_516.setTransform(-154,65.9);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#006699").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_517.setTransform(-161.7,67.1);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_518.setTransform(-244.2,67);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_519.setTransform(-258.3,67);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_520.setTransform(-269.8,67.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_521.setTransform(54.7,46.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_522.setTransform(47.8,41.4);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_523.setTransform(17.2,43.1);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_524.setTransform(3.2,43.1);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_525.setTransform(-8.4,43.2);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_526.setTransform(-16.7,43.2);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAIQAGAHALAAQAMAAAHgHQAGgIAAgOQAAgPgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_527.setTransform(-53.6,44.9);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_528.setTransform(-86.9,43.2);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_529.setTransform(-95.9,41.4);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_530.setTransform(-137.2,43.2);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_531.setTransform(-158.6,43.2);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_532.setTransform(-176.5,43.2);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_533.setTransform(-183.7,42);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_534.setTransform(-190.5,43.2);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_535.setTransform(-202.9,43.2);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_536.setTransform(-211.9,41.4);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_537.setTransform(-219.5,42);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#000000").s().p("AgkAwQAMgDAFgDQAGgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_538.setTransform(-230.7,45.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_539.setTransform(-237.7,41.3);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAIQAGAHALAAQAMAAAHgHQAGgIAAgOQAAgPgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_540.setTransform(-252.6,44.9);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_541.setTransform(-264.6,43.1);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAHAHIgFAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_542.setTransform(-280.3,41.6);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_543.setTransform(-293.9,285.4);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_544.setTransform(-293.9,118.1);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#000000").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQANAAAFgGQAHgFAAgKQAAgWgaAAIgMAAIAAgKIAKAAQAMAAAGgFQAHgFAAgLQAAgJgGgFQgFgFgKAAQgPAAgQANIgGgKQAHgGAKgEQALgEAKAAQAPAAAJAHQAJAJAAANQAAAJgEAIQgGAHgIAEQALABAEAIQAGAGAAALQAAAPgLAIQgJAJgSAAQgJAAgLgDg");
	this.shape_545.setTransform(-300.7,113.3);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_546.setTransform(-293.9,70.3);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgiA6IAAgLIAngrQAIgJAEgGQADgIAAgHQAAgKgFgEQgGgGgJAAQgQAAgQANIgFgKQAHgGAKgEQAKgEAKABQAPgBAJAJQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAAMg");
	this.shape_547.setTransform(-300.5,65.4);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_548.setTransform(-293.9,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_382,p:{y:31.6}},{t:this.shape_381,p:{x:-293.9,y:36.4}},{t:this.shape_380},{t:this.shape_379,p:{x:-293.9,y:60.3}},{t:this.shape_378},{t:this.shape_377,p:{x:-293.9,y:132}},{t:this.shape_376,p:{y:270.6}},{t:this.shape_375,p:{x:-293.9,y:275.4}},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368,p:{x:-229.7,y:33.2}},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363,p:{x:-181.2,y:33.1}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358,p:{x:-132.2,y:31.4}},{t:this.shape_357,p:{x:-122.8,y:33.2}},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352,p:{x:-69.3,y:33.1}},{t:this.shape_351,p:{x:-57.9,y:33.2}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341,p:{x:40.6,y:31.6}},{t:this.shape_340,p:{x:50.2,y:33.2}},{t:this.shape_339,p:{x:59.5,y:34.9}},{t:this.shape_338,p:{x:68.5,y:33.2}},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335,p:{x:89.8,y:36.4}},{t:this.shape_334},{t:this.shape_333,p:{x:-270.2,y:57}},{t:this.shape_332},{t:this.shape_331,p:{x:-253.5,y:55.3}},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311,p:{x:-60.7,y:57.1}},{t:this.shape_310,p:{x:-53,y:57}},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299,p:{x:-279.5,y:79.4}},{t:this.shape_298,p:{x:-269.9,y:81}},{t:this.shape_297},{t:this.shape_296,p:{x:-251.6,y:81}},{t:this.shape_295,p:{x:-242.7,y:81}},{t:this.shape_294,p:{x:-234.9,y:79.8}},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287,p:{x:-197.5,y:84.2}},{t:this.shape_286,p:{x:-193.8,y:84.2}},{t:this.shape_285,p:{x:-190.1,y:84.2}},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280,p:{x:-150,y:80.9}},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274,p:{x:-90.2,y:80.9}},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266,p:{x:-19.6,y:82.7}},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262,p:{x:20.2,y:79.3}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258,p:{x:55.7,y:79.3}},{t:this.shape_257,p:{x:59.5,y:79.2}},{t:this.shape_256,p:{x:63.3,y:79.3}},{t:this.shape_255,p:{x:74,y:81}},{t:this.shape_254,p:{x:80.5,y:79.2}},{t:this.shape_253,p:{x:86.7,y:81}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250,p:{x:116,y:84.2}},{t:this.shape_249,p:{y:103.3}},{t:this.shape_248,p:{x:-269.8,y:104.9}},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245,p:{x:-245.7,y:104.9}},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242,p:{x:-218,y:103.3}},{t:this.shape_241,p:{x:-208.4,y:104.9}},{t:this.shape_240,p:{x:-199.1,y:106.6}},{t:this.shape_239,p:{x:-190.1,y:104.9}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236,p:{x:-167.5,y:104.7}},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233,p:{x:-144.4,y:104.7}},{t:this.shape_232,p:{x:-138.1,y:104.7}},{t:this.shape_231,p:{x:-133.8,y:108.1}},{t:this.shape_230,p:{x:-130.1,y:108.1}},{t:this.shape_229,p:{x:-126.4,y:108.1}},{t:this.shape_228,p:{x:-122.7,y:108.1}},{t:this.shape_227,p:{x:-119,y:108.1}},{t:this.shape_226,p:{x:-114.6,y:104.7}},{t:this.shape_225,p:{x:-109.6,y:106}},{t:this.shape_224},{t:this.shape_223,p:{x:-270.2,y:128.7}},{t:this.shape_222},{t:this.shape_221,p:{x:-253.5,y:127}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214,p:{x:-179.4,y:130.5}},{t:this.shape_213,p:{x:-170.4,y:128.8}},{t:this.shape_212,p:{x:-162.7,y:128.7}},{t:this.shape_211,p:{x:-158.4,y:127}},{t:this.shape_210},{t:this.shape_209,p:{x:-138.5,y:127}},{t:this.shape_208,p:{x:-131.5,y:127.1}},{t:this.shape_207,p:{x:-125,y:128.9}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202,p:{x:-86.1,y:127.1}},{t:this.shape_201,p:{x:-76.1,y:128.8}},{t:this.shape_200,p:{x:-67.7,y:128.8}},{t:this.shape_199,p:{x:-58.4,y:130.5}},{t:this.shape_198,p:{x:-49.4,y:128.8}},{t:this.shape_197,p:{x:-41.6,y:128.7}},{t:this.shape_196},{t:this.shape_195,p:{x:-31.7,y:127.1}},{t:this.shape_194},{t:this.shape_193,p:{x:-7.5,y:128.8}},{t:this.shape_192},{t:this.shape_191,p:{x:10,y:128.8}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188,p:{x:36.5,y:128.9}},{t:this.shape_187,p:{x:44.5,y:128.7}},{t:this.shape_186,p:{x:51.5,y:128.7}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183,p:{x:80.2,y:128.8}},{t:this.shape_182,p:{x:89.9,y:128.9}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179,p:{x:-263.9,y:152.6}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176,p:{x:-231.5,y:151}},{t:this.shape_175,p:{x:-226.9,y:151.5}},{t:this.shape_174},{t:this.shape_173,p:{x:-212.5,y:151}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169,p:{x:-178.5,y:152.6}},{t:this.shape_168},{t:this.shape_167,p:{x:-157,y:152.7}},{t:this.shape_166,p:{x:-143.9,y:150.9}},{t:this.shape_165},{t:this.shape_164,p:{x:-127.3,y:150.9}},{t:this.shape_163,p:{x:-120.9,y:152.7}},{t:this.shape_162,p:{x:-108.9,y:152.6}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159,p:{x:-77.8,y:152.6}},{t:this.shape_158,p:{x:-68.5,y:150.9}},{t:this.shape_157,p:{x:-58.9,y:152.7}},{t:this.shape_156,p:{x:-44.8,y:150.9}},{t:this.shape_155,p:{x:-36.8,y:152.8}},{t:this.shape_154,p:{x:-28.7,y:152.6}},{t:this.shape_153},{t:this.shape_152,p:{x:-12.5,y:152.6}},{t:this.shape_151},{t:this.shape_150,p:{x:10.7,y:150.9}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145,p:{x:54.6,y:155.9}},{t:this.shape_144,p:{x:-279.8,y:175}},{t:this.shape_143,p:{x:-269.8,y:176.6}},{t:this.shape_142,p:{x:-260.6,y:176.5}},{t:this.shape_141},{t:this.shape_140,p:{x:-245.7,y:176.6}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{y:200.5}},{t:this.shape_135,p:{x:-260.6,y:202.2}},{t:this.shape_134,p:{y:200.5}},{t:this.shape_133,p:{y:200.5}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125,p:{y:224.5}},{t:this.shape_124,p:{y:224.3}},{t:this.shape_123,p:{x:-235,y:226.1}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115,p:{x:-260,y:272.1}},{t:this.shape_114,p:{x:-251.2,y:272.2}},{t:this.shape_113,p:{x:-242.8,y:272.2}},{t:this.shape_112,p:{x:-233.2,y:272.1}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108,p:{x:-196.6,y:272.1}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:-159.6,y:270.4}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:-128.1,y:272.1}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:-95.5,y:272.2}},{t:this.shape_97,p:{x:-87.8,y:272.1}},{t:this.shape_96},{t:this.shape_95,p:{x:-77,y:272.3}},{t:this.shape_94,p:{x:-63.6,y:270.4}},{t:this.shape_93,p:{x:-56.6,y:270.5}},{t:this.shape_92,p:{x:-52.8,y:270.4}},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89,p:{x:-32.9,y:272.3}},{t:this.shape_88,p:{x:-26.4,y:270.5}},{t:this.shape_87,p:{x:-15.7,y:272.2}},{t:this.shape_86},{t:this.shape_85,p:{x:-3,y:272.2}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:-271.1,y:296}},{t:this.shape_81},{t:this.shape_80,p:{x:-251.9,y:294.3}},{t:this.shape_79},{t:this.shape_78,p:{x:-235,y:296.1}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:-202.9,y:296.1}},{t:this.shape_74,p:{x:-193.2,y:296}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-160.5,y:296}},{t:this.shape_70},{t:this.shape_69,p:{x:-141.4,y:296.1}},{t:this.shape_68,p:{x:-134.4,y:294.4}},{t:this.shape_67,p:{x:-127.6,y:297.8}},{t:this.shape_66,p:{x:-118.1,y:294.3}},{t:this.shape_65,p:{x:-110.1,y:296.1}},{t:this.shape_64,p:{x:-100.5,y:296}},{t:this.shape_63},{t:this.shape_62,p:{x:-78.5,y:296}},{t:this.shape_61,p:{x:-71.6,y:296.1}},{t:this.shape_60,p:{x:-61.8,y:294.3}},{t:this.shape_59,p:{x:-52.6,y:296.1}},{t:this.shape_58,p:{x:-43,y:296}},{t:this.shape_57,p:{x:-36.4,y:299.3}},{t:this.shape_56},{t:this.shape_55,p:{x:-16.3,y:296.1}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:10.5,y:296}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:41,y:294.9}},{t:this.shape_48},{t:this.shape_47,p:{x:58.1,y:296}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:-268.1,y:320}},{t:this.shape_42,p:{x:-259.5,y:320}},{t:this.shape_41,p:{x:-251,y:320}},{t:this.shape_40,p:{x:-242.6,y:320.1}},{t:this.shape_39},{t:this.shape_38,p:{x:-228,y:320}},{t:this.shape_37},{t:this.shape_36,p:{x:-212,y:320}},{t:this.shape_35,p:{x:-203.6,y:320}},{t:this.shape_34},{t:this.shape_33,p:{x:-189.3,y:320}},{t:this.shape_32,p:{x:-183.1,y:318.2}},{t:this.shape_31,p:{x:-176.6,y:320}},{t:this.shape_30},{t:this.shape_29,p:{x:-151.1,y:319.9}},{t:this.shape_28,p:{x:-139.6,y:320}},{t:this.shape_27,p:{x:-130.7,y:319.9}},{t:this.shape_26,p:{x:-121.4,y:320}},{t:this.shape_25,p:{x:-114.4,y:318.3}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-90.1,y:320}},{t:this.shape_21,p:{x:-80.5,y:319.9}},{t:this.shape_20,p:{x:-67.6,y:320}},{t:this.shape_19,p:{x:-59.2,y:320}},{t:this.shape_18,p:{x:-47.9,y:319.9}},{t:this.shape_17,p:{x:-36.2,y:320.1}},{t:this.shape_16,p:{x:-27,y:320}},{t:this.shape_15,p:{x:-13.2,y:320}},{t:this.shape_14,p:{x:-4.8,y:319.9}},{t:this.shape_13,p:{x:2.2,y:320}},{t:this.shape_12},{t:this.shape_11,p:{x:21.1,y:320}},{t:this.shape_10,p:{x:30.8,y:319.9}},{t:this.shape_9,p:{x:37.3,y:323.2}}]}).to({state:[{t:this.shape_382,p:{y:41.6}},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_376,p:{y:280.6}},{t:this.shape_543},{t:this.shape_542},{t:this.shape_262,p:{x:-273.5,y:41.5}},{t:this.shape_541},{t:this.shape_540},{t:this.shape_257,p:{x:-246,y:41.4}},{t:this.shape_258,p:{x:-242.2,y:41.5}},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_67,p:{x:-167.2,y:44.9}},{t:this.shape_531},{t:this.shape_155,p:{x:-145.8,y:43.3}},{t:this.shape_530},{t:this.shape_256,p:{x:-131.3,y:41.5}},{t:this.shape_169,p:{x:-124.8,y:43.1}},{t:this.shape_266,p:{x:-115.5,y:44.9}},{t:this.shape_49,p:{x:-103.5,y:42}},{t:this.shape_529},{t:this.shape_528},{t:this.shape_299,p:{x:-72.5,y:41.6}},{t:this.shape_340,p:{x:-62.9,y:43.2}},{t:this.shape_527},{t:this.shape_338,p:{x:-44.6,y:43.2}},{t:this.shape_295,p:{x:-35.7,y:43.2}},{t:this.shape_294,p:{x:-27.9,y:42}},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_163,p:{x:28.9,y:43.2}},{t:this.shape_159,p:{x:38.5,y:43.1}},{t:this.shape_522},{t:this.shape_521},{t:this.shape_249,p:{y:65.5}},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_157,p:{x:-232.6,y:67.1}},{t:this.shape_152,p:{x:-222.9,y:67}},{t:this.shape_358,p:{x:-213.6,y:65.3}},{t:this.shape_242,p:{x:-198.5,y:65.5}},{t:this.shape_298,p:{x:-188.9,y:67.1}},{t:this.shape_240,p:{x:-179.6,y:68.8}},{t:this.shape_296,p:{x:-170.6,y:67.1}},{t:this.shape_517},{t:this.shape_516},{t:this.shape_236,p:{x:-148,y:66.9}},{t:this.shape_515},{t:this.shape_233,p:{x:-134.5,y:66.9}},{t:this.shape_232,p:{x:-128.2,y:66.9}},{t:this.shape_287,p:{x:-123.9,y:70.3}},{t:this.shape_286,p:{x:-120.2,y:70.3}},{t:this.shape_285,p:{x:-116.5,y:70.3}},{t:this.shape_231,p:{x:-112.8,y:70.3}},{t:this.shape_230,p:{x:-109.1,y:70.3}},{t:this.shape_226,p:{x:-104.7,y:66.9}},{t:this.shape_225,p:{x:-99.7,y:68.2}},{t:this.shape_208,p:{x:-91.7,y:65.4}},{t:this.shape_514},{t:this.shape_207,p:{x:-73.1,y:67.2}},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_363,p:{x:-20,y:67}},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_183,p:{x:50.1,y:67.1}},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_142,p:{x:87,y:67}},{t:this.shape_498},{t:this.shape_497},{t:this.shape_333,p:{x:-259.4,y:90.9}},{t:this.shape_496},{t:this.shape_214,p:{x:-243.4,y:92.7}},{t:this.shape_495},{t:this.shape_61,p:{x:-225.5,y:91}},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_381,p:{x:-194.7,y:94.2}},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_115,p:{x:-248.8,y:114.8}},{t:this.shape_89,p:{x:-239.5,y:115}},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_310,p:{x:-199.1,y:114.8}},{t:this.shape_485},{t:this.shape_484},{t:this.shape_223,p:{x:-170.3,y:114.8}},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_175,p:{x:-138.2,y:113.7}},{t:this.shape_202,p:{x:-133.4,y:113.2}},{t:this.shape_480},{t:this.shape_195,p:{x:-124,y:113.2}},{t:this.shape_479},{t:this.shape_112,p:{x:-108.4,y:114.8}},{t:this.shape_176,p:{x:-97.5,y:113.2}},{t:this.shape_478},{t:this.shape_212,p:{x:-80.1,y:114.8}},{t:this.shape_477},{t:this.shape_476},{t:this.shape_197,p:{x:-56,y:114.8}},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_108,p:{x:-23.6,y:114.8}},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_379,p:{x:42.9,y:118.1}},{t:this.shape_466},{t:this.shape_377,p:{x:-274.1,y:142}},{t:this.shape_465},{t:this.shape_375,p:{x:-260.8,y:142}},{t:this.shape_464},{t:this.shape_241,p:{x:-239.2,y:138.8}},{t:this.shape_123,p:{x:-229.9,y:140.5}},{t:this.shape_239,p:{x:-220.9,y:138.8}},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_229,p:{x:-164.6,y:142}},{t:this.shape_228,p:{x:-160.9,y:142}},{t:this.shape_227,p:{x:-157.2,y:142}},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_101,p:{x:-133,y:138.7}},{t:this.shape_453},{t:this.shape_173,p:{x:-118.4,y:137.1}},{t:this.shape_209,p:{x:-111.9,y:137}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_357,p:{x:-74.7,y:138.8}},{t:this.shape_449},{t:this.shape_40,p:{x:-53.6,y:138.9}},{t:this.shape_154,p:{x:-45.6,y:138.7}},{t:this.shape_254,p:{x:-41.3,y:137}},{t:this.shape_448},{t:this.shape_447},{t:this.shape_97,p:{x:-13.7,y:138.7}},{t:this.shape_59,p:{x:-6.7,y:138.8}},{t:this.shape_446},{t:this.shape_66,p:{x:11,y:137}},{t:this.shape_351,p:{x:18.8,y:138.8}},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_311,p:{x:72.7,y:138.8}},{t:this.shape_93,p:{x:83.1,y:137.1}},{t:this.shape_82,p:{x:89.6,y:138.7}},{t:this.shape_439},{t:this.shape_438},{t:this.shape_253,p:{x:117.9,y:138.8}},{t:this.shape_437},{t:this.shape_255,p:{x:-272.9,y:162.7}},{t:this.shape_352,p:{x:-261.3,y:162.6}},{t:this.shape_280,p:{x:-247.3,y:162.6}},{t:this.shape_113,p:{x:-235.6,y:162.7}},{t:this.shape_74,p:{x:-226,y:162.6}},{t:this.shape_150,p:{x:-216.7,y:160.9}},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_191,p:{x:-171.8,y:162.7}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_186,p:{x:-130.3,y:162.6}},{t:this.shape_429},{t:this.shape_193,p:{x:-113.1,y:162.7}},{t:this.shape_187,p:{x:-105.1,y:162.6}},{t:this.shape_428},{t:this.shape_188,p:{x:-88.6,y:162.8}},{t:this.shape_179,p:{x:-77,y:162.6}},{t:this.shape_135,p:{x:-65,y:164.4}},{t:this.shape_335,p:{x:-58.5,y:165.9}},{t:this.shape_427},{t:this.shape_250,p:{x:-274.1,y:189.8}},{t:this.shape_426},{t:this.shape_145,p:{x:-260.8,y:189.8}},{t:this.shape_341,p:{x:-279.5,y:208.9}},{t:this.shape_136,p:{y:210.5}},{t:this.shape_339,p:{x:-260.6,y:212.2}},{t:this.shape_134,p:{y:210.5}},{t:this.shape_133,p:{y:210.5}},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_125,p:{y:234.5}},{t:this.shape_124,p:{y:234.3}},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_211,p:{x:-273,y:280.4}},{t:this.shape_15,p:{x:-266.6,y:282.2}},{t:this.shape_71,p:{x:-256.9,y:282.1}},{t:this.shape_412},{t:this.shape_411},{t:this.shape_213,p:{x:-228.7,y:282.2}},{t:this.shape_368,p:{x:-216.2,y:282.2}},{t:this.shape_410},{t:this.shape_200,p:{x:-202.2,y:282.2}},{t:this.shape_409},{t:this.shape_201,p:{x:-184.4,y:282.2}},{t:this.shape_408},{t:this.shape_248,p:{x:-166,y:282.2}},{t:this.shape_407},{t:this.shape_198,p:{x:-143.2,y:282.2}},{t:this.shape_406},{t:this.shape_65,p:{x:-124.5,y:282.2}},{t:this.shape_156,p:{x:-114.7,y:280.4}},{t:this.shape_167,p:{x:-106.9,y:282.2}},{t:this.shape_64,p:{x:-97.9,y:282.1}},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_331,p:{x:-56.4,y:280.4}},{t:this.shape_98,p:{x:-47.4,y:282.2}},{t:this.shape_69,p:{x:-34.3,y:282.2}},{t:this.shape_78,p:{x:-25.3,y:282.2}},{t:this.shape_402},{t:this.shape_62,p:{x:-12.3,y:282.1}},{t:this.shape_245,p:{x:-5.3,y:282.2}},{t:this.shape_58,p:{x:3.9,y:282.1}},{t:this.shape_26,p:{x:13.2,y:282.2}},{t:this.shape_182,p:{x:22.8,y:282.3}},{t:this.shape_401},{t:this.shape_16,p:{x:41.8,y:282.2}},{t:this.shape_52,p:{x:51.5,y:282.1}},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_199,p:{x:-266.3,y:307.8}},{t:this.shape_85,p:{x:-257.3,y:306.1}},{t:this.shape_88,p:{x:-246.8,y:304.4}},{t:this.shape_47,p:{x:-240.3,y:306}},{t:this.shape_397},{t:this.shape_221,p:{x:-221.1,y:304.3}},{t:this.shape_55,p:{x:-212.1,y:306.1}},{t:this.shape_396},{t:this.shape_143,p:{x:-191.1,y:306.1}},{t:this.shape_274,p:{x:-179.5,y:306}},{t:this.shape_162,p:{x:-165.5,y:306}},{t:this.shape_75,p:{x:-153.8,y:306.1}},{t:this.shape_27,p:{x:-144.2,y:306}},{t:this.shape_166,p:{x:-134.9,y:304.3}},{t:this.shape_36,p:{x:-125.9,y:306.1}},{t:this.shape_57,p:{x:-120.1,y:309.3}},{t:this.shape_144,p:{x:-108.4,y:304.5}},{t:this.shape_164,p:{x:-101.1,y:304.3}},{t:this.shape_68,p:{x:-97.3,y:304.4}},{t:this.shape_395},{t:this.shape_80,p:{x:-82.7,y:304.3}},{t:this.shape_394},{t:this.shape_393},{t:this.shape_43,p:{x:-57.9,y:306.1}},{t:this.shape_42,p:{x:-49.2,y:306.1}},{t:this.shape_114,p:{x:-40.8,y:306.1}},{t:this.shape_17,p:{x:-32.4,y:306.2}},{t:this.shape_392},{t:this.shape_38,p:{x:-17.8,y:306.1}},{t:this.shape_391},{t:this.shape_31,p:{x:-1.1,y:306.1}},{t:this.shape_390},{t:this.shape_389},{t:this.shape_35,p:{x:19.3,y:306.1}},{t:this.shape_14,p:{x:27,y:306}},{t:this.shape_388},{t:this.shape_140,p:{x:46.7,y:306.1}},{t:this.shape_95,p:{x:55.9,y:306.2}},{t:this.shape_60,p:{x:-280.6,y:328.2}},{t:this.shape_13,p:{x:-271.4,y:330}},{t:this.shape_387},{t:this.shape_33,p:{x:-253.5,y:330}},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_28,p:{x:-216.9,y:330}},{t:this.shape_94,p:{x:-208,y:328.2}},{t:this.shape_25,p:{x:-196.9,y:328.3}},{t:this.shape_21,p:{x:-190.4,y:329.9}},{t:this.shape_11,p:{x:-176.9,y:330}},{t:this.shape_32,p:{x:-169.9,y:328.2}},{t:this.shape_92,p:{x:-166.1,y:328.2}},{t:this.shape_383},{t:this.shape_104,p:{x:-149.7,y:328.2}},{t:this.shape_19,p:{x:-140.7,y:330}},{t:this.shape_41,p:{x:-128.1,y:330}},{t:this.shape_87,p:{x:-119.7,y:330}},{t:this.shape_29,p:{x:-108.2,y:329.9}},{t:this.shape_18,p:{x:-94.1,y:329.9}},{t:this.shape_22,p:{x:-82.5,y:330}},{t:this.shape_10,p:{x:-72.8,y:329.9}},{t:this.shape_158,p:{x:-63.5,y:328.2}},{t:this.shape_20,p:{x:-54.6,y:330}},{t:this.shape_9,p:{x:-48.7,y:333.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-307.3,-15.3,434.4,345.8);


(lib.instr3 = function(mode,startPosition,loop) {
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

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D40000").s().p("AggBHIgWgNIADgdIAcAAIgCASIApAAIAEgmIgiAAIADgWIAiAAIADghIgpAAIgCASIgcAAIADgcIAZgOIAzAAIAVAOIgEAtIgTAKIAAAAIAQAJIgFAyIgYANg");
	this.shape.setTransform(-118.7,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_1.setTransform(-133.7,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(-143.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_3.setTransform(-151.7,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D40000").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape_4.setTransform(-158.5,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D40000").s().p("AgaAzIgVgNIAIhLIAYgNIAqAAIAWANIgIBLIgZANgAgTAbIAiAAIAFg2IghAAg");
	this.shape_5.setTransform(-169,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D40000").s().p("AgBBCIgVgNIAHg+IgTAAIADgYIASAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_6.setTransform(-179.1,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_7.setTransform(-189.5,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D40000").s().p("AgaBGIAMhzIgmAAIADgYIBmAAIgDAYIglAAIgMBzg");
	this.shape_8.setTransform(-200.3,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_9.setTransform(-44,209.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(-50.5,206.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(-60.2,206.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_12.setTransform(-69.4,204.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(-79.1,206.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(-86.1,206.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_15.setTransform(-94.5,206.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(-108.3,206.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_17.setTransform(-117.5,206.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_18.setTransform(-129.2,206.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(-140.5,206.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_20.setTransform(-148.9,206.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(-161.8,206.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_22.setTransform(-171.4,206.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_23.setTransform(-179.4,204.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_24.setTransform(-188.9,208.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-195.7,204.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(-202.7,206.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(-212,206.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-220.9,206.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_29.setTransform(-232.4,206.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(-8.9,180.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-18.7,182.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(-25.1,180.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-31.4,182.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_34.setTransform(-38.6,181.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-45.7,182.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-54.1,182.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_37.setTransform(-64,177.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-70.8,182.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-80.1,182.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(-89.7,182.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_41.setTransform(-98.3,182.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_42.setTransform(-105.7,180.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(-115.5,182.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgiA5IAAhxIANAAIAABmIA4AAIAAALg");
	this.shape_44.setTransform(-123.9,181.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_45.setTransform(-130.6,177.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(-141.6,184.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(-150.9,182.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(-160.6,182.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_49.setTransform(-168,181.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_50.setTransform(-175.4,182.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_51.setTransform(-184.5,180.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(-198.5,182.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(-208.2,182.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_54.setTransform(-216.2,180.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(-225.3,182.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_56.setTransform(-234.5,181.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_57.setTransform(-28.9,162);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_58.setTransform(-35.4,158.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_59.setTransform(-45.1,158.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_60.setTransform(-56.6,158.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(-68.6,158.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_62.setTransform(-77.2,158.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(-86.1,158.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_64.setTransform(-94.1,157);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_65.setTransform(-104,160.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_66.setTransform(-113.3,158.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_67.setTransform(-123,158.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_68.setTransform(-133.6,157.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_69.setTransform(-140.6,160.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(-150.2,158.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_71.setTransform(-159.3,157);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_72.setTransform(-173.3,158.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_73.setTransform(-183,158.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_74.setTransform(-190.4,157.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_75.setTransform(-198.2,158.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_76.setTransform(-207.4,160.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_77.setTransform(-219.4,158.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_78.setTransform(-231,158.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_79.setTransform(-237.4,157);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_80.setTransform(23.6,135);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_81.setTransform(16.1,133.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_82.setTransform(8.4,134.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_83.setTransform(-0.2,134.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_84.setTransform(-10.2,133.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_85.setTransform(-14,133.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_86.setTransform(-17.8,133.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_87.setTransform(-23.2,133.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(-33,134.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_89.setTransform(-44.5,134.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_90.setTransform(-55.8,134.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_91.setTransform(-67.3,134.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_92.setTransform(-80.3,136);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIALAAQAIATAEARQAFARAAASQAAASgFASQgEASgIARg");
	this.shape_93.setTransform(-85.2,134.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_94.setTransform(-89.1,134.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#006699").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_95.setTransform(-96.9,136.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_96.setTransform(-108.9,134.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_97.setTransform(-120.5,135);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#006699").s().p("AgTBHIAAgMIAMABQAHABADgFQAEgEAAgMIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgBg");
	this.shape_98.setTransform(-128.5,134.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_99.setTransform(-139.3,134.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_100.setTransform(-149,134.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_101.setTransform(-158.2,133.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_102.setTransform(-167.9,134.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_103.setTransform(-174.9,134.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_104.setTransform(-183.3,134.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_105.setTransform(-196.7,136.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_106.setTransform(-206.7,134.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_107.setTransform(-213.2,133.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFABQgMgBgFgGg");
	this.shape_108.setTransform(-218,133.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_109.setTransform(-225,134.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_110.setTransform(-234.3,133.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_111.setTransform(-61.9,114.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_112.setTransform(-66.6,109.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_113.setTransform(-74.4,111);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_114.setTransform(-83.6,112.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_115.setTransform(-95.6,110.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_116.setTransform(-107.2,111);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_117.setTransform(-113.6,109.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_118.setTransform(-119.9,111);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_119.setTransform(-131.3,110.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_120.setTransform(-147.2,110.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_121.setTransform(-156.9,111);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_122.setTransform(-168.4,111);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_123.setTransform(-180.4,111);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_124.setTransform(-189,111);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_125.setTransform(-197.9,111);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_126.setTransform(-205.9,109.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_127.setTransform(-215.8,112.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_128.setTransform(-225.1,110.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_129.setTransform(-234.8,111);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_130.setTransform(9.3,87);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_131.setTransform(-0.3,87.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_132.setTransform(-8.3,85.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_133.setTransform(-16,85.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_134.setTransform(-23.8,87.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_135.setTransform(-33,87.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_136.setTransform(-42.1,85.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_137.setTransform(-54.3,87);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_138.setTransform(-65.6,87.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_139.setTransform(-77,87);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_140.setTransform(-91.6,85.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_141.setTransform(-101.1,87.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_142.setTransform(-108.6,85.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_143.setTransform(-116,87);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_144.setTransform(-125.3,87.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_145.setTransform(-138.1,87.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_146.setTransform(-145.5,85.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_147.setTransform(-154.6,87.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_148.setTransform(-161.9,85.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_149.setTransform(-173.5,87);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_150.setTransform(-183.2,87.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_151.setTransform(-189.6,85.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_152.setTransform(-196.6,88.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_153.setTransform(-206.2,87.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_154.setTransform(-215.4,85.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_155.setTransform(-225.2,87.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_156.setTransform(-234.3,85.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_157.setTransform(7.2,63.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_158.setTransform(-2.4,61.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_159.setTransform(-12,63.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_160.setTransform(-21.2,64.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_161.setTransform(-32.3,64.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#006699").s().p("AgNBHQAIgTAEgSQACgRAAgRQAAgQgCgRQgEgSgIgTIALAAQAIASAEARQAFASAAARQAAASgFASQgEARgIASg");
	this.shape_162.setTransform(-37.2,63);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#006699").s().p("AAEBHQgJgSgEgRQgFgSAAgSQAAgRAFgSQAEgRAJgSIALAAQgJATgEASQgCARAAAQQAAARACARQAEASAIATg");
	this.shape_163.setTransform(-41.1,63);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_164.setTransform(-48.8,64.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_165.setTransform(-60.9,63.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_166.setTransform(-72.5,63.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#006699").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_167.setTransform(-80,63.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_168.setTransform(-89.7,63.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_169.setTransform(-99.4,63.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_170.setTransform(-106.8,62);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_171.setTransform(-114.6,63.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_172.setTransform(-125.2,64.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgRQgDgSgIgTIAKAAQAJASAFARQADASAAARQAAASgDASQgFARgJASg");
	this.shape_173.setTransform(-130.1,63);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#006699").s().p("AAEBHQgJgSgEgRQgFgSAAgSQAAgRAFgSQAEgRAJgSIALAAQgJATgEASQgCARAAAQQAAARACARQAEASAIATg");
	this.shape_174.setTransform(-134,63);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_175.setTransform(-141.8,64.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_176.setTransform(-153.8,63.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_177.setTransform(-165.4,63.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#006699").s().p("AgTBHIAAgMIAMACQAHgBADgEQAEgFAAgLIAAhvIANAAIAABwQAAAQgGAHQgGAIgNAAIgOgBg");
	this.shape_178.setTransform(-173.4,63.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_179.setTransform(-184.2,63.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_180.setTransform(-193.9,63.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_181.setTransform(-201.9,61.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_182.setTransform(-211.3,64.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_183.setTransform(-218.2,61.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_184.setTransform(-225.1,63.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_185.setTransform(-234.5,61.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_186.setTransform(-247.9,185.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgLQAAgVgaABIgMAAIAAgLIAKAAQALABAHgGQAHgGAAgKQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgHAJgEQALgDAKAAQAPAAAJAIQAKAHgBAOQAAAKgEAHQgFAHgJADQALADAEAGQAGAIAAAKQAAAPgKAJQgKAIgRAAQgLAAgKgEg");
	this.shape_187.setTransform(-254.7,181.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_188.setTransform(-247.9,138.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgiA6IAAgKIAngsQAIgIAEgIQADgHAAgHQAAgKgFgEQgGgFgJgBQgQAAgQAOIgFgKQAHgHAKgEQAKgDAKgBQAPAAAJAJQAKAIAAANQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_189.setTransform(-254.5,133.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_190.setTransform(-247.9,66.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhVIgXAPIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_191.setTransform(-254.1,61.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_192.setTransform(-121.4,180.9);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_193.setTransform(-186,182.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_194.setTransform(-207.6,180.9);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_195.setTransform(-215.2,181.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_196.setTransform(16.7,157);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgkAxQAMgEAFgEQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAGQgJAHgNACg");
	this.shape_197.setTransform(-10.4,160.7);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_198.setTransform(-17.6,157.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_199.setTransform(-37.4,158.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_200.setTransform(-55.9,157);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgkAxQAMgEAFgEQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAGQgIAHgOACg");
	this.shape_201.setTransform(-87.5,160.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_202.setTransform(-113.3,157.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_203.setTransform(-118.8,156.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_204.setTransform(-137,153.7);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_205.setTransform(-166.1,158.8);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_206.setTransform(-183.2,158.8);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAJIg3AAIAAAqIA6AAIAAALg");
	this.shape_207.setTransform(-191.9,157.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_208.setTransform(-198.7,153.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_209.setTransform(-216.7,158.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_210.setTransform(-226.5,157);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_211.setTransform(-233.8,157.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGABQgMgBgFgGg");
	this.shape_212.setTransform(-142.5,133.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_213.setTransform(-178,134.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_214.setTransform(-191.2,133.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_215.setTransform(-229,133.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_216.setTransform(-236.6,133.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_217.setTransform(63,110.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_218.setTransform(55,111);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_219.setTransform(47.6,109.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_220.setTransform(5,111.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhWIgXAQIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_221.setTransform(-4.5,109.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_222.setTransform(-33.4,109.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_223.setTransform(-49.5,111);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_224.setTransform(-62.5,109.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_225.setTransform(-86.3,112.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#006699").s().p("AgNBIQAIgVAEgRQACgRAAgRQAAgQgCgRQgEgRgIgUIALAAQAIASAEARQAFARAAASQAAASgFASQgEARgIATg");
	this.shape_226.setTransform(-91.2,110.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#006699").s().p("AAEBIQgJgTgEgRQgFgSAAgSQAAgSAFgRQAEgRAJgSIALAAQgJAUgEARQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_227.setTransform(-95.1,110.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_228.setTransform(-153,111);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_229.setTransform(-170.8,111);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_230.setTransform(-188.9,111.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_231.setTransform(-196.3,109.1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_232.setTransform(-207.7,109.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_233.setTransform(-216.2,111);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAJIg3AAIAAAqIA6AAIAAALg");
	this.shape_234.setTransform(-234.3,109.4);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_235.setTransform(33.8,87.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_236.setTransform(18.1,87);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_237.setTransform(-2,85.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_238.setTransform(-9,87.1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_239.setTransform(-24.8,85.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_240.setTransform(-36.1,87.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_241.setTransform(-52.7,85.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgRIAPAAIAAAMQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_242.setTransform(-78.8,88.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#006699").s().p("AgOBHQAJgTAEgSQACgRAAgRQAAgQgCgSQgEgQgJgVIAMAAQAIASAEASQAEARABASQgBASgEASQgEASgIARg");
	this.shape_243.setTransform(-83.7,86.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_244.setTransform(-87.6,86.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_245.setTransform(-95.4,88.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#006699").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_246.setTransform(-119,87.2);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#006699").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_247.setTransform(-126.5,87.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_248.setTransform(-134,87);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_249.setTransform(-142,87.1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgRIAPAAIAAAMQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_250.setTransform(-152.7,88.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIAKAAQAJASAFASQADARAAASQAAASgDASQgFASgJARg");
	this.shape_251.setTransform(-157.6,86.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_252.setTransform(-161.5,86.9);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_253.setTransform(-169.2,88.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#006699").s().p("AgTBGIAAgLIAMABQAHABADgFQAEgFAAgLIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgCg");
	this.shape_254.setTransform(-200.9,87);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_255.setTransform(-211.3,87.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_256.setTransform(-220.3,88.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgJIAEgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_257.setTransform(-229.5,89);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_258.setTransform(-236.6,85.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_259.setTransform(27.8,67.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_260.setTransform(-9.8,63.3);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_261.setTransform(-17.8,62);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_262.setTransform(-53.3,63.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_263.setTransform(-60.2,63.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_264.setTransform(-66.5,62);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_265.setTransform(-95.3,63.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_266.setTransform(-111.9,62);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_267.setTransform(-123.2,63.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_268.setTransform(-131,61.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_269.setTransform(-140.8,63.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_270.setTransform(-168.2,63.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_271.setTransform(-185,63.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_272.setTransform(-192.7,63.2);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_273.setTransform(-202.1,61.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_274.setTransform(-209.1,63.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_275.setTransform(-217.1,63.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_276.setTransform(-237.3,61.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgLQAAgUgagBIgMAAIAAgJIAKAAQALgBAHgFQAHgGAAgKQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgGAJgEQALgEAKAAQAPAAAJAHQAKAJgBANQAAAKgEAHQgFAHgJADQALADAEAHQAGAGAAALQAAAPgKAIQgKAJgRAAQgLAAgKgDg");
	this.shape_277.setTransform(-254.7,157.2);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgDAKAAQAPAAAJAHQAKAIAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_278.setTransform(-254.5,109.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188,p:{y:138.1}},{t:this.shape_187},{t:this.shape_186,p:{y:185.9}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176,p:{x:-153.8,y:63.1}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170,p:{x:-106.8}},{t:this.shape_169},{t:this.shape_168,p:{x:-89.7}},{t:this.shape_167,p:{x:-80,y:63.3}},{t:this.shape_166,p:{x:-72.5,y:63.3}},{t:this.shape_165,p:{x:-60.9,y:63.1}},{t:this.shape_164,p:{x:-48.8,y:64.9}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160,p:{x:-21.2}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151,p:{x:-189.6}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147,p:{x:-154.6}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{x:-125.3,y:87.2}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:-101.1,y:87.2}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:-65.6}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118,p:{x:-119.9}},{t:this.shape_117},{t:this.shape_116,p:{x:-107.2,y:111}},{t:this.shape_115,p:{x:-95.6,y:110.9}},{t:this.shape_114,p:{x:-83.6}},{t:this.shape_113},{t:this.shape_112,p:{x:-66.6}},{t:this.shape_111,p:{x:-61.9,y:114.2}},{t:this.shape_110},{t:this.shape_109,p:{x:-225}},{t:this.shape_108},{t:this.shape_107,p:{x:-213.2,y:133.2}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:-174.9}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:-120.5,y:135}},{t:this.shape_96,p:{x:-108.9,y:134.8}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:-67.3,y:134.8}},{t:this.shape_90,p:{x:-55.8,y:134.9}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86,p:{x:-17.8,y:133.2}},{t:this.shape_85},{t:this.shape_84,p:{x:-10.2,y:133.2}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80,p:{x:23.6}},{t:this.shape_79,p:{x:-237.4,y:157}},{t:this.shape_78,p:{x:-231,y:158.8}},{t:this.shape_77,p:{x:-219.4,y:158.7}},{t:this.shape_76,p:{x:-207.4}},{t:this.shape_75},{t:this.shape_74,p:{x:-190.4}},{t:this.shape_73},{t:this.shape_72,p:{x:-173.3,y:158.7}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:-133.6}},{t:this.shape_67,p:{x:-123,y:158.8}},{t:this.shape_66,p:{x:-113.3,y:158.7}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:-77.2,y:158.8}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-35.4,y:158.7}},{t:this.shape_57,p:{x:-28.9,y:162}},{t:this.shape_56},{t:this.shape_55,p:{x:-225.3,y:182.7}},{t:this.shape_54,p:{x:-216.2,y:180.9}},{t:this.shape_53,p:{x:-208.2,y:182.7}},{t:this.shape_52,p:{x:-198.5,y:182.6}},{t:this.shape_51},{t:this.shape_50,p:{x:-175.4,y:182.8}},{t:this.shape_49},{t:this.shape_48,p:{x:-160.6,y:182.7}},{t:this.shape_47,p:{x:-150.9,y:182.6}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:-98.3,y:182.7}},{t:this.shape_40},{t:this.shape_39,p:{x:-80.1,y:182.6}},{t:this.shape_38,p:{x:-70.8,y:182.7}},{t:this.shape_37},{t:this.shape_36,p:{x:-54.1,y:182.7}},{t:this.shape_35,p:{x:-45.7,y:182.7}},{t:this.shape_34},{t:this.shape_33,p:{x:-31.4,y:182.7}},{t:this.shape_32,p:{x:-25.1}},{t:this.shape_31,p:{x:-18.7,y:182.7}},{t:this.shape_30,p:{x:-8.9,y:180.9}},{t:this.shape_29,p:{x:-232.4,y:206.5}},{t:this.shape_28,p:{x:-220.9,y:206.6}},{t:this.shape_27,p:{x:-212,y:206.5}},{t:this.shape_26,p:{x:-202.7,y:206.6}},{t:this.shape_25,p:{x:-195.7,y:204.9}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-171.4,y:206.6}},{t:this.shape_21,p:{x:-161.8,y:206.5}},{t:this.shape_20,p:{x:-148.9,y:206.6}},{t:this.shape_19,p:{x:-140.5,y:206.6}},{t:this.shape_18,p:{x:-129.2,y:206.5}},{t:this.shape_17,p:{x:-117.5,y:206.7}},{t:this.shape_16,p:{x:-108.3,y:206.6}},{t:this.shape_15,p:{x:-94.5,y:206.6}},{t:this.shape_14,p:{x:-86.1,y:206.5}},{t:this.shape_13,p:{x:-79.1,y:206.6}},{t:this.shape_12,p:{x:-69.4,y:204.8}},{t:this.shape_11,p:{x:-60.2,y:206.6}},{t:this.shape_10,p:{x:-50.5,y:206.5}},{t:this.shape_9,p:{x:-44,y:209.8}}]}).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_278},{t:this.shape_188,p:{y:114.2}},{t:this.shape_277},{t:this.shape_186,p:{y:162}},{t:this.shape_276},{t:this.shape_72,p:{x:-230.6,y:63.1}},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_170,p:{x:-175.7}},{t:this.shape_270},{t:this.shape_115,p:{x:-152.5,y:63.1}},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_30,p:{x:-104.3,y:61.4}},{t:this.shape_265},{t:this.shape_16,p:{x:-82.2,y:63.2}},{t:this.shape_62,p:{x:-73.3,y:63.2}},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_66,p:{x:-44.1,y:63.1}},{t:this.shape_67,p:{x:-34.8,y:63.2}},{t:this.shape_168,p:{x:-25.1}},{t:this.shape_261},{t:this.shape_260},{t:this.shape_144,p:{x:-2.3,y:63.3}},{t:this.shape_91,p:{x:9.3,y:63.1}},{t:this.shape_160,p:{x:21.4}},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_166,p:{x:-192.9,y:87.2}},{t:this.shape_176,p:{x:-181.3,y:87}},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_165,p:{x:-107.4,y:87}},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_151,p:{x:-70.8}},{t:this.shape_58,p:{x:-64.3,y:87}},{t:this.shape_241},{t:this.shape_12,p:{x:-45.1,y:85.3}},{t:this.shape_240},{t:this.shape_239},{t:this.shape_147,p:{x:-17.6}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_38,p:{x:9.7,y:87.1}},{t:this.shape_236},{t:this.shape_138,p:{x:24.9}},{t:this.shape_235},{t:this.shape_111,p:{x:40.6,y:90.3}},{t:this.shape_234},{t:this.shape_53,p:{x:-225.4,y:111}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_52,p:{x:-179.6,y:110.9}},{t:this.shape_229},{t:this.shape_112,p:{x:-164.3}},{t:this.shape_107,p:{x:-159.5,y:109.3}},{t:this.shape_228},{t:this.shape_47,p:{x:-143.8,y:110.9}},{t:this.shape_167,p:{x:-134,y:111.1}},{t:this.shape_97,p:{x:-126.5,y:111.1}},{t:this.shape_96,p:{x:-114.9,y:110.9}},{t:this.shape_164,p:{x:-102.8,y:112.7}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_86,p:{x:-78.3,y:109.3}},{t:this.shape_39,p:{x:-71.8,y:110.9}},{t:this.shape_224},{t:this.shape_84,p:{x:-55.5,y:109.3}},{t:this.shape_223},{t:this.shape_31,p:{x:-41.2,y:111}},{t:this.shape_222},{t:this.shape_118,p:{x:-26.2}},{t:this.shape_41,p:{x:-17.9,y:111}},{t:this.shape_221},{t:this.shape_220},{t:this.shape_17,p:{x:12.5,y:111.1}},{t:this.shape_77,p:{x:24.1,y:110.9}},{t:this.shape_114,p:{x:36.2}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_109,p:{x:-220}},{t:this.shape_48,p:{x:-206.9,y:134.9}},{t:this.shape_36,p:{x:-198,y:134.9}},{t:this.shape_214},{t:this.shape_103,p:{x:-184.9}},{t:this.shape_213},{t:this.shape_27,p:{x:-168.8,y:134.8}},{t:this.shape_26,p:{x:-159.5,y:134.9}},{t:this.shape_80,p:{x:-149.8}},{t:this.shape_212},{t:this.shape_57,p:{x:-137.8,y:138.1}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_68,p:{x:-222.7}},{t:this.shape_209},{t:this.shape_54,p:{x:-208.1,y:157}},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_90,p:{x:-174.6,y:158.8}},{t:this.shape_205},{t:this.shape_50,p:{x:-157.7,y:158.9}},{t:this.shape_74,p:{x:-150.4}},{t:this.shape_55,p:{x:-143.1,y:158.8}},{t:this.shape_204},{t:this.shape_15,p:{x:-126.5,y:158.8}},{t:this.shape_203},{t:this.shape_202},{t:this.shape_35,p:{x:-106.1,y:158.8}},{t:this.shape_14,p:{x:-98.3,y:158.7}},{t:this.shape_201},{t:this.shape_116,p:{x:-78.7,y:158.8}},{t:this.shape_141,p:{x:-69.5,y:158.9}},{t:this.shape_200},{t:this.shape_13,p:{x:-46.7,y:158.8}},{t:this.shape_199},{t:this.shape_33,p:{x:-28.8,y:158.8}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_76,p:{x:-1.2}},{t:this.shape_28,p:{x:7.8,y:158.8}},{t:this.shape_196},{t:this.shape_25,p:{x:27.8,y:157.1}},{t:this.shape_21,p:{x:34.3,y:158.7}},{t:this.shape_11,p:{x:-234.8,y:182.7}},{t:this.shape_79,p:{x:-227.8,y:180.9}},{t:this.shape_32,p:{x:-224}},{t:this.shape_195},{t:this.shape_194},{t:this.shape_19,p:{x:-198.6,y:182.7}},{t:this.shape_193},{t:this.shape_78,p:{x:-177.6,y:182.7}},{t:this.shape_29,p:{x:-166.1,y:182.6}},{t:this.shape_18,p:{x:-152,y:182.6}},{t:this.shape_22,p:{x:-140.4,y:182.7}},{t:this.shape_10,p:{x:-130.7,y:182.6}},{t:this.shape_192},{t:this.shape_20,p:{x:-112.5,y:182.7}},{t:this.shape_9,p:{x:-106.6,y:185.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.3,-5.3,309.4,222.4);


(lib.instr2 = function(mode,startPosition,loop) {
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

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D40000").s().p("Ag0BGIAHhCIAYgMIApAAIAFglIgmAAIgCASIgcAAIADgcIAZgOIAvAAIAWAOIgHA4IgYAOIgpAAIgEAfIBBAAIgDAYg");
	this.shape.setTransform(-118.9,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_1.setTransform(-133.7,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(-143.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_3.setTransform(-151.7,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D40000").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape_4.setTransform(-158.5,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D40000").s().p("AgaAzIgVgNIAIhLIAYgNIAqAAIAWANIgIBLIgZANgAgTAbIAiAAIAFg2IghAAg");
	this.shape_5.setTransform(-169,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D40000").s().p("AgBBCIgVgNIAHg+IgTAAIADgYIASAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_6.setTransform(-179.1,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_7.setTransform(-189.5,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D40000").s().p("AgaBGIAMhzIgmAAIADgYIBmAAIgDAYIglAAIgMBzg");
	this.shape_8.setTransform(-200.3,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_9.setTransform(-44,281.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(-50.5,278.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(-60.2,278.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_12.setTransform(-69.4,276.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(-79.1,278.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(-86.1,278.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_15.setTransform(-94.5,278.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(-108.3,278.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_17.setTransform(-117.5,278.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_18.setTransform(-129.2,278.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(-140.5,278.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_20.setTransform(-148.9,278.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(-161.8,278.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_22.setTransform(-171.4,278.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_23.setTransform(-179.4,276.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_24.setTransform(-188.9,280);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-195.7,276.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(-202.7,278.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(-212,278.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-220.9,278.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_29.setTransform(-232.4,278.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(-8.9,252.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-18.7,254.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(-25.1,252.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-31.4,254.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_34.setTransform(-38.6,253.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-45.7,254.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-54.1,254.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_37.setTransform(-64,249.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-70.8,254.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-80.1,254.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(-89.7,254.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_41.setTransform(-98.3,254.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_42.setTransform(-105.7,252.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(-115.5,254.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgiA5IAAhxIANAAIAABmIA4AAIAAALg");
	this.shape_44.setTransform(-123.9,252.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_45.setTransform(-130.6,249.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(-141.6,256.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(-150.9,254.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(-160.6,254.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_49.setTransform(-168,253.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_50.setTransform(-175.4,254.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_51.setTransform(-184.5,252.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(-198.5,254.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(-208.2,254.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_54.setTransform(-216.2,252.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(-225.3,254.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_56.setTransform(-234.5,252.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_57.setTransform(55.7,233.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_58.setTransform(52.1,225.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_59.setTransform(48,230.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_60.setTransform(40.2,230.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_61.setTransform(33,229.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(25.5,230.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAoIA3AAIAAAKIg3AAIAAApIA6AAIAAALg");
	this.shape_63.setTransform(16.5,228.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_64.setTransform(9.7,225.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgdAzIADgKQAHAEAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_65.setTransform(-1.3,232.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_66.setTransform(-10.6,230.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_67.setTransform(-20.3,230.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_68.setTransform(-27.7,229.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_69.setTransform(-35.1,230.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_70.setTransform(-44.2,228.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_71.setTransform(-58.2,230.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_72.setTransform(-67.9,230.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_73.setTransform(-75.9,228.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_74.setTransform(-85,230.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_75.setTransform(-94.1,230.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_76.setTransform(-103.1,230.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_77.setTransform(-114.5,230.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_78.setTransform(-130.4,230.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_79.setTransform(-140.1,230.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdAzIADgKQAHAEAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_80.setTransform(-149.7,232.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_81.setTransform(-159,230.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_82.setTransform(-168,230.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_83.setTransform(-177.4,228.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_84.setTransform(-190.8,230.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_85.setTransform(-197.8,230.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_86.setTransform(-206.2,230.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_87.setTransform(-215.4,228.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(-225.2,230.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_89.setTransform(-234.3,228.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHABQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHADADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_90.setTransform(30.2,208.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_91.setTransform(20.9,206.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_92.setTransform(11.2,206.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgkAxQAMgDAFgFQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_93.setTransform(2.4,208.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_94.setTransform(-10.1,206.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_95.setTransform(-15.9,204.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_96.setTransform(-20.2,206.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_97.setTransform(-28.6,206.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_98.setTransform(-37.7,204.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_99.setTransform(-48.9,204.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_100.setTransform(-55.8,204.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_101.setTransform(-69.2,206.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_102.setTransform(-76.2,206.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_103.setTransform(-84.7,206.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_104.setTransform(-93.9,204.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_105.setTransform(-103.6,206.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_106.setTransform(-112.7,204.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_107.setTransform(-126.7,206.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_108.setTransform(-136.4,206.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_109.setTransform(-145.6,204.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_110.setTransform(-155.3,206.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_111.setTransform(-162.3,206.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_112.setTransform(-170.7,206.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_113.setTransform(-184.2,206.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_114.setTransform(-193.9,206.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_115.setTransform(-201.9,204.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_116.setTransform(-211.3,208.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_117.setTransform(-218.2,204.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_118.setTransform(-225.1,206.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_119.setTransform(-234.5,205);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_120.setTransform(62,185.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgcArQgLgPAAgcQAAgcALgPQAKgOASAAQAUAAAJAOQALAPAAAcQAAAcgLAPQgJAPgUAAQgSAAgKgPgAgTgjQgGAMgBAXQABAYAGALQAHAMAMAAQANAAAHgLQAGgMAAgYQAAgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_121.setTransform(55.4,181.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgbAsQgMgPAAgaQAAgTAFgNQAFgOALgHQAKgHAMAAQAKAAAKADQAIAEAHAHIgEAKQgIgHgIgDQgHgDgIAAQgOAAgHANQgJANABAXIAAACQADgIAIgFQAJgGAJAAQAKAAAJAFQAIAEAFAIQAEAIAAAKQAAALgFAIQgEAJgJAEQgIAFgLAAQgTAAgLgOgAgPADQgHAHAAAMQAAALAHAHQAHAHAKAAQALAAAHgHQAHgHAAgLQAAgMgHgHQgHgGgLAAQgKAAgHAGg");
	this.shape_122.setTransform(45.9,181.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAGgFQAHgGAAgLQAAgVgZABIgOAAIAAgLIALAAQALABAIgGQAGgGAAgKQAAgJgFgFQgGgFgKAAQgQAAgPANIgGgKQAIgHAKgEQAJgDAKAAQAQAAAJAIQAJAHAAAOQABAKgGAHQgEAHgJADQAKADAGAGQAFAIAAAKQAAAPgLAJQgKAIgRAAQgKAAgKgEg");
	this.shape_123.setTransform(36.1,181.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgWAFIAAgKIAtAAIAAAKg");
	this.shape_124.setTransform(28,182.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_125.setTransform(15.6,182.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_126.setTransform(6,182.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_127.setTransform(-3.6,180.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_128.setTransform(-14.3,186.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAGgMAAgYQAAgXgGgMQgGgLgOAAQgNAAgGALg");
	this.shape_129.setTransform(-20.9,181.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgdA5IA0hmIg8AAIAAgLIBLAAIAAAKIg1Bng");
	this.shape_130.setTransform(-30.5,181.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgiA6IAAgKIAngtQAIgHAEgIQADgHAAgHQAAgKgFgFQgGgEgJgBQgQAAgQAOIgFgKQAHgHAKgEQAKgDAKgBQAPABAJAHQAKAJAAANQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_131.setTransform(-40.1,181);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AgWAFIAAgKIAtAAIAAAKg");
	this.shape_132.setTransform(-48.3,182.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_133.setTransform(-57.8,186.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_134.setTransform(-64.4,181.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgdAyQgLgJAAgOQAAgLAHgHQAGgIALgCQgKgDgGgGQgFgIAAgJQAAgJAEgHQAFgHAJgEQAJgDAKAAQALAAAJADQAJAEAEAHQAGAHgBAJQABAJgHAIQgFAGgJADQAKACAHAIQAGAHAAALQAAAOgMAJQgKAIgTAAQgRAAgMgIgAgUALQgHAFAAAKQAAAKAHAGQAIAFAMAAQANAAAHgFQAIgGAAgKQAAgKgIgFQgHgGgNgBQgMABgIAGgAgRgpQgHAFAAAKQAAAJAHAGQAGAFALACQALgCAIgFQAGgGAAgJQAAgKgGgFQgHgFgMAAQgLAAgGAFg");
	this.shape_135.setTransform(-74,181.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhVIgXAOIAAgMIAdgTIAHAAIAABmIAZAAIAAALg");
	this.shape_136.setTransform(-83.2,181.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgWAFIAAgKIAtAAIAAAKg");
	this.shape_137.setTransform(-91.9,182.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_138.setTransform(-101.4,186.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQALgOASAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgSAAgLgPgAgTgjQgHAMABAXQgBAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_139.setTransform(-108,181.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgWA2QgKgDgHgHIAFgKQAIAHAIADQAHADAIAAQANAAAIgNQAIgNAAgXIAAgCQgDAIgIAFQgJAFgKAAQgKAAgIgEQgIgFgEgHQgFgIAAgLQAAgKAFgJQAFgIAIgFQAIgEALAAQATAAAMAOQALAOAAAbQAAAcgMAQQgLAQgUAAQgKAAgJgEgAgTgnQgHAHAAALQAAALAHAHQAGAGAMAAQAKAAAHgGQAHgHAAgLQAAgLgHgHQgHgHgLAAQgLAAgGAHg");
	this.shape_140.setTransform(-117.6,181.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgWAFIAAgKIAtAAIAAAKg");
	this.shape_141.setTransform(-125.8,182.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_142.setTransform(-135.3,186.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAGgMAAgYQAAgXgGgMQgGgLgOAAQgNAAgGALg");
	this.shape_143.setTransform(-141.9,181.1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgcAsQgLgPAAgaQAAgTAFgNQAGgOAJgHQALgHAMAAQAKAAAKADQAIAEAIAHIgGAKQgIgHgHgDQgHgDgHAAQgOAAgJANQgHANgBAXIAAACQAEgIAJgFQAHgGALAAQAJAAAJAFQAIAEAEAIQAFAIAAAKQAAALgFAIQgFAJgIAEQgIAFgLAAQgUAAgLgOgAgPADQgHAHAAAMQAAALAHAHQAHAHAKAAQALAAAHgHQAHgHAAgLQAAgMgHgHQgHgGgLAAQgKAAgHAGg");
	this.shape_144.setTransform(-151.5,181.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQANAAAFgFQAHgGAAgLQAAgVgaABIgMAAIAAgLIAKAAQALABAHgGQAHgGAAgKQAAgJgGgFQgFgFgKAAQgPAAgQANIgGgKQAHgHAKgEQALgDAJAAQAQAAAJAIQAJAHAAAOQAAAKgEAHQgGAHgIADQAKADAGAGQAFAIAAAKQAAAPgLAJQgJAIgSAAQgJAAgLgEg");
	this.shape_145.setTransform(-161.3,181.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_146.setTransform(-172,186.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQALgOASAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgSAAgLgPgAgTgjQgHAMABAXQgBAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_147.setTransform(-178.6,181.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgdA5IA0hmIg7AAIAAgLIBJAAIAAAKIg0Bng");
	this.shape_148.setTransform(-188.2,181.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgiA6IAAgKIAngtQAIgHAEgIQADgHAAgHQAAgKgFgFQgGgEgJgBQgQAAgQAOIgFgKQAHgHAKgEQAKgDAKgBQAPABAJAHQAKAJAAANQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_149.setTransform(-197.8,181);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_150.setTransform(-208.7,186.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQALgOASAAQAUAAAJAOQALAPAAAcQAAAcgLAPQgJAPgUAAQgSAAgLgPgAgTgjQgGAMAAAXQAAAYAGALQAGAMANAAQAOAAAGgLQAHgMAAgYQAAgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_151.setTransform(-215.3,181.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgdAyQgLgJAAgOQAAgLAGgHQAHgIALgCQgLgDgFgGQgFgIAAgJQAAgJAEgHQAGgHAIgEQAJgDAKAAQALAAAJADQAIAEAGAHQAEAHAAAJQAAAJgFAIQgGAGgKADQALACAHAIQAGAHAAALQAAAOgMAJQgKAIgTAAQgSAAgLgIgAgTALQgIAFAAAKQAAAKAIAGQAGAFANAAQAOAAAGgFQAIgGAAgKQAAgKgIgFQgIgGgMgBQgMABgHAGgAgSgpQgGAFAAAKQAAAJAGAGQAIAFAKACQALgCAHgFQAHgGAAgJQAAgKgHgFQgGgFgMAAQgLAAgHAFg");
	this.shape_152.setTransform(-224.9,181.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhVIgXAOIAAgMIAdgTIAHAAIAABmIAZAAIAAALg");
	this.shape_153.setTransform(-234.1,181.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_154.setTransform(64.6,163);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgcArQgLgPAAgcQAAgcALgPQAJgOATAAQATAAAKAOQALAPAAAcQAAAcgLAPQgKAPgTAAQgTAAgJgPgAgTgjQgGAMgBAXQABAYAGALQAHAMAMAAQANAAAHgLQAGgMABgYQgBgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_155.setTransform(58,157.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgWA2QgKgDgHgHIAFgKQAIAHAIADQAHADAIAAQANAAAIgNQAIgNAAgXIAAgCQgDAIgIAFQgJAFgKAAQgKAAgIgEQgIgFgEgHQgFgIAAgLQAAgKAFgJQAFgIAIgFQAIgEALAAQATAAAMAOQALAOAAAbQAAAcgMAQQgLAQgUAAQgKAAgJgEgAgTgnQgHAHAAALQAAALAHAHQAGAGAMAAQAKAAAHgGQAHgHAAgLQAAgLgHgHQgHgHgLAAQgLAAgGAHg");
	this.shape_156.setTransform(48.4,157.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_157.setTransform(34.4,158.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_158.setTransform(24.8,157);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_159.setTransform(15.2,158.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_160.setTransform(6,160.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_161.setTransform(-3.3,158.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_162.setTransform(-11.1,157);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_163.setTransform(-25.2,157);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_164.setTransform(-34.8,158.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_165.setTransform(-44,157);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_166.setTransform(-51.1,158.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_167.setTransform(-58.8,158.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_168.setTransform(-66.1,157.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_169.setTransform(-77.6,160.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_170.setTransform(-90.2,157);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_171.setTransform(-99.7,158.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_172.setTransform(-107.2,157.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_173.setTransform(-114.6,158.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_174.setTransform(-123.9,158.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_175.setTransform(-137.4,158.7);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_176.setTransform(-147.1,158.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_177.setTransform(-154,158.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_178.setTransform(-162.5,158.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAADgBIAAALQgEACgGAAQgMAAgFgHg");
	this.shape_179.setTransform(-169.9,157.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_180.setTransform(-177.3,158.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_181.setTransform(-186.5,160.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHgBQAFAAAEgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_182.setTransform(-198.6,157.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_183.setTransform(-205.9,158.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_184.setTransform(-215.6,157);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_185.setTransform(-224.8,158.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_186.setTransform(-234.3,157.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_187.setTransform(67.8,138.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_188.setTransform(62,134.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_189.setTransform(54.6,133.1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_190.setTransform(45.5,134.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_191.setTransform(38.2,133.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_192.setTransform(26.6,134.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_193.setTransform(16.9,134.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_194.setTransform(10.5,133.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_195.setTransform(3.5,136.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_196.setTransform(-6.1,134.9);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_197.setTransform(-15.3,133.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_198.setTransform(-25.1,134.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_199.setTransform(-34.2,133.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_200.setTransform(-48.5,134.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_201.setTransform(-58.1,133.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_202.setTransform(-67.7,134.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_203.setTransform(-76.9,136.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_204.setTransform(-87.9,136);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#006699").s().p("AgOBHQAJgTAEgSQACgRAAgRQAAgQgCgSQgEgQgJgVIALAAQAJATAEARQAEARAAASQAAASgEASQgEASgJARg");
	this.shape_205.setTransform(-92.8,134.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#006699").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_206.setTransform(-99.4,136.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_207.setTransform(-106.3,134.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_208.setTransform(-114.2,134.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#006699").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_209.setTransform(-121.2,134.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_210.setTransform(-129.2,135);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#006699").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_211.setTransform(-136.7,133.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_212.setTransform(-148.3,135);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_213.setTransform(-157.9,134.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_214.setTransform(-165.4,133.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_215.setTransform(-173.1,134.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_216.setTransform(-183.8,136);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#006699").s().p("AgOBHQAJgTAEgSQACgRAAgRQAAgQgCgSQgEgQgJgVIALAAQAJATAEARQAEARAAASQAAASgEASQgEASgJARg");
	this.shape_217.setTransform(-188.7,134.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#006699").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_218.setTransform(-195.3,136.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_219.setTransform(-202.2,134.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_220.setTransform(-210,134.8);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#006699").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_221.setTransform(-217,134.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_222.setTransform(-225.1,135);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#006699").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_223.setTransform(-234.5,133.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_224.setTransform(63.3,110.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_225.setTransform(53.6,111);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_226.setTransform(45.6,109.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_227.setTransform(36.2,112.7);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_228.setTransform(29.3,109.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_229.setTransform(22.4,111);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_230.setTransform(14.9,109.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_231.setTransform(6.1,115.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_232.setTransform(-0.4,110.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_233.setTransform(-10.1,111);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_234.setTransform(-21.6,111);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_235.setTransform(-33.6,111);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_236.setTransform(-42.2,111);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_237.setTransform(-51.1,111);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_238.setTransform(-59.1,109.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_239.setTransform(-69,112.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_240.setTransform(-78.3,110.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_241.setTransform(-88,111);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_242.setTransform(-101.5,110.9);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_243.setTransform(-111.1,111);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_244.setTransform(-119.1,109.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_245.setTransform(-126.3,110.9);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_246.setTransform(-134.8,111);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_247.setTransform(-142.2,109.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_248.setTransform(-149.6,111.1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_249.setTransform(-161.3,110.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_250.setTransform(-172.6,111);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_251.setTransform(-184,110.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_252.setTransform(-198.6,109.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_253.setTransform(-208.1,111.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_254.setTransform(-215.6,109.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_255.setTransform(-223,110.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_256.setTransform(-233.5,109.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgRIAPAAIAAAMQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_257.setTransform(-34.3,88.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#006699").s().p("AgOBHQAJgTAEgSQACgRAAgRQAAgQgCgSQgEgQgJgVIAMAAQAIASAEASQAEARABASQgBASgEASQgEASgIARg");
	this.shape_258.setTransform(-39.2,86.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_259.setTransform(-45.9,87);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_260.setTransform(-52.4,86.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_261.setTransform(-59.9,87.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#006699").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_262.setTransform(-68.5,87.1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_263.setTransform(-77.3,87.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#006699").s().p("AAqA5IAAhTIgmBTIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_264.setTransform(-88.7,85.5);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_265.setTransform(-104.4,87);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_266.setTransform(-114.1,87.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_267.setTransform(-122.1,85.3);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_268.setTransform(-131.9,87.1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_269.setTransform(-141.2,87);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_270.setTransform(-150.5,87.2);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_271.setTransform(-160.2,88.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_272.setTransform(-170.8,91.3);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_273.setTransform(-177.4,87);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_274.setTransform(-187,87.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_275.setTransform(-196.2,88.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_276.setTransform(-206.2,87.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_277.setTransform(-215.8,85.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_278.setTransform(-225.4,87.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_279.setTransform(-234.6,85.3);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_280.setTransform(37.8,63.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_281.setTransform(30,61.4);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_282.setTransform(16.3,63.1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_283.setTransform(6.6,63.2);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_284.setTransform(-4.9,63.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_285.setTransform(-16.9,63.2);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_286.setTransform(-25.5,63.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_287.setTransform(-34.4,63.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_288.setTransform(-42.4,61.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_289.setTransform(-52.3,64.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_290.setTransform(-61.6,63.1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_291.setTransform(-71.3,63.2);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_292.setTransform(-84.8,63.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_293.setTransform(-94.4,63.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_294.setTransform(-102.4,61.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_295.setTransform(-110.7,61.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_296.setTransform(-120.5,63.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_297.setTransform(-127.5,63.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_298.setTransform(-135.2,63.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_299.setTransform(-144.7,64.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_300.setTransform(-154.3,64.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_301.setTransform(-163.6,63.1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_302.setTransform(-172.6,63.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_303.setTransform(-184,63.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_304.setTransform(-198.6,61.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_305.setTransform(-208.1,63.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_306.setTransform(-215.6,62);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_307.setTransform(-223,63.1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_308.setTransform(-233.5,61.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_309.setTransform(-247.9,257.6);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgUA2QgKgEgHgHIAFgKQAQAOAQAAQAMAAAGgHQAHgHAAgLQAAgMgHgHQgGgGgMAAQgPAAgKAMIgJAAIAAhBIBEAAIAAAKIg3AAIAAApQAKgJANAAQALAAAIAEQAIAFAFAIQAEAHAAALQAAALgFAIQgEAIgKAFQgIAEgLABQgKgBgKgDg");
	this.shape_310.setTransform(-254.3,252.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_311.setTransform(-247.9,209.8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AALA5IAAgZIgzAAIAAgKIA1hOIALAAIAABNIARAAIAAALIgRAAIAAAZgAgbAVIAmAAIAAg2g");
	this.shape_312.setTransform(-254.4,205);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_313.setTransform(-247.9,162);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgLQAAgUgagBIgMAAIAAgJIAKAAQALgBAHgFQAHgGAAgKQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgGAJgEQALgEAKAAQAPAAAJAHQAKAJgBANQAAAKgEAHQgFAHgJADQALADAEAHQAGAGAAALQAAAPgKAIQgKAJgRAAQgLAAgKgDg");
	this.shape_314.setTransform(-254.7,157.2);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_315.setTransform(-247.9,114.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgDAKAAQAPAAAJAHQAKAIAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_316.setTransform(-254.5,109.3);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_317.setTransform(-247.9,66.4);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhVIgXAPIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_318.setTransform(-254.1,61.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_319.setTransform(-177.6,278.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_320.setTransform(-186,278.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_321.setTransform(-215.2,277.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_322.setTransform(-227.8,276.5);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_323.setTransform(20.5,252.6);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgjAwQALgCAFgFQAGgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_324.setTransform(-6.6,256.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_325.setTransform(-13.8,253.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_326.setTransform(-33.6,254.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_327.setTransform(-74.9,254.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_328.setTransform(-83.7,256.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_329.setTransform(-115,252.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_330.setTransform(-146.6,253.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_331.setTransform(-162.3,254.4);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_332.setTransform(-179.4,254.4);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAnIA3AAIAAAKIg3AAIAAAqIA6AAIAAALg");
	this.shape_333.setTransform(-188.1,252.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_334.setTransform(-212.9,254.4);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_335.setTransform(-226.5,252.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_336.setTransform(-233.8,252.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_337.setTransform(-147.3,229.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_338.setTransform(-234.4,232.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBYQgFANgJAGQgIAHgOACg");
	this.shape_339.setTransform(29.1,208.5);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_340.setTransform(6,204.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_341.setTransform(-50.2,206.6);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_342.setTransform(-58.6,206.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_343.setTransform(-71.5,204.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_344.setTransform(-80,206.6);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_345.setTransform(-117,206.6);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_346.setTransform(-124.4,204.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_347.setTransform(-154.9,204.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_348.setTransform(-168,206.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgcAsQgLgPAAgaQAAgTAGgNQAFgOAJgHQALgHAMAAQAKAAAJADQAJAEAHAHIgFAKQgIgHgGgDQgIgDgIAAQgOAAgHANQgIANAAAXIAAACQADgIAIgFQAJgGAJAAQALAAAIAFQAIAEAFAIQAEAIAAAKQAAALgFAIQgFAJgIAEQgIAFgLAAQgTAAgMgOgAgPADQgHAHAAAMQAAALAHAHQAHAHALAAQALAAAGgHQAHgHAAgLQAAgMgHgHQgGgGgLAAQgLAAgHAGg");
	this.shape_349.setTransform(-185.3,181.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgLQAAgVgZABIgOAAIAAgLIALAAQAMABAGgGQAHgGAAgKQAAgJgFgFQgGgFgKAAQgQAAgQANIgEgKQAGgHALgEQAJgDALAAQAPAAAJAIQAKAHAAAOQgBAKgFAHQgEAHgJADQALADAEAGQAGAIAAAKQAAAPgKAJQgLAIgQAAQgKAAgLgEg");
	this.shape_350.setTransform(-195.1,181.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_351.setTransform(-215.8,180.9);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgEAKABQAPAAAJAIQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_352.setTransform(-40.1,157.1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgWAGIAAgKIAtAAIAAAKg");
	this.shape_353.setTransform(-48.3,158.6);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_354.setTransform(-57.8,163);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgdAxQgLgHAAgPQAAgKAHgIQAGgHALgDQgKgCgGgIQgFgGAAgKQAAgJAEgHQAFgGAJgEQAJgEAKAAQALAAAJAEQAJAEAEAGQAGAHgBAJQABAKgHAGQgFAIgJACQAKADAHAHQAGAIAAAKQAAAPgMAHQgKAJgTAAQgRAAgMgJgAgUALQgHAGAAAJQAAAKAHAGQAIAFAMAAQANAAAHgFQAIgGAAgKQAAgJgIgGQgHgGgNgBQgMABgIAGgAgRgpQgHAFAAAKQAAAJAHAGQAGAFALABQALgBAIgFQAGgGAAgJQAAgKgGgFQgHgGgMAAQgLAAgGAGg");
	this.shape_355.setTransform(-74,157.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhWIgXAQIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_356.setTransform(-83.2,157.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgWAGIAAgKIAtAAIAAAKg");
	this.shape_357.setTransform(-91.9,158.6);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_358.setTransform(-101.4,163);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgWAGIAAgKIAtAAIAAAKg");
	this.shape_359.setTransform(-125.8,158.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_360.setTransform(-135.3,163);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQANAAAFgGQAHgFAAgLQAAgUgagBIgMAAIAAgJIAKAAQALgBAHgFQAHgGAAgKQAAgJgGgFQgFgFgKAAQgPAAgQANIgGgKQAHgGAKgEQALgEAJAAQAQAAAJAHQAJAJAAANQAAAKgEAHQgGAHgIADQAKADAGAHQAFAGAAALQAAAPgLAIQgJAJgSAAQgJAAgLgDg");
	this.shape_361.setTransform(-161.3,157.2);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_362.setTransform(-172,163);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgEAKABQAPAAAJAIQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_363.setTransform(-197.8,157.1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_364.setTransform(-208.7,163);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQALgOASAAQAUAAAJAOQALAPAAAcQAAAcgLAPQgJAPgUAAQgSAAgLgPgAgTgjQgGAMAAAXQAAAYAGALQAGAMANAAQAOAAAGgLQAHgMAAgYQAAgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_365.setTransform(-215.3,157.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgdAxQgLgHAAgPQAAgKAGgIQAHgHALgDQgLgCgFgIQgFgGAAgKQAAgJAEgHQAGgGAIgEQAJgEAKAAQALAAAJAEQAIAEAGAGQAEAHAAAJQAAAKgFAGQgGAIgKACQALADAHAHQAGAIAAAKQAAAPgMAHQgKAJgTAAQgSAAgLgJgAgTALQgIAGAAAJQAAAKAIAGQAGAFANAAQAOAAAGgFQAIgGAAgKQAAgJgIgGQgIgGgMgBQgMABgHAGgAgSgpQgGAFAAAKQAAAJAGAGQAIAFAKABQALgBAHgFQAHgGAAgJQAAgKgHgFQgGgGgMAAQgLAAgHAGg");
	this.shape_366.setTransform(-224.9,157.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhWIgXAQIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_367.setTransform(-234.1,157.2);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAFg");
	this.shape_368.setTransform(76.7,139.1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_369.setTransform(70.1,133.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_370.setTransform(46.9,134.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_371.setTransform(39.5,133.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_372.setTransform(27.5,133.1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_373.setTransform(11.4,133.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_374.setTransform(-11.1,133.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_375.setTransform(-14.9,133.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_376.setTransform(-30.8,133.2);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_377.setTransform(-61.1,134.9);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_378.setTransform(-68.5,133);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_379.setTransform(-89.2,134.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_380.setTransform(-95.7,133.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_381.setTransform(-100.5,133.7);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_382.setTransform(-123,134.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_383.setTransform(-140.3,133);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_384.setTransform(-147.5,134.9);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_385.setTransform(-202.9,133.1);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_386.setTransform(-216,134.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_387.setTransform(-225,133.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_388.setTransform(-234.5,133.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_389.setTransform(-65,111);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_390.setTransform(-98.8,111);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_391.setTransform(-107.4,111);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_392.setTransform(-125.9,111);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_393.setTransform(-134.9,109.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_394.setTransform(-142.5,109.8);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_395.setTransform(-160.7,109.3);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_396.setTransform(-168.7,112.1);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#006699").s().p("AgOBIQAJgVADgRQADgRAAgRQAAgQgDgRQgDgRgJgUIALAAQAJASAFARQADARAAASQAAASgDASQgFARgJATg");
	this.shape_397.setTransform(-173.6,110.8);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#006699").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_398.setTransform(-180.2,112.7);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#006699").s().p("AAEBIQgJgTgEgRQgFgSAAgSQAAgSAFgRQAEgRAJgSIALAAQgJAUgEARQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_399.setTransform(-187.1,110.8);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#006699").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_400.setTransform(-210,111.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#006699").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_401.setTransform(-217.5,109.8);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_402.setTransform(-234.8,111);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#006699").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_403.setTransform(77.5,88.8);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#006699").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_404.setTransform(47.7,87.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#006699").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_405.setTransform(38.3,85.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_406.setTransform(24.9,87.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_407.setTransform(15.9,88.8);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAGgEAEgJIACgHIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_408.setTransform(6.7,89);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_409.setTransform(-0.4,85.9);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_410.setTransform(-13.9,85.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_411.setTransform(-49.4,87.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_412.setTransform(-62.7,85.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_413.setTransform(-91.5,87.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_414.setTransform(-100.5,85.3);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_415.setTransform(-108.1,85.9);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_416.setTransform(-119.3,87.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_417.setTransform(-126.6,85.9);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_418.setTransform(-141.8,85.9);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_419.setTransform(-149.1,87.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_420.setTransform(-156,87);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_421.setTransform(-168.2,87.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_422.setTransform(-175.7,85.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_423.setTransform(-185,87);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_424.setTransform(-192.7,87.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_425.setTransform(-209.1,87);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_426.setTransform(-217.1,87.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_427.setTransform(-237.3,85.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#006699").s().p("AgGAsQAGgHAAgHIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_428.setTransform(92.5,64.3);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgRQgDgSgIgTIALAAQAIASAEARQAFASAAARQAAASgFASQgEARgIASg");
	this.shape_429.setTransform(87.6,63);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#006699").s().p("AAEBHQgJgSgEgRQgFgSAAgSQAAgRAFgSQAEgRAJgSIALAAQgJATgEASQgCARAAAQQAAARACARQAEASAIATg");
	this.shape_430.setTransform(74.3,63);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#006699").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_431.setTransform(58.3,63.2);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#006699").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_432.setTransform(38.1,61.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgMAAQgKAAgHAIg");
	this.shape_433.setTransform(22,61.4);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_434.setTransform(3.1,63.2);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_435.setTransform(-22.6,63.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_436.setTransform(-34.2,63.2);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_437.setTransform(-42.5,63.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_438.setTransform(-55.2,63.2);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_439.setTransform(-71.8,62);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_440.setTransform(-83,63.2);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_441.setTransform(-110.7,67.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_442.setTransform(-117.5,61.4);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_443.setTransform(-124.5,63.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_444.setTransform(-153.8,63.1);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_445.setTransform(-161.8,63.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_446.setTransform(-169.1,61.3);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_447.setTransform(-180.3,63.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#000000").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_448.setTransform(-188.9,63.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_449.setTransform(-197.7,63.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_450.setTransform(-209.4,63.1);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_451.setTransform(-225.1,63.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_452.setTransform(-234.5,61.6);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgKQAAgWgaABIgMAAIAAgLIAKAAQALABAHgGQAHgFAAgLQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgHAJgDQALgEAKAAQAPAAAJAHQAKAIgBAOQAAAKgEAHQgFAHgJAEQALABAEAHQAGAIAAAKQAAAPgKAJQgKAIgRAAQgLAAgKgEg");
	this.shape_453.setTransform(-254.7,133.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#000000").s().p("AgiA6IAAgKIAngsQAIgIAEgHQADgIAAgHQAAgKgFgEQgGgGgJAAQgQABgQANIgFgKQAHgHAKgEQAKgDAKAAQAPgBAJAJQAKAHAAAOQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_454.setTransform(-254.5,85.4);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_455.setTransform(-247.9,66.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_318},{t:this.shape_317,p:{y:66.4}},{t:this.shape_316},{t:this.shape_315,p:{y:114.2}},{t:this.shape_314},{t:this.shape_313,p:{y:162}},{t:this.shape_312},{t:this.shape_311,p:{y:209.8}},{t:this.shape_310},{t:this.shape_309,p:{x:-247.9,y:257.6}},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303,p:{x:-184}},{t:this.shape_302,p:{x:-172.6,y:63.2}},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298,p:{x:-135.2,y:63.2}},{t:this.shape_297,p:{x:-127.5,y:63.1}},{t:this.shape_296},{t:this.shape_295,p:{x:-110.7,y:61.4}},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286,p:{x:-25.5}},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280,p:{x:37.8,y:63.2}},{t:this.shape_279,p:{x:-234.6,y:85.3}},{t:this.shape_278},{t:this.shape_277,p:{x:-215.8,y:85.3}},{t:this.shape_276},{t:this.shape_275,p:{x:-196.2,y:88.8}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272,p:{x:-170.8}},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268,p:{x:-131.9}},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263,p:{x:-77.3,y:87.1}},{t:this.shape_262},{t:this.shape_261,p:{x:-59.9,y:87.1}},{t:this.shape_260,p:{x:-52.4}},{t:this.shape_259,p:{x:-45.9,y:87}},{t:this.shape_258,p:{x:-39.2}},{t:this.shape_257,p:{x:-34.3}},{t:this.shape_256,p:{y:109.4}},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251,p:{x:-184,y:110.9}},{t:this.shape_250,p:{x:-172.6,y:111}},{t:this.shape_249,p:{x:-161.3,y:110.9}},{t:this.shape_248},{t:this.shape_247,p:{x:-142.2}},{t:this.shape_246},{t:this.shape_245,p:{x:-126.3}},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236,p:{x:-42.2,y:111}},{t:this.shape_235},{t:this.shape_234,p:{x:-21.6,y:111}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230,p:{x:14.9}},{t:this.shape_229},{t:this.shape_228,p:{x:29.3,y:109.3}},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221,p:{x:-217,y:134.8}},{t:this.shape_220,p:{x:-210,y:134.8}},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209,p:{x:-121.2,y:134.8}},{t:this.shape_208,p:{x:-114.2,y:134.8}},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203,p:{x:-76.9}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199,p:{x:-34.2,y:133.1}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195,p:{x:3.5}},{t:this.shape_194,p:{x:10.5,y:133.2}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191,p:{x:38.2}},{t:this.shape_190,p:{x:45.5,y:134.9}},{t:this.shape_189},{t:this.shape_188,p:{x:62}},{t:this.shape_187,p:{x:67.8,y:138.1}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177,p:{x:-154,y:158.7}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174,p:{x:-123.9,y:158.9}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167,p:{x:-58.8,y:158.8}},{t:this.shape_166,p:{x:-51.1,y:158.7}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161,p:{x:-3.3,y:158.8}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:48.4,y:157.2}},{t:this.shape_155},{t:this.shape_154,p:{x:64.6}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151,p:{x:-215.3}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148,p:{y:181.1}},{t:this.shape_147,p:{y:181.1}},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144,p:{y:181.1}},{t:this.shape_143,p:{y:181.1}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140,p:{y:181.1}},{t:this.shape_139,p:{y:181.1}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134,p:{y:181.1}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130,p:{y:181.1}},{t:this.shape_129,p:{y:181.1}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124,p:{x:28}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:62}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:-218.2,y:204.9}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:-162.3,y:206.5}},{t:this.shape_110,p:{x:-155.3,y:206.6}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104,p:{x:-93.9,y:204.8}},{t:this.shape_103,p:{x:-84.7}},{t:this.shape_102,p:{x:-76.2,y:206.5}},{t:this.shape_101,p:{x:-69.2,y:206.7}},{t:this.shape_100},{t:this.shape_99,p:{x:-48.9,y:204.9}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:-20.2}},{t:this.shape_95,p:{x:-15.9,y:204.9}},{t:this.shape_94,p:{x:-10.1}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:20.9,y:206.5}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:-225.2,y:230.5}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-197.8}},{t:this.shape_84},{t:this.shape_83,p:{x:-177.4,y:228.7}},{t:this.shape_82,p:{x:-168,y:230.5}},{t:this.shape_81,p:{x:-159,y:230.4}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:-130.4,y:230.4}},{t:this.shape_77,p:{x:-114.5,y:230.4}},{t:this.shape_76,p:{x:-103.1}},{t:this.shape_75,p:{x:-94.1,y:230.4}},{t:this.shape_74,p:{x:-85}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-58.2,y:230.4}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:-10.6,y:230.4}},{t:this.shape_65,p:{x:-1.3}},{t:this.shape_64,p:{x:9.7}},{t:this.shape_63,p:{x:16.5}},{t:this.shape_62,p:{x:25.5,y:230.4}},{t:this.shape_61},{t:this.shape_60,p:{x:40.2,y:230.5}},{t:this.shape_59,p:{x:48}},{t:this.shape_58,p:{x:52.1}},{t:this.shape_57,p:{x:55.7}},{t:this.shape_56},{t:this.shape_55,p:{x:-225.3}},{t:this.shape_54},{t:this.shape_53,p:{x:-208.2,y:254.4}},{t:this.shape_52,p:{x:-198.5,y:254.3}},{t:this.shape_51},{t:this.shape_50,p:{x:-175.4}},{t:this.shape_49,p:{x:-168}},{t:this.shape_48,p:{x:-160.6,y:254.4}},{t:this.shape_47,p:{x:-150.9,y:254.3}},{t:this.shape_46},{t:this.shape_45,p:{x:-130.6}},{t:this.shape_44},{t:this.shape_43,p:{x:-115.5,y:254.4}},{t:this.shape_42},{t:this.shape_41,p:{x:-98.3,y:254.4}},{t:this.shape_40,p:{x:-89.7,y:254.4}},{t:this.shape_39,p:{x:-80.1,y:254.3}},{t:this.shape_38,p:{x:-70.8,y:254.4}},{t:this.shape_37,p:{x:-64}},{t:this.shape_36,p:{x:-54.1,y:254.4}},{t:this.shape_35,p:{x:-45.7}},{t:this.shape_34},{t:this.shape_33,p:{x:-31.4}},{t:this.shape_32,p:{x:-25.1,y:252.6}},{t:this.shape_31,p:{x:-18.7,y:254.4}},{t:this.shape_30,p:{x:-8.9}},{t:this.shape_29,p:{x:-232.4}},{t:this.shape_28,p:{x:-220.9,y:278.3}},{t:this.shape_27,p:{x:-212,y:278.2}},{t:this.shape_26,p:{x:-202.7,y:278.3}},{t:this.shape_25,p:{x:-195.7,y:276.6}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-171.4}},{t:this.shape_21,p:{x:-161.8,y:278.2}},{t:this.shape_20,p:{x:-148.9}},{t:this.shape_19,p:{x:-140.5}},{t:this.shape_18,p:{x:-129.2}},{t:this.shape_17,p:{x:-117.5,y:278.4}},{t:this.shape_16,p:{x:-108.3,y:278.3}},{t:this.shape_15},{t:this.shape_14,p:{x:-86.1,y:278.2}},{t:this.shape_13,p:{x:-79.1,y:278.3}},{t:this.shape_12},{t:this.shape_11,p:{x:-60.2}},{t:this.shape_10,p:{x:-50.5}},{t:this.shape_9,p:{x:-44}}]}).to({state:[{t:this.shape_318},{t:this.shape_455},{t:this.shape_454},{t:this.shape_317,p:{y:90.3}},{t:this.shape_453},{t:this.shape_315,p:{y:138.1}},{t:this.shape_312},{t:this.shape_313,p:{y:209.8}},{t:this.shape_310},{t:this.shape_311,p:{y:257.6}},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_234,p:{x:-144.4,y:63.2}},{t:this.shape_88,p:{x:-132.9,y:63.2}},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_17,p:{x:-100,y:63.3}},{t:this.shape_286,p:{x:-91.4}},{t:this.shape_440},{t:this.shape_439},{t:this.shape_104,p:{x:-64.2,y:61.4}},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_303,p:{x:-8.6}},{t:this.shape_434},{t:this.shape_91,p:{x:12.7,y:63.1}},{t:this.shape_433},{t:this.shape_432},{t:this.shape_263,p:{x:49.4,y:63.2}},{t:this.shape_431},{t:this.shape_261,p:{x:66.9,y:63.2}},{t:this.shape_430},{t:this.shape_259,p:{x:80.9,y:63.1}},{t:this.shape_429},{t:this.shape_428},{t:this.shape_309,p:{x:96.2,y:66.4}},{t:this.shape_427},{t:this.shape_81,p:{x:-230.6,y:87}},{t:this.shape_426},{t:this.shape_425},{t:this.shape_83,p:{x:-202.1,y:85.3}},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_38,p:{x:-134.3,y:87.1}},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_268,p:{x:-78.4}},{t:this.shape_236,p:{x:-69.4,y:87.1}},{t:this.shape_412},{t:this.shape_297,p:{x:-56.4,y:87}},{t:this.shape_411},{t:this.shape_78,p:{x:-40.2,y:87}},{t:this.shape_43,p:{x:-30.9,y:87.1}},{t:this.shape_174,p:{x:-21.3,y:87.2}},{t:this.shape_410},{t:this.shape_272,p:{x:-9.2}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_221,p:{x:55.8,y:87}},{t:this.shape_220,p:{x:62.8,y:87}},{t:this.shape_260,p:{x:70.6}},{t:this.shape_403},{t:this.shape_258,p:{x:84.1}},{t:this.shape_257,p:{x:89}},{t:this.shape_402},{t:this.shape_245,p:{x:-226.8}},{t:this.shape_401},{t:this.shape_400},{t:this.shape_209,p:{x:-201.9,y:110.9}},{t:this.shape_208,p:{x:-194.9,y:110.9}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_75,p:{x:-154.2,y:110.9}},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_230,p:{x:-114.7}},{t:this.shape_391},{t:this.shape_390},{t:this.shape_247,p:{x:-91.8}},{t:this.shape_110,p:{x:-80.2,y:111}},{t:this.shape_177,p:{x:-71.7,y:110.9}},{t:this.shape_389},{t:this.shape_53,p:{x:-56.1,y:111}},{t:this.shape_187,p:{x:-49.2,y:114.2}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_302,p:{x:-193.5,y:134.9}},{t:this.shape_195,p:{x:-184.6}},{t:this.shape_166,p:{x:-176.1,y:134.8}},{t:this.shape_298,p:{x:-169.3,y:134.9}},{t:this.shape_280,p:{x:-160.6,y:134.9}},{t:this.shape_384},{t:this.shape_383},{t:this.shape_111,p:{x:-129.9,y:134.8}},{t:this.shape_382},{t:this.shape_191,p:{x:-115.7}},{t:this.shape_31,p:{x:-108.2,y:134.9}},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_71,p:{x:-80,y:134.8}},{t:this.shape_378},{t:this.shape_377},{t:this.shape_102,p:{x:-53.1,y:134.8}},{t:this.shape_203,p:{x:-41.6}},{t:this.shape_376},{t:this.shape_188,p:{x:-25}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_251,p:{x:-2.2,y:134.8}},{t:this.shape_228,p:{x:6.8,y:133.2}},{t:this.shape_373},{t:this.shape_250,p:{x:18.6,y:134.9}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_156,p:{x:60.5,y:133.3}},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_148,p:{y:157.2}},{t:this.shape_147,p:{y:157.2}},{t:this.shape_362},{t:this.shape_361},{t:this.shape_144,p:{y:157.2}},{t:this.shape_143,p:{y:157.2}},{t:this.shape_360},{t:this.shape_359},{t:this.shape_140,p:{y:157.2}},{t:this.shape_139,p:{y:157.2}},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_134,p:{y:157.2}},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_130,p:{y:157.2}},{t:this.shape_129,p:{y:157.2}},{t:this.shape_154,p:{x:-14.3}},{t:this.shape_16,p:{x:-234.8,y:182.7}},{t:this.shape_66,p:{x:-225.1,y:182.6}},{t:this.shape_351},{t:this.shape_124,p:{x:-203.2}},{t:this.shape_350},{t:this.shape_349},{t:this.shape_151,p:{x:-175.7}},{t:this.shape_120,p:{x:-169.1}},{t:this.shape_256,p:{y:205}},{t:this.shape_94,p:{x:-223.7}},{t:this.shape_190,p:{x:-215.3,y:206.6}},{t:this.shape_40,p:{x:-202.2,y:206.6}},{t:this.shape_62,p:{x:-188.4,y:206.5}},{t:this.shape_167,p:{x:-179.3,y:206.6}},{t:this.shape_348},{t:this.shape_347},{t:this.shape_194,p:{x:-151.1,y:204.9}},{t:this.shape_52,p:{x:-144.6,y:206.5}},{t:this.shape_161,p:{x:-135.5,y:206.6}},{t:this.shape_346},{t:this.shape_345},{t:this.shape_96,p:{x:-109}},{t:this.shape_82,p:{x:-98.1,y:206.6}},{t:this.shape_103,p:{x:-89.2}},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_249,p:{x:-38.7,y:206.5}},{t:this.shape_77,p:{x:-24.6,y:206.5}},{t:this.shape_48,p:{x:-13,y:206.6}},{t:this.shape_47,p:{x:-3.3,y:206.5}},{t:this.shape_340},{t:this.shape_199,p:{x:20.3,y:204.8}},{t:this.shape_339},{t:this.shape_338},{t:this.shape_85,p:{x:-226.3}},{t:this.shape_76,p:{x:-219.6}},{t:this.shape_41,p:{x:-211.3,y:230.5}},{t:this.shape_36,p:{x:-203.4,y:230.5}},{t:this.shape_117,p:{x:-197.4,y:228.8}},{t:this.shape_39,p:{x:-190.9,y:230.4}},{t:this.shape_65,p:{x:-181.6}},{t:this.shape_64,p:{x:-170.6}},{t:this.shape_63,p:{x:-163.8}},{t:this.shape_27,p:{x:-154.8,y:230.4}},{t:this.shape_337},{t:this.shape_74,p:{x:-140.1}},{t:this.shape_59,p:{x:-132.3}},{t:this.shape_58,p:{x:-128.2}},{t:this.shape_57,p:{x:-124.6}},{t:this.shape_336},{t:this.shape_335},{t:this.shape_99,p:{x:-222.7,y:252.7}},{t:this.shape_95,p:{x:-218.9,y:252.7}},{t:this.shape_334},{t:this.shape_295,p:{x:-204.3,y:252.6}},{t:this.shape_45,p:{x:-194.9}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_60,p:{x:-170.8,y:254.4}},{t:this.shape_331},{t:this.shape_101,p:{x:-153.9,y:254.5}},{t:this.shape_330},{t:this.shape_55,p:{x:-139.3}},{t:this.shape_37,p:{x:-133.2}},{t:this.shape_13,p:{x:-122.7,y:254.4}},{t:this.shape_329},{t:this.shape_49,p:{x:-109.5}},{t:this.shape_35,p:{x:-102.3}},{t:this.shape_14,p:{x:-94.5,y:254.3}},{t:this.shape_328},{t:this.shape_327},{t:this.shape_50,p:{x:-65.7}},{t:this.shape_30,p:{x:-52.1}},{t:this.shape_26,p:{x:-42.9,y:254.4}},{t:this.shape_326},{t:this.shape_33,p:{x:-25}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_275,p:{x:2.6,y:256.1}},{t:this.shape_28,p:{x:11.6,y:254.4}},{t:this.shape_323},{t:this.shape_25,p:{x:31.6,y:252.7}},{t:this.shape_21,p:{x:38.1,y:254.3}},{t:this.shape_11,p:{x:-234.8}},{t:this.shape_322},{t:this.shape_32,p:{x:-224,y:276.5}},{t:this.shape_321},{t:this.shape_279,p:{x:-207.6,y:276.5}},{t:this.shape_19,p:{x:-198.6}},{t:this.shape_320},{t:this.shape_319},{t:this.shape_29,p:{x:-166.1}},{t:this.shape_18,p:{x:-152}},{t:this.shape_22,p:{x:-140.4}},{t:this.shape_10,p:{x:-130.7}},{t:this.shape_277,p:{x:-121.4,y:276.5}},{t:this.shape_20,p:{x:-112.5}},{t:this.shape_9,p:{x:-106.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.3,-5.3,342.4,294.1);


(lib.instr1 = function(mode,startPosition,loop) {
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

	// title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D40000").s().p("AguBGIACgYIAgAAIAJhWIgiASIADgaIAlgVIAYAAIgMBzIAgAAIgCAYg");
	this.shape.setTransform(-119.5,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AgCBJIgVgOIANiDIAbAAIgNB5IAUAAIgCAYg");
	this.shape_1.setTransform(-133.6,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhLIAZgNIAXAAIANAIIAPgIIANAAIgKBlgAgUAbIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(-143.1,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D40000").s().p("AgVBJIALhjIAaAAIgKBjgAgJgsIACgcIAdAAIgDAcg");
	this.shape_3.setTransform(-151.7,10.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D40000").s().p("AgjAyIAKhjIAXAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape_4.setTransform(-158.4,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D40000").s().p("AgZAzIgXgNIAIhLIAZgNIAqAAIAVANIgIBLIgYANgAgTAbIAhAAIAGg2IghAAg");
	this.shape_5.setTransform(-169,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D40000").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_6.setTransform(-179,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40000").s().p("AAQAzIgEgIIgOAIIgYAAIgWgOIAJhXIAcAAIgJBNIAiAAIAIhNIAbAAIgKBlg");
	this.shape_7.setTransform(-189.4,13);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D40000").s().p("AgaBGIAMhzIgmAAIACgYIBnAAIgCAYIgmAAIgMBzg");
	this.shape_8.setTransform(-200.3,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// t
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_9.setTransform(-130.5,257.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(-137,254.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_11.setTransform(-146.7,254.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_12.setTransform(-155.9,252.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(-165.6,254.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(-172.6,254.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(-181,254.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_16.setTransform(-194.8,254.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_17.setTransform(-204,254.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_18.setTransform(-215.7,254.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(-227,254.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_20.setTransform(-235.4,254.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(77.5,230.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(67.8,230.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AASA7IgognIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_23.setTransform(59.8,228.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(50.4,232.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(43.5,228.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(36.6,230.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(27.3,230.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(18.3,230.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_29.setTransform(6.9,230.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(-8.9,228.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-18.7,230.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(-25.1,228.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-31.4,230.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_34.setTransform(-38.6,229.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-45.7,230.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-54.1,230.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_37.setTransform(-64,225.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-70.8,230.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-80.1,230.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(-89.7,230.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_41.setTransform(-98.3,230.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_42.setTransform(-105.7,228.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(-115.5,230.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgiA5IAAhxIANAAIAABmIA4AAIAAALg");
	this.shape_44.setTransform(-123.9,228.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgDAWIgEgsIAPAAIgDAsg");
	this.shape_45.setTransform(-130.6,225.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgdAzIADgKQAHAEAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(-141.6,232.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(-150.9,230.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(-160.6,230.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFACgFgBQgMAAgFgGg");
	this.shape_49.setTransform(-168,229.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_50.setTransform(-175.4,230.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_51.setTransform(-184.5,228.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(-198.5,230.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(-208.2,230.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_54.setTransform(-216.2,228.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(-225.3,230.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_56.setTransform(-234.5,228.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_57.setTransform(-93.8,209.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_58.setTransform(-100.4,206.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_59.setTransform(-110,206.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_60.setTransform(-119.2,204.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(-129,206.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_62.setTransform(-135.9,206.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(-144.4,206.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_64.setTransform(-157.2,206.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_65.setTransform(-163,204.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_66.setTransform(-167.3,206.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_67.setTransform(-175.7,206.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_68.setTransform(-184.8,204.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJAAQAKAAAJAFQAIAFAEAJQAFAKAAANQAAAMgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAQQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_69.setTransform(-198.7,208.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_70.setTransform(-208.7,206.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_71.setTransform(-215.2,204.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGAAQgMAAgFgHg");
	this.shape_72.setTransform(-220,205.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(-227,206.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_74.setTransform(-235.4,206.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_75.setTransform(82,181);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_76.setTransform(77.7,182.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_77.setTransform(72.4,181);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_78.setTransform(65.9,180.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_79.setTransform(57.7,180.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(47.9,182.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHADQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_81.setTransform(38.2,184.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_82.setTransform(28.9,182.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_83.setTransform(20,182.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_84.setTransform(8.5,182.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_85.setTransform(-6.1,180.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_86.setTransform(-15.5,182.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_87.setTransform(-23,181.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_88.setTransform(-30.5,182.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_89.setTransform(-39.7,182.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_90.setTransform(-53.3,182.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_91.setTransform(-62.5,182.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_92.setTransform(-68.9,180.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_93.setTransform(-75.4,182.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_94.setTransform(-83.4,180.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_95.setTransform(-90.1,181);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_96.setTransform(-99.1,182.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_97.setTransform(-110.4,182.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_98.setTransform(-118.8,182.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_99.setTransform(-128.8,180.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_100.setTransform(-135.3,182.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_101.setTransform(-144.4,180.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_102.setTransform(-156.6,182.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_103.setTransform(-165.4,181);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_104.setTransform(-171.4,182.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_105.setTransform(-184.2,182.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_106.setTransform(-193.9,182.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_107.setTransform(-201.9,180.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAOQAAAPAGAIQAGAHALAAQAMAAAHgHQAGgIAAgPQAAgOgGgJQgHgHgMAAQgLAAgGAHg");
	this.shape_108.setTransform(-211.3,184.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_109.setTransform(-218.2,181);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_110.setTransform(-225.1,182.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_111.setTransform(-234.5,181.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgRIAPAAIAAAMQAAAHgCAGQgCAFgEAFgAgHgfIAAgRIAPAAIAAARg");
	this.shape_112.setTransform(80.3,159.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#006699").s().p("AgOBIQAJgVADgRQADgRAAgRQAAgQgDgRQgDgSgJgTIALAAQAJARAFASQADASAAARQAAATgDARQgFASgJASg");
	this.shape_113.setTransform(75.4,158.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#006699").s().p("AgdAxQgLgHAAgPQAAgKAHgIQAGgHALgDQgKgCgGgIQgFgGAAgKQAAgJAFgHQAEgGAJgEQAJgEAKAAQALAAAJAEQAJAEAEAGQAGAHgBAJQABAKgHAGQgFAIgJACQAKADAHAHQAGAIAAAKQAAAPgMAHQgKAJgTAAQgRAAgMgJgAgUALQgHAGAAAJQAAAKAHAGQAIAFAMAAQANAAAIgFQAHgGAAgKQAAgJgIgGQgHgGgNgBQgMABgIAGgAgRgpQgHAFAAAKQAAAJAHAGQAGAFALABQALgBAIgFQAGgGAAgJQAAgKgGgFQgHgGgMAAQgLAAgGAGg");
	this.shape_114.setTransform(68.6,157.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#006699").s().p("AgcArQgLgPAAgcQAAgcALgPQAKgOASAAQAUAAAJAOQALAPAAAcQAAAcgLAPQgJAPgUAAQgSAAgKgPgAgTgjQgGAMgBAXQABAYAGALQAHAMAMAAQANAAAHgLQAGgMAAgYQAAgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_115.setTransform(59,157.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#006699").s().p("AAEBIQgJgSgEgSQgFgRAAgTQAAgRAFgSQAEgSAJgRIALAAQgJATgEASQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_116.setTransform(52.3,158.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_117.setTransform(44.8,158.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#006699").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_118.setTransform(36.2,158.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_119.setTransform(27.4,158.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#006699").s().p("AAqA5IAAhTIglBTIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_120.setTransform(16,157.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_121.setTransform(0.4,158.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_122.setTransform(-9.3,158.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_123.setTransform(-16.7,157.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_124.setTransform(-24.5,158.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgRIAPAAIAAAMQAAAHgCAGQgCAFgEAFgAgHgfIAAgRIAPAAIAAARg");
	this.shape_125.setTransform(-35.1,159.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#006699").s().p("AgNBIQAIgVADgRQADgRAAgRQAAgQgDgRQgDgSgIgTIAKAAQAJARAFASQADASAAARQAAATgDARQgFASgJASg");
	this.shape_126.setTransform(-40,158.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#006699").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgLQAAgUgZgBIgOAAIAAgJIALAAQALgBAIgFQAGgGAAgKQAAgJgFgFQgGgFgKAAQgPAAgRANIgEgKQAGgGALgEQAJgEAKAAQAQAAAJAHQAKAJAAANQAAAKgGAHQgEAHgJADQALADAEAHQAGAGAAALQAAAPgKAIQgLAJgQAAQgKAAgLgDg");
	this.shape_127.setTransform(-46.9,157.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#006699").s().p("AAEBIQgJgSgEgSQgFgRAAgTQAAgRAFgSQAEgSAJgRIALAAQgJATgEASQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_128.setTransform(-53.5,158.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_129.setTransform(-61,158.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#006699").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_130.setTransform(-69.6,158.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_131.setTransform(-78.4,158.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_132.setTransform(-90.1,158.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAFg");
	this.shape_133.setTransform(-103.1,163);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgRIAPAAIAAAMQAAAHgCAGQgCAFgEAFgAgHgfIAAgRIAPAAIAAARg");
	this.shape_134.setTransform(-106.8,159.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#006699").s().p("AgOBIQAJgVAEgRQACgRAAgRQAAgQgCgRQgEgSgJgTIALAAQAJARAEASQAEASAAARQAAATgEARQgEASgJASg");
	this.shape_135.setTransform(-111.7,158.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#006699").s().p("AgUA2QgLgEgGgGIAFgKQAQAMAQAAQALABAHgHQAHgHAAgLQAAgMgHgHQgGgGgMAAQgPAAgKAMIgJAAIAAhBIBDAAIAAALIg2AAIAAAoQAJgJAPAAQAKAAAIAEQAIAFAEAHQAFAIAAALQAAALgFAIQgFAIgIAFQgJAFgLAAQgKAAgKgEg");
	this.shape_136.setTransform(-118.2,157.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#006699").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgEAKABQAPAAAJAIQAKAHAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_137.setTransform(-128.1,157.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#006699").s().p("AAEBIQgJgSgEgSQgFgRAAgTQAAgRAFgSQAEgSAJgRIALAAQgJATgEASQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_138.setTransform(-134.8,158.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_139.setTransform(-142.3,158.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#006699").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_140.setTransform(-150.9,158.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_141.setTransform(-159.7,158.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#006699").s().p("AApA5IAAhTIgkBTIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_142.setTransform(-171.1,157.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_143.setTransform(-184,158.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_144.setTransform(-190.4,157);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_145.setTransform(-199.7,158.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAFAAADgBIAAALQgFACgFAAQgMAAgFgHg");
	this.shape_146.setTransform(-207.2,157.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_147.setTransform(-214.6,158.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_148.setTransform(-223.8,158.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_149.setTransform(-233.8,157.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_150.setTransform(-7.5,133.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_151.setTransform(-17.2,134.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_152.setTransform(-25.2,133.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_153.setTransform(-35.1,136.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_154.setTransform(-44.4,134.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_155.setTransform(-54.1,134.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_156.setTransform(-60.5,133.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_157.setTransform(-71.3,133.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_158.setTransform(-81,134.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_159.setTransform(-87.5,133.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_160.setTransform(-96.5,134.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_161.setTransform(-108.1,135);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_162.setTransform(-115.6,135);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_163.setTransform(-125.7,134.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_164.setTransform(-135.3,133.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_165.setTransform(-144.9,134.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_166.setTransform(-154.1,136.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_167.setTransform(-163.4,134.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_168.setTransform(-171.2,133.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_169.setTransform(-183.7,133.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_170.setTransform(-193.1,135);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_171.setTransform(-200.6,135);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_172.setTransform(-206.2,135);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_173.setTransform(-213.2,134.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_174.setTransform(-220.9,134.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_175.setTransform(-232.4,134.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_176.setTransform(67,110.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_177.setTransform(53.2,111);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_178.setTransform(43.9,110.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_179.setTransform(34.2,111);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_180.setTransform(22.6,110.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_181.setTransform(9.5,109.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_182.setTransform(2.6,109.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_183.setTransform(-8.1,112.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#006699").s().p("AgOBIQAJgVAEgRQACgRAAgRQAAgQgCgRQgEgRgJgUIAMAAQAIASAEARQAFARAAASQAAASgFASQgEARgIATg");
	this.shape_184.setTransform(-13,110.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_185.setTransform(-19.7,110.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#006699").s().p("AAEBIQgJgTgEgRQgFgSAAgSQAAgSAFgRQAEgRAJgSIALAAQgJAUgEARQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_186.setTransform(-26.2,110.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_187.setTransform(-33.7,111);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#006699").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_188.setTransform(-42.3,111);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_189.setTransform(-51.1,111);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#006699").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_190.setTransform(-62.8,110.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_191.setTransform(-78.6,111.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_192.setTransform(-88.2,111);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_193.setTransform(-95.7,109.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_194.setTransform(-103.4,111);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAGQgCAFgEAGgAgHgfIAAgRIAPAAIAAARg");
	this.shape_195.setTransform(-114.1,112.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#006699").s().p("AgNBIQAIgVADgRQADgRAAgRQAAgQgDgRQgDgRgIgUIALAAQAIASAEARQAFARAAASQAAASgFASQgEARgIATg");
	this.shape_196.setTransform(-119,110.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#006699").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_197.setTransform(-125.7,110.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#006699").s().p("AAEBIQgJgTgEgRQgFgSAAgSQAAgSAFgRQAEgRAJgSIALAAQgJAUgEARQgCARAAAQQAAARACARQAEARAIAVg");
	this.shape_198.setTransform(-132.2,110.8);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#006699").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_199.setTransform(-139.7,111);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#006699").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_200.setTransform(-148.3,111);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#006699").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_201.setTransform(-157.1,111);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#006699").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_202.setTransform(-168.5,109.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_203.setTransform(-184.2,110.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_204.setTransform(-193.9,111);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_205.setTransform(-201.9,109.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_206.setTransform(-211.3,112.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_207.setTransform(-218.2,109.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_208.setTransform(-225.1,111);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_209.setTransform(-234.5,109.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_210.setTransform(97.7,90.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_211.setTransform(91.1,87);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_212.setTransform(81.5,87.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_213.setTransform(72.2,87);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_214.setTransform(62.5,87.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_215.setTransform(54.5,85.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_216.setTransform(40.9,85.3);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_217.setTransform(31.1,87.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_218.setTransform(24.7,85.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_219.setTransform(18.4,87.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgFAIg");
	this.shape_220.setTransform(9.5,85.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_221.setTransform(0.1,87.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_222.setTransform(-8.3,87.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_223.setTransform(-18.3,85.4);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_224.setTransform(-25.2,85.3);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_225.setTransform(-38,87.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_226.setTransform(-45.4,85.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_227.setTransform(-54.5,87.1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_228.setTransform(-61.8,85.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_229.setTransform(-73.4,87);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_230.setTransform(-83.1,87.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_231.setTransform(-89.5,85.4);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_232.setTransform(-96.5,88.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_233.setTransform(-106.1,87.1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_234.setTransform(-115.3,85.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_235.setTransform(-125.1,87.1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_236.setTransform(-134.2,85.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_237.setTransform(-148.5,87.1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_238.setTransform(-158.1,85.3);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_239.setTransform(-167.7,87.1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_240.setTransform(-176.9,88.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_241.setTransform(-190.8,87);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_242.setTransform(-200.4,87.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_243.setTransform(-209.6,85.3);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_244.setTransform(-219.4,87.1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_245.setTransform(-226.3,87);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_246.setTransform(-234.8,87.1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_247.setTransform(80,63.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_248.setTransform(70.3,63.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_249.setTransform(62.3,61.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_250.setTransform(52.9,64.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_251.setTransform(46,61.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_252.setTransform(39.1,63.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_253.setTransform(31.6,62);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_254.setTransform(22.8,67.4);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_255.setTransform(16.3,63.1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_256.setTransform(6.6,63.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_257.setTransform(-4.9,63.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_258.setTransform(-16.9,63.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_259.setTransform(-25.5,63.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_260.setTransform(-34.4,63.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_261.setTransform(-42.4,61.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_262.setTransform(-52.3,64.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_263.setTransform(-61.6,63.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_264.setTransform(-71.3,63.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_265.setTransform(-84.8,63.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_266.setTransform(-94.4,63.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_267.setTransform(-102.4,61.4);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_268.setTransform(-110.7,61.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_269.setTransform(-120.5,63.2);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_270.setTransform(-127.5,63.1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_271.setTransform(-135.2,63.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_272.setTransform(-144.7,64.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_273.setTransform(-154.3,64.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_274.setTransform(-163.6,63.1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_275.setTransform(-172.6,63.2);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_276.setTransform(-184,63.1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_277.setTransform(-198.6,61.4);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_278.setTransform(-208.1,63.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_279.setTransform(-215.6,62);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_280.setTransform(-223,63.1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgLAMQgMAMgWAAQgVAAgMgMg");
	this.shape_281.setTransform(-233.5,61.6);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_282.setTransform(-247.9,233.7);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AALA5IAAgZIgzAAIAAgJIA1hPIALAAIAABOIARAAIAAAKIgRAAIAAAZgAgbAWIAmAAIAAg4g");
	this.shape_283.setTransform(-254.4,228.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_284.setTransform(-247.9,185.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgLQAAgVgaABIgMAAIAAgLIAKAAQALABAHgGQAHgGAAgKQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgHAJgEQALgDAKAAQAPAAAJAIQAKAHgBAOQAAAKgEAHQgFAHgJADQALADAEAGQAGAIAAAKQAAAPgKAJQgKAIgRAAQgLAAgKgEg");
	this.shape_285.setTransform(-254.7,181.1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_286.setTransform(-247.9,114.2);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AgiA5IAAgKIAngsQAIgHAEgHQADgIAAgHQAAgJgFgGQgGgEgJAAQgQgBgQANIgFgKQAHgGAKgEQAKgDAKAAQAPAAAJAHQAKAIAAAOQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_287.setTransform(-254.5,109.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_288.setTransform(-247.9,66.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgfA5IAAgLIAZAAIAAhVIgXAPIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_289.setTransform(-254.1,61.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_290.setTransform(-121.4,276.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_291.setTransform(-186,278.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_292.setTransform(-215.2,277.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_293.setTransform(16.7,252.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_294.setTransform(-10.4,256.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_295.setTransform(-17.6,253.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_296.setTransform(-37.4,254.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_297.setTransform(-87.5,256.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_298.setTransform(-113.3,253.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_299.setTransform(-118.8,252.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_300.setTransform(-137,249.3);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_301.setTransform(-150.4,253.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_302.setTransform(-166.1,254.4);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_303.setTransform(-183.2,254.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAnIA3AAIAAAKIg3AAIAAAqIA6AAIAAALg");
	this.shape_304.setTransform(-191.9,252.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AgDAXIgEgsIAPAAIgDAsg");
	this.shape_305.setTransform(-198.7,249.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_306.setTransform(-216.7,254.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_307.setTransform(-226.5,252.6);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_308.setTransform(-110.6,228.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_309.setTransform(-128.1,230.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_310.setTransform(-139.2,228.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_311.setTransform(-178.9,228.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_312.setTransform(-189.7,228.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_313.setTransform(-198.2,230.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_314.setTransform(-227.6,228.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_315.setTransform(37.8,204.8);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFAAQgMAAgFgHg");
	this.shape_316.setTransform(-9.9,205.4);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_317.setTransform(-21.4,206.6);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGAAQgLAAgGgHg");
	this.shape_318.setTransform(-28.9,205.4);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_319.setTransform(-44.2,206.6);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_320.setTransform(-53.3,204.8);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AgjAxQALgDAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBYQgFANgJAGQgJAHgNACg");
	this.shape_321.setTransform(-76.6,208.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_322.setTransform(-107,206.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_323.setTransform(-113.4,204.8);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_324.setTransform(-119.9,206.6);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_325.setTransform(-128.3,206.6);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_326.setTransform(-192,205.4);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_327.setTransform(-211.4,206.6);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgpA5IAAhxIAtAAQARAAAKAIQAKAJAAAPQAAAPgKAJQgKAHgRAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgFQAGgGABgKQgBgKgGgGQgHgFgMAAIgeAAg");
	this.shape_328.setTransform(-233.8,205);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAGgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_329.setTransform(30.4,183.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIALAAQAIASAEASQAFARAAASQAAASgFASQgEASgIARg");
	this.shape_330.setTransform(25.5,182.5);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#006699").s().p("AgdAyQgLgJAAgOQAAgLAGgHQAHgIALgCQgKgDgGgGQgFgIAAgJQAAgJAFgHQAEgHAJgEQAJgDAKAAQALAAAJADQAJAEAEAHQAFAHABAJQgBAJgFAIQgGAGgKADQAMACAFAIQAHAHAAALQAAAOgLAJQgMAIgSAAQgSAAgLgIgAgUALQgHAFAAAKQAAAKAHAGQAIAFAMAAQANAAAIgFQAHgGAAgKQAAgKgIgFQgIgGgMgBQgLABgJAGgAgSgpQgGAFAAAKQAAAJAGAGQAIAFAKACQAMgCAGgFQAHgGAAgJQAAgKgHgFQgGgFgMAAQgLAAgHAFg");
	this.shape_331.setTransform(18.7,181.1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#006699").s().p("AgdArQgKgPAAgcQAAgcAKgPQALgOASAAQAUAAAKAOQAKAPAAAcQAAAcgKAPQgKAPgUAAQgSAAgLgPgAgTgjQgHAMABAXQgBAYAHALQAGAMANAAQAOAAAGgLQAHgMAAgYQAAgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_332.setTransform(9.1,181.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_333.setTransform(2.4,182.5);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#006699").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_334.setTransform(-13.7,182.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#006699").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_335.setTransform(-33.9,181.1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_336.setTransform(-55.3,182.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAGgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_337.setTransform(-65.9,183.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIALAAQAIASAEASQAFARAAASQAAASgFASQgEASgIARg");
	this.shape_338.setTransform(-70.8,182.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#006699").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgLQAAgVgaABIgNAAIAAgLIALAAQAMABAGgGQAHgGAAgKQAAgJgGgFQgFgFgKAAQgQAAgQANIgEgKQAHgHAJgEQAKgDALAAQAPAAAJAIQAKAHAAAOQgBAKgFAHQgEAHgJADQALADAEAGQAGAIAAAKQAAAPgKAJQgLAIgQAAQgKAAgLgEg");
	this.shape_339.setTransform(-77.7,181.1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_340.setTransform(-84.3,182.5);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#006699").s().p("AgGAoIgihPIAOAAIAaBBIAbhBIANAAIgiBPg");
	this.shape_341.setTransform(-100.4,182.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_342.setTransform(-133.9,186.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAGgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_343.setTransform(-137.6,183.8);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#006699").s().p("AgOBHQAJgTADgSQADgRAAgRQAAgQgDgSQgDgQgJgVIALAAQAJASAFASQADARAAASQAAASgDASQgFASgJARg");
	this.shape_344.setTransform(-142.5,182.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#006699").s().p("AgUA2QgLgEgGgGIAFgLQAPANARABQALgBAHgGQAHgHAAgMQAAgLgHgHQgHgGgLAAQgPAAgKANIgJAAIAAhDIBDAAIAAAMIg2AAIAAAoQAKgJAOAAQAKAAAIAFQAIAEAEAHQAFAJAAAKQAAALgFAIQgFAIgIAFQgJAEgLAAQgKAAgKgDg");
	this.shape_345.setTransform(-149,181.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#006699").s().p("AgiA6IAAgKIAngtQAIgHAEgIQADgHAAgHQAAgKgFgFQgGgEgJgBQgQAAgQAOIgFgKQAHgHAKgEQAKgDAKgBQAPABAJAHQAKAJAAANQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_346.setTransform(-158.9,181);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgSAJgSIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_347.setTransform(-165.6,182.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#006699").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_348.setTransform(-201.9,181.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgjA5IAAhxIBHAAIAAALIg6AAIAAAnIA3AAIAAALIg3AAIAAApIA6AAIAAALg");
	this.shape_349.setTransform(-234.3,181.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_350.setTransform(-34.1,160.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAFgBIAAALQgGACgGAAQgLAAgGgHg");
	this.shape_351.setTransform(-50.6,157.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_352.setTransform(-68.3,156.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_353.setTransform(-75.5,158.8);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_354.setTransform(-94.4,158.8);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_355.setTransform(-103.3,157);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_356.setTransform(-149.5,158.8);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_357.setTransform(-158.5,157);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_358.setTransform(-185.3,158.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHgBQAEAAAEgBIAAALQgEACgHAAQgLAAgGgHg");
	this.shape_359.setTransform(-192.6,157.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_360.setTransform(-200.3,158.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_361.setTransform(-208.7,158.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_362.setTransform(-2.4,134.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_363.setTransform(-16.9,134.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_364.setTransform(-25.9,133.1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_365.setTransform(-37.5,134.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_366.setTransform(-50.6,136);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#006699").s().p("AgOBHQAJgTAEgSQACgRAAgRQAAgQgCgSQgEgQgJgVIALAAQAJATAEARQAEARAAASQAAASgEASQgEASgJARg");
	this.shape_367.setTransform(-55.5,134.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_368.setTransform(-68.7,134.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#006699").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_369.setTransform(-84.8,134.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_370.setTransform(-126.8,134.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#006699").s().p("AgGAsQAGgIAAgGIgHAAIAAgQIAPAAIAAALQAAAHgCAFQgCAGgEAFgAgHgfIAAgQIAPAAIAAAQg");
	this.shape_371.setTransform(-137.5,136);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#006699").s().p("AgNBHQAIgTADgSQADgRAAgRQAAgQgDgSQgDgQgIgVIALAAQAIATAEARQAFARAAASQAAASgFASQgEASgIARg");
	this.shape_372.setTransform(-142.4,134.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#006699").s().p("AAEBHQgJgRgEgSQgFgSAAgSQAAgSAFgRQAEgRAJgTIALAAQgJAVgEAQQgCASAAAQQAAARACARQAEASAIATg");
	this.shape_373.setTransform(-155.6,134.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#006699").s().p("AAqA5IAAhUIglBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_374.setTransform(-191.9,133.3);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_375.setTransform(-207.2,134.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_376.setTransform(-225.4,136.8);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_377.setTransform(-186.9,111);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_378.setTransform(-202.1,111);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_379.setTransform(-213.8,109.8);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_380.setTransform(-220.8,111);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_381.setTransform(-229.4,111);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_382.setTransform(-236.6,109.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_383.setTransform(30.3,87.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_384.setTransform(21.3,85.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_385.setTransform(13.7,85.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_386.setTransform(-71.8,87.1);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_387.setTransform(-80.2,87.1);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_388.setTransform(-92.8,87.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_389.setTransform(-101.8,85.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_390.setTransform(-109.4,85.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_391.setTransform(-120.7,87.1);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_392.setTransform(-129.7,88.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAGgEAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_393.setTransform(-138.9,89);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_394.setTransform(-146,85.9);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_395.setTransform(-157.5,87.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgUIAMgGIAAAaIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_396.setTransform(-165,85.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_397.setTransform(-176.9,85.3);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_398.setTransform(-185.8,87.1);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_399.setTransform(-194.5,87.1);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_400.setTransform(-226.3,87.1);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgkAwQAMgCAFgFQAHgEADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_401.setTransform(-235.1,89);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_402.setTransform(31.2,61.4);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_403.setTransform(4.3,63.2);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_404.setTransform(-5,63.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_405.setTransform(-13,63.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_406.setTransform(-20.4,61.3);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_407.setTransform(-31.5,63.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_408.setTransform(-40.1,63.2);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_409.setTransform(-49,63.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_410.setTransform(-82,63.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_411.setTransform(-110.2,63.2);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_412.setTransform(-117.1,63.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_413.setTransform(-123.4,62);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_414.setTransform(-139.1,63.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_415.setTransform(-152.2,63.2);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_416.setTransform(-161.2,61.4);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_417.setTransform(-168.8,62);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_418.setTransform(-180.1,63.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_419.setTransform(-225.1,63.2);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#000000").s().p("AALA5IAAgZIgzAAIAAgKIA1hOIALAAIAABNIARAAIAAALIgRAAIAAAZgAgbAVIAmAAIAAg2g");
	this.shape_420.setTransform(-254.4,252.8);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_421.setTransform(-247.9,209.8);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#000000").s().p("AgUA3QgKgEgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgKQAAgWgaAAIgMAAIAAgJIAKAAQALgBAHgFQAHgGAAgKQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgGAJgEQALgEAKAAQAPAAAJAHQAKAJgBANQAAAJgEAIQgFAHgJAEQALABAEAIQAGAGAAALQAAAPgKAIQgKAJgRAAQgLAAgKgDg");
	this.shape_422.setTransform(-254.7,205);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_423.setTransform(-247.9,138.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#000000").s().p("AgiA6IAAgKIAngsQAIgIAEgIQADgHAAgHQAAgKgFgEQgGgFgJgBQgQAAgQAOIgFgKQAHgHAKgEQAKgDAKgBQAPAAAJAJQAKAIAAANQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_424.setTransform(-254.5,133.2);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_425.setTransform(-247.9,66.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_289},{t:this.shape_288,p:{y:66.4}},{t:this.shape_287},{t:this.shape_286,p:{x:-247.9}},{t:this.shape_285},{t:this.shape_284,p:{x:-247.9,y:185.9}},{t:this.shape_283},{t:this.shape_282,p:{x:-247.9,y:233.7}},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276,p:{x:-184}},{t:this.shape_275,p:{x:-172.6,y:63.2}},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271,p:{x:-135.2,y:63.2}},{t:this.shape_270,p:{x:-127.5}},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254,p:{x:22.8}},{t:this.shape_253,p:{x:31.6}},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246,p:{x:-234.8,y:87.1}},{t:this.shape_245,p:{x:-226.3,y:87}},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240,p:{x:-176.9,y:88.8}},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234,p:{x:-115.3,y:85.3}},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227,p:{x:-54.5,y:87.1}},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221,p:{x:0.1,y:87.1}},{t:this.shape_220},{t:this.shape_219,p:{x:18.4,y:87.1}},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210,p:{x:97.7,y:90.3}},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201,p:{x:-157.1,y:111}},{t:this.shape_200},{t:this.shape_199,p:{x:-139.7,y:111}},{t:this.shape_198},{t:this.shape_197,p:{x:-125.7,y:110.9}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191,p:{x:-78.6,y:111.1}},{t:this.shape_190,p:{x:-62.8,y:110.9}},{t:this.shape_189,p:{x:-51.1,y:111}},{t:this.shape_188,p:{x:-42.3,y:111}},{t:this.shape_187,p:{x:-33.7,y:111}},{t:this.shape_186},{t:this.shape_185,p:{x:-19.7,y:110.9}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182,p:{x:2.6,y:109.2}},{t:this.shape_181},{t:this.shape_180,p:{x:22.6,y:110.9}},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175,p:{x:-232.4,y:134.8}},{t:this.shape_174,p:{x:-220.9,y:134.9}},{t:this.shape_173,p:{x:-213.2}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167,p:{x:-163.4,y:134.9}},{t:this.shape_166,p:{x:-154.1}},{t:this.shape_165},{t:this.shape_164,p:{x:-135.3,y:133.1}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160,p:{x:-96.5,y:134.8}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156,p:{x:-60.5,y:133.1}},{t:this.shape_155,p:{x:-54.1,y:134.9}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149,p:{y:157.2}},{t:this.shape_148,p:{x:-223.8,y:158.8}},{t:this.shape_147,p:{x:-214.6,y:158.7}},{t:this.shape_146},{t:this.shape_145,p:{x:-199.7,y:158.8}},{t:this.shape_144,p:{x:-190.4,y:157}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141,p:{x:-159.7,y:158.8}},{t:this.shape_140},{t:this.shape_139,p:{x:-142.3,y:158.8}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:-90.1,y:158.7}},{t:this.shape_131,p:{x:-78.4,y:158.8}},{t:this.shape_130},{t:this.shape_129,p:{x:-61,y:158.8}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:-16.7}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:27.4,y:158.8}},{t:this.shape_118,p:{x:36.2,y:158.8}},{t:this.shape_117,p:{x:44.8,y:158.8}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{y:181.1}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:-184.2,y:182.6}},{t:this.shape_104,p:{x:-171.4,y:182.7}},{t:this.shape_103,p:{x:-165.4,y:181}},{t:this.shape_102,p:{x:-156.6,y:182.6}},{t:this.shape_101},{t:this.shape_100,p:{x:-135.3,y:182.7}},{t:this.shape_99,p:{x:-128.8,y:180.9}},{t:this.shape_98,p:{x:-118.8,y:182.7}},{t:this.shape_97,p:{x:-110.4,y:182.7}},{t:this.shape_96,p:{x:-99.1,y:182.6}},{t:this.shape_95,p:{x:-90.1,y:181}},{t:this.shape_94},{t:this.shape_93,p:{x:-75.4,y:182.7}},{t:this.shape_92,p:{x:-68.9,y:180.9}},{t:this.shape_91,p:{x:-62.5,y:182.7}},{t:this.shape_90,p:{x:-53.3,y:182.6}},{t:this.shape_89,p:{x:-39.7,y:182.8}},{t:this.shape_88,p:{x:-30.5,y:182.6}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84,p:{x:8.5,y:182.6}},{t:this.shape_83,p:{x:20,y:182.7}},{t:this.shape_82,p:{x:28.9,y:182.6}},{t:this.shape_81,p:{x:38.2}},{t:this.shape_80},{t:this.shape_79,p:{x:57.7,y:180.9}},{t:this.shape_78},{t:this.shape_77,p:{x:72.4,y:181}},{t:this.shape_76,p:{x:77.7,y:182.6}},{t:this.shape_75,p:{x:82,y:181}},{t:this.shape_74,p:{x:-235.4,y:206.6}},{t:this.shape_73,p:{x:-227,y:206.6}},{t:this.shape_72},{t:this.shape_71,p:{x:-215.2,y:204.9}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:-167.3,y:206.5}},{t:this.shape_65,p:{x:-163,y:204.9}},{t:this.shape_64,p:{x:-157.2,y:206.6}},{t:this.shape_63,p:{x:-144.4,y:206.6}},{t:this.shape_62,p:{x:-135.9,y:206.5}},{t:this.shape_61,p:{x:-129,y:206.6}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-100.4,y:206.5}},{t:this.shape_57,p:{x:-93.8,y:209.8}},{t:this.shape_56,p:{y:228.9}},{t:this.shape_55,p:{x:-225.3,y:230.5}},{t:this.shape_54,p:{x:-216.2,y:228.7}},{t:this.shape_53,p:{x:-208.2,y:230.5}},{t:this.shape_52,p:{x:-198.5,y:230.4}},{t:this.shape_51},{t:this.shape_50,p:{x:-175.4,y:230.6}},{t:this.shape_49},{t:this.shape_48,p:{x:-160.6,y:230.5}},{t:this.shape_47,p:{x:-150.9,y:230.4}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:-115.5}},{t:this.shape_42},{t:this.shape_41,p:{x:-98.3,y:230.5}},{t:this.shape_40,p:{x:-89.7,y:230.5}},{t:this.shape_39,p:{x:-80.1,y:230.4}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:-54.1,y:230.5}},{t:this.shape_35,p:{x:-45.7,y:230.5}},{t:this.shape_34},{t:this.shape_33,p:{x:-31.4,y:230.5}},{t:this.shape_32,p:{x:-25.1,y:228.7}},{t:this.shape_31},{t:this.shape_30,p:{x:-8.9,y:228.7}},{t:this.shape_29,p:{x:6.9,y:230.4}},{t:this.shape_28,p:{x:18.3,y:230.5}},{t:this.shape_27,p:{x:27.3}},{t:this.shape_26,p:{x:36.6,y:230.5}},{t:this.shape_25,p:{x:43.5,y:228.8}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:77.5,y:230.4}},{t:this.shape_20,p:{x:-235.4,y:254.4}},{t:this.shape_19,p:{x:-227,y:254.4}},{t:this.shape_18,p:{x:-215.7,y:254.3}},{t:this.shape_17,p:{x:-204}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:-172.6}},{t:this.shape_13,p:{x:-165.6}},{t:this.shape_12,p:{x:-155.9,y:252.6}},{t:this.shape_11,p:{x:-146.7,y:254.4}},{t:this.shape_10,p:{x:-137,y:254.3}},{t:this.shape_9,p:{x:-130.5,y:257.6}}]}).to({state:[{t:this.shape_289},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_288,p:{y:257.6}},{t:this.shape_111,p:{y:61.6}},{t:this.shape_419},{t:this.shape_276,p:{x:-209.4}},{t:this.shape_40,p:{x:-197.7,y:63.2}},{t:this.shape_79,p:{x:-187.9,y:61.4}},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_104,p:{x:-130.2,y:63.2}},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_147,p:{x:-101,y:63.1}},{t:this.shape_246,p:{x:-91.7,y:63.2}},{t:this.shape_410},{t:this.shape_253,p:{x:-74.7}},{t:this.shape_180,p:{x:-60.6,y:63.1}},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_63,p:{x:15.8,y:63.2}},{t:this.shape_270,p:{x:24.3}},{t:this.shape_402},{t:this.shape_254,p:{x:38.1}},{t:this.shape_401},{t:this.shape_400},{t:this.shape_191,p:{x:-217.1,y:87.2}},{t:this.shape_105,p:{x:-203.6,y:87}},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_175,p:{x:-60.3,y:87}},{t:this.shape_160,p:{x:-46.2,y:87}},{t:this.shape_61,p:{x:-34.6,y:87.1}},{t:this.shape_90,p:{x:-24.9,y:87}},{t:this.shape_164,p:{x:-15.6,y:85.3}},{t:this.shape_103,p:{x:-4.5,y:85.4}},{t:this.shape_88,p:{x:2,y:87}},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_245,p:{x:-193.7,y:110.9}},{t:this.shape_377},{t:this.shape_53,p:{x:-178,y:111}},{t:this.shape_286,p:{x:-171.2}},{t:this.shape_56,p:{y:133.3}},{t:this.shape_376},{t:this.shape_166,p:{x:-216.2}},{t:this.shape_375},{t:this.shape_374},{t:this.shape_201,p:{x:-180.5,y:134.9}},{t:this.shape_118,p:{x:-171.7,y:134.9}},{t:this.shape_199,p:{x:-163.1,y:134.9}},{t:this.shape_373},{t:this.shape_197,p:{x:-149.1,y:134.8}},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_173,p:{x:-118.8}},{t:this.shape_190,p:{x:-105.3,y:134.8}},{t:this.shape_189,p:{x:-93.6,y:134.9}},{t:this.shape_369},{t:this.shape_187,p:{x:-76.2,y:134.9}},{t:this.shape_368},{t:this.shape_185,p:{x:-62.2,y:134.8}},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_76,p:{x:-9.1,y:134.8}},{t:this.shape_362},{t:this.shape_82,p:{x:10.8,y:134.8}},{t:this.shape_95,p:{x:-237.4,y:157.1}},{t:this.shape_58,p:{x:-230.9,y:158.7}},{t:this.shape_182,p:{x:-221.6,y:157}},{t:this.shape_77,p:{x:-214.7,y:157.1}},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_98,p:{x:-177.1,y:158.8}},{t:this.shape_123,p:{x:-166.1}},{t:this.shape_357},{t:this.shape_356},{t:this.shape_52,p:{x:-136.4,y:158.7}},{t:this.shape_89,p:{x:-127,y:158.9}},{t:this.shape_102,p:{x:-115.4,y:158.7}},{t:this.shape_355},{t:this.shape_354},{t:this.shape_66,p:{x:-86.6,y:158.7}},{t:this.shape_353},{t:this.shape_352},{t:this.shape_74,p:{x:-57.4,y:158.8}},{t:this.shape_351},{t:this.shape_275,p:{x:-43.4,y:158.8}},{t:this.shape_350},{t:this.shape_64,p:{x:-25.5,y:158.8}},{t:this.shape_284,p:{x:-19.7,y:162}},{t:this.shape_349},{t:this.shape_282,p:{x:-228.1,y:185.9}},{t:this.shape_81,p:{x:-221.7}},{t:this.shape_210,p:{x:-214.8,y:185.9}},{t:this.shape_348},{t:this.shape_141,p:{x:-190.5,y:182.7}},{t:this.shape_188,p:{x:-181.7,y:182.7}},{t:this.shape_139,p:{x:-173.1,y:182.7}},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_132,p:{x:-120.9,y:182.6}},{t:this.shape_131,p:{x:-109.2,y:182.7}},{t:this.shape_341},{t:this.shape_129,p:{x:-91.8,y:182.7}},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_62,p:{x:-47.3,y:182.6}},{t:this.shape_335},{t:this.shape_119,p:{x:-22.5,y:182.7}},{t:this.shape_334},{t:this.shape_117,p:{x:-5.1,y:182.7}},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_156,p:{x:-227,y:204.8}},{t:this.shape_155,p:{x:-220.6,y:206.6}},{t:this.shape_327},{t:this.shape_271,p:{x:-203.3,y:206.6}},{t:this.shape_326},{t:this.shape_30,p:{x:-184.4,y:204.8}},{t:this.shape_227,p:{x:-175.4,y:206.6}},{t:this.shape_41,p:{x:-163,y:206.6}},{t:this.shape_221,p:{x:-154.6,y:206.6}},{t:this.shape_96,p:{x:-143.3,y:206.5}},{t:this.shape_75,p:{x:-134.3,y:204.9}},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_47,p:{x:-97.8,y:206.5}},{t:this.shape_36,p:{x:-84.9,y:206.6}},{t:this.shape_321},{t:this.shape_84,p:{x:-65.4,y:206.5}},{t:this.shape_320},{t:this.shape_319},{t:this.shape_92,p:{x:-37.7,y:204.8}},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_144,p:{x:-2.3,y:204.8}},{t:this.shape_219,p:{x:6.7,y:206.6}},{t:this.shape_174,p:{x:19.6,y:206.6}},{t:this.shape_39,p:{x:28.5,y:206.5}},{t:this.shape_315},{t:this.shape_148,p:{x:-234.8,y:230.5}},{t:this.shape_314},{t:this.shape_167,p:{x:-216.2,y:230.5}},{t:this.shape_43,p:{x:-207.3}},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_71,p:{x:-175.1,y:228.8}},{t:this.shape_27,p:{x:-168.6}},{t:this.shape_97,p:{x:-159.5,y:230.5}},{t:this.shape_145,p:{x:-146.4,y:230.5}},{t:this.shape_310},{t:this.shape_309},{t:this.shape_100,p:{x:-119.8,y:230.5}},{t:this.shape_308},{t:this.shape_83,p:{x:-101.2,y:230.5}},{t:this.shape_57,p:{x:-95.1,y:233.7}},{t:this.shape_149,p:{y:252.8}},{t:this.shape_307},{t:this.shape_65,p:{x:-222.7,y:252.7}},{t:this.shape_306},{t:this.shape_54,p:{x:-208.1,y:252.6}},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_73,p:{x:-174.6,y:254.4}},{t:this.shape_302},{t:this.shape_50,p:{x:-157.7,y:254.5}},{t:this.shape_301},{t:this.shape_55,p:{x:-143.1,y:254.4}},{t:this.shape_300},{t:this.shape_13,p:{x:-126.5}},{t:this.shape_299},{t:this.shape_298},{t:this.shape_35,p:{x:-106.1,y:254.4}},{t:this.shape_14,p:{x:-98.3}},{t:this.shape_297},{t:this.shape_93,p:{x:-78.7,y:254.4}},{t:this.shape_17,p:{x:-69.5}},{t:this.shape_234,p:{x:-55.9,y:252.6}},{t:this.shape_48,p:{x:-46.7,y:254.4}},{t:this.shape_296},{t:this.shape_33,p:{x:-28.8,y:254.4}},{t:this.shape_295},{t:this.shape_294},{t:this.shape_240,p:{x:-1.2,y:256.1}},{t:this.shape_28,p:{x:7.8,y:254.4}},{t:this.shape_293},{t:this.shape_25,p:{x:27.8,y:252.7}},{t:this.shape_21,p:{x:34.3,y:254.3}},{t:this.shape_26,p:{x:-234.8,y:278.3}},{t:this.shape_99,p:{x:-227.8,y:276.5}},{t:this.shape_32,p:{x:-224,y:276.5}},{t:this.shape_292},{t:this.shape_12,p:{x:-207.6,y:276.5}},{t:this.shape_19,p:{x:-198.6,y:278.3}},{t:this.shape_291},{t:this.shape_91,p:{x:-177.6,y:278.3}},{t:this.shape_29,p:{x:-166.1,y:278.2}},{t:this.shape_18,p:{x:-152,y:278.2}},{t:this.shape_11,p:{x:-140.4,y:278.3}},{t:this.shape_10,p:{x:-130.7,y:278.2}},{t:this.shape_290},{t:this.shape_20,p:{x:-112.5,y:278.3}},{t:this.shape_9,p:{x:-106.6,y:281.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.3,-5.3,370.4,270.2);


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


(lib.btnWideBg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],9.5,-21.4,9.5,18.1).s().p("AqADWIAumrITTAAIguGrgApWCUIANAAIR2AAIALAAIAjlIIyPAAg");
	this.shape.setTransform(15,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],8,-23.7,12,18.2).s().p("ApFCZIAgkxIRrAAIgWExg");
	this.shape_1.setTransform(14.6,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#671D1F").s().p("AIrCkIAVkxIxqAAIggExIgOAAIAilHISPAAIgiFHg");
	this.shape_2.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AiJDWIn3AAIAEgjIAAAAIAQikIA2g1IgrgrIAPiEIHJAAIMKAAIguGrg");
	this.shape_3.setTransform(18.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


(lib.btnWideBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],5,-23.7,9,18.2).s().p("ApjCZIAIheIBFhFIgRgRIAGgFIgrgrIAJhNISnAAIgWExg");
	this.shape.setTransform(11.6,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671D1F").s().p("AJJCkIAVkxIymAAIgJBOIgNgNIAKhXITLAAIgiFHgAp2CkIAKh0IBAhAIARAQIhGBGIgHBeg");
	this.shape_1.setTransform(12.2,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-17.5,-21.4,-17.5,18.1).s().p("AhXDWIjwAAIlXAAIAFgjIgBAAIAQikIA2g1IgrgrIAPiEIIZAAIL2AAIguGrgApchdIAMANIAsAqIgHAGIhAA/IgJB1IANAAISyAAIALAAIAjlIIzLAAg");
	this.shape_2.setTransform(12,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("Ah6DWIjwAAIk0AAIAFgjIgBAAIAQikIA2g1IgrgrIAPiEIEGAAIDwAAIMZAAIguGrg");
	this.shape_3.setTransform(15.5,5.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-21.4,137.7,48.6);


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


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{ended:9});

	// timeline functions:
	this.frame_0 = function() {
		this.gotoAndStop(this.parent.parent.qNum);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// tapir
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(42.9,112.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},8).wait(1));

	// t
	this.instance_1 = new lib.instr1();
	this.instance_1.parent = this;

	this.instance_2 = new lib.instr2();
	this.instance_2.parent = this;

	this.instance_3 = new lib.instr3();
	this.instance_3.parent = this;

	this.instance_4 = new lib.instr4();
	this.instance_4.parent = this;

	this.instance_5 = new lib.instr5();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,422,38.9);


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


(lib.btnHelpEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBGIAPiLIAWAAIAEAIIAOgIIAbAAIAVANIgIBKIgYANIgZAAIgOgIIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape.setTransform(32.4,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB6IAUAAIgCAXg");
	this.shape_1.setTransform(23.6,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_2.setTransform(14.4,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_3.setTransform(1.7,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AI7AAIx1AA");
	this.shape_4.setTransform(13.6,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApKCkIgOAAIAilHISPAAIgiFHIgMAA");
	this.shape_5.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.6)").s().p("AI6DMIyTAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIAklTQABgLAJgHQAIgIAMAAISZAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApEi4QgFADAAAGIgkFSQAAAEACAEIADAEQAAAGAEAEQAFAEAGAAISTAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIyZAAQgGAAgEAEgApBCBIAdkVIRnAAIgdEVgAoxByIRJAAIAbj3IxJAAg");
	this.shape_6.setTransform(15.2,-1.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.4)").s().p("ApZDbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAHhUIAAAAIAcj+QACgRANgMQANgLARAAISZAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApOjDQgJAHgBALIgkFTQAAAIAEAIIACADQABAIAHAHQAIAIANAAISTAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIyZAAQgMAAgIAIgAoxByIAbj3IRIAAIgaD3gAohBjIQsAAIAXjZIwrAAg");
	this.shape_7.setTransform(15.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.2)").s().p("AI6DqIyTAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAHhTIAAAAIAckAQADgXARgPQARgPAXAAISZAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAqKCgQgCANAGAMIACADQADAKAIAIQANANATAAISTAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIyZAAQgRAAgNALQgNAMgCARIgcD+IAAAAgAohBjIAYjZIQrAAIgXDZgAoVBUIQSAAIAUi7IwLAAg");
	this.shape_8.setTransform(15.2,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.8)").s().p("ApZC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIAklSQAAgGAFgDQAEgEAGAAISZAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApBCBIRnAAIAdkVIxnAAg");
	this.shape_9.setTransform(15.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


(lib.btnHelpBm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAyIAIhMIghAAIgJBMIgbAAIAKhjIAXAAIAEAIIAOgIIAYAAIAWANIgJBWg");
	this.shape.setTransform(51.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(39.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_2.setTransform(27.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAHg+IgTAAIACgYIATAAIABgRIAdgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_3.setTransform(17.4,-1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAyIAHhMIggAAIgIBMIgcAAIALhjIAWAAIAEAIIAOgIIAYAAIAWANIgJBWg");
	this.shape_4.setTransform(6.9,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_5.setTransform(-4.9,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BGIAPiLIBKAAIAWANIgEAsIgTAKIAAABIARAJIgGAwIgYAOgAgZAuIAqAAIAEgkIgqAAgAgSgOIAqAAIADgfIgqAAg");
	this.shape_6.setTransform(-17.4,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AI7AAIx1AA");
	this.shape_7.setTransform(13.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApKCkIgOAAIAilHISPAAIgiFHIgMAA");
	this.shape_8.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.6)").s().p("AI6DMIyTAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIAklTQABgLAJgHQAIgIAMAAISZAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApEi4QgFADAAAGIgkFSQAAAEACAEIADAEQAAAGAEAEQAFAEAGAAISTAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIyZAAQgGAAgEAEgApBCBIAdkVIRnAAIgdEVgAoxByIRJAAIAbj3IxJAAg");
	this.shape_9.setTransform(15.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.4)").s().p("ApZDbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAHhUIAAAAIAcj+QACgRANgMQANgLARAAISZAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApOjDQgJAHgBALIgkFTQAAAIAEAIIACADQABAIAHAHQAIAIANAAISTAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIyZAAQgMAAgIAIgAoxByIAbj3IRIAAIgaD3gAohBjIQsAAIAXjZIwrAAg");
	this.shape_10.setTransform(15.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.2)").s().p("AI6DqIyTAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAHhTIAAAAIAckAQADgXARgPQARgPAXAAISZAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAqKCgQgCANAGAMIACADQADAKAIAIQANANATAAISTAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIyZAAQgRAAgNALQgNAMgCARIgcD+IAAAAgAohBjIAYjZIQrAAIgXDZgAoVBUIQSAAIAUi7IwLAAg");
	this.shape_11.setTransform(15.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.8)").s().p("ApZC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIAklSQAAgGAFgDQAEgEAGAAISZAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApBCBIRnAAIAdkVIxnAAg");
	this.shape_12.setTransform(15.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


(lib.btnExecute2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape.setTransform(46.4,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAHg+IgTAAIACgYIATAAIABgRIAdgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_1.setTransform(36.7,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_2.setTransform(26.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVAyIgVgOIAIhHIAYgOIA1AAIgDAXIgwAAIgGA1IAxAAIgDAXg");
	this.shape_3.setTransform(15.4,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_4.setTransform(4.3,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAyIgSgeIgYAeIgdAAIApgyIgegxIAeAAIAQAcIAWgcIAeAAIgoAxIAfAyg");
	this.shape_5.setTransform(-6.7,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBGIAOiLIBTAAIgCAYIg3AAIgDAgIAqAAIgCAXIgrAAIgEAkIA3AAIgCAYg");
	this.shape_6.setTransform(-16.9,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AJZAAIqBAAIowAA");
	this.shape_7.setTransform(10.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApoCkIgOAAIAKh0IBGhFIg4g3IAKhXIIbAAIKwAAIgiFHIgMAA");
	this.shape_8.setTransform(12.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.6)").s().p("AJYDMIzPAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIgggfQgFgFgCgHQgDgHABgGIALhfQABgLAJgHQAIgIAMAAITVAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApii4QgFADAAAGIgLBeIABAHQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAITPAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIzVAAQgGAAgEAEgApfCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8ISjAAIgdEVgAo5heIAvAuQAJAJAAANQAAAMgJAJIhABAIgFA3ISFAAIAbj3IyFAAg");
	this.shape_9.setTransform(12.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.4)").s().p("Ap3DbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAKh7QACgRALgLIAkgjIgVgVQgIgHgDgKQgEgKABgKIALheQACgRANgMQANgLARAAITVAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApsjDQgJAHgBALIgLBfQgBAGADAHQACAHAFAFIAgAfIguAtQgIAIgBALIgLB8QAAAIAEAIIACADQABAIAHAHQAIAIANAAITPAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIzVAAQgMAAgIAIgApPByIAFg3IBAhAQAJgJAAgMQAAgNgJgJIgvguIAFgnISEAAIgaD3gAophjIApApQAOANAAATQAAASgNANIg9A8IgDAiIRoAAIAXjZIxnAAg");
	this.shape_10.setTransform(12.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.2)").s().p("AJYDqIzPAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAKh8QACgVAQgPIAZgZIgLgKQgKgKgEgNQgFgNACgOIAKheQADgXARgPQARgPAXAAITVAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAp2jPQgNAMgCARIgLBeQgBAKAEAKQADAKAIAHIAVAVIgkAjQgLALgCARIgKB7QgCANAGAMIACADQADAKAIAIQANANATAAITPAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIzVAAQgRAAgNALgAo/BjIADgiIA9g8QANgNAAgSQAAgTgOgNIgpgpIACgTIRnAAIgXDZgAn1hFQASASAAAZQAAAYgSARIhFBFIRVAAIAUi7IxHAAg");
	this.shape_11.setTransform(12.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.8)").s().p("Ap3C9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFAEgEIA5g4IgrgqQgDgDgBgDIgBgHIALheQAAgGAFgDQAEgEAGAAITVAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApJhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgGBNISjAAIAdkVIyjAAg");
	this.shape_12.setTransform(12.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-21.4,137.7,48.6);


(lib.btnExecute1 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(48.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AANAyIAIhMIghAAIgIBMIgcAAIAKhjIAXAAIAEAIIAOgIIAYAAIAWANIgJBWg");
	this.shape_1.setTransform(36.3,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_2.setTransform(24.5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrAyIADgXIAyAAIACgQIgcAAIgVgMIADgiIAZgOIA1AAIgDAXIgwAAIgCAPIAcAAIAVAMIgDAjIgZAOg");
	this.shape_3.setTransform(12.9,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOBJIgVgjIgNANIgCAWIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoArIAkA4g");
	this.shape_4.setTransform(2.6,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_5.setTransform(-9.3,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBGIAOiLIAbAAIgKBzIAuAAIgCAYg");
	this.shape_6.setTransform(-20,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AJZAAIqBAAIowAA");
	this.shape_7.setTransform(10.6,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApoCkIgOAAIAKh0IBGhFIg4g3IAKhXIIbAAIKwAAIgiFHIgMAA");
	this.shape_8.setTransform(12.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.6)").s().p("AJYDMIzPAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIgggfQgFgFgCgHQgDgHABgGIALhfQABgLAJgHQAIgIAMAAITVAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApii4QgFADAAAGIgLBeIABAHQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAITPAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIzVAAQgGAAgEAEgApfCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8ISjAAIgdEVgAo5heIAvAuQAJAJAAANQAAAMgJAJIhABAIgFA3ISFAAIAbj3IyFAAg");
	this.shape_9.setTransform(12.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.4)").s().p("Ap3DbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAKh7QACgRALgLIAkgjIgVgVQgIgHgDgKQgEgKABgKIALheQACgRANgMQANgLARAAITVAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApsjDQgJAHgBALIgLBfQgBAGADAHQACAHAFAFIAgAfIguAtQgIAIgBALIgLB8QAAAIAEAIIACADQABAIAHAHQAIAIANAAITPAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIzVAAQgMAAgIAIgApPByIAFg3IBAhAQAJgJAAgMQAAgNgJgJIgvguIAFgnISEAAIgaD3gAophjIApApQAOANAAATQAAASgNANIg9A8IgDAiIRoAAIAXjZIxnAAg");
	this.shape_10.setTransform(12.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.2)").s().p("AJYDqIzPAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAKh8QACgVAQgPIAZgZIgLgKQgKgKgEgNQgFgNACgOIAKheQADgXARgPQARgPAXAAITVAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAp2jPQgNAMgCARIgLBeQgBAKAEAKQADAKAIAHIAVAVIgkAjQgLALgCARIgKB7QgCANAGAMIACADQADAKAIAIQANANATAAITPAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIzVAAQgRAAgNALgAo/BjIADgiIA9g8QANgNAAgSQAAgTgOgNIgpgpIACgTIRnAAIgXDZgAn1hFQASASAAAZQAAAYgSARIhFBFIRVAAIAUi7IxHAAg");
	this.shape_11.setTransform(12.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.8)").s().p("Ap3C9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFAEgEIA5g4IgrgqQgDgDgBgDIgBgHIALheQAAgGAFgDQAEgEAGAAITVAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApJhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgGBNISjAAIAdkVIyjAAg");
	this.shape_12.setTransform(12.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-21.4,137.7,48.6);


(lib.btnClear2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAXIgiAAIgIBMg");
	this.shape.setTransform(38.6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(28.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_2.setTransform(16.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB6IAUAAIgCAXg");
	this.shape_3.setTransform(7.8,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhyIAYgNIA4AAIAWANIgDAdIgcAAIABgSIguAAIgJBdIAuAAIABgSIAcAAIgDAcIgYAOg");
	this.shape_4.setTransform(-2.2,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AI7AAIx1AA");
	this.shape_5.setTransform(13.6,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApKCkIgOAAIAilHISPAAIgiFHIgMAA");
	this.shape_6.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.6)").s().p("AI6DMIyTAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIAklTQABgLAJgHQAIgIAMAAISZAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApEi4QgFADAAAGIgkFSQAAAEACAEIADAEQAAAGAEAEQAFAEAGAAISTAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIyZAAQgGAAgEAEgApBCBIAdkVIRnAAIgdEVgAoxByIRJAAIAbj3IxJAAg");
	this.shape_7.setTransform(15.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.4)").s().p("ApZDbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAHhUIAAAAIAcj+QACgRANgMQANgLARAAISZAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApOjDQgJAHgBALIgkFTQAAAIAEAIIACADQABAIAHAHQAIAIANAAISTAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIyZAAQgMAAgIAIgAoxByIAbj3IRIAAIgaD3gAohBjIQsAAIAXjZIwrAAg");
	this.shape_8.setTransform(15.2,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.2)").s().p("AI6DqIyTAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAHhTIAAAAIAckAQADgXARgPQARgPAXAAISZAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAqKCgQgCANAGAMIACADQADAKAIAIQANANATAAISTAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIyZAAQgRAAgNALQgNAMgCARIgcD+IAAAAgAohBjIAYjZIQrAAIgXDZgAoVBUIQSAAIAUi7IwLAAg");
	this.shape_9.setTransform(15.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.8)").s().p("ApZC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIAklSQAAgGAFgDQAEgEAGAAISZAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApBCBIRnAAIAdkVIxnAAg");
	this.shape_10.setTransform(15.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


(lib.btnClear1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmAyIAIhMIgdAAIgIBMIgbAAIAIhMIgcAAIgIBMIgcAAIALhjIAWAAIAEAIIAPgIIAUAAIAQAKIAUgKIATAAIAWANIgKBWg");
	this.shape.setTransform(40.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(26.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBJIgDgIIgPAIIgaAAIgVgNIAIhKIAYgNIAZAAIAOAIIAFg1IAbAAIgOCRgAgXAyIAkAAIAFg2IgjAAg");
	this.shape_2.setTransform(14.5,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_3.setTransform(2.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2BGIAPiLIBIAAIAWANIgGA+IgZANIgtAAIgFAzgAgSgEIAoAAIAEgpIgoAAg");
	this.shape_4.setTransform(-9.5,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AI7AAIx1AA");
	this.shape_5.setTransform(13.6,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApKCkIgOAAIAilHISPAAIgiFHIgMAA");
	this.shape_6.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.6)").s().p("AI6DMIyTAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIAklTQABgLAJgHQAIgIAMAAISZAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApEi4QgFADAAAGIgkFSQAAAEACAEIADAEQAAAGAEAEQAFAEAGAAISTAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIyZAAQgGAAgEAEgApBCBIAdkVIRnAAIgdEVgAoxByIRJAAIAbj3IxJAAg");
	this.shape_7.setTransform(15.2,-1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.4)").s().p("ApZDbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAHhUIAAAAIAcj+QACgRANgMQANgLARAAISZAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApOjDQgJAHgBALIgkFTQAAAIAEAIIACADQABAIAHAHQAIAIANAAISTAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIyZAAQgMAAgIAIgAoxByIAbj3IRIAAIgaD3gAohBjIQsAAIAXjZIwrAAg");
	this.shape_8.setTransform(15.2,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.2)").s().p("AI6DqIyTAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAHhTIAAAAIAckAQADgXARgPQARgPAXAAISZAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAqKCgQgCANAGAMIACADQADAKAIAIQANANATAAISTAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIyZAAQgRAAgNALQgNAMgCARIgcD+IAAAAgAohBjIAYjZIQrAAIgXDZgAoVBUIQSAAIAUi7IwLAAg");
	this.shape_9.setTransform(15.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.8)").s().p("ApZC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIAklSQAAgGAFgDQAEgEAGAAISZAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApBCBIRnAAIAdkVIxnAAg");
	this.shape_10.setTransform(15.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


(lib.btnBackEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape.setTransform(50.5,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAyIADgXIAyAAIACgQIgcAAIgVgMIADgiIAZgOIA1AAIgDAXIgwAAIgCAPIAcAAIAVAMIgDAjIgZAOg");
	this.shape_1.setTransform(39.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAzIgXgOIAIhJIAagOIApAAIAVAOIgIBJIgYAOgAgTAcIAhAAIAGg2IghAAg");
	this.shape_2.setTransform(28,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCBJIgVgOIANiDIAbAAIgNB6IAUAAIgCAXg");
	this.shape_3.setTransform(19.1,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjBHIgWgOIANhyIAYgNIA4AAIAWANIgDAdIgcAAIABgSIguAAIgJBdIAuAAIABgSIAcAAIgDAcIgYAOg");
	this.shape_4.setTransform(9.1,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEA4IhThSQgCgCAAgDQAAgDACgCIATgTQACgCACAAQAEAAACACIA6A7IA8g7QABgCADAAQADAAACACIATATQACACAAADQAAADgCACIhTBSQgCACgDAAQgCAAgCgCg");
	this.shape_5.setTransform(-13.7,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AI7AAIx1AA");
	this.shape_6.setTransform(13.6,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApKCkIgOAAIAilHISPAAIgiFHIgMAA");
	this.shape_7.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.6)").s().p("AI6DMIyTAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIAklTQABgLAJgHQAIgIAMAAISZAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApEi4QgFADAAAGIgkFSQAAAEACAEIADAEQAAAGAEAEQAFAEAGAAISTAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIyZAAQgGAAgEAEgApBCBIAdkVIRnAAIgdEVgAoxByIRJAAIAbj3IxJAAg");
	this.shape_8.setTransform(15.2,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.4)").s().p("ApZDbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAHhUIAAAAIAcj+QACgRANgMQANgLARAAISZAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApOjDQgJAHgBALIgkFTQAAAIAEAIIACADQABAIAHAHQAIAIANAAISTAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIyZAAQgMAAgIAIgAoxByIAbj3IRIAAIgaD3gAohBjIQsAAIAXjZIwrAAg");
	this.shape_9.setTransform(15.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.2)").s().p("AI6DqIyTAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAHhTIAAAAIAckAQADgXARgPQARgPAXAAISZAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAqKCgQgCANAGAMIACADQADAKAIAIQANANATAAISTAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIyZAAQgRAAgNALQgNAMgCARIgcD+IAAAAgAohBjIAYjZIQrAAIgXDZgAoVBUIQSAAIAUi7IwLAAg");
	this.shape_10.setTransform(15.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.8)").s().p("ApZC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIAklSQAAgGAFgDQAEgEAGAAISZAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApBCBIRnAAIAdkVIxnAAg");
	this.shape_11.setTransform(15.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


(lib.btnBackBm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("submitAns");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgzBGIAPiLIAWAAIAEAIIAOgIIAbAAIAVANIgIBKIgYANIgZAAIgOgIIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape.setTransform(50.7,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_1.setTransform(39,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBBCIgVgNIAHg+IgTAAIACgYIATAAIABgRIAcgPIgDAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_2.setTransform(28.9,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_3.setTransform(18.5,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaBGIAMhzIgmAAIADgYIBmAAIgDAYIglAAIgMBzg");
	this.shape_4.setTransform(7.7,-2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEA4IhThSQgCgCAAgDQAAgDACgCIASgTQADgCADAAQACAAACACIA7A7IA7g7QADgCACAAQADAAADACIASATQACACAAADQAAADgCACIhTBSQgCACgDAAQgCAAgCgCg");
	this.shape_5.setTransform(-14.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFF00").ss(3,2,0,3).p("AI7AAIx1AA");
	this.shape_6.setTransform(13.6,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ApKCkIgOAAIAilHISPAAIgiFHIgMAA");
	this.shape_7.setTransform(15.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.6)").s().p("AI6DMIyTAAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIAklTQABgLAJgHQAIgIAMAAISZAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgApEi4QgFADAAAGIgkFSQAAAEACAEIADAEQAAAGAEAEQAFAEAGAAISTAAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAIyZAAQgGAAgEAEgApBCBIAdkVIRnAAIgdEVgAoxByIRJAAIAbj3IxJAAg");
	this.shape_8.setTransform(15.2,-1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.4)").s().p("ApZDbQgTAAgNgNQgIgIgDgKIgCgDQgGgMACgNIAHhUIAAAAIAcj+QACgRANgMQANgLARAAISZAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgApOjDQgJAHgBALIgkFTQAAAIAEAIIACADQABAIAHAHQAIAIANAAISTAAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAIyZAAQgMAAgIAIgAoxByIAbj3IRIAAIgaD3gAohBjIQsAAIAXjZIwrAAg");
	this.shape_9.setTransform(15.2,-1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.2)").s().p("AI6DqIyTAAQgZAAgSgRQgLgLgEgNIAAgCQgIgPACgRIAHhTIAAAAIAckAQADgXARgPQARgPAXAAISZAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgAqKCgQgCANAGAMIACADQADAKAIAIQANANATAAISTAAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAIyZAAQgRAAgNALQgNAMgCARIgcD+IAAAAgAohBjIAYjZIQrAAIgXDZgAoVBUIQSAAIAUi7IwLAAg");
	this.shape_10.setTransform(15.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.8)").s().p("ApZC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIAklSQAAgGAFgDQAEgEAGAAISZAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgApBCBIRnAAIAdkVIxnAAg");
	this.shape_11.setTransform(15.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg2("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-21.4,131.7,48.6);


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


(lib.mcBtnHelp = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnHelpBm();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHelpBm(), 3);

	this.instance_1 = new lib.btnHelpEn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHelpEn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-24.6,134.1,51.8);


(lib.mcBtnExecute = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnExecute1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnExecute1(), 3);

	this.instance_1 = new lib.btnExecute2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnExecute2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-24.6,140.1,51.8);


(lib.mcBtnClose = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnBackBm();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnBackBm(), 3);

	this.instance_1 = new lib.btnBackEn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnBackEn(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-24.6,134.1,51.8);


(lib.mcBtnClear = function(mode,startPosition,loop) {
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
	this.instance = new lib.btnClear1();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnClear1(), 3);

	this.instance_1 = new lib.btnClear2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnClear2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.4,-24.6,134.1,51.8);


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


(lib.mcNotice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{anim:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
		var _this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			var custom = new createjs.Event("startAct", true, false);
			_this.dispatchEvent(custom);
			_this.gotoAndStop(0);
		}
		this.addEventListener("click", doPlay);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(534.9,399.8,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(8).to({_off:false},0).wait(1));

	// Layer_1
	this.instance = new lib.Symbol3copy();
	this.instance.parent = this;
	this.instance.setTransform(967,315.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:393},7,cjs.Ease.cubicOut).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape.setTransform(-156.2,89);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_1.setTransform(-164.4,89);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(-170.4,87.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_3.setTransform(-175.2,87.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(-182.5,89);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBbIAAhbIANAAIAABxg");
	this.shape_5.setTransform(-193,87.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_6.setTransform(-202.8,89);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_7.setTransform(-214,88.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.498)").s().p("EhANAwrMAAAhhVMCAbAAAMAAABhVg");
	this.shape_8.setTransform(402,302.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.9,73.6,73.3,25.9);


(lib.mcHelp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"anim":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
		var _this = this;
		//this.mcInstruction.gotoAndStop(_this.parent.qNum);
		function onClose(e){
			_this.gotoAndStop(0);
			var myContainer = document.getElementById("dom_overlay_container");
			var divBlockly = document.getElementById("blocklyDiv");
			myContainer.style.display = "block";
			divBlockly.style.display = "block";
			_this.mcInstruction.gotoAndStop("end");
		}
		this.btnClose.addEventListener("click", onClose);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// Layer_3
	this.btnClose = new lib.mcBtnClose();
	this.btnClose.name = "btnClose";
	this.btnClose.parent = this;
	this.btnClose.setTransform(392.6,526.5,1,1,0,0,0,15.6,1.3);
	this.btnClose._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btnClose).wait(8).to({_off:false},0).wait(1));

	// Layer_4
	this.mcInstruction = new lib.Symbol5();
	this.mcInstruction.name = "mcInstruction";
	this.mcInstruction.parent = this;
	this.mcInstruction.setTransform(405.1,164.1);
	this.mcInstruction._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcInstruction).wait(8).to({_off:false},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgzBGIAPiLIAWAAIAEAHIAOgHIAbAAIAVANIgIBKIgYAOIgZAAIgOgJIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape.setTransform(-127.8,44);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgCBJIgVgNIANiEIAbAAIgNB6IAUAAIgCAXg");
	this.shape_1.setTransform(-136.5,39.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgXAzIgVgOIAHhJIAZgNIAkAAIAVANIgFAuIg2AAIgCARIA3AAIgDAYgAgMgJIAbAAIACgRIgbAAg");
	this.shape_2.setTransform(-145.7,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAUBGIAGg8Ig2AAIgGA8IgcAAIAPiLIAcAAIgGA4IA2AAIAGg4IAcAAIgPCLg");
	this.shape_3.setTransform(-158.4,40.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgUAyIgWgNIAHhIIAZgOIA1AAIgCAYIgxAAIgFA0IAwAAIgCAXg");
	this.shape_4.setTransform(-170.7,42.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAmAzIAIhNIgdAAIgIBNIgaAAIAIhNIgeAAIgIBNIgbAAIALhkIAWAAIAEAHIAPgHIATAAIARALIAUgLIATAAIAWANIgKBXg");
	this.shape_5.setTransform(-184.7,42);

	this.instance = new lib.instrPanel("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(370.8,793.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({x:409.8,y:357.4},7,cjs.Ease.quartOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.8,23.8,76,32.6);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myX = 474;
		var myY = 191;
		var myR = 52;
		var myB = 95;
		var myContainer = document.getElementById("dom_overlay_container");
		var divEditor = document.getElementById("blocklyDiv");
		var myScale = myContainer.offsetWidth/800;
		console.log(myContainer.offsetWidth);
		console.log(myScale);
		divEditor.style.position = "absolute";
		divEditor.style.left = myX * myScale + "px";
		divEditor.style.top = myY * myScale + "px";
		divEditor.style.right = myR * myScale + "px";
		divEditor.style.bottom = myB * myScale + "px";
		divEditor.style.display = "block";
		
		var someText;
		var txtArea = document.createElement("textarea");
		var txtCode = "//type your program here";
		t = document.createTextNode(txtCode);
		txtArea.id = "txt_area";
		txtArea.appendChild(t);
		//
		//$("#blocklyDiv").clear();
		divEditor.appendChild(txtArea);
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				divEditor.style.left = myX * myScale + "px";
				divEditor.style.top = myY * myScale + "px";
				divEditor.style.right = myR * myScale + "px";
				divEditor.style.bottom = myB * myScale + "px";
			}, 1000);
		});
		var editor = CodeMirror.fromTextArea(txtArea, {
		            lineNumbers: true,
		            lineWrapping: true,
		            styleActiveLine: true,
		            autoRefresh:true,
		            mode:  "javascript"
		            });
		divEditor.style.pointerEvents = "auto";
		function setup__tutorial_stage_1()
		{
		    console.log("setup_stage_1");
		    map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "01", "01", "01", "01", "01", "01", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      ];
		
		    lamp_object_x = [0, 0, 6];
		    lamp_object_y = [7, 1, 1];
		    lamp_object_z = [4, 4, 4];
		
		    character_position_x = 1;
		    character_position_y = 3;
		    character_position_z = 2;
		
		    endGame_position_x = 7;
		    endGame_position_y = 3;
		    endGame_position_z = 2;
		
		    character_facing_direction = 90;
		    bIsTutorial = true;
		
		    tutorial_start_count = 0;
		
		}
		function setup__tutorial_stage_2()
		{
		    console.log("setup_stage_1");
		    map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "01", "01", "01", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "01", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "01", "01", "01", "01", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      ];
		
		    lamp_object_x = [0, 0, 6];
		    lamp_object_y = [7, 1, 1];
		    lamp_object_z = [4, 4, 4];
		
		    character_position_x = 1;
		    character_position_y = 3;
		    character_position_z = 2;
		
		    endGame_position_x = 7;
		    endGame_position_y = 5;
		    endGame_position_z = 2;
		
		    character_facing_direction = 90;
		    bIsTutorial = true;
		
		    tutorial_start_count = 0;
		}
		
		function setup__tutorial_stage_3()
		{
		    console.log("setup_stage_1");
		    map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "01", "01", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["01", "01", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "01", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "01", "01", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      ];
		
		    lamp_object_x = [0, 0, 6];
		    lamp_object_y = [7, 1, 1];
		    lamp_object_z = [4, 4, 4];
		
		    character_position_x = 0;
		    character_position_y = 8;
		    character_position_z = 0;
		
		    endGame_position_x = 7;
		    endGame_position_y = 2;
		    endGame_position_z = 0;
		
		    character_facing_direction = 90;
		    bIsTutorial = true;
		
		    tutorial_start_count = 0;
		}
		
		function setup__tutorial_stage_4()
		{
		    console.log("setup_stage_1");
		    map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "01", "01", "01", "01", "01", "00", "00"], 
		                        ["00", "00", "01", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "01", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "01", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "01", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      ];
		
		    lamp_object_x = [0, 0, 6];
		    lamp_object_y = [7, 1, 1];
		    lamp_object_z = [4, 4, 4];
		
		    character_position_x = 2;
		    character_position_y = 6;
		    character_position_z = 2;
		
		    endGame_position_x = 6;
		    endGame_position_y = 6;
		    endGame_position_z = 2;
		
		    character_facing_direction = 0;
		    bIsTutorial = true;
		
		    tutorial_start_count = 0;
		
		}
		
		function setup_stage_1()
		{
		    console.log("setup_stage_1");
		    map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["51", "51", "51", "51", "51", "51", "51", "00", "00"], 
		                        ["51", "31", "31", "31", "31", "31", "51", "11", "00"], 
		                        ["51", "31", "31", "31", "31", "31", "13", "12", "00"], 
		                        ["51", "31", "31", "31", "31", "31", "31", "00", "00"], 
		                        ["51", "31", "31", "31", "31", "31", "31", "00", "00"], 
		                        ["51", "51", "31", "31", "31", "51", "51", "51", "00"], 
		                        ["51", "51", "51", "51", "51", "51", "51", "00", "00"], 
		                        ["51", "00", "51", "00", "51", "51", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["51", "51", "01", "01", "01", "51", "51", "00", "00"], 
		                        ["51", "00", "46", "45", "00", "00", "51", "00", "00"], 
		                        ["01", "42", "00", "00", "00", "43", "00", "00", "00"], 
		                        ["01", "41", "00", "00", "00", "00", "44", "00", "00"], 
		                        ["01", "00", "44", "00", "00", "00", "00", "00", "00"], 
		                        ["51", "00", "00", "00", "00", "00", "51", "00", "00"], 
		                        ["51", "51", "01", "01", "01", "51", "51", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["51", "01", "00", "00", "00", "01", "51", "00", "00"], 
		                        ["01", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["01", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                        ["51", "01", "00", "00", "00", "01", "51", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["01", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["01", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      ];
		
		    lamp_object_x = [0, 0, 6];
		    lamp_object_y = [7, 1, 1];
		    lamp_object_z = [4, 4, 4];
		
		    character_position_x = 6;
		    character_position_y = 7;
		    character_position_z = 4;
		
		    endGame_position_x = 6;
		    endGame_position_y = 1;
		    endGame_position_z = 4;
		
		    character_facing_direction = 0;
		    bIsTutorial = false;
		
		    tutorial_start_count = 0;
		
		}
		
		function setup_stage_2()
		{
		    map_path_array = [
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "51", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["51", "01", "51", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "01", "01", "01", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["51", "01", "62", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["64", "00", "61", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "11", "51", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["51", "01", "01", "01", "00", "00", "00", "01", "00", "00", "00", "00", "00", "00"], 
		                          ["63", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "31", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "01", "01", "13", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["01", "01", "00", "21", "64", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["62", "00", "00", "00", "00", "00", "00", "00", "01", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["11", "01", "00", "00", "00", "31", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["51", "01", "00", "00", "01", "46", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["51", "01", "01", "00", "00", "21", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "01", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["12", "01", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["21", "00", "31", "31", "01", "31", "31", "13", "31", "00", "00", "00", "00", "00"], 
		                          ["61", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["65", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "01", "01", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["51", "01", "00", "00", "00", "00", "00", "00", "12", "01", "01", "01", "01", "00"], 
		                          ["12", "01", "13", "00", "00", "00", "01", "01", "01", "01", "31", "31", "00", "00"], 
		                          ["22", "00", "00", "00", "01", "00", "00", "00", "00", "01", "12", "00", "00", "00"], 
		                          ["00", "00", "42", "45", "00", "44", "43", "22", "06", "01", "51", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "01", "01", "01", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "01", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "11", "01", "01", "01", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "51", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"],
		                          ["00", "01", "00", "00", "00", "00", "00", "00", "00", "31", "13", "11", "01", "00"], 
		                          ["64", "00", "00", "00", "00", "00", "00", "01", "22", "00", "00", "00", "00", "00"],
		                          ["21", "00", "21", "11", "01", "01", "00", "00", "00", "00", "45", "46", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "21", "00", "00", "00"],
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "61", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "21", "00", "00", "00", "01", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "62", "00", "00", "00", "00", "00", "00", "00", "31", "00", "00", "01", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "01", "00", "46", "21", "22", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "22", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "08", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "01", "00", "00", "01", "01", "01", "01", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "01", "00", "41", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                        [
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "09", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "01", "01", "00", "01", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                          ["00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      ];
		
		    character_position_x = 1;
		    character_position_y = 13;
		    character_position_z = 0;
		
		    endGame_position_x = 10;
		    endGame_position_y = 1;
		    endGame_position_z = 9;
		    character_facing_direction = 0;
		    bIsTutorial = false;
		
		    tutorial_start_count = 0;
		
		}
		
		function setup_stage_3()
		{
		    console.log("setup_stage_3");
		    map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "13", "01", "01", "00"], 
		                        ["01", "51", "00", "00", "00", "01", "01", "51", "00"], 
		                        ["01", "01", "01", "00", "00", "51", "11", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "31", "00", "00"], 
		                        ["51", "00", "00", "00", "01", "00", "00", "01", "00"], 
		                        ["01", "01", "11", "00", "31", "45", "00", "00", "00"], 
		                        ["00", "64", "00", "31", "01", "00", "00", "61", "00"], 
		                        ["00", "00", "00", "01", "01", "65", "21", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "01", "01", "00"], 
		                        ["00", "00", "00", "00", "31", "00", "46", "01", "00"], 
		                        ["62", "01", "01", "31", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "21", "01", "44", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "45", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "12", "01", "00"], 
		                        ["00", "00", "01", "00", "51", "00", "00", "00", "00"], 
		                        ["00", "51", "01", "01", "43", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "41", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "01", "01", "01", "01", "01", "01", "00"], 
		                        ["00", "01", "31", "31", "01", "00", "21", "00", "00"], 
		                        ["00", "01", "00", "01", "01", "00", "00", "00", "00"], 
		                        ["00", "63", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "46", "44", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                    ];
		
		    character_position_x = 2;
		    character_position_y = 8;
		    character_position_z = 0;
		
		    endGame_position_x = 4;
		    endGame_position_y = 3;
		    endGame_position_z = 4;
		
		    character_facing_direction = 0;
		    bIsTutorial = false;
		
		    tutorial_start_count = 0;
		
		}
		function setup_stage_4()
		{
		  console.log("setup_stage_4");
		  map_path_array = [
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "01", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "51", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "11", "01", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "01", "00", "00", "00", "00", "00"], 
		                        ["00", "31", "31", "31", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "31", "01", "00"], 
		                        ["00", "31", "00", "00", "00", "00", "31", "00", "00"], 
		                        ["00", "01", "01", "00", "00", "00", "31", "01", "00"], 
		                        ["51", "64", "01", "12", "01", "00", "00", "01", "00"], 
		                        ["00", "22", "00", "01", "01", "51", "00", "51", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["01", "51", "01", "00", "01", "51", "01", "01", "00"], 
		                        ["01", "41", "46", "44", "00", "01", "13", "01", "00"], 
		                        ["01", "01", "01", "00", "00", "00", "43", "00", "00"], 
		                        ["51", "45", "01", "01", "00", "01", "44", "00", "00"], 
		                        ["01", "00", "00", "01", "01", "51", "00", "00", "00"], 
		                        ["65", "00", "00", "21", "00", "01", "01", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "63", "01", "62", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "01", "00", "00", "00", "01", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "22", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["01", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "01", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                      [
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"], 
		                        ["00", "00", "00", "00", "00", "00", "00", "00", "00"]],
		                    ];
		
		    lamp_object_x = [];
		    lamp_object_y = [];
		    lamp_object_z = [];
		
		    character_position_x = 6;
		    character_position_y = 8;
		    character_position_z = 2;
		
		    endGame_position_x = 1;
		    endGame_position_y = 2;
		    endGame_position_z = 3;
		    character_facing_direction = 0;
		    bIsTutorial = false;
		
		    tutorial_start_count = 0;
		   
		}
		
		var map_object_array;
		var map_path_array;
		
		var character_position_x;
		var character_position_y;
		var character_position_z;
		var character_object;
		var lamp_object_x;
		var lamp_object_y;
		var lamp_object_z;
		
		var bIsMoving = false;
		var bIsTutorial = false;
		
		var endGame_position_x;
		var endGame_position_y;
		var endGame_position_z;
		
		var map_group;
		var gamepad_group;
		var instruction_group;
		var instruction_popout_group;
		var instruction_count_group;
		var cognitive_group;
		
		var isoGroup;
		var player;
		var player_direction;
		var player_direction_group;
		var water = [];
		
		this.qNum = 1;
		
		var steps_used = 0;
		var move_count = 0;
		var current_level = 0;
		var current_quest = 0;
		var quests_array = [];
		
		var gamepad_button_delete;
		var command_list = new Array();
		
		var map_spawn = false;
		
		// setup grid size
		// isometric
		var tile_asset = "cube33_35";
		var player_asset = "character_facing_direction";  // tiles
		var tile_height = 28;
		var tile_size = 28;
		var player_tile_height = 31; // 18.5 * 1.5
		
		// 2D
		var x_grid = 6;
		var y_grid = 5;
		var x_size = 100;
		var y_size = 100;
		var x_gapSize = 0;
		var y_gapSize = 0;
		var x_side_gap = (800 - (x_size * x_grid)) / 2;
		var y_side_gap = (520 - (y_size * y_grid)) / 2;
		
		var character_facing_direction;
		var character_animation;
		var folder_text_style = {font: "15pt Arial", align: "left", fill: "#FFFFFF"};
		
		game = new Phaser.Game(800, 600, Phaser.AUTO, 'dom_overlay_container', { preload: preload, create: create, update: cognitive_update }, true);
		function preload()
		{
		    /*game.load.image('black_panel_image', 'assets/asset_not_patched/black_panel.png');
		
		    game.load.image('red_path', 'assets/cognitive/red_path.png');
		    game.load.image('blue_path', 'assets/cognitive/blue_path.png');
		    game.load.image('green_path', 'assets/cognitive/green_path.png');
		    game.load.image('yellow_path', 'assets/cognitive/yellow_path.png');
		    game.load.image('spaceship', 'assets/cognitive/spaceship.png');*/
			game.load.atlas('astronout_anim', 'assets_packer/packer/texture_packer/astronout_anim.png', 'assets_packer/packer/texture_packer/astronout_anim.json');
			game.load.atlas('character_facing_direction', 'assets_packer/packer/texture_packer/character_facing_direction.png', 'assets_packer/packer/texture_packer/character_facing_direction.json');
			game.load.atlas('cognitive_secondary', 'assets_packer/packer/texture_packer/cognitive_secondary.png', 'assets_packer/packer/texture_packer/cognitive_secondary.json');
		    
		    game.load.image('cube', 'assets/cognitive_secondary/cube2.png');
		    game.load.image('cube30', 'assets/cognitive_secondary/cube_30.png');
		    game.load.image('cube33', 'assets/cognitive_secondary/cube_33.png');
		    game.load.image('cube33_35', 'assets/cognitive_secondary/cube_33_35.png');
		    game.load.image('cube35', 'assets/cognitive_secondary/cube_35.png');
		
		    game.load.image('a_1', 'assets/cognitive_secondary/walking_qube/a_1.png');
		    game.load.image('a_2', 'assets/cognitive_secondary/walking_qube/a_2.png');
		    game.load.image('a_3', 'assets/cognitive_secondary/walking_qube/a_3.png');
		    game.load.image('a_4', 'assets/cognitive_secondary/walking_qube/a_4.png');
		    game.load.image('a_5', 'assets/cognitive_secondary/walking_qube/a_5.png');
		    game.load.image('a_6', 'assets/cognitive_secondary/walking_qube/a_6.png');
		    game.load.image('a_7', 'assets/cognitive_secondary/walking_qube/a_7.png');
		    game.load.image('a_8', 'assets/cognitive_secondary/walking_qube/a_8.png');
		    game.load.image('a_9', 'assets/cognitive_secondary/walking_qube/a_9.png');
		    game.load.image('a_10', 'assets/cognitive_secondary/walking_qube/a_10.png');
		
		    // tiles objects
		    game.load.image('block_01_qube', 'assets/cognitive_secondary/block_qube/block_01_qube.png');
		    game.load.image('block_02_qube', 'assets/cognitive_secondary/block_qube/block_02_qube.png');
		    game.load.image('block_03_qube', 'assets/cognitive_secondary/block_qube/block_03_qube.png');
		
		    game.load.image('block_01_block', 'assets/cognitive_secondary/block_qube/block_01_block.png');
		    game.load.image('block_02_block', 'assets/cognitive_secondary/block_qube/block_02_block.png');
		
		    game.load.image('qube_lava_base', 'assets/cognitive_secondary/lava_qube/qube_lava_base.png');
		
		    game.load.image('qube_lava_01', 'assets/cognitive_secondary/lava_qube/qube_lava_01.png');
		    game.load.image('qube_lava_02', 'assets/cognitive_secondary/lava_qube/qube_lava_02.png');
		    game.load.image('qube_lava_03', 'assets/cognitive_secondary/lava_qube/qube_lava_03.png');
		    game.load.image('qube_lava_04', 'assets/cognitive_secondary/lava_qube/qube_lava_04.png');
		    game.load.image('qube_lava_05', 'assets/cognitive_secondary/lava_qube/qube_lava_05.png');
		    game.load.image('qube_lava_06', 'assets/cognitive_secondary/lava_qube/qube_lava_06.png');
		
		    game.load.image('crystal_qube', 'assets/cognitive_secondary/crystal_qube/crystal_qube.png');
		
		    game.load.image('crystal_01_crystal', 'assets/cognitive_secondary/crystal_qube/crystal_01_crystal.png');
		    game.load.image('crystal_02_crystal', 'assets/cognitive_secondary/crystal_qube/crystal_02_crystal.png');
		    game.load.image('crystal_03_crystal', 'assets/cognitive_secondary/crystal_qube/crystal_03_crystal.png');
		    game.load.image('crystal_04_crystal', 'assets/cognitive_secondary/crystal_qube/crystal_04_crystal.png');
		    game.load.image('crystal_05_crystal', 'assets/cognitive_secondary/crystal_qube/crystal_05_crystal.png');
		
		    // ----------
		    game.load.image('cognitive_spaceship_smokes', 'assets/cognitive_secondary/spaceship_smokes.png');
		    game.load.image('cognitive_spaceship', 'assets/cognitive_secondary/spaceship.png');
		
		    // cube start and end
		    game.load.image('cube_start', 'assets/cognitive_secondary/cube_start.png');
		    game.load.image('cube_end', 'assets/cognitive_secondary/cube_end.png');
		    game.load.image('cube_end_light', 'assets/cognitive_secondary/cube_end_light.png');
		    game.load.image('btn_execute', 'assets/cognitive_secondary/btn_execute.png');
		    game.load.image('btn_clear', 'assets/cognitive_secondary/btn_clear.png');
		    
		    // ----------
		    game.load.image('tile', 'assets/cognitive_secondary/tile.png');
		    game.load.atlas('end_light_anim', 'assets/cognitive_secondary/light/end_light_anim.png', 'assets/cognitive_secondary/light/end_light_anim.json');
		
		    // character_facing_direction
		    game.load.atlas('character_facing_direction', 'assets/cognitive_secondary/character_facing_direction.png', 'assets/cognitive_secondary/character_facing_direction.json');
		    game.time.advancedTiming = true;
		    game.debug.renderShadow = false;
		    game.stage.disableVisibilityChange = true;
		
		    game.plugins.add(new Phaser.Plugin.Isometric(game));
		
		    game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
		    //game.iso.anchor.setTo(0.31, 0.43);
		}
		
		function cognitive_init()
		{
		    game.time.advancedTiming = true;
		    game.debug.renderShadow = false;
		    game.stage.disableVisibilityChange = true;
		
		    game.plugins.add(new Phaser.Plugin.Isometric(game));
		
		    game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
		    //game.iso.anchor.setTo(0.4, 0.4);
			cognitive_create(1);
		}
		function tiles_name(array_number)
		{
		    var tile;
		    switch(array_number)
		    {
		        // 10 block
		        case "11" : tile = "block_01_qube"; break;
		        case "12" : tile = "block_02_qube"; break;
		        case "13" : tile = "block_03_qube"; break;
		
		        // 20 block topping
		        case "21" : tile = "block_01_block"; break;
		        case "22" : tile = "block_02_block"; break;
		
		        // 30 lava
		        case "31" : tile = "qube_lava_base"; break;
		
		        // 40 lava topping
		        case "41" : tile = "qube_lava_01"; break;
		        case "42" : tile = "qube_lava_02"; break;
		        case "43" : tile = "qube_lava_03"; break;
		        case "44" : tile = "qube_lava_04"; break;
		        case "45" : tile = "qube_lava_05"; break;
		        case "46" : tile = "qube_lava_06"; break;
		
		        // 50 crystal
		        case "51" : tile = "crystal_qube"; break;
		
		        // 60 crystal topping
		        case "61" : tile = "crystal_01_crystal"; break;
		        case "62" : tile = "crystal_02_crystal"; break;
		        case "63" : tile = "crystal_03_crystal"; break;
		        case "64" : tile = "crystal_04_crystal"; break;
		        case "65" : tile = "crystal_05_crystal"; break;
		    }
		
		    return tile;
		}
		function split_movement()
		{
		    command_list = [];
		    var final_move = "";
		    var arr = someText.split(';');
		    for(var i = 0; i < arr.length - 1; i++)
		    {
		        console.log(arr[i]);
		        var type = arr[i].split("(");
		        if(type[0] == "turn")
		        {
		            steps_used++;
		            var turnCount = 0;
		            var turnValue = parseInt(type[1])
		            if(turnValue > 0)
		            {
		                do{   
		                    turnValue -= 90;
		                    turnCount++;
		                    command_list.push("turn_right");
		                    final_move += (type[0] + "(90)\n");
		                } while(turnValue > 0)
		            }
		            else if(turnValue < 0)
		            {
		                do{   
		                    turnValue += 90;
		                    turnCount++;
		                    command_list.push("turn_left");
		                    final_move += (type[0] + "(-90)\n");
		                } while(turnValue < 0)
		            }
		        }
		        else if(type[0] == "move")
		        {
		            for(var j = 0; j < parseInt(type[1]); j++)
		            {
		                steps_used++;
		                command_list.push("move");
		                final_move += (type[0] + "()\n");
		            }
		        }
		        else if(type[0] == "jump")
		        {
		            steps_used++;
		            command_list.push("jump");
		            final_move += (type[0] + "()\n");
		        }
		    }
		    start_moving();
		    console.log("final_move : " + final_move);
		}
		function start_moving()
		{
		    bIsMove = false;
		    console.log("start_moving");
		
		    if(player_direction_group != null)
		    {
		        player_direction_group.destroy();
		    }
		
		    if(character_facing_direction == 0 || character_facing_direction == 360)
		    {
		        player.animations.play('idle_0');
		        character_facing_direction = 0;
		    }
		    else if(character_facing_direction == 90 || character_facing_direction == -270)
		    {
		        player.animations.play('idle_90');
		        character_facing_direction = 90;
		    }
		    else if(character_facing_direction == 180 || character_facing_direction == -180)
		    {
		        player.animations.play('idle_180');
		        character_facing_direction = 180;
		    }
		    else if(character_facing_direction == 270 || character_facing_direction == -90)
		    {
		        player.animations.play('idle_270');
		        character_facing_direction = 270;
		    }
		
		    if(command_list.length != 0)
		    {
		        bIsMoving = true;
		        if(command_list[0] == "move")
		        {
		            move_character();
		        }
		        else if(command_list[0] == "jump")
		        {
		            jump_character();
		        }
		        else if(command_list[0] == "turn_left")
		        {
		            rotate_character_left();
		        }
		        else if(command_list[0] == "turn_right")
		        {
		            rotate_character_right();
		        }
		    }
		    else
		    {
		        bIsMoving = false;
		        command_list = [];
		
		        reset();
		
		        var playerX = player.isoX;
		        var playerY = player.isoY;
		        var playerZ = player.isoZ;
		
		        player_direction_group = game.add.group();
		
		        var temp_str = ("arrow_" + character_facing_direction + ".png");
		        player_direction = game.add.isoSprite((character_position_x * tile_size), (character_position_y * tile_size), ((character_position_z + 2)* tile_height), player_asset, 0, player_direction_group);
		        player_direction.frameName = temp_str;
		        player_direction.anchor.set(0.5, 0);
		
		        if(character_position_x == endGame_position_x && character_position_y == endGame_position_y && character_position_z == endGame_position_z)
		        {
		            if(!bIsTutorial)
		            {
		                calcScore();
		            }
		            document.getElementById("blocklyDiv").style.display = "none";
		            getNextMap();
		        }
		    }
		}
		function cognitive_create(level_index)
		{
		    cognitive_start(level_index);    
		    reset();
			move_count = 0;
			_this.txtTries.text = "0";
		    document.getElementById("blocklyDiv").style.display = "block";
		    //blockly_create();
		}
		function cognitive_update()
		{
		    if(map_spawn)
		    {
		        // Our collision and sorting code again.
		        game.physics.isoArcade.collide(isoGroup);
		        game.iso.simpleSort(isoGroup);
		        if(unsorted)
		        {
		            //console.log("unsorted");
		            game.iso.simpleSort(isoGroup);
		            // game.iso.topologicalSort(isoGroup);
		            unsorted = false;
		        }
		    }
		}
		
		function cognitive_start(stage_selected)
		{
		    lamp_object_x = [];
		    lamp_object_y = [];
		    lamp_object_z = [];
		
		    current_level = stage_selected;
		    move_count = 0;
		    steps_used = 0;
		
		    var number;
		    switch(stage_selected)
		    {
		        case 1: setup__tutorial_stage_1(); break;
		        case 2: setup__tutorial_stage_2(); break;
		        case 3: setup__tutorial_stage_3(); break;
		        case 4: setup__tutorial_stage_4(); break;
		        case 5: setup_stage_1(); break;
		        case 6: setup_stage_3(); break;
		        case 7: setup_stage_4(); break;
		    }
		    is_dialogue_open = false;
		    map_spawn = false;
		    generate_map();
		    // instruction_create();
		}
		
		var unsorted = false;
		
		function move_character()
		{
		    command_list.splice(0, 1);
		
		    var playerX = player.isoX;
		    var playerY = player.isoY;
		    var playerZ = player.isoZ;
		    var startween;
		    var bIsMove = false;
		
		    console.log("playerX 4 : " + playerX);
		    console.log("playerY 4 : " + playerY);
		    console.log("playerZ 4 : " + playerZ);
		
		    var movingSpeed = 500;
		    var jumpSpeed_1 = 300;
		    var jumpSpeed_2 = 300;
		    var moveDownSpeed_1 = 300;
		    var moveDownSpeed_2 = 300;
		
		    if(character_facing_direction == 0 || character_facing_direction == 360)
		    {
		        if((character_position_y > 0 && character_position_z > 0)&& map_path_array[character_position_z][character_position_y - 1][character_position_x] != "01" &&
		            map_path_array[character_position_z - 1][character_position_y - 1][character_position_x] == "01")
		        {
		            player.animations.play('jump_0');
		            console.log("move up down level");
		            
		            game.add.tween(player).to({ isoY: (playerY - tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to( {isoZ: (playerZ + 18.5)}, 300, Phaser.Easing.Linear.InOut, false).to({isoZ: (playerZ - tile_height)}, 200, Phaser.Easing.Linear.InOut, false);
		
		            character_position_z--;
		            character_position_y--;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		            startween.start();
		        }
		        else if(character_position_y > 0 && map_path_array[character_position_z][character_position_y - 1][character_position_x] == "01")
		        {
		            player.animations.play('walk_0');
		            console.log("move up same level");
		            startween = game.add.tween(player).to( {isoY: (playerY - tile_size)}, movingSpeed, Phaser.Easing.Linear.InOut, true);
		            character_position_y--;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		    else if(character_facing_direction == 90 || character_facing_direction == -270)
		    {
		        console.log(character_position_z);
		        if((character_position_x < map_path_array[character_position_z][character_position_y].length - 1 && character_position_z > 0) && map_path_array[character_position_z][character_position_y][character_position_x + 1] != "01" &&
		            map_path_array[character_position_z - 1][character_position_y][character_position_x + 1] == "01")
		        {
		            player.animations.play('jump_90');
		            console.log("Move right down level")
		            console.log("new move");
		            game.add.tween(player).to({ isoX: (playerX + tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 18.5) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ - tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            character_position_x++;
		            character_position_z--;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		            startween.start();
		        }
		        else if(character_position_x < map_path_array[character_position_z][character_position_y].length - 1 && map_path_array[character_position_z][character_position_y][character_position_x + 1] == "01")
		        {
		            player.animations.play('walk_90');
		            console.log("Move right same level")
		            startween = game.add.tween(player).to( {isoX: (playerX + tile_size)}, movingSpeed, Phaser.Easing.Linear.InOut, true);
		            character_position_x++;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		    else if(character_facing_direction == 180 || character_facing_direction == -180)
		    {
		        if((character_position_z > 0 && character_position_y < (map_path_array[character_position_z].length - 1)) && map_path_array[character_position_z - 1][character_position_y + 1][character_position_x] == "01" &&
		            map_path_array[character_position_z][character_position_y + 1][character_position_x] != "01")
		        {
		            player.animations.play('jump_180');
		            console.log("move down in different level");
		
		            game.add.tween(player).to({ isoY: (playerY + tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 18.5) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ - tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            // startween = game.add.tween(player).to( {isoZ: (playerZ - tile_height), isoY: (playerY + tile_size)}, 500, Phaser.Easing.Linear.InOut, true);        
		            character_position_z--;
		            character_position_y++;
		            startween.onUpdateCallback(function(){unsorted = true});  
		            bIsMove = true;
		            startween.start();
		        }
		        else if(character_position_y < (map_path_array[character_position_z].length - 1) && map_path_array[character_position_z][character_position_y + 1][character_position_x] == "01")
		        {
		            player.animations.play('walk_180');
		            console.log("move down in same level");
		            startween = game.add.tween(player).to( {isoY: (playerY + tile_size)}, movingSpeed, Phaser.Easing.Linear.InOut, true);
		            character_position_y++;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		    else if(character_facing_direction == 270 || character_facing_direction == -90)
		    {
		        if((character_position_x > 0 && character_position_z > 0)&& map_path_array[character_position_z][character_position_y][character_position_x - 1] != "01" &&
		            map_path_array[character_position_z - 1][character_position_y][character_position_x - 1] == "01")
		        {
		            player.animations.play('jump_270');
		            console.log("Move left down level")
		            game.add.tween(player).to({ isoX: (playerX - tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 18.5) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ - tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            // startween = game.add.tween(player).to( {isoZ: (playerZ - tile_height), isoX: (playerX - tile_size)}, 500, Phaser.Easing.Linear.InOut, true);
		            character_position_x--;
		            character_position_z--;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		            startween.start();
		        }
		        else if(character_position_x > 0 && map_path_array[character_position_z][character_position_y][character_position_x - 1] == "01")
		        {
		            player.animations.play('walk_270');
		            console.log("Move left same level")
		            startween = game.add.tween(player).to( {isoX: (playerX - tile_size)}, movingSpeed, Phaser.Easing.Linear.InOut, true);
		            character_position_x--;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		
		    if(bIsMove)
		    {
		        startween.onComplete.add(start_moving);
		        bIsMove = false;
		    }
		    else
		    {
		        start_moving();
		    }
		}
		
		function jump_character()
		{
		    command_list.splice(0, 1);
		
		    var playerX = player.isoX;
		    var playerY = player.isoY;
		    var playerZ = player.isoZ;
		    var startween;
		    var bIsMove = false;
		
		    if(character_facing_direction == 0 || character_facing_direction == 360)
		    {
		        // check can jump
		        if(((character_position_z + 1) < map_path_array.length && character_position_y > 0)&& map_path_array[character_position_z + 1][character_position_y - 1][character_position_x] == "01")
		        {
		            player.animations.play('jump_0');
		            console.log("Move up and jump");
		            game.add.tween(player).to({ isoY: (playerY - tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 37) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ + tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            // startween = game.add.tween(player).to( {isoZ: (playerZ + tile_height), isoY: (playerY - tile_size)}, 500, Phaser.Easing.Linear.InOut, true);
		            character_position_z++;
		            character_position_y--;
		            bIsMove = true;
		            startween.onUpdateCallback(function(){unsorted = true});
		            startween.start();
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		    else if(character_facing_direction == 90 || character_facing_direction == -270)
		    {
		        if((character_position_z + 1) < map_path_array.length && map_path_array[character_position_z + 1][character_position_y][character_position_x + 1] == "01")
		        {
		            player.animations.play('jump_90');
		            console.log("Move right and jump")
		            game.add.tween(player).to({ isoX: (playerX + tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 37) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ + tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            // startween = game.add.tween(player).to( {isoZ: (playerZ + tile_height), isoX: (playerX + tile_size)}, 500, Phaser.Easing.Linear.InOut, true);
		            character_position_z++;
		            character_position_x++;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		            startween.start();
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		    else if(character_facing_direction == 180 || character_facing_direction == -180)
		    {
		        if(((character_position_y + 1) < map_path_array[character_position_z].length && (character_position_z + 1) < map_path_array.length) && map_path_array[character_position_z + 1][character_position_y + 1][character_position_x] == "01")
		        {
		            player.animations.play('jump_180');
		            console.log("move down and jump");
		            game.add.tween(player).to({ isoY: (playerY + tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 37) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ + tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            // startween = game.add.tween(player).to( {isoZ: (playerZ + tile_height), isoY: (playerY + tile_size)}, 500, Phaser.Easing.Linear.InOut, true);        
		            character_position_z++;
		            character_position_y++;
		            startween.onUpdateCallback(function(){unsorted = true});    
		            bIsMove = true;
		            startween.start();
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		    else if(character_facing_direction == 270 || character_facing_direction == -90)
		    {
		        if((character_position_z + 1) < map_path_array.length && map_path_array[character_position_z + 1][character_position_y][character_position_x - 1] == "01")
		        {
		            player.animations.play('jump_270');
		            console.log("Move left and jump")
		            game.add.tween(player).to({ isoX: (playerX - tile_size) }, 300, Phaser.Easing.Linear.None, true);
		            startween = game.add.tween(player).to({ isoZ: (playerZ + 37) }, 300, Phaser.Easing.Quintic.Out, false).to({isoZ: (playerZ + tile_height)}, 200, Phaser.Easing.Linear.None, false);
		
		            // startween = game.add.tween(player).to( {isoZ: (playerZ + tile_height), isoX: (playerX - tile_size)}, 500, Phaser.Easing.Linear.InOut, true);
		            character_position_z++;
		            character_position_x--;
		            startween.onUpdateCallback(function(){unsorted = true});
		            bIsMove = true;
		            startween.start();
		        }
		        else
		        {
		            console.log("Wrong move");
		        }
		    }
		
		    if(bIsMove)
		    {
		        startween.onComplete.add(start_moving);
		        bIsMove = false;
		    }
		    else
		    {
		        start_moving();
		    }
		}
		
		function rotate_character_left()
		{
		    character_facing_direction -= 90;
		
		    if(character_facing_direction <= -360)
		    {
		        character_facing_direction = 0;
		    }
		
		    var assetName = ((character_facing_direction < 0) ? ("character_ingames_" + (character_facing_direction + 360) + "_01.png") : ("character_ingames_" + character_facing_direction + "_01.png"));
		    console.log("assetName : " + assetName);
		    player.frameName = assetName;
		
		    console.log("character_facing_direction : " + character_facing_direction);
		    command_list.splice(0, 1);
		    start_moving();
		}
		
		function rotate_character_right()
		{
		    character_facing_direction += 90;
		
		    if(character_facing_direction >= 360)
		    {
		        character_facing_direction = 0;
		    }
		
		    var assetName = ((character_facing_direction < 0) ? ("character_ingames_" + (character_facing_direction + 360) + "_01.png") : ("character_ingames_" + character_facing_direction + "_01.png"));
		    console.log("assetName : " + assetName);
		    player.frameName = assetName;
		
		    console.log("character_facing_direction : " + character_facing_direction);
		    command_list.splice(0, 1);
		    start_moving();
		}
		
		function generate_map()
		{
		    game.physics.isoArcade.gravity.setTo(0, 0, -500);
		
		    isoGroup = game.add.group();
		    player_direction_group = game.add.group();
		
		    isoGroup.enableBody = true;
		    isoGroup.physicsBodyType = Phaser.Plugin.Isometric.ISOARCADE;
		
		    var size = 0;
		    var zz_size = 4;
		
		    var side_count = 6;
		
		    var i = 0;
		    var count = 0;
		
		    var tile;
		
		    var second_floor = 4;
		    var total_box = 0;
		
		    var x_count = 0;
		    var y_count = 0;
		
		    var x_loop_size = 0;
		    var y_loop_size = 0;
		
		    var first_loop = 0;
		    var second_loop = 0;
		    var third_loop = 0;
		
		    var allBoxCreated = false;
		    var bIsLight = false;
		
		    for (var i = 0; i < map_path_array.length; i++) // position z
		    {
		        for (var b = 0; b < map_path_array[i].length; b++) // position y
		        {
		            for(var c = 0; c < map_path_array[i][b].length; c++) //  position x
		            {
		                // Create a tile using the new game.add.isoSprite factory method at the specified position.
		                // The last parameter is the group you want to add it to (just like game.add.sprite)
		                if(map_path_array[i][b][c] != "00" || ((i == (endGame_position_z + 1) || i == (endGame_position_z + 2)) && b == endGame_position_y && c == endGame_position_x))
		                {
		                    // console.log("i : " + i + " , lamp i : " + lamp_object_z[i]);
		                    // console.log("b : " + b + " , lamp b : " + lamp_object_y[b]);
		                    // console.log("c : " + c + " , lamp c : " + lamp_object_x[c]);
		                    var isLamp = false;
		                    for(var d = 0; d < lamp_object_z.length; d++)
		                    {
		                        if(i == lamp_object_z[d] && b == lamp_object_y[d] && c == lamp_object_x[d])
		                        {
		                            isLamp = true;
		                        }
		                    }
		
		                    if(i == character_position_z && b == character_position_y && c == character_position_x)
		                    {
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), 'cognitive_secondary', 0, isoGroup);
		                        tile.frameName = "cube_start.png";
		                    }
		                    else if(i == endGame_position_z && b == endGame_position_y && c == endGame_position_x)
		                    {
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), 'cognitive_secondary', 0, isoGroup);
		                        tile.frameName = "cube_end.png";
		                    }
		                    else if(isLamp)
		                    {
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), 'cognitive_secondary', 0, isoGroup);
		                        tile.frameName = "cube_end.png";
		                    }
		                    else if(i == (endGame_position_z + 1) && b == endGame_position_y && c == endGame_position_x)
		                    {
		                        console.log("light up 1")
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), 'cognitive_secondary', 0, isoGroup);
		                        tile.animations.add('light_down', Phaser.Animation.generateFrameNames('end_light_down_', 1, 2, '.png', 2), 2, true);
		                        tile.animations.play('light_down');
		                        bIsLight = true;
		                    }
		                    else if(i == (endGame_position_z + 2) && b == endGame_position_y && c == endGame_position_x)
		                    {
		                        console.log("light up 2")
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), 'cognitive_secondary', 0, isoGroup);
		                        tile.animations.add('light_up', Phaser.Animation.generateFrameNames('end_light_up_', 1, 2, '.png', 2), 2, true);
		                        tile.animations.play('light_up');
		                        bIsLight = true;
		                    }
		                    else if(map_path_array[i][b][c] == "01")// || map_path_array[i][b][c] == "02")
		                    {
		                        var rnd = Math.floor((Math.random() * 10) + 1);
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), 'cognitive_secondary', 0, isoGroup);
		                        tile.frameName = ('a_' + rnd + '.png');
		                        // tile.frameName = ('cube_walk_0' + rnd + '.png');
		                        // tile.tint = 0x87CEFA;
		                    }
		                    // else if(map_path_array[i][b][c] == "02")
		                    // {
		                    //     var rnd = Math.floor((Math.random() * 5) + 1);
		                    //     tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), ('crystal_0' + rnd +'_crystal'), 0, isoGroup);
		                    //     // tile.scale.x = game.rnd.pick([-1, 1]);
		                    //     // tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), tile_asset, 0, isoGroup);
		                    //     // tile.frameName = ('lava_0' + rnd + '.png');
		                    //     // tile.frameName = ('cubes_crystal_0' + 1 + '.png');
		                    //     // tile.tint = 0xff0000;
		                    // }
		                    else if(map_path_array[i][b][c] == "08")
		                    {
		                        console.log("add 08");
		                        tile = game.add.isoSprite(x_loop_size - (tile_size), y_loop_size - (tile_size), (tile_height * i - (tile_height)), 'cognitive_secondary', 0, isoGroup);
		                        tile.frameName = "cognitive_spaceship_smokes";
		                    }
		                    else if(map_path_array[i][b][c] == "09")
		                    {
		                        tile = game.add.isoSprite(x_loop_size - (tile_size), y_loop_size - (tile_size), (tile_height * i + (tile_height)), 'cognitive_secondary', 0, isoGroup);
		                        tile.frameName = "cognitive_spaceship";
		                    }
		                    else
		                    {
		                        tile = game.add.isoSprite(x_loop_size, y_loop_size, (tile_height * i), "cognitive_secondary", 0, isoGroup);
		                        tile.frameName = (tiles_name(map_path_array[i][b][c]) + ".png");
		                    }
		
		                    if(bIsLight)
		                    {
		                        tile.anchor.set(0.5, 0);
		                        bIsLight = false;
		                    }
		                    else
		                    {
		                        tile.anchor.set(0.5, 0);
		                    }
		                    tile.width = 50;
		                    tile.height = 53;
		                    game.physics.isoArcade.enable(tile);
		                    tile.body.collideWorldBounds = true;
		                    tile.body.moves = false;
		
		                    total_box++;
		                }
		
		                x_loop_size += tile_size;
		                third_loop++;
		            }
		            y_loop_size += tile_size;
		            x_loop_size = 0;
		            second_loop++;
		        }
		        y_loop_size = 0;
		        first_loop++;
		    }
		    var temp_str = ("arrow_" + character_facing_direction + ".png");
		    player_direction = game.add.isoSprite((character_position_x * tile_size), (character_position_y * tile_size), ((character_position_z + 2)* tile_height), player_asset, 0, player_direction_group);
		    player_direction.frameName = temp_str;
		    player_direction.anchor.set(0.5, 0);
		
		    player = game.add.isoSprite((character_position_x * tile_size), (character_position_y * tile_size), ((character_position_z + 1)* tile_height), player_asset, 0, isoGroup);
		    temp_str = ("character_ingames_" + character_facing_direction + "_01.png");
		    player.frameName = temp_str;
		
		    player.anchor.set(0.5, 0);
		    game.physics.isoArcade.enable(player);
		
		    player.body.collideWorldBounds = true;
		    player.body.moves = false;
		
		    player.animations.add('walk_0', [5, 6], 4, true);
		    player.animations.add('walk_90', [8, 9], 4, true);
		    player.animations.add('walk_180', [11, 12], 4, true);
		    player.animations.add('walk_270', [14, 15], 4, true);
		
		    player.animations.add('jump_0', [20, 21], 2, true);
		    player.animations.add('jump_90', [23, 24], 2, true);
		    player.animations.add('jump_180', [17, 18], 2, true);
		    player.animations.add('jump_270', [26, 27], 2, true);
		
		    player.animations.add('idle_0', [4], 1, true);
		    player.animations.add('idle_90', [7], 1, true);
		    player.animations.add('idle_180', [10], 1, true);
		    player.animations.add('idle_270', [13], 1, true);
		
		    // player.animations.play('walk_0');
		
		    total_box++;
		    map_spawn = true;
		
		    game.iso.simpleSort(isoGroup);
		}
		
		function render () {
		    if(isoGroup != null)
		    {
		        isoGroup.forEach(function (tile) {
		            game.debug.body(tile, 'rgba(189, 221, 235, 0.4)', false);
		        });
		    }
		    game.debug.text(game.time.fps || '--', 2, 14, "#a7aebe");
		    game.debug.text(Phaser.VERSION, 2, game.world.height - 2, "#ffff00");
		}
		
		function check_is_animation_done()
		{
		    if(map_path_array[character_position_y][character_position_x] == "02")
		    {
		        map_path_array[character_position_y][character_position_x] = "01";
		        quests_array.push("02");
		        var childObject = character_position_y + "," + character_position_x;
		        for(var i = 0; i <  map_group.length; i++)
		        {
		            if(map_group.children[i].name == childObject)
		            {
		                map_group.children[i].destroy();
		                bIsMove = false;
		            }
		        }
		    }
		    else if(map_path_array[character_position_y][character_position_x] == "03")
		    {
		        quests_array.push("03");
		    }
		
		    for(var i = 0; i < quests_array.length; i++)
		    {
		        console.log("Quest : " + quests_array[i]);
		    }
		}
		function reset(){
			editor.setValue("");
			editor.clearHistory();
		}
		this.btnReset.addEventListener("click", reset);
		function onExec(e){
			//editor.save();
			//someText = document.getElementById("txt_area").value;
			if(!bIsMoving)
		        {
		            move_count++;
					_this.txtTries.text = move_count;
		            editor.save();
		            someText = document.getElementById("txt_area").value;
		            someText = someText.replace(/\s+/g,"");
		
		            // var someText2 = someText.split(";");
		            console.log(compile_input(someText));
		
		            if(compile_input(someText) != "error")
		            {
		                someText = compile_input(someText);
		                split_movement();
		            }
		            //cognitive_draw_instruction_count();
		        }
			/*
		        if(!bIsMoving){
		            move_count++;
					_this.txtTries.text = move_count;
		            var code = Blockly.JavaScript.statementToCode(root_block,'do_statement');
		            someText = code.replace(/\s+/g,"");
		            split_movement();
		        }*/
		}
		this.btnExecute.addEventListener("click", onExec);
		function create() {
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.time.advancedTiming = true;
		    game.debug.renderShadow = false;
		    game.stage.disableVisibilityChange = true;
		    game.plugins.add(new Phaser.Plugin.Isometric(game));
		    game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
			game.iso.anchor.setTo(0.37, 0.47);
			cognitive_create(1);
		}
		function getNextMap(){
			isoGroup.destroy();
			if(player_direction_group != null)
		    {
		        player_direction_group.destroy();
		    }
			_this.qNum++;
			/*
			//debug
			if (_this.qNum=2){
				_this.qNum = 5;
			}*/
			if (_this.qNum==5){
				myContainer.style.display = "none";
				divEditor.style.display = "none";
				_this.mcNotice.gotoAndPlay("anim");
			} else if (_this.qNum<=4){
				_this.mcCont.visible = true;
				cognitive_create(_this.qNum);
			} else if (debugMode && _this.qNum==6){
				_this.mcCont.visible = true;
				cognitive_create(6);
			} else if (debugMode && _this.qNum==7){
				_this.mcCont.visible = true;
				cognitive_create(7);
			} else if (!debugMode && _this.qNum==6){
				_this.mcCont.visible = true;
				if (_this.parent.selectedQ==0){
					_this.mcCont.visible = true;
					cognitive_create(6);
				} else {
					_this.mcCont.visible = true;
					cognitive_create(7);
				}
			} else {
				console.log("all done");
				game.destroy();
			}
		}
		function onHelp(e){
			_this.mcCont.visible = false;
			myContainer.style.display = "none";
			divEditor.style.display = "none";
			_this.mcHelp.gotoAndPlay("anim");
		}
		this.btnHelp.addEventListener("click", onHelp);
		function calcScore(){
			//calculate score here
			var cScore;
			if (move_count<=3){
				cScore = 5;
			} else if (move_count<=6){
				cScore = 4;
			} else if (move_count<=8){
				cScore = 3;
			} else if (move_count<=10){
				cScore = 2;
			} else {
				cScore = 1;
			}
			_this.parent.sendScore(cScore);
		}
		function onStartAct(){
			myContainer.style.display = "block";
			divEditor.style.display = "block";
			cognitive_create(5);
			var custom = new createjs.Event("startClocking", true, false);
			_this.dispatchEvent(custom);
		}
		this.addEventListener("startAct", onStartAct);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mcNotice
	this.mcNotice = new lib.mcNotice();
	this.mcNotice.name = "mcNotice";
	this.mcNotice.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcNotice).wait(1));

	// mcHelp
	this.mcHelp = new lib.mcHelp();
	this.mcHelp.name = "mcHelp";
	this.mcHelp.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.mcHelp).wait(1));

	// txtTries
	this.txtTries = new cjs.Text("0", "normal 400 18px 'Muli'", "#FFFFFF");
	this.txtTries.name = "txtTries";
	this.txtTries.textAlign = "center";
	this.txtTries.lineHeight = 27;
	this.txtTries.lineWidth = 30;
	this.txtTries.parent = this;
	this.txtTries.setTransform(713,143.6);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtTries);
	}

	this.timeline.addTween(cjs.Tween.get(this.txtTries).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(666.8,361.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(341.9,530.8,0.35,0.35,0,0,0,0.5,0.5);

	this.btnHelp = new lib.mcBtnHelp();
	this.btnHelp.name = "btnHelp";
	this.btnHelp.parent = this;
	this.btnHelp.setTransform(261.7,531.7,0.85,0.85,0,0,0,0.3,0.7);

	this.btnReset = new lib.mcBtnClear();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(531.7,531.7,0.85,0.85,0,0,0,0.3,0.7);

	this.btnExecute = new lib.mcBtnExecute();
	this.btnExecute.name = "btnExecute";
	this.btnExecute.parent = this;
	this.btnExecute.setTransform(661.1,531.7,0.85,0.85,0,0,0,0.3,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnExecute},{t:this.btnReset},{t:this.btnHelp},{t:this.mcCont}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(-222.9,23.8,959.5,530.4), null);


// stage content:
(lib.f5d2q7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,finalFb:132});

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
		this.timeGiven = 600;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		//var maxQ = 3;
		this.currentQ = 0;
		this.myData = {
			"qNum": 19,
			"userId": cUserId,
			"time": _this.timeTaken,
			"score": _this.cScore,
			"qItem": []
		};
		this.qItem1 = [{
				"qId": "f5d2q7_1",
				"qDomain": 2,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		this.qItem2 = [{
				"qId": "f5d2q7_2",
				"qDomain": 2,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "f5d2q7_3",
				"qDomain": 2,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		if (typeof debugMode === "undefined") {
			debugMode = false;
		}
		debugMode = true;
		this.selectedQ = randRange(0,1);
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(_this.qItem1[0]);
			this.myData.qItem.push(_this.qItem2[0]);
			this.myData.qItem.push(_this.qItem2[1]);
		} else {
			this.myData.qItem.push(_this.qItem1[0]);
			this.myData.qItem.push(_this.qItem2[this.selectedQ]);
		}
		function goNextQ (){
			_this.currentQ++;
			//if (_this.currentQ<=_this.myData.qItem.length){
			if (_this.currentQ==1){
				console.log("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				//_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				_this.gotoAndPlay("q1");
				console.log(_this.myData);
			} else if (_this.currentQ==2){
				//nothing
				console.log(_this.myData);
			} else {
				//all questions done
				$("#dom_overlay_container").empty();
				$("#blocklyDiv").empty();
				$("#blocklyDiv").hide();
				clearInterval(timeInterval);//stop time
				_this.myData.time = _this.timeGiven - _this.secRemaining;
				//console.log(_this.myData.time);
				_this.myData.score = Math.round(_this.cScore/_this.myData.qItem.length*10)/10;//average
				saveData();
				console.log(_this.myData);
			}
		}
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
		_this.onTimeEnd = function (){
			_this.myData.time = _this.timeGiven;
			saveData();
		};
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
	this.frame_119 = function() {
		this.stop();
	}
	this.frame_132 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_301 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(15).call(this.frame_119).wait(13).call(this.frame_132).wait(169).call(this.frame_301).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(198));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).wait(170));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(198));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(257));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(513.9,436.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(198));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},89).wait(170));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},89).wait(170));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(132).to({graphics:null,x:0,y:0}).wait(170));

	// actMc
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(367,612.6);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,310);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(84).to({_off:false},0).to({x:393,y:315.7},15,cjs.Ease.elasticInOut).to({_off:true},5).wait(198));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(105).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},14).wait(170));

	// progress
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(610.3,80.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(622.6,80.5);

	this.prog3 = new lib.progress();
	this.prog3.name = "prog3";
	this.prog3.parent = this;
	this.prog3.setTransform(634.9,80.5);

	var maskedShapeInstanceList = [this.prog1,this.prog2,this.prog3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog3},{t:this.prog2},{t:this.prog1}]},99).to({state:[]},33).wait(170));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(276));

	// bg
	this.instance_6 = new lib.Symbol2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(394.4,296.6);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({_off:true},112).wait(170));

	// bg
	this.instance_7 = new lib.Bitmap3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(302));

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
	webfonts: {},
	manifest: [
		{src:"images/f5d2q7/Bitmap1.png?1527695936649", id:"Bitmap1"},
		{src:"images/f5d2q7/Bitmap2.png?1527695936649", id:"Bitmap2"},
		{src:"images/f5d2q7/Bitmap21.png?1527695936649", id:"Bitmap21"},
		{src:"images/f5d2q7/Bitmap3.png?1527695936649", id:"Bitmap3"},
		{src:"images/f5d2q7/Bitmap9.png?1527695936649", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1527695936649", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1527695936649", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1527695936649", id:"questionComplete"},
		{src:"sounds/submitAns.mp3?1527695936649", id:"submitAns"},
		{src:"sounds/suspense.mp3?1527695936649", id:"suspense"},
		{src:"sounds/timeout.mp3?1527695936649", id:"timeout"}
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