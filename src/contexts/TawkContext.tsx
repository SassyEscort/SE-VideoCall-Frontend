'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

interface TawkContextType {
  isLoaded: boolean;
  showWidget: () => void;
  hideWidget: () => void;
  initializeChat: () => void;
  maximizeChat: () => void;
  minimizeChat: () => void;
  toggleChat: () => void;
  onVisitorMessage: (callback: (message: any) => void) => void;
  onAgentMessage: (callback: (message: any) => void) => void;
  onSystemMessage: (callback: (message: any) => void) => void;
}

const TawkContext = createContext<TawkContextType | undefined>(undefined);

const TawkProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const initializeChat = () => {
    if (!isLoaded && typeof window !== 'undefined' && !pathname.includes('/admin')) {
      const tawkScript = document.createElement('script');
      tawkScript.src = 'https://embed.tawk.to/66fbef6be5982d6c7bb726ab/1i941ug0n';
      tawkScript.async = true;
      tawkScript.onload = () => setIsLoaded(true);
      document.body.appendChild(tawkScript);
    }
  };

  useEffect(() => {
    if (isLoaded && (window as any).Tawk_API && session?.user) {
      window.Tawk_API.onLoad = function () {
        window.Tawk_API.setAttributes({
          name: session?.user?.name,
          email: session?.user?.email
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
        initializeChat,
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

export default TawkProvider;
