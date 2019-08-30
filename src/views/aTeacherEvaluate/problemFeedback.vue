<template>
  <div class="app-container">
    <el-row>
      <el-card class="box-card">
        <el-row>
          <h5 style="float: left">问题反馈标题</h5>
        </el-row>
        <el-row>
          <el-input
            :rows="1"
            v-model="problemTitle"
            type="textarea"
            style="width: 50%"
            placeholder="问题反馈标题"/>
        </el-row>
        <el-row>
          <h5 style="float: left">问题反馈内容</h5>
        </el-row>
        <el-row>
          <el-input
            :rows="14"
            v-model="problemContent"
            type="textarea"
            placeholder="请输入问题反馈内容"/>
        </el-row>
        <el-row>
          <div class="buttonContainer">
            <el-button type="primary" plain @click="uploadMyFeedback">确认提交</el-button>
          </div>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { myProblemFeedback } from '@/api/teacherInformation'
export default {
  name: 'ProblemFeedback',
  data() {
    return {
      problemTitle: '',
      problemContent: '',
      token: getToken()
    }
  },
  methods: {
    uploadMyFeedback: function() {
      const prams = {
        title: this.problemTitle,
        content: this.problemContent
      }
      console.log(this.token)
      myProblemFeedback({ ...prams, token: this.token }).then(respone => {
        this.$message({
          message: '提交成功，感谢您的反馈',
          type: 'success',
          duration: 5000
        })
        this.problemContent = ''
        this.problemTitle = ''
      })
    }
  }
}
</script>

<style scoped>
  .buttonContainer{
    padding-top: 20px;
    text-align: center;
  }

</style>
