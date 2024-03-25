import { useQuery } from "@tanstack/react-query";
import { NoteForm } from "../NoteForm/NoteForm";
import "./NotesPage.css";
import { fetchNoteList } from "../../api/Note";
import { queryClient } from "../../api/QueryClient";
import { NoteListView } from "../NoteListView/NoteListVIew";
import { Loader } from "../Loader/Loader";
import { CheckoutIfDoHave } from "../checkout";
import { Account } from "../Account/Account";

export const NotesPage = () => {
  const noteList = useQuery(
    {
      queryFn: () => fetchNoteList(),
      queryKey: ["notes"],
    },
    queryClient
  );

  switch (noteList.status) {
    case "pending":
      return (
        <>
          <Loader />
          <CheckoutIfDoHave />
        </>
      );

    case "error":
      return (
        <div className="error">
            <h1 className="error__title">
                Произошла ошибка повторите попытку позже...
            </h1>
            <button>
                Попробовать снова
            </button>
        </div>
      );

    case "success":
      return (
        <div className="notesPage">
          <Account />
          <NoteForm />
          <NoteListView noteList={noteList.data.list} />
        </div>
      );
  }
};
