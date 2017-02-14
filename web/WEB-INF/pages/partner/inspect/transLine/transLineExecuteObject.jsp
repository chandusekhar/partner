<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/header_eoms_form.jsp"%>
<%@ page language="java" pageEncoding="UTF-8" %>
<%response.setHeader("cache-control","public"); %>
<script language="javaScript" type="text/javascript"
	src="${app}/scripts/module/partner/ajax.js"></script>
<%@ page language="java"
	import="java.util.*,com.boco.eoms.partner.baseinfo.webapp.form.*;"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'PnrResConfigList.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
    <link rel="stylesheet" type="text/css" href="${app}/deviceManagement/jquery-ui-1.8.14.custom/css/cupertino/jquery-ui-1.8.14.custom.css">
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-ui-1.8.14.custom.min.js"></script>
  <script type="text/javascript">
  var jq=jQuery.noConflict();
  var condition =" where tlInspectFlag=1 ";
  Ext.onReady(function(){
		if("${pnrResConfigForm.resName}"!=""){
			condition = condition+ " and resName like '%"+"${pnrResConfigForm.resName}"+"%'";
		}
		if("${pnrResConfigForm.city}"!=""){
			condition = condition+" and city='"+"${pnrResConfigForm.city}"+"'";
		}
		if("${pnrResConfigForm.country}"!=""){
			condition = condition+" and country='"+"${pnrResConfigForm.country}"+"'";
		}
		if("${pnrResConfigForm.tlWire}"!=""){
			condition = condition+" and tlWire like '%"+"${pnrResConfigForm.tlWire}"+"%'";
		}
		if("${pnrResConfigForm.tlSeg}"!=""){
			condition = condition+" and tlSeg like '%"+"${pnrResConfigForm.tlSeg}"+"%'";
		}
		if("${pnrResConfigForm.tlDis}"!=""){
			condition = condition+" and tlDis like '%"+"${pnrResConfigForm.tlDis}"+"%'";
		}
  		delAllOption("country");
		var city = document.getElementById("city").value;
		var url="<%=request.getContextPath()%>/partner/serviceArea/lines.do?method=changeCity&city="+city;
		Ext.Ajax.request({
			url : url ,
			method: 'POST',
			success: function ( result, request ) { 
				res = result.responseText;
				if(res.indexOf("[{")!=0){
					res = "[{"+result.responseText;
				}
				if(res.indexOf("<\/SCRIPT>")>0){
			  	res = res.substring(res.indexOf("<\/SCRIPT>")+9,res.length);
				}
				var json = eval(res);
				var countyName = "country";
				var arrOptions = json[0].cb.split(",");
				var obj=$(countyName);
				var i=0;
				var j=0;
				for(i=0;i<arrOptions.length;i++){
					var opt=new Option(arrOptions[i+1],arrOptions[i]);
					obj.options[j]=opt;
					var country = "${pnrResConfigForm.country}";
					if(arrOptions[i]==country){
						obj.options[j].selected=true;
					}
					j++;
					i++;
				}
			},
			failure: function ( result, request) { 
				Ext.MessageBox.alert('Failed', '操作失败'+result.responseText); 
			} 
		});
		
		
  });
  
  var checkflag = "false";
	function chooseAll(){	
	   var objs = document.getElementsByName("checkbox11");    
	    if(checkflag=="false"){
	        for(var i=0; i<objs.length; i++){
	           objs[i].checked="checked";
	        } 
	        checkflag="checked";
	    }
	    else if(checkflag=="checked"){ 	    	    
		    for(var i=0; i<objs.length; i++){
		           objs[i].checked=false;
		    } 
		    checkflag="false";
	    }
	}
	
	function delselcar(){
var string="";
 var objName= document.getElementsByName("checkbox11");
        for (var i = 0; i<objName.length; i++){
                if (objName[i].checked==true){ 
                string+=objName[i].value.trim();   
                string+="|";
                }
        }  
        if(confirm("确认要删除吗？")){
        	if(string == null || "" ==  string){
        		alert("请选择要删除的巡检资源");
        		return false;
        	}
		 	location.href="${app}/partner/res/PnrResConfig.do?method=remove&&seldelcar="+string;
		 }else{
		 return false;
		 }
}
  
 function delAllOption(elementid){
         var ddlObj = document.getElementById(elementid);//获取对象
          for(var i=ddlObj.length-1;i>=0;i--){
              ddlObj.remove(i);//firefox不支持ddlCurSelectKey.options.remove(),IE两种均支持
         }	
         
     }
	
