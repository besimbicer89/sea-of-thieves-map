!function(e){var t={};function o(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(s,i,function(t){return e[t]}.bind(null,i));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){e.exports=o(5)},function(e,t){window.updateQueryStringParam=function(e,t){var o=[location.protocol,"//",location.host,location.pathname].join(""),s=document.location.search,i=e+"="+t,r="?"+i;if(s){var n=new RegExp("([?&])"+e+"[^&]*"),a=new RegExp("([?&])"+e+"=[^&;]+[&;]?");r=void 0===t||null==t||""==t?(r=s.replace(a,"$1")).replace(/[&;]$/,""):null!==s.match(n)?s.replace(n,"$1"+i):s+"&"+i}r="?"==r?"":r,hash=window.location.hash,window.history.replaceState({},"",o+r+hash)},window.websafe=function(e){return e.match(/[a-zA-Z0-9]+/g).join("-").toLowerCase()},window.angle=function(e,t,o,s){var i=s-t,r=o-e;return Math.atan2(i,r)*(180/Math.PI)},window.angle360=function(e,t,o,s){var i=angle(e,t,o,s);return i<0&&(i=360+i),i},window.getCardinalFromDeg=function(e){var t="North";return e>=0&&11.25>e?t="North":e>=11.25&&33.75>e?t="North by North East":e>=33.75&&56.25>e?t="North East":e>=56.25&&78.75>e?t="East by North East":e>=78.75&&101.25>e?t="East":e>=101.25&&123.75>e?t="East by South East":e>=123.75&&146.25>e?t="South East":e>=146.25&&168.75>e?t="South by South East":e>=168.75&&191.25>e?t="South":e>=191.25&&213.75>e?t="South by South West":e>=213.75&&236.25>e?t="South West":e>=236.25&&258.75>e?t="West by South West":e>=258.75&&281.25>e?t="West":e>=281.25&&303.75>e?t="West by North West":e>=303.75&&326.25>e?t="North West":e>=326.25&&348.75>e&&(t="North by North West"),t}},function(e,t,o){(function(e,s){var i;/*! https://mths.be/punycode v1.4.1 by @mathias */!function(r){"object"==typeof t&&t&&t.nodeType,"object"==typeof e&&e&&e.nodeType;var n="object"==typeof s&&s;n.global!==n&&n.window!==n&&n.self;var a,l=2147483647,c=36,u=1,d=26,p=38,h=700,g=72,f=128,k="-",m=/^xn--/,v=/[^\x20-\x7E]/,w=/[\x2E\u3002\uFF0E\uFF61]/g,L={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},y=c-u,S=Math.floor,b=String.fromCharCode;function C(e){throw new RangeError(L[e])}function T(e,t){for(var o=e.length,s=[];o--;)s[o]=t(e[o]);return s}function A(e,t){var o=e.split("@"),s="";return o.length>1&&(s=o[0]+"@",e=o[1]),s+T((e=e.replace(w,".")).split("."),t).join(".")}function O(e){for(var t,o,s=[],i=0,r=e.length;i<r;)(t=e.charCodeAt(i++))>=55296&&t<=56319&&i<r?56320==(64512&(o=e.charCodeAt(i++)))?s.push(((1023&t)<<10)+(1023&o)+65536):(s.push(t),i--):s.push(t);return s}function P(e){return T(e,function(e){var t="";return e>65535&&(t+=b((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+b(e)}).join("")}function j(e){return e-48<10?e-22:e-65<26?e-65:e-97<26?e-97:c}function x(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function F(e,t,o){var s=0;for(e=o?S(e/h):e>>1,e+=S(e/t);e>y*d>>1;s+=c)e=S(e/y);return S(s+(y+1)*e/(e+p))}function E(e){var t,o,s,i,r,n,a,p,h,m,v=[],w=e.length,L=0,y=f,b=g;for((o=e.lastIndexOf(k))<0&&(o=0),s=0;s<o;++s)e.charCodeAt(s)>=128&&C("not-basic"),v.push(e.charCodeAt(s));for(i=o>0?o+1:0;i<w;){for(r=L,n=1,a=c;i>=w&&C("invalid-input"),((p=j(e.charCodeAt(i++)))>=c||p>S((l-L)/n))&&C("overflow"),L+=p*n,!(p<(h=a<=b?u:a>=b+d?d:a-b));a+=c)n>S(l/(m=c-h))&&C("overflow"),n*=m;b=F(L-r,t=v.length+1,0==r),S(L/t)>l-y&&C("overflow"),y+=S(L/t),L%=t,v.splice(L++,0,y)}return P(v)}function M(e){var t,o,s,i,r,n,a,p,h,m,v,w,L,y,T,A=[];for(w=(e=O(e)).length,t=f,o=0,r=g,n=0;n<w;++n)(v=e[n])<128&&A.push(b(v));for(s=i=A.length,i&&A.push(k);s<w;){for(a=l,n=0;n<w;++n)(v=e[n])>=t&&v<a&&(a=v);for(a-t>S((l-o)/(L=s+1))&&C("overflow"),o+=(a-t)*L,t=a,n=0;n<w;++n)if((v=e[n])<t&&++o>l&&C("overflow"),v==t){for(p=o,h=c;!(p<(m=h<=r?u:h>=r+d?d:h-r));h+=c)T=p-m,y=c-m,A.push(b(x(m+T%y,0))),p=S(T/y);A.push(b(x(p,0))),r=F(o,L,s==i),o=0,++s}++o,++t}return A.join("")}a={version:"1.4.1",ucs2:{decode:O,encode:P},decode:E,encode:M,toASCII:function(e){return A(e,function(e){return v.test(e)?"xn--"+M(e):e})},toUnicode:function(e){return A(e,function(e){return m.test(e)?E(e.slice(4).toLowerCase()):e})}},void 0===(i=function(){return a}.call(t,o,t,e))||(e.exports=i)}()}).call(this,o(3)(e),o(4))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){var o;o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(o=window)}e.exports=o},function(e,t,o){"use strict";o.r(t);var s;let i;window.addEventListener("load",function(){function e(e){console.log("online offline update"),navigator.onLine?console.log("went online"):console.log(" went offline")}window.addEventListener("online",e),window.addEventListener("offline",e)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Service Worker Registered")}),s=!!navigator.onLine;var r=document.querySelector("#install-button");window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt - showme!!!"),e.preventDefault(),i=e,document.querySelector("#installBut").classList.add("showme")}),r.addEventListener("click",()=>{document.querySelector("#installBut").classList.remove("showme"),i.prompt(),i.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),i=null})}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")}),o(1),o(2);var n,a=[],l=[{loc:[-41.819753270587555,62.927539082707604],title:"Lone Cove",radius:3,pigs:!0,snakes:!0},{loc:[-69.94175507751075,50.54955884969927],title:"Cannon Cove",radius:4,chickens:!0,pigs:!0},{loc:[-67.62877065330183,65.30062001780092],title:"Rum Runner Isle",radius:2,pigs:!0},{loc:[-80.94564356372827,121.30273506665486],title:"The Crooked Masts",radius:3,chickens:!0,snakes:!0},{loc:[-29.006074941430732,18.117840198163094],title:"Sailor's Bounty",radius:4,chickens:!0,pigs:!0},{loc:[-21.065393452707312,42.86583042922642],title:"Smuggler's Bay",radius:4,chickens:!0,snakes:!0},{loc:[-22.940799321639105,57.487891142156535],title:"Salty Sands",radius:1.5,chickens:!0},{loc:[-28.629490743342114,69.55120761078706],title:"Picaroon Palms",radius:1.5,snakes:!0},{loc:[-28.19171579987219,88.62081716840055],title:"Scurvy Isley",radius:1.5},{loc:[-28.691820540241682,107.0555642878491],title:"Old Faithful Isle",radius:4,chickens:!0,pigs:!0},{loc:[-22.8781029334463,120.48941102991489],title:"Black Sand Atoll",radius:1.5,snakes:!0},{loc:[-21.566440856402263,136.5557290968507],title:"Marauder's Arch",radius:3,chickens:!0,pigs:!0},{loc:[-32.44278938865952,32.80535275921895],title:"Sandy Shallows",radius:1.5,snakes:!0},{loc:[-33.44299886939851,50.23934822463562],title:"Boulder Cay",radius:1.5,chickens:!0},{loc:[-45.00792099044309,24.432035940703415],title:"Keel Haul Fort",radius:2,isFortress:!0},{loc:[-48.25860180284481,43.931357643687285],title:"Sanctuary Outpost",radius:3,isOutpost:!0},{loc:[-56.135264556210544,57.616119333511065],title:"Lonely Isle",radius:1.5,snakes:!0},{loc:[-55.3851074456563,71.67579309594387],title:"Hidden Spring Keep",radius:2,isFortress:!0},{loc:[-41.13192595693288,114.67807920810932],title:"Blind Man's Lagoon",radius:1.5,pigs:!0},{loc:[-34.818103609768,126.55069260749704],title:"Shark Fin Camp",radius:1.5,isFortress:!0},{loc:[-42.195761396643945,137.43053681968217],title:"Plunderer's Plight",radius:2,pigs:!0},{loc:[-33.56895462527015,144.36651233641732],title:"Black Water Enclave",radius:1.5,chickens:!0},{loc:[-40.819360494201945,93.80847591354413],title:"Kraken's Watchtower",radius:2,isFortress:!0},{loc:[-54.197162299085946,105.7433527036019],title:"Dagger Tooth Outpost",radius:4,isOutpost:!0},{loc:[-52.32176952270034,125.36404020139321],title:"The Sunken Grove",radius:2,pigs:!0,snakes:!0},{loc:[-55.76110247916651,145.1163475274157],title:"Galleon's Grave Outpost",radius:3,isOutpost:!0},{loc:[-62.65918,114.48791],title:"Isle of Last Words",radius:2,pigs:!0,snakes:!0},{loc:[-67.69269774083621,130.11909434410913],title:"Skull Keep",radius:2,isFortress:!0},{loc:[-71.44348329360741,142.9912651229149],title:"Tri-Rock Isle",radius:2,chickens:!0},{loc:[-67.50237,151.430381],title:"Three Paces East Seapost",radius:1,seapost:!0},{loc:[-19.313035,27.037615],title:"The Spoils of Plenty Store",radius:1,seapost:!0},{loc:[-75.235017,64.342312],title:"The North Star Seapost",radius:1,seapost:!0},{loc:[-114.96965,94.435731],title:"Stephen's Spoils",radius:1,seapost:!0},{loc:[-128.328685,48.139087],title:"The Finest Trading Post",radius:1,seapost:!0},{loc:[-29.844282,120.967678],title:"The Wild Treasures Store",radius:1,seapost:!0},{loc:[-80.07029006498121,135.55539947884748],title:"Shiver Retreat",radius:2,pigs:!0},{loc:[-78.63248893641892,152.05177368081218],title:"Liar's Backbone",radius:2,snakes:!0},{loc:[-92.63542166676478,130.11909434410913],title:"Shark Tooth Key",radius:2,pigs:!0},{loc:[-92.19783001894149,144.99082563224394],title:"Kraken's Fall",radius:4,pigs:!0,snakes:!0},{loc:[-74.94438667929433,102.86928662127767],title:"Shipwreck Bay",radius:4,chickens:!0,pigs:!0},{loc:[-58.448248980419464,30.371595953863505],title:"Rapier Cay",radius:1,chickens:!0},{loc:[-66.31539345270731,15.993498563600905],title:"Crescent Isle",radius:3,pigs:!0,snakes:!0},{loc:[-75.94243588991247,31.746234927654953],title:"Golden Sand Outpost",radius:3,isOutpost:!0},{loc:[-81.88115349670785,16.993169376947787],title:"Sea Dog's Rest",radius:1.5,pigs:!0},{loc:[-81.6942164761939,60.23384927983136],title:"Twin Groves",radius:2,chickens:!0},{loc:[-91.6963112835838,48.48771722300551],title:"Wanderer's Refuge",radius:4,chickens:!0,snakes:!0},{loc:[-91.44625891339905,30.743560286098365],title:"Lagoon of Whispers",radius:2,chickens:!0,snakes:!0},{loc:[-97.13434807797746,16.305895692771806],title:"Mermaid's Hideaway",radius:3,chickens:!0,pigs:!0},{loc:[-105.13603701643558,36.36971243938428],title:"Sailor's Knot Stronghold",radius:2,isFortress:!0},{loc:[-103.69823588787327,72.10794401653528],title:"Fools Lagoon",radius:1.5,pigs:!0},{loc:[-100.84721297846644,83.52747464057205],title:"Castaway Isle",radius:1,snakes:!0},{loc:[-104.19511986188078,97.48786124216625],title:"Old Boot Fort",radius:2,isFortress:!0},{loc:[-117.31967471531044,51.7447330135501],title:"Plunder Valley",radius:4,chickens:!0,pigs:!0},{loc:[-115.8779065452535,69.80542248695795],title:"Chicken Isle",radius:2,chickens:!0,pigs:!0},{loc:[-115.25277561979163,85.05040239049788],title:"Snake Island",radius:3,pigs:!0,snakes:!0},{loc:[-116.75298510053062,106.67686315627111],title:"Crooks's Hollow",radius:3,chickens:!0,snakes:!0},{loc:[-114.69061602599248,122.1182928219427],title:"Barnacle Cay",radius:2,chickens:!0},{loc:[-126.31805123958326,134.36426028544201],title:"Ancient Spire Outpost",radius:2,isOutpost:!0},{loc:[-124.56687291042644,34.36631770202399],title:"Discovery Ridge",radius:4,chickens:!0,snakes:!0},{loc:[-137.44456997494095,45.05029951966879],title:"Old Salts Atoll",radius:2,chickens:!0},{loc:[-128.94278938865952,65.35611291577732],title:"Lost Gold Fort",radius:2,isFortress:!0},{loc:[-144.821114895391,60.10784114570619],title:"Shark Bait Cove",radius:4,chickens:!0,pigs:!0},{loc:[-148.3847146692707,73.99154401784801],title:"Lookout Point",radius:2,pigs:!0},{loc:[-152.51057877731904,84.98792296466371],title:"Booty Isle",radius:1.5,snakes:!0},{loc:[-134.88188667929433,82.4887459312965],title:"Plunder Outpost",radius:2,isOutpost:!0},{loc:[-126.75507990792053,95.36808708028451],title:"Paradise Spring",radius:2,pigs:!0},{loc:[-133.19392844017779,104.67752152957733],title:"Cutlass Cay",radius:1.5,snakes:!0},{loc:[-130.13078690541462,117.3608449739159],title:"The Crow's Nest Fortress",radius:2,isFortress:!0},{loc:[-143.50858871029862,113.17472344302583],title:"Mutineer Rock",radius:2,chickens:!0},{loc:[-143.75864108048336,128.48218277239994],title:"Devil's Ridge",radius:3,pigs:!0,snakes:!0},{loc:[-147.8845051885317,98.80445550116441],title:"Thieves' Haven",radius:4,chickens:!0,pigs:!0},{loc:[-78.938966,191.556523],title:"Scorched Pass",radius:2,forsaken:!0},{loc:[-87.003155,200.022485],title:"Brian's Bazaar",radius:1,forsaken:!0,seapost:!0},{loc:[-87.5329,177.748416],title:"Fetcher's Rest",radius:4,forsaken:!0,seapost:!1},{loc:[-96.568248,198.610248],title:"Cursewater Shores",radius:2,forsaken:!0,seapost:!1},{loc:[-104.69495,169.682274],title:"Cinder Islet",radius:2,forsaken:!0,seapost:!1},{loc:[-107.257986,185.614528],title:"Flintlock Peninsula",radius:4,forsaken:!0,seapost:!1},{loc:[-119.318876,201.609261],title:"Ruby's Fall",radius:3,forsaken:!0,seapost:!1},{loc:[-118.568719,165.308714],title:"The Forsaken Brink",radius:1.5,forsaken:!0,seapost:!1},{loc:[-127.003365,178.80427],title:"Marrow's Peak Outpost",radius:3,forsaken:!0,isOutpost:!0,seapost:!1},{loc:[-136.81792,198.36031],title:"Brimstone Rock",radius:1.5,forsaken:!0,seapost:!1},{loc:[-137.943156,212.605619],title:"Glowstone Cay",radius:1.5,forsaken:!0,seapost:!1},{loc:[-144.69457,179.491523],title:"Flame's End",radius:1.5,forsaken:!0,seapost:!1},{loc:[-147.193195,167.058118],title:"Roaring Traders",radius:1,forsaken:!0,seapost:!0},{loc:[-152.506808,204.045938],title:"Magma's Tide",radius:2,forsaken:!0,seapost:!1},{loc:[-157.382829,187.676328],title:"The Devil's Thirst",radius:3,forsaken:!0,seapost:!1},{loc:[-159.258222,167.432994],title:"Burning Sands",radius:1.5,forsaken:!0,seapost:!1},{loc:[-172.636024,175.305402],title:"Ashen Reaches",radius:3,forsaken:!0,seapost:!1}],c=[{loc:[-12.625,28.4375],title:"D2",isLarge:!0,desc:"Large (3rd out of the 4 offshore rocks counting from the east, at the back of the island, D2"},{loc:[-20.726562,132.023438],title:"Marauder's Arch",isLarge:!0,desc:"South top"},{loc:[-52.882812,69.21875],title:"Hidden Spring Keep",isLarge:!1,desc:" Very top, use the South West cannon"},{loc:[-140.34375,125.289063],title:"Devil's Ridge",isLarge:!1,desc:" North side underneath the ridge"},{loc:[-61,84.875],title:"N10",isLarge:!1,desc:"Underwater, uncharted island"},{loc:[-71.132812,100.97656],title:"Shipwreck Bay",isLarge:!0,desc:"Northern small island"},{loc:[-95.96875,14.945313],title:"Mermaid's Hideaway",isLarge:!1,desc:"Across from the Southern peak"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"},{loc:[-145.875,98.648438],title:"Thieves Haven",isLarge:!1,desc:"East rock in the water"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"}],u=s,d=!1,p=[],h=-1;console.log("-- detect isOnline: "+u);var g="";"localhost"!=location.hostname&&(g="https://cdn.chenzorama.com/"),function(){var e=L.GridLayer.prototype._initTile;L.GridLayer.include({_initTile:function(t){e.call(this,t);var o=this.getTileSize();t.style.width=o.x+1+"px",t.style.height=o.y+1+"px"}})}();var f=L.map("mapid",{maxZoom:7,minZoom:2,crs:L.CRS.Simple,attributionControl:!1,preferCanvas:!1}).setView([70,70],4),k=new L.LatLngBounds(f.unproject([0,25522],7),f.unproject([27444,0],7));f.setMaxBounds(k,{padding:[200,200]}),new L.Hash(f),L.tileLayer(g+"images/tiles_v2/{z}/{x}/{y}.png",{minZoom:2,maxZoom:7,bounds:k,noWrap:!0,tms:!1}).addTo(f);var m=new L.LayerGroup;f.addLayer(m);var v=L.icon({iconUrl:"/images/markers/xmarkthespot_marker.png",shadowUrl:"/images/markers/xmarkthespot_marker.png",iconSize:[40,52],shadowSize:[0,0],iconAnchor:[20,52],shadowAnchor:[0,0],popupAnchor:[0,0]}),w=L.icon({iconUrl:"/images/markers/compass.png",shadowUrl:"/images/markers/compass.png",iconSize:[50,48],shadowSize:[0,0],iconAnchor:[25,24],shadowAnchor:[0,0],popupAnchor:[0,0]});f.on("click",function(e){console.log("You clicked the map at "+e.latlng)});var y=new L.LayerGroup;f.addLayer(y);var S=new L.LayerGroup;a.push(["chickens",S]);var b=new L.LayerGroup;a.push(["snakes",b]);var C=new L.LayerGroup;a.push(["pigs",C]);var T=new L.Control.Search({position:"topright",layer:y,initial:!1,zoom:4,marker:!1});f.addControl(T);var A=L.icon({iconUrl:"/images/markers/chicken_marker.png",shadowUrl:"/images/markers/chicken_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[0,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),O=L.icon({iconUrl:"/images/markers/snake_marker.png",shadowUrl:"/images/markers/snake_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),P=L.icon({iconUrl:"/images/markers/pig_marker.png",shadowUrl:"/images/markers/pig_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,0],shadowAnchor:[0,0],popupAnchor:[0,0]});for(var j in L.islandCircle=L.Circle.extend({options:{name:"islandName",json:{}}}),l){var x=l[j].title,F=l[j].radius,E="islandClass "+window.websafe(x),M=new L.islandCircle(l[j].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:F,className:E,name:x,title:x,json:l[j]});if(y.addLayer(M),l[j].circle=M,M.on({mousedown:function(e){d?(e.target.classList.add("pig show"),f.dragging.disable(),f.on("mousemove",function(t){e.target.setLatLng(t.latlng)})):(e.target._path.classList.remove("pig","show"),G())},mouseup:function(e){d&&(f.removeEventListener("mousemove"),console.log(e.target.options.title),console.log("["+e.latlng.lat+", "+e.latlng.lng+"],"),f.dragging.enable())}}),l[j].chickens){var R=K(l[j].loc,.5*F,.6*F);L.marker(R,{icon:A,title:"chicken"}).addTo(S).setIcon(A)}if(l[j].snakes){var B=K(l[j].loc,.5*F,.6*F*-1);L.marker(B,{icon:O,title:"snake"}).addTo(b)}if(l[j].pigs){var W=K(l[j].loc,.5*F*-1,.6*F*-1);L.marker(W,{icon:P,title:"pigs"}).addTo(C)}}var _=new L.LayerGroup;a.push(["thrones",_]);var I=L.icon({iconUrl:"/images/markers/throne_marker.png",shadowUrl:"/images/markers/throne_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[15,30],shadowAnchor:[0,0],popupAnchor:[-20,-45]});for(var z in c){var N=c[z].loc;L.marker(N,{icon:I,title:"Skelton Throne"}).addTo(_).bindPopup(c[z].desc)}var U=L.popup({maxWidth:"500",minWidth:"120",className:"context_popup"});function G(){n&&f.removeLayer(n)}function D(e){var t=L.marker(e,{icon:v,draggable:!0}).addTo(f);t.on("dragend",function(e){console.log("marker dragend event"),Z()}),p.push(t)}function H(){f.getZoom()>=4&&$(".leaflet-grid-label").addClass("big")}function K(e,t,o){return[e[0]+t,e[1]+o]}function Z(){var e=function(){var e,t="";return p.forEach(function(o){e=o.getLatLng().lat+","+o.getLatLng().lng+";",t+=e}),t=window.encodeURIComponent(window.btoa(t))}();updateQueryStringParam("mkrs",e)}f.on("contextmenu",function(e){var t=e.latlng;U.setLatLng(e.latlng).setContent("<ul><li class='js-addMarker'>Add Marker</li><li class='js-clearMarkers'>Clear Markers</li><li class='js-closest' data-type='chickens'>Closest Chickens</li><li class='js-closest' data-type='pigs'>Closest Pigs</li><li class='js-closest' data-type='snakes'>Closest Snakes</li></ul>").openOn(f),$(".js-addMarker").click(function(){D(t),Z(),f.closePopup()}),$(".js-clearMarkers").click(function(){p.forEach(function(e){f.removeLayer(e)}),p=[],G(),Z(),f.closePopup()}),$(".js-closest").click(function(){var o=$(this).data("type"),s=function(e,t){var o,s,i=1e3,r="*None*";for(var n in l){var a=l[n].title,c=l[n].loc;(o=f.distance(c,e))<i&&l[n][t]&&(i=o,r=a,s=l[n])}var u=window.angle360(e.lat,e.lng,s.loc[0],s.loc[1]);return[s,t+" can be located to the "+window.getCardinalFromDeg(u)+" at "+r]}(e.latlng,o),i=s[0];$(".islandClass").removeClass("show pigs chickens snakes"),i.circle._path.classList.add(o,"show"),function(e){G(),n=L.marker(e,{icon:w,draggable:!1}).addTo(f),p.push(n)}(t),console.log(s[1]),f.closePopup()})}),L.simpleGraticule({interval:8.2,vinterval:7.7,showOriginLabel:!1,redraw:"move"}).addTo(f),f.on("zoomend",function(){H()}),f.on("move",function(){H()}),f.on("moveend",function(){H()}),window.dev={toggleOn:function(){console.log("dev"),$(".islandClass").addClass("show"),d=!0}},$(function(){$(".js-searchforisland").click(function(){"left"==$(this).data("dir")?--h<0&&(h=l.length-1):++h>=l.length&&(h=0);var e=l[h].loc;f.setView(e,6)}),$(".js-toggleMarkers").click(function(){!function(e,t){var o=function(e){for(var t=0;t<a.length;t++)if(a[t][0]==e)return a[t][1]}(e);t?f.addLayer(o):f.removeLayer(o)}($(this).attr("name"),$(this).is(":checked"))}),function(){var e=new URLSearchParams(window.location.search),t=window.decodeURIComponent(e.get("mkrs"));null!==e.get("mkrs")&&window.atob(t).split(";").forEach(function(e){""!==e&&D(e.split(","))})}()})}]);
//# sourceMappingURL=maps/sotm.js.map