<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>学术成果情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="date"
          align="center"
          label="学术成果载体类型"
          width="140"/>
        <el-table-column
          prop="name"
          align="center"
          label="文章题目（专著名称）"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="发表时间（出版时间）"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="是否第一作者"
          width="140"/>
        <el-table-column
          prop="address"
          align="center"
          label="刊物名称（出版社）"
          width="180"/>
        <el-table-column
          prop="address"
          align="center"
          label="刊号（书号）"
          width="140"/>
        <el-table-column
          prop="address"
          align="center"
          label="刊物等级（出版社等级）"
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加学术成果情况">
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="学术成果载体类型">
          <el-select v-model="form.region" placeholder="请选择学术成果载体类型" style="width: 60%;">
            <el-option label="论文" value="shangrgrgrmhai"/>
            <el-option label="专著" value="hunbgrgrgan"/>
          </el-select>
        </el-form-item>
        <el-form-item label="文章题目">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="发表时间（出版时间）">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择时间" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="是否第一作者">
          <el-select v-model="form.region" placeholder="请选择是否第一作者">
            <el-option label="是" value="shanrhgsgai"/>
            <el-option label="否" value="hunsangagr"/>
          </el-select>
        </el-form-item>
        <el-form-item label="刊物名称(出版社)">
          <el-input v-model="form.bookname"/>
        </el-form-item>
        <el-form-item label="刊号(书号)">
          <el-input v-model="form.booknumber"/>
        </el-form-item>
        <el-form-item label="刊物等级（出版社等级）">
          <el-select v-model="form.region" placeholder="请选择刊物等级（出版社等级）">
            <el-option label="核心期刊" value="shankhzzai"/>
            <el-option label="一般期刊" value="hunrrrban"/>
            <el-option label="区级" value="shantghaggi"/>
            <el-option label="校级" value="shanggghayi"/>
          </el-select>
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
        bookname: '',
        booknumber: '',
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
