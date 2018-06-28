//i17,http://pochemuby.net
var oL="",oRL="",uRL="",uL="Hrr();",_sn=0,_snv={},_pk="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",_pkl=_pk.length,Haa=[],Haai=0,L_=L(),uD=undefined;function pck(I){var r="",i=I;do{r+=_pk.charAt(i%_pkl);i=Math.floor(i/_pkl)}while(i>0);return r}
function sn(v,n){var I="j"+pck(++_sn);if(D(v)){n=D(n)?n:0;if(!D(_snv[n]))_snv[n]=[];_snv[n][I]=v;};return I}
function snv(I,n){n=D(n)?n:0;return _snv[n][I]}
Ha(window,"load",function(){eval(oL+oRL)});Ha(window,"unload",function(){eval(uRL+uL)});function wr(h){document.write(h);}
function isArray(o){return"[object Array]"==Object.prototype.toString.call(o)}
function Y(v){var t=typeof v;t=t.toString();return t.charAt(0)}
function D(v){return("u"!==Y(v))}
function E(I){with(document){return getElementById?getElementById(I):all?all[I]:layers?layers[I]:null}}
function I(i,d){with(E(i).style){if(!D(d))d=("none"==display);display=d?"inline":"none"};return d;}
function L(l){if(!l)return""+document.location;eval(uRL);window.location.href=l;eval(oRL);L_=l;return!1}
function F(i,s){with(E(i)){focus();if(!s)select();}}
function H(I,h,p){var l="E(I).innerHTML",r="=h";if(!D(h))return eval(l);if(D(p))r="+"+r;eval(l+r)}
function R(A,k){var i,t=[];for(i in A){if(k!==i){t[i]=A[i];}};return t;}
function T(s,h)
{var p=s.indexOf(" "),o
if(-1==p){p=s;}else p=s.substring(0,p);if(!D(h))h="";o=">"+h;switch(p.toLowerCase()){case"link":case"meta":case"br":case"hr":case"input":case"img":case"!doctype":s+=" /";break;default:o+="</"+p+">";}
return"<"+s+o}
function Q(s,q)
{if(!D(q))q="\'"
s=s.replace(/\\/g,"\\\\")
s=s.replace(/\n/g,"\\n")
s=s.replace(/\r/g,"\\r")
s=s.replace(/\0/g,"\\0")
s=s.replace(/\t/g,"\\t")
s=s.replace(/\v/g,"\\v")
s=s.replace(/\f/g,"\\f")
eval("var r=/"+q+"/g")
return q+s.replace(r,"\\"+q)+q}
function eF(e){return{e:e||window.event,t:e.target||e.srcElement,c:e.keyCode||e.which}}
function e13(e){return((13==e.c)&&(!1==e.e.ctrlKey)&&(!1==e.e.altKey))}
function Hc(e){e.e.stopPropagation?e.e.stopPropagation():(e.e.cancelBubble=!0)}
function Hs(e){e.e.preventDefault?e.e.preventDefault():(e.e.returnValue=!1)}
function eO(e){return(("keydown"==e)&&(!!window.opera))?"keypress":e}
function Ha(o,E,h,c)
{var e,k
if(!D(o))return;if("o"==Y(E)){for(k in E)Ha(o,E[k],h,c);}
else{e=eO(E);k=D(c)?c:!1;if(o.addEventListener){o.addEventListener(e,h,k)}
else{if(o.attachEvent){o.attachEvent("on"+e,h)}else o["on"+e]=h;}
if(!D(Haa[e]))Haa[e]=[];Haa[e][Haai++]=[o,h,k];}}
function Hr(o,E,h,c)
{var e,k,i,O
if("o"==Y(E)){for(k in E)Hr(o,E[k],h);}
else{e=eO(E);k=D(c)?c:!1;if(D(Haa[e]))
{for(i in Haa[e])
{O=Haa[e][i];if((o===O[0])&&(h===O[1])&&(k===O[2]))
{Haa[e]=R(Haa[e],i);break;}}
if(o.removeeListener){o.removeeListener(e,h,k)}
else{if(o.detache)o.detache("on"+e,h)}}}}
function Hrr()
{var e,i,O
for(e in Haa)
{for(i in Haa[e])
{O=Haa[e][i];Hr(O[0],e,O[1],O[2]);}}}
function Rp(f,r,s)
{var R="o"==Y(r),S="o"==Y(s),l=(f=[].concat(f)).length,r=[].concat(r),i=(s=[].concat(s)).length;while(j=0,i--)
while(s[i]=s[i].split(f[j]).join(R?r[j]||"":r[0]),++j<l);return S?s:s[0];}
