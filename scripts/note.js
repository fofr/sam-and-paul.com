/*
Note
*/
hexo.extend.tag.register('note', function(args, content, options) {

  var render = hexo.render,
      markdownNote = render.renderSync({text: content, engine: 'markdown'});

  return '<div class="note">'+ markdownNote +'</div>';
}, true);
