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
          prop="school_sponsors"
          align="center"
          label="校级发起人"
          width="180"/>
        <el-table-column
          prop="organizer_of_training"
          align="center"
          label="组织者"
          width="180"/>
        <el-table-column
          prop="training_type"
          align="center"
          label="培训类型"
          width="180"/>
        <el-table-column
          prop="participants"
          align="center"
          label="参加人员"
          width="180"/>
        <el-table-column
          prop="training_time"
          align="center"
          label="培训时间"
          width="180"/>
        <el-table-column align="center" label="照片证明">
          <template slot-scope="scope">
            <div v-if="scope.row.imageurl[0]!=''" class="demo-image__preview">
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加校本培训">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="校级发起人">
          <el-input v-model="form.faqi"/>
        </el-form-item>
        <el-form-item label="组织者">
          <el-input v-model="form.zuzhi"/>
        </el-form-item>
        <el-form-item label="培训类型">
          <el-select v-model="form.type" placeholder="请选择培训类型" @change="typeGet">
            <el-option
              v-for="item in peixunType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="参加人员">
          <el-input v-model="form.people"/>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
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
        <el-button type="primary" @click="setSchoolData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="schoolDialogFormVisible" title="修改校本培训">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="校级发起人">
          <el-input v-model="form.school_sponsors"/>
        </el-form-item>
        <el-form-item label="组织者">
          <el-input v-model="form.organizer_of_training"/>
        </el-form-item>
        <el-form-item label="培训类型">
          <el-select v-model="form.training_type" placeholder="请选择培训类型" @change="typeGet">
            <el-option
              v-for="item in peixunType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="参加人员">
          <el-input v-model="form.participants"/>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="form.training_time" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
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
        <el-button @click="schoolDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateSchoolData">确 定</el-button>
      </div>
    </el-dialog>
    <img-preview :imgs="imgs" :is-show-image-dialog="isShowImageDialog" @closeDialog="closeHandle"/>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import { inquireSchoolTrain, increaseSchoolBasedTrain, deleteSchoolBasedTrain, updateSchoolBasedTrain } from '@/api/performanceWork'
import imgPreview from '@/views/aTeacherGrow/basicWorkTable/imgPreview'
export default {
  name: 'TestTable',
  components: { imgPreview },
  data() {
    return {
      isShowImageDialog: false,
      imgs: [],
      peixunType: [{ label: '全校大会', value: 'quanxiao' }, { label: '教研组会', value: 'jiaoyan' }, { label: '年级组会', value: 'nianji' }, { label: '专题培训', value: 'zhuanti' }],
      dialogFormVisible: false,
      schoolDialogFormVisible: false,
      token: getToken(),
      tableData: [],
      form: {
        faqi: '',
        zuzhi: '',
        type: '',
        date1: '',
        date2: '',
        delivery: false,
        people: '',
        imageurl: []
      }
    }
  },
  mounted() {
    this.getSchoolData()
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
    typeGet: function(value) {
      let obj = {}
      obj = this.peixunType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
    },
    add: function() {
      this.dialogFormVisible = true
    },
    getSchoolData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireSchoolTrain(this.token).then(response => {
        this.tableData = response.data.schoolTrain
        console.log(this.tableData)
      })
    },
    setSchoolData: function() {
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
        school_sponsors: this.form.faqi,
        organizer_of_training: this.form.zuzhi,
        training_type: this.form.type,
        participants: this.form.people,
        training_time: this.form.date1,
        imageurl: pingjie
      }
      increaseSchoolBasedTrain({ ...prams, token: this.token }).then(response => {
        inquireSchoolTrain(this.token).then(response => {
          this.tableData = response.data.schoolTrain
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.form.faqi = ''
      this.form.zuzhi = ''
      this.form.type = ''
      this.form.people = ''
      this.form.date1 = ''
      this.form.imageurl = []
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      deleteSchoolBasedTrain({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireSchoolTrain(this.token).then(response => {
          this.tableData = response.data.schoolTrain
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.schoolDialogFormVisible = true
      this.form = row
      this.form.imageurl = []
      console.log('测试form')
      console.log(this.form)
    },
    updateSchoolData: function() {
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
        school_sponsors: this.form.faqi,
        organizer_of_training: this.form.zuzhi,
        training_type: this.form.type,
        participants: this.form.people,
        training_time: this.form.date1,
        imageurl: pingjie
      }
      updateSchoolBasedTrain({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireSchoolTrain(this.token).then(response => {
          this.tableData = response.data.schoolTrain
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.form.school_sponsors = ''
      this.form.organizer_of_training = ''
      this.form.training_type = ''
      this.form.participants = ''
      this.form.training_time = ''
      this.form.imageurl = []
      this.schoolDialogFormVisible = false
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
