<template>
  <div :style="{'min-height': height}" class="lazy">
    <slot v-if="inView"/>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Watch, Prop,
} from 'vue-property-decorator';

@Component({})
export default class Lazy extends Vue {
  public inView: boolean = false;

  private observe: IntersectionObserver | undefined;

  @Prop(String) readonly height!: string;

  @Prop({ default: null }) readonly root!: HTMLElement | null;

  @Prop({ type: String, default: '0px' }) readonly rootMargin!: string;

  @Prop({ type: Number, default: 0 }) readonly threshold!: number;

  @Watch('inView', { immediate: true })
  setViewStateEvent(val: boolean): void {
    if (val === true) {
      this.$emit('enters-view');
    } else {
      this.$emit('leaves-view');
    }
  }

  mounted() {
    let isPassed = false;

    setTimeout(() => {
      isPassed = true;
    }, 100);
    this.observe = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.map((entry: IntersectionObserverEntry) => {
          if (!isPassed) {
            this.inView = entry.isIntersecting;
          } else if (this.inView === false) {
            this.inView = entry.isIntersecting;
          }

          return entry;
        });
      },
      {
        root: this.root,
        rootMargin: this.rootMargin,
        threshold: this.threshold,
      },
    );
    this.observe.observe(this.$el);
    this.setViewStateEvent(this.inView);
  }
}
</script>
