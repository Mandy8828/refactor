<template>
  <aside class="sidebar">
    <nav>
      <div class="new">
        <img src="@/assets/icon/plus.svg" /><span class="newText"
          >創建作品</span
        >
      </div>
      <ul>
        <li class="list">
          <router-link to="/" class="action"
            ><img src="@/assets/icon/homePage.svg" /><span class="text"
              >首頁</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/work" class="action"
            ><img src="@/assets/icon/work.svg" /><span class="text"
              >作品</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/notifications" class="action"
            ><img src="@/assets/icon/project.svg" /><span class="text"
              >專案</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/notifications" class="action"
            ><img src="@/assets/icon/material.svg" /><span class="text"
              >素材</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/team" class="action"
            ><img src="@/assets/icon/team.svg" /><span class="text"
              >團隊</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/notifications" class="action"
            ><img src="@/assets/icon/liveStreaming.svg" /><span class="text"
              >全景直播</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/notifications" class="action"
            ><img src="@/assets/icon/data.svg" /><span class="text"
              >詳細數據</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/notifications" class="action"
            ><img src="@/assets/icon/person.svg" /><span class="text"
              >個人中心</span
            ></router-link
          >
        </li>
        <li class="list">
          <router-link to="/notifications" class="action"
            ><img src="@/assets/icon/notify.svg" /><span class="text"
              >通知</span
            ></router-link
          >
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.sidebar {
  width: 250px;
  background-color: #ffffff;
  border-radius: 0 50px 0 0;
}

.new {
  display: flex;
  gap: 10px;
  border-radius: 50px;
  margin: 40px 55px;
  border: 1px #015c61 solid;
  padding: 12px 24px;
  align-items: center;
}

.newText {
  color: #015c61;
  font-size: 16px;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.list {
  padding: 12px 30px;
}

.action {
  text-decoration: none;
  color: #a7a7a7;
  display: flex;
  align-items: center;
  gap: 12px;
}

.text {
  font-size: 16px;
  font-weight: 400;
}
</style>
