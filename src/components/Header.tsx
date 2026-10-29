import React, { useState } from 'react';
import { Discipline } from '../types';
import { BookOpen, ChevronDown, Plus, Trash2, CheckCircle2, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  disciplines: Discipline[];
  currentDiscipline: Discipline | null;
  onSelectDiscipline: (d: Discipline) => void;
  onCreateDiscipline: (name: string, code: string, description: string) => Promise<void>;
  onDeleteDiscipline: (id: string) => Promise<void>;
  completionPercentage: number;
}

export const Header: React.FC<HeaderProps> = ({
  disciplines,
  currentDiscipline,
  onSelectDiscipline,
  onCreateDiscipline,
  onDeleteDiscipline,
  completionPercentage
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newDisciplineName, setNewDisciplineName] = useState('');
  const [newDisciplineCode, setNewDisciplineCode] = useState('');
  const [newDisciplineDesc, setNewDisciplineDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDisciplineName.trim()) return;
    setIsSubmitting(true);
    try {
      await onCreateDiscipline(newDisciplineName.trim(), newDisciplineCode.trim(), newDisciplineDesc.trim());
      setNewDisciplineName('');
      setNewDisciplineCode('');
      setNewDisciplineDesc('');
      setShowCreateModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async () => {
    if (!currentDiscipline) return;
    setIsSubmitting(true);
    try {
      await onDeleteDiscipline(currentDiscipline.id);
      setShowDeleteModal(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header style={{
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e2e8f0',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0.85rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Brand / Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '8px',
            backgroundColor: '#4f46e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 4px rgba(79, 70, 229, 0.25)'
          }}>
            <BookOpen size={20} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontWeight: 800, fontSize: '1.15rem', color: '#0f172a', letterSpacing: '-0.02em' }}>
                Personal Study
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                padding: '0.15rem 0.45rem',
                backgroundColor: '#ede9fe',
                color: '#6366f1',
                borderRadius: '9999px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Mastery System
              </span>
            </div>
            <p style={{ fontSize: '0.78rem', color: '#64748b' }}>
              Self-adapting interactive study guide
            </p>
          </div>
        </div>

        {/* Discipline Dropdown & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Custom Styled Discipline Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 0.9rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                color: '#1e293b',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#94a3b8')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#cbd5e1')}
            >
              <span>{currentDiscipline ? currentDiscipline.name : 'Select Discipline'}</span>
              <ChevronDown size={16} color="#64748b" />
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                marginTop: '0.4rem',
                width: '260px',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
                padding: '0.4rem',
                zIndex: 50
              }}>
                <div style={{ padding: '0.4rem 0.6rem', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase' }}>
                  Disciplines ({disciplines.length})
                </div>

                {disciplines.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => {
                      onSelectDiscipline(d);
                      setDropdownOpen(false);
                    }}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.55rem 0.75rem',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: currentDiscipline?.id === d.id ? '#eef2ff' : 'transparent',
                      color: currentDiscipline?.id === d.id ? '#4f46e5' : '#334155',
                      fontWeight: currentDiscipline?.id === d.id ? 700 : 500,
                      fontSize: '0.875rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{d.name}</span>
                    {currentDiscipline?.id === d.id && <CheckCircle2 size={16} color="#4f46e5" />}
                  </button>
                ))}

                <div style={{ height: '1px', backgroundColor: '#e2e8f0', margin: '0.35rem 0' }} />

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    setShowCreateModal(true);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.55rem 0.75rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: 'transparent',
                    color: '#4f46e5',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Plus size={16} />
                  <span>Add New Discipline</span>
                </button>
              </div>
            )}
          </div>

          {/* Delete Discipline Button */}
          {currentDiscipline && (
            <button
              onClick={() => setShowDeleteModal(true)}
              title="Delete this discipline"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
                backgroundColor: '#fee2e2',
                color: '#ef4444',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#fecaca')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#fee2e2')}
            >
              <Trash2 size={16} />
            </button>
          )}

          {/* Progress Pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.45rem 0.85rem',
            backgroundColor: '#f1f5f9',
            borderRadius: '9999px',
            fontSize: '0.85rem',
            fontWeight: 700,
            color: '#334155'
          }}>
            <span>Mastery:</span>
            <span style={{ color: completionPercentage === 100 ? '#10b981' : '#4f46e5' }}>
              {completionPercentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Delete Discipline Confirmation Modal */}
      {showDeleteModal && currentDiscipline && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '1.75rem',
            maxWidth: '440px',
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#ef4444', marginBottom: '1rem' }}>
              <ShieldAlert size={26} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Delete Discipline?</h3>
            </div>
            <p style={{ fontSize: '0.925rem', color: '#475569', marginBottom: '1.5rem', lineHeight: 1.5 }}>
              Are you sure you want to delete <strong>{currentDiscipline.name}</strong>? This will permanently remove all its segments, quizzes, flashcards, and progress tracking records.
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                onClick={() => setShowDeleteModal(false)}
                disabled={isSubmitting}
                style={{
                  padding: '0.55rem 1.1rem',
                  backgroundColor: '#f1f5f9',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#475569',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isSubmitting}
                style={{
                  padding: '0.55rem 1.25rem',
                  backgroundColor: '#ef4444',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                {isSubmitting ? 'Deleting...' : 'Yes, Delete Discipline'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add New Discipline Modal */}
      {showCreateModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(3px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '1.75rem',
            maxWidth: '460px',
            width: '100%',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.25rem' }}>
              Add New Study Discipline
            </h3>
            <form onSubmit={handleCreate}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                  Discipline Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Econometrics, Machine Learning"
                  value={newDisciplineName}
                  onChange={(e) => setNewDisciplineName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                  Course Code (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ECON-301"
                  value={newDisciplineCode}
                  onChange={(e) => setNewDisciplineCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                  Description (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Summary of scope..."
                  value={newDisciplineDesc}
                  onChange={(e) => setNewDisciplineDesc(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.6rem 0.85rem',
                    borderRadius: '6px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  style={{
                    padding: '0.55rem 1.1rem',
                    backgroundColor: '#f1f5f9',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#475569',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.55rem 1.25rem',
                    backgroundColor: '#4f46e5',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  {isSubmitting ? 'Creating...' : 'Create Discipline'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
