hexo.extend.helper.register('prevPagePath', function(post){

  if (typeof post.pages !== "number") {
    return false;
  }

  if (post.page == 1) {
    return false;
  }

  var pagePath = post.path.replace(/\/[\d]+\/$/, '/'),
      prevPage = post.page - 1;

  return '/' + pagePath + (prevPage > 1 ? prevPage  + '/': '');
});
