import React, { useState } from 'react';
import { Discipline } from '../types';
import { ChevronDown, Plus, Trash2, Check, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  disciplines: Discipline[];
  currentDiscipline: Discipline | null;
  onSelectDiscipline: (d: Discipline) => void;
  onCreateDiscipline: (name: string, code: string, description: string) => Promise<void>;
  onDeleteDiscipline: (id: string) => Promise<void>;
  completionPercentage: number;
  completedCount: number;
  totalSegments: number;
}

export const Header: React.FC<HeaderProps> = ({
  disciplines,
  currentDiscipline,
  onSelectDiscipline,
  onCreateDiscipline,
  onDeleteDiscipline,
  completionPercentage,
  completedCount,
  totalSegments
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newDisciplineName, setNewDisciplineName] = useState('');
  const [newDisciplineCode, setNewDisciplineCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDisciplineName.trim()) return;
    setIsSubmitting(true);
    try {
      await onCreateDiscipline(newDisciplineName.trim(), newDisciplineCode.trim(), '');
      setNewDisciplineName('');
      setNewDisciplineCode('');
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
      borderBottom: '1px solid #e7e2d7',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      boxShadow: '0 1px 3px rgba(120, 53, 15, 0.03)'
    }}>
      <div style={{
        maxWidth: '960px',
        margin: '0 auto',
        padding: '0.65rem 1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem'
      }}>
        {/* Brand / Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{
              width: '32px',
              height: '32px',
              objectFit: 'contain',
              borderRadius: '6px'
            }}
          />
          <span style={{
            fontWeight: 800,
            fontSize: '1.05rem',
            color: '#451a03',
            letterSpacing: '-0.02em',
            display: 'inline-block'
          }}>
            Personal Study
          </span>
        </div>

        {/* Minimal Controls: Discipline Dropdown + Progress */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {/* Custom Styled Discipline Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.4rem 0.75rem',
                backgroundColor: '#fffbeb',
                border: '1px solid #d6cebf',
                borderRadius: '8px',
                color: '#78350f',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer'
              }}
            >
              <span style={{ maxWidth: '140px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentDiscipline ? currentDiscipline.name : 'Select'}
              </span>
              <ChevronDown size={14} color="#92400e" />
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                marginTop: '0.35rem',
                width: '240px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #e7e2d7',
                borderRadius: '10px',
                boxShadow: '0 10px 25px rgba(120, 53, 15, 0.1)',
                padding: '0.35rem',
                zIndex: 50
              }}>
                <div style={{ padding: '0.35rem 0.5rem', fontSize: '0.7rem', fontWeight: 700, color: '#a8a29e', textTransform: 'uppercase' }}>
                  Disciplines
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
                      padding: '0.5rem 0.65rem',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: currentDiscipline?.id === d.id ? '#fef3c7' : 'transparent',
                      color: currentDiscipline?.id === d.id ? '#78350f' : '#292524',
                      fontWeight: currentDiscipline?.id === d.id ? 700 : 500,
                      fontSize: '0.85rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{d.name}</span>
                    {currentDiscipline?.id === d.id && <Check size={14} color="#78350f" />}
                  </button>
                ))}

                <div style={{ height: '1px', backgroundColor: '#e7e2d7', margin: '0.3rem 0' }} />

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    setShowCreateModal(true);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.45rem 0.65rem',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: 'transparent',
                    color: '#78350f',
                    fontWeight: 700,
                    fontSize: '0.8rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Plus size={14} />
                  <span>New Discipline</span>
                </button>
              </div>
            )}
          </div>

          {/* Delete Discipline Button */}
          {currentDiscipline && (
            <button
              onClick={() => setShowDeleteModal(true)}
              title="Delete Discipline"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.45rem',
                backgroundColor: 'transparent',
                color: '#a8a29e',
                border: '1px solid #e7e2d7',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#dc2626';
                e.currentTarget.style.borderColor = '#fca5a5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#a8a29e';
                e.currentTarget.style.borderColor = '#e7e2d7';
              }}
            >
              <Trash2 size={15} />
            </button>
          )}

          {/* Compact Mastery Pill */}
          <div style={{
            padding: '0.35rem 0.65rem',
            backgroundColor: completionPercentage === 100 ? '#f0fdf4' : '#f7f4ee',
            borderRadius: '9999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: completionPercentage === 100 ? '#15803d' : '#78350f',
            border: `1px solid ${completionPercentage === 100 ? '#bbf7d0' : '#e7e2d7'}`
          }}>
            {completedCount}/{totalSegments} • {completionPercentage}%
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && currentDiscipline && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(69, 26, 3, 0.5)',
          backdropFilter: 'blur(2px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '1.5rem',
            maxWidth: '380px',
            width: '100%',
            boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
            border: '1px solid #e7e2d7'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#dc2626', marginBottom: '0.75rem' }}>
              <ShieldAlert size={22} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#451a03' }}>Delete Discipline?</h3>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#57534e', marginBottom: '1.25rem' }}>
              Are you sure you want to delete <strong>{currentDiscipline.name}</strong> and all its levels?
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
              <button
                onClick={() => setShowDeleteModal(false)}
                style={{
                  padding: '0.45rem 0.85rem',
                  backgroundColor: '#f7f4ee',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: '#57534e',
                  cursor: 'pointer'
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={isSubmitting}
                style={{
                  padding: '0.45rem 1rem',
                  backgroundColor: '#dc2626',
                  border: 'none',
                  borderRadius: '6px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                {isSubmitting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Discipline Modal */}
      {showCreateModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(69, 26, 3, 0.5)',
          backdropFilter: 'blur(2px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 100,
          padding: '1rem'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            padding: '1.5rem',
            maxWidth: '380px',
            width: '100%',
            boxShadow: '0 20px 25px rgba(0,0,0,0.2)',
            border: '1px solid #e7e2d7'
          }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#451a03', marginBottom: '1rem' }}>
              New Discipline
            </h3>
            <form onSubmit={handleCreate}>
              <div style={{ marginBottom: '0.75rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#57534e', marginBottom: '0.25rem' }}>
                  Discipline Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Econometrics"
                  value={newDisciplineName}
                  onChange={(e) => setNewDisciplineName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #d6cebf',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#57534e', marginBottom: '0.25rem' }}>
                  Course Code (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. DA-2026"
                  value={newDisciplineCode}
                  onChange={(e) => setNewDisciplineCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid #d6cebf',
                    fontSize: '0.85rem'
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  style={{
                    padding: '0.45rem 0.85rem',
                    backgroundColor: '#f7f4ee',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    color: '#57534e',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.45rem 1rem',
                    backgroundColor: '#78350f',
                    border: 'none',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  {isSubmitting ? 'Creating...' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};
