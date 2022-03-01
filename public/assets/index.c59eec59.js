import{j as t,V as E,C as T,a as e,H as j,T as m,F as R,L as b,B as I,b as U,c as te,O as $,d as ae,r,e as z,f as V,g as D,I as _,S as K,h as B,E as Y,i as re,D as ne,u as G,A as J,k as Q,l as f,m as x,n as S,R as oe,o as se,p as ce,q as y}from"./vendor.84da39dc.js";const le=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))h(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&h(p)}).observe(document,{childList:!0,subtree:!0});function u(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerpolicy&&(s.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?s.credentials="include":o.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function h(o){if(o.ep)return;o.ep=!0;const s=u(o);fetch(o.href,s)}};le();function ie(){return t(E,{align:"stretch",spacing:"4",mt:"10",children:[t(T,{h:"100px",flexDirection:"column",children:[e(j,{as:"h1",size:"4xl",color:"teal.700",children:"Phonebook"}),e(m,{fontSize:"xs",children:"Your list of phone numbers"})]}),t(R,{justifyContent:"center",children:[e(b,{to:"/",children:e(I,{colorScheme:"teal",px:"5",mx:"5",children:"Home"})}),e(b,{to:"/contacts",children:e(I,{colorScheme:"teal",px:"5",mx:"5",children:"Contacts"})}),e(b,{to:"/addContact",children:e(I,{colorScheme:"teal",px:"5",mx:"5",children:"Add Contact"})})]})]})}function de(){return e(U,{children:t(te,{children:[e(ie,{}),e($,{})]})})}var w=ae.create({baseURL:"/",headers:{"Content-type":"application/json"}});class F{async getAll(){return await w.get("/contact")}async getOne(n){return await w.get(`/contact/${n}`)}async create(n){return await w.post("/contact",n)}async update(n,u){return await w.put(`/contact/${n}`,u)}async delete(n){return await w.delete(`/contact/${n}`)}}function ue(){const[d,n]=r.exports.useState([]),[u,h]=r.exports.useState(!1),[o,s]=r.exports.useState(!1),p=async()=>{try{const l=await new F().getAll();n(l.data)}catch(l){console.error(l)}};return r.exports.useEffect(()=>{p()},[u]),t(T,{children:[e(z,{children:d.map((l,C)=>t(V,{p:5,my:5,borderWidth:2,borderRadius:10,boxShadow:"lg",borderColor:"teal.500",maxWidth:"800px",children:[t(R,{p:2,children:[e(D,{mr:"3",children:e(_,{cloudName:"duxzvouuw",publicId:`dev_setups/${l.id}`,width:"50",crop:"scale"},C)}),e(m,{fontWeight:"bold",mt:"2",children:e(b,{to:`/contacts/${l.id}`,children:l.name})}),e(K,{}),e(b,{to:`/updateContact/${l.id}`,children:e(B,{"aria-label":"Edit Contact",h:"20px",w:"20px",colorScheme:"teal",variant:"ghost",icon:e(Y,{})})}),e(B,{"aria-label":"Delete Contact",h:"20px",w:"20px",colorScheme:"teal",variant:"ghost",icon:o?e(re,{}):e(ne,{}),onClick:async()=>{h(!0),s(!0);try{await new F().delete(l.id),h(!1),s(!1)}catch(v){console.log(v)}}})]}),t(R,{justifyContent:"space-between",p:2,children:[t(m,{as:"sub",children:["Email: ",l.email]}),t(m,{as:"sub",mx:2,children:["Phone: ",l.telephone]})]})]},l.id))}),e($,{})]})}function X(){const d=G(),[n,u]=r.exports.useState({name:"",email:"",telephone:""});return r.exports.useState(!1),r.exports.useState(!1),r.exports.useEffect(()=>{(async()=>{const h=await new F().getOne(Number(d.contactID));u(h.data)})()},[]),e(U,{children:e(T,{children:e(z,{children:t(V,{p:5,my:5,borderWidth:2,borderRadius:10,boxShadow:"lg",borderColor:"teal.500",maxWidth:"800px",children:[t(R,{p:2,children:[e(D,{mr:"3",children:e(_,{cloudName:"duxzvouuw",publicId:`dev_setups/${d.contactID}`,width:"50",crop:"scale"},d.contactID)}),e(m,{fontWeight:"bold",mt:"2",children:e(b,{to:`/contacts/${d.contactID}`,children:n.name})}),e(K,{}),e(b,{to:`/updateContact/${d.contactID}`,children:e(B,{"aria-label":"Edit Contact",h:"20px",w:"20px",colorScheme:"teal",variant:"ghost",icon:e(Y,{})})}),e(b,{to:"/contacts"})]}),t(R,{justifyContent:"space-between",p:2,children:[t(m,{as:"sub",children:["Email: ",n.email]}),t(m,{as:"sub",mx:2,children:["Phone: ",n.telephone]})]})]},d.contactID)})})})}class Z{async getAll(){return await w.get("/uploadImage")}async create(n){return await w.post("/uploadImage",n)}}function he(){const[d,n]=r.exports.useState(""),[u,h]=r.exports.useState(""),[o,s]=r.exports.useState(),[p,l]=r.exports.useState(""),[C,v]=r.exports.useState(""),[L,P]=r.exports.useState(""),[M,H]=r.exports.useState(!1),[N,q]=r.exports.useState(!1),A=i=>{const a=i.target.files[0];W(a),s(a),n(i.target.value)},W=i=>{const a=new FileReader;a.readAsDataURL(i),a.onloadend=()=>{h(String(a.result))}},k=async i=>{i.preventDefault(),Array.from(document.querySelectorAll("input")).forEach(g=>g.value="");const a=await new F().create({name:p,email:C,telephone:L});if(console.log(a.data.id),!o)return;const c=new FileReader;c.readAsDataURL(o),c.onloadend=()=>{O(c.result,a.data.id)},c.onerror=()=>{console.error("AHHHHHHHH!!")}},O=async(i,a)=>{try{await new Z().create({data:i,id:a}),n(""),h(""),H(!0),setInterval(()=>{H(!1)},5e3)}catch(c){console.error(c),q(!0),setInterval(()=>{q(!1)},5e3)}};return t(E,{mt:"5",children:[M?t(J,{status:"success",w:"50%",borderRadius:"30px",children:[e(Q,{}),"Data uploaded to the server. Fire on!"]}):"",t(D,{w:"50%",p:8,maxWidth:"500px",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[u&&e("img",{src:u,alt:"chosen",style:{height:"300px"}}),t("form",{onSubmit:k,children:[t(f,{isRequired:!0,children:[e(x,{children:"Load Image"}),e(S,{id:"fileInput",type:"file",name:"image",onChange:A,value:d})]}),t(f,{isRequired:!0,mt:"5",children:[e(x,{children:"Name"}),e(S,{type:"text",onChange:i=>l(i.currentTarget.value)})]}),t(f,{isRequired:!0,mt:"5",children:[e(x,{children:"Email"}),e(S,{type:"email",onChange:i=>v(i.currentTarget.value)})]}),t(f,{isRequired:!0,mt:"5",children:[e(x,{children:"Phone"}),e(S,{type:"number",onChange:i=>P(i.currentTarget.value)})]}),e(I,{colorScheme:"teal",variant:"outline",mt:"5",w:"full",type:"submit",children:"Submit"})]})]})]})}function pe(){return e(he,{})}function me(){const d=G(),[n,u]=r.exports.useState(""),[h,o]=r.exports.useState(""),[s,p]=r.exports.useState(),[l,C]=r.exports.useState(""),[v,L]=r.exports.useState(""),[P,M]=r.exports.useState(""),[H,N]=r.exports.useState(!1),[q,A]=r.exports.useState(!1),W=a=>{const c=a.target.files[0];k(c),p(c),u(a.target.value)},k=a=>{const c=new FileReader;c.readAsDataURL(a),c.onloadend=()=>{o(String(c.result))}},O=async a=>{a.preventDefault(),Array.from(document.querySelectorAll("input")).forEach(ee=>ee.value="");const c=await new F().update(Number(d.contactID),{name:l,email:v,telephone:P});if(console.log(c.data.id),!s)return;const g=new FileReader;g.readAsDataURL(s),g.onloadend=()=>{i(g.result,c.data.id)},g.onerror=()=>{console.error("AHHHHHHHH!!")}},i=async(a,c)=>{try{await new Z().create({data:a,id:c}),u(""),o(""),N(!0),setInterval(()=>{N(!1)},5e3)}catch(g){console.error(g),A(!0),setInterval(()=>{A(!1)},5e3)}};return t(E,{mt:"5",children:[e(X,{}),H?t(J,{status:"success",w:"50%",borderRadius:"30px",children:[e(Q,{}),"Data updated and uploaded to the server. Fire on!"]}):"",t(D,{w:"50%",p:8,maxWidth:"500px",borderWidth:1,borderRadius:8,boxShadow:"lg",children:[h&&e("img",{src:h,alt:"chosen",style:{height:"300px"}}),t("form",{onSubmit:O,children:[t(f,{isRequired:!0,children:[e(x,{children:"Load Image"}),e(S,{id:"fileInput",type:"file",name:"image",onChange:W,value:n})]}),t(f,{isRequired:!0,mt:"5",children:[e(x,{children:"Name"}),e(S,{type:"text",onChange:a=>C(a.currentTarget.value)})]}),t(f,{isRequired:!0,mt:"5",children:[e(x,{children:"Email"}),e(S,{type:"email",onChange:a=>L(a.currentTarget.value)})]}),t(f,{isRequired:!0,mt:"5",children:[e(x,{children:"Phone"}),e(S,{type:"number",onChange:a=>M(a.currentTarget.value)})]}),e(I,{colorScheme:"teal",variant:"outline",mt:"5",w:"full",type:"submit",children:"Submit"})]})]})]})}function ge(){return e(E,{mt:"30",children:t(D,{p:5,my:5,borderWidth:2,borderRadius:10,boxShadow:"lg",borderColor:"teal.500",maxWidth:"800px",children:[e(j,{as:"h2",children:" Objective "}),e(m,{mt:"50",children:"Presenting you a simple CRUD app made with a React Frontend utilizing Chakra UI as the components library and a TypeORM, Postgres and TypeScript Backend!"}),e(m,{mt:"5",children:"Made with the objective of learning more about the Express, Postgres, React and Node stack!"})]})})}oe.render(e(r.exports.StrictMode,{children:e(se,{children:e(ce,{children:t(y,{path:"/",element:e(de,{}),children:[e(y,{path:"/",element:e(ge,{})}),e(y,{path:"contacts",element:e(ue,{})}),e(y,{path:"contacts/:contactID",element:e(X,{})}),e(y,{path:"addContact",element:e(pe,{})}),e(y,{path:"updateContact/:contactID",element:e(me,{})}),e(y,{path:"*",element:e("h1",{children:"404 no match"})})]})})})}),document.getElementById("root"));
