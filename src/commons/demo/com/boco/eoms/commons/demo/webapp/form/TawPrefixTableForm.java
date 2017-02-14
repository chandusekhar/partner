package com.boco.eoms.commons.demo.webapp.form;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts.action.ActionMapping;

import com.boco.eoms.base.webapp.form.BaseForm;

/**
 * Generated by XDoclet/actionform. This class can be further processed with
 * XDoclet/webdoclet/strutsconfigxml and XDoclet/webdoclet/strutsvalidationxml.
 * 
 * @struts.form name="tawPrefixTableForm"
 */
public class TawPrefixTableForm extends BaseForm implements
		java.io.Serializable {

	protected String id;

	protected String prefixName;

	/** Default empty constructor. */
	public TawPrefixTableForm() {
	}

	public String getId() {
		return this.id;
	}

	/**
	 */

	public void setId(String id) {
		this.id = id;
	}

	public String getPrefixName() {
		return this.prefixName;
	}

	/**
	 * @struts.validator type="required"
	 */

	public void setPrefixName(String prefixName) {
		this.prefixName = prefixName;
	}

	/*
	 * To add non XDoclet-generated methods, create a file named
	 * xdoclet-TawPrefixTableForm.java containing the additional code and place
	 * it in your metadata/web directory.
	 */
	/**
	 * @see org.apache.struts.action.ActionForm#reset(org.apache.struts.action.ActionMapping,
	 *      javax.servlet.http.HttpServletRequest)
	 */
	public void reset(ActionMapping mapping, HttpServletRequest request) {
		// reset any boolean data types to false

	}

}