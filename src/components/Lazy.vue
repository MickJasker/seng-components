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

  /**
   * The minimum height of the component.
   */
  @Prop({ type: String, default: '200px' }) readonly height!: string;

  /**
   * The element that is used as the viewport for checking visiblity of
   * the target. Must be the ancestor of the target. Defaults to the
   * browser viewport if not specified or if ```null```.
   */
  @Prop({ default: null }) readonly root!: HTMLElement | null;

  /**
   * Margin around the root. Can have values similar to the CSS margin
   * property, e.g. ```"10px 20px 30px 40px"``` (top, right, bottom, left).
   * The values can be percentages. This set of values serves to grow or
   * shrink each side of the root element's bounding box before computing
   * intersections. Defaults to all zeros.
   */
  @Prop({ type: String, default: '0px' }) readonly rootMargin!: string;

  /**
   * Either a single number or an array of numbers which indicate at what
   * percentage of the target's visibility the observer's callback should
   * be executed. If you only want to detect when visibility passes the
   * ```50%``` mark, you can use a value of ```0.5```. If you want the
   * callback to run every time visibility passes another 25%, you would
   * specify the array ```[0, 0.25, 0.5, 0.75, 1]```. The default is ```0```
   * (meaning as soon as even one pixel is visible, the callback will be run).
   * A value of ```1.0``` means that the threshold isn't considered passed
   * until every pixel is visible.
   */
  @Prop({ type: [Number, Array], default: 0 }) readonly threshold!: number | number[];

  setViewStateEvent(val: boolean): void {
    if (val === true) {
      /**
       * When element enters the view.
       */
      this.$emit('enters-view');
    } else {
      /**
       * When element leaves the view.
       */
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
          this.setViewStateEvent(entry.isIntersecting);
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
