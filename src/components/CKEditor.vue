<template>
  <div>
    <textarea name="blogEditor" id="blogEditor"></textarea>
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
    onFileUploadRequest() {
      console.log(evt);
    }
  },
  async mounted() {
    if (!window.CKEDITOR) {
      var blogEditor = document.getElementById('blogEditor');
      blogEditor.style.display = 'none';
      await loadJs("https://cdn.bootcss.com/ckeditor/4.12.1/ckeditor.js");
       blogEditor.style.display = 'block';
    }
    var config = {
      //removePlugins:'image',
      title: "想你所写 ----TBLOG博客编辑器",
      height: "600",
      width:"50%",
      language: "zh-cn",
      extraPlugins: "codesnippet,easyimage,justify,link,preview,embedbase",
      codeSnippet_theme: "monokai_sublime",
      codeSnippet_languages: {
        javascript: "JavaScript",
        java: "java"
      },
    }
      // on: {
      //   paste: function(evt) {
      //     for (var i = 0; i < evt.data.dataTransfer.getFilesCount(); i++) {
      //       var file = evt.data.dataTransfer.getFile(i);

      //       if (CKEDITOR.fileTools.isTypeSupported(file, /image\/png/)) {
      //         var loader = CKEDITOR.editor;
      //         console.log(loader);

              // loader.on("update", function() {
              //   document.getElementById("uploadProgress").innerHTML =
              //     loader.status;
              // });

              // loader.on("error", function() {
              //   alert("Error!");
              // });

              // loader.loadAndUpload("http://upload.url/");

              // evt.data.dataValue += "loading...";
    //         }
    //       }
    //     }
    //   }
    //   //  on: {
    //   //   fileUploadRequest: function(evt) {
    //   //       console.log(evt.data.requestData.upload.file); // 'editor1'
    //   //       //return 发送到服务器的所有数据对象
    //   //   }
    //   // },
    //   //filebrowserImageUploadUrl:'http://localhost:8090/article/editor/upload'
    // };
    //console.log(ckeditor);
    CKEDITOR.replace("blogEditor", config);
  }
};
</script>

