<script>
export default {
  render(createElement) {
    return createElement(
      "div",
      {
        on: {
          click: () => {},
        },
      },
      [createElement("span", ["HELLO"])]
    );
  },
};
</script>