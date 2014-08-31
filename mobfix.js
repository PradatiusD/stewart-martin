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