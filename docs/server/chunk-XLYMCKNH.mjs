import './polyfills.server.mjs';
import{a as r}from"./chunk-CBYSDMSX.mjs";import{y as a}from"./chunk-O3ZME34G.mjs";import{$ as n,W as o}from"./chunk-KJ5B5VUN.mjs";var f=(()=>{let t=class t{constructor(e){this._HttpClient=e}getAllCategories(){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories`)}getSpecificCategory(e){return this._HttpClient.get(`${r.baseUrl}/api/v1/categories/${e}`)}};t.\u0275fac=function(c){return new(c||t)(n(a))},t.\u0275prov=o({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{f as a};
