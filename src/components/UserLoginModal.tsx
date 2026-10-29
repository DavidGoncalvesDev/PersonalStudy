import React, { useState, useEffect } from 'react';
import { User, LogIn, Check, X, Users, ArrowRight } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface UserLoginModalProps {
  isOpen: boolean;
  currentUser: string | null;
  onLogin: (username: string) => void;
  onClose?: () => void;
  canClose?: boolean;
}

export const UserLoginModal: React.FC<UserLoginModalProps> = ({
  isOpen,
  currentUser,
  onLogin,
  onClose,
  canClose = false
}) => {
  const [usernameInput, setUsernameInput] = useState<string>('');
  const [recentUsers, setRecentUsers] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    try {
      const stored = localStorage.getItem('david_study_recent_users');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setRecentUsers(parsed);
        }
      } else {
        setRecentUsers(['David']);
      }
    } catch {
      setRecentUsers(['David']);
    }
  }, [isOpen]);

  useEffect(() => {
    if (currentUser) {
      setUsernameInput(currentUser);
    } else {
      setUsernameInput('');
    }
    setErrorMsg('');
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = usernameInput.trim();
    if (!trimmed) {
      setErrorMsg('Please enter a name or username.');
      return;
    }
    if (trimmed.length < 2) {
      setErrorMsg('Name must be at least 2 characters.');
      return;
    }

    playClickSound();

    // Update recent users list on device
    try {
      const updated = Array.from(new Set([trimmed, ...recentUsers])).slice(0, 5);
      localStorage.setItem('david_study_recent_users', JSON.stringify(updated));
      setRecentUsers(updated);
    } catch {
      // Ignore
    }

    onLogin(trimmed);
  };

  const handleSelectRecent = (name: string) => {
    playClickSound();
    setUsernameInput(name);
    onLogin(name);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(69, 26, 3, 0.55)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      zIndex: 300
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #d6cebf',
        maxWidth: '420px',
        width: '100%',
        padding: '1.85rem 1.65rem',
        boxShadow: '0 20px 45px rgba(120, 53, 15, 0.2)',
        position: 'relative'
      }}>
        {/* Close Button if user is already signed in */}
        {canClose && onClose && (
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              background: 'none',
              border: 'none',
              color: '#78716c',
              cursor: 'pointer',
              padding: '0.2rem',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={18} />
          </button>
        )}

        {/* Header Icon & Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.35rem' }}>
          <div style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            backgroundColor: '#fffbeb',
            border: '2px solid #fde68a',
            margin: '0 auto 0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={26} color="#78350f" />
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#451a03', margin: '0 0 0.35rem' }}>
            {currentUser ? 'Switch Study Profile' : 'Welcome to David Study'}
          </h2>
          <p style={{ fontSize: '0.82rem', color: '#78716c', margin: 0, lineHeight: 1.5 }}>
            {currentUser
              ? 'Enter another student name to load their isolated curriculum progress, quiz scores, and streak data.'
              : 'Enter your name to load and save your personal progress, quiz scores, and sudden death streaks on this device.'}
          </p>
        </div>

        {/* Active Profile Info */}
        {currentUser && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.55rem 0.85rem',
            backgroundColor: '#fdfbf7',
            border: '1px solid #e7e2d7',
            borderRadius: '8px',
            marginBottom: '1.15rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
              <span style={{ fontSize: '0.78rem', color: '#78716c' }}>Current Profile:</span>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#78350f' }}>{currentUser}</span>
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#15803d', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
              <Check size={12} strokeWidth={3} /> Active
            </span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              Student Name / Key
            </label>
            <input
              type="text"
              value={usernameInput}
              onChange={(e) => {
                setUsernameInput(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="e.g. David"
              autoFocus
              style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '0.65rem 0.85rem',
                borderRadius: '8px',
                border: errorMsg ? '1.5px solid #ef4444' : '1.5px solid #d6cebf',
                backgroundColor: '#fffdfa',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#1c1917',
                outline: 'none'
              }}
            />
            {errorMsg && (
              <p style={{ margin: '0.3rem 0 0', fontSize: '0.74rem', color: '#dc2626', fontWeight: 600 }}>
                {errorMsg}
              </p>
            )}
          </div>

          {/* Quick Select from Recent Profiles */}
          {recentUsers.length > 0 && (
            <div>
              <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, color: '#a8a29e', marginBottom: '0.3rem' }}>
                Quick Select Profile:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {recentUsers.map(name => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handleSelectRecent(name)}
                    style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '999px',
                      border: name.toLowerCase() === (currentUser || '').toLowerCase() ? '1.5px solid #78350f' : '1px solid #d6cebf',
                      backgroundColor: name.toLowerCase() === (currentUser || '').toLowerCase() ? '#fef3c7' : '#ffffff',
                      color: '#78350f',
                      fontSize: '0.76rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    👤 {name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            type="submit"
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#78350f',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.45rem',
              boxShadow: '0 4px 12px rgba(120, 53, 15, 0.25)',
              transition: 'background-color 0.15s ease'
            }}
          >
            <span>{currentUser ? 'Switch to this Profile' : 'Start Studying'}</span>
            <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};
