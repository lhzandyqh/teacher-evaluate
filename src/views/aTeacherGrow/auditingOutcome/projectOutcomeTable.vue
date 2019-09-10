<template>
  <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

    <el-table-column align="center" label="积分编号" width="80">
      <template slot-scope="scope">
        <span>{{ scope.row.id }}</span>
      </template>
    </el-table-column>

    <el-table-column width="300" align="center" label="课题名称">
      <template slot-scope="scope">
        <span>{{ scope.row.tQualificationName }}</span>
      </template>
    </el-table-column>

    <el-table-column width="150" align="center" label="审核人">
      <template slot-scope="scope">
        <span>{{ scope.row.certType }}</span>
      </template>
    </el-table-column>

    <el-table-column width="60" align="center" label="积分">
      <template slot-scope="scope">
        <span>{{ scope.row.point }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180" align="center" label="提交时间">
      <template slot-scope="scope">
        <span>{{ scope.row.certIssuedTime }}</span>
      </template>
    </el-table-column>
    <el-table-column width="180" align="center" label="审核时间">
      <template slot-scope="scope">
        <span>{{ scope.row.certIssuedTime }}</span>
      </template>
    </el-table-column>

    <el-table-column width="180" align="center" label="审核状态">
      <template slot-scope="scope">
        <el-button v-if="scope.row.status==='-1'" type="primary" size="small" plain>审核待通过</el-button>
        <el-button v-if="scope.row.status==='1'" type="success" size="small" plain>审核通过</el-button>
        <el-button v-if="scope.row.status==='0'" type="danger" size="small" plain>审核未通过</el-button>
      </template>
    </el-table-column>

    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button type="primary" size="small" icon="el-icon-zoom-in" @click="getAuditing(scope.row.id)">查看</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  name: 'ProjectOutcomeTable'
}
</script>

<style scoped>

</style>
