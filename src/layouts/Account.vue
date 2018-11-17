<template>
  <div class="form-login">
   <q-input v-model="form.Login" float-label="Имя" placeholder="login" />
   <q-input v-model="form.Password" float-label="Пароль" type="password" />
   <br/>
   
   <q-btn color="primary" style="padding-top:15px" @click="submit">Войти</q-btn>

</div>
</template>

<script>
import router from "../router"
export default {
  data () {
    return {
      form: {
        Login: '',
        Password: '',
        Page: 'employee'
      }
    }
  },
  methods: {
    submit () {
    this.$axios({
              method: 'post',
              url: '/api/v1/auth',
              data: this.form
            })
            .then(function (response) {
            const Session = response.data.Session;
            console.log(Session);
            this.router.push('/account');
              })
              .catch(function (error) {
               alert('Данные пользователя введены неверно' + error);
            });

    }
  }
}
</script>