<template>
  <div class="index-swiper">
    <div class="index-img">
      <img
        alt
        src="https://s3.amazonaws.com/www-inside-design/uploads/2019/07/casestudyfeature-810x810.jpg"
      />
    </div>
    <div class="index-desc">
      <h1>TBLOG</h1>
      <h3>你有你自己的博客 以及我们</h3>
      <p>社区贡献者</p>
      <div class="index-community">
        <div class="index-tearm">
            <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexSwiper"
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/main.styl';

.index-swiper {
  background-color: $headerColor;
  border: 0.02rem solid $headerborderColor;
  width: 90%;
  height: auto;
  margin: 0.5rem auto;
  padding: 0.5rem;
  display: flex;
  justify-content: space-around;
}

.index-img {
  width: 45%;

  img {
    width: 100%;
    cursor: pointer;
  }
}

.index-desc {
  width: 45%;

  h1 {
    font-size: .8rem;
    text-align: left;
  }
  h3{
      font-size .42rem;
      color #848282;
      padding: .4rem .4rem 0 0;
  }
  p{
      font-size 14px;
      color $headerfonthoverColor;
      padding: .4rem .4rem 0 0;
      cursor pointer;
  }
}

.index-community {
    padding: .5rem .5rem 0 0;    
    .index-tearm {
        height 1.2rem;
        width 1.2rem;
        border-radius 50%;
        border: 0.02rem solid $headerborderColor; 
        position relative;  
        cursor pointer;
        background url('~@/assets/images/userimg.png');
    }
}

</style>

