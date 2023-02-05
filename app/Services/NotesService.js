import { appState } from "../AppState.js";
import { Note } from "../Models/Note.js";
import { saveState } from "../Utils/Store.js";
class NotesService {

  setActiveNote(noteId) {
    let foundNote = appState.notes.find(n => n.id == noteId)
    console.log(foundNote);
    appState.activeNote = foundNote
    console.log(noteId, "this is my service");
    // TODO find the note in the appstate using the noteId (from the array)
    // TODO after finding the note, save it to the appstate activeNote
  }



  updateNote(updatedBody) {
    let activeNote = appState.activeNote
    activeNote.body = updatedBody
    activeNote.unlocked = false
    saveState('note', appState.notes)
    appState.emit('activeNote')
  }




  createNote(FormData) {
    let newNote = new Note(FormData)
    console.log(newNote);
    appState.notes.push(newNote)
    saveState('note', appState.notes)
    appState.emit('note')
  }
}



export const notesService = new NotesService()