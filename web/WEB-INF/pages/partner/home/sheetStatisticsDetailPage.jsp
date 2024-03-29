<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8"
	contentType="text/html;charset=utf-8"%>
<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/header_eoms_form.jsp"%>

<link rel="stylesheet" type="text/css" href="${app}/deviceManagement/jquery-ui-1.8.14.custom/css/cupertino/jquery-ui-1.8.14.custom.css">
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-1.5.1.min.js"></script>
<script type="text/javascript" src="${app}/deviceManagement/jquery-ui-1.8.14.custom/js/jquery-ui-1.8.14.custom.min.js"></script>

<script type="text/javascript">
var jq=jQuery.noConflict();
jq(function() {
	pageAdjust();
});
</script>
	
<logic:present name="dataList" scope="request">
	<display:table id="dataList"
					name="dataList" 
					pagesize="${pageSize}" size="${size}"
					requestURI="${app}/partner/mainPage/pnrHomePageAction.do" export="false" 
					sort="list" cellspacing="0" cellpadding="0" class="table pnrResMeteringList" partialList="true" >
				<display:column sortable="true" headerClass="sortable" title="事件类型名称">
					${dataList['eventtypename']}
				</display:column>			
				<display:column sortable="true" headerClass="sortable" title="事件标题">
					aaa
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="专业">
					<eoms:id2nameDB id="${dataList['specialty']}" beanId="ItawSystemDictTypeDao" />	
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="省">
					<eoms:id2nameDB id="${dataList['province']}" beanId="tawSystemAreaDao" />	
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="地市">
					<eoms:id2nameDB id="${dataList['city']}" beanId="tawSystemAreaDao" />	
				</display:column>			
				<display:column sortable="true" headerClass="sortable" title="区县">
					<eoms:id2nameDB id="${dataList['country']}" beanId="tawSystemAreaDao" />	
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="省代维公司部门">
					<eoms:id2nameDB id="${dataList['provincedeptid']}" beanId="tawSystemDeptDao" />	
				</display:column>						
				<display:column sortable="true" headerClass="sortable" title="地市代维公司部门">
					<eoms:id2nameDB id="${dataList['citydeptid']}" beanId="tawSystemDeptDao" />	
				</display:column>									
				<display:column sortable="true" headerClass="sortable" title="区县代维公司部门">
					<eoms:id2nameDB id="${dataList['countrydeptid']}" beanId="tawSystemDeptDao" />	
				</display:column>						
				<display:column sortable="true" headerClass="sortable" title="代维小组部门">
					<eoms:id2nameDB id="${dataList['groupdeptid']}" beanId="tawSystemDeptDao" />	
				</display:column>			
				<display:column sortable="true" headerClass="sortable" title="处理人">
					<eoms:id2nameDB id="${dataList['dealuserid']}" beanId="tawSystemUserDao"/>
				</display:column>			
				<display:column sortable="true" headerClass="sortable" title="处理人所在部门">
				<eoms:id2nameDB id="${dataList['dealuserdeptid']}" beanId="tawSystemDeptDao"/>
				</display:column>									
				<display:column sortable="true" headerClass="sortable" title="派发人">
					<eoms:id2nameDB id="${dataList['senduserid']}" beanId="tawSystemUserDao"/>
				</display:column>			
				<display:column sortable="true" headerClass="sortable" title="派发人所在部门">
					<eoms:id2nameDB id="${dataList['senduserdeptid']}" beanId="tawSystemDeptDao"/>
				</display:column>									
				<display:column sortable="true" headerClass="sortable" title="归档年">
					${dataList['holdyear']}
				</display:column>						
				<display:column sortable="true" headerClass="sortable" title="归档半年">
					${dataList['holdhalfyear']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="归档季度">
					${dataList['holdquarter']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="归档月">
					${dataList['holdmonth']}
				</display:column>						
				<display:column sortable="true" headerClass="sortable" title="归档日">
					${dataList['holdday']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="派单年">
					${dataList['sendyear']}
				</display:column>						
				<display:column sortable="true" headerClass="sortable" title="派单半年">
					${dataList['sendhalfyear']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="派单季度">
					${dataList['sendquarter']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="派单月">
					${dataList['sendmonth']}
				</display:column>						
				<display:column sortable="true" headerClass="sortable" title="派单日">
					${dataList['sendday']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="派单时间">
					${dataList['senddatetime']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="归档时间">
					${dataList['holddatetime']}
				</display:column>
				<display:column sortable="true" headerClass="sortable" title="归档满意度">
					<eoms:id2nameDB id="${dataList['holdstatisfied']}" beanId="ItawSystemDictTypeDao"/>
				</display:column>			
				<display:column sortable="true" headerClass="sortable" title="事件次数">
					${dataList['eventnumber']}
				</display:column>
				<%-- 
				<display:column sortable="true" headerClass="sortable" title="是否合格">
					<c:if test="${'0' eq dataList['qualifiedflag']}">
						否
					</c:if>
					<c:if test="${'1' eq dataList['qualifiedflag']}">
						是
					</c:if>
				</display:column>
				--%>
				<display:column sortable="true" headerClass="sortable" title="是否及时">
					<c:if test="${'0' eq dataList['timelyflag']}">
						否
					</c:if>
					<c:if test="${'1' eq dataList['timelyflag']}">
						是
					</c:if>
				</display:column>
	</display:table>
</logic:present>
	
<%@ include file="/common/footer_eoms.jsp"%>
