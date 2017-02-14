package com.boco.eoms.base.webapp.taglib;

import java.lang.reflect.AccessibleObject;
import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.jsp.tagext.TagData;
import javax.servlet.jsp.tagext.TagExtraInfo;
import javax.servlet.jsp.tagext.VariableInfo;

import com.boco.eoms.commons.loging.BocoLog;

import com.boco.eoms.base.Constants;

/**
 * Implementation of <code>TagExtraInfo</code> for the <b>constants</b> tag,
 * identifying the scripting object(s) to be made visible.
 * 
 * @author Matt Raible
 * @version $Revision: 1.5 $ $Date: 2006/01/30 05:00:13 $
 */
public class ConstantsTei extends TagExtraInfo {
//	private final Log log = LogFactory.getLog(ConstantsTei.class);

	/**
	 * Return information about the scripting variables to be created.
	 */
	public VariableInfo[] getVariableInfo(TagData data) {
		// loop through and expose all attributes
		List vars = new ArrayList();

		try {
			String clazz = data.getAttributeString("className");

			if (clazz == null) {
				clazz = Constants.class.getName();
			}

			Class c = Class.forName(clazz);

			// if no var specified, get all
			if (data.getAttributeString("var") == null) {
				Field[] fields = c.getDeclaredFields();

				AccessibleObject.setAccessible(fields, true);

				for (int i = 0; i < fields.length; i++) {
					String type = fields[i].getType().getName();
					vars.add(new VariableInfo(fields[i].getName(), ((fields[i]
							.getType().isArray()) ? type.substring(2, type
							.length() - 1)
							+ "[]" : type), true, VariableInfo.AT_END));
				}
			} else {
				String var = data.getAttributeString("var");
				String type = c.getField(var).getType().getName();
				vars.add(new VariableInfo(c.getField(var).getName(), ((c
						.getField(var).getType().isArray()) ? type.substring(2,
						type.length() - 1)
						+ "[]" : type), true, VariableInfo.AT_END));
			}
		} catch (Exception cnf) {
			BocoLog.error(this,cnf.getMessage());
		}

		return (VariableInfo[]) vars.toArray(new VariableInfo[] {});
	}
}