<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择审核类别:</div>
        <div>
          <el-select v-model="value" placeholder="请选择审核类别">
            <el-option
              v-for="item in option"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px">查询</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="type"
          label="审核类别"
          align="center"
          width="250"/>
        <el-table-column
          prop="name"
          label= "审核名称"
          align="center"
          width="200"/>
        <el-table-column
          prop="people"
          label="审核人"
          align="center"
          width="200"/>
        <el-table-column
          prop="upload_time"
          label="提交时间"
          align="center"
          width="200"/>
        <el-table-column
          prop="audit_time"
          label="审核时间"
          align="center"
          width="200"/>
        <el-table-column
          prop="audit_result"
          label="审核结果"
          align="center"/>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AuditResult',
  data() {
    return {
      mylabel: '1111',
      value: '',
      tableData: [{
        type: '艺科体社团',
        name: '校园文化节获奖',
        people: '王老师',
        upload_time: '2017-05-02',
        audit_time: '2017-06-02',
        audit_result: '通过'
      }, {
        type: '学术成果',
        name: '教育期刊发表文章',
        people: '王老师',
        upload_time: '2018-11-02',
        audit_time: '2018-12-01',
        audit_result: '不通过'
      }],
      option: [{ label: '学术成果', value: 'xueshu' },
        { label: '研究课题', value: 'yanjiuke' },
        { label: '学术讲座与经验分享', value: 'xueshu' },
        { label: '教育教学评比竞赛', value: 'jiaoyu' },
        { label: '研究课', value: 'yanjiu' },
        { label: '教育教学成果获奖', value: 'chengguo' },
        { label: '教师指导学生参加学科比赛情况获奖', value: 'huojiang' },
        { label: '艺科体社团', value: 'yike' },
        { label: '行政获奖', value: 'xingzheng' },
        { label: '校本培训', value: 'xiaoben' }]
    }
  }
}
</script>

<style scoped>

</style>
