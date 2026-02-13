gdjs._1052_1077_1085_1102Code = {};
gdjs._1052_1077_1085_1102Code.localVariables = [];
gdjs._1052_1077_1085_1102Code.idToCallbackMap = new Map();
gdjs._1052_1077_1085_1102Code.GDPlayTitleObjects1= [];
gdjs._1052_1077_1085_1102Code.GDPlayTitleObjects2= [];
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1= [];
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects2= [];


gdjs._1052_1077_1085_1102Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1[k] = gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "menu.mp3", 1, false, 40, 1);
}
}

}


};

gdjs._1052_1077_1085_1102Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1052_1077_1085_1102Code.GDPlayTitleObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlayTitleObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects2.length = 0;

gdjs._1052_1077_1085_1102Code.eventsList0(runtimeScene);
gdjs._1052_1077_1085_1102Code.GDPlayTitleObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlayTitleObjects2.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects1.length = 0;
gdjs._1052_1077_1085_1102Code.GDPlayButtonObjects2.length = 0;


return;

}

gdjs['_1052_1077_1085_1102Code'] = gdjs._1052_1077_1085_1102Code;
