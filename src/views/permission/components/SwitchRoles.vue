<template>
  <div>
    <div style="margin-bottom:15px;">{{ $t('permission.roles') }}： {{ roles }}</div>
    {{ $t('permission.switchRoles') }}：
    <el-radio-group v-model="switchRoles">
      <!--      <el-radio-button label="editor"/>-->
      <!--      <el-radio-button label="admin"/>-->
      <el-radio-button label="教师">教师</el-radio-button>
      <el-radio-button label="教师组长">年级组长</el-radio-button>
      <el-radio-button label="系统管理员">管理员</el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  computed: {
    roles() {
      console.log('getters.roles')
      console.log(this.$store.getters.roles)
      return this.$store.getters.roles
    },
    switchRoles: {
      get() {
        return this.roles[0]
      },
      set(val) {
        this.$store.dispatch('ChangeRoles', val).then(() => {
          this.$emit('change')
        })
      }
    }
  }
}
</script>
