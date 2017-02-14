/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/


window[esri._dojoScopeName||"dojo"]._xdResourceLoaded(function(_1,_2,_3){return {depends:[["provide","dijit._PaletteMixin"],["require","dijit._CssStateMixin"]],defineResource:function(_4,_5,_6){if(!_4._hasResource["dijit._PaletteMixin"]){_4._hasResource["dijit._PaletteMixin"]=true;_4.provide("dijit._PaletteMixin");_4.require("dijit._CssStateMixin");_4.declare("dijit._PaletteMixin",[_5._CssStateMixin],{defaultTimeout:500,timeoutChangeRate:0.9,value:null,_selectedCell:-1,tabIndex:"0",cellClass:"dijitPaletteCell",dyeClass:"",_preparePalette:function(_7,_8,_9){this._cells=[];var _a=this._blankGif;_9=_9||_4.getObject(this.dyeClass);for(var _b=0;_b<_7.length;_b++){var _c=_4.create("tr",{tabIndex:"-1"},this.gridNode);for(var _d=0;_d<_7[_b].length;_d++){var _e=_7[_b][_d];if(_e){var _f=new _9(_e,_b,_d);var _10=_4.create("td",{"class":this.cellClass,tabIndex:"-1",title:_8[_e]});_f.fillCell(_10,_a);this.connect(_10,"ondijitclick","_onCellClick");this._trackMouseState(_10,this.cellClass);_4.place(_10,_c);_10.index=this._cells.length;this._cells.push({node:_10,dye:_f});}}}this._xDim=_7[0].length;this._yDim=_7.length;var _11={UP_ARROW:-this._xDim,DOWN_ARROW:this._xDim,RIGHT_ARROW:this.isLeftToRight()?1:-1,LEFT_ARROW:this.isLeftToRight()?-1:1};for(var key in _11){this._connects.push(_5.typematic.addKeyListener(this.domNode,{charOrCode:_4.keys[key],ctrlKey:false,altKey:false,shiftKey:false},this,function(){var _12=_11[key];return function(_13){this._navigateByKey(_12,_13);};}(),this.timeoutChangeRate,this.defaultTimeout));}},postCreate:function(){this.inherited(arguments);this._setCurrent(this._cells[0].node);},focus:function(){_5.focus(this._currentFocus);},_onCellClick:function(evt){var _14=evt.currentTarget,_15=this._getDye(_14).getValue();this._setCurrent(_14);setTimeout(_4.hitch(this,function(){_5.focus(_14);this._setValueAttr(_15,true);}));_4.removeClass(_14,"dijitPaletteCellHover");_4.stopEvent(evt);},_setCurrent:function(_16){if("_currentFocus" in this){_4.attr(this._currentFocus,"tabIndex","-1");}this._currentFocus=_16;if(_16){_4.attr(_16,"tabIndex",this.tabIndex);}},_setValueAttr:function(_17,_18){if(this._selectedCell>=0){_4.removeClass(this._cells[this._selectedCell].node,"dijitPaletteCellSelected");}this._selectedCell=-1;if(_17){for(var i=0;i<this._cells.length;i++){if(_17==this._cells[i].dye.getValue()){this._selectedCell=i;_4.addClass(this._cells[i].node,"dijitPaletteCellSelected");break;}}}this._set("value",this._selectedCell>=0?_17:null);if(_18||_18===undefined){this.onChange(_17);}},onChange:function(_19){},_navigateByKey:function(_1a,_1b){if(_1b==-1){return;}var _1c=this._currentFocus.index+_1a;if(_1c<this._cells.length&&_1c>-1){var _1d=this._cells[_1c].node;this._setCurrent(_1d);setTimeout(_4.hitch(_5,"focus",_1d),0);}},_getDye:function(_1e){return this._cells[_1e.index].dye;}});}}};});