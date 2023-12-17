<!--  -->
<template>
  <div direction="vertical" class="content-container">
    <!-- input -->
    <div>
      <el-container class="content-row">
        <div class="input-tip">商品名称:</div>
        <div class="input-field">
          <el-input v-model="queryParams.name" />
        </div>
        <div class="input-tip">商品编号:</div>
        <div class="input-field">
          <el-input v-model="queryParams.id" />
        </div>
        <div class="input-tip">商品分类:</div>
        <div class="input-field">
          <el-select v-model="queryParams.category" placeholder="请选择分类">
            <el-option
              v-for="item in categories"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </div>
      </el-container>
      <el-container class="content-row">
        <div class="input-tip">是否上架:</div>
        <div class="input-field">
          <el-select v-model="sellModeString">
            <el-option key="0" label="否" :value="0" />
            <el-option key="1" label="是" :value="1" />
            <el-option key="2" label="全部" :value="2" />
          </el-select>
        </div>
        <div class="input-tip">是否过期:</div>
        <div class="input-field">
          <el-select v-model="expModeString">
            <el-option key="0" label="否" :value="0" />
            <el-option key="1" label="是" :value="1" />
            <el-option key="2" label="全部" :value="2" />
          </el-select>
        </div>
      </el-container>
    </div>
    <!-- button -->
    <div class="content-row">
      <el-container>
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">显示全部</el-button>
        <el-button type="success" @click="addGoods">新增商品</el-button>
      </el-container>
    </div>
    <!-- list -->
    <div>
      <el-table :data="goodsData" tooltip-effect="dark" style="width: 100%">
        <el-table-column label="商品" width="100">
          <template #default="scope">
            <div style="text-align: center">
              <el-image
                style="width: 60px; height: 100px"
                :src="scope.row.img"
              />
            </div>
            <div style="text-align: center">{{ scope.row.name }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格" width="100" />
        <el-table-column prop="sellCount" label="销量" width="100" />
        <el-table-column prop="count" label="库存" width="100" />
        <el-table-column prop="back" label="退款数量" width="100" />
        <el-table-column prop="backPrice" label="退款金额" width="100" />
        <el-table-column label="操作" width="100" prop="name">
          <template #default="scope">
            <el-button
              @click="operate(scope.row)"
              :type="scope.row.state ? 'danger' : 'success'"
              >{{ scope.row.state ? "下架" : "上架" }}</el-button
            >
          </template>
        </el-table-column>
        <el-table-column prop="owner" label="管理员" width="100" />
        <el-table-column prop="time" label="更新时间" width="200" />
      </el-table>
    </div>
  </div>
</template>

<script>
import Mock from "@/mock/Mock";
export default {
  data() {
    return {
      goodsData: [],
      // 模拟分类数据
      categories: ["全部", "男装", "女装"],
      queryParams: {
        name: "",
        id: "",
        category: "",
        sellMode: 2, // 0表示否,1表示是,2表示全部
        expMode: 2,
      },
    };
  },
  computed: {
    sellModeString: {
      get() {
        if (this.queryParams.sellMode == 2) {
          return "全部";
        }
        return this.queryParams.sellMode == 0 ? "否" : "是";
      },
      set(val) {
        this.queryParams.sellMode = val;
      },
    },
    expModeString: {
      get() {
        if (this.queryParams.expMode == 2) {
          return "全部";
        }
        return this.queryParams.expMode == 0 ? "否" : "是";
      },
      set(val) {
        this.queryParams.expMode = val;
      },
    },
  },
  mounted() {
    // 组件挂载时获取数据
    this.goodsData = Mock.getGoods(this.$route.params.type);
  },
  beforeRouteUpdate(to) {
    // 路由更新时获取数据
    this.goodsData = Mock.getGoods(to.params.type);
  },
  methods: {
    // 获取数据方法
    requestData() {
      this.$message({
        type: "success",
        message: "筛选请求参数" + JSON.stringify(this.queryParams),
      });
      this.goodsData = Mock.getGoods(this.$route.params.type);
    },

    // 进行上架 下架操作
    operate(row) {
      row.state = !row.state;
    },
    // 清空筛选项
    clear() {
      this.queryParams = {
        name: "",
        id: "",
        category: "",
        sellMode: 2,
        expMode: 2,
      };
      this.goodsData = Mock.getGoods(this.$route.params.type);
    },
    // 新增商品
    addGoods() {
      this.$router.push({
        name: "addGoods",
        params: { type: this.$route.params.type },
      });
    },
  },
};
</script>

<style scoped></style>
