<template>
  <div
    class="px-20 h-full w-[520px] transition-all ease-out durations-200 rounded-tl-[20px] shadow-[0px 4px 9px rgba(0, 0, 0, 0.15)] bg-white fixed bottom-0 right-0"
    :class="{ short: short }"
    v-if="totalValue.count > 0"
  >
    <div class="py-7 w-full flex flex-col">
      <button
        @click="toggle()"
        class="w-[34px] h-[34px] -mr-16 -mt-4 outline-none self-end flex items-center justify-center rotate-90 border border-solid border-[#0084CA] rounded-full"
        :class="{ rotate: short }"
      >
        <span class="icon-ArrowRight"></span>
      </button>
      <h1 class="font-bold text-2xl text-[#0084CA] mb-5">Корзина</h1>
      <div class="text-lg text-[#1D252E] flex flex-row justify-between">
        <span>Количество услуг в корзине</span>
        <span class="font-bold">{{ totalValue.count }}</span>
      </div>
      <div class="text-lg text-[#1D252E] flex flex-row justify-between">
        <span>Сумма заказа</span>
        <span class="font-bold">{{ totalValue.price }}₽</span>
      </div>
    </div>
    <div class="w-full flex flex-col items-center" v-if="!short">
      <div v-if="list.length" class="w-full">
        <ShoppingCartCard
          :category="item.category"
          :list="item.list"
          v-for="item in list"
          :key="item.id"
        />
      </div>
      <button
        :disabled="!list.length"
        class="w-56 h-[60px] mt-16 mx-auto outline-none bg-[#0084CA] text-white rounded-[40px] hover:bg-[#016DA6] focus:border-[#016DA6] focus:border-[3px] focus:border-solid disabled:bg-[#7E7E7E]"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ShoppingCartCard from '@/components/ShoppingCartCard.vue'
export default {
  components: {
    ShoppingCartCard,
  },
  computed: {
    ...mapGetters({
      stuff: 'stuff/getStuff',
      short: 'stuff/getShortCart',
    }),
    list() {
      const list = []
      let list2 = []
      let idx = 0
      this.stuff.forEach((val) => {
        val.categories.forEach((cat) => {
          cat.items.forEach((item) => {
            if (item.count != 0) {
              const obj = {
                id: item.id,
                name: item.name,
                price: item.price,
                count: item.count,
              }
              list2.push(obj)
            }
          })
        })
        if (list2.length != 0) {
          list.push({
            id: idx,
            category: val.name,
            list: list2,
          })
          idx += 1
        }
        list2 = []
      })
      return list
    },
    totalValue() {
      let count = 0
      let price = 0
      this.list.forEach((val) => {
        val.list.forEach((item) => {
          price += item.price * item.count
          count += item.count
        })
      })
      return { count: count, price: price }
    },
  },
  watch: {
    totalValue: {
      handler() {
        if (this.totalValue.count == 0) this.updateShortCart(true)
      },
      deep: true,
    },
  },
  methods: {
    toggle() {
      this.updateShortCart(!this.short)
    },
    ...mapMutations({
      updateShortCart: 'stuff/updateShortCart',
    }),
  },
}
</script>

<style scoped>
.short {
  height: 160px;
  /* bottom: 8px; */
}
.rotate {
  transform: rotate(-90deg);
}
</style>
