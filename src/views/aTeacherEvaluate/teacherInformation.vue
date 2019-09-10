<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">基本信息</span>
            <!--            <el-button style="float: right; padding: 3px 0" type="text" @click="changeAll">修改</el-button>-->
          </div>
          <div class="card-container">
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
                    <span>无</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">性别：</span>
                  </div>
                  <div class="content">
                    <span>{{ gender }}</span>
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
                    <span v-if="homeTeleFlag === '否'">{{ homeTele }}</span>
                    <el-input v-else v-model="homeTeleVale" placeholder="请输入家庭电话"/>
                  </div>
                  <div class="button">
                    <el-button v-if="homeTeleFlag === '否'" type="text" @click="editHomeTelephone">修改</el-button>
                    <div v-else class="twoButton">
                      <el-button type="text" @click="updateHomeTelephone">完成</el-button>
                      <el-button type="text" @click="cancelHomeTelephone">取消</el-button>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">家庭邮编：</span>
                  </div>
                  <div class="content">
                    <span v-if="zipCodeFlag === '否'">{{ zipCode }}</span>
                    <el-input v-else v-model="zipCodeValue" placeholder="请输入家庭邮编"/>
                  </div>
                  <div class="button">
                    <el-button v-if="zipCodeFlag === '否'" type="text" @click="editZipCode">修改</el-button>
                    <div v-else class="twoButton">
                      <el-button type="text" @click="updateZipCode">完成</el-button>
                      <el-button type="text" @click="cancelZipCode">取消</el-button>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 0px">
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">家庭住址：</span>
                  </div>
                  <div class="content">
                    <span v-if="addressFlag === '否'">{{ address }}</span>
                    <el-input v-else v-model="addressValue" placeholder="请输入家庭住址"/>
                  </div>
                  <div class="button">
                    <el-button v-if="addressFlag === '否'" type="text" @click="editHomeAddress">修改</el-button>
                    <div v-else class="twoButton">
                      <el-button type="text" @click="updateHomeAddress">完成</el-button>
                      <el-button type="text" @click="cancelHomeAddress">取消</el-button>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">手机号码：</span>
                  </div>
                  <div class="content">
                    <span v-if="phoneFlag === '否'">{{ phone }}</span>
                    <el-input v-else v-model="phoneValue" placeholder="请输入手机号码"/>
                  </div>
                  <div class="button">
                    <el-button v-if="phoneFlag === '否'" type="text" @click="editPhone">修改</el-button>
                    <div v-else class="twoButton">
                      <el-button type="text" @click="updatePhone">完成</el-button>
                      <el-button type="text" @click="cancelPhone">取消</el-button>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">Email：</span>
                  </div>
                  <div class="content">
                    <span v-if="emailFlag === '否'">{{ myEmail }}</span>
                    <el-input v-else v-model="emailValue" placeholder="请输入email地址"/>
                  </div>
                  <div class="button">
                    <el-button v-if="emailFlag === '否'" type="text" @click="editEmail">修改</el-button>
                    <div v-else class="twoButton">
                      <el-button type="text" @click="updateEmail">完成</el-button>
                      <el-button type="text" @click="cancelEmail">取消</el-button>
                    </div>
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
                    <span>无</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div class="single">
                  <div class="biaoqian">
                    <span style="font-weight: bolder">聘用合同终止时间：</span>
                  </div>
                  <div class="content">
                    <span>无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">专业能力</span>
        </div>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">是否专任教师：</span>
                </div>
                <div class="content">
                  <!--                  <span>{{ professionalAbility[0].is_full_time_teacher }}</span>-->
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">是否班主任：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].is_head_teacher }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">职称：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].zhicheng }}</span>
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
                  <span>{{ professionalAbility[0].zhichengTime }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">岗位级别：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].position_level }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">是否特级教师：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].super_teacher }}</span>
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
                  <span>{{ professionalAbility[0].important_teacher }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">学习经历</span>
        </div>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">原毕业院校：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].former_grad_college }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">原学制：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].former_edu }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">原毕业时间：</span>
                </div>
                <div class="content">
                  <span/>
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
                  <!--                  <span>{{ learningExprience[0].former_major }}</span>-->
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高毕业院校：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].highest_grad_college }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高学历：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].higeducation }}</span>
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
                  <span>无</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高专业：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].highest_major }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高学位：</span>
                </div>
                <div class="content">
                  <span>无</span>
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
                  <span>{{ learningExprience[0].high_degree }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">最高毕业时间：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].highest_grad_time }}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-card>
    </el-row>
    <el-row style="padding-top:10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">工作经历</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openDialog">增加</el-button>
        </div>
        <div class="card-container">
          <div v-for=" (item, i) in workExperience" :key="item" class="itemContainer">
            <el-row :gutter="40" style="padding-top: 10px">
              <el-col :span="2">
                <span style="font-weight: bolder">{{ i+1 }}.</span>
              </el-col>
              <el-col :span="5">
                <div class="biaoqian">
                  <span style="font-weight: bolder">工作单位：</span>
                </div>
                <div class="content">
                  <span>{{ item.danwei }}</span>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任职务：</span>
                </div>
                <div class="content">
                  <span>{{ item.zhiwu }}</span>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="biaoqian">
                  <span style="font-weight: bolder">开始时间：</span>
                </div>
                <div class="content">
                  <span>{{ item.begindate }}</span>
                </div>
              </el-col>
              <el-col :span="5">
                <div class="biaoqian">
                  <span style="font-weight: bolder">结束时间：</span>
                </div>
                <div class="content">
                  <span>{{ item.overdate }}</span>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-card>
    </el-row>
    <div>
      <el-dialog :visible.sync="dialogVisible" title="增加工作经历">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="工作单位">
            <el-input v-model="form.danwei"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <el-input v-model="form.zhiwu"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.begindate" type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.overdate" type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateWorkExperience">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getTeacherInformationData, updateTeacherInformationData } from '@/api/teacherInformation'
export default {
  name: 'TeacherInformation',
  data() {
    return {
      workExperience: [{
        danwei: '某某附中',
        zhiwu: '英语老师',
        begindate: '2015-05-05',
        overdate: '2010-11-5'
      },
      {
        danwei: '某某二中',
        zhiwu: '英语教研组组长',
        begindate: '2016-05-05',
        overdate: '2019-11-5'
      }],
      dialogVisible: false,
      homeTeleFlag: '否',
      homeTeleVale: '',
      homeTele: '',
      addressFlag: '否',
      addressValue: '',
      address: '',
      zipCodeFlag: '否',
      zipCodeValue: '',
      zipCode: '',
      emailFlag: '否',
      emailValue: '',
      myEmail: '',
      phoneFlag: '否',
      phoneValue: '',
      phone: '',
      token: getToken(),
      basicInformation: [],
      learningExprience: [],
      workingExprience: [],
      professionalAbility: [],
      form: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: ''
      },
      // 基本信息的展示内容
      country: '',
      username: '',
      gender: '',
      born_time: '',
      nation: '',
      native_place: '',
      political_status: '',
      political_time: '',
      id_num: '',
      t_subject: '',
      tDept: '',
      job_time: '',
      status: '',
      quali_cert: '',
      quali_cert_num: '',
      staffCategory: ''
    }
  },
  mounted() {
    this.getAllInformation()
  },
  methods: {
    updateWorkExperience: function() {
      const arr = {
        danwei: this.form.danwei,
        zhiwu: this.form.zhiwu,
        begindate: this.form.begindate,
        overdate: this.form.overdate
      }
      this.workExperience.push(arr)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
      this.dialogVisible = false
    },
    openDialog: function() {
      console.log('我点了')
      this.dialogVisible = true
    },
    getAllInformation: function() {
      const informationType = ['基础信息', '学习经历', '工作经历', '专业能力']
      const prams = {
        infotype: informationType[0]
      }
      getTeacherInformationData({ ...prams, token: this.token }).then(response => {
        this.basicInformation = response.data.basic_info
        console.log('输出基础信息')
        console.log(this.basicInformation)
        this.homeTele = this.basicInformation[0].home_phone
        this.address = this.basicInformation[0].home_address
        this.zipCode = this.basicInformation[0].home_zipcode
        this.myEmail = this.basicInformation[0].email
        this.phone = this.basicInformation[0].mobile
        this.username = this.basicInformation[0].username
        this.gender = this.basicInformation[0].gender
        this.born_time = this.basicInformation[0].born_time
        this.nation = this.basicInformation[0].nation
        this.native_place = this.basicInformation[0].native_place
        this.political_status = this.basicInformation[0].political_status
        this.political_time = this.basicInformation[0].political_time
        this.id_num = this.basicInformation[0].id_num
        this.t_subject = this.basicInformation[0].t_subject
        this.tDept = this.basicInformation[0].tDept
        this.job_time = this.basicInformation[0].job_time
        this.status = this.basicInformation[0].status
        this.quali_cert = this.basicInformation[0].quali_cert
        this.quali_cert_num = this.basicInformation[0].quali_cert_num
        this.staffCategory = this.basicInformation[0].staffCategory
        this.country = this.basicInformation[0].country
      })
      const pramsa = {
        infotype: informationType[1]
      }
      getTeacherInformationData({ ...pramsa, token: this.token }).then(response => {
        this.learningExprience = response.data.learn_experience
        console.log('输出学习经历')
        console.log(this.learningExprience)
      })
      const pramsb = {
        infotype: informationType[2]
      }
      getTeacherInformationData({ ...pramsb, token: this.token }).then(response => {
        this.basicInformation = response.data.work_experience
        console.log('输出工作经历')
        console.log(this.basicInformation)
      })
      const pramsc = {
        infotype: informationType[3]
      }
      getTeacherInformationData({ ...pramsc, token: this.token }).then(response => {
        this.professionalAbility = response.data.professional
        console.log('输出专业能力')
        console.log(this.professionalAbility)
        console.log(this.professionalAbility[0].zhicheng)
      })
    },
    editHomeTelephone: function() {
      this.homeTeleFlag = '是'
    },
    cancelHomeTelephone: function() {
      this.homeTeleFlag = '否'
    },
    updateHomeTelephone: function() {
      if (this.homeTeleVale === '') {
        this.$message({
          message: '您未填写内容,无法修改',
          type: 'warning'
        })
      } else {
        const prams = {
          home_phone: this.homeTeleVale
        }
        console.log(prams.home_phone)
        updateTeacherInformationData({ ...prams, token: this.token }).then(response => {
          console.log('更新成功')
        })
        this.homeTele = this.homeTeleVale
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.homeTeleFlag = '否'
      }
    },
    editHomeAddress: function() {
      this.addressFlag = '是'
    },
    cancelHomeAddress: function() {
      this.addressFlag = '否'
    },
    updateHomeAddress: function() {
      if (this.addressFlag === '') {
        this.$message({
          message: '您未填写内容,无法修改',
          type: 'warning'
        })
      } else {
        const prams = {
          home_address: this.addressValue
        }
        console.log(prams.home_address)
        updateTeacherInformationData({ ...prams, token: this.token }).then(response => {
          console.log('更新成功')
        })
        this.address = this.addressValue
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.addressFlag = '否'
      }
    },
    editZipCode: function() {
      this.zipCodeFlag = '是'
    },
    cancelZipCode: function() {
      this.zipCodeFlag = '否'
    },
    updateZipCode: function() {
      if (this.zipCodeValue === '') {
        this.$message({
          message: '您未填写内容,无法修改',
          type: 'warning'
        })
      } else {
        const prams = {
          home_zip_code: this.zipCodeValue
        }
        console.log(prams.home_zip_code)
        updateTeacherInformationData({ ...prams, token: this.token }).then(response => {
          console.log('更新成功')
        })
        this.zipCode = this.zipCodeValue
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.zipCodeFlag = '否'
      }
    },
    editEmail: function() {
      this.emailFlag = '是'
    },
    cancelEmail: function() {
      this.emailFlag = '否'
    },
    updateEmail: function() {
      if (this.emailValue === '') {
        this.$message({
          message: '您未填写内容,无法修改',
          type: 'warning'
        })
      } else {
        const prams = {
          Email: this.emailValue
        }
        console.log(prams.Email)
        updateTeacherInformationData({ ...prams, token: this.token }).then(response => {
          console.log('更新成功')
        })
        this.myEmail = this.emailValue
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.emailFlag = '否'
      }
    },
    editPhone: function() {
      this.phoneFlag = '是'
    },
    cancelPhone: function() {
      this.phoneFlag = '否'
    },
    updatePhone: function() {
      if (this.phoneValue === '') {
        this.$message({
          message: '您未填写内容,无法修改',
          type: 'warning'
        })
      } else {
        const prams = {
          Phone: this.phoneValue
        }
        console.log(prams.Phone)
        updateTeacherInformationData({ ...prams, token: this.token }).then(response => {
          console.log('更新成功')
        })
        this.phone = this.phoneValue
        this.$message({
          message: '修改成功',
          type: 'success'
        })
        this.phoneFlag = '否'
      }
    },
    changeAll: function() {
      this.homeTeleFlag = '否'
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
  .row-container{
    padding-top: 10px;
  }
  .button{
    display: inline-block;
    margin-left: 80px;
  }
  .card-container{
    margin-top: 10px;
  }
  .twoButton{
    display: inline-block;
  }

</style>
