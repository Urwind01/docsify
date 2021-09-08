### Class与Style绑定

操作元素的class列表和内联样式是数据绑定的常见操作，因为都是attribute,可以用v-bind进行处理；
但是，为了避免字符串拼接麻烦且易错，可以使用对象或数组表示表达式的结果；

1.绑定HTML Class

- 对象语法

通过：class内添加对象，来动态的修改class的状态

同时可以将这类表达式绑定为一个返回对象的计算属性

- 数组语法

可以把一个数组传给：class,
用来批量绑定动态信息到class

```js
<div v-bind:class="[activeClass, errorClass]"></div>
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

- 用在组件上

组件添加：class 后相关信息会添加到原有组件的class后

2.绑定内联样式 CSS

- 对象语法

：style的对象语法非常直观，是一个js对象。CSS属性名可以驼峰、短线分隔符命名

同样适用计算属性

- 数组语法可添加多个样式对象到同一个元素

```html
div v-bind:style="[baseStyles, overridingStyles]"></div>d
```
- 自动添加前缀

vue.js会自动侦测前缀