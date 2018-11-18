<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        class="q-py-none"
        color="primary"
        :inverted="$q.theme === 'ios'"
      >
        
<img alt="Rosbank" src="../img/logo.jpg" style="width:100px"/>
        <q-toolbar-title class="text-color">
          Будущее – это вы
         </q-toolbar-title>
<q-tabs align="justify">
  <q-route-tab
  label="Главная"
    icon="account_box"
    to="/main_page"
    exact
    slot="title"
  />
  <q-route-tab
  label="Выписки"
    icon="supervisor_account"
    to="/users"
    exact
    slot="title"
  />
  <q-route-tab
  label="Платежи"
    icon="account_balance_wallet"
    to="/users"
    exact
    slot="title"
  />
  <q-route-tab
  label="Валюта"
    icon="offline_bolt"
    to="/main_page"
    exact
    slot="title"
  />
  <q-route-tab
  label="Зарплата"
    icon="receipt"
    to="/users"
    exact
    slot="title"
  />
  <q-route-tab
  label="Кредиты"
    icon="work_outline"
    to="/users"
    exact
    slot="title"
  />
  <q-route-tab
  label="Депозиты"
    icon="visibility"
    to="/users"
    exact
    slot="title"
  />
  <q-route-tab
  label="Выход"
    icon="visibility"
    to="/main_page"
    exact
    slot="title"
  />
</q-tabs>
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  data() {
  return{
      Name:'test',
      Currency: [
            {
                id_currency: 0,
                Name_currency: 'usd',
                Cost: '25'
            },
            
        ],
        Session : "025b96cb-0a22-4420-e180-1ea8fa2b7643",//this.$q.LocalStorage.get.item(Session),
  
      leftDrawerOpen: true,
        }
    },
  
  created() {
    var self = this;
    this.$axios.get('/api/v1/quotation?Session=' + this.Session)
        .then(function (response) {
                self.Name = response.data.Name;
                self.Currency = response.data.Currency;
                });
                
},
  
  
  methods: {
    openURL
  }
}
</script>

<style>
</style>