//地区、区县连动
function changeCity(con)
		{    
		     delAllOption("country");//地市选择更新后，重新刷新县区
				var city = document.getElementById("city").value;
				var url="<%=request.getContextPath()%>/partner/serviceArea/lines.do?method=changeCity&city="+city;
				Ext.Ajax.request({
					url : url,
					method: 'POST',
					success: function ( result, request ) { 
						res = result.responseText;
						if(res.indexOf("<\/SCRIPT>")>0){
					  		res = res.substring(res.indexOf("<\/SCRIPT>")+9,res.length);
						}
						var json = eval(res);
						var countyName = "country";
						var arrOptions = json[0].cb.split(",");
						var obj=$(countyName);
						var i=0;
						var j=0;
						for(i=0;i<arrOptions.length;i++){
							var opt=new Option(arrOptions[i+1],arrOptions[i]);
							obj.options[j]=opt;
							j++;
							i++;
						}
					},
					failure: function ( result, request) { 
						Ext.MessageBox.alert('Failed', '操作失败'+result.responseText); 
					} 
				});
		}	

var myjs=jQuery.noConflict();
	function openImport(handler){
		var el = Ext.get('listQueryObject');
		if(el.isVisible()){
			el.slideOut('t',{useDisplay:true});
			handler.innerHTML = "打开查询界面";
		}
		else{
			el.slideIn();
			handler.innerHTML = "关闭查询界面";
		}
	}

function condition1(){
	//先判断条件查询中，是不是按未分配查询的
	var obj = "${assign}";
	if("no"!=obj){
		alert("按查询条件分配执行对象时，查询条件必须为未分配！");
		return;
	}
    
     var _sHeight = 530;
        var _sWidth = 480;
        var sTop=(window.screen.availHeight-_sHeight)/2;
        var sLeft=(window.screen.availWidth-_sWidth)/2;
        var sFeatures="dialogHeight: "+_sHeight+"px; dialogWidth: "+_sWidth+"px; dialogTop: "+sTop+"; dialogLeft: "+sLeft+"; center: Yes; scroll:Yes;help: No; resizable: No; status: No;";
    
    var url ="${app}/partner/res/PnrResConfig.do?method=window";
    //var popupWin = window.open('',   'preview_page',   'height=530, width=480, toolbar=no ,top=100,left=400, menubar=no, scrollbars=no, resizable=no, location=no, status=no');   
    //var pro=window.showModalDialog(url,window,'dialogHeight:230px,dialogWidth:260px,center:yes,100px,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
    var pro =  window.showModalDialog(url,window,sFeatures);
    if(pro==null){
    	return;
    }
    Ext.Ajax.request({
    	method:"post",
		url: "${app}/partner/res/PnrResConfig.do?method=addAllExecuteObject",
		params:{
			seldelcar:condition,
			prov:pro
		},
		success: function(x){
			//刷新父页面
			//document.URL=location.href;
			alert("分配成功");	
			//window.close();
			//window.location.reload();
			window.location.href=window.location.href;
		}
    
    });
    
    
    
    
    
}

function calcle1(){
	 var string="";
	 var objName= document.getElementsByName("checkbox11");
	        for (var i = 0; i<objName.length; i++){
	                if (objName[i].checked==true){ 
	                string+=objName[i].value.trim();   
	                string+="|";
	                }
	        } 
	 if(string==""){
	 	alert("请选择资源");
	 	return ;
	 }
	 if(confirm("确定取消关联所选项？")==1){
		 Ext.Ajax.request({
	    	method:"post",
			url: "${app}/partner/res/pnrTransLineAction.do?method=calcleExecuteObject",
			params:{
				ids:string
			},
			success: function(x){
				//刷新父页面
				alert("取消成功");	
				window.location.href=window.location.href;
			}
	    
	    });
	}
} 

