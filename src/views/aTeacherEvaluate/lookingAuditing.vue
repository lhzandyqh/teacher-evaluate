<template>
  <div class="app-container">
    <div class="select">
      <el-row :gutter="5">
        <el-col :span="3">
          <div class="title">
            <span style="font-size: 14px;font-weight: bolder">选择审核类型</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="select">
            <el-select v-model="type_select_value" placeholder="请选择您的审核项目类型类型" >
              <el-option label="个人信息审核" value="geren"/>
              <el-option label="工作经历审核" value="gongzuo"/>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-divider/>
    <el-row v-if="type_select_value === 'geren'">
      <personal-information-auditing-table/>
    </el-row>
    <el-row v-if="type_select_value === 'gongzuo'">
      <personal-work-experience-auditing-table/>
    </el-row>
  </div>
</template>

<script>
import personalInformationAuditingTable from '@/views/aTeacherGrow/adminAuditingListTable/personalInformationAuditingTable'
import personalWorkExperienceAuditingTable from '@/views/aTeacherGrow/adminAuditingListTable/personalWorkExperienceAuditingTable'
export default {
  name: 'LookingAuditing',
  components: { personalInformationAuditingTable, personalWorkExperienceAuditingTable },
  data() {
    return {
      type_select_value: 'geren'
    }
  }
}
</script>

<style scoped>
  .title{
    margin-top: 10px;
  }

</style>
