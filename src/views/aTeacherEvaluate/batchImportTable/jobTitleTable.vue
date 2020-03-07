<template>
  <div class="app-container">
    <el-row>
      <el-col :span="1">
        <img style="width: 20px;height: 20px" src="../../../assets/piliang.png">
      </el-col>
      <el-col :span="2">
        <span style="font-size: 13px;margin-left: -20px;font-weight: bolder;color: deepskyblue;cursor: pointer" @click="piliangControl">批量操作</span>
      </el-col>
      <el-col :span="21">
        <div v-if="piliangFlag" style="float: right">
          <span style="font-size: 13px;margin-left: -20px;font-weight: bolder;color: deepskyblue;cursor: pointer" @click="leavePiliangControl">退出批量操作</span>
        </div>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        v-if=" piliangFlag"
        type="selection"
        width="55"/>
      <el-table-column
        label="编号">
        <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="教师姓名"/>
      <el-table-column
        prop="id_num"
        label="身份证号码"/>
      <el-table-column
        prop="tDept"
        label="部门"/>
      <el-table-column
        prop="zhicheng"
        label="职称"/>
    </el-table>
    <div v-if=" piliangFlag" style="margin-top: 20px">
      <el-button @click="beginPiliang">职称设置</el-button>
    </div>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 30]"
        :page-size="10"
        :total="tableData.length"
        style="margin-top:20px;"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
    <el-dialog
      :visible.sync="zhichengFlag"
      :before-close="handleClose"
      title="员工工资批量设置"
      width="50%">
      <span style="font-weight: bolder">已选教师</span>
      <el-divider/>
      <div class="teacher_container clearfix">
        <div v-for="(item, i) in teacherNameArray" :key="i" class="teacher_item clearfix">
          <el-tag
            :disable-transitions="false"
            closable
            @close="handleDelete(item.name)">
            {{ item.name }}
          </el-tag>
        </div>
      </div>
      <el-divider/>
      <el-form ref="form" :model="salaryform" label-width="80px">
        <el-form-item label="职称">
          <el-input v-model="zhichengform" placeholder="请输入职称" style="width: 200px"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="salaryFlag = false">取 消</el-button>
        <el-button type="primary" @click="beginSetZhicheng">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { batchImportZhichengData, batchSetZhicheng } from '@/api/batchImportZhichengData'
import { getToken } from '@/utils/auth'
export default {
  name: 'JobTitleTable',
  data() {
    return {
      token: getToken(),
      zhichengFlag: false,
      piliangFlag: false,
      multipleSelection: [],
      teacherNameArray: [],
      tableData: [],
      pagesize: 10,
      currentPage: 1,
      zhichengform: ''
    }
  },
  mounted() {
    this.getZhichengData()
  },
  methods: {
    handleDelete: function(item) {
      this.teacherNameArray.splice(this.teacherNameArray.indexOf(item), 1)
      console.log('测试删除某个老师后的数据')
      console.log(this.teacherNameArray)
    },
    getZhichengData: function() {
      batchImportZhichengData(this.token).then(response => {
        console.log('获取职称数据')
        console.log(response.data)
        this.tableData = response.data.tecNameAndIdcard
      })
    },
    piliangControl: function() {
      this.piliangFlag = true
    },
    leavePiliangControl: function() {
      this.piliangFlag = false
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    beginPiliang: function() {
      if (this.multipleSelection.length === 0) {
        this.$message({
          message: '未选择任何条目 无法操作',
          type: 'warning'
        })
      } else {
        this.zhichengFlag = true
        this.teacherNameArray = []
        for (let i = 0; i < this.multipleSelection.length; i++) {
          // this.teacherNameArray.push(this.multipleSelection[i].username)
          const obj = {
            name: this.multipleSelection[i].username,
            idnum: this.multipleSelection[i].id_num
          }
          this.teacherNameArray.push(obj)
        }
        console.log('检查选中的老师名字')
        console.log(this.teacherNameArray)
      }
    },
    beginSetZhicheng: function() {
      if (this.zhichengform === '') {
        this.$message({
          message: '未输入 请重试',
          type: 'warning'
        })
      } else {
        this.zhichengFlag = false
        var people = ''
        for (let i = 0; i < this.teacherNameArray.length; i++) {
          const single = this.teacherNameArray[i].name + ',' + this.teacherNameArray[i].idnum + ';'
          people = people + single
        }
        console.log('测试组合输出的字符串')
        console.log(people)
        const prams = {
          tecinfo: people,
          zhicheng: this.zhichengform
        }
        batchSetZhicheng({ ...prams, token: this.token }).then(response => {
          console.log('测试批量修改职称')
          console.log(response.data)
          this.$message({
            message: '修改成功',
            type: 'success'
          })
          this.getZhichengData()
        })
      }
    }
  }
}
</script>

<style scoped>
  .fenye {
    text-align: center;
  }
  .teacher_container{
    margin-bottom: 20px;
  }
  .teacher_item {
    float: left;
    display: inline-block;
    margin-left: 20px;
    margin-top: 20px;
  }
  .clearfix:after,.clearfix:before{
    content: "";
    display: table;
  }
  .clearfix:after{
    clear: both;
  }
  .clearfix{
    *zoom: 1;
  }
</style>
