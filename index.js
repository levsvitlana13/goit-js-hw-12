import{a as P,S as M,i as c}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const $="55739361-5e5874765423fdcdec273d0f7";async function p(s,o=1){return(await P.get("https://pixabay.com/api/",{params:{key:$,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),h=document.querySelector(".load-more"),B=new M(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(({largeImageURL:r,webformatURL:a,tags:e,likes:t,views:i,comments:S,downloads:q})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${a}"
            alt="${e}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b><span>${t}</span></p>
          <p><b>Views</b><span>${i}</span></p>
          <p><b>Comments</b><span>${S}</span></p>
          <p><b>Downloads</b><span>${q}</span></p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",o),B.refresh()}function E(){m.innerHTML=""}function b(){y.classList.remove("hidden")}function L(){y.classList.add("hidden")}function w(){h.classList.remove("hidden")}function d(){h.classList.add("hidden")}const u=document.querySelector(".form"),O=document.querySelector(".load-more");let n=1,l="",f=0;const v=15;u.addEventListener("submit",async s=>{if(s.preventDefault(),l=u.querySelector("input").value.trim(),!!l){n=1,E(),d(),b();try{const r=await p(l,n);if(f=r.totalHits,!r.hits.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}g(r.hits);const a=Math.ceil(f/v);n>=a?(c.info({message:"We're sorry, but you've reached the end of search results."}),d()):w()}catch{c.error({message:"Something went wrong!"})}finally{L()}u.reset()}});O.addEventListener("click",async()=>{n+=1,d(),b();try{const s=await p(l,n);g(s.hits);const o=Math.ceil(f/v);n>=o?(c.info({message:"We're sorry, but you've reached the end of search results."}),d()):w();const r=document.querySelector(".gallery-item");if(r){const{height:a}=r.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}}catch{c.error({message:"Something went wrong!"})}finally{L()}});
//# sourceMappingURL=index.js.map
