<template>
  <div class="title">
    <div class="line"></div>
    <div class="titleText">團隊成員</div>
  </div>
  <div class="member">
    <img src="@/assets/image/avator.jpg" class="memberImg" />
    <div class="memberDetail">
      <div>陳經理</div>
      <div>
        <div>聯絡電話</div>
      </div>
    </div>
    <div class="memberLine"></div>
    <div></div>
  </div>
  <div class="table">
    <v-data-table
      :headers="headers"
      :items="plants"
      item-key="name"
      class="tableData"
      :custom-sort="true"
    >
      <template v-slot:[`item.name`]="{ item }">
        <v-avatar size="50">
          <img :src="item.avatar" alt="頭貼" class="avatarImg" />
        </v-avatar>
        {{ item.name }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <!-- <v-icon color="red-lighten-2" @click="deleteItem(item)">
          mdi-delete
        </v-icon> -->
        <v-icon class="custom-icon" @click="deleteItem(item)"> 12 </v-icon>
      </template></v-data-table
    >
  </div>
</template>

<script>
import plants from "@/data/plants.json";

export default {
  name: "team",
  data: () => ({
    headers: [
      { title: "名稱", align: "start", sortable: false, key: "name" },
      { title: "聯絡電話", align: "start", sortable: false, key: "phone" },
      { title: "加入時間", align: "start", key: "time" },
      { title: "職位", align: "start", sortable: false, key: "location" },
      { title: "Line", align: "start", sortable: false, key: "line" },
      { title: "信箱", align: "start", sortable: false, key: "gmail" },
      { title: "操作", align: "start", sortable: false, key: "actions" },
    ],
    plants,
  }),
  methods: {
    removeMember(member) {
      // 成員刪除的邏輯處理
      console.log("刪除成員:", member.name);
    },
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

.member {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
}

.memberImg {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: 1px #015c61 solid;
  margin-right: 15px;
}

.manager-info {
  font-size: 14px;
  line-height: 24px;
}

.team-number {
  font-size: 36px;
  color: #009688;
  font-weight: bold;
}

.v-data-table-header th {
  background-color: #4caf50 !important; /* 新的背景顏色 */
  color: white !important; /* 文字顏色 */
  font-weight: bold;
}

.table {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

.tableData {
  background-color: #015c610d;
}

.custom-icon {
  background-image: url("@/assets/icon/trash.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 38px;
  height: 38px;
  display: inline-block;
}

.v-avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 12px 10px 12px 0;
}

.avatarImg {
  border-radius: 50px;
  width: 100%;
}
</style>
