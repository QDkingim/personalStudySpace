<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-empty description="空空如也~~~" />
    <el-button type="primary">上传<el-icon class="el-icon--right">
        <UploadFilled />
      </el-icon></el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      hello: "hello~~~~~"
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
