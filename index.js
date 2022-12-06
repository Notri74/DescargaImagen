// Importamos la función para descargar imágenes
const imageDownloader = require("./image-downloader").download;

// URL de la imagen que queremos descargar
const imageUrl =
  "https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/c/a/canis-dear-hatter-02.jpg";

// Fichero de salida con el directorio al que vamos a guardar
const filename = "images/".concat("regular-expresion.jpg");

// Función para descargar las imágenes
imageDownloader(imageUrl, filename, function () {
  console.log(`${imageUrl} image download!!`);
});
