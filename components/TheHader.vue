<!-- Please remove this file from your project -->
<template>
  <div class="w-full">
    <header>
      <div
        class="flex flex-row place-content-between items-center px-12 h-14 bg-gray-800 text-white"
      >
        <div class="flex flex-row items-center font-bold">
          <span class="text-normal">+(373) 22 83-87-87</span>
          <span class="mx-3 mb-0.5">|</span>
          <div class="flex flex-row gap-3 items-center mt-0.5">
            <div class="icon icon-fb"></div>
            <div class="icon icon-inst"></div>
            <div class="icon icon-viber"></div>
            <div class="icon icon-wa"></div>
          </div>
        </div>
        <div
          @click="showLang = true"
          class="flex items-center font-bold"
          v-if="!showLang"
        >
          {{ lang
          }}<span class="icon-ArrowTop text-[6px] ml-0.5 rotate-180"></span>
        </div>
        <div
          v-else
          class="cursor-pointer shadow-[0px_0px_4px_rgba(255,255,255,0.3)] bg-[#1D252E] mt-[70px] -mr-3 z-10 font-bold"
        >
          <div
            v-for="lan in langList"
            :key="lan"
            @click="
              lang = lan
              showLang = false
            "
            class="px-1 mx-2 py-1 border-b border-solid border-[#016DA6]"
          >
            {{ lan }}
          </div>
        </div>
      </div>
      <div
        class="flex flex-row place-content-between items-center px-12 bg-white shadow-md"
        style="height: 74px"
      >
        <button><span class="icon-boorger text-[13px]"></span></button>
        <div class="flex flex-col gap-2">
          <span class="font-sans" style="font-size: 35px; line-height: 26px"
            >YOUR LOGO</span
          >
          <span
            class="font-sans leading-4"
            style="letter-spacing: 1.05em; font-size: 8px"
            >ADDITIONAL TEXT</span
          >
        </div>
        <div>
          <button
            class="flex items-center rounded-3xl outline-none py-1.5 px-8 border border-solid border-[#cd9933] text-[#1d252e] focus:border-2 hover:bg-[#cd9933] hover:text-white disabled:border-[#7E7E7E] disabled:text-[#7E7E7E]"
            tabindex="2"
          >
            <div
              class="icon-loop mr-2 -scale-x-100 inline-block font-semibold text-xl"
            ></div>
            <span class="text-base font-sans font-bold">Прайс-лист</span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'TheHader',
  data() {
    return {
      lang: 'RU',
      langList: ['RU', 'ENG', 'MOL'],
      showLang: false,
    }
  },
}
</script>

<style scoped>
.icon {
  height: 24px;
  width: 24px;
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.icon-fb {
  background-image: url('@/static/icons/fb.svg');
}
.icon-inst {
  background-image: url('@/static/icons/inst.svg');
}
.icon-viber {
  background-image: url('@/static/icons/viber.svg');
}
.icon-wa {
  background-image: url('@/static/icons/wa.svg');
}
</style>
