webpackJsonp([48],{QLZW:function(t,e){},lWQZ:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("PJh5");a.n(s).a.locale("zh-cn");var n={name:"requestView",props:{requestShow:{type:Boolean,default:!1},requestData:{type:Object}},computed:{show:{get:function(){return this.requestShow},set:function(){}},columns:function(){return[{title:"物品名称",dataIndex:"name"},{title:"型号",dataIndex:"type"},{title:"数量",dataIndex:"amount"},{title:"所属类型",dataIndex:"consumableName"},{title:"单位",dataIndex:"unit"},{title:"单价",dataIndex:"price"}]}},data:function(){return{loading:!1,goodsList:[],current:0,currentText:"审核结果"}},watch:{requestShow:function(t){t&&(0===this.requestData.step&&(this.current=1),1===this.requestData.step&&(this.current=2,this.currentText="审核完成"),2===this.requestData.step&&(this.current=2,this.currentText="审核驳回"),this.getGoodsByNum(this.requestData.num))}},methods:{getGoodsByNum:function(t){var e=this;this.$get("/cos/goods-belong/getGoodsByNum",{num:t}).then(function(t){e.goodsList=t.data.data})},onClose:function(){this.$emit("close")}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"耗材申请信息",width:800},on:{cancel:t.onClose},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",attrs:{type:"danger"},on:{click:t.onClose}},[t._v("\n      关闭\n    ")])],1),t._v(" "),null!==t.requestData?a("div",{staticStyle:{"font-size":"13px"}},[a("div",{staticStyle:{"padding-left":"24px","padding-right":"24px","margin-bottom":"50px","margin-top":"50px"}},[a("a-steps",{attrs:{current:t.current,"progress-dot":"",size:"small"}},[a("a-step",{attrs:{title:"已提交"}}),t._v(" "),a("a-step",{attrs:{title:"正在审核"}}),t._v(" "),a("a-step",{attrs:{title:t.currentText}})],1)],1),t._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{staticStyle:{"margin-bottom":"15px"}},[a("span",{staticStyle:{"font-size":"15px","font-weight":"650",color:"#000c17"}},[t._v("基础信息")])]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("采购单：")]),t._v("\n        "+t._s(t.requestData.num)+"\n      ")]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("申请人：")]),t._v("\n        "+t._s(t.requestData.name)+"\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{attrs:{span:8}},[a("b",[t._v("当前状态：")]),t._v(" "),0==t.requestData.step?a("span",[t._v("正在审核")]):t._e(),t._v(" "),1==t.requestData.step?a("span",[t._v("审核成功")]):t._e(),t._v(" "),2==t.requestData.step?a("span",[t._v("驳 回")]):t._e()]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("备注信息：")]),t._v("\n        "+t._s(t.requestData.content)+"\n      ")]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("申请时间：")]),t._v("\n        "+t._s(t.requestData.createDate)+"\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"},attrs:{gutter:15}},[a("a-col",{staticStyle:{"margin-bottom":"15px"}},[a("span",{staticStyle:{"font-size":"15px","font-weight":"650",color:"#000c17"}},[t._v("耗材详情")])]),t._v(" "),a("a-col",{attrs:{span:24}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.goodsList}})],1)],1)],1):t._e()],2)},staticRenderFns:[]},r=a("VU/8")(n,o,!1,function(t){a("QLZW")},"data-v-2ec54d29",null);e.default=r.exports}});