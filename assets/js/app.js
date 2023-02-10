!function(){"use strict";var e,t={72:function(){var e=function e(t,s){if(t===s)return!0;if(t&&s&&"object"==typeof t&&"object"==typeof s){if(t.constructor!==s.constructor)return!1;var i,a,n;if(Array.isArray(t)){if((i=t.length)!=s.length)return!1;for(a=i;0!=a--;)if(!e(t[a],s[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if((i=(n=Object.keys(t)).length)!==Object.keys(s).length)return!1;for(a=i;0!=a--;)if(!Object.prototype.hasOwnProperty.call(s,n[a]))return!1;for(a=i;0!=a--;){var r=n[a];if(!e(t[r],s[r]))return!1}return!0}return t!=t&&s!=s};const t="__googleMapsScriptId";var s;!function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"}(s||(s={}));class i{constructor({apiKey:s,authReferrerPolicy:a,channel:n,client:r,id:o=t,language:c,libraries:l=[],mapIds:d,nonce:g,region:h,retries:u=3,url:m="https://maps.googleapis.com/maps/api/js",version:b}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=s,this.authReferrerPolicy=a,this.channel=n,this.client=r,this.id=o||t,this.language=c,this.libraries=l,this.mapIds=d,this.nonce=g,this.region=h,this.retries=u,this.url=m,this.version=b,i.instance){if(!e(this.options,i.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(i.instance.options)}`);return i.instance}i.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?s.FAILURE:this.done?s.SUCCESS:this.loading?s.LOADING:s.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+=`?callback=${this.CALLBACK}`,this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise(((e,t)=>{this.loadCallback((s=>{s?t(s.error):e(window.google)}))}))}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout((()=>{this.deleteScript(),this.setScript()}),e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach((e=>{e(this.onerrorEvent)})),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version)return console.warn("Google Maps already loaded outside @googlemaps/js-api-loader.This may result in undesirable behavior as options and script parameters may not match."),void this.callback();this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}}var a,n,r,o,c=new i({apiKey:"AIzaSyDftzKGDJN3V2RCwkJOtvIRBMYPHRUDnJM",version:"weekly"}),l=function(){var e=document.getElementById("slider-img1"),t=document.getElementById("slider-img2"),s=document.getElementById("slider-img3"),i=document.getElementById("slider-img4");window.matchMedia("(min-width: 1300px)").matches?(e&&e.setAttribute("src","assets/images/home/desktop/image-hero-paramour.jpg"),t&&t.setAttribute("src","assets/images/home/desktop/image-hero-seraph.jpg"),s&&s.setAttribute("src","assets/images/home/desktop/image-hero-federal.jpg"),i&&i.setAttribute("src","assets/images/home/desktop/image-hero-trinity.jpg")):window.matchMedia("(max-width: 1300px)").matches&&window.matchMedia("(min-width: 768px)").matches?(e&&e.setAttribute("src","assets/images/home/tablet/image-hero-paramour.jpg"),t&&t.setAttribute("src","assets/images/home/tablet/image-hero-seraph.jpg"),s&&s.setAttribute("src","assets/images/home/tablet/image-hero-federal.jpg"),i&&i.setAttribute("src","assets/images/home/tablet/image-hero-trinity.jpg")):window.matchMedia("(max-width: 768px)").matches&&(e&&e.setAttribute("src","assets/images/home/mobile/image-hero-paramour.jpg"),t&&t.setAttribute("src","assets/images/home/mobile/image-hero-seraph.jpg"),s&&s.setAttribute("src","assets/images/home/mobile/image-hero-federal.jpg"),i&&i.setAttribute("src","assets/images/home/mobile/image-hero-trinity.jpg"))},d=function(){var e=2,t=document.getElementById("slide-label1"),s=document.getElementById("slide-label2"),i=document.getElementById("slide-label3"),a=document.getElementById("slide-label4");t&&s&&i&&a&&(t.classList.add("background_black"),setInterval((function(){document.getElementById("radio"+e)&&(document.getElementById("radio"+e).checked=!0),1===e?t.classList.add("background_black"):t.classList.remove("background_black"),2===e?s.classList.toggle("background_black"):s.classList.remove("background_black"),3===e?i.classList.toggle("background_black"):i.classList.remove("background_black"),4===e?a.classList.toggle("background_black"):a.classList.remove("background_black"),++e>4&&(e=1)}),5e3))},g=function(){var e=document.getElementById("slide-label1"),t=document.getElementById("slide-label2"),s=document.getElementById("slide-label3"),i=document.getElementById("slide-label4");e&&e.addEventListener("click",(function(){e.classList.add("background_black"),t.classList.contains("background_black")&&t.classList.remove("background_black"),s.classList.contains("background_black")&&s.classList.remove("background_black"),i.classList.contains("background_black")&&i.classList.remove("background_black")})),t&&t.addEventListener("click",(function(){t.classList.add("background_black"),e.classList.contains("background_black")&&e.classList.remove("background_black"),s.classList.contains("background_black")&&s.classList.remove("background_black"),i.classList.contains("background_black")&&i.classList.remove("background_black")})),s&&s.addEventListener("click",(function(){s.classList.add("background_black"),e.classList.contains("background_black")&&e.classList.remove("background_black"),t.classList.contains("background_black")&&t.classList.remove("background_black"),i.classList.contains("background_black")&&i.classList.remove("background_black")})),i&&i.addEventListener("click",(function(){i.classList.add("background_black"),e.classList.contains("background_black")&&e.classList.remove("background_black"),t.classList.contains("background_black")&&t.classList.remove("background_black"),s.classList.contains("background_black")&&s.classList.remove("background_black")}))};a=document.querySelector(".burger"),n=document.querySelector(".nav-links"),r=document.querySelectorAll(".nav-links li"),o=document.querySelector(".dark-overlay-nav-mobile"),a.addEventListener("click",(function(){n.classList.toggle("nav-active"),o.classList.toggle("overlay-active"),r.forEach((function(e,t){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.3s ease forwards"})),a.classList.toggle("toggle")})),l(),d(),g(),c.load().then((function(){var e=document.getElementById("view-map-one"),t=document.getElementById("view-map-two");if(document.getElementById("map")){var s=new google.maps.Map(document.getElementById("map"),{zoom:5,center:{lat:34.618721,lng:-89.964546}}),i=new google.maps.InfoWindow({content:'<h3 class="dark-blue">Main Office</h3>'}),a=new google.maps.InfoWindow({content:'<h3 class="dark-blue">Office II</h3>'}),n=new google.maps.Marker({position:{lat:36.158578,lng:-86.77904},map:s}),r=new google.maps.Marker({position:{lat:32.32507,lng:-96.626604},map:s});n.addListener("click",(function(){i.open(s,n)})),r.addListener("click",(function(){a.open(s,r)})),n.addListener("click",(function(){s.setZoom(16),s.setCenter(n.getPosition())})),r.addListener("click",(function(){s.setZoom(16),s.setCenter(r.getPosition())})),e.addEventListener("click",(function(){s.setZoom(16),s.setCenter(n.getPosition())})),t.addEventListener("click",(function(){s.setZoom(16),s.setCenter(r.getPosition())}))}}))},659:function(){}},s={};function i(e){var a=s[e];if(void 0!==a)return a.exports;var n=s[e]={exports:{}};return t[e](n,n.exports,i),n.exports}i.m=t,e=[],i.O=function(t,s,a,n){if(!s){var r=1/0;for(d=0;d<e.length;d++){s=e[d][0],a=e[d][1],n=e[d][2];for(var o=!0,c=0;c<s.length;c++)(!1&n||r>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[c])}))?s.splice(c--,1):(o=!1,n<r&&(r=n));if(o){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,a,n]},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={449:0,261:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,r=s[0],o=s[1],c=s[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(c)var d=c(i)}for(t&&t(s);l<r.length;l++)n=r[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(d)},s=self.webpackChunkarch_studio=self.webpackChunkarch_studio||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}(),i.O(void 0,[261],(function(){return i(72)}));var a=i.O(void 0,[261],(function(){return i(659)}));a=i.O(a)}();
//# sourceMappingURL=app.js.map