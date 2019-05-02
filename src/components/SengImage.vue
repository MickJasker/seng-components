<template>
  <intersect @enter.once="enterView">
    <div class="seng-image">
      <picture v-if="(isVisible && large) || normal">

        <source
          :srcset="webpLarge"
          :media="`(min-width: ${breakpoints.large})`"
          type="image/webp"
          v-if="webpLarge && isNetworkFast"
        >
        <source
          :srcset="large"
          :media="`(min-width: ${breakpoints.large})`"
          type="image/jpeg"
          v-if="large && isNetworkFast"
        >

        <source
          :srcset="webpNormal"
          :media="`(min-width: ${breakpoints.normal})`"
          type="image/webp"
          v-if="webpNormal"
        >
        <source
          :srcset="normal"
          :media="`(min-width: ${breakpoints.normal})`"
          type="image/jpeg"
          v-if="normal"
        >

        <source
          :srcset="webpSmall"
          type="image/webp"
        >
        <source
          :srcset="src"
          type="image/jpeg"
        >
        <img :src="src" :alt="alt">
      </picture>
      <img v-else-if="isVisible" :src="src" :alt="alt">
    </div>
  </intersect>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Intersect from 'vue-intersect';
import { NetworkBandwidthInformation } from 'device-performance-metrics';

interface Breakpoints {
  normal: string;
  large: string;
}

@Component({
  components: {
    Intersect,
  },
})
export default class SengImage extends Vue {
  private readonly networkInfo = new NetworkBandwidthInformation();

  private bandwidth: number = 0;

  private isVisible: boolean = false;

  private isNetworkFast: boolean = false;

  @Prop(String) readonly src!: string;

  @Prop(String) readonly alt!: string;

  @Prop(String) readonly webpSmall?: string;

  @Prop(String) readonly webpNormal?: string;

  @Prop(String) readonly webpLarge?: string;

  @Prop({
    default: false,
  })
  readonly lazy?: boolean;

  @Prop(String) readonly normal?: string;

  @Prop(String) readonly large?: string;

  @Prop({
    default: (): Breakpoints => ({
      normal: '400px',
      large: '600px',
    }),
  })
  readonly breakpoints?: Breakpoints;

  private enterView() {
    this.isVisible = true;
  }

  private mounted() {
    if (!this.lazy) {
      this.enterView();
    }

    this.bandwidth = this.networkInfo.getAverageBandwidth();

    if (this.bandwidth / 1000 > 10) {
      this.isNetworkFast = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.seng-image {
  width: 300px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
