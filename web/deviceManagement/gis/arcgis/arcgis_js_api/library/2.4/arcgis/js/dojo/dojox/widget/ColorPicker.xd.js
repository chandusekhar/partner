/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dojox.widget.ColorPicker"],["requireLocalization","dojox.widget","ColorPicker",null,"ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw","ROOT,ar,ca,cs,da,de,el,es,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-tw"],["requireLocalization","dojo.cldr","number",null,"ROOT,ar,ca,cs,da,de,el,en,en-au,en-gb,es,fi,fr,fr-ch,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-hant,zh-hk","ROOT,ar,ca,cs,da,de,el,en,en-au,en-gb,es,fi,fr,fr-ch,he,hu,it,ja,ko,nb,nl,pl,pt,pt-pt,ro,ru,sk,sl,sv,th,tr,zh,zh-hant,zh-hk"],["require","dijit.form._FormWidget"],["require","dojo.dnd.move"],["require","dojo.fx"],["require","dojox.color"],["require","dojo.i18n"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dojox.widget.ColorPicker"]){_4._hasResource["dojox.widget.ColorPicker"]=true;_4.provide("dojox.widget.ColorPicker");_4.experimental("dojox.widget.ColorPicker");_4.require("dijit.form._FormWidget");_4.require("dojo.dnd.move");_4.require("dojo.fx");_4.require("dojox.color");_4.require("dojo.i18n");(function(d){var _7=function(_8){return _8;};_4.declare("dojox.widget.ColorPicker",_5.form._FormWidget,{showRgb:true,showHsv:true,showHex:true,webSafe:true,animatePoint:true,slideDuration:250,liveUpdate:false,PICKER_HUE_H:150,PICKER_SAT_VAL_H:150,PICKER_SAT_VAL_W:150,PICKER_HUE_SELECTOR_H:8,PICKER_SAT_SELECTOR_H:10,PICKER_SAT_SELECTOR_W:10,value:"#ffffff",_underlay:d.moduleUrl("dojox.widget","ColorPicker/images/underlay.png"),_hueUnderlay:d.moduleUrl("dojox.widget","ColorPicker/images/hue.png"),_pickerPointer:d.moduleUrl("dojox.widget","ColorPicker/images/pickerPointer.png"),_huePickerPointer:d.moduleUrl("dojox.widget","ColorPicker/images/hueHandle.png"),_huePickerPointerAlly:d.moduleUrl("dojox.widget","ColorPicker/images/hueHandleA11y.png"),templateString:_4.cache("dojox.widget","ColorPicker/ColorPicker.html","<table class=\"dojoxColorPicker\" dojoAttachEvent=\"onkeypress: _handleKey\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t<tr>\r\n\t\t<td valign=\"top\" class=\"dojoxColorPickerRightPad\">\r\n\t\t\t<div class=\"dojoxColorPickerBox\">\r\n\t\t\t\t<!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. -->\r\n\t\t\t\t<img role=\"status\" title=\"${saturationPickerTitle}\" alt=\"${saturationPickerTitle}\" class=\"dojoxColorPickerPoint\" src=\"${_pickerPointer}\" tabIndex=\"0\" dojoAttachPoint=\"cursorNode\" style=\"position: absolute; top: 0px; left: 0px;\">\r\n\t\t\t\t<img role=\"presentation\" alt=\"\" dojoAttachPoint=\"colorUnderlay\" dojoAttachEvent=\"onclick: _setPoint, onmousedown: _stopDrag\" class=\"dojoxColorPickerUnderlay\" src=\"${_underlay}\" ondragstart=\"return false\">\r\n\t\t\t</div>\r\n\t\t</td>\r\n\t\t<td valign=\"top\" class=\"dojoxColorPickerRightPad\">\r\n\t\t\t<div class=\"dojoxHuePicker\">\r\n\t\t\t\t<!-- Forcing ABS in style attr due to dojo DND issue with not picking it up form the class. -->\r\n\t\t\t\t<img role=\"status\" dojoAttachPoint=\"hueCursorNode\" tabIndex=\"0\" class=\"dojoxHuePickerPoint\" title=\"${huePickerTitle}\" alt=\"${huePickerTitle}\" src=\"${_huePickerPointer}\" style=\"position: absolute; top: 0px; left: 0px;\">\r\n\t\t\t\t<div class=\"dojoxHuePickerUnderlay\" dojoAttachPoint=\"hueNode\">\r\n\t\t\t\t    <img role=\"presentation\" alt=\"\" dojoAttachEvent=\"onclick: _setHuePoint, onmousedown: _stopDrag\" src=\"${_hueUnderlay}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</td>\r\n\t\t<td valign=\"top\">\r\n\t\t\t<table cellpadding=\"0\" cellspacing=\"0\">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td valign=\"top\" class=\"dojoxColorPickerPreviewContainer\">\r\n\t\t\t\t\t\t<table cellpadding=\"0\" cellspacing=\"0\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td valign=\"top\" class=\"dojoxColorPickerRightPad\">\r\n\t\t\t\t\t\t\t\t\t<div dojoAttachPoint=\"previewNode\" class=\"dojoxColorPickerPreview\"></div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td valign=\"top\">\r\n\t\t\t\t\t\t\t\t\t<div dojoAttachPoint=\"safePreviewNode\" class=\"dojoxColorPickerWebSafePreview\"></div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td valign=\"bottom\">\r\n\t\t\t\t\t\t<table class=\"dojoxColorPickerOptional\" cellpadding=\"0\" cellspacing=\"0\">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dijitInline dojoxColorPickerRgb\" dojoAttachPoint=\"rgbNode\">\r\n\t\t\t\t\t\t\t\t\t\t<table cellpadding=\"1\" cellspacing=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for=\"${_uId}_r\">${redLabel}</label></td><td><input id=\"${_uId}_r\" dojoAttachPoint=\"Rval\" size=\"1\" dojoAttachEvent=\"onchange: _colorInputChange\"></td></tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for=\"${_uId}_g\">${greenLabel}</label></td><td><input id=\"${_uId}_g\" dojoAttachPoint=\"Gval\" size=\"1\" dojoAttachEvent=\"onchange: _colorInputChange\"></td></tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for=\"${_uId}_b\">${blueLabel}</label></td><td><input id=\"${_uId}_b\" dojoAttachPoint=\"Bval\" size=\"1\" dojoAttachEvent=\"onchange: _colorInputChange\"></td></tr>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t<div class=\"dijitInline dojoxColorPickerHsv\" dojoAttachPoint=\"hsvNode\">\r\n\t\t\t\t\t\t\t\t\t\t<table cellpadding=\"1\" cellspacing=\"1\">\r\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for=\"${_uId}_h\">${hueLabel}</label></td><td><input id=\"${_uId}_h\" dojoAttachPoint=\"Hval\"size=\"1\" dojoAttachEvent=\"onchange: _colorInputChange\"> ${degLabel}</td></tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for=\"${_uId}_s\">${saturationLabel}</label></td><td><input id=\"${_uId}_s\" dojoAttachPoint=\"Sval\" size=\"1\" dojoAttachEvent=\"onchange: _colorInputChange\"> ${percentSign}</td></tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr><td><label for=\"${_uId}_v\">${valueLabel}</label></td><td><input id=\"${_uId}_v\" dojoAttachPoint=\"Vval\" size=\"1\" dojoAttachEvent=\"onchange: _colorInputChange\"> ${percentSign}</td></tr>\r\n\t\t\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td colspan=\"2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"dojoxColorPickerHex\" dojoAttachPoint=\"hexNode\" aria-live=\"polite\">\t\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"${_uId}_hex\">&nbsp;${hexLabel}&nbsp;</label><input id=\"${_uId}_hex\" dojoAttachPoint=\"hexCode, focusNode, valueNode\" size=\"6\" class=\"dojoxColorPickerHexCode\" dojoAttachEvent=\"onchange: _colorInputChange\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n</table>\r\n\r\n"),postMixInProperties:function(){if(_4.hasClass(_4.body(),"dijit_a11y")){this._huePickerPointer=this._huePickerPointerAlly;}this._uId=_5.getUniqueId(this.id);_4.mixin(this,_4.i18n.getLocalization("dojox.widget","ColorPicker"));_4.mixin(this,_4.i18n.getLocalization("dojo.cldr","number"));this.inherited(arguments);},postCreate:function(){this.inherited(arguments);if(d.isIE<7){this.colorUnderlay.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+this._underlay+"', sizingMethod='scale')";this.colorUnderlay.src=this._blankGif.toString();}if(!this.showRgb){this.rgbNode.style.visibility="hidden";}if(!this.showHsv){this.hsvNode.style.visibility="hidden";}if(!this.showHex){this.hexNode.style.visibility="hidden";}if(!this.webSafe){this.safePreviewNode.style.visibility="hidden";}},startup:function(){if(this._started){return;}this._started=true;this.set("value",this.value);this._mover=new d.dnd.move.boxConstrainedMoveable(this.cursorNode,{box:{t:-(this.PICKER_SAT_SELECTOR_H/2),l:-(this.PICKER_SAT_SELECTOR_W/2),w:this.PICKER_SAT_VAL_W,h:this.PICKER_SAT_VAL_H}});this._hueMover=new d.dnd.move.boxConstrainedMoveable(this.hueCursorNode,{box:{t:-(this.PICKER_HUE_SELECTOR_H/2),l:0,w:0,h:this.PICKER_HUE_H}});this._subs=[];this._subs.push(d.subscribe("/dnd/move/stop",d.hitch(this,"_clearTimer")));this._subs.push(d.subscribe("/dnd/move/start",d.hitch(this,"_setTimer")));this._keyListeners=[];this._connects.push(_5.typematic.addKeyListener(this.hueCursorNode,{charOrCode:_4.keys.UP_ARROW,shiftKey:false,metaKey:false,ctrlKey:false,altKey:false},this,_4.hitch(this,this._updateHueCursorNode),25,25));this._connects.push(_5.typematic.addKeyListener(this.hueCursorNode,{charOrCode:_4.keys.DOWN_ARROW,shiftKey:false,metaKey:false,ctrlKey:false,altKey:false},this,_4.hitch(this,this._updateHueCursorNode),25,25));this._connects.push(_5.typematic.addKeyListener(this.cursorNode,{charOrCode:_4.keys.UP_ARROW,shiftKey:false,metaKey:false,ctrlKey:false,altKey:false},this,_4.hitch(this,this._updateCursorNode),25,25));this._connects.push(_5.typematic.addKeyListener(this.cursorNode,{charOrCode:_4.keys.DOWN_ARROW,shiftKey:false,metaKey:false,ctrlKey:false,altKey:false},this,_4.hitch(this,this._updateCursorNode),25,25));this._connects.push(_5.typematic.addKeyListener(this.cursorNode,{charOrCode:_4.keys.LEFT_ARROW,shiftKey:false,metaKey:false,ctrlKey:false,altKey:false},this,_4.hitch(this,this._updateCursorNode),25,25));this._connects.push(_5.typematic.addKeyListener(this.cursorNode,{charOrCode:_4.keys.RIGHT_ARROW,shiftKey:false,metaKey:false,ctrlKey:false,altKey:false},this,_4.hitch(this,this._updateCursorNode),25,25));},_setValueAttr:function(_9){if(!this._started){return;}this.setColor(_9,true);},setColor:function(_a,_b){var _c=_6.color.fromString(_a);this._updatePickerLocations(_c);this._updateColorInputs(_c);this._updateValue(_c,_b);},_setTimer:function(_d){_5.focus(_d.node);d.setSelectable(this.domNode,false);this._timer=setInterval(d.hitch(this,"_updateColor"),45);},_clearTimer:function(_e){clearInterval(this._timer);this._timer=null;this.onChange(this.value);d.setSelectable(this.domNode,true);},_setHue:function(h){d.style(this.colorUnderlay,"backgroundColor",_6.color.fromHsv(h,100,100).toHex());},_updateHueCursorNode:function(_f,_10,e){if(_f!==-1){var y=_4.style(this.hueCursorNode,"top");var _11=(this.PICKER_HUE_SELECTOR_H/2);y+=_11;var _12=false;if(e.charOrCode==_4.keys.UP_ARROW){if(y>0){y-=1;_12=true;}}else{if(e.charOrCode==_4.keys.DOWN_ARROW){if(y<this.PICKER_HUE_H){y+=1;_12=true;}}}y-=_11;if(_12){_4.style(this.hueCursorNode,"top",y+"px");}}else{this._updateColor(true);}},_updateCursorNode:function(_13,_14,e){var _15=this.PICKER_SAT_SELECTOR_H/2;var _16=this.PICKER_SAT_SELECTOR_W/2;if(_13!==-1){var y=_4.style(this.cursorNode,"top");var x=_4.style(this.cursorNode,"left");y+=_15;x+=_16;var _17=false;if(e.charOrCode==_4.keys.UP_ARROW){if(y>0){y-=1;_17=true;}}else{if(e.charOrCode==_4.keys.DOWN_ARROW){if(y<this.PICKER_SAT_VAL_H){y+=1;_17=true;}}else{if(e.charOrCode==_4.keys.LEFT_ARROW){if(x>0){x-=1;_17=true;}}else{if(e.charOrCode==_4.keys.RIGHT_ARROW){if(x<this.PICKER_SAT_VAL_W){x+=1;_17=true;}}}}}if(_17){y-=_15;x-=_16;_4.style(this.cursorNode,"top",y+"px");_4.style(this.cursorNode,"left",x+"px");}}else{this._updateColor(true);}},_updateColor:function(){var _18=this.PICKER_HUE_SELECTOR_H/2,_19=this.PICKER_SAT_SELECTOR_H/2,_1a=this.PICKER_SAT_SELECTOR_W/2;var _1b=d.style(this.hueCursorNode,"top")+_18,_1c=d.style(this.cursorNode,"top")+_19,_1d=d.style(this.cursorNode,"left")+_1a,h=Math.round(360-(_1b/this.PICKER_HUE_H*360)),col=_6.color.fromHsv(h,_1d/this.PICKER_SAT_VAL_W*100,100-(_1c/this.PICKER_SAT_VAL_H*100));this._updateColorInputs(col);this._updateValue(col,true);if(h!=this._hue){this._setHue(h);}},_colorInputChange:function(e){var col,_1e=false;switch(e.target){case this.hexCode:col=_6.color.fromString(e.target.value);_1e=true;break;case this.Rval:case this.Gval:case this.Bval:col=_6.color.fromArray([this.Rval.value,this.Gval.value,this.Bval.value]);_1e=true;break;case this.Hval:case this.Sval:case this.Vval:col=_6.color.fromHsv(this.Hval.value,this.Sval.value,this.Vval.value);_1e=true;break;}if(_1e){this._updatePickerLocations(col);this._updateColorInputs(col);this._updateValue(col,true);}},_updateValue:function(col,_1f){var hex=col.toHex();this.value=this.valueNode.value=hex;if(_1f&&(!this._timer||this.liveUpdate)){this.onChange(hex);}},_updatePickerLocations:function(col){var _20=this.PICKER_HUE_SELECTOR_H/2,_21=this.PICKER_SAT_SELECTOR_H/2,_22=this.PICKER_SAT_SELECTOR_W/2;var hsv=col.toHsv(),_23=Math.round(this.PICKER_HUE_H-hsv.h/360*this.PICKER_HUE_H)-_20,_24=Math.round(hsv.s/100*this.PICKER_SAT_VAL_W)-_22,_25=Math.round(this.PICKER_SAT_VAL_H-hsv.v/100*this.PICKER_SAT_VAL_H)-_21;if(this.animatePoint){d.fx.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:_23,left:0}).play();d.fx.slideTo({node:this.cursorNode,duration:this.slideDuration,top:_25,left:_24}).play();}else{d.style(this.hueCursorNode,"top",_23+"px");d.style(this.cursorNode,{left:_24+"px",top:_25+"px"});}if(hsv.h!=this._hue){this._setHue(hsv.h);}},_updateColorInputs:function(col){var hex=col.toHex();if(this.showRgb){this.Rval.value=col.r;this.Gval.value=col.g;this.Bval.value=col.b;}if(this.showHsv){var hsv=col.toHsv();this.Hval.value=Math.round((hsv.h));this.Sval.value=Math.round(hsv.s);this.Vval.value=Math.round(hsv.v);}if(this.showHex){this.hexCode.value=hex;}this.previewNode.style.backgroundColor=hex;if(this.webSafe){this.safePreviewNode.style.backgroundColor=_7(hex);}},_setHuePoint:function(evt){var _26=(this.PICKER_HUE_SELECTOR_H/2);var _27=evt.layerY-_26;if(this.animatePoint){d.fx.slideTo({node:this.hueCursorNode,duration:this.slideDuration,top:_27,left:0,onEnd:d.hitch(this,function(){this._updateColor(true);_5.focus(this.hueCursorNode);})}).play();}else{d.style(this.hueCursorNode,"top",_27+"px");this._updateColor(false);}},_setPoint:function(evt){var _28=this.PICKER_SAT_SELECTOR_H/2;var _29=this.PICKER_SAT_SELECTOR_W/2;var _2a=evt.layerY-_28;var _2b=evt.layerX-_29;if(evt){_5.focus(evt.target);}if(this.animatePoint){d.fx.slideTo({node:this.cursorNode,duration:this.slideDuration,top:_2a,left:_2b,onEnd:d.hitch(this,function(){this._updateColor(true);_5.focus(this.cursorNode);})}).play();}else{d.style(this.cursorNode,{left:_2b+"px",top:_2a+"px"});this._updateColor(false);}},_handleKey:function(e){},focus:function(){if(!this._focused){_5.focus(this.focusNode);}},_stopDrag:function(e){_4.stopEvent(e);},destroy:function(){this.inherited(arguments);_4.forEach(this._subs,function(sub){_4.unsubscribe(sub);});delete this._subs;}});})(_4);}}};});