<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8" contentType="text/html;charset=utf-8" %>
<%@ include file="/common/taglibs.jsp"%>


<div id="history" class="panel">
   <div class="tabtool-history-detail">&nbsp;
	<a href="#" onclick="javascript:switcher.toggle();return false"><bean:message bundle="sheet" key="sheet.showDetail"/></a>
   </div>
  
	<%int jNum=0;%>
	
<logic:present name="HISTORY" scope="request">  
	  <bean:define id="readOnly" value="true"/>         
      <logic:iterate id="baselink" name="HISTORY" type="com.boco.eoms.partner.sheet.pnrcomplaint.model.PnrComplaintLink" >     
       <%         
        jNum += 1;       
       %>
      <div class="history-item">&nbsp;   
      	   <!-- 历史列表标题开始 -->
	      <div class="history-item-title">
			 <%=jNum%>.
			 <bean:write name="baselink" property="operateTime" formatKey="date.formatDateTimeAll" bundle="sheet" scope="page"/>&nbsp; 
	  	     <eoms:id2nameDB id="${baselink.operateUserId}" beanId="tawSystemUserDao" />	 
	  	      <bean:message bundle="sheet" key="task.operateName"/>:
	  	     <eoms:dict key="dict-sheet-pnrcomplaint" dictId="activeTemplateId" itemId="${baselink.activeTemplateId}" beanId="id2descriptionXML" />
	  	     <bean:message bundle="pnrcomplaint" key="pnrcomplaint.operateType"/>:
	  	     <eoms:dict key="dict-sheet-pnrcomplaint" dictId="mainOperateType" itemId="${baselink.operateType}" beanId="id2descriptionXML" />
	  	     <img class="switchIcon" src="${app}/images/icons/closed.gif" align="absmiddle"/>
	   	 </div>
		   <!-- 历史列表标题结束 -->
		   
		   <!-- 历史步骤的详细信息-->
      	   <div class="history-item-content hide">
 		 			<table class="formTable" width="100%" cellpadding="0" cellspacing="0">
 		 				  <!-- 开头的公共部份 -->
			 			  <tr>
				 				  <td class="label">
			 				     		 <bean:message bundle="sheet" key="linkForm.operateUserName"/>
				 				  </td>
				 				  <td class="content">
			 				  			 <eoms:id2nameDB id="${baselink.operateUserId}" beanId="tawSystemUserDao" />&nbsp;
				                  </td>
					              <td class="label">
				 				     	 <bean:message bundle="sheet" key="linkForm.operateDeptName"/>
					 		      </td>
					 			  <td class="content">
			 	  				    	 <eoms:id2nameDB id="${baselink.operateDeptId}" beanId="tawSystemDeptDao" />&nbsp;
					              </td>
			 				</tr>
				 		   <tr>
				 				  <td class="label">
				 				      	<bean:message bundle="sheet" key="linkForm.operaterContact"/> 
				 				  </td>
				 				  <!-- 是新建，草稿派发，作废 -->
				 				  <%if(baselink.getOperateType().intValue()==0 || baselink.getOperateType().intValue() == 3 || baselink.getOperateType().intValue() == -12){%> 	
					  				  	<td class="content">
					  				  		${sheetMain.sendContact}
					  			      	</td>
				 			      <%} else {%>
				 			      		<td class="content">
				  				  			${baselink.operaterContact}
				  			      		</td>
				 			      <% }%>
				 			      <%if(baselink.getOperateType()!=null &&baselink.getOperateType().intValue() != 61 ){ %>
					                  <%if(baselink.getToOrgRoleId() != null && !"".equals(baselink.getToOrgRoleId())){%>
					                	  <td class="label"><bean:message bundle="sheet" key="linkForm.toOrgName"/></td>
						  				  <td class="content">
						  				  	<eoms:id2nameDB id="${baselink.toOrgRoleId}" beanId="tawSystemDeptDao" />
				  				   		   	<eoms:id2nameDB id="${baselink.toOrgRoleId}" beanId="tawSystemUserDao" />&nbsp;&nbsp;
						                  </td>	
					                  <%}else{%>
					                	  <td class="label"></td>
						  				  <td class="content"></td>
					                  <%}%>
			                  	<%} else {%>
					                  <td class="column-title"> </td>
					  				  <td class="column-content"></td>	
			                  	<% }%>	
			 			  </tr>
			              <tr> 
				               	  <td class="label">
				  				     	<bean:message bundle="sheet" key="linkForm.operateTime"/>
				  				  </td>
				  				  <td class="content">
				  				     	<bean:write name="baselink" property="operateTime" format="yyyy-MM-dd HH:mm:ss" scope="page"/>
				                  </td> 
				                
					               
				  			       		<td class="label">
				  				  		</td>
						  				<td class="content">
						                </td> 
				  			       
			              </tr>
			            <!-- 开头的公共部份结束 -->
               
	  		
	  		
	 <!-- 流程中的历史页面 -->

		  		<%if(baselink.getActiveTemplateId()!=null && baselink.getActiveTemplateId().equals("CheckTask")) {%>
		  			
		  				<%if(baselink.getOperateType() != null && (baselink.getOperateType().intValue() == 93 || baselink.getOperateType().intValue() == 11)){ %>
		  				
	 						
			 				<tr>
			 				
		 					<td class="label">
								<!-- 审批是否通过 -->
								<bean:message bundle="pnrcomplaint" key="instrumentStorageLink.linkIfCheckPass"/>
							</td>
							<td class="content" colspan=3>
						    	<pre><eoms:id2nameDB id="${baselink.linkIfCheckPass}" beanId="IItawSystemDictTypeDao"/></pre>
	 						</tr>
	 						 <tr>
				 				  <td class="label">
				 				     <bean:message bundle="sheet" key="linkForm.remark"/>
				 				  </td>
				 				  <td class="content" colspan=3>
				 				   	 <pre><bean:write name="baselink" property="remark" scope="page"/></pre>
				                 </td>
  							</tr>	 
		  				<%}%>
		  		 <%}%>
			    
	 <!-- 流程页面结束 -->
     
     <!-- 下面是公共的 -->
     <!-- 驳回 -->
     <%if(baselink.getOperateType()!=null && (baselink.getOperateType().intValue() == 93||baselink.getOperateType().intValue() == 94||baselink.getOperateType().intValue() == 97)){%> 
			<tr>
				<td class="label">驳回原因</td>
				<td class="content" colspan=3>
				   <pre><bean:write name="baselink" property="remark" scope="page"/></pre>
			    </td>	  				                  
			</tr>	 
	  <%} %>
	  <!-- 回复 -->
     <%if(baselink.getOperateType()!=null && (baselink.getOperateType().intValue() == 95)){%> 
			<tr>
	 			<td class="label">是否已答复客户</td>
				<td class="content">
					<pre><eoms:id2nameDB id="${baselink.linkIsReplied}" beanId="IItawSystemDictTypeDao"/></pre>
				</td>
				<td class="label">问题消除时间</td>
				<td class="content">
					<bean:write name="baselink" property="linkIssueEliminatTime" formatKey="date.formatDateTimeAll" bundle="sheet" scope="page"/>
				</td>
			</tr>
			<tr>
				<td class="label">处理结果</td>
				<td class="content">
					<pre><eoms:id2nameDB id="${baselink.linkDealResult}" beanId="IItawSystemDictTypeDao"/></pre>
			    </td>	
			    <td class="label">问题原因</td>
				<td class="content">
					<pre><eoms:id2nameDB id="${baselink.linkIssueReasonDict}" beanId="IItawSystemDictTypeDao"/></pre>
			    </td>  				                  
			</tr>
			<tr>
				<td class="label">故障原因</td>
				<td class="content">
					<pre><eoms:id2nameDB id="${baselink.linkFaultReason}" beanId="IItawSystemDictTypeDao"/></pre>
			    </td>	
			    <td class="label"></td>
				<td class="content">
			    </td>  				                  
			</tr>
			<%if(baselink.getLinkCustomerPhone()!=null && !"".equals(baselink.getLinkCustomerPhone())){%>
				<tr>
					<td class="label">客户名称</td>
					<td class="content">
						 <pre><bean:write name="baselink" property="linkCustomerName" scope="page"/></pre>
				    </td>	
				    <td class="label">客户电话</td>
					<td class="content">
						<pre><bean:write name="baselink" property="linkCustomerPhone" scope="page"/></pre>
				    </td>  				                  
				</tr>
				<tr>
					<td class="label">设备端口</td>
					<td class="content">
						<pre><bean:write name="baselink" property="linkDevicePort" scope="page"/></pre>
				    </td>	
				    <td class="label"></td>
					<td class="content">
				    </td>  				                  
				</tr>
			<%} %>
			
			<tr>
				<td class="label">问题原因</td>
				<td class="content" colspan=3>
				    <pre><bean:write name="baselink" property="linkIssueEliminatReason" scope="page"/></pre>
			    </td>	  				                  
			</tr>
			<tr>
				<td class="label">解决措施</td>
				<td class="content" colspan=3>
				    <pre><bean:write name="baselink" property="linkDealDesc" scope="page"/></pre>
			    </td>	  				                  
			</tr>
			
	<%if(baselink.getNodeAccessories()!=null&&!baselink.getNodeAccessories().equals("")){%>
  		 	<tr>  				
  				<td class="label">
  				     <bean:message bundle="sheet" key="mainForm.accessories"/>
  				</td>
  				<td colspan=3>
                     <eoms:attachment name="baselink" property="nodeAccessories" 
			              scope="page" idField="nodeAccessories" appCode="commonfault" viewFlag="Y"/>
                </td>                  
  			</tr>		
	  <%} }%>
	  
	 <!-- 退回 -->
     <%if(baselink.getOperateType()!=null && (baselink.getOperateType().intValue() == 54)){%> 
			<tr>
				<td class="label">退回原因</td>
				<td class="content" colspan=3>
				    <pre><bean:write name="baselink" property="remark" scope="page"/></pre>
			    </td>	  				                  
			</tr>
	  <%} %>
	  
	  <!-- 处理回复不通过 或 处理回复通过 -->
	 <%if(baselink.getOperateType()!=null && (baselink.getOperateType().intValue() == 6 || baselink.getOperateType().intValue() == 96 || baselink.getOperateType().intValue() == 10||baselink.getOperateType().intValue() == 30)){%> 
               <tr>
  				  <td class="label">
  				     <bean:message bundle="sheet" key="linkForm.remark"/>
  				  </td>
  				  <td class="content" colspan=3>
  				   	 <pre><bean:write name="baselink" property="remark" scope="page"/></pre>
                  </td>
	  		</tr>	

	  <%}%>	
	  
	  <!-- 抄送，阶段回复，阶段通知 -->
	  <%if(baselink.getActiveTemplateId()!=null && (baselink.getActiveTemplateId().equals("cc")||baselink.getActiveTemplateId().equals("reply")||baselink.getActiveTemplateId().equals("advice")||baselink.getOperateType().intValue() == 4)){%> 
              <tr>
 				  <td class="label">
 				     <bean:message bundle="sheet" key="linkForm.remark"/>
 				  </td>
 				  <td class="content" colspan=3>
 				   	 <pre><bean:write name="baselink" property="remark" scope="page"/></pre>
                 </td>
  		</tr>	  		 
	  <%} %>
	  
 	</table>
 </div>
</div>
</logic:iterate>
</logic:present>
</div>

<script type="text/javascript">
 switcher = new detailSwitcher();
  switcher.init({
	container:'history',
  	handleEl:'div.history-item-title'
  });
  
 function copy(id){
  	var ifCheck = document.getElementById(id);
  	if(ifCheck.checked == true){
    Ext.Ajax.request({
		method:"get",
		url: "pnrcomplaint.do?method=getJsonLink&id="+id+"&beanName=PnrComplaint",
		success: function(x){
				    var o = eoms.JSONDecode(x.responseText);
					for(p in o){
		            var a = eoms.$(p);
				    if(a && a.tagName == "TEXTAREA" ){
				        if(a.value == ""){
				        a.value = o[p];
				        }
				        else{
				        a.value +="   "+o[p];
				        }				        
				     }	     
                  }		     
        	   }
       });
     }
   }
</script>