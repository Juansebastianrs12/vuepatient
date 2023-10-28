<template>
  <div class="image-slider">
    <img :src="currentImage" alt="Image">
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
  data() {
    return {
      images: [
        require('../assets/image1.jpg'), // Make sure to adjust the paths to your image files
        require('../assets/image2.jpg'),
        require('../assets/image3.jpg'),
      ],
      currentIndex: 0,
    };
  },
  mounted() {
    setInterval(this.changeImage, 3000); // Auto change image every 3 seconds
  },
  methods: {
    changeImage() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    currentImage() {
      return this.images[this.currentIndex];
    },
  },
};
</script>

<style>
.image-slider {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px; /* Adjust the height as needed */
}

img {
  max-width: 100%;
  height: auto;
}
</style>