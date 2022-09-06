<template>
  <div>
    <div :class="{ cartOpen: !shortCart }" @click="close()" class="min-h-screen transition-all ease-out durations-200 bg-[#F5F5F5]">
      <TheHeader />
      <div class="flex flex-row">
        <AsideList />
        <Nuxt />
      </div>
    </div>
    <ShoppingCart ref="short" />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import TheHeader from '@/components/TheHader.vue'
import AsideList from '@/components/AsideList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
  components: { TheHeader, AsideList, ShoppingCart },
  computed: {
    ...mapGetters({
      shortCart: 'stuff/getShortCart',
    }),
  },
  methods: {
    close() {
      if (!this.shortCart) this.updateShortCart(true)
    },
    ...mapMutations({
      updateShortCart: 'stuff/updateShortCart',
    }),
  },
}
</script>

<style scoped>
.cartOpen {
  backdrop-filter: brightness(.9);
  filter: brightness(.9);
}
</style>
