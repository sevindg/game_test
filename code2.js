gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code = {};
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.localVariables = [];
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.idToCallbackMap = new Map();
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDGameOverTitleObjects1= [];
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDGameOverTitleObjects2= [];
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects1= [];
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects2= [];
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1= [];
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects2= [];


gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FinalScore2"), gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects1);
{for(var i = 0, len = gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects1.length ;i < len;++i) {
    gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects1[i].getBehavior("Text").setText("Final Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "GameOver.mp3", 1, false, 40, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayButton"), gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1.length;i<l;++i) {
    if ( gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1[k] = gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1[i];
        ++k;
    }
}
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


};

gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDGameOverTitleObjects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDGameOverTitleObjects2.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects2.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects2.length = 0;

gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.eventsList0(runtimeScene);
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDGameOverTitleObjects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDGameOverTitleObjects2.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDFinalScore2Objects2.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects1.length = 0;
gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code.GDPlayButtonObjects2.length = 0;


return;

}

gdjs['_1055_1088_1086_1080_1075_1088_1099_1096Code'] = gdjs._1055_1088_1086_1080_1075_1088_1099_1096Code;
