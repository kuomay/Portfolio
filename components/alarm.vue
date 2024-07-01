<template>
    <div class="clock">
      <div class="hand hour" ref="hourHand"></div>
      <div class="hand minute" ref="minuteHand"></div>
      <div class="hand second" ref="secondHand"></div>
      <div class="center-dot"></div>
      <div class="inner-shadow"></div>
      
      <div class="marking quarter" style="transform: translateX(-50%) rotate(0deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(30deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(60deg);"></div>
      <div class="marking quarter" style="transform: translateX(-50%) rotate(90deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(120deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(150deg);"></div>
      <div class="marking quarter" style="transform: translateX(-50%) rotate(180deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(210deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(240deg);"></div>
      <div class="marking quarter" style="transform: translateX(-50%) rotate(270deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(300deg);"></div>
      <div class="marking" style="transform: translateX(-50%) rotate(330deg);"></div>
  
      <div class="number" style="left: 143px; top: 60px;">12</div>
      <div class="number" style="left: 223px; top: 140px;">3</div>
      <div class="number" style="left: 146px; top: 220px;">6</div>
      <div class="number" style="left: 63px; top: 140px;">9</div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const hourHand = ref(null);
  const minuteHand = ref(null);
  const secondHand = ref(null);
  
  function updateClockHands() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours() % 12;
  
    // 計算角度
    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;
  
    // 指針位置
    secondHand.value.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
    minuteHand.value.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
    hourHand.value.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
  }
  
  onMounted(() => {
    updateClockHands();
    setInterval(updateClockHands, 1000);
  });
  </script>
  
  <style scoped>
  body {
    background-color: #2e2d2d;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  
  .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: rgba(23, 22, 22, 0.3);
    position: relative;
    box-shadow: 6px 6px 5px -2px rgba(12, 13, 12, 0.4),
                inset 5px 5px 8px -1px #383535;
  }
  
  .clock::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    border-radius: 50%;
    background-color: #222;
    box-shadow: 5px 5px 8px -1px #383535,
                inset 6px 6px 5px -2px rgba(12, 13, 12, 0.4);
  }
  
  .inner-shadow {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: transparent;
    box-shadow: inset -45px -45px 25px -65px rgba(12, 13, 12, 0.4);
  }
  
  .hand {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform-origin: 50% 100%;
    z-index: 2;
  }
  
  .hour {
    width: 4px;
    height: 20%;
    border-radius: 25%;
    background-color: #87ceeb;
  }
  
  .minute {
    width: 3px;
    height: 25%;
    border-radius: 25%;
    background-color: #4891ad;
  }
  
  .second {
    width: 2px;
    height: 29%;
    border-radius: 25%;
    background-color: #ff8c00;
  }
  
  .marking {
    position: absolute;
    width: 3px;
    height: 25px;
    background-color: #666;
    left: 50%;
    top: 10%;
    transform-origin: 50% 120px;
    z-index: 1;
    border-radius: 10%;
  }
  
  .marking.quarter {
    background-color: #4dbaaa;
    height: 25px;
    width: 3px;
  }
  
  .center-dot {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: #4f3f5a;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }
  
  .number {
    position: absolute;
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }
  </style>
  