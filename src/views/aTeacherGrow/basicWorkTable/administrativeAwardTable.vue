<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>行政获奖情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="award_name"
          align="center"
          label="获奖名称"
          width="140"/>
        <el-table-column
          prop="award_time"
          align="center"
          label="获奖时间"
          width="140"/>
        <el-table-column
          prop="award_level"
          align="center"
          label="获奖级别"
          width="140"/>
        <el-table-column
          prop="award_grade"
          align="center"
          label="获奖等级"
          width="140"/>
        <el-table-column
          prop="organizers_of_administrative"
          align="center"
          label="主办单位"
          width="140"/>
        <el-table-column
          prop="award_from"
          align="center"
          label="获奖形式"
          width="140"/>
        <el-table-column
          prop="award_types"
          align="center"
          label="获奖类型"
          width="140"/>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="add">增加</el-button>
      </div>
    </div>
    <el-dialog :visible.sync="dialogFormVisible" title="增加行政获奖">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="获奖名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="获奖时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="获奖级别">
          <el-select v-model="form.rank" placeholder="请选择获奖级别" @change="rankGet">
            <!--            <el-option label="国家级" value="shanhai"/>-->
            <!--            <el-option label="区级" value="hunan"/>-->
            <!--            <el-option label="市级" value="shanghai"/>-->
            <!--            <el-option label="校级" value="hengyang"/>-->
            <el-option
              v-for="item in huojiangRank "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖等级">
          <el-select v-model="form.level" placeholder="请选择获奖等级" @change="levelGet">
            <!--            <el-option label="一等奖" value="shanhai"/>-->
            <!--            <el-option label="二等奖" value="hunan"/>-->
            <!--            <el-option label="三等奖" value="shanghai"/>-->
            <el-option
              v-for="item in huojiangLevel"
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="form.danwei"/>
        </el-form-item>
        <el-form-item label="获奖形式">
          <el-select v-model="form.xingshi" placeholder="请选择获奖形式" @change="formGet">
            <el-option
              v-for="item in huojiangForm "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖类型">
          <el-select v-model="form.type" placeholder="请选择获奖类型" @change="typeGet">
            <el-option
              v-for="item in huojiangType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="setAdministrativeData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="administrativeDialogFormVisible" title="修改行政获奖">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="获奖名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="获奖时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="获奖级别">
          <el-select v-model="form.rank" placeholder="请选择获奖级别" @change="rankGet">
            <!--            <el-option label="国家级" value="shanhai"/>-->
            <!--            <el-option label="区级" value="hunan"/>-->
            <!--            <el-option label="市级" value="shanghai"/>-->
            <!--            <el-option label="校级" value="hengyang"/>-->
            <el-option
              v-for="item in huojiangRank "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖等级">
          <el-select v-model="form.level" placeholder="请选择获奖等级" @change="levelGet">
            <!--            <el-option label="一等奖" value="shanhai"/>-->
            <!--            <el-option label="二等奖" value="hunan"/>-->
            <!--            <el-option label="三等奖" value="shanghai"/>-->
            <el-option
              v-for="item in huojiangLevel"
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="form.danwei"/>
        </el-form-item>
        <el-form-item label="获奖形式">
          <el-select v-model="form.xingshi" placeholder="请选择获奖形式" @change="formGet">
            <el-option
              v-for="item in huojiangForm "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖类型">
          <el-select v-model="form.type" placeholder="请选择获奖类型" @change="typeGet">
            <el-option
              v-for="item in huojiangType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="administrativeDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateAcademicAchevementsData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireAdministrative, increaseAdministrativeAward, deleteAdministrative, updateAdministrativeAward } from '@/api/performanceWork'
export default {
  name: 'TestTable',
  data() {
    return {
      tableData: [],
      token: getToken(),
      dialogFormVisible: false,
      administrativeDialogFormVisible: false,
      huojiangType: [{ label: '一类', value: 'first' }, { label: '二类', value: 'second' }],
      huojiangForm: [{ label: '团队', value: 'team' }, { label: '个人', value: 'person' }],
      huojiangRank: [{ label: '国家级', value: 'guojia' }, { label: '市级', value: 'shiji' }, { label: '区级', value: 'quji' }, { label: '校级', value: 'xiaoji' }],
      huojiangLevel: [{ label: '一等奖', value: 'one' }, { label: '二等奖', value: 'two' }, { label: '三等奖', value: 'three' }],
      form: {
        name: '',
        date: '',
        rank: '',
        level: '',
        danwei: '',
        delivery: false,
        xingshi: '',
        type: '',
        id: ''
      }
    }
  },
  mounted() {
    this.getAdministrativeData()
  },
  methods: {
    typeGet: function(value) {
      let obj = {}
      obj = this.huojiangType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
    },
    formGet: function(value) {
      let obj = {}
      obj = this.huojiangForm.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.xingshi = obj.label
    },
    rankGet: function(value) {
      let obj = {}
      obj = this.huojiangRank.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.rank = obj.label
    },
    levelGet: function(value) {
      let obj = {}
      obj = this.huojiangLevel.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.level = obj.label
    },
    add: function() {
      this.dialogFormVisible = true
    },
    getAdministrativeData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireAdministrative(this.token).then(response => {
        this.tableData = response.data.administrativeAward
        console.log(this.tableData)
      })
    },
    setAdministrativeData: function() {
      console.log(this.form)
      const prams = {
        award_name: this.form.name,
        award_time: this.form.date,
        award_level: this.form.rank,
        award_grade: this.form.level,
        organizers_of_administrative: this.form.danwei,
        award_from: this.form.xingshi,
        award_types: this.form.type
      }
      increaseAdministrativeAward({ ...prams, token: this.token }).then(response => {
        inquireAdministrative(this.token).then(response => {
          this.tableData = response.data.administrativeAward
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      deleteAdministrative({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireAdministrative(this.token).then(response => {
          this.tableData = response.data.administrativeAward
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.administrativeDialogFormVisible = true
      this.form.id = row
    },
    updateAcademicAchevementsData: function() {
      console.log('输出id看一看')
      console.log(this.form.id)
      const prams = {
        award_name: this.form.name,
        award_time: this.form.date,
        award_level: this.form.rank,
        award_grade: this.form.level,
        organizers_of_administrative: this.form.danwei,
        award_from: this.form.xingshi,
        award_types: this.form.type
      }
      updateAdministrativeAward({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireAdministrative(this.token).then(response => {
          this.tableData = response.data.administrativeAward
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.administrativeDialogFormVisible = false
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
