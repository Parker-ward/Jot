import { generateId } from "../Utils/generateId.js"


export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body || ''
    this.color = data.noteColor
    this.date = data.date || new Date().toLocaleDateString('en-Us')
    this.time = data.time || new Date().toLocaleTimeString()
  }

  get NoteTemplate() {
    return `
    <div>
    <span class="text-${this.color}" onclick="app.notesController.setActiveNote('${this.id}')">${this.title}</span>
      </div>
    
    `
  }

  // TODO put in our active note template
  get ActiveNoteTemplate() {
    return `
    <div class="col-7 m-auto bg-info text-light rounded border border-${this.color}">
    <h1>${this.title}</h1>
    <div class="mb-3 d-flex justify-content-between">
    </div>
    <h3>${this.date}</h3>
    <h3>${this.time}</h3>
    <textarea name="body" id="body" for="body" onblur="app.notesController.updateNote('${this.id}')">${this.body}</textarea>
  </div>
  <div>
  <button class="btn btn-danger" id="${this.id}" onclick="app.notesController.deleteNote('${this.id}')">DELETE NOTE</button>
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