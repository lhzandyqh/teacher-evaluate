<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>项目课题情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="topic_name"
          align="center"
          label="课题名称"
          width="140"/>
        <el-table-column
          prop="item_setting_unit"
          align="center"
          label="立项单位"
          width="140"/>
        <el-table-column
          prop="topic_level"
          align="center"
          label="课题级别"
          width="140"/>
        <el-table-column
          prop="topic_start_time"
          align="center"
          label="起始时间"
          width="140"/>
        <el-table-column
          prop="topic_end_time"
          align="center"
          label="结束时间"
          width="140"/>
        <el-table-column
          prop="personal_role"
          align="center"
          label="个人角色"
          width="140"/>
        <el-table-column align="center" label="照片证明">
          <template slot-scope="scope">
            <div v-if="scope.row.imageurl[0]!=''||scope.row.imageurl.length<1" class="demo-image__preview">
              <el-button type="text" size="medium" @click="lookImages(scope.$index, scope.row)">查看图片</el-button>
            </div>
            <div v-else>
              <span>暂无图片</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加项目课题">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="课题名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="立项单位">
          <el-input v-model="form.danwei"/>
        </el-form-item>
        <el-form-item label="课题级别">
          <el-select v-model="form.rank" placeholder="请选择获奖级别" @change="levelGet">
            <!--            <el-option label="国家级" value="guojia"/>-->
            <!--            <el-option label="区级" value="quji"/>-->
            <!--            <el-option label="市级" value="shiji"/>-->
            <!--            <el-option label="校级" value="xiaoji"/>-->
            <el-option
              v-for="item in ketiLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="起始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date2" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="个人角色">
          <el-input v-model="form.juese"/>
        </el-form-item>
        <el-form-item label="照片上传">
          <el-upload
            :http-request="actionMyself"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="setProjectTopicsData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="projectDialogFormVisible" title="修改项目课题">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="课题名称">
          <el-input v-model="form.topic_name"/>
        </el-form-item>
        <el-form-item label="立项单位">
          <el-input v-model="form.item_setting_unit"/>
        </el-form-item>
        <el-form-item label="课题级别">
          <el-select v-model="form.topic_level" placeholder="请选择获奖级别" @change="levelGet">
            <!--            <el-option label="国家级" value="guojia"/>-->
            <!--            <el-option label="区级" value="quji"/>-->
            <!--            <el-option label="市级" value="shiji"/>-->
            <!--            <el-option label="校级" value="xiaoji"/>-->
            <el-option
              v-for="item in ketiLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="起始时间">
          <el-col :span="11">
            <el-date-picker v-model="form.topic_start_time" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-col :span="11">
            <el-date-picker v-model="form.topic_end_time" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="个人角色">
          <el-input v-model="form.personal_role"/>
        </el-form-item>
        <el-form-item label="照片上传">
          <el-upload
            :http-request="actionSecond"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple>
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="projectDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateProjectTopicsData">确 定</el-button>
      </div>
    </el-dialog>
    <img-preview :imgs="imgs" :is-show-image-dialog="isShowImageDialog" @closeDialog="closeHandle"/>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import { inquireProjectTopics, increaseProjectTopics, deleteProjectTopics, updateProjectTopics } from '@/api/performanceWork'
