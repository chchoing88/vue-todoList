<template functional>
  <ul>
    <li v-for="todoItem in props.todos" :key="todoItem.id">
      <todolist-item :title="todoItem.title" :completed="todoItem.completed">
        <template v-slot:header="slotProps">
          <!-- #header="slotProps" -->
          <input type="checkbox" :checked="slotProps.item.completed" />
          <input type="text" v-model="slotProps.item.title" />
        </template>

        <template v-slot:footer>
          <button>제거</button>
        </template>
      </todolist-item>
    </li>
  </ul>
</template>