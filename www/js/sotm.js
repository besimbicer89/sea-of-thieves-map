!function(e){var o={};function t(s){if(o[s])return o[s].exports;var a=o[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=o,t.d=function(e,o,s){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)t.d(s,a,function(o){return e[o]}.bind(null,a));return s},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=0)}([function(e,o,t){e.exports=t(2)},function(e,o){window.updateQueryStringParam=function(e,o){var t=[location.protocol,"//",location.host,location.pathname].join(""),s=document.location.search,a=e+"="+o,r="?"+a;if(s){var i=new RegExp("([?&])"+e+"[^&]*"),n=new RegExp("([?&])"+e+"=[^&;]+[&;]?");r=void 0===o||null==o||""==o?(r=s.replace(n,"$1")).replace(/[&;]$/,""):null!==s.match(i)?s.replace(i,"$1"+a):s+"&"+a}r="?"==r?"":r;var l=window.location.hash;window.history.replaceState({},"",t+r+l)},window.websafe=function(e){return e.match(/[a-zA-Z0-9]+/g).join("-").toLowerCase()},window.angle=function(e,o,t,s){var a=s-o,r=t-e;return Math.atan2(a,r)*(180/Math.PI)},window.angle360=function(e,o,t,s){var a=angle(e,o,t,s);return a<0&&(a=360+a),a},window.getCardinalFromDeg=function(e){var o="North";return e>=0&&11.25>e?o="North":e>=11.25&&33.75>e?o="North by North East":e>=33.75&&56.25>e?o="North East":e>=56.25&&78.75>e?o="East by North East":e>=78.75&&101.25>e?o="East":e>=101.25&&123.75>e?o="East by South East":e>=123.75&&146.25>e?o="South East":e>=146.25&&168.75>e?o="South by South East":e>=168.75&&191.25>e?o="South":e>=191.25&&213.75>e?o="South by South West":e>=213.75&&236.25>e?o="South West":e>=236.25&&258.75>e?o="West by South West":e>=258.75&&281.25>e?o="West":e>=281.25&&303.75>e?o="West by North West":e>=303.75&&326.25>e?o="North West":e>=326.25&&348.75>e&&(o="North by North West"),o},window.toggleFullScreen=function(){document.fullScreenElement&&null!==document.fullScreenElement||!document.mozFullScreen&&!document.webkitIsFullScreen?document.documentElement.requestFullScreen?document.documentElement.requestFullScreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullScreen&&document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT):document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen()}},function(e,o,t){"use strict";t.r(o);var s=1==window.navigator.standalone,a=window.matchMedia("(display-mode: standalone)").matches;let r;console.log("pwa-scripts firing"),window.addEventListener("load",function(){function e(e){console.log("online offline update"),navigator.onLine?console.log("went online"):console.log(" went offline")}window.addEventListener("online",e),window.addEventListener("offline",e)}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("Service Worker Registered with scope: ",e.scope),e.addEventListener("updatefound",()=>{console.log("update detected"),console.log(s,a),(s||a)&&(confirm("There is an update to the application. Would you like to update?")?console.log("trigger update"):console.log("they don't want the update"))})}),navigator.onLine;var i=document.querySelector("#install-button");window.addEventListener("beforeinstallprompt",e=>{console.log("beforeinstallprompt - showme!!!"),e.preventDefault(),r=e,document.querySelector("#installBut").classList.add("showme")}),console.log("waiting for beforeinstallprompt"),i.addEventListener("click",()=>{document.querySelector("#installBut").classList.remove("showme"),r.prompt(),r.userChoice.then(e=>{"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),r=null})}),window.addEventListener("appinstalled",e=>{console.log("a2hs","installed")}),t(1),new URL(document.location).searchParams.get("useAlexa");var n=0;var l,c=[],d={throne_L:{iconUrl:"/images/markers/throne_marker_l.png",iconSize:[31,40],iconAnchor:[15,40],popupAnchor:[0,-40]},throne_S:{iconUrl:"/images/markers/throne_marker_s.png",iconSize:[31,40],iconAnchor:[15,40],popupAnchor:[0,-40]},cargorun:{iconUrl:"/images/markers/crate_marker.png",iconSize:[31,40],iconAnchor:[15,40],popupAnchor:[0,-45]},beacon:{iconUrl:"/images/markers/beacon_marker.png",iconSize:[31,40],iconAnchor:[15,40],popupAnchor:[0,-45]},talltale:{iconUrl:"/images/markers/tt_marker.png",iconSize:[31,40],iconAnchor:[15,40],popupAnchor:[0,-45]},compass:{iconUrl:"/images/markers/compass.png",iconSize:[50,48],iconAnchor:[25,24]},boat:{iconUrl:"/images/markers/boat_marker.png",iconSize:[50,59],shadowSize:[0,0],iconAnchor:[25,29]},xmarksspot:{iconUrl:"/images/markers/xmarkthespot_marker.png",iconSize:[40,52],iconAnchor:[20,52]}},u=L.icon({iconUrl:"/images/markers/boat_marker.png",iconSize:[50,59],iconAnchor:[25,29]}),p=L.icon({iconUrl:"/images/markers/xmarkthespot_marker.png",shadowUrl:"/images/markers/xmarkthespot_marker.png",iconSize:[40,52],shadowSize:[0,0],iconAnchor:[20,52],shadowAnchor:[0,0],popupAnchor:[0,0]});function g(e,o){var t,s,a=e.loc;if("throne"==o){var r=e.isLarge?" Large":" Small";s=e.title+r+" Skelton Throne",t=e.isLarge?d.throne_L:d.throne_S}else"cargo"==o?(t=d.cargorun,s=e.title+" | Cargo Run"):"beacon"==o?(t=d.beacon,s=e.title+" Beacon"):"talltale"==o&&(t=d.talltale,s=e.title+" | TallTale");var i=e.desc,n="markerIcon "+o+" "+window.websafe(s);return{title:s,marker:new L.Marker(a,{icon:new L.DivIcon({className:n,iconAnchor:t.iconAnchor,iconSize:null,popupAnchor:t.popupAnchor,html:'<img src="'+t.iconUrl+'" alt="">'})}),desc:i}}function h(e){l&&e.removeLayer(l)}function m(e,o){var t=L.marker(e,{icon:p,draggable:!0}).addTo(o);t.on("dragend",function(e){console.log("marker dragend event"),f()}),c.push(t)}function f(){var e=function(){var e,o="";return c.forEach(function(t){e=t.getLatLng().lat+","+t.getLatLng().lng+";",o+=e}),o=window.encodeURIComponent(window.btoa(o))}();updateQueryStringParam("mkrs",e)}var k=[];function w(e,o,t,s){var a={type:e,name:o,classes:t,markerObj:s};k.push(a)}function v(){var e=$(".js-filter-search").val().toLowerCase();e.length>0?($(".list_of_places").addClass("searching"),$(".search-cancel").addClass("searching"),$(".js-placelist").each(function(o,t){$(t).data("name").toLowerCase().indexOf(e)>-1?($(t).addClass("found"),$(t).attr("tabindex",0)):($(t).removeClass("found highlight"),$(t).removeAttr("tabindex"))})):($(".list_of_places").removeClass("searching"),$(".search-cancel").removeClass("searching"))}var y=[],S=[{loc:[-41.819753270587555,62.927539082707604],title:"Lone Cove",coords:"H 6",img:"loneCove.jpg",radius:3,pigs:!0,snakes:!0},{loc:[-69.94175507751075,50.54955884969927],title:"Cannon Cove",coords:"G 10",img:"cannonCove.jpg",radius:4,chickens:!0,pigs:!0},{loc:[-67.62877065330183,65.30062001780092],title:"Rum Runner Isle",coords:"H 9",radius:2,pigs:!0},{loc:[-80.94564356372827,121.30273506665486],title:"The Crooked Masts",coords:"O 11",radius:3,chickens:!0,snakes:!0},{loc:[-29.006074941430732,18.117840198163094],title:"Sailor's Bounty",coords:"C 4",img:"sailorsBounty.jpg",radius:4,chickens:!0,pigs:!0},{loc:[-21.065393452707312,42.86583042922642],title:"Smuggler's Bay",coords:"F 3",img:"smugglersBay.jpg",radius:4,chickens:!0,snakes:!0},{loc:[-22.940799321639105,57.487891142156535],title:"Salty Sands",coords:"G 3",img:"saltySands.jpg",radius:1.5,chickens:!0},{loc:[-28.629490743342114,69.55120761078706],title:"Picaroon Palms",coords:"I 4",img:"picaroonPalms.jpg",radius:1.5,snakes:!0},{loc:[-28.19171579987219,88.62081716840055],title:"Scurvy Isley",coords:"K 4",img:"scurveyIsley.jpg",radius:1.5},{loc:[-28.691820540241682,107.0555642878491],title:"Old Faithful Isle",coords:"M 4",img:"oldFaithfulIsle.jpg",radius:4,chickens:!0,pigs:!0},{loc:[-22.8781029334463,120.48941102991489],title:"Black Sand Atoll",coords:"O 3",radius:1.5,snakes:!0},{loc:[-21.566440856402263,136.5557290968507],title:"Marauder's Arch",coords:"Q 3",radius:3,chickens:!0,pigs:!0},{loc:[-32.44278938865952,32.80535275921895],title:"Sandy Shallows",coords:"D 5",img:"sandyShallows.jpg",radius:1.5,snakes:!0},{loc:[-33.44299886939851,50.23934822463562],title:"Boulder Cay",coords:"G 5",img:"boulderCay.jpg",radius:1.5,chickens:!0},{loc:[-45.00792099044309,24.432035940703415],title:"Keel Haul Fort",coords:"C 6",img:"keelHaulFort.jpg",radius:2,isFortress:!0},{loc:[-48.25860180284481,43.931357643687285],title:"Sanctuary Outpost",coords:"F 7",img:"sanctuaryOutpost.jpg",radius:3,outpost:!0},{loc:[-56.135264556210544,57.616119333511065],title:"Lonely Isle",coords:"G 8",img:"lonelyIsle.jpg",radius:1.5,snakes:!0},{loc:[-55.3851074456563,71.67579309594387],title:"Hidden Spring Keep",coords:"I 8",img:"hiddenSpringKeep.jpg",radius:2,isFortress:!0},{loc:[-41.13192595693288,114.67807920810932],title:"Blind Man's Lagoon",coords:"N 6",radius:1.5,pigs:!0},{loc:[-34.818103609768,126.55069260749704],title:"Shark Fin Camp",coords:"P 5",img:"sharkFinCamp.jpg",radius:1.5,isFortress:!0},{loc:[-42.195761396643945,137.43053681968217],title:"Plunderer's Plight",coords:"Q 6",img:"plunderOutpost.jpg",radius:2,pigs:!0},{loc:[-33.56895462527015,144.36651233641732],title:"Black Water Enclave",coords:"R 5",radius:1.5,chickens:!0},{loc:[-40.819360494201945,93.80847591354413],title:"Kraken's Watchtower",coords:"L 6",radius:2,isFortress:!0},{loc:[-54.197162299085946,105.7433527036019],title:"Dagger Tooth Outpost",coords:"M 8",img:"daggerToothOutpost.jpg",radius:4,outpost:!0},{loc:[-52.32176952270034,125.36404020139321],title:"The Sunken Grove",coords:"P 7",radius:2,pigs:!0,snakes:!0},{loc:[-55.76110247916651,145.1163475274157],title:"Galleon's Grave Outpost",coords:"R 8",img:"galleonGraveOutpost.jpg",radius:3,outpost:!0},{loc:[-64.51072835956577,117.43038960965997],title:"Isle of Last Words",coords:"O 9",radius:1,pigs:!0,snakes:!0},{loc:[-67.69269774083621,130.11909434410913],title:"Skull Keep",coords:"P 9",radius:2,isFortress:!0},{loc:[-71.44348329360741,142.9912651229149],title:"Tri-Rock Isle",coords:"R 10",radius:2,chickens:!0},{loc:[-67.50237,151.430381],title:"Three Paces East Seapost",coords:"S 9",radius:1,isSeapost:!0},{loc:[-51.4375,16.125],title:"The Spoils of Plenty Store",coords:"B 7",img:"theSpoilsOfPlentyStore.jpg",radius:1,isSeapost:!0},{loc:[-75.235017,64.342312],title:"The North Star Seapost",coords:"H 10",radius:1,isSeapost:!0},{loc:[-114.96965,94.435731],title:"Stephen's Spoils",coords:"L 15",img:"stephensSpoils.jpg",radius:1,isSeapost:!0},{loc:[-128.328685,48.139087],title:"The Finest Trading Post",coords:"F 17",img:"theFinestTradingPost.jpg",radius:1,isSeapost:!0},{loc:[-29.844282,120.967678],title:"The Wild Treasures Store",coords:"O 4",radius:1,isSeapost:!0},{loc:[-80.07029006498121,135.55539947884748],title:"Shiver Retreat",coords:"Q 11",radius:2,pigs:!0},{loc:[-78.63248893641892,152.05177368081218],title:"Liar's Backbone",coords:"S 11",radius:2,snakes:!0},{loc:[-92.63542166676478,130.11909434410913],title:"Shark Tooth Key",coords:"P 13",radius:2,pigs:!0},{loc:[-92.19783001894149,144.99082563224394],title:"Kraken's Fall",coords:"R 12",img:"krakenFalls.jpg",radius:4,pigs:!0,snakes:!0},{loc:[-74.94438667929433,102.86928662127767],title:"Shipwreck Bay",coords:"M 10",radius:4,chickens:!0,pigs:!0},{loc:[-58.448248980419464,30.371595953863505],title:"Rapier Cay",coords:"D 8",img:"rapierCay.jpg",radius:1,chickens:!0},{loc:[-66.31539345270731,15.993498563600905],title:"Crescent Isle",coords:"B 9",img:"crescentIsle.jpg",radius:3,pigs:!0,snakes:!0},{loc:[-75.94243588991247,31.746234927654953],title:"Golden Sand Outpost",img:"goldenSandOutpost.jpg",coords:"D 10",radius:3,outpost:!0},{loc:[-81.88115349670785,16.993169376947787],title:"Sea Dog's Rest",coords:"C 11",radius:1.5,pigs:!0},{loc:[-81.6942164761939,60.23384927983136],title:"Twin Groves",coords:"H 11",radius:2,chickens:!0},{loc:[-91.6963112835838,48.48771722300551],title:"Wanderer's Refuge",coords:"F 12",img:"wanderersRefuge.jpg",radius:4,chickens:!0,snakes:!0},{loc:[-91.44625891339905,30.743560286098365],title:"Lagoon of Whispers",coords:"D 12",radius:2,chickens:!0,snakes:!0},{loc:[-97.13434807797746,16.305895692771806],title:"Mermaid's Hideaway",coords:"B 13",img:"mermaidsHideaway.jpg",radius:3,chickens:!0,pigs:!0},{loc:[-105.13603701643558,36.36971243938428],title:"Sailor's Knot Stronghold",coords:"E 14",radius:2,isFortress:!0},{loc:[-103.69823588787327,72.10794401653528],title:"Fools Lagoon",coords:"I 14",radius:1.5,pigs:!0},{loc:[-100.84721297846644,83.52747464057205],title:"Castaway Isle",coords:"K 14",img:"castawayIsle.jpg",radius:1,snakes:!0},{loc:[-104.19511986188078,97.48786124216625],title:"Old Boot Fort",coords:"L 14",radius:2,isFortress:!0},{loc:[-117.31967471531044,51.7447330135501],title:"Plunder Valley",coords:"G 16",img:"plunderValley.jpg",radius:4,chickens:!0,pigs:!0},{loc:[-115.8779065452535,69.80542248695795],title:"Chicken Isle",coords:"I 16",radius:2,chickens:!0,pigs:!0},{loc:[-115.25277561979163,85.05040239049788],title:"Snake Island",coords:"K 16",img:"snakeIsland.jpg",radius:3,pigs:!0,snakes:!0},{loc:[-116.75298510053062,106.67686315627111],title:"Crooks's Hollow",coords:"M 16",img:"crooksHollow.jpg",radius:3,chickens:!0,snakes:!0},{loc:[-114.69061602599248,122.1182928219427],title:"Barnacle Cay",coords:"O 15",radius:2,chickens:!0},{loc:[-126.31805123958326,134.36426028544201],title:"Ancient Spire Outpost",coords:"Q 17",img:"ancientSpireOutpost.jpg",radius:2,outpost:!0},{loc:[-124.56687291042644,34.36631770202399],title:"Discovery Ridge",coords:"E 17",radius:4,chickens:!0,snakes:!0},{loc:[-137.44456997494095,45.05029951966879],title:"Old Salts Atoll",coords:"F 18",radius:2,chickens:!0},{loc:[-128.94278938865952,65.35611291577732],title:"Lost Gold Fort",coords:"H 17",radius:2,isFortress:!0},{loc:[-144.821114895391,60.10784114570619],title:"Shark Bait Cove",coords:"H 19",radius:4,chickens:!0,pigs:!0},{loc:[-148.3847146692707,73.99154401784801],title:"Lookout Point",coords:"I 20",radius:2,pigs:!0},{loc:[-152.51057877731904,84.98792296466371],title:"Booty Isle",coords:"K 20",radius:1.5,snakes:!0},{loc:[-134.88188667929433,82.4887459312965],title:"Plunder Outpost",coords:"J 18",img:"plunderOutpost.jpg",radius:2,outpost:!0},{loc:[-126.75507990792053,95.36808708028451],title:"Paradise Spring",coords:"L 17",radius:2,pigs:!0},{loc:[-133.19392844017779,104.67752152957733],title:"Cutlass Cay",coords:"M 18",radius:1.5,snakes:!0},{loc:[-130.13078690541462,117.3608449739159],title:"The Crow's Nest Fortress",coords:"O 17",img:"theCrowsNestFortress.jpg",radius:2,isFortress:!0},{loc:[-143.50858871029862,113.17472344302583],title:"Mutineer Rock",coords:"N 19",img:"mutineerRock.jpg",radius:2,chickens:!0},{loc:[-143.75864108048336,128.48218277239994],title:"Devil's Ridge",coords:"P 19",img:"devilsRidge.jpg",radius:3,pigs:!0,snakes:!0},{loc:[-147.8845051885317,98.80445550116441],title:"Thieves' Haven",coords:"M 20",radius:4,chickens:!0,pigs:!0},{loc:[-78.938966,191.556523],title:"Scorched Pass",coords:"X 11",radius:2,forsaken:!0},{loc:[-87.003155,200.022485],title:"Brian's Bazaar",coords:"Y 12",radius:1,forsaken:!0,isSeapost:!0},{loc:[-84.359375,209.328125],title:"Molten Sands Fortress",coords:"Z 11",img:"keelHaulFort.jpg",radius:2.5,isFortress:!0},{loc:[-87.5329,177.748416],title:"Fletcher's Rest",coords:"V 12",radius:5,forsaken:!0,isSeapost:!1},{loc:[-96.568248,198.610248],title:"Cursewater Shores",coords:"Y 13",radius:2,forsaken:!0,isSeapost:!1},{loc:[-104.69495,169.682274],title:"Cinder Islet",coords:"U 14",radius:2,forsaken:!0,isSeapost:!1},{loc:[-107.257986,185.614528],title:"Flintlock Peninsula",coords:"W 15",radius:4,forsaken:!0,isSeapost:!1},{loc:[-119.318876,201.609261],title:"Ruby's Fall",coords:"Y 16",radius:3,forsaken:!0,isSeapost:!1},{loc:[-118.568719,165.308714],title:"The Forsaken Brink",coords:"U 16",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-127.003365,178.80427],title:"Marrow's Peak Outpost",coords:"V 17",radius:3,forsaken:!0,outpost:!0,isSeapost:!1},{loc:[-136.81792,198.36031],title:"Brimstone Rock",coords:"Y 18",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-137.943156,212.605619],title:"Glowstone Cay",coords:"Z 18",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-144.69457,179.491523],title:"Flame's End",coords:"V 19",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-147.193195,167.058118],title:"Roaring Traders",coords:"U 20",radius:1,forsaken:!0,isSeapost:!0},{loc:[-152.506808,204.045938],title:"Magma's Tide",coords:"Y 20",radius:2,forsaken:!0,isSeapost:!1},{loc:[-157.382829,187.676328],title:"The Devil's Thirst",coords:"W 21",radius:3,forsaken:!0,isSeapost:!1},{loc:[-159.258222,167.432994],title:"Burning Sands",coords:"U 21",radius:1.5,forsaken:!0,isSeapost:!1},{loc:[-172.636024,175.305402],title:"Ashen Reaches",coords:"V 23",radius:3,forsaken:!0,isSeapost:!1}],j=[{loc:[-16.507874,31.0448],title:"North West of Smuggler's Bay",isLarge:!0,desc:"Large (3rd out of the 4 offshore rocks counting from the east, at the back of the island, D2"},{loc:[-22.745271,135.124285],title:"Marauder's Arch",isLarge:!0,desc:"South top"},{loc:[-54.988041,71.873989],title:"Hidden Spring Keep",isLarge:!1,desc:" Very top, use the South West cannon"},{loc:[-142.478323,128.428828],title:"Devil's Ridge",isLarge:!1,desc:" North side underneath the ridge"},{loc:[-64.763573,86.934257],title:"K9",isLarge:!1,desc:"Underwater, uncharted island"},{loc:[-73.23633,103.936164],title:"Shipwreck Bay",isLarge:!0,desc:"Northern small island"},{loc:[-70.532986,51.038615],title:"Cannon Cove",isLarge:!0,desc:"Northern small island"},{loc:[-98.065754,17.249381],title:"Mermaid's Hideaway",isLarge:!1,desc:"Across from the Southern peak"},{loc:[-148.01744,101.459982],title:"Thieves Haven",isLarge:!1,desc:"East rock in the water"},{loc:[-135.604944,83.10854],title:"Plunder Outpost",isLarge:!0,desc:"South top"}],C=[{loc:[-19.29761,43.108748],title:"Smugglers Bay"},{loc:[-22.235517,136.749201],title:"Marauder's Arch"},{loc:[-70.501164,50.554064],title:"Cannon Cove"},{loc:[-80.548623,120.702367],title:"The Crooked Masts"},{loc:[-90.954813,145.288321],title:"Kraken's Fall"},{loc:[-85.642033,179.030255],title:"Fetcher's Rest"},{loc:[-96.767313,15.671325],title:"Mermaid's Hideaway"},{loc:[-118.127325,52.124172],title:"Plunder Valley"},{loc:[-117.744397,107.006777],title:"Crook's Hollow"},{loc:[-119.517574,201.600493],title:"Ruby's Fall"},{loc:[-143.071842,128.265031],title:"Devil's Ridge"},{loc:[-156.431205,187.968065],title:"The Devil's Thirst"}],b=[{loc:[-42.471588,61.804962],title:"Lone Cove - Deadshot Charlotte"},{loc:[-73.784149,103.488647],title:"Shipwreck Bay - Grogsoaked Ed"},{loc:[-92.504761,147.521606],title:"Kraken's Fall - Lootin Penelope"},{loc:[-88.219971,176.605042],title:"Fletcher's Rest - Walter the Feared"},{loc:[-119.66217,200.650238],title:"Ruby's Fall - Burnin' Tony"},{loc:[-143.671936,128.255554],title:"Devil's Ridge - Martha the Fierce"},{loc:[-116.560669,106.010834],title:"Crook's Hollow - Wild Henry"},{loc:[-96.860016,16.258972],title:"Mermaid's Hideaway - Five Paces Frank"}],_=[{loc:[-98.689331,114.637573],title:"Magpie's Wing (N13)",desc:"Underwater, just off the west coast of an uncharted island at N13",image:"magpies_wing.jpg",talltale:1},{loc:[-99.158081,115.043823],title:"Mercia's Lost Memories Journal 1",desc:"On the beach of the west coast of an uncharted island at N13",image:"mercia_journal_1.jpg",talltale:1},{loc:[-125.335937,133.6171883],title:"Mercia's Lost Memories Journal 2",desc:"In cave at across from the Tavern on the other spire at Anchient Spire Outpost",image:"mercia_journal_2.jpg",talltale:1},{loc:[-142.648437,129.21875],title:"Mercia's Lost Memories Journal 3",desc:"At Devil's Ridge on a cliff overlooking the beach on the north east side by a cannon",image:"mercia_journal_3.jpg",talltale:1},{loc:[-147.6875,99.710938],title:"Mercia's Lost Memories Journal 4",desc:"Inside Thieve's Haven, north west side, inside a shack in a crate",image:"mercia_journal_4-2.jpg",talltale:1},{loc:[-134.179687,81.648438],title:"Mercia's Lost Memories Journal 5",desc:"On Plunder Outpost, by the gold hoarder's tent in a broken rowboat",image:"mercia_journal_5.jpg",talltale:1},{loc:[-146.304687,60.507813],title:"Bounty Hunter's Journal 1",desc:"On the inside of the outermost ring of Shark Bait cove in a wrecked rowboat",image:"mercia_journal_5.jpg",talltale:2},{loc:[-123.828125,36.515625],title:"Bounty Hunter's Journal 2",desc:"On the north beach of Discovery Ridge, next to a half buried skeleton",image:"mercia_journal_5.jpg",talltale:2},{loc:[-92.09375,145.625],title:"Bounty Hunter's Journal 3",desc:"Right off the shore of the eastern bay of Kraken's Fall. By a pile of skulls",image:"mercia_journal_5.jpg",talltale:2},{loc:[-91.681335,47.646057],title:"Bounty Hunter's Journal 4",desc:"at the top of the main mountain on Wanderer's Refuge tucked into a fence on some stone.",image:"mercia_journal_5.jpg",talltale:2}];function F(e,o){const t=e.title.replace(/the /gi,"").toUpperCase(),s=o.title.replace(/the /gi,"").toUpperCase();return t>s?1:s>t?-1:0}S.sort(F),j.sort(F);var T=!1,A=-1,O="";"localhost"!=location.hostname&&(O="https://cdn.chenzorama.com/"),function(){var e=L.GridLayer.prototype._initTile;L.GridLayer.include({_initTile:function(o){e.call(this,o);var t=this.getTileSize();o.style.width=t.x+1+"px",o.style.height=t.y+1+"px"}})}();var M=L.map("mapid",{maxZoom:7,minZoom:2,crs:L.CRS.Simple,attributionControl:!1,preferCanvas:!1,maxBoundsViscosity:1,zoomControl:!1}).setView([70,70],4);L.control.zoom({position:"bottomright"}).addTo(M);var I=new L.LatLngBounds(M.unproject([0,25522],7),M.unproject([27444,0],7));M.setMaxBounds(I,{padding:[600,600]}),new L.Hash(M),L.tileLayer(O+"images/tiles/v3/{z}/{x}/{y}.png",{minZoom:2,maxZoom:7,bounds:I,noWrap:!0,tms:!1}).addTo(M),M.on("click",function(e){console.log("You clicked the map at "+e.latlng)});var R=new L.LayerGroup;M.addLayer(R);var P=new L.LayerGroup;y.push(["islands",z]),M.addLayer(P);var z=new L.LayerGroup;y.push(["chickens",z]);var E=new L.LayerGroup;y.push(["snakes",E]);var x=new L.LayerGroup;y.push(["pigs",x]);var B=L.icon({iconUrl:"/images/markers/chicken_marker.png",shadowUrl:"/images/markers/chicken_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[0,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),U=L.icon({iconUrl:"/images/markers/snake_marker.png",shadowUrl:"/images/markers/snake_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,30],shadowAnchor:[0,0],popupAnchor:[0,0]}),W=L.icon({iconUrl:"/images/markers/pig_marker.png",shadowUrl:"/images/markers/pig_marker.png",iconSize:[30,30],shadowSize:[0,0],iconAnchor:[30,0],shadowAnchor:[0,0],popupAnchor:[0,0]});L.islandCircle=L.Circle.extend({options:{name:"islandName",json:{}}});var H=[];for(var D in S){var N=S[D].title,G=S[D].radius,K="islandClass "+window.websafe(N),Z=new L.islandCircle(S[D].loc,{strokeweight:1,opacity:0,color:"#fff",fillColor:"#fff",fillOpacity:0,radius:G,className:K,name:N,title:N,json:S[D]});w("island",N,K,S[D]);var V=ce(S[D].loc,G+.1*G,0);if(new L.Marker(V,{icon:new L.DivIcon({className:"title-location",iconAnchor:[0,0],iconSize:null,html:'<span class="my-div-span" data-anchor-x="0">'+S[D].title+"</span>"})}).addTo(P),R.addLayer(Z),H[D]=Z,S[D].circle=Z,Z.on({mousedown:function(e){T?(e.target.classList.add("pig show"),M.dragging.disable(),M.on("mousemove",function(o){e.target.setLatLng(o.latlng)})):(e.target._path.classList.remove("pig","show"),h(M),ne())},mouseup:function(e){T&&(M.removeEventListener("mousemove"),console.log(e.target.options.title),console.log("["+e.latlng.lat+", "+e.latlng.lng+"],"),M.dragging.enable())}}),S[D].chickens){var q=ce(S[D].loc,.5*G,.6*G);L.marker(q,{icon:B,title:"chicken"}).addTo(z).setIcon(B)}if(S[D].snakes){var J=ce(S[D].loc,.5*G,.6*G*-1);L.marker(J,{icon:U,title:"snake"}).addTo(E)}if(S[D].pigs){var Y=ce(S[D].loc,.5*G*-1,.6*G*-1);L.marker(Y,{icon:W,title:"pigs"}).addTo(x)}}M.on("zoomend",function(){M.getZoom()<3?M.removeLayer(P):M.addLayer(P);var e=$(".title-location");switch(M.getZoom()){case 5:e.css("font-size",24),M.getZoom(),M.getZoom();break;case 6:e.css("font-size",33),M.getZoom(),M.getZoom();break;case 7:e.css("font-size",63),M.getZoom(),M.getZoom();break;default:e.css("font-size",14),M.getZoom()}});var Q=new L.LayerGroup;for(var X in y.push(["beacons",Q]),M.addLayer(Q),C)(se=g(C[X],"beacon")).marker.addTo(Q).bindPopup(se.title),w("beacon",se.title,"beaconClass "+window.websafe(se.title),C[X]);var ee=new L.LayerGroup;for(var X in y.push(["cargoruns",ee]),M.addLayer(ee),b)(se=g(b[X],"cargo")).marker.addTo(ee).bindPopup(se.title),w("cargorun",se.title,"cargoClass "+window.websafe(se.title),b[X]);var oe=new L.LayerGroup;for(var X in y.push(["thrones",oe]),M.addLayer(oe),j)(se=g(j[X],"throne")).marker.addTo(oe).bindPopup(se.desc),w("throne",se.title,"throneClass "+window.websafe(se.title),j[X]);var te=new L.LayerGroup;for(var X in y.push(["talltales",te]),M.addLayer(te),_){var se,ae='<div class="lf-popup"><h3 class="pop_title">'+(se=g(_[X],"talltale")).title+"</h3><p>"+se.desc+"</p>";_[X].image&&(ae+='<img src="/images/screenshots/'+_[X].image+'" class="popup_screenshot js-show-large-screenshot"/>'),ae+="</div>",se.marker.addTo(te).bindPopup(ae,{minWidth:322}),w("talltale",se.title,"talltaleClass "+window.websafe(se.title),_[X])}var re=L.popup({maxWidth:"500",minWidth:"120",className:"context_popup"});function ie(e){$(".floating_dialog").html(e).addClass("show")}function ne(){$(".floating_dialog").removeClass("show")}function le(){M.getZoom()>=4&&$(".leaflet-grid-label").addClass("big")}function ce(e,o,t){return[e[0]+o,e[1]+t]}M.on("contextmenu",function(e){var o=e.latlng;re.setLatLng(e.latlng).setContent("<ul><li class='js-addMarker'>Add Marker</li>        <li class='js-clearMarkers'>Clear Markers</li>        <li class='js-closest' data-type='chickens'>Closest Chickens</li>        <li class='js-closest' data-type='pigs'>Closest Pigs</li>        <li class='js-closest' data-type='snakes'>Closest Snakes</li>        <li class='js-closest' data-type='outpost'>Closest Outpost</li>        </ul>").openOn(M),$(".js-addMarker").click(function(){m(o,M),f(),M.closePopup()}),$(".js-clearMarkers").click(function(){!function(e){c.forEach(function(o){e.removeLayer(o)}),c=[]}(M),h(M),ne(),f(),M.closePopup()}),$(".js-closest").click(function(){var t=$(this).data("type"),s=function(e,o){var t,s=1e3,a={};for(var r in S){var i=S[r].title,n=S[r].loc;(t=M.distance(n,e))<s&&S[r][o]&&(s=t,a.title=i,a.islandData=S[r])}return a.bearing=window.angle360(e.lat,e.lng,a.islandData.loc[0],a.islandData.loc[1]),a}(e.latlng,t),a=s.islandData;$(".islandClass").removeClass("show pigs chickens snakes outposts"),a.circle._path.classList.add(t,"show");var r="<span class='type'>"+(t.charAt(0).toUpperCase()+t.slice(1))+"</span> can be found to the <span class='direction'>"+window.getCardinalFromDeg(s.bearing)+"</span> at <span class='title'>"+s.title+"</span>";!function(e,o,t){h(t);var s=(l=L.marker(e,{icon:u,draggable:!1}).addTo(t))._icon.style.transform+" rotate("+o+"deg)";l._icon.style.transform=s,c.push(l)}(o,s.bearing,M),ie(r),M.closePopup()})}),L.simpleGraticule({interval:8.2,vinterval:7.7,showOriginLabel:!1,redraw:"move"}).addTo(M),M.on("zoomend",function(){le()}),M.on("move",function(){le()}),M.on("moveend",function(){le()}),window.dev={toggleOn:function(){console.log("dev"),$(".islandClass").addClass("show"),T=!0}};var de=0;$(function(){k.forEach(function(e,o){$(".list_of_islands").append("<li class='js-placelist "+e.classes+"' data-name=\""+e.name+"\" data-idx='"+o+"' data-type=\""+e.type+'">'+e.name+"</li>")}),$(".js-showfilters").on("click",function(){$(".js-filter_space").toggleClass("open")}),$(".js-toggle-filter").on("change",function(){var e=$("input",this).prop("checked");!function(e,o){o?$(".js-placelist[data-type='"+e+"']").removeClass("filteredOut"):$(".js-placelist[data-type='"+e+"']").addClass("filteredOut")}($(this).data("filter"),!!e)}),$(".js-filter-search").on("input propertychange paste",function(){v()}),$(".js-filter-search").keypress(function(e){13==e.which&&($(this).click(),$(".js-placelist.found").first().click())}).keydown(function(e){40===e.which&&$(".js-placelist").nextAll(".found:first").focus()}),$(".js-clear-search").on("click",function(){$(".js-filter-search").val(""),v()}),$(".js-placelist").on("click",function(){console.log("Showing: "+$(this).data("name"));var e=function(e){var o=!1;"beacon"!=k[e].type&&"throne"!=k[e].type&&"cargorun"!=k[e].type&&"talltale"!=k[e].type||(console.log("should toggle"),o=!0),console.log("type: "+k[e].type);var t=7;return parseInt(k[e].markerObj.radius)>2&&(t=6),{radius:t,LatLong:k[e].markerObj.loc,name:k[e].name,toggleMarker:o}}($(this).data("idx"));if(e.toggleMarker){var o=window.websafe(e.name);$(".markerIcon."+o).addClass("show"),$(".markerIcon."+o).click()}M.setView(e.LatLong,e.radius)}),$(".js-placelist").keypress(function(e){13==e.which&&$(this).click()}),$(".js-placelist").keydown(function(e){40===e.which?$(this).nextAll(".found:first").focus():38===e.which&&$(this).prevAll(".found:first").focus()}),$(".js-placelist").on("focus",function(){console.log("FOC'D"),$(".highlight").removeClass("highlight"),$(this).addClass("highlight")}),$(".js-searchforisland").click(function(){var e=function e(o){return"left"==o?--A<0&&(A=S.length-1):++A>=S.length&&(A=0),S[A].isFortress||S[A].outpost||S[A].isSeapost?e(o):S[A]}($(this).data("dir")).loc;M.setView(e,7),le(),ie("Island "+(A+1)+" of "+S.length),clearTimeout(de),de=setTimeout(ne,3e3)}),$(".js-toggleMarkers").click(function(){!function(e,o){var t=function(e){for(var o=0;o<y.length;o++)if(y[o][0]==e)return y[o][1]}(e);console.log(e),o?"thrones"==e?$(".markerIcon.throne").addClass("show"):"beacons"==e?$(".markerIcon.beacon").addClass("show"):"cargoruns"==e?$(".markerIcon.cargo").addClass("show"):"talltales"==e?$(".markerIcon.talltale").addClass("show"):M.addLayer(t):"thrones"==e?$(".markerIcon.throne").removeClass("show"):"beacons"==e?$(".markerIcon.beacon").removeClass("show"):"cargoruns"==e?$(".markerIcon.cargo").removeClass("show"):"talltales"==e?$(".markerIcon.talltale").removeClass("show"):M.removeLayer(t)}($(this).attr("name"),$(this).is(":checked"))}),$(".js-fullscreen").click(function(){window.toggleFullScreen()}),$(".js-share").click(function(){var e=window.location.href;navigator.clipboard.writeText(e).then(function(){console.log("Async: Copying to clipboard was successful!"),ie("Current Map Location URL Copied To Clipboard!"),setTimeout(ne,4e3)},function(e){console.error("Async: Could not copy text: ",e)})}),$(".js-settings").click(function(){console.log("click settings"),$(".settings").addClass("open")}),$(".js-close-settings").click(function(){console.log("click settings"),$(".settings").removeClass("open")}),function(){var e=new URLSearchParams(window.location.search),o=window.decodeURIComponent(e.get("mkrs"));null!==e.get("mkrs")&&window.atob(o).split(";").forEach(function(e){""!==e&&m(e.split(","),M)})}(),$(".js-open-islandfinder").click(function(){$(".js-ifoverlay").addClass("open"),$(".js-island-list").html(function(e){var o="";for(var t in e){var s=e[t].title;o+="<div class='one_island js-jumptoisland' data-idx='"+t+"'><h5>"+s+" - <span>"+e[t].coords+"</span></h5><img src='/images/island_images/"+window.websafe(s)+".jpg' /></div>"}return o}(S)),$(".js-overlay-words").html("<h2>Island Finder</h2><p>Scroll through these images of the islands of Sea Of Thieves and find the one that your treasure is marked on. Click to jump to island in the map</p>"),$(".js-jumptoisland").click(function(){var e=$(this).data("idx");$(".js-ifoverlay").removeClass("open");var o=S[e].loc;M.setView(o,7),le()})}),$(".js-close-if-overlay").click(function(){$(".js-ifoverlay").removeClass("open")}),$("body").on("click",".js-show-large-screenshot",function(){$(this).attr("src");var e=$(this).parent().find(".pop_title").text(),o=$(this).parent().find("p").text();console.log(e,o)}),$(".js-open-searchbar").click(function(){$(".sidebar.left").toggleClass("open")})}),window.generateIslandImages=function(){!function(e,o){n=0,$(".leaflet-control-zoom").hide(),function e(o,t){if(n<t.length){var s=t[n].title,a=t[n].loc;o.setView(a,7),console.log("Generating "+s+" image"),setTimeout(function(){html2canvas(document.querySelector("#mapid")).then(a=>{var r=document.createElement("a");r.href=a.toDataURL("image/jpeg").replace("image/jpeg","image/octet-stream"),r.download=window.websafe(s)+".jpg",r.click(),n++,e(o,t)})},2e3)}else alert("finished making all islands"),$(".leaflet-control-zoom").show()}(e,o)}(M,S)},window.rsize=function(){M.invalidateSize()}}]);
//# sourceMappingURL=maps/sotm.js.map