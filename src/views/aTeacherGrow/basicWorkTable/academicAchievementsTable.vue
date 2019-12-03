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
          prop="type_of_carriers"
          align="center"
          label="学术成果载体类型"
          width="140"/>
        <el-table-column
          prop="academic_name"
          align="center"
          label="文章题目（专著名称）"
          width="180"/>
        <el-table-column
          prop="publication_time"
          align="center"
          label="发表时间（出版时间）"
          width="170"/>
        <el-table-column
          prop="is_first_author"
          align="center"
          label="是否第一作者"
          width="120"/>
        <el-table-column
          prop="name_of_publications"
          align="center"
          label="刊物名称（出版社）"
          width="160"/>
        <el-table-column
          prop="number_of_academic"
          align="center"
          label="刊号（书号）"
          width="150"/>
        <el-table-column
          prop="level_of_publisher"
          align="center"
          label="刊物等级（出版社等级）"
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
    <el-dialog :visible.sync="dialogFormVisible" title="增加学术成果情况">
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="学术成果载体类型">
          <el-select v-model="form.type" placeholder="请选择学术成果载体类型" style="width: 60%;" @change="chenguoSelectGet">
            <!--            <el-option label="论文" value="lunwen"/>-->
            <!--            <el-option label="专著" value="zhuanzhu"/>-->
            <el-option
              v-for="item in chenguoType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="文章题目">
          <el-input v-model="form.title"/>
        </el-form-item>
        <el-form-item label="发表时间（出版时间）">
          <el-col :span="11">
            <el-date-picker v-model="form.date" type="date" placeholder="选择时间" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="是否第一作者">
          <el-select v-model="form.first" placeholder="请选择是否第一作者" @change="authorSelectGet">
            <!--            <el-option label="是" value="yes"/>-->
            <!--            <el-option label="否" value="no"/>-->
            <el-option
              v-for="item in firstAuthor "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="刊物名称(出版社)">
          <el-input v-model="form.publishinghouse"/>
        </el-form-item>
        <el-form-item label="刊号(书号)">
          <el-input v-model="form.booknumber"/>
        </el-form-item>
        <el-form-item label="刊物等级（出版社等级）">
          <el-select v-model="form.rank" placeholder="请选择刊物等级（出版社等级）" @change="publishSelectGet">
            <!--            <el-option label="核心期刊" value="hexin"/>-->
            <!--            <el-option label="一般期刊" value="yiban"/>-->
            <!--            <el-option label="区级" value="quji"/>-->
            <!--            <el-option label="校级" value="xiaoji"/>-->
            <el-option
              v-for="item in publishRank "
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
        <el-button type="primary" @click="setAcademicAchevementsData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="editDialogFormVisible" title="修改学术成果情况">
      <el-form ref="form" :model="form" label-width="200px">
        <el-form-item label="学术成果载体类型">
          <el-select v-model="form.type_of_carriers" placeholder="请选择学术成果载体类型" style="width: 60%;" @change="chenguoSelectGet">
            <!--            <el-option label="论文" value="lunwen"/>-->
            <!--            <el-option label="专著" value="zhuanzhu"/>-->
            <el-option
              v-for="item in chenguoType "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="文章题目">
          <el-input v-model="form.academic_name"/>
        </el-form-item>
        <el-form-item label="发表时间（出版时间）">
          <el-col :span="11">
            <el-date-picker v-model="form.publication_time" type="date" placeholder="选择时间" style="width: 80%;"/>
          </el-col>
        </el-form-item>
        <el-form-item label="是否第一作者">
          <el-select v-model="form.is_first_author" placeholder="请选择是否第一作者" @change="authorSelectGet">
            <!--            <el-option label="是" value="yes"/>-->
            <!--            <el-option label="否" value="no"/>-->
            <el-option
              v-for="item in firstAuthor "
              :label="item.label"
              :key="item.id"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="刊物名称(出版社)">
          <el-input v-model="form.name_of_publications"/>
        </el-form-item>
        <el-form-item label="刊号(书号)">
          <el-input v-model="form.number_of_academic"/>
        </el-form-item>
        <el-form-item label="刊物等级（出版社等级）">
          <el-select v-model="form.level_of_publisher" placeholder="请选择刊物等级（出版社等级）" @change="publishSelectGet">
            <!--            <el-option label="核心期刊" value="hexin"/>-->
            <!--            <el-option label="一般期刊" value="yiban"/>-->
            <!--            <el-option label="区级" value="quji"/>-->
            <!--            <el-option label="校级" value="xiaoji"/>-->
            <el-option
              v-for="item in publishRank "
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
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateAcademicAchevementsData">确 定</el-button>
      </div>
    </el-dialog>
    <img-preview :imgs="imgs" :is-show-image-dialog="isShowImageDialog" @closeDialog="closeHandle"/>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import axios from 'axios'
