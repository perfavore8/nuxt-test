<template>
  <div class="w-2/3 mt-24 ml-6 font-Montserrat">
    <div class="flex flex-col ml-auto mb-20 w-64">
      <div class="flex flex-row">
        <input
          type="text"
          class="h-7 w-64 pr-8 outline-none border-b border-solid bg-[#F5F5F5] border-[#2A3B45] text-sm font-medium text-[#1D252E] placeholder:font-light placeholder:opacity-40"
          placeholder="Поиск"
          v-model="searchValue"
          ref="search"
          :class="{ error: errored }"
        />
        <button
          class="icon-loop text-xl -ml-6 font-semibold outline-none"
          v-if="!searchValue"
          @click="focusSearch()"
        ></button>
        <button
          class="icon-cross text-[#A0A0A0] text-xs -ml-6 font-semibold"
          v-else
          @click="clearSearch()"
        ></button>
      </div>
      <small
        class="text-[#FF0000] font-light text-[10px] font-sans"
        v-if="errored"
        >Слишком длинный запрос</small
      >
    </div>
    <p class="text-[#1D252E] mb-16">
      Из-за ежедневного использования повседневная одежда быстро изнашивается и
      нуждается в профессиональном уходе. То, что чаще носится, должно и чаще
      чиститься! Подбирать для повседневной одежды правильные программы
      обработки – это задача профессионалов.
    </p>
    <ProjectList :products="selectedCat.items" v-if="selectedCat.items" />
    <div v-show="false">{{ selectedCat }}</div>
    <div class="w-full flex justify-end" v-if="false">
      <ShoppingCart class="-mr-[122px] -mt-[150px]" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectList from '@/components/ProductList.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
export default {
  components: { ProjectList, ShoppingCart },
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    ...mapGetters({
      selectedCat: 'stuff/getSelectedCat',
    }),
    errored() {
      return this.searchValue.length > 20
    },
  },
  methods: {
    focusSearch() {
      this.$refs.search.focus()
    },
    clearSearch() {
      this.searchValue = ''
    },
  },
}
</script>

<style scoped>
.error {
  border-color: #ff0000;
}
</style>
