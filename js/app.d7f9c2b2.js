(function(){"use strict";var e={2:function(e,r,t){var o=t(471),i=function(){var e=this,r=e._self._c;return r("div",{attrs:{id:"app"}},[r("button",{on:{click:function(r){e.isFormVisible=!e.isFormVisible,e.changeBtnText()}}},[e._v(e._s(e.btnText))]),r("ClientForm",{attrs:{isFormVisible:e.isFormVisible}})],1)},s=[],n=function(){var e=this,r=e._self._c;return e.isFormVisible?r("form",{staticClass:"client-form",on:{submit:function(r){return r.preventDefault(),e.onSubmit.apply(null,arguments)}}},[e._m(0),e.showSubmitModal?r("div",{class:["submitModalColor",e.error?"errorModal":"successModal"],attrs:{id:"submitModal"}},[r("p",[e._v(e._s(e.submitMsg))])]):e._e(),r("div",{staticClass:"form-body"},[r("div",{staticClass:"form-section"},[r("h3",[e._v("Личные данные")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.lastname.$error}},[r("label",[e._v("Фамилия* ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.lastname.$model,expression:"$v.form.lastname.$model",modifiers:{trim:!0}}],domProps:{value:e.$v.form.lastname.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.lastname,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e.submitted&&!e.$v.form.lastname.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e()]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.name.$error}},[r("label",[e._v("Имя* ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.name.$model,expression:"$v.form.name.$model",modifiers:{trim:!0}}],domProps:{value:e.$v.form.name.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.name,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e.submitted&&!e.$v.form.name.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e()]),r("label",{attrs:{for:"surname"}},[e._v("Отчество ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.surname,expression:"form.surname"}],attrs:{id:"surname"},domProps:{value:e.form.surname},on:{input:function(r){r.target.composing||e.$set(e.form,"surname",r.target.value)}}}),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.birthday.$error}},[r("label",[e._v("Дата рождения* ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.birthday.$model,expression:"$v.form.birthday.$model",modifiers:{trim:!0}}],attrs:{type:"date"},domProps:{value:e.$v.form.birthday.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.birthday,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),!e.submitted||e.$v.form.birthday.maxDate&&e.$v.form.birthday.minDate?e.submitted&&!e.$v.form.birthday.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e():r("div",{staticClass:"error"},[e._v(e._s(e.errorDatedMsg))])]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.phone.$error}},[r("label",[e._v("Номер телефона* ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.phone.$model,expression:"$v.form.phone.$model",modifiers:{trim:!0}}],attrs:{type:"tel",placeholder:"+7 (___) ___ __ __"},domProps:{value:e.$v.form.phone.$model},on:{input:[function(r){r.target.composing||e.$set(e.$v.form.phone,"$model",r.target.value.trim())},e.enteringPhoneNumber],blur:function(r){return e.$forceUpdate()}}}),e.$v.form.phone.phoneNumber?e.submitted&&!e.$v.form.phone.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e():r("div",{staticClass:"error"},[e._v("Неверный формат номера телефона")])]),r("label",{attrs:{for:"sex"}},[e._v("Пол")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.sex,expression:"form.sex"}],attrs:{id:"sex"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"sex",r.target.multiple?t:t[0])}}},[r("option",[e._v("м")]),r("option",[e._v("ж")])]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.clientsGroup.$error}},[r("label",[e._v("Группа клиентов* ")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.clientsGroup.$model,expression:"$v.form.clientsGroup.$model",modifiers:{trim:!0}}],attrs:{multiple:"",size:"2"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.$v.form.clientsGroup,"$model",r.target.multiple?t:t[0])}}},[r("option",[e._v("VIP")]),r("option",[e._v("Проблемные")]),r("option",[e._v("ОМС")])]),e.submitted&&!e.$v.form.clientsGroup.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e()]),r("label",{attrs:{for:"doctor"}},[e._v("Лечащий врач ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.form.doctor,expression:"form.doctor"}],attrs:{id:"doctor"},on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.form,"doctor",r.target.multiple?t:t[0])}}},[r("option",[e._v("Иванов")]),r("option",[e._v("Захаров")]),r("option",[e._v("Чернышова")])]),r("p",{staticStyle:{"text-align":"left"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.dontSendSMS,expression:"form.dontSendSMS"}],staticStyle:{width:"auto","margin-left":"auto"},attrs:{id:"dont-send-sms",type:"checkbox",placeholder:""},domProps:{checked:Array.isArray(e.form.dontSendSMS)?e._i(e.form.dontSendSMS,null)>-1:e.form.dontSendSMS},on:{change:function(r){var t=e.form.dontSendSMS,o=r.target,i=!!o.checked;if(Array.isArray(t)){var s=null,n=e._i(t,s);o.checked?n<0&&e.$set(e.form,"dontSendSMS",t.concat([s])):n>-1&&e.$set(e.form,"dontSendSMS",t.slice(0,n).concat(t.slice(n+1)))}else e.$set(e.form,"dontSendSMS",i)}}}),r("label",{staticStyle:{display:"inline-block"},attrs:{for:"dontSendSMS"}},[e._v("Не отправлять СМС ")])])]),r("div",{staticClass:"form-section"},[r("h3",[e._v("Адрес")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.index.$error}},[r("label",[e._v("Индекс ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.index.$model,expression:"$v.form.index.$model",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.$v.form.index.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.index,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e.submitted&&!e.$v.form.index.validLength?r("div",{staticClass:"error"},[e._v("Длина должна быть равна 6 знакам")]):e.submitted&&!e.$v.form.index.positiveNum?r("div",{staticClass:"error"},[e._v(e._s(e.errorNegativeNumMsg))]):e.$v.form.index.decimal?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.errorNumMsg))])]),r("label",{attrs:{for:"country"}},[e._v("Страна ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.country,expression:"form.country"}],attrs:{id:"country",placeholder:""},domProps:{value:e.form.country},on:{input:function(r){r.target.composing||e.$set(e.form,"country",r.target.value)}}}),r("label",{attrs:{for:"region"}},[e._v("Область ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.region,expression:"form.region"}],attrs:{id:"region",placeholder:""},domProps:{value:e.form.region},on:{input:function(r){r.target.composing||e.$set(e.form,"region",r.target.value)}}}),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.city.$error}},[r("label",[e._v("Город* ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.city.$model,expression:"$v.form.city.$model",modifiers:{trim:!0}}],domProps:{value:e.$v.form.city.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.city,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e.submitted&&!e.$v.form.city.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e()]),r("label",{attrs:{for:"street"}},[e._v("Улица ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.street,expression:"form.street"}],attrs:{id:"street",placeholder:""},domProps:{value:e.form.street},on:{input:function(r){r.target.composing||e.$set(e.form,"street",r.target.value)}}}),r("label",{attrs:{for:"house"}},[e._v("Дом ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.house,expression:"form.house"}],attrs:{id:"house",placeholder:""},domProps:{value:e.form.house},on:{input:function(r){r.target.composing||e.$set(e.form,"house",r.target.value)}}})]),r("div",{staticClass:"form-section"},[r("h3",[e._v("Паспорт")]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.docType.$error}},[r("label",[e._v("Тип документа* ")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.docType.$model,expression:"$v.form.docType.$model",modifiers:{trim:!0}}],on:{change:function(r){var t=Array.prototype.filter.call(r.target.options,(function(e){return e.selected})).map((function(e){var r="_value"in e?e._value:e.value;return r}));e.$set(e.$v.form.docType,"$model",r.target.multiple?t:t[0])}}},[r("option",[e._v("Паспорт")]),r("option",[e._v("Свидетельство о рождении")]),r("option",[e._v("Вод. удостоверение")])]),e.submitted&&!e.$v.form.docType.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e()]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.series.$error}},[r("label",[e._v("Серия ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.series.$model,expression:"$v.form.series.$model",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.$v.form.series.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.series,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e.submitted&&!e.$v.form.series.validLength?r("div",{staticClass:"error"},[e._v("Длина должна быть равна 4 знакам")]):e.submitted&&!e.$v.form.series.positiveNum?r("div",{staticClass:"error"},[e._v(e._s(e.errorNegativeNumMsg))]):e.$v.form.series.decimal?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.errorNumMsg))])]),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.number.$error}},[r("label",[e._v("Номер ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.number.$model,expression:"$v.form.number.$model",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.$v.form.number.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.number,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),e.submitted&&!e.$v.form.number.validLength?r("div",{staticClass:"error"},[e._v("Длина должна быть равна 6 знакам")]):e.submitted&&!e.$v.form.number.positiveNum?r("div",{staticClass:"error"},[e._v(e._s(e.errorNegativeNumMsg))]):e.$v.form.number.decimal?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.errorNumMsg))])]),r("label",{attrs:{for:"issueDep"}},[e._v("Кем выдан ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.issueDep,expression:"form.issueDep"}],attrs:{id:"issue-dep",placeholder:""},domProps:{value:e.form.issueDep},on:{input:function(r){r.target.composing||e.$set(e.form,"issueDep",r.target.value)}}}),r("div",{staticClass:"form-group",class:{"form-group--error":e.$v.form.issueDate.$error}},[r("label",[e._v("Дата выдачи* ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.form.issueDate.$model,expression:"$v.form.issueDate.$model",modifiers:{trim:!0}}],attrs:{type:"date"},domProps:{value:e.$v.form.issueDate.$model},on:{input:function(r){r.target.composing||e.$set(e.$v.form.issueDate,"$model",r.target.value.trim())},blur:function(r){return e.$forceUpdate()}}}),!e.submitted||e.$v.form.issueDate.maxDate&&e.$v.form.issueDate.minDate?e.submitted&&!e.$v.form.issueDate.required?r("div",{staticClass:"error"},[e._v(e._s(e.requiredMsg))]):e._e():r("div",{staticClass:"error"},[e._v(e._s(e.errorDatedMsg))])])])]),r("span",{staticStyle:{"text-align":"left"}},[e._v("*Поле обязательное для заполнения")]),e._m(1)]):e._e()},a=[function(){var e=this,r=e._self._c;return r("div",{staticClass:"form-header"},[r("h2",[e._v("Создание клиента")])])},function(){var e=this,r=e._self._c;return r("p",[r("input",{attrs:{type:"submit",id:"submit-input",value:"Отправить"}})])}],m=t(278);const l=m._$.regex("serial",/^7-[0-9]{3}-[0-9]{3}-[0-9]{4}/);var u={name:"ClientForm",props:{isFormVisible:Boolean},data(){return{clientsGroupSize:1,submitted:!1,showSubmitModal:!1,error:!1,requiredMsg:"Поле обязательно для заполнения",errorDatedMsg:"Неправильная дата",errorNumdMsg:"Требуется ввести число",errorNegativeNumMsg:"Число не может быть отрицательным",form:{lastname:"",name:"",surname:"",birthday:"",phone:"",sex:"",clientsGroup:[],doctor:"",dontSendSMS:!1,index:"",country:"",region:"",city:"",street:"",house:"",docType:"",series:"",number:"",issueDep:"",issueDate:""}}},validations:{form:{lastname:{required:m.mw},name:{required:m.mw},birthday:{required:m.mw,maxDate(e){return!e||new Date(e).toJSON().substring(0,10)<=(new Date).toJSON().substring(0,10)},minDate(e){return!e||new Date(e).toJSON().substring(0,10)>=new Date("1910-01-01").toJSON().substring(0,10)}},phone:{required:m.mw,phoneNumber:l,validPhoneNumber(){return!0}},clientsGroup:{required:m.mw},index:{decimal:m._,validLength(e){return 0==e.length||6==e.length},positiveNum(e){return"-"!==e[0]}},city:{required:m.mw},docType:{required:m.mw},series:{decimal:m._,validLength(e){return 0==e.length||4==e.length},positiveNum(e){return"-"!==e[0]}},number:{decimal:m._,validLength(e){return 0==e.length||6==e.length},positiveNum(e){return"-"!==e[0]}},issueDate:{required:m.mw,maxDate(e){return!e||new Date(e).toJSON().substring(0,10)<=(new Date).toJSON().substring(0,10)},minDate(e){return!e||new Date(e).toJSON().substring(0,10)>=new Date("1910-01-01").toJSON().substring(0,10)}}}},methods:{onSubmit(){if(this.submitted=!0,this.error=!1,this.submitMsg="Клиент успешно создан!",this.$v.$touch(),this.$v.$invalid)return this.submitMsg="Ошибка!",this.error=!0,this.showSubmitModal=!0,setTimeout((()=>this.showSubmitModal=!1),2e3),void console.log("Birth:",this.form.birthday);this.showSubmitModal=!0,setTimeout((()=>this.showSubmitModal=!1),2e3),console.log("Data: \n"+JSON.stringify(this.form))},enteringPhoneNumber(){let e=this.form.phone.replace(/\D/g,"").match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);console.log("Val:",e),this.form.phone=e[1]+"-"+e[2]+"-"+e[3]+"-"+e[4]}}},d=u,v=t(656),f=(0,v.A)(d,n,a,!1,null,"35fc883e",null),c=f.exports,p={name:"App",components:{ClientForm:c},data(){return{btnText:"Hide form",isFormVisible:!0}},methods:{changeBtnText(){this.btnText=this.isFormVisible?"Hide form":"Show form"}}},$=p,g=(0,v.A)($,i,s,!1,null,null,null),b=g.exports,_=t(380);o.Ay.config.productionTip=!1,o.Ay.config.devtools=!0,o.Ay.use(_.Ay),new o.Ay({render:e=>e(b)}).$mount("#app")}},r={};function t(o){var i=r[o];if(void 0!==i)return i.exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(r,o,i,s){if(!o){var n=1/0;for(u=0;u<e.length;u++){o=e[u][0],i=e[u][1],s=e[u][2];for(var a=!0,m=0;m<o.length;m++)(!1&s||n>=s)&&Object.keys(t.O).every((function(e){return t.O[e](o[m])}))?o.splice(m--,1):(a=!1,s<n&&(n=s));if(a){e.splice(u--,1);var l=i();void 0!==l&&(r=l)}}return r}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[o,i,s]}}(),function(){t.d=function(e,r){for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={524:0};t.O.j=function(r){return 0===e[r]};var r=function(r,o){var i,s,n=o[0],a=o[1],m=o[2],l=0;if(n.some((function(r){return 0!==e[r]}))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(m)var u=m(t)}for(r&&r(o);l<n.length;l++)s=n[l],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(u)},o=self["webpackChunkform"]=self["webpackChunkform"]||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(2)}));o=t.O(o)})();
//# sourceMappingURL=app.d7f9c2b2.js.map