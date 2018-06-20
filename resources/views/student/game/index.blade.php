<!DOCTYPE html>
<!--
	NOTES:
	1. All tokens are represented by '$' sign in the template.
	2. You can write your code only wherever mentioned.
	3. All occurrences of existing tokens will be replaced by their appropriate values.
	4. Blank lines will be removed automatically.
	5. Remove unnecessary comments before creating your template.
-->
<html>
<head>
    <meta charset="UTF-8">
    <meta name="authoring-tool" content="Adobe_Animate_CC">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tapir Hero</title>
    <style>
        #animation_container, #blocklyDiv, #_preload_div_ {
            position:absolute;
            margin:auto;
            left:0;right:0;
            top:0;bottom:0;
        }
		body{
		font-family: Quantico;
		font-style: italic;
	  }
	  #stageList a:link{
			color: #ffffff;
		  }
		#stageList a:visited{
			color: #CCCCCC;
		}
		#stageList a:hover{
			color: #0EE0E0;
		}
		#stageList a:active{
			color: #0EE0E0;
		}
		#stageList {
			display: none;
		}
		.blocklySvg {
          background-color: #fff !important;
          border-radius: 10px !important;
        }

        .blocklyFlyoutBackground {
          fill: #F7D39C !important;
          opacity: 1 !important;
        }

        .CodeMirror {border-right: 1px solid black; height: 280px;}
    </style>
    <link rel="stylesheet" type="text/css" href="{{asset('game/style.css')}}" />
	<link rel="stylesheet" type="text/css" href="{{asset('game/codemirror/codemirror.css')}}" />
    <link href="https://fonts.googleapis.com/css?family=Quantico" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet">
	
	<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
	<script src="http://malsup.github.com/jquery.form.js"></script>
    <script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
	<script src="{{asset('game/phaser.min.js')}}"></script>
	<script src="{{asset('game/nine-patch-phaser-plugin.min.js')}}"></script>
	<script src="{{asset('game/phaser-plugin-isometric.min.js')}}"></script>
	<script src="{{asset('game/code_compiler.js')}}"></script>
	        
	<script src="{{asset('game/blockly/blockly_compressed.js')}}"></script>
	<script src="{{asset('game/blockly/blocks_compressed.js')}}"></script>
    <script src="{{asset('game/blockly/javascript_compressed.js')}}"></script>
    <script src="{{asset('game/blockly/msg/js/en.js')}}"></script>
	<script src="{{asset('game/blockly/blocks/custom.js')}}"></script>
    <script src="{{asset('game/blockly/blockly_function.js')}}"></script>   
	<script src="{{asset('game/codemirror/codemirror.js')}}"></script>
	<script src="{{asset('game/codemirror/mode/xml/xml.js')}}"></script>
	<script src="{{asset('game/codemirror/mode/javascript/javascript.js')}}"></script>
	<script src="{{asset('game/codemirror/addon/selection/active-line.js')}}"></script>
    <script src="{{asset('game/codemirror/addon/display/autorefresh.js')}}"></script>
    <script src="{{asset('game/start.js')}}"></script>
    <script src="{{asset('game/gameControl.js')}}"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js"></script>
    <script>
		var cUserName = "{{Auth::user()->name}}";
		var cUserId = {{Auth::user()->id}};
		var cUserIc = {{Auth::user()->ic_number}};
		//var currentProgress = {{Auth::user()->currentProgress}};
		var currentProgress = 1;
        var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
        function init() {
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            var comp=AdobeAn.getComposition("B6A76AEFF94AE64E9EB5C89D8900F7CF");
            var lib=comp.getLibrary();
            var loader = new createjs.LoadQueue(false);
            loader.installPlugin(createjs.Sound);
            loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
            loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
            var lib=comp.getLibrary();
            loader.loadManifest(lib.properties.manifest);
        }
        function handleFileLoad(evt, comp) {
            var images=comp.getImages();
            if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
        }
        function handleComplete(evt,comp) {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            var lib=comp.getLibrary();
            var ss=comp.getSpriteSheet();
            var queue = evt.target;
            var ssMetadata = lib.ssMetadata;
            for(i=0; i<ssMetadata.length; i++) {
                ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
            }
            var preloaderDiv = document.getElementById("_preload_div_");
            preloaderDiv.style.display = 'none';
            canvas.style.display = 'block';
            exportRoot = new lib.start();
            stage = new lib.Stage(canvas);
            stage.enableMouseOver();
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                stage.addChild(exportRoot);
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
                initTapir();
                createjs.Touch.enable(stage);
            }
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {
                var lastW, lastH, lastS=1;
                window.addEventListener('resize', resizeCanvas);
                resizeCanvas();
                function resizeCanvas() {
                    var w = lib.properties.width, h = lib.properties.height;
                    var iw = window.innerWidth, ih=window.innerHeight;
                    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
                    if(isResp) {
                        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                            sRatio = lastS;
                        }
                        else if(!isScale) {
                            if(iw<w || ih<h)
                                sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==1) {
                            sRatio = Math.min(xRatio, yRatio);
                        }
                        else if(scaleType==2) {
                            sRatio = Math.max(xRatio, yRatio);
                        }
                    }
                    canvas.width = w*pRatio*sRatio;
                    canvas.height = h*pRatio*sRatio;
                    canvas.style.width = anim_container.style.width = dom_overlay_container.style.width = preloaderDiv.style.width = w*sRatio+'px';
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = preloaderDiv.style.height = h*sRatio+'px';
                    stage.scaleX = pRatio*sRatio;
                    stage.scaleY = pRatio*sRatio;
                    lastW = iw; lastH = ih; lastS = sRatio;
                    stage.tickOnUpdate = false;
                    stage.update();
                    stage.tickOnUpdate = true;
                }
            }
            makeResponsive(true,'both',true,1);
            AdobeAn.compositionLoaded(lib.properties.id);
            fnStartAnimation();
        }
        function playSound(id, loop) {
            return createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
        }
    </script>
    <!-- write your code here -->
