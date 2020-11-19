// <meta http-equiv="Content-Type" content="text/html; charset=utf-8">

function include( html ){
	
	document.write( html );
	
}

function mod__meta( path ){
	
	var ret = [];
	
	ret.push('	<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">');
	ret.push('	<meta name="format-detection" content="telephone=no">');
	ret.push('	');
	ret.push('	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400&display=swap">');
	ret.push('	<link rel="stylesheet" href="'+ path +'common/slick/slick.css">');
	ret.push('	<link rel="stylesheet" href="'+ path +'common/base.css">');
	ret.push('	');
	ret.push('	<script type="application/ld+json">');
	ret.push('		{"@context":"http:\/\/schema.org","@type":"WebSite","url":"http:\/\/www.meetscompany.jp\/","potentialAction":{"@type":"SearchAction","target":"http:\/\/www.meetscompany.jp\/companies?multi%3Aword={search_term}","query-input":"required name=search_term"}}');
	ret.push('	</script>');
	ret.push('	');
	ret.push('	<script>');
	ret.push('		(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){');
	ret.push('		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),');
	ret.push('		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)');
	ret.push('		})(window,document,"script","//www.google-analytics.com/analytics.js","ga");');
	ret.push('		');
	ret.push('		ga("create", "UA-36723139-1", "auto", {"allowLinker": true});');
	ret.push('		ga("require", "linker");');
	ret.push('		ga("linker:autoLink", ["discussion.meetscompany.jp", "event.meetscompany.jp"] );');
	ret.push('		ga("send", "pageview");');
	ret.push('	</script>');
	ret.push('	');
	ret.push('	<script>');
	ret.push('		(function(add, cla){window["UserHeatTag"]=cla;window[cla]=window[cla]||function(){(window[cla].q=window[cla].q||[]).push(arguments)},window[cla].l=1*new Date();var ul=document.createElement("script");var tag = document.getElementsByTagName("script")[0];ul.async=1;ul.src=add;tag.parentNode.insertBefore(ul,tag);})("//uh.nakanohito.jp/uhj2/uh.js", "_uhtracker");_uhtracker({id:"uhk4I6YS0H"});');
	ret.push('	</script>');
	ret.push('	');
	ret.push('	<script src="'+ path +'common/jquery.js"></script>');
	ret.push('	<script src="'+ path +'common/slick/slick.min.js"></script>');
	ret.push('	<script src="'+ path +'common/common.js"></script>');
	
	return ret.join("\n");
	
}

function mod__flags( path ){
	
	var ret = [];
	
	ret.push('	<input id="g-nav__toggle" class="g-flag" type="checkbox">');
	
	return ret.join("\n");
	
}

