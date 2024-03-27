import "./NoteListClear.css";

export const NoteListClear = () => {
  return (
    <div className="noteListEmpty">
        <h1 className="noteListEmpty__title">Тут пока что пусто :(</h1>
        <p className="noteListEmpty__descr">Создайте заметку, чтобы это исправить</p>
    </div>
  );
};
