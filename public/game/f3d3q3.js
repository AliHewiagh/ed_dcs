(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,375);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,623,375);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,104);


(lib.Bitmap29 = function() {
	this.initialize(img.Bitmap29);
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


(lib.txtSalah = function(mode,startPosition,loop) {
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
			_this.stop();
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
	this.shape.graphics.f("#660066").s().p("AAzAuIAAg3QAAgNgEgFQgFgGgJAAQgMAAgGAIQgHAHAAAOIAAAyIgNAAIAAg3QAAgMgFgGQgFgGgJAAQgMAAgGAIQgHAHAAAOIAAAyIgPAAIAAhAQABgOgCgLIAOAAIACAQQADgJAIgFQAHgEAKAAQALAAAHAEQAFAEAEAJQAEgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape.setTransform(22,2.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_1.setTransform(8.4,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_2.setTransform(-2.4,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_3.setTransform(-13.2,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AguBAIAAh/IAzAAQATAAALAJQALAKAAAQQAAASgLAJQgLAIgTAAIgkAAIAAA5gAgfgEIAiAAQAOABAIgHQAHgGAAgMQAAgLgHgGQgIgGgOAAIgiAAg");
	this.shape_4.setTransform(-23.7,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_5.setTransform(21.8,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgDA1QgHgHAAgOIAAgzIgSAAIAAgLIASAAIAAgYIANgFIAAAdIAaAAIAAALIgaAAIAAAwQAAALAEAEQAEADAIAAQAFAAAFgBIAAANQgGABgHAAQgNAAgGgHg");
	this.shape_6.setTransform(13.6,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_7.setTransform(5.7,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_8.setTransform(-1.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#660066").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_9.setTransform(-8.4,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#660066").s().p("Ag1BAIAAh/IArAAQAeAAARAQQARARAAAeQAAAfgRARQgRAQgeAAgAgmAzIAbAAQAYABANgNQAMgNAAgaQAAgzgxABIgbAAg");
	this.shape_10.setTransform(-19.8,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32,-14.3,64,28.7);


(lib.txtBetul = function(mode,startPosition,loop) {
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
			_this.stop();
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
	this.shape.graphics.f("#660066").s().p("AgDA1QgHgIAAgOIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAKAEADQAEAFAIAAQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape.setTransform(21,1.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_1.setTransform(15.8,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#660066").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_2.setTransform(8.5,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#660066").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_3.setTransform(0.2,2.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660066").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_4.setTransform(-8.5,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AgGBAIAAhzIgtAAIAAgMIBnAAIAAAMIgtAAIAABzg");
	this.shape_5.setTransform(-18.9,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#660066").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_6.setTransform(7.8,2.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#660066").s().p("AgWApQgJgGgGgKQgFgLAAgOQAAgNAFgLQAGgKAJgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_7.setTransform(-1.8,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#660066").s().p("AguBAIAAh/IAzAAQATAAALAJQALAKAAARQABARgMAJQgLAJgTAAIgkAAIAAA4gAgfgDIAiAAQAOgBAHgFQAIgHAAgLQAAgMgIgGQgHgGgOAAIgiAAg");
	this.shape_8.setTransform(-12.3,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:21}}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:15.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-14.3,52.7,28.7);


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
	this.myTxt = new cjs.Text("You are working on your social media profile.\nChoose what to post and delete. ", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 363;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-238.5,-23.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A9ZAAMA6zAAA");
	this.shape.setTransform(-63.4,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A8CE6IAAmWIilACIClh7IAAhfMA6zAAAIAAJu");
	this.shape_1.setTransform(-72.1,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A8HE4IAAmXIikADICkh7IAAhgMA6zAAAIAAJvg");
	this.shape_2.setTransform(-71.7,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-31,396.3,65.4), null);


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
	this.myTxt = new cjs.Text("Anda sedang melakukan sesuatu pada profil \nmedia sosial anda. Pilih apa yang hendak \nditerbitkan dan dipadam.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 367;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-236.7,-22.7);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A92AAMA7tAAA");
	this.shape.setTransform(-60.5,59.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A8fHBIAAqkIilACIClh7IAAhfMA7tAAAIAAN8");
	this.shape_1.setTransform(-69.2,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A8kG/IAAqlIikADICkh7IAAhgMA7tAAAIAAN9g");
	this.shape_2.setTransform(-68.8,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-31,402.1,92.4), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C8E90").s().p("AkPA3QgWAAgQgQQgQgQAAgWIAAgBQAAgWAQgQQAQgQAWAAIIfAAQAWAAAQAQQAQAQAAAWIAAABQAAAWgQAQQgQAQgWAAg");
	this.shape.setTransform(227.1,-218.6,0.086,0.086);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C8E90").s().p("AAbE1IAAgxIDsAAQANAAAJgKQAKgJAAgOIAAnFQAAgNgKgKQgJgJgNAAIoNAAQgNAAgKAJQgJAKAAANIAADGIgyAAIAAjGQABgiAXgYQAYgYAiAAIINAAQAiAAAXAYQAYAYABAiIAAHFQgBAigYAYQgXAYgiAAg");
	this.shape_1.setTransform(240.3,-221.7,0.086,0.086);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8C8E90").s().p("AjODzQgbAAgSgTQgTgTAAgaIAAllQAAgaATgTQASgTAbAAIGcAAQAbAAATATQATATAAAaIAAFlQAAAagTATQgTATgbAAgAjgjEQgHAIAAAKIAAFlQAAAKAHAIQAIAHAKAAIGcAAQALAAAHgHQAIgIAAgKIAAllQAAgKgIgIQgHgHgLAAImcAAQgKAAgIAHg");
	this.shape_2.setTransform(238.5,-220.2,0.086,0.086);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8C8E90").s().p("AkVAiQgNAAgKgKQgKgKAAgOIAAAAQAAgNAKgKQAKgKANAAIIrAAQAOAAAJAKQAKAKAAANIAAAAQAAAOgKAKQgJAKgOAAg");
	this.shape_3.setTransform(-283.8,-219.3,0.086,0.086);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8C8E90").s().p("AAAE3QgNAAgKgKQgJgJAAgOIAAorQAAgNAJgKQAKgKANAAIAAAAQAOAAAJAKQAKAKAAANIAAIrQAAAOgKAJQgJAKgOAAg");
	this.shape_4.setTransform(-283.8,-219.3,0.086,0.086);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C8E90").s().p("AAAE3QgNAAgKgKQgJgJAAgOIAAorQAAgNAJgKQAKgKANAAIAAAAQAOAAAJAKQAKAKAAANIAAIrQAAAOgKAJQgJAKgOAAg");
	this.shape_5.setTransform(-283.8,-219.3,0.086,0.086);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8C8E90").s().p("AlBFDIgBgBQgOgOAAgUQAAgUAOgPII/o/QAPgOAUAAQAUAAAOAOIABABQAOAOAAAUQAAAUgOAOIpAJAQgOAOgUAAQgUAAgOgOg");
	this.shape_6.setTransform(251.9,-221.2,0.086,0.086);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8C8E90").s().p("AD9FDIo/pAQgOgOAAgUQAAgUAOgOIABgBQAOgOAUAAQAUAAAOAOIJAI/QAOAPAAAUQAAAUgOAOIgBABQgOAOgUAAQgUAAgPgOg");
	this.shape_7.setTransform(251.9,-221.2,0.086,0.086);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8C8E90").s().p("AD9FDIo/pAQgOgOAAgUQAAgUAOgOIABgBQAOgOAUAAQAUAAAOAOIJAI/QAOAPAAAUQAAAUgOAOIgBABQgOAOgUAAQgUAAgPgOg");
	this.shape_8.setTransform(251.9,-221.2,0.086,0.086);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B8BABC").s().p("Ai2C3IAAgBQgIgHAAgMQAAgLAIgJIFFlFQAJgIALAAQALAAAJAIIAAAAQAIAIAAAMQAAALgIAIIlGFGQgIAIgMAAQgLAAgIgIg");
	this.shape_9.setTransform(-294.1,-219.3,0.086,0.086);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B8BABC").s().p("ACPC3IlFlGQgIgIAAgLQAAgMAIgIQAIgIALAAQAMAAAIAIIFGFFQAIAJAAALQAAAMgIAHIAAABQgJAIgLAAQgLAAgJgIg");
	this.shape_10.setTransform(-294.1,-219.3,0.086,0.086);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8BABC").s().p("ACPC3IlFlGQgIgIAAgLQAAgMAIgIQAIgIALAAQAMAAAIAIIFGFFQAIAJAAALQAAAMgIAHIAAABQgJAIgLAAQgLAAgJgIg");
	this.shape_11.setTransform(-294.1,-219.3,0.086,0.086);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8C8E90").s().p("Aj9EFQhshsAAiZQAAiYBshsQBshsCYAAQBjAABVAxQBTAwAyBRIg9AlQgohChDgmQhFgohQAAQh6AAhYBXQhXBYAAB6QAAB8BXBXQBYBXB6AAQBnAABRg/QBQg+AZhiIBCAeQgjB0hhBJQhjBLh8AAQiYAAhshsg");
	this.shape_12.setTransform(-352,-201.9,0.086,0.086);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8C8E90").s().p("AiAA9IEBilIgwDRg");
	this.shape_13.setTransform(-349.6,-203.2,0.086,0.086);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B8BABC").s().p("AoSAyIAAhkIQkAAIAABkg");
	this.shape_14.setTransform(-371.3,-201.4,0.086,0.086);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8BABC").s().p("AklHLIHHnJInMnLIBEhFIIRIQIoMINg");
	this.shape_15.setTransform(-368.3,-201.4,0.086,0.086);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8C8E90").s().p("AoSAyIAAhkIQlAAIAABkg");
	this.shape_16.setTransform(-386.6,-201.4,0.086,0.086);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8C8E90").s().p("AkqACIIRoQIBEBFInMHLIHHHJIhEBEg");
	this.shape_17.setTransform(-389.6,-201.4,0.086,0.086);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8C8E90").s().p("AmmAvIAAhdINNAAIAABdg");
	this.shape_18.setTransform(251.9,-199.3,0.086,0.086);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C8E90").s().p("AmmAvIAAhdINNAAIAABdg");
	this.shape_19.setTransform(251.9,-202,0.086,0.086);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8C8E90").s().p("AmmAvIAAhdINNAAIAABdg");
	this.shape_20.setTransform(251.9,-204.6,0.086,0.086);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EguTABGQgSAAgNgMQgMgNAAgSIAAg1QAAgSAMgMQANgNASAAMBcnAAAQASAAANANQAMAMAAASIAAA1QAAASgMANQgNAMgSAAg");
	this.shape_21.setTransform(-58.9,-201.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EmPQD77MAAAn31MMehAAAMAAAH31g");
	this.shape_22.setTransform(-68.7,-2.4,0.13,0.117);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDEEEF").s().p("EgzzACqIAAjdICwAAIAAhSQAAgRAHgJQAJgKAVAAINcAAQAVAAAHAKQAGAJAAARIAABSMBWUAAAIAADdg");
	this.shape_23.setTransform(-68.7,-207.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D4D6D7").s().p("EmPQAPEIAA+HMMehAAAIAAeHg");
	this.shape_24.setTransform(-68.7,-221.2,0.13,0.086);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#464D5E").s().p("Egz0AgoMAAAhBQMBnpAAAMAAABBQg");
	this.shape_25.setTransform(-69.1,-21.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#3A404E").s().p("Eg26AjwMAAAhHfMBt1AAAMAAABHfgEgz2AgpMBnpAAAMAAAhBQMhnpAAAg");
	this.shape_26.setTransform(-68.9,-21.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#474F5C").s().p("AwJFsIFnj4IAAnfIVFAAIAAHfIFnD4g");
	this.shape_27.setTransform(-68.9,241.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-420.4,-250.2,703,528);


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
					//$("#dom_overlay_container").empty();
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
	this.txtTime = new cjs.Text("2:00", "60px 'Quantico'", "#006666");
	this.txtTime.name = "txtTime";
	this.txtTime.textAlign = "center";
	this.txtTime.lineHeight = 88;
	this.txtTime.lineWidth = 242;
	this.txtTime.parent = this;
	this.txtTime.setTransform(-1,-23.2,0.537,0.542,0,-2.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.txtTime).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcTimer, new cjs.Rectangle(-66.6,-30.6,133.3,61.3), null);


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
	this.shape.graphics.f("#000066").s().p("AgHA5IAAgRIAPAAIAAARgAgDAbIgEhTIAPAAIgEBTg");
	this.shape.setTransform(48.7,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIArAqg");
	this.shape_1.setTransform(43.4,-7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(36.7,-6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(29.8,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_4.setTransform(20.7,-7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_5.setTransform(13.2,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_6.setTransform(5.5,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_7.setTransform(-1.8,-6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(-13.8,-3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(-23.1,-5.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(-32.7,-5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_11.setTransform(-41.5,-3.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_12.setTransform(-55,-5.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_13.setTransform(-63,-7.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_14.setTransform(-72.2,-5.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_15.setTransform(-78.9,-5.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_16.setTransform(-86.7,-5.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_17.setTransform(-98.1,-5.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_18.setTransform(101.9,-25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(95.1,-29.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgjAxQALgEAGgDQAFgFAFgJIACgHIgihOIAOAAIAaBBIAchBIAMAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_20.setTransform(86.3,-27.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_21.setTransform(77,-29.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(68.4,-29.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_23.setTransform(55.2,-29.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_24.setTransform(45.6,-27.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_25.setTransform(38.6,-29.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_26.setTransform(30.2,-29.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_27.setTransform(21,-29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_28.setTransform(14.5,-31);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_29.setTransform(8.2,-29.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_30.setTransform(0.4,-31);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_31.setTransform(-13.7,-27.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_32.setTransform(-23,-29.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_33.setTransform(-32.6,-29.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgjAxQALgEAGgDQAGgFAEgJIACgHIgihOIAOAAIAaBBIAbhBIANAAIglBWQgFAOgJAHQgJAGgNADg");
	this.shape_34.setTransform(-41.4,-27.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_35.setTransform(-50.7,-29.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-59.3,-29.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_37.setTransform(-72.5,-29.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgkAxQAMgEAFgDQAGgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgIAGgOADg");
	this.shape_38.setTransform(-81.3,-27.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_39.setTransform(-90.6,-29.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_40.setTransform(-100.1,-30.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_41.setTransform(98.6,-28.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgMAAIgehPIANAAIAXBAIAXhAIALAAIAXBAIAYhAIAMAAIgdBPg");
	this.shape_42.setTransform(70.4,-28.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_43.setTransform(58.4,-28.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_44.setTransform(30.1,-28.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_45.setTransform(17.1,-26.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_46.setTransform(-0.5,-30);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgGANQAGgHAAgGIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_47.setTransform(-16.9,-24);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_48.setTransform(-22.9,-26.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_49.setTransform(-41.9,-28.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgIA7IAAhFIgQAAIAAgKIAQAAIAAgNQAAgMAGgHQAFgGAMAAQAFAAAFABIAAALIgIgBQgGAAgEAEQgDADAAAJIAAALIATAAIAAAKIgTAAIAABFg");
	this.shape_50.setTransform(-61.2,-30.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_51.setTransform(-72.3,-26.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_52.setTransform(-83.6,-28.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(-99.1,-28.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_54.setTransform(-107.7,-28.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(-116.6,-28.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_56.setTransform(-123,-30);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_57.setTransform(-131.2,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:8.2,y:-29.2}},{t:this.shape_28,p:{x:14.5,y:-31}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:68.4,y:-29.2}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-98.1,y:-5.3}},{t:this.shape_16,p:{x:-86.7,y:-5.3}},{t:this.shape_15},{t:this.shape_14,p:{x:-72.2,y:-5.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:-32.7,y:-5.3}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-1.8,y:-6.4}},{t:this.shape_6,p:{x:5.5,y:-5.3}},{t:this.shape_5,p:{x:13.2,y:-5.3}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:36.7,y:-6.9}},{t:this.shape_1},{t:this.shape,p:{x:48.7,y:-6.9}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_10,p:{x:-53.9,y:-28.2}},{t:this.shape_49},{t:this.shape_2,p:{x:-32.9,y:-29.9}},{t:this.shape_28,p:{x:-29.1,y:-30}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_7,p:{x:-8.1,y:-29.4}},{t:this.shape_46},{t:this.shape_29,p:{x:8.5,y:-28.2}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_5,p:{x:38.6,y:-28.3}},{t:this.shape_16,p:{x:45.3,y:-28.2}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_14,p:{x:81.7,y:-28.2}},{t:this.shape_22,p:{x:90,y:-28.2}},{t:this.shape_41},{t:this.shape_17,p:{x:110.1,y:-28.3}},{t:this.shape_6,p:{x:121.6,y:-28.2}},{t:this.shape,p:{x:127.7,y:-29.8}}]},1).wait(1));

	// outlineshade
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_58.setTransform(-12.7,98.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_59.setTransform(0,22.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_60.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).wait(1));

	// white
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_61.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.graphics.f("#000066").s().p("AgiA7QgPgJgJgPQgJgRAAgSQAAgSAJgQQAJgPAPgKQARgIARgBQATABAPAIQAQAKAKAPQAJAQAAASQAAASgJARQgKAPgQAJQgPAJgTAAQgRAAgRgJgAgVg0QgKAFgIAHQgIAIgFAKQgEALAAALQAAALAEALQAFALAIAHQAIAIAKAFQAKAEALAAQAMAAALgEQAKgFAIgIQAHgHAEgLQAFgLAAgLQAAgLgFgLQgEgKgHgIQgIgHgKgFQgLgFgMAAQgLAAgKAFgAgUAiQgJgIgCgKQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAgBIADgCQABgBAAAAQABAAAAAAQABAAAAABQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAABABAAQABAIAHAEQAFAEAHAAQAHAAAHgEQAFgEADgIQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAIAFAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAABQgEAKgIAIQgJAGgMAAQgKAAgKgGgAAPgOQgDgDAAgFQAAgFADgDQADgDAFgBQAFABADADQADADAAAFQAAAFgDADQgDAEgFAAQgFAAgDgEgAgegOQgDgDAAgFQAAgFADgDQAEgDAEgBQAFABAEADQACADAAAFQAAAFgCADQgEAEgFAAQgEAAgEgEg");
	this.shape.setTransform(-17.7,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgHA5IAAgRIAPAAIAAARgAgDAbIgEhTIAPAAIgEBTg");
	this.shape_1.setTransform(-30.7,-6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(-37.5,-5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_3.setTransform(-44.5,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(-52.9,-5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_5.setTransform(-62.1,-7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(-71.9,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgoA5IAAgKIBAhcIhAAAIAAgLIBPAAIAAAKIhABcIBCAAIAAALg");
	this.shape_7.setTransform(-81.2,-6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_8.setTransform(-94.8,-5.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_9.setTransform(-104.5,-3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_10.setTransform(-112.5,-7.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_11.setTransform(-119.2,-6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_12.setTransform(-126.5,-6.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGANQAGgHAAgGIgHAAIAAgQIAPAAIAAALQAAAGgCAFQgCAGgEAGg");
	this.shape_13.setTransform(130.8,-25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(123.9,-29.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBWQgFAOgJAHQgJAGgNADg");
	this.shape_15.setTransform(115.1,-27.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(105.8,-29.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_17.setTransform(97.2,-29.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_18.setTransform(84.5,-29.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_19.setTransform(77.5,-29.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_20.setTransform(69.4,-29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgdAzIADgLQAHAFAHACQAHACAHAAQAMAAAGgHQAGgGAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_21.setTransform(59.7,-27.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_22.setTransform(47.5,-31);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_23.setTransform(38.1,-29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEAAAFgBIAAALQgGACgFgBQgMAAgFgGg");
	this.shape_24.setTransform(30.6,-30.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(23.1,-29.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_26.setTransform(13.9,-29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_27.setTransform(0.4,-29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_28.setTransform(-6.6,-29.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_29.setTransform(-14.6,-29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgVAzQgMgHgHgNQgGgNAAgSQAAgRAGgNQAHgNAMgHQAMgHAQAAQALAAAKADQAKAEAHAHIgFAKQgIgHgHgDQgJgDgJAAQgTAAgKAMQgLAMAAAWQAAAXALAMQALAMATAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgLACQgLACgKAAQgQAAgNgHg");
	this.shape_30.setTransform(-25.2,-30.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_31.setTransform(-37,-30.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_32.setTransform(-41.3,-29.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_33.setTransform(-49.8,-29.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AAiA5IAAg0IhDAAIAAA0IgNAAIAAhxIANAAIAAAzIBDAAIAAgzIANAAIAABxg");
	this.shape_34.setTransform(-60.5,-30.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgUIAMgGIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEAAAEgBIAAALQgEACgHgBQgLAAgGgGg");
	this.shape_35.setTransform(-73.7,-30.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_36.setTransform(-81.4,-29.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_37.setTransform(-93.1,-29.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_38.setTransform(-105.1,-29.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_39.setTransform(-111.5,-31);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_40.setTransform(-117.8,-29.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_41.setTransform(-127.1,-30.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AghA8QgQgKgKgQQgJgQAAgSQAAgSAJgPQAKgRAQgIQAQgKARABQATgBAQAKQAQAIAIARQAJAPAAASQAAASgJAQQgIAQgQAKQgQAJgTgBQgRABgQgJgAgVg0QgKAFgJAIQgHAHgEALQgFALAAAKQAAAMAFAKQAEAKAHAJQAJAHAKAEQALAFAKAAQALAAALgFQALgEAHgHQAIgJAFgKQAEgKAAgMQAAgKgEgLQgFgLgIgHQgHgIgLgFQgLgEgLgBQgKABgLAEgAgUAhQgIgHgEgKQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIADgEQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAABAAABQACAGAGAFQAHAFAGAAQAIAAAFgFQAGgFADgGQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBAAAAIAFgBQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgDAKgKAHQgJAHgLAAQgKAAgKgHgAAPgOQgDgDgBgFQABgFADgDQADgDAFAAQAEAAAEADQAEADAAAFQAAAFgEADQgEADgEAAQgFAAgDgDgAgegOQgDgDAAgFQAAgFADgDQADgDAFAAQAFAAADADQADADAAAFQAAAFgDADQgDADgFAAQgFAAgDgDg");
	this.shape_42.setTransform(-25,-5.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgHA5IAAgQIAPAAIAAAQgAgDAbIgEhTIAPAAIgEBTg");
	this.shape_43.setTransform(-37.9,-5.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_44.setTransform(-69.4,-6.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgoA5IAAgKIBAhcIhAAAIAAgLIBPAAIAAAJIhABdIBCAAIAAALg");
	this.shape_45.setTransform(-88.4,-5.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgdAzIADgLQAHAEAHADQAHABAHABQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_46.setTransform(-111.8,-2.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgGANQAGgHAAgGIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_47.setTransform(127.4,-24);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_48.setTransform(106.4,-30);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_49.setTransform(97.9,-28.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(88.8,-28.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_51.setTransform(79.9,-28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_52.setTransform(72.6,-29.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_53.setTransform(61.5,-26.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_54.setTransform(34.4,-28.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgFABQgMgBgGgGg");
	this.shape_55.setTransform(26.9,-29.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_56.setTransform(15.8,-26.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgvA5IAAhxIAnAAQAaAAAPAPQAPAOAAAbQAAAbgPAPQgPAPgaAAgAgiAuIAZAAQAVAAALgLQALgMAAgXQAAgsgrAAIgZAAg");
	this.shape_57.setTransform(-3.9,-29.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAGg");
	this.shape_58.setTransform(-24.1,-33.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_59.setTransform(-36,-28.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_60.setTransform(-53.5,-28.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_61.setTransform(-62.7,-28.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_62.setTransform(-71.6,-28.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_63.setTransform(-80.8,-29.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_64.setTransform(-94,-26.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_65.setTransform(-102.9,-26.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_66.setTransform(-112.5,-26.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_67.setTransform(-122.5,-28.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AAiA5IAAg1IhDAAIAAA1IgNAAIAAhxIANAAIAAAyIBDAAIAAgyIANAAIAABxg");
	this.shape_68.setTransform(-133.2,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40,p:{x:-117.8,y:-29.2}},{t:this.shape_39},{t:this.shape_38,p:{x:-105.1,y:-29.2}},{t:this.shape_37,p:{x:-93.1,y:-29.2}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-6.6,y:-29.2}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{x:38.1,y:-29.1}},{t:this.shape_22,p:{x:47.5,y:-31}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19,p:{x:77.5,y:-29.2}},{t:this.shape_18},{t:this.shape_17,p:{x:97.2,y:-29.2}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:123.9,y:-29.2}},{t:this.shape_13},{t:this.shape_12,p:{x:-126.5,y:-6.9}},{t:this.shape_11,p:{x:-119.2,y:-6.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-71.9,y:-5.3}},{t:this.shape_5,p:{x:-62.1,y:-7.1}},{t:this.shape_4,p:{x:-52.9,y:-5.3}},{t:this.shape_3,p:{x:-44.5,y:-5.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_5,p:{x:-45,y:-30}},{t:this.shape_59},{t:this.shape_28,p:{x:-28.3,y:-28.3}},{t:this.shape_58},{t:this.shape_17,p:{x:-18.3,y:-28.2}},{t:this.shape_57},{t:this.shape_14,p:{x:6.5,y:-28.2}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_37,p:{x:50.1,y:-28.3}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_40,p:{x:115.4,y:-28.2}},{t:this.shape_19,p:{x:123.2,y:-28.3}},{t:this.shape_47},{t:this.shape_12,p:{x:-133.8,y:-5.9}},{t:this.shape_11,p:{x:-126.5,y:-6}},{t:this.shape_22,p:{x:-119.8,y:-6.1}},{t:this.shape_46},{t:this.shape_23,p:{x:-102.1,y:-4.2}},{t:this.shape_45},{t:this.shape_4,p:{x:-79.1,y:-4.3}},{t:this.shape_44},{t:this.shape_6,p:{x:-60.2,y:-4.3}},{t:this.shape_3,p:{x:-51.7,y:-4.4}},{t:this.shape_38,p:{x:-44.8,y:-4.3}},{t:this.shape_43},{t:this.shape_42}]},1).wait(1));

	// outlineshade
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_69.setTransform(-12.7,98.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_70.setTransform(0,22.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_71.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).wait(1));

	// white
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_72.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAcIAAgEQAAgKADgIIAKgOIAIgMQACgFAAgGQAAgHgEgDQgFgFgIAAQgLAAgLAHIAAgMIALgEIAMgCQANAAAIAIQAJAGAAAMQAAAFgCAFIgFAJIgIAKQgHAGgDAHQgDAGgBAIIAAADg");
	this.shape.setTransform(97.9,-27.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_1.setTransform(89.1,-26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(79.5,-26.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_3.setTransform(71.5,-28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgFA7IAAh1IAMAAIAAB1g");
	this.shape_4.setTransform(60.6,-28);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_5.setTransform(54.3,-26.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_6.setTransform(42.9,-26.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_7.setTransform(31.3,-26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_8.setTransform(21.4,-27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_9.setTransform(9.7,-23);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(2.9,-26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgkAwQAMgDAFgDQAHgFADgJIAEgHIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_11.setTransform(-5.9,-24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_12.setTransform(-15.2,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_13.setTransform(-23.8,-26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(-37,-24.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_15.setTransform(-46.3,-26.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_16.setTransform(-52.8,-27.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_17.setTransform(-58.5,-26.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_18.setTransform(-67.3,-26.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_19.setTransform(-75.3,-28);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_20.setTransform(-86.2,-27.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(-92.9,-26.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_22.setTransform(-99.6,-27.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAbIAAgDQAAgKADgIQAEgGAGgIIAIgMQACgEAAgGQAAgIgEgDQgFgFgIAAQgLABgLAGIAAgMIALgEQAGgCAGABQANgBAIAIQAJAGAAAMQAAAGgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAACg");
	this.shape_23.setTransform(106.2,-29.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_24.setTransform(97.9,-26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_25.setTransform(91.7,-30);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgFAoIgihPIANAAIAaBBIAbhBIAOAAIgjBPg");
	this.shape_26.setTransform(76.9,-28.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_27.setTransform(61.6,-30);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_28.setTransform(51.1,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_29.setTransform(42.1,-30);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_30.setTransform(22.4,-29.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAGg");
	this.shape_31.setTransform(17.8,-33.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_32.setTransform(2.6,-28.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgFABgGABQgLgBgGgGg");
	this.shape_33.setTransform(-16.3,-29.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgkAwQAMgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_34.setTransform(-44.9,-26.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_35.setTransform(-71.5,-28.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-87.4,-28.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_37.setTransform(-99.8,-30);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgGA5IAAhlIgnAAIAAgMIBbAAIAAAMIgnAAIAABlg");
	this.shape_38.setTransform(-109.3,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{x:-99.6,y:-27.8}},{t:this.shape_21},{t:this.shape_20,p:{x:-86.2,y:-27.9}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:-58.5,y:-26.2}},{t:this.shape_16,p:{x:-52.8,y:-27.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-23.8,y:-26.2}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:9.7,y:-23}},{t:this.shape_8},{t:this.shape_7,p:{x:31.3,y:-26.2}},{t:this.shape_6,p:{x:42.9,y:-26.3}},{t:this.shape_5,p:{x:54.3,y:-26.2}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2,p:{x:79.5,y:-26.2}},{t:this.shape_1,p:{x:89.1,y:-26.3}},{t:this.shape}]}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_20,p:{x:-93.2,y:-29.9}},{t:this.shape_36},{t:this.shape_16,p:{x:-77.3,y:-29.9}},{t:this.shape_35},{t:this.shape_6,p:{x:-56.3,y:-28.3}},{t:this.shape_34},{t:this.shape_17,p:{x:-32.4,y:-28.2}},{t:this.shape_2,p:{x:-24,y:-28.2}},{t:this.shape_33},{t:this.shape_9,p:{x:-11.6,y:-25}},{t:this.shape_22,p:{x:-3.4,y:-29.8}},{t:this.shape_32},{t:this.shape_1,p:{x:11.2,y:-28.3}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_13,p:{x:33.4,y:-28.2}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_7,p:{x:68,y:-28.2}},{t:this.shape_26},{t:this.shape_5,p:{x:85.5,y:-28.2}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

	// Layer_2
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(51.1,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// outlineshade
	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_39.setTransform(-12.7,98.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_40.setTransform(0,22.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_41.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).wait(1));

	// white
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_42.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.setTransform(83.7,-23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_1.setTransform(76.8,-26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgkAwQAMgDAGgDQAFgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_2.setTransform(68,-24.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_3.setTransform(58.7,-26.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_4.setTransform(50.1,-26.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_5.setTransform(37.4,-26.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_6.setTransform(28.2,-28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_7.setTransform(21.3,-27.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHADAHAAQAMgBAGgGQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAFADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAHQAHAHALAAQALAAAHgHQAGgHAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_8.setTransform(10.1,-24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_9.setTransform(0.8,-26.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_10.setTransform(-8.9,-26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgjAwQALgDAGgDQAFgFAFgJIACgHIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_11.setTransform(-17.7,-24.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_12.setTransform(-27,-26.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_13.setTransform(-35.6,-26.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_14.setTransform(-48.7,-26.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgkAwQAMgDAGgDQAFgFAEgJIADgHIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_15.setTransform(-57.5,-24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_16.setTransform(-66.8,-26.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgqAsIAFgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAKAEAHAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAHAEQAGAEANADIAXAGQAIADAFAGQAHAGAAAKQgBAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgRgOg");
	this.shape_17.setTransform(-76.3,-27.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_18.setTransform(65.4,-28.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_19.setTransform(57.6,-28.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_20.setTransform(48.6,-30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgFABgGABQgMgBgFgGg");
	this.shape_21.setTransform(41,-29.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(33.7,-28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_23.setTransform(22.1,-28.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_24.setTransform(6.7,-26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_25.setTransform(-4.7,-28.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(-20.2,-28.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgFAoIgjhPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_27.setTransform(-28.8,-28.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(-37.6,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_29.setTransform(-44.1,-30);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgFA5IAAhxIALAAIAABxg");
	this.shape_30.setTransform(-52.3,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:83.7,y:-23}}]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape,p:{x:69.6,y:-25}}]},1).wait(1));

	// outlineshade
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_31.setTransform(-12.7,98.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_32.setTransform(0,22.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_33.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

	// white
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_34.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.setTransform(111.9,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AATA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAkgkIARAAIgnAmIAqAqg");
	this.shape_1.setTransform(106.7,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_2.setTransform(97.3,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIArAqg");
	this.shape_3.setTransform(89.3,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_4.setTransform(79.9,19.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQASAAAKAJQAKAIAAAPQAAAPgKAJQgKAHgSAAIggAAIAAAygAgcgDIAfAAQANAAAGgFQAHgGgBgKQABgKgHgGQgGgFgNAAIgfAAg");
	this.shape_5.setTransform(70.5,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHABQAMgBAGgFQAGgHAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(55.6,21.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(46.3,19.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_8.setTransform(37.1,19.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_9.setTransform(27.8,21.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_10.setTransform(15.8,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_11.setTransform(3.8,19.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AAcA5Ig7g2IAAA2IgMAAIAAhxIAMAAIAAA0IA4g0IAQAAIg6A4IA+A5g");
	this.shape_12.setTransform(-5.1,18);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_13.setTransform(-17,23.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_14.setTransform(-23.5,19.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AASA7IgognIAAAnIgNAAIAAh1IANAAIAABJIAmgkIAQAAIgoAmIAsAqg");
	this.shape_15.setTransform(-31.5,17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_16.setTransform(-38.2,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_17.setTransform(-44.8,17.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_18.setTransform(-54.9,18);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_19.setTransform(-69.4,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_20.setTransform(-79,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_21.setTransform(-85.5,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_22.setTransform(-92.4,19.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgTBGIAAgLIAMABQAHABADgFQAEgFAAgLIAAhvIANAAIAABvQAAARgGAIQgGAHgNAAIgOgCg");
	this.shape_23.setTransform(-100.4,19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_24.setTransform(-108.3,23.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgKQAAgWgaAAIgNAAIAAgKIALAAQAMABAGgGQAHgFAAgLQAAgJgGgFQgFgFgKAAQgQAAgQANIgEgKQAHgHAJgDQAKgEALAAQAPAAAJAHQAKAJAAANQgBAKgFAHQgEAHgJAEQALABAEAIQAGAHAAAKQAAAPgKAIQgLAJgQAAQgKAAgLgEg");
	this.shape_25.setTransform(-115.1,18);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgiA6IAAgKIAngsQAIgIAEgIQADgHAAgHQAAgKgFgEQgGgGgJAAQgQABgQANIgFgKQAHgHAKgEQAKgDAKgBQAPAAAJAJQAKAHAAAOQAAAKgFAJQgEAIgLAMIgfAjIA3AAIAAALg");
	this.shape_26.setTransform(-124.5,17.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_27.setTransform(-135.4,22.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_28.setTransform(-141.8,19.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AAjA5IhDhbIAABbIgNAAIAAhxIAKAAIBEBbIAAhbIANAAIAABxg");
	this.shape_29.setTransform(-152.4,18);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgHAnIAAgQIAPAAIAAAQgAgHgWIAAgQIAPAAIAAAQg");
	this.shape_30.setTransform(11.8,-4.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_31.setTransform(5.6,-4.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAlgkIAQAAIgoAmIAsAqg");
	this.shape_32.setTransform(-2.2,-6.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_33.setTransform(-16.2,-4.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_34.setTransform(-22.7,-6.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_35.setTransform(-26.5,-6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgqAsIAGgKQAIAHAJADQAJADAKAAQAOAAAHgGQAIgFAAgKQAAgFgDgEQgEgEgGgCIgQgEQgLgDgJgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAKgEQAJgEALAAQAMAAALADQAJAEAHAHIgEAKQgJgHgIgDQgIgDgKAAQgMAAgHAFQgIAGAAAKQAAAJAHAEQAGAEANADIAWAGQAJADAFAGQAGAGABAKQAAAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgQgOg");
	this.shape_36.setTransform(-33.3,-5.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_37.setTransform(-44.4,-1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_38.setTransform(-48.1,-6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_39.setTransform(-54.8,-4.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_40.setTransform(-61.3,-6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_41.setTransform(-74.5,-4.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_42.setTransform(-86.5,-4.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgGA7IAAh1IAMAAIAAB1g");
	this.shape_43.setTransform(-92.9,-6.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_44.setTransform(-99.9,-4.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_45.setTransform(-111.5,-4.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_46.setTransform(-127.7,-4.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_47.setTransform(-136.5,-2.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_48.setTransform(-145.8,-4.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_49.setTransform(-154.4,-4.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQAEgHAGgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_50.setTransform(167.7,-30);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgMAAQgKAAgHAIg");
	this.shape_51.setTransform(157.9,-28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_52.setTransform(146.3,-28.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_53.setTransform(134.7,-28.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_54.setTransform(127.7,-28.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_55.setTransform(118.2,-29.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_56.setTransform(111.2,-30);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_57.setTransform(100.6,-29.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_58.setTransform(93.6,-30);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_59.setTransform(84,-28.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQAMAAAAgQIAAhYIAOAAIAABZQgBANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_60.setTransform(76.6,-28.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_61.setTransform(69.6,-29.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_62.setTransform(65.3,-28.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_63.setTransform(56.8,-28.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAEgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_64.setTransform(47.6,-30);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_65.setTransform(34,-28.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_66.setTransform(24.3,-28.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAFgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_67.setTransform(16.9,-29.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_68.setTransform(9.5,-28.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_69.setTransform(0.4,-30);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_70.setTransform(-11.8,-28.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_71.setTransform(-23.8,-28.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_72.setTransform(-32.4,-28.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_73.setTransform(-44.5,-28.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_74.setTransform(-50.3,-29.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_75.setTransform(-54.1,-30);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_76.setTransform(-58.9,-28.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_77.setTransform(-64.9,-28.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_78.setTransform(-76.5,-28.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_79.setTransform(-92.7,-28.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHABAOQgBAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_80.setTransform(-102.3,-30);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_81.setTransform(-111.9,-28.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_82.setTransform(-125.7,-28.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_83.setTransform(-134.5,-26.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_84.setTransform(-143.8,-28.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADALAAQANAAAHgGQAIgFAAgKQAAgFgEgEQgDgEgGgCIgPgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAAKADQALAEAGAHIgEAKQgIgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAWAGQAJADAGAGQAFAGAAAKQABAKgGAHQgFAHgKAEQgJAEgNAAQgaAAgPgOg");
	this.shape_85.setTransform(-153.3,-29.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_86.setTransform(123.7,17.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgoA5IAAhxIAsAAQARAAALAJQAJAIABAPQgBAPgJAJQgLAHgRAAIggAAIAAAygAgcgDIAfAAQANAAAGgFQAHgGgBgKQABgKgHgGQgGgFgNAAIgfAAg");
	this.shape_87.setTransform(87.5,18);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AAcA5Ig7g2IAAA2IgMAAIAAhxIAMAAIAAA0IA3g0IARAAIg6A4IA+A5g");
	this.shape_88.setTransform(11.9,18);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_89.setTransform(-14.5,17.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_90.setTransform(-27.8,17.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgFQAGgGAAgKQAAgWgaAAIgMAAIAAgKIAKAAQALABAHgGQAHgFAAgLQAAgJgGgFQgFgFgKAAQgQAAgQANIgFgKQAIgHAJgDQALgEAKAAQAPAAAJAHQAKAJgBANQAAAKgEAHQgFAHgJAEQALABAEAIQAGAHAAAKQAAAPgKAIQgKAJgRAAQgLAAgKgEg");
	this.shape_91.setTransform(-98.1,18);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_92.setTransform(12.6,-4.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJADAEQAEADAHAAQAEABAFgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_93.setTransform(5.2,-5.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_94.setTransform(-20.5,-4.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_95.setTransform(-29.3,-4.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_96.setTransform(-42.4,-4.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_97.setTransform(-65.4,-4.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_98.setTransform(-75.4,-5.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_99.setTransform(-91.7,-5.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgFgFgJAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_100.setTransform(-99.1,-6.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000066").s().p("AgdAzIADgLQAHAEAHADQAHABAHABQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_101.setTransform(-108.9,-2.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_102.setTransform(-131.2,-4.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAEABAFgCIAAALQgGABgFAAQgMABgFgHg");
	this.shape_103.setTransform(-138.6,-5.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_104.setTransform(148.6,-28.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_105.setTransform(122.4,-28.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_106.setTransform(100.1,-26.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_107.setTransform(74.7,-29.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgJAHgNACg");
	this.shape_108.setTransform(53.9,-26.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_109.setTransform(46.8,-29.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_110.setTransform(24,-26.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_111.setTransform(10.6,-26.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgLAAQgLAAgHAIg");
	this.shape_112.setTransform(1.3,-28.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_113.setTransform(-17.5,-30);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_114.setTransform(-25.1,-29.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_115.setTransform(-30.2,-28.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_116.setTransform(-70.1,-26.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000066").s().p("AgGAoIgihPIAOAAIAaBBIAchBIAMAAIgiBPg");
	this.shape_117.setTransform(-92,-28.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000066").s().p("AAWA7IAAgyQAAgKgFgGQgFgFgJAAQgKAAgHAHQgGAGAAAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAHgEQAIgEAIAAQAcAAAAAfIAAAzg");
	this.shape_118.setTransform(-110.5,-30);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000066").s().p("AgGANQAGgIAAgFIgHAAIAAgRIAPAAIAAAMQAAAGgCAGQgCAFgEAGg");
	this.shape_119.setTransform(-135.4,-33.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000066").s().p("AgGA5IAAhxIAMAAIAABxg");
	this.shape_120.setTransform(-139.3,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80,p:{x:-102.3}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:-64.9}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:0.4}},{t:this.shape_68,p:{x:9.5,y:-28.1}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:34}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:65.3}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59,p:{x:84}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54,p:{x:127.7,y:-28.3}},{t:this.shape_53,p:{x:134.7}},{t:this.shape_52,p:{x:146.3}},{t:this.shape_51},{t:this.shape_50,p:{x:167.7}},{t:this.shape_49,p:{x:-154.4,y:-4.3}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-127.7,y:-4.3}},{t:this.shape_45,p:{x:-111.5,y:-4.4}},{t:this.shape_44,p:{x:-99.9,y:-4.3}},{t:this.shape_43},{t:this.shape_42,p:{x:-86.5,y:-4.3}},{t:this.shape_41,p:{x:-74.5}},{t:this.shape_40,p:{x:-61.3,y:-6}},{t:this.shape_39,p:{x:-54.8}},{t:this.shape_38,p:{x:-48.1,y:-6}},{t:this.shape_37,p:{x:-44.4}},{t:this.shape_36},{t:this.shape_35,p:{x:-26.5}},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:5.6}},{t:this.shape_30,p:{x:11.8}},{t:this.shape_29,p:{x:-152.4}},{t:this.shape_28,p:{x:-141.8}},{t:this.shape_27,p:{x:-135.4}},{t:this.shape_26,p:{x:-124.5}},{t:this.shape_25},{t:this.shape_24,p:{x:-108.3}},{t:this.shape_23,p:{x:-100.4}},{t:this.shape_22},{t:this.shape_21,p:{x:-85.5}},{t:this.shape_20,p:{x:-79}},{t:this.shape_19,p:{x:-69.4}},{t:this.shape_18,p:{x:-54.9}},{t:this.shape_17},{t:this.shape_16,p:{x:-38.2}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-17}},{t:this.shape_12},{t:this.shape_11,p:{x:3.8}},{t:this.shape_10,p:{x:15.8}},{t:this.shape_9,p:{x:27.8}},{t:this.shape_8,p:{x:37.1}},{t:this.shape_7,p:{x:46.3}},{t:this.shape_6,p:{x:55.6}},{t:this.shape_5},{t:this.shape_4,p:{x:79.9}},{t:this.shape_3,p:{x:89.3}},{t:this.shape_2,p:{x:97.3}},{t:this.shape_1},{t:this.shape,p:{x:111.9}}]}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_52,p:{x:-126.5}},{t:this.shape_118},{t:this.shape_77,p:{x:-101.3}},{t:this.shape_117},{t:this.shape_40,p:{x:-85.9,y:-29.9}},{t:this.shape_65,p:{x:-79.4}},{t:this.shape_116},{t:this.shape_44,p:{x:-56.2,y:-28.2}},{t:this.shape_69,p:{x:-41.9}},{t:this.shape_38,p:{x:-35.5,y:-29.9}},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_80,p:{x:-8.3}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_42,p:{x:33.2,y:-28.2}},{t:this.shape_62,p:{x:41.7}},{t:this.shape_109},{t:this.shape_108},{t:this.shape_59,p:{x:66.9}},{t:this.shape_107},{t:this.shape_45,p:{x:88.7,y:-28.3}},{t:this.shape_106},{t:this.shape_50,p:{x:113.2}},{t:this.shape_105},{t:this.shape_53,p:{x:131.6}},{t:this.shape_49,p:{x:140.2,y:-28.2}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_39,p:{x:-122}},{t:this.shape_35,p:{x:-115.3}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_37,p:{x:-87}},{t:this.shape_98},{t:this.shape_97},{t:this.shape_41,p:{x:-53.9}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_31,p:{x:-11.9}},{t:this.shape_54,p:{x:-4.1,y:-4.4}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_30,p:{x:19}},{t:this.shape_29,p:{x:-135.4}},{t:this.shape_28,p:{x:-124.8}},{t:this.shape_27,p:{x:-118.4}},{t:this.shape_26,p:{x:-107.5}},{t:this.shape_91},{t:this.shape_24,p:{x:-91.3}},{t:this.shape_23,p:{x:-83.4}},{t:this.shape_46,p:{x:-75.4,y:19.6}},{t:this.shape_21,p:{x:-68.5}},{t:this.shape_20,p:{x:-62}},{t:this.shape_19,p:{x:-52.4}},{t:this.shape_18,p:{x:-37.9}},{t:this.shape_90},{t:this.shape_16,p:{x:-21.2}},{t:this.shape_89},{t:this.shape_68,p:{x:-6.5,y:19.7}},{t:this.shape_13,p:{x:0}},{t:this.shape_88},{t:this.shape_11,p:{x:20.8}},{t:this.shape_10,p:{x:32.8}},{t:this.shape_9,p:{x:44.8}},{t:this.shape_8,p:{x:54.1}},{t:this.shape_7,p:{x:63.3}},{t:this.shape_6,p:{x:72.6}},{t:this.shape_87},{t:this.shape_4,p:{x:96.9}},{t:this.shape_3,p:{x:106.3}},{t:this.shape_2,p:{x:114.3}},{t:this.shape_86},{t:this.shape,p:{x:128.9}}]},1).wait(1));

	// outlineshade
	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_121.setTransform(-12.7,98.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_122.setTransform(0,22.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_123.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).wait(1));

	// white
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_124.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_124).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.graphics.f("#000066").s().p("AgHA5IAAgQIAPAAIAAAQgAgDAbIgEhTIAPAAIgEBTg");
	this.shape.setTransform(-15.1,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_1.setTransform(-22,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_2.setTransform(-28.4,-6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgUA2QgIgFgFgKQgEgJAAgNQAAgMAEgJQAFgJAIgFQAJgFAKAAQAIAAAIAEQAGAEAEAHIAAgyIANAAIAAB0IgNAAIAAgOQgEAHgGAEQgIAEgIAAQgKAAgJgFgAgRgEQgHAHAAAOQAAAPAHAIQAGAJALAAQAMAAAGgIQAHgJAAgOQAAgPgHgHQgGgIgMAAQgLAAgGAIg");
	this.shape_3.setTransform(-35.4,-6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_4.setTransform(-46,-6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgOAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAFgJAJgFQAJgGALAAQAIAAAHADQAIADAFAFIgEAJQgGgEgGgDQgGgCgGAAQgLAAgHAIQgHAJAAANQAAAPAHAIQAHAIALAAQAGAAAGgCQAGgCAGgFIAEAJQgFAFgIADQgIADgIAAQgLAAgIgFg");
	this.shape_5.setTransform(-51.7,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_6.setTransform(-60.6,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_7.setTransform(-69.5,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_8.setTransform(-78.4,-6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_9.setTransform(-92.7,-4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgkAxQAMgEAFgDQAGgFAEgJIADgHIghhOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgIAGgOADg");
	this.shape_10.setTransform(-101.5,-2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_11.setTransform(-110.8,-4.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgpAsIAEgKQAJAHAJADQAJADAKAAQAOAAAIgGQAHgFAAgKQAAgFgEgEQgDgEgGgCIgQgEQgMgDgIgDQgJgDgFgGQgFgGAAgLQAAgJAFgIQAFgHAJgEQAKgEALAAQAMAAALADQAJAEAIAHIgGAKQgHgHgJgDQgIgDgKAAQgMAAgIAFQgHAGAAAKQAAAJAGAEQAHAEANADIAXAGQAIADAFAGQAHAGgBAKQAAAKgFAHQgFAHgJAEQgKAEgNAAQgZAAgQgOg");
	this.shape_12.setTransform(-120.3,-5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_13.setTransform(124,-25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_14.setTransform(117.5,-28.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_15.setTransform(107.8,-28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AASA7IgngnIAAAnIgOAAIAAh1IAOAAIAABJIAkgkIARAAIgoAmIArAqg");
	this.shape_16.setTransform(99.8,-30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_17.setTransform(93.1,-30);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_18.setTransform(86.9,-28.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_19.setTransform(79.1,-30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_20.setTransform(69.2,-26.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_21.setTransform(59.9,-28.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_22.setTransform(50.9,-28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQABANgHAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_23.setTransform(43.7,-28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_24.setTransform(38,-28.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_25.setTransform(29.1,-28.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_26.setTransform(17.6,-28.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAEAAAFgCIAAALQgGABgFABQgMgBgFgGg");
	this.shape_27.setTransform(3.6,-29.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(-4.2,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_29.setTransform(-13.8,-26.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_30.setTransform(-23.1,-28.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(-32.8,-28.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_32.setTransform(-41.4,-28.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_33.setTransform(-54.5,-28.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgjAwQALgCAFgFQAGgEAFgIIADgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_34.setTransform(-63.3,-26.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_35.setTransform(-72.6,-28.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_36.setTransform(-81.2,-28.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_37.setTransform(-94,-28.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_38.setTransform(-101,-28.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgHAEQgHAEgHAAQgPAAgGgIg");
	this.shape_39.setTransform(-109,-28.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AgVAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAQAAQALAAAKADQALAEAGAHIgEAKQgJgHgHgDQgIgDgKAAQgTAAgKAMQgLAMAAAWQAAAXALAMQALAMATAAQAOAAANgEIAAgjIgcAAIAAgKIAoAAIAAA0QgHAEgLACQgKACgLAAQgQAAgNgHg");
	this.shape_40.setTransform(-119.6,-29.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgHA5IAAgRIAPAAIAAARgAgDAbIgEhTIAPAAIgEBTg");
	this.shape_41.setTransform(137.2,-29.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_42.setTransform(116.2,-30);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAAEgCIAAALQgGABgGABQgLgBgGgGg");
	this.shape_43.setTransform(95.7,-29.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_44.setTransform(78.8,-30);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgFA5IAAhxIAMAAIAABxg");
	this.shape_45.setTransform(67.8,-29.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAGgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_46.setTransform(30.8,-26.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_47.setTransform(21.9,-28.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_48.setTransform(-19.7,-28.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_49.setTransform(-54.8,-28.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_50.setTransform(-71.5,-30);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_51.setTransform(-89.2,-28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgkAwQAMgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_52.setTransform(-116.5,-26.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AAqA5IAAhTIglBTIgIAAIgmhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_53.setTransform(-127.5,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38,p:{x:-101}},{t:this.shape_37},{t:this.shape_36,p:{x:-81.2}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-54.5}},{t:this.shape_32,p:{x:-41.4}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:3.6}},{t:this.shape_26},{t:this.shape_25,p:{x:29.1}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:50.9}},{t:this.shape_21,p:{x:59.9}},{t:this.shape_20,p:{x:69.2}},{t:this.shape_19},{t:this.shape_18,p:{x:86.9}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:117.5}},{t:this.shape_13,p:{x:124}},{t:this.shape_12},{t:this.shape_11,p:{x:-110.8,y:-4.3}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:-69.5,y:-4.3}},{t:this.shape_6,p:{x:-60.6,y:-4.4}},{t:this.shape_5,p:{x:-51.7,y:-4.3}},{t:this.shape_4,p:{x:-46,y:-6}},{t:this.shape_3},{t:this.shape_2,p:{x:-28.4,y:-6}},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_27,p:{x:-105.3}},{t:this.shape_25,p:{x:-98.1}},{t:this.shape_51},{t:this.shape_5,p:{x:-80,y:-28.2}},{t:this.shape_50},{t:this.shape_22,p:{x:-62.5}},{t:this.shape_49},{t:this.shape_4,p:{x:-46.3,y:-29.9}},{t:this.shape_36,p:{x:-40.5}},{t:this.shape_32,p:{x:-28.3}},{t:this.shape_48},{t:this.shape_33,p:{x:-6.4}},{t:this.shape_21,p:{x:3.3}},{t:this.shape_14,p:{x:12.6}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_2,p:{x:36.9,y:-29.9}},{t:this.shape_6,p:{x:43.4,y:-28.3}},{t:this.shape_20,p:{x:52.7}},{t:this.shape_13,p:{x:59.6}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_11,p:{x:88,y:-28.2}},{t:this.shape_43},{t:this.shape_18,p:{x:103}},{t:this.shape_42},{t:this.shape_7,p:{x:125.2,y:-28.2}},{t:this.shape_38,p:{x:133}},{t:this.shape_41}]},1).wait(1));

	// outlineshade
	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_54.setTransform(-12.7,98.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_55.setTransform(0,22.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_56.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]}).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).wait(1));

	// white
	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_57.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_57).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.graphics.f("#000066").s().p("AgHA5IAAgQIAPAAIAAAQgAgDAbIgEhTIAPAAIgEBTg");
	this.shape.setTransform(-35.2,-5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_1.setTransform(-41.7,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgDAvQgGgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgGABgGAAQgLABgGgHg");
	this.shape_2.setTransform(-49.2,-5.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_3.setTransform(-56.6,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_4.setTransform(-66.3,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIgBgPQABgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_5.setTransform(-75.4,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgdAzIADgLQAHAEAHADQAHABAHABQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_6.setTransform(-89.7,-2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_7.setTransform(-99,-4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_8.setTransform(-108.2,-4.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_9.setTransform(-114.7,-6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_10.setTransform(-121.2,-4.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABAEgCIAAALQgFABgGAAQgMABgFgHg");
	this.shape_11.setTransform(-128.6,-5.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGANQAGgHAAgGIgHAAIAAgRIAPAAIAAAMQAAAGgCAFQgCAGgEAFg");
	this.shape_12.setTransform(123.9,-24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_13.setTransform(117.1,-28.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_14.setTransform(108.3,-26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAIgGALAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_15.setTransform(99,-28.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_16.setTransform(90.4,-28.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_17.setTransform(77.5,-28.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAHAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgHAEQgHAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAHAIAKAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgKAAgHAIg");
	this.shape_18.setTransform(67.9,-28.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAlgkIARAAIgnAmIAqAqg");
	this.shape_19.setTransform(59.9,-30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWA7IAAgyQgBgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAEgHAHgEQAHgEAIAAQAdAAAAAfIAAAzg");
	this.shape_20.setTransform(50.4,-30);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_21.setTransform(40.7,-28.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_22.setTransform(32.1,-28.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_23.setTransform(23.5,-28.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_24.setTransform(14.7,-26.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_25.setTransform(5.7,-28.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_26.setTransform(-3.3,-28.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_27.setTransform(-14.7,-28.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_28.setTransform(-30.9,-28.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_29.setTransform(-39.7,-26.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_30.setTransform(-49,-28.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_31.setTransform(-57.6,-28.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_32.setTransform(-70.8,-28.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_33.setTransform(-80,-26.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_34.setTransform(-90,-28.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_35.setTransform(-99.1,-30);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_36.setTransform(-113,-28.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_37.setTransform(-122.1,-30);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_38.setTransform(-129.3,-29.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgHA5IAAgRIAPAAIAAARgAgDAbIgEhTIAPAAIgEBTg");
	this.shape_39.setTransform(155.7,-29.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAHgEQAHgEAHAAQAdAAABAfIAAAzg");
	this.shape_40.setTransform(127.1,-30);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_41.setTransform(113.9,-28.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_42.setTransform(96.5,-28.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_43.setTransform(87.6,-28.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_44.setTransform(81.4,-30);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_45.setTransform(74.8,-26.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_46.setTransform(57.6,-28.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_47.setTransform(29.9,-26.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_48.setTransform(14.1,-29.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_49.setTransform(7.1,-26.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_50.setTransform(-2.5,-26.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_51.setTransform(-34.5,-28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_52.setTransform(-41.2,-28.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_53.setTransform(-49.7,-28.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_54.setTransform(-69.3,-29.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_55.setTransform(-85.7,-28.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_56.setTransform(-92.4,-28.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_57.setTransform(-110.1,-26.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AApA5IAAhTIglBTIgIAAIglhTIABBTIgNAAIAAhxIALAAIAqBhIArhhIALAAIAABxg");
	this.shape_58.setTransform(-134.5,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37,p:{x:-122.1}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-80}},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-14.7}},{t:this.shape_26,p:{x:-3.3}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:32.1}},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:67.9}},{t:this.shape_17},{t:this.shape_16,p:{x:90.4}},{t:this.shape_15},{t:this.shape_14,p:{x:108.3}},{t:this.shape_13},{t:this.shape_12,p:{x:123.9}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9,p:{x:-114.7,y:-6.1}},{t:this.shape_8},{t:this.shape_7,p:{x:-99,y:-4.4}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:-56.6,y:-4.4}},{t:this.shape_2},{t:this.shape_1,p:{x:-41.7,y:-4.2}},{t:this.shape}]}).to({state:[{t:this.shape_58},{t:this.shape_14,p:{x:-123.5}},{t:this.shape_57},{t:this.shape_18,p:{x:-100.9}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_7,p:{x:-76.7,y:-28.3}},{t:this.shape_54},{t:this.shape_22,p:{x:-62.5}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_37,p:{x:-20.9}},{t:this.shape_1,p:{x:-11.7,y:-28.1}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_3,p:{x:20.6,y:-28.3}},{t:this.shape_47},{t:this.shape_27,p:{x:46.2}},{t:this.shape_46},{t:this.shape_12,p:{x:63.8}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_16,p:{x:105.5}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_26,p:{x:136.1}},{t:this.shape_9,p:{x:142.4,y:-30}},{t:this.shape_33,p:{x:149.2}},{t:this.shape_39}]},1).wait(1));

	// outlineshade
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_59.setTransform(-12.7,98.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_60.setTransform(0,22.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_61.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).wait(1));

	// white
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_62.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_62).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape.setTransform(165.9,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000066").s().p("AgWA2QgKgDgHgHIAFgKQAIAHAIADQAHADAIAAQANAAAIgNQAIgNAAgXIAAgCQgDAIgIAFQgJAFgKAAQgKAAgIgEQgIgFgEgHQgFgIAAgLQAAgKAFgJQAFgIAIgFQAIgEALAAQATAAAMAOQALAOAAAbQAAAcgMAQQgLAQgUAAQgKAAgJgEgAgTgnQgHAHAAALQAAALAHAHQAGAGAMAAQAKAAAHgGQAHgHAAgLQAAgLgHgHQgHgHgLAAQgLAAgGAHg");
	this.shape_1.setTransform(159.2,-5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000066").s().p("AgdAyQgLgJAAgOQAAgLAGgHQAHgIALgCQgKgCgGgIQgFgHAAgJQAAgJAFgHQAEgGAJgFQAJgDAKAAQALAAAJADQAJAFAEAGQAFAHABAJQgBAJgFAHQgGAIgKACQAMACAFAIQAHAHAAALQAAAOgLAJQgMAIgSAAQgSAAgLgIgAgUALQgHAGAAAJQAAALAHAFQAIAFAMAAQANAAAIgFQAHgFAAgLQAAgJgIgGQgIgGgMgBQgLABgJAGgAgSgpQgGAGAAAJQAAAJAGAGQAIAGAKABQAMgBAGgGQAHgGAAgJQAAgJgHgGQgGgFgMgBQgLABgHAFg");
	this.shape_2.setTransform(149.7,-5.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000066").s().p("AgdA5IA0hmIg8AAIAAgLIBLAAIAAAKIg1Bng");
	this.shape_3.setTransform(140.1,-5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000066").s().p("AgcAsQgLgPAAgaQAAgTAGgNQAFgOAJgHQAKgHANAAQAKAAAJADQAJAEAIAHIgGAKQgHgHgHgDQgIgDgIAAQgNAAgJANQgHANAAAXIAAACQADgIAJgFQAHgGAKAAQALAAAIAFQAIAEAEAIQAFAIAAAKQAAALgFAIQgEAJgJAEQgIAFgLAAQgTAAgMgOgAgPADQgHAHAAAMQAAALAHAHQAHAHALAAQALAAAGgHQAHgHAAgLQAAgMgHgHQgGgGgLAAQgLAAgHAGg");
	this.shape_4.setTransform(130.5,-5.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000066").s().p("AALA5IAAgZIgzAAIAAgJIA1hPIALAAIAABOIARAAIAAAKIgRAAIAAAZgAgbAWIAmAAIAAg3g");
	this.shape_5.setTransform(121,-5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000066").s().p("AgUA2QgLgEgGgGIAFgKQAPANARgBQALAAAHgGQAHgHAAgMQAAgLgHgHQgHgGgLAAQgPAAgKAMIgJAAIAAhBIBDAAIAAALIg2AAIAAAoQAKgJAOAAQAKAAAIAFQAIAEAEAHQAFAJAAAKQAAALgFAIQgFAJgIAEQgJAFgLgBQgKABgKgEg");
	this.shape_6.setTransform(111.5,-5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000066").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQANAAAFgGQAHgFAAgLQAAgUgaAAIgMAAIAAgKIAKAAQALAAAHgGQAHgFAAgLQAAgJgGgFQgFgFgKAAQgPAAgQANIgGgKQAHgGAKgFQALgDAJAAQAQAAAJAIQAJAHAAAOQAAAJgEAIQgGAHgIADQAKACAGAHQAFAIAAAKQAAAPgLAJQgJAIgSAAQgJAAgLgEg");
	this.shape_7.setTransform(101.5,-5.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000066").s().p("AgWAGIAAgLIAtAAIAAALg");
	this.shape_8.setTransform(93.4,-4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000066").s().p("AgiA5IAAgKIAngsQAIgHAEgIQADgHAAgHQAAgJgFgGQgGgEgJAAQgQAAgQAMIgFgKQAHgGAKgEQAKgEAKAAQAPABAJAHQAKAJAAANQAAAKgFAJQgEAIgLALIgfAjIA3AAIAAALg");
	this.shape_9.setTransform(85.2,-6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000066").s().p("AgfA5IAAgLIAZAAIAAhVIgXAPIAAgOIAdgSIAHAAIAABmIAZAAIAAALg");
	this.shape_10.setTransform(76,-5.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000066").s().p("AgcArQgLgPAAgcQAAgcALgPQAJgOATAAQAUAAAJAOQALAPAAAcQAAAcgLAPQgJAPgUAAQgTAAgJgPgAgTgjQgGAMAAAXQAAAYAGALQAHAMAMAAQANAAAHgLQAGgMABgYQgBgXgGgMQgGgLgOAAQgMAAgHALg");
	this.shape_11.setTransform(66,-5.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_12.setTransform(55.1,-6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAIAAAHAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgHAEgIAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAGAJAMAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_13.setTransform(48.2,-6.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_14.setTransform(34.4,-4.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000066").s().p("AgkAxQAMgEAFgDQAHgFADgJIAEgHIgihOIANAAIAaBBIAbhBIAOAAIgmBXQgFANgJAHQgJAGgNADg");
	this.shape_15.setTransform(25.6,-2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_16.setTransform(16.3,-4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_17.setTransform(7.7,-4.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_18.setTransform(-2.3,-6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000066").s().p("AgdAzIADgLQAHAEAHADQAHABAHABQAMAAAGgHQAGgGAAgMIAAgTQgEAHgHAFQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgFQAIgFALAAQAJAAAHAFQAHAEADAHIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAHAAAOQAAANAHAIQAHAHALAAQALAAAHgHQAGgIAAgNQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_19.setTransform(-9.3,-2.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_20.setTransform(-18.6,-4.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_21.setTransform(-27.9,-4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQAKAAAJAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgJAFgKAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAFAIAMAAQAMAAAGgJQAHgIAAgPQAAgOgHgHQgGgIgMAAQgMAAgFAIg");
	this.shape_22.setTransform(-37,-6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_23.setTransform(-46.7,-4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000066").s().p("AAiA5IAAg0IhDAAIAAA0IgNAAIAAhxIANAAIAAAzIBDAAIAAgzIANAAIAABxg");
	this.shape_24.setTransform(-57.5,-5.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000066").s().p("AgOA5IAAgQIAPAAIAAAQgAgKAcIAAgEQAAgLADgGQAEgHAGgIIAIgLQACgGAAgGQAAgHgEgEQgFgDgIAAQgLgBgLAHIAAgMIALgEIAMgCQANABAIAGQAJAHAAALQAAAHgCAEIgFAJIgIAKQgHAHgDAGQgDAGgBAIIAAADg");
	this.shape_25.setTransform(-70.9,-6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgEgFgKAAQgKAAgHAHQgHAGABAMIAAAuIgOAAIAAh1IAOAAIAAAyQADgHAIgEQAGgEAJAAQAdAAAAAfIAAAzg");
	this.shape_26.setTransform(-79.6,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_27.setTransform(-89.3,-4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_28.setTransform(-101,-4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgOAAgIgIg");
	this.shape_29.setTransform(-112.6,-4.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_30.setTransform(-119.6,-4.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_31.setTransform(-132.2,-4.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000066").s().p("AgRBKIAAgMIAIACQANAAAAgQIAAhYIAMAAIAABZQAAANgGAHQgGAGgKAAIgLgBgAACg7IAAgPIAQAAIAAAPg");
	this.shape_32.setTransform(-139.7,-4.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000066").s().p("AgVApIAAg5QAAgMgBgKIAMAAIACAPQADgIAFgFQAHgEAJAAIAHABIAAAMQgEgCgFAAQgLAAgFAIQgGAHAAAKIAAAtg");
	this.shape_33.setTransform(-143,-4.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_34.setTransform(-150.7,-4.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000066").s().p("AATA7IgpgnIAAAnIgMAAIAAh1IAMAAIAABJIAmgkIAQAAIgnAmIArAqg");
	this.shape_35.setTransform(-158.5,-6.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000066").s().p("AgDAvQgGgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIADAEQAEAEAHAAQAEAAAEgCIAAALQgEABgHABQgLgBgGgGg");
	this.shape_36.setTransform(174.7,-29.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_37.setTransform(167,-28.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000066").s().p("AgaAhQgHgIAAgQIAAgxIANAAIAAAxQAAALAEAFQAFAFAJAAQAKAAAHgHQAGgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgDAHgIAEQgGAEgIAAQgOAAgIgIg");
	this.shape_38.setTransform(157.8,-28.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgIAFgLAAQgIAAgIgEgAgRgEQgHAHAAAPQAAAOAHAJQAGAIALAAQALAAAHgJQAHgIgBgPQABgOgHgHQgHgIgLAAQgLAAgGAIg");
	this.shape_39.setTransform(148.6,-30);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_40.setTransform(136.5,-28.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_41.setTransform(125.2,-28.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_42.setTransform(113.7,-28.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_43.setTransform(97.5,-28.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000066").s().p("AgkAwQAMgCAGgFQAFgEAEgIIADgIIghhPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_44.setTransform(88.7,-26.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAJAAAGAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgGAEgJAAQgLAAgIgFgAgRgWQgGAJgBANQABAPAGAIQAHAIALAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_45.setTransform(79.4,-28.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_46.setTransform(70.8,-28.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000066").s().p("AgZAhQgIgIAAgQIAAgxIANAAIAAAxQAAALAFAFQAEAFAJAAQAKAAAGgHQAHgHAAgLIAAgtIANAAIAABQIgNAAIAAgOQgEAHgGAEQgIAEgHAAQgPAAgGgIg");
	this.shape_47.setTransform(58.1,-28.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000066").s().p("AgCAvQgHgHAAgMIAAgsIgQAAIAAgLIAQAAIAAgVIAMgEIAAAZIAXAAIAAALIgXAAIAAArQAAAIAEAEQADAEAHAAQAFAAADgCIAAALQgEABgGABQgMgBgFgGg");
	this.shape_48.setTransform(50.6,-29.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_49.setTransform(43.1,-28.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_50.setTransform(33.5,-28.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000066").s().p("AgOA3QgGgEgEgIIAAAPIgNAAIAAh0IANAAIAAAzQAEgIAGgEQAIgEAIAAQALAAAIAFQAIAFAFAJQAEAJAAAMQAAANgEAJQgFAKgIAFQgIAFgLAAQgIAAgIgEgAgSgEQgGAHAAAPQAAAOAGAJQAGAIAMAAQALAAAHgJQAGgIABgPQgBgOgGgHQgHgIgLAAQgMAAgGAIg");
	this.shape_51.setTransform(24.4,-30);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000066").s().p("AAVA7IAAgyQAAgKgEgGQgEgFgKAAQgKAAgHAHQgGAGgBAMIAAAuIgMAAIAAh1IAMAAIAAAyQAFgHAGgEQAIgEAHAAQAdAAAAAfIAAAzg");
	this.shape_52.setTransform(10.5,-30);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_53.setTransform(1.4,-28.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000066").s().p("AgFA7IAAh1IALAAIAAB1g");
	this.shape_54.setTransform(-4.8,-30);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_55.setTransform(-11.3,-28.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000066").s().p("AgNA3QgIgEgDgIIAAAPIgNAAIAAh0IANAAIAAAzQADgIAIgEQAGgEAJAAQAKAAAJAFQAIAFAEAJQAFAJAAAMQAAANgFAJQgEAKgIAFQgJAFgKAAQgJAAgGgEgAgSgEQgGAHAAAPQAAAOAGAJQAHAIALAAQALAAAHgJQAGgIAAgPQAAgOgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_56.setTransform(-20.4,-30);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000066").s().p("AgdAzIADgKQAHADAHACQAHACAHAAQAMAAAGgFQAGgHAAgMIAAgTQgEAIgHAEQgHAEgJAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgLAEgKQAFgJAIgFQAIgFALAAQAJAAAHAEQAHAEADAIIAAgOIANAAIAABPQAAASgJAJQgJAJgSAAQgRAAgOgIgAgRgnQgHAIAAANQAAAOAHAGQAHAIALAAQALAAAHgIQAGgGAAgOQAAgNgGgIQgHgIgLAAQgLAAgHAIg");
	this.shape_57.setTransform(-34.8,-26.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000066").s().p("AAWApIAAgxQAAgLgEgFQgFgFgJAAQgKAAgHAHQgHAHAAALIAAAtIgNAAIAAg5QAAgMgBgKIAMAAIACAOQADgIAIgEQAHgEAIAAQAdAAAAAgIAAAxg");
	this.shape_58.setTransform(-44.1,-28.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_59.setTransform(-53.7,-28.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgjhPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_60.setTransform(-62.5,-26.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAIgGALAAQAIAAAHAFQAIAEADAHIAAgOIANAAIAABQIgNAAIAAgPQgDAIgIAEQgHAEgIAAQgLAAgIgFgAgRgWQgGAJAAANQAAAPAGAIQAGAIAMAAQALAAAHgIQAGgIAAgPQAAgOgGgIQgHgIgLAAQgMAAgGAIg");
	this.shape_61.setTransform(-76,-28.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000066").s().p("AgkA6IAAhbQAAgNgCgKIANAAIABAQQADgJAIgEQAHgEAJgBQAKABAJAFQAIAFAEAJQAFAKAAANQAAAMgFAIQgEAKgIAFQgIAFgLAAQgJAAgHgEQgHgEgDgIIAAAxgAgRgnQgGAJAAAPQAAAOAGAHQAGAJALgBQAMABAHgJQAGgGAAgPQAAgPgGgJQgHgHgMgBQgLABgGAHg");
	this.shape_62.setTransform(-85.2,-26.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000066").s().p("AgUAlQgIgFgFgKQgEgJAAgNQAAgLAEgKQAFgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJAAANQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_63.setTransform(-95.2,-28.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000066").s().p("AgGA5IAAhPIAMAAIAABPgAgHgqIAAgOIAPAAIAAAOg");
	this.shape_64.setTransform(-101.7,-29.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_65.setTransform(-107.6,-28.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_66.setTransform(-115.9,-28.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000066").s().p("AgfAfIAFgJQAGAFAHACQAHACAHAAQAJAAAFgDQAFgDAAgGQAAgEgEgDQgDgDgHgCIgNgDQgKgCgFgFQgGgGAAgIQAAgKAJgHQAIgHANAAQAIAAAIADQAHADAGAFIgFAJQgLgJgNAAQgIAAgFADQgEADAAAGQAAAFADADQADADAGACIANADQALACAGAFQAFAFAAAJQAAAKgJAHQgIAGgPAAQgTAAgMgLg");
	this.shape_67.setTransform(-124.3,-28.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000066").s().p("AgUAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgFQAJgGAKAAQAIAAAIAFQAGAEAEAHIAAgOIANAAIAABQIgNAAIAAgPQgEAIgGAEQgIAEgIAAQgLAAgIgFgAgRgWQgHAJABANQgBAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_68.setTransform(-137.4,-28.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000066").s().p("AgUA2QgIgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAIgFQAIgFALAAQAJAAAGAEQAIAEADAHIAAgyIANAAIAAB0IgNAAIAAgOQgDAHgIAEQgGAEgJAAQgLAAgIgFgAgRgEQgGAHAAAOQAAAPAGAIQAHAJALAAQALAAAHgIQAGgJAAgOQAAgPgGgHQgHgIgLAAQgLAAgHAIg");
	this.shape_69.setTransform(-147,-30);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000066").s().p("AAqA5IgMgdIg7AAIgMAdIgOAAIAyhxIALAAIAyBxgAgYARIAxAAIgZg6g");
	this.shape_70.setTransform(-157.5,-29.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000066").s().p("AgdAyQgLgJAAgOQAAgLAHgHQAGgIALgCQgKgCgGgIQgFgHAAgJQAAgJAEgHQAFgGAJgFQAJgDAKAAQALAAAJADQAIAFAGAGQAEAHAAAJQABAJgHAHQgFAIgJACQAKACAHAIQAGAHAAALQAAAOgMAJQgKAIgTAAQgRAAgMgIgAgTALQgIAGAAAJQAAALAIAFQAGAFANAAQAOAAAGgFQAIgFAAgLQAAgJgIgGQgIgGgMgBQgMABgHAGgAgRgpQgHAGAAAJQAAAJAHAGQAGAGALABQALgBAIgGQAGgGAAgJQAAgJgGgGQgHgFgMgBQgLABgGAFg");
	this.shape_71.setTransform(22.8,-5.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000066").s().p("AgdA5IA0hmIg8AAIAAgLIBKAAIAAAKIg0Bng");
	this.shape_72.setTransform(13.2,-5.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000066").s().p("AgbAsQgMgPAAgaQAAgTAFgNQAGgOAKgHQAKgHAMAAQAKAAAKADQAIAEAHAHIgEAKQgJgHgHgDQgHgDgHAAQgPAAgIANQgIANAAAXIAAACQAEgIAIgFQAJgGAKAAQAJAAAJAFQAIAEAEAIQAFAIAAAKQAAALgFAIQgEAJgJAEQgIAFgLAAQgUAAgKgOgAgPADQgHAHAAAMQAAALAHAHQAHAHAKAAQALAAAHgHQAHgHAAgLQAAgMgHgHQgHgGgLAAQgKAAgHAGg");
	this.shape_73.setTransform(3.7,-5.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000066").s().p("AgUA2QgLgEgGgGIAFgKQAQANAQgBQALAAAHgGQAHgHAAgMQAAgLgHgHQgGgGgMAAQgPAAgKAMIgJAAIAAhBIBDAAIAAALIg2AAIAAAoQAJgJAPAAQAKAAAIAFQAIAEAEAHQAFAJAAAKQAAALgFAIQgFAJgIAEQgJAFgLgBQgKABgKgEg");
	this.shape_74.setTransform(-5.7,-5.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000066").s().p("AgUA2QgKgDgHgHIAFgKQAQANAQAAQAMAAAHgGQAGgFAAgLQAAgUgZAAIgOAAIAAgKIALAAQALAAAIgGQAGgFAAgLQAAgJgFgFQgGgFgKAAQgPAAgRANIgEgKQAGgGALgFQAJgDAKAAQAQAAAJAIQAKAHAAAOQAAAJgGAIQgEAHgJADQALACAEAHQAGAIAAAKQAAAPgKAJQgLAIgQAAQgKAAgLgEg");
	this.shape_75.setTransform(-25.3,-5.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000066").s().p("AgdArQgKgPAAgcQAAgcAKgPQAKgOATAAQATAAALAOQAKAPAAAcQAAAcgKAPQgLAPgTAAQgTAAgKgPgAgTgjQgHAMAAAXQAAAYAHALQAGAMANAAQAOAAAGgLQAHgMgBgYQABgXgHgMQgGgLgOAAQgNAAgGALg");
	this.shape_76.setTransform(-60.8,-5.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000066").s().p("AgCAvQgHgGAAgNIAAgtIgQAAIAAgKIAQAAIAAgVIAMgFIAAAaIAXAAIAAAKIgXAAIAAArQAAAJAEAEQADADAHAAQAFABADgCIAAALQgEABgGAAQgMABgFgHg");
	this.shape_77.setTransform(-72.7,-5.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_78.setTransform(-121.9,-6.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_79.setTransform(-138.8,-5.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000066").s().p("AgOA6IAAgRIAPAAIAAARgAgKAbIAAgDQAAgKADgIQAEgGAGgIIAIgMQACgEAAgGQAAgIgEgDQgFgFgIAAQgLABgLAGIAAgMIALgEQAGgCAGABQANgBAIAIQAJAGAAAMQAAAGgCAFIgFAJIgIAJQgHAHgDAGQgDAGgBAIIAAACg");
	this.shape_80.setTransform(157.2,-29.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAYhAIAMAAIgeBPg");
	this.shape_81.setTransform(123,-28.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_82.setTransform(88.7,-28.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000066").s().p("AAVA7IAAgyQABgKgFgGQgFgFgJAAQgKAAgHAHQgHAGAAAMIAAAuIgNAAIAAh1IANAAIAAAyQAFgHAHgEQAHgEAHAAQAeAAAAAfIAAAzg");
	this.shape_83.setTransform(79.5,-30);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000066").s().p("AgjAwQALgCAGgFQAFgEAFgIIACgIIgihPIAOAAIAaBCIAchCIAMAAIglBXQgFAOgJAGQgJAHgNACg");
	this.shape_84.setTransform(66.4,-26.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000066").s().p("AAXAoIgXg+IgWA+IgNAAIgdhPIANAAIAXBAIAYhAIAKAAIAXBAIAXhAIANAAIgeBPg");
	this.shape_85.setTransform(18.2,-28.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000066").s().p("AAuApIAAgxQAAgLgEgFQgEgFgJAAQgKAAgGAHQgGAHAAALIAAAtIgMAAIAAgxQAAgLgEgFQgEgFgIAAQgLAAgFAHQgGAHAAALIAAAtIgNAAIAAg5QAAgMgCgKIANAAIABAOQADgIAHgEQAHgEAIAAQAKAAAGAEQAFAEADAIQAEgIAHgEQAHgEAJAAQAbAAAAAgIAAAxg");
	this.shape_86.setTransform(-8.8,-28.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000066").s().p("AgGA7IAAh1IANAAIAAB1g");
	this.shape_87.setTransform(-31.4,-30);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000066").s().p("AgYAfQgLgLAAgUQAAgLAFgKQAFgJAIgFQAJgGAKAAQAQAAAJALQAJAKAAATIAAABIg6AAQAAAPAHAIQAHAIAMAAQAPAAALgJIAFAJQgGAFgIADQgIADgJAAQgSAAgKgLgAgNgYQgHAGgBALIAtAAQgBgMgFgGQgGgGgKAAQgJAAgGAHg");
	this.shape_88.setTransform(-59.9,-28.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000066").s().p("AgTAlQgJgFgEgKQgFgJAAgNQAAgMAFgJQAEgJAJgGQAJgFAKAAQALAAAJAFQAJAGAEAJQAFAJAAAMQAAANgFAJQgEAKgJAFQgJAFgLAAQgKAAgJgFgAgRgWQgHAIAAAOQAAAPAHAIQAGAIALAAQAMAAAGgIQAHgIAAgPQAAgOgHgIQgGgIgMAAQgLAAgGAIg");
	this.shape_89.setTransform(-78.2,-28.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000066").s().p("AgkAwQAMgCAFgFQAHgEADgIIAEgIIgihPIANAAIAaBCIAbhCIAOAAIgmBXQgFAOgJAGQgIAHgOACg");
	this.shape_90.setTransform(-87,-26.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000066").s().p("AgUAzQgMgHgGgNQgHgNAAgSQAAgRAHgNQAGgNAMgHQAMgHAPAAQAMAAAKADQAJAEAIAHIgFAKQgIgHgIgDQgIgDgKAAQgSAAgKAMQgKAMAAAWQAAAWAKAMQAKANASAAQAKAAAIgDQAIgDAIgHIAFAKQgIAHgJADQgKAEgMAAQgPAAgMgHg");
	this.shape_91.setTransform(-138.8,-29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66,p:{x:-115.9}},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:-85.2}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:-44.1}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-11.3}},{t:this.shape_54,p:{x:-4.8,y:-30}},{t:this.shape_53,p:{x:1.4}},{t:this.shape_52,p:{x:10.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49,p:{x:43.1}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43,p:{x:97.5}},{t:this.shape_42,p:{x:113.7}},{t:this.shape_41,p:{x:125.2}},{t:this.shape_40,p:{x:136.5}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:174.7}},{t:this.shape_35,p:{x:-158.5,y:-6.1}},{t:this.shape_34,p:{x:-150.7}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30,p:{x:-119.6,y:-4.4}},{t:this.shape_29},{t:this.shape_28,p:{x:-101}},{t:this.shape_27,p:{x:-89.3}},{t:this.shape_26,p:{x:-79.6,y:-6.1}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:-18.6,y:-4.4}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:16.3,y:-4.3}},{t:this.shape_15},{t:this.shape_14,p:{x:34.4}},{t:this.shape_13},{t:this.shape_12,p:{x:55.1,y:-6}},{t:this.shape_11},{t:this.shape_10,p:{x:76}},{t:this.shape_9,p:{x:85.2}},{t:this.shape_8,p:{x:93.4}},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5,p:{x:121}},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:159.2}},{t:this.shape,p:{x:165.9}}]}).to({state:[{t:this.shape_91},{t:this.shape_43,p:{x:-128.8}},{t:this.shape_58,p:{x:-119.2}},{t:this.shape_16,p:{x:-105.7,y:-28.2}},{t:this.shape_49,p:{x:-96}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_20,p:{x:-69,y:-28.3}},{t:this.shape_88},{t:this.shape_52,p:{x:-46.7}},{t:this.shape_66,p:{x:-37.7}},{t:this.shape_87},{t:this.shape_62,p:{x:-24.6}},{t:this.shape_86},{t:this.shape_53,p:{x:2.7}},{t:this.shape_85},{t:this.shape_12,p:{x:27,y:-29.9}},{t:this.shape_36,p:{x:31.6}},{t:this.shape_26,p:{x:39.2,y:-30}},{t:this.shape_42,p:{x:55}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_40,p:{x:100.3}},{t:this.shape_41,p:{x:111.7}},{t:this.shape_81},{t:this.shape_55,p:{x:134.5}},{t:this.shape_30,p:{x:142.5,y:-28.3}},{t:this.shape_35,p:{x:149.7,y:-30}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_27,p:{x:-128.8}},{t:this.shape_78},{t:this.shape_54,p:{x:-118.1,y:-6.1}},{t:this.shape_28,p:{x:-105}},{t:this.shape_34,p:{x:-93.6}},{t:this.shape_14,p:{x:-80.5}},{t:this.shape_77},{t:this.shape_76},{t:this.shape_10,p:{x:-50.8}},{t:this.shape_9,p:{x:-41.6}},{t:this.shape_8,p:{x:-33.4}},{t:this.shape_75},{t:this.shape_5,p:{x:-15.5}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_1,p:{x:32.4}},{t:this.shape,p:{x:39}}]},1).wait(1));

	// outlineshade
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D40000").ss(4,2,0,3).p("AcsAAI9bAAI78AA");
	this.shape_92.setTransform(-12.7,98.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#D40000").ss(1,2,0,3).p("A+qL9ICFz4IBpg/IhghKIALh5MAguAAAIaOAAIj+X7");
	this.shape_93.setTransform(0,22.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F5F5F5").s().p("AxjL+ICGz5IBog/IhghJIALh6MAguAAAInMX7g");
	this.shape_94.setTransform(-83.9,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]}).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).wait(1));

	// white
	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FAFAFA").s().p("A+qL+ICFz5IBpg/IhghJIALh6MA68AAAIj+X7g");
	this.shape_95.setTransform(0,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.3,-55.7,395.8,156.4);


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
	this.shape_12.graphics.f("#E09E67").s().p("AAAgIIABBsgAAAgIIAAgMIAAAMgAAAhiIAABOg");
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
	this.shape_26.graphics.f("#E09E67").s().p("AAABLIAAAJIABhXIABCYIgBAHgAAABUIgBA/gAABibIAACYg");
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
	this.shape_46.graphics.f("#E09E67").s().p("AAAgIIABBrgAAAgIIAAgMIAAAMgAAAhjIAABPg");
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
	this.shape_57.graphics.f("#E09E67").s().p("AAABLIAAAJIABhXIABCYIgBAHgAAABUIgBA/gAABibIAACYg");
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
	this.shape_11.graphics.f("#E09E67").s().p("AAAgIIABBrgAAAgIIAAgMIAAAMgAAAhiIAABOg");
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
	this.shape_20.graphics.f("#E09E67").s().p("AAAAyIAAAHgAAAgKIAAgUIABgaIgBAaIAAAUIABA6IgBgGIAAAIg");
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
	this.shape_25.graphics.f("#E09E67").s().p("AAABKIAAAJIABhWIABCYIgBAHgAAABTIgBBAgAABibIAACYg");
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
	this.shape_38.graphics.f("#E09E67").s().p("AAAD4IAAAbIgBAaIABgaIABjqIABBSIgBgDIgBDBgAABgoIAAkQIAAEQIAABRg");
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
	this.shape_55.graphics.f("#E09E67").s().p("AAABLIAAAIIAAABIgBAqIABgqIAAgBIABhhIAAiNIAACNIABCjIgBAHg");
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
	this.shape_1.graphics.f("#E09E67").s().p("AAAAyIAAgBIAAABIAAAHgAAAAqIAAAHIAAg7IAAgTIABgbIgBAbIAAATIABA7g");
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
	this.shape_7.graphics.f("#E09E67").s().p("AAABKIAAAJIAAh9IACC/IgBAHgAAABTIgBArgAABhVIAAhGIAABGIgBArg");
	this.shape_7.setTransform(99.2,94.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_8.setTransform(91,79.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAAGIAAgsIAAiVIABAMIgBCJIAAAsIAAC2g");
	this.shape_9.setTransform(79.6,81.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAgRIABBxgAAAgRIAAAJgAAAhfIAABOgAAAgRg");
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
	this.shape_16.graphics.f("#E09E67").s().p("AABCWIAAhRIgBgEIAABOIgBgEIABg6IAAAOIABiPIABBrIgBAFIABBdgAACicIgBBsg");
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
	this.shape_40.graphics.f("#E09E67").s().p("AAABLIAAAJIABh+IABC/IgBAHgAAABUIgBAqgAABhVIAAhGIAABGIAAArg");
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
	this.shape_59.graphics.f("#E09E67").s().p("AABAoIgBggIABAgIAAAjgAAAgXIAAgaIAAA5gAAAhBIAAAqgAAAhKIAAAZg");
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
	this.shape_4.graphics.f("#E09E67").s().p("AAAEkIAAAmgAABEhIAAAjgAAAhCIAAAdIABgbIAAgKIAAgkIAAjbIAADbIAAAkIAAAKIAAFhIgBgjIAAAmg");
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
	this.shape_8.graphics.f("#E09E67").s().p("AAABRIAAAIIAAhoIACCxIgBAHgAAABmIgBAjgAAABbIAAgCIAAANgAABioIgBCZg");
	this.shape_8.setTransform(99.2,98.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAg3IABAIIgBBng");
	this.shape_9.setTransform(91,82.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E09E67").s().p("AAAAHIAAgxIgBihIADANIgCCUIAAAxIAADFg");
	this.shape_10.setTransform(79.6,83.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E09E67").s().p("AAAgCIABBigAAAgCIAAgIIAAAIgAAAhfIAABVg");
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
	this.shape_20.graphics.f("#E09E67").s().p("AAAhNIAAgpIAAApIAAD0gAAAh2IAAgpIABgHIgBAwg");
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
	this.shape_35.graphics.f("#E09E67").s().p("AAABUIAAgDIAAADIgBBcgAAABKIAAAHIABhaIAAimIAACmIABClIgBAHg");
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
	this.shape_8.graphics.f("#E09E67").s().p("AgBExIACkrIABB0IAAgCIgBDaIgBhJIgBAoIAAAogAABAGIAAh0IAAjqIAADqIAAB0g");
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
	this.shape_12.graphics.f("#E09E67").s().p("AAABVIAAAKIgBBIIABhIIABhjIABCtIgBAIgAABgEIAAisIAACsg");
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
	this.shape_33.graphics.f("#E09E67").s().p("AAAADIABCEIgBBTgAAAgoIAAixIAACxIAAArg");
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
	this.shape_39.graphics.f("#E09E67").s().p("AAABVIAAAKIgBBIIABhIIAAhjIACCtIgBAIgAAAgEIABisIgBCsg");
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
	this.shape_43.graphics.f("#E09E67").s().p("AABgDIABB8gAABgDIAAgFIAAAFgAABgIIAAgNIAAgKIAAAXgAgBh4IACBjg");
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
	this.shape_64.graphics.f("#E09E67").s().p("AAABVIAAAKIgBBIIABhIIAAhjIACCtIgBAIgAAAgEIABisIgBCsg");
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
	this.shape_86.graphics.f("#E09E67").s().p("AAABVIAAAKIgBAwIABgwIABhvIABC5IgBAIgAABgQIAAigIAACgg");
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
	this.shape_6.graphics.f("#E09E67").s().p("AAABKIAAAJIAAh9IACC/IgBAHgAAABTIgBArgAABhVIAAhGIAABGIgBArg");
	this.shape_6.setTransform(99.2,94.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E09E67").s().p("AAAgyIABAHIgBBeg");
	this.shape_7.setTransform(91,79.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E09E67").s().p("AAAAGIAAgsIAAiVIABAMIgBCJIAAAsIAAC2g");
	this.shape_8.setTransform(79.6,81.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E09E67").s().p("AAAgRIABBxgAAAgRIAAAJgAAAhfIAABOgAAAgRg");
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
	this.shape_15.graphics.f("#E09E67").s().p("AABCWIAAhRIgBgEIAABOIgBgEIABg6IAAAOIABiPIABBrIgBAFIABBdgAACicIgBBsg");
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
	this.shape_39.graphics.f("#E09E67").s().p("AAABLIAAAJIABh+IABC/IgBAHgAAABUIgBAqgAABhVIAAhGIAABGIAAArg");
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
	this.shape_58.graphics.f("#E09E67").s().p("AABAoIgBggIABAgIAAAjgAAAgXIAAgaIAAA5gAAAhBIAAAqgAAAhKIAAAZg");
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
	this.shape_5.graphics.f("#E09E67").s().p("AAAEBIAAAdIAAl6IAAAdIAAhCIAAhBIAAiEIAACEIAABBIACD5IgBgCIgBDRgAAAEeIgBAcg");
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
	this.shape_18.graphics.f("#E09E67").s().p("AAABRIAAAKIAAAGIABhwIAAiaIAACaIABCxIgBAHgAAABkIAAgDIAAADIgBAlg");
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


(lib.btnBg3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("Al1C0QAFiSBohnQBuhtCaAAQCbgBBtBuIABAAQBoBnAFCSg");
	this.shape.setTransform(0,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(121,124,128,0.996)").ss(3,0,0,3).p("AGLAAQAACkh0BzQhzB0ikAAQijAAhzh0Qh0hzAAikQAAijB0hzQBzh0CjAAQCkAABzB0QB0BzAACjg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F5F5").s().p("AkWEWQh0hyABikQgBiiB0h0QB0h0CiABQCkgBByB0QB0B0AACiQAACkh0ByQhyB0ikAAQiiAAh0h0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(153,204,0,0.2)").s().p("AmHGIIAAgBQiiihAAjmQgBjlCjiiQCiijDlABQDmAAChCiIABAAQCjCigBDlQABDmijChIgBABQihCjjmgBIAAAAQjlABiiijgAlrlrQiWCXgBDUQABDVCWCWIAAABQCXCXDUAAQDVgBCWiWIABgBQCWiWABjVQAAjUiXiXIgBAAQiWiWjVgBQjUABiXCWg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(153,204,0,0.4)").s().p("AlrFsIAAgBQiWiWgBjVQABjUCWiXQCXiWDUgBQDVABCWCWIABAAQCXCXAADUQgBDViWCWIgBABQiWCWjVABQjUAAiXiXgAlPlPQiKCLAADEQAADFCKCKIAAAAQCLCMDEgBQDEAACLiLIAAAAQCLiLAAjEQABjEiMiLIAAAAQiKiKjFAAQjEAAiLCKg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(153,204,0,0.8)").s().p("AAAGzQizAAh/iAQh/h/gBi0QABizB/h/QB/h/CzgBQC0ABB/B/QCAB/AACzQAAC0iAB/IAAAAQh/CAi0AAIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(153,204,0,0.6)").s().p("AlPFPIAAAAQiKiKAAjFQAAjECKiLQCLiKDEAAQDFAACKCKIAAAAQCMCLgBDEQAADEiLCLIAAAAQiLCLjEAAQjEABiLiMgAkykyQh/B/gBCzQABC0B/B/QB/CACzAAQC0AAB/iAIAAAAQCAh/AAi0QAAiziAh/Qh/h/i0gBQizABh/B/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// Layer_1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(255,255,255,0.996)").ss(3,0,0,3).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#39B54A").s().p("AlLFMQiKiKAAjCQAAjBCKiKQCKiKDBAAQDCAACKCKQCKCKAADBQAADCiKCKQiKCKjCAAQjBAAiKiKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-55.4,110.9,110.9);


(lib.btnBg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("Al1C0QAFiSBohnQBuhtCaAAQCbgBBtBuIABAAQBoBnAFCSg");
	this.shape.setTransform(0,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(121,124,128,0.996)").ss(3,0,0,3).p("AGLAAQAACkh0BzQhzB0ikAAQijAAhzh0Qh0hzAAikQAAijB0hzQBzh0CjAAQCkAABzB0QB0BzAACjg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F5F5").s().p("AkWEWQh0hyABikQgBiiB0h0QB0h0CiABQCkgBByB0QB0B0AACiQAACkh0ByQhyB0ikAAQiiAAh0h0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.996)").ss(3,0,0,3).p("AIFAAQAADWiYCXQiXCYjWAAQjVAAiYiYQiXiXAAjWQAAjVCXiYQCYiXDVAAQDWAACXCXQCYCYAADVg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AlsFtQiYiXAAjWQAAjVCYiXQCXiYDVAAQDWAACXCYQCYCXAADVQAADWiYCXQiXCYjWAAQjVAAiXiYg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.2,-53.2,106.4,106.4);


(lib.btnBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAFAFA").s().p("Al1C0QAFiSBohnQBuhtCaAAQCbgBBtBuIABAAQBoBnAFCSg");
	this.shape.setTransform(0,-19.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(121,124,128,0.996)").ss(3,0,0,3).p("AGLAAQAACkh0BzQhzB0ikAAQijAAhzh0Qh0hzAAikQAAijB0hzQBzh0CjAAQCkAABzB0QB0BzAACjg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4F5F5").s().p("AkWEWQh0hyABikQgBiiB0h0QB0h0CiABQCkgBByB0QB0B0AACiQAACkh0ByQhyB0ikAAQiiAAh0h0g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(255,255,255,0.996)").ss(3,0,0,3).p("AHWAAQAADDiKCJQiJCKjDAAQjCAAiKiKQiJiJAAjDQAAjCCJiKQCKiJDCAAQDDAACJCJQCKCKAADCg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AB4A9C").s().p("AlLFMQiKiKAAjCQAAjBCKiKQCKiKDBAAQDCAACKCKQCKCKAADBQAADCiKCKQiKCKjCAAQjBAAiKiKg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-48.5,97,97);


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
	this.instance = new lib.Bitmap29();
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
p.nominalBounds = new cjs.Rectangle(-257.9,-37.3,402,91.9);


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


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.txtSalah();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_7
	this.instance_1 = new lib.btnBg("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.btnBg2("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.btnBg3("synched",0);
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-48.5,97,97);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_4
	this.instance = new lib.txtBetul();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},3).wait(1));

	// Layer_1
	this.instance_1 = new lib.btnBg("synched",0);
	this.instance_1.parent = this;

	this.instance_2 = new lib.btnBg2("synched",0);
	this.instance_2.parent = this;

	this.instance_3 = new lib.btnBg3("synched",0);
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-48.5,97,97);


(lib.workplace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-410.2,-57.9);

	this.instance_1 = new lib.Bitmap22();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-410.2,-57.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).wait(1));

	// work-table
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-28.8,132.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A7DAB").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgGAIAAQAJAAAHAGQAFAGAAAIQAAAJgFAHQgHAFgJABQgIgBgGgFg");
	this.shape.setTransform(-329.7,-383.3,6.532,6.532);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A7DAB").s().p("AgbAbIAAg1IA3AAIAAA1g");
	this.shape_1.setTransform(-329.5,-317.2,6.532,6.532);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A7DAB").s().p("AgbAbIAAg1IA3AAIAAA1g");
	this.shape_2.setTransform(-329.5,-446.4,6.532,6.532);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1E90C4").s().p("AgbCLIAAkVIA3AAIAAEVg");
	this.shape_3.setTransform(-329.5,-382.5,6.532,6.532);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D16031").s().p("AgqArIAAhVIBVAAIAABVg");
	this.shape_4.setTransform(-375.5,-389.2,6.532,6.532);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F27039").s().p("AgqCCIAAkDIBVAAIAAEDg");
	this.shape_5.setTransform(-375.5,-376.1,6.532,6.532);

	this.instance_3 = new lib.Path_7();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-417.8,-374.8,6.532,6.532,0,0,0,2.2,6.5);
	this.instance_3.alpha = 0.25;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1E90C4").s().p("AgVCLIAAkVIArAAIAAEVg");
	this.shape_6.setTransform(-417.8,-382.5,6.532,6.532);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F27039").s().p("AgMBkIAAjGIAZAAIAADGg");
	this.shape_7.setTransform(-440.4,-356.5,6.532,6.532);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(0.8).p("AAAhUIAACp");
	this.shape_8.setTransform(-466.2,-365.7,6.532,6.532);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1E90C4").s().p("AgdBxIAAjgIA7AAIAADgg");
	this.shape_9.setTransform(-466.2,-365,6.532,6.532);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CFA700").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_10.setTransform(-281.2,-331.2,6.532,6.532);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1A7CA8").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_11.setTransform(-206.7,-324.7,6.532,6.532);

	this.instance_4 = new lib.Path_2_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-206.8,-443.7,6.532,6.532,0,0,0,2.4,6.9);
	this.instance_4.alpha = 0.852;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E90C4").s().p("AgqClIAAlJIBVAAIAAFJg");
	this.shape_12.setTransform(-206.5,-397.7,6.532,6.532);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C95D30").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_13.setTransform(-131.6,-324.7,6.532,6.532);

	this.instance_5 = new lib.Path_5_0();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-281.3,-450.2,6.532,6.532,0,0,0,2.4,6.9);
	this.instance_5.alpha = 0.852;

	this.instance_6 = new lib.Path_6();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-131.7,-443.7,6.532,6.532,0,0,0,2.4,6.9);
	this.instance_6.alpha = 0.852;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCE00").s().p("AgqClIAAlJIBVAAIAAFJg");
	this.shape_14.setTransform(-281.2,-397.7,6.532,6.532);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F27039").s().p("AgqClIAAlJIBVAAIAAFJg");
	this.shape_15.setTransform(-131.6,-397.7,6.532,6.532);

	this.instance_7 = new lib.ClipGroup_3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-426.3,-183.7,6.532,6.532,0,0,0,63.3,65.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D68611").s().p("AAEA1IAAhcIgVAKIgDgLIAagNIAPAAIAABqg");
	this.shape_16.setTransform(-616.9,-459.7,6.532,6.532);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#515151").ss(0.2).p("AgLAAIAXAA");
	this.shape_17.setTransform(-601.5,-303.3,6.532,6.532);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_18.setTransform(-598.6,-308.5,6.532,6.532);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#515151").ss(0.2).p("AgEAAIAJAA");
	this.shape_19.setTransform(-622,-305.9,6.532,6.532);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#515151").ss(0.2).p("AgIAAIARAA");
	this.shape_20.setTransform(-599.3,-305.9,6.532,6.532);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#515151").ss(0.2).p("AgEAAIAJAA");
	this.shape_21.setTransform(-609.2,-308.5,6.532,6.532);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_22.setTransform(-611.5,-305.9,6.532,6.532);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#515151").ss(0.2).p("AgJAAIAUAA");
	this.shape_23.setTransform(-618.4,-303.3,6.532,6.532);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#515151").ss(0.2).p("AgJAAIATAA");
	this.shape_24.setTransform(-600.1,-301,6.532,6.532);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_25.setTransform(-613.1,-301,6.532,6.532);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#515151").ss(0.2).p("AgDAAIAHAA");
	this.shape_26.setTransform(-622.4,-301,6.532,6.532);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#515151").ss(0.2).p("AgHAAIAPAA");
	this.shape_27.setTransform(-620.2,-308.5,6.532,6.532);

	this.instance_8 = new lib.Path_11();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-611.2,-305.2,6.532,6.532,0,0,0,2.8,0.9);
	this.instance_8.alpha = 0.699;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#515151").s().p("AhHAYIAAgvICPAAIAAAvg");
	this.shape_28.setTransform(-611,-305.3,6.532,6.532);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F6B13E").s().p("AgsCaIAAkzIBZAAQAAA+gPAzQgPAxgYAYQgFAdAAAbQAAAkAHAdg");
	this.shape_29.setTransform(-581.3,-419.1,6.532,6.532);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD523").s().p("AAHCaQALgeAAgjQAAgagIgeQgYgYgPgxQgPgzAAg+IBZAAIAAEzg");
	this.shape_30.setTransform(-640.6,-419.1,6.532,6.532);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#F6B13E").ss(0.9).p("AgLg8IAnAAIgCAoQgLAtgqAfQADhRANgjg");
	this.shape_31.setTransform(-544.1,-477.2,6.532,6.532);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFD523").ss(0.9).p("AANg8IgsAAIADAoQANAuAvAfQgEhSgPgjg");
	this.shape_32.setTransform(-675,-477.4,6.532,6.532);

	this.instance_9 = new lib.Blend_13();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-590.6,-386.5,6.532,6.532,0,0,0,16.5,20.5);

	this.instance_10 = new lib.Path_0();
	this.instance_10.parent = this;
	this.instance_10.setTransform(6.1,501.3,6.532,6.532,0,0,0,44.5,3.4);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.Path_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-436.4,559.2,6.532,6.532,0,0,0,1.7,1.7);
	this.instance_11.alpha = 0.551;

	this.instance_12 = new lib.Path_2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(449.2,559.2,6.532,6.532,0,0,0,1.7,1.7);
	this.instance_12.alpha = 0.551;

	this.instance_13 = new lib.Path_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-436.8,558.9,6.532,6.532,0,0,0,20.5,8.9);
	this.instance_13.alpha = 0.648;

	this.instance_14 = new lib.Path_4();
	this.instance_14.parent = this;
	this.instance_14.setTransform(448.9,558.9,6.532,6.532,0,0,0,20.5,8.9);
	this.instance_14.alpha = 0.648;

	this.instance_15 = new lib.Path_5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(6.1,552.9,6.532,6.532,0,0,0,44.5,11.3);
	this.instance_15.alpha = 0.5;

	this.instance_16 = new lib.ClipGroup_2();
	this.instance_16.parent = this;
	this.instance_16.setTransform(153.4,698.7,6.532,6.532,0,0,0,184.5,65.2);

	this.instance_17 = new lib.ClipGroup_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-117.7,276.2,6.532,6.532,0,0,0,143,138.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A56033").s().p("AuUB9IAAj5IcpAAIAAD5g");
	this.shape_33.setTransform(5.9,545,6.532,6.532);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBAB20").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_34.setTransform(200.4,-385.9,6.532,6.532);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2682E").s().p("AgXA/QgDgBAIgSIArhqIgnBrQgGASgDAAIAAAAg");
	this.shape_35.setTransform(206.4,-401.4,6.532,6.532);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#113A58").s().p("AgtAWQgBgCADgDQADgDAGgDIBRgiIhNArQgIAEgEAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_36.setTransform(225.1,-397.2,6.532,6.532);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#113A58").s().p("AAWAdQgEgBgDgEIgtg1IA4AqQAEADABAEQABAEgDADQgCADgEAAIgBgBg");
	this.shape_37.setTransform(183.7,-399.3,6.532,6.532);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAEgFIgHAL");
	this.shape_38.setTransform(241.1,-457.5,6.532,6.532);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAHgDIgNAH");
	this.shape_39.setTransform(271.6,-427.6,6.532,6.532);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAIAAIgPAA");
	this.shape_40.setTransform(282.7,-386.6,6.532,6.532);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAHAEIgNgH");
	this.shape_41.setTransform(271.9,-345.3,6.532,6.532);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAEAGIgHgM");
	this.shape_42.setTransform(242,-315.1,6.532,6.532);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAAAIIAAgP");
	this.shape_43.setTransform(201.1,-303.6,6.532,6.532);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgDAGIAHgM");
	this.shape_44.setTransform(159.7,-314.4,6.532,6.532);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgGAEIANgH");
	this.shape_45.setTransform(129.5,-344.3,6.532,6.532);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgHAAIAPAA");
	this.shape_46.setTransform(118.1,-385.6,6.532,6.532);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgGgDIANAH");
	this.shape_47.setTransform(128.9,-426.6,6.532,6.532);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#262626").ss(0.4,0,0,4).p("AgDgFIAHAM");
	this.shape_48.setTransform(158.8,-457.1,6.532,6.532);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#262626").ss(0.4,0,0,4).p("AAAgHIAAAP");
	this.shape_49.setTransform(200.1,-468.2,6.532,6.532);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#262626").ss(0.2,0,0,4).p("AACgCIgCAF");
	this.shape_50.setTransform(241.2,-457.5,6.532,6.532);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#262626").ss(0.2,0,0,4).p("AADAAIgFAC");
	this.shape_51.setTransform(271.4,-427.7,6.532,6.532);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#262626").ss(0.2,0,0,4).p("AADAAIgFAA");
	this.shape_52.setTransform(282.7,-386.6,6.532,6.532);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#262626").ss(0.2,0,0,4).p("AADABIgFgC");
	this.shape_53.setTransform(271.9,-345.4,6.532,6.532);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#262626").ss(0.2,0,0,4).p("AACADIgDgF");
	this.shape_54.setTransform(242.2,-315.1,6.532,6.532);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#262626").ss(0.2,0,0,4).p("AAAADIAAgF");
	this.shape_55.setTransform(201.1,-303.6,6.532,6.532);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgBADIADgF");
	this.shape_56.setTransform(159.9,-314.4,6.532,6.532);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgCABIAFgC");
	this.shape_57.setTransform(129.5,-344.5,6.532,6.532);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgCAAIAFAA");
	this.shape_58.setTransform(118.1,-385.6,6.532,6.532);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgCgBIAFAC");
	this.shape_59.setTransform(128.9,-426.8,6.532,6.532);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#262626").ss(0.2,0,0,4).p("AgBgCIADAF");
	this.shape_60.setTransform(158.9,-457.1,6.532,6.532);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#262626").ss(0.2,0,0,4).p("AAAgCIAAAF");
	this.shape_61.setTransform(200.1,-468.2,6.532,6.532);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AhqBrQgtgsAAg/QAAg+AtgsQAsgtA+AAQA/AAAsAtQAtAsAAA+QAAA/gtAsQgsAtg/AAQg+AAgsgtg");
	this.shape_62.setTransform(200.2,-386.1,6.532,6.532);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#212121","#525252","#6E6E6E"],[0,0.6,1],0,17.8,0,-22.1).s().p("Ah6B7QgzgzAAhIQAAhHAzgzQAzgzBHAAQBIAAAzAzQAzAzAABHQAABIgzAzQgzAzhIAAQhHAAgzgzg");
	this.shape_63.setTransform(200.2,-386.1,6.532,6.532);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#4A4A4A","#5C5C5C","#A3A3A3","#BFBFBF"],[0,0.141,0.725,1],-12.4,12.5,12.5,-12.4).s().p("Ah8B9Qg0g0AAhJQAAhIA0g0QA0g0BIAAQBKAAA0A0QAzA0AABIQAABJgzA0Qg0A0hKAAQhIAAg0g0g");
	this.shape_64.setTransform(199.4,-385.3,6.532,6.532);

	this.instance_18 = new lib.ClipGroup();
	this.instance_18.parent = this;
	this.instance_18.setTransform(547.2,-300.7,6.532,6.532,0,0,0,72.7,74);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#444444").s().p("AAAAPIAAgdIABAAIAAAdg");
	this.shape_65.setTransform(140.9,383.1,6.532,6.532);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5C5C5C").s().p("Ag1ANQAHgQARgGQAIgDAHgBIAcAAQAVABALANQAGAGACAGg");
	this.shape_66.setTransform(140.7,382.3,6.532,6.532);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#444444").s().p("Ag4AcIAAgMQAAgSANgMQANgNASAAIAaAAQASAAAMANQANAMAAARIAAANg");
	this.shape_67.setTransform(140.7,391.7,6.532,6.532);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#19C1D1").s().p("AzhPDIAA+EMAnDAAAIAAeEg");
	this.shape_68.setTransform(0.2,-1.5,6.532,6.532);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#19C1D1").s().p("Eh/kBiPMAAAjEdMD/JAAAMAAADEdg");
	this.shape_69.setTransform(0.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_18},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_8},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_7},{t:this.shape_15},{t:this.shape_14},{t:this.instance_6},{t:this.instance_5},{t:this.shape_13},{t:this.shape_12},{t:this.instance_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},4).to({state:[{t:this.shape_69},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_18},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_8},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_7},{t:this.shape_15},{t:this.shape_14},{t:this.instance_6},{t:this.instance_5},{t:this.shape_13},{t:this.shape_12},{t:this.instance_4},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_3},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1051.7,-784,2409.6,1965.3);


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


(lib.item1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,selected:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// btn
	this.instance = new lib.btn2("single",2);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// btn
	this.instance_1 = new lib.btn2();
	this.instance_1.parent = this;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-55.4,110.9,110.9);


(lib.item1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"on":0,"selected":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// btn
	this.instance = new lib.btn1("single",2);
	this.instance.parent = this;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// btn
	this.instance_1 = new lib.btn1();
	this.instance_1.parent = this;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.btn1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.4,-55.4,110.9,110.9);


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
		cAns = 1;
		maxItem = 2;
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
		function submitAns(e){
			if (userAns==cAns){
				_this.parent.storeCorrect();
			} else {
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
	this.btnSubmit.setTransform(633,515.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item2 = new lib.item1_2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(502.7,515.7);

	this.item1 = new lib.item1_1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(390.8,515.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc5, new cjs.Rectangle(342.3,467.2,360.7,97), null);


(lib.actMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		cAns = 2;
		maxItem = 2;
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
		function submitAns(e){
			if (userAns==cAns){
				_this.parent.storeCorrect();
			} else {
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
	this.btnSubmit.setTransform(633,515.6,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btnSubmit).wait(1));

	// items
	this.item2 = new lib.item1_2();
	this.item2.name = "item2";
	this.item2.parent = this;
	this.item2.setTransform(502.7,515.7);

	this.item1 = new lib.item1_1();
	this.item1.name = "item1";
	this.item1.parent = this;
	this.item1.setTransform(390.8,515.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.item1},{t:this.item2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.actMc1, new cjs.Rectangle(342.3,467.2,360.7,97), null);


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
(lib.f3d3q3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:104,q2:154,q3:203,q4:253,q5:303,q6:355,q7:405,q8:455,finalFb:505});

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
		var maxQ = 4;
		this.currentQ = 0;
		this.myData = {
			"qNum": 8,
			"userId": cUserId,
			"time": _this.timeTaken,
			"score": _this.cScore,
			"qItem": []
		};
		var qList1 = [1, 2, 3, 4, 5, 6, 7, 8];
		var qItem1 = [{
				"qId": "f3d3q3_1",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_2",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_3",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_4",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_5",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_6",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_7",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
			{
				"qId": "f3d3q3_8",
				"qDomain": 3,
				"qParam": 2,
				"qSkill": 2,
				"qResult": 9
			},
		];
		if (typeof debugMode === "undefined") {
			debugMode = false;
		}
		debugMode = true;
		if (debugMode) {
			//no need shuffle, show all
			this.myData.qItem.push(qItem1[0]);
			this.myData.qItem.push(qItem1[1]);
			this.myData.qItem.push(qItem1[2]);
			this.myData.qItem.push(qItem1[3]);
			this.myData.qItem.push(qItem1[4]);
			this.myData.qItem.push(qItem1[5]);
			this.myData.qItem.push(qItem1[6]);
			this.myData.qItem.push(qItem1[7]);
		} else {
			//shuffle and take only what we need
			this.qList1 = shuffle(this.qList1);
			this.qList1 = this.qList1.splice(0, 3);
			this.myData.qItem.push(qItem1[this.qList1[0]-1]);
			this.myData.qItem.push(qItem1[this.qList1[1]-1]);
			this.myData.qItem.push(qItem1[this.qList1[2]-1]);
			this.myData.qItem.push(qItem1[this.qList1[3]-1]);
		}
		var qLength1 = qList1.length;
		
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
				console.log(_this.myData.qItem[_this.currentQ-1].qId.substring(4));
				_this.gotoAndPlay(_this.myData.qItem[_this.currentQ-1].qId.substring(4));
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
				saveData();
				console.log(_this.myData);
			}
		}
		_this.onTimeEnd = function (){
			_this.myData.time = _this.timeGiven;
			saveData();
		};
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
		this.storeCorrect = function (){
			_this.myData.qItem[_this.currentQ-1].qResult = 1;
			_this.cScore++;
			goNextQ();
		};
		this.storeWrong = function (){
			_this.myData.qItem[_this.currentQ-1].qResult = 0;
			goNextQ();
		};
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
	this.frame_253 = function() {
		playSound("questionAlert");
	}
	this.frame_296 = function() {
		this.stop();
	}
	this.frame_303 = function() {
		playSound("questionAlert");
	}
	this.frame_348 = function() {
		this.stop();
	}
	this.frame_355 = function() {
		playSound("questionAlert");
	}
	this.frame_398 = function() {
		this.stop();
	}
	this.frame_405 = function() {
		playSound("questionAlert");
	}
	this.frame_448 = function() {
		this.stop();
	}
	this.frame_455 = function() {
		playSound("questionAlert");
	}
	this.frame_499 = function() {
		this.stop();
	}
	this.frame_505 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_667 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(39).call(this.frame_43).wait(56).call(this.frame_99).wait(5).call(this.frame_104).wait(45).call(this.frame_149).wait(5).call(this.frame_154).wait(44).call(this.frame_198).wait(5).call(this.frame_203).wait(45).call(this.frame_248).wait(5).call(this.frame_253).wait(43).call(this.frame_296).wait(7).call(this.frame_303).wait(45).call(this.frame_348).wait(7).call(this.frame_355).wait(43).call(this.frame_398).wait(7).call(this.frame_405).wait(43).call(this.frame_448).wait(7).call(this.frame_455).wait(44).call(this.frame_499).wait(6).call(this.frame_505).wait(162).call(this.frame_667).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(104).to({_off:false},0).wait(564));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(505).to({_off:false},0).wait(163));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(705.4,55.9);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(104).to({_off:false},0).wait(564));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,118.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:691.6,y:57.8},16,cjs.Ease.cubicOut).wait(623));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(608,177.2,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(99).to({_off:false},0).to({_off:true},5).wait(564));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453.3,125.4,1,1,0,0,0,-0.6,0.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).to({_off:true},462).wait(163));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(154.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:154.5,y:121.7},17,cjs.Ease.elasticOut).to({_off:true},462).wait(163));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(505).to({graphics:null,x:0,y:0}).wait(163));

	// actMc
	this.act1 = new lib.actMc1();
	this.act1.name = "act1";
	this.act1.parent = this;
	this.act1.setTransform(431,-132);
	this.act1._off = true;

	this.act2 = new lib.actMc1();
	this.act2.name = "act2";
	this.act2.parent = this;
	this.act2.setTransform(427.9,-132);
	this.act2._off = true;

	this.act3 = new lib.actMc1();
	this.act3.name = "act3";
	this.act3.parent = this;
	this.act3.setTransform(427.9,-132);
	this.act3._off = true;

	this.act4 = new lib.actMc1();
	this.act4.name = "act4";
	this.act4.parent = this;
	this.act4.setTransform(427.9,-132);
	this.act4._off = true;

	this.act5 = new lib.actMc5();
	this.act5.name = "act5";
	this.act5.parent = this;
	this.act5.setTransform(427.9,-132);
	this.act5._off = true;

	this.act6 = new lib.actMc5();
	this.act6.name = "act6";
	this.act6.parent = this;
	this.act6.setTransform(427.8,-162.6);
	this.act6._off = true;

	this.act7 = new lib.actMc5();
	this.act7.name = "act7";
	this.act7.parent = this;
	this.act7.setTransform(427.9,-132);
	this.act7._off = true;

	this.act8 = new lib.actMc5();
	this.act8.name = "act8";
	this.act8.parent = this;
	this.act8.setTransform(427.9,-132);
	this.act8._off = true;

	var maskedShapeInstanceList = [this.act1,this.act2,this.act3,this.act4,this.act5,this.act6,this.act7,this.act8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.act1).wait(135).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},5).wait(514));
	this.timeline.addTween(cjs.Tween.get(this.act2).wait(184).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},5).wait(465));
	this.timeline.addTween(cjs.Tween.get(this.act3).wait(234).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},5).wait(415));
	this.timeline.addTween(cjs.Tween.get(this.act4).wait(284).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},5).wait(365));
	this.timeline.addTween(cjs.Tween.get(this.act5).wait(334).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},7).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.act6).wait(384).to({_off:false},0).to({x:-37.9},14,cjs.Ease.backOut).to({_off:true},7).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.act7).wait(434).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},7).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.act8).wait(484).to({_off:false},0).to({x:-55},14,cjs.Ease.backOut).to({_off:true},7).wait(163));

	// q
	this.instance_4 = new lib.mcQ();
	this.instance_4.parent = this;
	this.instance_4.setTransform(343.9,304,0.05,0.05);
	this.instance_4._off = true;

	this.instance_5 = new lib.mcQ2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(343.9,304,0.05,0.05);
	this.instance_5._off = true;

	this.instance_6 = new lib.mcQ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(343.9,304,0.05,0.05);
	this.instance_6._off = true;

	this.instance_7 = new lib.mcQ4();
	this.instance_7.parent = this;
	this.instance_7.setTransform(343.9,304,0.05,0.05);
	this.instance_7._off = true;

	this.instance_8 = new lib.mcQ5();
	this.instance_8.parent = this;
	this.instance_8.setTransform(343.9,304,0.05,0.05);
	this.instance_8._off = true;

	this.instance_9 = new lib.mcQ6();
	this.instance_9.parent = this;
	this.instance_9.setTransform(473.5,266.5,0.05,0.05);
	this.instance_9._off = true;

	this.instance_10 = new lib.mcQ7();
	this.instance_10.parent = this;
	this.instance_10.setTransform(343.9,304,0.05,0.05);
	this.instance_10._off = true;

	this.instance_11 = new lib.mcQ8();
	this.instance_11.parent = this;
	this.instance_11.setTransform(343.9,304,0.05,0.05);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},27).wait(514));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(158).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},27).wait(465));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(208).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},27).wait(415));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(258).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},27).wait(365));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(307).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},30).wait(313));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(360).to({_off:false},0).to({scaleX:1,scaleY:1,x:474.6,y:256.5},18,cjs.Ease.backOut).to({_off:true},27).wait(263));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(410).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},27).wait(213));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(460).to({_off:false},0).to({scaleX:1,scaleY:1,x:363.3,y:286.5},18,cjs.Ease.backOut).to({_off:true},27).wait(163));

	// progress
	this.prog3 = new lib.progress();
	this.prog3.name = "prog3";
	this.prog3.parent = this;
	this.prog3.setTransform(617.8,57.5);

	this.prog4 = new lib.progress();
	this.prog4.name = "prog4";
	this.prog4.parent = this;
	this.prog4.setTransform(630.1,57.5);

	this.prog1 = new lib.progress();
	this.prog1.name = "prog1";
	this.prog1.parent = this;
	this.prog1.setTransform(593.2,57.5);

	this.prog2 = new lib.progress();
	this.prog2.name = "prog2";
	this.prog2.parent = this;
	this.prog2.setTransform(605.5,57.5);

	var maskedShapeInstanceList = [this.prog3,this.prog4,this.prog1,this.prog2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.prog2},{t:this.prog1},{t:this.prog4},{t:this.prog3}]},99).to({state:[]},406).wait(163));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(642));

	// qBg
	this.instance_12 = new lib.workplace("single",4);
	this.instance_12.parent = this;
	this.instance_12.setTransform(406,291.5,0.456,0.456);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).wait(51).to({startPosition:4},0).to({regX:0.3,regY:0.1,scaleX:0.8,scaleY:0.8,x:293.7,y:218.6},23,cjs.Ease.cubicOut).wait(261).to({regX:0.4,regY:0.2,scaleX:1.09,scaleY:1.09,x:287.4,y:107.5,startPosition:5},0).wait(50).to({regX:0.3,regY:0.1,scaleX:0.76,scaleY:0.76,x:293.7,y:218.6,startPosition:4},0).to({_off:true},100).wait(163));

	// bg
	this.instance_13 = new lib.Bitmap3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(668));

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
		{src:"images/f3d3q3/Bitmap22.png?1527073462232", id:"Bitmap22"},
		{src:"images/f3d3q3/Bitmap23.png?1527073462232", id:"Bitmap23"},
		{src:"images/f3d3q3/Bitmap27.png?1527073462232", id:"Bitmap27"},
		{src:"images/f3d3q3/Bitmap29.png?1527073462232", id:"Bitmap29"},
		{src:"images/f3d3q3/Bitmap3.png?1527073462232", id:"Bitmap3"},
		{src:"images/f3d3q3/Bitmap9.png?1527073462232", id:"Bitmap9"},
		{src:"images/f3d3q3/Blend_14.png?1527073462232", id:"Blend_14"},
		{src:"sounds/mdroid_talk.mp3?1527073462232", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1527073462232", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1527073462232", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1527073462232", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1527073462232", id:"submitAns"},
		{src:"sounds/suspense.mp3?1527073462232", id:"suspense"},
		{src:"sounds/timeout.mp3?1527073462232", id:"timeout"}
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