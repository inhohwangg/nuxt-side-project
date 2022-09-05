<template>
  <nav class="nav">
    <div class="logo">
      <p class="logo text-lg">Side Project</p>
    </div>
    <ul>
      <li class="btn btn1 mx-5 px-5">버튼1</li>
      <li class="btn btn2">버튼2</li>
      <li class="btn btn3">버튼3</li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  box-shadow: rgb(100, 100, 111 / 20%) 0px 7px 29px 0px;
  border-radius: 8px;
  background: linear-gradient(#a18cd1, #fbc2eb);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 70px;
  font-weight: ligher;
  letter-spacing: 0.5px;
}
.logo {
  box-sizing: content-box;
  padding: 0 12px;
  height: 100%;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  background-color: transparent;
}
.text-lg {
  font-size: 24px;
}
.subheader {
  color: #ccc;
}
a {
  color: var(--theme-link-color);
  text-decoration: none;
  cursor: pointer;
}

.btn {
  position: relative;
  display: inline-block;
  padding: 0.8em;
  color: var(--theme-button-color);
  border: 1px solid transparent;
  border-radius: 3px;
  background-color: transparent;
  outline: none;
  font-family: inherit;
  font-size: 13px;
  font-weight: normal;
  line-height: 1.15.84615;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  margin: 2px;
}

.btn:hover {
  opacity: 0.7;
}

.btn1 {
  background-color: #fcc;
}

.btn2 {
  background-color: #ffc;
}

.btn3 {
  background-color: #cff;
}
</style>