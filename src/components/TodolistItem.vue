<template>
  <div>
    <slot name="header" v-bind:item="{ title, completed }"
      >header fallback</slot
    >
    <slot name="footer">footer fallbacks</slot>
    <span>{{ dueDate | dateFormat }}</span>
  </div>
</template>
<script>
// import dateFormatFilter from "@/filters/dateFormat";

export default {
  name: "TodolistItem",
  // filters: {
  //   dateFormat: dateFormatFilter,
  // },
  props: {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.title,
      checked: this.completed,
      dueDate: Date.now(),
    };
  },
};
</script>
