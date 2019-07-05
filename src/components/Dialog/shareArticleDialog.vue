<template>
  <div class="app_container">
    <el-dialog
      :visible.sync="draftDialogVisible"
      :before-close="handleClose"
      title="分享"
      width="50%">
      <div class="collecttitle">
        <span>{{ dialogContent[3] }}</span>
      </div>
      <div class=" collectcontent">
        <span>{{ dialogContent[0] }}</span>
      </div>
      <!--      <div class="favoriteAndLile" @click="favoriteOrNot">-->
      <!--        <i v-show="favorite" class="el-icon-star-on"/>-->
      <!--        <i v-show="!favorite" class="el-icon-star-off"/>-->
      <!--      </div>-->
      <div class="collect">
        <el-button v-show="dialogContent[2]" type="text" @click="collectFavoriteArticle">收藏</el-button>
        <!--        <span v-show="dialogContent[2]">已收藏</span>-->
      </div>
      <span slot="footer" class="dialog-footer">
        <!--        <el-button @click="draftDialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { addMyFavorite } from '@/api/workShareData'
import { getToken } from '@/utils/auth'
export default {
  name: 'ShareArticleDialog',
  props: {
    draftDialogVisible: {
      type: Boolean,
      required: true
    },
    dialogContent: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      token: getToken(),
      collectFlag: true,
      dialogVisible: false,
      favorite: false
    }
  },
  methods: {
    // judgeCollect() {
    //   console.log('调用判断方法')
    //   if (this.dialogContent[2] === 0) {
    //     this.collectFlag = false
    //     this.dialogContent[4] = false
    //   } else {
    //     this.collectFlag = true
    //     this.dialogContent[4] = true
    //   }
    //   console.log(this.dialogContent[4])
    // },
    handleClose(done) {
      this.$emit('stop')
    },
    favoriteOrNot() {
      this.favorite = !this.favorite
    },
    collectFavoriteArticle() {
      const prams = {
        article_id: this.dialogContent[1]
      }
      addMyFavorite({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('收藏成功')
        } else {
          console.log('收藏失败')
        }
      })
      this.$message({
        message: '收藏成功',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>
  .collect{
    float: right;
    padding-right: 20px;
  }

</style>
