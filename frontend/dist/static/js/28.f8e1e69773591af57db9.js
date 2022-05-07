webpackJsonp([28],{"7oZd":function(t,e){},"9BJc":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),a=o.n(n),s=o("Dd8w"),i=o.n(s),r=o("NYxO"),c={labelCol:{span:24},wrapperCol:{span:24}},u={name:"requestAdd",props:{requestAddVisiable:{default:!1}},computed:i()({},Object(r.c)({currentUser:function(t){return t.account.user}}),{show:{get:function(){return this.requestAddVisiable},set:function(){}},columns:function(){return[{title:"物品名称",dataIndex:"name",scopedSlots:{customRender:"nameShow"}},{title:"型号",dataIndex:"type",scopedSlots:{customRender:"typeShow"}},{title:"数量",dataIndex:"amount",scopedSlots:{customRender:"amountShow"}},{title:"所属类型",dataIndex:"typeId",width:200,scopedSlots:{customRender:"typeIdShow"}},{title:"单位",dataIndex:"unit",scopedSlots:{customRender:"unitShow"}},{title:"单价",dataIndex:"price",scopedSlots:{customRender:"priceShow"}}]}}),data:function(){return{formItemLayout:c,form:this.$form.createForm(this),loading:!1,dataList:[],consumableType:[],comboList:[],comboNum:""}},mounted:function(){this.getConsumableType(),this.getComboData()},methods:{handleChange:function(t){var e=this;""!==t&&this.$get("/cos/goods-belong/getGoodsByNum",{num:t}).then(function(t){e.dataList=t.data.data})},getComboData:function(){var t=this;this.$get("/cos/combo-info/list").then(function(e){t.comboList=e.data.data})},getConsumableType:function(){var t=this;this.$get("/cos/consumable-type/list").then(function(e){t.consumableType=e.data.data})},dataAdd:function(){this.dataList.push({name:"",type:"",typeId:"",unit:"",amount:"",price:""})},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var t=this;if(0!==this.dataList.length){var e=0;this.dataList.forEach(function(t){e+=t.price*t.amount}),this.form.validateFields(function(o,n){o||(n.price=e,n.userId=t.currentUser.userId,n.goods=a()(t.dataList),t.loading=!0,t.$post("/cos/goods-request",i()({},n)).then(function(e){t.reset(),t.$emit("success")}).catch(function(){t.loading=!1}))})}else this.$message.warning("请添加记录！")}}},l={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"新增耗材申请",maskClosable:!1,placement:"right",closable:!1,visible:t.show,width:1200},on:{close:t.onClose}},[o("a-form",{attrs:{form:t.form,layout:"vertical"}},[o("a-row",{attrs:{gutter:20}},[o("a-col",{attrs:{span:12}},[o("a-form-item",t._b({attrs:{label:"选择套餐"}},"a-form-item",t.formItemLayout,!1),[o("a-select",{staticStyle:{width:"100%"},on:{change:t.handleChange},model:{value:t.comboNum,callback:function(e){t.comboNum=e},expression:"comboNum"}},t._l(t.comboList,function(e,n){return o("a-select-option",{key:n,attrs:{value:e.code}},[t._v(t._s(e.name))])}))],1)],1),t._v(" "),o("a-col",{attrs:{span:24}},[o("a-form-item",t._b({attrs:{label:"备注消息"}},"a-form-item",t.formItemLayout,!1),[o("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入备注消息!"}]}],expression:"[\n          'content',\n           { rules: [{ required: true, message: '请输入备注消息!' }] }\n          ]"}],attrs:{rows:4}})],1)],1),t._v(" "),o("a-col",{attrs:{span:24}},[o("a-table",{attrs:{columns:t.columns,"data-source":t.dataList},scopedSlots:t._u([{key:"nameShow",fn:function(e,n){return[o("a-input",{model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"record.name"}})]}},{key:"typeShow",fn:function(e,n){return[o("a-input",{model:{value:n.type,callback:function(e){t.$set(n,"type",e)},expression:"record.type"}})]}},{key:"typeIdShow",fn:function(e,n){return[o("a-select",{staticStyle:{width:"100%"},model:{value:n.typeId,callback:function(e){t.$set(n,"typeId",e)},expression:"record.typeId"}},t._l(t.consumableType,function(e,n){return o("a-select-option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])}))]}},{key:"unitShow",fn:function(e,n){return[o("a-input",{model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"record.unit"}})]}},{key:"amountShow",fn:function(e,n){return[o("a-input-number",{attrs:{min:1,step:1},model:{value:n.amount,callback:function(e){t.$set(n,"amount",e)},expression:"record.amount"}})]}},{key:"priceShow",fn:function(e,n){return[o("a-input-number",{attrs:{min:1},model:{value:n.price,callback:function(e){t.$set(n,"price",e)},expression:"record.price"}})]}}])}),t._v(" "),o("a-button",{staticStyle:{"margin-top":"10px",width:"100%"},attrs:{type:"primary",ghost:"",size:"large"},on:{click:t.dataAdd}},[t._v("\n          新增物品\n        ")])],1)],1)],1),t._v(" "),o("div",{staticClass:"drawer-bootom-button"},[o("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:t.onClose}},[o("a-button",{staticStyle:{"margin-right":".8rem"}},[t._v("取消")])],1),t._v(" "),o("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},staticRenderFns:[]},d=o("VU/8")(u,l,!1,function(t){o("7oZd")},"data-v-814e1844",null);e.default=d.exports}});