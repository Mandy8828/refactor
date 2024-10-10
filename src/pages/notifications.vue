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
        <div>Line</div>
        <div>信箱</div>
      </div>
    </div>
    <div class="memberLine"></div>
    <div></div>
  </div>
  <div class="table">
    <v-table>
      <thead class="tableHead">
        <tr>
          <th class="text-left">名稱</th>
          <th class="text-left">聯絡電話</th>
          <th class="text-left">加入時間</th>
          <th class="text-left">職位</th>
          <th class="text-left">Line</th>
          <th class="text-left">信箱</th>
          <th class="text-left">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.location }}</td>
          <td>{{ item.line }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.action }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script>
export default {
  name: "notification",
  data() {
    return {
      desserts: [
        {
          name: "Theresa Fisher",
          phone: "0922431141",
          time: "2021-08-14 12:37:46",
          location: "行銷",
          line: "rrXbDJtcjRNnmfXdyPK",
          email: "charlesallen@hurst.com",
        },
        {
          name: "John Forbes",
          phone: "0913089611",
          time: "2021-06-25 18:13:17",
          location: "業務",
          line: "ZhBOIojvpajIsghqZqw",
          email: "smithmario@pierce.com",
        },
        {
          name: "Lisa Black",
          phone: "0965099144",
          time: "2022-09-27 06:16:24",
          location: "行銷",
          line: "TGHphyuXWQpnLUlOFeS",
          email: "msmith@gmail.com",
        },
        {
          name: "Lisa Hill",
          phone: "0902811738",
          time: "2020-05-28 00:17:24",
          location: "業務",
          line: "NLPfGYiMXkkxIYIJrMR",
          email: "wellsarthur@yahoo.com",
        },
        {
          name: "Melissa Stevenson",
          phone: "0946131920",
          time: "2020-11-02 21:20:50",
          location: "客服",
          line: "lncPcUGgzmLAENDXasq",
          email: "dustinmalone@smith.org",
        },
        {
          name: "Ashley Torres",
          phone: "0962826822",
          time: "2020-03-23 16:46:54",
          location: "財務",
          line: "nkcPTbQBkRoSuaZlKBA",
          email: "randall56@watts-miller.com",
        },
        {
          name: "Gregory Mills",
          phone: "0951902596",
          time: "2024-07-27 13:12:32",
          location: "財務",
          line: "UEeNJeWIQzYyVgyUGFY",
          email: "arthurfletcher@humphrey-lloyd.org",
        },
        {
          name: "Dennis Hill",
          phone: "0904746475",
          time: "2021-09-18 06:43:02",
          location: "業務",
          line: "eITcqAVtytJYCsQcajD",
          email: "millerkimberly@martin.biz",
        },
        {
          name: "John Miller",
          phone: "0975542766",
          time: "2023-07-10 17:01:04",
          location: "設計師",
          line: "VkrOQNsUDzdhrLxvlAT",
          email: "igonzalez@sanford-adams.com",
        },
        {
          name: "Hannah Crawford",
          phone: "0995003947",
          time: "2020-08-02 01:02:15",
          location: "行銷",
          line: "VtiNqpnQVhwnpxghLIp",
          email: "nicoleweaver@gmail.com",
        },
        {
          name: "Pamela Todd",
          phone: "0911883010",
          time: "2020-05-03 20:38:59",
          location: "財務",
          line: "VYtXOdRUMbqzOozExCE",
          email: "ybrown@campbell.biz",
        },
        {
          name: "Lindsay Wilson",
          phone: "0949231551",
          time: "2020-08-15 16:41:34",
          location: "設計師",
          line: "iMvIESaamCchXsugfQO",
          email: "audreycarr@graham.info",
        },
        {
          name: "Carrie Jones MD",
          phone: "0930910474",
          time: "2024-03-01 17:32:53",
          location: "設計師",
          line: "mauxfLllBWrHQMVsRBH",
          email: "coryroberts@yahoo.com",
        },
        {
          name: "William Martinez MD",
          phone: "0951555862",
          time: "2021-04-20 15:58:18",
          location: "業務",
          line: "qQjzDPFuSXODJZGmvvf",
          email: "dawnhaley@olson-long.com",
        },
        {
          name: "Deanna Vance",
          phone: "0956609778",
          time: "2020-06-16 10:49:46",
          location: "財務",
          line: "wWhyDEouprCeTIiNdiI",
          email: "twilson@yahoo.com",
        },
        {
          name: "Michael Schroeder",
          phone: "0912110624",
          time: "2021-09-09 20:59:46",
          location: "財務",
          line: "QPjlOHEboNgXFbEXwdP",
          email: "speterson@thompson.com",
        },
        {
          name: "Chad Raymond",
          phone: "0938627122",
          time: "2022-10-22 05:21:42",
          location: "設計師",
          line: "UkjAAoEWslSaGBoJFkx",
          email: "daviscurtis@gmail.com",
        },
        {
          name: "Thomas Walker",
          phone: "0942574278",
          time: "2021-05-22 10:32:26",
          location: "業務",
          line: "yWmfxMgaknNeMDtsxCu",
          email: "jallen@kim-adams.com",
        },
        {
          name: "Daniel Randall",
          phone: "0966616900",
          time: "2022-08-17 22:51:30",
          location: "財務",
          line: "rcDjnZFKmMMgLwwBqJr",
          email: "tammybrooks@richards.net",
        },
        {
          name: "Nancy Barnes",
          phone: "0959271492",
          time: "2022-04-18 00:42:08",
          location: "設計師",
          line: "mJXChPORmbgIJeLBhfi",
          email: "montgomerychristian@arnold.com",
        },
        {
          name: "Maria Wolf",
          phone: "0900621977",
          time: "2023-08-02 15:20:15",
          location: "財務",
          line: "kWKUewhEBHlFnLGhzrY",
          email: "clinewendy@gordon.biz",
        },
      ],
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

.table {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
}

.tableHead {
  background-color: #f6f6f6;
  border-radius: 10px;
}
</style>
