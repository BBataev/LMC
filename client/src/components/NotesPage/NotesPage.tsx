import { useQuery } from "@tanstack/react-query";
import { NoteForm } from "../NoteForm/NoteForm";
import "./NotesPage.css";
import { fetchNoteList } from "../../api/Note";
import { queryClient } from "../../api/QueryClient";
import { NoteListView } from "../NoteListView/NoteListVIew";
import { Loader } from "../Loader/Loader";
import { CheckoutIfDoHave } from "../checkout";
import { Account } from "../Account/Account";
import { useState } from "react";
import { Button } from "../Button/Button";
import { NoteListClear } from "../NoteListClear/NoteListClear";

export const NotesPage = () => {
  const [page, setPage] = useState(0);

  const noteList = useQuery(
    {
      queryFn: () => fetchNoteList(page),
      queryKey: ["notes", page],
    },
    queryClient
  );

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page - 1);
  };

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
          <button>Попробовать снова</button>
        </div>
      );

    case "success":
      const ableToScrollLeft = (): boolean => {
        return page === 0;
      };

      const ableToScrollRight = (): boolean => {
        return noteList.data.list.length !== 10;
      };

      return (
        <div className="notesPage">
          <Account />
          <NoteForm />
          {noteList.data.list.length !== 0 ? (
            <NoteListView noteList={noteList.data.list} />
          ) : (
            <NoteListClear />
          )}
          <div className="notesPage-controller">
            <Button
              title="<"
              onClick={handlePreviousPage}
              size="small"
              isDisabled={ableToScrollLeft()}
            />
            {page + 1}
            <Button
              title=">"
              onClick={handleNextPage}
              size="small"
              isDisabled={ableToScrollRight()}
            />
          </div>
        </div>
      );
  }
};
