<template>
  <intersect @enter.once="enterView">
    <div class="seng-image">
      <picture v-if="(isVisible && large) || normal">
        <source
          :srcset="large"
          :media="`(min-width: ${breakpoints.large})`"
          v-if="large && isNetworkFast"
        />
        <source
          :srcset="normal"
          :media="`(min-width: ${breakpoints.normal})`"
          v-if="normal"
        />
        <img v-if="small" :src="small" :alt="alt" />
        <img v-else :src="src" :alt="alt" />
      </picture>
      <img v-else-if="isVisible" :src="src" :alt="alt" />
    </div>
  </intersect>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Intersect from "vue-intersect";
import { NetworkBandwidthInformation } from "device-performance-metrics";

interface Breakpoints {
  normal: string;
  large: string;
}

@Component({
  components: {
    Intersect
  }
})
export default class SengImage extends Vue {
  private readonly networkInfo = new NetworkBandwidthInformation();
  private bandwidth: number = 0;
  private isVisible: boolean = false;
  private isNetworkFast: boolean = false;

  @Prop(String) readonly src!: string;
  @Prop(String) readonly alt!: string;
  @Prop({
    default: false
  })
  readonly lazy?: boolean;
  @Prop(String) readonly small?: string;
  @Prop(String) readonly normal?: string;
  @Prop(String) readonly large?: string;
  @Prop({
    default: (): Breakpoints => {
      return {
        normal: "400px",
        large: "600px"
      };
    }
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
