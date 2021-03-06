/*
  Vim tag

  Creates a <figure> containing
  * a vimeo video
  * a <figcaption> based on content of tag
  * capability to render that content as markdown
  * CSS class hooks

  Uses jsdom and jquery to strip out HTML from
  rendered markdown version of caption for use as
  alt text.

  Usage:
  {% vim id %}
  Some _caption_ with markdown
  {% endvim %}
*/

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM("");
var $ = require('jquery')(window);

hexo.extend.tag.register('vim', function(args, content) {

  var render = hexo.render,
      id = args[0],
      markdownCaption = render.renderSync({text: content, engine: 'markdown'}),
      renderedCaption = $(markdownCaption).unwrap().html(); //remove wrapping paragraph element

  return '<figure class="generated-figure generated-figure--retina generated-figure--620 generated-figure--video"><div class="video-wrapper"><iframe class="vimeo" src="https://player.vimeo.com/video/'+ id +'" width="620" height="413" frameborder="0"></iframe></div><figcaption class="generated-figure-caption">'+ renderedCaption + '</figcaption></figure>';

}, {ends: true});
