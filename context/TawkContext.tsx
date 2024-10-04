'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';

interface TawkContextType {
  isLoaded: boolean;
  showWidget: () => void;
  hideWidget: () => void;
  maximizeChat: () => void;
  minimizeChat: () => void;
  toggleChat: () => void;
  onVisitorMessage: (callback: (message: any) => void) => void;
  onAgentMessage: (callback: (message: any) => void) => void;
  onSystemMessage: (callback: (message: any) => void) => void;
}

const TawkContext = createContext<TawkContextType | undefined>(undefined);

export const TawkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { session } = useAuthContext();

  useEffect(() => {
    const loadTawk = () => {
      const tawkScript = document.createElement('script');
      tawkScript.src = 'https://embed.tawk.to/66fbef6be5982d6c7bb726ab/1i941ug0n';
      tawkScript.async = true;
      tawkScript.onload = () => setIsLoaded(true);
      document.body.appendChild(tawkScript);

      return () => {
        document.body.removeChild(tawkScript);
      };
    };
    if (typeof window !== 'undefined' && !window.location.pathname.includes('/admin')) {
      loadTawk();
    }
  }, []);

  useEffect(() => {
    if (isLoaded && (window as any).Tawk_API && session?.user) {
      window.Tawk_API.onLoad = function () {
        window.Tawk_API.setAttributes({
          name: 'Mayur',
          email: 'mayur.divtech@yopmail.com'
        });
      };
    }
  }, [isLoaded, session?.user]);

  const onVisitorMessage = (callback: (message: any) => void) => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.onChatMessageVisitor = callback;
    }
  };

  const onAgentMessage = (callback: (message: any) => void) => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.onChatMessageAgent = callback;
    }
  };

  const onSystemMessage = (callback: (message: any) => void) => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.onChatMessageSystem = callback;
    }
  };

  const showWidget = () => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.showWidget();
    }
  };

  const hideWidget = () => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.hideWidget();
    }
  };

  const maximizeChat = () => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.maximize();
    }
  };

  const minimizeChat = () => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.minimize();
    }
  };

  const toggleChat = () => {
    if (isLoaded && (window as any).Tawk_API) {
      (window as any).Tawk_API.toggle();
    }
  };

  return (
    <TawkContext.Provider
      value={{
        isLoaded,
        showWidget,
        hideWidget,
        maximizeChat,
        minimizeChat,
        toggleChat,
        onVisitorMessage,
        onAgentMessage,
        onSystemMessage
      }}
    >
      {children}
    </TawkContext.Provider>
  );
};

export const useTawk = () => {
  const context = useContext(TawkContext);
  if (context === undefined) {
    throw new Error('useTawk must be used within a TawkProvider');
  }
  return context;
};
