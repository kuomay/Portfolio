<template>
  <div class="scroller w-screen overflow-y-scroll 2xl:h-[calc(100vh-4rem)] 2xl:snap-y 2xl:snap-mandatory">
      <!-- 個人 -->
      <div class="flex-container 2xl:snap-center">
        <div class="flex-item item-1">
          <h1 class="animate__animated animate__backInLeft sm:text-xs lg:text-4xl">Hi, I'm a Frontend Engineer.</h1>
          <h1 class="animate__animated animate__backInLeft mt-6">
            <span class="job-title sm:text-xs lg:text-4xl">My name is</span>
            <span class="sm:text-3xl lg:text-6xl font-bold text-violet-300"> Sin-Mei, Kuo</span>
          </h1>
        </div>

        <div class="flex-item item-2 animate__animated animate__heartBeat sm:text-sm">
          <div class="slider">
            <h2 class="rounded-lg bg-gray-200 w-72 h-20 lg:w-80" :style="{ backgroundColor: rgbaCode }"></h2>

            <!-- RGB 調節器 -->
            <div>
              <span class="red">R</span>
              <input type="range" v-model.number="rgb[0]" min="0" max="255" class="mr-3 mx-3 lg:w-48 sm:w-15">
              <span class="red">{{ rgb[0] }}</span>
            </div>
            <div>
              <span class="green">G</span>
              <input type="range" v-model.number="rgb[1]" min="0" max="255" class="mr-3 mx-3 lg:w-48 sm:w-15">
              <span class="green">{{ rgb[1] }}</span>
            </div> 
            <div>
              <span class="blue">B</span>
              <input type="range" v-model.number="rgb[2]" min="0" max="255" class="mr-3 mx-3 lg:w-48 sm:w-15">
              <span class="blue">{{ rgb[2] }}</span>
            </div>
            <div>
              <span class="alpha">opacity</span>
              <input type="range" v-model.number="alpha" min="0" max="1" step="0.01" class="mr-3 mx-3  lg:w-48 sm:w-15">
              <span class="alpha mr-12">{{ alpha.toFixed(2) }}</span>
            </div>

            <!-- 顏色展示和 RGBA Code -->
            <div class="flex flex-row sm:flex flex-col ">
              <div class="" @click="copyHexCode">
                <h2 class="hex-code flex items-center justify-center lg:h-20 rounded-lg">{{ hexCode }}</h2>
              </div>
              <div class="">
                <h2 class="rgbaCode flex items-center justify-center lg:h-20 rounded-lg">{{ rgbaCode }}</h2>
              </div>
            </div>

          </div>
        </div>
      </div>

            <!-- 經歷 -->
      <div class="experience 2xl:snap-center">
          <!-- 經歷 -->
          <div class="flex-item item-5 h-750 rounded-xl lg:py-8 lg:px-8">
          
            <div class="text-center space-y-2 sm:text-start">
              <div class="space-y-0.5">
                <p class="lg:text-4xl mr-9 text-white font-semibold underline underline-offset-8 mb-5">
                  Experience
                </p>
                <p class="text-sm mr-9 lg:text-2xl text-slate-500">
                  GEOSAT Aerospace & Technology Front-End Engineer
                </p>
                <p class="text-slate-500 mr-9 font-thin">2023.05-2024.06</p>
              </div>
              <!-- 1 -->
              <div class="flight-trainning p-6 max-w-3xl bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                  <img class="w-80 h-40 hidden sm:block" src="/assets/013 2024-06-21 185608.png" alt="">
                </div>
                <div>
                  <div class="text-xl font-medium text-black ">國防部飛操手平台</div>
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

              <!-- 2 -->
              <div class="geosat p-6 max-w-3xl bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                  <img class="w-80 h-40 hidden sm:block" src="/assets/3332024-06-21 225416.png" alt="">
                </div>
                <div>
                  <div class="text-xl font-medium text-black">GEOSAT 官網</div>
                  <div class="flex flex-row flex-wrap"> 
                    <div class="w-24 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-red-500 font-semibold rounded-full border border-red-600 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">html&css</div>
                    <div class="w-24 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-yellow-700 font-semibold rounded-full border border-yellow-600 hover:text-white hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2">javascript</div>
                  </div>
                  <p class="text-slate-500">
                    公司的官方網站通常提供產品和服務資訊、聯絡資訊、公司背景、新聞、客戶支援和線上購物。</p>
                </div>
              </div>

              <!-- 3 -->
              <div class="road p-6 max-w-3xl bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div class="shrink-0">
                  <img class="w-80 h-40 hidden sm:block" src="/assets/1112024-06-21 225338.png" alt="">
                </div>
                <div>
                  <div class="text-xl font-medium text-black">台南市道路挖掘系統</div>
                  <div class="flex flex-row flex-wrap"> 
                    <div class="lg:w-24 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-green-800 font-semibold rounded-full border border-green-600 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">Vue2</div>
                    <div class="w-28 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-lime-600 font-semibold rounded-full border border-lime-600 hover:text-white hover:bg-lime-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-lime-600 focus:ring-offset-2">Vue Router</div>
                    <div class="w-24 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-emerald-700 font-semibold rounded-full border border-emerald-600 hover:text-white hover:bg-emerald-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">Vuetify</div>
                    <div class="w-24 h-7 text-center mt-2 mb-2 mr-2 px-4 py-1 text-sm text-emerald-950 font-semibold rounded-full border border-emerald-600 hover:text-white hover:bg-emerald-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2">Vuex</div>
                  </div>
                  <p class="text-slate-500">
                    該系統協助管道單位申請道路開挖，並方便公共機構的審查。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 學歷 -->
          <div class="flex-item item-6 rounded-xl space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">    
          <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="lg:text-4xl text-white font-semibold underline underline-offset-8 mb-5 mt-4">
                Education
              </p>
              <p class="text-slate-500 lg:text-2xl">
                Highest Education
              </p>
            </div>
            <div class="nkuht p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
              <div class="shrink-0">
                <img class="h-12 w-12" src="https://www.nkuht.edu.tw/var/file/0/1000/img/22/logo.gif" alt="NKUHT Logo">
              </div>
              <div>
                <div class="nkuht-school lg:text-xl font-medium text-black">NKUHT</div>
                <p class="nkuht-school lg:text-slate-500">
                  Department of Leisure and  Recreation Management</p>
                  <p class="text-slate-600">
                    2018,09-2022,06</p>
              </div>
            </div>

            <div class="ispan p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
              <div class="shrink-0">
                <img class="h-12 w-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHccVyKLa3JFZlTEzKGdPaE-msts8a3C_ymQ&s" alt="iSpan Logo">
              </div>
              <div>
                <div class="font-medium text-black lg:text-xl ">iSpan International Inc.</div>
                <p class="text-slate-500">
                  Front-End Engineer Training Program</p>
                  <p class="text-slate-600">
                    2022,09-2024,02</p>
              </div>
            </div>
          </div>
        </div>
        </div>

      <!-- SKILL -->
      <div class="2xl:snap-center">
        <h1 class="text-center mb-5 text-white font-semibold underline underline-offset-8 sm:text-sm lg:text-4xl">
              SKILLS
        </h1>
        <div class="skill py-8 px-8  bg-stone-900 rounded-xl shadow-lg space-y-2 sm:py-4 sm:space-y-0 sm:space-x-6 w-11/12 lg:w-2/3 sm:flex flex-col">    

          <div class="flex-item item-7 text-center space-y-4 sm:text-left sm:flex-wrap">
            <div class="space-y-0.5">
              <p class="text-slate-500 font-medium mt-7">
                Front-End Basic
              </p>
            </div>
            <div class="p-6 lg:mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 w-70 lg:max-w-2xl">
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class="" src="/assets/javascript.svg" alt="javascript Logo">
                <p class="text-white text-center text-sm lg:text-xl">JavaScript</p>
              </div>
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class="" src="/assets/css.svg" alt="css Logo">
                <p class="text-white text-center text-sm lg:text-xl">css</p>
              </div>
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class="" src="/assets/html.svg" alt="html Logo">
                <p class="text-white text-center text-sm lg:text-xl">html</p>
              </div>
            </div>
          </div>

          <div class="flex-item item-8 text-center space-y-4 sm:text-left sm:flex-wrap">
            <div class="space-y-0.5">
              <p class="text-slate-500 font-medium mt-7">
                Front-End Framework
              </p>
            </div>
            <div class="p-6 lg:mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 w-70 lg:max-w-2xl">
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class="mt-5 mb-3" src="/assets/vue.svg" alt="vue Logo">
                <p class="text-white text-center text-sm lg:text-xl">Vue</p>
              </div>
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class=" mt-5 mb-3" src="/assets/nuxt.svg" alt="nuxt Logo">
                <p class="text-white text-center text-sm lg:text-xl">Nuxt</p>
              </div>
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class=" mt-5 mb-3" src="/assets/pinia.svg" alt="pinia Logo">
                <p class="text-white text-center text-sm lg:text-xl">Pinia</p>
              </div>
            </div>
          </div>

          <div class="flex-item item-9 text-center space-y-4 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-slate-500 font-medium mt-7">
                CSS Frameworks and Preprocessors
              </p>
            </div>
            <div class="p-6 mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 w-64 h-80 flex-wrap lg:max-w-2xl">
              <div class="w-20 lg:w-32 ml-4 border-double border-4 border-sky-900 bg-black">
                <img class="mt-5 mb-3" src="/assets/bootstrap.svg" alt="bootstrap Logo">
                <p class="text-white text-center text-sm lg:text-xl">Bootstrap</p>
              </div>
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class=" mt-5 mb-3" src="/assets/vuetify.svg" alt="vuetify Logo">
                <p class="text-white text-center text-sm lg:text-xl">Vuetify</p>
              </div>
              <div class="w-20 lg:w-32  border-double border-4 border-sky-900 bg-black">
                <img class="mt-5 mb-3" src="/assets/tailwind.svg" alt="tailwind Logo">
                <p class="text-white text-center text-sm lg:text-xl">Tailwind css</p>
              </div>
              <div class="w-20 lg:w-32 border-double border-4 border-sky-900 bg-black">
                <img class=" mt-5 mb-3" src="/assets/scss.svg" alt="scss Logo">
                <p class="text-white text-center text-sm lg:text-xl">Sass/Scss</p>
              </div>
            </div>
          </div>
      </div>
      </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

