<template>
  <div class="app_container">
    <el-button type="danger" icon="el-icon-s-management" plain @click="outerVisible = true">我的收藏</el-button>
    <el-dialog :visible.sync="outerVisible" title="我的收藏">
      <el-dialog
        :visible.sync="innerVisible"
        width="60%"
        title="文章内容"
        append-to-body>
        <div class="favoriteContainer">
          <div class="favoriteTitle">
            <span>{{ that.title }}</span>
          </div>
          <div class="favoriteContent">
            <span>{{ that.content }}</span>
          </div>
        </div>
      </el-dialog>
      <div class="zonjie">
        <el-table
          :data="tableData"
          height="250"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="收藏日期"
            align="center"
            width="140"/>
          <el-table-column
            prop="article_title"
            label="文章标题"
            align="center"
            width="400"/>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="readFavorite(scope.$index, scope.row)">查看文章</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getMyFavoriteData } from '@/api/workShareData'
import { getToken } from '@/utils/auth'
export default {
  name: 'StudentSummaryBook',
  data() {
    return {
      token: getToken(),
      outerVisible: false,
      innerVisible: false,
      title: '',
      content: '',
      tableData: [],
      that: this
    }
  },
  mounted() {
    getMyFavoriteData(this.token).then(response => {
      console.log('检查输出的数据')
      console.log(response.data.collectArticle)
      this.tableData = response.data.collectArticle
    })
  },
  methods: {
    readFavorite: function(index, content) {
      this.title = content.article_title
      this.content = content.article_content
      console.log(this.title)
      this.innerVisible = true
    }
  }
}
</script>

<style scoped>
  .zonjie{
    text-align: center;
  }
</style>
