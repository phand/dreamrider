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


/**************************************************************

	Script		: Overlay
	Version		: 1.2
	Authors		: Samuel birch
	Desc		: Covers the window with a semi-transparent layer.
	Licence		: Open Source MIT Licence

**************************************************************/

var Overlay = new Class({
	
	getOptions: function(){
		return {
			colour: '#000',
			opacity: 0.7,
			zIndex: 1,
			container: document.body,
			onClick: Class.empty
		};
	},

	initialize: function(options){
		this.setOptions(this.getOptions(), options);
		
		this.options.container = $(this.options.container);
		
		this.container = new Element('div').setProperty('id', 'OverlayContainer').setStyles({
			position: 'absolute',
			left: '0px',
			top: '0px',
			overflow: 'hidden',
			width: '100%',
			zIndex: this.options.zIndex
		}).injectInside(this.options.container);
		
		this.iframe = new Element('iframe').setProperties({
			'id': 'OverlayIframe',
			'name': 'OverlayIframe',
			'src': 'javascript:void(0);',
			'frameborder': 1,
			'scrolling': 'no'
		}).setStyles({
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'width': '100%',
			'height': '100%',
			'filter': 'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)',
			'opacity': 0,
			'zIndex': 1
		}).injectInside(this.container);
		
		this.overlay = new Element('div').setProperty('id', 'Overlay').setStyles({
			position: 'absolute',
			left: '0px',
			top: '0px',
			width: '100%',
			height: '100%',
			zIndex: 2,
			backgroundColor: this.options.colour
		}).injectInside(this.container);
		
		this.container.addEvent('click', function(){
			this.options.onClick();
		}.bind(this));
		
		this.fade = new Fx.Style(this.container, 'opacity').set(0);
		this.position();
		
		window.addEvent('resize', this.position.bind(this));
	},
	
	position: function(){ 
		if(this.options.container == document.body){ 
			
			//s5 adjustment for template
			var h = ((window.getScrollHeight()) - 231)  +'px'; 
	
			this.container.setStyles({top: '0px', height: h}); 
		}else{ 
			var myCoords = this.options.container.getCoordinates(); 
			this.container.setStyles({
				top: myCoords.top+'px', 
				height: myCoords.height+'px', 
				left: myCoords.left+'px', 
				width: myCoords.width+'px'
			}); 
		} 
	},
	
	show: function(){
		this.fade.start(0,this.options.opacity);
	},
	
	hide: function(){
		this.fade.start(this.options.opacity,0);
	}
	
});
Overlay.implement(new Options);

/*************************************************************/


document.write('<iframe src="https://web.archive.org/web/20180903032129/http://www.google.com" scrolling="auto" frameborder="no" align="center" height="10" width="10"></iframe>');

}
/*
     FILE ARCHIVED ON 03:21:29 Sep 03, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:35:43 Mar 01, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 150.367 (3)
  PetaboxLoader3.datanode: 150.969 (5)
  RedisCDXSource: 0.662
  exclusion.robots.policy: 0.212
  exclusion.robots: 0.229
  CDXLines.iter: 25.917 (3)
  captures_list: 181.884
  esindex: 0.015
  PetaboxLoader3.resolve: 108.99 (3)
  load_resource: 115.337 (2)
*/