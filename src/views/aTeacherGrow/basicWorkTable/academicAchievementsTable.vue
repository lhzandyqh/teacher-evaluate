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
          width="180"/>
        <el-table-column
          prop="is_first_author"
          align="center"
          label="是否第一作者"
          width="140"/>
        <el-table-column
          prop="name_of_publications"
          align="center"
          label="刊物名称（出版社）"
          width="180"/>
        <el-table-column
          prop="number_of_academic"
          align="center"
          label="刊号（书号）"
          width="140"/>
        <el-table-column
          prop="level_of_publisher"
          align="center"
          label="刊物等级（出版社等级）"
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="setAcademicAchevementsData">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="editDialogFormVisible" title="修改学术成果情况">
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateAcademicAchevementsData">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireAcademicAchieve, increaseAcademicAchieve, deleteAcademicAchieve, updateAcademicAchieve } from '@/api/performanceWork'
export default {
  name: 'TestTable',
  data() {
    return {
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
        id: ''
      }
    }
  },
  mounted() {
    this.getAcademicAchevementsData()
  },
  methods: {
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
        console.log(this.tableData)
      })
    },
    setAcademicAchevementsData: function() {
      console.log(this.form)
      const prams = {
        type_of_carriers: this.form.type,
        academic_name: this.form.title,
        publication_time: this.form.date,
        is_first_author: this.form.first,
        number_of_academic: this.form.booknumber,
        name_of_publications: this.form.publishinghouse,
        level_of_publisher: this.form.rank
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
      this.form.id = row
    },
    updateAcademicAchevementsData: function() {
      console.log('输出id看一看')
      console.log(this.form.id)
      const prams = {
        type_of_carriers: this.form.type,
        academic_name: this.form.title,
        publication_time: this.form.date,
        is_first_author: this.form.first,
        number_of_academic: this.form.booknumber,
        name_of_publications: this.form.publishinghouse,
        level_of_publisher: this.form.rank
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
      this.editDialogFormVisible = false
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