import { inquireAcademicAchieve, increaseAcademicAchieve, deleteAcademicAchieve, updateAcademicAchieve } from '@/api/performanceWork'
import imgPreview from '@/views/aTeacherGrow/basicWorkTable/imgPreview'
export default {
  name: 'TestTable',
  components: { imgPreview },
  data() {
    return {
      isShowImageDialog: false,
      imgs: [],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
      noPicture: 'http://58.119.112.11:11028/images/zanwutupian.png',
      fileList: [],
      firstAuthor: [{ label: '是', value: 'yes' }, { label: '否', value: 'no' }],
      chenguoType: [{ label: '论文', value: 'lunwen' }, { label: '专著', value: 'zhuanzhu' }],
      publishRank: [{ label: '核心期刊', value: 'hexin' }, { label: '一般期刊', value: 'yiban' }, { label: '区级', value: 'quji' }, { label: '校级', value: 'xiaoji' }],
      token: getToken(),
      tableData: [],
      dialogFormVisible: false,
      editDialogFormVisible: false,
      form: {
        type: '',
        title: '',
        date: '',
        first: '',
        publishinghouse: '',
        booknumber: '',
        rank: '',
        id: '',
        imageurl: []
      },
      editForm: {
        type: '',
        title: '',
        date: '',
        first: '',
        publishinghouse: '',
        booknumber: '',
        rank: '',
        id: '',
        imageurl: []
      }
    }
  },
  mounted() {
    this.getAcademicAchevementsData()
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
    authorSelectGet: function(value) {
      let obj = {}
      obj = this.firstAuthor.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.first = obj.label
    },
    chenguoSelectGet: function(value) {
      let obj = {}
      obj = this.chenguoType.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.type = obj.label
    },
    publishSelectGet: function(value) {
      let obj = {}
      obj = this.publishRank.find((item) => {
        return item.value === value
      })
      console.log(obj.label)
      this.form.rank = obj.label
    },
    add: function() {
      this.dialogFormVisible = true
    },
    getAcademicAchevementsData: function() {
      // const prams = {
      //   token: this.token
      // }
      inquireAcademicAchieve(this.token).then(response => {
        this.tableData = response.data.academicAchieve
        console.log('测试学术成果tabledata')
        console.log(this.tableData)
      })
    },
    setAcademicAchevementsData: function() {
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
        type_of_carriers: this.form.type,
        academic_name: this.form.title,
        publication_time: this.form.date,
        is_first_author: this.form.first,
        number_of_academic: this.form.booknumber,
        name_of_publications: this.form.publishinghouse,
        level_of_publisher: this.form.rank,
        imageurl: pingjie
      }
      increaseAcademicAchieve({ ...prams, token: this.token }).then(response => {
        inquireAcademicAchieve(this.token).then(response => {
          this.tableData = response.data.academicAchieve
        })
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        })
      })
      this.form.type = ''
      this.form.title = ''
      this.form.date = ''
      this.form.first = ''
      this.form.booknumber = ''
      this.form.publishinghouse = ''
      this.form.rank = ''
      this.form.imageurl = []
      this.dialogFormVisible = false
    },
    handleDelete(index, row) {
      // console.log(index, row)
      const prams = {
        id: row
      }
      deleteAcademicAchieve({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('删除成功')
        } else {
          console.log('删除失败')
        }
        inquireAcademicAchieve(this.token).then(response => {
          this.tableData = response.data.academicAchieve
        })
        this.$message({
          message: '恭喜你，删除成功',
          type: 'success'
        })
      })
    },
    handleEdit: function(index, row) {
      this.editDialogFormVisible = true
      this.form = row
      this.form.imageurl = []
      console.log('测试form')
      console.log(this.form)
    },
    updateAcademicAchevementsData: function() {
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
        type_of_carriers: this.form.type_of_carriers,
        academic_name: this.form.academic_name,
        publication_time: this.form.publication_time,
        is_first_author: this.form.is_first_author,
        number_of_academic: this.form.number_of_academic,
        name_of_publications: this.form.name_of_publications,
        level_of_publisher: this.form.level_of_publisher,
        imageurl: pingjie
      }
      updateAcademicAchieve({ ...prams, token: this.token, id: this.form.id }).then(response => {
        if (response.data.code === 200) {
          console.log('更新成功')
        } else {
          console.log('更新失败')
        }
        inquireAcademicAchieve(this.token).then(response => {
          this.tableData = response.data.academicAchieve
        })
        this.$message({
          message: '恭喜你，编辑成功',
          type: 'success'
        })
      })
      this.form.type_of_carriers = ''
      this.form.academic_name = ''
      this.form.publication_time = ''
      this.form.is_first_author = ''
      this.form.number_of_academic = ''
      this.form.name_of_publications = ''
      this.form.level_of_publisher = ''
      this.form.imageurl = []
      this.editDialogFormVisible = false
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
