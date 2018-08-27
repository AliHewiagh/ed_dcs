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



(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1633,1259);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,694);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,28);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,34);


(lib.Bitmap28 = function() {
	this.initialize(img.Bitmap28);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,16);


(lib.Bitmap29 = function() {
	this.initialize(img.Bitmap29);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,279);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1202,903);


(lib.Bitmap30 = function() {
	this.initialize(img.Bitmap30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,191,285);


(lib.Bitmap31 = function() {
	this.initialize(img.Bitmap31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297,359);


(lib.Bitmap32 = function() {
	this.initialize(img.Bitmap32);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,209,263);


(lib.Bitmap33 = function() {
	this.initialize(img.Bitmap33);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,416);


(lib.Bitmap34 = function() {
	this.initialize(img.Bitmap34);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,663,416);


(lib.Bitmap35 = function() {
	this.initialize(img.Bitmap35);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,664,416);


(lib.Bitmap36 = function() {
	this.initialize(img.Bitmap36);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,238);


(lib.Bitmap37 = function() {
	this.initialize(img.Bitmap37);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,269);


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


(lib.workplace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap33();
	this.instance.parent = this;
	this.instance.setTransform(-429,-97.2);

	this.instance_1 = new lib.Bitmap34();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-429,-97.2);

	this.instance_2 = new lib.Bitmap35();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-429.7,-97.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	// work-table
	this.instance_3 = new lib.Bitmap21();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-816.3,-630.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-816.3,-630.2,1633,1259);


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
	this.myTxt = new cjs.Text("Answer these questions.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 223;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-240.7,-24);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AyHAAMAkPAAA");
	this.shape.setTransform(-135.7,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AwwC7IAAiYIikACICkh6IAAhgMAkPAAAIAAFw");
	this.shape_1.setTransform(-144.4,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aw0C4IAAiYIilADIClh7IAAhfMAkOAAAIAAFvg");
	this.shape_2.setTransform(-143.9,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-31,253.6,39.8), null);


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
	this.myTxt = new cjs.Text("Jawab soalan-soalan ini.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 223;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-240.7,-24);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("AyHAAMAkPAAA");
	this.shape.setTransform(-135.7,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AwwC7IAAiYIikACICkh6IAAhgMAkPAAAIAAFw");
	this.shape_1.setTransform(-144.4,-11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aw0C4IAAiYIilADIClh7IAAhfMAkOAAAIAAFvg");
	this.shape_2.setTransform(-143.9,-11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-31,254.1,39.8), null);


(lib.smartphone = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape.setTransform(56,-206.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_1.setTransform(49.5,-204.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_2.setTransform(40.2,-206.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(30.5,-204.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_4.setTransform(23,-205.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(16,-204.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_6.setTransform(8.2,-206.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(1.5,-206.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_8.setTransform(-5.5,-206.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_9.setTransform(-17.7,-206.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_10.setTransform(-27.5,-204.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(-37.1,-206.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(-43.6,-206.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_13.setTransform(-50.3,-206.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIANAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_14.setTransform(-87.2,-204.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(-92.4,-204.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(-100.8,-204.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(-109.1,-204.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AApA5IAAhUIgkBUIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_18.setTransform(-120.2,-206.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_19.setTransform(16.1,-116.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_20.setTransform(8.9,-121.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_21.setTransform(-1.6,-121.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_22.setTransform(-15.8,-120);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_23.setTransform(-22.3,-121.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_24.setTransform(-26.6,-120);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(-34.3,-120);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_26.setTransform(-41.6,-121.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_27.setTransform(-48.6,-120);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_28.setTransform(-55.8,-121.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_29.setTransform(-63.4,-120);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA3g1IARAAIg7A3IA9A6g");
	this.shape_30.setTransform(-72.3,-121.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(-84.2,-121.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_32.setTransform(-91.2,-121.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_33.setTransform(78.1,-145.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_34.setTransform(71.5,-143.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_35.setTransform(65,-145.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_36.setTransform(57,-145.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_37.setTransform(52.7,-143.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(44.2,-143.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_39.setTransform(35,-145.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_40.setTransform(25.3,-143.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_41.setTransform(15.6,-142.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_42.setTransform(6.3,-143.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_43.setTransform(-2.6,-143.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_44.setTransform(-9.9,-145);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(-21.8,-143.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_46.setTransform(-31,-142.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_47.setTransform(-43.1,-143.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_48.setTransform(-54.7,-143.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_49.setTransform(-62.2,-143.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_50.setTransform(-74.4,-143.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_51.setTransform(-85.9,-143.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgTBGIAAgLIAMABQAHABADgFQAEgEAAgMIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgCg");
	this.shape_52.setTransform(-93.9,-144);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_53.setTransform(20.7,-204.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_54.setTransform(-17.8,-204.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AghAuQgLgMAAgWIAAhFIANAAIAABGQAAAQAIAJQAIAIAPAAQAQAAAIgIQAIgJAAgQIAAhGIANAAIAABFQAAAWgMAMQgLAMgWAAQgWAAgLgMg");
	this.shape_55.setTransform(-28.2,-206.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(-74.7,-202.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_57.setTransform(-100.8,-204.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_58.setTransform(-61.8,-121.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_59.setTransform(-72.3,-121.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_60.setTransform(-84.4,-121.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(-92.2,-120);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_62.setTransform(81.6,-143.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(72.4,-143.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_64.setTransform(63.3,-143.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_65.setTransform(54,-143.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_66.setTransform(26.5,-145.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_67.setTransform(6,-143.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_68.setTransform(-6.3,-145.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_69.setTransform(-13.9,-145);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_70.setTransform(-23.7,-145);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_71.setTransform(-66.1,-143.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAGg");
	this.shape_72.setTransform(-71.9,-149.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_73.setTransform(-76.6,-145);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_74.setTransform(-83.7,-143.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgiA5IAAhxIANAAIAABmIA4AAIAAALg");
	this.shape_75.setTransform(-91.8,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51,p:{x:-85.9,y:-143.9}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:-43.1}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44,p:{x:-9.9}},{t:this.shape_43,p:{x:-2.6}},{t:this.shape_42,p:{x:6.3,y:-143.9}},{t:this.shape_41},{t:this.shape_40,p:{x:25.3,y:-143.9}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:71.5,y:-143.9}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-55.8}},{t:this.shape_27,p:{x:-48.6,y:-120}},{t:this.shape_26},{t:this.shape_25,p:{x:-34.3,y:-120}},{t:this.shape_24,p:{x:-26.6,y:-120}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:8.9}},{t:this.shape_19,p:{x:16.1}},{t:this.shape_18},{t:this.shape_17,p:{x:-109.1,y:-204.7}},{t:this.shape_16,p:{x:-100.8}},{t:this.shape_15,p:{x:-92.4}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-27.5,y:-204.7}},{t:this.shape_9,p:{x:-17.7}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:16}},{t:this.shape_4},{t:this.shape_3,p:{x:30.5}},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:56,y:-206.3}}]}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_47,p:{x:-50.9}},{t:this.shape_43,p:{x:-39.5}},{t:this.shape_27,p:{x:-30.8,y:-143.9}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape,p:{x:0.2,y:-145.5}},{t:this.shape_67},{t:this.shape_10,p:{x:18.8,y:-143.9}},{t:this.shape_66},{t:this.shape_44,p:{x:32}},{t:this.shape_25,p:{x:39.2,y:-143.9}},{t:this.shape_24,p:{x:47,y:-143.9}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_20,p:{x:-46.7}},{t:this.shape_40,p:{x:-36.7,y:-120}},{t:this.shape_28,p:{x:-29.1}},{t:this.shape_17,p:{x:-21.9,y:-120}},{t:this.shape_19,p:{x:-15.8}},{t:this.shape_18},{t:this.shape_15,p:{x:-109.1}},{t:this.shape_57},{t:this.shape_16,p:{x:-92.9}},{t:this.shape_3,p:{x:-84.3}},{t:this.shape_56},{t:this.shape_5,p:{x:-65.2}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_9,p:{x:-8.2}},{t:this.shape_42,p:{x:-0.2,y:-204.7}},{t:this.shape_51,p:{x:9.1,y:-204.7}},{t:this.shape_53},{t:this.shape_34,p:{x:32.2,y:-204.7}}]},1).wait(1));

	// Layer_5
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-180.5,-344.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.5,-344.1,361,694);


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


(lib.popupwindow = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFF00").s().p("AhABfQgWggAAg/QAAg+AWggQAWggAqAAQArAAAWAgQAWAgAAA+QAAA+gWAhQgWAggrAAQgqAAgWgggAgrhNQgOAZAAA0QAAA1AOAZQAOAZAdAAQAdAAAPgZQAOgZAAg1QAAg0gOgZQgOgZgeAAQgdAAgOAZg");
	this.shape.setTransform(27,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhABfQgWggAAg/QAAg+AWggQAXggApAAQAqAAAXAgQAWAgAAA+QAAA+gWAhQgXAggqAAQgpAAgXgggAgrhNQgOAZAAA0QAAA1AOAZQAOAZAdAAQAdAAAPgZQAOgZAAg1QAAg0gOgZQgOgZgeAAQgdAAgOAZg");
	this.shape_1.setTransform(6,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhABfQgWggAAg/QAAg+AWggQAXggApAAQAqAAAXAgQAWAgAAA+QAAA+gWAhQgXAggqAAQgpAAgXgggAgrhNQgOAZAAA0QAAA1AOAZQAOAZAdAAQAeAAAOgZQAOgZAAg1QAAg0gOgZQgOgZgeAAQgdAAgOAZg");
	this.shape_2.setTransform(-15,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AgQAcQAOgQABgNIgQAAIAAgkIAjAAIAAAZQAAAOgFAMQgFAMgKAMg");
	this.shape_3.setTransform(-29.5,36.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhABfQgWggAAg/QAAg+AWggQAWggAqAAQArAAAWAgQAWAgAAA+QAAA+gWAhQgWAggrAAQgqAAgWgggAgrhNQgOAZAAA0QAAA1AOAZQAOAZAdAAQAdAAAPgZQAOgZAAg1QAAg0gOgZQgOgZgeAAQgdAAgOAZg");
	this.shape_4.setTransform(-44.1,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AhABfQgWggAAg/QAAg+AWggQAXggApAAQAqAAAXAgQAWAgAAA+QAAA+gWAhQgXAggqAAQgpAAgXgggAgrhNQgOAZAAA0QAAA1AOAZQAOAZAdAAQAdAAAPgZQAOgZAAg1QAAg0gOgZQgOgZgeAAQgdAAgOAZg");
	this.shape_5.setTransform(-65.1,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhABfQgWggAAg/QAAg+AWggQAXggApAAQAqAAAXAgQAWAgAAA+QAAA+gWAhQgXAggqAAQgpAAgXgggAgrhNQgOAZAAA0QAAA1AOAZQAOAZAdAAQAeAAAOgZQAOgZAAg1QAAg0gOgZQgOgZgeAAQgdAAgOAZg");
	this.shape_6.setTransform(-86.1,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AgQAcQAOgQABgNIgQAAIAAgkIAjAAIAAAZQAAAOgFAMQgFAMgKAMg");
	this.shape_7.setTransform(-100.6,36.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AhEB8IAAgXIA3AAIAAi9Ig0AgIAAgbIBAgoIAQAAIAADgIA2AAIAAAXg");
	this.shape_8.setTransform(-114.3,23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("ABbB8IAAi3IhRC3IgTAAIhSi2IABC2IgbAAIAAj3IAYAAIBdDVIBejVIAYAAIAAD3g");
	this.shape_9.setTransform(-140.5,23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("ABDB8IgehTQgGgPgKgFQgKgGgRAAIg/AAIAABtIgcAAIAAj3IBiAAQAoAAAWARQAVASAAAhQAAAZgMAQQgNAQgYAIQALABAHAIQAIAHAFAOIAgBUgAhFgHIBFAAQA4AAAAgvQAAgXgOgLQgOgMgcAAIhFAAg");
	this.shape_10.setTransform(-166.8,23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgHBIIAAhkIAPAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_11.setTransform(34.2,-14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AgkA/IADgNQAJAGAJACQAIACAKAAQAOAAAIgHQAHgIAAgPIAAgYQgFAKgJAFQgIAFgMAAQgNAAgKgGQgKgGgGgMQgGgKAAgPQAAgPAGgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAGAFAJIAAgRIAQAAIAABiQAAAXgMALQgLAMgWAAQgWAAgRgLgAgWgxQgIAJAAARQAAARAIAJQAJAKAOAAQAOAAAIgKQAJgJAAgRQAAgRgJgJQgIgKgOAAQgOAAgJAKg");
	this.shape_12.setTransform(25.4,-9.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AAcAzIAAg9QAAgOgGgHQgFgGgMAAQgNAAgJAIQgIAKAAAOIAAA4IgQAAIAAhHQAAgQgCgMIAPAAIACASQAFgKAJgFQAJgGALABQAkgBAAAoIAAA+g");
	this.shape_13.setTransform(13.9,-12.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_14.setTransform(1.7,-12.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF00").s().p("AAcAzIAAg9QAAgOgGgHQgGgGgMAAQgMAAgJAIQgIAKAAAOIAAA4IgQAAIAAhHQgBgQgBgMIAPAAIACASQAEgKAKgFQAJgGALABQAkgBAAAoIAAA+g");
	this.shape_15.setTransform(-9.8,-12.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF00").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_16.setTransform(-21,-12.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF00").s().p("AA5AzIAAg9QAAgOgFgHQgFgGgLAAQgMAAgIAIQgHAKAAAOIAAA4IgPAAIAAg9QAAgOgFgHQgFgGgLAAQgNAAgHAIQgHAKAAAOIAAA4IgRAAIAAhHQAAgQgBgMIAPAAIACARQAEgJAIgGQAJgEALAAQAMAAAHAEQAHAFADAKQAFgJAJgFQAJgGALABQAhgBAAAoIAAA+g");
	this.shape_17.setTransform(-35.4,-12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF00").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_18.setTransform(-49.5,-12.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("AA5AzIAAg9QAAgOgFgHQgFgGgLAAQgMAAgIAIQgHAKAAAOIAAA4IgPAAIAAg9QAAgOgFgHQgFgGgLAAQgNAAgHAIQgHAKAAAOIAAA4IgRAAIAAhHQAAgQgBgMIAPAAIACARQAEgJAIgGQAJgEALAAQAMAAAHAEQAHAFADAKQAFgJAJgFQAJgGALABQAhgBAAAoIAAA+g");
	this.shape_19.setTransform(-63.9,-12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF00").s().p("AAbBJIAAg+QAAgNgGgHQgFgGgMAAQgNAAgJAIQgIAJAAAOIAAA5IgQAAIAAiRIAQAAIAAA/QAFgKAJgFQAJgEAKAAQAkgBAAAnIAAA/g");
	this.shape_20.setTransform(-83.6,-14.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_21.setTransform(-95.8,-12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFF00").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_22.setTransform(-103.8,-14.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_23.setTransform(-111.6,-12.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF00").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_24.setTransform(-120.7,-13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFF00").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_25.setTransform(-135.6,-12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFF00").s().p("AgZBEQgKgHgGgMQgFgMAAgPQAAgQAFgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAFAEAJIAAg/IAQAAIAACSIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgGQgJAJAAATQAAASAJAKQAIALAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape_26.setTransform(-147.6,-14.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF00").s().p("AAcAzIAAg9QAAgOgGgHQgFgGgMAAQgOAAgIAIQgIAKAAAOIAAA4IgRAAIAAhHQAAgQgBgMIAPAAIACASQAFgKAJgFQAJgGALABQAkgBAAAoIAAA+g");
	this.shape_27.setTransform(-159.1,-12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF00").s().p("AA1BHIgPgkIhKAAIgQAkIgRAAIA/iNIANAAIA/CNgAgeAVIA+AAIgghIg");
	this.shape_28.setTransform(-172.3,-14.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_29.setTransform(-24.4,-12.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF00").s().p("AAcAyIgchNIgcBNIgPAAIglhjIARAAIAcBQIAdhQIAOAAIAdBQIAchQIARAAIgmBjg");
	this.shape_30.setTransform(-38.8,-12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("AgHAyIgrhjIARAAIAhBSIAjhSIAQAAIgsBjg");
	this.shape_31.setTransform(-68.9,-12);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AghApQgIgKgBgUIAAg9IAQAAIAAA9QAAANAHAHQAFAGAMABQAMAAAIgJQAIgJAAgPIAAg3IARAAIAABjIgRAAIAAgRQgEAJgJAFQgJAFgKAAQgRAAgKgKg");
	this.shape_32.setTransform(-108.8,-11.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF00").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_33.setTransform(-120.3,-12.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF00").s().p("AgHBHIAAg6Ig4hTIATAAIAsBGIAthGIATAAIg4BUIAAA5g");
	this.shape_34.setTransform(-132.1,-14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27,p:{x:-159.1}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-83.6}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:-21}},{t:this.shape_15},{t:this.shape_14,p:{x:1.7}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_20,p:{x:-92}},{t:this.shape_14,p:{x:-80.5}},{t:this.shape_31},{t:this.shape_16,p:{x:-58.2}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_27,p:{x:-12.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap36();
	this.instance.parent = this;
	this.instance.setTransform(-215,-119.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-215,-119.1,430,238);


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
	this.shape.setTransform(287.4,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(280.8,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(271.2,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_3.setTransform(263.7,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_4.setTransform(256,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_5.setTransform(244.3,47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(232.3,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_7.setTransform(225.9,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(219.6,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_9.setTransform(211.2,47.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(203,47.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_11.setTransform(195.2,45.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(184.3,45.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_13.setTransform(179.5,46.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(172.4,47.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_15.setTransform(163.4,49.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_16.setTransform(147.2,47.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(135.2,47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_18.setTransform(128.7,45.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_19.setTransform(121.8,47.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(112.2,45.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(99.1,47.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_22.setTransform(91.3,45.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_23.setTransform(79.4,46.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_24.setTransform(72,47.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_25.setTransform(62.9,45.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(53.5,47.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_27.setTransform(45.1,47.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_28.setTransform(38.8,47.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_29.setTransform(31,47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_30.setTransform(23.8,46.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_31.setTransform(12.1,47.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(2.5,47.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_33.setTransform(-6.7,47.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_34.setTransform(-13.2,45.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(-20.2,47.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_36.setTransform(-26.6,45.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_37.setTransform(-37.8,47.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_38.setTransform(-45.2,46.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_39.setTransform(-53,47.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_40.setTransform(-61,45.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_41.setTransform(-72.9,46.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(-79.9,47.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_43.setTransform(-86.7,47.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_44.setTransform(-94.4,47.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_45.setTransform(-103.7,46);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgGgEgFQgFgDgIAAQgLAAgLAGIAAgMIALgEIAMgBQANAAAIAGQAJAIAAAKQAAAHgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape_46.setTransform(293.6,22);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_47.setTransform(284.9,21.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_48.setTransform(275.6,23.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_49.setTransform(267.5,21.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_50.setTransform(258.1,23.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_51.setTransform(250,21.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(235.9,25.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_53.setTransform(226.6,23.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(217,23.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_55.setTransform(208.2,25.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_56.setTransform(195,23.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_57.setTransform(185.3,23.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_58.setTransform(176.1,23.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_59.setTransform(169.6,21.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_60.setTransform(162.7,23.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_61.setTransform(156.2,21.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_62.setTransform(145.1,23.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_63.setTransform(137.6,22.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_64.setTransform(129.9,23.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_65.setTransform(121.9,21.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_66.setTransform(108.2,21.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_67.setTransform(98.5,23.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_68.setTransform(92,21.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_69.setTransform(85.1,23.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_70.setTransform(75.5,21.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_71.setTransform(65.9,23.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_72.setTransform(54.2,22.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_73.setTransform(46.9,23.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_74.setTransform(38.8,21.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_75.setTransform(32.1,22);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_76.setTransform(27.8,23.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_77.setTransform(20.1,23.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_78.setTransform(11.2,21.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_79.setTransform(-3.2,25.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_80.setTransform(-12.5,23.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_81.setTransform(-22.1,23.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgjAxQALgDAFgFQAGgEAFgIIADgIIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_82.setTransform(-30.9,25.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_83.setTransform(-44,21.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_84.setTransform(-53.8,23.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_85.setTransform(-61.8,21.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_86.setTransform(-71.6,23.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_87.setTransform(-80.9,23.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_88.setTransform(-90.6,23.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_89.setTransform(-101.9,22.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_90.setTransform(353.2,3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_91.setTransform(346.8,-0.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_92.setTransform(339.8,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_93.setTransform(331.3,-0.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_94.setTransform(322.2,-2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_95.setTransform(307.9,1.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_96.setTransform(298.6,-0.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_97.setTransform(288.9,-0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_98.setTransform(280.1,1.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_99.setTransform(269.8,-2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_100.setTransform(266,-1.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_101.setTransform(259,-0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_102.setTransform(247.4,-0.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_103.setTransform(236.1,-0.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_104.setTransform(222.8,-0.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_105.setTransform(213.5,-0.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_106.setTransform(203.9,-0.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_107.setTransform(195.9,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_108.setTransform(186,-0.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_109.setTransform(173.8,-2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_110.setTransform(164.4,-0.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_111.setTransform(156.9,-1.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_112.setTransform(149.4,-0.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_113.setTransform(140.2,-0.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_114.setTransform(126.6,-0.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_115.setTransform(117,-0.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_116.setTransform(107.8,-0.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_117.setTransform(101.3,-2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_118.setTransform(94.3,-0.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_119.setTransform(87.9,-2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_120.setTransform(76.7,-0.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_121.setTransform(69.3,-1.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_122.setTransform(61.5,-0.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AASA7IgognIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_123.setTransform(53.5,-2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_124.setTransform(39.5,-0.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_125.setTransform(32,-1.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_126.setTransform(24.7,1.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_127.setTransform(17.8,-1.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_128.setTransform(12.1,-0.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_129.setTransform(3.3,-0.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_130.setTransform(-5.7,-0.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_131.setTransform(-17.1,-0.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_132.setTransform(-33,-0.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_133.setTransform(-39.5,-1.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_134.setTransform(-46.5,1.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_135.setTransform(-55.8,-0.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_136.setTransform(-62.3,-1.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_137.setTransform(-73.5,-0.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_138.setTransform(-83.1,-2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_139.setTransform(-92.4,-0.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_140.setTransform(-102.9,-1.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_141.setTransform(54.5,45.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_142.setTransform(16.8,45.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGABQgMgBgFgGg");
	this.shape_143.setTransform(9.2,46.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_144.setTransform(-2.3,47.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_145.setTransform(-57.2,45.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_146.setTransform(-64.8,46.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_147.setTransform(-76.8,49.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgtgrAAIgZAAg");
	this.shape_148.setTransform(-102.6,46);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_149.setTransform(302.5,23.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_150.setTransform(291,23.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_151.setTransform(280,23.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_152.setTransform(272.1,23.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_153.setTransform(253.9,25.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_154.setTransform(221.2,23.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_155.setTransform(207.9,22.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_156.setTransform(201.2,23.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_157.setTransform(189,23.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_158.setTransform(166.3,21.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_159.setTransform(133.5,21.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_160.setTransform(121.1,23.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_161.setTransform(103.2,23.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_162.setTransform(75.5,23.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_163.setTransform(67,23.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_164.setTransform(28.5,23.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_165.setTransform(17,23.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_166.setTransform(0.2,23.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_167.setTransform(-7.1,21.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_168.setTransform(-27.3,21.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_169.setTransform(-44.6,21.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_170.setTransform(-51.8,23.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_171.setTransform(-73.7,23.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_172.setTransform(-86.2,21.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000066").s().p("AAhA5IghhdIggBdIgLAAIgnhxIANAAIAgBfIAhhfIAJAAIAhBfIAhhfIAMAAIgnBxg");
	this.shape_173.setTransform(-99.8,22.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgFABQgMgBgGgGg");
	this.shape_174.setTransform(360.8,-1.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_175.setTransform(344.1,-0.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_176.setTransform(334.9,-0.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_177.setTransform(326.6,-0.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_178.setTransform(318.7,-0.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_179.setTransform(249.7,-0.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_180.setTransform(218.1,-0.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_181.setTransform(210,-0.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_182.setTransform(200.8,-0.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_183.setTransform(181.2,-0.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_184.setTransform(173.2,-0.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_185.setTransform(165.8,-2.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_186.setTransform(147,-0.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_187.setTransform(139,-0.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_188.setTransform(127.5,-0.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_189.setTransform(116.5,-0.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_190.setTransform(108.6,-0.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_191.setTransform(48.1,-0.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_192.setTransform(32.5,-0.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_193.setTransform(25.3,-0.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_194.setTransform(12.4,-0.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_195.setTransform(-6.3,-0.2);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_196.setTransform(-42.2,-2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_197.setTransform(-58,-0.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_198.setTransform(-69.5,-0.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_199.setTransform(-94.5,-0.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000066").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAkg4IAQAAIgtBDIAAAug");
	this.shape_200.setTransform(-103.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:-83.1}},{t:this.shape_137},{t:this.shape_136,p:{x:-62.3}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133,p:{x:-39.5}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130,p:{x:-5.7}},{t:this.shape_129},{t:this.shape_128,p:{x:12.1,y:-0.2}},{t:this.shape_127,p:{x:17.8,y:-1.9}},{t:this.shape_126,p:{x:24.7}},{t:this.shape_125,p:{x:32}},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121,p:{x:69.3}},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115,p:{x:117,y:-0.2}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103,p:{x:236.1}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:266,y:-1.9}},{t:this.shape_99},{t:this.shape_98,p:{x:280.1}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92,p:{x:339.8,y:-0.3}},{t:this.shape_91},{t:this.shape_90,p:{x:353.2}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87,p:{x:-80.9,y:23.6}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80,p:{x:-12.5,y:23.6}},{t:this.shape_79,p:{x:-3.2}},{t:this.shape_78},{t:this.shape_77,p:{x:20.1,y:23.7}},{t:this.shape_76,p:{x:27.8}},{t:this.shape_75,p:{x:32.1}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72,p:{x:54.2}},{t:this.shape_71},{t:this.shape_70,p:{x:75.5,y:21.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{x:156.2,y:21.9}},{t:this.shape_60},{t:this.shape_59,p:{x:169.6}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:195}},{t:this.shape_55},{t:this.shape_54,p:{x:217,y:23.7}},{t:this.shape_53,p:{x:226.6}},{t:this.shape_52,p:{x:235.9}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48,p:{x:275.6,y:23.8}},{t:this.shape_47,p:{x:284.9}},{t:this.shape_46,p:{x:293.6}},{t:this.shape_45},{t:this.shape_44,p:{x:-94.4,y:47.6}},{t:this.shape_43,p:{x:-86.7,y:47.5}},{t:this.shape_42,p:{x:-79.9,y:47.6}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37,p:{x:-37.8}},{t:this.shape_36},{t:this.shape_35,p:{x:-20.2,y:47.6}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:2.5,y:47.6}},{t:this.shape_31,p:{x:12.1,y:47.5}},{t:this.shape_30},{t:this.shape_29,p:{x:31,y:47.6}},{t:this.shape_28,p:{x:38.8}},{t:this.shape_27,p:{x:45.1,y:47.6}},{t:this.shape_26,p:{x:53.5,y:47.6}},{t:this.shape_25},{t:this.shape_24,p:{x:72,y:47.7}},{t:this.shape_23},{t:this.shape_22,p:{x:91.3,y:45.8}},{t:this.shape_21,p:{x:99.1,y:47.6}},{t:this.shape_20,p:{x:112.2,y:45.8}},{t:this.shape_19},{t:this.shape_18,p:{x:128.7,y:45.8}},{t:this.shape_17,p:{x:135.2,y:47.6}},{t:this.shape_16,p:{x:147.2,y:47.5}},{t:this.shape_15},{t:this.shape_14,p:{x:172.4}},{t:this.shape_13},{t:this.shape_12,p:{x:184.3}},{t:this.shape_11},{t:this.shape_10,p:{x:203}},{t:this.shape_9,p:{x:211.2}},{t:this.shape_8,p:{x:219.6}},{t:this.shape_7,p:{x:225.9,y:45.8}},{t:this.shape_6,p:{x:232.3,y:47.6}},{t:this.shape_5,p:{x:244.3}},{t:this.shape_4,p:{x:256,y:47.6}},{t:this.shape_3,p:{x:263.7}},{t:this.shape_2},{t:this.shape_1,p:{x:280.8}},{t:this.shape,p:{x:287.4}}]}).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_24,p:{x:-85.3,y:-0.1}},{t:this.shape_198},{t:this.shape_197},{t:this.shape_48,p:{x:-48.8,y:-0.1}},{t:this.shape_196},{t:this.shape_70,p:{x:-35.8,y:-2}},{t:this.shape_18,p:{x:-24.6,y:-2}},{t:this.shape_136,p:{x:-20.8}},{t:this.shape_22,p:{x:-14.1,y:-2}},{t:this.shape_195},{t:this.shape_121,p:{x:4.9}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_130,p:{x:39.2}},{t:this.shape_191},{t:this.shape_125,p:{x:55.9}},{t:this.shape_103,p:{x:63.1}},{t:this.shape_54,p:{x:76.2,y:-0.2}},{t:this.shape_126,p:{x:90.4}},{t:this.shape_35,p:{x:99.6,y:-0.2}},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_138,p:{x:154}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_98,p:{x:192}},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_87,p:{x:229.3,y:-0.3}},{t:this.shape_77,p:{x:238.4,y:-0.2}},{t:this.shape_179},{t:this.shape_44,p:{x:265.2,y:-0.2}},{t:this.shape_16,p:{x:276.5,y:-0.3}},{t:this.shape_6,p:{x:288.1,y:-0.2}},{t:this.shape_133,p:{x:295.1}},{t:this.shape_61,p:{x:298.9,y:-2}},{t:this.shape_4,p:{x:309.5,y:-0.2}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_80,p:{x:353.4,y:-0.3}},{t:this.shape_174},{t:this.shape_90,p:{x:365.5}},{t:this.shape_173},{t:this.shape_172},{t:this.shape_127,p:{x:-79.7,y:22}},{t:this.shape_171},{t:this.shape_47,p:{x:-65.2}},{t:this.shape_170},{t:this.shape_169},{t:this.shape_72,p:{x:-34.9}},{t:this.shape_168},{t:this.shape_42,p:{x:-18.3,y:23.7}},{t:this.shape_167},{t:this.shape_166},{t:this.shape_59,p:{x:6.7}},{t:this.shape_7,p:{x:10.5,y:21.9}},{t:this.shape_165},{t:this.shape_164},{t:this.shape_100,p:{x:37.4,y:22}},{t:this.shape_56,p:{x:43.9}},{t:this.shape_79,p:{x:53.2}},{t:this.shape_163},{t:this.shape_162},{t:this.shape_29,p:{x:82.2,y:23.7}},{t:this.shape_128,p:{x:94.9,y:23.7}},{t:this.shape_161},{t:this.shape_53,p:{x:112.4}},{t:this.shape_160},{t:this.shape_75,p:{x:127}},{t:this.shape_159},{t:this.shape_26,p:{x:142.9,y:23.7}},{t:this.shape_92,p:{x:150.6,y:23.6}},{t:this.shape_21,p:{x:157.4,y:23.7}},{t:this.shape_158},{t:this.shape_17,p:{x:180.1,y:23.7}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_76,p:{x:214.2}},{t:this.shape_154},{t:this.shape_31,p:{x:230.4,y:23.6}},{t:this.shape_52,p:{x:239.7}},{t:this.shape_153},{t:this.shape_32,p:{x:263.1,y:23.7}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_43,p:{x:310.5,y:23.6}},{t:this.shape_20,p:{x:317.5,y:21.9}},{t:this.shape_27,p:{x:326.4,y:23.7}},{t:this.shape_46,p:{x:334.5}},{t:this.shape_148},{t:this.shape_28,p:{x:-93.4}},{t:this.shape_115,p:{x:-86.4,y:47.6}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_14,p:{x:-48.2}},{t:this.shape_5,p:{x:-36.9}},{t:this.shape_12,p:{x:-23.7}},{t:this.shape_1,p:{x:-17.2}},{t:this.shape_3,p:{x:-9.8}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_10,p:{x:25.8}},{t:this.shape_9,p:{x:38.2}},{t:this.shape_37,p:{x:46.8}},{t:this.shape_141},{t:this.shape_8,p:{x:61.6}},{t:this.shape,p:{x:67.8}}]},1).wait(1));

	// outlineshade
	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#D40000").ss(4,2,0,3).p("EAm8AAAMgm0AAAMgnDAAA");
	this.shape_201.setTransform(115.5,69);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#D40000").ss(1,2,0,3).p("Egn3AG/IBFpkIBXhQIhIhQIALh6MApCAAAMAlOAAAIh4N+");
	this.shape_202.setTransform(121.5,24.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F5F5F5").s().p("A1QG/IBFpkIBXhQIhIhQIALh5MApCAAAIjdN9g");
	this.shape_203.setTransform(2.4,24.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#D40000").ss(4,2,0,3).p("EAoHAAAMgpJAAAMgnEAAA");
	this.shape_204.setTransform(123,69);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#D40000").ss(1,2,0,3).p("EgpCAG/IBFpkIBXhQIhIhQIALh6MApCAAAMAnkAAAIh4N+");
	this.shape_205.setTransform(129,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]}).to({state:[{t:this.shape_203},{t:this.shape_205},{t:this.shape_204}]},1).wait(1));

	// white
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FAFAFA").s().p("Egn3AG/IBFpkIBXhQIhIhQIALh5MBOQAAAIh4N9g");
	this.shape_206.setTransform(121.5,24.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FAFAFA").s().p("EgpCAG/IBFpkIBXhQIhIhQIALh5MBQmAAAIh4N9g");
	this.shape_207.setTransform(129,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_206}]}).to({state:[{t:this.shape_207}]},1).wait(1));

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
	this.shape.setTransform(200.8,50.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_1.setTransform(197.1,45.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_2.setTransform(190.5,47.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_3.setTransform(182.5,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(172.6,47.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_5.setTransform(163.5,45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(147.2,47.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(135.2,47.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_8.setTransform(128.7,45.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(121.8,47.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(112.2,45.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_11.setTransform(99.1,47.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_12.setTransform(91.3,45.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_13.setTransform(79.4,46.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_14.setTransform(72,47.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_15.setTransform(62.9,45.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(53.5,47.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_17.setTransform(45.1,47.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_18.setTransform(38.8,47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(31,47.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_20.setTransform(23.8,46.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(12.1,47.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(2.5,47.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_23.setTransform(-6.7,47.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_24.setTransform(-13.2,45.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(-20.2,47.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_26.setTransform(-26.6,45.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_27.setTransform(-37.8,47.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_28.setTransform(-45.2,46.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(-53,47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_30.setTransform(-61,45.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_31.setTransform(-72.9,46.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_32.setTransform(-79.9,47.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_33.setTransform(-86.7,47.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(-94.4,47.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_35.setTransform(-103.7,46);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgGgEgFQgFgDgIAAQgLAAgLAGIAAgMIALgEIAMgBQANAAAIAGQAJAIAAAKQAAAHgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape_36.setTransform(294.8,22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_37.setTransform(286.1,21.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_38.setTransform(276.3,23.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_39.setTransform(264.7,23.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(253.4,23.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_41.setTransform(247.1,21.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(235.9,25.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_43.setTransform(226.6,23.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_44.setTransform(217,23.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_45.setTransform(208.2,25.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(195,23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_47.setTransform(185.3,23.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_48.setTransform(176.1,23.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_49.setTransform(169.6,21.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(162.7,23.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_51.setTransform(156.2,21.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_52.setTransform(145.1,23.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_53.setTransform(137.6,22.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(129.9,23.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_55.setTransform(121.9,21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_56.setTransform(108.2,21.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_57.setTransform(98.5,23.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_58.setTransform(92,21.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_59.setTransform(85.1,23.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_60.setTransform(75.5,21.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(65.9,23.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_62.setTransform(54.2,22.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_63.setTransform(46.9,23.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_64.setTransform(38.8,21.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_65.setTransform(32.1,22);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_66.setTransform(27.8,23.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_67.setTransform(20.1,23.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_68.setTransform(11.2,21.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_69.setTransform(-3.2,25.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_70.setTransform(-12.5,23.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_71.setTransform(-22.1,23.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgjAxQALgDAFgFQAGgEAFgIIADgIIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_72.setTransform(-30.9,25.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_73.setTransform(-44,21.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_74.setTransform(-53.8,23.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_75.setTransform(-61.8,21.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_76.setTransform(-71.6,23.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_77.setTransform(-80.9,23.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_78.setTransform(-90.6,23.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AApA5IAAhUIglBUIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_79.setTransform(-101.9,22.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_80.setTransform(353.2,3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_81.setTransform(346.8,-0.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_82.setTransform(339.8,-0.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_83.setTransform(331.3,-0.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_84.setTransform(322.2,-2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_85.setTransform(307.9,1.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_86.setTransform(298.6,-0.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_87.setTransform(288.9,-0.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_88.setTransform(280.1,1.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_89.setTransform(269.8,-2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_90.setTransform(266,-1.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_91.setTransform(259,-0.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_92.setTransform(247.4,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_93.setTransform(236.1,-0.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_94.setTransform(222.8,-0.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_95.setTransform(213.5,-0.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_96.setTransform(203.9,-0.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_97.setTransform(195.9,-2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_98.setTransform(186,-0.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_99.setTransform(173.8,-2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_100.setTransform(164.4,-0.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_101.setTransform(156.9,-1.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_102.setTransform(149.4,-0.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_103.setTransform(140.2,-0.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_104.setTransform(126.6,-0.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_105.setTransform(117,-0.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_106.setTransform(107.8,-0.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_107.setTransform(101.3,-2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_108.setTransform(94.3,-0.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_109.setTransform(87.9,-2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_110.setTransform(76.7,-0.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_111.setTransform(69.3,-1.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_112.setTransform(61.5,-0.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AASA7IgognIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_113.setTransform(53.5,-2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_114.setTransform(39.5,-0.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_115.setTransform(32,-1.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_116.setTransform(24.7,1.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_117.setTransform(17.8,-1.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_118.setTransform(12.1,-0.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_119.setTransform(3.3,-0.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_120.setTransform(-5.7,-0.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_121.setTransform(-17.1,-0.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_122.setTransform(-33,-0.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_123.setTransform(-39.5,-1.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_124.setTransform(-46.5,1.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_125.setTransform(-55.8,-0.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_126.setTransform(-62.3,-1.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_127.setTransform(-73.5,-0.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_128.setTransform(-83.1,-2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_129.setTransform(-92.4,-0.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_130.setTransform(-102.9,-1.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_131.setTransform(39.4,45.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_132.setTransform(16.8,45.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGABQgMgBgFgGg");
	this.shape_133.setTransform(9.2,46.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_134.setTransform(-2.3,47.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_135.setTransform(-57.2,45.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_136.setTransform(-64.8,46.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_137.setTransform(-76.8,49.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgtgrAAIgZAAg");
	this.shape_138.setTransform(-102.6,46);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_139.setTransform(273.7,23.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_140.setTransform(262.2,23.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_141.setTransform(251.2,23.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_142.setTransform(243.3,23.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_143.setTransform(225.1,25.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_144.setTransform(182.5,23.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_145.setTransform(166.3,21.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_146.setTransform(133.5,21.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_147.setTransform(121.1,23.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_148.setTransform(103.2,23.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_149.setTransform(67,23.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_150.setTransform(28.5,23.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_151.setTransform(17,23.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_152.setTransform(0.2,23.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_153.setTransform(-7.1,21.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_154.setTransform(-27.3,21.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_155.setTransform(-44.6,21.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_156.setTransform(-51.8,23.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_157.setTransform(-73.7,23.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_158.setTransform(-86.2,21.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000066").s().p("AAhA5IghhdIggBdIgLAAIgnhxIANAAIAgBfIAhhfIAJAAIAhBfIAhhfIAMAAIgnBxg");
	this.shape_159.setTransform(-99.8,22.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgFABQgMgBgGgGg");
	this.shape_160.setTransform(360.8,-1.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_161.setTransform(344.1,-0.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_162.setTransform(334.9,-0.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_163.setTransform(326.6,-0.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_164.setTransform(318.7,-0.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_165.setTransform(295.1,-1.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_166.setTransform(249.7,-0.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_167.setTransform(218.1,-0.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_168.setTransform(210,-0.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_169.setTransform(200.8,-0.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_170.setTransform(181.2,-0.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_171.setTransform(173.2,-0.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_172.setTransform(165.8,-2.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_173.setTransform(147,-0.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_174.setTransform(139,-0.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_175.setTransform(127.5,-0.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_176.setTransform(116.5,-0.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_177.setTransform(108.6,-0.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_178.setTransform(63.1,-0.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_179.setTransform(48.1,-0.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_180.setTransform(39.2,-0.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_181.setTransform(32.5,-0.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_182.setTransform(25.3,-0.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_183.setTransform(12.4,-0.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_184.setTransform(-6.3,-0.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_185.setTransform(-20.8,-1.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_186.setTransform(-35.8,-2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_187.setTransform(-58,-0.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_188.setTransform(-69.5,-0.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_189.setTransform(-94.5,-0.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000066").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAkg4IAQAAIgtBDIAAAug");
	this.shape_190.setTransform(-103.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128,p:{x:-83.1}},{t:this.shape_127},{t:this.shape_126,p:{x:-62.3,y:-1.9}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123,p:{x:-39.5,y:-1.9}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:-5.7}},{t:this.shape_119},{t:this.shape_118,p:{x:12.1,y:-0.2}},{t:this.shape_117,p:{x:17.8,y:-1.9}},{t:this.shape_116,p:{x:24.7}},{t:this.shape_115,p:{x:32}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:69.3}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:117,y:-0.2}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:236.1}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:266,y:-1.9}},{t:this.shape_89},{t:this.shape_88,p:{x:280.1}},{t:this.shape_87},{t:this.shape_86,p:{x:298.6}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:339.8,y:-0.3}},{t:this.shape_81},{t:this.shape_80,p:{x:353.2}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:-80.9,y:23.6}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:-44}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70,p:{x:-12.5}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:20.1}},{t:this.shape_66,p:{x:27.8}},{t:this.shape_65,p:{x:32.1,y:22}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:54.2}},{t:this.shape_61},{t:this.shape_60,p:{x:75.5}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:156.2,y:21.9}},{t:this.shape_50},{t:this.shape_49,p:{x:169.6,y:21.9}},{t:this.shape_48},{t:this.shape_47,p:{x:185.3,y:23.7}},{t:this.shape_46,p:{x:195}},{t:this.shape_45},{t:this.shape_44,p:{x:217,y:23.7}},{t:this.shape_43,p:{x:226.6,y:23.6}},{t:this.shape_42,p:{x:235.9}},{t:this.shape_41,p:{x:247.1}},{t:this.shape_40,p:{x:253.4}},{t:this.shape_39,p:{x:264.7,y:23.6}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:294.8}},{t:this.shape_35},{t:this.shape_34,p:{x:-94.4,y:47.6}},{t:this.shape_33,p:{x:-86.7,y:47.5}},{t:this.shape_32,p:{x:-79.9,y:47.6}},{t:this.shape_31,p:{x:-72.9}},{t:this.shape_30},{t:this.shape_29,p:{x:-53,y:47.6}},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:-20.2,y:47.6}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:2.5,y:47.6}},{t:this.shape_21,p:{x:12.1}},{t:this.shape_20},{t:this.shape_19,p:{x:31,y:47.6}},{t:this.shape_18,p:{x:38.8}},{t:this.shape_17,p:{x:45.1,y:47.6}},{t:this.shape_16,p:{x:53.5}},{t:this.shape_15},{t:this.shape_14,p:{x:72,y:47.7}},{t:this.shape_13},{t:this.shape_12,p:{x:91.3,y:45.8}},{t:this.shape_11,p:{x:99.1}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:128.7,y:45.8}},{t:this.shape_7,p:{x:135.2,y:47.6}},{t:this.shape_6,p:{x:147.2}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:182.5,y:45.8}},{t:this.shape_2,p:{x:190.5,y:47.7}},{t:this.shape_1,p:{x:197.1,y:45.8}},{t:this.shape,p:{x:200.8}}]}).to({state:[{t:this.shape_190},{t:this.shape_189},{t:this.shape_14,p:{x:-85.3,y:-0.1}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_2,p:{x:-48.8,y:-0.1}},{t:this.shape_51,p:{x:-42.2,y:-2}},{t:this.shape_186},{t:this.shape_8,p:{x:-24.6,y:-2}},{t:this.shape_185},{t:this.shape_12,p:{x:-14.1,y:-2}},{t:this.shape_184},{t:this.shape_111,p:{x:4.9}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_115,p:{x:55.9}},{t:this.shape_178},{t:this.shape_44,p:{x:76.2,y:-0.2}},{t:this.shape_116,p:{x:90.4}},{t:this.shape_25,p:{x:99.6,y:-0.2}},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_128,p:{x:154}},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_88,p:{x:192}},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_86,p:{x:229.3}},{t:this.shape_120,p:{x:238.4}},{t:this.shape_166},{t:this.shape_93,p:{x:265.2}},{t:this.shape_39,p:{x:276.5,y:-0.3}},{t:this.shape_29,p:{x:288.1,y:-0.2}},{t:this.shape_165},{t:this.shape_49,p:{x:298.9,y:-2}},{t:this.shape_47,p:{x:309.5,y:-0.2}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_77,p:{x:353.4,y:-0.3}},{t:this.shape_160},{t:this.shape_80,p:{x:365.5}},{t:this.shape_159},{t:this.shape_158},{t:this.shape_126,p:{x:-79.7,y:22}},{t:this.shape_157},{t:this.shape_73,p:{x:-65.2}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_62,p:{x:-34.9}},{t:this.shape_154},{t:this.shape_67,p:{x:-18.3}},{t:this.shape_153},{t:this.shape_152},{t:this.shape_41,p:{x:6.7}},{t:this.shape_1,p:{x:10.5,y:21.9}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_123,p:{x:37.4,y:22}},{t:this.shape_70,p:{x:43.9}},{t:this.shape_42,p:{x:53.2}},{t:this.shape_149},{t:this.shape_82,p:{x:75.5,y:23.6}},{t:this.shape_40,p:{x:82.2}},{t:this.shape_118,p:{x:94.9,y:23.7}},{t:this.shape_148},{t:this.shape_46,p:{x:112.4}},{t:this.shape_147},{t:this.shape_117,p:{x:127,y:22}},{t:this.shape_146},{t:this.shape_34,p:{x:142.9,y:23.7}},{t:this.shape_66,p:{x:150.6}},{t:this.shape_32,p:{x:157.4,y:23.7}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_19,p:{x:193.8,y:23.7}},{t:this.shape_7,p:{x:202.7,y:23.7}},{t:this.shape_3,p:{x:212.5,y:21.9}},{t:this.shape_143},{t:this.shape_22,p:{x:234.3,y:23.7}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_33,p:{x:281.7,y:23.6}},{t:this.shape_60,p:{x:288.7}},{t:this.shape_17,p:{x:297.6,y:23.7}},{t:this.shape_36,p:{x:305.7}},{t:this.shape_138},{t:this.shape_18,p:{x:-93.4}},{t:this.shape_105,p:{x:-86.4,y:47.6}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_16,p:{x:-48.2}},{t:this.shape_6,p:{x:-36.9}},{t:this.shape_90,p:{x:-23.7,y:45.9}},{t:this.shape_43,p:{x:-17.2,y:47.5}},{t:this.shape_31,p:{x:-9.8}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_11,p:{x:25.8}},{t:this.shape_131},{t:this.shape_65,p:{x:45.8,y:45.9}},{t:this.shape_21,p:{x:52.3}},{t:this.shape,p:{x:58.9}}]},1).wait(1));

	// outlineshade
	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#D40000").ss(4,2,0,3).p("EAm8AAAMgm0AAAMgnDAAA");
	this.shape_191.setTransform(115.5,69);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#D40000").ss(1,2,0,3).p("Egn3AG/IBFpkIBXhQIhIhQIALh6MApCAAAMAlOAAAIh4N+");
	this.shape_192.setTransform(121.5,24.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#F5F5F5").s().p("A1QG/IBFpkIBXhQIhIhQIALh5MApCAAAIjdN9g");
	this.shape_193.setTransform(2.4,24.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#D40000").ss(4,2,0,3).p("EAoHAAAMgpJAAAMgnEAAA");
	this.shape_194.setTransform(123,69);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#D40000").ss(1,2,0,3).p("EgpCAG/IBFpkIBXhQIhIhQIALh6MApCAAAMAnkAAAIh4N+");
	this.shape_195.setTransform(129,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191}]}).to({state:[{t:this.shape_193},{t:this.shape_195},{t:this.shape_194}]},1).wait(1));

	// white
	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FAFAFA").s().p("Egn3AG/IBFpkIBXhQIhIhQIALh5MBOQAAAIh4N9g");
	this.shape_196.setTransform(121.5,24.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FAFAFA").s().p("EgpCAG/IBFpkIBXhQIhIhQIALh5MBQmAAAIh4N9g");
	this.shape_197.setTransform(129,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_196}]}).to({state:[{t:this.shape_197}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-21.7,513.6,92.7);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(229.6,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(220.8,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(211.1,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_3.setTransform(203.1,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(196.4,45.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(192.1,47.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(184.4,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_7.setTransform(175.5,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(168.5,45.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_9.setTransform(161.6,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_10.setTransform(149.9,46.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_11.setTransform(142.6,47.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgFABgGABQgMgBgFgGg");
	this.shape_12.setTransform(135.1,46.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_13.setTransform(127.3,47.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_14.setTransform(118.1,49.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA2g1IASAAIg7A4IA9A5g");
	this.shape_15.setTransform(104.7,46);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_16.setTransform(92.9,46);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAPAAAaQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgtgrAAIgZAAg");
	this.shape_17.setTransform(81.3,46);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_18.setTransform(73,46);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_19.setTransform(66.1,46);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_20.setTransform(54.2,46.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_21.setTransform(46.9,47.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_22.setTransform(38.8,45.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_23.setTransform(32.1,45.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_24.setTransform(27.8,47.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(20.1,47.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(11.2,45.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(-3.2,49.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(-12.5,47.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_29.setTransform(-22.1,47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgjAwQALgDAFgDQAGgFAFgJIADgHIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_30.setTransform(-30.9,49.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_31.setTransform(-44,45.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(-53.8,47.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_33.setTransform(-61.8,45.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(-71.6,47.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_35.setTransform(-80.9,47.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(-90.6,47.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AApA5IAAhTIglBTIgIAAIglhTIAABTIgMAAIAAhxIALAAIAqBiIArhiIALAAIAABxg");
	this.shape_37.setTransform(-101.9,46);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_38.setTransform(187.7,26.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJAEAEQADAEAHgBQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_39.setTransform(183,22.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_40.setTransform(175.3,23.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_41.setTransform(163.6,23.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_42.setTransform(152,23.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_43.setTransform(145.5,21.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_44.setTransform(140.2,21.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_45.setTransform(130.3,23.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_46.setTransform(118.7,23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(102.5,23.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_48.setTransform(93.3,25.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_49.setTransform(83.3,23.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_50.setTransform(76.3,23.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_51.setTransform(68.6,23.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_52.setTransform(59.7,21.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(50.3,23.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_54.setTransform(41.4,21.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_55.setTransform(27.4,23.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_56.setTransform(17.7,23.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_57.setTransform(9.7,21.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_58.setTransform(-0.1,23.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_59.setTransform(-6.6,22);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_60.setTransform(-13.5,21.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_61.setTransform(-22.4,23.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAHgEADgIIAEgIIgjhOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_62.setTransform(-31,25.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_63.setTransform(-40,23.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_64.setTransform(-49,23.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_65.setTransform(-60.4,23.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_66.setTransform(-76.2,23.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_67.setTransform(-82.7,21.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_68.setTransform(-87,23.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_69.setTransform(-94.8,23.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_70.setTransform(-103.8,25.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_71.setTransform(229,-0.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_72.setTransform(219.4,-2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_73.setTransform(210.1,-0.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_74.setTransform(200.5,-0.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_75.setTransform(189.8,4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_76.setTransform(183.3,-0.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_77.setTransform(173.6,-0.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_78.setTransform(167.2,-1.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_79.setTransform(163.4,-2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(156.4,-0.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_81.setTransform(149,-1.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_82.setTransform(138,-0.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_83.setTransform(129.1,-0.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_84.setTransform(121.6,-1.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_85.setTransform(113.9,-0.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_86.setTransform(100.1,-0.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_87.setTransform(93.1,-0.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_88.setTransform(84.7,-0.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_89.setTransform(76.3,-0.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_90.setTransform(67.9,-0.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_91.setTransform(59.5,-0.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_92.setTransform(44.3,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_93.setTransform(32.7,-0.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_94.setTransform(25.7,-0.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_95.setTransform(17.7,-0.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_96.setTransform(10.3,-2.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_97.setTransform(1.6,-1.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_98.setTransform(-5.3,-0.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_99.setTransform(-12.8,-1.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_100.setTransform(-17.9,-0.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_101.setTransform(-25.6,-0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAGgEAEgIIACgIIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_102.setTransform(-34.2,1.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_103.setTransform(-43.2,-0.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_104.setTransform(-52.2,-0.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_105.setTransform(-63.6,-0.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_106.setTransform(-76.7,-1.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_107.setTransform(-83.7,1.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_108.setTransform(-93.3,-0.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAHQgFAGgIAEQAKABAFAIQAGAHAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgKQAAgWgaAAIghAAgAgdgGIAeAAQANAAAGgEQAHgGAAgKQAAgTgaAAIgeAAg");
	this.shape_109.setTransform(-103.1,-1.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAbhBIANAAIgiBPg");
	this.shape_110.setTransform(22.9,47.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgbAzQgLgHgGgNQgHgNAAgSQAAgRAGgNQAHgNALgHQAMgHAPAAQAQAAAMAHQALAHAHANQAGANAAARQAAASgGANQgHANgLAHQgMAHgQAAQgPAAgMgHgAgbgiQgKAMAAAWQAAAWAKAMQAKANARAAQASAAAKgNQAKgMAAgWQAAgWgKgMQgKgMgSAAQgRAAgKAMg");
	this.shape_111.setTransform(-37.3,46);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBbIAAhbIANAAIAABxg");
	this.shape_112.setTransform(-49.5,46);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_113.setTransform(-64.7,45.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_114.setTransform(-96.1,45.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_115.setTransform(213.5,25.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_116.setTransform(188.9,23.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_117.setTransform(177.3,23.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_118.setTransform(160.6,23.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_119.setTransform(133.1,21.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgFAAQgMABgGgHg");
	this.shape_120.setTransform(125.5,22.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_121.setTransform(115.8,21.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_122.setTransform(108.6,23.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_123.setTransform(95.2,21.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_124.setTransform(74.1,21.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AAgA5IgghdIggBdIgKAAIgphxIAOAAIAgBfIAhhfIAJAAIAhBfIAhhfIAMAAIgnBxg");
	this.shape_125.setTransform(60.5,22.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_126.setTransform(33.9,21.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_127.setTransform(15.7,22.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_128.setTransform(-0.8,21.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_129.setTransform(-36.9,23.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_130.setTransform(-45.5,23.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_131.setTransform(-67.3,21.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_132.setTransform(-79.9,23.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_133.setTransform(-88.8,23.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_134.setTransform(202.6,-0.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_135.setTransform(195.2,-1.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_136.setTransform(183.2,-2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_137.setTransform(155.7,-0.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AAZA6IAAgwQgEAHgHAEQgHAEgIAAQgLAAgJgFQgHgFgFgKQgFgIABgMQgBgNAFgKQAFgJAHgFQAJgFALgBQAIABAHAEQAIAEADAIIACgPIALAAIgBAXIAABbgAgRgnQgHAJAAAPQAAAPAHAGQAGAJALgBQAMABAGgJQAHgHAAgOQAAgPgHgJQgGgHgMgBQgLABgGAHg");
	this.shape_138.setTransform(146.1,1.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_139.setTransform(103.3,-0.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_140.setTransform(89.9,-0.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_141.setTransform(80.7,-0.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_142.setTransform(71.9,1.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_143.setTransform(26,-0.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_144.setTransform(18.7,-2.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_145.setTransform(-11.9,-2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_146.setTransform(-27.7,-0.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_147.setTransform(-70.9,-1.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_148.setTransform(-77.4,-0.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_149.setTransform(-84.8,-0.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_150.setTransform(-94.5,-0.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000066").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_151.setTransform(-103.9,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-76.7}},{t:this.shape_105},{t:this.shape_104,p:{x:-52.2}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101,p:{x:-25.6}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:1.6}},{t:this.shape_96,p:{x:10.3,y:-2.1}},{t:this.shape_95,p:{x:17.7,y:-0.2}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:59.5,y:-0.2}},{t:this.shape_90,p:{x:67.9}},{t:this.shape_89,p:{x:76.3,y:-0.2}},{t:this.shape_88},{t:this.shape_87,p:{x:93.1}},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:138,y:-0.2}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:163.4,y:-2}},{t:this.shape_78,p:{x:167.2,y:-1.9}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75,p:{x:189.8}},{t:this.shape_74},{t:this.shape_73,p:{x:210.1}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:-94.8,y:23.7}},{t:this.shape_68,p:{x:-87,y:23.6}},{t:this.shape_67,p:{x:-82.7}},{t:this.shape_66,p:{x:-76.2,y:23.8}},{t:this.shape_65},{t:this.shape_64,p:{x:-49}},{t:this.shape_63,p:{x:-40,y:23.6}},{t:this.shape_62},{t:this.shape_61,p:{x:-22.4}},{t:this.shape_60},{t:this.shape_59,p:{x:-6.6}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:27.4,y:23.6}},{t:this.shape_54},{t:this.shape_53,p:{x:50.3}},{t:this.shape_52},{t:this.shape_51,p:{x:68.6}},{t:this.shape_50,p:{x:76.3,y:23.6}},{t:this.shape_49},{t:this.shape_48,p:{x:93.3}},{t:this.shape_47},{t:this.shape_46,p:{x:118.7,y:23.6}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:145.5,y:21.9}},{t:this.shape_42},{t:this.shape_41,p:{x:163.6}},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:187.7}},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-80.9,y:47.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-12.5,y:47.5}},{t:this.shape_27,p:{x:-3.2}},{t:this.shape_26,p:{x:11.2}},{t:this.shape_25,p:{x:20.1}},{t:this.shape_24,p:{x:27.8,y:47.5}},{t:this.shape_23,p:{x:32.1,y:45.9}},{t:this.shape_22},{t:this.shape_21,p:{x:46.9}},{t:this.shape_20},{t:this.shape_19,p:{x:66.1}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:127.3,y:47.6}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:168.5,y:45.9}},{t:this.shape_7},{t:this.shape_6,p:{x:184.4}},{t:this.shape_5,p:{x:192.1,y:47.5}},{t:this.shape_4,p:{x:196.4}},{t:this.shape_3},{t:this.shape_2,p:{x:211.1,y:47.6}},{t:this.shape_1,p:{x:220.8}},{t:this.shape,p:{x:229.6}}]}).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_73,p:{x:-64.4}},{t:this.shape_13,p:{x:-50.9,y:-0.2}},{t:this.shape_63,p:{x:-41.2,y:-0.3}},{t:this.shape_146},{t:this.shape_55,p:{x:-18.5,y:-0.3}},{t:this.shape_145},{t:this.shape_106,p:{x:-8.1}},{t:this.shape_35,p:{x:-1.6,y:-0.3}},{t:this.shape_104,p:{x:7.5}},{t:this.shape_144},{t:this.shape_143},{t:this.shape_87,p:{x:34}},{t:this.shape_66,p:{x:41,y:-0.1}},{t:this.shape_46,p:{x:52.6,y:-0.3}},{t:this.shape_75,p:{x:61.5}},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_68,p:{x:111.7,y:-0.3}},{t:this.shape_101,p:{x:118.5}},{t:this.shape_50,p:{x:130.4,y:-0.3}},{t:this.shape_90,p:{x:137.2}},{t:this.shape_138},{t:this.shape_137},{t:this.shape_97,p:{x:162.3}},{t:this.shape_24,p:{x:167.6,y:-0.3}},{t:this.shape_69,p:{x:174.3,y:-0.2}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_48,p:{x:-103.8}},{t:this.shape_5,p:{x:-95.7,y:23.6}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_78,p:{x:-73.8,y:22}},{t:this.shape_131},{t:this.shape_64,p:{x:-57.9}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_41,p:{x:-25.3}},{t:this.shape_61,p:{x:-13.9}},{t:this.shape_128},{t:this.shape_53,p:{x:8.6}},{t:this.shape_127},{t:this.shape_2,p:{x:23.1,y:23.7}},{t:this.shape_59,p:{x:30.1}},{t:this.shape_126},{t:this.shape_91,p:{x:39.7,y:23.7}},{t:this.shape_38,p:{x:45.5}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_23,p:{x:80.7,y:22}},{t:this.shape_89,p:{x:86.7,y:23.7}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_51,p:{x:142.1}},{t:this.shape_96,p:{x:153.2,y:21.8}},{t:this.shape_118},{t:this.shape_79,p:{x:167.1,y:21.9}},{t:this.shape_67,p:{x:170.9}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_8,p:{x:197.7,y:22}},{t:this.shape_28,p:{x:204.2,y:23.6}},{t:this.shape_115},{t:this.shape_82,p:{x:-104.8,y:47.6}},{t:this.shape_114},{t:this.shape_95,p:{x:-86.9,y:47.6}},{t:this.shape_21,p:{x:-77.7}},{t:this.shape_43,p:{x:-71.1,y:45.8}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_19,p:{x:-26.3}},{t:this.shape_26,p:{x:-12.2}},{t:this.shape_25,p:{x:-3.3}},{t:this.shape_27,p:{x:9.8}},{t:this.shape_4,p:{x:16.8}},{t:this.shape_110},{t:this.shape_6,p:{x:31.5}},{t:this.shape_1,p:{x:40.5}},{t:this.shape,p:{x:49.3}}]},1).wait(1));

	// outlineshade
	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#D40000").ss(4,2,0,3).p("AeCAAI+WAAI9tAA");
	this.shape_152.setTransform(58.5,69);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#D40000").ss(1,2,0,3).p("A+9G/IBFpkIBXhQIhIhQIALh6IfqAAIcyAAIh4N+");
	this.shape_153.setTransform(64.5,24.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F5F5F5").s().p("AwkG/IBFpkIBXhQIhIhQIALh5IfqAAIjeN9g");
	this.shape_154.setTransform(-27.6,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]}).wait(2));

	// white
	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FAFAFA").s().p("A+9G/IBFpkIBXhQIhIhQIALh5MA8cAAAIh4N9g");
	this.shape_155.setTransform(64.5,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_155).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-21.7,399.6,92.7);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(228.3,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(219.5,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(209.8,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_3.setTransform(201.8,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_4.setTransform(192.4,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_5.setTransform(184.3,45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(174.5,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_7.setTransform(168,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(156.9,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(147.3,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(138,47.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(128.3,47.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(115.5,47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_13.setTransform(107,47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_14.setTransform(100,47.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(91.5,47.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_16.setTransform(82.3,45.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(68.3,49.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(59,47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(49.4,47.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgkAwQAMgDAGgDQAFgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_20.setTransform(40.6,49.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(27.1,47.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_22.setTransform(17.9,49.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_23.setTransform(7,46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_24.setTransform(-4.9,50.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_25.setTransform(-8.6,45.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_26.setTransform(-12.4,45.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_27.setTransform(-19.4,47.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_28.setTransform(-28.7,47.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_29.setTransform(-37.6,47.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_30.setTransform(-45.4,45.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(-52.1,45.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(-59.1,45.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_33.setTransform(-71.3,45.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_34.setTransform(-81.1,47.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(-90.7,45.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_36.setTransform(-97.2,45.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGABQgMgBgFgGg");
	this.shape_37.setTransform(-102,46.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(199.9,25.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(190.6,23.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_40.setTransform(180.9,23.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgjAxQALgDAGgFQAFgEAFgIIACgIIgihOIAOAAIAaBBIAchBIAMAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_41.setTransform(172.1,25.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_42.setTransform(161.3,23.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(153.3,23.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_44.setTransform(144.2,21.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_45.setTransform(132,23.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(120.5,23.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_47.setTransform(111.2,23.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_48.setTransform(97.3,23.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_49.setTransform(87.7,21.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(78.1,23.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_51.setTransform(68.9,25.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_52.setTransform(62.1,22);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_53.setTransform(57.8,23.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(49.3,23.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_55.setTransform(39.7,21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_56.setTransform(25.9,23.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_57.setTransform(16.3,21.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_58.setTransform(7,23.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_59.setTransform(-2.6,23.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_60.setTransform(-16.1,23.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(-25.3,23.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_62.setTransform(-32.7,21.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_63.setTransform(-39.6,23.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_64.setTransform(-45.9,21.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_65.setTransform(-52.1,23.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgEABgHAAQgLABgGgHg");
	this.shape_66.setTransform(-59.4,22.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_67.setTransform(-71.3,23.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_68.setTransform(-80.9,21.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_69.setTransform(-90.5,23.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_70.setTransform(-99.7,25.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_71.setTransform(209.4,-0.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AATA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAkgkIARAAIgnAmIAqAqg");
	this.shape_72.setTransform(202.1,-2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_73.setTransform(192.9,-0.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_74.setTransform(185.7,-1.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_75.setTransform(175.3,-2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_76.setTransform(165.9,-0.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_77.setTransform(158.4,-1.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_78.setTransform(150.9,-0.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_79.setTransform(142,-0.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_80.setTransform(133.1,-2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_81.setTransform(125.6,-0.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_82.setTransform(117.9,-0.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_83.setTransform(109,-2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_84.setTransform(96.8,-0.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_85.setTransform(91.6,-0.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_86.setTransform(83.2,-0.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_87.setTransform(74.9,-0.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_88.setTransform(63.5,-0.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_89.setTransform(47.3,-0.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_90.setTransform(35.6,-0.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_91.setTransform(26.8,-1.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_92.setTransform(22.5,-0.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_93.setTransform(14.7,-0.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_94.setTransform(5.6,-0.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_95.setTransform(-3.3,-0.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_96.setTransform(-14.8,-0.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_97.setTransform(-30.6,-0.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_98.setTransform(-37.6,-0.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_99.setTransform(-46,-0.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_100.setTransform(-55.1,-2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_101.setTransform(-69.4,-0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(-79,-2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_103.setTransform(-88.3,-0.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_104.setTransform(-98.8,-1.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_105.setTransform(30.8,45.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_106.setTransform(17.4,47.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgjAwQALgDAGgDQAFgFAFgJIACgHIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_107.setTransform(-0.6,49.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_108.setTransform(-27.1,47.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_109.setTransform(-65.2,46.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_110.setTransform(-82.2,45.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AAhA5IghhdIggBdIgLAAIgnhxIANAAIAgBeIAhheIAJABIAhBdIAhheIAMAAIgnBxg");
	this.shape_111.setTransform(-95.8,46);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_112.setTransform(117.9,21.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_113.setTransform(59.7,23.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_114.setTransform(48.2,23.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_115.setTransform(-38.6,23.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_116.setTransform(-81.2,23.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_117.setTransform(-90.4,21.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_118.setTransform(217.7,-0.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AgkAwQAMgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_119.setTransform(208.9,1.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_120.setTransform(186.5,-0.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_121.setTransform(163.9,1.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_122.setTransform(104,-1.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AAZAoIgZgfIgYAfIgQAAIAhgoIgfgnIAQAAIAWAdIAXgdIAQAAIgfAnIAhAog");
	this.shape_123.setTransform(97,-0.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_124.setTransform(81.2,-1.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_125.setTransform(69.2,-0.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_126.setTransform(37.9,-0.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_127.setTransform(17.4,-0.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_128.setTransform(-8.3,-1.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_129.setTransform(-15.1,-0.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_130.setTransform(-31.1,-0.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_131.setTransform(-49.2,-0.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_132.setTransform(-67.7,-2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_133.setTransform(-81.2,-0.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_134.setTransform(-90.4,-0.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AgGA5IAAguIgthDIAQAAIAjA4IAkg4IAQAAIgtBDIAAAug");
	this.shape_135.setTransform(-99.8,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:-30.6}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:14.7}},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90,p:{x:35.6}},{t:this.shape_89},{t:this.shape_88,p:{x:63.5,y:-0.3}},{t:this.shape_87,p:{x:74.9}},{t:this.shape_86,p:{x:83.2}},{t:this.shape_85,p:{x:91.6}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82,p:{x:117.9}},{t:this.shape_81,p:{x:125.6}},{t:this.shape_80},{t:this.shape_79,p:{x:142}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:165.9}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73,p:{x:192.9}},{t:this.shape_72},{t:this.shape_71,p:{x:209.4}},{t:this.shape_70},{t:this.shape_69,p:{x:-90.5,y:23.7}},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:-52.1,y:23.7}},{t:this.shape_64},{t:this.shape_63,p:{x:-39.6}},{t:this.shape_62,p:{x:-32.7}},{t:this.shape_61,p:{x:-25.3,y:23.7}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:7,y:23.6}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:57.8,y:23.6}},{t:this.shape_52},{t:this.shape_51,p:{x:68.9}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47,p:{x:111.2}},{t:this.shape_46,p:{x:120.5,y:23.7}},{t:this.shape_45,p:{x:132}},{t:this.shape_44},{t:this.shape_43,p:{x:153.3,y:23.7}},{t:this.shape_42,p:{x:161.3}},{t:this.shape_41},{t:this.shape_40,p:{x:180.9,y:23.7}},{t:this.shape_39,p:{x:190.6}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:-90.7,y:45.8}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-59.1}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:-37.6,y:47.6}},{t:this.shape_28,p:{x:-28.7,y:47.5}},{t:this.shape_27,p:{x:-19.4,y:47.6}},{t:this.shape_26},{t:this.shape_25,p:{x:-8.6,y:45.9}},{t:this.shape_24,p:{x:-4.9,y:50.8}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:59,y:47.5}},{t:this.shape_17},{t:this.shape_16,p:{x:82.3}},{t:this.shape_15},{t:this.shape_14,p:{x:100,y:47.5}},{t:this.shape_13,p:{x:107,y:47.7}},{t:this.shape_12,p:{x:115.5}},{t:this.shape_11,p:{x:128.3,y:47.6}},{t:this.shape_10,p:{x:138,y:47.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:168}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:192.4,y:47.7}},{t:this.shape_3,p:{x:201.8,y:45.8}},{t:this.shape_2},{t:this.shape_1,p:{x:219.5,y:47.5}},{t:this.shape,p:{x:228.3}}]}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_40,p:{x:-58.5,y:-0.2}},{t:this.shape_131},{t:this.shape_93,p:{x:-40.6}},{t:this.shape_130},{t:this.shape_97,p:{x:-23.6}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_81,p:{x:2.2}},{t:this.shape_87,p:{x:8.9}},{t:this.shape_127},{t:this.shape_85,p:{x:25.5}},{t:this.shape_25,p:{x:31.8,y:-1.9}},{t:this.shape_126},{t:this.shape_82,p:{x:46.5}},{t:this.shape_35,p:{x:55.4,y:-2}},{t:this.shape_125},{t:this.shape_124},{t:this.shape_79,p:{x:88.4}},{t:this.shape_123},{t:this.shape_122},{t:this.shape_90,p:{x:118.1}},{t:this.shape_73,p:{x:129.5}},{t:this.shape_86,p:{x:137.8}},{t:this.shape_71,p:{x:145.7}},{t:this.shape_27,p:{x:154.3,y:-0.2}},{t:this.shape_121},{t:this.shape_65,p:{x:173.4,y:-0.2}},{t:this.shape_120},{t:this.shape_58,p:{x:195.7,y:-0.3}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_76,p:{x:226.9}},{t:this.shape_53,p:{x:234.9,y:-0.3}},{t:this.shape_51,p:{x:-99.7}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_47,p:{x:-72}},{t:this.shape_63,p:{x:-62.9}},{t:this.shape_62,p:{x:-51.7}},{t:this.shape_42,p:{x:-45.5}},{t:this.shape_115},{t:this.shape_88,p:{x:-27,y:23.6}},{t:this.shape_11,p:{x:-11.2,y:23.7}},{t:this.shape_39,p:{x:-1.5}},{t:this.shape_13,p:{x:12,y:23.8}},{t:this.shape_28,p:{x:21.3,y:23.6}},{t:this.shape_3,p:{x:30.8,y:21.9}},{t:this.shape_18,p:{x:38.9,y:23.6}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_10,p:{x:71.3,y:23.6}},{t:this.shape_1,p:{x:84.8,y:23.6}},{t:this.shape_4,p:{x:94.2,y:23.8}},{t:this.shape_45,p:{x:105.8}},{t:this.shape_112},{t:this.shape_29,p:{x:126.8,y:23.7}},{t:this.shape_14,p:{x:134.6,y:23.6}},{t:this.shape_24,p:{x:138.8,y:26.9}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_69,p:{x:-73,y:47.6}},{t:this.shape_109},{t:this.shape_12,p:{x:-54.2}},{t:this.shape_16,p:{x:-45.5}},{t:this.shape_61,p:{x:-36.3,y:47.6}},{t:this.shape_108},{t:this.shape_7,p:{x:-20.5}},{t:this.shape_32,p:{x:-14.1}},{t:this.shape_107},{t:this.shape_46,p:{x:8.2,y:47.6}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_43,p:{x:40.4,y:47.6}},{t:this.shape,p:{x:49.1}}]},1).wait(1));

	// outlineshade
	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#D40000").ss(4,2,0,3).p("AeCAAI+WAAI9tAA");
	this.shape_136.setTransform(58.5,69);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#D40000").ss(1,2,0,3).p("A+9G/IBFpkIBXhQIhIhQIALh6IfqAAIcyAAIh4N+");
	this.shape_137.setTransform(64.5,24.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F5F5F5").s().p("AwkG/IBFpkIBXhQIhIhQIALh5IfqAAIjeN9g");
	this.shape_138.setTransform(-27.6,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]}).wait(2));

	// white
	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FAFAFA").s().p("A+9G/IBFpkIBXhQIhIhQIALh5MA8cAAAIh4N9g");
	this.shape_139.setTransform(64.5,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_139).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-21.7,399.6,92.7);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgFQAAgIgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(116.1,45.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(107.3,47.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(97.6,47.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_3.setTransform(89.6,45.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_4.setTransform(80.2,47.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_5.setTransform(72.1,45.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_6.setTransform(62.3,47.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_7.setTransform(55.8,45.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(44.7,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_9.setTransform(35.1,45.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_10.setTransform(25.8,47.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_11.setTransform(16.1,47.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_12.setTransform(4.5,46.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_13.setTransform(-2.9,47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAEgBAFgBIAAALQgGABgFABQgMgBgFgGg");
	this.shape_14.setTransform(-10.4,46.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(-18.1,47.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_16.setTransform(-27.3,49.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(-41.6,49.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_18.setTransform(-50.9,47.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(-60.5,47.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgjAwQALgDAGgDQAGgFAEgJIACgHIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_20.setTransform(-69.3,49.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_21.setTransform(-82.8,47.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgkA6IAAhbQAAgMgCgLIANAAIABAQQADgIAIgFQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAIALAAQAMAAAHgIQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_22.setTransform(-92,49.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_23.setTransform(-102.9,46);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_24.setTransform(230.4,26.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_25.setTransform(223.9,23.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_26.setTransform(216.9,23.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(208.5,23.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAJAAQAcAAAAAfIAAAzg");
	this.shape_28.setTransform(199.3,21.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(189.5,23.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_30.setTransform(180.4,21.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(166.1,25.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(156.8,23.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_33.setTransform(147.1,23.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgkAxQAMgDAFgFQAGgEAEgIIADgIIghhOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_34.setTransform(138.3,25.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_35.setTransform(127.5,23.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(119,23.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgjAxQALgDAGgFQAGgEAEgIIACgIIgihOIAOAAIAaBBIAbhBIANAAIglBXQgFANgJAHQgJAGgNADg");
	this.shape_37.setTransform(110.2,25.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(100.9,23.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_39.setTransform(94.5,21.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(88.2,23.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_41.setTransform(79.2,25.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_42.setTransform(65.4,25.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(55.4,23.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_44.setTransform(47.4,21.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAHQAHAIALAAQALAAAHgIQAGgHAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(37.5,25.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(28.2,23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_47.setTransform(21.7,22);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAFABADgCIAAALQgFABgFAAQgMABgFgHg");
	this.shape_48.setTransform(16.9,22.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_49.setTransform(9.9,23.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAAqQAAAJADAEQAEAEAHgBQAEABAEgCIAAALQgFABgGAAQgLABgGgHg");
	this.shape_50.setTransform(2.6,22.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_51.setTransform(-11.4,23.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_52.setTransform(-23.4,23.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_53.setTransform(-29.8,21.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_54.setTransform(-36.8,23.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_55.setTransform(-46.4,21.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_56.setTransform(-57,21.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_57.setTransform(-63.6,23.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_58.setTransform(-72,23.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_59.setTransform(-80.8,23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_60.setTransform(-90.1,23.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_61.setTransform(-101.8,23.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_62.setTransform(260.6,-0.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_63.setTransform(255.4,-0.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_64.setTransform(247,-0.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_65.setTransform(238.7,-0.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_66.setTransform(227.3,-0.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_67.setTransform(211.5,-0.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_68.setTransform(204,-1.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_69.setTransform(196.2,-0.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_70.setTransform(187.6,-0.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_71.setTransform(177.6,4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_72.setTransform(171.1,-0.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_73.setTransform(161.4,-0.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_74.setTransform(155,-1.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_75.setTransform(151.2,-2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_76.setTransform(144.2,-0.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_77.setTransform(136.8,-1.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_78.setTransform(125.8,-0.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_79.setTransform(116.9,-0.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_80.setTransform(109.4,-1.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_81.setTransform(101.7,-0.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_82.setTransform(90,-1.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_83.setTransform(82.3,-0.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_84.setTransform(70.6,-0.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_85.setTransform(59,-0.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_86.setTransform(52.5,-2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_87.setTransform(47.2,-2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_88.setTransform(37.3,-0.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_89.setTransform(25.7,-0.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_90.setTransform(12.6,-1.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_91.setTransform(8.3,-0.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_92.setTransform(-0.1,-0.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_93.setTransform(-8.5,-0.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_94.setTransform(-17.3,-0.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_95.setTransform(-26.3,-0.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_96.setTransform(-37.7,-0.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_97.setTransform(-53.9,-0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_98.setTransform(-62.5,-0.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_99.setTransform(-71.5,-0.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_100.setTransform(-83.1,-0.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_101.setTransform(-94.4,-0.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgPgEQgMgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_102.setTransform(-103.7,-1.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_103.setTransform(46.4,47.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_104.setTransform(36.8,45.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_105.setTransform(14.2,47.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_106.setTransform(-21.1,47.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_107.setTransform(-30.3,47.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_108.setTransform(-39.5,45.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgEABgHABQgLgBgGgGg");
	this.shape_109.setTransform(-59.3,46.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_110.setTransform(-76.2,45.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AAhA5IghhdIgfBdIgMAAIgnhxIANAAIAgBeIAhheIAJABIAhBdIAgheIANAAIgoBxg");
	this.shape_111.setTransform(-89.8,46);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIAOAAIAWBAIAXhAIALAAIAYBAIAWhAIANAAIgdBPg");
	this.shape_112.setTransform(234.6,23.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_113.setTransform(223,23.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_114.setTransform(213.4,21.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_115.setTransform(188.8,23.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_116.setTransform(148.2,23.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_117.setTransform(136.7,23.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_118.setTransform(121.8,21.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_119.setTransform(105.6,23.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_120.setTransform(0,23.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000066").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgJAIgEQAHgFAJABQAKgBAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgJgMABQgLgBgGAJg");
	this.shape_121.setTransform(-9.2,25.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_122.setTransform(-58.3,23.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_123.setTransform(143.6,-0.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_124.setTransform(120.9,-0.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_125.setTransform(114.4,-1.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAAsQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgFABgFABQgMgBgFgGg");
	this.shape_126.setTransform(109.6,-1.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_127.setTransform(72.9,-0.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_128.setTransform(65.5,-2.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_129.setTransform(51.7,-1.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_130.setTransform(43.2,-0.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_131.setTransform(35.2,-0.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_132.setTransform(27.8,-2.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_133.setTransform(15.9,1.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_134.setTransform(0.1,-1.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_135.setTransform(-6.4,-2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_136.setTransform(-21.4,-0.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_137.setTransform(-29.9,-0.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_138.setTransform(-47.2,-0.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_139.setTransform(-59.6,-0.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_140.setTransform(-65.9,-2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_141.setTransform(-69.7,-1.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_142.setTransform(-76.2,-2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000066").s().p("AAhA5IghhcIgfBcIgMAAIgnhxIANAAIAgBeIAhheIAJABIAhBdIAgheIANAAIgoBxg");
	this.shape_143.setTransform(-89.8,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_102},{t:this.shape_101,p:{x:-94.4}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:-62.5,y:-0.2}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95,p:{x:-26.3}},{t:this.shape_94,p:{x:-17.3}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91,p:{x:8.3}},{t:this.shape_90,p:{x:12.6}},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78,p:{x:125.8,y:-0.2}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74,p:{x:155,y:-1.9}},{t:this.shape_73},{t:this.shape_72,p:{x:171.1}},{t:this.shape_71,p:{x:177.6}},{t:this.shape_70,p:{x:187.6,y:-0.2}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:238.7,y:-0.2}},{t:this.shape_64,p:{x:247,y:-0.2}},{t:this.shape_63,p:{x:255.4,y:-0.2}},{t:this.shape_62},{t:this.shape_61,p:{x:-101.8,y:23.6}},{t:this.shape_60,p:{x:-90.1}},{t:this.shape_59,p:{x:-80.8,y:23.6}},{t:this.shape_58,p:{x:-72,y:23.7}},{t:this.shape_57},{t:this.shape_56,p:{x:-57,y:21.9}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52,p:{x:-23.4,y:23.7}},{t:this.shape_51,p:{x:-11.4}},{t:this.shape_50},{t:this.shape_49,p:{x:9.9}},{t:this.shape_48},{t:this.shape_47,p:{x:21.7}},{t:this.shape_46,p:{x:28.2,y:23.6}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:65.4}},{t:this.shape_41,p:{x:79.2}},{t:this.shape_40,p:{x:88.2}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{x:127.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:156.8,y:23.6}},{t:this.shape_31,p:{x:166.1}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26,p:{x:216.9}},{t:this.shape_25},{t:this.shape_24,p:{x:230.4}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-69.3}},{t:this.shape_19,p:{x:-60.5,y:47.6}},{t:this.shape_18,p:{x:-50.9,y:47.5}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15,p:{x:-18.1,y:47.6}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:25.8,y:47.5}},{t:this.shape_9,p:{x:35.1}},{t:this.shape_8,p:{x:44.7,y:47.6}},{t:this.shape_7,p:{x:55.8}},{t:this.shape_6,p:{x:62.3,y:47.6}},{t:this.shape_5},{t:this.shape_4,p:{x:80.2}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:107.3,y:47.5}},{t:this.shape,p:{x:116.1}}]}).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_101,p:{x:-38.8}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_58,p:{x:-14.9,y:-0.2}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_94,p:{x:6.6}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_72,p:{x:58.2}},{t:this.shape_128},{t:this.shape_127},{t:this.shape_91,p:{x:80.9}},{t:this.shape_61,p:{x:90.2,y:-0.3}},{t:this.shape_6,p:{x:101.9,y:-0.2}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_59,p:{x:130.1,y:-0.3}},{t:this.shape_123},{t:this.shape_46,p:{x:152.8,y:-0.3}},{t:this.shape_56,p:{x:159.4,y:-2}},{t:this.shape_90,p:{x:163.2}},{t:this.shape_32,p:{x:169.7,y:-0.3}},{t:this.shape_95,p:{x:178.8}},{t:this.shape_71,p:{x:185}},{t:this.shape_19,p:{x:-94.2,y:23.7}},{t:this.shape_51,p:{x:-78}},{t:this.shape_65,p:{x:-66.5,y:23.7}},{t:this.shape_122},{t:this.shape_98,p:{x:-50.3,y:23.7}},{t:this.shape_8,p:{x:-41.7,y:23.7}},{t:this.shape_31,p:{x:-32.1}},{t:this.shape_63,p:{x:-22.7,y:23.7}},{t:this.shape_121},{t:this.shape_120},{t:this.shape_42,p:{x:9.6}},{t:this.shape_78,p:{x:18.1,y:23.7}},{t:this.shape_60,p:{x:31}},{t:this.shape_41,p:{x:40.6}},{t:this.shape_74,p:{x:51.3,y:22}},{t:this.shape_18,p:{x:57.8,y:23.6}},{t:this.shape_15,p:{x:71.3,y:23.7}},{t:this.shape_10,p:{x:85.2,y:23.6}},{t:this.shape_49,p:{x:94.3}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_35,p:{x:129.7}},{t:this.shape_117},{t:this.shape_116},{t:this.shape_70,p:{x:159.1,y:23.7}},{t:this.shape_40,p:{x:167.5}},{t:this.shape_26,p:{x:175.2}},{t:this.shape_115},{t:this.shape_47,p:{x:197.6}},{t:this.shape_1,p:{x:204.1,y:23.6}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_24,p:{x:243.3}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_52,p:{x:-67,y:47.6}},{t:this.shape_109},{t:this.shape_64,p:{x:-48.3,y:47.6}},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_7,p:{x:-14.6}},{t:this.shape_9,p:{x:-8.1}},{t:this.shape_20,p:{x:5.4}},{t:this.shape_105},{t:this.shape_4,p:{x:23.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape,p:{x:55}}]},1).wait(1));

	// outlineshade
	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#D40000").ss(4,2,0,3).p("AfmAAMgheAAAI9tAA");
	this.shape_144.setTransform(68.5,69);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#D40000").ss(1,2,0,3).p("EgghAG/IBFpkIBXhQIhIhQIALh6IfqAAIf6AAIh4N+");
	this.shape_145.setTransform(74.5,24.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#F5F5F5").s().p("AwkG/IBFpkIBXhQIhIhQIALh5IfqAAIjeN9g");
	this.shape_146.setTransform(-27.6,24.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]}).wait(2));

	// white
	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FAFAFA").s().p("EgghAG/IBFpkIBXhQIhIhQIALh5MA/kAAAIh4N9g");
	this.shape_147.setTransform(74.5,24.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_147).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-21.7,419.6,92.7);


(lib.Mc3op5 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(111.9,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(102.7,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_2.setTransform(95.3,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_3.setTransform(88.4,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_4.setTransform(82.1,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(75.9,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_6.setTransform(68.6,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_7.setTransform(59.3,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(51.3,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_9.setTransform(42.2,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(30.1,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(18.5,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBaIAAhaIANAAIAABxg");
	this.shape_12.setTransform(8,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_13.setTransform(90.9,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_14.setTransform(67.1,15.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(35.5,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_16.setTransform(17.1,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_17.setTransform(7.6,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:30.1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:59.3}},{t:this.shape_6},{t:this.shape_5,p:{x:75.9}},{t:this.shape_4},{t:this.shape_3,p:{x:88.4}},{t:this.shape_2},{t:this.shape_1,p:{x:102.7}},{t:this.shape,p:{x:111.9}}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_1,p:{x:26.3}},{t:this.shape_15},{t:this.shape_5,p:{x:44.6}},{t:this.shape,p:{x:57.8}},{t:this.shape_14},{t:this.shape_10,p:{x:78.7}},{t:this.shape_13},{t:this.shape_3,p:{x:99.8}},{t:this.shape_7,p:{x:107.5}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,118.8,25.9);


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
	this.shape.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape.setTransform(103.6,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(93.8,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_2.setTransform(87.4,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(80.9,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_4.setTransform(72.9,13.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(63.7,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(55.3,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(42.2,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_8.setTransform(30.5,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(18.5,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBaIAAhaIANAAIAABxg");
	this.shape_10.setTransform(8,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(69.4,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_12.setTransform(60.1,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_13.setTransform(49.4,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(33.8,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_15.setTransform(24.6,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_16.setTransform(16.1,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_17.setTransform(7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:30.5}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:63.7}},{t:this.shape_4},{t:this.shape_3,p:{x:80.9}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_3,p:{x:42.9}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_8,p:{x:81.4}},{t:this.shape_5,p:{x:92.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.4,25.9);


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
	this.shape.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape.setTransform(104,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(94.3,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_2.setTransform(82.6,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_3.setTransform(71,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_4.setTransform(64,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_5.setTransform(53.5,14.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(45.8,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_7.setTransform(34.1,15.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(22.1,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_9.setTransform(15.7,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_10.setTransform(7.9,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_11.setTransform(105.5,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_12.setTransform(97.6,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(89.3,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(74.1,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(64.5,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_16.setTransform(54.9,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(41.8,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(18.8,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAiA5IAAg0IhDAAIAAA0IgNAAIAAhxIANAAIAAAzIBDAAIAAgzIANAAIAABxg");
	this.shape_19.setTransform(8.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:64}},{t:this.shape_3},{t:this.shape_2,p:{x:82.6}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_2,p:{x:30.4}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_4,p:{x:82.6}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.9,25.9);


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
	this.shape.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape.setTransform(112.6,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(103,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_2.setTransform(96,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(87.6,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_4.setTransform(75.9,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_5.setTransform(63.9,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_6.setTransform(55.3,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_7.setTransform(42.2,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_8.setTransform(30.5,15.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(18.5,15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBaIAAhaIANAAIAABxg");
	this.shape_10.setTransform(8,13.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_11.setTransform(71.3,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_12.setTransform(59.8,15.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_13.setTransform(47.8,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_14.setTransform(38.5,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_15.setTransform(30.5,13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_16.setTransform(21.9,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_17.setTransform(15.9,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBaIAAhaIANAAIAABxg");
	this.shape_18.setTransform(8,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,121.7,25.9);


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
	this.shape.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape.setTransform(163.4,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_1.setTransform(153.8,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA3g1IARAAIg7A3IA9A6g");
	this.shape_2.setTransform(145,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_3.setTransform(134.9,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_4.setTransform(123.5,15.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgZBAIAnh/IAMAAIgoB/g");
	this.shape_5.setTransform(114.3,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(107,13.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(100.5,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA3g1IARAAIg7A3IA9A6g");
	this.shape_8.setTransform(94.3,13.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkAxQAMgEAGgDQAFgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_9.setTransform(84.2,17.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(72.9,15.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_11.setTransform(59.3,15.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(51.3,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_13.setTransform(42.2,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_14.setTransform(30.1,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(18.5,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBaIAAhaIANAAIAABxg");
	this.shape_16.setTransform(8,13.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(155.4,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_18.setTransform(146.5,13.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_19.setTransform(122.7,15.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(113.4,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA3g1IARAAIg7A3IA+A6g");
	this.shape_21.setTransform(81.1,13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAbA5Ig5g2IAAA2IgOAAIAAhxIAOAAIAAA1IA2g1IASAAIg7A3IA9A6g");
	this.shape_22.setTransform(30.4,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgkAxQAMgEAGgDQAFgFAFgJIACgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_23.setTransform(20.3,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:30.1}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:59.3}},{t:this.shape_10,p:{x:72.9}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:100.5}},{t:this.shape_6,p:{x:107}},{t:this.shape_5,p:{x:114.3}},{t:this.shape_4,p:{x:123.5}},{t:this.shape_3,p:{x:134.9}},{t:this.shape_2},{t:this.shape_1,p:{x:153.8}},{t:this.shape,p:{x:163.4}}]}).to({state:[{t:this.shape_14,p:{x:9}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_7,p:{x:36.6}},{t:this.shape_6,p:{x:43.1}},{t:this.shape_5,p:{x:50.4}},{t:this.shape_10,p:{x:59.6}},{t:this.shape_3,p:{x:71}},{t:this.shape_21},{t:this.shape_1,p:{x:89.9}},{t:this.shape,p:{x:99.5}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_4,p:{x:134.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_11,p:{x:163.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.7,25.9);


(lib.Mc2op4 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(160,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_1.setTransform(152.8,13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAIAHIgFAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_2.setTransform(142.3,13.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(128,15.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(121.6,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(117.3,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(109.5,15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_7.setTransform(102.3,14.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_8.setTransform(95.2,15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_9.setTransform(88.1,13.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(80.4,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcA5Ig6g2IAAA2IgNAAIAAhxIANAAIAAA1IA2g1IARAAIg6A3IA9A6g");
	this.shape_11.setTransform(71.6,13.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_12.setTransform(57.2,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_13.setTransform(49.4,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_14.setTransform(38.5,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(31.5,17.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_16.setTransform(24.5,15.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_17.setTransform(16.8,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAIQgKAIgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_18.setTransform(7.6,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYAzQgLgLAAgTQAAgNAFgIQAFgKAIgFQAJgFAKAAQAQAAAJAKQAJAKAAASIAAADIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgKIAFAKQgGAFgIACQgIADgJAAQgSAAgKgLgAgNgEQgHAFgBALIAtAAQgBgLgFgFQgGgGgKAAQgJAAgGAGgAgCgdIAPggIAPAAIgWAgg");
	this.shape_19.setTransform(101.4,13.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_20.setTransform(61.5,13.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgqAsIAFgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAKAEAHAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_21.setTransform(51,13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(37.2,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_23.setTransform(29.8,14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(18.3,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAQAAQALAAAKADQALAEAGAHIgEAKQgJgHgHgDQgIgDgKAAQgTAAgKAMQgLAMAAAWQAAAXALAMQALAMATAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgLACQgKACgLAAQgQAAgNgHg");
	this.shape_25.setTransform(7.7,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:88.1}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:128}},{t:this.shape_2},{t:this.shape_1,p:{x:152.8}},{t:this.shape,p:{x:160}}]}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_1,p:{x:76.7}},{t:this.shape_3,p:{x:86.6}},{t:this.shape_9,p:{x:94.3}},{t:this.shape_19},{t:this.shape,p:{x:107.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,164.1,25.9);


(lib.Mc2op3copy = function(mode,startPosition,loop) {
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
	this.shape.setTransform(141.1,66.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(134.3,63.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_2.setTransform(124.7,61.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(115.4,63.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_4.setTransform(105.7,63.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_5.setTransform(92.3,61.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(82.6,63.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_7.setTransform(76.1,61.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(69.6,63.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_9.setTransform(61.6,61.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(52.5,63.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_11.setTransform(44.1,63.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_12.setTransform(31.3,63.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_13.setTransform(24.3,63.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_14.setTransform(16.3,63.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAzIADgLQAHAEAHADQAHABAHAAQAMABAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(6.6,64.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_16.setTransform(191.3,39.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_17.setTransform(181.6,39.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_18.setTransform(174.2,38.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_19.setTransform(166.4,39.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(152.6,39.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_21.setTransform(143.4,41);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(133.4,39.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_23.setTransform(124.3,37.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_24.setTransform(110.4,39.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_25.setTransform(101.3,37.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_26.setTransform(94.3,37.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_27.setTransform(83.5,39.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_28.setTransform(73.8,39.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_29.setTransform(65.8,37.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_30.setTransform(53.9,39.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_31.setTransform(42.3,39.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_32.setTransform(35.8,37.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_33.setTransform(30.5,37.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_34.setTransform(20.6,39.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_35.setTransform(9,39.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_36.setTransform(199.2,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(189.5,15.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAHAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgHAEQgHAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_38.setTransform(179.9,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_39.setTransform(168.3,14.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_40.setTransform(160.9,15.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNA3QgHgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAHgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_41.setTransform(151.8,13.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_42.setTransform(142.4,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_43.setTransform(134,15.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_44.setTransform(127.7,15.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_45.setTransform(119.9,15.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_46.setTransform(112.7,14.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_47.setTransform(102.9,15.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_48.setTransform(97.6,15.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_49.setTransform(89.2,15.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_50.setTransform(81,15.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_51.setTransform(69.5,15.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_52.setTransform(53.6,15.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_53.setTransform(44,15.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(34.8,17.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_55.setTransform(22.7,15.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_56.setTransform(13.9,13.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_57.setTransform(7,13.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_58.setTransform(90,61.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_59.setTransform(81.5,63.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_60.setTransform(56.2,62);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_61.setTransform(31.8,63.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_62.setTransform(14.1,63.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(130.4,39.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_64.setTransform(110.8,38.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_65.setTransform(87.6,39.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_66.setTransform(58.4,39.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgHgIg");
	this.shape_67.setTransform(50.4,39.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_68.setTransform(41.2,39.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAGgEAEgIIACgIIgihPIAOAAIAaBCIAbhCIANAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_69.setTransform(32.4,41.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_70.setTransform(22,37.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_71.setTransform(18.2,37.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgFABgHABQgLgBgGgGg");
	this.shape_72.setTransform(4.7,38.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_73.setTransform(165.1,13.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_74.setTransform(123.6,17.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_75.setTransform(97.5,15.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_76.setTransform(89.2,15.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_77.setTransform(62.3,15.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAHgEAIAAQAcAAABAfIAAAzg");
	this.shape_78.setTransform(53.3,13.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_79.setTransform(45.7,14.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_80.setTransform(34.4,15.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgGAoIghhPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_81.setTransform(25.8,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:81}},{t:this.shape_49,p:{x:89.2}},{t:this.shape_48,p:{x:97.6,y:15.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45,p:{x:119.9,y:15.4}},{t:this.shape_44,p:{x:127.7,y:15.3}},{t:this.shape_43,p:{x:134,y:15.4}},{t:this.shape_42,p:{x:142.4,y:15.4}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34,p:{x:20.6,y:39.3}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:53.9,y:39.2}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:83.5,y:39.2}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:143.4}},{t:this.shape_20},{t:this.shape_19,p:{x:166.4,y:39.3}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:24.3}},{t:this.shape_12},{t:this.shape_11,p:{x:44.1}},{t:this.shape_10,p:{x:52.5}},{t:this.shape_9},{t:this.shape_8,p:{x:69.6}},{t:this.shape_7,p:{x:76.1}},{t:this.shape_6,p:{x:82.6,y:63.2}},{t:this.shape_5,p:{x:92.3}},{t:this.shape_4,p:{x:105.7,y:63.2}},{t:this.shape_3,p:{x:115.4,y:63.1}},{t:this.shape_2},{t:this.shape_1,p:{x:134.3,y:63.2}},{t:this.shape,p:{x:141.1}}]}).to({state:[{t:this.shape_57},{t:this.shape_6,p:{x:16.5,y:15.4}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_30,p:{x:77.8,y:15.3}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_49,p:{x:105.4}},{t:this.shape_1,p:{x:114,y:15.4}},{t:this.shape_74},{t:this.shape_50,p:{x:133.1}},{t:this.shape_34,p:{x:146.2,y:15.4}},{t:this.shape_27,p:{x:155.8,y:15.3}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_48,p:{x:12,y:39.3}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_21,p:{x:70}},{t:this.shape_4,p:{x:79.2,y:39.3}},{t:this.shape_65},{t:this.shape_45,p:{x:94.4,y:39.3}},{t:this.shape_3,p:{x:103.3,y:39.2}},{t:this.shape_64},{t:this.shape_43,p:{x:117.6,y:39.3}},{t:this.shape_63},{t:this.shape_44,p:{x:138.4,y:39.2}},{t:this.shape_11,p:{x:5.9}},{t:this.shape_62},{t:this.shape_5,p:{x:22.6}},{t:this.shape_61},{t:this.shape_8,p:{x:40.9}},{t:this.shape_7,p:{x:47.4}},{t:this.shape_60},{t:this.shape_42,p:{x:63.5,y:63.2}},{t:this.shape_19,p:{x:72.4,y:63.2}},{t:this.shape_59},{t:this.shape_58},{t:this.shape_10,p:{x:99}},{t:this.shape_13,p:{x:106.8}},{t:this.shape,p:{x:111}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206.1,73.7);


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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(106,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(99.4,24.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_2.setTransform(89.8,24.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_3.setTransform(81.8,22.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_4.setTransform(71.9,24.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(65,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(52.3,24.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_7.setTransform(42.7,22.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(33.1,24.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkA7IAAhcQAAgMgCgKIANAAIABAPQADgIAIgFQAHgFAJABQAKgBAJAGQAIAFAEAJQAFAKAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgmQgGAHAAAPQAAAPAGAHQAGAJALAAQAMAAAHgJQAGgGAAgQQAAgOgGgIQgHgJgMAAQgLAAgGAJg");
	this.shape_9.setTransform(23.9,25.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(14.6,24.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_11.setTransform(6.8,22.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgCAvQgHgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBADgBIAAALQgEABgGABQgMgBgFgGg");
	this.shape_12.setTransform(200.9,-0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_13.setTransform(193.5,0.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_14.setTransform(184.4,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_15.setTransform(175,0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(166.6,0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_17.setTransform(160.3,0.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_18.setTransform(152.5,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAEgBIAAALQgFABgGABQgLgBgGgGg");
	this.shape_19.setTransform(145.3,-0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_20.setTransform(135.5,0.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_21.setTransform(130.2,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(121.8,0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_23.setTransform(113.6,0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_24.setTransform(102.1,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(86.2,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(76.6,0.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_27.setTransform(68.6,-1.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(58.7,2.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_29.setTransform(49.4,0.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_30.setTransform(39.7,0.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQAAANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_31.setTransform(32.3,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(26.6,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(17,0.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIgBAPQABAPgKAJQgKAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgGQAHgFAAgKQAAgLgHgEQgGgGgNAAIgfAAg");
	this.shape_34.setTransform(7.6,-1.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_35.setTransform(60.3,27.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_36.setTransform(53.4,22.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_37.setTransform(44.1,24.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_38.setTransform(35.2,24.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_39.setTransform(28.9,22.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_40.setTransform(24.6,24.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_41.setTransform(18.4,22.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_42.setTransform(6.6,24.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_43.setTransform(177.9,0.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHABQAFgBAEgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_44.setTransform(170.4,-0.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_45.setTransform(159.2,0.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(149.7,2.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(140.1,0.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_48.setTransform(131.5,0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_49.setTransform(123.6,0.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_50.setTransform(115.3,0.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_51.setTransform(103.9,0.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_52.setTransform(88.4,0.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_53.setTransform(79.4,-1.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgDAvQgGgHAAgMIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHABQAEgBAFgBIAAALQgGABgGABQgLgBgGgGg");
	this.shape_54.setTransform(71.8,-0.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_55.setTransform(59.8,-1.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_56.setTransform(52.9,0.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_57.setTransform(44.4,0.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_58.setTransform(32.9,0.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_59.setTransform(23.6,0.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_60.setTransform(15.6,0.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgiA5IAAhxIBFAAIAAALIg4AAIAAAnIA1AAIAAALIg1AAIAAA0g");
	this.shape_61.setTransform(6.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-15,235.8,49.8);


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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(158.5,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_1.setTransform(153.8,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_2.setTransform(146.4,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQAMAAAGgJQAGgIAAgPQAAgOgGgHQgGgIgMAAQgLAAgHAIg");
	this.shape_3.setTransform(137.3,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(127.9,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(119.5,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(113.2,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(105.4,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_8.setTransform(98.2,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIANAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_9.setTransform(88.4,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(83.1,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_11.setTransform(74.7,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_12.setTransform(66.5,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_13.setTransform(55,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_14.setTransform(39.8,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(30.9,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_16.setTransform(24.4,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_17.setTransform(17.5,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgqA5IAAhxIAtAAQASAAAJAIQAKAIAAAOQAAAJgFAGQgFAHgIADQAKACAFAHQAGAIAAAKQAAAPgKAIQgKAIgSAAgAgdAuIAhAAQANAAAGgFQAHgFAAgLQAAgUgaAAIghAAgAgdgFIAeAAQANgBAGgFQAHgEAAgLQAAgTgaAAIgeAAg");
	this.shape_18.setTransform(7.7,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(128.6,17.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(119,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_21.setTransform(58.2,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_22.setTransform(50.6,14.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_23.setTransform(39.5,17.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_24.setTransform(26.8,17.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAfA5IgOgmQgDgHgEgDQgFgCgHAAIgdAAIAAAyIgNAAIAAhxIAtAAQASAAAKAIQAKAIAAAPQAAAMgGAIQgGAGgLAEQAFAAADADQAEAEACAGIAPAngAgfgCIAfAAQAaAAAAgWQAAgKgHgGQgGgFgNAAIgfAAg");
	this.shape_25.setTransform(7.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:24.4}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:55}},{t:this.shape_12,p:{x:66.5}},{t:this.shape_11,p:{x:74.7}},{t:this.shape_10,p:{x:83.1}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:105.4}},{t:this.shape_6},{t:this.shape_5,p:{x:119.5}},{t:this.shape_4,p:{x:127.9}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:158.5}}]}).to({state:[{t:this.shape_25},{t:this.shape_12,p:{x:17.5}},{t:this.shape_24},{t:this.shape_16,p:{x:33.3}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_10,p:{x:67.2}},{t:this.shape_13,p:{x:82.7}},{t:this.shape_7,p:{x:94.2}},{t:this.shape_11,p:{x:102.4}},{t:this.shape_5,p:{x:110.4}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_4,p:{x:138}},{t:this.shape,p:{x:144.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162.6,25.9);


(lib.Mc1op4 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(178.6,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_1.setTransform(173.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_2.setTransform(166.5,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_3.setTransform(157.4,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(148,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(139.6,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(133.3,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(125.5,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgFgGg");
	this.shape_8.setTransform(118.3,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_9.setTransform(108.5,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(103.2,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_11.setTransform(94.8,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_12.setTransform(86.6,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_13.setTransform(75.1,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_14.setTransform(59.2,15.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(49.6,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_16.setTransform(41.6,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_17.setTransform(34.9,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_18.setTransform(27.9,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_19.setTransform(18.8,13.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_20.setTransform(7.9,13.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(133.7,17.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_22.setTransform(124.1,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_23.setTransform(63.3,13.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_24.setTransform(55.7,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(29.7,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_26.setTransform(10.7,17.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_27.setTransform(4.1,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:59.2}},{t:this.shape_13,p:{x:75.1}},{t:this.shape_12,p:{x:86.6}},{t:this.shape_11,p:{x:94.8}},{t:this.shape_10,p:{x:103.2}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:125.5}},{t:this.shape_6,p:{x:133.3}},{t:this.shape_5,p:{x:139.6}},{t:this.shape_4,p:{x:148}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:178.6}}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_14,p:{x:20.4}},{t:this.shape_25},{t:this.shape_6,p:{x:37.7}},{t:this.shape_12,p:{x:44.5}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_10,p:{x:72.3}},{t:this.shape_13,p:{x:87.8}},{t:this.shape_7,p:{x:99.3}},{t:this.shape_11,p:{x:107.5}},{t:this.shape_5,p:{x:115.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_4,p:{x:143.1}},{t:this.shape,p:{x:149.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.7,25.9);


(lib.Mc1op3 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(186.9,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_1.setTransform(182.2,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_2.setTransform(174.9,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNA3QgHgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAHgEQAHgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgHgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_3.setTransform(165.7,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(156.3,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(147.9,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(141.6,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(133.9,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_8.setTransform(126.6,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_9.setTransform(115.1,17.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(105.1,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_11.setTransform(97.1,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(87.2,17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_13.setTransform(77.9,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_14.setTransform(71.4,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_15.setTransform(66.6,14.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(59.5,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAAEgBIAAALQgFACgGgBQgMAAgFgGg");
	this.shape_17.setTransform(52.3,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_18.setTransform(40.7,17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_19.setTransform(31.1,15.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgGACgGgBQgLAAgGgGg");
	this.shape_20.setTransform(23.6,14.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_21.setTransform(16.3,15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_22.setTransform(6.8,13.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_23.setTransform(244.5,44.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_24.setTransform(183,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_25.setTransform(171.4,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_26.setTransform(161.8,13.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIAOAAIAWBAIAYhAIAKAAIAYBAIAWhAIANAAIgeBPg");
	this.shape_27.setTransform(137.2,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(88.8,15.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(79.6,17.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_30.setTransform(57.1,13.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(21.3,15.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_32.setTransform(14.9,13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_33.setTransform(7.6,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:40.7}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:71.4}},{t:this.shape_13,p:{x:77.9}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:115.1}},{t:this.shape_8},{t:this.shape_7,p:{x:133.9}},{t:this.shape_6},{t:this.shape_5,p:{x:147.9}},{t:this.shape_4,p:{x:156.3}},{t:this.shape_3},{t:this.shape_2,p:{x:174.9}},{t:this.shape_1,p:{x:182.2}},{t:this.shape,p:{x:186.9}}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_5,p:{x:29.8}},{t:this.shape_7,p:{x:38.2}},{t:this.shape_1,p:{x:49.5}},{t:this.shape_30},{t:this.shape_4,p:{x:66.1}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_18,p:{x:98.3}},{t:this.shape_2,p:{x:111.8}},{t:this.shape_9,p:{x:121.4}},{t:this.shape_27},{t:this.shape_14,p:{x:146}},{t:this.shape_13,p:{x:152.5}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape,p:{x:191.7}},{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191,25.9);


(lib.Mc1op2 = function(mode,startPosition,loop) {
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
	this.shape.setTransform(158,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(151.4,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_2.setTransform(141.8,26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_3.setTransform(133.8,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_4.setTransform(124.3,26.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_5.setTransform(116.3,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(106.4,26.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_7.setTransform(100,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_8.setTransform(96.2,24.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(89.2,24.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_10.setTransform(75.8,26.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_11.setTransform(69.3,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_12.setTransform(65,26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_13.setTransform(57.3,26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkA7IAAhcQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAygAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_14.setTransform(48.3,27.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_15.setTransform(34,28);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_16.setTransform(24.7,26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_17.setTransform(15.1,26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgjAwQALgCAGgFQAGgEAEgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_18.setTransform(6.3,28.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(165.8,2.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkA6IAAhbQAAgNgCgJIANAAIABAPQADgIAIgFQAHgFAJAAQAKAAAJAGQAIAFAEAKQAFAJAAAMQAAANgFAJQgEAJgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgmQgGAHAAAPQAAAPAGAIQAGAHALABQAMgBAHgHQAGgIAAgPQAAgOgGgIQgHgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(156.6,4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_21.setTransform(146.6,2.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(132.8,2.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgLAAgIgFgAgRgEQgHAHABAOQgBAPAHAIQAHAJAKAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgKAAgHAIg");
	this.shape_23.setTransform(123.2,0.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(113.9,2.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_25.setTransform(104.3,2.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_26.setTransform(90.8,2.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(81.1,2.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_28.setTransform(73.1,0.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_29.setTransform(63.3,2.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_30.setTransform(56.3,2.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_31.setTransform(43.7,2.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgjAxQALgEAGgDQAFgFAFgJIADgHIgjhOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_32.setTransform(34.9,4.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_33.setTransform(25.9,2.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_34.setTransform(16.2,2.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgGA5IAAhmIgnAAIAAgLIBbAAIAAALIgnAAIAABmg");
	this.shape_35.setTransform(6.8,0.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_36.setTransform(200.1,18.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_37.setTransform(193.7,15.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_38.setTransform(184.1,13.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_39.setTransform(170.7,15.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgFACgGgBQgLAAgGgGg");
	this.shape_40.setTransform(163.3,14.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_41.setTransform(153.5,14.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_42.setTransform(145.7,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_43.setTransform(136.5,13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAYBAIAXhAIAMAAIgdBPg");
	this.shape_44.setTransform(124.9,15.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgKAAgJgFgAgRgEQgGAHgBAOQABAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(108.7,13.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_46.setTransform(99.4,15.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_47.setTransform(90.4,15.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_48.setTransform(84.2,13.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_49.setTransform(79.9,15.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_50.setTransform(73.7,13.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_51.setTransform(64.5,15.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_52.setTransform(56.4,15.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(47.2,15.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgkAxQAMgEAGgDQAFgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_54.setTransform(38.4,17.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_55.setTransform(26.5,13.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_56.setTransform(17.7,15.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAqA5IgMgeIg7AAIgMAeIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg5g");
	this.shape_57.setTransform(7.9,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-13,208,49.8);


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
	this.shape.graphics.f("#000000").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape.setTransform(142.6,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAFgBIAAALQgFACgHgBQgLAAgGgGg");
	this.shape_1.setTransform(137.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_2.setTransform(130.6,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_3.setTransform(121.4,13.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_4.setTransform(112,15.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_5.setTransform(103.6,15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_6.setTransform(97.3,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(89.6,15.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_8.setTransform(82.3,14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_9.setTransform(72.5,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_10.setTransform(67.3,15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_11.setTransform(58.9,15.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_12.setTransform(50.6,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_13.setTransform(39.2,15.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_14.setTransform(24.6,13.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_15.setTransform(17.9,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_16.setTransform(14.1,13.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAcA5Ig7g2IAAA2IgMAAIAAhxIAMAAIAAA1IA3g1IARAAIg6A3IA+A6g");
	this.shape_17.setTransform(7.9,13.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_18.setTransform(144.3,17.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(134.7,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_20.setTransform(73.9,13.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFAAADgBIAAALQgEACgGgBQgMAAgFgGg");
	this.shape_21.setTransform(66.3,14.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_22.setTransform(54.7,15.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_23.setTransform(45.5,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_24.setTransform(33.3,13.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_25.setTransform(24.7,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_26.setTransform(7.6,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16,p:{x:14.1}},{t:this.shape_15,p:{x:17.9}},{t:this.shape_14},{t:this.shape_13,p:{x:39.2}},{t:this.shape_12},{t:this.shape_11,p:{x:58.9}},{t:this.shape_10,p:{x:67.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:89.6}},{t:this.shape_6},{t:this.shape_5,p:{x:103.6}},{t:this.shape_4,p:{x:112}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:142.6}}]}).to({state:[{t:this.shape_26},{t:this.shape_16,p:{x:14.9}},{t:this.shape_15,p:{x:18.7}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_10,p:{x:82.9}},{t:this.shape_13,p:{x:98.4}},{t:this.shape_7,p:{x:109.9}},{t:this.shape_11,p:{x:118.1}},{t:this.shape_5,p:{x:126.1}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_4,p:{x:153.7}},{t:this.shape,p:{x:159.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.7,25.9);


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


(lib.dustbin2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.instance = new lib.Bitmap29();
	this.instance.parent = this;
	this.instance.setTransform(-92.4,-139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_4
	this.instance_1 = new lib.Bitmap30();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-95.4,-142.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.4,-139.5,185,279);


(lib.dustbin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_2
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-104.3,-131.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_3
	this.instance_1 = new lib.Bitmap37();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-107.3,-134.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.3,-131.3,209,263);


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


(lib.btnCheckBox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_6
	this.instance = new lib.Bitmap28();
	this.instance.parent = this;
	this.instance.setTransform(-5.3,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_5
	this.instance_1 = new lib.Bitmap23();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.3,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4));

	// Layer_1
	this.instance_2 = new lib.Bitmap27();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-21.8,-17.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-13.7,37,28);


(lib.btnCheckBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-18.3,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer_5
	this.instance_1 = new lib.Bitmap27();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-21.8,-17.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-13.7,37,28);


(lib.btnBgB = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("ApwAvQgiAAgBggIAAgcQABghAiAAIThAAQAiAAABAhIAAAbQgBAhgiAAg");
	this.shape.setTransform(0,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17B6B1").s().p("ApwAiQgyAAAAgxIAAgSQABAuAxAAIThAAQAxAAABguIAAASQAAAxgyAAg");
	this.shape_1.setTransform(0,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1BE7E1").s().p("ApwCBQgxAAgBgvIAAijQABgvAxgBIThAAQAxABABAvIAACjQgBAvgxAAg");
	this.shape_2.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnBgB, new cjs.Rectangle(-67.5,-14,135,28), null);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-37.3,254.1,39.3);


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
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.btnRoundBg();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.5);
	this.instance.cache(-25,-25,51,51);

	this.instance_1 = new lib.btnRoundBg2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-0.5);
	this.instance_1.cache(-31,-31,63,63);

	this.instance_2 = new lib.btnRoundBg3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-0.2,-0.5);
	this.instance_2.cache(-31,-31,63,63);

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

	this.instance_1 = new lib.btnRoundBg3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.2,-0.5);
	this.instance_1.cache(-31,-31,63,63);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.5,-29.7,58.5,58.5);


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


(lib.btnDrag14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgZBEQgKgHgGgMQgFgMAAgPQAAgQAFgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAFAEAJIAAg/IAQAAIAACSIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgGQgJAJAAATQAAASAJAKQAIALAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape.setTransform(50.9,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_1.setTransform(42.3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_2.setTransform(32.3,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AAcAyIgchNIgcBNIgPAAIglhjIARAAIAcBQIAdhQIAOAAIAdBQIAchQIARAAIgmBjg");
	this.shape_3.setTransform(17.9,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_4.setTransform(3.1,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgZBDQgNgEgJgJIAHgMQATAQAVAAQAOAAAIgIQAJgJAAgPQAAgOgIgIQgIgIgOAAQgUAAgMAPIgLAAIAAhSIBUAAIAAAOIhEAAIAAAyQAMgLARAAQAOAAAJAGQAKAGAGAIQAFALABANQAAANgHALQgFALgMAFQgKAGgOAAQgNAAgMgFg");
	this.shape_5.setTransform(-8.5,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgqBMQgUgLgKgSQgLgUAAgZQAAgaAMgUQALgUATgLQAUgLAXAAQAaAAATAKQASALAKARQAJARAAATQgBATgFANQgGAMgJAGQgJAGgLAAQgLAAgGgFQgGgFAAgIIgBAAQgFAIgIAEQgHAFgKABQgNAAgIgKQgIgJgBgQQABgNAFgMQAGgMAJgIQAJgHANAAQAJAAAHAEQAHAFACAHIABAAIACgOIANAAIgKA2IgBAHQAAAHAEADQADACAHAAQAFABAGgFQAGgEAEgLQAEgKAAgPQAAgQgHgOQgJgOgPgJQgQgJgWAAQgUAAgQAJQgQAKgKARQgJARAAAXQAAAWAIAQQAJARARAJQAQAJAVAAQARAAAMgFQANgEAGgKIASAAQgIAOgSAJQgQAIgYAAQgZAAgTgLgAgNgaQgHAGgDAJQgEAKgBAJQAAALAGAHQAGAHAIgBQAJAAAIgFQAHgHAEgJQAEgKgBgJQABgMgGgGQgFgGgKAAQgIAAgIAGg");
	this.shape_6.setTransform(-24.2,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgzBHIAAiNIA4AAQAWAAAMAKQANALAAATQAAASgNALQgMAKgWAAIgnAAIAAA+gAgigEIAmAAQAQAAAIgHQAIgHAAgMQAAgNgIgHQgIgHgQAAIgmAAg");
	this.shape_7.setTransform(-39.6,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABASQAEgKAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_8.setTransform(31.4,4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AAdAyIgdhNIgcBNIgPAAIglhjIARAAIAcBQIAdhQIAOAAIAdBQIAdhQIAQAAIgmBjg");
	this.shape_9.setTransform(7,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_10.setTransform(-6.7,4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_11.setTransform(-16.6,4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_12.setTransform(-27.9,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:32.3,y:3}},{t:this.shape_1},{t:this.shape,p:{x:50.9,y:0.8}}]}).to({state:[{t:this.shape_7,p:{y:2}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_2,p:{x:21.4,y:4}},{t:this.shape_8},{t:this.shape,p:{x:40,y:1.8}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_13.setTransform(0.1,0);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgHgHQgHgGgLAAQgVAAgTAQIgGgNQAHgHANgFQANgFANAAQATAAAMAKQAKAKABASQgBAMgFALQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape.setTransform(44.3,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_1.setTransform(32.7,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AAXA+QgJgLAAgWQAAgWAJgJQAJgLARAAQAQAAAJALQAJAJAAAWQAAAWgJALQgJALgQAAQgRAAgJgLgAAiAFQgFAIAAAQQAAARAFAHQAFAIAKAAQAKAAAFgIQAEgHAAgRQAAgQgFgIQgEgHgKAAQgKAAgFAHgAgwBHIBRiNIAQAAIhRCNgAhJADQgJgKAAgVQAAgWAJgLQAJgLARAAQAQAAAJALQAJALAAAWQAAAVgJAKQgJALgQAAQgRAAgJgLgAg+g0QgFAHAAARQAAAQAFAIQAFAHAKAAQAKAAAEgHQAFgIAAgQQAAgRgFgHQgEgIgKAAQgKAAgFAIg");
	this.shape_2.setTransform(16.8,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_3.setTransform(2.4,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AggApQgJgKAAgTIAAg+IAPAAIAAA9QABAOAFAGQAGAHAMAAQALgBAJgIQAIgJAAgPIAAg3IAQAAIAABjIgQAAIAAgRQgEAJgJAFQgJAFgJAAQgSAAgJgKg");
	this.shape_4.setTransform(-8.3,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AAsBHIhVhxIAABxIgPAAIAAiNIAMAAIBVBxIAAhxIAQAAIAACNg");
	this.shape_5.setTransform(-21.5,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_6.setTransform(-34.4,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgHAyIgrhjIARAAIAhBSIAjhSIAQAAIgsBjg");
	this.shape_7.setTransform(-45.1,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgrBIIAAgMIAxg3QAKgLAEgJQAFgJAAgJQAAgMgHgGQgHgGgLAAQgVAAgTAQIgGgNQAHgHANgFQANgFANAAQATAAAMAKQAKAKABARQgBANgFALQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_8.setTransform(44.3,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AggApQgJgKAAgUIAAg9IAPAAIAAA9QABAOAFAGQAGAHAMgBQALAAAJgJQAIgIAAgOIAAg4IAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgJAAQgSAAgJgKg");
	this.shape_9.setTransform(-8.3,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:3.1}},{t:this.shape_6,p:{y:3}},{t:this.shape_5,p:{y:1}},{t:this.shape_4},{t:this.shape_3,p:{y:3}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape}]}).to({state:[{t:this.shape_7,p:{y:4.1}},{t:this.shape_6,p:{y:4.1}},{t:this.shape_5,p:{y:2}},{t:this.shape_9},{t:this.shape_3,p:{y:4.1}},{t:this.shape_2,p:{y:2}},{t:this.shape_1,p:{y:2}},{t:this.shape_8}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_10.setTransform(0.1,0);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape.setTransform(43.3,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgJQAGgIAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_1.setTransform(30.7,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgjA3QgOgSAAghQAAgXAHgSQAGgRAMgJQANgJAQAAQAMAAAMAFQAMAEAIAJIgGAMQgKgIgJgEQgJgEgKAAQgRAAgKAQQgLARAAAcIAAADQAFgKAKgHQALgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAANQAAANgGALQgGAKgLAGQgKAGgNAAQgZAAgOgSgAgTAEQgJAJAAAOQAAAOAJAJQAJAJANAAQAOAAAIgJQAIgIAAgPQAAgOgIgJQgJgHgNAAQgNAAgJAHg");
	this.shape_2.setTransform(18.8,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgHBHIAAg6Ig4hTIATAAIAsBGIAthGIATAAIg4BUIAAA5g");
	this.shape_3.setTransform(6.7,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgZBEQgKgHgGgMQgFgMAAgPQAAgQAFgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAFAEAJIAAg/IAQAAIAACSIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgGQgJAJAAATQAAASAJAKQAIALAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape_4.setTransform(-5.7,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_5.setTransform(-17.7,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgsBHIAAiNIBZAAIAAANIhIAAIAAAyIBEAAIAAANIhEAAIAAA0IBIAAIAAANg");
	this.shape_6.setTransform(-28.8,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AAnBHIgSgvQgDgJgGgDQgFgDgKAAIgjAAIAAA+IgRAAIAAiNIA3AAQAYAAAMAKQANAKAAATQAAAOgIAKQgHAIgOAEQAGABAFAFQAEAEADAIIASAwgAgmgEIAmAAQAgAAAAgaQAAgOgIgGQgIgHgQAAIgmAAg");
	this.shape_7.setTransform(-41.6,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:-1}},{t:this.shape_6,p:{y:-1}},{t:this.shape_5,p:{y:1.1}},{t:this.shape_4,p:{y:-1.1}},{t:this.shape_3,p:{y:-1}},{t:this.shape_2,p:{y:-1}},{t:this.shape_1,p:{y:-1}},{t:this.shape,p:{y:-1}}]}).to({state:[{t:this.shape_7,p:{y:0.2}},{t:this.shape_6,p:{y:0.2}},{t:this.shape_5,p:{y:2.3}},{t:this.shape_4,p:{y:0.1}},{t:this.shape_3,p:{y:0.2}},{t:this.shape_2,p:{y:0.2}},{t:this.shape_1,p:{y:0.2}},{t:this.shape,p:{y:0.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_8.setTransform(0.1,0);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-17.7,135,31.7);


(lib.btnDrag11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape.setTransform(41.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_1.setTransform(29.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AglBHIBCh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_2.setTransform(17.9,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_3.setTransform(5.9,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_4.setTransform(-6.1,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AglBHIBCh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_5.setTransform(-18.1,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_6.setTransform(-30.1,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_7.setTransform(-42.1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:2.2}},{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:2.2}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_8.setTransform(0.1,0);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgZBEQgMgFgJgIIAGgNQAUARAUAAQAPAAAIgHQAIgHAAgNQAAgagfAAIgRAAIAAgNIANAAQAPAAAJgHQAIgHAAgNQAAgMgHgGQgHgGgNAAQgTAAgUAQIgGgMQAJgIAMgFQANgFAMAAQATAAALAKQAMAKAAAQQAAANgGAJQgGAJgLAEQANADAHAIQAGAJAAAOQAAASgMALQgNALgVAAQgNAAgNgFg");
	this.shape.setTransform(28.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgHgHQgGgGgMAAQgVAAgTAQIgHgNQAJgHAMgFQANgFANAAQATAAAMAKQAKAKABASQgBAMgFALQgGAKgMAOIgnAsIBFAAIAAAOg");
	this.shape_1.setTransform(16.9,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_2.setTransform(5.4,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgSAuQgLgHgGgLQgGgMAAgQQAAgOAGgMQAGgMALgHQALgGAOAAQAKAAAKADQAJAEAGAGIgFAMQgIgGgHgDQgHgDgHAAQgPAAgJALQgIAKAAARQAAATAIAKQAJAKAPAAQAHAAAHgDQAHgDAIgGIAFAMQgGAGgKAEQgKADgKAAQgOAAgKgGg");
	this.shape_3.setTransform(-5.9,3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgRBFQgIgFgFgKIAAATIgRAAIAAiSIARAAIAABAQAEgKAJgFQAJgFALAAQANAAAKAGQALAHAFALQAGALAAAQQAAAPgGAMQgFAMgLAHQgKAGgNAAQgLAAgJgFgAgWgGQgIAJAAATQAAATAIAKQAIAKAOAAQAOAAAJgLQAIgKAAgSQAAgTgIgJQgJgKgOAAQgOAAgIAKg");
	this.shape_4.setTransform(-16.7,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_5.setTransform(-29.4,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgHgHQgGgGgMAAQgVAAgTAQIgHgNQAJgHAMgFQANgFANAAQATAAAMAKQAKAKABASQgBALgFAMQgGAKgMAOIgnAsIBFAAIAAAOg");
	this.shape_6.setTransform(16.9,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:3}},{t:this.shape_4,p:{y:0.8}},{t:this.shape_3,p:{y:3}},{t:this.shape_2,p:{y:1}},{t:this.shape_1},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_5,p:{y:4.3}},{t:this.shape_4,p:{y:2.1}},{t:this.shape_3,p:{y:4.3}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_6},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_7.setTransform(0.1,0);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape.setTransform(56.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AAcAzIAAg9QAAgOgGgGQgFgHgNAAQgMAAgJAJQgIAJAAAOIAAA4IgQAAIAAhHQgBgQgBgMIAPAAIACASQAEgKAKgFQAJgGALABQAkAAAAAnIAAA+g");
	this.shape_1.setTransform(44.1,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_2.setTransform(32.6,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgHBJIAAiRIAPAAIAACRg");
	this.shape_3.setTransform(24.5,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_4.setTransform(16.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AA5AzIAAg9QAAgOgFgGQgFgHgLAAQgMAAgIAJQgHAJAAAOIAAA4IgPAAIAAg9QAAgOgFgGQgFgHgLAAQgNAAgHAJQgHAJAAAOIAAA4IgRAAIAAhHQAAgQgBgMIAPAAIACASQAEgKAIgFQAJgGALABQAMAAAHAEQAHAFADAKQAFgJAJgFQAJgGALABQAhAAAAAnIAAA+g");
	this.shape_5.setTransform(2.3,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_6.setTransform(-9.4,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AADBHIAHglIggAAIgHAlIgMAAIAHglIgSAAIAAgLIAUAAIAJguIgaAAIAAgMIAcAAIAHgjIANAAIgHAjIAfAAIAHgjIANAAIgHAjIASAAIAAAMIgVAAIgJAuIAZAAIAAALIgbAAIgHAlgAgUAXIAgAAIAJguIggAAg");
	this.shape_7.setTransform(-19.7,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_8.setTransform(-29.4,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_9.setTransform(-39.1,3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5B58").s().p("AAdAyIgdhNIgcBNIgPAAIglhjIAQAAIAdBQIAdhQIANAAIAeBQIAdhQIAQAAIgmBjg");
	this.shape_10.setTransform(-53.4,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5B58").s().p("AAcA0IAAg+QAAgOgGgGQgFgHgNAAQgMAAgJAJQgIAJAAAOIAAA5IgQAAIAAhIQgBgQgBgMIAPAAIACASQAEgKAKgFQAJgGALAAQAkAAAAApIAAA+g");
	this.shape_11.setTransform(44.1,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0C5B58").s().p("AgHBKIAAiSIAPAAIAACSg");
	this.shape_12.setTransform(24.5,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0C5B58").s().p("AA5A0IAAg+QAAgOgFgGQgFgHgLAAQgMAAgIAJQgHAJAAAOIAAA5IgPAAIAAg+QAAgOgFgGQgFgHgLAAQgNAAgHAJQgHAJAAAOIAAA5IgRAAIAAhIQAAgQgBgMIAPAAIACASQAEgKAIgFQAJgGALAAQAMABAHAEQAHAFADAKQAFgJAJgFQAJgGALAAQAhAAAAApIAAA+g");
	this.shape_13.setTransform(2.3,4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0C5B58").s().p("AgaA0IAAhIQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALAAQAFAAAEACIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_14.setTransform(-9.4,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10,p:{y:3.1}},{t:this.shape_9,p:{y:3}},{t:this.shape_8,p:{y:1.6}},{t:this.shape_7,p:{y:1}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{y:3}},{t:this.shape_3},{t:this.shape_2,p:{y:3}},{t:this.shape_1},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_10,p:{y:4.3}},{t:this.shape_9,p:{y:4.3}},{t:this.shape_8,p:{y:2.8}},{t:this.shape_7,p:{y:2.2}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_4,p:{y:4.3}},{t:this.shape_12},{t:this.shape_2,p:{y:4.3}},{t:this.shape_11},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_15.setTransform(0.1,0);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgJBHIAAgUIATAAIAAAUgAgEAiIgFhoIATAAIgFBog");
	this.shape.setTransform(36.8,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgHgHQgHgGgLAAQgVAAgTAQIgGgNQAHgHANgFQANgFANAAQATAAAMAKQAKAKABASQgBAMgFALQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_1.setTransform(28.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgEA7QgIgJAAgPIAAg5IgTAAIAAgMIATAAIAAgaIAPgGIAAAgIAdAAIAAAMIgdAAIAAA2QAAAMAFAEQAFAFAIAAQAGAAAFgCIAAAOQgGACgIAAQgPAAgHgIg");
	this.shape_2.setTransform(18.8,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgLBKIAAhXIgUAAIAAgNIAUAAIAAgPQAAgQAIgIQAHgIAOAAQAHAAAGACIAAAOIgKgCQgIAAgEAEQgFAFAAALIAAANIAZAAIAAANIgZAAIAABXg");
	this.shape_3.setTransform(12,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgZBDQgNgEgIgJIAFgMQAVAQAUAAQAOAAAIgIQAJgJAAgPQAAgOgIgIQgJgIgNAAQgUAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQALgLASAAQAOAAAKAGQAKAGAFAIQAFALAAANQABANgHALQgGALgKAFQgLAGgOAAQgNAAgMgFg");
	this.shape_4.setTransform(3,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgjA3QgOgSAAghQAAgXAHgSQAGgRAMgJQANgJAQAAQAMAAAMAFQAMAEAIAJIgGAMQgKgIgJgEQgJgEgKAAQgRAAgKAQQgLARAAAcIAAADQAFgKAKgHQALgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAANQAAANgGALQgGAKgLAGQgKAGgNAAQgZAAgOgSgAgTAEQgJAJAAAOQAAAOAJAJQAJAJANAAQAOAAAIgJQAIgIAAgPQAAgOgIgJQgJgHgNAAQgNAAgJAHg");
	this.shape_5.setTransform(-9.2,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_6.setTransform(-21.3,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGgBAMQABAMAIAHQAJAHANABQAOgBAJgHQAIgHAAgMQAAgMgIgGQgIgHgPAAQgOAAgIAHg");
	this.shape_7.setTransform(-33.3,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAEgJQAFgJAAgJQAAgLgHgHQgHgGgLAAQgVAAgTAQIgGgNQAHgHANgFQANgFANAAQATAAAMAKQAKAKABASQgBALgFAMQgGAKgMAOIgnAsIBEAAIAAAOg");
	this.shape_8.setTransform(28.5,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AgZBDQgNgEgIgJIAFgMQAVAQAUAAQAOAAAIgIQAJgJAAgPQAAgNgIgKQgJgHgNAAQgUAAgMAPIgMAAIAAhSIBVAAIAAAOIhEAAIAAAyQALgLASAAQAOAAAKAGQAKAGAFAIQAFALAAANQABANgHALQgGAKgKAGQgLAGgOAAQgNAAgMgFg");
	this.shape_9.setTransform(3,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:1}},{t:this.shape_4},{t:this.shape_3,p:{y:0.7}},{t:this.shape_2,p:{y:1.6}},{t:this.shape_1},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:2.2}},{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_9},{t:this.shape_3,p:{y:2}},{t:this.shape_2,p:{y:2.8}},{t:this.shape_8},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_10.setTransform(0.1,0);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgGgHQgIgGgLAAQgVAAgTAQIgHgNQAJgHANgFQANgFAMAAQATAAAMAKQALAKgBASQABAMgGALQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape.setTransform(44.7,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgZBEQgMgFgKgIIAHgNQAUARAUAAQAQAAAHgHQAIgHAAgNQAAgaggAAIgQAAIAAgNIANAAQAPAAAJgHQAIgHAAgNQAAgMgHgGQgHgGgMAAQgUAAgUAQIgGgMQAJgIAMgFQAMgFANAAQATAAALAKQAMAKAAAQQAAANgGAJQgGAJgKAEQAMADAHAIQAGAJABAOQAAASgNALQgNALgVAAQgNAAgNgFg");
	this.shape_1.setTransform(32.4,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJANgDQgMgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAFAIQAHAJAAALQAAAMgHAJQgHAIgMAEQAOADAHAJQAIAJAAANQAAATgOAKQgNALgYAAQgXAAgNgLgAgYAOQgKAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgJAIgAgWgzQgIAGAAAMQAAAMAIAHQAJAHANABQAPgBAIgHQAJgHAAgMQAAgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape_2.setTransform(20.6,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgEBeIAAgVQgOgBgLgFQgMgEgJgJIAGgMQAKAIAKAEQAJAEAMABIAAgzQgOgEgJgEQgJgDgGgHQgGgIAAgNQAAgLAFgIQAGgJAKgGQAJgFANgCIAAgVIANAAIAAAWQAMABAKAEQALAFAHAHIgGANQgPgOgTgCIAAA1IAWAGQAIAEAGAIQAGAHAAAMQAAAQgMAKQgLALgTACIAAAWgAAJA6QAMgBAHgHQAGgGAAgLQAAgJgGgFQgHgFgMgDgAgXgxQgHAHAAALQAAAKAHAFQAHAGANADIAAgyQgNABgHAHg");
	this.shape_3.setTransform(8.6,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_4.setTransform(-2.4,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AAmBHIgRgvQgEgJgFgDQgFgDgKAAIgjAAIAAA+IgRAAIAAiNIA3AAQAYAAAMAKQANAKAAATQAAAOgIAKQgHAIgOAEQAGABAFAFQAEAEADAIIASAwgAgmgEIAmAAQAgAAAAgaQAAgOgIgGQgIgHgQAAIgmAAg");
	this.shape_5.setTransform(-13.8,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_6.setTransform(-27.5,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AA5AzIAAg9QAAgOgFgGQgFgHgLAAQgMAAgIAJQgHAJAAAOIAAA4IgPAAIAAg9QAAgOgFgGQgFgHgLAAQgNAAgHAJQgHAJAAAOIAAA4IgRAAIAAhHQAAgQgBgMIAPAAIACASQAEgKAIgFQAJgGALABQAMAAAHAEQAHAFADAKQAFgJAJgFQAJgGALABQAhAAAAAnIAAA+g");
	this.shape_7.setTransform(-42,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgGgHQgIgGgLAAQgVAAgTAQIgHgNQAJgHANgFQANgFAMAAQATAAAMAKQALAKgBASQABALgGAMQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape_8.setTransform(44.7,2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AA5A0IAAg+QAAgOgFgGQgFgHgLAAQgMAAgIAJQgHAJAAAOIAAA5IgPAAIAAg+QAAgOgFgGQgFgHgLAAQgNAAgHAJQgHAJAAAOIAAA5IgRAAIAAhIQAAgQgBgMIAPAAIACASQAEgKAIgFQAJgGALAAQAMABAHAEQAHAFADAKQAFgJAJgFQAJgGALAAQAhAAAAApIAAA+g");
	this.shape_9.setTransform(-42,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6,p:{y:3}},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:3}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_6,p:{y:4.3}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:4.3}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape_8}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_10.setTransform(0.1,0);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape.setTransform(48.7,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AAXA+QgJgLAAgWQAAgWAJgJQAJgLAQAAQAQAAAJALQAKAJAAAWQAAAWgKALQgJALgQAAQgQAAgJgLgAAiAFQgFAIAAAQQAAARAFAHQAEAIAKAAQALAAAFgIQAEgHAAgRQAAgQgFgIQgEgHgLAAQgKAAgEAHgAgwBHIBRiNIAQAAIhSCNgAhJADQgJgKAAgVQAAgWAJgLQAJgLAQAAQARAAAIALQAKALAAAWQAAAVgKAKQgIALgRAAQgQAAgJgLgAg+g0QgFAHAAARQAAAQAFAIQAFAHAJAAQAKAAAFgHQAFgIAAgQQAAgRgFgHQgFgIgKAAQgJAAgFAIg");
	this.shape_1.setTransform(33.2,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgaBDQgMgFgIgHIAFgOQAVARAUAAQAOAAAJgJQAIgIAAgOQAAgOgIgKQgJgHgOAAQgTAAgMAPIgMAAIAAhSIBVAAIAAANIhEAAIAAA0QALgMASAAQANAAAKAGQALAFAFAKQAGAKgBAOQAAANgFAKQgHALgKAFQgLAGgOAAQgNAAgNgFg");
	this.shape_2.setTransform(18.1,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgHBHIAAg6Ig4hTIATAAIAsBGIAthGIATAAIg4BUIAAA5g");
	this.shape_3.setTransform(5.7,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("Ag7BHIAAiNIAwAAQAhAAATASQATATAAAhQAAAigTATQgTASghAAgAgqA5IAeAAQAbAAAOgOQAOgPAAgcQAAg4g3AAIgeAAg");
	this.shape_4.setTransform(-7.6,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AA1BHIgPgkIhKAAIgQAkIgRAAIA/iNIANAAIA/CNgAgeAVIA+AAIgghIg");
	this.shape_5.setTransform(-22.7,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_6.setTransform(-35.4,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AAmBHIgRgvQgEgJgFgDQgGgDgJAAIgkAAIAAA+IgQAAIAAiNIA4AAQAXAAAMAKQAMAKAAATQAAAOgHAKQgIAIgNAEQAGABAEAFQAFAEADAIIASAwgAgngEIAnAAQAgAAAAgaQAAgOgIgGQgIgHgQAAIgnAAg");
	this.shape_7.setTransform(-47.4,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgaBDQgMgFgIgHIAFgOQAVARAUAAQAOAAAJgJQAIgIAAgOQAAgOgIgJQgJgIgOAAQgTAAgMAQIgMAAIAAhTIBVAAIAAANIhEAAIAAA0QALgMASAAQANAAAKAGQALAFAFAKQAGAKgBAOQAAANgFAKQgHAKgKAGQgLAGgOAAQgNAAgNgFg");
	this.shape_8.setTransform(18.1,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:3.1}},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:1}},{t:this.shape_2},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:2.3}},{t:this.shape_6,p:{y:4.3}},{t:this.shape_5,p:{y:2.3}},{t:this.shape_4,p:{y:2.3}},{t:this.shape_3,p:{y:2.3}},{t:this.shape_8},{t:this.shape_1,p:{y:2.3}},{t:this.shape,p:{y:2.3}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_9.setTransform(0.1,0);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape.setTransform(42.1,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_1.setTransform(30.1,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_2.setTransform(18.1,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_3.setTransform(6.1,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_4.setTransform(-5.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_5.setTransform(-17.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_6.setTransform(-29.9,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_7.setTransform(-41.9,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:1}},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:1}},{t:this.shape_3,p:{y:1}},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:2.2}},{t:this.shape_6,p:{y:2.2}},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:2.2}},{t:this.shape_3,p:{y:2.2}},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_8.setTransform(0.1,0);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape.setTransform(33,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgrBIIAAgMIAxg3QAKgLAEgJQAFgJAAgJQAAgMgGgGQgIgGgLAAQgUAAgVAQIgFgNQAHgHAOgFQANgFAMAAQATAAALAKQALAKAAARQABANgGALQgFAKgNAOIgoAsIBFAAIAAAOg");
	this.shape_1.setTransform(20.6,-1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgZBEQgNgFgJgIIAHgNQAUARAUAAQAQAAAHgHQAIgHAAgNQAAgagfAAIgRAAIAAgNIANAAQAPAAAJgHQAIgHAAgNQAAgMgHgGQgHgGgMAAQgUAAgUAQIgGgMQAJgIAMgFQAMgFANAAQATAAALAKQAMAKAAAQQAAANgGAJQgGAJgLAEQANADAHAIQAGAJABAOQgBASgMALQgNALgVAAQgNAAgNgFg");
	this.shape_2.setTransform(8.3,-1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_3.setTransform(-2.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgaA0IAAhIQAAgPgCgNIAQAAIABATQAEgKAHgGQAJgFALgBQAFABAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA5g");
	this.shape_4.setTransform(-10.4,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AAeBJIAAg9QgEAJgJAGQgJAEgLAAQgNABgKgHQgKgGgGgMQgFgLAAgPQAAgQAFgMQAGgMAKgHQAKgGANAAQAMAAAJAFQAJAGAEAKIACgTIAPAAQgCANAAAPIAABzgAgWgwQgJAKAAATQAAASAIAJQAJAKAOAAQAOAAAIgKQAIgJAAgTQAAgSgIgLQgIgJgOgBQgOAAgIALg");
	this.shape_5.setTransform(-20.9,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNgBQgLABgJgGQgJgFgEgKIAAA+gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOABgIAJg");
	this.shape_6.setTransform(-32.4,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg3QAKgKAEgJQAFgJAAgJQAAgMgGgGQgIgGgLAAQgUAAgVAQIgFgMQAHgJAOgEQANgFAMAAQATAAALAKQALAKAAASQABAMgGALQgFAKgNAOIgoAsIBFAAIAAAOg");
	this.shape_7.setTransform(20.6,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABASQAEgKAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_8.setTransform(-10.4,1.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AAeBJIAAg9QgEAKgJAEQgJAGgLAAQgNgBgKgGQgKgHgGgLQgFgLAAgQQAAgPAFgMQAGgMAKgGQAKgHANAAQAMAAAJAGQAJAFAEAKIACgTIAPAAQgCANAAAQIAABygAgWgwQgJAKAAASQAAATAIAJQAJAKAOAAQAOAAAIgKQAIgJAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape_9.setTransform(-20.9,3.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5B58").s().p("AguBJIAAhyQAAgQgBgNIAPAAIACAUQAEgLAJgFQAJgGAMAAQANAAAKAHQAKAGAGAMQAFAMAAAPQAAAQgFALQgGALgKAHQgKAGgNABQgLgBgJgFQgJgFgEgJIAAA9gAgVgwQgIAKAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgTQAAgSgJgKQgIgKgOAAQgOAAgIAKg");
	this.shape_10.setTransform(-32.4,3.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:0.5}},{t:this.shape_2,p:{y:-1.6}},{t:this.shape_1},{t:this.shape,p:{y:-1.6}}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_3,p:{y:1.8}},{t:this.shape_2,p:{y:-0.3}},{t:this.shape_7},{t:this.shape,p:{y:-0.3}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_11.setTransform(0.1,0);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-18.2,135,32.3);


(lib.btnDrag3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape.setTransform(40,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgHBKIAAiTIAPAAIAACTg");
	this.shape_1.setTransform(32.1,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNgBQgLABgJgGQgJgFgEgKIAAA+gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOABgIAJg");
	this.shape_2.setTransform(24,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNgBQgLABgJgGQgJgFgEgKIAAA+gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOABgIAJg");
	this.shape_3.setTransform(12,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_4.setTransform(-0.6,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgfAmQgNgOAAgYQAAgOAGgMQAGgMALgHQAKgGANAAQAUAAAMANQALANAAAXIAAACIhJAAQAAATAJAKQAJAKAPAAQASAAAPgMIAFAMQgGAGgLAEQgKADgLAAQgWAAgOgOgAgRgfQgIAIgCANIA5AAQgBgOgHgHQgHgIgNAAQgLAAgIAIg");
	this.shape_5.setTransform(-11.7,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AAcA0IAAg+QAAgOgGgHQgGgGgMAAQgNAAgIAJQgIAIAAAPIAAA5IgRAAIAAhIQABgPgCgNIAQAAIABASQAFgKAJgFQAJgFALgBQAkABAAAoIAAA+g");
	this.shape_6.setTransform(-23,0.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgIBIIAAhkIAQAAIAABkgAgJg0IAAgTIATAAIAAATg");
	this.shape_7.setTransform(-31.1,-1.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgNIAPAAIACAUQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAQQAAAPgFALQgGAMgKAGQgKAHgNgBQgLABgJgGQgJgFgEgKIAAA+gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgSQAAgTgJgKQgIgLgOAAQgOABgIAJg");
	this.shape_8.setTransform(-39.3,2.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgMIAPAAIACATQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAPQAAAQgFALQgGAMgKAGQgKAGgNAAQgLABgJgGQgJgFgEgJIAAA9gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgTQAAgSgJgKQgIgLgOAAQgOAAgIAKg");
	this.shape_9.setTransform(24,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgMIAPAAIACATQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAPQAAAQgFALQgGAMgKAGQgKAGgNAAQgLABgJgGQgJgFgEgJIAAA9gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgTQAAgSgJgKQgIgLgOAAQgOAAgIAKg");
	this.shape_10.setTransform(12,3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0C5B58").s().p("AguBJIAAhzQAAgPgBgMIAPAAIACATQAEgKAJgHQAJgFAMAAQANAAAKAGQAKAHAGAMQAFAMAAAPQAAAQgFALQgGAMgKAGQgKAGgNAAQgLABgJgGQgJgFgEgJIAAA9gAgVgxQgIALAAASQAAATAIAJQAIAKAOAAQAOAAAIgKQAJgJAAgTQAAgSgJgKQgIgLgOAAQgOAAgIAKg");
	this.shape_11.setTransform(-39.3,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7,p:{y:-1.6}},{t:this.shape_6,p:{y:0.4}},{t:this.shape_5,p:{y:0.5}},{t:this.shape_4,p:{y:0.5}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{y:-1.8}},{t:this.shape,p:{y:0.5}}]}).to({state:[{t:this.shape_11},{t:this.shape_7,p:{y:-0.8}},{t:this.shape_6,p:{y:1.2}},{t:this.shape_5,p:{y:1.3}},{t:this.shape_4,p:{y:1.3}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_1,p:{y:-1}},{t:this.shape,p:{y:1.3}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_12.setTransform(0.1,0);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-18.2,135,32.3);


(lib.btnDrag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgkA+QgOgKAAgTQAAgNAIgJQAIgJAOgDQgNgEgHgIQgHgJAAgMQAAgLAGgJQAGgIALgFQALgFANAAQAOAAALAFQALAFAGAIQAGAJAAALQAAAMgHAJQgHAIgNAEQAOADAJAJQAHAJAAANQAAATgOAKQgOALgXAAQgXAAgNgLgAgZAOQgJAHAAALQAAANAJAHQAJAHAQAAQARAAAJgHQAJgHAAgNQAAgLgKgHQgJgIgQgBQgPABgKAIgAgWgzQgJAGABAMQgBAMAJAHQAIAHAOABQAOgBAJgHQAJgHAAgMQAAgMgJgGQgIgHgPAAQgOAAgIAHg");
	this.shape.setTransform(41.9,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgkBHIBBh/IhLAAIAAgOIBdAAIAAAMIhCCBg");
	this.shape_1.setTransform(29.9,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgjA3QgOgSAAghQAAgXAHgSQAGgRAMgJQANgJAQAAQAMAAAMAFQAMAEAIAJIgGAMQgKgIgJgEQgJgEgKAAQgRAAgKAQQgLARAAAcIAAADQAFgKAKgHQALgGAMAAQANAAAKAGQAKAFAGAKQAGAKAAANQAAANgGALQgGAKgLAGQgKAGgNAAQgZAAgOgSgAgTAEQgJAJAAAOQAAAOAJAJQAJAJANAAQAOAAAIgJQAIgIAAgPQAAgOgIgJQgJgHgNAAQgNAAgJAHg");
	this.shape_2.setTransform(18,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AgaBDQgMgEgJgJIAHgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgOgIgIQgJgIgOAAQgTAAgMAPIgLAAIAAhSIBUAAIAAAOIhEAAIAAAyQAMgLARAAQAOAAAJAGQAKAGAGAIQAGALAAANQgBANgGALQgFALgMAFQgKAGgOAAQgNAAgNgFg");
	this.shape_3.setTransform(6.2,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AAOBHIAAgfIhBAAIAAgMIBEhiIANAAIAABhIAWAAIAAANIgWAAIAAAfgAgiAbIAwAAIAAhFg");
	this.shape_4.setTransform(-5.9,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgZBEQgMgFgJgIIAGgNQAUARAUAAQAPAAAJgHQAHgHAAgNQAAgaggAAIgQAAIAAgNIANAAQAPAAAIgHQAJgHAAgNQAAgMgHgGQgHgGgNAAQgTAAgUAQIgGgMQAIgIANgFQANgFAMAAQATAAAMAKQALAKAAAQQAAANgGAJQgGAJgKAEQAMADAHAIQAHAJgBAOQAAASgMALQgNALgWAAQgMAAgNgFg");
	this.shape_5.setTransform(-18.3,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgGgHQgIgGgLAAQgVAAgUAQIgGgNQAJgHANgFQANgFAMAAQATAAALAKQAMAKgBASQABAMgGALQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape_6.setTransform(-30,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgnBHIAAgOIAgAAIAAhrIgdATIAAgQIAkgXIAIAAIAAB/IAgAAIAAAOg");
	this.shape_7.setTransform(-41.6,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgaBDQgMgEgJgJIAHgMQATAQAVAAQAOAAAJgIQAIgJAAgPQAAgNgIgKQgJgHgOAAQgTAAgMAPIgLAAIAAhSIBUAAIAAAOIhEAAIAAAyQAMgLARAAQAOAAAJAGQAKAGAGAIQAGALAAANQgBANgGALQgFAKgMAGQgKAGgOAAQgNAAgNgFg");
	this.shape_8.setTransform(6.2,2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0C5B58").s().p("AgrBIIAAgNIAxg2QAKgLAFgJQAEgJAAgJQAAgLgGgHQgIgGgLAAQgVAAgUAQIgGgNQAJgHANgFQANgFAMAAQATAAALAKQAMAKgBASQABALgGAMQgFAKgNAOIgoAsIBGAAIAAAOg");
	this.shape_9.setTransform(-30,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6},{t:this.shape_5,p:{y:1}},{t:this.shape_4,p:{y:1}},{t:this.shape_3},{t:this.shape_2,p:{y:1}},{t:this.shape_1,p:{y:1}},{t:this.shape,p:{y:1}}]}).to({state:[{t:this.shape_7,p:{y:2.2}},{t:this.shape_9},{t:this.shape_5,p:{y:2.2}},{t:this.shape_4,p:{y:2.2}},{t:this.shape_8},{t:this.shape_2,p:{y:2.2}},{t:this.shape_1,p:{y:2.2}},{t:this.shape,p:{y:2.2}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_10.setTransform(0.1,0);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.btnDrag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick_1");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0C5B58").s().p("AgZBEQgKgHgGgMQgFgMAAgPQAAgQAFgLQAGgLAKgHQAKgGANAAQALAAAJAFQAJAFAEAJIAAg/IAQAAIAACSIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgGQgJAJAAATQAAASAJAKQAIALAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIAKg");
	this.shape.setTransform(40,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0C5B58").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABATQAEgLAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_1.setTransform(31.4,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C5B58").s().p("AgYAuQgLgHgGgLQgGgMAAgQQAAgPAGgMQAGgLALgHQALgGANAAQAOAAALAGQALAHAGALQAGAMAAAPQAAAQgGAMQgGALgLAHQgLAGgOAAQgNAAgLgGgAgWgcQgIALAAARQAAATAIAKQAIAKAOAAQAPAAAIgKQAIgKAAgTQAAgRgIgLQgIgKgPAAQgOAAgIAKg");
	this.shape_2.setTransform(21.4,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C5B58").s().p("AAdAyIgdhNIgcBNIgPAAIglhjIARAAIAcBQIAdhQIAOAAIAdBQIAdhQIAQAAIgmBjg");
	this.shape_3.setTransform(7,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_4.setTransform(-6.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0C5B58").s().p("AgnAnIAGgMQAIAHAIACQAJADAJAAQALAAAGgEQAGgEAAgHQAAgGgEgEQgEgDgJgCIgQgEQgNgDgHgGQgGgHAAgKQAAgOAKgIQALgIAQAAQALAAAJADQAKAEAGAGIgFAMQgPgMgQAAQgKAAgGAEQgFAEAAAIQAAAGADADQAEAEAIACIAQAEQAOADAHAGQAHAHAAALQAAANgLAHQgKAIgTAAQgYAAgPgNg");
	this.shape_5.setTransform(-16.6,3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C5B58").s().p("AgZAuQgKgHgGgLQgFgMAAgQQAAgOAFgMQAGgMAKgHQAKgGANAAQALAAAJAFQAJAFAEAKIAAgSIAQAAIAABkIgQAAIAAgSQgEAJgJAFQgJAFgLAAQgNAAgKgGgAgVgbQgJAKAAARQAAATAIAKQAJAKAOAAQAOAAAIgKQAIgKAAgTQAAgSgIgKQgIgKgOAAQgOAAgIALg");
	this.shape_6.setTransform(-27.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0C5B58").s().p("AgzBHIAAiNIA4AAQAWAAAMAKQANALAAATQAAASgNALQgMAKgWAAIgnAAIAAA+gAgigEIAmAAQAQAAAIgHQAIgHAAgMQAAgNgIgHQgIgHgQAAIgmAAg");
	this.shape_7.setTransform(-39.6,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0C5B58").s().p("AgaAzIAAhHQAAgQgCgMIAQAAIABASQAEgKAHgFQAJgGALABQAFAAAEABIgBAOQgEgBgGAAQgPAAgGAJQgHAJAAANIAAA4g");
	this.shape_8.setTransform(31.4,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7,p:{y:1}},{t:this.shape_6,p:{y:3}},{t:this.shape_5,p:{y:3}},{t:this.shape_4,p:{y:3}},{t:this.shape_3,p:{y:3.1}},{t:this.shape_2,p:{y:3}},{t:this.shape_1},{t:this.shape,p:{y:0.8}}]}).to({state:[{t:this.shape_7,p:{y:2}},{t:this.shape_6,p:{y:4}},{t:this.shape_5,p:{y:4}},{t:this.shape_4,p:{y:4}},{t:this.shape_3,p:{y:4.1}},{t:this.shape_2,p:{y:4}},{t:this.shape_8},{t:this.shape,p:{y:1.8}}]},2).to({state:[]},1).wait(1));

	// Layer_3
	this.instance = new lib.btnBgB();
	this.instance.parent = this;
	this.instance.cache(-69,-16,139,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({y:1.4},0).wait(1).to({y:0},0).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(255,204,0,0.996)").ss(5,0,0,3).p("AqiBaIAAi2QABgvAxAAIThAAQAxAAABAvIAAC2QAAAygyAAIzhAAQgyAAAAgyg");
	this.shape_9.setTransform(0.1,0);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-15.7,135,31.5);


(lib.ans_bttn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 4
	this.instance = new lib.btnCheckBox();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.1,1.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.btnCheckBox(), 3);

	this.instance_1 = new lib.btnCheckBox2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.1,1.1);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btnCheckBox2(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-19,47.3,37.4);


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


(lib.actMc5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [1, 2, 3, 4, 5];
		var cAnsCopy = [1, 2, 3, 4, 5];
		var userAns = [0,0,0,0,0];
		var maxItem = 7;
		var maxBlanks = 5;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.myStr = "REadY6$1";
		this.item2.myStr = "veNus%12";
		this.item3.myStr = "P@5$word";
		this.item4.myStr = "8765ft2!";
		this.item5.myStr = "wat#rmelon4";
		this.item6.myStr = "abc123";
		this.item7.myStr = "77777777";
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7];
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
			_this.txtAnsTotal.text = doneCount + "/5";
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
			_this["item"+userAns[4]].myStr;
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
	this.btnSubmit.setTransform(406.3,521.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item2 = new lib.btnDrag13();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(337,277.5);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnDrag13(), 3);

	this.item1 = new lib.btnDrag12();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(327,247);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnDrag12(), 3);

	this.item7 = new lib.btnDrag11();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(327,438.8);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnDrag11(), 3);

	this.item6 = new lib.btnDrag10();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(337,406.5);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnDrag10(), 3);

	this.item5 = new lib.btnDrag9();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(347,374.3);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnDrag9(), 3);

	this.item4 = new lib.btnDrag8();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(357,342);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnDrag8(), 3);

	this.item3 = new lib.btnDrag14();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(347,309.8);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnDrag14(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7},{t:this.item1},{t:this.item2}]}).wait(1));

	// btnRemove
	this.btnUndo5 = new lib.btnXX();
	this.btnUndo5.name = "btnUndo5";
	this.btnUndo5.parent = this;
	this.btnUndo5.setTransform(692.5,434.3);
	new cjs.ButtonHelper(this.btnUndo5, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo4 = new lib.btnXX();
	this.btnUndo4.name = "btnUndo4";
	this.btnUndo4.parent = this;
	this.btnUndo4.setTransform(692.5,404.2);
	new cjs.ButtonHelper(this.btnUndo4, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo3 = new lib.btnXX();
	this.btnUndo3.name = "btnUndo3";
	this.btnUndo3.parent = this;
	this.btnUndo3.setTransform(692.5,374.1);
	new cjs.ButtonHelper(this.btnUndo3, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo2 = new lib.btnXX();
	this.btnUndo2.name = "btnUndo2";
	this.btnUndo2.parent = this;
	this.btnUndo2.setTransform(692.5,344);
	new cjs.ButtonHelper(this.btnUndo2, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo1 = new lib.btnXX();
	this.btnUndo1.name = "btnUndo1";
	this.btnUndo1.parent = this;
	this.btnUndo1.setTransform(692.5,314);
	new cjs.ButtonHelper(this.btnUndo1, 0, 1, 2, false, new lib.btnXX(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnUndo1},{t:this.btnUndo2},{t:this.btnUndo3},{t:this.btnUndo4},{t:this.btnUndo5}]}).wait(1));

	// dBox
	this.txtAnsTotal = new cjs.Text("0/5", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAnsTotal.name = "txtAnsTotal";
	this.txtAnsTotal.textAlign = "center";
	this.txtAnsTotal.lineHeight = 21;
	this.txtAnsTotal.lineWidth = 47;
	this.txtAnsTotal.parent = this;
	this.txtAnsTotal.setTransform(631,476.9);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAnsTotal);
	}

	this.txtAns5 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns5.name = "txtAns5";
	this.txtAns5.lineHeight = 21;
	this.txtAns5.lineWidth = 133;
	this.txtAns5.parent = this;
	this.txtAns5.setTransform(561.8,422.9);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns5);
	}

	this.txtAns4 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns4.name = "txtAns4";
	this.txtAns4.lineHeight = 21;
	this.txtAns4.lineWidth = 133;
	this.txtAns4.parent = this;
	this.txtAns4.setTransform(561.8,392.8);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns4);
	}

	this.txtAns3 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns3.name = "txtAns3";
	this.txtAns3.lineHeight = 21;
	this.txtAns3.lineWidth = 133;
	this.txtAns3.parent = this;
	this.txtAns3.setTransform(561.8,362.7);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns3);
	}

	this.txtAns2 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns2.name = "txtAns2";
	this.txtAns2.lineHeight = 21;
	this.txtAns2.lineWidth = 133;
	this.txtAns2.parent = this;
	this.txtAns2.setTransform(561.8,332.6);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns2);
	}

	this.txtAns1 = new cjs.Text("", "normal 400 14px 'Muli'", "#FFFFFF");
	this.txtAns1.name = "txtAns1";
	this.txtAns1.lineHeight = 21;
	this.txtAns1.lineWidth = 133;
	this.txtAns1.parent = this;
	this.txtAns1.setTransform(561.8,302.5);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAnsTotal}]}).wait(1));

	// dArea
	this.dArea = new lib.dustbin();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(621,396.1);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc5, new cjs.Rectangle(257,229.3,468.6,314.6), null);


(lib.actMc4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var cAns = [1, 2, 3, 4, 5];
		var cAnsCopy = [1, 2, 3, 4, 5];
		var userAns = [0,0,0,0,0];
		var maxItem = 7;
		var maxBlanks = 5;
		var initX = [];
		var initY = [];
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		this.item1.myStr = "Password";
		this.item2.myStr = "12345678";
		this.item3.myStr = "pineapple";
		this.item4.myStr = "pqrs321";
		this.item5.myStr = "44444444";
		this.item6.myStr = "ReADY5%4";
		this.item7.myStr = "maRs$832";
		//get positions
		for (i=1; i<=maxItem; i++){
			this["item"+i].itemNum = i;
			initX[i-1] = this["item"+i].x;
			initY[i-1] = this["item"+i].y;
		}
		//shuffle
		var posList = [1, 2, 3, 4, 5, 6, 7];
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
			_this.txtAnsTotal.text = doneCount + "/5";
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
			_this["item"+userAns[4]].myStr;
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
	this.btnSubmit.setTransform(406.3,521.3,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item7 = new lib.btnDrag7();
	this.item7.name = "item7";
	this.item7.parent = this;
	this.item7.setTransform(327,439);
	new cjs.ButtonHelper(this.item7, 0, 1, 2, false, new lib.btnDrag7(), 3);

	this.item6 = new lib.btnDrag6();
	this.item6.name = "item6";
	this.item6.parent = this;
	this.item6.setTransform(337,406.8);
	new cjs.ButtonHelper(this.item6, 0, 1, 2, false, new lib.btnDrag6(), 3);

	this.item5 = new lib.btnDrag5();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(347,374.5);
	new cjs.ButtonHelper(this.item5, 0, 1, 2, false, new lib.btnDrag5(), 3);

	this.item4 = new lib.btnDrag4();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(357,342.3);
	new cjs.ButtonHelper(this.item4, 0, 1, 2, false, new lib.btnDrag4(), 3);

	this.item3 = new lib.btnDrag3();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(347,310.1);
	new cjs.ButtonHelper(this.item3, 0, 1, 2, false, new lib.btnDrag3(), 3);

	this.item2 = new lib.btnDrag2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(337,277.8);
	new cjs.ButtonHelper(this.item2, 0, 1, 2, false, new lib.btnDrag2(), 3);

	this.item1 = new lib.btnDrag1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(327,245.5);
	new cjs.ButtonHelper(this.item1, 0, 1, 2, false, new lib.btnDrag1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item6},{t:this.item7}]}).wait(1));

	// btnRemove
	this.btnUndo5 = new lib.btnXX();
	this.btnUndo5.name = "btnUndo5";
	this.btnUndo5.parent = this;
	this.btnUndo5.setTransform(697.5,467.3);
	new cjs.ButtonHelper(this.btnUndo5, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo4 = new lib.btnXX();
	this.btnUndo4.name = "btnUndo4";
	this.btnUndo4.parent = this;
	this.btnUndo4.setTransform(697.5,437.2);
	new cjs.ButtonHelper(this.btnUndo4, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo3 = new lib.btnXX();
	this.btnUndo3.name = "btnUndo3";
	this.btnUndo3.parent = this;
	this.btnUndo3.setTransform(697.5,407.1);
	new cjs.ButtonHelper(this.btnUndo3, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo2 = new lib.btnXX();
	this.btnUndo2.name = "btnUndo2";
	this.btnUndo2.parent = this;
	this.btnUndo2.setTransform(697.5,377);
	new cjs.ButtonHelper(this.btnUndo2, 0, 1, 2, false, new lib.btnXX(), 3);

	this.btnUndo1 = new lib.btnXX();
	this.btnUndo1.name = "btnUndo1";
	this.btnUndo1.parent = this;
	this.btnUndo1.setTransform(697.5,347);
	new cjs.ButtonHelper(this.btnUndo1, 0, 1, 2, false, new lib.btnXX(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnUndo1},{t:this.btnUndo2},{t:this.btnUndo3},{t:this.btnUndo4},{t:this.btnUndo5}]}).wait(1));

	// dBox
	this.txtAnsTotal = new cjs.Text("0/5", "normal 400 14px 'Muli'");
	this.txtAnsTotal.name = "txtAnsTotal";
	this.txtAnsTotal.textAlign = "center";
	this.txtAnsTotal.lineHeight = 21;
	this.txtAnsTotal.lineWidth = 100;
	this.txtAnsTotal.parent = this;
	this.txtAnsTotal.setTransform(628,496.3);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAnsTotal);
	}

	this.txtAns5 = new cjs.Text("", "normal 400 14px 'Muli'");
	this.txtAns5.name = "txtAns5";
	this.txtAns5.lineHeight = 21;
	this.txtAns5.lineWidth = 133;
	this.txtAns5.parent = this;
	this.txtAns5.setTransform(556.8,455.9);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns5);
	}

	this.txtAns4 = new cjs.Text("", "normal 400 14px 'Muli'");
	this.txtAns4.name = "txtAns4";
	this.txtAns4.lineHeight = 21;
	this.txtAns4.lineWidth = 133;
	this.txtAns4.parent = this;
	this.txtAns4.setTransform(556.8,425.8);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns4);
	}

	this.txtAns3 = new cjs.Text("", "normal 400 14px 'Muli'");
	this.txtAns3.name = "txtAns3";
	this.txtAns3.lineHeight = 21;
	this.txtAns3.lineWidth = 133;
	this.txtAns3.parent = this;
	this.txtAns3.setTransform(556.8,395.7);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns3);
	}

	this.txtAns2 = new cjs.Text("", "normal 400 14px 'Muli'");
	this.txtAns2.name = "txtAns2";
	this.txtAns2.lineHeight = 21;
	this.txtAns2.lineWidth = 133;
	this.txtAns2.parent = this;
	this.txtAns2.setTransform(556.8,365.6);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns2);
	}

	this.txtAns1 = new cjs.Text("", "normal 400 14px 'Muli'");
	this.txtAns1.name = "txtAns1";
	this.txtAns1.lineHeight = 21;
	this.txtAns1.lineWidth = 133;
	this.txtAns1.parent = this;
	this.txtAns1.setTransform(556.8,335.5);
	if(!lib.properties.webfonts['Muli']) {
		lib.webFontTxtInst['Muli'] = lib.webFontTxtInst['Muli'] || [];
		lib.webFontTxtInst['Muli'].push(this.txtAns1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAnsTotal}]}).wait(1));

	// dArea
	this.dArea = new lib.dustbin2();
	this.dArea.name = "dArea";
	this.dArea.parent = this;
	this.dArea.setTransform(627.1,388.6);

	this.timeline.addTween(cjs.Tween.get(this.dArea).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc4, new cjs.Rectangle(257,229,462.7,314.9), null);


(lib.actMc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = [1, 0, 1, 1, 1];
		var maxItem = 5;
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
		var userAns = [0,0,0,0,0];
		selectAns = function (itemNum) {
			if (userAns[itemNum-1]==0){
				this["item"+itemNum].gotoAndStop(1);
				userAns[itemNum-1]=1;
			} else {
				this["item"+itemNum].gotoAndStop(0);
				userAns[itemNum-1]=0;
			}
			//check completion
			var doneCount = 0;
			for (var i=1; i<=maxItem; i++){
				if (userAns[i-1]!=0){
					doneCount++;
				}
			}
			if (doneCount>0){
				this.btnSubmit.mouseEnabled = true;
				this.btnSubmit.alpha = 1;
			} else {
				this.btnSubmit.mouseEnabled = false;
				this.btnSubmit.alpha = .5;
			}
		}
		this.item1.addEventListener("click", selectAns.bind(this, 1));
		this.item2.addEventListener("click", selectAns.bind(this, 2));
		this.item3.addEventListener("click", selectAns.bind(this, 3));
		this.item4.addEventListener("click", selectAns.bind(this, 4));
		this.item5.addEventListener("click", selectAns.bind(this, 5));
		function submitAns(e){
			var cScore = 0;
			var _userAns = userAns[0] + ", " + userAns[1] + ", " + userAns[2] + ", " + userAns[3] + ", " +
					userAns[4];
				for (var i=1; i<=maxItem; i++){
					if (userAns[i-1]==cAns[i-1]){
						cScore++;
					}
				}
			var scaledScore = Math.round(cScore/maxItem*40)/10+1;
			_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", submitAns);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(558.5,523.3,0.85,0.85,0,0,0,0.2,0.6);

	this.item1 = new lib.ans_bttn();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(521.7,279.7);

	this.item5 = new lib.ans_bttn();
	this.item5.name = "item5";
	this.item5.parent = this;
	this.item5.setTransform(521.7,465.3);

	this.item4 = new lib.ans_bttn();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(521.7,418.9);

	this.item3 = new lib.ans_bttn();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(521.7,372.5);

	this.item2 = new lib.ans_bttn();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(521.7,326.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item2},{t:this.item3},{t:this.item4},{t:this.item5},{t:this.item1},{t:this.btnSubmit}]}).wait(1));

	// items
	this.instance = new lib.Mc3op5();
	this.instance.parent = this;
	this.instance.setTransform(682.8,477.2,1,1,0,0,0,132.3,24.9);

	this.instance_1 = new lib.Mc3op1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(662,279.7,1,1,0,0,0,111.5,13);

	this.instance_2 = new lib.Mc3op4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(682.8,430.8,1,1,0,0,0,132.3,24.9);

	this.instance_3 = new lib.Mc3op3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(657.2,384.4,1,1,0,0,0,106.7,24.9);

	this.instance_4 = new lib.Mc3op2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(662,326.1,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_5 = new lib.Bitmap31();
	this.instance_5.parent = this;
	this.instance_5.setTransform(507.5,243.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc3, new cjs.Rectangle(491.1,243.6,313.4,359), null);


(lib.actMc2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 4;
		var _this = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		var userAns = 0;
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
	this.btnCont.setTransform(558.4,529.5,0.85,0.85,0,0,0,0.2,0.6);

	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(514.2,478.6);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(514.2,388.9);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(514.2,324.2);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(514.2,272.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4},{t:this.btnCont}]}).wait(1));

	// items
	this.instance = new lib.Mc2op1();
	this.instance.parent = this;
	this.instance.setTransform(658,272.6,1,1,0,0,0,111.5,13);

	this.instance_1 = new lib.Mc2op4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(678.8,490.5,1,1,0,0,0,132.3,24.9);

	this.instance_2 = new lib.Mc2op3copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(653.2,400,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc2op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(658,337.3,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_4 = new lib.Bitmap31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(507.5,243.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc2, new cjs.Rectangle(491,243.6,313.5,359), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var cAns = 3;
		var maxItem = 4;
		var _this = this;
		this.btnCont.mouseEnabled = false;
		this.btnCont.alpha = .5;
		var userAns = 0;
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
	this.item4 = new lib.btnItemRound();
	this.item4.name = "item4";
	this.item4.parent = this;
	this.item4.setTransform(514.2,461.6);

	this.item3 = new lib.btnItemRound();
	this.item3.name = "item3";
	this.item3.parent = this;
	this.item3.setTransform(514.2,406.6);

	this.item2 = new lib.btnItemRound();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(514.2,351.6);

	this.item1 = new lib.btnItemRound();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(514.2,296.6);

	this.btnCont = new lib.mcBtnCont();
	this.btnCont.name = "btnCont";
	this.btnCont.parent = this;
	this.btnCont.setTransform(558.4,524,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btnCont},{t:this.item1},{t:this.item2},{t:this.item3},{t:this.item4}]}).wait(1));

	// items
	this.instance = new lib.Mc1op1c();
	this.instance.parent = this;
	this.instance.setTransform(658,296.6,1,1,0,0,0,111.5,13);

	this.instance_1 = new lib.Mc1op4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(678.8,473.5,1,1,0,0,0,132.3,24.9);

	this.instance_2 = new lib.Mc1op3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(653.2,418.5,1,1,0,0,0,106.7,24.9);

	this.instance_3 = new lib.Mc1op2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(658,351.6,1,1,0,0,0,111.5,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 2
	this.instance_4 = new lib.Bitmap31();
	this.instance_4.parent = this;
	this.instance_4.setTransform(507.5,243.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(491,243.6,313.5,359), null);


// stage content:
(lib.y6s6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:74,q2:134,q3:193,q4:238,q5:279,finalFb:330});

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
		var stageNum = 6;
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
		this.qList1 = [0, 1, 2];
		var qItem1 = [{
						"qId": "y6s6_1",
						"qDomain": 3,
						"qParam": 6,
						"qSkill": 23,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s6_2",
						"qDomain": 3,
						"qParam": 6,
						"qSkill": 23,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s6_3",
						"qDomain": 3,
						"qParam": 6,
						"qSkill": 25,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					}
				];
		var qItem2 = [{
						"qId": "y6s6_4",
						"qDomain": 3,
						"qParam": 6,
						"qSkill": 26,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s6_5",
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
		//debugMode = false;
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(qItem1[0]);
			this.myData.qItem.push(qItem1[1]);
			this.myData.qItem.push(qItem1[2]);
			this.myData.qItem.push(qItem2[0]);
			this.myData.qItem.push(qItem2[1]);
		} else {
			//shuffle and take only what we need
			this.myData.qItem.push(qItem1[randRange(0, 2)]);
			this.myData.qItem.push(qItem2[0]);
			this.myData.qItem.push(qItem2[1]);
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
	this.frame_129 = function() {
		this.stop();
	}
	this.frame_134 = function() {
		playSound("questionAlert");
	}
	this.frame_188 = function() {
		this.stop();
	}
	this.frame_193 = function() {
		playSound("questionAlert");
	}
	this.frame_233 = function() {
		this.stop();
	}
	this.frame_238 = function() {
		playSound("questionAlert");
	}
	this.frame_274 = function() {
		this.stop();
	}
	this.frame_279 = function() {
		playSound("questionAlert");
	}
	this.frame_315 = function() {
		this.stop();
	}
	this.frame_330 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_501 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(5).call(this.frame_74).wait(55).call(this.frame_129).wait(5).call(this.frame_134).wait(54).call(this.frame_188).wait(5).call(this.frame_193).wait(40).call(this.frame_233).wait(5).call(this.frame_238).wait(36).call(this.frame_274).wait(5).call(this.frame_279).wait(36).call(this.frame_315).wait(15).call(this.frame_330).wait(171).call(this.frame_501).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(74).to({_off:false},0).wait(428));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(698.2,78.4);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(74).to({_off:false},0).wait(428));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,118.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:684.4,y:80.3},16,cjs.Ease.cubicOut).wait(457));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(445.8,124.6,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(69).to({_off:false},0).to({_off:true},5).wait(428));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(444.3,137.1,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},287).wait(172));

	// avatar
	this.instance_3 = new lib.avatarBotsX("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(146,124.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,y:124.7},17,cjs.Ease.elasticOut).to({_off:true},287).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(330).to({graphics:null,x:0,y:0}).wait(172));

	// actMc
	this.instance_4 = new lib.actMc1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(325,10);
	this.instance_4._off = true;

	this.instance_5 = new lib.actMc2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(353,10);
	this.instance_5._off = true;

	this.instance_6 = new lib.actMc3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(336.3,10);
	this.instance_6._off = true;

	this.instance_7 = new lib.actMc4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,350);
	this.instance_7._off = true;

	this.instance_8 = new lib.actMc5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,350);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116).to({_off:false},0).to({x:0},13,cjs.Ease.cubicOut).to({_off:true},5).wait(368));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(175).to({_off:false},0).to({x:0},13,cjs.Ease.cubicOut).to({_off:true},5).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(221).to({_off:false},0).to({x:0},12,cjs.Ease.cubicOut).to({_off:true},5).wait(264));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(262).to({_off:false},0).to({y:10},12,cjs.Ease.cubicOut).to({_off:true},5).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(303).to({_off:false},0).to({y:10},12,cjs.Ease.cubicOut).to({_off:true},15).wait(172));

	// q
	this.instance_9 = new lib.mcQ();
	this.instance_9.parent = this;
	this.instance_9.setTransform(343.9,191.5,0.05,0.05);
	this.instance_9._off = true;

	this.instance_10 = new lib.mcQ2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(343.9,191.5,0.05,0.05);
	this.instance_10._off = true;

	this.instance_11 = new lib.mcQ3();
	this.instance_11.parent = this;
	this.instance_11.setTransform(343.9,191.5,0.05,0.05);
	this.instance_11._off = true;

	this.instance_12 = new lib.mcQ4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(343.9,183.5,0.05,0.05);
	this.instance_12._off = true;

	this.instance_13 = new lib.mcQ5();
	this.instance_13.parent = this;
	this.instance_13.setTransform(343.9,183.5,0.05,0.05);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(79).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:165.5},18,cjs.Ease.elasticOut).to({_off:true},37).wait(368));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(138).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:165.5},18,cjs.Ease.elasticOut).to({_off:true},37).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(198).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:165.5},18,cjs.Ease.elasticOut).to({_off:true},22).wait(264));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(243).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:165.5},18,cjs.Ease.elasticOut).to({_off:true},18).wait(223));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(284).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.5,y:165.5},18,cjs.Ease.elasticOut).to({_off:true},28).wait(172));

	// progress
	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(625.1,74.6);

	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(612.8,74.6);

	var maskedShapeInstanceList = [this.prog2,this.prog1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog1},{t:this.prog2}]},74).to({state:[]},256).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(476));

	// ansBg
	this.instance_14 = new lib.popupwindow();
	this.instance_14.parent = this;
	this.instance_14.setTransform(294,359.2,0.07,0.07);
	this.instance_14._off = true;

	this.instance_15 = new lib.smartphone();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-257.2,589.2,1,1,0,0,0,0.1,0.1);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_14,this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(98).to({_off:false},0).to({regX:0.1,regY:0.1,scaleX:0.81,scaleY:0.81,x:272.1,y:357.2},18,cjs.Ease.backOut).to({_off:true},18).wait(368));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(156).to({_off:false},0).to({x:292.8},18,cjs.Ease.backOut).to({_off:true},19).wait(309));

	// qBg
	this.instance_16 = new lib.workplace("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(406,291.5,0.456,0.456);
	this.instance_16._off = true;

	var maskedShapeInstanceList = [this.instance_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(20).to({_off:false},0).wait(35).to({startPosition:0},0).to({regX:0.3,regY:0.1,scaleX:0.76,scaleY:0.76,x:293.7,y:228.6},8,cjs.Ease.cubicOut).wait(11).to({startPosition:3},0).wait(60).to({startPosition:3},0).wait(59).to({startPosition:1},0).wait(45).to({startPosition:2},0).to({_off:true},92).wait(172));

	// bg
	this.instance_17 = new lib.Bitmap3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(502));

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
		{src:"images/y6s6/Bitmap21.png?1534908269901", id:"Bitmap21"},
		{src:"images/y6s6/Bitmap22.png?1534908269901", id:"Bitmap22"},
		{src:"images/y6s6/Bitmap23.png?1534908269901", id:"Bitmap23"},
		{src:"images/y6s6/Bitmap27.png?1534908269901", id:"Bitmap27"},
		{src:"images/y6s6/Bitmap28.png?1534908269901", id:"Bitmap28"},
		{src:"images/y6s6/Bitmap29.png?1534908269901", id:"Bitmap29"},
		{src:"images/y6s6/Bitmap3.png?1534908269901", id:"Bitmap3"},
		{src:"images/y6s6/Bitmap30.png?1534908269901", id:"Bitmap30"},
		{src:"images/y6s6/Bitmap31.png?1534908269901", id:"Bitmap31"},
		{src:"images/y6s6/Bitmap32.png?1534908269901", id:"Bitmap32"},
		{src:"images/y6s6/Bitmap33.png?1534908269901", id:"Bitmap33"},
		{src:"images/y6s6/Bitmap34.png?1534908269901", id:"Bitmap34"},
		{src:"images/y6s6/Bitmap35.png?1534908269901", id:"Bitmap35"},
		{src:"images/y6s6/Bitmap36.png?1534908269901", id:"Bitmap36"},
		{src:"images/y6s6/Bitmap37.png?1534908269901", id:"Bitmap37"},
		{src:"images/y6s6/Bitmap8.png?1534908269901", id:"Bitmap8"},
		{src:"images/y6s6/Bitmap9.png?1534908269901", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1534908269901", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1534908269901", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1534908269901", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1534908269901", id:"stdClick"},
		{src:"sounds/stdClick_1.mp3?1534908269901", id:"stdClick_1"},
		{src:"sounds/submitAns.mp3?1534908269901", id:"submitAns"},
		{src:"sounds/timeout.mp3?1534908269901", id:"timeout"}
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