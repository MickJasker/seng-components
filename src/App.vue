<template>
  <div id="app">
    <SengImage
      class="image"
      :src="require('./assets/logo.png')"
      alt="sdfsdf"
      large="https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      normal="https://images.unsplash.com/photo-1555932339-5d13d6a9ae5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      :breakpoints="{
        normal: '376px',
        large: '768px'
      }"
    />

    <SengImage
      class="image"
      v-for="(item, index) in images"
      :key="index"
      :src="item.src"
      :alt="`${index}`"
      :lazy="true"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import SengImage from "@/components/SengImage.vue";

interface Image {
  src: string;
  alt?: string;
}

@Component({
  components: {
    SengImage
  }
})
export default class App extends Vue {
  images: Image[] = [
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      src:
        "https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .image {
    width: 100%;
    height: 200px;

    img {
      object-fit: cover;
    }
  }
}
</style>
