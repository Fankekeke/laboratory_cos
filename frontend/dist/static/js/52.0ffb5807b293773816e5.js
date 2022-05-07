webpackJsonp([52],{UsTc:function(t,e){},ec4f:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mvHQ"),o=n.n(a),s=n("Dd8w"),r=n.n(s),i=n("NYxO"),c={labelCol:{span:24},wrapperCol:{span:24}},u={name:"comboAdd",props:{comboAddVisiable:{default:!1}},computed:r()({},Object(i.c)({currentUser:function(t){return t.account.user}}),{show:{get:function(){return this.comboAddVisiable},set:function(){}},columns:function(){return[{title:"物品名称",dataIndex:"name",scopedSlots:{customRender:"nameShow"}},{title:"型号",dataIndex:"type",scopedSlots:{customRender:"typeShow"}},{title:"数量",dataIndex:"amount",scopedSlots:{customRender:"amountShow"}},{title:"所属类型",dataIndex:"typeId",width:200,scopedSlots:{customRender:"typeIdShow"}},{title:"单位",dataIndex:"unit",scopedSlots:{customRender:"unitShow"}},{title:"单价",dataIndex:"price",scopedSlots:{customRender:"priceShow"}}]}}),data:function(){return{formItemLayout:c,form:this.$form.createForm(this),loading:!1,dataList:[],consumableType:[]}},mounted:function(){this.getConsumableType()},methods:{getConsumableType:function(){var t=this;this.$get("/cos/consumable-type/list").then(function(e){t.consumableType=e.data.data})},dataAdd:function(){this.dataList.push({name:"",type:"",typeId:"",unit:"",amount:"",price:""})},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var t=this;if(0!==this.dataList.length){var e=0;this.dataList.forEach(function(t){e+=t.price*t.amount}),this.form.validateFields(function(n,a){n||(a.price=e,a.goods=o()(t.dataList),t.loading=!0,t.$post("/cos/combo-info",r()({},a)).then(function(e){t.reset(),t.$emit("success")}).catch(function(){t.loading=!1}))})}else this.$message.warning("请添加记录！")}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"新增实验套餐",maskClosable:!1,placement:"right",closable:!1,visible:t.show,width:1200},on:{close:t.onClose}},[n("a-form",{attrs:{form:t.form,layout:"vertical"}},[n("a-row",{attrs:{gutter:20}},[n("a-col",{attrs:{span:12}},[n("a-form-item",t._b({attrs:{label:"套餐名称"}},"a-form-item",t.formItemLayout,!1),[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入套餐名称!"}]}],expression:"[\n          'name',\n          { rules: [{ required: true, message: '请输入套餐名称!' }] }\n          ]"}]})],1)],1),t._v(" "),n("a-col",{attrs:{span:24}},[n("a-form-item",t._b({attrs:{label:"备注消息"}},"a-form-item",t.formItemLayout,!1),[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入备注消息!"}]}],expression:"[\n          'content',\n           { rules: [{ required: true, message: '请输入备注消息!' }] }\n          ]"}],attrs:{rows:4}})],1)],1),t._v(" "),n("a-col",{attrs:{span:24}},[n("a-table",{attrs:{columns:t.columns,"data-source":t.dataList},scopedSlots:t._u([{key:"nameShow",fn:function(e,a){return[n("a-input",{model:{value:a.name,callback:function(e){t.$set(a,"name",e)},expression:"record.name"}})]}},{key:"typeShow",fn:function(e,a){return[n("a-input",{model:{value:a.type,callback:function(e){t.$set(a,"type",e)},expression:"record.type"}})]}},{key:"typeIdShow",fn:function(e,a){return[n("a-select",{staticStyle:{width:"100%"},model:{value:a.typeId,callback:function(e){t.$set(a,"typeId",e)},expression:"record.typeId"}},t._l(t.consumableType,function(e,a){return n("a-select-option",{key:a,attrs:{value:e.id}},[t._v(t._s(e.name))])}))]}},{key:"unitShow",fn:function(e,a){return[n("a-input",{model:{value:a.unit,callback:function(e){t.$set(a,"unit",e)},expression:"record.unit"}})]}},{key:"amountShow",fn:function(e,a){return[n("a-input-number",{attrs:{min:1,step:1},model:{value:a.amount,callback:function(e){t.$set(a,"amount",e)},expression:"record.amount"}})]}},{key:"priceShow",fn:function(e,a){return[n("a-input-number",{attrs:{min:1},model:{value:a.price,callback:function(e){t.$set(a,"price",e)},expression:"record.price"}})]}}])}),t._v(" "),n("a-button",{staticStyle:{"margin-top":"10px",width:"100%"},attrs:{type:"primary",ghost:"",size:"large"},on:{click:t.dataAdd}},[t._v("\n          新增物品\n        ")])],1)],1)],1),t._v(" "),n("div",{staticClass:"drawer-bootom-button"},[n("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:t.onClose}},[n("a-button",{staticStyle:{"margin-right":".8rem"}},[t._v("取消")])],1),t._v(" "),n("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},staticRenderFns:[]},d=n("VU/8")(u,l,!1,function(t){n("UsTc")},"data-v-244a29fe",null);e.default=d.exports}});