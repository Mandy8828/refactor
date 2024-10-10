<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      default: "",
    },
  },
  computed: {
    svgClass() {
      return `svg-icon ${this.class}`;
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
