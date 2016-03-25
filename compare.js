		//<![CDATA[
		(function($) {
		
			var $aajkls = jQuery.noConflict();
			$aajkls(document).ready(function(){
			$aajkls('.bottomheader ul li').click(function(){
			$aajkls(this).find('ul#section').stop().slideToggle('slow');
					});
				}
			);

			var $hide_search = jQuery.noConflict();
			$hide_search(document).ready(function(){
			    $hide_search(".container").click(function(){
			        $hide_search(".search ul ul").hide("slow", function(){
			        });
			    });
			});
			
			var $hide_search_bottom = jQuery.noConflict();
			$hide_search_bottom(document).ready(function(){
			    $hide_search_bottom(".bottomheader nav ul li").click(function(){
			        $hide_search_bottom(".search ul ul").hide("slow", function(){
			        });
			    });
			});
			var $hide_bottom_search = jQuery.noConflict();
			$hide_bottom_search(document).ready(function(){
			    $hide_bottom_search(".search ul li").click(function(){
			        $hide_bottom_search(".bottomheader ul ul").slideUp("slow", function(){
			        });
			    });
			});
			
			var $hide_bottom_container = jQuery.noConflict();
			$hide_bottom_container(document).ready(function(){
			    $hide_bottom_container(".container").click(function(){
			        $hide_bottom_container(".bottomheader ul ul").slideUp("slow", function(){
			        });
			    });
			});
			var $nav_hide_ul = jQuery.noConflict();
			$nav_hide_ul(document).ready(function(){
			    $nav_hide_ul("#toggle-btn").click(function(){
			        $nav_hide_ul(".bottomheader ul ul").slideUp("slow", function(){
			        });
			    });
			});
			
			var $hide_bottom_login = jQuery.noConflict();
			$hide_bottom_login(document).ready(function(){
			    $hide_bottom_login("ul.ul-search li.li-search").click(function(){
			        $hide_bottom_login("ul.ul-header-login ul").hide("slow", function(){
			        });
			    });
			});
			var $hide_login_search = jQuery.noConflict();
			$hide_login_search(document).ready(function(){
			    $hide_login_search("ul.ul-header-login li").click(function(){
			        $hide_login_search("ul.ul-search ul").hide("slow", function(){
			        });
			    });
			});
			
			
			var $around_search = jQuery.noConflict();
			$around_search(document).ready(function(){
			$around_search('.search ul.ul-search li.li-search').click(function(){
			$around_search(this).find('ul').stop().fadeIn('slow');
					});
				}
			);
			
			var $header_search = jQuery.noConflict();
			$header_search(document).ready(function(){
			$header_search('.search ul.ul-header-login li').click(function(){
			$header_search(this).find('ul').stop().slideToggle('fast');
					});
				}
			);
			
			
		
			<!-- FIX MENU -->
			
	
			var $jnoc = jQuery.noConflict();
			$jnoc(document).ready(function() {
			// Menentukan elemen yang dijadikan sticky yaitu .nav
			var stickyNavTop = $jnoc('.navigation').offset().top;
			var stickyNav = function(){
			    var scrollTop = $jnoc(window).scrollTop();  
			    // Kondisi jika discroll maka menu akan selalu diatas, dan sebaliknya        
			    if (scrollTop > stickyNavTop) { 
			        $jnoc('.navigation').addClass('fixed');
			    } else {
			        $jnoc('.navigation').removeClass('fixed');
			    }
			};
			// Jalankan fungsi
			stickyNav();
			jQuery(window).scroll(function() {
			    stickyNav();
			});
			});
			
			
		
		/*----------------------------------------------------*/
		/* Adjust Primary Navigation Background Opacity
		------------------------------------------------------*/
	   $(window).on('scroll', function() {
	
			var h = $('header').height();
			var y = $(window).scrollTop();
	      var header = $('#main-header');
	
		   if ((y > h + 30 ) && ($(window).outerWidth() > 768 ) ) {
		      header.addClass('opaque');
		   }
	      else {
	         if (y < h + 30) {
	            header.removeClass('opaque');
	         }
	         else {
	            header.addClass('opaque');
	         }
	      }
	
		});
	
	   /*-----------------------------------------------------*/
	  	/* Mobile Menu
	   ------------------------------------------------------ */  
	   var menu_icon = $("");
	  	var toggle_button = $("<a>", {                         
	                        id: "toggle-btn", 
	                        html : "<span class='menu-text'><i class='fa fa-bars'></i></span>",
	                        title: "Menu",
	                        href : "#" } 
	                        );
	  	var nav_wrap = $('nav#nav-wrap');
	  	var nav = $("ul#nav");
	  	var nav_ul = $("ul#nav ul");  
	   
	   /* if JS is enabled, remove the two a.mobile-btns 
	  	and dynamically prepend a.toggle-btn to #nav-wrap */
	  	nav_wrap.find('a.mobile-btn').remove(); 
	  	toggle_button.append(menu_icon); 
	   nav_wrap.prepend(toggle_button); 
	
	  	toggle_button.on("click", function(e) {
	   	e.preventDefault();
	    	nav.slideToggle("fast"); 
	    	nav_ul.slideToggle("fast");     
	  	});
	
	  	if (toggle_button.is(':visible')) nav.addClass('mobile');
	  	$(window).resize(function() {
	   	if (toggle_button.is(':visible')) nav.addClass('mobile');
	    	else nav.removeClass('mobile');
	  	});
	
	  	$('ul#nav li a').on("click", function() {      
	   	if (nav.hasClass('mobile')) nav.fadeIn('fast');      
	  	});
	  	$('ul#nav ul li a').on("click", function() {      
	   	if (nav.hasClass('mobile')) nav.slideUp('fast');      
	  	});
	  	$('ul#nav ul li a').on("click", function() {      
	   	if (nav_ul.hasClass('mobile')) nav_ul.fadeOut('fast');      
	  	});
	
	
	  	/*----------------------------------------------------*/
	  	/* Smooth Scrolling
	  	------------------------------------------------------ */
	  	$('.smoothscroll').on('click', function (e) {
		 	
		 	e.preventDefault();
	
	   	var target = this.hash,
	    	$target = $(target);
	
	    	$('html, body').stop().animate({
	       	'scrollTop': $target.offset().top
	      }, 800, 'swing', function () {
	      	window.location.hash = target;
	      });
	
	  	});
	  	
	  	
	  	
	  	/*----------------------------------------------------*/
	  	/* Highlight the current section in the navigation bar
	  	------------------------------------------------------*/
		var sections = $("section"),
		navigation_links = $("#nav-wrap a");
	
		if($("body").hasClass('homepage')) {
	
			sections.waypoint( {
	
		      handler: function(event, direction) {
	
				   var active_section;
	
					active_section = $(this);
					if (direction === "up") active_section = active_section.prev();
	
					var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
	
		         navigation_links.parent().removeClass("current");
					active_link.parent().addClass("current");
	
				},
				offset: '25%'
			});
	
		}
	 

	  	
		
	   /*----------------------------------------------------*/
	  	/* FitText Settings
	  	------------------------------------------------------ */
	  
	  	
		// Loading
	    $('body').show();
	    $('.version').text(NProgress.version);
	    NProgress.start();
	    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 1000);
		
				 
		 })(jQuery);
			
		//]]>
