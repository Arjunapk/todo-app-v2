const Todo = require("../models/todosModel");

class TodoRepository {
  constructor(model) {
    this.model = model;
  }

  //Get All Todo
  getAllTodos() {
    return this.model.find();
  }

  //Get Todo
  getTodo(id) {
    return this.model.findById(id);
  }

  //Create Todo
  createTodo(obj) {
    const todo = new this.model(obj);
    return todo.save();
  }

  //Update Todo
  updateTodo(id, obj) {
    // const query = {_id: id}
    return this.model.findByIdAndUpdate(id, obj, {
      new: true,
      runValidators: true,
    });
  }

  //Delete Todo
  deleteTodo(id) {
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = new TodoRepository(Todo);