function mod__header( path, option ){
	
	var login_menu_html = {
		
		login: [
			 '						<div class="g-login__user">ようこそ ユーザー名 さん</div>'
			,'						<ul class="g-login-menu">'
			,'							<li class="g-login-menu__item"><a class="g-login-menu__more" href="'+ path +'mypage/">マイページ</a></li>'
			,'							<li class="g-login-menu__item"><a class="g-login-menu__more" href="'+ path +'mypage/logout.html">ログアウト</a></li>'
			,'						</ul>'
		].join("\n")
		
		,logout: [
			 '						<div class="g-login__user">ようこそ ゲスト さん</div>'
			,'						<ul class="g-login-menu">'
			,'							<li class="g-login-menu__item"><a class="g-login-menu__more" href="'+ path +'mypage/presignup.html">新規会員登録</a></li>'
			,'							<li class="g-login-menu__item"><a class="g-login-menu__more" href="'+ path +'mypage/login.html">ログイン</a></li>'
			,'						</ul>'
		].join("\n")
		
	}[ option.login_state ];
	
	var ret = [];
	
	ret.push('	<header class="g-header '+ option.header_type +' js-sticky">');
	ret.push('		<div class="g-header__inner">');
	ret.push('			<div class="h-logo">');
	ret.push('				<a class="h-logo__home" href="'+ path +'">');
	ret.push('					<img class="h-logo__data h-logo__data--white" alt="Meets Company" src="'+ path +'img/base/logo--white.png">');
	ret.push('					<img class="h-logo__data h-logo__data--black" alt="Meets Company" src="'+ path +'img/base/logo--black.png">');
	ret.push('				</a>');
	ret.push('			</div>');
	ret.push('			<ul class="h-menu">');
	ret.push('				<li class="h-menu__item h-menu__item--login js-submenu">');
	ret.push('					<a class="h-menu__more js-submenu__trigger" href="'+ path +'mypage/login.html">');
	ret.push('						<img class="h-menu__icon" alt="LOGIN" src="'+ path +'img/base/gnavi--login.svg">');
	ret.push('					</a>');
	ret.push('					<div class="g-login js-submenu__target">');
	
	ret.push(						login_menu_html );
	
	ret.push('					</div>');
	ret.push('				</li>');
	ret.push('				<li class="h-menu__item h-menu__item--menu">');
	ret.push('					<label class="h-menu__more" for="g-nav__toggle">');
	ret.push('						<img class="h-menu__icon" alt="MENU" src="'+ path +'img/base/gnavi--menu.svg">');
	ret.push('					</label>');
	ret.push('				</li>');
	ret.push('				<li class="h-menu__item h-menu__item--contact">');
	ret.push('					<a class="h-menu__more" href="'+ path +'support/ask.html">');
	ret.push('						<img class="h-menu__icon" alt="CONTACT" src="'+ path +'img/base/gnavi--contact.svg">');
	ret.push('					</a>');
	ret.push('				</li>');
	ret.push('			</ul>');
	ret.push('		</div>');
	ret.push('	</header>');
	ret.push('	');
	ret.push('	');
	ret.push('	');
	ret.push('	<div class="g-nav">');
	ret.push('		<label class="g-nav__bg" for="g-nav__toggle"></label>');
	ret.push('		<div class="g-nav__header">');
	ret.push('			<div class="gn-logo">');
	ret.push('				<a class="gn-logo__home" href="'+ path +'">');
	ret.push('					<img class="gn-logo__data" alt="Meets Company" src="'+ path +'img/base/logo--white.png">');
	ret.push('				</a>');
	ret.push('			</div>');
	ret.push('			<div class="gn-toggle">');
	ret.push('				<label class="gn-toggle__switch" for="g-nav__toggle">');
	ret.push('					<img class="gn-toggle__icon" alt="CLOSE" src="'+ path +'img/base/gnavi--close.svg">');
	ret.push('				</label>');
	ret.push('			</div>');
	ret.push('		</div>');
	ret.push('		<nav class="g-nav__body">');
	ret.push('			<ul class="gn-list">');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'siteinfo/about.html">Meets Companyとは</a></li>');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'siteinfo/jointbriefing.html">合同説明会とは</a></li>');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'companies/">おすすめ地域企業一覧</a></li>');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'events/">イベント一覧</a></li>');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'staffinfo/">スタッフ紹介</a></li>');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'blog/">就活コラム</a></li>');
	ret.push('				<li class="gn-list__item"><a class="gn__more1" href="'+ path +'support/ask.html">お問合せ</a></li>');
	ret.push('			</ul>');
	ret.push('			<aside class="g-nav__aside">');
	ret.push('				<ul class="gn-external-list">');
	ret.push('					<li class="gn-external-list__item"><a class="gn__more2" target="_blank" href="https://event.meetscompany.jp/session/24727/">22卒向け合同説明会予約</a></li>');
	ret.push('					<li class="gn-external-list__item"><a class="gn__more2" target="_blank" href="https://event.meetscompany.jp/session/22978/">21卒向け合同説明会予約</a></li>');
	/*ret.push('					<li class="gn-external-list__item"><a class="gn__more2" target="_blank" href="https://discussion.meetscompany.jp/181/">就活サポート</a></li>');*/
	ret.push('					<li class="gn-external-list__item"><a class="gn__more2" target="_blank" href="https://discussion.meetscompany.jp/181/">就活面談サービス</a></li>');
	ret.push('				</ul>');
	ret.push('				<ul class="gn-sns">');
	ret.push('					<li class="gn-sns__item"><a class="gn-sns__more" rel="nofollow" target="_blank" href="https://twitter.com/Meets_Company?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img class="gn-sns__icon" src="'+ path +'img/base/gn-sns--twitter.svg" alt="アイコン">Twitter</a></li>');
	ret.push('					<li class="gn-sns__item"><a class="gn-sns__more" rel="nofollow" target="_blank" href="https://ja-jp.facebook.com/MeetsCompany"><img class="gn-sns__icon" src="'+ path +'img/base/gn-sns--facebook.svg" alt="アイコン">Facebook</a></li>');
	ret.push('					<li class="gn-sns__item"><a class="gn-sns__more" rel="nofollow" target="_blank" href="https://www.instagram.com/meets_company/?hl=ja"><img class="gn-sns__icon" src="'+ path +'img/base/gn-sns--instagram.svg" alt="アイコン">Instagram</a></li>');
	ret.push('				</ul>');
	ret.push('			</aside>');
	ret.push('		</nav>');
	ret.push('	</div>');
	
	return ret.join("\n");
	
}

