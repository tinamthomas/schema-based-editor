import TextEditor from "./Text";
import ObjectEditor from "./Object";

const map = {
  "string": TextEditor,
  "object": ObjectEditor,
};

export default function (type: string): any {
  return map[type];
};