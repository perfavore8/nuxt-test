<template>
  <aside class="w-44 mt-20 ml-36 font-Montserrat">
    <h1 class="text-[44px] mb-48">Услуги</h1>
    <div>
      <div v-for="item in stuff" :key="item.id" class="text-sky-500 mb-3">
        <button
          class="hover:underline focus:underline w-fit outline-none text-base"
          :class="{ underline: selectedCategory == item.id }"
          tabindex="3"
          @click="
            selectedCategory == item.id
              ? (selectedCategory = null)
              : (selectedCategory = item.id)
          "
        >
          {{ item.name }}
        </button>
        <div
          v-if="item.id == selectedCategory"
          class="flex flex-col gap-2 mt-2"
        >
          <a
            v-for="category in item.categories"
            :key="category.id"
            @click="select(category)"
            class="text-[#1D252E] ml-2 arrow py-1 pl-2 w-44 hover:bg-[#F2F2F2]"
            :class="{ bgc: category.id === selectedCat.id }"
          >
            {{ category.name }}
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'AsideList',
  data() {
    return {
      selectedCategory: null,
    }
  },
  computed: {
    ...mapGetters({
      selectedCat: 'stuff/getSelectedCat',
      stuff: 'stuff/getStuff',
    }),
  },
  methods: {
    ...mapMutations({
      select: 'stuff/updateSelectedCat',
    }),
  },
}
</script>

<style scoped>
.arrow {
  clip-path: polygon(
    0% 0%,
    calc(100% - 16px) 0%,
    100% 50%,
    calc(100% - 16px) 100%,
    0% 100%
  );
}
.bgc {
  background-color: #f2f2f2;
}
</style>