</head>
<body onload="init();" style="margin:0px;">
<div style="color: #CFCFCF">
		<ul id="stageList">
			<li><a href="javascript:directNavi(3);">Stage 1</a></li>
			<li><a href="javascript:directNavi(7);">Stage 2</a></li>
			<li><a href="javascript:directNavi(11);">Stage 3</a></li>
			<li><a href="javascript:directNavi(15);">Stage 4</a></li>
			<li><a href="javascript:directNavi(19);">Stage 5</a></li>
			<li><a href="javascript:directNavi(23);">Stage 6</a></li>
			<li><a href="javascript:directNavi(27);">Stage 7</a></li>
			<li><a href="javascript:directNavi(31);">Stage 8</a></li>
			<li><a href="javascript:directNavi(35);">Stage 9</a></li>
			<li><a href="javascript:directNavi(39);">Stage 10</a></li>
			<li><a href="javascript:directNavi(43);">Stage 11</a></li>
			<li><a href="javascript:directNavi(47);">Stage 12</a></li>
			<li><a href="javascript:directNavi(51);">Stage 13</a></li>
			<li><a href="javascript:directNavi(55);">Stage 14</a></li>
			<li><a href="javascript:directNavi(59);">Stage 15</a></li>
			<li><a href="javascript:directNavi(63);">Stage 16</a></li>
			<li><a href="javascript:directNavi(67);">Stage 17</a></li>
			<li><a href="javascript:directNavi(71);">Stage 18</a></li>
			<li><a href="javascript:directNavi(75);">Stage 19</a></li>
			<li><a href="javascript:directNavi(79);">Stage 20</a></li>
			<li><a href="javascript:directNavi(83);">Completion</a></li>
		</ul>
	</div>
<div id="animation_container" style="background-color:rgba(0, 0, 0, 1.00); width:800px; height:600px">
    <canvas id="canvas" width="800" height="600" style="position: absolute; display: none; background-color:rgba(0, 0, 0, 1.00);"></canvas>
    <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:800px; height:600px; position: absolute; left: 0px; top: 0px; display: block;">
    </div>
	<div id="blocklyDiv" style="display:none; position:absolute; "></div>
    </div>
</div>
<div id='_preload_div_' style='position:absolute; top:0; left:0; display: inline-block; height:600px; width: 800px; text-align: center;'>	<span style='display: inline-block; height: 100%; vertical-align: middle;'></span>	<img src='{{asset('game/images/_preloader.gif')}}' style='vertical-align: middle; max-height: 100%'/></div>

<xml id="toolbox" style="display: none">
	<block type="move_function"></block>
	<block type="jump_function"></block>
	<block type="turn_function"></block>
	<block type="repeat_function"></block>
</xml>

</body>
</html>