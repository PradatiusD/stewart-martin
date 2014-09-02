
(function sideMenu($){

  // Add mobile icon
  $('.site-header').find('.wrap').append('<a class="fa fa-bars" id="mobileNavOpen" href="Javascript:void(0);"></a>');

  // Create a hidden div that unites all navigation lnks
  var $hiddenNav = $('<ul id="hiddenNav" style="display:none;"></ul>');
  var $hiddenNavContent;

  $hiddenNavContent = $('.genesis-nav-menu');

  $hiddenNavContent.children('li').clone().appendTo($hiddenNav);

  $hiddenNav.appendTo($('body'));

  var jPM = $.jPanelMenu({
    menu: '#hiddenNav',
    trigger: '#mobileNavOpen',
    direction: 'right'
  });

  jPM.on();

})(jQuery);


(function correctMobileNavStructure($){

  var $menu    = $('#jPanelMenu-menu');
  var $subMenu = $menu.find('#menu-item-140').find('li');

  // First fix labels
  $subMenu.each(function(){

    var $this = $(this).find('a');
    var currentText = $this.text();
    var newText = '';

    // If last letter is s remove it 
    if (currentText[currentText.length - 1 ] == 's') {
      newText = currentText.substring(0, currentText.length - 1);
    } else {
      newText = currentText;
    }
    // Now add Photography
    $this.text(newText + ' Photography');
  });

  // Move to top of Menu
  $subMenu.prependTo($menu);

})(jQuery);