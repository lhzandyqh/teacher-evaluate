<template>
  <div class="app-container">
    <div id="pdf_content" class="pdf_content">
      <iframe :src="pdfUrl" width="100%" height="800" border="0" />
    </div>
    <div class="download_container">
      <a :href="wordUrl" class="download" title="下载">点击下载</a>
    </div>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { getZhichengTable } from '@/api/smartExport'
export default {
  name: 'TitleEvaluation',
  data() {
    return {
      pdfUrl: '',
      token: getToken(),
      wordUrl: ''
    }
  },
  mounted() {
    this.getZhicheng()
  },
  methods: {
    getZhicheng: function() {
      getZhichengTable(this.token).then(response => {
        console.log('测试拿职称评定表')
        console.log(response.data)
        this.pdfUrl = response.data.pdfUrl
        this.wordUrl = response.data.wordUrl
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
