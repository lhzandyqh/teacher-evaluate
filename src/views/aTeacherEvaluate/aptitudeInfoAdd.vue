<template>
  <div style="padding: 20px;">
    <el-steps :active="stauts" finish-status="success" simple style="margin-top: 20px">
      <el-step title="1.资质名称" />
      <el-step title="2.资质描述" />
      <el-step title="3.资质上传" />
      <el-step title="4.确认提交" />
    </el-steps>
    <div v-if="stauts===0" class="firstCont">
      <el-form ref="form" label-width="150px" style="margin: 20px 0;">
        <el-form-item label="请选择您的资质名称">
          <el-select v-model="t_qualification_name" placeholder="请选择您的资质名称" @change="changeZiZhi">
            <el-option label="学术科研" value="keyan"/>
            <el-option label="教育教学" value="jiaoxue"/>
            <el-option label="行政获奖" value="xingzheng"/>
            <el-option label="其他" value="qita"/>
          </el-select>
        </el-form-item>
      </el-form>
      <el-row v-if="t_qualification_name==='keyan'" :gutter="20">
        <el-col :span="8">
          <el-form ref="form" :model="form" label-width="110px">
            <div class="lunTiem">论文发表</div>
            <el-form-item label="论文名称">
              <el-input v-model="form.issue_name"/>
            </el-form-item>
            <el-form-item label="刊物名称">
              <el-input v-model="form.issuing_periodical"/>
            </el-form-item>
            <el-form-item label="刊号">
              <el-input v-model="form.issuing_ISSN"/>
            </el-form-item>
            <el-form-item label="刊物等级">
              <el-select v-model="form.paper_level" placeholder="请选择刊物等级">
                <el-option label="一类" value="一类"/>
                <el-option label="二类" value="二类"/>
              </el-select>
            </el-form-item>
            <el-form-item label="是否为核心期刊">
              <el-select v-model="form.is_center" placeholder="请选择是否为核心期刊">
                <el-option label="是" value="是"/>
                <el-option label="否" value="否"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" label-width="100px">
            <div class="lunTiem">项目课题</div>
            <el-form-item label="项目课题名称">
              <el-input v-model="form.item_name"/>
            </el-form-item>
            <el-form-item label="起始时间">
              <el-date-picker
                v-model="form.item_start_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="终止时间">
              <el-date-picker
                v-model="form.item_end_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="个人角色">
              <el-input v-model="form.item_personal_role"/>
            </el-form-item>
            <el-form-item label="课题批准单位">
              <el-select v-model="form.item_allowance" placeholder="请选择课题批准单位">
                <el-option label="市级" value="市级"/>
                <el-option label="区级" value="区级"/>
                <el-option label="校级" value="校级"/>
              </el-select>
            </el-form-item>
            <div class="lunTiem" style="font-weight: 500;font-size: 14px;">项目课题年度完成情况</div>
            <el-form-item label="个人作用">
              <el-select v-model="form.item_personal_work" placeholder="请选择个人作用">
                <el-option label="支持" value="支持"/>
                <el-option label="参与" value="参与"/>
              </el-select>
            </el-form-item>
            <el-form-item label="成果类型">
              <el-select v-model="form.item_result_type" placeholder="请选择成果类型">
                <el-option label="奖励" value="奖励"/>
                <el-option label="效益" value="效益"/>
                <el-option label="专利" value="专利"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="8">
          <el-form ref="form" :model="form" label-width="110px">
            <div class="lunTiem">参加会议/学术活动</div>
            <el-form-item label="发表时间">
              <el-date-picker
                v-model="form.activity_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="作者排位">
              <el-input v-model="form.activity_author_rank"/>
            </el-form-item>
            <el-form-item label="会议名称">
              <el-input v-model="form.activity_name"/>
            </el-form-item>
            <el-form-item label="主办单位">
              <el-input v-model="form.activity_organizor"/>
            </el-form-item>
            <el-form-item label="参加时间">
              <el-date-picker
                v-model="form.activity_attend_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="会议上是否发言">
              <el-select v-model="form.activity_speak_or_not" placeholder="请选择会议上是否发言">
                <el-option label="是" value="是"/>
                <el-option label="否" value="否"/>
              </el-select>
            </el-form-item>
            <el-form-item label="发言内容">
              <el-input v-model="form.activity_speaking"/>
            </el-form-item>
            <el-form-item label="参会身份">
              <el-select v-model="form.activity_identity" placeholder="请选择参会身份">
                <el-option label="受邀专家" value="受邀专家"/>
                <el-option label="一般参与" value="一般参与"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row v-if="t_qualification_name==='jiaoxue'" :gutter="20">
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="110px">
            <div class="lunTiem">教学成果</div>
            <el-form-item label="教学成果">
              <el-input v-model="form.teaching_achievement"/>
            </el-form-item>
            <el-form-item label="教学奖时间">
              <el-date-picker
                v-model="form.teaching_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="教学奖名称">
              <el-input v-model="form.teaching_name"/>
            </el-form-item>
            <el-form-item label="获奖级别">
              <el-select v-model="form.teaching_level" placeholder="请选择获奖级别">
                <el-option label="市级" value="市级"/>
                <el-option label="区级" value="区级"/>
                <el-option label="校级" value="校级"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="110px">
            <div class="lunTiem">项目课题</div>
            <el-form-item label="公开课课程类型">
              <el-select v-model="form.proj_type" placeholder="请选择公开课课程类型">
                <el-option label="公开课" value="gong"/>
                <el-option label="研究课" value="yan"/>
                <el-option label="展示课" value="zhan"/>
              </el-select>
            </el-form-item>
            <el-form-item label="课程时间">
              <el-input v-model="form.proj_time"/>
            </el-form-item>
            <el-form-item label="课程地点">
              <el-input v-model="form.proj_loc"/>
            </el-form-item>
            <el-form-item label="课程题目">
              <el-input v-model="form.proj_name"/>
            </el-form-item>
            <el-form-item label="课程市场">
              <el-input v-model="form.proj_market"/>
            </el-form-item>
            <el-form-item label="主办部门">
              <el-input v-model="form.proj_organiser"/>
            </el-form-item>
            <el-form-item label="比赛类型">
              <el-input v-model="form.proj_match_type"/>
            </el-form-item>
            <el-form-item label="课程级别">
              <el-select v-model="form.proj_level" placeholder="请选择课程级别">
                <el-option label="市级" value="市级"/>
                <el-option label="区级" value="区级"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row v-if="t_qualification_name==='xingzheng'" :gutter="20">
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="110px">
            <div class="lunTiem"/>
            <el-form-item label="获奖名称">
              <el-select v-model="form.adm_name" placeholder="请选择获奖名称">
                <el-option label="优秀教师" value="优秀教师"/>
                <el-option label="青年优秀工作者" value="青年优秀工作者"/>
                <el-option label="优秀班主任" value="优秀班主任"/>
              </el-select>
            </el-form-item>
            <el-form-item label="获奖时间">
              <el-date-picker
                v-model="form.adm_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="获奖级别">
              <el-select v-model="form.adm_level" placeholder="请选择获奖级别">
                <el-option label="市级" value="市级"/>
                <el-option label="区级" value="区级"/>
                <el-option label="校级" value="校级"/>
              </el-select>
            </el-form-item>
            <el-form-item label="主办单位">
              <el-input v-model="form.adm_organiser"/>
            </el-form-item>
            <el-form-item label="获奖形式">
              <el-select v-model="form.adm_set" placeholder="请选择获奖形式">
                <el-option label="团队" value="团队"/>
                <el-option label="个人" value="个人"/>
              </el-select>
            </el-form-item>
            <el-form-item label="获奖类型">
              <el-select v-model="form.adm_type" placeholder="请选择获奖类型">
                <el-option label="一类" value="一类"/>
                <el-option label="二类" value="二类"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <el-row v-if="t_qualification_name==='qita'" :gutter="20">
        <el-col :span="24"/>
      </el-row>
    </div>
    <div v-if="stauts===1" class="firstCont">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form ref="form" :model="form" label-width="110px" style="padding-top:20px;">
            <el-form-item label="资质类型">
              <el-select v-model="form.cert_type" placeholder="请选择资质类型">
                <el-option label="学术科研(论文发表)" value="学术科研(论文发表)"/>
                <el-option label="学术科研(项目课题)" value="学术科研(项目课题)"/>
                <el-option label="学术科研(会议活动)" value="学术科研(会议活动)"/>
                <el-option label="教育教学(教育成果)" value="教育教学(教育成果)"/>
                <el-option label="教育教学(项目课题)" value="教育教学(项目课题)"/>
                <el-option label="行政获奖" value="行政获奖"/>
                <el-option label="其他" value="其他"/>
              </el-select>
            </el-form-item>
            <el-form-item label="隶属级别">
              <el-select v-model="form.dept_level" placeholder="请选择隶属级别">
                <el-option label="国际级" value="国际级"/>
                <el-option label="国家级" value="国家级"/>
                <el-option label="省部级" value="省部级"/>
                <el-option label="区县级" value="区县级"/>
                <el-option label="校级" value="校级"/>
              </el-select>
            </el-form-item>
            <el-form-item label="资质等级">
              <el-select v-model="form.cert_level" placeholder="请选择资质等级">
                <el-option label="一等奖" value="一等奖"/>
                <el-option label="二等奖" value="二等奖"/>
                <el-option label="三等奖" value="三等奖"/>
                <el-option label="独立奖项" value="独立奖项"/>
                <el-option label="其他" value="其他"/>
              </el-select>
            </el-form-item>
            <el-form-item label="颁发机构">
              <el-input v-model="form.issuing_agency"/>
            </el-form-item>
            <el-form-item label="获奖缘由">
              <el-input v-model="form.reason"/>
            </el-form-item>
            <el-form-item label="证书颁发日期">
              <el-date-picker
                v-model="form.cert_issued_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"/>
            </el-form-item>
            <el-form-item label="证书编号">
              <el-input v-model="form.t_qualification_num"/>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    <div v-if="stauts===2" class="firstCont">
      <div class="components-container">
        <div class="editor-container">
          <!--<dropzone id="myVueDropzone" url="http://58.119.112.11:11028/api/upload" @dropzone-removedFile="dropzoneR" @dropzone-success="dropzoneS"/>-->
          <el-upload
            :http-request="actionMyself"
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <i class="el-icon-upload"/>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>
      </div>
    </div>
    <div v-if="stauts===3" class="firstCont">
      <div v-if="t_qualification_name==='keyan'">
        <div class="lunTiem">论文发表</div>
        <el-row v-if="form.issue_name" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">论文名称</el-col>
          <el-col :span="16" class="rightClas">{{ form.issue_name }}</el-col>
        </el-row>
        <el-row v-if="form.issuing_periodical" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">刊物名称</el-col>
          <el-col :span="16" class="rightClas">{{ form.issuing_periodical }}</el-col>
        </el-row>
        <el-row v-if="form.issuing_ISSN" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">刊号</el-col>
          <el-col :span="16" class="rightClas">{{ form.issuing_ISSN }}</el-col>
        </el-row>
        <el-row v-if="form.paper_level" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">刊物等级</el-col>
          <el-col :span="16" class="rightClas">{{ form.paper_level }}</el-col>
        </el-row>
        <el-row v-if="form.is_center" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">是否为核心期刊</el-col>
          <el-col :span="16" class="rightClas">{{ form.is_center }}</el-col>
        </el-row>
        <div class="lunTiem">项目课题</div>
        <el-row v-if="form.item_name" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">项目课题名称</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_name }}</el-col>
        </el-row>
        <el-row v-if="form.item_start_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">起始时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_start_time }}</el-col>
        </el-row>
        <el-row v-if="form.item_end_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">终止时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_end_time }}</el-col>
        </el-row>
        <el-row v-if="form.item_personal_role" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">个人角色</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_personal_role }}</el-col>
        </el-row>
        <el-row v-if="form.item_allowance" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">课题批准单位</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_allowance }}</el-col>
        </el-row>
        <el-row v-if="form.item_personal_work" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">个人作用</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_personal_work }}</el-col>
        </el-row>
        <el-row v-if="form.item_result_type" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">成果类型</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_result_type }}</el-col>
        </el-row>
        <div class="lunTiem">参加会议/学术活动</div>
        <el-row v-if="form.item_name" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">发表时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_name }}</el-col>
        </el-row>
        <el-row v-if="form.item_start_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">作者排位</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_start_time }}</el-col>
        </el-row>
        <el-row v-if="form.item_end_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">会议名称</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_end_time }}</el-col>
        </el-row>
        <el-row v-if="form.item_personal_role" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">主办单位</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_personal_role }}</el-col>
        </el-row>
        <el-row v-if="form.item_allowance" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">参加时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_allowance }}</el-col>
        </el-row>
        <el-row v-if="form.item_personal_work" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">会议上是否发言</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_personal_work }}</el-col>
        </el-row>
        <el-row v-if="form.item_result_type" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">发言内容</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_result_type }}</el-col>
        </el-row>
        <el-row v-if="form.item_result_type" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">参会身份</el-col>
          <el-col :span="16" class="rightClas">{{ form.item_result_type }}</el-col>
        </el-row>
      </div>
      <div v-if="t_qualification_name==='jiaoxue'">
        <div class="lunTiem">教学成果</div>
        <el-row v-if="form.teaching_achievement" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">教学成果</el-col>
          <el-col :span="16" class="rightClas">{{ form.teaching_achievement }}</el-col>
        </el-row>
        <el-row v-if="form.teaching_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">教学奖时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.teaching_time }}</el-col>
        </el-row>
        <el-row v-if="form.teaching_name" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">教学奖名称</el-col>
          <el-col :span="16" class="rightClas">{{ form.teaching_name }}</el-col>
        </el-row>
        <el-row v-if="form.teaching_level" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">获奖级别</el-col>
          <el-col :span="16" class="rightClas">{{ form.teaching_level }}</el-col>
        </el-row>
        <div class="lunTiem">项目课题</div>
        <el-row v-if="form.proj_type" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">公开课课程类型选项</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_type }}</el-col>
        </el-row>
        <el-row v-if="form.proj_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">课程时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_time }}</el-col>
        </el-row>
        <el-row v-if="form.proj_loc" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">课程地点</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_loc }}</el-col>
        </el-row>
        <el-row v-if="form.proj_name" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">课程题目</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_name }}</el-col>
        </el-row>
        <el-row v-if="form.proj_market" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">课程市场</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_market }}</el-col>
        </el-row>
        <el-row v-if="form.proj_organiser" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">主办部门</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_organiser }}</el-col>
        </el-row>
        <el-row v-if="form.proj_match_type" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">比赛类型</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_match_type }}</el-col>
        </el-row>
        <el-row v-if="form.proj_level" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">课程级别</el-col>
          <el-col :span="16" class="rightClas">{{ form.proj_level }}</el-col>
        </el-row>
      </div>
      <div v-if="t_qualification_name==='xingzheng'">
        <div class="lunTiem">行政获奖</div>
        <el-row v-if="form.adm_name" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">获奖名称</el-col>
          <el-col :span="16" class="rightClas">{{ form.adm_name }}</el-col>
        </el-row>
        <el-row v-if="form.adm_time" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">获奖时间</el-col>
          <el-col :span="16" class="rightClas">{{ form.adm_time }}</el-col>
        </el-row>
        <el-row v-if="form.adm_level" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">获奖级别</el-col>
          <el-col :span="16" class="rightClas">{{ form.adm_level }}</el-col>
        </el-row>
        <el-row v-if="form.adm_organiser" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">主办单位</el-col>
          <el-col :span="16" class="rightClas">{{ form.adm_organiser }}</el-col>
        </el-row>
        <el-row v-if="form.adm_set" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">获奖形式</el-col>
          <el-col :span="16" class="rightClas">{{ form.adm_set }}</el-col>
        </el-row>
        <el-row v-if="form.adm_type" :gutter="20" class="fourClass">
          <el-col :span="4" class="leftClas">获奖类型</el-col>
          <el-col :span="16" class="rightClas">{{ form.adm_type }}</el-col>
        </el-row>
      </div>
      <div class="lunTiem">资质描述</div>
      <el-row v-if="form.dept_level" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">隶属级别</el-col>
        <el-col :span="16" class="rightClas">{{ form.dept_level }}</el-col>
      </el-row>
      <el-row v-if="form.cert_level" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">资质等级</el-col>
        <el-col :span="16" class="rightClas">{{ form.cert_level }}</el-col>
      </el-row>
      <el-row v-if="form.cert_type" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">资质类型</el-col>
        <el-col :span="16" class="rightClas">{{ form.cert_type }}</el-col>
      </el-row>
      <el-row v-if="form.issuing_agency" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">颁发机构单位</el-col>
        <el-col :span="16" class="rightClas">{{ form.issuing_agency }}</el-col>
      </el-row>
      <el-row v-if="form.reason" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">获奖缘由</el-col>
        <el-col :span="16" class="rightClas">{{ form.reason }}</el-col>
      </el-row>
      <el-row v-if="form.t_qualification_num" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">证书编号</el-col>
        <el-col :span="16" class="rightClas">{{ form.t_qualification_num }}</el-col>
      </el-row>
      <el-row v-if="form.cert_issued_time" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">获奖时间</el-col>
        <el-col :span="16" class="rightClas">{{ form.cert_issued_time }}</el-col>
      </el-row>
      <el-row v-if="form.imageurl" :gutter="20" class="fourClass">
        <el-col :span="4" class="leftClas">图片</el-col>
        <el-col :span="16" class="rightClas">{{ form.imageurl }}</el-col>
      </el-row>
    </div>
    <div class="footerBtn">
      <el-button v-if="stauts>0" type="primary" @click="jianStatus">上一页</el-button>
      <el-button v-if="stauts<3" type="primary" @click="addStatus">下一页</el-button>
      <el-button v-if="stauts===3" type="success" @click="submit">完成</el-button>
    </div>
  </div>
