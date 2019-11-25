<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder">请选择审核历史类别:</div>
        <div>
          <el-select v-model="type_select_value" placeholder="请选择审核历史类别">
            <el-option label="个人信息" value="geren"/>
            <el-option label="工作经历" value="gongzuo"/>
          </el-select>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <el-row v-if="type_select_value === 'geren'">
      <information-auditing-history-table />
    </el-row>
    <el-row v-if="type_select_value === 'gongzuo'">
      <work-experience-auditing-history-table/>
    </el-row>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import informationAuditingHistoryTable from '@/views/aTeacherGrow/adminAuditingHistoryTable/informationAuditingHistoryTable'
import workExperienceAuditingHistoryTable from '@/views/aTeacherGrow/adminAuditingHistoryTable/workExperienceAuditingHistoryTable'
export default {
  name: 'AdminAuditingHistory',
  components: { informationAuditingHistoryTable, workExperienceAuditingHistoryTable },
  data() {
    return {
      token: getToken(),
      type_select_value: 'geren',
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
