"use strict";(self["webpackChunkcbn_magazine"]=self["webpackChunkcbn_magazine"]||[]).push([[838],{1838:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"keyword",style:{backgroundColor:"authors"==t.type?"#f6f6f6":"#fff"}},[t.keyword[0]?s("div",{staticClass:"authors-top",style:{backgroundColor:"authors"==t.type?"#f6f6f6":""}},[s("img",{attrs:{src:e(6248)},on:{click:t.goBack}}),"authors"==t.type?s("div",[t._v(t._s(t.keyword[0].authors[t.index].name))]):t._e(),"topics"==t.type?s("div",[t._v(t._s(t.keyword[0].topics[0].name))]):t._e()]):t._e(),s("div",["authors"==t.type&&t.keyword[0]?s("div",{staticClass:"authors"},[s("div",{staticClass:"personal"},[s("div",{staticClass:"personal-top"},[s("div",{staticClass:"personal-top-left"},[s("div",{staticClass:"name"},[t._v(t._s(t.keyword[0].authors[t.index].name))]),s("div",{staticClass:"frequency"},[s("div",[t._v(" "+t._s(t.keyword[0].authors[t.index].articles_count+"篇文章")+" ")]),s("div",{staticClass:"line"},[t._v("|")]),s("div",[t._v(t._s("关注"))])]),s("wd-button",{staticClass:"follow",attrs:{size:"small"}},[t._v("关注")])],1),s("img",{staticClass:"head-portrait",attrs:{src:t.keyword[0].authors[t.index].avatar}})]),s("div",{staticClass:"personal-bottom"},[s("div",[t._v(t._s(t.keyword[0].authors[t.index].introduction))])])])]):t._e(),"topics"==t.type&&t.keyword[0]?s("div",{staticClass:"topics"},[s("div",[s("div",{staticClass:"name"},[t._v(t._s(t.keyword[0].topics[0].name))]),s("div",{staticClass:"frequency"},[s("div",[t._v(t._s(t.keyword[0].topics[0].articles_count+"篇文章"))]),s("div",{staticClass:"line"},[t._v("|")]),s("div",[t._v(t._s("354人关注"))])])]),s("wd-button",{staticClass:"follow",attrs:{size:"small"}},[t._v("关注")])],1):t._e(),"columns"==t.type&&t.keyword[0]?s("div",{staticClass:"topics"},[s("div",[s("div",{staticClass:"name"},[t._v(t._s(t.keyword[0].column.name))]),s("div",{staticClass:"frequency"},[s("div",[t._v(t._s(t.keyword[0].column.articles_count+"篇文章"))]),s("div",{staticClass:"line"},[t._v("|")]),s("div",[t._v(t._s("666人关注"))])])]),s("wd-button",{staticClass:"follow",attrs:{size:"small"}},[t._v("关注")])],1):t._e(),s("div",{staticClass:"news"},[s("ul",t._l(t.keyword,(function({title:e,cover_url:i,id:a}){return s("li",{key:a,on:{click:function(s){return t.goToHomeArticle(a)}}},[s("div",{staticClass:"show-pic"},[s("img",{staticClass:"cover-url",attrs:{src:i}}),s("img",{attrs:{src:""}})]),s("span",[t._v(t._s(e))])])})),0)])])])},a=[],o=(e(7658),{data(){return{type:this.$route.query.keyword_type,id:this.$route.query.keyword_id,index:0,keyword:{}}},watch:{"$route.query.keyword_id"(t){this.id=t},"$route.query.keyword_type"(t){this.type=t},id(t,s){t!=s&&void 0!=t&&this.getKeywordArticle()}},created(){this.getKeywordArticle()},methods:{goBack(){this.$router.go(-1),this.keyword={}},getKeywordArticle(){this.$axios.get(`http://api2021.cbnweek.com/v4/${this.type}/${this.id}/articles?page=1&per=20`).then((({data:t})=>{this.keyword=t,this.authorsIndex()}))},authorsIndex(){this.index=this.keyword[0].authors.findIndex((({id:t})=>t==this.id))},goToHomeArticle(t){this.$router.push(`/article?article_id=${t}`)}}}),r=o,c=e(1001),d=(0,c.Z)(r,i,a,!1,null,"18393b9a",null),l=d.exports},6248:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABFCAYAAAAmXZRaAAACMklEQVRoQ83aMU/CQBQH8PdKdDGBtEJc1H4G/QYaEzdnFweNm4uDq5ubk4mbkbg5G0eNfgL5DIKTWloQokakZ8BgADla2nf3rluby/WXe9em/echGHogp8vJuwcAYr9jCBGOa6+Vk56HC2Y5s+4ZWLAzsDBheORXnw471zhgo1EAIAS0Aq88AwAt7TCn4BYBYFu2hb4+PueazecXrbAolBDiOvAqG1pLGQNVwrC54vv+my6YdE/1yimEKEG7sRoEQV3XU5kIpXrFEqNUwlKhVMFSo1TASFDUMDIUJYwURQUjR1HAlKDSwpSh0sCUopLClKOSwLSgJoVpQ00C04qKC9OOigNjQUXB2FDjYKwoGYwdNQpmBGoYZgyqH2YUqgczDtWF2QX3FAH2ZFnCqJ9R2VjK6+gUXDEG9SC+rbVa7bFGedM4c42FgYBz3yvvxpmIegzaefcSETalEzPh0LbtHGSy94iwZBKum49ls/NOZtq6QcRlKS6Eol/tllW6JynL+RfcmYYbSBRNwv2LOk3BjcxgTcBJw2Fu3NjUmhMXGadz4SJhXO+5WDAOXGyYbtxEMJ24iWG6cIlgOnCJYapxqWAqcalhqnAkMBU4Mhg1jhRGiSOHUeGUwChwymBpcUphaXDKYUlxWmDxcUy9PVGf6ay9Pb+4zK0sK2Hp7ellGzIcS2/PcOCSyy3a1hRcIGK3yUgIcRXA+xZ4XqNzrm3zy5Igx1lYb6PVqlfLd/1j2GEy8A/FfkpkIv+MpwAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=838.bfab6fde.js.map