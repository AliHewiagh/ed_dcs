var debugMode = true;
var d2q2List = [["y6d2q2_1", "97C298EB0FE8B14591D54AA479C6ADCF"],
				["y6d2q2_3", "97C298EB0FE8B14591D54AA479C6ADCF"],
				["y6d2q2_5", "97C298EB0FE8B14591D54AA479C6ADCF"],
				["y6d2q2_7", "97C298EB0FE8B14591D54AA479C6ADCF"]
				];
var d2q2Index = randRange(0,3);
console.log(d2q2Index);
var scrList = [{constructorName: "splash", compId: "B80CE73EAFE3CF40BDB98EF8906FA491", preloader: 1},
				{constructorName: "brief", compId: "679F3CBA7A830C41AD08029BD2541F31", preloader: 1},
				{constructorName: "menu1", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro1", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "y6d1q1", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1},
				{constructorName: "outro1", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu2", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro2", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "y6d3q1", compId: "6177E91A890DB6448AFB18F3AC99DAC5", preloader: 1},
				{constructorName: "outro2", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu3", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro3", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "y6d2q1", compId: "0531B783B312A2449858C08B8DC0FA38", preloader: 1},
				{constructorName: "outro3", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu4", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro4", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "y6d1q2", compId: "97C298EB0FE8B14591D54AA479C6ADCF", preloader: 1},
				{constructorName: "outro4", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu5", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro5", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: d2q2List[d2q2Index][0], compId: d2q2List[d2q2Index][1], preloader: 1},
				{constructorName: "outro5", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu6", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro6", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro6", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu7", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro7", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro7", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu8", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro8", compId: "6E20039D2D5BE84684E4AEF89CE16C20", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro8", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu9", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro9", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro9", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu10", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro10", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro10", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu11", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro11", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro11", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu12", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro12", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro12", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu13", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro13", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro13", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu14", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro14", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro14", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu15", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro15", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro15", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu16", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro16", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro16", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu17", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro17", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro17", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu18", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro18", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro18", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu19", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro19", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro19", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "menu20", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "intro20", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 2},
				{constructorName: "tempQ", compId: "14AD4E5BD360424D9833FD8D9B96713F", preloader: 1},
				{constructorName: "outro20", compId: "11CABBE8EF0CC945B3CD9040447EEBC2", preloader: 1},
				{constructorName: "end", compId: "134DC6FF3421C64FBDE34F1D4B89988D", preloader: 1}
				];
if (currentProgress==undefined){
	var currentProgress = 1;
}
console.log(currentProgress);
var myLanguage; //1 for BM, 2 for English
var filesAdded=""; //list of files already added
var exportSub, fnStartAnimationSub;
var compSub;
var libSub;
checkCookie();


function setLevel(cLevel){
	exportRoot.mcLevel.gotoAndStop(cLevel);
}
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
	if (typeof cUserName === 'undefined') {
		// nothing
	} else {
		exportRoot.txtPlayerName.text = cUserName;
	}
	
	if (debugMode){
		$("#stageList").css("display","block");
	}
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
}
function nextScreen(){
	currentProgress++;
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
	window.location.href="/logout";
}
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}