webpackJsonp([1],{"32lX":function(t,e){},L6a5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"100%"},attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("32lX")},null,null).exports,o=n("/ocq"),s=n("Xxa5"),c=n.n(s),p=n("exGp"),u=n.n(p),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"menu"},[e("li",[e("router-link",{attrs:{to:"/"}},[this._v("首页")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/"}},[this._v("项目")])],1),this._v(" "),e("li",[e("router-link",{attrs:{to:"/about"}},[this._v("关于")])],1)])},staticRenderFns:[]};var d=n("VU/8")({},l,!1,function(t){n("QBzL")},null,null).exports,m=n("mYLK"),v=n.n(m),h={mounted:function(){this.projects=v.a.projects},data:function(){return{projects:[],currentDate:new Date}},methods:{}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("h1",[t._v("22222222222222")]),t._v(" "),n("el-row",t._l(t.projects,function(e){return n("el-col",{key:e.name,staticStyle:{margin:"0px 10px 20px"},attrs:{span:4}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("img",{staticClass:"image",attrs:{src:"/static/projects/com.scorpio.agileman/icon.png"}}),t._v(" "),n("div",{staticStyle:{padding:"14px"}},[n("span",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("time",{staticClass:"time"},[t._v(t._s(t.currentDate))]),t._v(" "),n("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("操作按钮")])],1)])])],1)}))],1)},staticRenderFns:[]};var _=n("VU/8")(h,f,!1,function(t){n("L6a5")},null,null).exports,g=n("mtWM"),S=n.n(g),C={components:{MainMenu:d,IndexPart:_},mounted:function(){var t=this;return u()(c.a.mark(function e(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()},data:function(){return{aaa:navigator.userAgent,platform:navigator.platform}},methods:{handleSelect:function(t){},OnClickSourceLink:function(){window.open("https://github.com/qingfeng346/Scorpio-CSharp/releases")}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticClass:"page-header",staticStyle:{height:"100%"}},[n("el-header",[n("MainMenu")],1),t._v(" "),n("el-main",[n("div",{staticClass:"title"},[t._v("Scorpio-CSharp")]),t._v(" "),n("iframe",{attrs:{src:"https://ghbtns.com/github-btn.html?user=qingfeng346&repo=Scorpio-CSharp&type=star&count=true",frameborder:"0",scrolling:"0",width:"100px",height:"30px"}}),t._v(" "),n("div",{staticClass:"des"},[t._v("此脚本是用作Unity游戏热更新脚本,纯c#实现,最低支持.net3.5,兼容.net3.5以上所有平台,语法类似 javascript,支持平台:")]),t._v(" "),n("div",{staticClass:"des"},[t._v("Android,IOS,UWP,Windows,Mac,Linux,WebGL等所有平台")]),t._v(" "),n("div",{staticClass:"des"},[t._v("sco可以用作脚本运行")]),t._v(" "),n("div",[n("button",{staticClass:"download",on:{click:t.OnClickSourceLink}},[t._v("下载地址")])]),t._v(" "),n("iframe",{staticClass:"scriptconsole",attrs:{src:"https://qingfeng346.github.io/static/projects/Scorpio-CSharp/scriptconsole/index.html",frameborder:"0",border:"0",width:"850",height:"560",scrolling:"no"}})])],1)},staticRenderFns:[]};var x=n("VU/8")(C,b,!1,function(t){n("Ohkc")},null,null).exports,j=n("EFqf"),w=n.n(j),k={components:{MainMenu:d},mounted:function(){var t=this;return u()(c.a.mark(function e(){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://raw.githubusercontent.com/qingfeng346/Scorpio-CSharp/master/README.md");case 2:n=e.sent,t.about=w()(n.data);case 4:case"end":return e.stop()}},e,t)}))()},data:function(){return{about:"正在载入..."}}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",{staticStyle:{height:"100%"}},[e("el-header",{staticClass:"page-header"},[e("MainMenu")],1),this._v(" "),e("el-main",[e("div",{staticClass:"about",domProps:{innerHTML:this._s(this.about)}})])],1)},staticRenderFns:[]};var M=n("VU/8")(k,y,!1,function(t){n("tfxP")},null,null).exports;a.default.use(o.a);var L=new o.a({routes:[{path:"/",name:"Main",component:x},{path:"/about",name:"About",component:M}]}),P=n("zL8q"),R=n.n(P);n("tvR6");a.default.config.productionTip=!1,a.default.use(R.a),new a.default({el:"#app",router:L,components:{App:i},template:"<App/>"})},Ohkc:function(t,e){},QBzL:function(t,e){},mYLK:function(t,e){t.exports={projects:[{name:"Unity3D 热更新脚本",project:[{name:"Scorpio-CSharp",appid:"Scorpio-CSharp",des:"纯c#实现的脚本语言<br>语法类似javascript"}]},{name:"手机软件",project:[{name:"枫月竹阅读",appid:"com.scorpio.reader",des:"小说搜索阅读器"}]},{name:"手机游戏",project:[{name:"扫雷",appid:"com.scorpio.minesweeper",des:"扁平风格经典扫雷"},{name:"是男人就下100层",appid:"com.scorpio.agileman",des:"是男人就下100层"}]},{name:"电脑软件",project:[{name:"ScorpioPackageTool",appid:"ScorpioPackageTool",des:"apk 和 ipa 解析工具"},{name:"ScorpioConversion",appid:"ScorpioConversion",des:"网络协议和Excel表转换工具"},{name:"ScorpioHttpRequester",appid:"ScorpioHttpRequester",des:"模拟发送Http协议的工具"}]},{name:"开源项目 - Unity3D & C#",project:[{name:"ScorpioNet ",appid:"ScorpioNet",des:"网络库"}]},{name:"开源项目 - Java",project:[{name:"Scorpio-Java",appid:"Scorpio-Java",des:"纯java实现的脚本语言<br>语法类似javascript"}]},{name:"开源项目 - C++",project:[{name:"Scorpio-CPP(开发中)",appid:"Scorpio-CPP",des:"纯c++实现的脚本语言<br>语法类似javascript<br>"}]}]}},tfxP:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.68e219b710371ce46daa.js.map