import Vue from 'vue';
import SengLazy from './src/components/SengLazy.vue';
import SengImage from './src/components/SengImage.vue';

const Components = {
  SengLazy,
  SengImage,
};

Object.keys(Components).forEach(name => {
  // @ts-ignore
  Vue.component(name, Components[name]);
});

export default Components;
