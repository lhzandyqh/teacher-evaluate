<template>
  <div class="table_container">
    <el-table :data="tableData .slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="审核编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="个人信息修改类型">
        <template slot-scope="scope">
          <span>{{ scope.row.classLabel }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{ scope.row.askPersonName }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="审核人">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_person }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{ scope.row.teacher_edit_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核时间">
        <template slot-scope="scope">
          <span>{{ scope.row.verify_date }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="审核状态">
        <template slot-scope="scope">
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
  </div>
</template>

<script>
export default {
  name: 'AuditingHistoryTable',
  data() {
    return {
      currentPage: 1,
      pagesize: 10
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }

</style>
