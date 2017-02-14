<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/header_eoms_form.jsp"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page language="java"
	import="java.util.*,com.boco.eoms.partner.personnel.webapp.form.*;"%>
	<script type="text/javascript">
		<!--
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
			function add(){
				location.href="${app}/personnel/pxExperience.do?method=getjsp&operationType=toadd&workerid=${workerid}&workername=${workername}";
			}
			function del(){
				var string="";
				var objName= document.getElementsByName("checkbox11");
		        for (var i = 0; i<objName.length; i++){
		                if (objName[i].checked==true){ 
		                string+=objName[i].value;   
		                string+="|";
		                }
		        }  
	        	if(string == null || "" ==  string){
	        		alert("请选择要删除的培训经历信息");
	        		return false;
	        	}
		        if(confirm("确认要删除吗？")){
				 	location.href="${app}/personnel/pxExperience.do?method=remove&selectids="+string;
				 }else{
				 	return false;
				 }
			}
		//-->
		</script>
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-1.5.1.min.js"></script>
<script type="text/javascript">
<!--
	jQuery.noConflict(); 
	jQuery(function($){  
		$("#reset").click(function(){
			$("#select_from input[type='text']").each(function(){
				$(this).val(null);
			})
		})
	}); 
//-->
</script>
<script type="text/javascript">
	function openImport(){
		var handler = document.getElementById("openQuery");
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
	function res(){
		var formElement=document.getElementById("select_from")
	   	 var inputs = formElement.getElementsByTagName('input');
	   	 var selects =formElement.getElementsByTagName('select');
	     for(var i=0;i<inputs.length;i++){
	         if(inputs[i].type == 'text'){
	              inputs[i].value = '';
	         }
     	}
     	 for(var i=0;i<selects.length;i++){
	         if(selects[i].type == 'select-one'){
	              selects[i].options[0].selected = true;
	         }
     	}
	}
</script>
<div align="center"><b>人员培训经历管理-人员培训经历列表</div><br><br/>
<div style="border:1px solid #98c0f4;padding:5px;background-color: #CAE8EA;cursor:pointer" onclick="openImport();"  class="x-layout-panel-hd">
	<img src="${app}/images/icons/search.gif" align="absmiddle" style="cursor:pointer" /> 
	<span id="openQuery" style="cursor:pointer" >查询</span>
</div>
<div id="listQueryObject" style="border:1px solid #98c0f4;border-top:0;padding:5px;background-color:#eff6ff" >
	<form id="select_from" action="${app}/personnel/pxExperience.do?method=searchCompanyPxExperienceList" method="post">
		<table class="listTable" >
			<tr>		
				<td class="label">培训起始时间</td>
				<td class="content" >
					<input type="text"  id="starttimeStringGreaterOrEqual" name="starttimeStringGreaterOrEqual" class="text medium" 
					onclick="popUpCalendar(this, this,'yyyy-mm-dd hh:ii:ss',null,null,false,-1);"  readonly="true"  value="${starttimeStringGreaterOrEqual}"/>
					<span>至</span>
					<input type="text"  id="starttimeStringLessOrEqual" name="starttimeStringLessOrEqual" class="text medium" 
					onclick="popUpCalendar(this, this,'yyyy-mm-dd hh:ii:ss',null,null,false,-1);"  readonly="true"   value="${starttimeStringLessOrEqual}"/>
					</td>
				</tr>
				<tr>
				<td class="label">培训结束时间</td>
				<td class="content"  colspan="3">
					<input type="text"  id="endtimeStringGreaterOrEqual" name="endtimeStringGreaterOrEqual" class="text medium" 
					onclick="popUpCalendar(this, this,'yyyy-mm-dd hh:ii:ss',null,null,false,-1);"  readonly="true"  value="${endtimeStringGreaterOrEqual}"/>
					<span>至</span>
					<input type="text"  id="endtimeStringLessOrEqual" name="endtimeStringLessOrEqual" class="text medium" 
					onclick="popUpCalendar(this, this,'yyyy-mm-dd hh:ii:ss',null,null,false,-1);"  readonly="true"   value="${endtimeStringLessOrEqual}"/>
					</td>
					</tr>
						<tr>
						<td class="label">培训内容</td>
						<td class="content" >
								<input type="text"  id="content" name="contentStringLike" class="text medium"  value="${contentStringLike}"/>
					</tr>
						<tr>
						<td class="label">人员姓名</td>
						<td><input type="text" name="workernameStringLike" class="text" value="${workernameStringLike }"/></td>
					</tr>
			</table>
			<table >
				<tr>
					<td>
						<input type="submit" class="btn" value="查询" />
						<input type="button"   class="btn" id="reset" value="重置" onclick="res();">
					     <input type="hidden" value="tomgr" name = "operationType"/>
					     <input type="hidden" value="${personCardNo}" name = "personCardNo"/>
					
					</td>
				</tr>
			</table>
	</form>	
	</div>
	<display:table name="pxExperienceList" cellspacing="0" cellpadding="0"
		id="pxExperienceList" pagesize="${pageSize}" class="table"
		export="true" requestURI="${app}/personnel/pxExperience.do?method=search"
		sort="list" partialList="true" size="${resultSize }">
		
		<display:column  title="<input type='checkbox' onclick='javascript:chooseAll();'>" media="html" >
	         <input type="checkbox" name="checkbox11" value="<c:out value='${pxExperienceList.id}'/>" >
	    </display:column>
	<c:if test="${empty workerid}">    
	    <display:column property="workername" sortable="true" headerClass="sortable" title="员工姓名"/>
	 	<display:column property="workerid" sortable="true" headerClass="sortable" title="员工ID"/>
	</c:if>
		<display:column property="sysno" sortable="true" headerClass="sortable" title="系统编号"/>
	    <display:column property="starttime" sortable="true" headerClass="sortable" title="开始时间"/>
	    <display:column property="endtime" sortable="true" headerClass="sortable" title="结束时间"/>
	    <display:column property="days" sortable="true" headerClass="sortable" title="培训天数"/>
	    <display:column property="content" sortable="true" headerClass="sortable" title="培训内容" maxLength="16"/>
	    <display:column property="score" sortable="true" headerClass="sortable" title="成绩"/>
	    <display:column sortable="true" headerClass="sortable" title="修改" media="html">					 
			<a id="${pxExperienceList.id}"
			   href="${app}/personnel/pxExperience.do?method=getjsp&operationType=toedit&id=${pxExperienceList.id}&workerid=${workerid}&workername=${workername}">
				<img src="${app }/images/icons/edit.gif">
			</a>			
	 	</display:column>	
	 	<display:column sortable="true" headerClass="sortable" title="详细" media="html" >					 
				<a   href="${app}/personnel/pxExperience.do?method=getDetail&id=${pxExperienceList.id}&personCardNo=${personCardNo}">
					<img src="${app }/images/icons/table.gif">
				</a>			
		</display:column>
		  <display:setProperty name="export.rtf" value="false" />
		<display:setProperty name="export.pdf" value="false" />
		<display:setProperty name="export.xml" value="false" />
		<display:setProperty name="export.csv" value="false" />
	</display:table>
	<br>
		<input class="button" type="button" onclick="add()" value="添加"/>
		<input type="button" class="btn" value="刷新" onclick="javascript:window.location.href='<%=request.getContextPath()%>/personnel/pxExperience.do?method=search&operationType=tomgr&personCardNo=${personCardNo}'"/>
		<c:if test="${!empty pxExperienceList}">
			<input class="button" type="button" onclick="del()" value="删除"/>
		</c:if>
<%@ include file="/common/footer_eoms.jsp"%>