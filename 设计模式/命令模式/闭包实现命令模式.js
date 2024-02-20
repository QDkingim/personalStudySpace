var setCommand = function (btn, command) {
  btn.onclick = function () {
    command.execute()
  }
}

var MenuBar = {
  refresh: function () {
    console.log("刷新菜单目录");
  }
}

var RefreshMenuBarCommand = function (receiver) {
  return {
    execute: function () {
      receiver.refresh()
    }
  }
}

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)

setCommand(btn1, refreshMenuBarCommand)