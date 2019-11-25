<template>
  <div class="app-container">
    <el-table :data="tableData .slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="审核编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="个人信息修改类型">
        <template slot-scope="scope">
          <span>{{ scope.row.classLabel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{ scope.row.askPersonName }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="审核人">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_person }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher_edit_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核时间">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.verify_status==='审核通过'" type="success" size="small" plain>审核通过</el-button>
          <el-button v-if="scope.row.verify_status==='审核不通过'" type="danger" size="small" plain>审核未通过</el-button>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="beginAuditing(scope.row)">查看</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="tableData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog :visible.sync="xuexiVisible" title="审核详情">
      <div>
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原毕业院校：</span>
              </div>
              <div class="content">
                <span>{{ former_grad_college }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原学制：</span>
              </div>
              <div class="content">
                <span>{{ former_system }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原毕业时间：</span>
              </div>
              <div class="content">
                <span>{{ former_grad_time }}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原专业：</span>
              </div>
              <div class="content">
                <span>{{ former_major }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高毕业院校：</span>
              </div>
              <div class="content">
                <span>{{ highest_grad_college }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历：</span>
              </div>
              <div class="content">
                <span>{{ highest_major }}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学制：</span>
              </div>
              <div class="content">
                <span>{{ highest_system }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高专业：</span>
              </div>
              <div class="content">
                <span>{{ highest_major }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学位：</span>
              </div>
              <div class="content">
                <span>{{ high_degree }}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="padding-top: 10px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原学历：</span>
              </div>
              <div class="content">
                <span>{{ former_edu }}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高毕业时间：</span>
              </div>
              <div class="content">
                <span>{{ highest_grad_time }}</span>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-divider/>
        <div>
          <el-row style="padding-top: 10px">
            <span style="font-weight: bolder">审核原因</span>
          </el-row>
          <el-row style="padding-top: 10px">
            <el-input
              :rows="4"
              v-model="AuditingReason"
              :disabled="true"
              type="textarea"
              placeholder="请输入内容(审核通过无需输入)"/>
          </el-row>
        </div>
        <div class="foot">
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="xuexiVisible = false">关闭</el-button>
          </span>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="zhuanyeVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否专任教师：</span>
            </div>
            <div class="content">
              <span>{{ is_full_time_teacher }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否班主任：</span>
            </div>
            <div class="content">
              <span>{{ is_head_teacher }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职称：</span>
            </div>
            <div class="content">
              <span>{{ zhicheng }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">职称评定时间：</span>
            </div>
            <div class="content">
              <span>{{ zhichengTime }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">岗位级别：</span>
            </div>
            <div class="content">
              <span>{{ position_level }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否特级教师：</span>
            </div>
            <div class="content">
              <span>{{ super_teacher }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">是否区级以上骨干教师：</span>
            </div>
            <div class="content">
              <span>{{ important_teacher }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业发展称号：</span>
            </div>
            <div class="content">
              <span>{{ professDevelopTitle }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">专业发展称号取得时间：</span>
            </div>
            <div class="content">
              <span>{{ professDevelopTitleTime }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">荣誉称号：</span>
            </div>
            <div class="content">
              <span>{{ honor_title }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">荣誉称号取得时间：</span>
            </div>
            <div class="content">
              <span>{{ honor_title_time }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任现职以来担任学校工作：</span>
            </div>
            <div class="content">
              <span>{{ workSincePresent }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">担任工作起始时间：</span>
            </div>
            <div class="content">
              <span>{{ workStartTime }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">担任工作结束时间：</span>
            </div>
            <div class="content">
              <span>{{ workEndTime }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="AuditingReason"
            :disabled="true"
            type="textarea"
            placeholder="请输入内容(审核通过无需输入)"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="zhuanyeVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="jibenVisible" title="审核详情">
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">人员姓名：</span>
            </div>
            <div class="content">
              <span>{{ username }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">曾用名：</span>
            </div>
            <div class="content">
              <span>{{ nickname }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">性别：</span>
            </div>
            <div class="content">
              <span >{{ gender }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">出生年月：</span>
            </div>
            <div class="content">
              <span>{{ born_time }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">民族：</span>
            </div>
            <div class="content">
              <span>{{ nation }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">籍贯：</span>
            </div>
            <div class="content">
              <span>{{ native_place }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">政治面目：</span>
            </div>
            <div class="content">
              <span>{{ political_status }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">入党团时间：</span>
            </div>
            <div class="content">
              <span>{{ political_time }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">身份证号：</span>
            </div>
            <div class="content">
              <span>{{ id_num }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭电话：</span>
            </div>
            <div class="content">
              <span>{{ home_phone }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭邮编：</span>
            </div>
            <div class="content">
              <span>{{ home_zipcode }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">家庭住址：</span>
            </div>
            <div class="content">
              <span>{{ home_address }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">手机号码：</span>
            </div>
            <div class="content">
              <span>{{ mobile }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">Email：</span>
            </div>
            <div class="content">
              <span>{{ email }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">任教学科：</span>
            </div>
            <div class="content">
              <span>{{ t_subject }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">部门：</span>
            </div>
            <div class="content">
              <span>{{ tDept }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">参加工作时间：</span>
            </div>
            <div class="content">
              <span>{{ job_time }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">工作状态：</span>
            </div>
            <div class="content">
              <span>{{ status }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">教师资格证书：</span>
            </div>
            <div class="content">
              <span>{{ quali_cert }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">教师资格证书编号：</span>
            </div>
            <div class="content">
              <span>{{ quali_cert_num }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" style="padding-top: 10px">
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">岗位分类：</span>
            </div>
            <div class="content">
              <span>{{ staffCategory }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同起始时间：</span>
            </div>
            <div class="content">
              <span>{{ contract_start_date }}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="single">
            <div class="biaoqian">
              <span style="font-weight: bolder">聘用合同终止时间：</span>
            </div>
            <div class="content">
              <span>{{ contract_end_date }}</span>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-divider/>
      <div>
        <el-row style="padding-top: 10px">
          <span style="font-weight: bolder">审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            :disabled="true"
            v-model="AuditingReason"
            type="textarea"
            placeholder="请输入内容(审核通过无需输入)"/>
        </el-row>
      </div>
      <div class="foot">
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="jibenVisible = false">关闭</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { adminGetAuditingPersonalInformationHistory } from '@/api/adminAuditingInformation'
export default {
  name: 'InformationAuditingHistory',
  data() {
    return {
      AuditingReason: '',
      auditingTeacherId: '',
      currentPage: 1,
      pagesize: 10,
      token: getToken(),
      jibenVisible: false,
      xuexiVisible: false,
      zhuanyeVisible: false,
      tableData: [],
      jibenData: [],
      // 基础信息
      username: '',
      nickname: '',
      gender: '',
      born_time: '',
      nation: '',
      native_place: '',
      political_status: '',
      political_time: '',
      home_zipcode: '',
      home_address: '',
      mobile: '',
      email: '',
      id_num: '',
      t_subject: '',
      tDept: '',
      job_time: '',
      status: '',
      quali_cert: '',
      quali_cert_num: '',
      staffCategory: '',
      contract_start_date: '',
      contract_end_date: '',
      home_phone: '',
      // 专业能力
      is_full_time_teacher: '',
      zhicheng: '',
      is_head_teacher: '',
      zhichengTime: '',
      position_level: '',
      super_teacher: '',
      important_teacher: '',
      professDevelopTitle: '',
      professDevelopTitleTime: '',
      honor_title: '',
      honor_title_time: '',
      workSincePresent: '',
      workStartTime: '',
      workEndTime: '',
      // 学习经历
      former_grad_college: '',
      former_system: '',
      former_grad_time: '',
      former_major: '',
      highest_grad_college: '',
      high_degree: '',
      highest_system: '',
      highest_major: '',
      higeducation: '',
      former_edu: '',
      highest_grad_time: ''
    }
  },
  mounted() {
    this.firstGetHistory()
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    firstGetHistory: function() {
      adminGetAuditingPersonalInformationHistory(this.token).then(response => {
        console.log('测试管理员查看审核历史')
        console.log(response.data)
        this.tableData = response.data.teacherInfoAuditResult
      })
    },
    beginAuditing: function(data) {
      console.log('审核历史检查每一条取得的data')
      console.log(data)
      switch (data.classLabel) {
        case '学习经历':
          // this.username = data.username
          // console.log(this.jibenData)
          this.AuditingReason = data.verify_desc
          this.auditingTeacherId = data.id
          this.former_grad_college = data.former_grad_college
          this.former_system = data.former_system
          this.former_grad_time = data.former_grad_time
          this.former_major = data.former_major
          this.highest_grad_college = data.highest_grad_college
          this.high_degree = data.high_degree
          this.highest_system = data.highest_system
          this.highest_major = data.highest_major
          this.higeducation = data.higeducation
          this.former_edu = data.former_edu
          this.highest_grad_time = data.highest_grad_time
          this.xuexiVisible = true
          break
        case '专业能力':
          this.AuditingReason = data.verify_desc
          this.auditingTeacherId = data.id
          this.zhichengTime = data.zhichengTime
          this.position_level = data.position_level
          this.super_teacher = data.super_teacher
          this.important_teacher = data.important_teacher
          this.professDevelopTitle = data.professDevelopTitle
          this.professDevelopTitleTime = data.professDevelopTitleTime
          this.honor_title = data.honor_title
          this.honor_title_time = data.honor_title_time
          this.workSincePresent = data.workSincePresent
          this.workStartTime = data.workStartTime
          this.workEndTime = data.workEndTime
          this.zhicheng = data.zhicheng
          this.is_head_teacher = data.is_head_teacher
          this.is_full_time_teacher = data.is_full_time_teacher
          this.zhuanyeVisible = true
          break
        case '基础信息':
          this.AuditingReason = data.verify_desc
          this.auditingTeacherId = data.id
          this.jibenData = []
          this.jibenData.push(data)
          console.log('检查jibenData')
          console.log(this.jibenData)
          this.username = data.username
          this.nickname = data.nickname
          this.gender = data.gender
          this.born_time = data.born_time
          this.nation = data.nation
          this.native_place = data.native_place
          this.political_status = data.political_status
          this.political_time = data.political_time
          this.home_phone = data.home_phone
          this.home_zipcode = data.home_zipcode
          this.home_address = data.home_address
          this.mobile = data.mobile
          this.email = data.email
          this.t_subject = data.t_subject
          this.tDept = data.tDept
          this.job_time = data.job_time
          this.status = data.status
          this.quali_cert = data.quali_cert
          this.quali_cert_num = data.quali_cert_num
          this.staffCategory = data.staffCategory
          this.contract_start_date = data.contract_start_date
          this.contract_end_date = data.contract_end_date
          this.id_num = data.id_num
          this.jibenVisible = true
          break
      }
    }
  }
}
</script>

<style scoped>
  .single{
    display: inline-block;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }
  .foot{
    padding-top: 20px;
    text-align: center;
  }
  .fenye{
    text-align: center;
  }

</style>
