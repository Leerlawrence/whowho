script type="text/javascript">
// Opacity and Fade in script.
// Script copyright (C) 2008 http://www.cryer.co.uk/.
// Script is free to use provided this copyright header is included.
function SetOpacity(object,opacityPct)
{
  // IE.
  object.style.filter = 'alpha(opacity=' + opacityPct + ')';
  // Old mozilla and firefox
  object.style.MozOpacity = opacityPct/100;
  // Everything else.
  object.style.opacity = opacityPct/100;
}
function ChangeOpacity(id,msDuration,msStart,fromO,toO)
{
  var element=document.getElementById(id);
  var opacity = element.style.opacity * 100;
  var msNow = (new Date()).getTime();
  opacity = fromO + (toO - fromO) * (msNow - msStart) / msDuration;
  if (opacity<0) 
    SetOpacity(element,0)
  else if (opacity>100)
    SetOpacity(element,100)
  else
  {
    SetOpacity(element,opacity);
    element.timer = window.setTimeout("ChangeOpacity('" + id + "'," + msDuration + "," + msStart + "," + fromO + "," + toO + ")",1);
  }
}
function FadeIn(id)
{
  var element=document.getElementById(id);
  if (element.timer) window.clearTimeout(element.timer); 
  var startMS = (new Date()).getTime();
  element.timer = window.setTimeout("ChangeOpacity('" + id + "',1000," + startMS + ",0,100)",1);
}
function FadeOut(id)
{
  var element=document.getElementById(id);
  if (element.timer) window.clearTimeout(element.timer); 
  var startMS = (new Date()).getTime();
  element.timer = window.setTimeout("ChangeOpacity('" + id + "',5000," + startMS + ",100,0)",1);
}
function FadeInImage(foregroundID,newImage,backgroundID)
{
  var foreground=document.getElementById(foregroundID);
  if (backgroundID)
  {
    var background=document.getElementById(backgroundID);
    if (background)
    {
      background.style.backgroundImage = 'url(' + foreground.src + ')';
      background.style.backgroundRepeat = 'no-repeat';
    }
  }
  SetOpacity(foreground,0);
  foreground.src = newImage;
  if (foreground.timer) window.clearTimeout(foreground.timer); 
  var startMS = (new Date()).getTime();
  foreground.timer = window.setTimeout("ChangeOpacity('" + foregroundID + "',5000," + startMS + ",0,100)",10);
}


</script>

module.exports=utils;