import { defineStore } from "pinia/dist/pinia.js"
import TodoList from "../components/TodoList.vue"

export default useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: []
    }),
    actions: {
        addTodo(item) {
            this.todoList.push({item, id: this.id++, comleted: false})
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter((object) => {
                return object.id !== itemId
            })
        }
    }
})