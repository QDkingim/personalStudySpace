<!--  -->
<template>
  <el-container id="container">
    <el-aside width="250px">
      <el-container id="top">
        <img src="~@/assets/logo.png" style="width: 25px;height: 25px;margin: auto;margin-right: 0;">
        <div style="margin: auto;margin-left: 10px;color: #fff;font-size: 17px;">电商后台管理</div>
      </el-container>
      <el-menu id="aside_menu" :default-active="$route.path" style="height: 100%;" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" @select="selectItem">
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <List />
            </el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="/home/order/0">普通订单</el-menu-item>
          <el-menu-item index="/home/order/1">秒杀订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Shop />
            </el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="/home/goods/0">普通商品</el-menu-item>
          <el-menu-item index="/home/goods/1">秒杀商品</el-menu-item>
          <el-menu-item index="/home/goods/2">今日推荐</el-menu-item>
          <el-menu-item index="/home/category">商品分类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <Avatar />
            </el-icon>
            <span>店长管理</span>
          </template>
          <el-menu-item index="/home/ownerlist">店长列表</el-menu-item>
          <el-menu-item index="/home/ownerreq">店长申请审批列表</el-menu-item>
          <el-menu-item index="/home/ownerorder">店长订单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <Ticket />
            </el-icon>
            <span>财务管理</span>
          </template>
          <el-menu-item index="/home/tradeinfo">交易明细</el-menu-item>
          <el-menu-item index="/home/tradelist">财务对账单</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <Tools />
            </el-icon>
            <span>基础管理</span>
          </template>
          <el-menu-item index="/home/data">数据统计</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
    <el-main>
      <!-- 添加一个通用头部 -->
      <el-header style="margin: 0;padding: 0;height: 80px;">
        <el-container style="background-color: blanchedalmond;margin: 0;padding: 0;height: 80px;">
          <div style="margin: auto;margin-left: 100px;">
            <h1>欢迎您登录后台管理系统,管理员用户!</h1>
          </div>
          <div style="margin: auto;margin-right: 50px;">
            <el-button type="primary" @click="logout">注销</el-button>
          </div>
        </el-container>
      </el-header>
      <!-- 这里用来渲染具体的功能模块 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import store from '@/tools/Storage';

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {},
  methods: {
    logout() {
      store.commit('clearUserInfo')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
#container {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

#top {
  background-color: #545c64;
  margin-right: 1px;
  text-align: center;
  height: 60px;
}

#aside_menu {
  width: 100%;
  height: 100%;
}
</style>
