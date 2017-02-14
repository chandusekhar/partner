package com.boco.eoms.partner.dataSynch.dao.jdbc.bs;

import java.sql.PreparedStatement;
import java.util.Map;

import com.boco.eoms.base.util.StaticMethod;
import com.boco.eoms.partner.dataSynch.dao.AbstractDataSynchDaoJdbc;


/**
 * 类说明：网络资源--基站设备及配套--机框:机框DaoJdbcImpl实现类
 * 创建人： zhangkeqi
 * 创建时间：2012-11-16 23:11:36
 */
public class IrmsBsShelfDaoJdbcImpl extends AbstractDataSynchDaoJdbc {
		/**
		 * 批量插入语句
		 */
		public String getBatchInsertSql(String table){
			return "insert into "+table+"_irms_bs_shelf("+
						"id,"+
						"label_cn,"+
						"related_rack_cuid,"+
						"sequence,"+
						"slot_amount,"+
						"create_time,"+
						"remark,"+
						"related_rack_cuid_id,"+
 						"inspect_id,"+
 						"inspect_name"+
					") values (?, ?, ?, ?, ?, ?, ?, ? ,?,?)";
		}
		
		/**
		 * 添加批量插入语句
		 */
		public PreparedStatement addPsBatch(PreparedStatement ps,Map<String,Object> data) throws Exception{
			/*主键*/
			ps.setString(1,StaticMethod.nullObject2String(data.get("id")));
			/*机框名称，作为业务主键，命名要求唯一。*/
			ps.setString(2,StaticMethod.nullObject2String(data.get("label_cn")));
			/*关联属性，关联到【机柜】表-【机柜名称】*/
			ps.setString(3,StaticMethod.nullObject2String(data.get("related_rack_cuid")));
			/*机框编号，在机柜的位置，数字*/
			ps.setString(4,StaticMethod.nullObject2String(data.get("sequence")));
			/*数字*/
			ps.setString(5,StaticMethod.nullObject2String(data.get("slot_amount")));
			/*创建时间*/
			ps.setString(6,StaticMethod.nullObject2String(data.get("create_time")));
			/*备注*/
			ps.setString(7,StaticMethod.nullObject2String(data.get("remark")));
			/*所属机柜ID*/
			ps.setString(8,StaticMethod.nullObject2String(data.get("related_rack_cuid_id")));
			/*所属巡检点主键id*/
			ps.setString(9,StaticMethod.nullObject2String(data.get("inspect_id")));
			/*所属巡检点名称*/
			ps.setString(10,StaticMethod.nullObject2String(data.get("inspect_name")));
			
			ps.addBatch();
			
			return ps;
		}
}