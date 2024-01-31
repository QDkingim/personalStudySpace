// 原始代码
var getUploadObj = function () {
  try {
    return new ActiveXObject('TXFTNActiveX.FTNUpload') // IE上传控件
  } catch (e) {
    if (supportFlash()) {
      var str = `<objcet type="application/x-shockwave-flash"></object>` // Flash上传
      return $(str).appendTo($('body'))
    } else {
      var str = `<input name="file" type="file">` // 表单上传
      return $(str).appendTo($('body'))
    }
  }
}


// 迭代器模式重构后的代码
var getActiveUploadObj = function () {
  try {
    return new ActiveXObject('TXFTNActiveX.FTNUpload') // IE上传控件
  } catch (error) {
    return false
  }
}

var getFlashUploadObj = function () {
  if (supportFlash()) {
    var str = `<objcet type="application/x-shockwave-flash"></object>` // Flash上传
    return $(str).appendTo($('body'))
  }
  return false
}

var getFormUploadObj = function () {
  var str = `<input name="file" type="file">` // 表单上传
  return $(str).appendTo($('body'))
}

// 迭代器代码如下
var iteratorUploadObj = function () {
  for (let i = 0, fn; fn = arguments[i++];) {
    var uploadObj = fn()
    if (uploadObj !== false) {
      return uploadObj
    }
  }
}

var uploadObj = iteratorUploadObj(getActiveUploadObj, getFlashUploadObj, getFormUploadObj)