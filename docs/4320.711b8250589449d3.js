"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[4320],{4320:(F,g,l)=>{l.r(g),l.d(g,{FilesModule:()=>b});var h=l(6895),d=l(2761),c=l(3626),p=l(7579),t=l(4650),Z=l(2187),n=l(4006),m=l(6308);function v(i,r){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._UZ(2,"img",58),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td")(6,"p",40),t._uU(7),t.qZA(),t.TgZ(8,"a",59),t._uU(9,"Readmore"),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"div",60)(16,"a",61),t._UZ(17,"i",62),t.qZA(),t.TgZ(18,"a",63),t._UZ(19,"i",64),t.qZA(),t.TgZ(20,"a",65),t._UZ(21,"i",66),t.qZA()()()()),2&i){const e=r.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.hij("",e.title," "),t.xp6(3),t.Oqu(e.para),t.xp6(4),t.Oqu(e.type),t.xp6(2),t.Oqu(e.size)}}const f=[{path:"",component:(()=>{class i{constructor(e){this.dataService=e,this.dtTrigger=new p.x,this.url="milestones",this.searchDataValue="",this.lastIndex=0,this.pageSize=10,this.totalData=0,this.skip=0,this.limit=this.pageSize,this.pageIndex=0,this.serialNumberArray=[],this.currentPage=1,this.pageNumberArray=[],this.pageSelection=[],this.totalPages=0}ngOnInit(){this.loadHostel()}loadHostel(){this.lstFiles=this.dataService.files}ngOnDestroy(){this.dtTrigger.unsubscribe()}sortData(e){const a=this.lstFiles.slice();this.lstFiles=e.active&&""!==e.direction?a.sort((s,o)=>(s[e.active]<o[e.active]?-1:1)*("asc"===e.direction?1:-1)):a}getTableData(){this.lstFiles=[],this.serialNumberArray=[],this.data.lstFiles().subscribe(e=>{this.totalData=e.totalData,e.data.map((a,s)=>{const o=s+1;s>=this.skip&&o<=this.limit&&(this.lstFiles.push(a),this.serialNumberArray.push(o))}),this.dataSource=new c.by(this.lstFiles),this.calculateTotalPages(this.totalData,this.pageSize)})}getMoreData(e){"next"==e?(this.currentPage++,this.pageIndex=this.currentPage-1,this.limit+=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData()):"previous"==e&&(this.currentPage--,this.pageIndex=this.currentPage-1,this.limit-=this.pageSize,this.skip=this.pageSize*this.pageIndex,this.getTableData())}moveToPage(e){this.currentPage=e,this.skip=this.pageSelection[e-1].skip,this.limit=this.pageSelection[e-1].limit,e>this.currentPage?this.pageIndex=e-1:e<this.currentPage&&(this.pageIndex=e+1),this.getTableData()}PageSize(){this.pageSelection=[],this.limit=this.pageSize,this.skip=0,this.currentPage=1,this.getTableData()}calculateTotalPages(e,a){this.pageNumberArray=[],this.totalPages=e/a,this.totalPages%1!=0&&(this.totalPages=Math.trunc(this.totalPages+1));for(let s=1;s<=this.totalPages;s++){const o=a*s,u=o-a;this.pageNumberArray.push(s),this.pageSelection.push({skip:u,limit:o})}}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(Z.u))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-files"]],decls:124,vars:7,consts:[[1,"user-tabs","mb-4"],[1,"nav","nav-tabs","nav-tabs-bottom","nav-justified"],[1,"nav-item"],[1,"nav-link",3,"routerLink"],[1,"nav-link","active",3,"routerLink"],[1,"my-projects-view"],[1,"row"],[1,"col-lg-12"],[1,""],[1,"card"],[1,"card-header"],[1,"row","justify-content-between","align-items-center"],[1,"col"],[1,"card-title"],[1,"col-auto"],["data-bs-toggle","modal","href","#file",1,"btn","btn-primary","btn-rounded"],[1,"fas","fa-plus"],[1,"card-body"],[1,"table_header"],[1,"col-sm-12","col-md-6"],[1,"dataTables_length"],[1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"table-responsive","table-box"],["matSort","",1,"table","table-center","table-hover","datatable",3,"matSortChange"],[1,"thead-pink"],["mat-sort-header","image"],["mat-sort-header","title"],["mat-sort-header","para"],["mat-sort-header","type"],["mat-sort-header","size"],["mat-sort-header","action"],[4,"ngFor","ngForOf"],["id","file",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"mb-0"],[1,"modal-close"],["href","javascript:void(0);","data-bs-dismiss","modal","aria-label","Close"],[1,"far","fa-times-circle","orange-text"],[1,"modal-body"],[1,"modal-info"],[1,"col-md-12"],[1,"form-group"],["type","text",1,"form-control"],[1,"br-0","file-upload","image-upbtn"],["type","file"],[1,"submit-section","text-end"],["type","submit",1,"btn","btn-primary","submit-btn"],["id","edit-file",1,"modal","fade"],["type","text","value","Image for Section background",1,"form-control"],["type","text","value","Lorem ipsum dolor sit amet, consectetur adipiscing elit",1,"form-control"],[1,"d-flex","align-items-center"],["src","assets/img/file-logo.png","alt","Logo",1,"img-fluid","me-2"],["alt","Logo",1,"img-fluid",3,"src"],["href","javascript:void(0);",1,"read-text"],[1,"action"],["href","javascript:void(0);",1,"file-circle","me-2"],[1,"fas","fa-cloud-download-alt"],["data-bs-toggle","modal","href","#edit-file",1,"file-circle","me-2"],[1,"fas","fa-pen"],["href","javascript:void(0);",1,"file-circle"],[1,"fas","fa-trash-alt"]],template:function(e,a){1&e&&(t.TgZ(0,"nav",0)(1,"ul",1)(2,"li",2)(3,"a",3),t._uU(4,"Overview & Discussions"),t.qZA()(),t.TgZ(5,"li",2)(6,"a",3),t._uU(7,"Milestones"),t.qZA()(),t.TgZ(8,"li",2)(9,"a",3),t._uU(10,"Tasks"),t.qZA()(),t.TgZ(11,"li",2)(12,"a",4),t._uU(13,"Files"),t.qZA()(),t.TgZ(14,"li",2)(15,"a",3),t._uU(16,"Payments"),t.qZA()()()(),t.TgZ(17,"div",5)(18,"div",6)(19,"div",7)(20,"div",8)(21,"div",9)(22,"div",10)(23,"div",11)(24,"div",12)(25,"h5",13),t._uU(26,"Files"),t.qZA()(),t.TgZ(27,"div",14)(28,"a",15),t._UZ(29,"i",16),t._uU(30," Add files"),t.qZA()()()(),t.TgZ(31,"div",17)(32,"div",18)(33,"div",6)(34,"div",19)(35,"div",20)(36,"label"),t._uU(37," Show "),t.TgZ(38,"select",21),t.NdJ("ngModelChange",function(o){return a.pageSize=o})("ngModelChange",function(){return a.PageSize()}),t.TgZ(39,"option",22),t._uU(40,"10"),t.qZA(),t.TgZ(41,"option",23),t._uU(42,"25"),t.qZA(),t.TgZ(43,"option",24),t._uU(44,"50"),t.qZA(),t.TgZ(45,"option",25),t._uU(46,"100"),t.qZA()(),t._uU(47," Entries "),t.qZA()()()()(),t.TgZ(48,"div",26)(49,"table",27),t.NdJ("matSortChange",function(o){return a.sortData(o)}),t.TgZ(50,"thead",28)(51,"tr")(52,"th",29),t._uU(53,"File Preview"),t.qZA(),t.TgZ(54,"th",30),t._uU(55,"Title"),t.qZA(),t.TgZ(56,"th",31),t._uU(57,"Description"),t.qZA(),t.TgZ(58,"th",32),t._uU(59,"Type"),t.qZA(),t.TgZ(60,"th",33),t._uU(61,"Size"),t.qZA(),t.TgZ(62,"th",34),t._uU(63,"Action"),t.qZA()()(),t.TgZ(64,"tbody"),t.YNc(65,v,22,5,"tr",35),t.qZA()()()()()()()()(),t.TgZ(66,"div",36)(67,"div",37)(68,"div",38)(69,"div",39)(70,"h4",40),t._uU(71,"Add Files"),t.qZA(),t.TgZ(72,"span",41)(73,"a",42),t._UZ(74,"i",43),t.qZA()()(),t.TgZ(75,"div",44)(76,"form")(77,"div",45)(78,"div",6)(79,"div",46)(80,"div",47)(81,"label"),t._uU(82,"Title"),t.qZA(),t._UZ(83,"input",48),t.qZA(),t.TgZ(84,"div",47)(85,"label"),t._uU(86,"Link"),t.qZA(),t._UZ(87,"input",48),t.qZA(),t.TgZ(88,"label",49),t._uU(89," upload Files "),t._UZ(90,"input",50),t.qZA()()()(),t.TgZ(91,"div",51)(92,"button",52),t._uU(93,"Submit"),t.qZA()()()()()()(),t.TgZ(94,"div",53)(95,"div",37)(96,"div",38)(97,"div",39)(98,"h4",40),t._uU(99,"Edit Files"),t.qZA(),t.TgZ(100,"span",41)(101,"a",42),t._UZ(102,"i",43),t.qZA()()(),t.TgZ(103,"div",44)(104,"form")(105,"div",45)(106,"div",6)(107,"div",46)(108,"div",47)(109,"label"),t._uU(110,"Title"),t.qZA(),t._UZ(111,"input",54),t.qZA(),t.TgZ(112,"div",47)(113,"label"),t._uU(114,"Link"),t.qZA(),t._UZ(115,"input",55),t.qZA(),t.TgZ(116,"div",56),t._UZ(117,"img",57),t.TgZ(118,"label",49),t._uU(119," upload Files "),t._UZ(120,"input",50),t.qZA()()()()(),t.TgZ(121,"div",51)(122,"button",52),t._uU(123,"Submit"),t.qZA()()()()()()()),2&e&&(t.xp6(3),t.Q6J("routerLink","/employer/milestones/overviews"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/milestone"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/tasks"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/files"),t.xp6(3),t.Q6J("routerLink","/employer/milestones/payments"),t.xp6(23),t.Q6J("ngModel",a.pageSize),t.xp6(27),t.Q6J("ngForOf",a.lstFiles))},dependencies:[h.sg,d.rH,n._Y,n.YN,n.Kr,n.EJ,n.JJ,n.JL,n.On,n.F,m.YE,m.nU]}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.Bz.forChild(f),d.Bz]}),i})();var A=l(8905);let b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,T,A.m]}),i})()}}]);