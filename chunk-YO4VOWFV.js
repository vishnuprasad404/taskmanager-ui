import{A as w,B as R,C as u,a as I,b as f,c as l,d as j,e as p,f as b,g as E,h as c,i as D,j as v,k as g,l as h,m as t,n,o as a,p as d,q as r,r as _,s as M,t as k,u as F,v as T,y as q,z as L}from"./chunk-XB6UVD6H.js";var X=i=>({prwlb7BpNA:i}),J=i=>({k11tIyQdzl:i});function Z(i,o){if(i&1&&(t(0,"span",19),r(1),n()),i&2){let e=d().$implicit;l(),_(e==null?null:e.count)}}function G(i,o){if(i&1&&(t(0,"li",18),r(1),E(2,Z,2,1,"span",19),n()),i&2){let e,s=o.$implicit,A=d(2).$implicit,P=d(2);c("routerLink",s==null?null:s.route)("ngClass",k(5,X,P.selectedSidebarMenuItem.includes(A.route)&&P.selectedSidebarMenuItem.includes((e=s.queryParams==null?null:s.queryParams.type)!==null&&e!==void 0?e:"XXX")))("queryParams",s==null?null:s.queryParams),l(),M(" ",s==null?null:s.title," "),l(),D(s!=null&&s.count?2:-1)}}function z(i,o){if(i&1&&(t(0,"li",13)(1,"div",15),a(2,"i",16),r(3),n(),t(4,"ul",17),g(5,G,3,7,"li",18,v),n()()),i&2){let e=d().$implicit;l(2),c("ngClass",e==null?null:e.iconClass),l(),M(" ",e==null?null:e.title," "),l(2),h(e==null?null:e.subLinks)}}function H(i,o){if(i&1&&(t(0,"li",14),a(1,"i",16),r(2),n()),i&2){let e=d().$implicit,s=d(2);c("routerLink",e==null?null:e.route)("ngClass",k(4,J,s.selectedSidebarMenuItem.endsWith(e.route))),l(),c("ngClass",e==null?null:e.iconClass),l(),_(e==null?null:e.title)}}function K(i,o){if(i&1&&E(0,z,7,2,"li",13)(1,H,3,6,"li",14),i&2){let e=o.$implicit;D(e!=null&&e.subLinks?0:1)}}function V(i,o){if(i&1&&(t(0,"div",12),r(1),n(),g(2,K,2,1,null,null,v)),i&2){let e=o.$implicit;l(),_(e==null?null:e.section),l(),h(e==null?null:e.links)}}var S=class i{constructor(o){this._router=o}selectedSidebarMenuItem="";sidebarMenuItems=[];ngOnInit(){this.selectedSidebarMenuItem=this._router.url,this.sidebarMenuItems=[{section:"User Dashboard",links:[{title:"Dashboard",route:"/dashboard",iconClass:"icon-rocket"},{title:"Projects",route:"/dashboard/projects",queryParams:{type:"personal"},iconClass:"icon-price-tags",subLinks:[{title:"My Projects",route:"/dashboard/projects",count:"25",queryParams:{type:"personal"}},{title:"Public Projects",route:"/dashboard/projects",queryParams:{type:"public"},count:"200k+"}]},{title:"Messages",route:"/dashboard/messages",iconClass:"icon-lab"}]},{section:"Report and Hirearchy",links:[{title:"Time Managment",route:"/dashboard/timereport",iconClass:"icon-google-drive"},{title:"Timeline",route:"/dashboard/timeline",iconClass:"icon-price-tags"},{title:"Project Hirearchy",route:"/dashboard/hirearchy",iconClass:"icon-file-zip"}]},{section:"Others",links:[{title:"Settings",route:"/dashboard/settings",iconClass:"icon-rocket"}]}],this._router.events.pipe(I(o=>o instanceof q)).subscribe(o=>{this.selectedSidebarMenuItem=o.url})}navigateToRouteWithQuery(o,e){this._router.navigate([o],{queryParams:{type:e}})}static \u0275fac=function(e){return new(e||i)(j(w))};static \u0275cmp=p({type:i,selectors:[["app-sidebar"]],standalone:!1,decls:18,vars:0,consts:[[1,"DQA8EmwmE9"],[1,"pv3icFdz87"],["src","https://bcassetcdn.com/public/blog/wp-content/uploads/2022/06/22195542/Meta.png","alt","company logo",1,"E9XF8SMZDb"],[1,"yJaiJrZF9f"],[1,"CDM9X5GohY"],[1,"XgfvBiLEs4"],[1,"oypNOddcVp"],[1,"WxhI5AUceG"],[1,"VZbqLnGrHF"],[1,"zSqChlyIgZ"],[1,"icon-lab","gtsT8n4Ljx"],[1,"WZvmntfoAK"],[1,"WrcpE2RI1e"],[1,"PkKJ30JSrx","TbDguWqjGb"],[1,"PkKJ30JSrx",3,"routerLink","ngClass"],[1,"kngg9DD_Dq"],[1,"k5WlqS6VvV",3,"ngClass"],[1,"xe6uggMVZG"],[1,"b3foHQkLZd",3,"routerLink","ngClass","queryParams"],[1,"WoS4ld1BDa"]],template:function(e,s){e&1&&(t(0,"div",0)(1,"div",1),a(2,"img",2),t(3,"div",3)(4,"span",4),r(5,"Company name"),n(),t(6,"p",5),r(7,"Lorem ipsum dolor sit amet."),n()()(),t(8,"ul",6),g(9,V,4,1,null,null,v),n(),t(11,"div",7)(12,"span",8),r(13,"Guest User"),n(),t(14,"button",9),a(15,"i",10),t(16,"span",11),r(17,"Login"),n()()()()),e&2&&(l(9),h(s.sidebarMenuItems))},dependencies:[F,R],encapsulation:2})};var x=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-dashboard"]],standalone:!1,decls:6,vars:0,consts:[[1,"J5tsrbMZMz"],[1,"sX18p81ME8"],[1,"DvQYGpAsmN"],[1,"XG_fEMXcOs"]],template:function(e,s){e&1&&(t(0,"div",0),a(1,"header",1),t(2,"aside",2),a(3,"app-sidebar"),n(),t(4,"section",3),a(5,"router-outlet"),n()())},dependencies:[L,S],encapsulation:2})};var m=class i{static \u0275fac=function(e){return new(e||i)};static \u0275cmp=p({type:i,selectors:[["app-projects"]],decls:57,vars:0,consts:[[1,"jQDix4udvy"],[1,"Xstp2VNcPD"],[1,"ixed4qh8WD"],[1,"b22lMB8L98"],["type","text","id","kHXE05mFJG","placeholder","Search",1,"AM6yTpAP6v"],[1,"icon-rocket","DSnkvEAV_w"],[1,"W2wIh7h4Js"],[1,"icon-rocket","Wh4XZDe_sZ"],[1,"wPxZRbBALq"],[1,"w5UA7TzAsN"],[1,"nNQMXHtPdH"],[1,"IR5CI_OupX"],[1,"FT_OvDWHf5"],[1,"Tr_Ei5PY3M"],[1,"YjPnv_HJsY"],[1,"s5D61kGddw"],[1,"nJA24yVrVx"],[1,"zv34cBCPf7"],["src","https://media.licdn.com/dms/image/v2/D5603AQE4yQh6JaC2Gw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688449505714?e=1747267200&v=beta&t=DKhEDmTRF1WAdRyo4WnDbvs0K9jC97vQleWT9SQSTqo","alt","user image",1,"eDdqnSdEjo"],["src","https://media.licdn.com/dms/image/v2/D4D03AQEp9qWjq_SWww/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721062279032?e=1747267200&v=beta&t=5VxtEl797dmJMPQ5cPK94bplrzSkQcwr0Yws2aX7FKo","alt","user image",1,"eDdqnSdEjo"],[1,"icon-rocket","SfpSDLwitf"],[1,"caUKZKcRrW"],[1,"yppetmF8Pv"],[1,"icon-lab","L7rTQbzC04"],[1,"icon-price-tags","L7rTQbzC04"],[1,"H9j1TM604Z"],[1,"S_sfemDWie"],[1,"Tr_Ei5PY3M","c7nu8ml6tq"],["src","https://raw.studio/wp-content/uploads/Copy-of-Untitled-Design-2024-09-03T100100.233.png","alt","",1,"lvTo76iKpS"],["src","https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?semt=ais_hybrid","alt","user image",1,"eDdqnSdEjo"],["src","https://img.freepik.com/free-psd/3d-rendering-hair-style-avatar-design_23-2151869153.jpg?t=st=1741605569~exp=1741609169~hmac=697c78c0100b488e02dda3fcd25f9f80ce3a5216fe7fd175814bcf8a04a0b7a0&w=740","alt","user image",1,"eDdqnSdEjo"]],template:function(e,s){e&1&&(t(0,"div",0)(1,"span",1),r(2,"Personal Projects"),n(),t(3,"div",2)(4,"div",3),a(5,"input",4)(6,"i",5),n(),t(7,"div",6),a(8,"i",7),t(9,"span",8),r(10,"Filter"),n()()()(),t(11,"div",9)(12,"div",10)(13,"div",11)(14,"span",12),r(15,"Dashboard Design"),n(),t(16,"div",13)(17,"p",14),r(18,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, quisquam!"),n()(),t(19,"div",15)(20,"div",16),r(21,"Development"),n(),t(22,"div",17),a(23,"img",18)(24,"img",19),n()(),a(25,"i",20),n(),t(26,"div",21)(27,"div",22),a(28,"i",23)(29,"i",24),n(),t(30,"span",25),r(31," Last Updated: "),t(32,"span",26),r(33,"10/10/2024"),n()()()(),t(34,"div",10)(35,"div",11)(36,"span",12),r(37,"Dashboard Design"),n(),t(38,"div",27),a(39,"img",28),t(40,"p",14),r(41,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, quisquam!"),n()(),t(42,"div",15)(43,"div",16),r(44,"Development"),n(),t(45,"div",17),a(46,"img",29)(47,"img",30),n()(),a(48,"i",20),n(),t(49,"div",21)(50,"div",22),a(51,"i",23)(52,"i",24),n(),t(53,"span",25),r(54," Last Updated: "),t(55,"span",26),r(56,"10/10/2024"),n()()()()())},encapsulation:2})};var O=[{path:"",component:x,children:[{path:"projects",component:m},{path:"messages",component:m},{path:"timereport",component:m},{path:"timeline",component:m},{path:"hirearchy",component:m},{path:"settings",component:m}]}],y=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[u.forChild(O),u]})};var W=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=b({type:i});static \u0275inj=f({imports:[T,u,y]})};export{W as DashboardModule};
