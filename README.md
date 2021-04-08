# vue-lightbox2

## Usage

``` vue
<template>
  <vue-lightbox :items="images" :cells="cells" :width="width" :height="height" />
</template>

<script>
import { VueLightbox } from "vue-lightbox2"

export default {
  data: () => ({
    images: [
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300", 
      "https://picsum.photos/id/237/200/300"
    ], /// images
    cells: 5, /// images show ( number value from 1 to 5 )
    width: "100%", // width container
    height: "200px" // height container
  })
}
</script>
```
