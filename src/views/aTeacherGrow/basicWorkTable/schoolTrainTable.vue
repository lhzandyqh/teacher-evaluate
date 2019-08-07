<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>校本培训情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          align="center"
          label="校级发起人"
          width="180"/>
        <el-table-column
          prop="name"
          align="center"
          label="组织者"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="培训类型"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="参加人员"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="培训时间"
          width="180"/>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="add">增加</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="增加校本培训">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="校级发起人">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="组织者">
          <el-input v-model="form.people"/>
        </el-form-item>
        <el-form-item label="培训类型">
          <el-select v-model="form.region" placeholder="请选择培训类型">
            <el-option label="全校大会" value="shanhai"/>
            <el-option label="教研组会" value="hunan"/>
            <el-option label="年级组会" value="shanghai"/>
            <el-option label="专题培训" value="hengyang"/>
          </el-select>
        </el-form-item>
        <el-form-item label="参加人员">
          <el-input v-model="form.apeople"/>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
          <el-col :span="2" class="line">-</el-col>
          <el-col :span="11">
            <el-time-picker v-model="form.date2" placeholder="选择时间" style="width: 80%;"/>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="classAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TestTable',
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        people: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        apeople: ''
      }
    }
  },
  methods: {
    add: function() {
      this.dialogFormVisible = true
    }
  }
}
</script>

<style scoped>
  .innerContainer{
    border: 1px solid #efefef;
    padding: 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
    text-align: center;
  }
  .buttonContainer{
    padding-top: 10px;
    text-align: center;
  }
  .innerContainer{
    text-align: center;
  }

</style>
