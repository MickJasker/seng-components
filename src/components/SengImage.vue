<template>
    <div class="seng-image">
      <picture v-if="isVisible && (large || normal)">
        <source
          :srcset="changeExtension(large, '.webp')"
          :media="`(min-width: ${breakpoints.large})`"
          type="image/webp"
          v-if="large && isNetworkFast"
        >
        <source
          :srcset="webpLarge"
          :media="`(min-width: ${breakpoints.large})`"
          type="image/webp"
          v-else-if="webpLarge && isNetworkFast"
        >
        <source
          :srcset="large"
          :media="`(min-width: ${breakpoints.large})`"
          type="image/jpeg"
          v-if="large && isNetworkFast"
        >

        <source
          :srcset="changeExtension(normal, '.webp')"
          :media="`(min-width: ${breakpoints.normal})`"
          type="image/webp"
          v-if="normal"
        >
        <source
          :srcset="webpNormal"
          :media="`(min-width: ${breakpoints.normal})`"
          type="image/webp"
          v-else-if="webpNormal"
        >
        <source
          :srcset="normal"
          :media="`(min-width: ${breakpoints.normal})`"
          type="image/jpeg"
          v-if="normal"
        >

        <source :srcset="webpSmall" type="image/webp" v-if="webpSmall">
        <source v-else :srcset="changeExtension(src, '.webp')" type="image/webp">
        <source :srcset="src" type="image/jpeg">
        <img :src="src" :alt="alt">
      </picture>
      <img v-else-if="isVisible" :src="src" :alt="alt">
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NetworkBandwidthInformation } from 'device-performance-metrics';

interface Breakpoints {
  normal: string;
  large: string;
}

@Component
export default class SengImage extends Vue {
  private readonly networkInfo = new NetworkBandwidthInformation(10000);

  private bandwidth: number | undefined = 0;

  private isVisible: boolean = false;

  private isNetworkFast: boolean = false;

  /**
 * Pass the src of smallest image. This is also the image
 * that is used in browsers not supporting the ```<picutre>``` tag.
 *
 * When using webpack or you can pass an image like this:
 * ```
 * <seng-image :src="require('path/to/image')" />
 * ```
 */
  @Prop(String) readonly src!: string;

  /** General alt attribute */
  @Prop(String) readonly alt!: string;

  @Prop(String) readonly webpSmall?: string;

  @Prop(String) readonly webpNormal?: string;

  @Prop(String) readonly webpLarge?: string;


  @Prop(String) readonly normal?: string;

  @Prop(String) readonly large?: string;

  @Prop({
    default: (): Breakpoints => ({
      normal: '400px',
      large: '600px',
    }),
  })
  readonly breakpoints?: Breakpoints;

  // eslint-disable-next-line
  changeExtension(file: string, ext: string): string {
    return file + ext;
  }

  private mounted() {
    this.bandwidth = this.networkInfo.getAverageBandwidth();

    if (this.bandwidth) {
      if (this.bandwidth / 1000 > 10) {
        this.isNetworkFast = true;
      }
    } else {
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
