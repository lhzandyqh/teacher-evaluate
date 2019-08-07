<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>学术讲座与经验分享情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          align="center"
          label="活动类型"
          width="200"/>
        <el-table-column
          prop="name"
          align="center"
          label="活动名称"
          width="200"/>
        <el-table-column
          prop="address"
          align="center"
          label="开始时间"
          width="200"/>
        <el-table-column
          prop="address"
          align="center"
          label="结束时间"
          width="200"/>
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加学术讲座与经验分享">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活动类型">
          <el-select v-model="form.region" placeholder="请选择活动类型">
            <el-option label="教育教学研讨会" value="shanhai"/>
            <el-option label="中科玉兰学术讲坛" value="hunan"/>
            <el-option label="进修材料分析" value="shanghai"/>
            <el-option label="其他" value="hengyang"/>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date2" type="date" placeholder="选择日期" style="width: 80%;"/>
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
