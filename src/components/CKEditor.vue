<template>
  <div>
    <textarea @fileUploadRequest="onFileUploadRequest($event)" name="blogEditor" id="blogEditor"></textarea>
  </div>
</template>
<script ></script>

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
export default {
  props: ["value"],
  data() {
    return {};
  },
  methods: {
    onFileUploadRequest(){
      console.log(evt);
    }
  },
  async mounted() {
    if(!window.CKEDITOR) {
        await loadJs('https://cdn.bootcss.com/ckeditor/4.12.1/ckeditor.js')
        await loadJs('https://cdn.bootcss.com/ckeditor/4.12.1/plugins/codesnippet/lib/highlight/highlight.pack.js')
    }
    var config = {
      //removePlugins:'image',
      height:'600',
      language:'zh-cn',
      extraPlugins: 'codesnippet',
      codeSnippet_theme: 'monokai_sublime',
      codeSnippet_languages:{
           javascript: 'JavaScript',
           java: 'java'
      },
       on: {
        fileUploadRequest: function(evt) {
            console.log(evt.data.requestData.upload.file); // 'editor1'
            //return 发送到服务器的所有数据对象
        }
      },
      filebrowserImageUploadUrl:'http://localhost:8090/article/editor/upload'
      
    };

    CKEDITOR.replace('blogEditor', config)
    
  }
};
</script>

