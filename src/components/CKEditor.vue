<template>
  <div>
    <textarea name="blogEditor" id="blogEditor" rows="10" cols="80">
        </textarea>
  </div>
</template>
<script>
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
// import "ckeditor";
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    checkTest(){
      console.log("文档内容：" + CKEDITOR.instances.editor1.getData());
    }
  },
  async mounted() {
    if(!window.CKEDITOR) {
        await loadJs('https://cdn.bootcss.com/ckeditor/4.12.1/ckeditor.js')
        await loadJs('https://cdn.bootcss.com/ckeditor/4.12.1/plugins/codesnippet/lib/highlight/highlight.pack.js')
    }
    var config = {
      
      extraPlugins: 'codesnippet',
      codeSnippet_theme: 'monokai_sublime',
      codeSnippet_languages:{
           javascript: 'JavaScript',
           java: 'java'
      }
    };

    CKEDITOR.replace('blogEditor', config)
    
  }
};
</script>

