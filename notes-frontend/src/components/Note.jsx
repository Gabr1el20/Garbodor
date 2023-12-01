
const Note = ({ notes }) => {
  return (
    <>
    {notes.map(
      note => <li key={note.id}>{note.name} {note.number}</li>
    )}
    </>
  )
}

export default Note