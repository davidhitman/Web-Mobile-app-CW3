<template>
   
            <div class="lesson-section">
                <div class="lesson-list">
                    <div v-for="lesson in products" class="lesson"> <!-- div displaying all ten lessons in the loop-->
                        <img v-bind:src="lesson.image"> <!--v-bind binds the image-->
                        <h1 v-text="lesson.title"></h1>
                        <p class="description" v-html="lesson.description"></p>
                        <p class="Location">
                            Location: {{lesson.loc}}
                        </p>
                        <p class="price">
                            Price: {{lesson.price}}                     
                        </p>
                        <p class = "spaces">
                            Space: {{lesson.spaces}}
                        </p>
                        <!-- check out buttons-->
                       <!-- <button class="Addbtn" id="addButt" v-on:click= "addToCart(lesson)" v-if="canAddToCart(lesson)"> Add to cart</button>
                        <button  id="Addbtn" v-else disabled>Add to cart</button> -->
                    </div>
                </div>
            </div>
      
</template>

<script>
export default {
  name: "ProductList",
  props: ["products", "cart"],
  data(){
    return{}
  },
  methods: {
    //cartCount(id){ // count the items in cart
      //  let count = 0;
        //for(let i=0; i< this.cart.length; i++){
          //  if (this.cart[i] === id){
            //    count ++;
            //}
//         }
//         return count;
//     },
//     canAddToCart(lesson){ // checking if you can add more items to the cart
//         // if the current lesson spaces are not eqaul to zero meaning there's no more lessons to add
//         return lesson.spaces > this.cartCount(lesson.id); 
//     },
//     addToCart: function(lesson) {
//       this.$emit("add-item-to-cart", lesson)
//     }
  }
}
</script>