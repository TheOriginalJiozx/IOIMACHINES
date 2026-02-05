export default function getApiBase() {
  if (typeof window !== 'undefined' && window.__APP_CONFIG__ && window.__APP_CONFIG__.apiBase) {
    const v = window.__APP_CONFIG__.apiBase;
    if (v && v.trim()) return v;
  }
  if (process.env.REACT_APP_API_BASE) return process.env.REACT_APP_API_BASE;
  return '/api';
}
