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
p.nominalBounds = new cjs.Rectangle(0,0,140,79);


(lib.Blend_14 = function() {
	this.initialize(img.Blend_14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,41);// helper functions:

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
	this.myTxt = new cjs.Text("Answer the following questions.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 271;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-240.7,-24);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A1zAAMArnAAA");
	this.shape.setTransform(-112.1,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A0cC7IAAiYIikACICkh6IAAhgMArnAAAIAAFw");
	this.shape_1.setTransform(-120.8,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A0gC4IAAiYIilADIClh7IAAhfMArmAAAIAAFvg");
	this.shape_2.setTransform(-120.3,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-31,301.5,39.8), null);


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
	this.myTxt = new cjs.Text("Jawab soalan berikut.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 206;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-240.7,-24);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Av2AAIftAA");
	this.shape.setTransform(-150.2,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AufC7IAAiYIikACICkh6IAAhgIftAAIAAFw");
	this.shape_1.setTransform(-158.9,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AujC4IAAiYIilADIClh7IAAhfIfsAAIAAFvg");
	this.shape_2.setTransform(-158.4,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-31,236.5,39.8), null);


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
	this.txtTime = new cjs.Text("4:00", "60px 'Quantico'", "#006666");
	this.txtTime.name = "txtTime";
	this.txtTime.textAlign = "center";
	this.txtTime.lineHeight = 88;
	this.txtTime.lineWidth = 242;
	this.txtTime.parent = this;
	this.txtTime.setTransform(-1,-23.2,0.537,0.542,0,-2.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.txtTime).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTimer, new cjs.Rectangle(-66.6,-30.6,133.3,61.3), null);


(lib.mcQ5 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(288.2,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(284.5,45.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgFABgFABQgMgBgFgGg");
	this.shape_2.setTransform(279.7,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_3.setTransform(272.7,47.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_4.setTransform(263.7,49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_5.setTransform(247.4,47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(235.4,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_7.setTransform(229,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(222,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_9.setTransform(212.4,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(199.3,47.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_11.setTransform(191.5,45.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(177.8,47.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(168.1,47.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_14.setTransform(158.9,49.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_15.setTransform(148.9,47.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_16.setTransform(137.4,47.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(125.4,47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_18.setTransform(118,47.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_19.setTransform(110,46.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_20.setTransform(102.9,47.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_21.setTransform(96.2,47.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(88.4,47.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_23.setTransform(79.1,46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape_24.setTransform(66.8,45.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_25.setTransform(58.1,45.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_26.setTransform(48.8,47.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_27.setTransform(40.7,45.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_28.setTransform(31.3,47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_29.setTransform(23.2,45.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(9.1,49.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_31.setTransform(-0.2,47.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(-9.8,47.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_33.setTransform(-18.6,49.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_34.setTransform(-31.8,47.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_35.setTransform(-41.5,47.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_36.setTransform(-50.7,47.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_37.setTransform(-57.2,45.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-64.1,47.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_39.setTransform(-70.6,45.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(-81.7,47.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_41.setTransform(-89.2,46.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_42.setTransform(-96.9,47.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_43.setTransform(-104.9,45.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_44.setTransform(331.4,25.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(321.4,23.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(311.8,25.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(302.1,25.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_48.setTransform(292.8,23.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_49.setTransform(283.2,23.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_50.setTransform(276.7,22);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(269.8,21.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(255.9,25.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_53.setTransform(246.6,23.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(237,23.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_55.setTransform(228.2,25.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_56.setTransform(215,23.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_57.setTransform(205.3,23.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_58.setTransform(196.1,25.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_59.setTransform(186.1,23.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_60.setTransform(179.7,21.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_61.setTransform(168.9,21.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_62.setTransform(159.2,23.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_63.setTransform(151.2,21.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_64.setTransform(141.3,23.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_65.setTransform(132,23.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_66.setTransform(122.4,23.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_67.setTransform(110.7,23.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_68.setTransform(96.7,22.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_69.setTransform(89.3,23.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_70.setTransform(81.3,21.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_71.setTransform(74.6,22);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_72.setTransform(70.3,23.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(62.5,23.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgFAIg");
	this.shape_74.setTransform(53.6,21.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_75.setTransform(39.3,23.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_76.setTransform(32.4,23.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_77.setTransform(23.9,23.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_78.setTransform(16.5,22.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_79.setTransform(9,23.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AAqA5IgMgdIg7AAIgMAdIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_80.setTransform(-1.5,22.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_81.setTransform(-13.4,26.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_82.setTransform(-19.9,23.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_83.setTransform(-26.9,23.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_84.setTransform(-35.3,23.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_85.setTransform(-44.5,21.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_86.setTransform(-54.3,23.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_87.setTransform(-63.4,21.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_88.setTransform(-77.7,25.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_89.setTransform(-87,23.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_90.setTransform(-96.7,23.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_91.setTransform(-105.5,25.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_92.setTransform(346.5,-2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_93.setTransform(342.7,-1.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_94.setTransform(335.7,-0.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_95.setTransform(324.1,-0.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_96.setTransform(312.8,-0.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_97.setTransform(299.5,-0.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgGAEgIAAQgOAAgIgIg");
	this.shape_98.setTransform(290.2,-0.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_99.setTransform(280.6,-0.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_100.setTransform(272.6,-2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_101.setTransform(262.7,-0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(248.9,-0.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_103.setTransform(240.9,-2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_104.setTransform(231.5,-0.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_105.setTransform(222.3,-2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_106.setTransform(210.2,-0.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_107.setTransform(198.9,-0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_108.setTransform(187.4,-0.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AATA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAkgkIARAAIgnAmIAqAqg");
	this.shape_109.setTransform(172.8,-2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_110.setTransform(163.4,-0.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_111.setTransform(155.9,-1.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_112.setTransform(148.4,-0.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_113.setTransform(139.2,-0.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_114.setTransform(125.6,-0.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_115.setTransform(116,-0.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_116.setTransform(106.8,-0.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_117.setTransform(100.3,-2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_118.setTransform(93.3,-0.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_119.setTransform(86.9,-2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_120.setTransform(75.7,-0.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_121.setTransform(68.3,-1.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_122.setTransform(60.5,-0.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_123.setTransform(52.5,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_124.setTransform(38.5,-0.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_125.setTransform(31,-1.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_126.setTransform(23.7,1.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_127.setTransform(16.8,-1.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_128.setTransform(11.1,-0.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_129.setTransform(2.3,-0.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_130.setTransform(-6.7,-0.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_131.setTransform(-18.1,-0.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_132.setTransform(-34,-0.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_133.setTransform(-40.5,-1.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_134.setTransform(-47.5,1.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_135.setTransform(-56.8,-0.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_136.setTransform(-63.3,-1.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_137.setTransform(-74.5,-0.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_138.setTransform(-84.1,-2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_139.setTransform(-93.4,-0.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_140.setTransform(-103.9,-1.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_141.setTransform(53.5,45.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_142.setTransform(45.8,47.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_143.setTransform(37.2,47.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_144.setTransform(-3.3,47.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_145.setTransform(-10.8,46.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_146.setTransform(-58.2,45.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_147.setTransform(-65.8,46.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgtgrAAIgZAAg");
	this.shape_148.setTransform(-103.6,46);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgGgEgFQgFgDgIAAQgLAAgLAGIAAgMIALgEIAMgBQANAAAIAGQAJAIAAAKQAAAHgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape_149.setTransform(392.3,22);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_150.setTransform(384.2,23.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_151.setTransform(375.2,21.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_152.setTransform(360.3,23.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_153.setTransform(348.8,23.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_154.setTransform(337.8,23.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_155.setTransform(329.8,23.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_156.setTransform(278.9,23.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_157.setTransform(265.7,22.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_158.setTransform(258.9,23.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_159.setTransform(213,21.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_160.setTransform(200.6,23.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_161.setTransform(182.7,23.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_162.setTransform(155,23.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_163.setTransform(134.9,22.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_164.setTransform(91.8,21.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_165.setTransform(83.3,23.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_166.setTransform(70.8,21.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_167.setTransform(46.1,27.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_168.setTransform(14.5,23.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_169.setTransform(3,23.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_170.setTransform(-13.8,23.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_171.setTransform(-21.1,21.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_172.setTransform(-41.3,21.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_173.setTransform(-48.9,22.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_174.setTransform(-79.4,23.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_175.setTransform(359.8,-1.4);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_176.setTransform(333.9,-0.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_177.setTransform(325.6,-0.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_178.setTransform(317.7,-0.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_179.setTransform(264.2,-0.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_180.setTransform(248.7,-0.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_181.setTransform(237.4,-0.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_182.setTransform(217.1,-0.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_183.setTransform(199.8,-0.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_184.setTransform(191,1.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_185.setTransform(180.2,-0.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_186.setTransform(172.2,-0.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_187.setTransform(164.8,-2.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_188.setTransform(153,-2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_189.setTransform(146,-0.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_190.setTransform(138,-0.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_191.setTransform(126.5,-0.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_192.setTransform(115.5,-0.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_193.setTransform(107.6,-0.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_194.setTransform(62.1,-0.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_195.setTransform(38.2,-0.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_196.setTransform(31.5,-0.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_197.setTransform(24.3,-0.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_198.setTransform(11.4,-0.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_199.setTransform(-7.3,-0.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_200.setTransform(-36.8,-2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_201.setTransform(-59,-0.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_202.setTransform(-70.5,-0.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_203.setTransform(-95.5,-0.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000066").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAkg4IAQAAIgtBDIAAAug");
	this.shape_204.setTransform(-104.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:-84.1,y:-2}},{t:this.shape_137},{t:this.shape_136,p:{x:-63.3}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133,p:{x:-40.5}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130,p:{x:-6.7,y:-0.2}},{t:this.shape_129},{t:this.shape_128,p:{x:11.1,y:-0.2}},{t:this.shape_127,p:{x:16.8,y:-1.9}},{t:this.shape_126,p:{x:23.7}},{t:this.shape_125,p:{x:31}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121,p:{x:68.3}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:100.3}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110,p:{x:163.4}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107,p:{x:198.9,y:-0.2}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96,p:{x:312.8,y:-0.2}},{t:this.shape_95,p:{x:324.1}},{t:this.shape_94,p:{x:335.7}},{t:this.shape_93,p:{x:342.7,y:-1.9}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88,p:{x:-77.7}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85,p:{x:-44.5,y:21.9}},{t:this.shape_84},{t:this.shape_83,p:{x:-26.9}},{t:this.shape_82},{t:this.shape_81,p:{x:-13.4,y:26.9}},{t:this.shape_80,p:{x:-1.5}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:32.4}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:62.5}},{t:this.shape_72,p:{x:70.3}},{t:this.shape_71,p:{x:74.6}},{t:this.shape_70},{t:this.shape_69,p:{x:89.3,y:23.8}},{t:this.shape_68},{t:this.shape_67,p:{x:110.7}},{t:this.shape_66},{t:this.shape_65,p:{x:132,y:23.6}},{t:this.shape_64,p:{x:141.3}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:168.9}},{t:this.shape_60,p:{x:179.7}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:215,y:23.6}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:246.6}},{t:this.shape_52,p:{x:255.9}},{t:this.shape_51},{t:this.shape_50,p:{x:276.7}},{t:this.shape_49},{t:this.shape_48,p:{x:292.8}},{t:this.shape_47,p:{x:302.1}},{t:this.shape_46,p:{x:311.8}},{t:this.shape_45},{t:this.shape_44,p:{x:331.4}},{t:this.shape_43},{t:this.shape_42,p:{x:-96.9,y:47.6}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:-70.6,y:45.8}},{t:this.shape_38,p:{x:-64.1,y:47.6}},{t:this.shape_37,p:{x:-57.2,y:45.8}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:-31.8,y:47.5}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-0.2,y:47.5}},{t:this.shape_30,p:{x:9.1}},{t:this.shape_29},{t:this.shape_28,p:{x:31.3,y:47.7}},{t:this.shape_27},{t:this.shape_26,p:{x:48.8,y:47.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:88.4,y:47.6}},{t:this.shape_21,p:{x:96.2}},{t:this.shape_20,p:{x:102.9}},{t:this.shape_19,p:{x:110}},{t:this.shape_18},{t:this.shape_17,p:{x:125.4}},{t:this.shape_16,p:{x:137.4,y:47.6}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:168.1,y:47.6}},{t:this.shape_12,p:{x:177.8}},{t:this.shape_11,p:{x:191.5,y:45.8}},{t:this.shape_10,p:{x:199.3}},{t:this.shape_9},{t:this.shape_8,p:{x:222,y:47.6}},{t:this.shape_7,p:{x:229,y:45.8}},{t:this.shape_6,p:{x:235.4,y:47.6}},{t:this.shape_5,p:{x:247.4}},{t:this.shape_4},{t:this.shape_3,p:{x:272.7}},{t:this.shape_2},{t:this.shape_1,p:{x:284.5}},{t:this.shape,p:{x:288.2}}]}).to({state:[{t:this.shape_204},{t:this.shape_203},{t:this.shape_110,p:{x:-86.3}},{t:this.shape_202},{t:this.shape_201},{t:this.shape_26,p:{x:-49.8,y:-0.1}},{t:this.shape_39,p:{x:-43.2,y:-2}},{t:this.shape_200},{t:this.shape_117,p:{x:-25.6}},{t:this.shape_136,p:{x:-21.8}},{t:this.shape_11,p:{x:-15.1,y:-2}},{t:this.shape_199},{t:this.shape_121,p:{x:3.9}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_38,p:{x:47.1,y:-0.2}},{t:this.shape_125,p:{x:54.9}},{t:this.shape_194},{t:this.shape_8,p:{x:75.2,y:-0.2}},{t:this.shape_126,p:{x:89.4}},{t:this.shape_6,p:{x:98.6,y:-0.2}},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_69,p:{x:209,y:-0.1}},{t:this.shape_182},{t:this.shape_65,p:{x:228.3,y:-0.3}},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_95,p:{x:275.5}},{t:this.shape_94,p:{x:287.1}},{t:this.shape_133,p:{x:294.1}},{t:this.shape_37,p:{x:297.9,y:-2}},{t:this.shape_42,p:{x:308.5,y:-0.2}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_28,p:{x:343.1,y:-0.1}},{t:this.shape_56,p:{x:352.4,y:-0.3}},{t:this.shape_175},{t:this.shape_81,p:{x:364.5,y:3}},{t:this.shape_80,p:{x:-103.9}},{t:this.shape_67,p:{x:-91}},{t:this.shape_174},{t:this.shape_53,p:{x:-70.2}},{t:this.shape_88,p:{x:-60.9}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_130,p:{x:-32.3,y:23.7}},{t:this.shape_171},{t:this.shape_170},{t:this.shape_60,p:{x:-7.3}},{t:this.shape_7,p:{x:-3.5,y:21.9}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_127,p:{x:23.4,y:22}},{t:this.shape_48,p:{x:29.9}},{t:this.shape_52,p:{x:39.2}},{t:this.shape_167},{t:this.shape_16,p:{x:59.1,y:23.7}},{t:this.shape_166},{t:this.shape_93,p:{x:77.3,y:22}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_107,p:{x:105,y:23.7}},{t:this.shape_71,p:{x:111.3}},{t:this.shape_47,p:{x:117.7}},{t:this.shape_61,p:{x:127.5}},{t:this.shape_163},{t:this.shape_13,p:{x:146.5,y:23.7}},{t:this.shape_162},{t:this.shape_96,p:{x:161.7,y:23.7}},{t:this.shape_128,p:{x:174.4,y:23.7}},{t:this.shape_161},{t:this.shape_34,p:{x:191.9,y:23.6}},{t:this.shape_160},{t:this.shape_50,p:{x:206.5}},{t:this.shape_159},{t:this.shape_73,p:{x:222.4}},{t:this.shape_83,p:{x:230.1}},{t:this.shape_22,p:{x:236.9,y:23.7}},{t:this.shape_138,p:{x:245.8,y:21.9}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_76,p:{x:272}},{t:this.shape_156},{t:this.shape_31,p:{x:288.1,y:23.6}},{t:this.shape_46,p:{x:297.4}},{t:this.shape_44,p:{x:311.7}},{t:this.shape_64,p:{x:320.9}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_72,p:{x:368.3}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_21,p:{x:-94.4}},{t:this.shape_17,p:{x:-87.4}},{t:this.shape_30,p:{x:-77.8}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_20,p:{x:-49.2}},{t:this.shape_5,p:{x:-37.9}},{t:this.shape_1,p:{x:-24.7}},{t:this.shape_12,p:{x:-18.2}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_19,p:{x:8.2}},{t:this.shape_85,p:{x:15.8,y:45.8}},{t:this.shape_10,p:{x:24.8}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_3,p:{x:60.6}},{t:this.shape,p:{x:66.8}}]},1).wait(1));

	// outlineshade
	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#D40000").ss(4,2,0,3).p("EAm8AAAMgm0AAAMgnDAAA");
	this.shape_205.setTransform(115.5,69);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#D40000").ss(1,2,0,3).p("Egn3AG/IBFpkIBXhQIhIhQIALh6MApCAAAMAlOAAAIh4N+");
	this.shape_206.setTransform(121.5,24.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#F5F5F5").s().p("A1QG/IBFpkIBXhQIhIhQIALh5MApCAAAIjdN9g");
	this.shape_207.setTransform(2.4,24.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#D40000").ss(4,2,0,3).p("EAprAAAMgsRAAAMgnEAAA");
	this.shape_208.setTransform(133,69);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#D40000").ss(1,2,0,3).p("EgqmAG/IBFpkIBXhQIhIhQIALh6MApDAAAMAqrAAAIh4N+");
	this.shape_209.setTransform(139,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205}]}).to({state:[{t:this.shape_207},{t:this.shape_209},{t:this.shape_208}]},1).wait(1));

	// white
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FAFAFA").s().p("Egn3AG/IBFpkIBXhQIhIhQIALh5MBOQAAAIh4N9g");
	this.shape_210.setTransform(121.5,24.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FAFAFA").s().p("EgqmAG/IBFpkIBXhQIhIhQIALh5MBTuAAAIh4N9g");
	this.shape_211.setTransform(139,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_210}]}).to({state:[{t:this.shape_211}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-21.7,513.6,92.7);


(lib.mcQ4 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(359.8,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_1.setTransform(353.3,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(343.6,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_3.setTransform(334.4,49.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_4.setTransform(322.3,47.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(310.3,47.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(301.7,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(288.5,49.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_8.setTransform(279.2,47.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(270,47.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_10.setTransform(262.6,46.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_11.setTransform(248.6,47.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(236.6,47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_13.setTransform(230.1,45.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_14.setTransform(223.2,47.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(213.6,45.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(200.5,47.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_17.setTransform(192.7,45.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(178.9,47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(169.3,47.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_20.setTransform(160.1,49.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(150.1,47.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_22.setTransform(138.6,47.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_23.setTransform(126.6,47.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_24.setTransform(119.1,47.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_25.setTransform(111.1,46.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(104.1,47.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_27.setTransform(97.3,47.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(89.6,47.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgqAsIAFgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAKAEAHAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_29.setTransform(80.3,46);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape_30.setTransform(68,45.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_31.setTransform(59.3,45.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_32.setTransform(49.5,47.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_33.setTransform(37.9,47.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(26.6,47.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_35.setTransform(20.3,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(9.1,49.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_37.setTransform(-0.2,47.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_38.setTransform(-9.8,47.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_39.setTransform(-18.6,49.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_40.setTransform(-31.8,47.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_41.setTransform(-41.5,47.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_42.setTransform(-50.7,47.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_43.setTransform(-57.2,45.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_44.setTransform(-64.1,47.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_45.setTransform(-70.6,45.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(-81.7,47.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_47.setTransform(-89.2,46.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(-96.9,47.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_49.setTransform(-104.9,45.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_50.setTransform(331.4,25.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_51.setTransform(321.4,23.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(311.8,25.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_53.setTransform(302.1,25.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_54.setTransform(292.8,23.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_55.setTransform(283.2,23.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_56.setTransform(276.7,22);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_57.setTransform(269.8,21.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_58.setTransform(255.9,25.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_59.setTransform(246.6,23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(237,23.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_61.setTransform(228.2,25.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(215,23.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_63.setTransform(205.3,23.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_64.setTransform(196.1,25.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_65.setTransform(186.1,23.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_66.setTransform(179.7,21.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_67.setTransform(168.9,21.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_68.setTransform(159.2,23.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_69.setTransform(151.2,21.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_70.setTransform(141.3,23.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_71.setTransform(132,23.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_72.setTransform(122.4,23.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_73.setTransform(110.7,23.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_74.setTransform(96.7,22.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_75.setTransform(89.3,23.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_76.setTransform(81.3,21.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_77.setTransform(74.6,22);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_78.setTransform(70.3,23.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_79.setTransform(62.5,23.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgFAIg");
	this.shape_80.setTransform(53.6,21.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_81.setTransform(39.3,23.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_82.setTransform(32.4,23.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_83.setTransform(23.9,23.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_84.setTransform(16.5,22.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_85.setTransform(9,23.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AAqA5IgMgdIg7AAIgMAdIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_86.setTransform(-1.5,22.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_87.setTransform(-13.4,26.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_88.setTransform(-19.9,23.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_89.setTransform(-26.9,23.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_90.setTransform(-35.3,23.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_91.setTransform(-44.5,21.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_92.setTransform(-54.3,23.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_93.setTransform(-63.4,21.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_94.setTransform(-77.7,25.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_95.setTransform(-87,23.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_96.setTransform(-96.7,23.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_97.setTransform(-105.5,25.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_98.setTransform(346.5,-2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_99.setTransform(342.7,-1.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_100.setTransform(335.7,-0.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_101.setTransform(324.1,-0.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_102.setTransform(312.8,-0.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_103.setTransform(299.5,-0.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgGAEgIAAQgOAAgIgIg");
	this.shape_104.setTransform(290.2,-0.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_105.setTransform(280.6,-0.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_106.setTransform(272.6,-2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_107.setTransform(262.7,-0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_108.setTransform(248.9,-0.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_109.setTransform(240.9,-2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_110.setTransform(231.5,-0.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_111.setTransform(222.3,-2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_112.setTransform(210.2,-0.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_113.setTransform(198.9,-0.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_114.setTransform(187.4,-0.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AATA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAkgkIARAAIgnAmIAqAqg");
	this.shape_115.setTransform(172.8,-2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_116.setTransform(163.4,-0.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_117.setTransform(155.9,-1.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_118.setTransform(148.4,-0.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_119.setTransform(139.2,-0.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_120.setTransform(125.6,-0.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_121.setTransform(116,-0.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_122.setTransform(106.8,-0.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_123.setTransform(100.3,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_124.setTransform(93.3,-0.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_125.setTransform(86.9,-2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_126.setTransform(75.7,-0.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_127.setTransform(68.3,-1.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_128.setTransform(60.5,-0.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_129.setTransform(52.5,-2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_130.setTransform(38.5,-0.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_131.setTransform(31,-1.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_132.setTransform(23.7,1.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_133.setTransform(16.8,-1.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_134.setTransform(11.1,-0.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_135.setTransform(2.3,-0.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_136.setTransform(-6.7,-0.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_137.setTransform(-18.1,-0.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_138.setTransform(-34,-0.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_139.setTransform(-40.5,-1.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_140.setTransform(-47.5,1.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_141.setTransform(-56.8,-0.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_142.setTransform(-63.3,-1.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_143.setTransform(-74.5,-0.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_144.setTransform(-84.1,-2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_145.setTransform(-93.4,-0.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_146.setTransform(-103.9,-1.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_147.setTransform(96.9,45.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_148.setTransform(83,45.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_149.setTransform(62,45.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_150.setTransform(52.4,45.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_151.setTransform(14.8,45.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgtgrAAIgZAAg");
	this.shape_152.setTransform(-104.6,46);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgGgEgFQgFgDgIAAQgLAAgLAGIAAgMIALgEIAMgBQANAAAIAGQAJAIAAAKQAAAHgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape_153.setTransform(384.2,22);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_154.setTransform(376.1,23.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgMAAQgKAAgHAIg");
	this.shape_155.setTransform(367.2,21.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_156.setTransform(352.2,23.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_157.setTransform(329.7,23.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_158.setTransform(321.8,23.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_159.setTransform(281.2,23.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_160.setTransform(261,23.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgLAAQgLAAgHAIg");
	this.shape_161.setTransform(244.8,21.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_162.setTransform(212,21.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_163.setTransform(199.6,23.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_164.setTransform(181.7,23.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_165.setTransform(154,23.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_166.setTransform(133.9,22.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_167.setTransform(90.8,21.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_168.setTransform(82.3,23.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_169.setTransform(58.1,23.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_170.setTransform(45.1,27.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_171.setTransform(22.4,22);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_172.setTransform(13.5,23.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_173.setTransform(2,23.7);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_174.setTransform(-14.8,23.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_175.setTransform(-22.1,21.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_176.setTransform(-42.3,21.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_177.setTransform(-49.9,22.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_178.setTransform(-80.4,23.7);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_179.setTransform(358.8,-1.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_180.setTransform(332.9,-0.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_181.setTransform(324.6,-0.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_182.setTransform(316.7,-0.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_183.setTransform(293.1,-1.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_184.setTransform(263.2,-0.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_185.setTransform(247.7,-0.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_186.setTransform(236.4,-0.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_187.setTransform(216.1,-0.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_188.setTransform(198.8,-0.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000066").s().p("AgjAwQALgCAFgFQAGgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_189.setTransform(190,1.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_190.setTransform(179.2,-0.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_191.setTransform(171.2,-0.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_192.setTransform(163.8,-2.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_193.setTransform(145,-0.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_194.setTransform(137,-0.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_195.setTransform(125.5,-0.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_196.setTransform(114.5,-0.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_197.setTransform(106.6,-0.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_198.setTransform(74.2,-0.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_199.setTransform(61.1,-0.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_200.setTransform(46.1,-0.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_201.setTransform(37.2,-0.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_202.setTransform(30.5,-0.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_203.setTransform(23.3,-0.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_204.setTransform(10.4,-0.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_205.setTransform(2.9,-1.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_206.setTransform(-8.3,-0.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_207.setTransform(-22.8,-1.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_208.setTransform(-37.8,-2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_209.setTransform(-60,-0.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_210.setTransform(-71.5,-0.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_211.setTransform(-96.5,-0.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000066").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAlg4IAPAAIgtBDIAAAug");
	this.shape_212.setTransform(-105.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142,p:{x:-63.3,y:-1.9}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139,p:{x:-40.5,y:-1.9}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136,p:{x:-6.7,y:-0.2}},{t:this.shape_135},{t:this.shape_134,p:{x:11.1,y:-0.2}},{t:this.shape_133,p:{x:16.8,y:-1.9}},{t:this.shape_132,p:{x:23.7}},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{x:68.3}},{t:this.shape_126},{t:this.shape_125,p:{x:86.9}},{t:this.shape_124},{t:this.shape_123,p:{x:100.3,y:-2}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119,p:{x:139.2}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116,p:{x:163.4}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113,p:{x:198.9,y:-0.2}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110,p:{x:231.5}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:272.6,y:-2}},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102,p:{x:312.8,y:-0.2}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99,p:{x:342.7,y:-1.9}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:-44.5}},{t:this.shape_90},{t:this.shape_89,p:{x:-26.9}},{t:this.shape_88},{t:this.shape_87,p:{x:-13.4,y:26.9}},{t:this.shape_86,p:{x:-1.5}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:32.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:62.5}},{t:this.shape_78,p:{x:70.3,y:23.6}},{t:this.shape_77,p:{x:74.6,y:22}},{t:this.shape_76},{t:this.shape_75,p:{x:89.3,y:23.8}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:122.4,y:23.7}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:168.9,y:21.9}},{t:this.shape_66,p:{x:179.7}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:215,y:23.6}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:246.6,y:23.6}},{t:this.shape_58,p:{x:255.9}},{t:this.shape_57,p:{x:269.8,y:21.9}},{t:this.shape_56,p:{x:276.7,y:22}},{t:this.shape_55},{t:this.shape_54,p:{x:292.8}},{t:this.shape_53,p:{x:302.1}},{t:this.shape_52,p:{x:311.8}},{t:this.shape_51},{t:this.shape_50,p:{x:331.4}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-89.2}},{t:this.shape_46,p:{x:-81.7,y:47.6}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:-50.7}},{t:this.shape_41,p:{x:-41.5,y:47.6}},{t:this.shape_40,p:{x:-31.8,y:47.5}},{t:this.shape_39},{t:this.shape_38,p:{x:-9.8,y:47.6}},{t:this.shape_37,p:{x:-0.2,y:47.5}},{t:this.shape_36},{t:this.shape_35,p:{x:20.3,y:45.8}},{t:this.shape_34,p:{x:26.6,y:47.6}},{t:this.shape_33,p:{x:37.9,y:47.5}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:89.6,y:47.6}},{t:this.shape_27,p:{x:97.3}},{t:this.shape_26,p:{x:104.1}},{t:this.shape_25,p:{x:111.1}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:138.6,y:47.6}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:169.3,y:47.6}},{t:this.shape_18,p:{x:178.9}},{t:this.shape_17,p:{x:192.7,y:45.8}},{t:this.shape_16,p:{x:200.5}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:230.1,y:45.8}},{t:this.shape_12,p:{x:236.6}},{t:this.shape_11,p:{x:248.6,y:47.5}},{t:this.shape_10,p:{x:262.6}},{t:this.shape_9,p:{x:270}},{t:this.shape_8,p:{x:279.2}},{t:this.shape_7,p:{x:288.5}},{t:this.shape_6,p:{x:301.7}},{t:this.shape_5},{t:this.shape_4,p:{x:322.3}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:353.3,y:45.8}},{t:this.shape,p:{x:359.8}}]}).to({state:[{t:this.shape_212},{t:this.shape_211},{t:this.shape_119,p:{x:-87.3}},{t:this.shape_210},{t:this.shape_209},{t:this.shape_110,p:{x:-50.8}},{t:this.shape_35,p:{x:-44.2,y:-2}},{t:this.shape_208},{t:this.shape_125,p:{x:-26.6}},{t:this.shape_207},{t:this.shape_17,p:{x:-16.1,y:-2}},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_127,p:{x:53.9}},{t:this.shape_199},{t:this.shape_198},{t:this.shape_132,p:{x:88.4}},{t:this.shape_72,p:{x:97.6,y:-0.2}},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_57,p:{x:152,y:-2}},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_116,p:{x:208}},{t:this.shape_187},{t:this.shape_62,p:{x:227.3,y:-0.3}},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_33,p:{x:274.5,y:-0.3}},{t:this.shape_41,p:{x:286.1,y:-0.2}},{t:this.shape_183},{t:this.shape_13,p:{x:296.9,y:-2}},{t:this.shape_46,p:{x:307.5,y:-0.2}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_75,p:{x:342.1,y:-0.1}},{t:this.shape_59,p:{x:351.4,y:-0.3}},{t:this.shape_179},{t:this.shape_87,p:{x:363.5,y:3}},{t:this.shape_86,p:{x:-104.9}},{t:this.shape_11,p:{x:-92,y:23.6}},{t:this.shape_178},{t:this.shape_54,p:{x:-71.2}},{t:this.shape_58,p:{x:-61.9}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_136,p:{x:-33.3,y:23.7}},{t:this.shape_175},{t:this.shape_174},{t:this.shape_123,p:{x:-8.3,y:21.9}},{t:this.shape_66,p:{x:-4.5}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_40,p:{x:28.9,y:23.6}},{t:this.shape_53,p:{x:38.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_91,p:{x:69.8}},{t:this.shape_142,p:{x:76.3,y:22}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_113,p:{x:104,y:23.7}},{t:this.shape_139,p:{x:110.3,y:22}},{t:this.shape_52,p:{x:116.7}},{t:this.shape_1,p:{x:126.5,y:21.9}},{t:this.shape_166},{t:this.shape_38,p:{x:145.5,y:23.7}},{t:this.shape_165},{t:this.shape_102,p:{x:160.7,y:23.7}},{t:this.shape_134,p:{x:173.4,y:23.7}},{t:this.shape_164},{t:this.shape_37,p:{x:190.9,y:23.6}},{t:this.shape_163},{t:this.shape_133,p:{x:205.5,y:22}},{t:this.shape_162},{t:this.shape_79,p:{x:221.4}},{t:this.shape_89,p:{x:229.1}},{t:this.shape_34,p:{x:235.9,y:23.7}},{t:this.shape_161},{t:this.shape_160},{t:this.shape_28,p:{x:272.3,y:23.7}},{t:this.shape_159},{t:this.shape_106,p:{x:291,y:21.9}},{t:this.shape_50,p:{x:303.6}},{t:this.shape_19,p:{x:312.8,y:23.7}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_22,p:{x:340.7,y:23.7}},{t:this.shape_156},{t:this.shape_82,p:{x:360.2}},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_78,p:{x:-95.4,y:47.5}},{t:this.shape_12,p:{x:-88.4}},{t:this.shape_7,p:{x:-78.8}},{t:this.shape_10,p:{x:-66.8}},{t:this.shape_67,p:{x:-59.2,y:45.8}},{t:this.shape_26,p:{x:-50.2}},{t:this.shape_4,p:{x:-38.9}},{t:this.shape_99,p:{x:-25.7,y:45.9}},{t:this.shape_18,p:{x:-19.2}},{t:this.shape_47,p:{x:-11.8}},{t:this.shape_9,p:{x:-4.3}},{t:this.shape_25,p:{x:7.2}},{t:this.shape_151},{t:this.shape_16,p:{x:23.8}},{t:this.shape_27,p:{x:35.7}},{t:this.shape_42,p:{x:42.7}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_77,p:{x:68.5,y:45.9}},{t:this.shape_6,p:{x:74.3}},{t:this.shape_148},{t:this.shape_147},{t:this.shape_56,p:{x:103.4,y:45.9}},{t:this.shape_8,p:{x:109.9}},{t:this.shape,p:{x:116.4}}]},1).wait(1));

	// outlineshade
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#D40000").ss(4,2,0,3).p("EAm8AAAMgm0AAAMgnDAAA");
	this.shape_213.setTransform(115.5,69);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#D40000").ss(1,2,0,3).p("Egn3AG/IBFpkIBXhQIhIhQIALh6MApCAAAMAlOAAAIh4N+");
	this.shape_214.setTransform(121.5,24.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#F5F5F5").s().p("A1QG/IBFpkIBXhQIhIhQIALh5MApCAAAIjdN9g");
	this.shape_215.setTransform(2.4,24.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#D40000").ss(4,2,0,3).p("EApDAAAIoxAAMgiQAAAMgnEAAA");
	this.shape_216.setTransform(129,69);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#D40000").ss(1,2,0,3).p("Egp+AG/IBFpkIBXhQIhIhQIALh6MApCAAAMApcAAAIh4N+");
	this.shape_217.setTransform(135,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213}]}).to({state:[{t:this.shape_215},{t:this.shape_217},{t:this.shape_216}]},1).wait(1));

	// white
	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FAFAFA").s().p("Egn3AG/IBFpkIBXhQIhIhQIALh5MBOQAAAIh4N9g");
	this.shape_218.setTransform(121.5,24.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FAFAFA").s().p("Egp+AG/IBFpkIBXhQIhIhQIALh5MBSeAAAIh4N9g");
	this.shape_219.setTransform(135,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_218}]}).to({state:[{t:this.shape_219}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-21.7,513.6,92.7);


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


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpAqQgSgRAAgZQAAgYASgRQASgSAXAAQAYAAASASQARARAAAYQAAAZgRARQgRASgZAAQgXAAgSgSg");
	this.shape.setTransform(6,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,11.9,12), null);


(lib.Blend_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Blend_14();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Blend_13, new cjs.Rectangle(0,0,33,41), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFEF").s().p("AgbAJIAAgRIA3AAIAAARg");
	this.shape.setTransform(2.8,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,5.6,1.9), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVBBIAAiBIArAAIAACBg");
	this.shape.setTransform(2.2,6.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,4.4,13.1), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBFIAAiJIAvAAIAACJg");
	this.shape.setTransform(2.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,4.9,13.9), null);


(lib.Path_5_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBFIAAiJIAvAAIAACJg");
	this.shape.setTransform(2.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5_0, new cjs.Rectangle(0,0,4.9,13.9), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96572E").s().p("Am8BxIAAjhIN5AAIAADhg");
	this.shape.setTransform(44.5,11.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,89,22.7), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#96572E").ss(0.7,0,0,4).p("ADKBVImTAAIAAiqIGTAAg");
	this.shape.setTransform(20.5,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(-0.6,-0.6,42.3,19.1), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#96572E").ss(0.7,0,0,4).p("ADKBVImTAAIAAiqIGTAAg");
	this.shape.setTransform(20.5,8.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(-0.6,-0.6,42.3,19.1), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXBFIAAiJIAvAAIAACJg");
	this.shape.setTransform(2.4,6.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,4.9,13.9), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F532C").s().p("AgKALQgGgEAAgHQAAgFAGgFQAFgGAFAAQAHAAAEAGQAFAFABAFQgBAHgFAEQgEAFgHABQgFgBgFgFg");
	this.shape.setTransform(1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,3.3,3.3), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F532C").s().p("AgKALQgGgEAAgHQAAgFAGgFQAFgGAFAAQAHAAAEAGQAFAFABAFQgBAHgFAEQgEAFgHABQgFgBgFgFg");
	this.shape.setTransform(1.7,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,3.3,3.3), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#96572E").s().p("Am8AhIAAhCIN5AAIAABCg");
	this.shape.setTransform(44.5,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,89,6.7), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F532C").s().p("AuUAMIAAgXIcpAAIAAAXg");
	this.shape.setTransform(91.7,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,183.4,2.5), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AABi+IgBF9g");
	this.shape.setTransform(120.6,79.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AABiBIgBEDg");
	this.shape_1.setTransform(118.3,94.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AAAA1IAAhuIABBnIgBANg");
	this.shape_2.setTransform(117.2,116.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AAABWIACCHIgDBkgAAAlBIAAGXg");
	this.shape_3.setTransform(115.4,82.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_4.setTransform(115.1,103.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AABEZIAAAggAAAhJIAAAbIAAgZIAAgIIABgiIAAjHIAADHIgBAiIAAAIIABFgIgBghIAAA1g");
	this.shape_5.setTransform(112.2,64.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_6.setTransform(107.7,73.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAAC4IAAhiIAAhgIAAjDIAADDIAABgIABB4g");
	this.shape_7.setTransform(105,106.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAABNIAAgCIABhUIABCYIgBAHIgBhSIAAAHIAAACIgBBVgAABihIAACYg");
	this.shape_8.setTransform(99.1,95.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAgzIABAIIgBBeg");
	this.shape_9.setTransform(91,79.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAAGIgBjBIADAMIgCC1IAAC2g");
	this.shape_10.setTransform(79.6,81.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAgXIAAAug");
	this.shape_11.setTransform(79,94.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AAAgUIABB4gAAAgUIAAAMgAAAhiIAABOg");
	this.shape_12.setTransform(75.8,80.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_13.setTransform(75.1,117.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAhqIAADVg");
	this.shape_14.setTransform(74.6,99.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_15.setTransform(73.4,66.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_16.setTransform(71,95.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AAAg3IgBBvIgBiOIAFAgIgCCNg");
	this.shape_17.setTransform(62.1,87.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAACJIAAhRIAAgEIAABOIAAgEIAAg6IAAAOIAAjZIABARIAAgZIAAEfg");
	this.shape_18.setTransform(62.5,69.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_19.setTransform(126.5,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AAAhjIAADHg");
	this.shape_20.setTransform(125.6,43.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AABg4IAABcIgBANIAAgHIAAAPg");
	this.shape_21.setTransform(124.4,66.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AAAkzIAAgNIABIeIgBBjg");
	this.shape_22.setTransform(122.7,32.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_23.setTransform(122.3,53.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAAiJIABETg");
	this.shape_24.setTransform(118.3,46.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_25.setTransform(107.9,26.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AAABLIAAAJIgBA/IABg/IABhXIAAiYIAACYIABCYIgBAHg");
	this.shape_26.setTransform(106.4,44.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AAAgWIAAAtg");
	this.shape_27.setTransform(90.4,43.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AAAAGIgBi4IADAMIgCCsIAACtg");
	this.shape_28.setTransform(86.8,29.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AAAhGIAACNg");
	this.shape_29.setTransform(83.2,34.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AgBAsIABhkIAAApIABhDIABClg");
	this.shape_30.setTransform(82.4,66.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_31.setTransform(81.8,50.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AAAhIIAACRg");
	this.shape_32.setTransform(80.7,15.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AAAhCIgBBvIgBiOIAFAgIgBCjg");
	this.shape_33.setTransform(69.3,37.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AABi9IgBF7g");
	this.shape_34.setTransform(58.8,83);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AAAhiIAADFg");
	this.shape_35.setTransform(56.5,97.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AAAgLIAAAXg");
	this.shape_36.setTransform(55.9,93.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAAAvIAAhjIABBcIgBANg");
	this.shape_37.setTransform(55.3,120);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_38.setTransform(53.2,107);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AAABWIACCIIgDBjgAAAlAIAAGWg");
	this.shape_39.setTransform(53.6,85.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AAAD4IgBA1IABl2IAAAbIAAhCIABhDIAAiFIAACFIgBBDIACDrIgBgDIgBDBg");
	this.shape_40.setTransform(50.4,67.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_41.setTransform(45.9,77.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AAAC4IAAhiIAAhgIAAjDIAADDIAABgIABB4g");
	this.shape_42.setTransform(43.1,109.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AAABNIAAgCIABhUIABCYIgBAHIgBhSIAAAHIAAACIgBBVgAABihIAACYg");
	this.shape_43.setTransform(37.3,98.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_44.setTransform(29.1,83.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E09E67").s().p("AAAAGIgBivIADAMIgCCjIAACkg");
	this.shape_45.setTransform(17.7,82.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E09E67").s().p("AAAgUIABB3gAAAgUIAAAMgAAAhjIAABPg");
	this.shape_46.setTransform(13.9,83.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_47.setTransform(13.3,121.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E09E67").s().p("AAAhqIAADVg");
	this.shape_48.setTransform(12.7,102.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_49.setTransform(11.5,70.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E09E67").s().p("AABhOIgBCdg");
	this.shape_50.setTransform(3,107);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E09E67").s().p("AAAg3IgBBvIgBiOIAFAgIgBCNg");
	this.shape_51.setTransform(0.3,90.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_52.setTransform(64.6,27.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E09E67").s().p("AAAhjIAADHg");
	this.shape_53.setTransform(63.8,47.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E09E67").s().p("AAAkzIAAgNIACIeIgDBjg");
	this.shape_54.setTransform(60.9,35.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_55.setTransform(60.5,56.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_56.setTransform(46.1,29.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E09E67").s().p("AAABLIAAAJIgBA/IABg/IABhXIAAiYIAACYIABCYIgBAHg");
	this.shape_57.setTransform(44.5,47.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E09E67").s().p("AAAgWIAAAtg");
	this.shape_58.setTransform(28.5,46.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E09E67").s().p("AAAAGIgBjBIADAMIgCC1IAAC2g");
	this.shape_59.setTransform(25,34);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E09E67").s().p("AAAhEIAACJg");
	this.shape_60.setTransform(21.3,37.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E09E67").s().p("AgBAsIABhkIAAApIABhDIABClg");
	this.shape_61.setTransform(20.6,69.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_62.setTransform(20,53.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E09E67").s().p("AAAhIIAACRg");
	this.shape_63.setTransform(18.8,19.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E09E67").s().p("AAAhDIgBBwIgBiOIAFAgIgBCjg");
	this.shape_64.setTransform(7.5,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,126.5,130.3), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AAAhjIAADGg");
	this.shape.setTransform(118.4,94.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AAAgLIAAAXg");
	this.shape_1.setTransform(117.7,90.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AAAAvIAAhjIABBcIgBANg");
	this.shape_2.setTransform(117.2,116.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AAABWIACCHIgDBkgAAAlBIAAGXg");
	this.shape_3.setTransform(115.4,82.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_4.setTransform(115.1,103.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AAAD4IgBA1IABl2IAAAbIAAhCIABhDIAAiEIAACEIgBBDIACDqIgBgCIgBDAg");
	this.shape_5.setTransform(112.2,64.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_6.setTransform(107.7,74);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAAC4IAAhiIAAhgIAAjDIAADDIAABgIABB4g");
	this.shape_7.setTransform(105,106.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAABNIAAgCIABhUIABCYIgBAHIgBhSIAAAHIAAACIgBBVgAABihIAACYg");
	this.shape_8.setTransform(99.1,95.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_9.setTransform(91,79.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAAGIgBivIADAMIgCCjIAACkg");
	this.shape_10.setTransform(79.6,79.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAgUIABB3gAAAgUIAAAMgAAAhiIAABOg");
	this.shape_11.setTransform(75.8,80.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_12.setTransform(75.1,117.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AAAhqIAADVg");
	this.shape_13.setTransform(74.6,99.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_14.setTransform(73.4,66.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_15.setTransform(71,95.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AAAg4IgBBwIgBiOIAFAfIgBCOg");
	this.shape_16.setTransform(62.1,87.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AAACJIAAhRIAAgEIAABOIAAgEIAAg6IAAAOIABhwIAAhxIAABxIAACug");
	this.shape_17.setTransform(62.5,69.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_18.setTransform(126.5,24.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AAAhjIAADGg");
	this.shape_19.setTransform(125.6,43.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AAAAyIAAg8IABA6IgBgGIAAAIIAAAHgAAAgeIABgaIgBAaIAAAUg");
	this.shape_20.setTransform(124.4,66.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AAAkyIAAgPIABIeIgBBkg");
	this.shape_21.setTransform(122.7,32.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_22.setTransform(122.3,53.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AAAhyIAADlg");
	this.shape_23.setTransform(118.3,48.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_24.setTransform(107.9,26.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAABKIAAAJIgBBAIABhAIABhWIAAiYIAACYIABCYIgBAHg");
	this.shape_25.setTransform(106.4,44.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AAAgWIAAAtg");
	this.shape_26.setTransform(90.4,43.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AAAAGIgBjBIADAMIgCC1IAAC2g");
	this.shape_27.setTransform(86.8,30.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AAAhEIAACJg");
	this.shape_28.setTransform(83.2,34.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AgBAsIABhkIAAApIABhDIABClg");
	this.shape_29.setTransform(82.4,66.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_30.setTransform(81.8,50.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AAAhIIAACRg");
	this.shape_31.setTransform(80.7,15.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AAAgQIAAAJIAAAYg");
	this.shape_32.setTransform(68.3,25);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AAAhiIAADGg");
	this.shape_33.setTransform(56.5,97.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AAAgLIAAAXg");
	this.shape_34.setTransform(55.9,93.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AAAAvIAAhjIABBcIgBANg");
	this.shape_35.setTransform(55.3,120.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_36.setTransform(53.2,107);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAAkzIAAgNIACIeIgDBjg");
	this.shape_37.setTransform(53.6,85.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AAAD4IAAAbIABjqIAAhRIAAkQIAAEQIAABRIABBSIgBgDIgBDBgAAAETIgBAag");
	this.shape_38.setTransform(50.4,67.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_39.setTransform(45.9,77.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AAADDIAAh0IAAgmIAAkCIAAECIAAAmIABCLg");
	this.shape_40.setTransform(43.1,108.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_41.setTransform(38.8,79.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AAABdIAAgHIAAAHIgBBFgAAABEIAAAHIABhTIABCXIgBAHgAAABOIAAgDIAAALgAABihIAACZg");
	this.shape_42.setTransform(37.3,98.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AAAAGIgBivIADAMIgCCjIAACkg");
	this.shape_43.setTransform(17.8,82.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E09E67").s().p("AAAhFIAACLg");
	this.shape_44.setTransform(14.1,88.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_45.setTransform(13.3,121.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E09E67").s().p("AAAhqIAADVg");
	this.shape_46.setTransform(12.8,102.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_47.setTransform(11.6,70.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E09E67").s().p("AAAg3IgBBuIgBiOIAFAhIgBCOg");
	this.shape_48.setTransform(0.3,90.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_49.setTransform(64.6,27.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E09E67").s().p("AAAhSIAAClg");
	this.shape_50.setTransform(63.8,45.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E09E67").s().p("AAAkyIAAgOIACIeIgDBjg");
	this.shape_51.setTransform(60.9,35.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_52.setTransform(60.5,56.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E09E67").s().p("AAAhyIABDlg");
	this.shape_53.setTransform(56.5,51.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E09E67").s().p("AAAgrIAABXg");
	this.shape_54.setTransform(46.4,73.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E09E67").s().p("AAABLIAAAIIABhhIABCjIgBAHgAAABUIAAgBIAAABIgBAqgAABibIAACNg");
	this.shape_55.setTransform(44.6,47.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E09E67").s().p("AAAgWIAAAtg");
	this.shape_56.setTransform(28.6,46.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E09E67").s().p("AAAAGIgBjBIADAMIgCC1IAAC2g");
	this.shape_57.setTransform(25,34.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E09E67").s().p("AAAhEIAACJg");
	this.shape_58.setTransform(21.4,37.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E09E67").s().p("AgBAtIABhlIAAApIABhDIABClg");
	this.shape_59.setTransform(20.6,69.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E09E67").s().p("AAAiPIAAEfg");
	this.shape_60.setTransform(20,52);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_61.setTransform(18.9,19.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_62.setTransform(16.5,48.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E09E67").s().p("AAAguIgBBbIgBiOIAFAgIgBCjg");
	this.shape_63.setTransform(7.6,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,126.5,130.4), null);


(lib.Group_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AAAhSIAAClg");
	this.shape.setTransform(118.4,92.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AAAAyIAAgBIAAg7IABA7IgBgHIAAAHIAAABIAAAHgAAAgdIABgbIgBAbIAAATg");
	this.shape_1.setTransform(117.1,117.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AAAkyIAAgPIACIeIgDBkg");
	this.shape_2.setTransform(115.5,82.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_3.setTransform(115.1,103.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AAAgxIAAAaIABgbIAAgJIAAglIAAjaIAADaIAAAlIAAAJIAAFIIgBghIAABHgAABEWIAAAgg");
	this.shape_4.setTransform(112.2,64.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AAADEIAAh0IAAgnIAAkBIAAEBIAAAnIABCJg");
	this.shape_5.setTransform(105,105.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AAAgrIAABXg");
	this.shape_6.setTransform(101,121);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAABKIAAAJIgBArIABgrIAAh9IABgrIAAhGIAABGIgBArIACC/IgBAHg");
	this.shape_7.setTransform(99.2,94.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_8.setTransform(91,79.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAAGIAAgsIAAiVIABAMIgBCJIAAAsIAAC2g");
	this.shape_9.setTransform(79.6,81.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAgRIAAhOIAABOIABBxgAAAgRIAAAJg");
	this.shape_10.setTransform(75.8,79.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AgBAsIABhlIAAAqIABhDIABClg");
	this.shape_11.setTransform(75.2,117);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AAAhwIAADhg");
	this.shape_12.setTransform(74.6,99.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_13.setTransform(73.4,66.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_14.setTransform(71.1,95.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AAAguIgBBbIgBiOIAFAgIgBCjg");
	this.shape_15.setTransform(62.1,88.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AABCWIAAhRIgBgEIAABOIgBgEIABg6IAAAOIABiPIABhsIgBBsIABBrIgBAFIABBdg");
	this.shape_16.setTransform(62.6,67.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AAAhjIAADGg");
	this.shape_17.setTransform(125.7,43.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAAAvIAAhjIABBcIgBANg");
	this.shape_18.setTransform(124.5,66.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AAAkyIAAgPIACIeIgDBkg");
	this.shape_19.setTransform(122.7,32.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_20.setTransform(122.4,53.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_21.setTransform(119.6,23.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_22.setTransform(115,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_23.setTransform(108,26.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAABYIgBBKgAAABEIAAAHIABhUIABCYIgBAHgAAABNIAAgCIAAANgAABihIAACYg");
	this.shape_24.setTransform(106.4,45);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAAAGIgBivIADAMIgCCjIAACkg");
	this.shape_25.setTransform(86.9,28.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AAAhGIAACMg");
	this.shape_26.setTransform(83.2,34.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_27.setTransform(82.4,67.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_28.setTransform(81.9,50.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_29.setTransform(80.7,16.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_30.setTransform(78.3,45.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AAAg3IgBBvIgBiOIAFAgIgBCNg");
	this.shape_31.setTransform(69.4,36.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AABi4IgBFyg");
	this.shape_32.setTransform(58.8,82.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AABiBIgBEDg");
	this.shape_33.setTransform(56.5,97.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AAAi/IAAF/g");
	this.shape_34.setTransform(53.3,107);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AAABWIACCIIgDBjgAAAlAIAAGWg");
	this.shape_35.setTransform(53.6,85.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AABEYIAAAhgAAAguIAAAaIAAgbIAAgJIABglIAAjbIAADbIgBAlIAAAJIABFHIgBggIAAA1g");
	this.shape_36.setTransform(50.4,67.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_37.setTransform(45.9,77.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AAADDIAAh0IAAgmIAAkCIAAECIAAAmIABCLg");
	this.shape_38.setTransform(43.2,108.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AAAgrIAABXg");
	this.shape_39.setTransform(39.2,124.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AAABLIAAAJIgBAqIABgqIABh+IAAgrIAAhGIAABGIAAArIABC/IgBAHg");
	this.shape_40.setTransform(37.3,98.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_41.setTransform(29.2,83.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AAAAGIgBjBIADAMIgCC1IAAC2g");
	this.shape_42.setTransform(17.8,84.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AABgQIAABwgAAAhfIAABXg");
	this.shape_43.setTransform(14,83.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_44.setTransform(13.3,121.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E09E67").s().p("AAAhwIAADhg");
	this.shape_45.setTransform(12.7,103.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_46.setTransform(11.6,70.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E09E67").s().p("AABhOIgBCdg");
	this.shape_47.setTransform(3,107);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E09E67").s().p("AAAg3IgBBuIgBiOIAFAhIgCCOg");
	this.shape_48.setTransform(0.3,90.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_49.setTransform(64.7,27.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E09E67").s().p("AAAhjIAADGg");
	this.shape_50.setTransform(63.8,47.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E09E67").s().p("AAAkyIAAgOIABIeIgBBjg");
	this.shape_51.setTransform(60.9,35.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_52.setTransform(60.5,56.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_53.setTransform(57.7,26.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E09E67").s().p("AAAiJIABETg");
	this.shape_54.setTransform(56.5,49.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_55.setTransform(46.1,29.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E09E67").s().p("AAABYIgBBKgAAABEIAAAHIABhUIABCYIgBAHgAAABNIAAgCIAAANgAABihIAACYg");
	this.shape_56.setTransform(44.6,48.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E09E67").s().p("AAAgWIAAAtg");
	this.shape_57.setTransform(28.6,46.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E09E67").s().p("AAAAGIgBi4IADAMIgCCsIAACtg");
	this.shape_58.setTransform(25,33.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E09E67").s().p("AABAoIgBggIABAgIAAAjgAAAgXIAAgaIAAgZIAAAZIAAA5gAAAhBIAAAqg");
	this.shape_59.setTransform(20.6,70.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_60.setTransform(20,53.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_61.setTransform(18.8,19.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_62.setTransform(16.5,48.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E09E67").s().p("AAAhCIgBBvIgBiOIAFAgIgBCjg");
	this.shape_63.setTransform(7.5,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,125.7,130.4), null);


(lib.Group_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AAAhrIAADXg");
	this.shape.setTransform(118.4,97.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AAAg9IABBkIgBAOIAAgHIAAAQg");
	this.shape_1.setTransform(117.2,122.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AAABdIACCUIgDBsgAAAlcIAAG5g");
	this.shape_2.setTransform(115.5,85.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AAAjMIAAGZg");
	this.shape_3.setTransform(115.1,108.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AAAEkIAAlmIAAAdIABgbIAAFhIAAAjIAAgjIgBgjIAAAmIAAAmgAABhAIAAgKIAAgkIAAjbIAADbIAAAkIAAAKg");
	this.shape_4.setTransform(112.2,67);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AAAgyIAABlg");
	this.shape_5.setTransform(107.8,74);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AAADIIAAh3IAAgoIAAAoIABCPgAAAjfIAAEIg");
	this.shape_6.setTransform(105,111.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAAguIAABdg");
	this.shape_7.setTransform(101,127);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAABRIAAAIIAAhoIABiZIgBCZIACCxIgBAHgAAABmIgBAjgAAABbIAAgCIAAANg");
	this.shape_8.setTransform(99.2,98.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAg3IABAIIgBBng");
	this.shape_9.setTransform(91,82.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAAHIAAgxIgBihIADANIgCCUIAAAxIAADFg");
	this.shape_10.setTransform(79.6,83.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAgKIAAhVIAABVIABBqgAAAgKIAAAIg");
	this.shape_11.setTransform(75.8,81.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AgBAnIABhuIAAAuIABg3IABChg");
	this.shape_12.setTransform(75.2,123.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_13.setTransform(74.6,104.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAhbIAAC3g");
	this.shape_14.setTransform(73.4,67.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AAAgqIAABVg");
	this.shape_15.setTransform(64.8,108.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AAAg8IgBB4IgBiaIAFAjIgCCag");
	this.shape_16.setTransform(62.1,90.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AAAgdIAAA7g");
	this.shape_17.setTransform(126.5,21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAAhZIAACzg");
	this.shape_18.setTransform(125.7,41.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AAAgsIABBKIgBAOIAAgHIAAAIg");
	this.shape_19.setTransform(124.5,68.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AAAhNIAAgpIAAgpIABgHIgBAwIAAApIAAD0g");
	this.shape_20.setTransform(122.7,35.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AABjMIgBGZg");
	this.shape_21.setTransform(122.4,53.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AAAgaIAAA1g");
	this.shape_22.setTransform(119.6,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AAAiJIABETg");
	this.shape_23.setTransform(118.3,44.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAAg5IAABzg");
	this.shape_24.setTransform(108,30.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAAA2IgBifIADAGIgCCZIAAA0g");
	this.shape_25.setTransform(86.9,32);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AAAgGIABhEIAACVg");
	this.shape_26.setTransform(83.2,33.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AABjNIgBGbg");
	this.shape_27.setTransform(58.8,85.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AABhrIgBDXg");
	this.shape_28.setTransform(56.6,101.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AAAgLIAAAXg");
	this.shape_29.setTransform(55.9,97.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AAAAyIAAhqIABBkIgBANg");
	this.shape_30.setTransform(55.4,125.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AAAjQIAAGhg");
	this.shape_31.setTransform(53.3,111.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AAABdIACCUIgDBsgAAAlcIAAG5g");
	this.shape_32.setTransform(53.6,88.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AAAgyIAABlg");
	this.shape_33.setTransform(46,77.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AAADHIAAh2IAAgoIAAkHIAAEHIAAAoIABCOg");
	this.shape_34.setTransform(43.2,114.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AAABUIAAgDIABhaIABClIgBAHIgBhZIAAAHIAAADIgBBcgAABgJIAAimIAACmg");
	this.shape_35.setTransform(37.3,102.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AAAg3IABAIIgBBng");
	this.shape_36.setTransform(29.2,85.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAAAHIAAgxIgBihIADANIgCCUIAAAxIAADFg");
	this.shape_37.setTransform(17.8,87.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AAAgZIAAAzg");
	this.shape_38.setTransform(17.2,101.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AABgIIAAB0gAAAhrIAABig");
	this.shape_39.setTransform(14,86.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AgBAnIABhuIAAAuIABg3IABChg");
	this.shape_40.setTransform(13.3,127.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAh0IAADpg");
	this.shape_41.setTransform(12.8,106.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AAAhbIAAC3g");
	this.shape_42.setTransform(11.6,71.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AAAgoIAABRg");
	this.shape_43.setTransform(10.2,114.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E09E67").s().p("AAAgqIAABVg");
	this.shape_44.setTransform(3,112);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E09E67").s().p("AAAg8IgBB4IgBiaIAFAjIgCCag");
	this.shape_45.setTransform(0.3,93.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,18.4,126.6,118.7), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AAAhTIAACng");
	this.shape.setTransform(137.1,77.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AAAAjIAAhUIABBjg");
	this.shape_1.setTransform(136.2,95.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AAAgfIAAA/g");
	this.shape_2.setTransform(135.4,84.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AAAhwIAADhg");
	this.shape_3.setTransform(134.5,106.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AAAgMIAAAag");
	this.shape_4.setTransform(133.7,102.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AAAhGIABB1IgBAPIAAgIIAAARg");
	this.shape_5.setTransform(133,132.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AAABOIACCuIgDBxgAAAAUIAAmAIAAGAIAAA6g");
	this.shape_6.setTransform(131.1,93.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AABjVIgBGrg");
	this.shape_7.setTransform(130.7,118.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AgBExIACkrIABB0IAAgCIgBDaIgBhJIgBAoIAAAogAABhuIAAjqIAADqIAAB0g");
	this.shape_8.setTransform(127.4,74.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAiCIABEFg");
	this.shape_9.setTransform(126.1,109.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AgBDQIABh8IAAgpIAAg2IAAjeIAADeIAAA2IAAApIACCVg");
	this.shape_10.setTransform(119.3,120.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAgeIAAA9g");
	this.shape_11.setTransform(114.3,86.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AAABVIAAAKIABhjIAAisIAACsIABCtIgBAIgAAABfIgBBIg");
	this.shape_12.setTransform(112.6,107.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AAAgzIABAIIgBBfg");
	this.shape_13.setTransform(103.3,90.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAAHIgBjbIADANIgCDOIAADOg");
	this.shape_14.setTransform(90.4,92.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AAAgaIAAA1g");
	this.shape_15.setTransform(89.8,107.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AAAhLIAACXg");
	this.shape_16.setTransform(86.2,96.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AgBAyIABhyIAAAvIABhNIABC9g");
	this.shape_17.setTransform(85.4,132.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAAh/IAAD/g");
	this.shape_18.setTransform(84.7,113.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AAAhaIAAC1g");
	this.shape_19.setTransform(83.4,76);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AAAgcIAAA5g");
	this.shape_20.setTransform(81.8,120.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AAAgcIAAA5g");
	this.shape_21.setTransform(77.4,112.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AAAgoIAABRg");
	this.shape_22.setTransform(76.2,102.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_23.setTransform(73.6,118);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAAhMIgBB/IgBiiIAFAlIgBC5g");
	this.shape_24.setTransform(70.5,100.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAAgjIABAIIgBA/g");
	this.shape_25.setTransform(71,96.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AAACjIAAhcIAAgFIAABZIgBgFIAAg/IABANIABibIABByIgBAGIABBqgAACiqIgBBzg");
	this.shape_26.setTransform(71,77.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AAAhTIAACng");
	this.shape_27.setTransform(145.3,20);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AAAgfIAAA/g");
	this.shape_28.setTransform(143.6,27.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AAAhwIAADhg");
	this.shape_29.setTransform(142.7,49.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AAAgNIAAAbg");
	this.shape_30.setTransform(141.9,45.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AABhGIAAB1IgBAPIAAgIIAAARg");
	this.shape_31.setTransform(141.3,75.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AAABhIACCbIgDBxgAAAlsIAAHNg");
	this.shape_32.setTransform(139.4,36.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AAAADIAAgrIAAixIAACxIAAArIABCEIgBBTg");
	this.shape_33.setTransform(139,60.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AAAhhIAADDg");
	this.shape_34.setTransform(135.6,29.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AAAgbIAAA3g");
	this.shape_35.setTransform(135.8,27.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AAAiCIABEFg");
	this.shape_36.setTransform(134.3,52.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAAg0IAABpg");
	this.shape_37.setTransform(130.7,24.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AAAgeIAAA9g");
	this.shape_38.setTransform(122.6,28.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AAABVIAAAKIAAhjIABisIgBCsIACCtIgBAIgAAABfIgBBIg");
	this.shape_39.setTransform(120.9,50.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AAAgzIABAIIgBBfg");
	this.shape_40.setTransform(111.6,32.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAAHIgBjbIADANIgCDOIAADPg");
	this.shape_41.setTransform(98.7,34.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AAAgaIAAA1g");
	this.shape_42.setTransform(98,50.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AABgDIABB8gAABgDIAAgFIAAAFgAABgVIAAgKIAAAXgAgBh4IACBjg");
	this.shape_43.setTransform(94.3,34.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E09E67").s().p("AgBAyIABhyIAAAvIABhNIABC9g");
	this.shape_44.setTransform(93.6,75.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E09E67").s().p("AAAiAIAAEBg");
	this.shape_45.setTransform(92.9,56.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E09E67").s().p("AAAhaIAAC1g");
	this.shape_46.setTransform(91.6,18.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E09E67").s().p("AAAgcIAAA5g");
	this.shape_47.setTransform(90,63.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_48.setTransform(88.9,51.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_49.setTransform(81.9,60.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E09E67").s().p("AAAhLIgBB+IgBiiIAFAlIgBC5g");
	this.shape_50.setTransform(78.8,43);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E09E67").s().p("AAAhTIAACng");
	this.shape_51.setTransform(66.8,81);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E09E67").s().p("AAAAjIAAhUIABBjg");
	this.shape_52.setTransform(66,99.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E09E67").s().p("AAAgfIAAA/g");
	this.shape_53.setTransform(65.2,88.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E09E67").s().p("AABhwIgBDhg");
	this.shape_54.setTransform(64.2,110.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E09E67").s().p("AAAgMIAAAag");
	this.shape_55.setTransform(63.5,106.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E09E67").s().p("AAAhGIABB1IgBAPIAAgIIAAARg");
	this.shape_56.setTransform(62.8,136.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E09E67").s().p("AABjVIgBGrg");
	this.shape_57.setTransform(60.5,122);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E09E67").s().p("AABlsIgBLZg");
	this.shape_58.setTransform(60.8,97.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E09E67").s().p("AAAE+IAAgSIAAASIABAlgAAAElIAAgDIAAgCIAAgiIAAAuIAAgSIAAAGIAAACIAAADIAAAhgAAADxIABpTIgBJTIAAANg");
	this.shape_59.setTransform(57.2,76.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E09E67").s().p("AAAiCIABEFg");
	this.shape_60.setTransform(55.9,113.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E09E67").s().p("AABg0IgBBpg");
	this.shape_61.setTransform(52.2,85.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E09E67").s().p("AAADQIAAh8IAAgpIAAg2IAAjdIAADdIAAA2IAAApIABCWg");
	this.shape_62.setTransform(49,124.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E09E67").s().p("AAAgeIAAA9g");
	this.shape_63.setTransform(44.1,89.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#E09E67").s().p("AAABVIAAAKIAAhjIABisIgBCsIACCtIgBAIgAAABfIgBBIg");
	this.shape_64.setTransform(42.4,111.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E09E67").s().p("AAAgzIABAIIgBBfg");
	this.shape_65.setTransform(33.1,93.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_66.setTransform(24.1,109.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E09E67").s().p("AAAAHIgBjcIADAOIgCDOIAADPg");
	this.shape_67.setTransform(20.2,95.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E09E67").s().p("AAAgvIAABfg");
	this.shape_68.setTransform(15.8,88.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E09E67").s().p("AgBAyIABhyIAAAvIABhNIABC9g");
	this.shape_69.setTransform(15.2,136.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E09E67").s().p("AAAiAIAAEBg");
	this.shape_70.setTransform(14.5,117.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E09E67").s().p("AAAhaIAAC1g");
	this.shape_71.setTransform(13.1,79.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#E09E67").s().p("AAAgcIAAA5g");
	this.shape_72.setTransform(11.6,124.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_73.setTransform(3.4,121.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E09E67").s().p("AAAgjIABAIIgBA/g");
	this.shape_74.setTransform(0.8,100.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E09E67").s().p("AACBBIgCiMIgBB+IgBiiIAFAlIgBCLIAAAvg");
	this.shape_75.setTransform(0.3,104);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E09E67").s().p("AAAhTIAACng");
	this.shape_76.setTransform(75.1,23.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E09E67").s().p("AAAgfIAAA/g");
	this.shape_77.setTransform(73.4,30.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E09E67").s().p("AABhwIgBDhg");
	this.shape_78.setTransform(72.5,53.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E09E67").s().p("AAABiIAAnOIAAHOIACCaIgDBxg");
	this.shape_79.setTransform(69.2,40.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E09E67").s().p("AABjVIgBGrg");
	this.shape_80.setTransform(68.7,64.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E09E67").s().p("AAAhhIAADDg");
	this.shape_81.setTransform(65.4,33.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E09E67").s().p("AAAgbIAAA3g");
	this.shape_82.setTransform(65.6,31.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#E09E67").s().p("AAAiCIABEFg");
	this.shape_83.setTransform(64.1,56.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E09E67").s().p("AABg0IgBBpg");
	this.shape_84.setTransform(60.4,28.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E09E67").s().p("AAAgeIAAA9g");
	this.shape_85.setTransform(52.4,32.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E09E67").s().p("AAABVIAAAKIABhvIAAigIAACgIABC5IgBAIgAAABfIgBAwg");
	this.shape_86.setTransform(50.6,54.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E09E67").s().p("AAAgzIABAIIgBBfg");
	this.shape_87.setTransform(41.4,36.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E09E67").s().p("AAAgZIAAAzg");
	this.shape_88.setTransform(32.4,52.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#E09E67").s().p("AAAAHIgBjcIADAOIgCDOIAADPg");
	this.shape_89.setTransform(28.4,38.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#E09E67").s().p("AABgfIABCYgAgBh4IABBjg");
	this.shape_90.setTransform(24.1,38.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E09E67").s().p("AgBAyIABhyIAAAvIABhNIABC9g");
	this.shape_91.setTransform(23.4,79.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E09E67").s().p("AAAh/IAAD/g");
	this.shape_92.setTransform(22.7,59.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E09E67").s().p("AAAhaIAAC1g");
	this.shape_93.setTransform(21.4,22.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#E09E67").s().p("AAAgcIAAA5g");
	this.shape_94.setTransform(19.8,67.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E09E67").s().p("AAAgLIAAAYg");
	this.shape_95.setTransform(18.7,55.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E09E67").s().p("AAAgcIAAA5g");
	this.shape_96.setTransform(15.5,59.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E09E67").s().p("AAAgoIAABRg");
	this.shape_97.setTransform(14.2,49.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_98.setTransform(11.6,64.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E09E67").s().p("AACBBIgCiMIgBB+IgBiiIAFAlIgBCLIAAAvg");
	this.shape_99.setTransform(8.6,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,145.4,148), null);


(lib.Group_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AAAhSIAAClg");
	this.shape.setTransform(118.4,92.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AAAkyIAAgPIACIeIgDBkg");
	this.shape_1.setTransform(115.5,82.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_2.setTransform(115.1,103.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AAAgxIAAAaIABgbIAAgJIAAglIAAjaIAADaIAAAlIAAAJIAAFIIgBghIAABHgAABEWIAAAgg");
	this.shape_3.setTransform(112.2,64.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AAADEIAAh0IAAgnIAAkBIAAEBIAAAnIABCJg");
	this.shape_4.setTransform(105,105.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AAAgrIAABXg");
	this.shape_5.setTransform(101,121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AAABKIAAAJIgBArIABgrIAAh9IABgrIAAhGIAABGIgBArIACC/IgBAHg");
	this.shape_6.setTransform(99.2,94.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_7.setTransform(91,79.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAAAGIAAgsIAAiVIABAMIgBCJIAAAsIAAC2g");
	this.shape_8.setTransform(79.6,81.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAgRIAAhOIAABOIABBxgAAAgRIAAAJg");
	this.shape_9.setTransform(75.8,79.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AgBAsIABhlIAAAqIABhDIABClg");
	this.shape_10.setTransform(75.2,117);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAhwIAADhg");
	this.shape_11.setTransform(74.6,99.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_12.setTransform(73.4,66.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_13.setTransform(71.1,95.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAguIgBBbIgBiOIAFAgIgBCjg");
	this.shape_14.setTransform(62.1,88.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AABCWIAAhRIgBgEIAABOIgBgEIABg6IAAAOIABiPIABhsIgBBsIABBrIgBAFIABBdg");
	this.shape_15.setTransform(62.6,67.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AAAhjIAADGg");
	this.shape_16.setTransform(125.7,43.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AAAAvIAAhjIABBcIgBANg");
	this.shape_17.setTransform(124.5,66.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAAkyIAAgPIACIeIgDBkg");
	this.shape_18.setTransform(122.7,32.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_19.setTransform(122.4,53.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_20.setTransform(119.6,23.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_21.setTransform(115,23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_22.setTransform(108,26.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AAABYIgBBKgAAABEIAAAHIABhUIABCYIgBAHgAAABNIAAgCIAAANgAABihIAACYg");
	this.shape_23.setTransform(106.4,45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAAAGIgBivIADAMIgCCjIAACkg");
	this.shape_24.setTransform(86.9,28.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAAhGIAACMg");
	this.shape_25.setTransform(83.2,34.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_26.setTransform(82.4,67.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_27.setTransform(81.9,50.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_28.setTransform(80.7,16.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_29.setTransform(78.3,45.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AAAg3IgBBvIgBiOIAFAgIgBCNg");
	this.shape_30.setTransform(69.4,36.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AABi4IgBFyg");
	this.shape_31.setTransform(58.8,82.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AABiBIgBEDg");
	this.shape_32.setTransform(56.5,97.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AAAi/IAAF/g");
	this.shape_33.setTransform(53.3,107);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AAABWIACCIIgDBjgAAAlAIAAGWg");
	this.shape_34.setTransform(53.6,85.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AABEYIAAAhgAAAguIAAAaIAAgbIAAgJIABglIAAjbIAADbIgBAlIAAAJIABFHIgBggIAAA1g");
	this.shape_35.setTransform(50.4,67.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AAAgkIABgbIgBB/g");
	this.shape_36.setTransform(45.9,77.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAADDIAAh0IAAgmIAAkCIAAECIAAAmIABCLg");
	this.shape_37.setTransform(43.2,108.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AAAgrIAABXg");
	this.shape_38.setTransform(39.2,124.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AAABLIAAAJIgBAqIABgqIABh+IAAgrIAAhGIAABGIAAArIABC/IgBAHg");
	this.shape_39.setTransform(37.3,98.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_40.setTransform(29.2,83.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAAGIgBjBIADAMIgCC1IAAC2g");
	this.shape_41.setTransform(17.8,84.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AABgQIAABwgAAAhfIAABXg");
	this.shape_42.setTransform(14,83.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AgBAkIABhlIAAAqIABgzIABCVg");
	this.shape_43.setTransform(13.3,121.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E09E67").s().p("AAAhwIAADhg");
	this.shape_44.setTransform(12.7,103.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E09E67").s().p("AAAhPIAACfg");
	this.shape_45.setTransform(11.6,70.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E09E67").s().p("AABhOIgBCdg");
	this.shape_46.setTransform(3,107);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E09E67").s().p("AAAg3IgBBuIgBiOIAFAhIgCCOg");
	this.shape_47.setTransform(0.3,90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_48.setTransform(64.7,27.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E09E67").s().p("AAAhjIAADGg");
	this.shape_49.setTransform(63.8,47.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E09E67").s().p("AAAkyIAAgOIABIeIgBBjg");
	this.shape_50.setTransform(60.9,35.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E09E67").s().p("AABi/IgBF/g");
	this.shape_51.setTransform(60.5,56.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E09E67").s().p("AAAgtIAABbg");
	this.shape_52.setTransform(57.7,26.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E09E67").s().p("AAAiJIABETg");
	this.shape_53.setTransform(56.5,49.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E09E67").s().p("AAAgsIAABZg");
	this.shape_54.setTransform(46.1,29.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E09E67").s().p("AAABYIgBBKgAAABEIAAAHIABhUIABCYIgBAHgAAABNIAAgCIAAANgAABihIAACYg");
	this.shape_55.setTransform(44.6,48.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E09E67").s().p("AAAgWIAAAtg");
	this.shape_56.setTransform(28.6,46.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E09E67").s().p("AAAAGIgBi4IADAMIgCCsIAACtg");
	this.shape_57.setTransform(25,33.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E09E67").s().p("AABAoIgBggIABAgIAAAjgAAAgXIAAgaIAAgZIAAAZIAAA5gAAAhBIAAAqg");
	this.shape_58.setTransform(20.6,70.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E09E67").s().p("AAAh8IAAD5g");
	this.shape_59.setTransform(20,53.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E09E67").s().p("AAAgZIABgWIgBBfg");
	this.shape_60.setTransform(18.8,26.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_61.setTransform(16.5,48.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E09E67").s().p("AAAhCIgBBvIgBiOIAFAgIgBCjg");
	this.shape_62.setTransform(7.5,41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,125.7,130.4), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E09E67").s().p("AAAhZIAACzg");
	this.shape.setTransform(118.4,90.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E09E67").s().p("AAAgMIAAAZg");
	this.shape_1.setTransform(117.7,88.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E09E67").s().p("AAAAzIAAhrIABBkIgBANg");
	this.shape_2.setTransform(117.2,117.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E09E67").s().p("AAABdIACCUIgDBsgAAAlcIAAG5g");
	this.shape_3.setTransform(115.4,80);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E09E67").s().p("AABjMIgBGZg");
	this.shape_4.setTransform(115.1,103.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E09E67").s().p("AAAEBIAAAdIgBAcIABgcIAAl6IAAAdIAAhCIACD5IgBgCIgBDRgAAAjCIAAiEIAACEIAABBg");
	this.shape_5.setTransform(112.2,61.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E09E67").s().p("AABgyIgBBlg");
	this.shape_6.setTransform(107.8,68.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAADIIAAh3IAAgoIAAkIIAAEIIAAAoIABCPg");
	this.shape_7.setTransform(105,105.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAABUIAAgCIABhbIABCkIgBAHIgBhYIAAAIIAAACIgBBcgAABivIAACmg");
	this.shape_8.setTransform(99.1,94);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAg3IABAIIgBBng");
	this.shape_9.setTransform(91,77.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAAHIgBi/IADANIgCCyIAACyg");
	this.shape_10.setTransform(79.6,76.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAg3IAABvg");
	this.shape_11.setTransform(75.9,81.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E09E67").s().p("AgBAnIABhuIAAAuIABg3IABChg");
	this.shape_12.setTransform(75.1,118.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E09E67").s().p("AAAh0IAADpg");
	this.shape_13.setTransform(74.6,98.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E09E67").s().p("AAAhbIAAC3g");
	this.shape_14.setTransform(73.4,62.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E09E67").s().p("AAAg9IgBB6IgBibIAFAjIgBCag");
	this.shape_15.setTransform(62.1,85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E09E67").s().p("AAACXIAAhXIAAgFIAABVIAAgFIAAhwIAAARIABhkIAAhmIAABmIAADXg");
	this.shape_16.setTransform(62.5,65.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E09E67").s().p("AAAgdIAAA7g");
	this.shape_17.setTransform(107.9,17.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E09E67").s().p("AAABRIAAAKIAAAGIAAADIgBAlIABglIAAgDIABhwIABCxIgBAHgAABipIAACag");
	this.shape_18.setTransform(106.4,38.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E09E67").s().p("AAAgaIAAA1g");
	this.shape_19.setTransform(90.4,43.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E09E67").s().p("AAAAGIgBiwIADALIgCClIAAClg");
	this.shape_20.setTransform(86.8,31);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E09E67").s().p("AAAhpIABDTg");
	this.shape_21.setTransform(83.3,33.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E09E67").s().p("AgBApIABg0IAAAUIABhFIABB5g");
	this.shape_22.setTransform(82.4,41.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E09E67").s().p("AAAh6IAAD1g");
	this.shape_23.setTransform(81.8,44);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E09E67").s().p("AAAhCIAACEg");
	this.shape_24.setTransform(80.7,20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E09E67").s().p("AAAhZIAACzg");
	this.shape_25.setTransform(56.5,94.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E09E67").s().p("AAAAzIAAhrIABBkIgBANg");
	this.shape_26.setTransform(55.3,120.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E09E67").s().p("AABjMIgBGZg");
	this.shape_27.setTransform(53.2,107);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E09E67").s().p("AAAlNIAAgPIACJNIgDBsg");
	this.shape_28.setTransform(53.6,83.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E09E67").s().p("AABgyIgBBlg");
	this.shape_29.setTransform(45.9,72.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E09E67").s().p("AAADHIAAh2IAAgoIAAkHIAAEHIAAAoIABCOg");
	this.shape_30.setTransform(43.1,109.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E09E67").s().p("AAAgdIAAA7g");
	this.shape_31.setTransform(38.8,76.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E09E67").s().p("AAABgIgBBQgAAABKIAAAHIABhaIABClIgBAHgAAABUIAAgDIAAAPgAABivIAACmg");
	this.shape_32.setTransform(37.3,97.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E09E67").s().p("AAAAHIgBi/IADANIgCCyIAACyg");
	this.shape_33.setTransform(17.8,80.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E09E67").s().p("AAAhMIAACZg");
	this.shape_34.setTransform(14.1,86.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E09E67").s().p("AgBAnIABhuIAAAuIABg3IABChg");
	this.shape_35.setTransform(13.3,121.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E09E67").s().p("AAAh0IAADpg");
	this.shape_36.setTransform(12.8,101.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E09E67").s().p("AAAhLIAACYg");
	this.shape_37.setTransform(11.6,67.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E09E67").s().p("AAAgoIAABRg");
	this.shape_38.setTransform(10.2,109.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E09E67").s().p("AAAg9IgBB6IgBibIAFAjIgBCag");
	this.shape_39.setTransform(0.3,88.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E09E67").s().p("AAAAlIAAhPIABBVg");
	this.shape_40.setTransform(65.4,17.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E09E67").s().p("AAAgRIABgZIgBBVg");
	this.shape_41.setTransform(64.7,17.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E09E67").s().p("AAAgnIAAgCIACBGIgDANg");
	this.shape_42.setTransform(60.9,18);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E09E67").s().p("AABgqIAABLIgBAKg");
	this.shape_43.setTransform(60.5,18);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,13.7,118.4,118.2), null);


(lib.btnXX = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.996)").s().p("AAXAuIgXgYIgWAYQgDACgEAAQgCAAgCgCIgMgMQgCgCAAgCQAAgEACgDIAYgXIgYgWQgCgDAAgEQAAgCACgCIAMgMQACgCACAAQAEAAADACIAWAYIAXgYQADgCAEAAQACAAACACIAMAMQACACAAACQAAAEgCADIgYAWIAYAXQACADAAAEQAAACgCACIgMAMQgCACgCAAQgEAAgDgCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A33645").s().p("AAXAuIgXgYIgWAYQgDACgEAAQgCAAgCgCIgMgMQgCgCAAgCQAAgEACgDIAYgXIgYgWQgCgDAAgEQAAgCACgCIAMgMQACgCACAAQAEAAADACIAWAYIAXgYQADgCAEAAQACAAACACIAMAMQACACAAACQAAAEgCADIgYAWIAYAXQACADAAAEQAAACgCACIgMAMQgCACgCAAQgEAAgDgCg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},2).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A33645").s().p("AhKBLQgfgfABgsQgBgqAfggQAfgfArABQArgBAgAfQAeAgAAAqQAAAsgeAfQggAfgrgBQgrABgfgfg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A33645").ss(4,0,0,3).p("ABqAAQAAAsgfAfQgfAfgsAAQgrAAgfgfQgfgfAAgsQAAgrAfgfQAfgfArAAQAsAAAfAfQAfAfAAArg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.996)").s().p("AhKBLQgfgfABgsQgBgqAfggQAfgfArABQArgBAgAfQAeAgAAAqQAAAsgeAfQggAfgrgBQgrABgfgfg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-10.5,21.1,21.1);


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


(lib.btnup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#105C7E").s().p("ApwAvQgiAAgBggIAAgcQABghAiAAIThAAQAiAAABAhIAAAbQgBAhgiAAg");
	this.shape.setTransform(0,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#093A4F").s().p("ApwAiQgyAAAAgxIAAgSQABAuAxAAIThAAQAxAAABguIAAASQAAAxgyAAg");
	this.shape_1.setTransform(0,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0E4B66").s().p("ApwCBQgxAAgBgvIAAijQABgvAxgBIThAAQAxABABAvIAACjQgBAvgxAAg");
	this.shape_2.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-14,135,28);


(lib.btndown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#105C7E").s().p("ApwAvQgiAAgBggIAAgcQABghAiAAIThAAQAiAAABAhIAAAcQgBAggiAAg");
	this.shape.setTransform(0,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0E4B66").s().p("ApwCBQgxABgBgwIAAijQABgvAxAAIThAAQAxAAABAvIAACjQgBAwgxgBg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#093A4F").s().p("ApwAiQgyAAAAgxIAAgSQABAuAxAAIThAAQAxAAABguIAAASQAAAxgyAAg");
	this.shape_2.setTransform(0,10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-13,135,27);


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


(lib.binLid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#BCBEC0","#FFFFFF","#C1C2C4","#FFFFFF","#BCBEC0","#C1C2C4"],[0,0.188,0.42,0.678,0.812,1],-75.3,0,91.4,0).s().p("ArRB0QgSAAgOgPQgOgOAAgUIAAiEQAAgVAOgOQANgPATAAIWjAAQATAAANAPQAOAOAAAVIAACEQAAATgOAPQgOAPgSAAg");
	this.shape.setTransform(0,9.4,1.2,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C1C2C4","#D1D3D4","#FFFFFF","#D1D3D4","#FFFFFF","#C1C2C4"],[0,0.22,0.478,0.78,0.922,1],-78.1,-1.3,76.5,1.4).s().p("AroCEQgUAAgNgPQgOgPgBgWIAAifQABgWAOgPQANgPAUAAIXRAAQAUAAAOAPQAOAQgBAVIAACfQABAVgOAQQgPAPgTAAg");
	this.shape_1.setTransform(0,9.4,1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#828182","#FFFFFF"],[0,1],-0.3,4.3,-4,-19.5).s().p("ADcBMQgFAAgEgEQgEgDAAgGQAAgFAEgDQAEgEAFgBIA7AAIAAhvIotAAIAABvIA7AAQAFABAEAEQAEADAAAFQAAAGgEADQgEAEgFAAIiEAAQgFAAgEgEQgDgDAAgGQAAgFADgDQAEgEAFgBIA7AAIAAh9IJKACIgCB7IA8AAQAFABADAEQAEADAAAFQAAAFgEAEQgDAEgFAAg");
	this.shape_2.setTransform(-2.7,-15.8,1.2,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E6B6B").s().p("ADcBWQgKABgHgIQgHgHAAgJQAAgLAHgGQAHgIAKABIAwAAIAAhZIoXAAIAABZIAxAAQAJgBAIAIQAGAGAAALQAAAJgGAHQgIAIgJgBIiFAAQgJABgIgIQgGgHgBgJQABgLAGgGQAIgIAJABIAwAAIAAhzQAAgEADgDQADgCADgBIJNAAQAEABACACQADAEAAADIAABzIAwAAQAKgBAGAIQAIAGAAALQAAAJgIAHQgHAIgJgBg");
	this.shape_3.setTransform(-2.7,-14.9,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-25.3,190.2,50.6);


(lib.binBody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C6C6C6","#E7E8E9","#D7D7D7","#E7E8E9","#C6C6C6"],[0,0.239,0.463,0.729,1],-67.3,-15.8,66.9,-15.8).s().p("ApsTYQgqgBgcghQgcghgBgtMgBxgk/IaBAAMgB9Ak+QgCAvgcAgQgdAigoAAg");
	this.shape.setTransform(0,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C1C2C4","#D1D3D4","#FFFFFF","#D1D3D4","#FFFFFF","#C1C2C4"],[0,0.22,0.478,0.78,0.922,1],-84,-14.3,101.3,-10.8).s().p("ANBAYI6BAAIgbAAIAAAAIgCgvIa7AAIgDAvg");
	this.shape_1.setTransform(0,-98.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#ADABAB","#CECAC9","#BEBBBA","#CECAC9","#BEBBBA","#ADABAB"],[0,0.251,0.42,0.612,0.761,1],-64.7,-18.5,77.6,-15.8).s().p("ApsTmQgzAAglgoQgjgpgDg7MgBxgk/IAbAAMABxAk+QABAuAcAgQAcAiAqAAITNAAQAoAAAdgiQAcggACguMAB9gk+IAaAAMgB8Ak/QgDA7gkAoQglApgyAAg");
	this.shape_2.setTransform(0,29.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#A09E9E","#A09E9E","#ABA9A9","#A09E9E"],[0,0.42,0.831,1],-102.2,-12.1,123.9,-12.1).s().p("AtdAaIgBAAIgCgzIbBAAIgDAzg");
	this.shape_3.setTransform(0,-103.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-106.1,173,261);


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


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnhAaQgLABgIgJQgIgHAAgLQAAgKAIgIQAHgIAMAAIPDAAQAMAAAHAIQAIAIAAAKQAAALgIAHQgIAJgLgBg");
	mask.setTransform(70.5,51.6);

	// Layer_3
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(63.3,65.2,1,1,0,0,0,63.3,65.2);
	this.instance.alpha = 0.199;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94552E").s().p("AnhAaQgLABgIgJQgIgHAAgLQAAgKAIgIQAHgIAMAAIPDAAQAMAAAHAIQAIAIAAAKQAAALgIAHQgIAJgLgBg");
	this.shape.setTransform(70.5,51.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(19.6,48.9,101.9,5.3), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvqArQgQAAgLgMQgMgLAAgRIAAgFQAAgRAMgLQALgMAQAAIfVAAQAQAAALAMQAMALAAARIAAAFQAAARgMALQgLAMgQAAg");
	mask.setTransform(161,25.2);

	// Layer_3
	this.instance = new lib.Group_0();
	this.instance.parent = this;
	this.instance.setTransform(306.1,65.2,1,1,0,0,0,62.9,65.2);
	this.instance.alpha = 0.172;

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(183.2,65.2,1,1,0,0,0,62.9,65.2);
	this.instance_1.alpha = 0.172;

	this.instance_2 = new lib.Group_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(63.3,65.2,1,1,0,0,0,63.3,65.2);
	this.instance_2.alpha = 0.172;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A56033").s().p("AvqArQgQAAgLgMQgMgLAAgRIAAgFQAAgRAMgLQALgMAQAAIfVAAQAQAAALAMQAMALAAARIAAAFQAAARgMALQgLAMgQAAg");
	this.shape.setTransform(161,25.2);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(56.9,20.9,208.4,8.5), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzhPDIAA+FMAnDAAAIAAeFg");
	mask.setTransform(161.1,96.3);

	// Layer_3
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(162,168.6,1,1,0,0,0,91.7,1.2);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group();
	this.instance_1.parent = this;
	this.instance_1.setTransform(59.2,218,1,1,0,0,0,59.2,72.8);
	this.instance_1.alpha = 0.102;

	this.instance_2 = new lib.Group_1_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(186.7,217.7,1,1,0,0,0,63.3,77.7);
	this.instance_2.alpha = 0.102;

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(36.1,158.4,217.6,34.2), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjKCuIAAlbIGVAAIAAFbg");
	mask.setTransform(74.9,87.8);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2682E").s().p("AhkAHIAAgNIDJAAIAAANg");
	this.shape.setTransform(74.9,75.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E90C4").s().p("AiSAFIAAgIIElAAIAAAIg");
	this.shape_1.setTransform(74.8,100.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E90C4").s().p("Ag8AFIAAgIIB5AAIAAAIg");
	this.shape_2.setTransform(83.4,95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E90C4").s().p("Ag8AEIAAgIIB5AAIAAAIg");
	this.shape_3.setTransform(83.4,90.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1E90C4").s().p("Ag8AFIAAgIIB5AAIAAAIg");
	this.shape_4.setTransform(83.4,84.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1E90C4").s().p("Ag8AFIAAgIIB5AAIAAAIg");
	this.shape_5.setTransform(83.4,79);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23648F").s().p("AgNAOQgUgTAAgcIBDAAIAABDQgcAAgTgUg");
	this.shape_6.setTransform(63.9,92.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCE00").s().p("AghAiQAAgcAUgTQATgUAcAAIAABDg");
	this.shape_7.setTransform(64,84.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1E90C4").s().p("AgaghQAkAAASAbIg2Aog");
	this.shape_8.setTransform(71.3,83.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F27039").s().p("AghgNIA2goQANATAAAVQAAAbgUAUQgTAUgcAAg");
	this.shape_9.setTransform(71.5,90.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiwCXIAAktIFhAAIAAEtg");
	this.shape_10.setTransform(74.9,87.8);

	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(72.7,74,1,1,0,0,0,72.7,74);
	this.instance.alpha = 0.199;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9E5C32").s().p("AjKCuIAAlbIGVAAIAAFbg");
	this.shape_11.setTransform(74.9,87.8);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.instance,this.shape_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(54.6,70.4,40.7,34.8), null);


(lib.dustbin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// flash0.ai
	this.instance = new lib.binLid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-116);

	this.instance_1 = new lib.binBody("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance,p:{rotation:0,x:0,y:-116}}]}).to({state:[{t:this.instance_1},{t:this.instance,p:{rotation:4,x:4,y:-128}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.1,-141.3,190.2,309.7);


(lib.dustbin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6D7F91").s().p("AgxB+IAAj7IBjAAIAAD7g");
	this.shape.setTransform(-89.5,-73.1,0.946,0.821);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDD9E0").s().p("AgmB+IAAj7IBNhJIAAGNg");
	this.shape_1.setTransform(-81,-73.1,0.946,0.821);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDD9E0").s().p("AgmB+IAAj7IBNhJIAAGNg");
	this.shape_2.setTransform(-81,-73.1,0.946,0.821);

	this.instance = new lib.Path_3_0();
	this.instance.parent = this;
	this.instance.setTransform(-96.2,26.2,0.946,0.821,0,0,0,5.5,6.5);
	this.instance.alpha = 0.602;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDD9E0").s().p("AgpHlQgRgRAAgZIAAt1QAAgYARgSQARgRAYAAQAZAAARARQASASAAAYIAAN1QAAAZgSARQgRARgZAAQgYAAgRgRg");
	this.shape_3.setTransform(-95.7,26.7,0.946,0.821);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6D7F91").s().p("AhpCEIAAkHIDTAAIAAEHg");
	this.shape_4.setTransform(-94.3,26.7,0.946,0.821);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BDD9E0").s().p("AgkE5IAApxIBJAAIAAJxg");
	this.shape_5.setTransform(-80.8,26.7,0.946,0.821);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#576674").s().p("AhxUhMAAAgpBIDjAAMAAAApBg");
	this.shape_6.setTransform(-57,-15.8,0.946,1.011);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6D7F91").s().p("AhxUhMAAAgpBIDjAAMAAAApBg");
	this.shape_7.setTransform(-57,-0.8,0.946,0.821);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6D7F91").s().p("AgxWNMAAAgsZIBkAAMAAAAsZg");
	this.shape_8.setTransform(-72.5,-15.8,0.946,1.011);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6D7F91").s().p("AtUUhMAAAgpBIapAAMAAAApBg");
	this.shape_9.setTransform(3.4,-15.8,0.946,1.011);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#98A5B1").s().p("AwrcIMAAAg4OMAhXAAAMAAAA4Og");
	this.shape_10.setTransform(3.4,-16.4,0.946,0.821);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer_3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFF00").ss(6,0,0,3).p("AQUXBI/jAAIAAp9QgLgEgKgIQgQgOAAgUIAAj/IgfAAIAAjZIAfAAIAAj/QAAgUAQgPQAKgIALgDIAA3RIfjAAg");
	this.shape_11.setTransform(0,-16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AvPXBIAAp9QgLgEgJgIQgRgOAAgUIAAj/IgeAAIAAjZIAeAAIAAj/QAAgUARgPQAJgIALgEIAA3QIfiAAMAAAAuBg");
	this.shape_12.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-164.1,208.7,295.5);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-37.3,236.5,39.3);


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


(lib.btnDrag20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQANgTAXAAQAZAAAMATQANASAAAjQAAAkgNASQgMATgZAAQgXAAgNgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape.setTransform(46.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBEQgMgEgJgJIAGgMQALAIAJAEQAJAEAJAAQASAAAKgQQAKgRAAgcIAAgDQgFAKgKAHQgKAGgNAAQgNAAgKgFQgKgGgFgJQgGgLAAgNQAAgNAGgLQAGgKAKgGQALgGANAAQAZAAAOASQAOASAAAhQAAAkgPAUQgOAUgZAAQgNAAgLgFgAgYgxQgJAIAAAPQAAAOAJAJQAIAHAOAAQANAAAJgHQAIgJAAgOQAAgOgIgJQgJgJgNAAQgOAAgIAJg");
	this.shape_1.setTransform(34.7,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_2.setTransform(22.7,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBHIAAh/IgyAAIAAgOIBzAAIAAAOIgyAAIAAB/g");
	this.shape_3.setTransform(10.7,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_4.setTransform(-1.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAGgMALgHQALgGAOAAQAKAAAKADQAJAEAGAGIgFAMQgIgGgHgDQgHgDgHAAQgPAAgJALQgIAKAAARQAAATAIAKQAJAKAPAAQAHAAAHgDQAHgDAIgGIAFAMQgGAGgKAEQgKADgKAAQgOAAgKgGg");
	this.shape_5.setTransform(-12.1,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA0BHIAAhpIguBpIgLAAIguhoIAABoIgPAAIAAiNIANAAIA1B6IA2h6IANAAIAACNg");
	this.shape_6.setTransform(-25.8,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_7.setTransform(-40,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_8.setTransform(-49.3,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{y:1.6}},{t:this.shape_7,p:{y:3}},{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:3}},{t:this.shape_4,p:{y:3}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_8,p:{y:2.8}},{t:this.shape_7,p:{y:4.3}},{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:4.3}},{t:this.shape_4,p:{y:4.3}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_9.setTransform(0.1,0);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNAAQgLAAgJgGQgJgFgEgKIAAA+gAgVgwQgIAJAAATQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOABQgOAAgIAKg");
	this.shape.setTransform(37.4,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHBIIAAhkIAPAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_1.setTransform(28.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBJIAAg+QAAgNgGgGQgFgHgMAAQgNAAgJAIQgIAJAAAOIAAA5IgQAAIAAiRIAQAAIAAA/QAFgKAJgFQAJgEAKAAQAkAAAAAmIAAA/g");
	this.shape_2.setTransform(20.6,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_3.setTransform(9.8,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_4.setTransform(-1.2,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgHgHQgHgGgLAAQgUAAgVAQIgFgNQAHgHANgFQAOgFAMAAQATAAALAKQAMAKAAASQAAAMgGALQgGAKgMAOIgoAsIBFAAIAAAOg");
	this.shape_5.setTransform(-13.1,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQAMgTAYAAQAYAAANATQANASAAAjQAAAkgNASQgNATgYAAQgYAAgMgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape_6.setTransform(-25.1,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQAMgTAYAAQAYAAANATQANASAAAjQAAAkgNASQgNATgYAAQgYAAgMgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape_7.setTransform(-37.1,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNAAQgLAAgJgGQgJgFgEgKIAAA+gAgVgwQgIAJAAATQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOAAgIALg");
	this.shape_8.setTransform(37.4,6.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbBKIAAg/QAAgNgGgGQgFgHgMAAQgNAAgJAJQgIAIAAAOIAAA6IgQAAIAAiSIAQAAIAAA/QAFgKAJgFQAJgEAKgBQAkAAAAAoIAAA/g");
	this.shape_9.setTransform(20.6,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgHgHQgHgGgLAAQgUAAgVAQIgFgNQAHgHANgFQAOgFAMAAQATAAALAKQAMAKAAASQAAALgGAMQgGAKgMAOIgoAsIBFAAIAAAOg");
	this.shape_10.setTransform(-13.1,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:1}},{t:this.shape_5},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:3}},{t:this.shape_2},{t:this.shape_1,p:{y:0.9}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{y:2.2}},{t:this.shape_6,p:{y:2.2}},{t:this.shape_10},{t:this.shape_4,p:{y:2.2}},{t:this.shape_3,p:{y:4.3}},{t:this.shape_9},{t:this.shape_1,p:{y:2.2}},{t:this.shape_8}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_11.setTransform(0.1,0);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBEQgNgFgJgIIAHgNQAUARAUAAQAQAAAHgHQAIgHAAgNQAAgaggAAIgQAAIAAgNIANAAQAPAAAJgHQAIgHAAgNQAAgMgHgGQgHgGgMAAQgUAAgUAQIgGgMQAJgIAMgFQAMgFANAAQATAAALAKQAMAKAAAQQAAANgGAJQgGAJgLAEQANADAHAIQAGAJABAOQAAASgNALQgNALgVAAQgNAAgNgFg");
	this.shape.setTransform(37.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBEQgMgFgKgIIAHgNQAUARAUAAQAPAAAJgHQAHgHAAgNQAAgaggAAIgQAAIAAgNIANAAQAPAAAIgHQAJgHAAgNQAAgMgHgGQgHgGgNAAQgTAAgUAQIgGgMQAIgIANgFQAMgFANAAQATAAAMAKQALAKAAAQQAAANgGAJQgGAJgKAEQAMADAHAIQAHAJAAAOQAAASgNALQgNALgWAAQgMAAgNgFg");
	this.shape_1.setTransform(25.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgGgHQgIgGgLAAQgUAAgVAQIgGgNQAJgHANgFQANgFAMAAQATAAALAKQALAKAAASQABAMgGALQgFAKgNAOIgoAsIBFAAIAAAOg");
	this.shape_2.setTransform(14.2,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAXA+QgJgLAAgWQAAgWAJgJQAJgLARAAQAQAAAJALQAJAJAAAWQAAAWgJALQgJALgQAAQgRAAgJgLgAAiAFQgFAIAAAQQAAARAFAHQAFAIAKAAQAKAAAFgIQAEgHAAgRQAAgQgFgIQgEgHgKAAQgKAAgFAHgAgwBHIBRiNIAQAAIhRCNgAhJADQgJgKAAgVQAAgWAJgLQAJgLARAAQAQAAAJALQAJALAAAWQAAAVgJAKQgJALgQAAQgRAAgJgLgAg+g0QgFAHAAARQAAAQAFAIQAFAHAKAAQAKAAAEgHQAFgIAAgQQAAgRgFgHQgEgIgKAAQgKAAgFAIg");
	this.shape_3.setTransform(-1.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNAAQgLAAgJgGQgJgFgEgKIAAA+gAgVgwQgIAJAAATQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOABQgOAAgIAKg");
	this.shape_4.setTransform(-16.5,5.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHAyIgrhjIARAAIAhBSIAjhSIAQAAIgsBjg");
	this.shape_5.setTransform(-27.9,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBHIAAiNIAQAAIAAB/IBHAAIAAAOg");
	this.shape_6.setTransform(-38,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgGgHQgIgGgLAAQgUAAgVAQIgGgNQAJgHANgFQANgFAMAAQATAAALAKQALAKAAASQABALgGAMQgFAKgNAOIgoAsIBFAAIAAAOg");
	this.shape_7.setTransform(14.2,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNAAQgLAAgJgGQgJgFgEgKIAAA+gAgVgwQgIAJAAATQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOAAgIALg");
	this.shape_8.setTransform(-16.5,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:3.1}},{t:this.shape_4},{t:this.shape_3,p:{y:1}},{t:this.shape_2},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:4.3}},{t:this.shape_8},{t:this.shape_3,p:{y:2.2}},{t:this.shape_7},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_9.setTransform(0.1,0);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXA+QgJgLAAgWQAAgWAJgJQAJgLARAAQAQAAAJALQAJAJAAAWQAAAWgJALQgJALgQAAQgRAAgJgLgAAiAFQgFAIAAAQQAAARAFAHQAFAIAKAAQAKAAAFgIQAEgHAAgRQAAgQgFgIQgEgHgKAAQgKAAgFAHgAgwBHIBRiNIAQAAIhRCNgAhJADQgJgKAAgVQAAgWAJgLQAJgLARAAQAQAAAJALQAJALAAAWQAAAVgJAKQgJALgQAAQgRAAgJgLgAg+g0QgFAHAAARQAAAQAFAIQAFAHAKAAQAKAAAEgHQAFgIAAgQQAAgRgFgHQgEgIgKAAQgKAAgFAIg");
	this.shape.setTransform(46.6,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgNAEQAOADAJAJQAHAJAAANQAAATgOAKQgOALgXAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgJAGAAAMQAAAMAJAHQAIAHAOABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape_1.setTransform(31.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_2.setTransform(19.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQAMgTAYAAQAYAAANATQANASAAAjQAAAkgNASQgNATgYAAQgYAAgMgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape_3.setTransform(7.3,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_4.setTransform(-4.2,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIBIIAAhkIAQAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_5.setTransform(-12,0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A3IAGgNQALAJALAEQALAEAOAAQAQAAAKgHQAKgHAAgMQAAgHgFgEQgFgFgHgDIgTgFQgQgEgKgEQgLgDgGgIQgIgIAAgNQABgMAGgJQAHgJALgGQAMgFAPAAQAOAAANAFQANAEAIAJIgFANQgKgJgLgEQgKgEgMAAQgQAAgJAHQgKAHAAANQAAALAJAFQAHAFARAEQASAFALADQAKADAHAIQAHAHAAANQAAAMgGAJQgHAJgMAFQgMAFgPAAQghAAgUgSg");
	this.shape_6.setTransform(-20.6,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0A3IAGgNQALAJALAEQALAEANAAQASAAAJgHQAJgHAAgMQABgHgFgEQgEgFgIgDIgUgFQgPgEgLgEQgKgDgHgIQgGgIAAgNQgBgMAHgJQAGgJAMgGQAMgFAOAAQAQAAAMAFQANAEAJAJIgHANQgKgJgKgEQgKgEgNAAQgPAAgJAHQgKAHAAANQAAALAIAFQAJAFAQAEQASAFAKADQALADAHAIQAHAHAAANQAAAMgHAJQgGAJgMAFQgLAFgRAAQggAAgUgSg");
	this.shape_7.setTransform(-33,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_8.setTransform(-45.6,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_9.setTransform(-53.7,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBKIAAiSIAPAAIAACSg");
	this.shape_10.setTransform(-53.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8,p:{y:3}},{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:0.9}},{t:this.shape_4,p:{y:3}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_10},{t:this.shape_8,p:{y:4.3}},{t:this.shape_7,p:{y:2.2}},{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:4.3}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_11.setTransform(0.1,0);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcBEQgMgEgJgJIAGgMQALAIAJAEQAJAEAJAAQASAAAKgQQAKgRAAgcIAAgDQgFAKgKAHQgKAGgNAAQgNAAgKgFQgKgGgFgJQgGgLAAgNQAAgNAGgLQAGgKAKgGQALgGANAAQAZAAAOASQAOASAAAhQAAAkgPAUQgOAUgZAAQgNAAgLgFgAgYgxQgJAIAAAPQAAAOAJAJQAIAHAOAAQANAAAJgHQAIgJAAgOQAAgOgIgJQgJgJgNAAQgOAAgIAJg");
	this.shape.setTransform(41,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgNAEQAOADAJAJQAHAJAAANQAAATgOAKQgOALgXAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgJgHQgKgIgQgBQgPABgJAIgAgWgzQgJAGAAAMQAAAMAJAHQAIAHAOABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape_1.setTransform(29,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AglBHIBCh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_2.setTransform(17,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgHQgGgGgMAAQgMAAgJAJQgIAIAAAPIAAA5IgRAAIAAhIQAAgPgBgNIAQAAIABASQAFgKAJgFQAJgFALgBQAkABAAAoIAAA+g");
	this.shape_3.setTransform(5.2,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIBIIAAhkIAQAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_4.setTransform(-3,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA5A0IAAg+QAAgOgFgHQgFgGgLAAQgMAAgIAJQgHAIAAAPIAAA5IgPAAIAAg+QAAgOgFgHQgFgGgLAAQgNAAgHAJQgHAIAAAPIAAA5IgRAAIAAhIQAAgPgBgNIAPAAIACARQAEgJAIgFQAJgGALAAQAMAAAHAGQAHAEADAKQAFgJAJgFQAJgFALgBQAhABAAAoIAAA+g");
	this.shape_5.setTransform(-14.3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBEQgKgHgGgMQgFgMAAgPQAAgQAFgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAFAEAJIAAg/IAQAAIAACSIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgGQgJAJAAATQAAASAJAKQAIALAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape_6.setTransform(-29.3,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_7.setTransform(-41.3,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgHQgGgGgMAAQgMAAgJAIQgIAJAAAPIAAA4IgRAAIAAhHQAAgPgBgNIAQAAIABASQAFgKAJgFQAJgFALgBQAkAAAAAoIAAA+g");
	this.shape_8.setTransform(5.2,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5AzIAAg9QAAgOgFgHQgFgGgLAAQgMAAgIAIQgHAJAAAPIAAA4IgPAAIAAg9QAAgOgFgHQgFgGgLAAQgNAAgHAIQgHAJAAAPIAAA4IgRAAIAAhHQAAgPgBgNIAPAAIACARQAEgJAIgFQAJgGALAAQAMAAAHAGQAHAEADAKQAFgJAJgFQAJgFALgBQAhAAAAAoIAAA+g");
	this.shape_9.setTransform(-14.3,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:3.1}},{t:this.shape_6,p:{y:0.9}},{t:this.shape_5},{t:this.shape_4,p:{y:1}},{t:this.shape_3},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:4.3}},{t:this.shape_6,p:{y:2.1}},{t:this.shape_9},{t:this.shape_4,p:{y:2.2}},{t:this.shape_8},{t:this.shape_2,p:{y:2.3}},{t:this.shape_1,p:{y:2.3}},{t:this.shape,p:{y:2.3}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_10.setTransform(0.1,0);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGAAAMQAAAMAIAHQAJAHANABQAPgBAIgHQAJgHAAgMQAAgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape.setTransform(41.3,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_1.setTransform(29.8,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAXA+QgJgLAAgWQAAgWAJgJQAJgLARAAQAQAAAJALQAJAJAAAWQAAAWgJALQgJALgQAAQgRAAgJgLgAAiAFQgFAIAAAQQAAARAFAHQAFAIAKAAQAKAAAFgIQAEgHAAgRQAAgQgFgIQgEgHgKAAQgKAAgFAHgAgwBHIBRiNIAQAAIhRCNgAhJADQgJgKAAgVQAAgWAJgLQAJgLARAAQAQAAAJALQAJALAAAWQAAAVgJAKQgJALgQAAQgRAAgJgLgAg+g0QgFAHAAARQAAAQAFAIQAFAHAKAAQAKAAAEgHQAFgIAAgQQAAgRgFgHQgEgIgKAAQgKAAgFAIg");
	this.shape_2.setTransform(13.9,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_3.setTransform(-1.2,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBHIAAh/IgyAAIAAgOIBzAAIAAAOIgyAAIAAB/g");
	this.shape_4.setTransform(-13,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghApQgIgKgBgTIAAg+IAQAAIAAA9QAAAOAHAGQAFAHAMAAQAMgBAIgIQAIgJAAgPIAAg3IARAAIAABjIgQAAIAAgRQgFAJgJAFQgJAFgKAAQgRAAgKgKg");
	this.shape_5.setTransform(-24.8,3.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_6.setTransform(-32.9,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNAAQgLAAgJgGQgJgFgEgKIAAA+gAgVgwQgIAJAAATQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOABQgOAAgIAKg");
	this.shape_7.setTransform(-41.1,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AghApQgIgKgBgTIAAg+IAQAAIAAA9QAAAOAHAGQAFAHAMAAQAMgBAIgIQAIgJAAgPIAAg3IARAAIAABkIgQAAIAAgSQgFAKgJAEQgJAFgKAAQgRAAgKgKg");
	this.shape_8.setTransform(-24.8,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBKIAAiSIAPAAIAACSg");
	this.shape_9.setTransform(-32.9,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNAAQgLAAgJgGQgJgFgEgKIAAA+gAgVgwQgIAJAAATQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOAAgIALg");
	this.shape_10.setTransform(-41.1,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:3}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_4,p:{y:2.2}},{t:this.shape_3,p:{y:4.3}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_11.setTransform(0.1,0);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJAOgDQgNgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgWAAgOgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgIAGAAAMQAAAMAIAHQAJAHANABQAPgBAIgHQAJgHAAgMQAAgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape.setTransform(30.9,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBEQgNgFgJgIIAHgNQAUARAUAAQAQAAAHgHQAIgHAAgNQAAgagfAAIgRAAIAAgNIANAAQAPAAAJgHQAIgHAAgNQAAgMgHgGQgHgGgMAAQgUAAgUAQIgGgMQAJgIAMgFQAMgFANAAQATAAALAKQAMAKAAAQQAAANgGAJQgGAJgLAEQANADAHAIQAGAJAAAOQAAASgMALQgNALgVAAQgNAAgNgFg");
	this.shape_1.setTransform(18.7,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAlAxIglhSIgkBSIgOAAIAthhIALAAIAtBhg");
	this.shape_2.setTransform(6.9,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBHIAAh/IgyAAIAAgOIBzAAIAAAOIgyAAIAAB/g");
	this.shape_3.setTransform(-5.2,-1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_4.setTransform(-17.5,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZBAQgPgJgIgQQgIgRAAgWQAAgWAIgQQAIgQAPgJQAPgJATAAQAOAAANAFQAMAEAJAJIgGANQgKgJgKgEQgKgEgMAAQgXAAgMAQQgNAPAAAbQAAAcANAPQAMAQAXAAQAMAAAKgEQAKgEAKgJIAGANQgJAJgMAEQgNAFgOAAQgTAAgPgJg");
	this.shape_5.setTransform(-29.9,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:-1.6}},{t:this.shape_4,p:{y:0.5}},{t:this.shape_3,p:{y:-1.6}},{t:this.shape_2,p:{y:-2.2}},{t:this.shape_1,p:{y:-1.6}},{t:this.shape,p:{y:-1.6}}]}).to({state:[{t:this.shape_5,p:{y:-0.3}},{t:this.shape_4,p:{y:1.8}},{t:this.shape_3,p:{y:-0.3}},{t:this.shape_2,p:{y:-0.9}},{t:this.shape_1,p:{y:-0.3}},{t:this.shape,p:{y:-0.3}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_6.setTransform(0.1,0);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-18.2,135,32.3);


(lib.btnDrag13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBHIBCh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape.setTransform(45.6,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaBDQgMgEgIgJIAGgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgOgIgIQgIgIgPAAQgTAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQAMgLARAAQANAAAKAGQALAGAFAIQAGALgBANQAAANgFALQgHALgKAFQgLAGgOAAQgNAAgNgFg");
	this.shape_1.setTransform(33.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgHgHQgGgGgMAAQgUAAgVAQIgFgNQAHgHANgFQANgFANAAQATAAALAKQAMAKAAASQAAAMgGALQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_2.setTransform(21.7,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_3.setTransform(9.6,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpA6QgPgPAAgcIAAhWIARAAIAABXQAAAVAKAKQAKALATAAQAUAAAKgLQAKgKAAgVIAAhXIARAAIAABWQAAAcgPAPQgOAOgcAAQgbAAgOgOg");
	this.shape_4.setTransform(-3.7,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgGQgFgHgMAAQgOAAgIAJQgIAJAAAOIAAA4IgQAAIAAhHQAAgQgCgMIAPAAIACASQAFgKAJgFQAJgGALABQAkAAAAAnIAAA+g");
	this.shape_5.setTransform(-16.8,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_6.setTransform(-29,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA0BHIAAhpIguBpIgLAAIguhoIAABoIgPAAIAAiNIANAAIA1B6IA2h6IANAAIAACNg");
	this.shape_7.setTransform(-43.2,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBDQgMgFgIgHIAGgOQATARAVAAQAOAAAJgJQAIgIAAgOQAAgOgIgKQgIgHgPAAQgTAAgMAPIgMAAIAAhSIBVAAIAAANIhEAAIAAA0QAMgMARAAQANAAAKAGQALAFAFAJQAGALgBAOQAAANgFAKQgHAKgKAGQgLAGgOAAQgNAAgNgFg");
	this.shape_8.setTransform(33.9,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBIIAAgMIAxg3QAKgLAEgJQAFgJAAgJQAAgMgHgGQgGgGgMAAQgUAAgVAQIgFgNQAHgHANgFQANgFANAAQATAAALAKQAMAKAAARQAAANgGALQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_9.setTransform(21.7,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgpA5QgPgOAAgdIAAhVIARAAIAABXQAAAVAKAKQAKALATAAQAUAAAKgLQAKgKAAgVIAAhXIARAAIAABVQAAAdgPAOQgOAPgcAAQgbAAgOgPg");
	this.shape_10.setTransform(-3.7,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgHQgFgGgMAAQgOAAgIAJQgIAIAAAPIAAA5IgQAAIAAhIQAAgPgCgNIAPAAIACASQAFgKAJgFQAJgFALgBQAkABAAAoIAAA+g");
	this.shape_11.setTransform(-16.8,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:1}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:2}},{t:this.shape_6,p:{y:4.1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{y:2}},{t:this.shape_9},{t:this.shape_8},{t:this.shape,p:{y:2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_12.setTransform(0.1,0);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBEQgNgFgIgIIAGgNQAUARAUAAQAPAAAJgHQAHgHAAgNQAAgagfAAIgRAAIAAgNIANAAQAPAAAIgHQAJgHAAgNQAAgMgHgGQgHgGgNAAQgTAAgUAQIgGgMQAIgIANgFQANgFAMAAQATAAAMAKQALAKAAAQQAAANgGAJQgGAJgLAEQANADAHAIQAHAJgBAOQAAASgMALQgNALgWAAQgMAAgNgFg");
	this.shape.setTransform(35.2,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg3QAKgKAFgJQAEgJAAgJQAAgMgGgGQgIgGgLAAQgVAAgTAQIgHgMQAJgJANgEQAMgFANAAQATAAAMAKQALAKgBARQAAAMgFAMQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape_1.setTransform(23.4,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_2.setTransform(11.9,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_3.setTransform(0.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBIIAAhkIAPAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_4.setTransform(-6.9,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgPgCgNIAQAAIABASQAEgKAHgFQAJgFALAAIAJAAIgBAQQgEgCgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_5.setTransform(-12.3,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_6.setTransform(-22.9,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBHIAAiNIA4AAQAWAAAMAKQANALAAATQAAASgNALQgMAKgWAAIgnAAIAAA+gAgigEIAmAAQAQAAAIgHQAIgHAAgMQAAgNgIgHQgIgHgQAAIgmAAg");
	this.shape_7.setTransform(-34.6,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZBEQgMgFgJgIIAGgNQAUARAUAAQAPAAAJgHQAHgHAAgNQAAgaggAAIgQAAIAAgNIANAAQAPAAAIgHQAJgHAAgNQAAgMgHgGQgHgGgNAAQgTAAgUAQIgGgMQAIgIANgFQANgFAMAAQATAAAMAKQALAKAAAQQAAANgGAJQgGAJgKAEQAMADAHAIQAHAJgBAOQAAASgMALQgNALgWAAQgMAAgNgFg");
	this.shape_8.setTransform(35.3,0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrBIIAAgMIAxg3QAKgLAFgJQAEgJAAgJQAAgMgGgGQgIgGgLAAQgVAAgTAQIgHgNQAJgHANgFQANgFAMAAQATAAALAKQAMAKgBARQABANgGALQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape_9.setTransform(23.5,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgIBIIAAhkIAQAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_10.setTransform(-6.8,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaA0IAAhIQAAgPgCgNIAQAAIABATQAEgKAHgGQAJgFALgBIAJABIgBAPQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_11.setTransform(-12.2,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:-34.6,y:-1}},{t:this.shape_6,p:{x:-22.9,y:1.1}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:0.4,y:1.1}},{t:this.shape_2,p:{x:11.9,y:-1}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{x:-34.5,y:0.2}},{t:this.shape_6,p:{x:-22.8,y:2.3}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_3,p:{x:0.5,y:2.3}},{t:this.shape_2,p:{x:12,y:0.2}},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_12.setTransform(0.1,0);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-17.7,135,31.7);


(lib.btnDrag11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape.setTransform(47,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_1.setTransform(34.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjA3QgOgSAAghQAAgXAHgSQAGgRAMgJQANgJAQAAQAMAAAMAFQAMAEAIAJIgGAMQgKgIgJgEQgJgEgKAAQgRAAgKAQQgLARAAAcIAAADQAFgKAKgHQALgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAANQAAANgGALQgGAKgLAGQgKAGgNAAQgZAAgOgSgAgTAEQgJAJAAAOQAAAOAJAJQAJAJANAAQAOAAAIgJQAIgIAAgPQAAgOgIgJQgJgHgNAAQgNAAgJAHg");
	this.shape_2.setTransform(22.6,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_3.setTransform(11.1,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_4.setTransform(3.2,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBHIAAiNIBXAAIAAAOIhHAAIAAAxIBDAAIAAANIhDAAIAABBg");
	this.shape_5.setTransform(-4.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrBHIAAiNIBXAAIAAAOIhHAAIAAAxIBDAAIAAANIhDAAIAABBg");
	this.shape_6.setTransform(-15.5,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggApQgKgKABgTIAAg+IAQAAIAAA9QAAAOAFAGQAGAHALAAQAMgBAJgIQAIgJAAgPIAAg3IAQAAIAABjIgQAAIAAgRQgEAJgJAFQgIAFgKAAQgSAAgJgKg");
	this.shape_7.setTransform(-27.4,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_8.setTransform(-36.2,3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHBHIAAh/IgyAAIAAgOIBzAAIAAAOIgyAAIAAB/g");
	this.shape_9.setTransform(-46.5,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBKIAAiSIAPAAIAACSg");
	this.shape_10.setTransform(3.2,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AggApQgKgKABgTIAAg+IAQAAIAAA9QAAAOAFAGQAGAHALAAQAMgBAJgIQAIgJAAgPIAAg3IAQAAIAABkIgQAAIAAgSQgEAKgJAEQgIAFgKAAQgSAAgJgKg");
	this.shape_11.setTransform(-27.4,4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaA0IAAhIQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALAAQAFAAAEACIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_12.setTransform(-36.2,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{y:1}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:1}},{t:this.shape_4},{t:this.shape_3,p:{y:3}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_9,p:{y:2.2}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_10},{t:this.shape_3,p:{y:4.3}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_13.setTransform(0.1,0);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgGgHQgIgGgLAAQgVAAgTAQIgHgNQAJgHANgFQAMgFANAAQATAAAMAKQALAKgBASQAAAMgFALQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape.setTransform(29.7,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgGQgFgHgMAAQgOAAgIAJQgIAJAAAOIAAA4IgQAAIAAhHQAAgQgCgMIAPAAIACASQAFgKAJgFQAJgGALABQAkAAAAAnIAAA+g");
	this.shape_1.setTransform(17.8,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_2.setTransform(9,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghApQgJgKAAgTIAAg+IARAAIAAA9QgBAOAHAGQAFAHALAAQANgBAIgIQAIgJAAgPIAAg3IARAAIAABjIgQAAIAAgRQgGAJgIAFQgJAFgKAAQgRAAgKgKg");
	this.shape_3.setTransform(-1,3.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_4.setTransform(-10.4,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_5.setTransform(-20.1,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_6.setTransform(-30.8,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgGgHQgIgGgLAAQgVAAgTAQIgHgNQAJgHANgFQAMgFANAAQATAAAMAKQALAKgBASQAAALgFAMQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape_7.setTransform(29.7,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgGQgFgHgMAAQgOAAgIAJQgIAJAAAOIAAA5IgQAAIAAhIQAAgQgCgMIAPAAIACASQAFgKAJgFQAJgGALAAQAkAAAAApIAAA+g");
	this.shape_8.setTransform(17.8,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaA0IAAhIQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALAAQAFAAAEACIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_9.setTransform(9,4.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AghApQgJgKAAgTIAAg+IARAAIAAA9QgBAOAHAGQAFAHALAAQANgBAIgIQAIgJAAgPIAAg3IARAAIAABkIgQAAIAAgSQgGAKgIAEQgJAFgKAAQgRAAgKgKg");
	this.shape_10.setTransform(-1,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:3}},{t:this.shape_5,p:{y:3}},{t:this.shape_4,p:{y:1.6}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6,p:{y:4.3}},{t:this.shape_5,p:{y:4.3}},{t:this.shape_4,p:{y:2.8}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_11.setTransform(0.1,0);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape.setTransform(45,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXA+QgJgLAAgWQAAgWAJgJQAJgLARAAQAQAAAJALQAJAJAAAWQAAAWgJALQgJALgQAAQgRAAgJgLgAAiAFQgFAIAAAQQAAARAFAHQAFAIAKAAQAKAAAFgIQAEgHAAgRQAAgQgFgIQgEgHgKAAQgKAAgFAHgAgwBHIBRiNIAQAAIhRCNgAhJADQgJgKAAgVQAAgWAJgLQAJgLARAAQAQAAAJALQAJALAAAWQAAAVgJAKQgJALgQAAQgRAAgJgLgAg+g0QgFAHAAARQAAAQAFAIQAFAHAKAAQAKAAAEgHQAFgIAAgQQAAgRgFgHQgEgIgKAAQgKAAgFAIg");
	this.shape_1.setTransform(29.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBDQgMgEgIgJIAFgMQAVAQAUAAQAOAAAIgIQAJgJAAgPQAAgOgIgIQgJgIgOAAQgTAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQALgLASAAQANAAALAGQAKAGAFAIQAGALgBANQAAANgFALQgHALgKAFQgLAGgOAAQgNAAgNgFg");
	this.shape_2.setTransform(14.4,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BHIAAhpIguBpIgLAAIguhoIAABoIgPAAIAAiNIANAAIA1B6IA2h6IANAAIAACNg");
	this.shape_3.setTransform(-0.5,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AggApQgKgKABgTIAAg+IAQAAIAAA9QAAAOAFAGQAGAHALAAQAMgBAJgIQAIgJAAgPIAAg3IAQAAIAABjIgPAAIAAgRQgGAJgIAFQgIAFgKAAQgSAAgJgKg");
	this.shape_4.setTransform(-14.7,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BHIAAiNIA4AAQAWAAAMAKQAMAJAAASQAAALgGAJQgGAIgKAEQAMACAHAJQAGAJAAANQAAATgMAKQgMAKgXAAgAgkA6IApAAQAQAAAIgHQAIgGAAgNQAAgaggAAIgpAAgAgkgHIAlAAQAQAAAJgGQAIgHAAgMQAAgZghAAIglAAg");
	this.shape_5.setTransform(-27,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_6.setTransform(-36.5,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_7.setTransform(-45.2,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgaBDQgMgEgIgJIAFgMQAVAQAUAAQAOAAAIgIQAJgJAAgPQAAgNgIgKQgJgHgOAAQgTAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQALgLASAAQANAAALAGQAKAGAFAIQAGALgBANQAAANgFALQgHAKgKAGQgLAGgOAAQgNAAgNgFg");
	this.shape_8.setTransform(14.4,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AggApQgKgKABgTIAAg+IAQAAIAAA9QAAAOAFAGQAGAHALAAQAMgBAJgIQAIgJAAgPIAAg3IAQAAIAABkIgPAAIAAgSQgGAKgIAEQgIAFgKAAQgSAAgJgKg");
	this.shape_9.setTransform(-14.7,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBKIAAiSIAPAAIAACSg");
	this.shape_10.setTransform(-36.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:3}},{t:this.shape_6},{t:this.shape_5,p:{y:1}},{t:this.shape_4},{t:this.shape_3,p:{y:1}},{t:this.shape_2},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:4.3}},{t:this.shape_10},{t:this.shape_5,p:{y:2.2}},{t:this.shape_9},{t:this.shape_3,p:{y:2.2}},{t:this.shape_8},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_11.setTransform(0.1,0);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGgBAMQABAMAIAHQAJAHANABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape.setTransform(36,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJAOgDQgNgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgMAEQANADAJAJQAHAJAAANQAAATgOAKQgOALgXAAQgWAAgOgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgJAGABAMQgBAMAJAHQAJAHANABQAPgBAIgHQAJgHAAgMQAAgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape_1.setTransform(24,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgNAEQAOADAJAJQAHAJAAANQAAATgOAKQgOALgXAAQgWAAgOgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgJAGAAAMQAAAMAJAHQAIAHAOABQAOgBAJgHQAJgHgBgMQABgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape_2.setTransform(12,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGgBAMQABAMAIAHQAJAHANABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape_3.setTransform(0,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJAOgDQgNgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgMAEQANADAIAJQAIAJAAANQAAATgOAKQgOALgXAAQgWAAgOgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgJAGABAMQgBAMAJAHQAJAHANABQAPgBAIgHQAJgHAAgMQAAgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape_4.setTransform(-12,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgNAEQAOADAJAJQAHAJAAANQAAATgOAKQgOALgXAAQgWAAgOgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgJAGAAAMQAAAMAJAHQAIAHAOABQAOgBAJgHQAJgHgBgMQABgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape_5.setTransform(-24,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGgBAMQABAMAIAHQAJAHANABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape_6.setTransform(-36,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:2.2}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_7.setTransform(0.1,0);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape.setTransform(55.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQANgTAXAAQAZAAAMATQANASAAAjQAAAkgNASQgMATgZAAQgXAAgNgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape_1.setTransform(43.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_2.setTransform(31.1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_3.setTransform(19.1,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_4.setTransform(10.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_5.setTransform(2.1,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_6.setTransform(-6.6,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA6QgOgPAAgcIAAhWIAQAAIAABXQAAAVAKAKQAKALATAAQAUAAAKgLQAKgKAAgVIAAhXIAQAAIAABWQAAAcgOAPQgOAOgcAAQgbAAgOgOg");
	this.shape_7.setTransform(-18.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgHBHIAAh/IgyAAIAAgOIBzAAIAAAOIgyAAIAAB/g");
	this.shape_8.setTransform(-31.5,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_9.setTransform(-43.8,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgGQgFgHgNAAQgMAAgJAJQgIAJAAAOIAAA4IgQAAIAAhHQgBgQgBgMIAPAAIACASQAEgKAKgFQAJgGALABQAkAAAAAnIAAA+g");
	this.shape_10.setTransform(-55.3,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHBKIAAiSIAPAAIAACSg");
	this.shape_11.setTransform(10.8,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgaA0IAAhIQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALAAQAFAAAEACIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_12.setTransform(-6.6,4.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgpA5QgOgOAAgcIAAhWIAQAAIAABXQAAAVAKAKQAKALATAAQAUAAAKgLQAKgKAAgVIAAhXIAQAAIAABWQAAAcgOAOQgOAPgcAAQgbAAgOgPg");
	this.shape_13.setTransform(-18.1,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgGQgFgHgNAAQgMAAgJAJQgIAJAAAOIAAA5IgQAAIAAhIQgBgQgBgMIAPAAIACASQAEgKAKgFQAJgGALAAQAkAAAAApIAAA+g");
	this.shape_14.setTransform(-55.3,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9,p:{y:3}},{t:this.shape_8,p:{y:1}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{y:3}},{t:this.shape_4},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_14},{t:this.shape_9,p:{y:4.3}},{t:this.shape_8,p:{y:2.2}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_5,p:{y:4.3}},{t:this.shape_11},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_15.setTransform(0.1,0);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZBEQgNgFgJgIIAHgNQAUARAUAAQAQAAAHgHQAIgHAAgNQAAgagfAAIgRAAIAAgNIANAAQAPAAAJgHQAIgHAAgNQAAgMgHgGQgHgGgMAAQgUAAgUAQIgGgMQAJgIAMgFQAMgFANAAQATAAALAKQAMAKAAAQQAAANgGAJQgGAJgLAEQANADAHAIQAGAJABAOQgBASgMALQgNALgVAAQgNAAgNgFg");
	this.shape.setTransform(34,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBIIAAgMIAxg3QAKgLAEgJQAFgJAAgJQAAgMgHgGQgHgGgLAAQgVAAgTAQIgGgNQAHgIANgEQANgFANAAQATAAAMAKQAKAKABARQgBAMgFAMQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_1.setTransform(22.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_2.setTransform(10.7,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgHQgGgGgMAAQgMAAgJAJQgIAIAAAPIAAA5IgQAAIAAhIQgBgPgBgNIAPAAIACASQAEgKAKgFQAJgFALgBQAkABAAAoIAAA+g");
	this.shape_3.setTransform(-1.7,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5A0IAAg+QAAgOgFgHQgFgGgLAAQgMAAgIAJQgHAIAAAPIAAA5IgPAAIAAg+QAAgOgFgHQgFgGgLAAQgNAAgHAJQgHAIAAAPIAAA5IgRAAIAAhIQAAgPgBgNIAPAAIACARQAEgJAIgFQAJgGALAAQAMAAAHAGQAHAEADAKQAFgJAJgFQAJgFALgBQAhABAAAoIAAA+g");
	this.shape_4.setTransform(-16.4,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_5.setTransform(-27.5,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAYBKIgzgxIAAAxIgRAAIAAiTIARAAIAABcIAugtIAVAAIgxAwIA1A0g");
	this.shape_6.setTransform(-34.1,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBIIAAgMIAxg4QAKgKAEgJQAFgJAAgJQAAgMgHgGQgHgGgLAAQgVAAgTAQIgGgMQAHgJANgEQANgFANAAQATAAAMAKQAKAKABARQgBAMgFAMQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_7.setTransform(22.2,2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgHQgGgGgMAAQgMAAgJAIQgIAJAAAPIAAA4IgQAAIAAhHQgBgPgBgNIAPAAIACASQAEgKAKgFQAJgFALgBQAkAAAAAoIAAA+g");
	this.shape_8.setTransform(-1.7,4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA5AzIAAg9QAAgOgFgHQgFgGgLAAQgMAAgIAIQgHAJAAAPIAAA4IgPAAIAAg9QAAgOgFgHQgFgGgLAAQgNAAgHAIQgHAJAAAPIAAA4IgRAAIAAhHQAAgPgBgNIAPAAIACARQAEgJAIgFQAJgGALAAQAMAAAHAGQAHAEADAKQAFgJAJgFQAJgFALgBQAhAAAAAoIAAA+g");
	this.shape_9.setTransform(-16.4,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHBJIAAiSIAPAAIAACSg");
	this.shape_10.setTransform(-27.5,2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAYBJIgzgwIAAAwIgRAAIAAiSIARAAIAABcIAugtIAVAAIgxAwIA1Azg");
	this.shape_11.setTransform(-34.1,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{y:1}},{t:this.shape_1},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_2,p:{y:2.3}},{t:this.shape_7},{t:this.shape,p:{y:2.3}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_12.setTransform(0.1,0);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQAMgTAYAAQAZAAAMATQANASAAAjQAAAkgNASQgMATgZAAQgYAAgMgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape.setTransform(18,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBDQgNgEgJgJIAHgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgOgIgIQgIgIgOAAQgUAAgMAPIgLAAIAAhSIBUAAIAAAOIhEAAIAAAyQAMgLARAAQAOAAAJAGQAKAGAGAIQAFALABANQAAANgHALQgFALgMAFQgKAGgOAAQgNAAgMgFg");
	this.shape_1.setTransform(6.3,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaBDQgMgEgIgJIAGgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgOgIgIQgIgIgPAAQgTAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQAMgLARAAQANAAAKAGQALAGAFAIQAGALgBANQAAANgFALQgHALgKAFQgLAGgOAAQgNAAgNgFg");
	this.shape_2.setTransform(-5.7,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_3.setTransform(-17.8,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgZBDQgNgEgJgJIAHgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgNgIgKQgIgHgOAAQgUAAgMAPIgLAAIAAhSIBUAAIAAAOIhEAAIAAAyQAMgLARAAQAOAAAJAGQAKAGAGAIQAFALABANQAAANgHALQgFAKgMAGQgKAGgOAAQgNAAgMgFg");
	this.shape_4.setTransform(6.3,2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaBDQgMgEgIgJIAGgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgNgIgKQgIgHgPAAQgTAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQAMgLARAAQANAAAKAGQALAGAFAIQAGALgBANQAAANgFALQgHAKgKAGQgLAGgOAAQgNAAgNgFg");
	this.shape_5.setTransform(-5.7,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{y:1}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_3,p:{y:2.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_6.setTransform(0.1,0);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgHQgGgGgMAAQgMAAgJAJQgIAIAAAPIAAA5IgQAAIAAhIQgBgPgBgNIAPAAIACASQAEgKAKgFQAJgFALgBQAkABAAAoIAAA+g");
	this.shape.setTransform(49.6,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_1.setTransform(38.1,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_2.setTransform(30,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_3.setTransform(22.2,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA5A0IAAg+QAAgOgFgHQgFgGgLAAQgMAAgIAJQgHAIAAAPIAAA5IgPAAIAAg+QAAgOgFgHQgFgGgLAAQgNAAgHAJQgHAIAAAPIAAA5IgRAAIAAhIQAAgPgBgNIAPAAIACARQAEgJAIgFQAJgFALgBQAMAAAHAGQAHAEADAKQAFgJAJgFQAJgFALgBQAhABAAAoIAAA+g");
	this.shape_4.setTransform(7.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgaA0IAAhIQAAgPgCgNIAQAAIABATQAEgKAHgGQAJgFALgBQAFABAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_5.setTransform(-3.9,0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_6.setTransform(-13.6,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_7.setTransform(-22.7,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_8.setTransform(-32.4,0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAcAyIgchNIgcBNIgQAAIglhjIASAAIAcBQIAdhQIAOAAIAcBQIAdhQIAQAAIglBjg");
	this.shape_9.setTransform(-46.7,0.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgGQgGgHgMAAQgMAAgJAIQgIAKAAAOIAAA4IgQAAIAAhHQgBgQgBgMIAPAAIACASQAEgKAKgFQAJgGALABQAkAAAAAnIAAA+g");
	this.shape_10.setTransform(49.6,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_11.setTransform(30,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA5AzIAAg9QAAgOgFgGQgFgHgLAAQgMAAgIAIQgHAKAAAOIAAA4IgPAAIAAg9QAAgOgFgGQgFgHgLAAQgNAAgHAIQgHAKAAAOIAAA4IgRAAIAAhHQAAgQgBgMIAPAAIACASQAEgKAIgFQAJgGALABQAMAAAHAEQAHAFADAKQAFgJAJgFQAJgGALABQAhAAAAAnIAAA+g");
	this.shape_12.setTransform(7.8,1.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABASQAEgKAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_13.setTransform(-3.9,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{y:0.5}},{t:this.shape_8,p:{y:0.5}},{t:this.shape_7,p:{y:-1}},{t:this.shape_6,p:{y:0.5}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.5}},{t:this.shape_2},{t:this.shape_1,p:{y:0.5}},{t:this.shape}]}).to({state:[{t:this.shape_9,p:{y:1.8}},{t:this.shape_8,p:{y:1.8}},{t:this.shape_7,p:{y:0.3}},{t:this.shape_6,p:{y:1.8}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_3,p:{y:1.8}},{t:this.shape_11},{t:this.shape_1,p:{y:1.8}},{t:this.shape_10}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_14.setTransform(0.1,0);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-18.2,135,32.3);


(lib.btnDrag3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJAOgDQgNgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgNAEQAOADAJAJQAHAJAAANQAAATgOAKQgNALgYAAQgWAAgOgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgJAGAAAMQAAAMAJAHQAJAHANABQAPgBAIgHQAJgHgBgMQABgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape.setTransform(33.3,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrBIIAAgMIAxg3QAKgLAEgJQAFgJAAgJQAAgMgHgGQgHgGgLAAQgVAAgTAQIgGgNQAHgHANgFQANgFANAAQATAAAMAKQAKAKABARQgBANgFALQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_1.setTransform(21.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_2.setTransform(10.3,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggApQgKgKABgUIAAg9IAQAAIAAA9QAAAOAFAGQAGAHALgBQAMAAAJgJQAIgIAAgOIAAg4IAQAAIAABkIgQAAIAAgSQgEAJgJAFQgIAFgKAAQgSAAgJgKg");
	this.shape_3.setTransform(-0.4,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA0IAAg+QAAgOgGgHQgGgGgMAAQgMAAgJAJQgIAIAAAPIAAA5IgQAAIAAhIQgBgPgBgNIAPAAIACASQAEgKAKgFQAJgFALgBQAkABAAAoIAAA+g");
	this.shape_4.setTransform(-12,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_5.setTransform(-23.3,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgHAyIgrhjIARAAIAhBSIAjhSIAQAAIgsBjg");
	this.shape_6.setTransform(-34,0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgrBIIAAgMIAxg3QAKgLAEgJQAFgJAAgJQAAgMgHgGQgHgGgLAAQgVAAgTAQIgGgNQAHgIANgEQANgFANAAQATAAAMAKQAKAKABARQgBAMgFAMQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_7.setTransform(21.3,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AggApQgKgKABgUIAAg9IAQAAIAAA9QAAAOAFAGQAGAGALAAQAMABAJgKQAIgIAAgOIAAg4IAQAAIAABkIgQAAIAAgSQgEAJgJAFQgIAFgKAAQgSAAgJgKg");
	this.shape_8.setTransform(-0.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{y:0.5}},{t:this.shape_5,p:{y:0.5}},{t:this.shape_4,p:{y:0.4}},{t:this.shape_3},{t:this.shape_2,p:{y:0.5}},{t:this.shape_1},{t:this.shape,p:{y:-1.6}}]}).to({state:[{t:this.shape_6,p:{y:1.3}},{t:this.shape_5,p:{y:1.3}},{t:this.shape_4,p:{y:1.2}},{t:this.shape_8},{t:this.shape_2,p:{y:1.3}},{t:this.shape_7},{t:this.shape,p:{y:-0.8}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_9.setTransform(0.1,0);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-18.2,135,32.3);


(lib.btnDrag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA2QgNgSAAgkQAAgjANgSQAMgTAYAAQAZAAAMATQANASAAAjQAAAkgNASQgMATgZAAQgYAAgMgTgAgYgsQgIAPAAAdQAAAeAIAPQAIAOAQAAQARAAAIgOQAIgPAAgeQAAgdgIgPQgIgOgRAAQgQAAgIAOg");
	this.shape.setTransform(36,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_1.setTransform(24.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcBEQgMgEgJgJIAGgMQALAIAJAEQAJAEAJAAQASAAAKgQQAKgRAAgcIAAgDQgFAKgKAHQgKAGgNAAQgNAAgKgFQgKgGgFgJQgGgLAAgNQAAgNAGgLQAGgKAKgGQALgGANAAQAZAAAOASQAOASAAAhQAAAkgPAUQgOAUgZAAQgNAAgLgFgAgYgxQgJAIAAAPQAAAOAJAJQAIAHAOAAQANAAAJgHQAIgJAAgOQAAgOgIgJQgJgJgNAAQgOAAgIAJg");
	this.shape_2.setTransform(12,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGgBAMQABAMAIAHQAJAHANABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape_3.setTransform(0,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AglBHIBCh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_4.setTransform(-12,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgjA3QgOgSAAghQAAgXAHgSQAGgRAMgJQANgJAQAAQAMAAAMAFQAMAEAIAJIgGAMQgKgIgJgEQgJgEgKAAQgRAAgKAQQgLARAAAcIAAADQAFgKAKgHQALgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAANQAAANgGALQgGAKgLAGQgKAGgNAAQgZAAgOgSgAgTAEQgJAJAAAOQAAAOAJAJQAJAJANAAQAOAAAIgJQAIgIAAgPQAAgOgIgJQgJgHgNAAQgNAAgJAHg");
	this.shape_5.setTransform(-23.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZBDQgNgEgIgJIAFgMQAVAQAUAAQAOAAAIgIQAJgJAAgPQAAgOgIgIQgJgIgNAAQgUAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQALgLASAAQAOAAAKAGQAKAGAFAIQAFALAAANQABANgHALQgGALgKAFQgLAGgOAAQgNAAgMgFg");
	this.shape_6.setTransform(-35.7,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgZBDQgNgEgIgJIAFgMQAVAQAUAAQAOAAAIgIQAJgJAAgPQAAgNgIgKQgJgHgNAAQgUAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQALgLASAAQAOAAAKAGQAKAGAFAIQAFALAAANQABANgHALQgGAKgKAGQgLAGgOAAQgNAAgMgFg");
	this.shape_7.setTransform(-35.7,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:2.2}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_8.setTransform(0.1,0);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape.setTransform(39,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZBEQgKgHgGgMQgFgMAAgPQAAgQAFgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAFAEAJIAAg/IAQAAIAACSIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgGQgJAJAAATQAAASAJAKQAIALAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape_1.setTransform(27.2,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_2.setTransform(15.8,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAGgMALgHQALgGAOAAQAKAAAKADQAJAEAGAGIgFAMQgIgGgHgDQgHgDgHAAQgPAAgJALQgIAKAAARQAAATAIAKQAJAKAPAAQAHAAAHgDQAHgDAIgGIAFAMQgGAGgKAEQgKADgKAAQgOAAgKgGg");
	this.shape_3.setTransform(5.4,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_4.setTransform(-4.8,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_5.setTransform(-14.7,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_6.setTransform(-25.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgzBHIAAiNIA4AAQAWAAAMAKQANALAAATQAAASgNALQgMAKgWAAIgnAAIAAA+gAgigEIAmAAQAQAAAIgHQAIgHAAgMQAAgNgIgHQgIgHgQAAIgmAAg");
	this.shape_7.setTransform(-37.7,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{x:-37.7,y:1}},{t:this.shape_6,p:{y:3}},{t:this.shape_5,p:{x:-14.7,y:3}},{t:this.shape_4,p:{x:-4.8,y:3}},{t:this.shape_3,p:{y:3}},{t:this.shape_2,p:{x:15.8,y:3}},{t:this.shape_1,p:{x:27.2,y:0.8}},{t:this.shape,p:{x:39,y:3}}]}).to({state:[{t:this.shape_7,p:{x:-37.6,y:2}},{t:this.shape_6,p:{y:4}},{t:this.shape_5,p:{x:-14.6,y:4}},{t:this.shape_4,p:{x:-4.7,y:4}},{t:this.shape_3,p:{y:4}},{t:this.shape_2,p:{x:15.9,y:4}},{t:this.shape_1,p:{x:27.3,y:1.8}},{t:this.shape,p:{x:39.1,y:4}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnup("synched",0);
	this.instance.parent = this;

	this.instance_1 = new lib.btndown("synched",0);
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance}]},1).wait(1));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_8.setTransform(0.1,0);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.workplace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhNAUQgIAAgGgGQgGgFAAgJQAAgHAGgGQAFgGAJAAICbAAQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAg");
	this.shape.setTransform(-248.3,222.3,1.17,1.17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4C48").s().p("AjoBLQgQAAgLgLQgMgMAAgPIAAhIQAAgRAMgLQALgLAQAAIHRAAQAQAAALALQAMALAAARIAABIQAAAPgMAMQgLALgQAAg");
	this.shape_1.setTransform(-248.3,222.3,1.17,1.17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E9FE5").s().p("Ai0AUQgIAAgGgGQgGgFAAgJQAAgHAGgGQAGgGAIAAIFpAAQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAg");
	this.shape_2.setTransform(-221.2,201.4,1.17,1.17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AAAAAA").s().p("AlTAUQgIAAgGgGQgGgGAAgIQAAgHAGgGQAGgGAIAAIKnAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAg");
	this.shape_3.setTransform(-248.3,155.3,1.17,1.17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E2E2E2").s().p("AmeBTQgHAAgGgFQgFgGAAgIIAAh/QAAgIAFgGQAGgFAHAAIM8AAQAIAAAGAFQAFAGAAAIIAAB/QAAAIgFAGQgGAFgIAAg");
	this.shape_4.setTransform(-248.3,155,1.17,1.17);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAAJQAAALgHAHQgHAHgLAAQgJAAgIgHg");
	this.shape_5.setTransform(-208.5,181.5,1.17,1.17);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAAJQAAALgHAHQgHAHgLAAQgJAAgIgHg");
	this.shape_6.setTransform(-218.5,181.5,1.17,1.17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_7.setTransform(-228.4,181.5,1.17,1.17);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_8.setTransform(-238.4,181.5,1.17,1.17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_9.setTransform(-248.3,181.5,1.17,1.17);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape_10.setTransform(-258.3,181.5,1.17,1.17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape_11.setTransform(-268.2,181.5,1.17,1.17);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape_12.setTransform(-278.1,181.5,1.17,1.17);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#494949").s().p("AgRASQgHgHAAgLQAAgJAHgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape_13.setTransform(-288.1,181.5,1.17,1.17);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E2E2E2").s().p("AmeBTQgHAAgGgGQgFgFAAgIIAAiAQAAgHAFgFQAGgGAHAAIM8AAQAIAAAGAGQAFAFAAAHIAACAQAAAIgFAFQgGAGgIAAg");
	this.shape_14.setTransform(-248.3,181.5,1.17,1.17);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C9C9C9").s().p("Ah8AUQgIAAgHgGQgFgFgBgJQABgHAFgGQAHgGAIAAID6AAQAIAAAFAGQAHAGAAAHQAAAJgHAFQgFAGgIAAg");
	this.shape_15.setTransform(-282,201.4,1.17,1.17);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkDHIgWgFIAAAAIgLgDIgBAAIgSgHQgsgVgegjQgDgEAFgNQADgIAGgFQAEgCAQgHIAKgDQAUgIAUgMQAQgJADgHIAAgBIABgFIAAAAIAAgBQABgJgBgCIgGgJQgJgPgIgSQgNgGgFgXQgEgWAIgKIgBgSQgCgLACgUQAEgeARgVQAageA0AAQA1AAAaAeQAbAggGAyIgBASQAIAKgEAWQgFAYgNAFQgHASgLAPIgFAJIAAALIAAABIAAAAIABAFIAAABQADAHAQAJQATALAVAJIAKADQAQAHAEACQAFAEAEAIIAAABQAFAOgDADQgdAjgtAVIgCAAIgQAHIgBAAIgLADIgBAAIgVAFQgTADgSAAQgRAAgTgDg");
	this.shape_16.setTransform(-248.3,100.4,1.17,1.17);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#27A6FC").s().p("AjLDLQhUhUAAh3QAAh2BUhUQBVhVB2AAQB3AABVBVQBUBUAAB2QAAB3hUBUQhVBVh3AAQh2AAhVhVg");
	this.shape_17.setTransform(-248.3,100.4,1.17,1.17);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FEFBFF").s().p("Ar2NrIAA7VIXtAAIAAbVg");
	this.shape_18.setTransform(-248.2,149.1,1.17,1.17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(1));

	// work-table
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C8E90").s().p("AkPA3QgWAAgQgQQgQgQAAgWIAAgBQAAgWAQgQQAQgQAWAAIIfAAQAWAAAQAQQAQAQAAAWIAAABQAAAWgQAQQgQAQgWAAg");
	this.shape_19.setTransform(225,-98.9,0.094,0.094);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C8E90").s().p("AAbE1IAAgxIDsAAQANAAAJgKQAKgJAAgOIAAnFQAAgNgKgKQgJgJgNAAIoNAAQgNAAgKAJQgJAKAAANIAADGIgyAAIAAjGQABgiAXgYQAYgYAiAAIINAAQAiAAAXAYQAYAYABAiIAAHFQgBAigYAYQgXAYgiAAg");
	this.shape_20.setTransform(239.5,-102.4,0.094,0.094);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8C8E90").s().p("AjODzQgbAAgSgTQgTgTAAgaIAAllQAAgaATgTQASgTAbAAIGcAAQAbAAATATQATATAAAaIAAFlQAAAagTATQgTATgbAAgAjgjEQgHAIAAAKIAAFlQAAAKAHAIQAIAHAKAAIGcAAQALAAAHgHQAIgIAAgKIAAllQAAgKgIgIQgHgHgLAAImcAAQgKAAgIAHg");
	this.shape_21.setTransform(237.5,-100.7,0.094,0.094);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8C8E90").s().p("AkVAiQgNAAgKgKQgKgKAAgOIAAAAQAAgNAKgKQAKgKANAAIIrAAQAOAAAJAKQAKAKAAANIAAAAQAAAOgKAKQgJAKgOAAg");
	this.shape_22.setTransform(-332.1,-99.8,0.094,0.094);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8C8E90").s().p("AAAE3QgNAAgKgKQgJgJAAgOIAAorQAAgNAJgKQAKgKANAAIAAAAQAOAAAJAKQAKAKAAANIAAIrQAAAOgKAJQgJAKgOAAg");
	this.shape_23.setTransform(-332.1,-99.8,0.094,0.094);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8C8E90").s().p("AAAE3QgNAAgKgKQgJgJAAgOIAAorQAAgNAJgKQAKgKANAAIAAAAQAOAAAJAKQAKAKAAANIAAIrQAAAOgKAJQgJAKgOAAg");
	this.shape_24.setTransform(-332.1,-99.8,0.094,0.094);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8C8E90").s().p("AlBFDIgBgBQgOgOAAgUQAAgUAOgPII/o/QAPgOAUAAQAUAAAOAOIABABQAOAOAAAUQAAAUgOAOIpAJAQgOAOgUAAQgUAAgOgOg");
	this.shape_25.setTransform(252.2,-101.8,0.094,0.094);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8C8E90").s().p("AD9FDIo/pAQgOgOAAgUQAAgUAOgOIABgBQAOgOAUAAQAUAAAOAOIJAI/QAOAPAAAUQAAAUgOAOIgBABQgOAOgUAAQgUAAgPgOg");
	this.shape_26.setTransform(252.2,-101.8,0.094,0.094);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8C8E90").s().p("AD9FDIo/pAQgOgOAAgUQAAgUAOgOIABgBQAOgOAUAAQAUAAAOAOIJAI/QAOAPAAAUQAAAUgOAOIgBABQgOAOgUAAQgUAAgPgOg");
	this.shape_27.setTransform(252.2,-101.8,0.094,0.094);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B8BABC").s().p("Ai2C3IAAgBQgIgHAAgMQAAgLAIgJIFFlFQAJgIALAAQALAAAJAIIAAAAQAIAIAAAMQAAALgIAIIlGFGQgIAIgMAAQgLAAgIgIg");
	this.shape_28.setTransform(-343.3,-99.8,0.094,0.094);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B8BABC").s().p("ACPC3IlFlGQgIgIAAgLQAAgMAIgIQAIgIALAAQAMAAAIAIIFGFFQAIAJAAALQAAAMgIAHIAAABQgJAIgLAAQgLAAgJgIg");
	this.shape_29.setTransform(-343.3,-99.8,0.094,0.094);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B8BABC").s().p("ACPC3IlFlGQgIgIAAgLQAAgMAIgIQAIgIALAAQAMAAAIAIIFGFFQAIAJAAALQAAAMgIAHIAAABQgJAIgLAAQgLAAgJgIg");
	this.shape_30.setTransform(-343.3,-99.8,0.094,0.094);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8C8E90").s().p("Aj9EFQhshsAAiZQAAiYBshsQBshsCYAAQBjAABVAxQBTAwAyBRIg9AlQgohChDgmQhFgohQAAQh6AAhYBXQhXBYAAB6QAAB8BXBXQBYBXB6AAQBnAABRg/QBQg+AZhiIBCAeQgjB0hhBJQhjBLh8AAQiYAAhshsg");
	this.shape_31.setTransform(-406.5,-80.7,0.094,0.094);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8C8E90").s().p("AiAA9IEBilIgwDRg");
	this.shape_32.setTransform(-403.8,-82.2,0.094,0.094);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8BABC").s().p("AoSAyIAAhkIQkAAIAABkg");
	this.shape_33.setTransform(-427.5,-80.2,0.094,0.094);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8BABC").s().p("AklHLIHHnJInMnLIBEhFIIRIQIoMINg");
	this.shape_34.setTransform(-424.2,-80.2,0.094,0.094);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8C8E90").s().p("AoSAyIAAhkIQlAAIAABkg");
	this.shape_35.setTransform(-444.2,-80.2,0.094,0.094);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8C8E90").s().p("AkqACIIRoQIBEBFInMHLIHHHJIhEBEg");
	this.shape_36.setTransform(-447.5,-80.2,0.094,0.094);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8C8E90").s().p("AmmAvIAAhdINNAAIAABdg");
	this.shape_37.setTransform(252.1,-77.9,0.094,0.094);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8C8E90").s().p("AmmAvIAAhdINNAAIAABdg");
	this.shape_38.setTransform(252.1,-80.8,0.094,0.094);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8C8E90").s().p("AmmAvIAAhdINNAAIAABdg");
	this.shape_39.setTransform(252.1,-83.7,0.094,0.094);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EguTABGQgSAAgNgMQgMgNAAgSIAAg1QAAgSAMgMQANgNASAAMBcnAAAQASAAANANQAMAMAAASIAAA1QAAASgMANQgNAMgSAAg");
	this.shape_40.setTransform(-86.9,-80.8,1.09,1.09);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#610866").s().p("EmPQD77MAAAn31MMehAAAMAAAH31g");
	this.shape_41.setTransform(-97.5,136.8,0.141,0.127);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EDEEEF").s().p("EgzzACqIAAjdICwAAIAAhSQAAgRAHgJQAJgKAVAAINcAAQAVAAAHAKQAGAJAAARIAABSMBWUAAAIAADdg");
	this.shape_42.setTransform(-97.5,-87.2,1.09,1.09);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D4D6D7").s().p("EmPQAPEIAA+HMMehAAAIAAeHg");
	this.shape_43.setTransform(-97.5,-101.8,0.141,0.094);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#464D5E").s().p("Eg4gAjlMAAAhHKMBxCAAAMAAABHKg");
	this.shape_44.setTransform(-98,116);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3A404E").s().p("Eg74Am/MAAAhN9MB3xAAAMAAABN9gEg4jAjmMBxCAAAMAAAhHKMhxCAAAg");
	this.shape_45.setTransform(-97.8,116);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#474F5C").s().p("AwJFsIFnj4IAAnfIVFAAIAAHfIFnD4g");
	this.shape_46.setTransform(-97.7,373.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1A7DAB").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape_47.setTransform(-399.7,-298.5,6.532,6.532);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#1A7DAB").s().p("AgbAbIAAg1IA3AAIAAA1g");
	this.shape_48.setTransform(-399.5,-232.3,6.532,6.532);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1A7DAB").s().p("AgbAbIAAg1IA3AAIAAA1g");
	this.shape_49.setTransform(-399.5,-361.5,6.532,6.532);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1E90C4").s().p("AgbCLIAAkVIA3AAIAAEVg");
	this.shape_50.setTransform(-399.5,-297.7,6.532,6.532);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D16031").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_51.setTransform(-445.5,-304.3,6.532,6.532);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F27039").s().p("AgqCCIAAkDIBVAAIAAEDg");
	this.shape_52.setTransform(-445.5,-291.3,6.532,6.532);

	this.instance = new lib.Path_7();
	this.instance.parent = this;
	this.instance.setTransform(-487.8,-289.9,6.532,6.532,0,0,0,2.2,6.5);
	this.instance.alpha = 0.25;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1E90C4").s().p("AgVCLIAAkVIArAAIAAEVg");
	this.shape_53.setTransform(-487.8,-297.7,6.532,6.532);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F27039").s().p("AgMBkIAAjGIAZAAIAADGg");
	this.shape_54.setTransform(-510.4,-271.7,6.532,6.532);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#FFFFFF").ss(0.8).p("AAAhUIAACp");
	this.shape_55.setTransform(-536.2,-280.8,6.532,6.532);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1E90C4").s().p("AgdBxIAAjgIA7AAIAADgg");
	this.shape_56.setTransform(-536.2,-280.2,6.532,6.532);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CFA700").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_57.setTransform(-351.2,-246.4,6.532,6.532);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#1A7CA8").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_58.setTransform(-276.7,-239.8,6.532,6.532);

	this.instance_1 = new lib.Path_2_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-276.8,-358.9,6.532,6.532,0,0,0,2.4,6.9);
	this.instance_1.alpha = 0.852;

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1E90C4").s().p("AgqClIAAlJIBVAAIAAFJg");
	this.shape_59.setTransform(-276.5,-312.8,6.532,6.532);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C95D30").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_60.setTransform(-201.6,-239.8,6.532,6.532);

	this.instance_2 = new lib.Path_5_0();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-351.3,-365.4,6.532,6.532,0,0,0,2.4,6.9);
	this.instance_2.alpha = 0.852;

	this.instance_3 = new lib.Path_6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-201.7,-358.9,6.532,6.532,0,0,0,2.4,6.9);
	this.instance_3.alpha = 0.852;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCE00").s().p("AgqClIAAlJIBVAAIAAFJg");
	this.shape_61.setTransform(-351.2,-312.8,6.532,6.532);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F27039").s().p("AgqClIAAlJIBVAAIAAFJg");
	this.shape_62.setTransform(-201.6,-312.8,6.532,6.532);

	this.instance_4 = new lib.ClipGroup_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-496.3,-98.9,6.532,6.532,0,0,0,63.3,65.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D68611").s().p("AAEA1IAAhcIgVAKIgDgLIAagNIAPAAIAABqg");
	this.shape_63.setTransform(-686.9,-374.9,6.532,6.532);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#515151").ss(0.2).p("AgLAAIAXAA");
	this.shape_64.setTransform(-671.5,-218.5,6.532,6.532);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_65.setTransform(-668.6,-223.7,6.532,6.532);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#515151").ss(0.2).p("AgEAAIAJAA");
	this.shape_66.setTransform(-692,-221.1,6.532,6.532);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#515151").ss(0.2).p("AgIAAIARAA");
	this.shape_67.setTransform(-669.3,-221.1,6.532,6.532);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#515151").ss(0.2).p("AgEAAIAJAA");
	this.shape_68.setTransform(-679.2,-223.7,6.532,6.532);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_69.setTransform(-681.5,-221.1,6.532,6.532);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#515151").ss(0.2).p("AgJAAIAUAA");
	this.shape_70.setTransform(-688.4,-218.5,6.532,6.532);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#515151").ss(0.2).p("AgJAAIATAA");
	this.shape_71.setTransform(-670.1,-216.2,6.532,6.532);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_72.setTransform(-683.1,-216.2,6.532,6.532);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#515151").ss(0.2).p("AgDAAIAHAA");
	this.shape_73.setTransform(-692.4,-216.2,6.532,6.532);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_74.setTransform(-690.2,-223.7,6.532,6.532);

	this.instance_5 = new lib.Path_11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-681.2,-220.3,6.532,6.532,0,0,0,2.8,0.9);
	this.instance_5.alpha = 0.699;

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#515151").s().p("AhHAYIAAgvICPAAIAAAvg");
	this.shape_75.setTransform(-681,-220.4,6.532,6.532);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F6B13E").s().p("AgsCaIAAkzIBZAAQAAA+gPAzQgPAxgYAYQgFAdAAAbQAAAkAHAdg");
	this.shape_76.setTransform(-651.3,-334.2,6.532,6.532);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFD523").s().p("AAHCaQALgeAAgjQAAgagIgeQgYgYgPgxQgPgzAAg+IBZAAIAAEzg");
	this.shape_77.setTransform(-710.6,-334.2,6.532,6.532);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#F6B13E").ss(0.9).p("AgLg8IAnAAIgCAoQgLAtgqAfQADhRANgjg");
	this.shape_78.setTransform(-614.1,-392.3,6.532,6.532);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFD523").ss(0.9).p("AANg8IgsAAIADAoQANAuAvAfQgEhSgPgjg");
	this.shape_79.setTransform(-745,-392.5,6.532,6.532);

	this.instance_6 = new lib.Blend_13();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-660.6,-301.7,6.532,6.532,0,0,0,16.5,20.5);

	this.instance_7 = new lib.Path_0();
	this.instance_7.parent = this;
	this.instance_7.setTransform(6.1,501.3,6.532,6.532,0,0,0,44.5,3.4);
	this.instance_7.alpha = 0.5;

	this.instance_8 = new lib.Path_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-436.4,559.2,6.532,6.532,0,0,0,1.7,1.7);
	this.instance_8.alpha = 0.551;

	this.instance_9 = new lib.Path_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(449.2,559.2,6.532,6.532,0,0,0,1.7,1.7);
	this.instance_9.alpha = 0.551;

	this.instance_10 = new lib.Path_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-436.8,558.9,6.532,6.532,0,0,0,20.5,8.9);
	this.instance_10.alpha = 0.648;

	this.instance_11 = new lib.Path_4();
	this.instance_11.parent = this;
	this.instance_11.setTransform(448.9,558.9,6.532,6.532,0,0,0,20.5,8.9);
	this.instance_11.alpha = 0.648;

	this.instance_12 = new lib.Path_5();
	this.instance_12.parent = this;
	this.instance_12.setTransform(6.1,552.9,6.532,6.532,0,0,0,44.5,11.3);
	this.instance_12.alpha = 0.5;

	this.instance_13 = new lib.ClipGroup_2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(153.4,698.7,6.532,6.532,0,0,0,184.5,65.2);

	this.instance_14 = new lib.ClipGroup_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-117.7,276.2,6.532,6.532,0,0,0,143,138.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A56033").s().p("AuUB9IAAj5IcpAAIAAD5g");
	this.shape_80.setTransform(5.9,545,6.532,6.532);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FBAB20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_81.setTransform(452.7,-413.8,6.532,6.532);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F2682E").s().p("AgXA/QgDgBAIgSIArhqIgnBrQgGASgDAAIAAAAg");
	this.shape_82.setTransform(458.7,-429.3,6.532,6.532);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#113A58").s().p("AgtAWQgBgCADgDQADgDAGgDIBRgiIhNArQgIAEgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_83.setTransform(477.4,-425.1,6.532,6.532);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#113A58").s().p("AAWAdQgEgBgDgEIgtg1IA4AqQAEADABAEQABAEgDADQgCADgEAAIgBgBg");
	this.shape_84.setTransform(435.9,-427.2,6.532,6.532);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAEgFIgHAL");
	this.shape_85.setTransform(493.3,-485.4,6.532,6.532);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAHgDIgNAH");
	this.shape_86.setTransform(523.9,-455.5,6.532,6.532);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAIAAIgPAA");
	this.shape_87.setTransform(535,-414.5,6.532,6.532);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAHAEIgNgH");
	this.shape_88.setTransform(524.2,-373.2,6.532,6.532);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAEAGIgHgM");
	this.shape_89.setTransform(494.3,-343,6.532,6.532);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAAAIIAAgP");
	this.shape_90.setTransform(453.3,-331.5,6.532,6.532);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgDAGIAHgM");
	this.shape_91.setTransform(412,-342.3,6.532,6.532);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgGAEIANgH");
	this.shape_92.setTransform(381.8,-372.2,6.532,6.532);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgHAAIAPAA");
	this.shape_93.setTransform(370.4,-413.5,6.532,6.532);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgGgDIANAH");
	this.shape_94.setTransform(381.1,-454.5,6.532,6.532);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgDgFIAHAM");
	this.shape_95.setTransform(411,-485,6.532,6.532);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAAgHIAAAP");
	this.shape_96.setTransform(452.3,-496.1,6.532,6.532);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#262626").ss(0.2,0,0,4).p("AACgCIgCAF");
	this.shape_97.setTransform(493.5,-485.4,6.532,6.532);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#262626").ss(0.2,0,0,4).p("AADAAIgFAC");
	this.shape_98.setTransform(523.7,-455.6,6.532,6.532);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#262626").ss(0.2,0,0,4).p("AADAAIgFAA");
	this.shape_99.setTransform(535,-414.5,6.532,6.532);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#262626").ss(0.2,0,0,4).p("AADABIgFgC");
	this.shape_100.setTransform(524.2,-373.3,6.532,6.532);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#262626").ss(0.2,0,0,4).p("AACADIgDgF");
	this.shape_101.setTransform(494.5,-343,6.532,6.532);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#262626").ss(0.2,0,0,4).p("AAAADIAAgF");
	this.shape_102.setTransform(453.3,-331.5,6.532,6.532);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgBADIADgF");
	this.shape_103.setTransform(412.2,-342.3,6.532,6.532);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgCABIAFgC");
	this.shape_104.setTransform(381.8,-372.4,6.532,6.532);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgCAAIAFAA");
	this.shape_105.setTransform(370.4,-413.5,6.532,6.532);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgCgBIAFAC");
	this.shape_106.setTransform(381.1,-454.7,6.532,6.532);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgBgCIADAF");
	this.shape_107.setTransform(411.2,-485,6.532,6.532);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#262626").ss(0.2,0,0,4).p("AAAgCIAAAF");
	this.shape_108.setTransform(452.3,-496.1,6.532,6.532);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_109.setTransform(452.5,-414,6.532,6.532);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#212121","#525252","#6E6E6E"],[0,0.6,1],0,17.8,0,-22.1).s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzg");
	this.shape_110.setTransform(452.5,-414,6.532,6.532);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#4A4A4A","#5C5C5C","#A3A3A3","#BFBFBF"],[0,0.141,0.725,1],-12.4,12.5,12.5,-12.4).s().p("Ah8B9Qg0g0AAhJQAAhIA0g0QA0g0BIAAQBKAAA0A0QAzA0AABIQAABJgzA0Qg0A0hKAAQhIAAg0g0g");
	this.shape_111.setTransform(451.7,-413.2,6.532,6.532);

	this.instance_15 = new lib.ClipGroup();
	this.instance_15.parent = this;
	this.instance_15.setTransform(81.3,-385.9,6.532,6.532,0,0,0,72.7,74);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#444444").s().p("AAAAPIAAgdIABAAIAAAdg");
	this.shape_112.setTransform(140.9,383.1,6.532,6.532);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#5C5C5C").s().p("Ag1ANQAHgQARgGQAIgDAHgBIAcAAQAVABALANQAGAGACAGg");
	this.shape_113.setTransform(140.7,382.3,6.532,6.532);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#444444").s().p("Ag4AcIAAgMQAAgSANgMQANgNASAAIAaAAQASAAAMANQANAMAAARIAAANg");
	this.shape_114.setTransform(140.7,391.7,6.532,6.532);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#128193").s().p("AzhPDIAA+EMAnDAAAIAAeEg");
	this.shape_115.setTransform(0.2,-1.5,6.532,6.532);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.instance_15},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.instance_5},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.instance_4},{t:this.shape_62},{t:this.shape_61},{t:this.instance_3},{t:this.instance_2},{t:this.shape_60},{t:this.shape_59},{t:this.instance_1},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1051.7,-869.2,2409.6,2050.5);


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


(lib.actMc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [1, 3, 4, 5, 7, 8, 9, 10];
		var cAnsCopy = [1, 3, 4, 5, 7, 8, 9, 10];
		var userAns = [0,0,0,0,0,0,0,0];
		var maxItem = 10;
		var maxBlanks = 8;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.myStr = "TruFFle6$1";
		this.item2.myStr = "Paris123";
		this.item3.myStr = "ManU$257";
		this.item4.myStr = "CaT^38";
		this.item5.myStr = "pluTo%18";
		this.item6.myStr = "admin789";
		this.item7.myStr = "laSSie018%";
		this.item8.myStr = "Lvp%233";
		this.item9.myStr = "002$ship";
		this.item10.myStr = "toMcaT$90";
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
				
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					_this.dArea.gotoAndStop(1);
				} else {
					_this.dArea.gotoAndStop(0);
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				
				var blankNum = 0;
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					//find a blank
					blankNum = 0;
					for (i=1; i<=maxBlanks; i++){
						if (userAns[i-1]==0){
							blankNum = i;
							break;
						}
					}
					//fill blank
					if (blankNum!=0){
						userAns[blankNum-1] = evt.currentTarget.itemNum;
						evt.currentTarget.x = 1600;//offscreen
					} else {
						//no more blanks
						evt.currentTarget.x = evt.currentTarget.initX;
						evt.currentTarget.y = evt.currentTarget.initY;
					}
				} else {
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
				}
				//update all texts
				_this.updateAll();
				_this.dArea.gotoAndStop(0);
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]!=0){
					this["btnUndo"+i].visible = true;
					this["txtAns"+i].text = this["item"+userAns[i-1]].myStr;
					doneCount++;
				} else {
					this["btnUndo"+i].visible = false;
					this["txtAns"+i].text = "";
				}
				
			}
			_this.txtAnsTotal.text = doneCount + "/8";
			//check buttons
			if (doneCount==maxBlanks){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = _this["item"+userAns[0]].myStr + ", " + 
			_this["item"+userAns[1]].myStr + ", " +
			_this["item"+userAns[2]].myStr + ", " +
			_this["item"+userAns[3]].myStr + ", " +
			_this["item"+userAns[4]].myStr + ", " +
			_this["item"+userAns[5]].myStr + ", " +
			_this["item"+userAns[6]].myStr + ", " +
			_this["item"+userAns[7]].myStr;
			for (i=1; i<=maxBlanks; i++){
				_this["btnUndo"+i].visible = false;
				var isCorrect = false;
				var jLength = cAnsCopy.length;
				for (j=1; j<=jLength; j++){
					if (userAns[i-1]==cAnsCopy[j-1] && userAns[i-1]!=0){
						cAnsCopy.splice(j-1, 1);
						isCorrect = true;
						break;
					}
				}
				if (isCorrect && userAns[i-1]!=0){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
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
		for (i=1; i<=maxBlanks; i++){
			_this["btnUndo"+i].itemNum = i;
			_this["btnUndo"+i].on("click", function(evt) {
				_this["item"+userAns[evt.currentTarget.itemNum-1]].x = _this["item"+userAns[evt.currentTarget.itemNum-1]].initX;
				_this["item"+userAns[evt.currentTarget.itemNum-1]].y = _this["item"+userAns[evt.currentTarget.itemNum-1]].initY;
				userAns.splice(evt.currentTarget.itemNum-1, 1);
				userAns.push("");
				_this.updateAll();
			});
			_this["btnUndo"+i].visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(406.3,531.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item10 = new lib.btnDrag20();
	this.item10.name = "item10";
	this.item10.parent = this;
	this.item10.setTransform(407,433.5);
	new cjs.ButtonHelper(this.item10, 0, 1, 2, false, new lib.btnDrag20(), 3);

	this.item9 = new lib.btnDrag19();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(407,392.4);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnDrag19(), 3);

	this.item8 = new lib.btnDrag18();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(407,348.8);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnDrag18(), 3);

	this.item7 = new lib.btnDrag17();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(407,303.4);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnDrag17(), 3);

	this.item6 = new lib.btnDrag16();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(407,260.5);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnDrag16(), 3);

	this.item5 = new lib.btnDrag15();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(258,433.5);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnDrag15(), 3);

	this.item4 = new lib.btnDrag14();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(258,392.4);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnDrag14(), 3);

	this.item3 = new lib.btnDrag13();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(258,348.8);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnDrag13(), 3);

	this.item2 = new lib.btnDrag12();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(258,303.4);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnDrag12(), 3);

	this.item1 = new lib.btnDrag11();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(258,260.5);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnDrag11(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9},{t:this.item10}]}).wait(1));

	// btnRemove
	this.btnUndo8 = new lib.btnXX();
	this.btnUndo8.name = "btnUndo8";
	this.btnUndo8.parent = this;
	this.btnUndo8.setTransform(692.5,473);
	new cjs.ButtonHelper(this.btnUndo8, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo7 = new lib.btnXX();
	this.btnUndo7.name = "btnUndo7";
	this.btnUndo7.parent = this;
	this.btnUndo7.setTransform(692.5,443.9);
	new cjs.ButtonHelper(this.btnUndo7, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo6 = new lib.btnXX();
	this.btnUndo6.name = "btnUndo6";
	this.btnUndo6.parent = this;
	this.btnUndo6.setTransform(692.5,414.7);
	new cjs.ButtonHelper(this.btnUndo6, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo5 = new lib.btnXX();
	this.btnUndo5.name = "btnUndo5";
	this.btnUndo5.parent = this;
	this.btnUndo5.setTransform(692.5,385.6);
	new cjs.ButtonHelper(this.btnUndo5, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo4 = new lib.btnXX();
	this.btnUndo4.name = "btnUndo4";
	this.btnUndo4.parent = this;
	this.btnUndo4.setTransform(692.5,356.4);
	new cjs.ButtonHelper(this.btnUndo4, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo3 = new lib.btnXX();
	this.btnUndo3.name = "btnUndo3";
	this.btnUndo3.parent = this;
	this.btnUndo3.setTransform(692.5,327.3);
	new cjs.ButtonHelper(this.btnUndo3, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo2 = new lib.btnXX();
	this.btnUndo2.name = "btnUndo2";
	this.btnUndo2.parent = this;
	this.btnUndo2.setTransform(692.5,298.1);
	new cjs.ButtonHelper(this.btnUndo2, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo1 = new lib.btnXX();
	this.btnUndo1.name = "btnUndo1";
	this.btnUndo1.parent = this;
	this.btnUndo1.setTransform(692.5,269);
	new cjs.ButtonHelper(this.btnUndo1, 0, 1, 2, false, new lib.btnXX(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnUndo1},{t:this.btnUndo2},{t:this.btnUndo3},{t:this.btnUndo4},{t:this.btnUndo5},{t:this.btnUndo6},{t:this.btnUndo7},{t:this.btnUndo8}]}).wait(1));

	// dBox
	this.txtAns8 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns8.name = "txtAns8";
	this.txtAns8.lineHeight = 21;
	this.txtAns8.lineWidth = 133;
	this.txtAns8.parent = this;
	this.txtAns8.setTransform(561.8,461.6);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns8);
	}

	this.txtAns7 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns7.name = "txtAns7";
	this.txtAns7.lineHeight = 21;
	this.txtAns7.lineWidth = 133;
	this.txtAns7.parent = this;
	this.txtAns7.setTransform(561.8,432.4);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns7);
	}

	this.txtAns6 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns6.name = "txtAns6";
	this.txtAns6.lineHeight = 21;
	this.txtAns6.lineWidth = 133;
	this.txtAns6.parent = this;
	this.txtAns6.setTransform(561.8,403.3);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns6);
	}

	this.txtAnsTotal = new cjs.Text("0/8", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAnsTotal.name = "txtAnsTotal";
	this.txtAnsTotal.textAlign = "center";
	this.txtAnsTotal.lineHeight = 21;
	this.txtAnsTotal.lineWidth = 61;
	this.txtAnsTotal.parent = this;
	this.txtAnsTotal.setTransform(631.7,495.4);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAnsTotal);
	}

	this.txtAns5 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns5.name = "txtAns5";
	this.txtAns5.lineHeight = 21;
	this.txtAns5.lineWidth = 133;
	this.txtAns5.parent = this;
	this.txtAns5.setTransform(561.8,374.1);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns5);
	}

	this.txtAns4 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns4.name = "txtAns4";
	this.txtAns4.lineHeight = 21;
	this.txtAns4.lineWidth = 133;
	this.txtAns4.parent = this;
	this.txtAns4.setTransform(561.8,345);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns4);
	}

	this.txtAns3 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns3.name = "txtAns3";
	this.txtAns3.lineHeight = 21;
	this.txtAns3.lineWidth = 133;
	this.txtAns3.parent = this;
	this.txtAns3.setTransform(561.8,315.8);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns3);
	}

	this.txtAns2 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns2.name = "txtAns2";
	this.txtAns2.lineHeight = 21;
	this.txtAns2.lineWidth = 133;
	this.txtAns2.parent = this;
	this.txtAns2.setTransform(561.8,286.7);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns2);
	}

	this.txtAns1 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns1.name = "txtAns1";
	this.txtAns1.lineHeight = 21;
	this.txtAns1.lineWidth = 133;
	this.txtAns1.parent = this;
	this.txtAns1.setTransform(561.8,257.5);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAnsTotal},{t:this.txtAns6},{t:this.txtAns7},{t:this.txtAns8}]}).wait(1));

	// dArea
	this.dArea = new lib.dustbin();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(621,400.1);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc5, new cjs.Rectangle(188,236,537.3,317.9), null);


(lib.actMc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [1, 2, 3, 4, 5, 6, 8, 10];
		var cAnsCopy = [1, 2, 3, 4, 5, 6, 8, 10];
		var userAns = [0,0,0,0,0,0,0,0];
		var maxItem = 10;
		var maxBlanks = 8;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.myStr = "Passcode";
		this.item2.myStr = "5678910";
		this.item3.myStr = "venus28";
		this.item4.myStr = "watermelon";
		this.item5.myStr = "4550";
		this.item6.myStr = "klmn123";
		this.item7.myStr = "naTUral$$01";
		this.item8.myStr = "8888888";
		this.item9.myStr = "alBuM5%4";
		this.item10.myStr = "saturn2";
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
				
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					_this.dArea.gotoAndStop(1);
				} else {
					_this.dArea.gotoAndStop(0);
				}
				stage.update();
			});
			_this["item"+i].on("pressup", function(evt) {
				var p1 = _this.dArea.globalToLocal(stage.mouseX, stage.mouseY);
				
				var blankNum = 0;
				if (_this.dArea.hitTest(p1.x, p1.y)) {
					//find a blank
					blankNum = 0;
					for (i=1; i<=maxBlanks; i++){
						if (userAns[i-1]==0){
							blankNum = i;
							break;
						}
					}
					//fill blank
					if (blankNum!=0){
						userAns[blankNum-1] = evt.currentTarget.itemNum;
						evt.currentTarget.x = 1600;//offscreen
					} else {
						//no more blanks
						evt.currentTarget.x = evt.currentTarget.initX;
						evt.currentTarget.y = evt.currentTarget.initY;
					}
				} else {
					evt.currentTarget.x = evt.currentTarget.initX;
					evt.currentTarget.y = evt.currentTarget.initY;
				}
				//update all texts
				_this.updateAll();
				_this.dArea.gotoAndStop(0);
			});
		}
		this.updateAll = function (){
			var doneCount = 0;
			for (var i=1; i<=maxBlanks; i++){
				if (userAns[i-1]!=0){
					this["btnUndo"+i].visible = true;
					this["txtAns"+i].text = this["item"+userAns[i-1]].myStr;
					doneCount++;
				} else {
					this["btnUndo"+i].visible = false;
					this["txtAns"+i].text = "";
				}
				
			}
			_this.txtAnsTotal.text = doneCount + "/8";
			//check buttons
			if (doneCount==maxBlanks){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function submitAns(){
			var cScore = 0;
			var _userAns = _this["item"+userAns[0]].myStr + ", " + 
			_this["item"+userAns[1]].myStr + ", " +
			_this["item"+userAns[2]].myStr + ", " +
			_this["item"+userAns[3]].myStr + ", " +
			_this["item"+userAns[4]].myStr + ", " +
			_this["item"+userAns[5]].myStr + ", " +
			_this["item"+userAns[6]].myStr + ", " +
			_this["item"+userAns[7]].myStr;
			for (i=1; i<=maxBlanks; i++){
				_this["btnUndo"+i].visible = false;
				var isCorrect = false;
				var jLength = cAnsCopy.length;
				for (j=1; j<=jLength; j++){
					if (userAns[i-1]==cAnsCopy[j-1] && userAns[i-1]!=0){
						cAnsCopy.splice(j-1, 1);
						isCorrect = true;
						break;
					}
				}
				if (isCorrect && userAns[i-1]!=0){
					cScore++;
				}
			}
			//scale the score
			var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
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
		for (i=1; i<=maxBlanks; i++){
			_this["btnUndo"+i].itemNum = i;
			_this["btnUndo"+i].on("click", function(evt) {
				_this["item"+userAns[evt.currentTarget.itemNum-1]].x = _this["item"+userAns[evt.currentTarget.itemNum-1]].initX;
				_this["item"+userAns[evt.currentTarget.itemNum-1]].y = _this["item"+userAns[evt.currentTarget.itemNum-1]].initY;
				userAns.splice(evt.currentTarget.itemNum-1, 1);
				userAns.push("");
				_this.updateAll();
			});
			_this["btnUndo"+i].visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(406.3,531.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item10 = new lib.btnDrag10();
	this.item10.name = "item10";
	this.item10.parent = this;
	this.item10.setTransform(407,433.5);
	new cjs.ButtonHelper(this.item10, 0, 1, 2, false, new lib.btnDrag10(), 3);

	this.item9 = new lib.btnDrag9();
	this.item9.name = "item9";
	this.item9.parent = this;
	this.item9.setTransform(407,392.4);
	new cjs.ButtonHelper(this.item9, 0, 1, 2, false, new lib.btnDrag9(), 3);

	this.item8 = new lib.btnDrag8();
	this.item8.name = "item8";
	this.item8.parent = this;
	this.item8.setTransform(407,348.8);
	new cjs.ButtonHelper(this.item8, 0, 1, 2, false, new lib.btnDrag8(), 3);

	this.item7 = new lib.btnDrag7();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(407,303.4);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnDrag7(), 3);

	this.item6 = new lib.btnDrag6();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(407,260.5);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnDrag6(), 3);

	this.item5 = new lib.btnDrag5();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(258,433.5);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnDrag5(), 3);

	this.item4 = new lib.btnDrag4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(258,392.4);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnDrag4(), 3);

	this.item3 = new lib.btnDrag3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(258,348.8);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnDrag3(), 3);

	this.item2 = new lib.btnDrag2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(258,303.4);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnDrag2(), 3);

	this.item1 = new lib.btnDrag1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(258,260.5);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnDrag1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item8},{t:this.item9},{t:this.item10}]}).wait(1));

	// btnRemove
	this.btnUndo8 = new lib.btnXX();
	this.btnUndo8.name = "btnUndo8";
	this.btnUndo8.parent = this;
	this.btnUndo8.setTransform(690.5,516.1);
	new cjs.ButtonHelper(this.btnUndo8, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo7 = new lib.btnXX();
	this.btnUndo7.name = "btnUndo7";
	this.btnUndo7.parent = this;
	this.btnUndo7.setTransform(690.5,487.7);
	new cjs.ButtonHelper(this.btnUndo7, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo6 = new lib.btnXX();
	this.btnUndo6.name = "btnUndo6";
	this.btnUndo6.parent = this;
	this.btnUndo6.setTransform(690.5,459.2);
	new cjs.ButtonHelper(this.btnUndo6, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo5 = new lib.btnXX();
	this.btnUndo5.name = "btnUndo5";
	this.btnUndo5.parent = this;
	this.btnUndo5.setTransform(690.5,430.8);
	new cjs.ButtonHelper(this.btnUndo5, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo4 = new lib.btnXX();
	this.btnUndo4.name = "btnUndo4";
	this.btnUndo4.parent = this;
	this.btnUndo4.setTransform(690.5,402.3);
	new cjs.ButtonHelper(this.btnUndo4, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo3 = new lib.btnXX();
	this.btnUndo3.name = "btnUndo3";
	this.btnUndo3.parent = this;
	this.btnUndo3.setTransform(690.5,373.9);
	new cjs.ButtonHelper(this.btnUndo3, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo2 = new lib.btnXX();
	this.btnUndo2.name = "btnUndo2";
	this.btnUndo2.parent = this;
	this.btnUndo2.setTransform(690.5,345.4);
	new cjs.ButtonHelper(this.btnUndo2, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo1 = new lib.btnXX();
	this.btnUndo1.name = "btnUndo1";
	this.btnUndo1.parent = this;
	this.btnUndo1.setTransform(690.5,317);
	new cjs.ButtonHelper(this.btnUndo1, 0, 1, 2, false, new lib.btnXX(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnUndo1},{t:this.btnUndo2},{t:this.btnUndo3},{t:this.btnUndo4},{t:this.btnUndo5},{t:this.btnUndo6},{t:this.btnUndo7},{t:this.btnUndo8}]}).wait(1));

	// dBox
	this.txtAns8 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns8.name = "txtAns8";
	this.txtAns8.lineHeight = 21;
	this.txtAns8.lineWidth = 133;
	this.txtAns8.parent = this;
	this.txtAns8.setTransform(557.8,504.7);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns8);
	}

	this.txtAns7 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns7.name = "txtAns7";
	this.txtAns7.lineHeight = 21;
	this.txtAns7.lineWidth = 133;
	this.txtAns7.parent = this;
	this.txtAns7.setTransform(557.8,476.2);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns7);
	}

	this.txtAns6 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns6.name = "txtAns6";
	this.txtAns6.lineHeight = 21;
	this.txtAns6.lineWidth = 133;
	this.txtAns6.parent = this;
	this.txtAns6.setTransform(557.8,447.8);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns6);
	}

	this.txtAnsTotal = new cjs.Text("0/8", "normal 400 14px 'Muli'");
	this.txtAnsTotal.name = "txtAnsTotal";
	this.txtAnsTotal.textAlign = "center";
	this.txtAnsTotal.lineHeight = 21;
	this.txtAnsTotal.lineWidth = 61;
	this.txtAnsTotal.parent = this;
	this.txtAnsTotal.setTransform(631.7,532.4);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAnsTotal);
	}

	this.txtAns5 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns5.name = "txtAns5";
	this.txtAns5.lineHeight = 21;
	this.txtAns5.lineWidth = 133;
	this.txtAns5.parent = this;
	this.txtAns5.setTransform(557.8,419.3);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns5);
	}

	this.txtAns4 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns4.name = "txtAns4";
	this.txtAns4.lineHeight = 21;
	this.txtAns4.lineWidth = 133;
	this.txtAns4.parent = this;
	this.txtAns4.setTransform(557.8,390.9);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns4);
	}

	this.txtAns3 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns3.name = "txtAns3";
	this.txtAns3.lineHeight = 21;
	this.txtAns3.lineWidth = 133;
	this.txtAns3.parent = this;
	this.txtAns3.setTransform(557.8,362.4);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns3);
	}

	this.txtAns2 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns2.name = "txtAns2";
	this.txtAns2.lineHeight = 21;
	this.txtAns2.lineWidth = 133;
	this.txtAns2.parent = this;
	this.txtAns2.setTransform(557.8,334);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns2);
	}

	this.txtAns1 = new cjs.Text("", "normal 400 14px 'Muli'", "#660066");
	this.txtAns1.name = "txtAns1";
	this.txtAns1.lineHeight = 21;
	this.txtAns1.lineWidth = 133;
	this.txtAns1.parent = this;
	this.txtAns1.setTransform(557.8,305.5);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAnsTotal},{t:this.txtAns6},{t:this.txtAns7},{t:this.txtAns8}]}).wait(1));

	// dArea
	this.dArea = new lib.dustbin2();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(627.1,388.6);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc4, new cjs.Rectangle(188,244,534.2,312.9), null);


// stage content:
(lib.f5s4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:149,finalFb:204});

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
		var stageNum = 4;
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
		this.qItem1 = [{
				"qId": "f5s4_1",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 26,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s4_2",
				"qDomain": 3,
				"qParam": 6,
				"qSkill": 26,
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
		} else {
			this.myData.qItem.push(_this.qItem1[randRange(0, 1)]);
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
	this.frame_144 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		playSound("questionAlert");
	}
	this.frame_189 = function() {
		this.stop();
	}
	this.frame_204 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_375 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(40).call(this.frame_144).wait(5).call(this.frame_149).wait(40).call(this.frame_189).wait(15).call(this.frame_204).wait(171).call(this.frame_375).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(272));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(204).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,55.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(272));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,118.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:57.8},16,cjs.Ease.cubicOut).wait(331));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(500.8,124.6,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(272));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,125.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},161).wait(172));

	// avatar
	this.instance_3 = new lib.avatarBotsX("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},161).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(204).to({graphics:null,x:0,y:0}).wait(172));

	// actMc
	this.instance_4 = new lib.actMc4();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,340);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc5();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,340);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(132).to({_off:false},0).to({y:0},12,cjs.Ease.cubicOut).to({_off:true},5).wait(227));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(177).to({_off:false},0).to({y:0},12,cjs.Ease.cubicOut).to({_off:true},15).wait(172));

	// q
	this.instance_6 = new lib.mcQ4();
	this.instance_6.parent = this;
	this.instance_6.setTransform(343.9,183.5,0.05,0.05);
	this.instance_6._off = true;

	this.instance_7 = new lib.mcQ5();
	this.instance_7.parent = this;
	this.instance_7.setTransform(343.9,183.5,0.05,0.05);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_6,this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(109).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:155.5},18,cjs.Ease.elasticOut).to({_off:true},22).wait(227));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(154).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:155.5},18,cjs.Ease.elasticOut).to({_off:true},32).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(350));

	// qBg
	this.instance_8 = new lib.workplace("single",2);
	this.instance_8.parent = this;
	this.instance_8.setTransform(406,291.5,0.456,0.456);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(20).to({_off:false},0).wait(51).to({startPosition:2},0).to({regX:0.3,regY:0.1,scaleX:0.76,scaleY:0.76,x:293.7,y:218.6},23,cjs.Ease.cubicOut).to({_off:true},110).wait(172));

	// bg
	this.instance_9 = new lib.Bitmap3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(376));

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
		{src:"images/f5s4/Bitmap3.png", id:"Bitmap3"},
		{src:"images/f5s4/Bitmap8.png", id:"Bitmap8"},
		{src:"images/f5s4/Bitmap9.png", id:"Bitmap9"},
		{src:"images/f5s4/Blend_14.png", id:"Blend_14"},
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