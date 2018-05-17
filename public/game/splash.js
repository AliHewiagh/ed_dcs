(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,633,633);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,173);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,104);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,60);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,442,114);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,101);


(lib.redplanet = function() {
	this.initialize(img.redplanet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,95);


(lib.starfieldbg = function() {
	this.initialize(img.starfieldbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,820,620);// helper functions:

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


(lib.wobblePlanet1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-316.5,-316.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-316.5,-316.5,633,633);


(lib.titleefx = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F5F5F5").ss(1,1,1).p("AGiivIA4FfIhwAAIgTiUIh8AAIANCUIhxAAIgSlfIBlAAIALCBIB4AAIgQiBgARVgaIgehPIh2AAIAbBPgAQLAxIgTAAIArB/IhxAAIhXkZIgaAAIgGhGIEIAAQANAAANAEQAMAEAMAGQAKAHAJAJQAJAJAEAKIAzB6QAEAKAAAJQgBAKgGAIQgGAHgKAFQgLAEgNAAIgcAAICUB/Ih6AAgAW1iuQANAAANAEQAOADAMAHQAMAGAKAKQAKAIAGALICFDyQAGALABAMQAAAKgFAIQgFAIgKAFQgKAFgOAAIjYAAQgPAAgPgFQgPgFgMgIQgOgIgJgKQgLgMgFgLIhrjyQgEgLABgIQAAgKAHgGQAFgHAJgDQAKgEANAAgAWzhoIh2AAIBfDFIB9AAgAwxCwIhwAAIAEg5IiKAAIgoA5IhvAAIDTkZIgaAAIAthGICsAAgA08hpIhnAAIiHEZIhwAAICQkZIhrAAIA2hFIEyAAgArRhpIh2AAIgVBOIB5AAgAqaiuQANAAALAEQAKADAHAGQAHAHADAJQADAJgCAKIgXB5QgDAKgHAKQgHAKgKAIQgLAGgMAFQgOAEgNAAIilAAIgjCAIhxAAIBWkZIgaAAIAlhFgAn3CwIhxAAIA/lfIBkAAgAiygaIADhPIh1AAIgHBPgAkdAxIgUAAIgKB/IhxAAIAikZIgbAAIAYhGIEIAAQANAAAMAEQALAEAIAGQAIAHAFAJQAFAJAAAKIgCB6QAAAKgFAJQgFAKgJAIQgJAHgMAFQgNAEgNAAIgcAAIBeB/Ih7AAgAyYAmIAJiIIhgCIg");
	this.shape.setTransform(0,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB","#F5F5F5"],[0,0.514,0.937,1],0.1,14.1,0.1,-3.7).s().p("AWXCwQgPAAgPgFQgOgFgNgIQgOgIgJgKQgLgMgGgLIhqjyQgEgLABgIQAAgKAHgGQAEgHAKgDQAKgEANAAIDAAAQANAAANAEQAOADALAHQANAGAJAKQALAIAFALICGDyQAGALACAMQAAAKgGAIQgFAIgKAFQgKAFgOAAgAWbBdIB+AAIhmjFIh2AAgASbCwIiQh/IgTAAIArB/IhxAAIhXkZIgbAAIgFhGIEIAAQANAAANAEQAMAEAMAGQAKAHAJAJQAIAJAFAKIAzB6QAEAKgBAJQAAAKgGAIQgGAHgKAFQgLAEgNAAIgcAAICUB/gAPcgaIB5AAIgehPIh1AAgAIjCwIhClfIEuAAIADBGIi9AAIAOA7IC0AAIAIBKIisAAIAOBAIDbAAIAGBUgAFpCwIgSiUIh8AAIANCUIhxAAIgSlfIBkAAIAMCBIB4AAIgRiBIBlAAIA6FfgAjECwIhZh/IgUAAIgKB/IhxAAIAikZIgbAAIAZhGIEHAAQANAAAMAEQALAEAIAGQAIAHAFAJQAFAJAAAKIgBB6QgBAKgFAJQgFAKgIAIQgKAHgMAFQgNAEgNAAIgcAAIBeB/gAkqgaIB4AAIADhPIh1AAgApoCwIA/lfIBkAAIgyFfgAwCCwIBVkZIgaAAIAmhFIEIAAQAMAAALAEQAKADAHAGQAHAHAEAJQADAJgCAKIgYB5QgDAKgHAKQgHAKgKAIQgKAGgNAFQgOAEgNAAIilAAIgjCAgAtcgbIB6AAIAShOIh2AAgAyhCwIAEg5IiKAAIgnA5IhwAAIDTkZIgaAAIAthGICsAAIgFFfgAzuAmIBWAAIAJiIgA6bCwICRkZIhrAAIA2hFIEyAAIgvBFIhnAAIiGEZg");
	this.shape_1.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.titleefx, new cjs.Rectangle(-170.2,-18.7,340.3,37.2), null);


(lib.starcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#94F4FC","#154E87"],[0,1],-0.2,0.8,0,-0.2,0.8,18.3).s().p("AgSAzIhoCiIBZisIjQBiIC7iCIjAgJIDAgIIi7iCIDdBpIAUj2IATDmIBoijIhZCsIDQhiIi7CCIDAAIIjAAJIC7CCIjehpIgUD2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.starcopy, new cjs.Rectangle(-24.6,-28,49.3,56), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DAFCFF","#406C98"],[0,1],-0.2,0.8,0,-0.2,0.8,18.3).s().p("AgSAzIg2BPIAnhZIhaAkIBFhEIjAgJIDAgIIg3hOIBZA1IAUj2IATDmIAthIIgeBRIBggcIhLA8IDAAIIjAAJIBHBKIhqgxIgUD2g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-24.6,-28,49.3,56), null);


(lib.shade_lines = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape.setTransform(0,-114.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_1.setTransform(0,-109.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_2.setTransform(0,-54.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_3.setTransform(0,-59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_4.setTransform(0,-64.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_5.setTransform(0,0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_6.setTransform(0,5.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_7.setTransform(0,-4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_8.setTransform(0,79.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_9.setTransform(0,74.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_10.setTransform(0,69.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_11.setTransform(0,49.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_12.setTransform(0,54.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_13.setTransform(0,59.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_14.setTransform(0,64.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_15.setTransform(0,44.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_16.setTransform(0,39.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_17.setTransform(0,34.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_18.setTransform(0,29.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_19.setTransform(0,-44.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_20.setTransform(0,-39.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_21.setTransform(0,-34.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["rgba(204,204,204,0)","rgba(204,204,204,0.498)","rgba(204,204,204,0)"],[0,0.588,1],-240.2,0,240.3,0).s().p("EglhAAPIAAgdMBLDAAAIAAAdg");
	this.shape_22.setTransform(0,-29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240.2,-116,480.5,197);


(lib.purplePlanet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.redplanet();
	this.instance.parent = this;
	this.instance.setTransform(-47.6,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,-58.5,95,95);


(lib.glowTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(1,153,204,0.122)","rgba(30,238,232,0.122)"],[0,1],0,-19.3,0,19.4).s().p("A9lGLQg5AAgsgkQgsgjgMg4QgLg3AagzIDynVQAUgoAngYQAmgXAtAAMAznAAAQAtAAAmAXQAnAYAVAoIDxHVQAaAzgLA3QgMA4gsAjQgsAkg5AAgA68liQgiAVgSAjIjxHVQgXAtAKAwQAKAwAnAgQAmAfAyAAMA7LAAAQAyAAAmgfQAnggAKgwQAKgwgWgtIjynVQgSgjgigVQgigUgnAAMgznAAAQgnAAgiAUg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(1,153,204,0.247)","rgba(30,238,232,0.247)"],[0,1],0,-19.3,0,19.4).s().p("A9lF3QgyAAgmgfQgngggKgwQgKgwAXgtIDxnVQASgjAigVQAigUAnAAMAznAAAQAnAAAiAUQAiAVASAjIDyHVQAWAtgKAwQgKAwgnAgQgmAfgyAAgA6xlQQgdASgQAdIjyHVQgTAmAJAqQAIApAhAbQAhAbArAAMA7LAAAQArAAAhgbQAhgbAJgpQAIgqgTgmIjynVQgQgdgcgSQgdgSgiAAMgznAAAQgiAAgcASg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(1,153,204,0.373)","rgba(30,238,232,0.373)"],[0,1],0,-19.3,0,19.4).s().p("A9lFjQgrAAghgbQghgbgIgpQgJgqATgmIDynVQAQgdAdgSQAcgSAiAAMAznAAAQAiAAAdASQAcASAQAdIDyHVQATAmgIAqQgJApghAbQghAbgrAAgA6nk/QgYAPgNAYIjyHWQgQAfAHAjQAHAiAcAWQAcAXAjAAMA7LAAAQAjAAAcgXQAcgWAHgiQAHgjgQgfIjynWQgNgYgYgPQgYgPgcAAMgznAAAQgcAAgYAPg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(1,153,204,0.498)","rgba(30,238,232,0.498)"],[0,1],0,-19.3,0,19.4).s().p("A9lFPQgjAAgcgXQgcgWgHgiQgHgjAQgfIDynWQANgYAYgPQAYgPAcAAMAznAAAQAcAAAYAPQAYAPANAYIDyHWQAQAfgHAjQgHAigcAWQgcAXgjAAgA6dkuQgTAMgKATIjyHWQgNAZAGAbQAGAcAWASQAWASAcAAMA7LAAAQAcAAAXgSQAVgSAGgcQAGgbgNgZIjxnWQgLgTgTgMQgTgMgXAAMgznAAAQgXAAgTAMg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(1,153,204,0.624)","rgba(30,238,232,0.624)"],[0,1],0,-19.3,0,19.4).s().p("A9lE7QgcAAgWgSQgWgSgGgcQgGgbANgZIDynWQAKgTATgMQATgMAXAAMAznAAAQAXAAATAMQATAMALATIDxHWQANAZgGAbQgGAcgVASQgXASgcAAgA6SkdQgPAJgHAOIjyHWQgKASAEAWQAFAUAQAOQARANAVAAMA7LAAAQAVAAARgNQAQgOAFgUQAEgWgKgSIjxnWQgIgOgOgJQgPgJgRAAMgznAAAQgRAAgOAJg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(1,153,204,0.749)","rgba(30,238,232,0.749)"],[0,1],0,-19.3,0,19.4).s().p("A9lEnQgVAAgRgNQgQgOgFgUQgEgWAKgSIDynWQAHgOAPgJQAOgJARAAMAznAAAQARAAAPAJQAOAJAIAOIDxHWQAKASgEAWQgFAUgQAOQgRANgVAAgA6IkMQgKAGgFAKIjxHVQgHANADAOQADANALAJQALAJAOAAMA7LAAAQAOAAALgJQALgJADgNQADgOgGgNIjynVQgFgKgKgGQgKgGgLAAMgznAAAQgLAAgKAGg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#0199CC","#1EEEE8"],[0,1],0,-19.3,0,19.4).s().p("A9lD/QgHAAgFgFQgGgEgBgHQgCgHADgGIDynVQADgFAEgDQAFgDAGAAMAznAAAQAGAAAFADQAEADADAFIDyHVQADAGgBAHQgCAHgFAEQgGAFgHAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["rgba(1,153,204,0.875)","rgba(30,238,232,0.875)"],[0,1],0,-19.3,0,19.4).s().p("A9lETQgOAAgLgJQgLgJgDgNQgDgOAHgNIDxnVQAFgKAKgGQAKgGALAAMAznAAAQALAAAKAGQAKAGAFAKIDyHVQAGANgDAOQgDANgLAJQgLAJgOAAgA5+j7QgEADgDAFIjyHVQgDAGACAHQABAHAGAEQAFAFAHAAMA7LAAAQAHAAAGgFQAFgEACgHQABgHgDgGIjynVQgDgFgEgDQgFgDgGAAMgznAAAQgGAAgFADg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.glowTitle, new cjs.Rectangle(-205.4,-39.5,410.9,79), null);


(lib.glowSubTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-138,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138,-56,275,101);


(lib.db_handR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AjUApQAAgEAEgVQADgUAHgTQAJgYALgWQALgVAOgSQANgRARgOQABgBABgCQAegaAjgLQAJgEAJgCQATgEATAAQAGAAAIAAQAhACAeAPQAPAGAPAKQA1AmAfA8QABAEACAFQAIARAFATQAHAaAAAaQAAAEAAAFQABAGgIAYQgIAXglAhQgmAhgvANQgvALgqgBQgqAAgvgPQgugPgjghQgighAEg1g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17435F").s().p("AhDAnQgegOgCgVQgBgVAfgPQAcgQAogCQApgBAdAOQAdAOACAVQABAUgeAQQgdAQgpABIgHAAQgjAAgagMg");
	this.shape_1.setTransform(0,9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA/BtQgJgXgYgTQgFgkgLgeQgbhJg3glQAQAGAOAKQA1AmAeA7IAEAJQAIARAFASQAHAbgBAbIAAAIg");
	this.shape_2.setTransform(14.5,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2875A9").s().p("AgMB4QgqgBgvgPQgugPgjggQgighAEg1QANgaAdgUIATgMQA/giBYACQBaACA+AkQANAHALAJQAYATAJAXIAFABQABAHgIAWQgIAYglAhQgmAhgvAMQgrALgnAAIgHAAgAgBgbQgoACgcAQQgeAOABAWQABAVAeAOQAdANAngBQAqgBAdgQQAdgQgBgVQgBgUgdgOQgcgNgmAAIgFAAg");
	this.shape_3.setTransform(0,7.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E89C4").s().p("AhJBWQADgVAIgUQAIgXALgWQALgUAPgSQAMgSAQgOIACgCQAegaAjgMQgWAJgmAxQglAygQBCQgdAUgNAbIAEgZg");
	this.shape_4.setTransform(-13.5,-6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399DB").s().p("ACWBSQg+glhZgCQhZgBg/AiIgUALQAQhCAmgxQAmgyAWgIIATgGQASgEAUAAIAOAAQAhACAeAPQA2AlAcBJQALAeAFAkQgLgIgMgHg");
	this.shape_5.setTransform(0.2,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.4,-20,44.8,40.1);


(lib.db_handL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADOBcQABgEACgVQACgVgCgVQgCgZgFgXQgGgXgJgVQgIgUgMgSQgBgBgBgCQgWghgegUQgIgGgJgEQgRgJgSgFQgHgCgIgCQgggGggAGQgQACgRAGQg9AXgtAyQgDAEgDAEQgMAOgKARQgOAYgGAaQgBAEgBAEQgDAGACAYQABAYAcAqQAcAqAqAYQAqAXAqALQAoAKAxgDQAwgCAqgXQAqgXAKg0g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E89C4").s().p("AheBZIACgIQAHgZAOgZQAJgQAMgPIAGgHQAsgxA+gYQAQgFARgDQg/AXgtA/QgSAagOAhQgdAMgOAUg");
	this.shape_1.setTransform(-11.3,-10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#17435F").s().p("AgNAxQgogMgYgXQgXgWAGgUQAGgUAggGQAhgGAmAMQAnAMAXAXQAZAWgHAUQgGAUghAGQgKACgKAAQgYAAgZgIg");
	this.shape_2.setTransform(-1.4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2875A9").s().p("AgXB3QgqgKgqgYQgqgYgcgpQgcgpgBgZQgCgYADgHIAFAAQAPgTAcgNQAMgFAOgEQBGgTBWAWQBXAVA0AxIAPAQQAXAbAGAcQgKA1gqAXQgqAWgwADIgTAAQgmAAgggIgAhEggQggAGgGAUQgGATAXAXQAYAXAoAMQAmAMAfgGQAhgGAGgUQAHgUgZgXQgXgWgngMQgZgIgXAAQgMAAgLACg");
	this.shape_3.setTransform(-0.2,6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBHQAChEgXg5QgYg6gTgOQAfAUAVAhIACAEQAMARAIAUQAJAVAFAWQAGAYACAZQABAVgCAVIgDAZQgGgdgWgbg");
	this.shape_4.setTransform(16.2,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3399DB").s().p("ACZBiQg0gxhXgVQhWgWhGATQgOAEgMAFQAOghATgZQAuhAA+gXQAggGAgAHIAPADQASAGARAIIARAKQATAOAYA6QAYA5gDBEIgPgQg");
	this.shape_5.setTransform(0.9,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-20.3,44,40.6);


(lib.db_feature = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ag6C1QhLgKgbhLIAEgWQBeBMCNg0IgCAaQg2A6g+AAIgTgBgABJAQIA4irIBAAHIg1CtgAjAgOIA4inIA8AGIg0Cog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.3,-18.2,38.6,36.5);


(lib.db_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABujiQAUgOAUgMQATgMAUgKQAMgHANgGQgCBGAGAwQAEAbAGAUQgMAFgMAHQgIAFgIAFQgyAggqAoQgEgTgLgPQgCgDgDgDQgUgXgggLQgOgFgPgCQgIgCgHAAQg5A/gtBNQglA/gcBJQgXA5gRBBIATAAIBRABIAkAAQAEgnAOggQgDgIgDgGQgFgKgGgJQgGgIgHgGQgNgLgTgCQgLgCgMACQgGAAgGACQgJACgIAEABujiQAMABAJAFQACABACABQAhAPANAoQADAIACAHQAFAXgDAZAgEBZQgHgSgJgLQgCgBgBgBQgNgRgVgIQgMgFgNgCQgIgBgJAAQgMABgLADAgEBZQgnA7geBFABggcQg4AzgsBCABujiQhIAxg6BC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#747474").s().p("Ai8ENQARhAAXg5QAchKAlg/QALgDAMAAQAJgBAIACQgaAlgWAoQgPAagNAbIgMACQgJACgIAFQAIgFAJgCIAMgCQgeBAgUBDgAASiAIAPACQAQACAOAFQg7A7gvBFQgIgCgJABQgMAAgLADQAthMA4g/gAA/h3IAAAAgAAhh+IgPgCQA7hCBIgxQAMABAJAFIAEACIgEgCQgJgFgMgBQAUgOAUgMQgFARgKARQgIAMgKANQgOAQgxAvIgeAcQgOgFgQgCg");
	this.shape_1.setTransform(-3.9,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4C4C4C").s().p("AixEfQAPg0AWgzQAGAJAFAKIAGAOQgOAfgEAogAiBDLQgFgKgGgJQAdhAApg8QAJALAHASQgnA6geBGIgGgOgAiMC4IAAAAgAg2BZQgHgSgJgLIAWggQAlgwAqgpQAwgwA5gnIAIgGIgEgWQgHg0AGguIAZgNQgCBGAGAwQAEAbAGAVIgYALIgQAKIABgSQAAgPgDgPQADAPAAAPIgBASQgyAggqAoQgEgTgLgOQALAOAEATQg3AzgtBCIAAAAgAhGA8IAAAAg");
	this.shape_2.setTransform(5,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AjIEZQAThDAfhAQANgbAOgaQAXgoAaglQAvhFA7g7IAdgcQAygvANgQQALgNAHgMQAKgRAFgRQATgMAUgKQgGAtAIA0IADAXIgIAGIgEgPQgOgoghgPQAhAPAOAoIAEAPQg4AmgxAwIgEgGQgUgXgggLQAgALAUAXIAEAGQgqAqglAwIgWAgIgCgDQgOgQgUgJQgNgFgMgBQAMABANAFQAUAJAOAQIACADQgpA7gcBBQgGgIgHgGQgOgLgSgDQgMgBgLABQALgBAMABQASADAOALQAHAGAGAIQgWAygPA1gADBiaIAAAAg");
	this.shape_3.setTransform(-0.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-29.8,47.6,59.6);


(lib.db_armL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABniZQgYgDgWAJQgHADgGADQgfAQgSAjQgCADgCAEQgHAOgDARQgsgog1ggADUgaQgGgIgGgIQgxg/gwgwQg5g5g4gjQgJgGgKgGQgUgMgWgKQgXgMgagKIhugmQgKAHgjArQgjAqgNAgQBgAmAfANQArASAlAWADUgaQgBAAgBAAQgXgJgYAEQgIABgIADQgPAFgOAJQgUANgNAUQAAAAgBABQgKAPgFAQQgng5gxgvAEkCZQgQgKgTgDQgGgBgFAAQgWgCgWAIQgTAHgPANQgHAFgGAGQgJAKgHALQgchPgqhCAEkCZQAWBTAKBmQgPgHgQgEQgDgBgDgBQgbgHgaADQgGABgGABQgdAEgYANQgLhWgTg5AEkCZQgdhqgzhJAgdkBQgGACgHADQgNAFgKAJQgJAHgHAKQgQATgIAXQgHASgCATQgBAJgBAJ");
	this.shape.setTransform(-3.1,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AC9DFQgbhPgqhBQgng6gygvQgsgog0ggIABgSQADgTAGgSQA2ApAuAwIgEAHQgHAOgDARQADgRAHgOIAEgHQAxAzAqA7IgBABQgKAPgFARQAFgRAKgPIABgBIAUAdQAjA5AcA6IgNAMQgJAJgIAMQAIgMAJgJIANgMQAjBOATBRQgdAEgYANQgLhWgUg5gADbCkIAAAAgACIAUIAAAAgAAthaIAAAAgAiRijQgfgOhggmQANggAjgqQAjgrAJgHIBvAmQgoAhgOArQAkAVAgAZQgGASgDATIgBASQglgWgrgRgAg3izIAAAAg");
	this.shape_1.setTransform(-8.2,-0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("ADkE5QgbgIgaADIgMACQgThRgjhNQAPgNATgGIABgBIAGgCQAPgEAOAAIABAAIAAAAIAHAAIgHAAIAAAAIgBAAQgOAAgPAEIgGACIgBABQgTAGgPANQgbg7gkg4IgUgdQANgUAUgNQAOgJAPgGQgPAGgOAJQgUANgNAUQgpg8gxgzQgvgwg1goQAIgXAQgTQAHgKAJgHQgJAHgHAKQgQATgIAXQghgagkgVQAPgrAnggQAaAKAXALIgHAAQgPACgMAKIAoAeQA8AwAyAxQgfAQgTAiQATgiAfgQQA5A4AtA5IAVAcQAvBDAfBHIAMAfQAdBPAGBOIgGgBgAgOiZIAAAAg");
	this.shape_2.setTransform(2.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#747474").s().p("AC4EpQgGhOgdhPIgMgfQgfhHgvhDIgVgbQgsg5g6g5Qgygxg8gwQAKgJANgFQAHgDAGgCIATAMQA5AjA5A5IgLgBIAAAAIgBAAQgPAAgPAGIgDABIgBAAIgNAGIANgGIABAAIADgBQAPgGAPAAIABAAIAAAAIALABQAvAwAxA/IAMAQIgCAAIgCgBIAAAAIAAAAQgPgFgOAAIgBAAIAAAAIgNABIAAAAIgCAAIAAAAQgIABgIADQAIgDAIgBIAAAAIACAAIAAAAIANgBIAAAAIABAAQAOAAAPAFIAAAAIAAAAIACABIACAAQAzBJAdBqQgQgKgTgEIgLgBIALABQATAEAQAKQAWBSAKBnQgPgHgQgFgAjWkpQAMgKAPgBIAHAAQAWAKAUAMQgGACgHADQgNAFgKAJIgogeg");
	this.shape_3.setTransform(7.8,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.5,-35.9,66.8,69.9);


(lib.cermin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHPjbQgZAPgXAPAHPjbQATANARAPQACABADACQAdAZAaAbQALAMALANQgwAJgqAUQhdAphEBVQhQBlgvCjQn4gxkGBDQhElcDBimQATgMATgKQA9ghBDgXQCGguCcgKQEMgSCxB5g");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9D9D9D").s().p("Am1g0QE2kYJmCbQkYC2hADNQl0g1j+BMQgPihA9h8g");
	this.shape_1.setTransform(-7.2,-1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1E1E1").s().p("Al4gPQA9ghBDgXQCFguCdgKQEMgRCwB5IgvAdQpmiak3EWQAohQBGhBg");
	this.shape_2.setTransform(-2.3,-19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6D6D6D").s().p("AosC3QD+hNFzA2QBBjNEYi2IAvgeQATANASAOIAEADQAeAZAZAbQkRBHhrFYQmUgtk+A/QgIgmgDglg");
	this.shape_3.setTransform(0.2,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4A4A4A").s().p("Am2j2QATgLATgKQhGBBgnBRQg9B8APChQAEAlAHAnQE+g/GUAsQBrlYEShHIAWAZQgwAKgqATQhdAphEBXQhQBjgvCjQn4gxkGBDQhElbDBing");
	this.shape_4.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-33.5,118.3,67.1);


(lib.Bring_Back_the_Sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{bm:0,en:1});

	// timeline functions:
	this.frame_0 = function() {
		//check language and show the right language
		if (myLanguage==2){
			this.gotoAndStop("en");
		} else {
			this.stop();
		}
		var _this = this;
		function onSetEn(e){
			_this.gotoAndStop("en");
		}
		stage.addEventListener("setEn", onSetEn);
	}
	this.frame_1 = function() {
		this.stop();
		var _this = this;
		function onSetBm(e){
			_this.gotoAndStop("bm");
		}
		stage.addEventListener("setBm", onSetBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],0.6,7.5,0.6,-0.3).s().p("AKVC4IgigVIglAVIg9AAIg3giIAUi7IA+ghIA9AAIAhAUIAmgUIAhAAIgbD+gAIhB9IBWAAIAOiJIhVAAgAA8C4IghgVIglAVIg8AAIg2giIAUi7IA9ghIA7AAIAhAUIAmgUIAiAAIgbD+gAg2B9IBVAAIAPiJIhVAAgAnDC4IghgVIgmAVIg8AAIg2giIAUi7IA9ghIA8AAIAhAUIAmgUIAhAAIgbD+gAo1B9IBVAAIAPiJIhWAAgAPOC1IAaj5IBEAAIgaD5gAMBC1IAaj5IA4AAIAKAVIAmgVIAyAAIgGA7IhVAAIgUC+gAFIC1IAUjBIhbAAIgTDBIhFAAIAmlsIBEAAIgNCFIAmgUIBBAAIA2AhIgWDagAkCC1Ig2ghIAQidIguAAIAGg7IAuAAIAFgqIBIgnIgIBRIA3AAIgHA7Ig3AAIgNCEIA3AAIgHA6gAsTC1IAYjmIgBAAIhnDmIhCAAIg3jpIgCAAIgYDpIhEAAIAlldIBdAAIA9EBIABAAIBykBIBdAAIglFdgAPqhyIAHhFIBKAAIgIBFg");
	this.shape.setTransform(2.3,25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],-0.8,10.2,-0.8,2.7).s().p("AQJC4IghgVIgmAVIg8AAIg3giIAUi7IA+ghIA8AAIAhAUIAmgUIAhAAIgbD+gAOWB9IBWAAIAOiJIhVAAgACZC4IghgVIgmAVIg8AAIg2giIAUi7IA9ghIA8AAIAhAUIAmgUIAhAAIgbD+gAAmB9IBWAAIAOiJIhVAAgAjqC4IghgVIgmAVIghAAIAnlvIBEAAIgOCFIAmgUIBCAAIA2AhIgUC7Ig9AigAkHB9IBaAAIAPiJIhbAAgAUQC1IAUjBIhWAAIgUDBIhEAAIAaj7IA5AAIAJAUIAmgUIA9AAIA2AhIgXDagALaC1Ig4hYIgfAiIgGA2IhEAAIAmlsIBEAAIgWDXIABAAIBYhkIBOAAIhlBvIBaCKgAGpC1IAaj5IBFAAIgaD5gAFAC1Ig3ghIAjlLIBEAAIggEyIAyAAIgGA6gAnhC1IAUjBIhJAAIgUDBIhEAAIAUjBIhJAAIgUDBIhFAAIAbj7IA4AAIAKAUIAmgUIAwAAIArAbIAygbIAwAAIA3AhIgXDagAvcC1Ig3ghIAUi5IA9ghIBcAAIA2AhIgNB3IiLAAIgEApICLAAIgGA6gAvCAeIBGAAIAFgqIhHAAgAySC1IhiiIIgmApIgKBfIhGAAIAkldIBGAAIgQCeIABAAICTieIBTAAIibCkICGC5gAHGhyIAHhFIBJAAIgHBFg");
	this.shape_1.setTransform(1.4,-26.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],-3.3,0,-3.3,7.8).s().p("AIKC4IgKgVIglAVIg9AAIg2giIAXjaIBEAAIgUDBIBWAAIAUjBIBFAAIgbD8gABXC4Ig2giIAHhCIBFAAIgEAoIBsAAIAJhXIhzAAIg2ghIAPiNIA+ghIB+AAIA3AhIgIBDIhGAAIAFgoIhnAAIgJBTIByAAIA3AhIgPCQIg9AigAMoC1IAUjBIhVAAIgUDBIhFAAIAbj7IA4AAIAKAUIAmgUIA8AAIA3AhIgXDagAlEC1Ig3ghIAUi5IA9ghIBcAAIA2AhIgMB3IiMAAIgEApICLAAIgFA6gAkqAeIBHAAIAEgqIhGAAgAoNC1IATjBIhaAAIgUDBIhFAAIAmlsIBFAAIgOCFIAmgUIBCAAIA2AhIgXDagAsvC1Ig2ghIAQidIguAAIAGg7IAuAAIAFgqIBIgnIgIBRIA3AAIgHA7Ig3AAIgOCEIA4AAIgGA6g");
	this.shape_2.setTransform(1.2,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E5ECE9","#AFB5B7","#E7EEEB"],[0,0.514,1],-113.6,7.4,-113.6,-3.2).s().p("AkUDoIAHg6IB9AAIAHhGIglAVIhCAAIg2ghIATixIA9giIBCAAIAhAUIAmgUIAhAAIgiE+Ig+AhgAjfBDIBaAAIAOh/IhbAAgAKPCHIgigVIglAVIg9AAIg2ghIAUi7IA9giIA9AAIAhAUIAmgUIAhAAIgbD+gAIcBMIBVAAIAPiIIhWAAgASeCEIg4hYIgfAiIgGA2IhEAAIAmlrIBEAAIgWDXIABAAIBYhlIBOAAIhlBwIBaCJgAM1CEIg2ghIATi2IA9giICHAAIgGA7Ih8AAIgOCEIB8AAIgGA6gACKCEIAlldIC9AAIA3AiIgMBuIguAZIAAABIApAZIgNB5Ig9AhgADWBJIBsAAIAJhbIhrAAgADmhNIBsAAIAIhQIhsAAgAm6CEIAUjAIhVAAIgUDAIhFAAIAbj7IA4AAIAKAUIAmgUIA8AAIA3AiIgXDZgArjCEIAaj5IBEAAIgaD5gAuwCEIAaj5IA5AAIAKAVIAlgVIAzAAIgGA7IhWAAIgUC+gAz3CEIAkldIC+AAIA2AiIgLBuIguAZIgBABIApAZIgMB5Ig+AhgAyrBJIBrAAIAKhbIhsAAgAybhNIBrAAIAIhQIhrAAgArHijIAHhEIBKAAIgHBEg");
	this.shape_3.setTransform(2.8,-21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.3,-44.8,277.5,88.3);


(lib.bot_angelFace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFEA","#FFFFCC","#B67215"],[0,0.498,1],-2.3,-3.6,0,-2.3,-3.6,78.8).s().p("AncDZQAnj4CJjSQGQg4F5A4QiHDMg0DsQj8BHjKAAQiuAAiKg1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.bot_angelFace, new cjs.Rectangle(-47.7,-27,95.5,54), null);


(lib.block = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhljNIh3ASIgIgLICEgTIFFGxIgRACgAiYB4ICBgLIALALIiFAKg");
	this.shape.setTransform(57.2,-59.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#671D1F").s().p("AifgwIEmggIAsBxIllAwg");
	this.shape_1.setTransform(66.6,-30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#DC3D42","#982A2E","#DC3D42"],[0,0.51,1],-73.9,-6.6,-73.9,15.4).s().p("AiZBqIAxgEIBVgGIjRk0ICEgUIFFGxIkmAgg");
	this.shape_2.setTransform(57.2,-58.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("Ag+A9IBFgeIBXB/IgSCCgAiMkGIBIgZIDRE0IhWAHg");
	this.shape_3.setTransform(41.1,-51);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(103,29,31,0.298)").s().p("AhQgZIDCgcIgdBFIjGAmg");
	this.shape_4.setTransform(59.2,-21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD"],[0,0.514,1],156.1,20.5,156.1,20.5).s().p("AqdIuIh6iMIACAAIBuB9IPpAAIG7wvIAbgcInMRag");
	this.shape_5.setTransform(-7.3,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBFAF9").s().p("AqtHMIgOgPIP6AAIFzuJIAKASIlzOGg");
	this.shape_6.setTransform(-17.7,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#E9E7E5","#B8B8B8","#DDDDDD","#BBBBBB","#E9E7E5"],[0,0.282,0.463,0.733,1],0.3,-50,-3.1,82.1).s().p("AqYIyIiIibIP8AAIF0uHIBvg0IBigNInPRjg");
	this.shape_7.setTransform(-7.8,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-81.7,172.3,163.5);


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.8,-354.4,847.9,709);


(lib.asteroid3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;
	this.instance.setTransform(-46,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-30,92,60);


(lib.asteroid2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-52);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-52,215,104);


(lib.asteroid1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-86.5,249,173);


(lib.animBtnHL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ak+E+QiDiDAAi7QAAi6CDiEQCEiDC6AAQC7AACDCDQCECEAAC6QAAC7iECDQiDCEi7AAQi6AAiEiEg");

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(14,224,224,0.996)").s().p("AoyLaIHC2zIKiAAInCWzg");
	this.shape.setTransform(-84.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(14,224,224,0.996)").s().p("Ao9LaIHC2zIK5AAInCWzg");
	this.shape_1.setTransform(-78.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(14,224,224,0.996)").s().p("ApJLaIHC2zILRAAInCWzg");
	this.shape_2.setTransform(-73.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(14,224,224,0.996)").s().p("ApVLaIHC2zILpAAInCWzg");
	this.shape_3.setTransform(-67.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(14,224,224,0.996)").s().p("ApgLaIHC2zIL/AAInCWzg");
	this.shape_4.setTransform(-62,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(14,224,224,0.996)").s().p("ApsLaIHC2zIMXAAInCWzg");
	this.shape_5.setTransform(-56.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(14,224,224,0.996)").s().p("Ap3LaIHC2zIMtAAInCWzg");
	this.shape_6.setTransform(-50.9,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(14,224,224,0.996)").s().p("AqDLaIHC2zINFAAInCWzg");
	this.shape_7.setTransform(-45.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(14,224,224,0.996)").s().p("AqPLaIHC2zINdAAInCWzg");
	this.shape_8.setTransform(-39.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(14,224,224,0.996)").s().p("AqbLaIHC2zIN1AAInCWzg");
	this.shape_9.setTransform(-34.2,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(14,224,224,0.996)").s().p("AqmLaIHC2zIOLAAInCWzg");
	this.shape_10.setTransform(-28.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(14,224,224,0.996)").s().p("AqyLaIHC2zIOjAAInCWzg");
	this.shape_11.setTransform(-23.1,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(14,224,224,0.996)").s().p("Aq+LaIHC2zIO6AAInCWzg");
	this.shape_12.setTransform(-17.5,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(14,224,224,0.996)").s().p("ArJLaIHC2zIPRAAInCWzg");
	this.shape_13.setTransform(-11.9,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(14,224,224,0.996)").s().p("ArVLaIHC2zIPpAAInCWzg");
	this.shape_14.setTransform(-6.4,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(14,224,224,0.996)").s().p("ArgLaIHC2zIQAAAInCWzg");
	this.shape_15.setTransform(-0.8,0);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},1).wait(46));

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(14,224,224,0.996)").ss(5,1,1).p("AIKAAQAADYiZCZQiZCZjYAAQjXAAiZiZQiZiZAAjYQAAjXCZiZQCZiZDXAAQDYAACZCZQCZCZAADXg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,0,102,0.996)").s().p("Ak+E+QiDiDAAi7QAAi6CDiEQCEiDC6AAQC7AACDCDQCECEAAC6QAAC7iECDQiDCEi7AAQi6AAiEiEg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.7,-54.7,109.5,109.4);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.titleefx();
	this.instance.parent = this;
	this.instance.setTransform(3,-4.2,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(93));

	// Layer_5
	this.instance_1 = new lib.glowTitle();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.8,2.3,0.86,0.687,0,0,0,-2.4,1.9);
	this.instance_1.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.86,scaleY:0.69,alpha:0.34},0).wait(7).to({alpha:0.531},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.398},0).wait(1).to({regX:-2.2,regY:2,scaleX:0.9,scaleY:0.88,x:-1.7,y:2.4,alpha:0.379},0).to({regX:-2.1,scaleX:0.88,scaleY:0.76,x:-1.6,alpha:0.262},22).to({regX:-2.2,scaleX:0.9,scaleY:0.88,x:-1.7,alpha:0.379},26).wait(6).to({regX:-2.4,regY:2.1,scaleX:0.87,scaleY:0.87,x:-2,y:2.5,alpha:0.262},0).wait(3).to({regX:-2.2,regY:2,scaleX:0.9,scaleY:0.88,x:-1.7,y:2.4,alpha:0.379},0).wait(2).to({regX:-2.4,regY:2.1,scaleX:0.87,scaleY:0.87,x:-2,y:2.5,alpha:0.262},0).wait(1).to({regX:-2.2,regY:2,scaleX:0.9,scaleY:0.88,x:-1.7,y:2.4,alpha:0.379},0).wait(13));

	// Layer 2
	this.instance_2 = new lib.titleefx();
	this.instance_2.parent = this;
	this.instance_2.setTransform(5,3.3,1.1,1.1);
	this.instance_2.filters = [new cjs.ColorFilter(0.12, 0.12, 0.12, 1, 134.64, 0, 0, 0), new cjs.BlurFilter(8, 8, 1)];
	this.instance_2.cache(-172,-21,344,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(93));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.6,-26.1,384,56.5);


(lib.screen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.block("single",0);
	this.instance.parent = this;
	this.instance.setTransform(163.4,-5.4);

	this.instance_1 = new lib.block("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-163.1,-5.4,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(80));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(85,85,85,0.349)").s().p("AMHLLIgQARIhMhsIQcAAIFgseIhFhoIA5hGICvAAImYQQIvHBJQgpgbg7gXgAtwLtIuJgxInQwYIC9AAIAqBXIg/BXIFOMeIRFAAIhcB0IgXgZQgzAYgVAYgA/er8ICEAxIjrFVIiEAAgEAg+gF6IjilKIBxguID9F4g");
	this.shape.setTransform(0,-6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AobKGIjhj7Ih0A5IuJgyInQwXMBGTAAAImYQQIuFBDIishDIjhD7g");
	mask.setTransform(0,23);

	// Layer 2
	this.instance_2 = new lib.shade_lines("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1.1,7.7);
	this.instance_2.alpha = 0.301;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({startPosition:0},0).to({y:16.7},25,cjs.Ease.get(0.5)).to({y:-1.3},10).to({y:7.7},15,cjs.Ease.get(0.5)).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D22C35","rgba(210,42,60,0.2)"],[0,1],8.1,69.2,8.1,14.8).s().p("AobKGIjhj7Ih0A5IuJgyInQwXMBGTAAAImYQQIuFBDIishDIjhD7g");
	this.shape_1.setTransform(0,23);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(80));

	// Layer_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#4CCBD2","rgba(76,203,210,0.2)"],[0,1],-80.1,-45.5,-80.1,-6.7).s().p("A8xlWMA40gACIHHKtMhGTAAEg");
	this.shape_2.setTransform(0,-77.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(80));

	// Layer_6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4DCBD2").s().p("EAjGAFmQgHgCgFgHIAAAAIm/qdMg4hAAAImTKdQgEAHgIABQgHACgHgEQgGgEgCgHQgCgIAEgHIGYqlQADgEAEgDIAAAAQAFgCAEAAMA42AAAQAFAAAEACQAEACACAEIHFKmQAFAGgCAIQgBAIgHAEIAAAAQgFADgFAAIgEAAg");
	this.shape_3.setTransform(0,-78.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(80));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4ECBD2").s().p("AIhKZIw7AAQgEAAgEgCQgEgBgCgDIjYjxIhnAyIAAABQgEACgFgBIuKgxQgFAAgFgDIABAAQgFgDgCgFInQwXQgDgGACgHQABgGAGgEQAFgEAGAAMBGTAAAQAGAAAFAEQAFAEACAGQACAGgCAGIAAAAImYQQQgCAFgFADQgEADgGABIuFBCQgEABgEgCIifg+IjYDyQgDADgEABQgDACgEAAIAAAAgAr4F4QAGACAEAEIDcD1IQqAAIDcj1QAEgEAFgBQAGgCAFACICoBCIN1hCIGKvrMhFbAAAIHAPyIN5AxIBvg3QAEgCAEAAIAEAAg");
	this.shape_4.setTransform(-0.1,23);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.5,-114.3,495.3,203.8);


(lib.planetPurple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// sd
	this.instance = new lib.wobblePlanet1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:3.1,y:1.3},26).to({x:3.5,y:6.5},26).to({x:-4.1,y:5.5},39).to({x:-1.5,y:2.5},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.4,-314,633.4,633.5);


(lib.planet17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.purplePlanet("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.9,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:2.1,y:5.8},29).to({x:1.2,y:6},30).to({x:0.9,y:4.9},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.7,-53.6,95,95);


(lib.ipf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.badge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,15.7,0.421,0.421,0,0,0,-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-143.4,343.9,305.2);


(lib.galaxy_star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.starcopy();
	this.instance.parent = this;
	this.instance.setTransform(0.3,0.1,1,1,51.8,0,0,0.1,-0.1);
	this.instance.compositeOperation = "lighter";
	this.instance.filters = [new cjs.BlurFilter(2, 2, 3)];
	this.instance.cache(-27,-30,53,60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.star();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,16);
	this.instance_1.filters = [new cjs.BlurFilter(3, 3, 1)];
	this.instance_1.cache(-27,-30,53,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,153,255,0.749)").s().p("AhmBnQgrgqAAg9QAAg8ArgqQAqgrA8AAQA9AAAqArQArAqAAA8QAAA9grAqQgqArg9AAQg8AAgqgrgABZBZQAlglAAg0QAAgzglglQglglg0AAQgzAAglAlQglAlAAAzQAAA0AlAlQAlAlAzAAQA0AAAlglg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(51,153,255,0.498)").s().p("AAACmQhEAAgxgwQgwgxAAhFQAAhEAwgxQAxgwBEAAQBFAAAxAwQAwAxAABEQAABFgwAxQgxAwhFAAIAAAAgAhmhmQgrAqAAA8QAAA9ArAqQAqArA8AAQA9AAAqgrQArgqAAg9QAAg8grgqQgqgrg9AAQg8AAgqArg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,153,255,0.247)").s().p("AiCCDQg3g2AAhNQAAhMA3g2QA2g3BMAAQBNAAA2A3QA3A2AABMQAABNg3A2Qg2A3hNAAQhMAAg2g3gAh1h1QgwAxAABEQAABFAwAxQAxAwBEAAQBFAAAxgwQAwgxAAhFQAAhEgwgxQgxgwhFAAIAAAAQhEAAgxAwg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399FF").s().p("AAAB+QgzAAglglQglglAAg0QAAgzAlglQAlglAzAAQA0AAAlAlQAlAlAAAzQAAA0glAlQglAlg0AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,-46.9,90,97);


(lib.btnPlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYh5ICmBsQAWANgWAOIimBsg");
	this.shape.setTransform(2.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},3).wait(1));

	// Layer_1
	this.instance = new lib.animBtnHL();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.483,0.483);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(14,224,224,0.996)").ss(3,1,1).p("AD8AAQAABphKBJQhJBKhpAAQhoAAhJhKQhKhJAAhpQAAhoBKhJQBJhKBoAAQBpAABJBKQBKBJAABog");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(14,224,224,0.996)").s().p("AiZCaQg/hAAAhaQAAhZA/hAQBAg/BZAAQBaAABAA/QA/BAAABZQAABag/BAQhAA/haAAQhZAAhAg/g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,0,102,0.996)").s().p("AiZCaQg/hAAAhaQAAhZA/hAQBAg/BZAAQBaAABAA/QA/BAAABZQAABag/BAQhAA/haAAQhZAAhAg/g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(36,189,168,0.4)").s().p("AjgDgIAAAAQhchdAAiDQAAiCBchdIABgBQBdhcCCAAQCDAABdBcIABABQBcBdAACCQAACDhdBdQhdBdiDAAQiCAAhehdgAjRjSIgBABQhWBXAAB6QAAB7BWBXIABAAQBXBXB6AAQB7AABXhXQBXhXAAh7QAAh6hXhXIAAgBQhXhWh7AAQh6AAhXBWg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(36,189,168,0.298)").s().p("AjuDvIAAgBQhihiAAiMQAAiKBhhjIACgBQBjhiCKAAQCMAABiBiIABAAQBiBkAACKQAACMhjBiQhiBjiMAAIAAAAQiKAAhkhigAjfjgIgBABQhcBdAACCQAACDBcBdIAAAAQBeBdCCAAQCDAABdhdQBdhdAAiDQAAiChchdIgBgBQhdhciDAAQiCAAhdBcg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(36,189,168,0.498)").s().p("AjRDSIgBAAQhWhXAAh7QAAh6BWhXIABgBQBXhWB6AAQB7AABXBWIAAABQBXBXAAB6QAAB7hXBXQhXBXh7AAQh6AAhXhXgAjDjEIgBABQhQBRAAByQAABzBQBRIABAAQBRBRByAAQBzAABRhRQBRhRAAhzQAAhyhRhRIAAAAQhRhRhzAAQhyAAhRBQg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(36,189,168,0.6)").s().p("AAAEVQhyAAhRhRIgBAAQhQhRAAhzQAAhyBQhRIABgBQBRhQByAAQBzAABRBRIAAAAQBRBRAAByQAABzhRBRQhRBRhzAAIAAAAgAi1i2IAAABQhLBMAABpQAABrBLBLIAAAAQBLBLBqAAQBrAABLhLQBLhLAAhrQAAhqhLhLIAAgBQhLhKhrAAQhpAAhMBKg");

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(36,189,168,0.8)").s().p("AAADtQhhAAhGhFIAAgBQhFhFAAhiQAAhhBFhGIAAAAQBGhFBhAAQBiAABGBFIAAAAQBFBGAABhQAABihFBGQhGBFhiAAIAAAAg");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(36,189,168,0.698)").s().p("Ai1C2IAAAAQhLhLAAhrQAAhpBLhMIAAgBQBMhKBpAAQBrAABLBKIAAABQBLBLAABqQAABrhLBLQhLBLhrAAIAAAAQhqAAhLhLgAininIAAAAQhFBGAABhQAABiBFBFIAAABQBGBFBhAAQBiAABGhFQBFhGAAhiQAAhhhFhGIAAAAQhGhFhiAAQhhAAhGBFg");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(36,189,168,0.2)").s().p("Aj7D9IgBgBQhohoAAiUQAAiSBnhpIACgCQBphnCSAAQCUAABoBnIABABQBoBpAACTQAACUhpBpQhoBoiUAAIAAAAQiTAAhohogAjtjuIgCABQhhBjAACKQAACMBiBiIAAABQBkBiCKAAQCMAABihjQBjhiAAiMQAAiKhihkIgBAAQhihiiMAAQiKAAhjBig");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(36,189,168,0.098)").s().p("AkKELIgBgBQhthuAAicQAAibBthuIACgCQBuhtCbAAQCcAABuBuIABAAQBuBvAACbQAACchuBvQhvBuicAAQibAAhvhugAj7j9IgCACQhnBpAACSQAACUBoBoIABABQBoBoCTAAQCUAABohoQBphpAAiUQAAiThohpIgBgBQhohniUAAQiSAAhpBng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-35.2,94.3,70.5);


(lib.bot_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHACQAshzCEhhQjDCxgKD0QgQhdAth0g");
	this.shape.setTransform(-68,-6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#17435F").ss(3,1,1).p("ABSg0QhGBWgyAoABUAFQgeAxgsAiAAyhXQgpA4hRBGAgPhRQgiAtgiAZ");
	this.shape_1.setTransform(58.4,7.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("ApeCEQhMmBDWi3IAAAAQgdAQgbAUQjsCjANEcQAHCFA5BUQBCBiCEAhQD4A/FXgfQFYggCDiKQCCiMAhjEQAYiRhpiAQg1ALgvAVQhnAuhLBfQhaBwgzCzQoug2kiBJ");
	this.shape_2.setTransform(-4.4,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3399DB").s().p("ArDCGQgNkdDsijQAbgTAdgRIAAAAQjWC4BMGAQgyAUgPAsQgMAhAAAkQg5hVgHiEgAFKDPQCwk/DKgYQAFEFifDXQgWhTjKgyg");
	this.shape_3.setTransform(-8.4,2.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2875A9").s().p("AoFFhQiEgihChhQAAgjAMgiQAPgrAygVIABAAIABAAQEihKIuA2QAzizBahvQBLhfBnguQAvgVA1gLQBpCAgYCRQghDEiCCLQiDCLlYAgQhwAKhnAAQjSAAimgqgAECBOQDKAyAWBUQCfjXgFkFQjKAXiwE/g");
	this.shape_4.setTransform(-1.2,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADwkoQgJgRgCgPQgBgMAEgGQACgCACgBQADgCAEABQAHAAAIAGQAOAKALASQAMATABASQABAMgEAGQgCACgCABQgCACgBAAQgIACgLgJQgKgHgJgMQgEAFgFAEQgNANgMAOQg5BAgiBGQg2ALgvAVQhlAuhMBeQhZBwg0C0QAjkDCYilQAXgaAagYQAtgoA0giQBVg4BsgoQAFgCAFgCgAD4kaQgDgFgDgFQgBgBgBgD");
	this.shape_5.setTransform(49.6,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgagsQAHAAAJAGQANAKALATQALASACARQABANgFAGQgCg6gvgfg");
	this.shape_6.setTransform(76.6,-43.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F5D802").s().p("AhrhIQAXgaAagYQAtgoA0giQBVg4BsgoQADALAGAIIgZAbQm3CxhHGlQAjkDCYilgADqlaIAEgDQADgCAEABQAwAfACA6IgEADIgDACQgsgfgKg7g");
	this.shape_7.setTransform(49.4,-13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6B8A08").s().p("ADbj4Qg4A/gjBHQg1AKgvAWQhmAthLBfQhaBvgzC0QBGmlG3iwgAEQkJQgKgHgJgMIgGgKIgCgEIACAEIAGAKIgIAIQgHgIgDgKIAKgEQgIgRgCgPQgCgNAFgFQAJA7AsAfIgCAAQgHAAgKgHgAD9kcIAAAAg");
	this.shape_8.setTransform(49.1,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_4
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("AClAmQiRgLgoAPQgoAOgbgPQgcgOgxgCQAJgPANgLQAJgKAMgHQAagRApgHQATgEASgBQAFgBAFAAQAPAAAPABQAlAEAcAMQAdALAUAQQAFAEAFAFQALAOAHATg");
	this.shape_9.setTransform(10.1,-49.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6B8A08").s().p("AhWASQgcgPgygCQAKgOAMgLQAiACAUAJIACABIADABQAYAMAvgLQAqgKB1ADQALAOAHASQiRgLgoAOQgTAHgRAAQgRAAgNgHg");
	this.shape_10.setTransform(10.1,-47.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+ASQAKgKALgIQAagPAogIQAUgEASgBQhSASgUAVQASAFANANQgUgJgigCg");
	this.shape_11.setTransform(2.1,-51.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5D802").s().p("AhgAbIgDgCIgCgBQgNgNgTgFQAVgUBTgSIAJgBQAQAAAOABQAlAEAdAMQAcALAUAPIAKAKQh1gDgqALQgWAGgRAAQgTAAgNgHg");
	this.shape_12.setTransform(11.4,-51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_5
	this.instance = new lib.db_feature("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-11.7,-1.3,0.85,0.85,0,0,0,-0.1,0.2);
	this.instance.alpha = 0.898;

	this.instance_1 = new lib.bot_angelFace();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.2,-0.1,1.109,1.106,0,0,0,-0.2,-0.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(255,255,204,1)",0,0,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHakLIgBAAQmhg9m8A9QiYDpgrESQFLB+IHiSIAAAAAHbkKQAAAAAAgBQgBAAAAAAAHakLIAAAAAHbkKIBtBpIiwGMIiNgPQA6kFCWjhg");
	this.shape_13.setTransform(-6.6,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AidDtQA6kFCUjhIBtBpIivGMgAAwj6IAAAAIABAAg");
	this.shape_14.setTransform(35.9,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_7
	this.instance_2 = new lib.cermin("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-2.6,-12.1,1.109,1.106,0,0,0,-0.1,-0.1);
	this.instance_2.alpha = 0.34;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1,3,true).p("AClgJQAmCLiqgaQiogZgkh7QAmg+BugBQCcgDAgBlg");
	this.shape_15.setTransform(10.8,-42.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#6B8A08").s().p("AAhBoQiogZgkh7QAmg+BugBQCcgDAgBlQAgB1h0AAQgWAAgagEg");
	this.shape_16.setTransform(10.8,-42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.instance_2}]}).wait(1));

	// Layer_9
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAEApQgJgHgJgMIgGgKIgCgEQgIgQgCgPQgCgRAIgFQAJgEAOAJQANAKALATQALASACARQABARgJAFQgDABgDAAQgHAAgJgGg");
	this.shape_17.setTransform(75.9,-43.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(1));

	// Layer_6
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AEii6Qn9CXhGDfQAWkeIthYg");
	this.shape_18.setTransform(-34.8,-28.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACUmNQgDAKgCAKQgUBIgJBVQgGAxgCA2QgEBVAFCmIAAABIjKEJQgfg8gShNQgGhaAGhZQAFhRAghNQAhhPA1hEQAwg+A2g5QAWgXAXgXIALgN");
	this.shape_19.setTransform(-55.6,-16);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F5D802").s().p("AiNCRQAFhQAghMQAhhQA1hDQAwg/A2g5IAtguIAQAJQgTBIgJBVQkLB3AJFrQgGhZAGhag");
	this.shape_20.setTransform(-55.9,-22.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6B8A08").s().p("AiREGQgKlrELh3QgFAxgDA2QgEBVAGCmIgBABIjJEJQgfg9gShNgAB8mCIAMgMIALABIgGAUIgRgJg");
	this.shape_21.setTransform(-55.5,-16);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1,3,true).p("AApgEQAGAFACAGQADAFgCAFQgDAIgRADQgMABgPgEQgBABgBgBQgBgBgEgBQgBAAgCAAQgCgCgCAAQgDgCgCAAQgMgHgIgHQgCgBgBgBQgHgEgCgGQgDgEACgGQAEgJAQgBQASgDATAJQAUAGANALg");
	this.shape_22.setTransform(-40.5,-58.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAJAAQgegHgNAJIgJAHQgDgFACgEQAEgKAQAAQASgDATAIQAUAGANALQgPgGgWgGg");
	this.shape_23.setTransform(-41,-59.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F5D802").s().p("AADARIgngMIgDgCQgHgEgCgGIAJgHQANgKAeAIQAWAGAPAGQAGAFACAGQgIANgTAAQgIAAgLgDg");
	this.shape_24.setTransform(-40.5,-58.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6B8A08").s().p("AgDAJIgCgBIgGgCIgDAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFgCQgMgFgIgIIAoAMQAiAIALgSQADAFgCAEQgDAJgRADIgEAAQgLAAgLgDg");
	this.shape_25.setTransform(-39.8,-56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.9,-62,166.2,117.6);


(lib.asteroidWobble3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.asteroid3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(3,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-2},42).to({y:-5},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,-35,92,60);


(lib.asteroidWobble2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.asteroid2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.5,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7,y:18},44).to({rotation:0,y:14},37).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106,-38,215,104);


(lib.asteroidWobble = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.asteroid1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.7,y:2.5},37).to({rotation:0,y:6.5},43).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124,-80,249,173);


(lib.asdasfg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_14
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhyCQQA7BGBXAbQBHAWBAgoQBUg0gBheQAAgagLgYQgIgSgPgPIgjg2QAnCoiiBCQheAnhOhFgAC1g8IgzhTIguhEQkNhag+CDQgIA4AUA+ACCiPQgXDCiOALQiQAMg4h+QAQAyAjA1QAjA0AjAp");
	this.shape.setTransform(2.9,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4C4C4C").s().p("AAgDxQhXgbg7hGIADACQAwAqA3AAIABAAIAAAAQAfAAAigOQCDg1AAh4QAAgcgIghIAjA2QAPAPAIASQALAYAAAaQABBehUA0QgpAagtAAQgYAAgZgIgAgIC8Qg3AAgwgqIgDgCQgjgpgjg0Qgjg1gQgyIABACQAzBxB8AAIAAAAIAAAAIAYgBQCOgLAXjCIAzBTQAIAhAAAcQAAB4iDA1QgiAOgfAAIAAAAIgBAAgAg7A/Qh8AAgzhxIgBgCQgUg+AIg4QA+iDENBaIAuBEQgXDCiOALIgYABIAAAAIAAAAgACCiPg");
	this.shape_1.setTransform(2.9,68.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_13
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAyl/QpcgwAEMGIQ4AsQB8rSpcgwg");
	this.shape_2.setTransform(12.2,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2875A9").s().p("AomFXQgEsGJcAwQJcAwh8LSg");
	this.shape_3.setTransform(12.2,105.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	// Layer_2
	this.instance = new lib.db_handL("single",0);
	this.instance.parent = this;
	this.instance.setTransform(95,25.4,1,1,0,14.5,-165.5,2.8,-17.6);

	this.instance_1 = new lib.db_armL("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(40.3,-33.3,1,1,0,0,0,-28.4,-27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Akph/QDsiBIrB1QoWhQjZByQjZBxgLC7QgwjDDsh/g");
	this.shape_4.setTransform(-9.9,-33.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1,3,true).p("AECiSQgCAIgJAJQhCDygKD0Ql7A2kogXApDhcQgDgUgMgMQhKjgETiCQETiBImCBIA1ATAH8CPQBahwANjLQgJjjh1g8AECiSQBOjNCVhsAFJH4QhXg4hHhbAH8CPQhfEDhUBmQlQA1lAgSQh5g8g4hbAECiSQCfCABbChApDhcQAEAPABAOQAHEbA/CoAjLjKIAAgqQAIhxAxhpAjLjKQiyASjGBcAECiSQjdhAjwAI");
	this.shape_5.setTransform(0.6,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3399DB").s().p("AmfHOQg/iogHkcQFVikHgBjQhBDzgLDzQkKAmjiAAQhfAAhYgHgAkwmTQETiCImCBQiDBPhIC+QjPg1jgASQAHhxAyhpQgyBpgHBxQi4ANjPBrQhLjgETiBgAhxiqIAAAAg");
	this.shape_6.setTransform(-8.4,-7.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#17435F").s().p("AivAMQBOjMCThtQB2A8AIDkQgMDKhaBxQhbijieh/g");
	this.shape_7.setTransform(44,-15.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2875A9").s().p("AkbH6Qh5g7g5hbQEpAXF6g3QBIBcBWA4Qj6AnjwAAQhTAAhSgFgADWFEQALjzBBjyQnghjlVClQAAgPgFgPQDHhcCygRIAEAAIAygBIAAAAIAAAAQDHAAC5AzIADAAIANAEIAGACQgCAIgJAJQAJgJACgIQCfB/BbCiQhfEDhUBmQhWg4hIhcgAoYh9QgDgUgLgLQDPhsC4gMQDggSDPA0QBJi9CChPIA1ASQiUBthPDNIgGgCIgNgEIgDAAQi5gzjHAAIAAAAIAAAAIgyABIgEAAIAAgqIAAAqQiyARjHBcIAAAAgAEtiyIAAAAgAifjqIAAAAgAifjqg");
	this.shape_8.setTransform(-3.8,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_12
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACvAZQAFBMAZBEQi7ASiqgIQgihGgMhJACvAZQgFg7AIhBQjbijigCjQgIBGALBBACvAZQjghxiVB8");
	this.shape_9.setTransform(2.7,-50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4C4C4C").s().p("AiYCzQgihGgMhJQBOhABiAAIABAAIAAAAQBXAABpAzIAEACQAFBMAZBEQiBAMh4AAQg3AAg1gCgAjJhjQCgijDbCjQgIBBAFA7IgEgCQhpgzhXAAIAAAAIgBAAQhiAAhOBAQgLhBAIhGgACvAZIAAAAg");
	this.shape_10.setTransform(2.7,-50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// db_handR
	this.instance_2 = new lib.db_handR("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91.4,30.6,1,1,0,-1.3,178.7,-0.6,-17.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// db_armR
	this.instance_3 = new lib.db_armR("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-47,-18.1,1,1,1.3,0,0,26.8,-22.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// Layer_1
	this.instance_4 = new lib.bot_head("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.3,-101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-163.6,228.7,308.4);


(lib.titleHero = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bring_Back_the_Sun
	this.instance = new lib.Bring_Back_the_Sun();
	this.instance.parent = this;
	this.instance.setTransform(2.8,-3.3,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// Layer_2
	this.instance_1 = new lib.glowSubTitle("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.1,0,0.831,0.831);
	this.instance_1.alpha = 0.301;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,alpha:0.602},21,cjs.Ease.quadOut).to({alpha:0.301},38,cjs.Ease.cubicIn).wait(31));

	// Layer_1
	this.instance_2 = new lib.title();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,-92.2);

	this.instance_3 = new lib.screen("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.1,-13,1,1,0,0,0,0,0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFAF9").s().p("AgBAMIgGgCIgCgBIgBgDIgDgHIADgGIAEgDIAFgCIAGABQAGACACAHQADAFgGAFIgFADIgFACg");
	this.shape.setTransform(46.2,56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.7,-127.7,495.3,203.8);


(lib.TAPIR_HERO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.ipf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-154.9,-125,0.093,0.1,0,10.5,0.8,-0.1,-0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANAAQAphOBeh8IANBDQhRBAgtBhIjCCxg");
	this.shape.setTransform(-96.5,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("Am6BeQAMhEApgYQApgXCdAUIDBjoQAkhMB/iXQAYBgAdBMQAMAhAOAdQAHAQAIAPQAHAPAJAOQAlBAArAnQBBA8BQADQh7BXhkAXIkwCQQhyC2iFAXQhDALgbg9QgGgNgEgSQgBgCAAgDQgSgGgMgKQgOgKgHgOQgHgMgCgQQgBgKABgLQAAgNAEgQQAAgBABgBQgIAAgGgCQgIgCgGgEQgLgFgIgIQgIgIgEgMQgGgPABgVQACgvA2gjgAl2A8IhEAi");
	this.shape_1.setTransform(-97,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7E2326").s().p("AmdDTQgGgOgEgRIgBgFQgSgGgMgKQByAHBahEQBXhCBVhEQBahJBrgpQBogpBXhHQBCA8BPAFQh7BXhkAXIkwCPQhxC2iFAXIgTACQg1AAgXg0g");
	this.shape_2.setTransform(-92.5,29.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DC3D42").s().p("AlWFfQgLgGgIgIQgIgIgEgMQgGgPABgVQACgvA2gjQAMhDApgYQApgZCdAUIDBjnQAkhLB/iYQAYBgAdBMQANAhANAdIAPAfQhBAphLBCQivCcgQANQhyBYiKAwQg9AWg/AMQgIgCgGgDgAlCDHIBEgig");
	this.shape_3.setTransform(-109,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A92F33").s().p("AlqEUQgNgKgIgOQgHgMgBgQQgBgKAAgLQABgNAEgQIAAgCIgOgCQA/gNA9gVQCKgwBzhYQAQgMCuidQBLhCBBgpIAQAdQAlBAArAnQhXBGhoApQhsAohaBJQhUBFhXBCQhSA+hmAAIgUgBg");
	this.shape_4.setTransform(-101.7,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhJgDICAh9IATACIh+CAIAbB/g");
	this.shape_5.setTransform(-114.7,-146.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,2,0,3,true).p("AG3CYQgzgrgyglAGqCxIgBABAkoixIiOCMIAAAAAmDCsIAAAA");
	this.shape_6.setTransform(-85.1,-142.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1,3,true).p("Am2hcIAEAhIAvCwIAAAAIAAAAIETB1QDYhYFBgXQAAAAABAAIAAgBIANgZAFSARQjLiXjMg8Qhyghg8gGQgvACgGgB");
	this.shape_7.setTransform(-85.1,-136.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC3D42").s().p("AkvBdIg2iJICGiGQA7AHByAhQDNA8DLCWQi4gCj7Btg");
	this.shape_8.setTransform(-87,-142.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A92F33").s().p("AmDBsIgzi5IAAgBICOiLIA1gCIiFCGIA2CJIDiBVQD6htC4ADQAyAlAzAsQlRAdjQBPg");
	this.shape_9.setTransform(-85.1,-138);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AGWADIABgBIAAABIgBAAIAAAAgAmWgCIAAAAIAAAAg");
	this.shape_10.setTransform(-83.1,-124.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7E2326").s().p("AmDAuIAAAAIgviwIgEggIAzC5IEZBwQDQhPFRgeIgNAZIgBABQlBAXjYBYg");
	this.shape_11.setTransform(-85.1,-129.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1,3,true).p("AAAB6QAAABgBABIAAABQhzC9i8D0QgRCLBbBDQAsAgBGAPQAVAFAYADQADgCAEgCQGCiYDQlkQAFgJACgGQAPguh3kXQhcjckAkHQhIhLhVhOQi9ihj0ANQgqBSALDFQALDFBYCDQBrBIBrBVQBiBNBqBTQADACAEADQAGAFAGAFg");
	this.shape_12.setTransform(-64.9,-67.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgCgBIABgBIAEAFIgFgEg");
	this.shape_13.setTransform(-64.8,-54.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#585858").s().p("Ak8F9QC7j0B0i9IAFAFIgFgFIACgCIgNgKQiTifgxhQQgdgxgIgfQgLgkADgvIABgNQANgSApgXQApgYAogQQAogQAogIQApgHAeAUQAQAKAPASQAIAKAQAYQBcCSBQCaQAlBHAPAvQAXBEgFA6QgGBThFBnQhLBuhpBTQhpBUjJBYQhbhCARiLg");
	this.shape_14.setTransform(-63.7,-49.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#424242").s().p("AkkJmQDJhZBphTQBphTBLhvQBFhnAGhTQAFg6gXhDQgPgwglhHQhQiZhciTQgQgYgIgKQgOgSgQgJQgfgUgpAHQgoAHgoAQQgoAQgpAYQgpAYgNARIgBAOQgDAvALAjQAIAfAdAxQAxBQCTCfIgIgFIjIjFQgegfgMgNQgWgagLgYQgTgngHg+IgJhpQCThFBTgaQA8gSA3gIQDqD1CSEwQAjBJAOAzQASBHgLA7QgMBDg3BDQglAshMBAQhxBhhBAxQhmBNhrA1QhGgPgsggg");
	this.shape_15.setTransform(-58.7,-52.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("Ah0MrQBrg1BmhNQBBgxBxhhQBMhAAlgsQA3hDAMhDQALg7gShHQgOg0gjhJQiSkvjrj1Qg2AHg8ATQhTAaiTBFIAJBpQAHA+ATAnQALAYAWAaQAMANAeAfIDJDEIjMigQhrhVhrhIQhYiDgLjFQgLjFAqhSQD0gNC9ChQBVBOBIBLQEAEHBcDcQB3EXgPAuIgHAPQjQFkmCCYIgHAEQgYgDgVgFg");
	this.shape_16.setTransform(-64.9,-67.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1,3,true).p("ACoDnQhJkgkGit");
	this.shape_17.setTransform(-63.7,-13);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#671D1F").s().p("AhukXQEGCsBIEgIm/Bjg");
	this.shape_18.setTransform(-69.4,-8.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,2,0,3,true).p("ABdhRQheByhbAx");
	this.shape_19.setTransform(-51.9,-116.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#671D1F").s().p("Ai5iIIFzBuQhfByhbAxQhoiGhRiLg");
	this.shape_20.setTransform(-61.2,-121.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgmhUQAsgaAwgTIhFBDIgnDAg");
	this.shape_21.setTransform(-236,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1,3,true).p("AoihoQgPAHgGAfIgND2QBDgkArgKQEchDESApQDmAhEHBpIgXj5QACgcgVgTQjChUjVgtQgPgDgQgDIgcg0Qkygai4A8IgZAzIgZALg");
	this.shape_22.setTransform(-184.8,0.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7E2326").s().p("Aj2BKIAWj7IAXgjQDTAsDDBUQAVAUgCAcIAWD5QkGhpjmgig");
	this.shape_23.setTransform(-151.3,3.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A92F33").s().p("AkzgnIAQguIAYgLIAZgzQC5g8EyAaIAcA0IAfAGIgXAkIgWD7QkSgpkcBDg");
	this.shape_24.setTransform(-202.3,-5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DC3D42").s().p("AgrhVQAGgfAPgIIBOgkIgPAuIAMDlQgrAJhBAlg");
	this.shape_25.setTransform(-237.2,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).wait(1));

	// tapir body
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("ADghtQligIhdDwQAnkuGYBGg");
	this.shape_26.setTransform(-322.8,379.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("AplLsQhlneJAAwICNx3QB7BLAyCrQAsgqAvgjQBUg/BegnQBUgjBkgPIkkSXIgqGGIACAdApgMEQAXgJAegHQAggHAngFQD3gfIWBJAplLsQAegOAdgGQAlgJAwgFQD3gbIFBGApgMEQgDgMgCgMApgMEQAFAOArAKQBVAUDsABQD4AJBoAAQCxABAHgp");
	this.shape_27.setTransform(-284.4,331.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AENAuQhogBj4gJQjsAAhVgUQgrgKgFgOQAXgJAegGQAggIAngFQD3geIWBHQgGApiqAAIgIAAg");
	this.shape_28.setTransform(-300,409.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A2A2A").s().p("AmGgBIAPgeQD3gbIFBFIACAdQoWhIj3Afg");
	this.shape_29.setTransform(-293.8,405.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3D3D3D").s().p("AgdgBQAegNAdgHIgBAJIgBASQgcAHgYAJIgFgXg");
	this.shape_30.setTransform(-342.9,406.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgpACIAAgIQAmgJAugFIgPAdQgmAFggAHIABgTg");
	this.shape_31.setTransform(-335.7,404.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A92F33").s().p("AnxKrQAFhVAsgsQATgUArgSQA+gaBPgBQA6gBBWANQAwAGAOAAQAjABASgIQAUgIAMgaQANgbgQgmQB3oOCgoDQBUg/BegnQiEIai+JAQBHFJj/g7QkAg7hJAzQhKA0gFArQgwAFglAJIACg8g");
	this.shape_32.setTransform(-289.9,329.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DC3D42").s().p("AAqFlICOx3QB7BLAyCrQAsgqAvgjQigIEh3INQAQAngNAaQgMAagUAJQgTAIgjgBQgOgBgwgGQhVgNg6ABQhPACg+AZQgrATgTAUQgsArgFBWIgCA8QgdAGgeAOQhlneI/Awg");
	this.shape_33.setTransform(-302.5,327.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7E2326").s().p("AolLkQAGgrBJg0QBKg0EAA8QD+A6hHlIQC+pACFoaQBUgkBjgPIkjSYIgrGFQoEhGj4Abg");
	this.shape_34.setTransform(-276.5,328.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("ADkhyQlyAChVDtQAbkrGsA8g");
	this.shape_35.setTransform(-132,364);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1,3,true).p("AH1LNQhgskjFsdQhkAmhFA7QhPBFhFBXQgnAwgjA1QhQhyh9gFIFhO7QoohDBZHZQAGAeAIAgQACgeA0gWQAWgJAhgIQAlgJAwgFQBKgKBjgBQFjgFEOBQAH1LNQlChWkrAEQhjABhNAKQhVAMg4AWQgkAOgZASAnkMGQAWAoBBAaQCJA2FGgLQHhgQgnhwAH1LNIAHAm");
	this.shape_36.setTransform(-104.5,321.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#2A2A2A").s().p("AjfgNQhjABhKAJQgEgYgCgUQBNgKBjgCQErgEFCBWIAIAlQkPhOljAFg");
	this.shape_37.setTransform(-93.9,390.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AmaA5QhBgZgWgoQACgeA0gVQAWgKAhgHQAlgJAwgGQBKgJBjgBQFjgFEOBPQAnBwnhAQQg1ACgwAAQj3AAhzgug");
	this.shape_38.setTransform(-103.2,399.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3D3D3D").s().p("AghgOQAZgSAjgOIAEAcIADAPQgzAUgCAeQgIgggGgdg");
	this.shape_39.setTransform(-151,393.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhEAYIgFgcQA5gVBUgMQABAUAFAYQgwAFglAJQggAHgXAKIgCgOg");
	this.shape_40.setTransform(-140.9,389.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A92F33").s().p("AlKJcQAVhTA5gvQBCg2CNgHIBygFQCfAOgZiLQgYiMgyjwQgrjOhfkSQBFhXBQhFQCaHsAtIFQADAwgDAbQgEAqgUAaQgZAeguANQgjAJg0AAQiBAAg5ANQhlAVgqBFQgbAuADBDIABANQhVAMg5AWQgIhEAPg+g");
	this.shape_41.setTransform(-114.5,315.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#DC3D42").s().p("ACmETIlgu7QB9AFBPByQAkg1AmgwQBgESArDOQAyDxAYCLQAZCMifgPIhzAFQiMAIhCA1Qg5AvgVBTQgPA+AIBEQgkAOgYASQhanYInBCg");
	this.shape_42.setTransform(-124.7,324.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7E2326").s().p("AjeLPQhjABhMAKIgBgNQgDhDAbguQAqhFBlgVQA6gNCBAAQAzAAAjgJQAugNAZgeQAUgaAEgqQADgbgDgwQgtoFiZnsQBDg7BkgmQDGMdBfMkQlChWkrAEg");
	this.shape_43.setTransform(-94.3,312.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1,3,true).p("Ah8oWIkrVBQAxDkh8FfIhzgSIhhgQIlCgzIAulWQgUhkAHiVQAHiVB2o7QB3o8BMlWQArjAASheQAPhJgBgMQB6g1CegaQBCgKBIgGQD1gUGzB1QAYA2BjH3QBjH4A5GIQA5GJAZCcQCVDdAdE+IiJAXIhnARIkoAyQh4j+hJi4QhUhQgbifQgbifhAkVQg/kVhgnIQgJgNg6gRQhDgThBgZQgLgFgLgEQgDgBgCgBQgEgCgDgB");
	this.shape_44.setTransform(-181.2,142.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#585858").s().p("AuQTzIAvlXQgUhkAGiVQAHiVB2o7QB3o8BMlWQArjAAShdQE4h6FjBUQFSNIBWJXQBVJZhNBYQDKAVBuGDIkoAyQh3j+hKi5QhThQgcifQgbifg/kVQhAkVhhnIQgIgMg6gRQhCgUhBgZIgXgJIATB/Qh+JPjIJGQg9C0jBApQC+Ctg9D6gAijp0IAFACIgFgCIgGgDIAGADg");
	this.shape_45.setTransform(-193.2,146.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#424242").s().p("AriVMQA9j5i+iuQDBgpA9i0QDIpGB+pPIgTh/IAWAJIA/BbQiBKai0JYQAeCwiMGhgAHEN0QBOhYhWpYQhVpYlTtIQljhUk3B6QAPhJgBgNQB6g1CegZIJ6CSQE+NgBASDQCGCABGFfIhnASQhumDjLgVg");
	this.shape_46.setTransform(-178.4,142.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("As2VcQCMmhgeixQC1pXCAqaIg/hbQBCAZBCATIkrVBQAxDkh8FfgAHiMbQhAyCk+thIp6iSQBCgKBIgGQD2gUGyB1QAYA2BjH3QBjH4A5GIQA5GJAZCcQCVDdAdE+IiJAXQhGlgiGiAg");
	this.shape_47.setTransform(-160.2,142.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).wait(1));

	// Layer_3
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ADriuIgiArQjiB0jRC9QCmi4Evikg");
	this.shape_48.setTransform(-281.4,-125);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(1,1,1,3,true).p("AlbC8IgBAQQB9BSCXALIEBi8ICkmDIgJgSQguASguAVQkkCHj2D6QgdAdgcAfg");
	this.shape_49.setTransform(-277.1,-120);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DC3D42").s().p("AkNCXQD3j7EjiHQhbCmgtCZIjbCXQhlgRhShDg");
	this.shape_50.setTransform(-279.2,-122.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#7E2326").s().p("AlcDMIABgQQB7BOCPAPID8i1ICpmMIAJASIikGDIkBC8QiXgLh9hSg");
	this.shape_51.setTransform(-277.1,-120);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A92F33").s().p("AlXDEQAcgfAdgdQBSBEBlARIDbiYQAtiYBbimQAugVAugSIioGMIj8C1QiPgPh8hOg");
	this.shape_52.setTransform(-277.5,-120.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(1));

	// Layer_6
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AFTgOIgOANQkjghl0BKQGHh9EeBHg");
	this.shape_53.setTransform(-188.2,-161.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1,3,true).p("AleBTQgFgRADgVQAAgCAAgCQAEgZAFgQQDFgvDFACQgFAXACAYQAAAFABAEQACAPAEAPQjbAmi6AEQhHAVhDACQhoARhXAKQgDgNADgMQARhTDag/Qg0AhABBLQAAAQAEASQAAABADABAEPheQiHg3jwAZQjxAYhjA+AHQhOQAQACARADQCEASA1BbQgXAAgTAAQgbAAgTgBQgfgDhxgBAEPheQg3AgADA1QAAAQAHATQACAEACADQhYALhXgDAHQhOQgdAmACAiQACATALASQgIAAgHAAQh/gBhOADAEPheQBSACBvAO");
	this.shape_54.setTransform(-178.8,-153);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4C4C4C").s().p("Am9gsQg0AhABBKQhXAbhhALQAShTDZg+gAJ/AeQhOgih8gIIgBgFQAAggAbgjIAhAEQCEASA1BbIgmABIgEAAgADagPQgDg2A3gfQBSACBvAOQgbAjAAAgIABAFQhdgHh+AEg");
	this.shape_55.setTransform(-178.7,-152.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#404040").s().p("AqSAvQBhgMBXgaQAAAQAEASQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQhoARhXAKQgDgNADgMgAJngZQgfgDhxgBQgLgSgCgUQACAUALASIgPAAQh/gBhOADIgEgHQgHgTAAgRQB9gDBdAGQB9AJBOAiQgbAAgTgBg");
	this.shape_56.setTransform(-180.9,-146.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CCCCCC").s().p("AlMgGQBkg+DwgZQDwgZCHA4Qg2AfACA1IAAAAQhRAThYgHIgBAAQgCgZAFgWQjGgDjFAvQgFAQgDAZIgBAFQhIARhFAHIgBAAQgChLA0ggg");
	this.shape_57.setTransform(-190,-156.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FF9900","#FFFF66","#FF9900","#000000"],[0,0.494,1,1],29.1,13.4,0,29.1,13.4,68.6).s().p("AjLAbIABgFQADgYAFgQQDEgwDHADQgFAXACAZIAAAJQACAOAEAOQjbAmi6AFQgEgRACgVg");
	this.shape_58.setTransform(-193.7,-151.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A9A9A9").s().p("AlmA4QgEgTAAgPIACgBQBEgHBJgQQgDAUAFARQhHAUhDADQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAAAgAC8gGQgEgPgCgPIgBgJIABAAQBYAHBRgTIABAAQABARAGATIAEAHQhEAIhFAAIgmAAg");
	this.shape_59.setTransform(-192.1,-148.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#333333").ss(1,1,1,3,true).p("AilhCQAAgBABABIABAAQDGAqCEBb");
	this.shape_60.setTransform(-100.4,-145.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#CACACA").ss(1,1,1,3,true).p("ABWsSQgKAVgKAUQgPAhgOAgQhaDYgNDFQgCAagBAaQgBAIgBAIQgoEABICUQANAbAQAWQgBACABACQgCAEAAAEQAAAGgBAGQgUDLAQEuQgBACABAC");
	this.shape_61.setTransform(-197.3,-76.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1,3,true).p("AuekNIAAAAQAMh4A1iDIAAAAIAFhcQBlguBmgkQAagJAagJQDshNDxgbQApgEAogDIAAAAIABAAQD0gSD8AjIBCAJQAQADAQADQAUADAUAEAtzAzQgIgVgHgWQgbhQgEhVQgCgOACgOQgBgMAAgNQAAgEABgFQAAgZADgZQAKAYANARQApA0BPgGQBTgPBYgRQBXgRBWgHQBWgIBJACQA0gCBwgBQBxgDB5AEQB5ADBWgIQADAAAEgBQAbgEAggDQCAgUCMhfQBhhECuiIQAAAGABAJQAAAcgBAeQgBAegDAfQgEAogGApQggC2iBDcQgdAxgiAzQgCABAAACQgLAQgLAQQjEEdgdFuQgogIgngHQgNgCgMgDQgygJgwgHAtzAzQAkBeBDBBQA5A3BOAiQAGACAHACQAKApANAmQAAAEACAFQAFAPAEAQQArCcARDfQgqAMgiARQgFkvhliPQhdiFhGjIgAOdqJQADAjACAkAOUlrQkIGflCDHIhZIaQgLgCgLgBQgGgBgEgBQgFAAgFgBQgzgIgxgGQgEAAgEAAQgFgBgEAAQipgTiNAFQgqAAgnAEQiBAKhkAh");
	this.shape_62.setTransform(-176.2,-73.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#2C2C2C").s().p("AjWJDIgYgEQgzgKgvgHIBYoaQFCjGEHmgQggC2iBDdQgdAxghAzQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAIgXAhQjCEbgeFuIhPgPg");
	this.shape_63.setTransform(-118.4,-50.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#84776B").s().p("AlZMTIgKgBIgKgCIBAoeQDJiWBQhUIgkjqQhXAHhZgfIA7gIQCAgUCLhfQBhhDCuiJQiuCJhhBDQiLBfiAAUIg7AIIgIgDQB/g5A9hbQgsjrBPiSIAEgHIAAgBIAoAIQAAAAAAAAQAAgBABAAQAAABAAAAQAAAAAAAAIABAAQDHAqCEBcQADAkACAjIABAPQAAAcgBAeIgEA+QgEAngGAqQkIGelBDHIhZIbIgWgEg");
	this.shape_64.setTransform(-119.7,-73.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3F3F3F").s().p("AgJg3QhdiGhGjHQAkBeBDBAQA5A3BNAiIANAEQAKApANAnIADAIIAJAfQArCbAQDfQgpAMgjARQgFkuhkiOg");
	this.shape_65.setTransform(-247.3,-29.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AkXIGQgCgfAKgOQAMgRAhgHQAygNA5AEQAkADALAPQAMARgKAmQgFAYgJANQgQAZgYAFQgZAGg/ATQgKADgIAAQguAAgDhagACwIvQgaAAgUgEIgagDQgPgBAAgJQgNg0AJg1QADgQAGgEQAGgFARAAIAmABQAxAAAfAJQAuANAQAiQAJASgCAVQgDAVgOANQgMAKgSAEQgKACgYABIgvAAgAl3EbQgWgFgRgVQgOgSgIgaQgPgwAEgtQAFgyAcgjQAoguBfgTQAtgJAiAAQAhAAATAJQATAJAFBMQAFBNABAxQAAAxh3AcQhtAZgYAAIgFAAgAAUBvQAAiRAjgXQAigXCAAWQB/AXAQCFQARCGizANIgbABQiYAAABiHgAmskUQgJgGgCgQQgCgMADgPIABgDQADgOAJgRIASggQAMgWAMgTQAWghATgTQAagaAngRIAUgJQBrgpBdAQQApAIgBAfQgBAKgKAaIg8CXQgIANgLAGQgPAHgTgCIgJgBQgxgDhCAMQgiAGhWAVQgPAFgLAAQgLAAgGgFgAA3llQgFgCgDgDQgDgEABgPQADg9AYg+QAKgZAQgWQAggnCIgNQCIgOAdAiQAYA6gJBGQgDAegLAUQgLAXgUAMQgWANgnAAIkKADQgMAAgHgDg");
	this.shape_66.setTransform(-200.3,-84.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C6B3A1").s().p("AEeMZIgIgBIBTn6QjQgZi9ALQjAAKivAuQgJA7ACA6IgJgfIgDgIQgMgngLgpIgMgEQhPgig4g2QBIAsBBAGQC0hFDUgQQANAbAQAWIAAACIAAACQgBADAAAEIAAABIgBAMIABgMIAAgBQAAgEABgDIAAgCIAAgCQgQgWgNgbQDTgPD0AnQBihqBchuQgqgogKiMQlbgnkWAIQknAIjbA+Qg8ABgvhHIgBgCIABABQgNgRgJgXIAAgBQALh4A1iCIABAAIAFhdQBlgtBlgkIA1gSQDrhODxgaIgUApIgeBCIAehCIAUgpIBQgHIABAAIAAAAQD2gSD7AjIBCAJIAgAFIAAABIgEAHQhQCSAsDrQg8BbiAA5IAIADQBZAfBYgHIAkDqQhQBUjJCWIhAIeIhlgNgApjidIAMgBIADAAIAAAAIABAAICqggQBYgRBWgIIAGAAIABAAIAAAAIADAAIAHgBIADAAQA8gFA1AAIABAAIAAAAIANAAIAFAAIAHAAIgDARIADgRQA0gCBugBIAEAAIBUgBIABAAIAAAAQA+AABCACIASABIAFAAIA2ABIAAAAIAAAAQBUAAA/gGIABAAIAHgBIgHABIgBAAQg/AGhUAAIAAAAIAAAAIg2gBIgFAAIgSgBQhCgCg+AAIAAAAIgBAAIhUABIgEAAQhuABg0ACIACg0QDogLEFAcQBcgoAvhHQg4iiBKipIhzgcIguABQgcAEgbADQg+AFg+gDQg9AMg8AIQgrAGgrAFQhjAKhhgBQhLAXhFgCQgxAUg6gBIh5EqIiMBlQAmAzAdgBQD3hJEjgNIgCA0IgHAAIgFAAIgNAAIAAAAIgBAAQg1AAg8AFIgDAAIgHABIgDAAIAAAAIgBAAIgGAAQhWAIhYARIiqAgIgBAAIAAAAIgDAAIgMABIAAAAIAAAAQhEgBglgvQAlAvBEABIAAAAIAAAAgAg/DHIAAAAgAhcjdIAAAAgAhakRIAAAAgACQsfgACQsfIgBgBIABABg");
	this.shape_67.setTransform(-195,-75.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F1F1F1").s().p("AlJGxQgCg6AJg6QCuguC/gLQgLBwAACOQAAB0AICIQgIiIAAh0QAAiOALhwQC/gKDQAYIhTH6IgJgBQiqgSiMAFQgpAAgnADQiCAKhjAiQgRjggricgAjGFeQghAGgMARQgKAPACAeQADBrBAgTQA/gTAYgGQAZgFAQgZQAJgOAFgXQAKgmgMgSQgLgOgkgDIgagBQgrAAgmAKgAB6E+QgGAEgDAPQgJA2ANA0QAAAJAPABIAaADQAUADAaABIAvAAQAYgCAKgCQASgDAMgKQAOgNADgWQACgUgJgSQgQgigugOQgfgIgxgBIgmgBQgRABgGAFgAn/DeQhEhBgjheQgJgVgHgWQgbhQgDhWQgCgNABgOQgBgMABgNIAAgJQAAgZAEgZQAJAXANARIgBgBIAAACQAvBHA9gBQDbg9EngJQgOBbAABOQAACLAtBfQgthfAAiLQAAhOAOhbQEWgIFbAnQAKCMAqApQhcBthiBqQj0gmjUAOQjTAQi0BGQhBgHhIgsgAitiKQghAAgtAJQhfATgoAvQgcAjgFAxQgEAtAPAvQAIAbAOARQARAWAWAEQASADB3gcQB4gcAAgwQgBgygFhLQgFhNgTgJQgTgJghAAIgBAAgABTicQgjAXgBCRQAACSCzgMQCzgNgRiFQgQiHiAgWQg+gLgoAAQgqAAgRAMgAArEEIAAAAgApmj5ICMhkIB5krQA6ABAxgUQBFACBLgXQBhABBjgKQhbDYgMDEQAMjEBbjYQAqgEArgGQA8gJA+gMQA9ADA+gFQAcgDAcgEIAtgBIB0AdQhLCoA5CiQgvBHhcAoQkFgcjoALQkjANj3BJIgBAAQgcABgmgzgAjlp7IgUAJQgnARgaAaQgTASgWAiQgMASgMAWIgSAhQgJARgDANIgBADQgDAQACAMQACAQAJAGQAMAJAfgJQBWgVAigGQBCgMAxADIAJABQATACAPgIQALgFAIgOIA8iXQAJgZABgLQABgegogJQgagEgbAAQhGAAhNAegAEmq/QiIANggAnQgQAXgKAYQgYA/gDA8QgBAPADAEQADAEAEACQAIADAMAAIEKgDQAnAAAWgNQAUgMALgXQAKgVAEgdQAJhGgYg6QgVgYhLAAQgfAAgmADgAgOjYIAAAAgABeq5IAAAAgADgsrIAAgBIAAABg");
	this.shape_68.setTransform(-203.1,-74.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).wait(1));

	// Layer_7
	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,255,255,0.698)").s().p("Aj6BjQAsiLB3iJQB3iKEBhqQniE+hdINQgIi2AsiNg");
	this.shape_69.setTransform(-219.9,-220.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#707F84").ss(1,1,1,3,true).p("AMeAnQggFej/CnQjBB9j0AoQhKAMhQAFQjvAMiohuQhGgsg5hDQjHjlANkoQAMkvD0jZQD4jeFOAAQAcAAAbACQDEAJCfBYQBTAtBJBCQDkDQgiFng");
	this.shape_70.setTransform(-170.6,-192.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(177,234,255,0.298)").s().p("AkFJDQjHjmANkoQAMkvD0jZQD3jeFPABQAcAAAbABQAYG5jbGnQiYEnjpDaQhGgtg5hCg");
	this.shape_71.setTransform(-205.9,-197.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(108,143,156,0.298)").s().p("AAcBoQBwlBhKk3QgWhYgihAQBTAtBJBDQDkDPgiFpQggFdj/CmQjAB9j0AoQEtk5BakHg");
	this.shape_72.setTransform(-126.8,-188.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(127,168,183,0.298)").s().p("An+J/QDqjZCZknQDamngYm5QDEAJCfBYQAiBAAWBYQBKE2hwFBQhbEHkuE6QhKAMhPAFIgvABQjSAAiXhjg");
	this.shape_73.setTransform(-168.3,-192.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]}).wait(1));

	// tapir head
	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AC6DjQACgtAzg2QgcA4ALA9QALA9AiAtQhShQABgsgAkKgiQAdjBCKh7QiHDYAHCEg");
	this.shape_74.setTransform(-287.6,2.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1,3,true).p("AGMBqQgCg9gigYQghgXiPAIIiQjbQgWhGhdiPQgbAAgZAEQgZAEgXAIQgGACgFACQgtARgoAfQgbAVgZAbQhqBzgGCjQBBA3A8AfQAaANAaAJQAEABAFABID8CTQAwBnA9AzQAfAaAiAMQAGADAGABQABABABAAQADABAEABQBKAQAghXQAigKARgXQAMgSACgaQABgNgCgOQAQgBALgFQAVgIALgUQAHgNACgTQAEgqgsgjg");
	this.shape_75.setTransform(-271.6,2.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#7E2326").s().p("ABEGoIgHgCIgCgBQCdiPANipQhRgphugfIirjIQhbjAhRg3QAXgIAZgEQAZgEAbAAQBeCPAWBGICPDbQCPgIAhAXQAiAYACA9QAsAjgEAqQgCATgHANQgLAUgVAIQgLAFgQABQACAOgBANQgCAagMASQgRAXgiAKQgbBKg5AAQgLAAgLgDg");
	this.shape_76.setTransform(-258.6,2.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#DC3D42").s().p("ACwFeQg9gzgvhnIj9iTIgJgCQgZgJgagNQg8gehBg4QAGijBqhzQAYgbAbgVQBAAgBHBfQBIBfAcAeQAxApA3A7IBQBUICfBMQgdCShlB1QgigMgfgag");
	this.shape_77.setTransform(-278.1,5.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A92F33").s().p("ACFGcQBlh1AdiSIifhMIhQhVQg2g6gygpQgcgehIhfQhHhfhAggQAogfAtgRIAMgEQBQA2BbDBICsDIQBtAfBSApQgNCpieCPIgMgEg");
	this.shape_78.setTransform(-267.2,3.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1,3,true).p("AHmilIAio2QjAAsjXCoQhOA8hDA6QgYAUgWATQgoAjgjAiQgBABgBAAQgtAsgmApQiJCRhFBnQhFBpgGBZQAOAxAwBJQAxBIB4B2QB3B2CABDIC/iYIApghIA+gxQg7hdhBhVQhKhhhShXQC6iMFHihg");
	this.shape_79.setTransform(-292.9,-66.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#424242").s().p("AAHDvQhXhbiJh/QBTigCKiCQg5hYhHhNQBPAiBtBXIBSgXIAfgKIAABqQiHA4iVCwQAFAJBEBDQBEBCBJBjQBJBjAmBHIgpAgQhThohXhcg");
	this.shape_80.setTransform(-295.7,-51.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AhlHWQhJhjhFhCQhFhDgFgKQCWiwCIg3IAAhqIgfAKIhSAXQhuhWhPgjIgEgCIABgBQAkgiAogjIAugoQBDg5BPg9QDWinDAgtIgiI3QlGCgi7CNQBTBWBKBhQBABVA6BeIg9AxQglhHhJhjg");
	this.shape_81.setTransform(-274.7,-75.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#585858").s().p("AhnFHQh4h2gwhIQgwhJgPgxQAGhYBFhpQBFhoCJiRQAmgpAsgrIAEABQBHBOA6BYQiLCChSChQCIB9BYBcQBXBbBTBpIi/CYQiBhDh2h2g");
	this.shape_82.setTransform(-311.5,-44.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).wait(1));

	// Layer_9
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1,3,true).p("AhZALQBYgwBbAy");
	this.shape_83.setTransform(-166.8,-197.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#545E73").s().p("AAQANQgtgHgSgGQBEgZAVAWQAPARgbAAIgOgBg");
	this.shape_84.setTransform(-166.2,-191.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1,3,true).p("ABaABQg5hqhMA2AASA6QgcgFgeAAAASA6QACgogWgDQgYgDgOApQgYgCgZADQBmh/BACPQgdgIgegEg");
	this.shape_85.setTransform(-153.7,-228.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgdARQAOgoAXADQAXACgCAnQgdgEgdAAg");
	this.shape_86.setTransform(-154.8,-225);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AAZAaQABgngXgDQgWgDgOAoQgYgCgZADQBlh/BACPQgdgIgdgEg");
	this.shape_87.setTransform(-154.4,-225.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(1,1,1,3,true).p("AmgACQhlFmifCYIGFAIIPEgVQi0iXghk6Qgik5guhGQgthFgZgYQg6g2hWgNQhFgKhHAAQgEAAgFAAQgGAAgGAAQgXAAgYADQgXAAgXADQhaAJhRBSQgUAMgUAOQgSAMgSAPQgpAfgnArQgPAPgOARQg0A6gzBNQAEALAFAJQADAEACAGQAfA1A7AjQAKAGANAGgAj6ALQg/hahngjQgpgPgvgFAiKnUQg8ANg5AhAgnjfQiKBRgvC+QhAgFgzgNQgqgMgjgQ");
	this.shape_88.setTransform(-169.4,-189.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#353B48").s().p("AgNA7Qg5gWg6ALQAOgRAOgPQA7gGApAeQAWARARAcQgbgRgZgJgABLgtQgpgNg2ABQASgOASgNQAnAEAhAXQAVAOAUAYQgXgRgfgJg");
	this.shape_89.setTransform(-200.5,-221.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7A89A7").s().p("Ak+H+QCfiXBllmQAjAQApAMIAHAJIAVAdQAcAjBEAtIAEADQADBPAAAbQgCAkgFAgIgHAmQgTBbguBBgAi5iCQAzhMA0g7QA6gLA5AWQgxBBgqBKQgpgPgvgGQAvAGApAPQh7gUAFAaIgJgVgAg1koQAngrAoggQA2AAAqANQgmAlgmAwQgpgeg6AHgAA+mOQAUgOAUgLQBRhSBagKQAXgDAXAAQgNAQgKAXQhUAjhNBJQghgXgogEgABmmnQA5ghA8gNQg8ANg5Ahg");
	this.shape_90.setTransform(-205.2,-189.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#545E73").s().p("AklFrIAHgmQAFgfACgkQAAgbgDhPIgEgDQhEgtgcgjIgVgeIgHgJQAzANBAAFQAvi9CKhSQiKBSgvC9QhAgFgzgNQgqgMgjgQIgXgLQg7gkgfg1IgFgJQgFgaB7ATQAqhJAyhBQAaAIAbASQgSgdgWgQQAmgwAmgmQAeAIAYARQgUgYgVgNQBNhKBUgiQAKgYANgPQAYgDAYAAIAMAAIAJAAQBGAABFAKQBWANA6A3QAZAXAtBFQAuBGAiE6QAhE5C0CXIvEAVQAuhCAThbgAlBALQg/hahngjQBnAjA/Bag");
	this.shape_91.setTransform(-162.3,-189.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(1,1,1,3,true).p("ADtBJIgbhBQBlgMA5gjQA5gjgPBnQgOBoiEgBgAFwgCQg0A2hPAVAluAhIB1heQhFgOgpgpQgogpgLBGQgKA9AjA3");
	this.shape_92.setTransform(-159.9,-230.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#545E73").s().p("AEICEIgbg7QBPgVA0g2Qg0A2hPAVIgbhBQBlgMA5gjQA5gjgPBnQgOBniDAAIgBAAgAmBAdQgjg3AKg9QALhGAoApQApApBFAOIh1Beg");
	this.shape_93.setTransform(-159.9,-230.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]}).wait(1));

	// Layer 2
	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#FFFFFF").ss(5,2,0,3).p("AEa/9QhUgKj7CiQj7CiiZC4QAsAPgMA0Qi+DDhHBnQhGBoAEBBQAFBLA6ANEALpgxNQifA9g7AlQitBthbCuQhaCvgHC3QgGC3B6C2QAVgFARAZADphOQnnbeCJCgQhHB0huSv");
	this.shape_94.setTransform(-268.6,53.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-348.3,-267.2,338.4,682.1);


(lib.gs_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.galaxy_star("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.2,-0.2,0.5,0.5,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-0.3,scaleX:0.38,scaleY:0.38},0).wait(1).to({regY:-0.1,scaleX:0.5,scaleY:0.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.4,regY:-0.3,scaleX:0.26,scaleY:0.26,rotation:22,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,rotation:0,x:-0.2,y:-0.2},0).wait(1).to({regX:-0.3,regY:-0.3,scaleX:0.43,scaleY:0.43,x:-0.3,y:-0.3},0).wait(1).to({regX:-0.1,regY:-0.1,scaleX:0.5,scaleY:0.5,x:-0.2,y:-0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-33.1,66,69);


(lib.DigiBot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.asdasfg("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-23.5,0.7,1,1,0,0,0,-0.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,2,0,3).p("AGMvJQjqDhgCCJQhmBIgbCfQgbCfBuClAgUGUQgEAcAAAeABKFTQgyAfgsAiAFBBRQk1BJggD6QlGDzg1FI");
	this.shape.setTransform(-84,-59.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-162.9,228.7,308.4);


(lib.wobbleTitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.titleHero();
	this.instance.parent = this;
	this.instance.setTransform(0.1,25.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:29},50).to({y:25.8},51).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-247.6,-101.9,495.3,203.8);


(lib.starzRandom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//randomise position 
		this.x = Math.random()*800;
		this.y = Math.random()*600;
		this.rotation = Math.random()*350;
		this.scale = 1 - Math.random()*.4;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(53));

	// Layer_1
	this.instance = new lib.gs_motion();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,0.5,0.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},25).wait(1).to({alpha:0},26).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-26,54,56);


(lib.hero_motion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Bitmap5();
	this.instance.parent = this;
	this.instance.setTransform(-222,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Digi-Bot
	this.instance_1 = new lib.DigiBot("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(48.5,28.8,0.4,0.4,-5.7,0,0,0.3,0.1);
	this.instance_1.filters = [new cjs.ColorFilter(0.82, 0.82, 0.82, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-139,-165,233,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// TAPIR_HERO
	this.instance_2 = new lib.TAPIR_HERO("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-74.6,-61.6,0.4,0.4,0,0,0,-272.3,5);
	this.instance_2.filters = [new cjs.ColorFilter(0.82, 0.82, 0.82, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-350,-269,342,686);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-171,442,342.1);


(lib.tapir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hero_motion();
	this.instance.parent = this;
	this.instance.setTransform(-0.9,1,1,1,0,0,0,-0.9,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1.5,y:-3.8},44).to({x:-2.5,y:1},48).to({x:2.4,y:-0.6},51).to({x:-0.9,y:1},55).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-222,-170,442,341.1);


// stage content:
(lib.splash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
		function doPlay (e){
			nextScreen();
		}
		this.btnPlay.addEventListener("click", doPlay);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// play
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.parent = this;
	this.btnPlay.setTransform(400.1,377.7,0.099,0.099,0,0,0,0.5,0);
	this.btnPlay._off = true;
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 2, false, new lib.btnPlay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(43).to({_off:false},0).to({regX:0,scaleX:1,scaleY:1},15,cjs.Ease.elasticOut).wait(2));

	// title
	this.instance = new lib.wobbleTitle();
	this.instance.parent = this;
	this.instance.setTransform(278.1,798.2,2.287,2.287,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,scaleX:0.8,scaleY:0.8,guide:{path:[278.1,798.2,32.6,-110.3,402.1,232.2]}},14,cjs.Ease.quadIn).to({_off:true},1).wait(45));

	// tapir
	this.instance_1 = new lib.tapir("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(674.2,774.1,1,1,0,0,0,-0.9,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({regX:-0.8,scaleX:1.05,scaleY:1.05,x:659.8,y:470.9,mode:"independent"},16,cjs.Ease.quartOut).wait(31));

	// title
	this.instance_2 = new lib.wobbleTitle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(400,257.4,0.808,0.808,0,0,0,0.1,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({_off:false},0).wait(1).to({regX:0,regY:-0.2,scaleX:0.84,scaleY:0.84,x:399.9,y:258.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,y:259},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:259.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:260.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:399.8,y:260.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:261},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:261.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,y:261.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:261.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:262},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:262.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:262.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:262.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:262.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:262.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:262.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:262.9},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1,y:263},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({y:263.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({scaleX:1,scaleY:1},0).wait(2).to({regY:0,x:399.9,y:263.3},0).wait(18));

	// fore
	this.instance_3 = new lib.planet17();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-62.2,605.3,8.416,8.416,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

	// asteroid
	this.instance_4 = new lib.asteroidWobble3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(48.1,174.5);

	this.instance_5 = new lib.asteroidWobble2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(213.6,165.3);

	this.instance_6 = new lib.asteroidWobble();
	this.instance_6.parent = this;
	this.instance_6.setTransform(441.4,82.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]}).wait(60));

	// forePurple
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(255,0,0,0)"],[0,1],-0.4,-0.4,0,-0.4,-0.4,426.8).s().p("Eg1YA1ZQ2L2GAA/PQAA/XWL2FQWF2LfTAAQfTAAWLWLQWGWFAAfXQAAfP2GWGQ2LWL/TAAQ/TAA2F2Lg");
	this.shape.setTransform(813.5,473.5,1,1,0,0,0,-3.3,-1.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	// planet
	this.instance_7 = new lib.planetPurple();
	this.instance_7.parent = this;
	this.instance_7.setTransform(681.5,47.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(60));

	// stars3
	this.instance_8 = new lib.starzRandom();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(43).to({_off:false},0).wait(17));

	// stars1
	this.instance_9 = new lib.starzRandom();
	this.instance_9.parent = this;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(58).to({_off:false},0).wait(2));

	// stars1
	this.instance_10 = new lib.starzRandom();
	this.instance_10.parent = this;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(36).to({_off:false},0).wait(24));

	// stars2
	this.instance_11 = new lib.starzRandom();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(9).to({_off:false},0).wait(51));

	// stars1
	this.instance_12 = new lib.starzRandom();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).wait(40));

	// stars1
	this.instance_13 = new lib.starzRandom();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(60));

	// bg
	this.instance_14 = new lib.starfieldbg();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.4,33.8,1754.8,1297.3);
// library properties:
lib.properties = {
	id: 'B80CE73EAFE3CF40BDB98EF8906FA491',
	width: 800,
	height: 600,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/splash/Bitmap1.png?1524629566012", id:"Bitmap1"},
		{src:"images/splash/Bitmap2.png?1524629566012", id:"Bitmap2"},
		{src:"images/splash/Bitmap3.png?1524629566012", id:"Bitmap3"},
		{src:"images/splash/Bitmap4.png?1524629566012", id:"Bitmap4"},
		{src:"images/splash/Bitmap5.png?1524629566012", id:"Bitmap5"},
		{src:"images/splash/Bitmap6.png?1524629566012", id:"Bitmap6"},
		{src:"images/splash/redplanet.png?1524629566012", id:"redplanet"},
		{src:"images/splash/starfieldbg.jpg?1524629566012", id:"starfieldbg"},
		{src:"sounds/stdClick.mp3?1524629566012", id:"stdClick"}
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
an.compositions['B80CE73EAFE3CF40BDB98EF8906FA491'] = {
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