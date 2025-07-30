import React from 'react';

interface NoteListProps {
  notes: string[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <ul className="list-disc pl-5">
      {notes.map((note, index) => (
        <li key={index} className="py-1">
          {note}
        </li>
      ))}
    </ul>
  );
}
