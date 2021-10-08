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

https://blog.csdn.net/weixin_43992330/article/details/89352497