"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[2287],{2287:(N,u,s)=>{s.r(u),s.d(u,{ProvidersModule:()=>C});var c=s(6895),g=s(2761),h=s(2710),e=s(4650),_=s(2187),l=s(4006),p=s(6308);function v(a,o){1&a&&(e.TgZ(0,"tr")(1,"td",77)(2,"h5",78),e._uU(3,"No data found"),e.qZA()()())}function Z(a,o){if(1&a&&(e.TgZ(0,"td")(1,"a",90),e._uU(2),e.qZA()()),2&a){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.status)}}function f(a,o){if(1&a&&(e.TgZ(0,"td")(1,"a",91),e._uU(2),e.qZA()()),2&a){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.status)}}function b(a,o){if(1&a&&(e.TgZ(0,"tr")(1,"td")(2,"div",79),e._UZ(3,"input",80)(4,"label",81),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"h2",82)(9,"a",83),e._UZ(10,"img",84),e.qZA()()(),e.TgZ(11,"td")(12,"h2",82)(13,"a",83),e._uU(14),e.qZA()()(),e.TgZ(15,"td")(16,"h2",82)(17,"a",85),e._uU(18),e.qZA()()(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.YNc(23,Z,3,1,"td",46),e.YNc(24,f,3,1,"td",46),e.TgZ(25,"td",45)(26,"a",86),e._UZ(27,"i",87),e.qZA(),e.TgZ(28,"a",88),e._UZ(29,"i",89),e.qZA()()()),2&a){const t=o.$implicit;e.xp6(6),e.Oqu(t.name),e.xp6(4),e.Q6J("src",t.image,e.LSH),e.xp6(4),e.Oqu(t.company),e.xp6(4),e.hij(" ",t.contact," "),e.xp6(2),e.Oqu(t.website),e.xp6(2),e.hij(" ",t.projects," "),e.xp6(1),e.Q6J("ngIf","Enabled"===t.status),e.xp6(1),e.Q6J("ngIf","Disable"===t.status)}}function T(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"li",93),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.moveToPage(r.currentPage-2))}),e.TgZ(1,"a",94),e._uU(2," ... "),e.qZA()()}if(2&a){const t=e.oxw(2);e.Q6J("hidden",1===t.currentPage)}}function A(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"li",93),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(2);return e.KtG(r.moveToPage(r.currentPage+2))}),e.TgZ(1,"a",94),e._uU(2," ... "),e.qZA()()}if(2&a){const t=e.oxw(2);e.Q6J("hidden",t.currentPage>=t.pageNumberArray[t.pageNumberArray.length-2]||t.totalData<t.serialNumberArray[t.serialNumberArray.length-1])}}function P(a,o){if(1&a){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",54)(2,"a",56),e.NdJ("click",function(){const n=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.moveToPage(n))}),e._uU(3),e.qZA()(),e.YNc(4,T,3,1,"li",92),e.YNc(5,A,3,1,"li",92),e.BQk()}if(2&a){const t=o.$implicit,i=o.index,r=e.oxw();e.xp6(1),e.ekj("active",t===r.currentPage),e.Q6J("ngClass",r.pageNumberArray[r.currentPage-2]>t&&1!==t&&r.pageNumberArray.length>6||r.pageNumberArray[r.currentPage]<t&&1!==t&&r.pageNumberArray.length>6&&r.pageNumberArray.length!==t?"hide-page-no":"show-page-no"),e.xp6(2),e.hij(" ",t," "),e.xp6(1),e.Q6J("ngIf",0===i&&r.pageNumberArray.length>6&&r.currentPage>2),e.xp6(1),e.Q6J("ngIf",i===r.pageNumberArray.length-2&&r.pageNumberArray.length>6)}}const m=function(a){return{disabled:a}},U=[{path:"",component:(()=>{class a{constructor(t){this.data=t,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.filter=!1}openFilter(){this.filter=!this.filter}ngOnInit(){this.getTableData()}getTableData(){this.lstProvider=[],this.serialNumberArray=[],this.data.adminProviderList().subscribe(t=>{this.totalData=t.totalData,t.data.map((i,r)=>{const n=r+1;r>=this.skip&&n<=this.limit&&(i.id=n,this.lstProvider.push(i),this.serialNumberArray.push(n))}),this.dataSource=new h.r4(this.lstProvider),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(t){const i=this.lstProvider.slice();this.lstProvider=t.active&&""!==t.direction?i.sort((r,n)=>(r[t.active]<n[t.active]?-1:1)*("asc"===t.direction?1:-1)):i}searchData(t){this.dataSource.filter=t.trim().toLowerCase(),this.lstProvider=this.dataSource.filteredData}getMoreData(t){"next"==t?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==t&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(t){this.currentPage=t,this.skip=this.pageSelection[t-1].skip,this.limit=this.pageSelection[t-1].limit,t>this.currentPage?this.pageIndex=t-1:t<this.currentPage&&(this.pageIndex=t+1),this.getTableData()}changePageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(t,i){this.pageNumberArray=[],this.totalPages=t/i,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let r=1;r<=this.totalPages;r++){const n=i*r,d=n-i;this.pageNumberArray.push(r),this.pageSelection.push({skip:d,limit:n})}}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(_.u))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-providers"]],decls:158,vars:16,consts:[[1,"page-wrapper"],[1,"content","container-fluid"],[1,"page-header"],[1,"row","align-items-center"],[1,"col"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-auto"],["href","javascript:void(0);","id","filter_search",1,"btn","filter-btn",3,"click"],[1,"fas","fa-filter"],["id","filter_inputs",1,"card","filter-card",3,"ngClass"],[1,"card-body","pb-0"],["action","#","method","post"],[1,"row","filter-row"],[1,"col-sm-6","col-md-3"],[1,"form-group"],["type","text",1,"form-control"],[1,"cal-icon"],["type","text",1,"form-control","datetimepicker"],["type","submit",1,"btn","btn-primary","btn-block"],[1,"row"],[1,"col-sm-12"],[1,"card"],[1,"card-body"],[1,"table-responsive"],[1,"table_header"],[1,"dataTables_length"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"dataTables_filter"],[1,"table-scroll"],["matSort","",1,"table","table-center","table-hover","mb-0","datatable",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","image"],["mat-sort-header","company"],["mat-sort-header","contact"],["mat-sort-header","website"],["mat-sort-header","projects"],["mat-sort-header","status"],[1,"text-end"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["id","add-category",1,"modal","fade","custom-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header","flex-wrap"],[1,"modal-title"],["type","button","data-bs-dismiss","modal",1,"close"],[1,"modal-body"],["type","text","value","Focused Holistic Hardware",1,"form-control"],["type","text","value","Emily Smith",1,"form-control"],["type","text","value","https://focusedhardware.de",1,"form-control"],["type","text","value","120",1,"form-control"],[1,"form-control","form-select"],["selected",""],[1,"mt-4"],["id","delete_category","role","dialog",1,"modal","custom-modal","fade"],[1,"form-header"],[1,"modal-btn","delete-action"],[1,"col-6"],["href","javascript:void(0);",1,"btn","btn-primary","continue-btn"],["href","javascript:void(0);","data-bs-dismiss","modal",1,"btn","btn-primary","cancel-btn"],["colspan","9"],[2,"text-align","center"],[1,"form-check","custom-checkbox"],["type","checkbox","id","customCheck5",1,"form-check-input"],["for","customCheck5",1,"form-check-label"],[1,"table-avatar"],["href","javascript:void(0);"],["alt","User Image",1,"me-2",3,"src"],["href","profile.html"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#add-category",1,"btn","btn-sm","btn-secondary","me-2"],[1,"far","fa-edit"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_category",1,"btn","btn-sm","btn-danger"],[1,"far","fa-trash-alt"],["href","javascript:",1,"btn","btn-enable"],["href","javascript:",1,"btn","btn-disable"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),e._uU(6,"Providers"),e.qZA(),e.TgZ(7,"ul",6)(8,"li",7)(9,"a",8),e._uU(10,"Home"),e.qZA()(),e.TgZ(11,"li",9),e._uU(12,"Providers"),e.qZA()()(),e.TgZ(13,"div",10)(14,"a",11),e.NdJ("click",function(){return i.openFilter()}),e._UZ(15,"i",12),e.qZA()()()(),e.TgZ(16,"div",13)(17,"div",14)(18,"form",15)(19,"div",16)(20,"div",17)(21,"div",18)(22,"label"),e._uU(23,"Company Name"),e.qZA(),e._UZ(24,"input",19),e.qZA()(),e.TgZ(25,"div",17)(26,"div",18)(27,"div",20)(28,"label"),e._uU(29,"From Date"),e.qZA(),e._UZ(30,"input",21),e.qZA()()(),e.TgZ(31,"div",17)(32,"div",18)(33,"div",20)(34,"label"),e._uU(35,"To Date"),e.qZA(),e._UZ(36,"input",21),e.qZA()()(),e.TgZ(37,"div",17)(38,"div",18)(39,"button",22),e._uU(40,"Submit"),e.qZA()()()()()()(),e.TgZ(41,"div",23)(42,"div",24)(43,"div",25)(44,"div",26)(45,"div",27)(46,"div",28)(47,"div",29)(48,"label"),e._uU(49," Show "),e.qZA(),e.TgZ(50,"select",30),e.NdJ("ngModelChange",function(n){return i.pageSize=n})("ngModelChange",function(){return i.changePageSize()}),e.TgZ(51,"option",31),e._uU(52,"10"),e.qZA(),e.TgZ(53,"option",32),e._uU(54,"25"),e.qZA(),e.TgZ(55,"option",33),e._uU(56,"50"),e.qZA(),e.TgZ(57,"option",34),e._uU(58,"100"),e.qZA()(),e.TgZ(59,"label"),e._uU(60,"Entries"),e.qZA()(),e.TgZ(61,"div",35)(62,"label"),e._uU(63," Search: "),e.qZA(),e.TgZ(64,"input",30),e.NdJ("ngModelChange",function(n){return i.searchDataValue=n})("ngModelChange",function(){return i.searchData(i.searchDataValue)}),e.qZA()()(),e.TgZ(65,"div",36)(66,"table",37),e.NdJ("matSortChange",function(n){return i.sortData(n)}),e.TgZ(67,"thead")(68,"tr"),e._UZ(69,"th"),e.TgZ(70,"th",38),e._uU(71,"ID"),e.qZA(),e.TgZ(72,"th",39),e._uU(73,"Logo"),e.qZA(),e.TgZ(74,"th",40),e._uU(75,"Company name"),e.qZA(),e.TgZ(76,"th",41),e._uU(77,"Primary contact"),e.qZA(),e.TgZ(78,"th",42),e._uU(79,"website"),e.qZA(),e.TgZ(80,"th",43),e._uU(81,"Total Projects"),e.qZA(),e.TgZ(82,"th",44),e._uU(83,"Status"),e.qZA(),e.TgZ(84,"th",45),e._uU(85,"Actions"),e.qZA()(),e.YNc(86,v,4,0,"tr",46),e.qZA(),e.TgZ(87,"tbody"),e.YNc(88,b,30,8,"tr",47),e.qZA()()(),e.TgZ(89,"div",48)(90,"div",49)(91,"div",50),e._uU(92),e.qZA()(),e.TgZ(93,"div",51)(94,"div",52)(95,"ul",53)(96,"li",54)(97,"a",55),e.NdJ("click",function(){return i.getMoreData("previous")}),e._uU(98,"Previous"),e.qZA()(),e.YNc(99,P,6,6,"ng-container",47),e.TgZ(100,"li",54)(101,"a",56),e.NdJ("click",function(){return i.getMoreData("next")}),e._uU(102,"Next "),e.qZA()()()()()()()()()()()()(),e.TgZ(103,"div",57)(104,"div",58)(105,"div",59)(106,"div",60)(107,"h4",61),e._uU(108,"Edit Provider"),e.qZA(),e.TgZ(109,"button",62)(110,"span"),e._uU(111,"\xd7"),e.qZA()()(),e.TgZ(112,"div",63)(113,"form")(114,"div",18)(115,"label"),e._uU(116,"Company Name"),e.qZA(),e._UZ(117,"input",64),e.qZA(),e.TgZ(118,"div",18)(119,"label"),e._uU(120,"Primary Contact"),e.qZA(),e._UZ(121,"input",65),e.qZA(),e.TgZ(122,"div",18)(123,"label"),e._uU(124,"Website"),e.qZA(),e._UZ(125,"input",66),e.qZA(),e.TgZ(126,"div",18)(127,"label"),e._uU(128,"Total Projects"),e.qZA(),e._UZ(129,"input",67),e.qZA(),e.TgZ(130,"div",18)(131,"label"),e._uU(132,"Status"),e.qZA(),e.TgZ(133,"select",68)(134,"option",69),e._uU(135,"Enabled"),e.qZA(),e.TgZ(136,"option"),e._uU(137,"Disable"),e.qZA()()(),e.TgZ(138,"div",70)(139,"button",22),e._uU(140,"Submit"),e.qZA()()()()()()(),e.TgZ(141,"div",71)(142,"div",58)(143,"div",59)(144,"div",63)(145,"div",72)(146,"h3"),e._uU(147,"Delete"),e.qZA(),e.TgZ(148,"p"),e._uU(149,"Are you sure want to delete?"),e.qZA()(),e.TgZ(150,"div",73)(151,"div",23)(152,"div",74)(153,"a",75),e._uU(154,"Delete"),e.qZA()(),e.TgZ(155,"div",74)(156,"a",76),e._uU(157,"Cancel"),e.qZA()()()()()()()()),2&t&&(e.xp6(9),e.Q6J("routerLink","/home"),e.xp6(7),e.Q6J("ngClass",!0===i.filter?"filter-show":""),e.xp6(34),e.Q6J("ngModel",i.pageSize),e.xp6(14),e.Q6J("ngModel",i.searchDataValue),e.xp6(22),e.Q6J("ngIf",0===i.lstProvider.length),e.xp6(2),e.Q6J("ngForOf",i.lstProvider),e.xp6(4),e.lnq(" Showing ",i.serialNumberArray[0]," to ",i.serialNumberArray[i.serialNumberArray.length-1]," of ",i.totalData," entries "),e.xp6(4),e.Q6J("ngClass",e.VKq(12,m,1===i.currentPage)),e.xp6(3),e.Q6J("ngForOf",i.pageNumberArray),e.xp6(1),e.Q6J("ngClass",e.VKq(14,m,i.currentPage===i.pageNumberArray[i.pageNumberArray.length-1]||0===i.lstProvider.length)))},dependencies:[c.mk,c.sg,c.O5,g.rH,l._Y,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.JL,l.On,l.F,p.YE,p.nU]}),a})()}];let q=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.Bz.forChild(U),g.Bz]}),a})();var y=s(8905);let C=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[c.ez,q,y.m]}),a})()}}]);