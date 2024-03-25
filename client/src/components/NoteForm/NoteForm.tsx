import { useMutation } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";
import { queryClient } from "../../api/QueryClient";
import { createNote } from "../../api/Note";
import "./NoteForm.css";
import { Button } from "../Button/Button";
import { CheckoutIfDoHave } from "../checkout";

export const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const saveMutation = useMutation(
    {
      mutationFn: () => createNote(title, text),
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["notes"] });
        setTitle("");
        setText("");
      },
    },
    queryClient
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    saveMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit} className="noteForm">
      <CheckoutIfDoHave />
      <div className="noteForm-ins">
        <div className="noteForm-group noteForm-title">
          <input
            className="title__inputGroup title__input"
            type="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label className="title__labelGroup title__label">Заголовок</label>
        </div>
        <div className="noteForm-group noteForm-text">
          <textarea
            className="title__inputGroup text__input"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            required
          />
          <label className="title__labelGroup text__label">Текст</label>
        </div>
        <Button
          title="Сохранить"
          size="big"
          isLoading={saveMutation.isPending}
        />
      </div>
    </form>
  );
};
