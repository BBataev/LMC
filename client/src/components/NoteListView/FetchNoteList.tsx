import { useQuery } from "@tanstack/react-query"
import { queryClient } from "../../api/QueryClient"
import { fetchNoteList } from "../../api/Note"
import { NoteListView } from "./NoteListVIew"

export const FetchNoteListView = () => {
    const noteList = useQuery(
        {
            queryFn: () => fetchNoteList(),
            queryKey: ["notes"]
        },
        queryClient
    )

    switch (noteList.status) {
        case "error":
            return <h1>Произошла ошибка повторите попытку позже...</h1>

        case "success":
            return <NoteListView noteList={noteList.data.list}/>
    }
}