<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择年级组:</div>
        <div>
          <el-select v-model="valuea" placeholder="请选择年级组">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">请输入教师姓名:</div>
        <div>
          <el-input v-model="input" placeholder="请输入姓名"/>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px" @click="findTeacherContract">查询</el-button>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px" @click="getContract">显示合同快到期人员</el-button>
        </div>
        <div>
          <el-button type="success" style="margin-left:15px" @click="increaseFlag=true">新增合同</el-button>
        </div>
        <div style="float: right;margin-left: 30%">
          <el-button type="text" @click="getRetirement">查看退休人员</el-button>
          <el-button type="text" @click="getZaigang">查看在岗人员</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <div>
      <el-row>
        <el-col :span="1">
          <img style="width: 20px;height: 20px" src="../../assets/piliang.png">
        </el-col>
        <el-col :span="2">
          <span style="font-size: 13px;margin-left: -20px;font-weight: bolder;color: deepskyblue;cursor: pointer" @click="piliangControl">批量操作</span>
        </el-col>
        <el-col :span="20">
          <div style="float: right">
            <span style="font-weight: bolder;font-size: 10px">注：默认显示合同即将到期的老师信息</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <!--      <el-table v-loading="listLoading" :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">-->

      <!--        <el-table-column align="center" label="编号">-->
      <!--          <template slot-scope="scope">-->
      <!--            <span>{{ scope.row.id }}</span>-->
      <!--          </template>-->
      <!--        </el-table-column>-->

      <!--        <el-table-column align="center" label="姓名">-->
      <!--          <template slot-scope="scope">-->
      <!--            <span>{{ scope.row.username }}</span>-->
      <!--          </template>-->
      <!--        </el-table-column>-->

      <!--        <el-table-column align="center" label="性别">-->
      <!--          <template slot-scope="scope">-->
      <!--            <span>{{ scope.row.gender }}</span>-->
      <!--          </template>-->
      <!--        </el-table-column>-->

      <!--        <el-table-column align="center" label="人员类别">-->
      <!--          <template slot-scope="scope">-->
      <!--            <div v-if="scope.row.classFlag">-->
      <!--              <span>{{ scope.row.is_series }}</span>-->
      <!--              <el-button style="margin-left: 20px" type="text" @click="scope.row.classFlag = false">操作</el-button>-->
      <!--            </div>-->
      <!--            <div v-else>-->
      <!--              <el-select v-model="scope.row.is_series" placeholder="请选择">-->
      <!--                <el-option-->
      <!--                  v-for="item in options"-->
      <!--                  :key="item.value"-->
      <!--                  :label="item.label"-->
      <!--                  :value="item.value"/>-->
      <!--              </el-select>-->
      <!--              <el-button style="margin-left: 20px" type="text" @click="scope.row.classFlag = true">取消</el-button>-->
      <!--            </div>-->
      <!--          </template>-->
      <!--        </el-table-column>-->

      <!--        <el-table-column align="center" label="合同时间">-->
      <!--          <template slot-scope="scope">-->
      <!--            <span style="color: red">{{ scope.row.daysUntilEnd }}</span>-->
      <!--            <el-button type="text" @click="beginManage">操作</el-button>-->
      <!--          </template>-->
      <!--        </el-table-column>-->

      <!--        <el-table-column align="center" label="工作状态">-->
      <!--          <template slot-scope="scope">-->
      <!--            <div v-if="scope.row.statusFlag">-->
      <!--              <span>{{ scope.row.status }}</span>-->
      <!--              <el-button style="margin-left: 20px" type="text" @click="scope.row.statusFlag = false">操作</el-button>-->
      <!--            </div>-->
      <!--            <div v-else>-->
      <!--              <el-select v-model="scope.row.status" placeholder="请选择">-->
      <!--                <el-option-->
      <!--                  v-for="item in workoption"-->
      <!--                  :key="item.value"-->
      <!--                  :label="item.label"-->
      <!--                  :value="item.value"/>-->
      <!--              </el-select>-->
      <!--              <el-button style="margin-left: 20px" type="text" @click="scope.row.statusFlag = true">取消</el-button>-->
      <!--            </div>-->
      <!--          </template>-->
      <!--        </el-table-column>-->

      <!--        &lt;!&ndash;        <el-table-column align="center" label="年龄">&ndash;&gt;-->
      <!--        &lt;!&ndash;          <template slot-scope="scope">&ndash;&gt;-->
      <!--        &lt;!&ndash;            <span>{{ scope.row.certLevel }}</span>&ndash;&gt;-->
      <!--        &lt;!&ndash;          </template>&ndash;&gt;-->
      <!--        &lt;!&ndash;        </el-table-column>&ndash;&gt;-->

      <!--        <el-table-column align="center" label="年级组">-->
      <!--          <template slot-scope="scope">-->
      <!--            <span>{{ scope.row.tDept }}</span>-->
      <!--          </template>-->
      <!--        </el-table-column>-->
      <!--        <el-table-column align="center" label="操作">-->
      <!--          <template slot-scope="scope">-->
      <!--            <el-button type="text" @click="lookTeacherData(scope.row)">查看教师信息</el-button>-->
      <!--          </template>-->
      <!--        </el-table-column>-->
      <!--      </el-table>-->
      <el-row style="margin-top: 30px">
        <el-table
          ref="multipleTable"
          :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column
            v-if="piliangFlag"
            type="selection"
            width="55"
          />
          <el-table-column align="center" label="编号">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="姓名">
            <template slot-scope="scope">
              <span>{{ scope.row.username }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="性别">
            <template slot-scope="scope">
              <span>{{ scope.row.gender }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="人员类别">
            <template slot-scope="scope">
              <div v-if="scope.row.classFlag">
                <span>{{ scope.row.is_series }}</span>
                <el-button style="margin-left: 20px" type="text" @click="scope.row.classFlag = false">操作</el-button>
              </div>
              <div v-else>
                <el-select v-model="scope.row.is_series" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
                <el-button style="margin-left: 20px" type="text" @click="scope.row.classFlag = true">取消</el-button>
              </div>
            </template>
          </el-table-column>
          <el-table-column align="center" label="合同时间">
            <template slot-scope="scope">
              <span style="color: red">{{ scope.row.daysUntilEnd }}</span>
              <el-button type="text" @click="beginManage">操作</el-button>
            </template>
          </el-table-column>
          <el-table-column align="center" label="工作状态">
            <template slot-scope="scope">
              <div v-if="scope.row.statusFlag">
                <span>{{ scope.row.status }}</span>
                <el-button style="margin-left: 20px" type="text" @click="scope.row.statusFlag = false">操作</el-button>
              </div>
              <div v-else>
                <el-select v-model="scope.row.status" placeholder="请选择">
                  <el-option
                    v-for="item in workoption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"/>
                </el-select>
                <el-button style="margin-left: 20px" type="text" @click="scope.row.statusFlag = true">取消</el-button>
              </div>
            </template>
          </el-table-column>

          <!--        <el-table-column align="center" label="年龄">-->
          <!--          <template slot-scope="scope">-->
          <!--            <span>{{ scope.row.certLevel }}</span>-->
          <!--          </template>-->
          <!--        </el-table-column>-->

          <el-table-column align="center" label="年级组">
            <template slot-scope="scope">
              <span>{{ scope.row.tDept }}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button type="text" @click="lookTeacherData(scope.row)">查看教师信息</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <div class="fenye">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="tabledata.length"
          style="margin-top:20px;"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-row>
    <el-dialog
      :visible.sync="increaseFlag"
      :before-close="handleClose"
      title="新增合同"
      width="30%">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="教师姓名">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="姓名全拼">
          <el-input v-model="form.quanping"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="form.gender"/>
        </el-form-item>
        <el-form-item label="身份证号码">
          <el-input v-model="form.idNumber"/>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.phone"/>
        </el-form-item>
        <el-form-item label="年级组">
          <el-select v-model="form.gradeGroup" placeholder="请选择年级组">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </el-form-item>
        <el-form-item label="人员类别">
          <el-select v-model="form.peopleClass" placeholder="请选择人员类别">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </el-form-item>
        <el-form-item label="合同开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.begindate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="合同结束时间">
          <el-col :span="11">
            <el-date-picker v-model="form.enddate" value-format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%;"/>
          </el-col>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">-
        <el-button @click="increaseFlag = false">取 消</el-button>
        <el-button type="primary" @click="increaseContract">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      title="合同管理"
      width="30%">
      <el-row>
        <el-col :span="3">
          <div style="margin-top: 10px">
            <span>合同更新</span>
          </div>
        </el-col>
        <el-col :span="6">
          <el-select v-model="hetongvalue" placeholder="" @change="changeHetongStatus">
            <el-option
              v-for="item in hetongoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-col>
        <el-col :span="6">
          <div v-if="secondFlag" style="margin-left: 20px">
            <el-select v-model="hetongAfter" placeholder="请选择">
              <el-option
                v-for="item in optionThree"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="3">
          <div style="margin-top: 10px">
            <span>合同时间</span>
          </div>
        </el-col>
        <el-col v-if="hetongFlag" :span="10">
          <el-date-picker
            v-model="hetongDate"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
        </el-col>
        <el-col v-else :span="10">
          <el-date-picker
            v-model="hetongDate"
            disabled
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogVisibleTwo"
      :before-close="handleClose"
      title="教师信息详情"
      width="60%">
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
      <el-row :gutter="20" style="padding-top: 10px">
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
      <el-row :gutter="20" style="padding-top: 10px">
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
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleTwo = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAllTeachGroup } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'
import { findRetirementPeople, findContractEndPeople, findTeacherContractByNameOrGroup, increaseNewContract } from '@/api/engageManage'
export default {
  name: 'EngageManage',
  data() {
    return {
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
      highest_grad_time: '',
      dialogVisibleTwo: false,
      form: {
        name: '',
        phone: '',
        quanping: '',
        gender: '',
        idNumber: '',
        gradeGroup: '',
        peopleClass: '',
        begindate: '',
        enddate: ''
      },
      increaseFlag: false,
      hetongAfter: '',
      secondFlag: false,
      valuea: '',
      input: '',
      currentPage: 1,
      pagesize: 10,
      hetongFlag: true,
      hetongDate: [],
      hetongvalue: '',
      renyuanFlag: true,
      gongzuoFlag: true,
      workValue: '',
      optionThree: [
        {
          value: '离职',
          label: '离职'
        }, {
          value: '调出',
          label: '调出'
        }, {
          value: '退休',
          label: '退休'
        }
      ],
      hetongoptions: [
        {
          value: '终止合同',
          label: '终止合同'
        }, {
          value: '更新合同',
          label: '更新合同'
        }
      ],
      workoption: [{
        value: '在职',
        label: '在职'
      }, {
        value: '离职',
        label: '离职'
      }, {
        value: '退休',
        label: '退休'
      }],
      options: [{
        value: '在编',
        label: '在编'
      }, {
        value: '长休',
        label: '长休'
      }, {
        value: '返聘',
        label: '返聘'
      }, {
        value: '入库',
        label: '入库'
      }, {
        value: '编外聘用',
        label: '编外聘用'
      }, {
        value: '劳务派遣',
        label: '劳务派遣'
      }],
      peopleValue: '',
      dialogVisible: false,
      tabledata: [],
      optionstwo: [],
      token: getToken(),
      multipleSelection: [],
      piliangFlag: false
    }
  },
  mounted() {
    this.getTeachGroupList()
    this.getContract()
  },
  methods: {
    increaseContract: function() {
      if (this.form.phone === '' || this.form.name === '' || this.form.gender === '' || this.form.quanping === '' || this.form.idNumber === '' || this.form.gradeGroup === '' || this.form.peopleClass === '' || this.form.begindate === '' || this.form.enddate === '') {
        this.$message({
          message: '合同信息未填写完整，无法新增',
          type: 'warning'
        })
      } else {
        const prams = {
          username: this.form.name,
          gender: this.form.gender,
          phone: this.form.phone,
          tDept: this.form.gradeGroup,
          xingmingquanpin: this.form.quanping,
          id_num: this.form.idNumber,
          contract_start_date: this.form.begindate,
          contract_end_date: this.form.enddate,
          is_series: this.form.peopleClass
        }
        increaseNewContract({ ...prams, token: this.token }).then(response => {
          console.log('测试新增合同')
          console.log(response.data)
        })
        this.$message({
          message: '新增合同成功',
          type: 'success'
        })
        this.increaseFlag = false
      }
    },
    findTeacherContract: function() {
      if (this.input === '') {
        const prams = {
          // teachername: this.input,
          tDept: this.valuea
        }
        findTeacherContractByNameOrGroup({ ...prams, token: this.token }).then(response => {
          console.log('测试根据教研组和名字查找教师合同')
          console.log(response.data)
          this.tabledata = response.data.teacherinfo
        })
      } else {
        const prams = {
          teachername: this.input,
          tDept: this.valuea
        }
        findTeacherContractByNameOrGroup({ ...prams, token: this.token }).then(response => {
          console.log('测试根据教研组和名字查找教师合同')
          console.log(response.data)
          this.tabledata = response.data.teacherinfo
        })
      }
    },
    getContract: function() {
      const prams = {
        daysUntilEnd: ''
      }
      findContractEndPeople({ ...prams, token: this.token }).then(response => {
        console.log('查看合同快要到期的教师')
        console.log(response.data)
        this.tabledata = response.data.contractTecInfo
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    getRetirement: function() {
      const prams = {
        workstatus: '退休'
      }
      findRetirementPeople({ ...prams, token: this.token }).then(response => {
        console.log('测试获取的退休人员的信息')
        console.log(response.data)
        this.tabledata = response.data.teacherinfo
      })
    },
    getZaigang: function() {
      const prams = {
        workstatus: '在岗'
      }
      findRetirementPeople({ ...prams, token: this.token }).then(response => {
        console.log('测试获取的在岗人员的信息')
        console.log(response.data)
        this.tabledata = response.data.teacherinfo
      })
    },
    changeHetongStatus: function() {
      if (this.hetongvalue === '更新合同') {
        this.hetongFlag = true
        this.secondFlag = false
      } else {
        this.hetongFlag = false
        this.secondFlag = true
      }
    },
    renyuanFlagChange: function() {
      this.renyuanFlag = false
    },
    cancelRenyaunFlag: function() {
      this.renyuanFlag = true
    },
    gongzuoFlagChange: function() {
      this.gongzuoFlag = false
    },
    cancelGongzuoFlag: function() {
      this.gongzuoFlag = true
    },
    beginManage: function() {
      this.dialogVisible = true
    },
    getTeachGroupList: function() {
      getAllTeachGroup(this.token).then(response => {
        console.log('测试返回的教研组')
        console.log(response.data)
        // eslint-disable-next-line no-empty
        for (let i = 0; i < response.data.allDeptName.length; i++) {
          const obj = {
            value: response.data.allDeptName[i],
            label: response.data.allDeptName[i]
          }
          this.optionstwo.push(obj)
        }
      })
    },
    andleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    lookTeacherData: function(row) {
      this.dialogVisibleTwo = true
      console.log('测试获取老师数据')
      console.log(row)
      this.former_grad_college = row.former_grad_college
      this.former_system = row.former_system
      this.former_grad_time = row.former_grad_time
      this.former_major = row.former_major
      this.highest_grad_college = row.highest_grad_college
      this.high_degree = row.high_degree
      this.highest_system = row.highest_system
      this.highest_major = row.highest_major
      this.higeducation = row.higeducation
      this.former_edu = row.former_edu
      this.highest_grad_time = row.highest_grad_time
      this.zhichengTime = row.zhichengTime
      this.position_level = row.position_level
      this.super_teacher = row.super_teacher
      this.important_teacher = row.important_teacher
      this.professDevelopTitle = row.professDevelopTitle
      this.professDevelopTitleTime = row.professDevelopTitleTime
      this.honor_title = row.honor_title
      this.honor_title_time = row.honor_title_time
      this.workSincePresent = row.workSincePresent
      this.workStartTime = row.workStartTime
      this.workEndTime = row.workEndTime
      this.zhicheng = row.zhicheng
      this.is_head_teacher = row.is_head_teacher
      this.is_full_time_teacher = row.is_full_time_teacher
      this.username = row.username
      this.nickname = row.nickname
      this.gender = row.gender
      this.born_time = row.born_time
      this.nation = row.nation
      this.native_place = row.native_place
      this.political_status = row.political_status
      this.political_time = row.political_time
      this.home_phone = row.home_phone
      this.home_zipcode = row.home_zipcode
      this.home_address = row.home_address
      this.mobile = row.mobile
      this.email = row.email
      this.t_subject = row.t_subject
      this.tDept = row.tDept
      this.job_time = row.job_time
      this.status = row.status
      this.quali_cert = row.quali_cert
      this.quali_cert_num = row.quali_cert_num
      this.staffCategory = row.staffCategory
      this.contract_start_date = row.contract_start_date
      this.contract_end_date = row.contract_end_date
      this.id_num = row.id_num
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    piliangControl: function() {
      this.piliangFlag = true
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }
  .single{
    display: inline-block;
  }
  .biaoqian{
    display: inline-block;
  }
  .content{
    display: inline-block;
  }

</style>
