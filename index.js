import{a as q,S as M,i as l}from"./assets/vendor-73qhTu8_.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const $="55739361-5e5874765423fdcdec273d0f7";async function f(n,o=1){return(await q.get("https://pixabay.com/api/",{params:{key:$,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const m=document.querySelector(".gallery"),y=document.querySelector(".loader"),g=document.querySelector(".load-more"),B=new M(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){const o=n.map(({largeImageURL:r,webformatURL:a,tags:e,likes:t,views:s,comments:S,downloads:v})=>`
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
          <p><b>Views</b><span>${s}</span></p>
          <p><b>Comments</b><span>${S}</span></p>
          <p><b>Downloads</b><span>${v}</span></p>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",o),B.refresh()}function P(){m.innerHTML=""}function L(){y.classList.remove("hidden")}function b(){y.classList.add("hidden")}function w(){g.classList.remove("hidden")}function u(){g.classList.add("hidden")}const d=document.querySelector(".form"),O=document.querySelector(".load-more");let i=1,c="",p=0;d.addEventListener("submit",async n=>{if(n.preventDefault(),c=d.querySelector("input").value.trim(),!!c){i=1,P(),u(),L();try{const r=await f(c,i);if(p=r.totalHits,r.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits),p>15&&w()}catch{l.error({message:"Something went wrong!"})}finally{b()}d.reset()}});O.addEventListener("click",async()=>{i+=1,u(),L();try{const n=await f(c,i);h(n.hits);const o=Math.ceil(p/15);i>=o?(u(),l.info({message:"We're sorry, but you've reached the end of search results."})):w();const r=document.querySelector(".gallery-item");if(r){const{height:a}=r.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}}catch{l.error({message:"Something went wrong!"})}finally{b()}});
//# sourceMappingURL=index.js.map
