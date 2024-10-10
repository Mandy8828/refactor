<template>
  <div class="title">
    <div class="line"></div>
    <div class="titleText">作品列表</div>
  </div>
  <!-- 切換 -->
  <div class="tab">
    <div v-for="(tab, index) in tabs" :key="index" class="tabText">
      {{ tab }}
    </div>
  </div>

  <!-- Tab 對應的內容 -->
  <!-- <v-tabs-items v-model="activeTab">
    <v-tab-item v-for="(tab, index) in tabs" :key="index">
      <v-card>
        <v-card-text>{{ tab }} 的內容</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items> -->
</template>

<script>
export default {
  name: "work",
  data() {
    return {
      tabs: ["個人作品", "團隊作品", "協同作品"],
      activeTab: 0,
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 20px;
}

.line {
  border: 3px #015c61 solid;
  height: 22px;
}

.titleText {
  color: #015c61;
  font-weight: 700;
  font-size: 20px;
}

.tab {
  background-color: #ebebeb;
  color: #6d6d6d;
  display: flex;
  border-radius: 50px;
  margin: auto;
}

.tabText {
  padding: 12px 25px;
  border-radius: 50px;
}

.tab--active {
  background-color: #4f9d3c;
  color: #009688;
  border: 2px solid #009688;
}
</style>
