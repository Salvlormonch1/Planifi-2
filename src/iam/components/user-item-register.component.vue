<script>
import Create from "../../shared/components/create.component.vue";

export default {
  name: "user-item-register",
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
  components: {Create},
  props: {
    item: null,
    visible: Boolean,
    statuses: Array
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    getSeverity(status) {
      switch (status) {
        case 'Registered':
          return 'success';
        case 'Unregistered':
          return 'info';
        default:
          return null;
      }
    },
    canceledEventHandler() {
      this.$emit('canceled');
    },

    registeredEventHandler() {
      console.log(this.item);
      this.submitted = true;
      if (this.item.title) {
        this.$emit('registered', this.item);
      }
    }
  }
}
</script>

<template>
  <div class="user-item">
    <create :entity="item" :visible="visible" entityName="User" @saved="registeredEventHandler">
      <template #content>
        <div class="register-content">
          <div class="register-input-text">
            <label for="user_name">Name</label>
            <pv-input-text id="register-user_name-input" style="padding: 12px; font-size: 20px" v-model="item.name"/>
          </div>
          <div class="register-input-text">
            <label for="e-mail">E-mail</label>
            <pv-input-text id="register-e-mail-input" style="padding: 12px; font-size: 20px" v-model="item.email"/>
          </div>
          <div class="register-input-text">
            <label for="business-name">Nombre de la empresa o emprendimiento</label>
            <pv-input-text id="register-business-name-input" style="padding: 12px; font-size: 20px" v-model="item.business_name"/>
          </div>
          <div class="register-password">
            <label for="password">Password</label>
            <div class="register-password-container">
              <input :type="showPassword ? 'text' : 'password'" id="register-password-input" v-model="item.password" :style="passwordBarStyle" />
              <button class="toggle-password-button" @click="togglePassword">
                <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
              </button>
            </div>
          </div>
        </div>
      </template>
    </create>
  </div>
</template>

<style>
.user-item {
  width: auto;
  height: auto;
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
</style>