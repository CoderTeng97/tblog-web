<template>
  <div class="article-index">
    <el-form :model="articleInfo" class="releaseForm" label-position="left" label-width="50px">
      <!-- title -->
      <el-row :gutter="20">
        <el-col :span="24">
          <el-input placeholder="标题：我是一个标题" v-model="articleInfo.title" class="input-with-select">
            <el-select
              v-model="articleInfo.type"
              slot="prepend"
              placeholder="请选择"
              class="header-select"
            >
              <el-option label="原创" value="1"></el-option>
              <el-option label="转载" value="2"></el-option>
            </el-select>
          </el-input>
        </el-col>
      </el-row>

      <!-- 分类选项 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item class="article-el-from">
            <el-select
              v-model="classificationTem"
              multiple
              collapse-tags
              placeholder="请选择文章分类"
              class="article-select-two"
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
        <el-col :span="18">
          <el-form-item class="article-el-from">
            <el-select
              v-model="lableTmp"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="标签：可自定义输入,可以选择多个"
              class="article-select-two"
            >
              <el-option></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import CKEditor from "@/components/CKEditor";
import { releaseArticle, uploadSingleFile } from "@/utils/api.js";
export default {
  name: "ArticleIndex",
  data() {
    return {
      articleInfo: {
        title: "",
        description: "",
        auther: "",
        label: "",
        classification: "",
        picUrl: "",
        type: "原创"
      },
      //临时变量
      lableTmp: [],
      classificationTem: [],
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
  mounted() {},
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    async uploadHttp({ file }) {
      let info = await uploadSingleFile(file);
      console.log("文件上传" + info);
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

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixins.styl';

.article-el-from >>> .el-form-item__content {
  margin-left: 0 !important;
}

.article-index {
  width: 80%;
  height: auto;
  padding: 0.5rem;
  margin: 0.5rem auto;
  border: 1px solid $headerborderColor;
  border-radius 5px;
  font-family: $logofont;

  .header-select {
    width: 1.6rem;
  }

  .article-el-from {
    margin-top: 0.4rem;
  }

  .article-select-two {
    width: 100%;
  }
}
</style>