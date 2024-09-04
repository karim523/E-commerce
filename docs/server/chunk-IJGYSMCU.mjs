import './polyfills.server.mjs';
import{a as j,b as C,c as k,d as G,h as M,i as R,j as $,k as B,m as H}from"./chunk-DUGZV646.mjs";import{a as O}from"./chunk-CBYSDMSX.mjs";import{h as A}from"./chunk-5UWVM5QH.mjs";import{j as D,y as I}from"./chunk-O3ZME34G.mjs";import{$ as P,Db as q,Eb as v,Nb as m,Ob as N,Ua as s,Ub as w,W as F,Xb as b,aa as S,ea as T,kb as c,mb as y,qb as g,ub as l,vb as r,wb as E}from"./chunk-KJ5B5VUN.mjs";import"./chunk-VVCT4QZE.mjs";var V=(()=>{let n=class n{constructor(i){this._HttpClient=i}checkOut(i,p){return this._HttpClient.post(`${O.baseUrl}/api/v1/orders/checkout-session/${i}?url=${O.urlServer}`,{shippingAddress:p})}};n.\u0275fac=function(p){return new(p||n)(P(I))},n.\u0275prov=F({token:n,factory:n.\u0275fac,providedIn:"root"});let e=n;return e})();var x=(e,n)=>({"is-valid":e,"is-invalid":n});function U(e,n){e&1&&(l(0,"P",13),m(1,"Details is required"),r())}function z(e,n){e&1&&(l(0,"P",13),m(1,"Details Should be more than or equal 3 chars"),r())}function J(e,n){if(e&1&&(l(0,"div",6),c(1,U,2,0,"P",13)(2,z,2,0),r()),e&2){let o,i=v();s(),g(1,(o=i.orders.get("details"))!=null&&o.getError("required")?1:(o=i.orders.get("details"))!=null&&o.getError("minlength")?2:-1)}}function K(e,n){e&1&&(l(0,"P",13),m(1,"Phone is required"),r())}function Q(e,n){e&1&&(l(0,"P",13),m(1,"accept only egypt phone numbers "),r())}function W(e,n){if(e&1&&(l(0,"div",6),c(1,K,2,0,"P",13)(2,Q,2,0),r()),e&2){let o,i=v();s(),g(1,(o=i.orders.get("phone"))!=null&&o.getError("required")?1:(o=i.orders.get("phone"))!=null&&o.getError("pattern")?2:-1)}}function X(e,n){e&1&&(l(0,"P",13),m(1,"city is required"),r())}function Y(e,n){if(e&1&&(l(0,"div",6),c(1,X,2,0,"P",13),r()),e&2){let o,i=v();s(),g(1,(o=i.orders.get("city"))!=null&&o.getError("required")?1:-1)}}function Z(e,n){if(e&1&&(l(0,"p",6),m(1),r()),e&2){let o=v();s(),N(o.msgError)}}var ue=(()=>{let n=class n{constructor(){this._FormBuilder=S(B),this._ActivatedRoute=S(A),this._OrdersService=S(V),this.msgError="",this.cartId="",this.orders=this._FormBuilder.group({details:[null,[C.required,C.minLength(3)]],phone:[null,[C.required,C.pattern(/^01[0125[0-9]{9}$/)]],city:[null,[C.required]]})}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:i=>{this.cartId=i.get("id")}})}ordersSubmit(){this.orders.valid&&this._OrdersService.checkOut(this.cartId,this.orders.value).subscribe({next(i){i.status==="success"&&window.open(i.session.url,"_self")},error:i=>{this.msgError=i.error.massage,console.log(i)}})}ngOnDestroy(){this.OrdersSub?.unsubscribe()}};n.\u0275fac=function(p){return new(p||n)},n.\u0275cmp=T({type:n,selectors:[["app-orders"]],standalone:!0,features:[w],decls:22,vars:17,consts:[[1,"bg-main-light","rounded-4","shadow","p-2","w-75","mx-auto","mb-5"],[1,"text-center"],[3,"ngSubmit","formGroup"],[1,"my-1"],["for","details"],["type","text","formControlName","details","id","details",1,"form-control",3,"ngClass"],[1,"alert","alert-danger","w-100"],["for","phone"],["type","tel","formControlName","phone","id","phone",1,"form-control",3,"ngClass"],[1,"my-1","mb-4"],["for","city"],["type","text","formControlName","city","id","city",1,"form-control",3,"ngClass"],[1,"btn","btn-outline-info","w-100"],[1,"m-0"]],template:function(p,t){if(p&1&&(l(0,"section",0)(1,"h1",1),m(2,"shippingAddress"),r(),l(3,"form",2),q("ngSubmit",function(){return t.ordersSubmit()}),l(4,"div",3)(5,"label",4),m(6,"Details"),r(),E(7,"input",5),c(8,J,3,1,"div",6),r(),l(9,"div",3)(10,"label",7),m(11,"Phone"),r(),E(12,"input",8),c(13,W,3,1,"div",6),r(),l(14,"div",9)(15,"label",10),m(16,"City"),r(),E(17,"input",11),c(18,Y,2,1,"div",6),r(),l(19,"button",12),m(20,"Pay"),r(),c(21,Z,2,1,"p",6),r()()),p&2){let d,_,a,f,u,h;s(3),y("formGroup",t.orders),s(4),y("ngClass",b(8,x,!((d=t.orders.get("details"))!=null&&d.errors)&&(((d=t.orders.get("details"))==null?null:d.touched)||((d=t.orders.get("details"))==null?null:d.dirty)),((d=t.orders.get("details"))==null?null:d.errors)&&(((d=t.orders.get("details"))==null?null:d.touched)||((d=t.orders.get("details"))==null?null:d.dirty)))),s(),g(8,(_=t.orders.get("details"))!=null&&_.errors&&((_=t.orders.get("details"))!=null&&_.touched||(_=t.orders.get("details"))!=null&&_.dirty)?8:-1),s(4),y("ngClass",b(11,x,!((a=t.orders.get("phone"))!=null&&a.errors)&&(((a=t.orders.get("phone"))==null?null:a.touched)||((a=t.orders.get("phone"))==null?null:a.dirty)),((a=t.orders.get("phone"))==null?null:a.errors)&&(((a=t.orders.get("phone"))==null?null:a.touched)||((a=t.orders.get("phone"))==null?null:a.dirty)))),s(),g(13,(f=t.orders.get("phone"))!=null&&f.errors&&((f=t.orders.get("phone"))!=null&&f.touched||(f=t.orders.get("phone"))!=null&&f.dirty)?13:-1),s(4),y("ngClass",b(14,x,!((u=t.orders.get("city"))!=null&&u.errors)&&(((u=t.orders.get("city"))==null?null:u.touched)||((u=t.orders.get("city"))==null?null:u.dirty)),((u=t.orders.get("city"))==null?null:u.errors)&&(((u=t.orders.get("city"))==null?null:u.touched)||((u=t.orders.get("city"))==null?null:u.dirty)))),s(),g(18,(h=t.orders.get("city"))!=null&&h.errors&&((h=t.orders.get("city"))!=null&&h.touched||(h=t.orders.get("city"))!=null&&h.dirty)?18:-1),s(3),g(21,t.msgError?21:-1)}},dependencies:[H,M,j,k,G,R,$,D]});let e=n;return e})();export{ue as OrdersComponent};
