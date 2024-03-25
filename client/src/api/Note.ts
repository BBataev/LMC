import { z } from "zod";
import { Validation } from "./Validation";

export const NoteSchema = z.object({
  /**
   * id заметки
   */
  id: z.string(),
  /**
   * Заголовок заметки
   */
  title: z.string(),
  /**
   * Текст заметки
   */
  text: z.string(),
  /**
   * Время создания заметки
   */
  createdAt: z.number(),
});

export type Note = z.infer<typeof NoteSchema>;

export const NoteList = z.array(NoteSchema);

export type NoteList = z.infer<typeof NoteList>;

export const FetchNoteListSchema = z.object({
  list: NoteList,
});

export type FetchNoteListRes = z.infer<typeof FetchNoteListSchema>;

export function fetchNoteList(): Promise<FetchNoteListRes> {
  return fetch("/api/notes")
    .then((res) => res.json())
    .then((data) => FetchNoteListSchema.parse(data));
}

export function createNote(title: string, text: string): Promise<void> {
  return fetch("/api/notes/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, text }),
  })
    .then(Validation)
    .then(() => undefined);
}
