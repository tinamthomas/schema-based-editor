import TextEditor from "./Text";
import ObjectEditor from "./Object";
import ArrayEditor from "./Array";

const map = {
  "string": TextEditor,
  "object": ObjectEditor,
  "array": ArrayEditor
};

export default function (type: string): any {
  return map[type];
};