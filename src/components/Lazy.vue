<template>
  <div :style="{'min-height': height}" class="lazy">
    <slot  v-if="inView"/>
  </div>
</template>

<script lang="ts">
import {
  Vue, Component, Watch, Prop,
} from 'vue-property-decorator';

@Component({})
export default class Lazy extends Vue {
  public inView: boolean = false;

  public inViewOnce: boolean = false;

  private intersectionObserverOptions = {
    root: this.$el,
    rootMargin: '0px',
    treshold: 1.0,
  };

  private observe: IntersectionObserver | undefined;

  @Prop(String) readonly height!: string;

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
        entries.map((entry) => {
          // this.inView = entry.isIntersecting;
          console.log(entry);

          if (!isPassed) {
            this.inView = entry.isIntersecting;
          } else if (this.inView === false) {
            this.inView = entry.isIntersecting;
          }


          return entry;
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );
    this.observe.observe(this.$el);
    this.setViewStateEvent(this.inView);
  }
}
</script>
