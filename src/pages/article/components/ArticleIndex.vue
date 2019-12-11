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
          <el-form-item 
            label="分类："
            class="article-el-from">
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
          <el-form-item 
            label="标签:"
            class="article-el-from">
            <el-select
              v-model="lableTmp"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="标签：自定义输入,可以选择多个"
              class="article-select-two"
            >
              <el-option
                v-model="articleInfo.tablevalue"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <!-- 封面上传 -->
      <el-row :gutter="20">
            <el-col :span="24">
               <el-form-item label="封面上传" label-width="80px">
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :limit="1"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
                    :http-request="uploadHttp"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :with-credentials="true"
                    :auto-upload="false"
                  >
                     <i class="el-icon-plus"></i>
                 </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt />
                  </el-dialog>
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
        type: "原创",
        tablevalue: ''
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
      ],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },
  mounted() {},
  methods: {
    // 文件列表移除文件时的钩子
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');

        }else if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
 


    // 文件上传方法 覆盖默认的上传行为，可以自定义上传的实现
    async uploadHttp({ file }) {
      let info = await uploadSingleFile(file);
      console.log("文件上传" + info);
    },

    // 表单提交
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
  margin-left: 56px !important;
}
.article-el-from >>> .el-form-item__label {
    padding 0 !important;
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