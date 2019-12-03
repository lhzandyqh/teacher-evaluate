<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">请选择年级组:</div>
        <div>
          <el-select v-model="valuea" placeholder="请选择年级组">
            <el-option
              v-for="item in optionstwo"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"/>
          </el-select>
        </div>
        <div style="font-size: 14px;margin-right: 15px;font-weight: bolder;margin-left: 15px">请输入教师姓名:</div>
        <div>
          <el-input v-model="input" placeholder="请输入姓名"/>
        </div>
        <div>
          <el-button type="primary" style="margin-left:15px" @click="findTeacherContract">查询</el-button>
        </div>
        <div style="float: right;margin-left: 45%">
          <el-button type="text" @click="getRetirement">查看退休人员</el-button>
          <el-button type="text">查看在岗人员</el-button>
        </div>
      </div>
    </el-row>
    <el-divider/>
    <div>
      <span style="font-weight: bolder;font-size: 10px">注：默认显示合同即将到期的老师信息</span>
    </div>
    <el-row>
      <el-table v-loading="listLoading" :data="tabledata.slice((currentPage-1)*pagesize,currentPage*pagesize)" border fit highlight-current-row style="width: 100%">

        <el-table-column align="center" label="编号">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="姓名">
          <template slot-scope="scope">
            <span>{{ scope.row.username }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.gender }}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="人员类别">
          <template slot-scope="scope">
            <div v-if="scope.row.classFlag">
              <span>{{ scope.row.is_series }}</span>
              <el-button style="margin-left: 20px" type="text" @click="scope.row.classFlag = false">操作</el-button>
            </div>
            <div v-else>
              <el-select v-model="scope.row.is_series" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
              <el-button style="margin-left: 20px" type="text" @click="scope.row.classFlag = true">取消</el-button>
            </div>
          </template>
        </el-table-column>

        <el-table-column align="center" label="合同时间">
          <template slot-scope="scope">
            <span style="color: red">{{ scope.row.daysUntilEnd }}</span>
            <el-button type="text" @click="beginManage">操作</el-button>
          </template>
        </el-table-column>

        <el-table-column align="center" label="工作状态">
          <template slot-scope="scope">
            <div v-if="scope.row.statusFlag">
              <span>{{ scope.row.status }}</span>
              <el-button style="margin-left: 20px" type="text" @click="scope.row.statusFlag = false">操作</el-button>
            </div>
            <div v-else>
              <el-select v-model="scope.row.status" placeholder="请选择">
                <el-option
                  v-for="item in workoption"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
              <el-button style="margin-left: 20px" type="text" @click="scope.row.statusFlag = true">取消</el-button>
            </div>
          </template>
        </el-table-column>

        <!--        <el-table-column align="center" label="年龄">-->
        <!--          <template slot-scope="scope">-->
        <!--            <span>{{ scope.row.certLevel }}</span>-->
        <!--          </template>-->
        <!--        </el-table-column>-->

        <el-table-column align="center" label="年级组">
          <template slot-scope="scope">
            <span>{{ scope.row.tDept }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="fenye">
        <el-pagination
          :current-page="currentPage"
          :page-sizes="[10, 20, 30]"
          :page-size="10"
          :total="tabledata.length"
          style="margin-top:20px;"
          layout="total, sizes, prev, pager, next, jumper"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-row>
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      title="合同管理"
      width="30%">
      <el-row>
        <el-col :span="3">
          <div style="margin-top: 10px">
            <span>合同更新</span>
          </div>
        </el-col>
        <el-col :span="6">
          <el-select v-model="hetongvalue" placeholder="" @change="changeHetongStatus">
            <el-option
              v-for="item in hetongoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-col>
        <el-col :span="6">
          <div v-if="secondFlag" style="margin-left: 20px">
            <el-select v-model="hetongAfter" placeholder="请选择">
              <el-option
                v-for="item in optionThree"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 20px">
        <el-col :span="3">
          <div style="margin-top: 10px">
            <span>合同时间</span>
          </div>
        </el-col>
        <el-col v-if="hetongFlag" :span="10">
          <el-date-picker
            v-model="hetongDate"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
        </el-col>
        <el-col v-else :span="10">
          <el-date-picker
            v-model="hetongDate"
            disabled
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAllTeachGroup } from '@/api/teacherEvaluate'
import { getToken } from '@/utils/auth'
import { findRetirementPeople, findContractEndPeople, findTeacherContractByNameOrGroup } from '@/api/engageManage'
export default {
  name: 'EngageManage',
  data() {
    return {
      hetongAfter: '',
      secondFlag: false,
      valuea: '',
      input: '',
      currentPage: 1,
      pagesize: 10,
      hetongFlag: true,
      hetongDate: [],
      hetongvalue: '',
      renyuanFlag: true,
      gongzuoFlag: true,
      workValue: '',
      optionThree: [
        {
          value: '离职',
          label: '离职'
        }, {
          value: '调出',
          label: '调出'
        }, {
          value: '退休',
          label: '退休'
        }
      ],
      hetongoptions: [
        {
          value: '终止合同',
          label: '终止合同'
        }, {
          value: '更新合同',
          label: '更新合同'
        }
      ],
      workoption: [{
        value: '在职',
        label: '在职'
      }, {
        value: '离职',
        label: '离职'
      }, {
        value: '退休',
        label: '退休'
      }],
      options: [{
        value: '在编',
        label: '在编'
      }, {
        value: '长休',
        label: '长休'
      }, {
        value: '返聘',
        label: '返聘'
      }, {
        value: '入库',
        label: '入库'
      }, {
        value: '编外聘用',
        label: '编外聘用'
      }, {
        value: '劳务派遣',
        label: '劳务派遣'
      }],
      peopleValue: '',
      dialogVisible: false,
      tabledata: [
        {
          userid: '1',
          personnel_name: '刘洋',
          gender: '男',
          type: '在编',
          date: '2017-09 - 2019-09',
          status: '在职',
          group: '化学教研组'
        }
      ],
      optionstwo: [],
      token: getToken()
    }
  },
  mounted() {
    this.getTeachGroupList()
    this.getContract()
  },
  methods: {
    findTeacherContract: function() {
      if (this.input === '') {
        const prams = {
          // teachername: this.input,
          tDept: this.valuea
        }
        findTeacherContractByNameOrGroup({ ...prams, token: this.token }).then(response => {
          console.log('测试根据教研组和名字查找教师合同')
          console.log(response.data)
        })
      } else {
        const prams = {
          teachername: this.input
          // tDept: this.valuea
        }
        findTeacherContractByNameOrGroup({ ...prams, token: this.token }).then(response => {
          console.log('测试根据教研组和名字查找教师合同')
          console.log(response.data)
        })
      }
    },
    getContract: function() {
      const prams = {
        daysUntilEnd: ''
      }
      findContractEndPeople({ ...prams, token: this.token }).then(response => {
        console.log('查看合同快要到期的教师')
        console.log(response.data)
        this.tabledata = response.data.contractTecInfo
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
    },
    getRetirement: function() {
      const prams = {
        workstatus: '退休'
      }
      findRetirementPeople({ ...prams, token: this.token }).then(response => {
        console.log('测试获取的退休人员的信息')
        console.log(response.data)
        this.tabledata = response.data.teacherinfo
      })
    },
    changeHetongStatus: function() {
      if (this.hetongvalue === '更新合同') {
        this.hetongFlag = true
        this.secondFlag = false
      } else {
        this.hetongFlag = false
        this.secondFlag = true
      }
    },
    renyuanFlagChange: function() {
      this.renyuanFlag = false
    },
    cancelRenyaunFlag: function() {
      this.renyuanFlag = true
    },
    gongzuoFlagChange: function() {
      this.gongzuoFlag = false
    },
    cancelGongzuoFlag: function() {
      this.gongzuoFlag = true
    },
    beginManage: function() {
      this.dialogVisible = true
    },
    getTeachGroupList: function() {
      getAllTeachGroup(this.token).then(response => {
        console.log('测试返回的教研组')
        console.log(response.data)
        // eslint-disable-next-line no-empty
        for (let i = 0; i < response.data.allDeptName.length; i++) {
          const obj = {
            value: response.data.allDeptName[i],
            label: response.data.allDeptName[i]
          }
          this.optionstwo.push(obj)
        }
      })
    },
    andleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
  .fenye{
    text-align: center;
  }

</style>
