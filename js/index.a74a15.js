(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t);if(e){var r=e.getAttribute("data-src");e.setAttribute("src",r)}};ldv=function(t){var e=document.querySelector(t);if(e){var r=document.querySelector(t+" source"),c=r.getAttribute("data-src");r.setAttribute("src",c),e.load()}};!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/ireland-750.jpg':'images/ireland-375.jpg');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/la_surf-750.jpg':'images/la_surf-375.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/hawaii-750.jpg':'images/hawaii-375.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/newyork-750.jpg':'images/newyork-375.jpg');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bigsur-750.jpg':'images/bigsur-375.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/alpi-750.jpg':'images/alpi-375.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/san_francisco-800.jpg':'images/san_francisco-400.jpg');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/lisbona-1600.jpg':'images/lisbona-800.jpg');
var a='data-src';var e=document.querySelector('.un12');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,'images/sardegna-800.jpg');
var a='data-src';var e=document.querySelector('.un13');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook_logo_button_512-112.png':'images/facebook_logo_button_512-56.png');
var a='data-src';var e=document.querySelector('.un14');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/twitter_logo_button_512-112.png':'images/twitter_logo_button_512-56.png');
var a='data-src';var e=document.querySelector('.un15');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram_logo_512-112.png':'images/instagram_logo_512-56.png');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/bussola3-250.png':'images/bussola3-125.png');
var e=document.querySelector('.un2');e.setAttribute('src',(dpi>1)?'images/scala_turchi-1600.jpg':'images/scala_turchi-800.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/foresta-1600.jpg':'images/foresta-800.jpg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/ireland-600.jpg':'images/ireland-300.jpg');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/la_surf-600.jpg':'images/la_surf-300.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/hawaii-600.jpg':'images/hawaii-300.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/newyork-600.jpg':'images/newyork-300.jpg');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bigsur-600.jpg':'images/bigsur-300.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/alpi-600.jpg':'images/alpi-300.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/san_francisco-640.jpg':'images/san_francisco-320.jpg');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/lisbona-1280.jpg':'images/lisbona-640-1.jpg');
var a='data-src';var e=document.querySelector('.un12');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/sardegna-1280.jpg':'images/sardegna-640-1.jpg');
var a='data-src';var e=document.querySelector('.un13');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook_logo_button_512-90.png':'images/facebook_logo_button_512-45.png');
var a='data-src';var e=document.querySelector('.un14');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/twitter_logo_button_512-90.png':'images/twitter_logo_button_512-45.png');
var a='data-src';var e=document.querySelector('.un15');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram_logo_512-90.png':'images/instagram_logo_512-45.png');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/bussola3-200.png':'images/bussola3-100-1.png');
var e=document.querySelector('.un2');e.setAttribute('src',(dpi>1)?'images/scala_turchi-1280.jpg':'images/scala_turchi-640-1.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/foresta-1280.jpg':'images/foresta-640-1.jpg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/ireland-480-1.jpg':'images/ireland-240.jpg');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/la_surf-480-1.jpg':'images/la_surf-240.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/hawaii-480-1.jpg':'images/hawaii-240.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/newyork-480.jpg':'images/newyork-240.jpg');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bigsur-480-1.jpg':'images/bigsur-240.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/alpi-480-1.jpg':'images/alpi-240.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/san_francisco-512.jpg':'images/san_francisco-256.jpg');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/lisbona-1024.jpg':'images/lisbona-512.jpg');
var a='data-src';var e=document.querySelector('.un12');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/sardegna-1024.jpg':'images/sardegna-512.jpg');
var a='data-src';var e=document.querySelector('.un13');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook_logo_button_512-72.png':'images/facebook_logo_button_512-36.png');
var a='data-src';var e=document.querySelector('.un14');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/twitter_logo_button_512-72.png':'images/twitter_logo_button_512-36.png');
var a='data-src';var e=document.querySelector('.un15');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram_logo_512-72.png':'images/instagram_logo_512-36.png');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/bussola3-160.png':'images/bussola3-80.png');
var e=document.querySelector('.un2');e.setAttribute('src',(dpi>1)?'images/scala_turchi-1024.jpg':'images/scala_turchi-512.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/foresta-1024.jpg':'images/foresta-512.jpg');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/ireland-960.jpg':'images/ireland-480.jpg');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/la_surf-960.jpg':'images/la_surf-480.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/hawaii-960.jpg':'images/hawaii-480.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/newyork-958.jpg':'images/newyork-479.jpg');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bigsur-960.jpg':'images/bigsur-480.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/alpi-960.jpg':'images/alpi-480.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/san_francisco-322.jpg':'images/san_francisco-161.jpg');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/lisbona-640.jpg':'images/lisbona-320.jpg');
var a='data-src';var e=document.querySelector('.un12');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/sardegna-640.jpg':'images/sardegna-320.jpg');
var a='data-src';var e=document.querySelector('.un13');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook_logo_button_512-124.png':'images/facebook_logo_button_512-62.png');
var a='data-src';var e=document.querySelector('.un14');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/twitter_logo_button_512-126.png':'images/twitter_logo_button_512-63.png');
var a='data-src';var e=document.querySelector('.un15');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram_logo_512-126.png':'images/instagram_logo_512-63.png');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/bussola3-150.png':'images/bussola3-75.png');
var e=document.querySelector('.un2');e.setAttribute('src',(dpi>1)?'images/scala_turchi-960.jpg':'images/scala_turchi-480.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/foresta-960.jpg':'images/foresta-480.jpg');}else{var a='data-src';var e=document.querySelector('.un4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/ireland-640.jpg':'images/ireland-320.jpg');
var a='data-src';var e=document.querySelector('.un5');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/la_surf-640.jpg':'images/la_surf-320.jpg');
var a='data-src';var e=document.querySelector('.un6');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/hawaii-640.jpg':'images/hawaii-320.jpg');
var a='data-src';var e=document.querySelector('.un7');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/newyork-638.jpg':'images/newyork-319.jpg');
var a='data-src';var e=document.querySelector('.un8');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/bigsur-640.jpg':'images/bigsur-320.jpg');
var a='data-src';var e=document.querySelector('.un9');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/alpi-640.jpg':'images/alpi-320.jpg');
var a='data-src';var e=document.querySelector('.un10');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/san_francisco-214.jpg':'images/san_francisco-107.jpg');
var a='data-src';var e=document.querySelector('.un11');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/lisbona-426.jpg':'images/lisbona-213.jpg');
var a='data-src';var e=document.querySelector('.un12');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/sardegna-426.jpg':'images/sardegna-213.jpg');
var a='data-src';var e=document.querySelector('.un13');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/facebook_logo_button_512-82.png':'images/facebook_logo_button_512-41.png');
var a='data-src';var e=document.querySelector('.un14');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/twitter_logo_button_512-84.png':'images/twitter_logo_button_512-42.png');
var a='data-src';var e=document.querySelector('.un15');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/instagram_logo_512-84.png':'images/instagram_logo_512-42.png');
var e=document.querySelector('.un1');e.setAttribute('src',(dpi>1)?'images/bussola3-100.png':'images/bussola3-50.png');
var e=document.querySelector('.un2');e.setAttribute('src',(dpi>1)?'images/scala_turchi-640.jpg':'images/scala_turchi-320.jpg');
var e=document.querySelector('.un3');e.setAttribute('src',(dpi>1)?'images/foresta-640.jpg':'images/foresta-320.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
!function(){var e=document.querySelectorAll('a[href^="#"]');[].forEach.call(e,function(e){e.addEventListener("click",function(t){var o=0;if(e.hash.length>1){var n=parseFloat(getComputedStyle(document.body).getPropertyValue("zoom"));n||(n=1);var r=document.querySelectorAll('[name="'+e.hash.slice(1)+'"]')[0];if(!r)return;var l=/chrome/i.test(navigator.userAgent);o=l?r.getBoundingClientRect().top*n+pageYOffset:(r.getBoundingClientRect().top+pageYOffset)*n}if("scrollBehavior"in document.documentElement.style)scroll({top:o,left:0,behavior:"smooth"});else if("requestAnimationFrame"in window){var a=pageYOffset,i=null;requestAnimationFrame(function e(t){i||(i=t);var n=t-i;scrollTo(0,a<o?(o-a)*n/400+a:a-(a-o)*n/400),n<400?requestAnimationFrame(e):scrollTo(0,o)})}else scrollTo(0,o);t.preventDefault()},!1)})}();
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"0px"===window.getComputedStyle(document.body).getPropertyValue("min-width")&&setTimeout(o,100)};o()}

});lfn=function(){ldsrcset('.un76 source');ldsrcset('.un77 source');ldsrcset('.un78 source');ldsrcset('.un79 source');ldsrcset('.un80 source');ldsrcset('.un81 source');ldsrcset('.un82 source');ldsrcset('.un83 source');ldsrcset('.un84 source');ldsrcset('.un85 source');ldsrcset('.un86 source');ldsrcset('.un87 source');};if(document.readyState=="complete"){lfn();}else{$(window).on("load",lfn);}