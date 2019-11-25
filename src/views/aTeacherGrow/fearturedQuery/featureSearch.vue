<template>
  <div class="app-container">
    <div style="margin-bottom: 20px">
      <div style="margin-bottom: 20px;margin-left: 20px;font-weight: bold;font-size:18px">
        <span>设置查询条件</span>
      </div>
      <el-select v-model="selectWord1" placeholder="选择筛选条件" style="margin-left: 20px">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-select v-model="selectWord2" placeholder="选择筛选条件">
        <el-option
          v-for="item in options2"
          :key="item.value"
          :label="item.label"
          :value="item.value"/>
      </el-select>
      <el-button type="primary" style="margin-left: 10px" @click="searchword">查询</el-button>
      <div style="float: right;margin-right: 20px">
        <el-input v-model="inputsearch" style="width: 300px" placeholder="请输入教师姓名/员工号"/>
        <el-button type="primary" style="margin-left: 10px" @click="searchword">查询</el-button>
      </div>
    </div>
    <div style="margin-left: 20px;margin-right: 20px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bold">
            选择显示的字段（
            <span style="color: red">下列选中为默认显示方式</span>）
          </span>
        </div>
        <div>
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
          <el-checkbox-group v-model="checkList" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="(item,index) in dataList" :key="index" :label="item" style="margin-top: 20px;margin-right: 10px;width: 150px"/>
          </el-checkbox-group>
        </div>

      </el-card>
    </div>

    <div v-show="show1" style="margin-top: 30px;margin-left: 20px;margin-right: 20px">
      <el-table :data="dataTable" border stripe>
        <el-table-column label="员工号" prop="id" align="center" width="150"/>
        <el-table-column label="姓名" prop="username" align="center" width="150"/>
        <el-table-column label="学校" prop="school" align="center" width="150"/>
        <el-table-column label="出生年月" prop="birthday" align="center" width="150"/>
        <el-table-column label="民族" prop="nation" align="center" width="150"/>
        <el-table-column label="政治面貌" prop="political_status" align="center" width="150"/>
        <el-table-column label="籍贯" prop="native_place" align="center" width="150"/>
        <el-table-column label="身份证号" prop="userid" align="center" width="150"/>
        <el-table-column label="部门" prop="department_level" align="center" width="150"/>
        <el-table-column label="毕业院校" prop="graduate_institutions" align="center" width="150"/>
        <el-table-column label="最高学历" prop="academic_name" align="center" width="150"/>
        <el-table-column label="教龄" prop="teaching_time" align="center" width="150"/>
        <el-table-column label="手机号码" prop="telephone_receiver" align="center" width="150"/>
        <el-table-column label="家庭住址" prop="home_address" align="center" width="150"/>
        <el-table-column label="Email" prop="Email" align="center" width="150"/>
        <el-table-column label="任教学科" prop="teach_subject" align="center" width="150"/>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="150">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" icon="el-icon-view" @click="handleClick(scope.row)">查看教师简历</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :visible.sync="dialogVisible"
        :fullscreen="true"
        class="dialog">
        <div class="dialoghome">
          <div class="dialogcontent">
            <div class="cardtitle">
              <div class="cardword">
                <span class="word_span">教 师 简 历 </span>
              </div>
              <div class="word_span1">
                <div>
                  <span>北京市中关村中学</span>
                </div>
                <div style="color: #cccccc">
                  <span>{{ inforow.username }}教师</span>
                </div>
              </div>
            </div>
            <div class="card_content"/>
            <div class="textcontent">
              <div class="titlecontent">
                <span>基本信息</span>
              </div>
              <div style="width: 95%;margin: 30px auto;">
                <el-row :gutter="20">
                  <el-col :span="10">
                    <div>
                      <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
                      <span style="margin-left: 20px">{{ inforow.username }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>出生年月：</span>
                      <span style="margin-left: 20px">{{ inforow.birthday }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>最高学历：</span>
                      <span style="margin-left: 20px">{{ inforow.academic_name }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门：</span>
                      <span style="margin-left: 20px">{{ inforow.department_level }}</span>
                    </div>
                  </el-col>
                  <el-col :span="8">
                    <div>
                      <span>民&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;族：</span>
                      <span style="margin-left: 20px">{{ inforow.nation }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：</span>
                      <span style="margin-left: 20px">{{ inforow.native_place }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>政治面貌：</span>
                      <span style="margin-left: 20px">{{ inforow.political_status }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>教&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
                      <span style="margin-left: 20px">{{ inforow.teaching_time }}</span>
                    </div>
                  </el-col>
                  <el-col :span="5">
                    <el-image
                      :src="url"
                      :fit="fit"
                      style="width: 100%; height: 120px"/>
                  </el-col>
                </el-row>
              </div>

            </div>
            <div class="textcontent2">
              <div class="titlecontent">
                <span>教育背景</span>
              </div>
              <div style="width: 95%;position:absolute;">
                <el-row :gutter="20" style="margin: 30px auto">
                  <el-col :span="10">
                    <div>
                      <span>毕业院校：</span>
                      <span style="margin-left: 20px">{{ inforow.graduate_institutions }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>毕业时间：</span>
                      <span style="margin-left: 20px"/>
                    </div>
                    <div style="margin-top: 20px">
                      <span>最高学历：</span>
                      <span style="margin-left: 20px">{{ inforow.academic_name }}</span>
                    </div>
                    <div style="margin-top: 20px"/>
                  </el-col>
                  <el-col :span="8">
                    <div>
                      <span>最高学位：</span>
                      <span style="margin-left: 20px"/>
                    </div>
                    <div style="margin-top: 20px">
                      <span>获得学位数量：</span>
                      <span style="margin-left: 20px"/>
                    </div>
                    <div style="margin-top: 20px">
                      <span>最高专业：</span>
                      <span style="margin-left: 20px"/>
                    </div>
                    <div style="margin-top: 20px"/>
                  </el-col>
                  <el-col :span="5">
                    <!--<el-image-->
                    <!--style="width: 100%; height: 120px"-->
                    <!--:src="url"-->
                    <!--:fit="fit"></el-image>-->
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="textcontent2">
              <div class="titlecontent">
                <span>工作经验</span>
              </div>
            </div>
            <div class="textcontent2">
              <div class="titlecontent">
                <span>得奖情况</span>
              </div>
            </div>
            <div class="textcontent2">
              <div class="titlecontent">
                <span>其他</span>
              </div>
            </div>
          </div>

        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
      <!--      我的简历-->
      <el-dialog
        :visible.sync="myDialogShow"
        :before-close="handleClose"
        class="dialog">
        <div class="myJianli">
          <div class="jianliContent">
            <div class="jianliHead"/>
            <div class="card_content"/>
            <h1>dfdfdf</h1>
            <h1>
              ddfdfdf
            </h1>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeatureSeach',
  data() {
    return {
      myDialogShow: false,
      dataList: ['学校', '部门', '姓名', '曾用名', '出生年月', '民族', '政治面貌', '入党团时间', '是否华侨', '籍贯', '身份证号',
        '原学历', '毕业院校', '原学制', '原毕业时间', '最高学历', '最高毕业院校', '最高学制', '最高专业', '最高毕业时间', '最高学位', '获得学位数量', '参加工作时间', '连续工龄',
        '工龄', '教龄', '户领', '外语语种', '外语水平', '岗位分类', '行政职务', '现岗位起始时间', '是否专任教师', '是否班主任', '班主任年限',
        '家庭电话', '办公电话', '家庭住址', '家庭邮编', '手机号码', 'Email', '聘用合同起始时间', '聘用合同终止时间', '任教学科类别',
        '任教学科', '专业技术年限', '工作状态', '身份', '学段', '工作岗位', '退休时间', '资格证书', '考核信息', '奖惩记录', '高层次人才信息', '岗位级别', '岗位工资', '薪资级别', '职称',
        '职称评定时间', '教师资格证书', '教师资格证书编号'],
      checkList: ['学校', '部门', '姓名', '出生年月', '民族', '政治面貌', '籍贯', '身份证号', '毕业院校', '原学制', '最高学历', '教龄', '家庭住址', '手机号码', 'Email', '任教学科'],
      checkAll: false,
      selectWord1: '',
      options1: [
        {
          value: '姓名',
          label: '姓名'
        },
        {
          value: '教研组',
          label: '教研组'
        }
      ],
      selectWord2: '',
      options2: [
        {
          value: '姓名',
          label: '姓名'
        },
        {
          value: '教研组',
          label: '教研组'
        }
      ],
      dataTable: [
        {
          id: '123456',
          username: '小红',
          school: '校本部',
          birthday: '1967-03-23',
          nation: '汉族',
          political_status: '党员',
          native_place: '北京',
          userid: '1234567890',
          department_level: '语文组',
          graduate_institutions: '北京大学',
          academic_name: '硕士',
          teaching_time: '35年',
          telephone_receiver: '000-0000000',
          home_address: '海淀区',
          Email: '123456789@163.com',
          teach_subject: '语文'
        },
        {
          id: '123666',
          username: '小灰',
          school: '清华园校区',
          birthday: '1968-12-23',
          nation: '汉族',
          political_status: '党员',
          native_place: '山东',
          userid: '66435624',
          department_level: '数学组',
          graduate_institutions: '清华大学',
          academic_name: '硕士',
          teaching_time: '20年',
          telephone_receiver: '123-8678455',
          home_address: '朝阳区',
          Email: '78563434@163.com',
          teach_subject: '数学'
        },
        {
          id: '45634545',
          username: '小白',
          school: '知春里分校',
          birthday: '1972-02-12',
          nation: '汉族',
          political_status: '党员',
          native_place: '北京',
          userid: '890564242',
          department_level: '英语组',
          graduate_institutions: '北京师范大学',
          academic_name: '硕士',
          teaching_time: '21年',
          telephone_receiver: '965-3453423',
          home_address: '东城区',
          Email: '94574787@163.com',
          teach_subject: '英语'
        },
        {
          id: '6345343',
          username: '小兰',
          school: '校本部',
          birthday: '1973-06-13',
          nation: '汉族',
          political_status: '党员',
          native_place: '辽宁',
          userid: '1234567890',
          department_level: '物理组',
          graduate_institutions: '北京师范大学',
          academic_name: '硕士',
          teaching_time: '28年',
          telephone_receiver: '674-654355',
          home_address: '海淀区',
          Email: '21432545@163.com',
          teach_subject: '物理'
        }
      ],
      inputsearch: '',
      show1: false,
      dialogVisible: false,
      isIndeterminate: true,
      inforow: {},
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  methods: {
    searchword() {
      const loading = this.$loading({
        lock: true,
        text: '正在加载中',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
      setTimeout(() => {
        this.show1 = true
        loading.close()
      }, 800)
    },
    handleClick(row) {
      // this.myDialogShow = true
      this.dialogVisible = true
      console.log(row)
      this.inforow = row
    },
    handleCheckAllChange(val) {
      this.checkList = val ? this.dataList : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.dataList.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.dataList.length
    }
  }
}
</script>

<style scoped>
  .dialogcontent {
    background-color: #F5F6FB;
    padding-top: 10px;
    border-radius: 5px;
    height: 100%;
  }
  .dialog >>> .el-dialog {
    background-color: #F2F2F2;
  }
  .textcontent {
    width: 580px;
    height: 200px;
    margin: 120px auto;
    margin-bottom: 0;
    border: 2px solid #D9D9D9;
    border-right: 0;
    position: relative;
  }
  .textcontent2 {
    width: 580px;
    height: 200px;
    margin: 0 auto;
    border: 2px solid #D9D9D9;
    border-right: 0;
    border-top: 0;
    position: relative;
  }
  .titlecontent {
    width: 100px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    border-radius: 100px;
    color: white;
    background-color: #607A9D;
    position: absolute;
    top: -10px;
    left: -15px
  }
  .imguser {
    height: 100px;
    width: 80px;
  }
  .dialoghome {
    padding: 10px;background-color: white;box-shadow: 0 0 20px grey; width: 700px;min-height: 800px;margin: 0 auto;
  }
  .cardtitle {
    height: 80px;width: 400px;background-color: #607A9D;float: left;text-align: center
  }
  .cardword {
    line-height: 80px;color: white;font-size: 28px;display: inline-block
  }
  .word_span {
    border-right: 1px solid white;padding-right: 10px
  }
  .word_span1 {
    display: inline-block;text-align: left;margin-left: 20px;color: white;
  }
  .card_content {
    height: 80px;width: 80px;border-radius: 50%;background-color: #607A9D;float: left;margin-left: -40px
  }
  .myJianli{
    padding: 10px;background-color: white;box-shadow: 0 0 20px grey; width: 700px;min-height: 800px;margin: 0 auto;
  }
  .jianliContent{
    background-color: #F5F6FB;
    padding-top: 10px;
    border-radius: 5px;
    height: 100%;
  }
  .jianliHead{
    height: 80px;width: 400px;background-color: #607A9D;float: left;text-align: center
  }
</style>
