<template>
  <div class="container">
    <!-- Introduction Section with Larger Background Image (Image 1) -->
    <div class="intro-section">
      <h2 class="larger-text">Bienvenidos a Nuestra Empresa</h2>
      <p class="larger-text">Somos una empresa comprometida con la excelencia en servicios de laboratorio. Nuestro objetivo es proporcionar resultados precisos y confiables para la salud de nuestros pacientes.</p>
    </div>

    <!-- Image Carousel -->
    <div id="imageCarousel" class="carousel slide" data-ride="carousel">
      <!-- ... (the rest of your component remains unchanged) -->
    </div>

    <!-- Section with Larger Background Image (Image 2) and Mission Statement -->
    <div class="mission-section">
      <div class="mission-background">
        <h2 class="larger-text">Nuestra Misión</h2>
        <p class="larger-text">Ser líderes en servicios de laboratorio, brindando resultados precisos y confiables para el bienestar de la comunidad.</p>
      </div>
    </div>

    <!-- Section with Larger Background Image (Image 3) and Additional Content -->
    <div class="extra-section">
      <div class="extra-background">
        <h2 class="larger-text">Descubra Nuestros Servicios</h2>
        <p class="larger-text">Ofrecemos una amplia gama de servicios de laboratorio de alta calidad para satisfacer las necesidades de nuestros clientes.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSlider',
};
</script>

<style scoped>
/* Style the introduction section with larger background image (Image 1) */
.intro-section {
  text-align: center;
  padding: 16px;
  background-image: url(@/assets/image1.jpg);
  background-size: 100% 100%; /* Set the background image size to cover the entire section */
  background-position: center center;
  color: #000; /* Set text color to black */
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 100px;
  font-size: 32px; /* Increase the font size */
}

.intro-section .larger-text {
  font-size: 34px; /* Increase the font size for headings and paragraphs */
}

/* Style the section with larger background image (Image 2) and Mission Statement */
.mission-section {
  text-align: center;
  padding: 16px;
  background-image: url(@/assets/image2.jpg);
  background-size: 100% 100%;
  background-position: center center;
  color: #000; /* Set text color to black */
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 32px; /* Increase the font size */
}

.mission-section .larger-text {
  font-size: 36px;
}

/* Style the section with larger background image (Image 3) and Additional Content */
.extra-section {
  text-align: center;
  padding: 16px;
  background-image: url(@/assets/image3.jpg);
  background-size: 100% 100%;
  background-position: center center;
  color: #000; /* Set text color to black */
  border-radius: 10px;
  font-size: 32px; /* Increase the font size */
}

.extra-section .larger-text {
  font-size: 36px;
}

/* Add any custom CSS styles for the carousel if needed */
</style>
