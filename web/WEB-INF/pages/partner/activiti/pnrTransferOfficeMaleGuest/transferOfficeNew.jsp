<%@ page language="java" errorPage="/error.jsp" pageEncoding="UTF-8" contentType="text/html;charset=utf-8" %>
<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/header_eoms_form.jsp"%>
<script type="text/javascript">
Date.prototype.format =function(format)
{
    var o = {
        "M+" : this.getMonth()+1, //month
        "d+" : this.getDate(), //day
        "h+" : this.getHours(), //hour
        "m+" : this.getMinutes(), //minute
        "s+" : this.getSeconds(), //second
        "q+" : Math.floor((this.getMonth()+3)/3), //quarter
        "S" : this.getMilliseconds() //millisecond
    }
    if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
            (this.getFullYear()+"").substr(4- RegExp.$1.length));
    for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
                RegExp.$1.length==1? o[k] :
                        ("00"+ o[k]).substr((""+ o[k]).length));
    return format;
}
var roleTree;
var v;

  Ext.onReady(function(){
   v = new eoms.form.Validation({form:'theform'});
	
   });

   function changeType1(){
       var myDate=new Date();
       var b =$('sheetCompleteLimit').value*60;
       myDate.setMinutes(myDate.getMinutes() + b, myDate.getSeconds(), 0)
       $('dueDate').value = myDate.format('yyyy-MM-dd hh:mm:ss');
   }
</script>

<html:form action="/pnrTransferOfficeMaleGuest.do?method=performAdd" styleId="theform" >
	<input id="dueDate" type="hidden" name="dueDate" value="${pnrTransferOffice.endTime}">
    <input id="themeId" type="hidden" name="themeId" value="${pnrTransferOffice.id}">
    <input id="processInstanceId" type="hidden" name="processInstanceId" value="${pnrTransferOffice.processInstanceId}">
    <input id="state" type="hidden" name="state" value="${pnrTransferOffice.state}">
     <input id="themeInterface" type="hidden" name="themeInterface" value="maleGuest">
<table class="formTable">
	<tr>
	  <td class="label">11工单主题*</td>
	  <td colspan="3">
	    <input type="text" name="title" class="text max" id="title"
			value="${pnrTransferOffice.theme}" alt="allowBlank:false,maxLength:200,vtext:'请输入工单主题，最大长度为100个汉字！'"/>
	  </td>
	</tr>

	<tr>
	  <td class="label">操作人*</td>
	  <td class="content">
	  <eoms:id2nameDB id="${userId}" beanId="tawSystemUserDao"/>
	  <input type="hidden" name="initiator" value="${userId}">
	  </td>
	  
	  <td class="label">操作人部门*</td>
	  <td class="content"><eoms:id2nameDB id="${deptId}" beanId="tawSystemDeptDao"/></td>
	</tr>

</table>
		
		 <!-- 工单基本信息 --> 
