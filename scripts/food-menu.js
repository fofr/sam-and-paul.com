/* Usage:
{% menu %}
* Razor clams
* Fuet sausage
{% endmenu /%}
*/
hexo.extend.tag.register('menu', function(args, content){

  var render = hexo.render,
      menu = render.renderSync({text: content, engine: 'markdown'});

  return '<aside class="menu">\
    <h3 class="menu-header">Menu</h3>\
    ' + menu + '\
    </aside>';
}, {ends: true});
