"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[5070],{5070:(k,d,l)=>{l.r(d),l.d(d,{CompletedModule:()=>x});var c=l(6895),p=l(2761),h=l(2710),e=l(4650),_=l(2187),s=l(4006),m=l(6308);function Z(a,o){1&a&&(e.TgZ(0,"tr")(1,"td",33)(2,"h5",34),e._uU(3,"No data found"),e.qZA()()())}function f(a,o){if(1&a&&(e.TgZ(0,"td",56)(1,"p"),e._uU(2),e.qZA()()),2&a){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.availability)}}function T(a,o){if(1&a&&(e.TgZ(0,"td",56)(1,"p"),e._uU(2),e.qZA()()),2&a){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.availability)}}function C(a,o){if(1&a&&(e.TgZ(0,"tr")(1,"td")(2,"div",13),e._UZ(3,"input",35)(4,"label",15),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"div",36)(9,"a",37),e._UZ(10,"img",38),e.qZA(),e.TgZ(11,"div")(12,"h5")(13,"a",39),e._uU(14),e.qZA()(),e.TgZ(15,"p"),e._uU(16),e.qZA()()()(),e.TgZ(17,"td")(18,"div",40)(19,"div")(20,"h5"),e._uU(21,"Deposit Funds"),e.qZA(),e.TgZ(22,"p"),e._uU(23),e.qZA()()()(),e.YNc(24,f,3,1,"td",41),e.YNc(25,T,3,1,"td",41),e.TgZ(26,"td")(27,"div",40)(28,"div")(29,"h5",42),e._uU(30),e.qZA(),e.TgZ(31,"p"),e._uU(32),e.qZA()()()(),e.TgZ(33,"td")(34,"a",43),e._uU(35,"Completed"),e.qZA()(),e.TgZ(36,"td",44)(37,"a",45),e._UZ(38,"i",46),e.qZA(),e.TgZ(39,"div",47)(40,"a",48),e._UZ(41,"img",49),e._uU(42," View Details"),e.qZA(),e.TgZ(43,"a",50),e._UZ(44,"img",51),e._uU(45," User Profile"),e.qZA(),e.TgZ(46,"a",52),e._UZ(47,"img",53),e._uU(48," Approve"),e.qZA(),e.TgZ(49,"a",54),e._UZ(50,"img",55),e._uU(51," Reject "),e.qZA()()()()),2&a){const t=o.$implicit;e.xp6(6),e.Oqu(t.order),e.xp6(4),e.Q6J("src",t.image,e.LSH),e.xp6(3),e.Q6J("routerLink","/admin/profile"),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Oqu(t.mail),e.xp6(7),e.Oqu(t.date),e.xp6(1),e.Q6J("ngIf","PayPal"===t.availability),e.xp6(1),e.Q6J("ngIf","Bank Transfer"===t.availability),e.xp6(5),e.Oqu(t.money),e.xp6(2),e.hij("\tBalance : ",t.balance,""),e.xp6(11),e.Q6J("routerLink","/admin/user-profile")}}function v(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"li",58),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.moveToPage(n.currentPage-2))}),e.TgZ(1,"a",59),e._uU(2," ... "),e.qZA()()}if(2&a){const t=e.oxw(2);e.Q6J("hidden",1===t.currentPage)}}function A(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"li",58),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.moveToPage(n.currentPage+2))}),e.TgZ(1,"a",59),e._uU(2," ... "),e.qZA()()}if(2&a){const t=e.oxw(2);e.Q6J("hidden",t.currentPage>=t.pageNumberArray[t.pageNumberArray.length-2]||t.totalData<t.serialNumberArray[t.serialNumberArray.length-1])}}function b(a,o){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",30)(2,"a",32),e.NdJ("click",function(){const r=e.CHM(t).$implicit,g=e.oxw();return e.KtG(g.moveToPage(r))}),e._uU(3),e.qZA()(),e.YNc(4,v,3,1,"li",57),e.YNc(5,A,3,1,"li",57),e.BQk()}if(2&a){const t=o.$implicit,i=o.index,n=e.oxw();e.xp6(1),e.ekj("active",t===n.currentPage),e.Q6J("ngClass",n.pageNumberArray[n.currentPage-2]>t&&1!==t&&n.pageNumberArray.length>6||n.pageNumberArray[n.currentPage]<t&&1!==t&&n.pageNumberArray.length>6&&n.pageNumberArray.length!==t?"hide-page-no":"show-page-no"),e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",0===i&&n.pageNumberArray.length>6&&n.currentPage>2),e.xp6(1),e.Q6J("ngIf",i===n.pageNumberArray.length-2&&n.pageNumberArray.length>6)}}const u=function(a){return{disabled:a}},y=[{path:"",component:(()=>{class a{constructor(t){this.data=t,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.url="admin"}ngOnInit(){this.getTableData()}getTableData(){this.lstDeposit=[],this.serialNumberArray=[],this.data.adminDepositList().subscribe(t=>{this.totalData=t.totalData,t.data.map((i,n)=>{const r=n+1;n>=this.skip&&r<=this.limit&&(i.id=r,this.lstDeposit.push(i),this.serialNumberArray.push(r))}),this.dataSource=new h.r4(this.lstDeposit),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(t){const i=this.lstDeposit.slice();this.lstDeposit=t.active&&""!==t.direction?i.sort((n,r)=>(n[t.active]<r[t.active]?-1:1)*("asc"===t.direction?1:-1)):i}searchData(t){this.dataSource.filter=t.trim().toLowerCase(),this.lstDeposit=this.dataSource.filteredData}getMoreData(t){"next"==t?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==t&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(t){this.currentPage=t,this.skip=this.pageSelection[t-1].skip,this.limit=this.pageSelection[t-1].limit,t>this.currentPage?this.pageIndex=t-1:t<this.currentPage&&(this.pageIndex=t+1),this.getTableData()}changePageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(t,i){this.pageNumberArray=[],this.totalPages=t/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let n=1;n<=this.totalPages;n++){const r=i*n,g=r-i;this.pageNumberArray.push(n),this.pageSelection.push({skip:g,limit:r})}}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(_.u))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-completed"]],decls:60,vars:14,consts:[[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table_header"],[1,"dataTables_length"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"dataTables_filter"],[1,"table-scroll"],["matSort","",1,"table","table-center","table-hover","mb-0","datatable",3,"matSortChange"],[1,"form-check","custom-checkbox"],["type","checkbox","id","select-all",1,"form-check-input"],[1,"form-check-label"],["mat-sort-header","order"],["mat-sort-header","name"],["mat-sort-header","date"],["mat-sort-header","availability"],["mat-sort-header","money"],["mat-sort-header","status"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["colspan","9"],[2,"text-align","center"],["type","checkbox",1,"form-check-input"],[1,"table-avatar","user-profile"],["href","profile.html"],["alt","User Image",1,"avatar-img","rounded-circle",3,"src"],[3,"routerLink"],[1,"table-avatar","content-user"],["class","content-user",4,"ngIf"],[1,"text-success"],["href","#","data-bs-toggle","modal","data-bs-target","#transaction-category",1,"user-active-btn"],[1,"text-end","three-dots"],["href","#","data-bs-toggle","dropdown",1,"dropdown-toggle","nav-link"],[1,"fas","fa-ellipsis-v"],[1,"dropdown-menu","user-menu-list"],["href","#","data-bs-toggle","modal","data-bs-target","#transaction-category",1,"dropdown-item"],["src","assets/img/icon/icon-01.svg","alt","",1,"me-2"],[1,"dropdown-item",3,"routerLink"],["src","assets/img/icon/icon-05.svg","alt","",1,"me-2"],["href","javascript:",1,"dropdown-item"],["src","assets/img/icon/icon-06.svg","alt","",1,"me-2"],["href","javascript:",1,"dropdown-item","mb-0"],["src","assets/img/icon/icon-07.svg","alt","",1,"me-2"],[1,"content-user"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label"),e._uU(6," Show "),e.qZA(),e.TgZ(7,"select",5),e.NdJ("ngModelChange",function(r){return i.pageSize=r})("ngModelChange",function(){return i.changePageSize()}),e.TgZ(8,"option",6),e._uU(9,"10"),e.qZA(),e.TgZ(10,"option",7),e._uU(11,"25"),e.qZA(),e.TgZ(12,"option",8),e._uU(13,"50"),e.qZA(),e.TgZ(14,"option",9),e._uU(15,"100"),e.qZA()(),e.TgZ(16,"label"),e._uU(17,"Entries"),e.qZA()(),e.TgZ(18,"div",10)(19,"label"),e._uU(20," Search: "),e.qZA(),e.TgZ(21,"input",5),e.NdJ("ngModelChange",function(r){return i.searchDataValue=r})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),e.qZA()()(),e.TgZ(22,"div",11)(23,"table",12),e.NdJ("matSortChange",function(r){return i.sortData(r)}),e.TgZ(24,"thead")(25,"tr")(26,"th")(27,"div",13),e._UZ(28,"input",14)(29,"label",15),e.qZA()(),e.TgZ(30,"th",16),e._uU(31,"Order"),e.qZA(),e.TgZ(32,"th",17),e._uU(33,"User"),e.qZA(),e.TgZ(34,"th",18),e._uU(35,"Details"),e.qZA(),e.TgZ(36,"th",19),e._uU(37,"Tnx By"),e.qZA(),e.TgZ(38,"th",20),e._uU(39,"Amount"),e.qZA(),e.TgZ(40,"th",21),e._uU(41,"Status"),e.qZA(),e._UZ(42,"th"),e.qZA(),e.YNc(43,Z,4,0,"tr",22),e.qZA(),e.TgZ(44,"tbody"),e.YNc(45,C,52,11,"tr",23),e.qZA()()(),e.TgZ(46,"div",24)(47,"div",25)(48,"div",26),e._uU(49),e.qZA()(),e.TgZ(50,"div",27)(51,"div",28)(52,"ul",29)(53,"li",30)(54,"a",31),e.NdJ("click",function(){return i.getMoreData("previous")}),e._uU(55,"Previous"),e.qZA()(),e.YNc(56,b,6,6,"ng-container",23),e.TgZ(57,"li",30)(58,"a",32),e.NdJ("click",function(){return i.getMoreData("next")}),e._uU(59,"Next "),e.qZA()()()()()()()()()),2&t&&(e.xp6(7),e.Q6J("ngModel",i.pageSize),e.xp6(14),e.Q6J("ngModel",i.searchDataValue),e.xp6(22),e.Q6J("ngIf",0===i.lstDeposit.length),e.xp6(2),e.Q6J("ngForOf",i.lstDeposit),e.xp6(4),e.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),e.xp6(4),e.Q6J("ngClass",e.VKq(10,u,1===i.currentPage)),e.xp6(3),e.Q6J("ngForOf",i.pageNumberArray),e.xp6(1),e.Q6J("ngClass",e.VKq(12,u,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.lstDeposit.length)))},dependencies:[c.mk,c.sg,c.O5,p.rH,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.On,m.YE,m.nU]}),a})()}];let U=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.Bz.forChild(y),p.Bz]}),a})();var q=l(8905);let x=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.ez,U,q.m]}),a})()}}]);