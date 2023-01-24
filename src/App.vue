<template>
  <HeaderComponent />
  <SlideComponent />
  <BoxComponent />
  <AboutComponent />
  <WorkComponent />
  <FooterComponent />
</template>

<script>
import HeaderComponent from './components/Header/HeaderComponent.vue';
import SlideComponent from './components/Pages/SlideComponent.vue';
import BoxComponent from './components/Pages/BoxComponent.vue';
import AboutComponent from './components/Pages/AboutComponent.vue';
import WorkComponent from './components/Pages/WorkComponent.vue';
import FooterComponent from './components/Footer/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SlideComponent,
    BoxComponent,
    AboutComponent,
    WorkComponent,
    FooterComponent,
  }
}
</script>
