<template><div></div>
</template>
<script>
export default {
  data() {
  return{
      users: [],
      selector: [
        {
          label: '0.005',
          value: '0.005'
        },
        {
          label: '0.5',
          value: '0.5'
        }
      ],
      
      leftDrawerOpen: true,
        }
    },
  
  created() {
    var self = this;
    this.$axios.get('/api/v1/admin?Action=list')
        .then(function (response) {
                self.users = response.data;
                });
                
                
},

}
</script>