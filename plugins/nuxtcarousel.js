import { Carousel, Slide } from "@jambonn/vue-concise-carousel";
import "@jambonn/vue-concise-carousel/lib/vue-concise-carousel.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("carousel", Carousel);
	nuxtApp.vueApp.component("slide", Slide);
});
