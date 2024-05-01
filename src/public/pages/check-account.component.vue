<script>
export default {
  name: "check-account"
}
</script>

<template>
  <div class="check-account">
    <div class="header">
      <div class="icon">
        <img src="/src/assets/icon-home.png" alt="icon-home">
      </div>
      <h1>You have an account?</h1>
    </div>
    <div class="sub-title">
      <h2>Choose the option that describes you</h2>
    </div>
    <div class="container">
      <div class="text">
        <div>
          <span>If you are new </span>
          <router-link to="/register" class="button">click here</router-link>
        </div>
        <div>
          <span>If you have an account </span>
          <router-link to="/login" class="button">click here</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.check-account {
  background-color: #FFE4B5;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.header {
  padding-top: 100px;
  padding-right: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bolder;
}

.sub-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: normal;
  font-style: normal;
}

.container {
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.text {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 40px;
  width: 100%;
  font-size: 28px;
}

.button {
  font-style: italic;
}

.icon {
  padding-right: 100px;
  padding-bottom: 150px;

}

.icon img {
  width: 100px;
  height: 120px;
}
</style>