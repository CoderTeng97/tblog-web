<template>
  <div class="login">
    <registry-swiper class="login-swiper"></registry-swiper>
    <registry-from class="login-from"></registry-from>
  </div>
</template>

<script>
import RegistrySwiper from "./components/RegistrySwiper";
import RegistryFrom from "./components/RegistryFrom";
export default {
  components: {
    RegistrySwiper,
    RegistryFrom
  }
};
</script>

<style scoped>
.login {
  display: flex;
  align-content: space-between;
}
.login-swiper {
  width: 460px;
}
</style>


