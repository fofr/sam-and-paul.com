/*
  Video tag

  Creates a <video> containing
  * an mp4 source at 480p
  * a webm source at 480p
  * a download link to mp4 at 720p

  Usage:
  {% video src %}
  Some _caption_ with markdown
  {% endvideo}
*/

hexo.extend.tag.register('video', function(args, content) {

  var image_dir = hexo.config.image_dir,
      video = args[0];

  return '<figure class="generated-figure generated-figure--retina generated-figure--620"><video width="620" controls poster="' + image_dir + video + '-poster.jpg"><source src="' + image_dir + video + '-480p.mp4" type="video/mp4"><source src="' + image_dir + video + '-480p.webm" type="video/webm">Your browser doesn\'t support the HTML5 video tag.</video><figcaption class="generated-figure-caption"><a href="' + image_dir + video + '-720p.mp4" rel="download">Download high resolution video</a></figcaption></figure>';
}, {ends: true});
