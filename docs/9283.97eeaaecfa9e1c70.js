"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[9283],{9283:(k,d,l)=>{l.r(d),l.d(d,{OnholdModule:()=>D});var g=l(6895),h=l(2761),m=l(2710),t=l(4650),_=l(2187),s=l(4006),p=l(6308);function Z(a,o){1&a&&(t.TgZ(0,"tr")(1,"td",33)(2,"h5",34),t._uU(3,"No data found"),t.qZA()()())}function f(a,o){if(1&a&&(t.TgZ(0,"td",54)(1,"p"),t._uU(2),t.qZA()()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.availability)}}function T(a,o){if(1&a&&(t.TgZ(0,"td",54)(1,"p"),t._uU(2),t.qZA()()),2&a){const e=t.oxw().$implicit;t.xp6(2),t.Oqu(e.availability)}}function v(a,o){if(1&a&&(t.TgZ(0,"td")(1,"div",39)(2,"div")(3,"h5",55),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()()),2&a){const e=t.oxw().$implicit;t.xp6(4),t.Oqu(e.money),t.xp6(2),t.hij("\tBalance : ",e.balance,"")}}function A(a,o){if(1&a&&(t.TgZ(0,"td")(1,"div",39)(2,"div")(3,"h5",56),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA()()()()),2&a){const e=t.oxw().$implicit;t.xp6(4),t.Oqu(e.money),t.xp6(2),t.hij("\tBalance : ",e.balance,"")}}function b(a,o){if(1&a&&(t.TgZ(0,"tr")(1,"td")(2,"div",13),t._UZ(3,"input",35)(4,"label",15),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",36)(9,"a",37),t._UZ(10,"img",38),t.qZA(),t.TgZ(11,"div")(12,"h5")(13,"a",37),t._uU(14),t.qZA()(),t.TgZ(15,"p"),t._uU(16),t.qZA()()()(),t.TgZ(17,"td")(18,"div",39)(19,"div")(20,"h5"),t._uU(21,"Deposit Funds"),t.qZA(),t.TgZ(22,"p"),t._uU(23),t.qZA()()()(),t.YNc(24,f,3,1,"td",40),t.YNc(25,T,3,1,"td",40),t.YNc(26,v,7,2,"td",22),t.YNc(27,A,7,2,"td",22),t.TgZ(28,"td")(29,"a",41),t._uU(30," On hold"),t.qZA()(),t.TgZ(31,"td",42)(32,"a",43),t._UZ(33,"i",44),t.qZA(),t.TgZ(34,"div",45)(35,"a",46),t._UZ(36,"img",47),t._uU(37," View Details"),t.qZA(),t.TgZ(38,"a",48),t._UZ(39,"img",49),t._uU(40," User Profile"),t.qZA(),t.TgZ(41,"a",50),t._UZ(42,"img",51),t._uU(43," Approve"),t.qZA(),t.TgZ(44,"a",52),t._UZ(45,"img",53),t._uU(46," Reject "),t.qZA()()()()),2&a){const e=o.$implicit;t.xp6(6),t.Oqu(e.order),t.xp6(3),t.Q6J("routerLink","/admin/profile"),t.xp6(1),t.Q6J("src",e.image,t.LSH),t.xp6(3),t.Q6J("routerLink","/admin/profile"),t.xp6(1),t.Oqu(e.name),t.xp6(2),t.Oqu(e.mail),t.xp6(7),t.Oqu(e.date),t.xp6(1),t.Q6J("ngIf","PayPal"===e.availability),t.xp6(1),t.Q6J("ngIf","Bank Transfer"===e.availability),t.xp6(1),t.Q6J("ngIf","+ 6,335.006 USD"===e.money),t.xp6(1),t.Q6J("ngIf","- 5,165,000 USD"===e.money),t.xp6(11),t.Q6J("routerLink","/admin/user-profile")}}function y(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"li",58),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.moveToPage(n.currentPage-2))}),t.TgZ(1,"a",59),t._uU(2," ... "),t.qZA()()}if(2&a){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function x(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"li",58),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.moveToPage(n.currentPage+2))}),t.TgZ(1,"a",59),t._uU(2," ... "),t.qZA()()}if(2&a){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function U(a,o){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",30)(2,"a",32),t.NdJ("click",function(){const r=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.moveToPage(r))}),t._uU(3),t.qZA()(),t.YNc(4,y,3,1,"li",57),t.YNc(5,x,3,1,"li",57),t.BQk()}if(2&a){const e=o.$implicit,i=o.index,n=t.oxw();t.xp6(1),t.ekj("active",e===n.currentPage),t.Q6J("ngClass",n.pageNumberArray[n.currentPage-2]>e&&1!==e&&n.pageNumberArray.length>6||n.pageNumberArray[n.currentPage]<e&&1!==e&&n.pageNumberArray.length>6&&n.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===i&&n.pageNumberArray.length>6&&n.currentPage>2),t.xp6(1),t.Q6J("ngIf",i===n.pageNumberArray.length-2&&n.pageNumberArray.length>6)}}const u=function(a){return{disabled:a}},C=[{path:"",component:(()=>{class a{constructor(e){this.data=e,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.url="admin"}ngOnInit(){this.getTableData()}getTableData(){this.lstDeposit=[],this.serialNumberArray=[],this.data.adminDepositList().subscribe(e=>{this.totalData=e.totalData,e.data.map((i,n)=>{const r=n+1;n>=this.skip&&r<=this.limit&&(i.id=r,this.lstDeposit.push(i),this.serialNumberArray.push(r))}),this.dataSource=new m.r4(this.lstDeposit),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(e){const i=this.lstDeposit.slice();this.lstDeposit=e.active&&""!==e.direction?i.sort((n,r)=>(n[e.active]<r[e.active]?-1:1)*("asc"===e.direction?1:-1)):i}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.lstDeposit=this.dataSource.filteredData}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}changePageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,i){this.pageNumberArray=[],this.totalPages=e/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let n=1;n<=this.totalPages;n++){const r=i*n,c=r-i;this.pageNumberArray.push(n),this.pageSelection.push({skip:c,limit:r})}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(_.u))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-onhold"]],decls:60,vars:14,consts:[[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table_header"],[1,"dataTables_length"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"dataTables_filter"],[1,"table-scroll"],["matSort","",1,"table","table-center","table-hover","mb-0","datatable",3,"matSortChange"],[1,"form-check","custom-checkbox"],["type","checkbox","id","select-all",1,"form-check-input"],[1,"form-check-label"],["mat-sort-header","order"],["mat-sort-header","name"],["mat-sort-header","date"],["mat-sort-header","availability"],["mat-sort-header","money"],["mat-sort-header","status"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["colspan","9"],[2,"text-align","center"],["type","checkbox",1,"form-check-input"],[1,"table-avatar","user-profile"],[3,"routerLink"],["alt","User Image",1,"avatar-img","rounded-circle",3,"src"],[1,"table-avatar","content-user"],["class","content-user",4,"ngIf"],["href","javascript:",1,"on-hold"],[1,"text-end","three-dots"],["href","#","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link"],[1,"fas","fa-ellipsis-v"],[1,"dropdown-menu","user-menu-list"],["href","#","data-bs-toggle","modal","data-bs-target","#transaction-category",1,"dropdown-item"],["src","assets/img/icon/icon-01.svg","alt","",1,"me-2"],[1,"dropdown-item",3,"routerLink"],["src","assets/img/icon/icon-05.svg","alt","",1,"me-2"],["href","javascript:",1,"dropdown-item"],["src","assets/img/icon/icon-06.svg","alt","",1,"me-2"],["href","javascript:",1,"dropdown-item","mb-0"],["src","assets/img/icon/icon-07.svg","alt","",1,"me-2"],[1,"content-user"],[1,"text-success"],[1,"text-danger"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label"),t._uU(6," Show "),t.qZA(),t.TgZ(7,"select",5),t.NdJ("ngModelChange",function(r){return i.pageSize=r})("ngModelChange",function(){return i.changePageSize()}),t.TgZ(8,"option",6),t._uU(9,"10"),t.qZA(),t.TgZ(10,"option",7),t._uU(11,"25"),t.qZA(),t.TgZ(12,"option",8),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",9),t._uU(15,"100"),t.qZA()(),t.TgZ(16,"label"),t._uU(17,"Entries"),t.qZA()(),t.TgZ(18,"div",10)(19,"label"),t._uU(20," Search: "),t.qZA(),t.TgZ(21,"input",5),t.NdJ("ngModelChange",function(r){return i.searchDataValue=r})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),t.qZA()()(),t.TgZ(22,"div",11)(23,"table",12),t.NdJ("matSortChange",function(r){return i.sortData(r)}),t.TgZ(24,"thead")(25,"tr")(26,"th")(27,"div",13),t._UZ(28,"input",14)(29,"label",15),t.qZA()(),t.TgZ(30,"th",16),t._uU(31,"Order"),t.qZA(),t.TgZ(32,"th",17),t._uU(33,"User"),t.qZA(),t.TgZ(34,"th",18),t._uU(35,"Details"),t.qZA(),t.TgZ(36,"th",19),t._uU(37,"Tnx By"),t.qZA(),t.TgZ(38,"th",20),t._uU(39,"Amount"),t.qZA(),t.TgZ(40,"th",21),t._uU(41,"Status"),t.qZA(),t._UZ(42,"th"),t.qZA(),t.YNc(43,Z,4,0,"tr",22),t.qZA(),t.TgZ(44,"tbody"),t.YNc(45,b,47,12,"tr",23),t.qZA()()(),t.TgZ(46,"div",24)(47,"div",25)(48,"div",26),t._uU(49),t.qZA()(),t.TgZ(50,"div",27)(51,"div",28)(52,"ul",29)(53,"li",30)(54,"a",31),t.NdJ("click",function(){return i.getMoreData("previous")}),t._uU(55,"Previous"),t.qZA()(),t.YNc(56,U,6,6,"ng-container",23),t.TgZ(57,"li",30)(58,"a",32),t.NdJ("click",function(){return i.getMoreData("next")}),t._uU(59,"Next "),t.qZA()()()()()()()()()),2&e&&(t.xp6(7),t.Q6J("ngModel",i.pageSize),t.xp6(14),t.Q6J("ngModel",i.searchDataValue),t.xp6(22),t.Q6J("ngIf",0===i.lstDeposit.length),t.xp6(2),t.Q6J("ngForOf",i.lstDeposit),t.xp6(4),t.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(10,u,1===i.currentPage)),t.xp6(3),t.Q6J("ngForOf",i.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(12,u,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.lstDeposit.length)))},dependencies:[g.mk,g.sg,g.O5,h.rH,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.On,p.YE,p.nU]}),a})()}];let O=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[h.Bz.forChild(C),h.Bz]}),a})();var q=l(8905);let D=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,O,q.m]}),a})()}}]);