function mod__footer( path ){
	
	var ret = [];
	
	ret.push('	<div class="g-pagetop ">');
	ret.push('		<a class="g-pagetop__trigger" href="#pagetop">TOP</a>');
	ret.push('	</div>');
	ret.push('	');
	ret.push('	');
	ret.push('	');
	ret.push('	<footer class="g-footer">');
	ret.push('		<div class="g-footer__inner">');
	ret.push('			<div class="f-logo">');
	ret.push('				<a class="f-logo__home" href="'+ path +'">');
	ret.push('					<img class="f-logo__data" alt="Meets Company" src="'+ path +'img/base/logo--white.png">');
	ret.push('				</a>');
	ret.push('			</div>');
	ret.push('			<nav class="f-nav">');
	ret.push('				<ul class="fn-list">');
	ret.push('					<li class="fn-list__item"><a class="fn__more" href="'+ path +'siteinfo/sitemap.html">サイトマップ</a></li>');
	ret.push('					<li class="fn-list__item"><a class="fn__more" href="'+ path +'siteinfo/terms.html">会員規約</a></li>');
	ret.push('					<li class="fn-list__item"><a class="fn__more" href="http://dym.asia/privacy/" target="_blank">プライバシーポリシー</a></li>');
	ret.push('					<li class="fn-list__item"><a class="fn__more" href="'+ path +'siteinfo/meetscompany.html">運営会社情報</a></li>');
	ret.push('					<li class="fn-list__item"><a class="fn__more" href="'+ path +'support/ask.html">お問合せ</a></li>');
	ret.push('				</ul>');
	ret.push('			</nav>');
	ret.push('			<ul class="fn-sns">');
	ret.push('				<li class="fn-sns__item"><a class="fn-sns__more" rel="nofollow" target="_blank" href="https://twitter.com/Meets_Company?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img class="fn-sns__icon" src="'+ path +'img/base/f-sns--twitter.svg" alt="twitter"></a></li>');
	ret.push('				<li class="fn-sns__item"><a class="fn-sns__more" rel="nofollow" target="_blank" href="https://ja-jp.facebook.com/MeetsCompany"><img class="fn-sns__icon" src="'+ path +'img/base/f-sns--facebook.svg" alt="facebook"></a></li>');
	ret.push('				<li class="fn-sns__item"><a class="fn-sns__more" rel="nofollow" target="_blank" href="https://www.instagram.com/meets_company/?hl=ja"><img class="fn-sns__icon" src="'+ path +'img/base/f-sns--instagram.svg" alt="instagram"></a></li>');
	ret.push('			</ul>');
	ret.push('			<div class="f-copyright">');
	ret.push('				<small class="f-copyright__note">Copyright &copy; DYM Co., Ltd. All Rights Reserved.</small>');
	ret.push('			</div>');
	ret.push('		</div>');
	ret.push('	</footer>');
	ret.push('	');
	ret.push('	');
	ret.push('	');
	ret.push('	<script type="text/javascript">');
	ret.push('		(function () {');
	ret.push('		var tagjs = document.createElement("script");');
	ret.push('		var s = document.getElementsByTagName("script")[0];');
	ret.push('		tagjs.async = true;');
	ret.push('		tagjs.src = "//s.yjtag.jp/tag.js#site=H9x4fD4";');
	ret.push('		s.parentNode.insertBefore(tagjs, s);');
	ret.push('		}());');
	ret.push('	</script>');
	ret.push('	<noscript>');
	ret.push('		<iframe src="//b.yjtag.jp/iframe?c=H9x4fD4" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>');
	ret.push('	</noscript>');
	
	return ret.join("\n");
	
}
