import { getSession } from 'next-auth/react';
import { getAuthUser } from './authOptions';

export type SessionAuth = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  picture?: string | null | undefined;
};

export type SessionResponse = {
  user: SessionAuth;
};

export const getUserTokenServer = async () => {
  const details = await getUserDataServer();
  return details.token;
};

export const getUserDataServer = async () => {
  const session = await getAuthUser();
  const details = session?.user?.image;
  const data = JSON.parse(details!);
  return data;
};

export const getUserTokenClient = async () => {
  const details = await getUserDataClient();
  return details.token;
};

export const getUserDataClient = async () => {
  const session = await getSession();
  if (session) {
    const sessionNew = session as SessionResponse;
    const details = sessionNew?.user?.picture;
    if (details) {
      const data = JSON.parse(details!);
      return data;
    } else {
      return null;
    }
  }
};

export const getLoggedInUser = async () => {
  const session = await getAuthUser();
  return session;
};

export const generateDeviceSignature = async (): Promise<string> => {
  // Collect various device attributes
  const userAgent: string = navigator.userAgent;
  const screenResolution: string = `${screen.width}x${screen.height}x${screen.colorDepth}`;
  const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const language: string = navigator.language;
  const plugins: string = Array.from(navigator.plugins)
    .map((plugin) => plugin.name)
    .join(',');

  // Generate a canvas fingerprint
  function getCanvasFingerprint(): string {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.textBaseline = 'top';
      ctx.font = '14px Arial';
      ctx.fillStyle = '#f60';
      ctx.fillRect(125, 1, 62, 20);
      ctx.fillStyle = '#069';
      ctx.fillText('DeviceFingerprint', 2, 15);
      ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
      ctx.fillText('DeviceFingerprint', 4, 17);
    }
    return canvas.toDataURL();
  }

  // Generate a WebGL fingerprint
  function getWebGLFingerprint(): string {
    const canvas: HTMLCanvasElement = document.createElement('canvas');
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    if (!gl) return '';
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const vendor: string = debugInfo ? gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) : '';
    const renderer: string = debugInfo ? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) : '';
    return `${vendor}~${renderer}`;
  }

  const canvasFingerprint: string = getCanvasFingerprint();
  const webglFingerprint: string = getWebGLFingerprint();

  // Combine all attributes
  const data: string = `${userAgent}~${screenResolution}~${timezone}~${language}~${plugins}~${canvasFingerprint}~${webglFingerprint}`;

  // Hash the combined data using SHA-256
  const hashBuffer: ArrayBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(data));
  const hashArray: number[] = Array.from(new Uint8Array(hashBuffer));
  const deviceSignature: string = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');

  return deviceSignature;
};
