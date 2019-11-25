<template>
  <div class="app-container">
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">基本信息</span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="openJibenDialog">修改</el-button>
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
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row style="padding-top: 10px">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder;color:#409EFF ">专业能力</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="openZhuanyeDialog">修改</el-button>
        </div>
        <div class="card-container">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">是否专任教师：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].is_full_time_teacher }}</span>
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
            <!--            <el-col :span="8">-->
            <!--              <div class="single">-->
            <!--                <div class="biaoqian">-->
            <!--                  <span style="font-weight: bolder">是否特级教师：</span>-->
            <!--                </div>-->
            <!--                <div class="content">-->
            <!--                  <span>{{ professionalAbility[0].super_teacher }}</span>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </el-col>-->
          </el-row>
          <el-row :gutter="20" style="padding-top: 10px">
            <!--            <el-col :span="8">-->
            <!--              <div class="single">-->
            <!--                <div class="biaoqian">-->
            <!--                  <span style="font-weight: bolder">是否区级以上骨干教师：</span>-->
            <!--                </div>-->
            <!--                <div class="content">-->
            <!--                  <span>{{ professionalAbility[0].important_teacher }}</span>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </el-col>-->
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].professDevelopTitle }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">专业发展称号取得时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].professDevelopTitleTime }}</span>
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
                  <span>{{ professionalAbility[0].honor_title }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">荣誉称号取得时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].honor_title_time }}</span>
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
                  <span>{{ professionalAbility[0].workSincePresent }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作起始时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].workStartTime }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任工作结束时间：</span>
                </div>
                <div class="content">
                  <span>{{ professionalAbility[0].workEndTime }}</span>
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
          <el-button style="float: right; padding: 3px 0" type="text" @click="openEditStudyExperience">修改</el-button>
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
                  <span>{{ learningExprience[0].former_system }}</span>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="single">
                <div class="biaoqian">
                  <span style="font-weight: bolder">原毕业时间：</span>
                </div>
                <div class="content">
                  <span>{{ learningExprience[0].former_grad_time }}</span>
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
                  <span>{{ learningExprience[0].former_major }}</span>
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
                  <span>{{ learningExprience[0].highest_system }}</span>
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
                  <span>{{ learningExprience[0].high_degree }}</span>
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
                  <span>{{ learningExprience[0].former_edu }}</span>
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
            <el-row :gutter="20" style="padding-top: 10px">
              <el-col :span="1">
                <span style="font-weight: bolder">{{ i+1 }}.</span>
              </el-col>
              <el-col :span="3">
                <div class="biaoqian">
                  <span style="font-weight: bolder">工作单位：</span>
                </div>
                <div class="content">
                  <span>{{ item.unit }}</span>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="biaoqian">
                  <span style="font-weight: bolder">担任职务：</span>
                </div>
                <div class="content">
                  <span>{{ item.post }}</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">开始时间：</span>
                </div>
                <div class="content">
                  <span>{{ item.start_time }}</span>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="biaoqian">
                  <span style="font-weight: bolder">结束时间：</span>
                </div>
                <div class="content">
                  <span>{{ item.end_time }}</span>
                </div>
              </el-col>
              <el-col :span="3">
                <div class="biaoqian">
                  <span style="font-weight: bolder">证明人：</span>
                </div>
                <div class="content">
                  <span>{{ item.witness }}</span>
                </div>
              </el-col>
              <el-col :span="4">
                <div class="biaoqian">
                  <span style="font-weight: bolder">状态：</span>
                </div>
                <div class="content">
                  <span>待审核</span>
                </div>
              </el-col>
              <el-col :span="2">
                <div >
                  <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px" @click="editWorkJinli(item)">修改</el-button></span>
                  <span style="display: inline-block" ><el-button type="text" style="margin-top: -20px" @click="deleteWorkJinli(item.id)" >删除</el-button></span>
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
          <el-form-item label="证明人">
            <el-input v-model="form.people"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="form.begindate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="form.overdate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="updateWorkExperience">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="editDialogVisible" title="修改工作经历">
        <el-form ref="form" :model="editform" label-width="100px">
          <el-form-item label="工作单位">
            <el-input v-model="editform.danwei"/>
          </el-form-item>
          <el-form-item label="担任职务">
            <el-input v-model="editform.zhiwu"/>
          </el-form-item>
          <el-form-item label="证明人">
            <el-input v-model="editform.people"/>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-col :span="11">
              <el-date-picker v-model="editform.begindate" value-format=" yyyy-MM-dd" format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-col :span="11">
              <el-date-picker v-model="editform.overdate" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmUpdate">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="studyDialogVisible" title="修改学习经历" width="80%">
        <el-row>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原毕业院校：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].former_grad_college" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原学制：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].former_system" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原毕业时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editLearningExprience[0].former_grad_time" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
              <!--              <div class="content">-->
              <!--                <el-input v-model="editLearningExprience[0].former_grad_time" placeholder="请输入内容"/>-->
              <!--              </div>-->
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原专业：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].former_major" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高毕业院校：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].highest_grad_college" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学历：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].higeducation" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学制：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].highest_system" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高专业：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].highest_major" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高学位：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].high_degree" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">原学历：</span>
              </div>
              <div class="content">
                <el-input v-model="editLearningExprience[0].former_edu" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">最高毕业时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editLearningExprience[0].highest_grad_time" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
              <!--              <div class="content">-->
              <!--                <el-input v-model="editLearningExprience[0].highest_grad_time" placeholder="请输入内容"/>-->
              <!--              </div>-->
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditStudyExp">取 消</el-button>
          <el-button type="primary" @click="confirmEditStudyExp">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="zhuanyeDialogVisible" title="修改专业能力" width="80%">
        <el-row>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">是否专任教师：</span>
              </div>
              <div class="content">
                <el-input v-model="editProfessionalAbility[0].is_full_time_teacher" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">是否班主任：</span>
              </div>
              <div class="content">
                <el-input v-model="editProfessionalAbility[0].is_head_teacher" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">职称评定时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editProfessionalAbility[0].zhichengTime" value-format=" yyyy-MM-dd " format="yyyy-MM-dd " type="date" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <!--          <el-col :span="8">-->
          <!--            <div class="single">-->
          <!--              <div class="biaoqian">-->
          <!--                <span style="font-weight: bolder">职称：</span>-->
          <!--              </div>-->
          <!--              <div class="content">-->
          <!--                <el-input v-model="editProfessionalAbility[0].zhicheng" placeholder="请输入内容"/>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </el-col>-->
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">岗位级别：</span>
              </div>
              <div class="content">
                <el-input v-model="editProfessionalAbility[0].position_level" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <!--          <el-col :span="8">-->
          <!--            <div class="single">-->
          <!--              <div class="biaoqian">-->
          <!--                <span style="font-weight: bolder">是否特级教师：</span>-->
          <!--              </div>-->
          <!--              <div class="content">-->
          <!--                <el-input v-model="editProfessionalAbility[0].super_teacher" placeholder="请输入内容"/>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </el-col>-->
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号：</span>
              </div>
              <div class="content">
                <el-select v-model="editProfessionalAbility[0].professDevelopTitle" placeholder="请选择">
                  <el-option
                    v-for="item in zhuanyefazhanOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">专业发展称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editProfessionalAbility[0].professDevelopTitleTime" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <!--          <el-col :span="8">-->
          <!--            <div class="single">-->
          <!--              <div class="biaoqian">-->
          <!--                <span style="font-weight: bolder">是否区级以上骨干教师：</span>-->
          <!--              </div>-->
          <!--              <div class="content">-->
          <!--                <el-input v-model="editProfessionalAbility[0].important_teacher" placeholder="请输入内容"/>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </el-col>-->
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号：</span>
              </div>
              <div class="content">
                <el-select v-model="editProfessionalAbility[0].honor_title" placeholder="请选择">
                  <el-option
                    v-for="item in rongyuchenghaoOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">荣誉称号取得时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editProfessionalAbility[0].honor_title_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">任现职以来担任学校工作：</span>
              </div>
              <div class="content">
                <el-select v-model="editProfessionalAbility[0].workSincePresent" placeholder="请选择">
                  <el-option
                    v-for="item in danrengongzuoOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作起始时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editProfessionalAbility[0].workStartTime" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">担任工作结束时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editProfessionalAbility[0].workEndTime" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditProfessionalAbility">取 消</el-button>
          <el-button type="primary" @click="confirmEditProfessionalAbility">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog :visible.sync="basicDialogVisible" title="修改基本信息" width="80%">
        <el-row :gutter="20">
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">人员姓名：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].username" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">曾用名：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].nickname" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">性别：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].gender" placeholder="请输入内容"/>
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
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editBasicInformation[0].born_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">民族：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].nation" placeholder="请输入内容"/>
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
                <el-input v-model="editBasicInformation[0].native_place" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">政治面目：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].political_status" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">入党团时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editBasicInformation[0].political_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
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
                <el-input v-model="editBasicInformation[0].id_num" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">家庭电话：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].home_phone" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">家庭邮编：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].home_zipcode" placeholder="请输入内容"/>
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
                <el-input v-model="editBasicInformation[0].home_address" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">手机号码：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].mobile" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">Email：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].email" placeholder="请输入内容"/>
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
                <el-input v-model="editBasicInformation[0].t_subject" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">部门：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].tDept" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">参加工作时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editBasicInformation[0].job_time" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
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
                <el-input v-model="editBasicInformation[0].status" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">教师资格证书：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].quali_cert" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">教师资格证书编号：</span>
              </div>
              <div class="content">
                <el-input v-model="editBasicInformation[0].quali_cert_num" placeholder="请输入内容"/>
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
                <el-input v-model="editBasicInformation[0].staffCategory" placeholder="请输入内容"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">聘用合同起始时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editBasicInformation[0].contract_start_date" type="month" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="single">
              <div class="biaoqian">
                <span style="font-weight: bolder">聘用合同终止时间：</span>
              </div>
              <div class="content" style="width: 250px">
                <el-date-picker v-model="editBasicInformation[0].contract_end_date" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd" placeholder="选择日期" style="width: 60%;"/>
              </div>
            </div>
          </el-col>
        </el-row>
        <div slot="footer" class="dialog-footer">
          <el-button @click="notEditJiben">取 消</el-button>
          <el-button type="primary" @click="confirmEditJiben">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getTeacherInformationData, updateTeacherInformationData, increaseWorkExperience, inquiryWorkExperience, deleteWorkExperience, editWorkExperience, editOtherAllInformation, personalInformaticaEditWaitAuditing } from '@/api/teacherInformation'
