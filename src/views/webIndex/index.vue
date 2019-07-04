<template>
  <div class="content">
    <div class="bg"><img :src="img" alt=""></div>
    <div class="title1">教师评价</div>
    <div class="title2">教师成长</div>
    <div class="elvcontent">
      <div class="elvtitle">
        <div><i class="el-icon-search"/></div>
        <div class="elvtitletext">教师评价</div>
      </div>
      <div class="elvul">
        <div v-if="role === '教师' || role === '教师组长' || role === '系统管理员'" class="elvli">
          <div class="elvlileft" @click="goElv('teacherInfo')">教师信息</div>
          <div class="elvliright" @click="goElv('integrationInfo')">积分详情</div>
        </div>
        <div v-if="role === '教师' || role === '教师组长' || role === '系统管理员'" class="elvli">
          <div class="elvlileft" @click="goElv('aptitudeInfo')">资质信息</div>
          <div class="elvliright" @click="goElv('countInfo')">统计信息</div>
        </div>
        <div v-if="role === '系统管理员'" class="elvli">
          <div class="elvlileft" @click="goElv('authorityManage')">权限管理</div>
          <div class="elvliright" @click="goElv('integrationConfig')">积分配置</div>
        </div>
        <div v-if="role === '系统管理员' || role === '系统审核员'" class="elvli">
          <div class="elvlileft" @click="goElv('auditingList')">审核列表</div>
          <div class="elvliright" @click="goElv('auditingHistory')">审核历史</div>
        </div>
      </div>
    </div>
    <div v-if="role === '教师' || role === '教师组长' || role === '系统管理员'" class="growcontent">
      <div class="growtitle">
        <div><i class="el-icon-search"/></div>
        <div class="growtitletext">教师成长</div>
      </div>
      <div class="growul">
        <div class="growli" @click="goGrow('workTask')">工作任务</div>
        <div class="growli" @click="goGrow('workShare')">工作分享</div>
        <div class="growli" @click="goGrow('resultCount')">成果统计</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      img: require('./img/bg.png'),
      role: window.localStorage.getItem('userRole')
    }
  },
  methods: {
    goElv(path) {
      this.$store.dispatch('LogOutRole').then(() => {
        window.localStorage.setItem('role', 'elv')
        window.localStorage.setItem('prePath', path)
        this.$router.push({ path: `/${path}/index` })
      })
    },
    goGrow(path) {
      this.$store.dispatch('LogOutRole').then(() => {
        window.localStorage.setItem('role', 'grow')
        window.localStorage.setItem('prePath', path)
        this.$router.push({ path: `/${path}/index` })
        console.log(`/${path}/index`)
      })
    }
  }
}
</script>

<style scoped>
  .content{
    position: relative;
  }
  .bg img{
    width: 100%;
    height: auto;
  }
  .title1{
    position: absolute;
    width: 20%;
    height: 10%;
    top: 10%;
    left: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #fff;
    font-weight: 600;
  }
  .title2{
    position: absolute;
    width: 20%;
    height: 10%;
    top: 10%;
    left: 42%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: #333;
    font-weight: 600;
  }
  .elvcontent{
    position: absolute;
    width: 25%;
    height: 36%;
    left: 22%;
    top: 38%;
  }
  .elvtitle{
    display: flex;
    font-size: 25px;
  }
  .elvtitletext{
    margin-left: 20px;
  }
  .elvul{
    padding-left: 10%;
    margin-top: 20px;
  }
  .elvli{
    width: 70%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: #d9aa50;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    margin: 10px;
    color: #fff;
    cursor: pointer;
  }
  .el-icon-search{
    color: #d9aa50;
  }
  .growcontent{
    position: absolute;
    width: 17%;
    left: 67%;
    top: 38%;
  }
  .growtitle{
    display: flex;
    font-size: 25px;
  }
  .growtitletext{
    color: #fff;
    margin-left: 20px;
  }
  .growul{
    margin-top: 20px;
    background: rgba(217,170,80,0.8);
    padding: 10px 20px;
  }
  .growli{
    border-bottom: 2px solid #fff;
    height: 35px;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    margin: 15px;
    cursor: pointer;
  }
</style>
