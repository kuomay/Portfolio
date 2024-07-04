<template>
      <div class="flight-trainning mb-16 mx-auto p-6 max-w-5xl bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="">
                  <img class="h-80  hidden sm:block" src="/assets/013 2024-06-21 185608.png" alt="">
                </div>
                <div>
                  <a class="text-xl font-medium text-black mt-3" href="https://maxs-fer.geosat.com.tw/" target="_blank">國防部飛操手平台</a>
                  <div class="flex flex-row flex-wrap"> 
                    <div class="w-20 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-lime-800 font-semibold rounded-full border border-green-800 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2">Nuxt3</div>
                    <div class="w-20 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-600 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Pinia</div>
                    <div class="w-20 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-cyan-950 font-semibold rounded-full border border-cyan-800 hover:text-white hover:bg-cyan-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2">Vuetify</div>
                    <div class="w-22 h-7  mt-2 mb-2 mr-2 px-4 py-1 text-sm text-pink-600 font-semibold rounded-full border border-pink-600 hover:text-white hover:bg-pink-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-600 focus:ring-offset-2">Sass/SCSS</div>
                  </div>
                 
                  <p class="text-slate-500">
                    該平台提供有關無人機飛行員培訓、考試細節和線上模擬考試的資訊。</p>
                </div>
                
      </div>
      <div>
        <h1 class="text-white text-center text-xl font-bold">這是一個使用 Vue 3 開發的簡單但功能完整的購物車應用。</h1>
        <div class="flex flex-row flex-wrap justify-center mb-5"> 
          <div class="w-20 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-lime-800 font-semibold rounded-full border border-green-800 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2">Vue3</div>
          <div class="w-22 h-7  mt-2 mb-2 mr-2 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">tailwindcss</div>
        </div>
      </div>
      <div class="h-full"><cart /></div>
      <div>
        <h1 class="mt-16 text-white text-xl text-center font-bold">這是一個使用 Vue 3 開發的簡潔的數字時鐘應用。</h1>
        <div class="flex flex-row flex-wrap justify-center mb-5"> 
          <div class="w-20 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-lime-800 font-semibold rounded-full border border-green-800 hover:text-white hover:bg-green-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2">Vue3</div>
          <div class="w-22 h-7  mt-2 mb-2 mr-2 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-600 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">tailwindcss</div>
        </div>
      </div>
      
      <div class="mt-16 mb-10 flex justify-center"><alarm /></div>
      
</template>

<style>
a {
  color: #1f5ea1; 
  text-decoration: none; 
}

a:hover {
  text-decoration: underline;
  color: #88b2df; 
}

.flight-trainning {
  margin-top: 30px;
}

@media (max-width: 640px) {

.flight-trainning {
  width: 300px;
  height: 300px;
}
}
</style>