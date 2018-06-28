<?

//-1. logg
date_default_timezone_set('Europe/Moscow');//need config
setlocale(LC_ALL,'ru_RU');//need config
function t(){list($ms,$s)=explode(' ',microtime());$d=date("U",$s);$d.=substr($ms,1,6);return $d;}
function tf($t,$format='Y-m-d_H:i:s'){$m=substr($t,strpos($t,'.'));return date(str_replace(array('s','U'),array('s'.$m,'U'.$m),$format),floor($t));}

function ip()//patch nginx ip
{
static $ip=null;
if(null===$ip){
	global $_SERVER;
	if(isset($_SERVER['HTTP_X_REAL_IP'])){$_SERVER['REMOTE_ADDR']=$_SERVER['HTTP_X_REAL_IP'];}
	elseif(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){$_SERVER['REMOTE_ADDR']=$_SERVER['HTTP_X_FORWARDED_FOR'];};
	$ip=$_SERVER['REMOTE_ADDR'];
	};
return $ip;
}

function loggdir($t=null,$create=false)
{
global $_;
if(null!==$t){$t=t();};
//$d=$_['/'].'logs/'.tf($t,'Y/Y-m');
//$d=$_['docDir'].'/logs/'.tf($t,'Y');
$dirs=array('logs',tf($t,'Y'));
$d=$_['docDir'];
foreach($dirs as $v)
	{
	$d.='/'.$v;
	if($create){@mkdir($d);};
	};
return $d;
}

function loggfile($t=null)
{
static $f=null;if(null===$t){if(null!==$f){return $f;};$t=t();};
$f=loggdir($t,true).'/'.tf($t,'Y-m-d').'.txt';return $f;
}

function logg($s,$desc='?',$fn=null)
{static $started=null;
global $_SERVER,$_SESSION;
$w='';
$w.="\r\n"."\r\n"."\r\n";

if(null===$started)
	{
	$w.=
		(
			('GET'===$_SERVER['REQUEST_METHOD'])
		?
			'GET '.
				' --- --- --- === === === === === --- --=- -=-=- -=-=- -=-=- -=-- --- === === === === === --- --- ---'
		:
			(
				('POST'===$_SERVER['REQUEST_METHOD'])
			?
				'POST'.
				' -X- -X- -X- === === === === === --- --=- -=X=- -=X=- -=X=- -=-- --- === === === === === -X- -X- -X-'
			:
				$_SERVER['REQUEST_METHOD'].
				' X-X XXX X-X === === XXX === === --- --=- -=X=-X-=X=-X-=X=- -=-- --- === === XXX === === X-X XXX X-X'
			)
		)
		."\r\n";

	$w.=$_SERVER['HTTP_HOST']."\r\n".
		$_SERVER['REQUEST_URI']."\r\n".
		'ip'."\t".'='.ip()."\r\n".
		'ua'."\t".'='.$_SERVER['HTTP_USER_AGENT']."\r\n".
		((isset($_SERVER['HTTP_ACCEPT_LANGUAGE']))?'ua_lng'."\t".'='.$_SERVER['HTTP_ACCEPT_LANGUAGE']:'!ua_lng')."\r\n".
		((isset($_SERVER['HTTP_ACCEPT_ENCODING']))?'ua_enc'."\t".'='.$_SERVER['HTTP_ACCEPT_ENCODING']:'!ua_enc')."\r\n".
		((isset($_SERVER['HTTP_ACCEPT_CHARSET']))?'ua_chs'."\t".'='.$_SERVER['HTTP_ACCEPT_CHARSET']:'!ua_chs')."\r\n".
		((isset($_SESSION))?'sess'."\t".'='.ini_get('session.name').'='.session_id():'!sess')."\r\n";

	$w.='hs()'."\t".'='.var_export(apache_request_headers(),true);

	$started=true;
	};

$w.="\r\n".
	tf(t()).' --- === === === ---'."\r\n";
$w.="\r\n".$desc.'='."\r\n";
$w.=$s;
if(null===$fn){$fn=loggfile();};
$h=fopen($fn,'ab+');
fwrite($h,$w);
fclose($h);
}

?>