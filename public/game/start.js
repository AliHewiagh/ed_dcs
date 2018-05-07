(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.beamExhaust = function() {
	this.initialize(img.beamExhaust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1909,487);


(lib.bgGradient = function() {
	this.initialize(img.bgGradient);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,814,611);


(lib.speedlines1 = function() {
	this.initialize(img.speedlines1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,610);


(lib.speedlines2 = function() {
	this.initialize(img.speedlines2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,610);


(lib.speedlines3 = function() {
	this.initialize(img.speedlines3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,810,610);// helper functions:

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


(lib.speedlinsMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.speedlines1();
	this.instance.parent = this;
	this.instance.setTransform(-405,-305);

	this.instance_1 = new lib.speedlines2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-405,-305);

	this.instance_2 = new lib.speedlines3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-405,-305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-405,-305,810,610);


(lib.mcLevel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AgVAuIgOgIIAIhKIAQgJIAhAAIANAJIgIBKIgPAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape.setTransform(-14.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0EE0E0").s().p("AghAuIAFgqIAQgHIAdAAIADgeIgfAAIgCAMIgNAAIACgPIAQgIIAbAAIAPAIIgEAkIgQAIIgeAAIgCAaIAsAAIgBAMg");
	this.shape_1.setTransform(-23.4,-0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0EE0E0").s().p("AgZAwIAohfIALAAIgoBfg");
	this.shape_2.setTransform(-30,-0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0EE0E0").s().p("AgVAuIgNgIIAIhKIAPgJIAgAAIAPAJIgIBKIgQAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_3.setTransform(-36.8,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0EE0E0").s().p("AgUAuIgPgIIAIhKIARgJIAgAAIANAJIgIBKIgQAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_4.setTransform(-15.6,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0EE0E0").s().p("AgcAuIABgMIAWAAIAGhAIgWANIABgOIAZgNIALAAIgJBOIAWAAIgBAMg");
	this.shape_5.setTransform(-36.9,-0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0EE0E0").s().p("AghAuIAFgqIAQgHIAdAAIADgeIgfAAIgCAMIgNAAIACgPIAQgIIAbAAIAPAIIgEAkIgQAIIgeAAIgCAaIAsAAIgBAMg");
	this.shape_6.setTransform(-36.9,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0EE0E0").s().p("AgUAuIgPgIIAIhKIAQgJIAhAAIANAJIgIBKIgPAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_7.setTransform(-15,-0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0EE0E0").s().p("AgUAuIgNgIIABgPIANAAIgBAMIAiAAIADgfIgZAAIABgKIAaAAIACgbIgiAAIgBALIgNAAIACgOIAPgJIAfAAIANAJIgDAdIgLAHIAKAFIgDAhIgQAIg");
	this.shape_8.setTransform(-36.8,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0EE0E0").s().p("AgUAuIgPgIIAIhKIARgJIAfAAIAOAJIgIBKIgQAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_9.setTransform(-15.2,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0EE0E0").s().p("AAHAuIADgWIgsAAIABgLIAzg5IAMAAIgGA5IALAAIgBALIgMAAIgCAWgAgUANIAfAAIAEgng");
	this.shape_10.setTransform(-37.1,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0EE0E0").s().p("AgVAuIgNgIIAIhKIAPgJIAgAAIAPAJIgIBKIgRAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_11.setTransform(-15.1,-0.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0EE0E0").s().p("AgTAuIgOgJIABgOIAOAAIgBALIAhAAIADghIgsAAIAGguIA3AAIgBAMIgrAAIgCAXIAdAAIANAJIgEAmIgQAJg");
	this.shape_12.setTransform(-36.8,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0EE0E0").s().p("AgTAuIgNgIIAIhKIAQgJIAcAAIANAJIgBAOIgNAAIABgLIggAAIgDAfIAKgFIAUAAIAPAIIgFAlIgPAIgAgTAjIAgAAIADgfIggAAg");
	this.shape_13.setTransform(-36.8,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0EE0E0").s().p("AgVAuIgNgIIAHhKIAQgJIAhAAIANAJIgHBKIgQAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_14.setTransform(-15.3,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0EE0E0").s().p("AgbAuIAshPIAAAAIgkAAIgBAMIgNAAIADgXIBAAAIgBAIIgtBSg");
	this.shape_15.setTransform(-36.4,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0EE0E0").s().p("AgVAuIgMgIIADghIAMgFIgKgHIADgdIAQgJIAdAAIAOAJIgDAdIgMAHIAAAAIALAFIgEAhIgQAIgAgUAjIAhAAIAEgfIgiAAgAgQgGIAiAAIADgbIgiAAg");
	this.shape_16.setTransform(-36.8,-0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0EE0E0").s().p("AgTAuIgNgIIABgPIANAAIgBAMIAgAAIADggIgKAFIgUAAIgPgIIAFgkIAQgJIAcAAIANAJIgIBKIgPAIgAgPgDIAgAAIADgeIggAAg");
	this.shape_17.setTransform(-36.8,-0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0EE0E0").s().p("AgcAuIABgMIAWAAIAGhAIgWANIABgOIAZgNIALAAIgJBOIAWAAIgBAMg");
	this.shape_18.setTransform(-40.6,-0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0EE0E0").s().p("AgUAuIgNgIIABgPIANAAIgBAMIAiAAIADgfIgZAAIABgKIAaAAIACgbIgiAAIgBALIgNAAIACgOIAQgJIAdAAIAPAJIgEAdIgLAHIAKAFIgDAhIgQAIg");
	this.shape_19.setTransform(-33.1,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0EE0E0").s().p("AgVAuIgNgIIAIhKIAQgJIAfAAIAPAJIgIBKIgRAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_20.setTransform(-11.4,-0.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0EE0E0").s().p("AgTAuIgOgJIACgOIAMAAIAAALIAhAAIADghIgsAAIAGguIA3AAIgBAMIgrAAIgCAXIAcAAIAPAJIgFAmIgQAJg");
	this.shape_21.setTransform(-33.1,-0.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0EE0E0").s().p("AgSAuIgPgIIAJhKIAQgJIAcAAIANAJIgBAOIgNAAIABgLIggAAIgDAfIAJgFIAVAAIAOAIIgDAlIgQAIgAgTAjIAgAAIADgfIggAAg");
	this.shape_22.setTransform(-33.1,-0.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0EE0E0").s().p("AgSAuIgPgIIACgPIANAAIgBAMIAgAAIAEggIgLAFIgVAAIgOgIIAFgkIAQgJIAcAAIANAJIgHBKIgQAIgAgPgDIAgAAIADgeIggAAg");
	this.shape_23.setTransform(-33.1,-0.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0EE0E0").s().p("AgUAuIgPgIIAJhKIAQgJIAfAAIAPAJIgJBKIgQAIgAgVAjIAkAAIAHhEIgkAAg");
	this.shape_24.setTransform(-10.8,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3,p:{x:-36.8}},{t:this.shape_2,p:{x:-30}},{t:this.shape_1,p:{x:-23.4}},{t:this.shape,p:{x:-14.9}}]}).to({state:[{t:this.shape_5,p:{x:-36.9}},{t:this.shape_2,p:{x:-30.6}},{t:this.shape_1,p:{x:-24.1}},{t:this.shape_4,p:{x:-15.6}}]},1).to({state:[{t:this.shape_6,p:{x:-36.9}},{t:this.shape_2,p:{x:-30.2}},{t:this.shape_1,p:{x:-23.7}},{t:this.shape_3,p:{x:-15.2}}]},1).to({state:[{t:this.shape_8},{t:this.shape_2,p:{x:-30.1}},{t:this.shape_1,p:{x:-23.5}},{t:this.shape_7,p:{x:-15}}]},1).to({state:[{t:this.shape_10,p:{x:-37.1}},{t:this.shape_2,p:{x:-30.3}},{t:this.shape_1,p:{x:-23.7}},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_2,p:{x:-30.1}},{t:this.shape_1,p:{x:-23.6}},{t:this.shape_11,p:{x:-15.1}}]},1).to({state:[{t:this.shape_13},{t:this.shape_2,p:{x:-30.2}},{t:this.shape_1,p:{x:-23.6}},{t:this.shape_4,p:{x:-15.1}}]},1).to({state:[{t:this.shape_15,p:{x:-36.4}},{t:this.shape_2,p:{x:-30.3}},{t:this.shape_1,p:{x:-23.8}},{t:this.shape_14,p:{x:-15.3}}]},1).to({state:[{t:this.shape_16,p:{x:-36.8}},{t:this.shape_2,p:{x:-30.1}},{t:this.shape_1,p:{x:-23.6}},{t:this.shape_11,p:{x:-15.1}}]},1).to({state:[{t:this.shape_17},{t:this.shape_2,p:{x:-30.2}},{t:this.shape_1,p:{x:-23.6}},{t:this.shape_4,p:{x:-15.1}}]},1).to({state:[{t:this.shape_5,p:{x:-41.2}},{t:this.shape_11,p:{x:-33.1}},{t:this.shape_2,p:{x:-26.3}},{t:this.shape_1,p:{x:-19.7}},{t:this.shape_14,p:{x:-11.2}}]},1).to({state:[{t:this.shape_18},{t:this.shape_5,p:{x:-33.2}},{t:this.shape_2,p:{x:-26.9}},{t:this.shape_1,p:{x:-20.4}},{t:this.shape_7,p:{x:-11.9}}]},1).to({state:[{t:this.shape_5,p:{x:-41}},{t:this.shape_6,p:{x:-33.2}},{t:this.shape_2,p:{x:-26.5}},{t:this.shape_1,p:{x:-20}},{t:this.shape_11,p:{x:-11.5}}]},1).to({state:[{t:this.shape_5,p:{x:-41.1}},{t:this.shape_19},{t:this.shape_2,p:{x:-26.4}},{t:this.shape_1,p:{x:-19.8}},{t:this.shape,p:{x:-11.3}}]},1).to({state:[{t:this.shape_5,p:{x:-41}},{t:this.shape_10,p:{x:-33.4}},{t:this.shape_2,p:{x:-26.6}},{t:this.shape_1,p:{x:-20}},{t:this.shape_4,p:{x:-11.5}}]},1).to({state:[{t:this.shape_5,p:{x:-41.1}},{t:this.shape_21},{t:this.shape_2,p:{x:-26.4}},{t:this.shape_1,p:{x:-19.9}},{t:this.shape_20}]},1).to({state:[{t:this.shape_5,p:{x:-41}},{t:this.shape_22},{t:this.shape_2,p:{x:-26.5}},{t:this.shape_1,p:{x:-19.9}},{t:this.shape_7,p:{x:-11.4}}]},1).to({state:[{t:this.shape_5,p:{x:-40.9}},{t:this.shape_15,p:{x:-32.7}},{t:this.shape_2,p:{x:-26.6}},{t:this.shape_1,p:{x:-20.1}},{t:this.shape_3,p:{x:-11.6}}]},1).to({state:[{t:this.shape_5,p:{x:-41.1}},{t:this.shape_16,p:{x:-33.1}},{t:this.shape_2,p:{x:-26.4}},{t:this.shape_1,p:{x:-19.9}},{t:this.shape_20}]},1).to({state:[{t:this.shape_5,p:{x:-41}},{t:this.shape_23},{t:this.shape_2,p:{x:-26.5}},{t:this.shape_1,p:{x:-19.9}},{t:this.shape_7,p:{x:-11.4}}]},1).to({state:[{t:this.shape_6,p:{x:-41.2}},{t:this.shape_4,p:{x:-32.7}},{t:this.shape_2,p:{x:-25.9}},{t:this.shape_1,p:{x:-19.3}},{t:this.shape_24}]},1).wait(1));

	// Layer_2
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AgWAAIAtAA");
	this.shape_25.setTransform(-36.6,11.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AgrAAIBXAA");
	this.shape_26.setTransform(-34.5,11.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AhAAAICCAA");
	this.shape_27.setTransform(-32.3,11.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AhWAAICtAA");
	this.shape_28.setTransform(-30.2,11.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AhrAAIDXAA");
	this.shape_29.setTransform(-28.1,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AiAAAIEBAA");
	this.shape_30.setTransform(-26,11.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AiVAAIEsAA");
	this.shape_31.setTransform(-23.8,11.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AirAAIFXAA");
	this.shape_32.setTransform(-21.7,11.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AjAAAIGBAA");
	this.shape_33.setTransform(-19.6,11.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AjVAAIGrAA");
	this.shape_34.setTransform(-17.5,11.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AjqAAIHVAA");
	this.shape_35.setTransform(-15.4,11.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AkAAAIIBAA");
	this.shape_36.setTransform(-13.2,11.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AkVAAIIrAA");
	this.shape_37.setTransform(-11.1,11.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AkqAAIJVAA");
	this.shape_38.setTransform(-9,11.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("Ak/AAIJ/AA");
	this.shape_39.setTransform(-6.9,11.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AlVAAIKrAA");
	this.shape_40.setTransform(-4.7,11.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AlqAAILVAA");
	this.shape_41.setTransform(-2.6,11.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("Al/AAIL/AA");
	this.shape_42.setTransform(-0.5,11.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AmUAAIMpAA");
	this.shape_43.setTransform(1.6,11.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AmqAAINVAA");
	this.shape_44.setTransform(3.8,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.7,-11.5,34.7,22.6);


(lib.m1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.m1, null, null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.596)").s().p("Ak0E1Qh/iBAAi0QAAizB/iBQCBh/CzAAQC0AACBB/QB/CBAACzQAAC0h/CBQiBB/i0AAQizAAiBh/gAjsjsQhjBjAACJQAACLBjBjQBjBhCJABQCLgBBjhhQBhhjABiLQgBiJhhhjQhjhjiLAAQiJAAhjBjg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.396)").s().p("Al7F8QidieAAjeQAAjdCdieQCeidDdAAQDeAACeCdQCdCeAADdQAADeidCeQieCdjeAAQjdAAieidgAk0k0Qh/CBAACzQAAC0B/CBQCBB/CzAAQC0AACBh/QB/iBAAi0QAAizh/iBQiBh/i0AAQizAAiBB/g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.196)").s().p("AnCHDQi6i7AAkIQAAkHC6i7QC7i6EHAAQEIAAC7C6QC6C7AAEHQAAEIi6C7Qi7C6kIAAQkHAAi7i6gAl7l7QidCeAADdQAADeCdCeQCeCdDdAAQDeAACeidQCdieAAjeQAAjdidieQieidjeAAQjdAAieCdg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.796)").s().p("AjsDuQhjhjAAiLQAAiJBjhjQBjhjCJAAQCLAABjBjQBhBjABCJQgBCLhhBjQhjBhiLABQiJgBhjhhgAililQhFBFAABgQAABhBFBFQBFBFBgAAQBhAABFhFQBFhFAAhhQAAhghFhFQhFhFhhAAQhgAAhFBFg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AilCmQhFhFAAhhQAAhgBFhFQBFhFBgAAQBhAABFBFQBFBFAABgQAABhhFBFQhFBFhhAAQhgAAhFhFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(-63.7,-63.7,127.5,127.5), null);


(lib.glow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(23,173,210,0.2)").s().p("AiAB5IABAAQg5gxAKhIQAFhHBEgyIABAAQAzgmBCAAQBEAAArAmIABAAQA5AygLBHQgGBIhEAxIABAAQg1AnhCAAQhEAAgrgngAilAAQgKBDA1AuIABAAQApAlBAAAQA/AAAyglIAAAAQBAgtAFhEQAKhCg2guQgpglhBAAQg/AAgxAlIgBAAQg/AugFBCg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(23,173,210,0.298)").s().p("Ah5BxIgBAAQg1guAKhDQAFhCA/guIABAAQAxglA/AAQBBAAApAlQA2AugKBCQgFBEhAAtIAAAAQgyAlg/AAQhAAAgpglgAhdhoIAAAAQg7ArgEA9QgKA/AyAqQAoAjA9AAQA9AAAvgjIAAAAQA7gqAFg/QAJg9gxgrIgBAAQgngjg+AAQg8AAgwAjg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(23,173,210,0.498)").s().p("AhuBgIAAABQgugoAIg5QAEg4A3goQAtghA6AAQA7AAAlAhIABAAQAtAogHA4QgFA5g3AoIAAgBQgtAig6AAQg7AAglgigAgNB4QA3AAArggQAygjAFg1QAHg0gqgjQgkggg4AAQg3AAgrAgIAAAAQgyAjgEA0QgHA1AqAjIgBAAQAkAgA4AAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(23,173,210,0.4)").s().p("Ah0BpQgygqAKg/QAEg9A7grIAAAAQAwgjA8AAQA+AAAnAjIABAAQAxArgJA9QgFA/g7AqIAAAAQgvAjg9AAQg9AAgogjgAgOCCQA6AAAtgiIAAABQA3goAFg5QAHg4gtgoIgBAAQglghg7AAQg6AAgtAhQg3AogEA4QgIA5AuAoIAAgBQAlAiA7AAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(23,173,210,0.6)").s().p("AhoBYIAAAAQgqgjAHg1QAFg0AxgjIAAAAQArggA3AAQA4AAAkAgQAqAjgHA0QgFA1gxAjQgrAgg4AAQg4AAgjgggAhQhPQguAggEAvQgGAvAmAhQAhAeA1AAQA1AAApgeQAtghAEgvQAGgvglggQgjgeg1AAQg0AAgoAeg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(23,173,210,0.8)").s().p("AhdBIQgigdAFgrQAEgqApgdQAngcAxAAQAyAAAgAcIABAAQAhAdgEAqQgFArgpAdIABAAQgnAcgxAAQgyAAghgcg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(23,173,210,0.698)").s().p("AhiBQQgnghAHgvQAEgvAuggQAogeA0AAQA1AAAiAeQAmAggGAvQgEAvguAhQgpAeg0AAQg1AAghgegAhNhHQgpAdgEAqQgFArAiAdQAhAcAyAAQAxAAAngcIgBAAQApgdAFgrQAEgqghgdIgBAAQgggcgyAAQgxAAgnAcg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(23,173,210,0.098)").s().p("AiECCIgBAAQg9g1ALhNQAGhMBJg1IAAAAQA1goBGAAQBGAAAsAoIABAAQA9A1gLBMQgGBOhJA0IAAAAQg2AohFAAQhFAAgtgogAgRCgQBCAAA1gnIAAAAQBEgxAFhIQALhHg5gyIAAAAQgsgmhEAAQhCAAgzAmIgBAAQhEAygFBHQgKBIA5AxIgBAAQArAnBEAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.5,-17,37.1,34);


(lib.Boost = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.beamExhaust();
	this.instance.parent = this;
	this.instance.setTransform(-1377,-225);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1377,-225,1909,487);


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


(lib.badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-485.8,-354.4,847.9,709);


(lib.Symbol1_badge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.badge("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1.3,15.7,0.421,0.421,0,0,0,-0.8,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-170.4,-143.4,343.9,305.2);


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


(lib.spaceshipside = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.light();
	this.instance.parent = this;
	this.instance.setTransform(-203.7,-148.6,0.246,0.246);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFNABIzAhDITGg0QE4AZDpDUQkUhMkTgqg");
	this.shape.setTransform(83.3,-171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AeIBdIiVAFIi3AHMg2UAB9QgagNgMgbQgGgNgDgQQAvg8BCgxQA5gqBHggMAu+gDPQFyA8DuEGg");
	this.shape_1.setTransform(-13.8,-166.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC3D42").s().p("ARYhoMgsVAC3QhKAGhIAhQA6gqBHghMAu+gDOQFyA8DtEFIiUAGQkVjXlOg1g");
	this.shape_2.setTransform(-8.2,-172.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A92F33").s().p("A88CXQAvg8BBgxQBIghBKgGMAsVgC2QFOA1EUDWIi2AHQi/ibkOgrMgsWAC2Qh8ALhcBaQgFgNgDgQg");
	this.shape_3.setTransform(-21.3,-165.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7E2326").s().p("A7dB6QBchaB8gLMAsWgC2QEOArC/CbMg2VAB9QgZgMgNgcg");
	this.shape_4.setTransform(-30,-159.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.498)").s().p("A9PudIEygYQZnLlY2OqQCCA/BOCcg");
	this.shape_5.setTransform(318.4,-52.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1,3,true).p("Eg2XgQCIMePUIPrTSMBFjgANIHWgBICuAAIA/gBQgXkckXiyQ5GvN5qq+QgDgBgCgBQkLhykMhrIhwAGg");
	this.shape_6.setTransform(166.7,-55.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A3A40").s().p("EgqngIjMAiFgCKMAzKAVOMhFjAANg");
	this.shape_7.setTransform(171.2,-5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#52525A").s().p("Al+i0MgiFACKIsdvVMArFgCaQEJBsEHBxIAEACItTAuMBC7AglInWABg");
	this.shape_8.setTransform(154.9,-55.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#AAACB9").s().p("AXCKAQ4tu+6/roIB3gGQZrK+ZFPNQEYCyAWEcIg/AAQgkkFkGiog");
	this.shape_9.setTransform(331.2,-45.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#767884").s().p("Egi0gOIINTgvQa+LoYuO/QEGCnAkEFIiuABgA1lu4QkHhxkJhtIBvgGQEMBrELByIAFACIh3AGIgEgBg");
	this.shape_10.setTransform(285.5,-56.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol1_badge("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(560.1,131.4,0.22,0.22,0,0,0,1.8,-0.3);
	this.instance_1.filters = [new cjs.ColorFilter(0.82, 0.82, 0.82, 1, 0, 0, 0, 0)];
	this.instance_1.cache(-172,-145,348,309);

	this.instance_2 = new lib.light();
	this.instance_2.parent = this;
	this.instance_2.setTransform(834,177.5,0.246,0.246);
	this.instance_2.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.498)").s().p("ACtDuQBEADA6gSICDDOQiEhZh9hmgACTDaQiVh8iLiLQCFgJBngsIC+EsQg7AQhHAAIgIAAgAmtlsQCygJCNg3IC0EjQhmA3iQACQiDiHh6iVg");
	this.shape_11.setTransform(787.2,131.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ax6qhQLHBNJxFYQJyFWFMJIQu7u707mIg");
	this.shape_12.setTransform(633.4,-4.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.498)").s().p("ArHraQEdBHAXAvQgfJ5R6LGQzCo+jNt3g");
	this.shape_13.setTransform(473.6,-27);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1,3,true).p("AQO0VQAKgmmahoQmahn3Lh5QhQgGhSgFQjRgNjagDQkUgDkiAMQvEAoxgDYQhfAShhAUQg9AMg8ANQhKAQhKARQiiAxCiDkIQUW6IDiAsIDXAqEAhoAAtQhyhJhghFQh3hUhmhRQk0jyiijSQhviRg1iQQg4iWAHiUAQf0TQgJgBgIgBEBFiAG/QlPohnbl/QnbmAqOitQoQiLp6hWQiQgTiVgREBFiAG/Qg+AhhTASQnqBqy6mQQjXhHjuhYEAy6ALEQhYgxhHgoQo5lFl6j5EBJlAXhQj1BGl3AsQm9A1p3AQQmAAKnGgEIh+h9I4DkrMg+MgMGEBJlAXhQBmgdBPgiQAvgUAogWQAhgSAbgUQhNh+hKh3QgnAMguAHQj0AlmZhiQjig3kThfQjgh8ilhdEBJEAMTQgqATgxAOQlLBfqQiCQigggi0gtEBJlAXhQp8lZmqjrEBJEAMTQh0i0huigEBMWARdQhrishnieEhJOgVvITAdf");
	this.shape_14.setTransform(331.6,40.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7E2326").s().p("AIJOGIi/hmIvy2rQiMi7DchQIB5gZIS/dfg");
	this.shape_15.setTransform(-89.1,-4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2BE4FF").s().p("AHBNiIwT26QiijjCigyICVggQjdBQCNC6IPxWsIC/Blg");
	this.shape_16.setTransform(-104.6,-5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#262626").s().p("AFlD8IAdAHIADAAIAAABQEUBADHAAIAAAAIAAAAQBPAABDgLQhDALhPAAIAAAAIAAAAQjHAAkUhAIAAgBIgDAAIgdgHQkhiTkEiOIAZAFIACABIAFABIAAAAQFmBDECAAIABAAIAAAAQDDAACKgmIAEgBIgEABQiKAmjDAAIAAAAIgBAAQkCAAlmhDIAAAAIgFgBIgCgBIgZgFQoskum1kXQS6GQHphqIArARQA6A0CzD9QBcCCB8C5ICwEIQgoAWgvAUQmHi7lfi0gAjAglIAAAAg");
	this.shape_17.setTransform(710.7,122.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#343434").s().p("ACCDVQAtgIAogLICXD0QgbAUgiASIivkHgAhWhmQAygPApgTQBnCeBrCsQgoALgtAIQh8i5hciCgAhWhmQiyj+g6g0IgrgRQBTgSA+ggQBuCgBzCzQgpATgyAPIAAAAg");
	this.shape_18.setTransform(798.7,133);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A3A40").s().p("A/NJAIzA9fIDBgmITeY2MBN7AARIzNREg");
	this.shape_19.setTransform(184.2,32.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1B1B1B").s().p("AB+CWQETBfDhA2QFgC0GHC8QhPAhhmAeQp8lZmqjrgAB+CWQjfh8ilhcQCzAtCgAfQiggfizgtIifhZQo5lFl6j5QDuBXDXBIQG0EXIsEtQEFCOEgCTQjhg2kThfgAkGhCIAAAAg");
	this.shape_20.setTransform(683.7,118.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#172C4E").s().p("A4OtwQJ6BVIQCMQKNCtHbGAQHcF+FPIiQg/AhhTASQ9lr0wmvtg");
	this.shape_21.setTransform(621.6,2.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#101F37").s().p("AhKJRQ1GtejIqAQCWARCQATQQlPsdmL1QhnAWiGAAQn6AAu8k9g");
	this.shape_22.setTransform(599.6,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#060C15").s().p("AFLJSQhyhKhhhFQh2hUhmhRQkzjyiijRQhwiRg1iQQg4iWAIiUIAQACIABAAQDIKAVFNfQjXhHjuhYg");
	this.shape_23.setTransform(513.7,-14.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#767884").s().p("AA0PcIJ7tEIAPBDIjIGKQRmJLU7GmQm+A1p2AQQvSkrtdmUgAuQCKQ0Lrtr7w3QDaACDRANQMjNmQEK5IVzEEg");
	this.shape_24.setTransform(443.8,40.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AAACB9").s().p("AgUKAIDHmLIgPhCI10kEQwDq5sjtmQBRAFBQAGQXNB5GaBnQGZBogJAmQgICUA4CWQA1CQBwCRQCiDSEyDyQBnBRB2BUQBhBEByBKQF6D5I5FFICeBZQCmBdDfB8QGqDrJ8FZQj0BGl3AsQ08mmxkpLg");
	this.shape_25.setTransform(496.1,37.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#52525A").s().p("EAtjAaeIh+h9I4DkrITOxFMhN7gARIze41QRgjYPDgoQEjgMEUADQL7Q4UKLtIZAAOIp7NEQNdGUPSErQkaAHk+AAIjvgBg");
	this.shape_26.setTransform(257.5,40.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer_5
	this.instance_3 = new lib.light();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-101.4,197.9,0.246,0.246);
	this.instance_3.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(1,1,1,3,true).p("Egh3AFeQjHCyCkB4MAsGAAAICUhEIKqk3IM7l5Mgz+gIbIksEMIocHhg");
	this.shape_27.setTransform(128,142.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3A3A40").s().p("A8Vi9IEtkMMAz+AIaIs7F6g");
	this.shape_28.setTransform(174.3,124);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#52525A").s().p("A6FABIIbngMArwAKIIqqE3g");
	this.shape_29.setTransform(106,153);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#767884").s().p("A2oERQikh4DIixIEWj4MAphAHeIiVBDg");
	this.shape_30.setTransform(52.5,180.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_3}]}).wait(1));

	// Layer_6
	this.instance_4 = new lib.light();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-30.8,-180.9,0.182,0.182);
	this.instance_4.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AFvgPQpLg2pMgVISugVQEeA4CFCnQjahcjggjg");
	this.shape_31.setTransform(212.1,-195.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1,3,true).p("AZuCCIhJAAIjcADMgtvAAbIgiABQgSgFgLgcQgFgMgDgQQBfh3DAhWMAnjgA3QFBA3CYDrg");
	this.shape_32.setTransform(134.2,-194.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A92F33").s().p("A5EBaQBjhOCDghMAnvgBlQDjAUDRDDIjbACQhwhRiJghMgnnABLQhJAUhGAvIgjAAQgRgEgLgdg");
	this.shape_33.setTransform(131,-190.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#7E2326").s().p("A0oAEMAnngBLQCJAjBwBQMgtvAAcQBGgvBJgVg");
	this.shape_34.setTransform(123.2,-185.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#DC3D42").s().p("ARwhGMgnvABkQiDAjhjBOQgFgMgDgQQBfh3DAhWMAnjgA3QFBA3CYDrIhKABQjRjDjjgVg");
	this.shape_35.setTransform(134.2,-195.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1,3,true).p("EAg5AGMI28uIIjPiAIhFAAMgmhAAAIIyT5MAnTgCmIQghGg");
	this.shape_36.setTransform(207.1,-123.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#52525A").s().p("A4Cp8MAmhAAAIDOCAIoKAAIOgPTMgnTACmg");
	this.shape_37.setTransform(150.5,-123.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#767884").s().p("AvfmpIIKAAIW1ONIwfBGgAnVmpIjOiAIBFAAIDPCAg");
	this.shape_38.setTransform(310.8,-131.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AAACB9").s().p("AsAnGIBGAAIW7OIIhMAFg");
	this.shape_39.setTransform(340.7,-128.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.instance_4}]}).wait(1));

	// Layer_2
	this.instance_5 = new lib.Boost("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-106.9,-0.4,1,1,0,0,0,309.9,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1793.8,-229.5,2684.1,491.2);


(lib.loading_scene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// spaceshipside
	this.instance = new lib.spaceshipside("single",0);
	this.instance.parent = this;
	this.instance.setTransform(-677.9,-4.9,0.3,0.3,0,0,0,0,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-468.8,regY:18.2,x:-816.4,y:-0.2},0).wait(1).to({x:-814.3,y:-0.9},0).wait(1).to({x:-812.1,y:-1.7},0).wait(1).to({x:-809.8,y:-2.4},0).wait(1).to({x:-807.4,y:-3.2},0).wait(1).to({x:-804.9,y:-4},0).wait(1).to({x:-802.3,y:-4.9},0).wait(1).to({x:-799.6,y:-5.8},0).wait(1).to({x:-796.9,y:-6.7},0).wait(1).to({x:-794,y:-7.6},0).wait(1).to({x:-791.1,y:-8.6},0).wait(1).to({regX:-0.1,regY:0.1,x:-647.5,y:-15},0).wait(1).to({regX:-468.8,regY:18.2,x:-784.9,y:-8.8},0).wait(1).to({x:-781.7,y:-8.1},0).wait(1).to({x:-778.3,y:-7.3},0).wait(1).to({x:-774.9,y:-6.6},0).wait(1).to({x:-771.4,y:-5.8},0).wait(1).to({x:-767.9,y:-4.9},0).wait(1).to({x:-764.2,y:-4.1},0).wait(1).to({x:-760.4,y:-3.2},0).wait(1).to({x:-756.6,y:-2.4},0).wait(1).to({x:-752.6,y:-1.5},0).wait(1).to({x:-748.6,y:-0.5},0).wait(1).to({regX:-0.4,regY:0,x:-603.9,y:-5},0).wait(1).to({regX:-468.8,regY:18.2,x:-740.2,y:1.3},0).wait(1).to({x:-735.9,y:2.1},0).wait(1).to({x:-731.5,y:3},0).wait(1).to({x:-727,y:3.9},0).wait(1).to({x:-722.4,y:4.8},0).wait(1).to({x:-717.8,y:5.6},0).wait(1).to({x:-713,y:6.5},0).wait(1).to({x:-708.2,y:7.5},0).wait(1).to({x:-703.2,y:8.5},0).wait(1).to({x:-698.2,y:9.4},0).wait(1).to({regX:-0.5,regY:0,x:-552.6,y:5},0).wait(1).to({regX:-468.8,regY:18.2,x:-687.8,y:9.4},0).wait(1).to({x:-682.5,y:8.4},0).wait(1).to({x:-677.1,y:7.3},0).wait(1).to({x:-671.6,y:6.2},0).wait(1).to({x:-666,y:5.2},0).wait(1).to({x:-660.4,y:4},0).wait(1).to({x:-654.6,y:2.9},0).wait(1).to({x:-648.7,y:1.7},0).wait(1).to({regX:0,regY:0.4,x:-502.4,y:-4.9},0).wait(1).to({regX:-468.8,regY:18.2,x:-648.6,y:-0.5},0).wait(1).to({x:-654.2,y:-1.5},0).wait(1).to({x:-659.8,y:-2.5},0).wait(1).to({x:-665.2,y:-3.4},0).wait(1).to({x:-670.6,y:-4.3},0).wait(1).to({x:-675.8,y:-5.3},0).wait(1).to({x:-681,y:-6.2},0).wait(1).to({x:-686.1,y:-7},0).wait(1).to({x:-691.1,y:-7.9},0).wait(1).to({x:-696.1,y:-8.8},0).wait(1).to({regX:-0.1,regY:0.1,x:-560.4,y:-15},0).wait(1).to({regX:-468.8,regY:18.2,x:-705.7,y:-8.6},0).wait(1).to({x:-710.4,y:-7.6},0).wait(1).to({x:-715,y:-6.6},0).wait(1).to({x:-719.5,y:-5.7},0).wait(1).to({x:-723.9,y:-4.8},0).wait(1).to({x:-728.3,y:-3.9},0).wait(1).to({x:-732.6,y:-3},0).wait(1).to({x:-736.8,y:-2.1},0).wait(1).to({x:-740.9,y:-1.2},0).wait(1).to({x:-744.9,y:-0.4},0).wait(1).to({regX:-0.4,regY:0,x:-608.3,y:-5},0).wait(1).to({regX:-468.8,regY:18.2,x:-752.7,y:1.3},0).wait(1).to({x:-756.4,y:2.1},0).wait(1).to({x:-760.1,y:2.9},0).wait(1).to({x:-763.7,y:3.7},0).wait(1).to({x:-767.3,y:4.4},0).wait(1).to({x:-770.7,y:5.2},0).wait(1).to({x:-774.1,y:5.9},0).wait(1).to({x:-777.3,y:6.6},0).wait(1).to({x:-780.5,y:7.3},0).wait(1).to({x:-783.6,y:7.9},0).wait(1).to({x:-786.7,y:8.6},0).wait(1).to({x:-789.6,y:9.2},0).wait(1).to({x:-792.5,y:9.8},0).wait(1).to({regX:-0.5,regY:0,x:-654.8,y:5},0).wait(1).to({regX:-468.8,regY:18.2,x:-797.9,y:9.2},0).wait(1).to({x:-800.5,y:8},0).wait(1).to({x:-803,y:6.8},0).wait(1).to({x:-805.4,y:5.6},0).wait(1).to({x:-807.8,y:4.6},0).wait(1).to({x:-810.1,y:3.5},0).wait(1).to({x:-812.3,y:2.4},0).wait(1).to({x:-814.4,y:1.5},0).wait(1).to({regX:-0.1,regY:0.1,x:-676,y:-5},0).wait(1));

	// bg
	this.instance_1 = new lib.speedlinsMc("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-559,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1215.9,-271,1062,610);


(lib.btnLogout = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AgqA8QgJAAgGgGQgHgHAAgKIAAg/QAAgKAHgHQAGgGAJAAIAVAAIABABIABACQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgLAEIgBABIgJAAQgEAAgFAEQgDAEAAAFIAAA/QAAAFADAEQAFAEAEAAIBBAAQAEAAAFgEQADgEAAgFIAAgQQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAFgCIADgBQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAATQAAAKgHAHQgGAGgJAAgAgdAoIgCgBIgCgDIgDgFIgDgHIgEgJIgBgKIAAgGIABgHIACgHIAEgHIAFgFIAIgFIAJgDQAGgCAHgBIAOgBIANAAIAAgPQAAgEADgBIACAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIAdAfQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgdAdQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBQgDgBAAgDIAAgOIgNAAQgXAAgJAJQgKALADAaQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAg");
	this.shape.setTransform(-25.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(14,224,224,0.898)").s().p("AAAApIgMgIIAEgsIgMAAIABgMIANAAIABgLIAMgHIgCASIAQAAIgBAMIgQAAIgEApIAPAAIgBALg");
	this.shape_1.setTransform(8,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(14,224,224,0.898)").s().p("AgLAvIAHhAIAMAAIgHBAgAgDghIABgNIAOAAIgCANg");
	this.shape_2.setTransform(3.7,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(14,224,224,0.898)").s().p("AAOAgIgOgXIgSAXIgOAAIAbggIgTggIANAAIANAXIARgXIAOAAIgaAgIAUAgg");
	this.shape_3.setTransform(-1.4,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(14,224,224,0.898)").s().p("AgeAtIAKhaIAzAAIgBAMIgmAAIgDAbIAeAAIgBALIgeAAIgDAdIAlAAIgBALg");
	this.shape_4.setTransform(-7.8,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHCEIgYgZIgaAZIjgAAIAakHIIZAAIgaEHg");
	this.shape_5.setTransform(-10.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCFFFF").s().p("AgqA8QgJAAgGgGQgHgHAAgKIAAg/QAAgKAHgHQAGgGAJAAIAVAAIABABIABACQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgLAEIgBABIgJAAQgEAAgFAEQgDAEAAAFIAAA/QAAAFADAEQAFAEAEAAIBBAAQAEAAAFgEQADgEAAgFIAAgQQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAFgCIADgBQAAAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIAAATQAAAKgHAHQgGAGgJAAgAgdAoIgCgBIgCgDIgDgFIgDgHIgEgJIgBgKIAAgGIABgHIACgHIAEgHIAFgFIAIgFIAJgDQAGgCAHgBIAOgBIANAAIAAgPQAAgEADgBIACAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAIAdAfQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABIgdAdQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgCgBQgDgBAAgDIAAgOIgNAAQgXAAgJAJQgKALADAaQAAABAAAAQAAAAAAABQAAAAAAAAQgBABAAAAIgBAAg");
	this.shape_6.setTransform(-25.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CCFFFF").s().p("AAAApIgMgIIAEgsIgMAAIABgMIANAAIABgLIAMgHIgCASIAQAAIgBAMIgQAAIgEApIAPAAIgBALg");
	this.shape_7.setTransform(8,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CCFFFF").s().p("AgLAvIAHhAIAMAAIgHBAgAgDghIABgNIAOAAIgCANg");
	this.shape_8.setTransform(3.7,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCFFFF").s().p("AAOAgIgOgXIgSAXIgOAAIAbggIgTggIANAAIANAXIARgXIAOAAIgaAgIAUAgg");
	this.shape_9.setTransform(-1.4,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CCFFFF").s().p("AgeAtIAKhaIAzAAIgBAMIgmAAIgDAbIAeAAIgBALIgeAAIgDAdIAlAAIgBALg");
	this.shape_10.setTransform(-7.8,-0.5);

	this.instance = new lib.glow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-24.6,0,0.722,0.774);

	this.instance_1 = new lib.glow("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(0.5,0.1,0.811,0.635,0,0,0,0.2,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#0EE0E0").ss(2,0,0,3).p("AENAOIkIAAIgYgXIgZAXIjgAA");
	this.shape_11.setTransform(-12.1,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_11},{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-13.2,56.3,26.4);


(lib.btnEn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AAYA4IgwhUIgBAAIgIBUIgQAAIALhvIAPAAIAwBUIAAAAIAJhUIAQAAIgMBvg");
	this.shape.setTransform(4.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0EE0E0").s().p("AglA4IAMhvIA/AAIgCAPIgvAAIgDAgIAlAAIgBANIgmAAIgDAkIAuAAIgBAPg");
	this.shape_1.setTransform(-5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0F0F0").s().p("AAYA4IgwhUIgBAAIgIBUIgQAAIALhvIAPAAIAwBUIAAAAIAJhUIAQAAIgMBvg");
	this.shape_2.setTransform(4.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0F0F0").s().p("AglA4IAMhvIA/AAIgCAPIgvAAIgDAgIAlAAIgBANIgmAAIgDAkIAuAAIgBAPg");
	this.shape_3.setTransform(-5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// Layer_2
	this.instance = new lib.glow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,0,0.8)").s().p("AinCNIAdkZIEyAAIgdEZg");
	this.shape_4.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-13.4,24.5,26.9);


(lib.btnBm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("stdClick");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("AAjA4IAKhaIgBAAIgqBaIgPAAIgXhaIgBAAIgJBaIgPAAIALhvIAXAAIAYBdIAAAAIArhdIAWAAIgMBvg");
	this.shape.setTransform(5.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0EE0E0").s().p("AgqA4IALhvIA5AAIARALIgDAjIgPAIIAAAAIANAHIgEAoIgUAKgAgZApIArAAIAEgkIgrAAgAgUgIIArAAIAEggIgrAAg");
	this.shape_1.setTransform(-6.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0F0F0").s().p("AAjA4IAKhaIgBAAIgqBaIgPAAIgXhaIgBAAIgJBaIgPAAIALhvIAXAAIAYBdIAAAAIArhdIAWAAIgMBvg");
	this.shape_2.setTransform(5.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0F0F0").s().p("AgqA4IALhvIA5AAIARALIgDAjIgPAIIAAAAIANAHIgEAoIgUAKgAgZApIArAAIAEgkIgrAAgAgUgIIArAAIAEggIgrAAg");
	this.shape_3.setTransform(-6.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},2).wait(1));

	// Layer_2
	this.instance = new lib.glow("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.3,1.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,204,0,0.8)").s().p("AinCNIAdkZIEyAAIgdEZg");
	this.shape_4.setTransform(0,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_4}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.4,-13.4,28.8,26.9);


(lib.langSelect = function(mode,startPosition,loop) {
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
		function doEnglish(e){
			myLanguage = 2;
			setCookie("dcs2018", "2", 365);
			var custom = new createjs.Event("setEn", true, false);
			_this.dispatchEvent(custom);
			_this.gotoAndStop("en");
		}
		this.btnEn.addEventListener("click", doEnglish);
	}
	this.frame_1 = function() {
		var _this = this;
		function doBm(e){
			myLanguage = 1;
			setCookie("dcs2018", "1", 365);
			var custom = new createjs.Event("setBm", true, false);
			_this.dispatchEvent(custom);
			_this.gotoAndStop("bm");
		}
		this.btnBm.addEventListener("click", doBm);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.btnEn = new lib.btnEn();
	this.btnEn.name = "btnEn";
	this.btnEn.parent = this;
	this.btnEn.setTransform(19.3,0);
	new cjs.ButtonHelper(this.btnEn, 0, 1, 2, false, new lib.btnEn(), 3);

	this.instance = new lib.btnBm("single",1);
	this.instance.parent = this;
	this.instance.setTransform(-17.8,0);

	this.instance_1 = new lib.btnEn("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,0);

	this.btnBm = new lib.btnBm();
	this.btnBm.name = "btnBm";
	this.btnBm.parent = this;
	this.btnBm.setTransform(-17.8,0);
	new cjs.ButtonHelper(this.btnBm, 0, 1, 2, false, new lib.btnBm(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.btnEn}]}).to({state:[{t:this.btnBm},{t:this.instance_1}]},1).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(192,240,240,0.996)").ss(2,0,0,3).p("ADBgPIgdAcIlrAA");
	this.shape.setTransform(-19.3,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdCbIgdgdIgcAdIlrAAIAdk1ILyAAIgdE1g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(192,240,240,0.996)").ss(2,0,0,3).p("AC5ANIlNAAIgdgc");
	this.shape_2.setTransform(17.8,14.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-15.5,79.5,34.1);


// stage content:
(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{preload:0,preload_fly:9});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		playSound("flyby");
	}
	this.frame_18 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(9).call(this.frame_18).wait(5));

	// panels
	this.mcLevel = new lib.mcLevel();
	this.mcLevel.name = "mcLevel";
	this.mcLevel.parent = this;
	this.mcLevel.setTransform(413.9,13,1,1,0,0,0,0.5,0.5);

	this.btnExit = new lib.btnLogout();
	this.btnExit.name = "btnExit";
	this.btnExit.parent = this;
	this.btnExit.setTransform(776.8,13.2);
	new cjs.ButtonHelper(this.btnExit, 0, 1, 2, false, new lib.btnLogout(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0EE0E0").s().p("ArJLjQgfAAgZgaQgZgaAAgfIAAwFQAAgeAZgTQAXgSAhAAIGDAAQAJg1AoghQAogiA2AAIAnAAIgBgXQAAg/AsguQAtguA+AAQA+AAAtAuQAsAtAAA/IgBAYIAoAAQA1AAAoAiQApAhAIA1IGEAAQAfAAATASQATASAAAfIAAQFQAAAhgTAYQgVAagdAAgArol1IAAQFQAAALAKALQAKALALAAIWfAAQAJAAAGgLQAEgKAAgMIAAwFQAAgKgEgDQgFgEgKAAImEAAQgJAvgoAjQgqAmgzAAIl7AAQg0AAgqgmQgogjgJgvImDAAQgfAAAAARgAj7niQgcAbAAAoQAAAnAcAcQAcAcAoAAIF7AAQAnAAAbgcQAdgcAAgnQAAgogdgbQgbgcgnAAIg3AAIgBgCQgTAkgkAWQgkAWgrgBQgpAAgmgXQgigVgVghIg3AAQgoAAgcAcgAhBqUQgeAeAAAqQAAAqAeAeQAeAdApAAQAqAAAegdQAdgeAAgqQAAgqgdgeQgegegqAAQgpAAgeAegABGHpQgKAAgHgIQgIgHAAgKQAAgKAIgIQAHgHAKAAIEOAAQALAAAHAHQAIAIAAAKQAAAKgIAHQgHAIgLAAgAoNHfQgRAAgQgRQgQgPAAgSIAAiSQAAgiAYghQAYggAqgZQAKgGAOABQAOAAALAGIBJAvIBJgvQAWgOAVAMQAiAVAWAeQAaAjAAAnIAACSQAAATgIAOQgJARgQAAgAn6DzQgSAVAAATIAACSIE2AAIAAiSQAAgWgQgWQgOgUgYgPIheA9Ihkg9QgdATgPAUgABGE/QgKAAgHgIQgIgHAAgKQAAgKAIgIQAHgHAKAAIH/AAQAKAAAIAHQAGAIABAKQgBAKgGAHQgIAIgKAAgABGCfQgKAAgHgIQgIgHAAgKQAAgLAIgGQAHgIAKAAIH/AAQAKAAAIAIQAGAGABALQgBAKgGAHQgIAIgKAAgAnKB2QgogpAAg5QAAg4AogoQAogoA5AAQA5AAApAoQAoAoAAA4QAAA5goApQgpAog5gBQg5ABgogogAmngpQgaAaAAAjQAAAkAaAaQAaAaAkAAQAlAAAZgaQAagaAAgkQAAgjgagaQgZgaglAAQgkAAgaAagABGgKQgKAAgHgHQgIgIAAgKQAAgLAIgGQAHgIAKAAIH/AAQAKAAAIAIQAGAGABALQgBAKgGAIQgIAHgKAAg");
	this.shape.setTransform(30,15.2,0.152,0.152);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(14,224,224,0.898)").s().p("AgHBXQgDgCgDgDIgqhaQgEgJAAgMQAAgZASgSQARgRAYAAQAZAAASARQARASAAAZQAAAMgDAJIgrBaQgCADgEACQgEADgEAAQgEAAgDgDgAgUgyQgJAIAAANQAAAMAJAJQAIAIAMAAQANAAAIgIQAJgJAAgMQAAgNgJgIQgIgJgNAAQgMAAgIAJg");
	this.shape_1.setTransform(355.5,15);

	this.txtPlayerName = new cjs.Text("Player Name--Player Name--Player Name", "italic 14px 'Quantico'", "#0EE0E0");
	this.txtPlayerName.name = "txtPlayerName";
	this.txtPlayerName.lineHeight = 22;
	this.txtPlayerName.lineWidth = 274;
	this.txtPlayerName.parent = this;
	this.txtPlayerName.setTransform(56.3,6);

	this.instance = new lib.langSelect();
	this.instance.parent = this;
	this.instance.setTransform(696.4,17,1,1,0,0,0,0,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AU6CbIgdgdIgdAdIi9AAIhEhFIAXjwIKTAAIA7CIIHYAAIAwAuIgNB/gA9FCbIgdgdIgdAdIlsAAIAek1MAyKAAAIAoAoIgaENg");
	this.shape_2.setTransform(237.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance},{t:this.txtPlayerName},{t:this.shape_1},{t:this.shape},{t:this.btnExit},{t:this.mcLevel}]}).wait(23));

	// topbar
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("EAn0ADDIAdkhI8XAAIgpApIgYD4MhIBAAAIAckUIhwhxMB85AAAIgiFkIo8AAIgDAhg");
	this.shape_3.setTransform(398.4,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(23));

	// loaderMc
	this.loaderMc = new lib.m1();
	this.loaderMc.name = "loaderMc";
	this.loaderMc.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.loaderMc).wait(23));

	// preloader
	this.txtLoadProgress = new cjs.Text("0%", "italic 16px 'Quantico'", "#0EE0E0");
	this.txtLoadProgress.name = "txtLoadProgress";
	this.txtLoadProgress.textAlign = "center";
	this.txtLoadProgress.lineHeight = 25;
	this.txtLoadProgress.lineWidth = 93;
	this.txtLoadProgress.parent = this;
	this.txtLoadProgress.setTransform(400,274.3);

	this.preloadAnim = new lib.Symbol1();
	this.preloadAnim.name = "preloadAnim";
	this.preloadAnim.parent = this;
	this.preloadAnim.setTransform(400,286.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.preloadAnim,p:{y:286.5}},{t:this.txtLoadProgress,p:{y:274.3}}]}).to({state:[{t:this.preloadAnim,p:{y:386.5}},{t:this.txtLoadProgress,p:{y:374.3}}]},9).wait(14));

	// bg
	this.instance_1 = new lib.bgGradient();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-5);

	this.preloadAnim2 = new lib.loading_scene();
	this.preloadAnim2.name = "preloadAnim2";
	this.preloadAnim2.parent = this;
	this.preloadAnim2.setTransform(960.8,268.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.preloadAnim2}]},9).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(393,294.2,814,611.8);
// library properties:
lib.properties = {
	id: 'B6A76AEFF94AE64E9EB5C89D8900F7CF',
	width: 800,
	height: 600,
	fps: 60,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/beamExhaust.png?1521201389595", id:"beamExhaust"},
		{src:"images/bgGradient.png?1521201389595", id:"bgGradient"},
		{src:"images/speedlines1.png?1521201389595", id:"speedlines1"},
		{src:"images/speedlines2.png?1521201389595", id:"speedlines2"},
		{src:"images/speedlines3.png?1521201389595", id:"speedlines3"},
		{src:"sounds/flyby.mp3?1521201389595", id:"flyby"},
		{src:"sounds/stdClick.mp3?1521201389595", id:"stdClick"}
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
an.compositions['B6A76AEFF94AE64E9EB5C89D8900F7CF'] = {
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