<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
      
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        

        <q-toolbar-title class="text-color">
          Rosbank App
          <div slot="subtitle">An Application for Rosbank Tech.Madness Hack 2018</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      
    <q-item link to="/">
      <q-item-side icon="account_box" />
      <q-item-main v-model=this.Name />
    </q-item>
    <q-item link to="/users">
      <q-item-side icon="supervisor_account" />
      <q-item-main label="Edit Users" />
    </q-item>

    </q-layout-drawer>

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
      currency: [
            {
                id_currency: 0,
                Name_currency: 'usd',
                Cost: 25
            },
            {
                id_currency: 0,
                Name_currency: 'usd',
                Cost: 25
            },
            {
                id_currency: 0,
                Name_currency: 'usd',
                Cost: 25
            },
            
        ],
        Session : 'ad5faf5e-f7f6-6b5b-5c15-b988bada61cf',
  
      leftDrawerOpen: true,
        }
    },
  
  mounted: function(){
  console.log(this.Name);
        this.$axios.get('/api/v1/quotation?Session=' + this.Session).then(function (response) {
        this.Name = response.data.Name;
        console.log("after: " + this.Name);});
        
    },
  
  methods: {
    openURL
  }
}
</script>

<style>
</style>
