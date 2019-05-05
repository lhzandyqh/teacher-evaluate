<template>
  <div class="app-container">
    <el-row>
      <h3>工作分享(测试)</h3>
    </el-row>
    <el-row>
      <div class="innerContainer">
        <Tinymce id="tinymce" :height="300" v-model="content"/>
      </div>
    </el-row>
    <el-row>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="print">提交保存</el-button>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="innerContainer">
        <el-row>
          <div class="noteT" style="padding-top: 30px">
            <div class="titleListLine"/>
            <div class="schNot">历史分享</div>
          </div>
        </el-row>
        <el-row>
          <div class="shareHistory">
            <div class="shareList">
              <div v-for="(item, index) in items" :key="item.id" class="noteLi">
                <div class="leftPoint"/>
                <div class="rightText">
                  <div class="noteTitle" @click="openNoteDialog(index)">{{ item.noticeTitle }}</div>
                  <div class="noteTime">{{ item.noticeTime }}</div>
                </div>
              </div>
            </div>
          </div>
        </el-row>
        <el-row class="pagination-container">
          <div class="block">
            <el-pagination
              :total="50"
              layout="prev, pager, next"/>
          </div>
        </el-row>
      </div>
    </el-row>
  </div>
</template>
<script>
import Tinymce from '../../components/Tinymce/index'
export default {
  name: 'WorkShare',
  components: { Tinymce },
  data: function() {
    return {
      items: [
        { id: 1, noticeTitle: '第一篇', noticeTime: '1998-11-15' }, { id: 2, noticeTitle: '第二篇', noticeTime: '1998-11-15' },
        { id: 3, noticeTitle: '第三篇', noticeTime: '1998-11-15' }, { id: 4, noticeTitle: '第四篇', noticeTime: '1998-11-15' },
        { id: 5, noticeTitle: '第五篇', noticeTime: '1998-11-15' }, { id: 6, noticeTitle: '第六篇', noticeTime: '1998-11-15' }
      ]
    }
  },
  methods: {
    openNoteDialog() {
      console.log('喂喂喂')
    }
  }
}
</script>
 <style scoped>
  .buttonContainer{
    padding-top: 20px;
    text-align: center;
  }
  .noteT{
    padding: 15px;
    padding-top: 25px;
    display: flex;
  }
  .titleListLine{
    width: 3px;
    height: 20px;
    background: #f60;
    margin-right: 10px;
  }
  .noteLi{
    display: flex;
    margin: 25px;
  }
  .leftPoint{
    width: 5px;
    height: 5px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background: #f60;
    margin-right: 10px;
    margin-top: 7px;
  }
  .rightText{
    flex: 1;
  }
  .noteTitle{
    cursor: pointer;
  }
  .noteTime{
    font-size: 14px;
    color: #999;
    margin-top: 10px;
  }
  .innerContainer{
    border: 1px solid #efefef;
    padding-top: 10px;
    padding: 10px;
    width: 100%;
    height: 100%;
    padding-bottom: 5px;
  }
   .pagination-container{
     padding-top: 20px;
     text-align: center;
   }

</style>
