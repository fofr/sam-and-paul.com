hexo.extend.helper.register('nextPagePath', function(post){

  if (typeof post.pages !== "number") {
    return false;
  }

  var pagePath = post.path.replace(/\/[\d]+\/$/, '/'),
      nextPage = post.page + 1;

  if (post.page == post.pages) {
    return false;
  }

  return '/' + pagePath + nextPage + '/';
});
