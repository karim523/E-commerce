import './polyfills.server.mjs';
import{a as e}from"./chunk-CBYSDMSX.mjs";import{y as n}from"./chunk-O3ZME34G.mjs";import{$ as o,W as s}from"./chunk-KJ5B5VUN.mjs";var d=(()=>{let t=class t{constructor(i){this._HttpClient=i}addProductToWishList(i){return this._HttpClient.post(`${e.baseUrl}/api/v1/wishlist`,{productId:i})}getProductToWishList(){return this._HttpClient.get(`${e.baseUrl}/api/v1/wishlist`)}deleteSpecificWishListItem(i){return this._HttpClient.delete(`${e.baseUrl}/api/v1/wishlist/${i}`)}};t.\u0275fac=function(a){return new(a||t)(o(n))},t.\u0275prov=s({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{d as a};
