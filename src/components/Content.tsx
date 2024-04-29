import ContentLine from "./ContentLine";
import { useLines } from "../stores/global/lines";
import { For, createEffect } from "solid-js";

const Content = () => {
  const { content, addEmpty, toggleEditable, updateContent } = useLines();

  return (
    <>
      <For each={content.lines}>
        {(line, i) => {
          return <ContentLine lineCount={line.index} content={line.content} editable={line.editable} />
        }}
      </For >
    </>
  );
}

export default Content;
