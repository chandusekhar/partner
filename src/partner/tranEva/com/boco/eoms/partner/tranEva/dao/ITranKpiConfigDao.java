package com.boco.eoms.partner.tranEva.dao;

import java.util.List;

import com.boco.eoms.base.dao.Dao;
import com.boco.eoms.partner.tranEva.model.TranKpiConfig;

/**
 * <p>
 * Title:指标打分配置
 * </p>
 * <p>
 * Description:指标打分配置
 * </p>
 * <p>
 * Tue Nov 16 09:08:10 CST 2010
 * </p>
 * 
 * @author benweiwei
 * @version 1.0
 * 
 */
public interface ITranKpiConfigDao extends Dao {
	
	/**
    * 根据主键查询指标打分配置
    * @param id 主键
    * @return 返回某id的指标打分配置
    */
    public TranKpiConfig getTranKpiConfig(final String id);
	
    /**
    *
    * 保存指标打分配置    
    * @param tranKpiConfig 指标打分配置
    * 
    */
    public void saveTranKpiConfig(TranKpiConfig tranKpiConfig);
	
	/**
	 * 根据节点id查询指标打分配置
	 * 
	 * @param nodeId
	 *            节点id
	 * @return 返回某节点id的对象
	 */
	public TranKpiConfig getTranKpiConfigByNodeId(final String nodeId);
	
	/**
	 * 根据节点id删除指标打分配置
	 * 
	 * @param nodeId
	 *            节点id
	 */
	public void removeTranKpiConfigByNodeId(final String nodeId);
	
	/**
	 * 查询下一级节点
	 * 
	 * @param parentNodeId
	 *            父节点id
	 * @return 下级节点列表
	 */
	public List getNextLevelTranKpiConfigs(final String parentNodeId);
	
	/**
	 * 生成一个可用的节点id
	 * 
	 * @param parentNodeId
	 *            父节点id
	 * @param length
	 *            节点长度
	 * @return
	 */
	public String getUsableNodeId(final String parentNodeId, final int length);
	
	/**
	 * 查询所有子节点（按nodeId排序）
	 * 
	 * @param parentNodeId
	 *            父节点id
	 */
	public List getChildNodes(final String parentNodeId);
	
	/**
	 * 查询所有符合条件的节点
	 * 
	 * @param 条件
	 *            
	 */	
	public List getTranKpiConfigs( final String whereStr ) ;
}