'use client';

import { useState } from 'react';
import NoteList from '@/components/features/NoteList';
import NoteForm from '@/components/features/NoteForm';
import { useNotes } from '@/contexts/NotesContext';

export default function HomePage() {
  const { notes, addNote } = useNotes();
  const [loading, setLoading] = useState(false);

  return (
    <div className="p-4">
      <NoteForm addNote={addNote} setLoading={setLoading} />
      {loading ? <p>Loading...</p> : <NoteList notes={notes} />}
    </div>
  );
}
