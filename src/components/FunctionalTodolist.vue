
<script>
import TodolistItem from "@/components/TodolistItem";

export default {
  name: "FunctionalTodolist",
  components: {
    TodolistItem,
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  functional: true,
  render(createElement, context) {
    const lis = [];

    context.props.todos.forEach((todo) => {
      lis.push(
        createElement(
          "li",
          {
            key: todo.id, // 템플릿에서는 VNode에서 필요하기에 템플릿에서 프로퍼티 형태로 전달하는것이다.(props에 넣지 않음)
          },
          [
            createElement(TodolistItem, {
              props: { title: todo.title, completed: todo.completed },
            }),
          ]
        )
      );
    });

    return createElement("ul", lis);
  },
};
</script>