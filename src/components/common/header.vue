<template>
  <header class="header">
    <!-- Logo -->
    <div class="logo-container">
      <img src="@/assets/image/logo.png" alt="Logo" class="logo" />
      <!-- <SvgIcon name="logo" class="logo" /> -->
    </div>

    <!-- 用戶相關選項 -->
    <!-- <div class="user-options">
      <img src="../../assets/user-icon.png" alt="User Icon" class="user-icon" />
    </div> -->
  </header>
</template>

<script>
import SvgIcon from "@/components/common/SvgIcon.vue";
export default {
  name: "Header",
  components: {
    SvgIcon,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7;
}

.logo-container {
  margin: 20px auto 25px 30px;
}
</style>
