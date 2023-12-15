## 标签之美--HTML 基础标签使用总结

HTML 是一种标记语言，因此，标签便是 HTML 的核心，一些基础标签的用法总结如下：

1、<html></html>

任何 HTML 文件都会有这样一个标签，标记网页的开始和结束。

2、<head></head>

头部标签中可以包含许多网页的头信息。

3、<title></title>

这个标签包含在头部标签内，其内容就是网页显示的标题，比如：

```
<html>
<head>
<title>我的HTML网页</title>
</head>
</html>
```

结果如下：

![](http://static.oschina.net/uploads/space/2015/0506/170648_Uct0_2340880.png)

4、<meta>

这是一个设置标签，也叫元信息标签，用于记录和设置网页的一些属性。

其中：name 属性可以用来设置关键字，简要内容，网页生成工具及网页的制作者和网页链接查询权限，分别对应的字段为：Keywords、Description、Generator、Author、Robots。

每一个 name 的属性，后面都要用 contect 进行解释。对于 Robots 属性，contect 权限的说明如下：

all:文件和链接都可以被检索

none:都不可以被检索

index:文件被检索

follow:页面上的链接被检索

noindex：文件不被检索，链接可以被查询

<meta>标签的另一个属性值为http-equiv，它将告诉浏览器一些重要的信息，例如编码信息：

```
<meta charset="UTF-8"><!--告诉浏览器编码格式-->
```

定时跳转网页：

```
<meta http-equiv="Refresh" content="5;url=http://www.baidu.com"><!--5S后将跳转到百度网页-->
```

5、<body></body>

顾名思义，网页的主体内容写在这个标签里。

下面这些标签都是在<body>标签下的：

6、<p></p>

段落标签，示例如下：

```
<html>
<head>
<title>我的HTML网页</title>
<meta charset="UTF-8">
</head>
<body>
<p>这是第一段</p><p>这是第二段</p>
</body>
</html>
```

![](http://static.oschina.net/uploads/space/2015/0506/173526_FBOj_2340880.png)

7、<br>

换行标签，如下：

```
<body>
这是第一行<br>这是第二行
</body>
```

![](http://static.oschina.net/uploads/space/2015/0506/173725_okEm_2340880.png)

8、<hr>

水平分割线，示例如下：

```
<body>
这是第一行
<hr>这是第二行
<hr size="12"><!--设置分割线宽度-->
这是第三行
<hr width="200"><!--设置分割线的长度-->
这是第四行
<hr width="100" align="left"><!--设置居左-->
</body>
```

![](http://static.oschina.net/uploads/space/2015/0506/174555_wV9L_2340880.png)

在设置分割线的颜色之前，我们先把 HTML 中颜色对应的代码总结如下：

![](http://static.oschina.net/uploads/space/2015/0506/175243_FVS4_2340880.png)

```
<body>
这是第一行
<hr color="#0C2DEC">这是第二行
<hr size="12" color="#FF0000"><!--设置颜色-->
这是第三行
<hr width="200" color="#730C0D">
这是第四行
<hr width="100" align="left" color="#158C4F">
</body>
```

![](http://static.oschina.net/uploads/space/2015/0506/175600_8Lfv_2340880.png)

取消分割线阴影：

```
<body>
这是第一行
<hr size="12"><!--设置分割线宽度-->
这是第二行
<hr size="16" noshade><!--取消分割线阴影-->
</body>
```

![](http://static.oschina.net/uploads/space/2015/0506/180026_3nW0_2340880.png)

9、<!---->

注释标签，任何编程语言都会有注释语句，这个就无需多说了。形式如下：

<!--注释内容-->

10、设置网页背景色

<body>标签中有一个属性，可以用来设置网页的背景颜色：bgcolor

```
<body bgcolor="#002BF8"><!--设置背景为蓝色-->
这是第一行
<hr size="12"><!--设置分割线宽度-->
这是第二行
<hr size="16" noshade><!--取消分割线阴影-->
</body>
```