// 定義 ref
const rgb = ref([0, 0, 0]);
const alpha = ref(1);
const hexCode = ref('#FFFFFF');
const rgbaCode = ref('rgba(0, 0, 0, 1.00)');
const userHexCode = ref('#FFFFFF');

// 轉換為 Hex 函數
const toHex = (c) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

// 複製 Hex Code 函數
const copyHexCode = () => {
  const el = document.createElement('textarea');
  el.value = hexCode.value;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  alert('已複製');
};

// 更新顏色從 Hex 函數
const updateColorFromHex = () => {
  const hex = userHexCode.value.replace(/^#/, '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  rgb.value = [r, g, b];
};

// 監聽 rgb 和 alpha 的變化，更新 hexCode 和 rgbaCode
watchEffect(() => {
  hexCode.value = `#${rgb.value.map(c => toHex(c)).join('')}`;
  rgbaCode.value = `rgba(${rgb.value.join(', ')}, ${alpha.value.toFixed(2)})`;
});

// 初始化顏色
updateColorFromHex();
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

.flex-container {
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
  margin: 0 auto;
}

.flex-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.item-1 {
  width: 100%; /* 修正為100%寬度，佔滿整個行 */
  order: 1; /* 調整順序，預設在小尺寸時顯示在上面 */
  margin-top: 100px;
}

.item-2 {
  width: 100%; /* 修正為100%寬度，佔滿整個行 */
  order: 2; /* 調整順序，預設在小尺寸時顯示在下面 */
  /* margin-top: 80px; */
}

@media (min-width: 641px) {
  .item-1 {
    width: 50%; /* 大尺寸時，佔據一半寬度 */
    order: 0; /* 恢復預設順序 */
  }
  
  .item-2 {
    width: 50%; /* 大尺寸時，佔據一半寬度 */
    order: 0; /* 恢復預設順序 */
  }

}

.job-title {
  margin-top: 20px;
}

.experience {
  display: flex;
  width: 1450px;
  margin: 0 auto;
  gap:30px;
  margin-bottom: 200px;
  align-items: flex-start;
}


.item-5 {
  width: 60%;
  order: 1;
}

.item-6 {
  width: 40%;
  order: 2;
}

@media (max-width: 640px) {

  .experience {
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    margin-bottom: 100px; 
    margin-top: 70px;
  }

  .flight-trainning {
    width: 320px;
    height: 300px;

  }

  .geosat{
    width: 320px;
    height: 300px;
  }
  
  .road{
    width: 320px;
    height: 300px;
  }

  .nkuht-school {
    font-size: 20px;
  }

  .nkuht{
    width: 350px;
    height: 320px;
    }

  .ispan {
    width: 350px;
    height: 200px;
   }

   .skill {
      img {
        width: 40px; 
        height: 50px; 
        object-fit: contain; 
        display: block;
      }
    }

  .item-5{
    width: 31%; /* 小屏幕下佔滿寬度 */
  }

  .item-6 {
    width: 27%; /* 小屏幕下佔滿寬度 */
  }
}

.slider {
  width: 500px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.red,
.green,
.blue,
.alpha {
  border: #484545 1px solid;
  padding: 10px;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.alpha {
  background-color: grey;
}

h2 {
  color: #ffffff;
  background-color: rgba(139, 143, 166, 0.5);
  border: 2px solid #484545;
  margin: 10px 10px;
  padding: 5px 30px;
}

.skill {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: 200px;
}

.item-7 {
  width: 100%;
}

.item-8 {
  width: 100%;
}

.item-9 {
  width: 100%;
  margin-bottom: 10px;
}



</style>
