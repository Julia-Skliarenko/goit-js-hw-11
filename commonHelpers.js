import{S as p,i as y}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const h="43804338-e495c959d27dd2a0f1faf63f4",g="https://pixabay.com/api/";function L(n){const o=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${g}?${o}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})}function P(n){const o=document.querySelector(".gallery");o.innerHTML="";const t=n.map(({webformatURL:r,largeImageURL:s,tags:c,likes:u,views:f,comments:d,downloads:m})=>`<li class="gallery-item">
            <a href = "${s}">
        <img src="${r}" alt="${c}"/>
    <ul class="gallery-info">
        <li>Likes<p>${u}</p></li>
        <li>Views<p>${f}</p></li>
        <li>Comments<p>${d}</p></li>
        <li>Downloads<p>${m}</p></li>
    </ul>
    </a>
    </li>`).join("");o.insertAdjacentHTML("beforeend",t);const i={captionsData:"alt",captionDelay:250};new p(".gallery a",i).refresh()}const S=document.querySelector(".search-form"),a=document.querySelector(".search-images"),l=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{S.addEventListener("submit",function(n){n.preventDefault();const o=a.value.trim();if(o===""){alert("Please enter a search term!");return}l.style.display="block",L(o).then(t=>{t.hits.length===0&&y.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),P(t.hits)}).catch(t=>{throw console.error("Error fetching images:",t),t}).finally(()=>{l.style.display="none"}),a.value=""})});
//# sourceMappingURL=commonHelpers.js.map
