(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,480,231);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,137);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,576,453);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,461);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,511);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,178);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,137);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,137);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,137);


(lib.intro1bg = function() {
	this.initialize(img.intro1bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,590,449);// helper functions:

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


(lib.vid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAFIAAgJIAPgIIAAAZg");
	this.shape.setTransform(8.9,-0.3,3.551,3.551,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAQIAAgfIArAAIAAAfg");
	this.shape_1.setTransform(-4.1,0.2,3.551,3.551,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AFF0").s().p("AgnAoQgQgQAAgYQAAgWAQgRQARgQAWAAQAXAAARAQQAQARAAAWQAAAYgQAQQgRAQgXAAQgWAAgRgQg");
	this.shape_2.setTransform(0,0,3.551,3.551,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AFF0").s().p("AgHAFIAAgJIAPgIIAAAZg");
	this.shape_3.setTransform(8.9,-0.3,3.551,3.551,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AFF0").s().p("AgVAQIAAgfIArAAIAAAfg");
	this.shape_4.setTransform(-4.1,0.2,3.551,3.551,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40,40.1);


(lib.TH_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-155,6);

	this.instance_1 = new lib.Bitmap5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-180,-174);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-155,6,505,461);


(lib.shade_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-240,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-116,480,231);


(lib.msg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00AFF0").s().p("AgPACQAAAAgBAAQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAIAfAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAAAg");
	this.shape.setTransform(0.2,1.9,3.551,3.551,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AFF0").s().p("AgPACQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAIAfAAQAAAAABAAQAAABAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_1.setTransform(0.1,-0.3,3.551,3.551,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AFF0").s().p("AgPACQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAfAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAg");
	this.shape_2.setTransform(0,-2.3,3.551,3.551,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFABIAKgHIABANg");
	this.shape_3.setTransform(8.3,5.2,3.551,3.551,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVAPQgJgGAAgJQAAgIAJgGQAJgGAMgBQANABAJAGQAJAGAAAIQAAAJgJAGQgJAGgNABQgMgBgJgGg");
	this.shape_4.setTransform(0.1,-0.2,3.551,3.551,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AFF0").s().p("AgnAoQgRgQAAgYQAAgWARgRQARgQAWAAQAYAAAQAQQARARAAAWQAAAYgRAQQgQAQgYAAQgWAAgRgQg");
	this.shape_5.setTransform(0,0,3.551,3.551,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40.1,40.1);


(lib.mic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAOIAAgaQAAgDACgCQACgCACgBQAHABAAAHIAAAaQAAAGgHABQgGgBAAgGg");
	this.shape.setTransform(-0.1,-3.4,3.551,3.551,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMALQgFgGAAgGIAAgOIAFAAIAAAOQAAAFAEADQAEAFAEAAQAGAAADgFQAEgDAAgFIAAgOIAFAAIAAAOQAAAHgFAFQgGAGgHgBQgFABgHgGg");
	this.shape_1.setTransform(0.1,2.1,3.551,3.551,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAFQAAgEAEgCQADgDADAAQAFAAADADQADACAAAEg");
	this.shape_2.setTransform(0.3,8.8,3.551,3.551,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AFF0").s().p("AgnAoQgQgQAAgYQAAgWAQgRQARgQAWAAQAXAAARAQQAQARAAAWQAAAYgQAQQgRAQgXAAQgWAAgRgQg");
	this.shape_3.setTransform(0,0,3.551,3.551,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-20,39.9,40.1);


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


(lib.light_efx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AXdRBQgggYgjgXQgXglgZgkQh9iwiviOQi5iWjVhWQhDhEhTg4QinhxjLgyQkXhGlcBWQkQw/hfhtQiOjBrPAwQDmhUEOAaQEYAhBbB4QBABfAjBXQAjBYB+GRQB9GQAGB7IAeglQDagrDDAJQDDAIDkB8QDkB7BuCUQC9BDC4CXQC3CWByDPQAsAZA/AsQA+AsBGBLIAABLQhOhchthRg");
	this.shape.setTransform(69.7,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AW3RRQghgXgjgXQgXgmgZgkQh8iwiviNQi6iWjVhXQhDhDhTg5QimhwjMgzQkXhFlcBWQj4xDg1g6QiAkWrRAXQDYg+EAAwQEAAxBeB4QBkBrAeCCQAfCDBTE2QBUE2AvC9IARgRQDagrDEAJQDDAIDjB8QDkB7BvCTQC8BEC4CWQC4CXBxDPQAtAZA+AsQA/AsBFBLIAABLQhOhchshSg");
	this.shape_1.setTransform(73.6,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-124.9,337.6,252.4);


(lib.glow2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-46,-89);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-89,92,178);


(lib.GB_eyebrowR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABSBIQAFARAMARQAFAHAGAGABngfQgPAVgHAbQgHAdAIAaABngfQgbgegmgZQgugfgoAAQgZgBgVALQgXALgLAVQgJARAFAMQAFAPAdAHQAcAIAOAJQAOAHAeAeQAcAeAQAJQAQAJAOgBQANgCAHgDACHg+QgTANgNAS");
	this.shape.setTransform(-1.2,5.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#496D91").s().p("AAwBaQgQgKgdgdQgdgegOgJQgOgIgcgHQgdgIgFgPQgFgMAJgQQALgVAXgMQAVgLAZABQAnAAAvAgQAmAZAbAeQgPAUgHAbQgHAeAIAaQgHADgNABIgEABQgMAAgOgIg");
	this.shape_1.setTransform(-2.8,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABygbQgEAGgDAIQgPAcgBAhQAAATAGALQAAABABAAACThAQgUAQgNAVQgNgegogPQgZgKgVgFQgMgCgJgCQgdgDgSACQgSAAgQADQgOADgVATQgSARgEATQgBAEAAADQgCAWAIAKQAJALAHAAQAHgBALgHQALgHAQADQARAEAQAFQARAFAMAGQALAGAQAOQAQAOASAMQASAMAjgGQAEAGAGAEQAHAFAIAA");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#496D91").s().p("AA9BPQgSgMgQgOQgRgOgKgGQgMgGgQgFQgRgFgQgEQgQgDgLAHQgLAHgIABQgGAAgJgLQgJgKACgWIABgGQAEgUASgQQAVgUAPgCQAPgDASgBQASgBAcADIAXADQAVAFAZAKQAnAPANAeIgHAOQgPAcAAAhQAAATAGALIAAABQgLACgKAAQgUAAgMgIg");
	this.shape_3.setTransform(-1.7,-0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-7.5,29,25.7);


(lib.GB_eyebrowL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADbAsQgJgKgIgMQgIgNgXgHQgYgGhEAMQhEAOglAhQglAigFAFQgEAEgPABQgOAAgbgUQgcgUgBgTQAAgJADgJQAIgPAJgMQAMgQAOgOQAOgNAPgMQAIgGAJgGQAUgMAYgMQAvgYAtgHQAygHAtAOQATAFARAKQALAIAJAKQAbAeAEAkQAEAigFAQQgFAPgKAFQgKAEgIgJgAjHhNQgZAWgOAaQgQAdAAAeQgBAgASAcQASAdAdAL");
	this.shape.setTransform(-0.8,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#496D91").s().p("AixBfQgbgUgBgTQgBgJADgJQAIgPAJgNQAMgPAOgOQAOgNAPgMIARgMQAUgMAZgMQAvgYAsgHQAygHAtAOQATAFARAKQALAIAJAKQAbAeAEAjQAFAjgGAPQgFAQgKAEQgJAFgJgKQgIgJgIgNQgIgMgYgHQgYgHhEANQhDANgmAiIgqAmQgEAFgPABIAAAAQgPAAgagUg");
	this.shape_1.setTransform(4.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AingQQgKAZAEAaQAEAbAMANQAOANAWgKQAWgLAOgGQAPgHAlgGQAkgIAxgDQAxgEAcgBQAdAAAYAWQAXAWAOAEQAOACALgOQALgRAAgWQAAgWgMgYQgLgZgZgUQgZgWgggHQghgIhEACQhCACg4AQQg4ARgOAKQgPALgJAZgAi9hmQgrAwgQAsQgJAaAFAkQAFAjA2AQ");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#496D91").s().p("AjFBTQgMgNgEgbQgEgaAKgZQAJgZAPgLQAOgKA4gRQA4gQBCgCQBEgCAhAJQAgAHAZAVQAZAVALAYQAMAYAAAWQAAAWgLARQgLAOgOgCQgOgEgXgWQgYgWgdAAQgcABgxAEQgwADglAIQglAGgPAHIgkARQgKAEgIAAQgKAAgIgHg");
	this.shape_3.setTransform(4,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.2,-10,53,28.1);


(lib.cz_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("APzx5QpZhemLI4QgEAkgGANQkiC3jaE0QhDBGg3CvQpSKiFCDlQFCDlE8iKQCzhhCfiQQChiQBJhyQBJhzBnjnAn3iDICCApQBLAlBSBWQBSBYBECLQBECLABC/QABDPhtCT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6B3A1").s().p("AtDLJQlCjlJSqhQA3ixBDhFICCApQBLAlBSBXQBSBXBECLQBECKABDAIAAADQAADNhsCRQBsiRAAjNIAAgDQgBjAhEiKQhEiLhShXQhShXhLglQBvjpERi7QAQCbA6CCQHpncE5DcQgnF0loFCIgBgBIAAAEIACAvQhnDnhJByQhJByihCQQifCRizBgQh3A1h4AAQjGAAjJiPg");
	this.shape_1.setTransform(-6.2,30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1F1F1").s().p("AkADhQDZk0Eii2QABA6AFA3QkQC6hwDog");
	this.shape_2.setTransform(-24.6,-35.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("ApXB1QAZhQE/kPQE/kRHuCwQCfKym4jVQk5jcnoHbQg7iCgQiag");
	this.shape_3.setTransform(61.1,-62.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DC3D42").s().p("ApFDUQAHgNADgkQGMo3JXBeQCYAzAGCIQnuiwk/ERQk/EPgZBQQgFg3gBg6g");
	this.shape_4.setTransform(58.7,-83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.1,-116.9,223.2,233.9);


(lib.close_butt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAPIAjgiIAEAFIgjAig");
	this.shape.setTransform(17.9,-0.7,3.551,3.551,-2.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTgOIAEgFIAjAiIgEAFg");
	this.shape_1.setTransform(17.9,-0.7,3.551,3.551,-2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPADIAAgFIAfAAIAAAFg");
	this.shape_2.setTransform(-17.8,4.9,3.551,3.551,-2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgOALgMQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgPAAgLgLgAgYgXQgKAKAAANQAAAOAKAKQALALANAAQAOAAALgLQAKgKAAgOQAAgOgKgJQgLgLgOAAQgNAAgLALg");
	this.shape_3.setTransform(17.9,-0.7,3.551,3.551,-2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgPAAgLgLgAgYgXQgKAJAAAOQAAAOAKAKQALALANAAQAOAAALgLQAKgKAAgOQAAgOgKgJQgLgLgOAAQgNAAgLALg");
	this.shape_4.setTransform(-18,0.7,3.551,3.551,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-14.1,62.8,28.3);


(lib.call = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAKIgIgHQgGgFAFgGIAAAAQAFgFAFAEIAJAHIACACIAAAAIABAEIgBACIAAABIgBACQgDADgDAAQgDAAgCgCg");
	this.shape.setTransform(-5.9,-7.6,3.551,3.551,-137.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFAMQgDgBgCgCQgFgGAGgFIAJgHQAFgFAGAGQAEAHgGAEIgJAHQgBACgCAAIgCAAg");
	this.shape_1.setTransform(8,5.5,3.551,3.551,-137.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AARgCQgIgDgJAAQgJAAgHADQgQAEgFANIgBgDIAAgDIAAgCIABgBQACgHAKgHQAMgFANAAQAOAAALAFQALAGACAIIABAAIABADIgBADIAAABIgBACQgEgNgRgEg");
	this.shape_2.setTransform(-0.3,0.4,3.551,3.551,-137.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CC00").s().p("AgnAoQgQgQAAgYQAAgWAQgRQARgQAWAAQAXAAARAQQAQARAAAWQAAAYgQAQQgRAQgXAAQgWAAgRgQg");
	this.shape_3.setTransform(0,0,3.551,3.551,-137.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED1C24").s().p("AgnAoQgQgQAAgYQAAgWAQgRQARgQAWAAQAXAAARAQQAQARAAAWQAAAYgQAQQgRAQgXAAQgWAAgRgQg");
	this.shape_4.setTransform(0,0,3.551,3.551,-2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2,p:{rotation:-137.1,x:-0.3,y:0.4}},{t:this.shape_1,p:{rotation:-137.1,x:8,y:5.5}},{t:this.shape,p:{rotation:-137.1,x:-5.9,y:-7.6}}]}).to({state:[{t:this.shape_4},{t:this.shape_2,p:{rotation:-2.1,x:0,y:-0.5}},{t:this.shape_1,p:{rotation:-2.1,x:-9.5,y:1.8}},{t:this.shape,p:{rotation:-2.1,x:9.6,y:1.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40.1,40.2);


(lib.bb_iris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQBTQgRgDgHgbQgGgbAHghQAIgjAQgWQAQgVARADQAQAEAHAaQAGAbgHAhQgIAjgQAWQgPASgNAAIgEAAg");
	this.shape.setTransform(4.9,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#993366").s().p("AgsDUQgqgJgRhFQgQhEAThXQAShXArg4QAqg4AqAJQAqAJAQBEQARBFgTBWQgSBYgrA4QglAwgjAAIgMgBgAAih3QgRAWgHAiQgHAiAGAbQAHAaAQAEQAQADARgWQARgVAHgiQAHgigGgbQgGgbgRgDIgEgBQgPAAgOATg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-21.3,22.3,42.6);


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.8,-354.4,847.9,709);


(lib.b6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAFg0QAJAQAGAQQAKAcgFAaQgCAIgCADQgGAIgPAAQgHAAgDgCQgDgBgCgEQgBgCgBgFQAAgEgBgHQgCgHgCgLIgBgKQgEgTACgR");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AgOAjQgCgBgCgEIgCgHIgCgLQAJgCAFgFQACgCAGgMQAFgQADgEQADgEAFgDIAAAAQAKAdgFAZQgBAIgDADQgFAIgPAAQgHAAgEgCg");
	this.shape_1.setTransform(0.4,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-6.3,7.3,12.6);


(lib.b5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAEg2QAGAJALAXQACAEAEAHQACAFABAEQAAACABABQAEAMgDALQgBAMgIAJQgEAFgGADQgFADgGgBQgIgCgFgPQgCgEgBgFQgDgHgDgKQgGgSgGgV");
	this.shape.setTransform(-0.3,-2.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AgGAdQgJgDgFgOIgDgKIAAgCQAGgRANgGIAJgBIAKgCIAGgCIABAEQAEALgDAMQgBALgIAJQgEAFgGADQgEACgDAAIgDAAg");
	this.shape_1.setTransform(0.6,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-9.3,8.6,13.1);


(lib.b4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgCglQgPAVgCANQgBAJAAADQAAAHABAFQAEAIAFADQAGAEAGABQAGABAIAAQACAAABgCQACgBAAgDQABgEgCgHQAAgCAAgCQAAgFgBgCQgDgTAEgN");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AACAUQgGgBgGgEQgFgDgEgIQgBgEAAgHIABgNQAMABAHAIIAKAKQAFACAFgBIAAAEQACAHgBAEQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAIgEAAIgKgBg");
	this.shape_1.setTransform(0,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-4.8,6.3,9.6);


(lib.b3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAEgnQgUANgIAXQgBADgBAIQAAADgBAEIAAALQAEAIAJADQAMAGAKgJQABgKACgJQADgMAEgKQAEgJAGgJ");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AgGAOQgIgDgEgIIAAgLIABgHIAGAGQAIAFAIAAQAFAAAJgEQgCAJgBAKQgHAFgHAAQgDAAgFgCg");
	this.shape_1.setTransform(-0.8,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-4.9,7.5,9.9);


(lib.b2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgFgdQgJAOgDAPQgBADgBAEQgBAIACAFQADAGAGADQADABAGAAQAGAAAGgGQABgHACgGQAAgCAAgCQABgLACgGQABgEABgDQABgFgBgE");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AADAPIgJgBQgHgDgCgGQgCgFABgHIABgHIAHAEQAJAHALAAIAFAAIgDAMQgFAGgFAAIgBAAg");
	this.shape_1.setTransform(-0.3,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-4,6.1,8);


(lib.b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAKgfQgOASgLAOQgBACgBACQgGALADAHQAEAHANABQAEABADgCQAEgBACgFQABAAABgBQAJgNABgI");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AABANQgMgBgEgHQgDgGAGgLIACACQABADAFAFQAFAFAQACIgCABQgCAFgEABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgEAAg");
	this.shape_1.setTransform(-0.5,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-4.1,6.4,8.3);


(lib.vidcall_frame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.close_butt("single",0);
	this.instance.parent = this;
	this.instance.setTransform(276,-212);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.instance_1 = new lib.call("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(78.9,231.6);

	this.instance_2 = new lib.msg("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.1,233.3);

	this.instance_3 = new lib.vid("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-14.7,235.1);

	this.instance_4 = new lib.mic("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-61.5,236.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053F53").s().p("AwiBPIAAidMAhFAAAIAACdg");
	this.shape.setTransform(8.7,234.3,3.551,3.551,-2.1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#053F53").s().p("AwiBzIAAjlMAhFAAAIAADlg");
	this.shape_1.setTransform(-8.2,-221.5,3.551,3.551,-2.1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-385.6,-276.2,771.4,554.8);


(lib.scanLines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.shade_lines("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.7,2.6,2.827,2.827,-2.2,0,0,-0.3,0.3);
	this.instance.alpha = 0.148;
	this.instance.filters = [new cjs.ColorFilter(0.390625, 0.390625, 0.390625, 1, 156, 156, 156, 0)];
	this.instance.cache(-242,-118,484,235);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1,y:27},29).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-690.5,-352.2,1381.1,704.9);


(lib.ipf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.badge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,15.7,0.421,0.421,0,0,0,-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-143.4,343.9,305.2);


(lib.GB_eyeR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABuAOIgLgIQgsgZgtgQQghgLgVgCQgDAAgDAAQgNgBgGAGQgFAEAAAIQAAAJAGADQgTAHgLAUQgKAPAAAVQgBACAAAE");
	this.shape.setTransform(0.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A91B3").s().p("AhsAcIAAgGQAAgUAKgPQAMgUASgIQgGgCAAgJQAAgIAFgFQAGgFANAAIAGAAQAVACAhALQAtARArAaIALAIIAAAAQgyBNhAAAQgwAAg3grg");
	this.shape_1.setTransform(0.1,5.9);

	this.instance = new lib.bb_iris("single",0);
	this.instance.parent = this;
	this.instance.setTransform(6.2,1.8,0.382,0.382,-6,0,0,0.1,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABJBgQAIgsgCgnQgCgbgHgZQgRg5gnAAQgmAAgWApQgXAogGApQgGArAEgP");
	this.shape_2.setTransform(2.3,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD876").s().p("AgGBoQgbgCgSgSQgKgMgGgUIgIgiIACgJQAKguAVgjQAWgmAmAHQAZAFARAlQAJAUAHAfQACAlgIAtIADAEQgPAMgQAHQgTAKgVAAIgIgBg");
	this.shape_3.setTransform(2.6,-1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAB965").s().p("AhKAuQAFgrAXgnQAXgoAmAAQAmAAARA5QAHAYACAcQgHgfgJgTQgQglgZgFQgmgHgXAmQgVAigKAvIgCAJIAAgCIgEANIgCAEQgBAAAFgfg");
	this.shape_4.setTransform(2.2,-6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7A91B3").s().p("AhsAcIAAgGQAAgUALgPQALgUASgIQgGgCAAgJQAAgIAFgFQAGgFANAAIAGAAQAVACAhALQAsARAtAaIALAIIAAAAQgzBNhAAAQgwAAg3grg");
	this.shape_5.setTransform(-0.2,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_1},{t:this.shape,p:{x:0.1,y:3.7}}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.instance},{t:this.shape_5},{t:this.shape,p:{x:-0.2,y:4.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.9,-15,23.9,28);


(lib.GB_eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACFArQAAgDgBgCQgBgIgBgFQgDgNgHgHQAAgCgDgCQgBgBAAgCQgBgCACgFQADgJgCgHQgCgCgBgCQgCgFgPgEQAAgBgOgCIgBAAQgCAAAAAAQgCgBgCABQgQgCgiAEQgJAAgJACQgwAGgaALQgYAKgVANQgDABgCACQgCABgBABQgJAHgFAH");
	this.shape.setTransform(-0.4,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#86AEDA").s().p("AgCgPIABAAIABAOIADAQIAAABIgFgfg");
	this.shape_1.setTransform(13.2,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7A91B3").s().p("AgTBOQhAgSgyhTQAGgHAIgHIAEgCIAEgDQAVgOAYgKQAbgLAvgGIATgCQAigEAQACIADAAIACAAIABAAQAOACAAABQAPAEADAFIACAEQADAHgEAJQgBAFAAACQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAIADAEQAHAHACANIADANIABAFIAAAEIABABIgBAAQACBBgtAOQgUAHgYAAQgeAAgjgLg");
	this.shape_2.setTransform(-0.4,6);

	this.instance = new lib.bb_iris("single",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,-1.1,0.382,0.382,-13.3,0,0,0.2,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABjAyQgIhhgpgeQgqgfglAcQgnAbgRA1QgQAwAFAqQAAACAAAC");
	this.shape_3.setTransform(-1.7,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAB965").s().p("AhVABQARg0AngbQAlgcAqAfQApAeAIBhIgEAEQgDgUgIgfQgIgegVgYQgMgOgKgFQgZgMgXAPQgWALgOAWQggAsgLBDIgCANQgFgqAQgxg");
	this.shape_4.setTransform(-1.7,-6.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD876").s().p("Ag0BiQgYgFgTgSIgBgBIACgEIAAgEIACgNQALhCAggtQAOgXAWgLQAXgOAZAMQAKAEAMAOQAVAZAIAfQAIAeADAUIgKALQgjAkgpAPQgWAJgUAAQgLAAgKgDg");
	this.shape_5.setTransform(-1.9,-4.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance},{t:this.shape_2,p:{x:-0.4,y:6}},{t:this.shape_1,p:{x:13.2,y:7.9}},{t:this.shape,p:{x:-0.4,y:1.4}}]}).to({state:[{t:this.shape_4},{t:this.shape_5},{t:this.shape_3},{t:this.instance},{t:this.shape_2,p:{x:-0.2,y:7.2}},{t:this.shape_1,p:{x:13.4,y:9.1}},{t:this.shape,p:{x:-0.3,y:2.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-17,28.7,31.8);


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


(lib.GB_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GB_eyebrowR("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-36.8,-99.4);

	this.instance_1 = new lib.GB_eyebrowL("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,-96.2);

	this.instance_2 = new lib.GB_eyeL("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(24.1,-72);

	this.instance_3 = new lib.b6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(32.6,64.7);

	this.instance_4 = new lib.b5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(0.6,78,1,1,22,0,0,0.3,-0.7);

	this.instance_5 = new lib.b4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-18.6,83.8,1,1,-10.7);

	this.instance_6 = new lib.b3("single",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-31.8,69.6,1,1,25.7);

	this.instance_7 = new lib.b2("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-52.5,73.7,1,1,28.7,0,0,-0.1,0.1);

	this.instance_8 = new lib.b1("single",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-57.8,57.9,1,1,10);

	this.instance_9 = new lib.GB_eyeR("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-47.2,-78.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADWoaQAxB1A9AwQA9AxBkBYQBkBZBECcQBDCdAJC1QAAACAAADQAGClinBFQhEAag1AFQi9AGhDhhAlcgrQgaBsgJA+QgOBgAIBNQADAYAFAYQAFAWAHAUQANAoAWAkQABADACACAiRpoQhVCChmA9QhnA8hBA7QhBA6hBB2QhBB1gcDDQgFAdAAAbQgDCZB4BPQCNBcCLhbQAwBNBJAiQBdAsCHgZQBQgPA5giQAUgMAQgOQgbgmgIg4QgBgFAAgFQgBgGAAgGQgUjFAii1");
	this.shape.setTransform(-17.6,-15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4947E").s().p("AC/BjQgQANgUAMQg5AihQAPQiHAZhdgsQhJgigwhNQiLBbiNhcQh4hOADiZQAUAxAhAoQB3CVC7hWQANAnAWAkIADAFIgDgFQgWgkgNgnQgHgUgFgWIAJAKQA0A4BCAeQBDAfBMAFQBLAFBFgXQAigKAwgYIAngSIABAMIABAKQAIA3AbAnQgbgngIg3QArAxA9AdQA+AcBHAFQBFADBFgTQBGgTAmglQARgQAlg4QASgdASgSQAGClinBEQhFAag0AFIgXABQiqAAg/hbg");
	this.shape_1.setTransform(-17.6,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6699CC").s().p("AGJJLQhHgEg+gdQg9gdgrgxIgBgKIgBgMQgHhJAAhGQAAh5AVhyQgVByAAB5QAABGAHBJIgnATQgwAXgiALQhFAWhLgEQhMgFhDggQhCgfg0g3IgJgKQAFAVAHAVQi7BXh3iWQghgogUgxQAAgbAFgdQAcjEBBh0QBBh2BBg7QBBg6Bng9QBmg8BViDQDSgyCVCAQAxB2A9AwQA9AwBkBZQBkBZBECcQBECdAIC1IAAAEQgSASgSAdQglA5gRARQgmAkhGAUQg6AQg6AAIgWgBgAmFFXQADAZAFAYQgFgYgDgZQgDgdAAgfQAAg0AJg8QAJg+AahtQgaBtgJA+QgJA8AAA0QAAAfADAdgACVmsQADAfAiANQAAgQgIgLQgHgLgHgTQgGgTgBgQQgLAWADAagAjAncQgTANAAAEQgBAFACABIACAAIADgBQASgFAHgJQAHgJAGgOQAGgOgBgIQgNAYgRANg");
	this.shape_2.setTransform(-17.6,-20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#252016").s().p("ACiAUQgDgZALgWQABAQAHASQAHATAHALQAHALAAAQQghgNgEgfgAjFgEQgBgBAAgFQAAgDATgOQASgNAMgYQACAIgHAOQgGAPgHAIQgHAJgSAGIgDABIgBAAIgBgBg");
	this.shape_3.setTransform(-19,-65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AgagvQABABAGAdQAHAdAHAOQATAaANgF");
	this.shape_4.setTransform(62.1,-69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1,3,true).p("AsjHuQASCWBOCSQBWCfC8BoQC8BoDTgTQDRgTCthhQCthiCDigQB0iMBCirQAFgNAFgNQAXhAARhDQAShGhFjoQhFjqhSkeQhSkdhXiIQhXiHjagmQjagmjDAhQi8AghoBiQgEADgDAEQhpBnhNEbQhNEagaDzQgaDygDA+QhqA9A5CFQATAtAtAcQAaAQAeAJ");
	this.shape_5.setTransform(4.3,-3.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6699CC").s().p("AmWPeQi9hphVifQhOiRgSiWQAaAQAeAJQgegJgagQQgtgcgTgtQg5iFBpg9QADg+AbjyQAajzBNkbQBNkaBohoIAIgHQA4AFARA1QASA1A4ARQB1iXA+AFQA+AGAMBAIANBiQBxh7CpAUQCqAVA5AqQA6AqAxBlQAbA5AGAuQAPAkAZgBQATCKAlDdQAnDdCGHdQhDCshzCMQiECgisBhQitBijSATQggADggAAQivAAifhYg");
	this.shape_6.setTransform(1.7,2.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#77B2ED").s().p("AHTBhQgmjcgTiJQgZABgPgkQgGgvgbg4Qgwhlg6gqQg6gripgUQiogVhyB7IgNhhQgMhBg+gFQg/gFh0CWQg5gRgRg1QgSg1g4gEQBohiC8ggQDEghDZAmQDaAnBXCHQBXCHBSEdQBSEdBGDqQBEDqgSBFQgRBDgXBAIgKAaQiGnegmjeg");
	this.shape_7.setTransform(23.8,-38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADVmUQA1CuCFAtQCFAtBSBWQBTBVAxBxQATArAGAnQAKA+gXA0QglBTh8AiQh7Ahg+hFQg+hEgohPQgnhPgngjQgogjgSBFQgFATgjBzQgjBziUAAQiygGhShGQgkgpgCg5QAAgCAAgCQgBg2ANgrQAOgrAEgUQABgIgBgDQgDgGgLAGQgZARgVAWQgoAsghAxQgMARgMAPQgnAyhBgFQg7gGg0gbQgdgPgVgZQgXgagHgfQgHgZAEgcQAGg6AWg2QAUgxAggsQAggvAsgkQAOgKANgKQAjgXAkgVQAxgcA2gSQAcgJAZgIQAggJAhgNQAogOAigZQAjgYAVgZQACgCACgCQAVgZARgh");
	this.shape_8.setTransform(-16.8,-39.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#252016").s().p("ACcAyQgHgGgFgKQgFgNACgTQAAgGALgTQADATAIASIAMAaQAEAHgEANQgJgCgKgIgAivADIgBgDQgCgKAMgNIAZgeIAAgBIADgFQABATgLASIgMASIgCADIgFADIgFACIgBAAIgCgBg");
	this.shape_9.setTransform(-18,-73.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F4947E").s().p("AGaC+Qg+hEgohPQgnhOgngjQgogjgSBFIgoCFQgjBziUAAQiygGhShGQgkgpgCg5IAAgEQAoATAbALQA9AYA1AFQA/AGA3gUQA7gWAfgvQAJgNAlhdQAahBAngVQAngTAxARQAsAQAiAlQARASAoA4QAiAwAaAWQBNBGBzgRQBbgOA0g4QAKA9gXA0QglBTh8AiQgoALgiAAQhFAAgqgvgApEBIQg7gGg0gbQgdgPgVgYQgXgagHgfQASAEATABQA3ADAxgTQAegNAkgZQAVgPAogfQA5gpA+geQAqgVAWAPQAMAIAEAQQAEAQgEAQQgDAMgIARIgEAIQgDgGgLAGQgZARgVAWQgoAsghAxQgMAQgMAPQgkAtg5AAIgLAAg");
	this.shape_10.setTransform(-16.6,-16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6699CC").s().p("AikGQQg1gGg9gYQgcgLgngSQgBg3AMgrQAOgqAEgVQABgHgBgDIAEgJQAJgRADgMQAEgQgEgPQgEgRgNgIQgWgPgpAVQg/Aeg4AqQgpAfgVAOQgkAageAMQgwAUg4gEQgSgBgTgDQgGgZADgdQAHg5AVg2QAVgzAfgrQAhguAsgkIAbgUQAigXAkgWQAygcA2gRIA1gSQAggJAggMQAogPAjgYQAigZAWgYIAEgFQAUgYARghQClgiCuBgQA1CuCEAtQCFAtBSBVQBTBWAyBxQATArAGAnQg1A6haANQhzARhOhFQgagXgigwQgog4gQgSQgjgmgsgPQgwgSgnAUQgoAUgaBCQgkBcgKAOQgfAwg7AWQgqAPgvAAIgcgBgACDkGQgCATAEANQAFAJAIAHQAJAIAKABQAEgMgFgHIgLgbQgIgTgEgSQgKASAAAIgAiYk/IAAAAIgZAeQgLANABAKIACAFQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAFgCIAFgDIACgDIALgSQALgSAAgTIgEAFg");
	this.shape_11.setTransform(-17,-46.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#624162").s().p("AgOgZQAfgZAxgXIAOAJQgtAcgcAYIAAAAQggAZg2A9QALgvA2g0g");
	this.shape_12.setTransform(0.7,-0.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("AsoGUQBbJJHKChQHJCgFHk2QDbjRBokjQAziPAXijQgchxgahdQgmiHhEkkQhGklhJirQhJiqisg+Qisg+izgGQixgFijAsQg7ARg4A0QgDAEgEADQhbBahPC8Qg9CRglCcQgNA2gKA3QgzDQAQCgQgQAIgOAHQgzAagmAsQgSAVgHAbQgRA/AJBAQAJBGAuA3QAYAdAeAWQBJA3ABgFAJHrvQABABAHAdQAGAeAHAOQAVAaANgFAmmmJQAsgNAxgDQB6gOCNASQCOAQCKApQCSAtBqBrQAVAWAQAZQAaArAIA1QASBxhCBSQgDADgCADQglAthAAkQi+BqjZAQQjbAQkPhMQhhglg+gkQiXhYAxhNQAHgLALgLQACgCACgBQAegcA5gaQgliaBrhtQBKhMBkgcg");
	this.shape_13.setTransform(2.1,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F4947E").s().p("AD9EhQh/gUkWATQkXAShfhlQhfhlg+geQg+gfAQg7QAQg9BSgpIgCADIgEADQgLALgHALQgxBOCXBXQA+AkBhAkQEPBMDagPQDagQC+hqQBAglAlgtIAFgEQBChTgShxQgIg1gagrQBDApAfBXQAfBXguBiQguBjhTAcQhTAcg5BCQgsAzhXAAQgZAAgcgEg");
	this.shape_14.setTransform(-9.9,14.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C5CCBA").s().p("AmfCIQhgglg+gkQgphmBJhFQAVgUAdgRQA1geA7gNQA7gNBBAFQg5ASgzAfQg1AegdAyQgOAXAYAPQAyAfA8AQQA4AOA6AIQA9AHA9ACQAzADAzgBQAyAAAygEIAfgDQCNgMCGgmQAkgJAggSQBPgqAXA/IgFAGQgmAshAAkQi9BqjaAQQglADgmAAQi9AAjig/g");
	this.shape_15.setTransform(-7.9,15.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996699").s().p("Ai4CaQg9gCg8gHQg6gIg5gOQg7gQgzggQgXgPAOgXQAcgxA2geQAzgfA4gSQBmgsBtgPQBGgKA4ALQAwAJAhAZQBMgfCCgEQCBgECLAzQASBxhCBSQgWg/hPAqQggASgkAJQiGAniOAMIgfADQgwAEgyAAIgeAAQglAAglgCg");
	this.shape_16.setTransform(1.6,5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC6699").s().p("AiqCNQAHgLAMgLIADgDQAegcA6gbQgliZBqhtQBKhMBjgcQgQAWgMAZQgcA6gMBZQgHAzABAjQACAsAQAjQg7ANg1AeQgcARgVAUQhJBFApBnQiYhYAxhNg");
	this.shape_17.setTransform(-58.5,-8.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#993300").s().p("AoEBvQgCgjAHgzQAMhXAcg6QAMgaARgWQAsgNAxgDQB6gOCNASQCOARCKApQCSAtBqBqQAVAWAQAZQAaArAIA1QiLgziBADQiCAEhMAgQghgagwgJQg4gKhGAKQhtAOhmAsQhAgFg7ANQgRgigBgug");
	this.shape_18.setTransform(4.1,-22.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#77B2ED").s().p("AG9hbQgIhOgGghQgKg1gcgwQgNAFgUgaQgHgPgHgdIgHgfIgCgCQgBgJABgKIgCgLQgIg8gmg4QgthAhIgqQg9gihHgRQhGgRh0gPQh1gPgPCZQgggmgKhQQgng1hDACQgLAAhFBmQgjgMBLhdQhyANhdATIgDgEQA3g1A8gQQCigtCyAGQCzAFCrA+QCtA+BJCqQBICrBGElQBFEjAlCHQAbBeAbByQgXCigzCPQhvnQgvnfg");
	this.shape_19.setTransform(26.5,-35.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6699CC").s().p("AjeRVQnKighbpKIACACIACABIAAABIACABIABABIAEADQA5AqAFAAIAAAAIABAAIgBAAIAAAAQgFAAg5gqIgEgDIgBgBIgCgBIAAgBIgCgBIgCgCQgegVgYgeQgug2gJhGQgJhAARg/QAHgcASgVQAmgqAzgcIAegOQgQihAzjQQAKg3ANg1QAlicA9iSQBPi7BbhaIAHgHIAEAEQBdgTBxgNQhLBdAjAMQBGhmAKAAQBEgCAmA1QAKBQAfAmQAQiZB0APQB1APBHARQBGARA+AiQBIAqAsBAQAnA4AIA8IABALQAAAKABAJIABACIAIAfQAGAdAHAPQAVAaANgFQAbAwAKA1QAGAhAIBOQAvHgBwHPQhoEkjbDQQjYDNkQAAQiMAAicg3gACqGIQB/ATA5hCQA5hCBTgcQBTgcAuhjQAuhjgfhWQgfhXhDgpQgQgZgVgWQhqhriSgtQiKgpiOgRQiNgSh6AOQgxADgsANQhkAchKBMQhrBuAlCaQg5AageAcIACgDQhSAogQA9QgQA8A+AfQA+AeBfBlQBfBlEXgSQCHgJBkAAQBoAABCAKg");
	this.shape_20.setTransform(-1.6,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_9,p:{x:-47.2,y:-78.6,startPosition:0}},{t:this.instance_8,p:{rotation:10,x:-57.8,y:57.9}},{t:this.instance_7,p:{regX:-0.1,regY:0.1,rotation:28.7,x:-52.5,y:73.7}},{t:this.instance_6,p:{rotation:25.7,x:-31.8,y:69.6}},{t:this.instance_5,p:{rotation:-10.7,y:83.8}},{t:this.instance_4,p:{regX:0.3,regY:-0.7,rotation:22,x:0.6,y:78}},{t:this.instance_3,p:{x:32.6,y:64.7}},{t:this.instance_2,p:{x:24.1,y:-72,startPosition:0}},{t:this.instance_1,p:{x:21.2,y:-96.2,startPosition:0}},{t:this.instance,p:{x:-36.8,y:-99.4,startPosition:0}}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_9,p:{x:-45.4,y:-84.2,startPosition:1}},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_2,p:{x:25.9,y:-77.6,startPosition:1}},{t:this.instance_8,p:{rotation:0,x:-56.9,y:60.5}},{t:this.instance_7,p:{regX:0,regY:0,rotation:0,x:-49.4,y:75.6}},{t:this.instance_6,p:{rotation:0,x:-29.2,y:72.4}},{t:this.instance_5,p:{rotation:0,y:87.8}},{t:this.instance_4,p:{regX:0,regY:0,rotation:0,x:1.1,y:82.7}},{t:this.instance_3,p:{x:28.6,y:67.8}},{t:this.instance_1,p:{x:23.1,y:-101.8,startPosition:1}},{t:this.instance,p:{x:-35,y:-105,startPosition:1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-118.9,185.6,230.3);


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


(lib.boss_profilepix = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GB_head("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-2.8,0.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.996)").ss(7,1,1).p("AR0hMQAgHXk3FkQk3FknYAgQnXAgllk3Qlkk2ggnZQggnXE2lkQE3lkHYggQHYggFkE2QFkE3AhHZg");
	this.shape.setTransform(-0.9,-2.1,0.84,0.84);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A92F33").s().p("AruNcQlkk2ggnZQggnXE2lkQE3lkHYggQHYggFkE2QFkE3AhHZQAgHXk3FkQk3FknYAgQgtADgqAAQmiAAlDkag");
	this.shape_1.setTransform(-0.9,-2.1,0.84,0.84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.instance_1 = new lib.vid("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-85.6,-87.2,1.6,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFEFE").s().p("AjnEKQhuhhgLiRQgKiRBhhuQBghuCSgLQCRgJBuBgQBvBgAKCSQAKCRhhBuQhgBviSAKIgaAAQiBAAhkhXg");
	this.shape_2.setTransform(-85.3,-86.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.6,-115.2,212.2,212.5);


(lib.tEn5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  //_this.mcCont.visible = true;
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_7
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(413.9,470.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Candy-dandy! Planet Candy!\nLet’s get moving.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 339;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(247,397.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A5EF+IAAr2MAyJAAAIAAL2");
	this.shape.setTransform(247.2,427.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A5EiaMAmvAAAIEOESIhSkSIIeAA");
	this.shape_1.setTransform(247.2,481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ANrDyMgmvAAAIAAr2MAyJAAAIAAL2IoeAAIBSETg");
	this.shape_2.setTransform(247.2,441.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("This is your first clue:\nWe found candy wrappers at the scene.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 488;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(48.1,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,1,1).p("Egh5AGGIAAsLMBDzAAAIAAML");
	this.shape_3.setTransform(50.2,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,1,1).p("Egh5gCyIZTAAIFQFlIiUllMAnkAAA");
	this.shape_4.setTransform(50.2,58.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AomDSI5TAAIAAsKMBDzAAAIAAMKMgnkAAAICUFng");
	this.shape_5.setTransform(50.2,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-197.6,-38.3,491.6,116.9);


(lib.tEn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  //_this.mcCont.visible = true;
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(454.7,470,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_7
	this.myTxt2 = new cjs.Text("Alright! As always, you can count on me. ", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 447;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(236.2,421.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egh5gCaMA4PAAAID4ESIg8kSIIoAA");
	this.shape.setTransform(234.8,478);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Egh5AEFIAAoEMBDzAAAIAAIE");
	this.shape_1.setTransform(234.8,436.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AWWB5Mg4PAAAIAAoDMBDzAAAIAAIDIooAAIA8ESg");
	this.shape_2.setTransform(234.8,450.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("I’m serious. Here’s your mission:\nFind out who’s behind this and bring back the Sun.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 541;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(-4.3,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,1,1).p("EgpQgCiMApeAAAIFyFFIi2lFMAmHAAA");
	this.shape_3.setTransform(-2,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,1,1).p("EgpQAGGIAAsLMBShAAAIAAML");
	this.shape_4.setTransform(-2,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAODkMgpeAAAIAAsMMBShAAAIAAMMMgmHAAAIC2FFg");
	this.shape_5.setTransform(-2,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-277,-37.4,545.4,113.5);


(lib.tEn1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		var speed = 30;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(186.4,30.3,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Click anywhere to continue.", "italic bold 20px 'Quantico'", "#FFFFFF");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 314;
	this.myTxt.parent = this;
	this.myTxt.setTransform(0,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(192,240,240,0.996)").ss(4,0,0,3).p("A8EAAMA4JAAA");
	this.shape.setTransform(0,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(192,240,240,0.996)").ss(1,0,0,3).p("A8EEFIAAoEMA4JAAAIAAIE");
	this.shape_1.setTransform(0,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(102,204,0,0.898)").s().p("A8DECIAAoDMA4HAAAIAAIDg");
	this.shape_2.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tEn1copy, new cjs.Rectangle(-181.6,-26,392.9,79.8), null);


(lib.tEn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		//this.mcCont.visible = false;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  //_this.mcCont.visible = true;
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_6
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(427.8,465.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.myTxt2 = new cjs.Text("Tell me you’re kidding, boss!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 325;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(257.3,419.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4OiaMAlHAAAIBWAAID4ESIg8kSIHEAA");
	this.shape.setTransform(257.3,476);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4OEFIAAoEMAvHAAAIBWAAIAAIE");
	this.shape_1.setTransform(257.3,434.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AOPB5IhWAAMglHAAAIAAoEMAvHAAAIBWAAIAAIEInEAAIA8ESg");
	this.shape_2.setTransform(257.3,448.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Someone has stolen the Sun!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 335;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(36.7,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A4fEFIAAoEMAw/AAAIAAIE");
	this.shape_3.setTransform(38.5,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A4fiyIXJAAIFxFEIi2lEIW7AA");
	this.shape_4.setTransform(38.5,44.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhWBfI3JAAIAAoCMAw/AAAIAAICI27AAIC2FFg");
	this.shape_5.setTransform(38.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-132.7,-26,338.7,90.4);


(lib.tBm5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  //_this.mcCont.visible = true;
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_7
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(467.3,471.1,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Gula-gula! Planet Kandi!\nSaya akan pergi ke situ dengan segera.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 431;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(255.3,398.7);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Egg4AF+IAAr2MBBxAAAIAAL2");
	this.shape.setTransform(254.9,428.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egg4gCaMA0zAAAIEOESIhSkSIKCAA");
	this.shape_1.setTransform(254.9,482);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AT7DyMg0zAAAIAAr2MBBxAAAIAAL2IqCAAIBSETg");
	this.shape_2.setTransform(254.9,442.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Inilah klu pertama awak:\nKami telah menemui pembalut gula-gula di tempat kejadian.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 628;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(95.1,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,1,1).p("EgyTAGGIAAsLMBknAAAIAAML");
	this.shape_3.setTransform(95.4,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,1,1).p("EgyTgCiMAqVAAAIFyFFIi2lFMA3WAAA");
	this.shape_4.setTransform(95.4,57.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("An+DkMgqVAAAIAAsMMBknAAAIAAMMMg3WAAAIC2FFg");
	this.shape_5.setTransform(95.4,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-228.6,-37.4,648.1,113.5);


(lib.tBm3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  //_this.mcCont.visible = true;
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_7
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(477.9,472.4,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_6
	this.myTxt2 = new cjs.Text("Baiklah! Seperti biasa, bos boleh serahkan kepada saya.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 601;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(182.2,426.2);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Egt9AEFIAAoEMBb7AAAIAAIE");
	this.shape.setTransform(181.6,441);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Egt9gCaMBO9AAAIEOESIhSkSIKCAA");
	this.shape_1.setTransform(181.6,482.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("EAhAAB5MhO9AAAIAAoDMBb7AAAIAAIDIqCAAIBSESg");
	this.shape_2.setTransform(181.6,455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer_1
	this.myTxt1 = new cjs.Text("Saya serius. Ini misi awak:\nCari dalangnya dan kembalikan Matahari.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 442;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(0,-29.6);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// Layer_2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(4,1,1).p("Egh+gCiMAhvAAAIFxFFIi2lFIfTAA");
	this.shape_3.setTransform(0.9,57.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(1,1,1).p("Egh+AGGIAAsLMBD9AAAIAAML");
	this.shape_4.setTransform(0.9,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgPDkMghvAAAIAAsMMBD9AAAIAAMMI/TAAIC2FFg");
	this.shape_5.setTransform(0.9,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222.9,-37.4,445.9,113.5);


(lib.tBm1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt.text;
		this.myTxt.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(193,30.7,0.35,0.35,0,0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1));

	// Layer_1
	this.myTxt = new cjs.Text("Klik mana-mana untuk teruskan.", "italic bold 20px 'Quantico'", "#FFFFFF");
	this.myTxt.name = "myTxt";
	this.myTxt.textAlign = "center";
	this.myTxt.lineHeight = 31;
	this.myTxt.lineWidth = 351;
	this.myTxt.parent = this;
	this.myTxt.setTransform(0,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A8EAAMA4JAAA");
	this.shape.setTransform(0,26.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A8EEFIAAoEMA4JAAAIAAIE");
	this.shape_1.setTransform(0,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CC00").s().p("A8DECIAAoDMA4HAAAIAAIDg");
	this.shape_2.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.tBm1copy, new cjs.Rectangle(-181.6,-26,399.5,80.2), null);


(lib.tBm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _this = this;
		//this.mcCont.visible = false;
		var myStr = this.myTxt1.text;
		this.myTxt1.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt1.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  //_this.mcCont.visible = true;
			  _this.play();
		  }
		}
		typeWriter();
	}
	this.frame_1 = function() {
		this.stop();
		this.mcCont.visible = false;
		var _this = this;
		var myStr = this.myTxt2.text;
		this.myTxt2.text = "";
		var i = 0;
		function typeWriter() {
		  if (i < myStr.length) {
		    _this.myTxt2.text += myStr.charAt(i);
		    i++;
		    setTimeout(typeWriter, txtAnimSpeed);
		  } else {
			  _this.mcCont.visible = true;
		  }
		}
		typeWriter();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_3
	this.mcCont = new lib.cursor();
	this.mcCont.name = "mcCont";
	this.mcCont.parent = this;
	this.mcCont.setTransform(420.3,462.6,0.35,0.35,0,0,0,0.5,0.5);
	this.mcCont._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mcCont).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.myTxt2 = new cjs.Text("Bos bergurau, ya.", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt2.name = "myTxt2";
	this.myTxt2.textAlign = "center";
	this.myTxt2.lineHeight = 31;
	this.myTxt2.lineWidth = 262;
	this.myTxt2.parent = this;
	this.myTxt2.setTransform(293.4,417.2);
	this.myTxt2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.myTxt2).wait(1).to({_off:false},0).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("Ax7iaIblAAIEOESIhSkSIFWAA");
	this.shape.setTransform(292.5,473.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("Ax7EFIAAoEMAj3AAAIAAIE");
	this.shape_1.setTransform(292.5,432);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AJqB5I7lAAIAAoDMAj3AAAIAAIDIlWAAIBSESg");
	this.shape_2.setTransform(292.5,446);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// t
	this.myTxt1 = new cjs.Text("Matahari telah hilang dicuri orang!", "italic bold 20px 'Quantico'", "#0EE0E0");
	this.myTxt1.name = "myTxt1";
	this.myTxt1.textAlign = "center";
	this.myTxt1.lineHeight = 31;
	this.myTxt1.lineWidth = 398;
	this.myTxt1.parent = this;
	this.myTxt1.setTransform(61.2,-14.3);

	this.timeline.addTween(cjs.Tween.get(this.myTxt1).wait(2));

	// b
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0EE0E0").ss(1,0,0,3).p("A8EEFIAAoEMA4JAAAIAAIE");
	this.shape_3.setTransform(61.4,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#0EE0E0").ss(4,0,0,3).p("A8EiyIXKAAIFxFEIi1lEIeDAA");
	this.shape_4.setTransform(61.4,44.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ak6BfI3JAAIAAoCMA4IAAAIAAICI+DAAIC1FFg");
	this.shape_5.setTransform(61.4,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.6,-26,401.6,90.4);


(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tapir
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-299,-184);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-299,-184);

	this.instance_2 = new lib.Bitmap9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-299,-184);

	this.instance_3 = new lib.Bitmap10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-299,-184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[]},1).wait(1));

	// shine
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.098)").s().p("EgwXAj+MgClhDdQgJjbDcgJMBUlgDQMhUiBMnQgtg1gEhhgEAxyABXIBLe0QAIDbjbAJI/PBMg");
	this.shape.setTransform(2.8,4.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// g
	this.instance_4 = new lib.boss_profilepix("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-2.7,-30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(7));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egw3AkAMgCnhEJQgIjeDegJMBdZgDlQDegIAJDeMACnBEJQAIDejeAJMhdZADlIgQAAQjPAAgIjWg");
	var mask_graphics_1 = new cjs.Graphics().p("Egw3AkAMgCnhEJQgIjeDegJMBdZgDlQDegIAJDeMACnBEJQAIDejeAJMhdZADlIgQAAQjPAAgIjWg");
	var mask_graphics_4 = new cjs.Graphics().p("Egw3AkAMgCnhEJQgIjeDegJMBdZgDlQDegIAJDeMACnBEJQAIDejeAJMhdZADlIgQAAQjPAAgIjWg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:2.8,y:6.5}).wait(1).to({graphics:mask_graphics_1,x:2.8,y:6.5}).wait(2).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_4,x:2.8,y:6.5}).wait(3).to({graphics:null,x:0,y:0}).wait(1));

	// scan lines
	this.instance_5 = new lib.scanLines();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-0.9,-36.5);

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},3).wait(1).to({_off:false,mode:"single",startPosition:4},0).wait(1).to({mode:"independent"},0).to({_off:true},2).wait(1));

	// Layer 9
	this.instance_6 = new lib.light_efx("single",1);
	this.instance_6.parent = this;
	this.instance_6.setTransform(88.3,-56.7);
	this.instance_6.alpha = 0.5;
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).to({_off:true},1).wait(1));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABpoJIAGgGQCWhODnBdQB7AyBXBaQAyAzAmBAQAWAkASAnQBrDshSDxQgTA3gWAuQhLCchxA3QggAPgIAFQjAAQkdhGQgKAZgNAYQgDAGgBACIgCAAIhsgHQl3gkh/hbQANh3gCh8IgMABQg/hggVhYABpoJQgWgpgigdQghgbgpgLQgGgChqAWQhaASi4BFQiHgyiZgFQg1gBgzADQgXAogRAsQgpBpgFBvQgCBBALBYQABAKACAKQABAOADARQAIA3APBWQAEAfADgMQALAHANAEQBsAtBghLABujaQAnghAChAQAAgYgFgcQAAgCAAgCQgHgkgHgdQgNg4gOgdABujaQAhChAHAuQANBbgFDSQgFCqgsBxAApi8QAEgBAEgBQAngJAWgTAmboKQgfAMgiANQgmAOggARQiiBVAFCEQADAZAFAYQAUBhAxBSQgBAsAMAvAhHi8QkqAzkBB0AAgDiIonAb");
	this.shape_1.setTransform(198.1,128.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A92F33").s().p("ABLI3IhsgIQl3gkh/haQANh4gCh7IIngcIonAcIgMAAQg/hggVhYQgLgqAAgqIAAgHQgxhSgUhhQB3hbCjhHQCBg4D6hMQAzCVAgCbIgIACIAIgCQAdCNANCQQAYENgjEKIACABgAp3hVQEBhzEqgzQkqAzkBBzgABoH9QAshxAFiqQAFjRgNhcQgHgughihQAnghACg/QFQh2DYA9QAxAzAnBAQAVAjASAoQBrDshSDxQgTA3gWAuQhLCchxA3IgoATQgkADgoAAQiqAAjng5gAs4AlQgNgFgLgHIgHgSIgXiOIgEgfIgDgTIASgCQArjGBYi0QA1gCA9APQAgAIAoAOQijBVAFCFQAEAYAEAYQAUBhAxBSIAAAHQAAAqALAqQg8AvhBAAQgnAAgogQgAAsj+IAAAAgAq8kIIAAAAgACNmvIAAgDIABADIgBAAg");
	this.shape_2.setTransform(198.6,134.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC3D42").s().p("ACuJ2QAikKgXkOQgNiQgdiMQAngJAWgTQgWATgnAJQggibg0iWQj5BMiBA5QijBGh3BcQgFgYgDgZQgFiECihVQAggRAmgOIBBgZIhBAZQgmAOggARQgogPgfgHQg9gPg2ABQhYC0gqDHIgSABQgLhYAChBQAFhvAphpQARgsAXgoQAzgDA1ABQCZAFCHAyQC4hFBagSQBpgWAGACQAqALAhAbQAiAdAWApIAGgGQCWhODnBdQB7AyBXBaQjXg9lQB2IAAgFQAAgWgFgZIAAgEQgHgkgHgdQgNg4gOgdQAOAdANA4QAHAdAHAkIAAAEIAAAAQAFAZAAAWIAAAFQgCBAgnAhQAhChAHAuQANBbgFDSQgFCqgsBxQgKAZgNAYIgEAIgADwlzIAAAAg");
	this.shape_3.setTransform(188.7,128.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1,3,true).p("AFNrDQDFByBdCOQBoCjA7DPQgiB8gqBnQg1CChCBeQh1CqibBIQibBJhgAMQhdALmkAAQhNgshLhwQiCjCgpi2QgXhqAHhkQAAAAAAgBQACgSACgTQFknCCAhhQAQgMAMgGQANgHAIgBQABAAABAAQBcgLBqALQDnAWCGB2QAEADAEAE");
	this.shape_4.setTransform(269.6,115.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F1F1").s().p("AKdDFQgUhJgahFQimh1jGhEQjshPjyAGQlSCljjEgIAAgBIAEglQFjnBCAhhQAQgMAMgGQANgHAJgBIABAAQBcgLBrALQDmAWCGB2IAJAHIgJgHIAPjOQDFByBdCOQBpCjA7DOQgjB9gqBnQgKhzgehzgAj6ltIAEAFIgBAAgAj2loIAAAAg");
	this.shape_5.setTransform(269.6,87.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C6B3A1").s().p("AmWJVQhNgshLhwQiDjCgoi2QgYhpAIhlQDkkhFRilQDygGDsBPQDGBECmB2QAaBFAUBJQAeBzAKByQg1CChBBeQh2CqiaBIQibBJhhAMQhaALmCAAIgkAAg");
	this.shape_6.setTransform(265.7,126.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("ANiP0QBchJA0hpQA1hrAWhvQAli3gvjDQhLk6jWjaQjWjakRhiQhFhwizhvQiyhxikgpQilgqilARQilAQhZAYQgrA4gjA8QhsC6gZDcQgKBfgEBfAnSDLQBHCEBjBqQBmBuB9BJQB+BMCPAgQCOAhCMgQQEgDUBgAzQgEAEgEACANiP0QAFADAFAC");
	this.shape_7.setTransform(205.3,47.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C6B3A1").s().p("AHqHqQiMAQiOggQiPggh+hMQh9hKhmhtQhjhrhHiDIp6nQQBpg1B0gSQEFggD9BEQD8BEDSCXQA4hKArhdQAOggANgfQAnhgAUhcQDCA9CmCKQC6CZBvDVQBsDPAeD0QAGAvACAvQgWBwg1BrQg0BohcBKQhgg0kgjUg");
	this.shape_8.setTransform(204.5,73.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F1F1").s().p("AGBIHQgdj0hsjQQhwjUi4iZQiniKjCg9QANg7AFg4QEQBiDVDaQDWDZBME7QAuDDgkC2QgDgvgGgvg");
	this.shape_9.setTransform(274.5,47.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A92F33").s().p("ABJCyQj8hEkFAgQh0AShpA1QAEheAKhgQAZjaBsi7QDnggDxAnQE6AzEFCiQBGBxAiBrQARA2AIA3QgNAfgOAgQgrBdg4BKQjTiXj8hEg");
	this.shape_10.setTransform(161.4,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#DC3D42").s().p("AIND3QgihshFhxQkGiik6gyQjwgojoAhQAjg8Arg4QBagYClgQQClgRCjAqQClApCzBxQCyBvBGBvQgFA5gNA7QgUBbgnBgQgIg2gRg2g");
	this.shape_11.setTransform(172.6,-18.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("AG/SRQBEgCAggEQBggMCbhJQCbhIB1iqQBChfA1iBQAqhnAih9Qg7jPhoijQhdiNjEhyQhMiShzh1QjWjakQhiQhGhwiyhvQiyhxilgpQikgqilARQilAQhaAYQgrA4gjA8QhsC6gYDcQgLBfgEBfAgDAjQBAgFBMARQA4ANA/AZQB6AyBYBaQAyAzAmBAQAWAkASAnQBrDthSDxQgTA3gWAuQg4BzhLA8QgbAWgeAOQggAPgJAFQi/AQkchGQgLAZgMAYQgDAGgBACIgCAAIhtgHQl3gkh/hbQANh3gCh8IgMABQg/hggVhYAgDAjQB4iIBAgwQAQgMANgGQAMgHAJgBQABAAABAAQBbgLBrALQDnAWCHB1QAEAEAEAEAiCBMQgWgpgigdQghgagqgLQgGgChqAWQhNAOiPA0QgaAKgcAKQiIgyiYgFQg1gBgzADQgXAogRAsQgpBpgFBvQgCBBALBYQABAKABAKQACAOADARQAIA3APBXQAEAfADgMQALAHAMAEQBsAtBhhLAh9F7QAnghAChAQAAgYgFgcQAAgCAAgCQgCgHgBgHQgFgcgGgXQgBgDAAgEQgNgzgNgbIAGgGQA3gdBCgGAh9F7QAhChAHAuQANBcgFDSQgDBagOBKQgMBCgUA1AjCGZQAEgBAEgBQAngJAWgTAqHBLQgfAMgiANQgmAOggARQiiBVAFCEQADAZAFAYQAUBhAxBSQgBAtAMAvAjLM4IooAbAp1gGQARAfATAeAkzGZQkqAzkBB0");
	this.shape_12.setTransform(221.7,68.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C6B3A1").s().p("AJoL6QAWguATg3QBSjxhrjsQgSgogVgkQgnhAgxgxQhYhbh7gyQg+gZg5gNQA8gjA/ggQDygFDsBPQBGAYBBAdIA6AdQBaAuBSA5QAaBFATBJQAfBzAKBzQg1CChCBeQh1CqibBIQibBJhgAMQggAEhEACQBMg8A3hzgAiUjhQghgbgqgLQgGgChqAWQhNAQiPA0QgTgfgRggIp7nQQBqg1B0gSQEEghD+BFQD8BEDSCXQA3hKArheQAPgfANggQAmhgAUhbQDCA9CnCJQC5CZBwDWIAZAzIgEA0QiGh1jogWQhqgLhcALIgEgFIACAFQgJABgMAHQgMAGgRAMQhAAwh5CJQhBAGg3AdIgGAGQgWgpgigdg");
	this.shape_13.setTransform(217.9,91.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F1F1F1").s().p("AIGHmQgUhJgahEQhSg7haguIg6gcQhBgehGgXQjqhQjzAGQg/Afg8AkQhLgRhBAFQB5iJBAgvQAQgMAMgHQANgGAJgBIABgBQBcgKBqAKQDnAXCGB0IAJAHIgJgHIAEg1IgZgyQhvjVi5iZQiniKjCg9QANg6AFg5QERBiDVDaQBzB1BLCSQDEByBdCNQBpCiA7DPQgjB9gqBnQgKhzgehzgAmRhLIAEAEIgBABgAmNhHIAAAAg");
	this.shape_14.setTransform(284.8,58.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A92F33").s().p("ACVSDIhtgIQl2gkh/haQANh4gCh7IIngcIonAcIgMAAQg/hggVhYQgLgrAAgpIAAgIQgxhRgUhiQB3hbCjhHQA7gZBVgfQBkgjCGgpQAgBcAZBdIAIAhQAKArAJAsQAdCMANCRQANCWgFCUQgDB3gQB3IACAAgAotH2QEBhzEqgzQkqAzkBBzgABuFPIAIgBIgIABgACyRJQAVg1AMhBQANhKADhbQAFjRgNhdQgHgughihQAnggAChAQFQh2DYA9QAxAzAnBAQAVAkASAnQBrDthSDxQgTA3gWAuQg3BzhMA8QgbAWgeAOIgoATQgkAEgoAAQiqAAjng6gAruJxQgNgFgLgHIgHgSIgXiPIgEgfIgDgTIASgCQArjGBYi0QA1gBA9AOQAgAIAoAPQijBVAFCEQAEAZAEAXQAUBiAxBRIAAAIQAAApALArQg8AwhBAAQgnAAgogRgApyFDIAAAAgADXCcIAAgDIABADIgBAAgAjfpDQj+hEkEAgQh0AShqA1QAEheALhgQAYjbBti6QDnghDwAnQE7AzEFCjQBFBxAiBrQASA3AIA2QgNAfgPAgQgrBdg4BKQjSiXj7hEg");
	this.shape_15.setTransform(191.2,76);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DC3D42").s().p("ACuTMQAPh3AEh3QAFiUgNiWQgNiRgdiMQAngJAWgTQgWATgnAJQgJgsgKgrIgJghQgYhdgghcQiGAphkAkQhVAeg7AaQijBGh3BcQgFgYgDgZQgFiECihVQAggRAmgOIBBgZIA2gUQCPg0BNgOQBpgWAGACQAqALAhAaQAiAdAWApIAGgGQA3gdBCgGQBBgFBMARQA4ANA/AZQB7AyBXBaQjXg9lQB2IAAgFQAAgWgFgZQAFAZAAAWIAAAFQgCBAgnAhQAhChAHAuQANBcgFDSQgDBagOBKQgMBCgUA1QgKAZgNAYIgEAIgADwDmIAAgEIgDgOIgLgzIgBgHQgNgzgNgbQANAbANAzIABAHIALAzIADAOIAAAEIAAAAIAAAAgAsbFCQAFhvAphpQARgsAXgoQAzgDA1ABQCZAFCHAyIhBAZQgmAOggARQgogPgfgHQg9gPg2ABQhYC0gqDHIgSABQgLhYAChBgAk9BLIAAAAgAFspxQgihshFhxQkFijk7gyQjwgojoAhQAjg8Arg4QBagYClgQQClgRCkAqQCkApCzBxQCyBvBGBwQgFA5gNA7QgUBbgnBgQgIg2gRg2g");
	this.shape_16.setTransform(188.7,68.6);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},3).wait(1));

	// Layer 13
	this.instance_7 = new lib.GB_head("single",1);
	this.instance_7.parent = this;
	this.instance_7.setTransform(23,-63.8);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false,startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).to({_off:true},1).wait(1));

	// Layer 8
	this.instance_8 = new lib.vidcall_frame("single",1);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-0.2,-12.1);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// Layer 6
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,2,0,3,true).p("AG+jjQg2gqhBgVQgCgBgDgBQgjAqgoAmQg6A5hFAvQgqAegsAZQgyAdg2AXQB8C5BcAAQAHAAAIAAQAEAAAEAAQgDAFgDAFIAAAAQgqBPhGA4QgaAYgYAAQgPABgggQIjNhuQgXgMgJgKQgMgSgCgbQgCgfADgdAG+jjQgBgOgCgPQgLhMgkhGQhBiCiahTQiahThpgJQghgDgbgBQg8gBggAIQgcALghA7QghA6ABBdQiJFnh7B/QAKAbAMAZQARApAWAmQAuBPBTBKQBTBKBZA3AISANQgPAmgRAhQgZA2gxBPQgxBOhRA3QhQA3gzgDAISANQAcgWAegaQgehSg/hCQgXgYgagUAISANQhgBOhBAkQhhA2hnADAHyBUQAGEdi1CvQi1CvjngHQjngIhui0QhtizANjTAmvAfQA0AWBTAwQAYAOAbAQQB2BHBHAHAlRjpQCyBPDBBlAD3jUQhphmlliV");
	this.shape_17.setTransform(-187.1,134.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DC3D42").s().p("AClG8IETj8QAMgNADgJQAEgOgSgXQgngzhLhsQBBAVA2ApQAaAUAXAYQA/BCAeBSIg6AxQhgBOhBAkQhhA1hnAEgApLELQB7iACJlmQgBhdAhg6QAhg7AcgLQAggIA8ABQAbABAhADQBpAJCaBTQCaBTBBCCQAkBGALBLIADAdQg2gphBgVIhWiCQiDjGknAUQifFTjdE6QgMgagKgagAFHgaIAAAAg");
	this.shape_18.setTransform(-187.1,108.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A92F33").s().p("AhGKQQjogIhtizQhui0ANjTQgVgmgSgoQDdk5CflVQEngTCDDFIBWCCQBLBtAnA0QASAXgEANQgDAJgMAOIkTD7IAEADQBngDBhg1QBBgkBghOQgPAmgRAhQgZA2gxBOQgxBPhRA2IgDADIgEACIAAAAIgBABQhFAtguABIgDAAIAAAAIgFAAIAFAAIAAAAIADAAQAugBBFgtIABgBIAAAAIAEgCIADgDQBRg2AxhPQAxhOAZg2QAHEci2CvQitCojbAAIgTAAgAl7DnQBTBKBaA4Qhag4hThKQhThKguhPQAuBPBTBKgAAREqIABAAIABAAQAYAAAagYQBGg4AqhQIABAAIAFgKIgIABIgPAAIASAJIgBAAQgqBQhGA4QgaAYgYAAIgBAAIgBAAIAAAAIgEAAQgLgCgQgHIgJgEIgFgCIjMhuQgYgMgJgLQgMgRgBgcIgCgdIACgfIAzAeQB2BIBHAHQhHgHh2hIIgzgeQhSgvg0gWQA0AWBSAvIgCAfIACAdQABAcAMARQAJALAYAMIDMBuIAFACIAJAEQAQAHALACIAEAAIAAAAgAgzg5QB8C6BbAAQhbAAh8i6QA0gXAzgdQAsgZAqgdQBFgwA6g5QhphmlkiUQFkCUBpBmQg6A5hFAwQgqAdgsAZQjAhkizhQQCzBQDABkQgzAdg0AXIAAAAgAEJkMQAogmAjgqIAFACIgFgCQgjAqgoAmgAkWAtIAAAAgAEJkMIAAAAg");
	this.shape_19.setTransform(-188.9,140.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1,3,true).p("AF7mTQgjhMgvhKQhkigiGh1QgsAEgjAHQhjAThMAoQhVAug2BNQghAugOAwQgDAJgFAnQgZAZggAcQgpAjgjAgQAHBBAVBDQAYBKAnBLAAEmEQABAFABAFQAMBkgUBOQgDAJgDAKQgCAGgCAGQgXBAgwA+QgKAMgLANQhMARhRgEQhCgDg9gRQgXgHgWgIQACgTACgTQABgIABgIAB2mvIhyArAIhhTQgmgFgjgFQiWgShdgFQglgBgRABQgdADgWALQgvAXgcBFQAAABAAABQAAgBgBgBQgJhOgmhLQgEgJgFgJAF7mTQAQAjANAkQA7A/AmBOQABADACAEQAWAwAPA1AITErQA3gtAShkQALg2gBgzQgBgrgKgoQgEgdgSgMQgJgFgTgCQgEgBgEAAAF7mTQCYBpBOCUQA4BqASB/QArE0iyDzQiyDzldg5Qlcg5gxj+QgcgjgYg3Qg7iGgHgjAgfosQAcBrAHA9AmBnvQgNBjgdEuAoGl3QhIBBhNCGQgwBUAzCQQAeBVBBBsIBLAFAmEgZQA/BXBKBQQAaAcAfAQIAAAAQh8A5iJAKIgngDAAxgIQgQAmgGAoQgJA2AIA4QACAKABAJQA/AoBnAbQBnAbDpAGQinERk+AkQjoAYi+h7AjCC6QCQgmBNhO");
	this.shape_20.setTransform(-223.4,104.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DC3D42").s().p("ABCGLQAGgnAPgoIABgCQAchFAvgXQAVgLAegDQARgBAlABQBcAGCXASIBIAJIAJABQATACAIAGQASALAFAeQAKAoABAsQjSgZjrgRQhRBSg+BaQgIg3AJg3gAp0CVQBNiHBHg/QAIA/AVBDQAXBLAnBKQgnhKgXhLQgVhDgIg/IBMhEQAggcAagZQAFgnACgIQAPgxAgguQA2hNBWgtQBLgpBjgTQAkgGArgFQCHB2BkCgQAuBJAjBNQAQAjAOAjQA6A+AmBOIgHAEIg6gTQiIjai4i6QgUgUgPgKQgVgOgUgBQgVAAghAPQhoAxhvAyQgLDIgrDUQg4AJhWAnIgGgNQAeksANhkQgNBkgeEsIgBARQhjAtiJBVQgziQAxhUgAIjCNIgEgIQgmhOg6g+QgOgjgQgjQCYBnBOCUIhkghg");
	this.shape_21.setTransform(-227.3,71.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A92F33").s().p("AAILdQlcg5gxj9IAEACIAEADIABAAQCbBhC4AAIAAAAIAAAAQAjAAAkgDIADgBQE+gkCnkRQA3gtAShkQALgygBguIAAgIIAAAIQABAugLAyQgSBkg3AtQjpgFhngcQhngbg/goIgDgTQA/haBQhRQDsARDRAYQgBgrgKgpQgEgdgSgMQgJgFgTgCIgIgBIhJgJQiWgThdgFQglgBgRABQgdADgWALQgvAXgcBFIgBABIABABQgQAngGAoQhNBNiQAnQCQgnBNhNQgJA2AIA3IADATQA/AoBnAbQBnAcDpAFQinERk+AkIgDABQgkADgjAAIAAAAIAAAAQi4AAibhhIgBAAIgEgDIgEgCQgcgkgYg3Qg7iGgHgjIAnADQCJgKB8g4IAAAAQgfgQgagcQhKhQg/hYQA/BYBKBQQAaAcAfAQIAAAAQh8A4iJAKIgngDIhLgFQhBhrgehVQCJhVBigtIgEAlQAWAJAXAGQA9ARBCADIAIABIAWAAIAAAAIABAAQA8AAA6gMIADgBIAFgBIAVgZQAwg+AXhAIAEgMIgEAMQgXBAgwA+IgVAZIgFABIgDABQg6AMg8AAIgBAAIAAAAIgWAAIgIgBQhCgDg9gRQgXgGgWgJIAEglIACgRIAGANQBWgnA3gJQArjVALjIQBvgyBpgxQAggPAVAAQAUABAWAOQAOAKAUAUQC5C5CIDcIA6ATIAHgEIADAHQAWAwAPA1QgPg1gWgwIBlAiQA4BqASCAQArEziyDzQiQDFkAAAQg9AAhCgLgAgLj6QAlBLAJBPQgJhPglhLIgKgSIAKASgAgPkfIgGATIAGgTQANgxAAg6QAAgigEglIgCgKIBxgrIhxArQgIg9gchrQAcBrAIA9IACAKQAEAlAAAiQAAA6gNAxgAn7CjgAANBdIAAAAgAgInbIAAAAg");
	this.shape_22.setTransform(-222.1,113);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1,3,true).p("AF7n6QEEBYBeDlQAbBDANBOQATBogNBdQgcDajBCdQinCIjUglAF7n6QgjgsgngqQgpgsgsgoQgrAJhQgCQhPgDhegfQhegfhQg9Qg/A+gMAeQgcBGAKA7QAIA8AjAoQAGAHAIAHQAwArAyAOQAzAPAoADQApAEAkgNQAjgMAGATQgRAPgTANQgNAJgNAJQhoBBh1ATQg6AJhVABQgwABhgAAQhyAChRAaQgKAlgBApQAAAVACAUQAGBLAjBKQAKAWALASQgmgBgigEQgbA0AJAnQAFAZASAoQAKAYAPAcQAoBOAnAuQAZAeAdAUQCIgLCGgqQBigeBZguQA/gfA6gnQgRA0ggAxQgWAjgbAfQgbAgghAcQgcAag9AxQgiAegXAbQAWAoAvAkQA+AwBUAfQAUAHAWAHQBUgXBIg4QAygnAqgzAhdhIQh6BGiGAoQiIAqiMAIQgiACggAAAIjjqQgHgOgHgPQhAiBhahyAJCiCQAEA3AFBBQAEAxAFA4QADA9gBAcQgDAxgRAjQgkBOhzAwQgUAJgiANQgPAGgTAHQgDACgCAAQgeANgZANQgpBig7BIAHwigQiEAUhpBbQhpBZgmCAAiPFSQAAAEAAADQADAtAOAhQADAGADAG");
	this.shape_23.setTransform(-225.9,128.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC3D42").s().p("AIfGZQA4hvAOh3IAJBqQADA9gBAcQgDAxgRAjQgkBOhzAwIg2AWQBYhTA4hygAr0FuQgIgnAbg0QAiAEAmABQAgAAAigCQCMgICIgqQCGgpB6hGIAHAAQAFAtg4AzQiMCAjlA1QhZAVhzAMIgwAEQgSgogGgZgArZAxQABgpAKgkQBRgaBygCICQgBQBVgBA6gJQB1gTBohBIAZgSIAKAOQiCB9jgA7QhVAWhxAQIjDAXQgCgUAAgVgAKfg1QhagOgWgGQhAiBhahyQBaByBACBQgrgKgcgTQg2hghWhMQhJhBhVgpQiMgNiDglQgqgLgZgLQgkgPgXgUQg6BfgKBsQgigogIg8QgKg7AchGQAMgeA/g+QBPA9BfAfQBeAfBPADQBPACArgJQAtAoApAsQAnAqAjAsQEDBYBeDkQgogtgvgIg");
	this.shape_24.setTransform(-228.5,109.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A92F33").s().p("Ah7LTQhVgfg+gwQgvgkgWgoQAXgbAigeQA9gxAdgZQAggdAbggQAcgfAVgiQAggyARg0Qg6Ang/AfQhZAuhiAfQiFApiJALQgdgUgZgeQgngugohOQgOgcgLgYIAwgEQBzgMBagVQDlg1CLh/QA4gzgFgsIgHgBQh6BGiGAqQiIAoiLAIQgjACggAAQgLgSgKgVQgihLgHhLIDEgXQBxgQBVgVQDfg9CEh9IgKgOQATgNARgPQgGgTgkAMQgkANgogEQgpgDgygOQgzgPgwgrIgOgOQAKhsA5hfQAYAUAkAPQAZALApAMQCEAkCMANQBUApBJBBQBWBMA3BgQAbATArAKQAXAGBZAOQAvAIApAvQAbBCAOBOQASBogMBdQgcDajBCdQioCJjUgmQgpAzgzAnQhIA4hUAXIgpgOgAFpFlIgjANIgFADQgeAMgZANQgpBig7BIQA7hIAphiQAZgNAegMIAFgDIAjgNIA1gWQBzgwAlhOQAQgjADgxQACgcgEg9IgJhpIgIh4IAIB4QgOB2g3BwQg5BxhXBTIAAAAgAD3hsQhqBagmB/QAmh/BqhaQBphbCDgTQiDAThpBbgAIWkkIgOgeIAOAegAiKFsQgPghgCgtIgBgHQA/gfA6gnQgRA0ggAyQgVAigcAfIgFgMgAicEXIAAAAg");
	this.shape_25.setTransform(-224.7,134.7);

	var maskedShapeInstanceList = [this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[]},1).wait(1));

	// Layer 5
	this.instance_9 = new lib.ipf("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(23.6,124.5,0.2,0.2,0,-5.8,-4.2,1.7,0.4);
	this.instance_9.filters = [new cjs.ColorFilter(0.85, 0.85, 0.85, 1, 0, 0, 0, 0)];
	this.instance_9.cache(-172,-145,348,309);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0000FF").ss(1,2,0,3).p("AABgBQAAABgBAB");
	this.shape_26.setTransform(-103.5,101.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CACACA").ss(1,1,1,3,true).p("AAAAAQAAAAAAAA");
	this.shape_27.setTransform(30.2,151.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#756A5F").ss(1,1,1,3,true).p("AkNkdQABCBAaB9QAaB8A6BxATpj8QheD6hZA9QiBBZjhBEQjgBEj0ACQj1ADiihUAzogEQCbDCCXAlQDpA5DwgGQDwgGBQhB");
	this.shape_28.setTransform(46,130.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1,3,true).p("AIp5tQKdhuGsHBQhWGgiID0QhqC8iHBWQgrCWgrBwQAhClAGC9QAIDYgbFNQgqIHgCAiQgFBjgBBaQiEAuiVAdQlgBFoNgOQl+gJj1hCQhHgThBgZAWUqGQBpJ4hMHkQhNHlgYHIQhqA/izA9AIp5tQg3Fhh9D6Qh8D5jgC3QjgC3jYB0QkaikjKkDQhYhwgOguQhkktgRihQgIhLAAhNIAAgBIAAAAQMUjLN7BBgAl1G2QABgBABgBAk6FdIABAAA5whhQALC/BaDaQA+CWCjEfQCmEjA9CTQA/CVAbCJQBIAqBTAfA5xiUQAvAaASAAQBXCZBVBrQAdB9AzCHQA6CaCUEzQCTEvA6CeQAsB1AbBt");
	this.shape_29.setTransform(61.6,116.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F1F1F1").s().p("AAAAAIABAAIgBABIAAgBg");
	this.shape_30.setTransform(30.3,151.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3F3F3F").s().p("AucX7QgbiJg+iWQg+iSilkjQikkfg+iXQhajZgLjAIgCgvIABgDIgBADIAAgEIABABQAvAZATAAQBWCaBVBqQAdB9AzCHQA6CaCVEzQCSEwA7CeQArB1AbBtQhTgghIgpgASGV8IAsoqQAblNgHjXQgHi9ggilQAqhwAriXQCIhVBpi8QBpJ3hMHlQhNHlgXHIQhrA/izA9QABhaAFhjgAsxqkQhZhxgOguQhkksgRihQgIhLAAhOIAAAAIAAAAQMUjLN8BBQg4Fhh8D6Qh9D5jfC3QjgC3jYB0QkaikjKkDg");
	this.shape_31.setTransform(53.5,110.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#C6B3A1").s().p("AhXaBQl+gJj1hCQhHgThBgZQgbhtgsh1Qg6ieiTkvQiUkzg6iaQgziHgdh9QCbDCCXAlIAGACIACAAIACABQDPAxDTAAIABAAIAAAAIApAAIADAAQDwgGBQhBIACgCIgDABIABAAIAAABQhQBBjwAGIgDAAIgpAAIAAAAIgBAAQjTAAjPgxIgCgBIgCAAIgGgCQiXglibjCQhVhrhXiZQgSAAgvgaQAbmGCel3QDSgpD9A+QAOAuBYBwQDKEDEaCkQDYh0Dgi3QDgi3B8j5QB9j6A3lhQKdhuGsHBQhWGgiID0QhqC8iHBWQgrCWgrBwQAhClAGC9QAIDYgbFNIgsIpQgFBjgBBaQiEAuiVAdQkmA5mfAAQhRAAhXgCgAl1G2IACgCIgCACgABTGtIAGAAIACAAIAFAAQD0gCDghEQDhhECBhaQBZg9Bej6QheD6hZA9QiBBajhBEQjgBEj0ACIgFAAIgCAAIgGAAIAAAAIAAAAQjmAAidhOIgCgBIgDgBIgCgBIACABIADABIACABQCdBODmAAIAAAAIAAAAgAmOBvQAaB8A6ByQg6hygah8Qgah9gBiBQABCBAaB9gA2ECKIAAAAg");
	this.shape_32.setTransform(61.6,116.2);

	var maskedShapeInstanceList = [this.instance_9,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_9}]},1).to({state:[]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.instance_9}]},1).to({state:[]},3).wait(1));

	// Layer 11
	this.instance_10 = new lib.cz_armR("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-70.8,-31.5,1,1,-8,0,0,83,-107.9);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false,rotation:0,x:-69.2,y:-27.7},0).to({_off:true},3).wait(1));

	// bg
	this.instance_11 = new lib.call("single",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-56.3,125.1,1.7,1.7);

	this.instance_12 = new lib.call("single",1);
	this.instance_12.parent = this;
	this.instance_12.setTransform(68.2,116.7,1.7,1.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#053F53").s().p("Egw3AkAMgCnhEJQgIjeDegJMBdZgDlQDegIAJDeMACnBEJQAIDejeAJMhdZADlIgQAAQjPAAgIjWg");
	this.shape_33.setTransform(2.8,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.instance_12},{t:this.instance_11}]}).to({state:[]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-326.7,-245.3,659.1,503.7);


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

	// Layer_1
	this.instance = new lib.tBm1copy();
	this.instance.parent = this;
	this.instance.setTransform(0,-0.7);

	this.instance_1 = new lib.tEn1copy();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181.6,-26.3,399.5,79.7);


(lib.holdTablet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// glow2
	this.instance = new lib.glow2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(235.6,-26.3,0.81,2.418,2.2,0,0,0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// Layer 2
	this.instance_1 = new lib.TH_hand("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-389.3,55.7,0.81,0.81,0,0,0,-94.5,107.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},1).wait(7));

	// glow2
	this.instance_2 = new lib.glow2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-241,-27.1,0.81,2.418,2.2,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// TH_hand
	this.instance_3 = new lib.TH_hand("single",1);
	this.instance_3.parent = this;
	this.instance_3.setTransform(376.5,147.7,0.81,0.81,0,3.2,-176.8,-94.4,107.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// TH_hand
	this.instance_4 = new lib.TH_hand("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-389.3,55.7,0.81,0.81,0,0,0,-94.5,107.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// glowScreen
	this.instance_5 = new lib.glow2("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-11.5,142.1,0.81,2.836,91.7,0,0,0.1,0);

	this.instance_6 = new lib.glow2("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(4.6,-206.1,0.81,2.836,91.2,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5}]}).to({state:[]},4).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).to({state:[]},3).wait(1));

	// Layer_2
	this.instance_7 = new lib.screen("single",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-4.4,-37.7,0.729,0.729,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).to({_off:true},1).wait(1).to({_off:false,startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).to({_off:true},1).wait(1));

	// Layer_4
	this.instance_8 = new lib.intro1bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-241,-215,0.81,0.81);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({_off:false},0).to({_off:true},2).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

	// Layer_6
	this.instance_9 = new lib.Bitmap3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-290,-252);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},4).wait(1).to({_off:false},0).to({_off:true},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-252,748.5,589.2);


(lib.dialogue5 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm5();
	this.instance.parent = this;
	this.instance.setTransform(4,-20.5);

	this.instance_1 = new lib.tEn5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.6,-57.4,648.1,113);


(lib.dialogue3 = function(mode,startPosition,loop) {
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
	this.instance = new lib.tBm3();
	this.instance.parent = this;
	this.instance.setTransform(49,-20.5);

	this.instance_1 = new lib.tEn3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-173.9,-57.4,445.9,113);


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
	this.instance.setTransform(49,-20.5);

	this.instance_1 = new lib.tEn1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(49,-20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.6,-46,401.6,89.9);


// stage content:
(lib.brief = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{a1:49,a2:152,a3:227});

	// timeline functions:
	this.frame_0 = function() {
		txtAnimSpeed = 18;//text typewriter effect about 60fps
	}
	this.frame_4 = function() {
		playSound("phone_ringtone");
	}
	this.frame_21 = function() {
		playSound("intro");
	}
	this.frame_39 = function() {
		this.stop();
		_this = this;
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a1");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_49 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a2");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_64 = function() {
		playSound("phone_Accept");
	}
	this.frame_135 = function() {
		this.stop();
	}
	this.frame_152 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			_this.gotoAndPlay("a3");
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_210 = function() {
		this.stop();
	}
	this.frame_227 = function() {
		function doPlay(e){
			_this.removeEventListener("click", doPlay);
			nextScreen();
		}
		this.addEventListener("click", doPlay);
	}
	this.frame_277 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(17).call(this.frame_21).wait(18).call(this.frame_39).wait(10).call(this.frame_49).wait(15).call(this.frame_64).wait(71).call(this.frame_135).wait(17).call(this.frame_152).wait(58).call(this.frame_210).wait(17).call(this.frame_227).wait(50).call(this.frame_277).wait(1));

	// t
	this.instance = new lib.instr1();
	this.instance.parent = this;
	this.instance.setTransform(400,537.5);

	this.instance_1 = new lib.dialogue1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(245.6,98.7);

	this.instance_2 = new lib.dialogue3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(217.6,102.7);

	this.instance_3 = new lib.dialogue5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(268.6,102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},29).to({state:[]},20).to({state:[{t:this.instance_1}]},45).to({state:[{t:this.instance_2}]},58).to({state:[{t:this.instance_3}]},75).wait(51));

	// scene
	this.instance_4 = new lib.holdTablet("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(518.8,363.9,1,1,0,0,0,113,-111.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:203.9},20,cjs.Ease.quartOut).wait(44).to({startPosition:1},0).wait(30).to({startPosition:2},0).wait(41).to({startPosition:3},0).wait(17).to({scaleX:1.46,scaleY:1.46,rotation:-5,y:204,startPosition:5},0).wait(58).to({startPosition:6},0).wait(17).to({scaleX:1,scaleY:1,rotation:0,y:203.9,startPosition:7},0).wait(51));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#255151","#142A2A"],[0,1],24,25,0,24,25,546.7).s().p("Eg/fAwtQgKAAAAgKMAAAhhFIAKgKMB+/AAAIAKAKMAAABhFQAAAKgKAAg");
	this.shape.setTransform(400,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(278));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(392.6,288.3,871.7,823.9);
// library properties:
lib.properties = {
	id: '679F3CBA7A830C41AD08029BD2541F31',
	width: 800,
	height: 600,
	fps: 60,
	color: "#545E73",
	opacity: 1.00,
	manifest: [
		{src:"images/brief/Bitmap1.png", id:"Bitmap1"},
		{src:"images/brief/Bitmap10.png", id:"Bitmap10"},
		{src:"images/brief/Bitmap3.png", id:"Bitmap3"},
		{src:"images/brief/Bitmap4.png", id:"Bitmap4"},
		{src:"images/brief/Bitmap5.png", id:"Bitmap5"},
		{src:"images/brief/Bitmap6.png", id:"Bitmap6"},
		{src:"images/brief/Bitmap7.png", id:"Bitmap7"},
		{src:"images/brief/Bitmap8.png", id:"Bitmap8"},
		{src:"images/brief/Bitmap9.png", id:"Bitmap9"},
		{src:"images/brief/intro1bg.png", id:"intro1bg"},
		{src:"sounds/intro.mp3", id:"intro"},
		{src:"sounds/phone_Accept.mp3", id:"phone_Accept"},
		{src:"sounds/phone_ringtone.mp3", id:"phone_ringtone"}
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
an.compositions['679F3CBA7A830C41AD08029BD2541F31'] = {
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