export default {
  name: 'TeacherInformation',
  data() {
    return {
      basicDialogVisible: false,
      value: '',
      valuetwo: '',
      valuethree: '',
      rongyuchenghaoOptions: [{
        value: '全国先进',
        label: '全国先进'
      }, {
        value: '市级先进',
        label: '市级先进'
      }, {
        value: '区级先进',
        label: '区级先进'
      }, {
        value: '教委先进',
        label: '教委先进'
      }],
      zhuanyefazhanOptions: [{
        value: '特级教师',
        label: '特级教师'
      }, {
        value: '北京市学科带头人',
        label: '北京市学科带头人'
      }, {
        value: '北京市骨干教师',
        label: '北京市骨干教师'
      }, {
        value: '紫禁杯班主任',
        label: '紫禁杯班主任'
      }, {
        value: '海淀区学科带头人',
        label: '海淀区学科带头人'
      }, {
        value: '海淀区班主任',
        label: '海淀区班主任'
      }, {
        value: '海淀区骨干教师',
        label: '海淀区骨干教师'
      }, {
        value: '校学科教师',
        label: '校学科教师'
      }],
      danrengongzuoOptions: [
        {
          value: '班主任',
          label: '班主任'
        }, {
          value: '年级组长',
          label: '年级组长'
        }, {
          value: '教研组长',
          label: '教研组长'
        }, {
          value: '行政干部',
          label: '行政干部'
        }, {
          value: '学科组长',
          label: '学科组长'
        }, {
          value: '备课组长',
          label: '备课组长'
        }, {
          value: '社团（活动）辅导员',
          label: '社团（活动）辅导员'
        }
      ],
      zhuanyeDialogVisible: false,
      updateId: '',
      workExperience: [],
      editDialogVisible: false,
      dialogVisible: false,
      studyDialogVisible: false,
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
      editBasicInformation: [],
      learningExprience: [],
      editLearningExprience: [],
      workingExprience: [],
      professionalAbility: [],
      editProfessionalAbility: [],
      form: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: '',
        people: ''
      },
      editform: {
        zhiwu: '',
        begindate: '',
        overdate: '',
        danwei: '',
        people: ''
      },
      // 基本信息的展示内容
      // country: '',
      // username: '',
      // gender: '',
      // born_time: '',
      // nation: '',
      // native_place: '',
      // political_status: '',
      // political_time: '',
      // id_num: '',
      // t_subject: '',
      // tDept: '',
      // job_time: '',
      // status: '',
      // quali_cert: '',
      // quali_cert_num: '',
      // staffCategory: '',

      // 界面展示的基本信息
      username: '',
      nickname: '',
      gender: '',
      born_time: '',
      nation: '',
      native_place: '',
      political_status: '',
      political_time: '',
      id_num: '',
      home_phone: '',
      home_zipcode: '',
      home_address: '',
      mobile: '',
      email: '',
      t_subject: '',
      tDept: '', // 部门
      job_time: '',
      status: '', // 工作状态
      quali_cert: '',
      quali_cert_num: '',
      staffCategory: '',
      contract_start_date: '',
      contract_end_date: ''
    }
  },
  mounted() {
    this.getAllInformation()
    this.getWorkJinli()
  },
  methods: {
    compare: function(property) {
      return function(a, b) {
        var value1 = a[property]
        var value2 = b[property]
        return value2 - value1
      }
    },
    openJibenDialog: function() {
      console.log('我点了我点了我点了')
      this.basicDialogVisible = true
    },
    openZhuanyeDialog: function() {
      this.zhuanyeDialogVisible = true
    },
    getWorkJinli: function() {
      inquiryWorkExperience(this.token).then(response => {
        console.log('输出我的工作经历')
        console.log(response.data)
        this.workExperience = response.data.workExp
      })
    },
    editWorkJinli: function(item) {
      this.editDialogVisible = true
      this.editform.zhiwu = item.post
      // this.editform.begindate = item.start_time
      // this.editform.overdate = item.end_time
      this.editform.danwei = item.unit
      this.editform.people = item.witness
      this.updateId = item.id
    },
    confirmUpdate: function() {
      const prams = {
        id: this.updateId,
        start_time: this.editform.begindate,
        end_time: this.editform.overdate,
        unit: this.editform.danwei,
        zhiwu: this.editform.zhiwu,
        witness: this.editform.people
      }
      editWorkExperience({ ...prams, token: this.token }).then(response => {
        console.log('测试我来编辑工作经历')
        console.log(response)
        inquiryWorkExperience(this.token).then(response => {
          console.log('更新我的工作经历')
          console.log(response.data)
          this.workExperience = response.data.workExp
        })
      })
      this.$message({
        message: '编辑成功',
        type: 'success'
      })
      this.editDialogVisible = false
    },
    deleteWorkJinli: function(index) {
      const prams = {
        id: index
      }
      deleteWorkExperience({ ...prams, token: this.token }).then(response => {
        inquiryWorkExperience(this.token).then(response => {
          console.log('更新我的工作经历')
          console.log(response.data)
          this.workExperience = response.data.workExp
        })
      })
      this.$message({
        message: '删除成功',
        type: 'success'
      })
    },
    updateWorkExperience: function() {
      const prams = {
        unit: this.form.danwei,
        zhiwu: this.form.zhiwu,
        start_time: this.form.begindate,
        end_time: this.form.overdate,
        witness: this.form.people
      }
      console.log('检查日期')
      console.log(this.form.begindate)
      increaseWorkExperience({ ...prams, token: this.token }).then(resposne => {
        console.log(resposne)
        inquiryWorkExperience(this.token).then(response => {
          console.log('更新我的工作经历')
          console.log(response.data)
          this.workExperience = response.data.workExp
        })
      })
      // this.workExperience.push(arr)
      this.$message({
        message: '添加成功',
        type: 'success'
      })
      this.dialogVisible = false
    },
    // 修改所有的个人信息
    editAllPersonalInformation: function() {
      console.log('开始修改')
      const prams = {
        former_grad_college: this.editLearningExprience[0].former_grad_college,
        former_system: this.editLearningExprience[0].former_system,
        former_grad_time: this.editLearningExprience[0].former_grad_time,
        former_major: this.editLearningExprience[0].former_major,
        highest_grad_college: this.editLearningExprience[0].highest_grad_college,
        highest_edu: this.editLearningExprience[0].highest_edu,
        highest_system: this.editLearningExprience[0].highest_system,
        highest_major: this.editLearningExprience[0].highest_major,
        highest_degree: this.editLearningExprience[0].highest_degree,
        former_education: this.editLearningExprience[0].former_education,
        highest_grad_time: this.editLearningExprience[0].highest_grad_time
      }
      editOtherAllInformation({ ...prams, token: this.token }).then(response => {
        console.log('检查修改')
        console.log(response)
        const prams = {
          infotype: '学习经历'
        }
        getTeacherInformationData({ ...prams, token: this.token }).then(response => {
          this.learningExprience = response.data.learn_experience
          console.log('输出修改后的学习经历')
          console.log(this.learningExprience)
        })
      })
    },
    openEditStudyExperience: function() {
      this.studyDialogVisible = true
    },
    // 不修改学习经历
    notEditStudyExp: function() {
      this.studyDialogVisible = false
      const prams = {
        infotype: '学习经历'
      }
      getTeacherInformationData({ ...prams, token: this.token }).then(response => {
        this.learningExprience = response.data.learn_experience
        console.log('输出没有修改后的学习经历')
        console.log(this.learningExprience)
      })
    },
    // 确认修改学习经历
    confirmEditStudyExp: function() {
      this.studyDialogVisible = false
      // 将editLearningExprience中的值按字段取出来传给后台
      const prams = {
        classLabel: '学习经历',
        former_education: this.editLearningExprience[0].former_edu,
        former_grad_college: this.editLearningExprience[0].former_grad_college,
        former_system: this.editLearningExprience[0].former_system,
        former_major: this.editLearningExprience[0].former_major,
        former_grad_time: this.editLearningExprience[0].former_grad_time,
        highest_degree: this.editLearningExprience[0].high_degree,
        highest_edu: this.editLearningExprience[0].Higeducation,
        highest_grad_college: this.editLearningExprience[0].highest_grad_college,
        highest_system: this.editLearningExprience[0].highest_system,
        highest_major: this.editLearningExprience[0].highest_major,
        highest_grad_time: this.editLearningExprience[0].highest_grad_time
      }
      console.log('测试学习经历修改审核提交参数数值')
      console.log(prams)
      personalInformaticaEditWaitAuditing({ ...prams, token: this.token }).then(response => {
        console.log('测试学习经历修改审核提交')
        console.log(response.data)
        if (response.data.code === 500) {
          this.$message({
            message: '抱歉，您有一条相同类别的信息修改待审核！',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '提交成功，等待管理员审核',
            type: 'success'
          })
        }
        const prams = {
          infotype: '学习经历'
        }
        getTeacherInformationData({ ...prams, token: this.token }).then(response => {
          this.learningExprience = response.data.learn_experience
          console.log('测试提交修改后待审核的学习经历')
          console.log(this.learningExprience)
          console.log('测试response.data')
          console.log(response.data)
        })
      })
    },
    // 不修改专业能力
    notEditProfessionalAbility: function() {
      this.zhuanyeDialogVisible = false
      const prams = {
        infotype: '专业能力'
      }
      getTeacherInformationData({ ...prams, token: this.token }).then(response => {
        this.professionalAbility = response.data.professional
        console.log('输出没有修改后的专业能力')
        console.log(this.professionalAbility)
      })
    },
    // 确认修改专业能力
    confirmEditProfessionalAbility: function() {
      this.zhuanyeDialogVisible = false
      // 将editLearningExprience中的值按字段取出来传给后台
      const prams = {
        classLabel: '专业能力',
        zhicheng: this.editProfessionalAbility[0].zhicheng,
        zhichengTime: this.editProfessionalAbility[0].zhichengTime,
        is_full_time_teacher: this.editProfessionalAbility[0].is_full_time_teacher,
        is_head_teacher: this.editProfessionalAbility[0].is_head_teacher,
        position_level: this.editProfessionalAbility[0].position_level,
        super_teacher: this.editProfessionalAbility[0].super_teacher,
        important_teacher: this.editProfessionalAbility[0].important_teacher,
        workSincePresent: this.editProfessionalAbility[0].workSincePresent,
        workStartTime: this.editProfessionalAbility[0].workStartTime,
        workEndTime: this.editProfessionalAbility[0].workEndTime,
        honor_title: this.editProfessionalAbility[0].honor_title,
        honor_title_time: this.editProfessionalAbility[0].honor_title_time,
        professDevelopTitle: this.editProfessionalAbility[0].professDevelopTitle,
        professDevelopTitleTime: this.editProfessionalAbility[0].professDevelopTitleTime
      }
      console.log('测试专业能力修改审核提交参数数值')
      console.log(prams)
      personalInformaticaEditWaitAuditing({ ...prams, token: this.token }).then(response => {
        console.log('测试专业能力修改审核提交')
        console.log(response.data)
        if (response.data.code === 500) {
          this.$message({
            message: '抱歉，您有一条相同类别的信息修改待审核！',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '提交成功，等待管理员审核',
            type: 'success'
          })
        }
        const prams = {
          infotype: '专业能力'
        }
        getTeacherInformationData({ ...prams, token: this.token }).then(response => {
          this.professionalAbility = response.data.professional
          console.log('测试提交修改后待审核的专业能力')
          console.log(this.professionalAbility)
        })
        // this.$message({
        //   message: '提交成功，等待管理员审核',
        //   type: 'success'
        // })
      })
    },
    // 不修改基本信息
    notEditJiben: function() {
      this.basicDialogVisible = false
      const prams = {
        infotype: '基础信息'
      }
      getTeacherInformationData({ ...prams, token: this.token }).then(response => {
        this.basicInformation = response.data.basic_info
        console.log('输出没有修改后的基本信息')
        console.log(this.basicInformation)
        this.username = this.basicInformation[0].username
        this.nickname = this.basicInformation[0].nickname
        this.gender = this.basicInformation[0].gender
        this.born_time = this.basicInformation[0].born_time
        this.nation = this.basicInformation[0].nation
        this.native_place = this.basicInformation[0].native_place
        this.political_status = this.basicInformation[0].political_status
        this.political_time = this.basicInformation[0].political_time
        this.id_num = this.basicInformation[0].id_num
        this.home_phone = this.basicInformation[0].home_phone
        this.home_zipcode = this.basicInformation[0].home_zipcode
        this.home_address = this.basicInformation[0].home_address
        this.mobile = this.basicInformation[0].mobile
        this.email = this.basicInformation[0].email
        this.t_subject = this.basicInformation[0].t_subject
        this.tDept = this.basicInformation[0].tDept // 部门
        this.job_time = this.basicInformation[0].job_time
        this.status = this.basicInformation[0].status // 工作状态
        this.quali_cert = this.basicInformation[0].quali_cert
        this.quali_cert_num = this.basicInformation[0].quali_cert_num
        this.staffCategory = this.basicInformation[0].staffCategory
        this.contract_start_date = this.basicInformation[0].contract_start_date
        this.contract_end_date = this.basicInformation[0].contract_end_date
      })
    },
    // 确认修改基本信息
    confirmEditJiben: function() {
      this.basicDialogVisible = false
      const prams = {
        classLabel: '基础信息',
        username: this.editBasicInformation[0].username,
        nickname: this.editBasicInformation[0].nickname,
        gender: this.editBasicInformation[0].gender,
        born_time: this.editBasicInformation[0].born_time,
        nation: this.editBasicInformation[0].nation,
        native_place: this.editBasicInformation[0].native_place,
        political_status: this.editBasicInformation[0].political_status,
        political_time: this.editBasicInformation[0].political_time,
        id_num: this.editBasicInformation[0].id_num,
        home_phone: this.editBasicInformation[0].home_phone,
        home_zipcode: this.editBasicInformation[0].home_zipcode,
        home_address: this.editBasicInformation[0].home_address,
        mobile: this.editBasicInformation[0].mobile,
        email: this.editBasicInformation[0].email,
        t_subject: this.editBasicInformation[0].t_subject,
        tDept: this.editBasicInformation[0].tDept, // 部门
        job_time: this.editBasicInformation[0].job_time,
        status: this.editBasicInformation[0].status, // 工作状态
        quali_cert: this.editBasicInformation[0].quali_cert,
        quali_cert_num: this.editBasicInformation[0].quali_cert_num,
        staffCategory: this.editBasicInformation[0].staffCategory,
        contract_start_date: this.editBasicInformation[0].contract_start_date,
        contract_end_date: this.editBasicInformation[0].contract_end_date
      }
      console.log('测试基本信息修改审核提交参数数值')
      console.log(prams)
      personalInformaticaEditWaitAuditing({ ...prams, token: this.token }).then(response => {
        console.log('测试基本信息修改审核提交')
        console.log(response.data)
        if (response.data.code === 500) {
          this.$message({
            message: '抱歉，您有一条相同类别的信息修改待审核！',
            type: 'warning'
          })
        } else {
          this.$message({
            message: '提交成功，等待管理员审核',
            type: 'success'
          })
        }
        const prams = {
          infotype: '基础信息'
        }
        getTeacherInformationData({ ...prams, token: this.token }).then(response => {
          this.basicInformation = response.data.basic_info
          console.log('测试提交修改后待审核的基本信息')
          console.log(this.basicInformation)
          this.username = this.basicInformation[0].username
          this.nickname = this.basicInformation[0].nickname
          this.gender = this.basicInformation[0].gender
          this.born_time = this.basicInformation[0].born_time
          this.nation = this.basicInformation[0].nation
          this.native_place = this.basicInformation[0].native_place
          this.political_status = this.basicInformation[0].political_status
          this.political_time = this.basicInformation[0].political_time
          this.id_num = this.basicInformation[0].id_num
          this.home_phone = this.basicInformation[0].home_phone
          this.home_zipcode = this.basicInformation[0].home_zipcode
          this.home_address = this.basicInformation[0].home_address
          this.mobile = this.basicInformation[0].mobile
          this.email = this.basicInformation[0].email
          this.t_subject = this.basicInformation[0].t_subject
          this.tDept = this.basicInformation[0].tDept // 部门
          this.job_time = this.basicInformation[0].job_time
          this.status = this.basicInformation[0].status // 工作状态
          this.quali_cert = this.basicInformation[0].quali_cert
          this.quali_cert_num = this.basicInformation[0].quali_cert_num
          this.staffCategory = this.basicInformation[0].staffCategory
          this.contract_start_date = this.basicInformation[0].contract_start_date
          this.contract_end_date = this.basicInformation[0].contract_end_date
        })
        // this.$message({
        //   message: '提交成功，等待管理员审核',
        //   type: 'success'
        // })
      })
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
        console.log('检查第一次加载出来的basicInformation 基本信息')
        console.log(this.basicInformation)
        this.editBasicInformation.push(response.data.basic_info[0])
        console.log('检查editBasicInformation')
        console.log(this.editBasicInformation)
        this.username = this.basicInformation[0].username
        this.nickname = this.basicInformation[0].nickname
        this.gender = this.basicInformation[0].gender
        this.born_time = this.basicInformation[0].born_time
        this.nation = this.basicInformation[0].nation
        this.native_place = this.basicInformation[0].native_place
        this.political_status = this.basicInformation[0].political_status
        this.political_time = this.basicInformation[0].political_time
        this.id_num = this.basicInformation[0].id_num
        this.home_phone = this.basicInformation[0].home_phone
        this.home_zipcode = this.basicInformation[0].home_zipcode
        this.home_address = this.basicInformation[0].home_address
        this.mobile = this.basicInformation[0].mobile
        this.email = this.basicInformation[0].email
        this.t_subject = this.basicInformation[0].t_subject
        this.tDept = this.basicInformation[0].tDept // 部门
        this.job_time = this.basicInformation[0].job_time
        this.status = this.basicInformation[0].status // 工作状态
        this.quali_cert = this.basicInformation[0].quali_cert
        this.quali_cert_num = this.basicInformation[0].quali_cert_num
        this.staffCategory = this.basicInformation[0].staffCategory
        this.contract_start_date = this.basicInformation[0].contract_start_date
        this.contract_end_date = this.basicInformation[0].contract_end_date
      })
      const pramsa = {
        infotype: informationType[1]
      }
      getTeacherInformationData({ ...pramsa, token: this.token }).then(response => {
        this.learningExprience = response.data.learn_experience
        this.editLearningExprience.push(response.data.learn_experience[0])
        console.log('输出学习经历')
        console.log(this.learningExprience)
      })
      // const pramsb = {
      //   infotype: informationType[2]
      // }
      // getTeacherInformationData({ ...pramsb, token: this.token }).then(response => {
      //   this.basicInformation = response.data.work_experience
      //   console.log('输出工作经历')
      //   console.log(this.basicInformation)
      // })
      const pramsc = {
        infotype: informationType[3]
      }
      getTeacherInformationData({ ...pramsc, token: this.token }).then(response => {
        this.professionalAbility = response.data.professional
        console.log('输出专业能力')
        console.log(this.professionalAbility)
        this.editProfessionalAbility.push(response.data.professional[0])
        console.log('输出editProfessionalAbility')
        console.log(this.editProfessionalAbility)
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
