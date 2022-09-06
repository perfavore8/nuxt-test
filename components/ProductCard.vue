<template>
  <div
    class="w-auto h-32 rounded-3xl py-4 px-16 flex flex-row justify-between shadow-[0_4px_9px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
  >
    <div class="flex flex-col justify-between items-start">
      <span>{{ product.name }}</span>
      <button
        class="text-[#2A3B45] text-sm flex items-center outline-none hover:text-[#0084CA] focus:text-[#0084CA] disabled:text-gray-500"
      >
        Подробнее<span class="icon-ArrowRight text-xs ml-2 mt-0.5"></span>
      </button>
    </div>
    <div class="flex flex-row gap-8 items-center">
      <span class="font-bold text-lg">{{ product.price }}₽</span>
      <button
        @click="change(product.id, 1)"
        v-if="product.count == 0"
        class="w-[52px] h-[52px] rounded-full bg-[#0084CA] text-white flex justify-center items-center outline-none hover:bg=[#016DA6] focus:border-2 focus:border-solid focus:border-[#016DA6] disabled:bg-[#7E7E7E]"
      >
        <span class="font-semibold text-sm">+</span>
        <span class="icon-Buy text-2xl"></span>
      </button>
      <div
        v-if="product.count != 0"
        class="border border-solid border-[#0084CA] rounded-md text-2xl h-[26px] flex flex-row justify-around items-center"
        style="min-width: 64px"
      >
        <button
          class="text-[#0084CA] flex justify-center items-center"
          @click="change(product.id, -1)"
        >
          <span class="pb-0.5">-</span>
        </button>
        <span class="font-bold text-[#1D252E] text-base">{{
          product.count
        }}</span>
        <button
          class="text-[#0084CA] flex justify-center items-center"
          @click="change(product.id, 1)"
        >
          <span>+</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    product: {
      type: Object,
    },
  },
  methods: {
    change(id, value) {
      const payload = {
        id: id,
        value: value,
      }
      this.changeVal(payload)
    },
    ...mapMutations({
      changeVal: 'stuff/change',
    }),
  },
}
</script>
