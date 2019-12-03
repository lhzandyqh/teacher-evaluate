<template>
  <div class="app-container">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55"/>
      <el-table-column
        label="编号">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="教师姓名"/>
      <el-table-column
        prop="name"
        label="工资月份"/>
      <el-table-column
        prop="name"
        label="基本工资"/>
      <el-table-column
        prop="name"
        label="薪级工资"/>
      <el-table-column
        prop="name"
        label="考核工资"/>
      <el-table-column
        prop="name"
        label="岗位补贴"/>
      <el-table-column
        prop="address"
        label="实发工资"
        show-overflow-tooltip/>
    </el-table>
    <div style="margin-top: 20px">
      <el-button>删除选中</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WageTable',
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style scoped>

</style>
