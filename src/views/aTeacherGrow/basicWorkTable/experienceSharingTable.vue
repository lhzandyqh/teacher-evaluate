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
          prop="activity_type"
          align="center"
          label="活动类型"
          width="200"/>
        <el-table-column
          prop="activity_name"
          align="center"
          label="活动名称"
          width="200"/>
        <el-table-column
          prop="activity_level"
          align="center"
          label="课题级别"
          width="140"/>
        <el-table-column
          prop="activity_time"
          align="center"
          label="开始时间"
          width="200"/>
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加学术讲座与经验分享">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活动类型">
          <el-select v-model="form.type" placeholder="请选择活动类型" @change="typeGet">
            <el-option
              v-for="item in huodongType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="活动级别">
          <el-select v-model="form.rank" placeholder="请选择活动级别" @change="levelGet">
            <el-option
              v-for="item in huodongLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="setExperienceData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="experienceDialogFormVisible" title="修改学术讲座与经验分享">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="活动类型">
          <el-select v-model="form.type" placeholder="请选择活动类型" @change="typeGet">
            <el-option
              v-for="item in huodongType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="活动名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="活动级别">
          <el-select v-model="form.rank" placeholder="请选择活动级别" @change="levelGet">
            <el-option
              v-for="item in huodongLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="experienceDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateExperienceData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireLectureExpShare, increaseLectureExperShare, deleteLectureExpShare, updateLectureExperShare } from '@/api/performanceWork'
export default {
  name: 'TestTable',
  data() {
    return {
      dialogFormVisible: false,
      experienceDialogFormVisible: false,
      huodongType: [{ label: '教育教学研讨会', value: 'jiaoyu' }, { label: '中科玉兰学术讲坛', value: 'zhongke' }, { label: '进修材料分析', value: 'jinxiu' }, { label: '其他', value: 'qita' }],
      huodongLevel: [{ label: '国家级', value: 'guojia' }, { label: '区级', value: 'quji' }, { label: '市级', value: 'shiji' }, { label: '校级', value: 'xiaoji' }],
      token: getToken(),
      tableData: [],
      form: {
        name: '',
        date1: '',
        rank: '',
        delivery: false,
        type: '',
        id: ''
      }
    }
  },
  mounted() {
    this.getExperienceData()
  },
  methods: {
    typeGet: function(value) {
      let obj = {}
      obj = this.huodongType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
    },
    levelGet: function(value) {
      let obj = {}
      obj = this.huodongLevel.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.rank = obj.label
    },
    add: function() {
      this.dialogFormVisible = true
    },
    getExperienceData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireLectureExpShare(this.token).then(response => {
        this.tableData = response.data.lecExpShare
        console.log(this.tableData)
      })
    },
    setExperienceData: function() {
      console.log(this.form)
      const prams = {
        activity_type: this.form.type,
        activity_name: this.form.name,
        activity_time: this.form.date1,
        activity_level: this.form.rank
      }
      increaseLectureExperShare({ ...prams, token: this.token }).then(response => {
        inquireLectureExpShare(this.token).then(response => {
          this.tableData = response.data.lecExpShare
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
      deleteLectureExpShare({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireLectureExpShare(this.token).then(response => {
          this.tableData = response.data.lecExpShare
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.experienceDialogFormVisible = true
      this.form.id = row
    },
    updateExperienceData: function() {
      console.log('输出id看一看')
      console.log(this.form.id)
      const prams = {
        activity_type: this.form.type,
        activity_name: this.form.name,
        activity_time: this.form.date1,
        activity_level: this.form.rank
      }
      updateLectureExperShare({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireLectureExpShare(this.token).then(response => {
          this.tableData = response.data.lecExpShare
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.experienceDialogFormVisible = false
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
