/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */

window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","esri.dijit.PopupMobile"],["require","esri.InfoWindowBase"],["require","esri.PopupBase"],["require","esri.dijit.NavigationBar"],["require","esri.dijit.InfoView"],["require","dojo.number"],["require","dojo.date.locale"],["require","dojox.charting.Chart2D"],["require","dojox.charting.themes.PlotKit.base"],["require","dojox.charting.action2d.Tooltip"],["require","dojo.i18n"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["esri.dijit.PopupMobile"]){_4._hasResource["esri.dijit.PopupMobile"]=true;_4.provide("esri.dijit.PopupMobile");_4.require("esri.InfoWindowBase");_4.require("esri.PopupBase");_4.require("esri.dijit.NavigationBar");_4.require("esri.dijit.InfoView");_4.require("dojo.number");_4.require("dojo.date.locale");_4.require("dojox.charting.Chart2D");_4.require("dojox.charting.themes.PlotKit.base");_4.require("dojox.charting.action2d.Tooltip");_4.require("dojo.i18n");(function(){var dc=_6.charting,pk=dc.themes.PlotKit;pk.popup=pk.base.clone();pk.popup.chart.fill=pk.popup.plotarea.fill="#e7eef6";pk.popup.colors=["#284B70","#702828","#5F7143","#F6BC0C","#382C6C","#50224F","#1D7554","#4C4C4C","#0271AE","#706E41","#446A73","#0C3E69","#757575","#B7B7B7","#A3A3A3"];pk.popup.series.stroke.width=1;pk.popup.marker.stroke.width=1;}());_4.declare("esri.dijit.PopupMobile",[esri.InfoWindowBase,esri.PopupBase],{offsetX:3,offsetY:3,zoomFactor:4,marginLeft:10,marginTop:10,highlight:true,popupNavigationBar:null,popupInfoView:null,location:null,xIcon:_4.moduleUrl("esri.dijit","./images/whitex.png"),dArrowIcon:_4.moduleUrl("esri.dijit","./images/whitedown.png"),lArrowIcon:_4.moduleUrl("esri.dijit","./images/whitel.png"),rArrowIcon:_4.moduleUrl("esri.dijit","./images/whiter.png"),constructor:function(_7,_8){this.initialize();_4.mixin(this,_7);this.domNode=_4.byId(_8);var _9=this._nls=_4.mixin({},esri.bundle.widgets.popup);var _a=this.domNode;_4.addClass(_a,"esriPopupMobile");var _b="<div class='sizer'>"+"<div class='titlePane'>"+"<div class='spinner hidden'>"+"</div>"+"<div class='title'></div>"+"<div style='text-align:center'>"+"<div class='titleButton prev hidden'></div>"+"<div class='footer' style='display:inline-block;width:60px;height:15px;'></div>"+"<div class='titleButton next hidden'></div>"+"</div>"+"<div class='titleButton close'></div>"+"<div class='titleButton arrow hidden'></div>"+"</div>"+"</div>"+"<div class='pointer top hidden'></div>"+"<div class='pointer bottom hidden'></div>";_4.attr(_a,"innerHTML",_b);var _c=_4.query(".titlePane",_a)[0];this._arrowButton=_4.query(".arrow",_c)[0];this._pointerTop=_4.query(".top",_a)[0];this._pointerBottom=_4.query(".bottom",_a)[0];this._title=_4.query(".title",_c)[0];this._footer=_4.query(".footer",_c)[0];this._prev=_4.query(".prev",_c)[0];this._next=_4.query(".next",_c)[0];this._spinner=_4.query(".spinner",_c)[0];this._eventConnections=[_4.connect(_4.query(".close",_c)[0],"onclick",this,this.hide),_4.connect(this._arrowButton,"onclick",this,this._toggleView),_4.connect(this._prev,"onclick",this,function(){this.selectPrevious();this._updateUI();}),_4.connect(this._next,"onclick",this,function(){this.selectNext();this._updateUI();})];this._initPopupNavigationBar();this._initPopupInfoView();esri.hide(_a);this.isShowing=false;},setMap:function(_d){this.inherited(arguments);if(this.highlight){this.enableHighlight(_d);}},unsetMap:function(){this.disableHighlight(this.map);this.inherited(arguments);},setTitle:function(_e,_f){this.destroyDijits(this._title);this.place(_e,this._title);this.destroyDijits(this._footer);this.place(_f,this._footer);if(this.isShowing){this.startupDijits(this._title);this.startupDijits(this._footer);}},setContent:function(_10){this.destroyDijits(this._contentPane);this.place(_10,this._contentPane);this.startupDijits(this._contentPane);},show:function(_11){if(!_11){esri.show(this.domNode);this.isShowing=true;return;}var map=this.map,_12;if(_11.spatialReference){this._location=_11;_12=map.toScreen(_11);}else{this._location=map.toMap(_11);_12=_11;}if(this._maximized){this.restore();}else{this._setPosition(_12);}if(!this.isShowing){esri.show(this.domNode);this.isShowing=true;this.onShow();}},hide:function(){if(this.isShowing){esri.hide(this.domNode);this.isShowing=false;this.onHide();}},onShow:function(){this._followMap();this.startupDijits(this._title);this.showHighlight();},onHide:function(){this._unfollowMap();this.hideHighlight();},destroy:function(){if(this.map){this.unsetMap();}this.cleanup();if(this.isShowing){this.hide();}this.destroyDijits(this._title);this.destroyDijits(this._footer);_4.forEach(this._eventConnections,_4.disconnect);_4.destroy(this.domNode);},selectNext:function(){this.select(this.selectedIndex+1);},selectPrevious:function(){this.select(this.selectedIndex-1);},setFeatures:function(){this.inherited(arguments);this._updateUI();},onSetFeatures:function(){},onClearFeatures:function(){this.setTitle("&nbsp;","&nbsp;");_4.addClass(this._arrowButton,"hidden");this._updateUI();this.hideHighlight();},onSelectionChange:function(){var ptr=this.selectedIndex;this._updateUI();if(ptr>=0){this.setContent(this.features[ptr].getContent());this.updateHighlight(this.map,this.features[ptr]);if(this.isShowing){this.showHighlight();}}},onDfdComplete:function(){this._updateUI();},_followMap:function(){this._unfollowMap();var map=this.map;this._handles=[_4.connect(map,"onPanStart",this,this._onPanStart),_4.connect(map,"onPan",this,this._onPan),_4.connect(map,"onZoomStart",this,this._onZoomStart),_4.connect(map,"onExtentChange",this,this._onExtentChange)];},_unfollowMap:function(){var _13=this._handles;if(_13){_4.forEach(_13,_4.disconnect,_4);this._handles=null;}},_onPanStart:function(){var _14=this.domNode.style;this._panOrigin={left:_14.left,top:_14.top,right:_14.right,bottom:_14.bottom};},_onPan:function(_15,_16){var _17=this._panOrigin,dx=_16.x,dy=_16.y,_18=_17.left,top=_17.top,_19=_17.right,_1a=_17.bottom;if(_18){_18=(parseFloat(_18)+dx)+"px";}if(top){top=(parseFloat(top)+dy)+"px";}if(_19){_19=(parseFloat(_19)-dx)+"px";}if(_1a){_1a=(parseFloat(_1a)-dy)+"px";}_4.style(this.domNode,{left:_18,top:top,right:_19,bottom:_1a});},_onZoomStart:function(){esri.hide(this.domNode);},_onExtentChange:function(_1b,_1c,_1d){if(_1d){esri.show(this.domNode);this.show(this._targetLocation||this._location);this._targetLocation=null;}},_setPosition:function(_1e){var _1f=_1e.x,_20=_1e.y,_21=_4.contentBox(this.map.container),_22=_21.w,_23=_21.h;var _24=0,_25=_20+10,_26=118,_27=18,_28=_22-_27;if(_1f>_27&&_1f<_28){_24=_1f-130;if(_24<0){_24=0;}else{if(_24>_22-260){_24=_22-260;}}}else{if(_1f<=_27){_24=_1f-_27;}else{if(_1f>=_28){_24=(_22-260)+(_1f-_28);}}}if(_1f>118&&_1f<_22-130){_26=118;}else{if(_1f<=118){if(_1f>_27){_26=_1f-12;}else{if(_1f<=_27){_26=6;}}}else{if(_1f>=_22-130){if(_1f<_28){_26=118+_1f-(_22-130);}else{if(_1f>=_28){_26=118+(_28)-(_22-130);}}}}}if(_20<=_23/2){_4.style(this.domNode,{left:_24+"px",top:_25+"px",bottom:null});_4.style(this._pointerTop,{left:_26+"px"});_4.addClass(this._pointerBottom,"hidden");_4.removeClass(this._pointerTop,"hidden");}else{_4.style(this.domNode,{left:_24+"px",top:_25-64+"px",bottom:null});_4.style(this._pointerBottom,{left:_26+"px"});_4.addClass(this._pointerTop,"hidden");_4.removeClass(this._pointerBottom,"hidden");}},_showPointer:function(_29){var _2a=["topLeft","topRight","bottomRight","bottomLeft"];_4.forEach(_2a,function(ptr){if(ptr===_29){_4.query(".pointer."+ptr,this.domNode).removeClass("hidden");}else{_4.query(".pointer."+ptr,this.domNode).addClass("hidden");}},this);},_toggleView:function(){if(!this.popupNavigationBar){this._initPopupNavigationBar();}if(!this.popupInfoView){this._initPopupInfoView();}this.hide();esri.show(this.popupNavigationBar.container);esri.show(this.popupInfoView.container);var _2b="";if(this.selectedIndex>=0){_2b=(this.selectedIndex+1)+" of "+this.features.length;this.setContent(this.features[this.selectedIndex].getContent());}},_handleNavigationBar:function(_2c){this.popupInfoView.animateTo(0);switch(_2c.name){case "CloseButton":esri.hide(this.popupNavigationBar.container);esri.hide(this.popupInfoView.container);this.hide();break;case "ToggleButton":esri.hide(this.popupNavigationBar.container);esri.hide(this.popupInfoView.container);this.show(this._location);break;case "PreviousButton":this.selectPrevious();this._updateUI();break;case "NextButton":this.selectNext();this._updateUI();break;}},_initPopupNavigationBar:function(){var _2d={};_2d.items=[{name:"CloseButton",type:"img",src:this.xIcon,srcAlt:this.xIcon,position:"left"},{name:"Title",type:"span",text:"",position:"center"},{name:"ToggleButton",type:"img",src:this.dArrowIcon,srcAlt:this.dArrowIcon,position:"right",toggleGroup:"toggle"},{name:"PreviousButton",type:"img",src:this.lArrowIcon,srcAlt:this.lArrowIcon,position:"right2",toggleGroup:"previous"},{name:"NextButton",type:"img",src:this.rArrowIcon,srcAlt:this.rArrowIcon,position:"right1",toggleGroup:"next"}];this.popupNavigationBar=new esri.dijit.NavigationBar(_2d,_4.create("div",{},_4.body()));_4.connect(this.popupNavigationBar,"onCreate",this,function(_2e){this._prevFeatureButton=_2e[3]._node;this._nextFeatureButton=_2e[4]._node;});_4.connect(this.popupNavigationBar,"onSelect",this,this._handleNavigationBar);_4.connect(this.popupNavigationBar,"onUnSelect",this,this._handleNavigationBar);this.popupNavigationBar.startup();esri.hide(this.popupNavigationBar.container);},_initPopupInfoView:function(){var _2f={items:[{name:"Navigator",type:"div",text:""},{name:"content",type:"div",text:""},{name:"attachment",type:"div",text:""}]};this.popupInfoView=new esri.dijit.InfoView(_2f,_4.create("div",{},_4.body()));this.popupInfoView.container.setAttribute((document.all?"className":"class"),"esriMobilePopupInfoView");this.popupInfoView.enableTouchScroll();_4.connect(this.popupInfoView,"onCreate",this,function(_30){this._contentPane=_30[1]._node;if(this.selectedIndex>=0){this.setContent(this.features[this.selectedIndex].getContent());}});_4.connect(this.popupInfoView,"onSwipeLeft",this,function(){});_4.connect(this.popupInfoView,"onSwipeRight",this,function(){});this.popupInfoView.startup();},_updateUI:function(){var _31="&nbsp;",_32="&nbsp;",ptr=this.selectedIndex,_33=this.features,_34=this.deferreds,_35=this._prevFeatureButton.parentNode,_36=this._nextFeatureButton.parentNode,_37=this._spinner,_38=this._actionList,nls=this._nls;if(_33&&_33.length>=1){_31=_33[ptr].getTitle();_32=(ptr+1)+" of "+_33.length;_4.removeClass(this._arrowButton,"hidden");if(ptr===0){_4.addClass(_35,"hidden");_4.addClass(this._prev,"hidden");}else{_4.removeClass(_35,"hidden");_4.removeClass(this._prev,"hidden");}if(ptr===_33.length-1){_4.addClass(_36,"hidden");_4.addClass(this._next,"hidden");}else{_4.removeClass(_36,"hidden");_4.removeClass(this._next,"hidden");}}else{_4.addClass(this._arrowButton,"hidden");_4.addClass(_35,"hidden");_4.addClass(_36,"hidden");_4.addClass(this._prev,"hidden");_4.addClass(this._next,"hidden");}this.setTitle(_31,_32);this.popupNavigationBar.getItems()[1]._node.innerHTML=_32;if(_34&&_34.length){_4.removeClass(_37,"hidden");this.setTitle(nls.NLS_searching+"...","&nbsp;");}else{_4.addClass(_37,"hidden");if(!_33||!_33.length){this.setTitle("No Information","&nbsp;");}}}});}}};});