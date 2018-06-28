//i17,http://pochemuby.net
oL+='yapddL();';

oRL+='yapddRL();';

function num(n){return ' '+T('span class="n"','#'+n)}  // нумерация пунктов

var tkn_="",bodyI="bodyI",tit0=document.title,tknI,domainI,nextI=null,
repl={
       tkn:{n:"token"},
   u_login:{n:"новый login"},
     login:{n:"login"},
u_password:{n:"новый пароль"},
  password:{n:"пароль"},
     iname:{n:"Имя",speech:1},
     fname:{n:"Фамилия",speech:1},
     hintq:{n:"секретный вопрос",speech:1,f:"hintR(35,1);",fdesc:"<- random"},
     hinta:{n:"ответ на него",speech:1,f:"hintR(29);",fdesc:"<- random"},
       sex:{n:"пол пользователя",a:["0","1","2"],v:["не указан","мужской","женский"]},
   address:{n:"на email"},
      copy:{n:"оставлять копию",t:"yes",a:["yes","no"],v:["да","нет"]},
 filter_id:{n:"filter id"},
      page:{n:"страницу №",t:"1"},
   on_page:{n:"логинов на странице (100&nbsp;max)",t:"100"},
    domain:{n:"домен"},
  oauthtkn:{n:"короткоживущий токен"},
   err_url:{n:"URL страницы ошибки",esc:1},
callback_url:{n:"callback-URL",esc:1},
 add_admin:{n:"login в ya.ru"},
   ml_name:{n:"общий список рассылки"}
},
pddLink0="https://mail.yandex.ru/for/",
pddLinkUPDD0="https://pdd.yandex.ru/domain/",
pddAPI0="https://pddimp.yandex.ru/",
pddAPI={
//http://pdd.yandex.ru/help/section72/

get_token:{
	n:"Активировать API v1"+num(1),
	desc:"Для этого необходимо получить авторизационный токен (последовательность символов)."+
		" Для получения токена необходимо иметь подключенный домен, авторизоваться его администратором,"+
		" вписать название домена и перейти по нижеследующему адресу."+
		" Полученный токен используется для обращения к остальным методам API. <span class='red'>Получать его нужно только один раз</span>.",
	confirm:"Таки да?",
	tpl:"get_token.xml?domain_name={domain}"
	},

reg_user_token:{
	n:"Зарегистрировать пользователя"+num(2),
	tpl:"reg_user_token.xml?token={tkn}&u_login={login}&u_password={u_password}"
	//раньше было u_login={u_login}, чтобы в других местах логин не менялся
	},

delete_user:{
	n:"Удалить пользователя"+num(3),
	confirm:"Таки да?",
	tpl:"delete_user.xml?token={tkn}&login={login}"
	},

edit_user:{
	n:"Отредактировать данные пользователя"+num(4),
	tpl:"edit_user.xml?token={tkn}&domain_name={domain}&login={login}",
	maybe:{password:1,iname:1,fname:1,hintq:1,hinta:1,sex:1}
	//Возвращает
	//<ok uid="..."/> или <error reason='...'/>
	},

get_user_info:{
	n:"Получить данные пользователя"+num(10),
	tpl:"get_user_info.xml?token={tkn}&login={login}"
	},

get_domain_users:{
	n:"Получить список ящиков"+num(11),
	tpl:"get_domain_users.xml?token={tkn}&page={page}&on_page={on_page}"
	},

check_user:{
	n:"Проверить пользователя на существование"+num(16),
	tpl:"check_user.xml?token={tkn}&login={login}"
	//Возвращает:
	//<result>nouser</result>, если такого пользователя нет и <result>exists</result>, если такой пользователь есть
	},

set_forward:{
	n:"Установить переадресацию"+num(15),
	tpl:"set_forward.xml?token={tkn}&login={login}&address={address}&copy={copy}"
	},

get_forward_list:{
	n:"18. Получить список переадресаций и фильтров"+num(18),
	tpl:"get_forward_list.xml?token={tkn}&login={login}"
	//Возвращает
	//<ok><filters><filter>...</filter>...</filters></ok> или <error reason='...'/>
	},

delete_forward:{
	n:"Удалить переадресацию или фильтр"+num(19),
	confirm:"Таки да?",
	tpl:"delete_forward.xml?token={tkn}&login={login}&filter_id={filter_id}"
	//Возвращает
	//<ok/> или <error reason='...'/>
	},

user_oauth_token:{
	n:"Получить короткоживущий (30 секунд) токен для авторизации в веб-интерфейсе Почты"+num(27),
	tpl:"api/user_oauth_token.xml?domain={domain}&token={tkn}&login={login}"
	},

user_oauth:{
	n:"Авторизоваться по короткоживущему токену из #27"+num(28),
	tpl:"http://passport.yandex.ru/passport?mode=oauth&error_retpath={err_url}&access_token={oauthtkn}&type=trusted-pdd-partner"
	},

get_mail_info:{
	n:"Получить количество непрочитанных писем"+num(9),
	tpl:"get_mail_info.xml?token={tkn}&login={login}"
	},

set_mail_callback:{
	n:"Установить авторизационный URL-колбэк (что это?)"+num(29),
	confirm:"Таки да? а что это такое?",
	tpl:"api/set_mail_callback.xml?domain_name={domain}&callback={callback_url}&token={tkn}"
	},

add_admin:{
	n:"Добавить дополнительного администратора для домена"+num(30),
	desc:"Дополнительный администратор может авторизовываться на странице pdd.yandex.ru,"+
		" видеть у себя в списке доменов все добавленные ему домены, и совершать все действия с ящиками на этом домене."+
		"<br><font color='red'>Внимание! Не ошибитесь в логине дополнительного администратора,"+
		" иначе вы предоставите доступ постороннему человеку к своим почтовым ящикам."+
		" После вызова метода обязательно разлогиньтесь, авторизуйтесь под дополнительным администратором"+
		" и проверьте, что у него на странице"+
		" <a href='http://pdd.yandex.ru/' target=_blank>http://pdd.yandex.ru/</a> появился домен</font>",
	confirm:"Таки да? А тому ли ты дала?",
	tpl:"api/multiadmin/add_admin.xml?domain={domain}&token={tkn}&login={add_admin}"
	},

del_admin:{
	n:"Удалить дополнительного администратора для домена"+num(31),
	confirm:"Таки да?",
	tpl:"api/multiadmin/del_admin.xml?domain={domain}&token={tkn}&login={add_admin}"
	},

get_admins:{
	n:"Список дополнительных администраторов домена"+num(32),
	tpl:"api/multiadmin/get_admins.xml?domain={domain}&token={tkn}"
	},

create_general_ml:{
	n:"Создать общий список рассылки, в котором всегда будут все пользователи домена (#33a)",
	confirm:"Таки да?",
	tpl:"api/create_general_maillist.xml?token={tkn}&domain={domain}&ml_name={ml_name}"
	},

del_general_ml:{
	n:"Удалить общий список рассылки (#33б)",
	confirm:"Таки да?",
	tpl:"api/delete_general_maillist.xml?token={tkn}&domain={domain}"
	}

};


