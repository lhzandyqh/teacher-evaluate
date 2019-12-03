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
        <el-button type="primary" @click="setClubData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="clubDialogFormVisible" title="修改艺科体社团情况">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="比赛类别">
          <el-select v-model="form.competition_name" placeholder="请选择比赛类别" @change="typeGet">
            <el-option
              v-for="item in bisaiType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="比赛名称">
          <el-input v-model="form.specific_name"/>
        </el-form-item>
        <el-form-item label="获奖名称">
          <el-input v-model="form.award_name"/>
        </el-form-item>
        <el-form-item label="获奖级别">
          <el-select v-model="form.award_level" placeholder="请选择获奖级别" @change="levelGet">
            <el-option
              v-for="item in huojiangLevel "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="获奖时间">
          <el-col :span="11">
            <el-date-picker v-model="form.award_time" type="date" placeholder="选择日期" style="width: 80%;"/>
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
        <el-button @click="clubDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateClubData">确 定</el-button>
      </div>
    </el-dialog>
    <img-preview :imgs="imgs" :is-show-image-dialog="isShowImageDialog" @closeDialog="closeHandle"/>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import { inquireArtSportsAssociation, increaseArtSportAssociation, deleteArtSportsAssociation, updateArtSportAssociation } from '@/api/performanceWork'
import imgPreview from '@/views/aTeacherGrow/basicWorkTable/imgPreview'
export default {
  name: 'TestTable',
  components: { imgPreview },
  data() {
    return {
      isShowImageDialog: false,
      imgs: [],
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
        delivery: false,
        imageurl: []
      }
    }
  },
  mounted() {
    this.getClubData()
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
        competition_name: this.form.type,
        specific_name: this.form.bisainame,
        award_name: this.form.huojiangname,
        award_time: this.form.date,
        award_level: this.form.level,
        imageurl: pingjie
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
      this.form.type = ''
      this.form.bisainame = ''
      this.form.huojiangname = ''
      this.form.date = ''
      this.form.level = ''
      this.form.imageurl = []
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
      this.form = row
      this.form.imageurl = []
      console.log('测试form')
      console.log(this.form)
    },
    updateClubData: function() {
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
        competition_name: this.form.type,
        specific_name: this.form.bisainame,
        award_name: this.form.huojiangname,
        award_time: this.form.date,
        award_level: this.form.level,
        imageurl: pingjie
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
      this.form.competition_name = ''
      this.form.specific_name = ''
      this.form.award_name = ''
      this.form.award_time = ''
      this.form.award_level = ''
      this.form.imageurl = []
      this.clubDialogFormVisible = false
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
