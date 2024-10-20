import{d as g,e as j,r as t,a as v,f as u,j as e,D as w,F as x,I as p,B as y}from"./index-BaGq0BTo.js";import{l as N,L as b,v as E}from"./react-simple-captcha-CkyawEde.js";const C=()=>{const i=async d=>(await j.post("/password-reset",d,{headers:{"Content-Type":"application/json"}})).data,{mutate:n,data:r,error:s,isLoading:l,isError:o,isSuccess:c}=g(i);return{mutate:n,data:r,error:s,isLoading:l,isError:o,isSuccess:c}},A=()=>{const{mutate:i,data:n,error:r,isLoading:s,isError:l,isSuccess:o}=C(),c=t.useRef(null),d=v(),[m,h]=t.useState(""),f=a=>{E(m)?i(a):u.error("CAPTCHA validation failed! Please try again.")};return t.useEffect(()=>{N(4,"#000","#fff","upper")},[]),t.useEffect(()=>{o&&(u.success("Password reset link sent to your email!"),d("/",{replace:!0}))},[o,n]),t.useEffect(()=>{l&&u.error(r.message)},[l,r]),e.jsx(w,{children:e.jsx("main",{className:"relative h-full flex flex-col justify-center bg-indigo-500 overflow-hidden px-4",children:e.jsxs("div",{className:"w-100 max-w-6xl mx-auto px-0 md:px-6 my-2 mb-12 md:py-24",children:[e.jsx("h1",{className:"text-4xl text-white pacifico-regular w-100 text-center my-5",children:"SafeGreet"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"w-full mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-indigo-500 mb-1",children:"Forgot your password?"}),e.jsx("p",{className:"text-[15px] text-slate-500",children:"Enter your email to reset your password."})]}),e.jsxs(x,{onFinish:f,ref:c,layout:"vertical",children:[e.jsx(x.Item,{name:"email",label:"Email",rules:[{required:!0,message:"Please enter your email!"},{type:"email",message:"Please enter a valid email!"}],children:e.jsx(p,{placeholder:"Enter your email",className:"w-80 px-4 border rounded-md"})}),e.jsx(x.Item,{className:"flex items-center justify-center",children:e.jsxs("div",{className:"captcha-wrapper w-80",children:[e.jsx(b,{}),e.jsx(p,{placeholder:"Enter the CAPTCHA",className:"px-4 border rounded-md ",value:m,pattern:"[a-zA-Z0-9]{4}",onInput:a=>{a.target.value=a.target.value.replace(/[^a-zA-Z0-9]/g,"").toUpperCase()},onChange:a=>h(a.target.value)})]})}),e.jsx(y,{htmlType:"submit",className:"w-80 mt-1 bg-indigo-500 text-white px-2 rounded-lg",disabled:s,loading:s,children:s?"Sending...":"Send Reset Link"})]})]})})]})})})};export{A as default};
