import { NotesController } from "./Controllers/NotesController.js";
class App {
  // valuesController = new this.valuesController();
  notesController = new NotesController()
}

window["app"] = new App();
