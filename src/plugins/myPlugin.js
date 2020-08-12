/* eslint-disable no-unused-vars */
import DirectiveFlex from "@/directives/flex";
import dateFormatFilter from "@/filters/dateFormat";
import TodolistItem from "@/components/TodolistItem";

function install(Vue, options) {
  // 디렉티브 등록
  Vue.directive("flex", DirectiveFlex);

  // 필터 등록
  Vue.filter("dateFormat", dateFormatFilter);

  // 컴포넌트 등록
  Vue.component("todolist-item", TodolistItem);

  // Mixins
  Vue.mixin({
    created() {
      console.log("mixins by MyPlugin");
    },
  });

  // 이렇게 전역 프로퍼티도 등록 가능
  Vue.request = function(name, option) {
    console.log(name, option);
  };

  // 프로토타입에도 프로퍼티 등록 가능
  Vue.prototype.$i18n = (val) => val;
}

export default {
  install,
};
