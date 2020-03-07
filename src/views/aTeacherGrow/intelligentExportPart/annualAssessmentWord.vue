<template>
  <div class="app-container">
    <!--    <div id="pdf_content" class="pdf_content">-->
    <!--      <iframe :src="pdfUrl" width="100%" height="800" border="0" />-->
    <!--    </div>-->
    <!--    <div class="download_container">-->
    <!--      <a :href="wordUrl" class="download" title="下载">点击下载</a>-->
    <!--    </div>-->
    <el-row>
      <el-col :span="1">
        <div>
          <span style="display: block;margin-top: 10px;font-size: 14px">表类</span>
        </div>
      </el-col>
      <el-col :span="8">
        <div>
          <el-select v-model="tableValue" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
      </el-col>
      <el-col :span="15">
        <div style="float: right">
          <div style="display: inline-block;margin-top: 20px">
            <img style="width: 20px;width: 20px;" src="../../../assets/tianxie.png">
          </div>
          <div style="display: inline-block">
            <span style="font-size: 15px;cursor: pointer;color: #4A9FF9;font-weight: bolder" @click="beginInput">填写内容</span>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-divider/>
    <div class="pdf_container">
      <iframe v-if="tableValue ==='事业单位专业技术人员年度（聘期）考核登记表'" :src="zhuanjiPDFUrl" width="100%" height="800" border="0" />
      <iframe v-if="tableValue ==='教师教育教学履职情况登记表'" :src="lvZhiPDFUrl" width="100%" height="800" border="0" />
      <iframe v-if="tableValue ==='事业单位管理人员年度（聘期）考核登记表'" :src="guanliPDFUrl" width="100%" height="800" border="0" />
      <iframe v-if="tableValue ==='事业单位工勤技能人员年度（聘期）考核登记表'" :src="gongqingPDFUrl" width="100%" height="800" border="0" />
    </div>
    <el-dialog
      :visible.sync="zhuanjiDialogVisible"
      :before-close="handleClose"
      title="开始填表"
      width="50%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="是否双肩挑">
          <el-select v-model="form.shuang" placeholder="是否双肩挑">
            <el-option label="是" value="是"/>
            <el-option label="否" value="否"/>
          </el-select>
        </el-form-item>
        <el-form-item label="工作总结">
          <el-input v-model="form.summary" :autosize="{ minRows: 5, maxRows: 20}" type="textarea" maxlength="600" show-word-limit/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="zhuanjiDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="zhuanzhiOnSubmit">提 交</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="guanliDialogVisible"
      :before-close="handleClose"
      title="开始填表"
      width="50%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="是否双肩挑">
          <el-select v-model="form.shuang" placeholder="是否双肩挑">
            <el-option label="是" value="是"/>
            <el-option label="否" value="否"/>
          </el-select>
        </el-form-item>
        <el-form-item label="工作总结">
          <el-input v-model="form.summary" :autosize="{ minRows: 5, maxRows: 20}" type="textarea" maxlength="600" show-word-limit/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click=" guanliDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="guanliOnSubmit">提 交</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="gongqingDialogVisible"
      :before-close="handleClose"
      title="开始填表"
      width="50%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="工作总结">
          <el-input v-model="form.summary" :autosize="{ minRows: 5, maxRows: 20}" type="textarea" maxlength="600" show-word-limit/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="gongqingDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="gognqingOnSubmit">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { intelligentExportWord } from '@/api/intelligentExport'
