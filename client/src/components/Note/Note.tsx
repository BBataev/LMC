import { FC } from "react";
import { Note } from "../../api/Note";
import './Note.css'

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} ${date.toLocaleTimeString(undefined, {
    timeStyle: "medium",
  })}`;
}

export interface NoteProps {
  note: Note;
}

export const NoteView: FC<NoteProps> = ({ note }) => {
  return (
    <div className="post">
      <span className="post__createTime">{formatDate(note.createdAt)}</span>
      <h1 className="post__title">{note.title}</h1>
      <p className="post__descr">&emsp;{note.text}</p>
    </div>
  );
};
