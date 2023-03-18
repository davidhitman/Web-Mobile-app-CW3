<template>
    <div>
      <table>
          <thead>
              <tr>
                  <th>Lesson</th>
                  <th>Location</th>
                  <th>Space</th>
                  <th>Price</th>
              </tr>
            </thead>
            <tbody>
          <!-- display the contents of the basket in the table row-->
              <tr v-for="item in cart">
                  <td>{{item.lesson.title}}</td>
                  <td>{{item.lesson.loc}}</td>
                  <td>{{item.quantity}}</td> 
                  <td>{{item.lesson.price}}</td>
                  <td>
                      <button class="remove" v-on:click="removeItem(item)">Remove</button> <!--remove button to remove the items from the list-->
                  </td>
              </tr>
          </tbody>
      </table>
              <!-- checkout section where the user enters their check out information-->
      <!-- <h2>Checkout</h2>
      <div>
        <strong>Name:</strong>
        <input v-model="order.name">
      </div>
      <div>
        <strong>Phone:</strong>
        <input v-model.number="order.phone">
      </div>  -->
      <!--the submit button to submite the information entered-->
      <!--<button class="submitEnable" v-if="enableSubmit" v-on:click="checkout">Submit</button>
      <button class="submitDisenable" v-else disabled>Submit</button> -->
    </div>
  </template>
  
  <script>
  export default {
    name: "Checkout",
    props: ["cart"],
    data(){
      return{}
    },
    methods:{
      cartCount(id){ // count the items in cart
            let count = 0;
            for(let a=0; a< this.cart.length; a++){
                if (this.cart[a] === id){
                    count ++;
                }
                return count;
            }
        },
        removeItem: function(item){
            this.$emit("remove-item-from-cart", item)
        }
    }
}
</script>





