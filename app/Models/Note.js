import { generateId } from "../Utils/generateId.js"


export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.body = data.body || ''
    this.noteColor = data.noteColor // ?
    // FIXME need to include an updated timestamp as well DONE!!! BOOM!
    // FIXME if you keep the timestamps as just Date, you can format them later.DONE!!!! BOOM!!
    this.date = data.date || new Date().toLocaleDateString('en-Us')
    this.time = data.time || new Date().toLocaleTimeString()
    this.updatedTime = data.updatedTime || new Date().toLocaleTimeString()
  }

  get NoteTemplate() {
    return `
    <div>
    <span class="text-${this.noteColor}" onclick="app.notesController.setActiveNote('${this.id}')">${this.title}</span>
      </div>
    
    `
  }

  // TODO put in our active note template
  get ActiveNoteTemplate() {
    //FIXME represent chosen color on template
    // when saving a hex code you will have to interpolate it into your string using a style attribute.
    //NOTE needed to add a STYLE attribute to make colorpicker to show!
    return `
    <div  class="col-7 m-auto bg-info text-light rounded border border-width-2rem ${this.noteColor}">
    <h1 style="color:${this.noteColor}" >${this.title}</h1>
    <div class="mb-3 d-flex justify-content-between">
    </div>
    <h3>${this.date}</h3>
    <h3>${this.time}</h3>
    <h3>${this.updatedTime}</h3>
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