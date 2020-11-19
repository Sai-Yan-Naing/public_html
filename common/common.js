$(function(){
	
	convertImgToBG();
	
	jsIn();
	
	subMenuToggle();
	
	multiOption();
	
	windowScrolled();
	
	tab();
	
	modal();
	
	realtimeCond();
	
	accordion();
	
	toggleSearchGroup();
	
	eventPickup();
	
	countUpAnimation();
	
	
	forIE__anchor();
	
});

$(window).on("load", function(){
	
	formAgree();
	
	checkAll();
	
});



function forIE__anchor(){
	
	var trigger = "a[href^='#']";
	
	var ua = navigator.userAgent.toLowerCase();
	var is_ie = ( ua.indexOf("msie") > 0 || ua.indexOf("trident") > 0 );
	
	if( ! is_ie )				{ return false; }
	if( ! $(trigger).length )	{ return false; }
	
	$(trigger).on("click", function(){
		
		var target = $(this).attr("href");
		var goal = $(target).offset().top;
		
		location.hash = target;
		
		$("html").stop().animate({
			scrollTop: goal
		});
		
		return false;
		
	});
	
}



function countUpAnimation(){
	
	var trigger			= ".js-countup";
	var active			= "is-active";
	var header			= ".g-header";
	
	var countup_speed	= 1280;
	var countup_ease	= "linear";
	
	if( ! $(trigger).length )	{ return false; }
	if( ! $(header).length )	{ return false; }
	
	$(trigger).each(function(){
		
		var target = $(this);
		var to_num = Number( $(target).text().split(",").join("") );
		
		$(target).text(0);
		var throttle = eventThrottle(function(){
			
			var scope_top = $(target).offset().top + $(target).outerHeight() - $(window).height();
			var scope_btm = $(target).offset().top - $(header).height();
			
			if( $(target).hasClass(active) )			{ return false; } 
			if( $(window).scrollTop() < scope_top )	{ return false; }
			if( $(window).scrollTop() > scope_btm )	{ return false; }
			
			$(target).addClass(active);
			
			$({ countup: 0 }).stop().animate({
				countup: 1
			}, {
				duration:	countup_speed
				,easing:	countup_ease
				,progress: function(){
					$(target).text( Math.ceil( this.countup * to_num ).toLocaleString() );
				}
			});
			
		}, 1000 / 60 );
		
		$(window).on("scroll resize", throttle).scroll();
		
	});
}



function eventPickup(){
	
	var wrap	= ".js-event-pick";
	var target	= ".js-event-pick__target";
	var child	= ".js-event-pick__item";
	var bt_prev	= ".js-event-pick__prev";
	var bt_next	= ".js-event-pick__next";
	var passive	= "js-event-pick--passive";
	
	$(target).scrollLeft(0);
	
	$(bt_prev).on("click", function(){
		
		var p = currentPos() - 1;
		
		if( p < 0 ){
			p = $(child).length - 1;
		}
		
		scroller( p * $(child).eq(0).outerWidth(true) );
		
	});
	
	$(bt_next).on("click", function(){
		
		var p = currentPos() + 1;
		
		if( p >= ($(child).length - 1) ){
			p = 0;
		}
		
		scroller( p * $(child).eq(0).outerWidth(true) );
		
	});
	
	$(target).on("scroll", function(){
		
		var p = Math.round( $(this).scrollLeft() / $(child).eq(0).outerWidth(true) );
		
		if( p >= ($(child).length - 2) ){
			$(bt_next).addClass(passive);
		}else{
			$(bt_next).removeClass(passive);
		}
		
		if( p <= 0 ){
			$(bt_prev).addClass(passive);
		}else{
			$(bt_prev).removeClass(passive);
		}
		
	}).scroll();
	
	
	function currentPos(){
		return Math.round( $(target).scrollLeft() / $(child).eq(0).outerWidth(true) );
	}
	
	function scroller( dest ){
		
		$(target).stop().animate({
			scrollLeft: dest
		}, 200, "swing");
		
	}
	
}




