import { useState } from "react";
import { v4 } from "uuid";
import { AddNotes, ShowNotes, Tags } from "./Components";
import { notesDB } from "./database";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState(notesDB);

  const [tags, setTags] = useState(["Javascript", "React", "CSS"]);

  // const [filteredNotes, setFilteredNotes] = useState(notes);

  const [editNote, setEditNote] = useState({});

  const [colors, setColors] = useState([
    "#F87171",
    "#FBBF24",
    "#34D399",
    "#60A5FA",
    "#A78BFA",
    "#F472B6"
  ]);

  const addNote = (note) => {
    console.log(note);
    setNotes([...notes, { id: v4(), ...note }]);
  };

  const handleEditNote = (note) => {
    console.log("Notes to Edit", note);
    // setNotes([...notes, { description: descrip, ...note }]);
    setEditNote(note);
  };

  const deleteNote = (noteId) => {
    setNotes(
      notes.filter((note) => {
        return note.id !== noteId;
      })
    );
  };

  const handledPinned = (selectedNoteId) => {
    setNotes(
      notes.map((note) => {
        if (note.id === selectedNoteId) {
          return { ...note, pinned: !note.pinned };
        } else {
          return note;
        }
      })
    );
  };

  const addTags = (tag) => {
    setTags([...tags, tag]);
  };

  const handleColor = (selectedColor, selectedNoteId) => {
    // console.log("selected", selectedColor);
    // console.log("selected Note", selectedNoteId);
    setNotes(
      notes.map((note) => {
        // console.log(note);
        if (note.id === selectedNoteId) {
          return { ...note, backgroundColor: selectedColor };
        } else {
          return note;
        }
      })
    );
  };

  // const handleTagFilter = (filteredTag) => {
  //   console.log("filter", filteredTag);
  //   setNotes(notes.filter((note) => note.tag === filteredTag));
  // };

  const handleTagFilter = (filteredTag) => {
    console.log("filter", filteredTag);
    setNotes(
      JSON.parse(JSON.stringify(notes)).filter((note) => {
        if (note.tag === filteredTag) {
          return note;
        }
      })
    );
  };

  // const handleTagFilter = (filteredTag) => {
  //   console.log("filter", filteredTag);
  //   setNotes(
  //     notes.filter((note) => {
  //       if (note.tag === filteredTag) {
  //         return note;
  //       }
  //     })
  //   );
  // };

  // const handleTagFilter = (filteredTag) => {
  //   console.log("filter", filteredTag);
  //   // let notesFiltered = notes.slice();
  //   setNotes(
  //     notes
  //       .filter((note) => note.tag === filteredTag)
  //       .map((filteredNotes) => {
  //         return filteredNotes;
  //       })
  //   );
  // };

  // const handleTagFilter = (filteredTag) => {
  //   console.log("filter", filteredTag);
  //   // let notesFiltered = notes.slice();
  //   setFilteredNotes(
  //     filteredNotes.filter((note) => {
  //       if (note.tag === filteredTag) {
  //         return note;
  //       }
  //     })
  //   );
  // };

  // console.log(tags);
  // console.log(notes);

  return (
    <div className="App">
      <h1>Google Keep Clone</h1>
      <AddNotes
        colors={colors}
        tags={tags}
        onAddNote={addNote}
        editNote={editNote}
      />
      <Tags tags={tags} addTags={addTags} handleTagFilter={handleTagFilter} />
      <ShowNotes
        notes={notes}
        colors={colors}
        handleColor={handleColor}
        handleEditNote={handleEditNote}
        deleteNote={deleteNote}
        handledPinned={handledPinned}
      />
    </div>
  );
}

// handleTagFilter = { handleTagFilter };
