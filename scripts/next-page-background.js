hexo.extend.helper.register('nextPageBackground', function(post){

  if (typeof post.pages !== "number") {
    return false;
  }

  if (post.page >= post.pages) {
    return false;
  }

  var slug = post.slug.replace(/\/[\d]+$/, '').replace('/', '-'),
      nextPage = post.page + 1;

  return '/images/backgrounds/blurred/' + slug + '-' + nextPage + '.jpg';
});
