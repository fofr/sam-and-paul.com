/*
  YT tag

  Creates a <figure> containing
  * a youtube video
  * a <figcaption> based on content of tag
  * capability to render that content as markdown
  * CSS class hooks

  Uses jsdom and jquery to strip out HTML from
  rendered markdown version of caption for use as
  alt text.

  Usage:
  {% yt id %}
  Some _caption_ with markdown
  {% endyt %}
*/

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
var $ = require('jquery')(window);

hexo.extend.tag.register('yt', function(args, content) {

  var render = hexo.render,
      id = args[0],
      markdownCaption = render.renderSync({text: content, engine: 'markdown'}),
      renderedCaption = $(markdownCaption).unwrap().html(); //remove wrapping paragraph element

  return '<figure class="generated-figure generated-figure--retina generated-figure--620 generated-figure--video"><div class="video-wrapper"><iframe class="youtube" src="https://www.youtube.com/embed/'+ id +'" width="620" height="349" frameborder="0"></iframe></div><figcaption class="generated-figure-caption">'+ renderedCaption + '</figcaption></figure>';

}, {ends: true});
