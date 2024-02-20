var bindClick = function (btn, func) {
  btn.onclick = func
}

var MenuBar = {
  refresh: function () {
    console.log("刷新菜单目录");
  }
}

var SubMenu = {
  add: function () {
    console.log("增加子菜单");
  },
  del: function () {
    console.log("删除子菜单");
  }
}

bindClick(bt1, MenuBar.refresh)
bindClick(bt2, SubMenu.add)
bindClick(bt3, SubMenu.del)