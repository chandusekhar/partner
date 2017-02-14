package com.boco.eoms.autosheet.util;


import java.util.*;
import com.boco.eoms.db.util.*;
import com.boco.eoms.common.util.*;


/*****************************************************************
 ��ָ����codename,record_id from taw_codecontent��ȡ��������hashtable,
 ��ͨ��getCodeContentInfo����פ�����ڴ��������ȡ���ݵķ�����
 *****************************************************************/
public class DictDetail{

  private ArrayList codenames=null;
  private ArrayList recordids=null;
  LogMan log=LogMan.getInstance();
  private RecordSet rt = null;
  private StaticObject staticobj = null;

  private int current_index = -1;
  private int array_size = 0;

  public DictDetail(String typeid){
    try{
      staticobj = StaticObject.getInstance();
      current_index=-1;
      getCodeContentInfo(typeid) ;
      array_size = recordids.size();
    }catch(Exception e){
      e.printStackTrace();
    }
  }
  public boolean reset(){
    this.current_index=-1;
    return true;
  }

  private void getCodeContentInfo(String typeid) throws Exception{
    if(staticobj.getObject("CodeContentInfo") == null)
      setCodeContentInfo(typeid);
    codenames=(ArrayList)(staticobj.getRecordFromObj("CodeContentInfo","codenames"));
    recordids=(ArrayList)(staticobj.getRecordFromObj("CodeContentInfo","recordids"));

  }
  private void setCodeContentInfo(String typeid) throws Exception{
    if(codenames!=null)
      codenames.clear();
    else
      codenames=new ArrayList();
    if(recordids!=null)
      recordids.clear();
    else
      recordids=new ArrayList();

    rt = new RecordSet() ;
    try{
      rt.execute("select distinct dict_name,dict_id from taw_ws_dict where dict_type="+typeid) ;
      while(rt.next()){
        codenames.add(StaticMethod.null2String(rt.getString(1)));
        recordids.add(StaticMethod.null2String(rt.getString(2)));
      }
    }
    catch(Exception e) {
     // writeLog(e) ;
      throw e ;
    }
    staticobj.putRecordToObj("CodeContentInfo","codenames",codenames);
    staticobj.putRecordToObj("CodeContentInfo","recordids",recordids);

  }

  public int getCounts()
  {
          return 	array_size;
  }

  public boolean next(){

    if((current_index+1) < array_size){
      current_index++;
      return true;
    }
    else{
      current_index = -1;
      return false;
    }
  }
  /**************************************
   ���ݲ�����λ��n����¼,����Ϊ��ָ��ǰ������,����Ϊ��,��ʾ�Ӻ���ǰ��,
   @param index ����¼��λ����¼�ĵ�index��
   @return boolean
   */
  public boolean absolute(int index){
    int line=index;
    if(line>0&&line>=this.getCounts()){
      line=this.getCounts();
    }
    if(line<0&&(-line)>this.getCounts()){
      line=1;
    }else if(line<0){
      line=this.getCounts()+line+1;
    }
    current_index=line-1;
    return true;
  }


  public String getRecordID(String name){
    current_index=codenames.indexOf(name);
    String id="";
    try{
      id=(String)recordids.get(current_index);
    }catch(Exception e){
      e.printStackTrace();
    }finally{
      return id;
    }
  }

  public String getRecordID(){
    return (String)(recordids.get(current_index));
  }
  /**********
   ����
   @return String
   */
  public String getCodeName(){
    return (String)(codenames.get(current_index));
  }
  public String getCodeName(String id){
      current_index=recordids.indexOf(id);
      String name="";
      try{
        name=(String)codenames.get(current_index);
      }catch(Exception e){
        log.writeLog(e.toString());
      }
      return name;
  }

  public void removeOSCache(){
    staticobj.removeObject("CodeContentInfo");

  }
}