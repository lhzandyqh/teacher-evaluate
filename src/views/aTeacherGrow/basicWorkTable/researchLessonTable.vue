<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>研究课情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="research_course_type"
          align="center"
          label="研究课类型"
          width="180"/>
        <el-table-column
          prop="organizers_of_research_course"
          align="center"
          label="主办单位"
          width="180"/>
        <el-table-column
          prop="course_display_level"
          align="center"
          label="展示级别"
          width="180"/>
        <el-table-column
          prop="teaching_time"
          align="center"
          label="授课时间"
          width="180"/>
        <el-table-column
          prop="topic_name"
          align="center"
          label="课题名称"
          width="180"/>
        <el-table-column
          prop="course_length"
          align="center"
          label="授课时长"
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加研究课情况">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="研究课类型">
          <el-select v-model="form.type" placeholder="请选择研究课类型" @change="typeGet">
            <el-option
              v-for="item in keType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="form.danwei"/>
        </el-form-item>
        <el-form-item label="展示级别">
          <el-select v-model="form.rank" placeholder="请选择展示级别" @change="rankGet">
            <el-option
              v-for="item in showRank "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="授课时间">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="课题名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <el-form-item label="授课时长">
          <el-input v-model="form.shichang"/>
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
        <el-button type="primary" @click="setResearchData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="researchDialogFormVisible" title="修改研究课情况">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="研究课类型">
          <el-select v-model="form.research_course_type" placeholder="请选择研究课类型" @change="typeGet">
            <el-option
              v-for="item in keType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="form.organizers_of_research_course"/>
        </el-form-item>
        <el-form-item label="展示级别">
          <el-select v-model="form.course_display_level" placeholder="请选择展示级别" @change="rankGet">
            <el-option
              v-for="item in showRank "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="授课时间">
          <el-col :span="11">
            <el-date-picker v-model="form.teaching_time" type="date" placeholder="选择日期" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="课题名称">
          <el-input v-model="form.topic_name"/>
        </el-form-item>
        <el-form-item label="授课时长">
          <el-input v-model="form.course_length"/>
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateResearchData">确 定</el-button>
      </div>
    </el-dialog>
    <img-preview :imgs="imgs" :is-show-image-dialog="isShowImageDialog" @closeDialog="closeHandle"/>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import { inquireResearchCourse, increaseResearchCourse, deleteResearchCourse, updateResearchCourse } from '@/api/performanceWork'
import imgPreview from '@/views/aTeacherGrow/basicWorkTable/imgPreview'
export default {
  name: 'TestTable',
  components: { imgPreview },
  data() {
    return {
      isShowImageDialog: false,
      imgs: [],
      keType: [{ label: '公开课', value: 'gongkai' }, { label: '主题课', value: 'zhuti' }, { label: '观摩课', value: 'guanmo' }, { label: '班会展示', value: 'banhui' }],
      showRank: [{ label: '国家级', value: 'guojia' }, { label: '市级', value: 'shiji' }, { label: '区级', value: 'quji' }, { label: '校级', value: 'xiaoji' }],
      dialogFormVisible: false,
      researchDialogFormVisible: false,
      tableData: [],
      token: getToken(),
      form: {
        name: '',
        type: '',
        shichang: '',
        rank: '',
        date: '',
        delivery: false,
        resource: '',
        id: '',
        danwei: '',
        imageurl: []
      }
    }
  },
  mounted() {
    this.getResearchData()
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
      obj = this.keType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
    },
    rankGet: function(value) {
      let obj = {}
      obj = this.showRank.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.rank = obj.label
    },
    add: function() {
      this.dialogFormVisible = true
    },
    getResearchData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireResearchCourse(this.token).then(response => {
        this.tableData = response.data.researchCourse
        console.log(this.tableData)
      })
    },
    setResearchData: function() {
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
        research_course_type: this.form.type,
        organizers_of_research_course: this.form.danwei,
        course_display_level: this.form.rank,
        teaching_time: this.form.date,
        topic_name: this.form.name,
        course_length: this.form.shichang,
        imageurl: pingjie
      }
      increaseResearchCourse({ ...prams, token: this.token }).then(response => {
        inquireResearchCourse(this.token).then(response => {
          this.tableData = response.data.researchCourse
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.form.type = ''
      this.form.danwei = ''
      this.form.rank = ''
      this.form.date = ''
      this.form.name = ''
      this.form.shichang = ''
      this.form.imageurl = []
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      deleteResearchCourse({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireResearchCourse(this.token).then(response => {
          this.tableData = response.data.researchCourse
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.researchDialogFormVisible = true
      this.form = row
      this.form.imageurl = []
      console.log('测试form')
      console.log(this.form)
    },
    updateResearchData: function() {
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
        research_course_type: this.form.type,
        organizers_of_research_course: this.form.danwei,
        course_display_level: this.form.rank,
        teaching_time: this.form.date,
        topic_name: this.form.name,
        course_length: this.form.shichang,
        imageurl: pingjie
      }
      updateResearchCourse({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireResearchCourse(this.token).then(response => {
          this.tableData = response.data.researchCourse
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.form.research_course_type = ''
      this.form.organizers_of_research_course = ''
      this.form.course_display_level = ''
      this.form.teaching_time = ''
      this.form.topic_name = ''
      this.form.course_length = ''
      this.form.imageurl = []
      this.researchDialogFormVisible = false
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