var LprGlue=['#','/','='];

function Lpr(l)
{
var s=l.split(LprGlue[0]),p=s[1]?s[1].split(LprGlue[1]):[],i,x,d=[];
for(i in p)
	{
	x=p[i].split(LprGlue[2]);
	d[i]={ns:x[0],tkn:x[1]?x[1]:""};
	};
return{sets:s[0],domains:d};
}

function Lprc(p)
{
var x=[],i;
for(i in p.domains)
	{
	x[i]=p.domains[i].ns+LprGlue[2]+p.domains[i].tkn;
	};
return p.sets+LprGlue[0]+x.join(LprGlue[1]);
}


function tit(n){document.title=(n.length)?n+' - '+tit0:tit0;}

function yapddL()
{bodyR();//var e=E(tknI);
var b=E(bodyI);
//Ha(e,"change",yapddLrenew);
//Ha(e,"focus",tknA);
//Ha(e,"blur",tknP);
//Ha(e,"keydown",tknE);

//H()
//if()
var fI=domainI;

tit(E(fI).value);

if(56==E(tknI).value.length)
	{	fI=nextI;
	}
else
	{	fI=tknI;
	if(
			(""==E(tknI).value)
		&&
			(""==E(domainI).value)
		)fI=domainI;
	};

F(fI);

//F(tknI);
Ha(b,"change",chkChgs);
Ha(b,"keydown",chkChgsK);
Ha(b,"click",tplC);
Ha(E("yapi"),"click",yapiC);
}


var params={sets:"",domains:[]};
Lfix=yapddLfix;
function yapddLfix(x)
{params=Lpr(x.r);
x.r=Lprc(params);
}


function yapddLrenew()
{
var l=L(),x=Lp(l);
//if(params.domains.length)
//	{//	params.domains[0].tkn=E(tknI).value;
//	}
//else
//	{	params.domains[0]={ns:E(domainI).value,tkn:E(tknI).value};
	tit(params.domains[0].ns);
//	};
x.r=Lprc(params);
Lc(x);
//H("xx",O(x),1);
if(x.L)L(x.href);
}


function yapddRL()
{
tkn_=params.domains[0]?params.domains[0].tkn:"";
params=Lpr(Lp(L()).r);
//H("xx",O(params));
//x.r=Lprc(params);
//Lc(x);
//H("xx",O(x),1);
//if(x.L)L(x.href);
var tkn=params.domains[0]?params.domains[0].tkn:"";
if(tkn_!==tkn)
	{
	//E(tknI).value=tkn;
	tknChg();
	};
}


