<!--  -->
<template>
  <div direction="vertical" class="content-container">
    <!-- input -->
    <div>
      <el-container class="content-row">
        <div class="input-tip">店长手机:</div>
        <div class="input-field">
          <el-input v-model="queryParams.phone" />
        </div>
        <div class="input-tip">店长昵称:</div>
        <div class="input-field">
          <el-input v-model="queryParams.name" />
        </div>
        <div class="input-tip">店长状态:</div>
        <div class="input-field">
          <el-select v-model="queryParams.state" placeholder="请选择">
            <el-option key="1" label="后台开通" value="1" />
            <el-option key="2" label="站外申请" value="2" />
          </el-select>
        </div>
      </el-container>
      <el-container class="content-row">
        <el-button type="primary" @click="search">搜索</el-button>
        <el-button type="primary" @click="clear">清空搜索条件</el-button>
      </el-container>
    </div>
    <div>
      <el-table :data="managerList" tooltip-effect="dark" style="width: 100%">
        <el-table-column prop="people" label="分销人信息" width="200" />
        <el-table-column prop="weixin" label="微信信息" width="150" />
        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-tag :type="scope.row.state ? 'success' : ''">{{ scope.row.state ? '激活' : '审核中' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="income" label="收入总额" width="100" />
        <el-table-column prop="back" label="退款" width="100" />
        <el-table-column label="来源" width="100">
          <template #default="scope">
            <el-tag>{{ scope.row.source }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="customer" label="客户数" width="100" />
        <el-table-column prop="time" label="更新时间" width="200" />
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from '@/mock/Mock';
export default {
  data() {
    return {
      queryParams: {
        phone: "",
        name: "",
        state: ""
      },
      managerList: []
    }
  },
  mounted() {
    this.managerList = Mock.getManagerList()
  },
  methods: {
    search() {
      this.$message({
        type: 'success',
        message: '请求参数:' + JSON.stringify(this.queryParams)
      })
      this.managerList = Mock.getManagerList()
    },
    clear() {
      this.queryParams = {
        phone: "",
        name: "",
        state: ""
      }
      this.managerList = Mock.getManagerList()
    }
  }
}
</script>

<style  scoped></style>
