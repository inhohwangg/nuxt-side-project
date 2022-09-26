<template>
  <div>
    <Nav></Nav>
    <button @click="wordWrite">글 작성하기</button>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  data() {
    return {
      token:'',
    }
  },
  components: {
    Nav,
  },
  methods: {
    wordWrite() {
      this.$router.push("/write");
    },
  },
};
</script>

<style>
</style>