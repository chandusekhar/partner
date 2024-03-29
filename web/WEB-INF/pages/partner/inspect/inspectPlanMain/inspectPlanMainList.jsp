<%@ include file="/common/taglibs.jsp"%>
<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8"
	contentType="text/html;charset=utf-8"%>
<%@ include file="/common/header_eoms_form.jsp"%>

<link rel="stylesheet" type="text/css" href="${app}/deviceManagement/jquery-ui-1.8.14.custom/css/cupertino/jquery-ui-1.8.14.custom.css">

<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-ui-1.8.14.custom.min.js"></script>

<script type="text/javascript">
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
    function commitApprove(id){

        Ext.Ajax.request({
            method:"post",
            url: "${app}/partner/inspect/inspectPlan.do?method=approveInspectPlan2&id="+id,

            success: function(response, options){
                if(response.responseText=='true'){
//                    window.

                    alert("审批成功！");
                    window.location.reload();
                }
            }
        });
//        alert(id);
    }
</script>
	
<div style="border:1px solid #98c0f4;padding:5px;"
	 class="x-layout-panel-hd"><img
	 src="${app}/images/icons/search.gif"
	 align="absmiddle"
	 style="cursor:pointer" /> 
	<span id="openQuery" style="cursor:pointer" onclick="openImport(this);">查询</span>
</div>

<div id="listQueryObject" 
	 style="display:none;border:1px solid #98c0f4;border-top:0;padding:5px;background-color:#eff6ff;">
	<html:form action="inspectPlan.do?method=findInspectPlanMainList" method="post">
		<table id="sheet" class="listTable">
			<tr>		
				<td class="label">计划名称</td>
				<td><input class="text" type="text" name="planNameStringLike"/></td>
				<td class="label">巡检专业</td>
				<td>
					<eoms:comboBox name="specialtyStringEqual" id="specialty" 
					initDicId="11225" alt="allowBlank:false" styleClass="select" />
				</td>
			</tr>
			<tr>		
				<td class="label">
					年度
				</td>
				<td>
					<eoms:dict key="dict-partner-inspect" selectId="yearStringEqual" dictId="yearflag" 
					beanId="selectXML" cls="select" />
				</td>
				<td class="label">
					月份
				</td>
				<td>
					<eoms:dict key="dict-partner-inspect" selectId="monthStringEqual" dictId="monthflag" 
					beanId="selectXML" cls="select" />
				</td>
			</tr>
			<tr>		
				<td class="label">
					巡检单位
				</td>
				<td>
					<input type="text"  class="text"  name="partnerDeptName" id="partnerDeptName"  
						value="" alt="allowBlank:false" readonly="readonly"/>
					<input name="partnerDeptIdStringEqual" id="partnerDeptId"  value="" type="hidden" />
					<eoms:xbox id="provTree" dataUrl="${app}/xtree.do?method=userFromComp&popedom=true"  
						rootId="" rootText="公司树"  valueField="partnerDeptId" handler="partnerDeptName" 
						textField="partnerDeptName" checktype="dept" single="true" />	
				</td>
				<td class="label">
				</td>
				<td>
				</td>
			</tr>
	</table>
	
		<html:submit styleClass="btn" property="method.approvalList"
			styleId="method.approvalList" value="查询"></html:submit>
	</html:form>
	</div>
</hr>
<div id="loadIndicator" class="loading-indicator" style="display:none">载入详细数据中，请稍候</div>
</hr>


<!-- Information hints area end-->
<logic:present name="list" scope="request">
	<display:table name="list" cellspacing="0" cellpadding="0"
		id="list" class="table list" export="false" sort="list" 
		pagesize="${pagesize}" requestURI="inspectPlan.do?method=findInspectPlanMainList" 
		partialList="true" size="${size}">
		<display:column property="planName" title="巡检计划名称" />
		<display:column title="巡检专业">
			<eoms:id2nameDB id="${list.specialty}" beanId="ItawSystemDictTypeDao" />	
		</display:column>
		<display:column title="巡检单位" >
			<eoms:id2nameDB id="${list.partnerDeptId}" beanId="partnerDeptDao"/>
		</display:column>
		<display:column title="巡检日期" >
			<c:if test="${!empty list.year}" var="result">
				${list.year}年${list.month}月
			</c:if>
		</display:column>
		<display:column title="审批状态" >
			${approveStatusMap[list.approveStatus]}
		</display:column>
		<display:column  title="编辑">
		<c:if test="${(list.approveStatus==3 || list.approveStatus==0) && sessionScope.sessionform.userid == list.creator }" var="result">
			<a href="${app }/partner/inspect/inspectPlan.do?method=toEditInspectPlanMain&id=${list.id}&sheet=${sheet}">
				<img src="${app }/images/icons/edit.gif"></a>
		</c:if>
		<c:if test="${!result}">
			无
		</c:if>
		</display:column>
		<display:column title="关联巡检任务" >
			<c:if test="${(list.approveStatus==3 || list.approveStatus==0)  && sessionScope.sessionform.userid == list.creator }" >
				<a href="${app }/partner/inspect/inspectPlan.do?method=findPlanResAssignList&id=${list.id }">
					<img src="${app }/images/icons/edit.gif"></a>
			</c:if>
			<c:if test="${list.approveStatus!=3 && list.approveStatus!=0}">
				已关联
			</c:if>
			<c:if test="${(list.approveStatus==3 || list.approveStatus==0)  && sessionScope.sessionform.userid != list.creator }" >
				无
			</c:if>
		</display:column>
		
		<display:column title="任务细化" >
			<c:if test="${list.resConfig==0 }" var="result">
				未关联资源
			</c:if>
			<c:if test="${!result && (list.approveStatus==3 || list.approveStatus==0) && sessionScope.sessionform.userid == list.creator}" var="result2">
				<!-- 
				<a href="${app }/partner/inspect/inspectPlan.do?method=findInspectPlanResDetailList&id=${list.id }&sheet=${sheet}">
				 -->
				 <a href="${app }/partner/inspect/inspectPlan.do?method=findInspectPlanResDetailAllList&id=${list.id }&sheet=${sheet}">
				<img src="${app }/images/icons/edit.gif"></a>
			</c:if>
		</display:column>

        <display:column title="审批" sortable="true">

            <c:if test="${result2}">
                <a href="#" onclick="commitApprove('${list.id}');">
                    <img src="${app }/images/icons/edit.gif"></a>
            </c:if>

        </display:column>
		
		<display:column sortable="false" headerClass="sortable" title="详情"
			media="html">
			<a id="${list.id }"
				href="${app }/partner/inspect/inspectPlan.do?method=getInspectPlanMainDetail&id=${list.id}"
				target="blank" shape="rect"> <img
				src="${app }/images/icons/table.gif"> </a>
		</display:column>
		
	</display:table>
</logic:present>
	</br>
	</div>
</div>

<%@ include file="/common/footer_eoms.jsp"%>
