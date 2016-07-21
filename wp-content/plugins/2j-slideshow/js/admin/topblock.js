/*  
 * 2J SlideShow		http://2joomla.net/wordpress
 * Version:           1.2.17 - 21851
 * Author:            2J Team (c)
 * Author URI:        http://2joomla.net/wordpress
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Date:              Fri, 08 Jul 2016 07:50:53 GMT
 */

jQuery(function(){
	jQuery('.twoj_getproversion_blank').click( function(event ){
		event.preventDefault();
		window.open("http://2joomla.net/wordpress/open.php?product=2jslideshow&task=gopremium",'_blank');
		if( jQuery(this).is(".twoj_close_dialog") ) window['twojSlideshowDialog'].dialog("close");
	});
	jQuery('.twoj_getproversionforfree_blank').click( function(event ){
		event.preventDefault();
		window.open("http://2joomla.net/wordpress/open.php?product=2jslideshow&task=gopremiumforfree",'_blank');
		if( jQuery(this).is(".twoj_close_dialog") ) window['twojSlideshowDialog'].dialog("close");
	});
});