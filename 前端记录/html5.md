1. css盒模型

css盒模型，又称框模型，包含了元素内容(content)，内边距(padding)，边框(border)，外边距(margin)几个要素
盒模型又分为两种：标准盒模型和ie盒模型
- 标准盒模型的width和height指的是内容区域的宽高，增加内边距、边框和外边距不能影响内容区域的尺寸但是会增加元素框的总尺寸
- ie6浏览器的width不是内容的宽度 而是内容、内边距和边框的总和；

2. rem\px\em的联系与区别

- px ：像素，用px设置字体大小，比较稳定和精确；但是px不支持用户进行浏览器的缩放或不同移动端的兼容，因为像素是固定的，屏幕大小是固定的；
- em : 相对值,根据父元素来对应大小；进行元素的设置，都要知道它父元素的大小，不太方便
- rem ： 根据根元素的font-size对应大小；1rem=16px,可以在根元素的html中写固定像素也可以写百分比，然后在具体的标签上设置rem

3. 描述一下cookies，sessionStorage和localStorage的区别

- cookies：在浏览器和服务器间来回传递，其他两个不会
- sessionStorge与localStorge的存储空间大，有丰富易用的接口，各自独立的存储空间

4. 怎么减少页面加载时间的方法

- 压缩css、js文件
- 合并js、css文件，减少http请求
- 外部js、css文件放在最底下 
- 减少dom操作，使用变量替换不必要的dom操作

5. css优化、提升性能的方法

- 加载性能、选择器性能、渲染性能、可维护性  ？？？

6. css定义的权重

- 标签权重为1、class权重为10、id权重为100、style权重为1000

7. postion 

8. src和href的区别

- src和href都是引入外部资源
- src:表示对资源的引用，纸箱的内容会嵌入到当前标签所在的位置。src会将其指向的资源下载并应用到文档内，如js脚本，当浏览器及西到该元素，会暂停其他资源的下载和处理，直到该资源加载、编译、执行完毕，所以一般的js脚本会放在页面底部
- href: 表示超文本引用，指向一些网络资源，建立和当前元素或本文档的链接关系。当浏览器识别到他指向的文件时，就会并行下载资源，不会停止对当前文档的处理。常用在a\link等标签上

9.对HTML语义化的理解

- 语义化是指根据内容的结构化（内容语义化），选择适合的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情
- 优点：(1)对机器优好，带有语义的文字表现力丰富，更加适合搜索引擎的爬虫爬取有效信息，有利于SEO，除此之外，还支持读屏软件，根据文章自动生成目录(2) 对开发者友好，使用语义类标签增强了可读性，结构更加清晰。开发者能亲分析的看出网页的结构，便于团队的开发维护
- 常见的语义化标签：
```html
<header></header>头部
<nav></nav>导航栏
<section> 区块
<main> 主要区域
<article> 主要内容
<aside> 侧边栏
<footer> 底部
```

10. DOCTYPE的作用

- DOCTYPE是H5的一种标准通用标记语言的文档类型声明，目的是告诉浏览器应该以怎么样的文档类型来解析文档，不同的渲染模式会影响浏览器对css或js的解析，必须声明在html的第一行
- 浏览器渲染页面的两种模式：
- CSS1Compat:标准模式，默认模式，浏览器使用W#C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。
- BackCompat:怪异模式，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，浏览器以一种比较宽松的向后兼容方式显示

11. script标签中的defer和async的区别

- 如果没有defer或async属性，浏览器会立即加载并执行响应的脚本，不会等待后续加载的文档元素，读取到就会开始加载执行，素色了后续文档的加载
- 都是异步加载js脚本文件，不会阻塞页面的解析
- 执行顺序：多个带async属性的标签，不能保证加载的顺序；多个带defer属性德标签，按照加载顺序执行
- 脚本并行性：async 后续文档的加载和执行与js脚本的加载与执行是并行进行的，即异步执行；defer属性，加载后续文档的过程和js脚本的加载是并行进行的，js脚本需要等文档所有元素解析完之后才执行，DOM事件触发执行之前

12. 行内元素有哪些，块级元素有哪些，空元素有哪些

- 行内元素：a b span img input select strong
- 块级元素：div ul ol li dl dt dd h1-h6 p
- 空元素：没有内容的HTML元素，空元素无闭合，常见br hr img input link meta

13. HTML5有哪些更新

- 语义化标签：header,nav,footer,article,section,aside
- 媒体标签：audio video source；audio包括controls控制面板，autoplay自动播放，loop循环播放；poster：指定视频还未下载完毕或未播放,width,height;source:兼容不同的浏览器
- 表单：
- 类型：email验证当前输入的邮箱是否合法，url验证url,number只能输入数字，自带上下箭头，search:输入框提供小×，range提供一个范围，color颜色选择器，time时分秒，data日期选择年月日，datatime:safari，datatime-loacl:日期时间控件，week周控件，month月控件
- 表单属性：placeholder提示信息、autofocus自动获取焦点、autocomplete表单必须提交过且有name属性，requried输入框不嫩为空且有值才能提交，pattern里写入想要的正则模式，multiple选择多个文件或邮箱，form=“form表单的id"
- 表单事件：oninput\onivalid
- 进度条，度量器：progress标签，用来表示任务的进度
- DOM查询操作：document.querySelector().document.qurerySelecterAll(),选择的对象可以是标签、类、Id
- Web存储：新增在客户端存数据的方法：localStorage无时间限制的数据存储，sessionStorage 针对一个session的数据存储
- 其他：
- 拖放，img draggble
- 画布，canvas,使用js在网页上绘制图像。画布是矩形区域，可以控制每一像素。拥有多种绘制路径、矩形、圆形、字符、图像的方法。
- svg:是可伸缩矢量图形，用于定义网络基于矢量的图形，使用xml格式定义图形，在放大或改变尺寸时，不会损失图形质量
- 地理定位：Geolication
https://juejin.cn/post/6905294475539513352
14. img的srcset属性的作用

- 响应式页面中经常用到根据屏幕密度来设置不同的图片，这就用到了img标签的srcset属性，用于设置不同屏幕密度下，img自动加载不同的图片
```html
<img src="image-128.png" srcset="image-256.png 2x" />
```
- 当屏幕密度为1x情况加载image1 2x加载2，当前屏幕密度有1-4x四种，通过sizes来设置图片的尺寸零界点。

15.说一下web worker

- 在html页面中，如果执行脚本时，负面的状态是不相应的，直到脚本执行完成后，页面才变成可响应。web worker是运行在后台的js,独立于其他脚本，不会影响页面性能，通过pOstMessage将结果回传到主线程，在进行复杂操作时，不阻塞主线程
- 创建:检查当前浏览器是否支持，创建web worker文件，创建web worker对象

