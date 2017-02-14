/*
 * WARNING: DO NOT EDIT THIS FILE. This is a generated file that is synchronized
 * by MyEclipse Hibernate tool integration.
 *
 * Created Tue Nov 27 11:10:40 CST 2007 by MyEclipse Hibernate Tool.
 */
package com.boco.eoms.check.model;

import java.io.Serializable;

import com.boco.eoms.duty.model.TawRmAddonsTable;

/**
 * A class that represents a row in the TAW_ROOMDUTYC_ADDONSTABLE table. 
 * You can customize the behavior of this class by editing the class, {@link TawRoomdutycAddonstable()}.
 * WARNING: DO NOT EDIT THIS FILE. This is a generated file that is synchronized
 * by MyEclipse Hibernate tool integration.
 */
public class TawRoomdutycAddonstable implements Serializable
    
{

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/** The value of the tawRoomdutyCheck association. */
    private TawRoomdutyCheck tawRoomdutyCheck;

    /** The value of the tawWpAddonstable association. */
    private TawRmAddonsTable tawRmAddonsTable;

    /** The value of the simple dataurl property. */
    private java.lang.String dataurl;

    /**
     * Simple constructor of AbstractTawRoomdutycAddonstable instances.
     */
    public TawRoomdutycAddonstable()
    {
    }

    /**
     * Return the value of the ROOMDUTYID column.
     * @return TawRoomdutyCheck
     */
    public TawRoomdutyCheck getTawRoomdutyCheck()
    {
        return this.tawRoomdutyCheck;
    }

    /**
     * Set the value of the ROOMDUTYID column.
     * @param tawRoomdutyCheck
     */
    public void setTawRoomdutyCheck(TawRoomdutyCheck tawRoomdutyCheck)
    {
        this.tawRoomdutyCheck = tawRoomdutyCheck;
    }

    /**
     * Return the value of the ADDONSTABLEID column.
     * @return TawWpAddonstable
     */
//    public TawwpAddonsTable getTawWpAddonstable()
//    {
//        return this.tawWpAddonstable;
//    }
//
//    /**
//     * Set the value of the ADDONSTABLEID column.
//     * @param tawWpAddonstable
//     */
//    public void setTawWpAddonstable(TawwpAddonsTable tawWpAddonstable)
//    {
//        this.tawWpAddonstable = tawWpAddonstable;
//    }

    /**
     * Return the value of the DATAURL column.
     * @return java.lang.String
     */
    public java.lang.String getDataurl()
    {
        return this.dataurl;
    }

    /**
     * Set the value of the DATAURL column.
     * @param dataurl
     */
    public void setDataurl(java.lang.String dataurl)
    {
        this.dataurl = dataurl;
    }

	public TawRmAddonsTable getTawRmAddonsTable() {
		return tawRmAddonsTable;
	}

	public void setTawRmAddonsTable(TawRmAddonsTable tawRmAddonsTable) {
		this.tawRmAddonsTable = tawRmAddonsTable;
	}
}