/*
 * Created on 2007-11-22
 *
 * TODO To change the template for this generated file go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
package com.boco.eoms.commons.system.role.util;

import java.util.List;

/**
 * @author IBM
 *
 * TODO To change the template for this generated type comment go to
 * Window - Preferences - Java - Code Style - Code Templates
 */
public class RoleModel {
	private String modelId;
	private String modelName;
	private String condition;
	private String filePath;
	private List roleFilter;
	
	/**
	 * @return Returns the roleFilter.
	 */
	public List getRoleFilter() {
		return roleFilter;
	}
	/**
	 * @param roleFilter The roleFilter to set.
	 */
	public void setRoleFilter(List roleFilter) {
		this.roleFilter = roleFilter;
	}
	/**
	 * @return Returns the roleFilters.
	 */
//	public RoleFilter[] getRoleFilter() {
//		int size = roleFilter.size();
//		RoleFilter[] mapping = new RoleFilter[size];
//		for(int i=0;i<size;i++){
//			mapping[i] = (RoleFilter)roleFilter.get(i);
//		}
//		return mapping;
//	}
	/**
	 * @param roleFilters The roleFilters to set.
	 */
//	public void setRoleFilter(RoleFilter[] filters) {
//		for(int i=0;i<filters.length;i++)
//			this.roleFilter.add(filters[i]);
//	}
	/**
	 * @return Returns the modelName.
	 */
	public String getModelName() {
		return modelName;
	}
	/**
	 * @param modelName The modelName to set.
	 */
	public void setModelName(String modelName) {
		this.modelName = modelName;
	}
	
	/**
	 * @return Returns the condition.
	 */
	public String getCondition() {
		return condition;
	}
	/**
	 * @param condition The condition to set.
	 */
	public void setCondition(String condition) {
		this.condition = condition;
	}
	/**
	 * @return Returns the filePath.
	 */
	public String getFilePath() {
		return filePath;
	}
	/**
	 * @param filePath The filePath to set.
	 */
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	/**
	 * @return Returns the modelId.
	 */
	public String getModelId() {
		return modelId;
	}
	/**
	 * @param modelId The modelId to set.
	 */
	public void setModelId(String modelId) {
		this.modelId = modelId;
	}
}