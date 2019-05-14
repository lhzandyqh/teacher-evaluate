<template>
  <div class="login-container">
    <!-- 登录弹框 -->
    <el-dialog :title="loginTitle" :visible.sync="showDialog" width="30%">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <el-form-item prop="user_name">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            v-model="loginForm.user_name"
            placeholder="用户名"
            name="user_name"
            type="text"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :type="passwordType"
            v-model="loginForm.password"
            placeholder="密码"
            name="password"
            auto-complete="on"
            @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">
            <svg-icon icon-class="eye" />
          </span>
        </el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>
      </el-form>
    </el-dialog>
    <!--页面内容-->
    <el-container>
      <el-header>
        <img :src="require('./headlogo.png')" alt="">
        <el-button type="primary" @click="showDialog=true">登录</el-button>
      </el-header>
      <el-container>
        <el-main style="background: #f1f4fa;width: 80%;margin: 0 auto;">
          <el-row :gutter="40">
            <el-col :span="13" :offset="1">
              <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item, index) in schna" :key="index">
                  <h3>{{ item }}</h3>
                </el-carousel-item>
              </el-carousel>
              <div class="newList">
                <div v-for="(item, index) in newList" :key="index" class="newLi">
                  <div class="newTitle" @click="openNewDialog(index)">{{ item.newsName }}</div>
                  <div class="newBot">
                    <div class="newType">{{ item.newsType }}</div>
                    <div class="newTime">{{ item.newsTime }}</div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="9" style="background: #fff;">
              <!--<el-collapse @change="handleChange">-->
              <!--<el-collapse-item v-for="item in schoolNotices" :title="item.noticeTitle" :name="item.id">-->
              <!--<div>{{item.noticeContext}}</div>-->
              <!--</el-collapse-item>-->
              <!--</el-collapse>-->
              <div/>
              <div class="noteT">
                <div class="titleListLine"/>
                <div class="schNot">经验分享</div>
              </div>
              <div class="noteList" style="height: 800px;overflow-y: auto;margin-bottom: 40px;">
                <div v-for="(item, index) in schoolNotices" :key="item.id" class="noteLi">
                  <div class="leftPoint"/>
                  <div class="rightText">
                    <div class="noteTitle" @click="openNoteDialog(index)">{{ item.noticeTitle }}</div>
                    <div class="noteTime">{{ item.noticeTime }}</div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog :visible.sync="dialogNew" title="新闻详情" width="60%">
      <div class="newInfoContent">
        <div class="newTitle" style="font-size: 16px;color: #000;">{{ newsInfoName }}</div>
        <div class="newBot">
          <div class="newType">{{ newsInfoType }}</div>
          <div class="newTime">{{ newsInfoTime }}</div>
        </div>
        <div class="newInfo" v-html="newInfoContent"/>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogNew = false">关 闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogNote" title="公告详情" width="60%">
      <div class="newInfoContent">
        <div class="newTitle" style="font-size: 16px;color: #000;">{{ noteInfo.noticeTitle }}</div>
        <div class="newBot">
          <div class="newType">{{ noteInfo.noticeType }}</div>
          <div class="newTime">{{ noteInfo.noticeTime }}</div>
        </div>
        <div class="theme">组织: {{ noteInfo.noticeOrganization }}</div>
        <div class="theme">主题: {{ noteInfo.noticeTheme }}</div>
        <div class="newInfo" v-html="noteInfo.noticeContext.replace(/\r\n/g, '<br>')"/>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogNew = false">关 闭</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { isvalidUsername } from '@/utils/validate'
import SocialSign from './socialsignin'
import { getNewsList, getSchoolNotices } from '@/api/login'

export default {
  name: 'Login',
  components: { SocialSign },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      schna: ['校训', '文化', '校园展示'],
      noteInfo: { noticeContext: '' },
      dialogNote: false,
      dialogNew: false,
      activeIndex: '1',
      loginTitle: '系统登录',
      loginForm: {
        user_name: '10010',
        password: '123456'
      },
      loginRules: {
        user_name: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined,
      newList: [],
      schoolNotices: [],
      newsInfoName: '',
      newsInfoType: '',
      newsInfoTime: '',
      newInfoContent: ''
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('hashchange', this.afterQRScan)
  },
  destroyed() {
    // window.removeEventListener('hashchange', this.afterQRScan)
  },
  mounted() {
    this.getNewList()
    this.getSchoolNotices()
  },
  methods: {
    getNewList() {
      getNewsList().then((res) => {
        this.newList = res.data.schoolnews
      })
    },
    getSchoolNotices() {
      getSchoolNotices().then((res) => {
        this.schoolNotices = res.data.schoolnotices
      })
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
            this.loading = false
            // this.$router.push({ path: this.redirect || '/' })
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleChange(val) {
      console.log(val)
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    openNewDialog(index) {
      this.dialogNew = true
      const thisNew = this.newList[index]
      this.newsInfoName = thisNew.newsName
      this.newsInfoType = thisNew.newsType
      this.newsInfoTime = thisNew.newsTime
      this.newInfoContent = thisNew.newsContext.replace(/\r\n/g, '<br>')
    },
    openNoteDialog(index) {
      this.dialogNote = true
      this.noteInfo = this.schoolNotices[index]
    },
    afterQRScan() {
      // const hash = window.location.hash.slice(1)
      // const hashObj = getQueryObject(hash)
      // const originUrl = window.location.origin
      // history.replaceState({}, '', originUrl)
      // const codeMap = {
      //   wechat: 'code',
      //   tencent: 'code'
      // }
      // const codeName = hashObj[codeMap[this.auth_type]]
      // if (!codeName) {
      //   alert('第三方登录失败')
      // } else {
      //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
      //     this.$router.push({ path: '/' })
      //   })
      // }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#eee;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      &::first-line {
      }
    }
  }

  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        height: 47px;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid #dcdfe6;
      border-radius: 5px;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#fff;
$dark_gray:#889aa4;
$light_gray:#eee;
.el-header{
  height: 90px!important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img{
    height: 60%;
  }

}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 0px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
  .tips {
    font-size: 14px;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    .set-language {
      position: absolute;
      top: 5px;
      right: 0px;
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-of-type(1) {
  background: url("http://58.119.112.11:11005/3da6ef7d-c9dd-4ca1-bdee-c83e88dd35bb.png") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
}
.el-carousel__item:nth-of-type(2) {
  background: url("http://58.119.112.11:11005/5f2c2637-35f0-4b8d-a61c-7bcc67d84f31.jpg") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
}
.el-carousel__item:nth-of-type(3) {
  background: url("http://58.119.112.11:11005/2edc2a5b-6a63-410a-a85a-6fb66186239f.jpg") no-repeat center;
  -webkit-background-size: cover;
  background-size: cover;
}

.newList{
  margin-top: 30px;
  background: #fff;
  overflow: auto;
  height: 570px;
}
.newLi{
  border-bottom: 1px solid #ddd;
  padding: 20px;
  .newTitle{
    cursor: pointer;
  }
}
.newBot{
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #999;
  font-size: 14px;
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
  .noteTime{
    font-size: 14px;
    color: #999;
    margin-top: 10px;
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
.el-carousel__item h3{
  color: #fff;
  font-size: 18px;
  opacity: 0.75;
  line-height: 30px;
  margin: 0;
  position: absolute;
  bottom: 0;
  padding: 10px 20px;
  background: rgba(0,0,0,0.8);
  width: 100%;
  box-sizing: border-box;
}
  .newInfo{
    margin-top: 20px;
  }
  .theme{
    margin: 20px 0;
  }
  .noteTitle{
    cursor: pointer;
  }
</style>