function toggleSearchGroup(){
	
	var tab			= ".js-search-group__tab";
	var accordion	= ".js-search-group__accordion";
	var active		= "js-search-group--active";
	
	if( ! $(tab).length )		{ return false; }
	if( ! $(accordion).length )	{ return false; }
	if( $(tab).length != $(accordion).length ){ return false; }
	
	button( tab );
	button( accordion );
	
	function button( target ){
		$(target).on("click", function(){
			
			var i = $(target).index(this);
			change(i);
			
		});
	}
	
	function change( n ){
		
		$(tab).filter(":not(:eq("+ n +"))").removeClass(active);
		$(accordion).filter(":not(:eq("+ n +"))").removeClass(active);
		
		$(tab).eq(n).toggleClass(active);
		$(accordion).eq(n).toggleClass(active);
		
	}
	
}




function accordion(){
	
	var wrap	= ".js-accordion";
	var view	= ".js-accordion__view";
	var toggle	= ".js-accordion__toggle"
	
	if( ! $(wrap).length )	{ return false; }
	
	$(toggle).on("click", function(){
		
		var target_view		= $(this).parents(wrap).find(view);
		var reverse_check	= ! $(target_view).prop("checked");
		
		$(target_view).prop("checked", reverse_check);
		
	});
	
}



function realtimeCond(){
	
	var wrap	= ".js-realtime-cond";
	var view	= ".js-realtime-cond__view";
	var target	= ".js-realtime-cond__target";
	var form	= $(wrap).parents("form");
	
	var reset_text = "なし";
	
	if( ! $(wrap).length )	{ return false; }
	if( ! $(view).length )	{ return false; }
	
	$(target).on("change", function(){
		
		var user_cond = {};
		
		var target_wrap	= $(this).parents(wrap);
		var target_view	= $(target_wrap).find(view);
		var target_unit	= $(target_wrap).find(target);
		
		$(target_unit).each(function(){
			
			var type = $(this).attr("type");
			var cond_text;
			var group	= $(this).data("realtime-cond-group");
			
			if( type == "checkbox" ){
				
				if( ! $(this).prop("checked") ){ return true; }
				
				cond_text = $(this).parent().text();
				
			}
			
			if( type == "text" ){
				
				if( ! $(this).val() ){ return true; }
				
				cond_text = $(this).val();
				
			}
			
			if( typeof user_cond[group] === "undefined" ){
				user_cond[group] = [];
			}
			
			user_cond[group].push( cond_text );
			
		});
		
		var view_text = [];
		
		for( var key in user_cond ){
			view_text.push('[<strong>'+ key +'</strong>]');
			view_text.push( user_cond[key].join("｜") );
		}
		
		if( ! view_text.length ){
			view_text.push( reset_text );
		}
		
		$(target_view).html( view_text.join(" ") );
		
	});
	
	$(form).on("reset", function(){
		$(view).text( reset_text );
	});
	
}



function checkAll(){
	
	var wrap	= ".js-check-all";
	var toggle	= ".js-check-all__toggle";
	var target	= ".js-check-all__target";
	
	if( ! $(wrap).length )	{ return false; }
	
	$(toggle).on("change", function(){
		
		var target_wrap		= $(this).parents(wrap);
		var target_toggle	= $(target_wrap).find(toggle);
		var target_unit		= $(target_wrap).find(target);
		
		var checkbox_num	= $(target_unit).length;
		var checked_num		= $(target_unit).filter(":checked").length;
		var is_all_checked	= checkbox_num <= checked_num;
		
		$(target_unit).prop("checked", ! is_all_checked ).change();
		
	});
	
	$(target).on("change", function(){
		
		var target_wrap		= $(this).parents(wrap);
		var target_toggle	= $(target_wrap).find(toggle);
		var target_unit		= $(target_wrap).find(target);
		
		var checkbox_num	= $(target_unit).length;
		var checked_num		= $(target_unit).filter(":checked").length;
		var is_all_checked	= checkbox_num <= checked_num;
		
		$(target_toggle).prop("checked", is_all_checked);
		
	}).change();
	
}





