webpackJsonp([58],{nwZn:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("Dd8w"),n=a.n(r),o=a("NYxO"),s={labelCol:{span:24},wrapperCol:{span:24}},i={name:"ConsumableAdd",props:{consumableAddVisiable:{default:!1}},computed:n()({},Object(o.c)({currentUser:function(e){return e.account.user}}),{show:{get:function(){return this.consumableAddVisiable},set:function(){}}}),data:function(){return{formItemLayout:s,form:this.$form.createForm(this),loading:!1}},methods:{reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var e=this;this.form.validateFields(function(t,a){t||(a.publisher=e.currentUser.userId,e.loading=!0,e.$post("/cos/consumable-type",n()({},a)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"新增耗材类型",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[a("template",{slot:"footer"},[a("a-button",{key:"back",on:{click:e.onClose}},[e._v("\n      取消\n    ")]),e._v(" "),a("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("\n      提交\n    ")])],1),e._v(" "),a("a-form",{attrs:{form:e.form,layout:"vertical"}},[a("a-row",{attrs:{gutter:20}},[a("a-col",{attrs:{span:12}},[a("a-form-item",e._b({attrs:{label:"类型名称"}},"a-form-item",e.formItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'name',\n          { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}]})],1)],1),e._v(" "),a("a-col",{attrs:{span:24}},[a("a-form-item",e._b({attrs:{label:"备注消息"}},"a-form-item",e.formItemLayout,!1),[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'content',\n           { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}],attrs:{rows:6}})],1)],1)],1)],1)],2)},staticRenderFns:[]},l=a("VU/8")(i,u,!1,function(e){a("vEY+")},"data-v-0672aae9",null);t.default=l.exports},"vEY+":function(e,t){}});