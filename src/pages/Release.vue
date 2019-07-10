<template>
  <div class="container">
    <h3 style="width:100%;text-align:left;">文章发布</h3>
    <hr />
    <el-divider></el-divider>
    <el-form
      :model="articleInfo"
      class="releaseForm"
      label-position="left"
      label-width="50px"
    >
      <el-row style="margin-bottom:50px;">
        <el-col :span="24">
          <CKEditor />
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-form-item label="标题" label-width="80px">
            <el-input v-model="articleInfo.title" placeholder="请输入标题"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="作者">
            <el-input v-model="articleInfo.author" placeholder="请输入作者"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="分类">
            <el-select
              v-model="classificationTem"
              multiple
              collapse-tags
              placeholder="请选择文章分类"
            >
              <el-option
                v-for="item in classificationOptions"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="5">
          <el-form-item label="标签">
            <el-select
              v-model="lableTmp"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="自定义输入,可以选择多个"
            >
              <el-option></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12">
          <el-form-item label="简述" label-width="80px">
            <el-input type="textarea" v-model="articleInfo.description" placeholder="请输入文章简单描述(100以内)"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="封面上传" label-width="80px">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              limit="1"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :http-request="uploadHttp"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item >
            <el-button type="primary" @click="release" style="margin-left:0;width:150px;">发布</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import CKEditor from "../components/CKEditor";
import { releaseArticle,uploadSingleFile } from "../utils/api.js";
export default {
  components: {
    CKEditor
  },
  data() {
    return {
      //文章信息
      articleInfo: {
        title: "",
        description: "",
        auther: "",
        label: "",
        classification: "",
        picUrl: ""
      },
      //临时变量
      lableTmp:[],
      classificationTem:[],
      // 分类选项
      classificationOptions: [
        {
          value: "技术"
        },
        {
          value: "产品"
        },
        {
          value: "见解"
        },
        {
          value: "感悟"
        },
        {
          value: "人生"
        }
      ]
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    async uploadHttp({file}){
      let info = await uploadSingleFile(file);
      console.log(info);
    },
    async release() {
      let vm = this;
      vm.articleInfo.label = vm.lableTmp.join("#");
      vm.articleInfo.classification = vm.classificationTem.join("#");
      /** 图片上传 */
      console.log(vm.articleInfo);
      //let info = await releaseArticle(vm.articleInfo);
      console.log(info);
      /** 信息上传 */
    }
  }
};
</script>
    
<style scope>
.container {
  padding: 0 5%;
}

.el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
.el-upload {
  display: block;
}
</style>