import { autoGetTableTitle, getZhuanjiData, getLvzhiData, summaryInput, getGuanliData, getGongqingData } from '@/api/smartExport'
import ElImage from 'element-ui/packages/image/src/main'
export default {
  name: 'AnnualAssessmentWord',
  components: { ElImage },
  data() {
    return {
      form: {
        shuang: '',
        summary: ''
      },
      guanliDialogVisible: false,
      zhuanjiDialogVisible: false,
      gongqingDialogVisible: false,
      token: getToken(),
      wordUrl: '',
      pdfUrl: '',
      options: [],
      tableValue: '',
      zhuanjiPDFUrl: '',
      guanliPDFUrl: '',
      gongqingPDFUrl: '',
      lvZhiPDFUrl: ''
    }
  },
  mounted() {
    // this.firstGetWord()
    this.getTableTitle()
    this.getZhuanji()
    this.getLvzhi()
    this.getGuanli()
    this.getGongqing()
  },
  methods: {
    zhuanzhiOnSubmit: function() {
      if (this.form.shuang === '' || this.form.summary === '') {
        this.$message({
          message: '内容未填写完整，无法提交',
          type: 'warning'
        })
      } else {
        this.zhuanjiDialogVisible = false
        const prams = {
          type: '专业技术人员',
          ifshuangjiantiao: this.form.shuang,
          summary: this.form.summary
        }
        summaryInput({ ...prams, token: this.token }).then(resposne => {
          console.log('专业技术人员测试填表')
          console.log(resposne.data)
          this.$message({
            message: '恭喜你 提交成功 请刷新界面重新获得表格',
            type: 'success'
          })
        })
      }
    },
    guanliOnSubmit: function() {
      if (this.form.shuang === '' || this.form.summary === '') {
        this.$message({
          message: '内容未填写完整，无法提交',
          type: 'warning'
        })
      } else {
        this.guanliDialogVisible = false
        const prams = {
          type: '事业单位管理人员',
          ifshuangjiantiao: this.form.shuang,
          summary: this.form.summary
        }
        summaryInput({ ...prams, token: this.token }).then(resposne => {
          console.log('事业单位管理人员测试填表')
          console.log(resposne.data)
          this.$message({
            message: '恭喜你 提交成功 请刷新界面重新获得表格',
            type: 'success'
          })
        })
      }
    },
    gognqingOnSubmit: function() {
      if (this.form.summary === '') {
        this.$message({
          message: '内容未填写完整，无法提交',
          type: 'warning'
        })
      } else {
        this.gongqingDialogVisible = false
        const prams = {
          type: '工勤技能人员',
          // ifshuangjiantiao: this.form.shuang,
          summary: this.form.summary
        }
        summaryInput({ ...prams, token: this.token }).then(resposne => {
          console.log('工勤技能人员测试填表')
          console.log(resposne.data)
          this.$message({
            message: '恭喜你 提交成功 请刷新界面重新获得表格',
            type: 'success'
          })
        })
      }
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    firstGetWord: function() {
      intelligentExportWord(this.token).then(response => {
        console.log('检查智能导出')
        console.log(response.data)
        // this.wordUrl = response.data.wordUrl
        this.pdfUrl = response.data.pdfUrl
        this.wordUrl = response.data.wordUrl
        // this.pngUrl = response.data.pngUrl
        console.log('检查wordUrl')
        console.log(this.wordUrl)
        console.log('检查pdfUrl')
        console.log(this.pdfUrl)
        // window.open(
        //   'https://view.officeapps.live.com/op/view.aspx?src=' + '58.119.112.11%3a11028%2fbasework%2fbasework.doc'
        // )
      })
    },
    getTableTitle: function() {
      autoGetTableTitle(this.token).then(response => {
        console.log('智能导出表获取表名')
        console.log(response.data)
        this.tableValue = response.data.examinetable[0]
        this.options = []
        for (let i = 0; i < response.data.examinetable.length; i++) {
          const obj = {
            value: response.data.examinetable[i],
            label: response.data.examinetable[i]
          }
          this.options.push(obj)
        }
      })
    },
    getZhuanji: function() {
      getZhuanjiData(this.token).then(response => {
        console.log('获取事业单位专业技术人员年度（聘期）考核登记表')
        console.log(response.data)
        this.zhuanjiPDFUrl = response.data.pdfUrl
      })
    },
    getLvzhi: function() {
      getLvzhiData(this.token).then(response => {
        console.log('教师教育教学履职情况登记表')
        console.log(response.data)
        this.lvZhiPDFUrl = response.data.pdfUrl
      })
    },
    getGuanli: function() {
      getGuanliData(this.token).then(response => {
        console.log('事业单位管理人员年度（聘期）考核登记表')
        console.log(response.data)
        this.guanliPDFUrl = response.data.pdfUrl
      })
    },
    getGongqing: function() {
      getGongqingData(this.token).then(response => {
        console.log('事业单位工勤技能人员年度（聘期）考核登记表')
        console.log(response.data)
        this.gongqingPDFUrl = response.data.pdfUrl
      })
    },
    beginInput: function() {
      if (this.tableValue === '事业单位专业技术人员年度（聘期）考核登记表') {
        this.zhuanjiDialogVisible = true
      } else if (this.tableValue === '事业单位管理人员年度（聘期）考核登记表') {
        this.guanliDialogVisible = true
      } else if (this.tableValue === '事业单位工勤技能人员年度（聘期）考核登记表') {
        this.gongqingDialogVisible = true
      } else {
        this.$message({
          message: '此表无需填写',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped>
  .download{
    width: 200px;
    /*font-family: 'Raleway', sans-serif;*/
    text-transform: uppercase;
    color: #fff;
    background-color: #5ca9fb;
    padding: 14px 34px;
    letter-spacing: 1px;
    margin: 0;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    transition: all 0.5s linear;
    border: 0;
    text-decoration: none;
  }
  .download_container{
    padding-top: 20px;
    text-align: center;
  }

</style>
