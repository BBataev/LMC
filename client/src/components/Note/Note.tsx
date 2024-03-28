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
    <div className="note">
      <span className="note__createTime">{formatDate(note.createdAt)}</span>
      <h1 className="note__title">{note.title}</h1>
      <p className="note__descr">&emsp;{note.text}</p>
    </div>
  );
};
