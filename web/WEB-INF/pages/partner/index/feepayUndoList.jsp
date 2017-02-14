<%@ page language="java" pageEncoding="UTF-8"%>
<%@page import="com.boco.eoms.partner.feeInfo.model.PnrFeeInfoPlan"%>
<%@page import="com.boco.eoms.partner.feeInfo.model.PnrFeeInfoPay"%>
<%@page import="com.boco.eoms.partner.feeInfo.webapp.form.PnrFeeInfoPayForm"%>
<%@page import="com.boco.eoms.base.util.StaticMethod"%>
<%@page import="com.boco.eoms.partner.feeInfo.mgr.*"%>
<%@page import="java.util.Map"%>
<%@ include file="/common/taglibs.jsp"%>
<jsp:directive.page import="java.util.List" />
<%@ include file="/common/header_eoms_form.jsp"%>
<%
List planList = (List)request.getAttribute("pnrFeeInfoPlanList");
Map planNum = (Map)request.getAttribute("planNum");
//IPnrFeeInfoPayMgr pnrFeeInfoPayMgr = (IPnrFeeInfoPayMgr)request.getAttribute("payMgr");
String planNumStr ="";
String buttomName = "发起付款";
%>
<html>
<head>
<script language="javascript">
function showPlan(trId)
{
	plans = document.getElementById(trId);   
  if(plans.style.display=="")
  {
    plans.style.display="none";
  }
  else
  {
    plans.style.display="";
  }
}
</script>
</head>
	<body>
		<table>
		<fmt:bundle basename="com/boco/eoms/partner/feeInfo/config/applicationResources-partner-feeInfo">
		<table class="formTable" id="tongzhi">
	<%
	PnrFeeInfoPlan pnrFeeInfoPlan = null;
	String feeId = "";
	String planState = "";
	String planStateCH=""; 
	if(planList.size()==0){
		%>
			<tr>
				<td style="text-align:center;font-weight:bold;color:#006699;background:#CAE8EA;border: 1px solid #98C0F4;" >暂无记录</td>
			</tr>
		<%
		}
	for(int i=0,j=1;i<planList.size();i++,j++){
	pnrFeeInfoPlan = (PnrFeeInfoPlan)planList.get(i);
	
	planState = pnrFeeInfoPlan.getPlanState();
	if("3".equals(planState)){
		planStateCH = "等待提交付款材料";
		buttomName = "录入材料";
	}else if("5".equals(planState)){
		planStateCH = "被驳回的付款材料";
		buttomName = "录入材料";
	}else if("0".equals(planState)){
		planStateCH = "通知付款";
		buttomName = "发起付款";
	}else if("2".equals(planState)){
		planStateCH = "被驳回的通知付款";
		buttomName = "发起付款";
	}else if("1".equals(planState)){
		planStateCH = "待审核";
		buttomName = "审核";
	}else if("4".equals(planState)){
		planStateCH = "材料等待审核中";
		buttomName = "审核";
	}else if("7".equals(planState)){
		planStateCH = "完成付款";
		buttomName = "查看详细";
	}else if("6".equals(planState)){
		planStateCH = "等待付款完成";
		buttomName = "付款完成";
	}
	planNumStr = StaticMethod.nullObject2String(planNum.get(pnrFeeInfoPlan.getFeeId()));
	List<PnrFeeInfoPay> payList = null;
	if(!feeId.equals(pnrFeeInfoPlan.getFeeId())){
		if(i!=0){
	%>
	</tr>
		</table>	
	<%
		}
		j=1;
	%>
	<tr>
	<td class="label" colspan="4">

	<img align=right src="${app}/images/icons/open.gif" alt="隐藏/显示工作内容" onclick="javascript:showPlan('<%=pnrFeeInfoPlan.getFeeId() %>');" />付款信息名称：
	<a href="${app}/partner/feeInfo/pnrFeeInfoMains.do?method=detail&id=<%=pnrFeeInfoPlan.getFeeId() %>" target="_blank">
	<eoms:id2nameDB id="<%=pnrFeeInfoPlan.getFeeId() %>" beanId="pnrFeeInfoMainDao" />
	</a>
	(<font color="red"><%=planNumStr %>个待处理任务</font>) 
	</td>
	</tr>

	<tr  id="<%=pnrFeeInfoPlan.getFeeId() %>" style="display:none">

	<td colspan="4">
	付款计划:
	<table class="formTable" >
	
	<%
	feeId = pnrFeeInfoPlan.getFeeId();
	}
	%>
	<tr>
			<th colspan="5"><b>第<%=j %>项：</b></th>
	</tr>
		<tr>
			<td class="label" style="vertical-align:middle">
				阶段付款名称：
			</td>
			<td class="content">
				<%=pnrFeeInfoPlan.getPlanPayName() %>
				<html:hidden property="feeId" value="<%=pnrFeeInfoPlan.getFeeId() %>" />
			</td>
			<td class="label" style="vertical-align:middle">
				状态：
			</td>
			<td class="content">
				<%=planStateCH %>
				<html:hidden property="feeId" value="<%=pnrFeeInfoPlan.getPlanState() %>" />
			</td>
						<td rowspan="3">
			 <input  type="button" class="btn" value="<%=buttomName %>"onclick="window.open('${app}/partner/feeInfo/pnrFeeInfoPays.do?method=planPay&planId=<%=pnrFeeInfoPlan.getId() %>');"	/></th>
			 <%if("6".equals(planState)){%>
				 <input  type="button" class="btn" value="阶段回复"onclick="window.open('${app}/partner/feeInfo/pnrFeeInfoPays.do?method=planPayReply&planId=<%=pnrFeeInfoPlan.getId() %>');"	/>
			 <% } %>	
			 </td>
		</tr>
	<tr>
		<td class="label" style="vertical-align:middle">
			计划付费时间：
		</td>
		<td class="content">
		<%=pnrFeeInfoPlan.getPlanPayTimeStr() %>
		</td>
		<td class="label" style="vertical-align:middle">
			计划付款额(万元)：
		</td>
		<td class="content">
		<%=pnrFeeInfoPlan.getPlanPayFee() %>
		</td>
	</tr>
	<tr>	
		<td class="label" style="vertical-align:middle" >
			阶段付款描述：
		</td>
		<td class="content" colspan="3">
		<%=pnrFeeInfoPlan.getRemark() %>
		</td>
		<%--<td class="label">
			附件：
		</td>
		<td class="content">
			
		<% payList = pnrFeeInfoPayMgr.getPnrFeeInfoPays(pnrFeeInfoPlan.getId()); %>
		<% PnrFeeInfoPay pnrfeeInfoPay = null; %>
		<% if(payList != null && payList.size() >= 1){ %>
		<% 		pnrfeeInfoPay = payList.get(0); %>
		<% request.setAttribute("pnrFeeInfoPayForm", pnrfeeInfoPay); %>
		<%if(pnrfeeInfoPay.getAccessoriesId()!=null&&!"".equals(pnrfeeInfoPay.getAccessoriesId())) {%>
			<eoms:attachment name="pnrFeeInfoPayForm" property="accessoriesId"
			scope="request" idField="accessoriesId" appCode="feeInfo" viewFlag="Y" />
		<% }%> 
		
		
		<%} %>
		
		</td>--%>
	</tr>
	<%
	
	}
	%>
	</td>
	</tr>
		</table>	
</fmt:bundle>
		</table>	
</body>
</html>