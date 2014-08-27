hexo.extend.helper.register('backgroundImage', function(page){

  var backgroundBase = '/images/backgrounds/blurred/',
      background = null;

  if (page.layout == "post") {
    background = backgroundFromSlug(page.slug);
  } else if (page.posts) {
    page.posts.each(function(i) {
      if (background === null &&
          (typeof i.page === "undefined" || i.page === 1)
         ) {
        background = backgroundFromSlug(i.slug);
      }
    });
  } else {
    background = backgroundBase + 'kuching-borneo.jpg'
  }

  function backgroundFromSlug(slug) {
    return backgroundBase + slug.replace('/', '-') + '.jpg'
  }

  return background;

});
