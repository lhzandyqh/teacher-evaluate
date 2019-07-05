<template>
  <div class="app-container">
    <el-row>
      <h3>工作分享</h3>
    </el-row>
    <!--    <el-row>-->
    <!--      <div class="caogaoButtonContainer">-->
    <!--        <el-button type="info" icon="el-icon-edit">我的草稿箱</el-button>-->
    <!--      </div>-->
    <!--    </el-row>-->
    <el-row>
      <draft-display-dialog @draft="getDraftData($event)"/>
    </el-row>
    <el-row>
      <h5 style="float: left">分享文章标题</h5>
    </el-row>
    <el-row>
      <el-input
        :rows="1"
        v-model="textarea"
        type="textarea"
        style="width: 50%"
        placeholder="请输入文章标题"/>
    </el-row>
    <el-row>
      <h5 style="float: left">分享文章内容</h5>
    </el-row>
    <el-row>
      <div class="innerContainer">
        <Tinymce id="tinymce" :height="300" v-model="content"/>
      </div>
    </el-row>
    <el-row>
      <div class="buttonContainer">
        <el-button type="primary" plain @click="print">提交保存</el-button>
        <el-button type="success" plain @click="uploadToDraft">保存到草稿箱</el-button>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div class="innerContainer">
        <el-row>
          <div class="noteT" style="padding-top: 30px">
            <div class="titleListLine"/>
            <div class="schNot">历史分享</div>
          </div>
          <div class="favorite">
            <!--              <el-button type="danger" icon="el-icon-s-management">我的收藏</el-button>-->
            <my-favorite-dialog/>
          </div>
        </el-row>
        <el-row>
          <div class="shareHistory">
            <div class="shareList">
              <div v-for="(item, index) in items.slice((currentPage-1)*pagesize,currentPage*pagesize)" :key="item.id" class="noteLi">
                <div class="leftPoint"/>
                <div class="rightText">
                  <div class="noteTitle" @click="openNoteDialog(index,item)">
                    <div class="titleContainer">
                      {{ item.article_title }}
                    </div>
                  </div>
                  <div class="noteTime">{{ item.upload_time }}</div>
                </div>
              </div>
            </div>
          </div>
        </el-row>
        <el-row class="pagination-container">
          <div class="block">
            <el-pagination
              :current-page="currentPage"
              :page-sizes="[5, 8, 15, 20]"
              :page-size="10"
              :total="items.length"
              layout="total, sizes, prev, pager, next, jumper"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"/>
          </div>
        </el-row>
      </div>
    </el-row>
    <share-article-dialog :draft-dialog-visible="draftDialogVisible" :dialog-content="dialogContent" @stop="closeDiolog"/>
  </div>
</template>
<script>
import Tinymce from '../../components/Tinymce/index'
import { workShareUpload, articleExhibition } from '@/api/teacherGrow'
import { draftDataUpload, lookArticleStatus } from '@/api/workShareData'
import { getToken } from '@/utils/auth'
import draftDisplayDialog from '@/components/Dialog/draftDisplayDialog'
import shareArticleDialog from '@/components/Dialog/shareArticleDialog'
import myFavoriteDialog from '@/components/Dialog/myFavoriteDialog'
export default {
  name: 'WorkShare',
  components: { Tinymce, draftDisplayDialog, shareArticleDialog, myFavoriteDialog },
  data: function() {
    return {
      draftDialogVisible: false,
      items: [],
      textarea: '',
      content: '',
      token: getToken(),
      dialogContent: [],
      currentPage: 1, // 初始页
      pagesize: 10 //    每页的数据
    }
  },
  created() {
    this.getItems()
  },
  methods: {
    openNoteDialog(index, content) {
      console.log('喂喂喂')
      console.log(index)
      this.draftDialogVisible = true
      this.dialogContent[0] = content.article_content
      this.dialogContent[1] = content.id
      const prams = {
        article_id: this.dialogContent[1]
      }
      // lookArticleStatus({ ...prams, token: this.token }).then(response => {
      //   console.log(response.data.article_details[0].collect_status)
      //   if (response.data.article_details[0].collect_status === 0) {
      //     this.dialogContent[2] = false
      //   } else {
      //     this.dialogContent[2] = true
      //   }
      // })
      this.dialogContent[2] = true
      console.log(content)
      this.dialogContent[3] = content.article_title
      console.log('我是要传给子组件的数据')
      console.log(this.dialogContent)
    },
    closeDiolog() {
      this.draftDialogVisible = false
    },
    getDraftData: function(newdata) {
      this.textarea = newdata[0]
      this.content = newdata[1]
    },
    uploadToDraft() {
      const prams = {
        article_title: this.textarea,
        article_content: this.content
      }
      if (prams.article_title === '' || prams.article_content === '') {
        this.$message({
          message: '标题或内容不能为空',
          type: 'warning'
        })
      } else {
        console.log(this.token)
        draftDataUpload({ ...prams, token: this.token }).then(response => {
          if (response.data.code === 200) {
            console.log('添加成功')
          } else {
            console.log('添加失败')
          }
        })
        console.log(this.content + this.textarea)
        this.$message({
          message: '上传成功',
          type: 'success'
        })
      }
    },
    print() {
      const prams = {
        article_title: this.textarea,
        article_content: this.content
      }
      if (prams.article_title === '' || prams.article_content === '') {
        this.$message({
          message: '标题或内容不能为空',
          type: 'warning'
        })
      } else {
        console.log(this.token)
        workShareUpload({ ...prams, token: this.token }).then(response => {
          if (response.data.code === 200) {
            console.log('添加成功')
          } else {
            console.log('添加失败')
          }
        })
        console.log(this.content + this.textarea)
        this.$message({
          message: '上传成功',
          type: 'success'
        })
      }
    },
    getItems() {
      const prams = {
        page: this.currentPage,
        size: this.pagesize
      }
      articleExhibition(this.token).then(response => {
        this.items = response.data.jobSharing
      })
    },
    // splitList() {
    //   this.articleList = this.items.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
    // },
    // 初始页currentPage、初始每页数据数pagesize和数据data
    handleSizeChange: function(size) {
      this.pagesize = size
      console.log(this.pagesize) // 每页下拉显示数据
    },
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage
      console.log(this.currentPage) // 点击第几页
      this.articleList = this.items.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize)
      console.log(this.articleList)
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
   .caogaoButtonContainer{
     float: right;
     padding-right: 20px;
   }
   .favorite{
     margin-left: 1300px;
   }
   .schNot{
     text-align: left;
   }
</style>
