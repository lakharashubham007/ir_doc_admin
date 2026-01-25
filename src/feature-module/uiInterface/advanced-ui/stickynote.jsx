import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import { useState } from 'react';
import { Plus, X } from 'react-feather';

const routes = all_routes;

const StickyNote = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    onUpdate({ ...note, content });
    setIsEditing(false);
  };

  return (
    <div className="sticky-note" style={{
      backgroundColor: note.color || '#fffaaf',
      padding: '15px',
      margin: '10px',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      position: 'relative',
      width: '250px',
      minHeight: '200px',
      display: 'inline-block',
      verticalAlign: 'top',
      wordBreak: 'break-word'
    }}>
      <button
        onClick={() => onDelete(note.id)}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          fontSize: '14px',
          color: '#666'
        }}
      >
        <X size={16} />
      </button>

      {isEditing ? (
        <div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              width: '100%',
              minHeight: '150px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '8px',
              marginBottom: '8px',
              resize: 'vertical'
            }}
            autoFocus
          />
          <button
            onClick={handleSave}
            style={{
              background: '#4CAF50',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '5px'
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              setContent(note.content);
              setIsEditing(false);
            }}
            style={{
              background: '#f44336',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          style={{
            minHeight: '150px',
            cursor: 'pointer',
            whiteSpace: 'pre-wrap'
          }}
        >
          {content || 'Click to edit...'}
        </div>
      )}
    </div>
  );
};

const StickyNotesBoard = () => {
  const [notes, setNotes] = useState([
    { id: 1, content: 'Welcome to your sticky notes!', color: '#fffaaf' }
  ]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      content: '',
      color: `hsl(${Math.random() * 360}, 70%, 85%)`
    };
    setNotes([...notes, newNote]);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note =>
      note.id === updatedNote.id ? updatedNote : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Sticky Notes</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Sticky Notes</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <button
                  onClick={addNote}
                  style={{
                    background: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Plus size={16} /> Add New Note
                </button>

                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  {notes.map(note => (
                    <StickyNote
                      key={note.id}
                      note={note}
                      onDelete={deleteNote}
                      onUpdate={updateNote}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNotesBoard;
