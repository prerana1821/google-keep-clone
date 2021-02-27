import { ChooseColor } from "./ChooseColor";

export const ShowNotes = ({
  notes,
  colors,
  handleEditNote,
  deleteNote,
  handleColor,
  handledPinned
}) => {
  // const { id, title, description, pinned, tag, backgroundColor } = notes;

  // const [edit, setEdit] = useState(false);
  // const [editedDesc, setEditedDesc] = useState("");

  const handleEdit = (noteToEdit) => {
    // console.log("noteToEdit", noteToEdit);
    // notes.map((note) => {
    //   if (note.id === noteId) {
    //     console.log("note.id", note.id);
    //     console.log("noteToEdit.id", noteToEdit.id);
    //     // setEdit(!edit);
    //   }
    // });
    handleEditNote(noteToEdit);
  };

  const handlePinned = (noteId) => {
    handledPinned(noteId);
  };

  // console.log("ShowNotes", notes);

  return (
    <div>
      <h2>Pinned Notes</h2>
      <div>
        {notes.map((note) => {
          if (note.pinned) {
            return (
              <div
                key={note.id}
                style={{ backgroundColor: note.backgroundColor }}
              >
                <h3> {note.title}</h3>
                <textarea
                  style={{ resize: "none" }}
                  cols="30"
                  rows="6"
                  readOnly
                  // readOnly={edit}
                  value={note.description}
                  // onChange={(e) => {
                  //   setEditedDesc(e.target.value);
                  // }}
                ></textarea>
                <ChooseColor
                  colors={colors}
                  handleColor={handleColor}
                  noteId={note.id}
                />
                <p>{note.tag}</p>
                <button onClick={() => handlePinned(note.id)}>
                  {note.pinned ? "Unpin" : "Pin"}
                </button>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>

      <h2>Notes</h2>
      <div>
        {notes.map((note) => {
          if (!note.pinned) {
            return (
              <div
                key={note.id}
                style={{ backgroundColor: note.backgroundColor }}
              >
                <h3> {note.title}</h3>
                <textarea
                  style={{ resize: "none" }}
                  cols="30"
                  rows="6"
                  readOnly
                  // readOnly={edit}
                  value={note.description}
                  // onChange={(e) => {
                  //   setEditedDesc(e.target.value);
                  // }}
                ></textarea>
                <ChooseColor
                  colors={colors}
                  handleColor={handleColor}
                  noteId={note.id}
                />
                <p>{note.tag}</p>
                <button onClick={() => handlePinned(note.id)}>
                  {note.pinned ? "Unpin" : "Pin"}
                </button>
                <button onClick={() => handleEdit(note)}>Edit</button>
                <button
                  onClick={() => {
                    deleteNote(note.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
