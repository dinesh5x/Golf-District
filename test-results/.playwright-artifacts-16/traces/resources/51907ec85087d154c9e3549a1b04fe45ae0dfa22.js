(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1931],{90171:function(e,t,l){Promise.resolve().then(l.bind(l,85829)),Promise.resolve().then(l.bind(l,29711))},80599:function(e,t,l){"use strict";l.d(t,{l:function(){return n}});var s=l(57437),r=l(2265);let n=e=>{let{isLoading:t,loadingText:l,children:n}=e;return(0,r.useEffect)(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]),(0,s.jsxs)("div",{className:" inset-0 flex justify-center items-center bg-black bg-opacity-40",style:{zIndex:t?999:-1,position:"fixed"},children:[t&&(0,s.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[(0,s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",style:{width:"80px",height:"80px"},children:[(0,s.jsxs)("radialGradient",{id:"a9",cx:".66",fx:".66",cy:".3125",fy:".3125",gradientTransform:"scale(1.5)",children:[(0,s.jsx)("stop",{offset:"0",stopColor:"#225816"}),(0,s.jsx)("stop",{offset:".3",stopColor:"#225816",stopOpacity:".9"}),(0,s.jsx)("stop",{offset:".6",stopColor:"#225816",stopOpacity:".6"}),(0,s.jsx)("stop",{offset:".8",stopColor:"#225816",stopOpacity:".3"}),(0,s.jsx)("stop",{offset:"1",stopColor:"#225816",stopOpacity:"0"})]}),(0,s.jsx)("circle",{fill:"none",stroke:"url(#a9)",strokeWidth:"15",strokeLinecap:"round",strokeDasharray:"200 1000",strokeDashoffset:"0",cx:"100",cy:"100",r:"70",style:{transformOrigin:"center"},children:(0,s.jsx)("animateTransform",{type:"rotate",attributeName:"transform",calcMode:"spline",dur:"2",values:"360;0",keyTimes:"0;1",keySplines:"0 0 1 1",repeatCount:"indefinite"})}),(0,s.jsx)("circle",{fill:"none",opacity:".2",stroke:"#225816",strokeWidth:"15",strokeLinecap:"round",cx:"100",cy:"100",r:"70"})]}),(0,s.jsx)("div",{children:l})]}),(0,s.jsx)("div",{style:{display:t?"none":"block"},children:n})]})}},85829:function(e,t,l){"use strict";l.r(t),l.d(t,{Courses:function(){return m}});var s=l(57437),r=l(80599),n=l(45300),i=l(27504),o=l(24033),a=l(2265),d=l(16691),c=l.n(d),u=l(61396),f=l.n(u);let x=e=>{let{image:t,courseName:l,location:r,description:n,courseId:i}=e;return(0,s.jsxs)(f(),{href:"/".concat(i),className:"flex w-full flex-col items-center gap-2 max-w-[720px] mx-auto","data-testid":"course-id","data-test":i,"data-qa":l,children:[(0,s.jsx)(c(),{draggable:!1,src:t,width:440,height:288,alt:"course",priority:!0,className:"object-cover rounded-md h-[288px] w-full bg-center",unoptimized:!0}),(0,s.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,s.jsx)("div",{className:"font-bold",children:l}),(0,s.jsx)("div",{children:r}),(0,s.jsx)("div",{className:" text-sm text-justify font-[300]",children:n})]})]})},m=()=>{let{entity:e}=(0,n.b)(),t=null==e?void 0:e.id,l=(0,o.useRouter)(),{data:d,isLoading:c,isError:u,error:f}=i.h.entity.getCoursesByEntityId.useQuery({entityId:t},{enabled:void 0!==t});if((null==e?void 0:e.redirectToCourseFlag)&&(null==d?void 0:d.length)){var m;l.push("/".concat(null===(m=d[0])||void 0===m?void 0:m.id))}let p=(0,a.useMemo)(()=>(null==d?void 0:d.length)===1?"grid-cols-1":(null==d?void 0:d.length)===2?"grid-cols-2":"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",[d]);return console.log(c,e),(0,s.jsx)(s.Fragment,{children:(null==e?void 0:e.redirectToCourseFlag)?(0,s.jsx)(r.l,{isLoading:!0,loadingText:"Please wait while we redirect to your course",children:(0,s.jsx)("div",{})}):c?(0,s.jsx)("div",{className:"mx-auto grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",children:[,,,].fill(null).map((e,t)=>(0,s.jsx)(v,{},t))}):u&&f?(0,s.jsx)("div",{className:"flex justify-center items-center h-[200px]",children:(0,s.jsxs)("div",{className:"text-center",children:["Error: ",null==f?void 0:f.message]})}):d&&(null==d?void 0:d.length)!==0?(0,s.jsx)("div",{className:"mx-auto grid justify-center gap-6 ".concat(p),children:null==d?void 0:d.map((e,t)=>{var l,r,n,i,o;return(0,s.jsx)(x,{image:null!==(r=null==e?void 0:null===(l=e.images)||void 0===l?void 0:l[0])&&void 0!==r?r:"",courseName:null==e?void 0:e.name,location:null!==(n=null==e?void 0:e.address)&&void 0!==n?n:"",description:null!==(i=e.description)&&void 0!==i?i:"",courseId:null!==(o=null==e?void 0:e.id)&&void 0!==o?o:""},t)})}):(0,s.jsx)("div",{className:"flex justify-center items-center h-[200px]",children:(0,s.jsxs)("div",{className:"text-center",children:["No courses found",(null==e?void 0:e.name)?" for ".concat(null==e?void 0:e.name):null,"."]})})})},v=()=>(0,s.jsxs)("div",{className:"flex w-full flex-col items-center gap-4 h-[400px]",children:[(0,s.jsx)("div",{className:"animate-pulse max-h-[288px] flex flex-1 h-full w-full max-w-[440px] bg-gray-200 rounded-md"}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[(0,s.jsx)("div",{className:"animate-pulse h-6 w-[60%] bg-gray-200 rounded-md "}),(0,s.jsx)("div",{className:"animate-pulse h-6 w-full bg-gray-200 rounded-md "}),(0,s.jsxs)("div",{className:"flex flex-col gap-2 mt-2",children:[(0,s.jsx)("div",{className:"animate-pulse h-4 w-full bg-gray-200 rounded-md "}),(0,s.jsx)("div",{className:"animate-pulse h-4 w-full bg-gray-200 rounded-md "}),(0,s.jsx)("div",{className:"animate-pulse h-4 w-full bg-gray-200 rounded-md "}),(0,s.jsx)("div",{className:"animate-pulse h-4 w-[75%] bg-gray-200 rounded-md "})]})]})]})},29711:function(e,t,l){"use strict";l.r(t),l.d(t,{Title:function(){return n}});var s=l(57437),r=l(45300);let n=()=>{let{entity:e}=(0,r.b)();return(0,s.jsx)(s.Fragment,{children:(null==e?void 0:e.name)?(0,s.jsxs)("h1",{className:"pb-4 text-center text-[24px] md:pb-6 md:text-left md:text-[32px]",children:["Welcome to ",null==e?void 0:e.name]}):(0,s.jsx)("div",{className:"animate-pulse h-12 w-[50%] md:w-[35%] bg-gray-200 mx-auto md:mx-0 rounded-md mb-4 md:mb-6"})})}},45300:function(e,t,l){"use strict";l.d(t,{O:function(){return a},b:function(){return d}});var s=l(57437),r=l(22749),n=l(27504),i=l(2265);let o=(0,i.createContext)({prevPath:null,entity:void 0,courses:void 0,setPrevPath:()=>void 0,alertOffersShown:!1,setAlertOffersShown:()=>({})}),a=e=>{let{children:t,entityData:l}=e,{prevPath:a,setPrevPath:d}=(0,r.T)(),[c,u]=(0,i.useState)(l);(0,i.useEffect)(()=>{if(l){u(l);let t=document.querySelector("html");if(t){var e;t.style.setProperty("--primary-color",null!==(e=l.color1)&&void 0!==e?e:"#007AFF")}}},[l]);let f=null==c?void 0:c.id,{data:x}=n.h.entity.getCoursesByEntityId.useQuery({entityId:f},{enabled:void 0!==f}),[m,v]=(0,i.useState)(!1);return(0,s.jsx)(o.Provider,{value:{prevPath:a,entity:c,courses:x,setPrevPath:d,alertOffersShown:m,setAlertOffersShown:v},children:t})},d=()=>(0,i.useContext)(o)},22749:function(e,t,l){"use strict";l.d(t,{T:function(){return i}});var s=l(24033),r=l(2265),n=l(82181);let i=()=>{let[e,t]=(0,n.Xs)("prevPath",null),[l,i]=(0,n.Xs)("currentPath",null),o=(0,s.usePathname)(),a=()=>{var e;let s={path:null!==(e=null==l?void 0:l.path)&&void 0!==e?e:null,createdAt:new Date().toISOString()},r={path:o,createdAt:new Date().toISOString()};t(s),i(r)};return(0,r.useEffect)(()=>{var t;null!=e&&null!==(t=e.path)&&void 0!==t&&t.includes("checkout")||a()},[o]),{prevPath:e,setPrevPath:t,isPathExpired:e=>{if(!e)return!0;let t=new Date(e);return Math.abs(new Date().getTime()-t.getTime())/6e4>10}}}},27504:function(e,t,l){"use strict";l.d(t,{h:function(){return o}});var s=l(88422),r=l(14730),n=l(39116);l(68571);let i=()=>"",o=(0,r.t)({config:()=>({transformer:n.ZP,links:[(0,s.N8)({url:"".concat(i(),"/api/trpc")})]}),ssr:!1})},30622:function(e,t,l){"use strict";var s=l(2265),r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,l){var s,n={},d=null,c=null;for(s in void 0!==l&&(d=""+l),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,s)&&!a.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===n[s]&&(n[s]=t[s]);return{$$typeof:r,type:e,key:d,ref:c,props:n,_owner:o.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},57437:function(e,t,l){"use strict";e.exports=l(30622)},61396:function(e,t,l){e.exports=l(25250)},24033:function(e,t,l){e.exports=l(15313)}},function(e){e.O(0,[5250,4050,6691,2181,2971,4938,1744],function(){return e(e.s=90171)}),_N_E=e.O()}]);