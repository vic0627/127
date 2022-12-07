import{r as T,g as B,_ as ct,o as ut,b as E,c as P,F as V,e as G,d as c,m as I,t as H,u as se,a as Ce,f as K,z as ae,B as ne,w as Tt,p as Mt,h as Ct}from"./index.7e46e388.js";import{$ as N,a as Ot}from"./useCommon.c30f89cb.js";import{E as Lt,V as ee,h as ue,T as de,Q as Qe,i as Je,j as Y,G as he,S as At,F as Nt,W as Dt,A as jt,P as zt,a as It,M as Rt,C as et,c as tt,d as $t}from"./GLTFLoader.6db9d3a9.js";import{b as Yt}from"./useOnunmounted.b09aa176.js";const Bt="/assets/body_01_black.452fe657.glb",Xt="/assets/body_01_blue.132a9c85.glb",Ft="/assets/body_01_green.e5b41736.glb",Wt="/assets/body_01_red.a0b601d0.glb",Vt="/assets/body_01_white.a83f00fc.glb",Ht="/assets/body_02_black.35cf5393.glb",Ut="/assets/body_02_blue.1cf19825.glb",Zt="/assets/body_02_green.4baf5f83.glb",Kt="/assets/body_02_red.09a3975a.glb",Gt="/assets/body_02_white.0eea6e9a.glb",qt="/assets/body_03_black.b89f4883.glb",Qt="/assets/body_03_blue.d0277abc.glb",Jt="/assets/body_03_green.710dd1fb.glb",eo="/assets/body_03_red.97187059.glb",to="/assets/body_03_white.6160b5d6.glb",oo="/assets/propeller_01_black.9a968f49.glb",ao="/assets/propellor_01_blue.f25f08eb.glb",no="/assets/propellor_01_green.941bdeb7.glb",so="/assets/propellor_01_red.a5c61fce.glb",lo="/assets/propellor_01_white.2a67d322.glb",ro="/assets/propellor_02_black.41da818c.glb",io="/assets/propellor_02_blue.3730ae73.glb",co="/assets/propellor_02_green.28c853b5.glb",uo="/assets/propellor_02_red.a05edc7f.glb",po="/assets/propellor_02_white.7dc4ee50.glb",mo="/assets/propellor_03_black.5f2d5df5.glb",ho="/assets/propellor_03_blue.89b4f7b0.glb",fo="/assets/propellor_03_green.91e6fbbf.glb",bo="/assets/propellor_03_red.8a1b97ab.glb",go="/assets/propellor_03_white.23f5620d.glb",ye=T({body01:{id:1,name:"body01",weight:3e3,color:{1:Bt,2:Xt,3:Ft,4:Wt,5:Vt}},body02:{id:2,name:"body02",weight:3300,color:{1:Ht,2:Ut,3:Zt,4:Kt,5:Gt}},body03:{id:3,name:"body03",weight:3600,color:{1:qt,2:Qt,3:Jt,4:eo,5:to}}}),_e=T({propellor01:{id:1,name:"propellor01",weight:300,color:{1:oo,2:ao,3:no,4:so,5:lo}},propellor02:{id:2,name:"propellor02",weight:350,color:{1:ro,2:io,3:co,4:uo,5:po}},propellor03:{id:3,name:"propellor03",weight:400,color:{1:mo,2:ho,3:fo,4:bo,5:go}}}),Oe=T({motor01:{id:1,name:"motor01",rpm:5300,kgm:8},motor02:{id:2,name:"motor02",rpm:4800,kgm:9},motor03:{id:3,name:"motor03",rpm:4400,kgm:10}}),ot=T({controller01:{id:1,name:"controller01",kgmc:1},controller02:{id:2,name:"controller02",kgmc:1.1},controller03:{id:3,name:"controller03",kgmc:.9}}),at={type:"change"},Le={type:"start"},nt={type:"end"};class vo extends Lt{constructor(n,d){super(),this.object=n,this.domElement=d,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ue.ROTATE,MIDDLE:ue.DOLLY,RIGHT:ue.PAN},this.touches={ONE:de.ROTATE,TWO:de.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return p.phi},this.getAzimuthalAngle=function(){return p.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",Ue),this._domElementKeyEvents=t},this.saveState=function(){e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=function(){e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(at),e.update(),a=o.NONE},this.update=function(){const t=new ee,l=new Qe().setFromUnitVectors(n.up,new ee(0,1,0)),w=l.clone().invert(),k=new ee,z=new Qe,ce=2*Math.PI;return function(){const qe=e.object.position;t.copy(qe).sub(e.target),t.applyQuaternion(l),p.setFromVector3(t),e.autoRotate&&a===o.NONE&&j(m()),e.enableDamping?(p.theta+=y.theta*e.dampingFactor,p.phi+=y.phi*e.dampingFactor):(p.theta+=y.theta,p.phi+=y.phi);let U=e.minAzimuthAngle,Z=e.maxAzimuthAngle;return isFinite(U)&&isFinite(Z)&&(U<-Math.PI?U+=ce:U>Math.PI&&(U-=ce),Z<-Math.PI?Z+=ce:Z>Math.PI&&(Z-=ce),U<=Z?p.theta=Math.max(U,Math.min(Z,p.theta)):p.theta=p.theta>(U+Z)/2?Math.max(U,p.theta):Math.min(Z,p.theta)),p.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,p.phi)),p.makeSafe(),p.radius*=M,p.radius=Math.max(e.minDistance,Math.min(e.maxDistance,p.radius)),e.enableDamping===!0?e.target.addScaledVector(D,e.dampingFactor):e.target.add(D),t.setFromSpherical(p),t.applyQuaternion(w),qe.copy(e.target).add(t),e.object.lookAt(e.target),e.enableDamping===!0?(y.theta*=1-e.dampingFactor,y.phi*=1-e.dampingFactor,D.multiplyScalar(1-e.dampingFactor)):(y.set(0,0,0),D.set(0,0,0)),M=1,i||k.distanceToSquared(e.object.position)>s||8*(1-z.dot(e.object.quaternion))>s?(e.dispatchEvent(at),k.copy(e.object.position),z.copy(e.object.quaternion),i=!1,!0):!1}}(),this.dispose=function(){e.domElement.removeEventListener("contextmenu",Ze),e.domElement.removeEventListener("pointerdown",We),e.domElement.removeEventListener("pointercancel",Ve),e.domElement.removeEventListener("wheel",He),e.domElement.removeEventListener("pointermove",xe),e.domElement.removeEventListener("pointerup",Te),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",Ue)};const e=this,o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=o.NONE;const s=1e-6,p=new Je,y=new Je;let M=1;const D=new ee;let i=!1;const _=new Y,h=new Y,S=new Y,C=new Y,O=new Y,Q=new Y,J=new Y,f=new Y,oe=new Y,u=[],ie={};function m(){return 2*Math.PI/60/60*e.autoRotateSpeed}function L(){return Math.pow(.95,e.zoomSpeed)}function j(t){y.theta-=t}function be(t){y.phi-=t}const ge=function(){const t=new ee;return function(w,k){t.setFromMatrixColumn(k,0),t.multiplyScalar(-w),D.add(t)}}(),g=function(){const t=new ee;return function(w,k){e.screenSpacePanning===!0?t.setFromMatrixColumn(k,1):(t.setFromMatrixColumn(k,0),t.crossVectors(e.object.up,t)),t.multiplyScalar(w),D.add(t)}}(),x=function(){const t=new ee;return function(w,k){const z=e.domElement;if(e.object.isPerspectiveCamera){const ce=e.object.position;t.copy(ce).sub(e.target);let ve=t.length();ve*=Math.tan(e.object.fov/2*Math.PI/180),ge(2*w*ve/z.clientHeight,e.object.matrix),g(2*k*ve/z.clientHeight,e.object.matrix)}else e.object.isOrthographicCamera?(ge(w*(e.object.right-e.object.left)/e.object.zoom/z.clientWidth,e.object.matrix),g(k*(e.object.top-e.object.bottom)/e.object.zoom/z.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}}();function me(t){e.object.isPerspectiveCamera?M/=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom*t)),e.object.updateProjectionMatrix(),i=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function je(t){e.object.isPerspectiveCamera?M*=t:e.object.isOrthographicCamera?(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/t)),e.object.updateProjectionMatrix(),i=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function ze(t){_.set(t.clientX,t.clientY)}function pt(t){J.set(t.clientX,t.clientY)}function Ie(t){C.set(t.clientX,t.clientY)}function mt(t){h.set(t.clientX,t.clientY),S.subVectors(h,_).multiplyScalar(e.rotateSpeed);const l=e.domElement;j(2*Math.PI*S.x/l.clientHeight),be(2*Math.PI*S.y/l.clientHeight),_.copy(h),e.update()}function ht(t){f.set(t.clientX,t.clientY),oe.subVectors(f,J),oe.y>0?me(L()):oe.y<0&&je(L()),J.copy(f),e.update()}function ft(t){O.set(t.clientX,t.clientY),Q.subVectors(O,C).multiplyScalar(e.panSpeed),x(Q.x,Q.y),C.copy(O),e.update()}function bt(t){t.deltaY<0?je(L()):t.deltaY>0&&me(L()),e.update()}function gt(t){let l=!1;switch(t.code){case e.keys.UP:x(0,e.keyPanSpeed),l=!0;break;case e.keys.BOTTOM:x(0,-e.keyPanSpeed),l=!0;break;case e.keys.LEFT:x(e.keyPanSpeed,0),l=!0;break;case e.keys.RIGHT:x(-e.keyPanSpeed,0),l=!0;break}l&&(t.preventDefault(),e.update())}function Re(){if(u.length===1)_.set(u[0].pageX,u[0].pageY);else{const t=.5*(u[0].pageX+u[1].pageX),l=.5*(u[0].pageY+u[1].pageY);_.set(t,l)}}function $e(){if(u.length===1)C.set(u[0].pageX,u[0].pageY);else{const t=.5*(u[0].pageX+u[1].pageX),l=.5*(u[0].pageY+u[1].pageY);C.set(t,l)}}function Ye(){const t=u[0].pageX-u[1].pageX,l=u[0].pageY-u[1].pageY,w=Math.sqrt(t*t+l*l);J.set(0,w)}function vt(){e.enableZoom&&Ye(),e.enablePan&&$e()}function yt(){e.enableZoom&&Ye(),e.enableRotate&&Re()}function Be(t){if(u.length==1)h.set(t.pageX,t.pageY);else{const w=Me(t),k=.5*(t.pageX+w.x),z=.5*(t.pageY+w.y);h.set(k,z)}S.subVectors(h,_).multiplyScalar(e.rotateSpeed);const l=e.domElement;j(2*Math.PI*S.x/l.clientHeight),be(2*Math.PI*S.y/l.clientHeight),_.copy(h)}function Xe(t){if(u.length===1)O.set(t.pageX,t.pageY);else{const l=Me(t),w=.5*(t.pageX+l.x),k=.5*(t.pageY+l.y);O.set(w,k)}Q.subVectors(O,C).multiplyScalar(e.panSpeed),x(Q.x,Q.y),C.copy(O)}function Fe(t){const l=Me(t),w=t.pageX-l.x,k=t.pageY-l.y,z=Math.sqrt(w*w+k*k);f.set(0,z),oe.set(0,Math.pow(f.y/J.y,e.zoomSpeed)),me(oe.y),J.copy(f)}function _t(t){e.enableZoom&&Fe(t),e.enablePan&&Xe(t)}function wt(t){e.enableZoom&&Fe(t),e.enableRotate&&Be(t)}function We(t){e.enabled!==!1&&(u.length===0&&(e.domElement.setPointerCapture(t.pointerId),e.domElement.addEventListener("pointermove",xe),e.domElement.addEventListener("pointerup",Te)),xt(t),t.pointerType==="touch"?Et(t):St(t))}function xe(t){e.enabled!==!1&&(t.pointerType==="touch"?Pt(t):kt(t))}function Te(t){Ke(t),u.length===0&&(e.domElement.releasePointerCapture(t.pointerId),e.domElement.removeEventListener("pointermove",xe),e.domElement.removeEventListener("pointerup",Te)),e.dispatchEvent(nt),a=o.NONE}function Ve(t){Ke(t)}function St(t){let l;switch(t.button){case 0:l=e.mouseButtons.LEFT;break;case 1:l=e.mouseButtons.MIDDLE;break;case 2:l=e.mouseButtons.RIGHT;break;default:l=-1}switch(l){case ue.DOLLY:if(e.enableZoom===!1)return;pt(t),a=o.DOLLY;break;case ue.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enablePan===!1)return;Ie(t),a=o.PAN}else{if(e.enableRotate===!1)return;ze(t),a=o.ROTATE}break;case ue.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(e.enableRotate===!1)return;ze(t),a=o.ROTATE}else{if(e.enablePan===!1)return;Ie(t),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&e.dispatchEvent(Le)}function kt(t){switch(a){case o.ROTATE:if(e.enableRotate===!1)return;mt(t);break;case o.DOLLY:if(e.enableZoom===!1)return;ht(t);break;case o.PAN:if(e.enablePan===!1)return;ft(t);break}}function He(t){e.enabled===!1||e.enableZoom===!1||a!==o.NONE||(t.preventDefault(),e.dispatchEvent(Le),bt(t),e.dispatchEvent(nt))}function Ue(t){e.enabled===!1||e.enablePan===!1||gt(t)}function Et(t){switch(Ge(t),u.length){case 1:switch(e.touches.ONE){case de.ROTATE:if(e.enableRotate===!1)return;Re(),a=o.TOUCH_ROTATE;break;case de.PAN:if(e.enablePan===!1)return;$e(),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(e.touches.TWO){case de.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;vt(),a=o.TOUCH_DOLLY_PAN;break;case de.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;yt(),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&e.dispatchEvent(Le)}function Pt(t){switch(Ge(t),a){case o.TOUCH_ROTATE:if(e.enableRotate===!1)return;Be(t),e.update();break;case o.TOUCH_PAN:if(e.enablePan===!1)return;Xe(t),e.update();break;case o.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;_t(t),e.update();break;case o.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;wt(t),e.update();break;default:a=o.NONE}}function Ze(t){e.enabled!==!1&&t.preventDefault()}function xt(t){u.push(t)}function Ke(t){delete ie[t.pointerId];for(let l=0;l<u.length;l++)if(u[l].pointerId==t.pointerId){u.splice(l,1);return}}function Ge(t){let l=ie[t.pointerId];l===void 0&&(l=new Y,ie[t.pointerId]=l),l.set(t.pageX,t.pageY)}function Me(t){const l=t.pointerId===u[0].pointerId?u[1]:u[0];return ie[l.pointerId]}e.domElement.addEventListener("contextmenu",Ze),e.domElement.addEventListener("pointerdown",We),e.domElement.addEventListener("pointercancel",Ve),e.domElement.addEventListener("wheel",He,{passive:!1}),this.update()}}let b,re,te,X,we,Se,le;function yo(){let r=customize3d.width,n=customize3d.height;b=new At,b.fog=new Nt(b.background,1,1e3),re=new Dt({canvas:customize3d,alpha:!0}),re.shadowMap.enabled=!0,re.toneMapping=jt,re.setSize(r,n),te=new zt(60,r/n,.001,1e3),te.position.set(3,1,3),te.lookAt(0,0,0),le=new vo(te,re.domElement),le.autoRotate=!0,le.enablePan=!1,le.maxDistance=5,le.minDistance=1,le.target.set(0,0,0),new It(60,60),new Rt({color:16777215,roughness:0,metalness:.9});const d=new et(16777215);new et(32763),we=new tt(d,3,3,.3,1,0),we.position.set(3,5,3),we.castShadow=!0,b.add(we),Se=new tt(d,3,3,.3,1,0),Se.position.set(-3,5,-3),Se.castShadow=!0,b.add(Se);let e=new $t(16777215,.1);b.add(e)}const fe=new he,_o=(r,n,d,e,o)=>{X&&b.remove(X),fe.load(r,a=>{X=a.scene,X.traverse(function(s){s.isMesh&&(s.material.roughness=1,s.material.metalness=0,s.material.transparent=!1,s.castShadow=!0,s.receiveShadow=!0)})},void 0,function(a){console.error(a)}),setTimeout(()=>{X&&(X.position.set(d,e,o),X.scale.set(n,n,n),b.add(X))},500)};let Ee,ke,st,Ae,lt;const wo=(r,n)=>{Ee=r,st=0,Ae=0,lt=0,r===1?ke=.6:r===2?ke=.23:(ke=.65,Ae=-.3),_o(n,ke,st,Ae,lt)};let F,W,R,$,A;new he;const Ne=(r,n,d,e,o)=>{F&&b.remove(F),fe.load(r,a=>{F=a.scene,F.traverse(function(s){s.isMesh&&(s.material.roughness=1,s.material.metalness=0,s.material.transparent=!1,s.castShadow=!0,s.receiveShadow=!0)})},void 0,function(a){console.error(a)}),setTimeout(()=>{F&&(F.position.set(d,e,o),F.scale.set(n,n,n),b.add(F))},500)};new he;const De=(r,n,d,e,o)=>{W&&b.remove(W),fe.load(r,a=>{W=a.scene,W.traverse(function(s){s.isMesh&&(s.material.roughness=1,s.material.metalness=0,s.material.transparent=!1,s.castShadow=!0,s.receiveShadow=!0)})},void 0,function(a){console.error(a)}),setTimeout(()=>{W&&(W.position.set(d,e,o),W.scale.set(n,n,n),b.add(W))},500)};new he;const rt=(r,n,d,e,o)=>{R&&b.remove(R),fe.load(r,a=>{R=a.scene,R.traverse(function(s){s.isMesh&&(s.material.roughness=1,s.material.metalness=0,s.material.transparent=!1,s.castShadow=!0,s.receiveShadow=!0)})},void 0,function(a){console.error(a)}),setTimeout(()=>{R&&(R.position.set(d,e,o),R.scale.set(n,n,n),b.add(R))},500)};new he;const it=(r,n,d,e,o)=>{$&&b.remove($),fe.load(r,a=>{$=a.scene,$.traverse(function(s){s.isMesh&&(s.material.roughness=1,s.material.metalness=0,s.material.transparent=!1,s.castShadow=!0,s.receiveShadow=!0)})},void 0,function(a){console.error(a)}),setTimeout(()=>{$&&($.position.set(d,e,o),$.scale.set(n,n,n),b.add($))},500)},So=(r,n)=>{r===1?A=.35:r===2?A=.12:A=.25,Ee===1?(Ne(n,A,-.95,.25,.25),De(n,A,-.3,.25,.93),b.remove(R),b.remove($)):Ee===2?(Ne(n,A,-.9,.05,.7),De(n,A,.9,.05,.7),rt(n,A,-.85,.03,-1.2),it(n,A,.85,.03,-1.2)):Ee===3&&(Ne(n,A,-.85,.35,.88),De(n,A,.87,.35,.91),rt(n,A,-.88,.35,-.61),it(n,A,1,.35,-.69))},ko=()=>{X&&b.remove(X)},Eo=()=>{F&&b.remove(F),W&&b.remove(W),R&&b.remove(R),$&&b.remove($)};function dt(){requestAnimationFrame(dt),Po(),te.updateWorldMatrix(),te.updateProjectionMatrix(),xo(),le.update()}function Po(){re.render(b,te)}function xo(){window.addEventListener("resize",function(){let r=customize3d.width,n=customize3d.height;te.aspect=r/n,re.setSize(r,n)})}const Pe=T({1:0,2:0,3:0,4:0,5:0,6:0}),v=(r,n,d)=>{Pe.value[r]=n;let e=n*d;Pe.value[r]=="Infinity"&&(Pe.value[r]=0,e=0),B.to(`.niddle${r}`,{rotate:e+150,duration:1}),e>=180?N(`.boardP${r}`).classList.add("warn"):N(`.boardP${r}`).classList.remove("warn")},To=(r,n,d)=>{n>1024&&window.addEventListener("mousemove",e=>{let o=-(e.pageX-d-N(`.dashBoard${r}`).offsetLeft),a=-(e.pageY-d-N(`.dashBoard${r}`).offsetTop);B.to(`.boardTitle${r}`,{rotateX:a/100,rotateY:o/100,x:o/150,y:a/150,duration:.5}),B.to(`.boardP${r}`,{rotateX:a/80,rotateY:o/80,x:o/80,y:a/80,duration:1.5}),B.to(`.boardSpan${r}`,{rotateX:a/200,rotateY:o/200,x:o/200,y:a/200,duration:1}),B.to(`.innerScale${r}`,{rotateX:a/210,rotateY:o/210,x:o/210,y:a/210,duration:2}),B.to(`.dot${r}`,{rotateX:a/200,rotateY:o/200,x:a/200,y:o/200,duration:.5}),B.to(`.numberScales${r}`,{rotateX:a/150,rotateY:o/150,x:o/200,y:a/200,duration:1}),B.to(".longScale",{rotateX:a/170,rotateY:o/170,x:o/230,y:a/230,duration:1.5}),B.to(".shortScale",{rotateX:a/170,rotateY:o/170,x:o/230,y:a/230,duration:1.5})})};const Mo={class:"board"},Co={__name:"dashBoardComponent",props:["units"],setup(r){const n=r;let d=null,e=null;ut(()=>{d=Number(window.getComputedStyle(N(".dashBoard"),null).getPropertyValue("width").split("px")[0])/2,Number(window.getComputedStyle(N(".innerScale"),null).getPropertyValue("width").split("px")[0])/2+1.5,e=Number(window.getComputedStyle(N(".numberScales"),null).getPropertyValue("width").split("px")[0])/2,D(),window.addEventListener("resize",()=>{d=Number(window.getComputedStyle(N(".dashBoard"),null).getPropertyValue("width").split("px")[0])/2,Number(window.getComputedStyle(N(".innerScale"),null).getPropertyValue("width").split("px")[0])/2+1.5,e=Number(window.getComputedStyle(N(".numberScales"),null).getPropertyValue("width").split("px")[0])/2,D()}),v(n.units.id,n.units.value,n.units.ratio)});const o=2*Math.PI/12,a=(i,_=d)=>Math.sin(i)*-_+"px",s=(i,_=d)=>Math.cos(i)*_+"px",p=i=>i*180/Math.PI,y=(i,_="background",h="#f00")=>Ot(i).forEach(S=>S.style[_]=h),M=(i,_,h,S,C,O=0)=>{B.to(i,{top:_,left:h,right:S,rotate:C,duration:O})},D=()=>{M(".longScale1",a(-o),s(-o),"auto",p(o)),M(".numberScale1",a(-o,e),s(-o,e),"auto",0);for(let i=0;i<=7;i++)M(`.longScale${i+2}`,a(o*i),s(o*i),"auto",p(-o*i)),M(`.numberScale${i+2}`,a(o*i,e),s(o*i,e),"auto",0),i<2&&(y(`.longScale${i+1}`),y(`.numberScale${i+1}`,"color"));for(let i=1;i<=5;i++)M(`.shortScale${i}`,a(-o/6*(6-i)),s(-o/6*(6-i)),"auto",p(o/6*(6-i)));for(let i=6;i<=47;i++)M(`.shortScale${i}`,a(o/6*(i-6)),s(o/6*(i-6)),"auto",p(-o/6*(i-6))),i<17&&y(`.shortScale${i-5}`,"background","#f008")};return(i,_)=>(E(),P("div",{class:I(`dashBoard dashBoard${n.units.id}`)},[(E(),P(V,null,G(47,h=>c("div",{class:I(["shortScale",`shortScale shortScale${h}`]),key:h},null,2)),64)),(E(),P(V,null,G(9,h=>c("div",{key:h,class:I(`longScale longScale${h}`)},null,2)),64)),c("div",{class:I(`numberScales numberScales${n.units.id}`)},[(E(),P(V,null,G(9,h=>c("p",{key:h,class:I(`numberScale numberScale${h}`)},H(n.units.scale[h]),3)),64))],2),c("div",{class:I(`innerScale innerScale${n.units.id}`)},[c("div",{class:I(`niddle niddle${n.units.id}`),id:"niddle"},[c("span",{class:I(`dot dot${n.units.id}`)},null,2)],2)],2),c("div",Mo,[c("h5",{class:I(`boardTitle boardTitle${n.units.id}`)},H(n.units.title),3),c("p",{class:I(`boardP boardP${n.units.id}`)},H(se(Pe)[n.units.id]),3),c("span",{class:I(`boardSpan boardSpan${n.units.id}`)},H(n.units.unit),3)])],2))}},pe=ct(Co,[["__scopeId","data-v-81a4cb0d"]]);const q=r=>(Mt("data-v-49a396b2"),r=r(),Ct(),r),Oo={class:"customize"},Lo=q(()=>c("canvas",{id:"customize3d",class:"customize3d"},null,-1)),Ao=q(()=>c("h2",{class:"customizeTitle"},"Customize",-1)),No={class:"paths"},Do=q(()=>c("p",null,"Select",-1)),jo={class:"customizeControl"},zo={class:"colorControls"},Io=["onClick"],Ro={class:"colorControls"},$o=["onClick"],Yo={class:"motorSelect selection"},Bo=q(()=>c("h3",null,"Motor",-1)),Xo={class:"motorControls funcControls"},Fo=["onClick"],Wo={class:"controllerSelect selection"},Vo=q(()=>c("h3",null,"Controller",-1)),Ho={class:"ControllerControls funcControls"},Uo=["onClick"],Zo={class:"flowControls"},Ko=q(()=>c("span",null,"undo",-1)),Go=[Ko],qo=q(()=>c("span",null,"next",-1)),Qo=[qo],Jo=q(()=>c("span",null,"Buy Now",-1)),ea={class:"dashBoards"},ta=q(()=>c("h3",null,"Drone Data",-1)),oa={__name:"CustomizeView",setup(r){Yt();let n=null,d=window.innerWidth;ut(()=>{n=Number(window.getComputedStyle(N(".dashBoard"),null).getPropertyValue("width").split("px")[0])/2,_(),window.addEventListener("resize",()=>{n=Number(window.getComputedStyle(N(".dashBoard"),null).getPropertyValue("width").split("px")[0])/2,d=window.innerWidth,_()}),yo(),dt()});const e=T({maxSpeed:{id:1,title:"Max Speed",unit:"km/h",value:0,ratio:1.5,scale:{1:160,2:140,3:120,4:100,5:80,6:60,7:40,8:20,9:0}},maxload:{id:2,title:"Max Load",unit:"kg",value:0,ratio:6,scale:{1:40,2:35,3:30,4:25,5:20,6:15,7:10,8:5,9:0}},rotatingSpeed:{id:3,title:"Rotating Speed",unit:"x1000 rpm",value:0,ratio:30,scale:{1:8,2:7,3:6,4:5,5:4,6:3,7:2,8:1,9:0}},totalWeight:{id:4,title:"Total Weight",unit:"kg",value:0,ratio:30,scale:{1:8,2:7,3:6,4:5,5:4,6:3,7:2,8:1,9:0}},accelerateTime:{id:5,title:"100km/h",unit:"s",value:0,ratio:30,scale:{1:8,2:7,3:6,4:5,5:4,6:3,7:2,8:1,9:0}},accelerate:{id:6,title:"Accelerate",unit:"m/s^2",value:0,ratio:10,scale:{1:24,2:21,3:18,4:15,5:12,6:9,7:6,8:3,9:0}}}),o=T({1:{id:1,text:"Body",show:!0,sBtn:!1,pBtn:!0},2:{id:2,text:"Propellor",show:!1,sBtn:!0,pBtn:!0},3:{id:3,text:"Motor",show:!1,sBtn:!0,pBtn:!0},4:{id:4,text:"Controller",show:!1,sBtn:!0,pBtn:!1}}),a=T(1),s=T(!1),p=T(!1),y=T(!1),M=()=>{if(y.value?y.value=!1:y.value=!0,y.value)for(let m=1;m<=6;m++)To(m,d,n)},D=()=>{switch(s.value=!1,o.value[a.value].show=!1,a.value){case 2:O.value=0,ko(),Eo(),v(4,0,e.value.totalWeight.ratio);case 3:f.value.kgm=0,f.value.rpm=0,v(1,0,e.value.maxSpeed.ratio),v(2,0,e.value.maxload.ratio),v(3,0,e.value.rotatingSpeed.ratio),v(5,0,e.value.accelerateTime.ratio),v(6,0,e.value.accelerate.ratio);case 4:u.value=0,v(1,h(f.value.rpm,f.value.kgm),e.value.maxSpeed.ratio),v(5,S(f.value.kgm),e.value.accelerateTime.ratio),v(6,C(S(f.value.kgm)),e.value.accelerate.ratio),p.value=!1}a.value--,o.value[a.value].show=!0},i=()=>{s.value?(o.value[a.value].show=!1,a.value++,s.value=!1,o.value[a.value].show=!0):alert("\u53EF\u4EE5\u5148\u9078\u55CE?")},_=()=>{d<575?(customize3d.width=d,customize3d.height=300):d<1023?(customize3d.width=400,customize3d.height=400):(customize3d.width=500,customize3d.height=500)},h=(m,L,j=1)=>parseInt(m*L*j/(e.value.totalWeight.value*1e3)*10),S=(m,L=1)=>(Math.pow(m*L,2)/40).toFixed(1),C=m=>(100/3.6/m).toFixed(1),O=T(0),Q=(m,L)=>{wo(m,L),e.value.totalWeight.value=(0+ye.value[`body0${m}`].weight)/1e3,O.value=ye.value[`body0${m}`].weight,v(4,e.value.totalWeight.value,e.value.totalWeight.ratio),s.value=!0},J=(m,L)=>{So(m,L);let j;m===1?j=_e.value[`propellor0${m}`].weight*2:j=_e.value[`propellor0${m}`].weight*4,e.value.totalWeight.value=(O.value+j)/1e3,v(4,e.value.totalWeight.value,e.value.totalWeight.ratio),s.value=!0},f=T({rpm:0,kgm:0}),oe=m=>{f.value.rpm=Oe.value[`motor0${m}`].rpm,f.value.kgm=Oe.value[`motor0${m}`].kgm,v(1,h(f.value.rpm,f.value.kgm),e.value.maxSpeed.ratio),v(2,f.value.kgm,e.value.maxload.ratio),v(3,f.value.rpm/1e3,e.value.rotatingSpeed.ratio),v(5,S(f.value.kgm),e.value.accelerateTime.ratio),v(6,C(S(f.value.kgm)),e.value.accelerate.ratio),s.value=!0},u=T(0),ie=m=>{u.value=ot.value[`controller0${m}`].kgmc,v(1,h(f.value.rpm,f.value.kgm,u.value),e.value.maxSpeed.ratio),v(5,S(f.value.kgm,u.value),e.value.accelerateTime.ratio),v(6,C(S(f.value.kgm,u.value)),e.value.accelerate.ratio),s.value=!0,a.value===4&&s.value&&(p.value=!0)};return(m,L)=>{const j=Ce("nav-component"),be=Ce("router-link"),ge=Ce("footer-component");return E(),P(V,null,[K(j,{custom:"#077AF9"}),c("section",Oo,[Lo,Ao,c("div",No,[Do,c("p",null,H(o.value[a.value].text),1)]),c("p",{class:"movToggle",onClick:M},"Move Active: "+H(y.value),1),c("div",jo,[(E(!0),P(V,null,G(se(ye),g=>ae((E(),P("div",{key:g.id,class:"bodySelect selection"},[c("h3",null,H(g.name),1),c("div",zo,[(E(!0),P(V,null,G(se(ye)[`body0${g.id}`].color,x=>(E(),P("div",{class:"colorControl",key:x,onClick:me=>Q(g.id,x)},null,8,Io))),128))])])),[[ne,o.value[1].show]])),128)),(E(!0),P(V,null,G(se(_e),g=>ae((E(),P("div",{key:g.id,class:"propellorSelect selection"},[c("h3",null,H(g.name),1),c("div",Ro,[(E(!0),P(V,null,G(se(_e)[`propellor0${g.id}`].color,x=>(E(),P("div",{class:"colorControl",key:x,onClick:me=>J(g.id,x)},null,8,$o))),128))])])),[[ne,o.value[2].show]])),128)),ae(c("div",Yo,[Bo,c("div",Xo,[(E(!0),P(V,null,G(se(Oe),g=>(E(),P("p",{class:"motorControl funcControl",key:g.id,onClick:x=>oe(g.id)},H(g.name),9,Fo))),128))])],512),[[ne,o.value[3].show]]),ae(c("div",Wo,[Vo,c("div",Ho,[(E(!0),P(V,null,G(se(ot),g=>(E(),P("p",{class:"ControllerControl funcControl",key:g.id,onClick:x=>ie(g.id)},H(g.name),9,Uo))),128))])],512),[[ne,o.value[4].show]]),c("div",Zo,[ae(c("div",{class:"undo","data-title":"undo",onClick:D},Go,512),[[ne,o.value[a.value].sBtn]]),ae(c("div",{class:"nextStep","data-title":"next",onClick:i},Qo,512),[[ne,o.value[a.value].pBtn]]),ae(K(be,{class:"nextStep buyBtn","data-title":"Buy Now",to:"/cart"},{default:Tt(()=>[Jo]),_:1},512),[[ne,p.value]])])]),c("div",ea,[ta,K(pe,{class:"dashBoard",units:e.value.maxSpeed},null,8,["units"]),K(pe,{class:"dashBoard",units:e.value.maxload},null,8,["units"]),K(pe,{class:"dashBoard",units:e.value.rotatingSpeed},null,8,["units"]),K(pe,{class:"dashBoard",units:e.value.totalWeight},null,8,["units"]),K(pe,{class:"dashBoard",units:e.value.accelerateTime},null,8,["units"]),K(pe,{class:"dashBoard",units:e.value.accelerate},null,8,["units"])])]),K(ge)],64)}}},ra=ct(oa,[["__scopeId","data-v-49a396b2"]]);export{ra as default};
