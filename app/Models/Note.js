import { generateId } from "../Utils/generateId.js"


export class Note {
  constructor(data) {
    this.id = generateId() || data.id
    this.title = data.title
    this.body = data.body || ''
    this.date = data.date || new Date().toLocaleDateString('en-Us')
  }

  get NoteTemplate() {
    return `
    <div>
    <span onclick="app.notesController.setActiveNote('${this.id}')"></span>
    <span>${this.title}</span>
    </div>
    `
  }

  // TODO put in our active note template
  get ActiveNoteTemplate() {
    return `
    <div class="col-7 m-auto bg-info text-light rounded border border-dark">
    <h1>${this.title}</h1>
    <div class="mb-3 d-flex justify-content-between">
    </div>
    <h3>${this.date}</h3>
    <textarea name="body" id="🗒️">${this.body} onblur="app.notesController.updateNote()"</textarea>
  </div>
  <div class="d-flex justify-content-end">
    <button class="btn btn-success">Save</button>
  </div>
    `
  }
}


/* <form>
  <div class="mb-3">
    <label for="Title" class="form-label">Title</label>
    <input type="Title" class="form-control bg-white" id="" aria-describedby="emailHelp">
  </div>
  <label for="exampleColorInput" class="form-label">Color picker</label>
  <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c"
    title="Choose your color">
    <button type="submit" class="btn btn-primary">Submit</button>
</form> */