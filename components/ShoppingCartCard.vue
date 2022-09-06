<template>
  <div class="mt-7">
    <h1 class="text-[#0084CA] mb-3">{{ category }}</h1>
    <div class="flex flex-col items-end border-y border-solid border-[#B0B0B0]">
      <button
        class="icon-cross w-3 h-3 py-3 text-xs text-[#B0B0B0]"
        @click="del()"
      ></button>
      <div
        v-for="item in list"
        :key="item.id"
        class="flex flex-row justify-between pr-4 pb-5 w-full"
      >
        <p class="text-[10px] text-[#1D252E] w-56">{{ item.name }}</p>
        <div class="flex flex-col justify-between items-end h-16 mr-2">
          <span class="font-bold text-sm text-[#1D252E]">
            {{ item.price * item.count }}₽
          </span>
          <div
            class="border border-solid border-[#0084CA] rounded-md text-2xl h-[26px] flex flex-row justify-around items-center"
            style="min-width: 64px"
          >
            <button
              class="text-[#0084CA] flex justify-center items-center"
              @click="change(item.id, -1)"
            >
              <span class="pb-1">-</span>
            </button>
            <span class="font-bold text-[#1D252E] text-base">{{
              item.count
            }}</span>
            <button
              class="text-[#0084CA] flex justify-center items-center"
              @click="change(item.id, 1)"
            >
              <span class="pb-1">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    category: {
      type: String,
    },
    list: {
      type: Array,
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
    del() {
      this.list.forEach((val) => {
        this.change(val.id, 0)
      })
    },
    ...mapMutations({
      changeVal: 'stuff/change',
      updateShortCart: 'stuff/updateShortCart',
    }),
  },
}
</script>
