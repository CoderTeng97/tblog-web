<template>
  <div class="container">
    <h3 style="width:100%;text-align:left;">文章发布</h3>  
    <hr>
    <el-divider></el-divider>
    <el-form :model="articleInfo" class="releaseForm" label-position="right" label-suffix=":" label-width="50px">
      <el-row style="margin-bottom:50px;">
        <el-col :span="24">
          <CKEditor />
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="标题"  label-position="right">
            <el-input v-model="articleInfo.title"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="分类" >
            <el-select
              v-model="articleInfo.classification"
              multiple
              collapse-tags
              style="margin-left: 20px;"
              placeholder="请选择"
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
        <el-col :span="6">
          <el-form-item label="标签">
            <el-select
              v-model="articleInfo.label"
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
          <el-form-item label="简述">
            <el-input type="textarea" v-model="articleInfo.description"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8" >
          <el-form-item label="封面上传"  label-width="80px">
            <el-upload 
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            limit = "1"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            >
            <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
      <el-col :span="24">
            <el-form-item>
                <el-button type="infor" @click="release">发布</el-button>
            </el-form-item>
      </el-col>
    </el-row>
    </el-form>
    
   
  </div>
</template>

<script>
import CKEditor from "../components/CKEditor";
import { releaseArticle } from '../utils/api.js'
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
        label:{},
        classification: {},
        picUrl: ""
      },
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
  methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      async release(){
          let vm = this;
          /** 图片上传 */
          console.log(vm.articleInfo);
         let info = await  releaseArticle(vm.articleInfo)
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
    display:block;
}
</style>

