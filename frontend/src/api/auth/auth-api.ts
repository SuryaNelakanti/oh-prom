import { useMutation } from '@tanstack/react-query';

import { api } from '../base-api';
import {
  LoginPayload,
  LogoutPayload,
  RefreshPayload,
  RegisterPayload,
} from './types';

// Api.
export const registerRequest = async (payload: RegisterPayload) =>
  await api.post('/register/', payload);

export const loginRequest = async (payload: LoginPayload) =>
  await api.post('/login/', payload);

export const logoutRequest = async (payload: LogoutPayload) =>
  await api.post('/logout/', payload);

export const refreshTokenRequest = async (payload: RefreshPayload) =>
  await api.post('/token/refresh/', payload);

// Hooks.
export const useLoginRequest = () =>
  useMutation({
    mutationFn: async (payload: LoginPayload) => loginRequest(payload),
  });

export const useRegisterRequest = () =>
  useMutation({
    mutationFn: async (payload: RegisterPayload) => registerRequest(payload),
  });

export const useLogoutRequest = () =>
  useMutation({
    mutationFn: async (payload: LogoutPayload) => logoutRequest(payload),
  });
