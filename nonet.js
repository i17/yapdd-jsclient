//i17,http://pochemuby.net
var urli='/pdd/',oLcount=0;oL+='netL();';function split1(c,s,L)
{var l=s.length,i;if(!l)return['',c];i=c.indexOf(s);if(!L)L=!1;if(-1==i)return(L)?[c,'']:['',c];return[c.substring(0,i),c.substring(i+l)];}
function Lp(u)
{var d,a,p,s,l,r,x,xi,i,w;x=split1(unescape(u),'://');p=x[0];x=split1(x[1],'/');s=x[0];xi=split1(urli,'/');i=xi[1];x=split1(x[1],i,1);if((''!==x[0])&&(''===x[1]))
{i=false;l=x[0];r='';w=l;}
else
{w=x[1];x=split1(w,'#',1);l=x[0];r=(((''===l)||(''===x[1]))?'':'/')+x[1];};return{proto:p,server:s,i:i,l:l,r:r,was:w};}
function Lc(u)
{var lr=u.l+u.r,i=("s"==Y(u.i)),l=u.proto+'://'+u.server+'/'+(i?u.i:'');u.direct=lr;u.directf=l+lr;u.ajax=i?((''!==lr)?'#'+lr:'#'):!1;u.ajaxf=i?l+u.ajax:!1;u.href=i?u.ajaxf:u.directf;u.L=(L()!==u.href)}
var Lfix=null;function Lupdate()
{var l=L(),x;if(L_!==l)
{x=Lp(l);if(Lfix)Lfix(x);Lc(x);if(x.L)
{L(x.href);};}
setTimeout(Lupdate,500)}
function netL()
{oLcount++;var x=Lp(L_);if(Lfix)Lfix(x);Lc(x);if(x.L)L(x.href);setTimeout(Lupdate,50);}