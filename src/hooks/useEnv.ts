export function useEnv() {
  const { VITE_BASE_API } = import.meta.env
  return {
    VITE_BASE_API
  }
}