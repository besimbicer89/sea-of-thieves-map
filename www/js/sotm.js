!function(e){var o={};function t(s){if(o[s])return o[s].exports;var a=o[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)t.d(s,a,function(o){return e[o]}.bind(null,a));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(2)},function(e,o){window.updateQueryStringParam=function(e,o){var t=[location.protocol,"//",location.host,location.pathname].join(""),s=document.location.search,a=e+"="+o,i="?"+a;if(s){var n=new RegExp("([?&])"+e+"[^&]*"),r=new RegExp("([?&])"+e+"=[^&;]+[&;]?");i=void 0===o||null==o||""==o?(i=s.replace(r,"$1")).replace(/[&;]$/,""):null!==s.match(n)?s.replace(n,"$1"+a):s+"&"+a}i="?"==i?"":i;var l=window.location.hash;window.history.replaceState({},"",t+i+l)},window.websafe=function(e){return e.match(/[a-zA-Z0-9]+/g).join("-").toLowerCase()},window.angle=function(e,o,t,s){var a=s-o,i=t-e;return Math.atan2(a,i)*(180/Math.PI)},window.angle360=function(e,o,t,s){var a=angle(e,o,t,s);return a<0&&(a=360+a),a},window.getCardinalFromDeg=function(e){var o="North";return e>=0&&11.25>e?o="North":e>=11.25&&33.75>e?o="North by North East":e>=33.75&&56.25>e?o="North East":e>=56.25&&78.75>e?o="East by North East":e>=78.75&&101.25>e?o="East":e>=101.25&&123.75>e?o="East by South East":e>=123.75&&146.25>e?o="South East":e>=146.25&&168.75>e?o="South by South East":e>=168.75&&191.25>e?o="South":e>=191.25&&213.75>e?o="South by South West":e>=213.75&&236.25>e?o="South West":e>=236.25&&258.75>e?o="West by South West":e>=258.75&&281.25>e?o="West":e>=281.25&&303.75>e?o="West by North West":e>=303.75&&326.25>e?o="North West":e>=326.25&&348.75>e&&(o="North by North West"),o},window.toggleFullScreen=function(){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}},function(e,o,t){"use strict";t.r(o);var s;let a;window.addEventListener("load",function(){function e(e){console.log("online offline update"),navigator.onLine?console.log("went online"):console.log(" went offline")}window.addEventListener("online",e),window.addEventListener("offline",e)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(){console.log("Service Worker Registered")}),s=!!navigator.onLine;var i=document.querySelector("#install-button");window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt - showme!!!"),e.preventDefault(),a=e,document.querySelector("#installBut").classList.add("showme")}),i.addEventListener("click",()=>{document.querySelector("#installBut").classList.remove("showme"),a.prompt(),a.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),a=null})}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")});var n=0,r=0,l=function(e,o){caches.open("sotm-v1.5").then(t=>t.addAll(e.slice(r,r+o))).catch(function(e){console.log("ERROR!?!!!"),console.log(e)}).then(function(){console.log("DONE CACHING: ",r,o,n);var t=0;r==n?(console.log("REALLY REALLY done caching"),t=100):(r+o>n?(o=n-r,r=n):r+=o,t=r/n*100,l(e,o)),console.log(t)}).catch(function(e){})},c=(t(1),[]),d=[{loc:[-41.819753270587555,62.927539082707604],title:"Lone Cove",radius:3,pigs:!0,snakes:!0},{loc:[-69.94175507751075,50.54955884969927],title:"Cannon Cove",radius:4,chickens:!0,pigs:!0},{loc:[-67.62877065330183,65.30062001780092],title:"Rum Runner Isle",radius:2,pigs:!0},{loc:[-80.94564356372827,121.30273506665486],title:"The Crooked Masts",radius:3,chickens:!0,snakes:!0},{loc:[-29.006074941430732,18.117840198163094],title:"Sailor's Bounty",radius:4,chickens:!0,pigs:!0},{loc:[-21.065393452707312,42.86583042922642],title:"Smuggler's Bay",radius:4,chickens:!0,snakes:!0},{loc:[-22.940799321639105,57.487891142156535],title:"Salty Sands",radius:1.5,chickens:!0},{loc:[-28.629490743342114,69.55120761078706],title:"Picaroon Palms",radius:1.5,snakes:!0},{loc:[-28.19171579987219,88.62081716840055],title:"Scurvy Isley",radius:1.5},{loc:[-28.691820540241682,107.0555642878491],title:"Old Faithful Isle",radius:4,chickens:!0,pigs:!0},{loc:[-22.8781029334463,120.48941102991489],title:"Black Sand Atoll",radius:1.5,snakes:!0},{loc:[-21.566440856402263,136.5557290968507],title:"Marauder's Arch",radius:3,chickens:!0,pigs:!0},{loc:[-32.44278938865952,32.80535275921895],title:"Sandy Shallows",radius:1.5,snakes:!0},{loc:[-33.44299886939851,50.23934822463562],title:"Boulder Cay",radius:1.5,chickens:!0},{loc:[-45.00792099044309,24.432035940703415],title:"Keel Haul Fort",radius:2,isFortress:!0},{loc:[-48.25860180284481,43.931357643687285],title:"Sanctuary Outpost",radius:3,outpost:!0},{loc:[-56.135264556210544,57.616119333511065],title:"Lonely Isle",radius:1.5,snakes:!0},{loc:[-55.3851074456563,71.67579309594387],title:"Hidden Spring Keep",radius:2,isFortress:!0},{loc:[-41.13192595693288,114.67807920810932],title:"Blind Man's Lagoon",radius:1.5,pigs:!0},{loc:[-34.818103609768,126.55069260749704],title:"Shark Fin Camp",radius:1.5,isFortress:!0},{loc:[-42.195761396643945,137.43053681968217],title:"Plunderer's Plight",radius:2,pigs:!0},{loc:[-33.56895462527015,144.36651233641732],title:"Black Water Enclave",radius:1.5,chickens:!0},{loc:[-40.819360494201945,93.80847591354413],title:"Kraken's Watchtower",radius:2,isFortress:!0},{loc:[-54.197162299085946,105.7433527036019],title:"Dagger Tooth Outpost",radius:4,outpost:!0},{loc:[-52.32176952270034,125.36404020139321],title:"The Sunken Grove",radius:2,pigs:!0,snakes:!0},{loc:[-55.76110247916651,145.1163475274157],title:"Galleon's Grave Outpost",radius:3,outpost:!0},{loc:[-64.51072835956577,117.43038960965997],title:"Isle of Last Words",radius:1,pigs:!0,snakes:!0},{loc:[-67.69269774083621,130.11909434410913],title:"Skull Keep",radius:2,isFortress:!0},{loc:[-71.44348329360741,142.9912651229149],title:"Tri-Rock Isle",radius:2,chickens:!0},{loc:[-67.50237,151.430381],title:"Three Paces East isSeapost",radius:1,isSeapost:!0},{loc:[-19.313035,27.037615],title:"The Spoils of Plenty Store",radius:1,isSeapost:!0},{loc:[-75.235017,64.342312],title:"The North Star isSeapost",radius:1,isSeapost:!0},{loc:[-114.96965,94.435731],title:"Stephen's Spoils",radius:1,isSeapost:!0},{loc:[-128.328685,48.139087],title:"The Finest Trading Post",radius:1,isSeapost:!0},{loc:[-29.844282,120.967678],title:"The Wild Treasures Store",radius:1,isSeapost:!0},{loc:[-80.07029006498121,135.55539947884748],title:"Shiver Retreat",radius:2,pigs:!0},{loc:[-78.63248893641892,152.05177368081218],title:"Liar's Backbone",radius:2,snakes:!0},{loc:[-92.63542166676478,130.11909434410913],title:"Shark Tooth Key",radius:2,pigs:!0},{loc:[-92.19783001894149,144.99082563224394],title:"Kraken's Fall",radius:4,pigs:!0,snakes:!0},{loc:[-74.94438667929433,102.86928662127767],title:"Shipwreck Bay",radius:4,chickens:!0,pigs:!0},{loc:[-58.448248980419464,30.371595953863505],title:"Rapier Cay",radius:1,chickens:!0},{loc:[-66.31539345270731,15.993498563600905],title:"Crescent Isle",radius:3,pigs:!0,snakes:!0},{loc:[-75.94243588991247,31.746234927654953],title:"Golden Sand Outpost",radius:3,outpost:!0},{loc:[-81.88115349670785,16.993169376947787],title:"Sea Dog's Rest",radius:1.5,pigs:!0},{loc:[-81.6942164761939,60.23384927983136],title:"Twin Groves",radius:2,chickens:!0},{loc:[-91.6963112835838,48.48771722300551],title:"Wanderer's Refuge",radius:4,chickens:!0,snakes:!0},{loc:[-91.44625891339905,30.743560286098365],title:"Lagoon of Whispers",radius:2,chickens:!0,snakes:!0},{loc:[-97.13434807797746,16.305895692771806],title:"Mermaid's Hideaway",radius:3,chickens:!0,pigs:!0},{loc:[-105.13603701643558,36.36971243938428],title:"Sailor's Knot Stronghold",radius:2,isFortress:!0},{loc:[-103.69823588787327,72.10794401653528],title:"Fools Lagoon",radius:1.5,pigs:!0},{loc:[-100.84721297846644,83.52747464057205],title:"Castaway Isle",radius:1,snakes:!0},{loc:[-104.19511986188078,97.48786124216625],title:"Old Boot Fort",radius:2,isFortress:!0},{loc:[-117.31967471531044,51.7447330135501],title:"Plunder Valley",radius:4,chickens:!0,pigs:!0},{loc:[-115.8779065452535,69.80542248695795],title:"Chicken Isle",radius:2,chickens:!0,pigs:!0},{loc:[-115.25277561979163,85.05040239049788],title:"Snake Island",radius:3,pigs:!0,snakes:!0},{loc:[-116.75298510053062,106.67686315627111],title:"Crooks's Hollow",radius:3,chickens:!0,snakes:!0},{loc:[-114.69061602599248,122.1182928219427],title:"Barnacle Cay",radius:2,chickens:!0},{loc:[-126.31805123958326,134.36426028544201],title:"Ancient Spire Outpost",radius:2,outpost:!0},{loc:[-124.56687291042644,34.36631770202399],title:"Discovery Ridge",radius:4,chickens:!0,snakes:!0},{loc:[-137.44456997494095,45.05029951966879],title:"Old Salts Atoll",radius:2,chickens:!0},{loc:[-128.94278938865952,65.35611291577732],title:"Lost Gold Fort",radius:2,isFortress:!0},{loc:[-144.821114895391,60.10784114570619],title:"Shark Bait Cove",radius:4,chickens:!0,pigs:!0},{loc:[-148.3847146692707,73.99154401784801],title:"Lookout Point",radius:2,pigs:!0},{loc:[-152.51057877731904,84.98792296466371],title:"Booty Isle",radius:1.5,snakes:!0},{loc:[-134.88188667929433,82.4887459312965],title:"Plunder Outpost",radius:2,outpost:!0},{loc:[-126.75507990792053,95.36808708028451],title:"Paradise Spring",radius:2,pigs:!0},{loc:[-133.19392844017779,104.67752152957733],title:"Cutlass Cay",radius:1.5,snakes:!0},{loc:[-130.13078690541462,117.3608449739159],title:"The Crow's Nest Fortress",radius:2,isFortress:!0},{loc:[-143.50858871029862,113.17472344302583],title:"Mutineer Rock",radius:2,chickens:!0},{loc:[-143.75864108048336,128.48218277239994],title:"Devil's Ridge",radius:3,pigs:!0,snakes:!0},{loc:[-147.8845051885317,98.80445550116441],title:"Thieves' Haven",radius:4,chickens:!0,pigs:!0},{loc:[-78.938966,191.556523],title:"Scorched Pass",radius:2,forsaken:!0},{loc:[-87.003155,200.022485],title:"Brian's Bazaar",radius:1,forsaken:!0,isSeapost:!0},{loc:[-87.5329,177.748416],title:"Fetcher's Rest",radius:4,forsaken:!0,isSeapost:!1},{loc:[-96.568248,198.610248],title:"Cursewater Shores",radius:2,forsaken:!0,isSeapost:!1},{loc:[-104.69495,169.682274],title:"Cinder Islet",radius:2,forsaken:!0,isSeapost:!1},{loc:[-107.257986,185.614528],title:"Flintlock Peninsula",radius:4,forsaken:!0,isSeapost:!1},{loc:[-119.318876,201.609261],title:"Ruby's Fall",radius:3,forsaken:!0,isSeapost:!1},{loc:[-118.568719,165.308714],title:"The Forsaken Brink",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-127.003365,178.80427],title:"Marrow's Peak Outpost",radius:3,forsaken:!0,outpost:!0,isSeapost:!1},{loc:[-136.81792,198.36031],title:"Brimstone Rock",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-137.943156,212.605619],title:"Glowstone Cay",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-144.69457,179.491523],title:"Flame's End",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-147.193195,167.058118],title:"Roaring Traders",radius:1,forsaken:!0,isSeapost:!0},{loc:[-152.506808,204.045938],title:"Magma's Tide",radius:2,forsaken:!0,isSeapost:!1},{loc:[-157.382829,187.676328],title:"The Devil's Thirst",radius:3,forsaken:!0,isSeapost:!1},{loc:[-159.258222,167.432994],title:"Burning Sands",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-172.636024,175.305402],title:"Ashen Reaches",radius:3,forsaken:!0,isSeapost:!1}];d.forEach(function(e){e.searchData="island|"+e.title});var u=[{loc:[-16.1005,35.278949],title:"D3",isLarge:!0,desc:"Large (3rd out of the 4 offshore rocks counting from the east, at the back of the island, D2"},{loc:[-22.745271,135.124285],title:"Marauder's Arch",isLarge:!0,desc:"South top"},{loc:[-54.988041,71.873989],title:"Hidden Spring Keep",isLarge:!1,desc:" Very top, use the South West cannon"},{loc:[-142.478323,128.428828],title:"Devil's Ridge",isLarge:!1,desc:" North side underneath the ridge"},{loc:[-64.763573,86.934257],title:"K9",isLarge:!1,desc:"Underwater, uncharted island"},{loc:[-73.23633,103.936164],title:"Shipwreck Bay",isLarge:!0,desc:"Northern small island"},{loc:[-70.532986,51.038615],title:"Cannon Cove",isLarge:!0,desc:"Northern small island"},{loc:[-98.065754,17.249381],title:"Mermaid's Hideaway",isLarge:!1,desc:"Across from the Southern peak"},{loc:[-133.460937,80.585938],title:"Plunder Outpost",isLarge:!0,desc:"South top"},{loc:[-148.01744,101.459982],title:"Thieves Haven",isLarge:!1,desc:"East rock in the water"},{loc:[-135.604944,83.10854],title:"Plunder Outpost",isLarge:!0,desc:"South top"}],p=[{loc:[-19.29761,43.108748],title:"Smugglers Bay"},{loc:[-22.235517,136.749201],title:"Marauder's Arch"},{loc:[-70.501164,50.554064],title:"Cannon Cove"},{loc:[-80.548623,120.702367],title:"The Crooked Masts"},{loc:[-90.954813,145.288321],title:"Kraken's Fall"},{loc:[-85.642033,179.030255],title:"Fetcher's Rest"},{loc:[-96.767313,15.671325],title:"Mermaid's Hideaway"},{loc:[-118.127325,52.124172],title:"Plunder Valley"},{loc:[-117.744397,107.006777],title:"Crook's Hollow"},{loc:[-119.517574,201.600493],title:"Crook's Hollow"},{loc:[-143.071842,128.265031],title:"Devil's Ridge"},{loc:[-156.431205,187.968065],title:"The Devil's Thirst"}],h=[{loc:[-42.471588,61.804962],title:"Lone Cove - Deadshot Charlotte"},{loc:[-73.784149,103.488647],title:"Shipwreck Bay - Grogsoaked Ed"},{loc:[-92.504761,147.521606],title:"Kraken's Fall - Lootin Penelope"},{loc:[-88.219971,176.605042],title:"Fletcher's Rest - Walter the Feared"},{loc:[-119.66217,200.650238],title:"Ruby's Fall - Burnin' Tony"},{loc:[-143.671936,128.255554],title:"Devil's Ridge - Martha the Fierce"},{loc:[-116.560669,106.010834],title:"Crook's Hollow - Wild Henry"},{loc:[-96.860016,16.258972],title:"Mermaid's Hideaway - Five Paces Frank"}];h.forEach(function(e){e.searchData="cargorun|"+e.title});var g,m=s,k=!1,f=[],w=-1;console.log("-- detect isOnline: "+m);var S="";"localhost"!=location.hostname&&(S="https://cdn.chenzorama.com/"),function(){var e=L.GridLayer.prototype._initTile;L.GridLayer.include({_initTile:function(o){e.call(this,o);var t=this.getTileSize();o.style.width=t.x+1+"px",o.style.height=t.y+1+"px"}})}();var v=L.map("mapid",{maxZoom:7,minZoom:2,crs:L.CRS.Simple,attributionControl:!1,preferCanvas:!1,maxBoundsViscosity:1}).setView([70,70],4),y=new L.LatLngBounds(v.unproject([0,25522],7),v.unproject([27444,0],7));v.setMaxBounds(y,{padding:[600,600]}),new L.Hash(v),L.tileLayer(S+"images/tiles/v2.2/{z}/{x}/{y}.png",{minZoom:2,maxZoom:7,bounds:y,noWrap:!0,tms:!1}).addTo(v);var C=new L.LayerGroup;v.addLayer(C);var b=L.icon({iconUrl:"/images/markers/xmarkthespot_marker.png",shadowUrl:"/images/markers/xmarkthespot_marker.png",iconSize:[40,52],shadowSize:[0,0],iconAnchor:[20,52],shadowAnchor:[0,0],popupAnchor:[0,0]}),F=(L.icon({iconUrl:"/images/markers/compass.png",shadowUrl:"/images/markers/compass.png",iconSize:[50,48],shadowSize:[0,0],iconAnchor:[25,24],shadowAnchor:[0,0],popupAnchor:[0,0]}),L.icon({iconUrl:"/images/markers/boat_marker.png",shadowUrl:"/images/markers/boat_marker.png",iconSize:[50,59],shadowSize:[0,0],iconAnchor:[25,29],shadowAnchor:[0,0],popupAnchor:[0,0]}));v.on("click",function(e){console.log("You clicked the map at "+e.latlng)});var A=new L.LayerGroup;v.addLayer(A);var R=new L.LayerGroup;v.addLayer(R),c.push(["chickens",R]);var E=new L.LayerGroup;v.addLayer(E),c.push(["snakes",E]);var T=new L.LayerGroup;v.addLayer(T),c.push(["pigs",T]);var O=L.icon({iconUrl:"/images/markers/chicken_marker.png",shadowUrl:"/images/markers/chicken_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[0,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),P=L.icon({iconUrl:"/images/markers/snake_marker.png",shadowUrl:"/images/markers/snake_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),_=L.icon({iconUrl:"/images/markers/pig_marker.png",shadowUrl:"/images/markers/pig_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,0],shadowAnchor:[0,0],popupAnchor:[0,0]});L.islandCircle=L.Circle.extend({options:{name:"islandName",json:{}}});var z=[];for(var j in d){var M=d[j].title,B=d[j].radius,U="islandClass "+window.websafe(M),x=new L.islandCircle(d[j].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:B,className:U,name:M,title:M,json:d[j]});if(A.addLayer(x),z[j]=x,d[j].circle=x,x.on({mousedown:function(e){k?(e.target.classList.add("pig show"),v.dragging.disable(),v.on("mousemove",function(o){e.target.setLatLng(o.latlng)})):(e.target._path.classList.remove("pig","show"),se(),ie())},mouseup:function(e){k&&(v.removeEventListener("mousemove"),console.log(e.target.options.title),console.log("["+e.latlng.lat+", "+e.latlng.lng+"],"),v.dragging.enable())}}),d[j].chickens){var W=re(d[j].loc,.5*B,.6*B);(N=L.marker(W,{icon:O,title:"chicken",opacity:0}).addTo(R)).setIcon(O)}if(d[j].snakes)var D=re(d[j].loc,.5*B,.6*B*-1),N=L.marker(D,{icon:P,title:"snake",opacity:0}).addTo(E);if(d[j].pigs){var G=re(d[j].loc,.5*B*-1,.6*B*-1);N=L.marker(G,{icon:_,title:"pigs",opacity:0}).addTo(T)}}var H=new L.LayerGroup;c.push(["beacons",H]),v.addLayer(H);var I=L.icon({iconUrl:"/images/markers/beacon_marker.png",shadowUrl:"/images/markers/beacon_marker.png",iconSize:[31,40],shadowSize:[0,0],iconAnchor:[15,40],shadowAnchor:[0,0],popupAnchor:[-20,-45]});for(var K in p){var q=p[K].loc;N=L.marker(q,{icon:I,title:"Beacon",opacity:0}).addTo(H)}var V=new L.LayerGroup;c.push(["cargoruns",V]);var Z=L.icon({iconUrl:"/images/markers/crate_marker.png",shadowUrl:"/images/markers/crate_marker.png",iconSize:[31,40],shadowSize:[0,0],iconAnchor:[15,40],shadowAnchor:[0,0],popupAnchor:[0,-45]}),Y=[];for(var K in h)q=h[K].loc,N=L.marker(q,{icon:Z,title:"Cargo Run",name:h[K].title,opacity:0}).addTo(V).bindPopup(h[K].title),Y[K]=N;var Q=new L.LayerGroup;c.push(["thrones",Q]),v.addLayer(Q);var J=L.icon({iconUrl:"/images/markers/throne_marker.png",shadowUrl:"/images/markers/throne_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[15,30],shadowAnchor:[0,0],popupAnchor:[-20,-45]});for(var K in u)q=u[K].loc,N=L.marker(q,{icon:J,title:"Skelton Throne",opacity:0}).addTo(Q).bindPopup(u[K].desc);var X,ee=L.layerGroup([V,A]),oe=new L.Control.Search({position:"topright",layer:ee,propertyName:"name",initial:!1,zoom:6,marker:!1,buildTip:function(e,o){return'<a href="#" class="'+function(e){var o="island";return Y.forEach(function(t){t.getLatLng().lat==e.lat&&t.getLatLng().lng==e.lng&&(console.log("Cargo Run Destination Found"),o="cargo")}),o}(o)+'">'+e+"</a>"}});v.addControl(oe),oe.on("search:locationfound",function(e){console.log(e),void 0!==(X=e.layer).setOpacity&&(X.setOpacity(1),X.openPopup())}),oe.on("search:collapsed",function(e){void 0!==X.setOpacity&&(X.setOpacity(0),X.closePopup())});var te=L.popup({maxWidth:"500",minWidth:"120",className:"context_popup"});function se(){g&&v.removeLayer(g)}function ae(e){var o=L.marker(e,{icon:b,draggable:!0}).addTo(v);o.on("dragend",function(e){console.log("marker dragend event"),le()}),f.push(o)}function ie(){$(".floating_dialog").removeClass("show")}function ne(){v.getZoom()>=4&&$(".leaflet-grid-label").addClass("big")}function re(e,o,t){return[e[0]+o,e[1]+t]}function le(){var e=function(){var e,o="";return f.forEach(function(t){e=t.getLatLng().lat+","+t.getLatLng().lng+";",o+=e}),o=window.encodeURIComponent(window.btoa(o))}();updateQueryStringParam("mkrs",e)}v.on("contextmenu",function(e){var o=e.latlng;te.setLatLng(e.latlng).setContent("<ul><li class='js-addMarker'>Add Marker</li>        <li class='js-clearMarkers'>Clear Markers</li>        <li class='js-closest' data-type='chickens'>Closest Chickens</li>        <li class='js-closest' data-type='pigs'>Closest Pigs</li>        <li class='js-closest' data-type='snakes'>Closest Snakes</li>        <li class='js-closest' data-type='outpost'>Closest Outpost</li>        </ul>").openOn(v),$(".js-addMarker").click(function(){ae(o),le(),v.closePopup()}),$(".js-clearMarkers").click(function(){f.forEach(function(e){v.removeLayer(e)}),f=[],se(),ie(),le(),v.closePopup()}),$(".js-closest").click(function(){var t=$(this).data("type"),s=function(e,o){var t,s=1e3,a={};for(var i in d){var n=d[i].title,r=d[i].loc;(t=v.distance(r,e))<s&&d[i][o]&&(s=t,a.title=n,a.islandData=d[i])}return a.bearing=window.angle360(e.lat,e.lng,a.islandData.loc[0],a.islandData.loc[1]),a}(e.latlng,t),a=s.islandData;$(".islandClass").removeClass("show pigs chickens snakes outposts"),a.circle._path.classList.add(t,"show");var i="<span class='type'>"+(t.charAt(0).toUpperCase()+t.slice(1))+"</span> can be found to the <span class='direction'>"+window.getCardinalFromDeg(s.bearing)+"</span> at <span class='title'>"+s.title+"</span>";!function(e,o){se(),g=L.marker(e,{icon:F,draggable:!1}).addTo(v),console.log(g._icon.style);var t=g._icon.style.transform+" rotate("+o+"deg)";console.log(t),g._icon.style.transform=t,f.push(g)}(o,s.bearing),function(e){$(".floating_dialog").html(e).addClass("show")}(i),v.closePopup()})}),L.simpleGraticule({interval:8.2,vinterval:7.7,showOriginLabel:!1,redraw:"move"}).addTo(v),v.on("zoomend",function(){ne()}),v.on("move",function(){ne()}),v.on("moveend",function(){ne()}),window.dev={toggleOn:function(){console.log("dev"),$(".islandClass").addClass("show"),k=!0}},$(function(){$(".js-searchforisland").click(function(){var e=function e(o){return"left"==o?--w<0&&(w=d.length-1):++w>=d.length&&(w=0),d[w].isFortress||d[w].outpost||d[w].isSeapost?e(o):d[w]}($(this).data("dir")).loc;v.setView(e,7),ne()}),$(".js-toggleMarkers").click(function(){!function(e,o){(function(e){for(var o=0;o<c.length;o++)if(c[o][0]==e)return c[o][1]})(e).eachLayer(function(e){console.log(e),o?e.setOpacity(1):e.setOpacity(0)})}($(this).attr("name"),$(this).is(":checked"))}),$(".js-fullscreen").click(function(){window.toggleFullScreen()}),$(".js-share").click(function(){var e=window.location.hreh;navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)})}),$(".js-installfiles").click(function(){console.log("click install"),function(){console.log("installer called");var e=new XMLHttpRequest;e.open("GET","data/mapfile_list.json?cb=5",!0),e.onload=function(){if(e.status>=200&&e.status<400){var o=JSON.parse(e.responseText).mapFileList;n=o.length,console.log(o.length),l(o,200)}else console.log("ERROR")},e.onerror=function(){console.log("ERROR")},e.send()}()}),function(){var e=new URLSearchParams(window.location.search),o=window.decodeURIComponent(e.get("mkrs"));null!==e.get("mkrs")&&window.atob(o).split(";").forEach(function(e){""!==e&&ae(e.split(","))})}()})}]);
//# sourceMappingURL=maps/sotm.js.map