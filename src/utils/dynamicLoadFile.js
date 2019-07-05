/***动态加载系统Js文件 */
const loadJs = url =>
  new Promise(resolve => {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else {
      script.onload = function() {
        setTimeout(resolve, 500);
      };
    }
    script.src = url;
    document.body.appendChild(script);
  });