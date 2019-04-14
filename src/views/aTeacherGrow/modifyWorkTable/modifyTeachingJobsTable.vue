<template>
  <div class="app-container">
    <el-dialog
      :visible.sync="editFormVisible"
      :close-on-click-modal="false"
      :before-close="handleClose"
      title="编辑"
      class="edit-form">
      <el-form ref="editForm" :model="editForm" :rules="editFormRules" label-width="80px">
        <el-form-item label="名称" prop="Name">
          <el-input v-model="editForm.name" auto-complete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="handleCancel('editForm')">取消</el-button>
        <el-button type="primary" @click.native="handleUpdate('editForm')">更新</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      editForm: {
        id: 0,
        name: '',
        price: 0,
        desc: '',
        reserve: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
