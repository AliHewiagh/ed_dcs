var debugMode = true;
var schoolLevel;
//----turn this on for final to disable all console.log 
//console.log = function() {};

var d2q2List = [["y6d2q2_1", "97C298EB0FE8B14591D54AA479C6ADCF"],
				["y6d2q2_3", "97C298EB0FE8B14591D54AA479C6ADCF"],
				["y6d2q2_5", "97C298EB0FE8B14591D54AA479C6ADCF"],
				["y6d2q2_7", "97C298EB0FE8B14591D54AA479C6ADCF"]
				];
var d2q2Index = randRange(0,3);
console.log(d2q2Index);
var scrList = [{constructorName: "splash", compId: "B80CE73EAFE3CF40BDB98EF8906FA491", preloader: 1},
				{constructorName: "intro", compId: "A41131DFBA5B1348ACDE9360A45CDB27", preloader: 1},
				,,,,,,,,,,,,,,,,,,,,
				{constructorName: "outro", compId: "A41131DFBA5B1348ACDE9360A45CDB27", preloader: 1},
				{constructorName: "end", compId: "134DC6FF3421C64FBDE34F1D4B89988D", preloader: 1}
				];
function doOnce(){
if (schoolLevel==1){//primary
	scrList[2] = {constructorName: "y6d1q1", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[3] = {constructorName: "y6d3q1", compId: "6177E91A890DB6448AFB18F3AC99DAC5", preloader: 1};
	scrList[4] = {constructorName: "y6d2q1", compId: "0531B783B312A2449858C08B8DC0FA38", preloader: 1};
	scrList[5] = {constructorName: "y6d1q2", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[6] = {constructorName: d2q2List[d2q2Index][0], compId: d2q2List[d2q2Index][1], preloader: 1};
	scrList[7] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[8] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[9] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[10] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[11] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[12] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[13] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[14] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[15] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[16] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[17] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[18] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[19] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[20] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
	scrList[21] = {constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1};
} else if (schoolLevel==2){//f3
	scrList[2] = {constructorName: "f3s1", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[3] = {constructorName: "f3s2", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[4] = {constructorName: "f3s3", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[5] = {constructorName: "f3s4", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[6] = {constructorName: "f3s5", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[7] = {constructorName: "f3s6", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[8] = {constructorName: "f3s7", compId: "6177E91A890DB6448AFB18F3AC99DAC5", preloader: 1};
	scrList[9] = {constructorName: "f3s8", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[10] = {constructorName: "f3s9", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[11] = {constructorName: "f3s10", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[12] = {constructorName: "f3s11", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[13] = {constructorName: "f3s12", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[14] = {constructorName: "f3s13", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[15] = {constructorName: "f3s14", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[16] = {constructorName: "y6s2", compId: "6177E91A890DB6448AFB18F3AC99DAC5", preloader: 1};
	scrList[17] = {constructorName: "f3s16", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[18] = {constructorName: "f3s17", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[19] = {constructorName: "f3s18", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[20] = {constructorName: "f3s19", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[21] = {constructorName: "f3s20", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
} else {
	//f5
	scrList[2] = {constructorName: "f5s1", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[3] = {constructorName: "f3s11", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[4] = {constructorName: "f5s3", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[5] = {constructorName: "f5s4", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[6] = {constructorName: "f3s1", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[7] = {constructorName: "f5s6", compId: "6177E91A890DB6448AFB18F3AC99DAC5", preloader: 1};
	scrList[8] = {constructorName: "f5s7", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[9] = {constructorName: "f3s6", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[10] = {constructorName: "f3s2", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[11] = {constructorName: "f3s8", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[12] = {constructorName: "f3s9", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[13] = {constructorName: "f3s12", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[14] = {constructorName: "f5s13", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[15] = {constructorName: "f5s14", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[16] = {constructorName: "f5s15", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[17] = {constructorName: "y6s2", compId: "6177E91A890DB6448AFB18F3AC99DAC5", preloader: 1};
	scrList[18] = {constructorName: "f5s17", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[19] = {constructorName: "f5s18", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[20] = {constructorName: "f5s19", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
	scrList[21] = {constructorName: "f5s20", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1};
}
}
if (currentProgress==undefined){
	var currentProgress = 1;
}
console.log(currentProgress);
var myLanguage; //1 for BM, 2 for English
var filesAdded=""; //list of files already added
var exportSub, fnStartAnimationSub;
var compSub;
var libSub;
var cStage;
var cLastScreen;
var cLastState;
var cTimeLeft;
var didOnce = false;
checkCookie();

function loadScript(url, callback){
    var script = document.createElement("script")
    script.type = "text/javascript";

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
function initTapir(){
	createjs.Sound.stop();
	exportRoot.loaderMc.removeAllEventListeners();
	exportRoot.loaderMc.removeAllChildren();	
		try {
			if (game!=null){
				game.destroy();
			}
		}
		catch(err) {
			//just go on
		}
		try {
			if (workspace!=null){
				workspace.dispose();
			}
		}
		catch(err) {
			//just go on
		}
	$("#dom_overlay_container").empty();
	$("#blocklyDiv").empty();
	if ($('#blocklyDiv') != null ) {
        $("#blocklyDiv").hide();
    }
	if (!didOnce){
		if (typeof cUserName === 'undefined') {
			// nothing
		} else {
			cUserName = htmlDecode(cUserName);
			exportRoot.txtPlayerName.text = truncate(cUserName, 30);
			//get the current stage
			var cData = $.get("/api/stage/get/"+cUserId, function (data) {
			if(data.status == 100){
				//success api call
				cStage = data.stage;
				exportRoot.mcLevel.gotoAndStop(cStage);
				cLevel = data.level;
				cLastScreen = data.last_screen;
				cLastState = data.last_state;
				cTimeLeft = data.time_left;
				if (cLevel=="Year 6"){
					schoolLevel = 1;
				} else if (cLevel=="Form 3"){
					schoolLevel = 2;
				} else {
					schoolLevel = 3;
				}
				var setList = doOnce();
			}else{
				//failed
			}
			});
		}
		if (debugMode){
			$("#stageList").css("display","block");
		}
		currentProgress = 1;//to always load the splash screen
		didOnce = true;
	}
	console.log(scrList[currentProgress-1].constructorName + ".js");
	var fileUrl = scrList[currentProgress-1].constructorName + ".js";
	loadScript(fileUrl, function(){
		//initialization code
		exportRoot.btnExit.addEventListener("click", doExit);
		compSub=AdobeAn.getComposition(scrList[currentProgress-1].compId);
		libSub=compSub.getLibrary();
		createjs.MotionGuidePlugin.install();
		var loader = new createjs.LoadQueue(false);
		loader.installPlugin(createjs.Sound);
		loader.addEventListener("fileload", function(evt){handleFileLoadSub(evt,compSub)});
		loader.addEventListener("progress", function(evt){handleProgress(evt,compSub)});
		loader.addEventListener("complete", function(evt){handleCompleteSub(evt,compSub)});
		libSub=compSub.getLibrary();
		loader.loadManifest(libSub.properties.manifest);
	});	
}
function directNavi(_currentLevel){
	currentProgress = _currentLevel;
	initTapir();
}
function handleFileLoadSub(evt, comp) {
	if (scrList[currentProgress-1].preloader==2){
			exportRoot.gotoAndStop("preload_fly");
		} else {
			exportRoot.gotoAndStop("preload");
		}
	var images=compSub.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleProgress(evt, comp){
	exportRoot.preloadAnim.visible = true;
	exportRoot.txtLoadProgress.text = Math.round(evt.progress * 100) + "%";
	if (scrList[currentProgress-1].preloader==2){
		exportRoot.preloadAnim2.visible = true;
	}
}
function handleCompleteSub(evt,comp) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	/*exportRoot.preloadAnim.visible = false;*/
	if (scrList[currentProgress-1].preloader==2){
		//exportRoot.preloadAnim2.visible = false;
		exportRoot.gotoAndStop("preload");
	}
	exportRoot.txtLoadProgress.text = "";
	libSub=compSub.getLibrary();
	var ss=compSub.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = libSub.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	exportRootSub = new libSub[scrList[currentProgress-1].constructorName];
	//Registers the "tick" event listener.
	fnStartAnimationSub = function() {
		exportRoot.loaderMc.addChild(exportRootSub);
		createjs.Ticker.setFPS(libSub.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	
	AdobeAn.compositionLoaded(libSub.properties.id);
	fnStartAnimationSub();
	/*
	if (scrList[currentProgress-1].constructorName.indexOf("menu")!=-1){
		cStage = Number(scrList[currentProgress-1].constructorName.substring(4));
		exportRoot.mcLevel.gotoAndStop(cStage);
	}*/
	if (currentProgress>=2 && currentProgress<=22){
		exportRoot.mcLevel.gotoAndStop(currentProgress-2);
	} else if (currentProgress>22){
		exportRoot.mcLevel.gotoAndStop(20);
	}
	if (currentProgress==23){
		cStage = 21;//hack for update
	}
	if (cStage>0 && scrList[currentProgress-1].constructorName!="splash"){
		var cData = $.post("/api/stage/update/", 
						{	userId: cUserId, 
							stage: cStage,
							last_screen: scrList[currentProgress-1].constructorName,
							last_state: "",
							time_left: 0},
							function(data){
								console.log(data.message);
							});
	}
}
function nextScreen(){
	currentProgress++;
	initTapir();
}
function startScreen(){
	console.log(cStage);
	if (cStage==0){
		currentProgress = 2;
	} else {
		var scrLength = scrList.length;
		for (var i=0; i<scrLength; i++){
			if (scrList[i].constructorName==cLastScreen){
				currentProgress = i+1;
				break;
			}
		}
	}
	initTapir();
}
var myAudio;
function playSound(id, loop) {
	myAudio = createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}
function removejscssfile(filename, filetype){
    var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
    var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
    var allsuspects=document.getElementsByTagName(targetelement)
    for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
    if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
        allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
    }
}
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
    var _myLanguage=getCookie("dcs2018");
    if (_myLanguage != "") {
        myLanguage = Number(_myLanguage);
    } else {
       //language is BM by default
       setCookie("dcs2018", "1", 365);
    }
}
function doExit(){
	//window.location.href="/logout";
	window.location.href="/../logout";
}
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function htmlDecode(input){
  var e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}
function truncate(string,limit){
  if(string.length > limit){
    return string.substring(0,limit)+"...";
  }
  else {
    return string;
  }
}
