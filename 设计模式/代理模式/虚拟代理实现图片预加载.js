var myImage = (function () {
  var imgNode = document.createElement('img');
  document.body.appendChild(imgNode);

  return {
    setSrc: function (src) {
      imgNode.src = src
    }
  }
})()


var proxyImage = (function () {
  var img = new Image;
  img.onload = function () {
    myImage.setSrc(this.src)
  }

  return {
    setSrc: function (src) {
      myImage.setSrc('https://baidu.com/loading.gif')
      img.src = src
    }
  }
})()

proxyImage.setSrc('c://juhua.png')