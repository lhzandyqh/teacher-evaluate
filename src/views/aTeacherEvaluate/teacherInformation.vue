<template>
  <div class="app-container">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">基本信息</span>
            <el-button style="float: right; padding: 3px 0" type="text">导出</el-button>
          </div>
          <div class="card-container">
            <el-row>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">教师姓名:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">刘老师</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">曾用名:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">性别:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">男</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">国籍/地区:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">中国</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">邮箱:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">lannisteryqh@163.com</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="8">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">身份证件类型:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">身份证</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="16">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">身份证件号码:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">430482188509230114</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="8">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">出生日期:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">1885-09-23</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="5">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">籍贯:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">北京</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="5">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">户籍地:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">北京</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="5">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">民族:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">汉</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">政治面貌:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">党员</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">婚姻状况:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">已婚</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">健康状况:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">良好</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">特长:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">唱歌，运动</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">兴趣爱好:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">足球，游戏，看书</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">最高学历:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">硕士</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">最高学位:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">硕士</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">参加工作时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2010-09-11</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">进入本校时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2010-08-11</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">教职工来源:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">社会招聘</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">岗位分类:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">技术</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="10">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">岗位级别:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">技术五级</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否专任教师:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否班主任:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">担任班主任年限:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">0</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">人员状态:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">在职</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">学段:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">4</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">部门:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">信息中心</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">劳动关系:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">合同</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">所在年级:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">高一</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">分管工作:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">职务:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">主任</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">信息技术应用能力:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">优秀</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">用人形式:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">全职</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">签订合同情况:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">已签合同</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">合同开始时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2010-09-20</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">合同结束时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2020-09-20</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">专业能力</span>
            <el-button style="float: right; padding: 3px 0" type="text">导出</el-button>
          </div>
          <div class="card-container">
            <el-row>
              <el-col :span="6">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否特级教师:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="10">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否县级及以上骨干教师:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="8">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否心里健康教育教师:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">是</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得特级教师专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得特级教师称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2009-07-20</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得市学科专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得市学科称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得市骨干专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">得市骨干称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得紫金杯班主任专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得紫金杯班主任称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得区学科专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得区学科称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得区班主任专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得区班主任称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得区骨干专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得区骨干称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得校学科专业发展称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得校学科称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得全国先进荣誉称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得全国先进荣誉称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得市级先进荣誉称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得市级先进荣誉称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得区级先进荣誉:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得区级先进荣誉称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否获得区级教委荣誉称号:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">获得教委先进荣誉称号时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">职称:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">职称评定时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="padding-top: 30px">
      <el-col :span="18">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">工作经历</span>
            <el-button style="float: right; padding: 3px 0" type="text">导出</el-button>
          </div>
          <div class="card-container">
            <el-row>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否参加过基层服务项目:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">是</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">参加基层服务项目起始时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-07-10</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">参加基层服务项目结束时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">一般校工作经历的工作学校:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">一般校工作经历的任教学科:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">一般校工作经历总课时</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过班主任:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任班主任起始时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任班主任结束时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过年级组长</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任年级组长起始时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任年级组长结束时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过教研组长:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任教研组长起始时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任教研组长结束时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过行政干部</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任行政干部起始时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过学科组长</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任学科组长起始时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任任现职以来担任学科组长结束时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过备课组长:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任备课组长起始时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任备课组长结束时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任社团辅导员起始时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来担任社团辅导员结束时间</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2008-09-01</span>
                  </div>
                </div>
              </el-col>
              <el-col :span="12">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">任现职以来是否担任过社团辅导员</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">无</span>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder;color:#409EFF ">学习经历</span>
            <el-button style="float: right; padding: 3px 0" type="text">导出</el-button>
          </div>
          <div class="card-container">
            <el-row>
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">毕业院校:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">中国科学院大学</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">毕业专业:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">计算机科学与技术</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">毕业时间:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">2009-07-20</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否全日制师范专业毕业:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否全日制学前教育专业毕业:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否接受过学前教育专业培养培训:</span>
                    </div>
                  </div>
                  <div class="content">
                    <span style="font-size: 15px;text-align: right">否</span>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="row-container">
              <el-col :span="24">
                <div style="display: inline-block">
                  <div class="biaoqian">
                    <div>
                      <span style="font-size: 15px;font-weight: bolder;">是否属于免费（公费）师范生:</span>
                    </div>
                  </div>
                  <div class="content">
                    <div>
                      <span style="font-size: 15px;text-align: right">否</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TeacherInformation'
}
</script>

<style scoped>
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
    margin-left: 30px;
    text-align: right;
  }
  .row-container{
    padding-top: 10px;
  }

</style>
