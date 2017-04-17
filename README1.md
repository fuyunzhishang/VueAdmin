# 基于Vue.js的前后端分离Demo #

## 1. 技术栈：
### 前端：
* vue全家桶(vue.js, vueRouter, vue-loader, vue-cli, proxyTable),
*  ElementUI
*  axios(基于 Promise 的 HTTP 请求客户端)
*  vodal(动画的vue模态)
*   toastr(是非阻塞通知的JavaScript库),
### 后端: 
* 基于.Net的WebAPI
* Csla(数据访问层)
* Linq to json(构造json数据)

##2.为什么要前后端分离：
### 技术演进

1. 静态网站 html+css+js --> 动态网站 --> asp + js/vbs --> asp.net (分层结构, 简单三层， Extjs) --> mvc (ORM + Bootstrap + Jquery) --> vue.js + webAPI(mvvm数据双向绑定,前端分层，模块化)

 >* 前后端代码分离，提高代码复用
 >* 前端结构(HTML)、样式(CSS)、行为(JS)分离
 >* 请求响应,客户端发送请求，服务端响应请求
 >* 一套 Service 可以支持多个客户端的业务体系
 >* 彻底解放前端(前端不再需要向后台提供模板或是后台在前端html中嵌入后台代码)

![code1](http://i.imgur.com/icRLEHD.png)
 >* 提高工作效率，分工更加明确
 >
 前后端分离的工作流程可以使前端只关注前端的事，后台只关心后台的活，两者开发可以同时进行，在后台还没有时间提供接口的时候，前端可以先将数据写死或者调用本地的json文件即可，页面的增加和路由的修改也不必再去麻烦后台，开发更加灵活。

 >* 局部性能提升
 >
 通过前端路由的配置，我们可以实现页面的按需加载，无需一开始加载首页便加载网站的所有的资源，服务器也不再需要解析前端页面，在页面交互及用户体验上有所提升。

 >* 降低维护成本
>
通过目前主流的前端MVC框架，我们可以非常快速的定位及发现问题的所在，客户端的问题不再需要后台人员参与及调试，代码重构及可维护性增强。

我们不应该有前端后端之分，我们可以有专精之处，但是对于 web 开发这回事该懂的都应该要懂，否则你怎么可能打得赢？

### 架构演进

### 设计思想

## 3.如何进行前后端分离：
后台只需提供API接口，前端调用AJAX实现数据呈现。

## 参考文档：
* vue官方资源：[https://github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue)
* Vue开源项目库汇总： [http://www.cnblogs.com/opendigg/p/6513510.html](http://www.cnblogs.com/opendigg/p/6513510.html)
* vue官方文档：[https://cn.vuejs.org/](https://cn.vuejs.org/)
* ECMAScript 6 入门：[http://es6.ruanyifeng.com/#docs/array](http://es6.ruanyifeng.com/#docs/array)
* Learn ES2015：[https://babeljs.io/learn-es2015/](https://babeljs.io/learn-es2015/)
* vuex文档：[http://vuex.vuejs.org/zh-cn/state.html](http://vuex.vuejs.org/zh-cn/state.html)
* 前后分离架构的探索之路： [https://segmentfault.com/a/1190000003795517](https://segmentfault.com/a/1190000003795517)
* 我们为什么要尝试前后端分离：[https://segmentfault.com/a/1190000006240370](https://segmentfault.com/a/1190000006240370)