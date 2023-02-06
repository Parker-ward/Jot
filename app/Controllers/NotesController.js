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
  // console.log(template);
}

function _drawNote() {
  let note = appState.activeNote
  setHTML('activenote', note.ActiveNoteTemplate)
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

  // TODO call function in service that sets the note in the appstate
  // TODO pass the noteId down to the service
  // console.log(noteId);
  // NOTE here I am calling the set active fn in the service
  // notesService.setActiveNote(noteId)

  updateNote() {
    try {
      let textarea = document.getElementById('🗒️')
      // @ts-ignore
      let updatedBody = textArea.value
      console.log('blurred', updatedBody);
      notesService.updateNote(updatedBody)
    } catch (error) {
      console.error(error);
      Pop.error(error.message)

    }
  }
}


