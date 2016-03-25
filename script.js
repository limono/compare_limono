		//<![CDATA[
		(function($) {
		
			
			var $show_log = jQuery.noConflict();
			$show_log(document).ready(function(){
			$show_log('.buttoncenterload ul li').click(function(){
			$show_log(this).find('ul.log').stop().slideToggle('slow');
					});
				}
			);
			
			var $field_portfolio = jQuery.noConflict();
			$field_portfolio(document).ready(function(){
			$field_portfolio('.ul-grid-news ul.ul-right-news li').click(function(){
			$field_portfolio(this).find('ul').stop().slideToggle('fast');
					});
				}
			);
			
			var $hide_bottom_search = jQuery.noConflict();
			$hide_bottom_search(document).ready(function(){
			    $hide_bottom_search("#results").click(function(){
			        $hide_bottom_search(".ul-grid-news ul.ul-right-news ul").hide("slow", function(){
			        });
			    });
			});
		
			
			var $leftnewsarticle = jQuery.noConflict();
			$leftnewsarticle(document).ready(function(){
			$leftnewsarticle('.leftnewsarticle ul.ul-left-share li').hover(function(){
			$leftnewsarticle(this).find('ul').stop().slideToggle('fast');
					});
				}
			);

			
			function myFunction() {
			    document.getElementById("work").addEventListener("click", myFunction);   
			}
		
			jQuery(document).ready(function(){
			jQuery('.topleft ul li').hover(function(){
			jQuery(this).find('ul').stop().slideToggle(300);
					});
				}
			);	
		
		
			jQuery(document).ready(function(){
			jQuery('.restfoot ul li.ra').hover(function(){
			jQuery(this).find('ul').stop().slideToggle('fast');
					});
				}
			);
		
			jQuery(document).ready(function(){
			jQuery('.rightabout').click(function(){
			jQuery('#toggle').slideToggle('fast');
					});
				}
			);
		
		
			jQuery(document).ready(function(){
			jQuery('#blue').click(function(){
			jQuery('#toggle').fadeIn('fast');
					});
				}
			);
		
		
		<!-- ABOUT US -->
		
		
			var $sdsd = jQuery.noConflict();
			$sdsd(document).ready(function(){
			$sdsd(this).find('.team-red').click(function(){
			$sdsd('#display').stop().fadeIn('fast');
					});
				}
			);
		
		
			var $dskac = jQuery.noConflict();
			$dskac(document).ready(function(){
			$dskac('.about-us').click(function(){
			$dskac('#toggle').slideToggle('fast');
					});
				}
			);
			
			<!-- Design -->
			var $rightdesign = jQuery.noConflict();
			$rightdesign(document).ready(function(){
			$rightdesign('.rightdesign ul.servicede li.liln').click(function(){
			$rightdesign('#displayln').stop().fadeIn('fast');
					});
				}
			);
			
			var $hide_service_design = jQuery.noConflict();
			$hide_service_design(document).ready(function(){
			    $hide_service_design(".rightdesign ul.servicede li.liln2 ").click(function(){
			        $hide_service_design("#displayln").hide("fast", function(){
			        });
			    });
			});
			
			var $hide_work_design = jQuery.noConflict();
			$hide_work_design(document).ready(function(){
			    $hide_work_design(".rightdesign ul.servicede li.liln ").click(function(){
			        $hide_work_design("#displayprocess").hide("fast", function(){
			        });
			    });
			});

			
			jQuery(document).ready(function(){
			jQuery('#dps').click(function(){
			jQuery('#displayln').fadeOut('fast');
					});
				}
			);
			$rightdesign(document).ready(function(){
			$rightdesign('.rightdesign ul.servicede li.liln2').click(function(){
			$rightdesign('#displayprocess').stop().fadeIn('fast');
					});
				}
			);
			
			jQuery(document).ready(function(){
			jQuery('#dprocess').click(function(){
			jQuery('#displayprocess').fadeOut('fast');
					});
				}
			);
		
			var $design = jQuery.noConflict();
			$design(document).ready(function(){
			$design('.ln-design').click(function(){
			$design('#toggle').slideToggle('fast');
					});
				}
			);
		
			var $saoc = jQuery.noConflict();
			$saoc(document).ready(function(){
			$saoc('#blue').click(function(){
			$saoc('#toggle').fadeIn('fast');
					});
				}
			);

		
		
   <!-- FIX MENU -->
		
		
			
			
			var $slider_glow = jQuery.noConflict();	
			$slider_glow(document).ready(function() {
			$slider_glow('#slider').cycle({
			
				fx:			'cover',
				next:		'#next',
				prev:		'#prev',
				pager:		'#pager',
				timeout:	5000,
				spedd:		1500,
				type:		'sequence',
			});	
			});
		
		 
		})(jQuery);
			
		//]]>
