<script>
export default {
  name: "register",
  data() {
    return {
      password: null,
      showPassword: false,
      passwordBarStyle: {
        padding: '12px',
        fontSize: '20px',
        width: '94%'
      }
    }
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    }
  }
}
</script>

<template>
  <div class="register">
    <div class="register-card">
      <pv-card class="register-content-card">
        <template #header>
          <h1 style="text-align: center; padding-bottom: 10px">Sign Up</h1>
        </template>
        <template #content>
          <div class="register-content">
            <div class="register-input-text">
              <label for="user_name">Name</label>
              <pv-input-text id="register-user_name-input" style="padding: 12px; font-size: 20px" v-model="user_name"/>
            </div>
            <div class="register-input-text">
              <label for="e-mail">E-mail</label>
              <pv-input-text id="register-e-mail-input" style="padding: 12px; font-size: 20px" v-model="email"/>
            </div>
            <div class="register-input-text">
              <label for="business-name">Nombre de la empresa o emprendimiento</label>
              <pv-input-text id="register-business-name-input" style="padding: 12px; font-size: 20px" v-model="business_name"/>
            </div>
            <div class="register-password">
              <label for="password">Password</label>
              <div class="register-password-container">
                <input :type="showPassword ? 'text' : 'password'" id="register-password-input" v-model="password" :style="passwordBarStyle" />
                <button class="toggle-password-button" @click="togglePassword">
                  <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                </button>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="register-buttons">
            <div><pv-button class="login-button" label="Login"></pv-button></div>
            <div><pv-button class="google-button">
              <img src="/src/assets/icon-google.png" alt="Google" class="google-icon"> Sign In with Google
            </pv-button></div>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<style>
.register {
  background-color: #A2D5F2;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}


.register-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  height: auto;
  width: auto;
}

.register-content-card {
  width: 500px;
  height: auto;
  overflow: hidden;
  border: gray 1px wave;
  border-radius: 10px;
  background-color: white;
  padding: 24px 96px;
  font-size: 24px;
}

.register-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.register-input-text {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  font-size: 22px;
  font-weight: lighter;
}

.register-password {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 22px;
}

.register-password-container {
  position: relative;
  display: inline-block;
}

.toggle-password-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
}

.register-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
}

.login-button {
  width: 100%;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 8px;
  background-color: #57C600;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #4CAF50;
}

.login-button:active {
  background-color: #45A049;
}

.google-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  color: black;
  border: #E9EAEB 1px solid;
  border-radius: 8px;
  background-color: white;
  padding-top: 12px;
  padding-bottom: 12px;
  cursor: pointer;
}

.google-button:hover {
  background-color: #E9EAEB;
}

.google-button:active {
  background-color: #D0D1D2;
}

.google-icon {
  height: 40px;
  width: 40px;
  margin-right: 12px;
  margin-bottom: 4px;
}
</style>