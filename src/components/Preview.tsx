import marked from "marked";

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
        __html: marked(state),
      }}
    />
  );
};
