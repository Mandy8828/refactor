<template>
  <div class="app-layout">
    <Header />

    <div class="content-wrapper">
      <Sidebar />

      <main class="main-content">
        <router-view />
      </main>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/common/header.vue";
import Sidebar from "@/components/common/sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f7f7;
}

.content-wrapper {
  display: flex;
  flex: 1;
}

.main-content {
  flex: 1;
  padding: 8px 30px 20px;
  overflow: auto;
  background-color: #f7f7f7;
}
</style>
