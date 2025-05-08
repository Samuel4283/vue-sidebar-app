<template>
    <li>
      <span>{{ text }}</span>
      <button @click="$emit('remove')">刪除</button>
    </li>
  </template>
  
  <script>
  export default {
    props: ['text']
  };
  </script>
