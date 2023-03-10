import { appState } from "../AppState.js";
import { notesService } from "../Services/NotesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



function _drawNotes() {
  let notes = appState.notes
  // console.log(notes);
  let template = ''
  notes.forEach(note => template += note.NoteTemplate)
  setHTML('notes', template)
  setHTML('noteCount', notes.length)
  console.log('noteCount', notes.length);

  // TODO look at docs for arrays \...there is a property that tells you how many things are in it
  // FIXME also get count of notes and draw to somewhere else on the html
  // console.log(template);
}

function _drawNote() {
  let note = appState.activeNote
  setHTML('activeNote', note.ActiveNoteTemplate)
}

export class NotesController {
  constructor() {
    // console.log('hello from the notes controller');
    _drawNotes()
    // _drawNote()
    // TODO listen to the active note, and when it changes call the _drawNote fn
    appState.on('notes', _drawNotes)
    appState.on('activeNote', _drawNote)
  }

  createNote() {
    try {
      // NOTE don't refresh the page!
      window.event.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log(formData);
      notesService.createNote(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      Pop.error(error.message)
      console.error(error);
    }
  }

  setActiveNote(noteId) {
    try {
      notesService.setActiveNote(noteId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  setNoteCount() {
    return appState.notes.length;
  }

  // TODO call function in service that sets the note in the appstate
  // TODO pass the noteId down to the service
  // console.log(noteId);
  // NOTE here I am calling the set active fn in the service
  // notesService.setActiveNote(noteId)

  updateNote(noteId) {
    try {
      let textarea = document.getElementById('body')
      // @ts-ignore
      let updatedBody = textarea.value
      console.log('blurred', updatedBody);
      notesService.updateNote(updatedBody)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)

    }
  }

  async deleteNote(noteId) {

    try {
      const yes = await Pop.confirm('Are you sure?')
      if (!yes) { return } // full stop

      notesService.deletenote(noteId)
    } catch (error) {
      Pop.error(error)
    }
  }

}


