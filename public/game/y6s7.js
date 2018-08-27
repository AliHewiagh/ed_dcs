(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap22 = function() {
	this.initialize(img.Bitmap22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1061,500);


(lib.Bitmap23 = function() {
	this.initialize(img.Bitmap23);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1061,500);


(lib.Bitmap27 = function() {
	this.initialize(img.Bitmap27);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1061,500);


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


(lib.warnaquestion = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(98.3,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_1.setTransform(94.1,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_2.setTransform(86.6,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_3.setTransform(79.2,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_4.setTransform(70.2,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_5.setTransform(62.4,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_6.setTransform(52,27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_7.setTransform(41.2,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_8.setTransform(30.4,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAOAAIAABlQAAAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_9.setTransform(22,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzAuIAAg3QABgNgFgFQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgNAAIAAg3QgBgMgEgGQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAhAQAAgOgCgLIAOAAIABAQQAEgJAHgFQAIgEAKAAQALAAAGAEQAHAEACAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_10.setTransform(8.3,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_11.setTransform(-5.2,27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_12.setTransform(-12.5,25.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_13.setTransform(-20.3,27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_14.setTransform(-31.1,25.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_15.setTransform(-45.8,27.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIArgoIASAAIgsAqIAwAvg");
	this.shape_16.setTransform(-54.6,25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_17.setTransform(-70,27.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_18.setTransform(-80.9,27.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBCIAAhnQAAgOgBgMIANAAIACASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAJAGAGALQAEAKAAAOQAAAOgEAKQgFAKgKAGQgIAGgNAAQgKAAgHgFQgIgEgEgJIAAA4gAgTgsQgIAJABARQgBARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAJg");
	this.shape_19.setTransform(-91.2,29.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_20.setTransform(-102.5,27.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAtIgahGIgZBGIgOAAIghhZIAPAAIAZBIIAbhIIAMAAIAaBIIAahIIAOAAIghBZg");
	this.shape_21.setTransform(-115.5,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_22.setTransform(-129,27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAPAAIAABlQAAAOgIAHQgGAHgMAAIgMgBgAAChDIAAgQIASAAIAAAQg");
	this.shape_23.setTransform(-137.4,27.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_24.setTransform(118.3,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_25.setTransform(107.4,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAVBCIgugrIAAArIgOAAIAAiDIAOAAIAABSIArgoIASAAIgsAqIAwAvg");
	this.shape_26.setTransform(98.4,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKAAAOQAAAOgGAKQgFAKgIAGQgKAGgMAAQgJAAgJgFQgHgEgFgJIAAA4gAgTgsQgHAJgBARQABARAHAIQAHAJAMAAQAOAAAHgJQAHgIAAgRQAAgQgHgJQgIgKgNAAQgMAAgHAJg");
	this.shape_27.setTransform(87.8,3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_28.setTransform(80.1,-0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_29.setTransform(72.2,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGBAIAAhzIgtAAIAAgMIBnAAIAAAMIgtAAIAABzg");
	this.shape_30.setTransform(61.7,-0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_31.setTransform(49.5,4.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_32.setTransform(42.1,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_33.setTransform(32,1.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAKAAIAIABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_34.setTransform(24.4,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWApQgKgGgFgKQgFgLAAgOQAAgNAFgLQAFgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_35.setTransform(15.4,1.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_36.setTransform(0.2,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_37.setTransform(-10.7,1.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_38.setTransform(-21.5,-0.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QAAgLgFgGQgFgGgKAAQgMAAgIAIQgIAGABANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_39.setTransform(-36.5,-1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_40.setTransform(-44,-0.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAJAEAFQAEADAIABQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_41.setTransform(-49.4,-0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_42.setTransform(-57.7,1.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgpBCIAAhnQAAgOgBgMIANAAIACASQADgKAJgFQAIgFAKAAQAMAAAJAGQAJAGAGALQAEAKAAAOQAAAOgEAKQgGAKgJAGQgJAGgMAAQgKAAgHgFQgIgEgFgJIAAA4gAgTgsQgIAJAAARQAAARAIAIQAHAJAMAAQAOAAAHgJQAIgIAAgRQAAgQgIgJQgHgKgOAAQgMAAgHAJg");
	this.shape_43.setTransform(-68,3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgIAOQAHgIABgGIgIAAIAAgTIARAAIAAAOQAAAGgCAGQgDAHgFAGg");
	this.shape_44.setTransform(-80.4,5.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AggA5IACgMIARAHQAHACAJAAQANAAAGgHQAHgHAAgNIAAgWQgFAJgIAFQgHAFgLAAQgLAAgJgGQgKgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAKgGQAJgFALAAQALAAAHAEQAIAFAFAIIAAgPIAOAAIAABZQAAAUgKAKQgLAKgTAAQgVAAgOgJgAgUgsQgHAIAAAQQAAAPAHAIQAIAIANAAQANAAAHgIQAIgIAAgPQAAgQgIgIQgHgJgNAAQgNAAgIAJg");
	this.shape_45.setTransform(-88.2,3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_46.setTransform(-98.7,1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_47.setTransform(-106,-0.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_48.setTransform(-113.5,1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_49.setTransform(-124,1.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAVBCIgtgrIAAArIgPAAIAAiDIAPAAIAABSIAqgoIASAAIgsAqIAwAvg");
	this.shape_50.setTransform(-133,-1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_51.setTransform(124.8,-25.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_52.setTransform(114.3,-25.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_53.setTransform(106.5,-25.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_54.setTransform(96.9,-25.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAaAtIgahGIgZBGIgOAAIghhZIAPAAIAZBIIAbhIIAMAAIAaBIIAahIIAOAAIghBZg");
	this.shape_55.setTransform(84,-25.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_56.setTransform(73.5,-25.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_57.setTransform(64.8,-25.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_58.setTransform(54.7,-27.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AghA5IADgMIAQAHQAIACAIAAQANAAAHgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgVAAQgTAAgQgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIANAAQAMAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgMAAQgNAAgHAJg");
	this.shape_59.setTransform(38.7,-23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_60.setTransform(28.2,-25.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_61.setTransform(17.3,-25.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgDA1QgHgIAAgOIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAKAEADQAEAFAIAAQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_62.setTransform(8.9,-26.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_63.setTransform(0.5,-25.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_64.setTransform(-6.8,-27.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_65.setTransform(-14.1,-27.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAZBCIAAg4QAAgLgGgGQgFgGgLAAQgLAAgIAIQgIAGAAANIAAA0IgOAAIAAiDIAOAAIAAA4QAFgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_66.setTransform(-29.7,-27.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_67.setTransform(-40.7,-25.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_68.setTransform(-48,-27.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AA0AuIAAg3QAAgNgFgFQgFgGgJAAQgLAAgHAIQgHAHAAAOIAAAyIgOAAIAAg3QABgMgFgGQgFgGgJAAQgMAAgHAIQgGAHAAAOIAAAyIgOAAIAAhAQgBgOgBgLIAOAAIABAQQAEgJAIgFQAHgEAKAAQALAAAGAEQAGAEAEAJQAEgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_69.setTransform(-58.1,-25.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_70.setTransform(-71.2,-25.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAPAAIAABlQgBAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_71.setTransform(-79.6,-25.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AghA5IADgMIAQAHQAIACAIAAQANAAAHgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgVAAQgTAAgQgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIANAAQAMAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgMAAQgNAAgHAJg");
	this.shape_72.setTransform(-91,-23.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_73.setTransform(-101.5,-25.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_74.setTransform(-112.4,-25.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_75.setTransform(-119.7,-27.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_76.setTransform(-124,-27.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IAyAAQAUAAALAJQALAIAAARQAAAJgGAIQgFAIgJADQAKACAGAIQAHAIAAAMQAAARgLAJQgMAJgUAAgAghA0IAlAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIglAAgAghgHIAiAAQAPABAGgGQAIgGAAgLQAAgWgdAAIgiAAg");
	this.shape_77.setTransform(-132,-27.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_78.setTransform(26.2,26.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_79.setTransform(14,27.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QABgLgGgGQgFgGgKAAQgMAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_80.setTransform(0,25.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_81.setTransform(-8.6,26.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_82.setTransform(-29,25.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_83.setTransform(-40.4,27.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_84.setTransform(-81.3,27.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QABgLgGgGQgFgGgLAAQgLAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_85.setTransform(-126.8,25.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_86.setTransform(-135.4,26.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_87.setTransform(99.7,1.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgoA2QANgDAGgEQAHgFAEgKIAEgIIgnhZIAQAAIAdBKIAfhKIAPAAIgqBiQgGAPgKAIQgKAHgPADg");
	this.shape_88.setTransform(79.2,3.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_89.setTransform(50.2,1.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgYAuIAAhAQABgOgCgLIAOAAIACAQQADgJAHgFQAHgEAKAAIAIABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_90.setTransform(43.2,1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_91.setTransform(17.7,1.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_92.setTransform(3.7,1.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AggA5IACgMIARAHQAHACAJAAQANAAAGgHQAHgHgBgNIAAgWQgDAJgJAFQgHAFgLAAQgLAAgJgGQgKgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAKgGQAJgFALAAQALAAAHAEQAJAFADAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgUAAQgUAAgPgJgAgUgsQgHAIAAAQQAAAPAHAIQAIAIAMAAQAOAAAHgIQAIgIgBgPQABgQgIgIQgHgJgOAAQgMAAgIAJg");
	this.shape_93.setTransform(-6.9,3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgXAuIAAhAQAAgOgCgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_94.setTransform(-36.1,1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgVApQgKgGgGgKQgFgLAAgOQAAgNAFgLQAGgKAKgGQAJgGAMAAQAMAAALAGQAJAGAGAKQAFALAAANQAAAOgFALQgGAKgJAGQgLAGgMAAQgMAAgJgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_95.setTransform(-45.1,1.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_96.setTransform(-96.7,1.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAJAEAFQAEADAIABQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_97.setTransform(-104.9,-0.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QABgLgGgGQgFgGgKAAQgMAAgIAIQgHAGAAANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_98.setTransform(-117.4,-1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgIAPQAHgJABgGIgIAAIAAgTIARAAIAAAOQAAAGgCAGQgDAHgFAFg");
	this.shape_99.setTransform(93,-20.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAaAtIgahGIgZBGIgOAAIghhZIAPAAIAZBIIAbhIIAMAAIAaBIIAahIIAOAAIghBZg");
	this.shape_100.setTransform(83.1,-25.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgWApQgJgGgFgKQgGgLAAgOQAAgNAGgLQAFgKAJgGQAKgGAMAAQANAAAJAGQAKAGAFAKQAGALAAANQAAAOgGALQgFAKgKAGQgJAGgNAAQgMAAgKgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_101.setTransform(70.2,-25.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_102.setTransform(51.5,-25.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgoA2QANgDAGgEQAHgFAEgKIAEgIIgnhZIAQAAIAdBKIAfhKIAPAAIgqBiQgGAPgKAIQgKAHgPADg");
	this.shape_103.setTransform(41.8,-23.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgJBDIAAhOIgSAAIAAgMIASAAIAAgOQgBgOAIgHQAFgIAOABQAFgBAGACIAAAMIgJgBQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAAMIgWAAIAABOg");
	this.shape_104.setTransform(29.3,-27.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgVApQgLgGgEgKQgGgLAAgOQAAgNAGgLQAEgKALgGQAJgGAMAAQAMAAALAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgLAGgMAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_105.setTransform(21.2,-25.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_106.setTransform(8.7,-25.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_107.setTransform(0,-25.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AA0AuIAAg3QgBgNgEgFQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAg3QABgMgFgGQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgPAAIAAhAQAAgOgBgLIAOAAIACAQQADgJAIgFQAHgEAKAAQALAAAHAEQAGAEADAJQAEgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_108.setTransform(-23.7,-25.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_109.setTransform(-62.1,-25.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QABgLgGgGQgFgGgLAAQgLAAgIAIQgHAGgBANIAAA0IgOAAIAAiDIAOAAIAAA4QAFgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_110.setTransform(-72.2,-27.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgDA1QgHgIAAgOIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAKAEADQAEAFAIAAQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_111.setTransform(-91.8,-26.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgWA5QgOgHgHgPQgIgPAAgUQAAgUAIgOQAHgPAOgHQANgJARABQAOAAALADQAKAFAJAIIgGALQgJgIgJgDQgJgEgLAAQgUAAgMAOQgLAOAAAYQAAAZALAOQAMAOAUAAQALgBAJgDQAJgDAJgIIAGALQgJAJgKAEQgLADgOAAQgRAAgNgIg");
	this.shape_112.setTransform(-132.1,-27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68,p:{x:-48}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65,p:{x:-14.1}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62,p:{x:8.9}},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58,p:{x:54.7,y:-27.6}},{t:this.shape_57,p:{x:64.8,y:-25.6}},{t:this.shape_56},{t:this.shape_55,p:{x:84,y:-25.5}},{t:this.shape_54},{t:this.shape_53,p:{x:106.5,y:-25.6}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-98.7,y:1}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42,p:{x:-57.7,y:1.2}},{t:this.shape_41,p:{x:-49.4}},{t:this.shape_40,p:{x:-44}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36,p:{x:0.2,y:1}},{t:this.shape_35,p:{x:15.4,y:1.1}},{t:this.shape_34},{t:this.shape_33,p:{x:32,y:1.1}},{t:this.shape_32,p:{x:42.1}},{t:this.shape_31,p:{x:49.5}},{t:this.shape_30,p:{x:61.7}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:87.8}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:118.3}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:-115.5}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:-80.9,y:27.7}},{t:this.shape_17,p:{x:-70}},{t:this.shape_16},{t:this.shape_15,p:{x:-45.8}},{t:this.shape_14},{t:this.shape_13,p:{x:-20.3,y:27.7}},{t:this.shape_12,p:{x:-12.5,y:25.7}},{t:this.shape_11,p:{x:-5.2,y:27.7}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:30.4}},{t:this.shape_7,p:{x:41.2,y:25.7}},{t:this.shape_6,p:{x:52,y:27.8}},{t:this.shape_5,p:{x:62.4}},{t:this.shape_4,p:{x:70.2}},{t:this.shape_3},{t:this.shape_2,p:{x:86.6}},{t:this.shape_1,p:{x:94.1}},{t:this.shape,p:{x:98.3}}]}).to({state:[{t:this.shape_112},{t:this.shape_35,p:{x:-120.9,y:-25.6}},{t:this.shape_42,p:{x:-110.6,y:-25.5}},{t:this.shape_46,p:{x:-100.2,y:-25.6}},{t:this.shape_111},{t:this.shape_62,p:{x:-80.8}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_36,p:{x:-47.3,y:-25.6}},{t:this.shape_6,p:{x:-36.8,y:-25.5}},{t:this.shape_108},{t:this.shape_65,p:{x:-10.1}},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_68,p:{x:58.5}},{t:this.shape_12,p:{x:62.8,y:-27.6}},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_55,p:{x:-130.6,y:1.1}},{t:this.shape_98},{t:this.shape_40,p:{x:-110}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_18,p:{x:-82,y:1.1}},{t:this.shape_32,p:{x:-71.1}},{t:this.shape_7,p:{x:-60.6,y:-0.9}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_13,p:{x:-28.3,y:1.1}},{t:this.shape_24,p:{x:-17.4}},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_41,p:{x:25.2}},{t:this.shape_11,p:{x:33.6,y:1.1}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_31,p:{x:56.8}},{t:this.shape_30,p:{x:69}},{t:this.shape_88},{t:this.shape_27,p:{x:89.6}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_57,p:{x:-116.6,y:27.7}},{t:this.shape_8,p:{x:-101.9}},{t:this.shape_17,p:{x:-91}},{t:this.shape_84},{t:this.shape_21,p:{x:-68.9}},{t:this.shape_33,p:{x:-56.2,y:27.7}},{t:this.shape_53,p:{x:-47.4,y:27.7}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_2,p:{x:-21.6}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_1,p:{x:7.4}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_5,p:{x:34.6}},{t:this.shape_58,p:{x:46,y:25.7}},{t:this.shape_4,p:{x:53.2}},{t:this.shape_15,p:{x:60.3}},{t:this.shape,p:{x:67.3}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.4,-42.6,276.8,81.9);


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
	this.myTxt = new cjs.Text("Total up the number of stars  \nand update the tables.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 269;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.8,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2JAAMAsTAAA");
	this.shape.setTransform(-109.8,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A0yFNIAAlDIilADIClh7IAAjZMAsTAAAIAAKU");
	this.shape_1.setTransform(-118.5,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A03FKIAAlCIikACICkh6IAAjZMAsTAAAIAAKTg");
	this.shape_2.setTransform(-118.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn2, new cjs.Rectangle(-269.5,-29.2,303.5,69), null);


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
	this.myTxt = new cjs.Text("Count the number of stars and\ncomplete the table.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 273;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-239.8,-21.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A2JAAMAsTAAA");
	this.shape.setTransform(-109.8,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A0yFNIAAlDIilADIClh7IAAjZMAsTAAAIAAKU");
	this.shape_1.setTransform(-118.5,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("A03FKIAAlCIikACICkh6IAAjZMAsTAAAIAAKTg");
	this.shape_2.setTransform(-118.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-29.2,304.5,69), null);


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
	this.myTxt = new cjs.Text("Jumlahkan bilangan bintang \ndan kemas kini jadual.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 245;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235.9,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A0lAAMApLAAA");
	this.shape.setTransform(-119.8,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AzOFNIAAlDIilADIClh7IAAjZMApLAAAIAAKU");
	this.shape_1.setTransform(-128.5,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AzTFKIAAlCIikACICkh6IAAjZMApLAAAIAAKTg");
	this.shape_2.setTransform(-128.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm2, new cjs.Rectangle(-269.5,-29.2,283.5,69), null);


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
	this.myTxt = new cjs.Text("Bilang jumlah bintang dan\nlengkapkan jadual.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 238;
	this.myTxt.parent = this;
	this.myTxt.setTransform(-235.9,-22.1);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A0lAAMApLAAA");
	this.shape.setTransform(-119.8,37.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("AzOFNIAAlDIilADIClh7IAAjZMApLAAAIAAKU");
	this.shape_1.setTransform(-128.5,4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AzTFKIAAlCIikACICkh6IAAjZMApLAAAIAAKTg");
	this.shape_2.setTransform(-128.1,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1, new cjs.Rectangle(-269.5,-29.2,283.5,69), null);


(lib.SpaceStar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap27();
	this.instance.parent = this;
	this.instance.setTransform(-465.4,-225.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceStar3, new cjs.Rectangle(-465.4,-225.2,1061,500), null);


(lib.SpaceStar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap23();
	this.instance.parent = this;
	this.instance.setTransform(-465.4,-225.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceStar2, new cjs.Rectangle(-465.4,-225.2,1061,500), null);


(lib.SpaceStar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap22();
	this.instance.parent = this;
	this.instance.setTransform(-465.4,-225.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceStar1, new cjs.Rectangle(-465.4,-225.2,1061,500), null);


(lib.schedule2 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AASApIAAgvQAAgKgDgEQgEgFgIABQgIAAgFAFQgGAGAAAKIAAAsIgUAAIAAg4QAAgNgBgLIATAAIABAOQAEgHAHgFQAGgDAJAAQAdAAAAAhIAAAwg");
	this.shape.setTransform(-63.7,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAfQgLgLABgUQAAgLAEgKQAFgJAJgGQAJgFAKAAQARAAAKALQAJALAAASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgFAEgJADQgJADgIAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_1.setTransform(-72.8,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgBgLIATAAIABAPQADgIAFgEQAHgEAJAAIAIABIAAASQgGgCgGAAQgJAAgGAGQgEAGgBAKIAAAqg");
	this.shape_2.setTransform(-79.9,53.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA0QgMgIgGgNQgHgNAAgSQAAgRAGgNQAHgNAMgIQANgGAPAAQARAAAMAGQAMAIAHANQAGANAAARQAAASgGANQgHANgMAIQgMAGgRABQgPgBgNgGgAgYgeQgIAKAAAUQAAAUAIALQAJALAPAAQAQAAAJgLQAJgLAAgUQAAgUgJgKQgJgLgQAAQgPAAgJALg");
	this.shape_3.setTransform(-89.8,51.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARA7IAAgxQABgJgEgEQgEgEgHAAQgJAAgFAGQgGAEAAAKIAAAuIgUAAIAAh1IAUAAIAAAxQAEgHAIgEQAFgDAIAAQAdAAABAgIAAAyg");
	this.shape_4.setTransform(-62.2,17.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_5.setTransform(-69.2,17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgFAvQgHgIAAgPIAAgkIgPAAIAAgPIAPAAIAAgUIATgGIAAAaIAVAAIAAAPIgVAAIAAAjQAAAPANAAIAIgBIAAAPQgFACgHAAQgOAAgHgHg");
	this.shape_6.setTransform(-74.4,18.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQAAAJAFAEQADAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgIAAQgdAAAAghg");
	this.shape_7.setTransform(-82.1,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgrA5IAAhxIAxAAQARAAALAJQAKAJAAAPQAAAPgKAIQgLAKgRgBIgdAAIAAAwgAgXgGIAaAAQALABAFgFQAGgEAAgJQAAgIgGgFQgFgEgLAAIgaAAg");
	this.shape_8.setTransform(-91.8,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgIAAQgdAAAAghg");
	this.shape_9.setTransform(-66.7,-14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgBgLIATAAIABAPQADgIAFgEQAHgEAJAAIAIABIAAASQgGgCgGAAQgJAAgGAGQgEAGgBAKIAAAqg");
	this.shape_10.setTransform(-74.1,-14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_11.setTransform(-79.9,-16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgsA5IAAhxIAxAAQARAAAKAIQAKAIAAAOQAAAJgEAHQgFAGgIADQAKACAFAHQAFAIAAAKQAAAOgKAJQgKAIgTAAgAgYApIAcAAQALAAAFgEQAGgEAAgIQAAgJgGgFQgFgEgLAAIgcAAgAgYgIIAZAAQAWAAAAgQQAAgIgGgEQgFgEgLAAIgZAAg");
	this.shape_12.setTransform(-87.2,-15.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggA0IADgQQAPAIAOAAQAVAAAAgVIAAgQQgDAGgHAEQgHAEgIAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgGQAIgEALAAQAIAAAHADQAHAEADAHIAAgMIAUAAIAABNQAAATgKAKQgLAJgUABQgRgBgPgHgAgOgkQgGAGAAAMQAAALAGAHQAFAFAJABQAKgBAGgFQAFgHAAgLQAAgMgFgGQgGgHgKAAQgJAAgFAHg");
	this.shape_13.setTransform(106.8,-47.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_14.setTransform(97.1,-49.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_15.setTransform(87.2,-49.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAvQgHgIAAgPIAAgkIgPAAIAAgPIAPAAIAAgUIATgGIAAAaIAVAAIAAAPIgVAAIAAAjQAAAPANAAIAIgCIAAAQQgFACgHAAQgOAAgHgHg");
	this.shape_16.setTransform(79.3,-50.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_17.setTransform(71.5,-49.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_18.setTransform(64.6,-51.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKA3QgHgEgDgGIAAANIgUAAIAAh1IAUAAIAAAyQAEgIAHgDQAGgEAIAAQALAAAIAGQAIAEAEAKQAFAIAAANQAAAMgFAKQgEAJgIAGQgIAGgLgBQgIAAgHgEgAgPgBQgFAFAAANQAAANAFAHQAGAHAJAAQAKgBAFgGQAGgIAAgMQAAgNgGgFQgFgHgKAAQgJAAgGAHg");
	this.shape_19.setTransform(57.8,-51);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AARA7IAAgxQABgJgEgEQgEgEgHAAQgIAAgGAGQgGAEAAAKIAAAuIgUAAIAAh1IAUAAIAAAxQAEgHAIgEQAFgDAIAAQAdAAAAAgIAAAyg");
	this.shape_20.setTransform(43.5,-51.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_21.setTransform(33.4,-49.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_22.setTransform(26.6,-51.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAqAqIAAgxQAAgJgDgEQgDgFgIAAQgIABgEAFQgFAGAAALIAAAsIgTAAIAAgxQAAgJgDgEQgEgFgHAAQgIABgFAFQgFAGAAALIAAAsIgUAAIAAg6QAAgMgBgKIATAAIACAMQADgGAHgFQAGgDAIAAQATAAAFAPQADgHAIgFQAHgDAJAAQANgBAHAJQAHAIAAARIAAAxg");
	this.shape_23.setTransform(17.3,-49.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQABAJAEAEQADAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_24.setTransform(5.3,-49.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWBGIAAgQIAMABQAHAAADgEQACgEAAgKIAAhsIAVAAIAABsQAAATgHAIQgHAIgQAAIgPgCg");
	this.shape_25.setTransform(-3,-49.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_26.setTransform(-53.4,-49.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_27.setTransform(-63,-49.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIATAAIACAPQADgIAGgEQAGgEAIAAIAIABIAAASQgFgCgGAAQgKAAgFAGQgFAGABAKIAAAqg");
	this.shape_28.setTransform(-70.4,-49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_29.setTransform(-79.2,-49.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAdA5IgdhRIgcBRIgRAAIgohxIAVAAIAdBUIAdhUIAOAAIAdBUIAdhUIAUAAIgpBxg");
	this.shape_30.setTransform(-92.8,-50.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZAfQgLgLAAgUQAAgLAEgKQAGgJAJgGQAIgFAKAAQASAAAJALQAJALAAASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgGAEgIADQgIADgJAAQgTAAgLgLgAgKgWQgFAFgBAJIAkAAQgBgJgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_31.setTransform(-53.2,53.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AggAzIADgPQAPAIAOAAQAVAAAAgVIAAgRQgDAHgHAEQgHAEgIAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgGQAIgEALAAQAIAAAHADQAHAEADAHIAAgNIAUAAIAABOQAAATgKAKQgLAKgUAAQgRAAgPgJgAgOgkQgGAGAAAMQAAALAGAHQAFAFAJAAQAKAAAGgFQAFgHAAgLQAAgMgFgGQgGgHgKABQgJgBgFAHg");
	this.shape_32.setTransform(-62.8,55.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAfQgLgLABgUQAAgLAEgKQAGgJAJgGQAIgFAKAAQARAAAKALQAJALAAASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgFAEgJADQgIADgJAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_33.setTransform(-58.5,19.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AASA7IAAgxQgBgJgDgEQgDgEgJAAQgIAAgFAGQgGAEAAAKIAAAuIgTAAIAAh1IATAAIAAAxQAFgHAGgEQAGgDAJAAQAcAAAAAgIAAAyg");
	this.shape_34.setTransform(-78,17.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgZAfQgLgLAAgUQAAgLAEgKQAFgJAKgGQAIgFALAAQARAAAJALQAKALAAASIAAACIg3AAQAAANAGAHQAGAGALAAQANAAALgJIAGAOQgGAEgIADQgJADgIAAQgTAAgLgLgAgKgWQgFAFgBAJIAkAAQgBgJgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_35.setTransform(-65,-14.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_36.setTransform(-74.2,-14.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AghAgIAFgOQANAJAQAAQAHAAAEgCQAEgCAAgFQAAgDgDgDQgCgCgHgBIgMgDQgWgFAAgRQAAgHAEgGQAEgGAHgDQAIgDAJAAQAIAAAIADQAJACAGAFIgGAOQgNgJgMAAQgGAAgEACQgEADAAAEQAAAEACACQADACAFABIANAEQAMACAGAFQAFAGAAAJQAAALgJAGQgJAHgPAAQgVAAgNgKg");
	this.shape_37.setTransform(111.9,-49.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgBgLIATAAIABAPQADgIAGgEQAGgEAJAAIAHABIAAASQgFgCgGAAQgKAAgFAGQgEAGAAAKIAAAqg");
	this.shape_38.setTransform(105.3,-49.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AghAgIAFgOQANAJAQAAQAHAAAEgCQAEgCAAgFQAAgDgDgDQgCgCgHgBIgMgDQgWgFAAgRQAAgHAEgGQAEgGAHgDQAIgDAJAAQAIAAAIADQAJACAGAFIgGAOQgNgJgMAAQgGAAgEACQgEADAAAEQAAAEACACQADACAFABIANAEQAMACAGAFQAFAGAAAJQAAALgJAGQgJAHgPAAQgVAAgNgKg");
	this.shape_39.setTransform(81.7,-49.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgMA7IAAhBIgPAAIAAgPIAPAAIAAgHQAAgPAHgIQAHgHANAAQAIAAAFACIAAAPIgIgBQgNAAAAAPIAAAGIASAAIAAAPIgSAAIAABBg");
	this.shape_40.setTransform(70.4,-51.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgUAlQgKgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAKgFQAJgFALAAQAMAAAKAFQAIAFAGAKQAFAJAAAMQAAANgFAJQgGAKgIAFQgKAFgMAAQgLAAgJgFgAgOgTQgGAHAAAMQAAANAGAHQAFAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgFAHg");
	this.shape_41.setTransform(62.8,-49.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIATAAIACAPQADgIAGgEQAGgEAIAAIAIABIAAASQgFgCgFAAQgLAAgFAGQgFAGABAKIAAAqg");
	this.shape_42.setTransform(51,-49.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAfQgLgLAAgUQAAgLAEgKQAGgJAJgGQAIgFALAAQARAAAJALQAKALgBASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgGAEgIADQgIADgJAAQgTAAgLgLgAgKgWQgFAFgBAJIAkAAQgBgJgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_43.setTransform(43.1,-49.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAqAqIAAgxQAAgJgDgEQgEgFgGAAQgJABgFAFQgEAGAAALIAAAsIgTAAIAAgxQAAgJgEgEQgDgFgHAAQgIABgFAFQgFAGAAALIAAAsIgTAAIAAg6QAAgMgCgKIATAAIACAMQADgGAHgFQAGgDAJAAQARAAAGAPQADgHAIgFQAHgDAJAAQAOgBAGAJQAHAIAAARIAAAxg");
	this.shape_44.setTransform(21.5,-49.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAHAAQAJAAAFgGQAFgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_45.setTransform(9.6,-49.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAgA5Ig8hPIAABPIgTAAIAAhxIAPAAIA9BPIAAhPIATAAIAABxg");
	this.shape_46.setTransform(-1.2,-50.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIAUAAIABAPQADgIAGgEQAGgEAIAAIAIABIAAASQgFgCgGAAQgKAAgFAGQgFAGABAKIAAAqg");
	this.shape_47.setTransform(-52.7,-49.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQAAAJAFAEQADAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgDAHgHADQgGAEgIAAQgdAAAAghg");
	this.shape_48.setTransform(-61.1,-49.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgUAlQgKgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAKgFQAIgFAMAAQAMAAAJAFQAJAFAGAKQAFAJAAAMQAAANgFAJQgGAKgJAFQgJAFgMAAQgMAAgIgFgAgPgTQgFAHAAAMQAAANAFAHQAGAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_49.setTransform(-70.6,-49.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_50.setTransform(-77.5,-51.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAKgFALAAQAMAAAKAFQAIAFAGAKQAFAJAAAMQAAANgFAJQgGAKgIAFQgKAFgMAAQgLAAgKgFgAgOgTQgGAHAAAMQAAANAGAHQAFAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgFAHg");
	this.shape_51.setTransform(-84.2,-49.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgUAzQgNgHgGgNQgHgNAAgSQAAgRAHgNQAGgNANgHQAMgIARAAQALAAAKAEQALAEAGAGIgHAQQgHgHgIgDQgIgDgIAAQgQAAgIALQgKALABATQgBAUAKALQAIALAQAAQAIAAAIgDQAIgDAHgGIAHAPQgGAGgLAEQgKADgLAAQgRABgMgIg");
	this.shape_52.setTransform(-94.4,-50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30,p:{x:-92.8,y:-50.9}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:26.6,y:-51.1}},{t:this.shape_21,p:{x:33.4}},{t:this.shape_20},{t:this.shape_19,p:{x:57.8}},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16,p:{x:79.3}},{t:this.shape_15,p:{x:87.2,y:-49.3}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12,p:{x:-87.2}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-74.4}},{t:this.shape_5,p:{x:-69.2}},{t:this.shape_4},{t:this.shape_3,p:{x:-89.8}},{t:this.shape_2,p:{x:-79.9}},{t:this.shape_1},{t:this.shape,p:{x:-63.7}}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_19,p:{x:33.9}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_16,p:{x:88.7}},{t:this.shape_21,p:{x:96.5}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_12,p:{x:-88.5}},{t:this.shape_22,p:{x:-81.1,y:-16}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_30,p:{x:-91.8,y:18.1}},{t:this.shape_34},{t:this.shape_5,p:{x:-71.1}},{t:this.shape_6,p:{x:-66.1}},{t:this.shape_33},{t:this.shape_3,p:{x:-99.7}},{t:this.shape_2,p:{x:-89.8}},{t:this.shape_15,p:{x:-82.4,y:53.5}},{t:this.shape,p:{x:-72.5}},{t:this.shape_32},{t:this.shape_31}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.9,-64.6,218.1,128.7);


(lib.schedule1 = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQABAJAEAEQADAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape.setTransform(-56.8,53.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAGgJAJgGQAKgFALAAQAJAAAIADQAIACAFAFIgGAOIgLgGQgGgCgFAAQgKAAgGAHQgGAGAAAMQAAANAGAHQAGAGAKAAQAFAAAGgCIALgGIAGAOQgFAFgJACQgIADgJAAQgLAAgKgFg");
	this.shape_1.setTransform(-65.4,53.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgIAAQgdAAAAghg");
	this.shape_2.setTransform(-74.4,53.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgKA3QgHgDgDgHIAAANIgUAAIAAh1IAUAAIAAAyQAEgIAHgDQAGgEAIAAQALAAAIAGQAIAEAEAKQAFAJAAAMQAAAMgFAKQgEAKgIAFQgIAGgLAAQgIAAgHgFgAgPgBQgFAGAAAMQAAANAFAHQAGAGAJABQAKAAAFgIQAGgGAAgNQAAgMgGgGQgFgHgKAAQgJAAgGAHg");
	this.shape_3.setTransform(-83.9,51.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgdAsQgMgPAAgbQAAgRAGgOQAFgOALgHQALgIANABQAKgBAKAEQAJADAIAHIgHAPQgPgMgOAAQgMAAgHALQgHALAAATQAEgGAHgFQAIgEAIAAQAKAAAIAFQAIAEAEAHQAFAJAAAKQAAALgFAJQgFAJgJAEQgJAFgLABQgUAAgMgPgAgLAGQgGAGAAAJQAAAKAGAFQAGAGAHAAQAJAAAGgGQAFgFAAgKQAAgJgFgGQgGgFgJgBQgIABgFAFg");
	this.shape_4.setTransform(-98.2,51.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQABAJAEAEQADAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_5.setTransform(-56.8,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAGgJAJgGQAKgFALAAQAJAAAIADQAIACAFAFIgGAOIgLgGQgGgCgFAAQgKAAgGAHQgGAGAAAMQAAANAGAHQAGAGAKAAQAFAAAGgCIALgGIAGAOQgFAFgJACQgIADgJAAQgLAAgKgFg");
	this.shape_6.setTransform(-65.4,19.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgIAAQgdAAAAghg");
	this.shape_7.setTransform(-74.4,19.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKA3QgHgEgDgGIAAANIgUAAIAAh1IAUAAIAAAyQAEgIAHgDQAGgEAIAAQALAAAIAGQAIAEAEAKQAFAJAAAMQAAAMgFAKQgEAJgIAGQgIAGgLAAQgIgBgHgEgAgPgBQgFAFAAANQAAANAFAHQAGAGAJABQAKAAAFgHQAGgIAAgMQAAgNgGgFQgFgHgKAAQgJAAgGAHg");
	this.shape_8.setTransform(-83.9,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWA2QgKgEgHgGIAGgPQAQAMARAAQAJAAAGgFQAFgGAAgKQAAgJgFgGQgGgFgJAAQgGAAgGACQgHADgEAEIgNAAIAAhCIBHAAIAAAQIgzAAIAAAfQAKgGAKAAQALAAAIAFQAIAFAEAHQAFAIAAALQAAALgFAJQgFAIgKAFQgKAFgLAAQgKAAgLgEg");
	this.shape_9.setTransform(-98,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQABAJAEAEQADAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_10.setTransform(-56.8,-14.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgQAlQgJgFgFgKQgFgJAAgNQAAgLAFgKQAGgJAJgGQAKgFALAAQAJAAAIADQAIACAFAFIgGAOIgLgGQgGgCgFAAQgKAAgGAHQgGAGAAAMQAAANAGAHQAGAGAKAAQAFAAAGgCIALgGIAGAOQgFAFgJACQgIADgJAAQgLAAgKgFg");
	this.shape_11.setTransform(-65.4,-14.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgIAAQgdAAAAghg");
	this.shape_12.setTransform(-74.4,-14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKA3QgHgEgDgGIAAANIgUAAIAAh1IAUAAIAAAyQAEgIAHgDQAGgEAIAAQALAAAIAGQAIAEAEAKQAFAIAAANQAAAMgFAKQgEAJgIAGQgIAGgLgBQgIAAgHgEgAgPgBQgFAFAAANQAAANAFAHQAGAHAJAAQAKgBAFgGQAGgIAAgMQAAgNgGgFQgFgHgKAAQgJAAgGAHg");
	this.shape_13.setTransform(-83.9,-15.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAHA5IAAgWIgxAAIAAgQIA0hLIARAAIAABKIAQAAIAAARIgQAAIAAAWgAgWASIAdAAIAAgqg");
	this.shape_14.setTransform(-98.1,-15.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggA0IADgQQAPAIAOAAQAVAAAAgVIAAgQQgDAGgHAEQgHAEgIAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgGQAIgEALAAQAIAAAHADQAHAEADAHIAAgMIAUAAIAABNQAAATgKAKQgLAJgUABQgRgBgPgHgAgOgkQgGAGAAAMQAAALAGAHQAFAFAJABQAKgBAGgFQAFgHAAgLQAAgMgFgGQgGgHgKAAQgJAAgFAHg");
	this.shape_15.setTransform(106.8,-47.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_16.setTransform(97.1,-49.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_17.setTransform(87.2,-49.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAvQgHgIAAgPIAAgkIgPAAIAAgPIAPAAIAAgUIATgGIAAAaIAVAAIAAAPIgVAAIAAAjQAAAPANAAIAIgCIAAAQQgFACgHAAQgOAAgHgHg");
	this.shape_18.setTransform(79.3,-50.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_19.setTransform(71.5,-49.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_20.setTransform(64.6,-51.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKA3QgHgEgDgGIAAANIgUAAIAAh1IAUAAIAAAyQAEgIAHgDQAGgEAIAAQALAAAIAGQAIAEAEAKQAFAIAAANQAAAMgFAKQgEAJgIAGQgIAGgLgBQgIAAgHgEgAgPgBQgFAFAAANQAAANAFAHQAGAHAJAAQAKgBAFgGQAGgIAAgMQAAgNgGgFQgFgHgKAAQgJAAgGAHg");
	this.shape_21.setTransform(57.8,-51);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AARA7IAAgxQABgJgEgEQgEgEgHAAQgIAAgGAGQgGAEAAAKIAAAuIgUAAIAAh1IAUAAIAAAxQAEgHAIgEQAFgDAIAAQAdAAAAAgIAAAyg");
	this.shape_22.setTransform(43.5,-51.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_23.setTransform(33.4,-49.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_24.setTransform(26.6,-51.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAqAqIAAgxQAAgJgDgEQgDgFgIAAQgIABgEAFQgFAGAAALIAAAsIgTAAIAAgxQAAgJgDgEQgEgFgHAAQgIABgFAFQgFAGAAALIAAAsIgUAAIAAg6QAAgMgBgKIATAAIACAMQADgGAHgFQAGgDAIAAQATAAAFAPQADgHAIgFQAHgDAJAAQANgBAHAJQAHAIAAARIAAAxg");
	this.shape_25.setTransform(17.3,-49.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQABAJAEAEQADAEAHAAQAIAAAGgGQAFgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgEAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_26.setTransform(5.3,-49.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgWBGIAAgQIAMABQAHAAADgEQACgEAAgKIAAhsIAVAAIAABsQAAATgHAIQgHAIgQAAIgPgCg");
	this.shape_27.setTransform(-3,-49.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AghAgIAFgOQANAJAQAAQAHAAAEgCQAEgCAAgFQAAgDgDgDQgCgCgHgBIgMgDQgWgFAAgRQAAgHAEgGQAEgGAHgDQAIgDAJAAQAIAAAIADQAJACAGAFIgGAOQgNgJgMAAQgGAAgEACQgEADAAAEQAAAEACACQADACAFABIANAEQAMACAGAFQAFAGAAAJQAAALgJAGQgJAHgPAAQgVAAgNgKg");
	this.shape_28.setTransform(-65,-49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_29.setTransform(-71.1,-51.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_30.setTransform(-78,-49.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaAfQgLgLAAgUQAAgLAGgKQAEgJAJgGQAJgFAKAAQASAAAJALQAJALAAASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAAMgJIAFAOQgGAEgIADQgJADgIAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_31.setTransform(-87.1,-49.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWBGIAAgQIAMABQAIAAACgEQACgEAAgKIAAhsIAVAAIAABsQAAATgHAIQgHAIgQAAIgPgCg");
	this.shape_32.setTransform(-95.1,-49.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAvQgHgIAAgPIAAgkIgPAAIAAgPIAPAAIAAgUIATgGIAAAaIAVAAIAAAPIgVAAIAAAjQAAAOANABIAIgBIAAAPQgFACgHAAQgOAAgHgHg");
	this.shape_33.setTransform(-50.3,52.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AASApIAAgvQAAgKgDgEQgEgFgIABQgIAAgFAFQgGAGAAAKIAAAsIgUAAIAAg4QAAgNgBgLIATAAIABAOQAEgHAHgFQAGgDAJAAQAdAAAAAhIAAAwg");
	this.shape_34.setTransform(-58.1,53.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAJgFAMAAQAMAAAJAFQAKAFAFAKQAFAJAAAMQAAANgFAJQgFAKgKAFQgJAFgMAAQgMAAgJgFgAgPgTQgFAHAAAMQAAANAFAHQAGAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_35.setTransform(-71.8,53.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgnA7IAAhcQAAgMgCgLIATAAIACAOQADgHAHgEQAIgFAIAAQALAAAHAGQAJAFAEAKQAFAJgBANQABAMgFAJQgEAJgJAFQgHAGgLAAQgIAAgGgEQgHgEgFgHIAAAwgAgOgjQgGAHAAANQAAAMAGAGQAGAHAJAAQAJAAAGgHQAFgGAAgMQAAgNgFgHQgGgHgJAAQgJAAgGAHg");
	this.shape_36.setTransform(-81.3,55.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgXAIIAAgPIAvAAIAAAPg");
	this.shape_37.setTransform(-89.9,53.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgFAvQgHgIAAgPIAAgkIgPAAIAAgPIAPAAIAAgUIATgGIAAAaIAVAAIAAAPIgVAAIAAAjQAAAPANAAIAIgBIAAAPQgFACgHAAQgOAAgHgHg");
	this.shape_38.setTransform(-50.3,18.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAJgFAMAAQAMAAAJAFQAKAFAFAKQAFAJAAAMQAAANgFAJQgFAKgKAFQgJAFgMAAQgMAAgJgFgAgPgTQgFAHAAAMQAAANAFAHQAGAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_39.setTransform(-71.8,19.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgnA7IAAhcQAAgMgCgLIATAAIACAOQADgHAHgEQAIgFAIAAQALAAAHAGQAJAFAEAKQAFAJgBANQABAMgFAJQgEAJgJAFQgHAGgLAAQgIAAgGgEQgHgEgFgHIAAAwgAgOgjQgGAHAAANQAAAMAGAGQAGAHAJAAQAJAAAGgHQAFgGAAgMQAAgNgFgHQgGgHgJAAQgJAAgGAHg");
	this.shape_40.setTransform(-81.3,21.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgXAIIAAgPIAvAAIAAAPg");
	this.shape_41.setTransform(-89.9,19.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_42.setTransform(-65,-16);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAJgFAMAAQAMAAAJAFQAKAFAFAKQAFAJAAAMQAAANgFAJQgFAKgKAFQgJAFgMAAQgMAAgJgFgAgPgTQgFAHAAAMQAAANAFAHQAGAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_43.setTransform(-71.8,-14.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgnA7IAAhcQAAgMgCgLIATAAIACAOQADgHAHgEQAIgFAIAAQALAAAHAGQAJAFAEAKQAFAJgBANQABAMgFAJQgEAJgJAFQgHAGgLAAQgIAAgGgEQgHgEgFgHIAAAwgAgOgjQgGAHAAANQAAAMAGAGQAGAHAJAAQAJAAAGgHQAFgGAAgMQAAgNgFgHQgGgHgJAAQgJAAgGAHg");
	this.shape_44.setTransform(-81.3,-12.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgXAIIAAgPIAvAAIAAAPg");
	this.shape_45.setTransform(-89.9,-14.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIATAAIACAPQADgIAFgEQAHgEAIAAIAJABIAAASQgGgCgFAAQgKAAgGAGQgFAGAAAKIAAAqg");
	this.shape_46.setTransform(105.3,-49.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAvQgHgIAAgPIAAgkIgPAAIAAgPIAPAAIAAgUIATgGIAAAaIAVAAIAAAPIgVAAIAAAjQAAAPANAAIAIgCIAAAQQgFACgHAAQgOAAgHgHg");
	this.shape_47.setTransform(88.6,-50.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AghAgIAFgOQANAJAQAAQAHAAAEgCQAEgCAAgFQAAgDgDgDQgCgCgHgBIgMgDQgWgFAAgRQAAgHAEgGQAEgGAHgDQAIgDAJAAQAIAAAIADQAJACAGAFIgGAOQgNgJgMAAQgGAAgEACQgEADAAAEQAAAEACACQADACAFABIANAEQAMACAGAFQAFAGAAAJQAAALgJAGQgJAHgPAAQgVAAgNgKg");
	this.shape_48.setTransform(81.7,-49.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgMA7IAAhBIgPAAIAAgPIAPAAIAAgHQAAgPAIgIQAFgHAPAAQAHAAAFACIAAAPIgIgBQgNAAAAAPIAAAGIASAAIAAAPIgSAAIAABBg");
	this.shape_49.setTransform(70.4,-51.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAJgFAMAAQAMAAAJAFQAKAFAFAKQAFAJAAAMQAAANgFAJQgFAKgKAFQgJAFgMAAQgMAAgJgFgAgOgTQgGAHAAAMQAAANAGAHQAFAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgFAHg");
	this.shape_50.setTransform(62.8,-49.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgBgLIATAAIABAPQADgIAFgEQAHgEAJAAIAIABIAAASQgGgCgGAAQgJAAgGAGQgEAGgBAKIAAAqg");
	this.shape_51.setTransform(51,-49.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgaAfQgKgLgBgUQAAgLAGgKQAFgJAIgGQAJgFAKAAQASAAAJALQAKALgBASIAAACIg2AAQABANAFAHQAGAGALAAQANAAAMgJIAFAOQgGAEgIADQgIADgJAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_52.setTransform(43,-49.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAqAqIAAgxQAAgJgDgEQgEgFgHAAQgIABgEAFQgFAGAAALIAAAsIgTAAIAAgxQAAgJgEgEQgDgFgHAAQgIABgFAFQgFAGAAALIAAAsIgUAAIAAg6QABgMgCgKIATAAIABAMQAEgGAGgFQAHgDAIAAQASAAAGAPQADgHAIgFQAHgDAJAAQAOgBAGAJQAHAIAAARIAAAxg");
	this.shape_53.setTransform(21.5,-49.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQAAAJAFAEQADAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgEAHgHADQgGAEgIAAQgdAAAAghg");
	this.shape_54.setTransform(9.5,-49.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAhA5Ig9hPIAABPIgTAAIAAhxIAPAAIA8BPIAAhPIAUAAIAABxg");
	this.shape_55.setTransform(-1.3,-50.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgaAfQgKgLgBgUQAAgLAGgKQAFgJAIgGQAJgFALAAQAQAAAKALQAKALAAASIAAACIg3AAQABANAFAHQAGAGALAAQANAAAMgJIAFAOQgGAEgIADQgIADgJAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_56.setTransform(-64.4,-49.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgnA7IAAhcQAAgMgBgLIATAAIABAOQADgHAHgEQAIgFAIAAQAKAAAJAGQAHAFAFAKQAEAJABANQgBAMgEAJQgFAJgHAFQgJAGgKAAQgIAAgHgEQgGgEgEgHIAAAwgAgOgjQgFAHAAANQAAAMAFAGQAFAHAJAAQALAAAFgHQAGgGAAgMQAAgNgGgHQgFgHgLAAQgJAAgFAHg");
	this.shape_57.setTransform(-73.6,-47.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgmArQAMgCAFgEQAGgEADgIIADgGIgihNIAVAAIAWA6IAYg6IAUAAIglBWQgHAPgJAHQgKAGgPADg");
	this.shape_58.setTransform(-83.1,-47.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgJA5IAAhgIglAAIAAgRIBdAAIAAARIglAAIAABgg");
	this.shape_59.setTransform(-92.4,-50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:-71.1,y:-51.1}},{t:this.shape_28,p:{x:-65}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:64.6,y:-51.1}},{t:this.shape_19,p:{x:71.5,y:-49.3}},{t:this.shape_18,p:{x:79.3,y:-50.5}},{t:this.shape_17,p:{x:87.2}},{t:this.shape_16,p:{x:97.1,y:-49.3}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-83.9,y:-15.9}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_13,p:{x:33.9,y:-51}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_17,p:{x:96.5}},{t:this.shape_46},{t:this.shape_28,p:{x:111.9}},{t:this.shape_14},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_19,p:{x:-58.1,y:-14.2}},{t:this.shape_18,p:{x:-50.3,y:-15.4}},{t:this.shape_9},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_29,p:{x:-65,y:17.9}},{t:this.shape_16,p:{x:-58.1,y:19.6}},{t:this.shape_38},{t:this.shape_4},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_20,p:{x:-65,y:51.7}},{t:this.shape_34},{t:this.shape_33}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-64.6,219.2,128.7);


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


(lib.bucuquestion = function(mode,startPosition,loop) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape.setTransform(19.9,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_1.setTransform(15.7,25.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_2.setTransform(8.2,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_3.setTransform(0.8,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_4.setTransform(-8.2,25.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_5.setTransform(-16,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_6.setTransform(-26.4,27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_7.setTransform(-37.2,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_8.setTransform(-48,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAOAAIAABlQAAAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_9.setTransform(-56.4,27.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAzAuIAAg3QABgNgFgFQgFgGgJAAQgMAAgGAIQgHAHAAAOIAAAyIgNAAIAAg3QgBgMgEgGQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgPAAIAAhAQAAgOgBgLIAOAAIABAQQAEgJAHgFQAIgEAKAAQALAAAGAEQAHAEACAJQAFgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_10.setTransform(-70.1,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_11.setTransform(-83.6,27.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_12.setTransform(-90.9,25.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_13.setTransform(-98.7,27.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_14.setTransform(-109.5,25.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_15.setTransform(-124.2,27.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAVBCIgtgrIAAArIgPAAIAAiDIAPAAIAABSIAqgoIASAAIgsAqIAwAvg");
	this.shape_16.setTransform(-133,25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_17.setTransform(93.7,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_18.setTransform(82.8,1.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgpBCIAAhnQAAgOgBgMIANAAIACASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAJAGAGALQAEAKAAAOQAAAOgEAKQgGAKgJAGQgIAGgNAAQgJAAgIgFQgIgEgFgJIAAA4gAgTgsQgIAJAAARQAAARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAJg");
	this.shape_19.setTransform(72.5,3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_20.setTransform(61.2,1.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAaAtIgahGIgZBGIgOAAIghhZIAPAAIAZBIIAbhIIAMAAIAaBIIAahIIAOAAIghBZg");
	this.shape_21.setTransform(48.2,1.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_22.setTransform(34.7,1.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAPAAIAABlQAAAOgIAHQgHAHgLAAIgMgBgAAChDIAAgQIASAAIAAAQg");
	this.shape_23.setTransform(26.3,1.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_24.setTransform(15.3,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_25.setTransform(4.4,1.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAVBCIgtgrIAAArIgPAAIAAiDIAPAAIAABSIApgoIATAAIgtAqIAxAvg");
	this.shape_26.setTransform(-4.6,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgpBCIAAhnQAAgOgBgMIANAAIACASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAJAGAGALQAEAKAAAOQAAAOgEAKQgFAKgKAGQgIAGgNAAQgKAAgHgFQgIgEgEgJIAAA4gAgTgsQgIAJABARQgBARAIAIQAHAJANAAQANAAAHgJQAIgIAAgRQAAgQgIgJQgHgKgNAAQgNAAgHAJg");
	this.shape_27.setTransform(-15.2,3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_28.setTransform(-22.9,-0.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_29.setTransform(-30.8,1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGBAIAAhzIgtAAIAAgMIBnAAIAAAMIgtAAIAABzg");
	this.shape_30.setTransform(-41.3,-0.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_31.setTransform(-53.5,4.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgfAxQgNgQAAgeQAAgVAGgPQAGgQALgHQALgJAOABQALAAALADQAKAFAIAIIgFALQgJgIgIgDQgJgEgIAAQgQAAgJAPQgJAOAAAaIAAADQAEgKAJgGQAKgFALgBQALABAJAFQAKAFAFAIQAFAJAAAMQAAAMgGAJQgFAKgJAFQgKAGgMgBQgWAAgMgQgAgRAEQgIAIAAANQAAAMAIAIQAIAIAMAAQAMAAAIgIQAHgIAAgMQAAgNgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_32.setTransform(-60.9,-0.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_33.setTransform(-76.4,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_34.setTransform(-87.3,1.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgWA9QgKgGgFgLQgFgKAAgOQAAgOAFgKQAFgKAJgGQAKgGAMAAQAJAAAIAFQAIAEAEAJIAAg6IAPAAIAACEIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgMAAgJgGgAgTgFQgIAIAAARQAAAQAIAKQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgRgHgIQgHgJgOAAQgMAAgHAJg");
	this.shape_35.setTransform(-98.1,-0.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgXA8QgLgEgIgHIAGgLQASAPASAAQANgBAHgHQAIgIAAgNQAAgNgHgIQgIgGgNgBQgRABgLAOIgKAAIAAhKIBMAAIAAAMIg9AAIAAAtQAKgKAQAAQAMAAAJAFQAJAFAFAIQAFAKAAALQAAANgGAJQgFAKgKAEQgKAGgMAAQgLAAgMgFg");
	this.shape_36.setTransform(-113.1,-0.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgIAOQAHgIABgGIgIAAIAAgTIARAAIAAAOQAAAGgCAGQgDAHgFAGg");
	this.shape_37.setTransform(-125.5,5.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AANBAIAAgcIg7AAIAAgLIA9hYIAMAAIAABXIAUAAIAAAMIgUAAIAAAcgAgeAYIArAAIAAg+g");
	this.shape_38.setTransform(-132.8,-0.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_39.setTransform(111.4,-25.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgQApQgKgGgGgKQgFgLAAgOQAAgNAFgKQAGgLAKgGQAKgGAMAAQAJAAAJADQAJADAFAGIgFALQgGgGgHgCQgGgDgHAAQgNAAgIAKQgIAJAAAPQAAARAIAJQAIAJANAAQAHAAAGgDQAHgCAGgGIAFALQgGAGgJADQgIADgKAAQgMAAgJgGg");
	this.shape_40.setTransform(102,-25.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_41.setTransform(92.1,-25.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_42.setTransform(81.8,-27.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIABAQQAEgJAGgFQAIgEAJAAIAJABIgBANIgJgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_43.setTransform(73.5,-25.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_44.setTransform(64.8,-25.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_45.setTransform(54.7,-27.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AghA5IADgMIAQAHQAIACAIAAQANAAAHgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgVAAQgTAAgQgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIANAAQAMAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgMAAQgNAAgHAJg");
	this.shape_46.setTransform(38.7,-23.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_47.setTransform(28.2,-25.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_48.setTransform(17.3,-25.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgDA1QgHgIAAgOIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAKAEADQAEAFAIAAQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_49.setTransform(8.9,-26.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_50.setTransform(0.5,-25.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_51.setTransform(-6.8,-27.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgPA+QgIgEgEgJIAAARIgPAAIAAiEIAPAAIAAA6QAEgJAIgEQAIgFAJAAQAMAAAJAGQAKAGAFAKQAFAKAAAOQAAAOgFAKQgFALgKAGQgJAGgMAAQgJAAgIgFgAgUgFQgHAIAAARQAAARAHAJQAHAJANAAQANAAAHgJQAIgKAAgQQAAgRgIgIQgHgJgNAAQgNAAgHAJg");
	this.shape_52.setTransform(-14.1,-27.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAZBCIAAg4QAAgLgGgGQgFgGgLAAQgLAAgIAIQgIAGAAANIAAA0IgOAAIAAiDIAOAAIAAA4QAFgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_53.setTransform(-29.7,-27.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_54.setTransform(-40.7,-25.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_55.setTransform(-48,-27.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AA0AuIAAg3QAAgNgFgFQgFgGgJAAQgLAAgHAIQgHAHAAAOIAAAyIgOAAIAAg3QABgMgFgGQgFgGgJAAQgMAAgHAIQgGAHAAAOIAAAyIgOAAIAAhAQgBgOgBgLIAOAAIABAQQAEgJAIgFQAHgEAKAAQALAAAGAEQAGAEAEAJQAEgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_56.setTransform(-58.1,-25.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgdAlQgIgJAAgSIAAg3IAOAAIAAA3QAAAMAFAGQAFAGALAAQALAAAHgIQAHgIAAgNIAAgyIAPAAIAABaIgOAAIAAgQQgEAIgIAFQgIAEgJAAQgQAAgIgJg");
	this.shape_57.setTransform(-71.2,-25.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgTBTIAAgNIAJACQAOAAAAgSIAAhjIAPAAIAABlQgBAOgGAHQgIAHgLAAIgMgBgAADhDIAAgQIARAAIAAAQg");
	this.shape_58.setTransform(-79.6,-25.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AghA5IADgMIAQAHQAIACAIAAQANAAAHgHQAGgHAAgNIAAgWQgEAJgHAFQgJAFgJAAQgMAAgKgGQgJgGgFgKQgFgJAAgNQAAgOAFgKQAFgKAJgGQAKgFAMAAQAJAAAJAEQAHAFAEAIIAAgPIAPAAIAABZQAAAUgKAKQgKAKgVAAQgTAAgQgJgAgTgsQgIAIAAAQQAAAPAIAIQAHAIANAAQAMAAAIgIQAHgIAAgPQAAgQgHgIQgIgJgMAAQgNAAgHAJg");
	this.shape_59.setTransform(-91,-23.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAZAuIAAg3QAAgMgFgGQgFgGgLAAQgLAAgIAIQgIAHAAANIAAAzIgOAAIAAhAQAAgOgCgLIAOAAIACAQQAEgJAIgFQAIgEAKAAQAhAAAAAjIAAA4g");
	this.shape_60.setTransform(-101.5,-25.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgXApQgJgGgFgKQgFgLAAgOQAAgNAFgKQAFgLAKgGQAJgGAMAAQAJAAAIAFQAIAEAEAJIAAgQIAPAAIAABaIgPAAIAAgRQgEAJgIAEQgIAFgJAAQgNAAgJgGgAgTgYQgIAJAAAPQAAARAIAJQAHAJAMAAQAOAAAHgJQAHgJAAgRQAAgQgHgJQgHgJgOAAQgMAAgHAKg");
	this.shape_61.setTransform(-112.4,-25.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgGBCIAAiDIANAAIAACDg");
	this.shape_62.setTransform(-119.7,-27.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgGBBIAAhaIANAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_63.setTransform(-124,-27.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IAyAAQAUAAALAJQALAIAAARQAAAJgGAIQgFAIgJADQAKACAGAIQAHAIAAAMQAAARgLAJQgMAJgUAAgAghA0IAlAAQAPAAAHgGQAHgGAAgLQAAgYgdAAIglAAgAghgHIAiAAQAPABAGgGQAIgGAAgLQAAgWgdAAIgiAAg");
	this.shape_64.setTransform(-132,-27.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_65.setTransform(-81,26.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_66.setTransform(-93.3,27.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgQIARAAIAAAQg");
	this.shape_67.setTransform(-99.8,25.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAZBCIAAg4QAAgLgGgGQgFgGgLAAQgLAAgIAIQgHAGgBANIAAA0IgOAAIAAiDIAOAAIAAA4QAFgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_68.setTransform(-107.2,25.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAwQAAAKAEAFQAEADAIAAQAFABAFgCIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_69.setTransform(-115.8,26.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_70.setTransform(123.2,1.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAGgFQAIgEAKAAIAIABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_71.setTransform(116.2,1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_72.setTransform(82.3,1.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_73.setTransform(47,1.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QAAgLgFgGQgFgGgKAAQgMAAgIAIQgIAGABANIAAA0IgPAAIAAiDIAPAAIAAA4QAEgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_74.setTransform(36.8,-1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAJAEAFQAEADAIABQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_75.setTransform(28.2,-0.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_76.setTransform(15.6,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgoA2QANgDAGgEQAHgFAEgKIAEgIIgnhZIAQAAIAdBKIAfhKIAPAAIgqBiQgGAPgKAIQgKAHgPADg");
	this.shape_77.setTransform(-4.9,3.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_78.setTransform(-33.9,1.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgXAuIAAhAQgBgOgBgLIAOAAIABAQQAEgJAHgFQAHgEAJAAIAJABIgBANIgJgBQgNAAgGAIQgGAIAAAMIAAAyg");
	this.shape_79.setTransform(-40.9,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAJAEAFQAEADAIABQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_80.setTransform(-58.9,-0.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgjAjIAFgLQAHAGAIADQAIACAIAAQAKAAAFgDQAGgEAAgGQAAgGgEgDQgDgDgJgCIgOgEQgLgCgGgGQgHgGAAgJQAAgMAKgIQAJgHAPAAQAKAAAIADQAIADAGAGIgFALQgMgLgPAAQgJAAgFAEQgFADAAAHQAAAGADADQADADAIACIAOAEQANACAGAFQAGAHAAAJQAAAMgKAHQgJAHgRAAQgVAAgOgMg");
	this.shape_81.setTransform(-66.4,1.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_82.setTransform(-91.2,1.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgDA1QgHgHAAgPIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAJAEAFQAEADAIABQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_83.setTransform(-99.4,-0.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgHBBIAAhaIAOAAIAABagAgIgvIAAgRIARAAIAAARg");
	this.shape_84.setTransform(-115.1,-0.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgWApQgJgGgFgKQgGgLAAgOQAAgNAGgLQAFgKAJgGQAKgGAMAAQANAAAJAGQAKAGAFAKQAGALAAANQAAAOgGALQgFAKgKAGQgJAGgNAAQgMAAgKgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_85.setTransform(-122.4,1.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgpBCIAAhnQAAgOgCgMIAPAAIABASQAEgKAIgFQAIgFAKAAQAMAAAJAGQAKAGAEALQAGAKAAAOQAAAOgGAKQgFAKgIAGQgJAGgNAAQgJAAgJgFQgHgEgEgJIAAA4gAgTgsQgHAJAAARQAAARAHAIQAHAJAMAAQAOAAAHgJQAHgIAAgRQAAgQgHgJQgIgKgNAAQgMAAgHAJg");
	this.shape_86.setTransform(-132.8,3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgfAxQgNgQAAgeQAAgVAGgPQAGgQALgHQALgJAOABQALAAALADQAKAFAIAIIgFALQgJgIgIgDQgJgEgIAAQgQAAgJAPQgJAPAAAZIAAADQAEgKAJgFQAKgHALAAQALAAAJAGQAKAFAFAIQAFAKAAALQAAAMgGAJQgFAKgJAFQgKAGgMgBQgWAAgMgQgAgRAEQgIAIAAANQAAAMAIAIQAIAIAMAAQAMAAAIgIQAHgHAAgNQAAgNgIgIQgHgHgNAAQgLAAgIAHg");
	this.shape_87.setTransform(114.5,-27.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgXA8QgLgEgIgHIAGgLQASAOASAAQANAAAHgHQAIgIAAgNQAAgNgHgIQgIgHgNAAQgRABgLAOIgKAAIAAhLIBMAAIAAANIg9AAIAAAuQAKgLAQAAQAMAAAJAFQAJAFAFAJQAFAJAAALQAAANgGAJQgFAKgKAEQgKAGgMAAQgLAAgMgFg");
	this.shape_88.setTransform(62.4,-27.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgIAPQAHgJABgGIgIAAIAAgTIARAAIAAAOQAAAGgCAGQgDAHgFAFg");
	this.shape_89.setTransform(49.9,-20.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AAMBAIAAgcIg5AAIAAgLIA8hYIAMAAIAABXIATAAIAAAMIgTAAIAAAcgAgfAYIArAAIAAg+g");
	this.shape_90.setTransform(42.6,-27.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgJBDIAAhOIgSAAIAAgMIASAAIAAgOQgBgOAIgHQAFgIAOABQAFgBAGACIAAAMIgJgBQgHAAgEAEQgEAEAAAKIAAAMIAWAAIAAAMIgWAAIAABOg");
	this.shape_91.setTransform(29.3,-27.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgVApQgLgGgEgKQgGgLAAgOQAAgNAGgLQAEgKALgGQAJgGAMAAQAMAAALAGQAJAGAFAKQAGALAAANQAAAOgGALQgFAKgJAGQgLAGgMAAQgMAAgJgGgAgTgZQgIAJAAAQQAAARAHAJQAIAJAMAAQAOAAAGgJQAIgJAAgRQAAgQgIgJQgHgJgNAAQgNAAgGAJg");
	this.shape_92.setTransform(21.2,-25.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgYAuIAAhAQAAgOgBgLIAOAAIACAQQADgJAGgFQAIgEAJAAIAJABIAAANIgKgBQgNAAgFAIQgHAIAAAMIAAAyg");
	this.shape_93.setTransform(8.7,-25.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_94.setTransform(0,-25.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AA0AuIAAg3QgBgNgEgFQgEgGgKAAQgMAAgGAIQgHAHAAAOIAAAyIgOAAIAAg3QABgMgFgGQgEgGgKAAQgMAAgHAIQgGAHAAAOIAAAyIgPAAIAAhAQAAgOgBgLIAOAAIACAQQADgJAIgFQAHgEAKAAQALAAAHAEQAGAEADAJQAEgIAIgFQAIgEAKAAQAeAAAAAjIAAA4g");
	this.shape_95.setTransform(-23.7,-25.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgcAjQgMgNAAgWQAAgNAGgKQAFgLAKgGQAKgGALAAQASAAAKAMQALAMAAAUIAAACIhCAAQAAARAIAJQAIAJAOAAQAQAAANgLIAFALQgGAGgJADQgKADgJAAQgUAAgNgMgAgPgcQgHAHgCAMIAzAAQgBgMgGgHQgGgHgMAAQgKAAgHAHg");
	this.shape_96.setTransform(-62.1,-25.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAYBCIAAg4QABgLgGgGQgFgGgLAAQgLAAgIAIQgHAGgBANIAAA0IgOAAIAAiDIAOAAIAAA4QAFgIAIgEQAIgEAJAAQAhAAAAAiIAAA5g");
	this.shape_97.setTransform(-72.2,-27.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgDA1QgHgIAAgOIAAgyIgSAAIAAgMIASAAIAAgWIANgGIAAAcIAaAAIAAAMIgaAAIAAAxQAAAKAEADQAEAFAIAAQAFgBAFgBIAAAMQgGACgHAAQgNAAgGgHg");
	this.shape_98.setTransform(-91.8,-26.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgWApQgKgGgFgKQgFgLAAgOQAAgNAFgLQAFgKAKgGQAKgGAMAAQAMAAAKAGQAKAGAGAKQAFALAAANQAAAOgFALQgGAKgKAGQgKAGgMAAQgMAAgKgGgAgUgZQgHAJAAAQQAAARAHAJQAHAJANAAQANAAAIgJQAHgJAAgRQAAgQgHgJQgIgJgNAAQgMAAgIAJg");
	this.shape_99.setTransform(-120.9,-25.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgWA5QgOgHgHgPQgIgPAAgUQAAgUAIgOQAHgPAOgHQANgJARABQAOAAALADQAKAFAJAIIgGALQgJgIgJgDQgJgEgLAAQgUAAgMAOQgLAOAAAYQAAAZALAOQAMAOAUAAQALgBAJgDQAJgDAJgIIAGALQgJAJgKAEQgLADgOAAQgRAAgNgIg");
	this.shape_100.setTransform(-132.1,-27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50,p:{x:0.5}},{t:this.shape_49,p:{x:8.9}},{t:this.shape_48},{t:this.shape_47,p:{x:28.2}},{t:this.shape_46},{t:this.shape_45,p:{x:54.7}},{t:this.shape_44,p:{x:64.8,y:-25.6}},{t:this.shape_43},{t:this.shape_42,p:{x:81.8,y:-27.6}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39,p:{x:111.4}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33,p:{x:-76.4,y:1}},{t:this.shape_32},{t:this.shape_31,p:{x:-53.5}},{t:this.shape_30,p:{x:-41.3}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{x:-15.2}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:15.3}},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{x:48.2}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17,p:{x:93.7}},{t:this.shape_16},{t:this.shape_15,p:{x:-124.2}},{t:this.shape_14,p:{x:-109.5,y:25.7}},{t:this.shape_13,p:{x:-98.7,y:27.7}},{t:this.shape_12},{t:this.shape_11,p:{x:-83.6,y:27.7}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:-48,y:27.7}},{t:this.shape_7,p:{x:-37.2,y:25.7}},{t:this.shape_6,p:{x:-26.4,y:27.8}},{t:this.shape_5,p:{x:-16}},{t:this.shape_4,p:{x:-8.2}},{t:this.shape_3},{t:this.shape_2,p:{x:8.2}},{t:this.shape_1,p:{x:15.7}},{t:this.shape,p:{x:19.9}}]}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_39,p:{x:-110.6}},{t:this.shape_50,p:{x:-100.2}},{t:this.shape_98},{t:this.shape_49,p:{x:-80.8}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_47,p:{x:-47.3}},{t:this.shape_6,p:{x:-36.8,y:-25.5}},{t:this.shape_95},{t:this.shape_45,p:{x:-10.1}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_13,p:{x:77.3,y:-25.6}},{t:this.shape_33,p:{x:88.2,y:-25.6}},{t:this.shape_14,p:{x:98.7,y:-27.6}},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_24,p:{x:-107.8}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_7,p:{x:-81.2,y:-0.9}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_11,p:{x:-50.5,y:1.1}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_31,p:{x:-27.3}},{t:this.shape_30,p:{x:-15.1}},{t:this.shape_77},{t:this.shape_27,p:{x:5.5}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_8,p:{x:61.7,y:1.1}},{t:this.shape_17,p:{x:72.6}},{t:this.shape_72},{t:this.shape_21,p:{x:94.7}},{t:this.shape_44,p:{x:107.4,y:1.1}},{t:this.shape_71},{t:this.shape_70},{t:this.shape_1,p:{x:-136.2}},{t:this.shape_2,p:{x:-128.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_5,p:{x:-72.6}},{t:this.shape_42,p:{x:-61.3,y:25.7}},{t:this.shape_4,p:{x:-54}},{t:this.shape_15,p:{x:-46.9}},{t:this.shape,p:{x:-40}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140.4,-42.6,261.7,81.9);


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


(lib.arrownavigate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E2B30").s().p("AgnCcIAAgLIk1AAQgyAAAAgyIAAinQAAgyAyAAIE1AAIAAgcQAAhbBdAPIEtCyQBVA7hQA5IkpCdQgVAEgQAAQhBAAAAhJg");
	this.shape.setTransform(0,-3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#782124").s().p("AgnCcIAAgLIk1AAQgyAAAAgyIAAinQAAgyAyAAIE1AAIAAgcQAAhbBdAPIFZCjIAAA+QAAAogmAcIgBABIkpCdQgUAEgRAAQhBAAAAhJg");
	this.shape_1.setTransform(0,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#782124").s().p("AgnCcIAAgLIk1AAQgyAAAAgyIAAinQAAgyAyAAIE1AAIAAgcQAAhbBdAPIFZDRIAAAQQAAAogmAcIgBABIkpCdQgUAEgRAAQhBAAAAhJg");
	this.shape_2.setTransform(0,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:-3.5}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{y:1.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.8,-26.4,79.8,52.9);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-35.4,283.5,68.5);


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
p.nominalBounds = new cjs.Rectangle(-257.9,-35.4,283.5,68.5);


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


(lib.btnArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.arrownavigate("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.553,0.692,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(5,0,0,3).p("ADHBHIikBtQg4APAAg/IAAgIIirAAQgbAAAAgiIAAikQAAgjAbAAICrAAIAAgTQAAg/AzAKICmB8QAXATABATIAAAqQABAcgWAUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AgVCEIAAgIIirAAQgbAAAAgiIAAikQAAgjAbAAICrAAIAAgTQAAg/AzAKICmB8QAXATABATIAAAqQABAcgWAUIikBtQgLADgJAAQgkAAAAgzg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22,-18.3,44.1,36.6);


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


(lib.Q3a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var cAns = ["3", "3", "2", "2", "3", "3"];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
				
		var fontSize = 18;
		var maxBlanks = 6;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "1");
			this["txtAns"+i].setAttribute("autocomplete", "false");
		}
		this.txtAns1.focus();
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
		this.cScore = 0;
		this._userAns = "";
		function checkAns(e){
			_this._userAns = _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value + ", " + _this.txtAns5.value + ", " + _this.txtAns6.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value.replace(/\s+/g,'')==cAns[i-1]){
					_this.cScore++;
				}
				//_this["txtAns"+i].value = "";
			}
			//console.log(_this.cScore);
			this.txtAns1.focus();
			_this.play();
			_this.parent.play();
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}
	this.frame_5 = function() {
		this.stop();
		var _this = this;
		function onTweenDone(e){
			_this.mouseChildren = true;
			_this.play();
		}
		this.mouseChildren = false;
		createjs.Tween.get(this.mcStars).to({x:35}, 500, createjs.Ease.quadOut).call(onTweenDone);
	}
	this.frame_10 = function() {
		this.stop();
		var cAns = ["6", "6", "5", "5", "6", "6"];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
				
		var fontSize = 18;
		var maxBlanks = 6;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "1");
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
		function checkAns2(e){
			_this._userAns += ", " + _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value + ", " + _this.txtAns5.value + ", " + _this.txtAns6.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value.replace(/\s+/g,'')==cAns[i-1]){
					_this.cScore++;
				}
			}
			console.log(_this.cScore);
			//scale the score
			var scaledScore = Math.round(_this.cScore/12*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_this._userAns, scaledScore);
		}
		this.btnSubmit2.addEventListener("click", checkAns2);
		function onTweenNextDone(){
			_this.mouseChildren = true;
			_this.btnPrev.visible = true;
		}
		function viewNext(e){
			_this.mouseChildren = false;
			_this.btnNext.visible = false;
			createjs.Tween.get(_this.mcStars).to({x:35}, 500, createjs.Ease.quadOut).call(onTweenNextDone);
		}
		this.btnNext.addEventListener("click", viewNext);
		this.btnNext.visible = false;
		function onTweenPrevDone(){
			_this.mouseChildren = true;
			_this.btnNext.visible = true;
		}
		function viewPrev(e){
			_this.mouseChildren = false;
			_this.btnPrev.visible = false;
			createjs.Tween.get(_this.mcStars).to({x:560}, 500, createjs.Ease.quadOut).call(onTweenPrevDone);
		}
		this.btnPrev.addEventListener("click", viewPrev);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(5).call(this.frame_10).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(695.9,646.8,0.85,0.85,0,0,0,0.2,0.6);

	this.btnSubmit2 = new lib.mcBtnCont();
	this.btnSubmit2.name = "btnSubmit2";
	this.btnSubmit2.parent = this;
	this.btnSubmit2.setTransform(695.9,646.8,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnSubmit}]},4).to({state:[]},1).to({state:[{t:this.btnSubmit2}]},5).wait(1));

	// btnArrow
	this.btnPrev = new lib.btnArrow();
	this.btnPrev.name = "btnPrev";
	this.btnPrev.parent = this;
	this.btnPrev.setTransform(101.5,439.7,1,1,0,0,180);
	new cjs.ButtonHelper(this.btnPrev, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.btnNext = new lib.btnArrow();
	this.btnNext.name = "btnNext";
	this.btnNext.parent = this;
	this.btnNext.setTransform(592.2,439.7);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnNext},{t:this.btnPrev}]},10).wait(1));

	// txt
	this.txtAns6 = new lib.an_TextInput({'id': 'txtAns6', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns6.setTransform(820,593.1,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns5 = new lib.an_TextInput({'id': 'txtAns5', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns5.setTransform(820,559.4,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns4 = new lib.an_TextInput({'id': 'txtAns4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns4.setTransform(820,525.8,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns3 = new lib.an_TextInput({'id': 'txtAns3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns3.setTransform(820,361.2,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns2 = new lib.an_TextInput({'id': 'txtAns2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns2.setTransform(820,327.6,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(820,293.9,1.443,1.523,0,0,0,50.1,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAns6}]}).wait(11));

	// txt
	this.instance = new lib.bucuquestion();
	this.instance.parent = this;
	this.instance.setTransform(770.4,198.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// txt
	this.instance_1 = new lib.warnaquestion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(770.4,426.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Layer 3
	this.instance_2 = new lib.schedule1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(766.1,310.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E2B30").s().p("AnVH2QhvAAAAhuIAAt+ISJAAIAAPsg");
	this.shape.setTransform(689.8,327.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#782124").s().p("ApECxIAAjyQAAhvBvAAIQaAAIAAFhg");
	this.shape_1.setTransform(689.8,259.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ArSCxIAAlhIU2AAQBuAAAABvIAADyg");
	this.shape_2.setTransform(820.1,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// Layer 5
	this.instance_3 = new lib.schedule2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(766.1,541.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#376FDC").s().p("AnVH2QhvAAAAhvIAAt8ISJAAIAAPrg");
	this.shape_3.setTransform(689.8,559);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A54A7").s().p("ApECxIAAjyQAAhvBvAAIQaAAIAAFhg");
	this.shape_4.setTransform(689.8,491.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ArSCxIAAlhIU2AAQBuAAAABvIAADyg");
	this.shape_5.setTransform(820.1,491.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglFAiIQg4gCgBg9MAAAhCSQABg8A4gCMBKYAAAQArAEAAA6MAAABCSQAAA7grAEg");
	mask.setTransform(347,450);

	// Layer 1
	this.mcStars = new lib.SpaceStar3();
	this.mcStars.name = "mcStars";
	this.mcStars.parent = this;
	this.mcStars.setTransform(560,437.6);

	var maskedShapeInstanceList = [this.mcStars];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mcStars).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104,156.1,802.8,512.4);


(lib.Q2a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var cAns = ["4", "3", "2", "4", "2", "3"];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
				
		var fontSize = 18;
		var maxBlanks = 6;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "1");
			this["txtAns"+i].setAttribute("autocomplete", "false");
		}
		this.txtAns1.focus();
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
		this.cScore = 0;
		this._userAns = "";
		function checkAns(e){
			_this._userAns = _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value + ", " + _this.txtAns5.value + ", " + _this.txtAns6.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value.replace(/\s+/g,'')==cAns[i-1]){
					_this.cScore++;
				}
				//_this["txtAns"+i].value = "";
			}
			//console.log(_this.cScore);
			this.txtAns1.focus();
			_this.play();
			_this.parent.play();
			//scale the score
			//var scaledScore = Math.round(cScore/maxBlanks*40)/10+1;
			//console.log(scaledScore);
			//_this.parent.sendScore(_userAns, scaledScore);
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}
	this.frame_5 = function() {
		this.stop();
		var _this = this;
		function onTweenDone(e){
			_this.mouseChildren = true;
			_this.play();
		}
		this.mouseChildren = false;
		createjs.Tween.get(this.mcStars).to({x:35}, 500, createjs.Ease.quadOut).call(onTweenDone);
	}
	this.frame_10 = function() {
		this.stop();
		var cAns = ["7", "7", "5", "7", "5", "7"];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
				
		var fontSize = 18;
		var maxBlanks = 6;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "1");
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
		function checkAns2(e){
			_this._userAns += ", " + _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value + ", " + _this.txtAns5.value + ", " + _this.txtAns6.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value.replace(/\s+/g,'')==cAns[i-1]){
					_this.cScore++;
				}
			}
			console.log(_this.cScore);
			//scale the score
			var scaledScore = Math.round(_this.cScore/12*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_this._userAns, scaledScore);
		}
		this.btnSubmit2.addEventListener("click", checkAns2);
		function onTweenNextDone(){
			_this.mouseChildren = true;
			_this.btnPrev.visible = true;
		}
		function viewNext(e){
			_this.mouseChildren = false;
			_this.btnNext.visible = false;
			createjs.Tween.get(_this.mcStars).to({x:35}, 500, createjs.Ease.quadOut).call(onTweenNextDone);
		}
		this.btnNext.addEventListener("click", viewNext);
		this.btnNext.visible = false;
		function onTweenPrevDone(){
			_this.mouseChildren = true;
			_this.btnNext.visible = true;
		}
		function viewPrev(e){
			_this.mouseChildren = false;
			_this.btnPrev.visible = false;
			createjs.Tween.get(_this.mcStars).to({x:560}, 500, createjs.Ease.quadOut).call(onTweenPrevDone);
		}
		this.btnPrev.addEventListener("click", viewPrev);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(5).call(this.frame_10).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(695.9,646.8,0.85,0.85,0,0,0,0.2,0.6);

	this.btnSubmit2 = new lib.mcBtnCont();
	this.btnSubmit2.name = "btnSubmit2";
	this.btnSubmit2.parent = this;
	this.btnSubmit2.setTransform(695.9,646.8,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnSubmit}]},4).to({state:[]},1).to({state:[{t:this.btnSubmit2}]},5).wait(1));

	// btnArrow
	this.btnPrev = new lib.btnArrow();
	this.btnPrev.name = "btnPrev";
	this.btnPrev.parent = this;
	this.btnPrev.setTransform(101.5,439.7,1,1,0,0,180);
	new cjs.ButtonHelper(this.btnPrev, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.btnNext = new lib.btnArrow();
	this.btnNext.name = "btnNext";
	this.btnNext.parent = this;
	this.btnNext.setTransform(592.2,439.7);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnNext},{t:this.btnPrev}]},10).wait(1));

	// txt
	this.txtAns6 = new lib.an_TextInput({'id': 'txtAns6', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns6.setTransform(820,593.1,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns5 = new lib.an_TextInput({'id': 'txtAns5', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns5.setTransform(820,559.4,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns4 = new lib.an_TextInput({'id': 'txtAns4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns4.setTransform(820,525.8,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns3 = new lib.an_TextInput({'id': 'txtAns3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns3.setTransform(820,361.2,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns2 = new lib.an_TextInput({'id': 'txtAns2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns2.setTransform(820,327.6,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(820,293.9,1.443,1.523,0,0,0,50.1,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAns6}]}).wait(11));

	// txt
	this.instance = new lib.bucuquestion();
	this.instance.parent = this;
	this.instance.setTransform(770.4,198.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// txt
	this.instance_1 = new lib.warnaquestion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(770.4,426.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Layer 3
	this.instance_2 = new lib.schedule1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(766.1,310.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E2B30").s().p("AnVH2QhvAAAAhuIAAt+ISJAAIAAPsg");
	this.shape.setTransform(689.8,327.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#782124").s().p("ApECxIAAjyQAAhvBvAAIQaAAIAAFhg");
	this.shape_1.setTransform(689.8,259.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ArSCxIAAlhIU2AAQBuAAAABvIAADyg");
	this.shape_2.setTransform(820.1,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// Layer 5
	this.instance_3 = new lib.schedule2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(766.1,541.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#376FDC").s().p("AnVH2QhvAAAAhvIAAt8ISJAAIAAPrg");
	this.shape_3.setTransform(689.8,559);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A54A7").s().p("ApECxIAAjyQAAhvBvAAIQaAAIAAFhg");
	this.shape_4.setTransform(689.8,491.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ArSCxIAAlhIU2AAQBuAAAABvIAADyg");
	this.shape_5.setTransform(820.1,491.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglFAiIQg4gCgBg9MAAAhCSQABg8A4gCMBKYAAAQArAEAAA6MAAABCSQAAA7grAEg");
	mask.setTransform(347,450);

	// Layer 1
	this.mcStars = new lib.SpaceStar2();
	this.mcStars.name = "mcStars";
	this.mcStars.parent = this;
	this.mcStars.setTransform(560,437.6);

	var maskedShapeInstanceList = [this.mcStars];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mcStars).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104,156.1,802.8,512.4);


(lib.Q1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_4 = function() {
		this.stop();
		var cAns = ["5", "2", "3", "3", "3", "4"];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
				
		var fontSize = 18;
		var maxBlanks = 6;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "1");
			this["txtAns"+i].setAttribute("autocomplete", "false");
		}
		this.txtAns1.focus();
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
		this.cScore = 0;
		this._userAns = "";
		function checkAns(e){
			_this._userAns = _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value + ", " + _this.txtAns5.value + ", " + _this.txtAns6.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value.replace(/\s+/g,'')==cAns[i-1]){
					_this.cScore++;
				}
				//_this["txtAns"+i].value = "";
			}
			//console.log(_this.cScore);
			this.txtAns1.focus();
			_this.play();
			_this.parent.play();
		}
		this.btnSubmit.addEventListener("click", checkAns);
	}
	this.frame_5 = function() {
		this.stop();
		var _this = this;
		function onTweenDone(e){
			_this.mouseChildren = true;
			_this.play();
		}
		this.mouseChildren = false;
		createjs.Tween.get(this.mcStars).to({x:35}, 500, createjs.Ease.quadOut).call(onTweenDone);
	}
	this.frame_10 = function() {
		this.stop();
		var cAns = ["8", "5", "6", "5", "6", "8"];
		var _this = this;
		this.btnSubmit.mouseEnabled = false;
		this.btnSubmit.alpha = .5;
				
		var fontSize = 18;
		var maxBlanks = 6;
		var myContainer = document.getElementById("dom_overlay_container");
		var myScale = myContainer.offsetWidth/800;
		for (var i=1; i<=maxBlanks; i++){
			this["txtAns"+i] = document.getElementById("txtAns"+i);
			this["txtAns"+i].style.fontFamily = "Muli, Arial, Helvetica, sans-serif";
			this["txtAns"+i].style.fontSize = fontSize * myScale + "px";
			this["txtAns"+i].style.textAlign = "center";
			this["txtAns"+i].setAttribute("maxlength", "1");
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
		function checkAns2(e){
			_this._userAns += ", " + _this.txtAns1.value + ", " + _this.txtAns2.value + ", " + 
			_this.txtAns3.value + ", " + _this.txtAns4.value + ", " + _this.txtAns5.value + ", " + _this.txtAns6.value;
			for (i=1; i<=maxBlanks; i++){
				if (_this["txtAns"+i].value.replace(/\s+/g,'')==cAns[i-1]){
					_this.cScore++;
				}
			}
			console.log(_this.cScore);
			//scale the score
			var scaledScore = Math.round(_this.cScore/12*40)/10+1;
			console.log(scaledScore);
			_this.parent.sendScore(_this._userAns, scaledScore);
		}
		this.btnSubmit2.addEventListener("click", checkAns2);
		function onTweenNextDone(){
			_this.mouseChildren = true;
			_this.btnPrev.visible = true;
		}
		function viewNext(e){
			_this.mouseChildren = false;
			_this.btnNext.visible = false;
			createjs.Tween.get(_this.mcStars).to({x:35}, 500, createjs.Ease.quadOut).call(onTweenNextDone);
		}
		this.btnNext.addEventListener("click", viewNext);
		this.btnNext.visible = false;
		function onTweenPrevDone(){
			_this.mouseChildren = true;
			_this.btnNext.visible = true;
		}
		function viewPrev(e){
			_this.mouseChildren = false;
			_this.btnPrev.visible = false;
			createjs.Tween.get(_this.mcStars).to({x:560}, 500, createjs.Ease.quadOut).call(onTweenPrevDone);
		}
		this.btnPrev.addEventListener("click", viewPrev);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(5).call(this.frame_10).wait(1));

	// btn
	this.btnSubmit = new lib.mcBtnCont();
	this.btnSubmit.name = "btnSubmit";
	this.btnSubmit.parent = this;
	this.btnSubmit.setTransform(695.9,646.8,0.85,0.85,0,0,0,0.2,0.6);

	this.btnSubmit2 = new lib.mcBtnCont();
	this.btnSubmit2.name = "btnSubmit2";
	this.btnSubmit2.parent = this;
	this.btnSubmit2.setTransform(695.9,646.8,0.85,0.85,0,0,0,0.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnSubmit}]},4).to({state:[]},1).to({state:[{t:this.btnSubmit2}]},5).wait(1));

	// btnArrow
	this.btnPrev = new lib.btnArrow();
	this.btnPrev.name = "btnPrev";
	this.btnPrev.parent = this;
	this.btnPrev.setTransform(101.5,439.7,1,1,0,0,180);
	new cjs.ButtonHelper(this.btnPrev, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.btnNext = new lib.btnArrow();
	this.btnNext.name = "btnNext";
	this.btnNext.parent = this;
	this.btnNext.setTransform(592.2,439.7);
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2, false, new lib.btnArrow(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnNext},{t:this.btnPrev}]},10).wait(1));

	// txt
	this.txtAns6 = new lib.an_TextInput({'id': 'txtAns6', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns6.setTransform(820,593.1,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns5 = new lib.an_TextInput({'id': 'txtAns5', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns5.setTransform(820,559.4,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns4 = new lib.an_TextInput({'id': 'txtAns4', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns4.setTransform(820,525.8,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns3 = new lib.an_TextInput({'id': 'txtAns3', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns3.setTransform(820,361.2,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns2 = new lib.an_TextInput({'id': 'txtAns2', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns2.setTransform(820,327.6,1.443,1.523,0,0,0,50.1,11.3);

	this.txtAns1 = new lib.an_TextInput({'id': 'txtAns1', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.txtAns1.setTransform(820,293.9,1.443,1.523,0,0,0,50.1,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.txtAns1},{t:this.txtAns2},{t:this.txtAns3},{t:this.txtAns4},{t:this.txtAns5},{t:this.txtAns6}]}).wait(11));

	// txt
	this.instance = new lib.bucuquestion();
	this.instance.parent = this;
	this.instance.setTransform(770.4,198.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// txt
	this.instance_1 = new lib.warnaquestion();
	this.instance_1.parent = this;
	this.instance_1.setTransform(770.4,426.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11));

	// Layer 3
	this.instance_2 = new lib.schedule1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(766.1,310.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9E2B30").s().p("AnVH2QhvAAAAhuIAAt+ISJAAIAAPsg");
	this.shape.setTransform(689.8,327.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#782124").s().p("ApECxIAAjyQAAhvBvAAIQaAAIAAFhg");
	this.shape_1.setTransform(689.8,259.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("ArSCxIAAlhIU2AAQBuAAAABvIAADyg");
	this.shape_2.setTransform(820.1,259.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// Layer 5
	this.instance_3 = new lib.schedule2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(766.1,541.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11));

	// Layer_4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#376FDC").s().p("AnVH2QhvAAAAhvIAAt8ISJAAIAAPrg");
	this.shape_3.setTransform(689.8,559);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A54A7").s().p("ApECxIAAjyQAAhvBvAAIQaAAIAAFhg");
	this.shape_4.setTransform(689.8,491.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("ArSCxIAAlhIU2AAQBuAAAABvIAADyg");
	this.shape_5.setTransform(820.1,491.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(11));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EglFAiIQg4gCgBg9MAAAhCSQABg8A4gCMBKYAAAQArAEAAA6MAAABCSQAAA7grAEg");
	mask.setTransform(347,450);

	// Layer 1
	this.mcStars = new lib.SpaceStar1();
	this.mcStars.name = "mcStars";
	this.mcStars.parent = this;
	this.mcStars.setTransform(560,437.6);

	var maskedShapeInstanceList = [this.mcStars];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.mcStars).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104,156.1,802.8,512.4);


// stage content:
(lib.y6s7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{q1:74,q2:110,q3:137,finalFb:172});

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
		var stageNum = 7;
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
						"qId": "y6s7_1",
						"qDomain": 1,
						"qParam": 1,
						"qSkill": 3,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s7_2",
						"qDomain": 1,
						"qParam": 1,
						"qSkill": 3,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s7_3",
						"qDomain": 1,
						"qParam": 1,
						"qSkill": 3,
						"userAns": "",
						"qResult": 9,
						"time": 0,
						"score": 1
					},
					{
						"qId": "y6s7_4",
						"qDomain": 1,
						"qParam": 1,
						"qSkill": 3,
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
	this.frame_79 = function() {
		playSound("questionAlert");
	}
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_98 = function() {
		this.stop();
	}
	this.frame_110 = function() {
		playSound("questionAlert");
	}
	this.frame_128 = function() {
		this.stop();
	}
	this.frame_131 = function() {
		this.stop();
	}
	this.frame_137 = function() {
		playSound("questionAlert");
	}
	this.frame_154 = function() {
		this.stop();
	}
	this.frame_157 = function() {
		this.stop();
	}
	this.frame_172 = function() {
		clearInterval(timeInterval);//stop time
		//console.log(cScore);
		playSound("questionComplete");
	}
	this.frame_343 = function() {
		this.stop();
		nextScreen();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(65).call(this.frame_69).wait(10).call(this.frame_79).wait(15).call(this.frame_94).wait(4).call(this.frame_98).wait(12).call(this.frame_110).wait(18).call(this.frame_128).wait(3).call(this.frame_131).wait(6).call(this.frame_137).wait(17).call(this.frame_154).wait(3).call(this.frame_157).wait(15).call(this.frame_172).wait(171).call(this.frame_343).wait(1));

	// mcTimesUp
	this.mcTimesUp = new lib.mcTimesUp();
	this.mcTimesUp.name = "mcTimesUp";
	this.mcTimesUp.parent = this;
	this.mcTimesUp._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcTimesUp).wait(74).to({_off:false},0).wait(270));

	// t
	this.instance = new lib.congratsAnim("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(400,300);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(172).to({_off:false},0).wait(172));

	// timer
	this.timer = new lib.mcTimer();
	this.timer.name = "timer";
	this.timer.parent = this;
	this.timer.setTransform(698.3,78.5);
	this.timer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.timer).wait(74).to({_off:false},0).wait(270));

	// timerBg
	this.instance_1 = new lib.timerBg("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(766.3,148.9,0.195,0.195,0,0,0,-20.6,-1.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({regX:-20.4,regY:-1.9,scaleX:1,scaleY:1,x:684.4,y:80.3},16,cjs.Ease.cubicOut).wait(299));

	// prompt
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(471.6,161.7,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(69).to({_off:false},0).to({_off:true},5).wait(270));

	// ss
	this.instance_2 = new lib.dialogue1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(443.5,123.3,1,1,0,0,0,-0.6,0.8);

	this.d2 = new lib.dialogue2();
	this.d2.name = "d2";
	this.d2.parent = this;
	this.d2.setTransform(443.5,123.3,1,1,0,0,0,-0.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},43).to({state:[{t:this.d2}]},52).to({state:[{t:this.instance_2}]},15).to({state:[{t:this.d2}]},19).to({state:[]},43).wait(172));

	// avatar
	this.instance_3 = new lib.avatarBotsX("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(144.4,121.6,0.052,0.052);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({scaleX:1,scaleY:1,x:145.4,y:124.4},17,cjs.Ease.elasticOut).to({_off:true},129).wait(172));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Eg40Ao4UgBLguNAJ1ghSQRQi+R6gnQAUAcAWAbQBpCFCFBwQCFBwBwA/QBwA/BeAZQAOADASAAQARAAAOgDQBegZBwg/QBwg/CFhwQCFhwBpiFIAggqQSwA+TbDcUALnAb1gFBAyoQ8EBV8DAAQ8FAA8EhVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:407.2,y:295.9}).wait(172).to({graphics:null,x:0,y:0}).wait(172));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{y:397.7}}]}).to({state:[{t:this.shape,p:{y:397.6}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{y:396.9}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7,p:{y:391.3}}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11,p:{y:376}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15,p:{y:346.4}}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_15,p:{y:224.4}}]},1).to({state:[{t:this.shape_11,p:{y:180.1}}]},1).to({state:[{t:this.shape_7,p:{y:157.3}}]},1).to({state:[{t:this.shape_3,p:{y:148.9}}]},1).to({state:[{t:this.shape,p:{y:147.7}}]},1).to({state:[]},1).wait(318));

	// question
	this.instance_4 = new lib.Q1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.1,440.1,0.809,0.809,0,0,0,0.1,0.1);
	this.instance_4._off = true;

	this.instance_5 = new lib.Q2a();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0.1,440.1,0.809,0.809,0,0,0,0.1,0.1);
	this.instance_5._off = true;

	this.instance_6 = new lib.Q3a();
	this.instance_6.parent = this;
	this.instance_6.setTransform(0.1,440.1,0.809,0.809,0,0,0,0.1,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(74).to({_off:false},0).to({y:0.1},15,cjs.Ease.cubicOut).to({_off:true},21).wait(234));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({_off:false},0).to({y:0.1},15,cjs.Ease.cubicOut).to({_off:true},12).wait(207));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(137).to({_off:false},0).to({y:0.1},15,cjs.Ease.cubicOut).to({_off:true},20).wait(172));

	// bg
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0E1824").s().p("EhBDAyDMAAAhkFMCCHAAAMAAABkFg");
	this.shape_20.setTransform(400,300);
	this.shape_20._off = true;

	var maskedShapeInstanceList = [this.shape_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(20).to({_off:false},0).to({_off:true},152).wait(172));

	// bg
	this.instance_7 = new lib.Bitmap3();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-197,-235);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(344));

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
		{src:"images/y6s7/Bitmap19.png?1534935452824", id:"Bitmap19"},
		{src:"images/y6s7/Bitmap22.png?1534935452824", id:"Bitmap22"},
		{src:"images/y6s7/Bitmap23.png?1534935452824", id:"Bitmap23"},
		{src:"images/y6s7/Bitmap27.png?1534935452824", id:"Bitmap27"},
		{src:"images/y6s7/Bitmap3.png?1534935452824", id:"Bitmap3"},
		{src:"images/y6s7/Bitmap9.png?1534935452824", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1534935452824", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1534935452824", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1534935452824", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1534935452824", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1534935452824", id:"submitAns"},
		{src:"sounds/timeout.mp3?1534935452824", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1534935452824", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1534935452824", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1534935452824", id:"an.TextInput"}
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