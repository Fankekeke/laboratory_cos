webpackJsonp([47],{"25Us":function(e,t){},CU06:function(e,t,r){"use strict";function a(e){return new m.a(function(t,r){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return r(e)}})}Object.defineProperty(t,"__esModule",{value:!0});var n=r("Xxa5"),i=r.n(n),s=r("exGp"),o=r.n(s),l=r("Dd8w"),u=r.n(l),c=r("//Fk"),m=r.n(c),d=r("NYxO"),f={labelCol:{span:24},wrapperCol:{span:24}},p={name:"BulletinAdd",props:{bulletinAddVisiable:{default:!1}},computed:u()({},Object(d.c)({currentUser:function(e){return e.account.user}}),{show:{get:function(){return this.bulletinAddVisiable},set:function(){}}}),data:function(){return{formItemLayout:f,form:this.$form.createForm(this),loading:!1,fileList:[],previewVisible:!1,previewImage:""}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){var t=this;return o()(i.a.mark(function r(){return i.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(e.url||e.preview){r.next=4;break}return r.next=3,a(e.originFileObj);case 3:e.preview=r.sent;case 4:t.previewImage=e.url||e.preview,t.previewVisible=!0;case 6:case"end":return r.stop()}},r,t)}))()},picHandleChange:function(e){var t=e.fileList;this.fileList=t},reset:function(){this.loading=!1,this.form.resetFields()},onClose:function(){this.reset(),this.$emit("close")},handleSubmit:function(){var e=this,t=[];this.fileList.forEach(function(e){t.push(e.response)}),this.form.validateFields(function(r,a){a.images=t.length>0?t.join(","):null,r||(a.publisher=e.currentUser.userId,e.loading=!0,e.$post("/cos/bulletin-info",u()({},a)).then(function(t){e.reset(),e.$emit("success")}).catch(function(){e.loading=!1}))})}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:"新增公告",width:800},on:{cancel:e.onClose},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("template",{slot:"footer"},[r("a-button",{key:"back",on:{click:e.onClose}},[e._v("\n      取消\n    ")]),e._v(" "),r("a-button",{key:"submit",attrs:{type:"primary",loading:e.loading},on:{click:e.handleSubmit}},[e._v("\n      提交\n    ")])],1),e._v(" "),r("a-form",{attrs:{form:e.form,layout:"vertical"}},[r("a-row",{attrs:{gutter:20}},[r("a-col",{attrs:{span:12}},[r("a-form-item",e._b({attrs:{label:"公告标题"}},"a-form-item",e.formItemLayout,!1),[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["title",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'title',\n          { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}]})],1)],1),e._v(" "),r("a-col",{attrs:{span:12}},[r("a-form-item",e._b({attrs:{label:"上传人"}},"a-form-item",e.formItemLayout,!1),[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["publisher",{rules:[{required:!0,message:"请输入上传人!"}]}],expression:"[\n          'publisher',\n          { rules: [{ required: true, message: '请输入上传人!' }] }\n          ]"}]})],1)],1),e._v(" "),r("a-col",{attrs:{span:24}},[r("a-form-item",e._b({attrs:{label:"公告内容"}},"a-form-item",e.formItemLayout,!1),[r("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{rules:[{required:!0,message:"请输入名称!"}]}],expression:"[\n          'content',\n           { rules: [{ required: true, message: '请输入名称!' }] }\n          ]"}],attrs:{rows:6}})],1)],1),e._v(" "),r("a-col",{attrs:{span:24}},[r("a-form-item",e._b({attrs:{label:"图册"}},"a-form-item",e.formItemLayout,!1),[r("a-upload",{attrs:{name:"avatar",action:"http://101.34.86.47:9527/file/fileUpload/","list-type":"picture-card","file-list":e.fileList},on:{preview:e.handlePreview,change:e.picHandleChange}},[e.fileList.length<8?r("div",[r("a-icon",{attrs:{type:"plus"}}),e._v(" "),r("div",{staticClass:"ant-upload-text"},[e._v("\n                Upload\n              ")])],1):e._e()]),e._v(" "),r("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[r("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)],1)],1)],1)],2)},staticRenderFns:[]},h=r("VU/8")(p,v,!1,function(e){r("25Us")},"data-v-34c9046a",null);t.default=h.exports}});