</template>

<script>

import Dropzone from '@/components/Dropzone'
import { getAptitude, addAptitude } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'
import axios from 'axios'

export default {
  name: 'AptitudeInfoAdd',
  components: { Dropzone },
  data() {
    return {
      t_qualification_name: 'keyan',
      form: {},
      stauts: 0,
      token: getToken()
    }
  },
  mounted() {
    const that = this
    if (this.$route.query.id) {
      getAptitude({ token: this.token, id: this.$route.query.id }).then(response => {
        that.form = response.data
      })
    }
  },
  methods: {
    changeZiZhi() {
      console.log(this.t_qualification_name)
    },
    addStatus() {
      this.stauts++
      console.log(this.form)
    },
    jianStatus() {
      this.stauts--
    },
    dropzoneS(file) {
      console.log(file)
      this.$message({ message: 'Upload success', type: 'success' })
    },
    dropzoneR(file) {
      console.log(file)
      this.$message({ message: 'Delete success', type: 'success' })
    },
    actionMyself(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      axios.post('http://58.119.112.11:11028/api/upload', formData).then((res) => {
        console.log(res)
        this.form.imageurl = res.data.result.imageUrl
      })
    },
    submit() {
      addAptitude(this.form).then(response => {
        if (response.data.code === 200) {
          this.$message({
            type: 'success',
            message: '新增成功'
          })
          this.$router.push({ name: 'aptitudeInfoAdd' })
        }
      })
    }
  }
}
</script>

<style scoped>
  .lunTiem{
    padding: 20px 10px;
    font-weight: 600;
    color: #409EFF;
  }
  .firstCont{
    padding: 20px;
  }
.firstCont .el-col .el-form{
  padding: 0 10px;
  border: 1px solid #efefef;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}
  .footerBtn{
    float: right;
    margin: 20px;
  }
  .fourClass{
    margin: 10px 0;
  }
  .leftClas{
    text-align: right;
  }
  .rightClas{
    color: #666;
  }
</style>
