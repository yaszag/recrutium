"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[2814],{2814:(C,u,s)=>{s.r(u),s.d(u,{EarningsModule:()=>E});var p=s(6895),c=s(2761),Z=s(2710),t=s(4650),_=s(2187),d=s(6205),l=s(4006),h=s(6308),A=s(2320);const T=["chart"];function f(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td")(2,"div",49),t._UZ(3,"input",69)(4,"label",51),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"a",70),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td",71)(19,"a",72),t._UZ(20,"i",73),t.qZA(),t.TgZ(21,"a",74),t._UZ(22,"i",75),t.qZA()()()),2&i){const e=o.$implicit;t.xp6(6),t.Oqu(e.transaction),t.xp6(3),t.Oqu(e.refernce),t.xp6(2),t.Oqu(e.project),t.xp6(2),t.Oqu(e.value),t.xp6(2),t.Oqu(e.income),t.xp6(2),t.Oqu(e.payment)}}function v(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"li",77),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.moveToPage(n.currentPage-2))}),t.TgZ(1,"a",78),t._uU(2," ... "),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("hidden",1===e.currentPage)}}function b(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"li",77),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.moveToPage(n.currentPage+2))}),t.TgZ(1,"a",78),t._uU(2," ... "),t.qZA()()}if(2&i){const e=t.oxw(2);t.Q6J("hidden",e.currentPage>=e.pageNumberArray[e.pageNumberArray.length-2]||e.totalData<e.serialNumberArray[e.serialNumberArray.length-1])}}function U(i,o){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",66)(2,"a",68),t.NdJ("click",function(){const r=t.CHM(e).$implicit,g=t.oxw();return t.KtG(g.moveToPage(r))}),t._uU(3),t.qZA()(),t.YNc(4,v,3,1,"li",76),t.YNc(5,b,3,1,"li",76),t.BQk()}if(2&i){const e=o.$implicit,a=o.index,n=t.oxw();t.xp6(1),t.ekj("active",e===n.currentPage),t.Q6J("ngClass",n.pageNumberArray[n.currentPage-2]>e&&1!==e&&n.pageNumberArray.length>6||n.pageNumberArray[n.currentPage]<e&&1!==e&&n.pageNumberArray.length>6&&n.pageNumberArray.length!==e?"hide-page-no":"show-page-no"),t.xp6(2),t.hij(" ",e," "),t.xp6(1),t.Q6J("ngIf",0===a&&n.pageNumberArray.length>6&&n.currentPage>2),t.xp6(1),t.Q6J("ngIf",a===n.pageNumberArray.length-2&&n.pageNumberArray.length>6)}}const m=function(i){return{disabled:i}},q=[{path:"",component:(()=>{class i{constructor(e){this.data=e,this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0,this.chartOptions={series:[{name:"Maximum",data:[0,5,16,7,18,26,7,21,10,7,10],color:"#2d93a9"}],markers:{size:4,hover:{size:5}},chart:{height:350,type:"line",toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:1},xaxis:{axisBorder:{show:!0,color:"#000000"},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","oct","nov","dec"]},yaxis:{axisTicks:{show:!0,color:"#000000"},axisBorder:{show:!0,color:"#000000"},min:-2,max:30},tooltip:{x:{format:"MMM"}}}}ngOnInit(){this.getlstEarning()}getlstEarning(){this.lstEarning=[],this.serialNumberArray=[],this.data.adminEarning().subscribe(e=>{this.totalData=e.totalData,e.data.map((a,n)=>{const r=n+1;n>=this.skip&&r<=this.limit&&(a.id=r,this.lstEarning.push(a),this.serialNumberArray.push(r))}),this.dataSource=new Z.r4(this.lstEarning),this.calculateTotalPages(this.totalData,this.pageSize)})}sortData(e){const a=this.lstEarning.slice();this.lstEarning=e.active&&""!==e.direction?a.sort((n,r)=>(n[e.active]<r[e.active]?-1:1)*("asc"===e.direction?1:-1)):a}searchData(e){this.dataSource.filter=e.trim().toLowerCase(),this.lstEarning=this.dataSource.filteredData}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getlstEarning()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getlstEarning())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getlstEarning()}changePageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getlstEarning()}calculateTotalPages(e,a){this.pageNumberArray=[],this.totalPages=e/a,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let n=1;n<=this.totalPages;n++){const r=a*n,g=r-a;this.pageNumberArray.push(n),this.pageSelection.push({skip:g,limit:r})}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.u))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-earnings"]],viewQuery:function(e,a){if(1&e&&t.Gf(T,5),2&e){let n;t.iGM(n=t.CRH())&&(a.chart=n.first)}},decls:188,vars:32,consts:[[1,"page-wrapper"],[1,"content","report-box","container-fluid"],[1,"page-header","page-border"],[1,"row","align-items-center"],[1,"col-lg-6"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[1,"breadcrumb-item","active"],[1,"col-lg-6","report-btns"],[1,"project-report"],[1,"active-project"],[1,"project-chart"],[1,"row"],[1,"subscribe-employe"],[1,"active"],[1,"col-xl-12","d-flex"],[1,"card","flex-fill"],[1,"card-header"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-white","btn-sm","dropdown-toggle"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],["href","javascript:void(0);",1,"dropdown-item"],[1,"card-body"],["id","chart-sracked",1,"earing-chart"],[3,"series","chart","dataLabels","plotOptions","yaxis","markers","legend","fill","stroke","tooltip","xaxis"],[1,"project-download"],[1,"title-group","d-flex"],[1,"down-load"],["href","#",1,"btn-primary"],[1,"fas","fa-cloud-download-alt"],[1,"select-group"],[1,"col-lg-2","col-md-6"],[1,"form-select"],[1,"card"],[1,"table-responsive"],[1,"table_header"],[1,"dataTables_length"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"dataTables_filter"],[1,"table-scroll"],["matSort","",1,"table","table-center","table-hover","mb-0","datatable",3,"matSortChange"],[1,"form-check","custom-checkbox"],["type","checkbox","id","select-all",1,"form-check-input"],["for","customCheck1",1,"form-check-label"],["mat-sort-header","transaction"],["mat-sort-header","refernce"],["mat-sort-header","project"],["mat-sort-header","value"],["mat-sort-header","income"],["mat-sort-header","payment"],[1,"text-end"],[4,"ngFor","ngForOf"],[1,"table_footer"],[1,"col-sm-12","col-md-5"],[1,"dataTables_info"],[1,"col-sm-12","col-md-7"],[1,"pagination_section"],[1,"pagination"],[1,"page-item",3,"ngClass"],["href","javascript:void(0);","tabindex","-1",1,"page-link",3,"click"],["href","javascript:void(0);",1,"page-link",3,"click"],["type","checkbox","id","customCheck1",1,"form-check-input"],["href","javascript:"],[1,"text-end","subscription-end"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#edit-category",1,"btn","btn-sm","btn-secondary","me-2"],[1,"far","fa-edit"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#delete_category",1,"btn","btn-sm","btn-danger"],[1,"far","fa-trash-alt"],["class","page-item",3,"hidden","click",4,"ngIf"],[1,"page-item",3,"hidden","click"],["href","javascript:void(0);",1,"page-link"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6,"Reports"),t.qZA(),t.TgZ(7,"ul",6)(8,"li",7)(9,"a",8),t._uU(10,"Home"),t.qZA()(),t.TgZ(11,"li",9),t._uU(12,"Reports"),t.qZA()()(),t.TgZ(13,"div",10)(14,"ul",11)(15,"li")(16,"a",8),t._uU(17,"Projects"),t.qZA()(),t.TgZ(18,"li")(19,"a",8),t._uU(20,"Bidding"),t.qZA()(),t.TgZ(21,"li")(22,"a",8),t._uU(23,"Invoices"),t.qZA()(),t.TgZ(24,"li",12)(25,"a",8),t._uU(26,"Earnings"),t.qZA()()()()()(),t.TgZ(27,"div",13)(28,"div",14)(29,"div",15)(30,"ul")(31,"li",16)(32,"a",8),t._uU(33,"Administrator "),t.qZA()(),t.TgZ(34,"li")(35,"a",8),t._uU(36,"Employer"),t.qZA()(),t.TgZ(37,"li")(38,"a",8),t._uU(39,"Freelancer"),t.qZA()()()(),t.TgZ(40,"div",17)(41,"div",18)(42,"div",19)(43,"div",20)(44,"h5",21),t._uU(45,"Earnings Report"),t.qZA(),t.TgZ(46,"div",22)(47,"button",23),t._uU(48," 2022 "),t.qZA(),t.TgZ(49,"ul",24)(50,"li")(51,"a",25),t._uU(52,"2021"),t.qZA()(),t.TgZ(53,"li")(54,"a",25),t._uU(55,"2022"),t.qZA()(),t.TgZ(56,"li")(57,"a",25),t._uU(58,"2020"),t.qZA()()()()()(),t.TgZ(59,"div",26)(60,"div",27),t._UZ(61,"apx-chart",28),t.qZA()()()()()(),t.TgZ(62,"div",29)(63,"div",30)(64,"h2"),t._uU(65,"Administrator Earnings"),t.qZA(),t.TgZ(66,"div",31)(67,"a",32),t._UZ(68,"i",33),t._uU(69,"Download"),t.qZA()()(),t.TgZ(70,"div",34)(71,"div",14)(72,"div",35)(73,"select",36)(74,"option"),t._uU(75," Date"),t.qZA(),t.TgZ(76,"option"),t._uU(77,"Option 1"),t.qZA(),t.TgZ(78,"option"),t._uU(79,"Option 2"),t.qZA(),t.TgZ(80,"option"),t._uU(81,"Option 3"),t.qZA(),t.TgZ(82,"option"),t._uU(83,"Option 4"),t.qZA(),t.TgZ(84,"option"),t._uU(85,"Option 5"),t.qZA()()(),t.TgZ(86,"div",35)(87,"select",36)(88,"option"),t._uU(89," Reference Number"),t.qZA(),t.TgZ(90,"option"),t._uU(91,"Option 1"),t.qZA(),t.TgZ(92,"option"),t._uU(93,"Option 2"),t.qZA(),t.TgZ(94,"option"),t._uU(95,"Option 3"),t.qZA(),t.TgZ(96,"option"),t._uU(97,"Option 4"),t.qZA(),t.TgZ(98,"option"),t._uU(99,"Option 5"),t.qZA()()(),t.TgZ(100,"div",35)(101,"select",36)(102,"option"),t._uU(103," Project name"),t.qZA(),t.TgZ(104,"option"),t._uU(105,"Option 1"),t.qZA(),t.TgZ(106,"option"),t._uU(107,"Option 2"),t.qZA(),t.TgZ(108,"option"),t._uU(109,"Option 3"),t.qZA(),t.TgZ(110,"option"),t._uU(111,"Option 4"),t.qZA(),t.TgZ(112,"option"),t._uU(113,"Option 5"),t.qZA()()(),t.TgZ(114,"div",35)(115,"select",36)(116,"option"),t._uU(117," Payment type"),t.qZA(),t.TgZ(118,"option"),t._uU(119,"Option 1"),t.qZA(),t.TgZ(120,"option"),t._uU(121,"Option 2"),t.qZA(),t.TgZ(122,"option"),t._uU(123,"Option 3"),t.qZA(),t.TgZ(124,"option"),t._uU(125,"Option 4"),t.qZA(),t.TgZ(126,"option"),t._uU(127,"Option 5"),t.qZA()()()()()(),t.TgZ(128,"div",37)(129,"div",26)(130,"div",38)(131,"div",39)(132,"div",40)(133,"label"),t._uU(134," Show "),t.qZA(),t.TgZ(135,"select",41),t.NdJ("ngModelChange",function(r){return a.pageSize=r})("ngModelChange",function(){return a.changePageSize()}),t.TgZ(136,"option",42),t._uU(137,"10"),t.qZA(),t.TgZ(138,"option",43),t._uU(139,"25"),t.qZA(),t.TgZ(140,"option",44),t._uU(141,"50"),t.qZA(),t.TgZ(142,"option",45),t._uU(143,"100"),t.qZA()(),t.TgZ(144,"label"),t._uU(145,"Entries"),t.qZA()(),t.TgZ(146,"div",46)(147,"label"),t._uU(148," Search: "),t.qZA(),t.TgZ(149,"input",41),t.NdJ("ngModelChange",function(r){return a.searchDataValue=r})("ngModelChange",function(){return a.searchData(a.searchDataValue)}),t.qZA()()(),t.TgZ(150,"div",47)(151,"table",48),t.NdJ("matSortChange",function(r){return a.sortData(r)}),t.TgZ(152,"thead")(153,"tr")(154,"th")(155,"div",49),t._UZ(156,"input",50)(157,"label",51),t.qZA()(),t.TgZ(158,"th",52),t._uU(159,"Transaction date"),t.qZA(),t.TgZ(160,"th",53),t._uU(161,"Reference Number"),t.qZA(),t.TgZ(162,"th",54),t._uU(163,"Project Name"),t.qZA(),t.TgZ(164,"th",55),t._uU(165,"Project Value"),t.qZA(),t.TgZ(166,"th",56),t._uU(167,"Income"),t.qZA(),t.TgZ(168,"th",57),t._uU(169,"Payment type"),t.qZA(),t.TgZ(170,"th",58),t._uU(171,"Actions"),t.qZA()()(),t.TgZ(172,"tbody"),t.YNc(173,f,23,6,"tr",59),t.qZA()()(),t.TgZ(174,"div",60)(175,"div",61)(176,"div",62),t._uU(177),t.qZA()(),t.TgZ(178,"div",63)(179,"div",64)(180,"ul",65)(181,"li",66)(182,"a",67),t.NdJ("click",function(){return a.getMoreData("previous")}),t._uU(183,"Previous"),t.qZA()(),t.YNc(184,U,6,6,"ng-container",59),t.TgZ(185,"li",66)(186,"a",68),t.NdJ("click",function(){return a.getMoreData("next")}),t._uU(187,"Next "),t.qZA()()()()()()()()()()()),2&e&&(t.xp6(9),t.Q6J("routerLink","/home"),t.xp6(7),t.Q6J("routerLink","/admin/reports/projects"),t.xp6(3),t.Q6J("routerLink","/admin/reports/bidding"),t.xp6(3),t.Q6J("routerLink","/admin/reports/invoices"),t.xp6(3),t.Q6J("routerLink","/admin/reports/earnings"),t.xp6(7),t.Q6J("routerLink","/admin/reports/earnings"),t.xp6(3),t.Q6J("routerLink","/admin/reports/employer"),t.xp6(3),t.Q6J("routerLink","/admin/reports/freelancer"),t.xp6(23),t.Q6J("series",a.chartOptions.series)("chart",a.chartOptions.chart)("dataLabels",a.chartOptions.dataLabels)("plotOptions",a.chartOptions.plotOptions)("yaxis",a.chartOptions.yaxis)("markers",a.chartOptions.markers)("legend",a.chartOptions.legend)("fill",a.chartOptions.fill)("stroke",a.chartOptions.stroke)("tooltip",a.chartOptions.tooltip)("xaxis",a.chartOptions.xaxis),t.xp6(74),t.Q6J("ngModel",a.pageSize),t.xp6(14),t.Q6J("ngModel",a.searchDataValue),t.xp6(24),t.Q6J("ngForOf",a.lstEarning),t.xp6(4),t.lnq(" Showing ",a.serialNumberArray[0]," to ",a.serialNumberArray[a.serialNumberArray.length-1]," of ",a.totalData," entries "),t.xp6(4),t.Q6J("ngClass",t.VKq(28,m,1===a.currentPage)),t.xp6(3),t.Q6J("ngForOf",a.pageNumberArray),t.xp6(1),t.Q6J("ngClass",t.VKq(30,m,a.currentPage===a.pageNumberArray[a.pageNumberArray.length-1]||0===a.lstEarning.length)))},dependencies:[p.mk,p.sg,p.O5,c.rH,d.x,l.YN,l.Kr,l.Fj,l.EJ,l.JJ,l.On,h.YE,h.nU,A.i9]}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(q),c.Bz]}),i})();var x=s(8905);let E=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,y,d.X,x.m]}),i})()}}]);