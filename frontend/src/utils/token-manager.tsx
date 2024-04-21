export const TokenManager = {
  getAccessToken: (): string | null => localStorage.getItem('access'),
  saveAccessToken: (token: string): void => {
    localStorage.setItem('access', token);
  },
  removeAccessToken: () => localStorage.removeItem('access'),

  getRefreshToken: (): string | null => localStorage.getItem('refresh'),
  saveRefreshToken: (token: string): void => {
    localStorage.setItem('refresh', token);
  },
  removeRefreshToken: () => localStorage.removeItem('refresh'),
};
