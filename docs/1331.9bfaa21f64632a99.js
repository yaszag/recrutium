"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[1331],{1331:(w,g,s)=>{s.r(g),s.d(g,{LoginModule:()=>h});var a=s(6895),l=s(2761),t=s(4006),o=s(4650),d=s(395);function m(n,r){if(1&n&&(o.TgZ(0,"div",33),o._uU(1),o.qZA()),2&n){const i=o.oxw();o.xp6(1),o.hij(" ",i.CustomControler.message," ")}}function c(n,r){1&n&&(o.TgZ(0,"div"),o._uU(1," Email is required. "),o.qZA())}function p(n,r){1&n&&(o.TgZ(0,"div"),o._uU(1," Please, enter valid email address. "),o.qZA())}function f(n,r){if(1&n&&(o.TgZ(0,"div",33),o.YNc(1,c,2,0,"div",34),o.YNc(2,p,2,0,"div",34),o.qZA()),2&n){const i=o.oxw();o.xp6(1),o.Q6J("ngIf",i.f.email.errors&&i.f.email.errors.required),o.xp6(1),o.Q6J("ngIf",i.f.email.errors&&i.f.email.errors.email)}}function v(n,r){1&n&&(o.TgZ(0,"div"),o._uU(1," Password is required. "),o.qZA())}function Z(n,r){if(1&n&&(o.TgZ(0,"div",33),o.YNc(1,v,2,0,"div",34),o.qZA()),2&n){const i=o.oxw();o.xp6(1),o.Q6J("ngIf",i.f.password.errors&&i.f.password.errors.required)}}function _(n,r){if(1&n&&(o.TgZ(0,"div",33),o._uU(1),o.qZA()),2&n){const i=o.oxw();o.xp6(1),o.hij(" ",i.CustomControler.message," ")}}const u=function(n){return{"is-invalid":n}},b=[{path:"",component:(()=>{class n{get f(){return this.form.controls}constructor(i){this.storage=i,this.Toggledata=!0,this.form=new t.nJ({email:new t.p4("admin@dreamguys.in",[t.kI.required]),password:new t.p4("123456",[t.kI.required])}),this.subscription=this.storage.Loginvalue.subscribe(e=>{"0"!=e&&(this.CustomControler=e)})}ngOnInit(){this.storage.Checkuser(),localStorage.removeItem("LoginData")}submit(){this.storage.Login(this.form.value)}ngOnDestroy(){this.subscription.unsubscribe()}iconLogle(){this.Toggledata=!this.Toggledata}}return n.\u0275fac=function(i){return new(i||n)(o.Y36(d.C))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-login"]],decls:55,vars:15,consts:[[1,"main-wrapper","login-body"],[1,"login-wrapper"],[1,"container"],["src","assets/img/logo-01.png","alt","Logo",1,"img-fluid","logo-dark","mb-2"],[1,"loginbox"],[1,"login-right"],[1,"login-right-wrap"],[1,"account-subtitle","text-center"],[3,"formGroup","ngSubmit"],[1,"form-group","form-focus","focused"],[1,"focus-label"],["type","text","formControlName","email","id","email",1,"form-control",3,"ngClass"],[1,"profile-views"],[1,"fas","fa-user-circle"],["class","invalid-feedback",4,"ngIf"],["formControlName","password","id","password",1,"form-control","floating",3,"type","ngClass"],[3,"ngClass","click"],[1,"form-group"],[1,"custom_check"],["type","checkbox","name","rem_password"],[1,"checkmark"],["type","submit",1,"btn","btn-primary","btn-block","btn-lg","login-btn"],[1,"login-or"],[1,"row","social-login"],[1,"col-4"],["href","javascript:void(0);",1,"btn","btn-twitter","btn-block"],["href","javascript:void(0);",1,"btn","btn-facebook","btn-block"],["href","javascript:void(0);",1,"btn","btn-google","btn-block"],[1,"row"],[1,"col-6","text-start"],[1,"forgot-link",3,"routerLink"],[1,"col-6","text-end","dont-have"],[3,"routerLink"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(i,e){1&i&&(o.TgZ(0,"div",0)(1,"div",1)(2,"div",2),o._UZ(3,"img",3),o.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"h1"),o._uU(8,"Welcome Back"),o.qZA(),o.TgZ(9,"p",7),o._uU(10," Don't miss your next opportunity. Sign in to stay updated on your professional world. "),o.qZA(),o.TgZ(11,"form",8),o.NdJ("ngSubmit",function(){return e.submit()}),o.TgZ(12,"div",9)(13,"label",10),o._uU(14,"Email"),o.qZA(),o._UZ(15,"input",11),o.TgZ(16,"span",12),o._UZ(17,"i",13),o.qZA(),o.YNc(18,m,2,1,"div",14),o.YNc(19,f,3,2,"div",14),o.qZA(),o.TgZ(20,"div",9)(21,"label",10),o._uU(22,"Password"),o.qZA(),o._UZ(23,"input",15),o.TgZ(24,"span",16),o.NdJ("click",function(){return e.iconLogle()}),o.qZA(),o.YNc(25,Z,2,1,"div",14),o.YNc(26,_,2,1,"div",14),o.qZA(),o.TgZ(27,"div",17)(28,"label",18),o._UZ(29,"input",19)(30,"span",20),o._uU(31," Remember password "),o.qZA()(),o.TgZ(32,"button",21),o._uU(33," Login "),o.qZA(),o.TgZ(34,"div",22)(35,"p"),o._uU(36,"Or login with"),o.qZA()(),o.TgZ(37,"div",23)(38,"div",24)(39,"a",25),o._uU(40," Twitter"),o.qZA()(),o.TgZ(41,"div",24)(42,"a",26),o._uU(43," Facebook"),o.qZA()(),o.TgZ(44,"div",24)(45,"a",27),o._uU(46," Google"),o.qZA()()(),o.TgZ(47,"div",28)(48,"div",29)(49,"a",30),o._uU(50,"Forgot Password ?"),o.qZA()(),o.TgZ(51,"div",31),o._uU(52," New to recrutium? "),o.TgZ(53,"a",32),o._uU(54,"Click here"),o.qZA()()()()()()()()()()),2&i&&(o.xp6(11),o.Q6J("formGroup",e.form),o.xp6(4),o.Q6J("ngClass",o.VKq(11,u,e.f.email.touched&&e.f.email.invalid)),o.xp6(3),o.Q6J("ngIf","email"===(null==e.CustomControler?null:e.CustomControler.status)),o.xp6(1),o.Q6J("ngIf",e.f.email.touched&&e.f.email.invalid),o.xp6(4),o.Q6J("type",e.Toggledata?"password":"text")("ngClass",o.VKq(13,u,e.f.password.touched&&e.f.password.invalid)),o.xp6(1),o.Q6J("ngClass",!0===e.Toggledata?"fas toggle-password fa-eye-slash":"fas toggle-password fa-eye"),o.xp6(1),o.Q6J("ngIf",e.f.password.touched&&e.f.password.invalid),o.xp6(1),o.Q6J("ngIf","password"===(null==e.CustomControler?null:e.CustomControler.status)),o.xp6(23),o.Q6J("routerLink","/admin/auth/forgot-password"),o.xp6(4),o.Q6J("routerLink","/admin/auth/register"))},dependencies:[a.mk,a.O5,l.rH,t._Y,t.Fj,t.JJ,t.JL,t.sg,t.u]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[l.Bz.forChild(b),l.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[a.ez,C,t.u5,t.UX]}),n})()}}]);