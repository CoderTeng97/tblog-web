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
import axios from "axios";
import { async } from "q";
export default {
  props: ["value"],
  data() {
    return {
      policy: null
    };
  },
  methods: {
    onFileUploadRequest() {
      console.log(evt);
    }
  },
  async mounted() {
    console.log(this.policy);
    if (!window.CKEDITOR) {
      var blogEditor = document.getElementById("blogEditor");
      blogEditor.style.display = "none";
      //await loadJs("https://cdn.bootcss.com/ckeditor/4.12.1/ckeditor.js");
      await loadJs("https://cdn.bootcss.com/ckeditor/4.11.4/ckeditor.js");
      blogEditor.style.display = "block";
    }
    var config = {
      title: "想你所写 ----TBLOG博客编辑器",
      height: "600",
      width: "50%",
      language: "zh-cn",
      extraPlugins:
        "codesnippet,image2,justify,link,preview,embedbase,colorbutton",
      removePlugins: "sourcedialog,",
      codeSnippet_theme: "monokai_sublime",
      codeSnippet_languages: {
        javascript: "JavaScript",
        java: "java"
      },
      filebrowserImageUploadUrl: "/"
    };

    CKEDITOR.replace("blogEditor", config);
    CKEDITOR.instances.blogEditor.on("fileUploadResponse", function(evt) {
      console.log(evt.data);
      // Prevent the default response handler.
      evt.stop();
      // Get XHR and response.
      var data = evt.data;
      data.url = data.fileLoader.ossPath;
    });
    async function getPolicy() {
      return axios("/oss/wpolicy");
    }
    // const getPolicy = () => {
    //   axios('/oss/wpolicy')
    //       //this.policy = (await axios('/oss/wpolicy')).data.data
    // }
    CKEDITOR.instances.blogEditor.on(
      "fileUploadRequest",
      evt => {
        var fileLoader = evt.data.fileLoader,
          formData = new FormData(),
          xhr = fileLoader.xhr;
          getPolicy().then(val => {
          let policy = val.data.data;
          xhr.open("POST", policy.host, true);
          console.log(policy);
          for (let key of Object.keys(policy)) {
            formData.append(key, policy[key]);
          }
          let ossPath = policy.dir + "/test";
          formData.append("key", ossPath);
          formData.append("file", fileLoader.file);
          fileLoader.xhr.send(formData);
          fileLoader.ossPath = policy.host + "/" + ossPath;
        });
        evt.stop();
      },
      null,
      null,
      5
    );
  }
};
</script>

