"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1437],{63260:function(e,t,l){l.d(t,{I:function(){return a}});var r=l(57437);let a=e=>{let{children:t,className:l,...a}=e;return(0,r.jsx)("button",{className:"min-w-[110px] rounded-full border-2 border-primary bg-primary px-5 py-1.5 text-white ".concat(null!=l?l:""),...a,children:t})}},23276:function(e,t,l){l.d(t,{r:function(){return s}});var r=l(57437),a=l(21583);let s=e=>{let{value:t,setValue:l,disabled:s,dataTestId:n}=e;return(0,r.jsx)(a.fC,{checked:t,"data-testid":n,"data-qa":t,onCheckedChange:e=>l(e),className:"relative h-[26px] w-[40px] rounded-full bg-stroke shadow-inner transition-colors data-[state=checked]:bg-primary ".concat(s?"opacity-60 cursor-not-allowed":""),children:(0,r.jsx)(a.bU,{className:"block h-[16px] w-[16px] translate-x-[4px] transform rounded-full bg-white shadow-md transition-transform data-[state=checked]:translate-x-[20px]"})})}},39922:function(e,t,l){l.d(t,{x:function(){return w},c:function(){return j}});var r=l(57437),a=l(79467),s=l(2265),n=l(23276),i=l(6062),o=l(53615),d=l(50961);let u=e=>(0,r.jsx)("form",{children:(0,r.jsxs)(d.fC,{className:"relative flex h-5 w-full touch-none select-none items-center",minStepsBetweenThumbs:1,...e,children:[(0,r.jsx)(d.fQ,{className:"relative h-[8px] grow rounded-full bg-stroke",children:(0,r.jsx)(d.e6,{className:"absolute h-full rounded-full bg-primary"})}),(0,r.jsx)(d.bU,{className:"block h-[20px] w-[20px] rounded-full border-2 border-white bg-primary shadow-md focus:outline-none","aria-label":"min"}),(0,r.jsx)(d.bU,{className:"block h-[20px] w-[20px] rounded-full border-2 border-white bg-primary shadow-md focus:outline-none","aria-label":"min"})]})});var c=l(59050);l(61892);var m=l(89541),x=l(56922),h=l(76332),f=l(27504),v=l(54237);let p=["All","Today","This Week","This Weekend","This Month","Furthest Day Out To Book","Custom"],C=["Any","18","9"],g=["Any","1","2","3","4"],b={year:new Date().getFullYear(),month:new Date().getMonth()+1,day:new Date().getDate()},y=(e=>{let t=new Date;t.setDate(t.getDate()-1);let l=[];for(let r=new Date(e.year,e.month-1,e.day);r<=t;r.setDate(r.getDate()+1))l.push({year:r.getFullYear(),month:r.getMonth()+1,day:r.getDate()});return l})(b),w=()=>{var e,t,l,d,w;let{dateType:T,setDateType:M,holes:N,setHoles:k,golfers:D,setGolfers:S,showUnlisted:P,setShowUnlisted:A,includesCart:B,setIncludesCart:L,setPriceRange:F,startTime:I,setStartTime:V,selectedDay:Z,setSelectedDay:R,startTimeOptions:Y}=(0,h.useFiltersContext)(),{course:E}=(0,x.useCourseContext)(),{data:U}=f.h.searchRouter.findBlackoutDates.useQuery({courseId:null!==(w=null==E?void 0:E.id)&&void 0!==w?w:""},{enabled:(null==E?void 0:E.id)!==void 0}),_=y.concat(null!=U?U:[]),Q=(0,s.useMemo)(()=>E?E.highestListedTeeTime>E.highestPrimarySaleTeeTime?10*Math.ceil(E.highestListedTeeTime/10):10*Math.ceil(E.highestPrimarySaleTeeTime/10):0,[E]),z=(0,s.useMemo)(()=>E?E.lowestListedTeeTime<E.lowestPrimarySaleTeeTime?10*Math.floor(E.lowestListedTeeTime/10):10*Math.floor(E.lowestPrimarySaleTeeTime/10):0,[E]);(0,s.useEffect)(()=>{F([z,Q])},[Q,z]);let[O,q]=(0,s.useState)([I[0],I[1]]),[W,G]=(0,s.useState)([z,Q]),H=()=>{V(O)},$=()=>{F(W)};return(0,r.jsxs)("div",{className:"flex flex-col gap-4 pr-1",children:[(0,r.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{children:"Date"}),(0,r.jsx)(a.fC,{type:"single",value:T,onValueChange:e=>{e&&M(e)},orientation:"vertical",className:"flex flex-col",children:p.map((e,t)=>(0,r.jsxs)(s.Fragment,{children:[(0,r.jsx)(j,{value:e,dataTestId:"date-filter-id",dataQa:e,className:"".concat(0===t?"rounded-t-2xl border border-stroke":t===p.length-1&&"Custom"===T?"border-l border-r border-stroke":t===p.length-1?"rounded-b-2xl border-b border-l border-r border-stroke":"border-b border-l border-r border-stroke")},t),"Custom"===T&&"Custom"===e?(0,r.jsx)(m.f,{value:Z,calendarClassName:"responsive-calendar",onChange:R,colorPrimary:"#40942A",minimumDate:b,disabledDays:_}):null]},t))})]}),(0,r.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{children:"Start Time"}),(0,r.jsxs)("div",{children:[null===(e=Y[Y.findIndex(e=>e.value===O[0])])||void 0===e?void 0:e.displayTime,"-",null===(t=Y[Y.findIndex(e=>e.value===O[1])])||void 0===t?void 0:t.displayTime]})]}),(0,r.jsx)(u,{min:0,max:Y.length-1,step:1,value:[Y.findIndex(e=>e.value===O[0]),Y.findIndex(e=>e.value===O[1])],onPointerUp:()=>{H()},onValueChange:e=>{if(e&&e.length>=2&&"number"==typeof e[0]&&"number"==typeof e[1]){let t=Y[e[0]],l=Y[e[1]];t&&l&&q([t.value,l.value])}},"data-testid":"slider-start-time-id","data-qa":"".concat(null===(l=Y.find(e=>e.value===O[0]))||void 0===l?void 0:l.displayTime," - ").concat(null===(d=Y.find(e=>e.value===O[1]))||void 0===d?void 0:d.displayTime)})]}),(0,r.jsx)("section",{className:"flex flex-col gap-4",children:(null==E?void 0:E.supportsOffers)?(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(n.r,{value:P,setValue:A,dataTestId:"filter-switch-not-for-sale-make-an-offer-id"}),(0,r.jsxs)("div",{className:"flex items-center gap-1 text-primary-gray",children:[(0,r.jsx)(i._,{className:"h-[17px] w-[20px]"}),(0,r.jsx)("div",{className:"text-[15px]",children:"Not for Sale, Make an Offer"}),(0,r.jsx)(c.u,{trigger:(0,r.jsx)(o.k,{className:"h-[14px] w-[14px]"}),content:"Includes unlisted tee times if checked"})]})]}):null}),(0,r.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{children:"Holes"}),(0,r.jsx)(a.fC,{type:"single",value:N,onValueChange:e=>{e&&k(e)},orientation:"horizontal",className:"flex",children:C.map((e,t)=>(0,r.jsx)(j,{value:e,dataTestId:"hole-filter-id",dataQa:e,className:"".concat(0===t?"rounded-l-full border-b border-l border-t border-stroke":t===C.length-1?"rounded-r-full border-b border-r border-t border-stroke":"border border-stroke"," px-[2.5rem]")},t))})]}),(0,r.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,r.jsx)("div",{children:"Golfers"}),(0,r.jsx)(a.fC,{type:"single",value:D.toString(),onValueChange:e=>{if("Any"===e){S("Any");return}e&&S(Number(e))},orientation:"horizontal",className:"flex",children:g.map((e,t)=>(0,r.jsx)(j,{value:e,dataTestId:"golfer-filter-id",dataQa:e,className:"".concat(0===t?"rounded-l-full border-b border-l border-t border-stroke":t===g.length-1?"rounded-r-full border border-stroke":"border-b border-l border-t border-stroke"," px-[1.44rem]")},t))})]}),(0,r.jsxs)("section",{className:"flex flex-col gap-2",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{children:["Price Range ",(0,r.jsx)("span",{className:"font-[300]",children:"(per golfer)"})]}),(0,r.jsxs)("div",{children:["$",W[0],"-$",W[1]]})]}),(0,r.jsx)(u,{min:z,max:Q,step:5,value:W,onPointerUp:()=>{$()},onValueChange:e=>{(0,v.n)(G(e),1e3)},"data-testid":"slider-price-range-id","data-qa":"".concat(null==W?void 0:W[0],"-").concat(null==W?void 0:W[1])})]})]})},j=e=>{let{value:t,className:l,dataTestId:s,dataQa:n,dataTest:i,dataCy:o}=e;return(0,r.jsx)(a.ck,{value:t,className:"bg-white px-4 py-2 text-left text-[14px] text-primary-gray transition-colors data-[state=on]:bg-primary data-[state=on]:text-white ".concat(null!=l?l:""),"data-testid":s,"data-qa":n,"data-test":i,"data-cy":o,children:t})}},6062:function(e,t,l){l.d(t,{_:function(){return a}});var r=l(57437);let a=e=>(0,r.jsx)("svg",{width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 21 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"M2.55103 17.5C2.33348 17.5 2.11594 17.4163 1.9502 17.2506C1.61791 16.9183 1.61791 16.3812 1.9502 16.0489L17.2499 0.749217C17.5822 0.416928 18.1193 0.416928 18.4516 0.749217C18.7838 1.08151 18.7838 1.61859 18.4516 1.95088L3.15186 17.2506C2.98611 17.4163 2.76857 17.5 2.55103 17.5ZM10.2009 15.7995C9.47494 15.7995 8.74184 15.7119 8.02302 15.5413C7.56561 15.4322 7.28432 14.9748 7.3935 14.5182C7.50267 14.0608 7.96326 13.7811 8.41667 13.8887C11.9285 14.7246 15.4449 13.0878 18.6715 9.09149C18.7106 9.04368 18.7106 8.95602 18.6715 8.90821C17.8643 7.90896 17.0244 7.04277 16.1742 6.33521C15.8133 6.03399 15.7646 5.4985 16.0643 5.13753C16.3655 4.77735 16.901 4.72795 17.2611 5.02836C18.1966 5.80768 19.1154 6.75276 19.9937 7.84126C20.5347 8.51381 20.5347 9.48757 19.9937 10.1593C16.9713 13.9036 13.6753 15.8002 10.2002 15.8002L10.2009 15.7995ZM7.80066 12.2583C7.58391 12.2583 7.36637 12.1747 7.19983 12.0105C6.395 11.2065 5.95115 10.1379 5.95115 9.00077C5.95115 6.65727 7.85804 4.75113 10.2008 4.75113C11.3355 4.75113 12.4025 5.19339 13.205 5.99503C13.5373 6.32732 13.5373 6.8652 13.205 7.19749C12.8728 7.52978 12.3357 7.52898 12.0034 7.19749C11.5221 6.71618 10.8822 6.45082 10.2017 6.45082C8.79604 6.45082 7.65174 7.59512 7.65174 9.00077C7.65174 9.68369 7.91789 10.3252 8.40159 10.8073C8.73388 11.1395 8.73467 11.6766 8.40239 12.0089C8.23664 12.1755 8.0191 12.2591 7.80156 12.2591L7.80066 12.2583ZM10.2009 13.2496C9.73152 13.2496 9.35062 12.8695 9.35062 12.3994C9.35062 11.9292 9.73152 11.5491 10.2009 11.5491C11.6065 11.5491 12.7508 10.4048 12.7508 8.99918C12.7508 8.52983 13.1309 8.14893 13.6011 8.14893C14.0712 8.14893 14.4513 8.52983 14.4513 8.99918C14.4513 11.3427 12.5444 13.2488 10.2017 13.2488L10.2009 13.2496ZM5.56405 14.4903C5.42061 14.4903 5.27478 14.4537 5.14092 14.3772C3.49541 13.4313 1.90248 12.0112 0.407599 10.1594C-0.135866 9.48682 -0.135866 8.51227 0.407599 7.83973C3.42919 4.09681 6.72434 2.20026 10.201 2.20026C11.8458 2.20026 13.4784 2.64093 15.0572 3.50871C15.4675 3.73503 15.6182 4.25138 15.3918 4.66337C15.1655 5.07455 14.65 5.22516 14.2372 4.99805C12.9128 4.27052 11.5557 3.90077 10.2003 3.90077C7.26317 3.90077 4.41273 5.58533 1.72978 8.90989C1.69153 8.95771 1.69153 9.04536 1.72978 9.09237C3.09321 10.7801 4.52595 12.063 5.98819 12.9038C6.39539 13.1373 6.53564 13.6577 6.30137 14.0641C6.14519 14.3374 5.85831 14.4904 5.56427 14.4904L5.56405 14.4903Z",fill:"#6D777C"})})},53615:function(e,t,l){l.d(t,{k:function(){return a}});var r=l(57437);let a=e=>(0,r.jsxs)("svg",{width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 15 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.39941 0C3.53359 0 0.399414 3.13418 0.399414 7C0.399414 10.8658 3.53359 14 7.39941 14C11.2652 14 14.3994 10.8658 14.3994 7C14.3994 3.13418 11.2652 0 7.39941 0ZM7.39941 1.4C4.30681 1.4 1.79941 3.9074 1.79941 7C1.79941 10.0926 4.30681 12.6 7.39941 12.6C10.492 12.6 12.9994 10.0926 12.9994 7C12.9994 3.9074 10.492 1.4 7.39941 1.4Z",fill:"#B0B7BC"}),(0,r.jsx)("path",{d:"M6.69934 4.2C6.69934 3.81336 7.0127 3.5 7.39934 3.5C7.78598 3.5 8.09934 3.81336 8.09934 4.2C8.09934 4.58664 7.78598 4.9 7.39934 4.9C7.0127 4.9 6.69934 4.58664 6.69934 4.2Z",fill:"#B0B7BC"}),(0,r.jsx)("path",{d:"M6.69934 6.30059C6.69934 5.91395 7.0127 5.60059 7.39934 5.60059C7.78598 5.60059 8.09934 5.91395 8.09934 6.30059V9.80059C8.09934 10.1872 7.78598 10.5006 7.39934 10.5006C7.0127 10.5006 6.69934 10.1872 6.69934 9.80059V6.30059Z",fill:"#B0B7BC"})]})},89716:function(e,t,l){l.d(t,{K:function(){return a}});var r=l(57437);let a=e=>{let{fill:t,className:l}=e;return(0,r.jsx)("svg",{width:"100%",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:null!=l?l:"",children:(0,r.jsx)("path",{d:"M5.72175 6.99982L10.1692 2.4292C10.4607 2.12959 10.4607 1.6442 10.1692 1.34459C9.87763 1.04498 9.40532 1.04498 9.11379 1.34459L4.13835 6.45733C3.99283 6.60738 3.91982 6.80338 3.91982 6.99988C3.91982 7.19639 3.99282 7.39238 4.13835 7.54244L9.11379 12.6552C9.40532 12.9548 9.87763 12.9548 10.1692 12.6552C10.4607 12.3556 10.4607 11.8702 10.1692 11.5706L5.72175 6.99982Z",fill:null!=t?t:"#353B3F"})})}},59050:function(e,t,l){l.d(t,{u:function(){return s}});var r=l(57437),a=l(29079);let s=e=>{let{trigger:t,content:l,className:s,isDisabled:n=!1}=e;return(0,r.jsx)(r.Fragment,{children:n?(0,r.jsx)(r.Fragment,{children:t}):(0,r.jsx)(a.zt,{children:(0,r.jsxs)(a.fC,{delayDuration:0,children:[(0,r.jsx)(a.xz,{className:"".concat(null!=s?s:""),"data-testid":"trigger-button-id",children:t}),(0,r.jsx)(a.h_,{children:(0,r.jsxs)(a.VY,{className:"rounded-md max-w-[15rem] md:max-w-[30rem] border relative z-50 border-stroke bg-white px-4 py-2 text-sm shadow-lg",sideOffset:5,children:[l,(0,r.jsx)(a.Eh,{className:" fill-white"})]})})]})})})}},56922:function(e,t,l){l.r(t),l.d(t,{CourseWrapper:function(){return n},useCourseContext:function(){return i}});var r=l(57437),a=l(2265);let s=(0,a.createContext)({course:void 0}),n=e=>{let{children:t,courseData:l,courseImages:n}=e,i=(0,a.useMemo)(()=>{if(l&&n)return{...l,...n}},[l,n]);return(0,r.jsx)(s.Provider,{value:{course:i},children:t})},i=()=>(0,a.useContext)(s)},76332:function(e,t,l){l.r(t),l.d(t,{FiltersWrapper:function(){return d},useFiltersContext:function(){return u}});var r=l(57437),a=l(2265),s=l(56922);let n={from:{day:new Date().getDate(),month:new Date().getMonth()+1,year:new Date().getFullYear()},to:{day:new Date().getDate(),month:new Date().getMonth()+1,year:new Date().getFullYear()}},i=[{displayTime:"6 AM",value:600},{displayTime:"7 AM",value:700},{displayTime:"8 AM",value:800},{displayTime:"9 AM",value:900},{displayTime:"10 AM",value:1e3},{displayTime:"11 AM",value:1100},{displayTime:"12 PM",value:1200},{displayTime:"1 PM",value:1300},{displayTime:"2 PM",value:1400},{displayTime:"3 PM",value:1500},{displayTime:"4 PM",value:1600},{displayTime:"5 PM",value:1700},{displayTime:"6 PM",value:1800},{displayTime:"7 PM",value:1900},{displayTime:"8 PM",value:2e3},{displayTime:"9 PM",value:2100}],o=(0,a.createContext)({dateType:"All",setDateType:()=>void 0,holes:"Any",setHoles:()=>void 0,golfers:4,setGolfers:()=>void 0,showUnlisted:!1,setShowUnlisted:()=>void 0,includesCart:!1,setIncludesCart:()=>void 0,priceRange:[0,5e3],setPriceRange:()=>void 0,startTime:[900,2100],setStartTime:()=>void 0,selectedDay:n,setSelectedDay:()=>void 0,startTimeOptions:i,sortValue:"Sort by time - Early to Late",handleSetSortValue:()=>void 0}),d=e=>{let{children:t}=e,[l,d]=(0,a.useState)("All"),[u,c]=(0,a.useState)("Any"),[m,x]=(0,a.useState)("Any"),[h,f]=(0,a.useState)(!1),[v,p]=(0,a.useState)(!0),[C,g]=(0,a.useState)([0,5e3]),[b,y]=(0,a.useState)([900,2100]),[w,j]=(0,a.useState)(n),[T,M]=(0,a.useState)("Sort by time - Early to Late"),{course:N}=(0,s.useCourseContext)(),k=(0,a.useMemo)(()=>{var e,t,l,r,a,s,n,o,d,u;if(!N||!(null==N?void 0:N.openTime))return i;let c=null!==(d=Number(null==N?void 0:null===(r=N.openTime)||void 0===r?void 0:null===(l=r.split(" "))||void 0===l?void 0:null===(t=l[1])||void 0===t?void 0:null===(e=t.split(":"))||void 0===e?void 0:e[0]))&&void 0!==d?d:9,m=null!==(u=Number(null==N?void 0:null===(o=N.closeTime)||void 0===o?void 0:null===(n=o.split(" "))||void 0===n?void 0:null===(s=n[1])||void 0===s?void 0:null===(a=s.split(":"))||void 0===a?void 0:a[0]))&&void 0!==u?u:9,x=m-c,h=[];for(let e=0;e<=x;e++){let t=c+e>=12?"PM":"AM",l=c+e>12?c+e-12:c+e;h.push({displayTime:"".concat(0===l?12:l," ").concat(t),value:(c+e)*100})}return y([100*c,100*m]),h},[N]);return(0,a.useEffect)(()=>{"Custom"!==l&&j(n)},[l]),(0,r.jsx)(o.Provider,{value:{dateType:l,setDateType:d,holes:u,setHoles:c,golfers:m,setGolfers:x,showUnlisted:h,setShowUnlisted:f,includesCart:v,setIncludesCart:p,priceRange:C,setPriceRange:g,startTime:b,setStartTime:y,selectedDay:w,setSelectedDay:j,startTimeOptions:k,sortValue:T,handleSetSortValue:e=>{M(e)}},children:t})},u=()=>(0,a.useContext)(o)},20450:function(e,t,l){l.d(t,{P:function(){return s}});var r=l(27504),a=l(2265);let s=()=>{let{data:e,isLoading:t,refetch:l}=r.h.auth.getSession.useQuery(void 0);return{user:(0,a.useMemo)(()=>{if(e)return null==e?void 0:e.user},[e]),isLoading:t,refetch:l}}},27504:function(e,t,l){l.d(t,{h:function(){return i}});var r=l(88422),a=l(14730),s=l(39116);l(68571);let n=()=>"",i=(0,a.t)({config:()=>({transformer:s.ZP,links:[(0,r.N8)({url:"".concat(n(),"/api/trpc")})]}),ssr:!1})},54237:function(e,t,l){l.d(t,{n:function(){return r}});let r=(e,t)=>{let l;return function(){for(var r=arguments.length,a=Array(r),s=0;s<r;s++)a[s]=arguments[s];clearTimeout(l),l=setTimeout(()=>{e(...a)},t)}}}}]);