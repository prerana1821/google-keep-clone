import { useState } from "react";

export const Tags = ({ tags, addTags, handleTagFilter }) => {
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    addTags(newTag);
  };

  return (
    <div>
      <h2>Add Tags</h2>
      <input
        value={newTag}
        onChange={(e) => {
          setNewTag(e.target.value);
        }}
      ></input>

      <button onClick={handleAddTag}>Add Tag </button>

      <ShowTags tags={tags} handleTagFilter={handleTagFilter} />
    </div>
  );
};

const ShowTags = ({ tags, handleTagFilter }) => {
  const handleTags = (tag) => {
    console.log(tag);
    handleTagFilter(tag);
  };

  return (
    <div>
      {tags.map((tag) => {
        return (
          <p
            key={tag}
            onClick={() => handleTags(tag)}
            style={{ display: "inline", margin: " 0 1rem" }}
          >
            {tag}
          </p>
        );
      })}
    </div>
  );
};
