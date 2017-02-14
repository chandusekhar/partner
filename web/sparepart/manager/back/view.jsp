<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/header_eoms_form.jsp"%>
<html>
<head>
<title>
�˿������б�${eoms:a2u('退库操作单据列表')}
</title>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/table_style.css" type="text/css">
</head>
<body background="<%=request.getContextPath()%>/images/bottom/bj_1_1.gif">
<div align="center">
      <center>
	  <br>
<table class="listTable" border="0" width="95%" cellspacing="0">
    <tr>
      <td class="table_title" align="center">
		<b>${eoms:a2u('退库操作单据列表')}</b>
      </td>
    </tr>
</table>
<table class="listTable" border="0" width="95%" cellspacing="1" cellpadding="1" align=center>
    <tr class="tr_show_left">
      <td>
        ${eoms:a2u('您当前操作的仓库是：')}<b>&nbsp;&nbsp;<bean:write name="storage" scope="session"/></b>
      </td>
    </tr>
</table>
<table class="listTable" border="0" width="95%" cellspacing="1" cellpadding="1" class="table_show" align="center">
        <tr class="td_label">
                     <td align="center"><bean:message key="order.operater"/></td>
                      <td align="center"><bean:message key="order.proposer"/></td>
                      <td align="center"><bean:message key="order.prop_dept"/></td>
                      <td align="center"><bean:message key="order.prop_tel"/></td>
                      <td align="center"><bean:message key="order.note"/></td>
                      <td align="center"><bean:message key="sparepart.msg"/></td>
        </tr>
    <logic:iterate id="taworder" name="taworder" type="com.boco.eoms.sparepart.model.TawOrder">
        <tr class="tr_show">
                      <td align="center"><bean:write name="taworder" property="operater" scope="page"/></td>
                      <td align="center"><bean:write name="taworder" property="proposer" scope="page"/></td>
                      <td align="center"><bean:write name="taworder" property="propDept" scope="page"/></td>
                      <td align="center"><bean:write name="taworder" property="propTel" scope="page"/></td>
                      <td align="center"><bean:write name="taworder" property="note" scope="page"/></td>
                      <td><p align="center"><html:link page="/part/backcontent.do" paramId="id" paramName="taworder" paramProperty="id"><bean:message key="sparepart.msg"/></html:link></td>
        </tr>
      </logic:iterate>
</table>
</center>
</div>
</body>
<%@ include file="/common/footer_eoms.jsp"%>
</html>