function modal(){
	
	var wrap	= ".js-modal";
	var target	= ".js-modal__view";
	var toggle	= ".js-modal__toggle";
	
	if( ! $(wrap).length )	{ return false; }
	
	$(toggle).on("click", function(){
		
		var modal_viewer	= $(this).parents(wrap).find(target);
		var reverse_check	= ! $(modal_viewer).prop("checked");
		
		$(modal_viewer).prop("checked", reverse_check);
		
	});
	
}



function tab(){
	
	var trigger	= ".js-tab";
	var target	= ".js-tab__target";
	var parent	= ".js-tab__parent";
	var active	= "js-tab--active";
	
	if( ! $(trigger).length )	{ return false; }
	
	$(trigger).on("change", function(){
		
		var active_target = $(this).val();
		var all_target = $(this).attr("name");
		
		if( ! $(active_target).length )	{ return true; }
		if( ! $(all_target).length )	{ return true; }
		
		$(all_target).removeClass(active);
		$(active_target).addClass(active);
		
	}).filter(":checked").change();
	
	
	var form = $(trigger).parents("form");
	
	if( ! $(form).length ){ return false; }
	
	$(form).on("reset", function(){
		setTimeout(function(){
			$(form).find(trigger).filter(":checked").change();
		}, 0);
	});
	
}



function formAgree(){
	
	// chromeはページ遷移時のチェックボックスの状態がすぐに再現されないのでwindow.onload時に動かすこと
	
	var wrap	= ".js-agree";
	var target	= ".js-agree__target";
	var trigger	= ".js-agree__trigger";
	
	if( ! $(wrap).length )		{ return false; }
	if( ! $(target).length )	{ return false; }
	if( ! $(trigger).length )	{ return false; }
	
	$(trigger).on("change", function(){
		
		var self_target	= $(this).parents(wrap).find(target);
		var agreement	= ! $(this).prop("checked");
		
		$(self_target).prop("disabled", agreement );
		
	}).change();
	
}



function windowScrolled(){
	
	var target	= ".g-container";
	var trigger	= ".g-header";
	var active	= "is-scrolled";
	
	if( ! $(target).length )	{ return false; }
	
	var throttle = eventThrottle(function(){
		
		var scope = $(trigger).outerHeight();
		
		if( $(window).scrollTop() > scope ){
			$(target).addClass(active);
		}else{
			$(target).removeClass(active);
		}
		
	}, 1000 / 60);
	
	$(window).on("resize, scroll", throttle).scroll();
	
}



function multiOption(){
	
	var wrap	= ".js-multi-option";
	var toggle	= ".js-multi-option__toggle";
	var target	= ".js-multi-option__target";
	var option	= ".js-multi-option__option";
	var closer	= ".js-multi-option__closer";
	
	var data_placeholder = "placeholder";
	
	var active	= "js-multi-option--active";
	var checked	= "js-multi-option--checked";
	
	if( ! $(wrap).length )		{ return false; }
	if( ! $(toggle).length )	{ return false; }
	if( ! $(target).length )	{ return false; }
	
	$(toggle).on("click", function(){
		$(this).parents(wrap).toggleClass(active);
	});
	
	$(closer).on("click", function(){
		$(this).parents(wrap).removeClass(active);
	});
	
	$(option).on("change", function(){
		
		var parent		= $(this).parents(wrap);
		var self_toggle	= $(parent).find(toggle);
		var self_target	= $(parent).find(target);
		var self_option	= $(parent).find(option);
		
		var not_checked = $(self_option).filter(":checked").length == 0;
		
		if( not_checked ){
			
			$(parent).removeClass(checked);
			
			var placeholder	= $(self_toggle).data(data_placeholder);
			$(self_toggle).text( placeholder );
			
		}else{
			
			$(parent).addClass(checked);
			
			var checked_array = $(self_option).filter(":checked").map(function(){
				return $(this).parent().text();
			}).get();
			
			$(self_toggle).text( checked_array.join("; ") );
			
		}
		
	}).change();
	
}



