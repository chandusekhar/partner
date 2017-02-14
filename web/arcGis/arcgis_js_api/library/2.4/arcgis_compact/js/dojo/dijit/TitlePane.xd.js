/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.TitlePane"],["require","dojo.fx"],["require","dijit._Templated"],["require","dijit.layout.ContentPane"],["require","dijit._CssStateMixin"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.TitlePane"]){_4._hasResource["dijit.TitlePane"]=true;_4.provide("dijit.TitlePane");_4.require("dojo.fx");_4.require("dijit._Templated");_4.require("dijit.layout.ContentPane");_4.require("dijit._CssStateMixin");_4.declare("dijit.TitlePane",[_5.layout.ContentPane,_5._Templated,_5._CssStateMixin],{title:"",open:true,toggleable:true,tabIndex:"0",duration:_5.defaultDuration,baseClass:"dijitTitlePane",templateString:_4.cache("dijit","templates/TitlePane.html","<div>\r\n\t<div dojoAttachEvent=\"onclick:_onTitleClick, onkeypress:_onTitleKey\"\r\n\t\t\tclass=\"dijitTitlePaneTitle\" dojoAttachPoint=\"titleBarNode\">\r\n\t\t<div class=\"dijitTitlePaneTitleFocus\" dojoAttachPoint=\"focusNode\">\r\n\t\t\t<img src=\"${_blankGif}\" alt=\"\" dojoAttachPoint=\"arrowNode\" class=\"dijitArrowNode\" role=\"presentation\"\r\n\t\t\t/><span dojoAttachPoint=\"arrowNodeInner\" class=\"dijitArrowNodeInner\"></span\r\n\t\t\t><span dojoAttachPoint=\"titleNode\" class=\"dijitTitlePaneTextNode\"></span>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"dijitTitlePaneContentOuter\" dojoAttachPoint=\"hideNode\" role=\"presentation\">\r\n\t\t<div class=\"dijitReset\" dojoAttachPoint=\"wipeNode\" role=\"presentation\">\r\n\t\t\t<div class=\"dijitTitlePaneContentInner\" dojoAttachPoint=\"containerNode\" role=\"region\" id=\"${id}_pane\">\r\n\t\t\t\t<!-- nested divs because wipeIn()/wipeOut() doesn't work right on node w/padding etc.  Put padding on inner div. -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"),attributeMap:_4.delegate(_5.layout.ContentPane.prototype.attributeMap,{title:{node:"titleNode",type:"innerHTML"},tooltip:{node:"focusNode",type:"attribute",attribute:"title"},id:""}),buildRendering:function(){this.inherited(arguments);_4.setSelectable(this.titleNode,false);},postCreate:function(){this.inherited(arguments);if(this.toggleable){this._trackMouseState(this.titleBarNode,"dijitTitlePaneTitle");}var _7=this.hideNode,_8=this.wipeNode;this._wipeIn=_4.fx.wipeIn({node:this.wipeNode,duration:this.duration,beforeBegin:function(){_7.style.display="";}});this._wipeOut=_4.fx.wipeOut({node:this.wipeNode,duration:this.duration,onEnd:function(){_7.style.display="none";}});},_setOpenAttr:function(_9,_a){_4.forEach([this._wipeIn,this._wipeOut],function(_b){if(_b&&_b.status()=="playing"){_b.stop();}});if(_a){var _c=this[_9?"_wipeIn":"_wipeOut"];_c.play();}else{this.hideNode.style.display=this.wipeNode.style.display=_9?"":"none";}if(this._started){if(_9){this._onShow();}else{this.onHide();}}this.arrowNodeInner.innerHTML=_9?"-":"+";_5.setWaiState(this.containerNode,"hidden",_9?"false":"true");_5.setWaiState(this.focusNode,"pressed",_9?"true":"false");this._set("open",_9);this._setCss();},_setToggleableAttr:function(_d){_5.setWaiRole(this.focusNode,_d?"button":"heading");if(_d){_5.setWaiState(this.focusNode,"controls",this.id+"_pane");_4.attr(this.focusNode,"tabIndex",this.tabIndex);}else{_4.removeAttr(this.focusNode,"tabIndex");}this._set("toggleable",_d);this._setCss();},_setContentAttr:function(_e){if(!this.open||!this._wipeOut||this._wipeOut.status()=="playing"){this.inherited(arguments);}else{if(this._wipeIn&&this._wipeIn.status()=="playing"){this._wipeIn.stop();}_4.marginBox(this.wipeNode,{h:_4.marginBox(this.wipeNode).h});this.inherited(arguments);if(this._wipeIn){this._wipeIn.play();}else{this.hideNode.style.display="";}}},toggle:function(){this._setOpenAttr(!this.open,true);},_setCss:function(){var _f=this.titleBarNode||this.focusNode;var _10=this._titleBarClass;this._titleBarClass="dijit"+(this.toggleable?"":"Fixed")+(this.open?"Open":"Closed");_4.replaceClass(_f,this._titleBarClass,_10||"");this.arrowNodeInner.innerHTML=this.open?"-":"+";},_onTitleKey:function(e){if(e.charOrCode==_4.keys.ENTER||e.charOrCode==" "){if(this.toggleable){this.toggle();}_4.stopEvent(e);}else{if(e.charOrCode==_4.keys.DOWN_ARROW&&this.open){this.containerNode.focus();e.preventDefault();}}},_onTitleClick:function(){if(this.toggleable){this.toggle();}},setTitle:function(_11){_4.deprecated("dijit.TitlePane.setTitle() is deprecated.  Use set('title', ...) instead.","","2.0");this.set("title",_11);}});}}};});