import{d as ee,e as te,r as s,a as se,b as ae,f as d,g as re,j as a,D as ne,F as P,I as $,B as q}from"./index-Bs_ZE4pi.js";import{l as oe,v as ce,L as ie}from"./react-simple-captcha-dLPWqv7N.js";const le=()=>{const o=async g=>(await te.post("/visitor/login",g,{headers:{"Content-Type":"application/json"}})).data,{mutate:c,data:m,error:w,isLoading:v,isError:x,isSuccess:f}=ee(o);return{mutate:c,data:m,error:w,isLoading:v,isError:x,isSuccess:f}},me=({numFields:o=6})=>{var M;const[c,m]=s.useState(Array(o).fill("")),[w,v]=s.useState(!0),[x,f]=s.useState(10),[g,T]=s.useState(""),[p,I]=s.useState(!1),[O,k]=s.useState(!1),n=s.useRef([]),u=s.useRef(),K=se(),V=s.useRef(),B=s.useRef(),U=ae(),[D,N]=s.useState(!1),[b,E]=s.useState(!1),[S,z]=s.useState(0);s.useEffect(()=>{oe(4,"#000","#fff","numbers")},[]);const{mutate:Z,data:R,error:A,isLoading:C,isError:L,isSuccess:H}=le(),G=s.useCallback(e=>{var t,r;(t=e==null?void 0:e.response)!=null&&t.token&&Z({token:(r=e==null?void 0:e.response)==null?void 0:r.token})},[]);s.useEffect(()=>{H&&(d.success("OTP Verified !"),U(re(R.data.jwt_token)),K("/"))},[H,R]),s.useEffect(()=>{L&&d.error(A.message)},[L,A]);const h=s.useMemo(()=>new OTPless(G),[]);s.useEffect(()=>{var e;if(p){(e=n.current[0])==null||e.focus();let t=setInterval(()=>{f(r=>r-1)},1e3);return()=>{clearInterval(t)}}},[p]),s.useEffect(()=>{u!=null&&u.current&&u.current.focus()},[u]),s.useEffect(()=>{var e,t,r;(t=(e=n==null?void 0:n.current)==null?void 0:e[0])!=null&&t.current&&((r=n==null?void 0:n.current)==null||r[0].current.focus())},[(M=n==null?void 0:n.current)==null?void 0:M[0]]),s.useEffect(()=>{v(c.some(e=>e===""))},[c]);const _=(e,t)=>{var l;const{value:r}=t.target;if(/^[0-9]{1}$/.test(r)){const i=[...c];i[e]=r,m(i),e<o-1&&((l=n.current[e+1])==null||l.focus())}},J=(e,t)=>{},Q=(e,t)=>{var r,l,i,y;if(t.key==="Backspace"||t.key==="Delete"){const j=[...c];j[e]="",m(j),e>0&&((r=n.current[e-1])==null||r.focus())}else t.key==="ArrowRight"&&e<o-1?(l=n.current[e+1])==null||l.focus():t.key==="ArrowLeft"&&e>0?(i=n.current[e-1])==null||i.focus():/^[0-9]{1}$/.test(t.key)&&e<o-1&&t.target.value.length==1&&((y=n.current[e+1])==null||y.focus())},W=s.useCallback(e=>{e.preventDefault(),N(!0),z(t=>t+1),h.verify({channel:"PHONE",phone:g,otp:c.join(""),countryCode:"+91"}).then(({success:t})=>{t||(d.error("Request error: Incorrect OTP!"),N(!1))}).catch(t=>{d.error("Request error: Incorrect OTP!"),N(!1)})},[h,c]),X=e=>{var r;e.preventDefault();const t=e.clipboardData.getData("text");if(new RegExp(`^[0-9]{${o}}$`).test(t)){const l=t.split(""),i=Array(o).fill("");l.forEach((y,j)=>{i[j]=y}),m(i),(r=n.current[o-1])==null||r.focus()}};s.useEffect(()=>{otplessInit&&otplessInit()},[]);const Y=s.useCallback(e=>{if(!b){if(E(!0),!ce(e.captcha)){d.error("CAPTCHA validation failed! Please try again."),setTimeout(()=>E(!1),500);return}e.mobile&&(T(e.mobile),h.initiate({channel:"PHONE",phone:e.mobile,countryCode:"+91"}),I(!0),f(120),k(!0),E(!1))}},[h]),F=()=>{h.initiate({channel:"PHONE",phone:g,countryCode:"+91"}),I(!0),f(120),k(!0)};return s.useEffect(()=>{S>5&&d.error("Max retry limit reached !")},[S]),a.jsx(ne,{children:a.jsx("main",{className:"relative h-full flex flex-col justify-center bg-indigo-500 overflow-hidden px-4",children:a.jsxs("div",{className:"w-100 max-w-6xl mx-auto px-0 md:px-6 my-2 mb-12 md:py-24",children:[a.jsx("h1",{className:"text-4xl text-white pacifico-regular w-100 text-center my-5",children:"SafeGreet!"}),a.jsx("div",{className:"flex justify-center",children:a.jsxs("div",{className:"w-full mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow",children:[a.jsxs("header",{className:"mb-8",children:[a.jsx("h1",{className:"text-2xl font-bold text-indigo-500 mb-1",children:"Mobile verification step"}),a.jsx("p",{className:"text-[15px] text-slate-500 w-80",children:p?`Enter the ${o}-digit verification code that was sent to
                you.`:"Enter 10 digit mobile number, OTP will be sent on this number."})]}),p?a.jsxs("form",{onSubmit:W,ref:B,children:[a.jsx("div",{className:"flex items-center justify-center gap-3",children:c.map((e,t)=>a.jsx("input",{type:"number",className:"w-10 h-10 text-center text-md font-extrabold text-slate-900 bg-slate-300 border border-transparent hover:border-slate-200 appearance-none rounded p-2 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100",maxLength:"1",value:e,ref:r=>n.current[t]=r,onChange:r=>_(t,r),onKeyDown:r=>Q(t,r),onKeyUp:r=>J(),onPaste:X},t))}),a.jsx("div",{className:"max-w-[260px] mx-auto mt-4",children:a.jsx(q,{htmlType:"submit",className:"w-full inline-flex justify-center whitespace-nowrap rounded-lg px-3.5 py-2.5 text-sm font-medium shadow-sm shadow-indigo-950/10 transition-colors duration-150 ",disabled:w||C||D||S>5,loading:C,children:C||D?"Logging in...":"Verify Account"})})]}):a.jsxs(P,{onFinish:Y,ref:V,tabIndex:0,children:[a.jsx(P.Item,{name:"mobile",rules:[{required:!0,message:"Please enter your mobile number!"},{pattern:/^[6-9]\d{9}$/,message:"Please enter a valid 10-digit mobile number!"}],children:a.jsx($,{type:"number",maxLength:10,placeholder:"Enter your mobile number",className:"w-80 px-4 py-2 border rounded-md",ref:u})}),a.jsx(P.Item,{name:"captcha",className:"flex items-center justify-center",children:a.jsxs("div",{className:"captcha-wrapper w-80",children:[a.jsx(ie,{}),a.jsx($,{placeholder:"Enter the CAPTCHA",maxLength:4,className:"px-4 border rounded-md",pattern:"[a-zA-Z0-9]{4}",onInput:e=>{e.target.value=e.target.value.replace(/[^a-zA-Z0-9]/g,"").toUpperCase()}})]})}),a.jsx(q,{htmlType:"submit",className:"w-80 mt-4 bg-indigo-500 text-white py-2 px-2 rounded-lg",disabled:O||b,loading:b,children:O?"Resend Disabled":b?"Validating CAPTCHA":"Request OTP"})]}),p&&a.jsxs("div",{className:"text-sm text-slate-500 mt-4",children:["Didn't receive the code?",a.jsx("br",{}),x>0?a.jsxs("div",{className:"font-medium text-slate-400 text-sm",children:["Resend in ",x," seconds..."]}):a.jsx("a",{className:"font-medium text-indigo-500 hover:text-indigo-600",onClick:F,children:"Resend code"})]})]})})]})})})};export{me as default};
