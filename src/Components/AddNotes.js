import { useState } from "react";
import { ChooseColor } from "./ChooseColor";

export const AddNotes = ({ tags, colors, onAddNote, editNote }) => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("Javascript");
  const [pinned, setPinned] = useState(false);
  const [backgroundColor, setbackgroundColor] = useState("#fff");

  const handleFocus = () => {
    if (!showInput) {
      setShowInput(true);
    }
  };

  console.log("AddNotes-Edit", editNote);

  const handleColor = (selectedColor) => {
    console.log(selectedColor);
    setbackgroundColor(selectedColor);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (showInput) {
      setShowInput(false);
    }

    if (!title) {
      alert("Add Task");
      return;
    } else if (!description) {
      alert("Add Description");
      return;
    }

    console.log(title);
    console.log(description);
    console.log(backgroundColor);
    console.log(tag);
    console.log(pinned);

    onAddNote({ title, description, tag, backgroundColor, pinned });

    setTitle("");
    setDescription("");
    setTag("Javascript");
    setbackgroundColor("#fff");
    setPinned(false);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onFocus={handleFocus}
          value={editNote.title ? editNote.title : title}
          placeholder="Add Note"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        <br />
        {
          <div>
            {showInput && (
              <div>
                <textarea
                  value={
                    editNote.description ? editNote.description : description
                  }
                  cols="30"
                  rows="7"
                  placeholder="Add Description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <br />
                <select
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                >
                  {tags.map((tg) => {
                    return (
                      <option
                        key={tg}
                        // value={tg}
                        value={editNote.tag ? editNote.tag : tg}
                        selected={editNote.tag && editNote.tag}
                      >
                        {tg}
                      </option>
                    );
                  })}
                </select>

                <br />
                <br />
                <ChooseColor colors={colors} handleColor={handleColor} />
                <br />
                <button type="button" onClick={() => setPinned(!pinned)}>
                  {pinned ? "UnPin" : "Pin"}
                </button>
                <input type="submit" value="Add Note" />
              </div>
            )}
          </div>
        }
      </form>
    </div>
  );
};
