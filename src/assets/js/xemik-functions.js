/**
 * data
 * *************************
 */

const md = window.markdownit();

/**
 * functions
 * *************************
 */

// render a markdown file to the tag with class="markdown-body"
function renderMarkdownFile(filePath, container) {
  if (document.getElementsByClassName('markdown-body')[0]) {
    var request = new XMLHttpRequest();
    request.open('GET', filePath);
    request.responseType = 'text';

    request.onload = function () {
      let mdContent = request.response;
      mdContent = md.render(mdContent);
      container.innerHTML = mdContent;
    };

    request.send();
  }
  else
    console.log('no markdown id found')
}
