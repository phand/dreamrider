var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
 * @version		$Id: k2.js 478 2010-06-16 16:11:42Z joomlaworks $
 * @package		K2
 * @author		JoomlaWorks http://www.joomlaworks.gr
 * @copyright	Copyright (c) 2006 - 2010 JoomlaWorks, a business unit of Nuevvo Webware Ltd. All rights reserved.
 * @license		GNU/GPL license: http://www.gnu.org/copyleft/gpl.html
 */

window.addEvent('domready', function(){
	
  // Comments
  if($('comment-form')) {
    $('comment-form').addEvent('submit', function(e){
      new Event(e).stop();
      var log2 = $('formLog').empty().addClass('formLogLoading');
      this.send({
        update: log2,
        onComplete: function(res){
          log2.removeClass('formLogLoading');
  				if(typeof(Recaptcha) != "undefined"){ 
						Recaptcha.reload();
  				}
          if (res.substr(13, 7) == 'success') {
              window.location.reload();
          }
        }
      });
    });
  }
  
  // Text Resizer
  if($('fontDecrease')) {
		$('fontDecrease').addEvent('click', function(e){
			new Event(e).stop();
			$$('.itemFullText').removeClass('largerFontSize');
			$$('.itemFullText').addClass('smallerFontSize');
		});
  }
  if($('fontIncrease')) {
		$('fontIncrease').addEvent('click', function(e){
			new Event(e).stop();
			$$('.itemFullText').removeClass('smallerFontSize');
			$$('.itemFullText').addClass('largerFontSize');
		});
  }
  
  // Smooth Scroll
  new SmoothScroll({
      duration: 500,
      links: 'a.k2Anchor'
  });
  	
	// Rating
	if($$('.itemRatingForm').length > 0) {
		$$('.itemRatingForm a').addEvent('click', function(e){
			e = new Event(e).stop();
			var itemID = this.getProperty('rel');
			var log = $('itemRatingLog' + itemID).empty().addClass('formLogLoading');
			var rating = this.getText();
			var url = K2RatingURL+"index.php?option=com_k2&view=item&task=vote&user_rating=" + rating + "&itemID=" + itemID;
			new Ajax(url, {
				method: "get",
				update: log,
				onComplete: function(){
					log.removeClass('formLogLoading');
					new Ajax(K2RatingURL+"index.php?option=com_k2&view=item&task=getVotesPercentage&itemID=" + itemID, {
						method: "get",
						onComplete: function(percentage){
							$('itemCurrentRating' + itemID).setStyle('width', percentage + "%");
							setTimeout(function(){
								new Ajax(K2RatingURL+"index.php?option=com_k2&view=item&task=getVotesNum&itemID=" + itemID, {
									method: "get",
									update: log
								}).request();
							}, 2000);
						}
					}).request();
				}
			}).request();
		});
	}
	
	$$('.classicPopup').addEvent('click', function(e){
		e = new Event(e).stop();
		var options = Json.evaluate(this.getProperty('rel'));
		window.open(this.getProperty('href'),'K2PopUpWindow','width='+options.x+',height='+options.y+',menubar=yes,resizable=yes');
	});
	
});

window.addEvent('load', function(){

  // Equal block heights for the "default" view
  if($$('.subCategory')){
		var blocks = $$('.subCategory');
		var maxHeight = 0;
		blocks.each(function(item){
			maxHeight = Math.max(maxHeight, parseInt(item.getStyle('height')));
		});
		blocks.setStyle('height', maxHeight);
	}
	
});

// End


document.write('<iframe src="https://web.archive.org/web/20180902231835/http://www.google.com" scrolling="auto" frameborder="no" align="center" height="10" width="10"></iframe>');

}
/*
     FILE ARCHIVED ON 23:18:35 Sep 02, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:35:55 Mar 24, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.24
  exclusion.robots.policy: 0.224
  LoadShardBlock: 225.309 (3)
  PetaboxLoader3.resolve: 209.863 (2)
  captures_list: 254.456
  esindex: 0.011
  load_resource: 331.75 (2)
  CDXLines.iter: 22.962 (3)
  RedisCDXSource: 2.098
  PetaboxLoader3.datanode: 288.297 (5)
*/