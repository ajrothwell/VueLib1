import Vue from "vue";
import TopicComponent from './TopicComponent.vue';
import ExternalLink from './ExternalLink.vue';
import Badge from './Badge.vue';
import Test from './Test.vue';


const Components = {
  TopicComponent,
  ExternalLink,
  Badge,
  Test
}

// Object.keys(Components).forEach(name => {
//   Vue.component(name, Components[name]);
// })

export default Components;

// export { TopicComponent };
// export { ExternalLink };
// export { Badge };
