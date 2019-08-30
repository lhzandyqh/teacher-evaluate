<template>
  <div class="app-container">
    <el-table v-loading="listLoading" :data="list" border fit highlight-current-row style="width: 100%">

      <el-table-column align="center" label="积分编号" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column width="300" align="center" label="比赛名称">
        <template slot-scope="scope">
          <span>{{ scope.row.tQualificationName }}</span>
        </template>
      </el-table-column>

      <el-table-column width="150" align="center" label="申请人">
        <template slot-scope="scope">
          <span>{{ scope.row.certType }}</span>
        </template>
      </el-table-column>

      <el-table-column width="60" align="center" label="积分">
        <template slot-scope="scope">
          <span>{{ scope.row.point }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180" align="center" label="申请时间">
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

    <!--查看弹框-->
    <el-dialog :visible.sync="dialogPvVisible" title="审核详情">
      审核详情
      <el-table :data="pvData" fit highlight-current-row style="width: 100%">
        <el-table-column prop="tQualificationName" label="资质名称"/>
        <el-table-column prop="certLevel" label="资质等级"/>
        <el-table-column prop="certType" label="资质类型"/>
        <el-table-column prop="deptLevel" label="隶属级别"/>
        <!--<el-table-column prop="certType" label="证书颁发日期"/>-->
        <el-table-column prop="issuingAgency" label="颁发机构"/>
        <el-table-column prop="tQualificationNum" label="证书编号"/>
        <el-table-column label="审核状态" align="center">
          <template slot-scope="scope">
            <div v-if="scope.row.status==='-1'">审核待通过</div>
            <div v-if="scope.row.status==='1'">审核通过</div>
            <div v-if="scope.row.status==='0'">审核未通过</div>
          </template>
        </el-table-column>
      </el-table>
      <el-table :data="formAuditing" fit highlight-current-row style="width: 100%;margin-top: 40px;">
        <el-table-column align="center" label="审核原因">
          <template slot-scope="scope">
            <textarea id="" v-model="scope.row.auditingReson" name="" style="width: 100%;" rows="10"/>
          </template>
        </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="editAuditing(1)">审核通过</el-button>
        <el-button type="danger" @click="editAuditing(0)">审核不通过</el-button>
        <el-button type="primary" @click="dialogPvVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'ArtAuditingTable'
}
</script>

<style scoped>

</style>
