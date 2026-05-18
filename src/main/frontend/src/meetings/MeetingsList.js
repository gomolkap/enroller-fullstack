import { useState } from "react";
import './MeetingsList.css';

export default function MeetingsList({meetings, username, onDelete, onSignUp, onSignOut, onUpdate}) {
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editDescription, setEditDescription] = useState('');

    function startEditing(meeting) {
        setEditingId(meeting.id);
        setEditTitle(meeting.title);
        setEditDescription(meeting.description);
    }

    function saveEditing(meeting) {
        onUpdate(meeting, editTitle, editDescription);
        setEditingId(null);
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Data</th>
                <th>Akcje</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => {
                    const isSignedUp = meeting.participants && meeting.participants.some(p => p.login === username);
                    const isEditing = editingId === meeting.id;

                    return (
                        <tr key={index}>
                            <td>
                                {isEditing ?
                                    <input value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                                    : meeting.title}
                            </td>
                            <td>
                                {isEditing ?
                                    <input value={editDescription} onChange={e => setEditDescription(e.target.value)} />
                                    : meeting.description}
                            </td>
                            <td>{meeting.date}</td>
                            <td>
                                {isEditing ? (
                                    <button className="button button-outline" onClick={() => saveEditing(meeting)}>Zapisz</button>
                                ) : (
                                    <>
                                        {isSignedUp && <span style={{ marginRight: '15px', fontWeight: 'bold', color: 'green' }}>Zapisany</span>}
                                        <button className="button button-outline" style={{ marginRight: '10px' }} onClick={() => startEditing(meeting)}>Edytuj</button>
                                        <button className="button button-outline button-red" style={{ marginRight: '10px' }} onClick={() => onDelete(meeting)}>Usuń</button>
                                        {isSignedUp ?
                                            <button className="button button-outline button-red" onClick={() => onSignOut(meeting)}>Wypisz się</button>
                                            : <button className="button button-outline" onClick={() => onSignUp(meeting)}>Zapisz się</button>
                                        }
                                    </>
                                )}
                            </td>
                        </tr>
                    );
                })
            }
            </tbody>
        </table>
    );
}