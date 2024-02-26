import{i as p,S as m}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="/goit-js-hw-11/assets/error-7115e62e.svg",c=document.querySelector(".gallery");function g(s){if(s.total===0)p.error({iconUrl:d,iconColor:"color: #fff",message:"<p>Sorry, there are no images matching</p> <p>your search query. Please try again!</p>",messageColor:"#fafafb",messageSize:"16px",position:"topRight",theme:"dark",backgroundColor:"#ef4040"});else{const o=s.hits.slice(0,9);c.innerHTML="",c.insertAdjacentHTML("beforeend",o.map(({webformatURL:l,largeImageURL:e,tags:t,likes:i,views:n,comments:u,downloads:f})=>`<div class="container">
                        <div class="card">
                            <a class="gallery-link" href="${e}">
                                <img
                                class="image-card"
                                src="${l}"
                                alt="${t}"
                                />
                            </a> 
                            <ul class="list">
                            <li class="list-item">
                                <p class="title">Likes</p>
                                <p class="value">${i}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Views</p>
                                <p class="value">${n}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Comments</p>
                                <p class="value">${u}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Downloads</p>
                                <p class="value">${f}</p>
                            </li>
                            </ul>
                        </div>
                    </div>`).join(""))}const r=new m(".gallery-link",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});r.refresh(),r.on("shown.simplelightbox",()=>{const o=document.querySelector(".sl-wrapper"),l=document.querySelector(".sl-counter"),e=document.querySelector(".sl-close"),t=document.querySelectorAll(".sl-wrapper .sl-navigation button");o.style.backgroundColor="rgba(46, 47, 66, 0.8)",l.style.color="#fff",l.style.fontFamily="Montserrat",l.style.top="16px",e.style.color="#fff",t.forEach(i=>i.style.color="#fff")})}const y="42574580-2c52a100a2b29f75d1ac631cf",h=document.querySelector(".isVisible"),a=h.classList;function b(s){a.toggle("isVisible",!1);const r="https://pixabay.com/api/?key="+y+"&q="+encodeURIComponent(s)+"&image_type=photo&orientation=horizontal&safesearch=true";fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return a.toggle("isVisible",!0),o.json()}).then(o=>{g(o)}).catch(o=>console.log(o))}const v=document.querySelector("button[data-start]"),S=document.querySelector("#data-search");v.addEventListener("click",()=>{const s=S.value.trim();s!==""&&b(s.trim())});
//# sourceMappingURL=commonHelpers.js.map
