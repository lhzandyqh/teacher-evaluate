<template>
  <div class="app-container">
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="审核编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="基本工作审核类型">
        <template slot-scope="scope">
          <span>{{ scope.row.classLabel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{ scope.row.username }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher_edit_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
          <el-button v-if="scope.row.verify_status==='待审核'" type="primary" size="small" plain>审核待通过</el-button>
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
    <!--完成教学工作情况查看弹框-->
    <el-dialog :visible.sync="jiaoxueDialogVisible" title="审核详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="start_time" label="起始时间"/>
        <el-table-column prop="end_time" label="终止时间"/>
        <el-table-column prop="teach_chool" label="任教学校"/>
        <el-table-column prop="teach_grade" label="任教年级"/>
        <el-table-column prop="teach_subject" label="任教学科"/>
        <el-table-column prop="hour_per_week" label="每周课时"/>
        <el-table-column prop="total_hours" label="总课时数"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="auditingPass">审核通过</el-button>
        <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
        <el-button type="primary" @click="closeAllDialog">关闭</el-button>
      </span>
    </el-dialog>
    <!--完成教育工作情况查看弹框-->
    <el-dialog :visible.sync="jiaoyuDialogVisible" title="审核详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="start_time" label="起始时间"/>
        <el-table-column prop="end_time" label="终止时间"/>
        <el-table-column prop="grade_head_teacher" label="担任班主任年级"/>
        <el-table-column prop="years_head_teacher" label="累计班主任工作年限"/>
        <el-table-column prop="other_edu_tasks" label="担任其他教育工作职务"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="success" @click="auditingPass">审核通过</el-button>
          <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
    <!--汇报课观摩课研究课情况查看弹框-->
    <el-dialog :visible.sync="huibaokeDialogVisible" title="审核详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="open_class" label="开课日期"/>
        <el-table-column prop="propose_req" label="开课类别"/>
        <el-table-column prop="class_content" label="课程内容"/>
        <el-table-column prop="propose_req" label="目的要求"/>
        <el-table-column prop="county_peop" label="市级听课范围人数"/>
        <el-table-column prop="city_peop" label="区县级听课范围人数"/>
        <el-table-column prop="school_peop" label="校级听课范围人数"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="success" @click="auditingPass">审核通过</el-button>
          <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
    <!--组织指导课外活动情况查看弹框-->
    <el-dialog :visible.sync="kewaihuodongDialogVisible" title="审核详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="start_time" label="起始时间"/>
        <el-table-column prop="end_time" label="终止时间"/>
        <el-table-column prop="organize_name" label="组织名称"/>
        <el-table-column prop="num_of_peop" label="参加人数"/>
        <el-table-column prop="activities_times" label="活动次数"/>
        <el-table-column prop="activities_cont" label="活动内容"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="success" @click="auditingPass">审核通过</el-button>
          <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
    <!--参加系统进修或继续教育情况查看弹框-->
    <el-dialog :visible.sync="xitongjinxiuDialogVisible" title="审核详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="start_time" label="起始时间"/>
        <el-table-column prop="end_time" label="终止时间"/>
        <el-table-column prop="study_unit_name" label="进修单位名称"/>
        <el-table-column prop="fur_edu_content" label="进修内容"/>
        <el-table-column prop="fur_edu_form" label="进修形式"/>
        <el-table-column prop="finish_hours" label="完成课时"/>
        <el-table-column prop="completion_time" label="结业时间"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="success" @click="auditingPass">审核通过</el-button>
          <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
    <!--参加系统进修或继续教育情况查看弹框-->
    <el-dialog :visible.sync="peiyangjiaoshiVisible" title="审核详情">
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="start_time" label="起始时间"/>
        <el-table-column prop="end_time" label="终止时间"/>
        <el-table-column prop="school_who" label="指导培养何校何人"/>
        <el-table-column prop="format" label="形式"/>
        <el-table-column prop="content" label="内容"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.verify_status==='待审核'">审核待通过</div>
            <div v-if="scope.row.verify_status==='审核通过'">审核通过</div>
            <div v-if="scope.row.verify_status==='审核未通过'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <el-row style="padding-top: 10px">
          <span>审核原因</span>
        </el-row>
        <el-row style="padding-top: 10px">
          <el-input
            :rows="4"
            v-model="remark"
            type="textarea"
            placeholder="请输入内容"/>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <div class="foot">
          <el-button type="success" @click="auditingPass">审核通过</el-button>
          <el-button type="danger" @click="auditingNoPass">审核不通过</el-button>
          <el-button type="primary" @click="closeAllDialog">关闭</el-button>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { jiaoshizuzhangGetAuditingListData } from '@/api/adminAuditingInformation'
import { jiaoshizuzhangAuditingBasicWork } from '@/api/nianjizhurenAuditing'
export default {
  name: 'PersonalBasicWorkAuditingTable',
  data() {
    return {
      pvData: [],
      token: getToken(),
      remark: '',
      jiaoxueDialogVisible: false,
      jiaoyuDialogVisible: false,
      huibaokeDialogVisible: false,
      kewaihuodongDialogVisible: false,
      xitongjinxiuDialogVisible: false,
      peiyangjiaoshiVisible: false,
      AuditingReason: '',
      tableData: [
        // {
        //   id: '1',
        //   classLabel: '完成教学工作情况',
        //   askPersonName: '小明',
        //   teacher_edit_date: '2019-10-08',
        //   verify_date: '2019-10-10',
        //   verify_status: '审核通过'
        // }
      ],
      auditingContent: {
        id: '',
        worktype: '',
        description: '',
        status: ''
      },
      currentPage: 1,
      pagesize: 10
    }
  },
  mounted() {
    this.firstGetListData()
  },
  methods: {
    firstGetListData: function() {
      const pramsa = {
        project_name: '完成教学工作情况'
      }
      jiaoshizuzhangGetAuditingListData({ ...pramsa, token: this.token }).then(response => {
        console.log('测试年级组长获取待审核教学工作情况数据泽泽泽')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.tableData.push(response.data[i])
        }
      })
      const pramsb = {
        project_name: '完成教育工作情况'
      }
      jiaoshizuzhangGetAuditingListData({ ...pramsb, token: this.token }).then(response => {
        console.log('测试年级组长获取待审核教育工作情况数据泽泽泽')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.tableData.push(response.data[i])
        }
      })
      const pramsc = {
        project_name: '汇报课观摩课研究课情况' // 参数有问题
      }
      jiaoshizuzhangGetAuditingListData({ ...pramsc, token: this.token }).then(response => {
        console.log('测试年级组长获取待审核汇报课 观摩课 研究课情况情况数据泽泽泽')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.tableData.push(response.data[i])
        }
      })
      const pramsd = {
        project_name: '组织指导课外活动情况' // 参数有问题
      }
      jiaoshizuzhangGetAuditingListData({ ...pramsd, token: this.token }).then(response => {
        console.log('测试年级组长获取待审核组织指导课外活动情况数据泽泽泽')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.tableData.push(response.data[i])
        }
      })
      const pramse = {
        project_name: '参加系统进修或继续教育情况'
      }
      jiaoshizuzhangGetAuditingListData({ ...pramse, token: this.token }).then(response => {
        console.log('测试年级组长获取待审核参加系统进修或继续教育情况数据泽泽泽')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.tableData.push(response.data[i])
        }
      })
      const pramsf = {
        project_name: '指导培养教师情况' // 参数有问题
      }
      jiaoshizuzhangGetAuditingListData({ ...pramsf, token: this.token }).then(response => {
        console.log('测试年级组长获取待审核指导培养教师情况数据泽泽泽')
        console.log(response.data)
        for (let i = 0; i < response.data.length; i++) {
          this.tableData.push(response.data[i])
        }
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
    beginAuditing: function(data) {
      console.log('基本工作检查每一条取得的data')
      console.log(data)
      this.pvData = []
      this.pvData.push(data)
      switch (data.classLabel) {
        case '完成教学工作情况':
          this.auditingContent.id = data.id
          this.auditingContent.worktype = data.classLabel
          this.jiaoxueDialogVisible = true
          break
        case '完成教育工作情况':
          this.auditingContent.id = data.id
          this.auditingContent.worktype = data.classLabel
          this.jiaoyuDialogVisible = true
          break
        case '汇报课观摩课研究课情况':
          this.auditingContent.id = data.id
          this.auditingContent.worktype = data.classLabel
          this.huibaokeDialogVisible = true
          break
        case '组织指导课外活动情况':
          this.auditingContent.id = data.id
          this.auditingContent.worktype = data.classLabel
          this.kewaihuodongDialogVisible = true
          break
        case '参加系统进修或继续教育情况':
          this.auditingContent.id = data.id
          this.auditingContent.worktype = data.classLabel
          this.xitongjinxiuDialogVisible = true
          break
        case '指导培养教师情况':
          this.auditingContent.id = data.id
          this.auditingContent.worktype = data.classLabel
          this.peiyangjiaoshiVisible = true
          break
      }
    },
    auditingNoPass: function() {
      const prams = {
        workid: this.auditingContent.id,
        worktype: this.auditingContent.worktype,
        description: this.remark,
        status: '审核不通过'
      }
      this.remark = ''
      jiaoshizuzhangAuditingBasicWork({ ...prams, token: this.token }).then(response => {
        console.log('测试年级组长审核基本工作,不通过')
        console.log(response.data)
        this.tableData = []
        this.firstGetListData()
      })
      this.jiaoxueDialogVisible = false
      this.jiaoyuDialogVisible = false
      this.huibaokeDialogVisible = false
      this.kewaihuodongDialogVisible = false
      this.xitongjinxiuDialogVisible = false
      this.peiyangjiaoshiVisible = false
      this.$message({
        message: '审核完成',
        type: 'success'
      })
    },
    auditingPass: function() {
      const prams = {
        workid: this.auditingContent.id,
        worktype: this.auditingContent.worktype,
        description: this.remark,
        status: '审核通过'
      }
      this.remark = ''
      jiaoshizuzhangAuditingBasicWork({ ...prams, token: this.token }).then(response => {
        console.log('测试年级组长审核基本工作,通过')
        console.log(response.data)
        this.tableData = []
        this.firstGetListData()
      })
      this.jiaoxueDialogVisible = false
      this.jiaoyuDialogVisible = false
      this.huibaokeDialogVisible = false
      this.kewaihuodongDialogVisible = false
      this.xitongjinxiuDialogVisible = false
      this.peiyangjiaoshiVisible = false
      this.$message({
        message: '审核完成',
        type: 'success'
      })
    },
    closeAllDialog: function() {
      this.jiaoxueDialogVisible = false
      this.jiaoyuDialogVisible = false
      this.huibaokeDialogVisible = false
      this.kewaihuodongDialogVisible = false
      this.xitongjinxiuDialogVisible = false
      this.peiyangjiaoshiVisible = false
    }
  }
}
</script>

<style scoped>
  .foot{
    padding-top: 20px;
    text-align: center;
  }
  .fenye{
    text-align: center;
  }

</style>
