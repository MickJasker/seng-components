<template>
  <div id="app">
    <div class="seng-image component">
      <h4>Example</h4>
      <h2>Component: seng-image</h2>
      <seng-image
        class="image"
        :src="require('@/assets/logo.png')"
        alt="seng-image"
        large="https://images.unsplash.com/photo-1555933588-36ac8a559925?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        normal="https://images.unsplash.com/photo-1555932339-5d13d6a9ae5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        :breakpoints="{
          normal: '376px',
          large: '768px'
        }"
      />
    </div>
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
export default class App extends Vue {}
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

  .component {
    text-align-last: left;
    h2 {
      margin: 0;
    }

    h4 {
      margin-bottom: 2px;
      opacity: 0.75;
    }
  }
}
</style>
