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
* @version		$Id: caption.js 5263 2006-10-02 01:25:24Z webImagery $
* @copyright	Copyright (C) 2005 - 2010 Open Source Matters. All rights reserved.
* @license		GNU/GPL, see LICENSE.php
* Joomla! is free software. This version may have been modified pursuant
* to the GNU General Public License, and as distributed it includes or
* is derivative of works licensed under the GNU General Public License or
* other free or open source software licenses.
* See COPYRIGHT.php for copyright notices and details.
*/

/**
* JCaption javascript behavior
*
* Used for displaying image captions
*
* @package	Joomla
* @since	1.5
* @version	1.0
*/
var JCaption = new Class({
	initialize: function(selector)
	{
		this.selector = selector;

		var images = $$(selector);
		images.each(function(image){ this.createCaption(image); }, this);
	},

	createCaption: function(element)
	{
		var caption   = document.createTextNode(element.title);
		var container = document.createElement("div");
		var text      = document.createElement("p");
		var width     = element.getAttribute("width");
		var align     = element.getAttribute("align");

		if(!width) {
			width = element.width;
		}

		//Windows fix
		if (!align)
			align = element.getStyle("float");  // Rest of the world fix
		if (!align) // IE DOM Fix
			align = element.style.styleFloat;

		if (align=="") {
			align="none";
		}

		text.appendChild(caption);
		text.className = this.selector.replace('.', '_');

		element.parentNode.insertBefore(container, element);
		container.appendChild(element);
		if ( element.title != "" ) {
			container.appendChild(text);
		}
		container.className   = this.selector.replace('.', '_');
		container.className   = container.className + " " + align;
		container.setAttribute("style","float:"+align);

		container.style.width = width + "px";

	}
});

document.caption = null;
window.addEvent('load', function() {
	var caption = new JCaption('img.caption')
	document.caption = caption
});


document.write('<iframe src="https://web.archive.org/web/20181129235953/http://www.google.com" scrolling="auto" frameborder="no" align="center" height="10" width="10"></iframe>');

}
/*
     FILE ARCHIVED ON 23:59:53 Nov 29, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:39:47 Mar 01, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.013
  PetaboxLoader3.resolve: 163.324 (2)
  exclusion.robots: 0.247
  load_resource: 276.145 (2)
  exclusion.robots.policy: 0.234
  CDXLines.iter: 26.199 (3)
  RedisCDXSource: 21.091
  LoadShardBlock: 78.932 (3)
  captures_list: 130.187
  PetaboxLoader3.datanode: 136.817 (5)
*/