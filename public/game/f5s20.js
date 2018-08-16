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



(lib.a_1 = function() {
	this.initialize(img.a_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.a_4 = function() {
	this.initialize(img.a_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2941,632);


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
p.nominalBounds = new cjs.Rectangle(0,0,140,79);


(lib.block_02_qube = function() {
	this.initialize(img.block_02_qube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.block_03_qube = function() {
	this.initialize(img.block_03_qube);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.character_facing_direction = function() {
	this.initialize(img.character_facing_direction);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,196,196);


(lib.cube_start = function() {
	this.initialize(img.cube_start);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.qube_lava_01 = function() {
	this.initialize(img.qube_lava_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.qube_lava_02 = function() {
	this.initialize(img.qube_lava_02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.qube_lava_03 = function() {
	this.initialize(img.qube_lava_03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);


(lib.qube_lava_base = function() {
	this.initialize(img.qube_lava_base);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,53);// helper functions:

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
	this.myTxt = new cjs.Text("Find the error in the code given.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 278;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2pAAMAtTAAA");
	this.shape.setTransform(-106.6,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A1SC4IAAhmIilACIClh6IAAiMMAtTAAAIAAFq");
	this.shape_1.setTransform(-115.3,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A1XC2IAAhnIikADICkh7IAAiMMAtTAAAIAAFrg");
	this.shape_2.setTransform(-114.9,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn2, new cjs.Rectangle(-269.5,-21.5,312,39.4), null);


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
	this.myTxt = new cjs.Text("Where is the astronaut going?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 278;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-233,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2bAAMAs3AAA");
	this.shape.setTransform(-108,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A1EC4IAAhmIilACIClh6IAAiMMAs3AAAIAAFq");
	this.shape_1.setTransform(-116.7,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A1JC2IAAhnIilADIClh7IAAiMMAs4AAAIAAFrg");
	this.shape_2.setTransform(-116.2,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-21.5,316,39.4), null);


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
	this.myTxt = new cjs.Text("Kesan ralat dalam kod yang diberi.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 311;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-237,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A3bAAMAu3AAA");
	this.shape.setTransform(-101.6,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A2EDCIAAh6IilACIClh6IAAiMMAu3AAAIAAF+");
	this.shape_1.setTransform(-110.3,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A2JDAIAAh7IikADICkh7IAAiMMAu3AAAIAAF/g");
	this.shape_2.setTransform(-109.9,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm2, new cjs.Rectangle(-269.5,-21.5,345.6,41.4), null);


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
	this.myTxt = new cjs.Text("Ke manakah angkasawan ini sedang pergi?", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 370;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235,-15.2);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A9YAAMA6xAAA");
	this.shape.setTransform(-63.6,15.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A8BC4IAAhmIikACICkh6IAAiMMA6wAAAIAAFq");
	this.shape_1.setTransform(-72.3,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A8FC2IAAhnIilADIClh7IAAiMMA6wAAAIAAFrg");
	this.shape_2.setTransform(-71.8,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-21.5,406.5,39.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnpCaIAAqTIEaAAIAAKTg");
	mask.setTransform(-49,-50.6);

	// Layer_1
	this.instance = new lib.character_facing_direction();
	this.instance.parent = this;
	this.instance.setTransform(-98,-98);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-98,-98,28.2,62.8), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1043.1,-312.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1043.1,-312.2,2941,632);


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
	this.shape.setTransform(179.8,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_1.setTransform(173.2,19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUA2QgLgEgGgGIAFgKQAPANARgBQAMAAAGgGQAHgHAAgMQAAgLgHgHQgGgGgMAAQgPAAgKAMIgJAAIAAhBIBDAAIAAALIg2AAIAAAoQAJgJAPAAQAKAAAIAFQAIAEAEAHQAFAJAAAKQAAALgFAIQgFAJgIAEQgJAFgLgBQgKABgKgEg");
	this.shape_2.setTransform(163.8,19.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(149.8,21.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(140.2,21.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(130.5,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(121.2,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(112.3,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(102.9,19.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(89.4,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(79.7,21.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(70.1,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_12.setTransform(58.5,21.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(46.5,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_14.setTransform(37.9,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_15.setTransform(31.6,21.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(23.8,21.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgFAIg");
	this.shape_17.setTransform(14.9,19.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_18.setTransform(1.4,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAGQgCAFgEAGg");
	this.shape_19.setTransform(-9,25.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_20.setTransform(-15.4,19.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_21.setTransform(-25.2,21.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_22.setTransform(-34.3,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_23.setTransform(-44,21.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_24.setTransform(-57.4,19.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(-66.5,21.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_26.setTransform(-72.7,19.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_27.setTransform(-79.2,21.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_28.setTransform(-88.3,19.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_29.setTransform(-100.5,21.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_30.setTransform(-111.8,21.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_31.setTransform(-120.8,23);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_32.setTransform(200.6,-2.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_33.setTransform(192.6,-4.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_34.setTransform(185.9,-4.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_35.setTransform(181.1,-2.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_36.setTransform(171.4,-4.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(161.6,-2.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_38.setTransform(150.1,-2.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_39.setTransform(138.1,-2.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_40.setTransform(129,-4.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_41.setTransform(117.9,-4.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(110.9,-4.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_43.setTransform(97.1,-4.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(88,-2.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_45.setTransform(80,-4.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_46.setTransform(63.9,-2.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(51.9,-2.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_48.setTransform(45.4,-4.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_49.setTransform(38.5,-2.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(28.9,-4.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_51.setTransform(15.4,-2.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(5.7,-2.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_53.setTransform(-3.5,-4.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(-13.2,-2.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_55.setTransform(-19.7,-4.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_56.setTransform(-26.6,-2.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_57.setTransform(-35.2,-2.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_58.setTransform(-43.5,-2.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_59.setTransform(-51.3,-4.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_60.setTransform(-65,-2.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_61.setTransform(-74.7,-2.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_62.setTransform(-82.7,-4.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_63.setTransform(-89.4,-4.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_64.setTransform(-95.9,-2.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_65.setTransform(-103.4,-3.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_66.setTransform(-110.5,-2.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAHAAAPQAAAJgFAHQgFAGgIAEQAKABAFAIQAGAGAAALQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaAAIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgJQAAgUgaAAIgeAAg");
	this.shape_67.setTransform(-120.1,-4.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_68.setTransform(17.4,20.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AAZA7IAAgxQgEAHgHAEQgHAEgIAAQgMAAgHgFQgJgFgEgJQgFgJABgNQgBgMAFgJQAEgKAJgFQAIgGALABQAIgBAIAFQAGAFAEAHIACgOIALAAIgBAWIAABcgAgRgmQgHAIAAAOQAAAPAHAIQAGAHALABQAMgBAGgHQAHgIAAgPQAAgPgHgHQgGgJgMABQgLgBgGAJg");
	this.shape_69.setTransform(-17.1,23);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_70.setTransform(-80.4,19.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_71.setTransform(-118.5,21.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_72.setTransform(127.9,-4.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_73.setTransform(120.3,-3.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_74.setTransform(110.6,-4.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_75.setTransform(106.1,-4.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_76.setTransform(59.9,-4.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_77.setTransform(36.9,-4.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_78.setTransform(27.8,-2.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_79.setTransform(19.4,-2.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_80.setTransform(-2.2,-4.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_81.setTransform(-28,-4.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_82.setTransform(-36.5,-2.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_83.setTransform(-44.5,-2.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_84.setTransform(-51.4,-2.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_85.setTransform(-57.2,-2.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_86.setTransform(-65,-2.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_87.setTransform(-77.9,-2.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_88.setTransform(-86.9,-4.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_89.setTransform(-94.5,-3.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_90.setTransform(-105.7,-2.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_91.setTransform(-111.8,-4.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgiA5IAAhxIBFAAIAAALIg4AAIAAAnIA1AAIAAAKIg1AAIAAA1g");
	this.shape_92.setTransform(-117.8,-4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.shape_66,p:{x:-110.5}},{t:this.shape_65,p:{x:-103.4}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-43.5}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-19.7}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:38.5,y:-2.6}},{t:this.shape_48,p:{x:45.4,y:-4.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:88}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41,p:{x:117.9,y:-4.2}},{t:this.shape_40},{t:this.shape_39,p:{x:138.1,y:-2.6}},{t:this.shape_38,p:{x:150.1}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:185.9,y:-4.2}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-111.8,y:21.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-79.2}},{t:this.shape_26,p:{x:-72.7}},{t:this.shape_25,p:{x:-66.5,y:21.3}},{t:this.shape_24},{t:this.shape_23,p:{x:-44}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:1.4}},{t:this.shape_17},{t:this.shape_16,p:{x:23.8}},{t:this.shape_15,p:{x:31.6}},{t:this.shape_14,p:{x:37.9}},{t:this.shape_13,p:{x:46.5}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:112.3}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:149.8,y:21.3}},{t:this.shape_2,p:{x:163.8}},{t:this.shape_1,p:{x:173.2}},{t:this.shape,p:{x:179.8}}]}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_3,p:{x:-21.5,y:-2.6}},{t:this.shape_65,p:{x:-9.8}},{t:this.shape_80},{t:this.shape_66,p:{x:6.8}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_58,p:{x:46.3}},{t:this.shape_76},{t:this.shape_30,p:{x:68.8,y:-2.6}},{t:this.shape_55,p:{x:75.1}},{t:this.shape_44,p:{x:81.5}},{t:this.shape_38,p:{x:93.1}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_25,p:{x:136.9,y:-2.6}},{t:this.shape_71},{t:this.shape_13,p:{x:-109.7}},{t:this.shape_15,p:{x:-101.2}},{t:this.shape_41,p:{x:-96.9,y:19.7}},{t:this.shape_39,p:{x:-90.5,y:21.3}},{t:this.shape_70},{t:this.shape_48,p:{x:-73.9,y:19.5}},{t:this.shape_16,p:{x:-67.7}},{t:this.shape_18,p:{x:-54.9}},{t:this.shape_34,p:{x:-44.5,y:19.7}},{t:this.shape_14,p:{x:-38.7}},{t:this.shape_7,p:{x:-26.1}},{t:this.shape_69},{t:this.shape_23,p:{x:-7.5}},{t:this.shape_49,p:{x:1.7,y:21.3}},{t:this.shape_26,p:{x:8.6}},{t:this.shape_68},{t:this.shape_27,p:{x:24.9}},{t:this.shape_2,p:{x:38.7}},{t:this.shape_1,p:{x:48.1}},{t:this.shape,p:{x:54.7}}]},1).wait(1));

	// outlineshade
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#D40000").ss(4,2,0,3).p("AcqAAMg5TAAA");
	this.shape_93.setTransform(34.1,38.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#D40000").ss(1,2,0,3).p("A9KEnIAHhIIALiYIBXhPIhIhQIAXjPMA5dAAAIgSCSIgpF0IgGBI");
	this.shape_94.setTransform(37.4,9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#D40000").ss(4,2,0,3).p("AXvAAMgvdAAA");
	this.shape_95.setTransform(2.6,38.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#D40000").ss(1,2,0,3).p("A4PEnIAHhIIALiYIBXhPIhIhQIAXjPMAvnAAAIhBJO");
	this.shape_96.setTransform(5.9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93}]}).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).wait(1));

	// white
	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F5F5F5").s().p("A9KEnIAHhIIALiYIBXhPIhIhQIAXjOMA5dAAAIgSCRIgpF0IgGBIg");
	this.shape_97.setTransform(37.4,9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F5F5F5").s().p("A4PEnIASjgIBXhPIhIhQIAXjOMAvnAAAIhBJNg");
	this.shape_98.setTransform(5.9,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_97}]}).to({state:[{t:this.shape_98}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.3,-21.6,376.5,62.2);


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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(185.5,-31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAJAAQAcAAAAAfIAAAzg");
	this.shape_1.setTransform(179,-36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(169.3,-34.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_3.setTransform(157.8,-34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(145.8,-34.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_5.setTransform(136.7,-36.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_6.setTransform(125.5,-36.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(118.6,-36.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_8.setTransform(104.8,-36.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(95.6,-34.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_10.setTransform(87.6,-36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(78.2,-34.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(68.6,-36.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_13.setTransform(59.4,-34.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(50.5,-34.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_15.setTransform(42.1,-34.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(33.5,-32.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(19.6,-34.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(10,-34.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_19.setTransform(2,-36.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_20.setTransform(-5.2,-34.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(-13.7,-34.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(-22.3,-34.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(-31.2,-34.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(-40.8,-36.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_25.setTransform(-47.8,-34.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(-55.5,-34.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_27.setTransform(-64.4,-36.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_28.setTransform(-76.6,-35.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(-84.3,-34.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_30.setTransform(-96,-34.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_31.setTransform(-108,-34.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(-117.3,-34.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_33.setTransform(-126.2,-34.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_34.setTransform(-135.2,-32.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_35.setTransform(-149.4,-34.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_36.setTransform(-156.4,-34.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_37.setTransform(-164.1,-34.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_38.setTransform(-173.5,-36.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-182.8,-34.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(-191.8,-34.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_41.setTransform(-200.7,-36.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_42.setTransform(-214.6,-36.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_43.setTransform(-221.2,-36.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_44.setTransform(-225,-36.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_45.setTransform(-228.8,-36.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIAAAPQAAAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFgBgKQABgLgHgEQgGgGgNAAIgfAAg");
	this.shape_46.setTransform(-235.5,-36.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_47.setTransform(170.4,-36.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_48.setTransform(114.7,-34.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_49.setTransform(106,-34.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_50.setTransform(87.2,-34.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_51.setTransform(38.8,-36.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_52.setTransform(31.2,-35.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(10.4,-34.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_54.setTransform(-53.1,-32.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_55.setTransform(-73.9,-36.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_56.setTransform(-104,-34.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_57.setTransform(-115.4,-35.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_58.setTransform(-121.9,-34.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_59.setTransform(-130.4,-34.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(-150.9,-34.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_61.setTransform(-159.3,-34.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_62.setTransform(-171.9,-34.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_63.setTransform(-180.9,-36.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_64.setTransform(-188.5,-35.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_65.setTransform(-198.3,-35.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_66.setTransform(-204.8,-34.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_67.setTransform(-213.3,-34.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_68.setTransform(-219.5,-36.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_69.setTransform(-225.8,-34.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_70.setTransform(-235.1,-36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:-225}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:-191.8}},{t:this.shape_39},{t:this.shape_38,p:{x:-173.5}},{t:this.shape_37,p:{x:-164.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-126.2}},{t:this.shape_32,p:{x:-117.3}},{t:this.shape_31,p:{x:-108}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-64.4}},{t:this.shape_26,p:{x:-55.5}},{t:this.shape_25,p:{x:-47.8}},{t:this.shape_24,p:{x:-40.8}},{t:this.shape_23},{t:this.shape_22,p:{x:-22.3}},{t:this.shape_21,p:{x:-13.7}},{t:this.shape_20,p:{x:-5.2}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:33.5}},{t:this.shape_15,p:{x:42.1}},{t:this.shape_14,p:{x:50.5}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:78.2}},{t:this.shape_10},{t:this.shape_9,p:{x:95.6}},{t:this.shape_8,p:{x:104.8}},{t:this.shape_7,p:{x:118.6}},{t:this.shape_6},{t:this.shape_5,p:{x:136.7}},{t:this.shape_4},{t:this.shape_3,p:{x:157.8}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:185.5}}]}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_25,p:{x:-142.9}},{t:this.shape_20,p:{x:-137.1}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_32,p:{x:-95}},{t:this.shape_7,p:{x:-85.7}},{t:this.shape_55},{t:this.shape_44,p:{x:-69.2}},{t:this.shape_21,p:{x:-62.7}},{t:this.shape_54},{t:this.shape_27,p:{x:-38.8}},{t:this.shape_31,p:{x:-29.7}},{t:this.shape_22,p:{x:-20.7}},{t:this.shape_40,p:{x:-12.3}},{t:this.shape_38,p:{x:-3.4}},{t:this.shape_53},{t:this.shape_17},{t:this.shape_52},{t:this.shape_51},{t:this.shape_37,p:{x:47.8}},{t:this.shape_16,p:{x:61.3}},{t:this.shape_15,p:{x:69.9}},{t:this.shape_33,p:{x:78.3}},{t:this.shape_50},{t:this.shape_24,p:{x:96.4}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_11,p:{x:123.1}},{t:this.shape_8,p:{x:132.2}},{t:this.shape_26,p:{x:141.6}},{t:this.shape_5,p:{x:155.2}},{t:this.shape_14,p:{x:164.1}},{t:this.shape_47},{t:this.shape_9,p:{x:176.8}},{t:this.shape_3,p:{x:188.4}},{t:this.shape,p:{x:197.1}}]},1).wait(1));

	// Layer_4
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#D40000").ss(4,2,0,3).p("EAkIAAAIkKAAMgzOAAAIw3AA");
	this.shape_71.setTransform(-28.1,-18);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#D40000").ss(1,2,0,3).p("EgkXAC2IAGhTIBXhQIhIhPIALh6IaXAAMApOAAAIEqAAIggFs");
	this.shape_72.setTransform(-26.5,-36.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F5F5F5").s().p("AtaC2IAFhTIBYhQIhJhPIALh5IaWAAIqAFrg");
	this.shape_73.setTransform(-173.4,-36.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#D40000").ss(4,2,0,3).p("EAkmAAAMg4UAAAIw3AA");
	this.shape_74.setTransform(-25.1,-18);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#D40000").ss(1,2,0,3).p("Egk1AC2IAGhTIBXhQIhIhPIALh6IaXAAMAu0AAAIggFs");
	this.shape_75.setTransform(-23.5,-36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]}).to({state:[{t:this.shape_73},{t:this.shape_75},{t:this.shape_74}]},1).wait(1));

	// Layer_3
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FAFAFA").s().p("EgkUAC2IAFhTIBYhQIhJhPIALh5MBIKAAAIgfFrg");
	this.shape_76.setTransform(-26.8,-36.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FAFAFA").s().p("EgkyAC2IAFhTIBYhQIhJhPIALh5MBJGAAAIgfFrg");
	this.shape_77.setTransform(-23.8,-36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76}]}).to({state:[{t:this.shape_77}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.3,-55.6,468.7,39.6);


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
	this.shape.graphics.f("#671D1F").s().p("ALBCkIAPjeIAGhTIhOAAI1IAAIgEAkIgOAAIAGg6IVUAAIBnAAIgLBpIgXDegAruCkIAHhbIAOAAIgOAAIADgZIBAhAIARAQIhGBGIAAADIgHBbgArWhMIAEgdIAOAAIgFAqgArShpg");
	this.shape.setTransform(0.2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-6.9,-23.7,-2.9,18.2).s().p("ArbCZIAHhcIABgCIBFhFIgRgRIAGgFIgrgrIAFgqIBJAAIAACyIheAAIBeAAIAAiyIhJAAIAEgjIVJAAIBOAAIgGBTIgQDeg");
	this.shape_1.setTransform(-0.4,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],-5.5,-21.4,-5.5,18.1).s().p("AsWDWIAEgjIAAAAIAMh7IAhAAIgIBcIAPAAIWhAAIALAAIAYjfIALhpIhnAAI1UAAIgHA6IghAAIAhAAIgDAdIAMANIArAqIgGAGIhAA/IgCAZIghAAIAEgpIA2g1IgrgrIAFgpIALhbIVxAAICNAAIgPCKIgfEhgArRh6g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.2)").s().p("AsWDWIAEgjIAAAAIAQikIARgQIBUAAIAAizIhPAAIAFghIVOAAICwAAIgJBRIglFagArxgBIAlglIgrgrIALhjIBPAAIAACzgArsi0g");
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


(lib.bendera_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#32891B").s().p("AgMC8IAAl9QAGANAGALIABANIAMFeIgZgGg");
	this.shape.setTransform(3.8,-31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3EA921").s().p("AieCxIgigBIgKgCIgMleQAcAqA2AaQA2AZBDgEQBBgDAxAUQAxAUAcAnQAdAmACAJIAFALIgFgBQgdgIgegCQgfAAgdANQgdAOgZAUQgWATgXARQgPALgPAJQgcARgeALQgcAKggAAIgDAAg");
	this.shape_1.setTransform(25.4,-29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5DFF32").s().p("ADWB2IgEgLQgDgJgdgnQgcgogxgTQgxgUhBAEQhCAEg2gaQg2gZgdgrIgBgMQAeAuA0AYQA+AdBFgIQA1gFAxAVQAxAUAgAoQAfAoAIAeg");
	this.shape_2.setTransform(25.6,-36.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).wait(19));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A9086").s().p("AgNF0QgEgCAAgDIAArkQAAADAFACQAGADAGAAQAIAAAEgDQAGgCABgDIgBLjIAAABQAAADgGACQgFACgHAAQgHAAgGgCg");
	this.shape_3.setTransform(0.6,-14.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BCBFBB").s().p("AgMAEQgFgCAAgDIAAgEQAAADAFACQAGACAGAAQAIAAAEgCQAGgCABgDIAAAEQgBADgGACQgEACgIAAQgGAAgGgCg");
	this.shape_4.setTransform(0.6,-52);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#60635E").s().p("AgMAFQgFgCAAgDIAAAAQgBgCAGgDQAGgCAGAAQAIAAAEACQAGADABACQgBADgGACQgEADgIAAQgGAAgGgDg");
	this.shape_5.setTransform(0.6,-52.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.298)").s().p("AgOAGQgFgCAAgEIAAAAQAAgCAFgDQAHgDAHAAQAIAAAGADQAGADAAACQAAAEgGACQgGADgIAAQgHAAgHgDg");
	this.shape_6.setTransform(0.7,21.9,1,1,0,0,0,0.2,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5DFF32").s().p("AjWgZIhFggIABAAIEYB1IEeh/IkeCHg");
	this.shape_7.setTransform(-0.1,28.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3EA921").s().p("AkaAJIEdiHIEYB9IkdCAg");
	this.shape_8.setTransform(0,22.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D5311").s().p("AiLgtIAAgjIBFAgIDLBfIAHAhg");
	this.shape_9.setTransform(-14.4,31.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#356114").s().p("ABjAgIjMhgIDTBeIAAAjg");
	this.shape_10.setTransform(-10.9,32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4A8420").s().p("AiOAzIEdiIIkXCNIgGAeg");
	this.shape_11.setTransform(14,30.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C6E18").s().p("AiIA4IEXiNIAAAjIkdCIg");
	this.shape_12.setTransform(14,30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-53.3,75.8,92.5);


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


(lib.ans = function(mode,startPosition,loop) {
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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D40000").s().p("AANAzIAIhNIghAAIgIBNIgcAAIAKhkIAXAAIAEAHIAOgHIAYAAIAWANIgJBXg");
	this.shape.setTransform(193.8,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhKIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(182,18.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D40000").s().p("AgjAyIALhjIAWAAIADAIIAPgIIAUAAIgCAYIgiAAIgHBLg");
	this.shape_2.setTransform(172.4,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D40000").s().p("AAZAzIgNgIIgOAIIgYAAIgWgNIAIhKIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_3.setTransform(161.9,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D40000").s().p("AAQAzIgEgJIgOAJIgYAAIgWgOIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBkg");
	this.shape_4.setTransform(150,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D40000").s().p("AgCBJIgVgNIANiEIAbAAIgNB6IAUAAIgCAXg");
	this.shape_5.setTransform(141,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D40000").s().p("AgXAzIgVgOIAHhJIAZgNIAkAAIAVANIgFAuIg2AAIgCARIA3AAIgDAYgAgMgJIAbAAIACgRIgbAAg");
	this.shape_6.setTransform(131.8,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D40000").s().p("AAWBGIgmg3IgPARIgEAmIgcAAIAOiLIAcAAIgGA/IAAAAIA6g/IAhAAIg+BBIA2BKg");
	this.shape_7.setTransform(119.9,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D40000").s().p("AgBBCIgVgNIAGg+IgSAAIADgYIASAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_8.setTransform(184.7,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D40000").s().p("AgzBGIAPiLIAWAAIAEAHIAOgHIAbAAIAVANIgIBKIgYAOIgZAAIgOgJIgFAvgAgRAIIAjAAIAGg2IgjAAg");
	this.shape_9.setTransform(161.9,20.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D40000").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_10.setTransform(152.1,17);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D40000").s().p("AAQAzIgEgJIgOAJIgYAAIgWgOIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBkg");
	this.shape_11.setTransform(141.7,18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D40000").s().p("AgmBHIgWgNIANhzIAYgNIA+AAIAWANIgNBzIgYANgAgeAvIA0AAIAJhdIg0AAg");
	this.shape_12.setTransform(128.7,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:150}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_4,p:{x:174.3}},{t:this.shape_8}]},1).wait(1));

	// Layer_3
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("Az7CEIAZkHMAneAAAIgZEHg");
	this.shape_13.setTransform(147.7,16.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(2));

	// Layer_1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#000000","#FFFFFF"],[0,1],-30.6,194.2,-21.8,113.4).s().p("A2qVTMAEwgqlMAolAAAMgEvAqlg");
	this.shape_14.setTransform(137,128.9,1,0.946,0,-1.4,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.2)").s().p("A2qVTMAEwgqlMAolAAAMgEvAqlg");
	this.shape_15.setTransform(140.6,132.6,1,0.946,0,-1.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.9,0,287.5,261.5);


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


(lib.isoGfx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_12
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(108.5,119);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_9
	this.instance_1 = new lib.cube_start();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,66);

	this.instance_2 = new lib.a_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,-9);

	this.instance_3 = new lib.a_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-150,-9);

	this.instance_4 = new lib.a_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_4
	this.instance_5 = new lib.qube_lava_03();
	this.instance_5.parent = this;
	this.instance_5.setTransform(75,61);

	this.instance_6 = new lib.qube_lava_02();
	this.instance_6.parent = this;
	this.instance_6.setTransform(25,7.5);

	this.instance_7 = new lib.qube_lava_01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-50,17.8);

	this.instance_8 = new lib.qube_lava_02();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-25,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Layer_11
	this.instance_9 = new lib.a_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(50,149.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1));

	// Layer_8
	this.instance_10 = new lib.a_1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,94);

	this.instance_11 = new lib.a_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-25,81.5);

	this.instance_12 = new lib.a_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(25,81.5);

	this.instance_13 = new lib.a_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(125,31.5);

	this.instance_14 = new lib.a_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-125,31.5);

	this.instance_15 = new lib.a_4();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,19);

	this.instance_16 = new lib.a_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-150,19);

	this.instance_17 = new lib.a_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(125,6.5);

	this.instance_18 = new lib.a_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-125,6.5);

	this.instance_19 = new lib.a_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-25,-43.5);

	this.instance_20 = new lib.a_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(25,-43.5);

	this.instance_21 = new lib.a_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,-56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Layer_7
	this.instance_22 = new lib.a_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(0,122);

	this.instance_23 = new lib.a_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(-25,109.5);

	this.instance_24 = new lib.a_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(25,109.5);

	this.instance_25 = new lib.a_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(-50,97);

	this.instance_26 = new lib.a_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(0,97);

	this.instance_27 = new lib.a_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(-75,84.5);

	this.instance_28 = new lib.a_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(-25,84.5);

	this.instance_29 = new lib.a_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(25,84.5);

	this.instance_30 = new lib.a_1();
	this.instance_30.parent = this;
	this.instance_30.setTransform(-100,72);

	this.instance_31 = new lib.a_1();
	this.instance_31.parent = this;
	this.instance_31.setTransform(125,59.5);

	this.instance_32 = new lib.a_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(-125,59.5);

	this.instance_33 = new lib.a_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(150,47);

	this.instance_34 = new lib.a_1();
	this.instance_34.parent = this;
	this.instance_34.setTransform(-150,47);

	this.instance_35 = new lib.a_1();
	this.instance_35.parent = this;
	this.instance_35.setTransform(125,34.5);

	this.instance_36 = new lib.a_1();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-125,34.5);

	this.instance_37 = new lib.a_1();
	this.instance_37.parent = this;
	this.instance_37.setTransform(100,22);

	this.instance_38 = new lib.a_1();
	this.instance_38.parent = this;
	this.instance_38.setTransform(150,22);

	this.instance_39 = new lib.a_1();
	this.instance_39.parent = this;
	this.instance_39.setTransform(-100,22);

	this.instance_40 = new lib.a_1();
	this.instance_40.parent = this;
	this.instance_40.setTransform(-150,22);

	this.instance_41 = new lib.a_1();
	this.instance_41.parent = this;
	this.instance_41.setTransform(125,9.5);

	this.instance_42 = new lib.a_1();
	this.instance_42.parent = this;
	this.instance_42.setTransform(-75,9.5);

	this.instance_43 = new lib.a_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(75,9.5);

	this.instance_44 = new lib.a_1();
	this.instance_44.parent = this;
	this.instance_44.setTransform(-150,-3);

	this.instance_45 = new lib.a_1();
	this.instance_45.parent = this;
	this.instance_45.setTransform(50,-3);

	this.instance_46 = new lib.a_1();
	this.instance_46.parent = this;
	this.instance_46.setTransform(-50,-3);

	this.instance_47 = new lib.a_1();
	this.instance_47.parent = this;
	this.instance_47.setTransform(-25,-15.5);

	this.instance_48 = new lib.a_1();
	this.instance_48.parent = this;
	this.instance_48.setTransform(25,-15.5);

	this.instance_49 = new lib.a_1();
	this.instance_49.parent = this;
	this.instance_49.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).wait(1));

	// Layer_10
	this.instance_50 = new lib.a_1();
	this.instance_50.parent = this;
	this.instance_50.setTransform(0,150);

	this.instance_51 = new lib.a_1();
	this.instance_51.parent = this;
	this.instance_51.setTransform(-50,150);

	this.instance_52 = new lib.a_1();
	this.instance_52.parent = this;
	this.instance_52.setTransform(-75,137.5);

	this.instance_53 = new lib.a_1();
	this.instance_53.parent = this;
	this.instance_53.setTransform(-25,137.5);

	this.instance_54 = new lib.a_1();
	this.instance_54.parent = this;
	this.instance_54.setTransform(25,137.5);

	this.instance_55 = new lib.qube_lava_base();
	this.instance_55.parent = this;
	this.instance_55.setTransform(50,125);

	this.instance_56 = new lib.a_1();
	this.instance_56.parent = this;
	this.instance_56.setTransform(-50,125);

	this.instance_57 = new lib.a_1();
	this.instance_57.parent = this;
	this.instance_57.setTransform(0,125);

	this.instance_58 = new lib.block_02_qube();
	this.instance_58.parent = this;
	this.instance_58.setTransform(125,112.5);

	this.instance_59 = new lib.a_1();
	this.instance_59.parent = this;
	this.instance_59.setTransform(-75,112.5);

	this.instance_60 = new lib.a_1();
	this.instance_60.parent = this;
	this.instance_60.setTransform(-125,112.5);

	this.instance_61 = new lib.qube_lava_base();
	this.instance_61.parent = this;
	this.instance_61.setTransform(75,112.5);

	this.instance_62 = new lib.a_1();
	this.instance_62.parent = this;
	this.instance_62.setTransform(-25,112.5);

	this.instance_63 = new lib.a_1();
	this.instance_63.parent = this;
	this.instance_63.setTransform(25,112.5);

	this.instance_64 = new lib.block_03_qube();
	this.instance_64.parent = this;
	this.instance_64.setTransform(100,100);

	this.instance_65 = new lib.a_1();
	this.instance_65.parent = this;
	this.instance_65.setTransform(150,100);

	this.instance_66 = new lib.a_1();
	this.instance_66.parent = this;
	this.instance_66.setTransform(-100,100);

	this.instance_67 = new lib.qube_lava_base();
	this.instance_67.parent = this;
	this.instance_67.setTransform(50,100);

	this.instance_68 = new lib.a_1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(-50,100);

	this.instance_69 = new lib.a_1();
	this.instance_69.parent = this;
	this.instance_69.setTransform(0,100);

	this.instance_70 = new lib.a_1();
	this.instance_70.parent = this;
	this.instance_70.setTransform(125,87.5);

	this.instance_71 = new lib.a_1();
	this.instance_71.parent = this;
	this.instance_71.setTransform(-75,87.5);

	this.instance_72 = new lib.a_1();
	this.instance_72.parent = this;
	this.instance_72.setTransform(-175,87.5);

	this.instance_73 = new lib.a_1();
	this.instance_73.parent = this;
	this.instance_73.setTransform(-125,87.5);

	this.instance_74 = new lib.qube_lava_base();
	this.instance_74.parent = this;
	this.instance_74.setTransform(75,87.5);

	this.instance_75 = new lib.a_1();
	this.instance_75.parent = this;
	this.instance_75.setTransform(-25,87.5);

	this.instance_76 = new lib.a_1();
	this.instance_76.parent = this;
	this.instance_76.setTransform(25,87.5);

	this.instance_77 = new lib.qube_lava_base();
	this.instance_77.parent = this;
	this.instance_77.setTransform(100,75);

	this.instance_78 = new lib.a_1();
	this.instance_78.parent = this;
	this.instance_78.setTransform(150,75);

	this.instance_79 = new lib.a_1();
	this.instance_79.parent = this;
	this.instance_79.setTransform(-100,75);

	this.instance_80 = new lib.a_1();
	this.instance_80.parent = this;
	this.instance_80.setTransform(-150,75);

	this.instance_81 = new lib.qube_lava_base();
	this.instance_81.parent = this;
	this.instance_81.setTransform(50,75);

	this.instance_82 = new lib.qube_lava_base();
	this.instance_82.parent = this;
	this.instance_82.setTransform(-50,75);

	this.instance_83 = new lib.a_1();
	this.instance_83.parent = this;
	this.instance_83.setTransform(0,75);

	this.instance_84 = new lib.a_1();
	this.instance_84.parent = this;
	this.instance_84.setTransform(125,62.5);

	this.instance_85 = new lib.qube_lava_base();
	this.instance_85.parent = this;
	this.instance_85.setTransform(-75,62.5);

	this.instance_86 = new lib.a_1();
	this.instance_86.parent = this;
	this.instance_86.setTransform(-125,62.5);

	this.instance_87 = new lib.qube_lava_base();
	this.instance_87.parent = this;
	this.instance_87.setTransform(75,62.5);

	this.instance_88 = new lib.qube_lava_base();
	this.instance_88.parent = this;
	this.instance_88.setTransform(-25,62.5);

	this.instance_89 = new lib.qube_lava_base();
	this.instance_89.parent = this;
	this.instance_89.setTransform(25,62.5);

	this.instance_90 = new lib.a_1();
	this.instance_90.parent = this;
	this.instance_90.setTransform(100,50);

	this.instance_91 = new lib.a_1();
	this.instance_91.parent = this;
	this.instance_91.setTransform(150,50);

	this.instance_92 = new lib.a_1();
	this.instance_92.parent = this;
	this.instance_92.setTransform(-100,50);

	this.instance_93 = new lib.a_1();
	this.instance_93.parent = this;
	this.instance_93.setTransform(-150,50);

	this.instance_94 = new lib.qube_lava_base();
	this.instance_94.parent = this;
	this.instance_94.setTransform(50,50);

	this.instance_95 = new lib.qube_lava_base();
	this.instance_95.parent = this;
	this.instance_95.setTransform(-50,50);

	this.instance_96 = new lib.qube_lava_base();
	this.instance_96.parent = this;
	this.instance_96.setTransform(0,50);

	this.instance_97 = new lib.a_1();
	this.instance_97.parent = this;
	this.instance_97.setTransform(125,37.5);

	this.instance_98 = new lib.a_1();
	this.instance_98.parent = this;
	this.instance_98.setTransform(-75,37.5);

	this.instance_99 = new lib.a_1();
	this.instance_99.parent = this;
	this.instance_99.setTransform(-125,37.5);

	this.instance_100 = new lib.a_1();
	this.instance_100.parent = this;
	this.instance_100.setTransform(75,37.5);

	this.instance_101 = new lib.qube_lava_base();
	this.instance_101.parent = this;
	this.instance_101.setTransform(-25,37.5);

	this.instance_102 = new lib.qube_lava_base();
	this.instance_102.parent = this;
	this.instance_102.setTransform(25,37.5);

	this.instance_103 = new lib.a_1();
	this.instance_103.parent = this;
	this.instance_103.setTransform(100,25);

	this.instance_104 = new lib.a_1();
	this.instance_104.parent = this;
	this.instance_104.setTransform(150,25);

	this.instance_105 = new lib.a_1();
	this.instance_105.parent = this;
	this.instance_105.setTransform(-100,25);

	this.instance_106 = new lib.a_1();
	this.instance_106.parent = this;
	this.instance_106.setTransform(-150,25);

	this.instance_107 = new lib.a_1();
	this.instance_107.parent = this;
	this.instance_107.setTransform(50,25);

	this.instance_108 = new lib.a_1();
	this.instance_108.parent = this;
	this.instance_108.setTransform(-50,25);

	this.instance_109 = new lib.qube_lava_base();
	this.instance_109.parent = this;
	this.instance_109.setTransform(0,25);

	this.instance_110 = new lib.a_1();
	this.instance_110.parent = this;
	this.instance_110.setTransform(125,12.5);

	this.instance_111 = new lib.a_1();
	this.instance_111.parent = this;
	this.instance_111.setTransform(-75,12.5);

	this.instance_112 = new lib.a_1();
	this.instance_112.parent = this;
	this.instance_112.setTransform(-125,12.5);

	this.instance_113 = new lib.a_1();
	this.instance_113.parent = this;
	this.instance_113.setTransform(75,12.5);

	this.instance_114 = new lib.a_1();
	this.instance_114.parent = this;
	this.instance_114.setTransform(-25,12.5);

	this.instance_115 = new lib.a_1();
	this.instance_115.parent = this;
	this.instance_115.setTransform(25,12.5);

	this.instance_116 = new lib.a_1();
	this.instance_116.parent = this;
	this.instance_116.setTransform(150,0);

	this.instance_117 = new lib.a_1();
	this.instance_117.parent = this;
	this.instance_117.setTransform(-150,0);

	this.instance_118 = new lib.a_1();
	this.instance_118.parent = this;
	this.instance_118.setTransform(50,0);

	this.instance_119 = new lib.a_1();
	this.instance_119.parent = this;
	this.instance_119.setTransform(-50,0);

	this.instance_120 = new lib.a_1();
	this.instance_120.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_120},{t:this.instance_119},{t:this.instance_118},{t:this.instance_117},{t:this.instance_116},{t:this.instance_115},{t:this.instance_114},{t:this.instance_113},{t:this.instance_112},{t:this.instance_111},{t:this.instance_110},{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.isoGfx, new cjs.Rectangle(-175,-84,381.5,301), null);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,345.5,40.9);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-27.8,406.5,38.9);


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


(lib.btnHorizontal4 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(43.6,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAABCIgWgNIAGg+IgSAAIACgYIATAAIACgRIAcgPIgEAgIAWAAIgCAYIgWAAIgGA0IAWAAIgCAXg");
	this.shape_1.setTransform(33.8,-1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAQAyIgEgIIgOAIIgYAAIgWgNIAJhWIAcAAIgJBMIAiAAIAIhMIAbAAIgKBjg");
	this.shape_2.setTransform(23.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUAyIgWgOIAHhHIAZgOIA1AAIgDAXIgwAAIgGA1IAxAAIgCAXg");
	this.shape_3.setTransform(12.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAyIgVgNIAHhJIAZgNIAkAAIAVANIgFAvIg2AAIgCAQIA3AAIgDAXgAgMgJIAbAAIACgRIgbAAg");
	this.shape_4.setTransform(1.5,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AARAyIgSgeIgYAeIgdAAIApgyIgegxIAeAAIAQAcIAWgcIAeAAIgoAxIAfAyg");
	this.shape_5.setTransform(-9.6,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBGIAOiLIBTAAIgCAYIg3AAIgDAgIAqAAIgCAXIgrAAIgEAkIA3AAIgCAYg");
	this.shape_6.setTransform(-19.8,-2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgqBKQgUgLgLgUQgMgUAAgXQAAgWAMgUQALgUAUgLQAUgMAWAAQAXAAAUAMQAUALALAUQAMAUAAAWQAAAXgMAUQgLAUgUALQgUAMgXAAQgWAAgUgMgAgdg0QgOAIgJAOQgIAOAAAQQAAAQAIAOQAJAOAOAIQANAJAQAAQAQAAAOgJQAOgIAJgOQAIgOAAgQQAAgQgIgOQgJgOgOgIQgOgIgQAAQgQAAgNAIgAgYAqQgEgCAAgEIAAhHQAAgEAEgCQAEgCADACIA8AkQADACAAADQAAAEgDACIg8AkIgDABIgEgBg");
	this.shape_7.setTransform(-40.2,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_8.setTransform(-1.4,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_9.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_10.setTransform(0.2,-1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_11.setTransform(0.2,-1.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_12.setTransform(0.2,-1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_13.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).wait(2));

	// Layer_1
	this.instance = new lib.btnWideBg("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-21.4,161.7,48.6);


(lib.btnHorizontal3 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(64.7,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_1.setTransform(52.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAOBJIgVgjIgNANIgCAWIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoArIAkA4g");
	this.shape_2.setTransform(41.9,-2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_3.setTransform(30,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANAyIAIhMIgiAAIgIBMIgbAAIAKhjIAXAAIAEAIIAOgIIAZAAIAVANIgJBWg");
	this.shape_4.setTransform(18,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_5.setTransform(6.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrAyIADgXIAyAAIACgQIgcAAIgVgMIADgiIAZgOIA1AAIgDAXIgwAAIgCAPIAcAAIAVAMIgDAjIgZAOg");
	this.shape_6.setTransform(-5.3,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOBJIgVgjIgNANIgCAWIgbAAIAPiRIAbAAIgJBVIABAAIAignIAfAAIgoArIAkA4g");
	this.shape_7.setTransform(-15.7,-2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZAzIgNgIIgOAIIgYAAIgWgOIAIhJIAZgOIAXAAIANAIIAPgIIANAAIgKBlgAgUAcIAiAAIAFg2IghAAg");
	this.shape_8.setTransform(-27.6,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgmBGIAOiLIAbAAIgLBzIAvAAIgCAYg");
	this.shape_9.setTransform(-38.3,-2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgqBKQgUgLgLgUQgMgUAAgXQAAgWAMgUQALgUAUgLQAUgMAWAAQAXAAAUAMQAUALALAUQAMAUAAAWQAAAXgMAUQgLAUgUALQgUAMgXAAQgWAAgUgMgAgdg0QgOAIgJAOQgIAOAAAQQAAAQAIAOQAJAOAOAIQANAJAQAAQAQAAAOgJQAOgIAJgOQAIgOAAgQQAAgQgIgOQgJgOgOgIQgOgIgQAAQgQAAgNAIgAgYAqQgEgCAAgEIAAhHQAAgEAEgCQAEgCADACIA8AkQADACAAADQAAAEgDACIg8AkIgDABIgEgBg");
	this.shape_10.setTransform(-57.7,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// Layer_2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFF00").ss(3,2,0,3).p("ALRAAI2hAA");
	this.shape_11.setTransform(-1.4,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFF00").ss(1,2,0,3).p("ArgCkIgOAAIAKh0IBGhFIg4g3IAKhXIW7AAIgiFHIgMAA");
	this.shape_12.setTransform(0.2,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).wait(2));

	// Layer_4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,153,0,0.6)").s().p("ALQDMI2/AAQgNAAgIgIQgHgHgBgIIgCgDQgEgIAAgIIALh8QABgLAIgIIAugtIggggQgFgEgCgHQgCgHAAgGIALhfQABgLAJgIQAIgHAMAAIXFAAQAIAAAIAEQAHAFAEAHQAEAIgBAJIgkFSIgBAFIAAABQAAANgJAJQgJAIgMAAIAAAAgArai5QgEAEgBAGIgLBeQAAAEABADQABADADADIArAqIg5A4QgEAEgBAFIgLB8QAAAEACAEIADAEQAAAGAEAEQAFAEAGAAIW/AAQAGAAAEgEQAFgFAAgGIAAgDIABgFIAklSQAAgEgCgEQgCgEgDgCQgEgCgEAAI3FAAIAAAAQgGAAgEADgArXCBIAGhNIBEhEQAFgEAAgGQAAgHgFgEIg0gzIAHg8IWTAAIgdEVgAqxheIAvAuQAJAJAAANQAAAMgJAJIhAA/IgFA4IV1AAIAbj3I11AAg");
	this.shape_13.setTransform(0.2,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,153,0,0.4)").s().p("ArvDbQgTAAgNgNQgIgIgEgKIgBgEQgGgLABgNIALh7QACgRALgLIAkgjIgWgVQgHgHgEgKQgDgKABgKIALheQACgRANgMQANgLARAAIXFAAQAMAAALAGQALAHAGAMQAGAMgCAMIgjFSIgBAHQgBASgNAMQgNANgSAAgArkjEQgJAIgBALIgLBfQgBAGADAHQACAHAFAEIAgAgIguAtQgIAIgBALIgLB8QAAAIADAIIACADQACAIAGAHQAJAIANAAIW/AAQAMAAAJgIQAJgJAAgNIAAgBIABgFIAjlSQABgJgDgIQgEgHgIgFQgHgEgIAAI3FAAQgMAAgIAHgArHByIAEg4IBBg/QAJgJAAgMQAAgNgJgJIgvguIAEgnIV1AAIgaD3gAqhhjIApApQAOANAAATQAAASgOAMIg8A9IgDAiIVYAAIAXjZI1XAAg");
	this.shape_14.setTransform(0.2,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,153,0,0.2)").s().p("ALQDqI2/AAQgZAAgSgRQgLgLgEgOIAAgBQgIgPABgRIALh8QACgVAPgPIAZgZIgKgKQgKgKgFgNQgEgNABgOIALheQADgXARgPQARgPAXAAIXFAAQARAAAOAJQAPAJAHAQQAIAPgCARIgjFSIgCAIQgBAWgQAQQgRARgZAAIAAAAgArujPQgNAMgCARIgLBeQgBAKADAKQAEAKAHAHIAWAVIgkAjQgLALgCARIgLB7QgBANAGALIABAEQAEAKAIAIQANANATAAIW/AAQASAAANgNQANgMABgSIABgHIAjlSQACgMgGgMQgGgMgLgHQgLgGgMAAI3FAAQgRAAgNALgAq3BjIADgiIA8g9QAOgMAAgSQAAgTgOgNIgpgpIACgTIVXAAIgXDZgApthFQASASAAAZQAAAYgSARIhFBFIVFAAIAUi7I03AAg");
	this.shape_15.setTransform(0.2,-1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,153,0,0.8)").s().p("ArvC9QgGAAgFgEQgEgEAAgGIgDgEQgCgEAAgEIALh8QABgFADgEIA5g4IgrgqQgCgDgBgDQgBgDAAgEIALheQAAgGAFgEQAEgDAGAAIXFAAQAEAAAEACQADACACAEQACAEAAAEIgkFSIgBAFIAAADQAAAGgFAFQgEAEgGAAgArBhYIA0AzQAFAEAAAHQAAAGgFAEIhEBEIgHBNIWUAAIAdkVI2TAAg");
	this.shape_16.setTransform(0.2,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).wait(2));

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


(lib.btn_Frag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.bendera_motion("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4,0.4,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AgmDIIgHgBIABAAIhxgzIAAAAQgEgBgCgEIAAAAQgDgEAAgEIAAgPQAAgGAFgEIAAAAQADgDADgBIBiguIAAjvQgEgKAPgHIgBAAQAFgDAHAAQAHAAAEACIABABIgBgBQAOAGgCAJIADALQAJAPAQAHIABAAQAUAKAYgDQAagCAXAKQAXAKAPASIAAABQAPATADAOIAAABQACAFgDAEIAAAAQgCAFgFADIAAAAQgFACgFgBIAAgBIgCAAIgCgBQgKgDgKAAIAAAAQgJAAgIAEQgKAEgIAHIAAAAIgTAPIgBABIgNAIIgBAAQgMAIgNAEIAAABIAAAAQgOAFgQAAIgMgBIAAA/IBdAqIAAAAQAEABADAEIAAABQACADAAAFIAAANQAAAFgCADQgCAEgEACIAAAAIhyA3IAAAAIgGABg");
	this.shape.setTransform(3.8,-2.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},2).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51B8B4").s().p("AjGAEIDIhfIDFBYIjIBfg");
	this.shape_1.setTransform(0,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F2E9F0").s().p("AjsAEIDvhxIDqBpIjvBygAjGAEIDFBYIDIhfIjFhYg");
	this.shape_2.setTransform(0,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2E9F0").s().p("AjqDmIAAnLIHVAAIAAHLg");
	this.shape_3.setTransform(0.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-21.3,47.4,43.1);


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
	this.instance = new lib.btnHorizontal3();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnHorizontal3(), 3);

	this.instance_1 = new lib.btnHorizontal4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.5,0.5,1,1,0,0,0,-0.5,0.5);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnHorizontal4(), 3);

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


(lib.mc_frag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,selected:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.btn_Frag();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btn_Frag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFF00").ss(4,0,0,3).p("AAJjGIAADUIDkBlIjvByIjqhpIDohuIAAjUQAAgBACgBQACgBACAAQADAAACABQACABAAABgAAPi0QAMATAVAJQAYALAcgCQAWgDATAJQAUAIANAQQAMAQADAMIgDgBQgMgDgMgBQgMAAgMAFQgMAGgJAIQgJAIgKAHQgGAEgGADQgLAHgMAFQgMAEgNAAQgHAAgHgBQgCAAgCgBQgFgBgFgBIAAiZQACAFADAFg");
	this.shape.setTransform(0,-1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AjsBvIDohvIAAjTIACgCIAEgBIAFABQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABIAADTIDjBmIjvBxgAAYgwIgEgBIgKgCIAAiYIAFAJQAMATAVAJQAYAMAcgDQAWgDATAJQAUAJANAPQAMARAEALIgEgBQgLgDgNAAQgMAAgMAEQgMAGgJAIIgTAPIgMAHQgLAIgMAEQgMAEgNAAIgOgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.7,-23,47.4,44.6);


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


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var strAnsHistory = "";
		var historyLength = 0;
		var myX = 98;
		var myY = 226;
		var myWidth = 338;
		var myHeight = 256;
		var fontSize = 11;
		var myContainer = document.getElementById("dom_overlay_container");
		var divEditor = document.createElement("div");
		divEditor.id = "diveditor";
		var myScale = myContainer.offsetWidth/800;
		//console.log(myScale);
		divEditor.style.width = myWidth * myScale + "px";
		divEditor.style.height = myHeight * myScale + "px";
		divEditor.style.position = "absolute";
		divEditor.style.left = myX * myScale + "px";
		divEditor.style.top = myY * myScale + "px";
		myContainer.appendChild(divEditor);
		var txtArea = document.createElement("textarea");
		var txtCode = "debug();\nfunction debug()\n{\n  var x = 50;\n  if(x > 100)\n  {\n    return 'lesser';\n  }\n  else\n  {\n    return 'greater';\n  }\n}";
		t = document.createTextNode(txtCode);
		txtArea.id = "txt_area";
		txtArea.appendChild(t);
		divEditor.appendChild(txtArea);
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				divEditor.style.width = myWidth * myScale + "px";
				divEditor.style.height = myHeight * myScale + "px";
				divEditor.style.left = myX * myScale + "px";
				divEditor.style.top = myY * myScale + "px";
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
		function onRun(evt){
			editor.save();
			var code = document.getElementById("txt_area").value;
			var hasError = false;
			historyLength++;
			if (historyLength>10){
				var toExtract = strAnsHistory.indexOf("\n")+1;
				strAnsHistory = strAnsHistory.substring(toExtract);
			}
			try {
				var myResult = eval(code);
				strAnsHistory += myResult + " \n";
			} catch (e) {
			    if (e instanceof SyntaxError) {
			        strAnsHistory += "Syntax error: "+ e.message + " \n";
			    } else {
					strAnsHistory += "Syntax error \n";
				}
				hasError = true;
			}
			_this.txtAns.text = strAnsHistory;
			if (myResult=="lesser"){
				_this.btnRun.mouseEnabled = false;
				_this.btnRun.alpha = .5;
				if (historyLength<=2){
					_this.parent.sendScore("(correct code)", 5);
				} else if (historyLength<=4){
					_this.parent.sendScore("(correct code)", 4);
				} else if (historyLength<=6){
					_this.parent.sendScore("(correct code)", 3);
				} else if (historyLength<=8){
					_this.parent.sendScore("(correct code)", 2);
				} else {
					_this.parent.sendScore("(correct code)", 1);
				}
			} else {
				_this.parent.recordAns(code, 1);
			}
		}
		this.btnRun.addEventListener("click", onRun);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// btn
	this.btnRun = new lib.mcBtnExecute();
	this.btnRun.name = "btnRun";
	this.btnRun.parent = this;
	this.btnRun.setTransform(401,526.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnRun).wait(5));

	// output
	this.txtAns = new cjs.Text("", "normal 400 12px 'Muli'");
	this.txtAns.name = "txtAns";
	this.txtAns.lineHeight = 18;
	this.txtAns.lineWidth = 229;
	this.txtAns.parent = this;
	this.txtAns.setTransform(482.1,260);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns);
	}

	this.timeline.addTween(cjs.Tween.get(this.txtAns).wait(5));

	// Output
	this.instance = new lib.ans();
	this.instance.parent = this;
	this.instance.setTransform(583.1,305,1,1,0,0,0,124,82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,222.9,643.6,330.2);


(lib.actMc1c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		userAns = 0;
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
		this.item5.addEventListener("click", selectAns.bind(this, 5));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				//wrong
				_this.parent.sendScore(userAns, 1);
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
	this.btnSubmit.setTransform(537.7,467.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIABIAHABIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape.setTransform(615,399.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAHAIAAAOIAAAyg");
	this.shape_1.setTransform(606.4,401.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_2.setTransform(597.6,401.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_3.setTransform(579.6,400.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAGAIABAOIAAAyg");
	this.shape_4.setTransform(571.2,401.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_5.setTransform(562.4,401.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_6.setTransform(553.6,401.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAHADQAGADAEAEQAFAFABAHQADAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_7.setTransform(544.8,401.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_8.setTransform(536,401.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAmQgGgDgFgFQgFgFgDgHQgCgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAGADAFAFQAFAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgDAEQgDAEAAAFQgCAFAAAFQAAAHACAGQABAFADAEQADAEAEABQAEACAFAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLQAAgGgBgGQgCgFgEgEQgCgDgFgCQgEgCgFAAQgFAAgFACg");
	this.shape_9.setTransform(527.2,401.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAGAAACAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_10.setTransform(518.4,401.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_11.setTransform(632.4,379.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_12.setTransform(623.9,380.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_13.setTransform(615.2,380.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA4IAAhtIALAAIABANQAHgJAGgCQAHgEAGAAQAHAAAFADQAFADADAFQAEAFACAHQABAIAAAJQAAAKgCAHQgEAHgFAFQgEAGgHACQgIADgHAAIgIgBIgHgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGABgPIgBgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_14.setTransform(606.6,382.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_15.setTransform(597.6,380.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_16.setTransform(589.2,380.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape_17.setTransform(571,379.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgEgFQgDgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAHAIAAAOIAAAyg");
	this.shape_18.setTransform(562.4,380.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgCgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgOABQgKAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgDgCgGAAQgEAAgDACg");
	this.shape_19.setTransform(553.6,380.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_20.setTransform(712,359.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAFAFABAHQADAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_21.setTransform(703.2,359.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_22.setTransform(694.4,359.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_23.setTransform(686,359.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRA3QgGgBgFgDQgEgDgCgEQgCgEAAgEQAAgGACgEQADgFAFgEIgDgBIgCgDIgCgFIAAgDQAAgFADgDQABgEAEgEIgCgEIgCgEIgCgDIgBgGQAAgGADgFQACgFAEgEQAEgEAGgCQAFgBAIAAIAEAAIAFABIAcAAIAAALIgMAAIADAGIABAJQAAAFgCAFQgDAFgEAEQgEAEgFACQgGABgFABIgKgBIgHgDIgCAEIgBADQAAAEADACQADABAFAAIATABQAGAAAEACQAGABADADQAEACACAEQACADAAAGQAAAEgCAGQgDAEgFAEQgEADgHACQgIACgJAAQgJAAgHgBgAgRAZIgDADIgBAEIAAADQgBAFAGADQAGADAKgBIAKgBIAHgDQADgCABgCIABgFQAAgFgEgCQgEgDgHAAIgUAAIgEADgAgIgsQgDABgCADQgCACgCADIAAAHIAAAHIAEAFIAFAEIAIABQACgBAEgBQADgBACgDIAEgFIABgGQgBgEgBgDQgBgEgDgBIgEgEIgGgBQgEAAgEABg");
	this.shape_24.setTransform(676.9,361.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_25.setTransform(668,359.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgFQgGAGAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAIg");
	this.shape_26.setTransform(659,358.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAxQgIgDgEgGQgFgHgCgKQgDgKAAgNQAAgLADgKQACgJAEgHQAFgHAHgEQAIgDAIAAQAIAAAGACQAIADAEAHQAFAGACAKQADALAAAMQAAALgCAKQgCAKgGAHQgEAHgHAEQgIADgIAAQgIAAgGgDgAgUAWIADAIIAFAGIAGADQADACADAAQAFAAAEgDQAFgDADgFQADgEACgIQABgIABgJIgBgFIAAgFgAgJgmQgEAEgDAEQgDAGgBAHQgCAIAAAJIAAAEIAAAFIAqgfIgDgHIgEgGIgGgEQgDgBgEAAQgFAAgEACg");
	this.shape_27.setTransform(641.6,358.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcA0IAAgMIAJAAQAKAAAIgCQAGgCAFgEQAFgEACgGQADgFABgIIAAgDQgFADgGACQgGACgHAAQgIAAgFgDQgGgCgFgEQgEgEgBgFQgCgFAAgHQAAgHADgGQACgGAFgFQAFgEAGgDQAGgDAHAAQAIAAAGADQAGACAFAGQAFAFACAJQADAJAAANQAAAOgEALQgDAKgHAHQgHAHgKADQgKAEgOAAgAgHgmQgFABgCADQgDADgCAEQgBAEAAAFQAAAFABAEQABADADADQACADAEAAQADACAGAAIAFgBIAGgBIAFgCIAFgCQAAgKgBgHQgCgHgDgEQgCgEgFgCQgDgCgFAAQgEAAgDACg");
	this.shape_28.setTransform(632.7,358.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgFACIgFAFIgHAIIAAAzIgNAAIAAhNIAMAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIABAOIAAAyg");
	this.shape_29.setTransform(615.2,359.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_30.setTransform(606.8,359.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASANABIAFgBIAEgDIAGgFIAHgIIAAgzIANAAIAABOIgLAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_31.setTransform(597.6,360);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_32.setTransform(588.4,358.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_33.setTransform(685.6,339.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_34.setTransform(676.8,339.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAg2IAAgHIAAgEIgCgCIgCAAIgDABIgCACIgEAGIgFAJIAAAxIgMAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQAEADgBAJIAEgHIAEgFIAFgDQACgCADAAQAPAAAAAXIAAA4g");
	this.shape_35.setTransform(668,339.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeA4IAAgMIAZAAIAAg2IgXAAIAAgMIAkAAIAABCIAYAAIAAAMgAgEgiIgEgCIgCgEIAAgEIAAgEIACgDIAEgDIAEgBIADABIAEADIACADIAAAEIAAAEIgCAEIgEACIgDABIgEgBg");
	this.shape_36.setTransform(659.3,337.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_37.setTransform(650,338);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghA0IAAgMIAbgbIAJgLIAHgHIADgIIAAgHIgBgHIgDgGQgCgDgDgBQgEgCgDAAQgHAAgFADIgKAIIgHgJQAFgGAIgEQAHgEAKAAQAGAAAGACQAFACAFAEQAEAEACAGQACAFAAAHQAAAGgCAFIgEAKIgIAJIgMAMIgRASIAxAAIAAANg");
	this.shape_38.setTransform(632.9,338);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggA4IAAhtIAMAAIAAANQAGgJAHgCQAGgEAHAAQAHAAAFADQAFADADAFQAEAFACAHQABAIABAJQAAAKgDAHQgEAHgEAFQgGAGgHACQgGADgIAAIgHgBIgIgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGAAgPIAAgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_39.setTransform(615.4,340.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIAAgDIgCgCIgDAAIgDABIgCACIgEAGIgEAJIAAAxIgLAAIAAg2IAAgHIgCgEIgBgCIgCAAIgDABIgDACIgDAGIgEAJIAAAxIgNAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAHAAACAFQADADABAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_40.setTransform(606.4,339.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASANABIAFgBIAEgDIAGgFIAHgIIAAgzIANAAIAABOIgLAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_41.setTransform(597.6,339.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSBHIgKgDIAAgNIAGACIAFACIAGABIAGABQAHAAAGgGQAFgGAAgLIAAhBIgmAAIAAgLIAzAAIAABMQAAAIgBAGQgDAHgFAEQgEAFgGACQgGACgIAAIgLgBgAAOgyIgDgDIgDgDIgBgEIABgFIADgDIADgCIAEgBIAFABIADACIACADIABAFIgBAEIgCADIgDADIgFAAIgEAAg");
	this.shape_42.setTransform(588.3,339.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_43.setTransform(685.6,318.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghA4IAAhtIAMAAIABAMQAHgIAGgCQAHgEAGAAQAHAAAFADQAFADAEAFQADAFACAHQABAIAAAJQAAAKgDAHQgCAHgGAFQgFAGgGACQgIADgHAAIgIgBIgHgBIAAAhgAAAgqQgEAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAGgIQAHgGAAgPIgBgLIgDgJQgCgEgDgCQgDgCgFAAIgDABg");
	this.shape_44.setTransform(677,320.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_45.setTransform(668,318.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_46.setTransform(658.8,317.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_47.setTransform(650.4,318.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAJAzIAAgWIgwAAIAAgNIAqhCIAUAAIAABCIARAAIAAANIgRAAIAAAWgAgaAQIAjAAIAAg1g");
	this.shape_48.setTransform(632.8,317.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_49.setTransform(615.2,318.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_50.setTransform(606.4,318.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgPAmQgGgDgFgFQgFgFgCgHQgDgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAGADAGAFQAEAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgCAEQgEAEgBAFQgBAFAAAFQAAAHABAGQACAFAEAEQACAEAEABQAFACAEAAQAGAAAFgCQAEgDACgEQAEgEABgFIABgLQAAgGgBgGQgCgFgEgEQgDgDgDgCQgFgCgFAAQgFAAgFACg");
	this.shape_51.setTransform(597.6,318.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAg2IAAgHIAAgEIgCgCIgCAAIgDABIgCACIgEAGIgFAJIAAAxIgMAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQAEADgBAJIAEgHIAEgFIAFgDQACgCADAAQAPAAAAAXIAAA4g");
	this.shape_52.setTransform(588.8,318.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_53.setTransform(668,297.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgFgFgCgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_54.setTransform(659.2,297.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAZAoIAAg3IgBgHIAAgDIgCgCIgDAAIgDABIgCACIgEAGIgEAJIAAAxIgMAAIAAg2IAAgHIgBgEIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAGAAADAFQAEADAAAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_55.setTransform(650.4,297.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfA4IAAgMIAaAAIAAg2IgXAAIAAgMIAkAAIAABCIAXAAIAAAMgAgEgiIgDgCIgDgEIgBgEIABgEIADgDIADgDIAEgBIADABIADADIADADIABAEIgBAEIgDAEIgDACIgDABIgEgBg");
	this.shape_56.setTransform(641.7,296.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_57.setTransform(632.4,296.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgWA0IgJgBIAAgMIAKABIALAAIAMAAQAGgCADgCQADgDACgEQACgDgBgFQAAgFgBgDQgCgDgEgCIgIgDIgJgBIgMAAIAAgKIAMAAQAEAAADgBQAEgBADgDQADgCABgDQACgEAAgEQgBgIgFgEQgEgDgJgBIgLABIgLAEIAAgNIAGgBIAFgBIAGgBIAGAAQAHAAAGACQAGABAEAEQAFADACAEQACAFAAAGQAAAJgEAFQgFAHgIADIAIACIAHAEQADADACAEQACAEAAAFQAAAHgDAFQgDAHgFAEQgFAEgJADQgHACgLAAIgLAAg");
	this.shape_58.setTransform(615.3,296.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_59.setTransform(597.2,296.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_60.setTransform(588.7,297.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgFgFgCgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_61.setTransform(580,297.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggA4IAAhtIAMAAIAAAMQAHgIAGgCQAGgEAHAAQAHAAAFADQAFADADAFQAEAFACAIQACAHgBAJQAAAKgCAHQgDAHgFAFQgGAGgGACQgIADgHAAIgIgBIgHgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGABgPIgBgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_62.setTransform(571.4,299.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_63.setTransform(562.4,297.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_64.setTransform(554,297.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_65.setTransform(685.6,277.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_66.setTransform(676.8,277.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_67.setTransform(668,277.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_68.setTransform(659.6,277.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgRA3QgHgBgEgDQgEgDgCgEQgCgEAAgEQAAgGADgEQACgFAGgEIgEgBIgCgDIgCgFIAAgDQAAgFACgDQACgEAEgEIgCgEIgDgEIgBgDIgBgGQABgGACgFQACgFAEgEQAEgEAGgCQAFgBAIAAIAEAAIAFABIAcAAIAAALIgNAAIAEAGIABAJQAAAFgCAFQgDAFgEAEQgDAEgGACQgGABgFABIgKgBIgGgDIgDAEIgBADQAAAEADABQACACAGAAIATABQAGAAAEACQAFABAEADQAEACACAEQACADAAAGQAAAEgCAGQgDAEgEAEQgFADgIACQgHACgJAAQgJAAgHgBgAgRAZIgDADIgCAEIAAADQAAAFAGADQAGADAKgBIAKgBIAHgDQADgCABgCIABgFQAAgFgDgCQgFgDgIAAIgTAAIgEADgAgIgsQgDABgCADQgDACAAADIgBAHIABAHIADAFIAGAEIAHABQACgBADgBQAEgBACgDIADgFIABgGQAAgEgBgDQgBgEgCgBIgGgEIgFgBQgFAAgDABg");
	this.shape_69.setTransform(650.5,278.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_70.setTransform(641.6,277.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape_71.setTransform(632.6,275.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPAxQgGgDgFgGQgFgHgDgKQgCgKAAgNQAAgLACgKQADgJAFgHQAEgHAHgEQAHgDAJAAQAIAAAHACQAGADAFAHQAFAGADALQACAKAAAMQAAALgCALQgDAJgFAHQgEAHgHADQgHAEgJAAQgIAAgHgDgAgTAWIACAIIAFAGIAFADQAEACADAAQAGAAADgDQAFgDADgEQADgFABgIQADgIAAgJIgBgFIAAgFgAgJgmQgEAEgDAEQgDAGgBAHQgCAIgBAJIAAAEIABAFIAqgfIgDgHIgEgGIgGgEQgDgBgEAAQgFAAgEACg");
	this.shape_72.setTransform(615.2,276);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgcA0IAAgMIAJAAQALAAAHgCQAGgCAFgEQAFgEACgGQADgFABgIIAAgDQgFADgGACQgHACgGAAQgIAAgGgDQgGgCgEgEQgDgEgCgFQgCgFAAgHQAAgHADgGQACgGAEgFQAGgEAGgDQAGgDAHAAQAIAAAGADQAHACAEAGQAFAFADAJQACAJAAANQAAAOgDALQgEAKgHAHQgHAHgKADQgKAEgNAAgAgIgmQgEABgCADQgDADgCAEQgBAEAAAFQAAAFABAEQACADACADQACADAEAAQADACAGAAIAFgBIAGgBIAGgCIAEgCQAAgKgCgHQgBgHgCgEQgEgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_73.setTransform(606.3,275.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgWAHIAAgNIAtAAIAAANg");
	this.shape_74.setTransform(597.6,276.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgHAAIgEABIgFACIgFAFIgHAIIAAAzIgOAAIAAhNIANAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIAAAOIAAAyg");
	this.shape_75.setTransform(580,277.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_76.setTransform(571.6,277.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASAOABIADgBIAGgDIAFgFIAHgIIAAgzIAOAAIAABOIgMAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_77.setTransform(562.4,277.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_78.setTransform(553.2,275.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_79.setTransform(676.4,255.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_80.setTransform(668.4,256.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_81.setTransform(659.1,256.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_82.setTransform(650,255.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_83.setTransform(641.6,256.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_84.setTransform(623.6,255.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgFACIgFAFIgHAIIAAAzIgNAAIAAhNIAMAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIABAOIAAAyg");
	this.shape_85.setTransform(615.2,256.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgCgIQgDgHAAgKQAAgHADgHQACgIAEgFQAFgGAHgDQAGgEAIAAQAIAAAHADQAFADAFAEQAFAFACAHQACAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgCgFQgBgEgCgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_86.setTransform(606.4,256.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAFgDIAFgBQAGAAACAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_87.setTransform(597.6,256.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_88.setTransform(588.8,256.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_89.setTransform(580,256.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAmQgHgDgEgFQgFgFgDgHQgCgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAHADAEAFQAFAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgDAEQgCAEgBAFQgCAFAAAFQAAAHACAGQABAFADAEQADAEAEABQAEACAFAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLQAAgGgBgGQgDgFgDgEQgCgDgFgCQgEgCgFAAQgFAAgFACg");
	this.shape_90.setTransform(571.2,256.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAHAAACAFQADADABAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_91.setTransform(562.4,256.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgEgFQgDgEgHAAIgEABIgFACIgFAFIgHAIIAAAzIgOAAIAAhNIANAAIAAAMIAHgHIAGgEIAGgCIAGgBQAMAAAHAHQAFAIAAAOIAAAyg");
	this.shape_92.setTransform(544.8,256.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQAAAMAGAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_93.setTransform(536,256.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AASA3IAAgyQAAgIgDgEQgEgFgGAAIgFABIgEACIgGAFIgHAHIAAA0IgNAAIAAhtIANAAIAAAgIgBAMIAHgGIAGgFIAFgCIAHgBQALAAAHAIQAGAHABANIAAAzg");
	this.shape_94.setTransform(527.2,254.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAOAnIgMghIgCgHIgCAIIgLAgIgQAAIgLhNIANAAIAGA0IACAMIAEgKIALgjIAIAAIANAiIAEALIABgMIAGg0IANAAIgLBNg");
	this.shape_95.setTransform(518.4,256.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AgPAyQgGgCgEgCQgFgEgCgEQgCgFAAgGQAAgJAFgHQAGgHAKgFQgKgEgEgHQgFgGAAgIQAAgFACgEQACgFAEgDQAFgEAGgCQAGgCAHAAQAIgBAGACQAGACAEADQAEADACAEQACAFAAAFQAAAKgFAFQgFAHgJAEIAJAFIAGAGQADADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgEADgHABQgGACgHAAQgIAAgHgCgAgJAKIgGAFIgDAGIgBAFQAAAEABACIAEAFIAHADIAHABIAIgBIAGgCIAEgFQACgDAAgDIgBgGQgBgDgDgDQgCgDgEgCIgJgGIgJAGgAgNglQgFADAAAIIABAFIAEAFQACACAEACIAIAFQAJgEAEgFQAEgEAAgGQAAgHgFgEQgEgDgJAAQgIAAgFADg");
	this.shape_96.setTransform(490.4,400.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AgXAzIAshZIg3AAIAAgMIBFAAIAAAMIgqBZg");
	this.shape_97.setTransform(490.4,379.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AgOAxQgHgDgEgFQgFgGgCgIQgCgJAAgMIABgOQABgHACgHQADgGADgFQAEgGAGgEQAGgEAIgCQAHgCAKAAIAKAAIAAAMIgLAAQgJAAgHACQgFACgFAEQgEAEgDAGQgCAGgBAHIAAADQAFgDAGgCQAHgCAGAAQAIAAAGADQAGACAEAEQADADACAGQACAFAAAHQAAAHgCAGQgDAGgFAFQgEAEgHADQgGADgIAAQgIAAgGgDgAgEAAIgGAAIgFADIgFACQAAAKABAHQACAHADAEQACAEAEACQAEABAFAAIAIgBQAEgBACgDIAFgHQABgEAAgFQAAgFgBgEQgBgDgDgDIgGgEQgDgBgGAAIgFABg");
	this.shape_98.setTransform(490.5,358.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AgPA0IgGgBIgEAAIgFgBIAAgMIAJABIALABQAHAAAEgCQAFgBAEgDQADgDABgEQACgEAAgEQABgKgHgEQgHgFgMAAIgUAAIAAgzIA2AAIAAAMIgoAAIAAAdIAJAAQAGAAAGABQAIABAFAEQAGADADAFQADAFAAAJQAAAHgDAGQgDAHgGAEQgGAFgIACQgGADgKAAIgEAAg");
	this.shape_99.setTransform(490.5,338.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AAJAzIAAgWIgwAAIAAgNIAqhCIAUAAIAABCIARAAIAAANIgRAAIAAAWgAgaAQIAjAAIAAg1g");
	this.shape_100.setTransform(490.4,317.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AgWA0IgJgBIAAgMIAKABIALAAIAMAAQAGgCADgCQADgDACgEQABgDAAgFQAAgFgCgDQgBgDgDgCIgIgDIgKgBIgMAAIAAgKIAMAAQAEAAAEgBQAEgBACgDQACgCACgDQABgEABgEQAAgIgGgEQgEgDgJgBIgKABIgNAEIAAgNIAHgBIAGgBIAFgBIAGAAQAHAAAGACQAGABAFAEQAEADACAEQACAFAAAGQAAAJgEAFQgFAHgIADIAIACIAHAEQADADACAEQACAEAAAFQAAAHgDAFQgCAHgGAEQgGAEgIADQgHACgLAAIgLAAg");
	this.shape_101.setTransform(490.5,296.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#666666").s().p("AghA0IAAgMIAbgbIAJgLIAHgHIADgIIAAgHIgBgHIgDgGQgCgDgDgBQgEgCgDAAQgHAAgFADIgKAIIgHgJQAFgGAIgEQAHgEAKAAQAGAAAGACQAFACAFAEQAEAEACAGQACAFAAAHQAAAGgCAFIgEAKIgIAJIgMAMIgRASIAxAAIAAANg");
	this.shape_102.setTransform(490.5,275.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AgdAzIAAgMIAaAAIAAhKIgZANIgFgLIAhgRIALAAIAABZIAXAAIAAAMg");
	this.shape_103.setTransform(490.4,255.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CCCCCC").s().p("Ah8NcIAA63ID5AAIAAa3g");
	this.shape_104.setTransform(490.5,327.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("A0nN/IAA79MApPAAAIAAb9g");
	this.shape_105.setTransform(606,327.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.item4 = new lib.mc_frag();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(146.3,360.2,1,1,0,0,0,0,-0.8);

	this.item5 = new lib.mc_frag();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(296,284.9,1,1,0,0,0,0,-0.8);

	this.item3 = new lib.mc_frag();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(422,319.9,1,1,0,0,0,0,-0.8);

	this.item1 = new lib.mc_frag();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(121,319.4,1,1,0,0,0,0,-0.8);

	this.item2 = new lib.mc_frag();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(270.5,244.9,1,1,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item1},{t:this.item3},{t:this.item5},{t:this.item4}]}).wait(1));

	// Layer_3
	this.instance = new lib.isoGfx();
	this.instance.parent = this;
	this.instance.setTransform(246.1,328.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1c, new cjs.Rectangle(71.1,224.2,667,321.3), null);


(lib.actMc1b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		userAns = 0;
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
		this.item5.addEventListener("click", selectAns.bind(this, 5));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				//wrong
				_this.parent.sendScore(userAns, 1);
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
	this.btnSubmit.setTransform(537.7,467.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIABIAHABIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape.setTransform(615,399.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAHAIAAAOIAAAyg");
	this.shape_1.setTransform(606.4,401.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_2.setTransform(597.6,401.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_3.setTransform(579.6,400.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAGAIABAOIAAAyg");
	this.shape_4.setTransform(571.2,401.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_5.setTransform(562.4,401.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_6.setTransform(553.6,401.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAHADQAGADAEAEQAFAFABAHQADAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_7.setTransform(544.8,401.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_8.setTransform(536,401.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAmQgGgDgFgFQgFgFgDgHQgCgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAGADAFAFQAFAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgDAEQgDAEAAAFQgCAFAAAFQAAAHACAGQABAFADAEQADAEAEABQAEACAFAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLQAAgGgBgGQgCgFgEgEQgCgDgFgCQgEgCgFAAQgFAAgFACg");
	this.shape_9.setTransform(527.2,401.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAGAAACAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_10.setTransform(518.4,401.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_11.setTransform(632.4,379.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_12.setTransform(623.9,380.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_13.setTransform(615.2,380.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA4IAAhtIALAAIABANQAHgJAGgCQAHgEAGAAQAHAAAFADQAFADADAFQAEAFACAHQABAIAAAJQAAAKgCAHQgEAHgFAFQgEAGgHACQgIADgHAAIgIgBIgHgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGABgPIgBgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_14.setTransform(606.6,382.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_15.setTransform(597.6,380.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_16.setTransform(589.2,380.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape_17.setTransform(571,379.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgEgFQgDgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAHAIAAAOIAAAyg");
	this.shape_18.setTransform(562.4,380.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgCgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgOABQgKAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgDgCgGAAQgEAAgDACg");
	this.shape_19.setTransform(553.6,380.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_20.setTransform(712,359.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAFAFABAHQADAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_21.setTransform(703.2,359.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_22.setTransform(694.4,359.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_23.setTransform(686,359.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRA3QgGgBgFgDQgEgDgCgEQgCgEAAgEQAAgGACgEQADgFAFgEIgDgBIgCgDIgCgFIAAgDQAAgFADgDQABgEAEgEIgCgEIgCgEIgCgDIgBgGQAAgGADgFQACgFAEgEQAEgEAGgCQAFgBAIAAIAEAAIAFABIAcAAIAAALIgMAAIADAGIABAJQAAAFgCAFQgDAFgEAEQgEAEgFACQgGABgFABIgKgBIgHgDIgCAEIgBADQAAAEADACQADABAFAAIATABQAGAAAEACQAGABADADQAEACACAEQACADAAAGQAAAEgCAGQgDAEgFAEQgEADgHACQgIACgJAAQgJAAgHgBgAgRAZIgDADIgBAEIAAADQgBAFAGADQAGADAKgBIAKgBIAHgDQADgCABgCIABgFQAAgFgEgCQgEgDgHAAIgUAAIgEADgAgIgsQgDABgCADQgCACgCADIAAAHIAAAHIAEAFIAFAEIAIABQACgBAEgBQADgBACgDIAEgFIABgGQgBgEgBgDQgBgEgDgBIgEgEIgGgBQgEAAgEABg");
	this.shape_24.setTransform(676.9,361.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_25.setTransform(668,359.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgFQgGAGAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAIg");
	this.shape_26.setTransform(659,358.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAxQgIgDgEgGQgFgHgCgKQgDgKAAgNQAAgLADgKQACgJAEgHQAFgHAHgEQAIgDAIAAQAIAAAGACQAIADAEAHQAFAGACAKQADALAAAMQAAALgCAKQgCAKgGAHQgEAHgHAEQgIADgIAAQgIAAgGgDgAgUAWIADAIIAFAGIAGADQADACADAAQAFAAAEgDQAFgDADgFQADgEACgIQABgIABgJIgBgFIAAgFgAgJgmQgEAEgDAEQgDAGgBAHQgCAIAAAJIAAAEIAAAFIAqgfIgDgHIgEgGIgGgEQgDgBgEAAQgFAAgEACg");
	this.shape_27.setTransform(641.6,358.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcA0IAAgMIAJAAQAKAAAIgCQAGgCAFgEQAFgEACgGQADgFABgIIAAgDQgFADgGACQgGACgHAAQgIAAgFgDQgGgCgFgEQgEgEgBgFQgCgFAAgHQAAgHADgGQACgGAFgFQAFgEAGgDQAGgDAHAAQAIAAAGADQAGACAFAGQAFAFACAJQADAJAAANQAAAOgEALQgDAKgHAHQgHAHgKADQgKAEgOAAgAgHgmQgFABgCADQgDADgCAEQgBAEAAAFQAAAFABAEQABADADADQACADAEAAQADACAGAAIAFgBIAGgBIAFgCIAFgCQAAgKgBgHQgCgHgDgEQgCgEgFgCQgDgCgFAAQgEAAgDACg");
	this.shape_28.setTransform(632.7,358.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgFACIgFAFIgHAIIAAAzIgNAAIAAhNIAMAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIABAOIAAAyg");
	this.shape_29.setTransform(615.2,359.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_30.setTransform(606.8,359.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASANABIAFgBIAEgDIAGgFIAHgIIAAgzIANAAIAABOIgLAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_31.setTransform(597.6,360);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_32.setTransform(588.4,358.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_33.setTransform(685.6,339.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_34.setTransform(676.8,339.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAg2IAAgHIAAgEIgCgCIgCAAIgDABIgCACIgEAGIgFAJIAAAxIgMAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQAEADgBAJIAEgHIAEgFIAFgDQACgCADAAQAPAAAAAXIAAA4g");
	this.shape_35.setTransform(668,339.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeA4IAAgMIAZAAIAAg2IgXAAIAAgMIAkAAIAABCIAYAAIAAAMgAgEgiIgEgCIgCgEIAAgEIAAgEIACgDIAEgDIAEgBIADABIAEADIACADIAAAEIAAAEIgCAEIgEACIgDABIgEgBg");
	this.shape_36.setTransform(659.3,337.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_37.setTransform(650,338);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghA0IAAgMIAbgbIAJgLIAHgHIADgIIAAgHIgBgHIgDgGQgCgDgDgBQgEgCgDAAQgHAAgFADIgKAIIgHgJQAFgGAIgEQAHgEAKAAQAGAAAGACQAFACAFAEQAEAEACAGQACAFAAAHQAAAGgCAFIgEAKIgIAJIgMAMIgRASIAxAAIAAANg");
	this.shape_38.setTransform(632.9,338);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggA4IAAhtIAMAAIAAANQAGgJAHgCQAGgEAHAAQAHAAAFADQAFADADAFQAEAFACAHQABAIABAJQAAAKgDAHQgEAHgEAFQgGAGgHACQgGADgIAAIgHgBIgIgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGAAgPIAAgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_39.setTransform(615.4,340.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIAAgDIgCgCIgDAAIgDABIgCACIgEAGIgEAJIAAAxIgLAAIAAg2IAAgHIgCgEIgBgCIgCAAIgDABIgDACIgDAGIgEAJIAAAxIgNAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAHAAACAFQADADABAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_40.setTransform(606.4,339.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASANABIAFgBIAEgDIAGgFIAHgIIAAgzIANAAIAABOIgLAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_41.setTransform(597.6,339.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSBHIgKgDIAAgNIAGACIAFACIAGABIAGABQAHAAAGgGQAFgGAAgLIAAhBIgmAAIAAgLIAzAAIAABMQAAAIgBAGQgDAHgFAEQgEAFgGACQgGACgIAAIgLgBgAAOgyIgDgDIgDgDIgBgEIABgFIADgDIADgCIAEgBIAFABIADACIACADIABAFIgBAEIgCADIgDADIgFAAIgEAAg");
	this.shape_42.setTransform(588.3,339.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_43.setTransform(685.6,318.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghA4IAAhtIAMAAIABAMQAHgIAGgCQAHgEAGAAQAHAAAFADQAFADAEAFQADAFACAHQABAIAAAJQAAAKgDAHQgCAHgGAFQgFAGgGACQgIADgHAAIgIgBIgHgBIAAAhgAAAgqQgEAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAGgIQAHgGAAgPIgBgLIgDgJQgCgEgDgCQgDgCgFAAIgDABg");
	this.shape_44.setTransform(677,320.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_45.setTransform(668,318.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_46.setTransform(658.8,317.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_47.setTransform(650.4,318.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAJAzIAAgWIgwAAIAAgNIAqhCIAUAAIAABCIARAAIAAANIgRAAIAAAWgAgaAQIAjAAIAAg1g");
	this.shape_48.setTransform(632.8,317.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_49.setTransform(615.2,318.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_50.setTransform(606.4,318.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgPAmQgGgDgFgFQgFgFgCgHQgDgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAGADAGAFQAEAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgCAEQgEAEgBAFQgBAFAAAFQAAAHABAGQACAFAEAEQACAEAEABQAFACAEAAQAGAAAFgCQAEgDACgEQAEgEABgFIABgLQAAgGgBgGQgCgFgEgEQgDgDgDgCQgFgCgFAAQgFAAgFACg");
	this.shape_51.setTransform(597.6,318.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAg2IAAgHIAAgEIgCgCIgCAAIgDABIgCACIgEAGIgFAJIAAAxIgMAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQAEADgBAJIAEgHIAEgFIAFgDQACgCADAAQAPAAAAAXIAAA4g");
	this.shape_52.setTransform(588.8,318.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_53.setTransform(668,297.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgFgFgCgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_54.setTransform(659.2,297.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAZAoIAAg3IgBgHIAAgDIgCgCIgDAAIgDABIgCACIgEAGIgEAJIAAAxIgMAAIAAg2IAAgHIgBgEIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAGAAADAFQAEADAAAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_55.setTransform(650.4,297.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfA4IAAgMIAaAAIAAg2IgXAAIAAgMIAkAAIAABCIAXAAIAAAMgAgEgiIgDgCIgDgEIgBgEIABgEIADgDIADgDIAEgBIADABIADADIADADIABAEIgBAEIgDAEIgDACIgDABIgEgBg");
	this.shape_56.setTransform(641.7,296.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_57.setTransform(632.4,296.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgWA0IgJgBIAAgMIAKABIALAAIAMAAQAGgCADgCQADgDACgEQACgDgBgFQAAgFgBgDQgCgDgEgCIgIgDIgJgBIgMAAIAAgKIAMAAQAEAAADgBQAEgBADgDQADgCABgDQACgEAAgEQgBgIgFgEQgEgDgJgBIgLABIgLAEIAAgNIAGgBIAFgBIAGgBIAGAAQAHAAAGACQAGABAEAEQAFADACAEQACAFAAAGQAAAJgEAFQgFAHgIADIAIACIAHAEQADADACAEQACAEAAAFQAAAHgDAFQgDAHgFAEQgFAEgJADQgHACgLAAIgLAAg");
	this.shape_58.setTransform(615.3,296.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_59.setTransform(597.2,296.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_60.setTransform(588.7,297.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgFgFgCgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_61.setTransform(580,297.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggA4IAAhtIAMAAIAAAMQAHgIAGgCQAGgEAHAAQAHAAAFADQAFADADAFQAEAFACAIQACAHgBAJQAAAKgCAHQgDAHgFAFQgGAGgGACQgIADgHAAIgIgBIgHgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGABgPIgBgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_62.setTransform(571.4,299.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_63.setTransform(562.4,297.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_64.setTransform(554,297.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_65.setTransform(685.6,277.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_66.setTransform(676.8,277.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_67.setTransform(668,277.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_68.setTransform(659.6,277.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgRA3QgHgBgEgDQgEgDgCgEQgCgEAAgEQAAgGADgEQACgFAGgEIgEgBIgCgDIgCgFIAAgDQAAgFACgDQACgEAEgEIgCgEIgDgEIgBgDIgBgGQABgGACgFQACgFAEgEQAEgEAGgCQAFgBAIAAIAEAAIAFABIAcAAIAAALIgNAAIAEAGIABAJQAAAFgCAFQgDAFgEAEQgDAEgGACQgGABgFABIgKgBIgGgDIgDAEIgBADQAAAEADABQACACAGAAIATABQAGAAAEACQAFABAEADQAEACACAEQACADAAAGQAAAEgCAGQgDAEgEAEQgFADgIACQgHACgJAAQgJAAgHgBgAgRAZIgDADIgCAEIAAADQAAAFAGADQAGADAKgBIAKgBIAHgDQADgCABgCIABgFQAAgFgDgCQgFgDgIAAIgTAAIgEADgAgIgsQgDABgCADQgDACAAADIgBAHIABAHIADAFIAGAEIAHABQACgBADgBQAEgBACgDIADgFIABgGQAAgEgBgDQgBgEgCgBIgGgEIgFgBQgFAAgDABg");
	this.shape_69.setTransform(650.5,278.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_70.setTransform(641.6,277.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape_71.setTransform(632.6,275.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPAxQgGgDgFgGQgFgHgDgKQgCgKAAgNQAAgLACgKQADgJAFgHQAEgHAHgEQAHgDAJAAQAIAAAHACQAGADAFAHQAFAGADALQACAKAAAMQAAALgCALQgDAJgFAHQgEAHgHADQgHAEgJAAQgIAAgHgDgAgTAWIACAIIAFAGIAFADQAEACADAAQAGAAADgDQAFgDADgEQADgFABgIQADgIAAgJIgBgFIAAgFgAgJgmQgEAEgDAEQgDAGgBAHQgCAIgBAJIAAAEIABAFIAqgfIgDgHIgEgGIgGgEQgDgBgEAAQgFAAgEACg");
	this.shape_72.setTransform(615.2,276);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgcA0IAAgMIAJAAQALAAAHgCQAGgCAFgEQAFgEACgGQADgFABgIIAAgDQgFADgGACQgHACgGAAQgIAAgGgDQgGgCgEgEQgDgEgCgFQgCgFAAgHQAAgHADgGQACgGAEgFQAGgEAGgDQAGgDAHAAQAIAAAGADQAHACAEAGQAFAFADAJQACAJAAANQAAAOgDALQgEAKgHAHQgHAHgKADQgKAEgNAAgAgIgmQgEABgCADQgDADgCAEQgBAEAAAFQAAAFABAEQACADACADQACADAEAAQADACAGAAIAFgBIAGgBIAGgCIAEgCQAAgKgCgHQgBgHgCgEQgEgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_73.setTransform(606.3,275.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgWAHIAAgNIAtAAIAAANg");
	this.shape_74.setTransform(597.6,276.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgHAAIgEABIgFACIgFAFIgHAIIAAAzIgOAAIAAhNIANAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIAAAOIAAAyg");
	this.shape_75.setTransform(580,277.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_76.setTransform(571.6,277.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASAOABIADgBIAGgDIAFgFIAHgIIAAgzIAOAAIAABOIgMAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_77.setTransform(562.4,277.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_78.setTransform(553.2,275.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_79.setTransform(676.4,255.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_80.setTransform(668.4,256.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_81.setTransform(659.1,256.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_82.setTransform(650,255.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_83.setTransform(641.6,256.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_84.setTransform(623.6,255.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgFACIgFAFIgHAIIAAAzIgNAAIAAhNIAMAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIABAOIAAAyg");
	this.shape_85.setTransform(615.2,256.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgCgIQgDgHAAgKQAAgHADgHQACgIAEgFQAFgGAHgDQAGgEAIAAQAIAAAHADQAFADAFAEQAFAFACAHQACAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgCgFQgBgEgCgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_86.setTransform(606.4,256.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAFgDIAFgBQAGAAACAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_87.setTransform(597.6,256.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_88.setTransform(588.8,256.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_89.setTransform(580,256.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAmQgHgDgEgFQgFgFgDgHQgCgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAHADAEAFQAFAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgDAEQgCAEgBAFQgCAFAAAFQAAAHACAGQABAFADAEQADAEAEABQAEACAFAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLQAAgGgBgGQgDgFgDgEQgCgDgFgCQgEgCgFAAQgFAAgFACg");
	this.shape_90.setTransform(571.2,256.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAHAAACAFQADADABAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_91.setTransform(562.4,256.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgEgFQgDgEgHAAIgEABIgFACIgFAFIgHAIIAAAzIgOAAIAAhNIANAAIAAAMIAHgHIAGgEIAGgCIAGgBQAMAAAHAHQAFAIAAAOIAAAyg");
	this.shape_92.setTransform(544.8,256.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQAAAMAGAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_93.setTransform(536,256.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AASA3IAAgyQAAgIgDgEQgEgFgGAAIgFABIgEACIgGAFIgHAHIAAA0IgNAAIAAhtIANAAIAAAgIgBAMIAHgGIAGgFIAFgCIAHgBQALAAAHAIQAGAHABANIAAAzg");
	this.shape_94.setTransform(527.2,254.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAOAnIgMghIgCgHIgCAIIgLAgIgQAAIgLhNIANAAIAGA0IACAMIAEgKIALgjIAIAAIANAiIAEALIABgMIAGg0IANAAIgLBNg");
	this.shape_95.setTransform(518.4,256.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AgPAyQgGgCgEgCQgFgEgCgEQgCgFAAgGQAAgJAFgHQAGgHAKgFQgKgEgEgHQgFgGAAgIQAAgFACgEQACgFAEgDQAFgEAGgCQAGgCAHAAQAIgBAGACQAGACAEADQAEADACAEQACAFAAAFQAAAKgFAFQgFAHgJAEIAJAFIAGAGQADADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgEADgHABQgGACgHAAQgIAAgHgCgAgJAKIgGAFIgDAGIgBAFQAAAEABACIAEAFIAHADIAHABIAIgBIAGgCIAEgFQACgDAAgDIgBgGQgBgDgDgDQgCgDgEgCIgJgGIgJAGgAgNglQgFADAAAIIABAFIAEAFQACACAEACIAIAFQAJgEAEgFQAEgEAAgGQAAgHgFgEQgEgDgJAAQgIAAgFADg");
	this.shape_96.setTransform(490.4,400.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AgXAzIAshZIg3AAIAAgMIBFAAIAAAMIgqBZg");
	this.shape_97.setTransform(490.4,379.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AgOAxQgHgDgEgFQgFgGgCgIQgCgJAAgMIABgOQABgHACgHQADgGADgFQAEgGAGgEQAGgEAIgCQAHgCAKAAIAKAAIAAAMIgLAAQgJAAgHACQgFACgFAEQgEAEgDAGQgCAGgBAHIAAADQAFgDAGgCQAHgCAGAAQAIAAAGADQAGACAEAEQADADACAGQACAFAAAHQAAAHgCAGQgDAGgFAFQgEAEgHADQgGADgIAAQgIAAgGgDgAgEAAIgGAAIgFADIgFACQAAAKABAHQACAHADAEQACAEAEACQAEABAFAAIAIgBQAEgBACgDIAFgHQABgEAAgFQAAgFgBgEQgBgDgDgDIgGgEQgDgBgGAAIgFABg");
	this.shape_98.setTransform(490.5,358.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AgPA0IgGgBIgEAAIgFgBIAAgMIAJABIALABQAHAAAEgCQAFgBAEgDQADgDABgEQACgEAAgEQABgKgHgEQgHgFgMAAIgUAAIAAgzIA2AAIAAAMIgoAAIAAAdIAJAAQAGAAAGABQAIABAFAEQAGADADAFQADAFAAAJQAAAHgDAGQgDAHgGAEQgGAFgIACQgGADgKAAIgEAAg");
	this.shape_99.setTransform(490.5,338.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AAJAzIAAgWIgwAAIAAgNIAqhCIAUAAIAABCIARAAIAAANIgRAAIAAAWgAgaAQIAjAAIAAg1g");
	this.shape_100.setTransform(490.4,317.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AgWA0IgJgBIAAgMIAKABIALAAIAMAAQAGgCADgCQADgDACgEQABgDAAgFQAAgFgCgDQgBgDgDgCIgIgDIgKgBIgMAAIAAgKIAMAAQAEAAAEgBQAEgBACgDQACgCACgDQABgEABgEQAAgIgGgEQgEgDgJgBIgKABIgNAEIAAgNIAHgBIAGgBIAFgBIAGAAQAHAAAGACQAGABAFAEQAEADACAEQACAFAAAGQAAAJgEAFQgFAHgIADIAIACIAHAEQADADACAEQACAEAAAFQAAAHgDAFQgCAHgGAEQgGAEgIADQgHACgLAAIgLAAg");
	this.shape_101.setTransform(490.5,296.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#666666").s().p("AghA0IAAgMIAbgbIAJgLIAHgHIADgIIAAgHIgBgHIgDgGQgCgDgDgBQgEgCgDAAQgHAAgFADIgKAIIgHgJQAFgGAIgEQAHgEAKAAQAGAAAGACQAFACAFAEQAEAEACAGQACAFAAAHQAAAGgCAFIgEAKIgIAJIgMAMIgRASIAxAAIAAANg");
	this.shape_102.setTransform(490.5,275.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AgdAzIAAgMIAaAAIAAhKIgZANIgFgLIAhgRIALAAIAABZIAXAAIAAAMg");
	this.shape_103.setTransform(490.4,255.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CCCCCC").s().p("Ah8NcIAA63ID5AAIAAa3g");
	this.shape_104.setTransform(490.5,327.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("A0nN/IAA79MApPAAAIAAb9g");
	this.shape_105.setTransform(606,327.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.item4 = new lib.mc_frag();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(321.8,326.2,1,1,0,0,0,0,-0.8);

	this.item5 = new lib.mc_frag();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(395.5,360.9,1,1,0,0,0,0,-0.8);

	this.item3 = new lib.mc_frag();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(422,319.9,1,1,0,0,0,0,-0.8);

	this.item1 = new lib.mc_frag();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(121,319.4,1,1,0,0,0,0,-0.8);

	this.item2 = new lib.mc_frag();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(270.5,244.9,1,1,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item1},{t:this.item3},{t:this.item5},{t:this.item4}]}).wait(1));

	// Layer_3
	this.instance = new lib.isoGfx();
	this.instance.parent = this;
	this.instance.setTransform(246.1,328.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1b, new cjs.Rectangle(71.1,224.2,667,321.3), null);


(lib.actMc1a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		userAns = 0;
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
		this.item5.addEventListener("click", selectAns.bind(this, 5));
		function submitAns(e){
			if (userAns==cAns){
				//correct
				_this.parent.sendScore(userAns, 5);
			} else {
				//wrong
				_this.parent.sendScore(userAns, 1);
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
	this.btnSubmit.setTransform(537.7,467.4,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIABIAHABIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape.setTransform(615,399.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAHAIAAAOIAAAyg");
	this.shape_1.setTransform(606.4,401.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_2.setTransform(597.6,401.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_3.setTransform(579.6,400.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAGAIABAOIAAAyg");
	this.shape_4.setTransform(571.2,401.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_5.setTransform(562.4,401.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_6.setTransform(553.6,401.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAHADQAGADAEAEQAFAFABAHQADAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_7.setTransform(544.8,401.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_8.setTransform(536,401.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPAmQgGgDgFgFQgFgFgDgHQgCgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAGADAFAFQAFAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgDAEQgDAEAAAFQgCAFAAAFQAAAHACAGQABAFADAEQADAEAEABQAEACAFAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLQAAgGgBgGQgCgFgEgEQgCgDgFgCQgEgCgFAAQgFAAgFACg");
	this.shape_9.setTransform(527.2,401.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAGAAACAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_10.setTransform(518.4,401.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_11.setTransform(632.4,379.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_12.setTransform(623.9,380.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_13.setTransform(615.2,380.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggA4IAAhtIALAAIABANQAHgJAGgCQAHgEAGAAQAHAAAFADQAFADADAFQAEAFACAHQABAIAAAJQAAAKgCAHQgEAHgFAFQgEAGgHACQgIADgHAAIgIgBIgHgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGABgPIgBgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_14.setTransform(606.6,382.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_15.setTransform(597.6,380.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_16.setTransform(589.2,380.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape_17.setTransform(571,379.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgEgFQgDgEgGAAIgFABIgEACIgGAFIgHAIIAAAzIgNAAIAAhNIALAAIABAMIAHgHIAGgEIAFgCIAHgBQAMAAAGAHQAHAIAAAOIAAAyg");
	this.shape_18.setTransform(562.4,380.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgCgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgOABQgKAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgDgCgGAAQgEAAgDACg");
	this.shape_19.setTransform(553.6,380.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_20.setTransform(712,359.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAFAFABAHQADAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_21.setTransform(703.2,359.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_22.setTransform(694.4,359.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_23.setTransform(686,359.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRA3QgGgBgFgDQgEgDgCgEQgCgEAAgEQAAgGACgEQADgFAFgEIgDgBIgCgDIgCgFIAAgDQAAgFADgDQABgEAEgEIgCgEIgCgEIgCgDIgBgGQAAgGADgFQACgFAEgEQAEgEAGgCQAFgBAIAAIAEAAIAFABIAcAAIAAALIgMAAIADAGIABAJQAAAFgCAFQgDAFgEAEQgEAEgFACQgGABgFABIgKgBIgHgDIgCAEIgBADQAAAEADACQADABAFAAIATABQAGAAAEACQAGABADADQAEACACAEQACADAAAGQAAAEgCAGQgDAEgFAEQgEADgHACQgIACgJAAQgJAAgHgBgAgRAZIgDADIgBAEIAAADQgBAFAGADQAGADAKgBIAKgBIAHgDQADgCABgCIABgFQAAgFgEgCQgEgDgHAAIgUAAIgEADgAgIgsQgDABgCADQgCACgCADIAAAHIAAAHIAEAFIAFAEIAIABQACgBAEgBQADgBACgDIAEgFIABgGQgBgEgBgDQgBgEgDgBIgEgEIgGgBQgEAAgEABg");
	this.shape_24.setTransform(676.9,361.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_25.setTransform(668,359.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgFQgGAGAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAIg");
	this.shape_26.setTransform(659,358.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAxQgIgDgEgGQgFgHgCgKQgDgKAAgNQAAgLADgKQACgJAEgHQAFgHAHgEQAIgDAIAAQAIAAAGACQAIADAEAHQAFAGACAKQADALAAAMQAAALgCAKQgCAKgGAHQgEAHgHAEQgIADgIAAQgIAAgGgDgAgUAWIADAIIAFAGIAGADQADACADAAQAFAAAEgDQAFgDADgFQADgEACgIQABgIABgJIgBgFIAAgFgAgJgmQgEAEgDAEQgDAGgBAHQgCAIAAAJIAAAEIAAAFIAqgfIgDgHIgEgGIgGgEQgDgBgEAAQgFAAgEACg");
	this.shape_27.setTransform(641.6,358.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgcA0IAAgMIAJAAQAKAAAIgCQAGgCAFgEQAFgEACgGQADgFABgIIAAgDQgFADgGACQgGACgHAAQgIAAgFgDQgGgCgFgEQgEgEgBgFQgCgFAAgHQAAgHADgGQACgGAFgFQAFgEAGgDQAGgDAHAAQAIAAAGADQAGACAFAGQAFAFACAJQADAJAAANQAAAOgEALQgDAKgHAHQgHAHgKADQgKAEgOAAgAgHgmQgFABgCADQgDADgCAEQgBAEAAAFQAAAFABAEQABADADADQACADAEAAQADACAGAAIAFgBIAGgBIAFgCIAFgCQAAgKgBgHQgCgHgDgEQgCgEgFgCQgDgCgFAAQgEAAgDACg");
	this.shape_28.setTransform(632.7,358.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgFACIgFAFIgHAIIAAAzIgNAAIAAhNIAMAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIABAOIAAAyg");
	this.shape_29.setTransform(615.2,359.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_30.setTransform(606.8,359.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASANABIAFgBIAEgDIAGgFIAHgIIAAgzIANAAIAABOIgLAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_31.setTransform(597.6,360);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_32.setTransform(588.4,358.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_33.setTransform(685.6,339.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_34.setTransform(676.8,339.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIgBgDIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAg2IAAgHIAAgEIgCgCIgCAAIgDABIgCACIgEAGIgFAJIAAAxIgMAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQAEADgBAJIAEgHIAEgFIAFgDQACgCADAAQAPAAAAAXIAAA4g");
	this.shape_35.setTransform(668,339.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgeA4IAAgMIAZAAIAAg2IgXAAIAAgMIAkAAIAABCIAYAAIAAAMgAgEgiIgEgCIgCgEIAAgEIAAgEIACgDIAEgDIAEgBIADABIAEADIACADIAAAEIAAAEIgCAEIgEACIgDABIgEgBg");
	this.shape_36.setTransform(659.3,337.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_37.setTransform(650,338);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghA0IAAgMIAbgbIAJgLIAHgHIADgIIAAgHIgBgHIgDgGQgCgDgDgBQgEgCgDAAQgHAAgFADIgKAIIgHgJQAFgGAIgEQAHgEAKAAQAGAAAGACQAFACAFAEQAEAEACAGQACAFAAAHQAAAGgCAFIgEAKIgIAJIgMAMIgRASIAxAAIAAANg");
	this.shape_38.setTransform(632.9,338);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AggA4IAAhtIAMAAIAAANQAGgJAHgCQAGgEAHAAQAHAAAFADQAFADADAFQAEAFACAHQABAIABAJQAAAKgDAHQgEAHgEAFQgGAGgHACQgGADgIAAIgHgBIgIgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGAAgPIAAgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_39.setTransform(615.4,340.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAYAoIAAg3IAAgHIAAgDIgCgCIgDAAIgDABIgCACIgEAGIgEAJIAAAxIgLAAIAAg2IAAgHIgCgEIgBgCIgCAAIgDABIgDACIgDAGIgEAJIAAAxIgNAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAHAAACAFQADADABAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_40.setTransform(606.4,339.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASANABIAFgBIAEgDIAGgFIAHgIIAAgzIANAAIAABOIgLAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_41.setTransform(597.6,339.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgSBHIgKgDIAAgNIAGACIAFACIAGABIAGABQAHAAAGgGQAFgGAAgLIAAhBIgmAAIAAgLIAzAAIAABMQAAAIgBAGQgDAHgFAEQgEAFgGACQgGACgIAAIgLgBgAAOgyIgDgDIgDgDIgBgEIABgFIADgDIADgCIAEgBIAFABIADACIACADIABAFIgBAEIgCADIgDADIgFAAIgEAAg");
	this.shape_42.setTransform(588.3,339.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_43.setTransform(685.6,318.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AghA4IAAhtIAMAAIABAMQAHgIAGgCQAHgEAGAAQAHAAAFADQAFADAEAFQADAFACAHQABAIAAAJQAAAKgDAHQgCAHgGAFQgFAGgGACQgIADgHAAIgIgBIgHgBIAAAhgAAAgqQgEAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAGgIQAHgGAAgPIgBgLIgDgJQgCgEgDgCQgDgCgFAAIgDABg");
	this.shape_44.setTransform(677,320.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_45.setTransform(668,318.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_46.setTransform(658.8,317.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_47.setTransform(650.4,318.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAJAzIAAgWIgwAAIAAgNIAqhCIAUAAIAABCIARAAIAAANIgRAAIAAAWgAgaAQIAjAAIAAg1g");
	this.shape_48.setTransform(632.8,317.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQAAgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_49.setTransform(615.2,318.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_50.setTransform(606.4,318.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgPAmQgGgDgFgFQgFgFgCgHQgDgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAGADAGAFQAEAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgCAEQgEAEgBAFQgBAFAAAFQAAAHABAGQACAFAEAEQACAEAEABQAFACAEAAQAGAAAFgCQAEgDACgEQAEgEABgFIABgLQAAgGgBgGQgCgFgEgEQgDgDgDgCQgFgCgFAAQgFAAgFACg");
	this.shape_51.setTransform(597.6,318.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAg2IAAgHIAAgEIgCgCIgCAAIgDABIgCACIgEAGIgFAJIAAAxIgMAAIAAhNIALAAIAAAOIAEgHIAEgFIAEgDIAGgBQAFAAADAFQAEADgBAJIAEgHIAEgFIAFgDQACgCADAAQAPAAAAAXIAAA4g");
	this.shape_52.setTransform(588.8,318.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_53.setTransform(668,297.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgFgFgCgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_54.setTransform(659.2,297.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAZAoIAAg3IgBgHIAAgDIgCgCIgDAAIgDABIgCACIgEAGIgEAJIAAAxIgMAAIAAg2IAAgHIgBgEIgBgCIgCAAIgDABIgDACIgDAGIgFAJIAAAxIgMAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAGAAADAFQAEADAAAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_55.setTransform(650.4,297.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgfA4IAAgMIAaAAIAAg2IgXAAIAAgMIAkAAIAABCIAXAAIAAAMgAgEgiIgDgCIgDgEIgBgEIABgEIADgDIADgDIAEgBIADABIADADIADADIABAEIgBAEIgDAEIgDACIgDABIgEgBg");
	this.shape_56.setTransform(641.7,296.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_57.setTransform(632.4,296.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgWA0IgJgBIAAgMIAKABIALAAIAMAAQAGgCADgCQADgDACgEQACgDgBgFQAAgFgBgDQgCgDgEgCIgIgDIgJgBIgMAAIAAgKIAMAAQAEAAADgBQAEgBADgDQADgCABgDQACgEAAgEQgBgIgFgEQgEgDgJgBIgLABIgLAEIAAgNIAGgBIAFgBIAGgBIAGAAQAHAAAGACQAGABAEAEQAFADACAEQACAFAAAGQAAAJgEAFQgFAHgIADIAIACIAHAEQADADACAEQACAEAAAFQAAAHgDAFQgDAHgFAEQgFAEgJADQgHACgLAAIgLAAg");
	this.shape_58.setTransform(615.3,296.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_59.setTransform(597.2,296.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_60.setTransform(588.7,297.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgFgFgCgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAIgEAHAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQgBAMAHAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgBAEIgCAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_61.setTransform(580,297.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AggA4IAAhtIAMAAIAAAMQAHgIAGgCQAGgEAHAAQAHAAAFADQAFADADAFQAEAFACAIQACAHgBAJQAAAKgCAHQgDAHgFAFQgGAGgGACQgIADgHAAIgIgBIgHgBIAAAhgAgBgqQgDAAgCACIgGAGIgHAIIAAAlIAIACIAIABQAKAAAHgIQAFgGABgPIgBgLIgDgJQgCgEgDgCQgDgCgEAAIgFABg");
	this.shape_62.setTransform(571.4,299.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_63.setTransform(562.4,297.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_64.setTransform(554,297.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_65.setTransform(685.6,277.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQAAAMAHAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgKAAgHgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgBgEgDgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_66.setTransform(676.8,277.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_67.setTransform(668,277.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_68.setTransform(659.6,277.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgRA3QgHgBgEgDQgEgDgCgEQgCgEAAgEQAAgGADgEQACgFAGgEIgEgBIgCgDIgCgFIAAgDQAAgFACgDQACgEAEgEIgCgEIgDgEIgBgDIgBgGQABgGACgFQACgFAEgEQAEgEAGgCQAFgBAIAAIAEAAIAFABIAcAAIAAALIgNAAIAEAGIABAJQAAAFgCAFQgDAFgEAEQgDAEgGACQgGABgFABIgKgBIgGgDIgDAEIgBADQAAAEADABQACACAGAAIATABQAGAAAEACQAFABAEADQAEACACAEQACADAAAGQAAAEgCAGQgDAEgEAEQgFADgIACQgHACgJAAQgJAAgHgBgAgRAZIgDADIgCAEIAAADQAAAFAGADQAGADAKgBIAKgBIAHgDQADgCABgCIABgFQAAgFgDgCQgFgDgIAAIgTAAIgEADgAgIgsQgDABgCADQgDACAAADIgBAHIABAHIADAFIAGAEIAHABQACgBADgBQAEgBACgDIADgFIABgGQAAgEgBgDQgBgEgCgBIgGgEIgFgBQgFAAgDABg");
	this.shape_69.setTransform(650.5,278.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgGgFgBgIQgDgHAAgKQAAgHADgHQACgIAFgFQAEgGAHgDQAGgEAIAAQAIAAAGADQAGADAFAEQAEAFACAHQADAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGALAAIAIAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgBgFQgCgEgCgDQgDgDgEgCQgEgCgFAAQgDAAgEACg");
	this.shape_70.setTransform(641.6,277.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgRA1QgFgCgDgGQgEgFgCgHQgBgIAAgIQAAgKADgHQACgHAFgGQAFgGAHgCQAHgDAIAAIAIAAIAHACIAAghIANAAIAABuIgMAAIAAgQQgGAJgHAEQgGAEgHAAQgHAAgFgDgAgMgGQgGAHAAAPQAAAOAEAIQAEAGAIABQAEgBAGgFQAFgEAHgJIAAgjIgIgDIgIgBQgKAAgGAHg");
	this.shape_71.setTransform(632.6,275.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgPAxQgGgDgFgGQgFgHgDgKQgCgKAAgNQAAgLACgKQADgJAFgHQAEgHAHgEQAHgDAJAAQAIAAAHACQAGADAFAHQAFAGADALQACAKAAAMQAAALgCALQgDAJgFAHQgEAHgHADQgHAEgJAAQgIAAgHgDgAgTAWIACAIIAFAGIAFADQAEACADAAQAGAAADgDQAFgDADgEQADgFABgIQADgIAAgJIgBgFIAAgFgAgJgmQgEAEgDAEQgDAGgBAHQgCAIgBAJIAAAEIABAFIAqgfIgDgHIgEgGIgGgEQgDgBgEAAQgFAAgEACg");
	this.shape_72.setTransform(615.2,276);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgcA0IAAgMIAJAAQALAAAHgCQAGgCAFgEQAFgEACgGQADgFABgIIAAgDQgFADgGACQgHACgGAAQgIAAgGgDQgGgCgEgEQgDgEgCgFQgCgFAAgHQAAgHADgGQACgGAEgFQAGgEAGgDQAGgDAHAAQAIAAAGADQAHACAEAGQAFAFADAJQACAJAAANQAAAOgDALQgEAKgHAHQgHAHgKADQgKAEgNAAgAgIgmQgEABgCADQgDADgCAEQgBAEAAAFQAAAFABAEQACADACADQACADAEAAQADACAGAAIAFgBIAGgBIAGgCIAEgCQAAgKgCgHQgBgHgCgEQgEgEgEgCQgEgCgEAAQgEAAgEACg");
	this.shape_73.setTransform(606.3,275.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgWAHIAAgNIAtAAIAAANg");
	this.shape_74.setTransform(597.6,276.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgHAAIgEABIgFACIgFAFIgHAIIAAAzIgOAAIAAhNIANAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIAAAOIAAAyg");
	this.shape_75.setTransform(580,277.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_76.setTransform(571.6,277.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAhQgHgIABgNIAAgzIANAAIAAAxQAAASAOABIADgBIAGgDIAFgFIAHgIIAAgzIAOAAIAABOIgMAAIgBgNIgGAGIgHAFIgGADIgGAAQgMAAgGgHg");
	this.shape_77.setTransform(562.4,277.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_78.setTransform(553.2,275.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_79.setTransform(676.4,255.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgfAoIAAhNIAMAAIABAOQAHgIAHgEQAFgEAHAAQAMAAAHAIQAGAIgBAQIgNAAQAAgLgDgFQgEgEgGAAIgFABIgFADIgGAGIgHAIIAAAxg");
	this.shape_80.setTransform(668.4,256.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgSAnQgEgCgDgDQgDgDgCgEQgBgEAAgFQAAgLAIgHQAJgGAQAAIARAAIAAgHQAAgHgFgEQgEgEgJAAQgGAAgGABIgOAFIAAgNIAGgBIAHgCIAHgBIAHgBQAHAAAGACQAFACAEADQAEADACAFQACAFAAAGIAAA1IgMAAIAAgKQgHAGgGADQgHADgGAAQgHAAgFgCgAgGAFIgGACIgEAFIgBAGIABAEIACAEIAEACIAGABQAEAAAGgCQAGgDAHgHIAAgNIgSAAIgHABg");
	this.shape_81.setTransform(659.1,256.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_82.setTransform(650,255.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgQAoIgNgCIAAgNIAOADIANABQAJAAAFgCQAEgDAAgFIAAgEIgDgDIgGgDIgKgEIgKgDIgIgEQgDgDgCgEQgCgDAAgFQAAgEACgEQABgDAEgEQADgDAHgCQAGgDAIAAIAKABIAMACIAAAMIgMgCIgKgBIgHABIgGACIgDADIgBAEIABAEIADADIAGADIAJAEIAMAEIAIAEQADADABADIABAIQAAAEgBADQgBAEgDACIgFAEIgHADIgIACIgGABIgPgBg");
	this.shape_83.setTransform(641.6,256.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgFAuQgHgHAAgOIAAgoIgWAAIAAgLIAWAAIAAgWIAMgDIAAAZIAjAAIAAALIgjAAIAAAnQAAAJAFAEQAEAEAJAAIAIgBIAJgCIAAAMIgJACIgKAAQgPAAgGgGg");
	this.shape_84.setTransform(623.6,255.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgDgFQgEgEgGAAIgFABIgFACIgFAFIgHAIIAAAzIgNAAIAAhNIAMAAIAAAMIAHgHIAGgEIAFgCIAHgBQAMAAAHAHQAFAIABAOIAAAyg");
	this.shape_85.setTransform(615.2,256.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgCgIQgDgHAAgKQAAgHADgHQACgIAEgFQAFgGAHgDQAGgEAIAAQAIAAAHADQAFADAFAEQAFAFACAHQACAHAAAIIgBAEIAAADIg2AAQABAMAGAHQAHAGAMAAIAHAAIAGgBIAGgBIAGgBIAAALIgNADIgOABQgJAAgIgDgAgHgbIgGAFQgDADgCAEIgCAKIApAAQAAgFgCgFQgBgEgCgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_86.setTransform(606.4,256.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIALAAIAAAOIAEgHIAEgFIAFgDIAFgBQAGAAACAFQADADAAAJIAEgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_87.setTransform(597.6,256.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgNAmQgHgDgEgFQgFgFgDgIQgCgHAAgKQAAgHACgHQADgIAFgFQAEgGAGgDQAIgEAHAAQAIAAAGADQAHADAEAEQAEAFACAHQADAHAAAIIAAAEIAAADIg3AAQAAAMAHAHQAHAGALAAIAHAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgJAAgHgDgAgHgbIgHAFQgCADgBAEIgDAKIAoAAQABgFgBgFQgCgEgCgDQgDgDgEgCQgDgCgGAAQgDAAgEACg");
	this.shape_88.setTransform(588.8,256.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgHAnIgfhNIAQAAIATAzIADAMIAFgNIATgyIAPAAIgfBNg");
	this.shape_89.setTransform(580,256.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgPAmQgHgDgEgFQgFgFgDgHQgCgIAAgJQAAgJADgHQACgIAFgFQAFgGAHgDQAHgDAIAAQAIAAAHADQAHADAEAFQAFAFACAHQADAIAAAJQAAAJgDAHQgDAIgEAFQgFAGgHADQgHADgIAAQgIAAgHgDgAgKgaQgEADgDAEQgCAEgBAFQgCAFAAAFQAAAHACAGQABAFADAEQADAEAEABQAEACAFAAQAGAAAEgCQAFgDACgEQADgEACgFIABgLQAAgGgBgGQgDgFgDgEQgCgDgFgCQgEgCgFAAQgFAAgFACg");
	this.shape_90.setTransform(571.2,256.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAYAoIAAg4IAAgGIgBgDIgBgCIgCAAIgEABIgCACIgDAGIgFAJIAAAxIgLAAIAAg2IAAgHIgBgEIgCgCIgCAAIgDABIgCACIgEAGIgEAJIAAAxIgNAAIAAhNIAKAAIABAOIAEgHIAEgFIAFgDIAEgBQAHAAACAFQADADABAJIADgHIAEgFIAEgDQADgCADAAQAPAAAAAXIAAA4g");
	this.shape_91.setTransform(562.4,256.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AASAoIAAgxQAAgJgEgFQgDgEgHAAIgEABIgFACIgFAFIgHAIIAAAzIgOAAIAAhNIANAAIAAAMIAHgHIAGgEIAGgCIAGgBQAMAAAHAHQAFAIAAAOIAAAyg");
	this.shape_92.setTransform(544.8,256.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgNAmQgHgDgFgFQgEgFgDgIQgCgHAAgKQAAgHACgHQADgIAEgFQAFgGAGgDQAHgEAIAAQAIAAAHADQAFADAFAEQAEAFADAHQACAHAAAIIAAAEIAAADIg2AAQAAAMAGAHQAHAGAMAAIAGAAIAHgBIAGgBIAFgBIAAALIgMADIgPABQgIAAgIgDgAgHgbIgHAFQgCADgCAEIgBAKIAnAAQABgFgCgFQgBgEgCgDQgDgDgEgCQgEgCgFAAQgEAAgDACg");
	this.shape_93.setTransform(536,256.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AASA3IAAgyQAAgIgDgEQgEgFgGAAIgFABIgEACIgGAFIgHAHIAAA0IgNAAIAAhtIANAAIAAAgIgBAMIAHgGIAGgFIAFgCIAHgBQALAAAHAIQAGAHABANIAAAzg");
	this.shape_94.setTransform(527.2,254.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAOAnIgMghIgCgHIgCAIIgLAgIgQAAIgLhNIANAAIAGA0IACAMIAEgKIALgjIAIAAIANAiIAEALIABgMIAGg0IANAAIgLBNg");
	this.shape_95.setTransform(518.4,256.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AgPAyQgGgCgEgCQgFgEgCgEQgCgFAAgGQAAgJAFgHQAGgHAKgFQgKgEgEgHQgFgGAAgIQAAgFACgEQACgFAEgDQAFgEAGgCQAGgCAHAAQAIgBAGACQAGACAEADQAEADACAEQACAFAAAFQAAAKgFAFQgFAHgJAEIAJAFIAGAGQADADACAEQACAEAAAFQAAAHgDAFQgDAFgFAEQgEADgHABQgGACgHAAQgIAAgHgCgAgJAKIgGAFIgDAGIgBAFQAAAEABACIAEAFIAHADIAHABIAIgBIAGgCIAEgFQACgDAAgDIgBgGQgBgDgDgDQgCgDgEgCIgJgGIgJAGgAgNglQgFADAAAIIABAFIAEAFQACACAEACIAIAFQAJgEAEgFQAEgEAAgGQAAgHgFgEQgEgDgJAAQgIAAgFADg");
	this.shape_96.setTransform(490.4,400.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AgXAzIAshZIg3AAIAAgMIBFAAIAAAMIgqBZg");
	this.shape_97.setTransform(490.4,379.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AgOAxQgHgDgEgFQgFgGgCgIQgCgJAAgMIABgOQABgHACgHQADgGADgFQAEgGAGgEQAGgEAIgCQAHgCAKAAIAKAAIAAAMIgLAAQgJAAgHACQgFACgFAEQgEAEgDAGQgCAGgBAHIAAADQAFgDAGgCQAHgCAGAAQAIAAAGADQAGACAEAEQADADACAGQACAFAAAHQAAAHgCAGQgDAGgFAFQgEAEgHADQgGADgIAAQgIAAgGgDgAgEAAIgGAAIgFADIgFACQAAAKABAHQACAHADAEQACAEAEACQAEABAFAAIAIgBQAEgBACgDIAFgHQABgEAAgFQAAgFgBgEQgBgDgDgDIgGgEQgDgBgGAAIgFABg");
	this.shape_98.setTransform(490.5,358.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AgPA0IgGgBIgEAAIgFgBIAAgMIAJABIALABQAHAAAEgCQAFgBAEgDQADgDABgEQACgEAAgEQABgKgHgEQgHgFgMAAIgUAAIAAgzIA2AAIAAAMIgoAAIAAAdIAJAAQAGAAAGABQAIABAFAEQAGADADAFQADAFAAAJQAAAHgDAGQgDAHgGAEQgGAFgIACQgGADgKAAIgEAAg");
	this.shape_99.setTransform(490.5,338.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AAJAzIAAgWIgwAAIAAgNIAqhCIAUAAIAABCIARAAIAAANIgRAAIAAAWgAgaAQIAjAAIAAg1g");
	this.shape_100.setTransform(490.4,317.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AgWA0IgJgBIAAgMIAKABIALAAIAMAAQAGgCADgCQADgDACgEQABgDAAgFQAAgFgCgDQgBgDgDgCIgIgDIgKgBIgMAAIAAgKIAMAAQAEAAAEgBQAEgBACgDQACgCACgDQABgEABgEQAAgIgGgEQgEgDgJgBIgKABIgNAEIAAgNIAHgBIAGgBIAFgBIAGAAQAHAAAGACQAGABAFAEQAEADACAEQACAFAAAGQAAAJgEAFQgFAHgIADIAIACIAHAEQADADACAEQACAEAAAFQAAAHgDAFQgCAHgGAEQgGAEgIADQgHACgLAAIgLAAg");
	this.shape_101.setTransform(490.5,296.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#666666").s().p("AghA0IAAgMIAbgbIAJgLIAHgHIADgIIAAgHIgBgHIgDgGQgCgDgDgBQgEgCgDAAQgHAAgFADIgKAIIgHgJQAFgGAIgEQAHgEAKAAQAGAAAGACQAFACAFAEQAEAEACAGQACAFAAAHQAAAGgCAFIgEAKIgIAJIgMAMIgRASIAxAAIAAANg");
	this.shape_102.setTransform(490.5,275.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#666666").s().p("AgdAzIAAgMIAaAAIAAhKIgZANIgFgLIAhgRIALAAIAABZIAXAAIAAAMg");
	this.shape_103.setTransform(490.4,255.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#CCCCCC").s().p("Ah8NcIAA63ID5AAIAAa3g");
	this.shape_104.setTransform(490.5,327.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("A0nN/IAA79MApPAAAIAAb9g");
	this.shape_105.setTransform(606,327.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.item4 = new lib.mc_frag();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(146,441.9,1,1,0,0,0,0,-0.8);

	this.item5 = new lib.mc_frag();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(421.5,428.9,1,1,0,0,0,0,-0.8);

	this.item3 = new lib.mc_frag();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(422,319.9,1,1,0,0,0,0,-0.8);

	this.item1 = new lib.mc_frag();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(121,319.4,1,1,0,0,0,0,-0.8);

	this.item2 = new lib.mc_frag();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(270.5,244.9,1,1,0,0,0,0,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item1},{t:this.item3},{t:this.item5},{t:this.item4}]}).wait(1));

	// Layer_3
	this.instance = new lib.isoGfx();
	this.instance.parent = this;
	this.instance.setTransform(246.1,328.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1a, new cjs.Rectangle(71.1,224.2,667,321.3), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var _this = this;
		var strAnsHistory = "";
		var historyLength = 0;
		var myX = 98;
		var myY = 226;
		var myWidth = 338;
		var myHeight = 256;
		var fontSize = 11;
		var myContainer = document.getElementById("dom_overlay_container");
		var divEditor = document.createElement("div");
		divEditor.id = "diveditor";
		var myScale = myContainer.offsetWidth/800;
		//console.log(myScale);
		divEditor.style.width = myWidth * myScale + "px";
		divEditor.style.height = myHeight * myScale + "px";
		divEditor.style.position = "absolute";
		divEditor.style.left = myX * myScale + "px";
		divEditor.style.top = myY * myScale + "px";
		myContainer.appendChild(divEditor);
		var txtArea = document.createElement("textarea");
		var txtCode = "debug();\nfunction debug()\n{\n  var x = 50;\n  if(x < 5)\n  {\n    return 'greater';\n  }\n  else\n  {\n    return 'lesser';\n  }\n}";
		t = document.createTextNode(txtCode);
		txtArea.id = "txt_area";
		txtArea.appendChild(t);
		divEditor.appendChild(txtArea);
		window.addEventListener("resize", function (){
			setTimeout(function(){
				myScale = myContainer.offsetWidth/800;
				divEditor.style.width = myWidth * myScale + "px";
				divEditor.style.height = myHeight * myScale + "px";
				divEditor.style.left = myX * myScale + "px";
				divEditor.style.top = myY * myScale + "px";
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
		function onRun(evt){
			editor.save();
			var code = document.getElementById("txt_area").value;
			var hasError = false;
			historyLength++;
			if (historyLength>10){
				var toExtract = strAnsHistory.indexOf("\n")+1;
				strAnsHistory = strAnsHistory.substring(toExtract);
			}
			try {
				var myResult = eval(code);
				strAnsHistory += myResult + " \n";
			} catch (e) {
			    if (e instanceof SyntaxError) {
			        strAnsHistory += "Syntax error: "+ e.message + " \n";
			    } else {
					strAnsHistory += "Syntax error \n";
				}
				hasError = true;
			}
			_this.txtAns.text = strAnsHistory;
			if (myResult=="greater"){
				_this.btnRun.mouseEnabled = false;
				_this.btnRun.alpha = .5;
				if (historyLength<=2){
					_this.parent.sendScore("(correct code)", 5);
				} else if (historyLength<=4){
					_this.parent.sendScore("(correct code)", 4);
				} else if (historyLength<=6){
					_this.parent.sendScore("(correct code)", 3);
				} else if (historyLength<=8){
					_this.parent.sendScore("(correct code)", 2);
				} else {
					_this.parent.sendScore("(correct code)", 1);
				}
			} else {
				_this.parent.recordAns(code, 1);
			}
		}
		this.btnRun.addEventListener("click", onRun);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1));

	// btn
	this.btnRun = new lib.mcBtnExecute();
	this.btnRun.name = "btnRun";
	this.btnRun.parent = this;
	this.btnRun.setTransform(401,526.6,1,1,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnRun).wait(5));

	// output
	this.txtAns = new cjs.Text("", "normal 400 12px 'Muli'");
	this.txtAns.name = "txtAns";
	this.txtAns.lineHeight = 18;
	this.txtAns.lineWidth = 229;
	this.txtAns.parent = this;
	this.txtAns.setTransform(482.1,260);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns);
	}

	this.timeline.addTween(cjs.Tween.get(this.txtAns).wait(5));

	// Output
	this.instance = new lib.ans();
	this.instance.parent = this;
	this.instance.setTransform(583.1,305,1,1,0,0,0,124,82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(98,222.9,643.6,330.2);


// stage content:
(lib.f5s20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:146,q3:188,q4:231,q5:276,finalFb:324});

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
		var stageNum = 20;
		if (typeof cUserId === "undefined") {
			cUserId = "";
		}
		this.timeGiven = 240;//time in seconds
		this.secRemaining = this.timeGiven;
		this.timeTaken = 0;
		this.cScore = 0;
		var maxQ = 2;
		this.currentQ = 0;
		this.myData = {
			"stage": stageNum,
			"userId": cUserId,
			"qItem": []
		};
		this.qItem1 = [{
				"qId": "f5s20_1",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 17,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s20_2",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 17,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s20_3",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 17,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			}
		];
		this.qItem2 = [{
				"qId": "f5s20_4",
				"qDomain": 2,
				"qParam": 4,
				"qSkill": 17,
				"userAns": "",
				"qResult": 9,
				"time": 0,
				"score": 1
			},
			{
				"qId": "f5s20_5",
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
			this.myData.qItem.push(_this.qItem1[0]);
			this.myData.qItem.push(_this.qItem1[1]);
			this.myData.qItem.push(_this.qItem1[2]);
			this.myData.qItem.push(_this.qItem2[0]);
			this.myData.qItem.push(_this.qItem2[1]);
		} else {
			this.myData.qItem.push(_this.qItem1[randRange(0,2)]);
			this.myData.qItem.push(_this.qItem2[randRange(0,1)]);
		}
		function goNextQ (){
			_this.currentQ++;
			$("#dom_overlay_container").empty();
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
		this.recordAns = function (_userAns, _cScore){
			_this.myData.qItem[_this.currentQ-1].qResult = 0;
			_this.myData.qItem[_this.currentQ-1].score = _cScore;
			_this.myData.qItem[_this.currentQ-1].userAns = _userAns;
		}
		function randRange(min, max) {
		    return Math.floor(Math.random() * (max - min + 1)) + min;
		}
	}
	this.frame_104 = function() {
		playSound("questionAlert");
	}
	this.frame_140 = function() {
		this.stop();
	}
	this.frame_146 = function() {
		playSound("questionAlert");
	}
	this.frame_182 = function() {
		this.stop();
	}
	this.frame_188 = function() {
		playSound("questionAlert");
	}
	this.frame_224 = function() {
		this.stop();
	}
	this.frame_231 = function() {
		playSound("questionAlert");
	}
	this.frame_271 = function() {
		this.stop();
	}
	this.frame_276 = function() {
		playSound("questionAlert");
	}
	this.frame_316 = function() {
		this.stop();
	}
	this.frame_324 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_493 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(36).call(this.frame_140).wait(6).call(this.frame_146).wait(36).call(this.frame_182).wait(6).call(this.frame_188).wait(36).call(this.frame_224).wait(7).call(this.frame_231).wait(40).call(this.frame_271).wait(5).call(this.frame_276).wait(40).call(this.frame_316).wait(8).call(this.frame_324).wait(169).call(this.frame_493).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(390));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(324).to({_off:false},0).wait(170));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,85.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(390));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:87.8},16,cjs.Ease.cubicOut).wait(449));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(579.9,138.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(390));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.instance_3 = new lib.dialogue2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(453.3,120.4,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.instance_3}]},188).to({state:[]},93).wait(170));

	// avatar
	this.instance_4 = new lib.avatarBotsX("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(154.4,121.6,0.052,0.052);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},281).wait(170));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(324).to({graphics:null,x:0,y:0}).wait(170));

	// actMc
	this.instance_5 = new lib.actMc1a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,310);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc1b();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0,310);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc1c();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,310);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,310);
	this.instance_8._off = true;

	this.instance_9 = new lib.actMc2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(0,310);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(124).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},9).wait(348));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(166).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},9).wait(306));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(208).to({_off:false},0).to({y:0},13,cjs.Ease.cubicOut).to({_off:true},10).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(252).to({_off:false},0).to({y:0},15,cjs.Ease.cubicOut).to({_off:true},5).wait(222));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(297).to({_off:false},0).to({y:0},15,cjs.Ease.cubicOut).to({_off:true},5).wait(177));

	// Layer_3
	this.instance_10 = new lib.mcQ();
	this.instance_10.parent = this;
	this.instance_10.setTransform(445.6,191.8,0.137,0.137,0,0,0,0.4,0);
	this.instance_10._off = true;

	this.instance_11 = new lib.mcQ7();
	this.instance_11.parent = this;
	this.instance_11.setTransform(398.5,174.5,0.05,0.05);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(104).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1,x:500.6,y:208.8},20,cjs.Ease.elasticOut).wait(22).to({regX:0.4,scaleX:0.14,scaleY:0.14,x:445.6,y:191.8},0).to({regX:0,scaleX:1,scaleY:1,x:500.6,y:208.8},20,cjs.Ease.elasticOut).wait(22).to({regX:0.4,scaleX:0.14,scaleY:0.14,x:445.6,y:191.8},0).to({regX:0,scaleX:1,scaleY:1,x:500.6,y:208.8},20,cjs.Ease.elasticOut).to({_off:true},23).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(231).to({_off:false},0).to({scaleX:1,scaleY:1,x:377.3,y:164.5},21,cjs.Ease.elasticOut).wait(24).to({scaleX:0.05,scaleY:0.05,x:398.5,y:174.5},0).to({scaleX:1,scaleY:1,x:377.3,y:164.5},21,cjs.Ease.elasticOut).to({_off:true},27).wait(170));

	// progress
	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(622.6,80.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(634.9,80.5);

	var maskedShapeInstanceList = [this.prog1,this.prog2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog2},{t:this.prog1}]},99).to({state:[]},225).wait(170));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(468));

	// bg
	this.instance_12 = new lib.Symbol2("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(394.4,296.6);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({_off:true},304).wait(170));

	// bg
	this.instance_13 = new lib.Bitmap3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(494));

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
		{src:"images/f5s20/a_1.png", id:"a_1"},
		{src:"images/f5s20/a_4.png", id:"a_4"},
		{src:"images/f5s20/Bitmap1.png", id:"Bitmap1"},
		{src:"images/f5s20/Bitmap21.png", id:"Bitmap21"},
		{src:"images/f5s20/Bitmap3.png", id:"Bitmap3"},
		{src:"images/f5s20/Bitmap9.png", id:"Bitmap9"},
		{src:"images/f5s20/block_02_qube.png", id:"block_02_qube"},
		{src:"images/f5s20/block_03_qube.png", id:"block_03_qube"},
		{src:"images/f5s20/character_facing_direction.png", id:"character_facing_direction"},
		{src:"images/f5s20/cube_start.png", id:"cube_start"},
		{src:"images/f5s20/qube_lava_01.png", id:"qube_lava_01"},
		{src:"images/f5s20/qube_lava_02.png", id:"qube_lava_02"},
		{src:"images/f5s20/qube_lava_03.png", id:"qube_lava_03"},
		{src:"images/f5s20/qube_lava_base.png", id:"qube_lava_base"},
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