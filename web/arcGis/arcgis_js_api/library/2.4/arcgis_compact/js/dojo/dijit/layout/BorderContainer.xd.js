/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit.layout.BorderContainer"],["require","dijit.layout._LayoutWidget"],["require","dojo.cookie"],["require","dijit._Templated"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit.layout.BorderContainer"]){_4._hasResource["dijit.layout.BorderContainer"]=true;_4.provide("dijit.layout.BorderContainer");_4.require("dijit.layout._LayoutWidget");_4.require("dojo.cookie");_4.require("dijit._Templated");_4.declare("dijit.layout.BorderContainer",_5.layout._LayoutWidget,{design:"headline",gutters:true,liveSplitters:true,persist:false,baseClass:"dijitBorderContainer",_splitterClass:"dijit.layout._Splitter",postMixInProperties:function(){if(!this.gutters){this.baseClass+="NoGutter";}this.inherited(arguments);},startup:function(){if(this._started){return;}_4.forEach(this.getChildren(),this._setupChild,this);this.inherited(arguments);},_setupChild:function(_7){var _8=_7.region;if(_8){this.inherited(arguments);_4.addClass(_7.domNode,this.baseClass+"Pane");var _9=this.isLeftToRight();if(_8=="leading"){_8=_9?"left":"right";}if(_8=="trailing"){_8=_9?"right":"left";}if(_8!="center"&&(_7.splitter||this.gutters)&&!_7._splitterWidget){var _a=_4.getObject(_7.splitter?this._splitterClass:"dijit.layout._Gutter");var _b=new _a({id:_7.id+"_splitter",container:this,child:_7,region:_8,live:this.liveSplitters});_b.isSplitter=true;_7._splitterWidget=_b;_4.place(_b.domNode,_7.domNode,"after");_b.startup();}_7.region=_8;}},layout:function(){this._layoutChildren();},addChild:function(_c,_d){this.inherited(arguments);if(this._started){this.layout();}},removeChild:function(_e){var _f=_e.region;var _10=_e._splitterWidget;if(_10){_10.destroy();delete _e._splitterWidget;}this.inherited(arguments);if(this._started){this._layoutChildren();}_4.removeClass(_e.domNode,this.baseClass+"Pane");_4.style(_e.domNode,{top:"auto",bottom:"auto",left:"auto",right:"auto",position:"static"});_4.style(_e.domNode,_f=="top"||_f=="bottom"?"width":"height","auto");},getChildren:function(){return _4.filter(this.inherited(arguments),function(_11){return !_11.isSplitter;});},getSplitter:function(_12){return _4.filter(this.getChildren(),function(_13){return _13.region==_12;})[0]._splitterWidget;},resize:function(_14,_15){if(!this.cs||!this.pe){var _16=this.domNode;this.cs=_4.getComputedStyle(_16);this.pe=_4._getPadExtents(_16,this.cs);this.pe.r=_4._toPixelValue(_16,this.cs.paddingRight);this.pe.b=_4._toPixelValue(_16,this.cs.paddingBottom);_4.style(_16,"padding","0px");}this.inherited(arguments);},_layoutChildren:function(_17,_18){if(!this._borderBox||!this._borderBox.h){return;}var _19=_4.map(this.getChildren(),function(_1a,idx){return {pane:_1a,weight:[_1a.region=="center"?Infinity:0,_1a.layoutPriority,(this.design=="sidebar"?1:-1)*(/top|bottom/.test(_1a.region)?1:-1),idx]};},this);_19.sort(function(a,b){var aw=a.weight,bw=b.weight;for(var i=0;i<aw.length;i++){if(aw[i]!=bw[i]){return aw[i]-bw[i];}}return 0;});var _1b=[];_4.forEach(_19,function(_1c){var _1d=_1c.pane;_1b.push(_1d);if(_1d._splitterWidget){_1b.push(_1d._splitterWidget);}});var dim={l:this.pe.l,t:this.pe.t,w:this._borderBox.w-this.pe.w,h:this._borderBox.h-this.pe.h};_5.layout.layoutChildren(this.domNode,dim,_1b,_17,_18);},destroyRecursive:function(){_4.forEach(this.getChildren(),function(_1e){var _1f=_1e._splitterWidget;if(_1f){_1f.destroy();}delete _1e._splitterWidget;});this.inherited(arguments);}});_4.extend(_5._Widget,{region:"",layoutPriority:0,splitter:false,minSize:0,maxSize:Infinity});_4.declare("dijit.layout._Splitter",[_5._Widget,_5._Templated],{live:true,templateString:"<div class=\"dijitSplitter\" dojoAttachEvent=\"onkeypress:_onKeyPress,onmousedown:_startDrag,onmouseenter:_onMouse,onmouseleave:_onMouse\" tabIndex=\"0\" role=\"separator\"><div class=\"dijitSplitterThumb\"></div></div>",postMixInProperties:function(){this.inherited(arguments);this.horizontal=/top|bottom/.test(this.region);this._factor=/top|left/.test(this.region)?1:-1;this._cookieName=this.container.id+"_"+this.region;},buildRendering:function(){this.inherited(arguments);_4.addClass(this.domNode,"dijitSplitter"+(this.horizontal?"H":"V"));if(this.container.persist){var _20=_4.cookie(this._cookieName);if(_20){this.child.domNode.style[this.horizontal?"height":"width"]=_20;}}},_computeMaxSize:function(){var dim=this.horizontal?"h":"w",_21=_4.marginBox(this.child.domNode)[dim],_22=_4.filter(this.container.getChildren(),function(_23){return _23.region=="center";})[0],_24=_4.marginBox(_22.domNode)[dim];return Math.min(this.child.maxSize,_21+_24);},_startDrag:function(e){if(!this.cover){this.cover=_4.doc.createElement("div");_4.addClass(this.cover,"dijitSplitterCover");_4.place(this.cover,this.child.domNode,"after");}_4.addClass(this.cover,"dijitSplitterCoverActive");if(this.fake){_4.destroy(this.fake);}if(!(this._resize=this.live)){(this.fake=this.domNode.cloneNode(true)).removeAttribute("id");_4.addClass(this.domNode,"dijitSplitterShadow");_4.place(this.fake,this.domNode,"after");}_4.addClass(this.domNode,"dijitSplitterActive dijitSplitter"+(this.horizontal?"H":"V")+"Active");if(this.fake){_4.removeClass(this.fake,"dijitSplitterHover dijitSplitter"+(this.horizontal?"H":"V")+"Hover");}var _25=this._factor,_26=this.horizontal,_27=_26?"pageY":"pageX",_28=e[_27],_29=this.domNode.style,dim=_26?"h":"w",_2a=_4.marginBox(this.child.domNode)[dim],max=this._computeMaxSize(),min=this.child.minSize||20,_2b=this.region,_2c=_2b=="top"||_2b=="bottom"?"top":"left",_2d=parseInt(_29[_2c],10),_2e=this._resize,_2f=_4.hitch(this.container,"_layoutChildren",this.child.id),de=_4.doc;this._handlers=(this._handlers||[]).concat([_4.connect(de,"onmousemove",this._drag=function(e,_30){var _31=e[_27]-_28,_32=_25*_31+_2a,_33=Math.max(Math.min(_32,max),min);if(_2e||_30){_2f(_33);}_29[_2c]=_31+_2d+_25*(_33-_32)+"px";}),_4.connect(de,"ondragstart",_4.stopEvent),_4.connect(_4.body(),"onselectstart",_4.stopEvent),_4.connect(de,"onmouseup",this,"_stopDrag")]);_4.stopEvent(e);},_onMouse:function(e){var o=(e.type=="mouseover"||e.type=="mouseenter");_4.toggleClass(this.domNode,"dijitSplitterHover",o);_4.toggleClass(this.domNode,"dijitSplitter"+(this.horizontal?"H":"V")+"Hover",o);},_stopDrag:function(e){try{if(this.cover){_4.removeClass(this.cover,"dijitSplitterCoverActive");}if(this.fake){_4.destroy(this.fake);}_4.removeClass(this.domNode,"dijitSplitterActive dijitSplitter"+(this.horizontal?"H":"V")+"Active dijitSplitterShadow");this._drag(e);this._drag(e,true);}finally{this._cleanupHandlers();delete this._drag;}if(this.container.persist){_4.cookie(this._cookieName,this.child.domNode.style[this.horizontal?"height":"width"],{expires:365});}},_cleanupHandlers:function(){_4.forEach(this._handlers,_4.disconnect);delete this._handlers;},_onKeyPress:function(e){this._resize=true;var _34=this.horizontal;var _35=1;var dk=_4.keys;switch(e.charOrCode){case _34?dk.UP_ARROW:dk.LEFT_ARROW:_35*=-1;case _34?dk.DOWN_ARROW:dk.RIGHT_ARROW:break;default:return;}var _36=_4._getMarginSize(this.child.domNode)[_34?"h":"w"]+this._factor*_35;this.container._layoutChildren(this.child.id,Math.max(Math.min(_36,this._computeMaxSize()),this.child.minSize));_4.stopEvent(e);},destroy:function(){this._cleanupHandlers();delete this.child;delete this.container;delete this.cover;delete this.fake;this.inherited(arguments);}});_4.declare("dijit.layout._Gutter",[_5._Widget,_5._Templated],{templateString:"<div class=\"dijitGutter\" role=\"presentation\"></div>",postMixInProperties:function(){this.inherited(arguments);this.horizontal=/top|bottom/.test(this.region);},buildRendering:function(){this.inherited(arguments);_4.addClass(this.domNode,"dijitGutter"+(this.horizontal?"H":"V"));}});}}};});