'use client';

import { useState, useEffect } from 'react';
import { NotesContainer, NotesHeading, NotesBox, NotesTextarea } from "./notesStyle";

const Notes = () => {
    const [note, setNote] = useState('');

    useEffect(() => {
        const savedNote = localStorage.getItem('userNote');
        if (savedNote) {
            setNote(savedNote);
        }
    }, []);

    const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newNote = event.target.value;
      setNote(newNote);
      localStorage.setItem('userNote', newNote);
  };

    return (
        <NotesContainer>
            <NotesBox>
                <div>
                    <NotesHeading>Notes:</NotesHeading>
                    <NotesTextarea
                        name="description"
                        placeholder="Write your notes here..."
                        value={note}
                        onChange={handleNoteChange}
                    />
                </div>
            </NotesBox>
        </NotesContainer>
    );
};

export default Notes;

// 'use client';

// import { NotesContainer, NotesHeading, NotesBox, NotesTextarea } from "./notesStyle";

// const Notes = () => {
//   return (
//     <NotesContainer>
//       <NotesBox>
//         <div>
//           <NotesHeading>Notes:</NotesHeading>
//           <NotesTextarea name="description" placeholder="Enter text here..." />
//         </div>
//       </NotesBox>
//     </NotesContainer>
//   );
// };

// export default Notes;
