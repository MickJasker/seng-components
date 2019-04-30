<template>
  <div class="seng-statistics">
    <h1>App statistics</h1>
    <div class="info">
      <h2>Device information</h2>
      <h3 id="browser">Browser: {{ appStatistics.browser }}</h3>
      <h3 id="os">OS: {{ appStatistics.os }}</h3>
      <h3 id="deviceType">Device type: {{ appStatistics.deviceType }}</h3>
    </div>
    <div class="info">
      <h2>FPS</h2>
      <h3 id="fps" :class="{ 'low-fps': lowFPS }">{{ appStatistics.fps }}fps</h3>
    </div>
    <div class="info">
      <h2>Network</h2>
      <h3 id="bandwidth">{{ appStatistics.bandwidth }}Mbps</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import DevicePerformanceMetrics from 'device-performance-metrics';

interface IAppStatistics {
  browser: string;
  os: string;
  deviceType: string;
  fps: number;
  bandwidth: number;
}

@Component({})
export default class SengStatistics extends Vue {
  private metrics: DevicePerformanceMetrics = new DevicePerformanceMetrics();

  public appStatistics: IAppStatistics = {
    browser: '',
    os: '',
    deviceType: '',
    fps: 0,
    bandwidth: 0,
  };

  public lowFPS: boolean = false;

  private created() {
    this.getDeviceInformation();
    this.getFramerate();
    this.getBandWidth();
  }

  private getDeviceInformation(): void {
    const deviceInfo = this.metrics.deviceSpecifications;

    this.appStatistics.browser = `${deviceInfo.getBrowser().name} - ${
      deviceInfo.getBrowser().version
    }`;
    this.appStatistics.os = `${deviceInfo.getOperatingSystem().name} - ${
      deviceInfo.getOperatingSystem().version
    }`;
    this.appStatistics.deviceType = deviceInfo.getDevice().name;
  }

  private getFramerate(): void {
    const fpsInfo = this.metrics.fpsCounter;

    setInterval(() => {
      this.appStatistics.fps = fpsInfo.fps;

      if (this.appStatistics.fps <= 55) {
        this.lowFPS = true;
      } else {
        this.lowFPS = false;
      }
    }, 50);
  }

  private getBandWidth(): void {
    const networkInfo = this.metrics.networkBandwidthInformation;

    this.appStatistics.bandwidth = Math.round(networkInfo.getAverageBandwidth() / 10) / 100;
  }
}
</script>

<style lang="scss" scoped>
.seng-statistics {
  max-width: 500px;
  position: fixed;
  top: 0;
  right: 0;
  background: white;
  padding: 20px;
  box-shadow: 0 2rem 3rem rgba($color: #000000, $alpha: 0.1)
  , 0 0 2rem rgba($color: #000000, $alpha: 0.1);

  h1 {
    margin-block-start: 0;
  }

  .info {
    &:not(:last-child) {
      margin-bottom: 20px;
      padding-bottom: 20px;
      border-bottom: solid 1px hsl(210, 20%, 50%);
    }

    h2 {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }

    h3 {
      margin: 0;
      font-weight: 400;

      &.low-fps {
        color: red;
      }
    }
  }
}
</style>
