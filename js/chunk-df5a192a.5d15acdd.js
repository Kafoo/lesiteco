(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-df5a192a"],{3063:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{attrs:{color:"black",height:"90vh"}},[a("v-btn",{staticClass:"close",attrs:{color:"secondary",fab:"","x-small":"",dark:""},on:{click:function(t){return e.$emit("close")}}},[a("v-icon",[e._v("close")])],1),a("v-img",{attrs:{contain:"",height:"90vh","aspect-ratio":"1","lazy-src":e.image.thumb,src:e.image.full},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])})],1)},s=[],i=a("a6f4"),c=Object(i["c"])({name:"ImagePopup",props:{image:Object}}),r=c,l=(a("bfb1"),a("2877")),o=a("6544"),u=a.n(o),m=a("8336"),p=a("b0af"),d=a("132d"),f=a("adda"),v=a("490a"),g=a("0fd9"),b=Object(l["a"])(r,n,s,!1,null,"05125804",null);t["a"]=b.exports;u()(b,{VBtn:m["a"],VCard:p["a"],VIcon:d["a"],VImg:f["a"],VProgressCircular:v["a"],VRow:g["a"]})},"67de":function(e,t,a){},7047:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.comp_image?a("v-img",{staticClass:"image mt-sm-5",class:e.image?"c-pointer":"",attrs:{"aspect-ratio":16/9,src:e.comp_image.full},on:{click:function(t){e.image&&(e.expand_image=!0)}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"image_placeholder fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",size:"50",color:"#858585"}})],1)]},proxy:!0}],null,!1,2902058276)},[[a("v-dialog",{attrs:{width:"90%"},model:{value:e.expand_image,callback:function(t){e.expand_image=t},expression:"expand_image"}},[a("image-popup",{attrs:{image:e.comp_image},on:{close:function(t){e.expand_image=!1}}})],1)]],2):e._e()},s=[],i=a("a6f4"),c=a("3063"),r=a("4a42"),l=Object(i["c"])({name:"MediumImage",components:{ImagePopup:c["a"]},props:{image:{type:Object}},setup:function(e){var t=Object(i["f"])(!1),a=Object(i["a"])((function(){return e.image?e.image:new r["a"]}));return{comp_image:a,expand_image:t}}}),o=l,u=(a("f73d"),a("2877")),m=a("6544"),p=a.n(m),d=a("169a"),f=a("adda"),v=a("490a"),g=a("0fd9"),b=Object(u["a"])(o,n,s,!1,null,"21393fac",null);t["a"]=b.exports;p()(b,{VDialog:d["a"],VImg:f["a"],VProgressCircular:v["a"],VRow:g["a"]})},"70fe":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{position:"relative"}},[a("current-outlined",{attrs:{label:e.label,items:e.caldates,editable:e.editable,empty:e._f("capitalize")(e.$t("no date yet"))},on:{edit:function(t){return e.$emit("edit")}}},[a("div",{staticClass:"d-flex flex-column justify-center align-center"},e._l(e.caldates,(function(t,n){return a("caldate-chip",{key:t.id,attrs:{clickable:e.clickable,closable:e.closable,caldate:t},on:{close:function(t){return e.$emit("removeCaldate",n)}}})})),1)])],1)},s=[],i=a("a6f4"),c=a("5c65"),r=a("f221"),l=Object(i["c"])({components:{CaldateChip:c["a"],CurrentOutlined:r["a"]},props:{caldates:{type:Array,default:function(){return[]}},label:{type:String,default:"Caldates"},editable:{type:Boolean,default:!1},closable:{type:Boolean,default:!1},clickable:{type:Boolean,default:!1}},name:"",setup:function(){return{}}}),o=l,u=a("2877"),m=Object(u["a"])(o,n,s,!1,null,"2378e08c",null);t["a"]=m.exports},"81ca":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item?a("span",{staticClass:"text-caption grey--text text--darken-1"},[e._v(" "+e._s(e._f("capitalize")(e.$t("created_by."+e.item.essence+"."+e.item.visibility)))+" "),a("user-chip",{attrs:{user:e.item.author}})],1):e._e()},s=[],i=a("a6f4"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e.user&&e.user.id?a("v-btn",{staticClass:"pl-0 pr-2 text-none",attrs:{to:"/user/"+e.user.id,height:"25px",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-1",attrs:{size:"20",image:e.user.image}}),e._v(" "+e._s(e.user.name)+" ")],1):e.user?a("span",[e._v(" "+e._s(e.user.name)+" ")]):e._e()],1)},r=[],l=a("a6ea"),o=Object(i["c"])({name:"UserChip",props:{user:Object},components:{TinyAvatar:l["a"]},setup:function(){return{}}}),u=o,m=a("2877"),p=a("6544"),d=a.n(p),f=a("8336"),v=Object(m["a"])(u,c,r,!1,null,"5a151734",null),g=v.exports;d()(v,{VBtn:f["a"]});var b=Object(i["c"])({name:"CreatedBy",props:{item:Object},components:{UserChip:g},setup:function(){return{}}}),_=b,x=Object(m["a"])(_,n,s,!1,null,"6073f276",null);t["a"]=x.exports},9794:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.loading?a("loading-circle",{attrs:{small:""}}):e.event?a("div",{staticStyle:{"max-width":"1000px",margin:"auto"}},[a("div",{staticClass:"d-flex justify-center"},[a("medium-image",{staticClass:"image mr-sm-5 flex-grow-0",attrs:{image:e.event.image}})],1),a("div",{staticClass:"mx-sm-4 mb-5 mt-2 d-flex flex-column flex-sm-row align-stretch justify-space-around"},[a("div",{staticClass:"mt-2 mb-5 d-flex flex-column align-center align-sm-start"},[a("h1",[e._v(" "+e._s(e.event.title)+" ")]),a("created-by",{attrs:{item:e.event}}),e.event.can.update?a("v-btn",{staticClass:"mb-2 pa-0",attrs:{"x-small":"",text:"",plain:"",to:"/event/"+e.event.id+"/edit"}},[a("v-icon",{staticClass:"mr-1",attrs:{small:""}},[e._v("edit")]),e._v(" "+e._s(e.$t("options.edit"))+" ")],1):e._e(),a("place-chip",{attrs:{place:e.event.place}}),e.event.place.location?a("v-card",{staticClass:"location text-caption grey--text text-lighten-2 px-1 mt-1",attrs:{elevation:"0"}},[a("v-icon",{attrs:{small:""}},[e._v("place")]),e._v(" "+e._s(e.event.place.location.address.city)+", "+e._s(e.event.place.location.address.countryName)+" ")],1):e._e()],1),a("div",{staticClass:"mt-4 mx-5"},[a("current-caldates",{staticClass:"ml-1 mb-5",attrs:{clickable:"",caldates:e.event.caldates,label:e._f("capitalize")(e.$t("event dates")),more:""}})],1)]),a("div",{staticClass:"mx-5"},[a("current-tags",{attrs:{tags:e.event.tags,label:e._f("capitalize")(e.$t("event tags"))}})],1),a("div",{staticClass:"description grey lighten-3 text-subtitle mx-0 mb-3 mt-5 ma-sm-5 pa-5 breakwrap",class:"xs"!==e.$vuetify.breakpoint.name?"rounded-xl":""},[e._v(" "+e._s(e.event.description)+" ")])]):e._e()},s=[],i=a("a6f4"),c=a("3aa2"),r=a("b7aa"),l=a("7047"),o=a("70fe"),u=a("e6c8"),m=a("81ca"),p=Object(i["c"])({name:"EventOverview",components:{CurrentTags:c["a"],MediumImage:l["a"],CurrentCaldates:o["a"],PlaceChip:u["a"],CreatedBy:m["a"]},setup:function(e,t){var a=t.root,n=parseInt(a.$route.params.id),s=Object(r["a"])("event/GET_EVENT",{action_param:n}),i=s.entity,c=s.loading;return{event:i,loading:c}}}),d=p,f=a("2877"),v=a("6544"),g=a.n(v),b=a("8336"),_=a("b0af"),x=a("132d"),h=Object(f["a"])(d,n,s,!1,null,"118925c0",null);t["default"]=h.exports;g()(h,{VBtn:b["a"],VCard:_["a"],VIcon:x["a"]})},b1e9:function(e,t,a){},bfb1:function(e,t,a){"use strict";a("67de")},e6c8:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-btn",{staticClass:"pl-0 pr-3",attrs:{outlined:"",to:"/place/"+e.place.id,height:"32px",rounded:"",text:"",color:"grey darken-2",small:""}},[a("tiny-avatar",{staticClass:"d-inline mr-2",attrs:{size:"28",image:e.image}}),a("div",{staticClass:"text-truncate",staticStyle:{"max-width":"170px"}},[a("span",[e._v(e._s(e.place.name))])])],1)},s=[],i=a("a6f4"),c=a("4a42"),r=a("a6ea"),l=Object(i["c"])({name:"PlaceChip",components:{TinyAvatar:r["a"]},props:{place:{type:Object}},setup:function(e){var t;return t=e.place&&e.place.image?e.place.image:new c["a"],{image:t}}}),o=l,u=a("2877"),m=a("6544"),p=a.n(m),d=a("8336"),f=Object(u["a"])(o,n,s,!1,null,"982c7370",null);t["a"]=f.exports;p()(f,{VBtn:d["a"]})},f73d:function(e,t,a){"use strict";a("b1e9")}}]);
//# sourceMappingURL=chunk-df5a192a.5d15acdd.js.map