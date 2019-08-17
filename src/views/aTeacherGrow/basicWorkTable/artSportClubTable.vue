<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>艺科体社团情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="competition_name"
          align="center"
          label="比赛类别"
          width="140"/>
        <el-table-column
          prop="specific_name"
          align="center"
          label="比赛名称"
          width="140"/>
        <el-table-column
          prop="award_name"
          align="center"
          label="获奖名称"
          width="140"/>
        <el-table-column
          prop="award_time"
          align="center"
          label="获奖级别"
          width="140"/>
        <el-table-column
          prop="award_level"
          align="center"
          label="获奖时间"
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加艺科体社团情况">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="比赛类别">
          <el-select v-model="form.type" placeholder="请选择比赛类别" @change="typeGet">
            <el-option
              v-for="item in bisaiType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="比赛名称">
          <el-input v-model="form.bisainame"/>
        </el-form-item>
        <el-form-item label="获奖名称">
          <el-input v-model="form.huojiangname"/>
        </el-form-item>
        <el-form-item label="获奖级别">
          <el-select v-model="form.level" placeholder="请选择获奖级别" @change="levelGet">
            <el-option
              v-for="item in huojiangLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="setClubData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="clubDialogFormVisible" title="修改艺科体社团情况">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="比赛类别">
          <el-select v-model="form.type" placeholder="请选择比赛类别" @change="typeGet">
            <el-option
              v-for="item in bisaiType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="比赛名称">
          <el-input v-model="form.bisainame"/>
        </el-form-item>
        <el-form-item label="获奖名称">
          <el-input v-model="form.huojiangname"/>
        </el-form-item>
        <el-form-item label="获奖级别">
          <el-select v-model="form.level" placeholder="请选择获奖级别" @change="levelGet">
            <el-option
              v-for="item in huojiangLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="clubDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateClubData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireArtSportsAssociation, increaseArtSportAssociation, deleteArtSportsAssociation, updateArtSportAssociation } from '@/api/performanceWork'
export default {
  name: 'TestTable',
  data() {
    return {
      bisaiType: [{ label: '艺术', value: 'yishu' }, { label: '科技', value: 'keji' }, { label: '体育', value: 'tiyu' }],
      huojiangLevel: [{ label: '一等奖', value: 'one' }, { label: '二等奖', value: 'two' }, { label: '三等奖', value: 'three' }],
      dialogFormVisible: false,
      clubDialogFormVisible: false,
      token: getToken(),
      tableData: [],
      form: {
        type: '',
        huojiangname: '',
        bisainame: '',
        level: '',
        date: '',
        id: '',
        delivery: false
      }
    }
  },
  mounted() {
    this.getClubData()
  },
  methods: {
    typeGet: function(value) {
      let obj = {}
      obj = this.bisaiType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
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
    getClubData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireArtSportsAssociation(this.token).then(response => {
        this.tableData = response.data.artSportsAssociation
        console.log(this.tableData)
      })
    },
    setClubData: function() {
      console.log(this.form)
      const prams = {
        competition_name: this.form.type,
        specific_name: this.form.bisainame,
        award_name: this.form.huojiangname,
        award_time: this.form.date,
        award_level: this.form.level
      }
      increaseArtSportAssociation({ ...prams, token: this.token }).then(response => {
        inquireArtSportsAssociation(this.token).then(response => {
          this.tableData = response.data.artSportsAssociation
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
      deleteArtSportsAssociation({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireArtSportsAssociation(this.token).then(response => {
          this.tableData = response.data.artSportsAssociation
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.clubDialogFormVisible = true
      this.form.id = row
    },
    updateClubData: function() {
      console.log('输出id看一看')
      console.log(this.form.id)
      const prams = {
        competition_name: this.form.type,
        specific_name: this.form.bisainame,
        award_name: this.form.huojiangname,
        award_time: this.form.date,
        award_level: this.form.level
      }
      updateArtSportAssociation({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireArtSportsAssociation(this.token).then(response => {
          this.tableData = response.data.artSportsAssociation
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.clubDialogFormVisible = false
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
