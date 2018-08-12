(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap19 = function() {
	this.initialize(img.Bitmap19);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,97);


(lib.Bitmap20 = function() {
	this.initialize(img.Bitmap20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1061,500);


(lib.Bitmap21 = function() {
	this.initialize(img.Bitmap21);
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
	this.myTxt.lineWidth = 268;
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

}).prototype = getMCSymbolPrototype(lib.tEn1, new cjs.Rectangle(-269.5,-29.2,303.5,69), null);


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
	this.myTxt = new cjs.Text("Bilang jumlah bintang dan \nlengkapkan jadual.", "italic bold 16px 'Quantico'", "#0EE0E0");
	this.myTxt.name = "myTxt";
	this.myTxt.lineHeight = 25;
	this.myTxt.lineWidth = 225;
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


(lib.SpaceStar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap21();
	this.instance.parent = this;
	this.instance.setTransform(-465.4,-225.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceStar2, new cjs.Rectangle(-465.4,-225.2,1061,500), null);


(lib.SpaceStar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap20();
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
	this.shape_9.graphics.f("#FFFFFF").s().p("AggA0IADgQQAPAIAOAAQAVAAAAgVIAAgQQgDAGgHAEQgHAEgIAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgGQAIgEALAAQAIAAAHADQAHAEADAHIAAgMIAUAAIAABNQAAATgKAKQgLAJgUABQgRgBgPgHgAgOgkQgGAGAAAMQAAALAGAHQAFAFAJABQAKgBAGgFQAFgHAAgLQAAgMgFgGQgGgHgKAAQgJAAgFAHg");
	this.shape_9.setTransform(-55.8,-12.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_10.setTransform(-65.5,-14.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJA7IAAhQIATAAIAABQgAgKgmIAAgUIAVAAIAAAUg");
	this.shape_11.setTransform(-72.4,-16);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_12.setTransform(-79.3,-14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAHAAQAJAAAEgGQAGgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_13.setTransform(-88.9,-14.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAYA5Ig0g2IAAA2IgUAAIAAhxIAUAAIAAAzIAygzIAZAAIg2A3IA4A6g");
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
	this.shape_28.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_28.setTransform(-53.4,-49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AASAqIAAgwQAAgJgDgFQgEgFgIAAQgIABgFAFQgGAGAAAKIAAAtIgUAAIAAg6QAAgMgBgKIATAAIABANQAEgIAHgEQAGgDAJAAQAdgBAAAiIAAAxg");
	this.shape_29.setTransform(-63,-49.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIATAAIACAPQADgIAGgEQAGgEAIAAIAIABIAAASQgFgCgGAAQgKAAgFAGQgFAGABAKIAAAqg");
	this.shape_30.setTransform(-70.4,-49.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgXAlQgIgFgEgKQgFgJAAgNQAAgLAFgKQAEgJAIgGQAJgFAKAAQAIAAAHAEQAHADADAHIAAgMIAUAAIAABQIgUAAIAAgNQgDAHgHADQgHAEgIAAQgLAAgIgFgAgOgSQgGAHAAALQAAANAGAHQAFAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgGgKAAQgJAAgFAHg");
	this.shape_31.setTransform(-79.2,-49.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAdA5IgdhRIgcBRIgRAAIgohxIAVAAIAdBUIAdhUIAOAAIAdBUIAdhUIAUAAIgpBxg");
	this.shape_32.setTransform(-92.8,-50.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgZAfQgLgLAAgUQAAgLAEgKQAGgJAJgGQAIgFAKAAQASAAAJALQAJALAAASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgGAEgIADQgIADgJAAQgTAAgLgLgAgKgWQgFAFgBAJIAkAAQgBgJgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_33.setTransform(-53.2,53.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AggAzIADgPQAPAIAOAAQAVAAAAgVIAAgRQgDAHgHAEQgHAEgIAAQgLAAgIgFQgIgFgFgJQgEgIAAgMQAAgMAEgJQAFgJAIgGQAIgEALAAQAIAAAHADQAHAEADAHIAAgNIAUAAIAABOQAAATgKAKQgLAKgUAAQgRAAgPgJgAgOgkQgGAGAAAMQAAALAGAHQAFAFAJAAQAKAAAGgFQAFgHAAgLQAAgMgFgGQgGgHgKABQgJgBgFAHg");
	this.shape_34.setTransform(-62.8,55.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgaAfQgLgLABgUQAAgLAEgKQAGgJAJgGQAIgFAKAAQARAAAKALQAJALAAASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgFAEgJADQgIADgJAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_35.setTransform(-58.5,19.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AASA7IAAgxQgBgJgDgEQgDgEgJAAQgIAAgFAGQgGAEAAAKIAAAuIgTAAIAAh1IATAAIAAAxQAFgHAGgEQAGgDAJAAQAcAAAAAgIAAAyg");
	this.shape_36.setTransform(-78,17.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAUApIgUg0IgTA0IgRAAIgghQIAVAAIAUA3IAWg3IAMAAIAVA4IAWg4IATAAIggBQg");
	this.shape_37.setTransform(-59.1,-14.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAJgFAMAAQAMAAAJAFQAKAFAFAKQAFAJAAAMQAAANgFAJQgFAKgKAFQgJAFgMAAQgMAAgJgFgAgPgTQgFAHAAAMQAAANAFAHQAGAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgGAHg");
	this.shape_38.setTransform(-70.9,-14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_39.setTransform(-82,-16);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgaAfQgKgLgBgUQAAgLAGgKQAFgJAIgGQAJgFAKAAQASAAAJALQAKALgBASIAAACIg2AAQABANAFAHQAGAGALAAQANAAAMgJIAFAOQgGAEgIADQgIADgJAAQgTAAgMgLgAgKgWQgFAFgCAJIAlAAQgBgJgEgFQgFgFgIAAQgHAAgFAFg");
	this.shape_40.setTransform(-88.4,-14.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgJA5IAAgtIguhEIAXAAIAgAzIAhgzIAXAAIguBEIAAAtg");
	this.shape_41.setTransform(-97.8,-15.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghAgIAFgOQANAJAQAAQAHAAAEgCQAEgCAAgFQAAgDgDgDQgCgCgHgBIgMgDQgWgFAAgRQAAgHAEgGQAEgGAHgDQAIgDAJAAQAIAAAIADQAJACAGAFIgGAOQgNgJgMAAQgGAAgEACQgEADAAAEQAAAEACACQADACAFABIANAEQAMACAGAFQAFAGAAAJQAAALgJAGQgJAHgPAAQgVAAgNgKg");
	this.shape_42.setTransform(111.9,-49.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgBgLIATAAIABAPQADgIAGgEQAGgEAJAAIAHABIAAASQgFgCgGAAQgKAAgFAGQgEAGAAAKIAAAqg");
	this.shape_43.setTransform(105.3,-49.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AghAgIAFgOQANAJAQAAQAHAAAEgCQAEgCAAgFQAAgDgDgDQgCgCgHgBIgMgDQgWgFAAgRQAAgHAEgGQAEgGAHgDQAIgDAJAAQAIAAAIADQAJACAGAFIgGAOQgNgJgMAAQgGAAgEACQgEADAAAEQAAAEACACQADACAFABIANAEQAMACAGAFQAFAGAAAJQAAALgJAGQgJAHgPAAQgVAAgNgKg");
	this.shape_44.setTransform(81.7,-49.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgMA7IAAhBIgPAAIAAgPIAPAAIAAgHQAAgPAHgIQAHgHANAAQAIAAAFACIAAAPIgIgBQgNAAAAAPIAAAGIASAAIAAAPIgSAAIAABBg");
	this.shape_45.setTransform(70.4,-51.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgUAlQgKgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAKgFQAJgFALAAQAMAAAKAFQAIAFAGAKQAFAJAAAMQAAANgFAJQgGAKgIAFQgKAFgMAAQgLAAgJgFgAgOgTQgGAHAAAMQAAANAGAHQAFAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgFAHg");
	this.shape_46.setTransform(62.8,-49.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIATAAIACAPQADgIAGgEQAGgEAIAAIAIABIAAASQgFgCgFAAQgLAAgFAGQgFAGABAKIAAAqg");
	this.shape_47.setTransform(51,-49.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgZAfQgLgLAAgUQAAgLAEgKQAGgJAJgGQAIgFALAAQARAAAJALQAKALgBASIAAACIg2AAQAAANAHAHQAFAGALAAQANAAALgJIAGAOQgGAEgIADQgIADgJAAQgTAAgLgLgAgKgWQgFAFgBAJIAkAAQgBgJgFgFQgEgFgIAAQgHAAgFAFg");
	this.shape_48.setTransform(43.1,-49.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAqAqIAAgxQAAgJgDgEQgEgFgGAAQgJABgFAFQgEAGAAALIAAAsIgTAAIAAgxQAAgJgEgEQgDgFgHAAQgIABgFAFQgFAGAAALIAAAsIgTAAIAAg6QAAgMgCgKIATAAIACAMQADgGAHgFQAGgDAJAAQARAAAGAPQADgHAIgFQAHgDAJAAQAOgBAGAJQAHAIAAARIAAAxg");
	this.shape_49.setTransform(21.5,-49.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIAUAAIAAAwQAAAJADAEQAEAEAHAAQAJAAAFgGQAFgFAAgKIAAgsIAUAAIAABQIgTAAIAAgNQgFAHgGADQgGAEgHAAQgeAAAAghg");
	this.shape_50.setTransform(9.6,-49.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAgA5Ig8hPIAABPIgTAAIAAhxIAPAAIA9BPIAAhPIATAAIAABxg");
	this.shape_51.setTransform(-1.2,-50.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgYApIAAg5QAAgMgCgLIAUAAIABAPQADgIAGgEQAGgEAIAAIAIABIAAASQgFgCgGAAQgKAAgFAGQgFAGABAKIAAAqg");
	this.shape_52.setTransform(-52.7,-49.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgkAIIAAgwIATAAIAAAwQAAAJAFAEQADAEAIAAQAHAAAFgGQAGgFAAgKIAAgsIAUAAIAABQIgUAAIAAgNQgDAHgHADQgGAEgIAAQgdAAAAghg");
	this.shape_53.setTransform(-61.1,-49.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgUAlQgKgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAKgFQAIgFAMAAQAMAAAJAFQAJAFAGAKQAFAJAAAMQAAANgFAJQgGAKgJAFQgJAFgMAAQgMAAgIgFgAgPgTQgFAHAAAMQAAANAFAHQAGAGAJAAQAKAAAGgGQAFgHAAgNQAAgMgFgHQgGgHgKAAQgJAAgGAHg");
	this.shape_54.setTransform(-70.6,-49.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgJA7IAAh1IATAAIAAB1g");
	this.shape_55.setTransform(-77.5,-51.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgVAlQgJgFgFgKQgFgJAAgNQAAgMAFgJQAFgKAJgFQAKgFALAAQAMAAAKAFQAIAFAGAKQAFAJAAAMQAAANgFAJQgGAKgIAFQgKAFgMAAQgLAAgKgFgAgOgTQgGAHAAAMQAAANAGAHQAFAGAJAAQAKAAAFgGQAGgHAAgNQAAgMgGgHQgFgHgKAAQgJAAgFAHg");
	this.shape_56.setTransform(-84.2,-49.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgUAzQgNgHgGgNQgHgNAAgSQAAgRAHgNQAGgNANgHQAMgIARAAQALAAAKAEQALAEAGAGIgHAQQgHgHgIgDQgIgDgIAAQgQAAgIALQgKALABATQgBAUAKALQAIALAQAAQAIAAAIgDQAIgDAHgGIAHAPQgGAGgLAEQgKADgLAAQgRABgMgIg");
	this.shape_57.setTransform(-94.4,-50.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32,p:{x:-92.8,y:-50.9}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:26.6,y:-51.1}},{t:this.shape_23,p:{x:33.4}},{t:this.shape_22},{t:this.shape_21,p:{x:57.8}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:79.3}},{t:this.shape_17,p:{x:87.2,y:-49.3}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6,p:{x:-74.4}},{t:this.shape_5,p:{x:-69.2}},{t:this.shape_4},{t:this.shape_3,p:{x:-89.8}},{t:this.shape_2,p:{x:-79.9}},{t:this.shape_1},{t:this.shape,p:{x:-63.7}}]}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_21,p:{x:33.9}},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_18,p:{x:88.7}},{t:this.shape_23,p:{x:96.5}},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_24,p:{x:-77.8,y:-16}},{t:this.shape_38},{t:this.shape_37},{t:this.shape_32,p:{x:-91.8,y:18.1}},{t:this.shape_36},{t:this.shape_5,p:{x:-71.1}},{t:this.shape_6,p:{x:-66.1}},{t:this.shape_35},{t:this.shape_3,p:{x:-99.7}},{t:this.shape_2,p:{x:-89.8}},{t:this.shape_17,p:{x:-82.4,y:53.5}},{t:this.shape,p:{x:-72.5}},{t:this.shape_34},{t:this.shape_33}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.3,-64.6,220.5,128.7);


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


(lib.cosmosbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape.setTransform(-408.6,193.1,0.712,0.624,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_1.setTransform(-411.6,160.2,0.712,0.624,180);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_2.setTransform(-393.1,163.2,0.712,0.624,180);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAFgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_3.setTransform(-363.1,170.1,0.712,0.624,180);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_4.setTransform(-343.4,150.9,0.712,0.624,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKAMQgFgFAAgHQAAgFAFgGQAEgEAGAAQAHAAAEAEQAFAGAAAFQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_5.setTransform(-310.3,150.3,0.712,0.624,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_6.setTransform(-290.1,176.6,0.712,0.624,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAKQgEgFABgFQgBgEAEgFQAFgDAEgBQAFABAFADQADAFAAAEQAAAFgDAFQgFADgFABQgEgBgFgDg");
	this.shape_7.setTransform(-274.8,143.6,0.712,0.624,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_8.setTransform(-217.3,152.4,1.14,1,0,180,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_9.setTransform(-212.5,99.7,1.14,1,0,180,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_10.setTransform(-242.3,104.4,1.14,1,0,180,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAFgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_11.setTransform(-290.2,115.5,1.14,1,0,180,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_12.setTransform(-321.8,84.7,1.14,1,0,180,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKAMQgFgFAAgHQAAgFAFgGQAEgEAGAAQAHAAAEAEQAFAGAAAFQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_13.setTransform(-374.9,83.7,1.14,1,0,180,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_14.setTransform(-407.2,125.9,1.14,1,0,180,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgJAKQgEgFABgFQgBgEAEgFQAFgDAEgBQAFABAFADQADAFAAAEQAAAFgDAFQgFADgFABQgEgBgFgDg");
	this.shape_15.setTransform(-431.8,73,1.14,1,0,180,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAGQgDgDAAgDQAAgCADgDQACgDADAAQAEAAADADQACADAAACQAAAEgCACQgDADgEAAQgDAAgCgDg");
	this.shape_16.setTransform(-445.8,-167.6,1.14,1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_17.setTransform(-433.2,-161.5,1.14,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgEgEg");
	this.shape_18.setTransform(-447.8,-145.9,1.14,1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_19.setTransform(-394.7,158.1,1.14,1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_20.setTransform(-434.8,-123.7,1.14,1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgDAEgEQADgDAEgBQAFABADADQAEAEAAADQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_21.setTransform(-432,145.5,1.14,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEgBQAFABADADQADADABAEQgBAFgDADQgDADgFABQgEgBgDgDg");
	this.shape_22.setTransform(-414.1,-97.4,1.14,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_23.setTransform(-282.8,-238.7,1.14,1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_24.setTransform(-448.1,-66.4,1.14,1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgEAJQgEgCgBgEQgBgDACgEQACgDAFgCQACgBAEACQAEADABAEQABACgCAEQgCAEgEABIgDAAIgEgBg");
	this.shape_25.setTransform(-404.5,37.3,1.14,1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgEAIQgDgCgCgDQgBgDACgEQADgEADgBQADgBAEACQADADACADQABADgCAEQgCAEgEAAIgDABIgEgCg");
	this.shape_26.setTransform(-387.1,8.7,1.14,1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgFALQgEgDgCgFQgBgDACgFQACgEAFgCQAEgBAEACQAFADABAFQACADgDAFQgCAEgFACIgDAAQgCAAgDgBg");
	this.shape_27.setTransform(-390,-5.9,1.14,1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgFAMQgFgDgBgFQgCgFADgEQACgFAGgBQAEgCAEACQAFADACAGQABADgDAFQgCAFgFACIgEAAQgCAAgDgBg");
	this.shape_28.setTransform(-394.1,-17.9,1.14,1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgEAJQgDgCgCgEQgBgDACgEQACgEAEgBQADgBAEACQADACACAEQABADgCAEQgDADgDABIgDABIgEgBg");
	this.shape_29.setTransform(-391.7,-41.7,1.14,1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEAKQgJgFAEgJQACgEAFgBQAEgCAEACQAEADABAEQABAEgCAEQgDAEgEABIgDAAIgEgBg");
	this.shape_30.setTransform(-359.3,-64.9,1.14,1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgFAJQgEgCgBgEQgBgEACgEQADgEAEgBQADgBAEACQAEADABAEQACADgDAEQgDAGgGAAIgFgCg");
	this.shape_31.setTransform(-370.5,-87.1,1.14,1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEAJQgDgCgCgEQgBgDACgEQACgEAEgBQADgBAEACQADACACAEQABADgCAEQgCADgEACIgDAAIgEgBg");
	this.shape_32.setTransform(-372.6,-109,1.14,1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgFAKQgEgCgBgFQgCgDADgFQACgEAFgBQADgBAFACQAEACABAFQACAEgDAEQgCAEgFABIgDABQgCAAgDgCg");
	this.shape_33.setTransform(-356.6,-112.4,1.14,1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgFAKQgEgDgBgEQgBgDACgEQADgEAEgCQADgBAEACQAEADABAEQACAEgDADQgCAEgEACIgDAAIgFgBg");
	this.shape_34.setTransform(-331.2,-114.9,1.14,1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgEAJQgEgCgBgEQgBgEACgDQACgEAEgBQADgBAEACQAEACABAEQABADgCAEQgCAEgEABIgDAAIgEgBg");
	this.shape_35.setTransform(-338.7,-146.6,1.14,1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFALQgEgCgCgFQgBgEACgFQADgEAFgCQAEgBAEACQAEADACAFQABAEgCAEQgCAFgFABIgDAAQgDAAgDgBg");
	this.shape_36.setTransform(-318.8,-143.8,1.14,1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgEAJQgEgCgBgEQgCgDACgEQADgEAEgBQADgBAEACQAEACABAEQACAEgDADQgCAEgEABIgDABIgEgCg");
	this.shape_37.setTransform(-307.7,-170.4,1.14,1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgEAKQgJgFAEgJQACgEAFgBQADgCAEACQAEADACAEQABADgCAEQgCAEgFACIgDAAQgCAAgCgBg");
	this.shape_38.setTransform(-280.1,-191.2,1.14,1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgGALQgEgCgCgGQgBgEACgEQADgFAFgCQAEgBAFACQAFADACAFQABAFgDAEQgCAFgGABIgDABQgCAAgEgCg");
	this.shape_39.setTransform(-284,-151.6,1.14,1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgFALQgEgDgCgFQgBgEACgEQADgFAEgBQAEgBAFACQAEADACAEQABAEgCAFQgDAEgFACIgDAAQgCAAgDgBg");
	this.shape_40.setTransform(-260.2,-130.1,1.14,1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgEAJQgDgCgCgEQgBgDACgEQADgEAEgBQADgBADACQAEACABAEQABADgCAEQgCAEgEABIgDAAIgEgBg");
	this.shape_41.setTransform(-210.5,-156.3,1.14,1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgFALQgEgDgCgFQgBgDADgFQACgEAEgCQAFgBADACQAFADACAFQABADgCAFQgDAEgFACIgDAAQgCAAgDgBg");
	this.shape_42.setTransform(-213.3,-127.3,1.14,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgEAJQgJgFAFgIQACgEAFgBQACgBAEACQAJAFgFAIQgDAFgFAAIgFgBg");
	this.shape_43.setTransform(-208.2,-106.6,1.14,1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgFAKQgEgCgBgFQgBgDACgEQACgEAFgCQADgBAEACQAEADACAEQABADgCAEQgCAEgFACIgDAAQgCAAgDgBg");
	this.shape_44.setTransform(-165,-99.5,1.14,1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgEAKQgJgFAEgJQACgEAFgBQADgCAEACQAEADACAEQABADgCAEQgCAEgFACIgDAAQgCAAgCgBg");
	this.shape_45.setTransform(-178.8,-77.8,1.14,1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgFAMQgGgDgBgFQgBgFACgEQADgFAFgBQAEgCAFACQAFADACAGQABADgCAFQgDAFgFACIgEAAQgCAAgDgBg");
	this.shape_46.setTransform(-183.8,-63.4,1.14,1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgFAKQgEgCgBgFQgBgEACgEQACgEAFgBQADgBAEACQAEACACAFQABADgCAEQgCAEgFACIgDAAQgCAAgDgBg");
	this.shape_47.setTransform(-142.5,-54.7,1.14,1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgFAKQgEgCgCgFQgBgEADgEQACgEAFgCQAEgBAEACQAEADABAFQACADgCAFQgDAEgFABIgDABQgCAAgDgCg");
	this.shape_48.setTransform(-119.9,-31.3,1.14,1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgEAJQgEgCgCgEQgBgEACgEQADgEAEgBQADgBAEACQAEADABAEQACADgDAEQgCAEgEABIgDABIgEgCg");
	this.shape_49.setTransform(-117.5,0.9,1.14,1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgFAKQgEgCgBgFQgBgEACgEQACgEAFgBQADgBAEACQAFACABAFQABADgCAFQgCAEgFABIgDABQgCAAgDgCg");
	this.shape_50.setTransform(-54.2,-24.9,1.14,1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgFALQgEgDgCgFQgBgDACgFQADgFAFgBQAEgBAEACQAEACACAFQABAFgCAEQgCAEgFACIgEABQgCAAgDgCg");
	this.shape_51.setTransform(-84.1,15.3,1.14,1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgEAJQgIgFAEgIQACgEAEgBQADgBAEACQAIAFgEAIQgDAFgFAAIgFgBg");
	this.shape_52.setTransform(-47.9,-19.9,1.14,1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgEAJQgEgCgBgEQgBgDACgEQACgEAEgBQADgBAEACQAJAFgFAIQgEAGgFAAIgEgCg");
	this.shape_53.setTransform(-67.4,7.1,1.14,1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgEAKQgFgCgBgFQgCgEADgEQACgEAFgBQAEgBAEACQAEACACAFQABADgDAFQgCAEgFABIgDABQgCAAgCgCg");
	this.shape_54.setTransform(-52,33.2,1.14,1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgFAKQgEgCgCgFQgBgEADgEQACgEAFgBQADgCAEADQAFACABAFQACADgDAEQgCAFgFABIgDABQgCAAgDgCg");
	this.shape_55.setTransform(-30.4,41,1.14,1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgEAIQgDgCgBgDQgBgDACgEQACgDAEgBQACgCAEACQADACABAEQABADgCADQgCAGgFAAIgFgCg");
	this.shape_56.setTransform(6.8,37.9,1.14,1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGALQgEgCgCgGQgBgEACgFQADgEAFgCQAEgBAFACQAFADACAFQABAEgDAFQgCAFgGACIgCAAQgDAAgEgCg");
	this.shape_57.setTransform(15.4,37.8,1.14,1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgDAIQgEgCgBgDQgBgDACgEQACgDAEgBQACgBAEACQAIAEgFAHQgCAEgDABIgDAAIgDgBg");
	this.shape_58.setTransform(19.5,61.1,1.14,1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgEAKQgFgCgBgFQgBgEACgEQADgEAEgBQAEgBAEACQAEACABAFQACADgDAEQgCAFgFABIgDABQgCAAgCgCg");
	this.shape_59.setTransform(42.2,36.4,1.14,1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgFAMQgFgCgCgGQgBgFACgEQADgGAFgBQAFgCAFADQAFADABAFQACAEgDAFQgDAGgFABIgEABQgCAAgDgCg");
	this.shape_60.setTransform(41.4,50.2,1.14,1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgHAIQgCgEgBgEQABgEACgDQAEgCADAAQAFAAACACQADADAAAEQAAAEgDAEQgCACgFAAQgDAAgEgCg");
	this.shape_61.setTransform(83.2,-88.4,1.14,1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_62.setTransform(59.4,-56.8,1.14,1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgDADgEQADgEAEAAQAFAAADAEQADAEABADQgBAFgDADQgDADgFABQgEgBgDgDg");
	this.shape_63.setTransform(58.4,-59.8,1.14,1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADgBQAEABADACQADADAAADQAAAEgDADQgDADgEgBQgDABgDgDg");
	this.shape_64.setTransform(36.7,-79.7,1.14,1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_65.setTransform(11.9,-80.3,1.14,1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_66.setTransform(7.2,-69.3,1.14,1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_67.setTransform(-27.4,-93.4,1.14,1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEAAQAFAAADADQAEADgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_68.setTransform(-49.8,-50.4,1.14,1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_69.setTransform(-78.7,-98.5,1.14,1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAJAAAAAIQAAAJgJAAQgDAAgDgCg");
	this.shape_70.setTransform(-81.5,-62.7,1.14,1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_71.setTransform(-114,-94.3,1.14,1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQADADABAEQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_72.setTransform(88.8,61.7,1.14,1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_73.setTransform(92.1,94.4,1.14,1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEgBQAGABADADQADAEAAAEQAAAFgDAEQgDADgGABQgEgBgEgDg");
	this.shape_74.setTransform(101.2,103.3,1.14,1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_75.setTransform(110.6,60,1.14,1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_76.setTransform(144.4,92.8,1.14,1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgDADgDQAEgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgEgDg");
	this.shape_77.setTransform(180.8,100.6,1.14,1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_78.setTransform(198.7,92.7,1.14,1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEgBQAFABADADQAEADAAAEQAAAFgEADQgDADgFABQgEgBgDgDg");
	this.shape_79.setTransform(227.5,113.2,1.14,1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_80.setTransform(260.1,85.7,1.14,1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgIAKQgEgEAAgGQAAgEAEgEQAEgEAEAAQAGAAAEAEQADAEAAAEQAAAGgDAEQgEADgGAAQgEAAgEgDg");
	this.shape_81.setTransform(261.9,80.7,1.14,1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_82.setTransform(297.1,52.2,1.14,1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_83.setTransform(310.3,82.6,1.14,1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgJAJQgDgDAAgGQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_84.setTransform(319.5,60.5,1.14,1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_85.setTransform(321,50.4,1.14,1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_86.setTransform(345.5,71.3,1.14,1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgJAKQgDgEAAgGQAAgEADgEQAEgFAFAAQAGAAADAFQAEAEABAEQgBAGgEAEQgDADgGAAQgFAAgEgDg");
	this.shape_87.setTransform(353,66.1,1.14,1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQAEAEgBAEQABAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_88.setTransform(384.2,94,1.14,1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_89.setTransform(395.8,86.1,1.14,1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_90.setTransform(318.5,-237.8,1.14,1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_91.setTransform(323.4,-185.2,1.14,1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_92.setTransform(293.6,-189.8,1.14,1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgKAMQgFgFAAgHQAAgFAFgFQAFgFAFAAQAHAAAFAFQAEAEAAAGQAAAHgEAFQgFAEgHAAQgGAAgEgEg");
	this.shape_93.setTransform(245.7,-200.9,1.14,1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_94.setTransform(214.1,-170.1,1.14,1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAFgFAGAAQAHAAAFAFQAEAEAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_95.setTransform(161,-169.1,1.14,1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_96.setTransform(128.7,-211.4,1.14,1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgJAJQgDgEgBgFQABgFADgDQAFgEAEAAQAFAAAFAEQADADABAFQgBAFgDAEQgFAEgFAAQgEAAgFgEg");
	this.shape_97.setTransform(104.1,-158.5,1.14,1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_98.setTransform(6.6,95.9,1.14,1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_99.setTransform(11.4,148.6,1.14,1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_100.setTransform(-18.4,143.9,1.14,1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgEQAFgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_101.setTransform(-66.3,132.8,1.14,1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_102.setTransform(-97.9,163.6,1.14,1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKAMQgFgFAAgHQAAgFAFgGQAEgEAGAAQAHAAAEAEQAFAGAAAFQAAAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_103.setTransform(-151,164.6,1.14,1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_104.setTransform(-183.3,122.4,1.14,1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgJAKQgEgFABgFQgBgEAEgFQAFgDAEgBQAFABAFADQADAFAAAEQAAAFgDAFQgFADgFABQgEgBgFgDg");
	this.shape_105.setTransform(-207.9,175.3,1.14,1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_106.setTransform(107.9,-108,1.14,1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEgBQAFABADADQAEADgBAEQABAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_107.setTransform(111.2,-71.8,1.14,1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_108.setTransform(90.8,-75,1.14,1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_109.setTransform(57.9,-82.7,1.14,1);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgFAHQgEgDAAgEQAAgDAEgDQADgCACAAQAEAAADACQACADAAADQABAKgKAAQgDgBgCgCg");
	this.shape_110.setTransform(36.2,-61.5,1.14,1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQALAAAAAKQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_111.setTransform(-0.2,-60.9,1.14,1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_112.setTransform(-22.3,-89.8,1.14,1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgIAIAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_113.setTransform(-39.2,-53.5,1.14,1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgCQADgDACAAQADAAADADQADACAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_114.setTransform(176,-104.4,1.14,1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_115.setTransform(211.9,-110.5,1.14,1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_116.setTransform(227.6,-112.7,1.14,1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_117.setTransform(257.8,-81.5,1.14,1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_118.setTransform(284.8,-66.7,1.14,1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAFgBAEAEQADAEABAEQgBAFgDAEQgEAEgFAAQgEAAgEgEg");
	this.shape_119.setTransform(293,-51.8,1.14,1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_120.setTransform(308.4,-69.2,1.14,1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgEAEABQAFgBADAEQADADAAAEQAAAFgDADQgDAEgFgBQgEABgDgEg");
	this.shape_121.setTransform(317.3,-98.3,1.14,1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgHAIQgCgEAAgEQAAgDACgEQADgDAEAAQAFAAADADQACAEAAADQAAAEgCAEQgDADgFAAQgEAAgDgDg");
	this.shape_122.setTransform(344.6,-67.4,1.14,1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_123.setTransform(367.9,-107.3,1.14,1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgJAJABQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_124.setTransform(392.8,-67.2,1.14,1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_125.setTransform(412.5,-62.8,1.14,1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgCgDg");
	this.shape_126.setTransform(425.9,-103.3,1.14,1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_127.setTransform(441.6,-79.8,1.14,1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgIAKQgEgEAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_128.setTransform(460.3,-85.3,1.14,1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgIAJQgDgEgBgFQABgEADgEQAEgDAEgBQAFABADADQAFAEAAAEQAAAFgFAEQgDADgFABQgEgBgEgDg");
	this.shape_129.setTransform(472.5,-56,1.14,1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_130.setTransform(478.8,-40.9,1.14,1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_131.setTransform(478.8,-34.8,1.14,1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgHAIQgCgEAAgEQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAEgCAEQgEACgEAAQgEAAgDgCg");
	this.shape_132.setTransform(-457.8,-91.6,1.14,1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDADQgDACgEABQgDgBgDgCg");
	this.shape_133.setTransform(-434.1,-103.4,1.14,1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_134.setTransform(-431.7,-88.6,1.14,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_135.setTransform(-457.2,-53.7,1.14,1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_136.setTransform(-436.4,-48.8,1.14,1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgIAAQAAgIAIAAQAEAAADACQACADAAADQAAAJgJAAQgIAAAAgJg");
	this.shape_137.setTransform(-436.4,-47.5,1.14,1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_138.setTransform(-413.5,-40.6,1.14,1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_139.setTransform(-409.7,-26.4,1.14,1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgGAIQgDgEAAgEQAAgEADgDQADgCADAAQAEAAADACQADADAAAEQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_140.setTransform(-395.7,-6.2,1.14,1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgDAEgEQADgDADAAQAEAAAEADQADAEAAADQAAAEgDADQgEADgEAAQgDAAgDgDg");
	this.shape_141.setTransform(-386.1,27.9,1.14,1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_142.setTransform(-349.6,-3,1.14,1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_143.setTransform(-348.4,-16.3,1.14,1);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_144.setTransform(-315.7,-13.3,1.14,1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_145.setTransform(-304.8,-16.1,1.14,1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_146.setTransform(-281.7,-2.1,1.14,1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_147.setTransform(-258.6,15.9,1.14,1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_148.setTransform(-247.2,-19.8,1.14,1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_149.setTransform(-217.5,-4.9,1.14,1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_150.setTransform(556.2,172.9,1.14,1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQADADABAEQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_151.setTransform(542.4,174.7,1.14,1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQADAAADADQADACAAADQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_152.setTransform(586.6,158.5,1.14,1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgJAJQgDgDAAgGQAAgFADgDQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_153.setTransform(589.1,145.7,1.14,1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_154.setTransform(554.3,123.9,1.14,1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_155.setTransform(542.1,124.6,1.14,1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDAEQgEADgEAAQgDAAgEgDg");
	this.shape_156.setTransform(518.3,100.2,1.14,1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_157.setTransform(495.6,84.7,1.14,1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEAAQAFAAADAEQAEADgBAEQABAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_158.setTransform(471,86,1.14,1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgJAJQgDgEAAgFQAAgFADgDQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgFAAgEgEg");
	this.shape_159.setTransform(466.7,79.9,1.14,1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_160.setTransform(452.9,65,1.14,1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_161.setTransform(447.8,48.2,1.14,1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_162.setTransform(430.4,62.4,1.14,1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgHAIQgDgEgBgEQABgEADgDQADgEAEABQAFgBADAEQADADABAEQgBAEgDAEQgDAEgFgBQgEABgDgEg");
	this.shape_163.setTransform(392.4,90.8,1.14,1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_164.setTransform(401.4,66.3,1.14,1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEAAQAFAAADADQAEADgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_165.setTransform(396.6,81.5,1.14,1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#A8CFE3").s().p("AgFAHQgEgDAAgEQAAgDAEgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_166.setTransform(274.3,-35.4,1.14,1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#A8CFE3").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEg");
	this.shape_167.setTransform(318.6,-36.5,1.14,1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#A8CFE3").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_168.setTransform(370.5,-25.6,1.14,1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#A8CFE3").s().p("AgFAHQgDgDAAgEQAAgCADgEQACgCADAAQAEAAADACQACAEAAACQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_169.setTransform(429.8,-96.9,1.14,1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#A8CFE3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_170.setTransform(432.3,-189.8,1.14,1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#A8CFE3").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_171.setTransform(546.3,-140.6,1.14,1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#A8CFE3").s().p("AgIAJQgFgEAAgFQAAgFAFgEQADgDAFAAQAGAAAEADQADAEAAAFQAAAFgDAEQgEAFgGAAQgFAAgDgFg");
	this.shape_172.setTransform(510.3,-198.9,1.14,1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#A8CFE3").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_173.setTransform(556.1,-224.3,1.14,1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#A8CFE3").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_174.setTransform(446.3,-222.2,1.14,1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#A8CFE3").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_175.setTransform(588.1,53.4,1.14,1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#A8CFE3").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_176.setTransform(561.1,-5.6,1.14,1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#A8CFE3").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_177.setTransform(437.7,-55.4,1.14,1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#A8CFE3").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_178.setTransform(459.6,-15.5,1.14,1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#A8CFE3").s().p("AgIAKQgEgFgBgFQABgEAEgFQADgDAFgBQAGABAEADQADAFAAAEQAAAFgDAFQgEADgGAAQgFAAgDgDg");
	this.shape_179.setTransform(429.3,-141.5,1.14,1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#A8CFE3").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_180.setTransform(444.6,-15.3,1.14,1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#A8CFE3").s().p("AgJAJQgDgDAAgGQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_181.setTransform(368.5,-160.6,1.14,1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#A8CFE3").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAFAAAEADQAEAEAAAEQAAAFgEAEQgEAEgFgBQgEABgEgEg");
	this.shape_182.setTransform(250.5,-42.5,1.14,1);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#A8CFE3").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_183.setTransform(192.4,-181.4,1.14,1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#A8CFE3").s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgGAHABQAIgBAFAGQAFAGAAAGQAAAIgFAFQgFAFgIABQgHgBgFgFg");
	this.shape_184.setTransform(172.3,-118.3,1.14,1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#A8CFE3").s().p("AgIAJQgFgEAAgFQAAgFAFgDQAEgEAEAAQAGAAAEAEQADADAAAFQAAAFgDAEQgEAEgGAAQgEAAgEgEg");
	this.shape_185.setTransform(124.7,-75.5,1.14,1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#A8CFE3").s().p("AgRARQgGgHAAgKQAAgJAGgHQAIgHAJAAQAKAAAHAHQAIAHgBAJQABAKgIAHQgHAHgKAAQgJAAgIgHg");
	this.shape_186.setTransform(224.5,-40,1.14,1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#A8CFE3").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_187.setTransform(289.7,-120.9,1.14,1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#A8CFE3").s().p("AgFAAQAAgGAFABQAHgBgBAGQABAGgHAAQgFAAAAgGg");
	this.shape_188.setTransform(360.2,-140.8,1.14,1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#A8CFE3").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_189.setTransform(414.8,-165.3,1.14,1);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A8CFE3").s().p("AgJAAQABgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEABQgJAAAAgKg");
	this.shape_190.setTransform(478.9,-111.5,1.14,1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#A8CFE3").s().p("AgIAAQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAJgJAAQgIAAAAgJg");
	this.shape_191.setTransform(524,-183.9,1.14,1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#A8CFE3").s().p("AgKALQgEgFAAgGQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_192.setTransform(574.4,-154.4,1.14,1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#A8CFE3").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_193.setTransform(556.1,-108,1.14,1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#A8CFE3").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_194.setTransform(223.5,89,1.14,1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#A8CFE3").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_195.setTransform(229.6,197.9,1.14,1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#A8CFE3").s().p("AgDAEQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAFAAQAGAAAAAFQAAAGgGAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_196.setTransform(242.1,224.5,1.14,1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#A8CFE3").s().p("AgRASQgHgIAAgKQAAgKAHgHQAHgHAKAAQAKAAAIAHQAHAHAAAKQAAAKgHAIQgIAHgKAAQgKAAgHgHg");
	this.shape_197.setTransform(352.9,150.9,1.14,1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A8CFE3").s().p("AgGAGQgCgCAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_198.setTransform(270.7,175,1.14,1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#A8CFE3").s().p("AgRATQgIgIAAgLQAAgKAIgIQAHgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_199.setTransform(221.5,160.7,1.14,1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#A8CFE3").s().p("AgHAIQgDgEAAgEQAAgDADgEQADgDAEAAQAEAAADADQADAEAAADQAAAEgDAEQgDADgEAAQgEAAgDgDg");
	this.shape_200.setTransform(158.2,169.5,1.14,1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#A8CFE3").s().p("AgHAAQAAgCACgDQACgCADAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgHAAAAgIg");
	this.shape_201.setTransform(219,61.6,1.14,1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A8CFE3").s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGABAIQgBAIgGAHQgGAHgJAAQgIAAgGgHg");
	this.shape_202.setTransform(282.9,89.1,1.14,1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#A8CFE3").s().p("AgQARQgIgHAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAHQgIAIgKAAQgJAAgHgIg");
	this.shape_203.setTransform(320.7,154.5,1.14,1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#A8CFE3").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_204.setTransform(393.2,183.6,1.14,1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#A8CFE3").s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgEgFg");
	this.shape_205.setTransform(423.5,221.1,1.14,1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#A8CFE3").s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgFAGgBQAHABAFAFQAGAFgBAGQABAHgGAGQgFAEgHAAQgGAAgFgEg");
	this.shape_206.setTransform(490.5,224.2,1.14,1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#A8CFE3").s().p("AgHAIQgDgDgBgFQABgEADgDQAEgDADgBQAFABADADQAEADAAAEQAAAFgEADQgDAEgFAAQgDAAgEgEg");
	this.shape_207.setTransform(466.7,235.4,1.14,1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#A8CFE3").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_208.setTransform(363,231.2,1.14,1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#A8CFE3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_209.setTransform(363.9,171,1.14,1);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#A8CFE3").s().p("AgFAAQAAgGAFABQAGgBAAAGQAAAGgGAAQgFAAAAgGg");
	this.shape_210.setTransform(293.5,188.7,1.14,1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#A8CFE3").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_211.setTransform(439.6,115,1.14,1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#A8CFE3").s().p("AgRATQgJgIABgLQgBgKAJgIQAHgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgHgIg");
	this.shape_212.setTransform(521.4,111,1.14,1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#A8CFE3").s().p("AgPAQQgGgGgBgKQABgIAGgHQAGgHAJAAQAJAAAHAHQAGAHAAAIQAAAKgGAGQgHAHgJgBQgJABgGgHg");
	this.shape_213.setTransform(195.5,-21.8,1.14,1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#A8CFE3").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEABQAFgBADAEQAEADgBAEQABAFgEADQgDAEgFgBQgEABgDgEg");
	this.shape_214.setTransform(183.1,-52.9,1.14,1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#A8CFE3").s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_215.setTransform(206.9,107.6,1.14,1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#A8CFE3").s().p("AgEAAQAAgFAEABQAFgBAAAFQAAAFgFABQgEgBAAgFg");
	this.shape_216.setTransform(268.3,27.5,1.14,1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#A8CFE3").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_217.setTransform(304.3,-53,1.14,1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#A8CFE3").s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAIAAAHAGQAGAGAAAIQAAAJgGAGQgHAGgIAAQgHAAgHgGg");
	this.shape_218.setTransform(389.6,5.7,1.14,1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#A8CFE3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_219.setTransform(431.4,21.5,1.14,1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#A8CFE3").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_220.setTransform(465.1,89.7,1.14,1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A8CFE3").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_221.setTransform(498.2,40,1.14,1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#A8CFE3").s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_222.setTransform(566.4,75.5,1.14,1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#A8CFE3").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_223.setTransform(580.4,-8.4,1.14,1);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#A8CFE3").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_224.setTransform(-18.8,-96.2,1.14,1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#A8CFE3").s().p("AgFAHQgDgDAAgEQAAgDADgDQACgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCg");
	this.shape_225.setTransform(25.3,-169.1,1.14,1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#A8CFE3").s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKgBQALABAHAHQAIAIAAAKQAAALgIAHQgHAJgLgBQgKABgIgJg");
	this.shape_226.setTransform(-260.9,72.4,1.14,1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#A8CFE3").s().p("AgRATQgJgIABgLQgBgKAJgHQAHgIAKAAQALAAAIAIQAHAHABAKQgBALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_227.setTransform(-436,-20.9,1.14,1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#A8CFE3").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_228.setTransform(-43.4,-191.3,1.14,1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#A8CFE3").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_229.setTransform(-226.1,-107.3,1.14,1);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#A8CFE3").s().p("AgHAIQgEgDABgFQgBgDAEgEQAEgDADAAQAFAAADADQAEAEgBADQABAFgEADQgDADgFAAQgDAAgEgDg");
	this.shape_230.setTransform(-57.6,-230.3,1.14,1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#A8CFE3").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQADADABAEQgBAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_231.setTransform(-327.2,-119.3,1.14,1);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#A8CFE3").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_232.setTransform(-319.5,-201.6,1.14,1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#A8CFE3").s().p("AgSATQgHgIgBgLQABgKAHgHQAIgJAKABQALgBAHAJQAJAHgBAKQABALgJAIQgHAHgLABQgKgBgIgHg");
	this.shape_233.setTransform(-419.1,197.6,1.14,1);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#A8CFE3").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_234.setTransform(-128.7,208.5,1.14,1);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#A8CFE3").s().p("AgRARQgGgHgBgKQABgJAGgIQAIgGAJgBQAKABAHAGQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_235.setTransform(-99.6,152.1,1.14,1);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#A8CFE3").s().p("AgGAIQgEgEAAgEQAAgDAEgEQADgDADAAQAFAAADADQADAEAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_236.setTransform(-448.1,234.9,1.14,1);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#A8CFE3").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_237.setTransform(-195.5,63.5,1.14,1);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#A8CFE3").s().p("AgSASQgHgHAAgLQAAgKAHgHQAIgIAKAAQAKAAAIAIQAIAHAAAKQAAALgIAHQgIAIgKAAQgKAAgIgIg");
	this.shape_238.setTransform(-40,68,1.14,1);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#A8CFE3").s().p("AgKALQgEgFgBgGQABgGAEgEQAEgEAGAAQAHAAAEAEQAFAEgBAGQABAGgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_239.setTransform(-280.5,-58.2,1.14,1);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#A8CFE3").s().p("AgLANQgGgGAAgHQAAgHAGgEQAEgGAHAAQAIAAAFAGQAFAEAAAHQAAAHgFAGQgFAFgIAAQgHAAgEgFg");
	this.shape_240.setTransform(-346.8,234.9,1.14,1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#A8CFE3").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_241.setTransform(-117.7,11.4,1.14,1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#A8CFE3").s().p("AgRASQgIgHAAgLQAAgKAIgHQAIgIAJAAQALAAAIAIQAHAHAAAKQAAALgHAHQgIAIgLAAQgJAAgIgIg");
	this.shape_242.setTransform(92.1,-4.1,1.14,1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#A8CFE3").s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_243.setTransform(-255.1,-16.1,1.14,1);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#A8CFE3").s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_244.setTransform(-164.5,-23.9,1.14,1);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#A8CFE3").s().p("AgFAGQgCgDAAgDQgBgIAIAAQAJAAAAAIQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_245.setTransform(155.5,87.9,1.14,1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#A8CFE3").s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_246.setTransform(136,150,1.14,1);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#A8CFE3").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEgBQAFABADADQAEADgBAEQABAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_247.setTransform(119,163.5,1.14,1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#A8CFE3").s().p("AgEAGQgDgDAAgDQAAgHAHAAQAIAAAAAHQAAADgCADQgCACgEAAQgCAAgCgCg");
	this.shape_248.setTransform(57.2,229.9,1.14,1);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#A8CFE3").s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_249.setTransform(101.7,125.9,1.14,1);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#A8CFE3").s().p("AgRASQgIgIAAgKQAAgKAIgHQAHgIAKAAQALAAAHAIQAHAHAAAKQAAAKgHAIQgHAHgLAAQgKAAgHgHg");
	this.shape_250.setTransform(151,184.9,1.14,1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#A8CFE3").s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgEgEg");
	this.shape_251.setTransform(222.6,215.4,1.14,1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#A8CFE3").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_252.setTransform(275,245.6,1.14,1);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#A8CFE3").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_253.setTransform(348.6,221.6,1.14,1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#A8CFE3").s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHABQAHgBAGAGQAFAFABAHQgBAIgFAFQgGAGgHAAQgHAAgFgGg");
	this.shape_254.setTransform(408,224.5,1.14,1);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#A8CFE3").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_255.setTransform(449.1,110.4,1.14,1);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#A8CFE3").s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_256.setTransform(83.7,17.8,1.14,1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#A8CFE3").s().p("AgNAOQgGgFAAgJQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_257.setTransform(165.4,14.8,1.14,1);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#A8CFE3").s().p("AgQARQgIgHABgKQgBgJAIgHQAHgHAJAAQAKAAAHAHQAIAHgBAJQABAKgIAHQgHAHgKAAQgJAAgHgHg");
	this.shape_258.setTransform(225.2,57.5,1.14,1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#A8CFE3").s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_259.setTransform(285.4,73.5,1.14,1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#A8CFE3").s().p("AgHAAQAAgCACgDQADgCACAAQAEAAACACQACADAAACQAAAIgIAAQgHAAAAgIg");
	this.shape_260.setTransform(308,129.8,1.14,1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#A8CFE3").s().p("AgHAHQgCgDAAgEQAAgDACgDQADgDAEAAQAEAAAEADQACADAAADQAAAEgCADQgEADgEAAQgEAAgDgDg");
	this.shape_261.setTransform(391.5,135,1.14,1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#A8CFE3").s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgGAHAAQAIAAAGAGQAGAGgBAHQABAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_262.setTransform(395.6,245.2,1.14,1);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#A8CFE3").s().p("AgJAKQgFgEAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_263.setTransform(498.7,104.4,1.14,1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#A8CFE3").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_264.setTransform(508.5,186.7,1.14,1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#A8CFE3").s().p("AgLAMQgFgFABgHQgBgGAFgFQAFgEAGAAQAHAAAFAEQAEAGAAAFQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_265.setTransform(548.8,169,1.14,1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#A8CFE3").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgHAHAAQAIAAAGAHQAFAFAAAHQAAAIgFAGQgFAGgJgBQgHABgGgGg");
	this.shape_266.setTransform(-410.1,-245.2,1.14,1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#A8CFE3").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIABQAJgBAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_267.setTransform(-397.1,-141.1,1.14,1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#A8CFE3").s().p("AgIAJQgDgDgBgGQABgEADgEQAEgDAEAAQAFAAAEADQADAEABAEQgBAGgDADQgEAEgFgBQgEABgEgEg");
	this.shape_268.setTransform(-314.7,-209.9,1.14,1);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#A8CFE3").s().p("AgNAOQgFgGgBgIQABgHAFgGQAGgFAHAAQAIAAAGAFQAGAGgBAHQABAIgGAGQgGAFgIAAQgHAAgGgFg");
	this.shape_269.setTransform(-277.5,-158.1,1.14,1);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#A8CFE3").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_270.setTransform(-255.9,-67.1,1.14,1);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#A8CFE3").s().p("AgKAMQgFgFAAgHQAAgFAFgGQAFgEAFAAQAHAAAEAEQAFAGAAAFQAAAHgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_271.setTransform(-149.6,-165.8,1.14,1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#A8CFE3").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_272.setTransform(-135.5,-60.7,1.14,1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#A8CFE3").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_273.setTransform(-138,-236.5,1.14,1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#A8CFE3").s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_274.setTransform(-77.7,-13.5,1.14,1);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#A8CFE3").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_275.setTransform(38.5,-117.9,1.14,1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AgHAHQgDgDAAgEQAAgEADgDQAEgDADAAQAEAAAEADQADADAAAEQAAAEgDADQgEADgEAAQgDAAgEgDg");
	this.shape_276.setTransform(294.6,-34.1,1.14,1);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgIAJQgFgEAAgFQAAgFAFgEQAEgDAEAAQAFAAAFADQADAEAAAFQAAAFgDAEQgFAFgFAAQgEAAgEgFg");
	this.shape_277.setTransform(316.6,-35.1,1.14,1);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_278.setTransform(341.3,12.6,1.14,1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_279.setTransform(355.2,8.9,1.14,1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_280.setTransform(369.3,-8.9,1.14,1);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_281.setTransform(382.5,8.9,1.14,1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_282.setTransform(400.3,-26,1.14,1);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_283.setTransform(402.2,-31.5,1.14,1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_284.setTransform(430.9,-24,1.14,1);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgIAKQgFgFAAgFQAAgEAFgEQAEgFAEAAQAFAAAFAFQADAEAAAEQAAAFgDAFQgFADgFAAQgEAAgEgDg");
	this.shape_285.setTransform(437.8,-45.4,1.14,1);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgEAEgDQADgDADAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_286.setTransform(472.6,-56.1,1.14,1);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgGAHQgCgDgBgEQABgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_287.setTransform(512.7,-20.3,1.14,1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_288.setTransform(526.7,-24,1.14,1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_289.setTransform(537.9,-22,1.14,1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAEgEAEQgDAEgFAAQgEAAgDgEg");
	this.shape_290.setTransform(565.1,-6.2,1.14,1);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAKgKAAQgDAAgDgDg");
	this.shape_291.setTransform(90.1,75.4,1.14,1);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEgBQAFABADADQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_292.setTransform(104,60.5,1.14,1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_293.setTransform(135.7,37.6,1.14,1);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_294.setTransform(135.9,27.2,1.14,1);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgIAKQgEgFAAgFQAAgEAEgFQAEgDAEAAQAGAAADADQAEAFAAAEQAAAFgEAFQgDADgGAAQgEAAgEgDg");
	this.shape_295.setTransform(147.3,55.2,1.14,1);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQAEgCADAAQAEAAAEACQADADAAAEQAAAFgDADQgEACgEAAQgDAAgEgCg");
	this.shape_296.setTransform(154.9,29.1,1.14,1);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_297.setTransform(181.5,48.5,1.14,1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_298.setTransform(206.7,64.9,1.14,1);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_299.setTransform(212,23.6,1.14,1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_300.setTransform(230.9,41.8,1.14,1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_301.setTransform(236.2,56.8,1.14,1);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_302.setTransform(243.5,27.1,1.14,1);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADABQAKAAAAAIQgBAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_303.setTransform(266.4,59.6,1.14,1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_304.setTransform(276.1,89.7,1.14,1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgJAKQgDgFAAgFQAAgFADgEQAEgEAFAAQAFAAAEAEQAFAEAAAFQAAAFgFAFQgEAEgFAAQgFAAgEgEg");
	this.shape_305.setTransform(288.2,64.6,1.14,1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgHAIQgCgEAAgEQAAgDACgDQADgEAEAAQAEAAAEAEQACADAAADQAAAEgCAEQgEADgEAAQgEAAgDgDg");
	this.shape_306.setTransform(284.5,81.2,1.14,1);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgIAJQgDgDAAgGQAAgEADgEQAEgEAEAAQAGAAADAEQAEAEgBAEQABAGgEADQgDADgGAAQgEAAgEgDg");
	this.shape_307.setTransform(305.7,61.2,1.14,1);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgIAJQgFgDAAgGQAAgEAFgEQAEgEAEAAQAFAAAFAEQADAEAAAEQAAAGgDADQgFAEgFAAQgEAAgEgEg");
	this.shape_308.setTransform(309,75.8,1.14,1);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_309.setTransform(322.9,51.3,1.14,1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgFAEgEQAEgDAFAAQAFAAAFADQAEAEAAAFQAAAFgEAEQgFAFgFAAQgFAAgEgFg");
	this.shape_310.setTransform(354.8,67.7,1.14,1);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AgHAIQgDgDgBgFQABgEADgDQADgEAEAAQAFAAADAEQADADABAEQgBAFgDADQgDAEgFAAQgEAAgDgEg");
	this.shape_311.setTransform(373.4,98.8,1.14,1);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_312.setTransform(396.7,67.4,1.14,1);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_313.setTransform(411.5,59.1,1.14,1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_314.setTransform(431.8,77.6,1.14,1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_315.setTransform(427.5,110.5,1.14,1);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_316.setTransform(442.4,134.8,1.14,1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_317.setTransform(455.2,132.6,1.14,1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQAEgEADAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_318.setTransform(478.3,132.4,1.14,1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("AgHAIQgEgDABgFQgBgEAEgDQADgDAEgBQAFABADADQAEADgBAEQABAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_319.setTransform(490,162.2,1.14,1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgDADAAQAEAAADADQAEADAAADQAAAEgEADQgDADgEAAQgDAAgDgDg");
	this.shape_320.setTransform(533,141.7,1.14,1);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgEAFgEQAEgFAEAAQAFAAAFAFQADAEAAAEQAAAGgDAEQgFADgFAAQgEAAgEgDg");
	this.shape_321.setTransform(565.4,144.1,1.14,1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_322.setTransform(536.3,182.4,1.14,1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_323.setTransform(590.9,172.1,1.14,1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_324.setTransform(83.7,-147.8,1.14,1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgFAEgEQADgDAFAAQAGAAADADQAEAEABAFQgBAGgEADQgDAEgGABQgFgBgDgEg");
	this.shape_325.setTransform(546.9,226.2,1.14,1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_326.setTransform(582.2,223.2,1.14,1);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgDQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_327.setTransform(-401.9,-201,1.14,1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgIAKQgFgEAAgGQAAgEAFgEQAEgFAEAAQAGAAAEAFQADAEAAAEQAAAGgDAEQgEADgGAAQgEAAgEgDg");
	this.shape_328.setTransform(-384.3,-168.2,1.14,1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_329.setTransform(-371.8,-159.9,1.14,1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_330.setTransform(-369.2,-145.2,1.14,1);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AgGAIQgDgEAAgEQAAgDADgEQADgCADAAQAEAAADACQADAEAAADQAAAEgDAEQgDADgEAAQgDAAgDgDg");
	this.shape_331.setTransform(-332.1,-155.6,1.14,1);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_332.setTransform(-323.7,-159.2,1.14,1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_333.setTransform(-326,-149.8,1.14,1);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_334.setTransform(-305.2,-145.6,1.14,1);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_335.setTransform(-289.9,-151.3,1.14,1);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_336.setTransform(-284.9,-161.7,1.14,1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgJAJQgEgEAAgFQAAgFAEgEQAEgDAFAAQAFAAAFADQAEAEAAAFQAAAFgEAEQgFAFgFAAQgFAAgEgFg");
	this.shape_337.setTransform(-243.8,-170.1,1.14,1);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_338.setTransform(-248.5,-152,1.14,1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_339.setTransform(-255.4,-130.3,1.14,1);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_340.setTransform(-243.8,-136.2,1.14,1);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEAAQAFAAAEADQADAEABAEQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_341.setTransform(-228,-124.7,1.14,1);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_342.setTransform(-177.8,-146.8,1.14,1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_343.setTransform(-178,-108.4,1.14,1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEABQAGgBADAEQAEAEAAAEQAAAFgEAEQgDADgGAAQgEAAgEgDg");
	this.shape_344.setTransform(-150.1,-100,1.14,1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_345.setTransform(-156.5,-76.6,1.14,1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADgBQAEABADACQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_346.setTransform(-119.6,-104.8,1.14,1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgIAAQAAgIAIAAQAEAAADACQACADAAADQAAAJgJAAQgIAAAAgJg");
	this.shape_347.setTransform(-115,-72.6,1.14,1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgCADgBQAEABADACQADADAAADQAAAEgDADQgDACgEAAQgDAAgDgCg");
	this.shape_348.setTransform(-80.2,-64.3,1.14,1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_349.setTransform(-66.9,-72.3,1.14,1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_350.setTransform(-62.8,-51.7,1.14,1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgQASQgHgIAAgKQAAgJAHgIQAHgGAJgBQAKABAHAGQAHAIAAAJQAAAKgHAIQgHAHgKAAQgJAAgHgHg");
	this.shape_351.setTransform(351.7,204.2,1.14,1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgRARQgGgHgBgKQABgJAGgHQAIgHAJAAQAKAAAHAHQAIAHAAAJQAAAKgIAHQgHAHgKAAQgJAAgIgHg");
	this.shape_352.setTransform(72.4,68,1.14,1);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgHAJAAQAKAAAIAHQAGAHABAJQgBAKgGAHQgIAHgKAAQgJAAgHgHg");
	this.shape_353.setTransform(-180.9,-231.9,1.14,1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AgQARQgIgHAAgKQAAgJAIgHQAHgIAJABQAKgBAIAIQAGAHAAAJQAAAKgGAHQgIAIgKgBQgJABgHgIg");
	this.shape_354.setTransform(56.6,103.3,1.14,1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgRARQgGgHgBgKQABgJAGgIQAIgGAJAAQAKAAAHAGQAIAIAAAJQgBAKgHAHQgHAIgKgBQgJABgIgIg");
	this.shape_355.setTransform(216,-60.1,1.14,1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFABAGQgBAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_356.setTransform(-399.5,-203.8,1.14,1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("AgKALQgGgEABgHQgBgFAGgFQAFgGAFAAQAHAAAEAGQAFAFABAFQgBAHgFAEQgEAGgHAAQgFAAgFgGg");
	this.shape_357.setTransform(529.2,-107.3,1.14,1);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgKALQgFgEgBgHQABgFAFgFQAEgGAGAAQAHAAAEAGQAGAFgBAFQABAHgGAEQgEAFgHABQgGgBgEgFg");
	this.shape_358.setTransform(509.6,14.5,1.14,1);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFABAGQgBAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_359.setTransform(-41.9,-118.8,1.14,1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_360.setTransform(448.2,-79.8,1.14,1);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgLALQgEgEAAgHQAAgFAEgFQAGgGAFAAQAHAAAFAGQAEAFAAAFQAAAHgEAEQgFAFgHABQgFgBgGgFg");
	this.shape_361.setTransform(462.2,121.6,1.14,1);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgGAFAAQAHAAAFAGQAEAEAAAGQAAAHgEAEQgFAFgHABQgFgBgFgFg");
	this.shape_362.setTransform(-46.3,-71.4,1.14,1);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgGAGAAQAHAAAFAGQAEAEAAAGQAAAHgEAEQgFAGgHgBQgGABgFgGg");
	this.shape_363.setTransform(562.6,96.7,1.14,1);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_364.setTransform(-184.9,-162.6,1.14,1);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("AgLALQgEgEAAgHQAAgFAEgFQAFgGAGABQAHgBAFAGQAEAFAAAFQAAAHgEAEQgFAFgHABQgGgBgFgFg");
	this.shape_365.setTransform(77.3,-230.3,1.14,1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgLALQgEgEgBgHQABgFAEgFQAFgGAGAAQAHAAAFAGQAEAFAAAFQAAAHgEAEQgFAFgHABQgGgBgFgFg");
	this.shape_366.setTransform(244.9,121.6,1.14,1);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AgLALQgEgEAAgHQAAgFAEgFQAGgGAFAAQAHAAAFAGQAEAFAAAFQAAAHgEAEQgFAGgHAAQgFAAgGgGg");
	this.shape_367.setTransform(-317.2,223.9,1.14,1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgRASQgGgIAAgKQAAgJAGgHQAIgIAJABQAKgBAHAIQAIAHgBAJQABAKgIAIQgHAGgKAAQgJAAgIgGg");
	this.shape_368.setTransform(534.4,172.4,1.14,1);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgRASQgGgIAAgKQAAgJAGgHQAIgIAJAAQAKAAAHAIQAIAHgBAJQABAKgIAIQgHAGgKABQgJgBgIgGg");
	this.shape_369.setTransform(280.5,142.8,1.14,1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#091729").s().p("ADNDIQh1gTiOhIQiPhIhVhSQhVhSAXgtQAXguB1AUQB1ASCOBIQCPBIBVBSQBVBTgXAtQgQAfg/AAQgaAAgjgFg");
	this.shape_370.setTransform(434.1,124.9,1.14,1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#091729").s().p("ABRLMQkOh0i/jJQh/iFhliwQhYiXgOhTQg9hPgThCQgUhGAagyQANgcAegWQhlh+gSgRQhIhGhdgQQgwgIgvAEQhVAGgtAsQhUBSArDCQAsDICgDrQhwiQhWiyQiblBBsiQQAjgvBKgeQDxhfF1CaQCUA+COBbQCBBTBVBRQB7AsCBBBQBwA4BeA+QgZgvgXg3IgdhFQiKk6p3iXQDdAjC/BRQEOBzC/DJQBuB0BdCXQBPCBAjBjQBCBTAXBHQAXBJgaA1QgOAbgZATQBiB6AUATQBIBGBcAPQAxAIAugDQBVgGAtgtQBUhRgqjCQgtjIigjrQB1CbBRCmQCbFChsCQQgiAuhLAeQjtBeltiUQiRg7iPhaQh/hQhZhRQiEguiIhEQh/hBhrhHQAnA/AgBGQAQAnAVAzQCKE5J3CYQjdgji/hRgAo8kuQgtBYCHCSQCHCSDqB2QDrB2DFAVQDGAVAshYQAthZiHiSQiGiRjrh3Qjrh2jFgVQgmgEghAAQiHAAgkBIg");
	this.shape_371.setTransform(435.5,127.9,1.14,1);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#1B3557").s().p("AqkYtQkHkDh2hVQijh2hZAtQhFAjgZB+QgRBRgCCvInhAAIgLgUQhPiTg3iyQg9jFgRi7QgqnMDjj6QBkhtCXg7QBZgjCzgkQCogiBCgfQBugyAohjQA4iKhRjMQguhzh5i+QiIjVjfi1QhvhZgJgJQgsgpAKgbQAPgtB/gNQB/gMDEAXQHPA3HSC/QGeCqELCsQHhE5EWG7QB7DFBdDxQA8CZBDDqQA/DaAYA5QAtBoA1gCQAvgBAohNQAagyAmh2QAoiAARgnQAihLAlAAQBPABBAFCQA5EfAjHeg");
	this.shape_372.setTransform(-46.5,91.9,1.14,1);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#1B3557").s().p("Aa9QWQmcjioXlNQqpmmhEgoQlgjRjBg9QjkhJhuBbQhoBWAGDgQAECSBAEsQBEE/AIBtQAODKhaA1Qh+BIkWjLQjeiijWj3Qili/iSjwQifkGhokPQj7qJCBnvMBMVAAAMAAAAs5QlcivmIjYg");
	this.shape_373.setTransform(315,-106.2,1.14,1);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#0F2036").s().p("EAsIAnEQjShwiMiLQh7h6hWinQgdg4hijtQhJixhKhoQhoiTimhpQhgg+hcgfQhCgWhogSQiQgYgvgLQh8gbiBgzQj7hhi3iUQh8hkidi4Qi5jYhQhNQisiijbhxQj+iEkSgpQiRgWk+gGQkcgFikgkQj8g3jqidQhthKhMhNQgtgthIhaQhHhZg0g1QhWhVh6hXQmjkoo7hgQj8gjhXgRQiLgbgYg1Qgag5BLhcQBJhZCZhlQFUjjHjiSIZmAAQBZAnBSAxQC4BwB0CbQBIBiBvDiQB+D/BgCWQCnEDD4D9QFLFTGiEjQLwIILgCFQEEAvDvgJQBmgEEkgkQDvgeCyAGQEEAKE3BPQEMBDCXA0QEABXDAB1IAAbGg");
	this.shape_374.setTransform(81.8,0,1.14,1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#142945").s().p("EhIuAnEMAAAhOHMCRdAAAMAAABOHg");
	this.shape_375.setTransform(65.3,0,1.14,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cosmosbg, new cjs.Rectangle(-465.4,-249.9,1061.5,500), null);


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


(lib.bintangs3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFD5C").s().p("AmtNGIkIhwIEWhEIBwkIIBFEWIEGBwIkVBEIhwEIgAEXqrIj4hQIDzhdIAAkDICjDKID3hRIiODaICZDRIj7hDIiYDRg");
	this.shape.setTransform(-245.9,81.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFAB32").s().p("AEIOEIhwglIBugpIAAh2IBKBcIBwgkIhABiIBFBeIhygeIhFBfgAs5n0IiQALIBrhiIhSh3ICLArIA+iDIAgCOICQgLIhrBiIBSB4IiLgsIg+CCgAJbozIkgAsIDLjRIgskgIDQDMIEggtIjLDRIAsEgg");
	this.shape_1.setTransform(-158.6,-49.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AW/RbIhwiMICuAtICMhwIgsCtIBvCNIiugtIiMBvgA4zG0IiYgbICHhLIgWiZIByBqICKhEIhBCMIBrBvIiZgTIhJCJgAxZuFIisA+IBiicIiMh2IC4AHIAfi1IBXCiICsg9IhiCaICNB3Ii4gHIghC0g");
	this.shape_2.setTransform(-226.4,45.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AW1UVIjehCIDYhWIg3jgIC2COICoifIgiDmIDdBAIjXBWIA3DhIi2iQIinCggAbgoMIiGAUIBfhhIgUiGIBhBfICGgUIhfBgIAUCHgA881ZIhUgyIBggOIAUhgIAsBYIBhgKIhFBEIAoBZIhXgtIhJBCg");
	this.shape_3.setTransform(289.9,33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFAB32").s().p("Au8O0IjehSIDghLIAJjtICNC+IDkhBIiIDBICEDFIjihGIiTC6gAK+CuIkaBIIC1jnIjHjSIEhApIBTkZIBrEOIEahGIi2DoIDGDQIkfgpIhUEbgAt0ssIjJj7IE3BQID7jJIhQE4IDID8Ik3hRIj7DHg");
	this.shape_4.setTransform(254.1,88.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFD5C").s().p("ABCDrIiohQIC0gsIAXi4IBiCdIC4gjIh5CPIBbCjIiuhGIh/CJgA1YhOIijjMID9BCIDMijIhBD8ICjDMIj9hCIjMCigASzgCIi7BCIBqioIiYiAIDHAHIAjjEIBeCwIC7hDIhpCpICXCAIjHgHIgjDDg");
	this.shape_5.setTransform(364.3,-125.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400.4,-151.3,348,344);


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


(lib.SpaceStar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.bintangs3("single",0);
	this.instance.parent = this;
	this.instance.setTransform(10.7,-8.7);

	this.instance_1 = new lib.bintangs3("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.8,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.cosmosbg("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.SpaceStar3, new cjs.Rectangle(-465.4,-225.2,1061.5,500), null);


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
				_this["txtAns"+i].value = "";
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
				_this["txtAns"+i].value = "";
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
				_this["txtAns"+i].value = "";
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
		{src:"images/y6s7/Bitmap19.png?1534006439932", id:"Bitmap19"},
		{src:"images/y6s7/Bitmap20.png?1534006439932", id:"Bitmap20"},
		{src:"images/y6s7/Bitmap21.png?1534006439932", id:"Bitmap21"},
		{src:"images/y6s7/Bitmap3.png?1534006439932", id:"Bitmap3"},
		{src:"images/y6s7/Bitmap9.png?1534006439932", id:"Bitmap9"},
		{src:"sounds/mdroid_talk.mp3?1534006439932", id:"mdroid_talk"},
		{src:"sounds/questionAlert.mp3?1534006439932", id:"questionAlert"},
		{src:"sounds/questionComplete.mp3?1534006439932", id:"questionComplete"},
		{src:"sounds/stdClick.mp3?1534006439932", id:"stdClick"},
		{src:"sounds/submitAns.mp3?1534006439932", id:"submitAns"},
		{src:"sounds/timeout.mp3?1534006439932", id:"timeout"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1534006439932", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1534006439932", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1534006439932", id:"an.TextInput"}
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