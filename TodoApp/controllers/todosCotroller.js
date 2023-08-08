const repository = require("../repositories/TodoRepositories");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await repository.getAllTodos();
    res.status(200).json({
      status: "success",
      results: todos.length,
      data: {
        todos,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await repository.getTodo(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        todo,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = await repository.createTodo(req.body);
    res.status(201).json({
      status: "success",
      data: { todo },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await repository.updateTodo(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: { todo },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await repository.deleteTodo(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
