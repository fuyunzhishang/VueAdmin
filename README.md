# 基于Vue.js的前后端分离Demo #

## 1. 技术栈：
### 前端：
* vue全家桶(vue.js, vueRouter, vue-loader, vue-cli, proxyTable),
*  ElementUI(Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的组件库，提供了配套设计资源，帮助你的网站快速成型。)
*  axios(基于 Promise 的 HTTP 请求客户端)
*  vodal(动画的vue模态)
*   toastr(是非阻塞通知的JavaScript库),
### 后端: 
* 基于.Net的WebAPI
* Csla(数据访问层)
* Linq to json(构造json数据)

### 初步了解vue.js
[http://www.jianshu.com/p/02b4369e3177](http://www.jianshu.com/p/02b4369e3177)
### vue基础概念介绍
[http://www.jianshu.com/p/0dda680939ec](http://www.jianshu.com/p/0dda680939ec)
### 

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
* 简单明快的早期时代

![](https://github-camo.global.ssl.fastly.net/90850e93b917cd3c958dff1c7d0197f819167343/687474703a2f2f696d672e68622e616963646e2e636f6d2f63333639616163633864613338616638653432326664323935313438633537643162353831376666666335362d4f636250646c5f6677363538?_=3520583)

* 后端为主的 MVC 时代
 
![](https://github-camo.global.ssl.fastly.net/b9e16b0b3ff3361a481badaca7d408e8fa6b404f/687474703a2f2f696d672e68622e616963646e2e636f6d2f3961366266353237646162626462396237393563353862306237616636633761313864653963653331316136312d3975697578545f6677363538?_=3520583)

* Ajax 带来的 SPA 时代

![](https://github-camo.global.ssl.fastly.net/d0098546c9fa01b443c16ff1953c90aa9056955b/687474703a2f2f696d672e68622e616963646e2e636f6d2f3932393766646337336438336632373764343439633932313933613361663432386464633064343431316366392d6e31445936465f6677363538?_=3520583)
![](https://github-camo.global.ssl.fastly.net/f064bc7a5b06ea9a39cf039a5dec0ca6675141ff/687474703a2f2f696d672e68622e616963646e2e636f6d2f3135383839323134336263363430333364323264643865643765373533366537316530373063346131336335372d6850673150635f6677363538?_=3520583)

* 前端为主的 MV* 时代

![](https://github-camo.global.ssl.fastly.net/2ab0e0e247dfae7b74760b7d57056a680204874d/687474703a2f2f696d672e68622e616963646e2e636f6d2f3536663463656530653663376166363165323464626633316534626531376631343264353930326331313039612d42637852696d5f6677363538?_=3520583)

* Node 带来的全栈时代

![](https://github-camo.global.ssl.fastly.net/ed895cf7561cb3ec07ef74aa2dea573b57dbe219/687474703a2f2f696d672e68622e616963646e2e636f6d2f3430303931653637316230626465653236653531366163303530633663616563383038383562386131326238372d374a676646685f6677363538?_=3520583)

## 3.如何进行前后端分离：
后台只需提供API接口，前端调用AJAX实现数据呈现。
### vue开发环境搭建
[http://www.jianshu.com/p/0038ef97ee56](http://www.jianshu.com/p/0038ef97ee56)
### ElementUI Demo
[http://www.jianshu.com/p/320609733a44](http://www.jianshu.com/p/320609733a44)



## 参考文档：
* vue官方资源：[https://github.com/vuejs/awesome-vue](https://github.com/vuejs/awesome-vue)
* Vue开源项目库汇总： [http://www.cnblogs.com/opendigg/p/6513510.html](http://www.cnblogs.com/opendigg/p/6513510.html)
* vue官方文档：[https://cn.vuejs.org/](https://cn.vuejs.org/)
* ECMAScript 6 入门：[http://es6.ruanyifeng.com/#docs/array](http://es6.ruanyifeng.com/#docs/array)
* Learn ES2015：[https://babeljs.io/learn-es2015/](https://babeljs.io/learn-es2015/)
* vuex文档：[http://vuex.vuejs.org/zh-cn/state.html](http://vuex.vuejs.org/zh-cn/state.html)
* 前后分离架构的探索之路： [https://segmentfault.com/a/1190000003795517](https://segmentfault.com/a/1190000003795517)
* 我们为什么要尝试前后端分离：[https://segmentfault.com/a/1190000006240370](https://segmentfault.com/a/1190000006240370)
* 前端文摘：Web 开发模式演变历史和趋势：[http://www.cnblogs.com/lhb25/p/web-development-mode-evolve.html](http://www.cnblogs.com/lhb25/p/web-development-mode-evolve.html)