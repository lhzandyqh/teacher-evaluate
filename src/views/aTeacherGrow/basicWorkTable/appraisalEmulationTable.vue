<template>
  <div class="appcontainer">
    <div class="innerContainer">
      <div class="titlecontainer">
        <h4>教育教学评比竞赛情况</h4>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="competition_type"
          align="center"
          label="竞赛类型"
          width="200"/>
        <el-table-column
          prop="organizers"
          align="center"
          label="主办单位"
          width="200"/>
        <el-table-column
          prop="entry_name"
          align="center"
          label="项目名称"
          width="200"/>
        <el-table-column
          prop="award_level"
          align="center"
          label="获奖级别"
          width="200"/>
        <el-table-column
          prop="award_grade"
          align="center"
          label="获奖等级"
          width="200"/>
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加教育教学评比竞赛">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="竞赛类型">
          <el-select v-model="form.type" placeholder="请选择竞赛类型" @change="competeGet">
            <!--            <el-option label="论文案例" value="shanhai"/>-->
            <!--            <el-option label="现场课" value="hunan"/>-->
            <!--            <el-option label="说课" value="shanghai"/>-->
            <!--            <el-option label="基本功" value="hengyang"/>-->
            <!--            <el-option label="其他" value="hengsyang"/>-->
            <el-option
              v-for="item in bisaiType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="form.danwei"/>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.name"/>
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
            <el-option
              v-for="item in huojiangLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
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
        <el-button type="primary" @click="setEducationData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="educationDialogFormVisible" title="修改教育教学评比竞赛">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="竞赛类型">
          <el-select v-model="form.competition_type" placeholder="请选择竞赛类型" @change="competeGet">
            <!--            <el-option label="论文案例" value="shanhai"/>-->
            <!--            <el-option label="现场课" value="hunan"/>-->
            <!--            <el-option label="说课" value="shanghai"/>-->
            <!--            <el-option label="基本功" value="hengyang"/>-->
            <!--            <el-option label="其他" value="hengsyang"/>-->
            <el-option
              v-for="item in bisaiType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="主办单位">
          <el-input v-model="form.organizers"/>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.entry_name"/>
        </el-form-item>
        <el-form-item label="获奖级别">
          <el-select v-model="form.award_level" placeholder="请选择获奖级别" @change="rankGet">
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
          <el-select v-model="form.award_grade" placeholder="请选择获奖等级" @change="levelGet">
            <el-option
              v-for="item in huojiangLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
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
        <el-button @click="educationDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateEducationData">确 定</el-button>
      </div>
    </el-dialog>
    <img-preview :imgs="imgs" :is-show-image-dialog="isShowImageDialog" @closeDialog="closeHandle"/>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import { inquireEduTeachCompet, increaseEduTeachCompet, deleteEduTeachCompet, updateTeachEduCompetition } from '@/api/performanceWork'
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
      bisaiType: [{ label: '论文案例', value: '论文案例' }, { label: '现场课', value: '现场课' }, { label: '说课', value: '说课' }, { label: '基本功', value: '基本功' }, { label: '其他', value: '其他' }],
      huojiangRank: [{ label: '国家级', value: '国家级' }, { label: '区级', value: '区级' }, { label: '市级', value: '市级' }, { label: '校级', value: '校级' }],
      huojiangLevel: [{ label: '一等奖', value: '一等奖' }, { label: '二等奖', value: '二等奖' }, { label: '三等奖', value: '三等奖' }],
      dialogFormVisible: false,
      educationDialogFormVisible: false,
      form: {
        name: '',
        type: '',
        danwei: '',
        delivery: false,
        id: '',
        level: '',
        rank: '',
        imageurl: []
      }
    }
  },
  mounted() {
    this.getEducationData()
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
    competeGet: function(value) {
      let obj = {}
      obj = this.bisaiType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
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
    getEducationData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireEduTeachCompet(this.token).then(response => {
        this.tableData = response.data.eduTeachCompet
        console.log(this.tableData)
      })
    },
    setEducationData: function() {
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
        competition_type: this.form.type,
        organizers: this.form.danwei,
        entry_name: this.form.name,
        award_level: this.form.rank,
        award_grade: this.form.level,
        imageurl: pingjie
      }
      increaseEduTeachCompet({ ...prams, token: this.token }).then(response => {
        inquireEduTeachCompet(this.token).then(response => {
          this.tableData = response.data.eduTeachCompet
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.form.type = ''
      this.form.danwei = ''
      this.form.name = ''
      this.form.rank = ''
      this.form.level = ''
      this.form.imageurl = []
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      deleteEduTeachCompet({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireEduTeachCompet(this.token).then(response => {
          this.tableData = response.data.eduTeachCompet
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.educationDialogFormVisible = true
      this.form = row
      this.form.imageurl = []
      console.log('测试form')
      console.log(this.form)
    },
    updateEducationData: function() {
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
        competition_type: this.form.competition_type,
        organizers: this.form.organizers,
        entry_name: this.form.entry_name,
        award_level: this.form.award_level,
        award_grade: this.form.award_grade,
        imageurl: pingjie
      }
      updateTeachEduCompetition({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireEduTeachCompet(this.token).then(response => {
          this.tableData = response.data.eduTeachCompet
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.form.competition_type = ''
      this.form.organizers = ''
      this.form.entry_name = ''
      this.form.award_level = ''
      this.form.award_grade = ''
      this.form.imageurl = []
      this.educationDialogFormVisible = false
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
