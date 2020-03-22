import {
  Button,
  Table,
  Card,
  Icon,
  Form,
  FormItem,
  Slider,
  Input,
  Message,
} from 'view-design';
import Vue from 'vue'

function installViewDesign() {
  Vue.component('Button', Button);
  Vue.component('Table', Table);
  Vue.component('Card', Card);
  Vue.component('Icon', Icon);
  Vue.component('Form', Form);
  Vue.component('FormItem', FormItem);
  Vue.component('Slider', Slider);
  Vue.component('Input', Input);
  Vue.prototype.$Message = Message
}

export default installViewDesign
