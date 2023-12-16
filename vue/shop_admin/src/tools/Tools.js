const Tools = {
  // 导出文件
  exportJson(name, data) {
    let blob = new Blob([data]); // 创建blob对象
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob); // 创建一个URL对象并传给a元素的href
    link.download = name; // 设置下载默认名
    link.click();
  },
};

export default Tools;
