<%@ include file="/common/taglibs.jsp"%>
<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8"
	contentType="text/html;charset=utf-8"%>
<%@ include file="/common/header_eoms_form.jsp"%>

<link rel="stylesheet" type="text/css" href="${app}/deviceManagement/jquery-ui-1.8.14.custom/css/cupertino/jquery-ui-1.8.14.custom.css">

<style type="text/css">
	.trMouseOver {
		cursor:pointer;
	}
	tr.trMouseOver td {
		background-color:#B5BCC7;
	}
</style>

<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-ui-1.8.14.custom.min.js"></script>

<script type="text/javascript">

var jq=jQuery.noConflict();
var siteListJSON = [];
Ext.onReady(function(){
		setSearchConditions();
		parent.Ext.get("left-panel-body").unmask();
		
		siteListJSON = eval('('+'${siteListJSON}'+')');
		jq("#btnShowAllSite").bind("click",showAllSite);
		jq("#btnCleanAllSite").bind("click",cleanAllSite);
		
		if(parent.frames["gis-frame"] != undefined && parent.frames["gis-frame"].document.readyState=="complete") {
			parent.frames["gis-frame"].setAllSiteGraphics(siteListJSON);
		}
		
		function showAllSite(e) {
			//parent.frames["gis-frame"].paramConfig.siteListJSON = siteListJSON;
			parent.frames["gis-frame"].Ext.get("map").mask("正在加载站点，请稍等......");
			parent.frames["gis-frame"].setAllSiteGraphics(siteListJSON);
			parent.frames["gis-frame"].addAllSiteGraphics();
			parent.frames["gis-frame"].Ext.get("map").unmask();
		}
		
		function cleanAllSite(e) {
				parent.frames["gis-frame"].cleanAllSiteGraphics();
		}
		
		pageAdjust();
		//cleanAllSite(null);
		
		
		jq("#siteList tbody tr").bind("mouseover",function(e) {
			jq(this).addClass("trMouseOver");
		});
		
		jq("#siteList tbody tr").bind("mouseout",function(e) {
			jq(this).removeClass("trMouseOver");
		});
		
		jq("#siteList tbody tr").bind("click",function(e) {
			var siteId = jq(this).find("input:hidden").val();
			parent.frames["gis-frame"].locationSite(siteId);
		});
});
//设置查询条件
function setSearchConditions() {
	var paramRegion = "${paramRegion}";
	if(paramRegion != "") {
		setSelectedOptionDefaultValue("region",paramRegion);
		requestCountryOnCityChange();
	}
}
//设置下拉框默认值
function setSelectedOptionDefaultValue(id,value) {
	document.getElementById(id).value = value;
}
//界面修饰
function pageAdjust() {
		var page = jq(".pagelinks");
		var table = jq("#siteList");
		page.remove();
		table.after(page);
		table.after("<br/><br/>");
} 

function openSearch(handler){
	var el = Ext.get('listQueryObject'); 
	if(el.isVisible()){
		el.slideOut('t',{useDisplay:true});
		handler.innerHTML = "打开操作界面";
	}
	else{
		el.slideIn();
		handler.innerHTML = "关闭操作界面";
	}
}

function delAllOption(elementid){
    var ddlObj = document.getElementById(elementid);//获取对象
     for(var i=ddlObj.length-1;i>=0;i--){
         ddlObj.remove(i);//firefox不支持ddlCurSelectKey.options.remove(),IE两种均支持
    }
}

//地市变化 联动县区
function requestCountryOnCityChange() {  
	delAllOption("city");
	var region = document.getElementById("region").value;
	var url="${app}/partner/inspect/ajaxRequest.do?method=requestCountryOnCityChange&region="+region;
	Ext.Ajax.request({
		url : url ,
		method: 'POST',
		success: function ( result, request ) { 
			res = result.responseText;
			var json = eval(res);
			var obj=$("city");
			for(i=0;i<json.length;i++){
				var opt=new Option(json[i].areaName,json[i].areaId);
				obj.options[i]=opt;
			}
			var paramCity = "${paramCity}";
			if(paramCity != "") {
				setSelectedOptionDefaultValue("city",paramCity);
			}
		},
		failure: function ( result, request) { 
			Ext.MessageBox.alert('Failed', '操作失败'+result.responseText); 
		} 
	});
}
</script>

<fmt:bundle basename="com/boco/eoms/partner/net/config/applicationResource-partner-serviceArea">

<div style="border:1px solid #98c0f4;padding:5px;"
	 class="x-layout-panel-hd"><img
	 src="${app}/images/icons/layout_add.png"
	 align="absmiddle"
	 style="cursor:pointer" /> 
	<span id="openQuery" style="cursor:pointer" onclick="openSearch(this);">操作面板</span>
</div>

