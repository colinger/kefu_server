(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bc425fc"],{"0980":function(t,e,a){"use strict";var o=a("89c6"),i=a.n(o);i.a},2157:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"mini-im-head"},[a("span",[a("i",{staticClass:"el-icon-picture-outline-round"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("机器人管理")])]),1==t.adminInfo.root?a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.createDialogFormVisible=!0}}},[t._v("添 加")]):t._e()],1),a("el-divider"),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),a("el-table-column",{attrs:{prop:"avatar",label:"头像",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-avatar",{attrs:{size:40,src:t.row.avatar}})]}}])}),a("el-table-column",{attrs:{prop:"nickname",label:"机器人昵称"}}),a("el-table-column",{attrs:{prop:"welcome",label:"欢迎语"}}),a("el-table-column",{attrs:{prop:"understand",label:"无匹配知识库语"}}),a("el-table-column",{attrs:{prop:"timeout_text",label:"超时结束提示"}}),a("el-table-column",{attrs:{prop:"no_services",label:"无人工在线提示"}}),a("el-table-column",{attrs:{prop:"loog_time_wait_text",label:"长时间等待提示"}}),a("el-table-column",{attrs:{prop:"keyword",label:"检索知识库热词"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.keyword.replace(/\|/g," , ")))])]}}])}),a("el-table-column",{attrs:{prop:"artificial",label:"转人工关键词"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.artificial.replace(/\|/g," , ")))])]}}])}),a("el-table-column",{attrs:{prop:"switch",align:"center",label:"运行状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.switch?a("el-tag",{attrs:{type:"success"}},[t._v("服务中")]):t._e(),0==e.row.switch?a("el-tag",{attrs:{type:"danger"}},[t._v("服务暂停")]):t._e()]}}])}),a("el-table-column",{attrs:{align:"center",prop:"platform",label:"服务平台"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(t.$getPlatformItem(e.row.platform).title))])]}}])}),a("el-table-column",{attrs:{prop:"create_at",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(t.$formatUnixDate(e.row.create_at,"YYYY/MM/DD"))+"\n      ")]}}])}),1==t.adminInfo.root?a("el-table-column",{attrs:{prop:"operating",align:"center",label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.edit(e.row)}}},[t._v("编 辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.deleteRobot(e.row)}}},[t._v("删 除")])]}}],null,!1,289946275)}):t._e()],1),a("el-row",{staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"space-between"}},[a("span",{staticStyle:{color:"#666","font-size":"14px"}},[t._v("当前有"+t._s(t.tableData.length)+"个机器人")])]),a("CreateDialog",{attrs:{complete:t.getRobotList,dialogFormVisible:t.createDialogFormVisible},on:{"update:dialogFormVisible":function(e){t.createDialogFormVisible=e},"update:dialog-form-visible":function(e){t.createDialogFormVisible=e}}}),a("EditDialog",{attrs:{complete:t.getRobotList,formData:t.editItem,dialogFormVisible:t.editDialogFormVisible},on:{"update:dialogFormVisible":function(e){t.editDialogFormVisible=e},"update:dialog-form-visible":function(e){t.editDialogFormVisible=e}}})],1)},i=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{width:"600px",title:"添加机器人","show-close":!1,visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"头像","label-width":t.formLabelWidth}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"mini-im-file-button",attrs:{title:"点击上传图片"}},[a("el-avatar",{attrs:{size:50,src:t.form.avatar}}),a("input",{attrs:{onClick:"this.value = null",type:"file",accept:"image/*"},on:{change:t.changeFile}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isUploading,expression:"isUploading"}],staticClass:"mini-im-file-percent"},[a("span",[t._v(t._s(t.uploadPercent))])])],1)]),a("el-col",{attrs:{span:6}})],1)],1),a("el-form-item",{attrs:{label:"机器人昵称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入机器人昵称",autocomplete:"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{label:"机器人欢迎语","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入机器人欢迎语",autocomplete:"off"},model:{value:t.form.welcome,callback:function(e){t.$set(t.form,"welcome",e)},expression:"form.welcome"}})],1),a("el-form-item",{attrs:{label:"无匹配知识库语","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入无法识别回复语",autocomplete:"off"},model:{value:t.form.understand,callback:function(e){t.$set(t.form,"understand",e)},expression:"form.understand"}})],1),a("el-form-item",{attrs:{label:"超时结束提示","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入会话超时结束提示",autocomplete:"off"},model:{value:t.form.timeout_text,callback:function(e){t.$set(t.form,"timeout_text",e)},expression:"form.timeout_text"}})],1),a("el-form-item",{attrs:{label:"无人工在线提示","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入无人工在线提示",autocomplete:"off"},model:{value:t.form.no_services,callback:function(e){t.$set(t.form,"no_services",e)},expression:"form.no_services"}})],1),a("el-form-item",{attrs:{label:"长时间等待提示","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入长时间等待提示语",autocomplete:"off"},model:{value:t.form.loog_time_wait_text,callback:function(e){t.$set(t.form,"loog_time_wait_text",e)},expression:"form.loog_time_wait_text"}})],1),a("el-form-item",{attrs:{label:"检索知识库热词","label-width":t.formLabelWidth}},[t._l(t.keyWordTags,(function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleKeyWordDel(e,"keyWordTagsInput")}}},[t._v(t._s(e))])})),t.showkeyWordTagsInput?a("el-input",{ref:"keyWordTagsInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputkeyWordTagValue,callback:function(e){t.inputkeyWordTagValue=e},expression:"inputkeyWordTagValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showTagInput("keyWordTagsInput")}}},[t._v("+ 新增")]),a("div",{staticStyle:{"font-size":"12px"}},[t._v("* 该词库会在用户输入的时候去匹配检索提示")])],2),a("el-form-item",{attrs:{label:"转人工关键词","label-width":t.formLabelWidth}},[t._l(t.dynamicTags,(function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleKeyWordDel(e,"dynamicTagsInput")}}},[t._v(t._s(e))])})),t.showDynamicTagsInput?a("el-input",{ref:"dynamicTagsInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputDynamicTagValue,callback:function(e){t.inputDynamicTagValue=e},expression:"inputDynamicTagValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showTagInput("dynamicTagsInput")}}},[t._v("+ 新增")]),a("div",{staticStyle:{"font-size":"12px"}},[t._v('* 匹配该关键词进入人工，系统已内置： "人工"')])],2),a("el-form-item",{attrs:{label:"运行状态","label-width":t.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.robotSwitch,callback:function(e){t.robotSwitch=e},expression:"robotSwitch"}})],1),a("el-form-item",{attrs:{label:"匹配平台","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择匹配平台"},model:{value:t.form.platform,callback:function(e){t.$set(t.form,"platform",e)},expression:"form.platform"}},t._l(t.$store.getters.platformConfig,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeModal}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保 存")])],1)],1)},n=[],s=(a("57e7"),a("bc3a")),r=a.n(s),c=a("fb21"),u={name:"mini-im-create-robot",data:function(){return{dynamicTags:[],keyWordTags:[],showkeyWordTagsInput:!1,inputkeyWordTagValue:"",showDynamicTagsInput:!1,inputDynamicTagValue:"",form:{nickname:"",avatar:"",welcome:"",understand:"",artificial:"",keyword:"",timeout_text:"",no_services:"",loog_time_wait_text:"",platform:1,switch:1},robotSwitch:!0,formLabelWidth:"120px",isUploading:!1,uploadPercent:""}},props:{dialogFormVisible:Boolean,complete:Function},methods:{closeModal:function(){this.resize(),this.$emit("update:dialogFormVisible",!1)},changeFile:function(t){var e=this,a=t.target.files[0];Object(c["a"])({file:a,progress:function(t){e.isUploading=!0,e.uploadPercent=t+"%"},success:function(t){e.isUploading=!1,e.uploadPercent="",e.$message.success("上传成功");var a=e.$store.getters.uploadToken.host+"/"+t;e.form.avatar=a},error:function(t){e.isUploading=!1,e.uploadPercent="",e.$message.error(t.message)}})},handleKeyWordDel:function(t,e){"dynamicTagsInput"==e?this.dynamicTags.splice(this.dynamicTags.indexOf(t),1):"keyWordTagsInput"==e&&this.keyWordTags.splice(this.keyWordTags.indexOf(t),1)},showTagInput:function(t){var e=this;"dynamicTagsInput"==t?(this.showDynamicTagsInput=!0,this.$nextTick((function(){e.$refs.dynamicTagsInput.$refs.input.focus()}))):"keyWordTagsInput"==t&&(this.showkeyWordTagsInput=!0,this.$nextTick((function(){e.$refs.keyWordTagsInput.$refs.input.focus()})))},handleInputConfirm:function(){var t=this.inputDynamicTagValue,e=this.inputkeyWordTagValue;t&&this.dynamicTags.push(t),e&&this.keyWordTags.push(e),this.showkeyWordTagsInput=!1,this.showDynamicTagsInput=!1,this.inputDynamicTagValue="",this.inputkeyWordTagValue=""},save:function(){var t=this,e=this.$loading({lock:!0,text:"保存中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"});this.form.artificial=this.dynamicTags.join("|"),this.form.keyword=this.keyWordTags.join("|"),this.form.switch=this.robotSwitch?1:0,r.a.post("/robot",this.form).then((function(a){try{console.log(a),e.close(),t.$message.success("添加成功"),t.closeModal(),t.resize(),t.complete()}catch(o){console.log(o)}})).catch((function(a){e.close(),t.$message.error(a.response.data.message)}))},resize:function(){this.dynamicTags=[],this.inputVisible=!1,this.inputValue="",this.form={nickname:"",avatar:"",welcome:"",timeout_text:"",no_services:"",loog_time_wait_text:"",understand:"",artificial:"",platform:1,switch:1}}}},m=u,d=(a("ea25"),a("2877")),f=Object(d["a"])(m,l,n,!1,null,"2e63f8e9",null),p=f.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{width:"600px",title:"编辑机器人","show-close":!1,visible:t.dialogFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"头像","label-width":t.formLabelWidth}},[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:3}},[a("div",{staticClass:"mini-im-file-button",attrs:{title:"点击上传图片"}},[a("el-avatar",{attrs:{size:50,src:t.form.avatar}}),a("input",{attrs:{onClick:"this.value = null",type:"file",accept:"image/*"},on:{change:t.changeFile}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isUploading,expression:"isUploading"}],staticClass:"mini-im-file-percent"},[a("span",[t._v(t._s(t.uploadPercent))])])],1)]),a("el-col",{attrs:{span:6}})],1)],1),a("el-form-item",{attrs:{label:"机器人昵称","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入机器人昵称",autocomplete:"off"},model:{value:t.form.nickname,callback:function(e){t.$set(t.form,"nickname",e)},expression:"form.nickname"}})],1),a("el-form-item",{attrs:{type:"textarea",rows:2,label:"机器人欢迎语","label-width":t.formLabelWidth}},[a("el-input",{attrs:{placeholder:"请输入机器人欢迎语",autocomplete:"off"},model:{value:t.form.welcome,callback:function(e){t.$set(t.form,"welcome",e)},expression:"form.welcome"}})],1),a("el-form-item",{attrs:{label:"无匹配知识库语","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入无法识别回复语",autocomplete:"off"},model:{value:t.form.understand,callback:function(e){t.$set(t.form,"understand",e)},expression:"form.understand"}})],1),a("el-form-item",{attrs:{label:"超时结束提示","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入会话超时结束提示",autocomplete:"off"},model:{value:t.form.timeout_text,callback:function(e){t.$set(t.form,"timeout_text",e)},expression:"form.timeout_text"}})],1),a("el-form-item",{attrs:{label:"无人工在线提示","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入无人工在线提示",autocomplete:"off"},model:{value:t.form.no_services,callback:function(e){t.$set(t.form,"no_services",e)},expression:"form.no_services"}})],1),a("el-form-item",{attrs:{label:"长时间等待提示","label-width":t.formLabelWidth}},[a("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入长时间等待提示语",autocomplete:"off"},model:{value:t.form.loog_time_wait_text,callback:function(e){t.$set(t.form,"loog_time_wait_text",e)},expression:"form.loog_time_wait_text"}})],1),a("el-form-item",{attrs:{label:"检索知识库热词","label-width":t.formLabelWidth}},[t._l(t.keyWordTags,(function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleKeyWordDel(e,"keyWordTagsInput")}}},[t._v(t._s(e))])})),t.showkeyWordTagsInput?a("el-input",{ref:"keyWordTagsInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputkeyWordTagValue,callback:function(e){t.inputkeyWordTagValue=e},expression:"inputkeyWordTagValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showTagInput("keyWordTagsInput")}}},[t._v("+ 新增")]),a("div",{staticStyle:{"font-size":"12px"}},[t._v("* 该词库会在用户输入的时候去匹配检索提示")])],2),a("el-form-item",{attrs:{label:"转人工关键词","label-width":t.formLabelWidth}},[t._l(t.dynamicTags,(function(e){return a("el-tag",{key:e,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){return t.handleKeyWordDel(e,"dynamicTagsInput")}}},[t._v(t._s(e))])})),t.showDynamicTagsInput?a("el-input",{ref:"dynamicTagsInput",staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:t.handleInputConfirm},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(e)}},model:{value:t.inputDynamicTagValue,callback:function(e){t.inputDynamicTagValue=e},expression:"inputDynamicTagValue"}}):a("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showTagInput("dynamicTagsInput")}}},[t._v("+ 新增")]),a("div",{staticStyle:{"font-size":"12px"}},[t._v('* 匹配该关键词进入人工，系统已内置： "人工"')])],2),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1!=t.formData.system,expression:"formData.system != 1"}],attrs:{label:"运行状态","label-width":t.formLabelWidth}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.robotSwitch,callback:function(e){t.robotSwitch=e},expression:"robotSwitch"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1!=t.formData.system,expression:"formData.system != 1"}],attrs:{label:"匹配平台","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择匹配平台"},model:{value:t.form.platform,callback:function(e){t.$set(t.form,"platform",e)},expression:"form.platform"}},t._l(t.$store.getters.platformConfig,(function(t,e){return a("el-option",{key:e,attrs:{label:t.title,value:t.id}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.closeModal}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保 存")])],1)],1)},g=[],b=(a("28a5"),{name:"mini-im-edit-robot",data:function(){return{dynamicTags:[],keyWordTags:[],showkeyWordTagsInput:!1,inputkeyWordTagValue:"",showDynamicTagsInput:!1,inputDynamicTagValue:"",form:{nickname:"",avatar:"",welcome:"",understand:"",artificial:"",keyword:"",timeout_text:"",no_services:"",loog_time_wait_text:"",platform:1,switch:1},robotSwitch:!0,formLabelWidth:"120px",isUploading:!1,uploadPercent:""}},props:{dialogFormVisible:Boolean,complete:Function,formData:Object},methods:{closeModal:function(){this.$emit("update:dialogFormVisible",!1)},changeFile:function(t){var e=this,a=t.target.files[0];Object(c["a"])({file:a,progress:function(t){e.isUploading=!0,e.uploadPercent=t+"%"},success:function(t){e.isUploading=!1,e.uploadPercent="",e.$message.success("上传成功");var a=e.$store.getters.uploadToken.host+"/"+t;e.form.avatar=a},error:function(t){e.isUploading=!1,e.uploadPercent="",e.$message.error(t.message)}})},handleKeyWordDel:function(t,e){"dynamicTagsInput"==e?this.dynamicTags.splice(this.dynamicTags.indexOf(t),1):"keyWordTagsInput"==e&&this.keyWordTags.splice(this.keyWordTags.indexOf(t),1)},showTagInput:function(t){var e=this;"dynamicTagsInput"==t?(this.showDynamicTagsInput=!0,this.$nextTick((function(){e.$refs.dynamicTagsInput.$refs.input.focus()}))):"keyWordTagsInput"==t&&(this.showkeyWordTagsInput=!0,this.$nextTick((function(){e.$refs.keyWordTagsInput.$refs.input.focus()})))},handleInputConfirm:function(){var t=this.inputDynamicTagValue,e=this.inputkeyWordTagValue;t&&this.dynamicTags.push(t),e&&this.keyWordTags.push(e),this.showkeyWordTagsInput=!1,this.showDynamicTagsInput=!1,this.inputDynamicTagValue="",this.inputkeyWordTagValue=""},save:function(){var t=this,e=this.$loading({lock:!0,text:"保存中...",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.5)"});this.form.artificial=this.dynamicTags.join("|"),this.form.keyword=this.keyWordTags.join("|"),this.form.switch=this.robotSwitch?1:0,r.a.put("/robot",this.form).then((function(a){try{console.log(a),e.close(),t.$message.success("修改成功"),t.closeModal(),t.complete()}catch(o){console.log(o)}})).catch((function(a){e.close(),t.$message.error(a.response.data.message)}))}},watch:{formData:function(){this.platformConfig=this.$store.getters.platformConfig,this.form=Object.assign({},this.form,this.formData),""!=this.formData.artificial&&(this.dynamicTags=this.formData.artificial.split("|")),""!=this.formData.keyword&&(this.keyWordTags=this.formData.keyword.split("|")),this.robotSwitch=1==this.form.switch}}}),y=b,w=(a("f06e"),Object(d["a"])(y,h,g,!1,null,"b0d0c25e",null)),k=w.exports,v={name:"robot",components:{CreateDialog:p,EditDialog:k},data:function(){return{createDialogFormVisible:!1,editDialogFormVisible:!1,loading:!0,editItem:{}}},created:function(){var t=this;setTimeout((function(){return t.getRobotList()}),500)},computed:{tableData:function(){return this.$store.getters.robots||[]},adminInfo:function(){return this.$store.getters.adminInfo||{}}},methods:{deleteRobot:function(t){var e=this;this.$confirm("您确定要删除该机器人吗? 删除后不可恢复！","温馨提示！",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0,type:"warning"}).then((function(){r.a.delete("/robot/"+t.id).then((function(t){console.log(t.data),e.$message.success("删除成功"),e.getRobotList()})).catch((function(t){e.$message.error(t.response.data.message)}))}))},edit:function(t){this.editItem=t,this.editDialogFormVisible=!0},getRobotList:function(){var t=this;r.a.get("/robot/list").then((function(e){t.loading=!1,t.$store.commit("onChangeRobos",e.data.data)})).catch((function(e){t.loading=!1,t.$message.error(e.response.data.message)}))}}},_=v,T=(a("0980"),Object(d["a"])(_,o,i,!1,null,"dea0f158",null));e["default"]=T.exports},"6bdb":function(t,e,a){},"89c6":function(t,e,a){},c19b:function(t,e,a){},ea25:function(t,e,a){"use strict";var o=a("c19b"),i=a.n(o);i.a},f06e:function(t,e,a){"use strict";var o=a("6bdb"),i=a.n(o);i.a}}]);
//# sourceMappingURL=chunk-4bc425fc.0bbe4f9b.js.map