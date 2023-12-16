<template>
  <div class="content-container" direction="vertical">
    <!-- input -->
    <div>
      <el-container class="content-row">
        <div class="input-field">
          <el-input v-model="queryParams.goods" />
        </div>
        <div class="input-tip">
          收货人:
        </div>
        <div class="input-field">
          <el-input v-model="queryParams.consignee" />
        </div>
        <div class="input-tip">
          支付时间:
        </div>
        <div class="input-field">
          <el-date-picker v-model="queryParams.payTime" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期" />
        </div>
      </el-container>
      <el-container class="content-row">
        <div class="input-tip">
          用户名称:
        </div>
        <div class="input-field">
          <el-input v-model="queryParams.name" />
        </div>
        <div class="input-tip">
          手机号:
        </div>
        <div class="input-field">
          <el-input v-model="queryParams.phone" />
        </div>
        <div class="input-tip">
          发货时间:
        </div>
        <div class="input-field">
          <el-date-picker v-model="queryParams.sendTime" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期" />
        </div>
      </el-container>
    </div>
    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">筛选</el-button>
        <el-button type="danger" @click="clear">清空筛选</el-button>
        <el-button type="primary" @click="exportData">导出</el-button>
        <el-button type="primary" @click="dispatchGoods">批量发货</el-button>
        <el-button type="primary" @click="exportDispatchGoods">下载批量发货样单</el-button>
      </el-container>
    </div>

    <!-- list -->
    <div>
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="全部"></el-tab-pane>
        <el-tab-pane label="未支付"></el-tab-pane>
        <el-tab-pane label="已支付"></el-tab-pane>
        <el-tab-pane label="待发货"></el-tab-pane>
        <el-tab-pane label="已发货"></el-tab-pane>
        <el-tab-pane label="支付超时"></el-tab-pane>
      </el-tabs>
      <el-table :data="orderList" ref="multipleTable" tooltip-effect="dark" @selection-change="handleSelectionChange"
        style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="name" label="商品" width="100" />
        <el-table-column prop="price" label="总价/数量" width="100" />
        <el-table-column prop="buyer" label="买家信息" width="100" />
        <el-table-column prop="time" label="交易时间" width="200" />
        <el-table-column label="分销信息" width="100">
          <template #default="scope">
            <el-tag size="default" :type="scope.row.role ? '' : 'info'">{{ scope.row.role ? '经理' : '分销员' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100">
          <template #default="scope">
            <el-tag size="default" :type="scope.row.state ? 'success' : 'danger'">{{ scope.row.state ? '已完成' : '未完成'
            }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="scope">
            <el-button size="small" type="danger" @click="deleteItem(scope.$index)">删除</el-button>
            <el-button size="small" type="primary" @click="callUser(scope.row)">联系客户</el-button>
          </template>
        </el-table-column>
        <el-table-column label="支付方式" width="100">
          <template #default="scope">
            <el-tag size="default">{{ scope.row.payType ? '微信' : '支付宝' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="source" label="来源" width="200" />
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "@/mock/Mock.js"
import Tools from "@/tools/Tools";
export default {
  data() {
    return {
      // 订单列表数据
      orderList: [],
      // 筛选订单的参数
      queryParams: {
        goods: "",
        consignee: "",
        phone: "",
        name: "",
        payTime: "",
        sendTime: ""
      },
      // 当前选中的订单对象
      mutipleSelection: []
    }
  },
  mounted() {
    this.orderList = Mock.getOrder(this.$route.params.type)
  },
  // 路由更新时刷新数据
  beforeRouteUpdate(to) {
    this.orderList = Mock.getOrder(to.params.type)
  },
  methods: {
    // 模拟请求数据
    requestData() {
      this.$message({
        type: "success",
        message: '筛选请求参数' + JSON.stringify(this.queryParams)
      })
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    // 切换tab刷新数据
    handleClick(tab) {
      this.$message({
        type: 'success',
        message: '切换tab刷新数据:' + tab.props.label
      })
    },
    // 清空筛选项
    clear() {
      this.queryParams = {
        goods: "",
        consignee: "",
        phone: "",
        name: "",
        payTime: "",
        sendTime: ""
      }
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    // 导出订单
    exportData() {
      Tools.exportJson('订单.json', JSON.stringify(this.orderList))
    },
    // 导出选中发货单
    exportDispatchGoods() {
      Tools.exportJson('发货单.json', JSON.stringify(this.mutipleSelection))
    },
    // 处理多选
    handleSelectionChange(val) {
      this.mutipleSelection = val
    },
    // 进行发货
    dispatchGoods() {
      this.$message({
        type: "success",
        message: '发货商品:' + JSON.stringify(this.mutipleSelection)
      })
    },
    // 删除订单
    deleteItem(index) {
      this.orderList.splice(index, 1)
    },
    // 联系用户
    callUser(item) {
      console.log(item);
      this.$message({
        type: 'success',
        message: '联系客户:' + item.phone
      })
    }
  }
}
</script>

<style  scoped></style>