function relation1(){
	 var string="";
	 var flag = 'true';  //表示所有的都没有分配执行对象
	 var objName= document.getElementsByName("checkbox11");
	        for (var i = 0; i<objName.length; i++){
	                if (objName[i].checked==true){ 
	                string+=objName[i].value.trim();   
	                string+="|";
	                if(document.getElementById(objName[i].value).value!=''){
	                	alert("部分所选资源已选分配代维公司，必须先取消再分配！");
	                	return;
	                }
	                }
	        } 
	        if(string==""){
	        	alert("请选择资源！");
	        	return;
	        }
	  var _sHeight = 500;
        var _sWidth = 480;
        var sTop=(window.screen.availHeight-_sHeight)/2;
        var sLeft=(window.screen.availWidth-_sWidth)/2;
        var sFeatures="dialogHeight: "+_sHeight+"px; dialogWidth: "+_sWidth+"px; dialogTop: "+sTop+"; dialogLeft: "+sLeft+"; center: Yes; scroll:Yes;help: No; resizable: No; status: No;";
	       
	 
    var url ="${app}/partner/res/PnrResConfig.do?method=window";
    var pro= window.showModalDialog(url,window,sFeatures); 
    if(pro==null){
    	return;
    }
    Ext.Ajax.request({
    	method:"post",
		url: "${app}/partner/res/PnrResConfig.do?method=addExecuteObject",
		params:{
			seldelcar:string,
			prov:pro
		},
		success: function(x){
			//刷新父页面
			//document.URL=location.href;
			alert("分配成功");	
			//window.close();
			//window.location.reload();
			window.location.href=window.location.href;
		}
    
    });
    //oForm.submit();
}

function resetMsg(){
	myjs(".text").val('');
	myjs(".select").val('');
	changeCity('')
}

  </script>
  
  <body>
  <div style="border:1px solid #98c0f4;padding:5px;"
	 class="x-layout-panel-hd"><img
	 src="${app}/images/icons/search.gif"
	 align="absmiddle"
	 style="cursor:pointer" /> 
	<span id="openQuery" style="cursor:pointer" onclick="openImport(this);">查询</span>
</div>

