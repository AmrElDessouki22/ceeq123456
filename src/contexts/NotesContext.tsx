'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface NotesContextType {
  notes: string[];
  addNote: (note: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
}
