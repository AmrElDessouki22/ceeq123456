'use client';

import { useState, FormEvent } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

interface NoteFormProps {
  addNote: (note: string) => void;
  setLoading: (loading: boolean) => void;
}

export default function NoteForm({ addNote, setLoading }: NoteFormProps) {
  const [note, setNote] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addNote(note);
    setLoading(false);
    setNote('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <Button label="Add Note" type="submit" />
    </form>
  );
}
