<template>
 <q-list class="currencies" style="padding-left:15%;padding-right:15%;border: 1px solid black">
 <q-collapsible v-for="cur in Currency" :label="cur.Name" :key="cur.Name" @show="create_graph(cur)">
    <div style="border: 1px solid #858585">
      Content
    </div>
  </q-collapsible>
  </q-list>
 
 </template>

<script>

export default {
  data() {
  return {
      Currency: [
            {
                'Name': 'usd',
                'id_quotation_from': 12,
                'id_quotation_to': 12,
                'Count_sale': 123,
                'Count_purchare': 234,
            },
            
        ],
        data: {labels: ['1','2','3'], datasets: [{label: ['One', 'Two', 'Three'], data: [10,20,30]}]},
        Session : "66de57e6-f452-9772-ad61-c2cf9ffbe771",//this.$q.LocalStorage.get.item(Session),
  
        
      leftDrawerOpen: true,
        }
    },
  
  created() {
    var self = this;
    //console.log(this.Session);
    
    this.$axios.get('/api/v1/quotation?Session=' + this.Session + '&Action=list')
        .then(function (response) {
                self.Currency = response.data.Quotation;
                console.log(self.Currency)
                });
                
},
methods:{
create_graph(cur){
console.log(cur);
console.log(this.Session);
this.$axios({
              method: 'post',
              url: '/api/v1/quotation',
              //headers: {'Content_Type':'application/json'},
              data: {
              "Session": this.Session,
              "From":cur.id_quotation_from,
              "To":cur.id_quotation_to,
              "Quant": "minut",
              "Action": "graph"
              }
            }).then(function (response){console.log(response)});}}

}

</script>
