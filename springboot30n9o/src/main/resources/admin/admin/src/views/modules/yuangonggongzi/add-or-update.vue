<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row >
      <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="发放时间" prop="fafangshijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.fafangshijian" 
                type="date"
                :readonly="ro.fafangshijian"
                placeholder="发放时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.fafangshijian" label="发放时间" prop="fafangshijian">
              <el-input v-model="ruleForm.fafangshijian" 
                placeholder="发放时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="员工工号" prop="yuangonggonghao">
          <el-input v-model="ruleForm.yuangonggonghao" 
              placeholder="员工工号" clearable  :readonly="ro.yuangonggonghao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="员工工号" prop="yuangonggonghao">
              <el-input v-model="ruleForm.yuangonggonghao" 
                placeholder="员工工号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="员工姓名" prop="yuangongxingming">
          <el-input v-model="ruleForm.yuangongxingming" 
              placeholder="员工姓名" clearable  :readonly="ro.yuangongxingming"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="员工姓名" prop="yuangongxingming">
              <el-input v-model="ruleForm.yuangongxingming" 
                placeholder="员工姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="职位" prop="zhiwei">
          <el-input v-model="ruleForm.zhiwei" 
              placeholder="职位" clearable  :readonly="ro.zhiwei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="职位" prop="zhiwei">
              <el-input v-model="ruleForm.zhiwei" 
                placeholder="职位" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="部门" prop="bumen">
          <el-input v-model="ruleForm.bumen" 
              placeholder="部门" clearable  :readonly="ro.bumen"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="部门" prop="bumen">
              <el-input v-model="ruleForm.bumen" 
                placeholder="部门" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="基本工资" prop="jibengongzi">
          <el-input v-model="ruleForm.jibengongzi" 
              placeholder="基本工资" clearable  :readonly="ro.jibengongzi"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="基本工资" prop="jibengongzi">
              <el-input v-model="ruleForm.jibengongzi" 
                placeholder="基本工资" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="绩效" prop="jixiao">
          <el-input v-model="ruleForm.jixiao" 
              placeholder="绩效" clearable  :readonly="ro.jixiao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="绩效" prop="jixiao">
              <el-input v-model="ruleForm.jixiao" 
                placeholder="绩效" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="车补" prop="chebu">
          <el-input v-model="ruleForm.chebu" 
              placeholder="车补" clearable  :readonly="ro.chebu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="车补" prop="chebu">
              <el-input v-model="ruleForm.chebu" 
                placeholder="车补" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="餐补" prop="canbu">
          <el-input v-model="ruleForm.canbu" 
              placeholder="餐补" clearable  :readonly="ro.canbu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="餐补" prop="canbu">
              <el-input v-model="ruleForm.canbu" 
                placeholder="餐补" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="房补" prop="fangbu">
          <el-input v-model="ruleForm.fangbu" 
              placeholder="房补" clearable  :readonly="ro.fangbu"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="房补" prop="fangbu">
              <el-input v-model="ruleForm.fangbu" 
                placeholder="房补" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="全勤奖" prop="quanqinjiang">
          <el-input v-model="ruleForm.quanqinjiang" 
              placeholder="全勤奖" clearable  :readonly="ro.quanqinjiang"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="全勤奖" prop="quanqinjiang">
              <el-input v-model="ruleForm.quanqinjiang" 
                placeholder="全勤奖" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="加班费" prop="jiabanfei">
          <el-input v-model="ruleForm.jiabanfei" 
              placeholder="加班费" clearable  :readonly="ro.jiabanfei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="加班费" prop="jiabanfei">
              <el-input v-model="ruleForm.jiabanfei" 
                placeholder="加班费" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="五险一金" prop="wuxianyijin">
          <el-input v-model="ruleForm.wuxianyijin" 
              placeholder="五险一金" clearable  :readonly="ro.wuxianyijin"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="五险一金" prop="wuxianyijin">
              <el-input v-model="ruleForm.wuxianyijin" 
                placeholder="五险一金" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="扣绩效" prop="koujixiao">
          <el-input v-model="ruleForm.koujixiao" 
              placeholder="扣绩效" clearable  :readonly="ro.koujixiao"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="扣绩效" prop="koujixiao">
              <el-input v-model="ruleForm.koujixiao" 
                placeholder="扣绩效" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="旷工费" prop="kuanggongfei">
          <el-input v-model="ruleForm.kuanggongfei" 
              placeholder="旷工费" clearable  :readonly="ro.kuanggongfei"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="旷工费" prop="kuanggongfei">
              <el-input v-model="ruleForm.kuanggongfei" 
                placeholder="旷工费" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="其它扣款" prop="qitakoukuan">
          <el-input v-model="ruleForm.qitakoukuan" 
              placeholder="其它扣款" clearable  :readonly="ro.qitakoukuan"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="其它扣款" prop="qitakoukuan">
              <el-input v-model="ruleForm.qitakoukuan" 
                placeholder="其它扣款" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="实发工资" prop="shifagongzi">
            <el-input v-model="shifagongzi"
                placeholder="实发工资" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shifagongzi" label="实发工资" prop="shifagongzi">
              <el-input v-model="ruleForm.shifagongzi" 
                placeholder="实发工资" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
      </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item class="textarea" v-if="type!='info'" label="工资备注" prop="gongzibeizhu">
                <el-input
                  style="min-width: 200px; max-width: 600px;"
                  type="textarea"
                  :rows="8"
                  placeholder="工资备注"
                  v-model="ruleForm.gongzibeizhu" >
                </el-input>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.gongzibeizhu" label="工资备注" prop="gongzibeizhu">
                    <span>{{ruleForm.gongzibeizhu}}</span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
      <el-form-item class="btn">
        <el-button  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"rgba(45, 103, 81, 1)","selectFontSize":"14px","btnCancelBorderColor":"rgba(112, 112, 112, 1)","inputBorderRadius":"0","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"18px","textareaBorderRadius":"0","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"145px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"44px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"rgba(0, 0, 0, 1)","addEditBoxColor":"rgba(255, 255, 255, 1)","dateIconFontSize":"14px","btnSaveBgColor":"rgba(237, 247, 255, 1)","uploadIconFontColor":"#8c939d","textareaBorderColor":"rgba(112, 112, 112, 1)","btnCancelBgColor":"rgba(232, 232, 232, 1)","selectLableColor":"rgba(0, 0, 0, 1)","btnSaveBorderStyle":"dashed","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"0","btnCancelBorderStyle":"dashed","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"50px","inputHeight":"40px","btnCancelFontColor":"rgba(112, 112, 112, 1)","dateBorderColor":"rgba(112, 112, 112, 1)","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"rgba(0, 0, 0, 1)","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"rgba(0, 0, 0, 1)","uploadHeight":"148px","textareaLableColor":"rgba(0, 0, 0, 1)","textareaLableFontSize":"14px","btnCancelFontSize":"18px","inputBorderStyle":"solid","btnCancelBorderRadius":"44px","inputBgColor":"#fff","inputLableFontSize":"14px","uploadLableColor":"rgba(0, 0, 0, 1)","uploadBorderRadius":"0","btnSaveHeight":"50px","selectBgColor":"#fff","btnSaveWidth":"145px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"rgba(112, 112, 112, 1)","inputBorderColor":"rgba(112, 112, 112, 1)","uploadBorderColor":"rgba(112, 112, 112, 1)","textareaFontColor":"rgba(0, 0, 0, 1)","selectBorderWidth":"1px","dateFontColor":"rgba(0, 0, 0, 1)","btnCancelBorderWidth":"4px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"0","selectFontColor":"rgba(0, 0, 0, 1)","btnSaveBorderColor":"rgba(45, 103, 81, 1)","btnSaveBorderWidth":"4px"},
      id: '',
      type: '',
      ro:{
	fafangshijian : false,
	yuangonggonghao : false,
	yuangongxingming : false,
	zhiwei : false,
	bumen : false,
	jibengongzi : false,
	jixiao : false,
	chebu : false,
	canbu : false,
	fangbu : false,
	quanqinjiang : false,
	jiabanfei : false,
	wuxianyijin : false,
	koujixiao : false,
	kuanggongfei : false,
	qitakoukuan : false,
	shifagongzi : false,
	gongzibeizhu : false,
      },
      ruleForm: {
        fafangshijian: '',
        yuangonggonghao: '',
        yuangongxingming: '',
        zhiwei: '',
        bumen: '',
        jibengongzi: '',
        jixiao: '',
        chebu: '',
        canbu: '',
        fangbu: '',
        quanqinjiang: '',
        jiabanfei: '',
        wuxianyijin: '',
        koujixiao: '',
        kuanggongfei: '',
        qitakoukuan: '',
        shifagongzi: '',
        gongzibeizhu: '',
      },
      rules: {
          fafangshijian: [
                { required: true, message: '发放时间不能为空', trigger: 'blur' },
          ],
          yuangonggonghao: [
          ],
          yuangongxingming: [
          ],
          zhiwei: [
          ],
          bumen: [
          ],
          jibengongzi: [
                { required: true, message: '基本工资不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          jixiao: [
                { required: true, message: '绩效不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          chebu: [
                { required: true, message: '车补不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          canbu: [
                { required: true, message: '餐补不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          fangbu: [
                { required: true, message: '房补不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          quanqinjiang: [
                { required: true, message: '全勤奖不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          jiabanfei: [
                { required: true, message: '加班费不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          wuxianyijin: [
                { required: true, message: '五险一金不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          koujixiao: [
                { required: true, message: '扣绩效不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          kuanggongfei: [
                { required: true, message: '旷工费不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          qitakoukuan: [
                { required: true, message: '其它扣款不能为空', trigger: 'blur' },
                { validator: validateNumber, trigger: 'blur' },
          ],
          shifagongzi: [
                { validator: validateNumber, trigger: 'blur' },
          ],
          gongzibeizhu: [
          ],
      }
    };
  },
  props: ["parent"],
  computed: {
    shifagongzi: {
      get: function () {
        return 0+parseFloat(this.ruleForm.jibengongzi==""?0:this.ruleForm.jibengongzi)+parseFloat(this.ruleForm.jixiao==""?0:this.ruleForm.jixiao)+parseFloat(this.ruleForm.chebu==""?0:this.ruleForm.chebu)+parseFloat(this.ruleForm.canbu==""?0:this.ruleForm.canbu)+parseFloat(this.ruleForm.fangbu==""?0:this.ruleForm.fangbu)+parseFloat(this.ruleForm.quanqinjiang==""?0:this.ruleForm.quanqinjiang)+parseFloat(this.ruleForm.jiabanfei==""?0:this.ruleForm.jiabanfei)-parseFloat(this.ruleForm.wuxianyijin==""?0:this.ruleForm.wuxianyijin)-parseFloat(this.ruleForm.koujixiao==""?0:this.ruleForm.koujixiao)-parseFloat(this.ruleForm.kuanggongfei==""?0:this.ruleForm.kuanggongfei)-parseFloat(this.ruleForm.qitakoukuan==""?0:this.ruleForm.qitakoukuan) || 0
      }
    },



  },
  created() {
	this.ruleForm.fafangshijian = this.getCurDate()
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
    // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='logistics'){
        this.logistics=false;
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          if(o=='fafangshijian'){
            this.ruleForm.fafangshijian = obj[o];
	    this.ro.fafangshijian = true;
            continue;
          }
          if(o=='yuangonggonghao'){
            this.ruleForm.yuangonggonghao = obj[o];
	    this.ro.yuangonggonghao = true;
            continue;
          }
          if(o=='yuangongxingming'){
            this.ruleForm.yuangongxingming = obj[o];
	    this.ro.yuangongxingming = true;
            continue;
          }
          if(o=='zhiwei'){
            this.ruleForm.zhiwei = obj[o];
	    this.ro.zhiwei = true;
            continue;
          }
          if(o=='bumen'){
            this.ruleForm.bumen = obj[o];
	    this.ro.bumen = true;
            continue;
          }
          if(o=='jibengongzi'){
            this.ruleForm.jibengongzi = obj[o];
	    this.ro.jibengongzi = true;
            continue;
          }
          if(o=='jixiao'){
            this.ruleForm.jixiao = obj[o];
	    this.ro.jixiao = true;
            continue;
          }
          if(o=='chebu'){
            this.ruleForm.chebu = obj[o];
	    this.ro.chebu = true;
            continue;
          }
          if(o=='canbu'){
            this.ruleForm.canbu = obj[o];
	    this.ro.canbu = true;
            continue;
          }
          if(o=='fangbu'){
            this.ruleForm.fangbu = obj[o];
	    this.ro.fangbu = true;
            continue;
          }
          if(o=='quanqinjiang'){
            this.ruleForm.quanqinjiang = obj[o];
	    this.ro.quanqinjiang = true;
            continue;
          }
          if(o=='jiabanfei'){
            this.ruleForm.jiabanfei = obj[o];
	    this.ro.jiabanfei = true;
            continue;
          }
          if(o=='wuxianyijin'){
            this.ruleForm.wuxianyijin = obj[o];
	    this.ro.wuxianyijin = true;
            continue;
          }
          if(o=='koujixiao'){
            this.ruleForm.koujixiao = obj[o];
	    this.ro.koujixiao = true;
            continue;
          }
          if(o=='kuanggongfei'){
            this.ruleForm.kuanggongfei = obj[o];
	    this.ro.kuanggongfei = true;
            continue;
          }
          if(o=='qitakoukuan'){
            this.ruleForm.qitakoukuan = obj[o];
	    this.ro.qitakoukuan = true;
            continue;
          }
          if(o=='shifagongzi'){
            this.ruleForm.shifagongzi = obj[o];
	    this.ro.shifagongzi = true;
            continue;
          }
          if(o=='gongzibeizhu'){
            this.ruleForm.gongzibeizhu = obj[o];
	    this.ro.gongzibeizhu = true;
            continue;
          }
        }
      }
      // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
    // 多级联动参数
    info(id) {
      this.$http({
        url: `yuangonggongzi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {
        this.ruleForm.shifagongzi = this.shifagongzi





































var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(!statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "yuangonggongzi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `yuangonggongzi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.yuangonggongziCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `yuangonggongzi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.yuangonggongziCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.yuangonggongziCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
	background-color: transparent;
}
.btn .el-button {
  padding: 0;
}
</style>
