<%@ page contentType="text/html; charset=gb2312" %>
<%@ taglib uri="/WEB-INF/struts-html.tld" prefix="html" %>
<%@ taglib uri="/WEB-INF/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/WEB-INF/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/WEB-INF/jstl-core.tld" prefix="c" %>

<html:html>
<head>
<title>ά����Ա�����б�</title>
<html:base/>

</head>

<form name="listForm">
  <body>
	<br>
	  <table border="0" width="100%" cellspacing="0" align="center">
		<tr>
		  <td width="100%" align="center" class="table_title">
			<b>
			  &nbsp;&nbsp;<bean:message key="TawInfMaintainer.Name"/><bean:message key="label.list"/>
			</b>
		  </td>
		</tr>
	  </table>
      <table border="0" width="100%" cellspacing="1" cellpadding="1" class="table_show" align=center>
		<tr class="tr_show">
		    <td width="100%" colspan="10" height="25" align="center"><bean:write name="pagerHeader" scope="request" filter="false"/><%! String key;%></td>
        </tr>
        <tr class="tr_show">
		  <td width="10%" height="25" class="clsfth" align="center"><bean:message key="TawInfMaintainer.Maintainer_Name"/></td>

          <td width="5%" height="25" class="clsfth" align="center"><bean:message key="TawInfMaintainer.Maintainer_Sex"/></td>

          <td width="21%" height="25" class="clsfth" align="center"></td>

          <td width="15%" height="25" class="clsfth" align="center"><bean:message key="TawInfMaintainer.Tele"/></td>

          <td width="15%" height="25" class="clsfth" align="center"><bean:message key="TawInfMaintainer.Tele_Mobile"/></td>

          <td width="8%" height="25" align="center"><font color="#cc0000">�鿴</font></td>

          <td width="8%" height="25" align="center"><font color="#cc0000">�޸�</font></td>

          <td width="8%" height="25" align="center"><font color="#cc0000">ɾ��</font></td>
		</tr>

		<logic:iterate id="tawInfMaintainer" name="TAW_INF_MAINTAINER_LIST" type="com.boco.eoms.infmanage.model.TawInfMaintainer">
		<tr class="tr_show">
		  <td width="10%" height="25" class="clsfth" align="center"><bean:write name="tawInfMaintainer" property="maintainerName" scope="page"/></td>

          <td width="5%" height="25" class="clsfth" align="center"><bean:write name="tawInfMaintainer" property="maintainerSex" scope="page"/></td>

          <td width="21%" height="25" class="clsfth" align="center"><bean:write name="tawInfMaintainer" property="deptName" scope="page"/></td>

          <td width="15%" height="25" class="clsfth" align="center"><bean:write name="tawInfMaintainer" property="tele" scope="page"/></td>

          <td width="15%" height="25" class="clsfth" align="center"><bean:write name="tawInfMaintainer" property="teleMobile" scope="page"/></td>

		  <%
			java.util.HashMap map = new java.util.HashMap();

			map.put("maintainerId",String.valueOf(tawInfMaintainer.getMaintainerId()));  //��Աid
			map.put("deptId", String.valueOf(tawInfMaintainer.getDeptId()));  //����Id
			pageContext.setAttribute("map", map, PageContext.PAGE_SCOPE);
          %>

           <td width="8%" height="25" align="center"><font color="#cc0000"><html:link page="/TawInfMaintainer/view.do" name="map" scope="page"><img src="<%=request.getContextPath()%>/images/bottom/an_xs.gif" border="0" alt="��ʾ"></html:link>&nbsp;</font></td>

           <td width="8%" height="25" align="center"><font color="#cc0000"><html:link page="/TawInfMaintainer/update.do" name="map" scope="page"><img src="<%=request.getContextPath()%>/images/bottom/an_bj.gif" border="0" alt="�༭"></html:link>&nbsp;</font></td>

           <td width="8%" height="25" align="center"><font color="#cc0000"><html:link page="/TawInfMaintainer/del.do" name="map" scope="page"><img src="<%=request.getContextPath()%>/images/bottom/an_sc.gif" border="0" alt="ɾ��"></html:link>&nbsp;</font></td>
     	</tr>
		</logic:iterate>
    ��</table>
      <table border="0" width="100%" cellspacing="0">
		  <tr>
		    <td width="100%" colspan="10" height="32" align="right"> <input type='button' Class="clsbtn2"  value='��ӡ' onclick = 'javascript:window.print()'>&nbsp;&nbsp;
		  <input type="button" value="<bean:message key="label.cancel"/>" onclick="history.back()" class="clsbtn2"/>
		    </td>
		  </tr>
      </table>
  </body>

</form>
</html:html>