<template>
  <div class="app-container">
    <switch-roles @change="handleRolesChange" />
  </div>
</template>

<script>
import SwitchRoles from './components/SwitchRoles'

export default{
  name: 'PagePermission',
  components: { SwitchRoles },
  methods: {
    handleRolesChange() {
      this.$message({
        message: '切换权限成功',
        type: 'success'
      })
      this.$router.push({ path: 'aTeacherEvaluate/countInfo' })
    }
  }
}
</script>
