import { appState } from "../AppState.js";

class NotesService {

  setActiveNote(noteId) {
    let foundNote = appState.notes.find(n => n.id == noteId)
    console.log(foundNote);
    appState.activeNote = foundNote
    console.log(noteId, "this is my service");
    // TODO find the note in the appstate using the noteId (from the array)
    // TODO after finding the note, save it to the appstate activeNote
  }
}

export const notesService = new NotesService()

// updateNote(updatedBody){
//   let activeNote = appState.activeNote
//   activeNote.body = updatedBody

// }

