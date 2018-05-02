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
	this.myTxt = new cjs.Text("Select the correct answer.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 218;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.5,-13.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Ax9AAMAj7AAA");
	this.shape.setTransform(-136.6,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AwmC7IAAhsIilADIClh7IAAiMMAj7AAAIAAFw");
	this.shape_1.setTransform(-145.3,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AwrC4IAAhrIikACICkh6IAAiMMAj7AAAIAAFvg");
	this.shape_2.setTransform(-144.9,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,249.9,39.9), null);


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
	this.myTxt = new cjs.Text("Pilih jawapan yang betul.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 219;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237,-14.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AxdAAMAi7AAA");
	this.shape.setTransform(-139.9,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AwGC7IAAhsIikADICkh7IAAiMMAi6AAAIAAFw");
	this.shape_1.setTransform(-148.6,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AwKC4IAAhrIilACIClh6IAAiMMAi6AAAIAAFvg");
	this.shape_2.setTransform(-148.1,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,253.6,39.9), null);


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
		
		this.inputArticle = document.getElementById("txtArticle");
		this.inputArticle.style.color = "#000000";
		this.inputArticle.style.fontFamily = "Muli";
		this.inputArticle.style.fontSize = this.inputArticle.offsetHeight*0.6 + "px";
		
		window.addEventListener("resize", function (){
			setTimeout(function(){
				_this.inputArticle.style.fontSize = _this.inputArticle.offsetHeight*0.6 + "px";
			}, 1000);
		});
		var myStringBm = "Neil Alden Armstrong ialah angkasawan Amerika Syarikat yang pertama. Beliau juga merupakan manusia pertama yang menjejakkan kaki ke bulan. Neil ialah seorang jurutera angkasa, kapten angkatan laut, juruterbang penguji, dan profesor universiti.";
		var myStringEn = "Neil Alden Armstrong was an American astronaut and the first person to walk on the Moon. He was also an aerospace engineer, naval aviator, test pilot, and university professor.";
		try {
			if (myLanguage==2){
				this.inputArticle.value = myStringEn;
			}
		} catch (e) {
			//nothing
		}
		function onSetEn(e){
			//_this.gotoAndStop(1);
			_this.inputArticle.value = myStringEn;
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			//_this.gotoAndStop(1);
			_this.inputArticle.value = myStringBm;
		}
		stage.addEventListener("setEn", onSetBm);
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
	this.txt1 = new cjs.Text("Neil Alden Armstrong ialah angkasawan Amerika Syarikat yang pertama. Beliau juga merupakan manusia pertama yang menjejakkan kaki ke bulan. Neil ialah seorang jurutera angkasa, kapten angkatan laut, juruterbang penguji, dan profesor universiti.", "normal 400 20px 'Muli'", "#FFFFFF");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 29;
	this.txt1.lineWidth = 659;
	this.txt1.parent = this;
	this.txt1.setTransform(0,-57.9);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txt1);
	}

	this.timeline.addTween(cjs.Tween.get(this.txt1).wait(1).to({text:"Neil Alden Armstrong was an American astronaut and the first person to walk on the Moon. He was also an aerospace engineer, naval aviator, test pilot, and university professor."},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-331.5,-59.9,663.2,119.8);


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


(lib.mcQ12 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(132.7,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(129,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_2.setTransform(124.2,-1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_3.setTransform(119.6,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_4.setTransform(113.7,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(107.4,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(99.6,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_7.setTransform(91,-0.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(84.9,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(78.2,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_10.setTransform(69,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_11.setTransform(57.8,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(49.8,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_13.setTransform(41.2,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_14.setTransform(33.2,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(25,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_16.setTransform(17.8,-2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(10.6,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_18.setTransform(3.7,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_19.setTransform(-4.4,1.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_20.setTransform(-15.4,-2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(-22.4,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_22.setTransform(-31.6,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_23.setTransform(-43.6,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(-55.6,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_25.setTransform(-63.1,-1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(-74.7,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(-84.4,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(-94,-2.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_29.setTransform(-107.5,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_30.setTransform(-114,-2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_31.setTransform(-117.8,-2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_32.setTransform(-124.7,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAGAGQAFAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_33.setTransform(-134.2,-2.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_34.setTransform(53.6,1.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_35.setTransform(46.4,-1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_36.setTransform(13.2,-0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_37.setTransform(-8.8,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(-22,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_39.setTransform(-29.2,-1.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_40.setTransform(-36,-0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_41.setTransform(-87.3,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgkAwQAMgDAGgDQAFgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_42.setTransform(-100.3,1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_43.setTransform(-109.2,1.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(-118.7,-0.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_45.setTransform(-128.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-94}},{t:this.shape_27},{t:this.shape_26,p:{x:-74.7}},{t:this.shape_25},{t:this.shape_24,p:{x:-55.6}},{t:this.shape_23},{t:this.shape_22,p:{x:-31.6}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-4.4}},{t:this.shape_18,p:{x:3.7}},{t:this.shape_17,p:{x:10.6}},{t:this.shape_16,p:{x:17.8}},{t:this.shape_15,p:{x:25}},{t:this.shape_14,p:{x:33.2}},{t:this.shape_13,p:{x:41.2}},{t:this.shape_12,p:{x:49.8}},{t:this.shape_11,p:{x:57.8}},{t:this.shape_10},{t:this.shape_9,p:{x:78.2}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:99.6}},{t:this.shape_5,p:{x:107.4}},{t:this.shape_4,p:{x:113.7}},{t:this.shape_3,p:{x:119.6}},{t:this.shape_2},{t:this.shape_1,p:{x:129}},{t:this.shape,p:{x:132.7}}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_26,p:{x:-77.6}},{t:this.shape_28,p:{x:-68.3}},{t:this.shape_22,p:{x:-54.1}},{t:this.shape_24,p:{x:-44.9}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_9,p:{x:0.4}},{t:this.shape_3,p:{x:7.1}},{t:this.shape_36},{t:this.shape_15,p:{x:21.8}},{t:this.shape_18,p:{x:29.6}},{t:this.shape_14,p:{x:35.9}},{t:this.shape_1,p:{x:41.8}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_19,p:{x:67}},{t:this.shape_11,p:{x:75}},{t:this.shape_17,p:{x:82}},{t:this.shape_16,p:{x:89.2}},{t:this.shape_6,p:{x:96.3}},{t:this.shape_13,p:{x:104.6}},{t:this.shape_4,p:{x:112.5}},{t:this.shape_12,p:{x:121.1}},{t:this.shape_5,p:{x:129.1}},{t:this.shape,p:{x:133.3}}]},1).wait(1));

	// outlineshade
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D40000").ss(4,2,0,3).p("AYwAAI4kAAI47AA");
	this.shape_46.setTransform(-2.3,18);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D40000").ss(1,2,0,3).p("A5ADAIAJhnIBXhQIhIhPIALh6IZkAAIX6AAIgjGA");
	this.shape_47.setTransform(-0.6,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBYhQIhJhPIALh5IZkAAIhNF/g");
	this.shape_48.setTransform(-77.1,-1.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D40000").ss(4,2,0,3).p("AYKAAI65AAI1aAA");
	this.shape_49.setTransform(-1.1,18);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#D40000").ss(1,2,0,3).p("A4bDAIAJhnIBYhQIhJhPIALh6IWEAAIaPAAIgjGA");
	this.shape_50.setTransform(0.7,-1.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F5F5F5").s().p("ArTDAIAJhnIBYhQIhIhPIALh5IWDAAIhNF/g");
	this.shape_51.setTransform(-83.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).wait(1));

	// white
	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FAFAFA").s().p("A4+DAIAJhnIBYhQIhJhPIALh5MAxaAAAIgjF/g");
	this.shape_52.setTransform(-0.8,-1.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FAFAFA").s().p("A4YDAIAJhnIBXhQIhIhPIALh5MAwOAAAIgjF/g");
	this.shape_53.setTransform(0.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52}]}).to({state:[{t:this.shape_53}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.7,-21.6,323.3,41.6);


(lib.mcQ11 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(128.2,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(121.4,-0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_2.setTransform(109.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(97.7,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_4.setTransform(90.3,-1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(85.2,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(77.4,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_7.setTransform(68.4,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(54.2,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(47.8,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_10.setTransform(41.8,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_11.setTransform(33.3,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(23.9,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(14.3,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_14.setTransform(2.6,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_15.setTransform(-10.4,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(-17.4,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_17.setTransform(-26.6,1.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_18.setTransform(-38.6,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(-50.6,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_20.setTransform(-58.1,-1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(-69.7,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(-79.4,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_23.setTransform(-89,-2.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(-102.5,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-109,-2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_26.setTransform(-112.8,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_27.setTransform(-119.7,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQAKAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_28.setTransform(-129.2,-2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(65.9,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_30.setTransform(22.2,-1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_31.setTransform(15.5,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_32.setTransform(9.2,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_33.setTransform(-0.8,-2.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(-12,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_35.setTransform(-19.2,-1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-26,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(-58.3,-2.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-77.3,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAGgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_39.setTransform(-90.3,1.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_40.setTransform(-99.2,1.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_41.setTransform(-108.7,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_42.setTransform(-118.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:-69.7}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-26.6}},{t:this.shape_16,p:{x:-17.4}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:23.9}},{t:this.shape_11},{t:this.shape_10,p:{x:41.8}},{t:this.shape_9,p:{x:47.8}},{t:this.shape_8},{t:this.shape_7,p:{x:68.4}},{t:this.shape_6,p:{x:77.4}},{t:this.shape_5,p:{x:85.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:128.2}}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_21,p:{x:-67.6}},{t:this.shape_37},{t:this.shape_17,p:{x:-44.1}},{t:this.shape_16,p:{x:-34.9}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_9,p:{x:3.9}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_7,p:{x:34.3}},{t:this.shape_6,p:{x:43.3}},{t:this.shape_5,p:{x:51}},{t:this.shape_10,p:{x:57.3}},{t:this.shape_29},{t:this.shape_12,p:{x:75.1}},{t:this.shape,p:{x:81.7}}]},1).wait(1));

	// outlineshade
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#D40000").ss(4,2,0,3).p("AYwAAI4kAAI47AA");
	this.shape_43.setTransform(2.7,18);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D40000").ss(1,2,0,3).p("A5ADAIAJhnIBXhQIhIhPIALh6IZkAAIX6AAIgjGA");
	this.shape_44.setTransform(4.4,-1.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBXhQIhIhPIALh5IZkAAIhMF/g");
	this.shape_45.setTransform(-72.1,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D40000").ss(4,2,0,3).p("AW/AAI4jAAI1aAA");
	this.shape_46.setTransform(1.4,18);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D40000").ss(1,2,0,3).p("A3QDAIAJhnIBYhQIhJhPIALh6IWEAAIX5AAIgjGA");
	this.shape_47.setTransform(3.2,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5F5F5").s().p("ArTDAIAJhnIBYhQIhIhPIAKh5IWEAAIhNF/g");
	this.shape_48.setTransform(-73.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).wait(1));

	// white
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAFAFA").s().p("A4+DAIAJhnIBYhQIhIhPIALh5MAxYAAAIgjF/g");
	this.shape_49.setTransform(4.2,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAFAFA").s().p("A3NDAIAJhnIBXhQIhIhPIALh5MAt4AAAIgjF/g");
	this.shape_50.setTransform(2.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,323.3,41.6);


(lib.mcQ10 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(137.2,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_1.setTransform(133.5,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_2.setTransform(128.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_3.setTransform(123.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(113.5,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(104.2,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(95.2,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_7.setTransform(86.2,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(72,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(62.7,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(53,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(43.9,-2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_12.setTransform(36.5,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(28.7,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_14.setTransform(21.5,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_15.setTransform(14.1,-0.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_16.setTransform(7.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_17.setTransform(-0.9,-0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_18.setTransform(-8.4,-0.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_19.setTransform(-15.4,-2.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(-22.4,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_21.setTransform(-31.6,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_22.setTransform(-43.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(-55.6,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_24.setTransform(-63.1,-1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(-74.7,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(-84.4,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(-94,-2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(-107.5,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_29.setTransform(-114,-2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_30.setTransform(-117.8,-2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_31.setTransform(-124.7,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAGAGQAFAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_32.setTransform(-134.2,-2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_33.setTransform(47.7,-1.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_34.setTransform(40.4,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_35.setTransform(33.9,-2.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_36.setTransform(11.5,-1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_37.setTransform(4.8,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_38.setTransform(-10.7,-1.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_39.setTransform(-22,-0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_40.setTransform(-29.2,-1.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_41.setTransform(-36,-0.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_42.setTransform(-87.3,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgkAwQAMgDAGgDQAFgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_43.setTransform(-100.3,1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_44.setTransform(-109.2,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(-118.7,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_46.setTransform(-128.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-94}},{t:this.shape_26},{t:this.shape_25,p:{x:-74.7}},{t:this.shape_24},{t:this.shape_23,p:{x:-55.6}},{t:this.shape_22},{t:this.shape_21,p:{x:-31.6}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:86.2}},{t:this.shape_6,p:{x:95.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:133.5}},{t:this.shape,p:{x:137.2}}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_25,p:{x:-77.6}},{t:this.shape_27,p:{x:-68.3}},{t:this.shape_21,p:{x:-54.1}},{t:this.shape_23,p:{x:-44.9}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_6,p:{x:-3.5}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_7,p:{x:23.6}},{t:this.shape_1,p:{x:30.1}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape,p:{x:52.4}}]},1).wait(1));

	// outlineshade
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D40000").ss(4,2,0,3).p("AYwAAI4kAAI47AA");
	this.shape_47.setTransform(-2.3,18);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#D40000").ss(1,2,0,3).p("A5ADAIAJhnIBXhQIhIhPIALh6IZkAAIX6AAIgjGA");
	this.shape_48.setTransform(-0.6,-1.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBYhQIhJhPIALh5IZkAAIhNF/g");
	this.shape_49.setTransform(-77.1,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#D40000").ss(4,2,0,3).p("AYKAAI65AAI1aAA");
	this.shape_50.setTransform(-1.1,18);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#D40000").ss(1,2,0,3).p("A4bDAIAJhnIBYhQIhJhPIALh6IWEAAIaPAAIgjGA");
	this.shape_51.setTransform(0.7,-1.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F5F5F5").s().p("ArTDAIAJhnIBYhQIhIhPIALh5IWDAAIhNF/g");
	this.shape_52.setTransform(-83.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).wait(1));

	// white
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FAFAFA").s().p("A4+DAIAJhnIBYhQIhJhPIALh5MAxaAAAIgjF/g");
	this.shape_53.setTransform(-0.8,-1.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FAFAFA").s().p("A4YDAIAJhnIBXhQIhIhPIALh5MAwOAAAIgjF/g");
	this.shape_54.setTransform(0.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_54}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.7,-21.6,323.3,41.6);


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
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(117.7,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_1.setTransform(113,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_2.setTransform(105.7,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(96,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_4.setTransform(89.6,-2.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(78.7,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(69.1,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_7.setTransform(61.6,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(53.9,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_9.setTransform(45.9,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(36,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_11.setTransform(26.7,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_12.setTransform(17,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_13.setTransform(6.4,-2.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(-0.6,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_15.setTransform(-9.8,1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_16.setTransform(-21.8,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_17.setTransform(-33.8,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_18.setTransform(-41.3,-1.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(-52.9,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(-62.6,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(-72.2,-2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(-86,1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_23.setTransform(-95.3,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(-104.5,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_25.setTransform(-112,-1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(-119.3,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQASAAAJAJQALAIgBAPQABAPgLAJQgJAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_27.setTransform(-128.7,-2.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_28.setTransform(88.9,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(80.9,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_30.setTransform(65.7,-0.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(59.2,-2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgGAoIgihPIAOAAIAaBBIAbhBIANAAIgiBPg");
	this.shape_32.setTransform(53.1,-0.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(43.8,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_34.setTransform(17.4,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_35.setTransform(8.1,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_36.setTransform(-14.4,-0.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_37.setTransform(-21.6,-1.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_38.setTransform(-28.4,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_39.setTransform(-37.3,-0.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_40.setTransform(-60.7,-2.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_41.setTransform(-98.7,-0.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_42.setTransform(-108.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-62.6}},{t:this.shape_19,p:{x:-52.9}},{t:this.shape_18,p:{x:-41.3}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-9.8}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:78.7}},{t:this.shape_4,p:{x:89.6}},{t:this.shape_3,p:{x:96}},{t:this.shape_2},{t:this.shape_1,p:{x:113}},{t:this.shape,p:{x:117.7}}]}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_18,p:{x:-91.3}},{t:this.shape_20,p:{x:-79.7}},{t:this.shape_19,p:{x:-70}},{t:this.shape_40},{t:this.shape_15,p:{x:-46.5}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_5,p:{x:-1.2}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_3,p:{x:26.2}},{t:this.shape_4,p:{x:33.1}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_1,p:{x:73.4}},{t:this.shape_29},{t:this.shape_28},{t:this.shape,p:{x:93.1}}]},1).wait(1));

	// outlineshade
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#D40000").ss(4,2,0,3).p("AYwAAI4kAAI47AA");
	this.shape_43.setTransform(2.7,18);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D40000").ss(1,2,0,3).p("A5ADAIAJhnIBXhQIhIhPIALh6IZkAAIX6AAIgjGA");
	this.shape_44.setTransform(4.4,-1.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBXhQIhIhPIALh5IZkAAIhMF/g");
	this.shape_45.setTransform(-72.1,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#D40000").ss(4,2,0,3).p("AV0AAI2NAAI1aAA");
	this.shape_46.setTransform(3.9,18);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D40000").ss(1,2,0,3).p("A2FDAIAJhnIBYhQIhJhPIALh6IWDAAIVkAAIgjGA");
	this.shape_47.setTransform(5.7,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5F5F5").s().p("ArTDAIAJhnIBYhQIhIhPIAKh5IWEAAIhNF/g");
	this.shape_48.setTransform(-63.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).wait(1));

	// white
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAFAFA").s().p("A4+DAIAJhnIBYhQIhIhPIALh5MAxYAAAIgjF/g");
	this.shape_49.setTransform(4.2,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAFAFA").s().p("A2CDAIAJhnIBXhQIhIhPIALh5MAriAAAIgjF/g");
	this.shape_50.setTransform(5.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,323.3,41.6);


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
	this.shape.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(126.4,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(119.5,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_2.setTransform(110.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(100.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_4.setTransform(91.5,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(84,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(76.3,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_7.setTransform(69,-1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_8.setTransform(61.7,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_9.setTransform(54.7,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_10.setTransform(46.6,-0.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_11.setTransform(39.1,-0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_12.setTransform(32.1,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(25.2,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_14.setTransform(16,1.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_15.setTransform(3.9,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_16.setTransform(-8.1,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_17.setTransform(-15.5,-1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(-27.2,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(-36.8,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(-46.4,-2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(-60.3,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(-69.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(-78.8,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_24.setTransform(-86.2,-1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(-93.5,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQARAAAKAJQALAIgBAPQABAPgLAJQgKAHgRAAIggAAIAAAygAgcgDIAfAAQAMAAAHgGQAGgFABgKQgBgLgGgEQgHgGgMAAIgfAAg");
	this.shape_26.setTransform(-102.9,-2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(68,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_28.setTransform(61.6,-2.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_29.setTransform(57.8,-2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_30.setTransform(51.2,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_31.setTransform(37.7,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_32.setTransform(30.5,-1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_33.setTransform(23.7,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(14.8,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(-27.6,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_36.setTransform(-39.2,-1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_37.setTransform(-46.6,-0.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_38.setTransform(-56.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-46.4}},{t:this.shape_19},{t:this.shape_18,p:{x:-27.2}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:16}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:69}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:126.4}}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_18,p:{x:-17.9}},{t:this.shape_20,p:{x:-8.6}},{t:this.shape_14,p:{x:5.6}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_7,p:{x:75.3}},{t:this.shape,p:{x:80}}]},1).wait(1));

	// outlineshade
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#D40000").ss(4,2,0,3).p("AYwAAI4kAAI47AA");
	this.shape_39.setTransform(2.7,18);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D40000").ss(1,2,0,3).p("A5ADAIAJhnIBXhQIhIhPIALh6IZkAAIX6AAIgjGA");
	this.shape_40.setTransform(4.4,-1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBXhQIhIhPIALh5IZkAAIhMF/g");
	this.shape_41.setTransform(-72.1,-1.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#D40000").ss(4,2,0,3).p("AV0AAI2NAAI1aAA");
	this.shape_42.setTransform(3.9,18);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#D40000").ss(1,2,0,3).p("A2FDAIAJhnIBYhQIhJhPIALh6IWDAAIVkAAIgjGA");
	this.shape_43.setTransform(5.7,-1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F5F5F5").s().p("ArTDAIAJhnIBYhQIhIhPIAKh5IWEAAIhNF/g");
	this.shape_44.setTransform(-63.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	// white
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FAFAFA").s().p("A4+DAIAJhnIBYhQIhIhPIALh5MAxYAAAIgjF/g");
	this.shape_45.setTransform(4.2,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FAFAFA").s().p("A2CDAIAJhnIBXhQIhIhPIALh5MAriAAAIgjF/g");
	this.shape_46.setTransform(5.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,323.3,41.6);


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
	this.shape.setTransform(142.6,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_1.setTransform(137.9,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(130.1,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_3.setTransform(122.1,-2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(115.4,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(111.1,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(102.7,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_7.setTransform(93.9,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAIAHIgGAKQgIgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_8.setTransform(84.7,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(70.4,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_10.setTransform(62.4,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(55.7,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_12.setTransform(51.4,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(43.7,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_14.setTransform(32.2,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_15.setTransform(19.4,-2.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_16.setTransform(7.4,-2.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_17.setTransform(0.5,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_18.setTransform(-8.7,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_19.setTransform(-20.8,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(-32.8,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_21.setTransform(-40.2,-1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(-51.9,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_23.setTransform(-61.5,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_24.setTransform(-71.1,-2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(-85,1.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(-94.3,-0.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(-103.5,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_28.setTransform(-110.9,-1.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(-118.2,-0.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQARAAALAJQAJAIABAPQgBAPgJAJQgLAHgRAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFgBgKQABgLgHgEQgGgGgNAAIgfAAg");
	this.shape_30.setTransform(-127.6,-2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_31.setTransform(91.4,-0.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_32.setTransform(73.4,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(16.7,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_34.setTransform(9.4,-1.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_35.setTransform(2.7,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_36.setTransform(-29.7,-2.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_37.setTransform(-48.6,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_38.setTransform(-60.3,-1.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_39.setTransform(-67.6,-0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_40.setTransform(-77.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:-51.9}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-8.7}},{t:this.shape_17,p:{x:0.5}},{t:this.shape_16},{t:this.shape_15,p:{x:19.4}},{t:this.shape_14,p:{x:32.2}},{t:this.shape_13,p:{x:43.7}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:70.4}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:111.1}},{t:this.shape_4,p:{x:115.4}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:142.6}}]}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_22,p:{x:-39}},{t:this.shape_36},{t:this.shape_18,p:{x:-15.5}},{t:this.shape_17,p:{x:-6.3}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_15,p:{x:31.1}},{t:this.shape_14,p:{x:43.9}},{t:this.shape_13,p:{x:55.4}},{t:this.shape_5,p:{x:63.1}},{t:this.shape_4,p:{x:67.4}},{t:this.shape_32},{t:this.shape_9,p:{x:81.8}},{t:this.shape_31},{t:this.shape,p:{x:98}}]},1).wait(1));

	// outlineshade
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#D40000").ss(4,2,0,3).p("AYwAAI4kAAI47AA");
	this.shape_41.setTransform(2.7,18);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#D40000").ss(1,2,0,3).p("A5ADAIAJhnIBXhQIhIhPIALh6IZkAAIX6AAIgjGA");
	this.shape_42.setTransform(4.4,-1.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBXhQIhIhPIALh5IZkAAIhMF/g");
	this.shape_43.setTransform(-72.1,-1.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D40000").ss(4,2,0,3).p("AV0AAI2NAAI1aAA");
	this.shape_44.setTransform(3.9,18);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#D40000").ss(1,2,0,3).p("A2FDAIAJhnIBYhQIhJhPIALh6IWDAAIVkAAIgjGA");
	this.shape_45.setTransform(5.7,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5F5F5").s().p("ArTDAIAJhnIBYhQIhIhPIAKh5IWEAAIhNF/g");
	this.shape_46.setTransform(-63.3,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).wait(1));

	// white
	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FAFAFA").s().p("A4+DAIAJhnIBYhQIhIhPIALh5MAxYAAAIgjF/g");
	this.shape_47.setTransform(4.2,-1.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FAFAFA").s().p("A2CDAIAJhnIBXhQIhIhPIALh5MAriAAAIgjF/g");
	this.shape_48.setTransform(5.4,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47}]}).to({state:[{t:this.shape_48}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.7,-21.6,323.3,41.6);


(lib.mcQ6 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FF6600").s().p("AgjAwQALgDAGgDQAFgFAFgJIACgHIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape.setTransform(51.6,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_1.setTransform(42.7,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(33.2,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_3.setTransform(23.2,-2.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_4.setTransform(11.6,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(5,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(-4.2,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_7.setTransform(-12.5,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(-18.5,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_9.setTransform(-29.3,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_10.setTransform(-35.9,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_11.setTransform(-39.7,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(-43.5,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQARAAALAJQAJAIABAPQgBAPgJAJQgLAHgRAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFgBgKQABgLgHgEQgGgGgNAAIgfAAg");
	this.shape_13.setTransform(-50.2,-2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_14.setTransform(-18.5,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_15.setTransform(-25,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(-33.5,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_17.setTransform(-39.7,-2.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_18.setTransform(-46,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAIAHIgGAKQgIgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_19.setTransform(-55.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-18.5}},{t:this.shape_7,p:{x:-12.5}},{t:this.shape_6,p:{x:-4.2}},{t:this.shape_5,p:{x:5}},{t:this.shape_4,p:{x:11.6}},{t:this.shape_3,p:{x:23.2}},{t:this.shape_2,p:{x:33.2}},{t:this.shape_1,p:{x:42.7}},{t:this.shape,p:{x:51.6}}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_8,p:{x:-9.5}},{t:this.shape_7,p:{x:-3.5}},{t:this.shape_6,p:{x:4.8}},{t:this.shape_5,p:{x:14}},{t:this.shape_4,p:{x:20.6}},{t:this.shape_3,p:{x:32.2}},{t:this.shape_2,p:{x:42.2}},{t:this.shape_1,p:{x:51.7}},{t:this.shape,p:{x:60.6}}]},1).wait(1));

	// outlineshade
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D40000").ss(4,2,0,3).p("ALeAAIsDAAIq4AA");
	this.shape_20.setTransform(-3.8,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D40000").ss(1,2,0,3).p("AruDAIAJhnIBXhQIhIhPIALh6ILgAAILaAAIgjGA");
	this.shape_21.setTransform(-2.1,-1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F5F5F5").s().p("AmBDAIAJhnIBXhQIhIhPIALh5ILgAAIhNF/g");
	this.shape_22.setTransform(-38.6,-1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D40000").ss(4,2,0,3).p("AMpAAIuZAAIq4AA");
	this.shape_23.setTransform(-1.3,18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D40000").ss(1,2,0,3).p("As5DAIAJhnIBXhQIhIhPIALh6ILhAAINvAAIgjGA");
	this.shape_24.setTransform(0.4,-1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F5F5F5").s().p("AmBDAIAJhnIBYhQIhJhPIALh5ILgAAIhNF/g");
	this.shape_25.setTransform(-43.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

	// white
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAFAFA").s().p("ArsDAIAJhnIBYhQIhIhPIAKh5IW2AAIgjF/g");
	this.shape_26.setTransform(-2.3,-1.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAFAFA").s().p("As2DAIAJhnIBXhQIhJhPIAMh5IZLAAIgjF/g");
	this.shape_27.setTransform(0.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-21.6,153.3,41.6);


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
	this.shape.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape.setTransform(53.6,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_1.setTransform(46.3,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_2.setTransform(39.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_3.setTransform(30.6,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgpA5IAAhxIAtAAQARAAALAJQAJAIABAPQgBAPgJAJQgLAHgRAAIgfAAIAAAygAgbgDIAeAAQANAAAGgGQAGgFAAgKQAAgLgGgEQgGgGgNAAIgeAAg");
	this.shape_4.setTransform(21.2,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_5.setTransform(9.6,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(3,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(-6.2,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_8.setTransform(-14.5,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(-20.5,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_10.setTransform(-31.3,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(-37.9,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_12.setTransform(-41.7,-2.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_13.setTransform(-45.5,-2.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQASAAAJAJQALAIAAAPQAAAPgLAJQgJAHgSAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgGQAGgFAAgKQAAgLgGgEQgHgGgMAAIgeAAg");
	this.shape_14.setTransform(-52.2,-2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_15.setTransform(-20.5,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_16.setTransform(-27,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(-35.5,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_18.setTransform(-41.7,-2.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(-48,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAGAGQAFAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_20.setTransform(-57.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-20.5}},{t:this.shape_8,p:{x:-14.5}},{t:this.shape_7,p:{x:-6.2}},{t:this.shape_6,p:{x:3}},{t:this.shape_5,p:{x:9.6}},{t:this.shape_4,p:{x:21.2}},{t:this.shape_3,p:{x:30.6}},{t:this.shape_2,p:{x:39.6}},{t:this.shape_1,p:{x:46.3}},{t:this.shape,p:{x:53.6}}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_9,p:{x:-11.5}},{t:this.shape_8,p:{x:-5.5}},{t:this.shape_7,p:{x:2.8}},{t:this.shape_6,p:{x:12}},{t:this.shape_5,p:{x:18.6}},{t:this.shape_4,p:{x:30.2}},{t:this.shape_3,p:{x:39.6}},{t:this.shape_2,p:{x:48.6}},{t:this.shape_1,p:{x:55.3}},{t:this.shape,p:{x:62.6}}]},1).wait(1));

	// outlineshade
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D40000").ss(4,2,0,3).p("ALeAAIsDAAIq4AA");
	this.shape_21.setTransform(-3.8,18);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D40000").ss(1,2,0,3).p("AruDAIAJhnIBXhQIhIhPIALh6ILgAAILaAAIgjGA");
	this.shape_22.setTransform(-2.1,-1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F5F5F5").s().p("AmBDAIAJhnIBXhQIhIhPIALh5ILgAAIhNF/g");
	this.shape_23.setTransform(-38.6,-1.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#D40000").ss(4,2,0,3).p("AMpAAIuZAAIq4AA");
	this.shape_24.setTransform(-1.3,18);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D40000").ss(1,2,0,3).p("As5DAIAJhnIBXhQIhIhPIALh6ILhAAINvAAIgjGA");
	this.shape_25.setTransform(0.4,-1.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F5F5F5").s().p("AmBDAIAJhnIBYhQIhJhPIALh5ILgAAIhNF/g");
	this.shape_26.setTransform(-43.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

	// white
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FAFAFA").s().p("ArsDAIAJhnIBYhQIhIhPIAKh5IW2AAIgjF/g");
	this.shape_27.setTransform(-2.3,-1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FAFAFA").s().p("As2DAIAJhnIBXhQIhJhPIAMh5IZLAAIgjF/g");
	this.shape_28.setTransform(0.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-21.6,153.3,41.6);


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
	this.shape.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape.setTransform(46.8,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_1.setTransform(39.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_2.setTransform(29.4,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_3.setTransform(17.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_4.setTransform(11.2,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_5.setTransform(2,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_6.setTransform(-6.3,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(-12.3,-2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_8.setTransform(-23.1,-2.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_9.setTransform(-29.7,-2.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_10.setTransform(-33.5,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(-37.3,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQARAAALAJQAJAIABAPQgBAPgJAJQgLAHgRAAIgfAAIAAAygAgbgDIAeAAQANAAAGgGQAGgFAAgKQAAgLgGgEQgGgGgNAAIgeAAg");
	this.shape_12.setTransform(-44,-2.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgFABgHAAQgLAAgGgGg");
	this.shape_13.setTransform(53.8,-1.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_14.setTransform(-14.3,-1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_15.setTransform(-20.8,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(-29.3,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(-41.8,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_18.setTransform(-51.1,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-33.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-12.3}},{t:this.shape_6,p:{x:-6.3}},{t:this.shape_5,p:{x:2}},{t:this.shape_4,p:{x:11.2}},{t:this.shape_3,p:{x:17.8}},{t:this.shape_2,p:{x:29.4}},{t:this.shape_1,p:{x:39.4}},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_10,p:{x:-35.5}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_7,p:{x:-5.3}},{t:this.shape_6,p:{x:0.7}},{t:this.shape_5,p:{x:9}},{t:this.shape_4,p:{x:18.2}},{t:this.shape_3,p:{x:24.8}},{t:this.shape_2,p:{x:36.4}},{t:this.shape_1,p:{x:46.4}},{t:this.shape_13}]},1).wait(1));

	// outlineshade
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D40000").ss(4,2,0,3).p("ALeAAIsDAAIq4AA");
	this.shape_19.setTransform(-3.8,18);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#D40000").ss(1,2,0,3).p("AruDAIAJhnIBXhQIhIhPIALh6ILgAAILaAAIgjGA");
	this.shape_20.setTransform(-2.1,-1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F5F5F5").s().p("AmBDAIAJhnIBXhQIhIhPIALh5ILgAAIhNF/g");
	this.shape_21.setTransform(-38.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

	// white
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FAFAFA").s().p("ArsDAIAJhnIBYhQIhIhPIAKh5IW2AAIgjF/g");
	this.shape_22.setTransform(-2.3,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-21.6,153.3,41.6);


(lib.mcQ3 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(122.9,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(116,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_2.setTransform(106.7,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(97.5,-0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(87.9,-2.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_5.setTransform(78.6,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(69.4,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_7.setTransform(61.1,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_8.setTransform(49.9,-1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(42.4,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(33.2,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_11.setTransform(25.9,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(14.3,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(4.7,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(-5,1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(-14.3,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(-23.2,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(-32.6,-2.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(-46.1,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_19.setTransform(-55.8,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(-65.4,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_21.setTransform(-72.8,-1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_22.setTransform(-80.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_23.setTransform(-88.6,-2.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_24.setTransform(-95.8,-0.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(-103.5,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_26.setTransform(-112.5,1.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_27.setTransform(-126.3,-2.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_28.setTransform(-132.9,-2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_29.setTransform(-136.7,-2.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_30.setTransform(-140.5,-2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQASAAAJAJQAKAIAAAPQAAAPgKAJQgJAHgSAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgGQAGgFAAgKQAAgLgGgEQgHgGgMAAIgeAAg");
	this.shape_31.setTransform(-147.3,-2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_32.setTransform(83.7,-1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(39,-0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_34.setTransform(30.6,-0.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_35.setTransform(24.8,-2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_36.setTransform(13.1,-2.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_37.setTransform(9.3,-2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_38.setTransform(2.3,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_39.setTransform(-5.1,-1.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_40.setTransform(-9.7,-2.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_41.setTransform(-38.2,-2.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_42.setTransform(-53.2,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_43.setTransform(-64.7,-0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_44.setTransform(-89.2,-2.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_45.setTransform(-96.8,-1.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_46.setTransform(-113.1,-0.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_47.setTransform(-127.8,-2.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_48.setTransform(-134,-0.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_49.setTransform(-143.3,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-132.9}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-103.5}},{t:this.shape_24,p:{x:-95.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:-72.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-23.2}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:14.3}},{t:this.shape_11,p:{x:25.9}},{t:this.shape_10,p:{x:33.2}},{t:this.shape_9,p:{x:42.4}},{t:this.shape_8},{t:this.shape_7,p:{x:61.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:87.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:122.9}}]}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_25,p:{x:-121.5}},{t:this.shape_46},{t:this.shape_21,p:{x:-106.6}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_16,p:{x:-80.2}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_24,p:{x:-45.2}},{t:this.shape_41},{t:this.shape_28,p:{x:-27.1}},{t:this.shape_12,p:{x:-20.6}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_7,p:{x:19.1}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_4,p:{x:47.9}},{t:this.shape_11,p:{x:59.7}},{t:this.shape_10,p:{x:67.1}},{t:this.shape_9,p:{x:76.3}},{t:this.shape_32},{t:this.shape,p:{x:88.4}}]},1).wait(1));

	// outlineshade
	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#D40000").ss(4,2,0,3).p("AYXAAI3yAAI47AA");
	this.shape_50.setTransform(-18.3,18);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#D40000").ss(1,2,0,3).p("A4nDAIAJhnIBXhQIhIhPIALh6IZkAAIXIAAIgjGA");
	this.shape_51.setTransform(-16.6,-1.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBYhQIhJhPIALh5IZkAAIhNF/g");
	this.shape_52.setTransform(-90.6,-1.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#D40000").ss(4,2,0,3).p("AWKAAIzZAAI46AA");
	this.shape_53.setTransform(-32.4,18);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D40000").ss(1,2,0,3).p("A2bDAIAJhnIBYhQIhJhPIALh6IZkAAISvAAIgjGA");
	this.shape_54.setTransform(-30.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]}).to({state:[{t:this.shape_52},{t:this.shape_54},{t:this.shape_53}]},1).wait(1));

	// white
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FAFAFA").s().p("A4lDAIAJhnIBYhQIhJhPIALh5MAwnAAAIgjF/g");
	this.shape_55.setTransform(-16.8,-1.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FAFAFA").s().p("A2YDAIAJhnIBYhQIhJhPIALh5MAsOAAAIgjF/g");
	this.shape_56.setTransform(-30.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55}]}).to({state:[{t:this.shape_56}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.2,-21.6,318.3,41.6);


(lib.mcQ2 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(94.3,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_1.setTransform(90.6,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_2.setTransform(83.6,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(74.5,-2.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(65.1,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_5.setTransform(57.9,-1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_6.setTransform(48.1,-1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(40.6,-0.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(31.4,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_9.setTransform(24.1,-2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(12.5,-0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(2.9,-0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(-6.8,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_13.setTransform(-16.1,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(-25,-0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(-34.4,-2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(-47.9,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_17.setTransform(-57.6,-0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(-67.2,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGAAQgMAAgFgGg");
	this.shape_19.setTransform(-74.6,-1.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_20.setTransform(-82.4,-0.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_21.setTransform(-90.4,-2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_22.setTransform(-97.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_23.setTransform(-105.3,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_24.setTransform(-114.3,1.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_25.setTransform(-128.1,-2.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(-134.7,-2.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_27.setTransform(-138.5,-2.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_28.setTransform(-142.3,-2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQASAAAJAJQAKAIAAAPQAAAPgKAJQgJAHgSAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgGQAGgFAAgKQAAgLgGgEQgHgGgMAAIgeAAg");
	this.shape_29.setTransform(-149.1,-2.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgFgGg");
	this.shape_30.setTransform(63.8,-1.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(28,-2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(15,-0.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_33.setTransform(5.9,-2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(-25.7,-2.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(-40.7,-0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_36.setTransform(-52.2,-0.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_37.setTransform(-76.7,-2.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_38.setTransform(-84.3,-1.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_39.setTransform(-94.1,-1.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_40.setTransform(-100.6,-0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_41.setTransform(-115.3,-2.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(-121.5,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_43.setTransform(-130.8,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:-134.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:-105.3}},{t:this.shape_22,p:{x:-97.6}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:-25}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:12.5}},{t:this.shape_9,p:{x:24.1}},{t:this.shape_8,p:{x:31.4}},{t:this.shape_7,p:{x:40.6}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:90.6}},{t:this.shape,p:{x:94.3}}]}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_23,p:{x:-109}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_14,p:{x:-67.7}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_22,p:{x:-32.7}},{t:this.shape_34},{t:this.shape_26,p:{x:-14.6}},{t:this.shape_10,p:{x:-8.1}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_1,p:{x:21.5}},{t:this.shape_31},{t:this.shape_9,p:{x:39.8}},{t:this.shape_8,p:{x:47.2}},{t:this.shape_7,p:{x:56.4}},{t:this.shape_30},{t:this.shape,p:{x:68.5}}]},1).wait(1));

	// outlineshade
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#D40000").ss(4,2,0,3).p("AWfAAI0CAAI47AA");
	this.shape_44.setTransform(-30.3,18);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#D40000").ss(1,2,0,3).p("A2vDAIAJhnIBXhQIhIhPIALh6IZkAAITYAAIgjGA");
	this.shape_45.setTransform(-28.6,-1.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBYhQIhJhPIALh5IZkAAIhNF/g");
	this.shape_46.setTransform(-90.6,-1.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D40000").ss(4,2,0,3).p("AWKAAIzZAAI46AA");
	this.shape_47.setTransform(-32.4,18);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#D40000").ss(1,2,0,3).p("A2bDAIAJhnIBYhQIhJhPIALh6IZkAAISvAAIgjGA");
	this.shape_48.setTransform(-30.6,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).to({state:[{t:this.shape_46},{t:this.shape_48},{t:this.shape_47}]},1).wait(1));

	// white
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FAFAFA").s().p("A2tDAIAJhnIBYhQIhJhPIALh5MAs3AAAIgiF/g");
	this.shape_49.setTransform(-28.8,-1.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FAFAFA").s().p("A2YDAIAJhnIBYhQIhJhPIALh5MAsOAAAIgjF/g");
	this.shape_50.setTransform(-30.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49}]}).to({state:[{t:this.shape_50}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.2,-21.6,294.3,41.6);


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
	this.shape.setTransform(151,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_1.setTransform(144.6,-2.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(134.8,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_3.setTransform(123.3,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(111.3,-0.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_5.setTransform(102.2,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(88.9,-0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(83.1,-2.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_8.setTransform(78.8,-0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(70.4,-0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(60.7,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHAAQgLAAgGgGg");
	this.shape_11.setTransform(49.1,-1.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(41.6,-0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(32.4,-0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_14.setTransform(25.1,-2.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(13.5,-0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(3.9,-0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(-5.8,1.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(-15.1,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(-24,-0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(-33.4,-2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(-46.9,-0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(-56.6,-0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_23.setTransform(-66.2,-0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_24.setTransform(-73.6,-1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(-81.4,-0.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_26.setTransform(-89.4,-2.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_27.setTransform(-96.6,-0.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(-104.3,-0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_29.setTransform(-113.3,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_30.setTransform(-127.1,-2.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(-133.7,-2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_32.setTransform(-137.5,-2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_33.setTransform(-141.3,-2.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgpA5IAAhxIAtAAQASAAAJAJQALAIAAAPQAAAPgLAJQgJAHgSAAIgfAAIAAAygAgbgDIAeAAQAMAAAHgGQAGgFAAgKQAAgLgGgEQgHgGgMAAIgeAAg");
	this.shape_34.setTransform(-148.1,-2.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAFgBADgBIAAALQgFABgFAAQgMAAgFgGg");
	this.shape_35.setTransform(107.8,-1.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_36.setTransform(72,-2.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_37.setTransform(63.1,-0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_38.setTransform(54,-0.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_39.setTransform(43.7,-2.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(31.6,-0.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_41.setTransform(22.2,-2.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_42.setTransform(12.9,-0.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_43.setTransform(3.7,-0.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_44.setTransform(-27.5,-2.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(-42.5,-0.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_46.setTransform(-54,-0.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_47.setTransform(-78.5,-2.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGAAQgLAAgGgGg");
	this.shape_48.setTransform(-86.1,-1.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFAAQgMAAgFgGg");
	this.shape_49.setTransform(-95.9,-1.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_50.setTransform(-102.4,-0.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_51.setTransform(-117.1,-2.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_52.setTransform(-123.3,-0.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_53.setTransform(-132.6,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:-133.7}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-104.3}},{t:this.shape_27,p:{x:-96.6}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:-24}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:13.5}},{t:this.shape_14,p:{x:25.1}},{t:this.shape_13,p:{x:32.4}},{t:this.shape_12,p:{x:41.6}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:78.8}},{t:this.shape_7,p:{x:83.1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:151}}]}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_28,p:{x:-110.8}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_19,p:{x:-69.5}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_27,p:{x:-34.5}},{t:this.shape_44},{t:this.shape_31,p:{x:-16.4}},{t:this.shape_15,p:{x:-9.9}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_8,p:{x:39.4}},{t:this.shape_39},{t:this.shape_7,p:{x:47.5}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_14,p:{x:83.8}},{t:this.shape_13,p:{x:91.2}},{t:this.shape_12,p:{x:100.4}},{t:this.shape_35},{t:this.shape,p:{x:112.5}}]},1).wait(1));

	// outlineshade
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D40000").ss(4,2,0,3).p("AazAAI8pAAI48AA");
	this.shape_54.setTransform(-2.7,18);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D40000").ss(1,2,0,3).p("A7DDAIAJhnIBXhQIhIhPIALh6IZlAAIb/AAIgjGA");
	this.shape_55.setTransform(-1,-1.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5F5F5").s().p("AtDDAIAJhnIBYhQIhJhPIALh5IZkAAIhNF/g");
	this.shape_56.setTransform(-90.6,-1.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#D40000").ss(4,2,0,3).p("AZCAAI5IAAI47AA");
	this.shape_57.setTransform(-14,18);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#D40000").ss(1,2,0,3).p("A5TDAIAJhnIBYhQIhJhPIALh6IZkAAIYfAAIgjGA");
	this.shape_58.setTransform(-12.2,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_56},{t:this.shape_58},{t:this.shape_57}]},1).wait(1));

	// white
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FAFAFA").s().p("A7BDAIAJhnIBYhQIhJhPIALh5MA1gAAAIgjF/g");
	this.shape_59.setTransform(-1.2,-1.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FAFAFA").s().p("A5QDAIAJhnIBYhQIhJhPIALh5MAx+AAAIgjF/g");
	this.shape_60.setTransform(-12.5,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_59}]}).to({state:[{t:this.shape_60}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-176.2,-21.6,349.5,41.6);


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


(lib.btnSquareBG9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AmOBQQgaAAgSgSQgSgRAAgZIAAgnQAAgZASgSQASgRAaAAIMdAAQAaAAASARQASASAAAZIAAAnQAAAZgSARQgSASgaAAg");
	this.shape.setTransform(-0.2,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#347B34","#95B434","#FFFF00"],[0,0.51,1],0,-15.2,0,15.8).s().p("AmTCaQgbAAgTgTQgSgTAAgbIAAixQAAgbASgTQATgTAbAAIMnAAQAbAAASATQATATAAAbIAACxQAAAbgTATQgSATgbAAg");
	this.shape_1.setTransform(-0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmVCdQgbAAgUgTQgTgTAAgcIAAi1QAAgcATgSQAUgUAbAAIMsAAQAbAAATAUQATASAAAcIAAC1QAAAcgTATQgTATgbAAg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,0,0.435)").s().p("AmwDHQgnAAgcgcIgBgBQgdgdAAgqIAAjFQAAgqAdgdIACgCQAagbAogBINgAAQAuAAAdAiQAXAcAAAnIAADFQAAAfgPAYIAAgBIgBACIgNAPIgCADQgdAagmAAgAnwioIgBAAIAAABIgBACQgbAcAAAnIAADFQAAAoAbAcIABACQAdAbAkAAINgAAQAlgBAbgZIACgCIANgPIAAgBQAPgXAAgeIAAjFQAAgngXgaQgagggtAAItgAAQgkAAgcAbg");
	this.shape_3.setTransform(-0.1,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,153,0,0.122)").s().p("AmwDcQgugBgjggIgDgFQghgjAAgwIAAjFQAAgxAigkIAAAAIABAAIABgDQAjggAuAAINgAAQA4gBAhAoQAdAiAAAvIAADFQAAAkgSAcIgDAFIgRATQghAggvABgAn9i3IgEAEQggAhAAAwIAADFQAAAvAgAjIADADQAgAfAuAAINgAAQAuAAAfgeIAUgXQARgeAAghIAAjFQgBgvgbgfIAAgBQggglg2gBItgAAQguABgfAfg");
	this.shape_4.setTransform(-0.1,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,153,0,0.059)").s().p("AmvDfQgxAAgjgiIgEgEQgigkAAgyIAAjFQAAgyAjglIABgCIADgCQAjgiAwAAINfAAQA6AAAiAqIABAAQAdAiAAAxIAADFQAAAlgSAeIgVAZQghAggyAAgAolhiIAADFQAAAwAhAjIAEAFQAiAgAvABINfAAQAwgBAgggIARgTIADgFQASgcAAgkIAAjFQAAgvgcgiQgigog4ABItfAAQgvAAgiAgIgCADIAAAAIgBAAQgiAkAAAxg");
	this.shape_5.setTransform(-0.1,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,153,0,0.184)").s().p("AmwDXQguAAgggfIgDgDQgggjAAgvIAAjFQAAgvAggiIAEgEQAfgfAuAAINgAAQA2AAAgAmIAAAAQAbAgABAuIAADFQAAAhgRAeIgUAXQgfAeguAAgAn7i0IgCADQggAhAAAuIAADFQAAAtAfAhIAAABIACACIABABQAgAfArAAINgAAQArAAAggeIADgFIANgOIACgCIAAgBIABgBQAQgcAAggIAAjFQAAgsgbgfIAAAAQggglgzAAItgAAQgrAAggAeg");
	this.shape_6.setTransform(-0.1,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,153,0,0.247)").s().p("AmwDUQgrAAggggIgBAAIgCgCIAAgBQgfghAAgtIAAjFQAAguAgghIACgDQAggfArABINgAAQAzAAAgAlIAAAAQAbAeAAAtIAADFQAAAggQAcIgBABIAAABIgCABIgNAPIgDAFQggAegrAAgAn6ivIAAABQgfAfAAAtIAADFQAAAsAeAgIACACIAAABQAfAdAqAAINgAAQArAAAdgcIAQgSIABgDQARgaAAghIAAjFQAAgpgaggQgdgkgzAAItgAAQgqABgeAdIgBAAg");
	this.shape_7.setTransform(-0.1,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,153,0,0.373)").s().p("AmwDLQgpAAgcgcIgBAAIgCgCQgdgfAAgrIAAjFQAAgqAdgfIADgCIAAgBQAdgcAoAAINgAAQAwAAAdAiIAAAAQAZAdAAApIAADFQAAAfgPAZIAAABIgCACIgQASQgdAbgoAAgAnyirIgCACQgdAdAAAqIAADFQAAAqAdAdIABACQAcAcAnAAINgAAQAmAAAdgbIACgDIANgPIABgCIAAACQAPgZAAgfIAAjFQAAgngXgcQgdghguAAItgAAQgoAAgaAbg");
	this.shape_8.setTransform(-0.1,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,153,0,0.31)").s().p("AmwDPQgqAAgfgdIAAgBIgCgCQgeggAAgsIAAjFQAAgsAfggIAAgBIABgCIABAAQAegdAqAAINgAAQAzAAAdAjQAaAgAAApIAADFQAAAhgRAaIgBADIgQASQgdAcgrAAgAn1iuIAAABIgDACQgdAfAAAqIAADFQAAArAdAfIACACIABAAQAcAcApAAINgAAQAoAAAdgbIAQgSIACgCIAAgBQAPgZAAgfIAAjFQAAgpgZgdIAAAAQgdgigwAAItgAAQgoAAgdAcg");
	this.shape_9.setTransform(-0.1,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,153,0,0.498)").s().p("AmvDEQglAAgcgbIgBgCQgcgcAAgoIAAjFQAAgnAcgcIAAgCIAAgBIABAAQAcgbAlAAINfAAQAtAAAaAgQAXAaAAAnIAADFQAAAegPAXIAAABIgNAPIgCACQgbAZglABg");
	this.shape_10.setTransform(-0.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,15.2,0,-15.1).s().p("AmaCyQgiAAgYgYQgYgXABgiIAAjAQgBgiAYgYQAYgYAiAAIM1AAQAiAAAYAYQAYAYgBAiIAADAQABAigYAXQgYAYgiAAg");
	this.shape_11.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AmcDAQgnAAgcgbQgbgdAAgmIAAjDQAAgnAbgbQAcgcAnAAIM5AAQAnAAAcAcQAbAbAAAnIAADDQAAAngbAcIgCACQgdAZgkAAg");
	this.shape_12.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-21.3,110.8,44.7);


(lib.btnSquareBG8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AmOBQQgaAAgSgSQgSgRAAgZIAAgnQAAgZASgSQASgRAaAAIMdAAQAaAAASARQASASAAAZIAAAnQAAAZgSARQgSASgaAAg");
	this.shape.setTransform(-0.2,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC00","#FFFF00"],[0,0.51,1],0,-15.2,0,15.8).s().p("AmTCaQgbAAgTgTQgSgTAAgbIAAixQAAgbASgTQATgTAbAAIMnAAQAbAAASATQATATAAAbIAACxQAAAbgTATQgSATgbAAg");
	this.shape_1.setTransform(-0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AmVCdQgbAAgUgTQgTgTAAgcIAAi1QAAgcATgSQAUgUAbAAIMsAAQAbAAATAUQATASAAAcIAAC1QAAAcgTATQgTATgbAAg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0.608)").s().p("Am9DIQgkAAgbgaIgBgCQgbgdABgpIAAjLQgBgpAbgcIABgCQAbgbAkAAIN7AAQArAAAZAgQAXAcgBAmIAADLQAAAdgOAZIgBABQgPATgEAAIAAABIAFgCQgaAZgjAAgAn6inQgaAcAAAmIAADLQAAAnAaAcIAAABIABAAQAaAaAiAAIN7AAQAiAAAZgYIgDABIgBgBQAGgBALgRIABAAQAOgXAAgdIAAjLQAAgkgWgbQgZgfgoAAIt7AAQgjAAgZAaIAAAAg");
	this.shape_3.setTransform(0,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,0,0.173)").s().p("Am9DdQgtAAgeghIgDgDQgggjABgwIAAjLQgBgwAggjIAAgBQABAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAfghAsAAIN7AAQA0AAAeAoIAAgBQAbAiAAAuIAADLQAAAlgRAcIgCACQgNARgFAEIACAAQgfAfgrAAgAoGi4IgCACQgeAigBAvIAADLQAAAvAfAhIACADQAfAgAqAAIN7AAQAqAAAegfIgDACIATgVIABgCQARgdAAgiIAAjLQgBgtgZggIAAAAQgfgmgxABIt7AAQgqgBgfAgg");
	this.shape_4.setTransform(0,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,153,0,0.086)").s().p("Am9DhQgtAAghgiIgDgEQggglAAgwIAAjLQAAgyAggkIADgEQAhghAtAAIN7AAQA2AAAgApQAbAiAAAwIAADLQAAAlgSAeIgCADQgKAOgIAHIACgBQggAhgtAAgAoIi7QgBAAAAAAQAAABgBAAQAAAAAAABQAAAAAAAAIgBABQgfAjAAAwIAADLQAAAwAfAjIADADQAfAhAsAAIN7AAQArAAAggfIgDAAQAFgEAOgRIABgCQASgcAAglIAAjLQAAgugbgiIAAABQgegog1AAIt7AAQgsAAgfAhg");
	this.shape_5.setTransform(0,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.259)").s().p("Am9DZQgqAAgfggIgCgDQgfghAAgvIAAjLQABgvAegiIACgCQAfggAqABIN7AAQAxgBAfAmIAAAAQAZAgABAtIAADLQAAAigRAdIgBACIgTAVIADgCQgeAfgqAAgAoDi1IgCACIAAABQgeAgAAAtIAADLQAAAtAeAgIACADQAdAfApgBIN7AAQAoAAAdgcIgEABQAIgGALgPIACgBQAPgbAAgiIAAjLQAAgrgYgfIAAgBQgdgkgwAAIt7AAQgqABgcAeg");
	this.shape_6.setTransform(0,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.349)").s().p("Am9DUQgpABgdgfIgCgDQgeggAAgtIAAjLQAAgtAeggIAAgBIACgCQAdgeApgBIN7AAQAwAAAdAkIAAABQAZAfAAArIAADLQAAAigQAbIgBABQgMAPgHAGIADgBQgdAcgoAAgAoAiyIgCACIAAAAQgdAgAAArIAADLQAAArAcAfIADADQAcAdAnABIN7AAQAmAAAdgcIgEABQAJgHAKgNIABgCQAPgbAAgfIAAjLQAAgpgYgfQgbgigvgBIt7AAQgoABgbAdg");
	this.shape_7.setTransform(0,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.522)").s().p("Am9DMQglAAgcgcIgCgBQgbgfAAgqIAAjLQAAgpAbgeIACgDQAbgcAmAAIN7AAQAsAAAbAiQAXAcAAAoIAADLQAAAhgPAXIAAABQgLAPgIAFIAEgBQgbAaglAAgAn8isIgBACQgbAcABApIAADLQgBApAbAdIABACQAbAaAkAAIN7AAQAjAAAagZIgFACIAAgBQAEAAAPgTIABgBQAOgZAAgdIAAjLQABgmgXgcQgZgggrAAIt7AAQgkAAgbAbg");
	this.shape_8.setTransform(0,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.435)").s().p("Am9DRQgngBgdgdIgCgDQgcgfAAgrIAAjLQAAgrAcggIABAAIABgCQAcgdAogBIN7AAQAvABAbAiQAYAfAAApIAADLQAAAfgQAbIgBACQgKANgJAHIAEgBQgcAcgmAAgAn+ivIgCACQgbAfAAApIAADLQAAAqAbAeIACACQAcAcAlAAIN7AAQAlAAAbgbIgEACQAIgFALgPIAAgBQAPgXAAghIAAjLQAAgogXgcQgbgjgsABIt7AAQgmgBgbAdg");
	this.shape_9.setTransform(0,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.698)").s().p("Am9DEQgiAAgagaIgBgBIAAgBQgagbAAgnIAAjLQAAgmAagcIABgCIAAAAQAZgaAjAAIN7AAQAoAAAZAeQAWAbAAAlIAADLQAAAdgOAXIgBAAQgLARgGABIABABIADgBQgZAYgiAAg");
	this.shape_10.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,15.2,0,-15.1).s().p("AmaCyQgiAAgYgYQgYgXABgiIAAjAQgBgiAYgYQAYgYAiAAIM1AAQAiAAAYAYQAYAYgBAiIAADAQABAigYAXQgYAYgiAAg");
	this.shape_11.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AmcDAQgnAAgcgbQgbgdAAgmIAAjDQAAgnAbgbQAcgcAnAAIM5AAQAnAAAcAcQAbAbAAAnIAADDQAAAngbAcIgCACQgdAZgkAAg");
	this.shape_12.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.9,-21.5,111.9,45);


(lib.btnSquareBG7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AmOBQQgaAAgSgSQgSgRAAgZIAAgnQAAgZASgSQASgRAaAAIMdAAQAaAAASARQASASAAAZIAAAnQAAAZgSARQgSASgaAAg");
	this.shape.setTransform(-0.2,-5.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3DD1","#862A98","#DC3DD1"],[0,0.51,1],0,-15.2,0,15.8).s().p("AmTCaQgbAAgTgTQgSgTAAgbIAAixQAAgbASgTQATgTAbAAIMnAAQAbAAASATQATATAAAbIAACxQAAAbgTATQgSATgbAAg");
	this.shape_1.setTransform(-0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AmVCdQgbAAgUgTQgTgTAAgcIAAi1QAAgcATgSQAUgUAbAAIMsAAQAbAAATAUQATASAAAcIAAC1QAAAcgTATQgTATgbAAg");
	this.shape_2.setTransform(0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,15.2,0,-15.1).s().p("AmaCyQgiAAgYgYQgYgXABgiIAAjAQgBgiAYgYQAYgYAiAAIM1AAQAiAAAYAYQAYAYgBAiIAADAQABAigYAXQgYAYgiAAg");
	this.shape_3.setTransform(0,1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AmcDAQgnAAgcgbQgbgdAAgmIAAjDQAAgnAbgbQAcgcAnAAIM5AAQAnAAAcAcQAbAbAAAnIAADDQAAAngbAcIgCACQgdAZgkAAg");
	this.shape_4.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-17.4,101.4,38.5);


(lib.btnSquareBG6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AiMCGQgqAAgegeQgegdAAgqIAAhCQAAgpAegeQAegdAqAAIEZAAQAqAAAeAdQAeAeAAApIAABCQAAAqgeAdQgeAegqAAg");
	this.shape.setTransform(-0.4,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#347B34","#95B434","#FFFF00"],[0,0.51,1],0.1,-25.3,0.1,26.5).s().p("AiTEAQgtAAgggfQgeggAAgsIAAkpQAAgsAeggQAggfAtAAIEoAAQAsAAAfAfQAgAgAAAsIAAEpQAAAsggAgQgfAfgsAAg");
	this.shape_1.setTransform(-0.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiXEGQguAAggggQggggAAguIAAkvQAAguAggfQAgghAuAAIEvAAQAuAAAgAhQAgAfAAAuIAAEvQAAAuggAgQggAgguAAg");
	this.shape_2.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,0,0.435)").s().p("AjCFMQhBAAgxguIAAAAIgCgDQgvgxAAhFIAAlJQAAhFAvgxIADgDQAvguBCAAIGFAAQBOAAAuA3QAnAuAABCIAAFJQABAzgaApIAAgCIAAACIgBACQgJALgOANIgDAFQguAshBAAgAkukYIgBAAIAAABIgCACQguAvAABCIAAFJQAABDAuAvIACACQAtAtBAAAIGFAAQA/AAAsgqIACgEIAXgZIAAgCQAZgnAAgxIAAlJQAAg/gngtQgrg1hLAAImFAAQhAAAgsAtg");
	this.shape_3.setTransform(-0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,153,0,0.122)").s().p("AjDFuQhPAAg4g3IgHgHQg2g6AAhRIAAlJQAAhSA5g7IABAAIAAgCIADgDQA5g3BOAAIGGAAQBdAAA4BDQAwA3AABPIAAFJQAAA7geAxIgFAHIgdAhQg3A1hOAAgAlFkxIgFAGQg2A4AABPIAAFJQAABPA2A6IADADIABABQA3A1BMAAIGGAAQBLAAA2gzIAggmQAdgwAAg5IAAlJQgBhMgug2IAAgBQg1g/haAAImGAAQhMAAg2A1g");
	this.shape_4.setTransform(-0.1,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,153,0,0.059)").s().p("AjCF0QhTAAg6g5IgGgGQg4g8AAhUIAAlJQAAhUA7g8IABgDIAEgEQA6g4BRAAIGFAAQBhAAA4BEIABABQAxA5AABRIAAFJQAAA+geAxIgjAqQg5A2hRAAgAmGikIAAFJQAABRA2A6IAGAHQA4A3BQAAIGFAAQBPAAA3g1IAcghIAFgHQAegxAAg7IAAlJQAAhPgwg3Qg4hDhdAAImFAAQhPAAg4A4IgEADIAAABIgBAAQg4A7AABSg");
	this.shape_5.setTransform(-0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,153,0,0.184)").s().p("AjCFnQhNAAg3g1IgBgBIgCgDQg3g6AAhPIAAlJQAAhPA2g4IAFgGQA2g1BNAAIGFAAQBaAAA2A/IAAABQAtA2ABBMIAAFJQAAA5gdAwIggAmQg1AzhMAAgAlAksIgFAFQg1A3AABMIAAFJQAABMA0A2IAAABIAEAEIACABQA0A0BKAAIGFAAQBJAAA0gxIAGgJQAKgLALgNIACgDIABgCIABgBIAAgBQAbgtAAg2IAAlJQABhJgug1IAAAAQgzg9hXAAImFAAQhKAAg0Azg");
	this.shape_6.setTransform(-0.1,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,153,0,0.247)").s().p("AjCFhQhKAAg0g1IgCAAIgEgEIAAgBQg0g2AAhMIAAlKQAAhLA1g3IAFgGQA0gzBKAAIGFAAQBXAAAzA+IAAAAQAuA1gBBIIAAFKQAAA1gbAuIAAABIgBABIgBACIgCADQgLANgKALIgGAIQg0AyhJAAgAk+klIgBABQgzA3gBBIIAAFKQAABJAzA2IACADIACABQAyAxBIAAIGFAAQBHAAAxguIAbggIACgEQAcgsAAg2IAAlKQAAhGgrgyIAAgBQgyg7hUAAImFAAQhHAAgzAyIAAAAg");
	this.shape_7.setTransform(-0.1,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,153,0,0.373)").s().p("AjDFTQhEAAgxgvIAAgBIgDgEQgxgyAAhIIAAlJQAAhHAxg0IADgDIAAgBQAxgvBEAAIGGAAQBQAAAxA5IgBAAQAqAwAABFIAAFJQAAA0gaApIAAACIgCADIgbAfQgwAthDAAgAkzkdIgDADQgwAxAABFIAAFJQAABFAwAxIACADIAAAAQAxAuBAAAIGGAAQBAAAAvgsIADgFQAOgNAJgLIABgCIAAgCIAAACQAZgpAAgzIAAlJQAAhCgnguQgvg3hNAAImGAAQhBAAgvAug");
	this.shape_8.setTransform(-0.1,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,153,0,0.31)").s().p("AjDFZQhHABgygyIgCAAIgCgEQgzg2AAhJIAAlJQAAhJA0g2IABgCIACgCIAAAAQAzgxBGAAIGGAAQBUAAAxA6IAAABQAsAzAABGIAAFJQAAA2gcAsIgCAFIgbAfQgyAuhGAAgAk4kiIAAABIgDACQgxA1AABGIAAFJQAABIAxAyIADAEIAAABQAxAvBEAAIGGAAQBDAAAwgtIAbgfIACgDIAAgCQAagpAAg0IAAlJQAAhEgqgxIABAAQgxg5hQAAImGAAQhEAAgxAwg");
	this.shape_9.setTransform(-0.1,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,153,0,0.498)").s().p("AjCFGQhAAAgtgtIgCgCQgugvAAhDIAAlJQAAhCAugvIACgCIAAgBIABAAQAsgtBAAAIGFAAQBLAAArA1QAnAtAAA/IAAFJQAAAxgZAnIAAACIgXAZIgCAEQgsAqg/AAg");
	this.shape_10.setTransform(-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,25.3,0,-25.2).s().p("AigEoQg4AAgognQgngoAAg4IAAlBQAAg4AngoQAognA4AAIFBAAQA4AAAnAnIABAAQAnApAAA3IAAFBQAAA4gnAoIgBAAQgnAng4AAg");
	this.shape_11.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AijFAQhAAAgugtQgugwAAg/IAAlGQAAhBAuguQAugvBAABIFHAAQBAgBAuAvQAuAuAABBIAAFGQAAA/gtAwIgEADQgvAqg8AAg");
	this.shape_12.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-37.2,79.6,74.5);


(lib.btnSquareBG5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,153,0,0.608)").s().p("Ai7FOQg8AAgsgtIgCgDIgBAAQgsgwAAhEIAAlTQAAhCAsgxIADgDQArguA9AAIF3AAQBIAAAqA2QAlAuAABAIAAFTQAAAxgYApIgBABQgXAfgJACIAAAAIAJgDQgrArg8AAgAkfkaIAAAAIgCADQgqAugBBAIAAFTQABBBAqAuIABACIABABQAqArA6AAIF3AAQA6AAAogpIgEACIgBgBQAHgBAWgdIAAgBQAXgnAAgvIAAlTQAAg8gkgtQgog0hFAAIl3AAQg7AAgpAsg");
	this.shape.setTransform(-0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,153,0,0.173)").s().p("Ai7FwQhKAAg0g3IgFgEQg0g7AAhQIAAlTQAAhPA1g8IAAAAQABgDADgBQA0g3BKAAIF3AAQBYAAAyBCIAAgBQAtA4AABNIAAFTQAAA8gdAwIgDAFQgSAXgNALIAEgBQg0A0hIAAgAk1k0QgCACgBADQgzA4AABOIAAFTQAABNAyA4IAEAGQAyA0BIAAIF3AAQBGAAAygyIgFACQANgKASgZIACgDQAcgxAAg4IAAlTQAAhKgrg3IAAAAQgyg+hTAAIl3AAQhHAAgzA0g");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,153,0,0.086)").s().p("Ai7F3QhNAAg2g4IgFgHQg1g8AAhSIAAlTQAAhTA2g8IAEgGQA2g4BNAAIF3AAQBaAAA1BEQAuA5AABQIAAFTQAAA+geAzIgDADQgVAagLAKIAFgCQg1A3hMAAgAk5k4QgCABgCADIAAAAQg0A8gBBPIAAFTQAABQA0A7IAFAEQA0A3BKAAIF3AAQBJAAAzg0IgEABQANgLASgXIADgFQAdgwAAg8IAAlTQAAhNgtg4IAAABQgyhChYAAIl3AAQhJAAg1A3g");
	this.shape_2.setTransform(-0.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0.259)").s().p("Ai7FpQhIAAgyg0IgEgGQgyg4AAhNIAAlTQAAhOAzg4QABgDACgCQAzg0BHAAIF3AAQBTAAAyA+IAAAAQArA3AABKIAAFTQAAA4gcAxIgCADQgSAZgNAKIAFgCQgyAyhGAAgAkwkuIgDACIgBABQgxA4AABKIAAFTQAABKAxA3QAAADAEABQAwA0BFAAIF3AAQBDAAAwgyIgFAEQAOgMARgXIACgDQAbgtAAg4IAAlTQAAhIgqgzIAAgBQgvg8hRgBIl3AAQhFAAgwA0g");
	this.shape_3.setTransform(-0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,0,0.349)").s().p("Ai7FjQhEAAgxg0QgDgBgBgDQgxg3AAhKIAAlTQAAhKAxg4IABgBIADgCQAxg0BEAAIF3AAQBRABAwA8IAAABQApAzAABIIAAFTQAAA4gbAtIgCADQgRAXgOAMIAFgEQgwAyhDAAgAkskqIgCADIgBACQgvA0gBBIIAAFTQAABHAwA1IADAFQAvAwBCAAIF3AAQBAAAAwguIgHACQAOgKARgYIACgCQAagtAAg0IAAlTQAAhEgogzIgBAAQgtg6hOAAIl3AAQhCgBgvAxg");
	this.shape_4.setTransform(-0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,153,0,0.522)").s().p("Ai7FUQhAAAgtguIgDgDQgtgzAAhGIAAlTQAAhFAtgyIADgEQAtgvBAAAIF3AAQBLAAAsA4QAmAwAABCIAAFTQAAA0gZAqIgBABQgVAcgKAGIAHgDQgtAsg+AAgAkjkfIgDADQgsAxAABCIAAFTQAABEAsAwIAAAAIACADQAtAtA8AAIF3AAQA8AAAqgrIgIADIgBAAQAJgCAYgfIABgBQAYgpAAgxIAAlTQAAhAglguQgqg2hIAAIl3AAQg9AAgrAug");
	this.shape_5.setTransform(-0.1,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.435)").s().p("Ai7FbQhCAAgvgwIgEgFQgvg1AAhHIAAlTQAAhIAwg0IAAgCIADgDQAvgxBCABIF3AAQBNAAAuA6IABAAQAoAzAABEIAAFTQAAA0gaAtIgCACQgSAYgNAKIAGgCQgvAuhAAAgAkokkIgDADQgtAzAABFIAAFTQAABGAtAzIADACQAtAvBAAAIF3AAQA+AAAtgsIgHADQAKgHAVgbIABgBQAZgqAAg0IAAlTQAAhCgmgwQgsg4hLAAIl3AAQhAgBgtAwg");
	this.shape_6.setTransform(-0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.698)").s().p("Ai7FHQg7AAgpgrIgBgBIgBgCQgrguAAhBIAAlTQAAhAArguIACgDIAAAAQApgsA7AAIF3AAQBFAAAoA0QAkAtAAA8IAAFTQAAAvgXAnIgBABQgVAdgHABIABABIAEgCQgoApg6AAg");
	this.shape_7.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.298)").s().p("AiMCGQgqAAgegeQgegdAAgqIAAhCQAAgpAegeQAegdAqAAIEZAAQAqAAAeAdQAeAeAAApIAABCQAAAqgeAdQgeAegqAAg");
	this.shape_8.setTransform(-0.4,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FF3300","#FFCC00","#FFFF00"],[0,0.51,1],0.1,-25.3,0.1,26.5).s().p("AiTEAQgtAAgggfQgeggAAgsIAAkpQAAgsAeggQAggfAtAAIEoAAQAsAAAfAfQAgAgAAAsIAAEpQAAAsggAgQgfAfgsAAg");
	this.shape_9.setTransform(-0.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiXEGQguAAggggQggggAAguIAAkvQAAguAggfQAgghAuAAIEvAAQAuAAAgAhQAgAfAAAuIAAEvQAAAuggAgQggAgguAAg");
	this.shape_10.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1));

	// Layer_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,25.3,0,-25.2).s().p("AigEoQg4AAgognQgngoAAg4IAAlBQAAg4AngoQAognA4AAIFBAAQA4AAAnAnIABAAQAnApAAA3IAAFBQAAA4gnAoIgBAAQgnAng4AAg");
	this.shape_11.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AijFAQhAAAgugtQgugwAAg/IAAlGQAAhBAuguQAugvBAABIFHAAQBAgBAuAvQAuAuAABBIAAFGQAAA/gtAwIgEADQgvAqg8AAg");
	this.shape_12.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-37.5,75.4,75);


(lib.btnSquareBG4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AiMCGQgqAAgegeQgegdAAgqIAAhCQAAgpAegeQAegdAqAAIEZAAQAqAAAeAdQAeAeAAApIAABCQAAAqgeAdQgeAegqAAg");
	this.shape.setTransform(-0.4,-11.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#3DB4DC","#2A5898","#3DB4DC"],[0,0.51,1],0.1,-25.3,0.1,26.5).s().p("AiTEAQgtAAgggfQgeggAAgsIAAkpQAAgsAeggQAggfAtAAIEoAAQAsAAAfAfQAgAgAAAsIAAEpQAAAsggAgQgfAfgsAAg");
	this.shape_1.setTransform(-0.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AiXEGQguAAggggQggggAAguIAAkvQAAguAggfQAgghAuAAIEvAAQAuAAAgAhQAgAfAAAuIAAEvQAAAuggAgQggAgguAAg");
	this.shape_2.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,25.3,0,-25.2).s().p("AigEoQg4AAgognQgngoAAg4IAAlBQAAg4AngoQAognA4AAIFBAAQA4AAAnAnIABAAQAnApAAA3IAAFBQAAA4gnAoIgBAAQgnAng4AAg");
	this.shape_3.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AijFAQhAAAgugtQgugwAAg/IAAlGQAAhBAuguQAugvBAABIFHAAQBAgBAuAvQAuAuAABBIAAFGQAAA/gtAwIgEADQgvAqg8AAg");
	this.shape_4.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-30.2,64,64.1);


(lib.btnSquareBG3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AnKBnQggAAgXgWQgXgXAAggIAAgzQAAggAXgXQAXgWAgAAIOUAAQAhAAAXAWQAXAXAAAgIAAAzQAAAggXAXQgXAWghAAg");
	this.shape.setTransform(-0.3,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#347B34","#95B434","#FFFF00"],[0,0.51,1],0,-19.5,0,20.4).s().p("AnQDFQghAAgZgYQgYgYAAgiIAAjlQAAgiAYgYQAZgYAhAAIOhAAQAhAAAZAYQAYAYAAAiIAADlQAAAigYAYQgZAYghAAg");
	this.shape_1.setTransform(-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnSDKQgjAAgZgZQgZgZAAgjIAAjpQAAgjAZgZQAZgZAjAAIOlAAQAjAAAZAZQAZAZAAAjIAADpQAAAjgZAZQgZAZgjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,153,0,0.435)").s().p("AovDWIAAAAIgCgCQgkglAAgzIAAj3QAAgzAkgkIABgBIAAgBIABgBIAAAAQAkgiAyAAIOzAAQA7AAAiAoQAfAkAAAwIAAD3QAAAlgUAfIABgBIgBABIgBABQgKAMgGAHIgDADQgjAhgxAAIuzAAIAAAAQgyAAgkgigAorDSQAiAhAwAAIOzAAQAvAAAigfIABgDQAHgGAKgNIABgBQATgdAAgkIAAj3QAAgvgeghQghgng4AAIuzAAQgwAAgiAhIAAAAIgBAAIAAABIgBABQgjAjAAAxIAAD3QAAAxAjAjIAAABIAAgBIACACg");
	this.shape_3.setTransform(0,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,153,0,0.122)").s().p("AnZERQg8AAgrgpIgBgBIgEgEQgpgsAAg7IAAj3QAAg9ArgsIAAAAIABgBIACgCIAAAAQArgpA8AAIOzAAQBHAAApAxIAAAAQAlAqAAA6IAAD3QAAAtgYAkIABgBIgDAFIgRATIgFAGQgqAng7AAgAo+jiIgBABIgBABQgpArAAA6IAAD3QAAA6ApArIADADIAAABQAqAnA6AAIOzAAQA5AAApgmIAFgGIAQgSIADgFQAWgjAAgqIAAj3QAAg4gkgoIAAgBQgogvhEAAIuzAAQg6AAgpAoIAAgBIgCACg");
	this.shape_4.setTransform(0,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,153,0,0.059)").s().p("ApEDsIgBgCIgDgEQgrgsAAg+IAAj3QAAg/AsgtIABgBIACgDIABAAQAtgqA9AAIOzAAQBJAAArAzIAAAAQAmArAAA8IAAD3QAAAtgXAlIgFAGIgPASIgGAIQgsAog9AAIuzAAIAAAAQg+AAgtgqgApAjnIAAAAIgCACIgBABIAAAAQgrAsAAA9IAAD3QAAA7ApAsIAEAEIABABQArApA8AAIOzAAQA7AAAqgnIAFgGIARgTIADgGIgBACQAYgkAAgtIAAj3QAAg6glgqIAAAAQgpgxhHAAIuzAAIAAAAQg8AAgrApg");
	this.shape_5.setTransform(0,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,153,0,0.184)").s().p("Ao9DlIAAgBIgDgDQgpgrAAg6IAAj3QAAg6ApgrIABgBIABgBIACgCIAAABQApgoA6AAIOzAAQBEAAAoAvIAAABQAkAoAAA4IAAD3QAAAqgWAjIgDAFIgQASIgFAGQgpAmg5AAIuzAAIAAAAQg6AAgqgngAo7jeIgBACQgoApAAA4IAAD3QAAA4AnApIADADIABABQAoAmA4AAIOzAAQA3AAAngkIAFgGIAQgSIACgDIAAgBIABgBIAAgBQAVghAAgoIAAj3QAAg2gignIAAgBQgngthCAAIuzAAQg4AAgoAmIAAAAIgCACgAo8DdIABABIAAAAg");
	this.shape_6.setTransform(0,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,153,0,0.247)").s().p("AnZEHQg4AAgogmIgBgBIgDgDQgngpAAg4IAAj3QAAg4AogpIABgCIACgCIAAAAQAogmA4AAIOzAAQBCAAAnAtIAAABQAiAnAAA2IAAD3QAAAogVAhIAAABIgBABIAAABIgCADIgQASIgFAGQgnAkg3AAgAHaECQA1AAAmgjIAEgFIAQgSIACgDIAAgBQAVggAAgoIAAj3QAAg0ghgmIAAAAQgmgsg/AAIuzAAQg2AAgmAlIAAAAIgCABIgBABIAAABQgnAnAAA3IAAD3QAAA2AmAoIACADIABAAQAnAlA2AAgAo7DeIAAAAIgBgBg");
	this.shape_7.setTransform(0,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,153,0,0.373)").s().p("AHaD9IuzAAQg0AAglgjIgBgBIgCgCQglgnAAg0IAAj3QAAg1AmgmIAAAAIAAAAIABgCIABgBIAAAAQAlgjA0AAIOzAAQA9AAAkAqIAAAAQAgAlAAAyIAAD3QAAAmgUAfIAAABIgCACIgQATIgDAEQglAigzAAIAAAAgAovjVIAAAAIgBABIAAABIgBABQgkAkAAAzIAAD3QAAAzAkAlIACACIAAAAQAkAiAyAAIOzAAQAxAAAjghIADgDQAGgHAKgMIABgBIABgBIgBABQAUgfAAglIAAj3QAAgwgfgkQgigog7AAIuzAAIAAAAQgyAAgkAig");
	this.shape_8.setTransform(0,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,153,0,0.31)").s().p("AHaECIuzAAQg2AAgnglIgBAAIgCgDQgmgoAAg2IAAj3QAAg3AngnIAAgBIABgBIACgBIAAAAQAmglA2AAIOzAAQA/AAAmAsIAAAAQAhAmAAA0IAAD3QAAAogVAgIAAABIgCADIgQASIgEAFQgmAjg1AAIAAAAgApah7IAAD3QAAA0AlAnIACACIABABQAlAjA0AAIOzAAQAzAAAlgiIADgEIAQgTIACgCIAAgBQAUgfAAgmIAAj3QAAgyggglIAAAAQgkgqg9AAIuzAAQg0AAglAjIAAAAIgBABIgBACIAAAAIAAAAQgmAmAAA1g");
	this.shape_9.setTransform(0,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,153,0,0.498)").s().p("AHaDzIuzAAQgwAAgighIgCgCIAAABIAAgBQgjgjAAgxIAAj3QAAgxAjgjIABgBIAAgBIABgBIAAABQAighAwAAIOzAAQA4AAAhAnQAeAhAAAvIAAD3QAAAkgTAdIgBABQgKANgHAGIgBADQgiAfgvAAIAAAAg");
	this.shape_10.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,19.5,0,-19.4).s().p("AnZDkQgrAAgegeQgfgfAAgrIAAj3QAAgrAfgfQAegeArAAIOzAAQArAAAeAeIABAAQAeAfAAArIAAD3QAAArgeAfIgBAAQgeAegrAAg");
	this.shape_11.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AnbD3QgyAAgjgkQgkgkAAgxIAAj7QAAgyAkgjQAjgkAyAAIO3AAQAyAAAjAkQAkAjAAAyIAAD7QAAAxgjAkIgDADQgkAhgvAAg");
	this.shape_12.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-26.8,125.6,55.7);


(lib.btnSquareBG2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AnKBnQggAAgXgWQgXgXAAggIAAgzQAAggAXgXQAXgWAgAAIOUAAQAhAAAXAWQAXAXAAAgIAAAzQAAAggXAXQgXAWghAAg");
	this.shape.setTransform(-0.3,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FF3300","#FFCC00","#FFFF00"],[0,0.51,1],0,-19.5,0,20.4).s().p("AnQDFQghAAgZgYQgYgYAAgiIAAjlQAAgiAYgYQAZgYAhAAIOhAAQAhAAAZAYQAYAYAAAiIAADlQAAAigYAYQgZAYghAAg");
	this.shape_1.setTransform(-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AnSDKQgjAAgZgZQgZgZAAgjIAAjpQAAgjAZgZQAZgZAjAAIOlAAQAjAAAZAZQAZAZAAAjIAADpQAAAjgZAZQgZAZgjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,153,0,0.608)").s().p("AorDTIgCgCIgBgBQgigjAAgxIAAj3QAAgxAigjIACgCIABAAQAighAwAAIOzAAQA4AAAhAnQAeAhAAAvIAAD3QAAAkgTAdIgBABQgSAXgIABIABAAIAGgCQghAfgvAAIuzAAIAAAAQgwAAgigggAHaDuQAtAAAggeIgDACIgBgBQAFAAASgWIAAgBQASgcAAgiIAAj3QAAgtgcggQggglg2AAIuzAAQguAAghAfIAAABIgCACQghAhAAAvIAAD3QAAAvAhAhIABACIABABQAhAfAuAAg");
	this.shape_3.setTransform(0,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,153,0,0.173)").s().p("Ao9DlIgDgFQgpgqAAg6IAAj3QAAg6ApgrIABgBIADgCQApgoA6AAIOzAAQBEAAAoAwIAAgBQAkApAAA4IAAD3QAAArgXAkIgCADQgOAQgLAJIAEgBQgpAmg5AAIuzAAIAAAAQg6AAgqgngAo5jgIgDADQgoApAAA5IAAD3QAAA4AoApIADAEQAoAmA4AAIOzAAQA3AAAngkIgEABQALgIAOgRIACgDQAWgiAAgqIAAj3QAAg2gignIAAgBQgngthCAAIuzAAIAAAAQg4AAgoAmg");
	this.shape_4.setTransform(0,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,153,0,0.086)").s().p("ApADoIgEgEQgqgsAAg8IAAj3QAAg8AqgsIAEgEQArgpA8AAIOzAAQBHAAApAxIAAAAQAlAqAAA6IAAD3QAAAtgYAkIgCAEQgOAQgLAKIADgBQgqAng7AAIuzAAIAAAAQg8AAgrgpgAo8jjIgDACIgBABQgpArAAA6IAAD3QAAA6ApAqIADAFQAqAnA6AAIOzAAQA5AAApgmIgEABQALgJAOgQIACgDQAXgkAAgrIAAj3QAAg4gkgpIAAABQgogwhEAAIuzAAIAAAAQg6AAgpAog");
	this.shape_5.setTransform(0,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,153,0,0.259)").s().p("Ao5DhIgDgEQgogpAAg4IAAj3QAAg5AogpIADgDQAogmA4AAIOzAAQBCAAAnAtIAAABQAiAnAAA2IAAD3QAAAqgWAiIgCADQgOARgLAIIAEgBQgnAkg3AAIuzAAIAAAAQg4AAgogmgAo1jcIgDACIAAAAQgnAoAAA3IAAD3QAAA2AmAoIADADQAnAlA2AAIOzAAQA1AAAmgjIgEABQAKgHAOgRIACgDQAVghAAgoIAAj3QAAg0ghgmIAAAAQgmgsg/AAIuzAAIAAAAQg2AAgmAlg");
	this.shape_6.setTransform(0,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,153,0,0.349)").s().p("Ao2DdIgDgDQgmgoAAg2IAAj3QAAg3AngoIAAAAIADgCQAmglA2AAIOzAAQA/AAAmAsIAAAAQAhAmAAA0IAAD3QAAAogVAhIgCADQgOARgKAHIAEgBQgmAjg1AAIuzAAIAAAAQg2AAgnglgAoyjZIgCACIAAABQgmAmAAA1IAAD3QAAA0AlAmIADAEQAlAjA0AAIOzAAQAzAAAlgiIgGACQALgHAOgSIABgBQAVggAAgnIAAj3QAAgyggglIAAAAQgkgqg9AAIuzAAIAAAAQg0AAglAjg");
	this.shape_7.setTransform(0,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,153,0,0.522)").s().p("AovDWIgCgCQgkglAAgzIAAj3QAAgzAkgkIABgBIABgCQAkgiAyAAIOzAAQA7AAAjAoIgBAAQAfAkAAAwIAAD3QAAAlgUAfIgBABQgPATgKAGIAGgDQgjAhgxAAIuzAAIAAAAQgyAAgkgigAorjRIgBAAIgCACQgiAjAAAxIAAD3QAAAxAiAjIABABIACACQAiAgAwAAIOzAAQAvAAAhgfIgGACIgBAAQAIgBASgXIABgBQATgdAAgkIAAj3QAAgvgeghQghgng4AAIuzAAIAAAAQgwAAgiAhg");
	this.shape_8.setTransform(0,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,153,0,0.435)").s().p("AoyDaIgDgEQglgmAAg0IAAj3QAAg1AmgmIAAgBIACgCQAlgjA0AAIOzAAQA9AAAkAqIAAAAQAgAlAAAyIAAD3QAAAngVAgIgBABQgOASgLAHIAGgCQglAigzAAIuzAAIAAAAQg0AAglgjgAovjVIgBACIgBABQgkAkAAAzIAAD3QAAAzAkAlIACACQAkAiAyAAIOzAAQAxAAAjghIgGADQAKgGAPgTIABgBQAUgfAAglIAAj3QAAgwgfgkIABAAQgjgog7AAIuzAAIAAAAQgyAAgkAig");
	this.shape_9.setTransform(0,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.698)").s().p("AHaDuIuzAAQguAAghgfIgBgBIgBgCQghghAAgvIAAj3QAAgvAhghIACgCIAAgBQAhgfAuAAIOzAAQA2AAAgAlQAcAgAAAtIAAD3QAAAigSAcIAAABQgSAWgFAAIABABIADgCQggAegtAAIAAAAg");
	this.shape_10.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,19.5,0,-19.4).s().p("AnZDkQgrAAgegeQgfgfAAgrIAAj3QAAgrAfgfQAegeArAAIOzAAQArAAAeAeIABAAQAeAfAAArIAAD3QAAArgeAfIgBAAQgeAegrAAg");
	this.shape_11.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// Layer_7
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.298)").s().p("AnbD3QgyAAgjgkQgkgkAAgxIAAj7QAAgyAkgjQAjgkAyAAIO3AAQAyAAAjAkQAkAjAAAyIAAD7QAAAxgjAkIgDADQgkAhgvAAg");
	this.shape_12.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.3,-26.3,124.6,54.7);


(lib.btnSquareBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.298)").s().p("AnKBnQggAAgXgWQgXgXAAggIAAgzQAAggAXgXQAXgWAgAAIOUAAQAhAAAXAWQAXAXAAAgIAAAzQAAAggXAXQgXAWghAAg");
	this.shape.setTransform(-0.3,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],0,-19.5,0,20.4).s().p("AnQDFQghAAgZgYQgYgYAAgiIAAjlQAAgiAYgYQAZgYAhAAIOhAAQAhAAAZAYQAYAYAAAiIAADlQAAAigYAYQgZAYghAAg");
	this.shape_1.setTransform(-0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AnSDKQgjAAgZgZQgZgZAAgjIAAjpQAAgjAZgZQAZgZAjAAIOlAAQAjAAAZAZQAZAZAAAjIAADpQAAAjgZAZQgZAZgjAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0,19.5,0,-19.4).s().p("AnZDkQgrAAgegeQgfgfAAgrIAAj3QAAgrAfgfQAegeArAAIOzAAQArAAAeAeIABAAQAeAfAAArIAAD3QAAArgeAfIgBAAQgeAegrAAg");
	this.shape_3.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Layer_7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AnbD3QgyAAgjgkQgkgkAAgxIAAj7QAAgyAkgjQAjgkAyAAIO3AAQAyAAAjAkQAkAjAAAyIAAD7QAAAxgjAkIgDADQgkAhgvAAg");
	this.shape_4.setTransform(0,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-22.9,119.3,49.3);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,253.6,39.4);


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


(lib.btnSquare15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArWMMQgWAAgQgQQgQgQAAgXIAAwRQAAgWAQgQQAQgQAWAAIIYAAIAAliQAAgXAQgQQAQgQAXAAIJNAAQAVAAARARIEREPQAQAQAAAXIAAMBQAAAWgQAQQgQAQgXAAIoXAAIAAFiQAAAXgQAQQgQAQgXAAgAqeKfILwAAIAAqsIjrAAQgPAAgKgKQgLgLAAgPIAAjVInhAAgACbEHIIFAAIAAqoIjaAAQgPAAgLgKQgKgKAAgPIAAjaInzAAIAAFyICtCuIGYAAQAOAAALALQALAKAAAPQAAAPgLALQgLALgOAAIlaAAIABBrIFZAAQAOAAALALQALALAAAPQAAAPgLALQgLAKgOAAIlZAAgAAehVIiTiUIAACUICTAAgAJlnoIh6h7IAAB7IB6AAgAnyIXQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnyFhQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnyCsQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnygIQgkAAAAgkQAAglAkAAIC2AAQAjAAAAAlQAAAkgjAAgABbjqQgkAAAAglQAAgkAkAAIGZAAQAkAAAAAkQAAAlgkAAgABbmhQgkAAAAgjQAAgkAkAAIC1AAQAkAAAAAkQAAAjgkAAg");
	this.shape.setTransform(-25.8,-0.7,0.15,0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_1.setTransform(30.6,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_2.setTransform(21.7,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(12.2,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_4.setTransform(2.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.instance = new lib.btnSquareBG7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-19.2,101.4,38.5);


(lib.btnSquare14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdLzQgwgDgqgWQhAgggkhDQgjhAAAhRQAAiEBch0IAQgpIgrAOQgtAjgcAMQh/A6h5geQh5gegwhmQg2hvBCh0QA7hoB1g1QB0g2BxAXQBvAWA5BVIATgCQA0iZCEirQBMhhB1h2QAmgrBAgNQBDgOAhAkQAiAlAFAmQAFAigUAmIiHEBIEHiBQAmgSAqAKQAqAKAbAiQAbAjAAAoQAAAagLAZQgLAYgTARQivCdhgBFQigByiXAvQgBAFgBANQBMA3AWBhQAVBYgdBeQgnBjguA4Qg5BGhZAeQgnANgoAAIgQgBgAhBA5QgBAzgVBBQgMAlgcBLQgxAzgVBGQgWBJASBAQARBBAzAZQAwAYA3gSQA2gSAtg1QApgxASg+QAbhXgdhHQghhRhbAEQAbgwAJgiQAKgngDgzQCWgZCxh7QBfhCC7imQAJgJgHgKQgHgLgKAFQlMCejKBqIgcAKIAMgfQBujFCplFQAEgIgIgJQgJgJgKALQigCmhFBZQh3CbgrCNIgKAtQg1gEgqAKQghAHgrAWQAHhohpgcQhcgYhdArQhKAhgrBAQgzBJAhBEQAdA8BQAQQBRAPBUgnQAkgOAmgiQAngLBLgZQA+gSAxAAIAHAAgAhbIiQgZgNgJgkQgIgjAMgpQAKgiAYgdQAaggAggLQA/gVATA/QARA5gdA6QgTAmgiAZQgaATgYAAQgPAAgOgIgAnxBpQgtgHgQggQgQgkAfgoQAagjAngRQAvgVAsAHQAqAIAVAfQAWAfgjArQgdAkglARQglARgjAAQgLAAgLgCg");
	this.shape.setTransform(-25.8,-0.7,0.15,0.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGAAQgLAAgGgGg");
	this.shape_1.setTransform(23.8,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_2.setTransform(16.4,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_3.setTransform(6.4,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.instance = new lib.btnSquareBG7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-19.2,101.4,38.5);


(lib.btnSquare13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape.setTransform(31.7,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGAAQgMAAgFgGg");
	this.shape_1.setTransform(24.5,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_2.setTransform(17.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(8.8,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIAAAPQAAAPgKAJQgKAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFgBgKQABgLgHgEQgGgGgNAAIgfAAg");
	this.shape_4.setTransform(-0.6,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai1MLQgWAAgQgQQgQgQAAgWIAAhSIm9AAQgXAAgPgPQgQgQgBgXIAAzGQABgXAQgQQAPgQAXAAIEHAAIAAgkQAAgWAQgQQARgQAVAAIHGAAQAWAAAQAQQAQAQAAAWIAAAkIEHAAQAXAAAPAQQARAQgBAXIAAEmIEBEAQAQARAAAVIAAMCQAAAWgPAQQgRAQgWAAgAh8KfILuAAIAAqoIjaAAQgPAAgKgKQgLgKAAgQIAAjgInwAAgApxIXIGtAAIAAtIQAAgQAKgKQAKgKAQAAIICAAIAAjuIj1AAIAAA8QAAAPgLALQgLAKgOAAImiAAQgOAAgLgKQgLgLAAgPIAAg8Ij0AAgAI3hRQhAhCg7g4IAAB6IB7AAIAAAAgAkzosIFYAAIAAhyIlYAAgAAuIXQgkAAAAgkQAAglAkAAIGXAAQAkAAAAAlQAAAkgkAAgAAuFiQgkAAAAgkQAAglAkAAIGXAAQAkAAAAAlQAAAkgkAAgAAuCtQglAAAAglQAAgkAlAAIGXAAQAkAAAAAkQAAAlgkAAgAAugJQgkAAAAgkQAAgkAkAAIC1AAQAkAAAAAkQAAAkgkAAg");
	this.shape_5.setTransform(-25.8,-0.8,0.15,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},3).wait(1));

	// Layer_1
	this.instance = new lib.btnSquareBG7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG9("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-19.2,101.4,38.5);


(lib.btnSquare12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdLzQgwgDgqgWQhAgggkhDQgjhAAAhRQAAiEBch0IAQgpIgrAOQgtAjgcAMQh/A6h5geQh5gegwhmQg2hvBCh0QA7hoB1g1QB0g2BxAXQBvAWA5BVIATgCQA0iZCEirQBMhhB1h2QAmgrBAgNQBDgOAhAkQAiAlAFAmQAFAigUAmIiHEBIEHiBQAmgSAqAKQAqAKAbAiQAbAjAAAoQAAAagLAZQgLAYgTARQivCdhgBFQigByiXAvQgBAFgBANQBMA3AWBhQAVBYgdBeQgnBjguA4Qg5BGhZAeQgnANgoAAIgQgBgAhBA5QgBAzgVBBQgMAlgcBLQgxAzgVBGQgWBJASBAQARBBAzAZQAwAYA3gSQA2gSAtg1QApgxASg+QAbhXgdhHQghhRhbAEQAbgwAJgiQAKgngDgzQCWgZCxh7QBfhCC7imQAJgJgHgKQgHgLgKAFQlMCejKBqIgcAKIAMgfQBujFCplFQAEgIgIgJQgJgJgKALQigCmhFBZQh3CbgrCNIgKAtQg1gEgqAKQghAHgrAWQAHhohpgcQhcgYhdArQhKAhgrBAQgzBJAhBEQAdA8BQAQQBRAPBUgnQAkgOAmgiQAngLBLgZQA+gSAxAAIAHAAgAhbIiQgZgNgJgkQgIgjAMgpQAKgiAYgdQAaggAggLQA/gVATA/QARA5gdA6QgTAmgiAZQgaATgYAAQgPAAgOgIgAnxBpQgtgHgQggQgQgkAfgoQAagjAngRQAvgVAsAHQAqAIAVAfQAWAfgjArQgdAkglARQglARgjAAQgLAAgLgCg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64.1);


(lib.btnSquare11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1MLQgWAAgQgQQgQgQAAgWIAAhSIm9AAQgXAAgPgPQgQgQgBgXIAAzGQABgXAQgQQAPgQAXAAIEHAAIAAgkQAAgWAQgQQARgQAVAAIHGAAQAWAAAQAQQAQAQAAAWIAAAkIEHAAQAXAAAPAQQARAQgBAXIAAEmIEBEAQAQARAAAVIAAMCQAAAWgPAQQgRAQgWAAgAh8KfILuAAIAAqoIjaAAQgPAAgKgKQgLgKAAgQIAAjgInwAAgApxIXIGtAAIAAtIQAAgQAKgKQAKgKAQAAIICAAIAAjuIj1AAIAAA8QAAAPgLALQgLAKgOAAImiAAQgOAAgLgKQgLgLAAgPIAAg8Ij0AAgAI3hRQhAhCg7g4IAAB6IB7AAIAAAAgAkzosIFYAAIAAhyIlYAAgAAuIXQgkAAAAgkQAAglAkAAIGXAAQAkAAAAAlQAAAkgkAAgAAuFiQgkAAAAgkQAAglAkAAIGXAAQAkAAAAAlQAAAkgkAAgAAuCtQglAAAAglQAAgkAlAAIGXAAQAkAAAAAkQAAAlgkAAgAAugJQgkAAAAgkQAAgkAkAAIC1AAQAkAAAAAkQAAAkgkAAg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.8);

	this.instance_1 = new lib.btnSquareBG5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:-1.8}}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance,p:{y:-1.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64.1);


(lib.btnSquare10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArWMMQgWAAgQgQQgQgQAAgXIAAwRQAAgWAQgQQAQgQAWAAIIYAAIAAliQAAgXAQgQQAQgQAXAAIJNAAQAVAAARARIEREPQAQAQAAAXIAAMBQAAAWgQAQQgQAQgXAAIoXAAIAAFiQAAAXgQAQQgQAQgXAAgAqeKfILwAAIAAqsIjrAAQgPAAgKgKQgLgLAAgPIAAjVInhAAgACbEHIIFAAIAAqoIjaAAQgPAAgLgKQgKgKAAgPIAAjaInzAAIAAFyICtCuIGYAAQAOAAALALQALAKAAAPQAAAPgLALQgLALgOAAIlaAAIABBrIFZAAQAOAAALALQALALAAAPQAAAPgLALQgLAKgOAAIlZAAgAAehVIiTiUIAACUICTAAgAJlnoIh6h7IAAB7IB6AAgAnyIXQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnyFhQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnyCsQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnygIQgkAAAAgkQAAglAkAAIC2AAQAjAAAAAlQAAAkgjAAgABbjqQgkAAAAglQAAgkAkAAIGZAAQAkAAAAAkQAAAlgkAAgABbmhQgkAAAAgjQAAgkAkAAIC1AAQAkAAAAAkQAAAjgkAAg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG6("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-32,64,64.1);


(lib.btnSquare9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AkuAAIJdAA");
	this.shape.setTransform(-0.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgHQgFgGgMAAQgNAAgJAIQgIAJAAAPIAAA4IgQAAIAAhHQAAgPgCgNIAPAAIACASQAFgKAJgFQAJgFALAAQAkgBAAAoIAAA+g");
	this.shape_1.setTransform(25.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgPgCgNIAQAAIABASQAEgKAHgFQAJgFALAAIAJAAIgBAQQgEgCgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_2.setTransform(16.3,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghApQgIgKgBgUIAAg9IAQAAIAAA9QAAANAHAHQAFAGAMAAQAMABAIgKQAIgIAAgPIAAg3IARAAIAABjIgQAAIAAgRQgFAKgJAEQgJAFgKAAQgRAAgKgKg");
	this.shape_3.setTransform(6.3,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_4.setTransform(-3.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_5.setTransform(-12.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A3IAHgNQAKAJALAEQALAEANAAQARAAAKgHQAJgHAAgMQAAgHgEgEQgFgFgHgDIgUgFQgPgEgLgEQgKgDgHgIQgGgIgBgNQAAgMAHgJQAGgJAMgGQAMgFAOAAQAPAAANAFQANAEAJAJIgHANQgKgJgKgEQgLgEgMAAQgPAAgKAHQgJAHAAANQAAALAIAFQAJAFAQAEQASAFAKADQALADAHAIQAHAHAAANQAAAMgHAJQgGAJgMAFQgMAFgQAAQggAAgUgSg");
	this.shape_6.setTransform(-24.7,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAzIAPg9IABgEQAEgXgXAAQgOAAgJAIQgKAJgDAPIgOA4IgRAAIAShHIAEgTIABgJIAPAAIgCAQQAHgJAIgFQALgEALAAQARgBAHAKQAIAJgDARIgBAEIgPA+g");
	this.shape.setTransform(26.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAzIAShHIADgVIABgHIAQAAIgCAQQAEgIAKgGQAKgEALAAIAJAAIgFAQQgEgCgGgBQgPAAgJAKQgIAJgDANIgOA4g");
	this.shape_1.setTransform(18.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAqQgHgJADgQIABgGIAPg9IAQAAIgPA8IgBAEQgEAYAWgBQAOAAAJgIQAJgIADgQIAPg3IAQAAIgZBjIgQAAIAEgQQgGAJgJAEQgJAFgLAAQgQAAgIgJg");
	this.shape_2.setTransform(8.7,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA8QgGgIACgNIABgEIAOg5IgUAAIADgMIAUAAIAGgaIARgGIgIAgIAdAAIgDAMIgdAAIgMA2IgBAEQgCAJAEAEQADAEAHAAIALgCIgDAOQgGACgHAAQgOAAgGgHg");
	this.shape_3.setTransform(0.1,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAuQgJgGgDgLQgDgLACgOQADgQAIgNQAIgMAMgHQAMgHANAAQAMAAAHAFQAJAFACAKIAFgSIAPAAIgYBkIgQAAIAEgQQgGAIgKAFQgIAEgLAAQgNAAgJgGgAgWgbQgKAMgDATQgDAQAGAKQAHAJAOAAQAOAAALgMQAKgLADgTQADgRgGgJQgGgJgPAAQgOAAgLALg");
	this.shape_4.setTransform(-10.2,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBEQgNgEgKgJIAKgNQAKAJAKAEQALAEANAAQARAAAKgGQAKgHADgMQABgHgEgFQgDgEgHgDIgRgGIgXgJQgIgDgGgHQgEgIACgNQABgNAJgJQAHgJANgFQAMgFAQAAQAPAAAMAFQAMAFAJAIIgKANQgRgRgYAAQgQAAgKAHQgKAHgCAMQgCAIAEAFQAEAFAGADIASAHQAOAEAJADQAHADAGAIQAFAHgCAMQgDASgQALQgQALgYAAQgRAAgMgFg");
	this.shape_5.setTransform(-22.1,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA0IAAg7QAAgKgEgGQgEgEgIAAQgJAAgGAGQgGAHAAAKIAAA4IgfAAIAAhHQAAgQgBgNIAcAAIACAPQAGgIAIgFQAIgFALAAQAkAAAAAqIAAA9g");
	this.shape.setTransform(26.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA0IAAhHQAAgQgCgNIAdAAIACARQAEgKAHgEQAIgGAKAAQAGAAAFACIAAAcQgIgDgHgBQgMABgHAGQgFAHAAALIAAA0g");
	this.shape_1.setTransform(17.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmApQgKgKAAgWIAAg7IAfAAIAAA7QAAATAPAAQAJAAAGgGQAFgHAAgKIAAg3IAfAAIAABkIgeAAIAAgPQgEAIgIAFQgHADgKAAQgTAAgJgKg");
	this.shape_2.setTransform(6.6,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA6QgKgLAAgTIAAgnIgUAAIAAgXIAUAAIAAgXIAdgKIAAAhIAaAAIAAAXIgaAAIAAAmQAAAJAEAEQAEAEAIAAIAKgCIAAAYQgIACgKAAQgTAAgIgKg");
	this.shape_3.setTransform(-3.5,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAuQgKgGgFgMQgHgMAAgPQAAgPAHgMQAFgMALgHQAJgHANAAQAKAAAIAFQAJAEAFAIIAAgOIAdAAIAABkIgdAAIAAgPQgFAIgJAEQgIAFgKAAQgMAAgLgHgAgQgVQgHAIAAAOQAAAOAHAHQAGAIAKAAQAMAAAFgIQAGgHABgPQgBgNgGgIQgFgIgMAAQgKAAgGAIg");
	this.shape_4.setTransform(-13.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBFQgPgFgLgIIAKgWQAVAOAZAAQANABAIgFQAHgEAAgIQAAgHgHgEQgHgEgQgDQgSgEgLgGQgMgEgFgIQgEgIgBgLQABgNAGgLQAHgKANgGQANgFAQAAQAPAAAOAEQAPAFAHAHIgKAWQgSgOgWAAQgLAAgIAFQgHAFAAAIQAAAFACADQAEADAFACIASAGQAcAFAMAJQALAKABAQQAAAVgQALQgPAMgcAAQgQAAgOgEg");
	this.shape_5.setTransform(-26.5,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AklAAIJLAA");
	this.shape.setTransform(-0.1,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_1.setTransform(24,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghApQgJgKAAgUIAAg9IARAAIAAA9QAAANAFAHQAGAGALAAQANABAIgKQAIgIAAgPIAAg3IAQAAIAABjIgPAAIAAgRQgGAKgIAEQgIAFgLAAQgRAAgKgKg");
	this.shape_2.setTransform(13.3,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgHQgGgGgMAAQgNAAgIAIQgIAJAAAPIAAA4IgRAAIAAhHQABgPgCgNIAQAAIABASQAFgKAJgFQAJgFALAAQAkgBAAAoIAAA+g");
	this.shape_3.setTransform(1.7,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_4.setTransform(-9.6,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBHIg+iNIARAAIAzB4IA0h4IARAAIg+CNg");
	this.shape_5.setTransform(-22,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAxQgKgDgIgHIAJgMQAHAHAIACQAHADAKAAQAYAAACgPQABgHgGgDQgEgEgLgDIgQgGQgHgCgDgGQgEgFACgJQACgOAMgIQANgIAQAAQALAAAJADQAJAEAGAGIgJAMQgMgMgPAAQgMAAgGAEQgIAEgBAIQgBAHAFADQAGAEAKADQALADAGACQAGADAEAGQADAFgCAJQgCAOgMAHQgMAIgRAAQgMAAgJgDg");
	this.shape.setTransform(26,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAqQgHgJADgQIABgGIAPg9IAQAAIgPA8IgBAEQgEAYAWgBQAOAAAJgIQAJgIADgQIAPg3IAQAAIgZBjIgQAAIAEgQQgGAJgJAEQgJAFgLAAQgQAAgIgJg");
	this.shape_1.setTransform(15.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAzIAPg9IABgEQAEgXgXAAQgOAAgJAIQgKAJgDAPIgOA4IgRAAIAShHIAEgTIABgJIAPAAIgCAQQAHgJAIgFQALgEALAAQARgBAHAKQAIAJgDARIgBAEIgPA+g");
	this.shape_2.setTransform(3.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAuQgKgGgEgLQgEgLADgOQACgQAIgNQAJgMAMgHQAMgHAOAAQATAAAKALQAJALgDAVIgCAIIhJAAIgBAEQgDARAHAJQAGAJAQAAQASAAAQgMIADAMQgIAGgLAEQgLADgKAAQgOAAgKgGgAgLgfQgJAHgGAOIA7AAQACgOgGgHQgFgIgNAAQgMAAgKAIg");
	this.shape_3.setTransform(-7.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBHIgciNIARAAIAWB5IBRh5IARAAIhgCNg");
	this.shape_4.setTransform(-17.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAoIAIgVQAIAGAKADQAKADAJAAQAIAAAFgCQADgCAAgFQAAgEgCgCQgDgCgIgCIgPgEQgPgDgHgGQgHgHAAgLQAAgKAFgHQAGgIAKgEQAJgEANAAQAKAAALAEQAKADAIAGIgIAUQgIgFgIgDQgIgDgIAAQgGAAgFADQgDACAAAFQgBADADACQACACAHACIAQAEQAQADAGAGQAIAIgBAMQAAAOgLAIQgMAJgUAAQgcAAgRgNg");
	this.shape.setTransform(25,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmApQgKgKAAgWIAAg7IAfAAIAAA7QAAATAPAAQAJAAAGgGQAFgHAAgKIAAg3IAfAAIAABkIgeAAIAAgPQgEAIgIAFQgHADgKAAQgTAAgJgKg");
	this.shape_1.setTransform(13.9,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA0IAAg7QAAgKgEgGQgEgEgIAAQgJAAgGAGQgGAHAAAKIAAA4IgfAAIAAhHQAAgQgBgNIAcAAIACAPQAGgIAIgFQAIgFALAAQAkAAAAAqIAAA9g");
	this.shape_2.setTransform(1.7,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAnQgPgOAAgZQAAgOAGgMQAHgMALgHQAMgHANAAQAVAAANAOQAMAOAAAYIAAADIhCAAQABAOAHAHQAHAGALAAQAIAAAIgCQAIgDAGgFIAIAUQgHAGgLAEQgKADgLAAQgZAAgOgOgAgKgaQgFAFgCAKIAnAAQgCgUgRAAQgIAAgFAFg");
	this.shape_3.setTransform(-9.8,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBHIhAiNIAgAAIArBmIAthmIAgAAIhACNg");
	this.shape_4.setTransform(-22.7,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AjhAAIHDAA");
	this.shape.setTransform(0.5,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_1.setTransform(18.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgPgCgNIAQAAIABASQAEgKAHgFQAJgFALAAIAJAAIgBAQQgEgCgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_2.setTransform(10.2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_3.setTransform(-0.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0BHIAAhpIguBpIgLAAIguhoIAABoIgPAAIAAiNIANAAIA1B6IA2h6IANAAIAACNg");
	this.shape_4.setTransform(-14.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAxQgJgDgIgHIAJgMQAHAHAHACQAJADAJAAQAXAAADgPQABgHgGgDQgEgEgLgDIgQgGQgHgCgDgGQgDgFABgJQACgOAMgIQAMgIARAAQALAAAKADQAIAEAFAGIgIAMQgMgMgQAAQgLAAgHAEQgGAEgCAIQgBAHAGADQAFAEALADQAKADAGACQAGADADAGQAEAFgBAJQgDAOgMAHQgMAIgRAAQgMAAgKgDg");
	this.shape.setTransform(20.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAzIAShHIAFgVIABgHIAOAAIgCAQQAGgIAJgGQAKgEAKAAIAJAAIgDAQQgFgCgGgBQgOAAgKAKQgIAJgDANIgOA4g");
	this.shape_1.setTransform(12.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAuQgJgGgDgLQgDgLACgOQADgQAIgNQAIgMAMgHQAMgHANAAQAMAAAHAFQAJAFACAKIAFgSIAPAAIgYBkIgQAAIAEgQQgGAIgKAFQgIAEgLAAQgNAAgJgGgAgWgbQgKAMgDATQgDAQAGAKQAHAJAOAAQAOAAALgMQAKgLADgTQADgRgGgJQgGgJgPAAQgOAAgLALg");
	this.shape_2.setTransform(2.2,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBHIAZhoIhHBoIgLAAIgUhoIgbBoIgPAAIAjiNIAOAAIAXB6IBTh6IANAAIgiCNg");
	this.shape_3.setTransform(-11.9,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnSquare1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAoIAJgVQAHAGALADQAJADAJAAQAIAAAEgCQAFgCAAgFQAAgEgDgCQgEgCgHgCIgPgEQgPgDgHgGQgHgHAAgLQAAgKAGgHQAFgIAKgEQAJgEAMAAQALAAALAEQAKADAIAGIgIAUQgIgFgIgDQgIgDgIAAQgGAAgEADQgEACgBAFQAAADADACQACACAHACIAQAEQAQADAGAGQAIAIAAAMQAAAOgMAIQgMAJgUAAQgcAAgRgNg");
	this.shape.setTransform(18.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA0IAAhHQAAgQgCgNIAdAAIACARQAEgKAHgEQAIgGAKAAQAGAAAFACIAAAcQgIgDgHgBQgMABgHAGQgFAHAAALIAAA0g");
	this.shape_1.setTransform(10.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAuQgKgGgGgMQgFgMAAgPQAAgPAFgMQAGgMAKgHQALgHANAAQAJAAAJAFQAIAEAEAIIAAgOIAeAAIAABkIgeAAIAAgPQgEAIgIAEQgJAFgJAAQgNAAgLgHgAgQgVQgGAIAAAOQAAAOAGAHQAGAIALAAQAKAAAGgIQAHgHgBgPQABgNgHgIQgGgIgKAAQgLAAgGAIg");
	this.shape_2.setTransform(-0.9,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBHIAAhNIghBNIgTAAIghhMIAABMIgcAAIAAiNIAaAAIAtBoIAthoIAZAAIAACNg");
	this.shape_3.setTransform(-15.4,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_1
	this.instance = new lib.btnSquareBG("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0,-1.7);

	this.instance_1 = new lib.btnSquareBG2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.instance_2 = new lib.btnSquareBG3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.6,-24.6,119.3,49.3);


(lib.btnItemSquarecopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,selected:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare7();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare7(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA0IAAg7QAAgKgEgGQgEgEgIAAQgJAAgGAGQgGAHAAAKIAAA4IgfAAIAAhHQAAgQgBgNIAcAAIACAPQAGgIAIgFQAIgFALAAQAkAAAAAqIAAA9g");
	this.shape.setTransform(26.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA0IAAhHQAAgQgCgNIAdAAIACARQAEgKAHgEQAIgGAKAAQAGAAAFACIAAAcQgIgDgHgBQgMABgHAGQgFAHAAALIAAA0g");
	this.shape_1.setTransform(17.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmApQgKgKAAgWIAAg7IAfAAIAAA7QAAATAPAAQAJAAAGgGQAFgHAAgKIAAg3IAfAAIAABkIgeAAIAAgPQgEAIgIAFQgHADgKAAQgTAAgJgKg");
	this.shape_2.setTransform(6.6,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHA6QgKgLAAgTIAAgnIgUAAIAAgXIAUAAIAAgXIAdgKIAAAhIAaAAIAAAXIgaAAIAAAmQAAAJAEAEQAEAEAIAAIAKgCIAAAYQgIACgKAAQgTAAgIgKg");
	this.shape_3.setTransform(-3.5,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAuQgKgGgFgMQgHgMAAgPQAAgPAHgMQAFgMALgHQAJgHANAAQAKAAAIAFQAJAEAFAIIAAgOIAdAAIAABkIgdAAIAAgPQgFAIgJAEQgIAFgKAAQgMAAgLgHgAgQgVQgHAIAAAOQAAAOAHAHQAGAIAKAAQAMAAAFgIQAGgHABgPQgBgNgGgIQgFgIgMAAQgKAAgGAIg");
	this.shape_4.setTransform(-13.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBFQgPgFgLgIIAKgWQAVAOAZAAQANABAIgFQAHgEAAgIQAAgHgHgEQgHgEgQgDQgSgEgLgGQgMgEgFgIQgEgIgBgLQABgNAGgLQAHgKANgGQANgFAQAAQAPAAAOAEQAPAFAHAHIgKAWQgSgOgWAAQgLAAgIAFQgHAFAAAIQAAAFACADQAEADAFACIASAGQAcAFAMAJQALAKABAQQAAAVgQALQgPAMgcAAQgQAAgOgEg");
	this.shape_5.setTransform(-26.5,-0.9);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquarecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare4();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare4(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAoIAIgVQAIAGAKADQAKADAJAAQAIAAAFgCQADgCAAgFQAAgEgCgCQgDgCgIgCIgPgEQgPgDgHgGQgHgHAAgLQAAgKAFgHQAGgIAKgEQAJgEANAAQAKAAALAEQAKADAIAGIgIAUQgIgFgIgDQgIgDgIAAQgGAAgFADQgDACAAAFQgBADADACQACACAHACIAQAEQAQADAGAGQAIAIgBAMQAAAOgLAIQgMAJgUAAQgcAAgRgNg");
	this.shape.setTransform(25,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmApQgKgKAAgWIAAg7IAfAAIAAA7QAAATAPAAQAJAAAGgGQAFgHAAgKIAAg3IAfAAIAABkIgeAAIAAgPQgEAIgIAFQgHADgKAAQgTAAgJgKg");
	this.shape_1.setTransform(13.9,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAUA0IAAg7QAAgKgEgGQgEgEgIAAQgJAAgGAGQgGAHAAAKIAAA4IgfAAIAAhHQAAgQgBgNIAcAAIACAPQAGgIAIgFQAIgFALAAQAkAAAAAqIAAA9g");
	this.shape_2.setTransform(1.7,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAnQgPgOAAgZQAAgOAGgMQAHgMALgHQAMgHANAAQAVAAANAOQAMAOAAAYIAAADIhCAAQABAOAHAHQAHAGALAAQAIAAAIgCQAIgDAGgFIAIAUQgHAGgLAEQgKADgLAAQgZAAgOgOgAgKgaQgFAFgCAKIAnAAQgCgUgRAAQgIAAgFAFg");
	this.shape_3.setTransform(-9.8,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgLBHIhAiNIAgAAIArBmIAthmIAgAAIhACNg");
	this.shape_4.setTransform(-22.7,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.btnSquare15();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare15(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnItemSquare9, new cjs.Rectangle(-55.9,-23.2,111.9,45), null);


(lib.btnItemSquare8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.btnSquare14();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare14(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnItemSquare8, new cjs.Rectangle(-55.9,-23.2,111.9,45), null);


(lib.btnItemSquare7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.instance = new lib.btnSquare13();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare13(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnItemSquare7, new cjs.Rectangle(-55.9,-23.2,111.9,45), null);


(lib.btnItemSquare6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare12();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare12(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhdLzQgwgDgqgWQhAgggkhDQgjhAAAhRQAAiEBch0IAQgpIgrAOQgtAjgcAMQh/A6h5geQh5gegwhmQg2hvBCh0QA7hoB1g1QB0g2BxAXQBvAWA5BVIATgCQA0iZCEirQBMhhB1h2QAmgrBAgNQBDgOAhAkQAiAlAFAmQAFAigUAmIiHEBIEHiBQAmgSAqAKQAqAKAbAiQAbAjAAAoQAAAagLAZQgLAYgTARQivCdhgBFQigByiXAvQgBAFgBANQBMA3AWBhQAVBYgdBeQgnBjguA4Qg5BGhZAeQgnANgoAAIgQgBgAhBA5QgBAzgVBBQgMAlgcBLQgxAzgVBGQgWBJASBAQARBBAzAZQAwAYA3gSQA2gSAtg1QApgxASg+QAbhXgdhHQghhRhbAEQAbgwAJgiQAKgngDgzQCWgZCxh7QBfhCC7imQAJgJgHgKQgHgLgKAFQlMCejKBqIgcAKIAMgfQBujFCplFQAEgIgIgJQgJgJgKALQigCmhFBZQh3CbgrCNIgKAtQg1gEgqAKQghAHgrAWQAHhohpgcQhcgYhdArQhKAhgrBAQgzBJAhBEQAdA8BQAQQBRAPBUgnQAkgOAmgiQAngLBLgZQA+gSAxAAIAHAAgAhbIiQgZgNgJgkQgIgjAMgpQAKgiAYgdQAaggAggLQA/gVATA/QARA5gdA6QgTAmgiAZQgaATgYAAQgPAAgOgIgAnxBpQgtgHgQggQgQgkAfgoQAagjAngRQAvgVAsAHQAqAIAVAfQAWAfgjArQgdAkglARQglARgjAAQgLAAgLgCg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.btnSquareBG6("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.2,79.6,75);


(lib.btnItemSquare5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare11();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare11(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai1MLQgWAAgQgQQgQgQAAgWIAAhSIm9AAQgXAAgPgPQgQgQgBgXIAAzGQABgXAQgQQAPgQAXAAIEHAAIAAgkQAAgWAQgQQARgQAVAAIHGAAQAWAAAQAQQAQAQAAAWIAAAkIEHAAQAXAAAPAQQARAQgBAXIAAEmIEBEAQAQARAAAVIAAMCQAAAWgPAQQgRAQgWAAgAh8KfILuAAIAAqoIjaAAQgPAAgKgKQgLgKAAgQIAAjgInwAAgApxIXIGtAAIAAtIQAAgQAKgKQAKgKAQAAIICAAIAAjuIj1AAIAAA8QAAAPgLALQgLAKgOAAImiAAQgOAAgLgKQgLgLAAgPIAAg8Ij0AAgAI3hRQhAhCg7g4IAAB6IB7AAIAAAAgAkzosIFYAAIAAhyIlYAAgAAuIXQgkAAAAgkQAAglAkAAIGXAAQAkAAAAAlQAAAkgkAAgAAuFiQgkAAAAgkQAAglAkAAIGXAAQAkAAAAAlQAAAkgkAAgAAuCtQglAAAAglQAAgkAlAAIGXAAQAkAAAAAkQAAAlgkAAgAAugJQgkAAAAgkQAAgkAkAAIC1AAQAkAAAAAkQAAAkgkAAg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.btnSquareBG6("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.3,79.6,75);


(lib.btnItemSquare4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare10();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare10(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ArWMMQgWAAgQgQQgQgQAAgXIAAwRQAAgWAQgQQAQgQAWAAIIYAAIAAliQAAgXAQgQQAQgQAXAAIJNAAQAVAAARARIEREPQAQAQAAAXIAAMBQAAAWgQAQQgQAQgXAAIoXAAIAAFiQAAAXgQAQQgQAQgXAAgAqeKfILwAAIAAqsIjrAAQgPAAgKgKQgLgLAAgPIAAjVInhAAgACbEHIIFAAIAAqoIjaAAQgPAAgLgKQgKgKAAgPIAAjaInzAAIAAFyICtCuIGYAAQAOAAALALQALAKAAAPQAAAPgLALQgLALgOAAIlaAAIABBrIFZAAQAOAAALALQALALAAAPQAAAPgLALQgLAKgOAAIlZAAgAAehVIiTiUIAACUICTAAgAJlnoIh6h7IAAB7IB6AAgAnyIXQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnyFhQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnyCsQgkAAAAgkQAAgkAkAAIGYAAQAkAAAAAkQAAAkgkAAgAnygIQgkAAAAgkQAAglAkAAIC2AAQAjAAAAAlQAAAkgjAAgABbjqQgkAAAAglQAAgkAkAAIGZAAQAkAAAAAkQAAAlgkAAgABbmhQgkAAAAgjQAAgkAkAAIC1AAQAkAAAAAkQAAAjgkAAg");
	this.shape.setTransform(0,0,0.25,0.25);

	this.instance_1 = new lib.btnSquareBG6("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.9,-39.2,79.6,75);


(lib.btnItemSquare3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare9();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare9(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AkuAAIJdAA");
	this.shape.setTransform(-0.2,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgHQgFgGgMAAQgNAAgJAIQgIAJAAAPIAAA4IgQAAIAAhHQAAgPgCgNIAPAAIACASQAFgKAJgFQAJgFALAAQAkgBAAAoIAAA+g");
	this.shape_1.setTransform(25.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgPgCgNIAQAAIABASQAEgKAHgFQAJgFALAAIAJAAIgBAQQgEgCgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_2.setTransform(16.3,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghApQgIgKgBgUIAAg9IAQAAIAAA9QAAANAHAHQAFAGAMAAQAMABAIgKQAIgIAAgPIAAg3IARAAIAABjIgQAAIAAgRQgFAKgJAEQgJAFgKAAQgRAAgKgKg");
	this.shape_3.setTransform(6.3,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_4.setTransform(-3.1,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_5.setTransform(-12.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0A3IAHgNQAKAJALAEQALAEANAAQARAAAKgHQAJgHAAgMQAAgHgEgEQgFgFgHgDIgUgFQgPgEgLgEQgKgDgHgIQgGgIgBgNQAAgMAHgJQAGgJAMgGQAMgFAOAAQAPAAANAFQANAEAJAJIgHANQgKgJgKgEQgLgEgMAAQgPAAgKAHQgJAHAAANQAAALAIAFQAJAFAQAEQASAFAKADQALADAHAIQAHAHAAANQAAAMgHAJQgGAJgMAFQgMAFgQAAQggAAgUgSg");
	this.shape_6.setTransform(-24.7,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare6();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare6(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AklAAIJLAA");
	this.shape.setTransform(-0.1,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_1.setTransform(24,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghApQgJgKAAgUIAAg9IARAAIAAA9QAAANAFAHQAGAGALAAQANABAIgKQAIgIAAgPIAAg3IAQAAIAABjIgPAAIAAgRQgGAKgIAEQgIAFgLAAQgRAAgKgKg");
	this.shape_2.setTransform(13.3,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAcAzIAAg9QAAgOgGgHQgGgGgMAAQgNAAgIAIQgIAJAAAPIAAA4IgRAAIAAhHQABgPgCgNIAQAAIABASQAFgKAJgFQAJgFALAAQAkgBAAAoIAAA+g");
	this.shape_3.setTransform(1.7,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_4.setTransform(-9.6,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgGBHIg+iNIARAAIAzB4IA0h4IARAAIg+CNg");
	this.shape_5.setTransform(-22,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare3();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare3(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(1,1,1).p("AjhAAIHDAA");
	this.shape.setTransform(0.5,8.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_1.setTransform(18.1,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAzIAAhHQAAgPgCgNIAQAAIABASQAEgKAHgFQAJgFALAAIAJAAIgBAQQgEgCgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_2.setTransform(10.2,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_3.setTransform(-0.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA0BHIAAhpIguBpIgLAAIguhoIAABoIgPAAIAAiNIANAAIA1B6IA2h6IANAAIAACNg");
	this.shape_4.setTransform(-14.6,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare8();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare8(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATAzIAPg9IABgEQAEgXgXAAQgOAAgJAIQgKAJgDAPIgOA4IgRAAIAShHIAEgTIABgJIAPAAIgCAQQAHgJAIgFQALgEALAAQARgBAHAKQAIAJgDARIgBAEIgPA+g");
	this.shape.setTransform(26.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgnAzIAShHIADgVIABgHIAQAAIgCAQQAEgIAKgGQAKgEALAAIAJAAIgFAQQgEgCgGgBQgPAAgJAKQgIAJgDANIgOA4g");
	this.shape_1.setTransform(18.5,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtAqQgHgJADgQIABgGIAPg9IAQAAIgPA8IgBAEQgEAYAWgBQAOAAAJgIQAJgIADgQIAPg3IAQAAIgZBjIgQAAIAEgQQgGAJgJAEQgJAFgLAAQgQAAgIgJg");
	this.shape_2.setTransform(8.7,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYA8QgGgIACgNIABgEIAOg5IgUAAIADgMIAUAAIAGgaIARgGIgIAgIAdAAIgDAMIgdAAIgMA2IgBAEQgCAJAEAEQADAEAHAAIALgCIgDAOQgGACgHAAQgOAAgGgHg");
	this.shape_3.setTransform(0.1,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnAuQgJgGgDgLQgDgLACgOQADgQAIgNQAIgMAMgHQAMgHANAAQAMAAAHAFQAJAFACAKIAFgSIAPAAIgYBkIgQAAIAEgQQgGAIgKAFQgIAEgLAAQgNAAgJgGgAgWgbQgKAMgDATQgDAQAGAKQAHAJAOAAQAOAAALgMQAKgLADgTQADgRgGgJQgGgJgPAAQgOAAgLALg");
	this.shape_4.setTransform(-10.2,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgqBEQgNgEgKgJIAKgNQAKAJAKAEQALAEANAAQARAAAKgGQAKgHADgMQABgHgEgFQgDgEgHgDIgRgGIgXgJQgIgDgGgHQgEgIACgNQABgNAJgJQAHgJANgFQAMgFAQAAQAPAAAMAFQAMAFAJAIIgKANQgRgRgYAAQgQAAgKAHQgKAHgCAMQgCAIAEAFQAEAFAGADIASAHQAOAEAJADQAHADAGAIQAFAHgCAMQgDASgQALQgQALgYAAQgRAAgMgFg");
	this.shape_5.setTransform(-22.1,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare5();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare5(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAxQgKgDgIgHIAJgMQAHAHAIACQAHADAKAAQAYAAACgPQABgHgGgDQgEgEgLgDIgQgGQgHgCgDgGQgEgFACgJQACgOAMgIQANgIAQAAQALAAAJADQAJAEAGAGIgJAMQgMgMgPAAQgMAAgGAEQgIAEgBAIQgBAHAFADQAGAEAKADQALADAGACQAGADAEAGQADAFgCAJQgCAOgMAHQgMAIgRAAQgMAAgJgDg");
	this.shape.setTransform(26,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgtAqQgHgJADgQIABgGIAPg9IAQAAIgPA8IgBAEQgEAYAWgBQAOAAAJgIQAJgIADgQIAPg3IAQAAIgZBjIgQAAIAEgQQgGAJgJAEQgJAFgLAAQgQAAgIgJg");
	this.shape_1.setTransform(15.7,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATAzIAPg9IABgEQAEgXgXAAQgOAAgJAIQgKAJgDAPIgOA4IgRAAIAShHIAEgTIABgJIAPAAIgCAQQAHgJAIgFQALgEALAAQARgBAHAKQAIAJgDARIgBAEIgPA+g");
	this.shape_2.setTransform(3.5,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeAuQgKgGgEgLQgEgLADgOQACgQAIgNQAJgMAMgHQAMgHAOAAQATAAAKALQAJALgDAVIgCAIIhJAAIgBAEQgDARAHAJQAGAJAQAAQASAAAQgMIADAMQgIAGgLAEQgLADgKAAQgOAAgKgGgAgLgfQgJAHgGAOIA7AAQACgOgGgHQgFgIgNAAQgMAAgKAIg");
	this.shape_3.setTransform(-7.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoBHIgciNIARAAIAWB5IBRh5IARAAIhgCNg");
	this.shape_4.setTransform(-17.6,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare2();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare2(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfAxQgJgDgIgHIAJgMQAHAHAHACQAJADAJAAQAXAAADgPQABgHgGgDQgEgEgLgDIgQgGQgHgCgDgGQgDgFABgJQACgOAMgIQAMgIARAAQALAAAKADQAIAEAFAGIgIAMQgMgMgQAAQgLAAgHAEQgGAEgCAIQgBAHAGADQAFAEALADQAKADAGACQAGADADAGQAEAFgBAJQgDAOgMAHQgMAIgRAAQgMAAgKgDg");
	this.shape.setTransform(20.1,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAzIAShHIAFgVIABgHIAOAAIgCAQQAGgIAJgGQAKgEAKAAIAJAAIgDAQQgFgCgGgBQgOAAgKAKQgIAJgDANIgOA4g");
	this.shape_1.setTransform(12.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnAuQgJgGgDgLQgDgLACgOQADgQAIgNQAIgMAMgHQAMgHANAAQAMAAAHAFQAJAFACAKIAFgSIAPAAIgYBkIgQAAIAEgQQgGAIgKAFQgIAEgLAAQgNAAgJgGgAgWgbQgKAMgDATQgDAQAGAKQAHAJAOAAQAOAAALgMQAKgLADgTQADgRgGgJQgGgJgPAAQgOAAgLALg");
	this.shape_2.setTransform(2.2,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBHIAZhoIhHBoIgLAAIgUhoIgbBoIgPAAIAjiNIAOAAIAXB6IBTh6IANAAIgiCNg");
	this.shape_3.setTransform(-11.9,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


(lib.btnItemSquare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btnSquare1();
	this.instance.parent = this;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnSquare1(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAoIAJgVQAHAGALADQAJADAJAAQAIAAAEgCQAFgCAAgFQAAgEgDgCQgEgCgHgCIgPgEQgPgDgHgGQgHgHAAgLQAAgKAGgHQAFgIAKgEQAJgEAMAAQALAAALAEQAKADAIAGIgIAUQgIgFgIgDQgIgDgIAAQgGAAgEADQgEACgBAFQAAADADACQACACAHACIAQAEQAQADAGAGQAIAIAAAMQAAAOgMAIQgMAJgUAAQgcAAgRgNg");
	this.shape.setTransform(18.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghA0IAAhHQAAgQgCgNIAdAAIACARQAEgKAHgEQAIgGAKAAQAGAAAFACIAAAcQgIgDgHgBQgMABgHAGQgFAHAAALIAAA0g");
	this.shape_1.setTransform(10.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAuQgKgGgGgMQgFgMAAgPQAAgPAFgMQAGgMAKgHQALgHANAAQAJAAAJAFQAIAEAEAIIAAgOIAeAAIAABkIgeAAIAAgPQgEAIgIAEQgJAFgJAAQgNAAgLgHgAgQgVQgGAIAAAOQAAAOAGAHQAGAIALAAQAKAAAGgIQAHgHgBgPQABgNgHgIQgGgIgKAAQgLAAgGAIg");
	this.shape_2.setTransform(-0.9,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArBHIAAhNIghBNIgTAAIghhMIAABMIgcAAIAAiNIAaAAIAtBoIAthoIAZAAIAACNg");
	this.shape_3.setTransform(-15.4,-1);

	this.instance_1 = new lib.btnSquareBG3("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.8,-28.5,125.6,55.7);


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


(lib.actMc3_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cAns = 3;
		maxItem = 3;
		var _root = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		for (i=1; i<=maxItem; i++){
			this["item"+i].addEventListener("click", selectAns.bind(this, i));
		}
		function submitAns(e){
			if (userAns==cAns){
				//correct
				cScore++;
			}
			_root.parent.play();
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// input
	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(410.6,455.9,2.5,1.65,0,0,0,50.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txtAns1).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(411.6,352.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(410,518.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// items
	this.item3 = new lib.btnItemSquare9();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(586.8,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare8();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(421.3,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare7();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(255.7,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3_2_3, new cjs.Rectangle(80.1,219.8,663.2,325.4), null);


(lib.actMc3_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cAns = 3;
		maxItem = 3;
		var _root = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		for (i=1; i<=maxItem; i++){
			this["item"+i].addEventListener("click", selectAns.bind(this, i));
		}
		function submitAns(e){
			if (userAns==cAns){
				//correct
				cScore++;
			}
			_root.parent.play();
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// input
	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(410.6,455.9,2.5,1.65,0,0,0,50.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txtAns1).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(411.6,352.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(410,518.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// items
	this.item3 = new lib.btnItemSquare9();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(586.8,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare8();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(421.3,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare7();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(255.7,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3_2_2, new cjs.Rectangle(80.1,219.8,663.2,325.4), null);


(lib.actMc3_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cAns = 3;
		maxItem = 3;
		var _root = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		for (i=1; i<=maxItem; i++){
			this["item"+i].addEventListener("click", selectAns.bind(this, i));
		}
		function submitAns(e){
			if (userAns==cAns){
				//correct
				cScore++;
			}
			_root.parent.play();
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// input
	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(410.6,455.9,2.5,1.65,0,0,0,50.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txtAns1).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(411.6,352.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(410,518.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// items
	this.item3 = new lib.btnItemSquare9();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(586.8,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare8();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(421.3,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare7();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(255.7,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3_2_1, new cjs.Rectangle(80.1,219.8,663.2,325.4), null);


(lib.actMc3_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cAns = 3;
		maxItem = 3;
		var _root = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		for (i=1; i<=maxItem; i++){
			this["item"+i].addEventListener("click", selectAns.bind(this, i));
		}
		function submitAns(e){
			if (userAns==cAns){
				//correct
				cScore++;
			}
			_root.parent.play();
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// input
	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(410.6,455.9,2.5,1.65,0,0,0,50.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txtAns1).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(411.6,352.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(410,518.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// items
	this.item3 = new lib.btnItemSquare9();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(586.8,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare8();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(421.3,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare7();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(255.7,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3_1_3, new cjs.Rectangle(80.1,219.8,663.2,325.4), null);


(lib.actMc3_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cAns = 3;
		maxItem = 3;
		var _root = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		userAns = 0;
		selectAns = function (itemNum) {
			for (i=1; i<=maxItem; i++){
				this["item"+i].gotoAndStop("on");
			}
			this["item"+itemNum].gotoAndStop("selected");
			this.btnCont.mouseEnabled = true;
			this.btnCont.alpha = 1;
		}
		for (i=1; i<=maxItem; i++){
			this["item"+i].addEventListener("click", selectAns.bind(this, i));
		}
		function submitAns(e){
			if (userAns==cAns){
				//correct
				cScore++;
			}
			_root.parent.play();
		}
		this.btnCont.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// input
	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(410.6,455.9,2.5,1.65,0,0,0,50.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txtAns1).wait(1));

	// article
	this.instance = new lib.q3();
	this.instance.parent = this;
	this.instance.setTransform(411.6,352.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// btn
	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(410,518.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnCont).wait(1));

	// items
	this.item3 = new lib.btnItemSquare9();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(586.8,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare8();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(421.3,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare7();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(255.7,247.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3_1_2, new cjs.Rectangle(80.1,219.8,663.2,325.4), null);


(lib.actMc3_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
		this.cAnsBm = ["Neil Alden Armstrong ialah angkasawan yang pertama. Beliau juga merupakan manusia pertama yang menjejakkan kaki ke bulan. Neil ialah seorang jurutera angkasa, kapten angkatan laut, juruterbang penguji, dan profesor universiti.",
		"Amerika Syarikat"
		];
		this.cAnsEn = ["Neil Alden Armstrong was an astronaut and the first person to walk on the Moon. He was also an aerospace engineer, naval aviator, test pilot, and university professor.",
		"American"
		];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var myContainer = document.getElementById("dom_overlay_container");
		var txtArea = document.createElement("textarea");
		var tBm = "Neil Alden Armstrong ialah angkasawan Amerika Syarikat yang pertama. Beliau juga merupakan manusia pertama yang menjejakkan kaki ke bulan. Neil ialah seorang jurutera angkasa, kapten angkatan laut, juruterbang penguji, dan profesor universiti.";
		var tEn = "Neil Alden Armstrong was an American astronaut and the first person to walk on the Moon. He was also an aerospace engineer, naval aviator, test pilot, and university professor.";
		var t;
		try {
			if (myLanguage==2){
				t = document.createTextNode(tEn);
			} else {
				t = document.createTextNode(tBm);
			}
		} catch (e) {
			//nothing
			t = document.createTextNode(tBm);
		}
		txtArea.id = "txt_area";
		txtArea.appendChild(t);
		myContainer.appendChild(txtArea);
		txtArea.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		txtArea.style.resize = "none";
		var myScale = myContainer.offsetWidth/800;
		console.log(myScale);
		var myX = 80;
		var myY = 290;
		var myWidth = 660;
		var myHeight = 130;
		var fontSize = 18;
		txtArea.style.fontSize = fontSize * myScale + "px";
		txtArea.style.width = myWidth * myScale + "px";
		txtArea.style.height = myHeight * myScale + "px";
		txtArea.style.position = "relative";
		txtArea.style.left = myX * myScale + "px";
		txtArea.style.top = myY * myScale + "px";
		txtArea.style.pointerEvents = "auto";
		
		txtAns.style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
		txtAns.style.fontSize = fontSize * myScale + "px";
		
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				txtArea.style.fontSize = fontSize * myScale + "px";
				txtArea.style.width = myWidth * myScale + "px";
				txtArea.style.height = myHeight * myScale + "px";
				txtArea.style.left = myX * myScale + "px";
				txtArea.style.top = myY * myScale + "px";
				txtAns.style.fontSize = fontSize * myScale + "px";
			}, 1000);
		});
		function onSetEn(e){
			//reset
			txtArea.value = tEn;
			txtAns.value = "";
		}
		stage.addEventListener("setEn", onSetEn);
		function onSetBm(e){
			txtArea.value = tBm;
			txtAns.value = "";
		}
		stage.addEventListener("setBm", onSetBm);
		
		txtAns.onkeyup = function (e){
			_this.updateAll();
		};
		this.updateAll = function (){
			if (txtAns.value!=""){
				_this.btnSubmit.mouseEnabled = true;
				_this.btnSubmit.alpha = 1;
			} else {
				_this.btnSubmit.mouseEnabled = false;
				_this.btnSubmit.alpha = .5;
			}
		};
		function checkAns(e){
			var ansLang = "";
			try {
				if (myLanguage==2){
					ansLang = "En";
				} else {
					ansLang = "Bm";
				}
			} catch (e) {
				ansLang = "Bm";
			}
			if ((txtArea.value.replace(/\s/g,'')==_this["cAns"+ansLang][0].replace(/\s/g,'')) &&
				(txtAns.value.replace(/\s/g,'')==_this["cAns"+ansLang][1].replace(/\s/g,''))
				){
				_this.parent.storeCorrect();
			} else {
				_this.parent.storeWrong();
			}
			myContainer.removeChild(txtArea);
		}
		this.btnSubmit.addEventListener("click", checkAns);
		var selectedText="";
		function onCopy(e){
			document.execCommand("copy");
			if (window.getSelection){ // all modern browsers and IE9+
		        selectedText = window.getSelection().toString();
		        console.log("selected text " + selectedText);
		    }
		}
		this.btnCopy.addEventListener("click", onCopy);
		function onCut(e){
			document.execCommand("cut");
		}
		this.btnCut.addEventListener("click", onCut);
		function onPaste(e){
			if (document.activeElement==txtAns){
				txtAns.value = selectedText;
			}
		}
		this.btnPaste.addEventListener("click", onPaste);
		function onCutCopyEvt(e){
			if (window.getSelection){ // all modern browsers and IE9+
		        selectedText = window.getSelection().toString();
		        console.log("selected text " + selectedText);
		    }
		}
		txtArea.addEventListener("cut", onCutCopyEvt);
		txtArea.addEventListener("copy", onCutCopyEvt);
		function onPasteEvt(e){
			_this.updateAll();
		}
		txtArea.addEventListener("paste", onPasteEvt);
		function onReset(e){
			selectedText="";
			try {
				if (myLanguage==2){
					txtArea.value = tEn;
				} else {
					txtArea.value = tBm;
				}
			} catch (e) {
				txtArea.value = tBm;
			}
			txtAns.value = "";
			_this.btnSubmit.mouseEnabled = true;
			_this.btnSubmit.alpha = 1;
		}
		this.btnReset.addEventListener("click", onReset);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// input
	this.txtAns = new lib.an_TextInput({'id': 'txtAns', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns.setTransform(400,455.9,3.421,1.65,0,0,0,50.2,11.2);

	this.timeline.addTween(cjs.Tween.get(this.txtAns).wait(10));

	// btn
	this.btnReset = new lib.mcBtnReset();
	this.btnReset.name = "btnReset";
	this.btnReset.parent = this;
	this.btnReset.setTransform(309,518.6,1,1,0,0,0,0.2,0.6);

	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(487,518.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnSubmit},{t:this.btnReset}]}).wait(10));

	// items
	this.btnCopy = new lib.btnSquare15();
	this.btnCopy.name = "btnCopy";
	this.btnCopy.parent = this;
	this.btnCopy.setTransform(421.3,248.6,1.5,1.5);
	new cjs.ButtonHelper(this.btnCopy, 0, 1, 2, false, new lib.btnSquare15(), 3);

	this.btnCut = new lib.btnSquare14();
	this.btnCut.name = "btnCut";
	this.btnCut.parent = this;
	this.btnCut.setTransform(255.7,248.6,1.5,1.5);
	new cjs.ButtonHelper(this.btnCut, 0, 1, 2, false, new lib.btnSquare14(), 3);

	this.btnPaste = new lib.btnSquare13();
	this.btnPaste.name = "btnPaste";
	this.btnPaste.parent = this;
	this.btnPaste.setTransform(586.8,248.6,1.5,1.5);
	new cjs.ButtonHelper(this.btnPaste, 0, 1, 2, false, new lib.btnSquare13(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnPaste},{t:this.btnCut},{t:this.btnCopy}]}).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,213.7,660,331.5);


(lib.actMc2_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare6();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(559.2,302.6,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare5();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(412.5,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare4();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(265.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2_1_3, new cjs.Rectangle(217.7,254.5,389.5,203.7), null);


(lib.actMc2_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare6();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(559.2,302.6,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare5();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(412.5,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare4();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(265.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2_1_2, new cjs.Rectangle(217.7,254.5,389.5,203.7), null);


(lib.actMc2_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare6();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(559.2,302.6,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare5();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(412.5,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare4();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(265.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2_1_1, new cjs.Rectangle(217.7,254.5,389.5,203.7), null);


(lib.actMc1_3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare3copy2();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare2copy2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquarecopy2();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_3_3, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare3copy2();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare2copy2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquarecopy2();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_3_2, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare3copy2();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare2copy2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquarecopy2();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_3_1, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item2 = new lib.btnItemSquare2copy();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item3 = new lib.btnItemSquarecopy();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare3copy();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item3},{t:this.item2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_2_3, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item2 = new lib.btnItemSquare2copy();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item3 = new lib.btnItemSquarecopy();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare3copy();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item3},{t:this.item2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_2_2, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item2 = new lib.btnItemSquare2copy();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item3 = new lib.btnItemSquarecopy();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare3copy();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item3},{t:this.item2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_2_1, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 2;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_1_3, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 1;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_1_2, new cjs.Rectangle(120.3,265.6,587,192.5), null);


(lib.actMc1_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 3;
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
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.storeCorrect();
			} else {
				//wrong
				_this.parent.storeWrong();
			}
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(410,431.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item3 = new lib.btnItemSquare3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(617.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item2 = new lib.btnItemSquare2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(413.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.item1 = new lib.btnItemSquare();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(209.7,301.4,1.5,1.5,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1_1_1, new cjs.Rectangle(120.3,265.6,587,192.5), null);


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


// stage content:
(lib.y6d1q2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:154,q3:200,q4:247,q5:294,q6:341,q7:385,q8:432,q9:479,q10:523,q11:568,q12:613,q13:665,q20:705,q21:745,q22:785,q23:825,q24:866,finalFb:916});

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
		this.timeGiven = 120;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		var maxQ = 8;
		this.currentQ = 0;
		this.myData = {
			"qNum": 4,
			"userId": cUserId,
			"time": _this.timeTaken,
			"score": _this.cScore,
			"qItem": []
		};
		this.qItem1 = [{
				"qId": "y6d1q2_1",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_2",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_3",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		this.qItem2 = [{
				"qId": "y6d1q2_4",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_5",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_6",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		this.qItem3 = [{
				"qId": "y6d1q2_7",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_8",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_9",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		this.qItem4 = [{
				"qId": "y6d1q2_10",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_11",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_12",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		this.qItem5 = [{
				"qId": "y6d1q2_13",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			},
			{
				"qId": "y6d1q2_14",
				"qDomain": 1,
				"qParam": 1,
				"qSkill": 1,
				"qResult": 9
			}
		];
		if (typeof debugMode === "undefined") {
			debugMode = false;
		}
		debugMode = false;
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(_this.qItem1[0]);
			this.myData.qItem.push(_this.qItem1[1]);
			this.myData.qItem.push(_this.qItem1[2]);
			this.myData.qItem.push(_this.qItem2[0]);
			this.myData.qItem.push(_this.qItem2[1]);
			this.myData.qItem.push(_this.qItem2[2]);
			this.myData.qItem.push(_this.qItem3[0]);
			this.myData.qItem.push(_this.qItem3[1]);
			this.myData.qItem.push(_this.qItem3[2]);
			this.myData.qItem.push(_this.qItem4[0]);
			this.myData.qItem.push(_this.qItem4[1]);
			this.myData.qItem.push(_this.qItem4[2]);
			this.myData.qItem.push(_this.qItem5[0]);
			this.myData.qItem.push(_this.qItem5[1]);
		} else {
			this.myData.qItem.push(_this.qItem5[0]);
			//this.myData.qItem.push(_this.qItem5[1]);
			
			//pick a set and randomise
			var selectedSet = randRange(1, 3);
			var randSeq = shuffle([1, 2, 3]);
			console.log("selectedSet = "+selectedSet);
			this.myData.qItem.push(_this["qItem"+selectedSet][randSeq[0]-1]);
			this.myData.qItem.push(_this["qItem"+selectedSet][randSeq[1]-1]);
			this.myData.qItem.push(_this["qItem"+selectedSet][randSeq[2]-1]);
			
			randSeq = shuffle([1, 2, 3]);
			this.myData.qItem.push(_this.qItem4[randSeq[0]-1]);
			this.myData.qItem.push(_this.qItem4[randSeq[1]-1]);
			this.myData.qItem.push(_this.qItem4[randSeq[2]-1]);
			
			/*
			this.qList1 = shuffle(this.qList1);
			this.qList1 = this.qList1.splice(0, 2);
			this.qList2 = shuffle(this.qList2);
			this.qList2 = this.qList2.splice(0, 2);
			this.qList3 = shuffle(this.qList3);
			this.qList3 = this.qList3.splice(0, 1);
			this.qList4 = shuffle(this.qList4);
			this.qList4 = this.qList4.splice(0, 1);
			this.myData.qItem.push(qItem1[this.qList1[0]-1]);
			this.myData.qItem.push(qItem1[this.qList1[1]-1]);
			this.myData.qItem.push(qItem2[this.qList2[0]-1]);
			this.myData.qItem.push(qItem2[this.qList2[1]-1]);
			this.myData.qItem.push(qItem3[this.qList3[0]-1]);
			this.myData.qItem.push(qItem4[this.qList4[0]-1]);*/
		}
		/*
		console.log(this.qList1);
		console.log(this.qList2);
		console.log(this.qList3);
		console.log(this.qList4);*/
		/*
		var qLength1 = this.qList1.length;
		var qLength2 = this.qList2.length;
		var qLength3 = this.qList3.length;
		var qLength4 = this.qList4.length;*/
		
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
				console.log("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				_this.gotoAndPlay("q"+_this.myData.qItem[_this.currentQ-1].qId.substring(7));
				if (_this.currentQ<=maxQ){
					_this["prog"+_this.currentQ].gotoAndStop("on");
				}
			} else {
				//all questions done
				clearInterval(timeInterval);//stop time
				_this.myData.time = _this.timeGiven - _this.secRemaining;
				//console.log(_this.myData.time);
				//scale the score
				_this.myData.score = (Math.round(_this.cScore/_this.myData.qItem.length*40))/10 + 1;
				if (cUserId == ""){//not online
					_this.gotoAndPlay("finalFb");
				} else {
					/*
					$.post('/game/save', _this.myData, function(respondData){
						console.log(respondData);
					});*/
					_this.gotoAndPlay("finalFb");
				}
				console.log(_this.myData);
			}
		}
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			goNextQ();
		}
		this.addEventListener("click", doPlay);
		this.storeCorrect = function (){
			_this.myData.qItem[_this.currentQ-1].qResult = 1;
			_this.cScore++;
			goNextQ();
		};
		this.storeWrong = function (){
			_this.myData.qItem[_this.currentQ-1].qResult = 0;
			goNextQ();
		};
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_109 = function() {
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
	this.frame_288 = function() {
		this.stop();
	}
	this.frame_294 = function() {
		playSound("questionAlert");
	}
	this.frame_335 = function() {
		this.stop();
	}
	this.frame_341 = function() {
		playSound("questionAlert");
	}
	this.frame_379 = function() {
		this.stop();
	}
	this.frame_385 = function() {
		playSound("questionAlert");
	}
	this.frame_426 = function() {
		this.stop();
	}
	this.frame_432 = function() {
		playSound("questionAlert");
	}
	this.frame_473 = function() {
		this.stop();
	}
	this.frame_479 = function() {
		playSound("questionAlert");
	}
	this.frame_517 = function() {
		this.stop();
	}
	this.frame_523 = function() {
		playSound("questionAlert");
	}
	this.frame_562 = function() {
		this.stop();
	}
	this.frame_568 = function() {
		playSound("questionAlert");
	}
	this.frame_607 = function() {
		this.stop();
	}
	this.frame_613 = function() {
		playSound("questionAlert");
	}
	this.frame_652 = function() {
		this.stop();
	}
	this.frame_665 = function() {
		playSound("questionAlert");
	}
	this.frame_699 = function() {
		this.stop();
	}
	this.frame_705 = function() {
		playSound("questionAlert");
	}
	this.frame_739 = function() {
		this.stop();
	}
	this.frame_745 = function() {
		playSound("questionAlert");
	}
	this.frame_779 = function() {
		this.stop();
	}
	this.frame_785 = function() {
		playSound("questionAlert");
	}
	this.frame_819 = function() {
		this.stop();
	}
	this.frame_825 = function() {
		playSound("questionAlert");
	}
	this.frame_860 = function() {
		this.stop();
	}
	this.frame_866 = function() {
		playSound("questionAlert");
	}
	this.frame_899 = function() {
		this.stop();
	}
	this.frame_916 = function() {
		playSound("questionComplete");
	}
	this.frame_1087 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(10).call(this.frame_109).wait(39).call(this.frame_148).wait(6).call(this.frame_154).wait(40).call(this.frame_194).wait(6).call(this.frame_200).wait(41).call(this.frame_241).wait(6).call(this.frame_247).wait(41).call(this.frame_288).wait(6).call(this.frame_294).wait(41).call(this.frame_335).wait(6).call(this.frame_341).wait(38).call(this.frame_379).wait(6).call(this.frame_385).wait(41).call(this.frame_426).wait(6).call(this.frame_432).wait(41).call(this.frame_473).wait(6).call(this.frame_479).wait(38).call(this.frame_517).wait(6).call(this.frame_523).wait(39).call(this.frame_562).wait(6).call(this.frame_568).wait(39).call(this.frame_607).wait(6).call(this.frame_613).wait(39).call(this.frame_652).wait(13).call(this.frame_665).wait(34).call(this.frame_699).wait(6).call(this.frame_705).wait(34).call(this.frame_739).wait(6).call(this.frame_745).wait(34).call(this.frame_779).wait(6).call(this.frame_785).wait(34).call(this.frame_819).wait(6).call(this.frame_825).wait(35).call(this.frame_860).wait(6).call(this.frame_866).wait(33).call(this.frame_899).wait(17).call(this.frame_916).wait(171).call(this.frame_1087).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(984));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(916).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(984));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(1043));

	// actMc
	this.instance_2 = new lib.actMc1_1_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,340);
	this.instance_2._off = true;

	this.instance_3 = new lib.actMc1_1_2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,310);
	this.instance_3._off = true;

	this.instance_4 = new lib.actMc1_1_3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,310);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc1_2_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,310);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc1_2_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,310);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc1_2_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,310);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc1_3_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,310);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc1_3_2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,310);
	this.instance_9._off = true;

	this.instance_10 = new lib.actMc1_3_3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,310);
	this.instance_10._off = true;

	this.instance_11 = new lib.actMc2_1_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,310);
	this.instance_11._off = true;

	this.instance_12 = new lib.actMc2_1_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(0,310);
	this.instance_12._off = true;

	this.instance_13 = new lib.actMc2_1_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(0,310);
	this.instance_13._off = true;

	this.instance_14 = new lib.actMc3_1_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(0,310);
	this.instance_14._off = true;

	this.instance_15 = new lib.actMc3_1_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,310);
	this.instance_15._off = true;

	this.instance_16 = new lib.actMc3_1_3();
	this.instance_16.parent = this;
	this.instance_16.setTransform(0,310);
	this.instance_16._off = true;

	this.instance_17 = new lib.actMc3_2_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(0,310);
	this.instance_17._off = true;

	this.instance_18 = new lib.actMc3_2_2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(0,310);
	this.instance_18._off = true;

	this.instance_19 = new lib.actMc3_2_3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(0,310);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(135).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(934));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(181).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(888));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(228).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(841));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(275).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(794));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(322).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(747));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(366).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(703));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(413).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(656));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(460).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(609));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(504).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(565));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(549).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(520));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(594).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(475));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(639).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(430));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(686).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(383));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(726).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(343));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(766).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(303));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(806).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(846).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},6).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(886).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},17).wait(172));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(449.9,142.2,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(984));

	// ss
	this.instance_20 = new lib.dialogue1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(43).to({_off:false},0).to({_off:true},873).wait(172));

	// avatar
	this.instance_21 = new lib.avatarBotsX("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(154.4,121.6,0.052,0.052);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},873).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(916).to({graphics:null,x:0,y:0}).wait(172));

	// q
	this.instance_22 = new lib.mcQ1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(419,203.5,0.05,0.05,0,0,0,1,0);
	this.instance_22._off = true;

	this.instance_23 = new lib.mcQ2();
	this.instance_23.parent = this;
	this.instance_23.setTransform(418.9,203.5,0.05,0.05);
	this.instance_23._off = true;

	this.instance_24 = new lib.mcQ3();
	this.instance_24.parent = this;
	this.instance_24.setTransform(418.9,203.5,0.05,0.05);
	this.instance_24._off = true;

	this.instance_25 = new lib.mcQ4();
	this.instance_25.parent = this;
	this.instance_25.setTransform(418.9,203.5,0.05,0.05);
	this.instance_25._off = true;

	this.instance_26 = new lib.mcQ5();
	this.instance_26.parent = this;
	this.instance_26.setTransform(418.9,203.5,0.05,0.05);
	this.instance_26._off = true;

	this.instance_27 = new lib.mcQ6();
	this.instance_27.parent = this;
	this.instance_27.setTransform(418.9,203.5,0.05,0.05);
	this.instance_27._off = true;

	this.instance_28 = new lib.mcQ7();
	this.instance_28.parent = this;
	this.instance_28.setTransform(418.9,177.5,0.05,0.05);
	this.instance_28._off = true;

	this.instance_29 = new lib.mcQ8();
	this.instance_29.parent = this;
	this.instance_29.setTransform(418.9,177.5,0.05,0.05);
	this.instance_29._off = true;

	this.instance_30 = new lib.mcQ9();
	this.instance_30.parent = this;
	this.instance_30.setTransform(418.9,177.5,0.05,0.05);
	this.instance_30._off = true;

	this.instance_31 = new lib.mcQ10();
	this.instance_31.parent = this;
	this.instance_31.setTransform(418.9,177.5,0.05,0.05);
	this.instance_31._off = true;

	this.instance_32 = new lib.mcQ11();
	this.instance_32.parent = this;
	this.instance_32.setTransform(418.9,177.5,0.05,0.05);
	this.instance_32._off = true;

	this.instance_33 = new lib.mcQ12();
	this.instance_33.parent = this;
	this.instance_33.setTransform(418.9,177.5,0.05,0.05);
	this.instance_33._off = true;

	var maskedShapeInstanceList = [this.instance_22,this.instance_23,this.instance_24,this.instance_25,this.instance_26,this.instance_27,this.instance_28,this.instance_29,this.instance_30,this.instance_31,this.instance_32,this.instance_33];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(109).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},21,cjs.Ease.elasticOut).to({_off:true},24).wait(93).to({_off:false,regX:1,scaleX:0.05,scaleY:0.05},0).to({regX:0,scaleX:1,scaleY:1},21,cjs.Ease.elasticOut).to({_off:true},26).wait(91).to({_off:false,regX:1,scaleX:0.05,scaleY:0.05},0).to({regX:0,scaleX:1,scaleY:1},21,cjs.Ease.elasticOut).to({_off:true},26).wait(656));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(154).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},25).wait(94).to({_off:false,scaleX:0.05,scaleY:0.05,x:418.9},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},26).wait(91).to({_off:false,scaleX:0.05,scaleY:0.05,x:418.9},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},26).wait(609));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(200).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},26).wait(94).to({_off:false,scaleX:0.05,scaleY:0.05,x:418.9},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},23).wait(94).to({_off:false,scaleX:0.05,scaleY:0.05,x:418.9},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},23).wait(565));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(523).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},24).wait(520));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(568).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},24).wait(475));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(613).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},31).wait(423));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(665).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},19).wait(383));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(705).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},19).wait(343));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(745).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},19).wait(303));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(785).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},19).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(825).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},19).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(865).to({_off:false},0).to({scaleX:1,scaleY:1,x:419},21,cjs.Ease.elasticOut).to({_off:true},30).wait(172));

	// progress
	this.prog6 = new lib.progress();
	this.prog6.name = "prog6";
	this.prog6.parent = this;
	this.prog6.setTransform(612.3,81.5);

	this.prog7 = new lib.progress();
	this.prog7.name = "prog7";
	this.prog7.parent = this;
	this.prog7.setTransform(624.6,81.5);

	this.prog8 = new lib.progress();
	this.prog8.name = "prog8";
	this.prog8.parent = this;
	this.prog8.setTransform(636.9,81.5);

	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(550.8,81.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(563.1,81.5);

	this.prog3 = new lib.progress();
	this.prog3.name = "prog3";
	this.prog3.parent = this;
	this.prog3.setTransform(575.4,81.5);

	this.prog4 = new lib.progress();
	this.prog4.name = "prog4";
	this.prog4.parent = this;
	this.prog4.setTransform(587.7,81.5);

	this.prog5 = new lib.progress();
	this.prog5.name = "prog5";
	this.prog5.parent = this;
	this.prog5.setTransform(600,81.5);

	var maskedShapeInstanceList = [this.prog6,this.prog7,this.prog8,this.prog1,this.prog2,this.prog3,this.prog4,this.prog5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog5},{t:this.prog4},{t:this.prog3},{t:this.prog2},{t:this.prog1},{t:this.prog8},{t:this.prog7},{t:this.prog6}]},99).to({state:[]},817).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(1062));

	// flash0.ai
	this.instance_34 = new lib.Symbol2("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(394.4,296.6);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(20).to({_off:false},0).to({_off:true},896).wait(172));

	// bg
	this.instance_35 = new lib.Bitmap3();
	this.instance_35.parent = this;
	this.instance_35.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(1088));

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
		{src:"images/y6d1q2_1/Bitmap22.png?1525233619097", id:"Bitmap22"},
		{src:"images/y6d1q2_1/Bitmap3.png?1525233619097", id:"Bitmap3"},
		{src:"images/y6d1q2_1/Bitmap8.png?1525233619097", id:"Bitmap8"},
		{src:"images/y6d1q2_1/Bitmap9.png?1525233619097", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1525233619097", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1525233619097", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1525233619097", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1525233619097", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1525233619097", id:"submitAns"},
		{src:"sounds/suspense.mp3?1525233619097", id:"suspense"},
		{src:"sounds/timeout.mp3?1525233619097", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1525233619097", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1525233619097", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1525233619097", id:"an.TextInput"}
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