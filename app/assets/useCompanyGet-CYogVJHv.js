import{g as p,c as i}from"./index--gxuPgz0.js";const u=({token:a=null})=>{const o=async()=>(await i.get("/company/get",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}})).data,{data:r,error:e,isLoading:n,isError:s,isSuccess:t,refetch:c}=p(["companyData",a],o,{enabled:!!a});return{companyData:r,companyError:e,isCompanyLoading:n,isCompanyError:s,isCompanySuccess:t,refetchCompanyData:c}};export{u};