import imgPreview from '@/views/aTeacherGrow/basicWorkTable/imgPreview'
export default {
  name: 'TestTable',
  components: { imgPreview },
  data() {
    return {
      isShowImageDialog: false,
      imgs: [],
      token: getToken(),
      tableData: [],
      ketiLevel: [{ label: '国家级', value: 'guojia' }, { label: '区级', value: 'quji' }, { label: '市级', value: 'shiji' }, { label: '校级', value: 'xiaoji' }],
      dialogFormVisible: false,
      projectDialogFormVisible: false,
      form: {
        name: '',
        danwei: '',
        juese: '',
        rank: '',
        date1: '',
        date2: '',
        id: '',
        delivery: false,
        imageurl: []
      }
    }
  },
  mounted() {
    this.getProjectTopicsData()
  },
  methods: {
    closeHandle() {
      this.isShowImageDialog = false // 控制取消和X按钮，关闭弹窗
    },
    lookImages: function(index, row) {
      this.imgs = row.imageurl
      this.isShowImageDialog = true
    },
    actionMyself(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      axios.post('http://58.119.112.11:11028/api/upload', formData).then((res) => {
        console.log('测试图片上传是否成功')
        console.log(res)
        this.form.imageurl.push(res.data.result.imageUrl)
        this.$message({
          message: '图片上传成功',
          type: 'success'
        })
      })
    },
    actionSecond(params) {
      const formData = new FormData()
      formData.append('file', params.file)
      axios.post('http://58.119.112.11:11028/api/upload', formData).then((res) => {
        console.log('测试图片上传是否成功')
        console.log(res)
        this.form.imageurl.push(res.data.result.imageUrl)
        this.$message({
          message: '图片上传成功',
          type: 'success'
        })
      })
    },
    levelGet: function(value) {
      let obj = {}
      obj = this.ketiLevel.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.rank = obj.label
    },
    add: function() {
      this.dialogFormVisible = true
    },
    getProjectTopicsData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireProjectTopics(this.token).then(response => {
        this.tableData = response.data.projectTopics
        console.log(this.tableData)
      })
    },
    setProjectTopicsData: function() {
      console.log(this.form)
      var pingjie = ''
      for (let i = 0; i < this.form.imageurl.length; i++) {
        pingjie = pingjie + this.form.imageurl[i]
        if (this.form.imageurl[i + 1] !== 'undefined') {
          pingjie = pingjie + ','
        } else {
          break
        }
      }
      console.log('测试拼接的图片数组')
      console.log(pingjie)
      const prams = {
        topic_name: this.form.name,
        item_setting_unit: this.form.danwei,
        topic_level: this.form.rank,
        topic_start_time: this.form.date1,
        topic_end_time: this.form.date2,
        personal_role: this.form.juese,
        imageurl: pingjie
      }
      increaseProjectTopics({ ...prams, token: this.token }).then(response => {
        inquireProjectTopics(this.token).then(response => {
          this.tableData = response.data.projectTopics
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.form.name = ''
      this.form.danwei = ''
      this.form.rank = ''
      this.form.date1 = ''
      this.form.date2 = ''
      this.form.juese = ''
      this.form.imageurl = []
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      deleteProjectTopics({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireProjectTopics(this.token).then(response => {
          this.tableData = response.data.projectTopics
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.projectDialogFormVisible = true
      this.form = row
      this.form.imageurl = []
      console.log('测试form')
      console.log(this.form)
    },
    updateProjectTopicsData: function() {
      console.log('输出要编辑的数据看一看')
      console.log(this.form)
      var pingjie = ''
      for (let i = 0; i < this.form.imageurl.length; i++) {
        pingjie = pingjie + this.form.imageurl[i]
        if (this.form.imageurl[i + 1] !== 'undefined') {
          pingjie = pingjie + ','
        } else {
          break
        }
      }
      console.log('测试拼接的图片数组')
      console.log(pingjie)
      const prams = {
        topic_name: this.form.topic_name,
        item_setting_unit: this.form.item_setting_unit,
        topic_level: this.form.topic_level,
        topic_start_time: this.form.topic_start_time,
        topic_end_time: this.form.topic_end_time,
        personal_role: this.form.personal_role,
        imageurl: pingjie
      }
      updateProjectTopics({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireProjectTopics(this.token).then(response => {
          this.tableData = response.data.projectTopics
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.form.name = ''
      this.form.danwei = ''
      this.form.rank = ''
      this.form.date1 = ''
      this.form.date2 = ''
      this.form.juese = ''
      this.form.imageurl = []
      this.projectDialogFormVisible = false
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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
