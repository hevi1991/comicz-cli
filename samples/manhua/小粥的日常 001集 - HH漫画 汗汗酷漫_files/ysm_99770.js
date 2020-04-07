if(function(){var e;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var o=this.length>>>0,t=Number(arguments[1])||0;for((t=t<0?Math.ceil(t):Math.floor(t))<0&&(t+=o);t<o;t++)if(t in this&&this[t]===e)return t;return-1}),String.prototype.trim||(e=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,String.prototype.trim=function(){return this.replace(e,"")}),Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)||"[object HTMLCollection]"===Object.prototype.toString.call(e)},function(){function e(){}for(var o,t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,i=window.console=window.console||{};n--;)i[o=t[n]]||(i[o]=e)}()}(),void 0===SD||!SD)var SD={};SD.common=SD.common||{},SD.common.createEl=SD.common.createEl||{},SD.common.createEl.get=function(e){var o,t,n=e.attr||{};if(!e.tag)return console.error("required set tag");for(o in t=document.createElement(e.tag),n)t.setAttribute(o,n[o]);return e.html&&(t.innerHTML=e.html),e.handleOnLoad&&SD.common.dom.handleOnLoad(t,e.handleOnLoad),e.handleError&&(t.onerror=e.handleError),e.cssText&&(t.style.cssText=e.cssText),!1!==e.dom&&(e.dom?SD.common.createEl.append(t,e.dom):SD.common.createEl.append(t)),t},SD.common.createEl.append=function(e,o){var t=document.getElementsByTagName("head")[0]||document.body;o?o.appendChild(e):t.appendChild(e)},SD.common.dom=SD.common.dom||{},SD.common.dom.handleOnLoad=function(e,o){void 0!==e.onload?e.onload=o:e.onreadystatechange=function(){"loaded"!==e.readyState&&"complete"!==e.readyState||o()}},SD.common.createEl.js=function(e){var o=e.attr||{};return o.type="text/javascript",e.src&&(o.src=e.src),e.id&&(o.id=e.id),e.class&&(o.class=e.class),e.async&&(o.async=e.async),SD.common.createEl.get({tag:"script",attr:o,handleOnLoad:e.handleOnLoad,handleError:e.handleError,dom:e.dom})},SD.common.dom.getClassRegEx=function(e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)")},SD.common.dom.getElementsByClassName=function(e,o,t,n){o=o||"*";var i,a=[],d=(t=t||document).getElementsByTagName(o),r=SD.common.dom.getClassRegEx(e),s=d.length;for(i=0;i<s;i++)r.test(d[i].className)&&(a[a.length]=d[i],n&&n.call(d[i],d[i]));return a},function(){var e,o,t,n,i,a,d,r,s,c;o=window.device,e={},window.device=e,n=window.document.documentElement,c=window.navigator.userAgent.toLowerCase(),e.ios=function(){return e.iphone()||e.ipod()||e.ipad()},e.iphone=function(){return!e.windows()&&i("iphone")},e.ipod=function(){return i("ipod")},e.ipad=function(){return i("ipad")},e.android=function(){return!e.windows()&&i("android")},e.androidPhone=function(){return e.android()&&i("mobile")},e.androidTablet=function(){return e.android()&&!i("mobile")},e.blackberry=function(){return i("blackberry")||i("bb10")||i("rim")},e.blackberryPhone=function(){return e.blackberry()&&!i("tablet")},e.blackberryTablet=function(){return e.blackberry()&&i("tablet")},e.windows=function(){return i("windows")},e.windowsPhone=function(){return e.windows()&&i("phone")},e.windowsTablet=function(){return e.windows()&&i("touch")&&!e.windowsPhone()},e.fxos=function(){return(i("(mobile;")||i("(tablet;"))&&i("; rv:")},e.fxosPhone=function(){return e.fxos()&&i("mobile")},e.fxosTablet=function(){return e.fxos()&&i("tablet")},e.meego=function(){return i("meego")},e.cordova=function(){return window.cordova&&"file:"===location.protocol},e.nodeWebkit=function(){return"object"==typeof window.process},e.mobile=function(){return e.androidPhone()||e.iphone()||e.ipod()||e.windowsPhone()||e.blackberryPhone()||e.fxosPhone()||e.meego()},e.tablet=function(){return e.ipad()||e.androidTablet()||e.blackberryTablet()||e.windowsTablet()||e.fxosTablet()},e.desktop=function(){return!e.tablet()&&!e.mobile()},e.television=function(){var e;for(television=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","roku","pov_tv","hbbtv","ce-html"],e=0;e<television.length;){if(i(television[e]))return!0;e++}return!1},e.portrait=function(){return 1<window.innerHeight/window.innerWidth},e.landscape=function(){return window.innerHeight/window.innerWidth<1},e.line=function(){return i("line")},e.noConflict=function(){return window.device=o,this},i=function(e){return-1!==c.indexOf(e)},d=function(e){var o;return o=new RegExp(e,"i"),n.className.match(o)},t=function(e){var o=null;d(e)||(o=n.className.replace(/^\s+|\s+$/g,""),n.className=o+" "+e)},s=function(e){d(e)&&(n.className=n.className.replace(" "+e,""))},e.ios()?e.ipad()?t("ios ipad tablet"):e.iphone()?t("ios iphone mobile"):e.ipod()&&t("ios ipod mobile"):e.android()?e.androidTablet()?t("android tablet"):t("android mobile"):e.blackberry()?e.blackberryTablet()?t("blackberry tablet"):t("blackberry mobile"):e.windows()?e.windowsTablet()?t("windows tablet"):e.windowsPhone()?t("windows mobile"):t("desktop"):e.fxos()?e.fxosTablet()?t("fxos tablet"):t("fxos mobile"):e.meego()?t("meego mobile"):e.nodeWebkit()?t("node-webkit"):e.television()?t("television"):e.desktop()&&t("desktop"),e.cordova()&&t("cordova"),a=function(){e.landscape()?(s("portrait"),t("landscape")):(s("landscape"),t("portrait"))},r=Object.prototype.hasOwnProperty.call(window,"onorientationchange")?"orientationchange":"resize",window.addEventListener?window.addEventListener(r,a,!1):window.attachEvent?window.attachEvent(r,a):window[r]=a,a(),window.device=e}(),SD.common.device={desktop:device.desktop(),mobile:device.mobile(),tablet:device.tablet(),ios:device.ios(),android:device.android(),androidTablet:device.androidTablet(),ipad:device.ipad(),line:device.line()},SD.common.createEl.remove=function(e){e.parentNode.removeChild(e)},SD.common.dom.addEventListener=function(e,o,t){if(e.addEventListener)return e.addEventListener(o,t,!1);if("load"!==o||"SCRIPT"!==e.nodeName)return e.attachEvent("on"+o,t);var n,i=e.id;i||(i=(new Date).getTime()+Math.floor(10*Math.random()+1),e.id=i),n=setInterval(function(){document.getElementById(i)&&(t(),clearInterval(n))},300)},SD.adModNative=SD.adModNative||{},SD.adModNative.runativeGen=function(a){SD.common.createEl.js({src:"//cdn.run-syndicate.com/sdk/v1/n.js",class:"sitemaji_runative_api",handleOnLoad:function(){!function(){var e,o=a.domObj,t=a.runative||SD.config.runative;for(i=0;i<o.length;i++){if(e="",domObj=o[i],domObj.attr)for(var n in domObj.attr)e=t[domObj.model+"-"+domObj.attr[n]];e||(e=t[domObj.model]),domObj.dom.setAttribute("id",e.element_id),NativeAd(e)}}()}})},SD.adModYsm=SD.adModYsm||{},SD.adModYsm.checkDom=function(e){var o,t,n,i,a,d,r,s,c=e.dom?Array.isArray(e.dom)?e.dom:[e.dom]:SD.common.dom.getElementsByClassName(e.class),l=[];for(t=0,n=c.length;t<n;t++)if(""===c[t].innerHTML){if(s={},(i=c[t].getAttribute("model"))&&("300x50"===i&&(i="320x50"),d=(a=i.split("x"))[0],r=a[1],s.width=d,s.height=r,s.model=i),s.count=t,s.dom=c[t],e.attr&&c[t].getAttribute(e.attr)&&(s.attr={},s.attr[e.attr]=c[t].getAttribute(e.attr)),e.add)for(o in e.add)s[o]=e.add[o];l.push(s),c[t].innerHTML=" "}return l},SD.adModYsm.sitemajiGen=SD.adModYsm.sitemajiGen||{},SD.adModYsm.sitemajiGen.buildAd=function(e,o){var t,n,i,a,d,r,s,c,l,m,u,f,h,b=o.domObj,p=encodeURIComponent(location.href);if(!e)return console.warn("no content"),void(o.sitemajiBackfill&&o.sitemajiBackfill(o));for(t=0;t<b.length;t++)m=!0,n=b[t].dom,r=(d=(i=b[t].model).split("x"))[0],s=d[1],"320x101"===i&&(s="100"),(c=e["s"+i]).ad_size===i&&c.ad_list.length&&""!==c.ad_list[0].ad_type&&(m=!1,"img"===c.ad_list[0].ad_type?(a=o.sitemajiApp&&!0===o.sitemajiApp?'<a href="'+c.ad_list[0].ad_url+SD.config.hosthash+'" target="_blank">':'<a href="'+c.ad_list[0].ad_url+p+'" target="_blank">',a+='<img style="margin:0 auto;display:block;width:'+r+"px;height:"+s+'px;"src="'+decodeURIComponent(c.ad_list[0].ad_img)+'"></a>'):(u=decodeURIComponent(c.ad_list[0].ad_img),a='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="'+(f=r)+'" height="'+(h=s)+'" id="sitemajisystem"><param name="movie" value="'+decodeURIComponent(u)+'"><param name="allowScriptAccess" value="always"><embed src="'+decodeURIComponent(u)+'" width="'+f+'" height="'+h+'" allowscriptaccess="always"></embed></object>'),n.innerHTML=a,c.ad_list.shift()),m&&(o.sitemajiBackfill?((l=o).domObj=[b[t]],o.sitemajiBackfill(l)):SD.config.sitemaji&&SD.config.sitemaji.backfill&&((l=o).domObj=[b[t]],SD.config.sitemaji.backfill(l)))},SD.adModYsm.sitemajiGen.json=function(e){var o,t,n,i,a,d,r,s=e.domObj;for(SD.adModYsm.sitemajiGen.jsonCache=SD.adModYsm.sitemajiGen.jsonCache?SD.adModYsm.sitemajiGen.jsonCache:[],SD.adModYsm.sitemajiGen.jsonAdCache=SD.adModYsm.sitemajiGen.jsonAdCache?SD.adModYsm.sitemajiGen.jsonAdCache:[],SD.adModYsm.sitemajiGen.jsonCache.push(e),t=0,n=s.length;t<n;t++)if(s[t].dom.innerHTML=" ",document.getElementById("sitemaji_ad_json"+s[t].model))for(o=0;o<SD.adModYsm.sitemajiGen.jsonAdCache.length;o++)SD.adModYsm.sitemajiGen.jsonAdCache[o]["s"+s[t].model]&&((r=e).domObj=[s[t]],SD.adModYsm.sitemajiGen.buildAd(SD.adModYsm.sitemajiGen.jsonAdCache[o],r));else a=(i=new Date).getYear()+"-"+i.getUTCMonth()+"-"+i.getUTCDate()+"-"+i.getUTCHours()+"-"+parseInt(i.getMinutes()/5),d=e.sitemajiApp&&!0===e.sitemajiApp?SD.common.device.ios?"ai":"aa":SD.common.device.desktop?"d":"m",SD.common.createEl.js({src:"//ad.sitemaji.com/t/"+d+"_"+SD.config.hosthash+"_"+s[t].model+".json?v="+a,id:"sitemaji_ad_json"+s[t].model,handleError:e.sitemajiBackfill?c(s[t]):""});function c(s){return function(){var e,o,t,n,i,a,d,r;for(t=0,n=SD.adModYsm.sitemajiGen.jsonCache.length;t<n;t++){for(r=[],e=0,o=(i=(a=SD.adModYsm.sitemajiGen.jsonCache[t]).domObj).length;e<o;e++)s.model===i[e].model?((d=a).domObj=[i[e]],a.sitemajiBackfill(d)):r.push(i[e]);SD.adModYsm.sitemajiGen.jsonCache[t].domObj=r}}}getSitemajiad=function(e){var o,t,n,i,a,d,r,s;for(SD.adModYsm.sitemajiGen.jsonAdCache.push(e),n=0,i=SD.adModYsm.sitemajiGen.jsonCache.length;n<i;n++){for(s=[],o=0,t=(a=(d=SD.adModYsm.sitemajiGen.jsonCache[n]).domObj).length;o<t;o++)e["s"+a[o].model]?((r=d).domObj=[a[o]],SD.adModYsm.sitemajiGen.buildAd(e,r)):s.push(a[o]);SD.adModYsm.sitemajiGen.jsonCache[n].domObj=s}}},SD.adModYsm.ucfunnelCallbackCache=SD.adModYsm.ucfunnelCallbackCache||{arr:[],exe:!1},SD.adModYsm.ucfunnelGen=function(e){var o,t,n,i,a,d,r=e.domObj,s=e.ucfunnel||SD.config.ucfunnel;for(t=0;t<r.length;t++){if(d="",(i=r[t]).attr)for(n in i.attr)d=s[i.model+"-"+i.attr[n]];if(d||(d=s[i.model]),d.ad_width=i.width,d.ad_height=i.height,a=SD.common.createEl.get({tag:"ins",attr:{"data-ad_unit_id":d.ad_unit_id,class:"ucfad_async"},dom:i.dom}),s.insStyle&&s.insStyle[i.model])for(o in s.insStyle[i.model])a.style[o]=[s.insStyle[i.model][o]];l(c(d,a,i))}function c(n,i,a){return function(){var e,o,t;window.ucf.insertAd(n,i),"320x480"===a.model&&SD.common.device.mobile&&(e=setInterval(function(){if(a.dom.childNodes[0].childNodes[0]&&a.dom.childNodes[0].childNodes[0].childNodes[1]){if(SD.common.createEl.remove(a.dom.childNodes[0].childNodes[0].childNodes[1]),o=SD.common.createEl.get({tag:"span",dom:a.dom.childNodes[0].childNodes[0].childNodes[0]}),s.intersCloseStyle)for(t in s.intersCloseStyle)o.style[t]=s.intersCloseStyle[t];else o.style.position="absolute",o.style.top="5px",o.style.right="5px",o.style.width="40px",o.style.height="40px",o.style.zIndex="99999",o.style.background="url('//ad.sitemaji.com/static/close_circle.png') no-repeat",o.style.backgroundSize="contain",o.style.color="#fff",o.style.cursor="pointer";SD.common.dom.addEventListener(o,"click",function(){a.dom.childNodes[0].style.display="none"}),clearInterval(e)}},600),setTimeout(function(){clearInterval(e)},1e4))}}function l(e){var o,t,n;!0===SD.adModYsm.ucfunnelCallbackCache.exe?e():(n=document.getElementById("sitemaji_ucfunnel_api"),SD.adModYsm.ucfunnelCallbackCache.arr.push(e),n||SD.common.createEl.js({id:"sitemaji_ucfunnel_api",src:"//agent.aralego.com/sdk",handleOnLoad:function(){for(SD.adModYsm.ucfunnelCallbackCache.exe=!0,o=0,t=SD.adModYsm.ucfunnelCallbackCache.arr.length;o<t;o++)SD.adModYsm.ucfunnelCallbackCache.arr[o]()}}))}},function(){SD.config=SD.config||{},SD.config.ucfunnel={"300x250":{ad_unit_id:""},"728x90":{ad_unit_id:"ad-3377ED72689D288F3A998AD689B2D3D"},"160x600":{ad_unit_id:""},"300x600":{ad_unit_id:""},"320x50":{ad_unit_id:"ad-AE3EDE768D43E8BF8E92349EDB93BD8"},"300x100":{ad_unit_id:""}},SD.config.hosthash="9eb562274349",SD.config.siteName="99770";for(var e,o,t=SD.common.dom.getElementsByClassName("sitemaji_banner"),n=0;n<t.length;n++){var i=t[n],a=i.getAttribute("model")||"",d=i.getAttribute("type")||"",r=i.getAttribute("source")||"",s=i.getAttribute("position")||"";switch(adUnitType=a+"|"+d+"|"+r+"|"+s,adUnitType){case"728x90|adult||":o=i,SD.adModNative.runativeGen({domObj:SD.adModYsm.checkDom({dom:o}),runative:{"728x90":{element_id:"rn_ad_native_k9p6n",spot:"b61a779ad1b249c8abdd359673000f6e",type:"img-left",cols:3,rows:1,mobileEnabled:!1,title:"",titlePosition:"left",adsByPosition:"bottom-right",showLogoInfo:!0,styles:{image:{"padding-bottom":"90px"},label:{height:"72px","background-color":"#fff"},thumb:{"margin-bottom":0},container:{width:"728px",height:"90px",overflow:"hidden","background-color":"#fff"},headlineLink:{":hover":{color:"#C00"},"font-size":"12px","font-weight":"bold"},brandnameLink:{"font-size":"9px"}}}},sitemajiBackfill:SD.adModYsm.ucfunnelGen});break;default:e=i,SD.adModYsm.sitemajiGen.json({domObj:SD.adModYsm.checkDom({dom:e}),sitemajiBackfill:SD.adModYsm.ucfunnelGen})}}}();