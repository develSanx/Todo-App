const router = require("express").Router();
const TodoList = require("../model/TodoSchema");

router.get("/", (req, res) => {
  TodoList.find((error, todoItems) => {
    if (error) return res.status(404).send(error);
    res.json(todoItems);
  });
});

router.get("/:id", (req, res) => {
  TodoList.findById(req.params.id, (error, todoItem) => {
    if (error) return res.status(404).send(error);
    res.json(todoItem);
  });
});

router.post("/add", async (req, res) => {
  const NewItem = new TodoList(req.body);
  try {
    await NewItem.save();
    res.status(200).send("Inserted Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    await TodoList.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).send("Updated Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await TodoList.deleteOne({ _id: req.params.id });
    res.status(200).send("Deleted Successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
