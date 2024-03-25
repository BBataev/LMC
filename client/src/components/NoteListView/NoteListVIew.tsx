import { FC } from "react";
import { NoteList } from "../../api/Note";
import { NoteView } from "../Note/Note";
import "./NoteListView.css";

export interface NoteListProps {
  noteList: NoteList;
}

export const NoteListView: FC<NoteListProps> = ({ noteList }) => {
  return (
    <div className="postList">
      <ul className="postList-posts">
        <div className="posts">
          {noteList.map((note) => (
            <li key={note.id} className="posts__post">
              <NoteView note={note} />
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};
