webpackJsonp([32],{Dpp8:function(t,e){},"P/W+":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mvHQ"),o=a.n(n),s=a("Dd8w"),i=a.n(s),r=a("NYxO"),u={labelCol:{span:24},wrapperCol:{span:24}},c={name:"StockOut",props:{stockoutVisiable:{default:!1},stockoutData:{type:Array}},computed:i()({},Object(r.c)({currentUser:function(t){return t.account.user}}),{show:{get:function(){return this.stockoutVisiable},set:function(){}},columns:function(){return[{title:"物品名称",dataIndex:"name",scopedSlots:{customRender:"nameShow"}},{title:"型号",dataIndex:"type",scopedSlots:{customRender:"typeShow"}},{title:"数量",dataIndex:"amount",scopedSlots:{customRender:"amountShow"}},{title:"所属类型",dataIndex:"typeId",width:200,scopedSlots:{customRender:"typeIdShow"}},{title:"单位",dataIndex:"unit",scopedSlots:{customRender:"unitShow"}},{title:"单价",dataIndex:"price",scopedSlots:{customRender:"priceShow"}}]}}),data:function(){return{formItemLayout:u,form:this.$form.createForm(this),loading:!1,dataList:[],consumableType:[],studentList:[]}},watch:{stockoutVisiable:function(t){t&&(this.dataList=this.stockoutData)}},mounted:function(){this.getConsumableType(),this.getStudentList()},methods:{getStudentList:function(){var t=this;this.$get("/cos/student-info/list").then(function(e){t.studentList=e.data.data})},getConsumableType:function(){var t=this;this.$get("/cos/consumable-type/list").then(function(e){t.consumableType=e.data.data})},dataAdd:function(){this.dataList.push({name:"",type:"",typeId:"",unit:"",amount:"",price:""})},reset:function(){this.loading=!1,this.dataList=[],this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var t=this;if(0!==this.dataList.length){var e=0;this.dataList.forEach(function(t){e+=t.price*t.amount}),this.form.validateFields(function(a,n){a||(n.price=e,n.goods=o()(t.dataList),t.loading=!0,t.$post("/cos/stock-out/stockOut",i()({},n)).then(function(e){t.reset(),t.$emit("success")}).catch(function(){t.loading=!1}))})}else this.$message.warning("添加出库记录")}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"出库",maskClosable:!1,placement:"right",closable:!1,visible:t.show,width:1200},on:{close:t.onClose}},[a("a-form",{attrs:{form:t.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("a-form-item",t._b({attrs:{label:"出库对象"}},"a-form-item",t.formItemLayout,!1),[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["userId",{rules:[{required:!0,message:"请输入出库对象!"}]}],expression:"[\n              'userId',\n              { rules: [{ required: true, message: '请输入出库对象!' }] }\n              ]"}],staticStyle:{width:"100%"}},t._l(t.studentList,function(e,n){return a("a-select-option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",t._b({attrs:{label:"保管员"}},"a-form-item",t.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["custodian",{rules:[{required:!0,message:"请输入保管员!"}]}],expression:"[\n            'custodian',\n            { rules: [{ required: true, message: '请输入保管员!' }] }\n            ]"}]})],1)],1),t._v(" "),a("a-col",{attrs:{span:12}},[a("a-form-item",t._b({attrs:{label:"经手人"}},"a-form-item",t.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["handler",{rules:[{required:!0,message:"请输入经手人!"}]}],expression:"[\n            'handler',\n            { rules: [{ required: true, message: '请输入经手人!' }] }\n            ]"}]})],1)],1),t._v(" "),a("a-col",{attrs:{span:24}},[a("a-table",{attrs:{columns:t.columns,"data-source":t.dataList},scopedSlots:t._u([{key:"nameShow",fn:function(e,n){return[a("a-input",{model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"record.name"}})]}},{key:"typeShow",fn:function(e,n){return[a("a-input",{model:{value:n.type,callback:function(e){t.$set(n,"type",e)},expression:"record.type"}})]}},{key:"typeIdShow",fn:function(e,n){return[a("a-select",{staticStyle:{width:"100%"},model:{value:n.typeId,callback:function(e){t.$set(n,"typeId",e)},expression:"record.typeId"}},t._l(t.consumableType,function(e,n){return a("a-select-option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])}))]}},{key:"unitShow",fn:function(e,n){return[a("a-input",{model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"record.unit"}})]}},{key:"amountShow",fn:function(e,n){return[a("a-input-number",{attrs:{min:1,max:void 0!==n.max?n.max:999999,step:1},model:{value:n.amount,callback:function(e){t.$set(n,"amount",e)},expression:"record.amount"}})]}},{key:"priceShow",fn:function(e,n){return[a("a-input-number",{attrs:{min:1},model:{value:n.price,callback:function(e){t.$set(n,"price",e)},expression:"record.price"}})]}}])})],1)],1)],1),t._v(" "),a("div",{staticClass:"drawer-bootom-button"},[a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:t.onClose}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[t._v("取消")])],1),t._v(" "),a("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},staticRenderFns:[]},d=a("VU/8")(c,l,!1,function(t){a("Dpp8")},"data-v-67a9bb7b",null);e.default=d.exports}});