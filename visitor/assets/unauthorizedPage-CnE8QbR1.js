import{a as r,b as l,c,r as i,l as n,j as e,D as x}from"./index-D952V7zn.js";const m=()=>{const t=r(),o=l(),{clientUuid:a}=c(s=>s.auth);return i.useEffect(()=>{o(n())},[]),i.useEffect(()=>{const s=setTimeout(()=>{a?t("/",{replace:!0}):window.location.href=window.location.origin},5e3);return()=>clearTimeout(s)},[t]),e.jsx(x,{children:e.jsx("main",{className:"relative h-full flex flex-col justify-center bg-red-500 overflow-hidden",children:e.jsxs("div",{className:"w-full max-w-6xl mx-auto px-4 md:px-6 py-24",children:[e.jsx("h1",{className:"text-4xl text-white pacifico-regular w-100 text-center my-5",children:"SafeGreet!"}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("div",{className:"max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow",children:[e.jsx("header",{className:"mb-8",children:e.jsx("h1",{className:"text-2xl font-bold text-red-500 mb-1",children:"Unauthorized Access"})})," ",e.jsx("p",{className:"text-[15px] text-slate-500 mb-2",children:"Looks like your session has expired or You do not have permission to view this page."}),e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>a?t("/",{replace:!0}):window.location.href=window.location.origin,className:"bg-red-500 text-white py-2 px-4 rounded-lg",children:"Go to Homepage"}),e.jsx("p",{className:"mt-4 text-sm text-gray-500",children:"You will be redirected in 5 seconds..."})]})]})})]})})})};export{m as default};