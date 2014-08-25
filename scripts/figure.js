/*
  Figure tag

  Creates a <figure> containing
  * an image with alt text
  * a link to a full size version of image
  * a <figcaption> based on content of tag
  * capability to render that content as markdown
  * CSS class hooks for size and orientation

  Uses jsdom and jquery to strip out HTML from
  rendered markdown version of caption for use as
  alt text.

  Usage:
  {% figure src orientation %}
  Some _caption_ with markdown
  {% endfigure}
*/

var jsdom = require('jsdom').jsdom,
    window = jsdom("").parentWindow,
    $ = require('jquery')(window);

hexo.extend.tag.register('figure', function(args, content, options) {

  var render = hexo.render,
      image = args[0],
      orientation = args[1],
      markdownCaption = render.renderSync({text: content, engine: 'markdown'}),
      renderedCaption = $(markdownCaption).unwrap().html(), //remove wrapping paragraph element
      caption = $(markdownCaption).text();

  return '<figure class="generated-figure generated-figure--retina generated-figure--620 generated-figure--'+ orientation +'"><a href="http://host.trivialbeing.org/up/'+ image +'"><img src="http://host.trivialbeing.org/up/1240/'+ image +'" alt="'+ caption +'"></a><figcaption class="generated-figure-caption">'+ renderedCaption +'</figcaption></figure>';
}, true);
