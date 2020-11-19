$(function(){
	
	//toggleSearchGroup();
	
	stickyForIE();
	
	stickyPagetopAdjust();
	
	//replaceShareLink();
	
});



function stickyPagetopAdjust(){
	
	var scope		= ".js-sticky__scope";
	var target		= ".js-sticky__target";
	var pagetop		= ".g-pagetop";
	
	if( ! $(scope).length )		{ return false; }
	if( ! $(target).length )	{ return false; }
	if( ! $(pagetop).length )	{ return false; }
	
	var throttle = eventThrottle(function(){
		
		var scope_start	= $(scope).offset().top - $(window).height();
		var scope_end	= $(scope).offset().top + $(scope).outerHeight() - $(window).height();
		var pos_bottom	= $(target).outerHeight();
		
		if(
		   	! matchMedia("(max-width: 768px)").matches ||
			! $(".g-container").hasClass("is-scrolled") ||
			  $(window).scrollTop() < scope_start ||
			  $(window).scrollTop() > scope_end
		){
			$(pagetop).css("bottom", 0);
			return false;
		}
		
		$(pagetop).css("bottom", pos_bottom +"px");
		
	}, 1000 / 60);
	
	$(window).on("scroll resize", throttle);
	
}



function stickyForIE(){
	
	var scope		= ".js-sticky__scope";
	var target		= ".js-sticky__target";
	var ignition	= "js-stick--ignition";
	var active		= "js-sticky--active";
	
	if( CSS.supports("position", "sticky") ){ return false; }
	
	$(scope).addClass(ignition);
	
	var scope_end	= getScopeEnd();
	
	var throttle = eventThrottle(function(){
		
		var scope_start	= $(scope).offset().top - $(window).height();
		//var scope_end	= $(scope).offset().top + $(scope).outerHeight() - $(window).height();
		
		if(
			$(window).scrollTop() > scope_start &&
			$(window).scrollTop() < scope_end
		){
			$(target).addClass(active);
		}else{
			$(target).removeClass(active);
		}
		
	}, 1000 / 60);
	
	$(window).on("scroll", throttle);
	$(window).on("resize", function(){
		scope_end	= getScopeEnd();
	})
	
	function getScopeEnd(){
		
		return $(scope).offset().top + $(scope).outerHeight() - $(window).height();
		
	}
	
}



// TODO : システム側で対応してもらいたい
function replaceShareLink(){
	
	var target = ".js-share-replace";
	
	if( ! $(target).length )	{ return false; }
	
	var replace_param = {
		 "___%%page_url%%___":		location.href
		,"___%%page_title%%___":	document.title
	};
	
	var add_url = {
		"facebook.com":		"?u=___%%page_url%%___"
		,"twitter.com":		"?url=___%%page_url%%___&text=___%%page_title%%___"
		,"hatena.ne.jp":	"?mode=confirm&url=___%%page_url%%___&title=___%%page_title%%___"
	};
	
	for( var pkey in replace_param ){
		for( var ukey in add_url ){
			
			if( ! add_url[ukey].match(pkey) ){ continue; }
			
			add_url[ukey] = add_url[ukey].replace( pkey, replace_param[pkey] );
			
		}
	}
	
	$(target).each(function(){
		
		for( var search_domain in add_url ){
			
			var match_domain = $(this).attr("href").match( new RegExp(search_domain, "igm") );
			
			if( ! match_domain ){ continue; }
			
			var replace_href = $(this).attr("href") + add_url[match_domain];
			
			$(this).attr("href", replace_href);
			
		}
		
	});
	
}
