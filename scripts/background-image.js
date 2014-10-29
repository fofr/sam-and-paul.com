hexo.extend.helper.register('backgroundImage', function(page){

  var backgroundBase = '/images/backgrounds/blurred/',
      background = null;

  if (page.layout == "post") {
    background = backgroundFromSlug(page.slug);
  } else {
    background = backgroundBase + 'songpan-china.jpg'
  }

  function backgroundFromSlug(slug) {
    return backgroundBase + slug.replace('/', '-') + '.jpg'
  }

  return background;

});
