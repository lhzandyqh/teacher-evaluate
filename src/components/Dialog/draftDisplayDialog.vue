<template>
  <div class="app_container">
    <el-row>
      <div class="caogaoButtonContainer">
        <el-button type="info" icon="el-icon-edit" @click="outerVisible = true">我的草稿箱</el-button>
      </div>
      <el-dialog :visible.sync="outerVisible" title="我的草稿">
        <div class="zonjie">
          <el-table
            :data="tableData"
            height="250"
            stripe
            style="width: 100%">
            <el-table-column
              prop="save_time"
              label="保存日期"
              align="center"
              width="140"/>
            <el-table-column
              prop="article_title"
              label="草稿标题"
              align="center"
              width="400"/>
            <el-table-column align="center" label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="editDraft(scope.$index, scope.row)">修改草稿</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="outerVisible = false">取 消</el-button>
        </div>
      </el-dialog>
    </el-row>
  </div>
</template>

<script>
import { getMyDraftData, modifyDraftData } from '@/api/workShareData'
import { getToken } from '@/utils/auth'
export default {
  name: 'DraftDisplayDialog',
  data() {
    return {
      token: getToken(),
      outerVisible: false,
      innerVisible: false,
      index: '',
      content: '',
      tableData: [],
      draftData: []
    }
  },
  mounted() {
    getMyDraftData(this.token).then(response => {
      console.log('检查输出的数据')
      console.log(response.data.article_drafts)
      this.tableData = response.data.article_drafts
    })
  },
  methods: {
    editDraft: function(index, content) {
      // this.index = index
      // this.content = content
      console.log(content)
      this.draftData[0] = content.article_title
      this.draftData[1] = content.article_content
      console.log(this.draftData)
      console.log('我要输出ID')
      console.log(content.id)
      this.$emit('draft', this.draftData)
      const prams = {
        id: content.id
      }
      modifyDraftData({ ...prams, token: this.token }).then(response => {
        if (response.data.code === 200) {
          console.log('修改成功')
        } else {
          console.log('修改失败')
        }
      })
      this.outerVisible = false
    },
    openDraft: function() {
      this.outerVisible = true
    }
  }
}
</script>

<style scoped>
  .caogaoButtonContainer{
    float: right;
    padding-right: 20px;
  }

</style>
