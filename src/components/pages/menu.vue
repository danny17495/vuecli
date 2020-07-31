<template>
  <div class="hello">
   
   

    <ul class="nav">
  <li class="nav-item">
     <router-link class="nav-link" to="/page/">卡片１</router-link>
  </li>
  <li class="nav-item">
     <router-link class="nav-link" to="/page/child2">卡片２</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/page/child3">卡片３</router-link>
  </li>
</ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>