<div id="listQueryObject" 
	 style="display:block;border:1px solid #98c0f4;border-top:0;padding:5px;background-color:#eff6ff;">
	<form action="gisSiteReq.do?method=showSiteList" method="post" id="searchForm" name="searchForm">
			<fieldset>
			<legend>操作选项</legend>
			<table id="sheet" class="formTable">
				<tr>
					<td colspan="2"><div class="ui-widget-header" >地图操作</div></td>
				</tr>
				
				<tr>
					<td class="label">
						<input type="button" value="本页所有站点" id="btnShowAllSite" class="btn"/> 
					</td>
					<td class="label">
						<input type="button" value="清除本页站点" id="btnCleanAllSite" class="btn"/> 
					</td>
				</tr>
				
				<tr>
					<td colspan="2"><div class="ui-widget-header" >站点查询</div></td>
				</tr>
				
				<tr>
					<td class="label">
						<fmt:message key="site.siteName" />
					</td>
					<td class="content">
						<html:text property="siteName" styleId="siteName"
									styleClass="text medium"
									alt="allowBlank:false,vtext:'',maxLength:32" value="${siteName}"/>
						<span id = "message"></span>			
					</td>
					
				<tr>
					<!-- 所属地市 -->
					<td class="label">
						<fmt:message key="site.region" />:
					</td>
					<td >
						<!-- 地市 -->			
						<select name="region" id="region"
							alt="allowBlank:false,vtext:'请选择所在地市'"
							onchange="requestCountryOnCityChange();">
							<option value="">
								--请选择所在地市--
							</option>
							<logic:present name="region">
							<logic:iterate id="region" name="region">
								<option value="${region.areaid}">
									${region.areaname}
								</option>
							</logic:iterate>
							</logic:present>
						</select>
					</td>
				</tr>
		
				<tr>
					<!-- 所属县区 -->
					<td class="label">
						<fmt:message key="site.city" />
					</td>
					<td>
						<!-- 县区 -->			
						<select name="city" id="city" 
							alt="allowBlank:true,vtext:'请选择所在县区'">
							<option value="">
								--请选择所在县区--
							</option>				
						</select>
					</td>
				</tr>
				
				<tr>
					<td colspan="2">
						<div align="left">
							<input type="submit" class="btn" value="确认查询" />
							&nbsp;&nbsp;&nbsp;
							<input type="button" class="btn" value="查询所有" onclick="window.location.href='${app}/partner/gis/gisSiteReq.do?method=showSiteList'"/>
						</div>
					</td>
				</tr>
			</table>
		</fieldset>
	</form>
</div>

<br/>
<display:table name="siteList" cellspacing="0" cellpadding="0"
	id="siteList" pagesize="${pageSize}" class="table siteList"
	export="false" 
	requestURI="${app}/partner/gis/gisSiteReq.do?method=showSiteList"
	sort="list" partialList="true" size="resultSize"  
	decorator="com.boco.eoms.partner.net.displaytag.support.SiteDisplaytagDecorator">
<center>
	<display:setProperty name="css.table" value="0," />	
	
	
	<display:column media="html" sortable="true" 
			headerClass="sortable" titleKey="site.siteName">
			 ${siteList.siteName }<input type="hidden" id="dataId_${siteList_rowNum }" value="${siteList.id}"/>
	</display:column>

	<display:column property="siteNo" sortable="true"
			headerClass="sortable" titleKey="site.siteNo"  paramId="id" paramProperty="id"/>
	<!-- 所在地市 -->
	<display:column  sortable="true" headerClass="sortable" titleKey="line.region">
		<eoms:id2nameDB id="${siteList.region}" beanId="tawSystemAreaDao" />
	</display:column>			

	<!-- 所在县区 -->
	<display:column  sortable="true" headerClass="sortable" titleKey="line.city">
		<eoms:id2nameDB id="${siteList.city}" beanId="tawSystemAreaDao" />
	</display:column>
	
	<display:column  sortable="true" headerClass="sortable" title="所属网格">
		<eoms:id2nameDB id="${siteList.gridNumber}" beanId="gridDao" /> 
	</display:column>
	<display:column  sortable="true" headerClass="sortable" title="合作伙伴">
		 ${siteList.partnername}  
	</display:column>
	
	<!--<display:column property="longitude" sortable="true"
			headerClass="sortable" titleKey="site.longitude"  paramId="id" paramProperty="id"/>

	<display:column property="latitude" sortable="true"
			headerClass="sortable" titleKey="site.latitude"  paramId="id" paramProperty="id"/>
	
	-->
	
	<%--
	<display:column sortable="true" headerClass="sortable" titleKey="site.siteLevle"  paramId="id" paramProperty="id">
		${siteList.siteLevle}
	</display:column>
	
	<td class="label">
			<fmt:message key="site.grid" />&nbsp;<font color='red'>*</font>
		</td>
		<td class="content">
			<!-- 所属网格 -->
			 <eoms:id2nameDB id="${siteForm.gridNumber}" beanId="gridDao" /> 
		</td>
		<td class="label">
			<fmt:message key="site.provider" />&nbsp;<font color='red'>*</font>
		</td>
		<td class="content">
			<!-- 合作伙伴 -->		
			${siteForm.partnername}
		</td>	
	
	--%>
	<display:column title="操作" headerClass="imageColumn">
		    <a href='${app}/partner/net/sites.do?method=detailWithInspect&siteId=${siteList.id}' target='_blank'>
		           <img src="${app}/images/icons/search.gif"/></a></a>
	</display:column> 
</display:table>
</center>
</fmt:bundle>
<%@ include file="/common/footer_eoms.jsp"%>
