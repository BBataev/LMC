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

  const [error, setError] = useState<string | undefined>();

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

    console.log(text.length);

    if (text.length < 10) {
      setError("Текст поста должен быть не меньше 10 символов");
    } else {
      saveMutation.mutate();
    }
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
              setError(undefined);
            }}
            required
          />
          <label className="title__labelGroup text__label">Текст</label>
        </div>
        {error && <span className="noteForm__errorMassage">{error}</span>}
        <Button
          title="Сохранить"
          size="big"
          isLoading={saveMutation.isPending}
        />
      </div>
    </form>
  );
};
