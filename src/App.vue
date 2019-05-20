<template>
  <div id="app">
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 1</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 2</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 3</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 4</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 4</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 4</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-lazy height="300px" class="seng-image component">
      <h4>Component 4</h4>
      <h2>seng-image</h2>
      <seng-image
        class="image"
        alt="seng-image"
        :src="require('@/assets/img.jpg')"
        :large="require('@/assets/img@3.jpg')"
        :normal="require('@/assets/img@2.jpg')"
        :breakpoints="{
          normal: '465px',
          large: '768px'
        }"
      />
    </seng-lazy>
    <seng-statistics />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SengImage from '@/components/SengImage.vue';
import SengStatistics from '@/components/SengStatistics.vue';
import SengLazy from '@/components/SengLazy.vue';

@Component({
  components: {
    SengImage,
    SengStatistics,
    SengLazy,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: sans-serif;

  .image {
    width: 100%;
    height: 600px;

    img {
      object-fit: cover;
    }
  }

  .component {
    text-align-last: left;

    &:not(:last-child) {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: solid 1px hsl(210, 20%, 50%);
    }

    h2 {
      margin: 0;
    }

    h4 {
      margin: 0 0 2px;
      opacity: 0.75;
    }
  }
}
</style>
