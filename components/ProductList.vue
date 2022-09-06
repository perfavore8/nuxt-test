<template>
  <div class="w-full flex flex-col gap-2">
    <div v-for="product in products" :key="product.id" class="w-full">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard.vue"
export default {
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array,
    },
  }
}
</script>
