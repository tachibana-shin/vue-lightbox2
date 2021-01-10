<template>
  <div class="lightbox" v-if="items.length > 0">
    <div class="lightbox--grid" :class="[
      `lightbox--grid-${Math.min(items.length, cells)}`
    ]" :style="{
      width: getStyleValue(width),
      height: getStyleValue(height)
    }">
      <a class="lightbox--grid__item" v-for="(item, index) in items" :href="item" @click.prevent="showImage(index)" v-if="index < cells" :style="getBackgroundStyle(item)">
        <span class="lightbox--grid__item--more" v-if="index == cells - 1 && items.length - cells > 0"> {{ items.length - cells }} +</span>
      </a>
    </div>
    <transition enter-active-class="lightbox--animate lightbox--animate__fadeIn" leave-active-class="lightbox--animate lightbox--animate__fadeOut">
      <div class="lightbox--modal" v-if="openModal">
        <div class="lightbox--modal__counter"> {{ index + 1 }} / {{ items.length }} </div>
        <button class="lightbox--modal__btn lightbox--modal__btn-outline-danger lightbox--modal__btn-sm lightbox--modal__btn-close" @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em" fill="currentColor">
            <path d="M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z" /></svg>
        </button>
        <button class="lightbox--modal__btn lightbox--modal__btn-outline-primary lightbox--modal__btn-prev" @click="prev">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" width="2em" height="2em" fill="currentColor">
            <path d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z" /></svg>
        </button>
        <button class="lightbox--modal__btn lightbox--modal__btn-outline-primary lightbox--modal__btn-next" @click="next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512" width="2em" height="2em" fill="currentColor">
            <path d="M187.8 264.5L41 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 392.7c-4.7-4.7-4.7-12.3 0-17L122.7 256 4.2 136.3c-4.7-4.7-4.7-12.3 0-17L24 99.5c4.7-4.7 12.3-4.7 17 0l146.8 148c4.7 4.7 4.7 12.3 0 17z" /></svg>
        </button>
        <div class="lightbox--modal__image" @click="close">
          <transition enter-active-class="lightbox--animate lightbox--animate__fadeIn" leave-active-class="lightbox--animate lightbox--animate__fadeOut" mode="out-in">
            <img :src="src" @load="loading = false" :key="src">
          </transition>
          <div class="lightbox--modal__image--spinner--inner" v-show="loading">
            <span class="lightbox--modal__image--spinner"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  let onKeyDown
  export default {
    props: {
      items: {
        type: Array
      },
      cells: {
        type: Number,
        default: 5,
        validator: val => val <= 5 && val >= 1
      },
      width: {
        type: [String, Number],
        default: "100%"
      },
      height: {
        type: [String, Number],
        default: 250
      },
      classGrid: [Object, Array, String]
    },
    data: () => ({
      index: -1,
      loading: false,
      openModal: false
    }),
    methods: {
      getStyleValue(value) {
        return typeof value == "number" ? `${value}px` : value
      },
      showImage(index) {
        this.openModal = true
        if (index >= this.items.length) {
          index = this.items.length % index
        }
        if (index < 0) {
          index += this.items.length
        }

        this.loading = true
        this.index = index
      },
      next() {
        this.showImage(this.index + 1)
      },
      prev() {
        this.showImage(this.index - 1)
      },
      close() {
        this.openModal = false
        this.loading = false
        this.index = -1
      },
      getBackgroundStyle(src) {
        return `background-image: url("${src}")`
      }
    },
    computed: {
      src() {
        return this.items[this.index]
      }
    },
    created() {
      window.addEventListener("keydown", onKeyDown = ({ keyCode }) => {
        if (this.index >= 0) {
          switch (keyCode) {
            case 37:
              this.prev()
              break
            case 39:
              this.next()
              break
            case 27:
              this.close()
              break
          }
        }
      })
    },
    beforeDestroy() {
      window.removeEventListener("keydown", onKeyDown)
    }
  }
</script>
