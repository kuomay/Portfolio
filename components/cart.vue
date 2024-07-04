
<template>
    <div class="container mx-auto p-6 max-w-5xl bg-white rounded-xl shadow-lg">
          <h1 class="mt-3 text-center text-black text-2xl font-bold mb-5">商品列表</h1>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div v-for="product in products" :key="product.id" class="border border-black rounded">
              <img :src="product.image" :alt="product.name" class="w-full h-52 object-cover mb-2">
              <h3 class="font-bold  ml-2">{{ product.name }}</h3>
              <p class=" ml-2">{{ product.price }} 元</p>
              <button @click="addToCart(product)" class="bg-blue-500 text-white px-2 py-1 rounded mt-2 mb-2 ml-2">
                加入購物車
              </button>
            </div>
          </div>
      
          <div class="mt-10">
            <h2 class="text-xl font-bold mb-2 ">購物車清單</h2>
            <div v-for="item in cart" :key="item.id" class="flex justify-between items-center mb-2">
              <span>{{ item.name }} - {{ item.price }} 元</span>
              <div>
                <button @click="updateQuantity(item.id, item.quantity - 1)" class="text-black px-2 py-1  bg-gray-200 rounded">-</button>
                <span class="mx-2">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.id, item.quantity + 1)" class="text-black px-2 py-1 bg-gray-200 rounded">+</button>
                <button @click="removeCart(item.id)" class="ml-2 px-2 py-1 bg-red-500 text-white rounded ">移除</button>
              </div>
            </div>
            <p class="font-bold mt-4">總金額：{{ total }} 元</p>
            <button @click="submitOrder" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              送出訂單
            </button>
          </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const products = ref([
    { id: 1, name: '馬卡龍', price: 90, image: 'https://cdn.pixabay.com/photo/2015/04/20/17/00/pastry-731823_1280.jpg' },
    { id: 2, name: '草莓', price: 60, image: 'https://cdn.pixabay.com/photo/2014/11/25/16/29/strawberry-545371_1280.jpg' },
    { id: 3, name: '珍珠奶茶', price: 100, image: 'https://cdn.pixabay.com/photo/2018/07/18/07/56/drink-3545791_1280.jpg' },
    { id: 4, name: '冰咖啡', price: 180, image: 'https://cdn.pixabay.com/photo/2020/03/31/17/42/ice-coffee-4988704_1280.jpg' },
  ])
  
  const cart = ref([])
  
  const addToCart = (product) => {
    const existItem = cart.value.find(item => item.id === product.id)
    if (existItem) {
      existItem.quantity++
    } else {
      cart.value.push({ ...product, quantity: 1 })
    }
  }
  
  const updateQuantity = (id, newQuantity) => {
    const item = cart.value.find(item => item.id === id)
    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity
      } else {
        removeCart(id)
      }
    }
  }
  
  const removeCart = (id) => {
    cart.value = cart.value.filter(item => item.id !== id)
  }
  
  const total = computed(() => {
    return cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  })
  
  const submitOrder = () => {
    alert('總金額：' + total.value + ' 元')
    cart.value = [] 
  }
  </script>