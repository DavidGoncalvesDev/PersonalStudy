import React, { useState, useEffect } from 'react';
import { User, LogIn, Check, X, LogOut, ArrowRight } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

interface UserLoginModalProps {
  isOpen: boolean;
  currentUser: string | null;
  onLogin: (username: string) => void;
  onLogout?: () => void;
  onClose?: () => void;
  canClose?: boolean;
}

export const UserLoginModal: React.FC<UserLoginModalProps> = ({
  isOpen,
  currentUser,
  onLogin,
  onLogout,
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
        setRecentUsers([]);
      }
    } catch {
      setRecentUsers([]);
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
      setErrorMsg('Please enter your name or student key.');
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

  const handleSignOut = () => {
    playClickSound();
    if (onLogout) {
      onLogout();
      setUsernameInput('');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(69, 26, 3, 0.65)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.75rem',
      zIndex: 300
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #d6cebf',
        maxWidth: '420px',
        width: '100%',
        padding: '1.5rem 1.25rem',
        boxShadow: '0 20px 45px rgba(120, 53, 15, 0.25)',
        position: 'relative',
        boxSizing: 'border-box'
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
              top: '12px',
              right: '12px',
              background: 'none',
              border: 'none',
              color: '#78716c',
              cursor: 'pointer',
              padding: '0.35rem',
              display: 'flex',
              alignItems: 'center'
            }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        )}

        {/* Header Icon & Title */}
        <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: '#fffbeb',
            border: '2px solid #fde68a',
            margin: '0 auto 0.65rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <User size={24} color="#78350f" />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#451a03', margin: '0 0 0.35rem' }}>
            {currentUser ? 'Switch Study Profile' : 'Welcome to David Study'}
          </h2>
          <p style={{ fontSize: '0.8rem', color: '#78716c', margin: 0, lineHeight: 1.45 }}>
            {currentUser
              ? 'Enter or switch to another student name to load their isolated curriculum progress and quiz history.'
              : 'Enter your name to load and track your individual progress, quiz scores, and exam stats on this device.'}
          </p>
        </div>

        {/* Active Profile Info with Sign Out Option */}
        {currentUser && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 0.75rem',
            backgroundColor: '#fdfbf7',
            border: '1px solid #e7e2d7',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', minWidth: 0 }}>
              <span style={{ fontSize: '0.74rem', color: '#78716c' }}>Profile:</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#78350f', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentUser}
              </span>
            </div>
            {onLogout && (
              <button
                type="button"
                onClick={handleSignOut}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '6px',
                  border: '1px solid #fca5a5',
                  backgroundColor: '#fef2f2',
                  color: '#b91c1c',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <LogOut size={12} />
                <span>Log Out</span>
              </button>
            )}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: '#78350f', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
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
                padding: '0.65rem 0.8rem',
                borderRadius: '8px',
                border: errorMsg ? '1.5px solid #ef4444' : '1.5px solid #d6cebf',
                backgroundColor: '#fffdfa',
                fontSize: '0.92rem',
                fontWeight: 600,
                color: '#1c1917',
                outline: 'none'
              }}
            />
            {errorMsg && (
              <p style={{ margin: '0.25rem 0 0', fontSize: '0.72rem', color: '#dc2626', fontWeight: 600 }}>
                {errorMsg}
              </p>
            )}
          </div>

          {/* Quick Select from Recent Profiles on this device */}
          {recentUsers.length > 0 && (
            <div>
              <span style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: '#a8a29e', marginBottom: '0.3rem' }}>
                Recent Profiles on this Device:
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                {recentUsers.map(name => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => handleSelectRecent(name)}
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '999px',
                      border: name.toLowerCase() === (currentUser || '').toLowerCase() ? '1.5px solid #78350f' : '1px solid #d6cebf',
                      backgroundColor: name.toLowerCase() === (currentUser || '').toLowerCase() ? '#fef3c7' : '#ffffff',
                      color: '#78350f',
                      fontSize: '0.74rem',
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
              marginTop: '0.35rem',
              padding: '0.7rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#78350f',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.88rem',
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
