"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[7047],{7047:(b,g,n)=>{n.r(g),n.d(g,{PaymentsModule:()=>f});var u=n(6895),h=n(2761),p=n(3626),c=n(7579),t=n(4650),y=n(2187),l=n(4006),d=n(6308);function Z(a,r){if(1&a&&(t.TgZ(0,"tr")(1,"td")(2,"div",31)(3,"span"),t._UZ(4,"img",32),t.qZA(),t.TgZ(5,"span"),t._uU(6),t.qZA()()(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"span",33),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"span",34),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td")(20,"a",35),t._UZ(21,"i",36),t.qZA()()()),2&a){const e=r.$implicit;t.xp6(4),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Oqu(e.company),t.xp6(2),t.Oqu(e.name),t.xp6(3),t.Oqu(e.type),t.xp6(2),t.hij("$ ",e.price,""),t.xp6(3),t.Oqu(e.status),t.xp6(2),t.Oqu(e.date)}}const v=[{path:"",component:(()=>{class a{constructor(e){this.dataService=e,this.dtTrigger=new c.x,this.url="milestones",this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.loadPay()}loadPay(){this.lstPayment=this.dataService.payment}ngOnDestroy(){this.dtTrigger.unsubscribe()}sortData(e){const i=this.lstPayment.slice();this.lstPayment=e.active&&""!==e.direction?i.sort((s,o)=>(s[e.active]<o[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}getTableData(){this.lstPayment=[],this.serialNumberArray=[],this.data.lstFiles().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,s)=>{const o=s+1;s>=this.skip&&o<=this.limit&&(this.lstPayment.push(i),this.serialNumberArray.push(o))}),this.dataSource=new p.by(this.lstPayment),this.calculateTotalPages(this.totalData,this.pageSize)})}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let s=1;s<=this.totalPages;s++){const o=i*s,m=o-i;this.pageNumberArray.push(s),this.pageSelection.push({skip:m,limit:o})}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(y.u))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-payments"]],decls:62,vars:7,consts:[[1,"user-tabs","mb-4"],[1,"nav","nav-tabs","nav-tabs-bottom","nav-justified"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"nav-link","active",3,"routerLink"],[1,"my-projects-view"],[1,"row"],[1,"col-lg-12"],[1,""],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"table_header"],[1,"col-sm-12","col-md-6"],[1,"dataTables_length"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"table-responsive","table-box"],["matSort","",1,"table","table-center","table-hover","datatable",3,"matSortChange"],[1,"thead-pink"],["mat-sort-header","image"],["mat-sort-header","name"],["mat-sort-header","type"],["mat-sort-header","price"],["mat-sort-header","status"],["mat-sort-header","date"],[4,"ngFor","ngForOf"],[1,"d-flex","align-items-center"],["alt","Logo",1,"img-fluid","avatar-md","rounded-circle","me-2",3,"src"],[1,"badge","badge-pill","bg-outline-red"],[1,"badge","badge-pill","bg-outline-green"],["href","javascript:void(0);",1,"file-circle"],[1,"far","fa-copy"]],template:function(e,i){1&e&&(t.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),t._uU(4,"Overview & Discussions"),t.qZA()(),t.TgZ(5,"li",2)(6,"a",3),t._uU(7,"Milestones"),t.qZA()(),t.TgZ(8,"li",2)(9,"a",3),t._uU(10,"Tasks"),t.qZA()(),t.TgZ(11,"li",2)(12,"a",3),t._uU(13,"Files"),t.qZA()(),t.TgZ(14,"li",2)(15,"a",4),t._uU(16,"Payments"),t.qZA()()()(),t.TgZ(17,"div",5)(18,"div",6)(19,"div",7)(20,"div",8)(21,"div",9)(22,"div",10)(23,"h5",11),t._uU(24,"Payments"),t.qZA()(),t.TgZ(25,"div",12)(26,"div",13)(27,"div",6)(28,"div",14)(29,"div",15)(30,"label"),t._uU(31," Show "),t.TgZ(32,"select",16),t.NdJ("ngModelChange",function(o){return i.pageSize=o})("ngModelChange",function(){return i.PageSize()}),t.TgZ(33,"option",17),t._uU(34,"10"),t.qZA(),t.TgZ(35,"option",18),t._uU(36,"25"),t.qZA(),t.TgZ(37,"option",19),t._uU(38,"50"),t.qZA(),t.TgZ(39,"option",20),t._uU(40,"100"),t.qZA()(),t._uU(41," Entries "),t.qZA()()()()(),t.TgZ(42,"div",21)(43,"table",22),t.NdJ("matSortChange",function(o){return i.sortData(o)}),t.TgZ(44,"thead",23)(45,"tr")(46,"th",24),t._uU(47,"Client "),t.qZA(),t.TgZ(48,"th",25),t._uU(49,"Name "),t.qZA(),t.TgZ(50,"th",26),t._uU(51,"Type of Payment"),t.qZA(),t.TgZ(52,"th",27),t._uU(53,"Payment"),t.qZA(),t.TgZ(54,"th",28),t._uU(55,"Status "),t.qZA(),t.TgZ(56,"th",29),t._uU(57,"Date Paid"),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Invoice"),t.qZA()()(),t.TgZ(60,"tbody"),t.YNc(61,Z,22,7,"tr",30),t.qZA()()()()()()()()()),2&e&&(t.xp6(3),t.Q6J("routerLink","/employer/milestones/overviews"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/milestone"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/tasks"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/files"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/payments"),t.xp6(17),t.Q6J("ngModel",i.pageSize),t.xp6(29),t.Q6J("ngForOf",i.lstPayment))},dependencies:[u.sg,h.rH,l.YN,l.Kr,l.EJ,l.JJ,l.On,d.YE,d.nU]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(v),h.Bz]}),a})();var T=n(8905);let f=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,P,T.m]}),a})()}}]);