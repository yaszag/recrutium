"use strict";(self.webpackChunkrecrutium_angular=self.webpackChunkrecrutium_angular||[]).push([[4289],{4289:(f,u,a)=>{a.r(u),a.d(u,{OnboardScreenModule:()=>q});var p=a(6895),c=a(2761),e=a(4650),Z=a(4006);function _(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",128)(1,"div",56)(2,"div",57),e._UZ(3,"input",129),e.qZA()(),e.TgZ(4,"div",56)(5,"div",57)(6,"select",59)(7,"option",60),e._uU(8,"Choose Level"),e.qZA(),e.TgZ(9,"option",61),e._uU(10,"Basic"),e.qZA()()()(),e.TgZ(11,"div",56)(12,"div",62)(13,"a",130),e.NdJ("click",function(){const r=e.CHM(n).index,l=e.oxw();return e.KtG(l.deleteService(r))}),e._uU(14," Remove"),e.qZA()()()()}}function s(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",128),e._UZ(1,"div",71),e.TgZ(2,"div",72)(3,"div",44),e._UZ(4,"input",73),e.qZA()(),e.TgZ(5,"div",72)(6,"div",44)(7,"select",74)(8,"option",75),e._uU(9,"Intermediate"),e.qZA(),e.TgZ(10,"option",76),e._uU(11,"Medium"),e.qZA()()()(),e.TgZ(12,"div",131)(13,"div",62)(14,"a",130),e.NdJ("click",function(){const r=e.CHM(n).index,l=e.oxw();return e.KtG(l.skill(r))}),e._uU(15," Remove"),e.qZA()()()()}}function v(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",128),e._UZ(1,"div",71),e.TgZ(2,"div",80)(3,"div",44)(4,"select",74)(5,"option",75),e._uU(6,"India"),e.qZA(),e.TgZ(7,"option",76),e._uU(8,"Chinna"),e.qZA()()()(),e.TgZ(9,"div",82)(10,"div",44)(11,"select",74)(12,"option",75),e._uU(13,"College/University Name"),e.qZA(),e.TgZ(14,"option",76),e._uU(15,"University Name"),e.qZA()()()(),e.TgZ(16,"div",82)(17,"div",44)(18,"select",74)(19,"option",75),e._uU(20,"College/University Name"),e.qZA(),e.TgZ(21,"option",76),e._uU(22,"University Name"),e.qZA()()()(),e.TgZ(23,"div",80)(24,"div",44)(25,"select",74)(26,"option",75),e._uU(27,"Intermediate"),e.qZA(),e.TgZ(28,"option",76),e._uU(29,"Average"),e.qZA()()()(),e.TgZ(30,"div",83)(31,"div",62)(32,"a",130),e.NdJ("click",function(){const r=e.CHM(n).index,l=e.oxw();return e.KtG(l.deleteEducation(r))}),e._uU(33," Remove"),e.qZA()()()()}}function g(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",132)(1,"div",128),e._UZ(2,"div",71),e.TgZ(3,"div",72)(4,"div",44),e._UZ(5,"input",86),e.qZA()(),e.TgZ(6,"div",72)(7,"div",44),e._UZ(8,"input",87),e.qZA()(),e.TgZ(9,"div",83)(10,"div",44)(11,"select",74)(12,"option",75),e._uU(13,"Year"),e.qZA(),e.TgZ(14,"option",76),e._uU(15,"2012"),e.qZA()()()(),e.TgZ(16,"div",83)(17,"div",62)(18,"a",130),e.NdJ("click",function(){const r=e.CHM(n).index,l=e.oxw();return e.KtG(l.deleteCertification(r))}),e._uU(19," Remove"),e.qZA()()()()()}}function T(o,d){if(1&o){const n=e.EpF();e.TgZ(0,"div",128),e._UZ(1,"div",71),e.TgZ(2,"div",90)(3,"div",3)(4,"div",91)(5,"div",44),e._UZ(6,"input",92),e.qZA()(),e.TgZ(7,"div",91)(8,"div",44),e._UZ(9,"input",93),e.qZA()()(),e.TgZ(10,"div",3)(11,"div",94)(12,"div",44)(13,"select",74)(14,"option",61),e._uU(15,"Select Month"),e.qZA(),e.TgZ(16,"option",61),e._uU(17,"1"),e.qZA(),e.TgZ(18,"option",61),e._uU(19,"2"),e.qZA()()()(),e.TgZ(20,"div",94)(21,"div",44)(22,"select",74)(23,"option",61),e._uU(24,"Select Year"),e.qZA(),e.TgZ(25,"option",61),e._uU(26,"2010"),e.qZA(),e.TgZ(27,"option",61),e._uU(28,"2011"),e.qZA()()()(),e.TgZ(29,"div",94)(30,"div",44)(31,"select",74)(32,"option",61),e._uU(33,"Select Month"),e.qZA(),e.TgZ(34,"option",61),e._uU(35,"1"),e.qZA(),e.TgZ(36,"option",61),e._uU(37,"2"),e.qZA()()()(),e.TgZ(38,"div",94)(39,"div",44)(40,"select",74)(41,"option",61),e._uU(42,"Select Year"),e.qZA(),e.TgZ(43,"option",61),e._uU(44,"2010"),e.qZA(),e.TgZ(45,"option",61),e._uU(46,"2011"),e.qZA()()()()()(),e.TgZ(47,"div",83)(48,"div",62)(49,"a",130),e.NdJ("click",function(){const r=e.CHM(n).index,l=e.oxw();return e.KtG(l.deleteExperiance(r))}),e._uU(50," Remove"),e.qZA()()()()}}const U=[{path:"",component:(()=>{class o{constructor(){this.serviceArray=[],this.skill=[],this.education=[],this.certification=[],this.experiance=[],this.first=1,this.isChecked=!0}addService(){this.serviceArray.push(1)}deleteService(n){this.serviceArray.splice(n,1)}addExperiance(){this.experiance.push(1)}deleteExperiance(n){this.experiance.splice(n,1)}addCertification(){this.certification.push(1)}deleteCertification(n){this.certification.splice(n,1)}addEducation(){this.education.push(1)}deleteEducation(n){this.education.splice(n,1)}addSkill(){this.skill.push(1)}deleteSkill(n){this.skill.splice(n,1)}next(n){this.first=n}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-onboard-screen"]],decls:586,vars:42,consts:[[1,"page-wrapper","board-screen"],[1,"content","container-fluid"],[1,"acc-content"],[1,"row"],[1,"col-sm-12"],[1,"multistep-form"],["id","freelance_step",1,"multistep-progress"],[1,"first-progress"],[1,"board-logo"],[3,"routerLink"],["src","assets/img/logo-01.png","alt","",1,"img-fluid"],["id","progressbar",1,"progressbar"],[1,"progress-active"],[1,"multi-step"],[1,""],[1,"progress-activated"],[1,"progress-info"],[1,"progress-25"],[1,"d-flex","align-items-center"],[1,"progress"],["role","progressbar","aria-valuenow","25","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],[1,"progress-50"],["role","progressbar","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],[1,"progress-75"],["role","progressbar","aria-valuenow","75","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],[1,"progress-100"],["role","progressbar","aria-valuenow","100","aria-valuemin","0","aria-valuemax","100",1,"progress-bar"],[1,"text-center","on-board","select-account","group-select"],[1,"select-type"],[1,"account-onborad","onboard-head"],[1,"select-box","d-flex","justify-content-center"],["checked","checked","id","freelance","type","radio","name","credit-card","value","visa"],["data-id","freelance","for","freelance",1,"employee-level","free-lance-img","accounts_type"],["src","assets/img/select-04.png","alt","",1,"img-fluid"],["id","employee","type","radio","name","credit-card","value","mastercard",1,"accounts_type"],["data-id","employee","for","employee",1,"employee-level","employee-img","accounts_type"],["src","assets/img/select-05.png","alt","",1,"img-fluid"],["name","next","type","button","value","Next",1,"btn","next_btn","btn-primary","btn-get",3,"click"],[1,"on-board","field-card","select-account","select-btn"],[1,"text-center","onboard-head"],[1,"field-item","personal-info","space-info"],[1,"col-md-12","col-lg-2","col-xl-2"],[1,"focus-label"],[1,"col-md-6","col-lg-5","col-xl-5"],[1,"form-group"],["type","text","value","Eugene",1,"form-control"],["type","text","value","Forest",1,"form-control"],[1,"col-md-12","col-lg-10","col-xl-10"],[1,"pro-form-img"],["src","assets/img/user/avatar-3.jpg","alt","User Image"],[1,"file-upload","image-upbtn"],["type","file"],["type","text","value","+33 43685825",1,"form-control"],["type","text","value","eugeneforest@example.com",1,"form-control"],[1,"form-group","min-characters"],["rows","5",1,"form-control"],[1,"col-md-4","col-lg-4","col-xl-4"],[1,"form-group","description-group"],["type","text","value","English",1,"form-control"],["name","price","id","business-type",1,"form-control","select-level"],["value","Individual","selected",""],["value",""],[1,"new-addd"],["id","new_add",1,"add-new",3,"click"],[1,"fas","fa-plus"],["id","add_row"],["class","row","id","form-row",4,"ngFor","ngForOf"],[1,"text-center"],["name","next ","type","button","value","Back",1,"btn","btn-prev","prev_btn","btn-back",3,"click"],["name","next","type","submit","value","Next",1,"btn","next_btn","btn-primary","btn-get","btn-next",3,"click"],["id","individual"],[1,"col-md-12","col-lg-2"],[1,"col-md-4","col-lg-3"],["type","text","placeholder","Ex : UI UX Design",1,"form-control"],["name","price",1,"form-control","select-level"],["value","0"],["value","1"],[1,"col-md-4","col-lg-4"],["id","skill_add",1,"add-new",3,"click"],["id","skill_add_row"],[1,"col-md-2","col-lg-1"],["name","price",1,"form-control","select-level","select-edu"],[1,"col-md-3"],[1,"col-md-2"],["id","edu_add",1,"add-new",3,"click"],["id","education_add_row"],["type","text","placeholder","Certification or Award",1,"form-control"],["type","text","placeholder","Certified from (e.g. Adobe)",1,"form-control"],["id","certify_add",1,"add-new",3,"click"],["id","certify_add_row",4,"ngFor","ngForOf"],[1,"col-md-10","col-lg-8"],[1,"col-md-6"],["type","text","placeholder","Enter your position or title",1,"form-control"],["type","text","placeholder","Enter company name",1,"form-control"],[1,"col-md-3","d-flex","align-items-end"],["id","experience_add",1,"add-new",3,"click"],["id","experience_add_row"],[1,"col-md-12","col-lg-10"],[1,"form-group","workin-check"],["type","checkbox","name","remember",1,"form-check-input"],["type","text",1,"form-control"],["name","next","type","button","value","Back",1,"btn","btn-prev","prev_btn","btn-back",3,"click"],["name","next","type","button","value","Next",1,"btn","next_btn","btn-primary","btn-get","btn-next",3,"click"],[1,"field-item","personal-info"],["id","individual-doc"],[1,"col-md-12","col-lg-3","col-xl-2"],[1,"col-md-12","col-lg-9","col-xl-9"],["type","text","placeholder","Enter Facebook profile Link",1,"form-control"],["type","text","placeholder","Enter Instagram profile Link",1,"form-control"],["type","text","placeholder","Enter Linkedin profile Link",1,"form-control"],[1,"form-group","working-position"],["type","text","placeholder","Same every day",1,"form-control"],[1,"form-check","form-switch","d-inline-block","work-check"],["type","checkbox","id","check_hour",1,"form-check-input",3,"ngModel","ngModelChange"],[1,"checkout-hour"],[1,"other-info-list"],[1,"active-hour"],[1,"time-box","d-flex"],[1,"form-group","mb-0"],["type","text","Value","8:00",1,"form-control"],["type","text","Value","20:00",1,"form-control"],[1,"check-hour"],[1,"col-md-6","col-xl-5"],["name","next","type","button","value","Submit",1,"btn","next_btn","btn-primary","btn-get","btn-next",3,"click"],[1,"on-board","field-card"],[1,"account-onborad","complte-board","back-home"],["src","assets/img/select-03.png","alt","icon",1,"img-fluid"],[1,"btn","btn-primary",3,"routerLink"],["id","form-row",1,"row"],["type","text","placeholder","Enter Language",1,"form-control"],["id","remove_row",1,"remove_row",3,"click"],[1,"col-md-4"],["id","certify_add_row"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"a",9),e._UZ(10,"img",10),e.qZA()(),e.TgZ(11,"ul",11)(12,"li",12)(13,"div",13),e._uU(14,"1"),e.qZA(),e.TgZ(15,"h5"),e._uU(16,"Account Type"),e.qZA()(),e.TgZ(17,"li",14)(18,"div",13),e._uU(19,"2"),e.qZA(),e.TgZ(20,"h5"),e._uU(21,"Personal info"),e.qZA()(),e.TgZ(22,"li",14)(23,"div",13),e._uU(24,"3"),e.qZA(),e.TgZ(25,"h5"),e._uU(26,"Professional info"),e.qZA()(),e.TgZ(27,"li",14)(28,"div",13),e._uU(29,"4"),e.qZA(),e.TgZ(30,"h5"),e._uU(31,"Other Info"),e.qZA()()(),e.TgZ(32,"ul",11)(33,"li",15)(34,"div",13),e._uU(35,"1"),e.qZA(),e.TgZ(36,"h5"),e._uU(37,"Account Type"),e.qZA()(),e.TgZ(38,"li",12)(39,"div",13),e._uU(40,"2"),e.qZA(),e.TgZ(41,"h5"),e._uU(42,"Personal info"),e.qZA()(),e.TgZ(43,"li",14)(44,"div",13),e._uU(45,"3"),e.qZA(),e.TgZ(46,"h5"),e._uU(47,"Professional info"),e.qZA()(),e.TgZ(48,"li",14)(49,"div",13),e._uU(50,"4"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Other Info"),e.qZA()()(),e.TgZ(53,"ul",11)(54,"li",15)(55,"div",13),e._uU(56,"1"),e.qZA(),e.TgZ(57,"h5"),e._uU(58,"Account Type"),e.qZA()(),e.TgZ(59,"li",15)(60,"div",13),e._uU(61,"2"),e.qZA(),e.TgZ(62,"h5"),e._uU(63,"Personal info"),e.qZA()(),e.TgZ(64,"li",12)(65,"div",13),e._uU(66,"3"),e.qZA(),e.TgZ(67,"h5"),e._uU(68,"Professional info"),e.qZA()(),e.TgZ(69,"li",14)(70,"div",13),e._uU(71,"4"),e.qZA(),e.TgZ(72,"h5"),e._uU(73,"Other Info"),e.qZA()()(),e.TgZ(74,"ul",11)(75,"li",15)(76,"div",13),e._uU(77,"1"),e.qZA(),e.TgZ(78,"h5"),e._uU(79,"Account Type"),e.qZA()(),e.TgZ(80,"li",15)(81,"div",13),e._uU(82,"2"),e.qZA(),e.TgZ(83,"h5"),e._uU(84,"Personal info"),e.qZA()(),e.TgZ(85,"li",15)(86,"div",13),e._uU(87,"3"),e.qZA(),e.TgZ(88,"h5"),e._uU(89,"Professional info"),e.qZA()(),e.TgZ(90,"li",12)(91,"div",13),e._uU(92,"4"),e.qZA(),e.TgZ(93,"h5"),e._uU(94,"Other Info"),e.qZA()()(),e.TgZ(95,"ul",11)(96,"li",15)(97,"div",13),e._uU(98,"1"),e.qZA(),e.TgZ(99,"h5"),e._uU(100,"Account Type"),e.qZA()(),e.TgZ(101,"li",15)(102,"div",13),e._uU(103,"2"),e.qZA(),e.TgZ(104,"h5"),e._uU(105,"Personal info"),e.qZA()(),e.TgZ(106,"li",15)(107,"div",13),e._uU(108,"3"),e.qZA(),e.TgZ(109,"h5"),e._uU(110,"Professional info"),e.qZA()(),e.TgZ(111,"li",15)(112,"div",13),e._uU(113,"4"),e.qZA(),e.TgZ(114,"h5"),e._uU(115,"Other Info"),e.qZA()()(),e.TgZ(116,"div",16)(117,"h5"),e._uU(118,"Completion rate"),e.qZA(),e.TgZ(119,"div",17)(120,"div",18)(121,"div",19),e._UZ(122,"div",20),e.qZA(),e.TgZ(123,"p"),e._uU(124,"25%"),e.qZA()()(),e.TgZ(125,"div",21)(126,"div",18)(127,"div",19),e._UZ(128,"div",22),e.qZA(),e.TgZ(129,"p"),e._uU(130,"50%"),e.qZA()()(),e.TgZ(131,"div",23)(132,"div",18)(133,"div",19),e._UZ(134,"div",24),e.qZA(),e.TgZ(135,"p"),e._uU(136,"75%"),e.qZA()()(),e.TgZ(137,"div",25)(138,"div",18)(139,"div",19),e._UZ(140,"div",26),e.qZA(),e.TgZ(141,"p"),e._uU(142,"100%"),e.qZA()()()()()(),e.TgZ(143,"div",27)(144,"div",28)(145,"div",29)(146,"h2"),e._uU(147,"Select Account Type"),e.qZA(),e.TgZ(148,"p"),e._uU(149,"Don\u2019t worry, this can be changed later."),e.qZA(),e.TgZ(150,"div",30),e._UZ(151,"input",31),e.TgZ(152,"label",32)(153,"a",9),e._UZ(154,"img",33),e.TgZ(155,"span"),e._uU(156,"Freelancer"),e.qZA()()(),e._UZ(157,"input",34),e.TgZ(158,"label",35)(159,"a",9),e._UZ(160,"img",36),e.TgZ(161,"span"),e._uU(162,"Employer"),e.qZA()()()()(),e.TgZ(163,"input",37),e.NdJ("click",function(){return i.next(2)}),e.qZA()()(),e.TgZ(164,"div",38)(165,"div",39)(166,"h2"),e._uU(167,"Personal Info"),e.qZA(),e.TgZ(168,"p"),e._uU(169,"Tell a bit about yourself. This information will appear on your public profile, so that potential buyers can get to know you better."),e.qZA()(),e.TgZ(170,"div",40)(171,"form")(172,"div",3)(173,"div",41)(174,"label",42),e._uU(175,"Name "),e.TgZ(176,"span"),e._uU(177,"*"),e.qZA()()(),e.TgZ(178,"div",43)(179,"div",44)(180,"label"),e._uU(181,"First Name"),e.qZA(),e._UZ(182,"input",45),e.qZA()(),e.TgZ(183,"div",43)(184,"div",44)(185,"label"),e._uU(186,"Last Name"),e.qZA(),e._UZ(187,"input",46),e.qZA()(),e.TgZ(188,"div",41)(189,"label",42),e._uU(190,"Profile picture "),e.TgZ(191,"span"),e._uU(192,"*"),e.qZA()()(),e.TgZ(193,"div",47)(194,"div",48),e._UZ(195,"img",49),e.TgZ(196,"label",50),e._uU(197," Upload Avator "),e._UZ(198,"input",51),e.qZA()()(),e.TgZ(199,"div",41)(200,"label",42),e._uU(201,"Contact Details "),e.TgZ(202,"span"),e._uU(203,"*"),e.qZA()()(),e.TgZ(204,"div",43)(205,"div",44)(206,"label"),e._uU(207,"Phone Number"),e.qZA(),e._UZ(208,"input",52),e.qZA()(),e.TgZ(209,"div",43)(210,"div",44)(211,"label"),e._uU(212,"Email Address"),e.qZA(),e._UZ(213,"input",53),e.qZA()(),e.TgZ(214,"div",41)(215,"label",42),e._uU(216,"Description "),e.TgZ(217,"span"),e._uU(218,"*"),e.qZA()()(),e.TgZ(219,"div",47)(220,"div",54),e._UZ(221,"textarea",55),e.TgZ(222,"p"),e._uU(223,"Min 150 characters"),e.qZA()()(),e.TgZ(224,"div",41)(225,"label",42),e._uU(226,"Description "),e.TgZ(227,"span"),e._uU(228,"*"),e.qZA()()(),e.TgZ(229,"div",47)(230,"div",3)(231,"div",56)(232,"div",57)(233,"label"),e._uU(234,"Language"),e.qZA(),e._UZ(235,"input",58),e.qZA()(),e.TgZ(236,"div",56)(237,"div",57)(238,"label"),e._uU(239,"Level"),e.qZA(),e.TgZ(240,"select",59)(241,"option",60),e._uU(242,"Choose Level"),e.qZA(),e.TgZ(243,"option",61),e._uU(244,"Basic"),e.qZA()()()(),e.TgZ(245,"div",56)(246,"div",62)(247,"a",63),e.NdJ("click",function(){return i.addService()}),e._UZ(248,"i",64),e._uU(249," Add New"),e.qZA()()(),e.TgZ(250,"div",65),e.YNc(251,_,15,0,"div",66),e.qZA()()()()()(),e.TgZ(252,"div",67)(253,"input",68),e.NdJ("click",function(){return i.next(1)}),e.qZA(),e.TgZ(254,"input",69),e.NdJ("click",function(){return i.next(3)}),e.qZA()()(),e.TgZ(255,"div",38)(256,"div",39)(257,"h2"),e._uU(258,"Professional info"),e.qZA(),e.TgZ(259,"p"),e._uU(260,"This is your time to shine. Let potential buyers know what you do best and how you gained your skills, certifications and experience"),e.qZA()(),e.TgZ(261,"div",40)(262,"div",70)(263,"div",3)(264,"div",71)(265,"label",42),e._uU(266,"Skill "),e.TgZ(267,"span"),e._uU(268,"*"),e.qZA()()(),e.TgZ(269,"div",72)(270,"div",44),e._UZ(271,"input",73),e.qZA()(),e.TgZ(272,"div",72)(273,"div",44)(274,"select",74)(275,"option",75),e._uU(276,"Intermediate"),e.qZA(),e.TgZ(277,"option",76),e._uU(278,"Medium"),e.qZA()()()(),e.TgZ(279,"div",77)(280,"div",62)(281,"a",78),e.NdJ("click",function(){return i.skill()}),e._UZ(282,"i",64),e._uU(283," Add New"),e.qZA()()(),e.TgZ(284,"div",79),e.YNc(285,s,16,0,"div",66),e.qZA()(),e.TgZ(286,"div",3)(287,"div",71)(288,"label",42),e._uU(289,"Education"),e.qZA()(),e.TgZ(290,"div",80)(291,"div",44)(292,"select",81)(293,"option",75),e._uU(294,"India"),e.qZA(),e.TgZ(295,"option",76),e._uU(296,"Chinna"),e.qZA()()()(),e.TgZ(297,"div",82)(298,"div",44)(299,"select",74)(300,"option",75),e._uU(301,"College/University Name"),e.qZA(),e.TgZ(302,"option",76),e._uU(303,"University Name"),e.qZA()()()(),e.TgZ(304,"div",82)(305,"div",44)(306,"select",74)(307,"option",75),e._uU(308,"Intermediate"),e.qZA(),e.TgZ(309,"option",76),e._uU(310,"Average"),e.qZA()()()(),e.TgZ(311,"div",80)(312,"div",44)(313,"select",81)(314,"option",75),e._uU(315,"Year"),e.qZA(),e.TgZ(316,"option",76),e._uU(317,"2012"),e.qZA()()()(),e.TgZ(318,"div",83)(319,"div",62)(320,"a",84),e.NdJ("click",function(){return i.addEducation()}),e._UZ(321,"i",64),e._uU(322," Add New"),e.qZA()()(),e.TgZ(323,"div",85),e.YNc(324,v,34,0,"div",66),e.qZA()(),e.TgZ(325,"div",3)(326,"div",71)(327,"label",42),e._uU(328,"Certification "),e.qZA()(),e.TgZ(329,"div",72)(330,"div",44),e._UZ(331,"input",86),e.qZA()(),e.TgZ(332,"div",72)(333,"div",44),e._UZ(334,"input",87),e.qZA()(),e.TgZ(335,"div",83)(336,"div",44)(337,"select",74)(338,"option",75),e._uU(339,"Year"),e.qZA(),e.TgZ(340,"option",76),e._uU(341,"2012"),e.qZA()()()(),e.TgZ(342,"div",83)(343,"div",62)(344,"a",88),e.NdJ("click",function(){return i.addCertification()}),e._UZ(345,"i",64),e._uU(346," Add New"),e.qZA()()(),e.YNc(347,g,20,0,"div",89),e.qZA(),e.TgZ(348,"div",3)(349,"div",71)(350,"label",42),e._uU(351,"Experiance "),e.qZA()(),e.TgZ(352,"div",90)(353,"div",3)(354,"div",91)(355,"div",44),e._UZ(356,"input",92),e.qZA()(),e.TgZ(357,"div",91)(358,"div",44),e._UZ(359,"input",93),e.qZA()()(),e.TgZ(360,"div",3)(361,"div",94)(362,"div",44)(363,"label"),e._uU(364,"Start"),e.qZA(),e.TgZ(365,"select",74)(366,"option",61),e._uU(367,"Select Month"),e.qZA(),e.TgZ(368,"option",61),e._uU(369,"1"),e.qZA(),e.TgZ(370,"option",61),e._uU(371,"2"),e.qZA(),e.TgZ(372,"option",61),e._uU(373,"3"),e.qZA(),e.TgZ(374,"option",61),e._uU(375,"4"),e.qZA()()()(),e.TgZ(376,"div",94)(377,"div",44)(378,"select",74)(379,"option",75),e._uU(380,"Select Year"),e.qZA(),e.TgZ(381,"option",76),e._uU(382,"2012"),e.qZA(),e.TgZ(383,"option",76),e._uU(384,"2013"),e.qZA(),e.TgZ(385,"option",76),e._uU(386,"2014"),e.qZA(),e.TgZ(387,"option",76),e._uU(388,"2015"),e.qZA()()()(),e.TgZ(389,"div",94)(390,"div",44)(391,"label"),e._uU(392,"End"),e.qZA(),e.TgZ(393,"select",74)(394,"option",61),e._uU(395,"Select Month"),e.qZA(),e.TgZ(396,"option",61),e._uU(397,"1"),e.qZA(),e.TgZ(398,"option",61),e._uU(399,"2"),e.qZA(),e.TgZ(400,"option",61),e._uU(401,"3"),e.qZA(),e.TgZ(402,"option",61),e._uU(403,"4"),e.qZA()()()(),e.TgZ(404,"div",94)(405,"div",44)(406,"select",74)(407,"option",75),e._uU(408,"Select Year"),e.qZA(),e.TgZ(409,"option",76),e._uU(410,"2012"),e.qZA(),e.TgZ(411,"option",76),e._uU(412,"2013"),e.qZA(),e.TgZ(413,"option",76),e._uU(414,"2014"),e.qZA(),e.TgZ(415,"option",76),e._uU(416,"2015"),e.qZA()()()()()(),e.TgZ(417,"div",83)(418,"div",62)(419,"a",95),e.NdJ("click",function(){return i.addExperiance()}),e._UZ(420,"i",64),e._uU(421," Add New"),e.qZA()()(),e.TgZ(422,"div",96),e.YNc(423,T,51,0,"div",66),e.qZA()(),e.TgZ(424,"div",3),e._UZ(425,"div",71),e.TgZ(426,"div",97)(427,"div",98),e._UZ(428,"input",99),e._uU(429," I'm currently working here "),e.qZA()()(),e.TgZ(430,"div",3),e._UZ(431,"div",71),e.TgZ(432,"div",90)(433,"div",54),e._UZ(434,"textarea",55),e.qZA()()(),e.TgZ(435,"div",3)(436,"div",71)(437,"label",42),e._uU(438,"Personal website "),e.qZA()(),e.TgZ(439,"div",90)(440,"div",44),e._UZ(441,"input",100),e.qZA()()()()(),e.TgZ(442,"div",67)(443,"input",101),e.NdJ("click",function(){return i.next(2)}),e.qZA(),e.TgZ(444,"input",102),e.NdJ("click",function(){return i.next(4)}),e.qZA()()(),e.TgZ(445,"div",38)(446,"div",39)(447,"h2"),e._uU(448,"Other info"),e.qZA(),e.TgZ(449,"p"),e._uU(450,"Don\u2019t worry, this can be changed later."),e.qZA()(),e.TgZ(451,"div",103)(452,"div",104)(453,"div",3)(454,"div",105)(455,"label",42),e._uU(456,"Facebook Link "),e.qZA()(),e.TgZ(457,"div",106)(458,"div",44),e._UZ(459,"input",107),e.qZA()(),e.TgZ(460,"div",105)(461,"label",42),e._uU(462,"Instagram Link "),e.qZA()(),e.TgZ(463,"div",106)(464,"div",44),e._UZ(465,"input",108),e.qZA()(),e.TgZ(466,"div",105)(467,"label",42),e._uU(468,"Linkedin Link "),e.qZA()(),e.TgZ(469,"div",106)(470,"div",44),e._UZ(471,"input",109),e.qZA()(),e.TgZ(472,"div",105)(473,"label",42),e._uU(474,"Working Hours"),e.qZA()(),e.TgZ(475,"div",106)(476,"div",110),e._UZ(477,"input",111),e.TgZ(478,"div",112)(479,"input",113),e.NdJ("ngModelChange",function(r){return i.isChecked=r}),e.qZA()()(),e.TgZ(480,"div",114)(481,"div",115)(482,"ul")(483,"li",116),e._uU(484,"Mon"),e.qZA(),e.TgZ(485,"li",116),e._uU(486,"Tue"),e.qZA(),e.TgZ(487,"li",116),e._uU(488,"Wed"),e.qZA(),e.TgZ(489,"li",116),e._uU(490,"Thr"),e.qZA(),e.TgZ(491,"li",116),e._uU(492,"Fri"),e.qZA(),e.TgZ(493,"li"),e._uU(494,"Sat"),e.qZA(),e.TgZ(495,"li"),e._uU(496,"Sun"),e.qZA()()(),e.TgZ(497,"div",117)(498,"div",118),e._UZ(499,"input",119),e.qZA(),e.TgZ(500,"div",118),e._UZ(501,"input",120),e.qZA()()(),e.TgZ(502,"div",121)(503,"div",3)(504,"div",122)(505,"div",117)(506,"div",115)(507,"ul")(508,"li",116),e._uU(509,"Mon"),e.qZA()()(),e.TgZ(510,"div",44),e._UZ(511,"input",119),e.qZA(),e.TgZ(512,"div",44),e._UZ(513,"input",120),e.qZA()()(),e.TgZ(514,"div",122)(515,"div",117)(516,"div",115)(517,"ul")(518,"li",116),e._uU(519,"Tue"),e.qZA()()(),e.TgZ(520,"div",44),e._UZ(521,"input",119),e.qZA(),e.TgZ(522,"div",44),e._UZ(523,"input",120),e.qZA()()(),e.TgZ(524,"div",122)(525,"div",117)(526,"div",115)(527,"ul")(528,"li",116),e._uU(529,"Wed"),e.qZA()()(),e.TgZ(530,"div",44),e._UZ(531,"input",119),e.qZA(),e.TgZ(532,"div",44),e._UZ(533,"input",120),e.qZA()()(),e.TgZ(534,"div",122)(535,"div",117)(536,"div",115)(537,"ul")(538,"li",116),e._uU(539,"Tht"),e.qZA()()(),e.TgZ(540,"div",44),e._UZ(541,"input",119),e.qZA(),e.TgZ(542,"div",44),e._UZ(543,"input",120),e.qZA()()(),e.TgZ(544,"div",122)(545,"div",117)(546,"div",115)(547,"ul")(548,"li",116),e._uU(549,"Fri"),e.qZA()()(),e.TgZ(550,"div",44),e._UZ(551,"input",119),e.qZA(),e.TgZ(552,"div",44),e._UZ(553,"input",120),e.qZA()()(),e.TgZ(554,"div",122)(555,"div",117)(556,"div",115)(557,"ul")(558,"li"),e._uU(559,"Sat"),e.qZA()()(),e.TgZ(560,"div",44),e._UZ(561,"input",119),e.qZA(),e.TgZ(562,"div",44),e._UZ(563,"input",120),e.qZA()()(),e.TgZ(564,"div",122)(565,"div",117)(566,"div",115)(567,"ul")(568,"li"),e._uU(569,"Sun"),e.qZA()()(),e.TgZ(570,"div",118),e._UZ(571,"input",119),e.qZA(),e.TgZ(572,"div",118),e._UZ(573,"input",120),e.qZA()()()()()()()()(),e.TgZ(574,"div",67)(575,"input",101),e.NdJ("click",function(){return i.next(3)}),e.qZA(),e.TgZ(576,"input",123),e.NdJ("click",function(){return i.next(5)}),e.qZA()()(),e.TgZ(577,"div",124)(578,"div",125),e._UZ(579,"img",126),e.TgZ(580,"h2"),e._uU(581,"Hi, Eugene Forest"),e.qZA(),e.TgZ(582,"p"),e._uU(583,"Your onboarding process has been successfully completed. Please check your registered email for other information."),e.qZA(),e.TgZ(584,"a",127),e._uU(585," Back to Home"),e.qZA()()()()()()()()()),2&n&&(e.xp6(9),e.Q6J("routerLink","/home"),e.xp6(2),e.Udp("display",1===i.first?"flex":"none"),e.xp6(21),e.Udp("display",2===i.first?"flex":"none"),e.xp6(21),e.Udp("display",3===i.first?"flex":"none"),e.xp6(21),e.Udp("display",4===i.first?"flex":"none"),e.xp6(21),e.Udp("display",5===i.first?"flex":"none"),e.xp6(24),e.Udp("display",1===i.first?"block":"none"),e.xp6(6),e.Udp("display",2===i.first?"block":"none"),e.xp6(6),e.Udp("display",3===i.first?"block":"none"),e.xp6(6),e.Udp("display",4===i.first||5===i.first?"block":"none"),e.xp6(6),e.Udp("display",1===i.first?"block":"none"),e.xp6(10),e.Q6J("routerLink","/pages/onboard-screen"),e.xp6(6),e.Q6J("routerLink","/pages/onboard-employer"),e.xp6(5),e.Udp("display",2===i.first?"block":"none"),e.xp6(87),e.Q6J("ngForOf",i.serviceArray),e.xp6(4),e.Udp("display",3===i.first?"block":"none"),e.xp6(30),e.Q6J("ngForOf",i.skill),e.xp6(39),e.Q6J("ngForOf",i.education),e.xp6(23),e.Q6J("ngForOf",i.certification),e.xp6(76),e.Q6J("ngForOf",i.experiance),e.xp6(22),e.Udp("display",4===i.first?"block":"none"),e.xp6(34),e.Q6J("ngModel",i.isChecked),e.xp6(1),e.Udp("display",!0===i.isChecked?"block":"none"),e.xp6(22),e.Udp("display",!1===i.isChecked?"block":"none"),e.xp6(75),e.Udp("display",5===i.first?"block":"none"),e.xp6(7),e.Q6J("routerLink","/freelancer/dashboards"))},dependencies:[p.sg,c.rH,Z._Y,Z.YN,Z.Kr,Z.Wl,Z.JJ,Z.JL,Z.On,Z.F]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(U),c.Bz]}),o})();var m=a(8905);let q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,A,m.m]}),o})()}}]);