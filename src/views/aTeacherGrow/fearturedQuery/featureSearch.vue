<template>
  <div class="app-container">
    <div style="margin-bottom: 20px">
      <div style="margin-bottom: 20px;margin-left: 20px;font-weight: bold;font-size:18px">
        <span>设置查询条件</span>
      </div>
      <el-select v-model="selectWord1" placeholder="选择筛选条件" style="margin-left: 20px" @change="getConditionValue">
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
          <!--          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>-->
          <el-checkbox-group v-model="checkList" @change="myFilter">
            <el-checkbox v-for="(item,index) in tableList" :key="index" :label="item.label" style="margin-top: 20px;margin-right: 10px;width: 150px">
              {{ item.value }}
            </el-checkbox>
          </el-checkbox-group>
        </div>

      </el-card>
    </div>

    <div v-show="show1" style="margin-top: 30px;margin-left: 20px;margin-right: 20px">
      <el-table :data="dataTable.slice((currentPage-1)*pagesize,currentPage*pagesize)" border stripe>
        <el-table-column v-if="uncheckList.username" label="教师姓名" prop="username" align="center" width="150"/>
        <el-table-column v-if="uncheckList.gender" label="性别" prop="gender" align="center" width="150"/>
        <el-table-column v-if="uncheckList.born_time" label="出生年月" prop="born_time" align="center" width="150"/>
        <el-table-column v-if="uncheckList.id_num" label="身份证号码" prop="id_num" align="center" width="150"/>
        <el-table-column v-if="uncheckList.nation" label="民族" prop="nation" align="center" width="150"/>
        <el-table-column v-if="uncheckList.native_place" label="籍贯" prop="gender" align="center" width="150"/>
        <el-table-column v-if="uncheckList.home_address" label="家庭住址" prop="home_address" align="center" width="150"/>
        <el-table-column v-if="uncheckList.home_phone" label="家庭电话" prop="home_phone" align="center" width="150"/>
        <el-table-column v-if="uncheckList.email" label="电子邮箱" prop="email" align="center" width="150"/>
        <el-table-column v-if="uncheckList.mobile" label="手机号码" prop="mobile" align="center" width="150"/>
        <el-table-column v-if="uncheckList.home_zipcode" label="邮编" prop="home_zipcode" align="center" width="150"/>
        <el-table-column v-if="uncheckList.status" label="工作状态" prop="status" align="center" width="150"/>
        <el-table-column v-if="uncheckList.political_status" label="政治面貌" prop="political_status" align="center" width="150"/>
        <el-table-column v-if="uncheckList.political_time" label="入党团时间" prop="political_time" align="center" width="150"/>
        <el-table-column v-if="uncheckList.is_series" label="人员类别" prop="is_series" align="center" width="150"/>
        <el-table-column v-if="uncheckList.quali_cert" label="是否有教师资格证书" prop="quali_cert" align="center" width="150"/>
        <el-table-column v-if="uncheckList.quali_cert_num" label="教师资格证书编号" prop="quali_cert_num" align="center" width="150"/>
        <el-table-column v-if="uncheckList.contract_start_date" label="合同起始时间" prop="contract_start_date" align="center" width="150"/>
        <el-table-column v-if="uncheckList.contract_end_date" label="合同结束时间" prop="contract_end_date" align="center" width="150"/>
        <el-table-column v-if="uncheckList.former_grad_time" label="原毕业时间" prop="former_grad_time" align="center" width="150"/>
        <el-table-column v-if="uncheckList.staff_number" label="教职工工号" prop="staff_number" align="center" width="150"/>
        <el-table-column v-if="uncheckList.higeducation" label="最高学历" prop="higeducation" align="center" width="150"/>
        <el-table-column v-if="uncheckList.zhicheng" label="职称" prop="zhicheng" align="center" width="150"/>
        <el-table-column v-if="uncheckList.zhichengTime" label="职称评定时间" prop="zhichengTime" align="center" width="150"/>
        <el-table-column v-if="uncheckList.high_degree" label="最高学位" prop="high_degree" align="center" width="150"/>
        <el-table-column v-if="uncheckList.former_system" label="原学制" prop="former_system" align="center" width="150"/>
        <el-table-column v-if="uncheckList.nickname" label="曾用名" prop="nickname" align="center" width="150"/>
        <el-table-column v-if="uncheckList.staffCategory" label="岗位分类" prop="staffCategory" align="center" width="150"/>
        <el-table-column v-if="uncheckList.tDept" label="教研组" prop="tDept" align="center" width="150"/>
        <el-table-column v-if="uncheckList.former_major" label="原专业" prop="former_major" align="center" width="150"/>
        <el-table-column v-if="uncheckList.t_subject" label="任教学科" prop="t_subject" align="center" width="150"/>
        <el-table-column v-if="uncheckList.t_into_school_time" label="进入本校时间" prop="t_into_school_time" align="center" width="150"/>
        <el-table-column v-if="uncheckList.former_edu" label="原学历" prop="former_edu" align="center" width="150"/>
        <el-table-column v-if="uncheckList.t_area" label="学段" prop="t_area" align="center" width="150"/>
        <el-table-column v-if="uncheckList.saraly_level" label="工资等级" prop="saraly_level" align="center" width="150"/>
        <el-table-column v-if="uncheckList.former_grad_college" label="原毕业院校" prop="former_grad_college" align="center" width="150"/>
        <el-table-column v-if="uncheckList.highest_major" label="最高专业" prop="highest_major" align="center" width="150"/>
        <el-table-column v-if="uncheckList.highest_system" label="最高学制" prop="highest_system" align="center" width="150"/>
        <el-table-column v-if="uncheckList.is_full_time_teacher" label="是否专任教师" prop="is_full_time_teacher" align="center" width="150"/>
        <el-table-column v-if="uncheckList.job_time" label="参加工作年月" prop="job_time" align="center" width="150"/>
        <el-table-column v-if="uncheckList.position_level" label="岗位等级" prop="position_level" align="center" width="150"/>
        <el-table-column v-if="uncheckList.highest_grad_college" label="最高毕业院校" prop="highest_grad_college" align="center" width="150"/>
        <el-table-column v-if="uncheckList.highest_grad_time" label="最高毕业时间" prop="highest_grad_time" align="center" width="150"/>
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
      <div class="fenye">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="10"
          :total="dataTable.length"
          style="margin-top:20px;"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
      <el-dialog
        :visible.sync="dialogVisible"
        width="60%"
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
                      <span style="margin-left: 20px">{{ inforow.born_time }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>手机号码：</span>
                      <span style="margin-left: 20px">{{ inforow.mobile }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门：</span>
                      <span style="margin-left: 20px">{{ inforow.tDept }}</span>
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
                      <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span>
                      <span style="margin-left: 20px">{{ inforow.zhicheng }}</span>
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
                      <span>原毕业院校：</span>
                      <span style="margin-left: 20px">{{ inforow.former_grad_college }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>毕业时间：</span>
                      <span style="margin-left: 20px">{{ inforow.former_grad_time }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>最高学历：</span>
                      <span style="margin-left: 20px">{{ inforow.higeducation }}</span>
                    </div>
                    <div style="margin-top: 20px"/>
                  </el-col>
                  <el-col :span="10">
                    <div>
                      <span>最高学位：</span>
                      <span style="margin-left: 20px">{{ inforow.high_degree }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>最高毕业院校：</span>
                      <span style="margin-left: 20px">{{ inforow.highest_grad_college }}</span>
                    </div>
                    <div style="margin-top: 20px">
                      <span>最高专业：</span>
                      <span style="margin-left: 20px">{{ inforow.higeducation }}</span>
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
import { getToken } from '@/utils/auth'
import { getFilterCondition, getFilterValue, getTeacherByFilter } from '@/api/featureSearch'
export default {
  name: 'FeatureSeach',
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      token: getToken(),
      myDialogShow: false,
      tableList: [
        { label: 'username', value: '教师姓名' },
        { label: 'gender', value: '性别 ' },
        { label: 'born_time', value: '出生年月' },
        { label: 'id_num', value: '身份证号码' },
        { label: 'nation', value: '民族 ' },
        { label: 'native_place', value: '籍贯 ' },
        { label: 'home_address', value: '家庭住址 ' },
        { label: 'home_phone', value: '家庭电话' },
        { label: 'email', value: '电子邮箱' },
        { label: 'mobile', value: '手机号码' },
        { label: 'home_zipcode', value: '邮编' },
        { label: 'status', value: '工作状态' },
        { label: 'political_status', value: '政治面貌' },
        { label: 'political_time', value: '入党团时间' },
        { label: 'is_series', value: '人员类别' },
        { label: 'quali_cert', value: '是否有教师资格证书' },
        { label: 'quali_cert_num', value: '教师资格证书编号' },
        { label: 'contract_start_date', value: '合同起始时间' },
        { label: 'contract_end_date', value: '合同结束时间' },
        { label: 'former_grad_time', value: '原毕业时间' },
        { label: 'staff_number', value: '教职工工号' },
        { label: 'higeducation', value: '最高学历' },
        { label: 'zhicheng', value: '职称' },
        { label: 'zhichengTime', value: '职称评定时间' },
        { label: 'high_degree', value: '最高学位' },
        { label: 'former_system', value: '原学制' },
        { label: 'nickname', value: '曾用名' },
        { label: 'staffCategory', value: '岗位分类' },
        { label: 'tDept', value: '教研组' },
        { label: 'former_major', value: '原专业' },
        { label: 't-subject', value: '任教学科' },
        { label: 't-into_school_time', value: '进入本校时间' },
        { label: 'former_edu', value: '原学历' },
        { label: 't_area', value: '学段' },
        { label: 'saraly_level', value: '工资等级' },
        { label: 'former_grad_college', value: '原毕业院校' },
        { label: 'highest_major', value: '最高专业' },
        { label: 'highest_system', value: '最高学制' },
        { label: 'is_full_time_teacher', value: '是否专任教师' },
        { label: 'job_time', value: '参加工作年月' },
        { label: 'position_level', value: '岗位等级' },
        { label: 'job_time', value: '最高毕业院校' },
        { label: 'position_level', value: '最高毕业时间' }
      ],
      dataList: ['学校', '部门', '姓名', '曾用名', '出生年月', '民族', '政治面貌', '入党团时间', '是否华侨', '籍贯', '身份证号',
        '原学历', '毕业院校', '原学制', '原毕业时间', '最高学历', '最高毕业院校', '最高学制', '最高专业', '最高毕业时间', '最高学位', '获得学位数量', '参加工作时间', '连续工龄',
        '工龄', '教龄', '户领', '外语语种', '外语水平', '岗位分类', '行政职务', '现岗位起始时间', '是否专任教师', '是否班主任', '班主任年限',
        '家庭电话', '办公电话', '家庭住址', '家庭邮编', '手机号码', 'Email', '聘用合同起始时间', '聘用合同终止时间', '任教学科类别',
        '任教学科', '专业技术年限', '工作状态', '身份', '学段', '工作岗位', '退休时间', '资格证书', '考核信息', '奖惩记录', '高层次人才信息', '岗位级别', '岗位工资', '薪资级别', '职称',
        '职称评定时间', '教师资格证书', '教师资格证书编号'],
      checkList: [], // 选中展示的字段
      uncheckList: {}, // 控制隐藏的字段
      checkAll: true,
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
  mounted() {
    this.myFilter()
    this.getCondition()
  },
  methods: {
    // 控制字段展示的函数
    myFilter(val) {
      console.log('我触发根据条件显示字段了')
      if (val === undefined) {
        for (const index in this.tableList) {
          const table = this.tableList[index]
          this.checkList.push(table.label)
          this.uncheckList[table.label] = true
        }
        console.log(this.checkList)
        for (const item in this.uncheckList) {
          this.uncheckList[item] = false
        }
        for (const index in this.checkList) {
          const name = this.checkList[index]
          if (name in this.uncheckList) {
            this.uncheckList[name] = true
          }
        }
        this.$forceUpdate()
      } else {
        console.log('我触发另外一边')
        console.log(this.uncheckList)
        for (const item in this.uncheckList) {
          this.uncheckList[item] = false
        }
        for (const index in this.checkList) {
          const name = this.checkList[index]
          if (name in this.uncheckList) {
            this.uncheckList[name] = true
          }
        }
        this.$forceUpdate()
      }
    },
    getCondition: function() {
      getFilterCondition(this.token).then(response => {
        console.log('测试获取筛选条件')
        console.log(response.data)
        this.options1 = []
        for (let i = 0; i < response.data.queryConditions.length; i++) {
          const obj = {
            value: response.data.queryConditions[i],
            label: response.data.queryConditions[i]
          }
          this.options1.push(obj)
        }
      })
    },
    getConditionValue: function() {
      const prams = {
        queryConditions: this.selectWord1
      }
      getFilterValue({ ...prams, token: this.token }).then(response => {
        console.log('测试筛选条件对应的值')
        console.log(response.data)
        this.options2 = []
        for (let i = 0; i < response.data.values.length; i++) {
          const obj = {
            value: response.data.values[i],
            label: response.data.values[i]
          }
          this.options2.push(obj)
        }
        this.selectWord2 = ''
      })
    },
    searchword() {
      if (this.selectWord2 === '' || this.selectWord1 === '') {
        this.$message({
          message: '未输入查询条件，无法查询',
          type: 'warning'
        })
      } else {
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
        this.dataTable = []
        const prams = {
          condition: this.selectWord1,
          value: this.selectWord2
        }
        getTeacherByFilter({ ...prams, token: this.token }).then(response => {
          console.log('测试找到的老师')
          console.log(response.data.getTecInfo)
          this.dataTable = response.data.getTecInfo
        })
      }
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
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
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
  .fenye{
    text-align: center;
  }
</style>
