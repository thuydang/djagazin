var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var n=void 0,q=!0,r=null,t=!1,aa=encodeURIComponent,u=window,ba=Object,v=document,x=String,ca=decodeURIComponent;function da(a,b){return a.type=b}
var ea="appendChild",y="push",z="test",fa="exec",ga="width",A="replace",ha="getElementById",B="concat",ia="JSON",D="indexOf",ja="match",ka="readyState",E="createElement",F="setAttribute",G="getTime",la="getElementsByTagName",ma="substr",H="length",na="prototype",J="split",K="location",L="style",oa="removeChild",pa="call",M="getAttribute",N="charCodeAt",O="href",qa="action",P="apply",ra="attributes",Q="parentNode",sa="update",ta="height",R="join",ua="toLowerCase";var S=u,T=v,va=S[K],wa=function(){},xa=/\[native code\]/,U=function(a,b,c){return a[b]=a[b]||c},ya=function(a){for(var b=0;b<this[H];b++)if(this[b]===a)return b;return-1},za=function(a){a=a.sort();for(var b=[],c=n,e=0;e<a[H];e++){var d=a[e];d!=c&&b[y](d);c=d}return b},Aa=/&/g,Ba=/</g,Ca=/>/g,Da=/"/g,Ea=/'/g,Fa=function(a){return x(a)[A](Aa,"&amp;")[A](Ba,"&lt;")[A](Ca,"&gt;")[A](Da,"&quot;")[A](Ea,"&#39;")},V=function(){var a;if((a=ba.create)&&xa[z](a))a=a(r);else{a={};for(var b in a)a[b]=n}return a},
W=function(a,b){return ba[na].hasOwnProperty[pa](a,b)},Ga=function(a){if(xa[z](ba.keys))return ba.keys(a);var b=[],c;for(c in a)W(a,c)&&b[y](c);return b},Ha=function(a,b){a=a||{};for(var c in a)W(a,c)&&(b[c]=a[c])},Ia=function(a){return function(){S.setTimeout(a,0)}},Ja=function(a,b){if(!a)throw Error(b||"");},X=U(S,"gapi",{});var Ka=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[fa](a)||b[fa](a)))try{c=ca(a[2])}catch(d){}return c},La=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Ma=function(a){a=a[ja](La);var b=V();b.u=a[1];b.d=a[3]?[a[3]]:[];b.k=a[5]?[a[5]]:[];return b},Na=function(a){return a.u+(0<a.d[H]?"?"+a.d[R]("&"):"")+(0<a.k[H]?"#"+a.k[R]("&"):"")},Oa=function(a){var b=[];if(a)for(var c in a)W(a,c)&&a[c]!=r&&b[y](aa(c)+"="+aa(a[c]));return b},Pa=function(a,
b,c){a=Ma(a);a.d[y][P](a.d,Oa(b));a.k[y][P](a.k,Oa(c));return Na(a)};var Qa=function(a,b,c,e){if(S[c+"EventListener"])S[c+"EventListener"](a,b,t);else if(S[e+"tachEvent"])S[e+"tachEvent"]("on"+a,b)},Ta=function(a){var b=Ra;if("complete"!==T[ka])try{b()}catch(c){}Sa(a)},Sa=function(a){if("complete"===T[ka])a();else{var b=t,c=function(){if(!b)return b=q,a[P](this,arguments)};S.addEventListener?(S.addEventListener("load",c,t),S.addEventListener("DOMContentLoaded",c,t)):S.attachEvent&&(S.attachEvent("onreadystatechange",function(){"complete"===T[ka]&&c[P](this,arguments)}),
S.attachEvent("onload",c))}},Ua=function(a){for(;a.firstChild;)a[oa](a.firstChild)},Va={button:q,div:q,span:q};var Y;Y=U(S,"___jsl",V());U(Y,"I",0);U(Y,"hel",10);var Wa=function(a){return!Y.dpo?Ka(a,"jsh",Y.h):Y.h},Xa=function(a){var b=U(Y,"sws",[]);b[y][P](b,a)},Za=function(a){return U(U(Y,"H",V()),a,V())};var $a=U(Y,"perf",V()),ab=U($a,"g",V()),bb=U($a,"i",V());U($a,"r",[]);V();V();var cb=function(a,b,c){var e=$a.r;"function"===typeof e?e(a,b,c):e[y]([a,b,c])},db=function(a,b,c){ab[a]=!b&&ab[a]||c||(new Date)[G]();cb(a)},fb=function(a,b,c){b&&0<b[H]&&(b=eb(b),c&&0<c[H]&&(b+="___"+eb(c)),28<b[H]&&(b=b[ma](0,28)+(b[H]-28)),c=b,b=U(bb,"_p",V()),U(b,c,V())[a]=(new Date)[G](),cb(a,"_p",c))},eb=function(a){return a[R]("__")[A](/\./g,"_")[A](/\-/g,"_")[A](/\,/g,"_")};var gb=V(),hb=[],Z;Z={c:"callback",z:"sync",v:"config",j:"_c",o:"h",A:"platform",q:"jsl",TIMEOUT:"timeout",w:"ontimeout",C:"mh",B:"u"};hb[y]([Z.q,function(a){for(var b in a)if(W(a,b)){var c=a[b];"object"==typeof c?Y[b]=U(Y,b,[])[B](c):U(Y,b,c)}if(b=a[Z.B])a=U(Y,"us",[]),a[y](b),(b=/^https:(.*)$/[fa](b))&&a[y]("http:"+b[1])}]);var ib=decodeURI("%73cript");gb.m=function(a){var b=Y.ms||"https://apis.google.com";a=a[0];if(!a||0<=a[D](".."))throw"Bad hint";return b+"/"+a[A](/^\//,"")};
var jb=function(a){return a[R](",")[A](/\./g,"_")[A](/-/g,"_")},kb=function(a,b){for(var c=[],e=0;e<a[H];++e){var d=a[e];d&&0>ya[pa](b,d)&&c[y](d)}return c},lb=function(){var a=Wa(va[O]);if(!a)throw"Bad hint";return a},mb=function(a){var b=a[J](";"),c=gb[b.shift()],b=c&&c(b);if(!b)throw"Bad hint:"+a;return b},nb=/^[\/_a-zA-Z0-9,.\-!:=]+$/,ob=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,pb=/\/cb=/g,qb=/\/\//g,rb=function(a){var b=a[ja](qb),c=a[ja](pb);return!!c&&1===c[H]&&ob[z](a)&&nb[z](a)&&
!!b&&1===b[H]},tb=function(a){"loading"!=T[ka]?sb(a):T.write("<"+ib+' src="'+encodeURI(a)+'"></'+ib+">")},sb=function(a){var b=T[E](ib);b[F]("src",a);b.async="true";(a=T[la](ib)[0])?a[Q].insertBefore(b,a):(T.head||T.body||T.documentElement)[ea](b)},ub=function(a,b){var c=b&&b[Z.j];if(c)for(var e=0;e<hb[H];e++){var d=hb[e][0],f=hb[e][1];f&&W(c,d)&&f(c[d],a,b)}},wb=function(a,b){vb(function(){var c;c=b===Wa(va[O])?U(X,"_",V()):V();c=U(Za(b),"_",c);a(c)})},yb=function(a,b){var c=b||{};"function"==typeof b&&
(c={},c[Z.c]=b);ub(a,c);var e=a?a[J](":"):[],d=c[Z.o]||lb(),f=U(Y,"ah",V());if(!f["::"]||!e[H])xb(e||[],c,d);else{for(var m=[],h=r;h=e.shift();){var k=h[J]("."),k=f[h]||f[k[1]&&"ns:"+k[0]||""]||d,g=m[H]&&m[m[H]-1]||r,l=g;if(!g||g.hint!=k)l={hint:k,p:[]},m[y](l);l.p[y](h)}var w=m[H];if(1<w){var C=c[Z.c];C&&(c[Z.c]=function(){0==--w&&C()})}for(;e=m.shift();)xb(e.p,c,e.hint)}},xb=function(a,b,c){a=za(a)||[];var e=b[Z.c],d=b[Z.v],f=b[Z.TIMEOUT],m=b[Z.w],h=r,k=t;if(f&&!m||!f&&m)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
var g=U(Za(c),"r",[]).sort(),l=U(Za(c),"L",[]).sort(),w=[][B](g),C=function(a,b){if(k)return 0;S.clearTimeout(h);l[y][P](l,p);var f=((X||{}).config||{})[sa];f?f(d):d&&U(Y,"cu",[])[y](d);if(b){fb("me0",a,w);try{wb(b,c)}finally{fb("me1",a,w)}}e&&e();return 1};0<f&&(h=S.setTimeout(function(){k=q;m()},f));var p=kb(a,l);if(p[H]){var p=kb(a,g),s=U(Y,"CP",[]),I=s[H];s[I]=function(a){if(!a)return 0;fb("ml1",p,w);var b=function(){s[I]=r;return C(p,a)};if(0<I&&s[I-1])s[I]=b;else for(b();(b=s[++I])&&b(););};
if(p[H]){var Ya="loaded_"+Y.I++;X[Ya]=function(a){s[I](a);X[Ya]=r};a=mb(c);a=a[A]("__features__",jb(p))[A](/\/$/,"")+(g[H]?"/ed=1/exm="+jb(g):"")+("/cb=gapi."+Ya);if(!rb(a))throw"Bad URL "+a;g[y][P](g,p);fb("ml0",p,w);b[Z.z]||S.___gapisync?tb(a):sb(a)}else s[I](wa)}else C(p)};var vb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,yb("debug_error",function(){u.___jsl.hefn(b)})}else return a()};X.load=function(a,b){return vb(function(){return yb(a,b)})};var zb=function(a){var b=u.___jsl=u.___jsl||{};b[a]=b[a]||[];return b[a]},Ab=function(a){var b=u.___jsl=u.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Bb=function(a){return"object"===typeof a&&/\[native code\]/[z](a[y])},Cb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Bb(a[c])&&!Bb(b[c])?Cb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Bb(b[c])?[]:{},Cb(a[c],b[c])):a[c]=b[c])},Db=function(a){if(a&&!/^\s+$/[z](a)){for(;0==a[N](a[H]-
1);)a=a.substring(0,a[H]-1);var b;try{b=u[ia].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(e){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(d){}return"object"===typeof b?b:{}}},$=function(a){if(!a)return Ab();a=a[J]("/");for(var b=Ab(),c=0,e=a[H];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[H]&&b!==n?b:n},Eb=function(){Ab(q);var a=u.___gcfg,b=zb("cu");if(a&&a!==u.___gu){var c={};Cb(c,a);b[y](c);
u.___gu=a}var a=zb("cu"),e=v.scripts||v[la]("script")||[],c=[],d=[];d[y][P](d,zb("us"));for(var f=0;f<e[H];++f)for(var m=e[f],h=0;h<d[H];++h)m.src&&0==m.src[D](d[h])&&c[y](m);0==c[H]&&(0<e[H]&&e[e[H]-1].src)&&c[y](e[e[H]-1]);for(e=0;e<c[H];++e)c[e][M]("gapi_processed")||(c[e][F]("gapi_processed",q),(d=c[e])?(f=d.nodeType,d=3==f||4==f?d.nodeValue:d.textContent||d.innerText||d.innerHTML||""):d=n,(d=Db(d))&&a[y](d));e=zb("cd");a=0;for(c=e[H];a<c;++a)Cb(Ab(),e[a]);e=zb("ci");a=0;for(c=e[H];a<c;++a)Cb(Ab(),
e[a]);a=0;for(c=b[H];a<c;++a)Cb(Ab(),b[a])};var Fb=function(){var a=u.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),U(Y,"ci",[])[y](a),u.__GOOGLEAPIS=n)};var Gb=u.console,Hb=Gb&&Gb.log||function(){};var Ib=U(Y,"rw",V()),Jb=function(a,b){var c=Ib[a];c&&c.state<b&&(c.state=b)};var Kb=function(a){var b;a[ja](/^https?%3A/i)&&(b=ca(a));b=b?b:a;var c=v;a=c[E]("div");c=c[E]("a");c.href=b;a[ea](c);a.innerHTML=a.innerHTML;b=x(a.firstChild[O]);a[Q]&&a[Q][oa](a);return b},Lb=function(a){a=a||"canonical";for(var b=v[la]("link"),c=0,e=b[H];c<e;c++){var d=b[c],f=d[M]("rel");if(f&&f[ua]()==a&&(d=d[M]("href")))return Kb(d)}return u[K][O]};var Mb=function(){var a=Y.onl;if(!a){a=V();Y.onl=a;var b=V();a.e=function(a){var e=b[a];e&&(delete b[a],e())};a.a=function(a,e){b[a]=e};a.r=function(a){delete b[a]}}return a},Nb=function(a,b){var c=b.onload;return"function"===typeof c?(Mb().a(a,c),c):r},Ob=function(a){Ja(/^\w+$/[z](a),"Unsupported id - "+a);Mb();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},Pb=function(a){Mb().r(a)};var Qb={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},Rb={allowtransparency:q,onload:q},Sb=0,Tb=function(a,b,c,e,d){var f,m=Nb(e,c),h=m?Ob(e):"";try{f=a[E]('<iframe frameborder="'+Fa(c.frameborder)+'" scrolling="'+Fa(c.scrolling)+'" '+h+' name="'+Fa(c.name)+'"/>')}catch(k){f=a[E]("iframe"),m&&(f.onload=function(){f.onload=r;m[pa](this)},Pb(e))}for(var g in c)a=c[g],"style"===g&&"object"===typeof a?
Ha(a,f[L]):Rb[g]||f[F](g,x(a));g=d&&d.beforeNode||r;!g&&(!d||!d.dontclear)&&Ua(b);b.insertBefore(f,g);f=g?g.previousSibling:b.lastChild;c.allowtransparency&&(f.allowTransparency=q);return f};var Ub=function(){return r};var Vb=/:([a-zA-Z_]+):/g,Wb={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},Xb="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),Yb=r,Zb=U(Y,"WI",V()),$b=function(){var a=$("googleapis.config/sessionIndex");a==r&&(a=u.__X_GOOG_AUTHUSER);if(a==r){var b=u.google;b&&(a=b.authuser)}a==r&&(a=n,a==r&&(a=u[K][O]),a=a?Ka(a,"authuser")||r:r);return a==r?r:x(a)},ac=function(a,b){if(!Yb){var c=$("iframes/:socialhost:"),e=$b()||"0",d=$b();Yb={socialhost:c,
session_index:e,session_prefix:d!==n&&d!==r&&""!==d?"u/"+d+"/":"",im_prefix:$("googleapis.config/signedIn")===t?"_/im/":""}}return Yb[b]||""},bc=["style","data-gapiscan"],cc=function(a){var b=n;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},dc=function(){};var ec,fc,gc,hc,ic,jc=/(?:^|\s)g-((\S)*)(?:$|\s)/;ec=U(Y,"SW",V());fc=U(Y,"SA",V());gc=U(Y,"SM",V());hc=U(Y,"FW",[]);ic=r;
var lc=function(a,b){kc(n,t,a,b)},kc=function(a,b,c,e){db("ps0",q);c=("string"===typeof c?v[ha](c):c)||T;var d;d=T.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=e?[e]:Ga(ec)[B](Ga(fc))[B](Ga(gc));for(var f=[],m=0;m<d[H];m++){var h=d[m];f[y](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(f[R](","))}else d=c[la]("*");c=V();for(f=0;f<d[H];f++){m=d[f];var k=m,h=e,g=k.nodeName[ua](),l=n;k[M]("data-gapiscan")?h=r:(0==g[D]("g:")?l=g[ma](2):(k=(k=x(k.className||k[M]("class")))&&jc[fa](k))&&(l=k[1]),h=l&&(ec[l]||
fc[l]||gc[l])&&(!h||l===h)?l:r);h&&(m[F]("data-gapiscan",q),U(c,h,[])[y](m))}if(b)for(var w in c){b=c[w];for(e=0;e<b[H];e++)b[e][F]("data-onload",q)}for(var C in c)hc[y](C);db("ps1",q);((w=hc[R](":"))||a)&&X.load(w,a);if(mc(ic||{}))for(var p in c){a=c[p];C=0;for(b=a[H];C<b;C++)a[C].removeAttribute("data-gapiscan");nc(p)}else{e=[];for(p in c){a=c[p];C=0;for(b=a[H];C<b;C++){m=a[C];d=p;h=f=m;m=V();l=0!=h.nodeName[ua]()[D]("g:");k=0;for(g=h[ra][H];k<g;k++){var s=h[ra][k],I=s.name,s=s.value;0<=ya[pa](bc,
I)||(l&&0!=I[D]("data-")||"null"===s)||(l&&(I=I[ma](5)),m[I[ua]()]=s)}l=m;h=h[L];(k=cc(h&&h[ta]))&&(l.height=x(k));(h=cc(h&&h[ga]))&&(l.width=x(h));oc(d,f,m,e,b)}}pc(w,e)}},qc=function(a){var b=U(X,a,{});b.go||(b.go=function(b){return lc(b,a)},b.render=function(b,e){var d=e||{};da(d,a);var f=d.type;delete d.type;var m=("string"===typeof b?v[ha](b):b)||n;if(m){var h={},k;for(k in d)W(d,k)&&(h[k[ua]()]=d[k]);h.rd=1;d=[];oc(f,m,h,d,0);pc(f,d)}else Hb("string"==="gapi."+f+".render: missing element "+
typeof b?b:"")})},rc=function(a){ec[a]=q},sc=function(a){fc[a]=q},tc=function(a){gc[a]=q};var nc=function(a,b){var c=U(Y,"watt",V())[a];b&&c?(c(b),(c=b.iframeNode)&&c[F]("data-gapiattached",q)):X.load(a,function(){var c=U(Y,"watt",V())[a],d=b&&b.iframeNode;!d||!c?(0,X[a].go)(d&&d[Q]):(c(b),d[F]("data-gapiattached",q))})},mc=function(){return t},pc=function(){},oc=function(a,b,c,e,d){switch(uc(b,a)){case 0:a=gc[a]?a+"_annotation":a;e={};e.iframeNode=b;e.userParams=c;nc(a,e);break;case 1:var f;if(b[Q]){var m=q;c.dontclear&&(m=t);delete c.dontclear;var h,k,g;k=g=a;"plus"==a&&c[qa]&&(g=a+
"_"+c[qa],k=a+"/"+c[qa]);(g=$("iframes/"+g+"/url"))||(g=":socialhost:/_/widget/render/"+k);k=g[A](Vb,ac);g={};Ha(c,g);g.hl=$("lang")||"en-US";g.origin=u[K].origin||u[K].protocol+"//"+u[K].host;g.exp=$("iframes/"+a+"/params/exp");var l=$("iframes/"+a+"/params/location");if(l)for(var w=0;w<l[H];w++){var C=l[w];g[C]=S[K][C]}switch(a){case "plus":l=g[O];w=c[qa]?n:"publisher";l=(l="string"==typeof l?l:n)?Kb(l):Lb(w);g.url=l;delete g[O];break;case "plusone":case "recobox":g.url=c[O]?Kb(c[O]):Lb();l=c.db;
w=$();l==r&&w&&(l=w.db,l==r&&(l=w.gwidget&&w.gwidget.db));g.db=l||n;l=c.ecp;w=$();l==r&&w&&(l=w.ecp,l==r&&(l=w.gwidget&&w.gwidget.ecp));g.ecp=l||n;delete g[O];break;case "signin":g.url=Lb()}g.hl=$("lang")||"en-US";Y.ILI&&(g.iloader="1");delete g["data-onload"];delete g.rd;g.gsrc=$("iframes/:source:");l=$("inline/css");"undefined"!==typeof l&&(0<d&&l>=d)&&(g.ic="1");l=/^#|^fr-/;d={};for(h in g)W(g,h)&&l[z](h)&&(d[h[A](l,"")]=g[h],delete g[h]);h=[][B](Xb);l=$("iframes/"+a+"/methods");"object"===typeof l&&
xa[z](l[y])&&(h=h[B](l));for(var p in c)if(W(c,p)&&/^on/[z](p)&&("plus"!=a||"onconnect"!=p))h[y](p),delete g[p];delete g.callback;d._methods=h[R](",");h=Pa(k,g,d);p={allowPost:1,attributes:Wb};p.dontclear=!m;m={};m.userParams=c;m.url=h;da(m,a);c.rd?k=b:(k=v[E]("div"),b[F]("data-gapistub",q),k[L].cssText="position:absolute;width:100px;left:-10000px;",b[Q].insertBefore(k,b));m.siteElement=k;k.id||(b=k,U(Zb,a,0),g="___"+a+"_"+Zb[a]++,b.id=g);b=V();b[">type"]=a;Ha(c,b);k[F]("data-gwattr",Oa(b)[R](":"));
c=k;k=p||{};b=k[ra]||{};Ja(!k.allowPost||!b.onload,"onload is not supported by post iframe");!k.rpctoken&&!Ka(h,"rpctoken")&&(k.rpctoken=Ub());b=c.ownerDocument||T;g=0;do p=k.id||["I",Sb++,"_",(new Date)[G]()][R]("");while(b[ha](p)&&5>++g);Ja(5>g,"Error creating iframe id");var s;d=b[K][O];g=V();(l=Ka(d,"_bsh",Y.bsh))&&(g._bsh=l);(d=Wa(d))&&(g.jsh=d);d=V();d.id=p;d.parent=b[K].protocol+"//"+b[K].host;l=Ka(b[K][O],"id","");w=Ka(b[K][O],"pfname","");(l=l?w+"/"+l:"")&&(d.pfname=l);k.rpctoken&&(d.rpctoken=
k.rpctoken);k.hintInFragment?Ha(g,d):s=g;s=Pa(h,s,d);g=V();Ha(Qb,g);Ha(k[ra],g);g.name=g.id=p;g.src=s;if((k||{}).allowPost&&2E3<s[H]){h=Ma(s);g.src="";g["data-postorigin"]=s;s=Tb(b,c,g,p);-1!=navigator.userAgent[D]("WebKit")&&(f=s.contentWindow.document,f.open(),g=f[E]("div"),d={},l=p+"_inner",d.name=l,d.src="",d.style="display:none",Tb(b,g,d,l,k));g=(k=h.d[0])?k[J]("&"):[];k=[];for(d=0;d<g[H];d++)l=g[d][J]("=",2),k[y]([ca(l[0]),ca(l[1])]);h.d=[];g=Na(h);h=b[E]("form");h.action=g;h.method="POST";
h.target=p;h[L].display="none";for(p=0;p<k[H];p++)g=b[E]("input"),da(g,"hidden"),g.name=k[p][0],g.value=k[p][1],h[ea](g);c[ea](h);h.submit();h[Q][oa](h);f&&f.close();f=s}else f=Tb(b,c,g,p,k);m.iframeNode=f;m.id=f[M]("id");f=m.id;s=V();s.id=f;s.userParams=m.userParams;s.url=m.url;da(s,m.type);s.state=1;Ib[f]=s;f=m}else f=r;f&&((s=f.id)&&e[y](s),nc(a,f))}},uc=function(a,b){if(a&&1===a.nodeType&&b)if(gc[b]){if(Va[a.nodeName[ua]()]){var c=a.innerHTML;return c&&c[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}}else{if(fc[b])return 0;
if(ec[b])return 1}return r};U(X,"platform",{}).go=lc;var mc=function(a){for(var b=[Z.j,Z.q,Z.o],c=0;c<b[H]&&a;c++)a=a[b[c]];b=Wa(va[O]);return!a||0!=a[D]("n;")&&0!=b[D]("n;")&&a!==b},pc=function(a,b){vc(a,b)},Ra=function(a){kc(a,q)},wc=function(a,b){for(var c=b||[],e=0;e<c[H];++e)a(c[e]);for(e=0;e<c[H];e++)qc(c[e])};hb[y]([Z.A,function(a,b,c){ic=c;b&&hc[y](b);wc(rc,a);wc(sc,c[Z.j].annotation);wc(tc,c[Z.j].bimodal);Fb();Eb();if("explicit"!=$("parsetags")){Xa(a);var e;if(c&&(a=c[Z.c]))e=Ia(a),delete c[Z.c];Ta(function(){Ra(e)})}}]);var xc=function(a){a=(a=Ib[a])?a.oid:n;if(a){var b=T[ha](a);b&&b[Q][oa](b);delete Ib[a];xc(a)}},dc=function(a,b,c){if(c[ga]&&c[ta]){a[L].cssText="";a:{c=c||{};var e=Y.ssfn;if(e&&e(n)){if("number"===typeof Y.ucs)break a;var d=b.id;if(d){e=(e=Ib[d])?e.state:n;if(1===e||4===e)break a;xc(d)}}e=c[ga];c=c[ta];var f=a[L];f.textIndent="0";f.margin="0";f.padding="0";f.background="transparent";f.borderStyle="none";f.cssFloat="none";f.styleFloat="none";f.lineHeight="normal";f.fontSize="1px";f.verticalAlign=
"baseline";a[L].display="inline-block";a=b[L];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");d&&Jb(d,3)}b["data-csi-wdt"]=(new Date)[G]()}};var yc=/^\{h\:'/,zc=/^!_/,vc=function(a,b){function c(){Qa("message",e,"remove","de")}function e(e){var m=e.data,h=e.origin;if(Ac(m,b)){var k=d;d=t;k&&db("rqe");Bc(a,function(){k&&db("rqd");c();for(var a=U(Y,"RPMQ",[]),b=0;b<a[H];b++)a[b]({data:m,origin:h})})}}if(!(0===b[H]||!u[ia]||!u[ia].parse)){var d=q;Qa("message",e,"add","at");yb(a,c)}},Ac=function(a,b){a=x(a);if(yc[z](a))return q;a=a[A](zc,"");if(!/^\{/[z](a))return t;try{var c=u[ia].parse(a)}catch(e){return t}if(!c)return t;var d=c.f;if(c.s&&
d&&-1!=ya[pa](b,d)){if("_renderstart"===c.s){var c=c.a&&c.a[1],f=T[ha](d);Jb(d,2);(d=Ib[d])&&(d.args=c);c&&f&&dc(f[Q],f,c)}return q}return t},Bc=function(a,b){yb(a,b)};var Cc=function(){};var Dc=function(){this.b=[];this.l=[];this.t=[];this.i=[];this.i[0]=128;for(var a=1;64>a;++a)this.i[a]=0;this.reset()};(function(){function a(){}a.prototype=Cc[na];Dc.D=Cc[na];Dc.prototype=new a})();Dc[na].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.n=this.g=0};
var Ec=function(a,b,c){c||(c=0);var e=a.t;if("string"==typeof b)for(var d=0;16>d;d++)e[d]=b[N](c++)<<24|b[N](c++)<<16|b[N](c++)<<8|b[N](c++);else for(d=0;16>d;d++)e[d]=b[c++]<<24|b[c++]<<16|b[c++]<<8|b[c++];for(d=16;80>d;d++){var f=e[d-3]^e[d-8]^e[d-14]^e[d-16];e[d]=(f<<1|f>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var m=a.b[2],h=a.b[3],k=a.b[4],g,d=0;80>d;d++)40>d?20>d?(f=h^c&(m^h),g=1518500249):(f=c^m^h,g=1859775393):60>d?(f=c&m|h&(c|m),g=2400959708):(f=c^m^h,g=3395469782),f=(b<<5|b>>>27)+f+k+g+e[d]&
4294967295,k=h,h=m,m=(c<<30|c>>>2)&4294967295,c=b,b=f;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+m&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+k&4294967295};Dc[na].update=function(a,b){b===n&&(b=a[H]);for(var c=b-64,e=0,d=this.l,f=this.g;e<b;){if(0==f)for(;e<=c;)Ec(this,a,e),e+=64;if("string"==typeof a)for(;e<b;){if(d[f++]=a[N](e++),64==f){Ec(this,d);f=0;break}}else for(;e<b;)if(d[f++]=a[e++],64==f){Ec(this,d);f=0;break}}this.g=f;this.n+=b};var Fc=S.crypto,Gc=t,Hc=0,Ic=0,Jc=1,Kc=0,Lc="",Mc=function(a){a=a||S.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[G]()%1E6);Jc=Jc*b%Kc;0<Hc&&++Ic==Hc&&Qa("mousemove",Mc,"remove","de")},Nc=function(a){var b=new Dc;b[sa](a);a=[];var c=8*b.n;56>b.g?b[sa](b.i,56-b.g):b[sa](b.i,64-(b.g-56));for(var e=63;56<=e;e--)b.l[e]=c&255,c/=256;Ec(b,b.l);for(e=c=0;5>e;e++)for(var d=24;0<=d;d-=8)a[c++]=b.b[e]>>d&255;b="";for(e=0;e<a[H];e++)b+="0123456789ABCDEF".charAt(Math.floor(a[e]/
16))+"0123456789ABCDEF".charAt(a[e]%16);return b},Gc=!!Fc&&"function"==typeof Fc.getRandomValues;Gc||(Kc=1E6*(screen[ga]*screen[ga]+screen[ta]),Lc=Nc(T.cookie+"|"+T[K]+"|"+(new Date)[G]()+"|"+Math.random()),Hc=$("random/maxObserveMousemove")||0,0!=Hc&&Qa("mousemove",Mc,"add","at"));var Oc=function(){var a=Jc,a=a+parseInt(Lc[ma](0,20),16);Lc=Nc(Lc);return a/(Kc+Math.pow(16,20))},Pc=function(){var a=new S.Uint32Array(1);Fc.getRandomValues(a);return Number("0."+a[0])};Ub=function(){return x(Math.round(1E8*(Gc?Pc():Oc())))};db("bs0",q,u.gapi._bs);db("bs1",q);delete u.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[102,100,71,98,96,79,74,104,45,17,86,81,92,94,61,30,90],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"isPlusUser":false,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"https://talkgadget.google.com/widget/go?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.xLkSDnDPklw.O/m\u003d__features__/am\u003dgQI/rt\u003dj/d\u003d1/rs\u003dAItRSTMdBKeoHA-Bv_XkKH2fqP0uBd5YpA","u":"http://apis.google.com/js/plusone.js","hee":true,"fp":"b64ecd04a0a505f37b2ee2f93c3e5a2df4b438a5","dpo":false},"platform":["additnow","identity","plus","plusone","recobox","savetodrive","savetowallet","notifications","hangout"],"fp":"b64ecd04a0a505f37b2ee2f93c3e5a2df4b438a5","annotation":["autocomplete","profile"],"bimodal":[]}});