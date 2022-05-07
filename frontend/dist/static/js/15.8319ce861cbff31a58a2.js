webpackJsonp([15,39],{O3Oa:function(t,e){},XbHC:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),o=a.n(n),i=a("JpjP"),s=a("hiv3"),r=a("NYxO"),c=a("PJh5");a.n(c).a.locale("zh-cn");var l={name:"request",components:{RecordView:s.default,RangeDate:i.a},data:function(){return{advanced:!1,requestAdd:{visiable:!1},requestEdit:{visiable:!1},recordView:{visiable:!1,data:null},queryParams:{},filteredInfo:null,sortedInfo:null,paginationInfo:null,dataSource:[],selectedRowKeys:[],loading:!1,pagination:{pageSizeOptions:["10","20","30","40","100"],defaultCurrent:1,defaultPageSize:10,showQuickJumper:!0,showSizeChanger:!0,showTotal:function(t,e){return"显示 "+e[0]+" ~ "+e[1]+" 条记录，共 "+t+" 条记录"}},userList:[]}},computed:o()({},Object(r.c)({currentUser:function(t){return t.account.user}}),{columns:function(){return[{title:"入库单号",dataIndex:"num"},{title:"总价",dataIndex:"price",customRender:function(t,e,a){return null!==t?"￥"+t.toFixed(2):"- -"}},{title:"保管人",dataIndex:"custodian",customRender:function(t,e,a){return null!==t?t:"- -"}},{title:"入库人",dataIndex:"putUser",customRender:function(t,e,a){return null!==t?t:"- -"}},{title:"备注",dataIndex:"content",customRender:function(t,e,a){return null!==t?t:"- -"}},{title:"入库时间",dataIndex:"createDate",customRender:function(t,e,a){return null!==t?t:"- -"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}]}}),mounted:function(){this.fetch()},methods:{view:function(t){this.recordView.data=t,this.recordView.visiable=!0},handlerecordViewClose:function(){this.recordView.visiable=!1},onSelectChange:function(t){this.selectedRowKeys=t},toggleAdvanced:function(){this.advanced=!this.advanced},add:function(){this.requestAdd.visiable=!0},handleRequestAddClose:function(){this.requestAdd.visiable=!1},handleRequestAddSuccess:function(){this.requestAdd.visiable=!1,this.$message.success("入库成功"),this.search()},handleDeptChange:function(t){this.queryParams.deptId=t||""},batchDelete:function(){if(this.selectedRowKeys.length){var t=this;this.$confirm({title:"确定删除所选中的记录?",content:"当您点击确定按钮后，这些记录将会被彻底删除",centered:!0,onOk:function(){var e=t.selectedRowKeys.join(",");t.$delete("/cos/stock-put/"+e).then(function(){t.$message.success("删除成功"),t.selectedRowKeys=[],t.search()})},onCancel:function(){t.selectedRowKeys=[]}})}else this.$message.warning("请选择需要删除的记录")},search:function(){var t=this.sortedInfo,e=this.filteredInfo,a=void 0,n=void 0;t&&(a=t.field,n=t.order),this.fetch(o()({sortField:a,sortOrder:n},this.queryParams,e))},reset:function(){this.selectedRowKeys=[],this.$refs.TableInfo.pagination.current=this.pagination.defaultCurrent,this.paginationInfo&&(this.paginationInfo.current=this.pagination.defaultCurrent,this.paginationInfo.pageSize=this.pagination.defaultPageSize),this.filteredInfo=null,this.sortedInfo=null,this.queryParams={},this.fetch()},handleTableChange:function(t,e,a){this.paginationInfo=t,this.filteredInfo=e,this.sortedInfo=a,this.fetch(o()({sortField:a.field,sortOrder:a.order},this.queryParams,e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,this.paginationInfo?(this.$refs.TableInfo.pagination.current=this.paginationInfo.current,this.$refs.TableInfo.pagination.pageSize=this.paginationInfo.pageSize,e.size=this.paginationInfo.pageSize,e.current=this.paginationInfo.current):(e.size=this.pagination.defaultPageSize,e.current=this.pagination.defaultCurrent),this.$get("/cos/stock-put/page",o()({},e)).then(function(e){var a=e.data.data,n=o()({},t.pagination);n.total=a.total,t.dataSource=a.records,t.pagination=n,t.loading=!1})}},watch:{}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[a("div",{class:t.advanced?"search":null},[a("a-form",{attrs:{layout:"horizontal"}},[a("a-row",{attrs:{gutter:15}},[a("div",{class:t.advanced?null:"fold"},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"入库单号",labelCol:{span:4},wrapperCol:{span:18,offset:2}}},[a("a-input",{model:{value:t.queryParams.num,callback:function(e){t.$set(t.queryParams,"num",e)},expression:"queryParams.num"}})],1)],1),t._v(" "),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"保管人",labelCol:{span:4},wrapperCol:{span:18,offset:2}}},[a("a-input",{model:{value:t.queryParams.custodian,callback:function(e){t.$set(t.queryParams,"custodian",e)},expression:"queryParams.custodian"}})],1)],1),t._v(" "),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"入库人",labelCol:{span:4},wrapperCol:{span:18,offset:2}}},[a("a-input",{model:{value:t.queryParams.putUser,callback:function(e){t.$set(t.queryParams,"putUser",e)},expression:"queryParams.putUser"}})],1)],1)],1),t._v(" "),a("span",{staticStyle:{float:"right","margin-top":"3px"}},[a("a-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),t._v(" "),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.reset}},[t._v("重置")])],1)])],1)],1),t._v(" "),a("div",[a("div",{staticClass:"operator"},[a("a-button",{on:{click:t.batchDelete}},[t._v("删除")])],1),t._v(" "),a("a-table",{ref:"TableInfo",attrs:{columns:t.columns,rowKey:function(t){return t.id},dataSource:t.dataSource,pagination:t.pagination,loading:t.loading,rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.onSelectChange},scroll:{x:900}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"titleShow",fn:function(e,n){return[[a("a-badge",{attrs:{status:"processing"}}),t._v(" "),a("a-tooltip",[a("template",{slot:"title"},[t._v("\n                "+t._s(n.title)+"\n              ")]),t._v("\n              "+t._s(n.title.slice(0,8))+" ...\n            ")],2)]]}},{key:"contentShow",fn:function(e,n){return[[a("a-tooltip",[a("template",{slot:"title"},[t._v("\n                "+t._s(n.content)+"\n              ")]),t._v("\n              "+t._s(n.content.slice(0,30))+" ...\n            ")],2)]]}},{key:"operation",fn:function(e,n){return[a("a-icon",{attrs:{type:"folder-open",title:"查 看"},on:{click:function(e){t.view(n)}}})]}}])}),t._v(" "),a("record-view",{attrs:{recordShow:t.recordView.visiable,recordData:t.recordView.data},on:{close:t.handlerecordViewClose}})],1)])},staticRenderFns:[]},u=a("VU/8")(l,d,!1,function(t){a("oY6f")},"data-v-597346f9",null);e.default=u.exports},hiv3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("PJh5");a.n(n).a.locale("zh-cn");var o={name:"RecordView",props:{recordShow:{type:Boolean,default:!1},recordData:{type:Object}},computed:{show:{get:function(){return this.recordShow},set:function(){}},columns:function(){return[{title:"物品名称",dataIndex:"name"},{title:"型号",dataIndex:"type"},{title:"数量",dataIndex:"amount"},{title:"所属类型",dataIndex:"consumableName"},{title:"单位",dataIndex:"unit"},{title:"单价",dataIndex:"price"}]}},data:function(){return{loading:!1,goodsList:[]}},watch:{recordShow:function(t){t&&this.getGoodsByNum(this.recordData.num)}},methods:{getGoodsByNum:function(t){var e=this;this.$get("/cos/goods-belong/getGoodsByNum",{num:t}).then(function(t){e.goodsList=t.data.data})},onClose:function(){this.$emit("close")}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",{attrs:{title:"入库详情",width:800},on:{cancel:t.onClose},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",attrs:{type:"danger"},on:{click:t.onClose}},[t._v("\n      关闭\n    ")])],1),t._v(" "),null!==t.recordData?a("div",{staticStyle:{"font-size":"13px"}},[a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{staticStyle:{"margin-bottom":"15px"}},[a("span",{staticStyle:{"font-size":"15px","font-weight":"650",color:"#000c17"}},[t._v("基础信息")])]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("入库单号：")]),t._v("\n        "+t._s(null!==t.recordData.num?t.recordData.num:"- -")+"\n      ")]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("价 格：")]),t._v("\n        "+t._s(t.recordData.price)+" 元\n      ")]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("保管人：")]),t._v("\n        "+t._s(t.recordData.custodian)+"\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"}},[a("a-col",{attrs:{span:8}},[a("b",[t._v("入库时间：")]),t._v("\n        "+t._s(null!==t.recordData.createDate?t.recordData.createDate:"- -")+"\n      ")]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("入库人：")]),t._v("\n        "+t._s(t.recordData.putUser)+"\n      ")]),t._v(" "),a("a-col",{attrs:{span:8}},[a("b",[t._v("备 注：")]),t._v("\n        "+t._s(t.recordData.content)+"\n      ")])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("a-row",{staticStyle:{"padding-left":"24px","padding-right":"24px"},attrs:{gutter:15}},[a("a-col",{staticStyle:{"margin-bottom":"15px"}},[a("span",{staticStyle:{"font-size":"15px","font-weight":"650",color:"#000c17"}},[t._v("耗材详情")])]),t._v(" "),a("a-col",{attrs:{span:24}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.goodsList}})],1)],1)],1):t._e()],2)},staticRenderFns:[]},s=a("VU/8")(o,i,!1,function(t){a("O3Oa")},"data-v-55edb20d",null);e.default=s.exports},oY6f:function(t,e){}});