function tknChg()
{
bodyR();
tkn_=params.domains[0]?params.domains[0].tkn:"";
}


function tknP(){//passive
var e=E(tknI);
e.style.backgroundColor='#eedddd';
e.style.color='#111111';
}


function tknA(){//active
var e=E(tknI);
e.select();
e.style.backgroundColor='';
e.style.color='';
}


function tknE(e){if(e13(eF(e))){
yapddLrenew();
}}




function replUpd()
{var r,h="",s;
for(r in repl)
	{
	repl[r].w="{"+r+"}";
	switch(r)
		{		case"tkn":
			repl[r].t=params.domains[0]?params.domains[0].tkn:"";
			break;

		case"domain":
			repl[r].t=params.domains[0]?params.domains[0].ns:"";
			break;

		default:
			if(!D(repl[r].t))
				{				repl[r].t="";
				};
		};
	};
}


function bodyR()
{var i,r,o,I,II,h="",hh,s,pdd;
replUpd();

	h+='<table width="100%">';
			h+="<tr>";

			r="domain";
			h+=T('td class="tar pr5" width="20%"',repl[r].n);
			h+="<td>";
			I=sn({y:'<',r:r},'b');
			domainI=I;
			h+=T('input type="text" style="width:100%;" id="'+I+'" value='+Q(repl[r].t))
			h+="</td>";

			h+="</tr>";

			
			h+="<tr>";

			r="domainH";
			h+=T('td class="tar pr5" width="20%"','<span class="red">Я</span>ПДД');
			h+="<td>";
			I=sn({y:'>',r:r},'b');
			s=pddLink0+repl["domain"].t;
			h+=T('a href='+Q(s)+' id="'+I+'" target="_blank"',s)
			h+="</td>";

			h+="</tr>";

			
			h+="<tr>";

			r="domainHpdd";
			h+=T('td class="tar pr5" width="20%"','управление &nbsp;<span class="red">Я</span>ПДД');
			h+="<td>";
			I=sn({y:'>',r:r},'b');
			s=pddLinkUPDD0+repl["domain"].t;
			h+=T('a href='+Q(s)+' id="'+I+'" target="_blank"',s)
			//s='https://pdd.yandex.ru/';
			//h+=" ("+T('a href='+Q(s)+' target="_blank"',s)+")"
			h+="</td>";

			h+="</tr>";

			
			h+="<tr>";

			r="tkn";
			h+=T('td class="tar pr5" width="20%"',repl[r].n);
			h+="<td>";
			I=sn({y:'<',r:r},'b');
			tknI=I;
			h+=T('input type="text" style="width:100%;" id="'+I+'" value='+Q(repl[r].t))
			h+="</td>";

			h+="</tr>";
	h+='</table>';


for(i in pddAPI)
	{
	pdd=pddAPI[i];
	h+='<fieldset class="rad fs">'+T('legend class="rad lg"',T("b",pdd.n));
	h+=D(pdd.desc)?pdd.desc:"";
	s=pdd.tpl;
	h+='<table width="100%">';
	for(r in repl)
		{		if("tkn"===r)continue;
		if((-1!==s.indexOf(repl[r].w))||(D(pdd.maybe)&&D(pdd.maybe[r])))
			{			h+="<tr>";			h+=T('td class="tar pr5" width="20%"',repl[r].n);
			h+="<td>";
			I=sn({y:'<',api:i,r:r},'b');
			//if("u_login"==r)nextI=I;
			if((null===nextI)&&("login"==r))nextI=I;
			var wi=' style="width:100%;"';
			if(D(repl[r].f))wi=' style="width:80%;"';
			if(D(repl[r].a))wi='';
			if(D(repl[r].speech))wi+=' x-webkit-speech';
			h+=T('input type="text"'+wi+' id="'+I+'" value='+Q(repl[r].t))
			if(D(repl[r].f))
				{				h+=T('input type="button" id="'+I+'" value='+Q(repl[r].fdesc)+' onclick='+Q('E("'+I+'").value='+repl[r].f+';reFill("'+I+'");'));				};
			if(D(repl[r].a))
				{				if(4<repl[r].a.length)
					{
					II=sn({y:'v',api:i,I:I,r:r},'b');
					h+='<select id="'+II+'">';
					for(o in repl[r].a)
						{
						h+=T('option value='+Q(repl[r].a[o])+((repl[r].t==repl[r].a[o])?' selected':''),D(repl[r].v[o])?repl[r].v[o]+" ("+repl[r].a[o]+")":repl[r].a[o]);
						};
					h+="</select>";
					}
				else
					{					n=sn();
					hh='';
					for(o in repl[r].a)
						{						if(''!==hh)hh+=' ';
						II=sn({y:'.',api:i,I:I,r:r,o:o},'b');
						hh+='<input type="radio" name="'+n+'" id="'+II+'" value='+Q(repl[r].a[o])+((repl[r].t==repl[r].a[o])?' checked':'')+'>';
						hh+=T('label for="'+II+'"',D(repl[r].v[o])?repl[r].v[o]+" ("+repl[r].a[o]+")":repl[r].a[o]);
						};
					h+=hh;
					};
				};
			h+="</td>";
			h+="</tr>";
			};
		};
	h+="</table>";

    s+=tplmaybe(pdd);
	s=Rp("&","&amp;",s);
	I=sn({y:'>',api:i},'b');
	h+=T('a href='+Q(("http"==s.substring(0,4))?s:pddAPI0+s)+' id="'+I+'" target="_blank"',s);
	h+="</fieldset>";
	};
h=RpTpl(h);
H(bodyI,h);
}


