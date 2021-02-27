import { v4 } from "uuid";

export const notesDB = [
  {
    id: v4(),
    title: "Understanding React",
    description:
      "When the contenteditable attribute is not set on an element, the element will inherit it from its parent.",
    pinned: false,
    tag: "React",
    backgroundColor: "#F87171"
  },
  {
    id: v4(),
    title: "Understanding Javascript",
    description:
      "This is a paragraph. It is editable. Try to change this text.",
    pinned: false,
    tag: "Javascript",
    backgroundColor: "#FBBF24"
  },
  {
    id: v4(),
    title: "Understanding React",
    description:
      "When the contenteditable attribute is not set on an element, the element will inherit it from its parent.",
    pinned: true,
    tag: "CSS",
    backgroundColor: "#F472B6"
  },
  {
    id: v4(),
    title: "Hello World",
    description:
      "This is a paragraph. It is editable. Try to change this text.",
    pinned: false,
    tag: "React",
    backgroundColor: "#A78BFA"
  },
  {
    id: v4(),
    title: "Understanding Javascript",
    description:
      "This is a paragraph. It is editable. Try to change this text.",
    pinned: true,
    tag: "Javascript",
    backgroundColor: "#FBBF24"
  },
  {
    id: v4(),
    title: "Understanding React",
    description:
      "When the contenteditable attribute is not set on an element, the element will inherit it from its parent.",
    pinned: false,
    tag: "Javascript",
    backgroundColor: "#F472B6"
  },
  {
    id: v4(),
    title: "Hello World",
    description:
      "This is a paragraph. It is editable. Try to change this text.",
    pinned: false,
    tag: "CSS",
    backgroundColor: "#A78BFA"
  }
];
