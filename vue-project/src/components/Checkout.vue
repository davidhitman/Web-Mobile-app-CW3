<template>
            <!-- table storing all the element in the basket to be displayed in the checkout button-->
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
            <h2>Checkout</h2>
            <p>
                <strong>Name:</strong>
                <input v-model="order.name">
            </p>
            <p>
                <strong>Phone:</strong>
                <input v-model.number="order.phone">
            </p>
            <!--the submit button to submite the information entered-->
            <button class="submitEnable" v-if="enableSubmit">Submit</button>
            <button class="submitDisenable" v-else disabled>Submit</button>
</template>

<script>

export default {
  name: "Checkout.vue",
  props: ["products", "cart"],
  data(){
    return{}
  },
  methods: {
    cartCount(id){ // count the items in cart
       let count = 0;
        for(let a=0; a< this.cart.length; a++){
           if (this.cart[a] === id){
               count ++;
            }
        }
        return count;
    },
    canAddToCart(lesson){ // checking if you can add more items to the cart
        // if the current lesson spaces are not eqaul to zero meaning there's no more lessons to add
        return lesson.spaces > this.cartCount(lesson.id); 
    }
  },
  computed: {
    totalItems: function(){ // return the total items in cart
        return this.cart.length
    },
  }
}
</script>