<table id="sheet" class="formTable" >
		<tr>

			<td class="label">
				故障处理时限*
			</td>
			<td class="content">
				<input type="text" class="text" id="sheetCompleteLimit"
					name="sheetCompleteLimit" value="${pnrTransferOffice.processLimit}"
					alt="re:/^(\d+)(\.\d+)?$/,re_vt:'请输入整数或小数'" />
				(单位:小时)
			</td>
			<td class="label">
				故障来源*
			</td>
			<td class="content">
				<eoms:comboBox name="faultSource" id="faultSource"
					defaultValue="${pnrTransferOffice.faultSource}" initDicId="1012302"
					alt="allowBlank:false" styleClass="select" />
			</td>
		</tr>
		<tr>
			<td class="label">
				故障发生时间*
			</td>
			<td class="content">
				<input type="text" class="text" name="mainFaultOccurTime"
					readonly="readonly" id="mainFaultOccurTime"
					value="${eoms:date2String(pnrTransferOffice.createTime)}"
					onclick="popUpCalendar(this, this,null,null,null,true,-1,0);"
					alt="allowBlank:false" />
			</td>
			<td class="label">
				工单子类型*
			</td>
			<td class="content">
				<eoms:comboBox name="mainFaultNet" id="mainFaultNet"
					defaultValue="${pnrTransferOffice.subType}" initDicId="1012301"
					alt="allowBlank:false" styleClass="select" />
			</td>
		</tr>
		
		
		<tr>
			<td class="label">
				机线员
			</td>
			<td class="content">
				<input type="text" name="engineer" class="text max" id="title"
			value="${pnrTransferOffice.engineer}" />
	  </td>
			<td class="label">
				装机地址
			</td>
			<td class="content">
				<input type="text" name="installAddress" class="text max" id="title"
			value="${pnrTransferOffice.installAddress}" />
			</td>
		</tr>
		<tr>
			<td class="label">
				接入方式
			</td>
			<td class="content">
				<input type="text" name="pattern" class="text max" id="title"
			value="${pnrTransferOffice.pattern}" />
			</td>
			<td class="label">
				地市
			</td>
			<td class="content">
				<input type="text" name="city" class="text max" id="title"
			value="${pnrTransferOffice.city}" />
			</td>
		</tr>
		<tr>
			<td class="label">
				局站名称
			</td>
			<td class="content">
				<input type="text" name="stationName" class="text max" id="title"
			value="${pnrTransferOffice.stationName}" />
			</td>
			<td class="label">
				交接箱名称
			</td>
			<td class="content">
				<input type="text" name="spliceBoxName" class="text max" id="title"
			value="${pnrTransferOffice.spliceBoxName}" />
			</td>
		</tr>
		<tr>
			<td class="label">
			主干电缆编码
			</td>
			<td class="content">
			<input type="text" name="cableNumber" class="text max" id="title"
			value="${pnrTransferOffice.cableNumber}" />
			</td>
			<td class="label">
			分线盒编码
			</td>
			<td class="content">
				<input type="text" name="branchBoxNumber" class="text max" id="title"
			value="${pnrTransferOffice.branchBoxNumber}" />
			</td>
		</tr>
		<tr>
			<td class="label">
			一级分光器编码
			</td>
			<td class="content">
				<input type="text" name="firstOpticalNumber" class="text max" id="title"
			value="${pnrTransferOffice.firstOpticalNumber}" />
			</td>
			<td class="label">
			一级分光器端口
			</td>
			<td class="content">
				<input type="text" name="firstOpticalPort" class="text max" id="title"
			value="${pnrTransferOffice.firstOpticalPort}" />
			</td>
		</tr>
		<tr>
			<td class="label">
			二级分光器编码
			</td>
			<td class="content">
				<input type="text" name="secondOpticalNumber" class="text max" id="title"
			value="${pnrTransferOffice.secondOpticalNumber}" />
			</td>
			<td class="label">
			二级分光器端口
			</td>
			<td class="content">
				<input type="text" name="secondOpticalPort" class="text max" id="title"
			value="${pnrTransferOffice.secondOpticalPort}" />
			</td>
		</tr>
		<tr>
			<td class="label">
				光交接箱编码
			</td>
			<td class="content">
				<input type="text" name="spliceBoxNumber" class="text max" id="title"
			value="${pnrTransferOffice.spliceBoxNumber}" />
			</td>
			<td class="label">
				光交接箱端口
			</td>
			<td class="content">
				<input type="text" name="spliceBoxPort" class="text max" id="title"
			value="${pnrTransferOffice.spliceBoxPort}" />
			</td>
		</tr>
		<tr>
			<td class="label">
				故障联系人+手机号*
			</td>
			<td class="content">
				<textarea class="textarea max" name="mainpeople" id="mainpeople"
					alt="allowBlank:false,maxLength:200,vtext:'请填入故障联系人，最多输入 200 字符'">${pnrTransferOffice.connectPerson}</textarea>
			</td>
			<td class="label">
				故障描述*
			</td>
			<td class="content" colspan="3">
				<textarea class="textarea max" name="mainRemark" id="mainRemark"
					alt="allowBlank:false,maxLength:2000,vtext:'请填入故障描述，最多输入 2000 字符'">${pnrTransferOffice.faultDescription}</textarea>
			</td>
		</tr>
</table>
<!--派单树-->
<br/>
<fieldset>
 	<legend>
		 <span id="roleName">
		 	 工单接收人
		 </span>
  	</legend>
    <div class="x-form-item">
		<eoms:chooser id="sendObject" panels="[{text:'部门与人员',dataUrl:'${app}/xtree.do?method=userFromDeptTask&dh=${deptId}',rootId:'${deptId}'}]"  config="{returnJSON:true,showLeader:true}"
		   category="[{id:'taskAssignee',text:'接收',allowBlank:false,childType:'user',limit:1,vtext:'请选择接收对象'}]"
		  data="" />
	</div>	
</fieldset>

		<!-- buttons -->
		<div class="form-btns" id="btns" style="display:block">
	
			<html:submit styleClass="btn" property="method.save" onclick="javascript:changeType1();" styleId="method.save">
				派发
			</html:submit>
		</div>
	</html:form>
<%@ include file="/common/footer_eoms.jsp"%>