!function(){function e(e){return e&&e.__esModule?e.default:e}function n(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequired7c6;t.register("jB4uu",(function(n,r){var i=t("bpxeT"),a=t("2TvXO"),s=t("8LhE9"),c=t("dBKQr"),o=t("3RRSf");e(i)(e(a).mark((function n(){var t,r,i,o,l,d,f,p,v,h,m,g;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=document.querySelector(".weekly_trends_list")){e.next=3;break}return e.abrupt("return");case 3:return(0,c.spinnerStart)(),e.next=6,(0,s.getFilms)(1);case 6:return r=e.sent,i=r.results.slice(0,3),e.next=10,(0,s.getGenres)();case 10:if(o=e.sent,l="",d=!0,f=!1,p=void 0,!(window.innerWidth<=768)){e.next=20;break}return v=i[0],e.next=17,u(v,o);case 17:l=e.sent,e.next=45;break;case 20:e.prev=20,h=i[Symbol.iterator]();case 22:if(d=(m=h.next()).done){e.next=31;break}return g=m.value,e.t0=l,e.next=27,u(g,o);case 27:l=e.t0+=e.sent;case 28:d=!0,e.next=22;break;case 31:e.next=37;break;case 33:e.prev=33,e.t1=e.catch(20),f=!0,p=e.t1;case 37:e.prev=37,e.prev=38,d||null==h.return||h.return();case 40:if(e.prev=40,!f){e.next=43;break}throw p;case 43:return e.finish(40);case 44:return e.finish(37);case 45:t.innerHTML=l,(0,c.spinnerStop)();case 47:case"end":return e.stop()}}),n,null,[[20,33,37,45],[38,,40,44]])})))();var l,u=(l=e(i)(e(a).mark((function n(t,r){var i,s,c,l,u,d;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i="https://image.tmdb.org/t/p/w600_and_h900_bestv2"+t.backdrop_path,s=t.original_title,c=t.release_date.split("-")[0],l=t.vote_average,u=t.title,d=r.filter((function(e){return t.genre_ids.slice(0,2).includes(e.id)})).map((function(e){return e.name})).join(", "),e.abrupt("return","<li class='weekly_trends_list_item list_item' data-film-id='".concat(t.id,"'>\n        <img class='movie-image' src='").concat(i,"' alt='").concat(u,"'>\n        <div class='weekly-trends_description'>\n          <div class='flex-wrap'>\n            <h4 class='film_title'>").concat(s,"</h4>\n            <div class='flex-wrap-rating'>\n            <h5 class='film_description'>").concat(d,"<span class='separator'>|</span>").concat(c,"</h5>\n            <div class='film_rating-wrapper'>\n              <div class='film_rating' style='--rating: ").concat(l/2,";' aria-label='Rating of this film is ").concat((0,o.round)(l/2,10)," out of 5.'></div>\n            </div>\n          </div>\n\n          </div>\n        </div>\n      </li>"));case 8:case"end":return e.stop()}}),n)}))),function(e,n){return l.apply(this,arguments)}),d=document.querySelector(".link_to_catalog");d&&d.addEventListener("click",(function(){window.location.href="https://www.themoviedb.org/movie/603692-john-wick-chapter-4"}))})),t.register("3RRSf",(function(e,t){function r(e,n){return Math.round(e*n)/n}n(e.exports,"round",(function(){return r})),n(e.exports,"getRandomNumber",(function(){return i})),n(e.exports,"renderStars",(function(){return a}));var i=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};function a(e,n){return e.innerHTML='\n    <div class="film_rating" style="--rating:'.concat(n/2,';" aria-label="Rating of this film is ').concat(Math.round(n/2),' out of 5."></div>\n')}}))}();
//# sourceMappingURL=trends.fc2fbd73.js.map
