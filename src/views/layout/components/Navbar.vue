<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>

    <breadcrumb class="breadcrumb-container"/>

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <error-log class="errLog-container right-menu-item"/>

        <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
          <screenfull class="screenfull right-menu-item"/>
        </el-tooltip>

        <!--<el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">-->
        <!--<size-select class="international right-menu-item"/>-->
        <!--</el-tooltip>-->

        <!--<lang-select class="international right-menu-item"/>-->

        <!--<el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">-->
        <!--<theme-picker class="theme-switch right-menu-item"/>-->
        <!--</el-tooltip>-->
      </template>

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{ $t('navbar.dashboard') }}
            </el-dropdown-item>
          </router-link>
          <!--<a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">-->
          <!--<el-dropdown-item>-->
          <!--{{ $t('navbar.github') }}-->
          <!--</el-dropdown-item>-->
          <!--</a>-->
          <el-dropdown-item divided>
            <span style="display:block;" @click="changeMyPassword">{{ myPassword }}</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <div style="padding-bottom: 10px">
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
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog
      :visible.sync="passwordFlag"
      :before-close="handleClose"
      title="修改我的密码"
      width="40%">
      <div class="changepasswordContainer">
        <el-row :gutter="5">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">输入我的旧密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="oldPassWord" placeholder="请输入旧密码" show-password/>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="5">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">输入我的新密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="newPassword" placeholder="请输入新密码" show-password/>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="5">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">确认新密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="confirmpassword" placeholder="请确认新密码" show-password/>
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="passwordFlag = false">取 消</el-button>
        <el-button type="primary" @click="confirmToChangePassword">修改</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'
import { changeMyPassword } from '@/api/login'
import { getToken } from '@/utils/auth'
// import { SwitchRoles } from '@/views/permission/components/SwitchRoles'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    LangSelect,
    ThemePicker
  },
  data() {
    return {
      token: getToken(),
      newPassword: '',
      myPassword: '修改密码',
      passwordFlag: false,
      oldPassWord: '',
      confirmpassword: ''
    }
  },
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
    },
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    },
    changeMyPassword: function() {
      this.passwordFlag = true
    },
    confirmToChangePassword: function() {
      if (this.newPassword === '' || this.confirmpassword === '') {
        this.$message.error('密码不能为空')
      } else {
        if (this.newPassword !== this.confirmpassword) {
          this.$message({
            message: '两次密码输入不同',
            type: 'warning'
          })
        } else {
          const prams = {
            oldpassword: this.oldPassWord,
            newpassword: this.newPassword,
            assertpassword: this.confirmpassword
          }
          console.log('检查token')
          console.log(this.token)
          changeMyPassword({ ...prams, token: this.token }).then(respone => {
            this.$message({
              message: '修改密码成功,请重新登录',
              type: 'success',
              duration: 5000
            })
            this.passwordFlag = false
            this.logout()
          })
        }
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