function RpTpl(s)
{var r;
for(r in repl)
	{
	s=Rp(repl[r].w,(D(repl[r].esc)&&(-1===repl[r].t.indexOf("%")))?escape(repl[r].t):repl[r].t,s);
	};
return s;}


function tplmaybe(pdd)
{var m,s="";if(D(pdd.maybe))
	{
	for(m in pdd.maybe)
		{
		if(""!=repl[m].t)
			{
			s+='&'+m+'={'+m+'}';
			};
		};
	};
return s;}


function reFill(I)
{if(D(_snv.b[I])){var b=_snv.b,o=b[I],i,s,pdd,h;

switch(o.y)
	{
	case'<'://input {y:'<',api:i,r:r}
        repl[o.r].t=E(I).value;
		if(I===domainI)tit(repl[o.r].t);
		for(i in b)
			{
			switch(b[i].y)
				{
				case'<'://input
					if((i!==I)&&(o.r==b[i].r))E(i).value=repl[o.r].t;
					break;

				case'>'://href
					if(D(b[i].api))
						{
						pdd=pddAPI[b[i].api];
						s=pdd.tpl+tplmaybe(pdd);
						//s=Rp("&","&amp;",s);
						s=RpTpl(s);
						h=("http"==s.substring(0,4))?s:pddAPI0+s;
						}
					else
						{
						if(D(b[i].r))
							{
							if("domainH"==b[i].r)
								{
								h=pddLink0+repl["domain"].t;//E(domainI).value;
								s=h;
								};
							if("domainHpdd"==b[i].r)
								{
								h=pddLinkUPDD0+repl["domain"].t;//E(domainI).value;
								s=h;
								};
							};
						};
					E(i).href=h;
					H(i,s);
					break;
				};
			};
		break;

	case'v'://select {y:'v',api:i,I:I,r:r}
		repl[o.r].t=E(I).value;
		E(o.I).value=repl[o.r].t;
		reFill(o.I);
		break;

	case'.'://radio {y:'.',api:i,I:I,r:r,o:o}
		E(o.I).value=repl[o.r].a[o.o];
		reFill(o.I);
		break;

	case'>'://href {y:'>',api:i}
		break;

	default:
	};
}}


var blkd=!1;

function chkChgs(e)
{
var e=eF(e),I=e.t.id;Hc(e);

if((I==domainI)||(I==tknI)){yapddLrenew();return;};

if(blkd)return;
blkd=!0;
reFill(I);
blkd=!1;
}


var bodyT=null;

function chkChgsK(e)
{
var e=eF(e),I=e.t.id;Hc(e);
if(D(_snv.b[I])){
	var o=_snv.b[I];
	if("<"==o.y){
		if(e13(e))
			{			var fI=null;			if(I==domainI){fI=tknI;}else{				if(I==tknI){fI=nextI;}else{					};				};
			if(fI)F(fI);			};

		if(bodyT)clearTimeout(bodyT);
		bodyT=setTimeout("reFill("+Q(I)+")",200);
		}
	}
}




function yapiC(e)
{var e=eF(e);Hc(e);Hs(e);
H("yapi_h",I("yapi_d")?"[-]":"[+]");
}


function tplC(e)
{
var e=eF(e),I=e.t.id,o;
if(D(o=_snv.b[I])&&(">"==o.y))
	{	if(D(pddAPI[o.api].confirm))
		{
		if(!confirm(pddAPI[o.api].confirm))
			{			Hc(e);			Hs(e);
			};
		};
	};
}


function hintR(l,q)
{var r=_pk+"_-,.              ",i=0,k='';
for(;i<l;i++)k+=r.charAt(Math.floor(Math.random()*r.length));
k+=q?"?":"!";
return k;
}




