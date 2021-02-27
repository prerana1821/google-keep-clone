export const ChooseColor = ({ colors, handleColor, noteId }) => {
  return (
    <div style={{ margin: "1rem" }}>
      {colors.map((color) => {
        return (
          <div
            onClick={() => {
              handleColor(color, noteId);
            }}
            key={color}
            style={{
              backgroundColor: color,
              padding: "4px 12px",
              display: "inline",
              borderRadius: "50%",
              margin: "1rem 0.5rem",
              content: "",
              border: "1px solid #000",
              cursor: "pointer"
            }}
          ></div>
        );
      })}
    </div>
  );
};