function subMenuToggle(){
	
	var wrap		= ".js-submenu";
	var trigger		= ".js-submenu__trigger";
	var active		= "js-submenu--active";
	
	
	
	$(trigger).on("click", function(){
		
		var parent = $(this).parents(wrap);
		
		$(parent).toggleClass(active);
		
		return false;
		
	});
	
}



function jsIn(){
	
	var trigger	= ".js-in";
	var active	= "js-in--active";
	
	if( ! $(trigger).length ){ return false; }
	
	$(trigger).each(function(){
		
		var dom = $(this);
		
		var throttle = eventThrottle(function(){
			
			var trigger_y = $(dom).offset().top - ( $(window).height() * .8 ); 	// 画面の中央がトリガー
			
			if( $(dom).hasClass(active) )				{ return true; }
			if( $(window).scrollTop() <= trigger_y )	{ return true; }
			
			$(dom).addClass(active);
			
		}, 1000 / 60);
		
		$(window).on("scroll", throttle).scroll();
		
	});
	
}



function eventThrottle( doSomething, FPS ){
	
	doSomething();
	
	var stamp_time = new Date().getTime();
	
	return function(){
		
		var progress_time = new Date().getTime() - stamp_time;
		
		if( progress_time < FPS ){ return true; }
		
		stamp_time = new Date().getTime();
		
		doSomething();
		
	}
	
}



function convertImgToBG(){
	
	var selector_wrap		= ".js-bg";
	var selector_trigger	= ".js-bg__trigger";
	
	if( ! $(selector_wrap).length )		{ return false; }
	if( ! $(selector_trigger).length )	{ return false; }
	
	$(selector_trigger).each(function(){
		$(this).parents(selector_wrap).css("background-image", "url("+ $(this).attr("src") +")");
	});
	
}






function eventThrottle( doSomething, FPS ){
	
	doSomething();
	
	var stamp_time = new Date().getTime();
	
	return function(){
		
		var progress_time = new Date().getTime() - stamp_time;
		
		if( progress_time < FPS ){ return true; }
		
		stamp_time = new Date().getTime();
		
		doSomething();
		
	}
	
}






/*! CSS.supports() Polyfill
* https://gist.github.com/codler/03a0995195aa2859465f
* Copyright (c) 2014 Han Lin Yap http://yap.nu; MIT license */

if (!("CSS" in window)) {
	window.CSS = {};
}

if (!("supports" in window.CSS)) {
	window.CSS._cacheSupports = {};
	window.CSS.supports = function(propertyName, value) {
		var key = [propertyName, value].toString();
		if (key in window.CSS._cacheSupports) {
			return window.CSS._cacheSupports[key];
		}

		function cssSupports(propertyName, value) {
			var style = document.createElement("div").style;

			// 1 argument
			if (typeof value == "undefined") {
				function mergeOdd(propertyName, reg) {
					var arr = propertyName.split(reg);

					if (arr.length > 1) {
						return arr.map(function(value, index, arr) {
							return (index % 2 == 0) ? value + arr[index+1] : "";
						}).filter(Boolean);
					}
				}

				// The regex will do this "( a:b ) or ( c:d )" => ["( a:b ", ")", "(", " c:d )"]
				var arrOr = mergeOdd(propertyName, /([)])\s*or\s*([(])/gi);
				if (arrOr) {
					return arrOr.some(function(supportsCondition) { return window.CSS.supports(supportsCondition); });
				}
				var arrAnd = mergeOdd(propertyName, /([)])\s*and\s*([(])/gi);
				if (arrAnd) {
					return arrAnd.every(function(supportsCondition) { return window.CSS.supports(supportsCondition); });
				}

				// Remove the first and last parentheses
				style.cssText = propertyName.replace("(","").replace(/[)]$/, "");
			// 2 arguments
			} else {
				style.cssText = propertyName + ":" + value;
			}

			return !!style.length;
		}

		return window.CSS._cacheSupports[key] = cssSupports(propertyName, value);
	};
}
