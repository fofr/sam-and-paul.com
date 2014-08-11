(function(){
  $('a[data-key]').each(bindKeyToLink);
})();

function bindKeyToLink() {
  var element = $(this);
  Mousetrap.bind(element.data('key'), function() {
    window.location.href = element.attr('href');
  });
}
