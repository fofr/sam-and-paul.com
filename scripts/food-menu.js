/* Usage:
{% menu %}
* Razor clams
* Fuet sausage
{% endmenu /%}
*/
hexo.extend.tag.register('menu', function(args, content, options){

  var items = content.split('\n'),
      list = "";

  for (var i = 0, l = items.length; i < l; i++) {
    var text = items[i].replace('*', '');
    list += "<li>" + text + "</li>";
  }

  return '<aside class="menu">\
    <h3 class="menu-header">Menu</h3>\
    <ul>' + list + '</ul>\
    </aside>';
}, true);
