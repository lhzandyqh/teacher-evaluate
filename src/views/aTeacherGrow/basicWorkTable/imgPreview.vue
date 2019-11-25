<template>
  <el-dialog
    :visible.sync="isShowImageDialog"
    :before-close="handleClose"
    :close-on-click-modal="true"
    @closed="clearImg"
  >
    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="(src,item) in imgs" :key ="item">
        <img :src="src" style="max-width: 100%;max-height: 100%;display: block; margin: 0 auto;">
      </el-carousel-item>
    </el-carousel>
    <div slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'ImgPreview',
  props: {
    imgs: {
      type: Array,
      default: () => []
    },
    // eslint-disable-next-line vue/require-default-prop
    isShowImageDialog: {
      type: Boolean
    }
  },
  data() {
    return {
      // imgs: '',
      // isShowImageDialog: false
    }
  },
  methods: {
    clearImg() {
      this.imgs = null
    },
    handleClose: function() {
      this.$emit('closeDialog') // 取消和 x 按钮的事件，防止重复操作createDialog变量
    }
  }
}
</script>

<style scoped>

</style>
