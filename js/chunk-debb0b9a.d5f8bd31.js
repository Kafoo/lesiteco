(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-debb0b9a"],{"08e8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",{staticClass:"pt-7 pb-3"},[a("v-card-text",{staticClass:"text-h6"},[t._v(" "+t._s(t._f("capitalize")(t.$t("confirm.sure")))),a("br"),t._v(" "+t._s(t.text)+" ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"secondary",text:"",disabled:t.loading},on:{click:function(e){return t.$emit("cancel-action")}}},[t._v(" "+t._s(t.cancel)+" ")]),a("v-btn",{attrs:{color:t.confirm_color,text:"",disabled:t.loading},on:{click:function(e){return t.$emit("confirm-action")}}},[t._v(" "+t._s(t.confirm)+" ")])],1),a("loading-bar",{attrs:{loading:t.loading}})],1)],1)},i=[],o=a("d4ec"),c=a("262e"),r=a("2caf"),l=a("9ab4"),s=a("2b0e"),d=a("60a3"),u=a("3b7a"),p=function(t){Object(c["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return a}(s["default"]);Object(l["a"])([Object(d["b"])(Boolean)],p.prototype,"show",void 0),Object(l["a"])([Object(d["b"])(String)],p.prototype,"text",void 0),Object(l["a"])([Object(d["b"])(String)],p.prototype,"cancel",void 0),Object(l["a"])([Object(d["b"])(String)],p.prototype,"confirm",void 0),Object(l["a"])([Object(d["b"])({default:"primary"})],p.prototype,"confirm_color",void 0),Object(l["a"])([Object(d["b"])({default:!1})],p.prototype,"loading",void 0),p=Object(l["a"])([Object(d["a"])({name:"ConfirmDialog",components:{LoadingBar:u["a"]}})],p);var f=p,b=f,m=a("2877"),v=a("6544"),j=a.n(v),_=a("8336"),g=a("b0af"),y=a("99d9"),O=a("169a"),x=a("ce7e"),h=a("2fa4"),$=Object(m["a"])(b,n,i,!1,null,null,null);e["a"]=$.exports;j()($,{VBtn:_["a"],VCard:g["a"],VCardActions:y["a"],VCardText:y["b"],VDialog:O["a"],VDivider:x["a"],VSpacer:h["a"]})},1994:function(t,e,a){},"3b7a":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loading?a("v-progress-linear",{staticClass:"progress",attrs:{color:"green darken-4 accent-4",indeterminate:"",rounded:"",height:"6"}}):t._e()},i=[],o=a("a6f4"),c=Object(o["c"])({name:"LoadingBar",props:{loading:Boolean}}),r=c,l=(a("6e9d"),a("2877")),s=a("6544"),d=a.n(s),u=a("8e36"),p=Object(l["a"])(r,n,i,!1,null,"3c94f8d6",null);e["a"]=p.exports;d()(p,{VProgressLinear:u["a"]})},6762:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"white--text",attrs:{color:"red",disabled:t.disabled},on:{click:function(e){t.deletion=!0}}},[t._v(" "+t._s(t.text)+" "),a("confirm-dialog",{attrs:{show:t.deletion,text:t.confirmation_text,cancel:t.$t("confirm.cancel"),confirm:t.$t("delete"),confirm_color:"red",loading:t.loading},on:{"cancel-action":function(e){t.deletion=!1},"confirm-action":function(e){return t.$emit("confirm-action")}}})],1)},i=[],o=a("a6f4"),c=a("08e8"),r=a("59ab"),l=Object(o["c"])({name:"DeleteButton",components:{ConfirmDialog:c["a"]},props:{disabled:{type:Boolean,default:!1},text:{type:String,default:r["a"].t("delete")},confirmation_text:{type:String,default:r["a"].t("Deletion is definitive")},loading:{type:Boolean,default:!1}},setup:function(t){var e=Object(o["f"])(!1);return Object(o["g"])((function(){return t.loading}),(function(t){!1===t&&(e.value=!1)})),{deletion:e}}}),s=l,d=a("2877"),u=a("6544"),p=a.n(u),f=a("8336"),b=Object(d["a"])(s,n,i,!1,null,"4b95b120",null);e["a"]=b.exports;p()(b,{VBtn:f["a"]})},"6e9d":function(t,e,a){"use strict";a("1994")},7731:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("primary-content-body",[t.loading?a("loading-circle",{attrs:{small:""}}):t.project?a("div",{staticClass:"card-body"},[a("ariane",[a("back-button",{attrs:{text:t.$t("project page"),path:t.project.path}}),a("place-chip",{attrs:{place:t.project.place}})],1),a("v-form",{on:{submit:function(e){return e.preventDefault(),t.editProject(e)}},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[a("cud-layout",{scopedSlots:t._u([{key:"header-title",fn:function(){return[t._v(" "+t._s(t._f("capitalize")(t.$t("project edition")))+" ")]},proxy:!0},{key:"image",fn:function(){return[a("image-input",{attrs:{nullable:""},model:{value:t.project.image,callback:function(e){t.$set(t.project,"image",e)},expression:"project.image"}})]},proxy:!0},{key:"title",fn:function(){return[a("v-text-field",{staticClass:"rounded-lg",attrs:{outlined:"",label:t._f("capitalize")(t.$t("title")),rules:[t.rules.required[0]]},model:{value:t.project.title,callback:function(e){t.$set(t.project,"title",e)},expression:"project.title"}})]},proxy:!0},{key:"visibility",fn:function(){return[a("visibility-input",{attrs:{type:"place_entity"},model:{value:t.project.visibility,callback:function(e){t.$set(t.project,"visibility",e)},expression:"project.visibility"}})]},proxy:!0},{key:"is_done",fn:function(){return[a("v-switch",{staticClass:"mt-0 ml-2",attrs:{color:"green",label:t._f("capitalize")(t.$t("state")+" : "+(t.project.is_done?t.$t("completed project"):t.$t("ongoing project"))),inset:""},model:{value:t.project.is_done,callback:function(e){t.$set(t.project,"is_done",e)},expression:"project.is_done"}})]},proxy:!0},{key:"description",fn:function(){return[a("v-textarea",{staticClass:"rounded-lg",attrs:{outlined:"",label:t._f("capitalize")(t.$t("description")),name:"input-7-4",rules:[t.rules.required[0]]},model:{value:t.project.description,callback:function(e){t.$set(t.project,"description",e)},expression:"project.description"}})]},proxy:!0},{key:"tags",fn:function(){return[a("tags-input",{attrs:{tags:t.project.tags,label:t._f("capitalize")(t.$t("project tags"))},on:{update:function(e){t.project.tags=e}}})]},proxy:!0},{key:"caldates",fn:function(){return[a("caldate-input",{attrs:{caldates:t.project.caldates,label:t._f("capitalize")(t.$t("project dates"))},on:{update:function(e){t.project.caldates=e}}})]},proxy:!0},{key:"actions",fn:function(){return[a("delete-button",{staticClass:"ma-1",attrs:{disabled:t.loading_edit,loading:t.loading_deletion,text:t.$t("delete project"),confirmation_text:t.$t("Project deletion is definitive.")},on:{"confirm-action":t.deleteProject}}),a("v-btn",{staticClass:"ma-1",attrs:{type:"submit",color:"success",loading:t.loading_edit,disabled:t.loading_edit||!t.form}},[t._v(" "+t._s(t.$t("confirm.save"))+" ")])]},proxy:!0}])})],1)],1):t._e()],1)},i=[],o=a("a6f4"),c=a("8d7e"),r=a("b7aa"),l=a("d5ad"),s=a("0ec5"),d=a("2efd"),u=a("1e91"),p=a("b9a3"),f=a("6762"),b=a("e6c8"),m=a("e9e5"),v=Object(o["c"])({name:"ProjectEdition",components:{TagsInput:s["a"],ImageInput:p["a"],CaldateInput:d["a"],VisibilityInput:u["a"],DeleteButton:f["a"],PlaceChip:b["a"],CudLayout:m["a"]},setup:function(t,e){var a=e.root,n=Object(o["f"])(!1),i=Object(o["f"])(!1),s=Object(o["f"])(!1),d=Object(l["a"])(),u=parseInt(a.$route.params.id),p=Object(r["a"])("project/GET_PROJECT",{action_param:u,copy:!0}),f=p.entity,b=p.loading,m=Object(c["a"])({SEND_PROJECT_EDITION:"project/SEND_PROJECT_EDITION"}),v=m.SEND_PROJECT_EDITION,j=Object(c["a"])({SEND_PROJECT_DELETION:"project/SEND_PROJECT_DELETION"}),_=j.SEND_PROJECT_DELETION,g=function(){s.value=!0,v(f.value).then((function(){s.value=!1,a.$router.push("/project/"+f.value.id)})).catch((function(){s.value=!1}))},y=function(){i.value=!0,_(f.value.id).then((function(){i.value=!1,a.$router.push("/place/"+f.value.place_id)})).catch((function(){i.value=!1}))};return{loading:b,loading_edit:s,loading_deletion:i,rules:d,form:n,project:f,deleteProject:y,editProject:g}}}),j=v,_=a("2877"),g=a("6544"),y=a.n(g),O=a("8336"),x=a("4bd4"),h=a("b73d"),$=a("8654"),C=a("a844"),E=Object(_["a"])(j,n,i,!1,null,"42912835",null);e["default"]=E.exports;y()(E,{VBtn:O["a"],VForm:x["a"],VSwitch:h["a"],VTextField:$["a"],VTextarea:C["a"]})},e6c8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{staticClass:"pl-0 pr-3",attrs:{outlined:"",to:"/place/"+t.place.id,height:"32px",rounded:"",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-2",attrs:{size:"28",image:t.image}}),a("div",{staticClass:"text-truncate",staticStyle:{"max-width":"170px"}},[a("span",[t._v(t._s(t.place.name))])])],1)},i=[],o=a("a6f4"),c=a("4a42"),r=a("a6ea"),l=Object(o["c"])({name:"PlaceChip",components:{TinyAvatar:r["a"]},props:{place:{type:Object}},setup:function(t){var e;return e=t.place&&t.place.image?t.place.image:new c["a"],{image:e}}}),s=l,d=a("2877"),u=a("6544"),p=a.n(u),f=a("8336"),b=Object(d["a"])(s,n,i,!1,null,"982c7370",null);e["a"]=b.exports;p()(b,{VBtn:f["a"]})}}]);
//# sourceMappingURL=chunk-debb0b9a.d5f8bd31.js.map