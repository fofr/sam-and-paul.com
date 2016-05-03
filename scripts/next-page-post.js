hexo.extend.helper.register('nextPagePost', function(post){

  if (typeof post.pages !== "number") {
    return false;
  }

  if (post.page >= post.pages) {
    return false;
  }

  var slug = post.path.replace(/^[\d]{4}\/[\d]{2}\//, '').replace(/\/[\d]+\/$/, '/'),
      nextPage = post.page + 1,
      nextPageSlug = slug + nextPage;

  return this.site.posts.findOne({slug: nextPageSlug});
});
