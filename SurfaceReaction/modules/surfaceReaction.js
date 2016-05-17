var X,Y;
var srcWidth,srcHeight;
var widgetCenterX,widgetCenterY,widgetWidth,widgetHeight,diameter;
var orgiX,orgiY,orgiWidth,orgiHeight,curWidget;
function surfaceReaction(currentWidget)
{
    
  kony.print("\n$$$$$$$      in disc_blur function   $$$$$$$$$$\n");
  
  srcWidth=kony.os.deviceInfo().screenWidth;
  srcHeight=kony.os.deviceInfo().screenHeight;
  kony.print("\n\n srcWidth : "+srcWidth+"\n\n srcHeight : "+srcHeight+"\n\n");
  
  kony.print("\n\n widgetCenterX : "+currentWidget+"\n\n widgetCenterY : "+frm1[currentWidget]+"\n\n");
  
  
  widgetCenterX=frm1[currentWidget].centerX;
  widgetCenterY=frm1[currentWidget].centerY;
  
  kony.print("\n\n widgetCenterX : "+widgetCenterX+"\n\n widgetCenterY : "+widgetCenterY+"\n\n");
  
  widgetWidth=frm1[currentWidget].width;
  widgetHeight=frm1[currentWidget].height;
  
  
  frm1.boarderCont.centerX=widgetCenterX;
  frm1.boarderCont.centerY=widgetCenterY;
  frm1.boarderCont.width=widgetWidth;
  frm1.boarderCont.height=widgetHeight;
  
  
  widgetWidth = widgetWidth.match(/\d/g);
  widgetWidth = widgetWidth.join("");
  widgetHeight = widgetHeight.match(/\d/g);
  widgetHeight = widgetHeight.join("");
  kony.print("\n\n widget Width : "+widgetWidth+"\n\n widget Height : "+widgetHeight+"\n\n");  
  
  diameter=Math.sqrt((Math.pow(widgetWidth,2)+Math.pow(widgetHeight,2)));
  diameter*=(srcWidth/100)*1.2;
  
//   if(widgetWidth>widgetHeight)
//     diameter=(widgetWidth*srcWidth)/50;
//   else
//     diameter=(widgetHeight*srcHeight)/50;
  Math.floor( diameter);
  kony.print("\n\n widgetCenterX : "+diameter+"\n\n ");
  kony.print("\n\n widgetCenterX : "+frm1.rippleCont+"\n\n ");
  
  frm1.rippleCont.animate(animBlur(),animConfig(),{animationStart:anistart,animationEnd:aniend});
  
  kony.print("\n\n widgetCenterX : "+frm1.rippleCont+"\n\n "); 
}





function anistart()
{
  frm1.boarderCont.isVisible=true;
  frm1.rippleCont.isVisible=true;
}




function aniend()
{
  frm1.boarderCont.isVisible=false;
  frm1.rippleCont.isVisible=false;
}




function animConfig(){
  kony.print("\n$$$$$$$      in animConfig function   $$$$$$$$$$\n");
 var config = {
    "duration":0.5,
   "direction":kony.anim.DIRECTION_ALTERNATE,
    "iterationCount":1,
    "delay":0,
    "fillMode":kony.anim.FILL_MODE_BOTH
 };
 return config;
}




function animBlur() {
  kony.print("\n$$$$$$$      in animBlur function   $$$$$$$$$$\n");

  var animDefinitionOne = {
        0: {
          
          "width":1,
          "height":1,
          "opacity":0,          
          "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },            
        },
    
    
        60: {
          "width":diameter,
          "height":diameter,
          "opacity":0.5,          
          "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },           
        },
    
    
        100:  {
          "opacity":0
        }       
     }
    animDef = kony.ui.createAnimation(animDefinitionOne);
    return animDef;
}
