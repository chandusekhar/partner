<%@page contentType="text/html;charset=gb2312"%>
<%@page import="java.util.*"%>
<%@page import="com.boco.eoms.resmanage.entity.*"%>
<%@page import="mcs.common.db.*"%>
<%
/**
*@ E-DIS (�Ĵ�ʡ)
*@ Copyright : (c) 2003
*@ Company : BOCO.
*@ ���ݱ���Ϣ����
*@ version 1.0
**/
%>

<%
	
   SysOpt   sysopt  = new SysOpt();	
   String colid			= request.getParameter("colid");
   String tabid			= request.getParameter("tabid");

   String[] pi_id		= request.getParameterValues("pi_id");
   String[] prmcode =   request.getParameterValues("prmcode");
   
   
   int row = 0;
   for (int i=0;i<pi_id.length;i++)
   {
	   SysRlt sysrlt = new SysRlt();
	   
	   sysrlt.setFi_primarycode(Integer.parseInt(prmcode[i]));
	   sysrlt.setFi_fk(Integer.parseInt(pi_id[i]));
	   row  = sysopt.RefColSave(sysrlt);
   }
    if (row >0)
  {
	  //out.println("����ɹ�<br><br><a href=editRefColIndex.jsp?tabid="+tabid+">����</a><br>");
	  out.println("<script>alert('����ɹ�.��ʵ���Ѿ��������������Դ�������������޸ģ�');parent.location='updateColIndex.jsp?tabid="+tabid+"'</script>");
	
  }
%>