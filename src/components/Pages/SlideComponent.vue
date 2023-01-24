<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>

    </transition-group>
  </div>
</template>
<script>
import '../Pages/Slide.css'
export default {
  name: "SlideComponent",
  data() {
    return {
      images: [
        "https://www.brandinginasia.com/wp-content/uploads/2018/12/golootlo-new-main-1920-x-590-px.png",
        "http://i.imgur.com/gkUyb3r.jpg",
        "http://i.imgur.com/tvz2JnD.png",
        "https://www.atlantis-tankers.com/images/content/pcuk-at-history-1920x590-162097535.jpg"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function () {
    // this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 5000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>


