"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[526],{4526:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});var a=r(5043),o=r(3216),c=r(579);const d=e=>{let{onProductAdded:t}=e;const[r,o]=(0,a.useState)({productid:"",productCategory:"",productType:"",productImage:null,productVolume:"",productPrice:"",productDescription:"",brandID:""}),[d,n]=(0,a.useState)(""),p=e=>{const{name:t,value:a}=e.target;o({...r,[t]:a})};return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{style:{color:"whitesmoke"},children:"Add a New Product"}),(0,c.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const a=localStorage.getItem("authToken");if(!a)return void n("You are not authenticated. Please log in.");const c=new FormData;c.append("productid",r.productid),c.append("productCategory",r.productCategory),c.append("productType",r.productType),r.productImage&&c.append("productImage",r.productImage),c.append("productVolume",r.productVolume),c.append("productPrice",r.productPrice),c.append("productDescription",r.productDescription),c.append("brandID",r.brandID);try{const e=await fetch("https://prasad-gz5p.onrender.com/api/products/",{method:"POST",headers:{Authorization:`Token ${a}`},body:c});if(!e.ok)throw new Error("Failed to add product");const r=await e.json();t(r),o({productid:"",productCategory:"",productType:"",productImage:null,productVolume:"",productPrice:"",productDescription:"",brandID:""}),n("Product added successfully!")}catch(d){n(d.message)}},children:[(0,c.jsx)("input",{type:"text",name:"productid",placeholder:"Product ID",value:r.productid,onChange:p,required:!0}),(0,c.jsx)("input",{type:"text",name:"productCategory",placeholder:"Product Category",value:r.productCategory,onChange:p,required:!0}),(0,c.jsx)("input",{type:"text",name:"productType",placeholder:"Product Type",value:r.productType,onChange:p}),(0,c.jsx)("input",{type:"file",name:"productImage",accept:"image/*",onChange:e=>{o({...r,productImage:e.target.files[0]})},required:!0}),(0,c.jsx)("input",{type:"text",name:"productVolume",placeholder:"Product Volume",value:r.productVolume,onChange:p,required:!0}),(0,c.jsx)("input",{type:"number",name:"productPrice",placeholder:"Product Price",value:r.productPrice,onChange:p,required:!0}),(0,c.jsx)("textarea",{name:"productDescription",placeholder:"Product Description",value:r.productDescription,onChange:p,required:!0}),(0,c.jsx)("input",{type:"text",name:"brandID",placeholder:"Brand ID",value:r.brandID,onChange:p,required:!0}),(0,c.jsx)("button",{type:"submit",children:"Add Product"})]}),d&&(0,c.jsx)("p",{children:d})]})},n=e=>{let{onProductUpdated:t,currentProduct:r}=e;const[o,d]=(0,a.useState)({productid:"",productCategory:"",productType:"",productImage:"",productVolume:"",productPrice:"",productDescription:"",brandID:""}),[n,p]=(0,a.useState)(""),[s,u]=(0,a.useState)("");(0,a.useEffect)((()=>{r&&(d(r),p(r.productImage))}),[r]);const i=e=>{const{name:t,value:r}=e.target;d({...o,[t]:r})};return(0,c.jsxs)("div",{className:"update-product-formV009",children:[(0,c.jsx)("h2",{children:"Update Product"}),(0,c.jsxs)("form",{onSubmit:async e=>{e.preventDefault();const r=localStorage.getItem("authToken"),a=new FormData;if(a.append("productid",o.productid),a.append("productCategory",o.productCategory),a.append("productType",o.productType),a.append("productVolume",o.productVolume),a.append("productPrice",o.productPrice),a.append("productDescription",o.productDescription),a.append("brandID",o.brandID),o.productImage)a.append("productImage",o.productImage);else if(n){const e=await fetch(n),t=await e.blob(),r=new File([t],n.split("/").pop(),{type:"image/jpeg"});a.append("productImage",r)}try{const e=await fetch(`https://prasad-gz5p.onrender.com/api/products/${o.productid}/update/`,{method:"PUT",headers:{Authorization:`Token ${r}`},body:a});if(!e.ok)throw new Error("Failed to update product");const c=await e.json();t(c),u("Product updated successfully!")}catch(c){u(c.message)}},className:"update-product-form-elementV009",children:[(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)("input",{type:"text",name:"productCategory",placeholder:"Product Category",value:o.productCategory,onChange:i,required:!0,className:"update-product-inputV009"}),(0,c.jsx)("input",{type:"text",name:"productType",placeholder:"Product Type",value:o.productType,onChange:i,className:"update-product-inputV009"})]}),(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)("input",{type:"file",name:"productImage",accept:"image/*",onChange:e=>{d({...o,productImage:e.target.files[0]})},className:"update-product-file-inputV009"}),n&&(0,c.jsxs)("div",{className:"current-image-displayV009",children:[(0,c.jsx)("img",{src:n,alt:"Current Product"}),(0,c.jsxs)("div",{className:"current-image-checkboxV009",children:[(0,c.jsx)("input",{type:"checkbox",checked:!o.productImage,onChange:()=>d({...o,productImage:null})}),(0,c.jsx)("span",{children:"Use Current Image"})]})]})]}),(0,c.jsxs)("div",{className:"input-group",children:[(0,c.jsx)("input",{type:"text",name:"productVolume",placeholder:"Product Volume",value:o.productVolume,onChange:i,required:!0,className:"update-product-inputV009"}),(0,c.jsx)("input",{type:"number",name:"productPrice",placeholder:"Product Price",value:o.productPrice,onChange:i,required:!0,className:"update-product-inputV009"})]}),(0,c.jsx)("textarea",{name:"productDescription",placeholder:"Product Description",value:o.productDescription,onChange:i,required:!0,className:"update-product-textareaV009"}),(0,c.jsx)("input",{type:"text",name:"brandID",placeholder:"Brand ID",value:o.brandID,onChange:i,required:!0,className:"update-product-inputV009"}),(0,c.jsx)("button",{type:"submit",className:"update-product-buttonV009",children:"Update Product"})]}),s&&(0,c.jsx)("div",{className:"update-product-messageV009",children:s})]})};var p=r(4594),s=r(3910),u=r(7929);const i=()=>{const{brandID:e}=(0,o.g)(),[t,r]=(0,a.useState)([]),[i,l]=(0,a.useState)(!0),[m,h]=(0,a.useState)(null),[g,x]=(0,a.useState)(!1),[j,y]=(0,a.useState)(!1),[P,N]=(0,a.useState)(null),[b,C]=(0,a.useState)(""),v=(0,o.Zp)(),f=async()=>{l(!0),h(null);try{const t=await fetch("https://prasad-gz5p.onrender.com/api/products/");if(!t.ok)throw new Error("Network response was not ok");const a=(await t.json()).filter((t=>t.brandID===e));r(a)}catch(t){h(t.message)}finally{l(!1)}};(0,a.useEffect)((()=>{f()}),[e]);const I=()=>{f(),x(!1),y(!1),C("Product updated successfully!"),setTimeout((()=>C("")),3e3)},V=()=>{x(!g),y(!1)};return i?(0,c.jsx)("div",{className:"product-list-loadingV025",children:(0,c.jsx)(p.A,{})}):m?(0,c.jsxs)("div",{className:"product-list-errorV025",children:["Error: ",m]}):(0,c.jsxs)("div",{className:"product-list-containerV025",children:[b&&(0,c.jsx)("div",{className:"notification-container",onClick:()=>C(""),children:b}),(0,c.jsxs)("h1",{className:"product-list-titleV025",style:{textAlign:"center"},children:["Product List for Brand ",e]}),(0,c.jsx)("button",{className:"back-button143",onClick:()=>{v("/brands")},children:(0,c.jsx)(s.g,{icon:u.CeG,size:"2x"})}),(0,c.jsx)("button",{className:"product-list-add-buttonV025",onClick:V,children:g?"Close":"Add Product"}),g&&(0,c.jsx)("dialog",{className:"product-list-modalV025",open:!0,children:(0,c.jsxs)("div",{className:"product-list-modal-contentV025",children:[(0,c.jsx)("span",{className:"product-list-closeV025",onClick:V,children:"\xd7"}),(0,c.jsx)(d,{onProductAdded:I})]})}),j&&(0,c.jsx)("dialog",{className:"product-list-modalV025",open:!0,children:(0,c.jsxs)("div",{className:"product-list-modal-contentV025",children:[(0,c.jsx)("span",{className:"product-list-closeV025",onClick:()=>y(!1),children:"\xd7"}),(0,c.jsx)(n,{onProductUpdated:I,currentProduct:P})]})}),(0,c.jsx)("div",{className:"product-card-container",children:t.map((e=>(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"image_container",children:(0,c.jsx)("img",{src:e.productImage,alt:e.productCategory,className:"image"})}),(0,c.jsx)("h2",{className:"title",children:e.productCategory}),(0,c.jsx)("p",{className:"description",children:e.productDescription}),(0,c.jsxs)("p",{className:"Final_price",children:["Price: \u20b9",new Intl.NumberFormat("en-IN").format(e.productPrice)]}),(0,c.jsx)("button",{className:"edit-button",onClick:()=>(e=>{N(e),y(!0),x(!1)})(e),children:"Update"})]},e.productid)))}),(0,c.jsx)("style",{jsx:!0,children:"\n                .notification-container {\n                    position: fixed;\n                    top: 20px;\n                    left: 20px;\n                    background-color: #28a745;\n                    color: white;\n                    padding: 10px 15px;\n                    border-radius: 5px;\n                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n                    z-index: 1000;\n                    transition: opacity 0.5s ease;\n                }\n            "})]})}},4594:(e,t,r)=>{r.d(t,{A:()=>o});r(5043);var a=r(579);const o=()=>(0,a.jsx)("div",{className:"dot-spinner-container",children:(0,a.jsx)("div",{className:"dot-spinner",children:Array.from({length:8},((e,t)=>(0,a.jsx)("div",{className:`dot-spinner__dot dot-spinner__dot--${t+1}`},t)))})})}}]);
//# sourceMappingURL=526.01837771.chunk.js.map