import{d as b,e as v,r as t,a as N,b as y,f as u,g as P,j as e,D as C,F as r,I as p,C as E,B as L}from"./index-Bs_ZE4pi.js";import{l as A,L as k,v as I}from"./react-simple-captcha-dLPWqv7N.js";const T=()=>{const x=async d=>(await v.post("/user/login",d,{headers:{"Content-Type":"application/json"}})).data,{mutate:c,data:i,error:n,isLoading:a,isError:o,isSuccess:l}=b(x);return{mutate:c,data:i,error:n,isLoading:a,isError:o,isSuccess:l}},z=({onLoginSuccess:x})=>{const{mutate:c,data:i,error:n,isLoading:a,isError:o,isSuccess:l}=T(),d=t.useRef(null),m=N(),g=y(),[h,f]=t.useState(""),j=s=>{I(h)?(s.identifier==="police"&&(s.identifier="admin"),s.identifier==="owner"&&(s.identifier="emp"),c(s)):u.error("CAPTCHA validation failed! Please try again.")};return t.useEffect(()=>{l&&(u.success("Login Success!"),g(P(i.data.jwt_token)),m("/"))},[l,i]),t.useEffect(()=>{o&&u.error(n.message)},[o,n]),t.useEffect(()=>{A(4,"#000","#fff","numbers")},[]),e.jsx(C,{children:e.jsx("main",{className:"relative h-full flex flex-col justify-center bg-indigo-500 overflow-hidden px-4",children:e.jsxs("div",{className:"w-100 max-w-6xl mx-auto px-0 md:px-6 my-2 mb-12 md:py-24",children:[e.jsx("h1",{className:"text-4xl text-white pacifico-regular w-100 text-center my-5",children:"SafeGreet!"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"w-full mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow",children:[e.jsxs("header",{className:"mb-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-indigo-500 mb-1",children:"Login"}),e.jsx("p",{className:"text-[15px] text-slate-500",children:"Please login using your email/phone and password."})]}),e.jsxs(r,{onFinish:j,ref:d,layout:"vertical",initialValues:{remember:!0},children:[e.jsx(r.Item,{name:"identifier",label:"Email / Phone",rules:[{required:!0,message:"Please enter your email or phone number!"},{pattern:/(police)|(owner)|(admin)|(emp)|(guard)|^([6-9]\d{9}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,message:"Please enter a valid email / phone!"}],children:e.jsx(p,{placeholder:"Enter your email or phone",className:"w-80 px-4 border rounded-md"})}),e.jsx(r.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please enter your password!"},{min:6,message:"Password must be at least 6 characters!"}],children:e.jsx(p.Password,{placeholder:"Enter your password",className:"w-80 px-4 border rounded-md"})}),e.jsx(r.Item,{className:"flex items-center justify-center",children:e.jsxs("div",{className:"captcha-wrapper w-80",children:[e.jsx(k,{}),e.jsx(p,{placeholder:"Enter the CAPTCHA",className:"px-4 border rounded-md ",value:h,pattern:"[a-zA-Z0-9]{4}",onInput:s=>{s.target.value=s.target.value.replace(/[^a-zA-Z0-9]/g,"").toUpperCase()},onChange:s=>f(s.target.value)})]})}),e.jsx(r.Item,{name:"terms",valuePropName:"checked",rules:[{validator:(s,w)=>w?Promise.resolve():Promise.reject(new Error("You must accept the terms and conditions"))}],children:e.jsxs(E,{children:["I agree to the"," ",e.jsx("a",{href:"/terms",target:"_blank",className:"text-indigo-500",children:"Terms"})," ","and"," ",e.jsx("a",{href:"/policy",target:"_blank",className:"text-indigo-500",children:"Privacy Policy"})]})}),e.jsx(L,{htmlType:"submit",className:"w-80 mt-1 bg-indigo-500 text-white px-2 rounded-lg",disabled:a,loading:a,children:a?"Logging in...":"Login"}),e.jsx("div",{className:"text-center w-full text-slate-500 mt-1 text-[12px] ",children:e.jsx("span",{className:"cursor-pointer text-indigo-500",onClick:()=>m("/reset-password"),children:"Forgot password? Click here to reset"})})]})]})})]})})})};export{z as default};