<div id="listQueryObject" 
	 style="display:none;border:1px solid #98c0f4;border-top:0;padding:5px;background-color:#eff6ff;">
  <form action="${app}/partner/res/pnrTransLineAction.do?method=assignCheck" method="post" >
   <table class="listTable">
			<tr>
					<td class="label">资源名称</td>
					<td class="content">
						<html:text property="resName" styleId="car_number" 
							styleClass="text medium" alt="allowBlank:false,vtext:''"
							value="${pnrResConfigForm.resName}" />
					</td>
					<td class="label">区域</td>
					<td class="content">
						<html:text property="tlDis" styleId="car_number"
							styleClass="text medium" alt="allowBlank:false,vtext:''"
							value="${pnrResConfigForm.tlDis}" />
					</td>
					<tr>
					<td class="label">光缆系统</td>
					<td class="content">
						<html:text property="tlWire" styleId="car_number"
							styleClass="text medium" alt="allowBlank:false,vtext:''"
							value="${pnrResConfigForm.tlWire}" />
					</td>
					<td class="label">光缆段</td>
					<td class="content">
						<html:text property="tlSeg" styleId="car_number"
							styleClass="text" alt="allowBlank:false,vtext:''"
							value="${pnrResConfigForm.tlSeg}" />
					</td>
				</tr>
					
					<td class="label">地市</td>
					<td class="content">
					<select name="city" id="city" class="select" alt="allowBlank:false,vtext:'请选择所在地市'" onchange="changeCity(0);">
					<option value="">
						--请选择所在地市--
					</option>
					<logic:iterate id="city" name="city">
						<c:if test="${pnrResConfigForm.city==city.areaid}" var="result">
							<option value="${city.areaid}" selected="selected" >
								${city.areaname}
							</option>
						</c:if>
						<c:if test="${!result}">
							<option value="${city.areaid}" >
								${city.areaname}
							</option>
						</c:if>
					</logic:iterate>
				</select>
					</td>
					<td class="label">区县</td>
					<td class="content">
						<select name="country" id="country" class="select"
							alt="allowBlank:false,vtext:'请选择所在县区'">
							<option value="">
								--请选择所在县区--
							</option>				
						</select>
					</td>
				</tr>

				
				<tr>
					<%--
					<td class="label">区县</td>
					<td class="content">
						<select name="country" id="country" class="select"
							alt="allowBlank:false,vtext:'请选择所在县区'">
							<option value="">
								--请选择所在县区--
							</option>				
						</select>
					</td>
					 --%>
					<td class="label">资源分配情况</td>
					<td class="content">
						<select  class="select"  name="assign">
							<option value="all">所有</option>
							<option value="no" <c:if test="${assign eq 'no' }">selected="selected"</c:if>>未分配</option>
							<option value="yes" <c:if test="${assign eq 'yes' }">selected="selected"</c:if>>已分配</option>
						</select>
					</td>
					<td class="label"></td>
					 <td class="content"></td>
				</tr>
		</table> 
		<table>
		    <tr>
			    <td>
			    	<input type="submit" class="btn" value="<fmt:message key="button.query"/>" />&nbsp;&nbsp;
			    	<input type="button" value="重置" class="btn" onclick="resetMsg();">
				</td>
			</tr>
		</table>	
	</form>	
	</div>
	
	<br/>
	<input type="button" value="关联所选项" id="relation" class="btn" onclick="relation1()" />		 
	<input type="button" value="按查询条件分配" id="condition" class="btn" onclick="condition1()" /> 
	<input type="button" value="取消关联所选项" id="calcle" class="btn" onclick="calcle1()" /> 
	<input type="hidden" id="executeObject" name="seldelcar" /> 
	<input type="hidden" name="assing2" value="${assign }" />	
	<input type="hidden" id="executeObject" name="seldelcar" /> 
	<html:form action="PnrResConfig" method="post" >
			    
	<display:table name="list" cellspacing="0" cellpadding="0"
		id="list" pagesize="${pageSize}" class="table list" 
		export="false" 
		requestURI="${app}/partner/res/pnrTransLineAction.do"
		sort="list" partialList="true" size="${resultSize}">
	
		<display:column  title="<input type='checkbox' onclick='javascript:chooseAll();'>" >
        	<input type="checkbox" name="checkbox11" id="${list.id}a"  value="${list.id}" />
    	</display:column>
	
		<display:column property="resName" sortable="true"  title="资源名称"
				headerClass="sortable"  paramId="id" paramProperty="id"/>
				
		<display:column  sortable="true"  title="区域"
				headerClass="sortable" >
				${list.tlDis }
		</display:column>
		
		<display:column  sortable="true"  title="光缆系统"
				headerClass="sortable" >
				${list.tlWire }
		</display:column>
		
		<display:column  sortable="true"  title="光缆段"
				headerClass="sortable" >
				${list.tlSeg }
		</display:column>
		
		 		
		<display:column  sortable="true"  title="所在地市"
				headerClass="sortable" >
				<eoms:id2nameDB id="${list.city}" beanId="tawSystemAreaDao" />
		</display:column>
				
		<display:column  sortable="区县" title="所在区县"
				headerClass="sortable"  >
			<eoms:id2nameDB id="${list.country}" beanId="tawSystemAreaDao" />
		</display:column>
		
		<display:column  sortable="区县" title="系统级别"
				headerClass="sortable"  >
			${list.tlSystemLevel }
		</display:column>
				
		<display:column  sortable="区县" title="起点名字"
				headerClass="sortable"  >
			${list.tlPAName }
		</display:column>
				
		<display:column  sortable="区县" title="起点经度"
				headerClass="sortable"  >
			${list.tlPALo }
		</display:column>
				
		<display:column  sortable="" title="起点纬度"
				headerClass="tlPALa"  >
			${list.tlPALa }
		</display:column>
				
		<display:column  sortable="" title="终点名字"
				headerClass="sortable"  >
			${list.tlPZName }
		</display:column>
		
		<display:column  sortable="" title="终点经度"
				headerClass="sortable"  >
			${list.tlPZLo }
		</display:column>
				
		<display:column  sortable="" title="终点纬度"
				headerClass="sortable"  >
			${list.tlPZLa }
		</display:column>
		
		<display:column  sortable="true"  title="代维公司"
				headerClass="sortable"  paramId="id" paramProperty="id">
				<font color="red"><eoms:id2nameDB id="${list.executeObject}" beanId="partnerDeptDao" /></font>
				<input name="resId" type="hidden" id="${list.id}" value="${list.executeObject}" />
		</display:column>
		<display:column sortable="true"  title="巡检周期"
				headerClass="sortable"  paramId="id" paramProperty="id">
				<font color="red">${cycleMap[list.inspectCycle]}</font>
		</display:column>
		
	<display:setProperty name="export.rtf" value="false" />
	<display:setProperty name="export.pdf" value="false" />
	<display:setProperty name="export.xml" value="false" />
	<display:setProperty name="export.csv" value="false" />			
	</display:table>
	<br>
	</html:form>
	<br/>
	
  </div>
	
  </body>
</html>