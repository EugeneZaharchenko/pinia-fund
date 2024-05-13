import { defineStore } from "pinia/dist/pinia.js"
import TodoList from "../components/TodoList.vue"

export default useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: []
    })
})