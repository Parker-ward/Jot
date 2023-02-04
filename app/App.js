import { NotesController } from "./Controllers/NotesController.js";

class App {
  // valuesController = new ValuesController();
  notesController = new NotesController()
}

window["app"] = new App();
