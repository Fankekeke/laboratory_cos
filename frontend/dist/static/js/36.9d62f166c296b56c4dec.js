webpackJsonp([36],{MMQK:function(t,e){},SPuR:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("mvHQ"),a=o.n(n),i=o("fZjL"),s=o.n(i),r=o("+6Bu"),c=o.n(r),u=o("Dd8w"),d=o.n(u),l=o("NYxO"),m={labelCol:{span:24},wrapperCol:{span:24}},p={name:"comboEdit",props:{comboEditVisiable:{default:!1},comboData:{type:Object}},computed:d()({},Object(l.c)({currentUser:function(t){return t.account.user}}),{show:{get:function(){return this.comboEditVisiable},set:function(){}},columns:function(){return[{title:"物品名称",dataIndex:"name",scopedSlots:{customRender:"nameShow"}},{title:"型号",dataIndex:"type",scopedSlots:{customRender:"typeShow"}},{title:"数量",dataIndex:"amount",scopedSlots:{customRender:"amountShow"}},{title:"所属类型",dataIndex:"typeId",width:200,scopedSlots:{customRender:"typeIdShow"}},{title:"单位",dataIndex:"unit",scopedSlots:{customRender:"unitShow"}},{title:"单价",dataIndex:"price",scopedSlots:{customRender:"priceShow"}}]}}),data:function(){return{formItemLayout:m,form:this.$form.createForm(this),loading:!1,dataList:[],consumableType:[]}},watch:{comboEditVisiable:function(t){t&&this.getGoodsByNum(this.comboData.code)}},mounted:function(){this.getConsumableType()},methods:{getGoodsByNum:function(t){var e=this;this.$get("/cos/goods-belong/getGoodsByNum",{num:t}).then(function(t){e.dataList=t.data.data})},getConsumableType:function(){var t=this;this.$get("/cos/consumable-type/list").then(function(e){t.consumableType=e.data.data})},dataAdd:function(){this.dataList.push({name:"",type:"",typeId:"",unit:"",amount:"",price:""})},setFormValues:function(t){var e=this,o=c()(t,[]);this.rowId=o.id;var n=["name","content"],a={};s()(o).forEach(function(t){-1!==n.indexOf(t)&&(e.form.getFieldDecorator(t),a[t]=o[t])}),this.form.setFieldsValue(a)},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var t=this;if(0!==this.dataList.length){var e=0;this.dataList.forEach(function(t){e+=t.price*t.amount}),this.form.validateFields(function(o,n){o||(n.price=e,n.id=t.comboData.id,n.code=t.comboData.code,n.goods=a()(t.dataList),t.loading=!0,t.$put("/cos/combo-info",d()({},n)).then(function(e){t.reset(),t.$emit("success")}).catch(function(){t.loading=!1}))})}else this.$message.warning("请添加记录！")}}},f={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:"修改实验套餐",maskClosable:!1,placement:"right",closable:!1,visible:t.show,width:1200},on:{close:t.onClose}},[o("a-form",{attrs:{form:t.form,layout:"vertical"}},[o("a-row",{attrs:{gutter:20}},[o("a-col",{attrs:{span:12}},[o("a-form-item",t._b({attrs:{label:"套餐名称"}},"a-form-item",t.formItemLayout,!1),[o("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入套餐名称!"}]}],expression:"[\n          'name',\n          { rules: [{ required: true, message: '请输入套餐名称!' }] }\n          ]"}]})],1)],1),t._v(" "),o("a-col",{attrs:{span:24}},[o("a-form-item",t._b({attrs:{label:"备注消息"}},"a-form-item",t.formItemLayout,!1),[o("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入备注消息!"}]}],expression:"[\n          'content',\n           { rules: [{ required: true, message: '请输入备注消息!' }] }\n          ]"}],attrs:{rows:4}})],1)],1),t._v(" "),o("a-col",{attrs:{span:24}},[o("a-table",{attrs:{columns:t.columns,"data-source":t.dataList},scopedSlots:t._u([{key:"nameShow",fn:function(e,n){return[o("a-input",{model:{value:n.name,callback:function(e){t.$set(n,"name",e)},expression:"record.name"}})]}},{key:"typeShow",fn:function(e,n){return[o("a-input",{model:{value:n.type,callback:function(e){t.$set(n,"type",e)},expression:"record.type"}})]}},{key:"typeIdShow",fn:function(e,n){return[o("a-select",{staticStyle:{width:"100%"},model:{value:n.typeId,callback:function(e){t.$set(n,"typeId",e)},expression:"record.typeId"}},t._l(t.consumableType,function(e,n){return o("a-select-option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])}))]}},{key:"unitShow",fn:function(e,n){return[o("a-input",{model:{value:n.unit,callback:function(e){t.$set(n,"unit",e)},expression:"record.unit"}})]}},{key:"amountShow",fn:function(e,n){return[o("a-input-number",{attrs:{min:1,step:1},model:{value:n.amount,callback:function(e){t.$set(n,"amount",e)},expression:"record.amount"}})]}},{key:"priceShow",fn:function(e,n){return[o("a-input-number",{attrs:{min:1},model:{value:n.price,callback:function(e){t.$set(n,"price",e)},expression:"record.price"}})]}}])}),t._v(" "),o("a-button",{staticStyle:{"margin-top":"10px",width:"100%"},attrs:{type:"primary",ghost:"",size:"large"},on:{click:t.dataAdd}},[t._v("\n          新增物品\n        ")])],1)],1)],1),t._v(" "),o("div",{staticClass:"drawer-bootom-button"},[o("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:t.onClose}},[o("a-button",{staticStyle:{"margin-right":".8rem"}},[t._v("取消")])],1),t._v(" "),o("a-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("提交")])],1)],1)},staticRenderFns:[]},h=o("VU/8")(p,f,!1,function(t){o("MMQK")},"data-v-60fc6193",null);e.default=h.exports}});