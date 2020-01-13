import { Component, Vue } from "vue-property-decorator";

@Component
export default class MyMixin extends Vue {
    myMixinValue = "Hello from my mixin";
}
