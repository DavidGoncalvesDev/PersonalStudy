import React, { useState } from 'react';
import { Discipline } from '../types';
import { ChevronDown, Plus, Check, BookOpen, Flame, Edit3, User } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface HeaderProps {
  disciplines: Discipline[];
  currentDiscipline: Discipline | null;
  onSelectDiscipline: (d: Discipline) => void;
  onCreateDiscipline: (name: string, code: string, description: string) => Promise<void>;
  completionPercentage: number;
  preparationScore: number;
  completedCount: number;
  totalSegments: number;
  activeTab: 'curriculum' | 'exercise_zone';
  onTabChange: (tab: 'curriculum' | 'exercise_zone') => void;
  onOpenScratchpad: () => void;
  currentUser: string | null;
  onOpenUserModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  disciplines,
  currentDiscipline,
  onSelectDiscipline,
  onCreateDiscipline,
  completionPercentage,
  preparationScore,
  completedCount,
  totalSegments,
  activeTab,
  onTabChange,
  onOpenScratchpad,
  currentUser,
  onOpenUserModal
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
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
        padding: '0.55rem 0.85rem'
      }}>
        {/* Tier 1: Main Bar (Brand, Desktop Tabs, and Status Pills) */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.6rem'
        }}>
          {/* Logo & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              type="button"
              onClick={() => {
                playClickSound();
                onTabChange('curriculum');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
              aria-label="Return to Main Levels Overview"
            >
              <img
                src="/logo.png"
                alt="David Study Logo"
                style={{
                  width: '28px',
                  height: '28px',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />
              <span style={{
                fontWeight: 800,
                fontSize: '1rem',
                color: '#451a03',
                letterSpacing: '-0.02em',
                display: 'inline-block'
              }}>
                David Study
              </span>
            </button>

            {/* Desktop Mode Switcher */}
            <div className="desktop-only" style={{
              display: 'flex',
              gap: '0.25rem',
              backgroundColor: '#fdfbf7',
              border: '1px solid #e7e2d7',
              borderRadius: '8px',
              padding: '0.2rem'
            }}>
              <button
                onClick={() => {
                  playClickSound();
                  onTabChange('curriculum');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.32rem 0.65rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: activeTab === 'curriculum' ? '#78350f' : 'transparent',
                  color: activeTab === 'curriculum' ? '#ffffff' : '#78716c',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease'
                }}
              >
                <BookOpen size={13} />
                <span>Levels</span>
              </button>

              <button
                onClick={() => {
                  playClickSound();
                  onTabChange('exercise_zone');
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.32rem 0.65rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: activeTab === 'exercise_zone' ? '#dc2626' : 'transparent',
                  color: activeTab === 'exercise_zone' ? '#ffffff' : '#78716c',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.12s ease'
                }}
              >
                <Flame size={13} />
                <span>Exercise Zone</span>
              </button>
            </div>
          </div>

          {/* Right Status Group */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            {/* Desktop Quick Notes */}
            <button
              className="desktop-only"
              onClick={() => {
                playClickSound();
                onOpenScratchpad();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.32rem 0.65rem',
                borderRadius: '8px',
                backgroundColor: '#fffdfa',
                border: '1px solid #d6cebf',
                color: '#78350f',
                fontWeight: 700,
                fontSize: '0.78rem',
                cursor: 'pointer'
              }}
            >
              <Edit3 size={13} color="#78350f" />
              <span>Notes</span>
            </button>

            {/* Desktop Discipline Dropdown */}
            <div className="desktop-only" style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.32rem 0.65rem',
                  backgroundColor: '#fffbeb',
                  border: '1px solid #d6cebf',
                  borderRadius: '8px',
                  color: '#78350f',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                <span style={{ maxWidth: '130px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {currentDiscipline ? currentDiscipline.name : 'Select Course'}
                </span>
                <ChevronDown size={13} color="#92400e" />
              </button>

              {dropdownOpen && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  marginTop: '0.35rem',
                  width: '230px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #e7e2d7',
                  borderRadius: '10px',
                  boxShadow: '0 10px 25px rgba(120, 53, 15, 0.1)',
                  padding: '0.35rem',
                  zIndex: 50
                }}>
                  <div style={{ padding: '0.35rem 0.5rem', fontSize: '0.68rem', fontWeight: 800, color: '#a8a29e', textTransform: 'uppercase' }}>
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
                        padding: '0.45rem 0.6rem',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: currentDiscipline?.id === d.id ? '#fef3c7' : 'transparent',
                        color: currentDiscipline?.id === d.id ? '#78350f' : '#292524',
                        fontWeight: currentDiscipline?.id === d.id ? 700 : 500,
                        fontSize: '0.82rem',
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
                      padding: '0.45rem 0.6rem',
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

            {/* Preparation Score Pill (Always Visible) */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.28rem 0.55rem',
              backgroundColor: '#fef3c7',
              border: '1.5px solid #d97706',
              borderRadius: '8px'
            }}>
              <Flame size={12} color="#b45309" />
              <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#78350f' }}>
                Prep: {preparationScore}%
              </span>
            </div>

            {/* User Profile Pill (Always Visible) */}
            <button
              onClick={() => {
                playClickSound();
                onOpenUserModal();
              }}
              title="Student Profile"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.28rem 0.55rem',
                borderRadius: '8px',
                backgroundColor: '#fffbeb',
                border: '1.5px solid #d6cebf',
                color: '#78350f',
                fontWeight: 800,
                fontSize: '0.74rem',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <User size={12} color="#b45309" />
              <span style={{ maxWidth: '80px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentUser || 'Login'}
              </span>
            </button>
          </div>
        </div>

        {/* Tier 2: Mobile Navigation Bar (Clean row for phone screens) */}
        <div className="mobile-only" style={{
          marginTop: '0.45rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          width: '100%'
        }}>
          {/* Mobile Segmented Mode Switcher */}
          <div style={{
            display: 'flex',
            flex: 1,
            gap: '0.2rem',
            backgroundColor: '#fdfbf7',
            border: '1px solid #e7e2d7',
            borderRadius: '8px',
            padding: '0.15rem'
          }}>
            <button
              onClick={() => {
                playClickSound();
                onTabChange('curriculum');
              }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
                padding: '0.32rem 0.4rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: activeTab === 'curriculum' ? '#78350f' : 'transparent',
                color: activeTab === 'curriculum' ? '#ffffff' : '#78716c',
                fontWeight: 700,
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
            >
              <BookOpen size={12} />
              <span>Levels</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onTabChange('exercise_zone');
              }}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.3rem',
                padding: '0.32rem 0.4rem',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: activeTab === 'exercise_zone' ? '#dc2626' : 'transparent',
                color: activeTab === 'exercise_zone' ? '#ffffff' : '#78716c',
                fontWeight: 700,
                fontSize: '0.74rem',
                cursor: 'pointer'
              }}
            >
              <Flame size={12} />
              <span>Exercise Zone</span>
            </button>
          </div>

          {/* Mobile Notes Button */}
          <button
            onClick={() => {
              playClickSound();
              onOpenScratchpad();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
              padding: '0.32rem 0.55rem',
              borderRadius: '8px',
              backgroundColor: '#fffdfa',
              border: '1px solid #d6cebf',
              color: '#78350f',
              fontWeight: 700,
              fontSize: '0.74rem',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            <Edit3 size={12} color="#78350f" />
            <span>Notes</span>
          </button>

          {/* Mobile Discipline Selector Dropdown */}
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                padding: '0.32rem 0.55rem',
                backgroundColor: '#fffbeb',
                border: '1px solid #d6cebf',
                borderRadius: '8px',
                color: '#78350f',
                fontWeight: 700,
                fontSize: '0.74rem',
                cursor: 'pointer',
                maxWidth: '110px'
              }}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentDiscipline ? currentDiscipline.code || currentDiscipline.name : 'Course'}
              </span>
              <ChevronDown size={11} color="#92400e" />
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                right: 0,
                marginTop: '0.35rem',
                width: '210px',
                backgroundColor: '#ffffff',
                border: '1.5px solid #e7e2d7',
                borderRadius: '10px',
                boxShadow: '0 10px 25px rgba(120, 53, 15, 0.15)',
                padding: '0.35rem',
                zIndex: 60
              }}>
                <div style={{ padding: '0.3rem 0.5rem', fontSize: '0.65rem', fontWeight: 800, color: '#a8a29e', textTransform: 'uppercase' }}>
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
                      padding: '0.4rem 0.5rem',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      backgroundColor: currentDiscipline?.id === d.id ? '#fef3c7' : 'transparent',
                      color: currentDiscipline?.id === d.id ? '#78350f' : '#292524',
                      fontWeight: currentDiscipline?.id === d.id ? 700 : 500,
                      fontSize: '0.78rem',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <span>{d.name}</span>
                    {currentDiscipline?.id === d.id && <Check size={13} color="#78350f" />}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Create Modal */}
      {showCreateModal && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(69, 26, 3, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          zIndex: 100
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1.5px solid #e7e2d7',
            padding: '1.5rem',
            maxWidth: '380px',
            width: '100%',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#451a03', marginBottom: '1rem' }}>
              Create New Discipline
            </h3>
            <form onSubmit={handleCreate}>
              <div style={{ marginBottom: '0.85rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#78350f', marginBottom: '0.35rem' }}>
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
                    border: '1.5px solid #d6cebf',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#78350f', marginBottom: '0.35rem' }}>
                  Course Code (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ECON-401"
                  value={newDisciplineCode}
                  onChange={(e) => setNewDisciplineCode(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1.5px solid #d6cebf',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: '1px solid #e7e2d7',
                    backgroundColor: '#ffffff',
                    color: '#78716c',
                    fontWeight: 600,
                    fontSize: '0.825rem',
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#78350f',
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.825rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer'
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
