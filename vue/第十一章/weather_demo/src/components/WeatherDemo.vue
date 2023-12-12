<template>
  <div class="common-layout">
    <el-container class="container">
      <el-header>
        <el-input v-model="city" class="input" placeholder="请输入">
          <template #prepend>城市名：</template>
        </el-input>
      </el-header>
      <el-main class="main">
        <div class="today">
          今天: <span>{{ this.todayData.weather ?? this.plc }}{{ this.todayData.temperature ?? this.plc }}</span>
          <span style="margin: 20px;">{{ this.todayData.direct ?? this.plc }}</span>
          <span style="margin: 100px;">{{ this.todayData.data }}</span>
          <div class="real">
            <span class="temp">{{ this.realtime.temperature ?? this.plc }}</span>
            <span class="realInfo">{{ this.realtime.info ?? this.plc }}</span>
            <span class="realInfo" style="margin-left: 20px;">{{ this.realtime.power ?? this.plc }}</span>
          </div>
          <div class="real">
            <span class="realInfo">空气质量: {{ this.realtime.api ?? this.plc }}</span>
            <span class="realInfo" style="margin-left: 20px;">湿度: {{ this.realtime.humidity ?? this.plc }}</span>
          </div>
          <div class="future">
            <div class="header">5日天气预报</div>
            <el-table :data="futureData" style="margin-top: 30px;">
              <el-table-column prop="date" label="日期" />
              <el-table-column prop="temperature" label="温度" />
              <el-table-column prop="weather" label="天气" />
              <el-table-column prop="direct" label="风向" />
            </el-table>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'WeatherDemo',
  props: {
  },
  mounted() {
    this.axios.defaults.baseURL = "/myApi"
    this.requestData()
  },
  data() {
    return {
      city: "上海",
      wheatherData: {},
      todayData: {},
      plc: "暂无数据",
      realtime: {},
      futureData: []
    }
  },
  watch: {
    city() {
      this.requestData()
    }
  },
  methods: {
    requestData() {
      let city = encodeURI(this.city)
      let api = `/simpleWeather/query?city=${city}&key=ca86967503a31998435a352ae082c5f8`
      this.axios.get(api).then((response) => {
        this.weatherData = response.data
        this.todayData = this.weatherData.result.future[0]
        this.realtime = this.weatherData.result.realtime
        this.futureData = this.weatherData.result.future
        console.log(response.data)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: linear-gradient(rgb(13, 104, 188), rgb(54, 131, 195));
}

.input {
  width: 300px;
  margin-top: 20px;
}

.today {
  font-size: 20px;
  color: white;
}

.temp {
  font-size: 79px;
  color: white;
}

.realInfo {
  color: white;
}

.future {
  margin-top: 40px;
}

.header {
  color: white;
  font-size: 27px;
}
</style>
