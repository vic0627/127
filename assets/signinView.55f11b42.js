import{_ as i,o as l,b as c,c as u,f as o,F as m,n as d,s as p,p as f,h as _,d as e,x as g}from"./index.3ad9822e.js";const w="/127/assets/g5_logo_grey.617e6abe.png",h="/127/assets/btn_google_signin_dark_normal_web@2x.dd0f9aec.png";const y=s=>(f("data-v-b803569a"),s=s(),_(),s),v=y(()=>e("section",{class:"banner"},[e("div",{class:"img_box"}),e("div",{class:"wrapper"},[e("main",{class:"container"},[e("a",{href:"/home",class:"logo"},[e("img",{src:w,alt:""})]),e("div",{class:"login"},[e("h1",null,"Log in to EFPV"),e("form",{class:"tab_panel",action:"/member",method:"get"},[e("label",{for:"username"},"Email Address"),e("input",{type:"email",name:"username",class:"input-s",id:"username",maxlength:"35"}),e("span",{class:"unameinfo"}),e("label",{for:"password"},"Password"),e("input",{type:"password",name:"password",class:"input-s",id:"password",maxlength:"20"}),e("span",{class:"pswinfo"}),e("div",{class:"login_info"},[e("input",{type:"checkbox",name:"remember",id:"remember"}),e("label",{for:"remember"},"Remember me"),e("a",{href:"",class:"forget_password"},"Forget Password?")]),e("div",{class:"action"},[e("button",{type:"submit"},"submit"),e("p",null,[g("New user?"),e("a",{href:"/register"},"Create Your EFPV Account ")])])]),e("div",{class:"divider"},[e("span",null," or login with ")]),e("div",{class:"login_with"},[e("a",{href:""},[e("img",{src:h,alt:""})])]),e("div",{class:"login_agree"},[e("span",null,"By continuing, you hereby agree to the Privacy Policy and Terms of Use")]),e("div",{class:"divider"},[e("span")])])])]),e("div",{class:"bginfo"},[e("span",null,"Shot On EFPV Avata Pro-View Combo")])],-1)),b={__name:"signinView",setup(s){return l(()=>{document.querySelector("#username").addEventListener("input",function(){let t=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;this.value!=""?t.test(this.value)==!1?(document.querySelector(".unameinfo").textContent=" format error",document.querySelector(".unameinfo").style.color="red"):t.test(this.value)&&(document.querySelector(".unameinfo").textContent=" match the rules",document.querySelector(".unameinfo").style.color="lightgreen"):document.querySelector(".unameinfo").textContent=""}),document.querySelector("#password").addEventListener("input",function(){let t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;this.value!=""?t.test(this.value)==!1?(document.querySelector(".pswinfo").textContent=" format error",document.querySelector(".pswinfo").style.color="red"):t.test(this.value)&&(document.querySelector(".pswinfo").textContent=" match the rules",document.querySelector(".pswinfo").style.color="lightgreen"):(document.querySelector(".pswinfo").textContent="The password must be eight characters or more and contain at least one uppercase character, at least one lowercase character and at least one number.",document.querySelector(".pswinfo").style.color="#888")})}),(n,a)=>(c(),u(m,null,[o(d),v,o(p)],64))}},S=i(b,[["__scopeId","data-v-b803569a"]]);export{S as default};
