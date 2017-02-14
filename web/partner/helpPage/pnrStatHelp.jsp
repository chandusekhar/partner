<%@ page language="java" pageEncoding="UTF-8" %>
<%@ include file="/common/taglibs.jsp"%>
<%@ include file="/common/header_eoms_form.jsp"%>

<script type="text/javascript">

</script>

<% 
 String flag=request.getParameter("flag");
 %>
<table >
	<caption>
		<div class="header center">合作伙伴统计功能描述</div>
	</caption>

	<tr>
		<td >
		
			<div id="helpPanel" class="app-panel">
				<dl>
		
		<!-- 人员统计 -->
		<%if("personStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>联通公司用户根据工作需要可对全部或相关单位的合作伙伴人数进行针对性统计并支持Excel导出和打印，具体报表形式见以下详细描述。</dd>
					
					<dt>按地市、合作伙伴名称、专业统计。按月统计。</dt>
					<dd>统计条件：按地市、合作伙伴名称、专业统计。按月统计。</dd>
					
					<dt>按合作伙伴名称统计。按月统计。</dt>
					<dd>统计条件：按合作伙伴名称统计。按月统计。</dd>
					
		<%} %>		
		<!-- 仪器仪表统计 -->
		<%if("apparatusStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以根据合作名称和地市名称统计每个合作伙伴在各地市的仪器仪表数量。其中地市默认为用户所在地市，省公司用户可以统计全省各地市的仪器仪表信息。</dd>
					
					<dt>按地市、合作伙伴名称、仪器仪表统计。按月统计。</dt>
					<dd>统计条件：按地市、合作伙伴名称、仪器仪表统计。按月统计。</dd>
					
					<dt>按合作伙伴名称、仪器仪表类型、运行状态统计。</dt>
					<dd>统计条件：按合作伙伴名称、仪器仪表类型、运行状态统计。</dd>
					
		<%} %>		
		<!-- 合作伙伴信息统计 -->
		<%if("pnrInfStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以统计每个合作伙伴在不同地市维护的基站数量以及基站的具体名称，当用户点击站点数量时，系统单独打开一个窗口显示具体基站信息列表。</dd>
					
					<dt>合作伙伴信息统计</dt>
					<dd>统计条件：按合作伙伴名称、地市、县区统计。按月统计。</dd>
					
					
		<%} %>		
		<!-- 油机统计 -->
		<%if("oilStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以根据合作名称和地市名称统计每个合作伙伴在各地市的油机数量。其中地市默认为用户所在地市，省公司用户可以统计全省各地市的油机信息。</dd>
					
					<dt>地市各功率油机数量统计</dt>
					<dd>统计条件：地市名称和合作伙伴名称和功率。按月统计。</dd>
					
					<dt>全省各状态油机数量统计</dt>
					<dd>统计条件：合作伙伴名称和油机性质和运行状态。按月统计。</dd>
					
		<%} %>		
		<!-- 车辆统计 -->
		<%if("carStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以根据合作名称和地市名称统计每个合作伙伴在各地市的车辆数量。其中地市默认为用户所在地市，省公司用户可以统计全省的。</dd>
					
					<dt>车辆统计</dt>
					<dd>统计条件：地市名称和合作伙伴名称。按月统计。</dd>
					
					
		<%} %>		
		<!-- 线路统计 -->
		<%if("lineStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以根据合作名称和地市名称统计每个合作伙伴在各地市的仪器仪表数量。其中地市默认为用户所在地市，省公司用户可以统计全省各地市的仪器仪表信息。</dd>
					
					<dt>按合作伙伴名称和地市统计</dt>
					<dd>统计条件：按合作伙伴名称和地市统计。按月统计。</dd>
					
					<dt>按地市、等级统计</dt>
					<dd>统计条件：按地市、县区、线路等级统计。按月统计。</dd>
					
		<%} %>		
		<!-- 基站统计 -->
		<%if("siteStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以统计每个合作伙伴在不同地市维护的基站数量以及基站的具体名称，当用户点击站点数量时，系统单独打开一个窗口显示具体基站信息列表。</dd>
					
					<dt>按合作伙伴名称、地市、县区统计</dt>
					<dd>统计条件：按合作伙伴名称、地市、县区、。按月统计。各地市和全省各等级基站数量统计报表，地市公司可以统计本地市各等级基站数量，省公司可以统计全省各等级基站数量。</dd>
					
					<dt>按地市、等级统计。</dt>
					<dd>统计条件：地市名称和基站等级</dd>
					
		<%} %>		
		<!-- 合作伙伴使用情况统计 -->
		<%if("pnrUseCaseStat".equals(flag)){%>
					<dt>功能说明</dt>
					<dd>用户可以统计各地市合作伙伴所有用户ID在统计时间范围内登陆本系统的情况。</dd>
					
					<dt>合作伙伴使用情况统计</dt>
					<dd>统计条件：按合作伙伴名称和时间范围进行统计。地市公司可以统计本地市的所有合作伙伴用户登陆情况，省公司用户可以统计全省的情况。</dd>
					
					
		<%} %>



			
					
				</dl>
			</div>
		</td>
	</tr>
	
</table>


<%@ include file="/common/footer_eoms.jsp"%>