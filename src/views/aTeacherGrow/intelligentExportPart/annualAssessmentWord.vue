<template>
  <div class="app-container">
    <!--    <h1>这是第一个考核表</h1>-->
    <div id="pdf_content" class="pdf_content">
      <iframe :src="pdfUrl" width="100%" height="800" border="0" />
      <!--      <el-image-->
      <!--        :src="pngUrl"-->
      <!--        style="width: 100%; height: 800px"/>-->
    </div>
    <div class="download_container">
      <!--      <a href="wordUrl">点击下载</a>-->
      <a :href="wordUrl" class="download" title="下载">点击下载</a>
      <!--      <el-button type="success" plain @click.native="exportData()">今日下载</el-button>-->
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { intelligentExportWord } from '@/api/intelligentExport'
import ElImage from 'element-ui/packages/image/src/main'
export default {
  name: 'AnnualAssessmentWord',
  components: { ElImage },
  data() {
    return {
      token: getToken(),
      wordUrl: '',
      pdfUrl: ''
    }
  },
  mounted() {
    this.firstGetWord()
  },
  methods: {
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
