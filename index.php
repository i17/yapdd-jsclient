<?

global $_;
$_ = array(
	'!' => '/pdd/',
	'git-link' => 'https://github.com/i17/yapdd-jsclient',
	'docDir' => realpath(''),
	);

require_once 'logg.php';

$body = '';
$body .= 'body';

// находим изменения файлов по датам. Если были - инкрементируем билд и его дату
$files = array(
	'index.php',
	'i17.js',
	'nonet.js',
	'i17yapdd.js',
	);
$last = '0';
foreach($files as &$f)
	{
	$st = stat($f);
	$last = max($last, $st['ctime'], $st['mtime']);
	};
unset($f, $st);

$ver_date_ = '2011-04-29';
$build = 1;

$ver_date = date('Y-m-d H:i:s',$last);

$f_ver = 'ver_.php';
if(file_exists($f_ver))
	{	include $f_ver;
	};

if($ver_date !== $ver_date_)
	{	$build++;
	@file_put_contents($f_ver, '<'.'? '.
		'global $ver_date_,$build;'.
		'$ver_date_=\''.$ver_date.'\';'.
		'$build='.$build.';'.
		' ?'.'>');
	};

$ver = '1.1 build '.$build.', '.$ver_date;

logg($ver,'ver');

?><!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html lang="ru">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>ЯПДД js-клиент</title>
<!--link rel="stylesheet" href="/i17.css"-->
<style type="text/css"><!--
/*background:#DFD8D0;color:#000;*/
body{margin:5px 0 0 0;padding:0;font-family:Arial,sans-serif,tahoma;}
body,table,td,p,legend,ul,ol{font-size:100%;}
h1{font-size:130%;}
fieldset{font-size:91%;}
img{margin:0;padding:0;border:0;}
.tal{text-align:left;}
.tac{text-align:center;}
.tar{text-align:right;}
.taj{text-align:justify;}
.vat{vertical-align:top;}
.vam{vertical-align:middle;}
.vab{vertical-align:bottom;}
.vabl{vertical-align:baseline;}
#content{padding:0 5px 0 5px;}
.rad{-webkit-border-radius:8px;-moz-border-radius:8px;-khtml-border-radius:8px;border-radius:8px}
.abg3{font:10px tahoma;color:#000;text-decoration:none;}
.hpbn{height:10px;}
.bg4c{background-color:#FFF;}
.w100{width:100%;}
.api{font-size:91%;color:#53576B;}
.my{font-size:91%;color:#333;}
.pr5{padding-right:5px;}
.pl5{padding-left:5px;}
.red{color:red;}
.fs{background-color:#E3E6EF;border:0;margin:20px 0 20px 0;}
.lg{background-color:#EEF;padding:5px 8px 5px 8px;border-top:1px solid #E3E6EF;}
.bu{border-top:2px solid #E3E6EF;}
.f0{font-size:0px;line-height:0px;}
.n{padding-left:5px;color:gray}
input[type="text"]{-webkit-border-radius:2px;-moz-border-radius:2px;-khtml-border-radius:2px;border-radius:2px;border:1px solid #dfdfdf;outline:none;background-color:#ffffff;
font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:1.4rem;padding:0.9rem 1rem;line-height:1;height:40px;}
input[type="text"]{border:1px solid #bbb}
input[type="text"]:focus{border:1px solid #222222;outline:none;background-color:#ffffff}

--></style><script type="text/javascript"src="<?=$_['!'];?>i17.js"></script>
<script type="text/javascript"src="<?=$_['!'];?>nonet.js"></script>
<script type="text/javascript"src="<?=$_['!'];?>i17yapdd.js?v=2"></script>

<link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon,%00%00%01%00%01%00%10%10%00%00%01%00%18%00h%03%00%00%16%00%00%00(%00%00%00%10%00%00%00%20%00%00%00%01%00%18%00%00%00%00%00%40%03%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%00%88j4%80k3%80k3%80k3%80k3%80k3%80k3%80k3%80k3%80k3%7Fj2%A2%81B%00%00%00%00%00%00%00%00%00%00%00%00%83l4%BDh%3C%B8i%3B%B8i%3B%B8i%3B%B8i%3B%B8i%3B%B8i%3B%B8i%3B%B8h%3B%BDi%3D%8Ak5%C5%9BV%00%00%00%00%00%00%00%00%00%89o%3A%BAl%40%B4k%3F%B5l%40%B5l%40%B5l%40%B5l%40%B5l%40%B5l%40%B5l%3F%B5m%40%BCj%3F%83m8%00%00%00%00%00%00%00%00%00%8As%3C%C2rF%B3f8%ACV%20%ACW!%ACW!%ACW!%ACW!%ACW!%ACW!%ACV%20%B7g9%9Eq%3B%AB%8DQ%00%00%00%00%00%00%8Ex%40%BBm%40%E4%A3y%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%E5%A6%7C%BEm%40%8Bu%3C%00%00%00%00%00%00%90w%3E%C0g5%FF%FF%FF%D7%7DI%FF%FF%FF%FE%FF%FF%FF%FF%FF%FF%FF%FF%FE%FF%FF%FF%FF%FF%D7%83M%FF%FF%FF%B8f4%B6~M%AE%8DP%00%00%00%96%7FF%C2k%3A%FF%FF%FF%FF%FF%FF%E5%93i%FF%FF%FF%C9s%3F%CF%7FL%FF%FF%FF%E4%95m%FF%FF%FF%FF%FF%FF%BDj8%D3%84%5B%9C%83K%00%00%00%9E%85N%CEwI%FF%FF%FF%FE%FF%FF%FF%FF%FF%B5N%11%FD%EA%E2%FD%E8%E0%B3P%12%FF%FF%FF%FE%FF%FF%FF%FF%FF%C6vF%D9%90h%D1%89%5E%9D%83L%9D%87P%D3%7CN%FF%FF%FF%FF%FF%FF%CFj5%FC%F0%EB%FF%FF%FF%FF%FF%FF%FC%F0%EB%D2m8%FF%FF%FF%FF%FF%FF%CAyJ%D8%8Ee%E1%90k%9C%85N%A1%8DV%DE%86%5C%FF%FF%FF%D3l7%FC%F9%F7%FF%FF%FF%FE%FF%FF%FE%FF%FF%FF%FF%FF%FC%F8%F7%D4n9%FF%FF%FF%D6%84X%E8%9Bx%A7%8DY%00%00%00%A3%93%5E%EE%9F%7B%E7%89Z%FE%FF%FF%FF%FF%FF%FE%FF%FF%FE%FF%FF%FE%FF%FF%FE%FF%FF%FF%FF%FF%FE%FF%FF%E8%89Z%E8%9Ey%D8%99s%C6%B1v%00%00%00%A3%97%5E%F5%9Ex%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%FF%F7%9Dy%9B%98%5D%00%00%00%00%00%00%A5%9Bb%FE%B1%93%EA%9As%EC%9Br%EC%9Br%EC%9Br%EC%9Br%EC%9Br%EC%9Br%EC%9Br%EC%9Br%EF%9Cx%C8%A5t%D1%B5%7B%00%00%00%00%00%00%A7%9Ee%FE%B5%99%F6%B2%92%F6%B2%93%F6%B2%93%F6%B2%93%F6%B2%93%F6%B2%93%F6%B2%93%F6%B2%93%F6%B2%92%FF%B6%9B%9D%9Ca%00%00%00%00%00%00%00%00%00%AA%A0g%FF%C6%B3%FF%C6%B0%FF%C6%B0%FF%C6%B0%FF%C6%B0%FF%C6%B0%FF%C6%B0%FF%C6%B0%FF%C6%B0%FF%CB%B8%C5%A6s%00%00%00%00%00%00%00%00%00%00%00%00%BD%A6t%AE%A1i%AE%A0i%AE%A0i%AE%A0i%AE%A0i%AE%A0i%AE%A0i%AE%A0i%AE%A0i%AC%A0g%E2%BF%89%00%00%00%00%00%00%00%00%00%00%00%00%00%0F%00%00%00%07%00%00%00%07%00%00%00%03%00%00%00%03%00%00%00%01%00%00%00%01%00%00%00%00%00%00%00%00%00%00%00%01%00%00%00%01%00%00%00%03%00%00%00%03%00%00%00%07%00%00%00%0F%00%00%00%0F%00%00">
</head>
<body>

<center>
<table style="height:100%;" width=1000 border=0 cellspacing=4 cellpadding=0>
<tr>
	<td class="bu f0" colspan=2>&nbsp;</td>
</tr>
<tr>
	<td colspan=2>
		<h1>js-клиент API <span class="red">Я</span>ндекс.Почты для доменов (<span class="red">Я</span>ПДД, <a href="https://pdd.yandex.ru/" target="_blank">https://pdd.yandex.ru</a>)</h1>
	</td>
</tr>
<tr>
	<td class="bg4c vam tar pr5" width="20%">
		Версия
	</td>
	<td class="bg4c vam tal pl5 pr5" width="80%" id="xx">
		<?=$ver;?>
	</td>
</tr>
<tr>
	<td class="bg4c vam tar pr5" width="20%">
		API <span class="red">Я</span>ПДД
	</td>
	<td class="bg4c vam tal pl5 pr5" width="80%">
		<a href="https://tech.yandex.ru/pdd/doc/files/api-pdd-v1.pdf" target="_blank">api-pdd-v1.pdf</a> — используется здесь. Новое — <a href="https://tech.yandex.ru/pdd/doc/about-docpage/" target="_blank">тут</a>
	</td>
</tr>
<tr>
	<td class="bg4c vam tar pr5" width="20%">
		Сырцы
	</td>
	<td class="bg4c vam tal pl5 pr5" width="80%">
		<a href="<?=$_['git-link'];?>" target="_blank"><?=$_['git-link'];?></a>
	</td>
</tr>
<tr>
	<td class="bg4c vat tar pr5">
		<a href="#" id="yapi" style="white-space:nowrap;text-decoration:none;" title="развернуть"><span id="yapi_h">[+]</span>&nbsp;Описание</a>
	</td>
	<td class="bg4c vam tal pl5 pr5">
<div id="yapi_d" style="display:none;">
<fieldset class="rad"><legend>API <span class="red">Я</span>ПДД</legend>
<p class="taj api">API Яндекс.Почты для доменов позволяет производить административные действия над вашими ящиками
из программного кода (например, из кода вашего сайта).

<p class="taj api">API представляет собой интерфейс http(s) вызовов.
Каждый вызов выполняет какое-то действие.
Параметры передаются в строке запроса или в теле запроса.
Все параметры надо передавать в кодировке urlencode.
Результат выдается в теле ответа.
</fieldset>

<p class="taj my">Я для себя и других администраторов доменов, которые захотели или захотят перейти
на ЯПДД, написал генератор этих ссылок для вызовов, т.к. мне не удобно было пользоваться не-API вариантом Яндекса.
Неудобство, которое признал Яндекс, касается установки переадресации почты у пользователей, например, на время их отпуска.
На момент написания программы (2011-05-01) для того, чтобы установить переадресацию, администратору домена необходимо:
<ol class="taj my">
	<li>Залогиниться под адресом, с которого надо установить переадресацию
	</li>
	<li>Создать правило сортировки, пересылающее письма на второй адрес
	</li>
	<li>Разлогиниться
	</li>
	<li>Залогиниться под вторым адресом, открыть сообщение, запрашивающее подтверждение желания получать переадресованные письма
	</li>
	<li>Перейти по ссылке, указанной в письме и получить сообщение, что эту ссылку следует переслать по первому адресу
	</li>
	<li>Вновь перелогиниться под первым адресом и перейти по этой ссылке
	</li>
	<li>Нажать кнопку, включающую таки переадресацию, поражаясь абсурду, что ты сам себе подтверждаешь включение переадресации.
	</li>
</ol>
<p class="taj my">Если Яндекс доведёт процедуру до простоты API, в представленном костыле надобности не будет.

<p class="taj my">Особенность реализации такая, что мне на сервер <u>не передаётся</u> Ваш токен,
который является ключом к управлению вашей ЯПДД, т.к. токен хранится в части адресной строки после знака "#",
который используется для адресации внутренних переходов по странице.
Так задумал для тех, кто не хочет давать мне свой токен.
Можете проверить любым снифером: не передаётся, как и другие переменные.
Меньше знаю &mdash; крепче сплю, и вообще, сами админьте свою почту =)
Для пущей безопасности, никаких сторонних скриптов (типа статистики, фреймворков) тоже не подключал &mdash;
всё написано с нуля мной, админом <a href="http://pochemuby.net/">почемубынет</a>а.
Для общения с сервером Яндекса ссылки генерятся с протоколом "https".

<p class="taj my">После выполнения первого пункта (Активации API), можно поставить токен в предлагаемое поле
и добавить страницу в закладки (избранное). В&nbsp;дальнейшем, просто можете держать эту страничку открытой
и выполнять из неё какие-нибудь действия, заполняя поля, переходя по ссылкам и читая ответы. В Хроме
ответы сервера могут казаться пустыми &mdash; надо смотреть код страницы.

<p class="taj my">Сам &mdash; разумеется &mdash; пользуюсь этой своей программой для нескольких доменов.
Для каждого &mdash; своя закладка.

<p class="taj my">Вижу некоторые недостатки интерфейса. Обновлять версии &mdash; кнопкой F5.
Конструктивные предложения &mdash; рассматриваю, токены &mdash; нет =)

<p class="tac my">История

<p class="taj my">2018-06-28: <a href="<?=$_['git-link'];?>" target="_blank">нагитхабил</a>

<p class="taj my">2015-05-15: Буилд 360. По просьбам поменял местами несколько пунктов. Сделал, чтобы логины менялись во всех полях. Раньше логин в регистрации пользователя был независим.

<p class="taj my">2015-05-15: Буилд 352. Поменял кодировку на UTF-8.

<p class="taj my">2014-10-14: Буилд 350. Поменял длину рандомно генерируемых полей в соответствии с ограничениями ЯПДД.

<p class="taj my">2012-09-30: Буилд 348. Поменял адрес API.

<p class="taj my">2011-09-27: Буилд 347. Добавлено название домена в заголовок.

<p class="taj my">2011-09-12: Буилд 335. По просьбе пользователя добавил пункты API 30,31,32 про дополнительных админов домена.
И заодно добавил пункты 33а, 33б - про общий список рассылки.

<p class="taj my">2011-08-10: Буилд 330. По просьбе пользователя добавил ссылку на простой вход в ЯПДД через
https://mail.yandex.ru/for/domainname.
От себя добавил ещё https-ссылку на управление ЯПДД через родной интерфейс.
В шапке ссылку http://pdd.yandex.ru/ сделал SSL-ной.
Поднял номер версии до 1.1.

<p class="taj my">2011-08-10: Буилд 300 (тот же). Внезапно замечено, что Яндекс исправился и теперь пункты 27 и 28 (авторизация по временному токену) работают.

<p class="taj my">2011-05-11: Буилд 300. Рождение версии 1.0. Пункт 28 не работает по причине Яндекса.

</div>
	</td>
</tr>
<tr>
	<td class="bu f0" colspan=2>&nbsp;</td>
</tr>
<tr>
	<td class="f0" colspan=2 height=20>&nbsp;</td>
</tr>
<tr>
	<td class="bg4c vam tal" id="bodyI" colspan=2>
		&nbsp;<?=$body;?></td>
</tr>
<tr>
	<td class="bg4c vam tal" colspan=2>
<span style="display:none;">
<div id="dP"></div><br>iframe:
<iframe name="pF" id="idpF" height=500 width=1000></iframe>
</span>
	</td>
</tr>
<tr>
	<td class="bu f0" colspan=2>&nbsp;</td>
</tr>
<tr><td class="hpbn tac vab" colspan=2><a class="abg3" href="http://pochemuby.net/"
><b>©&nbsp;i17, pochemuby.net, 2011—<?=date('Y',$last)?></b>, подробнее в описании выше</a></td></tr>
</table>
</center>

<script type="text/javascript">//<!--



//--></script>

</body>
</html>