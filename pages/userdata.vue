<template>
  <div>
    <h1>사용자 추가데이터 수집</h1>
    <p>VelogTitle : <input v-model="velogtitle" /></p>
    <p>Email : <input v-model="email" /></p>
    <p>GitAddress : <input v-model="gitaddress" /></p>
    <button @click="userDataWrite">작성 완료</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      velogtitle: "",
      email: "",
      gitaddress: "",
      token: "",
    };
  },
  methods: {
    // 사용자 추가 데이터 수집 기능
    userDataWrite() {
      const host = "http://13.125.96.150:3000/api/user/setting";
      let token = localStorage.getItem("access_token");
      let data = {
        velogtitle: this.velogtitle,
        email: this.email,
        gitaddress: this.gitaddress,
      };
      axios
        .post(host, data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
        //   let token = res.data.token;
        //   localStorage.setItem("access_token", token);
          console.log(res.data);
          console.log("유저 추가 데이터 생성 완료");
          this.$router.push("/main");
        })
        .catch((error) => {
          console.log(error, "유저 추가데이터 수집 오류발생!");
        });
    },
  },
};
</script>

<style>
</style>