import { marked } from "marked";
import * as DOMPurify from "dompurify";

interface PreviewProps {
  state: string;
}

export const Preview = ({ state }: PreviewProps) => {
  return (
    <div
      style={{
        border: "1px solid black",
        height: "100%",
        padding: "1rem",
      }}
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(marked.parse(state)),
      }}
    />
  );
};
