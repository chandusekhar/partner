package com.boco.eoms.workbench.memo.webapp.form;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts.action.ActionMapping;
import com.boco.eoms.base.webapp.form.BaseForm;

/**
 * Generated by XDoclet/actionform. This class can be further processed with XDoclet/webdoclet/strutsconfigxml and XDoclet/webdoclet/strutsvalidationxml.
 *
 * @struts.form name="tawWorkbenchMemoSendLogForm" 
 */
public class TawWorkbenchMemoSendLogForm
    extends    BaseForm
    implements java.io.Serializable
{

    protected String id;

    protected String memoId;

    protected String[] reciever;

    protected String sendmanner;

    protected String sendtime;
    protected String title;

    protected String content;

    protected String userid;

    protected String creattime;

    protected String level;

    protected String sendflag;
 
    public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public String getCreattime() {
		return creattime;
	}

	public void setCreattime(String creattime) {
		this.creattime = creattime;
	}

	public String getLevel() {
		return level;
	}

	public void setLevel(String level) {
		this.level = level;
	}

	public String getSendflag() {
		return sendflag;
	}

	public void setSendflag(String sendflag) {
		this.sendflag = sendflag;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	/** Default empty constructor. */
    public TawWorkbenchMemoSendLogForm() {}

    public String getId()
    {
        return this.id;
    }
   /**
    */

    public void setId( String id )
    {
        this.id = id;
    }

    public String getMemoId()
    {
        return this.memoId;
    }
   /**
    */

    public void setMemoId( String memoId )
    {
        this.memoId = memoId;
    }

    public String[] getReciever()
    {
        return this.reciever;
    }
   /**
    */

    public void setReciever( String[] reciever )
    {
        this.reciever = reciever;
    }

    public String getSendmanner()
    {
        return this.sendmanner;
    }
   /**
    */

    public void setSendmanner( String sendmanner )
    {
        this.sendmanner = sendmanner;
    }

    public String getSendtime()
    {
        return this.sendtime;
    }
   /**
    */

    public void setSendtime( String sendtime )
    {
        this.sendtime = sendtime;
    }

        /* To add non XDoclet-generated methods, create a file named
           xdoclet-TawWorkbenchMemoSendLogForm.java 
           containing the additional code and place it in your metadata/web directory.
        */
    /**
     * @see org.apache.struts.action.ActionForm#reset(org.apache.struts.action.ActionMapping,
     *                                                javax.servlet.http.HttpServletRequest)
     */
    public void reset(ActionMapping mapping, HttpServletRequest request) {
        // reset any boolean data types to false

    }

}